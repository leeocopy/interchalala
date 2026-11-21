"use client";

// Reconstructed from Turbopack module 16692 (3268rnkc_wp5p.js).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __react from "react";

const __deps = {
  43476: __jsxRuntime,
  71645: __react,
};
const __exports = {};
const __turbopack = {
  i: (id) => __deps[id],
  s: (bindings) => {
    for (let k = 0; k < bindings.length; k += 3) __exports[bindings[k]] = bindings[k + 2];
  },
};

((e) => {
  "use strict";
  var t = e.i(43476),
    r = e.i(71645);
  e.s([
    "About",
    0,
    function () {
      let e = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = e.current,
            r = document.querySelector(".practice-intro"),
            a = 0,
            n = () => {
              a = 0;
              let e = `${r.getBoundingClientRect().height}px`;
              t.style.getPropertyValue("--about-height") !== e && t.style.setProperty("--about-height", e);
            },
            o = new ResizeObserver(() => {
              a || (a = requestAnimationFrame(n));
            });
          return (
            n(),
            o.observe(r),
            () => {
              (o.disconnect(), cancelAnimationFrame(a), t.style.removeProperty("--about-height"));
            }
          );
        }, []),
        (0, t.jsx)("section", {
          ref: e,
          className: "about-story",
          id: "about",
          "data-thread-scene": "about",
          "aria-labelledby": "about-title",
          children: (0, t.jsxs)("div", {
            className: "about-stage",
            children: [
              (0, t.jsxs)("div", {
                className: "about-profile",
                children: [
                  (0, t.jsxs)("div", {
                    className: "about-intro",
                    children: [
                      (0, t.jsxs)("h2", {
                        className: "about-heading",
                        id: "about-title",
                        "data-heading-reveal": !0,
                        children: [
                          (0, t.jsx)("span", {
                            className: "heading-line-reveal",
                            children: (0, t.jsx)("span", {
                              "data-velocity-type": !0,
                              children: "CHAQUE PROJET",
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: "heading-line-reveal",
                            children: (0, t.jsx)("span", {
                              "data-velocity-type": !0,
                              "data-direction": "reverse",
                              children: "PORTE UNE",
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: "heading-line-reveal",
                            children: (0, t.jsx)("span", {
                              "data-velocity-type": !0,
                              children: "EMPREINTE HUMAINE.",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: "about-personal",
                        "data-reveal": !0,
                        children:
                          "La nôtre : comprendre vos équipes et vos clients, simplifier ce qu'ils vivent, et brancher l'IA sur le réel. 40+ missions digitales et IA déjà pilotées.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "about-signature",
                    "data-reveal": !0,
                    children: [
                      (0, t.jsx)("p", { className: "about-name", children: "PRESTOILLICO." }),
                      (0, t.jsx)("p", {
                        className: "about-role",
                        children: "Agence digitale augmentée par l'IA. Casablanca · MENA & Europe.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "about-fingerprint",
                role: "img",
                "aria-label":
                  "Un fil continu s'enroule pour former une empreinte digitale, puis rejoint la section suivante.",
              }),
            ],
          }),
        })
      );
    },
  ]);
})(__turbopack);

export const About = __exports.About;
