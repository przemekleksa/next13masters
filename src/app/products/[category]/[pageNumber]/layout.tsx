import { type ReactNode } from "react";

interface CategoryProductLayoutProps {
	children: ReactNode;
}

export const generateStaticParams = async () => {
	return [{ category: "books" }, { category: "tshirts" }, { category: "games" }];
};
export default function CategoryProductLayout({ children }: CategoryProductLayoutProps) {
	return children;
}
