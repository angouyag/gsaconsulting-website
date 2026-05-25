import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — GSA Consulting P23',
  description: 'Contactez GSA Consulting P23 pour un audit de maturité, une formation ou une mission conseil. Réponse sous 24h. Libreville, Gabon.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
