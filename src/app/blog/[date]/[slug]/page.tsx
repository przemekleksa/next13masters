import React from "react";

interface BlogPageProps {
	params: { date: string; slug: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
	const { date, slug } = params;

	return (
		<div>
			<h1>
				:) Blog {date}/{slug}
			</h1>
		</div>
	);
}
