import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            accessCode,
            name,
            email,
            password,
            confirmPassword,
            termsAgreement,
        } = body;

        // Validation
        if (password !== confirmPassword) {
            return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
        }

        if (!termsAgreement) {
            return NextResponse.json(
                { error: "You must accept the terms and conditions." },
                { status: 400 }
            );
        }

        // Forward request to Xano
        const response = await fetch(
            "https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/enterprise_users",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_code: accessCode,
                    name,
                    email,
                    password,
                    terms_agreement: new Date().toISOString(),
                }),
            }
        );

        const json = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                {
                    error:
                        json?.message ||
                        json?.error ||
                        "Failed to create user.",
                },
                { status: 400 }
            );
        }

        // Write cookie
        // @ts-ignore
        cookies().set("stripe_customer_id", json.stripe_customer_id, {
            path: "/",
            httpOnly: true,
        });

        return NextResponse.json({
            success: true,
            error: null,
            redirectTo: "/app/checkout",
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Unexpected server error" },
            { status: 500 }
        );
    }
}
