import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Александр К.",
    role: "Криптоинвестор",
    content: "После 5 лет использования Trezor я сплю спокойно, зная что мои инвестиции в безопасности. Это бесценно.",
    rating: 5,
  },
  {
    name: "Мария С.",
    role: "DeFi трейдер",
    content:
      "Сенсорный экран Model T делает управление несколькими кошельками невероятно удобным. Лучший hardware wallet на рынке.",
    rating: 5,
  },
  {
    name: "Дмитрий П.",
    role: "Bitcoin HODLer",
    content: "Простая настройка, непробиваемая безопасность. Рекомендую Trezor всем друзьям, кто входит в крипто.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Отзывы</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
            Нам доверяют миллионы
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6 text-pretty">
                "{testimonial.content}"
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
