var Rd = window.matchMedia(`(aspect-ratio < 4/3)`),
  zd = new Set(),
  Bd = Rd.matches;
document.documentElement.classList.toggle(`is-portrait`, Bd);
function Vd() {
  return Bd;
}
function Hd(e) {
  return (zd.add(e), () => zd.delete(e));
}
function Ud() {
  let e = Rd.matches;
  return (
    e !== Bd &&
    ((Bd = e),
    document.documentElement.classList.toggle(`is-portrait`, Bd),
    zd.forEach((e) => {
      try {
        e(Bd);
      } catch (e) {
        console.error(`[layout] mode listener failed`, e);
      }
    }),
    !0)
  );
}
var Wd = new Set(),
  Gd = 180,
  Kd = null,
  qd = !1,
  Jd = !1,
  Yd = window.innerWidth,
  Xd = window.innerHeight,
  Zd = 1;
function Qd() {
  let e = parseFloat(getComputedStyle(document.documentElement).fontSize);
  Zd = e > 0 ? e / 16 : 1;
}
Qd();
function $d() {
  let e = lc.get();
  return e ? e.scrollTop() : window.scrollY;
}
function ef(e) {
  let t = lc.get();
  t ? t.scrollTop(e) : window.scrollTo(0, e);
}
function tf() {
  let e = $d(),
    t = Z.getAll().find(
      (t) => t.pin && t.end > t.start && e >= t.start && e < t.end,
    );
  if (t) return { trigger: t, progress: (e - t.start) / (t.end - t.start) };
  let n = Z.maxScroll(window);
  return { ratio: n > 0 ? e / n : 0 };
}
function nf(e) {
  if (e.trigger) {
    let { start: t, end: n } = e.trigger;
    ef(t + (n - t) * e.progress);
  } else ef(e.ratio * Z.maxScroll(window));
  Z.update();
}
function rf() {
  ((Kd = null), (qd = !0), Qd());
  let e = Ud(),
    t = e ? null : tf();
  e && ef(0);
  try {
    (Z.refresh(),
      Wd.forEach((e) => {
        try {
          e();
        } catch (e) {
          console.error(`[viewport] resize listener failed`, e);
        }
      }),
      Z.refresh(),
      t ? nf(t) : (ef(0), Z.update()));
  } finally {
    qd = !1;
  }
  Jd && ((Jd = !1), clearTimeout(Kd), (Kd = setTimeout(rf, Gd)));
}
var af =
  typeof matchMedia == `function` &&
  matchMedia(`(hover: none) and (pointer: coarse)`).matches;
window.addEventListener(`resize`, () => {
  let e = window.innerWidth !== Yd,
    t = window.innerHeight !== Xd;
  if (!(!e && !t)) {
    if (af && !e) {
      Xd = window.innerHeight;
      return;
    }
    ((Yd = window.innerWidth),
      (Xd = window.innerHeight),
      clearTimeout(Kd),
      (Kd = setTimeout(rf, Gd)));
  }
});
function of(e) {
  return (Wd.add(e), () => Wd.delete(e));
}
function sf() {
  if (qd) {
    Jd = !0;
    return;
  }
  (clearTimeout(Kd), (Kd = setTimeout(rf, Gd)));
}
function Q(e) {
  return e * Zd;
}
var cf = {
    vert: `
precision highp float;

attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 u_vertex_texel;

void main () {
  vUv = aPosition * .5 + .5;
  vL = vUv - vec2(u_vertex_texel.x, 0.);
  vR = vUv + vec2(u_vertex_texel.x, 0.);
  vT = vUv + vec2(0., u_vertex_texel.y);
  vB = vUv - vec2(0., u_vertex_texel.y);
  gl_Position = vec4(aPosition, 0., 1.);
}
`,
    fragAdvection: `
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D u_velocity_txr;
uniform sampler2D u_input_txr;
uniform vec2 u_vertex_texel;
uniform vec2 u_output_textel;
uniform float u_dt;
uniform float u_dissipation;

vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main () {
  vec2 coord = vUv - u_dt * bilerp(u_velocity_txr, vUv, u_vertex_texel).xy * u_vertex_texel;
  gl_FragColor = u_dissipation * bilerp(u_input_txr, coord, u_output_textel);
  gl_FragColor.a = 1.;
}
`,
    fragDivergence: `
precision highp float;
precision highp sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D u_velocity_txr;

void main () {
  float L = texture2D(u_velocity_txr, vL).x;
  float R = texture2D(u_velocity_txr, vR).x;
  float T = texture2D(u_velocity_txr, vT).y;
  float B = texture2D(u_velocity_txr, vB).y;
  float div = .5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0., 0., 1.);
}
`,
    fragPressure: `
precision highp float;
precision highp sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D u_pressure_txr;
uniform sampler2D u_divergence_txr;

void main () {
  float L = texture2D(u_pressure_txr, vL).x;
  float R = texture2D(u_pressure_txr, vR).x;
  float T = texture2D(u_pressure_txr, vT).x;
  float B = texture2D(u_pressure_txr, vB).x;
  float divergence = texture2D(u_divergence_txr, vUv).x;
  float pressure = (L + R + B + T - divergence) * 0.25;
  gl_FragColor = vec4(pressure, 0., 0., 1.);
}
`,
    fragGradientSubtract: `
precision highp float;
precision highp sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D u_pressure_txr;
uniform sampler2D u_velocity_txr;

void main () {
  float L = texture2D(u_pressure_txr, vL).x;
  float R = texture2D(u_pressure_txr, vR).x;
  float T = texture2D(u_pressure_txr, vT).x;
  float B = texture2D(u_pressure_txr, vB).x;
  vec2 velocity = texture2D(u_velocity_txr, vUv).xy;
  velocity.xy -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0., 1.);
}
`,
    fragPoint: `
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D u_input_txr;
uniform float u_ratio;
uniform vec3 u_point_value;
uniform vec2 u_point;
uniform float u_point_size;

void main () {
  vec2 p = vUv - u_point.xy;
  p.x *= u_ratio;
  vec3 splat = pow(2., -dot(p, p) / u_point_size) * u_point_value;
  vec3 base = texture2D(u_input_txr, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.);
}
`,
    fragDisplay: `
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D u_output_texture;
uniform vec3 u_bg_color;

void main () {
  vec3 C = texture2D(u_output_texture, vUv).rgb;
  float a = dot(C, vec3(0.333));
  a = pow(a, .4);
  a = clamp(a, 0., 1.);
  gl_FragColor = vec4(max(u_bg_color - C, 0.0), 1. - a);
}
`,
  },
  lf = { size: [1.8, 5.8], force: [84, 204], arms: 8, armReach: 0.9 };
function uf(e) {
  ((e = e.replace(`#`, ``)),
    e.length === 3 &&
      (e = e
        .split(``)
        .map((e) => e + e)
        .join(``)));
  let t = parseInt(e, 16);
  return {
    r: ((t >> 16) & 255) / 255,
    g: ((t >> 8) & 255) / 255,
    b: (t & 255) / 255,
  };
}
function df(e, t = {}) {
  if (!e) return;
  let n = e.querySelector(`.hero-liquid-video`),
    r = e.querySelector(`.hero-liquid-canvas`);
  if (!r) return;
  let i = getComputedStyle(document.documentElement),
    a = uf(t.bgColor || i.getPropertyValue(`--color-bg`).trim() || `#ffffff`),
    o = uf(
      t.liquidColor || i.getPropertyValue(`--color-text`).trim() || `#1a1815`,
    ),
    s = t.fluidDetail || `medium`,
    c = t.renderQuality || `high`,
    l;
  switch (s) {
    case `low`:
      l = 64;
      break;
    case `high`:
      l = 256;
      break;
    default:
      l = 128;
  }
  let u;
  switch (c) {
    case `low`:
      u = 384;
      break;
    case `ultra`:
      u = 1024;
      break;
    default:
      u = 512;
  }
  let d;
  switch (s) {
    case `low`:
      d = 6;
      break;
    case `high`:
      d = 12;
      break;
    default:
      d = 8;
  }
  let f = window.innerWidth < 768;
  f && ((l = 64), (u = 384), (d = 5));
  let p = 0.75,
    m = Math.max(1, r.clientWidth),
    h = Math.max(1, r.clientHeight),
    g = [];
  function _(e, t, n, r) {
    (e.addEventListener(t, n, r), g.push(() => e.removeEventListener(t, n, r)));
  }
  let v = !0,
    y = new IntersectionObserver(
      (e) => {
        v = e[0].isIntersecting;
      },
      { threshold: 0.1 },
    );
  y.observe(e);
  function b() {
    ((m = Math.max(1, r.clientWidth)),
      (h = Math.max(1, r.clientHeight)),
      (r.width = Math.max(1, Math.round(m * p))),
      (r.height = Math.max(1, Math.round(h * p))));
  }
  b();
  let x = (t.radius || 16) / 30,
    S = 0.95 + ((t.dissipation ?? 35) / 99) * 0.049,
    C = {
      SIM_RESOLUTION: l,
      DYE_RESOLUTION: u,
      DENSITY_DISSIPATION: S,
      VELOCITY_DISSIPATION: 0.9,
      PRESSURE_ITERATIONS: d,
      SPLAT_RADIUS: (3 * x) / window.innerHeight,
      color: o,
    },
    w = Date.now(),
    T = {
      x: 0.65 * window.innerWidth,
      y: 0.5 * window.innerHeight,
      dx: 0,
      dy: 0,
      moved: !1,
    },
    E = r.getContext(`webgl`, {
      alpha: !0,
      depth: !1,
      stencil: !1,
      antialias: !1,
      premultipliedAlpha: !0,
      preserveDrawingBuffer: !1,
    });
  if (!E) {
    console.warn(`WPKoi Liquid: WebGL not supported`);
    return;
  }
  if (!(
    E.getExtension(`OES_texture_float`) ||
    E.getExtension(`OES_texture_half_float`)
  )) {
    console.warn(`WPKoi Liquid: no float texture support`);
    return;
  }
  let D, O, k, A;
  function j(e, t) {
    let n = E.createShader(t);
    return (
      E.shaderSource(n, e),
      E.compileShader(n),
      E.getShaderParameter(n, E.COMPILE_STATUS)
        ? n
        : (console.error(
            `WPKoi Liquid: shader compile error: ` + E.getShaderInfoLog(n),
          ),
          E.deleteShader(n),
          null)
    );
  }
  function M(e, t) {
    let n = E.createProgram();
    return (
      E.attachShader(n, e),
      E.attachShader(n, t),
      E.linkProgram(n),
      E.getProgramParameter(n, E.LINK_STATUS)
        ? n
        : (console.error(
            `WPKoi Liquid: program link error: ` + E.getProgramInfoLog(n),
          ),
          null)
    );
  }
  function N(e) {
    let t = [],
      n = E.getProgramParameter(e, E.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; r++) {
      let n = E.getActiveUniform(e, r).name;
      t[n] = E.getUniformLocation(e, n);
    }
    return t;
  }
  let P = j(cf.vert, E.VERTEX_SHADER);
  function F(e) {
    let t = j(cf[e], E.FRAGMENT_SHADER),
      n = M(P, t);
    return { program: n, uniforms: N(n) };
  }
  let I = F(`fragPoint`),
    L = F(`fragDivergence`),
    R = F(`fragPressure`),
    z = F(`fragGradientSubtract`),
    B = F(`fragAdvection`),
    V = F(`fragDisplay`);
  g.push(
    of(() => {
      ((C.SPLAT_RADIUS = (3 * x) / window.innerHeight), b(), W());
    }),
  );
  let ee = 0,
    H = 0;
  g.push(
    of(() => {
      let t = e.getBoundingClientRect();
      ((ee = t.left), (H = t.top));
    }),
  );
  let te = (e) => e.pointerType !== `touch`;
  (_(window, `pointerdown`, (e) => {
    te(e) &&
      ((T.dx = 10), (T.dy = 10), (T.x = e.clientX - ee), (T.y = e.clientY - H));
  }),
    _(window, `pointermove`, (e) => {
      if (!te(e)) return;
      let t = e.clientX - ee,
        n = e.clientY - H;
      T.moved = !0;
      let r = f ? 3 : 5;
      ((T.dx = r * (t - T.x)), (T.dy = r * (n - T.y)), (T.x = t), (T.y = n));
    }));
  let ne = (() => {
    let e = E.createBuffer();
    (E.bindBuffer(E.ARRAY_BUFFER, e),
      E.bufferData(
        E.ARRAY_BUFFER,
        new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
        E.STATIC_DRAW,
      ));
    let t = E.createBuffer();
    return (
      E.bindBuffer(E.ELEMENT_ARRAY_BUFFER, t),
      E.bufferData(
        E.ELEMENT_ARRAY_BUFFER,
        new Uint16Array([0, 1, 2, 0, 2, 3]),
        E.STATIC_DRAW,
      ),
      { vertexBuffer: e, indexBuffer: t }
    );
  })();
  function re(e) {
    (E.bindBuffer(E.ARRAY_BUFFER, ne.vertexBuffer),
      E.bindBuffer(E.ELEMENT_ARRAY_BUFFER, ne.indexBuffer),
      E.vertexAttribPointer(0, 2, E.FLOAT, !1, 0, 0),
      E.enableVertexAttribArray(0),
      e == null
        ? (E.viewport(0, 0, E.drawingBufferWidth, E.drawingBufferHeight),
          E.bindFramebuffer(E.FRAMEBUFFER, null))
        : (E.viewport(0, 0, e.width, e.height),
          E.bindFramebuffer(E.FRAMEBUFFER, e.fbo)),
      E.drawElements(E.TRIANGLES, 6, E.UNSIGNED_SHORT, 0));
  }
  function U(e) {
    let t = E.drawingBufferWidth / E.drawingBufferHeight;
    t < 1 && (t = 1 / t);
    let n = Math.round(e),
      r = Math.round(e * t);
    return E.drawingBufferWidth > E.drawingBufferHeight
      ? { width: r, height: n }
      : { width: n, height: r };
  }
  function ie(e, t, n = E.RGBA) {
    E.activeTexture(E.TEXTURE0);
    let r = E.createTexture();
    (E.bindTexture(E.TEXTURE_2D, r),
      E.texParameteri(E.TEXTURE_2D, E.TEXTURE_MIN_FILTER, E.NEAREST),
      E.texParameteri(E.TEXTURE_2D, E.TEXTURE_MAG_FILTER, E.NEAREST),
      E.texParameteri(E.TEXTURE_2D, E.TEXTURE_WRAP_S, E.CLAMP_TO_EDGE),
      E.texParameteri(E.TEXTURE_2D, E.TEXTURE_WRAP_T, E.CLAMP_TO_EDGE),
      E.texImage2D(E.TEXTURE_2D, 0, n, e, t, 0, n, E.FLOAT, null));
    let i = E.createFramebuffer();
    return (
      E.bindFramebuffer(E.FRAMEBUFFER, i),
      E.framebufferTexture2D(
        E.FRAMEBUFFER,
        E.COLOR_ATTACHMENT0,
        E.TEXTURE_2D,
        r,
        0,
      ),
      E.viewport(0, 0, e, t),
      E.clear(E.COLOR_BUFFER_BIT),
      {
        fbo: i,
        width: e,
        height: t,
        attach(e) {
          return (
            E.activeTexture(E.TEXTURE0 + e),
            E.bindTexture(E.TEXTURE_2D, r),
            e
          );
        },
        dispose() {
          (E.deleteTexture(r), E.deleteFramebuffer(i));
        },
      }
    );
  }
  function ae(e, t, n) {
    let r = ie(e, t, n),
      i = ie(e, t, n);
    return {
      width: e,
      height: t,
      texelSizeX: 1 / e,
      texelSizeY: 1 / t,
      read: () => r,
      write: () => i,
      swap() {
        let e = r;
        ((r = i), (i = e));
      },
      dispose() {
        (r.dispose(), i.dispose());
      },
    };
  }
  function W() {
    (D && D.dispose(), O && O.dispose(), k && k.dispose(), A && A.dispose());
    let e = U(C.SIM_RESOLUTION),
      t = U(C.DYE_RESOLUTION);
    ((D = ae(t.width, t.height)),
      (O = ae(e.width, e.height)),
      (k = ie(e.width, e.height, E.RGB)),
      (A = ae(e.width, e.height, E.RGB)));
  }
  let G = !1,
    oe;
  function K(e, t, n, r, i) {
    let a = 0.02;
    (E.useProgram(I.program),
      E.uniform1i(I.uniforms.u_input_txr, O.read().attach(0)),
      E.uniform1f(I.uniforms.u_ratio, m / h),
      E.uniform2f(I.uniforms.u_point, e / m, 1 - t / h),
      E.uniform3f(I.uniforms.u_point_value, n, -r, 1),
      E.uniform1f(I.uniforms.u_point_size, i),
      re(O.write()),
      O.swap(),
      E.uniform1i(I.uniforms.u_input_txr, D.read().attach(0)),
      E.uniform3f(
        I.uniforms.u_point_value,
        Math.max(1 - C.color.r, a),
        Math.max(1 - C.color.g, a),
        Math.max(1 - C.color.b, a),
      ),
      re(D.write()),
      D.swap());
  }
  let se = [];
  function ce(e, t) {
    let n = lf.size[0] + Math.random() * (lf.size[1] - lf.size[0]),
      r = C.SPLAT_RADIUS * n,
      i = Math.sqrt(r) * h * lf.armReach,
      a = lf.force[0] + Math.random() * (lf.force[1] - lf.force[0]),
      o = Math.random() * Math.PI * 2;
    se.push({ x: e, y: t, dx: 0, dy: 0, size: r });
    for (let n = 0; n < lf.arms; n++) {
      let s = o + (n / lf.arms) * Math.PI * 2,
        c = Math.cos(s),
        l = Math.sin(s);
      se.push({
        x: e + c * i,
        y: t + l * i,
        dx: c * a,
        dy: l * a,
        size: r * 0.45,
      });
    }
  }
  let le = t.dropGap || [2200, 4200],
    ue = null;
  function de() {
    if ((clearTimeout(ue), pe)) return;
    let [e, t] = le;
    ue = setTimeout(
      () => {
        (v &&
          G &&
          ce((0.1 + Math.random() * 0.8) * m, (0.1 + Math.random() * 0.8) * h),
          de());
      },
      e + Math.random() * (t - e),
    );
  }
  let fe = 0,
    q = 0,
    pe = !1;
  function J(e = performance.now()) {
    if (((oe = requestAnimationFrame(J)), pe || !v || (fe && e - q < fe)))
      return;
    q = e;
    let t = (Date.now() - w) / 1e3;
    ((t = Math.min(t, 0.05)), (w = Date.now()));
    let n = t / 0.016,
      r = C.DENSITY_DISSIPATION ** +n,
      i = C.VELOCITY_DISSIPATION ** +n;
    for (
      T.moved && ((T.moved = !1), K(T.x, T.y, T.dx, T.dy, C.SPLAT_RADIUS));
      se.length;
    ) {
      let e = se.shift();
      K(e.x, e.y, e.dx, e.dy, e.size);
    }
    (E.useProgram(L.program),
      E.uniform2f(L.uniforms.u_vertex_texel, O.texelSizeX, O.texelSizeY),
      E.uniform1i(L.uniforms.u_velocity_txr, O.read().attach(0)),
      re(k),
      E.useProgram(R.program),
      E.uniform2f(R.uniforms.u_vertex_texel, O.texelSizeX, O.texelSizeY),
      E.uniform1i(R.uniforms.u_divergence_txr, k.attach(0)));
    for (let e = 0; e < C.PRESSURE_ITERATIONS; e++)
      (E.uniform1i(R.uniforms.u_pressure_txr, A.read().attach(1)),
        re(A.write()),
        A.swap());
    (E.useProgram(z.program),
      E.uniform2f(z.uniforms.u_vertex_texel, O.texelSizeX, O.texelSizeY),
      E.uniform1i(z.uniforms.u_pressure_txr, A.read().attach(0)),
      E.uniform1i(z.uniforms.u_velocity_txr, O.read().attach(1)),
      re(O.write()),
      O.swap(),
      E.useProgram(B.program),
      E.uniform2f(B.uniforms.u_vertex_texel, O.texelSizeX, O.texelSizeY),
      E.uniform2f(B.uniforms.u_output_textel, O.texelSizeX, O.texelSizeY),
      E.uniform1i(B.uniforms.u_velocity_txr, O.read().attach(0)),
      E.uniform1i(B.uniforms.u_input_txr, O.read().attach(0)),
      E.uniform1f(B.uniforms.u_dt, t),
      E.uniform1f(B.uniforms.u_dissipation, i),
      re(O.write()),
      O.swap(),
      E.uniform2f(B.uniforms.u_output_textel, D.texelSizeX, D.texelSizeY),
      E.uniform1i(B.uniforms.u_velocity_txr, O.read().attach(0)),
      E.uniform1i(B.uniforms.u_input_txr, D.read().attach(1)),
      E.uniform1f(B.uniforms.u_dissipation, r),
      re(D.write()),
      D.swap(),
      (G = !0),
      E.useProgram(V.program),
      E.uniform3f(V.uniforms.u_bg_color, a.r, a.g, a.b),
      E.uniform1i(V.uniforms.u_output_texture, D.read().attach(0)),
      re());
  }
  return (
    W(),
    J(),
    de(),
    n && n.paused && n.play().catch(() => {}),
    {
      setDropRate(e, t) {
        ((le = [e, t]), de());
      },
      setFrameRate(e) {
        fe = e > 0 ? 1e3 / e : 0;
      },
      setPaused(e) {
        if (e !== pe) {
          if (((pe = e), pe)) {
            clearTimeout(ue);
            return;
          }
          ((w = Date.now()), (q = 0), de());
        }
      },
      destroy() {
        (g.forEach((e) => e()),
          y.disconnect(),
          clearTimeout(ue),
          oe && cancelAnimationFrame(oe));
      },
    }
  );
}
var ff = new URLSearchParams(window.location.search),
  pf = ff.has(`debug`),
  mf = new Set(
    (ff.get(`off`) || ``)
      .split(`,`)
      .map((e) => e.trim())
      .filter(Boolean),
  ),
  hf = {
    glow: `the name's text-shadow aura`,
    marker: `every hand-drawn underline: its SVG turbulence filter and its glitch keyframes`,
    blur: `ALL filters everywhere, including the per-character blur the reveals animate`,
    shadow: `all text-shadows`,
    willchange: `every will-change hint (drops the permanent composited layers)`,
    mask: `the gallery mask-images`,
    grain: `the grain overlay and its blend mode`,
    photoglitch: `the portrait glitch keyframes`,
    flip: `the hero to sidebar assembly timeline, whole (heroTransition.js)`,
    "flip-photo": `only the portrait width/height tween (layout)`,
    "flip-social": `only the social row column-gap and per-link width tweens (layout)`,
    "flip-stack": `only the brand stack height-to-zero tween (layout)`,
    "flip-name": `only the name scale tween (raster of scaled type)`,
    "flip-nav": `only the nav link scale tweens (raster of scaled type)`,
    ruler: `the ruler readout that rewrites a dozen labels per scrolled frame`,
    namelayer: `the composited layer the name is scaled on while the hero assembles`,
    reveal: `the skills panel reveal timeline (skills.js)`,
    jitter: `the shared tremor on every drawn mark (motion.js)`,
    glitch: `the character glitch loops and the name glitch`,
    liquid: `the fluid simulation layer`,
    smoother: `ScrollSmoother's smoothing (falls back to native scroll)`,
  };
function gf(e) {
  return mf.has(e);
}
function _f() {
  if (
    (mf.forEach((e) => document.documentElement.classList.add(`dbg-${e}`)), !pf)
  ) {
    mf.size && console.warn(`[debug] switched off:`, [...mf].join(`, `));
    return;
  }
  let e = document.createElement(`div`);
  ((e.id = `dbg-hud`), document.body.appendChild(e));
  let t = performance.now(),
    n = [],
    r = [],
    i = !1;
  try {
    (new PerformanceObserver((e) => {
      e.getEntries().forEach((e) => {
        let t = e.startTime + e.duration;
        r.push({
          at: e.startTime,
          total: e.duration,
          blocking: e.blockingDuration,
          render: e.renderStart ? t - e.renderStart : 0,
          styleLayout: e.styleAndLayoutStart ? t - e.styleAndLayoutStart : 0,
          scripts: (e.scripts || []).map((e) => ({
            name: e.sourceFunctionName || e.name || `(anonymous)`,
            where: `${e.sourceURL || `?`}:${e.sourceCharPosition ?? `?`}`,
            invoker: e.invoker || e.invokerType || ``,
            ms: e.duration,
            forced: e.forcedStyleAndLayoutDuration || 0,
          })),
        });
      });
    }).observe({ type: `long-animation-frame`, buffered: !0 }),
      (i = !0));
  } catch {
    console.warn(
      `[debug] long-animation-frame is not available in this browser; frame timings only.`,
    );
  }
  function a(o) {
    requestAnimationFrame(a);
    let s = o - t;
    ((t = o), n.push({ at: o, dt: s }), n.length > 600 && n.shift());
    let c = o - 1e3,
      l = 0,
      u = 0;
    for (let e = n.length - 1; e >= 0 && n[e].at >= c; e--)
      (u++, n[e].dt > l && (l = n[e].dt));
    let d = r
        .filter((e) => e.at >= c)
        .reduce((e, t) => Math.max(e, t.total), 0),
      f =
        l < 20
          ? `ok`
          : d > l * 0.6
            ? `MAIN THREAD`
            : i
              ? `COMPOSITOR / RASTER`
              : `?`;
    e.textContent = [
      `fps ${u}`,
      `frame worst ${l.toFixed(1)}ms`,
      `main worst ${d ? `${d.toFixed(1)}ms` : `—`}`,
      `>> ${f}`,
      ``,
      `p = report   c = clear`,
    ].join(`
`);
  }
  requestAnimationFrame(a);
  function o() {
    if (!r.length) {
      console.log(
        `%c[debug] no long main-thread frames were recorded.`,
        `font-weight:bold`,
        `
If the page still stuttered, the main thread was keeping up and the cost is
in the compositor: raster of large or filtered layers, blurs, blend modes,
or text being re-rasterised at a changing scale. Switch off ?off=blur,glow,
marker,willchange one at a time and watch "frame worst" rather than "main".`,
      );
      return;
    }
    let e = r
      .slice()
      .sort((e, t) => t.total - e.total)
      .slice(0, 10);
    (console.group(
      `[debug] ${r.length} long frames; worst ${e[0].total.toFixed(1)}ms`,
    ),
      console.table(
        e.map((e) => ({
          "total ms": +e.total.toFixed(1),
          "blocking ms": +e.blocking.toFixed(1),
          "render ms": +e.render.toFixed(1),
          "style+layout ms": +e.styleLayout.toFixed(1),
          "paint ms": +(e.render - e.styleLayout).toFixed(1),
          "script ms": +e.scripts.reduce((e, t) => e + t.ms, 0).toFixed(1),
        })),
      ));
    let t = new Map();
    (r.forEach((e) =>
      e.scripts.forEach((e) => {
        let n = `${e.name}  ${e.where}`,
          r = t.get(n) || { ms: 0, forced: 0, calls: 0, invoker: e.invoker };
        ((r.ms += e.ms), (r.forced += e.forced), (r.calls += 1), t.set(n, r));
      }),
    ),
      console.table(
        [...t.entries()]
          .sort((e, t) => t[1].ms - e[1].ms)
          .slice(0, 15)
          .map(([e, t]) => ({
            script: e,
            invoker: t.invoker,
            calls: t.calls,
            "total ms": +t.ms.toFixed(1),
            "forced layout ms": +t.forced.toFixed(1),
          })),
      ));
    let n = r.reduce(
      (e, t) => ({
        style: e.style + t.styleLayout,
        paint: e.paint + (t.render - t.styleLayout),
        script: e.script + t.scripts.reduce((e, t) => e + t.ms, 0),
      }),
      { style: 0, paint: 0, script: 0 },
    );
    (console.log(
      `Across all long frames — script %.0fms, style+layout %.0fms, paint %.0fms.`,
      n.script,
      n.style,
      n.paint,
    ),
      console.groupEnd());
  }
  ((window.__perf = {
    report: o,
    clear() {
      ((n.length = 0), (r.length = 0), console.log(`[debug] cleared`));
    },
    frames: n,
    loafs: r,
    switches: hf,
  }),
    window.addEventListener(`keydown`, (e) => {
      (e.key === `p` && o(), e.key === `c` && window.__perf.clear());
    }),
    console.log(
      `%c[debug] on.%c Scroll the hero, then press p for the report.
Kill switches: add ?off=name,name — one at a time.
%o`,
      `font-weight:bold`,
      ``,
      hf,
    ));
}
var vf = `PRESTO ILLICO`,
  yf = { top: 0.076, bottom: 0.924 },
  bf = [0.7, 2.4],
  xf = [0.08, 0.26],
  Sf = (e, t) => e + Math.random() * (t - e);
function Cf(e = 4, t = 12) {
  let n = Sf(e, t),
    r = Sf(0, 100);
  return [Math.max(0, r - n), Math.min(100, r + n)];
}
function wf(e, t, n, r) {
  return `polygon(${(n === 0
    ? [
        [0, 0],
        [e, 0],
        [e, r],
        [t, r],
        [t, 0],
        [100, 0],
        [100, 100],
        [0, 100],
      ]
    : [
        [0, 0],
        [100, 0],
        [100, 100],
        [t, 100],
        [t, n],
        [e, n],
        [e, 100],
        [0, 100],
      ]
  )
    .map(([e, t]) => `${e.toFixed(2)}% ${t.toFixed(2)}%`)
    .join(`, `)})`;
}
function Tf() {
  let e = document.querySelector(`.sidebar-name`),
    t = e ? e.querySelector(`.sidebar-name-text`) : null,
    n = t ? t.querySelector(`.sidebar-name-line`) : null;
  if (!e || !t || !n) return;
  let r = n.cloneNode(!0);
  r.classList.add(`sidebar-name-ghost`);
  let i = n.cloneNode(!0);
  (i.classList.add(`sidebar-name-ghost`, `sidebar-name-ghost--flash`),
    t.append(r, i));
  function a() {
    t.style.fontSize = ``;
    let e = t.getBoundingClientRect().width,
      r = n.getBoundingClientRect().width;
    if (!e || !r) return;
    let i = parseFloat(getComputedStyle(t).fontSize);
    t.style.fontSize = `${((i * e) / r).toFixed(3)}px`;
  }
  function o() {
    let { top: n, bottom: r } = yf,
      i = getComputedStyle(t),
      a = parseFloat(i.lineHeight) || e.offsetHeight;
    if (a > 0) {
      let e = document.createElement(`canvas`).getContext(`2d`);
      e.font = `${i.fontWeight} ${parseFloat(i.fontSize)}px ${i.fontFamily}`;
      let t = e.measureText((n.textContent || vf).trim().toUpperCase());
      if (
        t.fontBoundingBoxAscent != null &&
        t.actualBoundingBoxAscent != null
      ) {
        let e =
          (a - (t.fontBoundingBoxAscent + t.fontBoundingBoxDescent)) / 2 +
          t.fontBoundingBoxAscent;
        ((n = (e - t.actualBoundingBoxAscent) / a),
          (r = (e + t.actualBoundingBoxDescent) / a));
      }
    }
    ((e.dataset.inkTop = n.toFixed(4)), (e.dataset.inkBottom = r.toFixed(4)));
  }
  let s = ``;
  function c(n) {
    (a(), o());
    let r = `${t.clientWidth}|${t.style.fontSize}|${e.dataset.inkTop}`;
    r !== s && ((s = r), n && sf());
  }
  (of(() => c(!1)),
    c(!1),
    document.fonts &&
      document.fonts.ready &&
      document.fonts.ready.then(() => c(!0)),
    typeof ResizeObserver == `function` &&
      new ResizeObserver(() => c(!0)).observe(t));
  let l = !0;
  new IntersectionObserver(
    (e) => {
      l = e[0].isIntersecting;
    },
    { rootMargin: `15% 0px` },
  ).observe(e);
  function u() {
    ((n.style.clipPath = ``),
      (r.style.cssText = ``),
      (i.style.cssText = ``),
      i.classList.remove(`is-static`));
  }
  function d(e) {
    let [t, i] = Cf(),
      a = Sf(25, 75),
      o = Math.random() < 0.5,
      s = o ? 0 : a,
      c = o ? a : 100;
    if (
      ((n.style.clipPath = wf(t, i, s, c)),
      (r.style.clipPath = `inset(${s.toFixed(2)}% ${(100 - i).toFixed(2)}% ${(100 - c).toFixed(2)}% ${t.toFixed(2)}%)`),
      e)
    )
      r.style.filter = `blur(0.018em)`;
    else {
      let e = Sf(1.2, 3.2) * (Math.random() < 0.5 ? -1 : 1);
      r.style.transform = `translateX(${e.toFixed(2)}%)`;
    }
    r.style.visibility = `visible`;
  }
  function f(e) {
    let [t, n] = Cf(),
      r = Math.floor(Sf(0, 12)) * (100 / 12),
      a = r + 100 / 12;
    ((i.style.clipPath = `inset(${r.toFixed(2)}% ${(100 - n).toFixed(2)}% ${(100 - a).toFixed(2)}% ${t.toFixed(2)}%)`),
      i.classList.toggle(`is-static`, e),
      e && (i.style.transform = `translateX(${Sf(-0.6, 0.6).toFixed(2)}%)`),
      (i.style.visibility = `visible`));
  }
  function p() {
    let e = Math.random();
    e < 0.4 ? d(!1) : e < 0.6 ? d(!0) : f(!(e < 0.85));
  }
  function m() {
    (l && (p(), Y.delayedCall(Sf(...xf), u)), Y.delayedCall(Sf(...bf), m));
  }
  gf(`glitch`) || Y.delayedCall(Sf(0.6, 1.8), m);
}
var Ef = [2200, 4200],
  Df = [4e3, 6500],
  Of = [1200, 2400],
  kf = 0,
  Af = 30;
function jf() {
  return 2.4 * window.innerHeight;
}
function Mf(e) {
  let t = e.scroll();
  return t >= e.start && t < e.end;
}
var Nf = 0.3,
  Pf = null;
function Ff() {
  return Pf;
}
function If() {
  let e = document.querySelector(`.hero-liquid`),
    t = document.querySelector(`.hero`),
    n = () => (Vd() ? Of : Ef),
    r = e && !gf(`liquid`) ? df(e, { dropGap: n() }) : null;
  if (((Pf = r || null), r && t)) {
    let e = !0,
      i = (t) => {
        ((e = Mf(t)),
          r.setDropRate(...(e ? n() : Df)),
          r.setFrameRate(e ? kf : Af));
      };
    (Hd(() => r.setDropRate(...(e ? n() : Df))),
      Z.create({
        trigger: t,
        start: `top top`,
        end: () => `+=${jf()}`,
        invalidateOnRefresh: !0,
        onToggle: i,
        onRefresh: i,
        onUpdate: i,
      }));
  }
  return document.fonts.load(`400 100px "Anton"`).then(() => Tf());
}
var Lf =
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  Rf = Vd() || Lf || (navigator.hardwareConcurrency || 8) <= 4;
function $(e, t = ``) {
  return [Rf ? `` : `blur(${e}px)`, t].filter(Boolean).join(` `) || `none`;
}
var zf = Y.parseEase(`sine.inOut`),
  Bf = (e, t) => e + Math.random() * (t - e),
  Vf = 1 / 24,
  Hf = new Map(),
  Uf = null,
  Wf = !1;
function Gf(e) {
  ((Uf ||= new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        let t = Hf.get(e.target);
        t && (t.visible = e.isIntersecting);
      });
    },
    { rootMargin: `20% 0px` },
  )),
    Uf.observe(e));
}
function Kf(e) {
  let t = e.amp;
  ((e.fromX = e.toX),
    (e.fromY = e.toY),
    (e.fromRotate = e.toRotate),
    (e.toX = Bf(-0.8, 0.8) * t),
    (e.toY = Bf(-0.6, 0.6) * t),
    (e.toRotate = e.rotateBase + Bf(-1.2, 1.2) * t),
    (e.duration = Bf(0.12, 0.22)),
    (e.hold = Bf(0.03, 0.12)),
    (e.elapsed = 0));
}
function qf(e) {
  let t = e.amp,
    n = $(
      (Math.random() * 0.5 * t).toFixed(3),
      `brightness(${(1 - 0.06 * t + Math.random() * 0.18 * t).toFixed(3)})`,
    );
  n !== e.lastFilter && ((e.lastFilter = n), (e.el.style.filter = n));
}
var Jf = !1;
function Yf(e) {
  e !== Jf &&
    ((Jf = e),
    e &&
      Hf.forEach((e) => {
        ((e.fromX = 0),
          (e.toX = 0),
          (e.fromY = 0),
          (e.toY = 0),
          (e.fromRotate = e.rotateBase),
          (e.toRotate = e.rotateBase),
          (e.elapsed = 0),
          e.setX(0),
          e.setY(0),
          e.setRotate(e.rotateBase),
          (e.lastFilter = ``),
          (e.el.style.filter = ``));
      }));
}
function Xf(e, t) {
  if (Jf) return;
  let n = Math.min(t || 0, 100) / 1e3;
  Hf.forEach((e) => {
    if (!e.visible) return;
    ((e.elapsed += n), e.elapsed >= e.duration + e.hold && Kf(e));
    let t = zf(e.duration > 0 ? Math.min(e.elapsed / e.duration, 1) : 1);
    (e.setX(e.fromX + (e.toX - e.fromX) * t),
      e.setY(e.fromY + (e.toY - e.fromY) * t),
      e.setRotate(e.fromRotate + (e.toRotate - e.fromRotate) * t),
      (e.filterElapsed += n),
      e.filterElapsed >= Vf && ((e.filterElapsed = 0), qf(e)));
  });
}
function Zf(e, { rotateBase: t = 0, amp: n = 1 } = {}) {
  if (!e || Hf.has(e) || gf(`jitter`)) return;
  let r = {
    el: e,
    amp: n,
    rotateBase: t,
    fromX: 0,
    fromY: 0,
    fromRotate: t,
    toX: 0,
    toY: 0,
    toRotate: t,
    duration: 0.15,
    hold: 0,
    elapsed: 0,
    filterElapsed: 0,
    lastFilter: ``,
    visible: !0,
    setX: Y.quickSetter(e, `x`, `px`),
    setY: Y.quickSetter(e, `y`, `px`),
    setRotate: Y.quickSetter(e, `rotate`, `deg`),
  };
  (Kf(r), Hf.set(e, r), Gf(e), Wf || ((Wf = !0), Y.ticker.add(Xf)));
}
function Qf(e) {
  if (!e || !e.length || gf(`glitch`)) return;
  let t = !0;
  new IntersectionObserver(
    (e) => {
      t = e[0].isIntersecting;
    },
    { rootMargin: `20% 0px` },
  ).observe(e[0].parentNode || e[0]);
  let n = () => {
    if (t) {
      let t = Y.utils.random(e);
      Math.random() < 0.15
        ? Y.timeline()
            .to(t, { rotateY: 180, duration: 0.5, ease: `power1.inOut` })
            .to(
              t,
              { rotateY: 0, duration: 0.5, ease: `power1.inOut` },
              `+=0.15`,
            )
        : Y.timeline()
            .to(t, {
              filter: $(3, `brightness(1.7)`),
              x: Y.utils.random(-3, 3),
              y: Y.utils.random(-3, 3),
              duration: 0.1,
              ease: `power1.out`,
            })
            .to(t, {
              filter: $(0, `brightness(1)`),
              x: 0,
              y: 0,
              duration: 0.3,
              ease: `power1.inOut`,
            });
    }
    Y.delayedCall(Y.utils.random(1.4, 3.6), n);
  };
  Y.delayedCall(Y.utils.random(1, 2.5), n);
}
function $f() {
  let e = document.querySelector(`.hero`),
    t = document.querySelector(`.skills-panel`),
    n = document.querySelector(`.skills-heading-line--light`),
    r = document.querySelector(`.skills-heading-line--accent`),
    i = document.querySelector(`.skills-heading-underline-stroke`),
    a = document.querySelector(`.skills-heading-underline`),
    o = document.querySelector(`.skills-subheading`),
    s = Array.from(document.querySelectorAll(`.skills-stat`)),
    c = document.querySelector(`.skills-stat-arrow`),
    l = Array.from(document.querySelectorAll(`.skills-category`));
  if (!e || !t || !n || !r) return;
  let u = jf;
  if (
    (Z.create({
      trigger: t,
      start: `top top`,
      end: () => `+=${u()}`,
      pin: !0,
      pinSpacing: !0,
      invalidateOnRefresh: !0,
      onUpdate: (e) => t.classList.toggle(`is-live`, e.progress > 0.2),
    }),
    i && a)
  ) {
    Y.set(a, { opacity: 0 });
    let e = i.getTotalLength() + 8;
    Y.set(i, { strokeDasharray: e, strokeDashoffset: e });
  }
  c && Y.set(c, { scale: 0.8, transformOrigin: `15% 85%` });
  let d = gf(`reveal`)
    ? null
    : Promise.all([
        document.fonts.load(`400 64px "Anton"`),
        document.fonts.load(`500 16px "Satoshi"`),
      ]);
  d &&
    d.then(() => {
      let t = new Nc(n, { type: `chars` }),
        l = new Nc(r, { type: `chars` }),
        d = new Nc(o, { type: `words` }),
        f = s.map((e) => {
          let t = e.querySelector(`.skills-stat-number`);
          return t ? new Nc(t, { type: `chars` }) : null;
        }),
        p = s.map((e) =>
          Array.from(e.querySelectorAll(`.skills-stat-label-line`)),
        );
      function m(e) {
        e.forEach((e) => {
          Y.set(e, {
            x: Q(Y.utils.random(-46, 46)),
            y: Q(Y.utils.random(-26, 26)),
            rotate: Y.utils.random(-16, 16),
            filter: $(10),
            opacity: 0,
          });
        });
      }
      (m(t.chars),
        m(l.chars),
        Y.set(d.words, { y: Q(22), opacity: 0, filter: $(8) }),
        f.forEach((e) => {
          e && m(e.chars);
        }),
        p.forEach((e) => {
          Y.set(e, { y: Q(14), opacity: 0, filter: $(6) });
        }));
      let h = Y.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top top`,
          end: () => `+=${u()}`,
          scrub: 1,
          invalidateOnRefresh: !0,
        },
      });
      h.to({}, { duration: 1 }, 0);
      let g = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` },
        _ = { y: 0, opacity: 1, filter: $(0), ease: `none` };
      (h
        .to(t.chars, { ...g, duration: 0.11, stagger: 0.009 }, 0.23)
        .to(l.chars, { ...g, duration: 0.11, stagger: 0.009 }, 0.3),
        a && h.to(a, { opacity: 1, ease: `none`, duration: 0.09 }, 0.57),
        i &&
          h.to(i, { strokeDashoffset: 0, ease: `none`, duration: 0.09 }, 0.57),
        h.to(d.words, { ..._, duration: 0.075, stagger: 0.009 }, 0.59),
        f.forEach((e, t) => {
          if (!e) return;
          let n = 0.72 + t * 0.055;
          (h.to(e.chars, { ...g, duration: 0.09, stagger: 0.008 }, n),
            h.to(p[t], { ..._, duration: 0.08, stagger: 0.02 }, n + 0.03));
        }),
        c &&
          h.to(
            c,
            { opacity: 1, scale: 1, ease: `power2.out`, duration: 0.08 },
            0.82,
          ),
        Qf(l.chars),
        Zf(c));
    });
  let f = document.querySelector(`.hero-liquid-video--alt`),
    p = document.querySelector(`#skills`),
    m = ``;
  function h(e) {
    let t = e > 0 ? $(e) : `none`;
    t !== m && ((m = t), (f.style.filter = t));
  }
  let g = (e) => Math.round((24 * Math.min(Math.max(e, 0), 1)) / 2) * 2;
  if (f && p) {
    let e = Y.timeline({
        scrollTrigger: {
          trigger: p,
          start: `top 115%`,
          end: `top 50%`,
          scrub: 0.5,
        },
        onUpdate() {
          h(g(1 - this.progress() / 0.45));
        },
      }).to(f, { opacity: Nf, ease: `none`, duration: 1 }, 0),
      t = (t) => {
        let n = e.scrollTrigger;
        (n && (t ? n.disable(!0) : n.enable()),
          t && (h(0), Y.set(f, { opacity: 0 }), f.pause()));
      };
    (t(Vd()), Hd(t));
  }
  l.length &&
    Promise.all([
      document.fonts.load(`400 64px "Anton"`),
      document.fonts.load(`500 16px "Satoshi"`),
    ]).then(() => {
      l.forEach((e) => {
        let t = e.querySelector(`.skills-category-index`),
          n = e.querySelector(`.skills-category-title`),
          r = e.querySelector(`.skills-category-tags`),
          i = e.querySelector(`.skills-category-note`);
        if (!n) return;
        let a = new Nc(n, { type: `words` });
        (Y.set(t, { y: Q(8), opacity: 0, filter: $(5) }),
          Y.set(a.words, { y: Q(16), opacity: 0, filter: $(7) }),
          Y.set(r, { y: Q(12), opacity: 0, filter: $(6) }),
          i &&
            (Y.set(i, { y: Q(10), opacity: 0, filter: $(6) }),
            Zf(i.querySelector(`.skills-category-note-text`)),
            Zf(i.querySelector(`.skills-category-note-arrow`), {
              rotateBase: 45,
            })));
        let o = { y: 0, opacity: 1, filter: $(0), ease: `none` },
          s = Y.timeline({
            scrollTrigger: {
              trigger: e,
              start: `top 90%`,
              end: `top 55%`,
              scrub: 0.4,
            },
          })
            .to(t, { ...o, duration: 0.3 }, 0)
            .to(a.words, { ...o, duration: 0.4, stagger: 0.08 }, 0.15)
            .to(r, { ...o, duration: 0.3 }, 0.45);
        i && s.to(i, { ...o, duration: 0.3 }, 0.6);
      });
    });
}
var ep = {
    "Open menu": `Menü megnyitása`,
    "Close menu": `Menü bezárása`,
    MENU: `MENÜ`,
    CLOSE: `BEZÁR`,
    "WordPress theme demo": `WordPress téma demó`,
  },
  tp = document.documentElement.lang === `hu`,
  np = (e) => (tp && ep[e]) || e,
  rp = 512,
  ip = 7,
  ap = 80,
  op = 0.7,
  sp = 1.4,
  cp = 18,
  lp = 0.88,
  up = 0.26,
  dp = 0.025,
  fp = 0.068,
  pp = [10, 16],
  mp = 0.055;
function hp(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function gp(e) {
  let t = Math.sin(e) * 43758.5453123;
  return t - Math.floor(t);
}
function _p(...e) {
  let t = 0;
  return (
    e.forEach((e, n) => {
      t += e * (12.9898 + n * 37.719);
    }),
    gp(t)
  );
}
function vp(e, t, n) {
  if (e / t > n) {
    let r = t * n;
    return { sx: (e - r) / 2, sy: 0, sw: r, sh: t };
  }
  return { sx: 0, sy: 0, sw: e, sh: e / n };
}
function yp(e) {
  return new Promise((t) => {
    let n = new Image();
    ((n.decoding = `async`),
      (n.onload = () => t(n)),
      (n.onerror = () => t(null)),
      (n.src = e));
  });
}
function bp(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = rp), (n.height = rp));
  let r = n.getContext(`2d`);
  return (
    r.drawImage(e, 0, 0, rp, rp),
    (r.globalCompositeOperation = `multiply`),
    (r.fillStyle = t),
    r.fillRect(0, 0, rp, rp),
    n
  );
}
function xp(e = 64) {
  let t = document.createElement(`canvas`);
  ((t.width = e), (t.height = e));
  let n = t.getContext(`2d`),
    r = n.createImageData(e, e);
  for (let e = 0; e < r.data.length; e += 4) {
    let t = Math.random() * 255;
    ((r.data[e] = t),
      (r.data[e + 1] = t),
      (r.data[e + 2] = t),
      (r.data[e + 3] = 255));
  }
  return (n.putImageData(r, 0, 0), t);
}
function Sp(e, t, n = {}) {
  if (!e || !t?.length) return null;
  let r = e.getContext(`2d`);
  if (!r) return null;
  let i = getComputedStyle(document.documentElement),
    a = i.getPropertyValue(`--color-light`).trim() || `#eaf5d4`,
    o = i.getPropertyValue(`--color-bg`).trim() || `#1d1b1a`,
    s = i.getPropertyValue(`--color-accent`).trim() || `#b3e823`,
    c = n.slideAspect ?? 1,
    l = n.gapRatio ?? 0.11,
    u = n.baseSpeed ?? 55,
    d = u * (n.entryBoost ?? 9),
    f = n.entrySettle ?? 0.55,
    p = window.matchMedia?.(`(hover: hover) and (pointer: fine)`).matches ?? !0,
    m = t.map((e) => ({
      src: typeof e == `string` ? e : e.src,
      label: typeof e == `string` ? null : e.label || null,
      href: typeof e == `string` ? null : e.href || null,
      img: null,
      ready: !1,
      channelsReady: !1,
      rC: null,
      gC: null,
      bC: null,
    })),
    h = Array.from({ length: 4 }, () => xp()),
    g = document.createElement(`canvas`),
    _ = g.getContext(`2d`),
    v = Math.min(window.devicePixelRatio || 1, 2),
    y = 0,
    b = 0,
    x = 0,
    S = 0,
    C = 0,
    w = 0;
  function T() {
    let t = e.getBoundingClientRect();
    ((y = Math.max(1, t.width)),
      (b = Math.max(1, t.height)),
      (v = Math.min(window.devicePixelRatio || 1, 2)),
      (e.width = Math.round(y * v)),
      (e.height = Math.round(b * v)),
      r.setTransform(v, 0, 0, v, 0, 0),
      (S = b),
      (x = S * c),
      (C = S * l),
      (w = x + C),
      (g.width = Math.max(1, Math.round(x * v))),
      (g.height = Math.max(1, Math.round(S * v))),
      _.setTransform(v, 0, 0, v, 0, 0));
  }
  T();
  let E = of(T);
  Promise.all(m.map((e) => yp(e.src))).then((e) => {
    e.forEach((e, t) => {
      e && ((m[t].img = e), (m[t].ready = !0));
    });
  });
  function D(e) {
    return ((e % m.length) + m.length) % m.length;
  }
  function O(e) {
    e.channelsReady ||
      ((e.channelsReady = !0),
      (e.rC = bp(e.img, `#ff0000`)),
      (e.gC = bp(e.img, `#00ff00`)),
      (e.bC = bp(e.img, `#0000ff`)));
  }
  let k = {
      x: -9999,
      y: -9999,
      clientX: -9999,
      clientY: -9999,
      active: !1,
      dirty: !1,
    },
    A = { n: null, intensity: 0 },
    j = !1;
  function M(e) {
    ((k.clientX = e.clientX),
      (k.clientY = e.clientY),
      (k.active = !0),
      (k.dirty = !0));
  }
  function N() {
    k.active = !1;
  }
  p &&
    (e.addEventListener(`mousemove`, M), e.addEventListener(`mouseleave`, N));
  let P = !0,
    F = new IntersectionObserver(
      (e) => {
        P = e[0].isIntersecting;
      },
      { threshold: 0 },
    );
  F.observe(e);
  let I = !0;
  function L(e, t) {
    if (w <= 0) return null;
    let n = Math.floor((e + U) / w);
    for (let r = n - 1; r <= n + 1; r++) {
      let n = V(r * w - U);
      if (e < n.dx || e > n.dx + n.dw) continue;
      let i = B(e);
      if (t >= i.top && t <= i.top + i.height) return r;
    }
    return null;
  }
  function R(t) {
    let n = e.getBoundingClientRect(),
      r = L(t.clientX - n.left, t.clientY - n.top);
    if (r === null) return;
    let { href: i } = m[D(r)];
    i && window.open(i, `_blank`, `noopener`);
  }
  e.addEventListener(`click`, R);
  function z(t) {
    let n = k.active ? L(k.x, k.y) : null;
    n !== A.n && (A.n = n);
    let r = A.n === null ? 0 : 1,
      i = r > A.intensity ? 0.09 : 0.32,
      a = 1 - Math.exp(-t / i);
    ((A.intensity += (r - A.intensity) * a),
      A.intensity < 0.001 && (A.intensity = 0));
    let o = A.n !== null;
    o !== j && ((j = o), (e.style.cursor = o ? `pointer` : `default`));
  }
  function B(e) {
    let t = hp((e - y / 2) / (y / 2), -1, 1),
      n = S * (op + 0.30000000000000004 * Math.abs(t) ** +sp),
      r = n * dp;
    return { top: (S - n) / 2 + r, height: n - r * 2 };
  }
  function V(e) {
    let t = hp((e + x / 2 - y / 2) / (y / 2), -1, 1),
      n = Math.abs(t),
      r = n ** +sp;
    return { dx: e, dw: x, edge: n, saturation: 1 - lp * r, shade: 1 - up * r };
  }
  function ee(e, t) {
    let n = t / cp,
      i = g.width / cp;
    for (let t = 0; t < cp; t++) {
      let a = e + t * n,
        o = B(a + n / 2);
      r.drawImage(g, i * t, 0, i, g.height, a, o.top, n + 1, o.height);
    }
  }
  function H(e, t) {
    let n = V(t),
      r = B(n.dx + n.dw / 2),
      i = vp(
        e.img.naturalWidth || 1,
        e.img.naturalHeight || 1,
        n.dw / r.height,
      );
    (_.clearRect(0, 0, x, S),
      (_.filter = `saturate(${(0.95 * n.saturation).toFixed(3)}) brightness(${(0.94 * n.shade).toFixed(3)}) contrast(1.04)`),
      _.drawImage(e.img, i.sx, i.sy, i.sw, i.sh, 0, 0, x, S),
      (_.filter = `none`),
      ee(n.dx, n.dw),
      te(e, n));
  }
  function te(e, t) {
    if (!e.label || Vd()) return;
    let n = B(t.dx + t.dw / 2),
      i = hp(n.height * fp, pp[0], pp[1]),
      c = i * 0.7,
      l = i * 0.35,
      u = i * 0.25,
      d = i * 0.55;
    ((r.font = `500 ${i}px Satoshi, sans-serif`),
      (r.letterSpacing = `${(i * 0.06).toFixed(2)}px`));
    let f = e.label.toUpperCase(),
      p = c * 2 + u * 2 + d + r.measureText(f).width,
      m = i + l * 2,
      h = t.dx + t.dw * mp,
      g = B(h + p / 2).top + n.height * mp;
    ((r.globalAlpha = t.shade * t.shade),
      (r.fillStyle = a),
      r.fillRect(h, g, p, m),
      (r.fillStyle = s),
      r.beginPath(),
      r.arc(h + c + u, g + m / 2, u, 0, Math.PI * 2),
      r.fill(),
      (r.fillStyle = o),
      (r.textBaseline = `middle`),
      r.fillText(f, h + c + u * 2 + d, g + m / 2 + i * 0.06),
      (r.globalAlpha = 1),
      (r.letterSpacing = `0px`));
  }
  function ne(e, t, n, i, a) {
    O(e);
    let o = V(t),
      s = B(o.dx + o.dw / 2),
      c = vp(rp, rp, o.dw / s.height),
      l = Math.floor(i / ap),
      u = (a % 97) + e.src.length,
      d = c.sh / ip,
      f = S / ip;
    (_.clearRect(0, 0, x, S),
      (_.fillStyle = `#000`),
      _.fillRect(0, 0, x, S),
      (_.globalCompositeOperation = `screen`),
      [
        { canvas: e.rC, seedOff: 0, bias: 6 },
        { canvas: e.gC, seedOff: 100, bias: 0 },
        { canvas: e.bC, seedOff: 200, bias: -6 },
      ].forEach((e) => {
        for (let t = 0; t < ip; t++) {
          let r = _p(l, t, u, e.seedOff) * 2 - 1,
            i = _p(l, t, u, e.seedOff + 50) > 0.9 ? 3 : 1,
            a = (r * 9 * i + e.bias) * n,
            o = c.sy + d * t,
            s = f * t;
          _.drawImage(e.canvas, c.sx, o, c.sw, d, a, s, x, f);
        }
      }),
      (_.globalCompositeOperation = `source-over`));
    let p = h[Math.floor(_p(l, u, 7) * h.length) % h.length];
    if (
      ((_.globalAlpha = 0.18 * n),
      (_.globalCompositeOperation = `overlay`),
      _.drawImage(p, 0, 0, x, S),
      (_.globalAlpha = 1),
      (_.globalCompositeOperation = `source-over`),
      _p(l, u, 60) > 0.94)
    ) {
      let e = Math.floor(_p(l, u, 61) * ip);
      ((_.fillStyle = `rgba(255,255,255,0.55)`), _.fillRect(0, e * f, x, f));
    }
    ((r.globalAlpha = o.shade),
      (r.filter = `saturate(${o.saturation.toFixed(3)})`),
      ee(o.dx, o.dw),
      (r.filter = `none`),
      (r.globalAlpha = 1),
      te(e, o));
  }
  function re(e) {
    if ((r.clearRect(0, 0, y, b), w <= 0)) return;
    let t = Math.floor((U - w) / w),
      n = Math.ceil((U + y) / w);
    for (let r = t; r <= n; r++) {
      let t = r * w - U,
        n = m[D(r)];
      n.ready &&
        (r === A.n && A.intensity > 0.002
          ? ne(n, t, A.intensity, e, r)
          : H(n, t));
    }
  }
  let U = 0,
    ie = d,
    ae = performance.now(),
    W = null;
  function G(t) {
    W = requestAnimationFrame(G);
    let n = hp((t - ae) / 1e3, 0, 0.05);
    if (((ae = t), !(!P || !I))) {
      if (((ie += (u - ie) * (1 - Math.exp(-n / f))), (U += ie * n), k.dirty)) {
        k.dirty = !1;
        let t = e.getBoundingClientRect();
        ((k.x = k.clientX - t.left), (k.y = k.clientY - t.top));
      }
      (z(n), re(t));
    }
  }
  return (
    (W = requestAnimationFrame(G)),
    {
      setRunning(e) {
        e !== I && ((I = e), (ae = performance.now()));
      },
      burst() {
        ie = d;
      },
      destroy() {
        (cancelAnimationFrame(W),
          E(),
          e.removeEventListener(`click`, R),
          p &&
            (e.removeEventListener(`mousemove`, M),
            e.removeEventListener(`mouseleave`, N)),
          F.disconnect());
      },
    }
  );
}
var Cp = [
    { name: `Kalpita`, href: `https://wpkoi.com/demos/kalpita-premium/` },
    { name: `Hrasva`, href: `https://wpkoi.com/demos/hrasva-premium/` },
    { name: `Madhura`, href: `https://wpkoi.com/demos3/madhura-premium/` },
    { name: `Pluta`, href: `https://wpkoi.com/demos2/pluta-premium/` },
    { name: `Prakata`, href: `https://wpkoi.com/demos/prakata-premium/` },
    { name: `Tripti`, href: `https://wpkoi.com/demos2/tripti-premium/` },
    { name: `Sugupta`, href: `https://wpkoi.com/demos/sugupta-premium/` },
    { name: `Kripa`, href: `https://wpkoi.com/demos/kripa-premium/` },
    { name: `Ekantika`, href: `https://wpkoi.com/demos/ekantika-premium/` },
    { name: `Kamana`, href: `https://wpkoi.com/demos2/kamana-premium/` },
  ],
  wp = [95, 190, 300],
  Tp = (e) => wp.map((t) => `/img/gallery/${e}-${t}.webp ${t}w`).join(`, `),
  Ep = Cp.map((e, t) => ({
    ...e,
    src: `/img/gallery/${t + 1}-300.webp`,
    srcset: Tp(t + 1),
    label: `${e.name} / ${String(t + 1).padStart(2, `0`)}`,
  })),
  Dp = Ep.map((e) => e.src),
  Op = new Map(Ep.map((e) => [e.src, e.srcset]));
Ep.length;
function kp() {
  return 2.4 * window.innerHeight;
}
function Ap() {
  let e = document.querySelector(`#portfolio`),
    t = document.querySelector(`.portfolio-heading-line--light`),
    n = document.querySelector(`.portfolio-heading-line--accent`),
    r = document.querySelector(`.portfolio-heading-underline-stroke`),
    i = document.querySelector(`.portfolio-heading-underline`),
    a = document.querySelector(`.portfolio-gallery`),
    o = document.querySelector(`.portfolio-gallery-canvas`),
    s = document.querySelector(`.portfolio-subheading-line--light`),
    c = document.querySelector(`.portfolio-subheading-line--accent`),
    l = document.querySelector(`.portfolio-subheading-underline-stroke`),
    u = document.querySelector(`.portfolio-subheading-underline`),
    d = document.querySelector(`.portfolio-graffiti`),
    f = document.querySelector(`.portfolio-graffiti-arrow-img`),
    p = document.querySelector(`.portfolio-graffiti-text`),
    m = document.querySelector(`.portfolio-heading`),
    h = document.querySelector(`.portfolio-closing`),
    g = document.querySelector(`.portfolio-claim`),
    _ = document.querySelector(`.portfolio-experience`),
    v = document.querySelector(`.portfolio-experience-underline-stroke`),
    y = document.querySelector(`.portfolio-experience-underline`),
    b = document.querySelector(`.portfolio-brand`),
    x = document.querySelector(`.portfolio-brand-underline-stroke`),
    S = document.querySelector(`.portfolio-brand-underline`),
    C = document.querySelector(`.portfolio-brand-arrow-img`),
    w = document.querySelector(`.portfolio-brand-subtitle`),
    T = document.querySelector(`.portfolio-brand-note`),
    E = document.querySelector(`.portfolio-stats`),
    D = document.querySelector(`.portfolio-more-work`),
    O = document.querySelector(`.portfolio-more-work-text`),
    k = document.querySelector(`.portfolio-more-work-arrow`);
  if (!e || !t || !n) return;
  let A = document.querySelector(`.portfolio-gallery-links`);
  A &&
    ((A.innerHTML = ``),
    Ep.forEach((e) => {
      let t = document.createElement(`li`),
        n = document.createElement(`a`);
      ((n.href = e.href),
        (n.target = `_blank`),
        (n.rel = `noopener noreferrer`),
        (n.textContent = `${e.name} — ${np(`WordPress theme demo`)}`),
        t.appendChild(n),
        A.appendChild(t));
    }));
  let j = o ? Sp(o, Ep) : null,
    M = kp,
    N = () => {},
    P = () => {};
  if (
    (Z.create({
      trigger: e,
      start: `top top`,
      end: () => `+=${M()}`,
      pin: !0,
      pinSpacing: !0,
      invalidateOnRefresh: !0,
      onEnter: () => N(),
      onLeaveBack: () => P(),
    }),
    r && i)
  ) {
    Y.set(i, { opacity: 0 });
    let e = r.getTotalLength() + 8;
    Y.set(r, { strokeDasharray: e, strokeDashoffset: e });
  }
  if (l && u) {
    Y.set(u, { opacity: 0 });
    let e = l.getTotalLength() + 6;
    Y.set(l, { strokeDasharray: e, strokeDashoffset: e });
  }
  if (v && y) {
    Y.set(y, { opacity: 0 });
    let e = v.getTotalLength() + 6;
    Y.set(v, { strokeDasharray: e, strokeDashoffset: e });
  }
  if (x && S) {
    Y.set(S, { opacity: 0 });
    let e = x.getTotalLength() + 8;
    Y.set(x, { strokeDasharray: e, strokeDashoffset: e });
  }
  function F() {
    if (
      !(!d || !a) &&
      ((d.style.top = `${a.offsetTop + a.offsetHeight + Q(16)}px`), s)
    ) {
      let e = a.offsetLeft,
        t = s.offsetLeft - e;
      d.style.left = `${e + t * 0.22}px`;
    }
  }
  (F(),
    of(F),
    document.fonts.load(`400 64px "Anton"`).then(() => {
      let o = new Nc(t, { type: `chars` }),
        A = new Nc(n, { type: `chars` }),
        I = s ? new Nc(s, { type: `chars` }) : null,
        L = c ? new Nc(c, { type: `chars` }) : null,
        R = b ? new Nc(b, { type: `chars` }) : null;
      F();
      function z(e) {
        e.forEach((e) => {
          Y.set(e, {
            x: Q(Y.utils.random(-46, 46)),
            y: Q(Y.utils.random(-26, 26)),
            rotate: Y.utils.random(-16, 16),
            filter: $(10),
            opacity: 0,
          });
        });
      }
      (z(o.chars),
        z(A.chars),
        I && z(I.chars),
        L && z(L.chars),
        a && Y.set(a, { opacity: 0, y: Q(30), filter: $(10) }),
        p && Y.set(p, { opacity: 0, y: Q(10), filter: $(6), rotate: -8 }),
        f &&
          Y.set(f, {
            opacity: 0,
            y: Q(10),
            scale: 0.85,
            transformOrigin: `15% 85%`,
            filter: $(6),
          }),
        g && Y.set(g, { opacity: 0, y: Q(12), filter: $(6) }),
        _ && Y.set(_, { opacity: 0, y: Q(14), filter: $(8) }),
        R && z(R.chars),
        C && Y.set(C, { opacity: 0, y: Q(-10), scale: 0.8, filter: $(6) }),
        w && Y.set(w, { opacity: 0, y: Q(14), filter: $(8) }),
        T && Y.set(T, { opacity: 0, y: Q(12), filter: $(6) }),
        E && Y.set(E, { opacity: 0, y: Q(12), filter: $(6) }),
        D && Y.set(D, { opacity: 0, y: Q(12), filter: $(6) }));
      let B = Y.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top bottom`,
          end: `top top`,
          scrub: 0.35,
        },
      });
      B.to({}, { duration: 1 }, 0);
      let V = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` };
      (B.to(o.chars, { ...V, duration: 0.13, stagger: 0.01 }, 0.35).to(
        A.chars,
        { ...V, duration: 0.13, stagger: 0.01 },
        0.42,
      ),
        i && B.to(i, { opacity: 1, ease: `none`, duration: 0.1 }, 0.58),
        r &&
          B.to(r, { strokeDashoffset: 0, ease: `none`, duration: 0.1 }, 0.58),
        a &&
          (B.to(
            a,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.22 },
            0.64,
          ),
          j && B.call(() => j.burst(), null, 0.64)),
        I && B.to(I.chars, { ...V, duration: 0.12, stagger: 0.009 }, 0.72),
        L && B.to(L.chars, { ...V, duration: 0.12, stagger: 0.009 }, 0.78),
        u && B.to(u, { opacity: 1, ease: `none`, duration: 0.08 }, 0.9),
        l &&
          B.to(l, { strokeDashoffset: 0, ease: `none`, duration: 0.09 }, 0.9),
        g &&
          B.to(
            g,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.08 },
            0.94,
          ));
      let ee = !1,
        H = Y.timeline({
          paused: !0,
          onComplete: () => {
            ee || ((ee = !0), Zf(p, { rotateBase: -8 }), Zf(f));
          },
        });
      (p &&
        H.to(
          p,
          { opacity: 1, y: 0, filter: $(0), ease: `power2.out`, duration: 0.4 },
          0,
        ),
        f &&
          H.to(
            f,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: $(0),
              ease: `power2.out`,
              duration: 0.4,
            },
            0.15,
          ));
      let te;
      ((N = () => {
        te = Y.delayedCall(0.3, () => H.play());
      }),
        (P = () => {
          (te && te.kill(), H.reverse());
        }));
      let ne = Y.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top top`,
          end: () => `+=${M()}`,
          scrub: 0.35,
          invalidateOnRefresh: !0,
          onUpdate: (t) => {
            (e.classList.toggle(`is-scene-two`, t.progress > 0.5),
              j && j.setRunning(t.progress < 0.58));
          },
        },
      });
      ne.to({}, { duration: 1 }, 0);
      let re = `power2.in`;
      (m &&
        ne.to(
          m,
          {
            opacity: 0,
            x: Q(-70),
            y: Q(-40),
            rotate: -7,
            filter: $(16),
            ease: re,
            duration: 0.32,
          },
          0.2,
        ),
        d &&
          ne.to(
            d,
            { opacity: 0, y: Q(16), filter: $(8), ease: re, duration: 0.24 },
            0.22,
          ),
        a &&
          ne.to(
            a,
            {
              opacity: 0,
              scale: 0.86,
              y: Q(24),
              filter: $(16),
              ease: re,
              duration: 0.32,
            },
            0.24,
          ),
        h &&
          ne.to(
            h,
            {
              opacity: 0,
              x: Q(70),
              y: Q(40),
              rotate: 7,
              filter: $(16),
              ease: re,
              duration: 0.32,
            },
            0.28,
          ),
        _ &&
          ne.to(
            _,
            { opacity: 0.75, y: 0, filter: $(0), ease: `none`, duration: 0.09 },
            0.5,
          ),
        y && ne.to(y, { opacity: 1, ease: `none`, duration: 0.06 }, 0.57),
        v &&
          ne.to(v, { strokeDashoffset: 0, ease: `none`, duration: 0.07 }, 0.57),
        R && ne.to(R.chars, { ...V, duration: 0.14, stagger: 0.012 }, 0.62),
        S && ne.to(S, { opacity: 1, ease: `none`, duration: 0.08 }, 0.8),
        x &&
          ne.to(x, { strokeDashoffset: 0, ease: `none`, duration: 0.09 }, 0.8),
        C &&
          ne.to(
            C,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: $(0),
              ease: `none`,
              duration: 0.09,
            },
            0.78,
          ),
        w &&
          ne.to(
            w,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.08 },
            0.9,
          ),
        T &&
          ne.to(
            T,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.07 },
            0.93,
          ),
        E &&
          ne.to(
            E,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.05 },
            0.92,
          ),
        D &&
          ne.to(
            D,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.05 },
            0.94,
          ),
        Qf(A.chars),
        L && Qf(L.chars),
        R && Qf(R.chars),
        Zf(C),
        Zf(O),
        Zf(k));
    }));
}
var jp = 7,
  Mp = 0.1,
  Np = -3.5,
  Pp = 0,
  Fp = 0.11,
  Ip = 0.34,
  Lp = () => window.innerHeight * 1.4;
function Rp() {
  return Lp();
}
var zp = (e, t, n) => Math.min(n, Math.max(t, e)),
  Bp = (e) => String(e).padStart(2, `0`);
function Vp() {
  let e = document.querySelector(`#wpkoi`),
    t = document.querySelector(`.wpkoi-gallery`),
    n = document.querySelector(`.wpkoi-track`);
  if (!e || !t || !n) return;
  let r = Array.from(n.querySelectorAll(`.wpkoi-media`));
  if (r.length < 2) return;
  let i = r.map((e) => e.querySelector(`.wpkoi-media-inner`)),
    a = r.map((e) => e.querySelector(`video`)),
    o = r.map(() => !1),
    s = r.map(() => -1),
    c = !0;
  new IntersectionObserver(
    (e) => {
      ((c = e[0].isIntersecting),
        !c &&
          a.forEach((e, t) => {
            !e || !o[t] || ((o[t] = !1), e.pause());
          }));
    },
    { rootMargin: `25% 0px` },
  ).observe(e);
  let l = document.querySelector(`.wpkoi-experience`),
    u = document.querySelector(`.wpkoi-experience-underline-stroke`),
    d = document.querySelector(`.wpkoi-experience-underline`),
    f = document.querySelector(`.wpkoi-title-line--light`),
    p = document.querySelector(`.wpkoi-title-line--accent`),
    m = document.querySelector(`.wpkoi-visit--main`),
    h = m ? m.querySelector(`.wpkoi-visit-ring-stroke`) : null,
    g = m ? m.querySelector(`.wpkoi-visit-ring`) : null,
    _ = document.querySelector(`.wpkoi-visit--more`),
    v = _ ? _.querySelector(`.wpkoi-visit-ring-stroke`) : null,
    y = _ ? _.querySelector(`.wpkoi-visit-ring`) : null,
    b = Array.from(document.querySelectorAll(`.wpkoi-visit-arrow`)),
    x = document.querySelector(`.wpkoi-counter-current`),
    S = document.querySelector(`.wpkoi-counter-value`),
    C = document.querySelector(`.wpkoi-counter-slash`),
    w = document.querySelector(`.wpkoi-counter-total`),
    T = document.querySelector(`.wpkoi-scroll-hint`),
    E = document.querySelector(`.wpkoi-scroll-hint-arrow`),
    D = Array.from(document.querySelectorAll(`.wpkoi-timeline-item`));
  (w && (w.textContent = Bp(r.length)), S && (S.textContent = Bp(1)));
  let O = 0,
    k = [],
    A = [],
    j = 0;
  function M() {
    O = t.clientWidth;
    let e = r[0],
      i = r[r.length - 1],
      a = O * Mp;
    ((n.style.paddingLeft = `${Math.max(0, (O - e.offsetWidth) / 2)}px`),
      (n.style.paddingRight = `${Math.max(0, a)}px`),
      (k = r.map((e) => e.offsetLeft + e.offsetWidth / 2 - O / 2)));
    let o = r.length - 1,
      s = i.offsetLeft + i.offsetWidth - O + a;
    ((A = k.slice()), (A[o] = zp(s, k[o - 1], k[o])), (j = Math.max(0, A[o])));
  }
  function N(e) {
    let t = zp(e, 0, 1) * (r.length - 1),
      n = Math.min(r.length - 2, Math.floor(t));
    return A[n] + (A[n + 1] - A[n]) * (t - n);
  }
  let P = { current: 0, target: 0 },
    F = !1,
    I = 0,
    L;
  function R(e, t) {
    e !== I &&
      ((I = e),
      S &&
        (L && L.kill(),
        (L = Y.timeline()
          .to(S, {
            y: Q(-18) * t,
            opacity: 0,
            filter: $(7),
            duration: 0.16,
            ease: `power2.in`,
            onComplete: () => {
              S.textContent = Bp(e + 1);
            },
          })
          .fromTo(
            S,
            { y: Q(18) * t, opacity: 0, filter: $(7) },
            {
              y: 0,
              opacity: 1,
              filter: $(0),
              duration: 0.3,
              ease: `power2.out`,
            },
          ))));
  }
  function z() {
    if (!c) return;
    let e = P.target - P.current;
    if (Math.abs(e) < 0.05) {
      if (F) return;
      ((P.current = P.target), (F = !0));
    } else ((P.current += e * Fp), (F = !1));
    let t = O / 2 || 1;
    n.style.transform = `translate3d(${-P.current}px, 0, 0)`;
    let l = 0,
      u = 1 / 0;
    (r.forEach((e, n) => {
      let r = zp((k[n] + t - P.current - t) / t, -1, 1);
      i[n].style.transform = `translate3d(${(-r * jp).toFixed(3)}%, 0, 0)`;
      let d = 1 - r * r,
        f = Math.round(d * 100);
      f !== s[n] &&
        ((s[n] = f), e.style.setProperty(`--focus`, (f / 100).toFixed(2)));
      let p = a[n];
      if (p) {
        let e = c && d > Ip;
        if (e !== o[n]) {
          if (((o[n] = e), e)) {
            let e = p.play();
            e && e.catch(() => {});
          } else p.pause();
        }
      }
      let m = Math.abs(A[n] - P.current);
      m < u && ((u = m), (l = n));
    }),
      R(l, l > I ? 1 : -1));
  }
  (M(), Y.ticker.add(z));
  let B = () => Math.max(window.innerHeight * 1.4, j * 1.05);
  ((Lp = B),
    Z.create({
      trigger: e,
      start: `top top`,
      end: () => `+=${B()}`,
      pin: !0,
      pinSpacing: !0,
      invalidateOnRefresh: !0,
      onRefreshInit: M,
      onRefresh: (e) => {
        (M(), (P.target = N(e.progress)), (P.current = P.target), (F = !1));
      },
      onUpdate: (e) => {
        ((P.target = N(e.progress)), (F = !1));
      },
    }));
  function V(e, t, n) {
    if (!e || !t) return;
    Y.set(t, { opacity: 0 });
    let r = e.getTotalLength() + n;
    Y.set(e, { strokeDasharray: r, strokeDashoffset: r });
  }
  (V(u, d, 6),
    V(h, g, 10),
    V(v, y, 10),
    document.fonts.load(`400 64px "Anton"`).then(() => {
      let n = [x, C, w].filter(Boolean);
      l && Y.set(l, { opacity: 0, y: Q(14), filter: $(8) });
      let r = f ? new Nc(f, { type: `chars` }) : null,
        i = p ? new Nc(p, { type: `chars` }) : null,
        o = (e) => {
          e &&
            e.chars.forEach((e) => {
              Y.set(e, {
                x: Q(Y.utils.random(-46, 46)),
                y: Q(Y.utils.random(-26, 26)),
                rotate: Y.utils.random(-16, 16),
                filter: $(10),
                opacity: 0,
              });
            });
        };
      (o(r),
        o(i),
        m &&
          Y.set(m, {
            opacity: 0,
            y: Q(12),
            scale: 0.94,
            rotate: -10.5,
            filter: $(6),
          }),
        _ &&
          Y.set(_, {
            opacity: 0,
            y: Q(10),
            scale: 0.95,
            rotate: 6,
            filter: $(6),
          }),
        D.forEach((e) => Y.set(e, { opacity: 0, y: Q(14), filter: $(6) })),
        n.forEach((e) => {
          Y.set(e, {
            x: Q(Y.utils.random(-26, 26)),
            y: Q(Y.utils.random(-20, 20)),
            rotate: Y.utils.random(-12, 12),
            filter: $(10),
            opacity: 0,
          });
        }),
        Y.set(t, { opacity: 0, xPercent: 7, filter: $(14) }),
        T && Y.set(T, { opacity: 0, y: Q(10), filter: $(6) }));
      let s = Y.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top bottom`,
          end: `top top`,
          scrub: 0.35,
          onEnter: () => {
            a.forEach((e) => {
              !e || e.preload === `auto` || ((e.preload = `auto`), e.load());
            });
          },
        },
      });
      s.to({}, { duration: 1 }, 0);
      let c = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` };
      (l &&
        s.to(
          l,
          { opacity: 0.75, y: 0, filter: $(0), ease: `none`, duration: 0.1 },
          0.22,
        ),
        d && s.to(d, { opacity: 1, ease: `none`, duration: 0.06 }, 0.3),
        u &&
          s.to(u, { strokeDashoffset: 0, ease: `none`, duration: 0.07 }, 0.3),
        r && s.to(r.chars, { ...c, duration: 0.13, stagger: 0.012 }, 0.34),
        i && s.to(i.chars, { ...c, duration: 0.13, stagger: 0.012 }, 0.42),
        m &&
          s.to(
            m,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: Np,
              filter: $(0),
              ease: `none`,
              duration: 0.1,
            },
            0.52,
          ),
        g && s.to(g, { opacity: 1, ease: `none`, duration: 0.05 }, 0.56),
        h &&
          s.to(h, { strokeDashoffset: 0, ease: `none`, duration: 0.14 }, 0.56),
        n.length && s.to(n, { ...c, duration: 0.16, stagger: 0.03 }, 0.6),
        s.to(
          t,
          {
            opacity: 1,
            xPercent: 0,
            filter: $(0),
            ease: `none`,
            duration: 0.28,
          },
          0.6,
        ),
        T &&
          s.to(
            T,
            { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.09 },
            0.8,
          ),
        D.length &&
          s.to(
            D,
            {
              opacity: 1,
              y: 0,
              filter: $(0),
              ease: `none`,
              duration: 0.09,
              stagger: 0.03,
            },
            0.82,
          ),
        _ &&
          s.to(
            _,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: Pp,
              filter: $(0),
              ease: `none`,
              duration: 0.08,
            },
            0.88,
          ),
        y && s.to(y, { opacity: 1, ease: `none`, duration: 0.04 }, 0.9),
        v && s.to(v, { strokeDashoffset: 0, ease: `none`, duration: 0.1 }, 0.9),
        i && Qf(i.chars),
        Zf(E, { rotateBase: 45 }),
        b[0] && Zf(b[0], { rotateBase: 3.5 }),
        b[1] && Zf(b[1], { rotateBase: -0 }));
    }));
}
var Hp = (Math.PI * 2) / 48,
  Up = 0.4,
  Wp = 0.409,
  Gp = 0.746,
  Kp = 0.78,
  qp = 7,
  Jp = 0.9,
  Yp = (e, t, n) => Math.min(n, Math.max(t, e));
function Xp() {
  let e = document.querySelector(`#awards`),
    t = document.querySelector(`.awards-orbit`),
    n = document.querySelector(`.awards-ring`);
  if (!e || !t || !n) return;
  let r = document.querySelector(`.awards-credits-title`),
    i = Array.from(n.querySelectorAll(`.awards-card`)),
    a = (Math.PI * 2) / (i.length || 1),
    o = (e, t) => (e + (1 - e) * t).toFixed(3);
  if (!i.length) return;
  let s = document.querySelector(`.awards-heading-line--light`),
    c = document.querySelector(`.awards-heading-line--accent`),
    l = document.querySelector(`.awards-heading-underline-stroke`),
    u = document.querySelector(`.awards-heading-underline`),
    d = document.querySelector(`.awards-badge`),
    f = document.querySelector(`.awards-badge-arrow`),
    p = document.querySelector(`.awards-list`),
    m = p ? Array.from(p.children) : [],
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 0;
  function x(e) {
    let n = parseFloat(getComputedStyle(t).getPropertyValue(e));
    return Number.isFinite(n) ? n : null;
  }
  function S() {
    let e = t.clientWidth,
      n = t.clientHeight,
      r = x(`--awards-center-ratio`),
      a = x(`--awards-flatten`);
    ((h = e / 2),
      (g = n * (r === null ? Gp : r)),
      (_ = e * Up),
      (v = a === null || a <= 0 ? n * Wp : _ / a),
      (y = i[0].offsetWidth),
      (b = i[0].offsetHeight),
      t.style.setProperty(`--awards-center-y`, `${g}px`));
  }
  let C = 0,
    w = qp,
    T = -1;
  function E(e, t) {
    if (!D) return;
    let n = Yp((t || 0) / 1e3, 0, 0.05);
    ((w += (1 - w) * (1 - Math.exp(-n / Jp))), (C += Hp * w * n));
    let r = 0,
      s = -1 / 0;
    (i.forEach((e, t) => {
      let n = C + t * a,
        i = Math.atan2(Math.sin(n), Math.cos(n)),
        c = h + _ * Math.sin(i) - y / 2,
        l = g - v * Math.cos(i) - b / 2,
        u = Math.cos(i),
        d = Yp((u + 0.45) / 0.95, 0, 1),
        f = Yp(u, 0, 1),
        p = 0.88 + 0.12 * f,
        m = (i * Kp * 180) / Math.PI;
      ((e.style.transform = `translate3d(${c.toFixed(2)}px, ${l.toFixed(2)}px, 0) rotate(${m.toFixed(2)}deg) scale(${p.toFixed(3)})`),
        (e.style.opacity = d.toFixed(3)));
      let x = Math.round(f * 50);
      if (x !== e._gradeStep) {
        e._gradeStep = x;
        let t = x / 50;
        e.style.filter = `saturate(${o(0.15, t)}) brightness(${o(0.72, t)}) contrast(${o(0.9, t)})`;
      }
      let S = Math.round(u * 20) + 100;
      S !== e._depth && ((e._depth = S), (e.style.zIndex = String(S)));
      let w = d > 0.4;
      (w !== e._reachable &&
        ((e._reachable = w), (e.style.pointerEvents = w ? `auto` : `none`)),
        u > s && ((s = u), (r = t)));
    }),
      r !== T &&
        (m[T] && m[T].classList.remove(`is-active`),
        (T = r),
        m[T] && m[T].classList.add(`is-active`)));
  }
  let D = !1;
  new IntersectionObserver(
    (e) => {
      D = e[0].isIntersecting;
    },
    { threshold: 0 },
  ).observe(e);
  let O = !1;
  new IntersectionObserver(
    (e) => {
      let t = e[0].isIntersecting;
      t !== O && ((O = t), t && (w = qp));
    },
    { rootMargin: `-25% 0px -25% 0px`, threshold: 0 },
  ).observe(t);
  function k() {
    S();
    let e = D;
    ((D = !0), E(), (D = e));
  }
  if ((k(), of(k), Y.ticker.add(E), l && u)) {
    Y.set(u, { opacity: 0 });
    let e = l.getTotalLength() + 8;
    Y.set(l, { strokeDasharray: e, strokeDashoffset: e });
  }
  document.fonts.load(`400 64px "Anton"`).then(() => {
    k();
    let n = s ? new Nc(s, { type: `chars` }) : null,
      i = c ? new Nc(c, { type: `chars` }) : null,
      a = (e) => {
        e &&
          e.chars.forEach((e) => {
            Y.set(e, {
              x: Q(Y.utils.random(-46, 46)),
              y: Q(Y.utils.random(-26, 26)),
              rotate: Y.utils.random(-16, 16),
              filter: $(10),
              opacity: 0,
            });
          });
      };
    (a(n),
      a(i),
      Y.set(t, { opacity: 0, y: Q(28), filter: $(12) }),
      d && Y.set(d, { opacity: 0, y: Q(12), filter: $(6) }),
      m.length && Y.set(m, { opacity: 0, x: Q(-14) }),
      r && Y.set(r, { opacity: 0, x: Q(-14) }));
    let o = Y.timeline({
      scrollTrigger: {
        trigger: (s && s.closest(`.awards-heading`)) || e,
        start: `top bottom`,
        end: `top 30%`,
        scrub: 0.35,
      },
    });
    o.to({}, { duration: 1 }, 0);
    let p = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` };
    (n && o.to(n.chars, { ...p, duration: 0.14, stagger: 0.012 }, 0.28),
      i && o.to(i.chars, { ...p, duration: 0.14, stagger: 0.012 }, 0.38),
      u && o.to(u, { opacity: 1, ease: `none`, duration: 0.08 }, 0.52),
      l && o.to(l, { strokeDashoffset: 0, ease: `none`, duration: 0.1 }, 0.52),
      o.to(
        t,
        { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.24 },
        0.58,
      ),
      d &&
        o.to(
          d,
          { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.1 },
          0.8,
        ),
      m.length &&
        o.to(
          m,
          { opacity: 1, x: 0, ease: `none`, duration: 0.06, stagger: 0.022 },
          0.66,
        ),
      r && o.to(r, { opacity: 1, x: 0, ease: `none`, duration: 0.06 }, 0.63),
      i && Qf(i.chars),
      Zf(f),
      Zf(document.querySelector(`.awards-subheading-arrow`), {
        rotateBase: 45,
      }),
      Zf(document.querySelector(`.awards-subheading-text`)));
  });
}
function Zp() {
  let e = document.querySelector(`#transition`),
    t = document.querySelector(`.transition-line--light`),
    n = document.querySelector(`.transition-line--accent`);
  !e ||
    !t ||
    !n ||
    document.fonts.load(`400 64px "Anton"`).then(() => {
      let r = new Nc(t, { type: `chars` }),
        i = new Nc(n, { type: `chars` }),
        a = (e) => {
          e.chars.forEach((e) => {
            Y.set(e, {
              x: Q(Y.utils.random(-46, 46)),
              y: Q(Y.utils.random(-26, 26)),
              rotate: Y.utils.random(-16, 16),
              filter: $(10),
              opacity: 0,
            });
          });
        };
      (a(r), a(i));
      let o = Y.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top 90%`,
          end: `top 20%`,
          scrub: 0.4,
        },
      });
      o.to({}, { duration: 1 }, 0);
      let s = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` };
      (o.to(r.chars, { ...s, duration: 0.34, stagger: 0.012 }, 0.1),
        o.to(i.chars, { ...s, duration: 0.34, stagger: 0.012 }, 0.34),
        Qf(i.chars));
    });
}
var Qp = new Set(),
  $p = null,
  em = 0,
  tm = window.scrollY;
function nm() {
  em = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}
function rm() {
  (($p = null), Qp.forEach((e) => e(tm, em)));
}
(window.addEventListener(
  `scroll`,
  () => {
    ((tm = window.scrollY), !$p && ($p = requestAnimationFrame(rm)));
  },
  { passive: !0 },
),
  Z.addEventListener(`refresh`, nm),
  nm());
function im(e) {
  return (Qp.add(e), () => Qp.delete(e));
}
function am() {
  return em;
}
var om = 1.6,
  sm = 208,
  cm = 20;
function lm(e) {
  let t = e.slice();
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
function um() {
  let e = document.querySelector(`#contact`),
    t = document.querySelector(`.contact-field`),
    n = document.querySelector(`.contact-grid`);
  if (!e || !t || !n || !Dp.length) return;
  let r = document.querySelector(`#transition`),
    i = document.querySelector(`.contact-card`),
    a = document.querySelector(`.contact-heading-line--accent`),
    o = document.querySelector(`.contact-heading-line--light`),
    s = document.querySelector(`.contact-heading-underline-stroke`),
    c = document.querySelector(`.contact-heading-underline`),
    l = document.querySelector(`.contact-email`),
    u = document.querySelector(`.contact-drag`),
    d = document.querySelector(`.contact-drag-arrow`),
    f = null,
    p = null,
    m = 0;
  function h() {
    if ((p && (p.scrollTrigger && p.scrollTrigger.kill(), p.kill()), !r))
      return;
    let e = Array.from(n.children);
    e.length &&
      (p = Y.fromTo(
        e,
        {
          x: (e) => {
            let t = m ? e % m < m / 2 : Math.random() < 0.5,
              n = Q(Y.utils.random(320, 820));
            return t ? -n : n;
          },
          y: () => -Q(Y.utils.random(120, 320)),
          rotate: () => Y.utils.random(-24, 24),
          rotationY: (e) => (m && e % m < m / 2 ? 45 : -45),
          rotationX: () => Y.utils.random(-30, -10),
          transformPerspective: 900,
          scale: 0.82,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          opacity: 1,
          ease: `none`,
          stagger: { amount: 0.55, from: `start` },
          scrollTrigger: {
            trigger: r,
            start: `top 30%`,
            end: `bottom top`,
            scrub: 0.6,
          },
        },
      ));
  }
  function g(e, t) {
    let n = e * t,
      r = Array(n),
      i = [];
    for (let t = 0; t < n; t++) {
      let n = t % e === 0 ? null : r[t - 1],
        a = t < e ? null : r[t - e];
      i.length || (i = lm(Dp));
      let o = i.findIndex((e) => e !== n && e !== a);
      (o === -1 && (o = 0), (r[t] = i.splice(o, 1)[0]));
    }
    return r;
  }
  function _() {
    let r = t.clientWidth,
      i = t.clientHeight,
      a = Q(sm),
      o = Q(cm),
      s = a + o,
      c = Math.max(2, Math.ceil((r * om) / s)),
      l = Math.max(2, Math.ceil((i * om) / s));
    ((m = c),
      n.style.setProperty(`--contact-cols`, String(c)),
      n.style.setProperty(`--contact-tile`, `${a}px`),
      n.style.setProperty(`--contact-gap`, `${o}px`),
      (n.innerHTML = ``));
    let u = g(c, l),
      d = document.createDocumentFragment(),
      p = `${Math.round(a)}px`;
    (u.forEach((e) => {
      let t = document.createElement(`div`);
      t.className = `contact-tile`;
      let n = document.createElement(`img`);
      ((n.alt = ``), (n.draggable = !1), (n.loading = `lazy`));
      let r = Op.get(e);
      (r && ((n.srcset = r), (n.sizes = p)),
        (n.src = e),
        t.appendChild(n),
        d.appendChild(t));
    }),
      n.appendChild(d));
    let _ = c * s - o,
      v = l * s - o;
    (Y.set(n, { x: (r - _) / 2, y: (i - v) / 2 }),
      h(),
      f && f.kill(),
      (f = Pu.create(n, {
        type: `x,y`,
        trigger: e,
        bounds: { minX: r - _, maxX: 0, minY: i - v, maxY: 0 },
        edgeResistance: 0.85,
        inertia: !0,
        zIndexBoost: !1,
        dragClickables: !1,
        onPress: () => e.classList.add(`is-dragging`),
        onRelease: () => e.classList.remove(`is-dragging`),
      })[0]),
      b());
  }
  let v = window.matchMedia(`(pointer: coarse)`),
    y = !1;
  function b() {
    let t = v.matches && !y;
    (f && f.enabled(!t), (e.style.touchAction = t ? `pan-y` : `none`));
  }
  (im((e, t) => {
    let n = t - e <= 2;
    n !== y && ((y = n), b());
  }),
    v.addEventListener && v.addEventListener(`change`, b),
    _(),
    of(_));
  let x = document.querySelector(`.contact-top`);
  x &&
    x.addEventListener(`click`, () => {
      let e = lc.get();
      e ? e.scrollTo(0, !0) : window.scrollTo({ top: 0, behavior: `smooth` });
    });
  let S = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        let t = e.target.querySelector(`img`);
        t &&
          Y.to(t, {
            opacity: e.isIntersecting ? 1 : 0.12,
            duration: 0.6,
            ease: `power2.out`,
            overwrite: `auto`,
          });
      });
    },
    { threshold: 0.12 },
  );
  function C() {
    (S.disconnect(), Array.from(n.children).forEach((e) => S.observe(e)));
  }
  if ((C(), of(C), s && c)) {
    Y.set(c, { opacity: 0 });
    let e = s.getTotalLength() + 8;
    Y.set(s, { strokeDasharray: e, strokeDashoffset: e });
  }
  let w = document.querySelector(`.site-sidebar`),
    T = Array.from(document.querySelectorAll(`.site-sidebar > *`)).filter(
      (e) => e.tagName !== `H1` && !e.classList.contains(`sidebar-stack`),
    );
  if (T.length) {
    let t = Y.timeline({
      scrollTrigger: {
        trigger: r || e,
        start: r ? `top 75%` : `top bottom`,
        endTrigger: e,
        end: `top 30%`,
        scrub: 0.6,
        onUpdate: (e) => w && w.classList.toggle(`is-gone`, e.progress > 0.8),
        onToggle: (e) => w && w.classList.toggle(`is-gone`, e.progress > 0.8),
        onRefresh: (e) => w && w.classList.toggle(`is-gone`, e.progress > 0.8),
      },
    });
    (t.to({}, { duration: 1 }, 0),
      T.forEach((e, n) => {
        let r = e.offsetWidth || 1,
          i = e.offsetHeight || 1;
        t.to(
          e,
          {
            xPercent: (Q(Y.utils.random(140, 340)) / r) * 100,
            yPercent: (Q(Y.utils.random(-170, 170)) / i) * 100,
            rotate: Y.utils.random(-16, 16),
            opacity: 0,
            filter: $(12),
            ease: `none`,
            duration: 0.45,
          },
          0.1 + n * 0.055,
        );
      }));
    let n = (e) => {
      let n = t.scrollTrigger;
      n &&
        (e ? (n.disable(!0), w && w.classList.remove(`is-gone`)) : n.enable());
    };
    (n(Vd()), Hd(n));
  }
  document.fonts.load(`400 64px "Anton"`).then(() => {
    let t = a ? new Nc(a, { type: `chars` }) : null,
      n = o ? new Nc(o, { type: `chars` }) : null,
      r = (e) => {
        e &&
          e.chars.forEach((e) => {
            Y.set(e, {
              x: Q(Y.utils.random(-46, 46)),
              y: Q(Y.utils.random(-26, 26)),
              rotate: Y.utils.random(-16, 16),
              filter: $(10),
              opacity: 0,
            });
          });
      };
    (r(t),
      r(n),
      i && Y.set(i, { opacity: 0, y: Q(20), filter: $(8) }),
      l && Y.set(l, { opacity: 0, y: Q(12) }),
      u && Y.set(u, { opacity: 0, x: Q(-24), filter: $(6) }));
    let f = Y.timeline({
      scrollTrigger: {
        trigger: e,
        start: `top bottom`,
        end: `top 30%`,
        scrub: 0.35,
      },
    });
    f.to({}, { duration: 1 }, 0);
    let p = { x: 0, y: 0, rotate: 0, filter: $(0), opacity: 1, ease: `none` };
    (i &&
      f.to(
        i,
        { opacity: 1, y: 0, filter: $(0), ease: `none`, duration: 0.16 },
        0.42,
      ),
      t && f.to(t.chars, { ...p, duration: 0.14, stagger: 0.014 }, 0.48),
      n && f.to(n.chars, { ...p, duration: 0.14, stagger: 0.012 }, 0.58),
      c && f.to(c, { opacity: 1, ease: `none`, duration: 0.08 }, 0.7),
      s && f.to(s, { strokeDashoffset: 0, ease: `none`, duration: 0.1 }, 0.7),
      l && f.to(l, { opacity: 1, y: 0, ease: `none`, duration: 0.1 }, 0.78),
      u &&
        f.to(
          u,
          { opacity: 1, x: 0, filter: $(0), ease: `none`, duration: 0.1 },
          0.86,
        ),
      t && Qf(t.chars),
      Zf(d));
  });
}
function dm() {
  if (window.innerWidth <= 767 || gf(`ruler`)) return;
  let e = document.querySelector(`.hero-rulers`),
    t = document.querySelector(`.ruler-top`),
    n = document.querySelector(`.ruler-left`),
    r = document.querySelector(`.ruler-cursor-x`),
    i = document.querySelector(`.ruler-cursor-y`),
    a = document.querySelector(`.fixed-datas`);
  if (!(e && t && n && a)) return;
  let [o, s, c] = a.querySelectorAll(`span`);
  (r && Y.set(r, { xPercent: -50 }),
    i &&
      Y.set(i, { yPercent: -50, rotate: -90, transformOrigin: `left center` }));
  let l = [],
    u = [],
    d = [],
    f = [];
  function p(e, t) {
    return String(Math.round(e)).padStart(t, `0`);
  }
  function m() {
    ((t.innerHTML = ``), (n.innerHTML = ``));
    let e = document.createDocumentFragment();
    for (let t = 100; t <= window.innerWidth + 100; t += 100) {
      let n = document.createElement(`div`);
      ((n.className = `ruler-mark`),
        (n.dataset.pos = t),
        (n.style.left = `${t}px`),
        (n.textContent = t),
        e.appendChild(n));
    }
    for (let t = 20; t < window.innerWidth; t += 20) {
      if (t % 100 == 0) continue;
      let n = document.createElement(`div`);
      ((n.className = `ruler-tick`),
        (n.style.left = `${t}px`),
        e.appendChild(n));
    }
    t.appendChild(e);
    let r = document.createDocumentFragment();
    for (let e = 100; e <= window.innerHeight + 100; e += 100) {
      let t = document.createElement(`div`);
      ((t.className = `ruler-mark`),
        (t.dataset.pos = e),
        (t.dataset.base = e),
        (t.style.top = `${e}px`),
        (t.textContent = e),
        r.appendChild(t));
    }
    for (let e = 20; e < window.innerHeight; e += 20) {
      if (e % 100 == 0) continue;
      let t = document.createElement(`div`);
      ((t.className = `ruler-tick`),
        (t.style.top = `${e}px`),
        r.appendChild(t));
    }
    (n.appendChild(r),
      (l = [...t.querySelectorAll(`.ruler-mark`)]),
      (u = [...n.querySelectorAll(`.ruler-mark`)]),
      (d = [...t.querySelectorAll(`.ruler-tick`)]),
      (f = [...n.querySelectorAll(`.ruler-tick`)]));
  }
  function h(e, t) {
    let n = parseFloat(t === l ? e.style.left : e.style.top);
    return t[Math.max(0, Math.ceil(n / 100) - 1)]?.classList.contains(`dark`);
  }
  let g = [],
    _ = !1;
  function v() {
    g = Array.from(document.querySelectorAll(`.dark-ruler`));
  }
  function y() {
    if (!g.length) {
      _ &&
        ((_ = !1),
        l.forEach((e) => e.classList.remove(`dark`)),
        u.forEach((e) => e.classList.remove(`dark`)),
        d.forEach((e) => e.classList.remove(`dark`)),
        f.forEach((e) => e.classList.remove(`dark`)),
        a.classList.remove(`dark`));
      return;
    }
    _ = !0;
    let e = g.map((e) => e.getBoundingClientRect()),
      t = (t, n) =>
        e.some(
          (e) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom,
        );
    (l.forEach((e) => {
      e.classList.toggle(`dark`, t(Number(e.dataset.pos), 10));
    }),
      d.forEach((e) => {
        e.classList.toggle(`dark`, !!h(e, l));
      }),
      u.forEach((e) => {
        e.classList.toggle(`dark`, t(20, Number(e.dataset.pos)));
      }),
      f.forEach((e) => {
        e.classList.toggle(`dark`, !!h(e, u));
      }));
    let n = a.getBoundingClientRect();
    a.classList.toggle(`dark`, t(n.left + n.width / 2, n.top + n.height / 2));
  }
  let b = -1;
  function x(e = window.scrollY, t = am()) {
    let n = Math.round(e);
    n !== b &&
      ((b = n),
      u.forEach((e) => {
        e.textContent = Number(e.dataset.base) + n;
      }));
    let r = `p:${p(t > 0 ? Math.min(100, Math.max(1, (e / t) * 100)) : 100, 3)}%`;
    c.textContent !== r && (c.textContent = r);
  }
  (window.requestIdleCallback || ((e) => setTimeout(e, 200)))(
    () => {
      (m(),
        v(),
        x(),
        y(),
        e.classList.add(`is-ready`),
        a.classList.add(`is-ready`));
    },
    { timeout: 1500 },
  );
  let S = -1,
    C = -1,
    w = null,
    T = new WeakMap();
  function E(e, t) {
    e.forEach((e) => {
      let n = Math.abs(e.dataset.pos - t),
        r = e.classList.contains(`dark`),
        i = r ? 0.45 : 0.3,
        a = i + ((r ? 0.95 : 0.8) - i) * Math.max(0, 1 - n / 180),
        o = T.get(e);
      (o !== void 0 && Math.abs(o - a) < 0.01) ||
        (T.set(e, a), (e.style.opacity = a));
    });
  }
  function D() {
    ((w = null),
      (o.textContent = `x:${p(S, 4)}`),
      (s.textContent = `y:${p(C, 4)}`),
      Y.to(r, { x: S, duration: 0.12, ease: `power2.out`, overwrite: !0 }),
      Y.to(i, { y: C, duration: 0.12, ease: `power2.out`, overwrite: !0 }),
      E(l, S),
      E(u, C));
  }
  (window.addEventListener(
    `mousemove`,
    (e) => {
      (e.clientX !== S || e.clientY !== C) &&
        ((S = e.clientX),
        (C = e.clientY),
        !w && (w = requestAnimationFrame(D)));
    },
    { passive: !0 },
  ),
    im((e, t) => {
      (x(e, t), y());
    }),
    of(() => {
      (m(), v(), x(), y());
    }));
}
function fm() {
  document.querySelectorAll(`.sidebar-nav a[href^="#"]`).forEach((e) => {
    e.addEventListener(`click`, (t) => {
      let n = document.querySelector(e.getAttribute(`href`));
      if (!n) return;
      t.preventDefault();
      let r = lc.get();
      r
        ? r.scrollTo(n, !0, `top top`)
        : n.scrollIntoView({ behavior: `smooth` });
    });
  });
}
var pm = [
  { id: `skills`, nav: `skills` },
  { id: `portfolio`, nav: `portfolio` },
  { id: `wpkoi`, nav: `portfolio` },
  { id: `awards`, nav: `awards` },
  { id: `transition`, nav: `contact` },
  { id: `contact`, nav: `contact` },
];
function mm(e) {
  let t = e.querySelector(`.nav-inner`) || e;
  return Array.from(t.childNodes)
    .filter((e) => e.nodeType === Node.TEXT_NODE)
    .map((e) => e.textContent)
    .join(``)
    .trim();
}
function hm() {
  let e = pm
    .map(({ id: e, nav: t }) => ({
      el: document.getElementById(e),
      link: document.querySelector(`.sidebar-nav a[href="#${t}"]`),
    }))
    .filter((e) => e.el && e.link);
  if (!e.length) return;
  let t = document.querySelector(`.fixed-datas-section`),
    n = document.querySelector(`.sidebar-nav a[href="#hero"]`),
    r = n ? mm(n) : `Introduce`,
    i = new Set(),
    a = new IntersectionObserver(
      (n) => {
        n.forEach((e) => {
          e.isIntersecting ? i.add(e.target) : i.delete(e.target);
        });
        let a = e.filter((e) => i.has(e.el)),
          o = new Set(a.map((e) => e.link));
        if (
          (e.forEach((e) =>
            e.link.classList.toggle(`is-active`, o.has(e.link)),
          ),
          t)
        ) {
          let e = a.length ? mm(a[0].link) : r;
          t.textContent = `s:${e}`;
        }
      },
      { rootMargin: `-45% 0px -45% 0px`, threshold: 0 },
    );
  e.forEach((e) => a.observe(e.el));
}
function gm(e, t, n) {
  return Math.min(n, Math.max(e, t));
}
function _m(e, t, n) {
  let r = parseFloat(getComputedStyle(e).fontSize);
  return (t * n) / r;
}
function vm(e, t, n = e.getBoundingClientRect()) {
  let r = t.width / n.width;
  return {
    x: Math.round(t.left - n.left),
    y: Math.round(t.top - n.top),
    scale: r,
    transformOrigin: `left top`,
  };
}
function ym() {
  let e = window.innerWidth,
    t = window.innerHeight,
    n = gm(24, 0.04 * e, 80),
    r = e - n * 2;
  return {
    W: e,
    H: t,
    sideInset: n,
    rowGap: 24,
    rowWidth: r,
    rowBottom: t * 0.89,
    nameWidth: r * 0.8,
    photoWidth: r * 0.12,
    headerTop: 28,
    navGap: 32,
    brandGap: 5.6,
    socialGap: 0.01 * e,
  };
}
var bm = 1 / 3,
  xm = 0.3,
  Sm = 140;
function Cm() {
  document.querySelector(`.site-sidebar`);
  let e = document.querySelector(`.sidebar-name`),
    t = document.querySelector(`.sidebar-tagline`),
    n = document.querySelector(`.sidebar-stack`),
    r = document.querySelector(`.sidebar-social`),
    i = Array.from(document.querySelectorAll(`.social-link`)),
    a = i.filter((e) => e.querySelector(`.social-text`)),
    o = a.map((e) => e.querySelector(`.social-text`)),
    s = a.map((e) => e.querySelector(`.social-icon-svg`)),
    c = i.filter((e) => !e.querySelector(`.social-text`)),
    l = document.querySelector(`.sidebar-bio`),
    u = document.querySelector(`.sidebar-locale`),
    d = Array.from(document.querySelectorAll(`.sidebar-nav a`)),
    f = Array.from(document.querySelectorAll(`.hero-mark`)),
    p = document.querySelector(`.sidebar-photo-wrap`),
    m = document.querySelector(`.sidebar-badge`),
    h = document.querySelector(`.sidebar-photo-caption`),
    g = document.querySelector(`.sidebar-email`),
    _ = document.querySelector(
      `.hero-liquid-video:not(.hero-liquid-video--alt)`,
    ),
    v = document.querySelector(`.fixed-datas`),
    y = document.querySelector(`.hero`);
  if (!e || !y || gf(`flip`)) return;
  let b = e.querySelector(`.hero-underline`),
    x = !1;
  function S(t) {
    if (
      !(gf(`namelayer`) || t === x) &&
      ((x = t),
      e.classList.toggle(`is-scaling`, t),
      Yf(t),
      !(!b || !b.pauseAnimations))
    ) {
      if (!t) {
        b.unpauseAnimations();
        return;
      }
      (b.pauseAnimations(),
        !b.animationsPaused() &&
          requestAnimationFrame(() => {
            x && b.pauseAnimations();
          }));
    }
  }
  let C = !1,
    w = null;
  function T(t) {
    t !== C && ((C = t), e.classList.toggle(`is-moving`, t));
  }
  function E() {
    (T(!0), clearTimeout(w), (w = setTimeout(() => T(!1), Sm)));
  }
  function D() {
    (clearTimeout(w), T(!1));
  }
  let O = 0,
    k = 0,
    A = ``,
    j = !1,
    M = e.querySelector(`.sidebar-name-text`);
  function N() {
    return (
      O !== window.innerWidth ||
      k !== window.innerHeight ||
      (M && A !== M.style.fontSize)
    );
  }
  function P() {
    j ||
      ((j = !0),
      setTimeout(() => {
        ((j = !1), N() && sf());
      }, 0));
  }
  let F = null;
  function I() {
    F &&= (F.scrollTrigger && F.scrollTrigger.kill(), F.kill(), null);
    let i = [
      e,
      t,
      n,
      p,
      r,
      l,
      u,
      m,
      h,
      g,
      _,
      v,
      ...a,
      ...o,
      ...s,
      ...c,
      ...d,
      ...f,
    ].filter(Boolean);
    if (
      (Y.set(i, { clearProps: `all` }),
      (O = window.innerWidth),
      (k = window.innerHeight),
      (A = M ? M.style.fontSize : ``),
      (j = !1),
      Vd())
    ) {
      (S(!1), D());
      return;
    }
    let b = n ? n.getBoundingClientRect().height : 0,
      x;
    if (n) {
      let e = n.style.height;
      ((n.style.height = `0px`),
        (x = p.getBoundingClientRect()),
        (n.style.height = e));
    } else x = p.getBoundingClientRect();
    let C = x.width,
      w = x.height;
    ((p.dataset.endWidth = C.toFixed(2)), (p.dataset.endHeight = w.toFixed(2)));
    let T = ym(),
      N = e.getBoundingClientRect(),
      I = T.nameWidth * (N.height / N.width);
    Y.set(
      e,
      vm(e, { left: T.sideInset, top: T.rowBottom - I, width: T.nameWidth }, N),
    );
    let L = parseFloat(e.dataset.inkTop) || 0,
      R = parseFloat(e.dataset.inkBottom) || 1,
      z = T.sideInset + T.nameWidth + T.rowGap,
      B = T.rowBottom - I + I * L,
      V = I * (R - L),
      ee = p.getBoundingClientRect();
    Y.set(p, {
      width: T.photoWidth,
      height: V,
      x: Math.round(z - ee.left),
      y: Math.round(B - ee.top),
    });
    let H = z + T.photoWidth,
      te = T.rowBottom - I * 0.015,
      ne = parseFloat(getComputedStyle(r).columnGap) || 0,
      re = a.length ? a[0].getBoundingClientRect().width : 30;
    (a.forEach((e, t) => {
      let n = o[t].getBoundingClientRect().width;
      (Y.set(e, { width: n }),
        Y.set(o[t], { opacity: 1 }),
        Y.set(s[t], { opacity: 0 }));
    }),
      c.forEach((e) => {
        Y.set(e, { width: 0, "--assembly-fade": 0 });
      }),
      Y.set(r, { columnGap: T.socialGap }));
    let U = r.getBoundingClientRect();
    Y.set(r, { x: H - U.right, y: te - U.top });
    let ie = t.getBoundingClientRect(),
      ae = _m(t, 0.015, T.W);
    if (
      (Y.set(
        t,
        vm(
          t,
          { left: T.sideInset, top: T.headerTop, width: ie.width * ae },
          ie,
        ),
      ),
      n)
    ) {
      let e = ie.height * ae,
        t = n.getBoundingClientRect(),
        r = _m(n, 0.008, T.W);
      Y.set(
        n,
        vm(
          n,
          {
            left: T.sideInset,
            top: T.headerTop + e + T.brandGap,
            width: t.width * r,
          },
          t,
        ),
      );
    }
    if (d.length) {
      let e = _m(d[0], 0.015, T.W),
        t = d.map((t) => t.getBoundingClientRect().width * e),
        n = t.reduce((e, t) => e + t, 0) + T.navGap * (d.length - 1),
        r = T.W - T.sideInset - n;
      d.forEach((e, n) => {
        (Y.set(e, vm(e, { left: r, top: T.headerTop, width: t[n] })),
          (r += t[n] + T.navGap));
      });
    }
    if (
      (Y.set(l, { autoAlpha: 0 }),
      Y.set(u, { autoAlpha: 0 }),
      Y.set(m, { autoAlpha: 0 }),
      Y.set(h, { autoAlpha: 0 }),
      Y.set(g, { autoAlpha: 0 }),
      (F = Y.timeline({
        scrollTrigger: {
          trigger: y,
          start: `top top`,
          end: () => `+=${jf()}`,
          scrub: 1,
          invalidateOnRefresh: !0,
          onToggle: (e) => {
            (S(Mf(e)), Mf(e) || D(), P());
          },
          onRefresh: (e) => {
            (S(Mf(e)), D(), P());
          },
          onUpdate: (e) => {
            (S(Mf(e)), Mf(e) && E(), P());
          },
        },
      })),
      F.to(
        e,
        gf(`flip-name`)
          ? { x: 0, y: 0, ease: `none`, duration: 1 }
          : { x: 0, y: 0, scale: 1, ease: `none`, duration: 1 },
        0,
      )
        .to(
          p,
          gf(`flip-photo`)
            ? { x: 0, y: 0, ease: `none`, duration: 1 }
            : { x: 0, y: 0, width: C, height: w, ease: `none`, duration: 1 },
          0,
        )
        .to(
          r,
          gf(`flip-social`)
            ? { x: 0, y: 0, ease: `none`, duration: 1 }
            : { x: 0, y: 0, columnGap: ne, ease: `none`, duration: 1 },
          0,
        )
        .to(t, { x: 0, y: 0, scale: 1, ease: `none`, duration: 1 }, 0)
        .to(_, { opacity: 0, ease: `none`, duration: 1 }, 0)
        .to(l, { autoAlpha: 1, ease: `none`, duration: 0.3 }, 0.6)
        .to(u, { autoAlpha: 1, ease: `none`, duration: 0.3 }, 0.6)
        .to(m, { autoAlpha: 1, ease: `none`, duration: 0.3 }, 0.6)
        .to(h, { autoAlpha: 1, ease: `none`, duration: 0.3 }, 0.6)
        .to(g, { autoAlpha: 1, ease: `none`, duration: 0.3 }, 0.65),
      F.fromTo(
        _,
        { filter: `none` },
        { filter: $(24), ease: `none`, duration: 0.45, immediateRender: !1 },
        0.55,
      ),
      n &&
        F.to(
          n,
          gf(`flip-stack`)
            ? { x: 0, y: 0, scale: 1, opacity: 0, ease: `none`, duration: 1 }
            : {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 0,
                filter: $(8),
                height: 0,
                ease: `none`,
                duration: 1,
              },
          0,
        ),
      d.forEach((e) => {
        F.to(
          e,
          gf(`flip-nav`)
            ? { x: 0, y: 0, ease: `none`, duration: 1 }
            : { x: 0, y: 0, scale: 1, ease: `none`, duration: 1 },
          0,
        );
      }),
      f.length && F.to(f, { autoAlpha: 0, ease: `none`, duration: xm }, 0),
      a.forEach((e, t) => {
        (gf(`flip-social`) ||
          F.to(e, { width: re, ease: `none`, duration: 1 }, 0),
          F.to(o[t], { opacity: 0, ease: `none`, duration: 1 }, 0).to(
            s[t],
            { opacity: 1, ease: `none`, duration: 1 },
            0,
          ));
      }),
      c.forEach((e) => {
        F.fromTo(
          e,
          { width: 0, "--assembly-fade": 0 },
          { width: re, "--assembly-fade": 1, ease: `none`, duration: 0.3 },
          0.6,
        );
      }),
      v)
    ) {
      Y.set(v, { x: 0, y: 0, scale: 0.78, transformOrigin: `bottom right` });
      let e = v.getBoundingClientRect(),
        t = e.top + e.height / 2,
        n = ee.top - b + w / 2;
      (Y.set(v, { y: 0, scale: 1 }),
        F.to(v, { y: n - t, scale: 0.78, ease: `none`, duration: 1 }, 0));
    }
  }
  (I(),
    Hd(() => I()),
    f.forEach((e) => {
      Zf(e.querySelector(`.hero-mark-text`), { amp: bm });
      let t = e.querySelector(`.hero-mark-arrow`);
      t &&
        Zf(t, {
          rotateBase:
            parseFloat(
              getComputedStyle(t).getPropertyValue(`--arrow-rotate`),
            ) || 0,
          amp: bm,
        });
    }),
    of(I));
}
function wm() {
  let e = Array.from(document.querySelectorAll(`[data-email]`));
  e.length &&
    e.forEach((e) => {
      let t;
      e.addEventListener(`click`, async () => {
        let n = e.dataset.email;
        try {
          await navigator.clipboard.writeText(n);
        } catch {
          return;
        }
        (e.classList.add(`is-copied`),
          clearTimeout(t),
          (t = setTimeout(() => e.classList.remove(`is-copied`), 1800)));
      });
    });
}
var Tm = [`tl`, `tr`, `br`, `bl`],
  Em = 400;
function Dm() {
  let e = Tm.map((e) => document.querySelector(`.corner-mark--${e}`));
  if (e.some((e) => !e)) return;
  let t = e;
  function n() {
    ((t = Vd() ? e : e.filter((e, t) => Tm[t] !== `br`)), (r = 0));
  }
  let r = 0,
    i = 0;
  (n(),
    Hd(n),
    im((e) => {
      let n = Math.floor(e / Em);
      if (n === i) return;
      i = n;
      let a = t[r % t.length];
      ((r += 1),
        Y.fromTo(
          a,
          { rotate: 0 },
          {
            rotate: 720,
            duration: 0.6,
            ease: `power2.inOut`,
            overwrite: `auto`,
            clearProps: `transform`,
          },
        ));
    }));
}
var Om = 150 / 113,
  km = 0.04,
  Am = 0.3,
  jm = km;
function Mm() {
  let e = document.querySelector(`#portfolio`),
    t = document.querySelector(`.sidebar-photo-wrap`),
    n = document.querySelector(`.sidebar-grid`),
    r = document.querySelector(`.badge-text:not(.badge-text--alt)`),
    i = document.querySelector(`.badge-text--alt`);
  if (!e || !t || !n) return;
  let a = Array.from(n.children);
  Y.set(a, { xPercent: 55, opacity: 0 });
  function o() {
    if (Vd()) return;
    let e = parseFloat(t.dataset.endWidth),
      r = parseFloat(t.dataset.endHeight),
      i = e && r ? { width: e, height: r } : n.getBoundingClientRect();
    if (!i.width || !i.height) return;
    let a = parseFloat(getComputedStyle(n).columnGap) || 0,
      o = (e) => (i.width - a) / 2 / ((i.height - a * (e - 1)) / e),
      s = Math.abs(o(3) - Om) < Math.abs(o(2) - Om) ? 3 : 2;
    n.dataset.rows !== String(s) &&
      ((n.dataset.rows = String(s)),
      n.style.setProperty(`--sidebar-grid-rows`, String(s)),
      sf());
  }
  (o(), of(o));
  let s = Y.timeline({
    scrollTrigger: {
      trigger: e,
      start: `top top`,
      end: () => `+=${kp()}`,
      scrub: 0.6,
      invalidateOnRefresh: !0,
    },
  });
  s.to({}, { duration: 1 }, 0);
  let c = 0.26;
  (s.fromTo(
    t,
    { filter: `none` },
    {
      filter: $(14),
      opacity: 0,
      ease: `none`,
      duration: c * 0.75,
      immediateRender: !1,
    },
    jm,
  ),
    s.fromTo(
      n,
      { xPercent: 22, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: `none`, duration: c * 0.8 },
      0.092,
    ),
    a.length &&
      s.fromTo(
        a,
        { xPercent: 55, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: `none`,
          duration: c * 0.45,
          stagger: (c * 0.35) / a.length,
        },
        0.092,
      ),
    r &&
      i &&
      s
        .to(r, { opacity: 0, ease: `none`, duration: c * 0.3 }, 0.131)
        .to(i, { opacity: 1, ease: `none`, duration: c * 0.3 }, 0.196),
    Z.addEventListener(`refresh`, o),
    l(Vd()),
    Hd(l));
  function l(e) {
    let t = s.scrollTrigger;
    t && (e ? t.disable(!0) : t.enable());
  }
}
var Nm = 0.05;
function Pm() {
  let e = document.querySelector(`#wpkoi`),
    t = document.querySelector(`.sidebar-links`),
    n = document.querySelector(`.sidebar-links-next`);
  if (!e || !t || !n) return;
  let r = document.querySelector(`.sidebar-links-now`),
    i = Array.from(document.querySelectorAll(`.sidebar-social .social-link`)),
    a = document.querySelector(`.sidebar-bio`).closest(`.sidebar-fade-slot`),
    o = document.querySelector(`.sidebar-locale`).closest(`.sidebar-fade-slot`),
    s = Array.from(n.querySelectorAll(`.sidebar-word-link`)),
    c = 0.27;
  (Y.set(s, { x: 34, opacity: 0 }), (n.inert = !0));
  let l = !1,
    u = Y.timeline({
      scrollTrigger: {
        trigger: e,
        start: `top top`,
        end: () => `+=${Rp()}`,
        scrub: 0.6,
        invalidateOnRefresh: !0,
        onUpdate: (e) => {
          let i = e.progress > 0.21200000000000002;
          i !== l &&
            ((l = i),
            t.classList.toggle(`is-wpkoi`, i),
            (n.inert = !i),
            n.setAttribute(`aria-hidden`, i ? `false` : `true`),
            r && (r.inert = i));
        },
      },
    });
  (u.to({}, { duration: 1 }, 0),
    i.length &&
      u.fromTo(
        i,
        { "--exit-fade": 1, x: 0 },
        {
          "--exit-fade": 0,
          x: 18,
          ease: `none`,
          duration: c * 0.35,
          stagger: (c * 0.2) / i.length,
        },
        Nm,
      ),
    [a, o].forEach((e, t) => {
      e &&
        u.fromTo(
          e,
          { filter: `none` },
          {
            filter: $(9),
            opacity: 0,
            ease: `none`,
            duration: c * 0.4,
            immediateRender: !1,
          },
          Nm + c * (0.08 + t * 0.08),
        );
    }),
    u.fromTo(
      n,
      { opacity: 0 },
      { opacity: 1, ease: `none`, duration: c * 0.5 },
      0.15800000000000003,
    ),
    s.length &&
      u.fromTo(
        s,
        { x: 34, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: `none`,
          duration: c * 0.4,
          stagger: (c * 0.3) / s.length,
        },
        0.15800000000000003,
      ));
  function d(e) {
    let i = u.scrollTrigger;
    (i && (e ? i.disable(!0) : i.enable()),
      e &&
        ((l = !1),
        t.classList.remove(`is-wpkoi`),
        (n.inert = !0),
        n.setAttribute(`aria-hidden`, `true`),
        r && (r.inert = !1)));
  }
  (d(Vd()), Hd(d));
}
var Fm = 2,
  Im = [2, 4],
  Lm = (e, t) => e + Math.random() * (t - e);
function Rm(e, { reach: t = 6, steps: n = 3, step: r = 0.055 } = {}) {
  let i = Y.timeline();
  for (let a = 0; a < n; a++) {
    let n = Lm(0, 45),
      o = Lm(0, 40);
    i.set(
      e,
      {
        x: Lm(-t, t),
        clipPath: `inset(${n.toFixed(0)}% 0 ${o.toFixed(0)}% 0)`,
      },
      a * r,
    );
  }
  return (i.set(e, { x: 0, clipPath: `none` }, n * r), i);
}
function zm() {
  let e = document.querySelector(`.hero`),
    t = Array.from(document.querySelectorAll(`.tagline-swap`))
      .map((e) => Array.from(e.querySelectorAll(`.tagline-word`)))
      .filter((e) => e.length),
    n = t.flat(),
    r = Array.from(document.querySelectorAll(`.sidebar-nav .nav-inner`));
  if (!e || (!t.length && !r.length)) return;
  let i = t[0] ? t[0].length : 0,
    a = !1,
    o = 0,
    s = null,
    c = null;
  function l(e) {
    t.forEach((t) => t.forEach((t, n) => t.classList.toggle(`is-on`, n === e)));
  }
  function u() {
    if (!i) return;
    let e = t.map((e) => e[o]);
    o = (o + 1) % i;
    let n = t.map((e) => e[o]);
    Y.timeline()
      .add(Rm(e, { reach: 7, steps: 2 }))
      .call(() => {
        (l(o), Y.set(e, { x: 0, clipPath: `none` }));
      })
      .add(Rm(n, { reach: 8, steps: 3 }));
  }
  function d() {
    s = Y.delayedCall(Fm, () => {
      (a && u(), d());
    });
  }
  function f() {
    c = Y.delayedCall(Lm(...Im), () => {
      (a &&
        r.length &&
        Rm(Y.utils.random(r), { reach: 5, steps: 3, step: 0.05 }),
        f());
    });
  }
  function p(e) {
    e !== a &&
      ((a = e),
      !e && ((o = 0), l(0), Y.set([...n, ...r], { x: 0, clipPath: `none` })));
  }
  return (
    Z.create({
      trigger: e,
      start: `top top`,
      end: () => `+=${jf()}`,
      invalidateOnRefresh: !0,
      onToggle: (e) => p(Vd() || Mf(e)),
      onRefresh: (e) => p(Vd() || Mf(e)),
      onUpdate: (e) => p(Vd() || Mf(e)),
    }),
    Hd((e) => {
      e && p(!0);
    }),
    Vd() && p(!0),
    d(),
    f(),
    () => {
      (s && s.kill(), c && c.kill());
    }
  );
}
var Bm = 0.16,
  Vm = 24;
function Hm() {
  let e = document.querySelector(`#portfolio`),
    t = document.querySelector(`.hero-liquid`),
    n = document.querySelector(`.grain-overlay`);
  if (!e || !t) return;
  let r = Array.from(t.querySelectorAll(`video`));
  function i(e) {
    if (!e || !e.dataset.src) return;
    let t = document.createElement(`source`);
    ((t.src = e.dataset.src),
      (t.type = `video/mp4`),
      e.appendChild(t),
      delete e.dataset.src,
      e.load());
  }
  let a = Am - km,
    o = !1;
  function s(e) {
    if (e === o) return;
    ((o = e), t.classList.toggle(`is-retired`, e));
    let n = Ff();
    (n && n.setPaused(e),
      r.forEach((t) => {
        if (e || (Vd() && t.classList.contains(`hero-liquid-video--alt`))) {
          t.pause();
          return;
        }
        let n = t.play();
        n && n.catch(() => {});
      }));
  }
  function c(e) {
    let t = e.start + (e.end - e.start) * Am;
    s(e.scroll() >= t);
  }
  let l = Y.timeline({
    scrollTrigger: {
      trigger: e,
      start: `top top`,
      end: () => `+=${kp()}`,
      scrub: 0.6,
      invalidateOnRefresh: !0,
      onUpdate: c,
      onToggle: c,
      onRefresh: c,
    },
  });
  if (
    (l.to({}, { duration: 1 }, 0),
    l.fromTo(
      t,
      { opacity: 1 },
      { opacity: 0, ease: `none`, duration: a, immediateRender: !1 },
      km,
    ),
    n)
  ) {
    let e = parseFloat(getComputedStyle(n).opacity) || 0.12;
    l.fromTo(
      n,
      { opacity: e },
      { opacity: Bm, ease: `none`, duration: a, immediateRender: !1 },
      km,
    );
  }
  let u = ``;
  l.eventCallback(`onUpdate`, function () {
    let e = (this.progress() - km) / a,
      n = Math.round((Vm * Math.min(Math.max(e, 0), 1)) / 2) * 2,
      r = n > 0 ? $(n) : `none`;
    r !== u && ((u = r), (t.style.filter = r));
  });
  let d = t.querySelector(`.hero-liquid-video:not(.hero-liquid-video--alt)`),
    f = document.querySelector(`.hero`);
  if (!d || !f) return;
  let p = ``;
  function m(e) {
    let t = e > 0 ? $(e) : `none`;
    t !== p && ((p = t), (d.style.filter = t));
  }
  let h = Y.timeline({
    scrollTrigger: {
      trigger: f,
      start: `top top`,
      end: () => `+=${jf()}`,
      scrub: 0.5,
      invalidateOnRefresh: !0,
      onUpdate: (e) => {
        let t = (e.progress - 0.55) / 0.44999999999999996;
        m(Math.round((Vm * Math.min(Math.max(t, 0), 1)) / 2) * 2);
      },
      onToggle: (e) => s(e.scroll() >= e.end),
      onRefresh: (e) => s(e.scroll() >= e.end),
    },
  }).to(d, { opacity: 0, ease: `none`, duration: 1 }, 0);
  function g(e) {
    let a = l.scrollTrigger,
      o = h.scrollTrigger;
    e
      ? (a && a.disable(!0),
        (u = ``),
        (t.style.filter = ``),
        Y.set([t, n].filter(Boolean), { clearProps: `opacity` }),
        o && o.enable())
      : (o && o.disable(!0),
        (p = ``),
        (d.style.filter = ``),
        s(!1),
        r.forEach((e) => {
          e === d && i(e);
          let t = e.play();
          t && t.catch(() => {});
        }),
        a && a.enable());
  }
  (g(Vd()), Hd(g));
}
function Um() {
  let e = Array.from(document.querySelectorAll(`video[data-src]`));
  if (!e.length) return;
  let t = !1;
  function n() {
    t ||
      ((t = !0),
      e.forEach((e) => {
        if (e.dataset.wideOnly !== void 0 && Vd()) {
          t = !1;
          return;
        }
        if (!e.dataset.src) return;
        let n = document.createElement(`source`);
        ((n.src = e.dataset.src),
          (n.type = `video/mp4`),
          e.appendChild(n),
          delete e.dataset.src,
          e.load(),
          e.classList.add(`is-attached`),
          e.play().catch(() => {}));
      }));
  }
  (window.addEventListener(`scroll`, n, { once: !0, passive: !0 }),
    Hd((e) => {
      e || n();
    }));
  let r = () =>
    (window.requestIdleCallback || ((e) => setTimeout(e, 200)))(n, {
      timeout: 3e3,
    });
  document.readyState === `complete`
    ? r()
    : window.addEventListener(`load`, r, { once: !0 });
}
var Wm = 600,
  Gm = 5 / 3;
function Km() {
  let e = document.querySelector(`.topbar-toggle`),
    t = document.querySelector(`.site-sidebar`);
  if (!e || !t) return;
  let n = e.querySelector(`.topbar-toggle-label`),
    r = document.querySelector(`.sidebar-photo-wrap`),
    i = !1,
    a = null;
  function o(r) {
    if (r === i) return;
    ((i = r),
      clearTimeout(a),
      i
        ? (t.classList.remove(`is-closing`), t.classList.add(`is-open`))
        : (t.classList.add(`is-closing`),
          t.classList.remove(`is-open`),
          (a = setTimeout(() => t.classList.remove(`is-closing`), Wm))),
      e.classList.toggle(`is-open`, i),
      e.setAttribute(`aria-expanded`, String(i)),
      e.setAttribute(`aria-label`, np(i ? `Close menu` : `Open menu`)),
      n && (n.textContent = np(i ? `CLOSE` : `MENU`)));
    let o = lc.get();
    (o && o.paused(i), s(), c());
  }
  function s() {
    t.inert = Vd() && !i;
  }
  function c() {
    if (!r) return;
    if (!Vd()) {
      r.classList.remove(`is-letterboxed`);
      return;
    }
    let { offsetWidth: e, offsetHeight: t } = r;
    r.classList.toggle(`is-letterboxed`, t > 0 && e / t > Gm);
  }
  (e.addEventListener(`click`, () => o(!i)),
    t.addEventListener(`click`, (e) => {
      e.target.closest(`a[href^="#"]`) && o(!1);
    }),
    document.addEventListener(`keydown`, (e) => {
      e.key === `Escape` && i && o(!1);
    }),
    Hd((r) => {
      if (r) {
        (s(), c());
        return;
      }
      ((i = !1),
        clearTimeout(a),
        t.classList.remove(`is-open`, `is-closing`),
        t.getAnimations().forEach((e) => e.cancel()),
        e.classList.remove(`is-open`),
        e.setAttribute(`aria-expanded`, `false`),
        e.setAttribute(`aria-label`, np(`Open menu`)),
        n && (n.textContent = np(`MENU`)));
      let o = lc.get();
      (o && o.paused(!1), s(), c());
    }),
    s(),
    c(),
    of(c),
    document.fonts && document.fonts.ready && document.fonts.ready.then(c));
}
var qm = 0.2;
function Jm() {
  let e = document.querySelector(`.hero-portrait`),
    t = e ? e.querySelector(`.hero-portrait-name`) : null,
    n = e ? e.querySelector(`.hero-portrait-name-line`) : null,
    r = document.querySelector(`.hero`);
  if (!e || !t || !n || !r) return;
  function i() {
    if (!Vd()) return;
    n.style.fontSize = ``;
    let e = t.clientWidth,
      r = n.getBoundingClientRect().width;
    if (!e || !r) return;
    let i = parseFloat(getComputedStyle(n).fontSize);
    n.style.fontSize = `${((i * e) / r).toFixed(3)}px`;
  }
  (i(),
    of(i),
    Hd(i),
    document.fonts && document.fonts.ready && document.fonts.ready.then(i),
    Y.timeline({
      scrollTrigger: {
        trigger: r,
        start: `top top`,
        end: () => `+=${jf() * qm}`,
        scrub: 0.4,
        invalidateOnRefresh: !0,
      },
    }).to(e, { opacity: 0, ease: `none`, duration: 1 }, 0));
}
function Ym() {
  let e = document.querySelector(`.sidebar-stack-year`);
  if (!e) return;
  let t = String(new Date().getFullYear());
  e.textContent.trim() !== t && (e.textContent = t);
}
var Xm =
    typeof matchMedia == `function` &&
    matchMedia(`(prefers-reduced-motion: reduce)`).matches
      ? 200
      : 2e3,
  Zm = 7e3,
  Qm = 0.92,
  $m = 8,
  eh = [-7, 5, -3, 8, -5, 2, -8, 6],
  th = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*+`,
  nh = () => th[Math.floor(Math.random() * 40)];
function rh() {
  let e = document.querySelector(`.preloader`);
  if (!e) return;
  let t = e.querySelector(`.preloader-inner`),
    n = e.querySelector(`.preloader-title-text`),
    r = e.querySelector(`.preloader-title-mark`),
    i = e.querySelector(`.preloader-stage-cards`),
    a = Array.from(e.querySelectorAll(`.preloader-digit`)),
    o = e.querySelector(`.preloader-ruler`),
    s = e.querySelector(`.preloader-marker`);
  if (gf(`preloader`)) {
    oh(e);
    return;
  }
  let c = new Set(),
    l = lc.get();
  if ((l && (l.scrollTop(0), l.paused(!0)), o)) {
    let e = document.createDocumentFragment();
    for (let t = 0; t <= 100; t += 1) {
      let n = document.createElement(`span`);
      ((n.className = `preloader-tick preloader-tick--${t % 10 == 0 ? `major` : `minor`}`),
        (n.style.left = `${(t / 100) * 100}%`),
        e.appendChild(n));
    }
    o.appendChild(e);
  }
  let u = [];
  if (i) {
    let e = Math.round(i.getBoundingClientRect().width) || 128;
    Dp.slice(0, $m).forEach((t, n) => {
      let r = document.createElement(`span`);
      r.className = `preloader-card`;
      let a = document.createElement(`img`);
      ((a.alt = ``), (a.decoding = `async`));
      let o = Op.get(t);
      (o && ((a.srcset = o), (a.sizes = `${e}px`)),
        (a.src = t),
        r.appendChild(a),
        i.appendChild(r),
        u.push(a),
        Y.set(r, { opacity: 0, scale: 0.55, rotate: eh[n % eh.length] * 1.9 }));
    });
  }
  let d = [];
  (d.push(document.fonts ? document.fonts.ready : Promise.resolve()),
    u.forEach((e) => {
      d.push(e.decode ? e.decode() : Promise.resolve());
    }));
  let f = 0,
    p = d.length;
  d.forEach((e) => {
    Promise.resolve(e).then(m, m);
  });
  function m() {
    f += 1;
  }
  let h = [];
  n &&
    ((h = Nc.create(n, { type: `chars`, charsClass: `char` }).chars.map(
      (e) => ({ el: e, real: e.textContent }),
    )),
    h.forEach((e) => {
      ((e.el.textContent = ``), Y.set(e.el, { opacity: 0 }));
    }));
  function g(e, t) {
    Y.set(e.el, { opacity: 1 });
    let n = setInterval(
      () => {
        e.el.textContent = nh();
      },
      Y.utils.random(28, 55),
    );
    (c.add(n),
      Y.fromTo(
        e.el,
        { color: `var(--color-accent)` },
        { color: `var(--color-light)`, duration: t * 0.8, ease: `power2.out` },
      ),
      Y.delayedCall(t, () => {
        (clearInterval(n), c.delete(n), (e.el.textContent = e.real));
      }));
  }
  function _() {
    (c.forEach(clearInterval), c.clear());
  }
  Y.set(t, { opacity: 1 });
  let v = Y.timeline();
  (r && v.to(r, { scaleX: 1, duration: 0.35, ease: `power2.out` }, 0.05),
    h.forEach((e, t) => {
      v.call(() => g(e, Y.utils.random(0.32, 0.48)), null, 0.1 + t * 0.045);
    }),
    u.length &&
      u.forEach((e, t) => {
        v.to(
          e.parentNode,
          {
            opacity: 1,
            scale: 1,
            rotate: eh[t % eh.length],
            duration: 0.45,
            ease: `back.out(1.7)`,
          },
          0.2 + t * 0.09,
        );
      }));
  let y = 0,
    b = 0,
    x = !1;
  function S() {
    y ||= performance.now();
    let e = performance.now() - y,
      t = Math.min(e / Xm, 1);
    b = Math.max(b, !p || f >= p || e >= Zm ? t : Math.min(t, Qm));
    let n = String(Math.round(b * 100)).padStart(3, `0`);
    for (let e = 0; e < a.length; e += 1)
      a[e].textContent !== n[e] && (a[e].textContent = n[e]);
    (s && (s.style.left = `${b * 100}%`), b >= 1 && !x && T());
  }
  (Y.ticker.add(S), e.addEventListener(`animationend`, () => oh(e)));
  let C = setTimeout(() => T(), 7400),
    w = setTimeout(() => {
      e.isConnected && oh(e);
    }, 8500);
  function T() {
    x ||
      ((x = !0),
      clearTimeout(C),
      Y.ticker.remove(S),
      _(),
      Y.timeline({
        onComplete: () => {
          (clearTimeout(w), oh(e));
        },
      })
        .to(t, { autoAlpha: 0, y: `-4rem`, duration: 0.4, ease: `power2.in` })
        .to(
          e,
          { yPercent: -100, duration: 0.9, ease: `power4.inOut`, onStart: ah },
          `-=0.12`,
        ));
  }
}
var ih = !1;
function ah() {
  if (ih) return;
  ih = !0;
  let e = lc.get();
  (e && e.paused(!1),
    document.dispatchEvent(new CustomEvent(`preloader:done`)));
}
function oh(e) {
  (ah(), e.isConnected && e.remove());
}
var sh = new Set([`SPAN`, `DIV`, `P`]);
function ch(e = document) {
  e.querySelectorAll(`[aria-label]:not([role])`).forEach((e) => {
    sh.has(e.tagName) &&
      e.querySelector(`[aria-hidden="true"]`) &&
      e.setAttribute(`role`, `img`);
  });
}
if (
  (Y.registerPlugin(Z, lc, Nc, Pu, Ld),
  _f(),
  Z.config({ autoRefreshEvents: `visibilitychange,DOMContentLoaded,load` }),
  lc.create({
    wrapper: `#smooth-wrapper`,
    content: `#smooth-content`,
    smooth: gf(`smoother`) ? 0 : 1.2,
    effects: !1,
    ignoreMobileResize: !0,
  }),
  matchMedia(`(hover: none) and (pointer: coarse)`).matches)
) {
  let e = () => Z.normalizeScroll({ type: `touch`, allowNestedScroll: !0 });
  (e(),
    document.addEventListener(
      `preloader:done`,
      () => {
        (Z.normalizeScroll(!1), e());
      },
      { once: !0 },
    ));
}
(rh(),
  If().then(() => Cm()),
  $f(),
  Ap(),
  Vp(),
  Xp(),
  Zp(),
  um(),
  dm(),
  fm(),
  hm(),
  wm(),
  Dm(),
  Mm(),
  Pm(),
  zm(),
  Hm(),
  Um(),
  Km(),
  Jm(),
  Ym(),
  document.fonts.ready.then(() => ch()),
  document.addEventListener(`preloader:done`, () => ch(), { once: !0 }));
