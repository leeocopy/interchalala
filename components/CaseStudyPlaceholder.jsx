import Link from "next/link";
import { CaseStudyExperience } from "@/components/rea/CaseStudyExperience";
import { offers } from "@/content/offers";
import { projectBySlug, projects } from "@/content/projects";

const arrow = (
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
);

const chapters = [
  ["transform", "Avant / Après"],
  ["approach", "Approche"],
  ["offer", "Offre"],
];

export function caseMetadata(slug) {
  const project = projectBySlug[slug];
  const description = `${project.category} — ${project.outcome}`;
  const title = `${project.name} — ${project.title}`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: `${project.name} — Prestoillico`, description, type: "article" },
  };
}

export function CaseStudyPlaceholder({ slug }) {
  const project = projectBySlug[slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const offer = offers.find((item) => item.slug === project.offer);

  return (
    <CaseStudyExperience key={slug}>
      <main className={`case-study study-page study-compact study-identity-${slug}`} id="main-content" tabIndex={-1}>
        <section className="study-hero" data-thread-scene="case-hero" aria-labelledby="study-title">
          <div className="study-hero-top">
            <p className="section-kicker" data-reveal>
              {project.number}
              {" · "}
              {project.category}
              {" · "}
              {project.duration}
            </p>
            <span className="section-kicker study-hero-badge" data-reveal>
              CAS TYPE · CHIFFRES INDICATIFS
            </span>
          </div>

          <h1 id="study-title" data-heading-reveal>
            <span className="heading-line-reveal">{project.name}</span>
          </h1>

          <p className="study-hero-tagline" data-reveal>
            {project.tagline}
          </p>
          <p className="study-hero-outcome" data-reveal>
            {project.outcome}
          </p>

          <dl className="study-hero-metrics" aria-label="Résultats clés">
            {project.metrics.map((metric) => (
              <div key={metric.label} data-reveal>
                <dt>{metric.label}</dt>
                <dd>
                  <strong className="study-impact-value">{metric.value}</strong>
                  <span>{metric.text}</span>
                </dd>
              </div>
            ))}
          </dl>

          <dl className="study-metadata study-metadata-compact">
            <div data-reveal>
              <dt>POUR QUI</dt>
              <dd>{project.sector}</dd>
            </div>
            <div data-reveal>
              <dt>EXPERTISES</dt>
              <dd>{project.services}</dd>
            </div>
            <div data-reveal>
              <dt>ÉQUIPE</dt>
              <dd>{project.team}</dd>
            </div>
          </dl>

          <nav className="study-contents" data-reveal aria-label="Chapitres">
            <span>VOIR</span>
            {chapters.map(([id, label]) => (
              <a key={id} className="interaction-link interaction-underline" href={`#${id}`} data-cursor="LIRE">
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section
          id="transform"
          className="study-chapter study-transform"
          aria-labelledby="transform-title"
          data-thread-scene="case-overview"
        >
          <div className="study-chapter-bar" data-reveal>
            <span className="section-kicker">01 — TRANSFORMATION</span>
            <p className="study-chapter-lead">{project.challengeTitle}</p>
          </div>
          <p className="study-copy study-copy-tight" data-reveal data-thread-occlude>
            {project.problem}
          </p>
          <div className="study-compare" data-thread-occlude>
            <div className="study-compare-col" data-reveal>
              <p className="study-compare-label">AVANT</p>
              <ul>
                {project.before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="study-compare-col is-after" data-reveal>
              <p className="study-compare-label">APRÈS</p>
              <ul>
                {project.after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="study-context-note" data-reveal>
            {project.context}
          </p>
        </section>

        <section
          id="approach"
          className="study-chapter study-approach"
          aria-labelledby="approach-title"
          data-thread-scene="case-approach"
        >
          <div className="study-chapter-bar" data-reveal>
            <span className="section-kicker">02 — APPROCHE</span>
            <h2 id="approach-title" className="study-chapter-lead">
              Trois temps. Des livrables à chaque étape.
            </h2>
          </div>
          <ol className="study-steps">
            {project.approach.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="study-steps-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="study-deliverables" data-thread-occlude>
            <div data-reveal>
              <p className="study-compare-label">CE QUE VOUS RECEVEZ</p>
              <ul>
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <p className="study-compare-label">STACK</p>
              <ul className="study-tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="offer" className="study-chapter study-impact" aria-labelledby="offer-title" data-thread-scene="case-impact">
          <div className="study-chapter-bar" data-reveal>
            <span className="section-kicker">03 — PASSER À L&apos;ACTION</span>
            <h2 id="offer-title" className="study-chapter-lead">
              La même logique, sur votre terrain.
            </h2>
          </div>

          {offer ? (
            <div className="study-offer study-offer-featured" data-thread-occlude data-reveal>
              <div>
                <p className="study-compare-label">OFFRE ASSOCIÉE</p>
                <p className="study-offer-name">{offer.name}</p>
                <p className="study-offer-text">{offer.pitch}</p>
                <ul className="study-offer-includes">
                  {offer.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="study-offer-side">
                <p className="study-offer-price">
                  <span>À PARTIR DE</span>
                  {offer.price} DH{offer.unit ? ` ${offer.unit}` : ""}
                </p>
                {offer.eur ? (
                  <p className="study-offer-eur">≈ {offer.eur} €{offer.unit ? ` ${offer.unit}` : ""}</p>
                ) : null}
                <p className="study-offer-delay">Délai type : {offer.delay}</p>
                <Link className="study-offer-button interaction-link" href="/#contact" data-cursor="DEVIS">
                  DISCUTER DE VOTRE CAS
                  {arrow}
                </Link>
                <Link className="study-offer-link interaction-link" href="/#offers" data-cursor="OFFRES">
                  Voir toutes les offres
                </Link>
              </div>
            </div>
          ) : null}
        </section>

        <section className="study-next" id="next-project" data-thread-scene="case-next" aria-labelledby="next-project-title">
          <p className="section-kicker" data-reveal>
            SUIVANT · {next.number}
          </p>
          <Link
            className="study-next-link interaction-link"
            href={`/work/${next.slug}#main-content`}
            data-cursor="SUIVANT"
            data-heading-reveal
          >
            <span id="next-project-title" className="heading-line-reveal">
              {next.name}
            </span>
            {arrow}
          </Link>
          <p className="study-next-description" data-reveal>
            {next.tagline}
          </p>
          <div className="study-next-bottom" data-reveal>
            <span className="section-kicker">LE FIL CONTINUE</span>
          </div>
        </section>
      </main>
    </CaseStudyExperience>
  );
}
