const BLOG_ORIGIN = "https://blog.plachem.biz";
const VALID_LOCALES = new Set(["ko", "en", "vi"]);

type WordPressPost = {
  date?: string;
  link?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  featured_media?: number;
};

type WordPressMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
};

type LivePost = {
  date: string;
  link: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

function safeBlogUrl(value: unknown) {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "blog.plachem.biz"
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}

function matchesLocale(link: string, locale: string) {
  const pathname = new URL(link).pathname;
  if (locale === "vi") return pathname.startsWith("/vi/");
  if (locale === "en") return pathname.startsWith("/en/");
  return !pathname.startsWith("/vi/") && !pathname.startsWith("/en/");
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Blog API returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function loadPosts(locale: string): Promise<LivePost[]> {
  const endpoint = new URL(`${BLOG_ORIGIN}/wp-json/wp/v2/posts`);
  endpoint.searchParams.set("per_page", "24");
  endpoint.searchParams.set(
    "_fields",
    "date,link,title,excerpt,featured_media",
  );

  const allPosts = await fetchJson<WordPressPost[]>(endpoint.toString());
  const normalized = allPosts
    .map((post) => ({ ...post, link: safeBlogUrl(post.link) }))
    .filter((post): post is WordPressPost & { link: string } =>
      Boolean(post.link),
    );

  let selected = normalized.filter((post) => matchesLocale(post.link, locale));
  if (locale === "en" && selected.length < 4) {
    selected = normalized.filter((post) => matchesLocale(post.link, "ko"));
  }
  selected = selected.slice(0, 4);
  if (selected.length < 4) throw new Error("Not enough localized posts");

  return Promise.all(
    selected.map(async (post) => {
      let media: WordPressMedia | null = null;
      if (post.featured_media) {
        const mediaEndpoint = `${BLOG_ORIGIN}/wp-json/wp/v2/media/${post.featured_media}?_fields=source_url,alt_text,media_details`;
        media = await fetchJson<WordPressMedia>(mediaEndpoint).catch(
          () => null,
        );
      }
      const mediumImage = media?.media_details?.sizes?.medium_large?.source_url;
      return {
        date: typeof post.date === "string" ? post.date : "",
        link: post.link,
        title: post.title?.rendered ?? "",
        excerpt: post.excerpt?.rendered ?? "",
        image: safeBlogUrl(mediumImage ?? media?.source_url),
        imageAlt: media?.alt_text ?? "",
      };
    }),
  );
}

function serialize(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function updater(posts: LivePost[], locale: string) {
  const payload = serialize(posts);
  const selectedLocale = serialize(locale);
  return `(() => {
    const section = document.querySelector('[data-live-blog]');
    if (!section) return;
    const posts = ${payload};
    const locale = ${selectedLocale};
    const labels = {
      ko: { meta: '최신 기술자료', success: '최신 기술글로 갱신되었습니다.' },
      en: { meta: 'Latest technical article', success: 'Latest articles loaded.' },
      vi: { meta: 'Bài kỹ thuật mới', success: 'Đã tải các bài kỹ thuật mới nhất.' }
    };
    const htmlToText = (html) => {
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      return (parsed.body.textContent || '').replace(/\\s+/g, ' ').trim();
    };
    const localeMap = { ko: 'ko-KR', en: 'en-GB', vi: 'vi-VN' };
    posts.forEach((post, index) => {
      const card = section.querySelector('[data-blog-card="' + index + '"]');
      if (!card) return;
      card.querySelectorAll('[data-blog-link]').forEach((link) => { link.href = post.link; });
      const title = card.querySelector('[data-blog-title]');
      const summary = card.querySelector('[data-blog-summary]');
      const date = card.querySelector('[data-blog-date]');
      const meta = card.querySelector('[data-blog-meta]');
      const image = card.querySelector('[data-blog-image]');
      if (title) title.textContent = htmlToText(post.title);
      if (summary) summary.textContent = htmlToText(post.excerpt);
      if (date && post.date) {
        const parsedDate = new Date(post.date);
        date.dateTime = post.date;
        date.textContent = new Intl.DateTimeFormat(localeMap[locale] || 'ko-KR', {
          year: 'numeric', month: '2-digit', day: '2-digit'
        }).format(parsedDate);
      }
      if (meta) meta.textContent = (labels[locale] || labels.ko).meta;
      if (image && post.image) { image.src = post.image; image.alt = post.imageAlt || ''; }
    });
    const status = section.querySelector('[data-blog-status]');
    if (status) status.textContent = (labels[locale] || labels.ko).success;
  })();`;
}

function javascript(body: string, maxAge = 300) {
  return new Response(body, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": `public, max-age=${maxAge}, s-maxage=${maxAge}, stale-while-revalidate=86400`,
      "x-content-type-options": "nosniff",
    },
  });
}

async function handleGet(context: { request: Request }) {
  const requestUrl = new URL(context.request.url);
  const requestedLocale = requestUrl.searchParams.get("locale") ?? "ko";
  const locale = VALID_LOCALES.has(requestedLocale) ? requestedLocale : "ko";

  try {
    const posts = await loadPosts(locale);
    return javascript(updater(posts, locale));
  } catch {
    return javascript("(() => {})();", 60);
  }
}

export const onRequest = async (context: { request: Request }) => {
  if (context.request.method !== "GET") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { allow: "GET" },
    });
  }
  return handleGet(context);
};

export const onRequestGet = handleGet;
