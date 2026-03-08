import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductNavigationProps {
  prevProduct?: { name: string; href: string }
  nextProduct?: { name: string; href: string }
}

export function ProductNavigation({ prevProduct, nextProduct }: ProductNavigationProps) {
  return (
    <nav className="border-t border-border pt-8 mt-12">
      <div className="flex justify-between items-center">
        {prevProduct ? (
          <Link href={prevProduct.href}>
            <Button variant="outline" className="gap-2 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Предыдущий товар</div>
                <div className="font-semibold">{prevProduct.name}</div>
              </div>
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextProduct ? (
          <Link href={nextProduct.href}>
            <Button variant="outline" className="gap-2 bg-transparent">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Следующий товар</div>
                <div className="font-semibold">{nextProduct.name}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  )
}
