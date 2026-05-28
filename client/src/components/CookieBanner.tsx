/*
 * CIBORE — Cookie Consent Banner
 * Remplace le banner Hostinger — contrôle total, z-index garanti
 * Stockage : localStorage 'cibore-cookie-consent'
 */

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type ConsentState = "accepted" | "essential" | null;

export default function CookieBanner() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cibore-cookie-consent");
    if (!stored) {
      // Petit délai pour laisser la page charger
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: ConsentState) => {
    localStorage.setItem("cibore-cookie-consent", type || "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop léger */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 99998,
          backdropFilter: "blur(2px)",
        }}
        onClick={() => handleConsent("essential")}
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lang === "fr" ? "Politique de cookies" : "Cookie Policy"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(680px, calc(100vw - 2rem))",
          background: "oklch(0.13 0.018 200)",
          border: "1px solid oklch(0.73 0.12 75 / 25%)",
          borderRadius: "8px",
          padding: "1.75rem 2rem",
          zIndex: 99999,
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px oklch(0.73 0.12 75 / 10%)",
          animation: "cookieSlideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "all",
        }}
      >
        {/* Ligne dorée en haut */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "2rem",
            right: "2rem",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.73 0.12 75), transparent)",
            borderRadius: "2px",
          }}
        />

        {/* Bouton fermer */}
        <button
          onClick={() => handleConsent("essential")}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "28px",
            height: "28px",
            background: "oklch(0.20 0.015 200)",
            border: "1px solid oklch(0.73 0.12 75 / 20%)",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "oklch(0.65 0.008 240)",
            fontSize: "14px",
            lineHeight: 1,
            transition: "all 0.2s",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.73 0.12 75 / 20%)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.73 0.12 75)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.20 0.015 200)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.65 0.008 240)";
          }}
        >
          ✕
        </button>

        {/* Icône + Titre */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.25rem" }}>🍪</span>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "oklch(0.95 0.003 240)",
              margin: 0,
            }}
          >
            {lang === "fr" ? "Politique de cookies" : "Cookie Policy"}
          </h3>
        </div>

        {/* Texte */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "oklch(0.58 0.008 240)",
            lineHeight: 1.65,
            marginBottom: "1.5rem",
            paddingRight: "2rem",
          }}
        >
          {lang === "fr"
            ? "CIBORE utilise des cookies pour améliorer votre expérience, analyser l'audience et personnaliser le contenu. Vous pouvez accepter tous les cookies ou choisir uniquement les cookies essentiels au fonctionnement du site."
            : "CIBORE uses cookies to improve your experience, analyze audience and personalize content. You can accept all cookies or choose only the cookies essential to the site's operation."}
        </p>

        {/* Boutons */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Accept all */}
          <button
            onClick={() => handleConsent("accepted")}
            style={{
              background: "oklch(0.73 0.12 75)",
              color: "oklch(0.10 0.010 240)",
              border: "none",
              borderRadius: "4px",
              padding: "0.6rem 1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "oklch(0.80 0.12 75)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "oklch(0.73 0.12 75)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            {lang === "fr" ? "✓ Accepter tout" : "✓ Accept all"}
          </button>

          {/* Essential only */}
          <button
            onClick={() => handleConsent("essential")}
            style={{
              background: "transparent",
              color: "oklch(0.70 0.008 240)",
              border: "1px solid oklch(0.35 0.015 200)",
              borderRadius: "4px",
              padding: "0.6rem 1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "oklch(0.73 0.12 75 / 40%)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "oklch(0.85 0.005 240)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "oklch(0.35 0.015 200)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "oklch(0.70 0.008 240)";
            }}
          >
            {lang === "fr" ? "Essentiels uniquement" : "Essential only"}
          </button>

          {/* Lien politique */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              marginLeft: "auto",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              color: "oklch(0.45 0.008 240)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              cursor: "pointer",
            }}
          >
            {lang === "fr" ? "En savoir plus" : "Learn more"}
          </a>
        </div>

        {/* Animation CSS */}
        <style>{`
          @keyframes cookieSlideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}
