import "@/app/styles/1cgj_16e_57q_.css";
import { CustomCursor } from "@/components/rea/CustomCursor";
import { NotFoundThread } from "@/components/rea/NotFoundThread";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <CustomCursor />
      <main className="not-found project-worlds" id="main-content" tabIndex={-1}>
        <NotFoundThread />
        <p className="world-kicker">404 / PAGE INTROUVABLE</p>
        <div className="not-found-copy">
          <h1>
            <span>Une impasse.</span>
            <span>Un chemin retour.</span>
          </h1>
          <p>Cette page n'existe pas. Le fil, lui, continue.</p>
        </div>
        <Link className="world-link interaction-link" href="/" data-cursor="RETOUR">
          {"Retour à l'accueil "}
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
      </main>
    </>
  );
}
