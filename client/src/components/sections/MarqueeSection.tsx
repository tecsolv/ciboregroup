/*
 * CIBORE V2 — Marquee Ticker Section
 * Design: Midnight Cartography — brand reinforcement strip between hero and vision
 * Horizontal scrolling text with gold and blue accents
 */

import { useLanguage } from '@/contexts/LanguageContext';

const items = [
  { text: 'MOBILITÉ AFRICAINE', accent: false },
  { text: '◆', accent: true },
  { text: 'EV INFRASTRUCTURE', accent: false },
  { text: '◆', accent: true },
  { text: 'CÔTE D\'IVOIRE', accent: false },
  { text: '◆', accent: true },
  { text: 'PREMIER RÉSEAU STRUCTURÉ', accent: false },
  { text: '◆', accent: true },
  { text: 'AFRICAN MOBILITY', accent: false },
  { text: '◆', accent: true },
  { text: 'INFRASTRUCTURE PREMIUM', accent: false },
  { text: '◆', accent: true },
  { text: 'FUTURE READY', accent: false },
  { text: '◆', accent: true },
];

export default function MarqueeSection() {
  const allItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: 'oklch(0.09 0.010 240)',
        borderTop: '1px solid oklch(1 0 0 / 6%)',
        borderBottom: '1px solid oklch(1 0 0 / 6%)',
      }}
    >
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-ui"
            style={{
              fontSize: '0.6875rem',
              fontWeight: item.accent ? 400 : 500,
              letterSpacing: item.accent ? '0' : '0.2em',
              color: item.accent
                ? 'oklch(0.73 0.12 75 / 60%)'
                : 'oklch(0.40 0.008 240)',
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
