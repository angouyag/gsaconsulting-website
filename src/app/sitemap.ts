import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gsaconsultingp23.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/livre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/formations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/smartauditprocess`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
