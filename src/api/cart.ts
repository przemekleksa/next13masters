import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
	CartSetProductQuantityDocument,
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
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			cache: "no-store",
			next: { tags: ["cart"] },
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

function createCart() {
	return executeGraphql({ query: CartCreateDocument, cache: "no-store", variables: {} });
}

export async function addToCart(orderId: string, productId: string) {
	const cart = await getCartFromCookies();

	const productExistsInCart = cart?.orderItems.some((item) => item.product!.id === productId);

	if (productExistsInCart) {
		cart?.orderItems.map((item) => {
			return executeGraphql({
				query: CartSetProductQuantityDocument,
				variables: {
					itemId: item.id,
					quantity: item.quantity + 1,
					total: item.total * item.quantity,
				},
			});
		});
		return;
	}

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
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
}
