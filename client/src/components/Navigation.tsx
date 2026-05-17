/*
 * CIBORE V2 — Navigation Component
 * Design: Midnight Cartography — minimal, transparent → blur on scroll
 * Fixed top nav with language switcher and mobile menu
 */

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { fr: 'Vision', en: 'Vision', href: '#vision' },
  { fr: 'Sites', en: 'Sites', href: '#sites' },
  { fr: 'Pourquoi CIBORE', en: 'Why CIBORE', href: '#pourquoi' },
  { fr: 'Transformation', en: 'Transformation', href: '#transformation' },
  { fr: 'Partenaires', en: 'Partners', href: '#partenaires' },
];

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group"
            >
              <img
                src="/manus-storage/Gemini_Generated_Image_jnajdtjnajdtjnajcopy_4f4ec83b.png"
                alt="CIBORE Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="animated-underline font-ui text-xs font-500 tracking-widest uppercase transition-colors duration-200"
                  style={{
                    color: 'oklch(0.75 0.005 240)',
                    letterSpacing: '0.12em',
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.97 0.003 240)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.75 0.005 240)')}
                >
                  {t(link.fr, link.en)}
                </button>
              ))}
            </div>

            {/* Right: Lang + CTA */}
            <div className="flex items-center gap-4">
              {/* Language switcher */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLang('fr')}
                  className={`font-ui text-xs font-500 tracking-wider uppercase transition-all duration-200 px-2 py-1 ${
                    lang === 'fr'
                      ? 'text-white'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.1em' }}
                >
                  FR
                </button>
                <span style={{ color: 'oklch(0.4 0.005 240)', fontSize: '0.625rem' }}>|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`font-ui text-xs font-500 tracking-wider uppercase transition-all duration-200 px-2 py-1 ${
                    lang === 'en'
                      ? 'text-white'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.1em' }}
                >
                  EN
                </button>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden md:flex btn-primary"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.6875rem' }}
              >
                {t('Devenir Partenaire', 'Become a Partner')}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 transition-colors duration-200"
                style={{ color: 'oklch(0.75 0.005 240)' }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'oklch(0.07 0.008 240 / 98%)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-4xl font-600 transition-all duration-300"
              style={{
                color: 'oklch(0.95 0.003 240)',
                animationDelay: `${i * 80}ms`,
                fontStyle: 'italic',
              }}
            >
              {t(link.fr, link.en)}
            </button>
          ))}
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
            >
              {t('Devenir Partenaire', 'Become a Partner')}
            </button>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => { setLang('fr'); setMenuOpen(false); }}
                className={`font-ui text-sm tracking-widest uppercase ${lang === 'fr' ? 'text-white' : 'opacity-40'}`}
              >
                Français
              </button>
              <span style={{ color: 'oklch(0.4 0.005 240)' }}>|</span>
              <button
                onClick={() => { setLang('en'); setMenuOpen(false); }}
                className={`font-ui text-sm tracking-widest uppercase ${lang === 'en' ? 'text-white' : 'opacity-40'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
