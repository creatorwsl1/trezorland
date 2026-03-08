import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks } from "@/components/related-links"
import { ProductNavigation } from "@/components/product-navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trezor Model One - Купить Аппаратный Кошелек | Официальный Магазин",
  description:
    "Trezor Model One - проверенный временем аппаратный кошелек для криптовалюты. Поддержка 1000+ монет, простой интерфейс, доступная цена $59. Купить с доставкой.",
  keywords: "trezor model one, купить trezor, аппаратный кошелек, hardware wallet",
}

export default function ModelOnePage() {
  const relatedLinks = [
    {
      title: "Trezor Safe 5",
      description: "Флагманская модель с цветным экраном и расширенными возможностями",
      href: "/products/safe-5",
      category: "Продукты",
    },
    {
      title: "Как настроить Trezor",
      description: "Пошаговая инструкция по первичной настройке вашего кошелька",
      href: "/support/setup",
      category: "Поддержка",
    },
    {
      title: "Сравнение моделей",
      description: "Выберите идеальный Trezor для ваших нужд",
      href: "/products/accessories",
      category: "Гайды",
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Продукты", href: "/products/model-one" },
          { label: "Trezor Model One", href: "/products/model-one" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Trezor Model One — Купить Оригинальный Аппаратный Кошелек</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Золотой стандарт среди аппаратных кошельков Trezor. Безопасный, доступный и простой в использовании
              hardware wallet для защиты ваших криптоактивов.
            </p>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-4">Технические характеристики</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Поддержка монет:</strong> 1000+ криптовалют
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Экран:</strong> OLED 128x64
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Интерфейс:</strong> 2 физические кнопки
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Подключение:</strong> USB-C
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Защита:</strong> PIN-код, seed-фраза 24 слова
                </li>
              </ul>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Проверенная репутация безопасности с 2013 года
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Совместимость с Bitcoin, Ethereum, Litecoin и 1000+ монет
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Простой двухкнопочный интерфейс для максимальной безопасности
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Открытый исходный код — полная прозрачность
              </li>
            </ul>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Купить за $59
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/support/setup">Инструкция</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] bg-muted/30 rounded-xl flex items-center justify-center">
            <Image
              src="/trezor-model-one-hardware-wallet.jpg"
              alt="Trezor Model One - аппаратный криптокошелек для безопасного хранения Bitcoin и криптовалюты"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <h2>Почему выбирают Trezor Model One?</h2>
          <p>
            <strong>Trezor Model One</strong> — это первый в мире аппаратный кошелек для криптовалюты, который установил
            стандарты безопасности в индустрии. С момента выпуска в 2013 году, этот hardware wallet защитил миллиарды
            долларов цифровых активов пользователей по всему миру.
          </p>

          <h3>Что делает Trezor Model One особенным?</h3>
          <p>
            В отличие от программных кошельков, Trezor Model One хранит ваши приватные ключи в изолированной среде
            офлайн. Это означает, что даже если ваш компьютер заражен вирусами, ваша криптовалюта остается в
            безопасности. Каждая транзакция подтверждается физическим нажатием кнопок на устройстве.
          </p>

          <h3>Для кого подходит этот кошелек?</h3>
          <ul>
            <li>Начинающие криптоинвесторы, ценящие простоту использования</li>
            <li>Владельцы Bitcoin, Ethereum и других популярных криптовалют</li>
            <li>Пользователи, которым нужен надежный резервный кошелек</li>
            <li>Те, кто ищет проверенное временем решение по доступной цене</li>
          </ul>
        </article>

        <ProductNavigation nextProduct={{ name: "Trezor Safe 5", href: "/products/safe-5" }} />
      </div>

      <RelatedLinks links={relatedLinks} />
    </>
  )
}
