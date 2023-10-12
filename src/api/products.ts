import { executeGraphql } from "@/api/graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductVariantBySizeAndColorDocument,
	ProductsGetListPageDocument,
	ProductsSearchListDocument,
	ProductGetReviewByProductIdDocument,
	ProductAddReviewDocument,
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

export const getProductReviewById = async (productId: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetReviewByProductIdDocument,
		variables: { id: productId },
		next: { revalidate: 1 },
		// cache: "no-store",
	});
	return graphqlResponse.product;
};

export const addReviewByProductId = async (
	productId: ProductListItemFragment["id"],
	data: { headline: string; name: string; email: string; content: string; rating: number },
) => {
	await executeGraphql({
		query: ProductAddReviewDocument,
		variables: {
			id: productId,
			headline: data.headline,
			email: data.email,
			name: data.name,
			content: data.content,
			rating: data.rating,
		},
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
};
