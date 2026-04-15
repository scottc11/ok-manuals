"use client";

import { useState, useRef } from "react";
import { useCart } from "./CartProvider";
import ImageLightbox from "./ImageLightbox";

interface ProductDetailProps {
  product: any;
  imageUrls: string[];
}

export default function ProductDetail({
  product,
  imageUrls,
}: ProductDetailProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedVisible, setAddedVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getThumbnailUrl = () => {
    const raw =
      product.thumbnail?.fields?.file?.url || product.thumbnail?.url;
    if (!raw) return undefined;
    return typeof raw === "string" && raw.startsWith("//")
      ? `https:${raw}`
      : (raw as string);
  };

  const handleAddToCart = () => {
    addItem(
      {
        slug: String(product.slug ?? ""),
        name: String(product.name ?? ""),
        thumbnailUrl: getThumbnailUrl(),
        stripeId: product.stripeId
          ? String(product.stripeId)
          : undefined,
      },
      quantity,
    );
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    setFadeOut(false);
    setAddedVisible(true);
    fadeTimerRef.current = setTimeout(() => setFadeOut(true), 2000);
    hideTimerRef.current = setTimeout(() => {
      setAddedVisible(false);
      setFadeOut(false);
    }, 2300);
  };

  const isDisabled = product.active === false || quantity < 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <ImageLightbox
            images={imageUrls}
            productName={product.name}
            className="w-full"
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bungee font-bold text-white mb-4">
            {String(product.name ?? "")}
          </h1>

          {product.subtitle && (
            <h2 className="text-gray-300 text-2xl font-mono font-bold mb-6 leading-relaxed">
              {String(product.subtitle)}
            </h2>
          )}

          {product.status && (
            <div className="my-6 font-bungee">
              <span>Status: </span>
              <span
                className={`inline-block ${String(product.status).toLowerCase() === "discontinued" ? "text-red-600" : "text-lavender"} px-2 rounded-sm`}
              >
                {String(product.status)}
              </span>
            </div>
          )}

          {product.tags && (
            <div className="my-4 flex flex-wrap gap-2">
              {(product.tags as string[]).map((tag) => (
                <span
                  key={String(tag)}
                  className="inline-block bg-lime text-black text-sm font-mono font-medium px-3 p-1 rounded-full"
                >
                  {String(tag)}
                </span>
              ))}
            </div>
          )}

          {product.shortDescription && (
            <p className="text-white text-lg mb-6 font-mono leading-relaxed">
              {String(product.shortDescription)}
            </p>
          )}

          <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">
            {String(product.price ?? "")}
          </div>

          <div className="my-6">
            <label
              htmlFor="quantity"
              className="block text-white text-sm font-medium mb-2"
            >
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={isDisabled}
                className="bg-gray-700 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                -
              </button>
              <span className="text-white text-lg min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={isDisabled}
                className="bg-gray-700 text-white px-3 py-1 rounded disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-6 w-full">
            <button
              onClick={handleAddToCart}
              disabled={isDisabled}
              className={`w-full px-3 py-2 rounded border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-50 ${addedVisible && fadeOut ? "opacity-0" : "opacity-100"} ${addedVisible ? "text-lime" : ""}`}
            >
              {addedVisible ? "Added to cart!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
