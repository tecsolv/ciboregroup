/*
 * CIBORE V2 — La Transformation de la Mobilité Africaine
 * Design: Midnight Cartography — historic and ambitious, cinematic city image
 * Full-bleed image with overlaid text, visionary narrative
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

const CITY_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663658365107/3kG2Z6cjcUyd474D4MMg23/cibore-city-KAcgN9mENjtRTDPfZEx9xn.webp';
const VISION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663658365107/3kG2Z6cjcUyd474D4MMg23/cibore-vision-5xdiKuMzh44DJZDP8uLBpF.webp';

const pillars = [
  {
    fr: 'Villes intelligentes',
    en: 'Smart cities',
    desc_fr: 'Des métropoles africaines connectées, durables et orientées vers l\'avenir.',
    desc_en: 'Connected, sustainable, future-oriented African metropolises.',
  },
  {
    fr: 'Transition énergétique',
    en: 'Energy transition',
    desc_fr: 'L\'électrification de la mobilité comme levier de développement continental.',
    desc_en: 'The electrification of mobility as a lever for continental development.',
  },
  {
    fr: 'Transport du futur',
    en: 'Future transportation',
    desc_fr: 'Des réseaux de mobilité premium qui redéfinissent le déplacement en Afrique.',
    desc_en: 'Premium mobility networks that redefine transportation in Africa.',
  },
  {
    fr: 'Évolution urbaine africaine',
    en: 'African urban evolution',
    desc_fr: 'Une nouvelle génération de villes africaines, modernes et ambitieuses.',
    desc_en: 'A new generation of African cities, modern and ambitious.',
  },
];

export default function TransformationSection() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="transformation"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative section-cinematic"
      style={{ background: 'oklch(0.07 0.008 240)' }}
    >
      {/* City image hero */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={CITY_IMAGE}
          alt="African City of the Future"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, oklch(0.07 0.008 240 / 30%) 0%, oklch(0.07 0.008 240 / 60%) 60%, oklch(0.07 0.008 240) 100%)',
          }}
        />
        {/* Centered overlay text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <p
              className={`font-display transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'oklch(0.97 0.003 240)',
                lineHeight: 1.2,
                textShadow: '0 2px 40px oklch(0 0 0 / 60%)',
              }}
            >
              {lang === 'fr'
                ? '"L\'Afrique n\'imite pas le futur. Elle le construit."'
                : '"Africa doesn\'t imitate the future. It builds it."'}
            </p>
          </div>
        </div>
      </div>

      {/* Content below image */}
      <div className="py-24 md:py-32">
        <div className="container">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="section-label">04</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                    La transformation de<br />
                    <em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>la mobilité africaine.</em>
                  </>
                ) : (
                  <>
                    The transformation of<br />
                    <em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>African mobility.</em>
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
                }}
              >
                {lang === 'fr'
                  ? 'Ce qui se passe aujourd\'hui en Côte d\'Ivoire est le début d\'une transformation continentale. CIBORE est au cœur de ce moment historique.'
                  : 'What is happening today in Côte d\'Ivoire is the beginning of a continental transformation. CIBORE is at the heart of this historic moment.'}
              </p>
            </div>
          </div>

          {/* Two-column layout: pillars + vision image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.fr}
                  className={`transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div
                    className="p-6 h-full"
                    style={{
                      border: '1px solid oklch(1 0 0 / 6%)',
                      background: 'oklch(0.09 0.010 240)',
                    }}
                  >
                    <div
                      className="w-8 h-0.5 mb-4"
                      style={{ background: i % 2 === 0 ? 'oklch(0.62 0.19 220)' : 'oklch(0.73 0.12 75)' }}
                    />
                    <h3
                      className="font-ui mb-3"
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'oklch(0.90 0.005 240)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {lang === 'fr' ? pillar.fr : pillar.en}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.8125rem',
                        fontWeight: 300,
                        color: 'oklch(0.50 0.008 240)',
                        lineHeight: 1.6,
                      }}
                    >
                      {lang === 'fr' ? pillar.desc_fr : pillar.desc_en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision map image */}
            <div
              className={`relative overflow-hidden transition-all duration-1000 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <img
                src={VISION_IMAGE}
                alt="West Africa Energy Vision"
                className="w-full object-cover"
                style={{ aspectRatio: '16/10' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, oklch(0.07 0.008 240 / 80%) 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p
                  className="section-label mb-2"
                >
                  {lang === 'fr' ? 'Vision continentale' : 'Continental vision'}
                </p>
                <p
                  className="font-display"
                  style={{
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: 'oklch(0.97 0.003 240)',
                  }}
                >
                  {lang === 'fr' ? 'Côte d\'Ivoire — Afrique de l\'Ouest' : 'Côte d\'Ivoire — West Africa'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
