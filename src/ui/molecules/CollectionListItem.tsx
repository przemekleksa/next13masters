import React from "react";
import { type Route } from "next";
import { type CollectionsListFragmentFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

interface CollectionListItemProps {
	collection: CollectionsListFragmentFragment;
}

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
	return (
		<li key={collection.id} className="flex flex-col">
			<ActiveLink href={`/collections/${collection.slug}` as Route<string>}>
				<h2 className="text-xl">{collection.name}</h2>
				<p className="h-14 text-sm text-gray-500">{collection.description}</p>

				<ProductCoverImage src={collection.image.url} alt={collection.name} />
			</ActiveLink>
		</li>
	);
};
