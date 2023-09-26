"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	// exact = false,
	className = "hover:text-blue-600",
	activeClassName = "border-b-2 border-yellow-200 text-yellow-200",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	if (pathname === null) {
		return null; //
	}

	// console.log(pathname, href);

	function comparePathnameAndHref(pathname: string, href: string) {
		const pathnameParts = pathname.split("/");
		const hrefParts = href.split("/");
		if (pathnameParts.length < 3 || hrefParts.length < 3) {
			return false;
		}

		return pathnameParts[2] === hrefParts[2];
	}

	// const isActive = exact ? pathname === href : pathname.startsWith(`${href}/`);
	const isActive = comparePathnameAndHref(pathname, href) || pathname === href;

	return (
		<Link href={href} className={`${className} ${isActive && activeClassName}`}>
			{children}
		</Link>
	);
};
