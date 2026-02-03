import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Markdown to PDF Converter',
  description: 'Terms of Service for Markdown to PDF Converter. Usage guidelines and legal agreements.',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Markdown to PDF Converter, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Description of Service</h2>
          <p>
            Markdown to PDF Converter provides a web-based tool for converting Markdown text into PDF documents. 
            The service is provided "as is" and "as available".
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. User Conduct</h2>
          <p>
            You agree to use our service only for lawful purposes. You are prohibited from using the service to:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Generate content that is illegal, harmful, or violates the rights of others.</li>
            <li>Attempt to disrupt or interfere with the security or performance of the service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Disclaimer of Warranties</h2>
          <p>
            We do not guarantee that the service will be error-free or uninterrupted. 
            We are not responsible for any data loss during the conversion process. 
            Users are encouraged to keep backups of their original documents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
          <p>
            You retain all rights to the content you create and convert using our service. 
            We do not claim ownership over your documents.
          </p>
        </section>
      </div>
    </div>
  )
}
