import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products({ params }: { params: { pageNumber: string } }) {
	// await new Promise((_, reject) => setTimeout(reject, 10000)); // do testow errora i loadingu
	const products = await getProductsByPage(0);
	const { pageNumber } = params;

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<ProductList products={products} currentPage={Number(pageNumber)} />
		</section>
	);
}
