'use client'
import { useState } from 'react'

export default function Breadcrumb({ page }: { page: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      maxWidth: 1100,
      margin: '0 auto',
      padding: '0.625rem 1.5rem',
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.72rem',
      color: '#9ca3af',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
    }}>
      <a
        href="/"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? '#f0f0f0' : '#9ca3af',
          textDecoration: 'none',
          transition: 'color 0.15s',
        }}
      >
        Accueil
      </a>
      <span style={{ color: '#4b5563' }}>›</span>
      <span>{page}</span>
    </div>
  )
}
