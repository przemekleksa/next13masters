import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList({ numberOfProducts: 20 });
	await sleep(1000);
	// return <ProductList products={products.slice(-4)} />;
	return (
		<ProductList
			products={products.filter((product) => product.category === "Books")}
			currentPage={0}
			hidePagination
		/>
	);
};
