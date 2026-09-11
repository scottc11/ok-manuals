import type { CSSProperties } from "react";
import type { CSSStyle } from "./types";

/**
 * Merges an array of Contentful "style" entries into a single React
 * CSSProperties object. Each entry is expected to have `fields.css`
 * containing a JSON object of CSS property/value pairs using camelCase
 * keys (e.g. `{ "backgroundColor": "#000", "padding": "1rem" }`).
 *
 * Later entries in the array override earlier ones for the same property.
 */
export function mergeContentfulStyles(
  styleEntries: any[] | undefined | null,
): CSSProperties {
  if (!styleEntries?.length) return {};

  return styleEntries.reduce<CSSProperties>((merged, entry) => {
    const css = entry?.fields?.css;
    if (css && typeof css === "object" && !Array.isArray(css)) {
      return { ...merged, ...css };
    }
    return merged;
  }, {});
}

export function mergeStyleTailwindClasses(styleEntries: CSSStyle[] | undefined | null): string {
  if (!styleEntries?.length) return "";

  return styleEntries.map((entry) => entry?.fields?.tailwindClasses).join(" ");
}