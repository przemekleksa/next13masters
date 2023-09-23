import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { Pagination } from "@/ui/atoms/Pagination";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListProps {
	products: ProductListItemFragment[];
	showMore?: boolean;
	currentPage: number;
	totalPages?: number;
	category?: string;
	hidePagination?: boolean;
}

export const ProductList = ({
	products,
	showMore,
	currentPage,
	totalPages,
	category,
	hidePagination,
}: ProductListProps) => {
	const basePath = "products/";
	console.log(products);
	return (
		<>
			<ul className="grid grid-cols-3 grid-rows-2 gap-4" data-testid="products-list">
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
			{!hidePagination && (
				<Pagination
					totalPages={totalPages}
					basePath={basePath}
					currentPage={currentPage}
					category={category}
				/>
			)}
			{showMore && <button className="mt-6 rounded bg-black px-6 py-3 text-white">See More</button>}
		</>
	);
};
