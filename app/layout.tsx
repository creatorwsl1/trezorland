import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import YandexMetrika from "@/components/yandex-metrika"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard",

  description:
    "Trezor.io/start — your gateway to the Trezor Suite App on web and desktop for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface.",

  keywords: [
    "trezor",
    "trezor suite",
    "trezor suite app",
    "trezor suite download",
    "trezor suite desktop",
    "trezor suite web",
    "trezor app",
    "trezor wallet",
    "trezor official",
    "asset dashboard",
    "crypto dashboard",
    "купить trezor",
    "trezor цена",
    "trezor купить официально",
    "trezor россия",
    "trezor safe 5 купить",
    "trezor safe 3 купить",
    "trezor model one купить",
    "hardware wallet купить",
    "аппаратный кошелек купить",
    "холодный кошелек",
    "где купить trezor",
    "trezor официальный сайт",
    "bitcoin кошелек купить",
    "ethereum кошелек",
    "trezor доставка",
    "trezor отзывы",
    "trezor инструкция",
    "trezor suite скачать",
    "trezor кошелек",
    "приложение trezor",
    "hardware wallet",
    "аппаратный кошелек",
    "холодный кошелек",
    "bitcoin кошелек",
    "криптокошелек",
  ],

  authors: [{ name: "Trezor Official", url: "https://trezor.io-start.app" }],
  creator: "Trezor",
  publisher: "Trezor",

  metadataBase: new URL("https://trezor.io-start.app"),

  alternates: {
    canonical: "https://trezor.io-start.app",
    languages: {
      "ru-RU": "https://trezor.io-start.app",
      "x-default": "https://trezor.io-start.app",
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://trezor.io-start.app",
    siteName: "Trezor Suite App (Official)",
    title: "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard",
    description:
      "Trezor.io/start — your gateway to the Trezor Suite App on web and desktop for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface.",
    images: [
      {
        url: "https://trezor.io-start.app/trezor-hardware-wallet-device.jpg",
        width: 1200,
        height: 630,
        alt: "Trezor Suite App — Official Desktop & Web Crypto Dashboard",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Trezor",
    creator: "@Trezor",
    title: "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard",
    description:
      "Trezor.io/start — your gateway to the Trezor Suite App on web and desktop for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface.",
    images: ["https://trezor.io-start.app/trezor-hardware-wallet-device.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "2e982110b143f175",
  },

  other: {
    "yandex-verification": "2e982110b143f175",
    "turbo-enabled": "true",
    "geo.region": "RU-MOW",
    "geo.placename": "Москва, Россия",
    ICBM: "55.751244, 37.618423",
    "DC.title": "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard",
    "DC.description":
      "Trezor.io/start — your gateway to the Trezor Suite App on web and desktop for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface.",
    "document-state": "Dynamic",
    revisit: "1 days",
    "revisit-after": "1 days",
    "last-modified": new Date().toISOString(),
    audience: "all",
    distribution: "global",
    rating: "general",
    "yandex-tableaux": "true",
    "yandex-recommendations": "true",
    "content-language": "ru",
    "document-type": "Software Application Page",
    "article:reading_time": "8",
    "article:content_tier": "free",
    "business:type": "Software",
    "business:hours": "Mo-Su 00:00-24:00",
    "business:contact:email": "support@trezor.io-start.app",
  },

  category: "Software, Cryptocurrency, Finance",
  classification: "Cryptocurrency Asset Management Software",
  generator: "Next.js 16",

  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#1A1A1A",
      },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article#">
      <head>
        <meta name="yandex-verification" content="2e982110b143f175" />

        <link rel="canonical" href="https://trezor.io-start.app/" />

        <link rel="alternate" hrefLang="ru" href="https://trezor.io-start.app/" />
        <link rel="alternate" hrefLang="x-default" href="https://trezor.io-start.app/" />

        <link rel="preconnect" href="https://mc.yandex.ru" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://yastatic.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://yastatic.net" />
        <link rel="preconnect" href="https://vercel.live" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicon.png" color="#1A1A1A" />

        <link rel="alternate" type="application/rss+xml" title="Trezor Blog RSS" href="/rss.xml" />
        <link rel="alternate" type="application/rss+xml" title="Turbo Pages" href="/turbo-rss.xml" />
        <link rel="alternate" type="application/xml" title="Яндекс.Маркет" href="/yandex-market.xml" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
        <YandexMetrika />
      </body>
    </html>
  )
}
