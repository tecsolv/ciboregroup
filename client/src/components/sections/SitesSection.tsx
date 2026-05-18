/*
 * CIBORE V2 — Sites Stratégiques Section
 * Design: Midnight Cartography — premium destination cards
 * Asymmetric grid with SVG illustrations (no third-party imagery)
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

/* ── Premium Hotel SVG — Site Partenaire (no real brand) ── */
function PremiumHotelSVG() {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ minHeight: '400px' }}>
      <rect width="600" height="400" fill="oklch(0.10 0.012 240)"/>
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.14 0.020 240)"/>
          <stop offset="100%" stopColor="oklch(0.09 0.010 240)"/>
        </linearGradient>
        <linearGradient id="gold-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="glow-hotel" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="400" fill="url(#sky)"/>
      <rect width="600" height="400" fill="url(#glow-hotel)"/>
      {/* Stars */}
      {[[45,30],[120,18],[230,40],[310,12],[420,28],[510,35],[560,15],[80,55],[380,50]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1" fill="white" opacity={0.3 + (i%3)*0.15}/>
      ))}
      {/* Main hotel building */}
      <rect x="160" y="120" width="280" height="240" fill="oklch(0.13 0.015 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.5" strokeOpacity="0.3"/>
      {/* Hotel entrance canopy */}
      <rect x="240" y="310" width="120" height="8" fill="oklch(0.73 0.12 75)" opacity="0.5"/>
      <rect x="248" y="280" width="104" height="30" fill="oklch(0.11 0.012 240)"/>
      {/* Hotel windows — regular grid */}
      {[0,1,2,3,4].map(row =>
        [0,1,2,3,4,5].map(col => (
          <rect
            key={`w-${row}-${col}`}
            x={175 + col * 43}
            y={135 + row * 32}
            width={28} height={18}
            fill={Math.random() > 0.4 ? "oklch(0.73 0.12 75)" : "oklch(0.08 0.008 240)"}
            opacity={Math.random() > 0.4 ? 0.25 : 0.08}
          />
        ))
      )}
      {/* Left wing */}
      <rect x="60" y="180" width="100" height="180" fill="oklch(0.11 0.013 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.3" strokeOpacity="0.2"/>
      {[0,1,2,3].map(row => [0,1].map(col => (
        <rect key={`lw-${row}-${col}`} x={72 + col*42} y={195 + row*38} width={26} height={16} fill="oklch(0.73 0.12 75)" opacity={0.12 + col*0.05}/>
      )))}
      {/* Right wing */}
      <rect x="440" y="180" width="100" height="180" fill="oklch(0.11 0.013 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.3" strokeOpacity="0.2"/>
      {[0,1,2,3].map(row => [0,1].map(col => (
        <rect key={`rw-${row}-${col}`} x={452 + col*42} y={195 + row*38} width={26} height={16} fill="oklch(0.73 0.12 75)" opacity={0.12 + col*0.05}/>
      )))}
      {/* Ground / road */}
      <rect x="0" y="358" width="600" height="42" fill="oklch(0.08 0.008 240)"/>
      <line x1="0" y1="358" x2="600" y2="358" stroke="oklch(0.73 0.12 75)" strokeWidth="0.5" strokeOpacity="0.3"/>
      {/* Driveway lines */}
      {[80,200,300,400,520].map((x,i) => (
        <line key={i} x1={x} y1="365" x2={x+30} y2="365" stroke="white" strokeWidth="1" strokeOpacity="0.08"/>
      ))}
      {/* Palm trees */}
      <line x1="100" y1="358" x2="100" y2="310" stroke="oklch(0.40 0.05 140)" strokeWidth="3" strokeOpacity="0.6"/>
      <ellipse cx="100" cy="305" rx="18" ry="12" fill="oklch(0.35 0.08 140)" opacity="0.5"/>
      <line x1="500" y1="358" x2="500" y2="310" stroke="oklch(0.40 0.05 140)" strokeWidth="3" strokeOpacity="0.6"/>
      <ellipse cx="500" cy="305" rx="18" ry="12" fill="oklch(0.35 0.08 140)" opacity="0.5"/>
      {/* Bottom overlay gradient */}
      <rect x="0" y="240" width="600" height="160" fill="url(#gold-fade)" opacity="0.15"/>
      <rect x="0" y="300" width="600" height="100" fill="oklch(0.07 0.008 240 / 85%)"/>
    </svg>
  );
}

/* ── CIBORE Charging Station SVG — with official CIBORE branding ── */
function CiboreStationSVG() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ minHeight: '400px' }}>
      <rect width="300" height="400" fill="oklch(0.09 0.010 240)"/>
      <defs>
        <linearGradient id="station-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.12 0.018 160)"/>
          <stop offset="100%" stopColor="oklch(0.08 0.010 240)"/>
        </linearGradient>
        <radialGradient id="station-glow" cx="50%" cy="45%" r="45%">
          <stop offset="0%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="oklch(0.73 0.12 75)" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="charger-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.18 0.020 160)"/>
          <stop offset="50%" stopColor="oklch(0.22 0.025 160)"/>
          <stop offset="100%" stopColor="oklch(0.15 0.018 160)"/>
        </linearGradient>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.12 0.015 220)"/>
          <stop offset="100%" stopColor="oklch(0.08 0.010 240)"/>
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#station-bg)"/>
      <rect width="300" height="400" fill="url(#station-glow)"/>
      {/* Floor */}
      <ellipse cx="150" cy="380" rx="100" ry="12" fill="oklch(0.73 0.12 75)" opacity="0.06"/>
      {/* Charging station body */}
      <rect x="95" y="80" width="110" height="280" rx="8" fill="url(#charger-body)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.8" strokeOpacity="0.4"/>
      {/* Top accent bar — CIBORE green */}
      <rect x="95" y="80" width="110" height="6" rx="3" fill="oklch(0.45 0.12 160)" opacity="0.9"/>
      {/* Screen area */}
      <rect x="108" y="100" width="84" height="95" rx="4" fill="url(#screen-grad)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.5" strokeOpacity="0.3"/>
      {/* CIBORE text on screen */}
      <text x="150" y="132" textAnchor="middle" fill="oklch(0.73 0.12 75)" fontSize="11" fontFamily="monospace" letterSpacing="3" fontWeight="600">CIBORE</text>
      {/* Lightning bolt icon on screen */}
      <path d="M145 142 L153 142 L148 155 L156 155 L144 172 L149 159 L141 159 Z" fill="oklch(0.73 0.12 75)" opacity="0.8"/>
      {/* Status bar on screen */}
      <rect x="115" y="178" width="70" height="4" rx="2" fill="oklch(0.30 0.05 240)"/>
      <rect x="115" y="178" width="48" height="4" rx="2" fill="oklch(0.45 0.12 160)" opacity="0.8"/>
      <text x="150" y="193" textAnchor="middle" fill="oklch(0.50 0.008 240)" fontSize="7" fontFamily="monospace">DISPONIBLE</text>
      {/* Connector port */}
      <rect x="118" y="210" width="64" height="44" rx="6" fill="oklch(0.12 0.012 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.8" strokeOpacity="0.5"/>
      <circle cx="150" cy="232" r="12" fill="oklch(0.15 0.015 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="1" strokeOpacity="0.6"/>
      <circle cx="150" cy="232" r="5" fill="oklch(0.73 0.12 75)" opacity="0.7"/>
      {/* Cable */}
      <path d="M150 290 Q150 320 130 340 Q115 355 115 370" stroke="oklch(0.25 0.025 240)" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M150 290 Q150 320 130 340 Q115 355 115 370" stroke="oklch(0.73 0.12 75)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" fill="none"/>
      {/* CIBORE branding plate at bottom of unit */}
      <rect x="108" y="265" width="84" height="28" rx="2" fill="oklch(0.12 0.012 240)" stroke="oklch(0.73 0.12 75)" strokeWidth="0.4" strokeOpacity="0.3"/>
      <text x="150" y="277" textAnchor="middle" fill="oklch(0.73 0.12 75)" fontSize="7" fontFamily="monospace" letterSpacing="2.5" opacity="0.9">CIBORE</text>
      <text x="150" y="288" textAnchor="middle" fill="oklch(0.45 0.008 240)" fontSize="5.5" fontFamily="monospace" letterSpacing="1">POWERING TOMORROW</text>
      {/* Ground glow pulse */}
      <ellipse cx="150" cy="378" rx="55" ry="6" fill="oklch(0.45 0.12 160)" opacity="0.12"/>
      <ellipse cx="150" cy="378" rx="80" ry="8" fill="oklch(0.73 0.12 75)" opacity="0.04"/>
      {/* Ambient light beams */}
      <line x1="150" y1="80" x2="80" y2="20" stroke="oklch(0.73 0.12 75)" strokeWidth="0.5" strokeOpacity="0.08"/>
      <line x1="150" y1="80" x2="220" y2="20" stroke="oklch(0.73 0.12 75)" strokeWidth="0.5" strokeOpacity="0.08"/>
      {/* Small stars */}
      {[[40,30],[260,25],[30,70],[270,60],[50,120],[255,100]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1" fill="white" opacity={0.15+i*0.05}/>
      ))}
    </svg>
  );
}

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
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">02</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: 'oklch(0.97 0.003 240)' }}
            >
              {lang === 'fr' ? (
                <>Sites<br /><em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>stratégiques.</em></>
              ) : (
                <>Strategic<br /><em style={{ color: 'oklch(0.73 0.12 75)', fontStyle: 'italic' }}>sites.</em></>
              )}
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 300, color: 'oklch(0.60 0.008 240)', lineHeight: 1.75, maxWidth: '420px' }}>
              {t(
                'CIBORE sélectionne des sites d\'exception pour déployer une infrastructure de recharge premium. Chaque site partenaire devient une destination future-ready.',
                'CIBORE selects exceptional sites to deploy premium charging infrastructure. Each partner site becomes a future-ready destination.'
              )}
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large illustration card — Premium hotel, generic, no real brand */}
          <div
            className={`lg:col-span-2 relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ minHeight: '400px', transitionDelay: '150ms' }}
          >
            <PremiumHotelSVG />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, oklch(0.07 0.008 240 / 90%) 0%, oklch(0.07 0.008 240 / 20%) 55%, transparent 100%)' }}
            />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="section-label mb-3 block">
                {t('Site partenaire premium', 'Premium partner site')}
              </span>
              <p
                className="font-display"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 600, color: 'oklch(0.97 0.003 240)', lineHeight: 1.2 }}
              >
                {t('Des destinations préparées pour l\'avenir.', 'Destinations prepared for the future.')}
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: 'oklch(0.55 0.008 240)', marginTop: '0.4rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                ABIDJAN · CÔTE D'IVOIRE
              </p>
            </div>
          </div>

          {/* CIBORE charging station illustration */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ minHeight: '400px', transitionDelay: '250ms' }}
          >
            <CiboreStationSVG />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, oklch(0.07 0.008 240 / 85%) 0%, transparent 55%)' }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="section-label mb-2 block">
                {t('Infrastructure CIBORE', 'CIBORE Infrastructure')}
              </span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', fontWeight: 300, color: 'oklch(0.75 0.005 240)', lineHeight: 1.5 }}>
                {t('Abidjan · Le Plateau', 'Abidjan · Le Plateau')}
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
                className={`card-dark p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(i + 3) * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'oklch(0.62 0.19 220 / 10%)', border: '1px solid oklch(0.62 0.19 220 / 20%)' }}
                  >
                    <Icon size={18} style={{ color: 'oklch(0.62 0.19 220)' }} />
                  </div>
                  <div>
                    <p className="font-ui mb-1" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'oklch(0.90 0.005 240)', letterSpacing: '0.05em' }}>
                      {lang === 'fr' ? site.fr : site.en}
                    </p>
                    <p style={{ fontSize: '0.8125rem', fontWeight: 300, color: 'oklch(0.50 0.008 240)', lineHeight: 1.5 }}>
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
