import React from "react";

import { notFound } from "next/navigation";
import { type CollectionItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

interface CollectionListProps {
	collection: CollectionItemFragment[];
	pageNumber: string;
}

export const CollectionList = ({ collection, pageNumber }: CollectionListProps) => {
	if (!collection[0]) {
		notFound();
		return null;
	}

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl" role="heading">
					{collection[0].name}
					{collection[0].description}
				</h1>
				{/* <div></div> */}
			</div>

			<ProductList products={collection[0].products} currentPage={Number(pageNumber)} />
		</div>
	);
};
