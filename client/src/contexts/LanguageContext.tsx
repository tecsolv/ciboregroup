/*
 * CIBORE V2 — Language Context
 * Bilingual FR/EN support. Default: French.
 * Narrative signature always in English.
 */

import React, { createContext, useContext, useState } from 'react';

type Lang = 'fr' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (fr) => fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  const t = (fr: string, en: string) => lang === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
