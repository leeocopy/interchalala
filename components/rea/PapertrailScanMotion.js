"use client";

// Reconstructed from Turbopack module 32758 (3268rnkc_wp5p.js).
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
      "PapertrailScanMotion",
      0,
      function ({ children: e }) {
        let i = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = i.current,
              t = 0,
              r = !0,
              s = () => {
                if (((t = 0), !r || !e.isConnected || window.innerWidth <= 700)) return;
                let a = e.getBoundingClientRect();
                ["invoice", "total", "status"]
                  .map((t) => {
                    let r = e.querySelector(`[data-scan-field="${t}"]`),
                      n = r.getScreenCTM();
                    if (!n) return;
                    let o = r.getBBox(),
                      i = new DOMPoint(o.x + o.width, o.y + o.height / 2).matrixTransform(n),
                      s = e.querySelector(`[data-scan-result="${t}"]`).getBoundingClientRect(),
                      c = ((i.x - a.left) / a.width) * 1488,
                      l = ((i.y - a.top) / a.height) * 1058,
                      d = ((s.left - a.left - 8) / a.width) * 1488,
                      h = ((s.top + s.height / 2 - a.top) / a.height) * 1058,
                      u = `M ${c} ${l} C ${c + 50} ${l}, ${d - 45} ${h}, ${d} ${h}`;
                    if ("status" === t) {
                      let e = (e, t) => {
                        let r = new DOMPoint(e, t).matrixTransform(n);
                        return `${((r.x - a.left) / a.width) * 1488} ${((r.y - a.top) / a.height) * 1058}`;
                      };
                      u = `M ${c} ${l} C ${e(148, 394.5)}, ${e(140, 428)}, ${e(180, 428)} C ${e(310, 428)}, ${d - 45} ${h}, ${d} ${h}`;
                    }
                    return { path: e.querySelector(`[data-scan-connector="${t}"]`), d: u };
                  })
                  .forEach((e) => {
                    e && e.path.getAttribute("d") !== e.d && e.path.setAttribute("d", e.d);
                  });
              },
              c = () => {
                !t && r && (t = requestAnimationFrame(s));
              },
              l = () => {
                r &&
                  (cancelAnimationFrame(t),
                  (t = requestAnimationFrame(() => {
                    t = requestAnimationFrame(s);
                  })));
              },
              d = new ResizeObserver(c);
            (d.observe(e), n.f.addEventListener("refresh", l), document.fonts.ready.then(c));
            let h = a.f.matchMedia();
            return (
              h.add("(prefers-reduced-motion: no-preference)", () => {
                let t = a.f.context(() => {
                  let t = a.f.timeline({ scrollTrigger: { trigger: e, ...o.f, start: "top 30%" } });
                  (t
                    .fromTo(
                      ".scan-paper-acme",
                      { y: 25, rotation: -17 },
                      { y: 0, rotation: -14, duration: 0.12, onUpdate: c },
                      0,
                    )
                    .fromTo(
                      ".scan-paper-river",
                      { y: 20, rotation: -13 },
                      { y: 0, rotation: -9, duration: 0.12, onUpdate: c },
                      0.01,
                    )
                    .fromTo(
                      ".scan-paper-main",
                      { y: 35, rotation: 15 },
                      { y: 0, rotation: 10, duration: 0.12, onUpdate: c },
                      0.02,
                    )
                    .fromTo(
                      ".scan-invoice-beam",
                      { x: 2, autoAlpha: 0 },
                      { x: 2, autoAlpha: 1, duration: 0.03 },
                      0.1,
                    )
                    .to(".scan-invoice-beam", { x: 398, duration: 0.24, ease: "none" }, 0.13)
                    .to(".scan-invoice-beam", { autoAlpha: 0, duration: 0.04 }, 0.37)
                    .fromTo(".scan-state-scanning", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.03 }, 0.1)
                    .to(".scan-state-scanning", { autoAlpha: 0, duration: 0.04 }, 0.37)
                    .fromTo(".scan-extracted", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 0.44)
                    .to(".scan-paper-rejected", { xPercent: 15, opacity: 0.1, duration: 0.2 }, 0.45)
                    .to({}, { duration: 0.3 }, 0.7),
                    ["invoice", "total", "status"].forEach((e, r) => {
                      let a = 0.4 + 0.1 * r,
                        n = a + 0.06;
                      (t.fromTo(
                        `[data-scan-field="${e}"]`,
                        { opacity: 0, strokeDasharray: 1, strokeDashoffset: 1 },
                        { opacity: 1, strokeDashoffset: 0, duration: 0.06, ease: "none" },
                        a,
                      ),
                        t.fromTo(
                          `[data-scan-result="${e}"]`,
                          { autoAlpha: 0, y: 8 },
                          { autoAlpha: 1, y: 0, duration: 0.04, onUpdate: c },
                          n,
                        ),
                        t.fromTo(
                          `[data-scan-connector="${e}"]`,
                          { opacity: 0 },
                          { opacity: 1, duration: 0.04 },
                          n,
                        ));
                    }));
                }, e);
                return (
                  l(),
                  () => {
                    (t.revert(), l());
                  }
                );
              }),
              () => {
                ((r = !1),
                  d.disconnect(),
                  n.f.removeEventListener("refresh", l),
                  h.revert(),
                  cancelAnimationFrame(t));
              }
            );
          }, []),
          (0, t.jsx)("article", {
            ref: i,
            id: "papertrail",
            className: "project-world papertrail-scan",
            "data-world": "papertrail",
            "data-thread-scene": "world-papertrail",
            "aria-labelledby": "papertrail-scan-title",
            children: e,
          })
        );
      },
    ]));
})(__turbopack);

export const PapertrailScanMotion = __exports.PapertrailScanMotion;
