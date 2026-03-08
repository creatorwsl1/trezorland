"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const faqs = [
  {
    question: "Что такое Trezor и зачем нужен этот криптокошелек?",
    answer:
      'Trezor — это аппаратный кошелек (hardware wallet) для безопасного хранения криптовалюты. Устройство Trezor защищает Bitcoin, Ethereum и 1000+ цифровых активов от хакеров и вирусов. Trezor хранит приватные ключи офлайн — это называется "холодное хранение". В отличие от бирж и приложений, Trezor физически изолирован от интернета. За 10+ лет существования Trezor не было ни одного взлома. Более 5 миллионов человек по всему миру используют Trezor для защиты криптовалюты.',
  },
  {
    question: "Что такое Trezor Suite и как его использовать?",
    answer:
      "Trezor Suite — это официальное бесплатное приложение для работы с кошельком Trezor. С помощью Trezor Suite вы можете отправлять и получать Bitcoin, Ethereum и другие криптовалюты, отслеживать портфолио в реальном времени, обменивать монеты без регистрации на биржах. Trezor Suite доступен для Windows, macOS, Linux и в браузере (Trezor Suite Web). Скачать Trezor Suite можно бесплатно с официального сайта trezor.io. Приложение Trezor Suite работает только с оригинальным устройством Trezor.",
  },
  {
    question: "Где скачать Trezor Suite бесплатно?",
    answer:
      "Скачать Trezor Suite бесплатно можно только с официального сайта trezor.io/trezor-suite. Доступны версии Trezor Suite для Windows (.exe), macOS (.dmg) и Linux (.AppImage). Также есть веб-версия Trezor Suite Web на suite.trezor.io/web — она работает прямо в браузере. ВАЖНО: никогда не скачивайте Trezor Suite из сторонних источников, магазинов приложений или по ссылкам из писем — это может быть фишинг.",
  },
  {
    question: "Какие криптовалюты поддерживает Trezor?",
    answer:
      "Trezor поддерживает более 1000 криптовалют: Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Bitcoin Cash (BCH), Cardano (ADA), Polkadot (DOT), Solana (SOL), Dogecoin (DOGE), и все ERC-20 токены. Управление всеми монетами происходит через приложение Trezor Suite. Полный список поддерживаемых криптовалют доступен на сайте Trezor. С каждым обновлением Trezor Suite добавляется поддержка новых блокчейнов.",
  },
  {
    question: "Чем Trezor Safe 5 отличается от Trezor Safe 3 и Model One?",
    answer:
      "Trezor Safe 5 — флагманская модель с цветным сенсорным экраном 1.54 дюйма, чипом Secure Element и поддержкой Shamir Backup. Цена Trezor Safe 5 — $169. Trezor Safe 3 — оптимальный выбор с Secure Element, физическими кнопками и монохромным экраном за $79. Trezor Model One — классическая модель 2014 года без Secure Element, но с проверенной репутацией за $59. Все три модели Trezor работают с приложением Trezor Suite и обеспечивают высочайший уровень защиты.",
  },
  {
    question: "Где купить Trezor официально в России?",
    answer:
      "Купить Trezor официально в России можно на сайте trezor.io-start.app — мы являемся авторизованным продавцом. Гарантируем 100% подлинность устройств Trezor, которые поставляются напрямую от производителя SatoshiLabs (Чехия). Предоставляем официальную гарантию 2 года на все модели Trezor и бесплатную доставку по России. Каждый Trezor включает бесплатный доступ к Trezor Suite.",
  },
  {
    question: "Как настроить Trezor и Trezor Suite после покупки?",
    answer:
      "Настройка Trezor занимает 5-10 минут: 1) Подключите Trezor к компьютеру через USB, 2) Скачайте и установите Trezor Suite с официального сайта trezor.io, 3) Откройте Trezor Suite и следуйте инструкциям, 4) Создайте новый кошелек и установите PIN-код, 5) Запишите recovery seed (24 слова) на бумаге — это ваш единственный способ восстановления. Trezor Suite автоматически обновляет прошивку устройства до последней версии.",
  },
  {
    question: "Trezor или Ledger — какой криптокошелек лучше?",
    answer:
      "Trezor выбирают за полностью открытый исходный код (open-source) — прошивка Trezor проверяема любым экспертом, что исключает скрытые уязвимости. Ledger использует закрытую прошивку. Trezor Suite также имеет открытый код. За 10+ лет у Trezor 0 случаев взлома. Компания SatoshiLabs (создатели Trezor) — пионеры индустрии hardware wallets с 2014 года. Если ценятся прозрачность и проверенная безопасность — выбирайте Trezor.",
  },
  {
    question: "Что делать если потерял Trezor или забыл PIN?",
    answer:
      'Если вы потеряли устройство Trezor или забыли PIN-код — ваши средства в безопасности благодаря recovery seed (24 слова). Купите новый Trezor, установите Trezor Suite, выберите "Восстановить кошелек" и введите seed-фразу. Все ваши Bitcoin, Ethereum и другие криптовалюты вернутся. Если вы потеряли и seed — доступ к средствам невозможно восстановить. Поэтому храните seed в нескольких безопасных местах, отдельно от Trezor.',
  },
  {
    question: "Безопасно ли покупать Trezor онлайн?",
    answer:
      "Покупка Trezor в официальном магазине полностью безопасна. Каждое устройство Trezor имеет заводскую упаковку с голографическими наклейками защиты. При первом включении Trezor Suite проверяет подлинность прошивки. НИКОГДА не покупайте Trezor: с рук (Avito, OLX), на AliExpress/Wish, с готовым seed, без оригинальной упаковки. Поддельный Trezor может украсть все ваши криптовалюты.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">
              Вопросы о Trezor и Trezor Suite
            </h2>
            <p className="text-lg text-muted-foreground mt-6 text-pretty">
              Ответы на популярные вопросы о кошельке Trezor и приложении Trezor Suite
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border border-border rounded-2xl overflow-hidden bg-card transition-all",
                  openIndex === index && "border-foreground/20",
                )}
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="faq-question w-full p-6 text-left font-semibold text-base hover:bg-secondary/50 transition-colors flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  itemProp="name"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div className="overflow-hidden">
                    <div className="faq-answer px-6 pb-6 text-muted-foreground leading-relaxed" itemProp="text">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Не нашли ответ о Trezor или Trezor Suite?</p>
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/support/contact" title="Связаться с поддержкой Trezor">
                Связаться с поддержкой
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
