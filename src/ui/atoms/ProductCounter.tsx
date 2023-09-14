"use client";
import { type ReactNode, useState } from "react";

interface ProductCounterProps {
	children: ReactNode;
}

export const ProductCounter = ({ children }: ProductCounterProps) => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<button onClick={() => setCounter(counter - 1)} className="border border-slate-300 px-4">
				-
			</button>
			<input
				type="text"
				readOnly
				value={counter}
				className="border border-slate-300 px-4 text-center"
			/>
			<button onClick={() => setCounter(counter + 1)} className="border border-slate-300 px-4">
				+
			</button>
			{counter % 2 === 0 && children}
		</div>
	);
};
