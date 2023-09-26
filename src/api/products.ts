import { executeGraphql } from "@/api/graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductVariantBySizeAndColorDocument,
	ProductsGetListPageDocument,
	ProductsSearchListDocument,
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

export const getProductVariantsById = async (productId: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(ProductVariantBySizeAndColorDocument, {
		id: productId,
	});
	return graphqlResponse;
};

export const getProductsByPage = async (page: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListPageDocument, { skip: page });
	return graphqlResponse.products;
};

export const getProductsSearch = async (search: string) => {
	const graphqlResponse = await executeGraphql(ProductsSearchListDocument, { searchTerm: search });
	return graphqlResponse.products;
};
