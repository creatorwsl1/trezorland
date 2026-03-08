import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10 h-12" placeholder="Search for articles..." />
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {['Getting Started', 'Security', 'Troubleshooting', 'Orders & Shipping', 'Wallet Features', 'Account Management'].map((topic) => (
          <div key={topic} className="p-6 border rounded-xl hover:border-primary transition-colors cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">{topic}</h3>
            <p className="text-muted-foreground text-sm">Find answers about {topic.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
