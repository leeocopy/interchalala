"use client";

// Reconstructed from Turbopack module 34145 (3268rnkc_wp5p.js).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __m9286 from "./NavigationArrow";
import * as __react from "react";
import { gsap as __gsap } from "gsap";
import { ScrollTrigger as __ScrollTrigger } from "gsap/ScrollTrigger";

const __deps = {
  43476: __jsxRuntime,
  9286: __m9286,
  71645: __react,
  89970: { f: __gsap },
  83495: { f: __ScrollTrigger },
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
    n = e.i(89970),
    o = e.i(83495);
  let i = () => ({ x: 0, y: 0, vx: 0, vy: 0 });
  (n.f.registerPlugin(o.f),
    e.s(
      [
        "Contact",
        0,
        function () {
          let e = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            c = (0, a.useRef)(() => {}),
            l = (0, a.useRef)(() => {}),
            d = (0, a.useRef)({ x: 0, y: 0 }),
            h = (0, a.useRef)(null),
            u = (0, a.useRef)(!1),
            p = (0, a.useRef)(null),
            [x, m] = (0, a.useState)("idle"),
            [y, f] = (0, a.useState)(""),
            [g, v] = (0, a.useState)(!1),
            [w, j] = (0, a.useState)(!1);
          ((0, a.useEffect)(() => {
            let t,
              r = e.current,
              a = window.matchMedia("(prefers-reduced-motion: reduce)"),
              o = n.f.matchMedia(),
              s = [i(), i(), i()],
              u = { release: 0 },
              x = !1,
              y = () => window.dispatchEvent(new Event("portfolio:contact-motion")),
              f = () => {
                ((r.dataset.contactRelease = String(u.release)), y());
              };
            (o.add("(prefers-reduced-motion: no-preference)", () => {
              let e = n.f.context(() => {
                n.f.fromTo(
                  ".contact-statement > span",
                  { opacity: 0, filter: "blur(10px)", yPercent: 20 },
                  {
                    opacity: 1,
                    filter: "blur(0px)",
                    yPercent: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    clearProps: "opacity,filter,transform",
                    scrollTrigger: { trigger: ".contact-statement", start: "top 88%", once: !0 },
                  },
                );
              }, r);
              return () => e.revert();
            }),
              o.add("(prefers-reduced-motion: reduce)", () => {
                (s.forEach((e) => Object.assign(e, i())),
                  (d.current.x = d.current.y = 0),
                  [
                    "contactPullX",
                    "contactPullY",
                    "contactNearX",
                    "contactNearY",
                    "contactEndX",
                    "contactEndY",
                    "contactTension",
                    "contactIdle",
                  ].forEach((e) => {
                    r.dataset[e] = "0";
                  }),
                  r.style.setProperty("--contact-end-x", "0px"),
                  r.style.setProperty("--contact-end-y", "0px"),
                  f());
              }),
              (c.current = () => {
                x ||
                  ((x = !0),
                  (d.current.x = d.current.y = 0),
                  m("releasing"),
                  t?.kill(),
                  (t = n.f.to(u, {
                    release: 1,
                    duration: 1.65 * !a.matches,
                    ease: "power2.inOut",
                    onUpdate: f,
                    onComplete: () => {
                      (f(), m("open"));
                    },
                  })));
              }),
              (l.current = () => {
                ((x = !1),
                  m("idle"),
                  t?.kill(),
                  (t = n.f.to(u, {
                    release: 0,
                    duration: 0.9 * !a.matches,
                    ease: "power2.inOut",
                    onUpdate: f,
                  })));
              }));
            let g = !1,
              v = new IntersectionObserver(([e]) => {
                g = e.isIntersecting;
              });
            v.observe(r);
            let w = (e, t) => {
              if (a.matches || !g || document.hidden) return;
              !(function (e, t, r) {
                let a = Math.min(r, 0.04);
                for (; a > 0;) {
                  let r = Math.min(a, 1 / 120);
                  for (let a = e.length - 1; a >= 0; a--) {
                    let n = e[a],
                      o = a ? e[a - 1] : t,
                      i = a ? 0.52 : 1,
                      s = [340, 240, 180][a],
                      c = [29, 24, 22][a];
                    ((n.vx += ((o.x * i - n.x) * s - n.vx * c) * r),
                      (n.vy += ((o.y * i - n.y) * s - n.vy * c) * r),
                      (n.x += n.vx * r),
                      (n.y += n.vy * r));
                  }
                  a -= r;
                }
              })(
                s,
                !h.current && !x && r.hasAttribute("data-contact-thread-reached")
                  ? { x: 20 * Math.sin(1.3 * e), y: 1.5 * Math.cos(2.6 * e) }
                  : d.current,
                t / 1e3,
              );
              let [n, o, i] = s,
                c = {
                  contactPullX: i.x,
                  contactPullY: i.y,
                  contactNearX: o.x,
                  contactNearY: o.y,
                  contactEndX: n.x,
                  contactEndY: n.y,
                  contactTension: Math.min(1, Math.hypot(n.x, n.y) / 64),
                  contactIdle: 0,
                },
                l = !1;
              Object.entries(c).forEach(([e, t]) => {
                let a = t.toFixed(2);
                r.dataset[e] !== a && ((r.dataset[e] = a), (l = !0));
              });
              let u = n.x + "px",
                p = n.y + "px";
              (r.style.getPropertyValue("--contact-end-x") !== u && r.style.setProperty("--contact-end-x", u),
                r.style.getPropertyValue("--contact-end-y") !== p &&
                  r.style.setProperty("--contact-end-y", p),
                l && y());
            };
            return (
              n.f.ticker.add(w),
              () => {
                (p.current?.abort(),
                  (p.current = null),
                  t?.kill(),
                  o.revert(),
                  n.f.ticker.remove(w),
                  v.disconnect(),
                  (c.current = l.current = () => {}),
                  [
                    "contactRelease",
                    "contactPullX",
                    "contactPullY",
                    "contactNearX",
                    "contactNearY",
                    "contactEndX",
                    "contactEndY",
                    "contactTension",
                    "contactIdle",
                  ].forEach((e) => delete r.dataset[e]),
                  ["--contact-end-x", "--contact-end-y"].forEach((e) => r.style.removeProperty(e)));
              }
            );
          }, []),
            (0, a.useEffect)(() => {
              if (
                ("open" !== x || o.current.open || o.current.showModal(),
                "idle" === x && s.current?.focus({ preventScroll: !0 }),
                "open" !== x)
              )
                return;
              let e = document.documentElement,
                t = e.style.overflow;
              return (
                (e.style.overflow = "hidden"),
                window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: !0 })),
                () => {
                  ((e.style.overflow = t),
                    window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: !1 })));
                }
              );
            }, [x]));
          let b = (t, r = !1) => {
              let a = h.current;
              a &&
                t.pointerId === a.pointer &&
                ((h.current = null),
                (u.current = a.distance > 6),
                (d.current.x = d.current.y = 0),
                delete e.current.dataset.contactDragging,
                t.currentTarget.hasPointerCapture(t.pointerId) &&
                  t.currentTarget.releasePointerCapture(t.pointerId),
                !r && a.distance >= 42 && c.current());
            },
            E = async (e) => {
              if ((e.preventDefault(), p.current)) return;
              let t = e.currentTarget,
                r = new FormData(t),
                a = new AbortController();
              p.current = a;
              let n = window.setTimeout(() => a.abort(), 15e3);
              (v(!0), f(""));
              try {
                let e = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "X-Contact-Delivery": "browser" },
                    body: JSON.stringify(Object.fromEntries(r)),
                    signal: a.signal,
                  }),
                  n = await e.json();
                if (e.ok && n.delivery) {
                  e = await fetch(n.delivery.url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(n.delivery.fields),
                    signal: a.signal,
                  });
                  let t = await e.json();
                  n = {
                    ok: !0 === t.success || "true" === t.success,
                    activationRequired:
                      "string" == typeof t.message && /activat|confirm.*email/i.test(t.message),
                  };
                }
                if (p.current !== a) return;
                if (e.ok && n.activationRequired)
                  return void f("Le formulaire attend la confirmation de l’adresse e-mail. Réessayez dans un instant.");
                if (!e.ok || !n.ok)
                  return void f(n.error || "Votre message n’a pas pu être envoyé. Merci de réessayer.");
                (t.reset(), j(!0));
              } catch {
                p.current === a &&
                  f("Votre message n’a pas pu être envoyé. Vérifiez votre connexion et réessayez.");
              } finally {
                (window.clearTimeout(n), p.current === a && ((p.current = null), v(!1)));
              }
            };
          return (0, t.jsxs)("section", {
            ref: e,
            className: "contact-finale",
            id: "contact",
            "data-thread-scene": "contact",
            "data-contact-phase": x,
            "aria-labelledby": "contact-title",
            children: [
              (0, t.jsxs)("div", {
                className: "contact-stage",
                children: [
                  (0, t.jsxs)("div", {
                    className: "contact-copy",
                    children: [
                      (0, t.jsxs)("h2", {
                        id: "contact-title",
                        className: "contact-statement",
                        "aria-label": "Vos outils sont trop emmêlés ?",
                        children: [
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, t.jsx)("span", { "data-velocity-type": !0, children: "VOS OUTILS" }),
                          }),
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, t.jsx)("span", {
                              "data-velocity-type": !0,
                              "data-direction": "reverse",
                              children: "SONT",
                            }),
                          }),
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, t.jsx)("span", { "data-velocity-type": !0, children: "TROP" }),
                          }),
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, t.jsx)("span", {
                              "data-velocity-type": !0,
                              "data-direction": "reverse",
                              children: "EMMÊLÉS ?",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("button", {
                        className: "contact-pull interaction-link",
                        type: "button",
                        onClick: (e) => {
                          ((s.current = e.currentTarget), c.current());
                        },
                        disabled: "idle" !== x,
                        "aria-haspopup": "dialog",
                        "data-cursor": "PARLER",
                        children: [
                          "PARLONS-EN. ",
                          (0, t.jsx)("span", {
                            className: "contact-arrow interaction-arrow",
                            "aria-hidden": "true",
                            children: (0, t.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              focusable: "false",
                              children: (0, t.jsx)("path", { d: "M4 20 20 4M7 4h13v13" }),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("noscript", {
                        children: (0, t.jsxs)("a", {
                          className: "contact-pull interaction-link",
                          href: "mailto:contact@prestoillico.com",
                          children: [
                            "PARLONS-EN. ",
                            (0, t.jsx)("span", {
                              className: "contact-arrow interaction-arrow",
                              "aria-hidden": "true",
                              children: (0, t.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                focusable: "false",
                                children: (0, t.jsx)("path", { d: "M4 20 20 4M7 4h13v13" }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "contact-thread",
                    children: [
                      (0, t.jsx)("div", { className: "contact-knot", "aria-hidden": "true" }),
                      (0, t.jsxs)("span", {
                        className: "contact-end",
                        children: [
                          (0, t.jsx)("span", { className: "contact-end-anchor" }),
                          (0, t.jsx)("button", {
                            className: "contact-thread-grip",
                            type: "button",
                            "aria-label": "Tirez le fil pour ouvrir le formulaire de contact",
                            "aria-haspopup": "dialog",
                            disabled: "idle" !== x,
                            onPointerDown: (t) => {
                              "idle" === x &&
                                0 === t.button &&
                                t.isPrimary &&
                                (t.preventDefault(),
                                (s.current = t.currentTarget),
                                t.currentTarget.focus({ preventScroll: !0 }),
                                t.currentTarget.setPointerCapture(t.pointerId),
                                (h.current = {
                                  pointer: t.pointerId,
                                  x: t.clientX,
                                  y: t.clientY,
                                  distance: 0,
                                }),
                                (u.current = !1),
                                (e.current.dataset.contactDragging = ""));
                            },
                            onPointerMove: (e) => {
                              let t,
                                r,
                                a = h.current;
                              if (!a || e.pointerId !== a.pointer) return;
                              let n = e.clientX - a.x,
                                o = e.clientY - a.y;
                              ((a.distance = Math.hypot(n, o)),
                                (r = (t = Math.hypot(n, o)) ? (64 * Math.tanh(t / 64)) / t : 0),
                                (d.current = { x: n * r, y: o * r }));
                            },
                            onPointerUp: (e) => b(e),
                            onPointerCancel: (e) => b(e, !0),
                            onLostPointerCapture: (e) => b(e, !0),
                            onClick: (e) => {
                              if (u.current && 0 !== e.detail) {
                                u.current = !1;
                                return;
                              }
                              ((u.current = !1), (s.current = e.currentTarget), c.current());
                            },
                          }),
                          (0, t.jsx)("span", {
                            className: "contact-pull-hint",
                            children: "releasing" === x ? "DÉMÊLAGE…" : "TIREZ POUR DÉMÊLER",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "contact-bottom",
                children: (0, t.jsxs)("a", {
                  className: "contact-top interaction-link",
                  href: "#main-content",
                  "data-cursor": "HAUT",
                  children: [
                    "RETOUR EN HAUT ",
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      children: (0, t.jsx)(r.f, { direction: "up" }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("p", {
                className: "sr-only",
                role: "status",
                children:
                  "releasing" === x ? "Le fil se démêle. Le formulaire de contact va s'ouvrir." : "",
              }),
              (0, t.jsxs)("dialog", {
                ref: o,
                className: "contact-dialog",
                "data-submitted": w,
                "aria-labelledby": w ? "contact-confirmation-title" : "contact-form-title",
                onClose: () => {
                  (p.current?.abort(), (p.current = null), v(!1), l.current(), j(!1), f(""));
                },
                "data-lenis-prevent": !0,
                children: [
                  (0, t.jsx)("button", {
                    className: "contact-form-close interaction-link",
                    type: "button",
                    "data-cursor": "FERMER",
                    onClick: () => o.current.close(),
                    "aria-label": w ? "Fermer la confirmation" : "Fermer le formulaire de contact",
                    children: (0, t.jsx)("svg", {
                      viewBox: "0 0 16 16",
                      width: "18",
                      height: "18",
                      "aria-hidden": "true",
                      children: (0, t.jsx)("path", {
                        d: "m1 1 14 14M15 1 1 15",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "contact-dialog-content",
                    "data-submitted": w,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "contact-dialog-body",
                        inert: w,
                        "aria-hidden": w || void 0,
                        children: [
                          (0, t.jsxs)("div", {
                            className: "contact-dialog-intro",
                            children: [
                              (0, t.jsxs)("h3", {
                                id: "contact-form-title",
                                children: [
                                  "PARLONS ",
                                  (0, t.jsx)("br", {}),
                                  (0, t.jsx)("span", { children: "PROJET." }),
                                ],
                              }),
                              (0, t.jsxs)("p", {
                                children: ["Un contexte, des outils, ", (0, t.jsx)("br", {}), "des frictions à supprimer."],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("form", {
                            className: "contact-form",
                            onSubmit: E,
                            "aria-busy": g,
                            children: [
                              (0, t.jsxs)("label", {
                                className: "sr-only",
                                "aria-hidden": "true",
                                children: [
                                  "Laisser vide",
                                  (0, t.jsx)("input", { name: "website", autoComplete: "off", tabIndex: -1 }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "contact-form-row",
                                children: [
                                  (0, t.jsxs)("label", {
                                    children: [
                                      "VOTRE NOM",
                                      (0, t.jsx)("input", {
                                        name: "name",
                                        autoComplete: "name",
                                        required: !0,
                                        maxLength: 80,
                                        placeholder: "Votre nom",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("label", {
                                    children: [
                                      "VOTRE E-MAIL PROFESSIONNEL",
                                      (0, t.jsx)("input", {
                                        name: "email",
                                        type: "email",
                                        autoComplete: "email",
                                        required: !0,
                                        maxLength: 254,
                                        placeholder: "vous@entreprise.ma",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("label", {
                                children: [
                                  "VOTRE PROJET",
                                  (0, t.jsx)("textarea", {
                                    name: "message",
                                    required: !0,
                                    maxLength: 4e3,
                                    rows: 3,
                                    placeholder: "Votre contexte, vos outils actuels et les frictions à supprimer.",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("button", {
                                className: "contact-form-submit interaction-link",
                                type: "submit",
                                "data-cursor": g ? void 0 : "ENVOYER",
                                disabled: g,
                                children: [
                                  g ? "ENVOI…" : "RECEVOIR UN PREMIER CADRAGE",
                                  " ",
                                  (0, t.jsx)("span", {
                                    className: "interaction-arrow",
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)("svg", {
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      focusable: "false",
                                      children: (0, t.jsx)("path", { d: "M4 20 20 4M7 4h13v13" }),
                                    }),
                                  }),
                                ],
                              }),
                              y &&
                                (0, t.jsx)("p", {
                                  className: "contact-form-feedback",
                                  role: "status",
                                  children: y,
                                }),
                            ],
                          }),
                        ],
                      }),
                      w &&
                        (0, t.jsxs)("div", {
                          className: "contact-confirmation",
                          role: "status",
                          children: [
                            (0, t.jsx)("p", {
                              className: "contact-confirmation-label",
                              children: "MESSAGE REÇU",
                            }),
                            (0, t.jsx)("h3", { id: "contact-confirmation-title", children: "MERCI." }),
                            (0, t.jsxs)("div", {
                              className: "contact-confirmation-bottom",
                              children: [
                                (0, t.jsx)("p", {
                                  children:
                                    "Merci pour votre message. Nous revenons vers vous avec une direction claire, des priorités et des pistes d’action concrètes.",
                                }),
                                (0, t.jsxs)("button", {
                                  className: "contact-form-submit interaction-link",
                                  type: "button",
                                  "data-cursor": "RETOUR",
                                  ref: (e) => {
                                    e?.focus({ preventScroll: !0 });
                                  },
                                  onClick: () => o.current.close(),
                                  children: [
                                    "CONTINUER LA VISITE ",
                                    (0, t.jsx)("span", {
                                      className: "interaction-arrow",
                                      "aria-hidden": "true",
                                      children: (0, t.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        focusable: "false",
                                        children: (0, t.jsx)("path", { d: "M4 20 20 4M7 4h13v13" }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      34145,
    ));
})(__turbopack);

export const Contact = __exports.Contact;
