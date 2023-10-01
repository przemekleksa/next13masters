"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface AddToCartButtonProps {
	productId: string;
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
	const formStatus = useFormStatus();
	formStatus.pending;
	// console.log(productId);

	return (
		<>
			{/* <input type="text" name="productId" value={productId} hidden /> */}
			<button
				type="submit"
				disabled={formStatus.pending}
				className="border bg-red-600 px-7 py-3 text-slate-50 transition-shadow hover:shadow-md disabled:cursor-wait disabled:bg-slate-300"
			>
				add to cart
			</button>
		</>
	);
};
