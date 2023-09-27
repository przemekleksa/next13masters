import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsByCollectionSlug } from "@/api/collections";
import { CollectionList } from "@/ui/organisms/CollectionList";

interface GenerateStaticParamsProps {
	params: {
		collection: string;
	};
}

export const generateStaticParams = async ({ params }: GenerateStaticParamsProps) => {
	if (params.collection === "new-arrivals") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const products = await getProductsByCollectionSlug(params.collection);

	return {
		title: `${products[0]?.name}${products[0]?.description}`,
		description: products[0]?.description,
		openGraph: { title: products[0]?.name, description: products[0]?.description as string },
	};
};

export default async function SingleCategoryProductPage({
	params,
}: {
	params: { pageNumber: string; collection: string };
}) {
	const { collection, pageNumber } = params;
	const products = await getProductsByCollectionSlug(collection);
	if (!products[0]) {
		throw notFound();
	}

	return (
		<>
			<section className="flex min-h-screen flex-col items-center justify-evenly p-4">
				<CollectionList collection={products} pageNumber={pageNumber} />
			</section>
		</>
	);
}
