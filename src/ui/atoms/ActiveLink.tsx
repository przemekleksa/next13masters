"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";
import { type ReactNode } from "react";

interface ActiveLinkProps {
	// href: Route<T> | URL;
	href: Route;
	children: ReactNode;
	exact: boolean;
}

export const ActiveLink = ({ href, children, exact }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				"cursor-pointer text-blue-300 hover:text-blue-600",
				isActive && "text-orange-500",
			)}
		>
			{children}
		</Link>
	);
};
