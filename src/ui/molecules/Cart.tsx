import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { type Route } from "next";
import { getCartFromCookies } from "@/api/cart";

export const Cart = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length ?? 0;

	// const env = process.env.NODE_ENV;
	// if (env == "development") {
	// 	// do something
	// } else if (env == "production") {
	// 	// do something
	// }

	return (
		<Link href={"/cart" as Route<string>} className="flex">
			<div>{quantity}</div>
			<ShoppingCart className="mx-4 h-6 w-6 flex-shrink-0" />
		</Link>
	);
};
