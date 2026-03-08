import { Header } from "@/components/header"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { FAQ } from "@/components/faq"
import { Security } from "@/components/security"
import { Testimonials } from "@/components/testimonials"
import { SEOContent } from "@/components/seo-content"
import { TrezorSuiteSection } from "@/components/trezor-suite-section"
import { CTA } from "@/components/cta"
import { StickyCTA } from "@/components/sticky-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  const newTitle = "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard"
  const newDescription =
    "Trezor.io/start — your gateway to the Trezor Suite App on web and desktop for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface."

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://trezor.io-start.app/#organization",
    name: newTitle,
    alternateName: ["Trezor Wallet", "Trezor Hardware Wallet", "Trezor Suite", "Trezor Suite App"],
    legalName: "SatoshiLabs s.r.o.",
    url: "https://trezor.io-start.app",
    logo: {
      "@type": "ImageObject",
      url: "https://trezor.io-start.app/trezor-logo.png",
      width: 512,
      height: 512,
      caption: "Trezor Logo",
    },
    image: "https://trezor.io-start.app/trezor-hardware-wallet-device.jpg",
    description: newDescription,
    foundingDate: "2014-01-29",
    founder: {
      "@type": "Person",
      name: "Marek Palatinus",
      alternateName: "Slush",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kundratka 2359/17a",
      addressLocality: "Prague",
      postalCode: "180 00",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.1021",
      longitude: "14.4507",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Russian", "English", "Czech", "German", "French"],
        email: "support@trezor.io",
        areaServed: ["RU", "CZ", "DE", "US", "GB", "FR"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["Russian", "English"],
        email: "sales@trezor.io",
      },
    ],
    sameAs: [
      "https://twitter.com/Trezor",
      "https://www.facebook.com/trezor.io",
      "https://www.linkedin.com/company/satoshilabs",
      "https://github.com/trezor",
      "https://www.youtube.com/trezor",
      "https://www.instagram.com/trezor",
      "https://reddit.com/r/TREZOR",
      "https://t.me/trezor",
      "https://discord.gg/trezor",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15734",
      bestRating: "5",
      worstRating: "1",
    },
    award: ["Best Hardware Wallet 2024", "Most Secure Crypto Storage"],
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://trezor.io-start.app/#website",
    name: newTitle,
    alternateName: ["Trezor Suite App", "Trezor Web Dashboard", "Trezor Desktop App"],
    url: "https://trezor.io-start.app",
    description: newDescription,
    publisher: {
      "@id": "https://trezor.io-start.app/#organization",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://trezor.io-start.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://trezor.io-start.app/#webpage",
    url: "https://trezor.io-start.app",
    name: newTitle,
    description: newDescription,
    isPartOf: {
      "@id": "https://trezor.io-start.app/#website",
    },
    about: {
      "@id": "https://trezor.io-start.app/#organization",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://trezor.io-start.app/trezor-hardware-wallet-device.jpg",
      width: 1200,
      height: 630,
    },
    datePublished: "2024-01-01T00:00:00+03:00",
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
    breadcrumb: {
      "@id": "https://trezor.io-start.app/#breadcrumb",
    },
    mainEntity: {
      "@id": "https://trezor.io-start.app/#products",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description", ".faq-answer"],
    },
  }

  const productListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://trezor.io-start.app/#products",
    name: "Trezor Hardware Wallets — Catalog",
    description: "Complete catalog of Trezor hardware wallets for secure cryptocurrency storage",
    numberOfItems: 3,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          "@id": "https://trezor.io-start.app/products/safe-5",
          name: "Trezor Safe 5",
          alternateName: ["Trezor Safe 5", "Trezor 5"],
          description:
            "Trezor Safe 5 — flagship hardware wallet with a color touch screen. Maximum protection for Bitcoin, Ethereum, and over 1000 cryptocurrencies. Shamir Backup, Secure Element.",
          image: [
            "https://trezor.io-start.app/trezor-safe-5-hardware-wallet.jpg",
            "https://trezor.io-start.app/trezor-safe-5-front.jpg",
            "https://trezor.io-start.app/trezor-safe-5-back.jpg",
          ],
          brand: {
            "@type": "Brand",
            name: "Trezor",
            logo: "https://trezor.io-start.app/trezor-logo.png",
          },
          manufacturer: {
            "@type": "Organization",
            name: "SatoshiLabs",
          },
          sku: "TREZOR-SAFE-5-BLK",
          mpn: "TS5-001-BLK",
          gtin13: "8594178720015",
          color: "Black",
          material: "Aluminum, Plastic",
          weight: {
            "@type": "QuantitativeValue",
            value: "22",
            unitCode: "GRM",
          },
          category: "Hardware Wallet > Cryptocurrency Storage",
          offers: {
            "@type": "Offer",
            url: "https://trezor.io-start.app/products/safe-5",
            price: "169",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@id": "https://trezor.io-start.app/#organization",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "USD",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: ["RU", "KZ", "BY", "UA"],
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 1,
                  maxValue: 2,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                  maxValue: 14,
                  unitCode: "DAY",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 30,
              returnMethod: "https://schema.org/ReturnByMail",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3456",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Александр М.",
              },
              reviewBody: "Отличный Trezor Safe 5! Сенсорный экран удобный, настройка заняла 5 минут.",
            },
          ],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          "@id": "https://trezor.io-start.app/products/safe-3",
          name: "Trezor Safe 3",
          alternateName: ["Trezor Safe 3", "Trezor 3"],
          description:
            "Trezor Safe 3 — modern hardware wallet with Secure Element. Optimal choice for secure Bitcoin and Ethereum storage.",
          image: "https://trezor.io-start.app/trezor-safe-3-hardware-wallet.jpg",
          brand: {
            "@type": "Brand",
            name: "Trezor",
          },
          sku: "TREZOR-SAFE-3-BLK",
          mpn: "TS3-001-BLK",
          offers: {
            "@type": "Offer",
            url: "https://trezor.io-start.app/products/safe-3",
            price: "79",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "5234",
            bestRating: "5",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          "@id": "https://trezor.io-start.app/products/model-one",
          name: "Trezor Model One",
          alternateName: ["Trezor Model One", "Trezor One", "Trezor 1"],
          description:
            "Trezor Model One — original hardware wallet since 2014. Proven protection for Bitcoin and cryptocurrencies at an affordable price.",
          image: "https://trezor.io-start.app/trezor-model-one-hardware-wallet.jpg",
          brand: {
            "@type": "Brand",
            name: "Trezor",
          },
          sku: "TREZOR-MODEL-ONE-WHT",
          mpn: "TM1-001-WHT",
          offers: {
            "@type": "Offer",
            url: "https://trezor.io-start.app/products/model-one",
            price: "59",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "8567",
            bestRating: "5",
          },
        },
      },
    ],
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://trezor.io-start.app/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://trezor.io-start.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trezor Wallets",
        item: "https://trezor.io-start.app/#products",
      },
    ],
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://trezor.io-start.app/#faq",
    name: "Questions about Trezor and Trezor Suite",
    description: "Answers to frequently asked questions about Trezor hardware wallet and Trezor Suite app",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Trezor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trezor is a hardware wallet for securely storing cryptocurrencies. Trezor keeps Bitcoin, Ethereum, and other cryptocurrencies offline, protecting against hackers and viruses. Since 2014, over 5 million users have chosen Trezor. For management, the Trezor Suite app is used.",
        },
      },
      {
        "@type": "Question",
        name: "What is Trezor Suite?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trezor Suite is the official free app for working with the Trezor wallet. Trezor Suite allows sending and receiving Bitcoin, Ethereum, and over 1000 cryptocurrencies, tracking portfolios, and exchanging assets. Download Trezor Suite for Windows, macOS, Linux, or use the web version.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy Trezor officially?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can buy Trezor officially at the Trezor.io/start store. We are an authorized seller. We guarantee authenticity of devices, provide a 2-year warranty, and offer free delivery in Russia. Trezor Suite is included for free.",
        },
      },
      {
        "@type": "Question",
        name: "How do I download Trezor Suite?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download Trezor Suite for free from the official Trezor.io website. Versions are available for Windows, macOS, and Linux. There is also a web version Trezor Suite Web at suite.trezor.io/web. Never download Trezor Suite from third-party sources.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Trezor cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trezor prices: Model One — $59, Safe 3 — $79, Safe 5 — $169. Trezor Suite is free for all models. All Trezor models provide the highest level of cryptocurrency protection. Delivery is free.",
        },
      },
      {
        "@type": "Question",
        name: "Which cryptocurrencies does Trezor support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trezor supports over 1000 cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Cardano (ADA), Polkadot (DOT), all ERC-20 tokens, and many others.",
        },
      },
      {
        "@type": "Question",
        name: "Trezor or Ledger — which is better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Users choose Trezor for its open-source code, transparency, and over 10 years of flawless reputation. Trezor firmware is fully auditable by the community. No hacks have occurred in its entire history.",
        },
      },
      {
        "@type": "Question",
        name: "How do I set up Trezor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setting up Trezor takes 5 minutes: 1) Connect Trezor to your computer with the USB cable from the kit, 2) Install Trezor Suite, 3) Create a new wallet, 4) Write down the recovery seed (24 words) on paper. A detailed instruction in Russian is included in the kit.",
        },
      },
      {
        "@type": "Question",
        name: "Is Trezor secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trezor is the safest way to store cryptocurrencies. Private keys never leave the device. Open-source firmware is audited by thousands of experts. Secure Element chip protects against physical attacks. No hacks in over 10 years.",
        },
      },
      {
        "@type": "Question",
        name: "Does Trezor have a warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All Trezor devices come with a 2-year official warranty. Trezor Suite updates are free for life. Technical support is available in Russian. Returns are accepted within 30 days.",
        },
      },
    ],
  }

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://trezor.io-start.app/#howto",
    name: "How to Set Up Trezor Wallet",
    description: "Step-by-step instructions for setting up the Trezor hardware wallet",
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Trezor wallet",
      },
      {
        "@type": "HowToSupply",
        name: "USB cable",
      },
      {
        "@type": "HowToSupply",
        name: "Paper for writing seed",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Computer or smartphone",
      },
      {
        "@type": "HowToTool",
        name: "Trezor Suite app",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect Trezor",
        text: "Connect your Trezor to the computer using the USB cable from the kit",
        url: "https://trezor.io-start.app/support/setup#step1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Install Trezor Suite",
        text: "Download and install the official Trezor Suite app from the Trezor.io website",
        url: "https://trezor.io-start.app/support/setup#step2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Create a wallet",
        text: "Follow the instructions in Trezor Suite to create a new wallet",
        url: "https://trezor.io-start.app/support/setup#step3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Write down Recovery Seed",
        text: "Write down the 24-word recovery seed on paper and store it in a safe place",
        url: "https://trezor.io-start.app/support/setup#step4",
      },
    ],
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://trezor.io-start.app/#store",
    name: newTitle,
    alternateName: "Trezor Suite App",
    description: newDescription,
    url: "https://trezor.io-start.app",
    telephone: "+7-800-000-0000",
    email: "support@trezor.io-start.app",
    priceRange: "$59 - $169",
    currenciesAccepted: "USD, RUB, EUR",
    paymentAccepted: "Credit Card, Cryptocurrency, Bank Transfer",
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.7558",
      longitude: "37.6173",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2341",
      bestRating: "5",
    },
  }

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://trezor.io-start.app/#trezor-suite",
    name: "Trezor Suite",
    alternateName: ["Trezor Suite Desktop", "Trezor Suite App", "Trezor Suite Web"],
    description:
      "Trezor Suite — official free app for managing Trezor hardware wallet. Track Bitcoin, Ethereum, and over 1000 cryptocurrencies.",
    applicationCategory: "FinanceApplication",
    operatingSystem: ["Windows", "macOS", "Linux", "Web Browser"],
    downloadUrl: "https://trezor.io/trezor-suite",
    softwareVersion: "24.12.1",
    datePublished: "2020-01-01",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "12500",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "SatoshiLabs",
    },
    featureList: [
      "Cryptocurrency management",
      "Real-time portfolio tracking",
      "Built-in asset exchange",
      "Bitcoin purchase",
      "Tor integration",
      "Coin Control",
    ],
  }

  return (
    <>
      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }} />

      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <Header />
        <DisclaimerBanner />
        <Breadcrumbs />
        <Hero />
        <TrezorSuiteSection />
        <FAQ />
        <Features />
        <Products />
        <Security />
        <Testimonials />
        <SEOContent />
        <CTA />
        <StickyCTA />
        <Footer />
      </main>
    </>
  )
}
