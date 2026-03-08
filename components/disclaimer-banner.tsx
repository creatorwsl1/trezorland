"use client"

import { AlertTriangle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("disclaimer-dismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("disclaimer-dismissed", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="sticky top-16 z-40 bg-yellow-50 border-y-2 border-yellow-400 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1 text-sm leading-relaxed">
            <p className="font-bold text-yellow-900 mb-2">Важная информация для покупателей Trezor</p>
            <p className="text-yellow-800">
              <strong>Этот сайт НЕ является официальным trezor.io.</strong> Мы — авторизованный продавец аппаратных
              кошельков Trezor в России. Все устройства оригинальные, поставляются напрямую от производителя SatoshiLabs
              s.r.o. (Чехия). Официальный сайт производителя:{" "}
              <a
                href="https://trezor.io"
                target="_blank"
                rel="noreferrer nofollow noopener"
                className="underline font-semibold"
              >
                trezor.io
              </a>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-yellow-600 hover:text-yellow-900 transition-colors flex-shrink-0"
            aria-label="Закрыть уведомление"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
