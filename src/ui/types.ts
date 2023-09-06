export interface ProductItem {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: {
		alt: string;
		src: string;
	};
}
