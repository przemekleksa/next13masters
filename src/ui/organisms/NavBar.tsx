import React from "react";
import { ShoppingCart } from "lucide-react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-Shirts" },
	{ href: "/categories/hoodies", label: "Hoodies" },
	{ href: "/categories/accessories", label: "Accessories" },
];

export const NavBar = () => {
	return (
		<div className="fixed flex w-full items-center justify-between bg-red-600 pb-2 ">
			<ul className="mx-4 mt-2 flex justify-end gap-3">
				{navLinks.map(({ href, label }) => {
					return (
						<li key={href} className="cursor-pointer text-white ">
							<ActiveLink href={href as Route<string>} exact>
								{label}
							</ActiveLink>
						</li>
					);
				})}
				{/* <li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/" exact>
						Home
					</ActiveLink>
				</li>
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/products" exact>
						All
					</ActiveLink>
				</li>
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/products/t-shirts" exact>
						T-shirts
					</ActiveLink>
				</li>
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/products/hoodies" exact>
						Hoodies
					</ActiveLink>
				</li>
				<li className="cursor-pointer text-blue-300 hover:text-blue-600">
					<ActiveLink href="/products/accessories" exact>
						Accessories
					</ActiveLink>
				</li> */}
			</ul>
			<ShoppingCart className="mx-4 h-6 w-6 flex-shrink-0" />
		</div>
	);
};
