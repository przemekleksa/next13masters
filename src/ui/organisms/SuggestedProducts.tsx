import { getProductsList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const shuffleArray = (array: ProductListItemFragment[]) => {
	array.forEach((_, i) => {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j]!, array[i]!];
	});
	return array;
};

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	await sleep(1000);

	const randomProducts = shuffleArray([...products]).slice(0, 4);

	return (
		<ProductList
			products={randomProducts}
			currentPage={0}
			isPagination={false}
			dataTestId="related-products"
		/>
	);
};
