"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/actions";

interface RemoveButtonProps {
	itemId: string;
}

export const RemoveButton = ({ itemId }: RemoveButtonProps) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			className="text-red-500 disabled:text-slate-500"
			disabled={isPending}
			onClick={() => {
				// console.log("remove", itemId);
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
