/*
 * CIBORE V2 — CTA Final Section
 * Design: Midnight Cartography — emotional peak, joining the future
 * Full-bleed dark section with contact form and strong emotional copy
 */

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Send } from 'lucide-react';

export default function CtaSection() {
  const { lang, t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const siteTypes = [
    { value: 'hotel', fr: 'Hôtel / Resort', en: 'Hotel / Resort' },
    { value: 'residence', fr: 'Résidence', en: 'Residence' },
    { value: 'commercial', fr: 'Centre commercial', en: 'Shopping center' },
    { value: 'business', fr: 'Immeuble de bureaux', en: 'Office building' },
    { value: 'investor', fr: 'Investisseur', en: 'Investor' },
    { value: 'other', fr: 'Autre', en: 'Other' },
  ];

  return (
    <section
      id="contact"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: 'oklch(0.05 0.006 240)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-8 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.62 0.19 220 / 15%) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Emotional copy */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="section-label">07</span>
            </div>

            <h2
              className="font-display mb-8"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'oklch(0.97 0.003 240)',
              }}
            >
              {lang === 'fr' ? (
                <>
                  Rejoignez<br />
                  <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>l'infrastructure</em><br />
                  du futur.
                </>
              ) : (
                <>
                  Join<br />
                  <em style={{ color: 'oklch(0.62 0.19 220)', fontStyle: 'italic' }}>the infrastructure</em><br />
                  of the future.
                </>
              )}
            </h2>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.0625rem',
                fontWeight: 300,
                color: 'oklch(0.60 0.008 240)',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              {t(
                'Les leaders africains de la mobilité de demain se positionnent aujourd\'hui. Votre site peut être l\'un des premiers à faire partie du réseau CIBORE.',
                'Africa\'s mobility leaders of tomorrow are positioning themselves today. Your site can be one of the first to be part of the CIBORE network.'
              )}
            </p>

          </div>

          {/* Right: Contact form */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {submitted ? (
              <div
                className="p-10 text-center"
                style={{
                  border: '1px solid oklch(0.62 0.19 220 / 30%)',
                  background: 'oklch(0.62 0.19 220 / 5%)',
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'oklch(0.62 0.19 220 / 15%)',
                    border: '1px solid oklch(0.62 0.19 220 / 30%)',
                  }}
                >
                  <Send size={24} style={{ color: 'oklch(0.62 0.19 220)' }} />
                </div>
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: 'oklch(0.97 0.003 240)',
                  }}
                >
                  {t('Message envoyé.', 'Message sent.')}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    color: 'oklch(0.60 0.008 240)',
                    lineHeight: 1.6,
                  }}
                >
                  {t(
                    'Notre équipe vous contactera dans les plus brefs délais pour discuter de votre projet.',
                    'Our team will contact you as soon as possible to discuss your project.'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  className="p-6 mb-6"
                  style={{
                    border: '1px solid oklch(1 0 0 / 6%)',
                    background: 'oklch(0.09 0.010 240)',
                  }}
                >
                  <p
                    className="section-label mb-1"
                  >
                    {t('Formulaire de contact', 'Contact form')}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.8125rem',
                      fontWeight: 300,
                      color: 'oklch(0.50 0.008 240)',
                    }}
                  >
                    {t('Devenir site partenaire · Investisseur · Partenariat', 'Become a partner site · Investor · Partnership')}
                  </p>
                </div>

                {[
                  { key: 'name', fr: 'Nom complet', en: 'Full name', type: 'text' },
                  { key: 'email', fr: 'Adresse email', en: 'Email address', type: 'email' },
                  { key: 'company', fr: 'Entreprise / Organisation', en: 'Company / Organization', type: 'text' },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      className="block mb-1.5"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'oklch(0.55 0.008 240)',
                      }}
                    >
                      {lang === 'fr' ? field.fr : field.en}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 outline-none transition-all duration-200"
                      style={{
                        background: 'oklch(0.10 0.012 240)',
                        border: '1px solid oklch(1 0 0 / 8%)',
                        color: 'oklch(0.90 0.005 240)',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.9375rem',
                        fontWeight: 300,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'oklch(0.62 0.19 220 / 50%)';
                        e.target.style.boxShadow = '0 0 0 1px oklch(0.62 0.19 220 / 20%)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'oklch(1 0 0 / 8%)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}

                {/* Site type select */}
                <div>
                  <label
                    className="block mb-1.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'oklch(0.55 0.008 240)',
                    }}
                  >
                    {t('Type de site / Profil', 'Site type / Profile')}
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 outline-none transition-all duration-200"
                    style={{
                      background: 'oklch(0.10 0.012 240)',
                      border: '1px solid oklch(1 0 0 / 8%)',
                      color: formData.type ? 'oklch(0.90 0.005 240)' : 'oklch(0.45 0.008 240)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                    }}
                  >
                    <option value="" style={{ background: 'oklch(0.10 0.012 240)' }}>
                      {t('Sélectionner...', 'Select...')}
                    </option>
                    {siteTypes.map((st) => (
                      <option key={st.value} value={st.value} style={{ background: 'oklch(0.10 0.012 240)' }}>
                        {lang === 'fr' ? st.fr : st.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block mb-1.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'oklch(0.55 0.008 240)',
                    }}
                  >
                    {t('Message (optionnel)', 'Message (optional)')}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'oklch(0.10 0.012 240)',
                      border: '1px solid oklch(1 0 0 / 8%)',
                      color: 'oklch(0.90 0.005 240)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'oklch(0.62 0.19 220 / 50%)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'oklch(1 0 0 / 8%)';
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-2">
                  {t('Devenir partenaire CIBORE', 'Become a CIBORE partner')}
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
