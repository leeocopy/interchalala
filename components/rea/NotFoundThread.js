"use client";

// Reconstructed from Turbopack module 21163 (2efbc9oa7-h7_.js).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __react from "react";
import { gsap as __gsap } from "gsap";

const __deps = {
  43476: __jsxRuntime,
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
    r = e.i(71645),
    n = e.i(89970);
  e.s([
    "NotFoundThread",
    0,
    function () {
      let e = (0, r.useRef)(null);
      return (
        (0, r.useLayoutEffect)(() => {
          let t,
            r,
            o = e.current,
            a = o.closest(".not-found"),
            i = a.querySelector(".world-link"),
            s = o.querySelector("path"),
            u = Array.from(o.querySelectorAll("circle")),
            l = a.querySelectorAll("h1 > span"),
            c = window.matchMedia("(prefers-reduced-motion: reduce)"),
            f = 0,
            d = !0,
            p = !1,
            h = "loaded" === document.fonts.status;
          c.matches ||
            n.f.set(l, {
              opacity: 0,
              filter: window.matchMedia("(pointer: coarse)").matches ? "none" : "blur(10px)",
              yPercent: 20,
            });
          let m = 0,
            y = "",
            g = () => {
              let e = a.getBoundingClientRect(),
                r = i.getBoundingClientRect(),
                l = `${e.width}:${e.height}:${r.left - e.left}:${r.top - e.top}:${r.width}:${r.height}`;
              if (l === y) return;
              y = l;
              let f = e.width <= 700,
                d = r.right - e.left + 36,
                h = r.top - e.top + r.height / 2,
                g = e.width - Math.max(28, 0.09 * e.width),
                v = e.width * (f ? 0.76 : 0.74),
                b = Math.min(g - d, 0.14 * e.height, 0.1 * e.width),
                w = 0.12 * e.height,
                E = Math.min(0.44 * e.height, h - b - 24);
              o.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`);
              let P = (E - w) * 0.5;
              (s.setAttribute(
                "d",
                `M ${v} 0 V ${w} C ${v} ${w + P} ${g} ${E - P} ${g} ${E} V ${h - b} A ${b} ${b} 0 0 1 ${g - b} ${h} H ${d}`,
              ),
                u.forEach((e) => {
                  (e.setAttribute("cx", String(d)), e.setAttribute("cy", String(h)));
                }),
                p || c.matches
                  ? c.matches
                    ? n.f.set(u, { opacity: 1 })
                    : t?.isActive() &&
                      (t.kill(),
                      n.f.set(s, { strokeDasharray: "none", strokeDashoffset: 0 }),
                      n.f.set(u, { opacity: 1 }))
                  : ((m = s.getTotalLength()),
                    n.f.set(s, { strokeDasharray: m, strokeDashoffset: m }),
                    n.f.set(u, { opacity: 0 })));
            },
            v = () => {
              (cancelAnimationFrame(f), (f = requestAnimationFrame(g)));
            },
            b = () => {
              p ||
                !d ||
                !h ||
                (cancelAnimationFrame(f),
                g(),
                (p = !0),
                c.matches ||
                  ((r = n.f.to(l, {
                    opacity: 1,
                    filter: window.matchMedia("(pointer: coarse)").matches ? "none" : "blur(0px)",
                    yPercent: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    clearProps: "opacity,filter,transform",
                  })),
                  (t = n.f.to(s, {
                    strokeDashoffset: 0,
                    duration: 1.2,
                    ease: "none",
                    onComplete: () => {
                      (n.f.set(s, { strokeDasharray: "none" }), n.f.set(u, { opacity: 1 }));
                    },
                  }))));
            };
          g();
          let w = new ResizeObserver(v);
          (w.observe(a),
            w.observe(i),
            document.fonts.ready.then(() => {
              d && ((h = !0), document.documentElement.classList.contains("is-ready") ? b() : v());
            }),
            window.addEventListener("portfolio:ready", b),
            document.documentElement.classList.contains("is-ready") && b());
          let E = () => {
            c.matches &&
              (t?.kill(),
              r?.kill(),
              n.f.set(s, { strokeDasharray: "none", strokeDashoffset: 0 }),
              n.f.set(u, { opacity: 1 }),
              n.f.set(l, { clearProps: "opacity,filter,transform" }));
          };
          return (
            c.addEventListener("change", E),
            () => {
              ((d = !1),
                cancelAnimationFrame(f),
                w.disconnect(),
                t?.kill(),
                r?.kill(),
                n.f.set(l, { clearProps: "opacity,filter,transform" }),
                c.removeEventListener("change", E),
                window.removeEventListener("portfolio:ready", b));
            }
          );
        }, []),
        (0, t.jsxs)("svg", {
          ref: e,
          className: "not-found-thread",
          "aria-hidden": "true",
          focusable: "false",
          children: [
            (0, t.jsx)("path", { className: "thread-path" }),
            (0, t.jsx)("circle", { className: "hero-thread-end-ring", r: "11" }),
            (0, t.jsx)("circle", { className: "hero-thread-end-dot", r: "4" }),
          ],
        })
      );
    },
  ]);
})(__turbopack);

export const NotFoundThread = __exports.NotFoundThread;
