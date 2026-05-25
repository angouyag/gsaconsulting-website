const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, background: C.bg, padding: 'clamp(2.5rem,4vw,3.5rem) 1.5rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
              <span style={{ color: C.orange }}>GSA</span> · Consulting P23
            </div>
            <div className="mono" style={{ fontSize: '0.72rem', color: C.muted, marginBottom: '0.2rem' }}>
              Expert en performance organisationnelle & financière
            </div>
            <div className="mono" style={{ fontSize: '0.7rem', color: C.dim, marginBottom: '1.5rem' }}>
              Fondé par Greg Stéphane Angouya
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: '1rem 1.25rem' }}>
              <p className="mono" style={{ fontSize: '0.72rem', color: C.muted, lineHeight: 1.7, margin: '0 0 0.5rem', fontStyle: 'italic' }}>
                "Ce qui n'est pas structuré n'existe pas.<br />
                Ce qui n'est pas mesuré ne s'améliore pas."
              </p>
              <span className="mono" style={{ fontSize: '0.65rem', color: C.dim }}>
                — Greg Stéphane Angouya, Fondateur GSA Consulting P23
              </span>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Nos solutions
              </div>
              {[
                { label: 'SmartAuditProcess', href: '/smartauditprocess' },
                { label: 'Livre PDF', href: '/livre' },
                { label: 'Formations', href: '/formations' },
                { label: 'Missions conseil', href: '/contact' },
              ].map(l => (
                <div key={l.label} style={{ marginBottom: '0.5rem' }}>
                  <a href={l.href} style={{ color: C.muted, textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s' }}>
                    {l.label}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Contact
              </div>
              {[
                { label: 'contact@gsaconsultingp23.com', href: 'mailto:contact@gsaconsultingp23.com' },
                { label: 'WhatsApp · +241 77 13 38 40', href: 'https://wa.me/+24177133840' },
                { label: 'Libreville, Gabon', href: '#' },
              ].map(l => (
                <div key={l.label} style={{ marginBottom: '0.5rem' }}>
                  <a href={l.href} style={{ color: C.muted, textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.15s' }}>
                    {l.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
          <span className="mono" style={{ fontSize: '0.72rem', color: C.dim }}>© 2026 GSA Consulting P23 · Tous droits réservés</span>
          <span className="mono" style={{ fontSize: '0.72rem', color: C.dim }}>Performance · Intégrité · Impact</span>
        </div>
      </div>
    </footer>
  )
}
