'use client'
import { useState, useEffect } from 'react'

export default function EmailCapture() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (localStorage.getItem('gsa_email_popup_closed')) return
    const t = setTimeout(() => setVisible(true), 8000)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    localStorage.setItem('gsa_email_popup_closed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.72)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10000, padding: '1.5rem',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div style={{
        background: '#16181c',
        border: '1px solid #2a2d35',
        borderRadius: 16,
        padding: '2rem',
        maxWidth: 440,
        width: '100%',
        position: 'relative',
      }}>
        <button
          onClick={close}
          aria-label="Fermer"
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: '#6b7280', fontSize: '1.4rem', lineHeight: 1,
            width: 28, height: 28, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          ×
        </button>

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.62rem', color: '#E8711A',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          margin: '0 0 0.875rem',
        }}>
          Newsletter · GSA Consulting P23
        </p>

        <h3 style={{
          fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f0',
          margin: '0 0 0.625rem', lineHeight: 1.3,
        }}>
          Restez informé des actualités<br />GSA Consulting P23
        </h3>

        <p style={{ fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
          Analyses, conseils et mises à jour directement dans votre boîte mail.
        </p>

        <input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%', boxSizing: 'border-box',
            background: '#0d0e10', border: '1px solid #2a2d35',
            borderRadius: 8, padding: '0.75rem 1rem',
            color: '#f0f0f0', fontSize: '0.9rem',
            fontFamily: "'Syne', sans-serif",
            marginBottom: '0.875rem', outline: 'none',
          }}
        />

        <a
          href={`mailto:contact@gsaconsultingp23.com?subject=Inscription%20newsletter&body=Email%3A%20${encodeURIComponent(email)}`}
          onClick={close}
          style={{
            display: 'block', width: '100%', boxSizing: 'border-box',
            background: '#E8711A', color: '#fff',
            fontWeight: 700, fontSize: '0.95rem',
            padding: '0.85rem', borderRadius: 8,
            textAlign: 'center', textDecoration: 'none',
            fontFamily: "'Syne', sans-serif",
          }}
        >
          S&apos;inscrire
        </a>

        <button
          onClick={close}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#6b7280', fontSize: '0.78rem', width: '100%',
            textAlign: 'center', marginTop: '0.875rem',
            fontFamily: "'DM Mono', monospace",
            letterSpacing: '0.04em',
          }}
        >
          Non merci
        </button>
      </div>
    </div>
  )
}
