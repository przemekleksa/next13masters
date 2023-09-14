export interface ProductItem {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	coverImage: {
		alt: string;
		src: string;
	};
}

export type ProductResponseList = ProductResponseItem[];

export interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}
