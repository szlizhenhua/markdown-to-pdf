import React from 'react'
import type { Metadata } from 'next'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Markdown to PDF Converter',
  description: 'Privacy Policy for Markdown to PDF Converter. We prioritize your data privacy and security.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
            Welcome to Markdown to PDF Converter (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we handle your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Data Processing</h2>
            <p>
              Markdown to PDF Converter is designed to process your data locally in your browser whenever possible.
              Your Markdown documents are converted to PDF directly on your device using client-side technologies.
              We do not store the content of your documents on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Information We Collect</h2>
            <p>
              We may collect anonymous usage statistics and technical data to improve our service, including:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URLs</li>
              <li>Time spent on site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Cookies and Local Storage</h2>
            <p>
              We use local storage to save your preferences (such as theme usage, editor settings) to enhance your user experience.
              We may use third-party services like Google AdSense which utilize cookies to serve ads based on your prior visits to our website or other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Google AdSense:</strong> To display advertisements. Google uses cookies to serve ads on our site.</li>
              <li><strong>Analytics:</strong> To understand how users interact with our tool.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@markdown-to-pdf.org.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
