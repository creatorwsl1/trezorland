import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks } from "@/components/related-links"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Аксессуары для Trezor - Купить Чехлы, Кабели и Защиту | Официальный Магазин",
  description:
    "Оригинальные аксессуары для Trezor: защитные чехлы, USB-кабели, карты для seed-фраз. Дополните свой hardware wallet.",
  keywords: "аксессуары trezor, чехол для trezor, кабель trezor, защита hardware wallet",
}

export default function AccessoriesPage() {
  const accessories = [
    {
      name: "Защитный чехол Trezor",
      price: "$19.99",
      description: "Премиум кожаный чехол для защиты вашего устройства",
    },
    {
      name: "USB-C кабель",
      price: "$12.99",
      description: "Официальный кабель для подключения Trezor",
    },
    {
      name: "Seed Card набор",
      price: "$24.99",
      description: "Металлические карты для хранения seed-фразы",
    },
    {
      name: "Trezor Backup Pack",
      price: "$39.99",
      description: "Комплект для безопасного хранения резервных копий",
    },
    {
      name: "Screen Protector",
      price: "$14.99",
      description: "Защитное стекло для сенсорного экрана",
    },
    {
      name: "Carrying Case",
      price: "$29.99",
      description: "Компактный кейс для транспортировки",
    },
  ]

  const relatedLinks = [
    {
      title: "Все модели Trezor",
      description: "Сравните Model One, Safe 3 и Safe 5",
      href: "/products/model-one",
      category: "Продукты",
    },
    {
      title: "Гарантия",
      description: "Условия гарантийного обслуживания",
      href: "/support/warranty",
      category: "Поддержка",
    },
    {
      title: "О компании",
      description: "История и миссия Trezor",
      href: "/company/about",
      category: "Компания",
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Продукты", href: "/products/accessories" },
          { label: "Аксессуары", href: "/products/accessories" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold mb-6">Аксессуары для Trezor</h1>
          <p className="text-xl text-muted-foreground">
            Оригинальные аксессуары для защиты и удобства использования вашего аппаратного кошелька Trezor. Чехлы,
            кабели, металлические карты для seed-фраз и другие полезные дополнения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {accessories.map((item, index) => (
            <div key={item.name} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-4 bg-muted/30 rounded-lg">
                <Image
                  src={`/trezor-accessory-.jpg?height=200&width=200&query=trezor ${item.name}`}
                  alt={`${item.name} - аксессуар для Trezor hardware wallet`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <p className="text-lg font-bold text-primary mb-4">{item.price}</p>
              <Button className="w-full">Добавить в корзину</Button>
            </div>
          ))}
        </div>

        <article className="prose prose-lg max-w-none">
          <h2>Зачем нужны аксессуары для Trezor?</h2>
          <p>
            Аксессуары для вашего аппаратного кошелька <strong>Trezor</strong> помогают защитить устройство от
            повреждений, удобно хранить и транспортировать его, а также безопасно резервировать seed-фразу. Все
            аксессуары разработаны с учетом высоких стандартов качества и полностью совместимы с моделями Model One,
            Safe 3 и Safe 5.
          </p>

          <h3>Популярные аксессуары</h3>
          <ul>
            <li>
              <strong>Защитные чехлы</strong> - предотвращают царапины и падения
            </li>
            <li>
              <strong>Металлические карты</strong> - вечное хранение seed-фразы
            </li>
            <li>
              <strong>Кабели USB-C</strong> - надежное подключение к компьютеру
            </li>
            <li>
              <strong>Защитные стекла</strong> - для сенсорных моделей Safe 5
            </li>
          </ul>
        </article>
      </div>

      <RelatedLinks links={relatedLinks} />
    </>
  )
}
