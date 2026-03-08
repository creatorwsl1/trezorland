import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Press Kit</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Resources for media professionals. Download official logos, product images, and executive bios.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Brand Assets</h2>
          <p className="text-muted-foreground mb-6">
            Official Trezor logos in vector and raster formats, brand guidelines, and color palettes.
          </p>
          <Button className="gap-2">
            <Download className="h-4 w-4" /> Download Brand Kit
          </Button>
        </div>

        <div className="p-8 border rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Product Photos</h2>
          <p className="text-muted-foreground mb-6">
            High-resolution product photography for Trezor Model One, Safe 3, and Safe 5.
          </p>
          <Button className="gap-2">
            <Download className="h-4 w-4" /> Download Photos
          </Button>
        </div>
      </div>
    </div>
  )
}
