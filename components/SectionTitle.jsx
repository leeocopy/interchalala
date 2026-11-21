// Titre pesant qui nomme une section : numéro + mot-clé en très gros, animé comme les autres titres du site.
export function SectionTitle({ index, label, note, theme = "dark", variant = "band", id }) {
  const chars = label.length;
  return (
    <div
      className={`section-title section-title--${variant}${theme === "light" ? " is-light" : ""}`}
      id={id}
      style={{ "--chars": chars }}
    >
      <div className="section-title-meta" data-reveal>
        <span>{index}</span>
        {note ? <span className="section-title-note">{note}</span> : null}
      </div>
      <p className="section-title-word" data-heading-reveal>
        <span className="heading-line-reveal">
          <span data-velocity-type>{label}</span>
        </span>
      </p>
    </div>
  );
}
