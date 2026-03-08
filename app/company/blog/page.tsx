import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Как настроить Trezor за 5 минут",
    category: "Руководство",
    description: "Пошаговая инструкция по первоначальной настройке вашего аппаратного кошелька Trezor...",
    image: "/trezor-setup-guide-tutorial.jpg",
  },
  {
    id: 2,
    title: "Безопасность аппаратных кошельков в 2025",
    category: "Безопасность",
    description: "Почему аппаратные кошельки остаются самым надежным способом хранения криптовалюты...",
    image: "/hardware-wallet-security-protection.jpg",
  },
  {
    id: 3,
    title: "Trezor vs программные кошельки",
    category: "Сравнение",
    description: "Детальное сравнение безопасности аппаратных и программных криптокошельков...",
    image: "/crypto-wallet-comparison-security.jpg",
  },
  {
    id: 4,
    title: "Новые функции Trezor Suite 2025",
    category: "Обновления",
    description: "Обзор всех новых функций в последней версии приложения Trezor Suite...",
    image: "/trezor-suite-app-interface.jpg",
  },
  {
    id: 5,
    title: "Защита от фишинга и мошенничества",
    category: "Безопасность",
    description: "Как распознать мошеннические сайты и защитить свои криптоактивы от фишинга...",
    image: "/phishing-protection-crypto-security.jpg",
  },
  {
    id: 6,
    title: "Seed-фраза: как правильно хранить",
    category: "Руководство",
    description: "Лучшие практики хранения seed-фразы для максимальной безопасности ваших активов...",
    image: "/seed-phrase-backup-security.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Блог Trezor</h1>
      <p className="text-xl text-muted-foreground mb-12">Новости, руководства и советы по безопасности криптовалют</p>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href="#" className="group">
            <article className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{post.category}</p>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm">{post.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
