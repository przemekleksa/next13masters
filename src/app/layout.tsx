import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
	description: "Master products",
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<header>
					<Header />
				</header>
				<section className="lg:max-w-7x;  mx-auto max-w-md p-4 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:p-12 lg:pt-20">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">Footer 2023®</p>
				</footer>
				{modal}
			</body>
		</html>
	);
}
