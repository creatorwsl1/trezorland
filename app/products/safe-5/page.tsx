import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks } from "@/components/related-links"
import { ProductNavigation } from "@/components/product-navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trezor Safe 5 - Купить Флагманский Аппаратный Кошелек | Цветной Экран",
  description:
    "Trezor Safe 5 - премиальный hardware wallet с цветным сенсорным экраном, защитой Gorilla Glass и расширенными функциями. Купить за $169 с доставкой.",
  keywords: "trezor safe 5, купить trezor safe 5, премиум кошелек, hardware wallet touchscreen",
}

export default function Safe5Page() {
  const relatedLinks = [
    {
      title: "Trezor Safe 3",
      description: "Продвинутая безопасность с выделенным защищенным элементом",
      href: "/products/safe-3",
      category: "Продукты",
    },
    {
      title: "Аксессуары для Trezor",
      description: "Защитные чехлы, кабели и другие дополнения",
      href: "/products/accessories",
      category: "Аксессуары",
    },
    {
      title: "Гарантия и возврат",
      description: "Условия гарантийного обслуживания Trezor",
      href: "/support/warranty",
      category: "Поддержка",
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Продукты", href: "/products/safe-5" },
          { label: "Trezor Safe 5", href: "/products/safe-5" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Trezor Safe 5 — Флагманский Аппаратный Кошелек</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Вершина технологий защиты криптовалюты. Премиальный hardware wallet с цветным сенсорным экраном,
              тактильной обратной связью и максимальной безопасностью.
            </p>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-4">Технические характеристики</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Экран:</strong> Цветной сенсорный дисплей
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Защита:</strong> Gorilla Glass 3
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Обратная связь:</strong> Haptic feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Поддержка:</strong> 8000+ криптовалют
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Конфиденциальность:</strong> Tor, Coinjoin
                </li>
              </ul>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Цветной сенсорный экран для удобного управления
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Защита Gorilla Glass от царапин и повреждений
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Расширенные функции конфиденциальности (Tor, Coinjoin)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Поддержка всех основных криптовалют и токенов
              </li>
            </ul>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Купить за $169
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/support/setup">Инструкция</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] bg-muted/30 rounded-xl flex items-center justify-center">
            <Image
              src="/trezor-safe-5-hardware-wallet.jpg"
              alt="Trezor Safe 5 - премиум аппаратный кошелек с сенсорным экраном"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <h2>Почему Trezor Safe 5 — лучший выбор для серьезных инвесторов?</h2>
          <p>
            <strong>Trezor Safe 5</strong> представляет собой вершину технологий в области аппаратных кошельков для
            криптовалюты. Этот флагманский hardware wallet сочетает передовую безопасность с премиальным
            пользовательским опытом благодаря цветному сенсорному экрану и тактильной обратной связи.
          </p>

          <h3>Для кого создан Trezor Safe 5?</h3>
          <ul>
            <li>Владельцы больших криптоактивов, требующие максимальной защиты</li>
            <li>Пользователи DeFi и NFT платформ</li>
            <li>Те, кто ценит удобство и современный дизайн</li>
            <li>Инвесторы, работающие с множеством различных криптовалют</li>
          </ul>
        </article>

        <ProductNavigation
          prevProduct={{ name: "Trezor Model One", href: "/products/model-one" }}
          nextProduct={{ name: "Trezor Safe 3", href: "/products/safe-3" }}
        />
      </div>

      <RelatedLinks links={relatedLinks} />
    </>
  )
}
