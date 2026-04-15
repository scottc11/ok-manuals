import { NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function GET() {
  try {
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
    });

    const formattedProducts = products.data.map((product) => {
      const price = product.default_price as any;
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: price ? price.unit_amount : 0,
        currency: price ? price.currency : "usd",
        image: product.images?.[0],
        stock: product.metadata?.stock
          ? parseInt(product.metadata.stock)
          : undefined,
        metadata: product.metadata,
      };
    });

    return NextResponse.json({ success: true, products: formattedProducts });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products", details: error.message },
      { status: 500 },
    );
  }
}
