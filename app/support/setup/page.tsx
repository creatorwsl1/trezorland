import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedLinks } from "@/components/related-links"
import type { Metadata } from "next"
import { Download, Usb, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Настройка Trezor - Пошаговая Инструкция | Первичная Настройка Hardware Wallet",
  description:
    "Подробная инструкция по настройке Trezor: скачать Trezor Suite, подключить устройство, создать seed-фразу. Настройте свой аппаратный кошелек за 5 минут.",
  keywords: "настройка trezor, trezor suite, как настроить trezor, инструкция trezor",
}

export default function SetupPage() {
  const relatedLinks = [
    {
      title: "Центр помощи",
      description: "Ответы на часто задаваемые вопросы",
      href: "/support/help-center",
      category: "Поддержка",
    },
    {
      title: "Купить Trezor",
      description: "Выберите подходящую модель кошелька",
      href: "/products/model-one",
      category: "Продукты",
    },
    {
      title: "Гарантия",
      description: "Условия гарантийного обслуживания",
      href: "/support/warranty",
      category: "Поддержка",
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Поддержка", href: "/support/help-center" },
          { label: "Настройка Trezor", href: "/support/setup" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Настройка Trezor — Пошаговая Инструкция</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Следуйте этому простому руководству, чтобы настроить свой аппаратный кошелек Trezor за 5 минут. Защитите свою
          криптовалюту правильно с первого раза.
        </p>

        <div className="space-y-8">
          <div className="p-6 border rounded-xl bg-muted/10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">1. Скачайте Trezor Suite</h2>
                <p className="text-muted-foreground mb-4">
                  Загрузите официальное приложение для управления вашим Trezor. Доступно для Windows, macOS и Linux.
                  Trezor Suite — это единственное официальное ПО для работы с вашим hardware wallet.
                </p>
                <Button size="lg">Скачать Trezor Suite</Button>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Usb className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">2. Подключите устройство</h2>
                <p className="text-muted-foreground mb-4">
                  Используйте USB-кабель из комплекта для подключения Trezor к компьютеру. Убедитесь, что устройство
                  надежно подключено. При первом подключении Trezor Suite автоматически обнаружит новое устройство.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                  <strong>Важно:</strong> Подключайте Trezor только к проверенным компьютерам без вирусов.
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">3. Следуйте инструкциям на экране</h2>
                <p className="text-muted-foreground mb-4">
                  Trezor Suite проведет вас через процесс инициализации, включая:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Создание seed-фразы (12 или 24 слова)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Установка PIN-кода
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Подтверждение резервной копии
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Добавление криптовалют в кошелек
                  </li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
                  <strong>Критически важно:</strong> Запишите seed-фразу на бумаге и храните в безопасном месте. Никогда
                  не фотографируйте и не сохраняйте ее в цифровом виде!
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="prose prose-lg max-w-none mt-12">
          <h2>Советы по безопасности при настройке Trezor</h2>
          <ul>
            <li>Всегда скачивайте Trezor Suite только с официального сайта trezor.io</li>
            <li>Проверяйте целостность упаковки при получении устройства</li>
            <li>Никогда не вводите seed-фразу на компьютере или в интернете</li>
            <li>Храните резервную копию seed-фразы в надежном месте (сейф, банковская ячейка)</li>
            <li>Используйте надежный PIN-код (минимум 6 цифр)</li>
          </ul>
        </article>
      </div>

      <RelatedLinks links={relatedLinks} />
    </>
  )
}
