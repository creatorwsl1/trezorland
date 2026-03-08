export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Please read these terms carefully before using our services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p>
          By accessing or using the Trezor website and services, you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the security of your device and recovery seed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p>
          Trezor shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
        </p>
      </div>
    </div>
  )
}
