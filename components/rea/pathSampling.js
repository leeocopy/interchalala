// Reconstructed from Turbopack module 46430 (1q5_nr1-7vuvw.js).

const __deps = {};
const __exports = {};
const __turbopack = {
  i: (id) => __deps[id],
  s: (bindings) => {
    for (let k = 0; k < bindings.length; k += 3) __exports[bindings[k]] = bindings[k + 2];
  },
};

((e) => {
  "use strict";
  function t(e) {
    let t = [],
      r = { x: 0, y: 0 },
      n = 0;
    for (let o of e.matchAll(/([MLCQAHV])([^MLCQAHV]*)/g)) {
      let e = o[1],
        i = o[2]
          .trim()
          .split(/[\s,]+/)
          .map(Number),
        a =
          "H" === e
            ? { x: i[0], y: r.y }
            : "V" === e
              ? { x: r.x, y: i[0] }
              : { x: i[i.length - 2], y: i[i.length - 1] };
      if ("M" !== e) {
        let e = document.createElementNS("http://www.w3.org/2000/svg", "path");
        e.setAttribute("d", `M ${r.x} ${r.y} ${o[0]}`);
        let i = e.getTotalLength();
        ((n += i), t.push({ path: e, length: i, end: n }));
      }
      r = a;
    }
    let o = 0;
    return {
      length: n,
      pointAtLength: (e) => {
        for (; o > 0 && t[o - 1].end > e;) o--;
        for (; o < t.length - 1 && t[o].end < e;) o++;
        let r = t[o],
          n = r.path.getPointAtLength(Math.max(0, e - r.end + r.length));
        return { x: n.x, y: n.y };
      },
    };
  }
  e.s([
    "V",
    0,
    t,
    "k",
    0,
    function (e, t) {
      let r = e.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi).map(Number),
        n = Array.from({ length: 129 }, (e, t) => {
          let n = t / 128,
            o = 1 - n;
          return {
            x: o ** 3 * r[0] + 3 * o ** 2 * n * r[2] + 3 * o * n ** 2 * r[4] + n ** 3 * r[6],
            y: o ** 3 * r[1] + 3 * o ** 2 * n * r[3] + 3 * o * n ** 2 * r[5] + n ** 3 * r[7],
          };
        });
      10 === r.length && n.push({ x: r[8], y: r[9] });
      let o = 0,
        i = n.map((e, t) => (t && (o += Math.hypot(e.x - n[t - 1].x, e.y - n[t - 1].y)), o)),
        a = 1;
      return Array.from({ length: t + 1 }, (e, r) => {
        let s = (o * r) / t;
        for (; a < n.length - 1 && i[a] < s;) a++;
        let l = n[a - 1],
          c = n[a],
          u = (s - i[a - 1]) / (i[a] - i[a - 1]);
        return { x: l.x + (c.x - l.x) * u, y: l.y + (c.y - l.y) * u };
      });
    },
    "m",
    0,
    function (e, r) {
      let n = t(e);
      return Array.from({ length: r + 1 }, (e, t) => n.pointAtLength((n.length * t) / r));
    },
  ]);
})(__turbopack);

export const V = __exports.V;
export const k = __exports.k;
export const m = __exports.m;
