import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks } from "@/components/related-links"
import { ProductNavigation } from "@/components/product-navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trezor Safe 3 - Купить Защищенный Аппаратный Кошелек | EAL6+ Secure Element",
  description:
    "Trezor Safe 3 - продвинутый hardware wallet с защищенным элементом EAL6+, ярким OLED экраном и passphrase защитой. Купить за $79.",
  keywords: "trezor safe 3, купить trezor safe 3, secure element кошелек, hardware wallet безопасность",
}

export default function Safe3Page() {
  const relatedLinks = [
    {
      title: "Trezor Model One",
      description: "Классический аппаратный кошелек по доступной цене",
      href: "/products/model-one",
      category: "Продукты",
    },
    {
      title: "Центр помощи",
      description: "Ответы на часто задаваемые вопросы о Trezor",
      href: "/support/help-center",
      category: "Поддержка",
    },
    {
      title: "Контакты",
      description: "Свяжитесь с нашей службой поддержки",
      href: "/support/contact",
      category: "Поддержка",
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Продукты", href: "/products/safe-3" },
          { label: "Trezor Safe 3", href: "/products/safe-3" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Trezor Safe 3 — Защищенный Аппаратный Кошелек</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Безопасность нового поколения с выделенным защищенным элементом EAL6+. Идеальный баланс цены и
              функциональности для защиты ваших криптоактивов.
            </p>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-4">Технические характеристики</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Защищенный элемент:</strong> EAL6+ сертифицированный чип
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Экран:</strong> Яркий OLED дисплей
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Кнопки:</strong> Сенсорное управление
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Монеты:</strong> 5000+ криптовалют
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <strong>Passphrase:</strong> Дополнительная защита кодовой фразой
                </li>
              </ul>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Защищенный элемент EAL6+ для максимальной безопасности
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Яркий OLED экран для четкого отображения информации
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Passphrase защита для создания скрытых кошельков
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Совместимость с Trezor Suite и сторонними приложениями
              </li>
            </ul>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Купить за $79
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/support/setup">Настройка</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] bg-muted/30 rounded-xl flex items-center justify-center">
            <Image
              src="/trezor-safe-3-hardware-wallet.jpg"
              alt="Trezor Safe 3 - защищенный аппаратный кошелек с EAL6+ элементом"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <h2>Что такое защищенный элемент EAL6+?</h2>
          <p>
            <strong>Trezor Safe 3</strong> оснащен защищенным элементом (Secure Element) с сертификацией EAL6+ — высшим
            уровнем безопасности в индустрии. Этот специализированный чип обеспечивает защиту от физических атак и
            несанкционированного доступа к вашим приватным ключам.
          </p>

          <h3>Преимущества Trezor Safe 3</h3>
          <ul>
            <li>Защита от сложных хакерских атак благодаря EAL6+ элементу</li>
            <li>Оптимальное соотношение цены и функциональности</li>
            <li>Поддержка большинства популярных криптовалют и токенов</li>
            <li>Возможность создания скрытых кошельков с помощью passphrase</li>
          </ul>
        </article>

        <ProductNavigation
          prevProduct={{ name: "Trezor Safe 5", href: "/products/safe-5" }}
          nextProduct={{ name: "Аксессуары", href: "/products/accessories" }}
        />
      </div>

      <RelatedLinks links={relatedLinks} />
    </>
  )
}
