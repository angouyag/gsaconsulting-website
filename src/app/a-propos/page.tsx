import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'À propos — Greg Stéphane Angouya | GSA Consulting P23',
  description: "Fondateur de GSA Consulting P23, Greg Stéphane Angouya apporte 20+ ans d'expérience en multinationales pétrolières — Maurel & Prom, TotalEnergies, Perenco.",
}

const C = {
  bg: '#0d0e10', bgAlt: '#0a0b0d', card: '#16181c',
  border: '#2a2d35', orange: '#E8711A', green: '#34d399',
  text: '#f0f0f0', muted: '#9ca3af', dim: '#6b7280',
}

const TIMELINE = [
  'Maurel & Prom Gabon',
  'TotalEnergies EP Gabon',
  'Perenco Oil & Gas Gabon',
]

const DOMAINES = [
  'Optimisation des processus financiers et administratifs',
  'Amélioration du traitement des flux fournisseurs',
  'Structuration des données et des reportings',
  'Développement des compétences',
  'Audit opérationnel',
  'Valorisation objective des trajectoires professionnelles',
]

const SOLUTIONS = [
  {
    icon: '◈',
    nom: 'SmartAuditProcess',
    desc: "Plateforme d'audit de maturité organisationnelle basée sur le référentiel SAI. 6 modules, scoring automatique, rapport PDF.",
    href: '/smartauditprocess',
    dispo: true,
  },
  {
    icon: '◎',
    nom: 'SmartInvoiceProcess',
    desc: "Tableau de bord de pilotage du cycle de paiement fournisseurs. 3 vues (global, par département, par fournisseur), analyse des délais, balance âgée, TOP 10 multicritères, suivi multidevise.",
    href: '#',
    dispo: false,
  },
  {
    icon: '△',
    nom: 'ACHILLE',
    desc: "Plateforme personnelle de structuration de la trajectoire professionnelle et financière. Reconstruire son historique réel, objectiver ses performances, comprendre sa valeur professionnelle et prendre des décisions de carrière mieux argumentées.",
    href: '#',
    dispo: false,
  },
  {
    icon: '⬡',
    nom: 'PROCÉDIA',
    desc: "Solution clé en main de cartographie, rédaction, mise à jour et pilotage des procédures internes. Pour les organisations qui veulent mettre de l'ordre, de la clarté et de la performance dans leurs activités.",
    href: '#',
    dispo: false,
  },
]


export default function AProposPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: "'Syne', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(4rem,8vw,7rem) 1.5rem clamp(3rem,5vw,5rem)' }}>
          <div style={{
            position: 'absolute', top: '-10%', right: '5%',
            width: 700, height: 700,
            background: 'radial-gradient(ellipse, rgba(232,113,26,0.07) 0%, transparent 68%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            <div className="livre-hero" style={{ alignItems: 'center' }}>

              {/* Text — left */}
              <div>
                <div className="tag">✦ Fondateur · GSA Consulting P23</div>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.035em', margin: '0 0 0.5rem', lineHeight: 1.06 }}>
                  Greg Stéphane<br />
                  <span style={{ color: C.orange }}>Angouya</span>
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: C.muted, margin: '0 0 2rem', fontWeight: 500, lineHeight: 1.5 }}>
                  Fondateur de GSA Consulting P23
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
                  {[
                    'Master Audit & Contrôle de Gestion',
                    '20+ ans en multinationales pétrolières',
                    'Maurel & Prom · TotalEnergies · Perenco',
                  ].map(b => (
                    <span key={b} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.7rem', letterSpacing: '0.05em',
                      padding: '0.4rem 1rem',
                      borderRadius: 20,
                      border: `1px solid ${C.border}`,
                      background: 'rgba(255,255,255,0.03)',
                      color: C.muted,
                    }}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo — right */}
              <div className="livre-hero-img" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: 'min(340px, 85vw)', aspectRatio: '3/4',
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                  position: 'relative',
                }}>
                  <img
                    src="/Photo/PhotoGreg.jpeg"
                    alt="Greg Stéphane Angouya"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(13,14,16,0.9))',
                    padding: '2.5rem 1.25rem 1.25rem',
                  }}>
                    <div className="mono" style={{ fontSize: '0.62rem', color: C.orange, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      GSA Consulting P23
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: C.text }}>
                      Greg Stéphane Angouya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LE PARCOURS ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5.5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <p className="section-label">Parcours professionnel</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 1.5rem', lineHeight: 1.12 }}>
              Une expertise construite<br />sur le terrain
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.85, marginBottom: '3rem', maxWidth: 720 }}>
              Pendant plus de vingt ans, Greg Stéphane Angouya a évolué au cœur de multinationales françaises du secteur pétrolier, occupant des fonctions de responsabilité dans les domaines financiers, administratifs et opérationnels. Cette trajectoire l&apos;a conduit à maîtriser les mécanismes complexes des grandes organisations : pilotage de la performance, contrôle interne, gestion des flux fournisseurs, supervision d&apos;équipes et structuration des processus critiques. C&apos;est dans ce contexte d&apos;exigence et de rigueur qu&apos;il a développé une vision claire des leviers qui permettent à une organisation de gagner en efficacité, en transparence et en résilience.
            </p>

            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {TIMELINE.map((company, i) => (
                <div key={company} style={{ display: 'flex', gap: '1.5rem', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingBottom: i < TIMELINE.length - 1 ? '1.25rem' : 0 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: i === 0 ? C.orange : i === 1 ? 'rgba(232,113,26,0.18)' : 'rgba(232,113,26,0.1)',
                      border: `2px solid ${i === 0 ? C.orange : 'rgba(232,113,26,0.35)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', fontWeight: 700,
                      color: i === 0 ? '#fff' : C.orange, flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: 'rgba(232,113,26,0.2)', marginTop: 8 }} />
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: i < TIMELINE.length - 1 ? '1.25rem' : 0 }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text }}>
                      {company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LA CONVICTION ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5.5rem) 1.5rem' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p className="section-label">La conviction</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 1.75rem', lineHeight: 1.12 }}>
              Ce qui n&apos;est pas structuré<br />devient invisible
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.85, margin: 0 }}>
                Au fil de ses années d&apos;expérience, Greg Stéphane Angouya a fait une double observation. D&apos;un côté, des collaborateurs talentueux dont les compétences et les réalisations ne trouvent jamais de traduction visible dans leur progression professionnelle. De l&apos;autre, des organisations — parfois à hauts revenus — qui souffrent d&apos;une fragilité structurelle : des processus flous, des données éparpillées, des décisions prises sans appui analytique solide.
              </p>
              <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.85, margin: 0 }}>
                Dans les deux cas, le problème n&apos;est pas l&apos;absence de valeur, mais l&apos;absence de structure pour la rendre visible et exploitable. Cette conviction est au cœur de tout ce que GSA Consulting P23 propose.
              </p>
            </div>

            {/* Citation mise en valeur */}
            <div style={{
              background: 'rgba(232,113,26,0.05)',
              border: `1px solid rgba(232,113,26,0.22)`,
              borderLeft: `4px solid ${C.orange}`,
              borderRadius: '0 14px 14px 0',
              padding: '1.75rem 2rem',
            }}>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 600, color: C.text, lineHeight: 1.65, margin: '0 0 1rem', fontStyle: 'italic' }}>
                &ldquo;Les entreprises performantes sont celles qui rendent visibles les bonnes informations au bon moment.&rdquo;
              </p>
              <div className="mono" style={{ fontSize: '0.68rem', color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                — Greg Stéphane Angouya · Fondateur, GSA Consulting P23
              </div>
            </div>
          </div>
        </section>

        {/* ── GSA CONSULTING P23 ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5.5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="grid-2" style={{ alignItems: 'start', gap: '2.5rem' }}>
              <div>
                <p className="section-label">Le cabinet</p>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 1.5rem', lineHeight: 1.12 }}>
                  Pourquoi<br /><span style={{ color: C.orange }}>GSA Consulting P23 ?</span>
                </h2>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.85, marginBottom: '1.25rem' }}>
                  GSA Consulting P23 est né de la conviction que les organisations africaines méritent des outils et des méthodes de pilotage à la hauteur de leurs ambitions. Fort de son expérience en multinationales pétrolières, Greg Stéphane Angouya a créé ce cabinet pour mettre cette expertise au service des entreprises et des professionnels du continent.
                </p>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.85 }}>
                  Le cabinet intervient dans six domaines complémentaires, couvrant l&apos;ensemble des besoins en structuration, performance et développement des organisations.
                </p>
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: '1.75rem 2rem' }}>
                <div className="mono" style={{ fontSize: '0.68rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                  6 domaines d&apos;accompagnement
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {DOMAINES.map((d, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                        background: 'rgba(232,113,26,0.1)', border: '1px solid rgba(232,113,26,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: 1,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.orange }} />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.55 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LES SOLUTIONS NUMÉRIQUES ── */}
        <section style={{ padding: 'clamp(3rem,5vw,5.5rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 1060, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">Écosystème numérique</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
                Les solutions numériques
              </h2>
            </div>

            <div className="grid-2">
              {SOLUTIONS.map(s => (
                <div key={s.nom} style={{
                  background: C.card,
                  border: `1px solid ${s.dispo ? C.orange : C.border}`,
                  borderRadius: 14, padding: '1.75rem',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  position: 'relative',
                }}>
                  {!s.dispo && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`,
                      borderRadius: 4, padding: '2px 8px',
                    }}>
                      <span className="mono" style={{ fontSize: '0.6rem', color: C.dim, letterSpacing: '0.06em' }}>BIENTÔT</span>
                    </div>
                  )}
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: s.dispo ? 'rgba(232,113,26,0.12)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${s.dispo ? 'rgba(232,113,26,0.3)' : C.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', color: s.dispo ? C.orange : C.dim,
                  }}>
                    {s.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.015em', marginBottom: '0.5rem', color: s.dispo ? C.text : C.muted }}>
                      {s.nom}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                  </div>
                  {s.dispo ? (
                    <a
                      href={s.href}
                      className="btn-primary"
                      style={{ textAlign: 'center', fontSize: '0.875rem', padding: '0.7rem 1.25rem' }}
                    >
                      Accéder →
                    </a>
                  ) : (
                    <div className="mono" style={{ fontSize: '0.7rem', color: C.dim }}>
                      Disponible prochainement
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LE LIVRE ── */}
        <section style={{ padding: 'clamp(2.5rem,4vw,4rem) 1.5rem', background: C.bgAlt }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
              padding: 'clamp(1.5rem,3vw,2.25rem)',
              display: 'flex', flexWrap: 'wrap', gap: '1.75rem', alignItems: 'center',
            }}>
              <div style={{
                width: 110, height: 148, flexShrink: 0,
                borderRadius: 10, overflow: 'hidden',
                border: `1px solid ${C.border}`,
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
              }}>
                <img
                  src="/livre/photo_livre1.jpg"
                  alt="Comptabilité Fournisseurs"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="mono" style={{ fontSize: '0.68rem', color: C.dim, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.625rem' }}>
                  Publication
                </div>
                <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                  Comptabilité Fournisseurs :<br />Fondamentaux et Pratiques Avancées
                </h3>
                <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                  Le guide complet de Greg Stéphane Angouya pour maîtriser le cycle fournisseur, de la réception des factures au reporting de performance.
                </p>
                <a href="/livre" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontSize: '0.875rem', fontWeight: 600, color: C.orange,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}>
                  Découvrir le livre →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section style={{ padding: 'clamp(4rem,6vw,6.5rem) 1.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div className="tag">✦ Collaboration</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.85rem)', fontWeight: 800, letterSpacing: '-0.035em', margin: '0 0 1rem', lineHeight: 1.08 }}>
              Travaillons<br /><span style={{ color: C.orange }}>ensemble</span>
            </h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: C.muted, lineHeight: 1.75, margin: '0 auto 2.5rem', maxWidth: 480 }}>
              Que ce soit pour structurer vos processus, former vos équipes ou piloter un audit — nous sommes prêts à construire avec vous.
            </p>
            <div className="cta-row">
              <a href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Parlons de votre projet →
              </a>
              <a
                href="https://wa.me/+24177133840"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '1rem', padding: '1rem 2rem' }}
              >
                WhatsApp direct
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
