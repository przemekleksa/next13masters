import React from "react";
import clsx from "clsx";
import { formatPrice } from "@/ui/utlis";
import { type Rating } from "@/ui/types";

interface ProductListItemDescriptionProps {
	product: {
		name: string;
		category: string;
		price: number;
		longDescription: string;
		description: string;
		rating: Rating;
	};
	className?: string;
}

export const ProductItemDescription = ({ product, className }: ProductListItemDescriptionProps) => {
	return (
		<div className={clsx("mt-3 flex max-w-xs flex-col justify-start", className)}>
			<div className="flex justify-between">
				<h2 className="flex justify-start text-sm font-bold text-gray-500">{product.name}</h2>
				<p className="flex justify-start text-sm text-gray-300">
					<span className="sr-only">Category</span>
					{product.category}
				</p>
			</div>
			<div className="mt-4">
				<p className="flex justify-start">{product.description}</p>
				{product.rating && (
					<div className="mt-4">
						Rating: {product?.rating?.rate}{" "}
						<span className="text-sm text-gray-200">({product.rating.count})</span>
					</div>
				)}
				<p className="mt-4 text-sm text-gray-500">
					<span className="sr-only">Price</span> {formatPrice(product.price / 100)}
				</p>
			</div>
		</div>
	);
};
