import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductDetailsById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

interface ProductDetailsPageProps {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}

export const generateStaticParams = async () => {
	const products = await getProductsList({ numberOfProducts: 20 });
	return products.map((product) => ({ productId: product.id })).slice(0, 3);
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
	params, // searchParams,
}: ProductDetailsPageProps) {
	// const message = searchParams.welcome;
	const product = await getProductDetailsById(params.productId);
	// console.log(message);

	return (
		<>
			<article>
				{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/> */}
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Loading"}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
