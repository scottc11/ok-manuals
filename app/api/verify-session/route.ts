import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: "Session ID is required" },
        { status: 400 },
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        customer_email: session.customer_details?.email,
        amount_total: session.amount_total,
        currency: session.currency,
        line_items: session.line_items?.data || [],
        metadata: session.metadata,
      },
    });
  } catch (error: any) {
    console.error("Error verifying session:", error);
    return NextResponse.json(
      { success: false, error: "Failed to verify session", details: error.message },
      { status: 500 },
    );
  }
}
