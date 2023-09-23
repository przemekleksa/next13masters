import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/ui/types";

export interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.name} className="m-4 border border-dashed border-black p-4">
			<Link href={`/product/${product.id}`}>
				<article className="flex h-full flex-col justify-between">
					{product.coverImage && (
						<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					)}

					<ProductListItemDescription
						product={{ category: product.category, name: product.name, price: product.price }}
					/>
				</article>
			</Link>
		</li>
	);
};
