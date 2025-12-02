// "use server";
//
// import { cookies } from "next/headers";
//
// interface ActionState {
//     error: string | null;
//     success?: boolean;
//     redirectTo?: string;"use server";
//
//     import { cookies } from "next/headers";
//
// interface ActionState {
//     error: string | null;
//     success?: boolean;
//     redirectTo?: string;
// }
//
// export async function createEnterpriseUser(
//     prevState: ActionState,
//     formData: FormData
// ): Promise<ActionState> {
//     const data = Object.fromEntries(formData.entries());
//
//     const {
//         accessCode,
//         name,
//         email,
//         password,
//         confirmPassword,
//         termsAgreement,
//     } = data as Record<string, string>;
//
//     if (password !== confirmPassword) {
//         return { error: "Passwords do not match." };
//     }
//
//     if (!termsAgreement) {
//         return { error: "You must accept the terms and conditions." };
//     }
//
//     try {
//         const response = await fetch(
//             "https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/enterprise_users",
//             {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     access_code: accessCode,
//                     name,
//                     email,
//                     password,
//                     terms_agreement: new Date().toISOString(),
//                 }),
//             }
//         );
//
//         const json = await response.json();
//
//         if (!response.ok) {
//             return {
//                 error:
//                     json?.message ||
//                     json?.error ||
//                     "Failed to create user.",
//             };
//         }
//
//         // Write cookie
//         // @ts-ignore
//         cookies().set("stripe_customer_id", json.stripe_customer_id, {
//             path: "/",
//             httpOnly: true,
//         });
//
//         // RETURN INSTEAD OF redirect()
//         return {
//             error: null,
//             success: true,
//             redirectTo: "/soundBrilliance-subscriptions/app/checkout",
//         };
//     } catch (err: any) {
//         return { error: err.digest || "Unexpected server error" };
//     }
// }
//
// }
//
// export async function createEnterpriseUser(
//     prevState: ActionState,
//     formData: FormData
// ): Promise<ActionState> {
//     const data = Object.fromEntries(formData.entries());
//
//     const {
//         accessCode,
//         name,
//         email,
//         password,
//         confirmPassword,
//         termsAgreement,
//     } = data as Record<string, string>;
//
//     if (password !== confirmPassword) {
//         return { error: "Passwords do not match." };
//     }
//
//     if (!termsAgreement) {
//         return { error: "You must accept the terms and conditions." };
//     }
//
//     try {
//         const response = await fetch(
//             "https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/enterprise_users",
//             {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     access_code: accessCode,
//                     name,
//                     email,
//                     password,
//                     terms_agreement: new Date().toISOString(),
//                 }),
//             }
//         );
//
//         const json = await response.json();
//
//         if (!response.ok) {
//             return {
//                 error:
//                     json?.message ||
//                     json?.error ||
//                     "Failed to create user.",
//             };
//         }
//
//         // Write cookie
//         // @ts-ignore
//         cookies().set("stripe_customer_id", json.stripe_customer_id, {
//             path: "/",
//             httpOnly: true,
//         });
//
//         // RETURN INSTEAD OF redirect()
//         return {
//             error: null,
//             success: true,
//             redirectTo: "/soundBrilliance-subscriptions/app/checkout",
//         };
//     } catch (err: any) {
//         return { error: err.digest || "Unexpected server error" };
//     }
// }
