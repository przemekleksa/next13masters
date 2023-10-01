"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

export const IncrementProductQuantity = ({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	console.log(optimisticQuantity);
	return (
		<>
			{optimisticQuantity}
			<button
				className="ml-4 h-8 w-8 border bg-slate-300 hover:cursor-pointer hover:bg-slate-100"
				onClick={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</>
	);
};
