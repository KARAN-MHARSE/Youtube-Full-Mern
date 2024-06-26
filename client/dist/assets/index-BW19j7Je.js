function Dd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var La = { exports: {} },
  Ql = {},
  Ma = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er = Symbol.for("react.element"),
  Ud = Symbol.for("react.portal"),
  Fd = Symbol.for("react.fragment"),
  $d = Symbol.for("react.strict_mode"),
  Ad = Symbol.for("react.profiler"),
  Bd = Symbol.for("react.provider"),
  Vd = Symbol.for("react.context"),
  Hd = Symbol.for("react.forward_ref"),
  Wd = Symbol.for("react.suspense"),
  Qd = Symbol.for("react.memo"),
  Kd = Symbol.for("react.lazy"),
  bs = Symbol.iterator;
function Gd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bs && e[bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Da = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ia = Object.assign,
  Ua = {};
function zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ua),
    (this.updater = n || Da);
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fa() {}
Fa.prototype = zn.prototype;
function Zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ua),
    (this.updater = n || Da);
}
var Jo = (Zo.prototype = new Fa());
Jo.constructor = Zo;
Ia(Jo, zn.prototype);
Jo.isPureReactComponent = !0;
var eu = Array.isArray,
  $a = Object.prototype.hasOwnProperty,
  qo = { current: null },
  Aa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ba(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      $a.call(t, r) && !Aa.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Er,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: qo.current,
  };
}
function Yd(e, t) {
  return {
    $$typeof: Er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Er;
}
function Xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tu = /\/+/g;
function mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xd("" + e.key)
    : t.toString(36);
}
function br(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Er:
          case Ud:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + mi(o, 0) : r),
      eu(l)
        ? ((n = ""),
          e != null && (n = e.replace(tu, "$&/") + "/"),
          br(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (bo(l) &&
            (l = Yd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(tu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), eu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + mi(i, s);
      o += br(i, t, n, u, l);
    }
  else if (((u = Gd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + mi(i, s++)), (o += br(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    br(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Zd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  el = { transition: null },
  Jd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: el,
    ReactCurrentOwner: qo,
  };
L.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = zn;
L.Fragment = Fd;
L.Profiler = Ad;
L.PureComponent = Zo;
L.StrictMode = $d;
L.Suspense = Wd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ia({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = qo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      $a.call(t, u) &&
        !Aa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bd, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Ba;
L.createFactory = function (e) {
  var t = Ba.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Hd, render: e };
};
L.isValidElement = bo;
L.lazy = function (e) {
  return { $$typeof: Kd, _payload: { _status: -1, _result: e }, _init: Zd };
};
L.memo = function (e, t) {
  return { $$typeof: Qd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = el.transition;
  el.transition = {};
  try {
    e();
  } finally {
    el.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
L.useContext = function (e) {
  return de.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
L.useId = function () {
  return de.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return de.current.useRef(e);
};
L.useState = function (e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return de.current.useTransition();
};
L.version = "18.2.0";
Ma.exports = L;
var k = Ma.exports;
const et = Id(k),
  Qi = Dd({ __proto__: null, default: et }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd = k,
  bd = Symbol.for("react.element"),
  ep = Symbol.for("react.fragment"),
  tp = Object.prototype.hasOwnProperty,
  np = qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Va(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) tp.call(t, r) && !rp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: bd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: np.current,
  };
}
Ql.Fragment = ep;
Ql.jsx = Va;
Ql.jsxs = Va;
La.exports = Ql;
var c = La.exports,
  Ki = {},
  Ha = { exports: {} },
  Pe = {},
  Wa = { exports: {} },
  Qa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, O) {
    var T = z.length;
    z.push(O);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        q = z[Q];
      if (0 < l(q, O)) (z[Q] = O), (z[T] = q), (T = Q);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var O = z[0],
      T = z.pop();
    if (T !== O) {
      z[0] = T;
      e: for (var Q = 0, q = z.length, Rr = q >>> 1; Q < Rr; ) {
        var Mt = 2 * (Q + 1) - 1,
          hi = z[Mt],
          Dt = Mt + 1,
          Lr = z[Dt];
        if (0 > l(hi, T))
          Dt < q && 0 > l(Lr, hi)
            ? ((z[Q] = Lr), (z[Dt] = T), (Q = Dt))
            : ((z[Q] = hi), (z[Mt] = T), (Q = Mt));
        else if (Dt < q && 0 > l(Lr, T)) (z[Q] = Lr), (z[Dt] = T), (Q = Dt);
        else break e;
      }
    }
    return O;
  }
  function l(z, O) {
    var T = z.sortIndex - O.sortIndex;
    return T !== 0 ? T : z.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    a = [],
    f = 1,
    d = null,
    v = 3,
    g = !1,
    y = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(z) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= z)
        r(a), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(a);
    }
  }
  function x(z) {
    if (((w = !1), h(z), !y))
      if (n(u) !== null) (y = !0), di(E);
      else {
        var O = n(a);
        O !== null && pi(x, O.startTime - z);
      }
  }
  function E(z, O) {
    (y = !1), w && ((w = !1), m(N), (N = -1)), (g = !0);
    var T = v;
    try {
      for (
        h(O), d = n(u);
        d !== null && (!(d.expirationTime > O) || (z && !we()));

      ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          (d.callback = null), (v = d.priorityLevel);
          var q = Q(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            h(O);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var Rr = !0;
      else {
        var Mt = n(a);
        Mt !== null && pi(x, Mt.startTime - O), (Rr = !1);
      }
      return Rr;
    } finally {
      (d = null), (v = T), (g = !1);
    }
  }
  var j = !1,
    _ = null,
    N = -1,
    $ = 5,
    R = -1;
  function we() {
    return !(e.unstable_now() - R < $);
  }
  function Ln() {
    if (_ !== null) {
      var z = e.unstable_now();
      R = z;
      var O = !0;
      try {
        O = _(!0, z);
      } finally {
        O ? Mn() : ((j = !1), (_ = null));
      }
    } else j = !1;
  }
  var Mn;
  if (typeof p == "function")
    Mn = function () {
      p(Ln);
    };
  else if (typeof MessageChannel < "u") {
    var qs = new MessageChannel(),
      Md = qs.port2;
    (qs.port1.onmessage = Ln),
      (Mn = function () {
        Md.postMessage(null);
      });
  } else
    Mn = function () {
      S(Ln, 0);
    };
  function di(z) {
    (_ = z), j || ((j = !0), Mn());
  }
  function pi(z, O) {
    N = S(function () {
      z(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), di(E));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = v;
      }
      var T = v;
      v = O;
      try {
        return z();
      } finally {
        v = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, O) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var T = v;
      v = z;
      try {
        return O();
      } finally {
        v = T;
      }
    }),
    (e.unstable_scheduleCallback = function (z, O, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        z)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = T + q),
        (z = {
          id: f++,
          callback: O,
          priorityLevel: z,
          startTime: T,
          expirationTime: q,
          sortIndex: -1,
        }),
        T > Q
          ? ((z.sortIndex = T),
            t(a, z),
            n(u) === null &&
              z === n(a) &&
              (w ? (m(N), (N = -1)) : (w = !0), pi(x, T - Q)))
          : ((z.sortIndex = q), t(u, z), y || g || ((y = !0), di(E))),
        z
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (z) {
      var O = v;
      return function () {
        var T = v;
        v = O;
        try {
          return z.apply(this, arguments);
        } finally {
          v = T;
        }
      };
    });
})(Qa);
Wa.exports = Qa;
var lp = Wa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ka = k,
  je = lp;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ga = new Set(),
  rr = {};
function Zt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) Ga.add(t[e]);
}
var nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gi = Object.prototype.hasOwnProperty,
  ip =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nu = {},
  ru = {};
function op(e) {
  return Gi.call(ru, e)
    ? !0
    : Gi.call(nu, e)
    ? !1
    : ip.test(e)
    ? (ru[e] = !0)
    : ((nu[e] = !0), !1);
}
function sp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function up(e, t, n, r) {
  if (t === null || typeof t > "u" || sp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var es = /[\-:]([a-z])/g;
function ts(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(es, ts);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(es, ts);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(es, ts);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ns(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (up(t, n, l, r) && (n = null),
    r || l === null
      ? op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var st = Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  rs = Symbol.for("react.strict_mode"),
  Yi = Symbol.for("react.profiler"),
  Ya = Symbol.for("react.provider"),
  Xa = Symbol.for("react.context"),
  ls = Symbol.for("react.forward_ref"),
  Xi = Symbol.for("react.suspense"),
  Zi = Symbol.for("react.suspense_list"),
  is = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  Za = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  vi;
function Hn(e) {
  if (vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vi = (t && t[1]) || "";
    }
  return (
    `
` +
    vi +
    e
  );
}
var gi = !1;
function yi(e, t) {
  if (!e || gi) return "";
  gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (gi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function ap(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yi(e.type, !1)), e;
    case 11:
      return (e = yi(e.type.render, !1)), e;
    case 1:
      return (e = yi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case Yi:
      return "Profiler";
    case rs:
      return "StrictMode";
    case Xi:
      return "Suspense";
    case Zi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xa:
        return (e.displayName || "Context") + ".Consumer";
      case Ya:
        return (e._context.displayName || "Context") + ".Provider";
      case ls:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case is:
        return (
          (t = e.displayName || null), t !== null ? t : Ji(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return Ji(e(t));
        } catch {}
    }
  return null;
}
function cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ji(t);
    case 8:
      return t === rs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ja(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fp(e) {
  var t = Ja(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ir(e) {
  e._valueTracker || (e._valueTracker = fp(e));
}
function qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ja(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qi(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ba(e, t) {
  (t = t.checked), t != null && ns(e, "checked", t, !1);
}
function bi(e, t) {
  ba(e, t);
  var n = jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? eo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && eo(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function eo(e, t, n) {
  (t !== "number" || fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function to(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Wn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jt(n) };
}
function ec(e, t) {
  var n = jt(t.value),
    r = jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function no(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ur,
  nc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ur = Ur || document.createElement("div"),
          Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  dp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function rc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
    ? ("" + t).trim()
    : t + "px";
}
function lc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = rc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pp = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ro(e, t) {
  if (t) {
    if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var io = null;
function os(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oo = null,
  mn = null,
  vn = null;
function au(e) {
  if ((e = _r(e))) {
    if (typeof oo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Zl(t)), oo(e.stateNode, e.type, t));
  }
}
function ic(e) {
  mn ? (vn ? vn.push(e) : (vn = [e])) : (mn = e);
}
function oc() {
  if (mn) {
    var e = mn,
      t = vn;
    if (((vn = mn = null), au(e), t)) for (e = 0; e < t.length; e++) au(t[e]);
  }
}
function sc(e, t) {
  return e(t);
}
function uc() {}
var xi = !1;
function ac(e, t, n) {
  if (xi) return e(t, n);
  xi = !0;
  try {
    return sc(e, t, n);
  } finally {
    (xi = !1), (mn !== null || vn !== null) && (uc(), oc());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var so = !1;
if (nt)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        so = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    so = !1;
  }
function hp(e, t, n, r, l, i, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Xn = !1,
  dl = null,
  pl = !1,
  uo = null,
  mp = {
    onError: function (e) {
      (Xn = !0), (dl = e);
    },
  };
function vp(e, t, n, r, l, i, o, s, u) {
  (Xn = !1), (dl = null), hp.apply(mp, arguments);
}
function gp(e, t, n, r, l, i, o, s, u) {
  if ((vp.apply(this, arguments), Xn)) {
    if (Xn) {
      var a = dl;
      (Xn = !1), (dl = null);
    } else throw Error(C(198));
    pl || ((pl = !0), (uo = a));
  }
}
function Jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function cu(e) {
  if (Jt(e) !== e) throw Error(C(188));
}
function yp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return cu(l), e;
        if (i === r) return cu(l), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function fc(e) {
  return (e = yp(e)), e !== null ? dc(e) : null;
}
function dc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pc = je.unstable_scheduleCallback,
  fu = je.unstable_cancelCallback,
  xp = je.unstable_shouldYield,
  wp = je.unstable_requestPaint,
  K = je.unstable_now,
  Sp = je.unstable_getCurrentPriorityLevel,
  ss = je.unstable_ImmediatePriority,
  hc = je.unstable_UserBlockingPriority,
  hl = je.unstable_NormalPriority,
  kp = je.unstable_LowPriority,
  mc = je.unstable_IdlePriority,
  Kl = null,
  Ye = null;
function Cp(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Np,
  Ep = Math.log,
  jp = Math.LN2;
function Np(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ep(e) / jp) | 0)) | 0;
}
var Fr = 64,
  $r = 4194304;
function Qn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Qn(s)) : ((i &= o), i !== 0 && (r = Qn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Qn(o)) : i !== 0 && (r = Qn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function _p(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Be(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = _p(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vc() {
  var e = Fr;
  return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function zp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function us(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function gc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yc,
  as,
  xc,
  wc,
  Sc,
  co = !1,
  Ar = [],
  vt = null,
  gt = null,
  yt = null,
  or = new Map(),
  sr = new Map(),
  ft = [],
  Op =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = _r(t)), t !== null && as(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Tp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (vt = Un(vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (gt = Un(gt, e, t, n, r, l)), !0;
    case "mouseover":
      return (yt = Un(yt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return or.set(i, Un(or.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), sr.set(i, Un(sr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function kc(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cc(n)), t !== null)) {
          (e.blockedOn = t),
            Sc(e.priority, function () {
              xc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (io = r), n.target.dispatchEvent(r), (io = null);
    } else return (t = _r(n)), t !== null && as(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  tl(e) && n.delete(t);
}
function Rp() {
  (co = !1),
    vt !== null && tl(vt) && (vt = null),
    gt !== null && tl(gt) && (gt = null),
    yt !== null && tl(yt) && (yt = null),
    or.forEach(pu),
    sr.forEach(pu);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    co ||
      ((co = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Rp)));
}
function ur(e) {
  function t(l) {
    return Fn(l, e);
  }
  if (0 < Ar.length) {
    Fn(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var r = Ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && Fn(vt, e),
      gt !== null && Fn(gt, e),
      yt !== null && Fn(yt, e),
      or.forEach(t),
      sr.forEach(t),
      n = 0;
    n < ft.length;
    n++
  )
    (r = ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && ((n = ft[0]), n.blockedOn === null); )
    kc(n), n.blockedOn === null && ft.shift();
}
var gn = st.ReactCurrentBatchConfig,
  vl = !0;
function Lp(e, t, n, r) {
  var l = D,
    i = gn.transition;
  gn.transition = null;
  try {
    (D = 1), cs(e, t, n, r);
  } finally {
    (D = l), (gn.transition = i);
  }
}
function Mp(e, t, n, r) {
  var l = D,
    i = gn.transition;
  gn.transition = null;
  try {
    (D = 4), cs(e, t, n, r);
  } finally {
    (D = l), (gn.transition = i);
  }
}
function cs(e, t, n, r) {
  if (vl) {
    var l = fo(e, t, n, r);
    if (l === null) Oi(e, t, r, gl, n), du(e, r);
    else if (Tp(l, e, t, n, r)) r.stopPropagation();
    else if ((du(e, r), t & 4 && -1 < Op.indexOf(e))) {
      for (; l !== null; ) {
        var i = _r(l);
        if (
          (i !== null && yc(i),
          (i = fo(e, t, n, r)),
          i === null && Oi(e, t, r, gl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Oi(e, t, r, null, n);
  }
}
var gl = null;
function fo(e, t, n, r) {
  if (((gl = null), (e = os(r)), (e = $t(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gl = e), null;
}
function Cc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Sp()) {
        case ss:
          return 1;
        case hc:
          return 4;
        case hl:
        case kp:
          return 16;
        case mc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null,
  fs = null,
  nl = null;
function Ec() {
  if (nl) return nl;
  var e,
    t = fs,
    n = t.length,
    r,
    l = "value" in pt ? pt.value : pt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (nl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function rl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Br() {
  return !0;
}
function hu() {
  return !1;
}
function ze(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Br
        : hu),
      (this.isPropagationStopped = hu),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Br));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Br));
      },
      persist: function () {},
      isPersistent: Br,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ds = ze(On),
  Nr = H({}, On, { view: 0, detail: 0 }),
  Dp = ze(Nr),
  Si,
  ki,
  $n,
  Gl = H({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ps,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $n &&
            ($n && e.type === "mousemove"
              ? ((Si = e.screenX - $n.screenX), (ki = e.screenY - $n.screenY))
              : (ki = Si = 0),
            ($n = e)),
          Si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ki;
    },
  }),
  mu = ze(Gl),
  Ip = H({}, Gl, { dataTransfer: 0 }),
  Up = ze(Ip),
  Fp = H({}, Nr, { relatedTarget: 0 }),
  Ci = ze(Fp),
  $p = H({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = ze($p),
  Bp = H({}, On, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vp = ze(Bp),
  Hp = H({}, On, { data: 0 }),
  vu = ze(Hp),
  Wp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Gp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function ps() {
  return Gp;
}
var Yp = H({}, Nr, {
    key: function (e) {
      if (e.key) {
        var t = Wp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = rl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ps,
    charCode: function (e) {
      return e.type === "keypress" ? rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? rl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xp = ze(Yp),
  Zp = H({}, Gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gu = ze(Zp),
  Jp = H({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ps,
  }),
  qp = ze(Jp),
  bp = H({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eh = ze(bp),
  th = H({}, Gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nh = ze(th),
  rh = [9, 13, 27, 32],
  hs = nt && "CompositionEvent" in window,
  Zn = null;
nt && "documentMode" in document && (Zn = document.documentMode);
var lh = nt && "TextEvent" in window && !Zn,
  jc = nt && (!hs || (Zn && 8 < Zn && 11 >= Zn)),
  yu = " ",
  xu = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return rh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _c(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rn = !1;
function ih(e, t) {
  switch (e) {
    case "compositionend":
      return _c(t);
    case "keypress":
      return t.which !== 32 ? null : ((xu = !0), yu);
    case "textInput":
      return (e = t.data), e === yu && xu ? null : e;
    default:
      return null;
  }
}
function oh(e, t) {
  if (rn)
    return e === "compositionend" || (!hs && Nc(e, t))
      ? ((e = Ec()), (nl = fs = pt = null), (rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sh[e.type] : t === "textarea";
}
function Pc(e, t, n, r) {
  ic(r),
    (t = yl(t, "onChange")),
    0 < t.length &&
      ((n = new ds("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jn = null,
  ar = null;
function uh(e) {
  $c(e, 0);
}
function Yl(e) {
  var t = sn(e);
  if (qa(t)) return e;
}
function ah(e, t) {
  if (e === "change") return t;
}
var zc = !1;
if (nt) {
  var Ei;
  if (nt) {
    var ji = "oninput" in document;
    if (!ji) {
      var Su = document.createElement("div");
      Su.setAttribute("oninput", "return;"),
        (ji = typeof Su.oninput == "function");
    }
    Ei = ji;
  } else Ei = !1;
  zc = Ei && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  Jn && (Jn.detachEvent("onpropertychange", Oc), (ar = Jn = null));
}
function Oc(e) {
  if (e.propertyName === "value" && Yl(ar)) {
    var t = [];
    Pc(t, ar, e, os(e)), ac(uh, t);
  }
}
function ch(e, t, n) {
  e === "focusin"
    ? (ku(), (Jn = t), (ar = n), Jn.attachEvent("onpropertychange", Oc))
    : e === "focusout" && ku();
}
function fh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(ar);
}
function dh(e, t) {
  if (e === "click") return Yl(t);
}
function ph(e, t) {
  if (e === "input" || e === "change") return Yl(t);
}
function hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : hh;
function cr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gi.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cu(n);
  }
}
function Tc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rc() {
  for (var e = window, t = fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fl(e.document);
  }
  return t;
}
function ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mh(e) {
  var t = Rc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ms(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Eu(n, i));
        var o = Eu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vh = nt && "documentMode" in document && 11 >= document.documentMode,
  ln = null,
  po = null,
  qn = null,
  ho = !1;
function ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ho ||
    ln == null ||
    ln !== fl(r) ||
    ((r = ln),
    "selectionStart" in r && ms(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qn && cr(qn, r)) ||
      ((qn = r),
      (r = yl(po, "onSelect")),
      0 < r.length &&
        ((t = new ds("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ln))));
}
function Vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var on = {
    animationend: Vr("Animation", "AnimationEnd"),
    animationiteration: Vr("Animation", "AnimationIteration"),
    animationstart: Vr("Animation", "AnimationStart"),
    transitionend: Vr("Transition", "TransitionEnd"),
  },
  Ni = {},
  Lc = {};
nt &&
  ((Lc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete on.animationend.animation,
    delete on.animationiteration.animation,
    delete on.animationstart.animation),
  "TransitionEvent" in window || delete on.transitionend.transition);
function Xl(e) {
  if (Ni[e]) return Ni[e];
  if (!on[e]) return e;
  var t = on[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lc) return (Ni[e] = t[n]);
  return e;
}
var Mc = Xl("animationend"),
  Dc = Xl("animationiteration"),
  Ic = Xl("animationstart"),
  Uc = Xl("transitionend"),
  Fc = new Map(),
  Nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Fc.set(e, t), Zt(t, [e]);
}
for (var _i = 0; _i < Nu.length; _i++) {
  var Pi = Nu[_i],
    gh = Pi.toLowerCase(),
    yh = Pi[0].toUpperCase() + Pi.slice(1);
  zt(gh, "on" + yh);
}
zt(Mc, "onAnimationEnd");
zt(Dc, "onAnimationIteration");
zt(Ic, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Uc, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), gp(r, t, void 0, e), (e.currentTarget = null);
}
function $c(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          _u(l, s, a), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          _u(l, s, a), (i = u);
        }
    }
  }
  if (pl) throw ((e = uo), (pl = !1), (uo = null), e);
}
function U(e, t) {
  var n = t[xo];
  n === void 0 && (n = t[xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ac(t, e, 2, !1), n.add(r));
}
function zi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ac(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Hr]) {
    (e[Hr] = !0),
      Ga.forEach(function (n) {
        n !== "selectionchange" && (xh.has(n) || zi(n, !1, e), zi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || ((t[Hr] = !0), zi("selectionchange", !1, t));
  }
}
function Ac(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var l = Lp;
      break;
    case 4:
      l = Mp;
      break;
    default:
      l = cs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !so ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Oi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = $t(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ac(function () {
    var a = i,
      f = os(n),
      d = [];
    e: {
      var v = Fc.get(e);
      if (v !== void 0) {
        var g = ds,
          y = e;
        switch (e) {
          case "keypress":
            if (rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Xp;
            break;
          case "focusin":
            (y = "focus"), (g = Ci);
            break;
          case "focusout":
            (y = "blur"), (g = Ci);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ci;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Up;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = qp;
            break;
          case Mc:
          case Dc:
          case Ic:
            g = Ap;
            break;
          case Uc:
            g = eh;
            break;
          case "scroll":
            g = Dp;
            break;
          case "wheel":
            g = nh;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Vp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = gu;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          m = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var p = a, h; p !== null; ) {
          h = p;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = ir(p, m)), x != null && w.push(dr(p, x, h)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((v = new g(v, y, null, n, f)), d.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== io &&
            (y = n.relatedTarget || n.fromElement) &&
            ($t(y) || y[rt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? $t(y) : null),
              y !== null &&
                ((S = Jt(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = mu),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = gu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = g == null ? v : sn(g)),
            (h = y == null ? v : sn(y)),
            (v = new w(x, p + "leave", g, n, f)),
            (v.target = S),
            (v.relatedTarget = h),
            (x = null),
            $t(f) === a &&
              ((w = new w(m, p + "enter", y, n, f)),
              (w.target = h),
              (w.relatedTarget = S),
              (x = w)),
            (S = x),
            g && y)
          )
            t: {
              for (w = g, m = y, p = 0, h = w; h; h = en(h)) p++;
              for (h = 0, x = m; x; x = en(x)) h++;
              for (; 0 < p - h; ) (w = en(w)), p--;
              for (; 0 < h - p; ) (m = en(m)), h--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = en(w)), (m = en(m));
              }
              w = null;
            }
          else w = null;
          g !== null && Pu(d, v, g, w, !1),
            y !== null && S !== null && Pu(d, S, y, w, !0);
        }
      }
      e: {
        if (
          ((v = a ? sn(a) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var E = ah;
        else if (wu(v))
          if (zc) E = ph;
          else {
            E = fh;
            var j = ch;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = dh);
        if (E && (E = E(e, a))) {
          Pc(d, E, n, f);
          break e;
        }
        j && j(e, v, a),
          e === "focusout" &&
            (j = v._wrapperState) &&
            j.controlled &&
            v.type === "number" &&
            eo(v, "number", v.value);
      }
      switch (((j = a ? sn(a) : window), e)) {
        case "focusin":
          (wu(j) || j.contentEditable === "true") &&
            ((ln = j), (po = a), (qn = null));
          break;
        case "focusout":
          qn = po = ln = null;
          break;
        case "mousedown":
          ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ho = !1), ju(d, n, f);
          break;
        case "selectionchange":
          if (vh) break;
        case "keydown":
        case "keyup":
          ju(d, n, f);
      }
      var _;
      if (hs)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        rn
          ? Nc(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (jc &&
          n.locale !== "ko" &&
          (rn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && rn && (_ = Ec())
            : ((pt = f),
              (fs = "value" in pt ? pt.value : pt.textContent),
              (rn = !0))),
        (j = yl(a, N)),
        0 < j.length &&
          ((N = new vu(N, e, null, n, f)),
          d.push({ event: N, listeners: j }),
          _ ? (N.data = _) : ((_ = _c(n)), _ !== null && (N.data = _)))),
        (_ = lh ? ih(e, n) : oh(e, n)) &&
          ((a = yl(a, "onBeforeInput")),
          0 < a.length &&
            ((f = new vu("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: a }),
            (f.data = _)));
    }
    $c(d, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = ir(e, n)),
      i != null && r.unshift(dr(e, i, l)),
      (i = ir(e, t)),
      i != null && r.push(dr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function en(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = ir(n, i)), u != null && o.unshift(dr(n, u, s)))
        : l || ((u = ir(n, i)), u != null && o.push(dr(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var wh = /\r\n?/g,
  Sh = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wh,
      `
`
    )
    .replace(Sh, "");
}
function Wr(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(C(425));
}
function xl() {}
var mo = null,
  vo = null;
function go(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yo = typeof setTimeout == "function" ? setTimeout : void 0,
  kh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  Ch =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
      ? function (e) {
          return Ou.resolve(null).then(e).catch(Eh);
        }
      : yo;
function Eh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ti(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ur(t);
}
function xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tn = Math.random().toString(36).slice(2),
  Ge = "__reactFiber$" + Tn,
  pr = "__reactProps$" + Tn,
  rt = "__reactContainer$" + Tn,
  xo = "__reactEvents$" + Tn,
  jh = "__reactListeners$" + Tn,
  Nh = "__reactHandles$" + Tn;
function $t(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[Ge])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tu(e); e !== null; ) {
          if ((n = e[Ge])) return n;
          e = Tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _r(e) {
  return (
    (e = e[Ge] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Zl(e) {
  return e[pr] || null;
}
var wo = [],
  un = -1;
function Ot(e) {
  return { current: e };
}
function F(e) {
  0 > un || ((e.current = wo[un]), (wo[un] = null), un--);
}
function I(e, t) {
  un++, (wo[un] = e.current), (e.current = t);
}
var Nt = {},
  ae = Ot(Nt),
  ve = Ot(!1),
  Wt = Nt;
function Sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function wl() {
  F(ve), F(ae);
}
function Ru(e, t, n) {
  if (ae.current !== Nt) throw Error(C(168));
  I(ae, t), I(ve, n);
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, cp(e) || "Unknown", l));
  return H({}, n, r);
}
function Sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    (Wt = ae.current),
    I(ae, e),
    I(ve, ve.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Bc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(ae),
      I(ae, e))
    : F(ve),
    I(ve, n);
}
var Je = null,
  Jl = !1,
  Ri = !1;
function Vc(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
function _h(e) {
  (Jl = !0), Vc(e);
}
function Tt() {
  if (!Ri && Je !== null) {
    Ri = !0;
    var e = 0,
      t = D;
    try {
      var n = Je;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Je = null), (Jl = !1);
    } catch (l) {
      throw (Je !== null && (Je = Je.slice(e + 1)), pc(ss, Tt), l);
    } finally {
      (D = t), (Ri = !1);
    }
  }
  return null;
}
var an = [],
  cn = 0,
  kl = null,
  Cl = 0,
  Oe = [],
  Te = 0,
  Qt = null,
  qe = 1,
  be = "";
function It(e, t) {
  (an[cn++] = Cl), (an[cn++] = kl), (kl = e), (Cl = t);
}
function Hc(e, t, n) {
  (Oe[Te++] = qe), (Oe[Te++] = be), (Oe[Te++] = Qt), (Qt = e);
  var r = qe;
  e = be;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Be(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (qe = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (be = i + e);
  } else (qe = (1 << i) | (n << l) | r), (be = e);
}
function vs(e) {
  e.return !== null && (It(e, 1), Hc(e, 1, 0));
}
function gs(e) {
  for (; e === kl; )
    (kl = an[--cn]), (an[cn] = null), (Cl = an[--cn]), (an[cn] = null);
  for (; e === Qt; )
    (Qt = Oe[--Te]),
      (Oe[Te] = null),
      (be = Oe[--Te]),
      (Oe[Te] = null),
      (qe = Oe[--Te]),
      (Oe[Te] = null);
}
var Ee = null,
  ke = null,
  A = !1,
  $e = null;
function Wc(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (ke = xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: qe, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function So(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ko(e) {
  if (A) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Mu(e, t)) {
        if (So(e)) throw Error(C(418));
        t = xt(n.nextSibling);
        var r = Ee;
        t && Mu(e, t)
          ? Wc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (Ee = e));
      }
    } else {
      if (So(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (Ee = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Qr(e) {
  if (e !== Ee) return !1;
  if (!A) return Du(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !go(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (So(e)) throw (Qc(), Error(C(418)));
    for (; t; ) Wc(e, t), (t = xt(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ee ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qc() {
  for (var e = ke; e; ) e = xt(e.nextSibling);
}
function kn() {
  (ke = Ee = null), (A = !1);
}
function ys(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Ph = st.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = Ot(null),
  jl = null,
  fn = null,
  xs = null;
function ws() {
  xs = fn = jl = null;
}
function Ss(e) {
  var t = El.current;
  F(El), (e._currentValue = t);
}
function Co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yn(e, t) {
  (jl = e),
    (xs = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (xs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (jl === null) throw Error(C(308));
      (fn = e), (jl.dependencies = { lanes: 0, firstContext: e });
    } else fn = fn.next = e;
  return t;
}
var At = null;
function ks(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Kc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ks(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Cs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ks(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), us(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Nl(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), o === null ? (i = a) : (o.next = a), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== o &&
        (s === null ? (f.firstBaseUpdate = a) : (s.next = a),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (f = a = u = null), (s = i);
    do {
      var v = s.lane,
        g = s.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((v = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(g, d, v);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (v = typeof y == "function" ? y.call(g, d, v) : y),
                v == null)
              )
                break e;
              d = H({}, d, v);
              break e;
            case 2:
              ct = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [s]) : v.push(s));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((a = f = g), (u = d)) : (f = f.next = g),
          (o |= v);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Gt |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var Yc = new Ka.Component().refs;
function Eo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = tt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (Ve(t, e, l, r), ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = tt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (Ve(t, e, l, r), ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = kt(e),
      l = tt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = wt(e, l, r)),
      t !== null && (Ve(t, e, r, n), ll(t, e, r));
  },
};
function Fu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(l, i)
      : !0
  );
}
function Xc(e, t, n) {
  var r = !1,
    l = Nt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Me(i))
      : ((l = ge(t) ? Wt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Sn(e, l) : Nt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function $u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Yc), Cs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Me(i))
    : ((i = ge(t) ? Wt : ae.current), (l.context = Sn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Eo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ql.enqueueReplaceState(l, l.state, null),
      Nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            s === Yc && (s = l.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function Zc(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function l(m, p) {
    return (m = Ct(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, h, x) {
    return p === null || p.tag !== 6
      ? ((p = $i(h, m.mode, x)), (p.return = m), p)
      : ((p = l(p, h)), (p.return = m), p);
  }
  function u(m, p, h, x) {
    var E = h.type;
    return E === nn
      ? f(m, p, h.props.children, x, h.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === at &&
            Au(E) === p.type))
      ? ((x = l(p, h.props)), (x.ref = An(m, p, h)), (x.return = m), x)
      : ((x = cl(h.type, h.key, h.props, null, m.mode, x)),
        (x.ref = An(m, p, h)),
        (x.return = m),
        x);
  }
  function a(m, p, h, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Ai(h, m.mode, x)), (p.return = m), p)
      : ((p = l(p, h.children || [])), (p.return = m), p);
  }
  function f(m, p, h, x, E) {
    return p === null || p.tag !== 7
      ? ((p = Ht(h, m.mode, x, E)), (p.return = m), p)
      : ((p = l(p, h)), (p.return = m), p);
  }
  function d(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = $i("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          return (
            (h = cl(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = An(m, null, p)),
            (h.return = m),
            h
          );
        case tn:
          return (p = Ai(p, m.mode, h)), (p.return = m), p;
        case at:
          var x = p._init;
          return d(m, x(p._payload), h);
      }
      if (Wn(p) || Dn(p))
        return (p = Ht(p, m.mode, h, null)), (p.return = m), p;
      Kr(m, p);
    }
    return null;
  }
  function v(m, p, h, x) {
    var E = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return E !== null ? null : s(m, p, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Dr:
          return h.key === E ? u(m, p, h, x) : null;
        case tn:
          return h.key === E ? a(m, p, h, x) : null;
        case at:
          return (E = h._init), v(m, p, E(h._payload), x);
      }
      if (Wn(h) || Dn(h)) return E !== null ? null : f(m, p, h, x, null);
      Kr(m, h);
    }
    return null;
  }
  function g(m, p, h, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(h) || null), s(p, m, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Dr:
          return (m = m.get(x.key === null ? h : x.key) || null), u(p, m, x, E);
        case tn:
          return (m = m.get(x.key === null ? h : x.key) || null), a(p, m, x, E);
        case at:
          var j = x._init;
          return g(m, p, h, j(x._payload), E);
      }
      if (Wn(x) || Dn(x)) return (m = m.get(h) || null), f(p, m, x, E, null);
      Kr(p, x);
    }
    return null;
  }
  function y(m, p, h, x) {
    for (
      var E = null, j = null, _ = p, N = (p = 0), $ = null;
      _ !== null && N < h.length;
      N++
    ) {
      _.index > N ? (($ = _), (_ = null)) : ($ = _.sibling);
      var R = v(m, _, h[N], x);
      if (R === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && R.alternate === null && t(m, _),
        (p = i(R, p, N)),
        j === null ? (E = R) : (j.sibling = R),
        (j = R),
        (_ = $);
    }
    if (N === h.length) return n(m, _), A && It(m, N), E;
    if (_ === null) {
      for (; N < h.length; N++)
        (_ = d(m, h[N], x)),
          _ !== null &&
            ((p = i(_, p, N)), j === null ? (E = _) : (j.sibling = _), (j = _));
      return A && It(m, N), E;
    }
    for (_ = r(m, _); N < h.length; N++)
      ($ = g(_, m, N, h[N], x)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? N : $.key),
          (p = i($, p, N)),
          j === null ? (E = $) : (j.sibling = $),
          (j = $));
    return (
      e &&
        _.forEach(function (we) {
          return t(m, we);
        }),
      A && It(m, N),
      E
    );
  }
  function w(m, p, h, x) {
    var E = Dn(h);
    if (typeof E != "function") throw Error(C(150));
    if (((h = E.call(h)), h == null)) throw Error(C(151));
    for (
      var j = (E = null), _ = p, N = (p = 0), $ = null, R = h.next();
      _ !== null && !R.done;
      N++, R = h.next()
    ) {
      _.index > N ? (($ = _), (_ = null)) : ($ = _.sibling);
      var we = v(m, _, R.value, x);
      if (we === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && we.alternate === null && t(m, _),
        (p = i(we, p, N)),
        j === null ? (E = we) : (j.sibling = we),
        (j = we),
        (_ = $);
    }
    if (R.done) return n(m, _), A && It(m, N), E;
    if (_ === null) {
      for (; !R.done; N++, R = h.next())
        (R = d(m, R.value, x)),
          R !== null &&
            ((p = i(R, p, N)), j === null ? (E = R) : (j.sibling = R), (j = R));
      return A && It(m, N), E;
    }
    for (_ = r(m, _); !R.done; N++, R = h.next())
      (R = g(_, m, N, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? N : R.key),
          (p = i(R, p, N)),
          j === null ? (E = R) : (j.sibling = R),
          (j = R));
    return (
      e &&
        _.forEach(function (Ln) {
          return t(m, Ln);
        }),
      A && It(m, N),
      E
    );
  }
  function S(m, p, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === nn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Dr:
          e: {
            for (var E = h.key, j = p; j !== null; ) {
              if (j.key === E) {
                if (((E = h.type), E === nn)) {
                  if (j.tag === 7) {
                    n(m, j.sibling),
                      (p = l(j, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  j.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === at &&
                    Au(E) === j.type)
                ) {
                  n(m, j.sibling),
                    (p = l(j, h.props)),
                    (p.ref = An(m, j, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            h.type === nn
              ? ((p = Ht(h.props.children, m.mode, x, h.key)),
                (p.return = m),
                (m = p))
              : ((x = cl(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = An(m, p, h)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case tn:
          e: {
            for (j = h.key; p !== null; ) {
              if (p.key === j)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = l(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ai(h, m.mode, x)), (p.return = m), (m = p);
          }
          return o(m);
        case at:
          return (j = h._init), S(m, p, j(h._payload), x);
      }
      if (Wn(h)) return y(m, p, h, x);
      if (Dn(h)) return w(m, p, h, x);
      Kr(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = l(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = $i(h, m.mode, x)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return S;
}
var Cn = Zc(!0),
  Jc = Zc(!1),
  Pr = {},
  Xe = Ot(Pr),
  hr = Ot(Pr),
  mr = Ot(Pr);
function Bt(e) {
  if (e === Pr) throw Error(C(174));
  return e;
}
function Es(e, t) {
  switch ((I(mr, t), I(hr, e), I(Xe, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = no(t, e));
  }
  F(Xe), I(Xe, t);
}
function En() {
  F(Xe), F(hr), F(mr);
}
function qc(e) {
  Bt(mr.current);
  var t = Bt(Xe.current),
    n = no(t, e.type);
  t !== n && (I(hr, e), I(Xe, n));
}
function js(e) {
  hr.current === e && (F(Xe), F(hr));
}
var B = Ot(0);
function _l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Li = [];
function Ns() {
  for (var e = 0; e < Li.length; e++)
    Li[e]._workInProgressVersionPrimary = null;
  Li.length = 0;
}
var il = st.ReactCurrentDispatcher,
  Mi = st.ReactCurrentBatchConfig,
  Kt = 0,
  V = null,
  X = null,
  b = null,
  Pl = !1,
  bn = !1,
  vr = 0,
  zh = 0;
function oe() {
  throw Error(C(321));
}
function _s(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ps(e, t, n, r, l, i) {
  if (
    ((Kt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (il.current = e === null || e.memoizedState === null ? Lh : Mh),
    (e = n(r, l)),
    bn)
  ) {
    i = 0;
    do {
      if (((bn = !1), (vr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (b = X = null),
        (t.updateQueue = null),
        (il.current = Dh),
        (e = n(r, l));
    } while (bn);
  }
  if (
    ((il.current = zl),
    (t = X !== null && X.next !== null),
    (Kt = 0),
    (b = X = V = null),
    (Pl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function zs() {
  var e = vr !== 0;
  return (vr = 0), e;
}
function Ke() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = e) : (b = b.next = e), b;
}
function De() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) (b = t), (X = e);
  else {
    if (e === null) throw Error(C(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Di(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      a = i;
    do {
      var f = a.lane;
      if ((Kt & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = d), (o = r)) : (u = u.next = d),
          (V.lanes |= f),
          (Gt |= f);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (o = r) : (u.next = s),
      He(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Gt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ii(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    He(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function bc() {}
function ef(e, t) {
  var n = V,
    r = De(),
    l = t(),
    i = !He(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Os(rf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yr(9, nf.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(C(349));
    Kt & 30 || tf(n, t, l);
  }
  return l;
}
function tf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lf(t) && of(e);
}
function rf(e, t, n) {
  return n(function () {
    lf(t) && of(e);
  });
}
function lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function of(e) {
  var t = lt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Bu(e) {
  var t = Ke();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rh.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sf() {
  return De().memoizedState;
}
function ol(e, t, n, r) {
  var l = Ke();
  (V.flags |= e),
    (l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function bl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && _s(r, o.deps))) {
      l.memoizedState = yr(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = yr(1 | t, n, i, r));
}
function Vu(e, t) {
  return ol(8390656, 8, e, t);
}
function Os(e, t) {
  return bl(2048, 8, e, t);
}
function uf(e, t) {
  return bl(4, 2, e, t);
}
function af(e, t) {
  return bl(4, 4, e, t);
}
function cf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ff(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bl(4, 4, cf.bind(null, t, e), n)
  );
}
function Ts() {}
function df(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pf(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hf(e, t, n) {
  return Kt & 21
    ? (He(n, t) || ((n = vc()), (V.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Oh(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Mi.transition;
  Mi.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Mi.transition = r);
  }
}
function mf() {
  return De().memoizedState;
}
function Th(e, t, n) {
  var r = kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vf(e))
  )
    gf(t, n);
  else if (((n = Kc(e, t, n, r)), n !== null)) {
    var l = fe();
    Ve(n, e, r, l), yf(n, t, r);
  }
}
function Rh(e, t, n) {
  var r = kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vf(e)) gf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), He(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), ks(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kc(e, t, l, r)),
      n !== null && ((l = fe()), Ve(n, e, r, l), yf(n, t, r));
  }
}
function vf(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function gf(e, t) {
  bn = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), us(e, n);
  }
}
var zl = {
    readContext: Me,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Lh = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ke().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: Vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ol(4194308, 4, cf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ol(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ol(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ke();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ke();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Th.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ke();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      return (Ke().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        t = e[0];
      return (e = Oh.bind(null, e[1])), (Ke().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ke();
      if (A) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(C(349));
        Kt & 30 || tf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Vu(rf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        yr(9, nf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ke(),
        t = te.identifierPrefix;
      if (A) {
        var n = be,
          r = qe;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mh = {
    readContext: Me,
    useCallback: df,
    useContext: Me,
    useEffect: Os,
    useImperativeHandle: ff,
    useInsertionEffect: uf,
    useLayoutEffect: af,
    useMemo: pf,
    useReducer: Di,
    useRef: sf,
    useState: function () {
      return Di(gr);
    },
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      var t = De();
      return hf(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Di(gr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: bc,
    useSyncExternalStore: ef,
    useId: mf,
    unstable_isNewReconciler: !1,
  },
  Dh = {
    readContext: Me,
    useCallback: df,
    useContext: Me,
    useEffect: Os,
    useImperativeHandle: ff,
    useInsertionEffect: uf,
    useLayoutEffect: af,
    useMemo: pf,
    useReducer: Ii,
    useRef: sf,
    useState: function () {
      return Ii(gr);
    },
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      var t = De();
      return X === null ? (t.memoizedState = e) : hf(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Ii(gr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: bc,
    useSyncExternalStore: ef,
    useId: mf,
    unstable_isNewReconciler: !1,
  };
function jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ap(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function No(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ih = typeof WeakMap == "function" ? WeakMap : Map;
function xf(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tl || ((Tl = !0), (Io = r)), No(e, t);
    }),
    n
  );
}
function wf(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        No(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        No(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ih();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Zh.bind(null, e, t, n)), t.then(e, e));
}
function Wu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uh = st.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Jc(t, null, n, r) : Cn(t, e.child, n, r);
}
function Ku(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    yn(t, l),
    (r = Ps(e, t, n, r, i, l)),
    (n = zs()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (A && n && vs(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !$s(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sf(e, t, i, r, l))
      : ((e = cl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(o, r) && e.ref === t.ref)
    )
      return it(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (cr(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), it(e, t, l);
  }
  return _o(e, t, n, r, l);
}
function kf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(pn, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(pn, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(pn, Se),
        (Se |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(pn, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function Cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _o(e, t, n, r, l) {
  var i = ge(n) ? Wt : ae.current;
  return (
    (i = Sn(t, i)),
    yn(t, l),
    (n = Ps(e, t, n, r, i, l)),
    (r = zs()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (A && r && vs(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Yu(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    Sl(t);
  } else i = !1;
  if ((yn(t, l), t.stateNode === null))
    sl(e, t), Xc(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Me(a))
      : ((a = ge(n) ? Wt : ae.current), (a = Sn(t, a)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && $u(t, o, r, a)),
      (ct = !1);
    var v = t.memoizedState;
    (o.state = v),
      Nl(t, r, o, l),
      (u = t.memoizedState),
      s !== r || v !== u || ve.current || ct
        ? (typeof f == "function" && (Eo(t, n, f, r), (u = t.memoizedState)),
          (s = ct || Fu(t, n, s, r, v, u, a))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = a),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Gc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ue(t.type, s)),
      (o.props = a),
      (d = t.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Me(u))
        : ((u = ge(n) ? Wt : ae.current), (u = Sn(t, u)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== d || v !== u) && $u(t, o, r, u)),
      (ct = !1),
      (v = t.memoizedState),
      (o.state = v),
      Nl(t, r, o, l);
    var y = t.memoizedState;
    s !== d || v !== y || ve.current || ct
      ? (typeof g == "function" && (Eo(t, n, g, r), (y = t.memoizedState)),
        (a = ct || Fu(t, n, a, r, v, y, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Po(e, t, n, r, i, l);
}
function Po(e, t, n, r, l, i) {
  Cf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Lu(t, n, !1), it(e, t, i);
  (r = t.stateNode), (Uh.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, s, i)))
      : ce(e, t, s, i),
    (t.memoizedState = r.state),
    l && Lu(t, n, !0),
    t.child
  );
}
function Ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ru(e, t.context, !1),
    Es(e, t.containerInfo);
}
function Xu(e, t, n, r, l) {
  return kn(), ys(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jf(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(B, l & 1),
    e === null)
  )
    return (
      ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ni(o, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Oo(n)),
              (t.memoizedState = zo),
              e)
            : Rs(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Fh(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ct(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = Ct(s, i)) : ((i = Ht(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Oo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Ct(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Rs(e, t) {
  return (
    (t = ni({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gr(e, t, n, r) {
  return (
    r !== null && ys(r),
    Cn(t, e.child, null, n),
    (e = Rs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ui(Error(C(422)))), Gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ni({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ht(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, o),
        (t.child.memoizedState = Oo(o)),
        (t.memoizedState = zo),
        i);
  if (!(t.mode & 1)) return Gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = Ui(i, r, void 0)), Gr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), me || s)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), lt(e, l), Ve(r, e, l, -1));
    }
    return Fs(), (r = Ui(Error(C(421)))), Gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = xt(l.nextSibling)),
      (Ee = t),
      (A = !0),
      ($e = null),
      e !== null &&
        ((Oe[Te++] = qe),
        (Oe[Te++] = be),
        (Oe[Te++] = Qt),
        (qe = e.id),
        (be = e.overflow),
        (Qt = t)),
      (t = Rs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Co(e.return, t, n);
}
function Fi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Fi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && _l(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Fi(t, !0, n, null, i);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $h(e, t, n) {
  switch (t.tag) {
    case 3:
      Ef(t), kn();
      break;
    case 5:
      qc(t);
      break;
    case 1:
      ge(t.type) && Sl(t);
      break;
    case 4:
      Es(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(El, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jf(e, t, n)
          : (I(B, B.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      I(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kf(e, t, n);
  }
  return it(e, t, n);
}
var _f, To, Pf, zf;
_f = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
To = function () {};
Pf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Bt(Xe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = qi(e, l)), (r = qi(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = to(e, l)), (r = to(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xl);
    }
    ro(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (rr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && U("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
zf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ah(e, t, n) {
  var r = t.pendingProps;
  switch ((gs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ge(t.type) && wl(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        F(ve),
        F(ae),
        Ns(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && ($o($e), ($e = null)))),
        To(e, t),
        se(t),
        null
      );
    case 5:
      js(t);
      var l = Bt(mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Pf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return se(t), null;
        }
        if (((e = Bt(Xe.current)), Qr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ge] = t), (r[pr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kn.length; l++) U(Kn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              iu(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              su(r, i), U("invalid", r);
          }
          ro(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : rr.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Ir(r), ou(r, i, !0);
              break;
            case "textarea":
              Ir(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = xl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ge] = t),
            (e[pr] = r),
            _f(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = lo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kn.length; l++) U(Kn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                iu(e, r), (l = qi(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                su(e, r), (l = to(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            ro(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? lc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && nc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && lr(e, u)
                    : typeof u == "number" && lr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (rr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && U("scroll", e)
                      : u != null && ns(e, i, u, o));
              }
            switch (n) {
              case "input":
                Ir(e), ou(e, r, !1);
                break;
              case "textarea":
                Ir(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) zf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Bt(mr.current)), Bt(Xe.current), Qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ge] = t),
            (i = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ge] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (F(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ke !== null && t.mode & 1 && !(t.flags & 128))
          Qc(), kn(), (t.flags |= 98560), (i = !1);
        else if (((i = Qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Ge] = t;
          } else
            kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (i = !1);
        } else $e !== null && ($o($e), ($e = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Fs())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        En(), To(e, t), e === null && fr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return Ss(t.type._context), se(t), null;
    case 17:
      return ge(t.type) && wl(), se(t), null;
    case 19:
      if ((F(B), (i = t.memoizedState), i === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Bn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = _l(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Bn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > Nn &&
            ((t.flags |= 128), (r = !0), Bn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return se(t), null;
          } else
            2 * K() - i.renderingStartTime > Nn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          I(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        Us(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Bh(e, t) {
  switch ((gs(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        F(ve),
        F(ae),
        Ns(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return js(t), null;
    case 13:
      if ((F(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(B), null;
    case 4:
      return En(), null;
    case 10:
      return Ss(t.type._context), null;
    case 22:
    case 23:
      return Us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1,
  ue = !1,
  Vh = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Ro(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Ju = !1;
function Hh(e, t) {
  if (((mo = vl), (e = Rc()), ms(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            a = 0,
            f = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (l !== 0 && d.nodeType !== 3) || (s = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (v = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++a === l && (s = o),
                v === i && ++f === r && (u = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = g;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vo = { focusedElem: e, selectionRange: n }, vl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    S = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ue(t.type, w),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          W(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (y = Ju), (Ju = !1), y;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ro(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ei(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Of(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Of(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ge], delete t[pr], delete t[xo], delete t[jh], delete t[Nh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mo(e, t, n), e = e.sibling; e !== null; ) Mo(e, t, n), (e = e.sibling);
}
function Do(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), (e = e.sibling);
}
var re = null,
  Fe = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) Rf(e, t, n), (n = n.sibling);
}
function Rf(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || dn(n, t);
    case 6:
      var r = re,
        l = Fe;
      (re = null),
        ut(e, t, n),
        (re = r),
        (Fe = l),
        re !== null &&
          (Fe
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Fe
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ti(e.parentNode, n)
              : e.nodeType === 1 && Ti(e, n),
            ur(e))
          : Ti(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Fe),
        (re = n.stateNode.containerInfo),
        (Fe = !0),
        ut(e, t, n),
        (re = r),
        (Fe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ro(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          W(n, t, s);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ut(e, t, n), (ue = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vh()),
      t.forEach(function (r) {
        var l = qh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(C(160));
        Rf(i, o, l), (re = null), (Fe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Lf(t, e), (t = t.sibling);
}
function Lf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), We(e), r & 4)) {
        try {
          er(3, e, e.return), ei(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          er(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Ie(t, e), We(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        We(e),
        r & 512 && n !== null && dn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          lr(l, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && ba(l, i),
              lo(s, o);
            var a = lo(s, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                d = u[o + 1];
              f === "style"
                ? lc(l, d)
                : f === "dangerouslySetInnerHTML"
                ? nc(l, d)
                : f === "children"
                ? lr(l, d)
                : ns(l, f, d, a);
            }
            switch (s) {
              case "input":
                bi(l, i);
                break;
              case "textarea":
                ec(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? hn(l, !!i.multiple, g, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hn(l, !!i.multiple, i.defaultValue, !0)
                      : hn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[pr] = i;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Ie(t, e), We(e);
      break;
    case 13:
      Ie(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ds = K())),
        r & 4 && bu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || f), Ie(t, e), (ue = a)) : Ie(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (P = e, f = e.child; f !== null; ) {
            for (d = P = f; P !== null; ) {
              switch (((v = P), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, v, v.return);
                  break;
                case 1:
                  dn(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  dn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ta(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (P = g)) : ta(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = rc("display", o)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), We(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (lr(l, ""), (r.flags &= -33));
          var i = qu(e);
          Do(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = qu(e);
          Mo(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      W(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wh(e, t, n) {
  (P = e), Mf(e);
}
function Mf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Yr;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ue;
        s = Yr;
        var a = ue;
        if (((Yr = o), (ue = u) && !a))
          for (P = l; P !== null; )
            (o = P),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? na(l)
                : u !== null
                ? ((u.return = o), (P = u))
                : na(l);
        for (; i !== null; ) (P = i), Mf(i), (i = i.sibling);
        (P = l), (Yr = s), (ue = a);
      }
      ea(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (P = i)) : ea(e);
  }
}
function ea(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || ei(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Uu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Uu(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ur(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        ue || (t.flags & 512 && Lo(t));
      } catch (v) {
        W(t, t.return, v);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ta(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function na(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ei(4, t);
          } catch (u) {
            W(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              W(t, l, u);
            }
          }
          var i = t.return;
          try {
            Lo(t);
          } catch (u) {
            W(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Lo(t);
          } catch (u) {
            W(t, o, u);
          }
      }
    } catch (u) {
      W(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var Qh = Math.ceil,
  Ol = st.ReactCurrentDispatcher,
  Ls = st.ReactCurrentOwner,
  Le = st.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  G = null,
  le = 0,
  Se = 0,
  pn = Ot(0),
  Z = 0,
  xr = null,
  Gt = 0,
  ti = 0,
  Ms = 0,
  tr = null,
  he = null,
  Ds = 0,
  Nn = 1 / 0,
  Ze = null,
  Tl = !1,
  Io = null,
  St = null,
  Xr = !1,
  ht = null,
  Rl = 0,
  nr = 0,
  Uo = null,
  ul = -1,
  al = 0;
function fe() {
  return M & 6 ? K() : ul !== -1 ? ul : (ul = K());
}
function kt(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : Ph.transition !== null
      ? (al === 0 && (al = vc()), al)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (Uo = null), Error(C(185)));
  jr(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (ti |= n), Z === 4 && dt(e, le)),
      ye(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Nn = K() + 500), Jl && Tt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Pp(e, t);
  var r = ml(e, e === te ? le : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? _h(ra.bind(null, e)) : Vc(ra.bind(null, e)),
        Ch(function () {
          !(M & 6) && Tt();
        }),
        (n = null);
    else {
      switch (gc(r)) {
        case 1:
          n = ss;
          break;
        case 4:
          n = hc;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = mc;
          break;
        default:
          n = hl;
      }
      n = Vf(n, Df.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Df(e, t) {
  if (((ul = -1), (al = 0), M & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = ml(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Uf();
    (te !== e || le !== t) && ((Ze = null), (Nn = K() + 500), Vt(e, t));
    do
      try {
        Yh();
        break;
      } catch (s) {
        If(e, s);
      }
    while (!0);
    ws(),
      (Ol.current = i),
      (M = l),
      G !== null ? (t = 0) : ((te = null), (le = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ao(e)), l !== 0 && ((r = l), (t = Fo(e, l)))), t === 1)
    )
      throw ((n = xr), Vt(e, 0), dt(e, r), ye(e, K()), n);
    if (t === 6) dt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Kh(l) &&
          ((t = Ll(e, r)),
          t === 2 && ((i = ao(e)), i !== 0 && ((r = i), (t = Fo(e, i)))),
          t === 1))
      )
        throw ((n = xr), Vt(e, 0), dt(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Ut(e, he, Ze);
          break;
        case 3:
          if (
            (dt(e, r), (r & 130023424) === r && ((t = Ds + 500 - K()), 10 < t))
          ) {
            if (ml(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yo(Ut.bind(null, e, he, Ze), t);
            break;
          }
          Ut(e, he, Ze);
          break;
        case 4:
          if ((dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Be(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yo(Ut.bind(null, e, he, Ze), r);
            break;
          }
          Ut(e, he, Ze);
          break;
        case 5:
          Ut(e, he, Ze);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? Df.bind(null, e) : null;
}
function Fo(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && $o(t)),
    e
  );
}
function $o(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dt(e, t) {
  for (
    t &= ~Ms,
      t &= ~ti,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ra(e) {
  if (M & 6) throw Error(C(327));
  xn();
  var t = ml(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ao(e);
    r !== 0 && ((t = r), (n = Fo(e, r)));
  }
  if (n === 1) throw ((n = xr), Vt(e, 0), dt(e, t), ye(e, K()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, he, Ze),
    ye(e, K()),
    null
  );
}
function Is(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Nn = K() + 500), Jl && Tt());
  }
}
function Yt(e) {
  ht !== null && ht.tag === 0 && !(M & 6) && xn();
  var t = M;
  M |= 1;
  var n = Le.transition,
    r = D;
  try {
    if (((Le.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Le.transition = n), (M = t), !(M & 6) && Tt();
  }
}
function Us() {
  (Se = pn.current), F(pn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kh(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((gs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wl();
          break;
        case 3:
          En(), F(ve), F(ae), Ns();
          break;
        case 5:
          js(r);
          break;
        case 4:
          En();
          break;
        case 13:
          F(B);
          break;
        case 19:
          F(B);
          break;
        case 10:
          Ss(r.type._context);
          break;
        case 22:
        case 23:
          Us();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (G = e = Ct(e.current, null)),
    (le = Se = t),
    (Z = 0),
    (xr = null),
    (Ms = ti = Gt = 0),
    (he = tr = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function If(e, t) {
  do {
    var n = G;
    try {
      if ((ws(), (il.current = zl), Pl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Kt = 0),
        (b = X = V = null),
        (bn = !1),
        (vr = 0),
        (Ls.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (xr = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = Wu(o);
          if (g !== null) {
            (g.flags &= -257),
              Qu(g, o, s, i, t),
              g.mode & 1 && Hu(i, a, t),
              (t = g),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(i, a, t), Fs();
              break e;
            }
            u = Error(C(426));
          }
        } else if (A && s.mode & 1) {
          var S = Wu(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Qu(S, o, s, i, t),
              ys(jn(u, s));
            break e;
          }
        }
        (i = u = jn(u, s)),
          Z !== 4 && (Z = 2),
          tr === null ? (tr = [i]) : tr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = xf(i, u, t);
              Iu(i, m);
              break e;
            case 1:
              s = u;
              var p = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (St === null || !St.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = wf(i, s, t);
                Iu(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $f(n);
    } catch (E) {
      (t = E), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uf() {
  var e = Ol.current;
  return (Ol.current = zl), e === null ? zl : e;
}
function Fs() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    te === null || (!(Gt & 268435455) && !(ti & 268435455)) || dt(te, le);
}
function Ll(e, t) {
  var n = M;
  M |= 2;
  var r = Uf();
  (te !== e || le !== t) && ((Ze = null), Vt(e, t));
  do
    try {
      Gh();
      break;
    } catch (l) {
      If(e, l);
    }
  while (!0);
  if ((ws(), (M = n), (Ol.current = r), G !== null)) throw Error(C(261));
  return (te = null), (le = 0), Z;
}
function Gh() {
  for (; G !== null; ) Ff(G);
}
function Yh() {
  for (; G !== null && !xp(); ) Ff(G);
}
function Ff(e) {
  var t = Bf(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? $f(e) : (G = t),
    (Ls.current = null);
}
function $f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bh(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (G = null);
        return;
      }
    } else if (((n = Ah(n, t, Se)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Ut(e, t, n) {
  var r = D,
    l = Le.transition;
  try {
    (Le.transition = null), (D = 1), Xh(e, t, n, r);
  } finally {
    (Le.transition = l), (D = r);
  }
  return null;
}
function Xh(e, t, n, r) {
  do xn();
  while (ht !== null);
  if (M & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zp(e, i),
    e === te && ((G = te = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xr ||
      ((Xr = !0),
      Vf(hl, function () {
        return xn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Le.transition), (Le.transition = null);
    var o = D;
    D = 1;
    var s = M;
    (M |= 4),
      (Ls.current = null),
      Hh(e, n),
      Lf(n, e),
      mh(vo),
      (vl = !!mo),
      (vo = mo = null),
      (e.current = n),
      Wh(n),
      wp(),
      (M = s),
      (D = o),
      (Le.transition = i);
  } else e.current = n;
  if (
    (Xr && ((Xr = !1), (ht = e), (Rl = l)),
    (i = e.pendingLanes),
    i === 0 && (St = null),
    Cp(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Tl) throw ((Tl = !1), (e = Io), (Io = null), e);
  return (
    Rl & 1 && e.tag !== 0 && xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Uo ? nr++ : ((nr = 0), (Uo = e))) : (nr = 0),
    Tt(),
    null
  );
}
function xn() {
  if (ht !== null) {
    var e = gc(Rl),
      t = Le.transition,
      n = D;
    try {
      if (((Le.transition = null), (D = 16 > e ? 16 : e), ht === null))
        var r = !1;
      else {
        if (((e = ht), (ht = null), (Rl = 0), M & 6)) throw Error(C(331));
        var l = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var i = P,
            o = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var f = P;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (P = d);
                  else
                    for (; P !== null; ) {
                      f = P;
                      var v = f.sibling,
                        g = f.return;
                      if ((Of(f), f === a)) {
                        P = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (P = v);
                        break;
                      }
                      P = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (P = m);
                break e;
              }
              P = i.return;
            }
        }
        var p = e.current;
        for (P = p; P !== null; ) {
          o = P;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (P = h);
          else
            e: for (o = p; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, s);
                  }
                } catch (E) {
                  W(s, s.return, E);
                }
              if (s === o) {
                P = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (P = x);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((M = l), Tt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Le.transition = t);
    }
  }
  return !1;
}
function la(e, t, n) {
  (t = jn(n, t)),
    (t = xf(e, t, 1)),
    (e = wt(e, t, 1)),
    (t = fe()),
    e !== null && (jr(e, 1, t), ye(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) la(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        la(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = jn(n, e)),
            (e = wf(t, e, 1)),
            (t = wt(t, e, 1)),
            (e = fe()),
            t !== null && (jr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (le & n) === n &&
      (Z === 4 || (Z === 3 && (le & 130023424) === le && 500 > K() - Ds)
        ? Vt(e, 0)
        : (Ms |= n)),
    ye(e, t);
}
function Af(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $r), ($r <<= 1), !($r & 130023424) && ($r = 4194304))
      : (t = 1));
  var n = fe();
  (e = lt(e, t)), e !== null && (jr(e, t, n), ye(e, n));
}
function Jh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Af(e, n);
}
function qh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Af(e, n);
}
var Bf;
Bf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), $h(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), A && t.flags & 1048576 && Hc(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      sl(e, t), (e = t.pendingProps);
      var l = Sn(t, ae.current);
      yn(t, n), (l = Ps(null, t, r, e, l, n));
      var i = zs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((i = !0), Sl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Cs(t),
            (l.updater = ql),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Po(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && vs(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (sl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = em(r)),
          (e = Ue(r, e)),
          l)
        ) {
          case 0:
            t = _o(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Gu(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        _o(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Yu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ef(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Gc(e, t),
          Nl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = jn(Error(C(423)), t)), (t = Xu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = jn(Error(C(424)), t)), (t = Xu(e, t, r, n, l));
            break e;
          } else
            for (
              ke = xt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                A = !0,
                $e = null,
                n = Jc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((kn(), r === l)) {
            t = it(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qc(t),
        e === null && ko(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        go(r, l) ? (o = null) : i !== null && go(r, i) && (t.flags |= 32),
        Cf(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ko(t), null;
    case 13:
      return jf(e, t, n);
    case 4:
      return (
        Es(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        Ku(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(El, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (He(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = tt(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Co(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Co(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        yn(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ue(r, t.pendingProps)),
        (l = Ue(r.type, l)),
        Gu(e, t, r, l, n)
      );
    case 15:
      return Sf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ue(r, l)),
        sl(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), Sl(t)) : (e = !1),
        yn(t, n),
        Xc(t, r, l),
        jo(t, r, l, n),
        Po(null, t, r, !0, e, n)
      );
    case 19:
      return Nf(e, t, n);
    case 22:
      return kf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Vf(e, t) {
  return pc(e, t);
}
function bh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new bh(e, t, n, r);
}
function $s(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function em(e) {
  if (typeof e == "function") return $s(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ls)) return 11;
    if (e === is) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function cl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) $s(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case nn:
        return Ht(n.children, l, i, t);
      case rs:
        (o = 8), (l |= 8);
        break;
      case Yi:
        return (
          (e = Re(12, n, t, l | 2)), (e.elementType = Yi), (e.lanes = i), e
        );
      case Xi:
        return (e = Re(13, n, t, l)), (e.elementType = Xi), (e.lanes = i), e;
      case Zi:
        return (e = Re(19, n, t, l)), (e.elementType = Zi), (e.lanes = i), e;
      case Za:
        return ni(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ya:
              o = 10;
              break e;
            case Xa:
              o = 9;
              break e;
            case ls:
              o = 11;
              break e;
            case is:
              o = 14;
              break e;
            case at:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ht(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function ni(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = Za),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $i(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function Ai(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wi(0)),
    (this.expirationTimes = wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function As(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new tm(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Re(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cs(i),
    e
  );
}
function nm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hf(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Bc(e, n, t);
  }
  return t;
}
function Wf(e, t, n, r, l, i, o, s, u) {
  return (
    (e = As(n, r, !0, e, l, i, o, s, u)),
    (e.context = Hf(null)),
    (n = e.current),
    (r = fe()),
    (l = kt(n)),
    (i = tt(r, l)),
    (i.callback = t ?? null),
    wt(n, i, l),
    (e.current.lanes = l),
    jr(e, l, r),
    ye(e, r),
    e
  );
}
function ri(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = kt(l);
  return (
    (n = Hf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wt(l, t, o)),
    e !== null && (Ve(e, l, o, i), ll(e, l, o)),
    o
  );
}
function Ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ia(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bs(e, t) {
  ia(e, t), (e = e.alternate) && ia(e, t);
}
function rm() {
  return null;
}
var Qf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vs(e) {
  this._internalRoot = e;
}
li.prototype.render = Vs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  ri(e, t, null, null);
};
li.prototype.unmount = Vs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      ri(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function li(e) {
  this._internalRoot = e;
}
li.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++);
    ft.splice(n, 0, e), n === 0 && kc(e);
  }
};
function Hs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ii(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oa() {}
function lm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Ml(o);
        i.call(a);
      };
    }
    var o = Wf(t, r, e, 0, null, !1, !1, "", oa);
    return (
      (e._reactRootContainer = o),
      (e[rt] = o.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Ml(u);
      s.call(a);
    };
  }
  var u = As(e, 0, !1, null, null, !1, !1, "", oa);
  return (
    (e._reactRootContainer = u),
    (e[rt] = u.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      ri(t, u, n, r);
    }),
    u
  );
}
function oi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = Ml(o);
        s.call(u);
      };
    }
    ri(t, o, e, l);
  } else o = lm(n, t, e, l, r);
  return Ml(o);
}
yc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 &&
          (us(t, n | 1), ye(t, K()), !(M & 6) && ((Nn = K() + 500), Tt()));
      }
      break;
    case 13:
      Yt(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var l = fe();
          Ve(r, e, 1, l);
        }
      }),
        Bs(e, 1);
  }
};
as = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ve(t, e, 134217728, n);
    }
    Bs(e, 134217728);
  }
};
xc = function (e) {
  if (e.tag === 13) {
    var t = kt(e),
      n = lt(e, t);
    if (n !== null) {
      var r = fe();
      Ve(n, e, t, r);
    }
    Bs(e, t);
  }
};
wc = function () {
  return D;
};
Sc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Zl(r);
            if (!l) throw Error(C(90));
            qa(r), bi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ec(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
sc = Is;
uc = Yt;
var im = { usingClientEntryPoint: !1, Events: [_r, sn, Zl, ic, oc, Is] },
  Vn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  om = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: st.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || rm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber)
    try {
      (Kl = Zr.inject(om)), (Ye = Zr);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = im;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hs(t)) throw Error(C(200));
  return nm(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!Hs(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = Qf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = As(e, 1, !1, null, null, n, !1, r, l)),
    (e[rt] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new Vs(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = fc(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return Yt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!ii(t)) throw Error(C(200));
  return oi(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!Hs(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Qf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Wf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[rt] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new li(t);
};
Pe.render = function (e, t, n) {
  if (!ii(t)) throw Error(C(200));
  return oi(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!ii(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Yt(function () {
        oi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = Is;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ii(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return oi(e, t, n, !1, r);
};
Pe.version = "18.2.0-next-9e3b772b8-20220608";
function Kf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf);
    } catch (e) {
      console.error(e);
    }
}
Kf(), (Ha.exports = Pe);
var sm = Ha.exports,
  sa = sm;
(Ki.createRoot = sa.createRoot), (Ki.hydrateRoot = sa.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wr() {
  return (
    (wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wr.apply(this, arguments)
  );
}
var mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(mt || (mt = {}));
const ua = "popstate";
function um(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: s } = r.location;
    return Ao(
      "",
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Dl(l);
  }
  return cm(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Gf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function am() {
  return Math.random().toString(36).substr(2, 8);
}
function aa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ao(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    wr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Rn(t) : t,
      { state: n, key: (t && t.key) || r || am() }
    )
  );
}
function Dl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Rn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function cm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = mt.Pop,
    u = null,
    a = f();
  a == null && ((a = 0), o.replaceState(wr({}, o.state, { idx: a }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = mt.Pop;
    let S = f(),
      m = S == null ? null : S - a;
    (a = S), u && u({ action: s, location: w.location, delta: m });
  }
  function v(S, m) {
    s = mt.Push;
    let p = Ao(w.location, S, m);
    n && n(p, S), (a = f() + 1);
    let h = aa(p, a),
      x = w.createHref(p);
    try {
      o.pushState(h, "", x);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(x);
    }
    i && u && u({ action: s, location: w.location, delta: 1 });
  }
  function g(S, m) {
    s = mt.Replace;
    let p = Ao(w.location, S, m);
    n && n(p, S), (a = f());
    let h = aa(p, a),
      x = w.createHref(p);
    o.replaceState(h, "", x),
      i && u && u({ action: s, location: w.location, delta: 0 });
  }
  function y(S) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      p = typeof S == "string" ? S : Dl(S);
    return (
      (p = p.replace(/ $/, "%20")),
      Y(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(S) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ua, d),
        (u = S),
        () => {
          l.removeEventListener(ua, d), (u = null);
        }
      );
    },
    createHref(S) {
      return t(l, S);
    },
    createURL: y,
    encodeLocation(S) {
      let m = y(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: v,
    replace: g,
    go(S) {
      return o.go(S);
    },
  };
  return w;
}
var ca;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ca || (ca = {}));
function fm(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Rn(t) : t,
    l = Ws(r.pathname || "/", n);
  if (l == null) return null;
  let i = Yf(e);
  dm(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) {
    let u = Em(l);
    o = Sm(i[s], u);
  }
  return o;
}
function Yf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (Y(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = Et([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Yf(i.children, t, f, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: xm(a, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let u of Xf(i.path)) l(i, o, u);
    }),
    t
  );
}
function Xf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Xf(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function dm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const pm = /^:[\w-]+$/,
  hm = 3,
  mm = 2,
  vm = 1,
  gm = 10,
  ym = -2,
  fa = (e) => e === "*";
function xm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(fa) && (r += ym),
    t && (r += mm),
    n
      .filter((l) => !fa(l))
      .reduce((l, i) => l + (pm.test(i) ? hm : i === "" ? vm : gm), r)
  );
}
function wm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Sm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      u = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      f = km(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        a
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Et([l, f.pathname]),
      pathnameBase: Pm(Et([l, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (l = Et([l, f.pathnameBase]));
  }
  return i;
}
function km(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Cm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((a, f, d) => {
      let { paramName: v, isOptional: g } = f;
      if (v === "*") {
        let w = s[d] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[d];
      return (
        g && !y ? (a[v] = void 0) : (a[v] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Cm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Em(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Gf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ws(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function jm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Rn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Nm(n, t)) : t,
    search: zm(r),
    hash: Om(l),
  };
}
function Nm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Bi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _m(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zf(e, t) {
  let n = _m(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Jf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Rn(e))
    : ((l = wr({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        Bi("?", "pathname", "search", l)
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        Bi("#", "pathname", "hash", l)
      ),
      Y(!l.search || !l.search.includes("#"), Bi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), (d -= 1);
      l.pathname = v.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let u = jm(l, s),
    a = o && o !== "/" && o.endsWith("/"),
    f = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || f) && (u.pathname += "/"), u;
}
const Et = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Pm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  zm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Om = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Tm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qf = ["post", "put", "patch", "delete"];
new Set(qf);
const Rm = ["get", ...qf];
new Set(Rm);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sr.apply(this, arguments)
  );
}
const Qs = k.createContext(null),
  Lm = k.createContext(null),
  qt = k.createContext(null),
  si = k.createContext(null),
  Rt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bf = k.createContext(null);
function Mm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  zr() || Y(!1);
  let { basename: r, navigator: l } = k.useContext(qt),
    { hash: i, pathname: o, search: s } = td(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Et([r, o])),
    l.createHref({ pathname: u, search: s, hash: i })
  );
}
function zr() {
  return k.useContext(si) != null;
}
function Or() {
  return zr() || Y(!1), k.useContext(si).location;
}
function ed(e) {
  k.useContext(qt).static || k.useLayoutEffect(e);
}
function Lt() {
  let { isDataRoute: e } = k.useContext(Rt);
  return e ? Ym() : Dm();
}
function Dm() {
  zr() || Y(!1);
  let e = k.useContext(Qs),
    { basename: t, future: n, navigator: r } = k.useContext(qt),
    { matches: l } = k.useContext(Rt),
    { pathname: i } = Or(),
    o = JSON.stringify(Zf(l, n.v7_relativeSplatPath)),
    s = k.useRef(!1);
  return (
    ed(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (a, f) {
        if ((f === void 0 && (f = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let d = Jf(a, JSON.parse(o), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Et([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, o, i, e]
    )
  );
}
function Im() {
  let { matches: e } = k.useContext(Rt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function td(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(qt),
    { matches: l } = k.useContext(Rt),
    { pathname: i } = Or(),
    o = JSON.stringify(Zf(l, r.v7_relativeSplatPath));
  return k.useMemo(() => Jf(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Um(e, t) {
  return Fm(e, t);
}
function Fm(e, t, n, r) {
  zr() || Y(!1);
  let { navigator: l } = k.useContext(qt),
    { matches: i } = k.useContext(Rt),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Or(),
    f;
  if (t) {
    var d;
    let S = typeof t == "string" ? Rn(t) : t;
    u === "/" || ((d = S.pathname) != null && d.startsWith(u)) || Y(!1),
      (f = S);
  } else f = a;
  let v = f.pathname || "/",
    g = v;
  if (u !== "/") {
    let S = u.replace(/^\//, "").split("/");
    g = "/" + v.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = fm(e, { pathname: g }),
    w = Hm(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, s, S.params),
            pathname: Et([
              u,
              l.encodeLocation
                ? l.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? u
                : Et([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? k.createElement(
        si.Provider,
        {
          value: {
            location: Sr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: mt.Pop,
          },
        },
        w
      )
    : w;
}
function $m() {
  let e = Gm(),
    t = Tm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Am = k.createElement($m, null);
class Bm extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Rt.Provider,
          { value: this.props.routeContext },
          k.createElement(bf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Vm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(Qs);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Rt.Provider, { value: t }, r)
  );
}
function Hm(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let f = o.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    f >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let d = o[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = f),
        d.route.id)
      ) {
        let { loaderData: v, errors: g } = n,
          y =
            d.route.loader &&
            v[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (u = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, d, v) => {
    let g,
      y = !1,
      w = null,
      S = null;
    n &&
      ((g = s && d.route.id ? s[d.route.id] : void 0),
      (w = d.route.errorElement || Am),
      u &&
        (a < 0 && v === 0
          ? (Xm("route-fallback", !1), (y = !0), (S = null))
          : a === v &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, v + 1)),
      p = () => {
        let h;
        return (
          g
            ? (h = w)
            : y
            ? (h = S)
            : d.route.Component
            ? (h = k.createElement(d.route.Component, null))
            : d.route.element
            ? (h = d.route.element)
            : (h = f),
          k.createElement(Vm, {
            match: d,
            routeContext: { outlet: f, matches: m, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || v === 0)
      ? k.createElement(Bm, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var nd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(nd || {}),
  Il = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Il || {});
function Wm(e) {
  let t = k.useContext(Qs);
  return t || Y(!1), t;
}
function Qm(e) {
  let t = k.useContext(Lm);
  return t || Y(!1), t;
}
function Km(e) {
  let t = k.useContext(Rt);
  return t || Y(!1), t;
}
function rd(e) {
  let t = Km(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function Gm() {
  var e;
  let t = k.useContext(bf),
    n = Qm(Il.UseRouteError),
    r = rd(Il.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ym() {
  let { router: e } = Wm(nd.UseNavigateStable),
    t = rd(Il.UseNavigateStable),
    n = k.useRef(!1);
  return (
    ed(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Sr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const da = {};
function Xm(e, t, n) {
  !t && !da[e] && (da[e] = !0);
}
function Qe(e) {
  Y(!1);
}
function Zm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = mt.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  zr() && Y(!1);
  let u = t.replace(/^\/*/, "/"),
    a = k.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Sr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, o]
    );
  typeof r == "string" && (r = Rn(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: v = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = k.useMemo(() => {
      let S = Ws(f, u);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: v, state: g, key: y },
            navigationType: l,
          };
    }, [u, f, d, v, g, y, l]);
  return w == null
    ? null
    : k.createElement(
        qt.Provider,
        { value: a },
        k.createElement(si.Provider, { children: n, value: w })
      );
}
function Jm(e) {
  let { children: t, location: n } = e;
  return Um(Bo(t), n);
}
new Promise(() => {});
function Bo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, Bo(r.props.children, i));
        return;
      }
      r.type !== Qe && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Bo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function qm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function bm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function e0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !bm(e);
}
const t0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  n0 = "6";
try {
  window.__reactRouterVersion = n0;
} catch {}
const r0 = "startTransition",
  pa = Qi[r0];
function l0(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = um({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, u] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    f = k.useCallback(
      (d) => {
        a && pa ? pa(() => u(d)) : u(d);
      },
      [u, a]
    );
  return (
    k.useLayoutEffect(() => o.listen(f), [o, f]),
    k.createElement(Zm, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
const i0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  o0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ee = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: u,
        to: a,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      v = qm(t, t0),
      { basename: g } = k.useContext(qt),
      y,
      w = !1;
    if (typeof a == "string" && o0.test(a) && ((y = a), i0))
      try {
        let h = new URL(window.location.href),
          x = a.startsWith("//") ? new URL(h.protocol + a) : new URL(a),
          E = Ws(x.pathname, g);
        x.origin === h.origin && E != null
          ? (a = E + x.search + x.hash)
          : (w = !0);
      } catch {}
    let S = Mm(a, { relative: l }),
      m = s0(a, {
        replace: o,
        state: s,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: d,
      });
    function p(h) {
      r && r(h), h.defaultPrevented || m(h);
    }
    return k.createElement(
      "a",
      Vo({}, v, { href: y || S, onClick: w || i ? r : p, ref: n, target: u })
    );
  });
var ha;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ha || (ha = {}));
var ma;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ma || (ma = {}));
function s0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = Lt(),
    a = Or(),
    f = td(e, { relative: o });
  return k.useCallback(
    (d) => {
      if (e0(d, n)) {
        d.preventDefault();
        let v = r !== void 0 ? r : Dl(a) === Dl(f);
        u(e, {
          replace: v,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: s,
        });
      }
    },
    [a, u, f, r, l, n, e, i, o, s]
  );
}
function u0({ data: e }) {
  const t = Lt(),
    n = (r) => {
      r.preventDefault();
      const l = new URLSearchParams(window.location.search);
      l.set("query", e);
      const i = l.toString();
      t(`/search?${i}`);
    };
  return c.jsx("div", {
    onClick: n,
    className: "text-white cursor-pointer  px-3 py-1  bg-lightText rounded-lg",
    children: c.jsx("h3", { className: "whitespace-nowrap", children: e }),
  });
}
var ld = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  va = et.createContext && et.createContext(ld),
  a0 = ["attr", "size", "title"];
function c0(e, t) {
  if (e == null) return {};
  var n = f0(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function f0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ul.apply(this, arguments)
  );
}
function ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ga(Object(n), !0).forEach(function (r) {
          d0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ga(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function d0(e, t, n) {
  return (
    (t = p0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function p0(e) {
  var t = h0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function h0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function id(e) {
  return (
    e &&
    e.map((t, n) =>
      et.createElement(t.tag, Fl({ key: n }, t.attr), id(t.child))
    )
  );
}
function J(e) {
  return (t) =>
    et.createElement(m0, Ul({ attr: Fl({}, e.attr) }, t), id(e.child));
}
function m0(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = c0(e, a0),
      s = l || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      et.createElement(
        "svg",
        Ul(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: Fl(Fl({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && et.createElement("title", null, i),
        e.children
      )
    );
  };
  return va !== void 0
    ? et.createElement(va.Consumer, null, (n) => t(n))
    : t(ld);
}
function od(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function sd({ video: e }) {
  const t = (n) =>
    new Date(n).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  return c.jsx(ee, {
    to: `/watch/${e == null ? void 0 : e._id}`,
    children: c.jsxs("div", {
      className:
        "text-lightText hover:bg-gray-500 rounded-xl overflow-hidden lg:max-w-[400px] lg:h-[270px] sm:max-w-[280px] max-w-[250px] pl-5 sm:pl-0",
      children: [
        c.jsx("img", {
          className:
            "rounded-lg w-full lg:h-[190px] md:h-[140px] object-contain",
          src: e == null ? void 0 : e.thumbnailUrl,
          alt: "",
        }),
        c.jsxs("div", {
          className: "flex mt-2 gap-2",
          children: [
            c.jsx("div", {
              className:
                "min-w-[35px] h-[35px] bg-blue-500 rounded-full flex flex-nowrap items-center justify-center text-white text-semibold",
              children: c.jsx("h1", { children: e.ownerProfile }),
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h2", {
                  className: "text-white text-[14px] line-clamp-2",
                  children: e == null ? void 0 : e.title,
                }),
                c.jsx("p", {
                  className: "text-[13px] -mt-[3px]",
                  children: e.ownerName,
                }),
                c.jsxs("p", {
                  className: "text-[13px] -mt-[3px]",
                  children: [
                    e.watchCount,
                    " views -",
                    " ",
                    c.jsx("span", { children: t(e.createdAt) }),
                  ],
                }),
              ],
            }),
            c.jsx(od, { color: "white" }),
          ],
        }),
      ],
    }),
  });
}
const v0 = [
  "All",
  "Daya",
  "Taarak",
  "Music",
  "Mixes",
  "Javascript",
  "Data Analysis",
  "Machine learning",
  "Live",
  "Lo-fi",
  "WWE Raw",
  "Marathi Movies",
  "Hindi Movies",
  "Hacking",
  "wwe raw",
  "Code with harry",
];
function ya() {
  const e = Or();
  let [t, n] = k.useState();
  return (
    k.useEffect(() => {
      const l = new URLSearchParams(window.location.search).get("query");
      l == "" || l == null || l == "All"
        ? (async () => {
            const s = await (
              await fetch(
                "https://youtube-full-mern-1.onrender.com/api/v1/user/video/getAllVideos",
                { method: "GET", credentials: "include" }
              )
            ).json();
            n(s.video);
          })()
        : (async () => {
            const s = await (
              await fetch(
                `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideos/search/${l}`
              )
            ).json();
            n(s.video);
          })();
    }, [e]),
    c.jsxs("div", {
      className: "w-full overflow-y-auto hideScrollbar",
      children: [
        c.jsx("div", {
          className:
            "flex gap-3 overflow-x-auto hideScrollbar flex-shrink-0 mb-5 ",
          children: v0.map((r, l) => c.jsx(u0, { data: r })),
        }),
        c.jsx("div", {
          className:
            " grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-x-5 gap-x-2 place-items-center mr-5",
          children: t == null ? void 0 : t.map((r) => c.jsx(sd, { video: r })),
        }),
      ],
    })
  );
}
function g0() {
  return c.jsx("div", {
    className: "flex items-center justify-center w-full",
    children: c.jsx("h1", {
      className: "text-red-500 text-3xl",
      children: "This page will be get updated soon",
    }),
  });
}
var ud = { exports: {} },
  ad = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = k;
function y0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var x0 = typeof Object.is == "function" ? Object.is : y0,
  w0 = Tr.useSyncExternalStore,
  S0 = Tr.useRef,
  k0 = Tr.useEffect,
  C0 = Tr.useMemo,
  E0 = Tr.useDebugValue;
ad.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var i = S0(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = C0(
    function () {
      function u(g) {
        if (!a) {
          if (((a = !0), (f = g), (g = r(g)), l !== void 0 && o.hasValue)) {
            var y = o.value;
            if (l(y, g)) return (d = y);
          }
          return (d = g);
        }
        if (((y = d), x0(f, g))) return y;
        var w = r(g);
        return l !== void 0 && l(y, w) ? y : ((f = g), (d = w));
      }
      var a = !1,
        f,
        d,
        v = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        v === null
          ? void 0
          : function () {
              return u(v());
            },
      ];
    },
    [t, n, r, l]
  );
  var s = w0(e, i[0], i[1]);
  return (
    k0(
      function () {
        (o.hasValue = !0), (o.value = s);
      },
      [s]
    ),
    E0(s),
    s
  );
};
ud.exports = ad;
var j0 = ud.exports,
  Ce = "default" in Qi ? et : Qi,
  xa = Symbol.for("react-redux-context"),
  wa = typeof globalThis < "u" ? globalThis : {};
function N0() {
  if (!Ce.createContext) return {};
  const e = wa[xa] ?? (wa[xa] = new Map());
  let t = e.get(Ce.createContext);
  return t || ((t = Ce.createContext(null)), e.set(Ce.createContext, t)), t;
}
var _t = N0(),
  _0 = () => {
    throw new Error("uSES not initialized!");
  };
function Ks(e = _t) {
  return function () {
    return Ce.useContext(e);
  };
}
var cd = Ks(),
  fd = _0,
  P0 = (e) => {
    fd = e;
  },
  z0 = (e, t) => e === t;
function O0(e = _t) {
  const t = e === _t ? cd : Ks(e),
    n = (r, l = {}) => {
      const { equalityFn: i = z0, devModeChecks: o = {} } =
          typeof l == "function" ? { equalityFn: l } : l,
        {
          store: s,
          subscription: u,
          getServerState: a,
          stabilityCheck: f,
          identityFunctionCheck: d,
        } = t();
      Ce.useRef(!0);
      const v = Ce.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, f, o.stabilityCheck]
        ),
        g = fd(u.addNestedSub, s.getState, a || s.getState, v, i);
      return Ce.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var bt = O0();
function T0(e) {
  e();
}
function R0() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      T0(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const l = (t = { callback: n, next: null, prev: t });
      return (
        l.prev ? (l.prev.next = l) : (e = l),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            l.next ? (l.next.prev = l.prev) : (t = l.prev),
            l.prev ? (l.prev.next = l.next) : (e = l.next));
        }
      );
    },
  };
}
var Sa = { notify() {}, get: () => [] };
function L0(e, t) {
  let n,
    r = Sa,
    l = 0,
    i = !1;
  function o(w) {
    f();
    const S = r.subscribe(w);
    let m = !1;
    return () => {
      m || ((m = !0), S(), d());
    };
  }
  function s() {
    r.notify();
  }
  function u() {
    y.onStateChange && y.onStateChange();
  }
  function a() {
    return i;
  }
  function f() {
    l++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = R0()));
  }
  function d() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Sa));
  }
  function v() {
    i || ((i = !0), f());
  }
  function g() {
    i && ((i = !1), d());
  }
  const y = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: v,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return y;
}
var M0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  D0 = typeof navigator < "u" && navigator.product === "ReactNative",
  I0 = M0 || D0 ? Ce.useLayoutEffect : Ce.useEffect;
function U0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  identityFunctionCheck: i = "once",
}) {
  const o = Ce.useMemo(() => {
      const a = L0(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        identityFunctionCheck: i,
      };
    }, [e, r, l, i]),
    s = Ce.useMemo(() => e.getState(), [e]);
  I0(() => {
    const { subscription: a } = o;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      s !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [o, s]);
  const u = t || _t;
  return Ce.createElement(u.Provider, { value: o }, n);
}
var F0 = U0;
function dd(e = _t) {
  const t = e === _t ? cd : Ks(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var $0 = dd();
function A0(e = _t) {
  const t = e === _t ? $0 : dd(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var pd = A0();
P0(j0.useSyncExternalStoreWithSelector);
function B0({ video: e }) {
  const t = (n) =>
    new Date(n).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  return c.jsx(ee, {
    to: `/watch/${e == null ? void 0 : e._id._id}`,
    children: c.jsxs("div", {
      className:
        "text-lightText hover:bg-gray-500 rounded-xl overflow-hidden lg:max-w-[400px] lg:h-[270px] sm:max-w-[280px] max-w-[250px] pl-5 sm:pl-0",
      children: [
        c.jsx("img", {
          className: " w-full lg:h-[190px] md:h-[140px] object-contain",
          src: e == null ? void 0 : e._id.thumbnailUrl,
          alt: "Hii",
        }),
        c.jsxs("div", {
          className: "flex mt-2 gap-2",
          children: [
            c.jsx("div", {
              className:
                "bg-blue-400 w-[35px] h-[35px] flex-nowrap rounded-full flex items-center justify-center ",
              children: c.jsx("h1", {
                className: "text-white font-bold whitespace-nowrap",
                children: e._id.ownerProfile,
              }),
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h2", {
                  className: "text-white text-[14px] line-clamp-2",
                  children: e._id.title,
                }),
                c.jsx("p", {
                  className: "text-[13px] -mt-[3px]",
                  children: e._id.ownerName,
                }),
                c.jsxs("p", {
                  className: "text-[13px] -mt-[3px]",
                  children: [
                    "32k views - ",
                    c.jsx("span", { children: t(e._id.createdAt) }),
                  ],
                }),
              ],
            }),
            c.jsx(od, { color: "white" }),
          ],
        }),
      ],
    }),
  });
}
function hd(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4-6-3.27v6.53L16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function V0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function H0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function md(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function W0() {
  const e = Lt(),
    [t, n] = k.useState();
  return (
    bt((r) => r),
    k.useEffect(() => {
      (async () => {
        const i = await (
          await fetch(
            "https://youtube-full-mern-1.onrender.com/api/v1/channel/subcription/subscribedchannel/videos",
            { method: "GET", credentials: "include" }
          )
        ).json();
        console.log(i), n(i.video);
      })();
    }, []),
    c.jsxs("div", {
      className: "w-full text-white",
      children: [
        c.jsx("h1", {
          className: `${!t && "hidden"} text-2xl font-bold mb-4`,
          children: "Latest",
        }),
        c.jsx("div", {
          className: "",
          children: t
            ? c.jsx("div", {
                className:
                  "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4",
                children: t.map((r, l) => c.jsx(B0, { video: r })),
              })
            : c.jsx("div", {
                className: "w-[full]",
                children: c.jsxs("div", {
                  className:
                    "w-full h-[85vh] flex flex-col justify-center items-center",
                  children: [
                    c.jsx("div", {
                      className: "md:text-[250px] text-[200px]",
                      children: c.jsx(H0, { color: "#ffffff" }),
                    }),
                    c.jsx("h1", {
                      className: "text-3xl font-bold",
                      children: "Don’t miss new videos",
                    }),
                    c.jsx("p", {
                      className: "text-sm font-semibold text-nowrap mt-1",
                      children:
                        "Sign in to see updates from your favourite YouTube channels",
                    }),
                    c.jsx("button", {
                      onClick: () => e("/login"),
                      className:
                        "my-5 border-2 border-zinc-600 px-3 py-1 rounded-3xl",
                      children: c.jsxs("p", {
                        className:
                          "flex items-center gap-2 text-lg text-blue-500",
                        children: [c.jsx(md, {}), " SignIn"],
                      }),
                    }),
                  ],
                }),
              }),
        }),
      ],
    })
  );
}
function Q0({ user: e }) {
  return c.jsxs("div", {
    className: "text-white",
    children: [
      c.jsxs("div", {
        className: "flex gap-3 items-center",
        children: [
          c.jsx("div", {
            className:
              "bg-blue-500 size-16 rounded-full flex items-center justify-center text-[30px] font-semibold",
            children: c.jsx("p", {
              children: e.user[0].userName.charAt(0).toUpperCase(),
            }),
          }),
          c.jsxs("div", {
            children: [
              c.jsx("h1", {
                className: "text-xl font-bold",
                children: e == null ? void 0 : e.user[0].userName,
              }),
              c.jsxs("p", {
                className: "text-[#ffffff80] text-[14px]",
                children: [e.user[0].subscriptions.length, " subscribers"],
              }),
              c.jsxs("div", {
                className: "flex gap-5 mt-1",
                children: [
                  c.jsx("button", {
                    className: "bg-cardBg py-1 px-2 rounded-lg",
                    children: "Uploaded videos",
                  }),
                  c.jsx("button", {
                    className: "bg-cardBg py-1 px-2 rounded-lg",
                    children: "Subscribes List",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsx("p", { className: "text-lg font-semibold", children: "History" }),
    ],
  });
}
function K0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "rect",
        attr: {
          width: "384",
          height: "256",
          x: "64",
          y: "176",
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "32",
          rx: "28.87",
          ry: "28.87",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M144 80h224m-256 48h288",
        },
        child: [],
      },
    ],
  })(e);
}
function G0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "m176 272 80 80 80-80M256 48v288",
        },
        child: [],
      },
    ],
  })(e);
}
function Y0() {
  bt((r) => r);
  const [e, t] = k.useState(),
    n = Lt();
  return (
    k.useEffect(() => {
      (async () => {
        const i = await (
          await fetch(
            "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/getUserDetail",
            {
              method: "GET",
              credentials: "include",
            }
          )
        ).json();
        console.log(i), t(i);
      })();
    }, []),
    c.jsxs("div", {
      className: "w-full overflow-y-auto hideScrollbar mb-5 px-2",
      children: [
        e
          ? c.jsx("div", { children: c.jsx(Q0, { user: e }) })
          : c.jsx("div", {
              className: "w-[full] text-white",
              children: c.jsxs("div", {
                className:
                  "w-full h-[85vh] flex flex-col justify-center items-center",
                children: [
                  c.jsx("div", {
                    className: "md:text-[250px] text-[200px]",
                    children: c.jsx(K0, { color: "#ffffff" }),
                  }),
                  c.jsx("h1", {
                    className: "text-3xl font-bold",
                    children: "Enjoy your favorite videos",
                  }),
                  c.jsx("p", {
                    className: "text-sm font-semibold text-nowrap mt-1",
                    children:
                      "Sign in to access videos that you’ve liked or saved",
                  }),
                  c.jsx("button", {
                    onClick: () => n("/login"),
                    className:
                      "my-5 border-2 border-zinc-600 px-3 py-1 rounded-3xl",
                    children: c.jsxs("p", {
                      className:
                        "flex items-center gap-2 text-lg text-blue-500",
                      children: [c.jsx(md, {}), " SignIn"],
                    }),
                  }),
                ],
              }),
            }),
        e &&
          c.jsx("div", {
            className: "grid grid-cols-4 gap-4 mt-5 place-items-center",
            children: e.user[0].watchVideos.map((r, l) =>
              c.jsx(sd, { video: r }, l)
            ),
          }),
      ],
    })
  );
}
function ka(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z",
        },
        child: [],
      },
    ],
  })(e);
}
function vd(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function X0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Z0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z",
        },
        child: [],
      },
    ],
  })(e);
}
function J0(e) {
  return J({
    tag: "svg",
    attr: { t: "1569683915274", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z",
        },
        child: [],
      },
    ],
  })(e);
}
function q0(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function $l(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z",
        },
        child: [],
      },
    ],
  })(e);
}
function b0(e) {
  return J({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
        },
        child: [],
      },
    ],
  })(e);
}
function e1(e) {
  return J({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3",
        },
        child: [],
      },
    ],
  })(e);
}
function ne(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var t1 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Ca = t1,
  Vi = () => Math.random().toString(36).substring(7).split("").join("."),
  n1 = {
    INIT: `@@redux/INIT${Vi()}`,
    REPLACE: `@@redux/REPLACE${Vi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vi()}`,
  },
  Al = n1;
function Gs(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function gd(e, t, n) {
  if (typeof e != "function") throw new Error(ne(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ne(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ne(1));
    return n(gd)(e, t);
  }
  let r = e,
    l = t,
    i = new Map(),
    o = i,
    s = 0,
    u = !1;
  function a() {
    o === i &&
      ((o = new Map()),
      i.forEach((S, m) => {
        o.set(m, S);
      }));
  }
  function f() {
    if (u) throw new Error(ne(3));
    return l;
  }
  function d(S) {
    if (typeof S != "function") throw new Error(ne(4));
    if (u) throw new Error(ne(5));
    let m = !0;
    a();
    const p = s++;
    return (
      o.set(p, S),
      function () {
        if (m) {
          if (u) throw new Error(ne(6));
          (m = !1), a(), o.delete(p), (i = null);
        }
      }
    );
  }
  function v(S) {
    if (!Gs(S)) throw new Error(ne(7));
    if (typeof S.type > "u") throw new Error(ne(8));
    if (typeof S.type != "string") throw new Error(ne(17));
    if (u) throw new Error(ne(9));
    try {
      (u = !0), (l = r(l, S));
    } finally {
      u = !1;
    }
    return (
      (i = o).forEach((p) => {
        p();
      }),
      S
    );
  }
  function g(S) {
    if (typeof S != "function") throw new Error(ne(10));
    (r = S), v({ type: Al.REPLACE });
  }
  function y() {
    const S = d;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(ne(11));
        function p() {
          const x = m;
          x.next && x.next(f());
        }
        return p(), { unsubscribe: S(p) };
      },
      [Ca]() {
        return this;
      },
    };
  }
  return (
    v({ type: Al.INIT }),
    { dispatch: v, subscribe: d, getState: f, replaceReducer: g, [Ca]: y }
  );
}
function r1(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Al.INIT }) > "u") throw new Error(ne(12));
    if (typeof n(void 0, { type: Al.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ne(13));
  });
}
function l1(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let l;
  try {
    r1(n);
  } catch (i) {
    l = i;
  }
  return function (o = {}, s) {
    if (l) throw l;
    let u = !1;
    const a = {};
    for (let f = 0; f < r.length; f++) {
      const d = r[f],
        v = n[d],
        g = o[d],
        y = v(g, s);
      if (typeof y > "u") throw (s && s.type, new Error(ne(14)));
      (a[d] = y), (u = u || y !== g);
    }
    return (u = u || r.length !== Object.keys(o).length), u ? a : o;
  };
}
function Bl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function i1(...e) {
  return (t) => (n, r) => {
    const l = t(n, r);
    let i = () => {
      throw new Error(ne(15));
    };
    const o = { getState: l.getState, dispatch: (u, ...a) => i(u, ...a) },
      s = e.map((u) => u(o));
    return (i = Bl(...s)(l.dispatch)), { ...l, dispatch: i };
  };
}
function o1(e) {
  return Gs(e) && "type" in e && typeof e.type == "string";
}
var yd = Symbol.for("immer-nothing"),
  Ea = Symbol.for("immer-draftable"),
  Ne = Symbol.for("immer-state");
function Ae(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var _n = Object.getPrototypeOf;
function Pt(e) {
  return !!e && !!e[Ne];
}
function ot(e) {
  var t;
  return e
    ? xd(e) ||
        Array.isArray(e) ||
        !!e[Ea] ||
        !!((t = e.constructor) != null && t[Ea]) ||
        ai(e) ||
        ci(e)
    : !1;
}
var s1 = Object.prototype.constructor.toString();
function xd(e) {
  if (!e || typeof e != "object") return !1;
  const t = _n(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === s1;
}
function Vl(e, t) {
  ui(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function ui(e) {
  const t = e[Ne];
  return t ? t.type_ : Array.isArray(e) ? 1 : ai(e) ? 2 : ci(e) ? 3 : 0;
}
function Ho(e, t) {
  return ui(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function wd(e, t, n) {
  const r = ui(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function u1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ai(e) {
  return e instanceof Map;
}
function ci(e) {
  return e instanceof Set;
}
function Ft(e) {
  return e.copy_ || e.base_;
}
function Wo(e, t) {
  if (ai(e)) return new Map(e);
  if (ci(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && xd(e))
    return _n(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Ne];
  let r = Reflect.ownKeys(n);
  for (let l = 0; l < r.length; l++) {
    const i = r[l],
      o = n[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (n[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(_n(e), n);
}
function Ys(e, t = !1) {
  return (
    fi(e) ||
      Pt(e) ||
      !ot(e) ||
      (ui(e) > 1 && (e.set = e.add = e.clear = e.delete = a1),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Ys(r, !0))),
    e
  );
}
function a1() {
  Ae(2);
}
function fi(e) {
  return Object.isFrozen(e);
}
var c1 = {};
function Xt(e) {
  const t = c1[e];
  return t || Ae(0, e), t;
}
var kr;
function Sd() {
  return kr;
}
function f1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ja(e, t) {
  t &&
    (Xt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Qo(e) {
  Ko(e), e.drafts_.forEach(d1), (e.drafts_ = null);
}
function Ko(e) {
  e === kr && (kr = e.parent_);
}
function Na(e) {
  return (kr = f1(kr, e));
}
function d1(e) {
  const t = e[Ne];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function _a(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ne].modified_ && (Qo(t), Ae(4)),
        ot(e) && ((e = Hl(t, e)), t.parent_ || Wl(t, e)),
        t.patches_ &&
          Xt("Patches").generateReplacementPatches_(
            n[Ne].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Hl(t, n, [])),
    Qo(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== yd ? e : void 0
  );
}
function Hl(e, t, n) {
  if (fi(t)) return t;
  const r = t[Ne];
  if (!r) return Vl(t, (l, i) => Pa(e, r, t, l, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Wl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const l = r.copy_;
    let i = l,
      o = !1;
    r.type_ === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      Vl(i, (s, u) => Pa(e, r, l, s, u, n, o)),
      Wl(e, l, !1),
      n &&
        e.patches_ &&
        Xt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Pa(e, t, n, r, l, i, o) {
  if (Pt(l)) {
    const s =
        i && t && t.type_ !== 3 && !Ho(t.assigned_, r) ? i.concat(r) : void 0,
      u = Hl(e, l, s);
    if ((wd(n, r, u), Pt(u))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(l);
  if (ot(l) && !fi(l)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Hl(e, l),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Wl(e, l);
  }
}
function Wl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ys(t, n);
}
function p1(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Sd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = r,
    i = Xs;
  n && ((l = [r]), (i = Cr));
  const { revoke: o, proxy: s } = Proxy.revocable(l, i);
  return (r.draft_ = s), (r.revoke_ = o), s;
}
var Xs = {
    get(e, t) {
      if (t === Ne) return e;
      const n = Ft(e);
      if (!Ho(n, t)) return h1(e, n, t);
      const r = n[t];
      return e.finalized_ || !ot(r)
        ? r
        : r === Hi(e.base_, t)
        ? (Wi(e), (e.copy_[t] = Yo(r, e)))
        : r;
    },
    has(e, t) {
      return t in Ft(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ft(e));
    },
    set(e, t, n) {
      const r = kd(Ft(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const l = Hi(Ft(e), t),
          i = l == null ? void 0 : l[Ne];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (u1(n, l) && (n !== void 0 || Ho(e.base_, t))) return !0;
        Wi(e), Go(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Hi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Wi(e), Go(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Ft(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Ae(11);
    },
    getPrototypeOf(e) {
      return _n(e.base_);
    },
    setPrototypeOf() {
      Ae(12);
    },
  },
  Cr = {};
Vl(Xs, (e, t) => {
  Cr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Cr.deleteProperty = function (e, t) {
  return Cr.set.call(this, e, t, void 0);
};
Cr.set = function (e, t, n) {
  return Xs.set.call(this, e[0], t, n, e[0]);
};
function Hi(e, t) {
  const n = e[Ne];
  return (n ? Ft(n) : e)[t];
}
function h1(e, t, n) {
  var l;
  const r = kd(t, n);
  return r
    ? "value" in r
      ? r.value
      : (l = r.get) == null
      ? void 0
      : l.call(e.draft_)
    : void 0;
}
function kd(e, t) {
  if (!(t in e)) return;
  let n = _n(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = _n(n);
  }
}
function Go(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Go(e.parent_));
}
function Wi(e) {
  e.copy_ || (e.copy_ = Wo(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var m1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const o = this;
          return function (u = i, ...a) {
            return o.produce(u, (f) => n.call(this, f, ...a));
          };
        }
        typeof n != "function" && Ae(6),
          r !== void 0 && typeof r != "function" && Ae(7);
        let l;
        if (ot(t)) {
          const i = Na(this),
            o = Yo(t, void 0);
          let s = !0;
          try {
            (l = n(o)), (s = !1);
          } finally {
            s ? Qo(i) : Ko(i);
          }
          return ja(i, r), _a(l, i);
        } else if (!t || typeof t != "object") {
          if (
            ((l = n(t)),
            l === void 0 && (l = t),
            l === yd && (l = void 0),
            this.autoFreeze_ && Ys(l, !0),
            r)
          ) {
            const i = [],
              o = [];
            Xt("Patches").generateReplacementPatches_(t, l, i, o), r(i, o);
          }
          return l;
        } else Ae(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...s) => this.produceWithPatches(o, (u) => t(u, ...s));
        let r, l;
        return [
          this.produce(t, n, (o, s) => {
            (r = o), (l = s);
          }),
          r,
          l,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ot(e) || Ae(8), Pt(e) && (e = Cd(e));
    const t = Na(this),
      n = Yo(e, void 0);
    return (n[Ne].isManual_ = !0), Ko(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ne];
    (!n || !n.isManual_) && Ae(9);
    const { scope_: r } = n;
    return ja(r, t), _a(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const l = t[n];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Xt("Patches").applyPatches_;
    return Pt(e) ? r(e, t) : this.produce(e, (l) => r(l, t));
  }
};
function Yo(e, t) {
  const n = ai(e)
    ? Xt("MapSet").proxyMap_(e, t)
    : ci(e)
    ? Xt("MapSet").proxySet_(e, t)
    : p1(e, t);
  return (t ? t.scope_ : Sd()).drafts_.push(n), n;
}
function Cd(e) {
  return Pt(e) || Ae(10, e), Ed(e);
}
function Ed(e) {
  if (!ot(e) || fi(e)) return e;
  const t = e[Ne];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Wo(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Wo(e, !0);
  return (
    Vl(n, (r, l) => {
      wd(n, r, Ed(l));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var _e = new m1(),
  jd = _e.produce;
_e.produceWithPatches.bind(_e);
_e.setAutoFreeze.bind(_e);
_e.setUseStrictShallowCopy.bind(_e);
_e.applyPatches.bind(_e);
_e.createDraft.bind(_e);
_e.finishDraft.bind(_e);
function v1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function g1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function y1(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var za = (e) => (Array.isArray(e) ? e : [e]);
function x1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    y1(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function w1(e, t) {
  const n = [],
    { length: r } = e;
  for (let l = 0; l < r; l++) n.push(e[l].apply(null, t));
  return n;
}
var S1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  k1 = typeof WeakRef < "u" ? WeakRef : S1,
  C1 = 0,
  Oa = 1;
function Jr() {
  return { s: C1, v: void 0, o: null, p: null };
}
function Zs(e, t = {}) {
  let n = Jr();
  const { resultEqualityCheck: r } = t;
  let l,
    i = 0;
  function o() {
    var d;
    let s = n;
    const { length: u } = arguments;
    for (let v = 0, g = u; v < g; v++) {
      const y = arguments[v];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let w = s.o;
        w === null && (s.o = w = new WeakMap());
        const S = w.get(y);
        S === void 0 ? ((s = Jr()), w.set(y, s)) : (s = S);
      } else {
        let w = s.p;
        w === null && (s.p = w = new Map());
        const S = w.get(y);
        S === void 0 ? ((s = Jr()), w.set(y, s)) : (s = S);
      }
    }
    const a = s;
    let f;
    if (
      (s.s === Oa ? (f = s.v) : ((f = e.apply(null, arguments)), i++),
      (a.s = Oa),
      r)
    ) {
      const v =
        ((d = l == null ? void 0 : l.deref) == null ? void 0 : d.call(l)) ?? l;
      v != null && r(v, f) && ((f = v), i !== 0 && i--),
        (l =
          (typeof f == "object" && f !== null) || typeof f == "function"
            ? new k1(f)
            : f);
    }
    return (a.v = f), f;
  }
  return (
    (o.clearCache = () => {
      (n = Jr()), o.resetResultsCount();
    }),
    (o.resultsCount = () => i),
    (o.resetResultsCount = () => {
      i = 0;
    }),
    o
  );
}
function Nd(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...l) => {
      let i = 0,
        o = 0,
        s,
        u = {},
        a = l.pop();
      typeof a == "object" && ((u = a), (a = l.pop())),
        v1(
          a,
          `createSelector expects an output function after the inputs, but received: [${typeof a}]`
        );
      const f = { ...n, ...u },
        {
          memoize: d,
          memoizeOptions: v = [],
          argsMemoize: g = Zs,
          argsMemoizeOptions: y = [],
          devModeChecks: w = {},
        } = f,
        S = za(v),
        m = za(y),
        p = x1(l),
        h = d(function () {
          return i++, a.apply(null, arguments);
        }, ...S),
        x = g(function () {
          o++;
          const j = w1(p, arguments);
          return (s = h.apply(null, j)), s;
        }, ...m);
      return Object.assign(x, {
        resultFunc: a,
        memoizedResultFunc: h,
        dependencies: p,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => s,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: d,
        argsMemoize: g,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var E1 = Nd(Zs),
  j1 = Object.assign(
    (e, t = E1) => {
      g1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((i) => e[i]);
      return t(r, (...i) => i.reduce((o, s, u) => ((o[n[u]] = s), o), {}));
    },
    { withTypes: () => j1 }
  );
function _d(e) {
  return ({ dispatch: n, getState: r }) =>
    (l) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : l(i);
}
var N1 = _d(),
  _1 = _d,
  P1 = (...e) => {
    const t = Nd(...e),
      n = Object.assign(
        (...r) => {
          const l = t(...r),
            i = (o, ...s) => l(Pt(o) ? Cd(o) : o, ...s);
          return Object.assign(i, l), i;
        },
        { withTypes: () => n }
      );
    return n;
  };
P1(Zs);
var z1 =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? Bl
            : Bl.apply(null, arguments);
      };
function Pn(e, t) {
  function n(...r) {
    if (t) {
      let l = t(...r);
      if (!l) throw new Error(xe(0));
      return {
        type: e,
        payload: l.payload,
        ...("meta" in l && { meta: l.meta }),
        ...("error" in l && { error: l.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => o1(r) && r.type === e),
    n
  );
}
var Pd = class Gn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Gn.prototype);
  }
  static get [Symbol.species]() {
    return Gn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Gn(...t[0].concat(this))
      : new Gn(...t.concat(this));
  }
};
function Ta(e) {
  return ot(e) ? jd(e, () => {}) : e;
}
function Ra(e, t, n) {
  if (e.has(t)) {
    let l = e.get(t);
    return n.update && ((l = n.update(l, t, e)), e.set(t, l)), l;
  }
  if (!n.insert) throw new Error(xe(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function O1(e) {
  return typeof e == "boolean";
}
var T1 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let o = new Pd();
      return n && (O1(n) ? o.push(N1) : o.push(_1(n.extraArgument))), o;
    },
  R1 = "RTK_autoBatch",
  zd = (e) => (t) => {
    setTimeout(t, e);
  },
  L1 =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : zd(10),
  M1 =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let l = !0,
        i = !1,
        o = !1;
      const s = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? L1
            : e.type === "callback"
            ? e.queueNotification
            : zd(e.timeout),
        a = () => {
          (o = !1), i && ((i = !1), s.forEach((f) => f()));
        };
      return Object.assign({}, r, {
        subscribe(f) {
          const d = () => l && f(),
            v = r.subscribe(d);
          return (
            s.add(f),
            () => {
              v(), s.delete(f);
            }
          );
        },
        dispatch(f) {
          var d;
          try {
            return (
              (l = !((d = f == null ? void 0 : f.meta) != null && d[R1])),
              (i = !l),
              i && (o || ((o = !0), u(a))),
              r.dispatch(f)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  D1 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let l = new Pd(e);
      return r && l.push(M1(typeof r == "object" ? r : void 0)), l;
    },
  I1 = !0;
function U1(e) {
  const t = T1(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: l = !0,
      preloadedState: i = void 0,
      enhancers: o = void 0,
    } = e || {};
  let s;
  if (typeof n == "function") s = n;
  else if (Gs(n)) s = l1(n);
  else throw new Error(xe(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let a = Bl;
  l && (a = z1({ trace: !I1, ...(typeof l == "object" && l) }));
  const f = i1(...u),
    d = D1(f);
  let v = typeof o == "function" ? o(d) : d();
  const g = a(...v);
  return gd(s, i, g);
}
function Od(e) {
  const t = {},
    n = [];
  let r;
  const l = {
    addCase(i, o) {
      const s = typeof i == "string" ? i : i.type;
      if (!s) throw new Error(xe(28));
      if (s in t) throw new Error(xe(29));
      return (t[s] = o), l;
    },
    addMatcher(i, o) {
      return n.push({ matcher: i, reducer: o }), l;
    },
    addDefaultCase(i) {
      return (r = i), l;
    },
  };
  return e(l), [t, n, r];
}
function F1(e) {
  return typeof e == "function";
}
function $1(e, t) {
  let [n, r, l] = Od(t),
    i;
  if (F1(e)) i = () => Ta(e());
  else {
    const s = Ta(e);
    i = () => s;
  }
  function o(s = i(), u) {
    let a = [
      n[u.type],
      ...r.filter(({ matcher: f }) => f(u)).map(({ reducer: f }) => f),
    ];
    return (
      a.filter((f) => !!f).length === 0 && (a = [l]),
      a.reduce((f, d) => {
        if (d)
          if (Pt(f)) {
            const g = d(f, u);
            return g === void 0 ? f : g;
          } else {
            if (ot(f)) return jd(f, (v) => d(v, u));
            {
              const v = d(f, u);
              if (v === void 0) {
                if (f === null) return f;
                throw new Error(xe(9));
              }
              return v;
            }
          }
        return f;
      }, s)
    );
  }
  return (o.getInitialState = i), o;
}
var A1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  B1 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += A1[(Math.random() * 64) | 0];
    return t;
  },
  V1 = Symbol.for("rtk-slice-createasyncthunk");
function H1(e, t) {
  return `${e}/${t}`;
}
function W1({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[V1];
  return function (l) {
    const { name: i, reducerPath: o = i } = l;
    if (!i) throw new Error(xe(11));
    typeof process < "u";
    const s =
        (typeof l.reducers == "function" ? l.reducers(G1()) : l.reducers) || {},
      u = Object.keys(s),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      f = {
        addCase(h, x) {
          const E = typeof h == "string" ? h : h.type;
          if (!E) throw new Error(xe(12));
          if (E in a.sliceCaseReducersByType) throw new Error(xe(13));
          return (a.sliceCaseReducersByType[E] = x), f;
        },
        addMatcher(h, x) {
          return a.sliceMatchers.push({ matcher: h, reducer: x }), f;
        },
        exposeAction(h, x) {
          return (a.actionCreators[h] = x), f;
        },
        exposeCaseReducer(h, x) {
          return (a.sliceCaseReducersByName[h] = x), f;
        },
      };
    u.forEach((h) => {
      const x = s[h],
        E = {
          reducerName: h,
          type: H1(i, h),
          createNotation: typeof l.reducers == "function",
        };
      X1(x) ? J1(E, x, f, t) : Y1(E, x, f);
    });
    function d() {
      const [h = {}, x = [], E = void 0] =
          typeof l.extraReducers == "function"
            ? Od(l.extraReducers)
            : [l.extraReducers],
        j = { ...h, ...a.sliceCaseReducersByType };
      return $1(l.initialState, (_) => {
        for (let N in j) _.addCase(N, j[N]);
        for (let N of a.sliceMatchers) _.addMatcher(N.matcher, N.reducer);
        for (let N of x) _.addMatcher(N.matcher, N.reducer);
        E && _.addDefaultCase(E);
      });
    }
    const v = (h) => h,
      g = new Map();
    let y;
    function w(h, x) {
      return y || (y = d()), y(h, x);
    }
    function S() {
      return y || (y = d()), y.getInitialState();
    }
    function m(h, x = !1) {
      function E(_) {
        let N = _[h];
        return typeof N > "u" && x && (N = S()), N;
      }
      function j(_ = v) {
        const N = Ra(g, x, { insert: () => new WeakMap() });
        return Ra(N, _, {
          insert: () => {
            const $ = {};
            for (const [R, we] of Object.entries(l.selectors ?? {}))
              $[R] = Q1(we, _, S, x);
            return $;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: j,
        get selectors() {
          return j(E);
        },
        selectSlice: E,
      };
    }
    const p = {
      name: i,
      reducer: w,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: S,
      ...m(o),
      injectInto(h, { reducerPath: x, ...E } = {}) {
        const j = x ?? o;
        return (
          h.inject({ reducerPath: j, reducer: w }, E), { ...p, ...m(j, !0) }
        );
      },
    };
    return p;
  };
}
function Q1(e, t, n, r) {
  function l(i, ...o) {
    let s = t(i);
    return typeof s > "u" && r && (s = n()), e(s, ...o);
  }
  return (l.unwrapped = e), l;
}
var K1 = W1();
function G1() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Y1({ type: e, reducerName: t, createNotation: n }, r, l) {
  let i, o;
  if ("reducer" in r) {
    if (n && !Z1(r)) throw new Error(xe(17));
    (i = r.reducer), (o = r.prepare);
  } else i = r;
  l.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, o ? Pn(e, o) : Pn(e));
}
function X1(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Z1(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function J1({ type: e, reducerName: t }, n, r, l) {
  if (!l) throw new Error(xe(18));
  const {
      payloadCreator: i,
      fulfilled: o,
      pending: s,
      rejected: u,
      settled: a,
      options: f,
    } = n,
    d = l(e, i, f);
  r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    u && r.addCase(d.rejected, u),
    a && r.addMatcher(d.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: o || qr,
      pending: s || qr,
      rejected: u || qr,
      settled: a || qr,
    });
}
function qr() {}
var q1 = (e, t) => {
    if (typeof e != "function") throw new Error(xe(32));
  },
  Js = "listenerMiddleware",
  b1 = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: l, effect: i } = e;
    if (t) l = Pn(t).match;
    else if (n) (t = n.type), (l = n.match);
    else if (r) l = r;
    else if (!l) throw new Error(xe(21));
    return q1(i), { predicate: l, type: t, effect: i };
  },
  ev = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = b1(e);
      return {
        id: B1(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(xe(22));
        },
      };
    },
    { withTypes: () => ev }
  ),
  tv = Object.assign(Pn(`${Js}/add`), { withTypes: () => tv });
Pn(`${Js}/removeAll`);
var nv = Object.assign(Pn(`${Js}/remove`), { withTypes: () => nv });
function xe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const rv = { currentUser: !1, error: null, loading: !1, isSignInPage: !1 },
  Td = K1({
    name: "user",
    initialState: rv,
    reducers: {
      signInStart: (e) => {
        e.loading = !0;
      },
      signInSuccess: (e, t) => {
        (e.currentUser = t.payload), (e.error = !1), (e.loading = !1);
      },
      signInfailed: (e, t) => {
        (e.error = !0), (e.loading = !1);
      },
      setIsSignInPage: (e, t) => {
        e.isSignInPage = t.payload;
      },
    },
  }),
  {
    signInStart: lv,
    signInSuccess: Rd,
    signInfailed: iv,
    setIsSignInPage: Xo,
  } = Td.actions,
  ov = Td.reducer;
function sv(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6.71-.7 2.47 2.46v.71l-2.49 2.48-.7-.7 1.65-1.65z",
        },
        child: [],
      },
    ],
  })(e);
}
function uv() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState(),
    [l, i] = k.useState(),
    o = pd(),
    s = Lt(),
    [u, a] = k.useState(!1),
    [f, d] = k.useState(!1);
  k.useEffect(() => {
    (async () => {
      const m = await (
        await fetch(
          "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/getUserDetail",
          {
            method: "GET",
            credentials: "include",
          }
        )
      ).json();
      i(m.user[0]);
    })();
  }, []);
  const v = (w) => {
      w.preventDefault(), s("/"), o(Xo(!1));
    },
    g = (w) => {
      w.preventDefault(), o(Rd(!1)), d(!1);
    },
    y = async (w) => {
      w.preventDefault();
      const S = new URLSearchParams(window.location.search);
      S.set("query", n);
      const m = S.toString();
      s(`/search?${m}`);
    };
  return c.jsxs("div", {
    className:
      "px-4 sm:px-6 py-2 flex justify-between items-center bg-[#10131A] sticky top-0 left-0",
    children: [
      c.jsx(ee, {
        to: "/",
        children: c.jsxs("div", {
          onClick: v,
          id: "logo",
          className: " flex items-center",
          children: [
            c.jsx("img", {
              className: " sm:w-[51px]  w-[32px]",
              src: "https://static.vecteezy.com/system/resources/previews/023/986/704/large_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png",
              alt: "",
            }),
            c.jsx("h1", {
              className:
                " text-white font-bold font-roboto sm:text-2xl md:text-3xl ",
              children: "YouTube",
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        id: "middle",
        className: "flex items-center gap-3",
        children: [
          c.jsx("div", {
            className: `${
              e ? "inline-block" : "hidden"
            } sm:flex lg:w-[420px] md:w-[350px] sm:[300px] w-[150px]  items-center border border-lightText rounded-2xl overflow-hidden`,
            children: c.jsxs("form", {
              onSubmit: y,
              className: "flex",
              children: [
                c.jsx("input", {
                  onSubmit: () => alert("Hello"),
                  className:
                    "bg-transparent  text-semibold text-white outline-none mx-3 my-1 ",
                  type: "text",
                  onChange: (w) => r(w.target.value),
                  placeholder: "Search",
                }),
                c.jsx("div", {
                  className:
                    " bg-lightText w-12 h-[33px] flex items-center justify-center md:relative left-[167px]",
                  children: c.jsx(ka, { color: "white", size: "22px" }),
                }),
              ],
            }),
          }),
          c.jsx("div", {
            className:
              "hidden sm:flex size-[33px] bg-lightText  items-center justify-center rounded-full",
            children: c.jsx(V0, { color: "white", size: "22px" }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center gap-6",
        children: [
          c.jsx("div", {
            onClick: () => t(!e),
            className: `
          } sm:hidden cursor-pointer`,
            children: c.jsx(ka, { color: "white", size: "25px" }),
          }),
          c.jsx("div", {
            className: "hidden sm:inline-block",
            children: c.jsx(J0, {
              color: "white",
              size: "25px",
              onClick: () => {
                a(!u);
              },
            }),
          }),
          c.jsxs("div", {
            className: `bg-[#282828] text-white text-[15px] p-3 absolute top-14 rounded-lg ${
              !u && "hidden"
            }`,
            children: [
              c.jsx(ee, {
                to: "/upload",
                children: c.jsxs("p", {
                  onClick: () => {
                    a(!u);
                  },
                  className: "flex items-center gap-2 ",
                  href: "",
                  children: [c.jsx($l, {}), "Upload Video"],
                }),
              }),
              c.jsx(ee, {
                to: "/live",
                children: c.jsxs("p", {
                  onClick: () => {
                    a(!u);
                  },
                  className: "flex items-center gap-2 ",
                  href: "",
                  children: [c.jsx(b0, {}), "Go live"],
                }),
              }),
            ],
          }),
          c.jsx("div", {
            className: "hidden sm:inline-block",
            children: c.jsx(q0, { color: "white", size: "25px" }),
          }),
          l
            ? c.jsxs("div", {
                children: [
                  c.jsx("div", {
                    onClick: () => {
                      d(!f);
                    },
                    className:
                      "text-white font-semibold cursor-pointer bg-blue-500 size-[35px] flex items-center justify-center rounded-full",
                    children: c.jsx("p", {
                      children: l.userName.charAt(0).toUpperCase(),
                    }),
                  }),
                  f &&
                    c.jsxs("div", {
                      className:
                        "absolute top-[72px] right-5 bg-cardBg p-3 rounded-lg",
                      children: [
                        c.jsx(ee, {
                          to: "/you",
                          children: c.jsxs("p", {
                            className:
                              "flex gap-2 items-center text-[18px] mb-2 text-white font-semibold hover:text-red-700",
                            children: [c.jsx($l, {}), "You"],
                          }),
                        }),
                        c.jsxs("p", {
                          onClick: g,
                          className:
                            "flex gap-2 items-center text-[18px] text-white font-semibold hover:text-red-700",
                          children: [c.jsx(sv, {}), "SignOut"],
                        }),
                      ],
                    }),
                ],
              })
            : c.jsx(ee, {
                to: "/login",
                children: c.jsx("button", {
                  onClick: () => {
                    o(Xo(!0));
                  },
                  className:
                    "bg-red-600 px-3 py-1 rounded-lg text-white font-semibold",
                  children: "Login",
                }),
              }),
        ],
      }),
    ],
  });
}
function Ld(e) {
  return J({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m18.931 9.99-1.441-.601 1.717-.913a4.48 4.48 0 0 0 1.874-6.078 4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193 4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192 4.525 4.525 0 0 0-2.678-3.904ZM9.597 15.19V8.824l6.007 3.184z",
        },
        child: [],
      },
    ],
  })(e);
}
function av() {
  return c.jsxs("div", {
    className:
      "flex items-center text-white text-[12px] flex-col gap-6 md:gap-10 h-[100vh] px-2",
    children: [
      c.jsx(ee, {
        to: "",
        children: c.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            c.jsx(vd, { size: "25" }),
            c.jsx("p", { children: "Home" }),
          ],
        }),
      }),
      c.jsx(ee, {
        to: "/shorts",
        children: c.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            c.jsx(Ld, { size: "25" }),
            c.jsx("p", { children: "Shorts" }),
          ],
        }),
      }),
      c.jsx(ee, {
        to: "/subscription",
        children: c.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            c.jsx(hd, { size: "25" }),
            c.jsx("p", { children: "Subscriptions" }),
          ],
        }),
      }),
      c.jsx(ee, {
        to: "/you",
        children: c.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            c.jsx($l, { size: "25" }),
            c.jsx("p", { children: "You" }),
          ],
        }),
      }),
    ],
  });
}
function cv() {
  const e = new FormData(),
    t = Lt(),
    [n, r] = k.useState(!1),
    [l, i] = k.useState(),
    [o, s] = k.useState(),
    [u, a] = k.useState(),
    f = bt((g) => g.currentUser),
    d = (g) => {
      g.preventDefault(),
        (g.target.type == "textarea" || g.target.type == "text") &&
          a({ ...u, [g.target.id]: g.target.value }),
        g.target.id == "thumbnailUrl" && i(g.target.files[0]),
        g.target.id == "videoUrl" && s(g.target.files[0]);
    },
    v = async (g) => {
      r(!0),
        e.append("thumbnailUrl", l),
        e.append("videoUrl", o),
        e.append("owner", f._id);
      for (const S in u) e.append(S, u[S]);
      (
        await (
          await fetch(
            "https://youtube-full-mern-1.onrender.com/api/v1/user/video/trial",
            {
              method: "POST",
              body: e,
            }
          )
        ).json()
      ).success && t("/"),
        r(!1);
    };
  return c.jsxs("div", {
    className: "p-5 text-lightText w-full",
    children: [
      f
        ? c.jsxs("div", {
            children: [
              c.jsx("h1", {
                className: "text-2xl font-semibold text-white ",
                children: "Upload Video",
              }),
              c.jsx("h2", {
                className: "text-[15px]",
                children: "Upload video you want to share",
              }),
              c.jsxs("div", {
                className: "flex flex-col sm:flex-row  mt-5 gap-9",
                children: [
                  c.jsxs("div", {
                    id: "left",
                    className:
                      "w-[50%] h-[430px] flex flex-col items-center justify-center gap-5 border border-lightText border-dashed",
                    children: [
                      c.jsx(X0, { size: "100" }),
                      c.jsx("p", {
                        children:
                          "Select the image by clicking the below button",
                      }),
                      c.jsx("input", {
                        className: "hidden",
                        onChange: d,
                        id: "videoUrl",
                        type: "file",
                      }),
                      c.jsx("button", {
                        className:
                          "bg-red-600 px-9 text-white font-bold py-1 rounded-lg",
                        onClick: () =>
                          document.getElementById("videoUrl").click(),
                        children: "SELECT VIDEO",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    id: "right",
                    className: "w-[50%]",
                    children: [
                      c.jsx("h1", {
                        className: "text-white text-xl font-semibold mb-2",
                        children: "Add Details",
                      }),
                      c.jsxs("div", {
                        className: "w-full border border-lightText p-3 my-5",
                        children: [
                          c.jsx("p", { children: "Upload the thumbnail" }),
                          c.jsx("input", {
                            onChange: d,
                            type: "file",
                            id: "thumbnailUrl",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "w-full border border-lightText p-3 my-5",
                        children: [
                          c.jsx("p", { children: "Title:" }),
                          c.jsx("input", {
                            onChange: d,
                            className:
                              "w-[100%] px-2 py-1 bg-transparent border border-lightText rounded-lg",
                            placeholder: "Enter the title of the project",
                            type: "text",
                            name: "",
                            id: "title",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "w-full border border-lightText p-3 my-5",
                        children: [
                          c.jsx("p", { children: "Description:" }),
                          c.jsx("textarea", {
                            onChange: d,
                            className:
                              "w-[100%] h-[60px] px-2 py-1 bg-transparent border border-lightText rounded-lg",
                            placeholder:
                              "Enter the description about the project",
                            name: "",
                            id: "description",
                            cols: "30",
                            rows: "10",
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "w-full flex justify-center",
                        children: c.jsx("button", {
                          onClick: v,
                          className:
                            " bg-red-600 px-9 text-white font-bold py-1 rounded-lg",
                          children: "Upload Video",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: `flex flex-col gap-2 absolute left-[50%] top-[50%] ${
                  !n && "hidden"
                }`,
                children: [
                  c.jsx("div", {
                    className:
                      "w-16 h-16 border-4 border-t-9 border-t-black border-gray-200 rounded-full animate-spin",
                  }),
                  c.jsx("h1", { children: "Uploading" }),
                ],
              }),
            ],
          })
        : c.jsx("div", {
            className: "w-full h-[80vh] flex items-center justify-center",
            children: c.jsxs("h1", {
              className: "text-center",
              children: [
                "you can't access this page. ",
                c.jsx("br", {}),
                " Firstly do login",
              ],
            }),
          }),
      c.jsxs("div", {
        className: `flex flex-col gap-2 absolute left-[50%] top-[50%] ${
          !n && "hidden"
        }`,
        children: [
          c.jsx("div", {
            className:
              "w-16 h-16 border-4 border-t-9 border-t-black border-gray-200 rounded-full animate-spin",
          }),
          c.jsx("h1", { children: "Uploading" }),
        ],
      }),
    ],
  });
}
function fv() {
  const e = Lt(),
    t = pd(),
    [n, r] = k.useState({ email: "", password: "" });
  k.useState(!1);
  const l = bt((s) => s),
    i = (s) => {
      s.preventDefault(), r({ ...n, [s.target.id]: s.target.value });
    },
    o = async (s) => {
      s.preventDefault(), t(lv());
      const a = await (
        await fetch(
          "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/login",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          }
        )
      ).json();
      a.success
        ? (t(Rd(a.user)), t(Xo(!1)), e("/"))
        : (t(iv()), alert(`Error: ${a.message}`));
    };
  return c.jsxs("div", {
    className: " max-w-lg mx-auto flex flex-col items-center p-3 w-full py-16",
    children: [
      c.jsx("div", {
        className: "flex items-center justify-center w-[80%]",
        children: c.jsx("h1", {
          className: "my-7 font-semibold text-3xl text-white",
          children: "Sign In",
        }),
      }),
      c.jsxs("form", {
        onSubmit: o,
        className: "flex flex-col gap-3 w-[80%]",
        children: [
          c.jsx("input", {
            type: "email",
            onChange: i,
            id: "email",
            placeholder: "email",
            className: "bg-slate-200 p-2 rounded-lg border",
          }),
          c.jsx("input", {
            type: "password",
            onChange: i,
            id: "password",
            placeholder: "password",
            className: "bg-slate-200 p-2 rounded-lg border",
          }),
          c.jsx("button", {
            className:
              "bg-slate-700 p-2 rounded-lg border font-semibold text-white",
            children: l.loading ? "Loading..." : "SIGN IN",
          }),
        ],
      }),
      c.jsx("p", {
        className:
          "bg-red-700 p-2 rounded-lg border text-white text-center mt-3 font-semibold w-[80%]",
        children: "SIGN IN USING GOOGLE",
      }),
      c.jsxs("div", {
        className: "flex gap-2 mt-3",
        children: [
          c.jsx("p", {
            className: "text-lightText",
            children: "Don't have an account?",
          }),
          c.jsx(ee, {
            to: "/register",
            children: c.jsx("span", {
              className: "text-blue-700 font-semibold",
              children: "Register",
            }),
          }),
        ],
      }),
      c.jsx("p", { children: "Error:" }),
    ],
  });
}
function dv() {
  const [e, t] = k.useState(),
    [n, r] = k.useState(!1),
    l = Lt(),
    i = (s) => {
      s.preventDefault(), t({ ...e, [s.target.id]: s.target.value });
    },
    o = async (s) => {
      s.preventDefault(), r(!0);
      try {
        const a = await (
          await fetch(
            "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }
          )
        ).json();
        r(!1), a.success ? l("/login") : alert("Error: " + a.message);
      } catch {
        alert("something went wrong"), r(!1);
      }
    };
  return c.jsxs("div", {
    className: " max-w-lg flex flex-col mx-auto p-3 w-full py-16",
    children: [
      c.jsx("div", {
        className: "flex items-center justify-center w-[80%]",
        children: c.jsx("h1", {
          className: "my-7 font-semibold text-3xl text-white",
          children: "Sign Up",
        }),
      }),
      c.jsxs("form", {
        onSubmit: o,
        className: "flex flex-col gap-3 w-[80%]",
        children: [
          c.jsx("input", {
            type: "text",
            onChange: i,
            id: "userName",
            placeholder: "username",
            className: "bg-slate-200 p-2 rounded-lg border",
          }),
          c.jsx("input", {
            type: "email",
            onChange: i,
            id: "email",
            placeholder: "email",
            className: "bg-slate-200 p-2 rounded-lg border",
          }),
          c.jsx("input", {
            type: "password",
            onChange: i,
            id: "password",
            placeholder: "password",
            className: "bg-slate-200 p-2 rounded-lg border",
          }),
          c.jsx("button", {
            className:
              "bg-slate-700 p-2 rounded-lg border font-semibold text-white",
            children: n ? "Loading..." : "SIGN IN",
          }),
        ],
      }),
      c.jsx("p", {
        className:
          "bg-red-700 p-2 rounded-lg border text-white text-center mt-3 font-semibold w-[80%]",
        children: "SIGN IN USING GOOGLE",
      }),
      c.jsxs("div", {
        className: "flex gap-2 mt-3",
        children: [
          c.jsx("p", {
            className: "text-lightText",
            children: "Don't have an account?",
          }),
          c.jsx(ee, {
            to: "/login",
            children: c.jsx("span", {
              className: "text-blue-700 font-semibold",
              children: "Login",
            }),
          }),
        ],
      }),
    ],
  });
}
function pv(e) {
  return J({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z",
        },
        child: [],
      },
    ],
  })(e);
}
function hv({ desc: e }) {
  const [t, n] = k.useState(!1);
  return c.jsxs("div", {
    className: "cursor-pointer p-3 my-4  bg-cardBg rounded-lg",
    onClick: () => n(!t),
    children: [
      c.jsx("h1", { className: "font-semibold mb-2", children: "Description" }),
      c.jsx("p", {
        className: ` ${!t && "line-clamp-3"} text-[13px]`,
        children: e,
      }),
    ],
  });
}
function mv({ likeSendData: e }) {
  const { currentUser: t } = bt((s) => s),
    [n, r] = k.useState(""),
    [l, i] = k.useState([]);
  k.useEffect(() => {
    (async () => {
      const a = await (
        await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideoByID/getComment/${e.videoId}`
        )
      ).json();
      i(a.comments);
    })();
  }, []);
  const o = async (s) => {
    s.preventDefault();
    const u = { commentBy: t._id, comment: n },
      f = await (
        await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideoByID/doComment/${e.videoId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(u),
          }
        )
      ).json();
    f.success && (r(""), i(f.video.comments));
  };
  return c.jsxs("div", {
    className: "w-full  cursor-pointer p-3 my-4  bg-cardBg rounded-lg ",
    children: [
      c.jsx("h1", { className: "font-semibold mb-2", children: "Comments" }),
      c.jsx("div", {
        className: "w-full mb-3",
        children: c.jsxs("div", {
          className: "flex items-center gap-3  ",
          children: [
            c.jsx("div", {
              className:
                "bg-blue-500 size-[35px] rounded-full flex items-center justify-center font-bold",
              children: c.jsx("p", {
                children: t ? t.userName.charAt(0).toUpperCase() : "X",
              }),
            }),
            t
              ? c.jsx("form", {
                  onSubmit: o,
                  children: c.jsx("input", {
                    onChange: (s) => r(s.target.value),
                    className: "bg-transparent  outline-none w-full",
                    name: "comment",
                    value: n,
                    type: "text",
                    placeholder: "Enter the comment",
                  }),
                })
              : c.jsx("p", {
                  className: "text-[#ffffff80]",
                  children:
                    "You are not authorized to do comment. please login first",
                }),
          ],
        }),
      }),
      l &&
        c.jsx("div", {
          className: "pl-4 max-h-[200px] lg:max-h-full overflow-y-auto ",
          children: l.map((s) =>
            c.jsxs("div", {
              className: "flex items-center gap-3 mb-3 ",
              children: [
                c.jsx("div", {
                  className:
                    "bg-blue-500 flex items-center justify-center size-[35px] rounded-full",
                  children: c.jsx("p", { children: "R" }),
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("p", {
                      className: "text-[13px] text-[#ffffff80]",
                      children: "@karanmharse05",
                    }),
                    c.jsx("p", {
                      className: "text-[14px]",
                      children: s.comment,
                    }),
                  ],
                }),
              ],
            })
          ),
        }),
    ],
  });
}
function vv() {
  const { id: e } = Im();
  console.log(e);
  const { currentUser: t } = bt((d) => d),
    [n, r] = k.useState(null),
    [l, i] = k.useState();
  k.useState();
  const o = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  k.useEffect(() => {
    (async () => {
      const g = await (
        await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/user/video//getVideoByID/${e}`,
          { method: "post" }
        )
      ).json();
      r(g);
      const w = await (
        await fetch(
          "https://youtube-full-mern-1.onrender.com/api/v1/user/video/getAllVideos"
        )
      ).json();
      i(w),
        t &&
          (await (
            await fetch(
              `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideoByID/watchVideo/${e}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentUserId: t._id }),
              }
            )
          ).json({}));
    })();
  }, [e]);
  const s = async (d) => {
      d.preventDefault();
      const v = { ownerId: n.video.ownerID, currentUserId: t._id };
      if (t) {
        const y = await (
          await fetch(
            "https://youtube-full-mern-1.onrender.com//api/v1/channel/subcription/doSubcribed",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(v),
            }
          )
        ).json();
        alert(y.message);
      } else alert("Firstly do login");
    },
    u = (d) => {
      const v = document.createElement("a");
      (v.href = d),
        (v.download = "video.jpg"),
        document.body.appendChild(v),
        v.click(),
        document.body.removeChild(v);
    },
    a = async (d) => {
      d.preventDefault();
      const g = await (
        await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/like/${e}`,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: t._id }),
          }
        )
      ).json();
      alert(g.message);
    },
    f = { commentBy: t._id, videoId: e };
  return c.jsx("div", {
    className: "text-white w-full h-full px-4",
    children: c.jsxs("div", {
      className: "flex lg:flex-row flex-col gap-7",
      children: [
        n &&
          c.jsxs("div", {
            className: "lg:basis-[70%] ",
            children: [
              c.jsx("video", {
                autoPlay: !0,
                controls: !0,
                controlsList: "nodownload",
                className:
                  "size-full rounded-lg max-h-[450px] object-contain bg-cardBg",
                src: n.video.videoUrl,
                alt: "",
              }),
              c.jsx("h2", {
                className: "my-3 font-semibold",
                children: n.video.title,
              }),
              c.jsxs("div", {
                className:
                  "videoInfo flex flex-col sm:flex-row justify-between gap-3",
                children: [
                  c.jsxs("div", {
                    className: "flex justify-between  items-center gap-3",
                    children: [
                      c.jsxs("div", {
                        className: "flex gap-2 items-center sm:justify-normal",
                        children: [
                          c.jsx("div", {
                            className:
                              "text-white font-semibold bg-blue-500 size-[30px] flex items-center justify-center rounded-full",
                            children: c.jsx("p", {
                              children: n.video.userName
                                .charAt(0)
                                .toUpperCase(),
                            }),
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("h1", {
                                className: "text-[15px] font-semibold",
                                children: n.video.userName,
                              }),
                              c.jsxs("p", {
                                className:
                                  " text-[12px] text-[#ffffff80] whitespace-nowrap",
                                children: [
                                  n.video.totalSubscribers,
                                  " Subscribers",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("button", {
                        onClick: s,
                        className:
                          "bg-cardBg text-sm font-semibold px-3 py-2 rounded-3xl",
                        children: "Subscribed",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex gap-1 bg-cardBg px-3 py-1  items-center rounded-[50px] cursor-pointer",
                        onClick: a,
                        children: [
                          c.jsx(Z0, {}),
                          c.jsx("p", { children: "14k" }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "flex gap-1 bg-cardBg px-3  items-center rounded-[50px]",
                        children: [
                          c.jsx(pv, {}),
                          c.jsx("p", { children: "Share" }),
                        ],
                      }),
                      c.jsxs("div", {
                        onClick: () => u(n.video.videoUrl),
                        className:
                          "flex gap-1 bg-cardBg px-3  items-center  sm:flex rounded-[50px] cursor-pointer",
                        children: [
                          c.jsx(G0, {}),
                          c.jsx("p", { children: "Download" }),
                        ],
                      }),
                      c.jsx("div", {
                        className:
                          "flex gap-2 bg-cardBg px-3  items-center rounded-[50px]",
                        children: c.jsx(e1, {}),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx(hv, { desc: n.video.description }),
              c.jsx(mv, { likeSendData: f }),
            ],
          }),
        l &&
          c.jsx("div", {
            className:
              "lg:basis:[25%] lg:max-w-[70vh] overflow-y-auto hideScrollbar ",
            children: l.video.map((d) =>
              c.jsx("div", {
                children: c.jsx(ee, {
                  to: `https://youtube-full-mern-1.onrender.com/watch/${d._id}`,
                  children: c.jsxs("div", {
                    className: "flex gap-3 mb-3",
                    children: [
                      c.jsx("img", {
                        className: "w-[50%] max-w-[280px] rounded-lg",
                        src: d.thumbnailUrl,
                        alt: "",
                      }),
                      c.jsxs("div", {
                        className: "",
                        children: [
                          c.jsx("h1", {
                            className: "line-clamp-2 font-semibold",
                            children: d.title,
                          }),
                          c.jsx("p", {
                            className: "text-[13px] text-[#ffffff80] mt-2",
                            children: d.ownerName,
                          }),
                          c.jsxs("div", {
                            className:
                              "text-[13px] flex gap-2 text-[#ffffff80]",
                            children: [
                              c.jsxs("p", {
                                children: [d.watchCount, " views ."],
                              }),
                              c.jsx("p", { children: o(d.createdAt) }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            ),
          }),
      ],
    }),
  });
}
function gv() {
  return c.jsxs("div", {
    className:
      "w-full fixed bottom-0 px-4 py-2  flex justify-between  border-t bg-[#10131A] border-zinc-700 sm:hidden",
    children: [
      c.jsx(ee, {
        to: "/",
        children: c.jsxs("p", {
          className: "text-white flex flex-col items-center text-bold text-sm",
          children: [c.jsx(vd, { size: "23" }), "Home"],
        }),
      }),
      c.jsx(ee, {
        to: "/shorts",
        children: c.jsxs("p", {
          className: "text-white flex flex-col items-center text-bold text-sm",
          children: [c.jsx(Ld, { size: "23" }), "Shorts"],
        }),
      }),
      c.jsx(ee, {
        to: "/subscription",
        children: c.jsxs("p", {
          className: "text-white flex flex-col items-center text-bold text-sm",
          children: [c.jsx(hd, { size: "23" }), "Subscriptions"],
        }),
      }),
      c.jsx(ee, {
        to: "/you",
        children: c.jsxs("p", {
          className: "text-white flex flex-col items-center text-bold text-sm",
          children: [c.jsx($l, { size: "23" }), "Library"],
        }),
      }),
    ],
  });
}
function yv() {
  const e = bt((t) => t.isSignInPage);
  return c.jsxs(l0, {
    children: [
      c.jsx(uv, {}),
      c.jsxs("div", {
        className: "flex mt-4 h-[100vh]",
        children: [
          c.jsx("div", {
            className: `sm:inline hidden ${e && "sm:hidden "}`,
            children: c.jsx(av, {}),
          }),
          c.jsxs(Jm, {
            children: [
              c.jsx(Qe, { path: "/", element: c.jsx(ya, {}) }),
              c.jsx(Qe, { path: "/search", element: c.jsx(ya, {}) }),
              c.jsx(Qe, { path: "/shorts", element: c.jsx(g0, {}) }),
              c.jsx(Qe, { path: "/subscription", element: c.jsx(W0, {}) }),
              c.jsx(Qe, { path: "/you", element: c.jsx(Y0, {}) }),
              c.jsx(Qe, { path: "/upload", element: c.jsx(cv, {}) }),
              c.jsx(Qe, { path: "/login", element: c.jsx(fv, {}) }),
              c.jsx(Qe, { path: "/register", element: c.jsx(dv, {}) }),
              c.jsx(Qe, { path: "/watch/:id", element: c.jsx(vv, {}) }),
            ],
          }),
        ],
      }),
      c.jsx(gv, {}),
    ],
  });
}
const xv = U1({ reducer: ov });
Ki.createRoot(document.getElementById("root")).render(
  c.jsx(F0, { store: xv, children: c.jsx(yv, {}) })
);
