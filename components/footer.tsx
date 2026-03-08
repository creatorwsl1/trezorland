import Link from "next/link"
import { Twitter, Github, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-foreground flex items-center justify-center text-background font-bold">
                T
              </div>
              <span className="text-xl font-semibold">Trezor</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Оригинальный аппаратный кошелек Trezor. Доверие миллионов пользователей для безопасного хранения
              криптовалюты с 2013 года.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продукты Trezor</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/products/model-one" className="hover:text-foreground transition-colors">
                  Trezor Model One
                </Link>
              </li>
              <li>
                <Link href="/products/safe-5" className="hover:text-foreground transition-colors">
                  Trezor Safe 5
                </Link>
              </li>
              <li>
                <Link href="/products/safe-3" className="hover:text-foreground transition-colors">
                  Trezor Safe 3
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="hover:text-foreground transition-colors">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/support/help-center" className="hover:text-foreground transition-colors">
                  Центр помощи
                </Link>
              </li>
              <li>
                <Link href="/support/setup" className="hover:text-foreground transition-colors">
                  Инструкция
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/support/warranty" className="hover:text-foreground transition-colors">
                  Гарантия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/company/about" className="hover:text-foreground transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="hover:text-foreground transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="hover:text-foreground transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="hover:text-foreground transition-colors">
                  Пресса
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Trezor. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
              Конфиденциальность
            </Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">
              Условия
            </Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
