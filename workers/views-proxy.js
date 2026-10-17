const UPSTREAM = "https://komarev.com/ghpvc/?username=vokrob&color=178600";

export default {
  async fetch() {
    const upstream = await fetch(UPSTREAM, {
      headers: { "User-Agent": "github-camo" },
      cache: "no-store",
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") ?? "image/svg+xml",
        "Cache-Control": "no-cache, max-age=0, no-store, must-revalidate",
      },
    });
  },
};
