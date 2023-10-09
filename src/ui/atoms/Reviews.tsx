import { notFound } from "next/navigation";
import { type ProductReviewFragment } from "@/gql/graphql";

export async function Reviews(reviews: ProductReviewFragment) {
	const { reviews: data } = reviews;
	if (!data) {
		notFound();
	}

	return (
		<div className="rounded-md bg-white p-6 shadow-md">
			{data.map((review) => {
				return (
					<div
						key={review.id}
						className="mb-4 flex justify-between rounded-lg bg-orange-400 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
					>
						<div>
							<h4 className="mb-2 text-2xl font-semibold">{review.headline}</h4>
							<div className="text-sm italic text-gray-800">Review by: {review.name}</div>
						</div>
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 shadow-inner">
							<span className="text-4xl font-bold text-white">{review.rating}</span>
						</div>
					</div>
				);
			})}
			{data.map((review) => {
				return (
					<div
						key={review.id}
						className="mb-4 flex justify-between rounded-lg bg-orange-400 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
					>
						<div>
							<h4 className="mb-2 text-2xl font-semibold">{review.headline}</h4>
							<div className="text-sm italic text-gray-800">Review by: {review.name}</div>
						</div>
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 shadow-inner">
							<span className="text-4xl font-bold text-white">{review.rating}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
