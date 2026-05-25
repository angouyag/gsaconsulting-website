'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A', green: '#34d399',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const CONTACT_METHODS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'contact@gsaconsultingp23.com',
    href: 'mailto:contact@gsaconsultingp23.com',
    desc: 'Réponse sous 24h ouvrées',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+241 77 13 38 40',
    href: 'https://wa.me/+24177133840',
    desc: 'Discussion rapide et directe',
  },
  {
    icon: '📍',
    label: 'Localisation',
    value: 'Libreville, Gabon',
    href: '#',
    desc: 'Missions possibles sur toute l\'Afrique',
  },
]

const SUBJECTS = [
  'SmartAuditProcess — Plateforme d\'audit',
  'Livre — Comptabilité Fournisseurs',
  'Formation professionnelle',
  'Mission conseil',
  'Autre demande',
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nom: '', prenom: '', email: '', tel: '', sujet: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[GSA Consulting] ${form.sujet}`)
    const body = encodeURIComponent(
      `Nom : ${form.prenom} ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.tel}\n\nMessage :\n${form.message}`
    )
    window.location.href = `mailto:contact@gsaconsultingp23.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: "'Syne', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(4rem,8vw,7rem) 1.5rem clamp(3rem,5vw,5rem)', textAlign: 'center' }}>
          <div style={{
            position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 600,
            background: 'radial-gradient(ellipse, rgba(232,113,26,0.09) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div className="tag">✦ Contact · GSA Consulting P23</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
              Parlons de<br />
              <span style={{ color: C.orange }}>votre projet</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: C.muted, lineHeight: 1.75, margin: '0 auto', maxWidth: 520 }}>
              Que ce soit pour un audit, une formation ou une mission conseil —
              nous répondons sous 24h ouvrées.
            </p>
          </div>
        </section>

        {/* ── 3 MOYENS DE CONTACT ── */}
        <section style={{ padding: 'clamp(2rem,4vw,4rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {CONTACT_METHODS.map(m => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
                    padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem',
                    transition: 'border-color 0.2s',
                    height: '100%', boxSizing: 'border-box',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.orange)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: 'rgba(232,113,26,0.1)', border: '1px solid rgba(232,113,26,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}>
                      {m.icon}
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: '0.7rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: C.text, fontWeight: 600, marginBottom: '0.25rem' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: C.muted }}>{m.desc}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMULAIRE ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="section-label">Formulaire de contact</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Envoyez-nous un message
              </h2>
            </div>

            {sent ? (
              <div style={{
                background: C.card, border: `1px solid ${C.green}`,
                borderRadius: 14, padding: '2.5rem', textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
              }}>
                <div style={{ fontSize: '2.5rem' }}>✓</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: C.green }}>
                  Message envoyé
                </h3>
                <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.75, margin: 0, maxWidth: 400 }}>
                  Votre client email s'est ouvert avec le message pré-rempli.
                  Nous vous répondrons sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: '0.5rem', background: 'none', border: `1px solid ${C.border}`, borderRadius: 8, padding: '0.6rem 1.5rem', color: C.muted, cursor: 'pointer', fontSize: '0.875rem' }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 'clamp(1.5rem,3vw,2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label className="checkout-label">Prénom *</label>
                      <input
                        className="checkout-input"
                        type="text" name="prenom" required
                        placeholder="Greg"
                        value={form.prenom} onChange={handleChange}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label className="checkout-label">Nom *</label>
                      <input
                        className="checkout-input"
                        type="text" name="nom" required
                        placeholder="Angouya"
                        value={form.nom} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label className="checkout-label">Email *</label>
                      <input
                        className="checkout-input"
                        type="email" name="email" required
                        placeholder="vous@entreprise.com"
                        value={form.email} onChange={handleChange}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label className="checkout-label">Téléphone</label>
                      <input
                        className="checkout-input"
                        type="tel" name="tel"
                        placeholder="+241 __ __ __ __"
                        value={form.tel} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="checkout-label">Sujet *</label>
                    <select
                      className="checkout-input"
                      name="sujet" required
                      value={form.sujet} onChange={handleChange}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Choisissez un sujet...</option>
                      {SUBJECTS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="checkout-label">Message *</label>
                    <textarea
                      className="checkout-input"
                      name="message" required
                      rows={5}
                      placeholder="Décrivez votre besoin ou votre projet..."
                      value={form.message} onChange={handleChange}
                      style={{ resize: 'vertical', minHeight: 120 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ fontSize: '1rem', padding: '1rem', marginTop: '0.25rem' }}
                  >
                    Envoyer le message →
                  </button>
                  <p className="mono" style={{ fontSize: '0.72rem', color: C.dim, textAlign: 'center', margin: 0 }}>
                    Votre client email s'ouvrira avec le message pré-rempli · Réponse sous 24h
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ── HORAIRES ── */}
        <section style={{ padding: 'clamp(2rem,4vw,3.5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
              padding: 'clamp(1.5rem,3vw,2rem)',
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
            }}>
              <div>
                <div className="mono" style={{ fontSize: '0.72rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                  Horaires d'ouverture
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>Lundi — Vendredi</div>
                <div style={{ fontSize: '0.9rem', color: C.muted, marginTop: '0.25rem' }}>8h00 – 18h00 (WAT · UTC+1)</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { day: 'Lun — Ven', hours: '8h00 – 18h00', active: true },
                  { day: 'Samedi', hours: 'Sur rendez-vous', active: false },
                  { day: 'Dimanche', hours: 'Fermé', active: false },
                ].map(d => (
                  <div key={d.day} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', color: C.dim, minWidth: 90 }}>{d.day}</span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: d.active ? C.green : C.dim,
                      fontWeight: d.active ? 600 : 400,
                    }}>
                      {d.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
