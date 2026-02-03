import type { Metadata, Viewport } from 'next'
import type React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/contexts/language-context'
import { ToastProvider } from '@/lib/hooks/use-toast'
import { Toast } from '@/components/ui/toast'
import { ErrorBoundary } from '@/components/error-boundary'
import { ThemeProvider } from '@/components/theme-provider'
import 'katex/dist/katex.min.css'
import './globals.css'
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://markdown-to-pdf.org'),
  title: 'Markdown to PDF Converter | Professional Document Export',
  description: 'Convert Markdown to publication-quality PDF documents with math formulas (KaTeX), code highlighting, diagrams (Mermaid), table of contents, and custom themes. Free online tool for academic and business use.',
  keywords: ['markdown', 'pdf', 'converter', 'katex', 'mermaid', 'code highlighting', 'table of contents', 'themes', 'export', 'academic', 'professional', 'free', 'online'],
  authors: [{ name: 'Markdown to PDF Team' }],
  creator: 'Markdown to PDF',
  publisher: 'Markdown to PDF',
  generator: 'markdown-to-pdf',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://markdown-to-pdf.org',
    title: 'Markdown to PDF Converter | Professional Document Export',
    description: 'Convert Markdown to publication-quality PDF documents with math, code, diagrams, TOC, and custom themes. Perfect for academic and business use.',
    siteName: 'Markdown to PDF Converter',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Markdown to PDF Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to PDF Converter | Professional Document Export',
    description: 'Convert Markdown to publication-quality PDF documents with math, code, diagrams, TOC, and custom themes. Perfect for academic and business use.',
    images: ['/placeholder-logo.png'],
    creator: '@markdown2pdf',
  },
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
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#54c18a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1924467382262970"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Markdown to PDF Converter",
              "description": "Convert Markdown documents to professional PDF files with support for math formulas, code syntax highlighting, diagrams, and custom themes.",
              "url": "https://markdown-to-pdf.org",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Markdown to PDF conversion",
                "Math formula support (KaTeX)",
                "Code syntax highlighting",
                "Diagram generation (Mermaid)",
                "Custom themes and styles",
                "Multiple paper sizes",
                "Adjustable font sizes",
                "Table of contents generation",
                "Drag and drop file upload",
                "Dark mode support",
                "Auto-save functionality"
              ],
              "browserRequirements": "Modern web browser with JavaScript enabled",
              "softwareVersion": "1.0.0",
              "author": {
                "@type": "Organization",
                "name": "Markdown to PDF Team",
                "url": "https://markdown-to-pdf.org"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            }
          `}
        </Script>
        {/* Google AdSense 脚本 */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxx"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* monetag 广告脚本 */}
        <Script
          id="monetag-multitag"
          src="https://quge5.com/88/tag.min.js"
          data-zone="193056"
          data-cfasync="false"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
            <LanguageProvider>
              <ToastProvider>
                {children}
                <Toast />
              </ToastProvider>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
        <Script
          id="copy-code-handler"
          strategy="afterInteractive"
        >
          {`
            // Copy code functionality
            window.copyCode = function(codeId) {
              const codeElement = document.getElementById(codeId);
              if (codeElement) {
                const text = codeElement.textContent || codeElement.innerText;
                navigator.clipboard.writeText(text).then(() => {
                  // Find the button and show success state
                  const buttons = document.querySelectorAll('.copy-code-btn');
                  buttons.forEach(btn => {
                    if (btn.dataset.codeId === codeId) {
                      const originalHTML = btn.innerHTML;
                      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: block;"><path d="M20 6L9 17l-5-5"></path><path d="M16.5 14.5c0-1.7-.8-3.2-2-4.1 0-.6.4-1.1.8-1.5.8-.4 1.4-.9 2.7-1.5 3.7V6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-1.5c0-.6.4-1.1.8-1.5.8-.4 1.4-.9 2.7-1.5 3.7"></path></svg><span>Copied!</span>';
                      btn.style.background = 'rgba(84, 193, 138, 0.2)';
                      btn.style.borderColor = 'rgba(84, 193, 138, 0.5)';
                      setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.background = '';
                        btn.style.borderColor = '';
                      }, 2000);
                    }
                  });
                }).catch(err => {
                  console.error('Failed to copy:', err);
                  // Show error state on button
                  const buttons = document.querySelectorAll('.copy-code-btn');
                  buttons.forEach(btn => {
                    if (btn.dataset.codeId === codeId) {
                      const originalHTML = btn.innerHTML;
                      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: block;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>Failed</span>';
                      btn.style.background = 'rgba(239, 68, 68, 0.2)';
                      btn.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                      setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.background = '';
                        btn.style.borderColor = '';
                      }, 2000);
                    }
                  });
                });
              }
            };

            // Add hover effect to copy buttons
            document.addEventListener('mouseover', function(e) {
              const btn = e.target.closest('.copy-code-btn');
              if (btn) {
                btn.style.background = 'rgba(0, 0, 0, 0.05)';
              }
            }, true);

            document.addEventListener('mouseout', function(e) {
              const btn = e.target.closest('.copy-code-btn');
              if (btn) {
                btn.style.background = '';
              }
            }, true);
          `}
        </Script>
        <Script
          id="adsense-error-handler"
          strategy="afterInteractive"
        >
          {`
            // Handle AdSense loading errors
            window.addEventListener('error', function(event) {
              if (event.filename && event.filename.includes('adsbygoogle.js')) {
                console.info('AdSense script blocked by content blocker or network error');
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
