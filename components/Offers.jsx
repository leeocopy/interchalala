import Link from "next/link";
import { offers } from "@/content/offers";
import { SectionTitle } from "@/components/SectionTitle";

export function Offers() {
  return (
    <section className="offers" id="offers" data-thread-scene="offers" aria-labelledby="offers-title">
      <SectionTitle index="03" label="OFFRES" note="Prestations à partir de" />
      <div className="offers-inner">
        <header className="offers-head">
          <p className="offers-kicker" data-reveal>
            NOS OFFRES / PRESTATIONS
          </p>
          <h2 className="offers-title" id="offers-title" data-heading-reveal>
            <span className="heading-line-reveal">
              <span data-velocity-type>DES OFFRES CLAIRES,</span>
            </span>
            <span className="heading-line-reveal">
              <span data-velocity-type data-direction="reverse">
                DES PRIX LISIBLES.
              </span>
            </span>
          </h2>
          <p className="offers-lead" data-reveal>
            Chaque offre est un point de départ. Le devis final s'ajuste à votre périmètre, vos outils et vos
            équipes. Tarifs en dirhams, hors taxes, équivalent en euros indiqué pour l'Europe.
          </p>
        </header>

        <ul className="offers-grid">
          {offers.map((offer) => (
            <li key={offer.slug} className={`offer-card${offer.featured ? " is-featured" : ""}`} data-reveal>
              <div className="offer-top">
                <span className="offer-number">{offer.number}</span>
                {offer.featured ? <span className="offer-badge">LE PLUS DEMANDÉ</span> : null}
              </div>
              <h3 className="offer-name">{offer.name}</h3>
              <p className="offer-pitch">{offer.pitch}</p>
              <ul className="offer-includes">
                {offer.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="offer-foot">
                <p className="offer-delay">{offer.delay}</p>
                <p className="offer-price">
                  <span className="offer-from">À PARTIR DE</span>
                  <span className="offer-amount">
                    {offer.price}
                    <small> DH{offer.unit ? ` ${offer.unit}` : ""}</small>
                  </span>
                  <span className="offer-eur">
                    ≈ {offer.eur} €{offer.unit ? ` ${offer.unit}` : ""}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="offers-cta" data-reveal>
          <p>Un besoin qui ne rentre pas dans une case ? Nous composons une offre sur mesure.</p>
          <Link className="offers-button interaction-link" href="/#contact" data-cursor="DEVIS">
            DEMANDER UN DEVIS
            <span className="interaction-arrow" aria-hidden="true">
              {" "}
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
