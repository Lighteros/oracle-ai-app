import {
  r as c,
  R as I,
  j as l,
  z as L,
  u as fe,
  b as Ae,
  k as Be,
  l as Fe,
} from "./vendor-DsZaj2x0.js";
import {
  d as xe,
  l as T,
  o as v,
  e as ie,
  U as $,
  y as M,
  g as F,
  h as $e,
  i as Me,
  j as ze,
  p as _,
  k as Ue,
  m as Q,
  n as We,
  q as Ve,
  x as Ge,
  C as z,
  r as X,
  v as qe,
  w as Ke,
  z as S,
  A as He,
  D as re,
  E as _e,
  F as Qe,
  B as ee,
  a as Ye,
  u as Je,
  t as Xe,
  I as E,
  T as Ze,
  S as et,
  f as tt,
  O as rt,
  b as nt,
  G as at,
  c as lt,
  M as it,
} from "./SkeletonLoader-BcMseZQF.js";
import { B as H } from "./main-DPfugBja.js";
function be(e, r) {
  let [t, n] = c.useState(e),
    i = xe(e);
  return T(() => n(i.current), [i, n, ...r]), t;
}
function ot(e, r, t) {
  let [n, i] = c.useState(t),
    a = e !== void 0,
    o = c.useRef(a),
    s = c.useRef(!1),
    p = c.useRef(!1);
  return (
    a && !o.current && !s.current
      ? ((s.current = !0),
        (o.current = a),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
        ))
      : !a &&
        o.current &&
        !p.current &&
        ((p.current = !0),
        (o.current = a),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
        )),
    [a ? e : n, v((g) => (a || i(g), r?.(g)))]
  );
}
function oe(e) {
  var r;
  if (e.type) return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function st(e, r) {
  let [t, n] = c.useState(() => oe(e));
  return (
    T(() => {
      n(oe(e));
    }, [e.type, e.as]),
    T(() => {
      t ||
        (r.current &&
          r.current instanceof HTMLButtonElement &&
          !r.current.hasAttribute("type") &&
          n("button"));
    }, [t, r]),
    t
  );
}
function se(e) {
  return [e.screenX, e.screenY];
}
function ut() {
  let e = c.useRef([-1, -1]);
  return {
    wasMoved(r) {
      let t = se(r);
      return e.current[0] === t[0] && e.current[1] === t[1]
        ? !1
        : ((e.current = t), !0);
    },
    update(r) {
      e.current = se(r);
    },
  };
}
function ct(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(R || {});
function dt(e, r) {
  let t = r.resolveItems();
  if (t.length <= 0) return null;
  let n = r.resolveActiveIndex(),
    i = n ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < t.length; ++a)
        if (!r.resolveDisabled(t[a], a, t)) return a;
      return n;
    }
    case 1: {
      for (let a = i - 1; a >= 0; --a)
        if (!r.resolveDisabled(t[a], a, t)) return a;
      return n;
    }
    case 2: {
      for (let a = i + 1; a < t.length; ++a)
        if (!r.resolveDisabled(t[a], a, t)) return a;
      return n;
    }
    case 3: {
      for (let a = t.length - 1; a >= 0; --a)
        if (!r.resolveDisabled(t[a], a, t)) return a;
      return n;
    }
    case 4: {
      for (let a = 0; a < t.length; ++a)
        if (r.resolveId(t[a], a, t) === e.id) return a;
      return n;
    }
    case 5:
      return null;
    default:
      ct(e);
  }
}
function ve(e = {}, r = null, t = []) {
  for (let [n, i] of Object.entries(e)) he(t, ge(r, n), i);
  return t;
}
function ge(e, r) {
  return e ? e + "[" + r + "]" : r;
}
function he(e, r, t) {
  if (Array.isArray(t))
    for (let [n, i] of t.entries()) he(e, ge(r, n.toString()), i);
  else
    t instanceof Date
      ? e.push([r, t.toISOString()])
      : typeof t == "boolean"
      ? e.push([r, t ? "1" : "0"])
      : typeof t == "string"
      ? e.push([r, t])
      : typeof t == "number"
      ? e.push([r, `${t}`])
      : t == null
      ? e.push([r, ""])
      : ve(t, r, e);
}
let ue =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function ce(e) {
  var r, t;
  let n = (r = e.innerText) != null ? r : "",
    i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return n;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    s.remove(), (a = !0);
  let o = a ? ((t = i.innerText) != null ? t : "") : n;
  return ue.test(o) && (o = o.replace(ue, "")), o;
}
function pt(e) {
  let r = e.getAttribute("aria-label");
  if (typeof r == "string") return r.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let n = t
      .split(" ")
      .map((i) => {
        let a = document.getElementById(i);
        if (a) {
          let o = a.getAttribute("aria-label");
          return typeof o == "string" ? o.trim() : ce(a).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return ce(e).trim();
}
function mt(e) {
  let r = c.useRef(""),
    t = c.useRef("");
  return v(() => {
    let n = e.current;
    if (!n) return "";
    let i = n.innerText;
    if (r.current === i) return t.current;
    let a = pt(n).trim().toLowerCase();
    return (r.current = i), (t.current = a), a;
  });
}
var ft = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(ft || {}),
  xt = ((e) => (
    (e[(e.Single = 0)] = "Single"), (e[(e.Multi = 1)] = "Multi"), e
  ))(xt || {}),
  bt = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(bt || {}),
  vt = ((e) => (
    (e[(e.OpenListbox = 0)] = "OpenListbox"),
    (e[(e.CloseListbox = 1)] = "CloseListbox"),
    (e[(e.GoToOption = 2)] = "GoToOption"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterOption = 5)] = "RegisterOption"),
    (e[(e.UnregisterOption = 6)] = "UnregisterOption"),
    (e[(e.RegisterLabel = 7)] = "RegisterLabel"),
    e
  ))(vt || {});
function te(e, r = (t) => t) {
  let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    n = _e(r(e.options.slice()), (a) => a.dataRef.current.domRef.current),
    i = t ? n.indexOf(t) : null;
  return i === -1 && (i = null), { options: n, activeOptionIndex: i };
}
let gt = {
    1(e) {
      return e.dataRef.current.disabled || e.listboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, listboxState: 1 };
    },
    0(e) {
      if (e.dataRef.current.disabled || e.listboxState === 0) return e;
      let r = e.activeOptionIndex,
        { isSelected: t } = e.dataRef.current,
        n = e.options.findIndex((i) => t(i.dataRef.current.value));
      return (
        n !== -1 && (r = n), { ...e, listboxState: 0, activeOptionIndex: r }
      );
    },
    2(e, r) {
      var t;
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let n = te(e),
        i = dt(r, {
          resolveItems: () => n.options,
          resolveActiveIndex: () => n.activeOptionIndex,
          resolveId: (a) => a.id,
          resolveDisabled: (a) => a.dataRef.current.disabled,
        });
      return {
        ...e,
        ...n,
        searchQuery: "",
        activeOptionIndex: i,
        activationTrigger: (t = r.trigger) != null ? t : 1,
      };
    },
    3: (e, r) => {
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let t = e.searchQuery !== "" ? 0 : 1,
        n = e.searchQuery + r.value.toLowerCase(),
        i = (
          e.activeOptionIndex !== null
            ? e.options
                .slice(e.activeOptionIndex + t)
                .concat(e.options.slice(0, e.activeOptionIndex + t))
            : e.options
        ).find((o) => {
          var s;
          return (
            !o.dataRef.current.disabled &&
            ((s = o.dataRef.current.textValue) == null
              ? void 0
              : s.startsWith(n))
          );
        }),
        a = i ? e.options.indexOf(i) : -1;
      return a === -1 || a === e.activeOptionIndex
        ? { ...e, searchQuery: n }
        : { ...e, searchQuery: n, activeOptionIndex: a, activationTrigger: 1 };
    },
    4(e) {
      return e.dataRef.current.disabled ||
        e.listboxState === 1 ||
        e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "" };
    },
    5: (e, r) => {
      let t = { id: r.id, dataRef: r.dataRef },
        n = te(e, (i) => [...i, t]);
      return (
        e.activeOptionIndex === null &&
          e.dataRef.current.isSelected(r.dataRef.current.value) &&
          (n.activeOptionIndex = n.options.indexOf(t)),
        { ...e, ...n }
      );
    },
    6: (e, r) => {
      let t = te(e, (n) => {
        let i = n.findIndex((a) => a.id === r.id);
        return i !== -1 && n.splice(i, 1), n;
      });
      return { ...e, ...t, activationTrigger: 1 };
    },
    7: (e, r) => ({ ...e, labelId: r.id }),
  },
  ne = c.createContext(null);
ne.displayName = "ListboxActionsContext";
function U(e) {
  let r = c.useContext(ne);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, U), t);
  }
  return r;
}
let ae = c.createContext(null);
ae.displayName = "ListboxDataContext";
function W(e) {
  let r = c.useContext(ae);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, W), t);
  }
  return r;
}
function ht(e, r) {
  return F(r.type, gt, e, r);
}
let yt = c.Fragment;
function Ot(e, r) {
  let {
    value: t,
    defaultValue: n,
    form: i,
    name: a,
    onChange: o,
    by: s = (f, b) => f === b,
    disabled: p = !1,
    horizontal: g = !1,
    multiple: O = !1,
    ...j
  } = e;
  const P = g ? "horizontal" : "vertical";
  let C = M(r),
    [x = O ? [] : void 0, w] = ot(t, o, n),
    [m, u] = c.useReducer(ht, {
      dataRef: c.createRef(),
      listboxState: 1,
      options: [],
      searchQuery: "",
      labelId: null,
      activeOptionIndex: null,
      activationTrigger: 1,
    }),
    y = c.useRef({ static: !1, hold: !1 }),
    k = c.useRef(null),
    A = c.useRef(null),
    B = c.useRef(null),
    d = v(
      typeof s == "string"
        ? (f, b) => {
            let N = s;
            return f?.[N] === b?.[N];
          }
        : s
    ),
    D = c.useCallback(
      (f) => F(h.mode, { 1: () => x.some((b) => d(b, f)), 0: () => d(x, f) }),
      [x]
    ),
    h = c.useMemo(
      () => ({
        ...m,
        value: x,
        disabled: p,
        mode: O ? 1 : 0,
        orientation: P,
        compare: d,
        isSelected: D,
        optionsPropsRef: y,
        labelRef: k,
        buttonRef: A,
        optionsRef: B,
      }),
      [x, p, O, m]
    );
  T(() => {
    m.dataRef.current = h;
  }, [h]),
    $e(
      [h.buttonRef, h.optionsRef],
      (f, b) => {
        var N;
        u({ type: 1 }),
          Me(b, ze.Loose) ||
            (f.preventDefault(),
            (N = h.buttonRef.current) == null || N.focus());
      },
      h.listboxState === 0
    );
  let je = c.useMemo(
      () => ({ open: h.listboxState === 0, disabled: p, value: x }),
      [h, p, x]
    ),
    Se = v((f) => {
      let b = h.options.find((N) => N.id === f);
      b && Z(b.dataRef.current.value);
    }),
    we = v(() => {
      if (h.activeOptionIndex !== null) {
        let { dataRef: f, id: b } = h.options[h.activeOptionIndex];
        Z(f.current.value), u({ type: 2, focus: R.Specific, id: b });
      }
    }),
    Ne = v(() => u({ type: 0 })),
    Re = v(() => u({ type: 1 })),
    Ce = v((f, b, N) =>
      f === R.Specific
        ? u({ type: 2, focus: R.Specific, id: b, trigger: N })
        : u({ type: 2, focus: f, trigger: N })
    ),
    Le = v(
      (f, b) => (u({ type: 5, id: f, dataRef: b }), () => u({ type: 6, id: f }))
    ),
    Pe = v((f) => (u({ type: 7, id: f }), () => u({ type: 7, id: null }))),
    Z = v((f) =>
      F(h.mode, {
        0() {
          return w?.(f);
        },
        1() {
          let b = h.value.slice(),
            N = b.findIndex((G) => d(G, f));
          return N === -1 ? b.push(f) : b.splice(N, 1), w?.(b);
        },
      })
    ),
    De = v((f) => u({ type: 3, value: f })),
    Ie = v(() => u({ type: 4 })),
    Ee = c.useMemo(
      () => ({
        onChange: Z,
        registerOption: Le,
        registerLabel: Pe,
        goToOption: Ce,
        closeListbox: Re,
        openListbox: Ne,
        selectActiveOption: we,
        selectOption: Se,
        search: De,
        clearSearch: Ie,
      }),
      []
    ),
    Te = { ref: C },
    V = c.useRef(null),
    ke = _();
  return (
    c.useEffect(() => {
      V.current &&
        n !== void 0 &&
        ke.addEventListener(V.current, "reset", () => {
          w?.(n);
        });
    }, [V, w]),
    I.createElement(
      ne.Provider,
      { value: Ee },
      I.createElement(
        ae.Provider,
        { value: h },
        I.createElement(
          Ue,
          { value: F(h.listboxState, { 0: Q.Open, 1: Q.Closed }) },
          a != null &&
            x != null &&
            ve({ [a]: x }).map(([f, b], N) =>
              I.createElement(We, {
                features: Ve.Hidden,
                ref:
                  N === 0
                    ? (G) => {
                        var le;
                        V.current =
                          (le = G?.closest("form")) != null ? le : null;
                      }
                    : void 0,
                ...Ge({
                  key: f,
                  as: "input",
                  type: "hidden",
                  hidden: !0,
                  readOnly: !0,
                  form: i,
                  name: f,
                  value: b,
                }),
              })
            ),
          z({
            ourProps: Te,
            theirProps: j,
            slot: je,
            defaultTag: yt,
            name: "Listbox",
          })
        )
      )
    )
  );
}
let jt = "button";
function St(e, r) {
  var t;
  let n = X(),
    { id: i = `headlessui-listbox-button-${n}`, ...a } = e,
    o = W("Listbox.Button"),
    s = U("Listbox.Button"),
    p = M(o.buttonRef, r),
    g = _(),
    O = v((m) => {
      switch (m.key) {
        case S.Space:
        case S.Enter:
        case S.ArrowDown:
          m.preventDefault(),
            s.openListbox(),
            g.nextFrame(() => {
              o.value || s.goToOption(R.First);
            });
          break;
        case S.ArrowUp:
          m.preventDefault(),
            s.openListbox(),
            g.nextFrame(() => {
              o.value || s.goToOption(R.Last);
            });
          break;
      }
    }),
    j = v((m) => {
      switch (m.key) {
        case S.Space:
          m.preventDefault();
          break;
      }
    }),
    P = v((m) => {
      if (He(m.currentTarget)) return m.preventDefault();
      o.listboxState === 0
        ? (s.closeListbox(),
          g.nextFrame(() => {
            var u;
            return (u = o.buttonRef.current) == null
              ? void 0
              : u.focus({ preventScroll: !0 });
          }))
        : (m.preventDefault(), s.openListbox());
    }),
    C = be(() => {
      if (o.labelId) return [o.labelId, i].join(" ");
    }, [o.labelId, i]),
    x = c.useMemo(
      () => ({
        open: o.listboxState === 0,
        disabled: o.disabled,
        value: o.value,
      }),
      [o]
    ),
    w = {
      ref: p,
      id: i,
      type: st(e, o.buttonRef),
      "aria-haspopup": "listbox",
      "aria-controls": (t = o.optionsRef.current) == null ? void 0 : t.id,
      "aria-expanded": o.listboxState === 0,
      "aria-labelledby": C,
      disabled: o.disabled,
      onKeyDown: O,
      onKeyUp: j,
      onClick: P,
    };
  return z({
    ourProps: w,
    theirProps: a,
    slot: x,
    defaultTag: jt,
    name: "Listbox.Button",
  });
}
let wt = "label";
function Nt(e, r) {
  let t = X(),
    { id: n = `headlessui-listbox-label-${t}`, ...i } = e,
    a = W("Listbox.Label"),
    o = U("Listbox.Label"),
    s = M(a.labelRef, r);
  T(() => o.registerLabel(n), [n]);
  let p = v(() => {
      var O;
      return (O = a.buttonRef.current) == null
        ? void 0
        : O.focus({ preventScroll: !0 });
    }),
    g = c.useMemo(
      () => ({ open: a.listboxState === 0, disabled: a.disabled }),
      [a]
    );
  return z({
    ourProps: { ref: s, id: n, onClick: p },
    theirProps: i,
    slot: g,
    defaultTag: wt,
    name: "Listbox.Label",
  });
}
let Rt = "ul",
  Ct = ie.RenderStrategy | ie.Static;
function Lt(e, r) {
  var t;
  let n = X(),
    { id: i = `headlessui-listbox-options-${n}`, ...a } = e,
    o = W("Listbox.Options"),
    s = U("Listbox.Options"),
    p = M(o.optionsRef, r),
    g = _(),
    O = _(),
    j = qe(),
    P = j !== null ? (j & Q.Open) === Q.Open : o.listboxState === 0;
  c.useEffect(() => {
    var u;
    let y = o.optionsRef.current;
    y &&
      o.listboxState === 0 &&
      y !== ((u = Ke(y)) == null ? void 0 : u.activeElement) &&
      y.focus({ preventScroll: !0 });
  }, [o.listboxState, o.optionsRef]);
  let C = v((u) => {
      switch ((O.dispose(), u.key)) {
        case S.Space:
          if (o.searchQuery !== "")
            return u.preventDefault(), u.stopPropagation(), s.search(u.key);
        case S.Enter:
          if (
            (u.preventDefault(),
            u.stopPropagation(),
            o.activeOptionIndex !== null)
          ) {
            let { dataRef: y } = o.options[o.activeOptionIndex];
            s.onChange(y.current.value);
          }
          o.mode === 0 &&
            (s.closeListbox(),
            re().nextFrame(() => {
              var y;
              return (y = o.buttonRef.current) == null
                ? void 0
                : y.focus({ preventScroll: !0 });
            }));
          break;
        case F(o.orientation, {
          vertical: S.ArrowDown,
          horizontal: S.ArrowRight,
        }):
          return u.preventDefault(), u.stopPropagation(), s.goToOption(R.Next);
        case F(o.orientation, { vertical: S.ArrowUp, horizontal: S.ArrowLeft }):
          return (
            u.preventDefault(), u.stopPropagation(), s.goToOption(R.Previous)
          );
        case S.Home:
        case S.PageUp:
          return u.preventDefault(), u.stopPropagation(), s.goToOption(R.First);
        case S.End:
        case S.PageDown:
          return u.preventDefault(), u.stopPropagation(), s.goToOption(R.Last);
        case S.Escape:
          return (
            u.preventDefault(),
            u.stopPropagation(),
            s.closeListbox(),
            g.nextFrame(() => {
              var y;
              return (y = o.buttonRef.current) == null
                ? void 0
                : y.focus({ preventScroll: !0 });
            })
          );
        case S.Tab:
          u.preventDefault(), u.stopPropagation();
          break;
        default:
          u.key.length === 1 &&
            (s.search(u.key), O.setTimeout(() => s.clearSearch(), 350));
          break;
      }
    }),
    x = be(() => {
      var u;
      return (u = o.buttonRef.current) == null ? void 0 : u.id;
    }, [o.buttonRef.current]),
    w = c.useMemo(() => ({ open: o.listboxState === 0 }), [o]),
    m = {
      "aria-activedescendant":
        o.activeOptionIndex === null ||
        (t = o.options[o.activeOptionIndex]) == null
          ? void 0
          : t.id,
      "aria-multiselectable": o.mode === 1 ? !0 : void 0,
      "aria-labelledby": x,
      "aria-orientation": o.orientation,
      id: i,
      onKeyDown: C,
      role: "listbox",
      tabIndex: 0,
      ref: p,
    };
  return z({
    ourProps: m,
    theirProps: a,
    slot: w,
    defaultTag: Rt,
    features: Ct,
    visible: P,
    name: "Listbox.Options",
  });
}
let Pt = "li";
function Dt(e, r) {
  let t = X(),
    {
      id: n = `headlessui-listbox-option-${t}`,
      disabled: i = !1,
      value: a,
      ...o
    } = e,
    s = W("Listbox.Option"),
    p = U("Listbox.Option"),
    g =
      s.activeOptionIndex !== null
        ? s.options[s.activeOptionIndex].id === n
        : !1,
    O = s.isSelected(a),
    j = c.useRef(null),
    P = mt(j),
    C = xe({
      disabled: i,
      value: a,
      domRef: j,
      get textValue() {
        return P();
      },
    }),
    x = M(r, j);
  T(() => {
    if (s.listboxState !== 0 || !g || s.activationTrigger === 0) return;
    let d = re();
    return (
      d.requestAnimationFrame(() => {
        var D, h;
        (h = (D = j.current) == null ? void 0 : D.scrollIntoView) == null ||
          h.call(D, { block: "nearest" });
      }),
      d.dispose
    );
  }, [j, g, s.listboxState, s.activationTrigger, s.activeOptionIndex]),
    T(() => p.registerOption(n, C), [C, n]);
  let w = v((d) => {
      if (i) return d.preventDefault();
      p.onChange(a),
        s.mode === 0 &&
          (p.closeListbox(),
          re().nextFrame(() => {
            var D;
            return (D = s.buttonRef.current) == null
              ? void 0
              : D.focus({ preventScroll: !0 });
          }));
    }),
    m = v(() => {
      if (i) return p.goToOption(R.Nothing);
      p.goToOption(R.Specific, n);
    }),
    u = ut(),
    y = v((d) => u.update(d)),
    k = v((d) => {
      u.wasMoved(d) && (i || g || p.goToOption(R.Specific, n, 0));
    }),
    A = v((d) => {
      u.wasMoved(d) && (i || (g && p.goToOption(R.Nothing)));
    }),
    B = c.useMemo(() => ({ active: g, selected: O, disabled: i }), [g, O, i]);
  return z({
    ourProps: {
      id: n,
      ref: x,
      role: "option",
      tabIndex: i === !0 ? void 0 : -1,
      "aria-disabled": i === !0 ? !0 : void 0,
      "aria-selected": O,
      disabled: void 0,
      onClick: w,
      onFocus: m,
      onPointerEnter: y,
      onMouseEnter: y,
      onPointerMove: k,
      onMouseMove: k,
      onPointerLeave: A,
      onMouseLeave: A,
    },
    theirProps: o,
    slot: B,
    defaultTag: Pt,
    name: "Listbox.Option",
  });
}
let It = $(Ot),
  Et = $(St),
  Tt = $(Nt),
  kt = $(Lt),
  At = $(Dt),
  q = Object.assign(It, { Button: Et, Label: Tt, Options: kt, Option: At });
var ye = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  de = I.createContext && I.createContext(ye),
  Bt = ["attr", "size", "title"];
function Ft(e, r) {
  if (e == null) return {};
  var t = $t(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(r.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function $t(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    Y.apply(this, arguments)
  );
}
function pe(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function J(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? pe(Object(t), !0).forEach(function (n) {
          Mt(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : pe(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function Mt(e, r, t) {
  return (
    (r = zt(r)),
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function zt(e) {
  var r = Ut(e, "string");
  return typeof r == "symbol" ? r : String(r);
}
function Ut(e, r) {
  if (typeof e != "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Oe(e) {
  return (
    e &&
    e.map((r, t) => I.createElement(r.tag, J({ key: t }, r.attr), Oe(r.child)))
  );
}
function Wt(e) {
  return (r) => I.createElement(Vt, Y({ attr: J({}, e.attr) }, r), Oe(e.child));
}
function Vt(e) {
  var r = (t) => {
    var { attr: n, size: i, title: a } = e,
      o = Ft(e, Bt),
      s = i || t.size || "1em",
      p;
    return (
      t.className && (p = t.className),
      e.className && (p = (p ? p + " " : "") + e.className),
      I.createElement(
        "svg",
        Y(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          n,
          o,
          {
            className: p,
            style: J(J({ color: e.color || t.color }, t.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        a && I.createElement("title", null, a),
        e.children
      )
    );
  };
  return de !== void 0
    ? I.createElement(de.Consumer, null, (t) => r(t))
    : r(ye);
}
function Gt(e) {
  return Wt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function me({
  selected: e,
  options: r,
  error: t,
  onValueChange: n,
  textDefault: i,
}) {
  return l.jsx("div", {
    className: "w-full",
    children: l.jsxs(q, {
      value: e,
      onChange: n,
      children: [
        l.jsxs("div", {
          className: "relative mt-1",
          children: [
            l.jsxs(q.Button, {
              className: `w-full p-2 px-3 border border-[rgba(195,169,221,0.90)] rounded-lg focus:border-[#A665FA] focus:outline-none ${
                e?.title ? "text-white" : "text-white/50"
              } bg-[#544660]`,
              children: [
                l.jsx("span", {
                  className: "block truncate text-left",
                  children: e?.title ?? i,
                }),
                l.jsx("span", {
                  className:
                    "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                  children: l.jsx(Gt, {}),
                }),
              ],
            }),
            l.jsx(Qe, {
              as: c.Fragment,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: l.jsx(q.Options, {
                className:
                  "absolute z-[99] mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#544660] border-[rgba(195,169,221,0.90)] py-1 text-base shadow-lg focus:outline-none sm:text-sm",
                children: r.map((a, o) =>
                  l.jsx(
                    q.Option,
                    {
                      className: ({ active: s }) =>
                        `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                          s ? "bg-[#6f6e6e]" : "text-white"
                        }`,
                      value: a,
                      children: ({ selected: s }) =>
                        l.jsx(l.Fragment, {
                          children: l.jsx("span", {
                            className: `block truncate ${
                              s ? "font-medium text-[#B47EF2]" : "font-normal"
                            }`,
                            children: a.title,
                          }),
                        }),
                    },
                    o
                  )
                ),
              }),
            }),
          ],
        }),
        t &&
          l.jsx("p", { className: "text-red-500 text-xs mt-2", children: t }),
      ],
    }),
  });
}
const qt = L.object({
    businessName: L.string().min(1, "Business Name is required"),
    officialWebsite: L.string()
      .url("Invalid website address")
      .min(1, "Website is required"),
    corporateEmail: L.string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    purpose: L.string()
      .min(10, "Purpose/Use Case must be at least 10 characters")
      .min(1, "Purpose/Use Case is required"),
    fullName: L.string().min(1, "Full name is required"),
    plan: L.string().min(1, "Plan is required"),
    location: L.string().min(1, "Location is required"),
    os: L.string().min(1, "OS is required"),
    role: L.string()
      .min(5, "Role/Designation must be at least 10 characters")
      .min(1, "Role/Designation is required"),
    email: L.string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    telegram: L.string().min(1, "Telegram Username is required"),
  }),
  Kt = [
    { title: "Australia", value: "Australia" },
    { title: "Austria", value: "Austria" },
    { title: "Belgium", value: "Belgium" },
    { title: "Brazil", value: "Brazil" },
    { title: "Bulgaria", value: "Bulgaria" },
    { title: "Canada", value: "Canada" },
    { title: "Czech", value: "Czech" },
    { title: "Denmark", value: "Denmark" },
    { title: "Estonia", value: "Estonia" },
    { title: "France", value: "France" },
    { title: "Germany", value: "Germany" },
    { title: "Hong Kong", value: "Hong Kong" },
    { title: "Hungary", value: "Hungary" },
    { title: "Ireland", value: "Ireland" },
    { title: "Italy", value: "Italy" },
    { title: "Japan", value: "Japan" },
    { title: "Kazakhstan", value: "Kazakhstan" },
    { title: "Netherlands", value: "Netherlands" },
    { title: "Norway", value: "Norway" },
    { title: "Poland", value: "Poland" },
    { title: "Singapore", value: "Singapore" },
    { title: "Spain", value: "Spain" },
    { title: "Sweden", value: "Sweden" },
    { title: "UAE", value: "UAE" },
    { title: "Ukraine", value: "Ukraine" },
    { title: "USA", value: "USA" },
    { title: "UK", value: "UK" },
  ],
  Ht = [
    { title: "Ubuntu x64", value: "Ubuntu x64" },
    { title: "Debian x64", value: "Debian x64" },
    { title: "AlmaLinux x64", value: "AlmaLinux x64" },
    { title: "CentOS x64", value: "CentOS x64" },
    { title: "Mikrotik CHR", value: "Mikrotik CHR" },
    { title: "RockyLinux", value: "RockyLinux" },
    { title: "Windows Server", value: "Windows Server" },
    { title: "Windows 10", value: "Windows 10" },
  ],
  _t = ({ onClose: e, model: r }) => {
    const [t, n] = c.useState(!1),
      [i, a] = c.useState(),
      [o, s] = c.useState(),
      { address: p } = fe(),
      { open: g } = Ae(),
      { data: O, isLoading: j } = Be({
        ...rt,
        functionName: "balanceOf",
        args: [p],
      }),
      P = c.useMemo(
        () => new ee(O?.toString() ?? 0).dividedBy(Ye.pow(18)).toString(),
        [O]
      ),
      C = c.useMemo(
        () => new ee(P).gte(new ee(r.price).multipliedBy(1e3)),
        [P, r]
      ),
      {
        register: x,
        handleSubmit: w,
        formState: { errors: m },
        setValue: u,
      } = Je({
        resolver: Xe(qt),
        mode: "onChange",
        defaultValues: {
          businessName: "",
          officialWebsite: "",
          corporateEmail: "",
          purpose: "",
          fullName: "",
          role: "",
          email: "",
          telegram: "",
          plan: `${r.name} - Linux NVMe`,
          location: "",
          os: "",
        },
      }),
      y = (d) => {
        a(d), u("location", d.value);
      },
      k = (d) => {
        s(d), u("os", d.value);
      },
      A = async (d) => {
        if (!(!d || B))
          try {
            n(!0),
              (
                await nt.post(at, {
                  Address: p,
                  Model: r.name,
                  "Business Name": d.businessName,
                  "Official Website": d.officialWebsite,
                  "Corporate Email": d.corporateEmail,
                  "Purpose/Use Case": d.purpose,
                  "Full Name": d.fullName,
                  "Role/Designation": d.role,
                  "Your Email": d.email,
                  "Your Telegram": d.telegram,
                  Plan: d.plan,
                  Location: d.location,
                  Os: d.os,
                })
              ).status === 200 && (e(), Fe.success("Form sent!"));
          } catch (D) {
            console.log(D);
          } finally {
            n(!1);
          }
      },
      B = c.useMemo(() => j || !C || t, [j, C, t]);
    return l.jsxs("div", {
      className:
        "bg-[rgba(33,24,41,0.90)] rounded-3xl p-5 md:p-8 max-w-[630px] border border-[rgba(84,70,95,0.60)] space-y-5 w-full md:w-[630px]",
      children: [
        l.jsxs("div", {
          className: "space-y-2",
          children: [
            l.jsx("h2", {
              className:
                "text-2xl md:text-4xl font-semibold uppercase text-[#D1C4DA]",
              children: "Rent VM",
            }),
            l.jsxs("div", {
              className: "text-sm text-[rgba(209,196,218,0.90)]",
              children: [
                l.jsx("p", {
                  children:
                    "Submit your inquiry, and our team will reply soon.",
                }),
                l.jsxs("p", {
                  children: [
                    "For further information, please join",
                    " ",
                    l.jsx("a", {
                      href: "https://t.me/OpClouds_Tech",
                      className: "text-[#A665FA]",
                      target: "_blank",
                      children: "@Oracle_Tech",
                    }),
                    " ",
                    "on Telegram.",
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsxs("form", {
          className: "space-y-6",
          onSubmit: w(A),
          children: [
            l.jsx("div", { children: "*Business Profile:" }),
            l.jsx(E, {
              placeholder: "Business Name",
              errors: m,
              register: x,
              name: "businessName",
            }),
            l.jsx(E, {
              placeholder: "Official Website",
              errors: m,
              register: x,
              name: "officialWebsite",
            }),
            l.jsx(E, {
              placeholder: "Corporate Email",
              errors: m,
              register: x,
              name: "corporateEmail",
            }),
            l.jsx("div", { children: "*Details on VM:" }),
            l.jsx(Ze, {
              placeholder: "Purpose/Use Case",
              errors: m,
              register: x,
              name: "purpose",
            }),
            l.jsx(E, {
              placeholder: "Plan",
              errors: m,
              register: x,
              value: `${r.name} - Linux NVMe`,
              disabled: !0,
              name: "plan",
            }),
            l.jsx(me, {
              selected: i,
              options: Kt,
              onValueChange: y,
              error: m.location?.message,
              textDefault: "Select Location",
            }),
            l.jsx(me, {
              selected: o,
              options: Ht,
              onValueChange: k,
              error: m.location?.message,
              textDefault: "Select Os",
            }),
            l.jsx("div", { children: "*Personal Contact:" }),
            l.jsx(E, {
              placeholder: "Full Name",
              errors: m,
              register: x,
              name: "fullName",
            }),
            l.jsx(E, {
              placeholder: "Role/Designation within the Organization",
              errors: m,
              register: x,
              name: "role",
            }),
            l.jsx(E, {
              placeholder: "Your Email",
              errors: m,
              register: x,
              name: "email",
            }),
            l.jsx(E, {
              placeholder: "Your Telegram Handle",
              errors: m,
              register: x,
              name: "telegram",
            }),
            l.jsxs("div", {
              className:
                "text-[rgba(240,227,250,0.9)] flex items-center justify-between mt-8",
              children: [
                l.jsxs("p", {
                  className: "md:hidden",
                  children: ["Price: ", r.price, "K"],
                }),
                l.jsxs("p", {
                  className: "hidden md:block",
                  children: ["Price: ", r.price, "K ORC/Month"],
                }),
                l.jsxs("p", {
                  children: [
                    "Your $ORC balance:",
                    " ",
                    j ? l.jsx(et, {}) : tt(P, 4),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex items-center justify-between mt-8",
              children: [
                l.jsx(H, {
                  variant: "outline",
                  type: "button",
                  onClick: e,
                  children: "Close",
                }),
                p
                  ? l.jsx(H, {
                      loading: t,
                      type: "submit",
                      disabled: B,
                      children: j
                        ? "Checking balance..."
                        : C
                        ? "Submit"
                        : "Insufficient balance",
                    })
                  : l.jsx(H, {
                      type: "button",
                      onClick: g,
                      children: "Connect Wallet",
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Qt = [
    {
      name: "Basic",
      price: 20,
      countries: 5,
      cpu: "1x2.6Ghz",
      ram: 1,
      disk: 20,
      band: "2 TB",
    },
    {
      name: "Beginner",
      price: 35,
      countries: 5,
      cpu: "2x2.6Ghz",
      ram: 2,
      disk: 30,
      band: "3 TB",
    },
    {
      name: "Standard",
      price: 50,
      countries: 5,
      cpu: "1x2.6Ghz",
      ram: 4,
      disk: 40,
      band: "Unmetered",
    },
    {
      name: "Superior",
      price: 70,
      countries: 5,
      cpu: "1x2.6Ghz",
      ram: 8,
      disk: 50,
      band: "Unmetered",
    },
    {
      name: "Advanced",
      price: 80,
      countries: 5,
      cpu: "6x2.6Ghz",
      ram: 16,
      disk: 80,
      band: "Unmetered",
    },
    {
      name: "Ultimate",
      price: 100,
      countries: 5,
      cpu: "8x2.6Ghz",
      ram: 32,
      disk: 100,
      band: "Unmetered",
    },
  ],
  Yt = [
    "IPV4 OPTIONAL",
    "1GPS PORT",
    "WEEKLY BACKUP",
    "KVM VIRTUALIZATION",
    "DDOS PROTECTION",
  ],
  K = ({ value: e, type: r, border: t = !0 }) =>
    l.jsxs("div", {
      className: "flex w-full flex-col items-center ",
      children: [
        l.jsxs("div", {
          className: "flex items-center justify-between w-full pb-[10px]",
          children: [
            l.jsx("p", {
              className: "font-semibold max-md:text-sm text-[#E6DDEB]",
              children: e,
            }),
            l.jsx("p", {
              className:
                "py-0.5 px-[5px] max-md:text-sm rounded-md bg-[#7A6692]",
              children: r,
            }),
          ],
        }),
        t &&
          l.jsx("div", {
            style: {
              background:
                "radial-gradient(circle at center, rgba(98, 81, 118, 0.8) 0%, rgba(97, 79, 117, 0.8) 30%, rgba(70, 55, 88, 0.5) 70%, rgba(70, 55, 88, 0) 100%)",
            },
            className: "h-[1px] w-full",
          }),
      ],
    }),
  Jt = () => {
    const [e, r] = c.useState(),
      [t, n] = c.useState(!1);
    return l.jsxs("div", {
      className: "relative pb-20",
      children: [
        l.jsx("img", {
          src: lt,
          className:
            "w-full absolute opacity-80 h-full max-md:object-cover top-[3%] md:top-[20%]",
          alt: "",
        }),
        l.jsx("div", {
          style: { filter: "blur(150px)" },
          className:
            "w-[400px] h-[400px] md:w-[546px] -z-10 md:h-[546px] bg-[rgb(42,19,41,0.9)] absolute top-[0%] right-[-72%] md:top-[-5%] md:right-[-26%]",
        }),
        l.jsx("div", {
          style: { filter: "blur(150px)" },
          className:
            "h-[300px] w-[300px] md:w-[822px] -z-10 md:h-[822px] bg-[rgb(42,19,41,0.9)] absolute md:top-[40%] md:left-[-26%]",
        }),
        l.jsx("div", {
          style: { filter: "blur(150px)" },
          className:
            "w-[600px] h-[600px] bg-[#1e153b] absolute top-[50%] right-[-20% -z-10]",
        }),
        l.jsx("div", {
          style: { filter: "blur(150px)" },
          className:
            "w-[600px] h-[600px] bg-[#1e153b] absolute bottom-[0%] md:bottom-[-7%] left-[-23%] -z-10",
        }),
        l.jsxs("div", {
          className: "container mx-auto",
          children: [
            l.jsx("h1", {
              className:
                "text-3xl md:text-5xl font-semibold mb-1 md:mb-8 text-[#D1C4DA] max-md:flex items-center justify-center w-full",
              children: "Live Servers",
            }),
            l.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full pt-8 gap-6 relative z-50",
              children: Qt.map((i, a) =>
                l.jsxs(
                  "div",
                  {
                    className:
                      "p-4 md:p-8 rounded-2xl flex flex-col items-center gap-6 bg-[rgba(43,31,52,0.90)] hover:bg-[rgba(50,19,62,0.80)] group border border-transparent hover:border-[#55295D] transition-all duration-200",
                    children: [
                      l.jsx("div", {
                        style: {
                          background:
                            "var(--Neon-1, radial-gradient(87.08% 85.65% at 104.95% -4.05%, #FF8BF2 0%, #A664FA 100%))",
                        },
                        className: "py-2 md:py-3 px-4 rounded-md",
                        children: l.jsx("div", {
                          className:
                            "text-lg md:text-2xl uppercase font-semibold",
                          children: i.name,
                        }),
                      }),
                      l.jsxs("div", {
                        children: [
                          l.jsxs("span", {
                            className: "flex items-end gap-x-2 justify-center",
                            children: [
                              l.jsxs("span", {
                                className:
                                  "flex items-center gap-x-2 title-nodes md:text-[56px] text-[48px] leading-[48px] md:leading-[56px] tracking-[1px] font-semibold",
                                children: [
                                  i.price,
                                  l.jsx("span", { children: "K ORC" }),
                                ],
                              }),
                              l.jsx("span", {
                                className:
                                  "text-xl md:text-2xl font-medium text-[#BFB1C7] tracking-[1px]",
                                children: "/mo",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "uppercase text-[13px] md:text-sm font-semibold text-[#D6C3EA] mt-[6px] flex items-center justify-center gap-3",
                            children: [
                              l.jsxs("div", {
                                className: "",
                                children: [i.countries, " countries"],
                              }),
                              l.jsx("div", {
                                className:
                                  "bg-[rgba(178,145,213,0.70)] w-[0.5px] h-[12px] rounded-full",
                              }),
                              l.jsx("div", { children: "Linux" }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 rounded-lg flex flex-col items-center gap-2 bg-[#40304E] group-hover:bg-[#41194E] border border-transparent group-hover:border-[#FF8BF2] w-full transition-all duration-200",
                        children: [
                          l.jsx(K, { type: "CPU", value: `${i.cpu}` }),
                          l.jsx(K, { type: "RAM", value: `${i.ram} GB` }),
                          l.jsx(K, { type: "SSD Disk", value: `${i.disk} GB` }),
                          l.jsx(K, {
                            border: !1,
                            type: "BANDWIDTH",
                            value: `${i.band}`,
                          }),
                        ],
                      }),
                      l.jsx(H, {
                        onClick: () => {
                          r(i), n(!0);
                        },
                        className: "w-full text-lg",
                        children: "Order Now",
                      }),
                      l.jsx("div", {
                        className: "w-full flex items-center flex-wrap gap-1",
                        children: Yt.map((o, s) =>
                          l.jsx(
                            "div",
                            {
                              className:
                                "px-[5px] rounded py-1 text-[10px] md:text-xs leading-5 font-medium tracking-[0.5px] text-[#D5CEDD] bg-[#3E324E] group-hover:bg-[#3A225A] transition-all duration-200",
                              children: o,
                            },
                            s
                          )
                        ),
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
            e &&
              l.jsx(it, {
                isOpen: t,
                closeModal: () => n(!1),
                children: l.jsx(_t, { onClose: () => n(!1), model: e }),
              }),
          ],
        }),
      ],
    });
  },
  tr = () => {
    const { address: e } = fe();
    return l.jsxs("div", {
      className: "text-white",
      children: [
        l.jsx("div", {
          className: "mb-8 mx-auto container",
          children:
            !e &&
            l.jsx("div", {
              className:
                "p-5 md:p-8 gap-4 rounded-3xl bg-[rgba(52,38,67,0.70)] mt-4 md:mt-0",
              children: l.jsx("h2", {
                className: "md:text-2xl font-medium capitalize text-[#B2A5C0]",
                children: "Connect Your Wallet To Get Started!",
              }),
            }),
        }),
        l.jsx(Jt, {}),
      ],
    });
  };
export { tr as default };
