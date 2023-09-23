import { getProductsListByOffset } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

// interface GenerateStaticParamsProps {
// 	params: {
// 		category: string;
// 	};
// }

// export const generateStaticParams = async ({ params }: GenerateStaticParamsProps) => {
// 	if (params.category === "tshirts") {
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }];
// 	} else {
// 		return [{ pageNumber: "1" }];
// 	}
// };

export default async function SingleCategoryProductPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const { pageNumber } = params;

	const products = await getProductsListByOffset({
		numberOfProducts: 20,
		offset: Number(pageNumber),
	});

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<ProductList products={products} showMore currentPage={Number(pageNumber)} />
		</section>
	);
}
