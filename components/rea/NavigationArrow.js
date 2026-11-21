// Reconstructed from Turbopack module 9286 (3268rnkc_wp5p.js).
import * as __jsxRuntime from "react/jsx-runtime";

const __deps = {
  43476: __jsxRuntime,
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
  var t = e.i(43476);
  e.s([
    "f",
    0,
    function ({ direction: e = "up-right" }) {
      return (0, t.jsx)("svg", {
        className: "navigation-arrow",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": "true",
        focusable: "false",
        children: (0, t.jsx)("path", {
          d: {
            "up-right": "M4 20 20 4M7 4h13v13",
            left: "M21 12H3m8-8-8 8 8 8",
            up: "M12 21V3m-8 8 8-8 8 8",
            down: "M12 3v18m-8-8 8 8 8-8",
          }[e],
        }),
      });
    },
  ]);
})(__turbopack);

export const f = __exports.f;
