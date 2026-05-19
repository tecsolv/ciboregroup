/*
 * CIBORE V2 — Pourquoi CIBORE Section
 * Design: Midnight Cartography — psychological/strategic arguments, not technical
 * Large numbered cards with hover states
 */

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    num: "01",
    fr: "Positionnement premium",
    en: "Premium positioning",
    desc_fr:
      "Associez votre site à la première infrastructure de recharge premium d'Afrique de l'Ouest. Un signal fort de modernité et de vision.",
    desc_en:
      "Associate your site with the first premium charging infrastructure in West Africa. A strong signal of modernity and vision.",
    color: "oklch(0.62 0.19 220)",
  },
  {
    num: "02",
    fr: "Avantage du premier entrant",
    en: "First-mover advantage",
    desc_fr:
      "Les sites qui s'équipent aujourd'hui capturent l'avantage concurrentiel de demain. Dans chaque marché émergent, les pionniers définissent les standards.",
    desc_en:
      "Sites that equip themselves today capture tomorrow's competitive advantage. In every emerging market, pioneers define the standards.",
    color: "oklch(0.73 0.12 75)",
  },
  {
    num: "03",
    fr: "Préparation du futur",
    en: "Future preparation",
    desc_fr:
      "Les véhicules électriques arrivent. La question n'est pas si, mais quand. Préparer votre infrastructure aujourd'hui, c'est choisir d'être prêt.",
    desc_en:
      "Electric vehicles are coming. The question is not if, but when. Preparing your infrastructure today means choosing to be ready.",
    color: "oklch(0.62 0.19 220)",
  },
  {
    num: "04",
    fr: "Modernisation & visibilité",
    en: "Modernization & visibility",
    desc_fr:
      "Une infrastructure CIBORE transforme votre site en destination moderne. Visibilité accrue, clientèle premium, image institutionnelle renforcée.",
    desc_en:
      "CIBORE infrastructure transforms your site into a modern destination. Increased visibility, premium clientele, strengthened institutional image.",
    color: "oklch(0.73 0.12 75)",
  },
  {
    num: "05",
    fr: "Infrastructure stratégique durable",
    en: "Durable strategic infrastructure",
    desc_fr:
      "CIBORE n'est pas un projet pilote. C'est une infrastructure stratégique construite pour durer et pour s'étendre à l'Afrique entière.",
    desc_en:
      "CIBORE is not a pilot project. It is a strategic infrastructure built to last and to scale across all of Africa.",
    color: "oklch(0.62 0.19 220)",
  },
  {
    num: "06",
    fr: "Transformation africaine",
    en: "African transformation",
    desc_fr:
      "Rejoindre CIBORE, c'est participer à l'écriture de l'histoire de la mobilité africaine. Une opportunité rare d'être du bon côté du futur.",
    desc_en:
      "Joining CIBORE means participating in writing the history of African mobility. A rare opportunity to be on the right side of the future.",
    color: "oklch(0.73 0.12 75)",
  },
];

export default function WhyCiboreSection() {
  const { lang } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="pourquoi"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="relative py-32 md:py-40 section-cinematic"
      style={{ background: "oklch(0.07 0.008 240)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.19 220) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="section-label">03</span>
          </div>
          <h2
            className="font-display mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "oklch(0.97 0.003 240)",
            }}
          >
            {lang === "fr" ? (
              <>
                Pourquoi
                <br />
                <em
                  style={{ color: "oklch(0.62 0.19 220)", fontStyle: "italic" }}
                >
                  CIBORE.
                </em>
              </>
            ) : (
              <>
                Why
                <br />
                <em
                  style={{ color: "oklch(0.62 0.19 220)", fontStyle: "italic" }}
                >
                  CIBORE.
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
              ? "Pas des arguments techniques. Des arguments stratégiques et psychologiques pour les décideurs qui pensent à long terme."
              : "Not technical arguments. Strategic and psychological arguments for decision-makers who think long-term."}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.num}
              className={`group relative p-8 card-dark overflow-hidden transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background decorative number */}
              <span
                className="absolute -top-2 -right-2 font-display select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  fontSize: "6rem",
                  fontWeight: 700,
                  color: reason.color,
                  lineHeight: 1,
                  opacity: 0.04,
                }}
              >
                {reason.num}
              </span>

              {/* Number */}
              <span
                className="font-display block mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: reason.color,
                  lineHeight: 1,
                }}
              >
                {reason.num}
              </span>

              {/* Title */}
              <h3
                className="font-ui mb-3"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "oklch(0.95 0.003 240)",
                  letterSpacing: "0.03em",
                  lineHeight: 1.3,
                }}
              >
                {lang === "fr" ? reason.fr : reason.en}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.55 0.008 240)",
                  lineHeight: 1.7,
                }}
              >
                {lang === "fr" ? reason.desc_fr : reason.desc_en}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: reason.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
