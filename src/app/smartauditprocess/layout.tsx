import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmartAuditProcess — Plateforme d\'audit SAI · GSA Consulting P23',
  description: 'SmartAuditProcess est la plateforme d\'audit de maturité organisationnelle de G-Consulting. 120 questions, 6 modules SAI, scoring automatisé.',
}

export default function SmartAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
