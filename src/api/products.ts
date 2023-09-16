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

export const getProductsList = async ({
	numberOfProducts,
}: {
	numberOfProducts: number;
}): Promise<ProductItem[]> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${numberOfProducts}`);
	const productsResponse = (await res.json()) as ProductResponseList;
	const products = productsResponse.map(productResponseItemToProductItem);
	return products;
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
