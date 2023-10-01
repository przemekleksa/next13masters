import React from "react";
import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
import { type Metadata } from "next";
import { getCartFromCookies } from "@/api/cart";
import { formatPrice } from "@/ui/utlis";
import { IncrementProductQuantity } from "@/app/cart/IncrementProductQuantity";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: "Cart",
		description: "see your cart",
		openGraph: { title: "cart", description: "see your cart" },
	};
};

export default async function CartPage() {
	const cart = await getCartFromCookies();
	// console.log(cart);
	// const cartId = cookies().get("cartId")?.value;
	// console.log(cartId);
	// // if (!cartId) {
	// 	redirect("/");
	// }

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10">
			<h1>Order #{cart.id} summary</h1>
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4 text-center">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id + Math.random()} className="gap-3">
								<td>{item.product.name}</td>
								<td className="flex items-center justify-center text-center">
									<IncrementProductQuantity quantity={item.quantity} itemId={item.id} />
								</td>
								<td>{formatPrice(item.product.price / 100)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
