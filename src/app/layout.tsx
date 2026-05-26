import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'GSA Consulting P23 — Performance & Excellence Organisationnelle',
  description: 'Cabinet de conseil en performance organisationnelle, audit de maturité et formation professionnelle. Fondé par Greg Stéphane Angouya. Libreville, Gabon.',
  metadataBase: new URL('https://gsaconsultingp23.com'),
  openGraph: {
    title: 'GSA Consulting P23 — Performance & Excellence Organisationnelle',
    description: 'Cabinet de conseil fondé par Greg Stéphane Angouya. Audit de maturité SAI, formations comptabilité fournisseurs, missions conseil.',
    url: 'https://gsaconsultingp23.com',
    siteName: 'GSA Consulting P23',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSA Consulting P23',
    description: 'Audit de maturité organisationnelle · Formations · Missions conseil — Gabon & Afrique',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0d0e10', fontFamily: "'Syne', sans-serif" }}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
