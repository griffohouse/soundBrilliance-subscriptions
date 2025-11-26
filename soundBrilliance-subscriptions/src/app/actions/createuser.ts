"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ActionState {
    error: string | null;
}

export async function createEnterpriseUser(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {

    const data = Object.fromEntries(formData.entries());
    const {
        accessCode,
        name,
        email,
        password,
        confirmPassword,
        termsAgreement,
    } = data as Record<string, string>;

    // Validate
    if (password !== confirmPassword) {
        return { error: "Passwords do not match." };
    }

    if (!termsAgreement) {
        return { error: "You must accept the terms and conditions." };
    }

    try {
        // Call Xano
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
            let message =
                json?.message ||
                json?.error ||
                json?.detail ||
                (json?.validation
                    ? json.validation.map((v: any) => v.message).join(", ")
                    : null) ||
                "Failed to submit data to Xano.";

            return { error: message };
        }

        const cookieStore = cookies() as ReturnType<typeof cookies>;
        // @ts-ignore TS does not recognize .set() yet
        cookieStore.set("stripe_customer_id", json.stripe_customer_id, {
            path: "/",
            httpOnly: true,
        });


        // Redirect server-side
        redirect("/checkout");

    } catch (err: any) {
        return { error: err.message || "Unexpected server error" };
    }
}
