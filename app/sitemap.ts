import { MetadataRoute } from 'next'
import { locales } from '@/lib/locales'

const baseUrl = 'https://markdown-to-pdf.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.keys(locales)
  const routes = ['', '/about', '/privacy', '/terms'] // Add /contact if important

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add root pages (English default)
  routes.forEach(route => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    })
  })

  // Add localized pages
  languages.forEach(lang => {
    // Skip if root handles 'en' (optional strategy, but for now map all)
    routes.forEach(route => {
        // Avoid double slash if route is empty
        const url = route === '' 
            ? `${baseUrl}/${lang}` 
            : `${baseUrl}/${lang}${route}`
            
        sitemapEntries.push({
            url: url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 0.9 : 0.7,
        })
    })
  })

  return sitemapEntries
}
