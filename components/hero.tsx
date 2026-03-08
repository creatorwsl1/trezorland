"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Shield, CheckCircle, Download, Monitor } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function Hero() {
  const { openCart } = useCart()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content="Trezor Suite App (Official) | Desktop & Web Crypto Dashboard" />
      <meta itemProp="brand" content="Trezor" />
      <meta itemProp="category" content="Hardware Wallets" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 text-green-700 dark:text-green-400 text-sm font-medium border border-green-600/20">
              <Shield className="h-4 w-4" />
              <span>Official Trezor Suite App</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-600/20">
              <Download className="h-4 w-4" />
              <span>Free Download</span>
            </div>
            <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <span className="text-sm font-medium">4.8/5 (15,734 reviews)</span>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight tracking-tight text-balance"
            itemProp="name"
          >
            Trezor Suite App (Official)
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground">
              Desktop & Web Crypto Dashboard
            </span>
          </h1>

          <p className="hero-description text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            <strong>Trezor.io/start</strong> — your gateway to the <strong>Trezor Suite App</strong> on web and desktop
            for managing crypto wallets, tracking balances, and accessing digital assets through a secure interface.
            Download <strong>Trezor Suite</strong> for Windows, macOS, Linux or use the web version.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Free Trezor Suite", "2 Year Warranty", "Worldwide Shipping", "From $59", "5M+ Users"].map(
              (benefit, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                  {benefit}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg" asChild>
              <Link href="#products" title="Buy Trezor Hardware Wallet">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Trezor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base bg-transparent border-2"
              asChild
            >
              <Link href="#trezor-suite" title="Download Trezor Suite App Free">
                <Monitor className="mr-2 h-5 w-5" />
                Download Trezor Suite
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              In Stock
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Fast Delivery
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Trezor Suite Included
            </span>
          </div>
        </div>

        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="relative z-10 rounded-3xl overflow-hidden bg-secondary p-8 md:p-12">
            <img
              src="/trezor-hardware-wallet-device.jpg"
              alt="Trezor Suite App - Official Desktop and Web Crypto Dashboard for Crypto Management"
              title="Trezor Suite App - Manage Bitcoin, Ethereum and 1000+ cryptocurrencies"
              className="w-full h-auto max-h-[500px] object-contain"
              loading="eager"
              width="800"
              height="500"
              fetchPriority="high"
              itemProp="image"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 h-64 w-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -top-8 -right-8 h-64 w-64 bg-muted rounded-full blur-3xl" aria-hidden="true" />
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { value: "$59", label: "Starting Price" },
            { value: "5M+", label: "Trezor Users" },
            { value: "1000+", label: "Cryptocurrencies" },
            { value: "0", label: "Hacks in 10+ Years" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-medium">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1 max-w-[140px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
