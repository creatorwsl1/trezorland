"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none",
      )}
    >
      <Button
        size="lg"
        className="rounded-full px-8 h-14 text-base shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
        asChild
      >
        <Link href="#products">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Купить Trezor
        </Link>
      </Button>
    </div>
  )
}
