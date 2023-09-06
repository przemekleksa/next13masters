import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItem } from "@/ui/types";

const shirts: ProductItem[] = [
	{
		coverImage: { alt: "black", src: "/product/black.jpg" },
		name: "Black Shirt",
		category: "Shirt",
		price: 2900,
		id: "1",
	},
	{
		coverImage: { alt: "red", src: "/product/red.jpg" },
		name: "Red Shirt",
		category: "Shirt",
		price: 2700,
		id: "2",
	},
	{
		coverImage: { alt: "green", src: "/product/green.jpg" },
		name: "Green Shirt",
		category: "Shirt",
		price: 4900,
		id: "3",
	},
	{
		coverImage: { alt: "blue", src: "/product/blue.jpg" },
		name: "Blue Shirt",
		category: "Shirt",
		price: 4000,
		id: "4",
	},
];

export default function Home() {
	return (
		<section>
			<ProductList products={shirts} />
		</section>
	);
}
