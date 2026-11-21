"use client";

// Reconstructed from Turbopack module 52959 (1glc14gis_i1h.js).
import * as __react from "react";
import { gsap as __gsap } from "gsap";
import { ScrollTrigger as __ScrollTrigger } from "gsap/ScrollTrigger";

const __deps = {
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

((t) => {
  "use strict";
  var e = "1.3.26";
  function i(t, e, i) {
    return Math.max(t, Math.min(e, i));
  }
  var o = class {
      isRunning = !1;
      value = 0;
      from = 0;
      to = 0;
      currentTime = 0;
      lerp;
      duration;
      easing;
      onUpdate;
      advance(t) {
        if (!this.isRunning) return;
        let e = !1;
        if (this.duration && this.easing) {
          this.currentTime += t;
          let o = i(0, this.currentTime / this.duration, 1),
            r = (e = o >= 1) ? 1 : this.easing(o);
          this.value = this.from + (this.to - this.from) * r;
        } else if (this.lerp) {
          var o, r, n, a;
          ((this.value =
            ((o = this.value),
            (r = this.to),
            (n = 60 * this.lerp),
            (1 - (a = 1 - Math.exp(-n * t))) * o + a * r)),
            Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (e = !0)));
        } else ((this.value = this.to), (e = !0));
        (e && this.stop(), this.onUpdate?.(this.value, e));
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(t, e, { lerp: i, duration: o, easing: r, onStart: n, onUpdate: a }) {
        ((this.from = this.value = t),
          (this.to = e),
          (this.lerp = i),
          (this.duration = o),
          (this.easing = r),
          (this.currentTime = 0),
          (this.isRunning = !0),
          n?.(),
          (this.onUpdate = a));
      }
    },
    r = class {
      width = 0;
      height = 0;
      scrollHeight = 0;
      scrollWidth = 0;
      debouncedResize;
      wrapperResizeObserver;
      contentResizeObserver;
      constructor(t, e, { autoResize: i = !0, debounce: o = 250 } = {}) {
        if (((this.wrapper = t), (this.content = e), i)) {
          var r;
          let t;
          ((this.debouncedResize =
            ((r = this.resize),
            function (...e) {
              (clearTimeout(t),
                (t = setTimeout(() => {
                  ((t = void 0), r.apply(this, e));
                }, o)));
            })),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize)
              : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
            this.contentResizeObserver.observe(this.content));
        }
        this.resize();
      }
      destroy() {
        (this.wrapperResizeObserver?.disconnect(),
          this.contentResizeObserver?.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize));
      }
      resize = () => {
        (this.onWrapperResize(), this.onContentResize());
      };
      onWrapperResize = () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
      };
      onContentResize = () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
      };
      get limit() {
        return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
      }
    },
    n = class {
      events = {};
      emit(t, ...e) {
        let i = this.events[t] || [];
        for (let t = 0, o = i.length; t < o; t++) i[t]?.(...e);
      }
      on(t, e) {
        return (
          this.events[t] ? this.events[t].push(e) : (this.events[t] = [e]),
          () => {
            this.events[t] = this.events[t]?.filter((t) => e !== t);
          }
        );
      }
      off(t, e) {
        this.events[t] = this.events[t]?.filter((t) => e !== t);
      }
      destroy() {
        this.events = {};
      }
    };
  let a = 100 / 6,
    s = { passive: !1 };
  function l(t, e) {
    return 1 === t ? a : 2 === t ? e : 1;
  }
  var h = class {
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new n();
    constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ((this.element = t),
        (this.options = e),
        window.addEventListener("resize", this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, s),
        this.element.addEventListener("touchstart", this.onTouchStart, s),
        this.element.addEventListener("touchmove", this.onTouchMove, s),
        this.element.addEventListener("touchend", this.onTouchEnd, s));
    }
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      (this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize),
        this.element.removeEventListener("wheel", this.onWheel, s),
        this.element.removeEventListener("touchstart", this.onTouchStart, s),
        this.element.removeEventListener("touchmove", this.onTouchMove, s),
        this.element.removeEventListener("touchend", this.onTouchEnd, s));
    }
    onTouchStart = (t) => {
      let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
      ((this.touchStart.x = e),
        (this.touchStart.y = i),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t }));
    };
    onTouchMove = (t) => {
      let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t,
        o = -(e - this.touchStart.x) * this.options.touchMultiplier,
        r = -(i - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = e),
        (this.touchStart.y = i),
        (this.lastDelta = { x: o, y: r }),
        this.emitter.emit("scroll", { deltaX: o, deltaY: r, event: t }));
    };
    onTouchEnd = (t) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
    };
    onWheel = (t) => {
      let { deltaX: e, deltaY: i, deltaMode: o } = t,
        r = l(o, this.window.width),
        n = l(o, this.window.height);
      ((e *= r),
        (i *= n),
        (e *= this.options.wheelMultiplier),
        (i *= this.options.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t }));
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  };
  let c = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
  var d = class {
      _isScrolling = !1;
      _isStopped = !1;
      _isLocked = !1;
      _preventNextNativeScrollEvent = !1;
      _resetVelocityTimeout = null;
      _rafId = null;
      _isDraggingSelection = !1;
      reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      isTouching;
      isIos;
      time = 0;
      userData = {};
      lastVelocity = 0;
      velocity = 0;
      direction = 0;
      options;
      targetScroll;
      animatedScroll;
      animate = new o();
      emitter = new n();
      dimensions;
      virtualScroll;
      constructor({
        wrapper: t = window,
        content: i = document.documentElement,
        eventsTarget: o = t,
        smoothWheel: n = !0,
        syncTouch: a = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaExponent: l = 1.7,
        duration: d,
        easing: m,
        lerp: u = 0.1,
        infinite: p = !1,
        orientation: y = "vertical",
        gestureOrientation: g = "horizontal" === y ? "both" : "vertical",
        touchMultiplier: $ = 1,
        wheelMultiplier: f = 1,
        autoResize: v = !0,
        prevent: w,
        virtualScroll: x,
        overscroll: b = !0,
        autoRaf: S = !1,
        anchors: C = !1,
        autoToggle: M = !1,
        allowNestedScroll: E = !1,
        __experimental__naiveDimensions: L = !1,
        naiveDimensions: A = L,
        stopInertiaOnNavigate: T = !1,
        respectReducedMotion: k = !0,
      } = {}) {
        ((window.lenisVersion = e),
          window.lenis || (window.lenis = {}),
          (window.lenis.version = e),
          "horizontal" === y && (window.lenis.horizontal = !0),
          !0 === a && (window.lenis.touch = !0),
          (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
          (t && t !== document.documentElement) || (t = window),
          "number" == typeof d && "function" != typeof m
            ? (m = c)
            : "function" == typeof m && "number" != typeof d && (d = 1),
          (this.options = {
            wrapper: t,
            content: i,
            eventsTarget: o,
            smoothWheel: n,
            syncTouch: a,
            syncTouchLerp: s,
            touchInertiaExponent: l,
            duration: d,
            easing: m,
            lerp: u,
            infinite: p,
            gestureOrientation: g,
            orientation: y,
            touchMultiplier: $,
            wheelMultiplier: f,
            autoResize: v,
            prevent: w,
            virtualScroll: x,
            overscroll: b,
            autoRaf: S,
            anchors: C,
            autoToggle: M,
            allowNestedScroll: E,
            naiveDimensions: A,
            stopInertiaOnNavigate: T,
            respectReducedMotion: k,
          }),
          (this.dimensions = new r(t, i, { autoResize: v })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
          (this.options.anchors || this.options.stopInertiaOnNavigate) &&
            this.options.wrapper.addEventListener("click", this.onClick),
          this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
          (this.virtualScroll = new h(o, { touchMultiplier: $, wheelMultiplier: f })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoToggle &&
            (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)),
          this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
      }
      destroy() {
        (this.emitter.destroy(),
          this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
          this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
          this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown),
          (this.options.anchors || this.options.stopInertiaOnNavigate) &&
            this.options.wrapper.removeEventListener("click", this.onClick),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this._rafId && cancelAnimationFrame(this._rafId));
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      off(t, e) {
        return this.emitter.off(t, e);
      }
      onScrollEnd = (t) => {
        t instanceof CustomEvent ||
          ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
          t.stopPropagation();
      };
      dispatchScrollendEvent = () => {
        this.options.wrapper.dispatchEvent(
          new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            detail: { lenisScrollEnd: !0 },
          }),
        );
      };
      get overflow() {
        let t = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[t];
      }
      checkOverflow() {
        ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
      }
      onTransitionEnd = (t) => {
        t.propertyName?.includes("overflow") && t.target === this.rootElement && this.checkOverflow();
      };
      setScroll(t) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
      }
      onClick = (t) => {
        let e = t
            .composedPath()
            .filter((t) => t instanceof HTMLAnchorElement && t.href)
            .map((t) => new URL(t.href)),
          i = new URL(window.location.href);
        if (this.options.anchors) {
          let t = e.find((t) => i.host === t.host && i.pathname === t.pathname && t.hash);
          if (t) {
            let e =
                "object" == typeof this.options.anchors && this.options.anchors
                  ? this.options.anchors
                  : void 0,
              i = decodeURIComponent(t.hash);
            this.scrollTo(i, e);
            return;
          }
        }
        if (
          this.options.stopInertiaOnNavigate &&
          e.some((t) => i.host === t.host && i.pathname !== t.pathname)
        )
          return void this.reset();
      };
      onPointerDown = (t) => {
        1 === t.button && this.reset();
      };
      isTouchOnSelectionHandle(t) {
        let e = window.getSelection();
        if (!e || e.isCollapsed || 0 === e.rangeCount) return !1;
        let i = t.targetTouches[0] ?? t.changedTouches[0];
        if (!i) return !1;
        let o = e.getRangeAt(0).getClientRects();
        if (0 === o.length) return !1;
        let r = o[0],
          n = o[o.length - 1],
          a = 40 >= Math.hypot(i.clientX - r.left, i.clientY - r.top),
          s = 40 >= Math.hypot(i.clientX - n.right, i.clientY - n.bottom);
        return a || s;
      }
      onVirtualScroll = (t) => {
        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
        let { deltaX: e, deltaY: i, event: o } = t;
        if (
          (this.emitter.emit("virtual-scroll", { deltaX: e, deltaY: i, event: o }),
          o.ctrlKey || o.lenisStopPropagation)
        )
          return;
        let r = o.type.includes("touch"),
          n = o.type.includes("wheel");
        if (
          r &&
          this.isIos &&
          ("touchstart" === o.type && (this._isDraggingSelection = this.isTouchOnSelectionHandle(o)),
          this._isDraggingSelection)
        ) {
          "touchend" === o.type && (this._isDraggingSelection = !1);
          return;
        }
        this.isTouching = "touchstart" === o.type || "touchmove" === o.type;
        let a = 0 === e && 0 === i;
        if (this.options.syncTouch && r && "touchstart" === o.type && a && !this.isStopped && !this.isLocked)
          return void this.reset();
        let s =
          ("vertical" === this.options.gestureOrientation && 0 === i) ||
          ("horizontal" === this.options.gestureOrientation && 0 === e);
        if (a || s) return;
        let l = o.composedPath();
        l = l.slice(0, l.indexOf(this.rootElement));
        let h = this.options.prevent,
          c = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
        if (
          l.find(
            (t) =>
              t instanceof HTMLElement &&
              (("function" == typeof h && h?.(t)) ||
                t.hasAttribute?.("data-lenis-prevent") ||
                ("vertical" === c && t.hasAttribute?.("data-lenis-prevent-vertical")) ||
                ("horizontal" === c && t.hasAttribute?.("data-lenis-prevent-horizontal")) ||
                (r && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                (n && t.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll && this.hasNestedScroll(t, { deltaX: e, deltaY: i }))),
          )
        )
          return;
        if (this.isStopped || this.isLocked) {
          o.cancelable && o.preventDefault();
          return;
        }
        if (!((this.options.syncTouch && r) || (this.options.smoothWheel && n))) {
          ((this.isScrolling = "native"), this.animate.stop(), (o.lenisStopPropagation = !0));
          return;
        }
        let d = i;
        ("both" === this.options.gestureOrientation
          ? (d = Math.abs(i) > Math.abs(e) ? i : e)
          : "horizontal" === this.options.gestureOrientation && (d = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              this.limit > 0 &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (0 === this.animatedScroll && i > 0) ||
                (this.animatedScroll === this.limit && i < 0)))) &&
            (o.lenisStopPropagation = !0),
          o.cancelable && o.preventDefault());
        let m = r && this.options.syncTouch,
          u = r && "touchend" === o.type;
        (u && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
          this.scrollTo(this.targetScroll + d, {
            programmatic: !1,
            ...(m
              ? { lerp: u ? this.options.syncTouchLerp : 1 }
              : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }),
          }));
      };
      resize() {
        (this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit());
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      onNativeScroll = () => {
        if (
          (null !== this._resetVelocityTimeout &&
            (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
          this._preventNextNativeScrollEvent)
        ) {
          this._preventNextNativeScrollEvent = !1;
          return;
        }
        if (!1 === this.isScrolling || "native" === this.isScrolling) {
          let t = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - t),
            (this.direction = Math.sign(this.animatedScroll - t)),
            this.isStopped || (this.isScrolling = "native"),
            this.emit(),
            0 !== this.velocity &&
              (this._resetVelocityTimeout = setTimeout(() => {
                ((this.lastVelocity = this.velocity),
                  (this.velocity = 0),
                  (this.isScrolling = !1),
                  this.emit());
              }, 400)));
        }
      };
      reset() {
        ((this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop());
      }
      start() {
        if (this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
          this.internalStart();
        }
      }
      internalStart() {
        this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
      }
      stop() {
        if (!this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
          this.internalStop();
        }
      }
      internalStop() {
        this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
      }
      raf = (t) => {
        let e = t - (this.time || t);
        ((this.time = t),
          this.animate.advance(0.001 * e),
          this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
      };
      scrollTo(
        t,
        {
          offset: e = 0,
          immediate: o = !1,
          lock: r = !1,
          programmatic: n = !0,
          lerp: a = n ? this.options.lerp : void 0,
          duration: s = n ? this.options.duration : void 0,
          easing: l = n ? this.options.easing : void 0,
          onStart: h,
          onComplete: d,
          force: m = !1,
          userData: u,
        } = {},
      ) {
        if (
          (this.prefersReducedMotion && (n ? (o = !0) : ((a = 1), (s = void 0), (l = void 0))),
          (this.isStopped || this.isLocked) && !m)
        )
          return;
        let p = t,
          y = e;
        if ("string" == typeof p && ["top", "left", "start", "#"].includes(p)) p = 0;
        else if ("string" == typeof p && ["bottom", "right", "end"].includes(p)) p = this.limit;
        else {
          let t = null;
          if (
            ("string" == typeof p
              ? (t = p.startsWith("#") ? document.getElementById(p.slice(1)) : document.querySelector(p)) ||
                ("#top" === p ? (p = 0) : console.warn("Lenis: Target not found", p))
              : p instanceof HTMLElement && p?.nodeType && (t = p),
            t)
          ) {
            if (this.options.wrapper !== window) {
              let t = this.rootElement.getBoundingClientRect();
              y -= this.isHorizontal ? t.left : t.top;
            }
            let e = t.getBoundingClientRect(),
              i = getComputedStyle(t),
              o = this.isHorizontal
                ? Number.parseFloat(i.scrollMarginLeft)
                : Number.parseFloat(i.scrollMarginTop),
              r = getComputedStyle(this.rootElement),
              n = this.isHorizontal
                ? Number.parseFloat(r.scrollPaddingLeft)
                : Number.parseFloat(r.scrollPaddingTop);
            p =
              (this.isHorizontal ? e.left : e.top) +
              this.animatedScroll -
              (Number.isNaN(o) ? 0 : o) -
              (Number.isNaN(n) ? 0 : n);
          }
        }
        if ("number" == typeof p) {
          if (((p += y), this.options.infinite)) {
            if (n) {
              this.targetScroll = this.animatedScroll = this.scroll;
              let t = p - this.animatedScroll;
              t > this.limit / 2 ? (p -= this.limit) : t < -this.limit / 2 && (p += this.limit);
            }
          } else p = i(0, p, this.limit);
          if (p === this.targetScroll) {
            (h?.(this), d?.(this));
            return;
          }
          if (((this.userData = u ?? {}), o)) {
            ((this.animatedScroll = this.targetScroll = p),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              d?.(this),
              (this.userData = {}),
              requestAnimationFrame(() => {
                this.dispatchScrollendEvent();
              }));
            return;
          }
          (n || (this.targetScroll = p),
            "number" == typeof s && "function" != typeof l
              ? (l = c)
              : "function" == typeof l && "number" != typeof s && (s = 1),
            this.animate.fromTo(this.animatedScroll, p, {
              duration: s,
              easing: l,
              lerp: a,
              onStart: () => {
                (r && (this.isLocked = !0), (this.isScrolling = "smooth"), h?.(this));
              },
              onUpdate: (t, e) => {
                ((this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = t - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = t),
                  this.setScroll(this.scroll),
                  n && (this.targetScroll = t),
                  e || this.emit(),
                  e &&
                    (this.reset(),
                    this.emit(),
                    d?.(this),
                    (this.userData = {}),
                    requestAnimationFrame(() => {
                      this.dispatchScrollendEvent();
                    }),
                    this.preventNextNativeScrollEvent()));
              },
            }));
        }
      }
      preventNextNativeScrollEvent() {
        ((this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          }));
      }
      hasNestedScroll(t, { deltaX: e, deltaY: i }) {
        let o,
          r,
          n,
          a,
          s,
          l,
          h,
          c,
          d,
          m,
          u,
          p,
          y,
          g,
          $,
          f,
          v = Date.now();
        t._lenis || (t._lenis = {});
        let w = t._lenis;
        if (v - (w.time ?? 0) > 2e3) {
          w.time = Date.now();
          let e = window.getComputedStyle(t);
          if (
            ((w.computedStyle = e),
            (o = ["auto", "overlay", "scroll"].includes(e.overflowX)),
            (r = ["auto", "overlay", "scroll"].includes(e.overflowY)),
            (s = ["auto"].includes(e.overscrollBehaviorX)),
            (l = ["auto"].includes(e.overscrollBehaviorY)),
            (w.hasOverflowX = o),
            (w.hasOverflowY = r),
            !(o || r))
          )
            return !1;
          ((h = t.scrollWidth),
            (c = t.scrollHeight),
            (d = t.clientWidth),
            (m = t.clientHeight),
            (n = h > d),
            (a = c > m),
            (w.isScrollableX = n),
            (w.isScrollableY = a),
            (w.scrollWidth = h),
            (w.scrollHeight = c),
            (w.clientWidth = d),
            (w.clientHeight = m),
            (w.hasOverscrollBehaviorX = s),
            (w.hasOverscrollBehaviorY = l));
        } else
          ((n = w.isScrollableX),
            (a = w.isScrollableY),
            (o = w.hasOverflowX),
            (r = w.hasOverflowY),
            (h = w.scrollWidth),
            (c = w.scrollHeight),
            (d = w.clientWidth),
            (m = w.clientHeight),
            (s = w.hasOverscrollBehaviorX),
            (l = w.hasOverscrollBehaviorY));
        if (!((o && n) || (r && a))) return !1;
        let x = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
        if ("horizontal" === x)
          ((u = Math.round(t.scrollLeft)), (p = h - d), (y = e), (g = o), ($ = n), (f = s));
        else {
          if ("vertical" !== x) return !1;
          ((u = Math.round(t.scrollTop)), (p = c - m), (y = i), (g = r), ($ = a), (f = l));
        }
        return (!f && (u >= p || u <= 0)) || ((y > 0 ? u < p : u > 0) && g && $);
      }
      get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
      }
      get limit() {
        return this.options.naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        let t = this.options.wrapper;
        return this.isHorizontal ? (t.scrollX ?? t.scrollLeft) : (t.scrollY ?? t.scrollTop);
      }
      get scroll() {
        var t;
        return this.options.infinite
          ? ((this.animatedScroll % (t = this.limit)) + t) % t
          : this.animatedScroll;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(t) {
        this._isScrolling !== t && ((this._isScrolling = t), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(t) {
        this._isStopped !== t && ((this._isStopped = t), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(t) {
        this._isLocked !== t && ((this._isLocked = t), this.updateClassName());
      }
      get isSmooth() {
        return "smooth" === this.isScrolling;
      }
      get prefersReducedMotion() {
        return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
      }
      get className() {
        let t = "lenis";
        return (
          this.options.autoToggle && (t += " lenis-autoToggle"),
          this.isStopped && (t += " lenis-stopped"),
          this.isLocked && (t += " lenis-locked"),
          this.isScrolling && (t += " lenis-scrolling"),
          "smooth" === this.isScrolling && (t += " lenis-smooth"),
          t
        );
      }
      updateClassName() {
        (this.cleanUpClassName(),
          this.className.split(" ").forEach((t) => {
            this.rootElement.classList.add(t);
          }));
      }
      cleanUpClassName() {
        for (let t of Array.from(this.rootElement.classList))
          ("lenis" === t || t.startsWith("lenis-")) && this.rootElement.classList.remove(t);
      }
    },
    m = t.i(71645),
    u = t.i(89970),
    p = t.i(83495);
  (u.f.registerPlugin(p.f),
    t.s(
      [
        "MotionController",
        0,
        function ({ children: t }) {
          return (
            (0, m.useEffect)(() => {
              p.f.config({
                ignoreMobileResize: !0,
                autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
              });
              let t = window.matchMedia("(prefers-reduced-motion: reduce)"),
                e = new WeakSet(),
                i = window.scrollY,
                o = () => {
                  i = window.scrollY;
                };
              window.addEventListener("scroll", o, { passive: !0 });
              let r = (i, o = window.scrollY) => {
                  let r = !document.documentElement.classList.contains("is-ready"),
                    n = i ? document.getElementById(window.location.hash.slice(1)) : null,
                    a = i && r && !n && performance.getEntriesByType("navigation")[0]?.type === "reload";
                  a && window.scrollTo(0, 0);
                  let s = t.matches;
                  (document.documentElement.classList.toggle("reduced-motion", s),
                    i ||
                      document.querySelectorAll("[data-reveal], [data-heading-reveal]").forEach((t) => {
                        t.getBoundingClientRect().top < 0.94 * window.innerHeight && e.add(t);
                      }));
                  let l = window.matchMedia("(hover: none), (pointer: coarse)").matches;
                  if (s) {
                    if (n) {
                      let t = () => n.scrollIntoView();
                      window.addEventListener("portfolio:ready", t);
                      let e = r ? 0 : requestAnimationFrame(t);
                      return () => {
                        (cancelAnimationFrame(e), window.removeEventListener("portfolio:ready", t));
                      };
                    }
                    return;
                  }
                  let h = new d({
                      duration: 1.05,
                      smoothWheel: !0,
                      anchors: !1,
                      stopInertiaOnNavigate: !0,
                      wheelMultiplier: 0.9,
                      touchMultiplier: 1,
                    }),
                    c = () => {
                      "hidden" !== document.documentElement.style.overflow && h.start();
                    },
                    m = (t) => (t.detail ? h.stop() : h.start());
                  (window.addEventListener("portfolio:scroll-lock", m),
                    ("hidden" === document.documentElement.style.overflow ||
                      (r &&
                        document.querySelector("[data-hero-thread]") &&
                        "true" !== document.documentElement.dataset.heroThreadComplete)) &&
                      h.stop(),
                    window.addEventListener("portfolio:hero-thread-complete", c));
                  let y = () => {
                    (n || a) && (p.f.refresh(), h.resize(), h.scrollTo(n ?? 0, { immediate: !0, force: !0 }));
                  };
                  window.addEventListener("portfolio:ready", y);
                  let g = !0,
                    $ = 0,
                    f = 0;
                  r ||
                    document.fonts.ready.then(() => {
                      g && ($ = requestAnimationFrame(y));
                    });
                  let v = (t) => {
                    if (0 !== t.button || !t.isPrimary || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey)
                      return;
                    let e = t.target instanceof Element ? t.target.closest("a[href]") : null;
                    !e ||
                      e.target ||
                      e.hasAttribute("download") ||
                      new URL(e.href).origin !== location.origin ||
                      ("smooth" === h.isScrolling &&
                        h.scrollTo(h.actualScroll, { immediate: !0, force: !0 }));
                  };
                  document.addEventListener("pointerdown", v, !0);
                  let w = (t) => {
                    if (
                      t.defaultPrevented ||
                      0 !== t.button ||
                      t.metaKey ||
                      t.ctrlKey ||
                      t.shiftKey ||
                      t.altKey
                    )
                      return;
                    let e = t.target instanceof Element ? t.target.closest("a[href]") : null;
                    if (!e || e.target || e.hasAttribute("download")) return;
                    let i = new URL(e.href);
                    if (
                      i.origin !== location.origin ||
                      i.pathname !== location.pathname ||
                      i.search !== location.search ||
                      !i.hash
                    )
                      return;
                    let o = document.getElementById(decodeURIComponent(i.hash.slice(1)));
                    o &&
                      (t.preventDefault(),
                      history.pushState(null, "", i.hash),
                      e.classList.contains("skip-link") && o.focus({ preventScroll: !0 }),
                      cancelAnimationFrame(f),
                      (f = requestAnimationFrame(() => h.scrollTo(o, { force: !0 }))));
                  };
                  (document.addEventListener("click", w, !0), h.on("scroll", p.f.update));
                  let x = (t) => h.raf(1e3 * t);
                  (u.f.ticker.add(x), u.f.ticker.lagSmoothing(0));
                  let b = u.f.context(() => {
                    (u.f.utils.toArray("[data-reveal]").forEach((t) => {
                      e.has(t) ||
                        u.f.fromTo(
                          t,
                          { y: 42, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            onComplete: () => {
                              e.add(t);
                            },
                            duration: 0.9,
                            ease: "power3.out",
                            scrollTrigger: { trigger: t, start: "top 88%", once: !0 },
                          },
                        );
                    }),
                      u.f.utils.toArray("[data-heading-reveal]").forEach((t) => {
                        e.has(t) ||
                          u.f.fromTo(
                            t.querySelectorAll(".heading-line-reveal"),
                            { opacity: 0, filter: l ? "none" : "blur(10px)", yPercent: 20 },
                            {
                              opacity: 1,
                              filter: l ? "none" : "blur(0px)",
                              yPercent: 0,
                              onComplete: () => {
                                e.add(t);
                              },
                              duration: 1,
                              stagger: 0.1,
                              ease: "power2.out",
                              ...(l ? { clearProps: "filter" } : {}),
                              scrollTrigger: { trigger: t, start: "top 88%", once: !0 },
                            },
                          );
                      }),
                      u.f.utils.toArray("[data-velocity-type]").forEach((t) => {
                        let e = t.closest(".hero"),
                          i = t.closest(".practice-intro, .capability-heading"),
                          o = t.closest(".about-heading, .contact-statement"),
                          r = "reverse" === t.dataset.direction;
                        u.f.fromTo(
                          t,
                          { x: 0, force3D: !!l || "auto" },
                          {
                            x: () =>
                              (r ? 1 : -1) *
                              (e
                                ? 0.055 * e.clientWidth
                                : t.clientWidth * (i?.matches(".capability-heading") ? 0.035 : 0.08)),
                            ease: "none",
                            force3D: !!l || "auto",
                            onUpdate: e
                              ? () => window.dispatchEvent(new Event("portfolio:hero-motion"))
                              : void 0,
                            scrollTrigger: {
                              trigger: e ?? i ?? t,
                              start: e
                                ? "top top"
                                : o
                                  ? "top 60%"
                                  : i?.matches(".capability-heading")
                                    ? "top 40%"
                                    : i
                                      ? "top 70%"
                                      : "top bottom",
                              end: "bottom top",
                              scrub: l ? 0.6 : 1.2,
                              invalidateOnRefresh: !0,
                            },
                          },
                        );
                      }));
                  });
                  return (
                    i || (p.f.refresh(), h.scrollTo(o, { immediate: !0, force: !0 })),
                    () => {
                      ((g = !1),
                        cancelAnimationFrame($),
                        cancelAnimationFrame(f),
                        b.revert(),
                        window.removeEventListener("portfolio:ready", y),
                        window.removeEventListener("portfolio:hero-thread-complete", c),
                        window.removeEventListener("portfolio:scroll-lock", m),
                        u.f.ticker.remove(x),
                        document.removeEventListener("click", w, !0),
                        document.removeEventListener("pointerdown", v, !0),
                        h.destroy());
                    }
                  );
                },
                n = r(!0),
                a = () => {
                  let t = i;
                  (n?.(),
                    (n = r(!1, t)),
                    window.scrollTo(0, t),
                    p.f.update(),
                    window.dispatchEvent(new Event("portfolio:hero-motion")));
                };
              return (
                t.addEventListener("change", a),
                () => {
                  (t.removeEventListener("change", a),
                    window.removeEventListener("scroll", o),
                    n?.(),
                    document.documentElement.classList.remove("reduced-motion"));
                }
              );
            }, []),
            t
          );
        },
      ],
      52959,
    ));
})(__turbopack);

export const MotionController = __exports.MotionController;
