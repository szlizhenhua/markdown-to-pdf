import type { Metadata } from 'next'
import type React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Markdown to PDF Converter | Professional Document Export',
  description: 'Convert Markdown to publication-quality PDF documents with math, code, diagrams, TOC, and custom themes. Perfect for academic and business use.',
  generator: 'markdown-to-pdf',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/placeholder-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/placeholder-logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/placeholder-logo.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/placeholder-logo.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}