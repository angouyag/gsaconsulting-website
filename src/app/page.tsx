'use client'
import Navbar from '@/components/Navbar'
import FadeIn from '@/components/FadeIn'
import EmailCapture from '@/components/EmailCapture'

const C = {
  bg: '#0d0e10',
  bgAlt: '#0a0b0d',
  card: '#16181c',
  border: '#2a2d35',
  orange: '#E8711A',
  green: '#34d399',
  text: '#f0f0f0',
  muted: '#9ca3af',
  dim: '#6b7280',
}

const SOLUTIONS = [
  {
    badge: 'SaaS B2B · Disponible',
    title: 'SmartAuditProcess',
    desc: "Plateforme d'audit de maturité organisationnelle basée sur le référentiel SAI. 6 modules, scoring automatique, rapport PDF prêt pour votre CODIR.",
    price: 'À partir de 250 000 XAF / audit',
    payment: 'Paiement Mobile Money · Virement · Visa',
    prices: null,
    cta: 'Découvrir la plateforme →',
    href: '/smartauditprocess',
    highlight: true,
    soon: false,
  },
  {
    badge: 'Livre · Disponible',
    title: 'Devenez Expert en\nComptabilité Fournisseurs',
    desc: "Le guide complet pour maîtriser le cycle fournisseurs, de la commande au paiement. Méthodologie GSA, cas pratiques, outils directement applicables.",
    price: null,
    payment: null,
    prices: [
      { label: '📖 Version papier', value: '15 000 XAF' },
      { label: '💻 Version numérique', value: '7 500 XAF' },
    ],
    cta: 'Obtenir le livre →',
    href: '/livre',
    highlight: false,
    soon: false,
  },
  {
    badge: 'Présentiel · Disponible',
    title: 'Formations Professionnelles',
    desc: "Comptabilité fournisseurs, pilotage des achats, performance organisationnelle. Animées par Greg Stéphane Angouya. 4 jours · Inter ou intra-entreprise.",
    price: '100 000 XAF / personne',
    payment: null,
    prices: null,
    cta: 'Voir le catalogue →',
    href: '/formations',
    highlight: false,
    soon: false,
  },
  {
    badge: 'SaaS B2B · Bientôt disponible',
    title: 'SmartInvoiceProcess',
    desc: "Tableau de bord de pilotage du cycle de paiement fournisseurs. 3 vues (global, par département, par fournisseur), analyse des délais, balance âgée, TOP 10 multicritères, suivi multidevise.",
    price: null,
    payment: null,
    prices: null,
    cta: null,
    href: null,
    highlight: false,
    soon: true,
  },
  {
    badge: 'Conseil · Disponible',
    title: 'PROCÉDIA',
    desc: "Solution clé en main de cartographie, rédaction, mise à jour et pilotage des procédures internes. Pour les organisations qui veulent mettre de l'ordre, de la clarté et de la performance dans leurs activités.",
    price: null,
    payment: null,
    prices: null,
    cta: 'Nous contacter →',
    href: '/contact',
    highlight: false,
    soon: false,
  },
  {
    badge: 'SaaS B2C/B2B · Bientôt disponible',
    title: 'ACHILLE',
    desc: "Plateforme personnelle de structuration de la trajectoire professionnelle et financière. Reconstruire son historique réel, objectiver ses performances, prendre des décisions de carrière mieux argumentées.",
    price: null,
    payment: null,
    prices: null,
    cta: null,
    href: null,
    highlight: false,
    soon: true,
  },
]

const PILLARS = [
  {
    num: '01',
    title: 'Rigueur',
    desc: "Chaque diagnostic, chaque formation, chaque outil livré repose sur une méthodologie éprouvée — pas sur des approximations.",
  },
  {
    num: '02',
    title: 'Intégrité',
    desc: "Nous disons ce qui est vrai, pas ce qui est confortable. Nos recommandations sont fondées sur les faits, pas sur ce que le client veut entendre.",
  },
  {
    num: '03',
    title: 'Impact durable',
    desc: "Nous ne livrons pas des rapports. Nous construisons des capacités — humaines, organisationnelles, systémiques.",
  },
]

const STATS = [
  { value: '20+', label: "Ans d'expérience en multinationales" },
  { value: '3',   label: 'Solutions numériques développées' },
  { value: '6',   label: 'Modules SAI couverts' },
  { value: '48h', label: 'Délai de déploiement SmartAuditProcess' },
]

const SECTORS = [
  'PME & ETI',
  'Groupes industriels',
  'Institutions',
  'Secteur bancaire & assurance',
  'Afrique francophone',
]

const TESTIMONIALS = [
  {
    quote: "L'approche de GSA Consulting nous a permis de structurer des processus qui fonctionnaient sur l'intuition depuis des années. Le changement a été visible en quelques semaines.",
    name: 'Directeur Administratif & Financier',
    company: 'Groupe industriel, Libreville',
  },
  {
    quote: "La formation en comptabilité fournisseurs a été une révélation pour notre équipe. Pratique, exigeante, directement applicable le lendemain.",
    name: 'DRH',
    company: 'PME de services, Douala',
  },
]

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GSA Consulting P23',
  url: 'https://gsaconsultingp23.com',
  description: 'Cabinet de conseil en performance organisationnelle, audit de maturité et formation professionnelle.',
  founder: { '@type': 'Person', name: 'Greg Stéphane Angouya' },
  address: { '@type': 'PostalAddress', addressLocality: 'Libreville', addressCountry: 'GA' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+241-77-13-38-40', contactType: 'customer service', email: 'contact@gsaconsultingp23.com' },
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: "'Syne', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(4.5rem,9vw,8rem) 1.5rem clamp(4rem,7vw,6rem)', textAlign: 'center' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 700,
          background: 'radial-gradient(ellipse, rgba(232,113,26,0.10) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          <div className="tag">✦ Cabinet de conseil en performance organisationnelle</div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            margin: '0 0 1.75rem',
          }}>
            Transformez vos processus.<br />
            Élevez votre performance.<br />
            <span style={{ color: C.orange }}>Avec méthode.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: C.muted,
            lineHeight: 1.75,
            margin: '0 auto 2.75rem',
            maxWidth: 620,
          }}>
            GSA Consulting P23 accompagne les dirigeants dans la structuration de leurs processus,
            l'audit de leur maturité et le développement de leurs équipes — avec rigueur et vision long terme.
          </p>

          <div className="cta-row" style={{ marginBottom: '3rem' }}>
            <a href="#solutions" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Découvrir nos solutions →
            </a>
            <a href="/contact" className="btn-ghost" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Nous contacter
            </a>
          </div>

          {/* Trust bar */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '1rem 2rem',
            fontFamily: "'DM Mono', monospace", fontSize: '0.73rem', color: C.dim,
          }}>
            {[
              'Fondé par Greg Stéphane Angouya',
              "15+ ans d'expérience en multinationales",
              'Basé au Gabon, actif en Afrique francophone',
              'Solutions numériques propriétaires',
            ].map(t => (
              <span key={t}><span style={{ color: C.green, marginRight: '0.4rem' }}>✓</span>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <FadeIn>
      <section style={{ padding: 'clamp(3.5rem,6vw,5.5rem) 1.5rem', background: C.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Notre mission</p>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 1.5rem' }}>
              Guidés par une exigence d'excellence
            </h2>
            <p style={{ fontSize: '1.05rem', color: C.muted, maxWidth: 640, margin: '0 auto', lineHeight: 1.8 }}>
              GSA Consulting P23 est un cabinet de conseil fondé sur une exigence simple : chaque intervention
              doit produire un résultat mesurable, durable et immédiatement applicable.
              Pas de rapports qui dorment. Des capacités qui se développent.
            </p>
          </div>

          <div className="grid-3">
            {PILLARS.map(p => (
              <div key={p.num} className="card">
                <div className="mono" style={{ color: C.border, fontSize: '2.25rem', fontWeight: 700, lineHeight: 1, marginBottom: '1rem' }}>
                  {p.num}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.625rem', color: C.text }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ── SOLUTIONS ── */}
      <FadeIn>
      <section id="solutions" style={{ padding: 'clamp(3.5rem,6vw,5.5rem) 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Nos solutions</p>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 1rem' }}>
              Notre écosystème de solutions
            </h2>
            <p style={{ fontSize: '1rem', color: C.muted, margin: 0 }}>
              Du diagnostic à la formation — une offre intégrée pour des organisations performantes.
            </p>
          </div>

          <div className="grid-3">
            {SOLUTIONS.map(s => (
              <div key={s.title} style={{
                background: C.card,
                border: `1px solid ${s.highlight ? C.orange : C.border}`,
                borderRadius: 14,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                transition: 'transform 0.2s',
              }}>
                {s.highlight && (
                  <div style={{
                    position: 'absolute', top: -1, right: '1.5rem',
                    background: C.orange, color: '#fff',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.65rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '0 0 6px 6px',
                  }}>
                    Phare
                  </div>
                )}

                {/* Badge */}
                <span className="mono" style={{
                  fontSize: '0.68rem', color: C.orange,
                  background: 'rgba(232,113,26,0.1)',
                  border: '1px solid rgba(232,113,26,0.2)',
                  borderRadius: 4, padding: '2px 8px',
                  letterSpacing: '0.06em', display: 'inline-block',
                  alignSelf: 'flex-start',
                }}>
                  {s.badge}
                </span>

                {/* Title */}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.25, margin: 0, color: C.text }}>
                  {s.title.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < s.title.split('\n').length - 1 && <br />}</span>
                  ))}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.75, margin: 0, flex: 1 }}>{s.desc}</p>

                {/* Price / CTA */}
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1rem' }}>
                  {s.prices && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.875rem' }}>
                      {s.prices.map(p => (
                        <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.875rem', color: C.muted }}>{p.label}</span>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: C.text }}>{p.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {s.price && (
                    <>
                      <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: s.payment ? '0.3rem' : '0.875rem' }}>
                        {s.price}
                      </div>
                      {s.payment && (
                        <div className="mono" style={{ fontSize: '0.68rem', color: C.dim, marginBottom: '0.875rem' }}>
                          {s.payment}
                        </div>
                      )}
                    </>
                  )}
                  {s.cta && s.href ? (
                    <a href={s.href} className="btn-primary" style={{ width: '100%', fontSize: '0.9rem', padding: '0.8rem 1.25rem' }}>
                      {s.cta}
                    </a>
                  ) : s.soon ? (
                    <div className="mono" style={{ fontSize: '0.72rem', color: C.dim, textAlign: 'center', padding: '0.6rem 0' }}>
                      Disponible prochainement
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ── EXPERTISE ── */}
      <FadeIn>
      <section id="expertise" style={{ padding: 'clamp(3.5rem,6vw,5.5rem) 1.5rem', background: C.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">Notre expertise</p>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
              L'expertise au service de votre performance
            </h2>
          </div>

          {/* Stats */}
          <div className="grid-4" style={{ marginBottom: '3.5rem' }}>
            {STATS.map(s => (
              <div key={s.value} style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '1.75rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: C.orange, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.625rem' }}>
                  {s.value}
                </div>
                <div className="mono" style={{ fontSize: '0.75rem', color: C.muted, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Text + sectors */}
          <div style={{
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 14, padding: 'clamp(1.5rem,3vw,2.5rem)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem', alignItems: 'center',
          }}>
            <p style={{ fontSize: '0.975rem', color: C.muted, lineHeight: 1.85, margin: 0 }}>
              Greg Stéphane Angouya intervient à l'intersection de la finance, des processus achats-fournisseurs
              et de la transformation organisationnelle. Ses missions couvrent le diagnostic de maturité,
              la structuration des processus internes (offre PROCÉDIA), l'externalisation partielle
              et la formation des équipes opérationnelles.
            </p>
            <div>
              <div className="mono" style={{ fontSize: '0.72rem', color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Secteurs d'intervention
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {SECTORS.map(s => (
                  <span key={s} className="mono" style={{
                    fontSize: '0.78rem', padding: '0.35rem 0.875rem',
                    border: `1px solid ${C.border}`, borderRadius: 20,
                    color: C.muted,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ── TÉMOIGNAGES ── */}
      <FadeIn>
      <section style={{ padding: 'clamp(3.5rem,6vw,5.5rem) 1.5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Témoignages</p>
            <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: 0 }}>
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid-2">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '2rem',
              }}>
                <div style={{ color: C.orange, fontSize: '2.5rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif', opacity: 0.7 }}>
                  "
                </div>
                <p style={{ fontSize: '0.925rem', color: C.text, lineHeight: 1.85, margin: '0 0 1.5rem', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{t.name}</div>
                  <div className="mono" style={{ fontSize: '0.75rem', color: C.muted, marginTop: '0.2rem' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ── CTA FINAL ── */}
      <FadeIn>
      <section style={{ padding: 'clamp(4rem,7vw,6.5rem) 1.5rem', background: C.bgAlt, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(232,113,26,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800,
            letterSpacing: '-0.03em', margin: '0 0 1.25rem', lineHeight: 1.15,
          }}>
            Prêt à transformer<br />
            <span style={{ color: C.orange }}>votre organisation ?</span>
          </h2>
          <p style={{ color: C.muted, fontSize: '1rem', margin: '0 0 2.5rem', lineHeight: 1.75 }}>
            Chaque projet commence par une conversation. Décrivez-nous votre situation —
            nous vous proposerons une approche adaptée.
          </p>
          <div className="cta-row">
            <a href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Parlons de votre projet →
            </a>
            <a href="https://wa.me/+24177133840" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              WhatsApp direct
            </a>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* ── FOOTER ── */}
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
              {/* Citation */}
              <div style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 8, padding: '1rem 1.25rem',
              }}>
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
                    <a href={l.href} style={{ color: C.muted, textDecoration: 'none', fontSize: '0.875rem' }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.muted)}>
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
                    <a href={l.href} style={{ color: C.muted, textDecoration: 'none', fontSize: '0.85rem' }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.muted)}>
                      {l.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
            <span className="mono" style={{ fontSize: '0.72rem', color: C.dim }}>© 2026 GSA Consulting P23 · Tous droits réservés</span>
            <span className="mono" style={{ fontSize: '0.72rem', color: C.dim }}>Performance · Intégrité · Impact</span>
          </div>
        </div>
      </footer>

      <EmailCapture />
    </div>
  )
}
