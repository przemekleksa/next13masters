"use client";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

interface PaginationProps {
	currentPage: number;
	totalPages?: number;
	basePath: string;
	category?: string;
}

export const Pagination = ({
	currentPage,
	totalPages = 10,
	basePath,
	category,
}: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	const path = category ? `categories/${category}/` : basePath;

	return (
		<div className="pagination flex w-1/2 justify-evenly rounded" aria-label="pagination">
			{currentPage > 1 && (
				<button disabled={currentPage === 1}>
					<Link href={`/${path}${currentPage - 1}`}>Previous</Link>
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
						<ActiveLink href={`/${path}${page}`}>{page}</ActiveLink>
					) : (
						<Link href={`/${path}${page}`}>{page}</Link>
					)}
				</button>
			))}

			{currentPage !== totalPages && (
				<button disabled={currentPage === totalPages}>
					<Link href={`/${path}${isNaN(currentPage) ? 1 : currentPage + 1}`}>Next</Link>
				</button>
			)}
		</div>
	);
};
