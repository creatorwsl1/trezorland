import { Shield, Lock, Eye, AlertTriangle } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Физическая защита",
    description: "Защита от взлома с чипом, который самоуничтожается при попытке вскрытия.",
  },
  {
    icon: Lock,
    title: "PIN защита",
    description: "Рандомизированный ввод PIN предотвращает перехват и подсматривание.",
  },
  {
    icon: Eye,
    title: "Открытый код",
    description: "Прозрачный код, проверенный экспертами безопасности по всему миру.",
  },
  {
    icon: AlertTriangle,
    title: "Резервное копирование",
    description: "24 слова recovery seed гарантируют восстановление доступа к средствам.",
  },
]

export function Security() {
  return (
    <section id="security" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Безопасность</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-balance">
                Trezor создан для реального мира
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed text-pretty">
                Более 15 лет мы совершенствуем безопасность аппаратных кошельков, чтобы вы могли спать спокойно, зная
                что ваша криптовалюта защищена.
              </p>
            </div>

            <div className="grid gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-secondary p-10">
              <img
                src="/secure-vault-with-digital-shield-protection.jpg"
                alt="Trezor Security - защита криптовалюты"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
