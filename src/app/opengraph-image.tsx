import { ImageResponse } from "next/server";

export const runtime = "edge";

export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 720,
};
export const alt = "Open Graph Image";

export default function OpenGraphImage({}) {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					background: "yellow",
					alignItems: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
				siema
			</div>
			// <div tw="border p-6 rounded-md bg-green-500 flex justify-center">siema</div>,
		),
	);
}
