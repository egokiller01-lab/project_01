// Serve the verification body at Naver's exact .html URL on Cloudflare Pages.
export function onRequest() {
  return new Response("naver-site-verification: naver831681f354e72901902bac3ab9231c5c.html", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
