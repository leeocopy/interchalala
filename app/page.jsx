import "@/app/styles/0laygpwkvzk1d.css";
import "@/app/styles/1cgj_16e_57q_.css";
import "@/app/styles/1r8-qx65y4q_n.css";
import { MotionController } from "@/components/rea/MotionController";
import { CustomCursor } from "@/components/rea/CustomCursor";
import { Thread } from "@/components/rea/Thread";
import { SiteHeader } from "@/components/rea/SiteHeader";
import { Hero } from "@/components/rea/Hero";
import { ProjectWorldMotion } from "@/components/rea/ProjectWorldMotion";
import { EignaMotion } from "@/components/rea/EignaMotion";
import Link from "next/link";
import { MealOpsMotion } from "@/components/rea/MealOpsMotion";
import { PapertrailScanMotion } from "@/components/rea/PapertrailScanMotion";
import { ScribeMotion } from "@/components/rea/ScribeMotion";
import { CreditFlowMotion } from "@/components/rea/CreditFlowMotion";
import { Offers } from "@/components/Offers";
import { SectionTitle } from "@/components/SectionTitle";
import { About } from "@/components/rea/About";
import { Contact } from "@/components/rea/Contact";

export const metadata = {
  title: { absolute: "Prestoillico — Transformation digitale augmentée par l'IA" },
  description:
    "Stratégie digitale, sites et expériences, CRM, automatisation, IA appliquée et data : Prestoillico transforme vos parcours digitaux et vos opérations avec l'IA. Casablanca · MENA & Europe.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prestoillico — Transformation digitale augmentée par l'IA",
    description: "Nous transformons vos parcours digitaux et vos opérations avec l'IA.",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Prestoillico Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestoillico",
    description: "Le digital augmenté par l'IA.",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return (
    <MotionController>
      <CustomCursor />
      <Thread />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section className="selected-work" id="work" aria-labelledby="work-title">
          <div className="practice-intro thread-scene" data-thread-scene="work-index">
            <div className="practice-copy">
              <h2 id="work-title" data-heading-reveal>
                <span className="heading-line-reveal">
                  <span className="practice-line" data-velocity-type>
                    Du parcours
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="practice-line" data-velocity-type data-direction="reverse">
                    client
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="practice-line" data-velocity-type>
                    jusqu'aux
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="practice-line" data-velocity-type data-direction="reverse">
                    opérations.
                  </span>
                </span>
              </h2>
              <p className="practice-description" data-reveal>
                Nous relions l'expérience de vos clients, vos outils et les systèmes qui les font tourner.
              </p>
            </div>
            <div
              className="practice-drawing"
              role="img"
              aria-label="Un fil continu dessine une ampoule pour le besoin, puis descend en zigzag ordonné pour relier parcours et système."
            >
              <span className="practice-label practice-intent">BESOIN</span>
              <span className="practice-label practice-interaction">PARCOURS</span>
              <span className="practice-label practice-system">SYSTÈME</span>
            </div>
          </div>
          <SectionTitle index="01" label="EXPERTISES" note="Ce que nous faisons" />
          <section
            className="capabilities thread-scene"
            id="capabilities"
            data-thread-scene="capabilities"
            aria-labelledby="capabilities-title"
          >
            <div className="capability-heading">
              <h2 id="capabilities-title" data-heading-reveal>
                <span className="heading-line-reveal">
                  <span className="capability-line" data-velocity-type>
                    NOUS CONCEVONS
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="capability-line" data-velocity-type data-direction="reverse">
                    L'EXPÉRIENCE.
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="capability-line" data-velocity-type>
                    ET L'INTELLIGENCE
                  </span>
                </span>
                <span className="heading-line-reveal">
                  <span className="capability-line" data-velocity-type data-direction="reverse">
                    QUI LA PORTE.
                  </span>
                </span>
              </h2>
            </div>
            <div className="capability-orbit">
              <svg
                className="capability-junction capability-split"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="4" />
              </svg>
              <div key="product" className="capability-discipline capability-product">
                <h3>DIGITAL & EXPÉRIENCE</h3>
                <ul>
                  <li
                    key="Product Strategy"
                    data-capability-angle={0.7074832117793429}
                    style={{ left: "17.503846381456164%", top: "12%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Stratégie digitale</strong>
                      <small>Audit, cadrage et feuille de route alignée sur vos objectifs.</small>
                    </span>
                  </li>
                  <li
                    key="UX Research"
                    data-capability-angle={1.181000030320636}
                    style={{ left: "3.7506756806112875%", top: "31%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Sites & expériences</strong>
                      <small>Des sites et landing pages qui racontent et convertissent.</small>
                    </span>
                  </li>
                  <li
                    key="Interaction Design"
                    data-capability-angle={1.5707963267948966}
                    style={{ left: "0%", top: "50%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>UX & conversion</strong>
                      <small>Des parcours clairs, du premier clic au contact.</small>
                    </span>
                  </li>
                  <li
                    key="Design Systems"
                    data-capability-angle={1.9605926232691573}
                    style={{ left: "3.7506756806112946%", top: "69%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>CRM & sales ops</strong>
                      <small>Un pipeline structuré et des leads centralisés.</small>
                    </span>
                  </li>
                  <li
                    key="Prototyping"
                    data-capability-angle={2.4341094418104503}
                    style={{ left: "17.503846381456164%", top: "88%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Data & dashboards</strong>
                      <small>Des KPI lisibles pour piloter plus simplement.</small>
                    </span>
                  </li>
                </ul>
              </div>
              <div key="ai" className="capability-discipline capability-ai">
                <h3>IA & OPÉRATIONS</h3>
                <ul>
                  <li
                    key="AI Products"
                    data-capability-angle={0.7074832117793429}
                    style={{ left: "82.49615361854384%", top: "12%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>IA appliquée</strong>
                      <small>Des copilotes métier branchés sur vos données.</small>
                    </span>
                  </li>
                  <li
                    key="Agentic Systems"
                    data-capability-angle={1.181000030320636}
                    style={{ left: "96.2493243193887%", top: "31%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Agents IA</strong>
                      <small>Des assistants qui qualifient, répondent et escaladent.</small>
                    </span>
                  </li>
                  <li
                    key="MCP"
                    data-capability-angle={1.5707963267948966}
                    style={{ left: "100%", top: "50%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Intégrations</strong>
                      <small>Vos outils connectés, vos données synchronisées.</small>
                    </span>
                  </li>
                  <li
                    key="RAG"
                    data-capability-angle={1.9605926232691573}
                    style={{ left: "96.2493243193887%", top: "69%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Bases de connaissance</strong>
                      <small>Des réponses ancrées dans vos contenus et vos process.</small>
                    </span>
                  </li>
                  <li
                    key="Automation"
                    data-capability-angle={2.4341094418104503}
                    style={{ left: "82.49615361854384%", top: "88%" }}
                  >
                    <svg
                      className="capability-dot"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <circle className="capability-core" cx="9" cy="9" r="2.5" />
                    </svg>
                    <span>
                      <strong>Automatisation</strong>
                      <small>Moins de tâches manuelles, des workflows fiables.</small>
                    </span>
                  </li>
                </ul>
              </div>
              <svg
                className="capability-junction capability-merge"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="4" />
              </svg>
            </div>
          </section>
        </section>
        <SectionTitle index="02" label="PROJETS" note="Six missions types, un même fil" />
        <ProjectWorldMotion>
          <article
            key="eigna"
            id="eigna"
            className="project-world world-eigna world-light"
            data-world="eigna"
            data-thread-scene="world-eigna"
            aria-labelledby="eigna-title"
          >
            <p className="world-kicker">01{" / "}CRM & IA appliquée</p>
            <p className="world-description">
              <span className="project-statement-desktop">
                Cartographier vos outils, détecter les frictions,
                <br />
                automatiser et mesurer le gain.
              </span>
              <span className="project-statement-mobile">
                <span key="0">Cartographier vos outils,</span>
                <span key="1">détecter les frictions,</span>
                <span key="2">automatiser et mesurer le gain.</span>
              </span>
            </p>
            <div className="world-composition">
              <EignaMotion
flat={
  <svg viewBox="0 0 620 345" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
    aria-label="Carte des outils d'une entreprise : site, CRM, tableau de bord, assistant IA, automatisations et données, reliés en une seule vue">
    <g stroke="currentColor" strokeWidth=".9" strokeLinejoin="round">
      
  <rect x={10} y={14} width="180" height="150" rx="3" fill="var(--world-bg)" />
  <path d="M10 36h180" />
  <circle cx={22} cy={25} r="2.5" />
  <circle cx={32} cy={25} r="2.5" />
  <circle cx={42} cy={25} r="2.5" />
  <text x={180} y={28} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">SITE</text>
      
  <rect x={220} y={14} width="180" height="150" rx="3" fill="var(--world-bg)" />
  <path d="M220 36h180" />
  <circle cx={232} cy={25} r="2.5" />
  <circle cx={242} cy={25} r="2.5" />
  <circle cx={252} cy={25} r="2.5" />
  <text x={390} y={28} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">CRM</text>
      
  <rect x={430} y={14} width="180" height="150" rx="3" fill="var(--world-bg)" />
  <path d="M430 36h180" />
  <circle cx={442} cy={25} r="2.5" />
  <circle cx={452} cy={25} r="2.5" />
  <circle cx={462} cy={25} r="2.5" />
  <text x={600} y={28} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">DASHBOARD</text>
      
  <rect x={10} y={196} width="180" height="129" rx="3" fill="var(--world-bg)" />
  <path d="M10 218h180" />
  <circle cx={22} cy={207} r="2.5" />
  <circle cx={32} cy={207} r="2.5" />
  <circle cx={42} cy={207} r="2.5" />
  <text x={180} y={210} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">ASSISTANT IA</text>
      
  <rect x={220} y={196} width="180" height="129" rx="3" fill="var(--world-bg)" />
  <path d="M220 218h180" />
  <circle cx={232} cy={207} r="2.5" />
  <circle cx={242} cy={207} r="2.5" />
  <circle cx={252} cy={207} r="2.5" />
  <text x={390} y={210} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">AUTOMATISATION</text>
      
  <rect x={430} y={196} width="180" height="129" rx="3" fill="var(--world-bg)" />
  <path d="M430 218h180" />
  <circle cx={442} cy={207} r="2.5" />
  <circle cx={452} cy={207} r="2.5" />
  <circle cx={462} cy={207} r="2.5" />
  <text x={600} y={210} textAnchor="end" fontSize="8" fill="currentColor" stroke="none">DATA</text>
    </g>
    <g className="eigna-furnishings" stroke="currentColor" strokeWidth=".75" opacity=".6">
      
  <rect x={24} y={48} width="96" height="14" />
  <path d="M24 72h96M24 80h78M24 88h60" opacity=".6" />
  <rect x={24} y={98} width="46" height="14" rx="7" />
  <rect x={128} y={48} width="48" height="64" />
  <path d="m128 112 18-24 12 14 8-8 10 18" opacity=".6" />
  <rect x={24} y={122} width="46" height="30" />
  <rect x={78} y={122} width="46" height="30" />
  <rect x={132} y={122} width="44" height="30" />
      <text x={234} y={52} fontSize="7" fill="currentColor" stroke="none">LEAD</text>
<rect x={234} y={60} width="46" height="22" rx="2" />
<path d="M239 67h26M239 74h16" opacity=".6" />
<rect x={234} y={88} width="46" height="22" rx="2" />
<path d="M239 95h26M239 102h16" opacity=".6" />
<rect x={234} y={116} width="46" height="22" rx="2" />
<path d="M239 123h26M239 130h16" opacity=".6" />
<text x={288} y={52} fontSize="7" fill="currentColor" stroke="none">QUALIFIÉ</text>
<rect x={288} y={60} width="46" height="22" rx="2" />
<path d="M293 67h26M293 74h16" opacity=".6" />
<rect x={288} y={88} width="46" height="22" rx="2" />
<path d="M293 95h26M293 102h16" opacity=".6" />
<text x={342} y={52} fontSize="7" fill="currentColor" stroke="none">GAGNÉ</text>
<rect x={342} y={60} width="46" height="22" rx="2" />
<path d="M347 67h26M347 74h16" opacity=".6" />
      
  <text x={444} y={70} fontSize="18" fill="currentColor" stroke="none">3,1x</text>
  <text x={444} y={84} fontSize="7" fill="currentColor" stroke="none" opacity=".6">PIPELINE QUALIFIÉ</text>
  <rect x={530} y={134} width="10" height="18" />
<rect x={545} y={122} width="10" height="30" />
<rect x={560} y={110} width="10" height="42" />
<rect x={575} y={94} width="10" height="58" />
<rect x={590} y={76} width="10" height="76" />
  <path d="M526 152h80M444 110h62M444 122h46M444 134h54" opacity=".5" />
      
  <rect x={24} y={230} width="112" height="26" rx="9" />
  <path d="M34 239h70M34 247h44" opacity=".6" />
  <rect x={64} y={264} width="112" height="26" rx="9" />
  <path d="M74 273h78M74 281h50" opacity=".6" />
  <circle cx={34} cy={306} r="2" fill="currentColor" />
  <circle cx={43} cy={306} r="2" fill="currentColor" opacity=".6" />
  <circle cx={52} cy={306} r="2" fill="currentColor" opacity=".3" />
      
  <circle cx={254} cy={258} r="12" />
<circle cx={310} cy={258} r="12" />
<circle cx={366} cy={258} r="12" />
  <path d="M266 258h32M322 258h32" />
  <path d="m292 254 5 4-5 4M348 254l5 4-5 4" />
  <path d="M254 270v18h112v-18" strokeDasharray="3 4" opacity=".6" />
  <path d="M248 258h12M304 258h12M360 258h12" opacity=".6" />
  <text x={254} y={304} textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity=".6">DÉCLENCHEUR</text>
  <text x={366} y={304} textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" opacity=".6">ACTION</text>
      
  <rect x={444} y={230} width="152" height="14" />
  <path d="M444 254h152" opacity=".5" />
<rect x={450} y={258} width="34" height="5" fill="currentColor" opacity=".16" stroke="none" />
<path d="M444 270h152" opacity=".5" />
<rect x={450} y={274} width="46" height="5" fill="currentColor" opacity=".16" stroke="none" />
<path d="M444 286h152" opacity=".5" />
<rect x={450} y={290} width="28" height="5" fill="currentColor" opacity=".16" stroke="none" />
<path d="M444 302h152" opacity=".5" />
<rect x={450} y={306} width="40" height="5" fill="currentColor" opacity=".16" stroke="none" />
  <path d="M496 230v72M546 230v72" opacity=".5" />
    </g>
    <g stroke="currentColor" strokeWidth=".9" strokeDasharray="2 5" opacity=".5">
      <path d="M190 89h30M400 89h30M190 260h30M400 260h30M100 164v32M310 164v32M520 164v32" />
    </g>
    <g fill="currentColor" fontSize="10">
      <text x="5" y="340">PARCOURS 03</text>
      <text className="eigna-occupied" x="100" y="340">CONNECTÉ</text>
      <text x="610" y="340" textAnchor="end">6 OUTILS / 1 VUE</text>
    </g>
  </svg>
}
inspection={[
  <g stroke="currentColor" strokeWidth=".85">
      <g transform="rotate(-7 55 42)"><rect x={10} y={14} width="90" height="56" fill="var(--world-bg)" /><path d="M20 28h70M20 38h70M20 48h70M44 22v38M68 22v38" opacity=".55" /></g>
      <g transform="rotate(6 107 102)"><rect x={62} y={74} width="90" height="56" fill="var(--world-bg)" /><path d="m62 74 45 30 45-30M62 130l32-26M152 130L120 104" opacity=".55" /></g>
      <g transform="rotate(-4 59 162)"><rect x={14} y={134} width="90" height="56" fill="var(--world-bg)" /><rect x={24} y={144} width="70" height="9" opacity=".7" /><rect x={24} y={159} width="70" height="9" opacity=".7" /><rect x={24} y={174} width="30" height="9" rx="4" /></g>
      <path d="M56 70 70 78M104 130 88 142" strokeDasharray="3 4" opacity=".55" />
    </g>,
  <g transform="translate(200 0)">
      <g stroke="currentColor" strokeWidth=".85">
        <g transform="rotate(0 75 42)"><rect x={30} y={14} width="90" height="56" fill="var(--world-bg)" /><path d="M40 28h70M40 38h70M40 48h70M64 22v38M88 22v38" opacity=".55" /></g>
        <g transform="rotate(0 75 104)"><rect x={30} y={76} width="90" height="56" fill="var(--world-bg)" /><path d="m30 76 45 30 45-30M30 132l32-26M120 132L88 106" opacity=".55" /></g>
        <g transform="rotate(0 75 166)"><rect x={30} y={138} width="90" height="56" fill="var(--world-bg)" /><rect x={40} y={148} width="70" height="9" opacity=".7" /><rect x={40} y={163} width="70" height="9" opacity=".7" /><rect x={40} y={178} width="30" height="9" rx="4" /></g>
        <path d="M75 70v6M75 132v6" />
        <path className="eigna-crack" d="m75 70-5 7 7 4-6 7 5 5-4 8" />
        <path className="eigna-detection" d="M22 88h-8v8m92-8h8v8m0 52v8h-8m-84 0h-8v-8" stroke="var(--signal)" strokeWidth="1.3" />
      </g>
    </g>,
]}
              />
              <h3 id="eigna-title" className="world-title">
                <Link href="/work/eigna#main-content" data-cursor="VOIR">
                  PROJET 01
                </Link>
              </h3>
            </div>
            <Link
              className="world-link interaction-link"
              href="/work/eigna#main-content"
              aria-label="Explorer le projet : PROJET 01"
              data-cursor="VOIR"
            >
              {"EXPLORER LE PROJET "}
              <span className="interaction-arrow" aria-hidden="true">
                <svg
                  className="navigation-arrow"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 20 20 4M7 4h13v13" />
                </svg>
              </span>
            </Link>
          </article>
          <article
            key="orbit"
            id="orbit"
            className="project-world world-orbit"
            data-world="orbit"
            data-thread-scene="world-orbit"
            aria-labelledby="orbit-title"
          >
            <p className="world-kicker">02{" / "}IA agentique</p>
            <p className="world-description">
              <span className="project-statement-desktop">
                Formulez votre demande : l'assistant agit
                <br />
                dans les bons outils pour la traiter.
              </span>
              <span className="project-statement-mobile">
                <span key="0">Formulez votre demande :</span>
                <span key="1">l'assistant agit dans les bons</span>
                <span key="2">outils pour la traiter.</span>
              </span>
            </p>
            <div className="world-composition">
              <div className="world-object orbit-tracks">
                <svg viewBox="0 0 1100 490" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <ellipse
                    cx="550"
                    cy="245"
                    rx="520"
                    ry="195"
                    transform="rotate(-8 550 245)"
                    stroke="currentColor"
                    strokeDasharray="18 18"
                    opacity=".35"
                  />
                </svg>
              </div>
              <div key="orbit-mail" className="world-object orbit-fragment orbit-mail" data-orbit={0}>
                <svg viewBox="0 0 250 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect
                    x="1"
                    y="1"
                    width="248"
                    height="218"
                    rx="3"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                    strokeWidth=".8"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    x="22"
                    y="19"
                    width="17"
                    height="19"
                  >
                    <path d="M2 4h20v16H2zM2 4l10 9L22 4" />
                  </svg>
                  <text x="49" y="32" fill="currentColor" fontSize="10" letterSpacing=".8">
                    MAIL
                  </text>
                  <path d="M22 46h206M22 176h206" stroke="currentColor" opacity=".25" />
                  <g fill="currentColor">
                    <text x="22" y="68" fontSize="13">
                      <tspan key="Re: Project direction" x="22" dy={0}>
                        Re : orientation du projet
                      </tspan>
                    </text>
                    <text x="22" y="104" fontSize="9" opacity=".6">
                      {"DE  yasmine@client.ma"}
                    </text>
                    <text x="22" y={130} fontSize={11}>
                      <tspan key="We've updated the project" x="22" dy={0}>
                        Le périmètre du projet
                      </tspan>
                      <tspan key="scope. Can you review the" x="22" dy={16}>
                        a évolué. Pouvez-vous
                      </tspan>
                      <tspan key="latest direction?" x="22" dy={16}>
                        valider l'orientation ?
                      </tspan>
                    </text>
                    <text x="22" y="198" fontSize="9" letterSpacing=".5">
                      ACTION REQUISE
                    </text>
                  </g>
                </svg>
              </div>
              <div key="orbit-document" className="world-object orbit-fragment orbit-document" data-orbit={1}>
                <svg viewBox="0 0 250 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect
                    x="1"
                    y="1"
                    width="248"
                    height="218"
                    rx="3"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                    strokeWidth=".8"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    x="22"
                    y="19"
                    width="17"
                    height="19"
                  >
                    <path d="M6 2h8l4 4v16H6z M14 2v5h4M9 12h6m-6 4h6" />
                  </svg>
                  <text x="49" y="32" fill="currentColor" fontSize="10" letterSpacing=".8">
                    RÉDACTION
                  </text>
                  <path d="M22 46h206M22 176h206" stroke="currentColor" opacity=".25" />
                  <g fill="currentColor">
                    <text x="22" y="68" fontSize="13">
                      <tspan key="Response draft" x="22" dy={0}>
                        Brouillon de réponse
                      </tspan>
                    </text>
                    <text x="22" y="104" fontSize="9" opacity=".6">
                      BROUILLON / E-MAIL
                    </text>
                    <text x="22" y={130} fontSize={11}>
                      <tspan key="Thanks Alex, I've reviewed" x="22" dy={0}>
                        Merci Yasmine, j'ai relu
                      </tspan>
                      <tspan key="the latest update..." x="22" dy={16}>
                        la dernière version...
                      </tspan>
                    </text>
                    <text x="22" y="198" fontSize="9" letterSpacing=".5">
                      PRÊT À VALIDER
                    </text>
                  </g>
                </svg>
              </div>
              <div key="orbit-brief" className="world-object orbit-fragment orbit-brief" data-orbit={2}>
                <svg viewBox="0 0 250 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect
                    x="1"
                    y="1"
                    width="248"
                    height="218"
                    rx="3"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                    strokeWidth=".8"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    x="22"
                    y="19"
                    width="17"
                    height="19"
                  >
                    <path d="M16 16l6 6M19 10a9 9 0 1 1-18 0a9 9 0 1 1 18 0" />
                  </svg>
                  <text x="49" y="32" fill="currentColor" fontSize="10" letterSpacing=".8">
                    RECHERCHE WEB
                  </text>
                  <path d="M22 46h206M22 176h206" stroke="currentColor" opacity=".25" />
                  <g fill="currentColor">
                    <text x="22" y="68" fontSize="13">
                      <tspan key="Latest project" x="22" dy={0}>
                        Dernier point
                      </tspan>
                      <tspan key="update" x="22" dy={16}>
                        projet
                      </tspan>
                    </text>
                    <text x="22" y="104" fontSize="9" opacity=".6">
                      3 sources pertinentes
                    </text>
                    <text x="22" y={130} fontSize={11}>
                      <tspan key="SOURCE 01" x="22" dy={0}>
                        SOURCE 01
                      </tspan>
                      <tspan key="SOURCE 02" x="22" dy={16}>
                        SOURCE 02
                      </tspan>
                      <tspan key="SOURCE 03" x="22" dy={16}>
                        SOURCE 03
                      </tspan>
                    </text>
                    <text x="22" y="198" fontSize="9" letterSpacing=".5">
                      CONTEXTE TROUVÉ
                    </text>
                  </g>
                </svg>
              </div>
              <div key="orbit-draft" className="world-object orbit-fragment orbit-draft" data-orbit={3}>
                <svg viewBox="0 0 250 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect
                    x="1"
                    y="1"
                    width="248"
                    height="218"
                    rx="3"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                    strokeWidth=".8"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    x="22"
                    y="19"
                    width="17"
                    height="19"
                  >
                    <path d="M6 2h8l4 4v16H6z M14 2v5h4M9 12h6m-6 4h6" />
                  </svg>
                  <text x="49" y="32" fill="currentColor" fontSize="10" letterSpacing=".8">
                    FINANCE
                  </text>
                  <path d="M22 46h206M22 176h206" stroke="currentColor" opacity=".25" />
                  <g fill="currentColor">
                    <text x="22" y="68" fontSize="13">
                      <tspan key="Project spend" x="22" dy={0}>
                        Dépenses projet
                      </tspan>
                    </text>
                    <text x="22" y="104" fontSize="9" opacity=".6">
                      {"BUDGET  300 K DH"}
                    </text>
                    <text x="22" y={146} fontSize={30} fontWeight={700}>
                      <tspan key="spend" x="22" dy={0}>
                        248 K DH
                      </tspan>
                    </text>
                    <text x="22" y="198" fontSize="9" letterSpacing=".5">
                      DANS LE BUDGET
                    </text>
                  </g>
                </svg>
              </div>
              <div className="world-object orbit-assistant" data-assistant>
                <svg
                  viewBox="0 0 630 402"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="L'assistant trouve le dernier point projet, analyse les finances et rédige une réponse à Yasmine via la recherche, la finance, la rédaction et la messagerie. Analyse incluse, prête à valider avant envoi."
                >
                  <path
                    d="M1 1h628v400H1z"
                    fill="var(--world-fg)"
                    stroke="var(--world-bg)"
                    strokeWidth=".8"
                  />
                  <g fill="var(--world-bg)">
                    <text x="28" y="43" fontFamily="var(--font-display)" fontWeight="800" fontSize="22">
                      ASSISTANT
                    </text>
                    <text x="602" y="43" textAnchor="end" fontSize="10">
                      Une conversation. Tous vos outils à portée.
                    </text>
                  </g>
                  <g stroke="var(--world-bg)" opacity=".5">
                    <path d="M28 63h574M28 174h574M28 282h574" />
                  </g>
                  <g key="person" color="var(--world-fg)">
                    <circle cx="54" cy={121} r="24" fill="var(--world-bg)" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      x="43"
                      y={110}
                      width="22"
                      height="22"
                    >
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 22v-2a8 8 0 0 1 16 0v2" />
                    </svg>
                  </g>
                  <g key="search" color="var(--world-fg)">
                    <circle cx="54" cy={229} r="24" fill="var(--world-bg)" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      x="43"
                      y={218}
                      width="22"
                      height="22"
                    >
                      <path d="M16 16l6 6M19 10a9 9 0 1 1-18 0a9 9 0 1 1 18 0" />
                    </svg>
                  </g>
                  <g key="document" color="var(--world-fg)">
                    <circle cx="54" cy={337} r="24" fill="var(--world-bg)" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      x="43"
                      y={326}
                      width="22"
                      height="22"
                    >
                      <path d="M6 2h8l4 4v16H6z M14 2v5h4M9 12h6m-6 4h6" />
                    </svg>
                  </g>
                  <g fill="var(--world-bg)" fontSize="18">
                    <text x="112" y="103">
                      <tspan x="112">Trouve le dernier point projet,</tspan>
                      <tspan x="112" dy="25">
                        analyse les finances et rédige
                      </tspan>
                      <tspan x="112" dy="25">
                        une réponse à Yasmine.
                      </tspan>
                    </text>
                    <text x="112" y="225">
                      Travail dans les outils connectés...
                    </text>
                    <text x="112" y="332">
                      Réponse rédigée
                    </text>
                  </g>
                  <g fill="var(--world-bg)" fontSize="12" opacity=".75">
                    <text x="112" y="250">
                      RECHERCHE · FINANCE · RÉDACTION · MAIL
                    </text>
                    <text x="112" y="355">
                      ANALYSE INCLUSE · PRÊT À VALIDER
                    </text>
                  </g>
                  <g className="orbit-ready">
                    <rect
                      x="426"
                      y="316"
                      width="174"
                      height="49"
                      rx="5"
                      stroke="var(--world-bg)"
                      opacity=".7"
                    />
                    <circle cx="451" cy="340" r="13" fill="var(--world-bg)" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      x="443"
                      y="332"
                      width="16"
                      height="16"
                      color="var(--world-fg)"
                    >
                      <path d="M5 12l5 5L20 6" />
                    </svg>
                    <text x="474" y="345" fill="var(--world-bg)" fontSize="13">
                      {"Relire et envoyer →"}
                    </text>
                  </g>
                </svg>
              </div>
              <h3 id="orbit-title" className="world-title">
                <Link href="/work/orbit#main-content" data-cursor="VOIR">
                  PROJET 02
                </Link>
              </h3>
            </div>
            <Link
              className="world-link interaction-link"
              href="/work/orbit#main-content"
              aria-label="Explorer le projet : PROJET 02"
              data-cursor="VOIR"
            >
              {"EXPLORER LE PROJET "}
              <span className="interaction-arrow" aria-hidden="true">
                <svg
                  className="navigation-arrow"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 20 20 4M7 4h13v13" />
                </svg>
              </span>
            </Link>
          </article>
          <article
            key="mesa"
            id="mesa"
            className="project-world world-mesa world-light"
            data-world="mesa"
            data-thread-scene="world-mesa"
            aria-labelledby="mesa-title"
          >
            <p className="world-kicker">03{" / "}Développement web immersif</p>
            <p className="world-description">
              <span className="project-statement-desktop">
                Un site qui se lit comme une expérience : scroll,
                <br />
                mouvement et narration au service de la conversion.
              </span>
              <span className="project-statement-mobile">
                <span key="0">Un site qui se lit comme une expérience :</span>
                <span key="1">scroll, mouvement et narration</span>
                <span key="2">au service de la conversion.</span>
              </span>
            </p>
            <div className="world-composition">
              <MealOpsMotion />
              <div className="world-object mesa-plate" data-meal="plate">
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Cercle immersif — motif de scroll et de focus"
                >
                  <g stroke="currentColor" strokeWidth="1">
                    <circle cx="250" cy="250" r="235" />
                    <circle cx="250" cy="250" r="227" />
                    <circle cx="250" cy="250" r="174" />
                    <circle cx="250" cy="250" r="169" />
                  </g>
                  <g stroke="currentColor" strokeWidth=".5" opacity=".22">
                    <path key="0" d="M250 24v46" transform="rotate(0 250 250)" />
                    <path key="1" d="M250 24v46" transform="rotate(4.5 250 250)" />
                    <path key="2" d="M250 24v46" transform="rotate(9 250 250)" />
                    <path key="3" d="M250 24v46" transform="rotate(13.5 250 250)" />
                    <path key="4" d="M250 24v46" transform="rotate(18 250 250)" />
                    <path key="5" d="M250 24v46" transform="rotate(22.5 250 250)" />
                    <path key="6" d="M250 24v46" transform="rotate(27 250 250)" />
                    <path key="7" d="M250 24v46" transform="rotate(31.5 250 250)" />
                    <path key="8" d="M250 24v46" transform="rotate(36 250 250)" />
                    <path key="9" d="M250 24v46" transform="rotate(40.5 250 250)" />
                    <path key="10" d="M250 24v46" transform="rotate(45 250 250)" />
                    <path key="11" d="M250 24v46" transform="rotate(49.5 250 250)" />
                    <path key="12" d="M250 24v46" transform="rotate(54 250 250)" />
                    <path key="13" d="M250 24v46" transform="rotate(58.5 250 250)" />
                    <path key="14" d="M250 24v46" transform="rotate(63 250 250)" />
                    <path key="15" d="M250 24v46" transform="rotate(67.5 250 250)" />
                    <path key="16" d="M250 24v46" transform="rotate(72 250 250)" />
                    <path key="17" d="M250 24v46" transform="rotate(76.5 250 250)" />
                    <path key="18" d="M250 24v46" transform="rotate(81 250 250)" />
                    <path key="19" d="M250 24v46" transform="rotate(85.5 250 250)" />
                    <path key="20" d="M250 24v46" transform="rotate(90 250 250)" />
                    <path key="21" d="M250 24v46" transform="rotate(94.5 250 250)" />
                    <path key="22" d="M250 24v46" transform="rotate(99 250 250)" />
                    <path key="23" d="M250 24v46" transform="rotate(103.5 250 250)" />
                    <path key="24" d="M250 24v46" transform="rotate(108 250 250)" />
                    <path key="25" d="M250 24v46" transform="rotate(112.5 250 250)" />
                    <path key="26" d="M250 24v46" transform="rotate(117 250 250)" />
                    <path key="27" d="M250 24v46" transform="rotate(121.5 250 250)" />
                    <path key="28" d="M250 24v46" transform="rotate(126 250 250)" />
                    <path key="29" d="M250 24v46" transform="rotate(130.5 250 250)" />
                    <path key="30" d="M250 24v46" transform="rotate(135 250 250)" />
                    <path key="31" d="M250 24v46" transform="rotate(139.5 250 250)" />
                    <path key="32" d="M250 24v46" transform="rotate(144 250 250)" />
                    <path key="33" d="M250 24v46" transform="rotate(148.5 250 250)" />
                    <path key="34" d="M250 24v46" transform="rotate(153 250 250)" />
                    <path key="35" d="M250 24v46" transform="rotate(157.5 250 250)" />
                    <path key="36" d="M250 24v46" transform="rotate(162 250 250)" />
                    <path key="37" d="M250 24v46" transform="rotate(166.5 250 250)" />
                    <path key="38" d="M250 24v46" transform="rotate(171 250 250)" />
                    <path key="39" d="M250 24v46" transform="rotate(175.5 250 250)" />
                    <path key="40" d="M250 24v46" transform="rotate(180 250 250)" />
                    <path key="41" d="M250 24v46" transform="rotate(184.5 250 250)" />
                    <path key="42" d="M250 24v46" transform="rotate(189 250 250)" />
                    <path key="43" d="M250 24v46" transform="rotate(193.5 250 250)" />
                    <path key="44" d="M250 24v46" transform="rotate(198 250 250)" />
                    <path key="45" d="M250 24v46" transform="rotate(202.5 250 250)" />
                    <path key="46" d="M250 24v46" transform="rotate(207 250 250)" />
                    <path key="47" d="M250 24v46" transform="rotate(211.5 250 250)" />
                    <path key="48" d="M250 24v46" transform="rotate(216 250 250)" />
                    <path key="49" d="M250 24v46" transform="rotate(220.5 250 250)" />
                    <path key="50" d="M250 24v46" transform="rotate(225 250 250)" />
                    <path key="51" d="M250 24v46" transform="rotate(229.5 250 250)" />
                    <path key="52" d="M250 24v46" transform="rotate(234 250 250)" />
                    <path key="53" d="M250 24v46" transform="rotate(238.5 250 250)" />
                    <path key="54" d="M250 24v46" transform="rotate(243 250 250)" />
                    <path key="55" d="M250 24v46" transform="rotate(247.5 250 250)" />
                    <path key="56" d="M250 24v46" transform="rotate(252 250 250)" />
                    <path key="57" d="M250 24v46" transform="rotate(256.5 250 250)" />
                    <path key="58" d="M250 24v46" transform="rotate(261 250 250)" />
                    <path key="59" d="M250 24v46" transform="rotate(265.5 250 250)" />
                    <path key="60" d="M250 24v46" transform="rotate(270 250 250)" />
                    <path key="61" d="M250 24v46" transform="rotate(274.5 250 250)" />
                    <path key="62" d="M250 24v46" transform="rotate(279 250 250)" />
                    <path key="63" d="M250 24v46" transform="rotate(283.5 250 250)" />
                    <path key="64" d="M250 24v46" transform="rotate(288 250 250)" />
                    <path key="65" d="M250 24v46" transform="rotate(292.5 250 250)" />
                    <path key="66" d="M250 24v46" transform="rotate(297 250 250)" />
                    <path key="67" d="M250 24v46" transform="rotate(301.5 250 250)" />
                    <path key="68" d="M250 24v46" transform="rotate(306 250 250)" />
                    <path key="69" d="M250 24v46" transform="rotate(310.5 250 250)" />
                    <path key="70" d="M250 24v46" transform="rotate(315 250 250)" />
                    <path key="71" d="M250 24v46" transform="rotate(319.5 250 250)" />
                    <path key="72" d="M250 24v46" transform="rotate(324 250 250)" />
                    <path key="73" d="M250 24v46" transform="rotate(328.5 250 250)" />
                    <path key="74" d="M250 24v46" transform="rotate(333 250 250)" />
                    <path key="75" d="M250 24v46" transform="rotate(337.5 250 250)" />
                    <path key="76" d="M250 24v46" transform="rotate(342 250 250)" />
                    <path key="77" d="M250 24v46" transform="rotate(346.5 250 250)" />
                    <path key="78" d="M250 24v46" transform="rotate(351 250 250)" />
                    <path key="79" d="M250 24v46" transform="rotate(355.5 250 250)" />
                  </g>
                </svg>
              </div>
              <div className="world-object mesa-fork" data-meal="fork">
                <svg
                  viewBox="0 0 90 490"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Repère vertical du parcours immersif"
                >
                  <path
                    d="M18 8h6l2 76h9L37 8h6l2 76h9L56 8h6l2 76h9L75 8h6l1 89c0 18-12 26-22 30l2 332c0 22-28 22-28 0l4-332C23 122 13 113 14 95Z"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M24 98c0 12 12 19 25 19s24-8 24-19M49 135l-1 319"
                    stroke="currentColor"
                    strokeWidth=".7"
                    opacity=".5"
                  />
                </svg>
              </div>
              <div className="world-object mesa-message" data-meal="user">
                <svg
                  viewBox="0 0 270 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Visiteur : je veux ressentir la marque en quelques secondes."
                >
                  <text x="12" y="12" fill="currentColor" fontSize="10">
                    VISITEUR
                  </text>
                  <path
                    d="M14 22h242q12 0 12 12v52q0 12-12 12h-20l-16 9 3-9H14Q2 98 2 86V34Q2 22 14 22Z"
                    fill="var(--world-fg)"
                  />
                  <g fill="var(--world-bg)" fontSize="16">
                    <text x="21" y="52">
                      Montrez-moi
                    </text>
                    <text x="21" y="77">
                      qui vous êtes.
                    </text>
                  </g>
                </svg>
              </div>
              <div className="world-object mesa-reply">
                <svg
                  viewBox="0 0 330 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Le site répond : l'expérience démarre au premier scroll."
                >
                  <path
                    d="M14 2h302q12 0 12 12v48q0 12-12 12H34L16 82l3-8h-5Q2 74 2 62V14Q2 2 14 2Z"
                    fill="var(--world-bg)"
                    stroke="currentColor"
                  />
                  <g fill="currentColor" fontSize="15">
                    <text x="21" y="30">
                      Expérience lancée.
                    </text>
                    <text x="21" y="54">
                      Scrollez pour entrer.
                    </text>
                  </g>
                </svg>
              </div>
              <div
                className="world-object mesa-wallet"
                data-meal="wallet"
                data-thread-scrub
                role="group"
                aria-label="Score de performance du site immersif"
              >
                <span className="mesa-wallet-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 6V3h15v3M2 6h20v15H2zM16 11h6v6h-6zM18 14h1" />
                  </svg>
                  <span className="mesa-wallet-label">LIGHTHOUSE</span>
                </span>
                <span className="mesa-wallet-amount">
                  <span>98 / 100</span>
                  <small className="mesa-wallet-debit">LCP 1,8 s</small>
                </span>
                <span className="mesa-wallet-status">
                  <span className="mesa-wallet-before">AUDIT</span>
                  <span className="mesa-wallet-after">
                    <span className="mesa-paid-check">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    </span>
                    PASS
                  </span>
                </span>
              </div>
              <div className="world-object mesa-ticket" data-meal="ticket">
                <svg
                  viewBox="0 0 240 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Parcours immersif validé : chapitre 03, conversion en cours"
                >
                  <path
                    d="M0 8L5 2L10 8L15 2L20 8L25 2L30 8L35 2L40 8L45 2L50 8L55 2L60 8L65 2L70 8L75 2L80 8L85 2L90 8L95 2L100 8L105 2L110 8L115 2L120 8L125 2L130 8L135 2L140 8L145 2L150 8L155 2L160 8L165 2L170 8L175 2L180 8L185 2L190 8L195 2L200 8L205 2L210 8L215 2L220 8L225 2L230 8L235 2L240 8V302L235 308L230 302L225 308L220 302L215 308L210 302L205 308L200 302L195 308L190 302L185 308L180 302L175 308L170 302L165 308L160 302L155 308L150 302L145 308L140 302L135 308L130 302L125 308L120 302L115 308L110 302L105 308L100 302L95 308L90 302L85 308L80 302L75 308L70 302L65 308L60 302L55 308L50 302L45 308L40 302L35 308L30 302L25 308L20 302L15 308L10 302L5 308L0 302Z"
                    fill="var(--world-bg)"
                    stroke="color-mix(in srgb, var(--world-fg) 12%, var(--world-bg))"
                    strokeWidth=".6"
                  />
                  <g fill="var(--world-fg)" fontSize="12">
                    <text x="23" y="47" fontWeight="500">
                      CHAPITRE VALIDÉ
                    </text>
                    <text x="23" y="97">
                      Site immersif
                    </text>
                    <text x="23" y="137">
                      Scroll story
                    </text>
                    <text x="204" y="137">
                      03
                    </text>
                    <text x="23" y="163">
                      Engagement
                    </text>
                    <text x="217" y="163" textAnchor="end">
                      +2,4×
                    </text>
                    <text x="23" y="249">
                      Continuez.
                    </text>
                  </g>
                  <path d="M23 67h23M23 188h194" stroke="var(--world-fg)" strokeWidth=".7" />
                </svg>
              </div>
              <div className="world-object mesa-bag" data-meal="bag">
                <svg
                  viewBox="0 0 250 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Déploiement du site immersif en cours"
                >
                  <g stroke="currentColor" strokeWidth="1.2" fill="var(--world-bg)">
                    <path d="M79 88V52a46 46 0 0 1 92 0v36h-8V52a38 38 0 0 0-76 0v36Z" />
                    <path d="M32 72h186l14 226H18Z" />
                  </g>
                  <g stroke="currentColor" strokeWidth=".75" opacity=".5">
                    <path d="M37 81h176M27 283h196M43 92l-8 177M207 92l8 177" />
                    <circle cx="82" cy="88" r="3" />
                    <circle cx="168" cy="88" r="3" />
                  </g>
                  <g stroke="currentColor" strokeWidth="1.1">
                    <circle cx="125" cy="161" r="27" />
                    <circle cx="125" cy="161" r="19" />
                    <path d="M89 143v12m-4-12v12m8-12v12m-8 0q4 7 8 0m-4 4v21M162 143v37m0-37q-9 15 0 19" />
                  </g>
                  <g className="mesa-delivery-status" fill="currentColor" textAnchor="middle" fontSize="11">
                    <text x="125" y="215">
                      LIVE
                    </text>
                    <text x="125" y="236" fontSize="8" opacity=".55">
                      Mise en ligne
                    </text>
                  </g>
                </svg>
              </div>
              <div
                className="world-object mesa-dashboard"
                data-meal="dashboard"
                data-thread-scrub
                role="group"
                aria-label="Analytics du site immersif"
              >
                <p>ANALYTICS / AUJOURD&apos;HUI</p>
                <div className="mesa-dashboard-summary">
                  <div>
                    <strong>+38 %</strong>
                    <span>Conv. mobile</span>
                  </div>
                  <div>
                    <strong>1,8 s</strong>
                    <span>LCP médian</span>
                  </div>
                  <svg viewBox="0 0 70 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g fill="currentColor">
                      <rect key="9" x={0} y={27} width="9" height={9} opacity={0.3} />
                      <rect key="13" x={14} y={23} width="9" height={13} opacity={0.5} />
                      <rect key="19" x={28} y={17} width="9" height={19} opacity={0.7} />
                      <rect key="26" x={42} y={10} width="9" height={26} opacity={0.9000000000000001} />
                      <rect key="34" x={56} y={2} width="9" height={34} fill="var(--signal)" opacity={1} />
                    </g>
                  </svg>
                </div>
              </div>
              <h3 id="mesa-title" className="world-title">
                <Link href="/work/immersion#main-content" data-cursor="VOIR">
                  PROJET 03
                </Link>
              </h3>
            </div>
            <Link
              className="world-link interaction-link"
              href="/work/immersion#main-content"
              aria-label="Explorer le projet : site immersif"
              data-cursor="VOIR"
            >
              {"EXPLORER LE PROJET "}
              <span className="interaction-arrow" aria-hidden="true">
                <svg
                  className="navigation-arrow"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 20 20 4M7 4h13v13" />
                </svg>
              </span>
            </Link>
          </article>
          <PapertrailScanMotion key="papertrail">
            <p className="world-kicker">04{" / "}Automatisation documentaire</p>
            <div className="world-composition">
              <div className="scan-ledger scan-ledger-top">
                <svg viewBox="0 0 760 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <g stroke="currentColor" strokeWidth=".8">
                    <path d="M1 1h758v418H1zM1 63h758M1 105h758M485 1v62M398 63v356M461 63v356M548 63v356M688 63v356" />
                    <path key="150" d="M1 150h758" />
                    <path key="193" d="M1 193h758" />
                    <path key="236" d="M1 236h758" />
                    <path key="279" d="M1 279h758" />
                    <path key="322" d="M1 322h758" />
                    <path key="365" d="M1 365h758" />
                  </g>
                  <g fill="currentColor" fontSize="14">
                    <text x="24" y="38" fontSize="20">
                      FACTURE
                    </text>
                    <text x="575" y="38">
                      N°
                    </text>
                    <text x="28" y="89">
                      LIBELLÉ
                    </text>
                    <text x="416" y="89">
                      QTÉ
                    </text>
                    <text x="480" y="89">
                      P.U.
                    </text>
                    <text x="597" y="89">
                      MONTANT
                    </text>
                  </g>
                </svg>
              </div>
              <div className="scan-ledger scan-ledger-bottom">
                <svg viewBox="0 0 700 250" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <g stroke="currentColor" strokeWidth=".8">
                    <path d="M1 1h698v248H1zM1 50h698M1 95h698M1 140h698M395 1v248M443 1v248M680 1v248" />
                  </g>
                  <g fill="currentColor" fontSize="14">
                    <text x="20" y="32">
                      TOTAL HT
                    </text>
                    <text x="20" y="78">
                      TVA
                    </text>
                    <text x="20" y="124">
                      TOTAL TTC
                    </text>
                    <text x="501" y="32">
                      1 280,00
                    </text>
                    <text x="534" y="78">
                      0,00
                    </text>
                    <text x="501" y="124">
                      1 280,00
                    </text>
                  </g>
                </svg>
              </div>
              <h3 className="world-title" id="papertrail-scan-title">
                <Link href="/work/papertrail#main-content" data-cursor="VOIR">
                  PROJET 04
                </Link>
              </h3>
              <div className="scan-paper scan-paper-acme">
                <svg
                  viewBox="0 0 400 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Facture ATLAS NÉGOCE"
                >
                  <path d="M1 1h398v538H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500">
                      ATLAS NÉGOCE
                    </text>
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g fill="var(--black)" opacity=".25">
                    <path d="M36 330h126v5H36z M36 350h97v5H36z M36 370h97v5H36z M36 390h126v5H36z M36 410h97v5H36z M36 430h97v5H36z M200 330h126v5H200z M200 350h97v5H200z M200 370h97v5H200z M200 390h126v5H200z M200 410h97v5H200z M200 430h97v5H200z" />
                  </g>
                </svg>
              </div>
              <div className="scan-paper scan-paper-river">
                <svg
                  viewBox="0 0 400 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label={"Facture OUED & CIE"}
                >
                  <path d="M1 1h398v538H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500">
                      {"OUED & CIE"}
                    </text>
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g fill="var(--black)" opacity=".25">
                    <path d="M36 330h126v5H36z M36 350h97v5H36z M36 370h97v5H36z M36 390h126v5H36z M36 410h97v5H36z M36 430h97v5H36z M200 330h126v5H200z M200 350h97v5H200z M200 370h97v5H200z M200 390h126v5H200z M200 410h97v5H200z M200 430h97v5H200z" />
                  </g>
                </svg>
              </div>
              <div className="scan-paper scan-paper-river scan-paper-river-cover" aria-hidden="true">
                <svg
                  viewBox="0 0 400 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label={"Facture OUED & CIE"}
                >
                  <path d="M1 1h398v538H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500">
                      {"OUED & CIE"}
                    </text>
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g fill="var(--black)" opacity=".25">
                    <path d="M36 330h126v5H36z M36 350h97v5H36z M36 370h97v5H36z M36 390h126v5H36z M36 410h97v5H36z M36 430h97v5H36z M200 330h126v5H200z M200 350h97v5H200z M200 370h97v5H200z M200 390h126v5H200z M200 410h97v5H200z M200 430h97v5H200z" />
                  </g>
                </svg>
              </div>
              <div className="scan-paper scan-paper-front">
                <svg viewBox="0 0 400 540" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M1 1h398v538H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500" />
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g fill="var(--black)" opacity=".25">
                    <path d="M36 330h126v5H36z M36 350h97v5H36z M36 370h97v5H36z M36 390h126v5H36z M36 410h97v5H36z M36 430h97v5H36z M200 330h126v5H200z M200 350h97v5H200z M200 370h97v5H200z M200 390h126v5H200z M200 410h97v5H200z M200 430h97v5H200z" />
                  </g>
                </svg>
              </div>
              <div className="scan-paper scan-paper-main">
                <svg
                  viewBox="0 0 400 455"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Facture ANFA DISTRIB FAC-1042, total 1 280,00, vérifiée"
                >
                  <path d="M1 1h398v453H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500">
                      ANFA DISTRIB
                    </text>
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g className="scan-fields" fill="var(--black)">
                    <text x="132" y="142" fontSize="9">
                      N° facture
                    </text>
                    <text x="132" y="166" fontSize="16">
                      FAC-1042
                    </text>
                    <text x="292" y="311" fontSize="9">
                      Total
                    </text>
                    <text x="292" y="333" fontSize="14">
                      1 280,00
                    </text>
                    <text x="36" y="374" fontSize="9">
                      Statut
                    </text>
                    <text x="36" y="399" fontSize="14">
                      Vérifiée
                    </text>
                  </g>
                  <g className="scan-field-boxes" fill="none" stroke="var(--signal)" strokeWidth="1.4">
                    <path pathLength="1" data-scan-field="invoice" d="M124 146h128v30H124z" />
                    <path pathLength="1" data-scan-field="total" d="M287 297h90v45h-90z" />
                    <path pathLength="1" data-scan-field="status" d="M31 381h88v27H31z" />
                  </g>
                  <g className="scan-invoice-beam" aria-hidden="true">
                    <path d="M0 2v451" stroke="var(--signal)" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
              <div className="scan-paper scan-paper-rejected">
                <svg
                  viewBox="0 0 400 540"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Facture MARINA SARL, rejetée"
                >
                  <path d="M1 1h398v538H1z" fill="var(--sheet)" stroke="var(--sheet-edge)" strokeWidth=".8" />
                  <g fill="var(--black)">
                    <text x="36" y="39" fontSize="14" fontWeight="500">
                      MARINA SARL
                    </text>
                    <text x="36" y="49" fontSize="5.5" letterSpacing="1" opacity=".6">
                      SARL
                    </text>
                    <g fontSize="6.5">
                      <text x="313" y="41">
                        FOURNITURES
                      </text>
                      <text x="313" y="51">
                        ÉQUIPEMENT
                      </text>
                      <text x="313" y="61">
                        SOLUTIONS
                      </text>
                    </g>
                    <text
                      x="36"
                      y="108"
                      fontSize="26"
                      fontFamily="var(--font-display)"
                      fontWeight="650"
                      letterSpacing="1.4"
                    >
                      FACTURE
                    </text>
                  </g>
                  <g stroke="var(--black)" strokeWidth=".6" opacity=".65">
                    <path d="M36 77h328M36 125h328M36 190h328v103H36zM36 210h328M172 190v103M211 190v103M278 190v103" />
                  </g>
                  <g fill="var(--black)" opacity=".28">
                    <path d="M36 139h73v5H36z M36 150h46v5H36z M36 161h54v5H36z" />
                    <path d="M253 140h110v4H253z M253 151h97v4H253z M253 162h83v4H253z" />
                    <path d="M40 221h88v5H40z M181 221h16v5h-16z M225 221h28v5h-28z M302 221h30v5H302z M40 239h62v5H40z M181 239h16v5h-16z M225 239h28v5h-28z M302 239h43v5H302z M40 257h88v5H40z M181 257h16v5h-16z M225 257h28v5h-28z M302 257h30v5H302z M40 275h62v5H40z M181 275h16v5h-16z M225 275h28v5h-28z M302 275h43v5H302z" />
                    <path d="M176 376h93v4H176z M176 387h80v4H176z M176 398h67v4H176z" />
                  </g>
                  <g fill="var(--black)" fontSize="7.5" letterSpacing=".5">
                    <text x="39" y="204">
                      LIBELLÉ
                    </text>
                    <text x="181" y="204">
                      QTÉ
                    </text>
                    <text x="227" y="204">
                      P.U.
                    </text>
                    <text x="303" y="204">
                      MONTANT
                    </text>
                  </g>
                  <g fill="var(--black)" opacity=".25">
                    <path d="M36 330h126v5H36z M36 350h97v5H36z M36 370h97v5H36z M36 390h126v5H36z M36 410h97v5H36z M36 430h97v5H36z M200 330h126v5H200z M200 350h97v5H200z M200 370h97v5H200z M200 390h126v5H200z M200 410h97v5H200z M200 430h97v5H200z" />
                  </g>
                  <g transform="translate(97 343) rotate(-12)" stroke="var(--signal)" fill="none">
                    <rect x="0" y="0" width="208" height="55" rx="2" strokeWidth="2" />
                    <rect x="5" y="5" width="198" height="45" rx="1" strokeWidth=".6" />
                    <text
                      x="104"
                      y="36"
                      textAnchor="middle"
                      fill="var(--signal)"
                      stroke="none"
                      fontFamily="var(--font-display)"
                      fontSize="28"
                      fontWeight="700"
                    >
                      REJETÉE
                    </text>
                  </g>
                </svg>
              </div>
              <div className="scan-overlay">
                <svg
                  viewBox="0 0 1488 1058"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <g className="scan-frame">
                    <text className="scan-state-scanning" x="728" y="424" fill="var(--ivory)" fontSize="14">
                      ANALYSE...
                    </text>
                  </g>
                  <g
                    className="scan-connectors"
                    fill="none"
                    stroke="var(--signal)"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                  >
                    <path data-scan-connector="invoice" />
                    <path data-scan-connector="total" />
                    <path data-scan-connector="status" />
                  </g>
                </svg>
              </div>
              <div className="scan-extracted" aria-label="Valeurs extraites de la facture">
                <p>VALEURS EXTRAITES</p>
                <dl>
                  <div data-scan-result="invoice">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 2h8l4 4v16H6z M14 2v5h4M9 12h6m-6 4h6" />
                    </svg>
                    <dt>N° facture</dt>
                    <dd>FAC-1042</dd>
                  </div>
                  <div data-scan-result="total">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" />
                      <path
                        d="M25 12c-3-4-12-2-11 3 1 4 11 3 12 8 1 5-8 8-13 3M20 8v24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <dt>Total</dt>
                    <dd>1 280,00</dd>
                  </div>
                  <div data-scan-result="status">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" />
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        x="8"
                        y="8"
                        width="24"
                        height="24"
                      >
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    </svg>
                    <dt>Statut</dt>
                    <dd>Vérifiée</dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="world-description">
              <span className="project-statement-desktop">
                Importez vos documents comptables et transformez-les
                <br />
                en données structurées, vérifiées et prêtes à l'emploi.
              </span>
              <span className="project-statement-mobile">
                <span key="0">Importez vos documents comptables</span>
                <span key="1">et transformez-les en données</span>
                <span key="2">vérifiées, prêtes à l'emploi.</span>
              </span>
            </p>
            <Link
              className="world-link interaction-link"
              href="/work/papertrail#main-content"
              aria-label="Explorer le projet : PROJET 04"
              data-cursor="VOIR"
            >
              {"EXPLORER LE PROJET "}
              <span className="interaction-arrow" aria-hidden="true">
                <svg
                  className="navigation-arrow"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 20 20 4M7 4h13v13" />
                </svg>
              </span>
            </Link>
          </PapertrailScanMotion>
          <article
            key="scribe"
            id="scribe"
            className="project-world world-scribe world-light"
            data-world="scribe"
            data-thread-scene="world-scribe"
            aria-labelledby="scribe-title"
          >
            <p className="world-kicker">05{" / "}Intelligence des réunions</p>
            <p className="world-description">
              <span className="project-statement-desktop">
                Transformez vos réunions en documents structurés :
                <br />
                cahiers des charges, procédures et chartes projet.
              </span>
              <span className="project-statement-mobile">
                <span key="0">Transformez vos réunions en</span>
                <span key="1">documents structurés : cahiers des</span>
                <span key="2">charges, procédures, chartes projet.</span>
              </span>
            </p>
            <div className="world-composition">
              <ScribeMotion>
                <div className="world-object scribe-audio" data-scribe="recording" data-thread-scrub>
                  <svg
                    viewBox="0 0 440 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Lecture de l'enregistrement : Lancement.mp4, 24 minutes 16 secondes."
                  >
                    <rect
                      x="1"
                      y="1"
                      width="438"
                      height="120"
                      rx="3"
                      stroke="currentColor"
                      fill="var(--world-bg)"
                    />
                    <circle cx="45" cy="61" r="24" fill="currentColor" />
                    <path className="scribe-play-icon" d="m39 52 16 9-16 9z" fill="var(--world-bg)" />
                    <path
                      className="scribe-pause-icon"
                      d="M38 52h5v18h-5zM47 52h5v18h-5z"
                      fill="var(--world-bg)"
                    />
                    <g fill="currentColor" fontSize="13">
                      <text x="96" y="37">
                        Lancement.mp4
                      </text>
                      <text x="402" y="37" textAnchor="end" opacity=".6">
                        00:00
                      </text>
                    </g>
                    <defs>
                      <clipPath id="scribe-waveform-clip">
                        <rect x="97" y="46" width="0" height="54" />
                      </clipPath>
                    </defs>
                    <g key="false" stroke="currentColor" strokeWidth="2" opacity={0.25}>
                      <path d="M98 63v20 M102.7 59.5v27 M107.4 64.5v17 M112.1 58v30 M116.8 59v28 M121.5 62.5v21 M126.2 56.5v33 M130.9 61.5v23 M135.6 62.5v21 M140.3 58.5v29 M145 66v14 M149.7 63.5v19 M154.4 63v20 M159.1 69.5v7 M163.8 64v18 M168.5 66.5v13 M173.2 69v8 M177.9 62v22 M182.60000000000002 66.5v13 M187.3 64.5v17 M192 59.5v27 M196.7 65v16 M201.4 59.5v27 M206.10000000000002 58v30 M210.8 63v20 M215.5 56.5v33 M220.2 60.5v25 M224.9 63v20 M229.6 58v30 M234.3 65v16 M239 64v18 M243.70000000000002 62v22 M248.4 69v8 M253.1 64.5v17 M257.8 65.5v15 M262.5 69.5v7 M267.20000000000005 63v20 M271.9 66.5v13 M276.6 66.5v13 M281.3 60v26 M286 65v16 M290.70000000000005 61v24 M295.4 58v30 M300.1 63v20 M304.8 57.5v31 M309.5 59v28 M314.20000000000005 63v20 M318.9 57.5v31 M323.6 63.5v19 M328.3 64.5v17 M333 60.5v25 M337.70000000000005 68v10 M342.4 65v16 M347.1 64.5v17 M351.8 70v6 M356.5 63.5v19 M361.2 66v14 M365.90000000000003 67.5v11 M370.6 60.5v25 M375.3 65v16 M380 62.5v21 M384.7 58v30 M389.40000000000003 63.5v19 M394.1 58.5v29 M398.8 58v30" />
                    </g>
                    <g
                      key="true"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity={1}
                      clipPath="url(#scribe-waveform-clip)"
                    >
                      <path d="M98 63v20 M102.7 59.5v27 M107.4 64.5v17 M112.1 58v30 M116.8 59v28 M121.5 62.5v21 M126.2 56.5v33 M130.9 61.5v23 M135.6 62.5v21 M140.3 58.5v29 M145 66v14 M149.7 63.5v19 M154.4 63v20 M159.1 69.5v7 M163.8 64v18 M168.5 66.5v13 M173.2 69v8 M177.9 62v22 M182.60000000000002 66.5v13 M187.3 64.5v17 M192 59.5v27 M196.7 65v16 M201.4 59.5v27 M206.10000000000002 58v30 M210.8 63v20 M215.5 56.5v33 M220.2 60.5v25 M224.9 63v20 M229.6 58v30 M234.3 65v16 M239 64v18 M243.70000000000002 62v22 M248.4 69v8 M253.1 64.5v17 M257.8 65.5v15 M262.5 69.5v7 M267.20000000000005 63v20 M271.9 66.5v13 M276.6 66.5v13 M281.3 60v26 M286 65v16 M290.70000000000005 61v24 M295.4 58v30 M300.1 63v20 M304.8 57.5v31 M309.5 59v28 M314.20000000000005 63v20 M318.9 57.5v31 M323.6 63.5v19 M328.3 64.5v17 M333 60.5v25 M337.70000000000005 68v10 M342.4 65v16 M347.1 64.5v17 M351.8 70v6 M356.5 63.5v19 M361.2 66v14 M365.90000000000003 67.5v11 M370.6 60.5v25 M375.3 65v16 M380 62.5v21 M384.7 58v30 M389.40000000000003 63.5v19 M394.1 58.5v29 M398.8 58v30" />
                    </g>
                    <path className="scribe-playhead" d="M97 51v44" stroke="var(--signal)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="world-object scribe-analysis" data-scribe="analysis">
                  <svg
                    viewBox="0 0 405 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="L'IA analyse la réunion pour identifier objectifs, responsables et décisions"
                  >
                    <rect x="1" y="1" width="403" height="98" rx="5" fill="var(--world-fg)" />
                    <g color="var(--world-bg)">
                      <path
                        d="M35 38q0 12 12 12-12 0-12 12 0-12-12-12 12 0 12-12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <g fill="currentColor" fontSize="13" letterSpacing="1">
                        <text className="scribe-analysis-pending" x="69" y="35">
                          ANALYSE IA / PRÊTE
                        </text>
                        <text className="scribe-analysis-complete" x="69" y="35">
                          ANALYSE IA / TERMINÉE
                        </text>
                      </g>
                      <path d="M69 51h251" stroke="currentColor" opacity=".45" />
                      <text x="69" y="77" fill="currentColor" fontSize="14">
                        Objectifs · Responsables · Décisions
                      </text>
                      <g className="scribe-analysis-complete">
                        <circle cx="367" cy="50" r="16" stroke="currentColor" />
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          x="355"
                          y="38"
                          width="24"
                          height="24"
                        >
                          <path d="M5 12l5 5L20 6" />
                        </svg>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="world-object scribe-charter" data-scribe="document" data-thread-scrub>
                  <svg
                    viewBox="0 0 440 430"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Charte projet générée : objectif, responsables et décisions clés. Une révision ajoute l'étape de validation."
                  >
                    <path d="M1 8h432v421H1Z" fill="var(--world-bg)" stroke="currentColor" />
                    <path d="M8 1h431v421H8Z" fill="var(--world-bg)" stroke="currentColor" />
                    <g fill="currentColor" fontSize="12">
                      <text x="35" y="37">
                        CHARTE PROJET
                      </text>
                      <text x="252" y="37">
                        CHARTE
                      </text>
                      <text x="310" y="37" opacity=".5">
                        / SOP / BRD
                      </text>
                    </g>
                    <path d="M252 46h46" stroke="currentColor" />
                    <path
                      d="M35 62h373M35 159h373M35 258h373M35 361h373"
                      stroke="currentColor"
                      opacity=".35"
                    />
                    <g className="scribe-document-content" fill="currentColor">
                      <g key="96" className="scribe-generated-line" data-writing-delay={0.12}>
                        <text x={35} y={96} fontSize={14}>
                          1. OBJECTIF
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M35 82v17"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="119" className="scribe-generated-line" data-writing-delay={0.36}>
                        <text x={61} y={119} fontSize={12}>
                          Simplifier la validation des accès
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M61 107v15"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="137" className="scribe-generated-line" data-writing-delay={0.6}>
                        <text x={61} y={137} fontSize={12}>
                          partenaires avant le lancement.
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M61 125v15"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="192" className="scribe-generated-line" data-writing-delay={0.9}>
                        <text x={35} y={192} fontSize={14}>
                          2. RESPONSABLES
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M35 178v17"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="218" className="scribe-generated-line" data-writing-delay={1.14}>
                        <text x={61} y={218} fontSize={12}>
                          Les opérations pilotent la validation
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M61 206v15"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="236" className="scribe-generated-line" data-writing-delay={1.38}>
                        <text x={61} y={236} fontSize={12}>
                          et le déploiement.
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M61 224v15"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="289" className="scribe-generated-line" data-writing-delay={1.68}>
                        <text x={35} y={289} fontSize={14}>
                          3. DÉCISIONS CLÉS
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M35 275v17"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g key="316" className="scribe-generated-line" data-writing-delay={1.92}>
                        <text x={61} y={316} fontSize={12}>
                          Ensuite : revoir le workflow et le planning.
                        </text>
                        <path
                          className="scribe-writing-cursor"
                          d="M61 304v15"
                          stroke="var(--signal)"
                          strokeWidth="1.5"
                        />
                      </g>
                      <g className="scribe-revised-line" fontSize="12">
                        <path d="M59 325h327v19H59Z" fill="var(--signal)" opacity=".13" />
                        <text x="61" y="339">
                          Validation requise avant le lancement.
                        </text>
                      </g>
                    </g>
                    <g className="scribe-document-footer">
                      <g fill="currentColor" fontSize="10" opacity=".65">
                        <text className="scribe-version-initial" x="35" y="391">
                          v1.0 / Brouillon prêt
                        </text>
                        <text className="scribe-version-revised" x="35" y="391">
                          v2.0 / Mise à jour
                        </text>
                        <text x="278" y="391">
                          Généré par l'assistant
                        </text>
                      </g>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        x="409"
                        y="380"
                        width="14"
                        height="14"
                      >
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    </g>
                  </svg>
                </div>
                <div className="world-object scribe-request" data-scribe="request">
                  <svg
                    viewBox="0 0 244 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Demande de révision : ajoute une étape de validation."
                  >
                    <path
                      d="M8 1h228q7 0 7 7v48q0 7-7 7H28L11 76l2-13H8q-7 0-7-7V8q0-7 7-7Z"
                      fill="var(--world-fg)"
                    />
                    <text x="25" y="37" fill="var(--world-bg)" fontSize="15">
                      Ajoute une étape de validation.
                    </text>
                  </svg>
                </div>
                <div className="world-object scribe-reply" data-scribe="revision">
                  <svg
                    viewBox="0 0 232 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="L'assistant répond : mis à jour en version 2."
                  >
                    <path
                      d="M8 1h216q7 0 7 7v48q0 7-7 7H43L27 76V63H8q-7 0-7-7V8q0-7 7-7Z"
                      fill="var(--world-bg)"
                      stroke="currentColor"
                    />
                    <path
                      d="M28 22q0 10 10 10-10 0-10 10 0-10-10-10 10 0 10-10Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <text x="54" y="37" fill="currentColor" fontSize="15">
                      Mis à jour en v2.
                    </text>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      x="197"
                      y="23"
                      width="18"
                      height="18"
                    >
                      <path d="M5 12l5 5L20 6" />
                    </svg>
                  </svg>
                </div>
              </ScribeMotion>
              <h3 id="scribe-title" className="world-title">
                <Link href="/work/scribe#main-content" data-cursor="VOIR">
                  PROJET 05
                </Link>
              </h3>
            </div>
            <Link
              className="world-link interaction-link"
              href="/work/scribe#main-content"
              aria-label="Explorer le projet : PROJET 05"
              data-cursor="VOIR"
            >
              {"EXPLORER LE PROJET "}
              <span className="interaction-arrow" aria-hidden="true">
                <svg
                  className="navigation-arrow"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 20 20 4M7 4h13v13" />
                </svg>
              </span>
            </Link>
          </article>
          <CreditFlowMotion key="creditflow">
            <div className="credit-field">
              <p className="world-kicker">06{" / "}Financement digital</p>
              <p className="world-description">
                <span className="project-statement-desktop">
                  Demandez un crédit professionnel, déposez vos documents
                  <br />
                  financiers et passez de l'éligibilité au décaissement.
                </span>
                <span className="project-statement-mobile">
                  <span key="0">Demandez un crédit professionnel,</span>
                  <span key="1">déposez vos documents financiers,</span>
                  <span key="2">de l'éligibilité au décaissement.</span>
                </span>
              </p>
              <p className="sr-only">
                Parcours de financement professionnel : demande, documents, analyse financière, éligibilité, accord
                et décaissement.
              </p>
              <div className="world-composition">
                <div className="credit-document credit-pan" data-credit-pan>
                  <svg
                    viewBox="0 0 300 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Attestation ICE avec informations masquées"
                  >
                    <rect x="1" y="1" width="298" height="158" rx="5" className="credit-paper" />
                    <g fill="currentColor">
                      <text className="credit-paper-heading" x="20" y="39" fontSize="30">
                        ICE
                      </text>
                      <g fontSize="8" textAnchor="end">
                        <text x="280" y="25">
                          IDENTIFIANT COMMUN
                        </text>
                        <text x="280" y="38">
                          DE L'ENTREPRISE
                        </text>
                      </g>
                      <text x="90" y="77" fontSize="7" opacity=".55">
                        RAISON SOCIALE
                      </text>
                      <text x="90" y="93" fontSize="11">
                        NOM MASQUÉ
                      </text>
                      <text x="90" y="119" fontSize="16" letterSpacing="1">
                        •••••1234•
                      </text>
                      <text x="90" y="140" fontSize="7" opacity=".55">
                        FICHE D'IDENTITÉ
                      </text>
                    </g>
                    <path d="M20 53h260" className="credit-paper-rule" />
                    <rect x="20" y="69" width="51" height="71" rx="1" fill="currentColor" opacity=".06" />
                    <g fill="currentColor" opacity=".24">
                      <circle cx="45.5" cy="92" r="11" />
                      <path d="M27 127v-7a18.5 18.5 0 0 1 37 0v7z" />
                    </g>
                    <g className="credit-scan" aria-hidden="true">
                      <path d="M0 6v148" stroke="var(--signal)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="credit-document credit-gst" data-credit-gst>
                  <svg
                    viewBox="0 0 270 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Déclaration de TVA avec période, identifiant fiscal masqué et récapitulatif"
                  >
                    <rect x="1" y="1" width="268" height="388" className="credit-paper" />
                    <g fill="currentColor">
                      <text className="credit-paper-heading" x="24" y="54" fontSize="40">
                        TVA
                      </text>
                      <g fontSize="9" textAnchor="end">
                        <text x="246" y="30">
                          DÉCLARATION
                        </text>
                        <text x="246" y="46">
                          RÉGIME MENSUEL
                        </text>
                      </g>
                      <g fontSize="8" opacity=".55">
                        <text x="24" y="99">
                          PÉRIODE
                        </text>
                        <text x="246" y="99" textAnchor="end">
                          STATUT
                        </text>
                        <text x="24" y="162">
                          IF
                        </text>
                      </g>
                      <g fontSize="13">
                        <text x="24" y="119">
                          EX. 2025
                        </text>
                        <text x="246" y="119" textAnchor="end">
                          DÉPOSÉE
                        </text>
                        <text x="24" y="184" letterSpacing="2">
                          •••••••••••••••
                        </text>
                      </g>
                      <text x="24" y="222" fontSize="11" fontWeight="500">
                        RÉCAPITULATIF
                      </text>
                      <g fontSize="8" opacity=".55">
                        <text x="24" y="247">
                          LIBELLÉ
                        </text>
                        <text x="246" y="247" textAnchor="end">
                          MONTANT
                        </text>
                      </g>
                      <g key="Outward supplies" fontSize="11">
                        <text x="24" y={272}>
                          Chiffre d'affaires
                        </text>
                        <text x="246" y={272} textAnchor="end">
                          •••
                        </text>
                      </g>
                      <g key="Input tax credit" fontSize="11">
                        <text x="24" y={299}>
                          TVA déductible
                        </text>
                        <text x="246" y={299} textAnchor="end">
                          •••
                        </text>
                      </g>
                      <g key="Tax paid" fontSize="11">
                        <text x="24" y={326}>
                          TVA payée
                        </text>
                        <text x="246" y={326} textAnchor="end">
                          •••
                        </text>
                      </g>
                      <text x="24" y="370" fontSize="8" opacity=".55">
                        DÉCLARATION MENSUELLE
                      </text>
                      <text x="246" y="370" fontSize="8" textAnchor="end" opacity=".55">
                        01 / 01
                      </text>
                    </g>
                    <path d="M24 72h222M24 139h222M24 233h222M24 348h222" className="credit-paper-rule" />
                    <g className="credit-scan" aria-hidden="true">
                      <path d="M0 10v378" stroke="var(--signal)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="credit-application">
                  <p>DEMANDE / 0248</p>
                  <div>
                    <span>MONTANT DEMANDÉ</span>
                    <strong>2,5 M DH</strong>
                  </div>
                </div>
                <div className="credit-assessment" data-credit-assessment>
                  <p>ANALYSE FINANCIÈRE</p>
                  <dl>
                    <div>
                      <dt>CA</dt>
                      <dd data-credit-value>14,2 M DH</dd>
                      <dd className="credit-period">
                        <small>Annuel</small>
                      </dd>
                    </div>
                    <div>
                      <dt>RÉSULTAT</dt>
                      <dd data-credit-value>1,86 M DH</dd>
                      <dd className="credit-period">
                        <small>Annuel</small>
                      </dd>
                    </div>
                    <div>
                      <dt>TRÉSORERIE</dt>
                      <dd data-credit-value>STABLE</dd>
                      <dd className="credit-period">
                        <small>6 mois</small>
                      </dd>
                    </div>
                    <div>
                      <dt>SCORE</dt>
                      <dd data-credit-value>742</dd>
                      <dd className="credit-period">
                        <small>Score crédit</small>
                      </dd>
                    </div>
                  </dl>
                </div>
                <h3 id="creditflow-title" className="credit-title">
                  <Link href="/work/crediflow#main-content" data-cursor="VOIR">
                    PROJET 06
                  </Link>
                </h3>
                <div className="credit-document credit-itr" data-credit-itr>
                  <svg
                    viewBox="0 0 420 310"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Trois exercices d'impôt sur les sociétés"
                  >
                    <g key="22/23" transform="translate(-10 -20) rotate(-6 210 165)">
                      <path d="M1 23H168V8q0-7 7-7h65q7 0 7 7v15H419V309H1Z" className="credit-paper-back" />
                      <text x={181} y="17" fill="currentColor" fontSize="9">
                        {"EX. "}22/23
                      </text>
                    </g>
                    <g key="23/24" transform="translate(-2 -10) rotate(-3 210 165)">
                      <path
                        d="M1 23H247V8q0-7 7-7h65q7 0 7 7v15H419V309H1Z"
                        className="credit-paper-middle"
                      />
                      <text x={260} y="17" fill="currentColor" fontSize="9">
                        {"EX. "}23/24
                      </text>
                    </g>
                    <g key="24/25">
                      <path d="M1 23H326V8q0-7 7-7h65q7 0 7 7v15H419V309H1Z" className="credit-paper" />
                      <text x={339} y="17" fill="currentColor" fontSize="9">
                        {"EX. "}24/25
                      </text>
                    </g>
                    <g fill="currentColor">
                      <text className="credit-paper-heading" x="32" y="73" fontSize="31">
                        IS
                      </text>
                      <g fontSize="9">
                        <text x="283" y="59">
                          IMPÔT SUR LES SOCIÉTÉS
                        </text>
                        <text x="320" y="76">
                          3 EXERCICES
                        </text>
                        <text x="32" y="126">
                          CONTRIBUABLE
                        </text>
                        <text x="32" y="157">
                          RÉGIME
                        </text>
                        <text x="32" y="188">
                          STATUT
                        </text>
                        <text x="139" y="188">
                          DÉPOSÉE
                        </text>
                      </g>
                    </g>
                    <path
                      d="M32 93h360M124 128h190M124 159h112m12 0h112M32 204h360"
                      className="credit-paper-rule"
                    />
                    <rect key="0" x="32" y={221} width={290} height="6" fill="currentColor" opacity=".16" />
                    <rect key="1" x="32" y={234} width={328} height="6" fill="currentColor" opacity=".16" />
                    <rect key="2" x="32" y={247} width={317} height="6" fill="currentColor" opacity=".16" />
                    <rect key="3" x="32" y={260} width={245} height="6" fill="currentColor" opacity=".16" />
                    <rect key="4" x="32" y={273} width={167} height="6" fill="currentColor" opacity=".16" />
                    <g className="credit-scan" aria-hidden="true">
                      <path d="M0 28v272" stroke="var(--signal)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="credit-document credit-bank" data-credit-bank>
                  <svg
                    viewBox="0 0 680 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Six mois de relevés bancaires professionnels"
                  >
                    <rect
                      x="1"
                      y="9"
                      width="670"
                      height="380"
                      transform="translate(-14 -14) rotate(5 336 199)"
                      className="credit-paper-back"
                    />
                    <rect
                      x="1"
                      y="9"
                      width="670"
                      height="380"
                      transform="translate(-6 -7) rotate(2.5 336 199)"
                      className="credit-paper-middle"
                    />
                    <rect x="1" y="9" width="670" height="380" className="credit-paper" />
                    <g fill="currentColor">
                      <text className="credit-paper-heading" x="33" y="70" fontSize="27">
                        RELEVÉ BANCAIRE
                      </text>
                      <g fontSize="9">
                        <text x="465" y="69">
                          COMPTE PROFESSIONNEL
                        </text>
                        <text x="33" y="108">
                          TYPE DE COMPTE
                        </text>
                        <text x="348" y="108">
                          PÉRIODE
                        </text>
                        <text x="33" y="128" fontSize="11">
                          Compte courant
                        </text>
                        <text x="348" y="128" fontSize="11">
                          6 derniers mois
                        </text>
                        <text key="DATE" x={33} y="173">
                          DATE
                        </text>
                        <text key="DESCRIPTION" x={119} y="173">
                          LIBELLÉ
                        </text>
                        <text key="DEBIT" x={358} y="173">
                          DÉBIT
                        </text>
                        <text key="CREDIT" x={468} y="173">
                          CRÉDIT
                        </text>
                        <text key="BALANCE" x={562} y="173">
                          SOLDE
                        </text>
                      </g>
                    </g>
                    <path
                      d="M33 84h607M33 150h607M33 185h607M331 96v40M104 150v205M345 150v205M454 150v205M549 150v205"
                      className="credit-paper-rule"
                    />
                    <g key="0" fill="currentColor" opacity=".16">
                      <path d="M33 201h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={194} width={37} height="8" />
                      <rect key="119" x={119} y={194} width={128} height="8" />
                      <rect key="365" x={365} y={194} width={37} height="8" />
                      <rect key="470" x={470} y={194} width={37} height="8" />
                      <rect key="566" x={566} y={194} width={37} height="8" />
                    </g>
                    <g key="1" fill="currentColor" opacity=".16">
                      <path d="M33 221h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={214} width={47} height="8" />
                      <rect key="119" x={119} y={214} width={153} height="8" />
                      <rect key="365" x={365} y={214} width={47} height="8" />
                      <rect key="470" x={470} y={214} width={47} height="8" />
                      <rect key="566" x={566} y={214} width={47} height="8" />
                    </g>
                    <g key="2" fill="currentColor" opacity=".16">
                      <path d="M33 241h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={234} width={37} height="8" />
                      <rect key="119" x={119} y={234} width={178} height="8" />
                      <rect key="365" x={365} y={234} width={37} height="8" />
                      <rect key="470" x={470} y={234} width={37} height="8" />
                      <rect key="566" x={566} y={234} width={37} height="8" />
                    </g>
                    <g key="3" fill="currentColor" opacity=".16">
                      <path d="M33 261h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={254} width={47} height="8" />
                      <rect key="119" x={119} y={254} width={128} height="8" />
                      <rect key="365" x={365} y={254} width={47} height="8" />
                      <rect key="470" x={470} y={254} width={47} height="8" />
                      <rect key="566" x={566} y={254} width={47} height="8" />
                    </g>
                    <g key="4" fill="currentColor" opacity=".16">
                      <path d="M33 281h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={274} width={37} height="8" />
                      <rect key="119" x={119} y={274} width={153} height="8" />
                      <rect key="365" x={365} y={274} width={37} height="8" />
                      <rect key="470" x={470} y={274} width={37} height="8" />
                      <rect key="566" x={566} y={274} width={37} height="8" />
                    </g>
                    <g key="5" fill="currentColor" opacity=".16">
                      <path d="M33 301h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={294} width={47} height="8" />
                      <rect key="119" x={119} y={294} width={178} height="8" />
                      <rect key="365" x={365} y={294} width={47} height="8" />
                      <rect key="470" x={470} y={294} width={47} height="8" />
                      <rect key="566" x={566} y={294} width={47} height="8" />
                    </g>
                    <g key="6" fill="currentColor" opacity=".16">
                      <path d="M33 321h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={314} width={37} height="8" />
                      <rect key="119" x={119} y={314} width={128} height="8" />
                      <rect key="365" x={365} y={314} width={37} height="8" />
                      <rect key="470" x={470} y={314} width={37} height="8" />
                      <rect key="566" x={566} y={314} width={37} height="8" />
                    </g>
                    <g key="7" fill="currentColor" opacity=".16">
                      <path d="M33 341h607" stroke="currentColor" strokeWidth=".6" />
                      <rect key="33" x={33} y={334} width={47} height="8" />
                      <rect key="119" x={119} y={334} width={153} height="8" />
                      <rect key="365" x={365} y={334} width={47} height="8" />
                      <rect key="470" x={470} y={334} width={47} height="8" />
                      <rect key="566" x={566} y={334} width={47} height="8" />
                    </g>
                    <g className="credit-scan" aria-hidden="true">
                      <path d="M0 10v378" stroke="var(--signal)" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="credit-outcome" data-credit-eligible>
                  <p className="credit-outcome-label" data-credit-value>
                    ÉLIGIBLE
                  </p>
                  <span className="credit-up-to">JUSQU'À</span>
                  <strong data-credit-value>1,85 M DH</strong>
                  <div className="credit-approval" data-credit-approved>
                    <span data-credit-value>DOCUMENTS VÉRIFIÉS</span>
                    <span data-credit-value data-credit-sanction>
                      ACCORDÉ
                    </span>
                    <span data-credit-value data-credit-disbursed>
                      DÉCAISSÉ
                    </span>
                  </div>
                </div>
              </div>
              <Link
                className="world-link interaction-link"
                href="/work/crediflow#main-content"
                aria-label="Explorer le projet : PROJET 06"
                data-cursor="VOIR"
              >
                {"EXPLORER LE PROJET "}
                <span className="interaction-arrow" aria-hidden="true">
                  <svg
                    className="navigation-arrow"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 20 20 4M7 4h13v13" />
                  </svg>
                </span>
              </Link>
            </div>
          </CreditFlowMotion>
        </ProjectWorldMotion>
        <Offers />
        <SectionTitle index="04" label="AGENCE" note="Qui nous sommes" theme="light" />
        <About />
        <SectionTitle index="05" label="CONTACT" note="Parlons de votre projet" />
        <Contact />
      </main>
    </MotionController>
  );
}
