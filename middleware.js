// Serves the Academy at the root of academy.uncountable.com.
// The Academy is built into /academy/ and this project's root holds the landing page, and Vercel
// serves real files before vercel.json rewrites run, so the host-based rewrite has to happen here.
// Paths already under /academy/ (the built assets) are left alone.
export const config = { matcher: "/((?!academy/).*)" };

export default function middleware(request) {
  const url = new URL(request.url);
  if (url.hostname !== "academy.uncountable.com") return;
  url.pathname = "/academy" + url.pathname;
  return new Response(null, { headers: { "x-middleware-rewrite": url.toString() } });
}
