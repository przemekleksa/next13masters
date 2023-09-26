import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { Pagination } from "@/ui/atoms/Pagination";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListProps {
	products: ProductListItemFragment[];
	currentPage: number;
	isPagination?: boolean;
	dataTestId?: string;
}

export const ProductList = ({
	products,
	currentPage,
	isPagination = true,
	dataTestId = "products-list",
}: ProductListProps) => {
	const totalPages = 6;
	const basePath = "products/";
	return (
		<>
			<ul className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3" data-testid={dataTestId}>
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
			{isPagination && (
				<Pagination totalPages={totalPages} basePath={basePath} currentPage={currentPage} />
			)}
		</>
	);
};
