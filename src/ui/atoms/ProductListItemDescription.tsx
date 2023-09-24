import React from "react";
import { formatPrice } from "@/ui/utlis";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListItemDescriptionProps {
	product: ProductListItemFragment;
}

export const ProductListItemDescription = ({
	product: { categories, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-3 flex  justify-evenly">
			<div>
				<h3 className="text-sm font-bold text-gray-500">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-300">
						<span className="sr-only">Category</span>
						{categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-500">
				<span className="sr-only">Price</span> {formatPrice(price / 100)}
			</p>
		</div>
	);
};
