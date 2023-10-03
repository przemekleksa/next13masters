import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const dynamicParams = "/product/:productId";
export const revalidate = 420;
export const preferedRegion = "eu";
export const fetchCache = "force-cache";

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json({
		message: "It's a me Mario",
		status: 200,
		headers: { "content-type": "application/json" },
		randomNumber: (Math.random() * 1000000 * revalidate).toFixed(0),
	});
}
