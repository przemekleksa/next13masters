import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItem } from "@/ui/types";

interface ProductListProps {
	products: ProductItem[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="grid grid-cols-2 grid-rows-2 gap-4" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem product={product} key={product.id} />
			))}
		</ul>
	);
};
