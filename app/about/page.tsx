import React from 'react'
import type { Metadata } from 'next'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About Us | Markdown to PDF Converter',
  description: 'Learn more about Markdown to PDF Converter, our mission, and the team behind the tool.',
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="space-y-6">
          <section>
            <p className="text-lg">
              Markdown to PDF Converter is a powerful, free online tool dedicated to simplifying document creation for developers, writers, and students.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p>
              We believe that creating beautiful, professional-looking PDFs should be easy and accessible to everyone.
              Markdown is a fantastic format for writing, but converting it to a shareable, styled PDF can often be a hassle.
              Our mission is to bridge that gap with a fast, private, and feature-rich converter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Privacy First:</strong> Your documents are processed locally in your browser. We don&apos;t spy on your content.</li>
              <li><strong>Feature Rich:</strong> Support for KaTeX (math), Mermaid (diagrams), and syntax highlighting.</li>
              <li><strong>Customizable:</strong> Various themes and layout options to suit your needs.</li>
              <li><strong>Free to Use:</strong> We are committed to keeping this core tool free for our community.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Technology</h2>
            <p>
              This project is built using modern web technologies including Next.js, React, and Tailwind CSS, ensuring a fast and responsive experience on any device.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
