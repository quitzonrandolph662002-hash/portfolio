import type { SyntheticEvent } from "react";
import { asset } from "./asset";

/**
 * Returns an onError handler that swaps a missing image for its placeholder.
 * Lets you point `image` at a real file that may not exist yet — the
 * placeholder shows until the file is uploaded, then the real one appears.
 */
export function imgFallback(placeholder?: string) {
  return (e: SyntheticEvent<HTMLImageElement>) => {
    if (!placeholder) return;
    const img = e.currentTarget;
    if (img.dataset.fallback === "1") return; // avoid loops
    img.dataset.fallback = "1";
    img.src = asset(placeholder);
  };
}
