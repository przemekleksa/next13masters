import { executeGraphql } from "@/api/graphqlAPI";
import {
	GetProductsListDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
} from "@/gql/graphql";
import { type ProductResponseItem, type ProductResponseList } from "@/ui/types";

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };
// interface ProductsGraphQLResponse {
// 	products: {
// 		id: string;
// 		name: string;
// 		description: string;
// 		category: string;
// 		images: {
// 			url: string;
// 		}[];
// 		price: number;
// 	}[];
// }

const productResponseItemToProductItem = (
	productResponseItem: ProductResponseItem,
): ProductItem => {
	return {
		id: productResponseItem.id,
		name: productResponseItem.title,
		description: productResponseItem.description,
		category: productResponseItem.category,
		price: productResponseItem.price,
		coverImage: {
			src: productResponseItem.image,
			alt: productResponseItem.title,
		},
		longDescription: productResponseItem.longDescription,
		rating: productResponseItem.rating,
	};
};

export const getProductsList = async ({ numberOfProducts }: { numberOfProducts: number }) => {
	const graphqlResponse = await executeGraphql(GetProductsListDocument, {});

	// const products = graphqlResponse.products.map((product) => {
	// 	return {
	// 		id: product.id,
	// 		name: product.name,
	// 		description: product.description,
	// 		category: product.categories[0]?.name || "",
	// 		price: product.price,
	// 		coverImage: product.images[0] && {
	// 			src: product.images[0].url,
	// 			alt: product.name,
	// 		},
	// 		longDescription: "",
	// 		rating: { rate: 5, count: 123 },
	// 	};
	// });
	return graphqlResponse.products;
};

export const getProductDetailsById = async (_productId: ProductListItemFragment["id"]) => {
	// @todo: GRAPHQL
	throw new Error("Not implemented");
};

export const getProductsListByOffset = async ({
	numberOfProducts,
	offset,
}: {
	numberOfProducts: number;
	offset: number;
}): Promise<ProductItem[]> => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${numberOfProducts}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseList;
	const products = productsResponse.map(productResponseItemToProductItem);
	return products;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	// const products = data.categories[0]?.products;
	// return products?.map((product) => {
	// 	return {
	// 		id: product.id,
	// 		name: product.name,
	// 		description: product.description,
	// 		category: product.categories[0]?.name || "",
	// 		price: product.price,
	// 		coverImage: product.images[0] && {
	// 			src: product.images[0].url,
	// 			alt: product.name,
	// 		},
	// 		longDescription: "",
	// 		rating: { rate: 5, count: 123 },
	// 	};
	// });
	return graphqlResponse.categories[0]?.products;
};
