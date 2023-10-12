import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("stripe secret key not found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	}); // 2022-11-15

	const session = await stripe.checkout.sessions.retrieve(searchParams.sessionId, {});
	const paymentStatus = session.payment_status;

	return (
		<div>
			<h2>{paymentStatus}</h2>
		</div>
	);
}
