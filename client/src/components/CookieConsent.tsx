/*
 * CIBORE — Cookie Consent Banner
 * GDPR-compliant minimal cookie policy
 * Stored in localStorage → persists across sessions
 */

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

const COOKIE_KEY = 'cibore_cookie_consent';

export default function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't appear on first render
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 8999,
        maxWidth: '420px',
        width: 'calc(100vw - 48px)',
        background: 'oklch(0.09 0.010 240)',
        border: '1px solid oklch(0.62 0.19 220 / 25%)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        animation: 'slideUp 0.4s ease',
      }}
    >
      <style>{`@keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'12px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          <span style={{ fontSize:'18px' }}>🍪</span>
          <span style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'14px', fontWeight:600, color:'oklch(0.97 0.003 240)' }}>
            {t('Nous utilisons des cookies', 'We use cookies')}
          </span>
        </div>
        <button
          onClick={decline}
          style={{ background:'none', border:'none', cursor:'pointer', color:'oklch(0.50 0.008 240)', padding:'2px' }}
          aria-label={t('Fermer', 'Close')}
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <p style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'12px', fontWeight:300, color:'oklch(0.55 0.008 240)', lineHeight:1.6, marginBottom:'12px' }}>
        {t(
          'Ce site utilise des cookies essentiels pour son fonctionnement. Nous utilisons également des cookies analytiques anonymes pour améliorer votre expérience.',
          'This site uses essential cookies for its operation. We also use anonymous analytics cookies to improve your experience.'
        )}
        {' '}
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{ background:'none', border:'none', cursor:'pointer', color:'oklch(0.62 0.19 220)', fontSize:'12px', fontWeight:500, textDecoration:'underline', padding:0 }}
        >
          {showDetails ? t('Masquer', 'Hide') : t('En savoir plus', 'Learn more')}
        </button>
      </p>

      {/* Details */}
      {showDetails && (
        <div style={{ background:'oklch(0.07 0.008 240)', borderRadius:'8px', padding:'12px', marginBottom:'12px' }}>
          <p style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'11px', color:'oklch(0.50 0.008 240)', lineHeight:1.6, margin:'0 0 6px' }}>
            <strong style={{ color:'oklch(0.73 0.12 75)' }}>
              {t('Cookies essentiels', 'Essential cookies')}
            </strong>
            {' — '}{t('Nécessaires au fonctionnement du site. Impossible de les désactiver.', 'Necessary for the site to function. Cannot be disabled.')}
          </p>
          <p style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'11px', color:'oklch(0.50 0.008 240)', lineHeight:1.6, margin:0 }}>
            <strong style={{ color:'oklch(0.73 0.12 75)' }}>
              {t('Cookies analytiques', 'Analytics cookies')}
            </strong>
            {' — '}{t('Données anonymes sur la navigation. Aucune donnée personnelle collectée.', 'Anonymous navigation data. No personal data collected.')}
          </p>
          <p style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'10px', color:'oklch(0.40 0.008 240)', lineHeight:1.5, marginTop:'8px' }}>
            {t(
              'Conformément au RGPD et à la réglementation ivoirienne (Loi n°2013-450 relative à la protection des données personnelles).',
              'In compliance with GDPR and Ivorian regulation (Law n°2013-450 on personal data protection).'
            )}
          </p>
        </div>
      )}

      {/* Buttons */}
      <div style={{ display:'flex', gap:'8px' }}>
        <button
          onClick={accept}
          style={{
            flex:1, background:'oklch(0.62 0.19 220)', color:'white',
            border:'none', borderRadius:'8px', padding:'10px 16px',
            fontFamily:"'Space Grotesk', sans-serif", fontSize:'12px', fontWeight:600,
            cursor:'pointer', transition:'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          {t('Accepter tout', 'Accept all')}
        </button>
        <button
          onClick={decline}
          style={{
            flex:1, background:'transparent', color:'oklch(0.55 0.008 240)',
            border:'1px solid oklch(1 0 0 / 10%)', borderRadius:'8px', padding:'10px 16px',
            fontFamily:"'Space Grotesk', sans-serif", fontSize:'12px', fontWeight:400,
            cursor:'pointer', transition:'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'oklch(1 0 0 / 20%)'; e.currentTarget.style.color = 'oklch(0.75 0.005 240)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'oklch(1 0 0 / 10%)'; e.currentTarget.style.color = 'oklch(0.55 0.008 240)'; }}
        >
          {t('Essentiel uniquement', 'Essential only')}
        </button>
      </div>

      {/* Legal link */}
      <p style={{ fontFamily:"'Space Grotesk', sans-serif", fontSize:'10px', color:'oklch(0.35 0.008 240)', marginTop:'10px', textAlign:'center' }}>
        <a href="mailto:contact@cibore.ci" style={{ color:'oklch(0.45 0.008 240)', textDecoration:'none' }}>
          {t('Politique de confidentialité', 'Privacy Policy')}
        </a>
        {' · '}
        <a href="https://cibore.ci" target="_blank" rel="noopener noreferrer" style={{ color:'oklch(0.45 0.008 240)', textDecoration:'none' }}>
          cibore.ci
        </a>
      </p>
    </div>
  );
}
