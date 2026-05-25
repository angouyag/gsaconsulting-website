'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A', green: '#34d399',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const TARGET = 'https://smartauditprocess.vercel.app'

export default function SmartAuditProcessPage() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count <= 0) { window.location.href = TARGET; return }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: "'Syne', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

          {/* Glow */}
          <div style={{
            position: 'relative', display: 'inline-block',
            marginBottom: '2.5rem',
          }}>
            <div style={{
              width: 96, height: 96, borderRadius: '50%',
              background: 'rgba(232,113,26,0.1)',
              border: `1px solid rgba(232,113,26,0.3)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
            }}>
              <span style={{ fontSize: '2.5rem', color: C.orange }}>◈</span>
            </div>
          </div>

          <div className="tag" style={{ marginBottom: '1.25rem' }}>SmartAuditProcess · G-Consulting</div>

          <h1 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 1rem' }}>
            Vous allez être redirigé vers<br />
            <span style={{ color: C.orange }}>SmartAuditProcess</span>
          </h1>

          <p style={{ fontSize: '0.95rem', color: C.muted, margin: '0 0 0.75rem', lineHeight: 1.7 }}>
            Plateforme d'audit de maturité organisationnelle — par G-Consulting
          </p>

          {/* Countdown */}
          <div className="mono" style={{ fontSize: '0.8rem', color: C.dim, marginBottom: '2.5rem' }}>
            Redirection automatique dans{' '}
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 28, height: 28, borderRadius: '50%',
              background: 'rgba(232,113,26,0.12)', border: `1px solid rgba(232,113,26,0.3)`,
              color: C.orange, fontWeight: 700, fontSize: '0.9rem',
              verticalAlign: 'middle', marginLeft: 4,
            }}>
              {count}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', alignItems: 'center' }}>
            <a
              href={TARGET}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem', width: '100%', maxWidth: 360 }}
            >
              Accéder à SmartAuditProcess →
            </a>
            <a href="/" style={{ fontSize: '0.875rem', color: C.dim, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.muted)}
              onMouseLeave={e => (e.currentTarget.style.color = C.dim)}>
              ← Retour à GSA Consulting P23
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
