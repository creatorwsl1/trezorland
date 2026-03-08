export async function GET() {
  const baseUrl = "https://trezor.io-start.app"
  const currentDate = new Date().toISOString()

  const pages = [
    // Главная - максимальный приоритет
    { url: "", priority: 1.0, changefreq: "hourly", lastmod: currentDate },

    // Продукты - высокий приоритет (коммерческие страницы)
    { url: "/products/safe-5", priority: 0.95, changefreq: "daily", lastmod: currentDate },
    { url: "/products/safe-3", priority: 0.95, changefreq: "daily", lastmod: currentDate },
    { url: "/products/model-one", priority: 0.95, changefreq: "daily", lastmod: currentDate },
    { url: "/products/accessories", priority: 0.85, changefreq: "weekly", lastmod: currentDate },

    // Поддержка - средний приоритет
    { url: "/support/help-center", priority: 0.8, changefreq: "weekly", lastmod: currentDate },
    { url: "/support/setup", priority: 0.8, changefreq: "monthly", lastmod: currentDate },
    { url: "/support/contact", priority: 0.7, changefreq: "monthly", lastmod: currentDate },
    { url: "/support/warranty", priority: 0.7, changefreq: "monthly", lastmod: currentDate },

    // Компания
    { url: "/company/about", priority: 0.7, changefreq: "monthly", lastmod: currentDate },
    { url: "/company/blog", priority: 0.8, changefreq: "daily", lastmod: currentDate },
    { url: "/company/careers", priority: 0.5, changefreq: "weekly", lastmod: currentDate },
    { url: "/company/press", priority: 0.5, changefreq: "monthly", lastmod: currentDate },

    // Юридические
    { url: "/legal/privacy", priority: 0.3, changefreq: "yearly", lastmod: "2024-01-01" },
    { url: "/legal/terms", priority: 0.3, changefreq: "yearly", lastmod: "2024-01-01" },
    { url: "/legal/cookies", priority: 0.3, changefreq: "yearly", lastmod: "2024-01-01" },
  ]

  // Изображения для Image Sitemap
  const images = [
    {
      loc: "/trezor-hardware-wallet-device.jpg",
      title: "Trezor Suite App",
      caption: "Trezor Suite App — Desktop & Web Crypto Dashboard",
    },
    {
      loc: "/trezor-safe-5-hardware-wallet.jpg",
      title: "Trezor Safe 5",
      caption: "Trezor Safe 5 — flagship hardware wallet",
    },
    { loc: "/trezor-safe-3-hardware-wallet.jpg", title: "Trezor Safe 3", caption: "Trezor Safe 3 — optimal choice" },
    {
      loc: "/trezor-model-one-hardware-wallet.jpg",
      title: "Trezor Model One",
      caption: "Trezor Model One — classic wallet",
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}" />
  </url>`,
  )
  .join("\n")}
  
  <!-- Главная страница с изображениями -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
${images
  .map(
    (img) => `    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:geo_location>Russia</image:geo_location>
    </image:image>`,
  )
  .join("\n")}
  </url>
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
      "X-Robots-Tag": "noindex",
    },
  })
}
