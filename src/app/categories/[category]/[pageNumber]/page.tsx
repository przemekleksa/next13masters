import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";

interface GenerateStaticParamsProps {
	params: {
		category: string;
	};
}

export const generateStaticParams = async ({ params }: GenerateStaticParamsProps) => {
	if (params.category === "tshirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default async function SingleCategoryProductPage({
	params,
}: {
	params: { pageNumber: string; category: string };
}) {
	const { pageNumber, category } = params;

	const products = await getProductsByCategorySlug(category);

	if (!products) {
		throw notFound();
	}

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<pre>{`hello, you are on ${category} on page number ${pageNumber}`}</pre>
			<ProductList products={products} showMore currentPage={Number(pageNumber)} />
		</section>
	);
}
