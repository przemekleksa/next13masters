/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { notFound } from "next/navigation";
import { getProductDetailsById } from "@/api/products";

export const runtime = "edge";

export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 720,
};
export const alt = "Open Graph Image";

interface OpenGraphImageProps {
	params: { productId: string };
	// searchParams?: { [key: string]: string | string[] };
}

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
	const product = await getProductDetailsById(params.productId);

	if (!product) {
		notFound();
	}

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					background: "white",
					alignItems: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<img
					src={product?.images[0]?.url || ""}
					alt={product?.name || ""}
					height={50}
					style={{
						marginRight: 20,
					}}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 0,
					}}
				>
					<h2 style={{ margin: 0 }}>{product.name}</h2>
					<p>{product.description}</p>
				</div>
				<div style={{ display: "flex", alignItems: "flex-end" }}>
					<p>{product.categories[0]?.name}</p>
				</div>
			</div>
		),
	);
}
