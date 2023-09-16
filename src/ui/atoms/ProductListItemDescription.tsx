import React from "react";
import { formatPrice } from "@/ui/utlis";

interface ProductListItemDescriptionProps {
	product: {
		name: string;
		category: string;
		price: number;
	};
}

export const ProductListItemDescription = ({ product }: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-3 flex  justify-evenly">
			<div>
				<h3 className="text-sm font-bold text-gray-500">{product.name}</h3>
				<p className="text-sm text-gray-300">
					<span className="sr-only">Category</span>
					{product.category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-500">
				<span className="sr-only">Price</span> {formatPrice(product.price / 100)}
			</p>
		</div>
	);
};
