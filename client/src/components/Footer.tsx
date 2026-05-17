/*
 * CIBORE V2 — Footer Component
 * Design: Midnight Cartography — minimal, brand-anchored
 * Narrative signature, links, legal
 */

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { fr: 'Vision', en: 'Vision', href: '#vision' },
    { fr: 'Sites stratégiques', en: 'Strategic sites', href: '#sites' },
    { fr: 'Pourquoi CIBORE', en: 'Why CIBORE', href: '#pourquoi' },
    { fr: 'Transformation', en: 'Transformation', href: '#transformation' },
    { fr: 'Partenaires', en: 'Partners', href: '#partenaires' },
    { fr: 'Contact', en: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative"
      style={{ background: 'oklch(0.04 0.005 240)', borderTop: '1px solid oklch(1 0 0 / 6%)' }}
    >
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            {/* Logo */}
            <img
              src="/manus-storage/Gemini_Generated_Image_jnajdtjnajdtjnajcopy_4f4ec83b.png"
              alt="CIBORE Logo"
              className="h-12 w-auto mb-6"
            />

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 300,
                color: 'oklch(0.45 0.008 240)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {t(
                'Premier réseau structuré de recharge pour véhicules électriques en Côte d\'Ivoire.',
                'First structured EV charging network in Côte d\'Ivoire.'
              )}
            </p>

            {/* Narrative signature */}
            <div
              className="p-4"
              style={{
                borderLeft: '1px solid oklch(0.73 0.12 75 / 30%)',
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: '0.8125rem',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'oklch(0.73 0.12 75 / 70%)',
                  lineHeight: 1.6,
                }}
              >
                "The future of African mobility<br />
                is not a question.<br />
                CIBORE is the answer<br />
                already being built."
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="section-label mb-6"
            >
              {t('Navigation', 'Navigation')}
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="animated-underline transition-colors duration-200"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'oklch(0.50 0.008 240)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.80 0.005 240)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.50 0.008 240)')}
                  >
                    {lang === 'fr' ? link.fr : link.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <p
              className="section-label mb-6"
            >
              {t('Contact', 'Contact')}
            </p>
            <div className="space-y-3 mb-8">
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'oklch(0.50 0.008 240)',
                }}
              >
                {t('Côte d\'Ivoire — Afrique de l\'Ouest', 'Côte d\'Ivoire — West Africa')}
              </p>
              <a
                href="mailto:contact@cibore.ci"
                className="block animated-underline transition-colors duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: 'oklch(0.62 0.19 220)',
                }}
              >
                contact@cibore.ci
              </a>
            </div>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}
            >
              {t('Devenir partenaire', 'Become a partner')}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid oklch(1 0 0 / 5%)' }}
      >
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                color: 'oklch(0.35 0.008 240)',
                letterSpacing: '0.05em',
              }}
            >
              © 2026 CIBORE. {t('Tous droits réservés.', 'All rights reserved.')}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                color: 'oklch(0.30 0.008 240)',
                letterSpacing: '0.05em',
              }}
            >
              {t('CIBORE Group Ltd — Registered in England & Wales, UK', 'CIBORE Group Ltd — Registered in England & Wales, UK')}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                color: 'oklch(0.30 0.008 240)',
                letterSpacing: '0.05em',
              }}
            >
              {t('Fondé par José ETTIEN, entrepreneur ivoirien d\'ancrage international.', 'Founded by José ETTIEN, Ivorian entrepreneur with international anchoring.')}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                color: 'oklch(0.30 0.008 240)',
                letterSpacing: '0.05em',
              }}
            >
              {t('L\'infrastructure de la mobilité africaine.', 'The infrastructure of African mobility.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
