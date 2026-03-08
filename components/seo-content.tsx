import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Download } from "lucide-react"

export function SEOContent() {
  return (
    <section className="py-20 bg-muted/30" id="what-is-trezor">
      <div className="container mx-auto px-6">
        <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <meta itemProp="author" content="Эксперты Trezor Russia" />
          <meta itemProp="datePublished" content="2024-01-01" />
          <meta itemProp="dateModified" content={new Date().toISOString().split("T")[0]} />
          <meta itemProp="publisher" content="Trezor Russia" />
          <meta itemProp="wordCount" content="4500" />

          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-balance" itemProp="headline">
              Trezor — Полное Руководство по Аппаратному Кошельку
            </h2>
            <p className="text-lg text-muted-foreground">
              Всё о Trezor: как работает, какую модель выбрать, как настроить Trezor Suite и где купить официально
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8" itemProp="articleBody">
            <section>
              <h3 className="text-2xl font-serif font-medium mb-6">Что такое Trezor?</h3>

              <p className="text-lg leading-relaxed">
                <strong>Trezor</strong> — это аппаратный криптокошелек, созданный компанией SatoshiLabs в 2014 году.
                Устройство Trezor размером с USB-флешку хранит приватные ключи от Bitcoin, Ethereum и 1000+ других
                криптовалют в защищенном чипе. Главное преимущество Trezor — офлайн хранение: даже если ваш компьютер
                заражен вирусами, украсть монеты из Trezor невозможно. За 10 лет существования Trezor не было ни одного
                случая взлома. Сегодня более 5 миллионов человек по всему миру доверяют Trezor защиту своих
                криптоактивов.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-xl p-6 my-8">
                <p className="font-medium mb-2">Цены на Trezor в 2025 году:</p>
                <ul className="space-y-1 leading-relaxed">
                  <li>
                    <strong>Trezor Model One</strong> — $59 (классическая модель для новичков)
                  </li>
                  <li>
                    <strong>Trezor Safe 3</strong> — $79 (оптимальный выбор с Secure Element)
                  </li>
                  <li>
                    <strong>Trezor Safe 5</strong> — $169 (флагман с сенсорным экраном)
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button size="sm" asChild>
                    <Link href="#products">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Купить Trezor
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#trezor-suite">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать Trezor Suite
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif font-medium mt-12 mb-6">Как работает Trezor?</h3>

              <p className="leading-relaxed">
                Принцип работы Trezor прост: устройство генерирует и хранит приватные ключи внутри защищенного чипа.
                Когда вы хотите отправить Bitcoin или Ethereum, Trezor подписывает транзакцию внутри устройства — ключи
                никогда не покидают Trezor и не попадают на компьютер. Это называется "холодное хранение" (cold
                storage).
              </p>

              <ol className="space-y-4 my-6">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                    1
                  </span>
                  <div>
                    <strong>Генерация ключей в Trezor:</strong> При первой настройке Trezor создает уникальный recovery
                    seed — 24 случайных слова. Из этих слов математически вычисляются все приватные ключи. Seed
                    генерируется офлайн, внутри Trezor.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                    2
                  </span>
                  <div>
                    <strong>Изоляция от интернета:</strong> Trezor не имеет Wi-Fi или Bluetooth. Устройство подключается
                    только через USB и обменивается с компьютером только подписанными транзакциями — не приватными
                    ключами.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-semibold text-blue-600">
                    3
                  </span>
                  <div>
                    <strong>Физическое подтверждение:</strong> Каждая транзакция в Trezor требует нажатия кнопки на
                    устройстве. Вирус или хакер не может украсть средства без вашего физического участия.
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-2xl font-serif font-medium mt-12 mb-6" id="comparison">
                Какой Trezor выбрать: сравнение моделей
              </h3>

              <p className="leading-relaxed mb-6">
                В 2025 году продаются три модели Trezor. Все они обеспечивают высочайшую безопасность, но отличаются
                функциями и ценой. Вот подробное сравнение:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-background rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Характеристика</th>
                      <th className="px-6 py-4 text-left font-semibold">Trezor Model One</th>
                      <th className="px-6 py-4 text-left font-semibold">Trezor Safe 3</th>
                      <th className="px-6 py-4 text-left font-semibold">Trezor Safe 5</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 font-medium">Цена Trezor</td>
                      <td className="px-6 py-4">$59</td>
                      <td className="px-6 py-4">$79</td>
                      <td className="px-6 py-4">$169</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Год выпуска</td>
                      <td className="px-6 py-4">2014</td>
                      <td className="px-6 py-4">2023</td>
                      <td className="px-6 py-4">2024</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Экран</td>
                      <td className="px-6 py-4">OLED монохромный</td>
                      <td className="px-6 py-4">OLED монохромный</td>
                      <td className="px-6 py-4">Цветной сенсорный</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Secure Element</td>
                      <td className="px-6 py-4 text-red-600">Нет</td>
                      <td className="px-6 py-4 text-green-600">Есть</td>
                      <td className="px-6 py-4 text-green-600">Есть</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Shamir Backup</td>
                      <td className="px-6 py-4 text-red-600">Нет</td>
                      <td className="px-6 py-4 text-green-600">Есть</td>
                      <td className="px-6 py-4 text-green-600">Есть</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">USB</td>
                      <td className="px-6 py-4">Micro-USB</td>
                      <td className="px-6 py-4">USB-C</td>
                      <td className="px-6 py-4">USB-C</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Trezor Suite</td>
                      <td className="px-6 py-4 text-green-600">Полная поддержка</td>
                      <td className="px-6 py-4 text-green-600">Полная поддержка</td>
                      <td className="px-6 py-4 text-green-600">Полная поддержка</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Рекомендуем для</td>
                      <td className="px-6 py-4">Новички, до $1000</td>
                      <td className="px-6 py-4">Большинство</td>
                      <td className="px-6 py-4">Профи, $10,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 rounded-r-xl p-6 my-8">
                <p className="font-medium mb-2">Наша рекомендация:</p>
                <p className="leading-relaxed">
                  Для большинства пользователей оптимален <strong>Trezor Safe 3 за $79</strong>. Эта модель Trezor имеет
                  чип Secure Element (военный стандарт защиты), поддерживает Shamir Backup и полностью совместима с
                  Trezor Suite. Trezor Model One подходит для малых сумм. Trezor Safe 5 — для профессионалов с крупными
                  портфелями.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="#products">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Купить Trezor Safe 3
                  </Link>
                </Button>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif font-medium mt-12 mb-6">Где купить Trezor официально?</h3>

              <p className="leading-relaxed">
                Крайне важно покупать Trezor только у официальных продавцов. Известны случаи подделок с
                предустановленным seed — такой "Trezor" украдет все ваши средства. Безопасные способы купить Trezor:
              </p>

              <ol className="space-y-4 my-6 ml-6">
                <li>
                  <strong>1. Наш магазин trezor.io-start.app</strong> — авторизованный продавец Trezor в России.
                  Доставка 1-3 дня, гарантия 2 года.
                </li>
                <li>
                  <strong>2. Официальный сайт trezor.io</strong> — прямая покупка Trezor от производителя. Доставка из
                  Чехии 2-3 недели.
                </li>
                <li>
                  <strong>3. Список реселлеров Trezor</strong> на официальном сайте в разделе "Where to buy".
                </li>
              </ol>

              <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 rounded-r-xl p-6 my-8">
                <p className="font-medium mb-2 text-red-700 dark:text-red-400">НИКОГДА не покупайте Trezor:</p>
                <ul className="space-y-1 text-sm">
                  <li>С рук (Avito, OLX) — могут продать Trezor с готовым seed</li>
                  <li>На AliExpress, Wish — 90% подделок под Trezor</li>
                  <li>С уже записанным seed — это 100% мошенничество</li>
                  <li>Без оригинальной упаковки — Trezor должен быть запечатан</li>
                </ul>
              </div>
            </section>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 mt-12 text-center">
              <h4 className="text-2xl font-semibold mb-3">Готовы защитить криптовалюту с Trezor?</h4>
              <p className="mb-6 opacity-90">
                Купите оригинальный Trezor с гарантией 2 года. Trezor Suite включен бесплатно.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full" asChild>
                  <Link href="#products">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Купить Trezor
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="#trezor-suite">
                    <Download className="mr-2 h-5 w-5" />
                    Скачать Trezor Suite
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
