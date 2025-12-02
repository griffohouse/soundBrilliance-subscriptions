import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { stripe } from "@/app/lib/stripe";

export async function POST() {
    try {
        const origin = (await headers()).get("origin");
        const cookieStore = await cookies();
        // @ts-ignore
        const stripeCustomerId = cookieStore.get("stripe_customer_id")?.value;

        if (!stripeCustomerId) {
            return NextResponse.json(
                { error: "Missing Stripe Customer ID" },
                { status: 400 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            ui_mode: "embedded",
            customer: stripeCustomerId,
            line_items: [
                { price: "price_1SPSWb0ZsBlZ8v4sjfZ3VYSo", quantity: 1 }
            ],
            mode: "subscription",
            return_url: `${origin}/app/welcome?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({
            client_secret: session.client_secret,
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: err?.message || "Unknown server error" },
            { status: 500 }
        );
    }
}
