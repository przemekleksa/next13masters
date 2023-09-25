"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import clsx from "clsx";

interface ProductItemVariantsProps {
	colors: string[];
	sizes: string[];
	className?: string;
}

export const ProductItemVariants = ({ colors, sizes, className }: ProductItemVariantsProps) => {
	const [selectedColor, setSelectedColor] = useState("");
	const [selectedSize, setSelectedSize] = useState("");

	if (!colors && !sizes) {
		notFound();
	}

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	return (
		<div className={clsx("flex justify-evenly gap-2", className)}>
			<div>
				<select onChange={(e) => setSelectedColor(e.target.value)}>
					{colors.map((color) => (
						<option value={color} key={color}>
							{capitalizeFirstLetter(color)}
						</option>
					))}
				</select>
			</div>
			<div>
				<select onChange={(e) => setSelectedSize(e.target.value)}>
					{sizes.map((size) => (
						<option value={size} key={size}>
							{capitalizeFirstLetter(size)}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
