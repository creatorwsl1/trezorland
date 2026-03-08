"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, ChevronDown, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import { MobileMenu } from "./mobile-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const { totalItems, setIsCartOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navLinks = [
    {
      title: "Продукты",
      items: [
        { name: "Trezor Model One", href: "/products/model-one", desc: "Оригинальный hardware wallet" },
        { name: "Trezor Safe 3", href: "/products/safe-3", desc: "Защита Secure Element" },
        { name: "Trezor Safe 5", href: "/products/safe-5", desc: "Премиум сенсорный экран" },
        { name: "Аксессуары", href: "/products/accessories", desc: "Чехлы, кабели и другое" },
      ],
    },
    {
      title: "Поддержка",
      items: [
        { name: "Центр помощи", href: "/support/help-center", desc: "Инструкции и решения" },
        { name: "Настройка", href: "/support/setup", desc: "Начало работы" },
        { name: "Контакты", href: "/support/contact", desc: "Связаться с нами" },
      ],
    },
    {
      title: "Компания",
      items: [
        { name: "О нас", href: "/company/about", desc: "Наша миссия и история" },
        { name: "Блог", href: "/company/blog", desc: "Новости и статьи" },
      ],
    },
  ]

  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-foreground flex items-center justify-center text-background font-bold text-lg transition-transform group-hover:scale-105">
                T
              </div>
              <span className="text-xl font-semibold tracking-tight">Trezor</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary">
                    {link.title}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeDropdown === link.title && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute top-full left-0 w-72 p-3 mt-2 bg-card border border-border rounded-2xl shadow-xl transition-all duration-300 opacity-0 translate-y-4 invisible",
                      activeDropdown === link.title && "opacity-100 translate-y-0 visible",
                    )}
                  >
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors group/item"
                      >
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative rounded-full" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button className="hidden md:flex rounded-full px-6" asChild>
              <Link href="/products/safe-5">
                Купить Trezor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
