"use client";
import Link from "next/link";
import React from "react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	basePath: string;
}

export const Pagination = ({ currentPage, totalPages = 20, basePath }: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="pagination flex w-1/2 justify-between rounded" aria-label="pagination">
			{currentPage > 1 && (
				<button disabled={currentPage === 1}>
					<Link href={`/${basePath}${currentPage - 1}`}>Previous</Link>
				</button>
			)}

			{pages.map((page) => (
				<button
					key={page}
					className={
						currentPage === page ? "border bg-black p-2 text-white " : "hover:text-red-300"
					}
				>
					{currentPage === page ? (
						<ActiveLink href={`/products/${page}` as Route<string>}>{page}</ActiveLink>
					) : (
						<Link href={`/products/${page}` as Route<string>}>{page}</Link>
					)}
				</button>
			))}

			{currentPage !== totalPages && (
				<button disabled={currentPage === totalPages}>
					<Link href={`/${basePath}${currentPage + 1}`}>Next</Link>
				</button>
			)}
		</div>
	);
};
