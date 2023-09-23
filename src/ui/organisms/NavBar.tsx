import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function NavBar() {
	return (
		<div className="fixed flex w-full items-center justify-between border bg-white pb-3">
			<div className="flex items-center justify-between">
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
					<li className="cursor-pointer text-blue-300 hover:text-blue-600">
						<ActiveLink href="/products/t-shirts/1" exact>
							T-shirts
						</ActiveLink>
					</li>
					<li className="cursor-pointer text-blue-300 hover:text-blue-600">
						<ActiveLink href="/products/hoodies/1" exact>
							Hoodies
						</ActiveLink>
					</li>
					{/* <li className="cursor-pointer text-blue-300 hover:text-blue-600">
						<ActiveLink href="/products/computers/1" exact>
							Computers
						</ActiveLink>
					</li> */}
					<li className="cursor-pointer text-blue-300 hover:text-blue-600">
						<ActiveLink href="/products/accessories/1" exact>
							Accessories
						</ActiveLink>
					</li>
				</ul>
			</div>
			<div>
				<div>
					<Link href="/cart">
						<ShoppingCart />
					</Link>
				</div>
			</div>
		</div>
	);
}
