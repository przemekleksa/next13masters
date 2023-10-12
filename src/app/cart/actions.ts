"use server";

import Stripe from "stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { getCartFromCookies } from "@/api/cart";

export const changeItemQuantity = (itemId: string, quantity: number, price: number) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity, total: price * quantity },
	});
};

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: { itemId },
	});
};

export async function handlePaymentAction() {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("stripe secret key not found");
	}

	const cart = await getCartFromCookies();

	if (!cart) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	}); // 2022-11-15

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "blik", "p24"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product?.name || "",
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("checkout session url not found");
	}
	cookies().set("cartId", "", {
		maxAge: -1,
		httpOnly: true,
		sameSite: "lax",
		// secure: true, // Uncomment if the original cookie was secure
	});

	redirect(checkoutSession.url);
}
