'use server'

import {cookies, headers} from 'next/headers'

import { stripe } from '../lib/stripe'

export async function fetchClientSecret() {
    const origin = (await headers()).get('origin')
    const cookies = await (await import('next/headers')).cookies()
    const stripeCustomerId = cookies.get("stripe_customer_id")?.value
    if (!stripeCustomerId) {
        throw new Error("Missing Stripe Customer ID")
    }

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        customer: stripeCustomerId,
        line_items: [
            { price: 'price_1SPSWb0ZsBlZ8v4sjfZ3VYSo', quantity: 1 }
        ],
        mode: 'subscription',
        return_url: `${origin}/soundBrilliance-subscriptions/app/welcome?session_id={CHECKOUT_SESSION_ID}`,
    })

    return session.client_secret
}