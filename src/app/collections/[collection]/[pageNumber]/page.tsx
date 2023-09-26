import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/collections";
import { CollectionList } from "@/ui/organisms/CollectionList";

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
	params: { pageNumber: string; collection: string };
}) {
	const { collection, pageNumber } = params;
	const products = await getProductsByCollectionSlug(collection);
	if (!products) {
		throw notFound();
	}

	return (
		<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
			<CollectionList collection={products} pageNumber={pageNumber} />
		</section>
	);
}
