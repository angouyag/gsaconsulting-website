import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Formations Professionnelles — GSA Consulting P23',
  description: 'Formation "Devenez Expert en Comptabilité Fournisseurs" — 4 jours animés par Greg Stéphane Angouya. Inter ou intra-entreprise. Formations sur mesure disponibles.',
}

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A', green: '#34d399',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const OBJECTIVES = [
  'Maîtriser l\'intégralité du cycle fournisseurs et ses enjeux financiers.',
  'Sécuriser le traitement des factures et réduire les erreurs comptables.',
  'Analyser et justifier les comptes fournisseurs avec précision.',
  'Gérer les litiges, relances et réconciliations fournisseurs.',
  'Produire des reportings fiables pour la direction financière.',
]

const INFOS = [
  { label: 'Durée', value: '4 jours (28 heures)' },
  { label: 'Format', value: 'Présentiel — inter ou intra-entreprise' },
  { label: 'Public', value: 'Comptables, logistique, achats, étudiants en finance' },
  { label: 'Prérequis', value: 'Aucun — ouvert à tous niveaux' },
  { label: 'Prix', value: '100 000 XAF / personne' },
  { label: 'Animateur', value: 'Greg Stéphane Angouya — 20+ ans en multinationales' },
]

export default function FormationsPage() {
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
            <div className="tag">✦ Formations Professionnelles · GSA Consulting P23</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
              Formations Professionnelles<br />
              <span style={{ color: C.orange }}>Animées par un expert terrain</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: C.muted, lineHeight: 1.75, margin: '0 auto', maxWidth: 560 }}>
              Des formations conçues pour être immédiatement applicables — pas seulement théoriques.
              Chaque session est animée par Greg Stéphane Angouya, fort de 20 ans d'expérience terrain en multinationales.
            </p>
          </div>
        </section>

        {/* ── FORMATION PHARE ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 1060, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Formation phare</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Devenez Expert en Comptabilité Fournisseurs
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>

              {/* Infos */}
              <div style={{ background: C.card, border: `1px solid ${C.orange}`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ background: 'rgba(232,113,26,0.06)', padding: '1.25rem 1.5rem', borderBottom: `1px solid ${C.border}` }}>
                  <span className="mono" style={{ fontSize: '0.7rem', color: C.orange, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Fiche programme
                  </span>
                </div>
                {INFOS.map((info, i) => (
                  <div key={info.label} style={{
                    padding: '1rem 1.5rem',
                    borderBottom: i < INFOS.length - 1 ? `1px solid ${C.border}` : 'none',
                    display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '0.75rem', alignItems: 'start',
                  }}>
                    <div className="mono" style={{ fontSize: '0.72rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: info.label === 'Prix' ? C.orange : C.text, fontWeight: info.label === 'Prix' ? 700 : 400, lineHeight: 1.5 }}>
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Objectifs + CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: '1.75rem' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                    Objectifs pédagogiques
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {OBJECTIVES.map((obj, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                        <span className="mono" style={{
                          flexShrink: 0, width: 22, height: 22,
                          borderRadius: '50%', background: 'rgba(232,113,26,0.1)',
                          border: '1px solid rgba(232,113,26,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.65rem', color: C.orange, fontWeight: 700,
                        }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.65, margin: 0 }}>{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:contact@gsaconsultingp23.com?subject=Demande%20formation%20-%20Comptabilit%C3%A9%20Fournisseurs"
                  className="btn-primary"
                  style={{ textAlign: 'center', fontSize: '1rem', padding: '1rem 1.5rem' }}
                >
                  Demander un devis →
                </a>
                <p className="mono" style={{ fontSize: '0.72rem', color: C.dim, textAlign: 'center', margin: 0 }}>
                  Réponse sous 24h · Intra-entreprise disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMATIONS SUR MESURE ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Sur mesure</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Formations intra-entreprise adaptées
              </h2>
            </div>

            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 'clamp(1.5rem,3vw,2.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 1rem' }}>
                  Un programme conçu pour votre équipe
                </h3>
                <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                  GSA Consulting P23 conçoit des formations sur mesure pour vos équipes, dans vos locaux
                  ou à distance. Contenu adapté à votre secteur, vos outils et vos enjeux spécifiques.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Contenu 100% adapté à votre contexte', 'Durée flexible selon vos besoins', 'Supports pédagogiques fournis', 'Suivi post-formation disponible'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: C.muted }}>
                      <span style={{ color: C.green, flexShrink: 0 }}>✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href="mailto:contact@gsaconsultingp23.com?subject=Demande%20formation%20sur%20mesure%20-%20GSA%20Consulting%20P23"
                  className="btn-primary"
                  style={{ textAlign: 'center', fontSize: '0.975rem' }}
                >
                  Discuter de votre besoin →
                </a>
                <a
                  href="https://wa.me/+24177133840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ textAlign: 'center', fontSize: '0.975rem' }}
                >
                  WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
