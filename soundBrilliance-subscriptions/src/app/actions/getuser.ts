"use server";

export async function getEnterpriseUser(id: string) {
    const url = `https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/get_enterprise_user?stripe_customer_id=${id}`;

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });

    return res.json();
}
