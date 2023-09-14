import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/ui/types";

export interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.coverImage.alt}>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListItemDescription
						product={{ category: product.category, name: product.name, price: product.price }}
					/>
					<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				</article>
			</Link>
		</li>
	);
};
