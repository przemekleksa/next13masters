import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export interface ProductListItemProps {
	product: ProductListItemFragment;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.id} className="m-4 border border-dashed border-black p-4">
			<Link href={`/product/${product.id}`}>
				<article className="flex h-full flex-col justify-between">
					{product.images[0] && (
						<ProductCoverImage src={product.images[0]?.url} alt={product.name} />
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
