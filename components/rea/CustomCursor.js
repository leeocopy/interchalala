"use client";

// Reconstructed from Turbopack module 14086 (2efbc9oa7-h7_.js).
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
    "CustomCursor",
    0,
    function () {
      let e = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = e.current;
          if (!t) return;
          let r = window.matchMedia(
              "(hover: hover) and (pointer: fine) and (min-width: 821px) and (prefers-reduced-motion: no-preference)",
            ),
            n = () => {},
            o = () => {
              if ((n(), !r.matches || !t.showPopover)) return;
              let e = { x: -100, y: -100 },
                o = { ...e },
                a = 0,
                i = () => {
                  ((o.x += (e.x - o.x) * 0.16),
                    (o.y += (e.y - o.y) * 0.16),
                    (t.style.transform = `translate3d(${o.x}px, ${o.y}px, 0)`),
                    (a = Math.hypot(e.x - o.x, e.y - o.y) > 0.1 ? requestAnimationFrame(i) : 0));
                },
                s = () => {
                  let r = document.elementFromPoint(e.x, e.y)?.closest("[data-cursor]");
                  ((t.dataset.label = r?.dataset.cursor ?? ""), t.classList.toggle("is-active", !!r));
                },
                u = (r) => {
                  "touch" !== r.pointerType &&
                    ((e.x = r.clientX),
                    (e.y = r.clientY),
                    s(),
                    t.classList.remove("is-hidden"),
                    a || (a = requestAnimationFrame(i)));
                },
                l = () => t.classList.add("is-hidden"),
                c = (e) => {
                  e.target instanceof HTMLDialogElement &&
                    (t.hidePopover(),
                    t.showPopover(),
                    (t.dataset.label = ""),
                    t.classList.remove("is-active"));
                };
              ((t.style.transform = "translate3d(-100px, -100px, 0)"),
                t.classList.add("is-hidden"),
                t.showPopover(),
                window.addEventListener("pointermove", u, { passive: !0 }),
                document.addEventListener("scroll", s, { capture: !0, passive: !0 }),
                document.addEventListener("mouseleave", l),
                document.addEventListener("toggle", c, !0),
                (n = () => {
                  (cancelAnimationFrame(a),
                    window.removeEventListener("pointermove", u),
                    document.removeEventListener("scroll", s, !0),
                    document.removeEventListener("mouseleave", l),
                    document.removeEventListener("toggle", c, !0),
                    t.isConnected && t.hidePopover());
                }));
            };
          return (
            o(),
            r.addEventListener("change", o),
            () => {
              (n(), r.removeEventListener("change", o));
            }
          );
        }, []),
        (0, t.jsx)("div", {
          ref: e,
          className: "custom-cursor is-hidden",
          popover: "manual",
          "aria-hidden": "true",
        })
      );
    },
  ]);
})(__turbopack);

export const CustomCursor = __exports.CustomCursor;
