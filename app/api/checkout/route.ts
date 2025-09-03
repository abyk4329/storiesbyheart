import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST() {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL || "http://localhost:3000";

  if (!stripeSecret || !priceId) {
    return NextResponse.json({ error: "Stripe env missing" }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecret);

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/subscribe/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
