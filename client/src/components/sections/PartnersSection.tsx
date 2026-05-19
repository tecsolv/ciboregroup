/*
 * CIBORE V2 — Partenaires & Investisseurs Section
 * Design: Midnight Cartography — credibility, institutional-grade positioning
 * Target audience cards + investor pitch elements
 */

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { TrendingUp, Shield, Globe, Users, Building, Leaf } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    fr: "Investisseurs",
    en: "Investors",
    fr_sub: "Fonds d'infrastructure",
    en_sub: "Infrastructure funds",
  },
  {
    icon: Building,
    fr: "Hôtels & Resorts",
    en: "Hotels & Resorts",
    fr_sub: "Destinations premium",
    en_sub: "Premium destinations",
  },
  {
    icon: Globe,
    fr: "Gouvernements",
    en: "Governments",
    fr_sub: "Partenaires institutionnels",
    en_sub: "Institutional partners",
  },
  {
    icon: Users,
    fr: "Promoteurs immobiliers",
    en: "Real estate developers",
    fr_sub: "Résidences & bureaux",
    en_sub: "Residences & offices",
  },
  {
    icon: Shield,
    fr: "Entreprises énergétiques",
    en: "Energy companies",
    fr_sub: "Partenaires stratégiques",
    en_sub: "Strategic partners",
  },
  {
    icon: Leaf,
    fr: "Constructeurs EV",
    en: "EV manufacturers",
    fr_sub: "Écosystème mobilité",
    en_sub: "Mobility ecosystem",
  },
];

const credentials = [
  {
    fr: "Structuré",
    en: "Structured",
    desc_fr:
      "Une approche méthodique et institutionnelle du déploiement d'infrastructure.",
    desc_en:
      "A methodical and institutional approach to infrastructure deployment.",
  },
  {
    fr: "Scalable",
    en: "Scalable",
    desc_fr:
      "Un modèle conçu pour s'étendre de la Côte d'Ivoire à l'ensemble du continent.",
    desc_en:
      "A model designed to expand from Côte d'Ivoire to the entire continent.",
  },
  {
    fr: "Future-proof",
    en: "Future-proof",
    desc_fr:
      "Une infrastructure pensée pour les 20 prochaines années de mobilité africaine.",
    desc_en:
      "Infrastructure designed for the next 20 years of African mobility.",
  },
  {
    fr: "Institutionnel",
    en: "Institutional-grade",
    desc_fr:
      "Standards internationaux, crédibilité locale, vision continentale.",
    desc_en: "International standards, local credibility, continental vision.",
  },
];

export default function PartnersSection() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="partenaires"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: "oklch(0.09 0.010 240)" }}
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.73 0.12 75) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">05</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "oklch(0.97 0.003 240)",
              }}
            >
              {lang === "fr" ? (
                <>
                  Partenaires &<br />
                  <em
                    style={{
                      color: "oklch(0.73 0.12 75)",
                      fontStyle: "italic",
                    }}
                  >
                    investisseurs.
                  </em>
                </>
              ) : (
                <>
                  Partners &<br />
                  <em
                    style={{
                      color: "oklch(0.73 0.12 75)",
                      fontStyle: "italic",
                    }}
                  >
                    investors.
                  </em>
                </>
              )}
            </h2>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "oklch(0.60 0.008 240)",
                lineHeight: 1.75,
              }}
            >
              {lang === "fr"
                ? "CIBORE se positionne comme une infrastructure crédible, scalable et institutionnelle. Nous construisons des partenariats stratégiques à long terme."
                : "CIBORE positions itself as credible, scalable and institutional infrastructure. We build long-term strategic partnerships."}
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {credentials.map((cred, i) => (
            <div
              key={cred.fr}
              className={`p-6 text-center transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                border: "1px solid oklch(0.73 0.12 75 / 20%)",
                background: "oklch(0.73 0.12 75 / 4%)",
              }}
            >
              <p
                className="font-display mb-2"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  fontWeight: 700,
                  color: "oklch(0.73 0.12 75)",
                  fontStyle: "italic",
                }}
              >
                {lang === "fr" ? cred.fr : cred.en}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 300,
                  color: "oklch(0.55 0.008 240)",
                  lineHeight: 1.5,
                }}
              >
                {lang === "fr" ? cred.desc_fr : cred.desc_en}
              </p>
            </div>
          ))}
        </div>

        {/* Audience grid */}
        <div
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="section-label mb-8">
            {lang === "fr"
              ? "Nos interlocuteurs stratégiques"
              : "Our strategic stakeholders"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {audiences.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <div
                  key={audience.fr}
                  className={`card-dark p-5 text-center transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(i + 4) * 60}ms` }}
                >
                  <Icon
                    size={20}
                    className="mx-auto mb-3"
                    style={{ color: "oklch(0.62 0.19 220)" }}
                  />
                  <p
                    className="font-ui"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "oklch(0.85 0.005 240)",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {lang === "fr" ? audience.fr : audience.en}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 300,
                      color: "oklch(0.45 0.008 240)",
                    }}
                  >
                    {lang === "fr" ? audience.fr_sub : audience.en_sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investor pitch */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div
            className="p-8 md:p-12"
            style={{
              background: "oklch(0.07 0.008 240)",
              border: "1px solid oklch(0.62 0.19 220 / 20%)",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "oklch(0.60 0.008 240)",
                lineHeight: 1.7,
              }}
            >
              {lang === "fr"
                ? "Pour les investisseurs et partenaires institutionnels, CIBORE représente une opportunité rare : être présent à la fondation d'une infrastructure continentale."
                : "For investors and institutional partners, CIBORE represents a rare opportunity: to be present at the foundation of continental infrastructure."}
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold"
            >
              {lang === "fr"
                ? "Demander un dossier investisseur"
                : "Request an investor dossier"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
