import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByPage } from "@/api/products";

interface GenerateStaticParamsProps {
	params: {
		category: string;
	};
}

export const generateStaticParams = async ({ params }: GenerateStaticParamsProps) => {
	if (params.category === "tshirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }, { pageNumber: "4" }];
	}
};

export default async function SingleCategoryProductPage({
	params,
}: {
	params: { pageNumber: string; category: string };
}) {
	const { pageNumber, category } = params;

	const skipPages = Number(pageNumber) === 1 ? 0 : Number(pageNumber) * 2;

	const products = await getProductsByPage(skipPages);

	if (!products) {
		throw notFound();
	}

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<pre>{`hello, you are on ${category} on page number ${pageNumber}`}</pre>
			<ProductList products={products} currentPage={Number(pageNumber)} />
		</section>
	);
}
