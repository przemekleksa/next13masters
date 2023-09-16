import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products() {
	const products = await getProductsList({ numberOfProducts: 20 });
	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<ProductList products={products} showMore />
		</section>
	);
}
