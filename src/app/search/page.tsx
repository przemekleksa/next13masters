import { getProductsSearch } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Search({
	params,
	searchParams,
}: {
	params: { pageNumber: string; query: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const products = await getProductsSearch(searchParams.query as string);
	const { pageNumber } = params;

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<ProductList products={products} currentPage={Number(pageNumber)} isPagination={false} />
		</section>
	);
}
