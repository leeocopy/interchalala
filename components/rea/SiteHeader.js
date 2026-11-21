"use client";

// Reconstructed from Turbopack module 11234 (1glc14gis_i1h.js).
import * as __jsxRuntime from "react/jsx-runtime";
import __Link from "next/link";
import * as __react from "react";

const __deps = {
  43476: __jsxRuntime,
  22016: { default: __Link },
  71645: __react,
};
const __exports = {};
const __turbopack = {
  i: (id) => __deps[id],
  s: (bindings) => {
    for (let k = 0; k < bindings.length; k += 3) __exports[bindings[k]] = bindings[k + 2];
  },
};

((t) => {
  "use strict";
  var e = t.i(43476),
    i = t.i(22016),
    o = t.i(71645);
  let r = [
    { label: "EXPERTISES", href: "/#capabilities" },
    { label: "PROJETS", href: "/#projects" },
    { label: "OFFRES", href: "/#offers" },
    { label: "AGENCE", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ];
  t.s([
    "SiteHeader",
    0,
    function () {
      let [t, n] = (0, o.useState)(!1),
        a = (0, o.useRef)(null),
        s = (0, o.useRef)(null);
      return (
        (0, o.useEffect)(() => {
          if (!t) return;
          let e = document.querySelector("main"),
            i = e?.inert ?? !1,
            o = document.documentElement.style.overflow;
          (e && (e.inert = !0),
            (document.documentElement.style.overflow = "hidden"),
            window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: !0 })));
          let r = () => {
              (n(!1), s.current?.focus({ preventScroll: !0 }));
            },
            l = (t) => {
              if (("Escape" === t.key && (t.preventDefault(), r()), "Tab" !== t.key)) return;
              let e = Array.from(a.current.querySelectorAll("a, button")),
                i = e[0],
                o = e[e.length - 1];
              t.shiftKey && document.activeElement === i
                ? (t.preventDefault(), o.focus())
                : t.shiftKey || document.activeElement !== o || (t.preventDefault(), i.focus());
            },
            h = window.matchMedia("(min-width: 821px)");
          return (
            h.addEventListener("change", r),
            document.addEventListener("keydown", l),
            () => {
              (e && (e.inert = i),
                (document.documentElement.style.overflow = o),
                window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: !1 })),
                h.removeEventListener("change", r),
                document.removeEventListener("keydown", l));
            }
          );
        }, [t]),
        (0, e.jsxs)(e.Fragment, {
          children: [
        (0, e.jsx)(i.default, {
          className: "brand-logo",
          href: "/",
          "aria-label": "Prestoillico Digital Agency — accueil",
          "data-cursor": "ACCUEIL",
          onClick: () => n(!1),
          children: (0, e.jsx)("img", {
            src: "/logo.png",
            alt: "",
            width: 893,
            height: 340,
            decoding: "async",
          }),
        }),
        (0, e.jsxs)("header", {
          ref: a,
          className: `site-header${t ? " is-open" : ""}`,
          "data-lenis-prevent": t ? "" : void 0,
          children: [
            (0, e.jsx)("span", {
              className: "wordmark wordmark-spacer",
              "aria-hidden": "true",
            }),
            (0, e.jsx)("button", {
              ref: s,
              className: "menu-button interaction-link",
              type: "button",
              "aria-expanded": t,
              "aria-controls": "primary-navigation",
              onClick: () => n((t) => !t),
              children: t ? "FERMER" : "MENU",
            }),
            (0, e.jsx)("nav", {
              id: "primary-navigation",
              "aria-label": "Navigation principale",
              "data-lenis-prevent": !0,
              children: r.map((t) =>
                (0, e.jsx)(
                  i.default,
                  {
                    className: "interaction-underline",
                    href: t.href,
                    "data-cursor": "ALLER",
                    onClick: () => {
                      (n(!1), s.current?.focus({ preventScroll: !0 }));
                    },
                    children: t.label,
                  },
                  t.label,
                ),
              ),
            }),
          ],
        }),
          ],
        })
      );
    },
  ]);
})(__turbopack);

export const SiteHeader = __exports.SiteHeader;
