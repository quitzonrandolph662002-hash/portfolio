import { Component, type ReactNode } from "react";

/**
 * Catches render/runtime errors from its subtree (e.g. a WebGL context that
 * fails to initialise) and renders an optional fallback instead of crashing
 * the whole page.
 */
export class SafeBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    // Non-fatal: 3D is decorative. Log for debugging only.
    console.warn("3D scene disabled:", error);
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
