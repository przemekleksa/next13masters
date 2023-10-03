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
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {},
		next: { revalidate: 5 },
	});
	return graphqlResponse.products;
};

export const getProductDetailsById = async (productId: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
		next: { revalidate: 1 },
		// cache: "no-store",
	});
	return graphqlResponse.product;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});
	return graphqlResponse.categories[0]?.products;
};

export const getProductVariantsById = async (productId: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductVariantBySizeAndColorDocument,
		variables: {
			id: productId,
		},
	});
	return graphqlResponse;
};

export const getProductsByPage = async (page: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListPageDocument,
		variables: { skip: page },
	});
	return graphqlResponse.products;
};

export const getProductsSearch = async (search: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsSearchListDocument,
		variables: { searchTerm: search },
	});
	return graphqlResponse.products;
};
