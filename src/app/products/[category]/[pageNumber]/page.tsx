interface GenerateStaticParamsProps {
	params: {
		category: string;
	};
}

export const generateStaticParams = async ({ params }: GenerateStaticParamsProps) => {
	if (params.category === "tshirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default async function SingleCategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const { category, pageNumber } = params;
	return (
		<h1>
			Produkty z kategorii {category}, strona {pageNumber}
		</h1>
	);
}
