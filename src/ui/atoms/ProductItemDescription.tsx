import React from "react";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { formatPrice } from "@/ui/utlis";

interface ProductListItemDescriptionProps {
	product: {
		id: string;
		name: string;
		description: string;
		price: number;
		categories: Array<{ name: string }>;
		images: Array<{ url: string }>;
	};
	className?: string;
}

export const ProductItemDescription = ({ product, className }: ProductListItemDescriptionProps) => {
	if (!product) return notFound();

	return (
		<div className={clsx("mt-3 flex max-w-xs flex-col justify-start", className)}>
			<div className="flex justify-between">
				<h1 className="flex justify-start text-xl font-bold text-gray-500">
					{product && product.name}
				</h1>
				<p className="flex justify-start text-sm text-gray-300">
					<span className="sr-only">Category</span>
					{product.categories[0] && product.categories[0].name}
				</p>
			</div>
			<div className="mt-4">
				<p className="flex justify-start">{product.description}</p>
				{/* {product.rating && (
					<div className="mt-4">
						Rating: {product?.rating?.rate}{" "}
						<span className="text-sm text-gray-200">({product.rating.count})</span>
					</div>
				)} */}
				<p className="mt-4 text-sm text-gray-500">
					<span className="sr-only">Price</span> {formatPrice(product.price / 100)}
				</p>
			</div>
		</div>
	);
};
