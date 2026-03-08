export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Last updated: January 1, 2025
        </p>
        <p>
          At Trezor, we take your privacy seriously. We collect minimal data necessary to provide our services and never sell your personal information.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect information such as your email address when you contact support or sign up for our newsletter. When you make a purchase, we collect shipping and billing information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>To process and deliver your orders</li>
          <li>To provide customer support</li>
          <li>To send important product updates and security alerts</li>
        </ul>
      </div>
    </div>
  )
}
