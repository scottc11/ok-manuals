import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProduct } from "../../lib/contentful";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "Browse OK200 Eurorack modules — Counterpoint and DEGREE performance sequencer/controllers.",
};

const MODULES = [
  {
    slug: "counterpoint",
    name: "Counterpoint",
    image: "/images/counterpoint-panel.png",
  },
  {
    slug: "degree",
    name: "DEGREE",
    image: "/images/degree-panel.png",
  },
] as const;

export default async function ModulesPage() {
  const products = await Promise.all(
    MODULES.map(async (mod) => {
      const product = await getProduct(mod.slug, [
        "shortDescription",
        "price",
      ]);
      return { ...mod, product };
    }),
  );

  return (
    <div>
      <div className="container mx-auto py-16">
        <div className="flex flex-col gap-12">
          {products.map(({ slug, name, image, product }) => (
            <Link
              key={slug}
              href={`/modules/${slug}`}
              className="flex flex-col md:flex-row gap-6 w-full group"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={image}
                  alt={name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 py-4 w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-white font-unica">
                  {name}
                </h3>
                {product?.price && (
                  <div className="text-3xl font-numbers border-b-2 border-gray-400 pb-2">
                    {String(product.price)}
                  </div>
                )}
                {product?.shortDescription && (
                  <div className="text-lg leading-relaxed text-gray-300">
                    {String(product.shortDescription)}
                  </div>
                )}
                <div className="mt-4">
                  <span className="inline-block px-8 py-3 text-lg border-2 border-white text-white group-hover:bg-white group-hover:text-black rounded transition-colors duration-200">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
