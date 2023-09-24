import { executeGraphql } from "@/api/graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { type ProductResponseItem, type ProductResponseList } from "@/ui/types";

// const productResponseItemToProductItem = (
// 	productResponseItem: ProductResponseItem,
// ): ProductItem => {
// 	return {
// 		id: productResponseItem.id,
// 		name: productResponseItem.title,
// 		description: productResponseItem.description,
// 		category: productResponseItem.category,
// 		price: productResponseItem.price,
// 		coverImage: {
// 			src: productResponseItem.image,
// 			alt: productResponseItem.title,
// 		},
// 		longDescription: productResponseItem.longDescription,
// 		rating: productResponseItem.rating,
// 	};
// };

// export const getProductsList = async ({
// 	numberOfProducts,
// }: {
// 	numberOfProducts: number;
// }): Promise<ProductItem[]> => {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${numberOfProducts}`);
// 	const productsResponse = (await res.json()) as ProductResponseList;
// 	const products = productsResponse.map(productResponseItemToProductItem);
// 	return products;
// };

// type GraphqlResponse<T> =
// 	| { data?: undefined; errors: { message: string }[] }
// 	| { data: T; errors: undefined };

// interface ProductsGrapqlResponse {
// 	products: {
// 		id: string;
// 		name: string;
// 		description: string;
// 		images: { url: string }[];
// 		price: number;
// 	}[];
// }

[];

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products;
};

export const getProductDetailsById = async (productId: ProductListItemFragment["id"]) => {
	// todo: GRAPHQL
	console.log(productId);
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
	return graphqlResponse.categories[0]?.products;
};
