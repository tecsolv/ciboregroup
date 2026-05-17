/*
 * CIBORE V2 — Sites Stratégiques Section
 * Design: Midnight Cartography — premium destination cards
 * Asymmetric grid with image and text cards
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { Building2, Hotel, ShoppingBag, Briefcase, MapPin, Zap } from 'lucide-react';

const SITES_IMAGE = '/generic-premium-site.svg';
const INFRA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663658365107/3kG2Z6cjcUyd474D4MMg23/cibore-infrastructure-KPJyjLshwFFxrmzvtjRQwb.webp';

const siteTypes = [
  {
    icon: Hotel,
    fr: 'Hôtels & Resorts',
    en: 'Hotels & Resorts',
    desc_fr: 'Destinations premium préparées pour la clientèle internationale.',
    desc_en: 'Premium destinations prepared for international clientele.',
  },
  {
    icon: Building2,
    fr: 'Résidences de standing',
    en: 'Premium Residences',
    desc_fr: 'Immobilier haut de gamme orienté vers l\'avenir.',
    desc_en: 'High-end real estate oriented toward the future.',
  },
  {
    icon: ShoppingBag,
    fr: 'Centres commerciaux',
    en: 'Shopping Centers',
    desc_fr: 'Espaces de vie modernes avec infrastructure de mobilité.',
    desc_en: 'Modern living spaces with mobility infrastructure.',
  },
  {
    icon: Briefcase,
    fr: 'Quartiers d\'affaires',
    en: 'Business Districts',
    desc_fr: 'Hubs économiques positionnés pour l\'ère électrique.',
    desc_en: 'Economic hubs positioned for the electric era.',
  },
  {
    icon: MapPin,
    fr: 'Corridors touristiques',
    en: 'Tourism Corridors',
    desc_fr: 'Axes stratégiques de la mobilité premium africaine.',
    desc_en: 'Strategic axes of African premium mobility.',
  },
  {
    icon: Zap,
    fr: 'Hubs de mobilité',
    en: 'Mobility Hubs',
    desc_fr: 'Les carrefours de la nouvelle mobilité africaine.',
    desc_en: 'The crossroads of new African mobility.',
  },
];

export default function SitesSection() {
  const { lang, t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="sites"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: 'oklch(0.09 0.010 240)' }}
    >
      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">02</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'oklch(0.97 0.003 240)',
              }}
            >
              {lang === 'fr' ? (
                <>
                  Sites<br />
                  <em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>stratégiques.</em>
                </>
              ) : (
                <>
                  Strategic<br />
                  <em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>sites.</em>
                </>
              )}
            </h2>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: 'oklch(0.60 0.008 240)',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              {t(
                'CIBORE sélectionne des sites d\'exception pour déployer une infrastructure de recharge premium. Chaque site partenaire devient une destination future-ready.',
                'CIBORE selects exceptional sites to deploy premium charging infrastructure. Each partner site becomes a future-ready destination.'
              )}
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large image card */}
          <div
            className={`lg:col-span-2 relative overflow-hidden transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ minHeight: '400px', transitionDelay: '150ms' }}
          >
            <img
              src={SITES_IMAGE}
              alt="CIBORE Partner Site"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, oklch(0.07 0.008 240 / 90%) 0%, oklch(0.07 0.008 240 / 40%) 50%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="section-label mb-3 block">
                {t('Site partenaire premium', 'Premium partner site')}
              </span>
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 600,
                  color: 'oklch(0.97 0.003 240)',
                  lineHeight: 1.2,
                }}
              >
                {t(
                  'Des destinations préparées pour l\'avenir.',
                  'Destinations prepared for the future.'
                )}
              </p>
            </div>
          </div>

          {/* Infrastructure image */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ minHeight: '400px', transitionDelay: '250ms' }}
          >
            <img
              src={INFRA_IMAGE}
              alt="CIBORE Infrastructure"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, oklch(0.07 0.008 240 / 85%) 0%, oklch(0.07 0.008 240 / 20%) 60%, transparent 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="section-label mb-2 block">
                {t('Infrastructure CIBORE', 'CIBORE Infrastructure')}
              </span>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'oklch(0.75 0.005 240)',
                  lineHeight: 1.5,
                }}
              >
                {t('Abidjan Plateau', 'Abidjan Plateau')}
              </p>
            </div>
          </div>
        </div>

        {/* Site types grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {siteTypes.map((site, i) => {
            const Icon = site.icon;
            return (
              <div
                key={site.fr}
                className={`card-dark p-6 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(i + 3) * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{
                      background: 'oklch(0.62 0.19 220 / 10%)',
                      border: '1px solid oklch(0.62 0.19 220 / 20%)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'oklch(0.62 0.19 220)' }} />
                  </div>
                  <div>
                    <p
                      className="font-ui mb-1"
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'oklch(0.90 0.005 240)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {lang === 'fr' ? site.fr : site.en}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 300,
                        color: 'oklch(0.50 0.008 240)',
                        lineHeight: 1.5,
                      }}
                    >
                      {lang === 'fr' ? site.desc_fr : site.desc_en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
