/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("stripe secret key not found");
	}
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("stripe secret key not found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	}); // 2022-11-15

	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
		}
		case "checkout.session.expired": {
		}
		case "checkout.session.async_payment_failed": {
		}
		case "checkout.session.async_payment_succeeded": {
		}
	}

	return new Response(null, { status: 204 });
}
