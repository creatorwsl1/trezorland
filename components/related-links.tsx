import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedLink {
  title: string
  description: string
  href: string
  category: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
  title?: string
}

export function RelatedLinks({ links, title = "Вам также может быть интересно" }: RelatedLinksProps) {
  return (
    <section className="border-t border-border pt-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">{link.category}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
              <div className="flex items-center text-sm font-medium text-primary">
                Узнать больше <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
