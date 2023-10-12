import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsListDocument, ProductsGetByCollectionDocument } from "@/gql/graphql";

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionDocument,
		variables: {
			slug: collectionSlug,
		},
	});
	return graphqlResponse.collections;
};

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsListDocument, variables: {} });
	return graphqlResponse.collections;
};
