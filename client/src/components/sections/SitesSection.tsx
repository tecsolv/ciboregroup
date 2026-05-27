/*
 * CIBORE V2 — Sites Stratégiques Section
 * Design: Midnight Cartography — premium destination cards
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { Building2, Hotel, ShoppingBag, Briefcase, MapPin, Zap } from 'lucide-react';

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

        {/* Single full-width premium image — no text overlay */}
        <div
          className={`relative overflow-hidden w-full transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <picture>
            <source
              type="image/webp"
              srcSet="/cibore-sites-premium-640.webp 640w, /cibore-sites-premium-960.webp 960w, /cibore-sites-premium.webp 1400w"
              sizes="(max-width: 640px) 640px, (max-width: 960px) 960px, 1400px"
            />
            <img
              src="/cibore-sites-premium.png"
              alt="CIBORE — Infrastructure de recharge premium"
              className="w-full h-auto object-cover"
              width={1400}
              height={623}
              loading="lazy"
              decoding="async"
              style={{
                display: 'block',
                maxHeight: '520px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </picture>
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
                style={{ transitionDelay: `${(i + 2) * 80}ms` }}
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
                        color: 'oklch(0.65 0.008 240)',
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
