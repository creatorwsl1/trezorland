export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          We use cookies to improve your experience on our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and understand how you use our site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
        </p>
      </div>
    </div>
  )
}
