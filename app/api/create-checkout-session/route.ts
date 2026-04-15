import { type NextRequest, NextResponse } from "next/server";
import { stripe, allowedCountries } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Cart items are required" },
        { status: 400 },
      );
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    const origin = request.headers.get("origin") || "";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: allowedCountries,
      },
      shipping_options: [
        { shipping_rate: "shr_1SJIXDKOFOq2EOfOYWgMhBCR" },
      ],
      currency: "usd",
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      allow_promotion_codes: true,
      metadata: {
        cart_items: JSON.stringify(
          items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        ),
      },
    });

    return NextResponse.json({
      success: true,
      session_id: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create checkout session", details: error.message },
      { status: 500 },
    );
  }
}
