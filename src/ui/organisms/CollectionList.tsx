import React from "react";

import { notFound } from "next/navigation";
import { type CollectionItemFragment } from "@/gql/graphql";

interface CollectionListProps {
	collection: CollectionItemFragment;
}

export const CollectionList = ({ collection }: CollectionListProps) => {
	console.log(collection);
	if (!collection) {
		notFound();
		return null;
	}
	console.log(collection[0]);
	return (
		<>
			elo
			{collection[0] && <h1>{collection[0].name}</h1>}
		</>
	);
};
