import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	await sleep(1000);

	return (
		<ProductList
			products={products.filter((product) => product.categories[0]?.name === "T-Shirts")}
			currentPage={0}
			isPagination={false}
		/>
	);
};
