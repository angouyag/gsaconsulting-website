'use client'
import { useState } from 'react'

const PHOTOS = [
  { src: '/livre/photo_livre2.jpg', alt: 'Livre tenu en mains' },
  { src: '/livre/photo_livre3.jpg', alt: 'Livre sur table blanche avec fleurs' },
  { src: '/livre/photo_livre4.jpg', alt: 'Femme tenant le livre' },
  { src: '/livre/photo_livre5.jpg', alt: 'Livre sur tissu coloré' },
]

export default function LivreGallerie() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 500,
            background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', cursor: 'zoom-out',
          }}
        >
          <img
            src={lightbox}
            alt="Aperçu"
            style={{
              maxWidth: '90vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: 10,
              boxShadow: '0 0 80px rgba(0,0,0,0.8)',
            }}
          />
          <button
            onClick={e => { e.stopPropagation(); setLightbox(null) }}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', borderRadius: 8, width: 42, height: 42,
              fontSize: '1.4rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
        {PHOTOS.map(p => (
          <button
            key={p.src}
            onClick={() => setLightbox(p.src)}
            style={{
              background: 'none', border: '1px solid #2a2d35', borderRadius: 12,
              overflow: 'hidden', cursor: 'zoom-in', padding: 0,
              aspectRatio: '1', display: 'block', width: '100%',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8711A'; e.currentTarget.style.transform = 'scale(1.01)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2d35'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            <img
              src={p.src}
              alt={p.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </button>
        ))}
      </div>
    </>
  )
}
