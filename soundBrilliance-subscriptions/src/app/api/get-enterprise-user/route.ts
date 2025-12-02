import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("stripe_customer_id");

    if (!id) {
        return NextResponse.json(
            { error: "Missing stripe_customer_id" },
            { status: 400 }
        );
    }

    const url = `https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/get_enterprise_user?stripe_customer_id=${id}`;

    const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data);
}
