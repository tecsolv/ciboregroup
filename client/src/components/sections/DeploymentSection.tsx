/*
 * CIBORE V2 — Notre Moment — Phase de Déploiement
 * Design: Midnight Cartography — elegant honesty, strategic maturity
 * Confident, transparent, visionary, credible tone
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';

const phases = [
  {
    icon: CheckCircle2,
    status: 'done',
    fr: 'Fondation stratégique',
    en: 'Strategic foundation',
    desc_fr: 'Définition du modèle d\'infrastructure, positionnement de marque et architecture du réseau.',
    desc_en: 'Infrastructure model definition, brand positioning and network architecture.',
  },
  {
    icon: Clock,
    status: 'active',
    fr: 'Sélection des sites partenaires',
    en: 'Partner site selection',
    desc_fr: 'Identification et qualification des premiers sites stratégiques en Côte d\'Ivoire.',
    desc_en: 'Identification and qualification of the first strategic sites in Côte d\'Ivoire.',
  },
  {
    icon: MapPin,
    status: 'upcoming',
    fr: 'Déploiement des premiers sites',
    en: 'First site deployment',
    desc_fr: 'Installation de l\'infrastructure CIBORE sur les sites partenaires sélectionnés.',
    desc_en: 'Installation of CIBORE infrastructure on selected partner sites.',
  },
];

export default function DeploymentSection() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="deploiement"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: 'oklch(0.07 0.008 240)' }}
    >
      {/* Subtle top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, oklch(0.73 0.12 75 / 30%), transparent)' }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="section-label">06</span>
            </div>

            <h2
              className="font-display mb-8"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'oklch(0.97 0.003 240)',
              }}
            >
              {lang === 'fr' ? (
                <>
                  Notre moment.<br />
                  <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>Phase de déploiement.</em>
                </>
              ) : (
                <>
                  Our moment.<br />
                  <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>Deployment phase.</em>
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
                {lang === 'fr'
                  ? 'CIBORE entre dans sa phase de déploiement stratégique. Nos premiers sites partenaires sont actuellement en cours de sélection en Côte d\'Ivoire.'
                  : 'CIBORE is entering its strategic deployment phase. Our first partner sites are currently being selected in Côte d\'Ivoire.'}
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: 'oklch(0.80 0.005 240)',
                  lineHeight: 1.5,
                }}
              >
                {lang === 'fr'
                  ? '"Notre ambition n\'est pas de promettre le futur. Notre ambition est de le construire méthodiquement."'
                  : '"Our ambition is not to promise the future. Our ambition is to build it methodically."'}
              </p>
              <p>
                {lang === 'fr'
                  ? 'Chaque site sélectionné aujourd\'hui prépare la mobilité africaine de demain.'
                  : 'Each site selected today prepares African mobility for tomorrow.'}
              </p>
            </div>

            {/* Transparency note */}
            <div
              className="mt-10 p-6"
              style={{
                background: 'oklch(0.62 0.19 220 / 5%)',
                border: '1px solid oklch(0.62 0.19 220 / 15%)',
              }}
            >
              <p
                className="section-label mb-3"
              >
                {lang === 'fr' ? 'Transparence stratégique' : 'Strategic transparency'}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'oklch(0.65 0.008 240)',
                  lineHeight: 1.7,
                }}
              >
                {lang === 'fr'
                  ? 'CIBORE est actuellement en phase de préparation d\'infrastructure. Les premiers sites opérationnels seront annoncés prochainement. Nous construisons pour durer.'
                  : 'CIBORE is currently in the infrastructure preparation phase. The first operational sites will be announced soon. We build to last.'}
              </p>
            </div>
          </div>

          {/* Right: Phase timeline */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-6 bottom-6 w-px"
                style={{ background: 'oklch(1 0 0 / 8%)' }}
              />

              <div className="space-y-8">
                {phases.map((phase, i) => {
                  const Icon = phase.icon;
                  const isActive = phase.status === 'active';
                  const isDone = phase.status === 'done';
                  const color = isDone
                    ? 'oklch(0.73 0.12 75)'
                    : isActive
                    ? 'oklch(0.62 0.19 220)'
                    : 'oklch(0.40 0.008 240)';

                  return (
                    <div
                      key={phase.fr}
                      className={`relative flex gap-6 transition-all duration-700 ${
                        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: `${(i + 2) * 150}ms` }}
                    >
                      {/* Icon */}
                      <div
                        className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center"
                        style={{
                          background: `${color.replace(')', ' / 10%)')}`,
                          border: `1px solid ${color.replace(')', ' / 40%)')}`,
                        }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className="font-ui"
                            style={{
                              fontSize: '0.9375rem',
                              fontWeight: 600,
                              color: isDone || isActive ? 'oklch(0.95 0.003 240)' : 'oklch(0.45 0.008 240)',
                            }}
                          >
                            {lang === 'fr' ? phase.fr : phase.en}
                          </h3>
                          {isActive && (
                            <span
                              className="animate-pulse-blue"
                              style={{
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'oklch(0.62 0.19 220)',
                              }}
                            />
                          )}
                        </div>
                        <p
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '0.875rem',
                            fontWeight: 300,
                            color: isDone || isActive ? 'oklch(0.55 0.008 240)' : 'oklch(0.35 0.008 240)',
                            lineHeight: 1.6,
                          }}
                        >
                          {lang === 'fr' ? phase.desc_fr : phase.desc_en}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
