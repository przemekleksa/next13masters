import React from "react";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const NavBar = () => {
	return (
		<div className="fixed flex w-full items-center justify-between bg-gray-200 pb-2 opacity-90">
			<ul className="mx-4 mt-2 flex justify-end gap-3">
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/" exact>
						Home
					</ActiveLink>
				</li>
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/products" exact>
						All
					</ActiveLink>
				</li>
			</ul>
			<ShoppingCart className="mx-4 h-6 w-6 flex-shrink-0" />
		</div>
	);
};
