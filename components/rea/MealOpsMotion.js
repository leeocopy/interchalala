"use client";

// Reconstructed from Turbopack module 14325 (3268rnkc_wp5p.js).
import * as __react from "react";

const __deps = {
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
  var t = e.i(71645);
  e.s([
    "MealOpsMotion",
    0,
    function () {
      return (
        (0, t.useEffect)(() => {
          let e,
            t,
            r = document.querySelector('[data-meal="wallet"]'),
            a = r.querySelector(".mesa-wallet-amount > span"),
            n = window.matchMedia("(prefers-reduced-motion: reduce)"),
            o = document.querySelector('[data-meal="dashboard"]'),
            [i, s] = Array.from(o.querySelectorAll("strong")),
            c = Array.from(o.querySelectorAll("rect")).map((e) => ({ element: e, growth: -1 })),
            l = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }),
            d = (e) => Math.max(0, Math.min(1, e)),
            h = () => {
              let h = n.matches ? 1 : d(3 * Number(r.dataset.threadProgress ?? 0));
              if (h !== e) {
                let t = `${l.format(15e3 - 75 * h)} DH`;
                (a.textContent !== t && (a.textContent = t),
                  r.style.setProperty("--payment-progress", String(h)),
                  r.toggleAttribute("data-paid", 1 === h),
                  (e = h));
              }
              let u = n.matches ? 1 : d(2 * Number(o.dataset.threadProgress ?? 0));
              if (u === t) return;
              let p = String(Math.round(51 + u)),
                x = `${l.format(3825 + 75 * u)} DH`;
              (i.textContent !== p && (i.textContent = p),
                s.textContent !== x && (s.textContent = x),
                c.forEach((e, t) => {
                  let r = d(1.5 * u - 0.125 * t);
                  r !== e.growth &&
                    (e.element.setAttribute(
                      "transform",
                      `translate(0 36) scale(1 ${0.45 + 0.55 * r}) translate(0 -36)`,
                    ),
                    (e.growth = r));
                }),
                (t = u));
            },
            u = new MutationObserver(h);
          return (
            u.observe(r, { attributes: !0, attributeFilter: ["data-thread-progress"] }),
            u.observe(o, { attributes: !0, attributeFilter: ["data-thread-progress"] }),
            n.addEventListener("change", h),
            h(),
            () => {
              (u.disconnect(), n.removeEventListener("change", h));
            }
          );
        }, []),
        null
      );
    },
  ]);
})(__turbopack);

export const MealOpsMotion = __exports.MealOpsMotion;
