/*
 * CIBORE V2 — Stats Bar Section
 * Design: Midnight Cartography — architectural stat monuments
 * Full-width dark bar with key metrics
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import React from 'react';

const stats = [
  { value: '#1', fr: 'Réseau EV structuré', en: 'Structured EV network', sub_fr: 'En Côte d\'Ivoire', sub_en: 'In Côte d\'Ivoire', color: 'oklch(0.62 0.19 220)' },
  { value: '2026', fr: 'Déploiement', en: 'Deployment', sub_fr: 'Phase active', sub_en: 'Active phase', color: 'oklch(0.73 0.12 75)' },
  { value: '54', fr: 'Marchés', en: 'Markets', sub_fr: 'Potentiel continental', sub_en: 'Continental potential', color: 'oklch(0.62 0.19 220)' },
  { value: '100%', fr: 'Premium', en: 'Premium', sub_fr: 'Positionnement', sub_en: 'Positioning', color: 'oklch(0.73 0.12 75)' },
];

export default function StatsBarSection() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className="relative py-16"
      style={{
        background: 'oklch(0.05 0.006 240)',
        borderTop: '1px solid oklch(1 0 0 / 6%)',
        borderBottom: '1px solid oklch(1 0 0 / 6%)',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'oklch(1 0 0 / 5%)' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`px-8 py-10 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                background: 'oklch(0.05 0.006 240)',
              }}
            >
              <p
                className="font-display mb-2"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                className="font-ui mb-1"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'oklch(0.85 0.005 240)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {lang === 'fr' ? stat.fr : stat.en}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'oklch(0.45 0.008 240)',
                  letterSpacing: '0.05em',
                }}
              >
                {lang === 'fr' ? stat.sub_fr : stat.sub_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
