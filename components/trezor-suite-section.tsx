import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Monitor, Globe, Shield, Zap, RefreshCw, PieChart } from "lucide-react"

export function TrezorSuiteSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30" id="trezor-suite">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-600/20 mb-6">
              <Download className="h-4 w-4" />
              <span>Бесплатное приложение</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-balance">
              Trezor Suite — Приложение для Управления Криптовалютой
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              <strong>Trezor Suite</strong> — это официальное бесплатное приложение для работы с кошельком Trezor.
              Управляйте Bitcoin, Ethereum и 1000+ криптовалют в одном месте. Доступно для Windows, macOS, Linux и в
              браузере.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 h-14" asChild>
              <a
                href="https://trezor.io/trezor-suite"
                target="_blank"
                rel="noopener noreferrer"
                title="Скачать Trezor Suite для Windows"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Скачать для Windows
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-transparent" asChild>
              <a
                href="https://trezor.io/trezor-suite"
                target="_blank"
                rel="noopener noreferrer"
                title="Скачать Trezor Suite для macOS"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Скачать для macOS
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-transparent" asChild>
              <a
                href="https://suite.trezor.io/web/"
                target="_blank"
                rel="noopener noreferrer"
                title="Открыть Trezor Suite Web"
              >
                <Globe className="mr-2 h-5 w-5" />
                Trezor Suite Web
              </a>
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: "Безопасность",
                description: "Trezor Suite работает только с оригинальным Trezor. Защита от фишинга и подделок.",
              },
              {
                icon: PieChart,
                title: "Портфолио",
                description: "Отслеживайте стоимость всех криптовалют в Trezor Suite в реальном времени.",
              },
              {
                icon: RefreshCw,
                title: "Обмен криптовалют",
                description: "Встроенный обмен в Trezor Suite. Меняйте BTC на ETH без сторонних сервисов.",
              },
              {
                icon: Zap,
                title: "Быстрые транзакции",
                description: "Trezor Suite автоматически рассчитывает оптимальную комиссию для быстрых переводов.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed content for SEO */}
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-serif font-medium mb-6">Что такое Trezor Suite и как его использовать?</h3>

            <p className="leading-relaxed mb-6">
              <strong>Trezor Suite</strong> — это официальное программное обеспечение от компании SatoshiLabs для работы
              с аппаратными кошельками Trezor. Приложение Trezor Suite позволяет безопасно управлять криптовалютой,
              отправлять и получать Bitcoin, Ethereum и более 1000 других монет. Trezor Suite доступен для скачивания на
              Windows, macOS и Linux, а также работает в браузере как Trezor Suite Web.
            </p>

            <h4 className="text-xl font-semibold mb-4">Основные функции Trezor Suite:</h4>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <span>
                  <strong>Управление криптовалютой</strong> — отправляйте и получайте BTC, ETH, LTC и 1000+ монет через
                  Trezor Suite
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">2.</span>
                <span>
                  <strong>Портфолио в реальном времени</strong> — Trezor Suite показывает актуальную стоимость всех
                  ваших активов
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">3.</span>
                <span>
                  <strong>Встроенный обмен</strong> — меняйте криптовалюты прямо в Trezor Suite без регистрации на
                  биржах
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">4.</span>
                <span>
                  <strong>Покупка криптовалюты</strong> — купить Bitcoin за рубли можно прямо в Trezor Suite
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">5.</span>
                <span>
                  <strong>Tor интеграция</strong> — Trezor Suite поддерживает анонимное подключение через сеть Tor
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">6.</span>
                <span>
                  <strong>Coin Control</strong> — продвинутые пользователи Trezor Suite могут выбирать конкретные UTXO
                </span>
              </li>
            </ul>

            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 rounded-r-xl p-6 my-8">
              <p className="font-medium mb-2">Важно: Trezor Suite работает только с оригинальным Trezor</p>
              <p className="text-sm text-muted-foreground">
                Для использования Trezor Suite необходим аппаратный кошелек Trezor (Safe 5, Safe 3 или Model One).
                Приложение не работает без физического устройства — это гарантирует безопасность ваших средств.
              </p>
              <Button className="mt-4" asChild>
                <Link href="#products">Купить Trezor для работы с Trezor Suite</Link>
              </Button>
            </div>

            <h4 className="text-xl font-semibold mb-4">Как скачать и установить Trezor Suite:</h4>

            <ol className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                  1
                </span>
                <div>
                  <strong>Перейдите на официальный сайт:</strong> Скачивайте Trezor Suite только с
                  trezor.io/trezor-suite. Никогда не скачивайте из сторонних источников.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                  2
                </span>
                <div>
                  <strong>Выберите версию:</strong> Trezor Suite доступен для Windows (.exe), macOS (.dmg) и Linux
                  (.AppImage).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                  3
                </span>
                <div>
                  <strong>Установите и подключите Trezor:</strong> После установки Trezor Suite подключите ваш кошелек
                  Trezor через USB.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                  4
                </span>
                <div>
                  <strong>Начните работу:</strong> Trezor Suite автоматически определит устройство и синхронизирует ваши
                  аккаунты.
                </div>
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8 md:p-12 text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Нужен Trezor для работы с Trezor Suite?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Trezor Suite бесплатен, но требует аппаратный кошелек Trezor. Купите оригинальный Trezor с гарантией 2
              года.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-14" asChild>
                <Link href="#products">Купить Trezor от $59</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://trezor.io/trezor-suite" target="_blank" rel="noopener noreferrer">
                  Скачать Trezor Suite
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
