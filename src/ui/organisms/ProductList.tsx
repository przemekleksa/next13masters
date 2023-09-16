import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItem } from "@/ui/types";
import { Pagination } from "@/ui/atoms/Pagination";

interface ProductListProps {
	products: ProductItem[];
	showMore?: boolean;
	currentPage: number;
}

export const ProductList = ({ products, showMore, currentPage }: ProductListProps) => {
	const totalPages = 10;
	const basePath = "products/";
	return (
		<>
			<ul className="grid grid-cols-3 grid-rows-2 gap-4" data-testid="products-list">
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
			<Pagination totalPages={totalPages} basePath={basePath} currentPage={currentPage} />
			{showMore && <button className="mt-6 rounded bg-black px-6 py-3 text-white">See More</button>}
		</>
	);
};
