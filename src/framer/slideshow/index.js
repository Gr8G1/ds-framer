// https:https://framer.com/m/Slideshow-jg8v.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import { addFonts, cx, getFonts, useLocaleInfo, useVariantState, withCSS, } from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';

// https:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/soIAPuIiPtf4z0IwVYlq/SlideShow.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect as useEffect2,
  useLayoutEffect,
  useMemo,
  useRef,
  useState as useState2,
} from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'installable-framer/dist/framer';
import { animate, LayoutGroup, motion, sync, useMotionValue, useTransform, wrap, } from 'framer-motion';

// https:https://esm.sh/v132/@motionone/utils@10.15.1/node/utils.mjs
function h(o, r2,) {
  o.indexOf(r2,) === -1 && o.push(r2,);
}
var x = (o, r2, e,) => Math.min(Math.max(e, o,), r2,);
var b = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease', };
var s = (o,) => typeof o == 'number';
var a = (o,) => Array.isArray(o,) && !s(o[0],);
var l = (o, r2, e,) => {
  let t2 = r2 - o;
  return ((e - o) % t2 + t2) % t2 + o;
};
function g(o, r2,) {
  return a(o,) ? o[l(0, o.length, r2,)] : o;
}
var i = (o, r2, e,) => -e * o + e * r2 + o;
var O = () => {
};
var u = (o,) => o;
var f = (o, r2, e,) => r2 - o === 0 ? 1 : (e - o) / (r2 - o);
function m(o, r2,) {
  let e = o[o.length - 1];
  for (let t2 = 1; t2 <= r2; t2++) {
    let p2 = f(0, r2, t2,);
    o.push(i(e, 1, p2,),);
  }
}
function d(o,) {
  let r2 = [0,];
  return m(r2, o - 1,), r2;
}
function S(o, r2 = d(o.length,), e = u,) {
  let t2 = o.length, p2 = t2 - r2.length;
  return p2 > 0 && m(r2, p2,), (y,) => {
    let n = 0;
    for (; n < t2 - 2 && !(y < r2[n + 1]); n++);
    let c = x(0, 1, f(r2[n], r2[n + 1], y,),);
    return c = g(e, n,)(c,), i(o[n], o[n + 1], c,);
  };
}
var A = (o,) => Array.isArray(o,) && s(o[0],);
var F = (o,) => typeof o == 'object' && !!o.createAnimation;
var I = (o,) => typeof o == 'function';
var v = (o,) => typeof o == 'string';
var N = { ms: (o,) => o * 1e3, s: (o,) => o / 1e3, };
function R(o, r2,) {
  return r2 ? o * (1e3 / r2) : 0;
}

// https:https://esm.sh/v132/@motionone/easing@10.15.1/node/easing.mjs
var s2 = (n, e, t2,) => (((1 - 3 * t2 + 3 * e) * n + (3 * t2 - 6 * e)) * n + 3 * e) * n;
var f2 = 1e-7;
var d2 = 12;
function b2(n, e, t2, r2, o,) {
  let i3, c, u2 = 0;
  do c = e + (t2 - e) / 2, i3 = s2(c, r2, o,) - n, i3 > 0 ? t2 = c : e = c; while (Math.abs(i3,) > f2 && ++u2 < d2);
  return c;
}
function l2(n, e, t2, r2,) {
  if (n === e && t2 === r2) {
    return u;
  }
  let o = (i3,) => b2(i3, 0, 1, n, t2,);
  return (i3,) => i3 === 0 || i3 === 1 ? i3 : s2(o(i3,), e, r2,);
}
var h2 = (n, e = 'end',) => (t2,) => {
  t2 = e === 'end' ? Math.min(t2, 0.999,) : Math.max(t2, 1e-3,);
  let r2 = t2 * n, o = e === 'end' ? Math.floor(r2,) : Math.ceil(r2,);
  return x(0, 1, o / n,);
};

// https:https://esm.sh/v132/@motionone/animation@10.15.1/node/animation.mjs
var F2 = {
  ease: l2(0.25, 0.1, 0.25, 1,),
  'ease-in': l2(0.42, 0, 1, 1,),
  'ease-in-out': l2(0.42, 0, 0.58, 1,),
  'ease-out': l2(0, 0, 0.58, 1,),
};
var w = /\((.*?)\)/;
function l3(i3,) {
  if (I(i3,)) {
    return i3;
  }
  if (A(i3,)) {
    return l2(...i3,);
  }
  if (F2[i3]) {
    return F2[i3];
  }
  if (i3.startsWith('steps',)) {
    let t2 = w.exec(i3,);
    if (t2) {
      let a2 = t2[1].split(',',);
      return h2(parseFloat(a2[0],), a2[1].trim(),);
    }
  }
  return u;
}
var T = class {
  constructor(
    t2,
    a2 = [0, 1,],
    {
      easing: s3,
      duration: m2 = b.duration,
      delay: p2 = b.delay,
      endDelay: R3 = b.endDelay,
      repeat: A2 = b.repeat,
      offset: x2,
      direction: c = 'normal',
    } = {},
  ) {
    if (
      this.startTime = null,
        this.rate = 1,
        this.t = 0,
        this.cancelTimestamp = null,
        this.easing = u,
        this.duration = 0,
        this.totalDuration = 0,
        this.repeat = 0,
        this.playState = 'idle',
        this.finished = new Promise((r2, h3,) => {
          this.resolve = r2, this.reject = h3;
        },),
        s3 = s3 || b.easing,
        F(s3,)
    ) {
      let r2 = s3.createAnimation(a2,);
      s3 = r2.easing, a2 = r2.keyframes || a2, m2 = r2.duration || m2;
    }
    this.repeat = A2, this.easing = a(s3,) ? u : l3(s3,), this.updateDuration(m2,);
    let q = S(a2, x2, a(s3,) ? s3.map(l3,) : u,);
    this.tick = (r2,) => {
      var h3;
      p2 = p2;
      let e = 0;
      this.pauseTime !== void 0 ? e = this.pauseTime : e = (r2 - this.startTime) * this.rate,
        this.t = e,
        e /= 1e3,
        e = Math.max(e - p2, 0,),
        this.playState === 'finished' && this.pauseTime === void 0 && (e = this.totalDuration);
      let f3 = e / this.duration, g2 = Math.floor(f3,), n = f3 % 1;
      !n && f3 >= 1 && (n = 1), n === 1 && g2--;
      let y = g2 % 2;
      (c === 'reverse' || c === 'alternate' && y || c === 'alternate-reverse' && !y) && (n = 1 - n);
      let D = e >= this.totalDuration ? 1 : Math.min(n, 1,), v2 = q(this.easing(D,),);
      t2(v2,),
        this.pauseTime === void 0 && (this.playState === 'finished' || e >= this.totalDuration + R3)
          ? (this.playState = 'finished', (h3 = this.resolve) === null || h3 === void 0 || h3.call(this, v2,))
          : this.playState !== 'idle' && (this.frameRequestId = requestAnimationFrame(this.tick,));
    }, this.play();
  }
  play() {
    let t2 = performance.now();
    this.playState = 'running',
      this.pauseTime !== void 0 ? this.startTime = t2 - this.pauseTime : this.startTime || (this.startTime = t2),
      this.cancelTimestamp = this.startTime,
      this.pauseTime = void 0,
      this.frameRequestId = requestAnimationFrame(this.tick,);
  }
  pause() {
    this.playState = 'paused', this.pauseTime = this.t;
  }
  finish() {
    this.playState = 'finished', this.tick(0,);
  }
  stop() {
    var t2;
    this.playState = 'idle',
      this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId,),
      (t2 = this.reject) === null || t2 === void 0 || t2.call(this, false,);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp,);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(t2,) {
    this.duration = t2, this.totalDuration = t2 * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2,) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t2 : this.startTime = performance.now() - t2 / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t2,) {
    this.rate = t2;
  }
};

// https:https://esm.sh/v132/@motionone/generators@10.15.1/node/generators.mjs
var O2 = 5;
function T2(t2, o, r2,) {
  let s3 = Math.max(o - O2, 0,);
  return R(r2 - t2(s3,), o - s3,);
}
var p = { stiffness: 100, damping: 10, mass: 1, };
var w2 = (t2 = p.stiffness, o = p.damping, r2 = p.mass,) => o / (2 * Math.sqrt(t2 * r2,));
function S2(t2, o, r2,) {
  return t2 < o && r2 >= o || t2 > o && r2 <= o;
}
var B = (
  {
    stiffness: t2 = p.stiffness,
    damping: o = p.damping,
    mass: r2 = p.mass,
    from: s3 = 0,
    to: n = 1,
    velocity: i3 = 0,
    restSpeed: f3 = 2,
    restDistance: l4 = 0.5,
  } = {},
) => {
  i3 = i3 ? N.s(i3,) : 0;
  let c = { done: false, hasReachedTarget: false, current: s3, target: n, },
    h3 = n - s3,
    m2 = Math.sqrt(t2 / r2,) / 1e3,
    a2 = w2(t2, o, r2,),
    M2;
  if (a2 < 1) {
    let u2 = m2 * Math.sqrt(1 - a2 * a2,);
    M2 = (d3,) => n - Math.exp(-a2 * m2 * d3,) * ((-i3 + a2 * m2 * h3) / u2 * Math.sin(u2 * d3,) + h3 * Math.cos(u2 * d3,));
  } else {
    M2 = (u2,) => n - Math.exp(-m2 * u2,) * (h3 + (-i3 + m2 * h3) * u2);
  }
  return (u2,) => {
    c.current = M2(u2,);
    let d3 = u2 === 0 ? i3 : T2(M2, u2, c.current,), R3 = Math.abs(d3,) <= f3, g2 = Math.abs(n - c.current,) <= l4;
    return c.done = R3 && g2, c.hasReachedTarget = S2(s3, n, c.current,), c;
  };
};
var L = (
  {
    from: t2 = 0,
    velocity: o = 0,
    power: r2 = 0.8,
    decay: s3 = 0.325,
    bounceDamping: n,
    bounceStiffness: i3,
    changeTarget: f3,
    min: l4,
    max: c,
    restDistance: h3 = 0.5,
    restSpeed: m2,
  },
) => {
  s3 = N.ms(s3,);
  let a2 = { hasReachedTarget: false, done: false, current: t2, target: t2, },
    M2 = (e,) => l4 !== void 0 && e < l4 || c !== void 0 && e > c,
    u2 = (e,) => l4 === void 0 ? c : c === void 0 || Math.abs(l4 - e,) < Math.abs(c - e,) ? l4 : c,
    d3 = r2 * o,
    R3 = t2 + d3,
    g2 = f3 === void 0 ? R3 : f3(R3,);
  a2.target = g2, g2 !== R3 && (d3 = g2 - t2);
  let b3 = (e,) => -d3 * Math.exp(-e / s3,),
    q = (e,) => g2 + b3(e,),
    F4 = (e,) => {
      let y = b3(e,), k2 = q(e,);
      a2.done = Math.abs(y,) <= h3, a2.current = a2.done ? g2 : k2;
    },
    x2,
    D,
    G2 = (e,) => {
      M2(a2.current,) &&
        (x2 = e,
          D = B({
            from: a2.current,
            to: u2(a2.current,),
            velocity: T2(q, e, a2.current,),
            damping: n,
            stiffness: i3,
            restDistance: h3,
            restSpeed: m2,
          },));
    };
  return G2(0,), (e,) => {
    let y = false;
    return !D && x2 === void 0 && (y = true, F4(e,), G2(e,)),
      x2 !== void 0 && e > x2 ? (a2.hasReachedTarget = true, D(e - x2,)) : (a2.hasReachedTarget = false, !y && F4(e,), a2);
  };
};
var V = 10;
var $ = 1e4;
function j(t2, o = u,) {
  let r2, s3 = V, n = t2(0,), i3 = [o(n.current,),];
  for (; !n.done && s3 < $;) {
    n = t2(s3,), i3.push(o(n.done ? n.target : n.current,),), r2 === void 0 && n.hasReachedTarget && (r2 = s3), s3 += V;
  }
  let f3 = s3 - V;
  return i3.length === 1 && i3.push(n.current,), { keyframes: i3, duration: f3 / 1e3, overshootDuration: (r2 ?? f3) / 1e3, };
}

// https:https://esm.sh/v132/tslib@2.6.2/node/tslib.mjs
function S3(e, t2,) {
  var n = {};
  for (var r2 in e) {
    Object.prototype.hasOwnProperty.call(e, r2,) && t2.indexOf(r2,) < 0 && (n[r2] = e[r2]);
  }
  if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
    for (var i3 = 0, r2 = Object.getOwnPropertySymbols(e,); i3 < r2.length; i3++) {
      t2.indexOf(r2[i3],) < 0 && Object.prototype.propertyIsEnumerable.call(e, r2[i3],) && (n[r2[i3]] = e[r2[i3]]);
    }
  }
  return n;
}

// https:https://esm.sh/v132/@motionone/types@10.15.1/node/types.mjs
var t = class {
  setAnimation(i3,) {
    this.animation = i3,
      i3?.finished.then(() => this.clearAnimation()).catch(() => {
      },);
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// https:https://esm.sh/v132/hey-listen@1.0.8/node/hey-listen.mjs
var i2 = function () {
};
var r = function () {
};
i2 = function (n, o,) {
  !n && typeof console < 'u' && console.warn(o,);
},
  r = function (n, o,) {
    if (!n) {
      throw new Error(o,);
    }
  };

// https:https://esm.sh/v132/@motionone/dom@10.16.2/node/dom.mjs
var ct = /* @__PURE__ */ new WeakMap();
function j2(t2,) {
  return ct.has(t2,) || ct.set(t2, { transforms: [], values: /* @__PURE__ */ new Map(), },), ct.get(t2,);
}
function Vt(t2, e,) {
  return t2.has(e,) || t2.set(e, new t(),), t2.get(e,);
}
var he = ['', 'X', 'Y', 'Z',];
var ve = ['translate', 'scale', 'rotate', 'skew',];
var z = { x: 'translateX', y: 'translateY', z: 'translateZ', };
var Wt = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t2,) => t2 + 'deg', };
var ye = {
  translate: { syntax: '<length-percentage>', initialValue: '0px', toDefaultUnit: (t2,) => t2 + 'px', },
  rotate: Wt,
  scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: u, },
  skew: Wt,
};
var T3 = /* @__PURE__ */ new Map();
var F3 = (t2,) => `--motion-${t2}`;
var X = ['x', 'y', 'z',];
ve.forEach((t2,) => {
  he.forEach((e,) => {
    X.push(t2 + e,), T3.set(F3(t2 + e,), ye[t2],);
  },);
},);
var xe = (t2, e,) => X.indexOf(t2,) - X.indexOf(e,);
var we = new Set(X,);
var H = (t2,) => we.has(t2,);
var Mt = (t2, e,) => {
  z[e] && (e = z[e]);
  let { transforms: n, } = j2(t2,);
  h(n, e,), t2.style.transform = ft(n,);
};
var ft = (t2,) => t2.sort(xe,).reduce(Ee, '',).trim();
var Ee = (t2, e,) => `${t2} ${e}(var(${F3(e,)}))`;
var R2 = (t2,) => t2.startsWith('--',);
var Pt = /* @__PURE__ */ new Set();
function Nt(t2,) {
  if (!Pt.has(t2,)) {
    Pt.add(t2,);
    try {
      let { syntax: e, initialValue: n, } = T3.has(t2,) ? T3.get(t2,) : {};
      CSS.registerProperty({ name: t2, inherits: false, syntax: e, initialValue: n, },);
    } catch {
    }
  }
}
var lt = (t2, e,) => document.createElement('div',).animate(t2, e,);
var It = {
  cssRegisterProperty: () => typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty',),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate',),
  partialKeyframes: () => {
    try {
      lt({ opacity: [1,], },);
    } catch {
      return false;
    }
    return true;
  },
  finished: () => !!lt({ opacity: [0, 1,], }, { duration: 1e-3, },).finished,
  linearEasing: () => {
    try {
      lt({ opacity: 0, }, { easing: 'linear(0, 1)', },);
    } catch {
      return false;
    }
    return true;
  },
};
var mt = {};
var V2 = {};
for (let t2 in It) {
  V2[t2] = () => (mt[t2] === void 0 && (mt[t2] = It[t2]()), mt[t2]);
}
var Te = 0.015;
var Le = (t2, e,) => {
  let n = '', r2 = Math.round(e / Te,);
  for (let o = 0; o < r2; o++) {
    n += t2(f(0, r2 - 1, o,),) + ', ';
  }
  return n.substring(0, n.length - 2,);
};
var ut = (t2, e,) => I(t2,) ? V2.linearEasing() ? `linear(${Le(t2, e,)})` : b.easing : A(t2,) ? De(t2,) : t2;
var De = ([t2, e, n, r2,],) => `cubic-bezier(${t2}, ${e}, ${n}, ${r2})`;
function _t(t2, e,) {
  for (let n = 0; n < t2.length; n++) {
    t2[n] === null && (t2[n] = n ? t2[n - 1] : e());
  }
  return t2;
}
var Y = (t2,) => Array.isArray(t2,) ? t2 : [t2,];
function W(t2,) {
  return z[t2] && (t2 = z[t2]), H(t2,) ? F3(t2,) : t2;
}
var M = {
  get: (t2, e,) => {
    e = W(e,);
    let n = R2(e,) ? t2.style.getPropertyValue(e,) : getComputedStyle(t2,)[e];
    if (!n && n !== 0) {
      let r2 = T3.get(e,);
      r2 && (n = r2.initialValue);
    }
    return n;
  },
  set: (t2, e, n,) => {
    e = W(e,), R2(e,) ? t2.style.setProperty(e, n,) : t2.style[e] = n;
  },
};
function J(t2, e = true,) {
  if (!(!t2 || t2.playState === 'finished')) {
    try {
      t2.stop ? t2.stop() : (e && t2.commitStyles(), t2.cancel());
    } catch {
    }
  }
}
function Q(t2, e,) {
  var n;
  let r2 = e?.toDefaultUnit || u, o = t2[t2.length - 1];
  if (v(o,)) {
    let i3 = ((n = o.match(/(-?[\d.]+)([a-z%]*)/,)) === null || n === void 0 ? void 0 : n[2]) || '';
    i3 && (r2 = (s3,) => s3 + i3);
  }
  return r2;
}
function We() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function _(t2, e, n, r2 = {}, o,) {
  let i3 = We(),
    s3 = r2.record !== false && i3,
    l4,
    {
      duration: p2 = b.duration,
      delay: a2 = b.delay,
      endDelay: c = b.endDelay,
      repeat: d3 = b.repeat,
      easing: f3 = b.easing,
      persist: O3 = false,
      direction: S4,
      offset: m2,
      allowWebkitAcceleration: g2 = false,
    } = r2,
    y = j2(t2,),
    b3 = H(e,),
    w3 = V2.waapi();
  b3 && Mt(t2, e,);
  let E2 = W(e,), A2 = Vt(y.values, E2,), x2 = T3.get(E2,);
  return J(A2.animation, !(F(f3,) && A2.generator) && r2.record !== false,), () => {
    let h3 = () => {
        var v2, D;
        return (D = (v2 = M.get(t2, E2,)) !== null && v2 !== void 0 ? v2 : x2?.initialValue) !== null && D !== void 0 ? D : 0;
      },
      u2 = _t(Y(n,), h3,),
      L2 = Q(u2, x2,);
    if (F(f3,)) {
      let v2 = f3.createAnimation(u2, e !== 'opacity', h3, E2, A2,);
      f3 = v2.easing, u2 = v2.keyframes || u2, p2 = v2.duration || p2;
    }
    if (
      R2(E2,) && (V2.cssRegisterProperty() ? Nt(E2,) : w3 = false),
        b3 && !V2.linearEasing() && (I(f3,) || a(f3,) && f3.some(I,)) && (w3 = false),
        w3
    ) {
      x2 && (u2 = u2.map((C,) => s(C,) ? x2.toDefaultUnit(C,) : C)), u2.length === 1 && (!V2.partialKeyframes() || s3) && u2.unshift(h3(),);
      let v2 = {
        delay: N.ms(a2,),
        duration: N.ms(p2,),
        endDelay: N.ms(c,),
        easing: a(f3,) ? void 0 : ut(f3, p2,),
        direction: S4,
        iterations: d3 + 1,
        fill: 'both',
      };
      l4 = t2.animate({ [E2]: u2, offset: m2, easing: a(f3,) ? f3.map((C,) => ut(C, p2,)) : void 0, }, v2,),
        l4.finished || (l4.finished = new Promise((C, Z,) => {
          l4.onfinish = C, l4.oncancel = Z;
        },));
      let D = u2[u2.length - 1];
      l4.finished.then(() => {
        O3 || (M.set(t2, E2, D,), l4.cancel());
      },).catch(O,), g2 || (l4.playbackRate = 1.000001);
    } else if (o && b3) {
      u2 = u2.map((v2,) => typeof v2 == 'string' ? parseFloat(v2,) : v2),
        u2.length === 1 && u2.unshift(parseFloat(h3(),),),
        l4 = new o(
          (v2,) => {
            M.set(t2, E2, L2 ? L2(v2,) : v2,);
          },
          u2,
          Object.assign(Object.assign({}, r2,), { duration: p2, easing: f3, },),
        );
    } else {
      let v2 = u2[u2.length - 1];
      M.set(t2, E2, x2 && s(v2,) ? x2.toDefaultUnit(v2,) : v2,);
    }
    return s3 && i3(t2, e, u2, { duration: p2, delay: a2, easing: f3, repeat: d3, offset: m2, }, 'motion-one',), A2.setAnimation(l4,), l4;
  };
}
var U = (t2, e,) => t2[e] ? Object.assign(Object.assign({}, t2,), t2[e],) : Object.assign({}, t2,);
function P(t2, e,) {
  var n;
  return typeof t2 == 'string'
    ? e
      ? ((n = e[t2]) !== null && n !== void 0 || (e[t2] = document.querySelectorAll(t2,)), t2 = e[t2])
      : t2 = document.querySelectorAll(t2,)
    : t2 instanceof Element && (t2 = [t2,]),
    Array.from(t2 || [],);
}
var Ne = (t2,) => t2();
var G = (t2, e, n = b.duration,) => new Proxy({ animations: t2.map(Ne,).filter(Boolean,), duration: n, options: e, }, _e,);
var Ie = (t2,) => t2.animations[0];
var _e = {
  get: (t2, e,) => {
    let n = Ie(t2,);
    switch (e) {
      case 'duration':
        return t2.duration;
      case 'currentTime':
        return N.s(n?.[e] || 0,);
      case 'playbackRate':
      case 'playState':
        return n?.[e];
      case 'finished':
        return t2.finished || (t2.finished = Promise.all(t2.animations.map(Be,),).catch(O,)), t2.finished;
      case 'stop':
        return () => {
          t2.animations.forEach((r2,) => J(r2,));
        };
      case 'forEachNative':
        return (r2,) => {
          t2.animations.forEach((o,) => r2(o, t2,));
        };
      default:
        return typeof n?.[e] > 'u' ? void 0 : () => t2.animations.forEach((r2,) => r2[e]());
    }
  },
  set: (t2, e, n,) => {
    switch (e) {
      case 'currentTime':
        n = N.ms(n,);
      case 'currentTime':
      case 'playbackRate':
        for (let r2 = 0; r2 < t2.animations.length; r2++) {
          t2.animations[r2][e] = n;
        }
        return true;
    }
    return false;
  },
};
var Be = (t2,) => t2.finished;
function tt(t2, e, n,) {
  return I(t2,) ? t2(e, n,) : t2;
}
function gt(t2,) {
  return function (n, r2, o = {},) {
    n = P(n,);
    let i3 = n.length;
    r(!!i3, 'No valid element provided.',), r(!!r2, 'No keyframes defined.',);
    let s3 = [];
    for (let l4 = 0; l4 < i3; l4++) {
      let p2 = n[l4];
      for (let a2 in r2) {
        let c = U(o, a2,);
        c.delay = tt(c.delay, l4, i3,);
        let d3 = _(p2, a2, r2[a2], c, t2,);
        s3.push(d3,);
      }
    }
    return G(s3, o, o.duration,);
  };
}
var Ge = gt(T,);
function Gt(t2,) {
  return s(t2,) && !isNaN(t2,);
}
function yt(t2,) {
  return v(t2,) ? parseFloat(t2,) : t2;
}
function et(t2,) {
  let e = /* @__PURE__ */ new WeakMap();
  return (n = {},) => {
    let r2 = /* @__PURE__ */ new Map(),
      o = (s3 = 0, l4 = 100, p2 = 0, a2 = false,) => {
        let c = `${s3}-${l4}-${p2}-${a2}`;
        return r2.has(c,) ||
          r2.set(c, t2(Object.assign({ from: s3, to: l4, velocity: p2, restSpeed: a2 ? 0.05 : 2, restDistance: a2 ? 0.01 : 0.5, }, n,),),),
          r2.get(c,);
      },
      i3 = (s3, l4,) => (e.has(s3,) || e.set(s3, j(s3, l4,),), e.get(s3,));
    return {
      createAnimation: (s3, l4 = true, p2, a2, c,) => {
        let d3, f3, O3, S4 = 0, m2 = u, g2 = s3.length;
        if (l4) {
          m2 = Q(s3, a2 ? T3.get(W(a2,),) : void 0,);
          let y = s3[g2 - 1];
          if (O3 = yt(y,), g2 > 1 && s3[0] !== null) {
            f3 = yt(s3[0],);
          } else {
            let b3 = c?.generator;
            if (b3) {
              let { animation: w3, generatorStartTime: E2, } = c,
                A2 = w3?.startTime || E2 || 0,
                x2 = w3?.currentTime || performance.now() - A2,
                h3 = b3(x2,).current;
              f3 = h3, S4 = T2((u2,) => b3(u2,).current, x2, h3,);
            } else {
              p2 && (f3 = yt(p2(),));
            }
          }
        }
        if (Gt(f3,) && Gt(O3,)) {
          let y = o(f3, O3, S4, a2?.includes('scale',),);
          d3 = Object.assign(Object.assign({}, i3(y, m2,),), { easing: 'linear', },),
            c && (c.generator = y, c.generatorStartTime = performance.now());
        }
        return d3 || (d3 = { easing: 'ease', duration: i3(o(0, 100,),).overshootDuration, }), d3;
      },
    };
  };
}
var hn = et(B,);
var yn = et(L,);
var wn = { any: 0, all: 1, };
function xt(t2, e, { root: n, margin: r2, amount: o = 'any', } = {},) {
  if (typeof IntersectionObserver > 'u') {
    return () => {
    };
  }
  let i3 = P(t2,),
    s3 = /* @__PURE__ */ new WeakMap(),
    l4 = (a2,) => {
      a2.forEach((c,) => {
        let d3 = s3.get(c.target,);
        if (c.isIntersecting !== !!d3) {
          if (c.isIntersecting) {
            let f3 = e(c,);
            I(f3,) ? s3.set(c.target, f3,) : p2.unobserve(c.target,);
          } else {
            d3 && (d3(c,), s3.delete(c.target,));
          }
        }
      },);
    },
    p2 = new IntersectionObserver(l4, { root: n, rootMargin: r2, threshold: typeof o == 'number' ? o : wn[o], },);
  return i3.forEach((a2,) => p2.observe(a2,)), () => p2.disconnect();
}
var nt = /* @__PURE__ */ new WeakMap();
var N2;
function En(t2, e,) {
  if (e) {
    let { inlineSize: n, blockSize: r2, } = e[0];
    return { width: n, height: r2, };
  } else {
    return t2 instanceof SVGElement && 'getBBox' in t2 ? t2.getBBox() : { width: t2.offsetWidth, height: t2.offsetHeight, };
  }
}
function Sn({ target: t2, contentRect: e, borderBoxSize: n, },) {
  var r2;
  (r2 = nt.get(t2,)) === null || r2 === void 0 || r2.forEach((o,) => {
    o({
      target: t2,
      contentSize: e,
      get size() {
        return En(t2, n,);
      },
    },);
  },);
}
function bn(t2,) {
  t2.forEach(Sn,);
}
function On() {
  typeof ResizeObserver > 'u' || (N2 = new ResizeObserver(bn,));
}
function Kt(t2, e,) {
  N2 || On();
  let n = P(t2,);
  return n.forEach((r2,) => {
    let o = nt.get(r2,);
    o || (o = /* @__PURE__ */ new Set(), nt.set(r2, o,)), o.add(e,), N2?.observe(r2,);
  },),
    () => {
      n.forEach((r2,) => {
        let o = nt.get(r2,);
        o?.delete(e,), o?.size || N2?.unobserve(r2,);
      },);
    };
}
var rt = /* @__PURE__ */ new Set();
var K;
function An() {
  K = () => {
    let t2 = { width: window.innerWidth, height: window.innerHeight, }, e = { target: window, size: t2, contentSize: t2, };
    rt.forEach((n,) => n(e,));
  }, window.addEventListener('resize', K,);
}
function qt(t2,) {
  return rt.add(t2,), K || An(), () => {
    rt.delete(t2,), !rt.size && K && (K = void 0);
  };
}
function wt(t2, e,) {
  return I(t2,) ? qt(t2,) : Kt(t2, e,);
}
function k(t2, e, n,) {
  t2.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: n, }, },),);
}
function Tt(t2, e, n,) {
  t2.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: n, }, },),);
}
var ce = {
  isActive: (t2,) => !!t2.inView,
  subscribe: (t2, { enable: e, disable: n, }, { inViewOptions: r2 = {}, },) => {
    let { once: o, } = r2, i3 = S3(r2, ['once',],);
    return xt(t2, (s3,) => {
      if (e(), Tt(t2, 'viewenter', s3,), !o) {
        return (l4,) => {
          n(), Tt(t2, 'viewleave', l4,);
        };
      }
    }, i3,);
  },
};
var fe = (t2, e, n,) => (r2,) => {
  r2.pointerType && r2.pointerType !== 'mouse' || (n(), k(t2, e, r2,));
};
var le = {
  isActive: (t2,) => !!t2.hover,
  subscribe: (t2, { enable: e, disable: n, },) => {
    let r2 = fe(t2, 'hoverstart', e,), o = fe(t2, 'hoverend', n,);
    return t2.addEventListener('pointerenter', r2,), t2.addEventListener('pointerleave', o,), () => {
      t2.removeEventListener('pointerenter', r2,), t2.removeEventListener('pointerleave', o,);
    };
  },
};
var me = {
  isActive: (t2,) => !!t2.press,
  subscribe: (t2, { enable: e, disable: n, },) => {
    let r2 = (i3,) => {
        n(), k(t2, 'pressend', i3,), window.removeEventListener('pointerup', r2,);
      },
      o = (i3,) => {
        e(), k(t2, 'pressstart', i3,), window.addEventListener('pointerup', r2,);
      };
    return t2.addEventListener('pointerdown', o,), () => {
      t2.removeEventListener('pointerdown', o,), window.removeEventListener('pointerup', r2,);
    };
  },
};
var st = { inView: ce, hover: le, press: me, };
var ue = ['initial', 'animate', ...Object.keys(st,), 'exit',];

// https:https://framerusercontent.com/modules/V9ryrjN5Am9WM1dJeyyJ/9mrJHeWj7rhvLTLu7Yzt/UsePageVisibility.js
import { useEffect, useState, } from 'react';
var isBrowser = () => typeof document === 'object';
function getBrowserVisibilityProp() {
  if (!isBrowser()) {
    return;
  }
  if (typeof document.hidden !== 'undefined') {
    return 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    return 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    return 'webkitvisibilitychange';
  }
}
function getBrowserDocumentHiddenProp() {
  if (!isBrowser()) {
    return;
  }
  if (typeof document.hidden !== 'undefined') {
    return 'hidden';
  } else if (typeof document.msHidden !== 'undefined') {
    return 'msHidden';
  } else if (typeof document.webkitHidden !== 'undefined') {
    return 'webkitHidden';
  }
}
function getIsDocumentHidden() {
  if (!isBrowser()) {
    return;
  }
  return !document[getBrowserDocumentHiddenProp()];
}
function usePageVisibility() {
  if (!isBrowser()) {
    return;
  }
  const [isVisible, setIsVisible,] = useState(getIsDocumentHidden(),);
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden(),);
  useEffect(() => {
    const visibilityChange = getBrowserVisibilityProp();
    document.addEventListener(visibilityChange, onVisibilityChange, false,);
    return () => {
      document.removeEventListener(visibilityChange, onVisibilityChange,);
    };
  },);
  return isVisible;
}

// https:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/soIAPuIiPtf4z0IwVYlq/SlideShow.js
function Slideshow(props,) {
  const {
    slots,
    startFrom,
    direction,
    effectsOptions,
    autoPlayControl,
    dragControl,
    alignment,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    itemAmount,
    fadeOptions,
    intervalControl,
    transitionControl,
    arrowOptions,
    borderRadius,
    progressOptions,
    style,
  } = props;
  const { effectsOpacity, effectsScale, effectsRotate, effectsPerspective, effectsHover, } = effectsOptions;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const {
    showMouseControls,
    arrowSize,
    arrowRadius,
    arrowFill,
    leftArrow,
    rightArrow,
    arrowShouldSpace = true,
    arrowShouldFadeIn = false,
    arrowPosition,
    arrowPadding,
    arrowGap,
    arrowPaddingTop,
    arrowPaddingRight,
    arrowPaddingBottom,
    arrowPaddingLeft,
  } = arrowOptions;
  const {
    showProgressDots,
    dotSize,
    dotsInset,
    dotsRadius,
    dotsPadding,
    dotsGap,
    dotsFill,
    dotsBackground,
    dotsActiveOpacity,
    dotsOpacity,
    dotsBlur,
  } = progressOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const hasChildren = Children.count(slots,) > 0;
  const isHorizontal = direction === 'left' || direction === 'right';
  const isInverted = direction === 'right' || direction === 'bottom';
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2B50\uFE0F', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', {
          style: subtitleStyles,
          children: 'Add layers or components to make infinite auto-playing slideshows.',
        },),
      ],
    },);
  }
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return slots.map((index,) => /* @__PURE__ */ createRef());
  }, [slots,],);
  const timeoutRef = useRef(void 0,);
  const [size, setSize,] = useState2({ parent: null, children: null, item: null, itemWidth: null, itemHeight: null, },);
  const [isHovering, setIsHovering,] = useState2(false,);
  const [shouldPlayOnHover, setShouldPlayOnHover,] = useState2(autoPlayControl,);
  const [isMouseDown, setIsMouseDown,] = useState2(false,);
  const [isResizing, setIsResizing,] = useState2(false,);
  const dupedChildren = [];
  let duplicateBy = 4;
  if (isCanvas) {
    duplicateBy = 1;
  }
  const measure = useCallback(() => {
    sync.read(() => {
      if (hasChildren && parentRef.current) {
        const total = slots.length - 1;
        const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
        const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
        const end = childrenRef[total].current
          ? isHorizontal
            ? childrenRef[total].current.offsetLeft + childrenRef[total].current.offsetWidth
            : childrenRef[total].current.offsetTop + childrenRef[total].current.offsetHeight
          : 0;
        const childrenLength = end - start + gap;
        const itemSize = childrenRef[0].current
          ? isHorizontal ? childrenRef[0].current.offsetWidth : childrenRef[0].current.offsetHeight
          : 0;
        const itemWidth = childrenRef[0].current ? childrenRef[0].current.offsetWidth : 0;
        const itemHeight = childrenRef[0].current ? childrenRef[0].current.offsetHeight : 0;
        setSize({ parent: parentLength, children: childrenLength, item: itemSize, itemWidth, itemHeight, },);
      }
    },);
  }, [hasChildren,],);
  useLayoutEffect(() => {
    if (hasChildren) {
      measure();
    }
  }, [hasChildren, itemAmount,],);
  let initialResize = useRef(true,);
  useEffect2(() => {
    return wt(parentRef.current, ({ contentSize, },) => {
      if (!initialResize.current && (contentSize.width || contentSize.height)) {
        measure();
        setIsResizing(true,);
      }
      initialResize.current = false;
    },);
  }, [],);
  useEffect2(() => {
    if (isResizing) {
      const timer = setTimeout(() => setIsResizing(false,), 500,);
      return () => clearTimeout(timer,);
    }
  }, [isResizing,],);
  const totalItems = slots === null || slots === void 0 ? void 0 : slots.length;
  const childrenSize = isCanvas ? 0 : size === null || size === void 0 ? void 0 : size.children;
  const itemWithGap = (size === null || size === void 0 ? void 0 : size.item) + gap;
  const itemOffset = startFrom * itemWithGap;
  const [currentItem, setCurrentItem,] = useState2(startFrom + totalItems,);
  const [isDragging, setIsDragging,] = useState2(false,);
  const isVisible = usePageVisibility();
  const factor = isInverted ? 1 : -1;
  const xOrY = useMotionValue(childrenSize,);
  const canvasPosition = isHorizontal
    ? -startFrom * ((size === null || size === void 0 ? void 0 : size.itemWidth) + gap)
    : -startFrom * ((size === null || size === void 0 ? void 0 : size.itemHeight) + gap);
  const newPosition = () => factor * currentItem * itemWithGap;
  const wrappedValue = !isCanvas
    ? useTransform(xOrY, (value,) => {
      const wrapped = wrap(-childrenSize, -childrenSize * 2, value,);
      return isNaN(wrapped,) ? 0 : wrapped;
    },)
    : 0;
  const wrappedIndex = wrap(0, totalItems, currentItem,);
  const wrappedIndexInverted = wrap(0, -totalItems, currentItem,);
  useLayoutEffect(() => {
    if ((size === null || size === void 0 ? void 0 : size.children) === null) {
      return;
    }
    if (!initialResize.current && isResizing) {
      xOrY.set(newPosition(),);
    }
  }, [size, childrenSize, factor, itemOffset, currentItem, itemWithGap, isResizing,],);
  const switchPages = () => {
    if (isCanvas || !hasChildren || !size.parent || isDragging) {
      return;
    }
    if (xOrY.get() !== newPosition()) {
      animate(xOrY, newPosition(), transitionControl,);
    }
    if (autoPlayControl && shouldPlayOnHover) {
      timeoutRef.current = setTimeout(() => {
        setCurrentItem(currentItem + 1,);
        switchPages();
      }, intervalControl * 1e3,);
    }
  };
  const setDelta = (delta,) => {
    if (!isInverted) {
      setCurrentItem(currentItem + delta,);
    } else {
      setCurrentItem(currentItem - delta,);
    }
  };
  const setPage = (index,) => {
    const currentItemWrapped = wrap(0, totalItems, currentItem,);
    const currentItemWrappedInvert = wrap(0, -totalItems, currentItem,);
    const goto = index - currentItemWrapped;
    const gotoInverted = index - Math.abs(currentItemWrappedInvert,);
    if (!isInverted) {
      setCurrentItem(currentItem + goto,);
    } else {
      setCurrentItem(currentItem - gotoInverted,);
    }
  };
  const handleDragStart = () => {
    setIsDragging(true,);
  };
  const handleDragEnd = (event, { offset, velocity, },) => {
    setIsDragging(false,);
    const offsetXorY = isHorizontal ? offset.x : offset.y;
    const velocityThreshold = 200;
    const velocityXorY = isHorizontal ? velocity.x : velocity.y;
    const isHalfOfNext = offsetXorY < -size.item / 2;
    const isHalfOfPrev = offsetXorY > size.item / 2;
    const normalizedOffset = Math.abs(offsetXorY,);
    const itemDelta = Math.round(normalizedOffset / size.item,);
    const itemDeltaFromOne = itemDelta === 0 ? 1 : itemDelta;
    if (velocityXorY > velocityThreshold) {
      setDelta(-itemDeltaFromOne,);
    } else if (velocityXorY < -velocityThreshold) {
      setDelta(itemDeltaFromOne,);
    } else {
      if (isHalfOfNext) {
        setDelta(itemDelta,);
      }
      if (isHalfOfPrev) {
        setDelta(-itemDelta,);
      }
    }
  };
  useEffect2(() => {
    if (!isVisible || isResizing) {
      return;
    }
    switchPages();
    return () => timeoutRef.current && clearTimeout(timeoutRef.current,);
  }, [dupedChildren, isVisible, isResizing,],);
  let childCounter = 0;
  let columnOrRowValue = `calc(${100 / itemAmount}% - ${gap}px + ${gap / itemAmount}px)`;
  for (let index = 0; index < duplicateBy; index++) {
    dupedChildren.push(...Children.map(slots, (child, childIndex,) => {
      let ref;
      if (childIndex === 0) {
        ref = childrenRef[0];
      }
      if (childIndex === slots.length - 1) {
        ref = childrenRef[1];
      }
      return /* @__PURE__ */ _jsx(Slide, {
        ref: childrenRef[childIndex],
        slideKey: index + childIndex + 'lg',
        index,
        width: isHorizontal ? itemAmount > 1 ? columnOrRowValue : '100%' : '100%',
        height: !isHorizontal ? itemAmount > 1 ? columnOrRowValue : '100%' : '100%',
        size,
        child,
        numChildren: slots === null || slots === void 0 ? void 0 : slots.length,
        wrappedValue,
        childCounter: childCounter++,
        gap,
        isCanvas,
        isHorizontal,
        effectsOpacity,
        effectsScale,
        effectsRotate,
        children: index + childIndex,
      }, index + childIndex + 'lg',);
    },),);
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  const dots = [];
  const dotsBlurStyle = {};
  if (showProgressDots) {
    for (let i3 = 0; i3 < (slots === null || slots === void 0 ? void 0 : slots.length); i3++) {
      dots.push(/* @__PURE__ */ _jsx(Dot, {
        dotStyle: { ...dotStyle, width: dotSize, height: dotSize, backgroundColor: dotsFill, },
        buttonStyle: baseButtonStyles,
        selectedOpacity: dotsActiveOpacity,
        opacity: dotsOpacity,
        onClick: () => setPage(i3,),
        wrappedIndex,
        wrappedIndexInverted,
        total: totalItems,
        index: i3,
        gap: dotsGap,
        padding: dotsPadding,
        isHorizontal,
        isInverted,
      }, i3,),);
    }
    if (dotsBlur > 0) {
      dotsBlurStyle.backdropFilter = dotsBlurStyle.WebkitBackdropFilter = dotsBlurStyle.MozBackdropFilter = `blur(${dotsBlur}px)`;
    }
  }
  const dragProps = dragControl
    ? {
      drag: isHorizontal ? 'x' : 'y',
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      dragDirectionLock: true,
      values: { x: xOrY, y: xOrY, },
      dragMomentum: false,
    }
    : {};
  const arrowHasTop = arrowPosition === 'top-left' || arrowPosition === 'top-mid' || arrowPosition === 'top-right';
  const arrowHasBottom = arrowPosition === 'bottom-left' || arrowPosition === 'bottom-mid' || arrowPosition === 'bottom-right';
  const arrowHasLeft = arrowPosition === 'top-left' || arrowPosition === 'bottom-left';
  const arrowHasRight = arrowPosition === 'top-right' || arrowPosition === 'bottom-right';
  const arrowHasMid = arrowPosition === 'top-mid' || arrowPosition === 'bottom-mid' || arrowPosition === 'auto';
  return /* @__PURE__ */ _jsxs('section', {
    style: {
      ...containerStyle,
      padding: paddingValue,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      opacity: (size === null || size === void 0 ? void 0 : size.item) !== null ? 1 : 0,
      userSelect: 'none',
    },
    onMouseEnter: () => {
      setIsHovering(true,);
      if (!effectsHover) {
        setShouldPlayOnHover(false,);
      }
    },
    onMouseLeave: () => {
      setIsHovering(false,);
      if (!effectsHover) {
        setShouldPlayOnHover(true,);
      }
    },
    onMouseDown: (event,) => {
      event.preventDefault();
      setIsMouseDown(true,);
    },
    onMouseUp: () => setIsMouseDown(false,),
    children: [
      /* @__PURE__ */ _jsx('div', {
        style: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 'inherit',
          position: 'absolute',
          inset: 0,
          overflow: overflow ? 'visible' : 'hidden',
          borderRadius,
          userSelect: 'none',
          perspective: isCanvas ? 'none' : effectsPerspective,
        },
        children: /* @__PURE__ */ _jsx(motion.ul, {
          ref: parentRef,
          ...dragProps,
          style: {
            ...containerStyle,
            gap,
            placeItems: alignment,
            x: isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0,
            y: !isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0,
            flexDirection: isHorizontal ? 'row' : 'column',
            transformStyle: effectsRotate !== 0 && !isCanvas ? 'preserve-3d' : void 0,
            cursor: dragControl ? isMouseDown ? 'grabbing' : 'grab' : 'auto',
            userSelect: 'none',
            ...style,
          },
          children: dupedChildren,
        },),
      },),
      /* @__PURE__ */ _jsxs('fieldset', {
        style: { ...controlsStyles, },
        'aria-label': 'Slideshow pagination controls',
        className: 'framer--slideshow-controls',
        children: [
          /* @__PURE__ */ _jsxs(motion.div, {
            style: {
              position: 'absolute',
              display: 'flex',
              flexDirection: isHorizontal ? 'row' : 'column',
              justifyContent: arrowShouldSpace ? 'space-between' : 'center',
              gap: arrowShouldSpace ? 'unset' : arrowGap,
              opacity: arrowShouldFadeIn ? 0 : 1,
              alignItems: 'center',
              inset: arrowPadding,
              top: arrowShouldSpace ? arrowPadding : arrowHasTop ? arrowPaddingTop : 'unset',
              left: arrowShouldSpace ? arrowPadding : arrowHasLeft ? arrowPaddingLeft : arrowHasMid ? 0 : 'unset',
              right: arrowShouldSpace ? arrowPadding : arrowHasRight ? arrowPaddingRight : arrowHasMid ? 0 : 'unset',
              bottom: arrowShouldSpace ? arrowPadding : arrowHasBottom ? arrowPaddingBottom : 'unset',
            },
            animate: arrowShouldFadeIn && { opacity: isHovering ? 1 : 0, },
            transition: transitionControl,
            children: [
              /* @__PURE__ */ _jsx(motion.button, {
                type: 'button',
                style: {
                  ...baseButtonStyles,
                  backgroundColor: arrowFill,
                  width: arrowSize,
                  height: arrowSize,
                  borderRadius: arrowRadius,
                  rotate: !isHorizontal ? 90 : 0,
                  display: showMouseControls ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => setDelta(-1,),
                'aria-label': 'Previous',
                whileTap: { scale: 0.9, },
                transition: { duration: 0.15, },
                children: /* @__PURE__ */ _jsx('img', {
                  width: arrowSize,
                  height: arrowSize,
                  src: leftArrow || 'https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg',
                  alt: 'Back Arrow',
                },),
              },),
              /* @__PURE__ */ _jsx(motion.button, {
                type: 'button',
                style: {
                  ...baseButtonStyles,
                  backgroundColor: arrowFill,
                  width: arrowSize,
                  height: arrowSize,
                  borderRadius: arrowRadius,
                  rotate: !isHorizontal ? 90 : 0,
                  display: showMouseControls ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => setDelta(1,),
                'aria-label': 'Next',
                whileTap: { scale: 0.9, },
                transition: { duration: 0.15, },
                children: /* @__PURE__ */ _jsx('img', {
                  width: arrowSize,
                  height: arrowSize,
                  src: rightArrow || 'https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg',
                  alt: 'Next Arrow',
                },),
              },),
            ],
          },),
          dots.length > 1
            ? /* @__PURE__ */ _jsx('div', {
              style: {
                ...dotsContainerStyle,
                left: isHorizontal ? '50%' : dotsInset,
                top: !isHorizontal ? '50%' : 'unset',
                transform: isHorizontal ? 'translateX(-50%)' : 'translateY(-50%)',
                flexDirection: isHorizontal ? 'row' : 'column',
                bottom: isHorizontal ? dotsInset : 'unset',
                borderRadius: dotsRadius,
                backgroundColor: dotsBackground,
                userSelect: 'none',
                ...dotsBlurStyle,
              },
              children: dots,
            },)
            : null,
        ],
      },),
    ],
  },);
}
Slideshow.defaultProps = {
  direction: 'left',
  dragControl: false,
  startFrom: 0,
  itemAmount: 1,
  infinity: true,
  gap: 10,
  padding: 10,
  autoPlayControl: true,
  effectsOptions: { effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: true, },
  transitionControl: { type: 'spring', stiffness: 200, damping: 40, },
  fadeOptions: { fadeContent: false, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  arrowOptions: { showMouseControls: true, arrowShouldFadeIn: false, arrowShouldSpace: true, arrowFill: 'rgba(0,0,0,0.2)', arrowSize: 40, },
  progressOptions: { showProgressDots: true, },
};
addPropertyControls(Slideshow, {
  slots: { type: ControlType.Array, title: 'Content', control: { type: ControlType.ComponentInstance, }, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    displaySegmentedControl: true,
    defaultValue: Slideshow.defaultProps.direction,
  },
  autoPlayControl: { type: ControlType.Boolean, title: 'Auto Play', defaultValue: true, },
  intervalControl: {
    type: ControlType.Number,
    title: 'Interval',
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: true,
    unit: 's',
    hidden: (props,) => !props.autoPlayControl,
  },
  dragControl: { type: ControlType.Boolean, title: 'Draggable', defaultValue: false, },
  startFrom: {
    type: ControlType.Number,
    title: 'Current',
    min: 0,
    max: 10,
    displayStepper: true,
    defaultValue: Slideshow.defaultProps.startFrom,
  },
  effectsOptions: {
    type: ControlType.Object,
    title: 'Effects',
    controls: {
      effectsOpacity: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: true,
      },
      effectsScale: {
        type: ControlType.Number,
        title: 'Scale',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: true,
      },
      effectsPerspective: {
        type: ControlType.Number,
        title: 'Perspective',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: ControlType.Number,
        title: 'Rotate',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: ControlType.Boolean,
        title: 'On Hover',
        enabledTitle: 'Play',
        disabledTitle: 'Pause',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom',],
        left: ['align-top', 'align-middle', 'align-bottom',],
        top: ['align-left', 'align-center', 'align-right',],
        bottom: ['align-left', 'align-center', 'align-right',],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: true,
  },
  itemAmount: {
    type: ControlType.Number,
    title: 'Items',
    min: 1,
    max: 10,
    displayStepper: true,
    defaultValue: Slideshow.defaultProps.itemAmount,
  },
  gap: { type: ControlType.Number, title: 'Gap', min: 0, },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    defaultValue: 0,
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  borderRadius: { type: ControlType.Number, title: 'Radius', min: 0, max: 500, displayStepper: true, defaultValue: 0, },
  transitionControl: { type: ControlType.Transition, defaultValue: Slideshow.defaultProps.transitionControl, title: 'Transition', },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: false, },
      overflow: {
        type: ControlType.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: false,
        hidden(props,) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
    },
  },
  arrowOptions: {
    type: ControlType.Object,
    title: 'Arrows',
    controls: {
      showMouseControls: { type: ControlType.Boolean, title: 'Show', defaultValue: Slideshow.defaultProps.arrowOptions.showMouseControls, },
      arrowFill: {
        type: ControlType.Color,
        title: 'Fill',
        hidden: (props,) => !props.showMouseControls,
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: { type: ControlType.Image, title: 'Previous', hidden: (props,) => !props.showMouseControls, },
      rightArrow: { type: ControlType.Image, title: 'Next', hidden: (props,) => !props.showMouseControls, },
      arrowSize: {
        type: ControlType.Number,
        title: 'Size',
        min: 0,
        max: 200,
        displayStepper: true,
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowSize,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowRadius: {
        type: ControlType.Number,
        title: 'Radius',
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: ControlType.Boolean,
        title: 'Fade In',
        defaultValue: false,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowShouldSpace: {
        type: ControlType.Boolean,
        title: 'Distance',
        enabledTitle: 'Space',
        disabledTitle: 'Group',
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowPosition: {
        type: ControlType.Enum,
        title: 'Position',
        options: ['auto', 'top-left', 'top-mid', 'top-right', 'bottom-left', 'bottom-mid', 'bottom-right',],
        optionTitles: ['Center', 'Top Left', 'Top Middle', 'Top Right', 'Bottom Left', 'Bottom Middle', 'Bottom Right',],
        hidden: (props,) => !props.showMouseControls || props.arrowShouldSpace,
      },
      arrowPadding: {
        type: ControlType.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: true,
        hidden: (props,) => !props.showMouseControls || !props.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: ControlType.Number,
        title: 'Top',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'bottom-mid' ||
          props.arrowPosition === 'bottom-left' || props.arrowPosition === 'bottom-right',
      },
      arrowPaddingBottom: {
        type: ControlType.Number,
        title: 'Bottom',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-mid' ||
          props.arrowPosition === 'top-left' || props.arrowPosition === 'top-right',
      },
      arrowPaddingRight: {
        type: ControlType.Number,
        title: 'Right',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-left' ||
          props.arrowPosition === 'top-mid' || props.arrowPosition === 'bottom-left' || props.arrowPosition === 'bottom-mid',
      },
      arrowPaddingLeft: {
        type: ControlType.Number,
        title: 'Left',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-right' ||
          props.arrowPosition === 'top-mid' || props.arrowPosition === 'bottom-right' || props.arrowPosition === 'bottom-mid',
      },
      arrowGap: {
        type: ControlType.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showMouseControls || props.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: ControlType.Object,
    title: 'Dots',
    controls: {
      showProgressDots: { type: ControlType.Boolean, title: 'Show', defaultValue: false, },
      dotSize: {
        type: ControlType.Number,
        title: 'Size',
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsInset: {
        type: ControlType.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsGap: {
        type: ControlType.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsPadding: {
        type: ControlType.Number,
        title: 'Padding',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsFill: {
        type: ControlType.Color,
        title: 'Fill',
        defaultValue: '#fff',
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsBackground: {
        type: ControlType.Color,
        title: 'Backdrop',
        defaultValue: 'rgba(0,0,0,0.2)',
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsRadius: {
        type: ControlType.Number,
        title: 'Radius',
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsOpacity: {
        type: ControlType.Number,
        title: 'Opacity',
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsActiveOpacity: {
        type: ControlType.Number,
        title: 'Current',
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsBlur: {
        type: ControlType.Number,
        title: 'Blur',
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
    },
  },
},);
var containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  placeItems: 'center',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  textIndent: 'none',
};
var placeholderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  placeContent: 'center',
  placeItems: 'center',
  flexDirection: 'column',
  color: '#96F',
  background: 'rgba(136, 85, 255, 0.1)',
  fontSize: 11,
  overflow: 'hidden',
  padding: '20px 20px 30px 20px',
};
var emojiStyles = { fontSize: 32, marginBottom: 10, };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center', };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: 'center', };
var baseButtonStyles = {
  border: 'none',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  overflow: 'hidden',
  background: 'transparent',
  cursor: 'pointer',
  margin: 0,
  padding: 0,
};
var controlsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  pointerEvents: 'none',
  userSelect: 'none',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  border: 0,
  padding: 0,
  margin: 0,
};
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var Slide = /* @__PURE__ */ forwardRef(function Component(props, ref,) {
  var ref1, ref2;
  const {
    slideKey,
    width,
    height,
    child,
    size,
    gap,
    wrappedValue,
    numChildren,
    childCounter,
    isCanvas,
    effects,
    effectsOpacity,
    effectsScale,
    effectsRotate,
    isHorizontal,
    isLast,
    index,
  } = props;
  const childOffset = ((size === null || size === void 0 ? void 0 : size.item) + gap) * childCounter;
  const scrollRange = [
    -(size === null || size === void 0 ? void 0 : size.item),
    0,
    (size === null || size === void 0 ? void 0 : size.parent) - (size === null || size === void 0 ? void 0 : size.item) + gap,
    size === null || size === void 0 ? void 0 : size.parent,
  ].map((val,) => val - childOffset);
  const rotateY = !isCanvas && useTransform(wrappedValue, scrollRange, [-effectsRotate, 0, 0, effectsRotate,],);
  const rotateX = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsRotate, 0, 0, -effectsRotate,],);
  const opacity = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsOpacity, 1, 1, effectsOpacity,],);
  const scale = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsScale, 1, 1, effectsScale,],);
  const originXorY = !isCanvas && useTransform(wrappedValue, scrollRange, [1, 1, 0, 0,],);
  const isVisible = !isCanvas && useTransform(wrappedValue, (latest,) => latest >= scrollRange[1] && latest <= scrollRange[2],);
  useEffect2(() => {
    if (!isVisible) {
      return;
    }
    return isVisible.onChange((newValue,) => {
      ref.current.setAttribute('aria-hidden', !newValue,);
    },);
  }, [],);
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    inherit: 'id',
    children: /* @__PURE__ */ _jsx('li', {
      style: { display: 'contents', },
      'aria-hidden': index === 0 ? false : true,
      children: /* @__PURE__ */ cloneElement(child, {
        ref,
        key: slideKey + 'child',
        style: {
          ...(ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.style,
          flexShrink: 0,
          userSelect: 'none',
          width,
          height,
          opacity,
          scale,
          originX: isHorizontal ? originXorY : 0.5,
          originY: !isHorizontal ? originXorY : 0.5,
          rotateY: isHorizontal ? rotateY : 0,
          rotateX: !isHorizontal ? rotateX : 0,
        },
        layoutId: child.props.layoutId ? child.props.layoutId + '-original-' + index : void 0,
      }, (ref2 = child.props) === null || ref2 === void 0 ? void 0 : ref2.children,),
    },),
  },);
},);
function Dot(
  {
    selectedOpacity,
    opacity,
    total,
    index,
    wrappedIndex,
    wrappedIndexInverted,
    dotStyle: dotStyle2,
    buttonStyle,
    gap,
    padding,
    isHorizontal,
    isInverted,
    ...props
  },
) {
  let isSelected = wrappedIndex === index;
  if (isInverted) {
    isSelected = Math.abs(wrappedIndexInverted,) === index;
  }
  const inlinePadding = gap / 2;
  let top = !isHorizontal && index > 0 ? inlinePadding : padding;
  let bottom = !isHorizontal && index !== total - 1 ? inlinePadding : padding;
  let right = isHorizontal && index !== total - 1 ? inlinePadding : padding;
  let left = isHorizontal && index > 0 ? inlinePadding : padding;
  return /* @__PURE__ */ _jsx('button', {
    'aria-label': `Scroll to page ${index + 1}`,
    type: 'button',
    ...props,
    style: { ...buttonStyle, padding: `${top}px ${right}px ${bottom}px ${left}px`, },
    children: /* @__PURE__ */ _jsx(motion.div, {
      style: { ...dotStyle2, },
      initial: false,
      animate: { opacity: isSelected ? selectedOpacity : opacity, },
      transition: { duration: 0.3, },
    },),
  },);
}
var dotsContainerStyle = {
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  overflow: 'hidden',
  position: 'absolute',
  pointerEvents: 'auto',
};
var dotStyle = {
  borderRadius: '50%',
  background: 'white',
  cursor: 'pointer',
  border: 'none',
  placeContent: 'center',
  placeItems: 'center',
  padding: 0,
};

// https:https://framer.com/m/Slideshow-jg8v.js
var SlideshowFonts = getFonts(Slideshow,);
var cycleOrder = ['EqB0Y8Qya',];
var variantClassNames = { EqB0Y8Qya: 'framer-v-1rm0rd', };
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var getProps = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'EqB0Y8Qya',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const defaultLayoutId = React.useId();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-ECpHo', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx2(motion2.div, {
          ...restProps,
          className: cx('framer-1rm0rd', className,),
          'data-framer-name': 'Slideshow',
          layoutDependency,
          layoutId: 'EqB0Y8Qya',
          ref,
          style: { ...style, },
          children: /* @__PURE__ */ _jsx2(motion2.div, {
            className: 'framer-7l6q9l-container',
            layoutDependency,
            layoutId: 'GGp_mvesb-container',
            children: /* @__PURE__ */ _jsx2(Slideshow, {
              alignment: 'center',
              arrowOptions: {
                arrowFill: 'rgba(0, 0, 0, 0.2)',
                arrowGap: 10,
                arrowPadding: 20,
                arrowPaddingBottom: 0,
                arrowPaddingLeft: 0,
                arrowPaddingRight: 0,
                arrowPaddingTop: 0,
                arrowPosition: 'auto',
                arrowRadius: 40,
                arrowShouldFadeIn: false,
                arrowShouldSpace: true,
                arrowSize: 40,
                showMouseControls: true,
              },
              autoPlayControl: true,
              borderRadius: 0,
              direction: 'left',
              dragControl: true,
              effectsOptions: { effectsHover: true, effectsOpacity: 1, effectsPerspective: 1200, effectsRotate: 0, effectsScale: 1, },
              fadeOptions: { fadeAlpha: 0, fadeContent: false, fadeInset: 0, fadeWidth: 25, overflow: false, },
              gap: 10,
              height: '100%',
              id: 'GGp_mvesb',
              intervalControl: 5,
              itemAmount: 1,
              layoutId: 'GGp_mvesb',
              padding: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingPerSide: false,
              paddingRight: 0,
              paddingTop: 0,
              progressOptions: {
                dotsActiveOpacity: 1,
                dotsBackground: 'rgba(0, 0, 0, 0.2)',
                dotsBlur: 0,
                dotsFill: 'rgb(255, 255, 255)',
                dotsGap: 10,
                dotsInset: 10,
                dotSize: 10,
                dotsOpacity: 0.5,
                dotsPadding: 10,
                dotsRadius: 50,
                showProgressDots: true,
              },
              slots: [
                /* @__PURE__ */ _jsx2(motion2.div, {
                  className: 'framer-1hqgnoh',
                  'data-framer-name': 'Image1',
                  layoutDependency,
                  layoutId: 'W19la8Eh2',
                  style: { backgroundColor: 'rgb(245, 112, 112)', },
                },),
                /* @__PURE__ */ _jsx2(motion2.div, {
                  className: 'framer-141p1ae',
                  'data-framer-name': 'Image2',
                  layoutDependency,
                  layoutId: 'W5r_1lOwU',
                  style: { backgroundColor: 'rgb(178, 229, 164)', },
                },),
                /* @__PURE__ */ _jsx2(motion2.div, {
                  className: 'framer-3qkb6f',
                  'data-framer-name': 'Image3',
                  layoutDependency,
                  layoutId: 'zs9AJ4O17',
                  style: { backgroundColor: 'rgb(131, 220, 231)', },
                },),
              ],
              startFrom: 0,
              style: { height: '100%', width: '100%', },
              transitionControl: { damping: 40, stiffness: 200, type: 'spring', },
              width: '100%',
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-ECpHo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-ECpHo .framer-13geoda { display: block; }',
  '.framer-ECpHo .framer-1rm0rd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-ECpHo .framer-7l6q9l-container { flex: none; height: 400px; position: relative; width: 1158px; }',
  '.framer-ECpHo .framer-1hqgnoh, .framer-ECpHo .framer-141p1ae, .framer-ECpHo .framer-3qkb6f { height: 288px; overflow: hidden; position: relative; width: 1062px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ECpHo .framer-1rm0rd { gap: 0px; } .framer-ECpHo .framer-1rm0rd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ECpHo .framer-1rm0rd > :first-child { margin-left: 0px; } .framer-ECpHo .framer-1rm0rd > :last-child { margin-right: 0px; } }',
];
var Framern0DHNX2A8 = withCSS(Component2, css, 'framer-ECpHo',);
var stdin_default = Framern0DHNX2A8;
Framern0DHNX2A8.displayName = 'Slideshow';
Framern0DHNX2A8.defaultProps = { height: 400, width: 1158, };
addFonts(Framern0DHNX2A8, [...SlideshowFonts,],);
var __FramerMetadata__ = {
  'exports': {
    'default': {
      'type': 'reactComponent',
      'name': 'Framern0DHNX2A8',
      'slots': [],
      'annotations': {
        'framerIntrinsicHeight': '400',
        'framerContractVersion': '1',
        'framerCanvasComponentVariantDetails': '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}',
        'framerIntrinsicWidth': '1158',
      },
    },
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};
export { __FramerMetadata__, stdin_default as default, };
