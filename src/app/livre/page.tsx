import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A', green: '#34d399',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const LEARNINGS = [
  { num: '01', text: 'Maîtriser le cycle fournisseurs de bout en bout — de la commande à l\'archivage.' },
  { num: '02', text: 'Contrôler et valider les factures fournisseurs avec rigueur et méthode.' },
  { num: '03', text: 'Analyser les comptes fournisseurs et détecter les anomalies comptables.' },
  { num: '04', text: 'Gérer les relations fournisseurs : litiges, relances, réconciliations.' },
  { num: '05', text: 'Comprendre le traitement comptable complet et les impacts sur les états financiers.' },
]

const DETAILS = [
  { label: 'Public cible', value: 'Comptables, assistants financiers, gestionnaires achats, étudiants en finance' },
  { label: 'Prérequis', value: 'Aucun — accessible à tous niveaux' },
  { label: 'Durée de lecture', value: 'Environ 4 à 6 heures' },
  { label: 'Auteur', value: 'Greg Stéphane Angouya — 20+ ans d\'expérience en multinationales' },
  { label: 'Format', value: 'Méthodologie GSA · Cas pratiques · Outils applicables immédiatement' },
]

export default function LivrePage() {
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
            <div className="tag">📖 Livre · Greg Stéphane Angouya</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
              Devenez Expert en<br />
              <span style={{ color: C.orange }}>Comptabilité Fournisseurs</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: C.muted, lineHeight: 1.75, margin: '0 auto 2.5rem', maxWidth: 560 }}>
              Le guide complet pour maîtriser le cycle fournisseurs, de la commande au paiement.
              Méthodologie GSA, cas pratiques concrets, outils directement applicables.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', fontFamily: "'DM Mono', monospace", fontSize: '0.73rem', color: C.dim }}>
              <span><span style={{ color: C.green, marginRight: '0.4rem' }}>✓</span>Cas pratiques inclus</span>
              <span><span style={{ color: C.green, marginRight: '0.4rem' }}>✓</span>Aucun prérequis</span>
              <span><span style={{ color: C.green, marginRight: '0.4rem' }}>✓</span>Satisfaction garantie</span>
            </div>
          </div>
        </section>

        {/* ── CE QUE VOUS APPRENDREZ ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Contenu du livre</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Ce que vous apprendrez
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {LEARNINGS.map(l => (
                <div key={l.num} style={{
                  background: C.card, border: `1px solid ${C.border}`,
                  borderRadius: 10, padding: '1.25rem 1.5rem',
                  display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
                }}>
                  <span className="mono" style={{ color: C.orange, fontWeight: 700, fontSize: '0.85rem', flexShrink: 0, paddingTop: '0.1rem' }}>
                    {l.num}
                  </span>
                  <p style={{ fontSize: '0.95rem', color: C.text, lineHeight: 1.65, margin: 0 }}>{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DÉTAILS ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Informations</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Pour qui est ce livre ?
              </h2>
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: 'hidden' }}>
              {DETAILS.map((d, i) => (
                <div key={d.label} style={{
                  display: 'grid', gridTemplateColumns: '1fr 2fr',
                  padding: '1.125rem 1.5rem', gap: '1rem',
                  borderBottom: i < DETAILS.length - 1 ? `1px solid ${C.border}` : 'none',
                  alignItems: 'start',
                }}>
                  <div className="mono" style={{ fontSize: '0.75rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.06em', paddingTop: '0.1rem' }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: C.text, lineHeight: 1.6 }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Commander</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Choisissez votre format
              </h2>
            </div>
            <div className="grid-2">

              {/* Version papier */}
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span className="mono" style={{ fontSize: '0.68rem', color: C.muted, background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`, borderRadius: 4, padding: '2px 8px', letterSpacing: '0.06em' }}>
                    📖 Version papier
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>15 000</div>
                  <div className="mono" style={{ fontSize: '0.85rem', color: C.muted }}>XAF</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['Livre physique livré', 'Prise de notes facilitée', 'Idéal pour la formation'].map(f => (
                    <li key={f} style={{ fontSize: '0.875rem', color: C.muted, display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: C.green }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@gsaconsultingp23.com?subject=Commande%20livre%20papier%20-%20Devenez%20Expert%20en%20Comptabilit%C3%A9%20Fournisseurs"
                  className="btn-ghost"
                  style={{ textAlign: 'center', marginTop: 'auto' }}
                >
                  Commander →
                </a>
              </div>

              {/* Version numérique */}
              <div style={{ background: C.card, border: `1px solid ${C.orange}`, borderRadius: 14, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: -1, right: '1.5rem',
                  background: C.orange, color: '#fff',
                  fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: '0 0 6px 6px',
                }}>
                  Immédiat
                </div>
                <div>
                  <span className="mono" style={{ fontSize: '0.68rem', color: C.orange, background: 'rgba(232,113,26,0.1)', border: '1px solid rgba(232,113,26,0.2)', borderRadius: 4, padding: '2px 8px', letterSpacing: '0.06em' }}>
                    💻 Version numérique
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>7 500</div>
                  <div className="mono" style={{ fontSize: '0.85rem', color: C.muted }}>XAF</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['PDF téléchargeable', 'Accès immédiat après paiement', 'Lisible sur tous vos appareils'].map(f => (
                    <li key={f} style={{ fontSize: '0.875rem', color: C.muted, display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: C.green }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@gsaconsultingp23.com?subject=Commande%20livre%20num%C3%A9rique%20-%20Devenez%20Expert%20en%20Comptabilit%C3%A9%20Fournisseurs"
                  className="btn-primary"
                  style={{ textAlign: 'center', marginTop: 'auto' }}
                >
                  Télécharger →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── GARANTIE ── */}
        <section style={{ padding: 'clamp(2.5rem,4vw,4rem) 1.5rem' }}>
          <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 14, padding: '2rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            }}>
              <div style={{ fontSize: '2.5rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Satisfaction garantie</h3>
              <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>
                Si le contenu ne correspond pas à vos attentes, nous vous remboursons intégralement.
                Contactez-nous à <a href="mailto:contact@gsaconsultingp23.com" style={{ color: C.orange }}>contact@gsaconsultingp23.com</a> dans les 7 jours suivant votre achat.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
