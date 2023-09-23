import React from "react";
import { formatPrice } from "@/ui/utlis";
import { type FragmentType, graphql, getFragmentData } from "@/gql";

interface ProductListItemDescriptionProps {
	product: FragmentType<typeof ProductListItemDescription_Product>;
}

const ProductListItemDescription_Product = graphql(/* GraphQL */ `
	fragment ProductListItemDescription_Product on Product {
		name
		categories(first: 1) {
			name
		}
		price
	}
`);

export const ProductListItemDescription = (props: ProductListItemDescriptionProps) => {
	const { categories, name, price } = getFragmentData(
		ProductListItemDescription_Product,
		props.product,
	);
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
