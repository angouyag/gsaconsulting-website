import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GSA Consulting — Performance & Excellence Organisationnelle',
  description: 'Cabinet de conseil en performance organisationnelle, audit de maturité et formation professionnelle. Basé au Gabon.',
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
      </body>
    </html>
  )
}
