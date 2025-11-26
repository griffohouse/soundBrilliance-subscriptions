"use server";


import { cookies } from "next/headers";

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_code: accessCode,
                    name,
                    email,
                    password,
                    terms_agreement: new Date().toISOString(),
                }),
            }
        );

        if (!response.ok) {
            const err = await response.json();
            return { error: err.message || "Failed to submit data to Xano." };
        }

        const user = await response.json();

        (await cookies()).set("stripe_customer_id", user.stripe_customer_id);


        return { success: true };
    } catch (e: any) {
        return { error: e.message };
    }
}