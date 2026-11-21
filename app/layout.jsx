import "@/app/styles/3r60x2oip0zhg.css";
import "@/app/styles/prestoillico.css";
import Script from "next/script";
import { SiteLoader } from "@/components/rea/SiteLoader";

export const metadata = {
  metadataBase: new URL("https://prestoillico.com"),
  title: {
    default: "Prestoillico — Transformation digitale augmentée par l'IA",
    template: "%s — Prestoillico",
  },
  description:
    "Prestoillico, agence de transformation digitale augmentée par l'IA basée à Casablanca : stratégie, sites, CRM, automatisation, IA appliquée et data pour les entreprises du Maroc, de la région MENA et d'Europe.",
  applicationName: "Prestoillico",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Prestoillico",
    title: "Prestoillico — Transformation digitale augmentée par l'IA",
    description:
      "Nous transformons vos parcours digitaux et vos opérations avec l'IA. Casablanca · MENA · Europe.",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Prestoillico Digital Agency" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestoillico — Transformation digitale augmentée par l'IA",
    images: ["/opengraph-image.png"],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
export const viewport = { themeColor: "#0A0A0A" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prestoillico",
  url: "https://prestoillico.com",
  logo: "https://prestoillico.com/logo.png",
  email: "contact@prestoillico.com",
  description: "Agence de transformation digitale augmentée par l'IA.",
  address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
  areaServed: ["MA", "MENA", "Europe"],
  knowsAbout: [
    "Stratégie digitale",
    "Sites et expériences web",
    "CRM et sales ops",
    "Automatisation",
    "Intelligence artificielle appliquée",
    "Data et dashboards",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="Xr2dEG_variable piWzYG_variable">
      <body>
        <Script
          id="reload-scroll-reset"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              '\n          if (!location.hash && performance.getEntriesByType("navigation")[0]?.type === "reload") {\n            const restoration = history.scrollRestoration;\n            history.scrollRestoration = "manual";\n            window.scrollTo(0, 0);\n            window.addEventListener("pageshow", () => window.scrollTo(0, 0), { once: true });\n            window.addEventListener("pagehide", () => {\n              history.scrollRestoration = restoration;\n            }, { once: true });\n          }\n        ',
          }}
        />
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        <SiteLoader />
        <noscript>
          <style>
            {
              "\n          .site-loader { display: none; }\n          .hero-line-reveal { opacity: 1 !important; filter: none !important; transform: none !important; }\n          .capability-discipline li, .capability-discipline h3, .capability-junction { opacity: 1; visibility: visible; }\n          .capability-discipline li strong, .capability-discipline li small { opacity: 1; filter: none; transform: none; }\n          .menu-button, button.contact-pull, .contact-thread-grip { display: none; }\n          .site-header { position: absolute; flex-wrap: wrap; gap: 1rem; }\n          .site-header nav { position: static; display: flex; width: auto; height: auto; padding: 0; flex-direction: row; flex-wrap: wrap; gap: 1rem; background: none; color: inherit; font: 400 var(--header-label-size)/1.5 var(--font-mono); letter-spacing: .12em; }\n        "
            }
          </style>
        </noscript>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
