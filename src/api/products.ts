import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductResponseItem, type ProductItem, type ProductResponseList } from "@/ui/types";

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

type GraphqlResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors: undefined };

interface ProductsGrapqlResponse {
	products: {
		id: string;
		name: string;
		description: string;
		images: { url: string }[];
		price: number;
	}[];
}

[];

export const getProductsList = async (): Promise<ProductItem[]> => {
	// const res = await fetch(
	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clihaom3j03ep01te1dg24yp5/master",
	// 	{
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			query: /* GraphQL */ ``,
	// 			variables: {},
	// 		}),
	// 		headers: { "Content-Type": "application/json" },
	// 	},
	// );

	// const graphqlResponse = (await res.json()) as GraphqlResponse<ProductsGrapqlResponse>;
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	// if (graphqlResponse.errors) {
	// 	throw new Error(graphqlResponse.errors[0].message);
	// }
	const products = graphqlResponse.products.map((product) => ({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.categories[0]?.name || "",
		price: product.price,
		coverImage: product.images[0] && {
			src: product.images[0]?.url,
			alt: product.name,
		},
		longDescription: "longDescription",
		rating: {
			rate: 5,
			count: 1,
		},
	}));

	return products;
};

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { "Content-Type": "application/json" },
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(`GraphQL error:`, { cause: graphqlResponse.errors });
	}
	return graphqlResponse.data;
};

export const getProductDetailsById = async (
	productId: ProductResponseItem["id"],
): Promise<ProductItem> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProductItem(productResponse);
	return product;
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
