/*
 * CIBORE V2 — Vision Section: "Le Futur a Déjà Commencé"
 * Design: Midnight Cartography — emotional storytelling, stat monuments
 * Left-anchored text, large numerals as architectural elements
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const stats = [
  {
    number: '2026',
    fr: 'Année de déploiement',
    en: 'Deployment year',
    desc_fr: 'Les premiers sites partenaires CIBORE entrent en phase de sélection active.',
    desc_en: 'The first CIBORE partner sites enter active selection phase.',
  },
  {
    number: '1er',
    fr: 'Réseau structuré',
    en: 'Structured network',
    desc_fr: 'Premier réseau premium de recharge EV en Côte d\'Ivoire.',
    desc_en: 'First premium EV charging network in Côte d\'Ivoire.',
  },
  {
    number: '∞',
    fr: 'Potentiel continental',
    en: 'Continental potential',
    desc_fr: 'Une infrastructure pensée pour l\'Afrique, construite pour durer.',
    desc_en: 'Infrastructure designed for Africa, built to last.',
  },
];

export default function VisionSection() {
  const { lang, t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="vision"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: 'oklch(0.07 0.008 240)' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(oklch(0.62 0.19 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.19 220) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <div>
            <div
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line" />
                <span className="section-label">01</span>
              </div>

              <h2
                className="font-display mb-6"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: 'oklch(0.97 0.003 240)',
                }}
              >
                {lang === 'fr' ? (
                  <>
                    Le futur a<br />
                    <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>déjà commencé.</em>
                  </>
                ) : (
                  <>
                    The future has<br />
                    <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>already begun.</em>
                  </>
                )}
              </h2>

              <div
                className="space-y-5"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'oklch(0.65 0.008 240)',
                  lineHeight: 1.75,
                }}
              >
                <p>
                  {t(
                    'Les premiers véhicules électriques arrivent en Côte d\'Ivoire. Les premières décisions d\'infrastructure se prennent aujourd\'hui.',
                    'The first electric vehicles are arriving in Côte d\'Ivoire. The first infrastructure decisions are being made today.'
                  )}
                </p>
                <p>
                  {t(
                    'Dans chaque grande transformation technologique, il y a un moment précis où les leaders se positionnent avant les autres. Ce moment, c\'est maintenant.',
                    'In every major technological transformation, there is a precise moment when leaders position themselves before others. That moment is now.'
                  )}
                </p>
                <p>
                  {t(
                    'Les premiers sites premium qui intègrent l\'infrastructure CIBORE aujourd\'hui définiront les standards de la mobilité africaine de demain.',
                    'The first premium sites that integrate CIBORE infrastructure today will define the standards of African mobility tomorrow.'
                  )}
                </p>
              </div>

              {/* Gold quote */}
              <div
                className="mt-10 p-6"
                style={{
                  borderLeft: '2px solid oklch(0.73 0.12 75 / 50%)',
                  background: 'oklch(0.73 0.12 75 / 5%)',
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    color: 'oklch(0.73 0.12 75)',
                    lineHeight: 1.5,
                  }}
                >
                  {t(
                    '"Les leaders africains de la mobilité de demain se positionnent aujourd\'hui."',
                    '"Africa\'s mobility leaders of tomorrow are positioning themselves today."'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats as architectural monuments */}
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <div
                key={stat.number}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div
                  className="p-6 card-dark"
                  style={{ borderLeft: '2px solid oklch(0.62 0.19 220 / 30%)' }}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className="font-display"
                      style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 700,
                        color: 'oklch(0.62 0.19 220)',
                        lineHeight: 1,
                        minWidth: '80px',
                      }}
                    >
                      {stat.number}
                    </span>
                    <div>
                      <p
                        className="font-ui mb-2"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'oklch(0.97 0.003 240)',
                        }}
                      >
                        {lang === 'fr' ? stat.fr : stat.en}
                      </p>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 300,
                          color: 'oklch(0.55 0.008 240)',
                          lineHeight: 1.6,
                        }}
                      >
                        {lang === 'fr' ? stat.desc_fr : stat.desc_en}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blue line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, oklch(0.62 0.19 220 / 30%), transparent)' }}
      />
    </section>
  );
}
