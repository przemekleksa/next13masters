"use client";
import { useState } from "react";
import { addReviewByProductId } from "@/api/products";

interface AddReviewProps {
	productId: string;
}

export function AddReview({ productId }: AddReviewProps) {
	const [formData, setFormData] = useState({
		headline: "",
		content: "",
		rating: 0,
		name: "",
		email: "",
	});

	async function addReview(event: React.FormEvent) {
		event.preventDefault(); // Prevent default form submission

		if (!formData) {
			console.log("no form data");
		}
		await addReviewByProductId(productId, formData);
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}

	return (
		<form className="space-y-4" onSubmit={addReview} data-testId="add-review-form">
			<div className="flex flex-col space-y-2">
				<label htmlFor="headline" className="text-md font-medium">
					Headline
				</label>
				<input
					id="headline"
					name="headline"
					type="text"
					placeholder="Headline"
					value={formData.headline}
					onChange={handleInputChange}
					className="rounded-md border p-2"
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<label htmlFor="name" className="text-md font-medium">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Name"
					value={formData.name}
					onChange={handleInputChange}
					className="rounded-md border p-2"
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<label htmlFor="headline" className="text-md font-medium">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
					className="rounded-md border p-2"
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<label htmlFor="headline" className="text-md font-medium">
					Rating
				</label>
				<input
					id="rating"
					name="rating"
					type="number"
					min="1"
					max="5"
					placeholder="1 - 5"
					value={formData.rating}
					onChange={handleInputChange}
					className="rounded-md border p-2"
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<label htmlFor="headline" className="text-md font-medium">
					Review
				</label>
				<input
					id="content"
					name="content"
					type="textarea"
					placeholder="Review"
					value={formData.content}
					onChange={handleInputChange}
					className="rounded-md border p-2"
				/>
			</div>

			<div className="mt-4">
				<button
					type="submit"
					className="w-full rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
