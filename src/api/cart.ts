import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cardId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
		// secure: true,
	});
	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cardId")?.value;
	if (cartId) {
		const cart = await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } });
		if (cart.order) {
			return cart.order;
		}
	}

	// const cartId = cookies().get("cartId")?.value;
	// const cart = cartId
	// 	? await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } })
	// 	: null;
	// if (cart?.order) {
	// 	return cart.order;
	// }
	// // const count = cart?.order?.orderItems.length || 0;
}

function createCart() {
	return executeGraphql({ query: CartCreateDocument, variables: {} });
}

export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
		next: {
			tags: ["cart"],
		},
	});
}
