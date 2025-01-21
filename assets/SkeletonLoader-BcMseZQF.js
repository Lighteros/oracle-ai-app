import {
  r as T,
  R as H,
  n as _t,
  o as Ns,
  j as pe,
  p as Fs,
} from "./vendor-DsZaj2x0.js";
const _l = "/assets/bg-nodes-CNMzdib5.png";
var ks = Object.defineProperty,
  Cs = (e, t, r) =>
    t in e
      ? ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ir = (e, t, r) => (Cs(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ds = class {
    constructor() {
      ir(this, "current", this.detect()),
        ir(this, "handoffState", "pending"),
        ir(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  qe = new Ds(),
  ke = (e, t) => {
    qe.isServer ? T.useEffect(e, t) : T.useLayoutEffect(e, t);
  };
function Ge(e) {
  let t = T.useRef(e);
  return (
    ke(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let oe = function (e) {
  let t = Ge(e);
  return H.useCallback((...r) => t.current(...r), [t]);
};
function zt(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function it() {
  let e = [],
    t = {
      addEventListener(r, n, s, i) {
        return (
          r.addEventListener(n, s, i),
          t.add(() => r.removeEventListener(n, s, i))
        );
      },
      requestAnimationFrame(...r) {
        let n = requestAnimationFrame(...r);
        return t.add(() => cancelAnimationFrame(n));
      },
      nextFrame(...r) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
      },
      setTimeout(...r) {
        let n = setTimeout(...r);
        return t.add(() => clearTimeout(n));
      },
      microTask(...r) {
        let n = { current: !0 };
        return (
          zt(() => {
            n.current && r[0]();
          }),
          t.add(() => {
            n.current = !1;
          })
        );
      },
      style(r, n, s) {
        let i = r.style.getPropertyValue(n);
        return (
          Object.assign(r.style, { [n]: s }),
          this.add(() => {
            Object.assign(r.style, { [n]: i });
          })
        );
      },
      group(r) {
        let n = it();
        return r(n), this.add(() => n.dispose());
      },
      add(r) {
        return (
          e.push(r),
          () => {
            let n = e.indexOf(r);
            if (n >= 0) for (let s of e.splice(n, 1)) s();
          }
        );
      },
      dispose() {
        for (let r of e.splice(0)) r();
      },
    };
  return t;
}
function Mr() {
  let [e] = T.useState(it);
  return T.useEffect(() => () => e.dispose(), [e]), e;
}
function Ps() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in _t
    ? ((t) => t.useSyncExternalStore)(_t)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function ct() {
  let e = Ps(),
    [t, r] = T.useState(qe.isHandoffComplete);
  return (
    t && qe.isHandoffComplete === !1 && r(!1),
    T.useEffect(() => {
      t !== !0 && r(!0);
    }, [t]),
    T.useEffect(() => qe.handoff(), []),
    e ? !1 : t
  );
}
var Qr;
let ft =
  (Qr = H.useId) != null
    ? Qr
    : function () {
        let e = ct(),
          [t, r] = H.useState(e ? () => qe.nextId() : null);
        return (
          ke(() => {
            t === null && r(qe.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function _e(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((s) => `"${s}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(n, _e), n);
}
function xn(e) {
  return qe.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Ar = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var tt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(tt || {}),
  Tn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Tn || {}),
  Ls = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Ls || {});
function Ms(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ar)).sort((t, r) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (r.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Rn = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Rn || {});
function Us(e, t = 0) {
  var r;
  return e === ((r = xn(e)) == null ? void 0 : r.body)
    ? !1
    : _e(t, {
        0() {
          return e.matches(Ar);
        },
        1() {
          let n = e;
          for (; n !== null; ) {
            if (n.matches(Ar)) return !0;
            n = n.parentElement;
          }
          return !1;
        },
      });
}
var $s = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))($s || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function st(e) {
  e?.focus({ preventScroll: !0 });
}
let Vs = ["textarea", "input"].join(",");
function Is(e) {
  var t, r;
  return (r = (t = e?.matches) == null ? void 0 : t.call(e, Vs)) != null
    ? r
    : !1;
}
function Bs(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let s = t(r),
      i = t(n);
    if (s === null || i === null) return 0;
    let o = s.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Dt(
  e,
  t,
  { sorted: r = !0, relativeTo: n = null, skipElements: s = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (r ? Bs(e) : e) : Ms(e);
  s.length > 0 && o.length > 1 && (o = o.filter((L) => !s.includes(L))),
    (n = n ?? i.activeElement);
  let l = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    p = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(n)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(n)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    S = t & 32 ? { preventScroll: !0 } : {},
    v = 0,
    g = o.length,
    M;
  do {
    if (v >= g || v + g <= 0) return 0;
    let L = p + v;
    if (t & 16) L = (L + g) % g;
    else {
      if (L < 0) return 3;
      if (L >= g) return 1;
    }
    (M = o[L]), M?.focus(S), (v += l);
  } while (M !== i.activeElement);
  return t & 6 && Is(M) && M.select(), 2;
}
function Nn() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function js() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Hs() {
  return Nn() || js();
}
function Rt(e, t, r) {
  let n = Ge(t);
  T.useEffect(() => {
    function s(i) {
      n.current(i);
    }
    return (
      document.addEventListener(e, s, r),
      () => document.removeEventListener(e, s, r)
    );
  }, [e, r]);
}
function Fn(e, t, r) {
  let n = Ge(t);
  T.useEffect(() => {
    function s(i) {
      n.current(i);
    }
    return (
      window.addEventListener(e, s, r),
      () => window.removeEventListener(e, s, r)
    );
  }, [e, r]);
}
function qs(e, t, r = !0) {
  let n = T.useRef(!1);
  T.useEffect(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function s(o, l) {
    if (!n.current || o.defaultPrevented) return;
    let p = l(o);
    if (p === null || !p.getRootNode().contains(p) || !p.isConnected) return;
    let S = (function v(g) {
      return typeof g == "function"
        ? v(g())
        : Array.isArray(g) || g instanceof Set
        ? g
        : [g];
    })(e);
    for (let v of S) {
      if (v === null) continue;
      let g = v instanceof HTMLElement ? v : v.current;
      if (
        (g != null && g.contains(p)) ||
        (o.composed && o.composedPath().includes(g))
      )
        return;
    }
    return !Us(p, Rn.Loose) && p.tabIndex !== -1 && o.preventDefault(), t(o, p);
  }
  let i = T.useRef(null);
  Rt(
    "pointerdown",
    (o) => {
      var l, p;
      n.current &&
        (i.current =
          ((p = (l = o.composedPath) == null ? void 0 : l.call(o)) == null
            ? void 0
            : p[0]) || o.target);
    },
    !0
  ),
    Rt(
      "mousedown",
      (o) => {
        var l, p;
        n.current &&
          (i.current =
            ((p = (l = o.composedPath) == null ? void 0 : l.call(o)) == null
              ? void 0
              : p[0]) || o.target);
      },
      !0
    ),
    Rt(
      "click",
      (o) => {
        Hs() || (i.current && (s(o, () => i.current), (i.current = null)));
      },
      !0
    ),
    Rt(
      "touchend",
      (o) => s(o, () => (o.target instanceof HTMLElement ? o.target : null)),
      !0
    ),
    Fn(
      "blur",
      (o) =>
        s(o, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function wt(...e) {
  return T.useMemo(() => xn(...e), [...e]);
}
let kn = Symbol();
function Gs(e, t = !0) {
  return Object.assign(e, { [kn]: t });
}
function Le(...e) {
  let t = T.useRef(e);
  T.useEffect(() => {
    t.current = e;
  }, [e]);
  let r = oe((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : (s.current = n));
  });
  return e.every((n) => n == null || n?.[kn]) ? void 0 : r;
}
function Ur(e, t) {
  let r = T.useRef([]),
    n = oe(e);
  T.useEffect(() => {
    let s = [...r.current];
    for (let [i, o] of t.entries())
      if (r.current[i] !== o) {
        let l = n(t, s);
        return (r.current = t), l;
      }
  }, [n, ...t]);
}
function $t(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var Vt = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Vt || {}),
  Ye = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Ye || {});
function Ce({
  ourProps: e,
  theirProps: t,
  slot: r,
  defaultTag: n,
  features: s,
  visible: i = !0,
  name: o,
  mergeRefs: l,
}) {
  l = l ?? Ws;
  let p = Cn(t, e);
  if (i) return Nt(p, r, n, o, l);
  let S = s ?? 0;
  if (S & 2) {
    let { static: v = !1, ...g } = p;
    if (v) return Nt(g, r, n, o, l);
  }
  if (S & 1) {
    let { unmount: v = !0, ...g } = p;
    return _e(v ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Nt({ ...g, hidden: !0, style: { display: "none" } }, r, n, o, l);
      },
    });
  }
  return Nt(p, r, n, o, l);
}
function Nt(e, t = {}, r, n, s) {
  let {
      as: i = r,
      children: o,
      refName: l = "ref",
      ...p
    } = or(e, ["unmount", "static"]),
    S = e.ref !== void 0 ? { [l]: e.ref } : {},
    v = typeof o == "function" ? o(t) : o;
  "className" in p &&
    p.className &&
    typeof p.className == "function" &&
    (p.className = p.className(t));
  let g = {};
  if (t) {
    let M = !1,
      L = [];
    for (let [F, k] of Object.entries(t))
      typeof k == "boolean" && (M = !0), k === !0 && L.push(F);
    M && (g["data-headlessui-state"] = L.join(" "));
  }
  if (i === T.Fragment && Object.keys(en(p)).length > 0) {
    if (!T.isValidElement(v) || (Array.isArray(v) && v.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${n} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(p).map((k) => `  - ${k}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((k) => `  - ${k}`).join(`
`),
        ].join(`
`)
      );
    let M = v.props,
      L =
        typeof M?.className == "function"
          ? (...k) => $t(M?.className(...k), p.className)
          : $t(M?.className, p.className),
      F = L ? { className: L } : {};
    return T.cloneElement(
      v,
      Object.assign(
        {},
        Cn(v.props, en(or(p, ["ref"]))),
        g,
        S,
        { ref: s(v.ref, S.ref) },
        F
      )
    );
  }
  return T.createElement(
    i,
    Object.assign(
      {},
      or(p, ["ref"]),
      i !== T.Fragment && S,
      i !== T.Fragment && g
    ),
    v
  );
}
function Ws(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let r of e)
          r != null && (typeof r == "function" ? r(t) : (r.current = t));
      };
}
function Cn(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    r = {};
  for (let n of e)
    for (let s in n)
      s.startsWith("on") && typeof n[s] == "function"
        ? (r[s] != null || (r[s] = []), r[s].push(n[s]))
        : (t[s] = n[s]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(r).map((n) => [n, void 0]))
    );
  for (let n in r)
    Object.assign(t, {
      [n](s, ...i) {
        let o = r[n];
        for (let l of o) {
          if (
            (s instanceof Event || s?.nativeEvent instanceof Event) &&
            s.defaultPrevented
          )
            return;
          l(s, ...i);
        }
      },
    });
  return t;
}
function Ae(e) {
  var t;
  return Object.assign(T.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function en(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function or(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
let zs = "div";
var It = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(It || {});
function Js(e, t) {
  var r;
  let { features: n = 1, ...s } = e,
    i = {
      ref: t,
      "aria-hidden":
        (n & 2) === 2 ? !0 : (r = s["aria-hidden"]) != null ? r : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
      },
    };
  return Ce({
    ourProps: i,
    theirProps: s,
    slot: {},
    defaultTag: zs,
    name: "Hidden",
  });
}
let Or = Ae(Js),
  $r = T.createContext(null);
$r.displayName = "OpenClosedContext";
var Se = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Se || {});
function Vr() {
  return T.useContext($r);
}
function Ks({ value: e, children: t }) {
  return H.createElement($r.Provider, { value: e }, t);
}
function Xs(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Xe = [];
Xs(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Xe[0] !== t.target &&
      (Xe.unshift(t.target),
      (Xe = Xe.filter((r) => r != null && r.isConnected)),
      Xe.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function Ys(e) {
  let t = e.parentElement,
    r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), (t = t.parentElement);
  let n = t?.getAttribute("disabled") === "";
  return n && Zs(r) ? !1 : n;
}
function Zs(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Dn = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Dn || {});
function Pn(e, t, r, n) {
  let s = Ge(r);
  T.useEffect(() => {
    e = e ?? window;
    function i(o) {
      s.current(o);
    }
    return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
  }, [e, t, n]);
}
function bt() {
  let e = T.useRef(!1);
  return (
    ke(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Ln(e) {
  let t = oe(e),
    r = T.useRef(!1);
  T.useEffect(
    () => (
      (r.current = !1),
      () => {
        (r.current = !0),
          zt(() => {
            r.current && t();
          });
      }
    ),
    [t]
  );
}
var yt = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(yt || {});
function Qs() {
  let e = T.useRef(0);
  return (
    Fn(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Mn(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let ei = "div";
var Un = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Un || {});
function ti(e, t) {
  let r = T.useRef(null),
    n = Le(r, t),
    { initialFocus: s, containers: i, features: o = 30, ...l } = e;
  ct() || (o = 1);
  let p = wt(r);
  si({ ownerDocument: p }, !!(o & 16));
  let S = ii({ ownerDocument: p, container: r, initialFocus: s }, !!(o & 2));
  oi(
    { ownerDocument: p, container: r, containers: i, previousActiveElement: S },
    !!(o & 8)
  );
  let v = Qs(),
    g = oe((k) => {
      let C = r.current;
      C &&
        ((q) => q())(() => {
          _e(v.current, {
            [yt.Forwards]: () => {
              Dt(C, tt.First, { skipElements: [k.relatedTarget] });
            },
            [yt.Backwards]: () => {
              Dt(C, tt.Last, { skipElements: [k.relatedTarget] });
            },
          });
        });
    }),
    M = Mr(),
    L = T.useRef(!1),
    F = {
      ref: n,
      onKeyDown(k) {
        k.key == "Tab" &&
          ((L.current = !0),
          M.requestAnimationFrame(() => {
            L.current = !1;
          }));
      },
      onBlur(k) {
        let C = Mn(i);
        r.current instanceof HTMLElement && C.add(r.current);
        let q = k.relatedTarget;
        q instanceof HTMLElement &&
          q.dataset.headlessuiFocusGuard !== "true" &&
          ($n(C, q) ||
            (L.current
              ? Dt(
                  r.current,
                  _e(v.current, {
                    [yt.Forwards]: () => tt.Next,
                    [yt.Backwards]: () => tt.Previous,
                  }) | tt.WrapAround,
                  { relativeTo: k.target }
                )
              : k.target instanceof HTMLElement && st(k.target)));
      },
    };
  return H.createElement(
    H.Fragment,
    null,
    !!(o & 4) &&
      H.createElement(Or, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: g,
        features: It.Focusable,
      }),
    Ce({ ourProps: F, theirProps: l, defaultTag: ei, name: "FocusTrap" }),
    !!(o & 4) &&
      H.createElement(Or, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: g,
        features: It.Focusable,
      })
  );
}
let ri = Ae(ti),
  pt = Object.assign(ri, { features: Un });
function ni(e = !0) {
  let t = T.useRef(Xe.slice());
  return (
    Ur(
      ([r], [n]) => {
        n === !0 &&
          r === !1 &&
          zt(() => {
            t.current.splice(0);
          }),
          n === !1 && r === !0 && (t.current = Xe.slice());
      },
      [e, Xe, t]
    ),
    oe(() => {
      var r;
      return (r = t.current.find((n) => n != null && n.isConnected)) != null
        ? r
        : null;
    })
  );
}
function si({ ownerDocument: e }, t) {
  let r = ni(t);
  Ur(() => {
    t || (e?.activeElement === e?.body && st(r()));
  }, [t]),
    Ln(() => {
      t && st(r());
    });
}
function ii({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let s = T.useRef(null),
    i = bt();
  return (
    Ur(() => {
      if (!n) return;
      let o = t.current;
      o &&
        zt(() => {
          if (!i.current) return;
          let l = e?.activeElement;
          if (r != null && r.current) {
            if (r?.current === l) {
              s.current = l;
              return;
            }
          } else if (o.contains(l)) {
            s.current = l;
            return;
          }
          r != null && r.current
            ? st(r.current)
            : Dt(o, tt.First) === Tn.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (s.current = e?.activeElement);
        });
    }, [n]),
    s
  );
}
function oi(
  { ownerDocument: e, container: t, containers: r, previousActiveElement: n },
  s
) {
  let i = bt();
  Pn(
    e?.defaultView,
    "focus",
    (o) => {
      if (!s || !i.current) return;
      let l = Mn(r);
      t.current instanceof HTMLElement && l.add(t.current);
      let p = n.current;
      if (!p) return;
      let S = o.target;
      S && S instanceof HTMLElement
        ? $n(l, S)
          ? ((n.current = S), st(S))
          : (o.preventDefault(), o.stopPropagation(), st(p))
        : st(n.current);
    },
    !0
  );
}
function $n(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
let Vn = T.createContext(!1);
function ai() {
  return T.useContext(Vn);
}
function xr(e) {
  return H.createElement(Vn.Provider, { value: e.force }, e.children);
}
function li(e) {
  let t = ai(),
    r = T.useContext(In),
    n = wt(e),
    [s, i] = T.useState(() => {
      if ((!t && r !== null) || qe.isServer) return null;
      let o = n?.getElementById("headlessui-portal-root");
      if (o) return o;
      if (n === null) return null;
      let l = n.createElement("div");
      return (
        l.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(l)
      );
    });
  return (
    T.useEffect(() => {
      s !== null &&
        ((n != null && n.body.contains(s)) ||
          n == null ||
          n.body.appendChild(s));
    }, [s, n]),
    T.useEffect(() => {
      t || (r !== null && i(r.current));
    }, [r, i, t]),
    s
  );
}
let ui = T.Fragment;
function ci(e, t) {
  let r = e,
    n = T.useRef(null),
    s = Le(
      Gs((v) => {
        n.current = v;
      }),
      t
    ),
    i = wt(n),
    o = li(n),
    [l] = T.useState(() => {
      var v;
      return qe.isServer
        ? null
        : (v = i?.createElement("div")) != null
        ? v
        : null;
    }),
    p = T.useContext(Tr),
    S = ct();
  return (
    ke(() => {
      !o ||
        !l ||
        o.contains(l) ||
        (l.setAttribute("data-headlessui-portal", ""), o.appendChild(l));
    }, [o, l]),
    ke(() => {
      if (l && p) return p.register(l);
    }, [p, l]),
    Ln(() => {
      var v;
      !o ||
        !l ||
        (l instanceof Node && o.contains(l) && o.removeChild(l),
        o.childNodes.length <= 0 &&
          ((v = o.parentElement) == null || v.removeChild(o)));
    }),
    S
      ? !o || !l
        ? null
        : Ns.createPortal(
            Ce({
              ourProps: { ref: s },
              theirProps: r,
              defaultTag: ui,
              name: "Portal",
            }),
            l
          )
      : null
  );
}
let fi = T.Fragment,
  In = T.createContext(null);
function di(e, t) {
  let { target: r, ...n } = e,
    s = { ref: Le(t) };
  return H.createElement(
    In.Provider,
    { value: r },
    Ce({ ourProps: s, theirProps: n, defaultTag: fi, name: "Popover.Group" })
  );
}
let Tr = T.createContext(null);
function pi() {
  let e = T.useContext(Tr),
    t = T.useRef([]),
    r = oe((i) => (t.current.push(i), e && e.register(i), () => n(i))),
    n = oe((i) => {
      let o = t.current.indexOf(i);
      o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
    }),
    s = T.useMemo(
      () => ({ register: r, unregister: n, portals: t }),
      [r, n, t]
    );
  return [
    t,
    T.useMemo(
      () =>
        function ({ children: i }) {
          return H.createElement(Tr.Provider, { value: s }, i);
        },
      [s]
    ),
  ];
}
let hi = Ae(ci),
  mi = Ae(di),
  Rr = Object.assign(hi, { Group: mi });
function gi(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const yi = typeof Object.is == "function" ? Object.is : gi,
  { useState: vi, useEffect: _i, useLayoutEffect: Ei, useDebugValue: wi } = _t;
function bi(e, t, r) {
  const n = t(),
    [{ inst: s }, i] = vi({ inst: { value: n, getSnapshot: t } });
  return (
    Ei(() => {
      (s.value = n), (s.getSnapshot = t), ar(s) && i({ inst: s });
    }, [e, n, t]),
    _i(
      () => (
        ar(s) && i({ inst: s }),
        e(() => {
          ar(s) && i({ inst: s });
        })
      ),
      [e]
    ),
    wi(n),
    n
  );
}
function ar(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !yi(r, n);
  } catch {
    return !0;
  }
}
function Si(e, t, r) {
  return t();
}
const Ai =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Oi = !Ai,
  xi = Oi ? Si : bi,
  Ti = "useSyncExternalStore" in _t ? ((e) => e.useSyncExternalStore)(_t) : xi;
function Ri(e) {
  return Ti(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Ni(e, t) {
  let r = e(),
    n = new Set();
  return {
    getSnapshot() {
      return r;
    },
    subscribe(s) {
      return n.add(s), () => n.delete(s);
    },
    dispatch(s, ...i) {
      let o = t[s].call(r, ...i);
      o && ((r = o), n.forEach((l) => l()));
    },
  };
}
function Fi() {
  let e;
  return {
    before({ doc: t }) {
      var r;
      let n = t.documentElement;
      e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
    },
    after({ doc: t, d: r }) {
      let n = t.documentElement,
        s = n.clientWidth - n.offsetWidth,
        i = e - s;
      r.style(n, "paddingRight", `${i}px`);
    },
  };
}
function ki() {
  return Nn()
    ? {
        before({ doc: e, d: t, meta: r }) {
          function n(s) {
            return r.containers.flatMap((i) => i()).some((i) => i.contains(s));
          }
          t.microTask(() => {
            var s;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let l = it();
              l.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => l.dispose()));
            }
            let i = (s = window.scrollY) != null ? s : window.pageYOffset,
              o = null;
            t.addEventListener(
              e,
              "click",
              (l) => {
                if (l.target instanceof HTMLElement)
                  try {
                    let p = l.target.closest("a");
                    if (!p) return;
                    let { hash: S } = new URL(p.href),
                      v = e.querySelector(S);
                    v && !n(v) && (o = v);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (l) => {
                if (l.target instanceof HTMLElement)
                  if (n(l.target)) {
                    let p = l.target;
                    for (; p.parentElement && n(p.parentElement); )
                      p = p.parentElement;
                    t.style(p, "overscrollBehavior", "contain");
                  } else t.style(l.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (l) => {
                  if (l.target instanceof HTMLElement)
                    if (n(l.target)) {
                      let p = l.target;
                      for (
                        ;
                        p.parentElement &&
                        p.dataset.headlessuiPortal !== "" &&
                        !(
                          p.scrollHeight > p.clientHeight ||
                          p.scrollWidth > p.clientWidth
                        );

                      )
                        p = p.parentElement;
                      p.dataset.headlessuiPortal === "" && l.preventDefault();
                    } else l.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var l;
                let p = (l = window.scrollY) != null ? l : window.pageYOffset;
                i !== p && window.scrollTo(0, i),
                  o &&
                    o.isConnected &&
                    (o.scrollIntoView({ block: "nearest" }), (o = null));
              });
          });
        },
      }
    : {};
}
function Ci() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Di(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let rt = Ni(() => new Map(), {
  PUSH(e, t) {
    var r;
    let n =
      (r = this.get(e)) != null
        ? r
        : { doc: e, count: 0, d: it(), meta: new Set() };
    return n.count++, n.meta.add(t), this.set(e, n), this;
  },
  POP(e, t) {
    let r = this.get(e);
    return r && (r.count--, r.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
    let n = { doc: e, d: t, meta: Di(r) },
      s = [ki(), Fi(), Ci()];
    s.forEach(({ before: i }) => i?.(n)), s.forEach(({ after: i }) => i?.(n));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
rt.subscribe(() => {
  let e = rt.getSnapshot(),
    t = new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden",
      s = r.count !== 0;
    ((s && !n) || (!s && n)) &&
      rt.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r),
      r.count === 0 && rt.dispatch("TEARDOWN", r);
  }
});
function Pi(e, t, r) {
  let n = Ri(rt),
    s = e ? n.get(e) : void 0,
    i = s ? s.count > 0 : !1;
  return (
    ke(() => {
      if (!(!e || !t))
        return rt.dispatch("PUSH", e, r), () => rt.dispatch("POP", e, r);
    }, [t, e]),
    i
  );
}
let lr = new Map(),
  ht = new Map();
function tn(e, t = !0) {
  ke(() => {
    var r;
    if (!t) return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n) return;
    function s() {
      var o;
      if (!n) return;
      let l = (o = ht.get(n)) != null ? o : 1;
      if ((l === 1 ? ht.delete(n) : ht.set(n, l - 1), l !== 1)) return;
      let p = lr.get(n);
      p &&
        (p["aria-hidden"] === null
          ? n.removeAttribute("aria-hidden")
          : n.setAttribute("aria-hidden", p["aria-hidden"]),
        (n.inert = p.inert),
        lr.delete(n));
    }
    let i = (r = ht.get(n)) != null ? r : 0;
    return (
      ht.set(n, i + 1),
      i !== 0 ||
        (lr.set(n, {
          "aria-hidden": n.getAttribute("aria-hidden"),
          inert: n.inert,
        }),
        n.setAttribute("aria-hidden", "true"),
        (n.inert = !0)),
      s
    );
  }, [e, t]);
}
function Li({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: r,
} = {}) {
  var n;
  let s = T.useRef((n = r?.current) != null ? n : null),
    i = wt(s),
    o = oe(() => {
      var l, p, S;
      let v = [];
      for (let g of e)
        g !== null &&
          (g instanceof HTMLElement
            ? v.push(g)
            : "current" in g &&
              g.current instanceof HTMLElement &&
              v.push(g.current));
      if (t != null && t.current) for (let g of t.current) v.push(g);
      for (let g of (l = i?.querySelectorAll("html > *, body > *")) != null
        ? l
        : [])
        g !== document.body &&
          g !== document.head &&
          g instanceof HTMLElement &&
          g.id !== "headlessui-portal-root" &&
          (g.contains(s.current) ||
            g.contains(
              (S = (p = s.current) == null ? void 0 : p.getRootNode()) == null
                ? void 0
                : S.host
            ) ||
            v.some((M) => g.contains(M)) ||
            v.push(g));
      return v;
    });
  return {
    resolveContainers: o,
    contains: oe((l) => o().some((p) => p.contains(l))),
    mainTreeNodeRef: s,
    MainTreeNode: T.useMemo(
      () =>
        function () {
          return r != null
            ? null
            : H.createElement(Or, { features: It.Hidden, ref: s });
        },
      [s, r]
    ),
  };
}
let Ir = T.createContext(() => {});
Ir.displayName = "StackContext";
var Nr = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Nr || {}
);
function Mi() {
  return T.useContext(Ir);
}
function Ui({ children: e, onUpdate: t, type: r, element: n, enabled: s }) {
  let i = Mi(),
    o = oe((...l) => {
      t?.(...l), i(...l);
    });
  return (
    ke(() => {
      let l = s === void 0 || s === !0;
      return (
        l && o(0, r, n),
        () => {
          l && o(1, r, n);
        }
      );
    }, [o, r, n, s]),
    H.createElement(Ir.Provider, { value: o }, e)
  );
}
let Bn = T.createContext(null);
function jn() {
  let e = T.useContext(Bn);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, jn), t);
  }
  return e;
}
function $i() {
  let [e, t] = T.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    T.useMemo(
      () =>
        function (r) {
          let n = oe(
              (i) => (
                t((o) => [...o, i]),
                () =>
                  t((o) => {
                    let l = o.slice(),
                      p = l.indexOf(i);
                    return p !== -1 && l.splice(p, 1), l;
                  })
              )
            ),
            s = T.useMemo(
              () => ({
                register: n,
                slot: r.slot,
                name: r.name,
                props: r.props,
              }),
              [n, r.slot, r.name, r.props]
            );
          return H.createElement(Bn.Provider, { value: s }, r.children);
        },
      [t]
    ),
  ];
}
let Vi = "p";
function Ii(e, t) {
  let r = ft(),
    { id: n = `headlessui-description-${r}`, ...s } = e,
    i = jn(),
    o = Le(t);
  ke(() => i.register(n), [n, i.register]);
  let l = { ref: o, ...i.props, id: n };
  return Ce({
    ourProps: l,
    theirProps: s,
    slot: i.slot || {},
    defaultTag: Vi,
    name: i.name || "Description",
  });
}
let Bi = Ae(Ii),
  ji = Object.assign(Bi, {});
var Hi = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Hi || {}),
  qi = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(qi || {});
let Gi = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Bt = T.createContext(null);
Bt.displayName = "DialogContext";
function St(e) {
  let t = T.useContext(Bt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, St), r);
  }
  return t;
}
function Wi(e, t, r = () => [document.body]) {
  Pi(e, t, (n) => {
    var s;
    return { containers: [...((s = n.containers) != null ? s : []), r] };
  });
}
function zi(e, t) {
  return _e(t.type, Gi, e, t);
}
let Ji = "div",
  Ki = Vt.RenderStrategy | Vt.Static;
function Xi(e, t) {
  let r = ft(),
    {
      id: n = `headlessui-dialog-${r}`,
      open: s,
      onClose: i,
      initialFocus: o,
      role: l = "dialog",
      __demoMode: p = !1,
      ...S
    } = e,
    [v, g] = T.useState(0),
    M = T.useRef(!1);
  l = (function () {
    return l === "dialog" || l === "alertdialog"
      ? l
      : (M.current ||
          ((M.current = !0),
          console.warn(
            `Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let L = Vr();
  s === void 0 && L !== null && (s = (L & Se.Open) === Se.Open);
  let F = T.useRef(null),
    k = Le(F, t),
    C = wt(F),
    q = e.hasOwnProperty("open") || L !== null,
    O = e.hasOwnProperty("onClose");
  if (!q && !O)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!q)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!O)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (typeof s != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`
    );
  if (typeof i != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`
    );
  let B = s ? 0 : 1,
    [J, ee] = T.useReducer(zi, {
      titleId: null,
      descriptionId: null,
      panelRef: T.createRef(),
    }),
    z = oe(() => i(!1)),
    ie = oe((Y) => ee({ type: 0, id: Y })),
    a = ct() ? (p ? !1 : B === 0) : !1,
    u = v > 1,
    c = T.useContext(Bt) !== null,
    [b, f] = pi(),
    m = {
      get current() {
        var Y;
        return (Y = J.panelRef.current) != null ? Y : F.current;
      },
    },
    {
      resolveContainers: E,
      mainTreeNodeRef: d,
      MainTreeNode: y,
    } = Li({ portals: b, defaultContainers: [m] }),
    _ = u ? "parent" : "leaf",
    w = L !== null ? (L & Se.Closing) === Se.Closing : !1,
    N = c || w ? !1 : a,
    U = T.useCallback(() => {
      var Y, ve;
      return (ve = Array.from(
        (Y = C?.querySelectorAll("body > *")) != null ? Y : []
      ).find((re) =>
        re.id === "headlessui-portal-root"
          ? !1
          : re.contains(d.current) && re instanceof HTMLElement
      )) != null
        ? ve
        : null;
    }, [d]);
  tn(U, N);
  let I = u ? !0 : a,
    G = T.useCallback(() => {
      var Y, ve;
      return (ve = Array.from(
        (Y = C?.querySelectorAll("[data-headlessui-portal]")) != null ? Y : []
      ).find((re) => re.contains(d.current) && re instanceof HTMLElement)) !=
        null
        ? ve
        : null;
    }, [d]);
  tn(G, I), qs(E, z, !(!a || u));
  let Q = !(u || B !== 0);
  Pn(C?.defaultView, "keydown", (Y) => {
    Q &&
      (Y.defaultPrevented ||
        (Y.key === Dn.Escape &&
          (Y.preventDefault(), Y.stopPropagation(), z())));
  }),
    Wi(C, !(w || B !== 0 || c), E),
    T.useEffect(() => {
      if (B !== 0 || !F.current) return;
      let Y = new ResizeObserver((ve) => {
        for (let re of ve) {
          let ae = re.target.getBoundingClientRect();
          ae.x === 0 && ae.y === 0 && ae.width === 0 && ae.height === 0 && z();
        }
      });
      return Y.observe(F.current), () => Y.disconnect();
    }, [B, F, z]);
  let [X, ce] = $i(),
    Me = T.useMemo(
      () => [{ dialogState: B, close: z, setTitleId: ie }, J],
      [B, J, z, ie]
    ),
    Ie = T.useMemo(() => ({ open: B === 0 }), [B]),
    Qe = {
      ref: k,
      id: n,
      role: l,
      "aria-modal": B === 0 ? !0 : void 0,
      "aria-labelledby": J.titleId,
      "aria-describedby": X,
    };
  return H.createElement(
    Ui,
    {
      type: "Dialog",
      enabled: B === 0,
      element: F,
      onUpdate: oe((Y, ve) => {
        ve === "Dialog" &&
          _e(Y, {
            [Nr.Add]: () => g((re) => re + 1),
            [Nr.Remove]: () => g((re) => re - 1),
          });
      }),
    },
    H.createElement(
      xr,
      { force: !0 },
      H.createElement(
        Rr,
        null,
        H.createElement(
          Bt.Provider,
          { value: Me },
          H.createElement(
            Rr.Group,
            { target: F },
            H.createElement(
              xr,
              { force: !1 },
              H.createElement(
                ce,
                { slot: Ie, name: "Dialog.Description" },
                H.createElement(
                  pt,
                  {
                    initialFocus: o,
                    containers: E,
                    features: a
                      ? _e(_, {
                          parent: pt.features.RestoreFocus,
                          leaf: pt.features.All & ~pt.features.FocusLock,
                        })
                      : pt.features.None,
                  },
                  H.createElement(
                    f,
                    null,
                    Ce({
                      ourProps: Qe,
                      theirProps: S,
                      slot: Ie,
                      defaultTag: Ji,
                      features: Ki,
                      visible: B === 0,
                      name: "Dialog",
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    H.createElement(y, null)
  );
}
let Yi = "div";
function Zi(e, t) {
  let r = ft(),
    { id: n = `headlessui-dialog-overlay-${r}`, ...s } = e,
    [{ dialogState: i, close: o }] = St("Dialog.Overlay"),
    l = Le(t),
    p = oe((v) => {
      if (v.target === v.currentTarget) {
        if (Ys(v.currentTarget)) return v.preventDefault();
        v.preventDefault(), v.stopPropagation(), o();
      }
    }),
    S = T.useMemo(() => ({ open: i === 0 }), [i]);
  return Ce({
    ourProps: { ref: l, id: n, "aria-hidden": !0, onClick: p },
    theirProps: s,
    slot: S,
    defaultTag: Yi,
    name: "Dialog.Overlay",
  });
}
let Qi = "div";
function eo(e, t) {
  let r = ft(),
    { id: n = `headlessui-dialog-backdrop-${r}`, ...s } = e,
    [{ dialogState: i }, o] = St("Dialog.Backdrop"),
    l = Le(t);
  T.useEffect(() => {
    if (o.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [o.panelRef]);
  let p = T.useMemo(() => ({ open: i === 0 }), [i]);
  return H.createElement(
    xr,
    { force: !0 },
    H.createElement(
      Rr,
      null,
      Ce({
        ourProps: { ref: l, id: n, "aria-hidden": !0 },
        theirProps: s,
        slot: p,
        defaultTag: Qi,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let to = "div";
function ro(e, t) {
  let r = ft(),
    { id: n = `headlessui-dialog-panel-${r}`, ...s } = e,
    [{ dialogState: i }, o] = St("Dialog.Panel"),
    l = Le(t, o.panelRef),
    p = T.useMemo(() => ({ open: i === 0 }), [i]),
    S = oe((v) => {
      v.stopPropagation();
    });
  return Ce({
    ourProps: { ref: l, id: n, onClick: S },
    theirProps: s,
    slot: p,
    defaultTag: to,
    name: "Dialog.Panel",
  });
}
let no = "h2";
function so(e, t) {
  let r = ft(),
    { id: n = `headlessui-dialog-title-${r}`, ...s } = e,
    [{ dialogState: i, setTitleId: o }] = St("Dialog.Title"),
    l = Le(t);
  T.useEffect(() => (o(n), () => o(null)), [n, o]);
  let p = T.useMemo(() => ({ open: i === 0 }), [i]);
  return Ce({
    ourProps: { ref: l, id: n },
    theirProps: s,
    slot: p,
    defaultTag: no,
    name: "Dialog.Title",
  });
}
let io = Ae(Xi),
  oo = Ae(eo),
  ao = Ae(ro),
  lo = Ae(Zi),
  uo = Ae(so),
  ur = Object.assign(io, {
    Backdrop: oo,
    Panel: ao,
    Overlay: lo,
    Title: uo,
    Description: ji,
  });
function co(e = 0) {
  let [t, r] = T.useState(e),
    n = bt(),
    s = T.useCallback(
      (p) => {
        n.current && r((S) => S | p);
      },
      [t, n]
    ),
    i = T.useCallback((p) => !!(t & p), [t]),
    o = T.useCallback(
      (p) => {
        n.current && r((S) => S & ~p);
      },
      [r, n]
    ),
    l = T.useCallback(
      (p) => {
        n.current && r((S) => S ^ p);
      },
      [r]
    );
  return { flags: t, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: l };
}
function fo(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return (t.called = !0), e(...r);
  };
}
function cr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function fr(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function po(e, t) {
  let r = it();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: s } = getComputedStyle(e),
    [i, o] = [n, s].map((p) => {
      let [S = 0] = p
        .split(",")
        .filter(Boolean)
        .map((v) => (v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3))
        .sort((v, g) => g - v);
      return S;
    }),
    l = i + o;
  if (l !== 0) {
    r.group((S) => {
      S.setTimeout(() => {
        t(), S.dispose();
      }, l),
        S.addEventListener(e, "transitionrun", (v) => {
          v.target === v.currentTarget && S.dispose();
        });
    });
    let p = r.addEventListener(e, "transitionend", (S) => {
      S.target === S.currentTarget && (t(), p());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function ho(e, t, r, n) {
  let s = r ? "enter" : "leave",
    i = it(),
    o = n !== void 0 ? fo(n) : () => {};
  s === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let l = _e(s, { enter: () => t.enter, leave: () => t.leave }),
    p = _e(s, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    S = _e(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    fr(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    cr(e, ...t.base, ...l, ...S),
    i.nextFrame(() => {
      fr(e, ...t.base, ...l, ...S),
        cr(e, ...t.base, ...l, ...p),
        po(
          e,
          () => (fr(e, ...t.base, ...l), cr(e, ...t.base, ...t.entered), o())
        );
    }),
    i.dispose
  );
}
function mo({
  immediate: e,
  container: t,
  direction: r,
  classes: n,
  onStart: s,
  onStop: i,
}) {
  let o = bt(),
    l = Mr(),
    p = Ge(r);
  ke(() => {
    e && (p.current = "enter");
  }, [e]),
    ke(() => {
      let S = it();
      l.add(S.dispose);
      let v = t.current;
      if (v && p.current !== "idle" && o.current)
        return (
          S.dispose(),
          s.current(p.current),
          S.add(
            ho(v, n.current, p.current === "enter", () => {
              S.dispose(), i.current(p.current);
            })
          ),
          S.dispose
        );
    }, [r]);
}
function ze(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Jt = T.createContext(null);
Jt.displayName = "TransitionContext";
var go = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(go || {});
function yo() {
  let e = T.useContext(Jt);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function vo() {
  let e = T.useContext(Kt);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Kt = T.createContext(null);
Kt.displayName = "NestingContext";
function Xt(e) {
  return "children" in e
    ? Xt(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Hn(e, t) {
  let r = Ge(e),
    n = T.useRef([]),
    s = bt(),
    i = Mr(),
    o = oe((L, F = Ye.Hidden) => {
      let k = n.current.findIndex(({ el: C }) => C === L);
      k !== -1 &&
        (_e(F, {
          [Ye.Unmount]() {
            n.current.splice(k, 1);
          },
          [Ye.Hidden]() {
            n.current[k].state = "hidden";
          },
        }),
        i.microTask(() => {
          var C;
          !Xt(n) && s.current && ((C = r.current) == null || C.call(r));
        }));
    }),
    l = oe((L) => {
      let F = n.current.find(({ el: k }) => k === L);
      return (
        F
          ? F.state !== "visible" && (F.state = "visible")
          : n.current.push({ el: L, state: "visible" }),
        () => o(L, Ye.Unmount)
      );
    }),
    p = T.useRef([]),
    S = T.useRef(Promise.resolve()),
    v = T.useRef({ enter: [], leave: [], idle: [] }),
    g = oe((L, F, k) => {
      p.current.splice(0),
        t &&
          (t.chains.current[F] = t.chains.current[F].filter(([C]) => C !== L)),
        t?.chains.current[F].push([
          L,
          new Promise((C) => {
            p.current.push(C);
          }),
        ]),
        t?.chains.current[F].push([
          L,
          new Promise((C) => {
            Promise.all(v.current[F].map(([q, O]) => O)).then(() => C());
          }),
        ]),
        F === "enter"
          ? (S.current = S.current.then(() => t?.wait.current).then(() => k(F)))
          : k(F);
    }),
    M = oe((L, F, k) => {
      Promise.all(v.current[F].splice(0).map(([C, q]) => q))
        .then(() => {
          var C;
          (C = p.current.shift()) == null || C();
        })
        .then(() => k(F));
    });
  return T.useMemo(
    () => ({
      children: n,
      register: l,
      unregister: o,
      onStart: g,
      onStop: M,
      wait: S,
      chains: v,
    }),
    [l, o, n, g, M, v, S]
  );
}
function _o() {}
let Eo = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function rn(e) {
  var t;
  let r = {};
  for (let n of Eo) r[n] = (t = e[n]) != null ? t : _o;
  return r;
}
function wo(e) {
  let t = T.useRef(rn(e));
  return (
    T.useEffect(() => {
      t.current = rn(e);
    }, [e]),
    t
  );
}
let bo = "div",
  qn = Vt.RenderStrategy;
function So(e, t) {
  var r, n;
  let {
      beforeEnter: s,
      afterEnter: i,
      beforeLeave: o,
      afterLeave: l,
      enter: p,
      enterFrom: S,
      enterTo: v,
      entered: g,
      leave: M,
      leaveFrom: L,
      leaveTo: F,
      ...k
    } = e,
    C = T.useRef(null),
    q = Le(C, t),
    O = (r = k.unmount) == null || r ? Ye.Unmount : Ye.Hidden,
    { show: B, appear: J, initial: ee } = yo(),
    [z, ie] = T.useState(B ? "visible" : "hidden"),
    a = vo(),
    { register: u, unregister: c } = a;
  T.useEffect(() => u(C), [u, C]),
    T.useEffect(() => {
      if (O === Ye.Hidden && C.current) {
        if (B && z !== "visible") {
          ie("visible");
          return;
        }
        return _e(z, { hidden: () => c(C), visible: () => u(C) });
      }
    }, [z, C, u, c, B, O]);
  let b = Ge({
      base: ze(k.className),
      enter: ze(p),
      enterFrom: ze(S),
      enterTo: ze(v),
      entered: ze(g),
      leave: ze(M),
      leaveFrom: ze(L),
      leaveTo: ze(F),
    }),
    f = wo({ beforeEnter: s, afterEnter: i, beforeLeave: o, afterLeave: l }),
    m = ct();
  T.useEffect(() => {
    if (m && z === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [C, z, m]);
  let E = ee && !J,
    d = J && B && ee,
    y = !m || E ? "idle" : B ? "enter" : "leave",
    _ = co(0),
    w = oe((Q) =>
      _e(Q, {
        enter: () => {
          _.addFlag(Se.Opening), f.current.beforeEnter();
        },
        leave: () => {
          _.addFlag(Se.Closing), f.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    N = oe((Q) =>
      _e(Q, {
        enter: () => {
          _.removeFlag(Se.Opening), f.current.afterEnter();
        },
        leave: () => {
          _.removeFlag(Se.Closing), f.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    U = Hn(() => {
      ie("hidden"), c(C);
    }, a),
    I = T.useRef(!1);
  mo({
    immediate: d,
    container: C,
    classes: b,
    direction: y,
    onStart: Ge((Q) => {
      (I.current = !0), U.onStart(C, Q, w);
    }),
    onStop: Ge((Q) => {
      (I.current = !1),
        U.onStop(C, Q, N),
        Q === "leave" && !Xt(U) && (ie("hidden"), c(C));
    }),
  });
  let G = k,
    se = { ref: q };
  return (
    d
      ? (G = {
          ...G,
          className: $t(
            k.className,
            ...b.current.enter,
            ...b.current.enterFrom
          ),
        })
      : I.current &&
        ((G.className = $t(
          k.className,
          (n = C.current) == null ? void 0 : n.className
        )),
        G.className === "" && delete G.className),
    H.createElement(
      Kt.Provider,
      { value: U },
      H.createElement(
        Ks,
        { value: _e(z, { visible: Se.Open, hidden: Se.Closed }) | _.flags },
        Ce({
          ourProps: se,
          theirProps: G,
          defaultTag: bo,
          features: qn,
          visible: z === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Ao(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...i } = e,
    o = T.useRef(null),
    l = Le(o, t);
  ct();
  let p = Vr();
  if (
    (r === void 0 && p !== null && (r = (p & Se.Open) === Se.Open),
    ![!0, !1].includes(r))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [S, v] = T.useState(r ? "visible" : "hidden"),
    g = Hn(() => {
      v("hidden");
    }),
    [M, L] = T.useState(!0),
    F = T.useRef([r]);
  ke(() => {
    M !== !1 &&
      F.current[F.current.length - 1] !== r &&
      (F.current.push(r), L(!1));
  }, [F, r]);
  let k = T.useMemo(() => ({ show: r, appear: n, initial: M }), [r, n, M]);
  T.useEffect(() => {
    if (r) v("visible");
    else if (!Xt(g)) v("hidden");
    else {
      let B = o.current;
      if (!B) return;
      let J = B.getBoundingClientRect();
      J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && v("hidden");
    }
  }, [r, g]);
  let C = { unmount: s },
    q = oe(() => {
      var B;
      M && L(!1), (B = e.beforeEnter) == null || B.call(e);
    }),
    O = oe(() => {
      var B;
      M && L(!1), (B = e.beforeLeave) == null || B.call(e);
    });
  return H.createElement(
    Kt.Provider,
    { value: g },
    H.createElement(
      Jt.Provider,
      { value: k },
      Ce({
        ourProps: {
          ...C,
          as: T.Fragment,
          children: H.createElement(Gn, {
            ref: l,
            ...C,
            ...i,
            beforeEnter: q,
            beforeLeave: O,
          }),
        },
        theirProps: {},
        defaultTag: T.Fragment,
        features: qn,
        visible: S === "visible",
        name: "Transition",
      })
    )
  );
}
function Oo(e, t) {
  let r = T.useContext(Jt) !== null,
    n = Vr() !== null;
  return H.createElement(
    H.Fragment,
    null,
    !r && n
      ? H.createElement(Fr, { ref: t, ...e })
      : H.createElement(Gn, { ref: t, ...e })
  );
}
let Fr = Ae(Ao),
  Gn = Ae(So),
  xo = Ae(Oo),
  dr = Object.assign(Fr, { Child: xo, Root: Fr });
function wl({
  title: e,
  children: t,
  actionConfirm: r,
  actionCancel: n,
  action: s = !1,
  isOpen: i,
  closeModal: o,
}) {
  return pe.jsx(dr, {
    appear: !0,
    show: i,
    as: T.Fragment,
    children: pe.jsxs(ur, {
      as: "div",
      className: "relative z-[99]",
      onClose: o,
      children: [
        pe.jsx(dr.Child, {
          as: T.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: pe.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm",
          }),
        }),
        pe.jsx("div", {
          className: "fixed inset-0 overflow-y-auto",
          children: pe.jsx("div", {
            className:
              "flex min-h-full items-center justify-center p-4 text-center ",
            children: pe.jsx(dr.Child, {
              as: T.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95 translate-y-20",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200 translate-y-0",
              leaveFrom: "opacity-100 scale-100 translate-y-0",
              leaveTo: "opacity-0 scale-95 translate-y-20",
              children: pe.jsxs(ur.Panel, {
                className:
                  "w-full flex items-center justify-center max-w-md transform  rounded-2xl text-left align-middle transition-all text-white",
                children: [
                  pe.jsx(ur.Title, { as: "h3", children: e }),
                  pe.jsx("div", { className: "mt-2", children: t }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
var At = (e) => e.type === "checkbox",
  lt = (e) => e instanceof Date,
  Ee = (e) => e == null;
const Wn = (e) => typeof e == "object";
var de = (e) => !Ee(e) && !Array.isArray(e) && Wn(e) && !lt(e),
  To = (e) =>
    de(e) && e.target ? (At(e.target) ? e.target.checked : e.target.value) : e,
  Ro = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  No = (e, t) => e.has(Ro(t)),
  Fo = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return de(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Br =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function xe(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Br && (e instanceof Blob || e instanceof FileList)) &&
    (r || de(e))
  )
    if (((t = r ? [] : {}), !r && !Fo(e))) t = e;
    else for (const n in e) e.hasOwnProperty(n) && (t[n] = xe(e[n]));
  else return e;
  return t;
}
var Ot = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  fe = (e) => e === void 0,
  V = (e, t, r) => {
    if (!t || !de(e)) return r;
    const n = Ot(t.split(/[,[\].]+?/)).reduce((s, i) => (Ee(s) ? s : s[i]), e);
    return fe(n) || n === e ? (fe(e[t]) ? r : e[t]) : n;
  },
  He = (e) => typeof e == "boolean";
const nn = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Pe = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Be = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
H.createContext(null);
var ko = (e, t, r, n = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== Pe.all &&
              (t._proxyFormState[o] = !n || Pe.all),
            r && (r[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  Ne = (e) => de(e) && !Object.keys(e).length,
  Co = (e, t, r, n) => {
    r(e);
    const { name: s, ...i } = e;
    return (
      Ne(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!n || Pe.all))
    );
  },
  pr = (e) => (Array.isArray(e) ? e : [e]);
function Do(e) {
  const t = H.useRef(e);
  (t.current = e),
    H.useEffect(() => {
      const r =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var Ue = (e) => typeof e == "string",
  Po = (e, t, r, n, s) =>
    Ue(e)
      ? (n && t.watch.add(e), V(r, e, s))
      : Array.isArray(e)
      ? e.map((i) => (n && t.watch.add(i), V(r, i)))
      : (n && (t.watchAll = !0), r),
  jr = (e) => /^\w*$/.test(e),
  zn = (e) => Ot(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ne = (e, t, r) => {
    let n = -1;
    const s = jr(t) ? [t] : zn(t),
      i = s.length,
      o = i - 1;
    for (; ++n < i; ) {
      const l = s[n];
      let p = r;
      if (n !== o) {
        const S = e[l];
        p = de(S) || Array.isArray(S) ? S : isNaN(+s[n + 1]) ? {} : [];
      }
      (e[l] = p), (e = e[l]);
    }
    return e;
  },
  Jn = (e, t, r, n, s) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: s || !0 },
        }
      : {},
  sn = (e) => ({
    isOnSubmit: !e || e === Pe.onSubmit,
    isOnBlur: e === Pe.onBlur,
    isOnChange: e === Pe.onChange,
    isOnAll: e === Pe.all,
    isOnTouch: e === Pe.onTouched,
  }),
  on = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      ));
const vt = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const i = V(e, s);
    if (i) {
      const { _f: o, ...l } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !n) break;
        if (o.ref && t(o.ref, o.name) && !n) break;
        vt(l, t);
      } else de(l) && vt(l, t);
    }
  }
};
var Lo = (e, t, r) => {
    const n = Ot(V(e, r));
    return ne(n, "root", t[r]), ne(e, r, n), e;
  },
  Hr = (e) => e.type === "file",
  Ze = (e) => typeof e == "function",
  jt = (e) => {
    if (!Br) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Pt = (e) => Ue(e),
  qr = (e) => e.type === "radio",
  Ht = (e) => e instanceof RegExp;
const an = { value: !1, isValid: !1 },
  ln = { value: !0, isValid: !0 };
var Kn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !fe(e[0].attributes.value)
        ? fe(e[0].value) || e[0].value === ""
          ? ln
          : { value: e[0].value, isValid: !0 }
        : ln
      : an;
  }
  return an;
};
const un = { isValid: !1, value: null };
var Xn = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        un
      )
    : un;
function cn(e, t, r = "validate") {
  if (Pt(e) || (Array.isArray(e) && e.every(Pt)) || (He(e) && !e))
    return { type: r, message: Pt(e) ? e : "", ref: t };
}
var at = (e) => (de(e) && !Ht(e) ? e : { value: e, message: "" }),
  fn = async (e, t, r, n, s) => {
    const {
        ref: i,
        refs: o,
        required: l,
        maxLength: p,
        minLength: S,
        min: v,
        max: g,
        pattern: M,
        validate: L,
        name: F,
        valueAsNumber: k,
        mount: C,
        disabled: q,
      } = e._f,
      O = V(t, F);
    if (!C || q) return {};
    const B = o ? o[0] : i,
      J = (f) => {
        n &&
          B.reportValidity &&
          (B.setCustomValidity(He(f) ? "" : f || ""), B.reportValidity());
      },
      ee = {},
      z = qr(i),
      ie = At(i),
      a = z || ie,
      u =
        ((k || Hr(i)) && fe(i.value) && fe(O)) ||
        (jt(i) && i.value === "") ||
        O === "" ||
        (Array.isArray(O) && !O.length),
      c = Jn.bind(null, F, r, ee),
      b = (f, m, E, d = Be.maxLength, y = Be.minLength) => {
        const _ = f ? m : E;
        ee[F] = { type: f ? d : y, message: _, ref: i, ...c(f ? d : y, _) };
      };
    if (
      s
        ? !Array.isArray(O) || !O.length
        : l &&
          ((!a && (u || Ee(O))) ||
            (He(O) && !O) ||
            (ie && !Kn(o).isValid) ||
            (z && !Xn(o).isValid))
    ) {
      const { value: f, message: m } = Pt(l)
        ? { value: !!l, message: l }
        : at(l);
      if (
        f &&
        ((ee[F] = {
          type: Be.required,
          message: m,
          ref: B,
          ...c(Be.required, m),
        }),
        !r)
      )
        return J(m), ee;
    }
    if (!u && (!Ee(v) || !Ee(g))) {
      let f, m;
      const E = at(g),
        d = at(v);
      if (!Ee(O) && !isNaN(O)) {
        const y = i.valueAsNumber || (O && +O);
        Ee(E.value) || (f = y > E.value), Ee(d.value) || (m = y < d.value);
      } else {
        const y = i.valueAsDate || new Date(O),
          _ = (U) => new Date(new Date().toDateString() + " " + U),
          w = i.type == "time",
          N = i.type == "week";
        Ue(E.value) &&
          O &&
          (f = w ? _(O) > _(E.value) : N ? O > E.value : y > new Date(E.value)),
          Ue(d.value) &&
            O &&
            (m = w
              ? _(O) < _(d.value)
              : N
              ? O < d.value
              : y < new Date(d.value));
      }
      if ((f || m) && (b(!!f, E.message, d.message, Be.max, Be.min), !r))
        return J(ee[F].message), ee;
    }
    if ((p || S) && !u && (Ue(O) || (s && Array.isArray(O)))) {
      const f = at(p),
        m = at(S),
        E = !Ee(f.value) && O.length > +f.value,
        d = !Ee(m.value) && O.length < +m.value;
      if ((E || d) && (b(E, f.message, m.message), !r))
        return J(ee[F].message), ee;
    }
    if (M && !u && Ue(O)) {
      const { value: f, message: m } = at(M);
      if (
        Ht(f) &&
        !O.match(f) &&
        ((ee[F] = {
          type: Be.pattern,
          message: m,
          ref: i,
          ...c(Be.pattern, m),
        }),
        !r)
      )
        return J(m), ee;
    }
    if (L) {
      if (Ze(L)) {
        const f = await L(O, t),
          m = cn(f, B);
        if (m && ((ee[F] = { ...m, ...c(Be.validate, m.message) }), !r))
          return J(m.message), ee;
      } else if (de(L)) {
        let f = {};
        for (const m in L) {
          if (!Ne(f) && !r) break;
          const E = cn(await L[m](O, t), B, m);
          E &&
            ((f = { ...E, ...c(m, E.message) }),
            J(E.message),
            r && (ee[F] = f));
        }
        if (!Ne(f) && ((ee[F] = { ref: B, ...f }), !r)) return ee;
      }
    }
    return J(!0), ee;
  };
function Mo(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = fe(e) ? n++ : e[t[n++]];
  return e;
}
function Uo(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !fe(e[t])) return !1;
  return !0;
}
function ye(e, t) {
  const r = Array.isArray(t) ? t : jr(t) ? [t] : zn(t),
    n = r.length === 1 ? e : Mo(e, r),
    s = r.length - 1,
    i = r[s];
  return (
    n && delete n[i],
    s !== 0 &&
      ((de(n) && Ne(n)) || (Array.isArray(n) && Uo(n))) &&
      ye(e, r.slice(0, -1)),
    e
  );
}
var hr = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const i of e) i.next && i.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  qt = (e) => Ee(e) || !Wn(e);
function nt(e, t) {
  if (qt(e) || qt(t)) return e === t;
  if (lt(e) && lt(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const s of r) {
    const i = e[s];
    if (!n.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (lt(i) && lt(o)) ||
        (de(i) && de(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !nt(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Yn = (e) => e.type === "select-multiple",
  $o = (e) => qr(e) || At(e),
  mr = (e) => jt(e) && e.isConnected,
  Vo = (e) => de(e) && Object.values(e).some((t) => t),
  Zn = (e) => {
    for (const t in e) if (Ze(e[t])) return !0;
    return !1;
  };
function Gt(e, t = {}) {
  const r = Array.isArray(e);
  if (de(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (de(e[n]) && !Zn(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), Gt(e[n], t[n]))
        : Ee(e[n]) || (t[n] = !0);
  return t;
}
function Qn(e, t, r) {
  const n = Array.isArray(e);
  if (de(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || (de(e[s]) && !Zn(e[s]))
        ? fe(t) || qt(r[s])
          ? (r[s] = Array.isArray(e[s]) ? Gt(e[s], []) : { ...Gt(e[s]) })
          : Qn(e[s], Ee(t) ? {} : t[s], r[s])
        : (r[s] = !nt(e[s], t[s]));
  return r;
}
var Ft = (e, t) => Qn(e, t, Gt(t)),
  es = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    fe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : r && Ue(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function gr(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Hr(t)
      ? t.files
      : qr(t)
      ? Xn(e.refs).value
      : Yn(t)
      ? [...t.selectedOptions].map(({ value: r }) => r)
      : At(t)
      ? Kn(e.refs).value
      : es(fe(t.value) ? e.ref.value : t.value, e);
}
var Io = (e, t, r, n) => {
    const s = {};
    for (const i of e) {
      const o = V(t, i);
      o && ne(s, i, o._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: n,
    };
  },
  mt = (e) =>
    fe(e)
      ? e
      : Ht(e)
      ? e.source
      : de(e)
      ? Ht(e.value)
        ? e.value.source
        : e.value
      : e,
  Bo = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function dn(e, t, r) {
  const n = V(e, r);
  if (n || jr(r)) return { error: n, name: r };
  const s = r.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = V(t, i),
      l = V(e, i);
    if (o && !Array.isArray(o) && r !== i) return { name: r };
    if (l && l.type) return { name: i, error: l };
    s.pop();
  }
  return { name: r };
}
var jo = (e, t, r, n, s) =>
    s.isOnAll
      ? !1
      : !r && s.isOnTouch
      ? !(t || e)
      : (r ? n.isOnBlur : s.isOnBlur)
      ? !e
      : (r ? n.isOnChange : s.isOnChange)
      ? e
      : !0,
  Ho = (e, t) => !Ot(V(e, t)).length && ye(e, t);
const qo = {
  mode: Pe.onSubmit,
  reValidateMode: Pe.onChange,
  shouldFocusError: !0,
};
function Go(e = {}) {
  let t = { ...qo, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Ze(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    s =
      de(t.defaultValues) || de(t.values)
        ? xe(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : xe(s),
    o = { action: !1, mount: !1, watch: !1 },
    l = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    S = 0;
  const v = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    g = { values: hr(), array: hr(), state: hr() },
    M = sn(t.mode),
    L = sn(t.reValidateMode),
    F = t.criteriaMode === Pe.all,
    k = (h) => (A) => {
      clearTimeout(S), (S = setTimeout(h, A));
    },
    C = async (h) => {
      if (v.isValid || h) {
        const A = t.resolver ? Ne((await a()).errors) : await c(n, !0);
        A !== r.isValid && g.state.next({ isValid: A });
      }
    },
    q = (h, A) => {
      (v.isValidating || v.validatingFields) &&
        (A.forEach((x) => {
          ne(r.validatingFields, x, h);
        }),
        (r.isValidating = Vo(r.validatingFields)),
        g.state.next({
          validatingFields: r.validatingFields,
          isValidating: r.isValidating,
        }));
    },
    O = (h, A = [], x, $, P = !0, D = !0) => {
      if ($ && x) {
        if (((o.action = !0), D && Array.isArray(V(n, h)))) {
          const j = x(V(n, h), $.argA, $.argB);
          P && ne(n, h, j);
        }
        if (D && Array.isArray(V(r.errors, h))) {
          const j = x(V(r.errors, h), $.argA, $.argB);
          P && ne(r.errors, h, j), Ho(r.errors, h);
        }
        if (v.touchedFields && D && Array.isArray(V(r.touchedFields, h))) {
          const j = x(V(r.touchedFields, h), $.argA, $.argB);
          P && ne(r.touchedFields, h, j);
        }
        v.dirtyFields && (r.dirtyFields = Ft(s, i)),
          g.state.next({
            name: h,
            isDirty: f(h, A),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else ne(i, h, A);
    },
    B = (h, A) => {
      ne(r.errors, h, A), g.state.next({ errors: r.errors });
    },
    J = (h) => {
      (r.errors = h), g.state.next({ errors: r.errors, isValid: !1 });
    },
    ee = (h, A, x, $) => {
      const P = V(n, h);
      if (P) {
        const D = V(i, h, fe(x) ? V(s, h) : x);
        fe(D) || ($ && $.defaultChecked) || A
          ? ne(i, h, A ? D : gr(P._f))
          : d(h, D),
          o.mount && C();
      }
    },
    z = (h, A, x, $, P) => {
      let D = !1,
        j = !1;
      const te = { name: h },
        me = !!(V(n, h) && V(n, h)._f.disabled);
      if (!x || $) {
        v.isDirty &&
          ((j = r.isDirty),
          (r.isDirty = te.isDirty = f()),
          (D = j !== te.isDirty));
        const be = me || nt(V(s, h), A);
        (j = !!(!me && V(r.dirtyFields, h))),
          be || me ? ye(r.dirtyFields, h) : ne(r.dirtyFields, h, !0),
          (te.dirtyFields = r.dirtyFields),
          (D = D || (v.dirtyFields && j !== !be));
      }
      if (x) {
        const be = V(r.touchedFields, h);
        be ||
          (ne(r.touchedFields, h, x),
          (te.touchedFields = r.touchedFields),
          (D = D || (v.touchedFields && be !== x)));
      }
      return D && P && g.state.next(te), D ? te : {};
    },
    ie = (h, A, x, $) => {
      const P = V(r.errors, h),
        D = v.isValid && He(A) && r.isValid !== A;
      if (
        (e.delayError && x
          ? ((p = k(() => B(h, x))), p(e.delayError))
          : (clearTimeout(S),
            (p = null),
            x ? ne(r.errors, h, x) : ye(r.errors, h)),
        (x ? !nt(P, x) : P) || !Ne($) || D)
      ) {
        const j = {
          ...$,
          ...(D && He(A) ? { isValid: A } : {}),
          errors: r.errors,
          name: h,
        };
        (r = { ...r, ...j }), g.state.next(j);
      }
      q(
        !1,
        Object.keys(r.validatingFields).filter((j) => j === h)
      );
    },
    a = async (h) =>
      t.resolver(
        i,
        t.context,
        Io(h || l.mount, n, t.criteriaMode, t.shouldUseNativeValidation)
      ),
    u = async (h) => {
      const { errors: A } = await a(h);
      if (h)
        for (const x of h) {
          const $ = V(A, x);
          $ ? ne(r.errors, x, $) : ye(r.errors, x);
        }
      else r.errors = A;
      return A;
    },
    c = async (h, A, x = { valid: !0 }) => {
      for (const $ in h) {
        const P = h[$];
        if (P) {
          const { _f: D, ...j } = P;
          if (D) {
            const te = l.array.has(D.name),
              me = await fn(P, i, F, t.shouldUseNativeValidation && !A, te);
            if (me[D.name] && ((x.valid = !1), A)) break;
            !A &&
              (V(me, D.name)
                ? te
                  ? Lo(r.errors, me, D.name)
                  : ne(r.errors, D.name, me[D.name])
                : ye(r.errors, D.name));
          }
          j && (await c(j, A, x));
        }
      }
      return x.valid;
    },
    b = () => {
      for (const h of l.unMount) {
        const A = V(n, h);
        A &&
          (A._f.refs ? A._f.refs.every((x) => !mr(x)) : !mr(A._f.ref)) &&
          X(h);
      }
      l.unMount = new Set();
    },
    f = (h, A) => (h && A && ne(i, h, A), !nt(I(), s)),
    m = (h, A, x) =>
      Po(h, l, { ...(o.mount ? i : fe(A) ? s : Ue(h) ? { [h]: A } : A) }, x, A),
    E = (h) => Ot(V(o.mount ? i : s, h, e.shouldUnregister ? V(s, h, []) : [])),
    d = (h, A, x = {}) => {
      const $ = V(n, h);
      let P = A;
      if ($) {
        const D = $._f;
        D &&
          (!D.disabled && ne(i, h, es(A, D)),
          (P = jt(D.ref) && Ee(A) ? "" : A),
          Yn(D.ref)
            ? [...D.ref.options].forEach(
                (j) => (j.selected = P.includes(j.value))
              )
            : D.refs
            ? At(D.ref)
              ? D.refs.length > 1
                ? D.refs.forEach(
                    (j) =>
                      (!j.defaultChecked || !j.disabled) &&
                      (j.checked = Array.isArray(P)
                        ? !!P.find((te) => te === j.value)
                        : P === j.value)
                  )
                : D.refs[0] && (D.refs[0].checked = !!P)
              : D.refs.forEach((j) => (j.checked = j.value === P))
            : Hr(D.ref)
            ? (D.ref.value = "")
            : ((D.ref.value = P),
              D.ref.type || g.values.next({ name: h, values: { ...i } })));
      }
      (x.shouldDirty || x.shouldTouch) &&
        z(h, P, x.shouldTouch, x.shouldDirty, !0),
        x.shouldValidate && U(h);
    },
    y = (h, A, x) => {
      for (const $ in A) {
        const P = A[$],
          D = `${h}.${$}`,
          j = V(n, D);
        (l.array.has(h) || !qt(P) || (j && !j._f)) && !lt(P)
          ? y(D, P, x)
          : d(D, P, x);
      }
    },
    _ = (h, A, x = {}) => {
      const $ = V(n, h),
        P = l.array.has(h),
        D = xe(A);
      ne(i, h, D),
        P
          ? (g.array.next({ name: h, values: { ...i } }),
            (v.isDirty || v.dirtyFields) &&
              x.shouldDirty &&
              g.state.next({
                name: h,
                dirtyFields: Ft(s, i),
                isDirty: f(h, D),
              }))
          : $ && !$._f && !Ee(D)
          ? y(h, D, x)
          : d(h, D, x),
        on(h, l) && g.state.next({ ...r }),
        g.values.next({ name: o.mount ? h : void 0, values: { ...i } });
    },
    w = async (h) => {
      const A = h.target;
      let x = A.name,
        $ = !0;
      const P = V(n, x),
        D = () => (A.type ? gr(P._f) : To(h)),
        j = (te) => {
          $ = Number.isNaN(te) || te === V(i, x, te);
        };
      if (P) {
        let te, me;
        const be = D(),
          ot = h.type === nn.BLUR || h.type === nn.FOCUS_OUT,
          xs =
            (!Bo(P._f) && !t.resolver && !V(r.errors, x) && !P._f.deps) ||
            jo(ot, V(r.touchedFields, x), r.isSubmitted, L, M),
          nr = on(x, l, ot);
        ne(i, x, be),
          ot
            ? (P._f.onBlur && P._f.onBlur(h), p && p(0))
            : P._f.onChange && P._f.onChange(h);
        const sr = z(x, be, ot, !1),
          Ts = !Ne(sr) || nr;
        if (
          (!ot && g.values.next({ name: x, type: h.type, values: { ...i } }),
          xs)
        )
          return (
            v.isValid && C(), Ts && g.state.next({ name: x, ...(nr ? {} : sr) })
          );
        if ((!ot && nr && g.state.next({ ...r }), q(!0, [x]), t.resolver)) {
          const { errors: Yr } = await a([x]);
          if ((j(be), $)) {
            const Rs = dn(r.errors, n, x),
              Zr = dn(Yr, n, Rs.name || x);
            (te = Zr.error), (x = Zr.name), (me = Ne(Yr));
          }
        } else
          (te = (await fn(P, i, F, t.shouldUseNativeValidation))[x]),
            j(be),
            $ && (te ? (me = !1) : v.isValid && (me = await c(n, !0)));
        $ && (P._f.deps && U(P._f.deps), ie(x, me, te, sr));
      }
    },
    N = (h, A) => {
      if (V(r.errors, A) && h.focus) return h.focus(), 1;
    },
    U = async (h, A = {}) => {
      let x, $;
      const P = pr(h);
      if ((q(!0, P), t.resolver)) {
        const D = await u(fe(h) ? h : P);
        (x = Ne(D)), ($ = h ? !P.some((j) => V(D, j)) : x);
      } else
        h
          ? (($ = (
              await Promise.all(
                P.map(async (D) => {
                  const j = V(n, D);
                  return await c(j && j._f ? { [D]: j } : j);
                })
              )
            ).every(Boolean)),
            !(!$ && !r.isValid) && C())
          : ($ = x = await c(n));
      return (
        g.state.next({
          ...(!Ue(h) || (v.isValid && x !== r.isValid) ? {} : { name: h }),
          ...(t.resolver || !h ? { isValid: x } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        A.shouldFocus && !$ && vt(n, N, h ? P : l.mount),
        $
      );
    },
    I = (h) => {
      const A = { ...s, ...(o.mount ? i : {}) };
      return fe(h) ? A : Ue(h) ? V(A, h) : h.map((x) => V(A, x));
    },
    G = (h, A) => ({
      invalid: !!V((A || r).errors, h),
      isDirty: !!V((A || r).dirtyFields, h),
      isTouched: !!V((A || r).touchedFields, h),
      isValidating: !!V((A || r).validatingFields, h),
      error: V((A || r).errors, h),
    }),
    se = (h) => {
      h && pr(h).forEach((A) => ye(r.errors, A)),
        g.state.next({ errors: h ? r.errors : {} });
    },
    Q = (h, A, x) => {
      const $ = (V(n, h, { _f: {} })._f || {}).ref;
      ne(r.errors, h, { ...A, ref: $ }),
        g.state.next({ name: h, errors: r.errors, isValid: !1 }),
        x && x.shouldFocus && $ && $.focus && $.focus();
    },
    K = (h, A) =>
      Ze(h)
        ? g.values.subscribe({ next: (x) => h(m(void 0, A), x) })
        : m(h, A, !0),
    X = (h, A = {}) => {
      for (const x of h ? pr(h) : l.mount)
        l.mount.delete(x),
          l.array.delete(x),
          A.keepValue || (ye(n, x), ye(i, x)),
          !A.keepError && ye(r.errors, x),
          !A.keepDirty && ye(r.dirtyFields, x),
          !A.keepTouched && ye(r.touchedFields, x),
          !A.keepIsValidating && ye(r.validatingFields, x),
          !t.shouldUnregister && !A.keepDefaultValue && ye(s, x);
      g.values.next({ values: { ...i } }),
        g.state.next({ ...r, ...(A.keepDirty ? { isDirty: f() } : {}) }),
        !A.keepIsValid && C();
    },
    ce = ({ disabled: h, name: A, field: x, fields: $, value: P }) => {
      if (He(h)) {
        const D = h ? void 0 : fe(P) ? gr(x ? x._f : V($, A)._f) : P;
        ne(i, A, D), z(A, D, !1, !1, !0);
      }
    },
    Me = (h, A = {}) => {
      let x = V(n, h);
      const $ = He(A.disabled);
      return (
        ne(n, h, {
          ...(x || {}),
          _f: {
            ...(x && x._f ? x._f : { ref: { name: h } }),
            name: h,
            mount: !0,
            ...A,
          },
        }),
        l.mount.add(h),
        x
          ? ce({ field: x, disabled: A.disabled, name: h, value: A.value })
          : ee(h, !0, A.value),
        {
          ...($ ? { disabled: A.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!A.required,
                min: mt(A.min),
                max: mt(A.max),
                minLength: mt(A.minLength),
                maxLength: mt(A.maxLength),
                pattern: mt(A.pattern),
              }
            : {}),
          name: h,
          onChange: w,
          onBlur: w,
          ref: (P) => {
            if (P) {
              Me(h, A), (x = V(n, h));
              const D =
                  (fe(P.value) &&
                    P.querySelectorAll &&
                    P.querySelectorAll("input,select,textarea")[0]) ||
                  P,
                j = $o(D),
                te = x._f.refs || [];
              if (j ? te.find((me) => me === D) : D === x._f.ref) return;
              ne(n, h, {
                _f: {
                  ...x._f,
                  ...(j
                    ? {
                        refs: [
                          ...te.filter(mr),
                          D,
                          ...(Array.isArray(V(s, h)) ? [{}] : []),
                        ],
                        ref: { type: D.type, name: h },
                      }
                    : { ref: D }),
                },
              }),
                ee(h, !1, void 0, D);
            } else
              (x = V(n, h, {})),
                x._f && (x._f.mount = !1),
                (t.shouldUnregister || A.shouldUnregister) &&
                  !(No(l.array, h) && o.action) &&
                  l.unMount.add(h);
          },
        }
      );
    },
    Ie = () => t.shouldFocusError && vt(n, N, l.mount),
    Qe = (h) => {
      He(h) &&
        (g.state.next({ disabled: h }),
        vt(
          n,
          (A, x) => {
            let $ = h;
            const P = V(n, x);
            P && He(P._f.disabled) && ($ || ($ = P._f.disabled)),
              (A.disabled = $);
          },
          0,
          !1
        ));
    },
    Y = (h, A) => async (x) => {
      let $;
      x && (x.preventDefault && x.preventDefault(), x.persist && x.persist());
      let P = xe(i);
      if ((g.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: D, values: j } = await a();
        (r.errors = D), (P = j);
      } else await c(n);
      if ((ye(r.errors, "root"), Ne(r.errors))) {
        g.state.next({ errors: {} });
        try {
          await h(P, x);
        } catch (D) {
          $ = D;
        }
      } else A && (await A({ ...r.errors }, x)), Ie(), setTimeout(Ie);
      if (
        (g.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ne(r.errors) && !$,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        $)
      )
        throw $;
    },
    ve = (h, A = {}) => {
      V(n, h) &&
        (fe(A.defaultValue)
          ? _(h, xe(V(s, h)))
          : (_(h, A.defaultValue), ne(s, h, xe(A.defaultValue))),
        A.keepTouched || ye(r.touchedFields, h),
        A.keepDirty ||
          (ye(r.dirtyFields, h),
          (r.isDirty = A.defaultValue ? f(h, xe(V(s, h))) : f())),
        A.keepError || (ye(r.errors, h), v.isValid && C()),
        g.state.next({ ...r }));
    },
    re = (h, A = {}) => {
      const x = h ? xe(h) : s,
        $ = xe(x),
        P = Ne(h),
        D = P ? s : $;
      if ((A.keepDefaultValues || (s = x), !A.keepValues)) {
        if (A.keepDirtyValues)
          for (const j of l.mount)
            V(r.dirtyFields, j) ? ne(D, j, V(i, j)) : _(j, V(D, j));
        else {
          if (Br && fe(h))
            for (const j of l.mount) {
              const te = V(n, j);
              if (te && te._f) {
                const me = Array.isArray(te._f.refs)
                  ? te._f.refs[0]
                  : te._f.ref;
                if (jt(me)) {
                  const be = me.closest("form");
                  if (be) {
                    be.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (i = e.shouldUnregister ? (A.keepDefaultValues ? xe(s) : {}) : xe(D)),
          g.array.next({ values: { ...D } }),
          g.values.next({ values: { ...D } });
      }
      (l = {
        mount: A.keepDirtyValues ? l.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !v.isValid || !!A.keepIsValid || !!A.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        g.state.next({
          submitCount: A.keepSubmitCount ? r.submitCount : 0,
          isDirty: P
            ? !1
            : A.keepDirty
            ? r.isDirty
            : !!(A.keepDefaultValues && !nt(h, s)),
          isSubmitted: A.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: P
            ? []
            : A.keepDirtyValues
            ? A.keepDefaultValues && i
              ? Ft(s, i)
              : r.dirtyFields
            : A.keepDefaultValues && h
            ? Ft(s, h)
            : {},
          touchedFields: A.keepTouched ? r.touchedFields : {},
          errors: A.keepErrors ? r.errors : {},
          isSubmitSuccessful: A.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ae = (h, A) => re(Ze(h) ? h(i) : h, A);
  return {
    control: {
      register: Me,
      unregister: X,
      getFieldState: G,
      handleSubmit: Y,
      setError: Q,
      _executeSchema: a,
      _getWatch: m,
      _getDirty: f,
      _updateValid: C,
      _removeUnmounted: b,
      _updateFieldArray: O,
      _updateDisabledField: ce,
      _getFieldArray: E,
      _reset: re,
      _resetDefaultValues: () =>
        Ze(t.defaultValues) &&
        t.defaultValues().then((h) => {
          ae(h, t.resetOptions), g.state.next({ isLoading: !1 });
        }),
      _updateFormState: (h) => {
        r = { ...r, ...h };
      },
      _disableForm: Qe,
      _subjects: g,
      _proxyFormState: v,
      _setErrors: J,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(h) {
        o = h;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return l;
      },
      set _names(h) {
        l = h;
      },
      get _formState() {
        return r;
      },
      set _formState(h) {
        r = h;
      },
      get _options() {
        return t;
      },
      set _options(h) {
        t = { ...t, ...h };
      },
    },
    trigger: U,
    register: Me,
    handleSubmit: Y,
    watch: K,
    setValue: _,
    getValues: I,
    reset: ae,
    resetField: ve,
    clearErrors: se,
    unregister: X,
    setError: Q,
    setFocus: (h, A = {}) => {
      const x = V(n, h),
        $ = x && x._f;
      if ($) {
        const P = $.refs ? $.refs[0] : $.ref;
        P.focus && (P.focus(), A.shouldSelect && P.select());
      }
    },
    getFieldState: G,
  };
}
function bl(e = {}) {
  const t = H.useRef(),
    r = H.useRef(),
    [n, s] = H.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Ze(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Ze(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Go(e), formState: n });
  const i = t.current.control;
  return (
    (i._options = e),
    Do({
      subject: i._subjects.state,
      next: (o) => {
        Co(o, i._proxyFormState, i._updateFormState, !0) &&
          s({ ...i._formState });
      },
    }),
    H.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    H.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== n.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, n.isDirty]),
    H.useEffect(() => {
      e.values && !nt(e.values, r.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (r.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    H.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    H.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    H.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = ko(n, i)),
    t.current
  );
}
var pn = function (e, t, r) {
    if (e && "reportValidity" in e) {
      var n = V(r, t);
      e.setCustomValidity((n && n.message) || ""), e.reportValidity();
    }
  },
  ts = function (e, t) {
    var r = function (s) {
      var i = t.fields[s];
      i && i.ref && "reportValidity" in i.ref
        ? pn(i.ref, s, e)
        : i.refs &&
          i.refs.forEach(function (o) {
            return pn(o, s, e);
          });
    };
    for (var n in t.fields) r(n);
  },
  Wo = function (e, t) {
    t.shouldUseNativeValidation && ts(e, t);
    var r = {};
    for (var n in e) {
      var s = V(t.fields, n),
        i = Object.assign(e[n] || {}, { ref: s && s.ref });
      if (zo(t.names || Object.keys(e), n)) {
        var o = Object.assign({}, V(r, n));
        ne(o, "root", i), ne(r, n, o);
      } else ne(r, n, i);
    }
    return r;
  },
  zo = function (e, t) {
    return e.some(function (r) {
      return r.startsWith(t + ".");
    });
  },
  Jo = function (e, t) {
    for (var r = {}; e.length; ) {
      var n = e[0],
        s = n.code,
        i = n.message,
        o = n.path.join(".");
      if (!r[o])
        if ("unionErrors" in n) {
          var l = n.unionErrors[0].errors[0];
          r[o] = { message: l.message, type: l.code };
        } else r[o] = { message: i, type: s };
      if (
        ("unionErrors" in n &&
          n.unionErrors.forEach(function (v) {
            return v.errors.forEach(function (g) {
              return e.push(g);
            });
          }),
        t)
      ) {
        var p = r[o].types,
          S = p && p[n.code];
        r[o] = Jn(o, t, r, s, S ? [].concat(S, n.message) : n.message);
      }
      e.shift();
    }
    return r;
  },
  Sl = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      function (n, s, i) {
        try {
          return Promise.resolve(
            (function (o, l) {
              try {
                var p = Promise.resolve(
                  e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)
                ).then(function (S) {
                  return (
                    i.shouldUseNativeValidation && ts({}, i),
                    { errors: {}, values: r.raw ? n : S }
                  );
                });
              } catch (S) {
                return l(S);
              }
              return p && p.then ? p.then(void 0, l) : p;
            })(0, function (o) {
              if (
                (function (l) {
                  return l.errors != null;
                })(o)
              )
                return {
                  values: {},
                  errors: Wo(
                    Jo(
                      o.errors,
                      !i.shouldUseNativeValidation && i.criteriaMode === "all"
                    ),
                    i
                  ),
                };
              throw o;
            })
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  };
const Al = ({
    register: e,
    name: t,
    label: r,
    errors: n,
    placeholder: s,
    ...i
  }) =>
    pe.jsxs("div", {
      className: "mb-4",
      children: [
        r &&
          pe.jsx("label", {
            className: "block text-[#E5F3FF] font-medium mb-2 max-md:text-sm",
            htmlFor: t,
            children: r,
          }),
        pe.jsx("input", {
          className:
            "w-full p-2 px-3 border border-[rgba(195,169,221,0.90)] rounded-lg focus:border-[#A665FA] focus:outline-none text-white bg-[#544660]",
          id: t,
          placeholder: s ?? "",
          ...e(t),
          ...i,
        }),
        n?.[t] &&
          pe.jsx("p", {
            className: "text-red-500 text-xs mt-2",
            children: n[t].message,
          }),
      ],
    }),
  Ol = ({ register: e, name: t, label: r, errors: n, placeholder: s }) =>
    pe.jsxs("div", {
      className: "mb-4",
      children: [
        r &&
          pe.jsx("label", {
            className: "block text-[#E5F3FF] font-medium mb-2 max-md:text-sm",
            htmlFor: t,
            children: r,
          }),
        pe.jsx("textarea", {
          className:
            "w-full p-2 px-3 border border-[rgba(195,169,221,0.90)] rounded-lg focus:border-[#A665FA] focus:outline-none text-white bg-[#544660]",
          id: t,
          placeholder: s ?? "",
          ...e(t),
        }),
        n?.[t] &&
          pe.jsx("p", {
            className: "text-red-500 text-xs mt-2",
            children: n[t].message,
          }),
      ],
    });
function rs(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ko } = Object.prototype,
  { getPrototypeOf: Gr } = Object,
  Yt = ((e) => (t) => {
    const r = Ko.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => Yt(t) === e),
  Zt = (e) => (t) => typeof t === e,
  { isArray: dt } = Array,
  Et = Zt("undefined");
function Xo(e) {
  return (
    e !== null &&
    !Et(e) &&
    e.constructor !== null &&
    !Et(e.constructor) &&
    Fe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ns = Ve("ArrayBuffer");
function Yo(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ns(e.buffer)),
    t
  );
}
const Zo = Zt("string"),
  Fe = Zt("function"),
  ss = Zt("number"),
  Qt = (e) => e !== null && typeof e == "object",
  Qo = (e) => e === !0 || e === !1,
  Lt = (e) => {
    if (Yt(e) !== "object") return !1;
    const t = Gr(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ea = Ve("Date"),
  ta = Ve("File"),
  ra = Ve("Blob"),
  na = Ve("FileList"),
  sa = (e) => Qt(e) && Fe(e.pipe),
  ia = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Fe(e.append) &&
          ((t = Yt(e)) === "formdata" ||
            (t === "object" &&
              Fe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  oa = Ve("URLSearchParams"),
  aa = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, s;
  if ((typeof e != "object" && (e = [e]), dt(e)))
    for (n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let l;
    for (n = 0; n < o; n++) (l = i[n]), t.call(null, e[l], l, e);
  }
}
function is(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    s;
  for (; n-- > 0; ) if (((s = r[n]), t === s.toLowerCase())) return s;
  return null;
}
const os =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  as = (e) => !Et(e) && e !== os;
function kr() {
  const { caseless: e } = (as(this) && this) || {},
    t = {},
    r = (n, s) => {
      const i = (e && is(t, s)) || s;
      Lt(t[i]) && Lt(n)
        ? (t[i] = kr(t[i], n))
        : Lt(n)
        ? (t[i] = kr({}, n))
        : dt(n)
        ? (t[i] = n.slice())
        : (t[i] = n);
    };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && xt(arguments[n], r);
  return t;
}
const la = (e, t, r, { allOwnKeys: n } = {}) => (
    xt(
      t,
      (s, i) => {
        r && Fe(s) ? (e[i] = rs(s, r)) : (e[i] = s);
      },
      { allOwnKeys: n }
    ),
    e
  ),
  ua = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ca = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  fa = (e, t, r, n) => {
    let s, i, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!n || n(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = r !== !1 && Gr(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  da = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  pa = (e) => {
    if (!e) return null;
    if (dt(e)) return e;
    let t = e.length;
    if (!ss(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  ha = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Gr(Uint8Array)),
  ma = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = n.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  ga = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  ya = Ve("HTMLFormElement"),
  va = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, s) {
      return n.toUpperCase() + s;
    }),
  hn = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  _a = Ve("RegExp"),
  ls = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    xt(r, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (n[i] = o || s);
    }),
      Object.defineProperties(e, n);
  },
  Ea = (e) => {
    ls(e, (t, r) => {
      if (Fe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (Fe(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  wa = (e, t) => {
    const r = {},
      n = (s) => {
        s.forEach((i) => {
          r[i] = !0;
        });
      };
    return dt(e) ? n(e) : n(String(e).split(t)), r;
  },
  ba = () => {},
  Sa = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  yr = "abcdefghijklmnopqrstuvwxyz",
  mn = "0123456789",
  us = { DIGIT: mn, ALPHA: yr, ALPHA_DIGIT: yr + yr.toUpperCase() + mn },
  Aa = (e = 16, t = us.ALPHA_DIGIT) => {
    let r = "";
    const { length: n } = t;
    for (; e--; ) r += t[(Math.random() * n) | 0];
    return r;
  };
function Oa(e) {
  return !!(
    e &&
    Fe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const xa = (e) => {
    const t = new Array(10),
      r = (n, s) => {
        if (Qt(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[s] = n;
            const i = dt(n) ? [] : {};
            return (
              xt(n, (o, l) => {
                const p = r(o, s + 1);
                !Et(p) && (i[l] = p);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  Ta = Ve("AsyncFunction"),
  Ra = (e) => e && (Qt(e) || Fe(e)) && Fe(e.then) && Fe(e.catch),
  R = {
    isArray: dt,
    isArrayBuffer: ns,
    isBuffer: Xo,
    isFormData: ia,
    isArrayBufferView: Yo,
    isString: Zo,
    isNumber: ss,
    isBoolean: Qo,
    isObject: Qt,
    isPlainObject: Lt,
    isUndefined: Et,
    isDate: ea,
    isFile: ta,
    isBlob: ra,
    isRegExp: _a,
    isFunction: Fe,
    isStream: sa,
    isURLSearchParams: oa,
    isTypedArray: ha,
    isFileList: na,
    forEach: xt,
    merge: kr,
    extend: la,
    trim: aa,
    stripBOM: ua,
    inherits: ca,
    toFlatObject: fa,
    kindOf: Yt,
    kindOfTest: Ve,
    endsWith: da,
    toArray: pa,
    forEachEntry: ma,
    matchAll: ga,
    isHTMLForm: ya,
    hasOwnProperty: hn,
    hasOwnProp: hn,
    reduceDescriptors: ls,
    freezeMethods: Ea,
    toObjectSet: wa,
    toCamelCase: va,
    noop: ba,
    toFiniteNumber: Sa,
    findKey: is,
    global: os,
    isContextDefined: as,
    ALPHABET: us,
    generateString: Aa,
    isSpecCompliantForm: Oa,
    toJSONObject: xa,
    isAsyncFn: Ta,
    isThenable: Ra,
  };
function Z(e, t, r, n, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    s && (this.response = s);
}
R.inherits(Z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const cs = Z.prototype,
  fs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  fs[e] = { value: e };
});
Object.defineProperties(Z, fs);
Object.defineProperty(cs, "isAxiosError", { value: !0 });
Z.from = (e, t, r, n, s, i) => {
  const o = Object.create(cs);
  return (
    R.toFlatObject(
      e,
      o,
      function (p) {
        return p !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    Z.call(o, e.message, t, r, n, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const Na = null;
function Cr(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function ds(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gn(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = ds(s)), !r && i ? "[" + s + "]" : s;
        })
        .join(r ? "." : "")
    : t;
}
function Fa(e) {
  return R.isArray(e) && !e.some(Cr);
}
const ka = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function er(e, t, r) {
  if (!R.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = R.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (k, C) {
        return !R.isUndefined(C[k]);
      }
    ));
  const n = r.metaTokens,
    s = r.visitor || v,
    i = r.dots,
    o = r.indexes,
    p = (r.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(t);
  if (!R.isFunction(s)) throw new TypeError("visitor must be a function");
  function S(F) {
    if (F === null) return "";
    if (R.isDate(F)) return F.toISOString();
    if (!p && R.isBlob(F))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(F) || R.isTypedArray(F)
      ? p && typeof Blob == "function"
        ? new Blob([F])
        : Buffer.from(F)
      : F;
  }
  function v(F, k, C) {
    let q = F;
    if (F && !C && typeof F == "object") {
      if (R.endsWith(k, "{}"))
        (k = n ? k : k.slice(0, -2)), (F = JSON.stringify(F));
      else if (
        (R.isArray(F) && Fa(F)) ||
        ((R.isFileList(F) || R.endsWith(k, "[]")) && (q = R.toArray(F)))
      )
        return (
          (k = ds(k)),
          q.forEach(function (B, J) {
            !(R.isUndefined(B) || B === null) &&
              t.append(
                o === !0 ? gn([k], J, i) : o === null ? k : k + "[]",
                S(B)
              );
          }),
          !1
        );
    }
    return Cr(F) ? !0 : (t.append(gn(C, k, i), S(F)), !1);
  }
  const g = [],
    M = Object.assign(ka, {
      defaultVisitor: v,
      convertValue: S,
      isVisitable: Cr,
    });
  function L(F, k) {
    if (!R.isUndefined(F)) {
      if (g.indexOf(F) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      g.push(F),
        R.forEach(F, function (q, O) {
          (!(R.isUndefined(q) || q === null) &&
            s.call(t, q, R.isString(O) ? O.trim() : O, k, M)) === !0 &&
            L(q, k ? k.concat(O) : [O]);
        }),
        g.pop();
    }
  }
  if (!R.isObject(e)) throw new TypeError("data must be an object");
  return L(e), t;
}
function yn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function Wr(e, t) {
  (this._pairs = []), e && er(e, this, t);
}
const ps = Wr.prototype;
ps.append = function (t, r) {
  this._pairs.push([t, r]);
};
ps.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, yn);
      }
    : yn;
  return this._pairs
    .map(function (s) {
      return r(s[0]) + "=" + r(s[1]);
    }, "")
    .join("&");
};
function Ca(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function hs(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Ca,
    s = r && r.serialize;
  let i;
  if (
    (s
      ? (i = s(t, r))
      : (i = R.isURLSearchParams(t) ? t.toString() : new Wr(t, r).toString(n)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class vn {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const ms = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Da = typeof URLSearchParams < "u" ? URLSearchParams : Wr,
  Pa = typeof FormData < "u" ? FormData : null,
  La = typeof Blob < "u" ? Blob : null,
  Ma = {
    isBrowser: !0,
    classes: { URLSearchParams: Da, FormData: Pa, Blob: La },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  gs = typeof window < "u" && typeof document < "u",
  Ua = ((e) => gs && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  $a =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Va = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: gs,
        hasStandardBrowserEnv: Ua,
        hasStandardBrowserWebWorkerEnv: $a,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $e = { ...Va, ...Ma };
function Ia(e, t) {
  return er(
    e,
    new $e.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, s, i) {
          return $e.isNode && R.isBuffer(r)
            ? (this.append(n, r.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ba(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function ja(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++) (i = r[n]), (t[i] = e[i]);
  return t;
}
function ys(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      p = i >= r.length;
    return (
      (o = !o && R.isArray(s) ? s.length : o),
      p
        ? (R.hasOwnProp(s, o) ? (s[o] = [s[o], n]) : (s[o] = n), !l)
        : ((!s[o] || !R.isObject(s[o])) && (s[o] = []),
          t(r, n, s[o], i) && R.isArray(s[o]) && (s[o] = ja(s[o])),
          !l)
    );
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const r = {};
    return (
      R.forEachEntry(e, (n, s) => {
        t(Ba(n), s, r, 0);
      }),
      r
    );
  }
  return null;
}
function Ha(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const zr = {
  transitional: ms,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "",
        s = n.indexOf("application/json") > -1,
        i = R.isObject(t);
      if ((i && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t)))
        return s ? JSON.stringify(ys(t)) : t;
      if (
        R.isArrayBuffer(t) ||
        R.isBuffer(t) ||
        R.isStream(t) ||
        R.isFile(t) ||
        R.isBlob(t)
      )
        return t;
      if (R.isArrayBufferView(t)) return t.buffer;
      if (R.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Ia(t, this.formSerializer).toString();
        if ((l = R.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return er(
            l ? { "files[]": t } : t,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return i || s ? (r.setContentType("application/json", !1), Ha(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || zr.transitional,
        n = r && r.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && R.isString(t) && ((n && !this.responseType) || s)) {
        const o = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? Z.from(l, Z.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: $e.classes.FormData, Blob: $e.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zr.headers[e] = {};
});
const Jr = zr,
  qa = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ga = (e) => {
    const t = {};
    let r, n, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (r = o.substring(0, s).trim().toLowerCase()),
              (n = o.substring(s + 1).trim()),
              !(!r || (t[r] && qa[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  },
  _n = Symbol("internals");
function gt(e) {
  return e && String(e).trim().toLowerCase();
}
function Mt(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Mt) : String(e);
}
function Wa(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const za = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function vr(e, t, r, n, s) {
  if (R.isFunction(n)) return n.call(this, t, r);
  if ((s && (t = r), !!R.isString(t))) {
    if (R.isString(n)) return t.indexOf(n) !== -1;
    if (R.isRegExp(n)) return n.test(t);
  }
}
function Ja(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ka(e, t) {
  const r = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class tr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(l, p, S) {
      const v = gt(p);
      if (!v) throw new Error("header name must be a non-empty string");
      const g = R.findKey(s, v);
      (!g || s[g] === void 0 || S === !0 || (S === void 0 && s[g] !== !1)) &&
        (s[g || p] = Mt(l));
    }
    const o = (l, p) => R.forEach(l, (S, v) => i(S, v, p));
    return (
      R.isPlainObject(t) || t instanceof this.constructor
        ? o(t, r)
        : R.isString(t) && (t = t.trim()) && !za(t)
        ? o(Ga(t), r)
        : t != null && i(r, t, n),
      this
    );
  }
  get(t, r) {
    if (((t = gt(t)), t)) {
      const n = R.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r) return s;
        if (r === !0) return Wa(s);
        if (R.isFunction(r)) return r.call(this, s, n);
        if (R.isRegExp(r)) return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = gt(t)), t)) {
      const n = R.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || vr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (((o = gt(o)), o)) {
        const l = R.findKey(n, o);
        l && (!r || vr(n, n[l], l, r)) && (delete n[l], (s = !0));
      }
    }
    return R.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || vr(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      R.forEach(this, (s, i) => {
        const o = R.findKey(n, i);
        if (o) {
          (r[o] = Mt(s)), delete r[i];
          return;
        }
        const l = t ? Ja(i) : String(i).trim();
        l !== i && delete r[i], (r[l] = Mt(s)), (n[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      R.forEach(this, (n, s) => {
        n != null && n !== !1 && (r[s] = t && R.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[_n] = this[_n] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const l = gt(o);
      n[l] || (Ka(s, o), (n[l] = !0));
    }
    return R.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
tr.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
R.reduceDescriptors(tr.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
R.freezeMethods(tr);
const We = tr;
function _r(e, t) {
  const r = this || Jr,
    n = t || r,
    s = We.from(n.headers);
  let i = n.data;
  return (
    R.forEach(e, function (l) {
      i = l.call(r, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function vs(e) {
  return !!(e && e.__CANCEL__);
}
function Tt(e, t, r) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
R.inherits(Tt, Z, { __CANCEL__: !0 });
function Xa(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new Z(
          "Request failed with status code " + r.status,
          [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
const Ya = $e.hasStandardBrowserEnv
  ? {
      write(e, t, r, n, s, i) {
        const o = [e + "=" + encodeURIComponent(t)];
        R.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
          R.isString(n) && o.push("path=" + n),
          R.isString(s) && o.push("domain=" + s),
          i === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Za(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _s(e, t) {
  return e && !Za(t) ? Qa(e, t) : t;
}
const el = $e.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
      let n;
      function s(i) {
        let o = i;
        return (
          t && (r.setAttribute("href", o), (o = r.href)),
          r.setAttribute("href", o),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname:
              r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
          }
        );
      }
      return (
        (n = s(window.location.href)),
        function (o) {
          const l = R.isString(o) ? s(o) : o;
          return l.protocol === n.protocol && l.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function tl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function rl(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (p) {
      const S = Date.now(),
        v = n[i];
      o || (o = S), (r[s] = p), (n[s] = S);
      let g = i,
        M = 0;
      for (; g !== s; ) (M += r[g++]), (g = g % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), S - o < t)) return;
      const L = v && S - v;
      return L ? Math.round((M * 1e3) / L) : void 0;
    }
  );
}
function En(e, t) {
  let r = 0;
  const n = rl(50, 250);
  return (s) => {
    const i = s.loaded,
      o = s.lengthComputable ? s.total : void 0,
      l = i - r,
      p = n(l),
      S = i <= o;
    r = i;
    const v = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: p || void 0,
      estimated: p && o && S ? (o - i) / p : void 0,
      event: s,
    };
    (v[t ? "download" : "upload"] = !0), e(v);
  };
}
const nl = typeof XMLHttpRequest < "u",
  sl =
    nl &&
    function (e) {
      return new Promise(function (r, n) {
        let s = e.data;
        const i = We.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: l } = e,
          p;
        function S() {
          e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener("abort", p);
        }
        let v;
        if (R.isFormData(s)) {
          if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((v = i.getContentType()) !== !1) {
            const [k, ...C] = v
              ? v
                  .split(";")
                  .map((q) => q.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([k || "multipart/form-data", ...C].join("; "));
          }
        }
        let g = new XMLHttpRequest();
        if (e.auth) {
          const k = e.auth.username || "",
            C = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(k + ":" + C));
        }
        const M = _s(e.baseURL, e.url);
        g.open(e.method.toUpperCase(), hs(M, e.params, e.paramsSerializer), !0),
          (g.timeout = e.timeout);
        function L() {
          if (!g) return;
          const k = We.from(
              "getAllResponseHeaders" in g && g.getAllResponseHeaders()
            ),
            q = {
              data:
                !o || o === "text" || o === "json"
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: k,
              config: e,
              request: g,
            };
          Xa(
            function (B) {
              r(B), S();
            },
            function (B) {
              n(B), S();
            },
            q
          ),
            (g = null);
        }
        if (
          ("onloadend" in g
            ? (g.onloadend = L)
            : (g.onreadystatechange = function () {
                !g ||
                  g.readyState !== 4 ||
                  (g.status === 0 &&
                    !(g.responseURL && g.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(L);
              }),
          (g.onabort = function () {
            g &&
              (n(new Z("Request aborted", Z.ECONNABORTED, e, g)), (g = null));
          }),
          (g.onerror = function () {
            n(new Z("Network Error", Z.ERR_NETWORK, e, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let C = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const q = e.transitional || ms;
            e.timeoutErrorMessage && (C = e.timeoutErrorMessage),
              n(
                new Z(
                  C,
                  q.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
                  e,
                  g
                )
              ),
              (g = null);
          }),
          $e.hasStandardBrowserEnv &&
            (l && R.isFunction(l) && (l = l(e)), l || (l !== !1 && el(M))))
        ) {
          const k =
            e.xsrfHeaderName && e.xsrfCookieName && Ya.read(e.xsrfCookieName);
          k && i.set(e.xsrfHeaderName, k);
        }
        s === void 0 && i.setContentType(null),
          "setRequestHeader" in g &&
            R.forEach(i.toJSON(), function (C, q) {
              g.setRequestHeader(q, C);
            }),
          R.isUndefined(e.withCredentials) ||
            (g.withCredentials = !!e.withCredentials),
          o && o !== "json" && (g.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            g.addEventListener("progress", En(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            g.upload &&
            g.upload.addEventListener("progress", En(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((p = (k) => {
              g &&
                (n(!k || k.type ? new Tt(null, e, g) : k),
                g.abort(),
                (g = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(p),
            e.signal &&
              (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
        const F = tl(M);
        if (F && $e.protocols.indexOf(F) === -1) {
          n(new Z("Unsupported protocol " + F + ":", Z.ERR_BAD_REQUEST, e));
          return;
        }
        g.send(s || null);
      });
    },
  Dr = { http: Na, xhr: sl };
R.forEach(Dr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const wn = (e) => `- ${e}`,
  il = (e) => R.isFunction(e) || e === null || e === !1,
  Es = {
    getAdapter: (e) => {
      e = R.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, n;
      const s = {};
      for (let i = 0; i < t; i++) {
        r = e[i];
        let o;
        if (
          ((n = r),
          !il(r) && ((n = Dr[(o = String(r)).toLowerCase()]), n === void 0))
        )
          throw new Z(`Unknown adapter '${o}'`);
        if (n) break;
        s[o || "#" + i] = n;
      }
      if (!n) {
        const i = Object.entries(s).map(
          ([l, p]) =>
            `adapter ${l} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(wn).join(`
`)
            : " " + wn(i[0])
          : "as no adapter specified";
        throw new Z(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return n;
    },
    adapters: Dr,
  };
function Er(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Tt(null, e);
}
function bn(e) {
  return (
    Er(e),
    (e.headers = We.from(e.headers)),
    (e.data = _r.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Es.getAdapter(e.adapter || Jr.adapter)(e).then(
      function (n) {
        return (
          Er(e),
          (n.data = _r.call(e, e.transformResponse, n)),
          (n.headers = We.from(n.headers)),
          n
        );
      },
      function (n) {
        return (
          vs(n) ||
            (Er(e),
            n &&
              n.response &&
              ((n.response.data = _r.call(e, e.transformResponse, n.response)),
              (n.response.headers = We.from(n.response.headers)))),
          Promise.reject(n)
        );
      }
    )
  );
}
const Sn = (e) => (e instanceof We ? e.toJSON() : e);
function ut(e, t) {
  t = t || {};
  const r = {};
  function n(S, v, g) {
    return R.isPlainObject(S) && R.isPlainObject(v)
      ? R.merge.call({ caseless: g }, S, v)
      : R.isPlainObject(v)
      ? R.merge({}, v)
      : R.isArray(v)
      ? v.slice()
      : v;
  }
  function s(S, v, g) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(S)) return n(void 0, S, g);
    } else return n(S, v, g);
  }
  function i(S, v) {
    if (!R.isUndefined(v)) return n(void 0, v);
  }
  function o(S, v) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(S)) return n(void 0, S);
    } else return n(void 0, v);
  }
  function l(S, v, g) {
    if (g in t) return n(S, v);
    if (g in e) return n(void 0, S);
  }
  const p = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (S, v) => s(Sn(S), Sn(v), !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, e, t)), function (v) {
      const g = p[v] || s,
        M = g(e[v], t[v], v);
      (R.isUndefined(M) && g !== l) || (r[v] = M);
    }),
    r
  );
}
const ws = "1.6.7",
  Kr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Kr[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const An = {};
Kr.transitional = function (t, r, n) {
  function s(i, o) {
    return (
      "[Axios v" +
      ws +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (i, o, l) => {
    if (t === !1)
      throw new Z(
        s(o, " has been removed" + (r ? " in " + r : "")),
        Z.ERR_DEPRECATED
      );
    return (
      r &&
        !An[o] &&
        ((An[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, l) : !0
    );
  };
};
function ol(e, t, r) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s],
      o = t[i];
    if (o) {
      const l = e[i],
        p = l === void 0 || o(l, i, e);
      if (p !== !0)
        throw new Z("option " + i + " must be " + p, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Z("Unknown option " + i, Z.ERR_BAD_OPTION);
  }
}
const Pr = { assertOptions: ol, validators: Kr },
  Je = Pr.validators;
class Wt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vn(), response: new vn() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        n.stack
          ? i &&
            !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (n.stack +=
              `
` + i)
          : (n.stack = i);
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = ut(this.defaults, r));
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 &&
      Pr.assertOptions(
        n,
        {
          silentJSONParsing: Je.transitional(Je.boolean),
          forcedJSONParsing: Je.transitional(Je.boolean),
          clarifyTimeoutError: Je.transitional(Je.boolean),
        },
        !1
      ),
      s != null &&
        (R.isFunction(s)
          ? (r.paramsSerializer = { serialize: s })
          : Pr.assertOptions(
              s,
              { encode: Je.function, serialize: Je.function },
              !0
            )),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let o = i && R.merge(i.common, i[r.method]);
    i &&
      R.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (F) => {
          delete i[F];
        }
      ),
      (r.headers = We.concat(o, i));
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function (k) {
      (typeof k.runWhen == "function" && k.runWhen(r) === !1) ||
        ((p = p && k.synchronous), l.unshift(k.fulfilled, k.rejected));
    });
    const S = [];
    this.interceptors.response.forEach(function (k) {
      S.push(k.fulfilled, k.rejected);
    });
    let v,
      g = 0,
      M;
    if (!p) {
      const F = [bn.bind(this), void 0];
      for (
        F.unshift.apply(F, l),
          F.push.apply(F, S),
          M = F.length,
          v = Promise.resolve(r);
        g < M;

      )
        v = v.then(F[g++], F[g++]);
      return v;
    }
    M = l.length;
    let L = r;
    for (g = 0; g < M; ) {
      const F = l[g++],
        k = l[g++];
      try {
        L = F(L);
      } catch (C) {
        k.call(this, C);
        break;
      }
    }
    try {
      v = bn.call(this, L);
    } catch (F) {
      return Promise.reject(F);
    }
    for (g = 0, M = S.length; g < M; ) v = v.then(S[g++], S[g++]);
    return v;
  }
  getUri(t) {
    t = ut(this.defaults, t);
    const r = _s(t.baseURL, t.url);
    return hs(r, t.params, t.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function (t) {
  Wt.prototype[t] = function (r, n) {
    return this.request(
      ut(n || {}, { method: t, url: r, data: (n || {}).data })
    );
  };
});
R.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (i, o, l) {
      return this.request(
        ut(l || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Wt.prototype[t] = r()), (Wt.prototype[t + "Form"] = r(!0));
});
const Ut = Wt;
class Xr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; ) n._listeners[i](s);
      n._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((l) => {
          n.subscribe(l), (i = l);
        }).then(s);
        return (
          (o.cancel = function () {
            n.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, l) {
        n.reason || ((n.reason = new Tt(i, o, l)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new Xr(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const al = Xr;
function ll(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function ul(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Lr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Lr).forEach(([e, t]) => {
  Lr[t] = e;
});
const cl = Lr;
function bs(e) {
  const t = new Ut(e),
    r = rs(Ut.prototype.request, t);
  return (
    R.extend(r, Ut.prototype, t, { allOwnKeys: !0 }),
    R.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (s) {
      return bs(ut(e, s));
    }),
    r
  );
}
const he = bs(Jr);
he.Axios = Ut;
he.CanceledError = Tt;
he.CancelToken = al;
he.isCancel = vs;
he.VERSION = ws;
he.toFormData = er;
he.AxiosError = Z;
he.Cancel = he.CanceledError;
he.all = function (t) {
  return Promise.all(t);
};
he.spread = ll;
he.isAxiosError = ul;
he.mergeConfig = ut;
he.AxiosHeaders = We;
he.formToJSON = (e) => ys(R.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = Es.getAdapter;
he.HttpStatusCode = cl;
he.default = he;
var Ss = {
  NVM_INC: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/include/node",
  MANPATH:
    "/Users/dohoangviet/.nvm/versions/node/v16.20.2/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/dohoangviet/.nvm/versions/node/v16.20.2/share/man:/opt/homebrew/share/man::",
  npm_package_dependencies_vite_plugin_babel_macros: "^1.0.6",
  TERM_PROGRAM: "vscode",
  NODE: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node",
  INIT_CWD: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe",
  NVM_CD_FLAGS: "-q",
  npm_package_devDependencies_typescript: "^5.2.2",
  npm_package_dependencies_react_hook_form: "^7.51.0",
  npm_package_dependencies_axios: "^1.6.7",
  npm_package_dependencies__esbuild_plugins_node_globals_polyfill: "^0.2.3",
  npm_config_version_git_tag: "true",
  SHELL: "/bin/zsh",
  TERM: "xterm-256color",
  npm_package_devDependencies_vite: "^5.1.4",
  npm_package_dependencies_vite_plugin_svgr: "^4.2.0",
  npm_package_dependencies__hookform_resolvers: "^3.3.4",
  TMPDIR: "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/",
  HOMEBREW_REPOSITORY: "/opt/homebrew",
  npm_package_scripts_lint:
    "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  npm_config_init_license: "MIT",
  npm_config_email: "hvietdo99@gmail.com",
  TERM_PROGRAM_VERSION: "1.87.2",
  npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
  npm_package_dependencies_react_loading_skeleton: "^3.4.0",
  npm_package_scripts_dev: "vite",
  MallocNanoZone: "0",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  ZDOTDIR: "/Users/dohoangviet",
  npm_package_dependencies_postcss: "^8.4.35",
  npm_package_private: "true",
  npm_config_registry: "https://registry.yarnpkg.com",
  ZSH: "/Users/dohoangviet/.oh-my-zsh",
  npm_package_devDependencies_eslint_plugin_react_refresh: "^0.4.5",
  npm_package_dependencies_react_dom: "^18.2.0",
  npm_package_dependencies__headlessui_react: "^1.7.18",
  npm_package_readmeFilename: "README.md",
  USER: "dohoangviet",
  NVM_DIR: "/Users/dohoangviet/.nvm",
  npm_package_description: "## Getting started",
  LS_COLORS:
    "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43",
  npm_package_devDependencies__types_react: "^18.2.56",
  npm_package_dependencies_wagmi: "^2.5.7",
  npm_package_dependencies__ethersproject_bignumber: "^5.7.0",
  COMMAND_MODE: "unix2003",
  npm_package_dependencies_viem: "^2.7.16",
  npm_package_dependencies_react_icons: "^5.0.1",
  SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.BinIKLjklB/Listeners",
  __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
  npm_package_devDependencies_eslint: "^8.56.0",
  npm_package_dependencies_styled_components: "^6.1.8",
  npm_execpath: "/usr/local/lib/node_modules/yarn/bin/yarn.js",
  npm_package_devDependencies__typescript_eslint_eslint_plugin: "^7.0.2",
  npm_package_dependencies__ethersproject_constants: "^5.7.0",
  PAGER: "less",
  npm_package_dependencies_vite_tsconfig_paths: "^4.3.1",
  LSCOLORS: "Gxfxcxdxbxegedabagacad",
  npm_package_devDependencies__types_react_dom: "^18.2.19",
  npm_package_devDependencies__typescript_eslint_parser: "^7.0.2",
  PATH: "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/yarn--1711632754051-0.9254903284661504:/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe/node_modules/.bin:/Users/dohoangviet/.config/yarn/link/node_modules/.bin:/Users/dohoangviet/.yarn/bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/lib/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node_modules/npm/bin/node-gyp-bin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin:/Users/dohoangviet/.local/share/solana/install/active_release/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin:/Users/dohoangviet/.local/share/solana/install/active_release/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/dohoangviet/.cargo/bin:/Users/dohoangviet/.foundry/bin",
  npm_config_argv:
    '{"remain":[],"cooked":["run","build"],"original":["build"]}',
  _: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe/node_modules/.bin/vite",
  __CFBundleIdentifier: "com.microsoft.VSCode",
  USER_ZDOTDIR: "/Users/dohoangviet",
  npm_package_dependencies_react_toastify: "^10.0.4",
  npm_package_dependencies_bignumber_js: "^9.1.2",
  PWD: "/Users/dohoangviet/Desktop/HOLA/Opclouds/opc-fe",
  npm_package_devDependencies_tailwindcss: "^3.4.1",
  npm_package_dependencies__ethersproject_abi: "^5.7.0",
  npm_package_devDependencies_eslint_plugin_react_hooks: "^4.6.0",
  npm_package_scripts_preview: "vite preview",
  npm_lifecycle_event: "build",
  npm_package_dependencies_ua_parser_js: "^1.0.37",
  LANG: "en_US.UTF-8",
  npm_package_name: "vite-project",
  npm_package_dependencies_autoprefixer: "^10.4.17",
  npm_package_scripts_build: "tsc && vite build",
  npm_config_version_commit_hooks: "true",
  XPC_FLAGS: "0x0",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  npm_package_dependencies_react_router_dom: "^6.22.2",
  npm_config_username: "mantleswapv3",
  npm_package_dependencies__web3modal_wagmi: "^4.0.10",
  npm_package_dependencies__types_ua_parser_js: "^0.7.39",
  npm_config_bin_links: "true",
  npm_package_dependencies__tanstack_react_query: "^5.24.1",
  XPC_SERVICE_NAME: "0",
  npm_package_version: "0.0.0",
  VSCODE_INJECTION: "1",
  HOME: "/Users/dohoangviet",
  SHLVL: "2",
  npm_package_type: "module",
  VSCODE_GIT_ASKPASS_MAIN:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
  npm_package_dependencies_framer_motion: "^11.0.8",
  npm_package_dependencies__ethersproject_address: "^5.7.0",
  npm_config_save_prefix: "^",
  npm_config_strict_ssl: "true",
  HOMEBREW_PREFIX: "/opt/homebrew",
  npm_config_version_git_message: "v%s",
  LOGNAME: "dohoangviet",
  LESS: "-R",
  YARN_WRAP_OUTPUT: "false",
  npm_lifecycle_script: "tsc && vite build",
  npm_package_dependencies_zod: "^3.22.4",
  VSCODE_GIT_IPC_HANDLE:
    "/var/folders/8z/7bjrw5gx7p39xb1fwt7xwt1r0000gn/T/vscode-git-033492ea56.sock",
  npm_package_dependencies_react: "^18.2.0",
  npm_package_dependencies_ethers: "^6.11.1",
  NVM_BIN: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin",
  npm_config_version_git_sign: "",
  npm_config_ignore_scripts: "",
  npm_config_user_agent: "yarn/1.22.19 npm/? node/v16.20.2 darwin arm64",
  HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
  INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:",
  GIT_ASKPASS:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
  VSCODE_GIT_ASKPASS_NODE:
    "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
  npm_config_init_version: "1.0.0",
  npm_config_ignore_optional: "",
  COLORTERM: "truecolor",
  npm_node_execpath: "/Users/dohoangviet/.nvm/versions/node/v16.20.2/bin/node",
  npm_config_version_tag_prefix: "v",
  NODE_ENV: "production",
  VITE_WALLET_PROJECT_ID: "b4a77bd569642fa0e44c611836e41aef",
  VITE_SHEET_URL:
    "https://sheet.best/api/sheets/3247c961-6cb3-4e9e-acb1-5e1e7ab49731",
  VITE_SHEET_VM_URL:
    "https://sheet.best/api/sheets/1eb2d354-9481-495d-af82-a3f5516e4643",
};
const xl = Ss.VITE_SHEET_URL,
  Tl = { address: "0x00000000000000000000000000000000000000", abi: Fs },
  Rl = Ss.VITE_SHEET_VM_URL;
var fl = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  wr = Math.ceil,
  Te = Math.floor,
  we = "[BigNumber Error] ",
  On = we + "Number primitive has more than 15 significant digits: ",
  De = 1e14,
  W = 14,
  br = 9007199254740991,
  Sr = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Ke = 1e7,
  ge = 1e9;
function As(e) {
  var t,
    r,
    n,
    s = (O.prototype = { constructor: O, toString: null, valueOf: null }),
    i = new O(1),
    o = 20,
    l = 4,
    p = -7,
    S = 21,
    v = -1e7,
    g = 1e7,
    M = !1,
    L = 1,
    F = 0,
    k = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: "",
    },
    C = "0123456789abcdefghijklmnopqrstuvwxyz",
    q = !0;
  function O(a, u) {
    var c,
      b,
      f,
      m,
      E,
      d,
      y,
      _,
      w = this;
    if (!(w instanceof O)) return new O(a, u);
    if (u == null) {
      if (a && a._isBigNumber === !0) {
        (w.s = a.s),
          !a.c || a.e > g
            ? (w.c = w.e = null)
            : a.e < v
            ? (w.c = [(w.e = 0)])
            : ((w.e = a.e), (w.c = a.c.slice()));
        return;
      }
      if ((d = typeof a == "number") && a * 0 == 0) {
        if (((w.s = 1 / a < 0 ? ((a = -a), -1) : 1), a === ~~a)) {
          for (m = 0, E = a; E >= 10; E /= 10, m++);
          m > g ? (w.c = w.e = null) : ((w.e = m), (w.c = [a]));
          return;
        }
        _ = String(a);
      } else {
        if (!fl.test((_ = String(a)))) return n(w, _, d);
        w.s = _.charCodeAt(0) == 45 ? ((_ = _.slice(1)), -1) : 1;
      }
      (m = _.indexOf(".")) > -1 && (_ = _.replace(".", "")),
        (E = _.search(/e/i)) > 0
          ? (m < 0 && (m = E), (m += +_.slice(E + 1)), (_ = _.substring(0, E)))
          : m < 0 && (m = _.length);
    } else {
      if ((ue(u, 2, C.length, "Base"), u == 10 && q))
        return (w = new O(a)), z(w, o + w.e + 1, l);
      if (((_ = String(a)), (d = typeof a == "number"))) {
        if (a * 0 != 0) return n(w, _, d, u);
        if (
          ((w.s = 1 / a < 0 ? ((_ = _.slice(1)), -1) : 1),
          O.DEBUG && _.replace(/^0\.0*|\./, "").length > 15)
        )
          throw Error(On + a);
      } else w.s = _.charCodeAt(0) === 45 ? ((_ = _.slice(1)), -1) : 1;
      for (c = C.slice(0, u), m = E = 0, y = _.length; E < y; E++)
        if (c.indexOf((b = _.charAt(E))) < 0) {
          if (b == ".") {
            if (E > m) {
              m = y;
              continue;
            }
          } else if (
            !f &&
            ((_ == _.toUpperCase() && (_ = _.toLowerCase())) ||
              (_ == _.toLowerCase() && (_ = _.toUpperCase())))
          ) {
            (f = !0), (E = -1), (m = 0);
            continue;
          }
          return n(w, String(a), d, u);
        }
      (d = !1),
        (_ = r(_, u, 10, w.s)),
        (m = _.indexOf(".")) > -1 ? (_ = _.replace(".", "")) : (m = _.length);
    }
    for (E = 0; _.charCodeAt(E) === 48; E++);
    for (y = _.length; _.charCodeAt(--y) === 48; );
    if ((_ = _.slice(E, ++y))) {
      if (((y -= E), d && O.DEBUG && y > 15 && (a > br || a !== Te(a))))
        throw Error(On + w.s * a);
      if ((m = m - E - 1) > g) w.c = w.e = null;
      else if (m < v) w.c = [(w.e = 0)];
      else {
        if (
          ((w.e = m), (w.c = []), (E = (m + 1) % W), m < 0 && (E += W), E < y)
        ) {
          for (E && w.c.push(+_.slice(0, E)), y -= W; E < y; )
            w.c.push(+_.slice(E, (E += W)));
          E = W - (_ = _.slice(E)).length;
        } else E -= y;
        for (; E--; _ += "0");
        w.c.push(+_);
      }
    } else w.c = [(w.e = 0)];
  }
  (O.clone = As),
    (O.ROUND_UP = 0),
    (O.ROUND_DOWN = 1),
    (O.ROUND_CEIL = 2),
    (O.ROUND_FLOOR = 3),
    (O.ROUND_HALF_UP = 4),
    (O.ROUND_HALF_DOWN = 5),
    (O.ROUND_HALF_EVEN = 6),
    (O.ROUND_HALF_CEIL = 7),
    (O.ROUND_HALF_FLOOR = 8),
    (O.EUCLID = 9),
    (O.config = O.set =
      function (a) {
        var u, c;
        if (a != null)
          if (typeof a == "object") {
            if (
              (a.hasOwnProperty((u = "DECIMAL_PLACES")) &&
                ((c = a[u]), ue(c, 0, ge, u), (o = c)),
              a.hasOwnProperty((u = "ROUNDING_MODE")) &&
                ((c = a[u]), ue(c, 0, 8, u), (l = c)),
              a.hasOwnProperty((u = "EXPONENTIAL_AT")) &&
                ((c = a[u]),
                c && c.pop
                  ? (ue(c[0], -ge, 0, u),
                    ue(c[1], 0, ge, u),
                    (p = c[0]),
                    (S = c[1]))
                  : (ue(c, -ge, ge, u), (p = -(S = c < 0 ? -c : c)))),
              a.hasOwnProperty((u = "RANGE")))
            )
              if (((c = a[u]), c && c.pop))
                ue(c[0], -ge, -1, u),
                  ue(c[1], 1, ge, u),
                  (v = c[0]),
                  (g = c[1]);
              else if ((ue(c, -ge, ge, u), c)) v = -(g = c < 0 ? -c : c);
              else throw Error(we + u + " cannot be zero: " + c);
            if (a.hasOwnProperty((u = "CRYPTO")))
              if (((c = a[u]), c === !!c))
                if (c)
                  if (
                    typeof crypto < "u" &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    M = c;
                  else throw ((M = !c), Error(we + "crypto unavailable"));
                else M = c;
              else throw Error(we + u + " not true or false: " + c);
            if (
              (a.hasOwnProperty((u = "MODULO_MODE")) &&
                ((c = a[u]), ue(c, 0, 9, u), (L = c)),
              a.hasOwnProperty((u = "POW_PRECISION")) &&
                ((c = a[u]), ue(c, 0, ge, u), (F = c)),
              a.hasOwnProperty((u = "FORMAT")))
            )
              if (((c = a[u]), typeof c == "object")) k = c;
              else throw Error(we + u + " not an object: " + c);
            if (a.hasOwnProperty((u = "ALPHABET")))
              if (
                ((c = a[u]),
                typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c))
              )
                (q = c.slice(0, 10) == "0123456789"), (C = c);
              else throw Error(we + u + " invalid: " + c);
          } else throw Error(we + "Object expected: " + a);
        return {
          DECIMAL_PLACES: o,
          ROUNDING_MODE: l,
          EXPONENTIAL_AT: [p, S],
          RANGE: [v, g],
          CRYPTO: M,
          MODULO_MODE: L,
          POW_PRECISION: F,
          FORMAT: k,
          ALPHABET: C,
        };
      }),
    (O.isBigNumber = function (a) {
      if (!a || a._isBigNumber !== !0) return !1;
      if (!O.DEBUG) return !0;
      var u,
        c,
        b = a.c,
        f = a.e,
        m = a.s;
      e: if ({}.toString.call(b) == "[object Array]") {
        if ((m === 1 || m === -1) && f >= -ge && f <= ge && f === Te(f)) {
          if (b[0] === 0) {
            if (f === 0 && b.length === 1) return !0;
            break e;
          }
          if (
            ((u = (f + 1) % W), u < 1 && (u += W), String(b[0]).length == u)
          ) {
            for (u = 0; u < b.length; u++)
              if (((c = b[u]), c < 0 || c >= De || c !== Te(c))) break e;
            if (c !== 0) return !0;
          }
        }
      } else if (
        b === null &&
        f === null &&
        (m === null || m === 1 || m === -1)
      )
        return !0;
      throw Error(we + "Invalid BigNumber: " + a);
    }),
    (O.maximum = O.max =
      function () {
        return J(arguments, -1);
      }),
    (O.minimum = O.min =
      function () {
        return J(arguments, 1);
      }),
    (O.random = (function () {
      var a = 9007199254740992,
        u =
          (Math.random() * a) & 2097151
            ? function () {
                return Te(Math.random() * a);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 +
                  ((Math.random() * 8388608) | 0)
                );
              };
      return function (c) {
        var b,
          f,
          m,
          E,
          d,
          y = 0,
          _ = [],
          w = new O(i);
        if ((c == null ? (c = o) : ue(c, 0, ge), (E = wr(c / W)), M))
          if (crypto.getRandomValues) {
            for (b = crypto.getRandomValues(new Uint32Array((E *= 2))); y < E; )
              (d = b[y] * 131072 + (b[y + 1] >>> 11)),
                d >= 9e15
                  ? ((f = crypto.getRandomValues(new Uint32Array(2))),
                    (b[y] = f[0]),
                    (b[y + 1] = f[1]))
                  : (_.push(d % 1e14), (y += 2));
            y = E / 2;
          } else if (crypto.randomBytes) {
            for (b = crypto.randomBytes((E *= 7)); y < E; )
              (d =
                (b[y] & 31) * 281474976710656 +
                b[y + 1] * 1099511627776 +
                b[y + 2] * 4294967296 +
                b[y + 3] * 16777216 +
                (b[y + 4] << 16) +
                (b[y + 5] << 8) +
                b[y + 6]),
                d >= 9e15
                  ? crypto.randomBytes(7).copy(b, y)
                  : (_.push(d % 1e14), (y += 7));
            y = E / 7;
          } else throw ((M = !1), Error(we + "crypto unavailable"));
        if (!M) for (; y < E; ) (d = u()), d < 9e15 && (_[y++] = d % 1e14);
        for (
          E = _[--y],
            c %= W,
            E && c && ((d = Sr[W - c]), (_[y] = Te(E / d) * d));
          _[y] === 0;
          _.pop(), y--
        );
        if (y < 0) _ = [(m = 0)];
        else {
          for (m = -1; _[0] === 0; _.splice(0, 1), m -= W);
          for (y = 1, d = _[0]; d >= 10; d /= 10, y++);
          y < W && (m -= W - y);
        }
        return (w.e = m), (w.c = _), w;
      };
    })()),
    (O.sum = function () {
      for (var a = 1, u = arguments, c = new O(u[0]); a < u.length; )
        c = c.plus(u[a++]);
      return c;
    }),
    (r = (function () {
      var a = "0123456789";
      function u(c, b, f, m) {
        for (var E, d = [0], y, _ = 0, w = c.length; _ < w; ) {
          for (y = d.length; y--; d[y] *= b);
          for (d[0] += m.indexOf(c.charAt(_++)), E = 0; E < d.length; E++)
            d[E] > f - 1 &&
              (d[E + 1] == null && (d[E + 1] = 0),
              (d[E + 1] += (d[E] / f) | 0),
              (d[E] %= f));
        }
        return d.reverse();
      }
      return function (c, b, f, m, E) {
        var d,
          y,
          _,
          w,
          N,
          U,
          I,
          G,
          se = c.indexOf("."),
          Q = o,
          K = l;
        for (
          se >= 0 &&
            ((w = F),
            (F = 0),
            (c = c.replace(".", "")),
            (G = new O(b)),
            (U = G.pow(c.length - se)),
            (F = w),
            (G.c = u(je(Oe(U.c), U.e, "0"), 10, f, a)),
            (G.e = G.c.length)),
            I = u(c, b, f, E ? ((d = C), a) : ((d = a), C)),
            _ = w = I.length;
          I[--w] == 0;
          I.pop()
        );
        if (!I[0]) return d.charAt(0);
        if (
          (se < 0
            ? --_
            : ((U.c = I),
              (U.e = _),
              (U.s = m),
              (U = t(U, G, Q, K, f)),
              (I = U.c),
              (N = U.r),
              (_ = U.e)),
          (y = _ + Q + 1),
          (se = I[y]),
          (w = f / 2),
          (N = N || y < 0 || I[y + 1] != null),
          (N =
            K < 4
              ? (se != null || N) && (K == 0 || K == (U.s < 0 ? 3 : 2))
              : se > w ||
                (se == w &&
                  (K == 4 ||
                    N ||
                    (K == 6 && I[y - 1] & 1) ||
                    K == (U.s < 0 ? 8 : 7)))),
          y < 1 || !I[0])
        )
          c = N ? je(d.charAt(1), -Q, d.charAt(0)) : d.charAt(0);
        else {
          if (((I.length = y), N))
            for (--f; ++I[--y] > f; )
              (I[y] = 0), y || (++_, (I = [1].concat(I)));
          for (w = I.length; !I[--w]; );
          for (se = 0, c = ""; se <= w; c += d.charAt(I[se++]));
          c = je(c, _, d.charAt(0));
        }
        return c;
      };
    })()),
    (t = (function () {
      function a(b, f, m) {
        var E,
          d,
          y,
          _,
          w = 0,
          N = b.length,
          U = f % Ke,
          I = (f / Ke) | 0;
        for (b = b.slice(); N--; )
          (y = b[N] % Ke),
            (_ = (b[N] / Ke) | 0),
            (E = I * y + _ * U),
            (d = U * y + (E % Ke) * Ke + w),
            (w = ((d / m) | 0) + ((E / Ke) | 0) + I * _),
            (b[N] = d % m);
        return w && (b = [w].concat(b)), b;
      }
      function u(b, f, m, E) {
        var d, y;
        if (m != E) y = m > E ? 1 : -1;
        else
          for (d = y = 0; d < m; d++)
            if (b[d] != f[d]) {
              y = b[d] > f[d] ? 1 : -1;
              break;
            }
        return y;
      }
      function c(b, f, m, E) {
        for (var d = 0; m--; )
          (b[m] -= d), (d = b[m] < f[m] ? 1 : 0), (b[m] = d * E + b[m] - f[m]);
        for (; !b[0] && b.length > 1; b.splice(0, 1));
      }
      return function (b, f, m, E, d) {
        var y,
          _,
          w,
          N,
          U,
          I,
          G,
          se,
          Q,
          K,
          X,
          ce,
          Me,
          Ie,
          Qe,
          Y,
          ve,
          re = b.s == f.s ? 1 : -1,
          ae = b.c,
          le = f.c;
        if (!ae || !ae[0] || !le || !le[0])
          return new O(
            !b.s || !f.s || (ae ? le && ae[0] == le[0] : !le)
              ? NaN
              : (ae && ae[0] == 0) || !le
              ? re * 0
              : re / 0
          );
        for (
          se = new O(re),
            Q = se.c = [],
            _ = b.e - f.e,
            re = m + _ + 1,
            d ||
              ((d = De), (_ = Re(b.e / W) - Re(f.e / W)), (re = (re / W) | 0)),
            w = 0;
          le[w] == (ae[w] || 0);
          w++
        );
        if ((le[w] > (ae[w] || 0) && _--, re < 0)) Q.push(1), (N = !0);
        else {
          for (
            Ie = ae.length,
              Y = le.length,
              w = 0,
              re += 2,
              U = Te(d / (le[0] + 1)),
              U > 1 &&
                ((le = a(le, U, d)),
                (ae = a(ae, U, d)),
                (Y = le.length),
                (Ie = ae.length)),
              Me = Y,
              K = ae.slice(0, Y),
              X = K.length;
            X < Y;
            K[X++] = 0
          );
          (ve = le.slice()),
            (ve = [0].concat(ve)),
            (Qe = le[0]),
            le[1] >= d / 2 && Qe++;
          do {
            if (((U = 0), (y = u(le, K, Y, X)), y < 0)) {
              if (
                ((ce = K[0]),
                Y != X && (ce = ce * d + (K[1] || 0)),
                (U = Te(ce / Qe)),
                U > 1)
              )
                for (
                  U >= d && (U = d - 1),
                    I = a(le, U, d),
                    G = I.length,
                    X = K.length;
                  u(I, K, G, X) == 1;

                )
                  U--, c(I, Y < G ? ve : le, G, d), (G = I.length), (y = 1);
              else U == 0 && (y = U = 1), (I = le.slice()), (G = I.length);
              if (
                (G < X && (I = [0].concat(I)),
                c(K, I, X, d),
                (X = K.length),
                y == -1)
              )
                for (; u(le, K, Y, X) < 1; )
                  U++, c(K, Y < X ? ve : le, X, d), (X = K.length);
            } else y === 0 && (U++, (K = [0]));
            (Q[w++] = U),
              K[0] ? (K[X++] = ae[Me] || 0) : ((K = [ae[Me]]), (X = 1));
          } while ((Me++ < Ie || K[0] != null) && re--);
          (N = K[0] != null), Q[0] || Q.splice(0, 1);
        }
        if (d == De) {
          for (w = 1, re = Q[0]; re >= 10; re /= 10, w++);
          z(se, m + (se.e = w + _ * W - 1) + 1, E, N);
        } else (se.e = _), (se.r = +N);
        return se;
      };
    })());
  function B(a, u, c, b) {
    var f, m, E, d, y;
    if ((c == null ? (c = l) : ue(c, 0, 8), !a.c)) return a.toString();
    if (((f = a.c[0]), (E = a.e), u == null))
      (y = Oe(a.c)),
        (y =
          b == 1 || (b == 2 && (E <= p || E >= S)) ? Ct(y, E) : je(y, E, "0"));
    else if (
      ((a = z(new O(a), u, c)),
      (m = a.e),
      (y = Oe(a.c)),
      (d = y.length),
      b == 1 || (b == 2 && (u <= m || m <= p)))
    ) {
      for (; d < u; y += "0", d++);
      y = Ct(y, m);
    } else if (((u -= E), (y = je(y, m, "0")), m + 1 > d)) {
      if (--u > 0) for (y += "."; u--; y += "0");
    } else if (((u += m - d), u > 0))
      for (m + 1 == d && (y += "."); u--; y += "0");
    return a.s < 0 && f ? "-" + y : y;
  }
  function J(a, u) {
    for (var c, b, f = 1, m = new O(a[0]); f < a.length; f++)
      (b = new O(a[f])),
        (!b.s || (c = et(m, b)) === u || (c === 0 && m.s === u)) && (m = b);
    return m;
  }
  function ee(a, u, c) {
    for (var b = 1, f = u.length; !u[--f]; u.pop());
    for (f = u[0]; f >= 10; f /= 10, b++);
    return (
      (c = b + c * W - 1) > g
        ? (a.c = a.e = null)
        : c < v
        ? (a.c = [(a.e = 0)])
        : ((a.e = c), (a.c = u)),
      a
    );
  }
  n = (function () {
    var a = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      u = /^([^.]+)\.$/,
      c = /^\.([^.]+)$/,
      b = /^-?(Infinity|NaN)$/,
      f = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (m, E, d, y) {
      var _,
        w = d ? E : E.replace(f, "");
      if (b.test(w)) m.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (
          !d &&
          ((w = w.replace(a, function (N, U, I) {
            return (
              (_ = (I = I.toLowerCase()) == "x" ? 16 : I == "b" ? 2 : 8),
              !y || y == _ ? U : N
            );
          })),
          y && ((_ = y), (w = w.replace(u, "$1").replace(c, "0.$1"))),
          E != w)
        )
          return new O(w, _);
        if (O.DEBUG)
          throw Error(we + "Not a" + (y ? " base " + y : "") + " number: " + E);
        m.s = null;
      }
      m.c = m.e = null;
    };
  })();
  function z(a, u, c, b) {
    var f,
      m,
      E,
      d,
      y,
      _,
      w,
      N = a.c,
      U = Sr;
    if (N) {
      e: {
        for (f = 1, d = N[0]; d >= 10; d /= 10, f++);
        if (((m = u - f), m < 0))
          (m += W),
            (E = u),
            (y = N[(_ = 0)]),
            (w = Te((y / U[f - E - 1]) % 10));
        else if (((_ = wr((m + 1) / W)), _ >= N.length))
          if (b) {
            for (; N.length <= _; N.push(0));
            (y = w = 0), (f = 1), (m %= W), (E = m - W + 1);
          } else break e;
        else {
          for (y = d = N[_], f = 1; d >= 10; d /= 10, f++);
          (m %= W),
            (E = m - W + f),
            (w = E < 0 ? 0 : Te((y / U[f - E - 1]) % 10));
        }
        if (
          ((b =
            b || u < 0 || N[_ + 1] != null || (E < 0 ? y : y % U[f - E - 1])),
          (b =
            c < 4
              ? (w || b) && (c == 0 || c == (a.s < 0 ? 3 : 2))
              : w > 5 ||
                (w == 5 &&
                  (c == 4 ||
                    b ||
                    (c == 6 &&
                      (m > 0 ? (E > 0 ? y / U[f - E] : 0) : N[_ - 1]) % 10 &
                        1) ||
                    c == (a.s < 0 ? 8 : 7)))),
          u < 1 || !N[0])
        )
          return (
            (N.length = 0),
            b
              ? ((u -= a.e + 1), (N[0] = U[(W - (u % W)) % W]), (a.e = -u || 0))
              : (N[0] = a.e = 0),
            a
          );
        if (
          (m == 0
            ? ((N.length = _), (d = 1), _--)
            : ((N.length = _ + 1),
              (d = U[W - m]),
              (N[_] = E > 0 ? Te((y / U[f - E]) % U[E]) * d : 0)),
          b)
        )
          for (;;)
            if (_ == 0) {
              for (m = 1, E = N[0]; E >= 10; E /= 10, m++);
              for (E = N[0] += d, d = 1; E >= 10; E /= 10, d++);
              m != d && (a.e++, N[0] == De && (N[0] = 1));
              break;
            } else {
              if (((N[_] += d), N[_] != De)) break;
              (N[_--] = 0), (d = 1);
            }
        for (m = N.length; N[--m] === 0; N.pop());
      }
      a.e > g ? (a.c = a.e = null) : a.e < v && (a.c = [(a.e = 0)]);
    }
    return a;
  }
  function ie(a) {
    var u,
      c = a.e;
    return c === null
      ? a.toString()
      : ((u = Oe(a.c)),
        (u = c <= p || c >= S ? Ct(u, c) : je(u, c, "0")),
        a.s < 0 ? "-" + u : u);
  }
  return (
    (s.absoluteValue = s.abs =
      function () {
        var a = new O(this);
        return a.s < 0 && (a.s = 1), a;
      }),
    (s.comparedTo = function (a, u) {
      return et(this, new O(a, u));
    }),
    (s.decimalPlaces = s.dp =
      function (a, u) {
        var c,
          b,
          f,
          m = this;
        if (a != null)
          return (
            ue(a, 0, ge),
            u == null ? (u = l) : ue(u, 0, 8),
            z(new O(m), a + m.e + 1, u)
          );
        if (!(c = m.c)) return null;
        if (((b = ((f = c.length - 1) - Re(this.e / W)) * W), (f = c[f])))
          for (; f % 10 == 0; f /= 10, b--);
        return b < 0 && (b = 0), b;
      }),
    (s.dividedBy = s.div =
      function (a, u) {
        return t(this, new O(a, u), o, l);
      }),
    (s.dividedToIntegerBy = s.idiv =
      function (a, u) {
        return t(this, new O(a, u), 0, 1);
      }),
    (s.exponentiatedBy = s.pow =
      function (a, u) {
        var c,
          b,
          f,
          m,
          E,
          d,
          y,
          _,
          w,
          N = this;
        if (((a = new O(a)), a.c && !a.isInteger()))
          throw Error(we + "Exponent not an integer: " + ie(a));
        if (
          (u != null && (u = new O(u)),
          (d = a.e > 14),
          !N.c ||
            !N.c[0] ||
            (N.c[0] == 1 && !N.e && N.c.length == 1) ||
            !a.c ||
            !a.c[0])
        )
          return (
            (w = new O(Math.pow(+ie(N), d ? a.s * (2 - kt(a)) : +ie(a)))),
            u ? w.mod(u) : w
          );
        if (((y = a.s < 0), u)) {
          if (u.c ? !u.c[0] : !u.s) return new O(NaN);
          (b = !y && N.isInteger() && u.isInteger()), b && (N = N.mod(u));
        } else {
          if (
            a.e > 9 &&
            (N.e > 0 ||
              N.e < -1 ||
              (N.e == 0
                ? N.c[0] > 1 || (d && N.c[1] >= 24e7)
                : N.c[0] < 8e13 || (d && N.c[0] <= 9999975e7)))
          )
            return (
              (m = N.s < 0 && kt(a) ? -0 : 0),
              N.e > -1 && (m = 1 / m),
              new O(y ? 1 / m : m)
            );
          F && (m = wr(F / W + 2));
        }
        for (
          d
            ? ((c = new O(0.5)), y && (a.s = 1), (_ = kt(a)))
            : ((f = Math.abs(+ie(a))), (_ = f % 2)),
            w = new O(i);
          ;

        ) {
          if (_) {
            if (((w = w.times(N)), !w.c)) break;
            m ? w.c.length > m && (w.c.length = m) : b && (w = w.mod(u));
          }
          if (f) {
            if (((f = Te(f / 2)), f === 0)) break;
            _ = f % 2;
          } else if (((a = a.times(c)), z(a, a.e + 1, 1), a.e > 14)) _ = kt(a);
          else {
            if (((f = +ie(a)), f === 0)) break;
            _ = f % 2;
          }
          (N = N.times(N)),
            m ? N.c && N.c.length > m && (N.c.length = m) : b && (N = N.mod(u));
        }
        return b
          ? w
          : (y && (w = i.div(w)), u ? w.mod(u) : m ? z(w, F, l, E) : w);
      }),
    (s.integerValue = function (a) {
      var u = new O(this);
      return a == null ? (a = l) : ue(a, 0, 8), z(u, u.e + 1, a);
    }),
    (s.isEqualTo = s.eq =
      function (a, u) {
        return et(this, new O(a, u)) === 0;
      }),
    (s.isFinite = function () {
      return !!this.c;
    }),
    (s.isGreaterThan = s.gt =
      function (a, u) {
        return et(this, new O(a, u)) > 0;
      }),
    (s.isGreaterThanOrEqualTo = s.gte =
      function (a, u) {
        return (u = et(this, new O(a, u))) === 1 || u === 0;
      }),
    (s.isInteger = function () {
      return !!this.c && Re(this.e / W) > this.c.length - 2;
    }),
    (s.isLessThan = s.lt =
      function (a, u) {
        return et(this, new O(a, u)) < 0;
      }),
    (s.isLessThanOrEqualTo = s.lte =
      function (a, u) {
        return (u = et(this, new O(a, u))) === -1 || u === 0;
      }),
    (s.isNaN = function () {
      return !this.s;
    }),
    (s.isNegative = function () {
      return this.s < 0;
    }),
    (s.isPositive = function () {
      return this.s > 0;
    }),
    (s.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (s.minus = function (a, u) {
      var c,
        b,
        f,
        m,
        E = this,
        d = E.s;
      if (((a = new O(a, u)), (u = a.s), !d || !u)) return new O(NaN);
      if (d != u) return (a.s = -u), E.plus(a);
      var y = E.e / W,
        _ = a.e / W,
        w = E.c,
        N = a.c;
      if (!y || !_) {
        if (!w || !N) return w ? ((a.s = -u), a) : new O(N ? E : NaN);
        if (!w[0] || !N[0])
          return N[0] ? ((a.s = -u), a) : new O(w[0] ? E : l == 3 ? -0 : 0);
      }
      if (((y = Re(y)), (_ = Re(_)), (w = w.slice()), (d = y - _))) {
        for (
          (m = d < 0) ? ((d = -d), (f = w)) : ((_ = y), (f = N)),
            f.reverse(),
            u = d;
          u--;
          f.push(0)
        );
        f.reverse();
      } else
        for (
          b = (m = (d = w.length) < (u = N.length)) ? d : u, d = u = 0;
          u < b;
          u++
        )
          if (w[u] != N[u]) {
            m = w[u] < N[u];
            break;
          }
      if (
        (m && ((f = w), (w = N), (N = f), (a.s = -a.s)),
        (u = (b = N.length) - (c = w.length)),
        u > 0)
      )
        for (; u--; w[c++] = 0);
      for (u = De - 1; b > d; ) {
        if (w[--b] < N[b]) {
          for (c = b; c && !w[--c]; w[c] = u);
          --w[c], (w[b] += De);
        }
        w[b] -= N[b];
      }
      for (; w[0] == 0; w.splice(0, 1), --_);
      return w[0]
        ? ee(a, w, _)
        : ((a.s = l == 3 ? -1 : 1), (a.c = [(a.e = 0)]), a);
    }),
    (s.modulo = s.mod =
      function (a, u) {
        var c,
          b,
          f = this;
        return (
          (a = new O(a, u)),
          !f.c || !a.s || (a.c && !a.c[0])
            ? new O(NaN)
            : !a.c || (f.c && !f.c[0])
            ? new O(f)
            : (L == 9
                ? ((b = a.s),
                  (a.s = 1),
                  (c = t(f, a, 0, 3)),
                  (a.s = b),
                  (c.s *= b))
                : (c = t(f, a, 0, L)),
              (a = f.minus(c.times(a))),
              !a.c[0] && L == 1 && (a.s = f.s),
              a)
        );
      }),
    (s.multipliedBy = s.times =
      function (a, u) {
        var c,
          b,
          f,
          m,
          E,
          d,
          y,
          _,
          w,
          N,
          U,
          I,
          G,
          se,
          Q,
          K = this,
          X = K.c,
          ce = (a = new O(a, u)).c;
        if (!X || !ce || !X[0] || !ce[0])
          return (
            !K.s || !a.s || (X && !X[0] && !ce) || (ce && !ce[0] && !X)
              ? (a.c = a.e = a.s = null)
              : ((a.s *= K.s),
                !X || !ce ? (a.c = a.e = null) : ((a.c = [0]), (a.e = 0))),
            a
          );
        for (
          b = Re(K.e / W) + Re(a.e / W),
            a.s *= K.s,
            y = X.length,
            N = ce.length,
            y < N && ((G = X), (X = ce), (ce = G), (f = y), (y = N), (N = f)),
            f = y + N,
            G = [];
          f--;
          G.push(0)
        );
        for (se = De, Q = Ke, f = N; --f >= 0; ) {
          for (
            c = 0, U = ce[f] % Q, I = (ce[f] / Q) | 0, E = y, m = f + E;
            m > f;

          )
            (_ = X[--E] % Q),
              (w = (X[E] / Q) | 0),
              (d = I * _ + w * U),
              (_ = U * _ + (d % Q) * Q + G[m] + c),
              (c = ((_ / se) | 0) + ((d / Q) | 0) + I * w),
              (G[m--] = _ % se);
          G[m] = c;
        }
        return c ? ++b : G.splice(0, 1), ee(a, G, b);
      }),
    (s.negated = function () {
      var a = new O(this);
      return (a.s = -a.s || null), a;
    }),
    (s.plus = function (a, u) {
      var c,
        b = this,
        f = b.s;
      if (((a = new O(a, u)), (u = a.s), !f || !u)) return new O(NaN);
      if (f != u) return (a.s = -u), b.minus(a);
      var m = b.e / W,
        E = a.e / W,
        d = b.c,
        y = a.c;
      if (!m || !E) {
        if (!d || !y) return new O(f / 0);
        if (!d[0] || !y[0]) return y[0] ? a : new O(d[0] ? b : f * 0);
      }
      if (((m = Re(m)), (E = Re(E)), (d = d.slice()), (f = m - E))) {
        for (
          f > 0 ? ((E = m), (c = y)) : ((f = -f), (c = d)), c.reverse();
          f--;
          c.push(0)
        );
        c.reverse();
      }
      for (
        f = d.length,
          u = y.length,
          f - u < 0 && ((c = y), (y = d), (d = c), (u = f)),
          f = 0;
        u;

      )
        (f = ((d[--u] = d[u] + y[u] + f) / De) | 0),
          (d[u] = De === d[u] ? 0 : d[u] % De);
      return f && ((d = [f].concat(d)), ++E), ee(a, d, E);
    }),
    (s.precision = s.sd =
      function (a, u) {
        var c,
          b,
          f,
          m = this;
        if (a != null && a !== !!a)
          return (
            ue(a, 1, ge), u == null ? (u = l) : ue(u, 0, 8), z(new O(m), a, u)
          );
        if (!(c = m.c)) return null;
        if (((f = c.length - 1), (b = f * W + 1), (f = c[f]))) {
          for (; f % 10 == 0; f /= 10, b--);
          for (f = c[0]; f >= 10; f /= 10, b++);
        }
        return a && m.e + 1 > b && (b = m.e + 1), b;
      }),
    (s.shiftedBy = function (a) {
      return ue(a, -br, br), this.times("1e" + a);
    }),
    (s.squareRoot = s.sqrt =
      function () {
        var a,
          u,
          c,
          b,
          f,
          m = this,
          E = m.c,
          d = m.s,
          y = m.e,
          _ = o + 4,
          w = new O("0.5");
        if (d !== 1 || !E || !E[0])
          return new O(!d || (d < 0 && (!E || E[0])) ? NaN : E ? m : 1 / 0);
        if (
          ((d = Math.sqrt(+ie(m))),
          d == 0 || d == 1 / 0
            ? ((u = Oe(E)),
              (u.length + y) % 2 == 0 && (u += "0"),
              (d = Math.sqrt(+u)),
              (y = Re((y + 1) / 2) - (y < 0 || y % 2)),
              d == 1 / 0
                ? (u = "5e" + y)
                : ((u = d.toExponential()),
                  (u = u.slice(0, u.indexOf("e") + 1) + y)),
              (c = new O(u)))
            : (c = new O(d + "")),
          c.c[0])
        ) {
          for (y = c.e, d = y + _, d < 3 && (d = 0); ; )
            if (
              ((f = c),
              (c = w.times(f.plus(t(m, f, _, 1)))),
              Oe(f.c).slice(0, d) === (u = Oe(c.c)).slice(0, d))
            )
              if (
                (c.e < y && --d,
                (u = u.slice(d - 3, d + 1)),
                u == "9999" || (!b && u == "4999"))
              ) {
                if (!b && (z(f, f.e + o + 2, 0), f.times(f).eq(m))) {
                  c = f;
                  break;
                }
                (_ += 4), (d += 4), (b = 1);
              } else {
                (!+u || (!+u.slice(1) && u.charAt(0) == "5")) &&
                  (z(c, c.e + o + 2, 1), (a = !c.times(c).eq(m)));
                break;
              }
        }
        return z(c, c.e + o + 1, l, a);
      }),
    (s.toExponential = function (a, u) {
      return a != null && (ue(a, 0, ge), a++), B(this, a, u, 1);
    }),
    (s.toFixed = function (a, u) {
      return a != null && (ue(a, 0, ge), (a = a + this.e + 1)), B(this, a, u);
    }),
    (s.toFormat = function (a, u, c) {
      var b,
        f = this;
      if (c == null)
        a != null && u && typeof u == "object"
          ? ((c = u), (u = null))
          : a && typeof a == "object"
          ? ((c = a), (a = u = null))
          : (c = k);
      else if (typeof c != "object")
        throw Error(we + "Argument not an object: " + c);
      if (((b = f.toFixed(a, u)), f.c)) {
        var m,
          E = b.split("."),
          d = +c.groupSize,
          y = +c.secondaryGroupSize,
          _ = c.groupSeparator || "",
          w = E[0],
          N = E[1],
          U = f.s < 0,
          I = U ? w.slice(1) : w,
          G = I.length;
        if ((y && ((m = d), (d = y), (y = m), (G -= m)), d > 0 && G > 0)) {
          for (m = G % d || d, w = I.substr(0, m); m < G; m += d)
            w += _ + I.substr(m, d);
          y > 0 && (w += _ + I.slice(m)), U && (w = "-" + w);
        }
        b = N
          ? w +
            (c.decimalSeparator || "") +
            ((y = +c.fractionGroupSize)
              ? N.replace(
                  new RegExp("\\d{" + y + "}\\B", "g"),
                  "$&" + (c.fractionGroupSeparator || "")
                )
              : N)
          : w;
      }
      return (c.prefix || "") + b + (c.suffix || "");
    }),
    (s.toFraction = function (a) {
      var u,
        c,
        b,
        f,
        m,
        E,
        d,
        y,
        _,
        w,
        N,
        U,
        I = this,
        G = I.c;
      if (
        a != null &&
        ((d = new O(a)), (!d.isInteger() && (d.c || d.s !== 1)) || d.lt(i))
      )
        throw Error(
          we +
            "Argument " +
            (d.isInteger() ? "out of range: " : "not an integer: ") +
            ie(d)
        );
      if (!G) return new O(I);
      for (
        u = new O(i),
          _ = c = new O(i),
          b = y = new O(i),
          U = Oe(G),
          m = u.e = U.length - I.e - 1,
          u.c[0] = Sr[(E = m % W) < 0 ? W + E : E],
          a = !a || d.comparedTo(u) > 0 ? (m > 0 ? u : _) : d,
          E = g,
          g = 1 / 0,
          d = new O(U),
          y.c[0] = 0;
        (w = t(d, u, 0, 1)), (f = c.plus(w.times(b))), f.comparedTo(a) != 1;

      )
        (c = b),
          (b = f),
          (_ = y.plus(w.times((f = _)))),
          (y = f),
          (u = d.minus(w.times((f = u)))),
          (d = f);
      return (
        (f = t(a.minus(c), b, 0, 1)),
        (y = y.plus(f.times(_))),
        (c = c.plus(f.times(b))),
        (y.s = _.s = I.s),
        (m = m * 2),
        (N =
          t(_, b, m, l)
            .minus(I)
            .abs()
            .comparedTo(t(y, c, m, l).minus(I).abs()) < 1
            ? [_, b]
            : [y, c]),
        (g = E),
        N
      );
    }),
    (s.toNumber = function () {
      return +ie(this);
    }),
    (s.toPrecision = function (a, u) {
      return a != null && ue(a, 1, ge), B(this, a, u, 2);
    }),
    (s.toString = function (a) {
      var u,
        c = this,
        b = c.s,
        f = c.e;
      return (
        f === null
          ? b
            ? ((u = "Infinity"), b < 0 && (u = "-" + u))
            : (u = "NaN")
          : (a == null
              ? (u = f <= p || f >= S ? Ct(Oe(c.c), f) : je(Oe(c.c), f, "0"))
              : a === 10 && q
              ? ((c = z(new O(c), o + f + 1, l)), (u = je(Oe(c.c), c.e, "0")))
              : (ue(a, 2, C.length, "Base"),
                (u = r(je(Oe(c.c), f, "0"), 10, a, b, !0))),
            b < 0 && c.c[0] && (u = "-" + u)),
        u
      );
    }),
    (s.valueOf = s.toJSON =
      function () {
        return ie(this);
      }),
    (s._isBigNumber = !0),
    (s[Symbol.toStringTag] = "BigNumber"),
    (s[Symbol.for("nodejs.util.inspect.custom")] = s.valueOf),
    e != null && O.set(e),
    O
  );
}
function Re(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function Oe(e) {
  for (var t, r, n = 1, s = e.length, i = e[0] + ""; n < s; ) {
    for (t = e[n++] + "", r = W - t.length; r--; t = "0" + t);
    i += t;
  }
  for (s = i.length; i.charCodeAt(--s) === 48; );
  return i.slice(0, s + 1 || 1);
}
function et(e, t) {
  var r,
    n,
    s = e.c,
    i = t.c,
    o = e.s,
    l = t.s,
    p = e.e,
    S = t.e;
  if (!o || !l) return null;
  if (((r = s && !s[0]), (n = i && !i[0]), r || n)) return r ? (n ? 0 : -l) : o;
  if (o != l) return o;
  if (((r = o < 0), (n = p == S), !s || !i)) return n ? 0 : !s ^ r ? 1 : -1;
  if (!n) return (p > S) ^ r ? 1 : -1;
  for (l = (p = s.length) < (S = i.length) ? p : S, o = 0; o < l; o++)
    if (s[o] != i[o]) return (s[o] > i[o]) ^ r ? 1 : -1;
  return p == S ? 0 : (p > S) ^ r ? 1 : -1;
}
function ue(e, t, r, n) {
  if (e < t || e > r || e !== Te(e))
    throw Error(
      we +
        (n || "Argument") +
        (typeof e == "number"
          ? e < t || e > r
            ? " out of range: "
            : " not an integer: "
          : " not a primitive number: ") +
        String(e)
    );
}
function kt(e) {
  var t = e.c.length - 1;
  return Re(e.e / W) == t && e.c[t] % 2 != 0;
}
function Ct(e, t) {
  return (
    (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
    (t < 0 ? "e" : "e+") +
    t
  );
}
function je(e, t, r) {
  var n, s;
  if (t < 0) {
    for (s = r + "."; ++t; s += r);
    e = s + e;
  } else if (((n = e.length), ++t > n)) {
    for (s = r, t -= n; --t; s += r);
    e += s;
  } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var rr = As();
new rr(0);
new rr(1);
new rr(9);
const Nl = new rr(10),
  dl = (e, t = 0) => {
    const r = { maximumFractionDigits: t };
    return (
      typeof e == "object" ? (e = e.toNumber()) : (e = Number(e)),
      e.toLocaleString("en-US", r)
    );
  },
  Fl = (e, t = 10) => dl(e, t),
  pl = H.createContext({}),
  Os = !0;
function hl({
  baseColor: e,
  highlightColor: t,
  width: r,
  height: n,
  borderRadius: s,
  circle: i,
  direction: o,
  duration: l,
  enableAnimation: p = Os,
}) {
  const S = {};
  return (
    o === "rtl" && (S["--animation-direction"] = "reverse"),
    typeof l == "number" && (S["--animation-duration"] = `${l}s`),
    p || (S["--pseudo-element-display"] = "none"),
    (typeof r == "string" || typeof r == "number") && (S.width = r),
    (typeof n == "string" || typeof n == "number") && (S.height = n),
    (typeof s == "string" || typeof s == "number") && (S.borderRadius = s),
    i && (S.borderRadius = "50%"),
    typeof e < "u" && (S["--base-color"] = e),
    typeof t < "u" && (S["--highlight-color"] = t),
    S
  );
}
function ml({
  count: e = 1,
  wrapper: t,
  className: r,
  containerClassName: n,
  containerTestId: s,
  circle: i = !1,
  style: o,
  ...l
}) {
  var p, S, v;
  const g = H.useContext(pl),
    M = { ...l };
  for (const [B, J] of Object.entries(l)) typeof J > "u" && delete M[B];
  const L = { ...g, ...M, circle: i },
    F = { ...o, ...hl(L) };
  let k = "react-loading-skeleton";
  r && (k += ` ${r}`);
  const C = (p = L.inline) !== null && p !== void 0 ? p : !1,
    q = [],
    O = Math.ceil(e);
  for (let B = 0; B < O; B++) {
    let J = F;
    if (O > e && B === O - 1) {
      const z = (S = J.width) !== null && S !== void 0 ? S : "100%",
        ie = e % 1,
        a = typeof z == "number" ? z * ie : `calc(${z} * ${ie})`;
      J = { ...J, width: a };
    }
    const ee = H.createElement("span", { className: k, style: J, key: B }, "‌");
    C
      ? q.push(ee)
      : q.push(
          H.createElement(
            H.Fragment,
            { key: B },
            ee,
            H.createElement("br", null)
          )
        );
  }
  return H.createElement(
    "span",
    {
      className: n,
      "data-testid": s,
      "aria-live": "polite",
      "aria-busy": (v = L.enableAnimation) !== null && v !== void 0 ? v : Os,
    },
    t ? q.map((B, J) => H.createElement(t, { key: J }, B)) : q
  );
}
function kl({ width: e, className: t }) {
  return pe.jsx(ml, {
    baseColor: "#176477",
    width: e || 80,
    style: { opacity: 0.5 },
    className: t,
  });
}
export {
  Ys as A,
  rr as B,
  Ce as C,
  it as D,
  Bs as E,
  dr as F,
  Rl as G,
  Al as I,
  wl as M,
  Tl as O,
  kl as S,
  Ol as T,
  Ae as U,
  Nl as a,
  he as b,
  _l as c,
  Ge as d,
  Vt as e,
  Fl as f,
  _e as g,
  qs as h,
  Us as i,
  Rn as j,
  Ks as k,
  ke as l,
  Se as m,
  Or as n,
  oe as o,
  Mr as p,
  It as q,
  ft as r,
  xl as s,
  Sl as t,
  bl as u,
  Vr as v,
  xn as w,
  en as x,
  Le as y,
  Dn as z,
};
