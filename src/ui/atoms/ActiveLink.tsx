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
	exact = false,
	className = "hover:text-blue-600",
	activeClassName = "border-b-2 border-yellow-200 text-yellow-200",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	if (pathname === null) {
		return null; //
	}

	const isActive = exact ? pathname === href : pathname.startsWith(`${href}/`);

	return (
		<Link href={href} className={`${className} ${isActive && activeClassName}`}>
			{children}
		</Link>
	);
};
