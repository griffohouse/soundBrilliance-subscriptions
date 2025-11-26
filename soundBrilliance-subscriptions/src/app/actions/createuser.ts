"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createEnterpriseUser(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const {
        accessCode,
        name,
        email,
        password,
        confirmPassword,
        termsAgreement,
    } = data as Record<string, string>;

    // Client-side validations in server action
    if (password !== confirmPassword) {
        return { error: "Passwords do not match." };
    }

    if (!termsAgreement) {
        return { error: "You must accept the terms and conditions." };
    }

    try {
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
            return { error: json.message || "Failed to submit data to Xano." };
        }

        (await cookies()).set("stripe_customer_id", json.stripe_customer_id, {
            path: "/",
        });

        redirect("/checkout");

    } catch (e: any) {
        return { error: e.message || "Unknown error occurred" };
    }
}
