import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">О компании Trezor</h1>
        <p className="text-xl text-muted-foreground">
          Мы создали первый в мире аппаратный кошелек в 2013 году. С тех пор наша миссия — сделать безопасность
          криптовалют доступной каждому.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted">
          <Image
            src="/professional-tech-team-office-cryptocurrency-start.jpg"
            alt="Команда Trezor - разработчики аппаратных криптокошельков"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
          <p className="text-muted-foreground mb-6">
            Мы верим, что финансовая независимость — это фундаментальное право человека. Наши продукты созданы, чтобы
            дать людям возможность контролировать свои цифровые активы без посредников.
          </p>
          <p className="text-muted-foreground">
            Безопасность, прозрачность и удобство — основа всего, что мы создаем. Весь наш код открыт, что позволяет
            сообществу проверять наши заявления о безопасности.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-8 rounded-xl bg-muted/50">
          <div className="text-4xl font-bold text-primary mb-2">2013</div>
          <p className="text-muted-foreground">Год основания</p>
        </div>
        <div className="text-center p-8 rounded-xl bg-muted/50">
          <div className="text-4xl font-bold text-primary mb-2">5M+</div>
          <p className="text-muted-foreground">Пользователей по всему миру</p>
        </div>
        <div className="text-center p-8 rounded-xl bg-muted/50">
          <div className="text-4xl font-bold text-primary mb-2">0</div>
          <p className="text-muted-foreground">Взломов за всю историю</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Наши ценности</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-xl border">
            <h3 className="text-xl font-bold mb-2">Безопасность превыше всего</h3>
            <p className="text-muted-foreground">Каждое наше решение проходит многоуровневый аудит безопасности.</p>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="text-xl font-bold mb-2">Открытый исходный код</h3>
            <p className="text-muted-foreground">
              Прозрачность — ключ к доверию. Весь код Trezor доступен для проверки.
            </p>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="text-xl font-bold mb-2">Поддержка сообщества</h3>
            <p className="text-muted-foreground">
              Мы активно взаимодействуем с криптосообществом и учитываем обратную связь.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
