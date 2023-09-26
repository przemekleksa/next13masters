import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductDetailsById, getProductVariantsById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductItemVariants } from "@/ui/atoms/ProductItemVariants";

interface ProductDetailsPageProps {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductDetailsById(params.productId);
	return {
		title: product?.name,
		description: product?.description,
		openGraph: { title: product?.name, description: product?.description },
	};
};

export default async function ProductDetailsPage({
	params, // searchParams,
}: ProductDetailsPageProps) {
	const product = await getProductDetailsById(params.productId);
	const productVariants = await getProductVariantsById(params.productId);

	const colors = Array.from(
		new Set(productVariants.productSizeColorVariants.map((variant) => variant.color)),
	);

	const sizes = Array.from(
		new Set(productVariants.productSizeColorVariants.map((variant) => variant.size)),
	);

	if (!product) {
		return <Spinner />;
	}
	return (
		<>
			<article className="grid grid-cols-2 justify-center">
				{product.images[0] && <ProductCoverImage src={product?.images[0].url} alt={product.name} />}
				<ProductItemDescription product={product} className="ml-4" />
				<ProductItemVariants
					colors={colors}
					sizes={sizes}
					className="grid-item col-start-2 row-start-2"
				/>
			</article>
			<aside className="mt-16 flex justify-center">
				<Suspense fallback={<Spinner />}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
