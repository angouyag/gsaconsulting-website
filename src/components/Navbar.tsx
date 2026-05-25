'use client'
import { useState } from 'react'

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const LINKS = [
  { label: 'Nos solutions', href: '/#solutions' },
  { label: 'Notre expertise', href: '/#expertise' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Formations', href: '/formations' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(13,14,16,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 1.5rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: '#fff', overflow: 'hidden',
            position: 'relative', flexShrink: 0,
          }}>
            <img
              src="/logo/LOGO.PNG"
              alt="G-Consulting"
              style={{
                position: 'absolute', width: '180%',
                top: '-4%', left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.025em', color: C.text, lineHeight: 1.15 }}>
              <span style={{ color: C.orange }}>GSA</span> · Consulting P23
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', color: C.dim, letterSpacing: '0.06em', lineHeight: 1 }}>
              PERFORMANCE · EXCELLENCE
            </span>
          </div>
        </a>

        <div className="nav-links-desktop">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
          <a href="/contact" className="btn-primary nav-btn-desktop" style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}>
            Parlons de votre projet
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="nav-btn-mobile"
            style={{ background: 'none', border: `1px solid ${C.border}`, borderRadius: 6, padding: '0.45rem 0.65rem', cursor: 'pointer', color: C.muted, flexDirection: 'column', gap: 4 }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 18, height: 1.5, background: C.muted }} />
            <span style={{ display: 'block', width: 18, height: 1.5, background: C.muted }} />
            <span style={{ display: 'block', width: 18, height: 1.5, background: C.muted }} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ color: C.muted, textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Parlons de votre projet
          </a>
        </div>
      )}
    </nav>
  )
}
