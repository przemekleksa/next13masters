/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products/hoodies",
				destination: "/products/hoodies/1",
				permanent: false,
			},
			{
				source: "/products/accessories",
				destination: "/products/accessories/1",
				permanent: false,
			},
		];
	},
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
