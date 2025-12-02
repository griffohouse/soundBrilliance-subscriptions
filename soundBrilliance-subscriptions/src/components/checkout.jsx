'use client'

import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Container } from '@chakra-ui/react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {

    async function fetchClientSecret() {
        const res = await fetch(
            "/app/api/create-embedded-checkout",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "Failed to get client secret");
        }

        return data.client_secret;
    }

    return (
        <Container id="checkout" overflow={'clip'} borderRadius={'1.5rem'}>
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret }}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </Container>
    );
}
