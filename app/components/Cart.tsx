"use client";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "./CartProvider";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getItemCount } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [stripeMap, setStripeMap] = useState<
    Record<string, { id: string; price: number; currency: string }>
  >({});
  const [loadingPrices, setLoadingPrices] = useState(false);

  const formatPrice = (price: number, currency: string = "usd") =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(price / 100);

  useEffect(() => {
    const fetchStripeProducts = async () => {
      setLoadingPrices(true);
      try {
        const resp = await fetch("/api/products");
        const data = await resp.json();
        if (data.success && Array.isArray(data.products)) {
          const map: Record<
            string,
            { id: string; price: number; currency: string }
          > = {};
          data.products.forEach((p: any) => {
            if (p.id && typeof p.price === "number") {
              map[p.id] = {
                id: p.id,
                price: p.price,
                currency: p.currency || "usd",
              };
            }
          });
          setStripeMap(map);
        }
      } catch (e) {
        console.error("Failed to fetch Stripe products", e);
      } finally {
        setLoadingPrices(false);
      }
    };
    fetchStripeProducts();
  }, []);

  const cartTotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const stripe = item.stripeId ? stripeMap[item.stripeId] : undefined;
      if (!stripe) return sum;
      return sum + stripe.price * item.quantity;
    }, 0);
  }, [items, stripeMap]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    const payloadItems = items
      .map((ci) => {
        const stripe = ci.stripeId ? stripeMap[ci.stripeId] : undefined;
        return {
          name: ci.name,
          image: ci.thumbnailUrl,
          price: stripe?.price,
          quantity: ci.quantity,
          productId: stripe?.id,
        };
      })
      .filter((i) => typeof i.price === "number" && i.productId);

    if (payloadItems.length !== items.length) {
      alert(
        "Some items are not available for checkout. Please update your cart.",
      );
      return;
    }

    setIsCheckingOut(true);
    try {
      const response = await fetch(
        "/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: payloadItems }),
        },
      );
      const data = await response.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-gray-200 rounded-lg">
        <div className="text-gray-400 text-6xl mb-4">🛒</div>
        <h2 className="text-xl">Your cart is empty!</h2>
        <p className="text-gray-400 mb-8">
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <table className="w-full my-4 border-collapse">
        <thead>
          <tr className="border-b-2 border-black">
            <th className="text-left py-3 pr-4 w-1/2">Product</th>
            <th className="text-left py-3 pr-4 w-28">Qty</th>
            <th className="text-left py-3 pr-4 w-28">Price</th>
            <th className="text-left py-3 pr-0 w-12"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="border-b-2 border-onyx/10 border-dotted"
            >
              <td className="py-3 pr-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                    {item.thumbnailUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={item.thumbnailUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 text-xl">📦</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.stripeId && stripeMap[item.stripeId]
                        ? formatPrice(
                            stripeMap[item.stripeId].price,
                            stripeMap[item.stripeId].currency,
                          )
                        : loadingPrices
                          ? "Fetching price..."
                          : "Unavailable"}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 pr-4 align-top">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    aria-label={`Decrease quantity of ${item.name}`}
                    className="h-11 text-gray-700 hover:text-gray-900"
                  >
                    −
                  </button>
                  <span className="text-center font-semibold text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    aria-label={`Increase quantity of ${item.name}`}
                    className="h-11 text-gray-700 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-3 pr-4 align-middle font-semibold text-gray-900">
                {item.stripeId && stripeMap[item.stripeId]
                  ? formatPrice(
                      (stripeMap[item.stripeId].price || 0) * item.quantity,
                      stripeMap[item.stripeId].currency,
                    )
                  : loadingPrices
                    ? "..."
                    : "—"}
              </td>
              <td className="py-3 pr-0 align-middle">
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-600 hover:text-red-500"
                  title="Remove item"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-gray-900">
            Items ({getItemCount()})
          </span>
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(cartTotal)}
          </span>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={clearCart}
            className="px-3 py-2 rounded disabled:opacity-50 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut || loadingPrices}
            className="px-3 py-2 rounded disabled:opacity-50 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            {isCheckingOut
              ? "Processing..."
              : `Checkout ${formatPrice(cartTotal)}`}
          </button>
        </div>
      </div>
    </div>
  );
}
