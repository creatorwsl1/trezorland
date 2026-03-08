import { Shield, Lock, Zap, Smartphone, Globe, Code } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Военный уровень защиты",
    description:
      "Trezor secure chip с сертифицированной криптографией защищает приватные ключи от физических и цифровых атак.",
  },
  {
    icon: Lock,
    title: "Офлайн хранение",
    description:
      "Ваши ключи никогда не покидают устройство Trezor. Транзакции подписываются офлайн для максимальной безопасности.",
  },
  {
    icon: Zap,
    title: "Простота использования",
    description:
      "Настройка за 5 минут. Интуитивный интерфейс Trezor Suite делает безопасность криптовалюты доступной каждому.",
  },
  {
    icon: Smartphone,
    title: "Мультиплатформенность",
    description: "Работает с Windows, macOS, Linux, Android и iOS через приложение Trezor Suite.",
  },
  {
    icon: Globe,
    title: "1000+ криптовалют",
    description: "Поддержка Bitcoin, Ethereum и тысяч токенов. Один кошелек Trezor для всего портфеля.",
  },
  {
    icon: Code,
    title: "Открытый исходный код",
    description: "Полностью проверяемая прошивка Trezor. Прозрачность, которой можно доверять.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Возможности</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
            Почему выбирают Trezor
          </h2>
          <p className="text-lg text-muted-foreground mt-6 text-pretty">
            Лучшие в отрасли функции безопасности для защиты вашей криптовалюты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
