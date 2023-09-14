import React from "react";

interface BlogPageProps {
	params: { pathname: string[] };
}

export default async function BlogPage({ params }: BlogPageProps) {
	const pathname = params.pathname ? params.pathname.join("/") : [];

	return (
		<div>
			<h1>Blog {pathname}</h1>{" "}
		</div>
	);
}
