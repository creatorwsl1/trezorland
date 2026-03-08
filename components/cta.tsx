import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
            Готовы защитить свою криптовалюту с Trezor?
          </h2>
          <p className="text-xl opacity-80 text-pretty max-w-2xl mx-auto">
            Присоединяйтесь к миллионам пользователей, которые доверяют Trezor — самому надёжному аппаратному кошельку в
            мире.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base" asChild>
              <Link href="#products">
                Купить Trezor сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base bg-transparent border-background/20 text-background hover:bg-background/10"
              asChild
            >
              <Link href="#features">Подробнее о Trezor</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm opacity-70">
            <div className="text-center">
              <div className="text-3xl font-serif font-medium">30 дней</div>
              <div className="mt-1">Возврат денег</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-background/20" />
            <div className="text-center">
              <div className="text-3xl font-serif font-medium">Бесплатно</div>
              <div className="mt-1">Доставка</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-background/20" />
            <div className="text-center">
              <div className="text-3xl font-serif font-medium">24/7</div>
              <div className="mt-1">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
