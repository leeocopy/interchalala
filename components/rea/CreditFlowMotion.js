"use client";

// Reconstructed from Turbopack module 31979 (3268rnkc_wp5p.js).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __react from "react";
import { gsap as __gsap } from "gsap";
import { ScrollTrigger as __ScrollTrigger } from "gsap/ScrollTrigger";
import * as __m77104 from "./scrollConfig";

const __deps = {
  43476: __jsxRuntime,
  71645: __react,
  89970: { f: __gsap },
  83495: { f: __ScrollTrigger },
  77104: __m77104,
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
    r = e.i(71645),
    a = e.i(89970),
    n = e.i(83495),
    o = e.i(77104);
  (a.f.registerPlugin(n.f),
    e.s([
      "CreditFlowMotion",
      0,
      function ({ children: e }) {
        let n = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = a.f.matchMedia();
            return (
              e.add("(prefers-reduced-motion: no-preference)", () => {
                let e,
                  t = Array.from(n.current.querySelectorAll("[data-credit-value]")),
                  r = t.map((e) => e.textContent),
                  i = a.f.context(() => {
                    let t = () => (window.innerWidth <= 700 ? 0.5 : 1),
                      r = [];
                    [
                      { selector: ".credit-pan", x: -65, y: 65, tilt: -9, angle: 4, width: 298 },
                      { selector: ".credit-gst", x: 30, y: 85, tilt: 8, angle: -3.5, width: 266 },
                      { selector: ".credit-bank", x: -100, y: 120, tilt: -10, angle: 6, width: 670 },
                      { selector: ".credit-itr", x: 80, y: 100, tilt: 10, angle: 8, width: 416 },
                    ].forEach(({ selector: e, x: i, y: s, tilt: c, angle: l, width: d }) => {
                      let h = n.current.querySelector(e),
                        u = ".credit-bank" === e || ".credit-itr" === e;
                      a.f.fromTo(
                        h,
                        { x: () => i * t(), y: () => s * t(), rotation: l + c },
                        {
                          x: 0,
                          y: 0,
                          rotation: l,
                          ease: u ? "power1.out" : "power2.out",
                          scrollTrigger: {
                            ...o.f,
                            trigger: u ? h : n.current,
                            start: u ? "top 95%" : o.f.start,
                            end: u ? "top 40%" : "top 15%",
                          },
                        },
                      );
                      let p = h.querySelector(".credit-scan"),
                        x = a.f
                          .timeline({ paused: !0 })
                          .fromTo(p, { x: 2, autoAlpha: 0 }, { x: 2, autoAlpha: 1, duration: 0.08 }, 0)
                          .to(p, { x: d, duration: 0.75, ease: "none" }, 0.08)
                          .to(p, { autoAlpha: 0, duration: 0.1 }, 0.83);
                      r.push({ element: h, timeline: x });
                    });
                    let i = n.current.querySelector(".credit-assessment"),
                      s = (e, t) => {
                        e.textContent !== t && (e.textContent = t);
                      },
                      c = a.f.timeline({ paused: !0 }),
                      l = [
                        (e) => `${(14.2 * e).toFixed(1).replace(".", ",")} M DH`,
                        (e) => `${(1.86 * e).toFixed(2).replace(".", ",")} M DH`,
                        (e) => (1 === e ? "STABLE" : `${Math.floor(6 * e)}/6`),
                        (e) => String(Math.round(742 * e)),
                      ];
                    (i.querySelectorAll("dl > div").forEach((e, t) => {
                      let r = e.querySelector("dd"),
                        a = { progress: 0 },
                        n = () => {
                          s(r, 0 === a.progress ? "0" : l[t](a.progress));
                        };
                      (n(),
                        c
                          .to(a, { progress: 1, duration: 0.85, ease: "power1.out", onUpdate: n }, 0.2 * t)
                          .fromTo(
                            e,
                            { "--credit-progress": 0 },
                            { "--credit-progress": 1, duration: 0.85, ease: "power1.out" },
                            0.2 * t,
                          ));
                    }),
                      r.push({ element: i, timeline: c }));
                    let d = n.current.querySelector(".credit-outcome"),
                      h = d.querySelector("strong"),
                      u = d.querySelector(".credit-outcome-label"),
                      p = { progress: 0 },
                      x = () => {
                        (s(h, 0 === p.progress ? "0 DH" : `${(1.85 * p.progress).toFixed(2).replace(".", ",")} M DH`),
                          s(
                            u,
                            1 === p.progress ? "ÉLIGIBLE" : 0 === p.progress ? "ÉLIGIBILITÉ" : "CALCUL EN COURS",
                          ));
                      };
                    (x(),
                      r.push({
                        element: d,
                        timeline: a.f
                          .timeline({ paused: !0 })
                          .to(p, { progress: 1, duration: 1.2, ease: "power1.out", onUpdate: x })
                          .fromTo(
                            u,
                            { "--credit-progress": 0 },
                            { "--credit-progress": 1, duration: 1.2, ease: "power1.out" },
                            0,
                          ),
                      }));
                    let m = n.current.querySelector(".credit-approval"),
                      y = m.querySelector("[data-credit-value]"),
                      f = m.querySelector("[data-credit-sanction]"),
                      g = { progress: 0 },
                      v = () => {
                        (s(y, g.progress < 0.5 ? "VÉRIFICATION DES DOCUMENTS" : "DOCUMENTS VÉRIFIÉS"),
                          s(f, 1 === g.progress ? "ACCORDÉ" : "ACCORD EN ATTENTE"));
                      };
                    (v(),
                      r.push({
                        element: m,
                        timeline: a.f
                          .timeline({ paused: !0 })
                          .to(g, { progress: 1, duration: 1, ease: "none", onUpdate: v })
                          .fromTo(
                            m,
                            { "--credit-progress": 0 },
                            { "--credit-progress": 1, duration: 1, ease: "none" },
                            0,
                          ),
                      }));
                    let w = n.current.querySelector("[data-credit-disbursed]"),
                      j = { progress: 0 },
                      b = () => {
                        s(
                          w,
                          1 === j.progress
                            ? "DÉCAISSÉ"
                            : 0 === j.progress
                              ? "VIREMENT EN ATTENTE"
                              : `VIREMENT / ${Math.round(100 * j.progress)} %`,
                        );
                      };
                    (b(),
                      r.push({
                        element: w,
                        timeline: a.f
                          .timeline({ paused: !0 })
                          .to(j, { progress: 1, duration: 1.1, ease: "none", onUpdate: b })
                          .fromTo(w, { opacity: 0.5 }, { opacity: 1, duration: 1.1, ease: "none" }, 0),
                      }));
                    let E = () =>
                      r.forEach((e) => {
                        let t = e.element.hasAttribute("data-thread-reached");
                        t !== e.reached && ((e.reached = t), t ? e.timeline.play() : e.timeline.reverse());
                      });
                    ((e = new MutationObserver(E)).observe(n.current, {
                      subtree: !0,
                      attributes: !0,
                      attributeFilter: ["data-thread-reached"],
                    }),
                      E());
                  }, n);
                return () => {
                  (e?.disconnect(),
                    i.revert(),
                    t.forEach((e, t) => {
                      e.textContent = r[t];
                    }));
                };
              }),
              () => e.revert()
            );
          }, []),
          (0, t.jsx)("article", {
            ref: n,
            id: "creditflow",
            className: "project-world creditflow-world",
            "data-world": "creditflow",
            "data-thread-scene": "world-creditflow",
            "aria-labelledby": "creditflow-title",
            children: e,
          })
        );
      },
    ]));
})(__turbopack);

export const CreditFlowMotion = __exports.CreditFlowMotion;
