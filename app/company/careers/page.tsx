import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Join the Trezor Team</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Help us build the future of financial independence. We're looking for passionate individuals to join our mission.
        </p>
        <Button size="lg">View Open Positions</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Remote-First</h3>
          <p className="text-muted-foreground">Work from anywhere in the world with flexible hours.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Open Source</h3>
          <p className="text-muted-foreground">Contribute to projects that matter and are used by millions.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Great Benefits</h3>
          <p className="text-muted-foreground">Competitive salary, crypto bonuses, and comprehensive health coverage.</p>
        </div>
      </div>
    </div>
  )
}
