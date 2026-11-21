"use client";

// Reconstructed from Turbopack module 88838 (3268rnkc_wp5p.js).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __m9286 from "./NavigationArrow";
import * as __react from "react";
import { gsap as __gsap } from "gsap";

const __deps = {
  43476: __jsxRuntime,
  9286: __m9286,
  71645: __react,
  89970: { f: __gsap },
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
    r = e.i(9286),
    a = e.i(71645),
    n = e.i(89970);
  // Le fil passe toujours derrière le titre : il n'apparaît que dans les espaces entre les lettres.
  let o = ["back", "back", "back", "back", "back", "back", "back", "back", "back", "back"];
  function i() {
    let e = (0, a.useRef)(null),
      r = (0, a.useRef)(null);
    return (
      (0, a.useEffect)(() => {
        let t,
          a = e.current,
          i = r.current,
          s = a?.closest(".hero");
        if (!a || !i || !s) return;
        let c = Array.from(s.querySelectorAll(".hero-line")),
          lastGlyph = c[2].firstChild.length - 3,
          l = o.map((e, t) => ("front" === e ? i : a).querySelector(`[data-segment="${t}"]`)),
          d = [a, i].map((e) => e.querySelector(".hero-thread-head")),
          h = a.querySelector(".hero-thread-origin"),
          u = a.querySelector(".hero-thread-end-ring"),
          p = a.querySelector(".hero-thread-end-dot"),
          x = a.querySelector("[data-thread-entry]"),
          m = a.querySelector("[data-hero-thread-tail]"),
          y = window.matchMedia("(prefers-reduced-motion: reduce)"),
          f = [],
          g = 0,
          v = document.documentElement.classList.contains("is-ready"),
          w = +!!v,
          j = 0,
          b = 0,
          E = 0,
          N = 0,
          $ = !0,
          M = (e, t, r) => {
            (e.setAttribute("cx", String(t)), e.setAttribute("cy", String(r)));
          },
          S = () => {
            if (1 === w) {
              (l.forEach((e) => {
                ("none" !== e.style.strokeDasharray && (e.style.strokeDasharray = "none"),
                  (e.style.strokeDashoffset = "0"),
                  (e.style.visibility = "visible"));
              }),
                d.forEach((e) => {
                  e.style.opacity = "0";
                }),
                (u.style.opacity = p.style.opacity = "1"));
              return;
            }
            if (!g) return;
            let e = w * g,
              t = f[0],
              r = 0;
            f.forEach((a) => {
              let n = Math.max(0, Math.min(1, e / a.length));
              ((a.path.style.strokeDashoffset = String(a.length * (1 - n))),
                (a.path.style.visibility = n > 0 ? "visible" : "hidden"),
                e >= 0 && ((t = a), (r = n * a.length)),
                (e -= a.length));
            });
            let a = t.sampler.getPointAtLength(r);
            (d.forEach((e, r) => {
              (M(e, a.x, a.y), (e.style.opacity = w < 1 && t.layer === (r ? "front" : "back") ? "1" : "0"));
            }),
              (u.style.opacity = p.style.opacity = 1 === w ? "1" : "0"));
          },
          A = (d = !0) => {
            if (!$ || !e.current || !r.current) return;
            let y = d || !t || t.entrance !== s.dataset.heroEntrance;
            if (y) {
              let e = s.getBoundingClientRect(),
                r = Number.parseFloat(getComputedStyle(c[0]).fontSize),
                a = c.map((e) => e.getBoundingClientRect()),
                o = new Map();
              for (let [t, i] of [
                [0, 3],
                [0, 4],
                [1, 0],
                [1, 1],
                [2, lastGlyph],
                [2, lastGlyph + 1],
              ]) {
                let s = document.createRange();
                (s.setStart(c[t].firstChild, i), s.setEnd(c[t].firstChild, i + 1));
                let l = s.getBoundingClientRect();
                o.set(`${t}:${i}`, {
                  x: l.left - e.left + 0.073 * r - Number(n.f.getProperty(c[t], "x")),
                  y: a[t].top - e.top + 0.034 * r,
                  w: l.width,
                  h: 0.69 * r,
                });
              }
              t = {
                bounds: e,
                size: r,
                glyphs: o,
                practice: document.querySelector(".practice-drawing")?.getBoundingClientRect(),
                supportTop: s.querySelector(".hero-footer").getBoundingClientRect().top - e.top,
                supportTextTop: s.querySelector(".hero-support").getBoundingClientRect().top - e.top,
                paddingBottom: Number.parseFloat(getComputedStyle(s).paddingBottom),
                entrance: s.dataset.heroEntrance,
              };
            }
            let { bounds: v, size: j, practice: b, supportTop: E, supportTextTop: N, paddingBottom: A } = t,
              C = c.map((e) => Number(n.f.getProperty(e, "x"))),
              T = (e, r) => {
                let a = t.glyphs.get(`${e}:${r}`);
                return { ...a, x: a.x + C[e] };
              },
              k = T(0, 3),
              L = T(0, 4),
              P = T(1, 0),
              R = T(1, 1),
              q = T(2, lastGlyph),
              I = T(2, lastGlyph + 1),
              O = q.h,
              D = { x: Math.max(32, 0.063 * v.width), y: 86 },
              U = v.width <= 820,
              B = {
                x: U ? v.width - 12 : b ? b.left - v.left + 0.47 * b.width : 0.56 * v.width,
                y: v.height - 0.5 * A,
              },
              F = { x: L.x + 0.54 * L.w, y: L.y + 0.31 * L.h },
              z = { x: k.x - 0.18 * j, y: k.y + 0.05 * O },
              W = { x: P.x + 0.44 * P.w, y: P.y + 0.32 * P.h },
              H = { x: P.x + 1.8 * P.w, y: P.y - 0.04 * P.h },
              Y = Math.max(8, P.x - 0.08 * P.w),
              G = { x: q.x + 0.18 * q.w, y: q.y - 0.015 * O },
              V = { x: Y + G.y - (P.y + 0.57 * P.h), y: G.y },
              X = (e, t, r) => ({ x: e.x + (t.x - e.x) * r, y: e.y + (t.y - e.y) * r }),
              K = ([e, t, r, a], n) => {
                let o = X(e, t, n),
                  i = X(t, r, n),
                  s = X(r, a, n),
                  c = X(o, i, n),
                  l = X(i, s, n),
                  d = X(c, l, n);
                return [
                  [e, o, c, d],
                  [d, l, s, a],
                ];
              },
              Q = (4 * Y - 2 * W.x + V.x) / 3,
              [Z, J] = K(
                [
                  W,
                  { x: Q, y: W.y + ((Q - W.x) * (W.y - H.y)) / (W.x - H.x) },
                  { x: W.x + Q - V.x, y: V.y },
                  V,
                ],
                0.5,
              ),
              [_, ee] = K(
                [
                  { x: L.x + 0.64 * L.w, y: L.y + 0.49 * L.h },
                  { x: L.x + 0.288 * L.w, y: L.y + 0.776 * L.h },
                  H,
                  W,
                ],
                0.2,
              ),
              et = 0,
              er = 1;
            for (let e = 0; e < 20; e++) {
              let e = (et + er) / 2;
              K(ee, e)[0][3].x > R.x - 0.01 * j ? (et = e) : (er = e);
            }
            let [ea, en] = K(ee, (et + er) / 2),
              eo = ([, e, t, r]) => `C ${e.x} ${e.y}, ${t.x} ${t.y}, ${r.x} ${r.y}`,
              ei = { x: I.x + 0.66 * I.w, y: I.y + 0.44 * O },
              es = { x: q.x + 0.64 * q.w, y: q.y + 0.46 * O },
              ec = { x: I.x + 0.14 * I.w, y: I.y + 1.02 * O },
              el = U ? Math.max(ec.y + 0.51 * O, (q.y + O + N) / 2) : ec.y + 0.51 * O,
              ed = U ? (el - ec.y) / 0.51 : O,
              eh = { x: ec.x - 0.23 * ed, y: el },
              eu = (e) => (U ? ec.y + ((eh.y - ec.y) * e) / 0.51 : ec.y + O * e),
              ep = Math.max(eh.y + 24, E - 16),
              ex = `${eh.x - 0.11 * ed} ${eh.y + 0.08 * ed}`,
              em = U
                ? `C ${ex}, ${B.x} ${ep - (ep - eh.y) / 3}, ${B.x} ${ep} L ${B.x} ${B.y}`
                : `C ${ex}, ${B.x} ${B.y - (B.y - eh.y) * 0.4}, ${B.x} ${B.y}`,
              ey = [
                `M ${D.x} ${D.y} C ${D.x + 0.16 * j} ${k.y - 0.3 * O}, ${z.x} ${z.y}, ${F.x} ${F.y}`,
                `M ${F.x} ${F.y} C ${F.x + (F.x - z.x) * 0.045} ${F.y + (F.y - z.y) * 0.045}, ${L.x + 0.8 * L.w} ${L.y + 0.36 * L.h}, ${L.x + 0.64 * L.w} ${L.y + 0.49 * L.h} ${eo(_)}`,
                `M ${ea[0].x} ${ea[0].y} ${eo(ea)}`,
                `M ${en[0].x} ${en[0].y} ${eo(en)}`,
                `M ${W.x} ${W.y} ${eo(Z)}`,
                `M ${J[0].x} ${J[0].y} ${eo(J)} H ${G.x}`,
                `M ${G.x} ${G.y} C ${I.x + 0.45 * I.w} ${G.y}, ${ei.x + 0.08 * I.w} ${q.y - 0.1 * O}, ${ei.x} ${ei.y}`,
                `M ${ei.x} ${ei.y} C ${ei.x - 0.08 * I.w} ${q.y + 0.98 * O}, ${es.x - 0.13 * q.w} ${q.y + 0.97 * O}, ${es.x} ${es.y}`,
                `M ${es.x} ${es.y} C ${es.x} ${q.y + 0.35 * O}, ${I.x + 0.14 * I.w} ${q.y + 0.32 * O}, ${I.x + 0.14 * I.w} ${q.y + 0.48 * O} L ${ec.x} ${ec.y}`,
                `M ${ec.x} ${ec.y} C ${ec.x - 0.04 * ed} ${eu(0.08)}, ${ec.x + 0.08 * ed} ${eu(0.1)}, ${ec.x - 0.04 * ed} ${eu(0.16)} S ${ec.x + 0.01 * ed} ${eu(0.27)}, ${ec.x - 0.13 * ed} ${eu(0.32)} S ${ec.x - 0.12 * ed} ${eu(0.43)}, ${eh.x} ${eh.y}`,
              ];
            (y && [a, i].forEach((e) => e.setAttribute("viewBox", `0 0 ${v.width} ${v.height}`)),
              (g = (f = l.map((e, t) => {
                e.setAttribute("d", ey[t]);
                let r = f[t]?.sampler ?? document.createElementNS("http://www.w3.org/2000/svg", "path");
                (w < 1 || !f[t]) && r.setAttribute("d", ey[t]);
                let a = 1 === w && f[t] ? f[t].length : r.getTotalLength();
                return (
                  w < 1 && (e.style.strokeDasharray = `${a} ${a}`),
                  { path: e, sampler: r, length: a, layer: o[t] }
                );
              })).reduce((e, t) => e + t.length, 0)),
              m.setAttribute("d", `M ${eh.x} ${eh.y} ${em}`),
              y && (M(h, D.x, D.y), M(x, B.x, B.y)),
              M(u, eh.x, eh.y),
              M(p, eh.x, eh.y),
              S(),
              (a.style.opacity = i.style.opacity = "1"),
              window.dispatchEvent(
                new CustomEvent("portfolio:hero-thread-geometry", { detail: { layoutChanged: y } }),
              ));
          },
          C = (e) => {
            E = 0;
            let t = b ? Math.min(40, e - b) : 16;
            ((b = e),
              (w = y.matches ? 1 : Math.min(1, w + t / 3e3)),
              S(),
              w < 1
                ? (E = requestAnimationFrame(C))
                : ((document.documentElement.dataset.heroThreadComplete = "true"),
                  window.dispatchEvent(new Event("portfolio:hero-thread-complete"))));
          },
          T = () => {
            if (!j && g) {
              if (((j = performance.now() + 100), v)) {
                ((document.documentElement.dataset.heroThreadComplete = "true"),
                  window.dispatchEvent(new Event("portfolio:hero-thread-complete")));
                return;
              }
              E = requestAnimationFrame(C);
            }
          },
          k = !1,
          L = () => {
            (n.f.ticker.remove(L), (1 === w && t && window.scrollY >= t.bounds.height) || A(!1));
          },
          P = (e) => {
            e?.type === "portfolio:hero-motion"
              ? n.f.ticker.add(L)
              : (e?.type !== "portfolio:hero-motion" && (k = !0),
                N ||
                  (N = requestAnimationFrame(() => {
                    ((N = 0), A(k), (k = !1));
                  })));
          },
          R = new ResizeObserver(() => P());
        return (
          document.fonts.ready.then(() => {
            $ &&
              (A(),
              R.observe(s),
              c.forEach((e) => R.observe(e)),
              "complete" === s.dataset.heroEntrance && T());
          }),
          window.addEventListener("portfolio:hero-motion", P),
          window.addEventListener("portfolio:hero-text-complete", T),
          window.addEventListener("orientationchange", P),
          () => {
            (($ = !1),
              cancelAnimationFrame(E),
              cancelAnimationFrame(N),
              n.f.ticker.remove(L),
              R.disconnect(),
              window.removeEventListener("portfolio:hero-motion", P),
              window.removeEventListener("portfolio:hero-text-complete", T),
              window.removeEventListener("orientationchange", P),
              delete document.documentElement.dataset.heroThreadComplete);
          }
        );
      }, []),
      (0, t.jsx)(t.Fragment, {
        children: ["back", "front"].map((a) =>
          (0, t.jsxs)(
            "svg",
            {
              ref: "back" === a ? e : r,
              className: `hero-thread-layer hero-thread-${a}`,
              "data-hero-thread": "back" === a ? "" : void 0,
              "aria-hidden": "true",
              children: [
                o.map(
                  (e, r) =>
                    e === a &&
                    (0, t.jsx)(
                      "path",
                      {
                        "data-segment": r,
                        "data-thread-depth": e,
                        className: "hero-thread-path",
                        style: { strokeDasharray: "10000", strokeDashoffset: "10000" },
                      },
                      r,
                    ),
                ),
                "back" === a &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("path", {
                        "data-hero-thread-tail": "",
                        "data-thread-route": "hero-tail",
                        className: "hero-thread-path",
                        style: { strokeDasharray: "10000", strokeDashoffset: "10000", visibility: "hidden" },
                      }),
                      (0, t.jsx)("circle", { className: "hero-thread-origin", r: "4" }),
                      (0, t.jsx)("circle", { className: "hero-thread-end-ring", r: "11" }),
                      (0, t.jsx)("circle", { className: "hero-thread-end-dot", r: "4" }),
                      (0, t.jsx)("circle", {
                        r: "4",
                        "data-thread-entry": "portfolio",
                        visibility: "hidden",
                      }),
                    ],
                  }),
                (0, t.jsx)("circle", { className: "hero-thread-head", r: "4" }),
              ],
            },
            a,
          ),
        ),
      })
    );
  }
  e.s(
    [
      "Hero",
      0,
      function () {
        let e = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let t,
              r = e.current,
              a = window.matchMedia("(hover: none), (pointer: coarse)").matches,
              o = 0,
              i = () => {
                a &&
                  o !== document.documentElement.clientWidth &&
                  ((o = document.documentElement.clientWidth),
                  r.style.setProperty(
                    "--hero-height",
                    `${window.visualViewport?.height ?? window.innerHeight}px`,
                  ));
              };
            (i(), window.addEventListener("resize", i));
            let s = r.querySelectorAll(".hero-line-reveal"),
              c = document.documentElement.classList.contains("is-ready"),
              l = !0,
              d = !1,
              h = () => {
                ((r.dataset.heroEntrance = "complete"),
                  n.f.set(s, { clearProps: "opacity,filter,transform" }),
                  window.dispatchEvent(new Event("portfolio:hero-motion")),
                  window.dispatchEvent(new Event("portfolio:hero-text-complete")));
              },
              u = () => {
                d ||
                  ((d = !0),
                  document.fonts.ready.then(() => {
                    if (l) {
                      if (c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void h();
                      ((r.dataset.heroEntrance = "entering"),
                        (t = n.f.fromTo(
                          s,
                          { opacity: 0, filter: "blur(10px)", y: 0, yPercent: 20 },
                          {
                            opacity: 1,
                            filter: "blur(0px)",
                            yPercent: 0,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power2.out",
                            onComplete: h,
                          },
                        )));
                    }
                  }));
              };
            return (
              window.addEventListener("portfolio:ready", u),
              document.documentElement.classList.contains("is-ready") && u(),
              () => {
                ((l = !1),
                  t?.revert(),
                  (r.dataset.heroEntrance = "waiting"),
                  window.removeEventListener("portfolio:ready", u),
                  window.removeEventListener("resize", i));
              }
            );
          }, []),
          (0, t.jsxs)("section", {
            ref: e,
            className: "hero thread-scene",
            "data-thread-scene": "hero",
            "data-hero-entrance": "waiting",
            "aria-labelledby": "hero-title",
            children: [
              (0, t.jsx)(i, {}),
              (0, t.jsxs)("div", {
                className: "hero-copy",
                children: [
                  (0, t.jsxs)("h1", {
                    id: "hero-title",
                    className: "hero-title",
                    children: [
                      (0, t.jsx)("span", {
                        className: "hero-line-reveal",
                        children: (0, t.jsx)("span", {
                          className: "hero-line",
                          "data-velocity-type": !0,
                          children: "LE DIGITAL",
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className: "hero-line-reveal",
                        children: (0, t.jsx)("span", {
                          className: "hero-line",
                          "data-velocity-type": !0,
                          "data-direction": "reverse",
                          children: "AUGMENTÉ",
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className: "hero-line-reveal",
                        children: (0, t.jsx)("span", {
                          className: "hero-line hero-line-last",
                          "data-velocity-type": !0,
                          children: "PAR L'IA.",
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "hero-footer",
                    children: [
                      (0, t.jsx)("div", {
                        className: "hero-support",
                        children: (0, t.jsx)("p", {
                          children:
                            "Agence de transformation digitale augmentée par l'IA : stratégie, sites, CRM, automatisation et data. Casablanca · MENA & Europe.",
                        }),
                      }),
                      (0, t.jsxs)("a", {
                        className: "scroll-cue",
                        href: "#work",
                        "data-cursor": "SUIVRE",
                        children: [
                          "DÉFILEZ POUR SUIVRE LE FIL ",
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, t.jsx)(r.f, { direction: "down" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      },
    ],
    88838,
  );
})(__turbopack);

export const Hero = __exports.Hero;
