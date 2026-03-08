"use client"

import { Button } from "@/components/ui/button"
import { X, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  if (!isOpen) return null

  const menuItems = [
    {
      title: "Products",
      items: [
        { name: "Trezor Model One", href: "/products/model-one" },
        { name: "Trezor Safe 3", href: "/products/safe-3" },
        { name: "Trezor Safe 5", href: "/products/safe-5" },
        { name: "Accessories", href: "/products/accessories" },
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "/support/help-center" },
        { name: "Setup Guide", href: "/support/setup" },
        { name: "Contact Support", href: "/support/contact" },
        { name: "Warranty", href: "/support/warranty" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/company/about" },
        { name: "Blog", href: "/company/blog" },
        { name: "Careers", href: "/company/careers" },
        { name: "Press", href: "/company/press" },
      ]
    }
  ]

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-background shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <span className="text-xl font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {menuItems.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <div className="grid gap-2 pl-4 border-l-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t bg-muted/20">
          <Button className="w-full" size="lg" asChild>
            <Link href="/products/safe-5" onClick={onClose}>Shop Now</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
