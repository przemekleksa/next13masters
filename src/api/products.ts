import { executeGraphql } from "@/api/graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products;
};

export const getProductDetailsById = async (productId: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id: productId });
	return graphqlResponse.product;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	return graphqlResponse.categories[0]?.products;
};
