"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const products = [
  {
    id: "trezor-one",
    name: "Trezor Model One",
    price: 59,
    image: "/trezor-one-hardware-wallet-white.jpg",
    features: [
      "Идеален для начинающих",
      "1000+ криптовалют",
      "USB подключение",
      "Физические кнопки",
      "Open-source прошивка",
    ],
    popular: false,
  },
  {
    id: "trezor-safe-5",
    name: "Trezor Safe 5",
    price: 169,
    image: "/trezor-safe-5-hardware-wallet-black.jpg",
    features: [
      "Цветной сенсорный экран",
      "Продвинутый чип безопасности",
      "Слот для SD карты",
      "Shamir Backup",
      "Премиум поддержка",
    ],
    popular: true,
  },
  {
    id: "trezor-safe-3",
    name: "Trezor Safe 3",
    price: 79,
    image: "/trezor-safe-3-hardware-wallet-black.jpg",
    features: [
      "Secure Element защита",
      "Тактильная обратная связь",
      "USB-C подключение",
      "Улучшенный дисплей",
      "Быстрый доступ",
    ],
    popular: false,
  },
]

export function Products() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <section id="products" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Каталог</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
            Выберите свой Trezor
          </h2>
          <p className="text-lg text-muted-foreground mt-6 text-pretty">
            Каждое устройство обеспечивает максимальную безопасность криптовалюты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <article
              key={index}
              className={`relative rounded-3xl bg-card overflow-hidden transition-all duration-300 hover:shadow-xl ${
                product.popular ? "ring-2 ring-foreground" : "border border-border"
              }`}
            >
              {product.popular && (
                <div className="absolute top-6 right-6 bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full z-10">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="p-8">
                {/* Product Image */}
                <div className="bg-secondary rounded-2xl p-8 mb-8">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} Hardware Wallet для криптовалюты`}
                    className="w-full h-48 object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <div className="text-4xl font-serif font-medium mt-2">${product.price}</div>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full h-12 ${product.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                    variant={product.popular ? "default" : "secondary"}
                    onClick={() => handleAddToCart(product)}
                  >
                    В корзину
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
