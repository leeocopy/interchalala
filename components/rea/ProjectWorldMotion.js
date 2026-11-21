"use client";

// Reconstructed from Turbopack module 18808 (3268rnkc_wp5p.js).
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
      "ProjectWorldMotion",
      0,
      function ({ children: e }) {
        let i = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = Array.from(i.current.querySelectorAll(".project-world")),
              t = window.matchMedia("(hover: none), (pointer: coarse)").matches,
              r = e.map((e) =>
                n.f.create({
                  trigger: e,
                  start: "top bottom",
                  end: "bottom top",
                  onToggle: (t) => e.toggleAttribute("data-world-active", t.isActive),
                }),
              ),
              s = a.f.matchMedia();
            return (
              s.add("(prefers-reduced-motion: no-preference)", () => {
                let r = a.f.context(() => {
                  e.forEach((e) => {
                    let r = e.querySelector(".world-title a, .credit-title a");
                    (r &&
                      a.f.fromTo(
                        r,
                        { opacity: 0, filter: "blur(10px)", yPercent: 20 },
                        {
                          opacity: 1,
                          filter: "blur(0px)",
                          yPercent: 0,
                          duration: 1,
                          ease: "power2.out",
                          ...(t ? { clearProps: "filter" } : {}),
                          scrollTrigger: { trigger: r.parentElement, start: "top 88%", once: !0 },
                        },
                      ),
                      e.querySelectorAll(".world-kicker, .world-description, .world-link").forEach((e) => {
                        a.f.fromTo(
                          e,
                          { opacity: 0, y: 12 },
                          {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            scrollTrigger: { trigger: e, start: "top 94%", once: !0 },
                          },
                        );
                      }));
                    let n = e.dataset.world,
                      i = a.f.timeline({ scrollTrigger: { trigger: e, ...o.f } });
                    (i.to({}, { duration: 1 }, 0),
                      "orbit" === n
                        ? i.fromTo(
                            e.querySelector(".orbit-ready"),
                            { opacity: 0 },
                            { opacity: 1, duration: 0.12 },
                            0.33,
                          )
                        : "mesa" === n &&
                          i
                            .fromTo(
                              e.querySelector('[data-meal="plate"]'),
                              { rotation: -10, y: 20 },
                              { rotation: 10, y: -20, duration: 1 },
                              0,
                            )
                            .fromTo(
                              e.querySelector('[data-meal="fork"]'),
                              { y: -25 },
                              { y: 25, duration: 1 },
                              0,
                            ));
                  });
                }, i);
                return () => {
                  (r.revert(),
                    i.current
                      ?.querySelectorAll("[data-world-active]")
                      .forEach((e) => e.removeAttribute("data-world-active")));
                };
              }),
              () => {
                (s.revert(), r.forEach((e) => e.kill()));
              }
            );
          }, []),
          (0, t.jsx)("div", { ref: i, className: "project-worlds", id: "projects", children: e })
        );
      },
    ]));
})(__turbopack);

export const ProjectWorldMotion = __exports.ProjectWorldMotion;
