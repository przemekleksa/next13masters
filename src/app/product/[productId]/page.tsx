import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductDetailsById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { Spinner } from "@/ui/atoms/Spinner";

interface ProductDetailsPageProps {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}

export const generateStaticParams = async () => {
	const products = await getProductsList({ numberOfProducts: 20 });
	return products.map((product) => ({ productId: product.id }));
	// return products.map((product) => ({ productId: product.id })).slice(0, 3);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { name, description } = await getProductDetailsById(params.productId);
	return { title: name, description, openGraph: { title: name, description } };
};

export default async function ProductDetailsPage({
	params,
	searchParams,
}: ProductDetailsPageProps) {
	const product = await getProductDetailsById(params.productId);
	console.log(searchParams, "searchParams");
	return (
		<>
			<article className="flex justify-center">
				<ProductCoverImage {...product.coverImage} />
				<ProductItemDescription product={product} className="ml-4" />
			</article>
			<aside className="mt-16 flex justify-center">
				<Suspense fallback={<Spinner />}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
