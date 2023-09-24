import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionDocument, {
		slug: collectionSlug,
	});
	return graphqlResponse.collections;
};
