import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchProduct } from "@/ui/atoms/SearchProduct";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-Shirts" },
	{ href: "/categories/hoodies", label: "Hoodies" },
	{ href: "/categories/accessories", label: "Accessories" },
];

export const NavBar = async () => {
	// const cart = await getCartFromCookies();
	// const quantity = cart?.orderItems.length ?? 0;

	const env = process.env.NODE_ENV;
	if (env == "development") {
		// do something
	} else if (env == "production") {
		// do something
	}

	return (
		<div className="flex items-center" data-testId="navigation" role="navigation">
			<ul className="mx-4  flex justify-end gap-3">
				{navLinks.map(({ href, label }) => {
					return (
						<li key={href} className="cursor-pointer text-white ">
							<ActiveLink href={href as Route<string>} exact>
								{label}
							</ActiveLink>
						</li>
					);
				})}
				{env == "development" ? <div>dev</div> : <div>prod</div>}
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
			<SearchProduct searchParams={{ search: "" }} />

			{/* <div className="flex"></div> */}
		</div>
	);
};
