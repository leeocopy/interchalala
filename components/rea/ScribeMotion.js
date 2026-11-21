"use client";

// Reconstructed from Turbopack module 69445 (3268rnkc_wp5p.js).
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
    "ScribeMotion",
    0,
    function ({ children: e }) {
      let a = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let e,
            t,
            r = a.current,
            n = r.querySelector(".scribe-audio"),
            o = n.querySelector('text[x="402"]'),
            i = n.querySelector(".scribe-playhead"),
            s = n.querySelector("clipPath rect"),
            c = r.querySelector(".scribe-charter"),
            l = Array.from(c.querySelectorAll(".scribe-generated-line")).map((e) => ({
              text: e.querySelector("text"),
              cursor: e.querySelector(".scribe-writing-cursor"),
              progress: -1,
              delay: Number(e.dataset.writingDelay),
              width:
                e.querySelector("text").textContent.length *
                Number(e.querySelector("text").getAttribute("font-size")) *
                0.6,
            })),
            d = c.querySelector(".scribe-document-footer"),
            h = window.matchMedia("(prefers-reduced-motion: reduce)"),
            u = (e) => Math.max(0, Math.min(1, e)),
            p = () => {
              let r = h.matches ? 1 : Number(n.dataset.threadProgress ?? 0);
              if (r !== e) {
                let t = Math.floor(1456 * r),
                  a = `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
                (o.textContent !== a && (o.textContent = a),
                  i.setAttribute("d", `M${97 + 303 * r} 51v44`),
                  s.setAttribute("width", String(303 * r)),
                  n.toggleAttribute("data-playing", r > 0 && r < 1),
                  (e = r));
              }
              let a = h.matches ? 1 : Number(c.dataset.threadProgress ?? 0);
              a !== t &&
                (l.forEach((e) => {
                  let t = u((2.5 * a - e.delay) / 0.22);
                  if (t === e.progress) return;
                  let { text: r, cursor: n } = e;
                  ((r.style.clipPath = `inset(0 ${(1 - t) * 100}% 0 0)`),
                    (n.style.opacity = t > 0 && t < 1 ? "1" : "0"),
                    n.setAttribute("transform", `translate(${e.width * t} 0)`),
                    (e.progress = t));
                }),
                (d.style.opacity = String(u((a - 0.88) / 0.12))),
                (t = a));
            },
            x = new MutationObserver(p);
          return (
            x.observe(r, { subtree: !0, attributes: !0, attributeFilter: ["data-thread-progress"] }),
            h.addEventListener("change", p),
            p(),
            () => {
              (x.disconnect(), h.removeEventListener("change", p));
            }
          );
        }, []),
        (0, t.jsx)("div", {
          ref: a,
          className: "scribe-objects",
          "aria-label": "L'assistant transforme l'enregistrement d'une réunion en document structuré et révisable",
          children: e,
        })
      );
    },
  ]);
})(__turbopack);

export const ScribeMotion = __exports.ScribeMotion;
