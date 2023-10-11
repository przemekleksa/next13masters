import React from "react";
import { redirect } from "next/navigation";

import { type Metadata } from "next";

import { getCartFromCookies } from "@/api/cart";
import { formatPrice } from "@/ui/utlis";
import { ChangeProductQuantity } from "@/app/cart/IncrementProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { handlePaymentAction } from "@/app/cart/actions";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: "Cart",
		description: "see your cart",
		openGraph: { title: "cart", description: "see your cart" },
	};
};

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart || cart.orderItems.length === 0) {
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
						<th></th>
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
									<ChangeProductQuantity quantity={item.quantity} itemId={item.id} />
								</td>
								<td>{formatPrice((item.product.price / 100) * item.quantity)}</td>
								<td>
									<RemoveButton itemId={item.id} />
								</td>
							</tr>
						);
					})}
					<tr>
						<td colSpan={3} className="flex justify-end">
							hehe
						</td>
					</tr>
				</tbody>
			</table>
			<form action={handlePaymentAction}>
				<button className="mt-4 rounded-xl border bg-green-700 p-6 text-white transition-colors hover:bg-green-500">
					Checkout
				</button>
			</form>
		</div>
	);
}
