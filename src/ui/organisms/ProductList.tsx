import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { Pagination } from "@/ui/atoms/Pagination";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListProps {
	products: ProductListItemFragment[];
	showMore?: boolean;
	currentPage: number;
	isPagination?: boolean;
}

export const ProductList = ({
	products,
	showMore,
	currentPage,
	isPagination = true,
}: ProductListProps) => {
	const totalPages = 10;
	const basePath = "products/";
	return (
		<>
			<ul className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3" data-testid="products-list">
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
			{isPagination && (
				<Pagination totalPages={totalPages} basePath={basePath} currentPage={currentPage} />
			)}
			{showMore && <button className="mt-6 rounded bg-black px-6 py-3 text-white">See More</button>}
		</>
	);
};
