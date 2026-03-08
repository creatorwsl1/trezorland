export default function WarrantyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Warranty Information</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          All Trezor devices come with a standard 2-year warranty covering manufacturing defects.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What is covered?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Manufacturing defects in materials and workmanship</li>
          <li>Hardware malfunctions under normal use</li>
          <li>Screen or button failures</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What is not covered?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Damage caused by accidents or misuse</li>
          <li>Cosmetic damage (scratches, dents)</li>
          <li>Damage from unauthorized modifications</li>
          <li>Loss or theft of the device</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to claim warranty</h2>
        <p>
          If you believe your device is defective, please contact our support team with your order number and a description of the issue. We will guide you through the return process.
        </p>
      </div>
    </div>
  )
}
