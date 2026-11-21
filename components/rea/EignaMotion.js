"use client";

// Reconstructed from Turbopack module 26573 (3268rnkc_wp5p.js).
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
  function a({ children: e, label: r, ...n }) {
    return (0, t.jsx)("svg", {
      viewBox: "0 0 400 300",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: r ? "img" : void 0,
      "aria-label": r,
      "aria-hidden": !r || void 0,
      ...n,
      children: e,
    });
  }
  function n({ kind: e, ...r }) {
    return (0, t.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...r,
      children: (0, t.jsx)("path", {
        d: {
          document: "M6 2h8l4 4v16H6z M14 2v5h4M9 12h6m-6 4h6",
          search: "M16 16l6 6M19 10a9 9 0 1 1-18 0a9 9 0 1 1 18 0",
          person: "M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 22v-2a8 8 0 0 1 16 0v2",
          check: "M5 12l5 5L20 6",
          wallet: "M3 6V3h15v3M2 6h20v15H2zM16 11h6v6h-6zM18 14h1",
          mail: "M2 4h20v16H2zM2 4l10 9L22 4",
          wrench: "M14 3a6 6 0 0 0-6 8L2 17a3 3 0 0 0 4 4l7-7a6 6 0 0 0 8-7l-5 5-4-4 4-5z",
        }[e],
      }),
    });
  }
  let o = {
    maroc: { currency: "DH", rent: "180 000", repair: "35 000", other: "10 000", net: "135 000", mission: "45 000", tax: "TVA 20 % · ICE" },
    europe: { currency: "€", rent: "16 000", repair: "3 100", other: "900", net: "12 000", mission: "4 000", tax: "TVA 20 % · SIREN" },
  };
  e.s(
    [
      "EignaMotion",
      0,
      function ({ flat: e, inspection: i }) {
        let s = (0, r.useRef)(null),
          [c, l] = (0, r.useState)("maroc"),
          d = o[c],
          h = (e) => `${e} ${d.currency}`;
        return (
          (0, r.useEffect)(() => {
            let e = Array.from(s.current.querySelectorAll("[data-eigna]")),
              t = window.matchMedia("(prefers-reduced-motion: reduce)"),
              r = () => {
                e.forEach((e) => {
                  let r = String(t.matches ? 1 : Number(e.dataset.threadProgress ?? 0));
                  e.style.getPropertyValue("--eigna-progress") !== r &&
                    e.style.setProperty("--eigna-progress", r);
                });
              },
              a = new MutationObserver(r);
            return (
              e.forEach((e) => a.observe(e, { attributes: !0, attributeFilter: ["data-thread-progress"] })),
              t.addEventListener("change", r),
              r(),
              () => {
                (a.disconnect(), t.removeEventListener("change", r));
              }
            );
          }, []),
          (0, t.jsxs)("div", {
            ref: s,
            className: "eigna-objects",
            "aria-label":
              "Une mission connectée : carte des outils, brief signé, audit IA qui détecte la friction, automatisation activée, gain mesuré et facturation",
            children: [
              (0, t.jsx)("div", {
                className: "world-object eigna-flat",
                "data-eigna": "property",
                "data-thread-scrub": !0,
                children: e,
              }),
              (0, t.jsx)("div", {
                className: "world-object eigna-lease",
                "data-eigna": "lease",
                "data-thread-scrub": !0,
                children: (0, t.jsxs)(a, {
                  viewBox: "0 0 205 218",
                  label: `Brief de mission n° 03 validé, budget ${h(d.mission)}`,
                  children: [
                    (0, t.jsx)("path", {
                      d: "M1 1h203v216H1Z",
                      fill: "var(--world-bg)",
                      stroke: "currentColor",
                      strokeWidth: ".85",
                    }),
                    (0, t.jsx)("path", {
                      d: "M22 60h161M22 143h161M22 198h108",
                      stroke: "currentColor",
                      strokeWidth: ".6",
                      opacity: ".4",
                    }),
                    (0, t.jsxs)("g", {
                      fill: "currentColor",
                      children: [
                        (0, t.jsx)("text", { x: "22", y: "29", fontSize: "12", children: "BRIEF DE MISSION" }),
                        (0, t.jsxs)("g", {
                          fontSize: "8",
                          opacity: ".6",
                          children: [
                            (0, t.jsx)("text", { x: "22", y: "46", children: "CADRAGE" }),
                            (0, t.jsx)("text", { x: "183", y: "46", textAnchor: "end", children: "N° 03" }),
                            (0, t.jsx)("text", { x: "22", y: "80", children: "BUDGET MISSION" }),
                          ],
                        }),
                        (0, t.jsx)("text", { x: "22", y: "106", fontSize: "20", children: h(d.mission) }),
                        (0, t.jsx)("text", {
                          x: "183",
                          y: "106",
                          textAnchor: "end",
                          fontSize: "9",
                          opacity: ".6",
                          children: "/ TOTAL",
                        }),
                        (0, t.jsx)("text", { x: "22", y: "127", fontSize: "9", children: "CLIENT / 01" }),
                        (0, t.jsx)("text", {
                          className: "eigna-lease-check",
                          x: "183",
                          y: "127",
                          textAnchor: "end",
                          fontSize: "8",
                          children: "VALIDÉ",
                        }),
                        (0, t.jsx)("text", {
                          x: "22",
                          y: "160",
                          fontSize: "8",
                          opacity: ".6",
                          children: "SIGNATURE CLIENT",
                        }),
                      ],
                    }),
                    (0, t.jsx)("path", {
                      className: "eigna-signature",
                      pathLength: "1",
                      transform: "translate(8 77) scale(.65)",
                      d: "M23 178c58-68 46-32 4 2c18-8 24-44 23-16s17-23 13-5s20-16 17 0s15-14 14 0s15-9 24-3l-91 29",
                      stroke: "currentColor",
                      strokeWidth: "1.1",
                    }),
                    (0, t.jsxs)("g", {
                      className: "eigna-lease-check",
                      children: [
                        (0, t.jsx)("circle", {
                          cx: "169",
                          cy: "183",
                          r: "11",
                          stroke: "currentColor",
                          strokeWidth: ".8",
                        }),
                        (0, t.jsx)(n, { kind: "check", x: "161", y: "175", width: "16", height: "16" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "world-object eigna-inspection",
                "data-eigna": "inspection",
                "data-thread-scrub": !0,
                children: (0, t.jsxs)(a, {
                  viewBox: "0 0 370 225",
                  label:
                    "L'audit IA compare la situation avant et après cartographie et détecte le point de friction entre deux outils avec 94 % de confiance",
                  children: [
                    i,
                    (0, t.jsxs)("g", {
                      fill: "currentColor",
                      fontSize: "11",
                      children: [
                        (0, t.jsx)("text", { x: "22", y: "218", children: "AVANT" }),
                        (0, t.jsx)("text", { x: "222", y: "218", children: "AUDIT IA" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: "world-object eigna-repair",
                "data-eigna": "repair",
                "data-thread-scrub": !0,
                children: [
                  (0, t.jsxs)(a, {
                    viewBox: "0 0 400 275",
                    label: `Automatisation activée ; ${h(d.repair)} d'investissement inscrits au bilan de la mission`,
                    children: [
                      (0, t.jsxs)("g", {
                        className: "eigna-wrench",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        strokeLinejoin: "round",
                        transform: "translate(-9 5) rotate(-12 180 100)",
                        children: [
                          (0, t.jsx)("path", {
                            d: "M40 169 204 49C201 22 224 4 253 9L235 39 248 62 274 62 292 32C308 59 297 87 270 95C259 98 249 97 239 93L62 215C31 231 10 187 40 169Z",
                            fill: "var(--world-bg)",
                          }),
                          (0, t.jsx)("circle", { cx: "49", cy: "193", r: "10" }),
                          (0, t.jsx)("path", {
                            d: "M69 185 215 76M72 193 219 84M227 32l-6 9 20 34h39l6-10",
                            opacity: ".45",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("g", {
                        className: "eigna-repair-desktop",
                        children: [
                          (0, t.jsxs)("g", {
                            fill: "currentColor",
                            fontSize: "11",
                            children: [
                              (0, t.jsx)("text", { x: "186", y: "198", children: "AUTOMATISATION" }),
                              (0, t.jsx)("text", { x: "186", y: "233", children: h(d.repair) }),
                              (0, t.jsx)("text", {
                                className: "eigna-assigned",
                                x: "186",
                                y: "252",
                                children: "PLANIFIÉE",
                              }),
                              (0, t.jsx)("text", {
                                className: "eigna-completed",
                                x: "186",
                                y: "252",
                                children: "ACTIVE",
                              }),
                            ],
                          }),
                          (0, t.jsx)("path", {
                            d: "M186 211h143",
                            stroke: "currentColor",
                            strokeWidth: ".6",
                            opacity: ".4",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "eigna-repair-details",
                    children: [
                      (0, t.jsx)("p", { children: "AUTOMATISATION" }),
                      (0, t.jsx)("p", { children: h(d.repair) }),
                      (0, t.jsxs)("div", {
                        className: "eigna-repair-state",
                        children: [
                          (0, t.jsx)("span", { className: "eigna-assigned", children: "PLANIFIÉE" }),
                          (0, t.jsx)("span", { className: "eigna-completed", children: "ACTIVE" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "world-object eigna-book",
                children: [
                  (0, t.jsxs)(a, {
                    viewBox: "0 0 720 270",
                    label: `Bilan de la mission 03. Pipeline généré ${h(d.rent)}, automatisation ${h(d.repair)}, licences et formation ${h(d.other)}, gain net ${h(d.net)}. La même automatisation est reprise en facturation : ${d.tax}.`,
                    children: [
                      (0, t.jsxs)("g", {
                        stroke: "currentColor",
                        strokeWidth: ".85",
                        fill: "var(--world-bg)",
                        children: [
                          (0, t.jsx)("path", {
                            d: "M7 15 342 6Q358 7 365 14Q374 8 393 10L712 13 719 265 377 265Q362 260 349 264L1 263Z",
                          }),
                          (0, t.jsx)("path", {
                            d: "m12 9 332-5q13 0 21 10q13-8 28-8l315 2 6 251-337 1q-15-6-28 0L6 257Z",
                          }),
                          (0, t.jsx)("path", {
                            d: "M18 1 342 1Q357 2 365 12Q378 3 393 3L703 3 707 252 382 253Q371 251 365 257Q356 251 343 252L12 250Z",
                          }),
                          (0, t.jsx)("path", { d: "M365 12v245m-5-239v231m11-235v234", opacity: ".45" }),
                        ],
                      }),
                      (0, t.jsx)("g", {
                        stroke: "currentColor",
                        strokeWidth: ".6",
                        opacity: ".5",
                        children: (0, t.jsx)("path", { d: "M43 58h283M43 189h283M402 58h270M402 189h270" }),
                      }),
                      (0, t.jsxs)("g", {
                        fill: "currentColor",
                        fontSize: "12",
                        children: [
                          (0, t.jsx)("text", { x: "43", y: "37", children: "AVR. / MISSION 03" }),
                          (0, t.jsx)("text", { x: "402", y: "37", children: "FACTURATION / 2026" }),
                        ],
                      }),
                      (0, t.jsxs)("g", {
                        "data-eigna": "ledger",
                        "data-thread-scrub": !0,
                        fill: "currentColor",
                        fontSize: "13",
                        children: [
                          (0, t.jsxs)("g", {
                            className: "eigna-rent-row",
                            children: [
                              (0, t.jsx)("text", { x: "43", y: "98", children: "PIPELINE GÉNÉRÉ" }),
                              (0, t.jsxs)("text", {
                                x: "326",
                                y: "98",
                                textAnchor: "end",
                                children: ["+ ", h(d.rent)],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("g", {
                            className: "eigna-expense-row",
                            children: [
                              (0, t.jsx)("text", { x: "43", y: "133", children: "AUTOMATISATION" }),
                              (0, t.jsxs)("text", {
                                x: "326",
                                y: "133",
                                textAnchor: "end",
                                children: ["− ", h(d.repair)],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("g", {
                            className: "eigna-other-row",
                            children: [
                              (0, t.jsx)("text", { x: "43", y: "168", children: "LICENCES & FORMATION" }),
                              (0, t.jsxs)("text", {
                                x: "326",
                                y: "168",
                                textAnchor: "end",
                                children: ["− ", h(d.other)],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("g", {
                            className: "eigna-net-row",
                            fontSize: "18",
                            children: [
                              (0, t.jsx)("text", { x: "43", y: "222", children: "GAIN NET" }),
                              (0, t.jsx)("text", {
                                x: "326",
                                y: "222",
                                textAnchor: "end",
                                children: h(d.net),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("g", {
                        "data-eigna": "tax",
                        "data-thread-scrub": !0,
                        fill: "currentColor",
                        fontSize: "13",
                        children: (0, t.jsxs)("g", {
                          className: "eigna-tax-record",
                          children: [
                            (0, t.jsx)("text", { x: "402", y: "98", children: "AUTOMATISATION" }),
                            (0, t.jsx)("text", {
                              x: "672",
                              y: "98",
                              textAnchor: "end",
                              children: h(d.repair),
                            }),
                            (0, t.jsx)("text", { x: "402", y: "133", children: "MISSION" }),
                            (0, t.jsx)("text", { x: "672", y: "133", textAnchor: "end", children: "LIÉE" }),
                            (0, t.jsx)("text", { x: "402", y: "168", children: "MENTIONS" }),
                            (0, t.jsx)("text", {
                              className: "eigna-tax-form",
                              x: "672",
                              y: "168",
                              textAnchor: "end",
                              fontSize: "11",
                              children: d.tax,
                            }),
                            (0, t.jsx)("text", {
                              className: "eigna-tax-status",
                              x: "402",
                              y: "222",
                              fontSize: "18",
                              children: "FACTURÉ",
                            }),
                            (0, t.jsx)("circle", {
                              cx: "657",
                              cy: "216",
                              r: "13",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: ".8",
                            }),
                            (0, t.jsx)(n, { kind: "check", x: "648", y: "207", width: "18", height: "18" }),
                          ],
                        }),
                      }),
                      [39, 123, 210].map((e) =>
                        (0, t.jsxs)(
                          "g",
                          {
                            stroke: "currentColor",
                            strokeWidth: ".8",
                            fill: "var(--world-bg)",
                            children: [
                              (0, t.jsx)("ellipse", { cx: "356", cy: e, rx: "3", ry: "5" }),
                              (0, t.jsx)("ellipse", { cx: "375", cy: e, rx: "3", ry: "5" }),
                              (0, t.jsx)("path", { d: `M356 ${e}c-7-10 25-10 19 0m-19 0c-4-5 22-5 19 0` }),
                            ],
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "eigna-geography",
                    role: "group",
                    "aria-label": "Marché",
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        "aria-pressed": "maroc" === c,
                        onClick: () => l("maroc"),
                        children: "MAROC",
                      }),
                      (0, t.jsx)("span", { "aria-hidden": "true", children: "/" }),
                      (0, t.jsx)("button", {
                        type: "button",
                        "aria-pressed": "europe" === c,
                        onClick: () => l("europe"),
                        children: "EUROPE",
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
    26573,
  );
})(__turbopack);

export const EignaMotion = __exports.EignaMotion;
