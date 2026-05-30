/**
 * Resolves a path to a file in /public so it works both at the domain root
 * (Netlify/Vercel) and under a sub-path (GitHub Pages project site).
 *
 * Vite injects `import.meta.env.BASE_URL` from the build `--base` flag; it
 * always ends with a slash. Pass paths relative to /public, e.g.
 * `asset("portfolio/designer.jpg")` or `asset("/portfolio/designer.jpg")`.
 */
export const asset = (path: string) =>
  import.meta.env.BASE_URL + path.replace(/^\//, "");
