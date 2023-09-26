"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export const SearchProduct = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState(
		searchParams?.query?.toString().toLowerCase() || "",
	);
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value.toLowerCase();
		setSearchQuery(newQuery);

		if (timer) {
			clearTimeout(timer);
		}

		setTimer(
			setTimeout(() => {
				router.push(`/search?query=${newQuery}`);
			}, 500),
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search?query=${searchQuery}`);
	};

	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	return (
		<form className="flex w-4" action={`/search`} onSubmit={handleSubmit}>
			<div className="relative flex w-4">
				<input
					type="text"
					autoComplete="off"
					value={searchQuery}
					onChange={handleInputChange}
					name="query"
					placeholder="SEO..."
					className="z-10 h-12 grow-[4] rounded-l-lg border-0 px-4 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
				/>
				<div className="animate-tilt absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-cyan-300 to-sky-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
				<button
					type="submit"
					className="w-30 grow-[1] rounded-r-lg bg-white px-4 py-2 hover:bg-gray-300"
				>
					<Search />
				</button>
			</div>
		</form>
	);
};
