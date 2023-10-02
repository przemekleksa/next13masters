import { notFound } from "next/navigation";
import { type Metadata } from "next";
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

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	// const products = await getProductsByCategorySlug(params.category);
	// console.log(products);

	const cat = params.category.charAt(0).toUpperCase() + params.category.slice(1);

	return {
		title: cat,
		description: params.category,
		openGraph: { title: params.category, description: params.category },
	};
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

	const CategoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<h1 className="text-5xl">{CategoryTitle}</h1>
			<ProductList products={products} currentPage={Number(pageNumber)} />
		</section>
	);
}
