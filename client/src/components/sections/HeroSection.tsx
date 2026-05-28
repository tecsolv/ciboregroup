/*
 * CIBORE V2 — Hero Section
 * Design: Midnight Cartography — Cinematic full-screen hero
 * Full-bleed background image with left-anchored text, large display typography
 * Narrative signature in English (always), headline in FR/EN
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663658365107/3kG2Z6cjcUyd474D4MMg23/cibore-hero-dW9PYEnvHNfNP7aPBUTr4u.webp';

export default function HeroSection() {
  const { lang, t } = useLanguage();

  const scrollToNext = () => {
    const el = document.querySelector('#vision');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-end section-cinematic"
      style={{ background: 'oklch(0.07 0.008 240)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="CIBORE EV Infrastructure"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.04)', transition: 'transform 10s cubic-bezier(0.23, 1, 0.32, 1)' }}
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.transform = 'scale(1)';
          }}
        />
        {/* Gradient overlay — desktop: left-heavy, mobile: bottom-heavy */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: 'linear-gradient(to right, oklch(0.07 0.008 240 / 97%) 0%, oklch(0.07 0.008 240 / 80%) 45%, oklch(0.07 0.008 240 / 25%) 75%, oklch(0.07 0.008 240 / 10%) 100%)',
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: 'linear-gradient(to bottom, oklch(0.07 0.008 240 / 50%) 0%, oklch(0.07 0.008 240 / 85%) 55%, oklch(0.07 0.008 240) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to bottom, transparent, oklch(0.07 0.008 240))',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container w-full pb-28 md:pb-36 pt-28 md:pt-36">
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="gold-line" />
            <span className="section-label">
              {t('Côte d\'Ivoire · Afrique', 'Côte d\'Ivoire · Africa')}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display animate-fade-up delay-100"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'oklch(0.97 0.003 240)',
              marginBottom: '1.5rem',
            }}
          >
            {lang === 'fr' ? (
              <>
                L'infrastructure de la<br />
                <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>mobilité africaine</em><br />
                est déjà en construction.
              </>
            ) : (
              <>
                The infrastructure of<br />
                <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>African mobility</em><br />
                is already being built.
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)',
              color: 'oklch(0.70 0.008 240)',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '2.5rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
            }}
          >
            {t(
              'CIBORE développe le premier réseau structuré de recharge pour véhicules électriques en Côte d\'Ivoire.',
              'CIBORE is building the first structured EV charging network in Côte d\'Ivoire.'
            )}
          </p>

          {/* CTAs — Dual audience */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              {t('Devenir site partenaire', 'Become a partner site')}
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#partenaires');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-ghost"
            >
              {t('Dossier investisseur', 'Investor dossier')}
            </button>
          </div>

          {/* Narrative signature */}
          <div
            className="mt-16 animate-fade-up delay-500"
            style={{
              borderLeft: '1px solid oklch(0.73 0.12 75 / 40%)',
              paddingLeft: '1.25rem',
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'oklch(0.73 0.12 75)',
                lineHeight: 1.6,
              }}
            >
              "The future of African mobility is not a question.<br />
              CIBORE is the answer already being built."
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 animate-fade-up delay-700"
        aria-label="Scroll down"
      >
        <span
          className="font-ui text-xs tracking-widest uppercase"
          style={{ color: 'oklch(0.60 0.005 240)', fontSize: '0.625rem', letterSpacing: '0.2em' }}
        >
          {t('Découvrir', 'Discover')}
        </span>
        <ChevronDown
          size={16}
          style={{ color: 'oklch(0.60 0.005 240)' }}
          className="animate-bounce"
        />
      </button>


    </section>
  );
}
