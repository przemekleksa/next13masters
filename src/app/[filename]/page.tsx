import { notFound } from "next/navigation";
import React, { type ComponentType } from "react";

interface StaticPageProps {
	params: { filename: string };
}

export default async function StaticPage({ params }: StaticPageProps) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);
	return (
		<article className="prose prose-lg">
			<Page />
		</article>
	);
}
