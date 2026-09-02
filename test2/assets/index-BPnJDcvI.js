import "./local-api.js";
import "./local-bilingual.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const p of h.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && c(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = s(f);
    fetch(f.href, h);
  }
})();
var ss = { exports: {} },
  kl = {};
var sm;
function d0() {
  if (sm) return kl;
  sm = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function s(c, f, h) {
    var p = null;
    if (
      (h !== void 0 && (p = "" + h),
      f.key !== void 0 && (p = "" + f.key),
      "key" in f)
    ) {
      h = {};
      for (var S in f) S !== "key" && (h[S] = f[S]);
    } else h = f;
    return (
      (f = h.ref),
      { $$typeof: l, type: c, key: p, ref: f !== void 0 ? f : null, props: h }
    );
  }
  return ((kl.Fragment = r), (kl.jsx = s), (kl.jsxs = s), kl);
}
var om;
function h0() {
  return (om || ((om = 1), (ss.exports = d0())), ss.exports);
}
var d = h0(),
  os = { exports: {} },
  I = {};
var fm;
function m0() {
  if (fm) return I;
  fm = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    H = Symbol.iterator;
  function V(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (H && E[H]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    B = {};
  function Q(E, w, q) {
    ((this.props = E),
      (this.context = w),
      (this.refs = B),
      (this.updater = q || Y));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (E, w) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, w, "setState");
    }),
    (Q.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function F() {}
  F.prototype = Q.prototype;
  function $(E, w, q) {
    ((this.props = E),
      (this.context = w),
      (this.refs = B),
      (this.updater = q || Y));
  }
  var fe = ($.prototype = new F());
  ((fe.constructor = $), U(fe, Q.prototype), (fe.isPureReactComponent = !0));
  var me = Array.isArray;
  function ge() {}
  var k = { H: null, A: null, T: null, S: null },
    Re = Object.prototype.hasOwnProperty;
  function ze(E, w, q) {
    var X = q.ref;
    return {
      $$typeof: l,
      type: E,
      key: w,
      ref: X !== void 0 ? X : null,
      props: q,
    };
  }
  function ue(E, w) {
    return ze(E.type, w, E.props);
  }
  function se(E) {
    return typeof E == "object" && E !== null && E.$$typeof === l;
  }
  function ve(E) {
    var w = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (q) {
        return w[q];
      })
    );
  }
  var _t = /\/+/g;
  function Tt(E, w) {
    return typeof E == "object" && E !== null && E.key != null
      ? ve("" + E.key)
      : w.toString(36);
  }
  function qe(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(ge, ge)
            : ((E.status = "pending"),
              E.then(
                function (w) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = w));
                },
                function (w) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = w));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function O(E, w, q, X, P) {
    var ae = typeof E;
    (ae === "undefined" || ae === "boolean") && (E = null);
    var ye = !1;
    if (E === null) ye = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case l:
            case r:
              ye = !0;
              break;
            case D:
              return ((ye = E._init), O(ye(E._payload), w, q, X, P));
          }
      }
    if (ye)
      return (
        (P = P(E)),
        (ye = X === "" ? "." + Tt(E, 0) : X),
        me(P)
          ? ((q = ""),
            ye != null && (q = ye.replace(_t, "$&/") + "/"),
            O(P, w, q, "", function (el) {
              return el;
            }))
          : P != null &&
            (se(P) &&
              (P = ue(
                P,
                q +
                  (P.key == null || (E && E.key === P.key)
                    ? ""
                    : ("" + P.key).replace(_t, "$&/") + "/") +
                  ye,
              )),
            w.push(P)),
        1
      );
    ye = 0;
    var at = X === "" ? "." : X + ":";
    if (me(E))
      for (var Be = 0; Be < E.length; Be++)
        ((X = E[Be]), (ae = at + Tt(X, Be)), (ye += O(X, w, q, ae, P)));
    else if (((Be = V(E)), typeof Be == "function"))
      for (E = Be.call(E), Be = 0; !(X = E.next()).done; )
        ((X = X.value), (ae = at + Tt(X, Be++)), (ye += O(X, w, q, ae, P)));
    else if (ae === "object") {
      if (typeof E.then == "function") return O(qe(E), w, q, X, P);
      throw (
        (w = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (w === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : w) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ye;
  }
  function L(E, w, q) {
    if (E == null) return E;
    var X = [],
      P = 0;
    return (
      O(E, X, "", "", function (ae) {
        return w.call(q, ae, P++);
      }),
      X
    );
  }
  function W(E) {
    if (E._status === -1) {
      var w = E._result;
      ((w = w()),
        w.then(
          function (q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = q));
          },
          function (q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = q));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = w)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Ee =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var w = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(w)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    Te = {
      map: L,
      forEach: function (E, w, q) {
        L(
          E,
          function () {
            w.apply(this, arguments);
          },
          q,
        );
      },
      count: function (E) {
        var w = 0;
        return (
          L(E, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (E) {
        return (
          L(E, function (w) {
            return w;
          }) || []
        );
      },
      only: function (E) {
        if (!se(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (I.Activity = A),
    (I.Children = Te),
    (I.Component = Q),
    (I.Fragment = s),
    (I.Profiler = f),
    (I.PureComponent = $),
    (I.StrictMode = c),
    (I.Suspense = y),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return k.H.useMemoCache(E);
      },
    }),
    (I.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (E, w, q) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var X = U({}, E.props),
        P = E.key;
      if (w != null)
        for (ae in (w.key !== void 0 && (P = "" + w.key), w))
          !Re.call(w, ae) ||
            ae === "key" ||
            ae === "__self" ||
            ae === "__source" ||
            (ae === "ref" && w.ref === void 0) ||
            (X[ae] = w[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) X.children = q;
      else if (1 < ae) {
        for (var ye = Array(ae), at = 0; at < ae; at++)
          ye[at] = arguments[at + 2];
        X.children = ye;
      }
      return ze(E.type, P, X);
    }),
    (I.createContext = function (E) {
      return (
        (E = {
          $$typeof: p,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: h, _context: E }),
        E
      );
    }),
    (I.createElement = function (E, w, q) {
      var X,
        P = {},
        ae = null;
      if (w != null)
        for (X in (w.key !== void 0 && (ae = "" + w.key), w))
          Re.call(w, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (P[X] = w[X]);
      var ye = arguments.length - 2;
      if (ye === 1) P.children = q;
      else if (1 < ye) {
        for (var at = Array(ye), Be = 0; Be < ye; Be++)
          at[Be] = arguments[Be + 2];
        P.children = at;
      }
      if (E && E.defaultProps)
        for (X in ((ye = E.defaultProps), ye))
          P[X] === void 0 && (P[X] = ye[X]);
      return ze(E, ae, P);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (E) {
      return { $$typeof: S, render: E };
    }),
    (I.isValidElement = se),
    (I.lazy = function (E) {
      return { $$typeof: D, _payload: { _status: -1, _result: E }, _init: W };
    }),
    (I.memo = function (E, w) {
      return { $$typeof: g, type: E, compare: w === void 0 ? null : w };
    }),
    (I.startTransition = function (E) {
      var w = k.T,
        q = {};
      k.T = q;
      try {
        var X = E(),
          P = k.S;
        (P !== null && P(q, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(ge, Ee));
      } catch (ae) {
        Ee(ae);
      } finally {
        (w !== null && q.types !== null && (w.types = q.types), (k.T = w));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (I.use = function (E) {
      return k.H.use(E);
    }),
    (I.useActionState = function (E, w, q) {
      return k.H.useActionState(E, w, q);
    }),
    (I.useCallback = function (E, w) {
      return k.H.useCallback(E, w);
    }),
    (I.useContext = function (E) {
      return k.H.useContext(E);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (E, w) {
      return k.H.useDeferredValue(E, w);
    }),
    (I.useEffect = function (E, w) {
      return k.H.useEffect(E, w);
    }),
    (I.useEffectEvent = function (E) {
      return k.H.useEffectEvent(E);
    }),
    (I.useId = function () {
      return k.H.useId();
    }),
    (I.useImperativeHandle = function (E, w, q) {
      return k.H.useImperativeHandle(E, w, q);
    }),
    (I.useInsertionEffect = function (E, w) {
      return k.H.useInsertionEffect(E, w);
    }),
    (I.useLayoutEffect = function (E, w) {
      return k.H.useLayoutEffect(E, w);
    }),
    (I.useMemo = function (E, w) {
      return k.H.useMemo(E, w);
    }),
    (I.useOptimistic = function (E, w) {
      return k.H.useOptimistic(E, w);
    }),
    (I.useReducer = function (E, w, q) {
      return k.H.useReducer(E, w, q);
    }),
    (I.useRef = function (E) {
      return k.H.useRef(E);
    }),
    (I.useState = function (E) {
      return k.H.useState(E);
    }),
    (I.useSyncExternalStore = function (E, w, q) {
      return k.H.useSyncExternalStore(E, w, q);
    }),
    (I.useTransition = function () {
      return k.H.useTransition();
    }),
    (I.version = "19.2.8"),
    I
  );
}
var dm;
function Hs() {
  return (dm || ((dm = 1), (os.exports = m0())), os.exports);
}
var T = Hs(),
  fs = { exports: {} },
  $l = {},
  ds = { exports: {} },
  hs = {};
var hm;
function p0() {
  return (
    hm ||
      ((hm = 1),
      (function (l) {
        function r(O, L) {
          var W = O.length;
          O.push(L);
          e: for (; 0 < W; ) {
            var Ee = (W - 1) >>> 1,
              Te = O[Ee];
            if (0 < f(Te, L)) ((O[Ee] = L), (O[W] = Te), (W = Ee));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function c(O) {
          if (O.length === 0) return null;
          var L = O[0],
            W = O.pop();
          if (W !== L) {
            O[0] = W;
            e: for (var Ee = 0, Te = O.length, E = Te >>> 1; Ee < E; ) {
              var w = 2 * (Ee + 1) - 1,
                q = O[w],
                X = w + 1,
                P = O[X];
              if (0 > f(q, W))
                X < Te && 0 > f(P, q)
                  ? ((O[Ee] = P), (O[X] = W), (Ee = X))
                  : ((O[Ee] = q), (O[w] = W), (Ee = w));
              else if (X < Te && 0 > f(P, W))
                ((O[Ee] = P), (O[X] = W), (Ee = X));
              else break e;
            }
          }
          return L;
        }
        function f(O, L) {
          var W = O.sortIndex - L.sortIndex;
          return W !== 0 ? W : O.id - L.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          l.unstable_now = function () {
            return h.now();
          };
        } else {
          var p = Date,
            S = p.now();
          l.unstable_now = function () {
            return p.now() - S;
          };
        }
        var y = [],
          g = [],
          D = 1,
          A = null,
          H = 3,
          V = !1,
          Y = !1,
          U = !1,
          B = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        function fe(O) {
          for (var L = s(g); L !== null; ) {
            if (L.callback === null) c(g);
            else if (L.startTime <= O)
              (c(g), (L.sortIndex = L.expirationTime), r(y, L));
            else break;
            L = s(g);
          }
        }
        function me(O) {
          if (((U = !1), fe(O), !Y))
            if (s(y) !== null) ((Y = !0), ge || ((ge = !0), ve()));
            else {
              var L = s(g);
              L !== null && qe(me, L.startTime - O);
            }
        }
        var ge = !1,
          k = -1,
          Re = 5,
          ze = -1;
        function ue() {
          return B ? !0 : !(l.unstable_now() - ze < Re);
        }
        function se() {
          if (((B = !1), ge)) {
            var O = l.unstable_now();
            ze = O;
            var L = !0;
            try {
              e: {
                ((Y = !1), U && ((U = !1), F(k), (k = -1)), (V = !0));
                var W = H;
                try {
                  t: {
                    for (
                      fe(O), A = s(y);
                      A !== null && !(A.expirationTime > O && ue());
                    ) {
                      var Ee = A.callback;
                      if (typeof Ee == "function") {
                        ((A.callback = null), (H = A.priorityLevel));
                        var Te = Ee(A.expirationTime <= O);
                        if (((O = l.unstable_now()), typeof Te == "function")) {
                          ((A.callback = Te), fe(O), (L = !0));
                          break t;
                        }
                        (A === s(y) && c(y), fe(O));
                      } else c(y);
                      A = s(y);
                    }
                    if (A !== null) L = !0;
                    else {
                      var E = s(g);
                      (E !== null && qe(me, E.startTime - O), (L = !1));
                    }
                  }
                  break e;
                } finally {
                  ((A = null), (H = W), (V = !1));
                }
                L = void 0;
              }
            } finally {
              L ? ve() : (ge = !1);
            }
          }
        }
        var ve;
        if (typeof $ == "function")
          ve = function () {
            $(se);
          };
        else if (typeof MessageChannel < "u") {
          var _t = new MessageChannel(),
            Tt = _t.port2;
          ((_t.port1.onmessage = se),
            (ve = function () {
              Tt.postMessage(null);
            }));
        } else
          ve = function () {
            Q(se, 0);
          };
        function qe(O, L) {
          k = Q(function () {
            O(l.unstable_now());
          }, L);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (l.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Re = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return H;
          }),
          (l.unstable_next = function (O) {
            switch (H) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = H;
            }
            var W = H;
            H = L;
            try {
              return O();
            } finally {
              H = W;
            }
          }),
          (l.unstable_requestPaint = function () {
            B = !0;
          }),
          (l.unstable_runWithPriority = function (O, L) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var W = H;
            H = O;
            try {
              return L();
            } finally {
              H = W;
            }
          }),
          (l.unstable_scheduleCallback = function (O, L, W) {
            var Ee = l.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? Ee + W : Ee))
                : (W = Ee),
              O)
            ) {
              case 1:
                var Te = -1;
                break;
              case 2:
                Te = 250;
                break;
              case 5:
                Te = 1073741823;
                break;
              case 4:
                Te = 1e4;
                break;
              default:
                Te = 5e3;
            }
            return (
              (Te = W + Te),
              (O = {
                id: D++,
                callback: L,
                priorityLevel: O,
                startTime: W,
                expirationTime: Te,
                sortIndex: -1,
              }),
              W > Ee
                ? ((O.sortIndex = W),
                  r(g, O),
                  s(y) === null &&
                    O === s(g) &&
                    (U ? (F(k), (k = -1)) : (U = !0), qe(me, W - Ee)))
                : ((O.sortIndex = Te),
                  r(y, O),
                  Y || V || ((Y = !0), ge || ((ge = !0), ve()))),
              O
            );
          }),
          (l.unstable_shouldYield = ue),
          (l.unstable_wrapCallback = function (O) {
            var L = H;
            return function () {
              var W = H;
              H = L;
              try {
                return O.apply(this, arguments);
              } finally {
                H = W;
              }
            };
          }));
      })(hs)),
    hs
  );
}
var mm;
function g0() {
  return (mm || ((mm = 1), (ds.exports = p0())), ds.exports);
}
var ms = { exports: {} },
  Pe = {};
var pm;
function y0() {
  if (pm) return Pe;
  pm = 1;
  var l = Hs();
  function r(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        g += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var c = {
      d: {
        f: s,
        r: function () {
          throw Error(r(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function h(y, g, D) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: A == null ? null : "" + A,
      children: y,
      containerInfo: g,
      implementation: D,
    };
  }
  var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Pe.createPortal = function (y, g) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return h(y, g, null, D);
    }),
    (Pe.flushSync = function (y) {
      var g = p.T,
        D = c.p;
      try {
        if (((p.T = null), (c.p = 2), y)) return y();
      } finally {
        ((p.T = g), (c.p = D), c.d.f());
      }
    }),
    (Pe.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        c.d.C(y, g));
    }),
    (Pe.prefetchDNS = function (y) {
      typeof y == "string" && c.d.D(y);
    }),
    (Pe.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var D = g.as,
          A = S(D, g.crossOrigin),
          H = typeof g.integrity == "string" ? g.integrity : void 0,
          V = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        D === "style"
          ? c.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: A,
              integrity: H,
              fetchPriority: V,
            })
          : D === "script" &&
            c.d.X(y, {
              crossOrigin: A,
              integrity: H,
              fetchPriority: V,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Pe.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var D = S(g.as, g.crossOrigin);
            c.d.M(y, {
              crossOrigin: D,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && c.d.M(y);
    }),
    (Pe.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var D = g.as,
          A = S(D, g.crossOrigin);
        c.d.L(y, D, {
          crossOrigin: A,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Pe.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var D = S(g.as, g.crossOrigin);
          c.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: D,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else c.d.m(y);
    }),
    (Pe.requestFormReset = function (y) {
      c.d.r(y);
    }),
    (Pe.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (Pe.useFormState = function (y, g, D) {
      return p.H.useFormState(y, g, D);
    }),
    (Pe.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (Pe.version = "19.2.8"),
    Pe
  );
}
var gm;
function v0() {
  if (gm) return ms.exports;
  gm = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (ms.exports = y0()), ms.exports);
}
var ym;
function b0() {
  if (ym) return $l;
  ym = 1;
  var l = g0(),
    r = Hs(),
    s = v0();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function p(e) {
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
  function S(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (h(e) !== e) throw Error(c(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((n = i.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === a) return (y(i), e);
          if (u === n) return (y(i), t);
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== n.return) ((a = i), (n = u));
      else {
        for (var o = !1, m = i.child; m; ) {
          if (m === a) {
            ((o = !0), (a = i), (n = u));
            break;
          }
          if (m === n) {
            ((o = !0), (n = i), (a = u));
            break;
          }
          m = m.sibling;
        }
        if (!o) {
          for (m = u.child; m; ) {
            if (m === a) {
              ((o = !0), (a = u), (n = i));
              break;
            }
            if (m === n) {
              ((o = !0), (n = u), (a = i));
              break;
            }
            m = m.sibling;
          }
          if (!o) throw Error(c(189));
        }
      }
      if (a.alternate !== n) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = D(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign,
    H = Symbol.for("react.element"),
    V = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    F = Symbol.for("react.consumer"),
    $ = Symbol.for("react.context"),
    fe = Symbol.for("react.forward_ref"),
    me = Symbol.for("react.suspense"),
    ge = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    Re = Symbol.for("react.lazy"),
    ze = Symbol.for("react.activity"),
    ue = Symbol.for("react.memo_cache_sentinel"),
    se = Symbol.iterator;
  function ve(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (se && e[se]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _t = Symbol.for("react.client.reference");
  function Tt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === _t ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case Q:
        return "Profiler";
      case B:
        return "StrictMode";
      case me:
        return "Suspense";
      case ge:
        return "SuspenseList";
      case ze:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case fe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case k:
          return (
            (t = e.displayName || null),
            t !== null ? t : Tt(e.type) || "Memo"
          );
        case Re:
          ((t = e._payload), (e = e._init));
          try {
            return Tt(e(t));
          } catch {}
      }
    return null;
  }
  var qe = Array.isArray,
    O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    Ee = [],
    Te = -1;
  function E(e) {
    return { current: e };
  }
  function w(e) {
    0 > Te || ((e.current = Ee[Te]), (Ee[Te] = null), Te--);
  }
  function q(e, t) {
    (Te++, (Ee[Te] = e.current), (e.current = t));
  }
  var X = E(null),
    P = E(null),
    ae = E(null),
    ye = E(null);
  function at(e, t) {
    switch ((q(ae, t), q(P, e), q(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Mh(t)), (e = zh(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (w(X), q(X, e));
  }
  function Be() {
    (w(X), w(P), w(ae));
  }
  function el(e) {
    e.memoizedState !== null && q(ye, e);
    var t = X.current,
      a = zh(t, e.type);
    t !== a && (q(P, e), q(X, a));
  }
  function ci(e) {
    (P.current === e && (w(X), w(P)),
      ye.current === e && (w(ye), (Xl._currentValue = W)));
  }
  var Qu, uo;
  function Xa(e) {
    if (Qu === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Qu = (t && t[1]) || ""),
          (uo =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qu +
      e +
      uo
    );
  }
  var Ku = !1;
  function ku(e, t) {
    if (!e || Ku) return "";
    Ku = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (C) {
                  var R = C;
                }
                Reflect.construct(e, [], z);
              } else {
                try {
                  z.call();
                } catch (C) {
                  R = C;
                }
                e.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                R = C;
              }
              (z = e()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (C) {
            if (C && R && typeof C.stack == "string") return [C.stack, R.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = n.DetermineComponentFrameRoot(),
        o = u[0],
        m = u[1];
      if (o && m) {
        var v = o.split(`
`),
          j = m.split(`
`);
        for (
          i = n = 0;
          n < v.length && !v[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; i < j.length && !j[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (n === v.length || i === j.length)
          for (
            n = v.length - 1, i = j.length - 1;
            1 <= n && 0 <= i && v[n] !== j[i];
          )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (v[n] !== j[i]) {
            if (n !== 1 || i !== 1)
              do
                if ((n--, i--, 0 > i || v[n] !== j[i])) {
                  var N =
                    `
` + v[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      ((Ku = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Xa(a) : "";
  }
  function Xp(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Xa(e.type);
      case 16:
        return Xa("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Xa("Suspense Fallback")
          : Xa("Suspense");
      case 19:
        return Xa("SuspenseList");
      case 0:
      case 15:
        return ku(e.type, !1);
      case 11:
        return ku(e.type.render, !1);
      case 1:
        return ku(e.type, !0);
      case 31:
        return Xa("Activity");
      default:
        return "";
    }
  }
  function ro(e) {
    try {
      var t = "",
        a = null;
      do ((t += Xp(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var $u = Object.prototype.hasOwnProperty,
    Ju = l.unstable_scheduleCallback,
    Fu = l.unstable_cancelCallback,
    Zp = l.unstable_shouldYield,
    Qp = l.unstable_requestPaint,
    ht = l.unstable_now,
    Kp = l.unstable_getCurrentPriorityLevel,
    co = l.unstable_ImmediatePriority,
    so = l.unstable_UserBlockingPriority,
    si = l.unstable_NormalPriority,
    kp = l.unstable_LowPriority,
    oo = l.unstable_IdlePriority,
    $p = l.log,
    Jp = l.unstable_setDisableYieldValue,
    tl = null,
    mt = null;
  function ga(e) {
    if (
      (typeof $p == "function" && Jp(e),
      mt && typeof mt.setStrictMode == "function")
    )
      try {
        mt.setStrictMode(tl, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Ip,
    Fp = Math.log,
    Wp = Math.LN2;
  function Ip(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fp(e) / Wp) | 0)) | 0);
  }
  var oi = 256,
    fi = 262144,
    di = 4194304;
  function Za(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function hi(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      o = e.pingedLanes;
    e = e.warmLanes;
    var m = n & 134217727;
    return (
      m !== 0
        ? ((n = m & ~u),
          n !== 0
            ? (i = Za(n))
            : ((o &= m),
              o !== 0
                ? (i = Za(o))
                : a || ((a = m & ~e), a !== 0 && (i = Za(a)))))
        : ((m = n & ~u),
          m !== 0
            ? (i = Za(m))
            : o !== 0
              ? (i = Za(o))
              : a || ((a = n & ~e), a !== 0 && (i = Za(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & u) === 0 &&
            ((u = i & -i),
            (a = t & -t),
            u >= a || (u === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function al(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Pp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fo() {
    var e = di;
    return ((di <<= 1), (di & 62914560) === 0 && (di = 4194304), e);
  }
  function Wu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function nl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function eg(e, t, a, n, i, u) {
    var o = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var m = e.entanglements,
      v = e.expirationTimes,
      j = e.hiddenUpdates;
    for (a = o & ~a; 0 < a; ) {
      var N = 31 - pt(a),
        z = 1 << N;
      ((m[N] = 0), (v[N] = -1));
      var R = j[N];
      if (R !== null)
        for (j[N] = null, N = 0; N < R.length; N++) {
          var C = R[N];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~z;
    }
    (n !== 0 && ho(e, n, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(o & ~t)));
  }
  function ho(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - pt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function mo(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var n = 31 - pt(a),
        i = 1 << n;
      ((i & t) | (e[n] & t) && (e[n] |= t), (a &= ~i));
    }
  }
  function po(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Iu(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Iu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Pu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function go() {
    var e = L.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : am(e.type));
  }
  function yo(e, t) {
    var a = L.p;
    try {
      return ((L.p = e), t());
    } finally {
      L.p = a;
    }
  }
  var ya = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + ya,
    lt = "__reactProps$" + ya,
    fn = "__reactContainer$" + ya,
    er = "__reactEvents$" + ya,
    tg = "__reactListeners$" + ya,
    ag = "__reactHandles$" + ya,
    vo = "__reactResources$" + ya,
    ll = "__reactMarker$" + ya;
  function tr(e) {
    (delete e[$e], delete e[lt], delete e[er], delete e[tg], delete e[ag]);
  }
  function dn(e) {
    var t = e[$e];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[fn] || a[$e])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Vh(e); e !== null; ) {
            if ((a = e[$e])) return a;
            e = Vh(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function hn(e) {
    if ((e = e[$e] || e[fn])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function il(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function mn(e) {
    var t = e[vo];
    return (
      t ||
        (t = e[vo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ke(e) {
    e[ll] = !0;
  }
  var bo = new Set(),
    So = {};
  function Qa(e, t) {
    (pn(e, t), pn(e + "Capture", t));
  }
  function pn(e, t) {
    for (So[e] = t, e = 0; e < t.length; e++) bo.add(t[e]);
  }
  var ng = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Eo = {},
    xo = {};
  function lg(e) {
    return $u.call(xo, e)
      ? !0
      : $u.call(Eo, e)
        ? !1
        : ng.test(e)
          ? (xo[e] = !0)
          : ((Eo[e] = !0), !1);
  }
  function mi(e, t, a) {
    if (lg(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function pi(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Jt(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
    }
  }
  function jt(e) {
    switch (typeof e) {
      case "bigint":
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
  function Ao(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ig(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (o) {
            ((a = "" + o), u.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (o) {
            a = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ar(e) {
    if (!e._valueTracker) {
      var t = Ao(e) ? "checked" : "value";
      e._valueTracker = ig(e, t, "" + e[t]);
    }
  }
  function _o(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      n = "";
    return (
      e && (n = Ao(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function gi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ug = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(ug, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function nr(e, t, a, n, i, u, o, m) {
    ((e.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.type = o)
        : e.removeAttribute("type"),
      t != null
        ? o === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + jt(t))
          : e.value !== "" + jt(t) && (e.value = "" + jt(t))
        : (o !== "submit" && o !== "reset") || e.removeAttribute("value"),
      t != null
        ? lr(e, o, jt(t))
        : a != null
          ? lr(e, o, jt(a))
          : n != null && e.removeAttribute("value"),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.name = "" + jt(m))
        : e.removeAttribute("name"));
  }
  function To(e, t, a, n, i, u, o, m) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        ar(e);
        return;
      }
      ((a = a != null ? "" + jt(a) : ""),
        (t = t != null ? "" + jt(t) : a),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? i),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = m ? e.checked : !!n),
      (e.defaultChecked = !!n),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.name = o),
      ar(e));
  }
  function lr(e, t, a) {
    (t === "number" && gi(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function gn(e, t, a, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && n && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + jt(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jo(e, t, a) {
    if (
      t != null &&
      ((t = "" + jt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + jt(a) : "";
  }
  function Ro(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(c(92));
        if (qe(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = jt(t)),
      (e.defaultValue = a),
      (n = e.textContent),
      n === a && n !== "" && n !== null && (e.value = n),
      ar(e));
  }
  function yn(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var rg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Co(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || rg.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Do(e, t, a) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""));
      for (var i in t)
        ((n = t[i]), t.hasOwnProperty(i) && a[i] !== n && Co(e, i, n));
    } else for (var u in t) t.hasOwnProperty(u) && Co(e, u, t[u]);
  }
  function ir(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var cg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    sg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yi(e) {
    return sg.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ft() {}
  var ur = null;
  function rr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vn = null,
    bn = null;
  function No(e) {
    var t = hn(e);
    if (t && (e = t.stateNode)) {
      var a = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (nr(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Rt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var i = n[lt] || null;
                if (!i) throw Error(c(90));
                nr(
                  n,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((n = a[t]), n.form === e.form && _o(n));
          }
          break e;
        case "textarea":
          jo(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && gn(e, !!a.multiple, t, !1));
      }
    }
  }
  var cr = !1;
  function Oo(e, t, a) {
    if (cr) return e(t, a);
    cr = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((cr = !1),
        (vn !== null || bn !== null) &&
          (lu(), vn && ((t = vn), (e = bn), (bn = vn = null), No(t), e)))
      )
        for (t = 0; t < e.length; t++) No(e[t]);
    }
  }
  function ul(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[lt] || null;
    if (n === null) return null;
    a = n[t];
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
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(c(231, t, typeof a));
    return a;
  }
  var Wt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    sr = !1;
  if (Wt)
    try {
      var rl = {};
      (Object.defineProperty(rl, "passive", {
        get: function () {
          sr = !0;
        },
      }),
        window.addEventListener("test", rl, rl),
        window.removeEventListener("test", rl, rl));
    } catch {
      sr = !1;
    }
  var va = null,
    or = null,
    vi = null;
  function Mo() {
    if (vi) return vi;
    var e,
      t = or,
      a = t.length,
      n,
      i = "value" in va ? va.value : va.textContent,
      u = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var o = a - e;
    for (n = 1; n <= o && t[a - n] === i[u - n]; n++);
    return (vi = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function bi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Si() {
    return !0;
  }
  function zo() {
    return !1;
  }
  function it(e) {
    function t(a, n, i, u, o) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = u),
        (this.target = o),
        (this.currentTarget = null));
      for (var m in e)
        e.hasOwnProperty(m) && ((a = e[m]), (this[m] = a ? a(u) : u[m]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Si
          : zo),
        (this.isPropagationStopped = zo),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Si));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Si));
        },
        persist: function () {},
        isPersistent: Si,
      }),
      t
    );
  }
  var Ka = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ei = it(Ka),
    cl = A({}, Ka, { view: 0, detail: 0 }),
    og = it(cl),
    fr,
    dr,
    sl,
    xi = A({}, cl, {
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
      getModifierState: mr,
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
          : (e !== sl &&
              (sl && e.type === "mousemove"
                ? ((fr = e.screenX - sl.screenX), (dr = e.screenY - sl.screenY))
                : (dr = fr = 0),
              (sl = e)),
            fr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : dr;
      },
    }),
    wo = it(xi),
    fg = A({}, xi, { dataTransfer: 0 }),
    dg = it(fg),
    hg = A({}, cl, { relatedTarget: 0 }),
    hr = it(hg),
    mg = A({}, Ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pg = it(mg),
    gg = A({}, Ka, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    yg = it(gg),
    vg = A({}, Ka, { data: 0 }),
    Uo = it(vg),
    bg = {
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
    Sg = {
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
    Eg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Eg[e])
        ? !!t[e]
        : !1;
  }
  function mr() {
    return xg;
  }
  var Ag = A({}, cl, {
      key: function (e) {
        if (e.key) {
          var t = bg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Sg[e.keyCode] || "Unidentified"
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
      getModifierState: mr,
      charCode: function (e) {
        return e.type === "keypress" ? bi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? bi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    _g = it(Ag),
    Tg = A({}, xi, {
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
    Bo = it(Tg),
    jg = A({}, cl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mr,
    }),
    Rg = it(jg),
    Cg = A({}, Ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dg = it(Cg),
    Ng = A({}, xi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    Og = it(Ng),
    Mg = A({}, Ka, { newState: 0, oldState: 0 }),
    zg = it(Mg),
    wg = [9, 13, 27, 32],
    pr = Wt && "CompositionEvent" in window,
    ol = null;
  Wt && "documentMode" in document && (ol = document.documentMode);
  var Ug = Wt && "TextEvent" in window && !ol,
    Ho = Wt && (!pr || (ol && 8 < ol && 11 >= ol)),
    Lo = " ",
    qo = !1;
  function Vo(e, t) {
    switch (e) {
      case "keyup":
        return wg.indexOf(t.keyCode) !== -1;
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
  function Yo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Sn = !1;
  function Bg(e, t) {
    switch (e) {
      case "compositionend":
        return Yo(t);
      case "keypress":
        return t.which !== 32 ? null : ((qo = !0), Lo);
      case "textInput":
        return ((e = t.data), e === Lo && qo ? null : e);
      default:
        return null;
    }
  }
  function Hg(e, t) {
    if (Sn)
      return e === "compositionend" || (!pr && Vo(e, t))
        ? ((e = Mo()), (vi = or = va = null), (Sn = !1), e)
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
        return Ho && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Lg = {
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
  function Go(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Lg[e.type] : t === "textarea";
  }
  function Xo(e, t, a, n) {
    (vn ? (bn ? bn.push(n) : (bn = [n])) : (vn = n),
      (t = fu(t, "onChange")),
      0 < t.length &&
        ((a = new Ei("onChange", "change", null, a, n)),
        e.push({ event: a, listeners: t })));
  }
  var fl = null,
    dl = null;
  function qg(e) {
    jh(e, 0);
  }
  function Ai(e) {
    var t = il(e);
    if (_o(t)) return e;
  }
  function Zo(e, t) {
    if (e === "change") return t;
  }
  var Qo = !1;
  if (Wt) {
    var gr;
    if (Wt) {
      var yr = "oninput" in document;
      if (!yr) {
        var Ko = document.createElement("div");
        (Ko.setAttribute("oninput", "return;"),
          (yr = typeof Ko.oninput == "function"));
      }
      gr = yr;
    } else gr = !1;
    Qo = gr && (!document.documentMode || 9 < document.documentMode);
  }
  function ko() {
    fl && (fl.detachEvent("onpropertychange", $o), (dl = fl = null));
  }
  function $o(e) {
    if (e.propertyName === "value" && Ai(dl)) {
      var t = [];
      (Xo(t, dl, e, rr(e)), Oo(qg, t));
    }
  }
  function Vg(e, t, a) {
    e === "focusin"
      ? (ko(), (fl = t), (dl = a), fl.attachEvent("onpropertychange", $o))
      : e === "focusout" && ko();
  }
  function Yg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ai(dl);
  }
  function Gg(e, t) {
    if (e === "click") return Ai(t);
  }
  function Xg(e, t) {
    if (e === "input" || e === "change") return Ai(t);
  }
  function Zg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : Zg;
  function hl(e, t) {
    if (gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var i = a[n];
      if (!$u.call(t, i) || !gt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Jo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fo(e, t) {
    var a = Jo(e);
    e = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (((n = e + a.textContent.length), e <= t && n >= t))
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Jo(a);
    }
  }
  function Wo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Io(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = gi(e.document);
    }
    return t;
  }
  function vr(e) {
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
  var Qg = Wt && "documentMode" in document && 11 >= document.documentMode,
    En = null,
    br = null,
    ml = null,
    Sr = !1;
  function Po(e, t, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sr ||
      En == null ||
      En !== gi(n) ||
      ((n = En),
      "selectionStart" in n && vr(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (ml && hl(ml, n)) ||
        ((ml = n),
        (n = fu(br, "onSelect")),
        0 < n.length &&
          ((t = new Ei("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: n }),
          (t.target = En))));
  }
  function ka(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var xn = {
      animationend: ka("Animation", "AnimationEnd"),
      animationiteration: ka("Animation", "AnimationIteration"),
      animationstart: ka("Animation", "AnimationStart"),
      transitionrun: ka("Transition", "TransitionRun"),
      transitionstart: ka("Transition", "TransitionStart"),
      transitioncancel: ka("Transition", "TransitionCancel"),
      transitionend: ka("Transition", "TransitionEnd"),
    },
    Er = {},
    ef = {};
  Wt &&
    ((ef = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function $a(e) {
    if (Er[e]) return Er[e];
    if (!xn[e]) return e;
    var t = xn[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ef) return (Er[e] = t[a]);
    return e;
  }
  var tf = $a("animationend"),
    af = $a("animationiteration"),
    nf = $a("animationstart"),
    Kg = $a("transitionrun"),
    kg = $a("transitionstart"),
    $g = $a("transitioncancel"),
    lf = $a("transitionend"),
    uf = new Map(),
    xr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  xr.push("scrollEnd");
  function Ht(e, t) {
    (uf.set(e, t), Qa(t, [e]));
  }
  var _i =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ct = [],
    An = 0,
    Ar = 0;
  function Ti() {
    for (var e = An, t = (Ar = An = 0); t < e; ) {
      var a = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      Ct[t++] = null;
      var u = Ct[t];
      if (((Ct[t++] = null), n !== null && i !== null)) {
        var o = n.pending;
        (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
          (n.pending = i));
      }
      u !== 0 && rf(a, i, u);
    }
  }
  function ji(e, t, a, n) {
    ((Ct[An++] = e),
      (Ct[An++] = t),
      (Ct[An++] = a),
      (Ct[An++] = n),
      (Ar |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function _r(e, t, a, n) {
    return (ji(e, t, a, n), Ri(e));
  }
  function Ja(e, t) {
    return (ji(e, null, null, t), Ri(e));
  }
  function rf(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var i = !1, u = e.return; u !== null; )
      ((u.childLanes |= a),
        (n = u.alternate),
        n !== null && (n.childLanes |= a),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - pt(a)),
          (e = u.hiddenUpdates),
          (n = e[i]),
          n === null ? (e[i] = [t]) : n.push(t),
          (t.lane = a | 536870912)),
        u)
      : null;
  }
  function Ri(e) {
    if (50 < Bl) throw ((Bl = 0), (zc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var _n = {};
  function Jg(e, t, a, n) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function yt(e, t, a, n) {
    return new Jg(e, t, a, n);
  }
  function Tr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function It(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = yt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function cf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ci(e, t, a, n, i, u) {
    var o = 0;
    if (((n = e), typeof e == "function")) Tr(e) && (o = 1);
    else if (typeof e == "string")
      o = e0(e, a, X.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ze:
          return (
            (e = yt(31, a, t, i)),
            (e.elementType = ze),
            (e.lanes = u),
            e
          );
        case U:
          return Fa(a.children, i, u, t);
        case B:
          ((o = 8), (i |= 24));
          break;
        case Q:
          return (
            (e = yt(12, a, t, i | 2)),
            (e.elementType = Q),
            (e.lanes = u),
            e
          );
        case me:
          return (
            (e = yt(13, a, t, i)),
            (e.elementType = me),
            (e.lanes = u),
            e
          );
        case ge:
          return (
            (e = yt(19, a, t, i)),
            (e.elementType = ge),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                o = 10;
                break e;
              case F:
                o = 9;
                break e;
              case fe:
                o = 11;
                break e;
              case k:
                o = 14;
                break e;
              case Re:
                ((o = 16), (n = null));
                break e;
            }
          ((o = 29),
            (a = Error(c(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = yt(o, a, t, i)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = u),
      t
    );
  }
  function Fa(e, t, a, n) {
    return ((e = yt(7, e, n, t)), (e.lanes = a), e);
  }
  function jr(e, t, a) {
    return ((e = yt(6, e, null, t)), (e.lanes = a), e);
  }
  function sf(e) {
    var t = yt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Rr(e, t, a) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var of = new WeakMap();
  function Dt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = of.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: ro(t) }), of.set(e, t), t);
    }
    return { value: e, source: t, stack: ro(t) };
  }
  var Tn = [],
    jn = 0,
    Di = null,
    pl = 0,
    Nt = [],
    Ot = 0,
    ba = null,
    Xt = 1,
    Zt = "";
  function Pt(e, t) {
    ((Tn[jn++] = pl), (Tn[jn++] = Di), (Di = e), (pl = t));
  }
  function ff(e, t, a) {
    ((Nt[Ot++] = Xt), (Nt[Ot++] = Zt), (Nt[Ot++] = ba), (ba = e));
    var n = Xt;
    e = Zt;
    var i = 32 - pt(n) - 1;
    ((n &= ~(1 << i)), (a += 1));
    var u = 32 - pt(t) + i;
    if (30 < u) {
      var o = i - (i % 5);
      ((u = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (i -= o),
        (Xt = (1 << (32 - pt(t) + i)) | (a << i) | n),
        (Zt = u + e));
    } else ((Xt = (1 << u) | (a << i) | n), (Zt = e));
  }
  function Cr(e) {
    e.return !== null && (Pt(e, 1), ff(e, 1, 0));
  }
  function Dr(e) {
    for (; e === Di; )
      ((Di = Tn[--jn]), (Tn[jn] = null), (pl = Tn[--jn]), (Tn[jn] = null));
    for (; e === ba; )
      ((ba = Nt[--Ot]),
        (Nt[Ot] = null),
        (Zt = Nt[--Ot]),
        (Nt[Ot] = null),
        (Xt = Nt[--Ot]),
        (Nt[Ot] = null));
  }
  function df(e, t) {
    ((Nt[Ot++] = Xt),
      (Nt[Ot++] = Zt),
      (Nt[Ot++] = ba),
      (Xt = t.id),
      (Zt = t.overflow),
      (ba = e));
  }
  var Je = null,
    Ce = null,
    oe = !1,
    Sa = null,
    Mt = !1,
    Nr = Error(c(519));
  function Ea(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (gl(Dt(t, e)), Nr);
  }
  function hf(e) {
    var t = e.stateNode,
      a = e.type,
      n = e.memoizedProps;
    switch (((t[$e] = e), (t[lt] = n), a)) {
      case "dialog":
        (le("cancel", t), le("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        le("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ll.length; a++) le(Ll[a], t);
        break;
      case "source":
        le("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (le("error", t), le("load", t));
        break;
      case "details":
        le("toggle", t);
        break;
      case "input":
        (le("invalid", t),
          To(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        le("invalid", t);
        break;
      case "textarea":
        (le("invalid", t), Ro(t, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      Nh(t.textContent, a)
        ? (n.popover != null && (le("beforetoggle", t), le("toggle", t)),
          n.onScroll != null && le("scroll", t),
          n.onScrollEnd != null && le("scrollend", t),
          n.onClick != null && (t.onclick = Ft),
          (t = !0))
        : (t = !1),
      t || Ea(e, !0));
  }
  function mf(e) {
    for (Je = e.return; Je; )
      switch (Je.tag) {
        case 5:
        case 31:
        case 13:
          Mt = !1;
          return;
        case 27:
        case 3:
          Mt = !0;
          return;
        default:
          Je = Je.return;
      }
  }
  function Rn(e) {
    if (e !== Je) return !1;
    if (!oe) return (mf(e), (oe = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || $c(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ce && Ea(e),
      mf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ce = qh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ce = qh(e);
    } else
      t === 27
        ? ((t = Ce), Ua(e.type) ? ((e = Pc), (Pc = null), (Ce = e)) : (Ce = t))
        : (Ce = Je ? wt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Wa() {
    ((Ce = Je = null), (oe = !1));
  }
  function Or() {
    var e = Sa;
    return (
      e !== null &&
        (st === null ? (st = e) : st.push.apply(st, e), (Sa = null)),
      e
    );
  }
  function gl(e) {
    Sa === null ? (Sa = [e]) : Sa.push(e);
  }
  var Mr = E(null),
    Ia = null,
    ea = null;
  function xa(e, t, a) {
    (q(Mr, t._currentValue), (t._currentValue = a));
  }
  function ta(e) {
    ((e._currentValue = Mr.current), w(Mr));
  }
  function zr(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function wr(e, t, a, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var o = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var m = u;
          u = i;
          for (var v = 0; v < t.length; v++)
            if (m.context === t[v]) {
              ((u.lanes |= a),
                (m = u.alternate),
                m !== null && (m.lanes |= a),
                zr(u.return, a, e),
                n || (o = null));
              break e;
            }
          u = m.next;
        }
      } else if (i.tag === 18) {
        if (((o = i.return), o === null)) throw Error(c(341));
        ((o.lanes |= a),
          (u = o.alternate),
          u !== null && (u.lanes |= a),
          zr(o, a, e),
          (o = null));
      } else o = i.child;
      if (o !== null) o.return = i;
      else
        for (o = i; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((i = o.sibling), i !== null)) {
            ((i.return = o.return), (o = i));
            break;
          }
          o = o.return;
        }
      i = o;
    }
  }
  function Cn(e, t, a, n) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var o = i.alternate;
        if (o === null) throw Error(c(387));
        if (((o = o.memoizedProps), o !== null)) {
          var m = i.type;
          gt(i.pendingProps.value, o.value) ||
            (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (i === ye.current) {
        if (((o = i.alternate), o === null)) throw Error(c(387));
        o.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Xl) : (e = [Xl]));
      }
      i = i.return;
    }
    (e !== null && wr(t, e, a, n), (t.flags |= 262144));
  }
  function Ni(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!gt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Pa(e) {
    ((Ia = e),
      (ea = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Fe(e) {
    return pf(Ia, e);
  }
  function Oi(e, t) {
    return (Ia === null && Pa(e), pf(e, t));
  }
  function pf(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), ea === null)) {
      if (e === null) throw Error(c(308));
      ((ea = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ea = ea.next = t;
    return a;
  }
  var Fg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Wg = l.unstable_scheduleCallback,
    Ig = l.unstable_NormalPriority,
    Ve = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ur() {
    return { controller: new Fg(), data: new Map(), refCount: 0 };
  }
  function yl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Wg(Ig, function () {
          e.controller.abort();
        }));
  }
  var vl = null,
    Br = 0,
    Dn = 0,
    Nn = null;
  function Pg(e, t) {
    if (vl === null) {
      var a = (vl = []);
      ((Br = 0),
        (Dn = qc()),
        (Nn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          },
        }));
    }
    return (Br++, t.then(gf, gf), t);
  }
  function gf() {
    if (--Br === 0 && vl !== null) {
      Nn !== null && (Nn.status = "fulfilled");
      var e = vl;
      ((vl = null), (Dn = 0), (Nn = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ey(e, t) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (n.status = "rejected", n.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        },
      ),
      n
    );
  }
  var yf = O.S;
  O.S = function (e, t) {
    ((eh = ht()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Pg(e, t),
      yf !== null && yf(e, t));
  };
  var en = E(null);
  function Hr() {
    var e = en.current;
    return e !== null ? e : je.pooledCache;
  }
  function Mi(e, t) {
    t === null ? q(en, en.current) : q(en, t.pool);
  }
  function vf() {
    var e = Hr();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var On = Error(c(460)),
    Lr = Error(c(474)),
    zi = Error(c(542)),
    wi = { then: function () {} };
  function bf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Sf(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Ft, Ft), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), xf(e), e);
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = n));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), xf(e), e);
        }
        throw ((an = t), On);
    }
  }
  function tn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((an = a), On)
        : a;
    }
  }
  var an = null;
  function Ef() {
    if (an === null) throw Error(c(459));
    var e = an;
    return ((an = null), e);
  }
  function xf(e) {
    if (e === On || e === zi) throw Error(c(483));
  }
  var Mn = null,
    bl = 0;
  function Ui(e) {
    var t = bl;
    return ((bl += 1), Mn === null && (Mn = []), Sf(Mn, e, t));
  }
  function Sl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Bi(e, t) {
    throw t.$$typeof === H
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Af(e) {
    function t(x, b) {
      if (e) {
        var _ = x.deletions;
        _ === null ? ((x.deletions = [b]), (x.flags |= 16)) : _.push(b);
      }
    }
    function a(x, b) {
      if (!e) return null;
      for (; b !== null; ) (t(x, b), (b = b.sibling));
      return null;
    }
    function n(x) {
      for (var b = new Map(); x !== null; )
        (x.key !== null ? b.set(x.key, x) : b.set(x.index, x), (x = x.sibling));
      return b;
    }
    function i(x, b) {
      return ((x = It(x, b)), (x.index = 0), (x.sibling = null), x);
    }
    function u(x, b, _) {
      return (
        (x.index = _),
        e
          ? ((_ = x.alternate),
            _ !== null
              ? ((_ = _.index), _ < b ? ((x.flags |= 67108866), b) : _)
              : ((x.flags |= 67108866), b))
          : ((x.flags |= 1048576), b)
      );
    }
    function o(x) {
      return (e && x.alternate === null && (x.flags |= 67108866), x);
    }
    function m(x, b, _, M) {
      return b === null || b.tag !== 6
        ? ((b = jr(_, x.mode, M)), (b.return = x), b)
        : ((b = i(b, _)), (b.return = x), b);
    }
    function v(x, b, _, M) {
      var K = _.type;
      return K === U
        ? N(x, b, _.props.children, M, _.key)
        : b !== null &&
            (b.elementType === K ||
              (typeof K == "object" &&
                K !== null &&
                K.$$typeof === Re &&
                tn(K) === b.type))
          ? ((b = i(b, _.props)), Sl(b, _), (b.return = x), b)
          : ((b = Ci(_.type, _.key, _.props, null, x.mode, M)),
            Sl(b, _),
            (b.return = x),
            b);
    }
    function j(x, b, _, M) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== _.containerInfo ||
        b.stateNode.implementation !== _.implementation
        ? ((b = Rr(_, x.mode, M)), (b.return = x), b)
        : ((b = i(b, _.children || [])), (b.return = x), b);
    }
    function N(x, b, _, M, K) {
      return b === null || b.tag !== 7
        ? ((b = Fa(_, x.mode, M, K)), (b.return = x), b)
        : ((b = i(b, _)), (b.return = x), b);
    }
    function z(x, b, _) {
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return ((b = jr("" + b, x.mode, _)), (b.return = x), b);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case V:
            return (
              (_ = Ci(b.type, b.key, b.props, null, x.mode, _)),
              Sl(_, b),
              (_.return = x),
              _
            );
          case Y:
            return ((b = Rr(b, x.mode, _)), (b.return = x), b);
          case Re:
            return ((b = tn(b)), z(x, b, _));
        }
        if (qe(b) || ve(b))
          return ((b = Fa(b, x.mode, _, null)), (b.return = x), b);
        if (typeof b.then == "function") return z(x, Ui(b), _);
        if (b.$$typeof === $) return z(x, Oi(x, b), _);
        Bi(x, b);
      }
      return null;
    }
    function R(x, b, _, M) {
      var K = b !== null ? b.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return K !== null ? null : m(x, b, "" + _, M);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case V:
            return _.key === K ? v(x, b, _, M) : null;
          case Y:
            return _.key === K ? j(x, b, _, M) : null;
          case Re:
            return ((_ = tn(_)), R(x, b, _, M));
        }
        if (qe(_) || ve(_)) return K !== null ? null : N(x, b, _, M, null);
        if (typeof _.then == "function") return R(x, b, Ui(_), M);
        if (_.$$typeof === $) return R(x, b, Oi(x, _), M);
        Bi(x, _);
      }
      return null;
    }
    function C(x, b, _, M, K) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return ((x = x.get(_) || null), m(b, x, "" + M, K));
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return (
              (x = x.get(M.key === null ? _ : M.key) || null),
              v(b, x, M, K)
            );
          case Y:
            return (
              (x = x.get(M.key === null ? _ : M.key) || null),
              j(b, x, M, K)
            );
          case Re:
            return ((M = tn(M)), C(x, b, _, M, K));
        }
        if (qe(M) || ve(M))
          return ((x = x.get(_) || null), N(b, x, M, K, null));
        if (typeof M.then == "function") return C(x, b, _, Ui(M), K);
        if (M.$$typeof === $) return C(x, b, _, Oi(b, M), K);
        Bi(b, M);
      }
      return null;
    }
    function G(x, b, _, M) {
      for (
        var K = null, de = null, Z = b, te = (b = 0), ce = null;
        Z !== null && te < _.length;
        te++
      ) {
        Z.index > te ? ((ce = Z), (Z = null)) : (ce = Z.sibling);
        var he = R(x, Z, _[te], M);
        if (he === null) {
          Z === null && (Z = ce);
          break;
        }
        (e && Z && he.alternate === null && t(x, Z),
          (b = u(he, b, te)),
          de === null ? (K = he) : (de.sibling = he),
          (de = he),
          (Z = ce));
      }
      if (te === _.length) return (a(x, Z), oe && Pt(x, te), K);
      if (Z === null) {
        for (; te < _.length; te++)
          ((Z = z(x, _[te], M)),
            Z !== null &&
              ((b = u(Z, b, te)),
              de === null ? (K = Z) : (de.sibling = Z),
              (de = Z)));
        return (oe && Pt(x, te), K);
      }
      for (Z = n(Z); te < _.length; te++)
        ((ce = C(Z, x, te, _[te], M)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              Z.delete(ce.key === null ? te : ce.key),
            (b = u(ce, b, te)),
            de === null ? (K = ce) : (de.sibling = ce),
            (de = ce)));
      return (
        e &&
          Z.forEach(function (Va) {
            return t(x, Va);
          }),
        oe && Pt(x, te),
        K
      );
    }
    function J(x, b, _, M) {
      if (_ == null) throw Error(c(151));
      for (
        var K = null, de = null, Z = b, te = (b = 0), ce = null, he = _.next();
        Z !== null && !he.done;
        te++, he = _.next()
      ) {
        Z.index > te ? ((ce = Z), (Z = null)) : (ce = Z.sibling);
        var Va = R(x, Z, he.value, M);
        if (Va === null) {
          Z === null && (Z = ce);
          break;
        }
        (e && Z && Va.alternate === null && t(x, Z),
          (b = u(Va, b, te)),
          de === null ? (K = Va) : (de.sibling = Va),
          (de = Va),
          (Z = ce));
      }
      if (he.done) return (a(x, Z), oe && Pt(x, te), K);
      if (Z === null) {
        for (; !he.done; te++, he = _.next())
          ((he = z(x, he.value, M)),
            he !== null &&
              ((b = u(he, b, te)),
              de === null ? (K = he) : (de.sibling = he),
              (de = he)));
        return (oe && Pt(x, te), K);
      }
      for (Z = n(Z); !he.done; te++, he = _.next())
        ((he = C(Z, x, te, he.value, M)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              Z.delete(he.key === null ? te : he.key),
            (b = u(he, b, te)),
            de === null ? (K = he) : (de.sibling = he),
            (de = he)));
      return (
        e &&
          Z.forEach(function (f0) {
            return t(x, f0);
          }),
        oe && Pt(x, te),
        K
      );
    }
    function _e(x, b, _, M) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === U &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case V:
            e: {
              for (var K = _.key; b !== null; ) {
                if (b.key === K) {
                  if (((K = _.type), K === U)) {
                    if (b.tag === 7) {
                      (a(x, b.sibling),
                        (M = i(b, _.props.children)),
                        (M.return = x),
                        (x = M));
                      break e;
                    }
                  } else if (
                    b.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Re &&
                      tn(K) === b.type)
                  ) {
                    (a(x, b.sibling),
                      (M = i(b, _.props)),
                      Sl(M, _),
                      (M.return = x),
                      (x = M));
                    break e;
                  }
                  a(x, b);
                  break;
                } else t(x, b);
                b = b.sibling;
              }
              _.type === U
                ? ((M = Fa(_.props.children, x.mode, M, _.key)),
                  (M.return = x),
                  (x = M))
                : ((M = Ci(_.type, _.key, _.props, null, x.mode, M)),
                  Sl(M, _),
                  (M.return = x),
                  (x = M));
            }
            return o(x);
          case Y:
            e: {
              for (K = _.key; b !== null; ) {
                if (b.key === K)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === _.containerInfo &&
                    b.stateNode.implementation === _.implementation
                  ) {
                    (a(x, b.sibling),
                      (M = i(b, _.children || [])),
                      (M.return = x),
                      (x = M));
                    break e;
                  } else {
                    a(x, b);
                    break;
                  }
                else t(x, b);
                b = b.sibling;
              }
              ((M = Rr(_, x.mode, M)), (M.return = x), (x = M));
            }
            return o(x);
          case Re:
            return ((_ = tn(_)), _e(x, b, _, M));
        }
        if (qe(_)) return G(x, b, _, M);
        if (ve(_)) {
          if (((K = ve(_)), typeof K != "function")) throw Error(c(150));
          return ((_ = K.call(_)), J(x, b, _, M));
        }
        if (typeof _.then == "function") return _e(x, b, Ui(_), M);
        if (_.$$typeof === $) return _e(x, b, Oi(x, _), M);
        Bi(x, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          b !== null && b.tag === 6
            ? (a(x, b.sibling), (M = i(b, _)), (M.return = x), (x = M))
            : (a(x, b), (M = jr(_, x.mode, M)), (M.return = x), (x = M)),
          o(x))
        : a(x, b);
    }
    return function (x, b, _, M) {
      try {
        bl = 0;
        var K = _e(x, b, _, M);
        return ((Mn = null), K);
      } catch (Z) {
        if (Z === On || Z === zi) throw Z;
        var de = yt(29, Z, null, x.mode);
        return ((de.lanes = M), (de.return = x), de);
      }
    };
  }
  var nn = Af(!0),
    _f = Af(!1),
    Aa = !1;
  function qr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vr(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function _a(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ta(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (pe & 2) !== 0)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        (t = Ri(e)),
        rf(e, null, a),
        t
      );
    }
    return (ji(e, n, t, a), Ri(e));
  }
  function El(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), mo(e, a));
    }
  }
  function Yr(e, t) {
    var a = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var i = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var o = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (u === null ? (i = u = o) : (u = u.next = o), (a = a.next));
        } while (a !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Gr = !1;
  function xl() {
    if (Gr) {
      var e = Nn;
      if (e !== null) throw e;
    }
  }
  function Al(e, t, a, n) {
    Gr = !1;
    var i = e.updateQueue;
    Aa = !1;
    var u = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var v = m,
        j = v.next;
      ((v.next = null), o === null ? (u = j) : (o.next = j), (o = v));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (m = N.lastBaseUpdate),
        m !== o &&
          (m === null ? (N.firstBaseUpdate = j) : (m.next = j),
          (N.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var z = i.baseState;
      ((o = 0), (N = j = v = null), (m = u));
      do {
        var R = m.lane & -536870913,
          C = R !== m.lane;
        if (C ? (re & R) === R : (n & R) === R) {
          (R !== 0 && R === Dn && (Gr = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var G = e,
              J = m;
            R = t;
            var _e = a;
            switch (J.tag) {
              case 1:
                if (((G = J.payload), typeof G == "function")) {
                  z = G.call(_e, z, R);
                  break e;
                }
                z = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = J.payload),
                  (R = typeof G == "function" ? G.call(_e, z, R) : G),
                  R == null)
                )
                  break e;
                z = A({}, z, R);
                break e;
              case 2:
                Aa = !0;
            }
          }
          ((R = m.callback),
            R !== null &&
              ((e.flags |= 64),
              C && (e.flags |= 8192),
              (C = i.callbacks),
              C === null ? (i.callbacks = [R]) : C.push(R)));
        } else
          ((C = {
            lane: R,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            N === null ? ((j = N = C), (v = z)) : (N = N.next = C),
            (o |= R));
        if (((m = m.next), m === null)) {
          if (((m = i.shared.pending), m === null)) break;
          ((C = m),
            (m = C.next),
            (C.next = null),
            (i.lastBaseUpdate = C),
            (i.shared.pending = null));
        }
      } while (!0);
      (N === null && (v = z),
        (i.baseState = v),
        (i.firstBaseUpdate = j),
        (i.lastBaseUpdate = N),
        u === null && (i.shared.lanes = 0),
        (Na |= o),
        (e.lanes = o),
        (e.memoizedState = z));
    }
  }
  function Tf(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function jf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Tf(a[e], t);
  }
  var zn = E(null),
    Hi = E(0);
  function Rf(e, t) {
    ((e = oa), q(Hi, e), q(zn, t), (oa = e | t.baseLanes));
  }
  function Xr() {
    (q(Hi, oa), q(zn, zn.current));
  }
  function Zr() {
    ((oa = Hi.current), w(zn), w(Hi));
  }
  var vt = E(null),
    zt = null;
  function ja(e) {
    var t = e.alternate;
    (q(He, He.current & 1),
      q(vt, e),
      zt === null &&
        (t === null || zn.current !== null || t.memoizedState !== null) &&
        (zt = e));
  }
  function Qr(e) {
    (q(He, He.current), q(vt, e), zt === null && (zt = e));
  }
  function Cf(e) {
    e.tag === 22
      ? (q(He, He.current), q(vt, e), zt === null && (zt = e))
      : Ra();
  }
  function Ra() {
    (q(He, He.current), q(vt, vt.current));
  }
  function bt(e) {
    (w(vt), zt === e && (zt = null), w(He));
  }
  var He = E(0);
  function Li(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Wc(a) || Ic(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var aa = 0,
    ee = null,
    xe = null,
    Ye = null,
    qi = !1,
    wn = !1,
    ln = !1,
    Vi = 0,
    _l = 0,
    Un = null,
    ty = 0;
  function we() {
    throw Error(c(321));
  }
  function Kr(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!gt(e[a], t[a])) return !1;
    return !0;
  }
  function kr(e, t, a, n, i, u) {
    return (
      (aa = u),
      (ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? fd : cc),
      (ln = !1),
      (u = a(n, i)),
      (ln = !1),
      wn && (u = Nf(t, a, n, i)),
      Df(e),
      u
    );
  }
  function Df(e) {
    O.H = Rl;
    var t = xe !== null && xe.next !== null;
    if (((aa = 0), (Ye = xe = ee = null), (qi = !1), (_l = 0), (Un = null), t))
      throw Error(c(300));
    e === null ||
      Ge ||
      ((e = e.dependencies), e !== null && Ni(e) && (Ge = !0));
  }
  function Nf(e, t, a, n) {
    ee = e;
    var i = 0;
    do {
      if ((wn && (Un = null), (_l = 0), (wn = !1), 25 <= i))
        throw Error(c(301));
      if (((i += 1), (Ye = xe = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((O.H = dd), (u = t(a, n)));
    } while (wn);
    return u;
  }
  function ay() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Tl(t) : t),
      (e = e.useState()[0]),
      (xe !== null ? xe.memoizedState : null) !== e && (ee.flags |= 1024),
      t
    );
  }
  function $r() {
    var e = Vi !== 0;
    return ((Vi = 0), e);
  }
  function Jr(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Fr(e) {
    if (qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      qi = !1;
    }
    ((aa = 0), (Ye = xe = ee = null), (wn = !1), (_l = Vi = 0), (Un = null));
  }
  function nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (ee.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function Le() {
    if (xe === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ye === null ? ee.memoizedState : Ye.next;
    if (t !== null) ((Ye = t), (xe = e));
    else {
      if (e === null)
        throw ee.alternate === null ? Error(c(467)) : Error(c(310));
      ((xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        Ye === null ? (ee.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function Yi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Tl(e) {
    var t = _l;
    return (
      (_l += 1),
      Un === null && (Un = []),
      (e = Sf(Un, e, t)),
      (t = ee),
      (Ye === null ? t.memoizedState : Ye.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? fd : cc)),
      e
    );
  }
  function Gi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Tl(e);
      if (e.$$typeof === $) return Fe(e);
    }
    throw Error(c(438, String(e)));
  }
  function Wr(e) {
    var t = null,
      a = ee.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var n = ee.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Yi()), (ee.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = ue;
    return (t.index++, a);
  }
  function na(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xi(e) {
    var t = Le();
    return Ir(t, xe, e);
  }
  function Ir(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = a;
    var i = e.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (i !== null) {
        var o = i.next;
        ((i.next = u.next), (u.next = o));
      }
      ((t.baseQueue = i = u), (n.pending = null));
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var m = (o = null),
        v = null,
        j = t,
        N = !1;
      do {
        var z = j.lane & -536870913;
        if (z !== j.lane ? (re & z) === z : (aa & z) === z) {
          var R = j.revertLane;
          if (R === 0)
            (v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              z === Dn && (N = !0));
          else if ((aa & R) === R) {
            ((j = j.next), R === Dn && (N = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              v === null ? ((m = v = z), (o = u)) : (v = v.next = z),
              (ee.lanes |= R),
              (Na |= R));
          ((z = j.action),
            ln && a(u, z),
            (u = j.hasEagerState ? j.eagerState : a(u, z)));
        } else
          ((R = {
            lane: z,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            v === null ? ((m = v = R), (o = u)) : (v = v.next = R),
            (ee.lanes |= z),
            (Na |= z));
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (v === null ? (o = u) : (v.next = m),
        !gt(u, e.memoizedState) && ((Ge = !0), N && ((a = Nn), a !== null)))
      )
        throw a;
      ((e.memoizedState = u),
        (e.baseState = o),
        (e.baseQueue = v),
        (n.lastRenderedState = u));
    }
    return (i === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function Pr(e) {
    var t = Le(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch,
      i = a.pending,
      u = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var o = (i = i.next);
      do ((u = e(u, o.action)), (o = o.next));
      while (o !== i);
      (gt(u, t.memoizedState) || (Ge = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, n];
  }
  function Of(e, t, a) {
    var n = ee,
      i = Le(),
      u = oe;
    if (u) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = t();
    var o = !gt((xe || i).memoizedState, a);
    if (
      (o && ((i.memoizedState = a), (Ge = !0)),
      (i = i.queue),
      ac(wf.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || o || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Bn(9, { destroy: void 0 }, zf.bind(null, n, i, a, t), null),
        je === null)
      )
        throw Error(c(349));
      u || (aa & 127) !== 0 || Mf(n, t, a);
    }
    return a;
  }
  function Mf(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = ee.updateQueue),
      t === null
        ? ((t = Yi()), (ee.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function zf(e, t, a, n) {
    ((t.value = a), (t.getSnapshot = n), Uf(t) && Bf(e));
  }
  function wf(e, t, a) {
    return a(function () {
      Uf(t) && Bf(e);
    });
  }
  function Uf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !gt(e, a);
    } catch {
      return !0;
    }
  }
  function Bf(e) {
    var t = Ja(e, 2);
    t !== null && ot(t, e, 2);
  }
  function ec(e) {
    var t = nt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), ln)) {
        ga(!0);
        try {
          a();
        } finally {
          ga(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: na,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Hf(e, t, a, n) {
    return ((e.baseState = a), Ir(e, xe, typeof n == "function" ? n : na));
  }
  function ny(e, t, a, n, i) {
    if (Ki(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          u.listeners.push(o);
        },
      };
      (O.T !== null ? a(!0) : (u.isTransition = !1),
        n(u),
        (a = t.pending),
        a === null
          ? ((u.next = t.pending = u), Lf(t, u))
          : ((u.next = a.next), (t.pending = a.next = u)));
    }
  }
  function Lf(e, t) {
    var a = t.action,
      n = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = O.T,
        o = {};
      O.T = o;
      try {
        var m = a(i, n),
          v = O.S;
        (v !== null && v(o, m), qf(e, t, m));
      } catch (j) {
        tc(e, t, j);
      } finally {
        (u !== null && o.types !== null && (u.types = o.types), (O.T = u));
      }
    } else
      try {
        ((u = a(i, n)), qf(e, t, u));
      } catch (j) {
        tc(e, t, j);
      }
  }
  function qf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            Vf(e, t, n);
          },
          function (n) {
            return tc(e, t, n);
          },
        )
      : Vf(e, t, a);
  }
  function Vf(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Yf(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Lf(e, a))));
  }
  function tc(e, t, a) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = a), Yf(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function Yf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Gf(e, t) {
    return t;
  }
  function Xf(e, t) {
    if (oe) {
      var a = je.formState;
      if (a !== null) {
        e: {
          var n = ee;
          if (oe) {
            if (Ce) {
              t: {
                for (var i = Ce, u = Mt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = wt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((u = i.data), (i = u === "F!" || u === "F" ? i : null));
              }
              if (i) {
                ((Ce = wt(i.nextSibling)), (n = i.data === "F!"));
                break e;
              }
            }
            Ea(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return (
      (a = nt()),
      (a.memoizedState = a.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gf,
        lastRenderedState: t,
      }),
      (a.queue = n),
      (a = cd.bind(null, ee, n)),
      (n.dispatch = a),
      (n = ec(!1)),
      (u = rc.bind(null, ee, !1, n.queue)),
      (n = nt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = i),
      (a = ny.bind(null, ee, i, u, a)),
      (i.dispatch = a),
      (n.memoizedState = e),
      [t, a, !1]
    );
  }
  function Zf(e) {
    var t = Le();
    return Qf(t, xe, e);
  }
  function Qf(e, t, a) {
    if (
      ((t = Ir(e, t, Gf)[0]),
      (e = Xi(na)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = Tl(t);
      } catch (o) {
        throw o === On ? zi : o;
      }
    else n = t;
    t = Le();
    var i = t.queue,
      u = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((ee.flags |= 2048),
        Bn(9, { destroy: void 0 }, ly.bind(null, i, a), null)),
      [n, u, e]
    );
  }
  function ly(e, t) {
    e.action = t;
  }
  function Kf(e) {
    var t = Le(),
      a = xe;
    if (a !== null) return Qf(t, a, e);
    (Le(), (t = t.memoizedState), (a = Le()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = e), [t, n, !1]);
  }
  function Bn(e, t, a, n) {
    return (
      (e = { tag: e, create: a, deps: n, inst: t, next: null }),
      (t = ee.updateQueue),
      t === null && ((t = Yi()), (ee.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function kf() {
    return Le().memoizedState;
  }
  function Zi(e, t, a, n) {
    var i = nt();
    ((ee.flags |= e),
      (i.memoizedState = Bn(
        1 | t,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n,
      )));
  }
  function Qi(e, t, a, n) {
    var i = Le();
    n = n === void 0 ? null : n;
    var u = i.memoizedState.inst;
    xe !== null && n !== null && Kr(n, xe.memoizedState.deps)
      ? (i.memoizedState = Bn(t, u, a, n))
      : ((ee.flags |= e), (i.memoizedState = Bn(1 | t, u, a, n)));
  }
  function $f(e, t) {
    Zi(8390656, 8, e, t);
  }
  function ac(e, t) {
    Qi(2048, 8, e, t);
  }
  function iy(e) {
    ee.flags |= 4;
    var t = ee.updateQueue;
    if (t === null) ((t = Yi()), (ee.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Jf(e) {
    var t = Le().memoizedState;
    return (
      iy({ ref: t, nextImpl: e }),
      function () {
        if ((pe & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ff(e, t) {
    return Qi(4, 2, e, t);
  }
  function Wf(e, t) {
    return Qi(4, 4, e, t);
  }
  function If(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Pf(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Qi(4, 4, If.bind(null, t, e), a));
  }
  function nc() {}
  function ed(e, t) {
    var a = Le();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && Kr(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
  }
  function td(e, t) {
    var a = Le();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && Kr(t, n[1])) return n[0];
    if (((n = e()), ln)) {
      ga(!0);
      try {
        e();
      } finally {
        ga(!1);
      }
    }
    return ((a.memoizedState = [n, t]), n);
  }
  function lc(e, t, a) {
    return a === void 0 || ((aa & 1073741824) !== 0 && (re & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = ah()), (ee.lanes |= e), (Na |= e), a);
  }
  function ad(e, t, a, n) {
    return gt(a, t)
      ? a
      : zn.current !== null
        ? ((e = lc(e, a, n)), gt(e, t) || (Ge = !0), e)
        : (aa & 42) === 0 || ((aa & 1073741824) !== 0 && (re & 261930) === 0)
          ? ((Ge = !0), (e.memoizedState = a))
          : ((e = ah()), (ee.lanes |= e), (Na |= e), t);
  }
  function nd(e, t, a, n, i) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var o = O.T,
      m = {};
    ((O.T = m), rc(e, !1, t, a));
    try {
      var v = i(),
        j = O.S;
      if (
        (j !== null && j(m, v),
        v !== null && typeof v == "object" && typeof v.then == "function")
      ) {
        var N = ey(v, n);
        jl(e, t, N, xt(e));
      } else jl(e, t, n, xt(e));
    } catch (z) {
      jl(e, t, { then: function () {}, status: "rejected", reason: z }, xt());
    } finally {
      ((L.p = u),
        o !== null && m.types !== null && (o.types = m.types),
        (O.T = o));
    }
  }
  function uy() {}
  function ic(e, t, a, n) {
    if (e.tag !== 5) throw Error(c(476));
    var i = ld(e).queue;
    nd(
      e,
      i,
      t,
      W,
      a === null
        ? uy
        : function () {
            return (id(e), a(n));
          },
    );
  }
  function ld(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: na,
        lastRenderedState: W,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: na,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function id(e) {
    var t = ld(e);
    (t.next === null && (t = e.alternate.memoizedState),
      jl(e, t.next.queue, {}, xt()));
  }
  function uc() {
    return Fe(Xl);
  }
  function ud() {
    return Le().memoizedState;
  }
  function rd() {
    return Le().memoizedState;
  }
  function ry(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = xt();
          e = _a(a);
          var n = Ta(t, e, a);
          (n !== null && (ot(n, t, a), El(n, t, a)),
            (t = { cache: Ur() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function cy(e, t, a) {
    var n = xt();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ki(e)
        ? sd(t, a)
        : ((a = _r(e, t, a, n)), a !== null && (ot(a, e, n), od(a, t, n))));
  }
  function cd(e, t, a) {
    var n = xt();
    jl(e, t, a, n);
  }
  function jl(e, t, a, n) {
    var i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ki(e)) sd(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var o = t.lastRenderedState,
            m = u(o, a);
          if (((i.hasEagerState = !0), (i.eagerState = m), gt(m, o)))
            return (ji(e, t, i, 0), je === null && Ti(), !1);
        } catch {}
      if (((a = _r(e, t, i, n)), a !== null))
        return (ot(a, e, n), od(a, t, n), !0);
    }
    return !1;
  }
  function rc(e, t, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: qc(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ki(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = _r(e, a, n, 2)), t !== null && ot(t, e, 2));
  }
  function Ki(e) {
    var t = e.alternate;
    return e === ee || (t !== null && t === ee);
  }
  function sd(e, t) {
    wn = qi = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function od(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), mo(e, a));
    }
  }
  var Rl = {
    readContext: Fe,
    use: Gi,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useLayoutEffect: we,
    useInsertionEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useSyncExternalStore: we,
    useId: we,
    useHostTransitionStatus: we,
    useFormState: we,
    useActionState: we,
    useOptimistic: we,
    useMemoCache: we,
    useCacheRefresh: we,
  };
  Rl.useEffectEvent = we;
  var fd = {
      readContext: Fe,
      use: Gi,
      useCallback: function (e, t) {
        return ((nt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Fe,
      useEffect: $f,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Zi(4194308, 4, If.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Zi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Zi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = nt();
        t = t === void 0 ? null : t;
        var n = e();
        if (ln) {
          ga(!0);
          try {
            e();
          } finally {
            ga(!1);
          }
        }
        return ((a.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, a) {
        var n = nt();
        if (a !== void 0) {
          var i = a(t);
          if (ln) {
            ga(!0);
            try {
              a(t);
            } finally {
              ga(!1);
            }
          }
        } else i = t;
        return (
          (n.memoizedState = n.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (n.queue = e),
          (e = e.dispatch = cy.bind(null, ee, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = nt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ec(e);
        var t = e.queue,
          a = cd.bind(null, ee, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: nc,
      useDeferredValue: function (e, t) {
        var a = nt();
        return lc(a, e, t);
      },
      useTransition: function () {
        var e = ec(!1);
        return (
          (e = nd.bind(null, ee, e.queue, !0, !1)),
          (nt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var n = ee,
          i = nt();
        if (oe) {
          if (a === void 0) throw Error(c(407));
          a = a();
        } else {
          if (((a = t()), je === null)) throw Error(c(349));
          (re & 127) !== 0 || Mf(n, t, a);
        }
        i.memoizedState = a;
        var u = { value: a, getSnapshot: t };
        return (
          (i.queue = u),
          $f(wf.bind(null, n, u, e), [e]),
          (n.flags |= 2048),
          Bn(9, { destroy: void 0 }, zf.bind(null, n, u, a, t), null),
          a
        );
      },
      useId: function () {
        var e = nt(),
          t = je.identifierPrefix;
        if (oe) {
          var a = Zt,
            n = Xt;
          ((a = (n & ~(1 << (32 - pt(n) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Vi++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = ty++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: uc,
      useFormState: Xf,
      useActionState: Xf,
      useOptimistic: function (e) {
        var t = nt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = rc.bind(null, ee, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Wr,
      useCacheRefresh: function () {
        return (nt().memoizedState = ry.bind(null, ee));
      },
      useEffectEvent: function (e) {
        var t = nt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((pe & 2) !== 0) throw Error(c(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    cc = {
      readContext: Fe,
      use: Gi,
      useCallback: ed,
      useContext: Fe,
      useEffect: ac,
      useImperativeHandle: Pf,
      useInsertionEffect: Ff,
      useLayoutEffect: Wf,
      useMemo: td,
      useReducer: Xi,
      useRef: kf,
      useState: function () {
        return Xi(na);
      },
      useDebugValue: nc,
      useDeferredValue: function (e, t) {
        var a = Le();
        return ad(a, xe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Xi(na)[0],
          t = Le().memoizedState;
        return [typeof e == "boolean" ? e : Tl(e), t];
      },
      useSyncExternalStore: Of,
      useId: ud,
      useHostTransitionStatus: uc,
      useFormState: Zf,
      useActionState: Zf,
      useOptimistic: function (e, t) {
        var a = Le();
        return Hf(a, xe, e, t);
      },
      useMemoCache: Wr,
      useCacheRefresh: rd,
    };
  cc.useEffectEvent = Jf;
  var dd = {
    readContext: Fe,
    use: Gi,
    useCallback: ed,
    useContext: Fe,
    useEffect: ac,
    useImperativeHandle: Pf,
    useInsertionEffect: Ff,
    useLayoutEffect: Wf,
    useMemo: td,
    useReducer: Pr,
    useRef: kf,
    useState: function () {
      return Pr(na);
    },
    useDebugValue: nc,
    useDeferredValue: function (e, t) {
      var a = Le();
      return xe === null ? lc(a, e, t) : ad(a, xe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Pr(na)[0],
        t = Le().memoizedState;
      return [typeof e == "boolean" ? e : Tl(e), t];
    },
    useSyncExternalStore: Of,
    useId: ud,
    useHostTransitionStatus: uc,
    useFormState: Kf,
    useActionState: Kf,
    useOptimistic: function (e, t) {
      var a = Le();
      return xe !== null
        ? Hf(a, xe, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Wr,
    useCacheRefresh: rd,
  };
  dd.useEffectEvent = Jf;
  function sc(e, t, a, n) {
    ((t = e.memoizedState),
      (a = a(n, t)),
      (a = a == null ? t : A({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var oc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var n = xt(),
        i = _a(n);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = Ta(e, i, n)),
        t !== null && (ot(t, e, n), El(t, e, n)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var n = xt(),
        i = _a(n);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = Ta(e, i, n)),
        t !== null && (ot(t, e, n), El(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = xt(),
        n = _a(a);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Ta(e, n, a)),
        t !== null && (ot(t, e, a), El(t, e, a)));
    },
  };
  function hd(e, t, a, n, i, u, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, u, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !hl(a, n) || !hl(i, u)
          : !0
    );
  }
  function md(e, t, a, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, n),
      t.state !== e && oc.enqueueReplaceState(t, t.state, null));
  }
  function un(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t) n !== "ref" && (a[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = A({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function pd(e) {
    _i(e);
  }
  function gd(e) {
    console.error(e);
  }
  function yd(e) {
    _i(e);
  }
  function ki(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function vd(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function fc(e, t, a) {
    return (
      (a = _a(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        ki(e, t);
      }),
      a
    );
  }
  function bd(e) {
    return ((e = _a(e)), (e.tag = 3), e);
  }
  function Sd(e, t, a, n) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = n.value;
      ((e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          vd(t, a, n);
        }));
    }
    var o = a.stateNode;
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (e.callback = function () {
        (vd(t, a, n),
          typeof i != "function" &&
            (Oa === null ? (Oa = new Set([this])) : Oa.add(this)));
        var m = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function sy(e, t, a, n, i) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Cn(t, a, i, !0),
        (a = vt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              zt === null ? iu() : a.alternate === null && Ue === 0 && (Ue = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              n === wi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                  Bc(e, n, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === wi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                  Bc(e, n, i)),
              !1
            );
        }
        throw Error(c(435, a.tag));
      }
      return (Bc(e, n, i), iu(), !1);
    }
    if (oe)
      return (
        (t = vt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            n !== Nr && ((e = Error(c(422), { cause: n })), gl(Dt(e, a))))
          : (n !== Nr && ((t = Error(c(423), { cause: n })), gl(Dt(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (n = Dt(n, a)),
            (i = fc(e.stateNode, n, i)),
            Yr(e, i),
            Ue !== 4 && (Ue = 2)),
        !1
      );
    var u = Error(c(520), { cause: n });
    if (
      ((u = Dt(u, a)),
      Ul === null ? (Ul = [u]) : Ul.push(u),
      Ue !== 4 && (Ue = 2),
      t === null)
    )
      return !0;
    ((n = Dt(n, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = fc(a.stateNode, n, e)),
            Yr(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Oa === null || !Oa.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = bd(i)),
              Sd(i, e, a, n),
              Yr(a, i),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var dc = Error(c(461)),
    Ge = !1;
  function We(e, t, a, n) {
    t.child = e === null ? _f(t, null, a, n) : nn(t, e.child, a, n);
  }
  function Ed(e, t, a, n, i) {
    a = a.render;
    var u = t.ref;
    if ("ref" in n) {
      var o = {};
      for (var m in n) m !== "ref" && (o[m] = n[m]);
    } else o = n;
    return (
      Pa(t),
      (n = kr(e, t, a, o, u, i)),
      (m = $r()),
      e !== null && !Ge
        ? (Jr(e, t, i), la(e, t, i))
        : (oe && m && Cr(t), (t.flags |= 1), We(e, t, n, i), t.child)
    );
  }
  function xd(e, t, a, n, i) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" &&
        !Tr(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = u), Ad(e, t, u, n, i))
        : ((e = Ci(a.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Sc(e, i))) {
      var o = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : hl), a(o, n) && e.ref === t.ref)
      )
        return la(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = It(u, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ad(e, t, a, n, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (hl(u, n) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = n = u), Sc(e, i)))
          (e.flags & 131072) !== 0 && (Ge = !0);
        else return ((t.lanes = e.lanes), la(e, t, i));
    }
    return hc(e, t, a, n, i);
  }
  function _d(e, t, a, n) {
    var i = n.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            ((i = i | n.lanes | n.childLanes), (n = n.sibling));
          n = i & ~u;
        } else ((n = 0), (t.child = null));
        return Td(e, t, u, a, n);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Mi(t, u !== null ? u.cachePool : null),
          u !== null ? Rf(t, u) : Xr(),
          Cf(t));
      else
        return (
          (n = t.lanes = 536870912),
          Td(e, t, u !== null ? u.baseLanes | a : a, a, n)
        );
    } else
      u !== null
        ? (Mi(t, u.cachePool), Rf(t, u), Ra(), (t.memoizedState = null))
        : (e !== null && Mi(t, null), Xr(), Ra());
    return (We(e, t, i, a), t.child);
  }
  function Cl(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Td(e, t, a, n, i) {
    var u = Hr();
    return (
      (u = u === null ? null : { parent: Ve._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      e !== null && Mi(t, null),
      Xr(),
      Cf(t),
      e !== null && Cn(e, t, n, !0),
      (t.childLanes = i),
      null
    );
  }
  function $i(e, t) {
    return (
      (t = Fi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function jd(e, t, a) {
    return (
      nn(t, e.child, null, a),
      (e = $i(t, t.pendingProps)),
      (e.flags |= 2),
      bt(t),
      (t.memoizedState = null),
      e
    );
  }
  function oy(e, t, a) {
    var n = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (oe) {
        if (n.mode === "hidden")
          return ((e = $i(t, n)), (t.lanes = 536870912), Cl(null, e));
        if (
          (Qr(t),
          (e = Ce)
            ? ((e = Lh(e, Mt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ba !== null ? { id: Xt, overflow: Zt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = sf(e)),
                (a.return = t),
                (t.child = a),
                (Je = t),
                (Ce = null)))
            : (e = null),
          e === null)
        )
          throw Ea(t);
        return ((t.lanes = 536870912), null);
      }
      return $i(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var o = u.dehydrated;
      if ((Qr(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = jd(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if (
        (Ge || Cn(e, t, a, !1), (i = (a & e.childLanes) !== 0), Ge || i)
      ) {
        if (
          ((n = je),
          n !== null && ((o = po(n, a)), o !== 0 && o !== u.retryLane))
        )
          throw ((u.retryLane = o), Ja(e, o), ot(n, e, o), dc);
        (iu(), (t = jd(e, t, a)));
      } else
        ((e = u.treeContext),
          (Ce = wt(o.nextSibling)),
          (Je = t),
          (oe = !0),
          (Sa = null),
          (Mt = !1),
          e !== null && df(t, e),
          (t = $i(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = It(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ji(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(c(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function hc(e, t, a, n, i) {
    return (
      Pa(t),
      (a = kr(e, t, a, n, void 0, i)),
      (n = $r()),
      e !== null && !Ge
        ? (Jr(e, t, i), la(e, t, i))
        : (oe && n && Cr(t), (t.flags |= 1), We(e, t, a, i), t.child)
    );
  }
  function Rd(e, t, a, n, i, u) {
    return (
      Pa(t),
      (t.updateQueue = null),
      (a = Nf(t, n, a, i)),
      Df(e),
      (n = $r()),
      e !== null && !Ge
        ? (Jr(e, t, u), la(e, t, u))
        : (oe && n && Cr(t), (t.flags |= 1), We(e, t, a, u), t.child)
    );
  }
  function Cd(e, t, a, n, i) {
    if ((Pa(t), t.stateNode === null)) {
      var u = _n,
        o = a.contextType;
      (typeof o == "object" && o !== null && (u = Fe(o)),
        (u = new a(n, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = oc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = n),
        (u.state = t.memoizedState),
        (u.refs = {}),
        qr(t),
        (o = a.contextType),
        (u.context = typeof o == "object" && o !== null ? Fe(o) : _n),
        (u.state = t.memoizedState),
        (o = a.getDerivedStateFromProps),
        typeof o == "function" && (sc(t, a, o, n), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((o = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          o !== u.state && oc.enqueueReplaceState(u, u.state, null),
          Al(t, n, u, i),
          xl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps,
        v = un(a, m);
      u.props = v;
      var j = u.context,
        N = a.contextType;
      ((o = _n), typeof N == "object" && N !== null && (o = Fe(N)));
      var z = a.getDerivedStateFromProps;
      ((N =
        typeof z == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (m = t.pendingProps !== m),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m || j !== o) && md(t, u, n, o)),
        (Aa = !1));
      var R = t.memoizedState;
      ((u.state = R),
        Al(t, n, u, i),
        xl(),
        (j = t.memoizedState),
        m || R !== j || Aa
          ? (typeof z == "function" && (sc(t, a, z, n), (j = t.memoizedState)),
            (v = Aa || hd(t, a, v, n, R, j, o))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = j)),
            (u.props = n),
            (u.state = j),
            (u.context = o),
            (n = v))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((u = t.stateNode),
        Vr(e, t),
        (o = t.memoizedProps),
        (N = un(a, o)),
        (u.props = N),
        (z = t.pendingProps),
        (R = u.context),
        (j = a.contextType),
        (v = _n),
        typeof j == "object" && j !== null && (v = Fe(j)),
        (m = a.getDerivedStateFromProps),
        (j =
          typeof m == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((o !== z || R !== v) && md(t, u, n, v)),
        (Aa = !1),
        (R = t.memoizedState),
        (u.state = R),
        Al(t, n, u, i),
        xl());
      var C = t.memoizedState;
      o !== z ||
      R !== C ||
      Aa ||
      (e !== null && e.dependencies !== null && Ni(e.dependencies))
        ? (typeof m == "function" && (sc(t, a, m, n), (C = t.memoizedState)),
          (N =
            Aa ||
            hd(t, a, N, n, R, C, v) ||
            (e !== null && e.dependencies !== null && Ni(e.dependencies)))
            ? (j ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(n, C, v),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(n, C, v)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (o === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = C)),
          (u.props = n),
          (u.state = C),
          (u.context = v),
          (n = N))
        : (typeof u.componentDidUpdate != "function" ||
            (o === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (u = n),
      Ji(e, t),
      (n = (t.flags & 128) !== 0),
      u || n
        ? ((u = t.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = nn(t, e.child, null, i)),
              (t.child = nn(t, null, a, i)))
            : We(e, t, a, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = la(e, t, i)),
      e
    );
  }
  function Dd(e, t, a, n) {
    return (Wa(), (t.flags |= 256), We(e, t, a, n), t.child);
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function pc(e) {
    return { baseLanes: e, cachePool: vf() };
  }
  function gc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Et), e);
  }
  function Nd(e, t, a) {
    var n = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) ||
        (o =
          e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0),
      o && ((i = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (oe) {
        if (
          (i ? ja(t) : Ra(),
          (e = Ce)
            ? ((e = Lh(e, Mt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ba !== null ? { id: Xt, overflow: Zt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = sf(e)),
                (a.return = t),
                (t.child = a),
                (Je = t),
                (Ce = null)))
            : (e = null),
          e === null)
        )
          throw Ea(t);
        return (Ic(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var m = n.children;
      return (
        (n = n.fallback),
        i
          ? (Ra(),
            (i = t.mode),
            (m = Fi({ mode: "hidden", children: m }, i)),
            (n = Fa(n, i, a, null)),
            (m.return = t),
            (n.return = t),
            (m.sibling = n),
            (t.child = m),
            (n = t.child),
            (n.memoizedState = pc(a)),
            (n.childLanes = gc(e, o, a)),
            (t.memoizedState = mc),
            Cl(null, n))
          : (ja(t), yc(t, m))
      );
    }
    var v = e.memoizedState;
    if (v !== null && ((m = v.dehydrated), m !== null)) {
      if (u)
        t.flags & 256
          ? (ja(t), (t.flags &= -257), (t = vc(e, t, a)))
          : t.memoizedState !== null
            ? (Ra(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ra(),
              (m = n.fallback),
              (i = t.mode),
              (n = Fi({ mode: "visible", children: n.children }, i)),
              (m = Fa(m, i, a, null)),
              (m.flags |= 2),
              (n.return = t),
              (m.return = t),
              (n.sibling = m),
              (t.child = n),
              nn(t, e.child, null, a),
              (n = t.child),
              (n.memoizedState = pc(a)),
              (n.childLanes = gc(e, o, a)),
              (t.memoizedState = mc),
              (t = Cl(null, n)));
      else if ((ja(t), Ic(m))) {
        if (((o = m.nextSibling && m.nextSibling.dataset), o)) var j = o.dgst;
        ((o = j),
          (n = Error(c(419))),
          (n.stack = ""),
          (n.digest = o),
          gl({ value: n, source: null, stack: null }),
          (t = vc(e, t, a)));
      } else if (
        (Ge || Cn(e, t, a, !1), (o = (a & e.childLanes) !== 0), Ge || o)
      ) {
        if (
          ((o = je),
          o !== null && ((n = po(o, a)), n !== 0 && n !== v.retryLane))
        )
          throw ((v.retryLane = n), Ja(e, n), ot(o, e, n), dc);
        (Wc(m) || iu(), (t = vc(e, t, a)));
      } else
        Wc(m)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = v.treeContext),
            (Ce = wt(m.nextSibling)),
            (Je = t),
            (oe = !0),
            (Sa = null),
            (Mt = !1),
            e !== null && df(t, e),
            (t = yc(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Ra(),
        (m = n.fallback),
        (i = t.mode),
        (v = e.child),
        (j = v.sibling),
        (n = It(v, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = v.subtreeFlags & 65011712),
        j !== null ? (m = It(j, m)) : ((m = Fa(m, i, a, null)), (m.flags |= 2)),
        (m.return = t),
        (n.return = t),
        (n.sibling = m),
        (t.child = n),
        Cl(null, n),
        (n = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = pc(a))
          : ((i = m.cachePool),
            i !== null
              ? ((v = Ve._currentValue),
                (i = i.parent !== v ? { parent: v, pool: v } : i))
              : (i = vf()),
            (m = { baseLanes: m.baseLanes | a, cachePool: i })),
        (n.memoizedState = m),
        (n.childLanes = gc(e, o, a)),
        (t.memoizedState = mc),
        Cl(e.child, n))
      : (ja(t),
        (a = e.child),
        (e = a.sibling),
        (a = It(a, { mode: "visible", children: n.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((o = t.deletions),
          o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function yc(e, t) {
    return (
      (t = Fi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fi(e, t) {
    return ((e = yt(22, e, null, t)), (e.lanes = 0), e);
  }
  function vc(e, t, a) {
    return (
      nn(t, e.child, null, a),
      (e = yc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Od(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), zr(e.return, t, a));
  }
  function bc(e, t, a, n, i, u) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: i,
          treeForkCount: u,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = a),
        (o.tailMode = i),
        (o.treeForkCount = u));
  }
  function Md(e, t, a) {
    var n = t.pendingProps,
      i = n.revealOrder,
      u = n.tail;
    n = n.children;
    var o = He.current,
      m = (o & 2) !== 0;
    if (
      (m ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
      q(He, o),
      We(e, t, n, a),
      (n = oe ? pl : 0),
      !m && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Od(e, a, t);
        else if (e.tag === 19) Od(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (i) {
      case "forwards":
        for (a = t.child, i = null; a !== null; )
          ((e = a.alternate),
            e !== null && Li(e) === null && (i = a),
            (a = a.sibling));
        ((a = i),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          bc(t, !1, i, a, u, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Li(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        bc(t, !0, a, null, u, n);
        break;
      case "together":
        bc(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function la(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Na |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Cn(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, a = It(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = It(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ni(e)));
  }
  function fy(e, t, a) {
    switch (t.tag) {
      case 3:
        (at(t, t.stateNode.containerInfo),
          xa(t, Ve, e.memoizedState.cache),
          Wa());
        break;
      case 27:
      case 5:
        el(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
        break;
      case 10:
        xa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qr(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (ja(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Nd(e, t, a)
              : (ja(t), (e = la(e, t, a)), e !== null ? e.sibling : null);
        ja(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((n = (a & t.childLanes) !== 0),
          n || (Cn(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (n) return Md(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          q(He, He.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), _d(e, t, a, t.pendingProps));
      case 24:
        xa(t, Ve, e.memoizedState.cache);
    }
    return la(e, t, a);
  }
  function zd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ge = !0;
      else {
        if (!Sc(e, a) && (t.flags & 128) === 0) return ((Ge = !1), fy(e, t, a));
        Ge = (e.flags & 131072) !== 0;
      }
    else ((Ge = !1), oe && (t.flags & 1048576) !== 0 && ff(t, pl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = tn(t.elementType)), (t.type = e), typeof e == "function"))
            Tr(e)
              ? ((n = un(e, n)), (t.tag = 1), (t = Cd(null, t, e, n, a)))
              : ((t.tag = 0), (t = hc(null, t, e, n, a)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === fe) {
                ((t.tag = 11), (t = Ed(null, t, e, n, a)));
                break e;
              } else if (i === k) {
                ((t.tag = 14), (t = xd(null, t, e, n, a)));
                break e;
              }
            }
            throw ((t = Tt(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return hc(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((n = t.type), (i = un(n, t.pendingProps)), Cd(e, t, n, i, a));
      case 3:
        e: {
          if ((at(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          ((i = u.element), Vr(e, t), Al(t, n, null, a));
          var o = t.memoizedState;
          if (
            ((n = o.cache),
            xa(t, Ve, n),
            n !== u.cache && wr(t, [Ve], a, !0),
            xl(),
            (n = o.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Dd(e, t, n, a);
              break e;
            } else if (n !== i) {
              ((i = Dt(Error(c(424)), t)), gl(i), (t = Dd(e, t, n, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ce = wt(e.firstChild),
                  Je = t,
                  oe = !0,
                  Sa = null,
                  Mt = !0,
                  a = _f(t, null, n, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Wa(), n === i)) {
              t = la(e, t, a);
              break e;
            }
            We(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ji(e, t),
          e === null
            ? (a = Zh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : oe ||
                ((a = t.type),
                (e = t.pendingProps),
                (n = du(ae.current).createElement(a)),
                (n[$e] = t),
                (n[lt] = e),
                Ie(n, a, e),
                Ke(n),
                (t.stateNode = n))
            : (t.memoizedState = Zh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          el(t),
          e === null &&
            oe &&
            ((n = t.stateNode = Yh(t.type, t.pendingProps, ae.current)),
            (Je = t),
            (Mt = !0),
            (i = Ce),
            Ua(t.type) ? ((Pc = i), (Ce = wt(n.firstChild))) : (Ce = i)),
          We(e, t, t.pendingProps.children, a),
          Ji(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            oe &&
            ((i = n = Ce) &&
              ((n = Yy(n, t.type, t.pendingProps, Mt)),
              n !== null
                ? ((t.stateNode = n),
                  (Je = t),
                  (Ce = wt(n.firstChild)),
                  (Mt = !1),
                  (i = !0))
                : (i = !1)),
            i || Ea(t)),
          el(t),
          (i = t.type),
          (u = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (n = u.children),
          $c(i, u) ? (n = null) : o !== null && $c(i, o) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = kr(e, t, ay, null, null, a)), (Xl._currentValue = i)),
          Ji(e, t),
          We(e, t, n, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            oe &&
            ((e = a = Ce) &&
              ((a = Gy(a, t.pendingProps, Mt)),
              a !== null
                ? ((t.stateNode = a), (Je = t), (Ce = null), (e = !0))
                : (e = !1)),
            e || Ea(t)),
          null
        );
      case 13:
        return Nd(e, t, a);
      case 4:
        return (
          at(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = nn(t, null, n, a)) : We(e, t, n, a),
          t.child
        );
      case 11:
        return Ed(e, t, t.type, t.pendingProps, a);
      case 7:
        return (We(e, t, t.pendingProps, a), t.child);
      case 8:
        return (We(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (We(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          xa(t, t.type, n.value),
          We(e, t, n.children, a),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (n = t.pendingProps.children),
          Pa(t),
          (i = Fe(i)),
          (n = n(i)),
          (t.flags |= 1),
          We(e, t, n, a),
          t.child
        );
      case 14:
        return xd(e, t, t.type, t.pendingProps, a);
      case 15:
        return Ad(e, t, t.type, t.pendingProps, a);
      case 19:
        return Md(e, t, a);
      case 31:
        return oy(e, t, a);
      case 22:
        return _d(e, t, a, t.pendingProps);
      case 24:
        return (
          Pa(t),
          (n = Fe(Ve)),
          e === null
            ? ((i = Hr()),
              i === null &&
                ((i = je),
                (u = Ur()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= a),
                (i = u)),
              (t.memoizedState = { parent: n, cache: i }),
              qr(t),
              xa(t, Ve, i))
            : ((e.lanes & a) !== 0 && (Vr(e, t), Al(t, null, null, a), xl()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== n
                ? ((i = { parent: n, cache: n }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  xa(t, Ve, n))
                : ((n = u.cache),
                  xa(t, Ve, n),
                  n !== i.cache && wr(t, [Ve], a, !0))),
          We(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function ia(e) {
    e.flags |= 4;
  }
  function Ec(e, t, a, n, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (uh()) e.flags |= 8192;
        else throw ((an = wi), Lr);
    } else e.flags &= -16777217;
  }
  function wd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jh(t)))
      if (uh()) e.flags |= 8192;
      else throw ((an = wi), Lr);
  }
  function Wi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? fo() : 536870912), (e.lanes |= t), (Vn |= t)));
  }
  function Dl(e, t) {
    if (!oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null; )
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 65011712),
          (n |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = a), t);
  }
  function dy(e, t, a) {
    var n = t.pendingProps;
    switch ((Dr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (De(t), null);
      case 1:
        return (De(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ta(Ve),
          Be(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Rn(t)
              ? ia(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Or())),
          De(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (ia(t),
              u !== null ? (De(t), wd(t, u)) : (De(t), Ec(t, i, null, n, a)))
            : u
              ? u !== e.memoizedState
                ? (ia(t), De(t), wd(t, u))
                : (De(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && ia(t),
                De(t),
                Ec(t, i, e, n, a)),
          null
        );
      case 27:
        if (
          (ci(t),
          (a = ae.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && ia(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166));
            return (De(t), null);
          }
          ((e = X.current),
            Rn(t) ? hf(t) : ((e = Yh(i, n, a)), (t.stateNode = e), ia(t)));
        }
        return (De(t), null);
      case 5:
        if ((ci(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && ia(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(c(166));
            return (De(t), null);
          }
          if (((u = X.current), Rn(t))) hf(t);
          else {
            var o = du(ae.current);
            switch (u) {
              case 1:
                u = o.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                u = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    u = o.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    u = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i,
                    );
                    break;
                  case "script":
                    ((u = o.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof n.is == "string"
                        ? o.createElement("select", { is: n.is })
                        : o.createElement("select")),
                      n.multiple
                        ? (u.multiple = !0)
                        : n.size && (u.size = n.size));
                    break;
                  default:
                    u =
                      typeof n.is == "string"
                        ? o.createElement(i, { is: n.is })
                        : o.createElement(i);
                }
            }
            ((u[$e] = t), (u[lt] = n));
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) u.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            t.stateNode = u;
            e: switch ((Ie(u, i, n), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ia(t);
          }
        }
        return (
          De(t),
          Ec(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && ia(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ae.current), Rn(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (n = null),
              (i = Je),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            ((e[$e] = t),
              (e = !!(
                e.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Nh(e.nodeValue, a)
              )),
              e || Ea(t, !0));
          } else
            ((e = du(e).createTextNode(n)), (e[$e] = t), (t.stateNode = e));
        }
        return (De(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = Rn(t)), a !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[$e] = t;
            } else
              (Wa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (De(t), (e = !1));
          } else
            ((a = Or()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (bt(t), t) : (bt(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return (De(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = Rn(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(c(317));
              i[$e] = t;
            } else
              (Wa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (De(t), (i = !1));
          } else
            ((i = Or()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (bt(t), t) : (bt(t), null);
        }
        return (
          bt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = n !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((n = t.child),
                (i = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (i = n.alternate.memoizedState.cachePool.pool),
                (u = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (u = n.memoizedState.cachePool.pool),
                u !== i && (n.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              Wi(t, t.updateQueue),
              De(t),
              null)
        );
      case 4:
        return (Be(), e === null && Xc(t.stateNode.containerInfo), De(t), null);
      case 10:
        return (ta(t.type), De(t), null);
      case 19:
        if ((w(He), (n = t.memoizedState), n === null)) return (De(t), null);
        if (((i = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (i) Dl(n, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Li(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Dl(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Wi(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (cf(a, e), (a = a.sibling));
                  return (
                    q(He, (He.current & 1) | 2),
                    oe && Pt(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              ht() > au &&
              ((t.flags |= 128), (i = !0), Dl(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Li(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Wi(t, e),
                Dl(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !oe)
              )
                return (De(t), null);
            } else
              2 * ht() - n.renderingStartTime > au &&
                a !== 536870912 &&
                ((t.flags |= 128), (i = !0), Dl(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = ht()),
            (e.sibling = null),
            (a = He.current),
            q(He, i ? (a & 1) | 2 : a & 1),
            oe && Pt(t, n.treeForkCount),
            e)
          : (De(t), null);
      case 22:
      case 23:
        return (
          bt(t),
          Zr(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : De(t),
          (a = t.updateQueue),
          a !== null && Wi(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== a && (t.flags |= 2048),
          e !== null && w(en),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ta(Ve),
          De(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function hy(e, t) {
    switch ((Dr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ta(Ve),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ci(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((bt(t), t.alternate === null)) throw Error(c(340));
          Wa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (bt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Wa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (w(He), null);
      case 4:
        return (Be(), null);
      case 10:
        return (ta(t.type), null);
      case 22:
      case 23:
        return (
          bt(t),
          Zr(),
          e !== null && w(en),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (ta(Ve), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ud(e, t) {
    switch ((Dr(t), t.tag)) {
      case 3:
        (ta(Ve), Be());
        break;
      case 26:
      case 27:
      case 5:
        ci(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && bt(t);
        break;
      case 13:
        bt(t);
        break;
      case 19:
        w(He);
        break;
      case 10:
        ta(t.type);
        break;
      case 22:
      case 23:
        (bt(t), Zr(), e !== null && w(en));
        break;
      case 24:
        ta(Ve);
    }
  }
  function Nl(e, t) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var u = a.create,
              o = a.inst;
            ((n = u()), (o.destroy = n));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (m) {
      Se(t, t.return, m);
    }
  }
  function Ca(e, t, a) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var o = n.inst,
              m = o.destroy;
            if (m !== void 0) {
              ((o.destroy = void 0), (i = t));
              var v = a,
                j = m;
              try {
                j();
              } catch (N) {
                Se(i, v, N);
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (N) {
      Se(t, t.return, N);
    }
  }
  function Bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        jf(t, a);
      } catch (n) {
        Se(e, e.return, n);
      }
    }
  }
  function Hd(e, t, a) {
    ((a.props = un(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      Se(e, t, n);
    }
  }
  function Ol(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (i) {
      Se(e, t, i);
    }
  }
  function Qt(e, t) {
    var a = e.ref,
      n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          Se(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          Se(e, t, i);
        }
      else a.current = null;
  }
  function Ld(e) {
    var t = e.type,
      a = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (i) {
      Se(e, e.return, i);
    }
  }
  function xc(e, t, a) {
    try {
      var n = e.stateNode;
      (Uy(n, e.type, a, t), (n[lt] = t));
    } catch (i) {
      Se(e, e.return, i);
    }
  }
  function qd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ua(e.type)) ||
      e.tag === 4
    );
  }
  function Ac(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || qd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Ua(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _c(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ft)));
    else if (
      n !== 4 &&
      (n === 27 && Ua(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (_c(e, t, a), e = e.sibling; e !== null; )
        (_c(e, t, a), (e = e.sibling));
  }
  function Ii(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && Ua(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (Ii(e, t, a), e = e.sibling; e !== null; )
        (Ii(e, t, a), (e = e.sibling));
  }
  function Vd(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (Ie(t, n, a), (t[$e] = e), (t[lt] = a));
    } catch (u) {
      Se(e, e.return, u);
    }
  }
  var ua = !1,
    Xe = !1,
    Tc = !1,
    Yd = typeof WeakSet == "function" ? WeakSet : Set,
    ke = null;
  function my(e, t) {
    if (((e = e.containerInfo), (Kc = bu), (e = Io(e)), vr(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var i = n.anchorOffset,
              u = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break e;
            }
            var o = 0,
              m = -1,
              v = -1,
              j = 0,
              N = 0,
              z = e,
              R = null;
            t: for (;;) {
              for (
                var C;
                z !== a || (i !== 0 && z.nodeType !== 3) || (m = o + i),
                  z !== u || (n !== 0 && z.nodeType !== 3) || (v = o + n),
                  z.nodeType === 3 && (o += z.nodeValue.length),
                  (C = z.firstChild) !== null;
              )
                ((R = z), (z = C));
              for (;;) {
                if (z === e) break t;
                if (
                  (R === a && ++j === i && (m = o),
                  R === u && ++N === n && (v = o),
                  (C = z.nextSibling) !== null)
                )
                  break;
                ((z = R), (R = z.parentNode));
              }
              z = C;
            }
            a = m === -1 || v === -1 ? null : { start: m, end: v };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      kc = { focusedElem: e, selectionRange: a }, bu = !1, ke = t;
      ke !== null;
    )
      if (
        ((t = ke), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ke = e));
      else
        for (; ke !== null; ) {
          switch (((t = ke), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((i = e[a]), (i.ref.impl = i.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (a = t),
                  (i = u.memoizedProps),
                  (u = u.memoizedState),
                  (n = a.stateNode));
                try {
                  var G = un(a.type, i);
                  ((e = n.getSnapshotBeforeUpdate(G, u)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (J) {
                  Se(a, a.return, J);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Fc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ke = e));
            break;
          }
          ke = t.return;
        }
  }
  function Gd(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ca(e, a), n & 4 && Nl(5, a));
        break;
      case 1:
        if ((ca(e, a), n & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (o) {
              Se(a, a.return, o);
            }
          else {
            var i = un(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              Se(a, a.return, o);
            }
          }
        (n & 64 && Bd(a), n & 512 && Ol(a, a.return));
        break;
      case 3:
        if ((ca(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            jf(e, t);
          } catch (o) {
            Se(a, a.return, o);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Vd(a);
      case 26:
      case 5:
        (ca(e, a), t === null && n & 4 && Ld(a), n & 512 && Ol(a, a.return));
        break;
      case 12:
        ca(e, a);
        break;
      case 31:
        (ca(e, a), n & 4 && Qd(e, a));
        break;
      case 13:
        (ca(e, a),
          n & 4 && Kd(e, a),
          n & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = Ay.bind(null, a)), Xy(e, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || ua), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Xe), (i = ua));
          var u = Xe;
          ((ua = n),
            (Xe = t) && !u ? sa(e, a, (a.subtreeFlags & 8772) !== 0) : ca(e, a),
            (ua = i),
            (Xe = u));
        }
        break;
      case 30:
        break;
      default:
        ca(e, a);
    }
  }
  function Xd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Xd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && tr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Oe = null,
    ut = !1;
  function ra(e, t, a) {
    for (a = a.child; a !== null; ) (Zd(e, t, a), (a = a.sibling));
  }
  function Zd(e, t, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Xe || Qt(a, t),
          ra(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Xe || Qt(a, t);
        var n = Oe,
          i = ut;
        (Ua(a.type) && ((Oe = a.stateNode), (ut = !1)),
          ra(e, t, a),
          Vl(a.stateNode),
          (Oe = n),
          (ut = i));
        break;
      case 5:
        Xe || Qt(a, t);
      case 6:
        if (
          ((n = Oe),
          (i = ut),
          (Oe = null),
          ra(e, t, a),
          (Oe = n),
          (ut = i),
          Oe !== null)
        )
          if (ut)
            try {
              (Oe.nodeType === 9
                ? Oe.body
                : Oe.nodeName === "HTML"
                  ? Oe.ownerDocument.body
                  : Oe
              ).removeChild(a.stateNode);
            } catch (u) {
              Se(a, t, u);
            }
          else
            try {
              Oe.removeChild(a.stateNode);
            } catch (u) {
              Se(a, t, u);
            }
        break;
      case 18:
        Oe !== null &&
          (ut
            ? ((e = Oe),
              Bh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              $n(e))
            : Bh(Oe, a.stateNode));
        break;
      case 4:
        ((n = Oe),
          (i = ut),
          (Oe = a.stateNode.containerInfo),
          (ut = !0),
          ra(e, t, a),
          (Oe = n),
          (ut = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ca(2, a, t), Xe || Ca(4, a, t), ra(e, t, a));
        break;
      case 1:
        (Xe ||
          (Qt(a, t),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && Hd(a, t, n)),
          ra(e, t, a));
        break;
      case 21:
        ra(e, t, a);
        break;
      case 22:
        ((Xe = (n = Xe) || a.memoizedState !== null), ra(e, t, a), (Xe = n));
        break;
      default:
        ra(e, t, a);
    }
  }
  function Qd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        $n(e);
      } catch (a) {
        Se(t, t.return, a);
      }
    }
  }
  function Kd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        $n(e);
      } catch (a) {
        Se(t, t.return, a);
      }
  }
  function py(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Yd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Yd()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Pi(e, t) {
    var a = py(e);
    t.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var i = _y.bind(null, e, n);
        n.then(i, i);
      }
    });
  }
  function rt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n],
          u = e,
          o = t,
          m = o;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ua(m.type)) {
                ((Oe = m.stateNode), (ut = !1));
                break e;
              }
              break;
            case 5:
              ((Oe = m.stateNode), (ut = !1));
              break e;
            case 3:
            case 4:
              ((Oe = m.stateNode.containerInfo), (ut = !0));
              break e;
          }
          m = m.return;
        }
        if (Oe === null) throw Error(c(160));
        (Zd(u, o, i),
          (Oe = null),
          (ut = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (kd(t, e), (t = t.sibling));
  }
  var Lt = null;
  function kd(e, t) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (rt(t, e),
          ct(e),
          n & 4 && (Ca(3, e, e.return), Nl(3, e), Ca(5, e, e.return)));
        break;
      case 1:
        (rt(t, e),
          ct(e),
          n & 512 && (Xe || a === null || Qt(a, a.return)),
          n & 64 &&
            ua &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
        break;
      case 26:
        var i = Lt;
        if (
          (rt(t, e),
          ct(e),
          n & 512 && (Xe || a === null || Qt(a, a.return)),
          n & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((n = e.memoizedState), a === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (a = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (n) {
                    case "title":
                      ((u = i.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ll] ||
                          u[$e] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = i.createElement(n)),
                          i.head.insertBefore(
                            u,
                            i.querySelector("head > title"),
                          )),
                        Ie(u, n, a),
                        (u[$e] = e),
                        Ke(u),
                        (n = u));
                      break e;
                    case "link":
                      var o = kh("link", "href", i).get(n + (a.href || ""));
                      if (o) {
                        for (var m = 0; m < o.length; m++)
                          if (
                            ((u = o[m]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(n)),
                        Ie(u, n, a),
                        i.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (o = kh("meta", "content", i).get(
                          n + (a.content || ""),
                        ))
                      ) {
                        for (m = 0; m < o.length; m++)
                          if (
                            ((u = o[m]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      ((u = i.createElement(n)),
                        Ie(u, n, a),
                        i.head.appendChild(u));
                      break;
                    default:
                      throw Error(c(468, n));
                  }
                  ((u[$e] = e), Ke(u), (n = u));
                }
                e.stateNode = n;
              } else $h(i, e.type, e.stateNode);
            else e.stateNode = Kh(i, n, e.memoizedProps);
          else
            u !== n
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                n === null
                  ? $h(i, e.type, e.stateNode)
                  : Kh(i, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                xc(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (rt(t, e),
          ct(e),
          n & 512 && (Xe || a === null || Qt(a, a.return)),
          a !== null && n & 4 && xc(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (rt(t, e),
          ct(e),
          n & 512 && (Xe || a === null || Qt(a, a.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            yn(i, "");
          } catch (G) {
            Se(e, e.return, G);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), xc(e, i, a !== null ? a.memoizedProps : i)),
          n & 1024 && (Tc = !0));
        break;
      case 6:
        if ((rt(t, e), ct(e), n & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((n = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = n;
          } catch (G) {
            Se(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          ((pu = null),
          (i = Lt),
          (Lt = hu(t.containerInfo)),
          rt(t, e),
          (Lt = i),
          ct(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            $n(t.containerInfo);
          } catch (G) {
            Se(e, e.return, G);
          }
        Tc && ((Tc = !1), $d(e));
        break;
      case 4:
        ((n = Lt),
          (Lt = hu(e.stateNode.containerInfo)),
          rt(t, e),
          ct(e),
          (Lt = n));
        break;
      case 12:
        (rt(t, e), ct(e));
        break;
      case 31:
        (rt(t, e),
          ct(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Pi(e, n))));
        break;
      case 13:
        (rt(t, e),
          ct(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (tu = ht()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Pi(e, n))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var v = a !== null && a.memoizedState !== null,
          j = ua,
          N = Xe;
        if (
          ((ua = j || i),
          (Xe = N || v),
          rt(t, e),
          (Xe = N),
          (ua = j),
          ct(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (a === null || v || ua || Xe || rn(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                v = a = t;
                try {
                  if (((u = v.stateNode), i))
                    ((o = u.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"));
                  else {
                    m = v.stateNode;
                    var z = v.memoizedProps.style,
                      R =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    m.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (G) {
                  Se(v, v.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = i ? "" : v.memoizedProps;
                } catch (G) {
                  Se(v, v.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                v = t;
                try {
                  var C = v.stateNode;
                  i ? Hh(C, !0) : Hh(v.stateNode, !1);
                } catch (G) {
                  Se(v, v.return, G);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((a = n.retryQueue),
            a !== null && ((n.retryQueue = null), Pi(e, a))));
        break;
      case 19:
        (rt(t, e),
          ct(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Pi(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (rt(t, e), ct(e));
    }
  }
  function ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null; ) {
          if (qd(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode,
              u = Ac(e);
            Ii(e, u, i);
            break;
          case 5:
            var o = a.stateNode;
            a.flags & 32 && (yn(o, ""), (a.flags &= -33));
            var m = Ac(e);
            Ii(e, m, o);
            break;
          case 3:
          case 4:
            var v = a.stateNode.containerInfo,
              j = Ac(e);
            _c(e, j, v);
            break;
          default:
            throw Error(c(161));
        }
      } catch (N) {
        Se(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $d(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ($d(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Gd(e, t.alternate, t), (t = t.sibling));
  }
  function rn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ca(4, t, t.return), rn(t));
          break;
        case 1:
          Qt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Hd(t, t.return, a),
            rn(t));
          break;
        case 27:
          Vl(t.stateNode);
        case 26:
        case 5:
          (Qt(t, t.return), rn(t));
          break;
        case 22:
          t.memoizedState === null && rn(t);
          break;
        case 30:
          rn(t);
          break;
        default:
          rn(t);
      }
      e = e.sibling;
    }
  }
  function sa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        i = e,
        u = t,
        o = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (sa(i, u, a), Nl(4, u));
          break;
        case 1:
          if (
            (sa(i, u, a),
            (n = u),
            (i = n.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (j) {
              Se(n, n.return, j);
            }
          if (((n = u), (i = n.updateQueue), i !== null)) {
            var m = n.stateNode;
            try {
              var v = i.shared.hiddenCallbacks;
              if (v !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < v.length; i++)
                  Tf(v[i], m);
            } catch (j) {
              Se(n, n.return, j);
            }
          }
          (a && o & 64 && Bd(u), Ol(u, u.return));
          break;
        case 27:
          Vd(u);
        case 26:
        case 5:
          (sa(i, u, a), a && n === null && o & 4 && Ld(u), Ol(u, u.return));
          break;
        case 12:
          sa(i, u, a);
          break;
        case 31:
          (sa(i, u, a), a && o & 4 && Qd(i, u));
          break;
        case 13:
          (sa(i, u, a), a && o & 4 && Kd(i, u));
          break;
        case 22:
          (u.memoizedState === null && sa(i, u, a), Ol(u, u.return));
          break;
        case 30:
          break;
        default:
          sa(i, u, a);
      }
      t = t.sibling;
    }
  }
  function jc(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && yl(a)));
  }
  function Rc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && yl(e)));
  }
  function qt(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Jd(e, t, a, n), (t = t.sibling));
  }
  function Jd(e, t, a, n) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (qt(e, t, a, n), i & 2048 && Nl(9, t));
        break;
      case 1:
        qt(e, t, a, n);
        break;
      case 3:
        (qt(e, t, a, n),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && yl(e))));
        break;
      case 12:
        if (i & 2048) {
          (qt(e, t, a, n), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              o = u.id,
              m = u.onPostCommit;
            typeof m == "function" &&
              m(
                o,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (v) {
            Se(t, t.return, v);
          }
        } else qt(e, t, a, n);
        break;
      case 31:
        qt(e, t, a, n);
        break;
      case 13:
        qt(e, t, a, n);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (o = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? qt(e, t, a, n)
              : Ml(e, t)
            : u._visibility & 2
              ? qt(e, t, a, n)
              : ((u._visibility |= 2),
                Hn(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && jc(o, t));
        break;
      case 24:
        (qt(e, t, a, n), i & 2048 && Rc(t.alternate, t));
        break;
      default:
        qt(e, t, a, n);
    }
  }
  function Hn(e, t, a, n, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        o = t,
        m = a,
        v = n,
        j = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Hn(u, o, m, v, i), Nl(8, o));
          break;
        case 23:
          break;
        case 22:
          var N = o.stateNode;
          (o.memoizedState !== null
            ? N._visibility & 2
              ? Hn(u, o, m, v, i)
              : Ml(u, o)
            : ((N._visibility |= 2), Hn(u, o, m, v, i)),
            i && j & 2048 && jc(o.alternate, o));
          break;
        case 24:
          (Hn(u, o, m, v, i), i && j & 2048 && Rc(o.alternate, o));
          break;
        default:
          Hn(u, o, m, v, i);
      }
      t = t.sibling;
    }
  }
  function Ml(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          n = t,
          i = n.flags;
        switch (n.tag) {
          case 22:
            (Ml(a, n), i & 2048 && jc(n.alternate, n));
            break;
          case 24:
            (Ml(a, n), i & 2048 && Rc(n.alternate, n));
            break;
          default:
            Ml(a, n);
        }
        t = t.sibling;
      }
  }
  var zl = 8192;
  function Ln(e, t, a) {
    if (e.subtreeFlags & zl)
      for (e = e.child; e !== null; ) (Fd(e, t, a), (e = e.sibling));
  }
  function Fd(e, t, a) {
    switch (e.tag) {
      case 26:
        (Ln(e, t, a),
          e.flags & zl &&
            e.memoizedState !== null &&
            t0(a, Lt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ln(e, t, a);
        break;
      case 3:
      case 4:
        var n = Lt;
        ((Lt = hu(e.stateNode.containerInfo)), Ln(e, t, a), (Lt = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = zl), (zl = 16777216), Ln(e, t, a), (zl = n))
            : Ln(e, t, a));
        break;
      default:
        Ln(e, t, a);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function wl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((ke = n), Pd(n, e));
        }
      Wd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Id(e), (e = e.sibling));
  }
  function Id(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (wl(e), e.flags & 2048 && Ca(9, e, e.return));
        break;
      case 3:
        wl(e);
        break;
      case 12:
        wl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), eu(e))
          : wl(e);
        break;
      default:
        wl(e);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((ke = n), Pd(n, e));
        }
      Wd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ca(8, t, t.return), eu(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), eu(t)));
          break;
        default:
          eu(t);
      }
      e = e.sibling;
    }
  }
  function Pd(e, t) {
    for (; ke !== null; ) {
      var a = ke;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          yl(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (ke = n));
      else
        e: for (a = e; ke !== null; ) {
          n = ke;
          var i = n.sibling,
            u = n.return;
          if ((Xd(n), n === a)) {
            ke = null;
            break e;
          }
          if (i !== null) {
            ((i.return = u), (ke = i));
            break e;
          }
          ke = u;
        }
    }
  }
  var gy = {
      getCacheForType: function (e) {
        var t = Fe(Ve),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return Fe(Ve).controller.signal;
      },
    },
    yy = typeof WeakMap == "function" ? WeakMap : Map,
    pe = 0,
    je = null,
    ne = null,
    re = 0,
    be = 0,
    St = null,
    Da = !1,
    qn = !1,
    Cc = !1,
    oa = 0,
    Ue = 0,
    Na = 0,
    cn = 0,
    Dc = 0,
    Et = 0,
    Vn = 0,
    Ul = null,
    st = null,
    Nc = !1,
    tu = 0,
    eh = 0,
    au = 1 / 0,
    nu = null,
    Oa = null,
    Ze = 0,
    Ma = null,
    Yn = null,
    fa = 0,
    Oc = 0,
    Mc = null,
    th = null,
    Bl = 0,
    zc = null;
  function xt() {
    return (pe & 2) !== 0 && re !== 0 ? re & -re : O.T !== null ? qc() : go();
  }
  function ah() {
    if (Et === 0)
      if ((re & 536870912) === 0 || oe) {
        var e = fi;
        ((fi <<= 1), (fi & 3932160) === 0 && (fi = 262144), (Et = e));
      } else Et = 536870912;
    return ((e = vt.current), e !== null && (e.flags |= 32), Et);
  }
  function ot(e, t, a) {
    (((e === je && (be === 2 || be === 9)) || e.cancelPendingCommit !== null) &&
      (Gn(e, 0), za(e, re, Et, !1)),
      nl(e, a),
      ((pe & 2) === 0 || e !== je) &&
        (e === je &&
          ((pe & 2) === 0 && (cn |= a), Ue === 4 && za(e, re, Et, !1)),
        Kt(e)));
  }
  function nh(e, t, a) {
    if ((pe & 6) !== 0) throw Error(c(327));
    var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || al(e, t),
      i = n ? Sy(e, t) : Uc(e, t, !0),
      u = n;
    do {
      if (i === 0) {
        qn && !n && za(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), u && !vy(a))) {
          ((i = Uc(e, t, !1)), (u = !1));
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var o = 0;
          else
            ((o = e.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0));
          if (o !== 0) {
            t = o;
            e: {
              var m = e;
              i = Ul;
              var v = m.current.memoizedState.isDehydrated;
              if ((v && (Gn(m, o).flags |= 256), (o = Uc(m, o, !1)), o !== 2)) {
                if (Cc && !v) {
                  ((m.errorRecoveryDisabledLanes |= u), (cn |= u), (i = 4));
                  break e;
                }
                ((u = st),
                  (st = i),
                  u !== null &&
                    (st === null ? (st = u) : st.push.apply(st, u)));
              }
              i = o;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Gn(e, 0), za(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              za(n, t, Et, !Da);
              break e;
            case 2:
              st = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((i = tu + 300 - ht()), 10 < i)) {
            if ((za(n, t, Et, !Da), hi(n, 0, !0) !== 0)) break e;
            ((fa = t),
              (n.timeoutHandle = wh(
                lh.bind(
                  null,
                  n,
                  a,
                  st,
                  nu,
                  Nc,
                  t,
                  Et,
                  cn,
                  Vn,
                  Da,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                i,
              )));
            break e;
          }
          lh(n, a, st, nu, Nc, t, Et, cn, Vn, Da, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Kt(e);
  }
  function lh(e, t, a, n, i, u, o, m, v, j, N, z, R, C) {
    if (
      ((e.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ft,
      }),
        Fd(t, u, z));
      var G =
        (u & 62914560) === u ? tu - ht() : (u & 4194048) === u ? eh - ht() : 0;
      if (((G = a0(z, G)), G !== null)) {
        ((fa = u),
          (e.cancelPendingCommit = G(
            dh.bind(null, e, t, u, a, n, i, o, m, v, N, z, null, R, C),
          )),
          za(e, u, o, !j));
        return;
      }
    }
    dh(e, t, u, a, n, i, o, m, v);
  }
  function vy(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var i = a[n],
            u = i.getSnapshot;
          i = i.value;
          try {
            if (!gt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function za(e, t, a, n) {
    ((t &= ~Dc),
      (t &= ~cn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var u = 31 - pt(i),
        o = 1 << u;
      ((n[u] = -1), (i &= ~o));
    }
    a !== 0 && ho(e, a, t);
  }
  function lu() {
    return (pe & 6) === 0 ? (Hl(0), !1) : !0;
  }
  function wc() {
    if (ne !== null) {
      if (be === 0) var e = ne.return;
      else ((e = ne), (ea = Ia = null), Fr(e), (Mn = null), (bl = 0), (e = ne));
      for (; e !== null; ) (Ud(e.alternate, e), (e = e.return));
      ne = null;
    }
  }
  function Gn(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Ly(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (fa = 0),
      wc(),
      (je = e),
      (ne = a = It(e.current, null)),
      (re = t),
      (be = 0),
      (St = null),
      (Da = !1),
      (qn = al(e, t)),
      (Cc = !1),
      (Vn = Et = Dc = cn = Na = Ue = 0),
      (st = Ul = null),
      (Nc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var i = 31 - pt(n),
          u = 1 << i;
        ((t |= e[i]), (n &= ~u));
      }
    return ((oa = t), Ti(), a);
  }
  function ih(e, t) {
    ((ee = null),
      (O.H = Rl),
      t === On || t === zi
        ? ((t = Ef()), (be = 3))
        : t === Lr
          ? ((t = Ef()), (be = 4))
          : (be =
              t === dc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (St = t),
      ne === null && ((Ue = 1), ki(e, Dt(t, e.current))));
  }
  function uh() {
    var e = vt.current;
    return e === null
      ? !0
      : (re & 4194048) === re
        ? zt === null
        : (re & 62914560) === re || (re & 536870912) !== 0
          ? e === zt
          : !1;
  }
  function rh() {
    var e = O.H;
    return ((O.H = Rl), e === null ? Rl : e);
  }
  function ch() {
    var e = O.A;
    return ((O.A = gy), e);
  }
  function iu() {
    ((Ue = 4),
      Da || ((re & 4194048) !== re && vt.current !== null) || (qn = !0),
      ((Na & 134217727) === 0 && (cn & 134217727) === 0) ||
        je === null ||
        za(je, re, Et, !1));
  }
  function Uc(e, t, a) {
    var n = pe;
    pe |= 2;
    var i = rh(),
      u = ch();
    ((je !== e || re !== t) && ((nu = null), Gn(e, t)), (t = !1));
    var o = Ue;
    e: do
      try {
        if (be !== 0 && ne !== null) {
          var m = ne,
            v = St;
          switch (be) {
            case 8:
              (wc(), (o = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              vt.current === null && (t = !0);
              var j = be;
              if (((be = 0), (St = null), Xn(e, m, v, j), a && qn)) {
                o = 0;
                break e;
              }
              break;
            default:
              ((j = be), (be = 0), (St = null), Xn(e, m, v, j));
          }
        }
        (by(), (o = Ue));
        break;
      } catch (N) {
        ih(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ea = Ia = null),
      (pe = n),
      (O.H = i),
      (O.A = u),
      ne === null && ((je = null), (re = 0), Ti()),
      o
    );
  }
  function by() {
    for (; ne !== null; ) sh(ne);
  }
  function Sy(e, t) {
    var a = pe;
    pe |= 2;
    var n = rh(),
      i = ch();
    je !== e || re !== t
      ? ((nu = null), (au = ht() + 500), Gn(e, t))
      : (qn = al(e, t));
    e: do
      try {
        if (be !== 0 && ne !== null) {
          t = ne;
          var u = St;
          t: switch (be) {
            case 1:
              ((be = 0), (St = null), Xn(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (bf(u)) {
                ((be = 0), (St = null), oh(t));
                break;
              }
              ((t = function () {
                ((be !== 2 && be !== 9) || je !== e || (be = 7), Kt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              be = 7;
              break e;
            case 4:
              be = 5;
              break e;
            case 7:
              bf(u)
                ? ((be = 0), (St = null), oh(t))
                : ((be = 0), (St = null), Xn(e, t, u, 7));
              break;
            case 5:
              var o = null;
              switch (ne.tag) {
                case 26:
                  o = ne.memoizedState;
                case 5:
                case 27:
                  var m = ne;
                  if (o ? Jh(o) : m.stateNode.complete) {
                    ((be = 0), (St = null));
                    var v = m.sibling;
                    if (v !== null) ne = v;
                    else {
                      var j = m.return;
                      j !== null ? ((ne = j), uu(j)) : (ne = null);
                    }
                    break t;
                  }
              }
              ((be = 0), (St = null), Xn(e, t, u, 5));
              break;
            case 6:
              ((be = 0), (St = null), Xn(e, t, u, 6));
              break;
            case 8:
              (wc(), (Ue = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ey();
        break;
      } catch (N) {
        ih(e, N);
      }
    while (!0);
    return (
      (ea = Ia = null),
      (O.H = n),
      (O.A = i),
      (pe = a),
      ne !== null ? 0 : ((je = null), (re = 0), Ti(), Ue)
    );
  }
  function Ey() {
    for (; ne !== null && !Zp(); ) sh(ne);
  }
  function sh(e) {
    var t = zd(e.alternate, e, oa);
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (ne = t));
  }
  function oh(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rd(a, t, t.pendingProps, t.type, void 0, re);
        break;
      case 11:
        t = Rd(a, t, t.pendingProps, t.type.render, t.ref, re);
        break;
      case 5:
        Fr(t);
      default:
        (Ud(a, t), (t = ne = cf(t, oa)), (t = zd(a, t, oa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (ne = t));
  }
  function Xn(e, t, a, n) {
    ((ea = Ia = null), Fr(t), (Mn = null), (bl = 0));
    var i = t.return;
    try {
      if (sy(e, i, t, a, re)) {
        ((Ue = 1), ki(e, Dt(a, e.current)), (ne = null));
        return;
      }
    } catch (u) {
      if (i !== null) throw ((ne = i), u);
      ((Ue = 1), ki(e, Dt(a, e.current)), (ne = null));
      return;
    }
    t.flags & 32768
      ? (oe || n === 1
          ? (e = !0)
          : qn || (re & 536870912) !== 0
            ? (e = !1)
            : ((Da = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = vt.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        fh(t, e))
      : uu(t);
  }
  function uu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fh(t, Da);
        return;
      }
      e = t.return;
      var a = dy(t.alternate, t, oa);
      if (a !== null) {
        ne = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ne = t;
        return;
      }
      ne = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function fh(e, t) {
    do {
      var a = hy(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (ne = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ne = e;
        return;
      }
      ne = e = a;
    } while (e !== null);
    ((Ue = 6), (ne = null));
  }
  function dh(e, t, a, n, i, u, o, m, v) {
    e.cancelPendingCommit = null;
    do ru();
    while (Ze !== 0);
    if ((pe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Ar),
        eg(e, a, u, o, m, v),
        e === je && ((ne = je = null), (re = 0)),
        (Yn = t),
        (Ma = e),
        (fa = a),
        (Oc = u),
        (Mc = i),
        (th = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ty(si, function () {
              return (yh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = O.T), (O.T = null), (i = L.p), (L.p = 2), (o = pe), (pe |= 4));
        try {
          my(e, t, a);
        } finally {
          ((pe = o), (L.p = i), (O.T = n));
        }
      }
      ((Ze = 1), hh(), mh(), ph());
    }
  }
  function hh() {
    if (Ze === 1) {
      Ze = 0;
      var e = Ma,
        t = Yn,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var n = L.p;
        L.p = 2;
        var i = pe;
        pe |= 4;
        try {
          kd(t, e);
          var u = kc,
            o = Io(e.containerInfo),
            m = u.focusedElem,
            v = u.selectionRange;
          if (
            o !== m &&
            m &&
            m.ownerDocument &&
            Wo(m.ownerDocument.documentElement, m)
          ) {
            if (v !== null && vr(m)) {
              var j = v.start,
                N = v.end;
              if ((N === void 0 && (N = j), "selectionStart" in m))
                ((m.selectionStart = j),
                  (m.selectionEnd = Math.min(N, m.value.length)));
              else {
                var z = m.ownerDocument || document,
                  R = (z && z.defaultView) || window;
                if (R.getSelection) {
                  var C = R.getSelection(),
                    G = m.textContent.length,
                    J = Math.min(v.start, G),
                    _e = v.end === void 0 ? J : Math.min(v.end, G);
                  !C.extend && J > _e && ((o = _e), (_e = J), (J = o));
                  var x = Fo(m, J),
                    b = Fo(m, _e);
                  if (
                    x &&
                    b &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== x.node ||
                      C.anchorOffset !== x.offset ||
                      C.focusNode !== b.node ||
                      C.focusOffset !== b.offset)
                  ) {
                    var _ = z.createRange();
                    (_.setStart(x.node, x.offset),
                      C.removeAllRanges(),
                      J > _e
                        ? (C.addRange(_), C.extend(b.node, b.offset))
                        : (_.setEnd(b.node, b.offset), C.addRange(_)));
                  }
                }
              }
            }
            for (z = [], C = m; (C = C.parentNode); )
              C.nodeType === 1 &&
                z.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < z.length;
              m++
            ) {
              var M = z[m];
              ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
            }
          }
          ((bu = !!Kc), (kc = Kc = null));
        } finally {
          ((pe = i), (L.p = n), (O.T = a));
        }
      }
      ((e.current = t), (Ze = 2));
    }
  }
  function mh() {
    if (Ze === 2) {
      Ze = 0;
      var e = Ma,
        t = Yn,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var n = L.p;
        L.p = 2;
        var i = pe;
        pe |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          ((pe = i), (L.p = n), (O.T = a));
        }
      }
      Ze = 3;
    }
  }
  function ph() {
    if (Ze === 4 || Ze === 3) {
      ((Ze = 0), Qp());
      var e = Ma,
        t = Yn,
        a = fa,
        n = th;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ze = 5)
        : ((Ze = 0), (Yn = Ma = null), gh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Oa = null),
        Pu(a),
        (t = t.stateNode),
        mt && typeof mt.onCommitFiberRoot == "function")
      )
        try {
          mt.onCommitFiberRoot(tl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = O.T), (i = L.p), (L.p = 2), (O.T = null));
        try {
          for (var u = e.onRecoverableError, o = 0; o < n.length; o++) {
            var m = n[o];
            u(m.value, { componentStack: m.stack });
          }
        } finally {
          ((O.T = t), (L.p = i));
        }
      }
      ((fa & 3) !== 0 && ru(),
        Kt(e),
        (i = e.pendingLanes),
        (a & 261930) !== 0 && (i & 42) !== 0
          ? e === zc
            ? Bl++
            : ((Bl = 0), (zc = e))
          : (Bl = 0),
        Hl(0));
    }
  }
  function gh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), yl(t)));
  }
  function ru() {
    return (hh(), mh(), ph(), yh());
  }
  function yh() {
    if (Ze !== 5) return !1;
    var e = Ma,
      t = Oc;
    Oc = 0;
    var a = Pu(fa),
      n = O.T,
      i = L.p;
    try {
      ((L.p = 32 > a ? 32 : a), (O.T = null), (a = Mc), (Mc = null));
      var u = Ma,
        o = fa;
      if (((Ze = 0), (Yn = Ma = null), (fa = 0), (pe & 6) !== 0))
        throw Error(c(331));
      var m = pe;
      if (
        ((pe |= 4),
        Id(u.current),
        Jd(u, u.current, o, a),
        (pe = m),
        Hl(0, !1),
        mt && typeof mt.onPostCommitFiberRoot == "function")
      )
        try {
          mt.onPostCommitFiberRoot(tl, u);
        } catch {}
      return !0;
    } finally {
      ((L.p = i), (O.T = n), gh(e, t));
    }
  }
  function vh(e, t, a) {
    ((t = Dt(a, t)),
      (t = fc(e.stateNode, t, 2)),
      (e = Ta(e, t, 2)),
      e !== null && (nl(e, 2), Kt(e)));
  }
  function Se(e, t, a) {
    if (e.tag === 3) vh(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vh(t, e, a);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Oa === null || !Oa.has(n)))
          ) {
            ((e = Dt(a, e)),
              (a = bd(2)),
              (n = Ta(t, a, 2)),
              n !== null && (Sd(a, n, t, e), nl(n, 2), Kt(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new yy();
      var i = new Set();
      n.set(t, i);
    } else ((i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i)));
    i.has(a) ||
      ((Cc = !0), i.add(a), (e = xy.bind(null, e, t, a)), t.then(e, e));
  }
  function xy(e, t, a) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      je === e &&
        (re & a) === a &&
        (Ue === 4 || (Ue === 3 && (re & 62914560) === re && 300 > ht() - tu)
          ? (pe & 2) === 0 && Gn(e, 0)
          : (Dc |= a),
        Vn === re && (Vn = 0)),
      Kt(e));
  }
  function bh(e, t) {
    (t === 0 && (t = fo()), (e = Ja(e, t)), e !== null && (nl(e, t), Kt(e)));
  }
  function Ay(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), bh(e, a));
  }
  function _y(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (n !== null && n.delete(t), bh(e, a));
  }
  function Ty(e, t) {
    return Ju(e, t);
  }
  var cu = null,
    Zn = null,
    Hc = !1,
    su = !1,
    Lc = !1,
    wa = 0;
  function Kt(e) {
    (e !== Zn &&
      e.next === null &&
      (Zn === null ? (cu = Zn = e) : (Zn = Zn.next = e)),
      (su = !0),
      Hc || ((Hc = !0), Ry()));
  }
  function Hl(e, t) {
    if (!Lc && su) {
      Lc = !0;
      do
        for (var a = !1, n = cu; n !== null; ) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var o = n.suspendedLanes,
                m = n.pingedLanes;
              ((u = (1 << (31 - pt(42 | e) + 1)) - 1),
                (u &= i & ~(o & ~m)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), Ah(n, u));
          } else
            ((u = re),
              (u = hi(
                n,
                n === je ? u : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || al(n, u) || ((a = !0), Ah(n, u)));
          n = n.next;
        }
      while (a);
      Lc = !1;
    }
  }
  function jy() {
    Sh();
  }
  function Sh() {
    su = Hc = !1;
    var e = 0;
    wa !== 0 && Hy() && (e = wa);
    for (var t = ht(), a = null, n = cu; n !== null; ) {
      var i = n.next,
        u = Eh(n, t);
      (u === 0
        ? ((n.next = null),
          a === null ? (cu = i) : (a.next = i),
          i === null && (Zn = a))
        : ((a = n), (e !== 0 || (u & 3) !== 0) && (su = !0)),
        (n = i));
    }
    ((Ze !== 0 && Ze !== 5) || Hl(e), wa !== 0 && (wa = 0));
  }
  function Eh(e, t) {
    for (
      var a = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var o = 31 - pt(u),
        m = 1 << o,
        v = i[o];
      (v === -1
        ? ((m & a) === 0 || (m & n) !== 0) && (i[o] = Pp(m, t))
        : v <= t && (e.expiredLanes |= m),
        (u &= ~m));
    }
    if (
      ((t = je),
      (a = re),
      (a = hi(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      a === 0 ||
        (e === t && (be === 2 || be === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Fu(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || al(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((n !== null && Fu(n), Pu(a))) {
        case 2:
        case 8:
          a = so;
          break;
        case 32:
          a = si;
          break;
        case 268435456:
          a = oo;
          break;
        default:
          a = si;
      }
      return (
        (n = xh.bind(null, e)),
        (a = Ju(a, n)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      n !== null && n !== null && Fu(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function xh(e, t) {
    if (Ze !== 0 && Ze !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (ru() && e.callbackNode !== a) return null;
    var n = re;
    return (
      (n = hi(
        e,
        e === je ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (nh(e, n, t),
          Eh(e, ht()),
          e.callbackNode != null && e.callbackNode === a
            ? xh.bind(null, e)
            : null)
    );
  }
  function Ah(e, t) {
    if (ru()) return null;
    nh(e, t, !0);
  }
  function Ry() {
    qy(function () {
      (pe & 6) !== 0 ? Ju(co, jy) : Sh();
    });
  }
  function qc() {
    if (wa === 0) {
      var e = Dn;
      (e === 0 && ((e = oi), (oi <<= 1), (oi & 261888) === 0 && (oi = 256)),
        (wa = e));
    }
    return wa;
  }
  function _h(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : yi("" + e);
  }
  function Th(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Cy(e, t, a, n, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var u = _h((i[lt] || null).action),
        o = n.submitter;
      o &&
        ((t = (t = o[lt] || null)
          ? _h(t.formAction)
          : o.getAttribute("formAction")),
        t !== null && ((u = t), (o = null)));
      var m = new Ei("action", "action", null, n, i);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (wa !== 0) {
                  var v = o ? Th(i, o) : new FormData(i);
                  ic(
                    a,
                    { pending: !0, data: v, method: i.method, action: u },
                    null,
                    v,
                  );
                }
              } else
                typeof u == "function" &&
                  (m.preventDefault(),
                  (v = o ? Th(i, o) : new FormData(i)),
                  ic(
                    a,
                    { pending: !0, data: v, method: i.method, action: u },
                    u,
                    v,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Vc = 0; Vc < xr.length; Vc++) {
    var Yc = xr[Vc],
      Dy = Yc.toLowerCase(),
      Ny = Yc[0].toUpperCase() + Yc.slice(1);
    Ht(Dy, "on" + Ny);
  }
  (Ht(tf, "onAnimationEnd"),
    Ht(af, "onAnimationIteration"),
    Ht(nf, "onAnimationStart"),
    Ht("dblclick", "onDoubleClick"),
    Ht("focusin", "onFocus"),
    Ht("focusout", "onBlur"),
    Ht(Kg, "onTransitionRun"),
    Ht(kg, "onTransitionStart"),
    Ht($g, "onTransitionCancel"),
    Ht(lf, "onTransitionEnd"),
    pn("onMouseEnter", ["mouseout", "mouseover"]),
    pn("onMouseLeave", ["mouseout", "mouseover"]),
    pn("onPointerEnter", ["pointerout", "pointerover"]),
    pn("onPointerLeave", ["pointerout", "pointerover"]),
    Qa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Qa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Qa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Qa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ll =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Oy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ll),
    );
  function jh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a],
        i = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var o = n.length - 1; 0 <= o; o--) {
            var m = n[o],
              v = m.instance,
              j = m.currentTarget;
            if (((m = m.listener), v !== u && i.isPropagationStopped()))
              break e;
            ((u = m), (i.currentTarget = j));
            try {
              u(i);
            } catch (N) {
              _i(N);
            }
            ((i.currentTarget = null), (u = v));
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((m = n[o]),
              (v = m.instance),
              (j = m.currentTarget),
              (m = m.listener),
              v !== u && i.isPropagationStopped())
            )
              break e;
            ((u = m), (i.currentTarget = j));
            try {
              u(i);
            } catch (N) {
              _i(N);
            }
            ((i.currentTarget = null), (u = v));
          }
      }
    }
  }
  function le(e, t) {
    var a = t[er];
    a === void 0 && (a = t[er] = new Set());
    var n = e + "__bubble";
    a.has(n) || (Rh(t, e, 2, !1), a.add(n));
  }
  function Gc(e, t, a) {
    var n = 0;
    (t && (n |= 4), Rh(a, e, n, t));
  }
  var ou = "_reactListening" + Math.random().toString(36).slice(2);
  function Xc(e) {
    if (!e[ou]) {
      ((e[ou] = !0),
        bo.forEach(function (a) {
          a !== "selectionchange" && (Oy.has(a) || Gc(a, !1, e), Gc(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ou] || ((t[ou] = !0), Gc("selectionchange", !1, t));
    }
  }
  function Rh(e, t, a, n) {
    switch (am(t)) {
      case 2:
        var i = i0;
        break;
      case 8:
        i = u0;
        break;
      default:
        i = ls;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !sr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function Zc(e, t, a, n, i) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var m = n.stateNode.containerInfo;
          if (m === i) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var v = o.tag;
              if ((v === 3 || v === 4) && o.stateNode.containerInfo === i)
                return;
              o = o.return;
            }
          for (; m !== null; ) {
            if (((o = dn(m)), o === null)) return;
            if (((v = o.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              n = u = o;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    Oo(function () {
      var j = u,
        N = rr(a),
        z = [];
      e: {
        var R = uf.get(e);
        if (R !== void 0) {
          var C = Ei,
            G = e;
          switch (e) {
            case "keypress":
              if (bi(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = _g;
              break;
            case "focusin":
              ((G = "focus"), (C = hr));
              break;
            case "focusout":
              ((G = "blur"), (C = hr));
              break;
            case "beforeblur":
            case "afterblur":
              C = hr;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = wo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = dg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Rg;
              break;
            case tf:
            case af:
            case nf:
              C = pg;
              break;
            case lf:
              C = Dg;
              break;
            case "scroll":
            case "scrollend":
              C = og;
              break;
            case "wheel":
              C = Og;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = yg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Bo;
              break;
            case "toggle":
            case "beforetoggle":
              C = zg;
          }
          var J = (t & 4) !== 0,
            _e = !J && (e === "scroll" || e === "scrollend"),
            x = J ? (R !== null ? R + "Capture" : null) : R;
          J = [];
          for (var b = j, _; b !== null; ) {
            var M = b;
            if (
              ((_ = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                _ === null ||
                x === null ||
                ((M = ul(b, x)), M != null && J.push(ql(b, M, _))),
              _e)
            )
              break;
            b = b.return;
          }
          0 < J.length &&
            ((R = new C(R, G, null, a, N)), z.push({ event: R, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((R = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            R &&
              a !== ur &&
              (G = a.relatedTarget || a.fromElement) &&
              (dn(G) || G[fn]))
          )
            break e;
          if (
            (C || R) &&
            ((R =
              N.window === N
                ? N
                : (R = N.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            C
              ? ((G = a.relatedTarget || a.toElement),
                (C = j),
                (G = G ? dn(G) : null),
                G !== null &&
                  ((_e = h(G)),
                  (J = G.tag),
                  G !== _e || (J !== 5 && J !== 27 && J !== 6)) &&
                  (G = null))
              : ((C = null), (G = j)),
            C !== G)
          ) {
            if (
              ((J = wo),
              (M = "onMouseLeave"),
              (x = "onMouseEnter"),
              (b = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Bo),
                (M = "onPointerLeave"),
                (x = "onPointerEnter"),
                (b = "pointer")),
              (_e = C == null ? R : il(C)),
              (_ = G == null ? R : il(G)),
              (R = new J(M, b + "leave", C, a, N)),
              (R.target = _e),
              (R.relatedTarget = _),
              (M = null),
              dn(N) === j &&
                ((J = new J(x, b + "enter", G, a, N)),
                (J.target = _),
                (J.relatedTarget = _e),
                (M = J)),
              (_e = M),
              C && G)
            )
              t: {
                for (J = My, x = C, b = G, _ = 0, M = x; M; M = J(M)) _++;
                M = 0;
                for (var K = b; K; K = J(K)) M++;
                for (; 0 < _ - M; ) ((x = J(x)), _--);
                for (; 0 < M - _; ) ((b = J(b)), M--);
                for (; _--; ) {
                  if (x === b || (b !== null && x === b.alternate)) {
                    J = x;
                    break t;
                  }
                  ((x = J(x)), (b = J(b)));
                }
                J = null;
              }
            else J = null;
            (C !== null && Ch(z, R, C, J, !1),
              G !== null && _e !== null && Ch(z, _e, G, J, !0));
          }
        }
        e: {
          if (
            ((R = j ? il(j) : window),
            (C = R.nodeName && R.nodeName.toLowerCase()),
            C === "select" || (C === "input" && R.type === "file"))
          )
            var de = Zo;
          else if (Go(R))
            if (Qo) de = Xg;
            else {
              de = Yg;
              var Z = Vg;
            }
          else
            ((C = R.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? j && ir(j.elementType) && (de = Zo)
                : (de = Gg));
          if (de && (de = de(e, j))) {
            Xo(z, de, a, N);
            break e;
          }
          (Z && Z(e, R, j),
            e === "focusout" &&
              j &&
              R.type === "number" &&
              j.memoizedProps.value != null &&
              lr(R, "number", R.value));
        }
        switch (((Z = j ? il(j) : window), e)) {
          case "focusin":
            (Go(Z) || Z.contentEditable === "true") &&
              ((En = Z), (br = j), (ml = null));
            break;
          case "focusout":
            ml = br = En = null;
            break;
          case "mousedown":
            Sr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Sr = !1), Po(z, a, N));
            break;
          case "selectionchange":
            if (Qg) break;
          case "keydown":
          case "keyup":
            Po(z, a, N);
        }
        var te;
        if (pr)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Sn
            ? Vo(e, a) && (ce = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (ce = "onCompositionStart");
        (ce &&
          (Ho &&
            a.locale !== "ko" &&
            (Sn || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && Sn && (te = Mo())
              : ((va = N),
                (or = "value" in va ? va.value : va.textContent),
                (Sn = !0))),
          (Z = fu(j, ce)),
          0 < Z.length &&
            ((ce = new Uo(ce, e, null, a, N)),
            z.push({ event: ce, listeners: Z }),
            te
              ? (ce.data = te)
              : ((te = Yo(a)), te !== null && (ce.data = te)))),
          (te = Ug ? Bg(e, a) : Hg(e, a)) &&
            ((ce = fu(j, "onBeforeInput")),
            0 < ce.length &&
              ((Z = new Uo("onBeforeInput", "beforeinput", null, a, N)),
              z.push({ event: Z, listeners: ce }),
              (Z.data = te))),
          Cy(z, e, j, a, N));
      }
      jh(z, t);
    });
  }
  function ql(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function fu(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = ul(e, a)),
          i != null && n.unshift(ql(e, i, u)),
          (i = ul(e, t)),
          i != null && n.push(ql(e, i, u))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function My(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ch(e, t, a, n, i) {
    for (var u = t._reactName, o = []; a !== null && a !== n; ) {
      var m = a,
        v = m.alternate,
        j = m.stateNode;
      if (((m = m.tag), v !== null && v === n)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        j === null ||
        ((v = j),
        i
          ? ((j = ul(a, u)), j != null && o.unshift(ql(a, j, v)))
          : i || ((j = ul(a, u)), j != null && o.push(ql(a, j, v)))),
        (a = a.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var zy = /\r\n?/g,
    wy = /\u0000|\uFFFD/g;
  function Dh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        zy,
        `
`,
      )
      .replace(wy, "");
  }
  function Nh(e, t) {
    return ((t = Dh(t)), Dh(e) === t);
  }
  function Ae(e, t, a, n, i, u) {
    switch (a) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || yn(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            yn(e, "" + n);
        break;
      case "className":
        pi(e, "class", n);
        break;
      case "tabIndex":
        pi(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pi(e, a, n);
        break;
      case "style":
        Do(e, n, u);
        break;
      case "data":
        if (t !== "object") {
          pi(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((n = yi("" + n)), e.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (t !== "input" && Ae(e, t, "name", i.name, i, null),
                Ae(e, t, "formEncType", i.formEncType, i, null),
                Ae(e, t, "formMethod", i.formMethod, i, null),
                Ae(e, t, "formTarget", i.formTarget, i, null))
              : (Ae(e, t, "encType", i.encType, i, null),
                Ae(e, t, "method", i.method, i, null),
                Ae(e, t, "target", i.target, i, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((n = yi("" + n)), e.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
        break;
      case "onScroll":
        n != null && le("scroll", e);
        break;
      case "onScrollEnd":
        n != null && le("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
          if (((a = n.__html), a != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = yi("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "" + n)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(a, n)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(a)
          : e.setAttribute(a, n);
        break;
      case "popover":
        (le("beforetoggle", e), le("toggle", e), mi(e, "popover", n));
        break;
      case "xlinkActuate":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Jt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        mi(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = cg.get(a) || a), mi(e, a, n));
    }
  }
  function Qc(e, t, a, n, i, u) {
    switch (a) {
      case "style":
        Do(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
          if (((a = n.__html), a != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? yn(e, n)
          : (typeof n == "number" || typeof n == "bigint") && yn(e, "" + n);
        break;
      case "onScroll":
        n != null && le("scroll", e);
        break;
      case "onScrollEnd":
        n != null && le("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!So.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((i = a.endsWith("Capture")),
              (t = a.slice(2, i ? a.length - 7 : void 0)),
              (u = e[lt] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && e.removeEventListener(t, u, i),
              typeof n == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, n, i));
              break e;
            }
            a in e
              ? (e[a] = n)
              : n === !0
                ? e.setAttribute(a, "")
                : mi(e, a, n);
          }
    }
  }
  function Ie(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (le("error", e), le("load", e));
        var n = !1,
          i = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var o = a[u];
            if (o != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ae(e, t, u, o, a, null);
              }
          }
        (i && Ae(e, t, "srcSet", a.srcSet, a, null),
          n && Ae(e, t, "src", a.src, a, null));
        return;
      case "input":
        le("invalid", e);
        var m = (u = o = i = null),
          v = null,
          j = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var N = a[n];
            if (N != null)
              switch (n) {
                case "name":
                  i = N;
                  break;
                case "type":
                  o = N;
                  break;
                case "checked":
                  v = N;
                  break;
                case "defaultChecked":
                  j = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  m = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(c(137, t));
                  break;
                default:
                  Ae(e, t, n, N, a, null);
              }
          }
        To(e, u, m, v, j, o, i, !1);
        return;
      case "select":
        (le("invalid", e), (n = o = u = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((m = a[i]), m != null))
            switch (i) {
              case "value":
                u = m;
                break;
              case "defaultValue":
                o = m;
                break;
              case "multiple":
                n = m;
              default:
                Ae(e, t, i, m, a, null);
            }
        ((t = u),
          (a = o),
          (e.multiple = !!n),
          t != null ? gn(e, !!n, t, !1) : a != null && gn(e, !!n, a, !0));
        return;
      case "textarea":
        (le("invalid", e), (u = i = n = null));
        for (o in a)
          if (a.hasOwnProperty(o) && ((m = a[o]), m != null))
            switch (o) {
              case "value":
                n = m;
                break;
              case "defaultValue":
                i = m;
                break;
              case "children":
                u = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(91));
                break;
              default:
                Ae(e, t, o, m, a, null);
            }
        Ro(e, n, i, u);
        return;
      case "option":
        for (v in a)
          a.hasOwnProperty(v) &&
            ((n = a[v]), n != null) &&
            (v === "selected"
              ? (e.selected =
                  n && typeof n != "function" && typeof n != "symbol")
              : Ae(e, t, v, n, a, null));
        return;
      case "dialog":
        (le("beforetoggle", e),
          le("toggle", e),
          le("cancel", e),
          le("close", e));
        break;
      case "iframe":
      case "object":
        le("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ll.length; n++) le(Ll[n], e);
        break;
      case "image":
        (le("error", e), le("load", e));
        break;
      case "details":
        le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (le("error", e), le("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in a)
          if (a.hasOwnProperty(j) && ((n = a[j]), n != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ae(e, t, j, n, a, null);
            }
        return;
      default:
        if (ir(t)) {
          for (N in a)
            a.hasOwnProperty(N) &&
              ((n = a[N]), n !== void 0 && Qc(e, t, N, n, a, void 0));
          return;
        }
    }
    for (m in a)
      a.hasOwnProperty(m) && ((n = a[m]), n != null && Ae(e, t, m, n, a, null));
  }
  function Uy(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          u = null,
          o = null,
          m = null,
          v = null,
          j = null,
          N = null;
        for (C in a) {
          var z = a[C];
          if (a.hasOwnProperty(C) && z != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = z;
              default:
                n.hasOwnProperty(C) || Ae(e, t, C, null, n, z);
            }
        }
        for (var R in n) {
          var C = n[R];
          if (((z = a[R]), n.hasOwnProperty(R) && (C != null || z != null)))
            switch (R) {
              case "type":
                u = C;
                break;
              case "name":
                i = C;
                break;
              case "checked":
                j = C;
                break;
              case "defaultChecked":
                N = C;
                break;
              case "value":
                o = C;
                break;
              case "defaultValue":
                m = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(c(137, t));
                break;
              default:
                C !== z && Ae(e, t, R, C, n, z);
            }
        }
        nr(e, o, m, v, j, N, u, i);
        return;
      case "select":
        C = o = m = R = null;
        for (u in a)
          if (((v = a[u]), a.hasOwnProperty(u) && v != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                C = v;
              default:
                n.hasOwnProperty(u) || Ae(e, t, u, null, n, v);
            }
        for (i in n)
          if (
            ((u = n[i]),
            (v = a[i]),
            n.hasOwnProperty(i) && (u != null || v != null))
          )
            switch (i) {
              case "value":
                R = u;
                break;
              case "defaultValue":
                m = u;
                break;
              case "multiple":
                o = u;
              default:
                u !== v && Ae(e, t, i, u, n, v);
            }
        ((t = m),
          (a = o),
          (n = C),
          R != null
            ? gn(e, !!a, R, !1)
            : !!n != !!a &&
              (t != null ? gn(e, !!a, t, !0) : gn(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        C = R = null;
        for (m in a)
          if (
            ((i = a[m]),
            a.hasOwnProperty(m) && i != null && !n.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, m, null, n, i);
            }
        for (o in n)
          if (
            ((i = n[o]),
            (u = a[o]),
            n.hasOwnProperty(o) && (i != null || u != null))
          )
            switch (o) {
              case "value":
                R = i;
                break;
              case "defaultValue":
                C = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && Ae(e, t, o, i, n, u);
            }
        jo(e, R, C);
        return;
      case "option":
        for (var G in a)
          ((R = a[G]),
            a.hasOwnProperty(G) &&
              R != null &&
              !n.hasOwnProperty(G) &&
              (G === "selected" ? (e.selected = !1) : Ae(e, t, G, null, n, R)));
        for (v in n)
          ((R = n[v]),
            (C = a[v]),
            n.hasOwnProperty(v) &&
              R !== C &&
              (R != null || C != null) &&
              (v === "selected"
                ? (e.selected =
                    R && typeof R != "function" && typeof R != "symbol")
                : Ae(e, t, v, R, n, C)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in a)
          ((R = a[J]),
            a.hasOwnProperty(J) &&
              R != null &&
              !n.hasOwnProperty(J) &&
              Ae(e, t, J, null, n, R));
        for (j in n)
          if (
            ((R = n[j]),
            (C = a[j]),
            n.hasOwnProperty(j) && R !== C && (R != null || C != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(c(137, t));
                break;
              default:
                Ae(e, t, j, R, n, C);
            }
        return;
      default:
        if (ir(t)) {
          for (var _e in a)
            ((R = a[_e]),
              a.hasOwnProperty(_e) &&
                R !== void 0 &&
                !n.hasOwnProperty(_e) &&
                Qc(e, t, _e, void 0, n, R));
          for (N in n)
            ((R = n[N]),
              (C = a[N]),
              !n.hasOwnProperty(N) ||
                R === C ||
                (R === void 0 && C === void 0) ||
                Qc(e, t, N, R, n, C));
          return;
        }
    }
    for (var x in a)
      ((R = a[x]),
        a.hasOwnProperty(x) &&
          R != null &&
          !n.hasOwnProperty(x) &&
          Ae(e, t, x, null, n, R));
    for (z in n)
      ((R = n[z]),
        (C = a[z]),
        !n.hasOwnProperty(z) ||
          R === C ||
          (R == null && C == null) ||
          Ae(e, t, z, R, n, C));
  }
  function Oh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function By() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var i = a[n],
          u = i.transferSize,
          o = i.initiatorType,
          m = i.duration;
        if (u && m && Oh(o)) {
          for (o = 0, m = i.responseEnd, n += 1; n < a.length; n++) {
            var v = a[n],
              j = v.startTime;
            if (j > m) break;
            var N = v.transferSize,
              z = v.initiatorType;
            N &&
              Oh(z) &&
              ((v = v.responseEnd), (o += N * (v < m ? 1 : (m - j) / (v - j))));
          }
          if ((--n, (t += (8 * (u + o)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Kc = null,
    kc = null;
  function du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $c(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jc = null;
  function Hy() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Jc
        ? !1
        : ((Jc = e), !0)
      : ((Jc = null), !1);
  }
  var wh = typeof setTimeout == "function" ? setTimeout : void 0,
    Ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Uh = typeof Promise == "function" ? Promise : void 0,
    qy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Uh < "u"
          ? function (e) {
              return Uh.resolve(null).then(e).catch(Vy);
            }
          : wh;
  function Vy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ua(e) {
    return e === "head";
  }
  function Bh(e, t) {
    var a = t,
      n = 0;
    do {
      var i = a.nextSibling;
      if ((e.removeChild(a), i && i.nodeType === 8))
        if (((a = i.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (e.removeChild(i), $n(t));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") Vl(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), Vl(a));
          for (var u = a.firstChild; u; ) {
            var o = u.nextSibling,
              m = u.nodeName;
            (u[ll] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(u),
              (u = o));
          }
        } else a === "body" && Vl(e.ownerDocument.body);
      a = i;
    } while (a);
    $n(t);
  }
  function Hh(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = n;
    } while (a);
  }
  function Fc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Fc(a), tr(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Yy(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[ll])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = wt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Gy(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Wc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ic(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Xy(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Pc = null;
  function qh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return wt(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Vh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Yh(e, t, a) {
    switch (((t = du(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Vl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    tr(e);
  }
  var Ut = new Map(),
    Gh = new Set();
  function hu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var da = L.d;
  L.d = { f: Zy, r: Qy, D: Ky, C: ky, L: $y, m: Jy, X: Wy, S: Fy, M: Iy };
  function Zy() {
    var e = da.f(),
      t = lu();
    return e || t;
  }
  function Qy(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? id(t) : da.r(e);
  }
  var Qn = typeof document > "u" ? null : document;
  function Xh(e, t, a) {
    var n = Qn;
    if (n && typeof t == "string" && t) {
      var i = Rt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == "string" && (i += '[crossorigin="' + a + '"]'),
        Gh.has(i) ||
          (Gh.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          n.querySelector(i) === null &&
            ((t = n.createElement("link")),
            Ie(t, "link", e),
            Ke(t),
            n.head.appendChild(t))));
    }
  }
  function Ky(e) {
    (da.D(e), Xh("dns-prefetch", e, null));
  }
  function ky(e, t) {
    (da.C(e, t), Xh("preconnect", e, t));
  }
  function $y(e, t, a) {
    da.L(e, t, a);
    var n = Qn;
    if (n && e && t) {
      var i = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + Rt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (i += '[imagesizes="' + Rt(a.imageSizes) + '"]'))
        : (i += '[href="' + Rt(e) + '"]');
      var u = i;
      switch (t) {
        case "style":
          u = Kn(e);
          break;
        case "script":
          u = kn(e);
      }
      Ut.has(u) ||
        ((e = A(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        Ut.set(u, e),
        n.querySelector(i) !== null ||
          (t === "style" && n.querySelector(Yl(u))) ||
          (t === "script" && n.querySelector(Gl(u))) ||
          ((t = n.createElement("link")),
          Ie(t, "link", e),
          Ke(t),
          n.head.appendChild(t)));
    }
  }
  function Jy(e, t) {
    da.m(e, t);
    var a = Qn;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Rt(n) + '"][href="' + Rt(e) + '"]',
        u = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = kn(e);
      }
      if (
        !Ut.has(u) &&
        ((e = A({ rel: "modulepreload", href: e }, t)),
        Ut.set(u, e),
        a.querySelector(i) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Gl(u))) return;
        }
        ((n = a.createElement("link")),
          Ie(n, "link", e),
          Ke(n),
          a.head.appendChild(n));
      }
    }
  }
  function Fy(e, t, a) {
    da.S(e, t, a);
    var n = Qn;
    if (n && e) {
      var i = mn(n).hoistableStyles,
        u = Kn(e);
      t = t || "default";
      var o = i.get(u);
      if (!o) {
        var m = { loading: 0, preload: null };
        if ((o = n.querySelector(Yl(u)))) m.loading = 5;
        else {
          ((e = A({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Ut.get(u)) && es(e, a));
          var v = (o = n.createElement("link"));
          (Ke(v),
            Ie(v, "link", e),
            (v._p = new Promise(function (j, N) {
              ((v.onload = j), (v.onerror = N));
            })),
            v.addEventListener("load", function () {
              m.loading |= 1;
            }),
            v.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            mu(o, t, n));
        }
        ((o = { type: "stylesheet", instance: o, count: 1, state: m }),
          i.set(u, o));
      }
    }
  }
  function Wy(e, t) {
    da.X(e, t);
    var a = Qn;
    if (a && e) {
      var n = mn(a).hoistableScripts,
        i = kn(e),
        u = n.get(i);
      u ||
        ((u = a.querySelector(Gl(i))),
        u ||
          ((e = A({ src: e, async: !0 }, t)),
          (t = Ut.get(i)) && ts(e, t),
          (u = a.createElement("script")),
          Ke(u),
          Ie(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        n.set(i, u));
    }
  }
  function Iy(e, t) {
    da.M(e, t);
    var a = Qn;
    if (a && e) {
      var n = mn(a).hoistableScripts,
        i = kn(e),
        u = n.get(i);
      u ||
        ((u = a.querySelector(Gl(i))),
        u ||
          ((e = A({ src: e, async: !0, type: "module" }, t)),
          (t = Ut.get(i)) && ts(e, t),
          (u = a.createElement("script")),
          Ke(u),
          Ie(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        n.set(i, u));
    }
  }
  function Zh(e, t, a, n) {
    var i = (i = ae.current) ? hu(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Kn(a.href)),
            (a = mn(i).hoistableStyles),
            (n = a.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Kn(a.href);
          var u = mn(i).hoistableStyles,
            o = u.get(e);
          if (
            (o ||
              ((i = i.ownerDocument || i),
              (o = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, o),
              (u = i.querySelector(Yl(e))) &&
                !u._p &&
                ((o.instance = u), (o.state.loading = 5)),
              Ut.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ut.set(e, a),
                u || Py(i, e, a, o.state))),
            t && n === null)
          )
            throw Error(c(528, ""));
          return o;
        }
        if (t && n !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = kn(a)),
              (a = mn(i).hoistableScripts),
              (n = a.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function Kn(e) {
    return 'href="' + Rt(e) + '"';
  }
  function Yl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qh(e) {
    return A({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Py(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Ie(t, "link", a),
        Ke(t),
        e.head.appendChild(t));
  }
  function kn(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function Gl(e) {
    return "script[async]" + e;
  }
  function Kh(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Rt(a.href) + '"]');
          if (n) return ((t.instance = n), Ke(n), n);
          var i = A({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Ke(n),
            Ie(n, "style", i),
            mu(n, a.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          i = Kn(a.href);
          var u = e.querySelector(Yl(i));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Ke(u), u);
          ((n = Qh(a)),
            (i = Ut.get(i)) && es(n, i),
            (u = (e.ownerDocument || e).createElement("link")),
            Ke(u));
          var o = u;
          return (
            (o._p = new Promise(function (m, v) {
              ((o.onload = m), (o.onerror = v));
            })),
            Ie(u, "link", n),
            (t.state.loading |= 4),
            mu(u, a.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = kn(a.src)),
            (i = e.querySelector(Gl(u)))
              ? ((t.instance = i), Ke(i), i)
              : ((n = a),
                (i = Ut.get(u)) && ((n = A({}, a)), ts(n, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Ke(i),
                Ie(i, "link", n),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), mu(n, a.precedence, e));
    return t.instance;
  }
  function mu(e, t, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = n.length ? n[n.length - 1] : null,
        u = i,
        o = 0;
      o < n.length;
      o++
    ) {
      var m = n[o];
      if (m.dataset.precedence === t) u = m;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function es(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ts(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var pu = null;
  function kh(e, t, a) {
    if (pu === null) {
      var n = new Map(),
        i = (pu = new Map());
      i.set(a, n);
    } else ((i = pu), (n = i.get(a)), n || ((n = new Map()), i.set(a, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var u = a[i];
      if (
        !(
          u[ll] ||
          u[$e] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = u.getAttribute(t) || "";
        o = e + o;
        var m = n.get(o);
        m ? m.push(u) : n.set(o, [u]);
      }
    }
    return n;
  }
  function $h(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function e0(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function t0(e, t, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var i = Kn(n.href),
          u = t.querySelector(Yl(i));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = gu.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = u),
            Ke(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (n = Qh(n)),
          (i = Ut.get(i)) && es(n, i),
          (u = u.createElement("link")),
          Ke(u));
        var o = u;
        ((o._p = new Promise(function (m, v) {
          ((o.onload = m), (o.onerror = v));
        })),
          Ie(u, "link", n),
          (a.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = gu.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var as = 0;
  function a0(e, t) {
    return (
      e.stylesheets && e.count === 0 && vu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((e.stylesheets && vu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && as === 0 && (as = 62500 * By());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && vu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > as ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function gu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var yu = null;
  function vu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (yu = new Map()),
        t.forEach(n0, e),
        (yu = null),
        gu.call(e)));
  }
  function n0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = yu.get(e);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), yu.set(e, a));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < i.length;
          u++
        ) {
          var o = i[u];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") &&
            (a.set(o.dataset.precedence, o), (n = o));
        }
        n && a.set(null, n);
      }
      ((i = t.instance),
        (o = i.getAttribute("data-precedence")),
        (u = a.get(o) || n),
        u === n && a.set(null, i),
        a.set(o, i),
        this.count++,
        (n = gu.bind(this)),
        i.addEventListener("load", n),
        i.addEventListener("error", n),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Xl = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function l0(e, t, a, n, i, u, o, m, v) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wu(0)),
      (this.hiddenUpdates = Wu(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map()));
  }
  function Fh(e, t, a, n, i, u, o, m, v, j, N, z) {
    return (
      (e = new l0(e, t, a, o, v, j, N, z, m)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = yt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Ur()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: n, isDehydrated: a, cache: t }),
      qr(u),
      e
    );
  }
  function Wh(e) {
    return e ? ((e = _n), e) : _n;
  }
  function Ih(e, t, a, n, i, u) {
    ((i = Wh(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = _a(t)),
      (n.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (a = Ta(e, n, t)),
      a !== null && (ot(a, e, t), El(a, e, t)));
  }
  function Ph(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ns(e, t) {
    (Ph(e, t), (e = e.alternate) && Ph(e, t));
  }
  function em(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ja(e, 67108864);
      (t !== null && ot(t, e, 67108864), ns(e, 67108864));
    }
  }
  function tm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xt();
      t = Iu(t);
      var a = Ja(e, t);
      (a !== null && ot(a, e, t), ns(e, t));
    }
  }
  var bu = !0;
  function i0(e, t, a, n) {
    var i = O.T;
    O.T = null;
    var u = L.p;
    try {
      ((L.p = 2), ls(e, t, a, n));
    } finally {
      ((L.p = u), (O.T = i));
    }
  }
  function u0(e, t, a, n) {
    var i = O.T;
    O.T = null;
    var u = L.p;
    try {
      ((L.p = 8), ls(e, t, a, n));
    } finally {
      ((L.p = u), (O.T = i));
    }
  }
  function ls(e, t, a, n) {
    if (bu) {
      var i = is(n);
      if (i === null) (Zc(e, t, n, Su, a), nm(e, n));
      else if (c0(i, e, t, a, n)) n.stopPropagation();
      else if ((nm(e, n), t & 4 && -1 < r0.indexOf(e))) {
        for (; i !== null; ) {
          var u = hn(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var o = Za(u.pendingLanes);
                  if (o !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; o; ) {
                      var v = 1 << (31 - pt(o));
                      ((m.entanglements[1] |= v), (o &= ~v));
                    }
                    (Kt(u), (pe & 6) === 0 && ((au = ht() + 500), Hl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = Ja(u, 2)), m !== null && ot(m, u, 2), lu(), ns(u, 2));
            }
          if (((u = is(n)), u === null && Zc(e, t, n, Su, a), u === i)) break;
          i = u;
        }
        i !== null && n.stopPropagation();
      } else Zc(e, t, n, null, a);
    }
  }
  function is(e) {
    return ((e = rr(e)), us(e));
  }
  var Su = null;
  function us(e) {
    if (((Su = null), (e = dn(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = S(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Su = e), null);
  }
  function am(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Kp()) {
          case co:
            return 2;
          case so:
            return 8;
          case si:
          case kp:
            return 32;
          case oo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rs = !1,
    Ba = null,
    Ha = null,
    La = null,
    Zl = new Map(),
    Ql = new Map(),
    qa = [],
    r0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function nm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Ha = null;
        break;
      case "mouseover":
      case "mouseout":
        La = null;
        break;
      case "pointerover":
      case "pointerout":
        Zl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ql.delete(t.pointerId);
    }
  }
  function Kl(e, t, a, n, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = hn(t)), t !== null && em(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function c0(e, t, a, n, i) {
    switch (t) {
      case "focusin":
        return ((Ba = Kl(Ba, e, t, a, n, i)), !0);
      case "dragenter":
        return ((Ha = Kl(Ha, e, t, a, n, i)), !0);
      case "mouseover":
        return ((La = Kl(La, e, t, a, n, i)), !0);
      case "pointerover":
        var u = i.pointerId;
        return (Zl.set(u, Kl(Zl.get(u) || null, e, t, a, n, i)), !0);
      case "gotpointercapture":
        return (
          (u = i.pointerId),
          Ql.set(u, Kl(Ql.get(u) || null, e, t, a, n, i)),
          !0
        );
    }
    return !1;
  }
  function lm(e) {
    var t = dn(e.target);
    if (t !== null) {
      var a = h(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = p(a)), t !== null)) {
            ((e.blockedOn = t),
              yo(e.priority, function () {
                tm(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = S(a)), t !== null)) {
            ((e.blockedOn = t),
              yo(e.priority, function () {
                tm(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = is(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((ur = n), a.target.dispatchEvent(n), (ur = null));
      } else return ((t = hn(a)), t !== null && em(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function im(e, t, a) {
    Eu(e) && a.delete(t);
  }
  function s0() {
    ((rs = !1),
      Ba !== null && Eu(Ba) && (Ba = null),
      Ha !== null && Eu(Ha) && (Ha = null),
      La !== null && Eu(La) && (La = null),
      Zl.forEach(im),
      Ql.forEach(im));
  }
  function xu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      rs ||
        ((rs = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, s0)));
  }
  var Au = null;
  function um(e) {
    Au !== e &&
      ((Au = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Au === e && (Au = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            n = e[t + 1],
            i = e[t + 2];
          if (typeof n != "function") {
            if (us(n || a) === null) continue;
            break;
          }
          var u = hn(a);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ic(u, { pending: !0, data: i, method: a.method, action: n }, n, i));
        }
      }));
  }
  function $n(e) {
    function t(v) {
      return xu(v, e);
    }
    (Ba !== null && xu(Ba, e),
      Ha !== null && xu(Ha, e),
      La !== null && xu(La, e),
      Zl.forEach(t),
      Ql.forEach(t));
    for (var a = 0; a < qa.length; a++) {
      var n = qa[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < qa.length && ((a = qa[0]), a.blockedOn === null); )
      (lm(a), a.blockedOn === null && qa.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var i = a[n],
          u = a[n + 1],
          o = i[lt] || null;
        if (typeof u == "function") o || um(a);
        else if (o) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (((i = u), (o = u[lt] || null))) m = o.formAction;
            else if (us(i) !== null) continue;
          } else m = o.action;
          (typeof m == "function" ? (a[n + 1] = m) : (a.splice(n, 3), (n -= 3)),
            um(a));
        }
      }
  }
  function rm() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (o) {
              return (i = o);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function cs(e) {
    this._internalRoot = e;
  }
  ((_u.prototype.render = cs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var a = t.current,
        n = xt();
      Ih(a, n, e, t, null, null);
    }),
    (_u.prototype.unmount = cs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Ih(e.current, 2, null, e, null, null), lu(), (t[fn] = null));
        }
      }));
  function _u(e) {
    this._internalRoot = e;
  }
  _u.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = go();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < qa.length && t !== 0 && t < qa[a].priority; a++);
      (qa.splice(a, 0, e), a === 0 && lm(e));
    }
  };
  var cm = r.version;
  if (cm !== "19.2.8") throw Error(c(527, cm, "19.2.8"));
  L.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? D(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var o0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tu.isDisabled && Tu.supportsFiber)
      try {
        ((tl = Tu.inject(o0)), (mt = Tu));
      } catch {}
  }
  return (
    ($l.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var a = !1,
        n = "",
        i = pd,
        u = gd,
        o = yd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Fh(e, 1, !1, null, null, a, n, null, i, u, o, rm)),
        (e[fn] = t.current),
        Xc(e),
        new cs(t)
      );
    }),
    ($l.hydrateRoot = function (e, t, a) {
      if (!f(e)) throw Error(c(299));
      var n = !1,
        i = "",
        u = pd,
        o = gd,
        m = yd,
        v = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (o = a.onCaughtError),
          a.onRecoverableError !== void 0 && (m = a.onRecoverableError),
          a.formState !== void 0 && (v = a.formState)),
        (t = Fh(e, 1, !0, t, a ?? null, n, i, v, u, o, m, rm)),
        (t.context = Wh(null)),
        (a = t.current),
        (n = xt()),
        (n = Iu(n)),
        (i = _a(n)),
        (i.callback = null),
        Ta(a, i, n),
        (a = n),
        (t.current.lanes = a),
        nl(t, a),
        Kt(t),
        (e[fn] = t.current),
        Xc(e),
        new _u(t)
      );
    }),
    ($l.version = "19.2.8"),
    $l
  );
}
var vm;
function S0() {
  if (vm) return fs.exports;
  vm = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (fs.exports = b0()), fs.exports);
}
var E0 = S0();
var Ls = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  Km = /^[\\/]{2}/;
function x0(l, r) {
  return r + l.replace(/\\/g, "/");
}
var bm = "popstate";
function Sm(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "pathname" in l &&
    "search" in l &&
    "hash" in l &&
    "state" in l &&
    "key" in l
  );
}
function A0(l = {}) {
  function r(c, f) {
    let h = f.state?.masked,
      { pathname: p, search: S, hash: y } = h || c.location;
    return Rs(
      "",
      { pathname: p, search: S, hash: y },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
      h
        ? {
            pathname: c.location.pathname,
            search: c.location.search,
            hash: c.location.hash,
          }
        : void 0,
    );
  }
  function s(c, f) {
    return typeof f == "string" ? f : Il(f);
  }
  return T0(r, s, null, l);
}
function Me(l, r) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(r);
}
function Bt(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function _0() {
  return Math.random().toString(36).substring(2, 10);
}
function Em(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r,
    masked: l.mask
      ? { pathname: l.pathname, search: l.search, hash: l.hash }
      : void 0,
  };
}
function Rs(l, r, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Wn(r) : r),
    state: s,
    key: (r && r.key) || c || _0(),
    mask: f,
  };
}
function Il({ pathname: l = "/", search: r = "", hash: s = "" }) {
  return (
    r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r),
    s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s),
    l
  );
}
function Wn(l) {
  let r = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && ((r.hash = l.substring(s)), (l = l.substring(0, s)));
    let c = l.indexOf("?");
    (c >= 0 && ((r.search = l.substring(c)), (l = l.substring(0, c))),
      l && (r.pathname = l));
  }
  return r;
}
function T0(l, r, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: h = !1 } = c,
    p = f.history,
    S = "POP",
    y = null,
    g = D();
  g == null && ((g = 0), p.replaceState({ ...p.state, idx: g }, ""));
  function D() {
    return (p.state || { idx: null }).idx;
  }
  function A() {
    S = "POP";
    let B = D(),
      Q = B == null ? null : B - g;
    ((g = B), y && y({ action: S, location: U.location, delta: Q }));
  }
  function H(B, Q) {
    S = "PUSH";
    let F = Sm(B) ? B : Rs(U.location, B, Q);
    g = D() + 1;
    let $ = Em(F, g),
      fe = U.createHref(F.mask || F);
    try {
      p.pushState($, "", fe);
    } catch (me) {
      if (me instanceof DOMException && me.name === "DataCloneError") throw me;
      f.location.assign(fe);
    }
    h && y && y({ action: S, location: U.location, delta: 1 });
  }
  function V(B, Q) {
    S = "REPLACE";
    let F = Sm(B) ? B : Rs(U.location, B, Q);
    g = D();
    let $ = Em(F, g),
      fe = U.createHref(F.mask || F);
    (p.replaceState($, "", fe),
      h && y && y({ action: S, location: U.location, delta: 0 }));
  }
  function Y(B) {
    return j0(f, B);
  }
  let U = {
    get action() {
      return S;
    },
    get location() {
      return l(f, p);
    },
    listen(B) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(bm, A),
        (y = B),
        () => {
          (f.removeEventListener(bm, A), (y = null));
        }
      );
    },
    createHref(B) {
      return r(f, B);
    },
    createURL: Y,
    encodeLocation(B) {
      let Q = Y(B);
      return { pathname: Q.pathname, search: Q.search, hash: Q.hash };
    },
    push: H,
    replace: V,
    go(B) {
      return p.go(B);
    },
  };
  return U;
}
function j0(l, r, s = !1) {
  let c = "http://localhost";
  (l &&
    (c = l.location.origin !== "null" ? l.location.origin : l.location.href),
    Me(c, "No window.location.(origin|href) available to create URL"));
  let f = typeof r == "string" ? r : Il(r);
  return (
    (f = f.replace(/ $/, "%20")),
    !s && Km.test(f) && (f = c + f),
    new URL(f, c)
  );
}
function km(l, r, s = "/") {
  return R0(l, r, s, !1);
}
function R0(l, r, s, c, f) {
  let h = typeof r == "string" ? Wn(r) : r,
    p = ma(h.pathname || "/", s);
  if (p == null) return null;
  let S = C0(l),
    y = null,
    g = q0(p);
  for (let D = 0; y == null && D < S.length; ++D) y = L0(S[D], g, c);
  return y;
}
function C0(l) {
  let r = $m(l);
  return (D0(r), r);
}
function $m(l, r = [], s = [], c = "", f = !1) {
  let h = (p, S, y = f, g) => {
    let D = {
      relativePath: g === void 0 ? p.path || "" : g,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: S,
      route: p,
    };
    if (D.relativePath.startsWith("/")) {
      if (!D.relativePath.startsWith(c) && y) return;
      (Me(
        D.relativePath.startsWith(c),
        `Absolute route path "${D.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (D.relativePath = D.relativePath.slice(c.length)));
    }
    let A = Vt([c, D.relativePath]),
      H = s.concat(D);
    (p.children &&
      p.children.length > 0 &&
      (Me(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${A}".`,
      ),
      $m(p.children, r, H, A, y)),
      !(p.path == null && !p.index) &&
        r.push({
          path: A,
          score: B0(A, p.index),
          routesMeta: H.map((V, Y) => {
            let [U, B] = Wm(
              V.relativePath,
              V.caseSensitive,
              Y === H.length - 1,
            );
            return { ...V, matcher: U, compiledParams: B };
          }),
        }));
  };
  return (
    l.forEach((p, S) => {
      if (p.path === "" || !p.path?.includes("?")) h(p, S);
      else for (let y of Jm(p.path)) h(p, S, !0, y);
    }),
    r
  );
}
function Jm(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r,
    f = s.endsWith("?"),
    h = s.replace(/\?$/, "");
  if (c.length === 0) return f ? [h, ""] : [h];
  let p = Jm(c.join("/")),
    S = [];
  return (
    S.push(...p.map((y) => (y === "" ? h : [h, y].join("/")))),
    f && S.push(...p),
    S.map((y) => (l.startsWith("/") && y === "" ? "/" : y))
  );
}
function D0(l) {
  l.sort((r, s) =>
    r.score !== s.score
      ? s.score - r.score
      : H0(
          r.routesMeta.map((c) => c.childrenIndex),
          s.routesMeta.map((c) => c.childrenIndex),
        ),
  );
}
var N0 = /^:[\w-]+$/,
  O0 = 3,
  M0 = 2,
  z0 = 1,
  w0 = 10,
  U0 = -2,
  xm = (l) => l === "*";
function B0(l, r) {
  let s = l.split("/"),
    c = s.length;
  return (
    s.some(xm) && (c += U0),
    r && (c += M0),
    s
      .filter((f) => !xm(f))
      .reduce((f, h) => f + (N0.test(h) ? O0 : h === "" ? z0 : w0), c)
  );
}
function H0(l, r) {
  return l.length === r.length && l.slice(0, -1).every((c, f) => c === r[f])
    ? l[l.length - 1] - r[r.length - 1]
    : 0;
}
function L0(l, r, s = !1) {
  let { routesMeta: c } = l,
    f = {},
    h = "/",
    p = [];
  for (let S = 0; S < c.length; ++S) {
    let y = c[S],
      g = S === c.length - 1,
      D = h === "/" ? r : r.slice(h.length) || "/",
      A = { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
      H =
        y.matcher && y.compiledParams
          ? Fm(A, D, y.matcher, y.compiledParams)
          : Uu(A, D),
      V = y.route;
    if (
      (!H &&
        g &&
        s &&
        !c[c.length - 1].route.index &&
        (H = Uu(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          D,
        )),
      !H)
    )
      return null;
    (Object.assign(f, H.params),
      p.push({
        params: f,
        pathname: Vt([h, H.pathname]),
        pathnameBase: G0(Vt([h, H.pathnameBase])),
        route: V,
      }),
      H.pathnameBase !== "/" && (h = Vt([h, H.pathnameBase])));
  }
  return p;
}
function Uu(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = Wm(l.path, l.caseSensitive, l.end);
  return Fm(l, r, s, c);
}
function Fm(l, r, s, c) {
  let f = r.match(s);
  if (!f) return null;
  let h = f[0],
    p = h.replace(/(.)\/+$/, "$1"),
    S = f.slice(1);
  return {
    params: c.reduce((g, { paramName: D, isOptional: A }, H) => {
      if (D === "*") {
        let Y = S[H] || "";
        p = h.slice(0, h.length - Y.length).replace(/(.)\/+$/, "$1");
      }
      const V = S[H];
      return (
        A && !V ? (g[D] = void 0) : (g[D] = (V || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: h,
    pathnameBase: p,
    pattern: l,
  };
}
function Wm(l, r = !1, s = !0) {
  Bt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
  );
  let c = [],
    f =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (p, S, y, g, D) => {
          if ((c.push({ paramName: S, isOptional: y != null }), y)) {
            let A = D.charAt(g + p.length);
            return A && A !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    l.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (f += "\\/*$")
        : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, r ? void 0 : "i"), c]
  );
}
function q0(l) {
  try {
    return l
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Bt(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      l
    );
  }
}
function ma(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase())) return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length,
    c = l.charAt(s);
  return c && c !== "/" ? null : l.slice(s) || "/";
}
function V0(l, r = "/") {
  let {
      pathname: s,
      search: c = "",
      hash: f = "",
    } = typeof l == "string" ? Wn(l) : l,
    h;
  return (
    s
      ? ((s = Im(s)),
        s.startsWith("/") ? (h = Am(s.substring(1), "/")) : (h = Am(s, r)))
      : (h = r),
    { pathname: h, search: X0(c), hash: Z0(f) }
  );
}
function Am(l, r) {
  let s = Bu(r).split("/");
  return (
    l.split("/").forEach((f) => {
      f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function ps(l, r, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Y0(l) {
  return l.filter(
    (r, s) => s === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function qs(l) {
  let r = Y0(l);
  return r.map((s, c) => (c === r.length - 1 ? s.pathname : s.pathnameBase));
}
function Vu(l, r, s, c = !1) {
  let f;
  typeof l == "string"
    ? (f = Wn(l))
    : ((f = { ...l }),
      Me(
        !f.pathname || !f.pathname.includes("?"),
        ps("?", "pathname", "search", f),
      ),
      Me(
        !f.pathname || !f.pathname.includes("#"),
        ps("#", "pathname", "hash", f),
      ),
      Me(!f.search || !f.search.includes("#"), ps("#", "search", "hash", f)));
  let h = l === "" || f.pathname === "",
    p = h ? "/" : f.pathname,
    S;
  if (p == null) S = s;
  else {
    let A = r.length - 1;
    if (!c && p.startsWith("..")) {
      let H = p.split("/");
      for (; H[0] === ".."; ) (H.shift(), (A -= 1));
      f.pathname = H.join("/");
    }
    S = A >= 0 ? r[A] : "/";
  }
  let y = V0(f, S),
    g = p && p !== "/" && p.endsWith("/"),
    D = (h || p === ".") && s.endsWith("/");
  return (!y.pathname.endsWith("/") && (g || D) && (y.pathname += "/"), y);
}
var Im = (l) => l.replace(/[\\/]{2,}/g, "/"),
  Vt = (l) => Im(l.join("/")),
  Bu = (l) => l.replace(/\/+$/, ""),
  G0 = (l) => Bu(l).replace(/^\/*/, "/"),
  X0 = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  Z0 = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  Q0 = class {
    constructor(l, r, s, c = !1) {
      ((this.status = l),
        (this.statusText = r || ""),
        (this.internal = c),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s));
    }
  };
function K0(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
function k0(l) {
  let r = l.map((s) => s.route.path).filter(Boolean);
  return Vt(r) || "/";
}
var Pm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function ep(l, r) {
  let s = l;
  if (typeof s != "string" || !Ls.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let c = s,
    f = !1;
  if (Pm)
    try {
      let h = new URL(window.location.href),
        p = Km.test(s) ? new URL(x0(s, h.protocol)) : new URL(s),
        S = ma(p.pathname, r);
      p.origin === h.origin && S != null
        ? (s = S + p.search + p.hash)
        : (f = !0);
    } catch {
      Bt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: c, isExternal: f, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var tp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(tp);
var $0 = ["GET", ...tp];
new Set($0);
var J0 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function F0(l) {
  try {
    return J0.includes(new URL(l).protocol);
  } catch {
    return !1;
  }
}
var In = T.createContext(null);
In.displayName = "DataRouter";
var Yu = T.createContext(null);
Yu.displayName = "DataRouterState";
var ap = T.createContext(!1);
function W0() {
  return T.useContext(ap);
}
var np = T.createContext({ isTransitioning: !1 });
np.displayName = "ViewTransition";
var I0 = T.createContext(new Map());
I0.displayName = "Fetchers";
var P0 = T.createContext(null);
P0.displayName = "Await";
var At = T.createContext(null);
At.displayName = "Navigation";
var li = T.createContext(null);
li.displayName = "Location";
var Gt = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Gt.displayName = "Route";
var Vs = T.createContext(null);
Vs.displayName = "RouteError";
var lp = "REACT_ROUTER_ERROR",
  ev = "REDIRECT",
  tv = "ROUTE_ERROR_RESPONSE";
function av(l) {
  if (l.startsWith(`${lp}:${ev}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string" &&
        typeof r.location == "string" &&
        typeof r.reloadDocument == "boolean" &&
        typeof r.replace == "boolean"
      )
        return r;
    } catch {}
}
function nv(l) {
  if (l.startsWith(`${lp}:${tv}:{`))
    try {
      let r = JSON.parse(l.slice(40));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string"
      )
        return new Q0(r.status, r.statusText, r.data);
    } catch {}
}
function lv(l, { relative: r } = {}) {
  Me(
    Pn(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: s, navigator: c } = T.useContext(At),
    { hash: f, pathname: h, search: p } = ui(l, { relative: r }),
    S = h;
  return (
    s !== "/" && (S = h === "/" ? s : Vt([s, h])),
    c.createHref({ pathname: S, search: p, hash: f })
  );
}
function Pn() {
  return T.useContext(li) != null;
}
function dt() {
  return (
    Me(
      Pn(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(li).location
  );
}
var ip =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function up(l) {
  T.useContext(At).static || T.useLayoutEffect(l);
}
function ii() {
  let { isDataRoute: l } = T.useContext(Gt);
  return l ? yv() : iv();
}
function iv() {
  Me(
    Pn(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let l = T.useContext(In),
    { basename: r, navigator: s } = T.useContext(At),
    { matches: c } = T.useContext(Gt),
    { pathname: f } = dt(),
    h = JSON.stringify(qs(c)),
    p = T.useRef(!1);
  return (
    up(() => {
      p.current = !0;
    }),
    T.useCallback(
      (y, g = {}) => {
        if ((Bt(p.current, ip), !p.current)) return;
        if (typeof y == "number") {
          s.go(y);
          return;
        }
        let D = Vu(y, JSON.parse(h), f, g.relative === "path");
        (l == null &&
          r !== "/" &&
          (D.pathname = D.pathname === "/" ? r : Vt([r, D.pathname])),
          (g.replace ? s.replace : s.push)(D, g.state, g));
      },
      [r, s, h, f, l],
    )
  );
}
T.createContext(null);
function rp() {
  let { matches: l } = T.useContext(Gt);
  return l[l.length - 1]?.params ?? {};
}
function ui(l, { relative: r } = {}) {
  let { matches: s } = T.useContext(Gt),
    { pathname: c } = dt(),
    f = JSON.stringify(qs(s));
  return T.useMemo(() => Vu(l, JSON.parse(f), c, r === "path"), [l, f, c, r]);
}
function uv(l, r) {
  return cp(l, r);
}
function cp(l, r, s) {
  Me(
    Pn(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c } = T.useContext(At),
    { matches: f } = T.useContext(Gt),
    h = f[f.length - 1],
    p = h ? h.params : {},
    S = h ? h.pathname : "/",
    y = h ? h.pathnameBase : "/",
    g = h && h.route;
  {
    let B = (g && g.path) || "";
    op(
      S,
      !g || B.endsWith("*") || B.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B === "/" ? "*" : `${B}/*`}">.`,
    );
  }
  let D = dt(),
    A;
  if (r) {
    let B = typeof r == "string" ? Wn(r) : r;
    (Me(
      y === "/" || B.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`,
    ),
      (A = B));
  } else A = D;
  let H = A.pathname || "/",
    V = H;
  if (y !== "/") {
    let B = y.replace(/^\//, "").split("/");
    V = "/" + H.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let Y =
    s && s.state.matches.length
      ? s.state.matches.map((B) =>
          Object.assign(B, { route: s.manifest[B.route.id] || B.route }),
        )
      : km(l, { pathname: V });
  (Bt(
    g || Y != null,
    `No routes matched location "${A.pathname}${A.search}${A.hash}" `,
  ),
    Bt(
      Y == null ||
        Y[Y.length - 1].route.element !== void 0 ||
        Y[Y.length - 1].route.Component !== void 0 ||
        Y[Y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let U = fv(
    Y &&
      Y.map((B) =>
        Object.assign({}, B, {
          params: Object.assign({}, p, B.params),
          pathname: Vt([
            y,
            c.encodeLocation
              ? c.encodeLocation(
                  B.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : B.pathname,
          ]),
          pathnameBase:
            B.pathnameBase === "/"
              ? y
              : Vt([
                  y,
                  c.encodeLocation
                    ? c.encodeLocation(
                        B.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : B.pathnameBase,
                ]),
        }),
      ),
    f,
    s,
  );
  return r && U
    ? T.createElement(
        li.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...A,
            },
            navigationType: "POP",
          },
        },
        U,
      )
    : U;
}
function rv() {
  let l = gv(),
    r = K0(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    s = l instanceof Error ? l.stack : null,
    c = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: c },
    h = { padding: "2px 4px", backgroundColor: c },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (p = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, r),
      s ? T.createElement("pre", { style: f }, s) : null,
      p,
    )
  );
}
var cv = T.createElement(rv, null),
  sp = class extends T.Component {
    constructor(l) {
      (super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        }));
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, r) {
      return r.location !== l.location ||
        (r.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : r.error,
            location: r.location,
            revalidation: l.revalidation || r.revalidation,
          };
    }
    componentDidCatch(l, r) {
      this.props.onError
        ? this.props.onError(l, r)
        : console.error(
            "React Router caught the following error during render",
            l,
          );
    }
    render() {
      let l = this.state.error;
      if (
        this.context &&
        typeof l == "object" &&
        l &&
        "digest" in l &&
        typeof l.digest == "string"
      ) {
        const s = nv(l.digest);
        s && (l = s);
      }
      let r =
        l !== void 0
          ? T.createElement(
              Gt.Provider,
              { value: this.props.routeContext },
              T.createElement(Vs.Provider, {
                value: l,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? T.createElement(sv, { error: l }, r) : r;
    }
  };
sp.contextType = ap;
var gs = new WeakMap();
function sv({ children: l, error: r }) {
  let { basename: s } = T.useContext(At);
  if (
    typeof r == "object" &&
    r &&
    "digest" in r &&
    typeof r.digest == "string"
  ) {
    let c = av(r.digest);
    if (c) {
      let f = gs.get(r);
      if (f) throw f;
      let h = ep(c.location, s),
        p = h.absoluteURL || h.to;
      if (F0(p)) throw new Error("Invalid redirect location");
      if (Pm && !gs.get(r))
        if (h.isExternal || c.reloadDocument) window.location.href = p;
        else {
          const S = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(h.to, {
              replace: c.replace,
            }),
          );
          throw (gs.set(r, S), S);
        }
      return T.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${p}`,
      });
    }
  }
  return l;
}
function ov({ routeContext: l, match: r, children: s }) {
  let c = T.useContext(In);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = r.route.id),
    T.createElement(Gt.Provider, { value: l }, s)
  );
}
function fv(l, r = [], s) {
  let c = s?.state;
  if (l == null) {
    if (!c) return null;
    if (c.errors) l = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      l = c.matches;
    else return null;
  }
  let f = l,
    h = c?.errors;
  if (h != null) {
    let D = f.findIndex((A) => A.route.id && h?.[A.route.id] !== void 0);
    (Me(
      D >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, D + 1))));
  }
  let p = !1,
    S = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let D = 0; D < f.length; D++) {
      let A = f[D];
      if (
        ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (S = D),
        A.route.id)
      ) {
        let { loaderData: H, errors: V } = c,
          Y =
            A.route.loader &&
            !H.hasOwnProperty(A.route.id) &&
            (!V || V[A.route.id] === void 0);
        if (A.route.lazy || Y) {
          (s.isStatic && (p = !0),
            S >= 0 ? (f = f.slice(0, S + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  }
  let y = s?.onError,
    g =
      c && y
        ? (D, A) => {
            y(D, {
              location: c.location,
              params: c.matches?.[0]?.params ?? {},
              pattern: k0(c.matches),
              errorInfo: A,
            });
          }
        : void 0;
  return f.reduceRight((D, A, H) => {
    let V,
      Y = !1,
      U = null,
      B = null;
    c &&
      ((V = h && A.route.id ? h[A.route.id] : void 0),
      (U = A.route.errorElement || cv),
      p &&
        (S < 0 && H === 0
          ? (op(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (Y = !0),
            (B = null))
          : S === H &&
            ((Y = !0), (B = A.route.hydrateFallbackElement || null))));
    let Q = r.concat(f.slice(0, H + 1)),
      F = () => {
        let $;
        return (
          V
            ? ($ = U)
            : Y
              ? ($ = B)
              : A.route.Component
                ? ($ = T.createElement(A.route.Component, null))
                : A.route.element
                  ? ($ = A.route.element)
                  : ($ = D),
          T.createElement(ov, {
            match: A,
            routeContext: { outlet: D, matches: Q, isDataRoute: c != null },
            children: $,
          })
        );
      };
    return c && (A.route.ErrorBoundary || A.route.errorElement || H === 0)
      ? T.createElement(sp, {
          location: c.location,
          revalidation: c.revalidation,
          component: U,
          error: V,
          children: F(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          onError: g,
        })
      : F();
  }, null);
}
function Ys(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dv(l) {
  let r = T.useContext(In);
  return (Me(r, Ys(l)), r);
}
function hv(l) {
  let r = T.useContext(Yu);
  return (Me(r, Ys(l)), r);
}
function mv(l) {
  let r = T.useContext(Gt);
  return (Me(r, Ys(l)), r);
}
function Gs(l) {
  let r = mv(l),
    s = r.matches[r.matches.length - 1];
  return (
    Me(
      s.route.id,
      `${l} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function pv() {
  return Gs("useRouteId");
}
function gv() {
  let l = T.useContext(Vs),
    r = hv("useRouteError"),
    s = Gs("useRouteError");
  return l !== void 0 ? l : r.errors?.[s];
}
function yv() {
  let { router: l } = dv("useNavigate"),
    r = Gs("useNavigate"),
    s = T.useRef(!1);
  return (
    up(() => {
      s.current = !0;
    }),
    T.useCallback(
      async (f, h = {}) => {
        (Bt(s.current, ip),
          s.current &&
            (typeof f == "number"
              ? await l.navigate(f)
              : await l.navigate(f, { fromRouteId: r, ...h })));
      },
      [l, r],
    )
  );
}
var _m = {};
function op(l, r, s) {
  !r && !_m[l] && ((_m[l] = !0), Bt(!1, s));
}
T.memo(vv);
function vv({
  routes: l,
  manifest: r,
  future: s,
  state: c,
  isStatic: f,
  onError: h,
}) {
  return cp(l, void 0, { manifest: r, state: c, isStatic: f, onError: h });
}
function ju({ to: l, replace: r, state: s, relative: c }) {
  Me(
    Pn(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: f } = T.useContext(At);
  Bt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: h } = T.useContext(Gt),
    { pathname: p } = dt(),
    S = ii(),
    y = Vu(l, qs(h), p, c === "path"),
    g = JSON.stringify(y);
  return (
    T.useEffect(() => {
      S(JSON.parse(g), { replace: r, state: s, relative: c });
    }, [S, g, c, r, s]),
    null
  );
}
function et(l) {
  Me(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function bv({
  basename: l = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: h = !1,
  useTransitions: p,
}) {
  Me(
    !Pn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let S = l.replace(/^\/*/, "/"),
    y = T.useMemo(
      () => ({
        basename: S,
        navigator: f,
        static: h,
        useTransitions: p,
        future: {},
      }),
      [S, f, h, p],
    );
  typeof s == "string" && (s = Wn(s));
  let {
      pathname: g = "/",
      search: D = "",
      hash: A = "",
      state: H = null,
      key: V = "default",
      mask: Y,
    } = s,
    U = T.useMemo(() => {
      let B = ma(g, S);
      return B == null
        ? null
        : {
            location: {
              pathname: B,
              search: D,
              hash: A,
              state: H,
              key: V,
              mask: Y,
            },
            navigationType: c,
          };
    }, [S, g, D, A, H, V, c, Y]);
  return (
    Bt(
      U != null,
      `<Router basename="${S}"> is not able to match the URL "${g}${D}${A}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    U == null
      ? null
      : T.createElement(
          At.Provider,
          { value: y },
          T.createElement(li.Provider, { children: r, value: U }),
        )
  );
}
function Sv({ children: l, location: r }) {
  return uv(Cs(l), r);
}
function Cs(l, r = []) {
  let s = [];
  return (
    T.Children.forEach(l, (c, f) => {
      if (!T.isValidElement(c)) return;
      let h = [...r, f];
      if (c.type === T.Fragment) {
        s.push.apply(s, Cs(c.props.children, h));
        return;
      }
      (Me(
        c.type === et,
        `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Me(
          !c.props.index || !c.props.children,
          "An index route cannot have child routes.",
        ));
      let p = {
        id: c.props.id || h.join("-"),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        middleware: c.props.middleware,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      (c.props.children && (p.children = Cs(c.props.children, h)), s.push(p));
    }),
    s
  );
}
var zu = "get",
  wu = "application/x-www-form-urlencoded";
function Gu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function Ev(l) {
  return Gu(l) && l.tagName.toLowerCase() === "button";
}
function xv(l) {
  return Gu(l) && l.tagName.toLowerCase() === "form";
}
function Av(l) {
  return Gu(l) && l.tagName.toLowerCase() === "input";
}
function _v(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Tv(l, r) {
  return l.button === 0 && (!r || r === "_self") && !_v(l);
}
function Ds(l = "") {
  return new URLSearchParams(
    typeof l == "string" || Array.isArray(l) || l instanceof URLSearchParams
      ? l
      : Object.keys(l).reduce((r, s) => {
          let c = l[s];
          return r.concat(Array.isArray(c) ? c.map((f) => [s, f]) : [[s, c]]);
        }, []),
  );
}
function jv(l, r) {
  let s = Ds(l);
  return (
    r &&
      r.forEach((c, f) => {
        s.has(f) ||
          r.getAll(f).forEach((h) => {
            s.append(f, h);
          });
      }),
    s
  );
}
var Ru = null;
function Rv() {
  if (Ru === null)
    try {
      (new FormData(document.createElement("form"), 0), (Ru = !1));
    } catch {
      Ru = !0;
    }
  return Ru;
}
var Cv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ys(l) {
  return l != null && !Cv.has(l)
    ? (Bt(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wu}"`,
      ),
      null)
    : l;
}
function Dv(l, r) {
  let s, c, f, h, p;
  if (xv(l)) {
    let S = l.getAttribute("action");
    ((c = S ? ma(S, r) : null),
      (s = l.getAttribute("method") || zu),
      (f = ys(l.getAttribute("enctype")) || wu),
      (h = new FormData(l)));
  } else if (Ev(l) || (Av(l) && (l.type === "submit" || l.type === "image"))) {
    let S = l.form;
    if (S == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = l.getAttribute("formaction") || S.getAttribute("action");
    if (
      ((c = y ? ma(y, r) : null),
      (s = l.getAttribute("formmethod") || S.getAttribute("method") || zu),
      (f =
        ys(l.getAttribute("formenctype")) ||
        ys(S.getAttribute("enctype")) ||
        wu),
      (h = new FormData(S, l)),
      !Rv())
    ) {
      let { name: g, type: D, value: A } = l;
      if (D === "image") {
        let H = g ? `${g}.` : "";
        (h.append(`${H}x`, "0"), h.append(`${H}y`, "0"));
      } else g && h.append(g, A);
    }
  } else {
    if (Gu(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((s = zu), (c = null), (f = wu), (p = l));
  }
  return (
    h && f === "text/plain" && ((p = h), (h = void 0)),
    { action: c, method: s.toLowerCase(), encType: f, formData: h, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Xs(l, r) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(r);
}
function fp(l, r, s, c) {
  let f =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : l;
  return (
    s
      ? f.pathname.endsWith("/")
        ? (f.pathname = `${f.pathname}_.${c}`)
        : (f.pathname = `${f.pathname}.${c}`)
      : f.pathname === "/"
        ? (f.pathname = `_root.${c}`)
        : r && ma(f.pathname, r) === "/"
          ? (f.pathname = `${Bu(r)}/_root.${c}`)
          : (f.pathname = `${Bu(f.pathname)}.${c}`),
    f
  );
}
async function Nv(l, r) {
  if (l.id in r) return r[l.id];
  try {
    let s = await import(l.module);
    return ((r[l.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ov(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function Mv(l, r, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let h = r.routes[f.route.id];
      if (h) {
        let p = await Nv(h, s);
        return p.links ? p.links() : [];
      }
      return [];
    }),
  );
  return Bv(
    c
      .flat(1)
      .filter(Ov)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" },
      ),
  );
}
function Tm(l, r, s, c, f, h) {
  let p = (y, g) => (s[g] ? y.route.id !== s[g].route.id : !0),
    S = (y, g) =>
      s[g].pathname !== y.pathname ||
      (s[g].route.path?.endsWith("*") && s[g].params["*"] !== y.params["*"]);
  return h === "assets"
    ? r.filter((y, g) => p(y, g) || S(y, g))
    : h === "data"
      ? r.filter((y, g) => {
          let D = c.routes[y.route.id];
          if (!D || !D.hasLoader) return !1;
          if (p(y, g) || S(y, g)) return !0;
          if (y.route.shouldRevalidate) {
            let A = y.route.shouldRevalidate({
              currentUrl: new URL(
                f.pathname + f.search + f.hash,
                window.origin,
              ),
              currentParams: s[0]?.params || {},
              nextUrl: new URL(l, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof A == "boolean") return A;
          }
          return !0;
        })
      : [];
}
function zv(l, r, { includeHydrateFallback: s } = {}) {
  return wv(
    l
      .map((c) => {
        let f = r.routes[c.route.id];
        if (!f) return [];
        let h = [f.module];
        return (
          f.clientActionModule && (h = h.concat(f.clientActionModule)),
          f.clientLoaderModule && (h = h.concat(f.clientLoaderModule)),
          s &&
            f.hydrateFallbackModule &&
            (h = h.concat(f.hydrateFallbackModule)),
          f.imports && (h = h.concat(f.imports)),
          h
        );
      })
      .flat(1),
  );
}
function wv(l) {
  return [...new Set(l)];
}
function Uv(l) {
  let r = {},
    s = Object.keys(l).sort();
  for (let c of s) r[c] = l[c];
  return r;
}
function Bv(l, r) {
  let s = new Set();
  return (
    new Set(r),
    l.reduce((c, f) => {
      let h = JSON.stringify(Uv(f));
      return (s.has(h) || (s.add(h), c.push({ key: h, link: f })), c);
    }, [])
  );
}
function Zs() {
  let l = T.useContext(In);
  return (
    Xs(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    l
  );
}
function Hv() {
  let l = T.useContext(Yu);
  return (
    Xs(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    l
  );
}
var Qs = T.createContext(void 0);
Qs.displayName = "FrameworkContext";
function Xu() {
  let l = T.useContext(Qs);
  return (
    Xs(l, "You must render this element inside a <HydratedRouter> element"),
    l
  );
}
function Lv(l, r) {
  let s = T.useContext(Qs),
    [c, f] = T.useState(!1),
    [h, p] = T.useState(!1),
    {
      onFocus: S,
      onBlur: y,
      onMouseEnter: g,
      onMouseLeave: D,
      onTouchStart: A,
    } = r,
    H = T.useRef(null);
  (T.useEffect(() => {
    if ((l === "render" && p(!0), l === "viewport")) {
      let U = (Q) => {
          Q.forEach((F) => {
            p(F.isIntersecting);
          });
        },
        B = new IntersectionObserver(U, { threshold: 0.5 });
      return (
        H.current && B.observe(H.current),
        () => {
          B.disconnect();
        }
      );
    }
  }, [l]),
    T.useEffect(() => {
      if (c) {
        let U = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(U);
        };
      }
    }, [c]));
  let V = () => {
      f(!0);
    },
    Y = () => {
      (f(!1), p(!1));
    };
  return s
    ? l !== "intent"
      ? [h, H, {}]
      : [
          h,
          H,
          {
            onFocus: Jl(S, V),
            onBlur: Jl(y, Y),
            onMouseEnter: Jl(g, V),
            onMouseLeave: Jl(D, Y),
            onTouchStart: Jl(A, V),
          },
        ]
    : [!1, H, {}];
}
function Jl(l, r) {
  return (s) => {
    (l && l(s), s.defaultPrevented || r(s));
  };
}
function qv({ page: l, ...r }) {
  let s = W0(),
    { nonce: c } = Xu(),
    { router: f } = Zs(),
    h = T.useMemo(() => km(f.routes, l, f.basename), [f.routes, l, f.basename]);
  return h
    ? (r.nonce == null && c && (r = { ...r, nonce: c }),
      s
        ? T.createElement(Yv, { page: l, matches: h, ...r })
        : T.createElement(Gv, { page: l, matches: h, ...r }))
    : null;
}
function Vv(l) {
  let { manifest: r, routeModules: s } = Xu(),
    [c, f] = T.useState([]);
  return (
    T.useEffect(() => {
      let h = !1;
      return (
        Mv(l, r, s).then((p) => {
          h || f(p);
        }),
        () => {
          h = !0;
        }
      );
    }, [l, r, s]),
    c
  );
}
function Yv({ page: l, matches: r, ...s }) {
  let c = dt(),
    { future: f } = Xu(),
    { basename: h } = Zs(),
    p = T.useMemo(() => {
      if (l === c.pathname + c.search + c.hash) return [];
      let S = fp(l, h, f.v8_trailingSlashAwareDataRequests, "rsc"),
        y = !1,
        g = [];
      for (let D of r)
        typeof D.route.shouldRevalidate == "function"
          ? (y = !0)
          : g.push(D.route.id);
      return (
        y && g.length > 0 && S.searchParams.set("_routes", g.join(",")),
        [S.pathname + S.search]
      );
    }, [h, f.v8_trailingSlashAwareDataRequests, l, c, r]);
  return T.createElement(
    T.Fragment,
    null,
    p.map((S) =>
      T.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...s,
      }),
    ),
  );
}
function Gv({ page: l, matches: r, ...s }) {
  let c = dt(),
    { future: f, manifest: h, routeModules: p } = Xu(),
    { basename: S } = Zs(),
    { loaderData: y, matches: g } = Hv(),
    D = T.useMemo(() => Tm(l, r, g, h, c, "data"), [l, r, g, h, c]),
    A = T.useMemo(() => Tm(l, r, g, h, c, "assets"), [l, r, g, h, c]),
    H = T.useMemo(() => {
      if (l === c.pathname + c.search + c.hash) return [];
      let U = new Set(),
        B = !1;
      if (
        (r.forEach((F) => {
          let $ = h.routes[F.route.id];
          !$ ||
            !$.hasLoader ||
            ((!D.some((fe) => fe.route.id === F.route.id) &&
              F.route.id in y &&
              p[F.route.id]?.shouldRevalidate) ||
            $.hasClientLoader
              ? (B = !0)
              : U.add(F.route.id));
        }),
        U.size === 0)
      )
        return [];
      let Q = fp(l, S, f.v8_trailingSlashAwareDataRequests, "data");
      return (
        B &&
          U.size > 0 &&
          Q.searchParams.set(
            "_routes",
            r
              .filter((F) => U.has(F.route.id))
              .map((F) => F.route.id)
              .join(","),
          ),
        [Q.pathname + Q.search]
      );
    }, [S, f.v8_trailingSlashAwareDataRequests, y, c, h, D, r, l, p]),
    V = T.useMemo(() => zv(A, h), [A, h]),
    Y = Vv(A);
  return T.createElement(
    T.Fragment,
    null,
    H.map((U) =>
      T.createElement("link", {
        key: U,
        rel: "prefetch",
        as: "fetch",
        href: U,
        ...s,
      }),
    ),
    V.map((U) =>
      T.createElement("link", { key: U, rel: "modulepreload", href: U, ...s }),
    ),
    Y.map(({ key: U, link: B }) =>
      T.createElement("link", {
        key: U,
        nonce: s.nonce,
        ...B,
        crossOrigin: B.crossOrigin ?? s.crossOrigin,
      }),
    ),
  );
}
function Xv(...l) {
  return (r) => {
    l.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var Zv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Zv && (window.__reactRouterVersion = "7.18.2");
} catch {}
function Qv({ basename: l, children: r, useTransitions: s, window: c }) {
  let f = T.useRef();
  f.current == null && (f.current = A0({ window: c, v5Compat: !0 }));
  let h = f.current,
    [p, S] = T.useState({ action: h.action, location: h.location }),
    y = T.useCallback(
      (g) => {
        s === !1 ? S(g) : T.startTransition(() => S(g));
      },
      [s],
    );
  return (
    T.useLayoutEffect(() => h.listen(y), [h, y]),
    T.createElement(bv, {
      basename: l,
      children: r,
      location: p.location,
      navigationType: p.action,
      navigator: h,
      useTransitions: s,
    })
  );
}
var tt = T.forwardRef(function (
  {
    onClick: r,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: h,
    replace: p,
    mask: S,
    state: y,
    target: g,
    to: D,
    preventScrollReset: A,
    viewTransition: H,
    defaultShouldRevalidate: V,
    ...Y
  },
  U,
) {
  let { basename: B, navigator: Q, useTransitions: F } = T.useContext(At),
    $ = typeof D == "string" && Ls.test(D),
    fe = ep(D, B);
  D = fe.to;
  let me = lv(D, { relative: f }),
    ge = dt(),
    k = null;
  if (S) {
    let qe = Vu(S, [], ge.mask ? ge.mask.pathname : "/", !0);
    (B !== "/" &&
      (qe.pathname = qe.pathname === "/" ? B : Vt([B, qe.pathname])),
      (k = Q.createHref(qe)));
  }
  let [Re, ze, ue] = Lv(c, Y),
    se = Jv(D, {
      replace: p,
      mask: S,
      state: y,
      target: g,
      preventScrollReset: A,
      relative: f,
      viewTransition: H,
      defaultShouldRevalidate: V,
      useTransitions: F,
    });
  function ve(qe) {
    (r && r(qe), qe.defaultPrevented || se(qe));
  }
  let _t = !(fe.isExternal || h),
    Tt = T.createElement("a", {
      ...Y,
      ...ue,
      href: (_t ? k : void 0) || fe.absoluteURL || me,
      onClick: _t ? ve : r,
      ref: Xv(U, ze),
      target: g,
      "data-discover": !$ && s === "render" ? "true" : void 0,
    });
  return Re && !$
    ? T.createElement(T.Fragment, null, Tt, T.createElement(qv, { page: me }))
    : Tt;
});
tt.displayName = "Link";
var Kv = T.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: h,
    to: p,
    viewTransition: S,
    children: y,
    ...g
  },
  D,
) {
  let A = ui(p, { relative: g.relative }),
    H = dt(),
    V = T.useContext(Yu),
    { navigator: Y, basename: U } = T.useContext(At),
    B = V != null && t1(A) && S === !0,
    Q = Y.encodeLocation ? Y.encodeLocation(A).pathname : A.pathname,
    F = H.pathname,
    $ =
      V && V.navigation && V.navigation.location
        ? V.navigation.location.pathname
        : null;
  (s ||
    ((F = F.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (Q = Q.toLowerCase())),
    $ && U && ($ = ma($, U) || $));
  const fe = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
  let me = F === Q || (!f && F.startsWith(Q) && F.charAt(fe) === "/"),
    ge =
      $ != null &&
      ($ === Q || (!f && $.startsWith(Q) && $.charAt(Q.length) === "/")),
    k = { isActive: me, isPending: ge, isTransitioning: B },
    Re = me ? r : void 0,
    ze;
  typeof c == "function"
    ? (ze = c(k))
    : (ze = [
        c,
        me ? "active" : null,
        ge ? "pending" : null,
        B ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ue = typeof h == "function" ? h(k) : h;
  return T.createElement(
    tt,
    {
      ...g,
      "aria-current": Re,
      className: ze,
      ref: D,
      style: ue,
      to: p,
      viewTransition: S,
    },
    typeof y == "function" ? y(k) : y,
  );
});
Kv.displayName = "NavLink";
var kv = T.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: r,
      navigate: s,
      reloadDocument: c,
      replace: f,
      state: h,
      method: p = zu,
      action: S,
      onSubmit: y,
      relative: g,
      preventScrollReset: D,
      viewTransition: A,
      defaultShouldRevalidate: H,
      ...V
    },
    Y,
  ) => {
    let { useTransitions: U } = T.useContext(At),
      B = Pv(),
      Q = e1(S, { relative: g }),
      F = p.toLowerCase() === "get" ? "get" : "post",
      $ = typeof S == "string" && Ls.test(S),
      fe = (me) => {
        if ((y && y(me), me.defaultPrevented)) return;
        me.preventDefault();
        let ge = me.nativeEvent.submitter,
          k = ge?.getAttribute("formmethod") || p,
          Re = () =>
            B(ge || me.currentTarget, {
              fetcherKey: r,
              method: k,
              navigate: s,
              replace: f,
              state: h,
              relative: g,
              preventScrollReset: D,
              viewTransition: A,
              defaultShouldRevalidate: H,
            });
        U && s !== !1 ? T.startTransition(() => Re()) : Re();
      };
    return T.createElement("form", {
      ref: Y,
      method: F,
      action: Q,
      onSubmit: c ? y : fe,
      ...V,
      "data-discover": !$ && l === "render" ? "true" : void 0,
    });
  },
);
kv.displayName = "Form";
function $v(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dp(l) {
  let r = T.useContext(In);
  return (Me(r, $v(l)), r);
}
function Jv(
  l,
  {
    target: r,
    replace: s,
    mask: c,
    state: f,
    preventScrollReset: h,
    relative: p,
    viewTransition: S,
    defaultShouldRevalidate: y,
    useTransitions: g,
  } = {},
) {
  let D = ii(),
    A = dt(),
    H = ui(l, { relative: p });
  return T.useCallback(
    (V) => {
      if (Tv(V, r)) {
        V.preventDefault();
        let Y = s !== void 0 ? s : Il(A) === Il(H),
          U = () =>
            D(l, {
              replace: Y,
              mask: c,
              state: f,
              preventScrollReset: h,
              relative: p,
              viewTransition: S,
              defaultShouldRevalidate: y,
            });
        g ? T.startTransition(() => U()) : U();
      }
    },
    [A, D, H, s, c, f, r, l, h, p, S, y, g],
  );
}
function Fv(l) {
  Bt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let r = T.useRef(Ds(l)),
    s = T.useRef(!1),
    c = dt(),
    f = T.useMemo(() => jv(c.search, s.current ? null : r.current), [c.search]),
    h = ii(),
    p = T.useCallback(
      (S, y) => {
        const g = Ds(typeof S == "function" ? S(new URLSearchParams(f)) : S);
        ((s.current = !0), h("?" + g, y));
      },
      [h, f],
    );
  return [f, p];
}
var Wv = 0,
  Iv = () => `__${String(++Wv)}__`;
function Pv() {
  let { router: l } = dp("useSubmit"),
    { basename: r } = T.useContext(At),
    s = pv(),
    c = l.fetch,
    f = l.navigate;
  return T.useCallback(
    async (h, p = {}) => {
      let { action: S, method: y, encType: g, formData: D, body: A } = Dv(h, r);
      if (p.navigate === !1) {
        let H = p.fetcherKey || Iv();
        await c(H, s, p.action || S, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: D,
          body: A,
          formMethod: p.method || y,
          formEncType: p.encType || g,
          flushSync: p.flushSync,
        });
      } else
        await f(p.action || S, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: D,
          body: A,
          formMethod: p.method || y,
          formEncType: p.encType || g,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition,
        });
    },
    [c, f, r, s],
  );
}
function e1(l, { relative: r } = {}) {
  let { basename: s } = T.useContext(At),
    c = T.useContext(Gt);
  Me(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1),
    h = { ...ui(l || ".", { relative: r }) },
    p = dt();
  if (l == null) {
    h.search = p.search;
    let S = new URLSearchParams(h.search),
      y = S.getAll("index");
    if (y.some((D) => D === "")) {
      (S.delete("index"),
        y.filter((A) => A).forEach((A) => S.append("index", A)));
      let D = S.toString();
      h.search = D ? `?${D}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      f.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (h.pathname = h.pathname === "/" ? s : Vt([s, h.pathname])),
    Il(h)
  );
}
function t1(l, { relative: r } = {}) {
  let s = T.useContext(np);
  Me(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: c } = dp("useViewTransitionState"),
    f = ui(l, { relative: r });
  if (!s.isTransitioning) return !1;
  let h = ma(s.currentLocation.pathname, c) || s.currentLocation.pathname,
    p = ma(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Uu(f.pathname, p) != null || Uu(f.pathname, h) != null;
}
function Ks(l) {
  let r = 2166136261,
    s = 2654435769;
  for (let c = 0; c < l.length; c += 1) {
    const f = l.charCodeAt(c);
    ((r = Math.imul(r ^ f, 16777619) >>> 0),
      (s = Math.imul(s ^ f, 2246822507) >>> 0));
  }
  return `${r.toString(16).padStart(8, "0")}${s.toString(16).padStart(8, "0")}`;
}
function a1(l, r) {
  let s = Number.parseInt(Ks(r).slice(0, 8), 16) || 1;
  const c = [...l];
  for (let f = c.length - 1; f > 0; f -= 1) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const h = s % (f + 1);
    [c[f], c[h]] = [c[h], c[f]];
  }
  return c;
}
const n1 = [
    ["일을 했으면 성과와 무관하게 최소한의 소득은 보장받아야 한다.", 1],
    ["거주가 아닌 투기 목적의 부동산 구입 행위는 규제되어야 한다.", 1],
    ["정부는 부의 재분배에 지금보다 더 힘써야 한다.", 1],
    ["정부는 CEO들의 임금에 상한선을 정해야 한다.", 1],
    ["도로나 전기 같은 공공재는 반드시 국가가 운영해야 한다.", 1],
    ["고액의 사교육은 규제되어야 한다.", 1],
    ["노동을 통한 수익이 주식을 통한 수익보다 더 정당하다.", 1],
    ["기업이 정부보다 더 큰 해악을 끼칠 가능성이 높다.", 1],
    ["수입품에 대한 관세는 자국의 일자리를 보호하는 좋은 방법이다.", 1],
    ["최저임금은 순기능보다 역기능이 더 크다.", 0],
    ["자유시장에 맡기는 게 정부정책을 세우는 것보다 낫다.", 0],
    [
      "나는 모든 사람들이 비슷한 월급을 받게 하는 나라에서는 살고 싶지 않다.",
      0,
    ],
    ["상속으로 부를 얻는 것은 정당하다.", 0],
    ["정부가 민간사업에 개입하면 대부분 망친다고 봐야 한다.", 0],
    ["빈곤의 책임은 기본적으로 본인에게 있다.", 0],
    ["자본주의는 그 어떤 경제 시스템보다 우월하다.", 0],
    [
      "경제 성장 우선 정책이 복지 우선 정책보다 빈곤 탈출에 더 큰 기여를 할 것이다.",
      0,
    ],
    ["경쟁은 일반적으로 세상을 더 좋게 만든다.", 0],
    [
      "돈이 많은 사람들은 병의 경중과 상관없이 더 좋은 의료 서비스에 더 쉽게 접근할 수 있어야 한다.",
      0,
    ],
    [
      "내가 혜택을 받지 않는 공공 사업에 대해서는 세금을 납부하지 않아야 한다.",
      0,
    ],
    ["납세자의 세금이 순수예술을 진흥하는 것에 사용되어서는 안 된다.", 0],
  ],
  l1 = [
    [
      "여성들이 보건휴가(생리휴가)를 주말에 붙여 쓰는 것은 정당한 권리행사이므로 비난할 수 없다.",
      1,
    ],
    [
      "자본주의 시장에서 일반적으로 남성의 능력은 여성의 능력보다 더 높게 평가된다.",
      1,
    ],
    ["세계의 역사를 여성들이 지배했다면 폭력과 전쟁은 훨씬 적었을 것이다.", 1],
    [
      "정부는 기업 임원 등 남성 중심의 고소득 직종에 대한 여성 할당제를 시행해야 한다.",
      1,
    ],
    ["정부는 공직의 일정 비율을 여성에게 할당해야 한다.", 1],
    ["영화 속에서 여성의 배역이 상대적으로 부족한 것은 심각한 문제다.", 1],
    [
      "‘여배우’, ‘여류시인’, ‘여기자’ 등 직업 앞에 성별을 붙이는 것은 여성의 가치를 평가 절하하는 방법 중 하나다.",
      1,
    ],
    [
      "남자와 여자가 같은 직업에 같은 연봉을 받고 있다면 실은 여자가 더 유능할 것이다.",
      1,
    ],
    [
      "여성의 명백한 동의를 받지 않은 상황에서 이루어지는 섹스는 성폭행일 가능성이 높다.",
      1,
    ],
    [
      "데이트와 섹스에 대한 주류 문화의 규범은 남성의 욕구를 만족시키기 위한 가부장제를 기반으로 하고 있다.",
      1,
    ],
    [
      "여성 모델이 속옷이나 수영복을 입고 찍는 섹시화보는 그동안 성취해 온 여성인권을 후퇴시킨다.",
      1,
    ],
    [
      "친족관계를 부르는 호칭이 성별에 따라 다른 것은 단순히 관습일 뿐 성차별이라고 보긴 어렵다.",
      0,
    ],
    [
      "남자와 여자의 차이는 자명하기 때문에 각자 별개의 사회적 역할을 수행하며 상호 보완하는 것이 이상적이다.",
      0,
    ],
    ["한국사회는 징병제가 있기 때문에 남자에게 더 불리한 사회이다.", 0],
    [
      "오늘날 한국 사회에서 여자로 산다는 것은 남자로 사는 것보다 더 편한 점이 많다.",
      0,
    ],
    ["출산을 하지 않는 여성에겐 세금을 더 부과해야한다.", 0],
    [
      "임금의 성별 격차는 근거 없는 믿음이다. 여성은 이미 같은 노동에 대해 남성과 동등한 보수를 받는다.",
      0,
    ],
    [
      "남성의 평균 임금이 여성보다 높다면 그건 남성이 더 좋은 성과를 냈기 때문이다.",
      0,
    ],
    [
      "남자들과 비교했을 때 여자들은 안정적인 인간관계 없이 행복하기 어렵다.",
      0,
    ],
    ["페미니즘을 지지하는 남성은 남자답지 못한 구석이 있는 게 사실이다.", 0],
    ["여성이 우울증과 같은 정신질환을 호소할 때는 엄살인 경우가 많다.", 0],
  ],
  i1 = [
    [
      "동성 커플은 결혼과 입양 권리 등 이성 커플과 동일한 권리를 누려야 한다.",
      1,
    ],
    ["모든 식당은 가급적 채식주의자를 위한 메뉴를 하나 이상 제공해야 한다.", 1],
    [
      "무슬림이 많은 지역이라면 이슬람 율법에 따른 할랄 음식 인증제를 지자체가 지원해 줄 필요가 있다.",
      1,
    ],
    [
      "조선족이 범죄를 저지를 확률이 높다고 느끼는 것은 편견에 사로잡힌 잘못된 생각이다.",
      1,
    ],
    [
      "방송의 수어해설화면은 농인의 권리를 위한 당연한 조치이므로 지금보다 더 큰 사이즈로, 모든 방송에 나와야 한다.",
      1,
    ],
    [
      "숨길 것이 없는 떳떳한 사람에게는 정부의 감시가 오히려 그를 보호해주는 수단이 된다.",
      0,
    ],
    ["일반 대중들은 그릇된 결정을 내릴 때가 많다.", 0],
    ["우리 사회에서는 사형 집행이 필요하다.", 0],
    ["팀워크를 위해서는 내키지 않더라도 회식에 다같이 참여해야한다.", 0],
    ["독재 정부에 대한 저항일지라도 폭력은 용인되어서는 안 된다.", 0],
    ["“절이 싫으면 중이 떠나야지”라는 말은 대부분의 경우 옳다.", 0],
    ["다수를 위해 소수가 희생하고 따르는 것이 민주주의의 원칙이다.", 0],
    ["의무를 먼저 잘 이행할 때 권리를 주장할 자격도 주어진다.", 0],
    [
      "대중매체에 긍정적인 성소수자 캐릭터가 자주 등장하는 것은 소수자 가시화를 위한 좋은 방법이다.",
      1,
    ],
    ["PC주의자들의 주장이 선을 넘는 경우가 많다.", 0],
    ["세상은 확실히 더 안 좋은 방향으로 변하고 있다.", 0],
    ["한국 사회에 온 이주민은 우리 문화에 동화시키는 것이 좋다.", 0],
    ["우리나라로 들어오는 이민자는 그 수를 최소화 시켜야한다.", 0],
    ["미국의 흑인 차별은 어느 정도 정당한 근거가 있다.", 0],
    [
      "장애인들이 바쁜 출퇴근 시간에까지 피해를 끼치며 시위하는 것은 동의할 수 없다.",
      0,
    ],
    [
      "디즈니는 인어공주 실사영화에 흑인을 캐스팅함으로써 원작의 추억을 간직한 팬들을 배신했다.",
      0,
    ],
    ["전통적 가족제도를 유지하는 것은 그 자체로 가치가 있다.", 0],
  ],
  u1 = [
    ["물건을 구입할 때 가장 중요한 기준은 가성비이다", 1],
    ["조금만 어긋나도 인생이 끝장날 것 같은 부담감에 늘 긴장하며 살아왔다", 1],
    [
      "최대한 물건을 싸게 구입하기 위해 할인쿠폰이나 중고거래를 활용하는 등 시간과 노력을 아끼지 않는다",
      1,
    ],
    ["경제적인 측면에서는 부모덕을 본 적이 없다", 1],
    ["성인이 된 후에는 부모의 존재가 경제적 부담이 된다", 1],
    ["어린 시절 살던 집에 습기로 생긴 곰팡이가 있었다", 1],
    ["어떤 종류든 저소득층을 위한 지원금을 받은 적이 있다", 1],
    ["학창 시절 가정형편 때문에 식비나 학비를 면제받은 적이 있다", 1],
    ["나 또는 가족의 병원비가 부족해 비참했던 경험이 있다", 1],
    ["대학 시절의 주된 기억 중 하나는 아르바이트였다", 1],
    ["취직하고 받은 월급의 중요한 용도 중 하나는 학자금대출 상환이었다", 1],
    ["어린 시절 살던 집에서 쥐가 나온 적이 있다", 1],
    ["스트레스가 쌓이면 쇼핑으로 푸는 편이다", 0],
    ["어릴 적에 부모님과 함께 미술 전시회를 간 적 있다", 0],
    ["어린 시절 과외를 받아본 적 있다", 0],
    ["부모님이 취미로 골프를 즐기는 편이다", 0],
    ["성인이 되기 전 해외여행을 자주 다녔다", 0],
    ["어린 시절 집안일을 도와주는 가사 도우미가 상주했다", 0],
    ["부모님은 지금도 종종 휴가를 해외로 떠나신다", 0],
    ["대학 등록금은 늘 부모님이 내주셨다", 0],
    ["가족/친척들은 전반적으로 4년제 대학교를 졸업한 편이다", 0],
    ["성인이 되기 이전에 해외유학 경험이 많은 편이다", 0],
    ["어릴 적 부모님이 읽는 책이 책꽂이에 적어도 스무 권 넘게 있었다", 0],
  ];
function Cu(l, r, s) {
  return r.map(([c, f], h) => ({
    id: `s1-${l}-${String(h + 1).padStart(2, "0")}`,
    group: l,
    prompt: c,
    reverse: !!f,
    scale: s,
    allowedAnswers: Array.from({ length: s }, (p, S) => S + 1),
  }));
}
const ks = [
  ...Cu("politics", n1, 6),
  ...Cu("gender", l1, 6),
  ...Cu("openness", i1, 6),
  ...Cu("class", u1, 4),
];
Ks(JSON.stringify(ks));
const ie = ["O", "X"],
  $s = [
    {
      id: "rp01",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "국가의 전력 부족 사태를 해결하기 위해 댐을 건설해야 한다면 수몰지역의 일부 주민들이 강력하게 반대하더라도 강행할 필요가 있다.",
      allowedAnswers: ie,
    },
    {
      id: "rp02",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "특정 암 치료법의 완성을 앞둔 천재 과학자가 과거 중대한 성범죄를 저질렀다는 증거를 발견했다. 그가 없이는 치료법을 완성할 수 없다는 사실이 확실하더라도 그를 고발하겠는가?",
      allowedAnswers: ie,
    },
    {
      id: "rp03",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "'소수를 희생하더라도 더 많은 생명을 구하라'는 목적보다 '살인해서는 안 된다'는 원칙이 항상 우선되어야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "rp04",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "어떤 행위의 도덕적 가치는 그 사람의 '의도'가 아니라 발생한 '결과'에 의해 평가되어야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "rp05",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "흉악범을 놓칠 수 있더라도 불법적인 수사 방식이 동원되어서는 안 된다.",
      allowedAnswers: ie,
    },
    {
      id: "rp06",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "수만 명이 모여 있는 종합운동장에 폭탄 테러가 예고되었다. 폭탄의 정확한 위치를 알 수 있는 유일한 방법이 테러 용의자의 무고한 어린 자녀를 고문하는 것이라면 고문해야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "rp07",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "탈세를 일삼는 부패한 기업의 계좌를 해킹해 그 돈을 자선기관의 운영비로 전액 기부할 수 있는 기회가 생겼다면 법을 어기더라도 해킹을 실행할 것이다.",
      allowedAnswers: ie,
    },
    {
      id: "rp08",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "자율주행 자동차는 여러 명의 보행자와 충돌할 상황에 처하면 운전자를 희생시키더라도 다수를 살리는 방향으로 설계되어야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "rp09",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "명백하게 중범죄를 저지를 것으로 예측되는 사람이 있더라도 아직 범죄를 저지르지 않았다면 미리 구금할 수 없다.",
      allowedAnswers: ie,
    },
    {
      id: "rp10",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "무고한 사람 한 명을 책임자로 지목해 처벌함으로써 폭도들의 분노를 잠재우고 시민들의 안전을 보장할 수 있다면 한 사람을 희생시킬 수 있다.",
      allowedAnswers: ie,
    },
    {
      id: "rp11",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "실제 피해자가 발생하지 않는 가상현실 안에서라도 특정 집단을 대상으로 하는 고문이나 학살 등 반인륜적인 행위는 창작의 자유를 침해하더라도 규제해야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "rp12",
      group: "원칙-결과",
      agreeValue: "결과",
      prompt:
        "규칙을 철저히 지키느라 일을 그르치는 사람보다 규칙을 조금 어기더라도 성과를 내는 사람이 유능한 인재다.",
      allowedAnswers: ie,
    },
    {
      id: "rp13",
      group: "원칙-결과",
      agreeValue: "원칙",
      prompt:
        "중대한 공익을 침해하는 기업의 부정을 고발하면 무고한 많은 사람들이 일자리를 잃게 되더라도 고발해야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "sa01",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "성공은 노력과 자기관리의 산물이며 운이나 배경이 차지하는 비중은 미미하다.",
      allowedAnswers: ie,
    },
    {
      id: "sa02",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "대기업 인턴십 기회가 부모의 인맥으로 주어졌더라도 실제 업무를 완벽하게 수행해냈다면 채용 결정에는 문제가 없다.",
      allowedAnswers: ie,
    },
    {
      id: "sa03",
      group: "구조-능력",
      agreeValue: "구조",
      prompt:
        "기업이나 조직의 인력을 실력으로 선발했더라도 인적 구성이 특정 출신지·학교·성별로 치우친다면 조정할 필요가 있다.",
      allowedAnswers: ie,
    },
    {
      id: "sa04",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "가난한 사람이 가난에서 벗어나지 못하는 주된 이유는 본인의 의지와 노력이 부족하기 때문이다.",
      allowedAnswers: ie,
    },
    {
      id: "sa05",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "소득세와 재산세를 내며 모은 자산을 자식에게 물려줄 때 상속세를 다시 부과하는 것은 개인 자산을 과도하게 침해한다.",
      allowedAnswers: ie,
    },
    {
      id: "sa06",
      group: "구조-능력",
      agreeValue: "구조",
      prompt:
        "청년 실업은 사회 구조에 근본적인 원인이 있으므로 젊은 세대가 고생을 안 하려는 것이 문제라고 비판할 수 없다.",
      allowedAnswers: ie,
    },
    {
      id: "sa07",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "같은 비용이라면 경쟁에서 뒤처진 사람을 구제하는 것보다 뛰어난 인재를 육성하는 데 쓰는 편이 더 가치 있다.",
      allowedAnswers: ie,
    },
    {
      id: "sa08",
      group: "구조-능력",
      agreeValue: "구조",
      prompt:
        "일반 직원과 CEO의 연봉이 수백 배 차이 나는 것은 기득권자에게 유리한 사회 구조 때문이므로 적절한 성과 반영이라고 보기 어렵다.",
      allowedAnswers: ie,
    },
    {
      id: "sa09",
      group: "구조-능력",
      agreeValue: "구조",
      prompt:
        "시골 오지 학생의 성적이 낮더라도 열악한 교육 환경을 고려해 입시에서 가산점을 주는 제도는 필요하다.",
      allowedAnswers: ie,
    },
    {
      id: "sa10",
      group: "구조-능력",
      agreeValue: "구조",
      prompt:
        "범죄의 발생 원인은 개인의 도덕적 결함보다 그가 처했던 환경과 사회 구조에서 찾아야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "sa11",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "성공한 기업가의 막대한 부와 명예는 사회에 기여한 만큼 주어지는 정당한 보상이다.",
      allowedAnswers: ie,
    },
    {
      id: "sa12",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "모두에게 동일한 시험 기회를 주는 것만으로 공정한 경쟁 조건은 충분히 갖춰진 것이다.",
      allowedAnswers: ie,
    },
    {
      id: "sa13",
      group: "구조-능력",
      agreeValue: "능력",
      prompt:
        "지방 도시가 소멸하는 것은 시장 원리에 따른 자연스러운 현상이므로 이를 막기 위해 과도한 예산을 투입하는 것은 국가 역량의 낭비다.",
      allowedAnswers: ie,
    },
    {
      id: "ms01",
      group: "의미-실리",
      agreeValue: "의미",
      prompt:
        "상품의 가성비가 훌륭하더라도 윤리적으로 문제가 있는 기업이라면 구매할 수 없다.",
      allowedAnswers: ie,
    },
    {
      id: "ms02",
      group: "의미-실리",
      agreeValue: "실리",
      prompt: "더 높은 연봉을 위해서라면 가족·친구와의 시간을 포기할 수 있다.",
      allowedAnswers: ie,
    },
    {
      id: "ms03",
      group: "의미-실리",
      agreeValue: "실리",
      prompt:
        "인정과 보상이 주어지지 않는다면 굳이 시간이나 비용을 들여 기부나 선행을 하고 싶지는 않다.",
      allowedAnswers: ie,
    },
    {
      id: "ms04",
      group: "의미-실리",
      agreeValue: "의미",
      prompt:
        "평생 안정적인 소득이 주어져도 사회적으로 유해하다고 여겨지는 업종에서는 일할 의향이 없다.",
      allowedAnswers: ie,
    },
    {
      id: "ms05",
      group: "의미-실리",
      agreeValue: "의미",
      prompt:
        "내가 정말 싫어하는 종류의 사람이라면 나의 직업적 성과에 큰 도움이 되어도 사적으로 친밀한 관계를 갖지 않겠다.",
      allowedAnswers: ie,
    },
    {
      id: "ms06",
      group: "의미-실리",
      agreeValue: "실리",
      prompt:
        "사회의 공정함이나 정의를 논하기 전에 일단 나의 경제적 자유를 얻는 것이 가장 중요한 과업이다.",
      allowedAnswers: ie,
    },
    {
      id: "ms07",
      group: "의미-실리",
      agreeValue: "의미",
      prompt:
        "내 자식에게는 영리하게 돈 버는 법보다 양심에 따라 사는 법을 먼저 가르치겠다.",
      allowedAnswers: ie,
    },
    {
      id: "ms08",
      group: "의미-실리",
      agreeValue: "실리",
      prompt:
        "다소 부패한 정치인이더라도 내 자산을 증식시켜 준다면 투표할 수 있다.",
      allowedAnswers: ie,
    },
    {
      id: "ms10",
      group: "의미-실리",
      agreeValue: "실리",
      prompt: "솔직히 인생에서 만나는 대부분의 문제는 돈으로 해결할 수 있다.",
      allowedAnswers: ie,
    },
    {
      id: "ms11",
      group: "의미-실리",
      agreeValue: "의미",
      prompt:
        "직업을 선택할 때는 통장에 찍히는 숫자보다 적성이나 보람이 최우선이어야 한다.",
      allowedAnswers: ie,
    },
    {
      id: "ms13",
      group: "의미-실리",
      agreeValue: "실리",
      prompt:
        "자본주의 사회에서 모든 상품이나 서비스의 가치는 가격이 증명한다.",
      allowedAnswers: ie,
    },
  ];
Ks(JSON.stringify($s));
const r1 = () => {};
var jm = {};
const hp = function (l) {
    const r = [];
    let s = 0;
    for (let c = 0; c < l.length; c++) {
      let f = l.charCodeAt(c);
      f < 128
        ? (r[s++] = f)
        : f < 2048
          ? ((r[s++] = (f >> 6) | 192), (r[s++] = (f & 63) | 128))
          : (f & 64512) === 55296 &&
              c + 1 < l.length &&
              (l.charCodeAt(c + 1) & 64512) === 56320
            ? ((f = 65536 + ((f & 1023) << 10) + (l.charCodeAt(++c) & 1023)),
              (r[s++] = (f >> 18) | 240),
              (r[s++] = ((f >> 12) & 63) | 128),
              (r[s++] = ((f >> 6) & 63) | 128),
              (r[s++] = (f & 63) | 128))
            : ((r[s++] = (f >> 12) | 224),
              (r[s++] = ((f >> 6) & 63) | 128),
              (r[s++] = (f & 63) | 128));
    }
    return r;
  },
  c1 = function (l) {
    const r = [];
    let s = 0,
      c = 0;
    for (; s < l.length; ) {
      const f = l[s++];
      if (f < 128) r[c++] = String.fromCharCode(f);
      else if (f > 191 && f < 224) {
        const h = l[s++];
        r[c++] = String.fromCharCode(((f & 31) << 6) | (h & 63));
      } else if (f > 239 && f < 365) {
        const h = l[s++],
          p = l[s++],
          S = l[s++],
          y =
            (((f & 7) << 18) | ((h & 63) << 12) | ((p & 63) << 6) | (S & 63)) -
            65536;
        ((r[c++] = String.fromCharCode(55296 + (y >> 10))),
          (r[c++] = String.fromCharCode(56320 + (y & 1023))));
      } else {
        const h = l[s++],
          p = l[s++];
        r[c++] = String.fromCharCode(
          ((f & 15) << 12) | ((h & 63) << 6) | (p & 63),
        );
      }
    }
    return r.join("");
  },
  Js = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(l, r) {
      if (!Array.isArray(l))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const s = r ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        c = [];
      for (let f = 0; f < l.length; f += 3) {
        const h = l[f],
          p = f + 1 < l.length,
          S = p ? l[f + 1] : 0,
          y = f + 2 < l.length,
          g = y ? l[f + 2] : 0,
          D = h >> 2,
          A = ((h & 3) << 4) | (S >> 4);
        let H = ((S & 15) << 2) | (g >> 6),
          V = g & 63;
        (y || ((V = 64), p || (H = 64)), c.push(s[D], s[A], s[H], s[V]));
      }
      return c.join("");
    },
    encodeString(l, r) {
      return this.HAS_NATIVE_SUPPORT && !r
        ? btoa(l)
        : this.encodeByteArray(hp(l), r);
    },
    decodeString(l, r) {
      return this.HAS_NATIVE_SUPPORT && !r
        ? atob(l)
        : c1(this.decodeStringToByteArray(l, r));
    },
    decodeStringToByteArray(l, r) {
      this.init_();
      const s = r ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        c = [];
      for (let f = 0; f < l.length; ) {
        const h = s[l.charAt(f++)],
          S = f < l.length ? s[l.charAt(f)] : 0;
        ++f;
        const g = f < l.length ? s[l.charAt(f)] : 64;
        ++f;
        const A = f < l.length ? s[l.charAt(f)] : 64;
        if ((++f, h == null || S == null || g == null || A == null))
          throw new s1();
        const H = (h << 2) | (S >> 4);
        if ((c.push(H), g !== 64)) {
          const V = ((S << 4) & 240) | (g >> 2);
          if ((c.push(V), A !== 64)) {
            const Y = ((g << 6) & 192) | A;
            c.push(Y);
          }
        }
      }
      return c;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let l = 0; l < this.ENCODED_VALS.length; l++)
          ((this.byteToCharMap_[l] = this.ENCODED_VALS.charAt(l)),
            (this.charToByteMap_[this.byteToCharMap_[l]] = l),
            (this.byteToCharMapWebSafe_[l] =
              this.ENCODED_VALS_WEBSAFE.charAt(l)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[l]] = l),
            l >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(l)] = l),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(l)] = l)));
      }
    },
  };
class s1 extends Error {
  constructor() {
    (super(...arguments), (this.name = "DecodeBase64StringError"));
  }
}
const o1 = function (l) {
    const r = hp(l);
    return Js.encodeByteArray(r, !0);
  },
  mp = function (l) {
    return o1(l).replace(/\./g, "");
  },
  f1 = function (l) {
    try {
      return Js.decodeString(l, !0);
    } catch (r) {
      console.error("base64Decode failed: ", r);
    }
    return null;
  };
function pp() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
const d1 = () => pp().__FIREBASE_DEFAULTS__,
  h1 = () => {
    if (typeof process > "u" || typeof jm > "u") return;
    const l = jm.__FIREBASE_DEFAULTS__;
    if (l) return JSON.parse(l);
  },
  m1 = () => {
    if (typeof document > "u") return;
    let l;
    try {
      l = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const r = l && f1(l[1]);
    return r && JSON.parse(r);
  },
  p1 = () => {
    try {
      return r1() || d1() || h1() || m1();
    } catch (l) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${l}`);
      return;
    }
  },
  gp = () => p1()?.config;
class Pl {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((r, s) => {
        ((this.resolve = r), (this.reject = s));
      })));
  }
  wrapCallback(r) {
    return (s, c) => {
      (s ? this.reject(s) : this.resolve(c),
        typeof r == "function" &&
          (this.promise.catch(() => {}), r.length === 1 ? r(s) : r(s, c)));
    };
  }
}
function Fs() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function g1() {
  return new Promise((l, r) => {
    try {
      let s = !0;
      const c = "validate-browser-context-for-indexeddb-analytics-module",
        f = self.indexedDB.open(c);
      ((f.onsuccess = () => {
        (f.result.close(), s || self.indexedDB.deleteDatabase(c), l(!0));
      }),
        (f.onupgradeneeded = () => {
          s = !1;
        }),
        (f.onerror = () => {
          r(f.error?.message || "");
        }));
    } catch (s) {
      r(s);
    }
  });
}
const y1 = "FirebaseError";
class ri extends Error {
  constructor(r, s, c) {
    (super(s),
      (this.code = r),
      (this.customData = c),
      (this.name = y1),
      Object.setPrototypeOf(this, ri.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Ws.prototype.create));
  }
}
class Ws {
  constructor(r, s, c) {
    ((this.service = r), (this.serviceName = s), (this.errors = c));
  }
  create(r, ...s) {
    const c = s[0] || {},
      f = `${this.service}/${r}`,
      h = this.errors[r],
      p = h ? v1(h, c) : "Error",
      S = `${this.serviceName}: ${p} (${f}).`;
    return new ri(f, S, c);
  }
}
function v1(l, r) {
  try {
    let s = 0,
      c = "";
    for (; s < l.length; ) {
      const f = l.indexOf("{$", s);
      if (f === -1) {
        c += l.substring(s);
        break;
      }
      const h = l.indexOf("}", f + 2);
      if (h === -1) {
        c += l.substring(s);
        break;
      }
      const p = l.substring(f + 2, h),
        S = r[p];
      ((c += l.substring(s, f) + (S != null ? String(S) : `<${p}?>`)),
        (s = h + 1));
    }
    return c;
  } catch {
    return l;
  }
}
function Ns(l, r) {
  if (l === r) return !0;
  const s = Object.keys(l),
    c = Object.keys(r);
  for (const f of s) {
    if (!c.includes(f)) return !1;
    const h = l[f],
      p = r[f];
    if (Rm(h) && Rm(p)) {
      if (!Ns(h, p)) return !1;
    } else if (h !== p) return !1;
  }
  for (const f of c) if (!s.includes(f)) return !1;
  return !0;
}
function Rm(l) {
  return l !== null && typeof l == "object";
}
const b1 = 1e3,
  S1 = 2,
  E1 = 14400 * 1e3,
  x1 = 0.5;
function A1(l, r = b1, s = S1) {
  const c = r * Math.pow(s, l),
    f = Math.round(x1 * c * (Math.random() - 0.5) * 2);
  return Math.min(E1, c + f);
}
function _1(l) {
  return l && l._delegate ? l._delegate : l;
}
class Fn {
  constructor(r, s, c) {
    ((this.name = r),
      (this.instanceFactory = s),
      (this.type = c),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(r) {
    return ((this.instantiationMode = r), this);
  }
  setMultipleInstances(r) {
    return ((this.multipleInstances = r), this);
  }
  setServiceProps(r) {
    return ((this.serviceProps = r), this);
  }
  setInstanceCreatedCallback(r) {
    return ((this.onInstanceCreated = r), this);
  }
}
const on = "[DEFAULT]";
class T1 {
  constructor(r, s) {
    ((this.name = r),
      (this.container = s),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(r) {
    const s = this.normalizeInstanceIdentifier(r);
    if (!this.instancesDeferred.has(s)) {
      const c = new Pl();
      if (
        (this.instancesDeferred.set(s, c),
        this.isInitialized(s) || this.shouldAutoInitialize())
      )
        try {
          const f = this.getOrInitializeService({ instanceIdentifier: s });
          f && c.resolve(f);
        } catch {}
    }
    return this.instancesDeferred.get(s).promise;
  }
  getImmediate(r) {
    const s = this.normalizeInstanceIdentifier(r?.identifier),
      c = r?.optional ?? !1;
    if (this.isInitialized(s) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: s });
      } catch (f) {
        if (c) return null;
        throw f;
      }
    else {
      if (c) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(r) {
    if (r.name !== this.name)
      throw Error(`Mismatching Component ${r.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = r), !!this.shouldAutoInitialize())) {
      if (R1(r))
        try {
          this.getOrInitializeService({ instanceIdentifier: on });
        } catch {}
      for (const [s, c] of this.instancesDeferred.entries()) {
        const f = this.normalizeInstanceIdentifier(s);
        try {
          const h = this.getOrInitializeService({ instanceIdentifier: f });
          c.resolve(h);
        } catch {}
      }
    }
  }
  clearInstance(r = on) {
    (this.instancesDeferred.delete(r),
      this.instancesOptions.delete(r),
      this.instances.delete(r));
  }
  async delete() {
    const r = Array.from(this.instances.values());
    await Promise.all([
      ...r.filter((s) => "INTERNAL" in s).map((s) => s.INTERNAL.delete()),
      ...r.filter((s) => "_delete" in s).map((s) => s._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(r = on) {
    return this.instances.has(r);
  }
  getOptions(r = on) {
    return this.instancesOptions.get(r) || {};
  }
  initialize(r = {}) {
    const { options: s = {} } = r,
      c = this.normalizeInstanceIdentifier(r.instanceIdentifier);
    if (this.isInitialized(c))
      throw Error(`${this.name}(${c}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const f = this.getOrInitializeService({
      instanceIdentifier: c,
      options: s,
    });
    for (const [h, p] of this.instancesDeferred.entries()) {
      const S = this.normalizeInstanceIdentifier(h);
      c === S && p.resolve(f);
    }
    return f;
  }
  onInit(r, s) {
    const c = this.normalizeInstanceIdentifier(s),
      f = this.onInitCallbacks.get(c) ?? new Set();
    (f.add(r), this.onInitCallbacks.set(c, f));
    const h = this.instances.get(c);
    return (
      h && r(h, c),
      () => {
        f.delete(r);
      }
    );
  }
  invokeOnInitCallbacks(r, s) {
    const c = this.onInitCallbacks.get(s);
    if (c)
      for (const f of c)
        try {
          f(r, s);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: r, options: s = {} }) {
    let c = this.instances.get(r);
    if (
      !c &&
      this.component &&
      ((c = this.component.instanceFactory(this.container, {
        instanceIdentifier: j1(r),
        options: s,
      })),
      this.instances.set(r, c),
      this.instancesOptions.set(r, s),
      this.invokeOnInitCallbacks(c, r),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, r, c);
      } catch {}
    return c || null;
  }
  normalizeInstanceIdentifier(r = on) {
    return this.component ? (this.component.multipleInstances ? r : on) : r;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function j1(l) {
  return l === on ? void 0 : l;
}
function R1(l) {
  return l.instantiationMode === "EAGER";
}
class C1 {
  constructor(r) {
    ((this.name = r), (this.providers = new Map()));
  }
  addComponent(r) {
    const s = this.getProvider(r.name);
    if (s.isComponentSet())
      throw new Error(
        `Component ${r.name} has already been registered with ${this.name}`,
      );
    s.setComponent(r);
  }
  addOrOverwriteComponent(r) {
    (this.getProvider(r.name).isComponentSet() && this.providers.delete(r.name),
      this.addComponent(r));
  }
  getProvider(r) {
    if (this.providers.has(r)) return this.providers.get(r);
    const s = new T1(r, this);
    return (this.providers.set(r, s), s);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
var Ne;
(function (l) {
  ((l[(l.DEBUG = 0)] = "DEBUG"),
    (l[(l.VERBOSE = 1)] = "VERBOSE"),
    (l[(l.INFO = 2)] = "INFO"),
    (l[(l.WARN = 3)] = "WARN"),
    (l[(l.ERROR = 4)] = "ERROR"),
    (l[(l.SILENT = 5)] = "SILENT"));
})(Ne || (Ne = {}));
const D1 = {
    debug: Ne.DEBUG,
    verbose: Ne.VERBOSE,
    info: Ne.INFO,
    warn: Ne.WARN,
    error: Ne.ERROR,
    silent: Ne.SILENT,
  },
  N1 = Ne.INFO,
  O1 = {
    [Ne.DEBUG]: "log",
    [Ne.VERBOSE]: "log",
    [Ne.INFO]: "info",
    [Ne.WARN]: "warn",
    [Ne.ERROR]: "error",
  },
  M1 = (l, r, ...s) => {
    if (r < l.logLevel) return;
    const c = new Date().toISOString(),
      f = O1[r];
    if (f) console[f](`[${c}]  ${l.name}:`, ...s);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${r})`,
      );
  };
class yp {
  constructor(r) {
    ((this.name = r),
      (this._logLevel = N1),
      (this._logHandler = M1),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(r) {
    if (!(r in Ne))
      throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);
    this._logLevel = r;
  }
  setLogLevel(r) {
    this._logLevel = typeof r == "string" ? D1[r] : r;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(r) {
    if (typeof r != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = r;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(r) {
    this._userLogHandler = r;
  }
  debug(...r) {
    (this._userLogHandler && this._userLogHandler(this, Ne.DEBUG, ...r),
      this._logHandler(this, Ne.DEBUG, ...r));
  }
  log(...r) {
    (this._userLogHandler && this._userLogHandler(this, Ne.VERBOSE, ...r),
      this._logHandler(this, Ne.VERBOSE, ...r));
  }
  info(...r) {
    (this._userLogHandler && this._userLogHandler(this, Ne.INFO, ...r),
      this._logHandler(this, Ne.INFO, ...r));
  }
  warn(...r) {
    (this._userLogHandler && this._userLogHandler(this, Ne.WARN, ...r),
      this._logHandler(this, Ne.WARN, ...r));
  }
  error(...r) {
    (this._userLogHandler && this._userLogHandler(this, Ne.ERROR, ...r),
      this._logHandler(this, Ne.ERROR, ...r));
  }
}
const z1 = (l, r) => r.some((s) => l instanceof s);
let Cm, Dm;
function w1() {
  return (
    Cm ||
    (Cm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function U1() {
  return (
    Dm ||
    (Dm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const vp = new WeakMap(),
  Os = new WeakMap(),
  bp = new WeakMap(),
  vs = new WeakMap(),
  Is = new WeakMap();
function B1(l) {
  const r = new Promise((s, c) => {
    const f = () => {
        (l.removeEventListener("success", h),
          l.removeEventListener("error", p));
      },
      h = () => {
        (s(Ga(l.result)), f());
      },
      p = () => {
        (c(l.error), f());
      };
    (l.addEventListener("success", h), l.addEventListener("error", p));
  });
  return (
    r
      .then((s) => {
        s instanceof IDBCursor && vp.set(s, l);
      })
      .catch(() => {}),
    Is.set(r, l),
    r
  );
}
function H1(l) {
  if (Os.has(l)) return;
  const r = new Promise((s, c) => {
    const f = () => {
        (l.removeEventListener("complete", h),
          l.removeEventListener("error", p),
          l.removeEventListener("abort", p));
      },
      h = () => {
        (s(), f());
      },
      p = () => {
        (c(l.error || new DOMException("AbortError", "AbortError")), f());
      };
    (l.addEventListener("complete", h),
      l.addEventListener("error", p),
      l.addEventListener("abort", p));
  });
  Os.set(l, r);
}
let Ms = {
  get(l, r, s) {
    if (l instanceof IDBTransaction) {
      if (r === "done") return Os.get(l);
      if (r === "objectStoreNames") return l.objectStoreNames || bp.get(l);
      if (r === "store")
        return s.objectStoreNames[1]
          ? void 0
          : s.objectStore(s.objectStoreNames[0]);
    }
    return Ga(l[r]);
  },
  set(l, r, s) {
    return ((l[r] = s), !0);
  },
  has(l, r) {
    return l instanceof IDBTransaction && (r === "done" || r === "store")
      ? !0
      : r in l;
  },
};
function L1(l) {
  Ms = l(Ms);
}
function q1(l) {
  return l === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (r, ...s) {
        const c = l.call(bs(this), r, ...s);
        return (bp.set(c, r.sort ? r.sort() : [r]), Ga(c));
      }
    : U1().includes(l)
      ? function (...r) {
          return (l.apply(bs(this), r), Ga(vp.get(this)));
        }
      : function (...r) {
          return Ga(l.apply(bs(this), r));
        };
}
function V1(l) {
  return typeof l == "function"
    ? q1(l)
    : (l instanceof IDBTransaction && H1(l),
      z1(l, w1()) ? new Proxy(l, Ms) : l);
}
function Ga(l) {
  if (l instanceof IDBRequest) return B1(l);
  if (vs.has(l)) return vs.get(l);
  const r = V1(l);
  return (r !== l && (vs.set(l, r), Is.set(r, l)), r);
}
const bs = (l) => Is.get(l);
function Y1(l, r, { blocked: s, upgrade: c, blocking: f, terminated: h } = {}) {
  const p = indexedDB.open(l, r),
    S = Ga(p);
  return (
    c &&
      p.addEventListener("upgradeneeded", (y) => {
        c(Ga(p.result), y.oldVersion, y.newVersion, Ga(p.transaction), y);
      }),
    s && p.addEventListener("blocked", (y) => s(y.oldVersion, y.newVersion, y)),
    S.then((y) => {
      (h && y.addEventListener("close", () => h()),
        f &&
          y.addEventListener("versionchange", (g) =>
            f(g.oldVersion, g.newVersion, g),
          ));
    }).catch(() => {}),
    S
  );
}
const G1 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  X1 = ["put", "add", "delete", "clear"],
  Ss = new Map();
function Nm(l, r) {
  if (!(l instanceof IDBDatabase && !(r in l) && typeof r == "string")) return;
  if (Ss.get(r)) return Ss.get(r);
  const s = r.replace(/FromIndex$/, ""),
    c = r !== s,
    f = X1.includes(s);
  if (
    !(s in (c ? IDBIndex : IDBObjectStore).prototype) ||
    !(f || G1.includes(s))
  )
    return;
  const h = async function (p, ...S) {
    const y = this.transaction(p, f ? "readwrite" : "readonly");
    let g = y.store;
    return (
      c && (g = g.index(S.shift())),
      (await Promise.all([g[s](...S), f && y.done]))[0]
    );
  };
  return (Ss.set(r, h), h);
}
L1((l) => ({
  ...l,
  get: (r, s, c) => Nm(r, s) || l.get(r, s, c),
  has: (r, s) => !!Nm(r, s) || l.has(r, s),
}));
class Z1 {
  constructor(r) {
    this.container = r;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((s) => {
        if (Q1(s)) {
          const c = s.getImmediate();
          return `${c.library}/${c.version}`;
        } else return null;
      })
      .filter((s) => s)
      .join(" ");
  }
}
function Q1(l) {
  return l.getComponent()?.type === "VERSION";
}
const zs = "@firebase/app",
  Om = "0.16.0";
const pa = new yp("@firebase/app"),
  K1 = "@firebase/app-compat",
  k1 = "@firebase/analytics-compat",
  $1 = "@firebase/analytics",
  J1 = "@firebase/app-check-compat",
  F1 = "@firebase/app-check",
  W1 = "@firebase/auth",
  I1 = "@firebase/auth-compat",
  P1 = "@firebase/database",
  eb = "@firebase/data-connect",
  tb = "@firebase/database-compat",
  ab = "@firebase/functions",
  nb = "@firebase/functions-compat",
  lb = "@firebase/installations",
  ib = "@firebase/installations-compat",
  ub = "@firebase/messaging",
  rb = "@firebase/messaging-compat",
  cb = "@firebase/performance",
  sb = "@firebase/performance-compat",
  ob = "@firebase/remote-config",
  fb = "@firebase/remote-config-compat",
  db = "@firebase/storage",
  hb = "@firebase/storage-compat",
  mb = "@firebase/firestore",
  pb = "@firebase/ai",
  gb = "@firebase/firestore-compat",
  yb = "firebase";
const ws = "[DEFAULT]",
  vb = {
    [zs]: "fire-core",
    [K1]: "fire-core-compat",
    [$1]: "fire-analytics",
    [k1]: "fire-analytics-compat",
    [F1]: "fire-app-check",
    [J1]: "fire-app-check-compat",
    [W1]: "fire-auth",
    [I1]: "fire-auth-compat",
    [P1]: "fire-rtdb",
    [eb]: "fire-data-connect",
    [tb]: "fire-rtdb-compat",
    [ab]: "fire-fn",
    [nb]: "fire-fn-compat",
    [lb]: "fire-iid",
    [ib]: "fire-iid-compat",
    [ub]: "fire-fcm",
    [rb]: "fire-fcm-compat",
    [cb]: "fire-perf",
    [sb]: "fire-perf-compat",
    [ob]: "fire-rc",
    [fb]: "fire-rc-compat",
    [db]: "fire-gcs",
    [hb]: "fire-gcs-compat",
    [mb]: "fire-fst",
    [gb]: "fire-fst-compat",
    [pb]: "fire-vertex",
    "fire-js": "fire-js",
    [yb]: "fire-js-all",
  };
const Hu = new Map(),
  bb = new Map(),
  Us = new Map();
function Mm(l, r) {
  try {
    l.container.addComponent(r);
  } catch (s) {
    pa.debug(
      `Component ${r.name} failed to register with FirebaseApp ${l.name}`,
      s,
    );
  }
}
function ei(l) {
  const r = l.name;
  if (Us.has(r))
    return (
      pa.debug(`There were multiple attempts to register component ${r}.`),
      !1
    );
  Us.set(r, l);
  for (const s of Hu.values()) Mm(s, l);
  for (const s of bb.values()) Mm(s, l);
  return !0;
}
function Sp(l, r) {
  const s = l.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return (s && s.triggerHeartbeat(), l.container.getProvider(r));
}
const Sb = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  ha = new Ws("app", "Firebase", Sb);
class Eb {
  constructor(r, s, c) {
    ((this._isDeleted = !1),
      (this._options = { ...r }),
      (this._config = { ...s }),
      (this._name = s.name),
      (this._automaticDataCollectionEnabled = s.automaticDataCollectionEnabled),
      (this._container = c),
      this.container.addComponent(new Fn("app", () => this, "PUBLIC")));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(r) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = r));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(r) {
    this._isDeleted = r;
  }
  checkDestroyed() {
    if (this.isDeleted) throw ha.create("app-deleted", { appName: this._name });
  }
}
function Ep(l, r = {}) {
  let s = l;
  typeof r != "object" && (r = { name: r });
  const c = { name: ws, automaticDataCollectionEnabled: !0, ...r },
    f = c.name;
  if (typeof f != "string" || !f)
    throw ha.create("bad-app-name", { appName: String(f) });
  if ((s || (s = gp()), !s)) throw ha.create("no-options");
  const h = Hu.get(f);
  if (h)
    if (Ns(s, h.options)) {
      if (Ns(c, h.config)) return h;
      throw ha.create("duplicate-app", {
        appName: f,
        mismatchedParam: "config",
        oldValue: JSON.stringify(h.config),
        newValue: JSON.stringify(c),
      });
    } else
      throw ha.create("duplicate-app", {
        appName: f,
        mismatchedParam: "options",
        oldValue: JSON.stringify(h.options),
        newValue: JSON.stringify(s),
      });
  const p = new C1(f);
  for (const y of Us.values()) p.addComponent(y);
  const S = new Eb(s, c, p);
  return (Hu.set(f, S), S);
}
function xb(l = ws) {
  const r = Hu.get(l);
  if (!r && l === ws && gp()) return Ep();
  if (!r) throw ha.create("no-app", { appName: l });
  return r;
}
function Wl(l, r, s) {
  let c = vb[l] ?? l;
  s && (c += `-${s}`);
  const f = c.match(/\s|\//),
    h = r.match(/\s|\//);
  if (f || h) {
    const p = [`Unable to register library "${c}" with version "${r}":`];
    (f &&
      p.push(
        `library name "${c}" contains illegal characters (whitespace or "/")`,
      ),
      f && h && p.push("and"),
      h &&
        p.push(
          `version name "${r}" contains illegal characters (whitespace or "/")`,
        ),
      pa.warn(p.join(" ")));
    return;
  }
  ei(new Fn(`${c}-version`, () => ({ library: c, version: r }), "VERSION"));
}
const Ab = "firebase-heartbeat-database",
  _b = 1,
  ti = "firebase-heartbeat-store";
let Es = null;
function xp() {
  return (
    Es ||
      (Es = Y1(Ab, _b, {
        upgrade: (l, r) => {
          switch (r) {
            case 0:
              try {
                l.createObjectStore(ti);
              } catch (s) {
                console.warn(s);
              }
          }
        },
      }).catch((l) => {
        throw ha.create("idb-open", { originalErrorMessage: l.message });
      })),
    Es
  );
}
async function Tb(l) {
  try {
    const s = (await xp()).transaction(ti),
      c = await s.objectStore(ti).get(Ap(l));
    return (await s.done, c);
  } catch (r) {
    if (r instanceof ri) pa.warn(r.message);
    else {
      const s = ha.create("idb-get", { originalErrorMessage: r?.message });
      pa.warn(s.message);
    }
  }
}
async function zm(l, r) {
  try {
    const c = (await xp()).transaction(ti, "readwrite");
    (await c.objectStore(ti).put(r, Ap(l)), await c.done);
  } catch (s) {
    if (s instanceof ri) pa.warn(s.message);
    else {
      const c = ha.create("idb-set", { originalErrorMessage: s?.message });
      pa.warn(c.message);
    }
  }
}
function Ap(l) {
  return `${l.name}!${l.options.appId}`;
}
const jb = 1024,
  Rb = 30;
class Cb {
  constructor(r) {
    ((this.container = r), (this._heartbeatsCache = null));
    const s = this.container.getProvider("app").getImmediate();
    ((this._storage = new Nb(s)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((c) => ((this._heartbeatsCache = c), c))));
  }
  async triggerHeartbeat() {
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        c = wm();
      if (
        (this._heartbeatsCache?.heartbeats == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache?.heartbeats == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === c ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === c)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: c, agent: s }),
        this._heartbeatsCache.heartbeats.length > Rb)
      ) {
        const f = Ob(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      pa.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        this._heartbeatsCache?.heartbeats == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const r = wm(),
        { heartbeatsToSend: s, unsentEntries: c } = Db(
          this._heartbeatsCache.heartbeats,
        ),
        f = mp(JSON.stringify({ version: 2, heartbeats: s }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = r),
        c.length > 0
          ? ((this._heartbeatsCache.heartbeats = c),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        f
      );
    } catch (r) {
      return (pa.warn(r), "");
    }
  }
}
function wm() {
  return new Date().toISOString().substring(0, 10);
}
function Db(l, r = jb) {
  const s = [];
  let c = l.slice();
  for (const f of l) {
    const h = s.find((p) => p.agent === f.agent);
    if (h) {
      if ((h.dates.push(f.date), Um(s) > r)) {
        h.dates.pop();
        break;
      }
    } else if ((s.push({ agent: f.agent, dates: [f.date] }), Um(s) > r)) {
      s.pop();
      break;
    }
    c = c.slice(1);
  }
  return { heartbeatsToSend: s, unsentEntries: c };
}
class Nb {
  constructor(r) {
    ((this.app = r),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return Fs()
      ? g1()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const s = await Tb(this.app);
      return s?.heartbeats ? s : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(r) {
    if (await this._canUseIndexedDBPromise) {
      const c = await this.read();
      return zm(this.app, {
        lastSentHeartbeatDate:
          r.lastSentHeartbeatDate ?? c.lastSentHeartbeatDate,
        heartbeats: r.heartbeats,
      });
    } else return;
  }
  async add(r) {
    if (await this._canUseIndexedDBPromise) {
      const c = await this.read();
      return zm(this.app, {
        lastSentHeartbeatDate:
          r.lastSentHeartbeatDate ?? c.lastSentHeartbeatDate,
        heartbeats: [...c.heartbeats, ...r.heartbeats],
      });
    } else return;
  }
}
function Um(l) {
  return mp(JSON.stringify({ version: 2, heartbeats: l })).length;
}
function Ob(l) {
  if (l.length === 0) return -1;
  let r = 0,
    s = l[0].date;
  for (let c = 1; c < l.length; c++)
    l[c].date < s && ((s = l[c].date), (r = c));
  return r;
}
function Mb(l) {
  (ei(new Fn("platform-logger", (r) => new Z1(r), "PRIVATE")),
    ei(new Fn("heartbeat", (r) => new Cb(r), "PRIVATE")),
    Wl(zs, Om, l),
    Wl(zs, Om, "esm2020"),
    Wl("fire-js", ""));
}
Mb("");
var zb = "firebase",
  wb = "12.17.1";
Wl(zb, wb, "app");
const Bs = new Map(),
  _p = { activated: !1, tokenObservers: [] },
  Ub = { initialized: !1, enabled: !1 };
function Qe(l) {
  return Bs.get(l) || { ..._p };
}
function Bb(l, r) {
  return (Bs.set(l, r), Bs.get(l));
}
function Zu() {
  return Ub;
}
const Tp = "https://content-firebaseappcheck.googleapis.com/v1",
  Hb = "exchangeRecaptchaEnterpriseToken",
  Lb = "exchangeDebugToken",
  Bm = { RETRIAL_MIN_WAIT: 30 * 1e3, RETRIAL_MAX_WAIT: 960 * 1e3 },
  qb = 1440 * 60 * 1e3;
class Vb {
  constructor(r, s, c, f, h) {
    if (
      ((this.operation = r),
      (this.retryPolicy = s),
      (this.getWaitDuration = c),
      (this.lowerBound = f),
      (this.upperBound = h),
      (this.pending = null),
      (this.nextErrorWaitInterval = f),
      f > h)
    )
      throw new Error(
        "Proactive refresh lower bound greater than upper bound!",
      );
  }
  start() {
    ((this.nextErrorWaitInterval = this.lowerBound),
      this.process(!0).catch(() => {}));
  }
  stop() {
    this.pending && (this.pending.reject("cancelled"), (this.pending = null));
  }
  isRunning() {
    return !!this.pending;
  }
  async process(r) {
    this.stop();
    try {
      ((this.pending = new Pl()),
        this.pending.promise.catch((s) => {}),
        await Yb(this.getNextRun(r)),
        this.pending.resolve(),
        await this.pending.promise,
        (this.pending = new Pl()),
        this.pending.promise.catch((s) => {}),
        await this.operation(),
        this.pending.resolve(),
        await this.pending.promise,
        this.process(!0).catch(() => {}));
    } catch (s) {
      this.retryPolicy(s) ? this.process(!1).catch(() => {}) : this.stop();
    }
  }
  getNextRun(r) {
    if (r)
      return (
        (this.nextErrorWaitInterval = this.lowerBound),
        this.getWaitDuration()
      );
    {
      const s = this.nextErrorWaitInterval;
      return (
        (this.nextErrorWaitInterval *= 2),
        this.nextErrorWaitInterval > this.upperBound &&
          (this.nextErrorWaitInterval = this.upperBound),
        s
      );
    }
  }
}
function Yb(l) {
  return new Promise((r) => {
    setTimeout(r, l);
  });
}
const Gb = {
    "already-initialized":
      "You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",
    "use-before-activation":
      "App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",
    "fetch-network-error":
      "Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
    "fetch-parse-error":
      "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
    "fetch-status-error":
      "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
    "storage-open":
      "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
    "storage-get":
      "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
    "storage-set":
      "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
    "recaptcha-error": "ReCAPTCHA error.",
    "initial-throttle":
      "{$httpStatus} error. Attempts allowed again after {$time}",
    throttled:
      "Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}",
  },
  ft = new Ws("appCheck", "AppCheck", Gb);
function Hm(l = !1) {
  return l ? self.grecaptcha?.enterprise : self.grecaptcha;
}
function Ps(l) {
  if (!Qe(l).activated)
    throw ft.create("use-before-activation", { appName: l.name });
}
function jp(l) {
  const r = Math.round(l / 1e3),
    s = Math.floor(r / (3600 * 24)),
    c = Math.floor((r - s * 3600 * 24) / 3600),
    f = Math.floor((r - s * 3600 * 24 - c * 3600) / 60),
    h = r - s * 3600 * 24 - c * 3600 - f * 60;
  let p = "";
  return (
    s && (p += Du(s) + "d:"),
    c && (p += Du(c) + "h:"),
    (p += Du(f) + "m:" + Du(h) + "s"),
    p
  );
}
function Du(l) {
  return l === 0 ? "00" : l >= 10 ? l.toString() : "0" + l;
}
async function eo({ url: l, body: r }, s) {
  const c = { "Content-Type": "application/json" },
    f = s.getImmediate({ optional: !0 });
  if (f) {
    const A = await f.getHeartbeatsHeader();
    A && (c["X-Firebase-Client"] = A);
  }
  const h = { method: "POST", body: JSON.stringify(r), headers: c };
  let p;
  try {
    p = await fetch(l, h);
  } catch (A) {
    throw ft.create("fetch-network-error", {
      originalErrorMessage: A?.message,
    });
  }
  if (p.status !== 200)
    throw ft.create("fetch-status-error", { httpStatus: p.status });
  let S;
  try {
    S = await p.json();
  } catch (A) {
    throw ft.create("fetch-parse-error", { originalErrorMessage: A?.message });
  }
  const y = S.ttl.match(/^([\d.]+)(s)$/);
  if (!y || !y[2] || isNaN(Number(y[1])))
    throw ft.create("fetch-parse-error", {
      originalErrorMessage: `ttl field (timeToLive) is not in standard Protobuf Duration format: ${S.ttl}`,
    });
  const g = Number(y[1]) * 1e3,
    D = Date.now();
  return { token: S.token, expireTimeMillis: D + g, issuedAtTimeMillis: D };
}
function Xb(l, r) {
  const { projectId: s, appId: c, apiKey: f } = l.options;
  return {
    url: `${Tp}/projects/${s}/apps/${c}:${Hb}?key=${f}`,
    body: { recaptcha_enterprise_token: r },
  };
}
function Rp(l, r) {
  const { projectId: s, appId: c, apiKey: f } = l.options;
  return {
    url: `${Tp}/projects/${s}/apps/${c}:${Lb}?key=${f}`,
    body: { debug_token: r },
  };
}
const Zb = "firebase-app-check-database",
  Qb = 1,
  ai = "firebase-app-check-store",
  Cp = "debug-token";
let Nu = null;
function Dp() {
  return (
    Nu ||
    ((Nu = new Promise((l, r) => {
      try {
        const s = indexedDB.open(Zb, Qb);
        ((s.onsuccess = (c) => {
          l(c.target.result);
        }),
          (s.onerror = (c) => {
            r(
              ft.create("storage-open", {
                originalErrorMessage: c.target.error?.message,
              }),
            );
          }),
          (s.onupgradeneeded = (c) => {
            const f = c.target.result;
            c.oldVersion === 0 &&
              f.createObjectStore(ai, { keyPath: "compositeKey" });
          }));
      } catch (s) {
        r(ft.create("storage-open", { originalErrorMessage: s?.message }));
      }
    })),
    Nu)
  );
}
function Kb(l) {
  return Op(Mp(l));
}
function kb(l, r) {
  return Np(Mp(l), r);
}
function $b(l) {
  return Np(Cp, l);
}
function Jb() {
  return Op(Cp);
}
async function Np(l, r) {
  const c = (await Dp()).transaction(ai, "readwrite"),
    h = c.objectStore(ai).put({ compositeKey: l, value: r });
  return new Promise((p, S) => {
    ((h.onsuccess = (y) => {
      p();
    }),
      (c.onerror = (y) => {
        S(
          ft.create("storage-set", {
            originalErrorMessage: y.target.error?.message,
          }),
        );
      }));
  });
}
async function Op(l) {
  const s = (await Dp()).transaction(ai, "readonly"),
    f = s.objectStore(ai).get(l);
  return new Promise((h, p) => {
    ((f.onsuccess = (S) => {
      const y = S.target.result;
      h(y ? y.value : void 0);
    }),
      (s.onerror = (S) => {
        p(
          ft.create("storage-get", {
            originalErrorMessage: S.target.error?.message,
          }),
        );
      }));
  });
}
function Mp(l) {
  return `${l.options.appId}-${l.name}`;
}
const Ya = new yp("@firebase/app-check");
async function Fb(l) {
  if (Fs()) {
    let r;
    try {
      r = await Kb(l);
    } catch (s) {
      Ya.warn(`Failed to read token from IndexedDB. Error: ${s}`);
    }
    return r;
  }
}
function xs(l, r) {
  return Fs()
    ? kb(l, r).catch((s) => {
        Ya.warn(`Failed to write token to IndexedDB. Error: ${s}`);
      })
    : Promise.resolve();
}
async function Wb() {
  let l;
  try {
    l = await Jb();
  } catch {}
  if (l) return l;
  {
    const r = crypto.randomUUID();
    return (
      $b(r).catch((s) =>
        Ya.warn(`Failed to persist debug token to IndexedDB. Error: ${s}`),
      ),
      r
    );
  }
}
function to() {
  return Zu().enabled;
}
async function ao() {
  const l = Zu();
  if (l.enabled && l.token) return l.token.promise;
  throw Error(`
            Can't get debug token in production mode.
        `);
}
function Ib() {
  const l = pp(),
    r = Zu();
  if (
    ((r.initialized = !0),
    typeof l.FIREBASE_APPCHECK_DEBUG_TOKEN != "string" &&
      l.FIREBASE_APPCHECK_DEBUG_TOKEN !== !0)
  )
    return;
  r.enabled = !0;
  const s = new Pl();
  ((r.token = s),
    typeof l.FIREBASE_APPCHECK_DEBUG_TOKEN == "string"
      ? s.resolve(l.FIREBASE_APPCHECK_DEBUG_TOKEN)
      : s.resolve(Wb()));
}
const Pb = { error: "UNKNOWN_ERROR" };
function eS(l) {
  return Js.encodeString(JSON.stringify(l), !1);
}
async function Lu(l, r = !1, s = !1) {
  const c = l.app;
  Ps(c);
  const f = Qe(c);
  let h = f.token,
    p;
  if ((h && !Jn(h) && ((f.token = void 0), (h = void 0)), !h)) {
    const g = await f.cachedTokenPromise;
    g && (Jn(g) ? (h = g) : await xs(c, void 0));
  }
  if (!r && h && Jn(h)) return { token: h.token };
  let S = !1;
  if (to())
    try {
      const g = await ao();
      f.exchangeTokenPromise ||
        ((f.exchangeTokenPromise = eo(
          Rp(c, g),
          l.heartbeatServiceProvider,
        ).finally(() => {
          f.exchangeTokenPromise = void 0;
        })),
        (S = !0));
      const D = await f.exchangeTokenPromise;
      return (await xs(c, D), (f.token = D), { token: D.token });
    } catch (g) {
      return (
        g.code === "appCheck/throttled" ||
        g.code === "appCheck/initial-throttle"
          ? Ya.warn(g.message)
          : s && Ya.error(g),
        As(g)
      );
    }
  try {
    (f.exchangeTokenPromise ||
      ((f.exchangeTokenPromise = f.provider.getToken().finally(() => {
        f.exchangeTokenPromise = void 0;
      })),
      (S = !0)),
      (h = await Qe(c).exchangeTokenPromise));
  } catch (g) {
    (g.code === "appCheck/throttled" || g.code === "appCheck/initial-throttle"
      ? Ya.warn(g.message)
      : s && Ya.error(g),
      (p = g));
  }
  let y;
  return (
    h
      ? p
        ? Jn(h)
          ? (y = { token: h.token, internalError: p })
          : (y = As(p))
        : ((y = { token: h.token }), (f.token = h), await xs(c, h))
      : (y = As(p)),
    S && Up(c, y),
    y
  );
}
async function tS(l) {
  const r = l.app;
  Ps(r);
  const { provider: s } = Qe(r);
  if (to()) {
    const c = await ao(),
      f = Rp(r, c);
    f.body.limited_use = !0;
    const { token: h } = await eo(f, l.heartbeatServiceProvider);
    return { token: h };
  } else {
    const { token: c } = await s.getToken(!0);
    return { token: c };
  }
}
function zp(l, r, s, c) {
  const { app: f } = l,
    h = Qe(f),
    p = { next: s, error: c, type: r };
  if (((h.tokenObservers = [...h.tokenObservers, p]), h.token && Jn(h.token))) {
    const S = h.token;
    Promise.resolve()
      .then(() => {
        (s({ token: S.token }), Lm(l));
      })
      .catch(() => {});
  }
  h.cachedTokenPromise.then(() => Lm(l));
}
function wp(l, r) {
  const s = Qe(l),
    c = s.tokenObservers.filter((f) => f.next !== r);
  (c.length === 0 &&
    s.tokenRefresher &&
    s.tokenRefresher.isRunning() &&
    s.tokenRefresher.stop(),
    (s.tokenObservers = c));
}
function Lm(l) {
  const { app: r } = l,
    s = Qe(r);
  let c = s.tokenRefresher;
  (c || ((c = aS(l)), (s.tokenRefresher = c)),
    !c.isRunning() && s.isTokenAutoRefreshEnabled && c.start());
}
function aS(l) {
  const { app: r } = l;
  return new Vb(
    async () => {
      const s = Qe(r);
      let c;
      if ((s.token ? (c = await Lu(l, !0)) : (c = await Lu(l)), c.error))
        throw c.error;
      if (c.internalError) throw c.internalError;
    },
    () => !0,
    () => {
      const s = Qe(r);
      if (s.token) {
        let c =
          s.token.issuedAtTimeMillis +
          (s.token.expireTimeMillis - s.token.issuedAtTimeMillis) * 0.5 +
          3e5;
        const f = s.token.expireTimeMillis - 300 * 1e3;
        return ((c = Math.min(c, f)), Math.max(0, c - Date.now()));
      } else return 0;
    },
    Bm.RETRIAL_MIN_WAIT,
    Bm.RETRIAL_MAX_WAIT,
  );
}
function Up(l, r) {
  const s = Qe(l).tokenObservers;
  for (const c of s)
    try {
      c.type === "EXTERNAL" && r.error != null ? c.error(r.error) : c.next(r);
    } catch {}
}
function Jn(l) {
  return l.expireTimeMillis - Date.now() > 0;
}
function As(l) {
  return { token: eS(Pb), error: l };
}
class nS {
  constructor(r, s) {
    ((this.app = r), (this.heartbeatServiceProvider = s));
  }
  _delete() {
    const { tokenObservers: r } = Qe(this.app);
    for (const s of r) wp(this.app, s.next);
    return Promise.resolve();
  }
}
function lS(l, r) {
  return new nS(l, r);
}
function iS(l) {
  return {
    getToken: (r) => Lu(l, r),
    getLimitedUseToken: () => tS(l),
    addTokenListener: (r) => zp(l, "INTERNAL", r),
    removeTokenListener: (r) => wp(l.app, r),
  };
}
const uS = "@firebase/app-check",
  rS = "0.13.0",
  cS = "https://www.google.com/recaptcha/enterprise.js";
function sS(l, r) {
  const s = new Pl(),
    c = Qe(l);
  c.reCAPTCHAState = { initialized: s };
  const f = oS(l),
    h = Hm(!0);
  return (
    h
      ? qm(l, r, h, f, s)
      : hS(() => {
          const p = Hm(!0);
          if (!p) throw new Error("no recaptcha");
          qm(l, r, p, f, s);
        }),
    s.promise
  );
}
function qm(l, r, s, c, f) {
  s.ready(() => {
    (dS(l, r, s, c), f.resolve(s));
  });
}
function oS(l) {
  const r = `fire_app_check_${l.name}`,
    s = document.createElement("div");
  return (
    (s.id = r),
    (s.style.display = "none"),
    document.body.appendChild(s),
    r
  );
}
async function fS(l) {
  Ps(l);
  const s = await Qe(l).reCAPTCHAState.initialized.promise;
  return new Promise((c, f) => {
    const h = Qe(l).reCAPTCHAState;
    s.ready(() => {
      c(s.execute(h.widgetId, { action: "fire_app_check" }));
    });
  });
}
function dS(l, r, s, c) {
  const f = s.render(c, {
      sitekey: r,
      size: "invisible",
      callback: () => {
        Qe(l).reCAPTCHAState.succeeded = !0;
      },
      "error-callback": () => {
        Qe(l).reCAPTCHAState.succeeded = !1;
      },
    }),
    h = Qe(l);
  h.reCAPTCHAState = { ...h.reCAPTCHAState, widgetId: f };
}
function hS(l) {
  const r = document.createElement("script");
  ((r.src = cS + "?render=explicit"),
    (r.onload = l),
    document.head.appendChild(r));
}
class no {
  constructor(r) {
    ((this._siteKey = r), (this._throttleData = null));
  }
  async getToken(r = !1) {
    pS(this._throttleData);
    const s = await fS(this._app).catch((f) => {
      throw ft.create("recaptcha-error");
    });
    if (!Qe(this._app).reCAPTCHAState?.succeeded)
      throw ft.create("recaptcha-error");
    let c;
    try {
      const f = Xb(this._app, s);
      (r && (f.body.limited_use = !0),
        (c = await eo(f, this._heartbeatServiceProvider)));
    } catch (f) {
      throw f.code?.includes("fetch-status-error")
        ? ((this._throttleData = mS(
            Number(f.customData?.httpStatus),
            this._throttleData,
          )),
          ft.create("initial-throttle", {
            time: jp(this._throttleData.allowRequestsAfter - Date.now()),
            httpStatus: this._throttleData.httpStatus,
          }))
        : f;
    }
    return ((this._throttleData = null), c);
  }
  initialize(r) {
    ((this._app = r),
      (this._heartbeatServiceProvider = Sp(r, "heartbeat")),
      sS(r, this._siteKey).catch(() => {}));
  }
  isEqual(r) {
    return r instanceof no ? this._siteKey === r._siteKey : !1;
  }
}
function mS(l, r) {
  if (l === 404 || l === 403)
    return {
      backoffCount: 1,
      allowRequestsAfter: Date.now() + qb,
      httpStatus: l,
    };
  {
    const s = r ? r.backoffCount : 0,
      c = A1(s, 1e3, 2);
    return {
      backoffCount: s + 1,
      allowRequestsAfter: Date.now() + c,
      httpStatus: l,
    };
  }
}
function pS(l) {
  if (l && Date.now() - l.allowRequestsAfter <= 0)
    throw ft.create("throttled", {
      time: jp(l.allowRequestsAfter - Date.now()),
      httpStatus: l.httpStatus,
    });
}
function gS(l = xb(), r) {
  l = _1(l);
  const s = Sp(l, "app-check");
  if (
    (Zu().initialized || Ib(),
    to() &&
      ao().then((f) =>
        console.log(
          `App Check debug token: ${f}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`,
        ),
      ),
    s.isInitialized())
  ) {
    const f = s.getImmediate(),
      h = s.getOptions();
    if (
      h &&
      !!h.isTokenAutoRefreshEnabled == !!r.isTokenAutoRefreshEnabled &&
      h.provider?.isEqual(r.provider)
    )
      return f;
    throw ft.create("already-initialized", { appName: l.name });
  }
  const c = s.initialize({ options: r });
  return (
    yS(l, r.provider, r.isTokenAutoRefreshEnabled),
    Qe(l).isTokenAutoRefreshEnabled && zp(c, "INTERNAL", () => {}),
    c
  );
}
function yS(l, r, s = !1) {
  const c = Bb(l, { ..._p });
  ((c.activated = !0),
    (c.provider = r),
    (c.cachedTokenPromise = Fb(l).then(
      (f) => (f && Jn(f) && ((c.token = f), Up(l, { token: f.token })), f),
    )),
    (c.isTokenAutoRefreshEnabled = s && l.automaticDataCollectionEnabled),
    !l.automaticDataCollectionEnabled &&
      s &&
      Ya.warn(
        "`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh.",
      ),
    c.provider.initialize(l));
}
async function vS(l, r) {
  const s = await Lu(l, r);
  if (s.error) throw s.error;
  if (s.internalError) throw s.internalError;
  return { token: s.token };
}
const bS = "app-check",
  Vm = "app-check-internal";
function SS() {
  (ei(
    new Fn(
      bS,
      (l) => {
        const r = l.getProvider("app").getImmediate(),
          s = l.getProvider("heartbeat");
        return lS(r, s);
      },
      "PUBLIC",
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((l, r, s) => {
        l.getProvider(Vm).initialize();
      }),
  ),
    ei(
      new Fn(
        Vm,
        (l) => {
          const r = l.getProvider("app-check").getImmediate();
          return iS(r);
        },
        "PUBLIC",
      ).setInstantiationMode("EXPLICIT"),
    ),
    Wl(uS, rS));
}
SS();
let Fl;
const Ou = {
    apiKey: "AIzaSyBnjnbHWlNJwxG8QSklAIv214ykG0TG4s0",
    authDomain: "the-community-survey.firebaseapp.com",
    projectId: "the-community-survey",
    appId: "1:765980444420:web:7f9f91e8e379e9e3f1b251",
  },
  ES = "6LexoIgtAAAAAPfrZ4bH-DN5aEpHsi6r7KXO_cia";
async function Bp() {
  const l = ES,
    r = Ou.apiKey;
  if (Fl) return Fl.catch(() => {});
  const s = Ep({
      apiKey: r,
      authDomain: Ou.authDomain,
      projectId: Ou.projectId,
      appId: Ou.appId,
    }),
    c = gS(s, { provider: new no(l), isTokenAutoRefreshEnabled: !0 });
  Fl = vS(c, !1).then(({ token: f }) => f);
  try {
    return await Fl;
  } catch (f) {
    (console.warn("App Check token is temporarily unavailable.", f),
      (Fl = void 0));
    return;
  }
}
async function Mu(l, r) {
  const s = r?.method === "POST" ? await Bp() : void 0,
    c = new Headers(r?.headers);
  s && c.set("X-Firebase-AppCheck", s);
  const f = await fetch(l, { ...r, headers: c }),
    h = await f.json().catch(() => ({}));
  if (!f.ok) throw new Error(h.message ?? "요청을 처리하지 못했습니다.");
  return h;
}
const ni = {
  prepareAppCheck() {
    return window.__communityLocalApi.prepareAppCheck();
  },
  submit(l, r) {
    return window.__communityLocalApi.submit(l, r);
  },
  result(l) {
    return window.__communityLocalApi.result(l);
  },
  referral(l) {
    return window.__communityLocalApi.referral(l);
  },
  compare(l, r) {
    return window.__communityLocalApi.compare(l, r);
  },
};
function lo() {
  return d.jsx(tt, {
    className: "brand",
    to: "/",
    "aria-label": "더 커뮤니티 홈",
    children: d.jsx("img", {
      className: "brand__wordmark",
      src: new URL("../brand/community-wordmark.svg", import.meta.url).href,
      alt: "",
    }),
  });
}
function io({ season: l, decorative: r = !1 }) {
  const s =
    l === "season-2"
      ? "더 커뮤니티2 보이지 않는 손"
      : "사상검증구역 더 커뮤니티";
  return d.jsx("img", {
    className: `season-lockup season-lockup--${l === "season-2" ? "two" : "one"}`,
    src: new URL(
      `../brand/${l === "season-2" ? "season-2" : "season-1"}-lockup.svg`,
      import.meta.url,
    ).href,
    "aria-hidden": r || void 0,
    alt: r ? "" : s,
  });
}
function qu({ tone: l = "blue", variant: r = 0 }) {
  return d.jsx("svg", {
    className: `hand hand--${l} hand--${r}`,
    viewBox: "0 0 280 360",
    role: "img",
    "aria-label": "보이지 않는 손 선화",
    children: d.jsxs("g", {
      transform: r % 2 ? "translate(280 0) scale(-1 1)" : void 0,
      children: [
        d.jsx("path", {
          className: "hand__outline",
          d: "M82 350c-1-22-3-43-9-60-8-23-28-36-49-55-15-14-17-34-4-45 11-10 27-8 40 6l28 29-20-141c-3-20 7-32 22-34 16-1 25 10 28 28l12 94-8-124c-1-19 10-31 26-31 16 0 26 11 27 30l-1 125 12-104c2-18 14-28 29-26 16 2 24 15 22 33l-12 111 10-68c3-17 15-25 29-22 15 4 21 17 18 33l-15 97c-7 45-27 70-63 91l-5 33Z",
        }),
        d.jsx("path", {
          className: "hand__crease",
          d: "M88 225c19 13 34 30 43 52",
        }),
        d.jsx("path", {
          className: "hand__crease",
          d: "M107 242c22-19 56-27 91-17",
        }),
        d.jsx("path", {
          className: "hand__crease",
          d: "M126 294c18-9 39-9 58-2",
        }),
        d.jsx("path", {
          className: "hand__crease",
          d: "M129 172l4 48M173 172l-2 45M224 186l-7 36",
        }),
      ],
    }),
  });
}
function xS() {
  return d.jsxs("footer", {
    children: [
      d.jsx("span", { children: "THE COMMUNITY © 2026" }),
      d.jsx("span", { children: "PRINCIPLE / STRUCTURE / MEANING" }),
    ],
  });
}
function AS({ children: l, inverse: r = !1 }) {
  return d.jsx("div", {
    className: `marquee ${r ? "marquee--inverse" : ""}`,
    "aria-hidden": "true",
    children: d.jsxs("div", {
      children: [
        d.jsx("span", { children: l }),
        d.jsx("span", { children: l }),
        d.jsx("span", { children: l }),
        d.jsx("span", { children: l }),
      ],
    }),
  });
}
function $t({ index: l, children: r }) {
  return d.jsxs("div", {
    className: "section-label",
    children: [d.jsx("span", { children: l }), d.jsx("b", { children: r })],
  });
}
const _S = `${location.origin}${window.__COMMUNITY_BASE_PATH__ || ""}`,
  TS =
    "나의 최선이 모두의 최선일까? 더 커뮤니티2: 보이지 않는 손 사용자 테스트. / 我的最优选择，也会是所有人的最优选择吗？《The Community 2：看不见的手》用户测试。";
function jS(l) {
  return l === "/admin" || l.startsWith("/admin/")
    ? {
        title:
          "관리자 질문 미리보기 | 더 커뮤니티 / 管理员题目预览｜The Community",
        description:
          "관리자용 질문 및 테스트 미리보기 화면입니다. / 管理员专用的题目与测试预览页面。",
      }
    : l === "/season/2"
      ? {
          title:
            "시즌 2 테스트 — 보이지 않는 손 | 더 커뮤니티 / 第2季测试：看不见的手｜The Community",
          description:
            "자유 거래 구역에 오신 것을 환영합니다. 나의 최선이 모두의 최선일지 확인하세요. / 欢迎来到自由交易区。看看我的最优选择是否也是所有人的最优选择。",
        }
      : l === "/season/1"
        ? {
            title:
              "시즌 1 — 사상검증구역 | 더 커뮤니티 / 第1季：思想验证区｜The Community",
            description:
              "156만 명 이상이 참여한 사상검증 테스트. 내가 상식이라 믿는 것이 어디에 놓이는지 확인하세요. / 已有超过156万人参加的思想验证测试。看看你深信为常识的观念究竟处在什么位置。",
          }
        : l === "/broadcast"
          ? {
              title:
                "더 커뮤니티 방송 보기 | 보이지 않는 손 / 观看 The Community｜看不见的手",
              description:
                "협의가 사라진 곳에서 정치는 무엇이 되는가? 더 커뮤니티 2 출연자들의 테스트에 직접 참여해보세요. / 当协商不复存在，政治会变成什么？亲自参加 The Community 2 出演者所做的测试。",
            }
          : l.startsWith("/r/")
            ? {
                title:
                  "당신에게 결과 초대장이 도착했습니다 | 더 커뮤니티 / 你收到了一份结果邀请｜The Community",
                description:
                  "초대한 사람의 보이지 않는 손을 확인하고 내 결과와 비교해 보세요. / 查看邀请人的“看不见的手”，并与自己的结果比较。",
              }
            : l.startsWith("/result/")
              ? {
                  title:
                    "나를 움직이는 손 — 테스트 결과 | 더 커뮤니티 / 驱动我的那只手：测试结果｜The Community",
                  description:
                    "더 커뮤니티 시즌 테스트 결과와 판단의 축을 확인하세요. / 查看 The Community 季度测试结果及其判断维度。",
                }
              : l.startsWith("/compare/")
                ? {
                    title:
                      "두 손 사이의 거리 — 결과 비교 | 더 커뮤니티 / 两只手之间的距离：结果比较｜The Community",
                    description:
                      "두 사람의 판단 축을 겹쳐 보고 선택의 차이를 비교하세요. / 将两人的判断维度叠加，比较彼此选择的差异。",
                  }
                : l.endsWith("/test")
                  ? {
                      title:
                        "테스트 진행 중 | 더 커뮤니티 / 测试进行中｜The Community",
                      description:
                        "당신을 움직이는 보이지 않는 손을 찾는 선택을 시작합니다. / 开始作出选择，找出驱动你的那只“看不见的手”。",
                    }
                  : {
                      title:
                        "더 커뮤니티 시즌 2 — 보이지 않는 손 / The Community 第2季：看不见的手",
                      description: TS,
                    };
}
function sn(l, r, s) {
  let c = document.querySelector(`meta[${l}="${r}"]`);
  (c ||
    ((c = document.createElement("meta")),
    c.setAttribute(l, r),
    document.head.append(c)),
    (c.content = s));
}
function RS() {
  const { pathname: l } = dt();
  return (
    T.useEffect(() => {
      const r = jS(l),
        s = `${_S}${l === "/" ? "/" : l}`;
      document.title = r.title;
      let c = document.querySelector('link[rel="canonical"]');
      (c ||
        ((c = document.createElement("link")),
        (c.rel = "canonical"),
        document.head.append(c)),
        (c.href = s),
        sn("name", "description", r.description),
        sn(
          "name",
          "robots",
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        ),
        sn("property", "og:title", r.title),
        sn("property", "og:description", r.description),
        sn("property", "og:url", s),
        sn("name", "twitter:title", r.title),
        sn("name", "twitter:description", r.description));
    }, [l]),
    null
  );
}
const Hp = {
    L1: "#FF7719",
    L2: "#E38859",
    L3: "#B69687",
    R4: "#507C7E",
    R5: "#009095",
    R6: "#00A3AA",
  },
  Lp = {
    F1: "#FF000A",
    F2: "#CE333B",
    F3: "#8B5758",
    E4: "#426371",
    E5: "#006E9A",
    E6: "#007AC2",
  },
  qp = {
    W1: "#D30000",
    W2: "#98000C",
    W3: "#5B2C2D",
    U4: "#27374B",
    U5: "#003B75",
    U6: "#003D9F",
  },
  Vp = {
    O1: "#FF3C43",
    O2: "#DB5D5F",
    O3: "#A27777",
    C4: "#8C9BA7",
    C5: "#72A0C3",
    C6: "#52A5DF",
  },
  Ym = [
    {
      codes: "LR",
      title: "정치",
      leftEnglish: "LEFT",
      leftKorean: "좌파",
      rightEnglish: "RIGHT",
      rightKorean: "우파",
    },
    {
      codes: "FE",
      title: "젠더",
      leftEnglish: "FEMINISM",
      leftKorean: "페미",
      rightEnglish: "EQUALISM",
      rightKorean: "이퀄",
    },
    {
      codes: "WU",
      title: "계급",
      leftEnglish: "WORKING",
      leftKorean: "서민",
      rightEnglish: "UPPER-MIDDLE",
      rightKorean: "부유",
    },
    {
      codes: "OC",
      title: "개방성",
      leftEnglish: "OPEN MINDED",
      leftKorean: "개방",
      rightEnglish: "CONSERVATIVE",
      rightKorean: "전통",
    },
  ];
function CS(l) {
  return /^[LR]/.test(l)
    ? (Hp[l] ?? "#B2B2B2")
    : /^[FE]/.test(l)
      ? (Lp[l] ?? "#666666")
      : /^[WU]/.test(l)
        ? (qp[l] ?? "#3F3F3F")
        : (Vp[l] ?? "#B2B2B2");
}
function DS(l) {
  const r = Number(l[1]);
  return !Number.isInteger(r) || r < 1 || r > 6 ? 0 : r <= 3 ? 4 - r : r - 3;
}
function NS({ resultType: l, displayName: r }) {
  const s = T.useId().replaceAll(":", ""),
    c = l.match(/[LREFWUOC]\d/g) ?? [],
    f = Ym.map((U) => c.find((B) => U.codes.includes(B[0]))).filter((U) => !!U),
    h = f.map((U) => U[0]).join(""),
    p = f.find((U) => /^[LR]/.test(U)) ?? "",
    S = f.find((U) => /^[FE]/.test(U)) ?? "",
    y = f.find((U) => /^[WU]/.test(U)) ?? "",
    g = f.find((U) => /^[OC]/.test(U)) ?? "",
    D = Hp[p] ?? "#B2B2B2",
    A = p.startsWith("L")
      ? "#790000"
      : p.startsWith("R")
        ? "#002E4B"
        : "#000000",
    H = Lp[S] ?? "#666666",
    V = qp[y] ?? "#3F3F3F",
    Y = Vp[g] ?? "#B2B2B2";
  return d.jsxs("div", {
    className: "season-one-result-figure",
    children: [
      d.jsxs("header", {
        className: "season-one-result-summary",
        children: [
          d.jsx("p", {
            children: r ? `${r}님의 사상검증 결과` : "당신의 사상검증 결과",
          }),
          d.jsx("strong", { children: h }),
        ],
      }),
      d.jsxs("svg", {
        className: "season-one-result-symbol",
        viewBox: "0 0 197 276",
        role: "img",
        "aria-label": "사상검증구역 결과 심볼",
        children: [
          d.jsx("path", {
            d: "M98.55 120.97H98.53H.74V198.4H196.36V120.97H98.55Z",
            fill: V,
          }),
          d.jsx("g", {
            style: { mixBlendMode: "multiply" },
            opacity: ".5",
            children: d.jsx("path", {
              d: "M.74 198.3H196.34V192.44V121.06",
              fill: "#000",
            }),
          }),
          d.jsx("path", {
            d: "M196.36 275.64V198.2L.74 198.22V275.64H196.36Z",
            fill: Y,
          }),
          d.jsx("path", {
            opacity: ".5",
            d: "M196.36 275.64H98.54V249.57H131.96V224.95H164.13V198.2H196.36",
            fill: "#000",
          }),
          d.jsx("circle", {
            opacity: ".5",
            cx: "49.64",
            cy: "236.92",
            r: "29.8",
            fill: "#000",
          }),
          d.jsx("path", {
            d: "M98.55 0h-.04C44.51.02.75 43.8.75 97.8h195.6C196.35 43.79 152.56 0 98.55 0Z",
            fill: D,
          }),
          d.jsxs("g", {
            opacity: ".5",
            children: [
              d.jsx("mask", {
                id: s,
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "197",
                height: "98",
                children: d.jsx("path", {
                  d: "M196.48 97.8H.63C.62 43.8 44.39.02 98.38 0h.04s91.81-.11 98.06 97.8Z",
                  fill: "#fff",
                }),
              }),
              d.jsxs("g", {
                mask: `url(#${s})`,
                fill: A,
                children: [
                  d.jsx("path", {
                    d: "M99.2 5.08h-1.56v78.77h1.56V5.08Zm1.56 78.08-2.34 4.06-2.34-4.06h4.68Z",
                  }),
                  d.jsx("path", {
                    d: "m82.887 6.37-1.536.27 13.662 77.485 1.537-.271L82.887 6.37Zm15.083 76.54-1.6 4.4-3.01-3.59 4.61-.81Z",
                  }),
                  d.jsx("path", {
                    d: "m67.045 10.471-1.466.534 26.938 74.01 1.466-.534-26.938-74.01ZM95.21 83.31l-.81 4.61-3.58-3 4.39-1.61Z",
                  }),
                  d.jsx("path", {
                    d: "m52.154 17.275-1.351.78L90.158 86.22l1.351-.78-39.355-68.165ZM92.52 84.06v4.68l-4.06-2.34 4.06-2.34Z",
                  }),
                  d.jsx("path", {
                    d: "m38.678 26.552-1.195 1.003 50.613 60.318 1.195-1.003-50.613-60.318ZM90.04 85.34l.81 4.61-4.4-1.6 3.59-3.01Z",
                  }),
                  d.jsx("path", {
                    d: "m26.998 38.02-1.003 1.195 60.341 50.632 1.003-1.195L26.998 38.02Zm60.822 49 1.6 4.4-4.61-.82 3.01-3.58Z",
                  }),
                  d.jsx("path", {
                    d: "m17.511 51.345-.785 1.359 68.174 39.36.784-1.36-68.173-39.36ZM85.86 89.01l2.34 4.06h-4.68l2.34-4.06Z",
                  }),
                  d.jsx("path", {
                    d: "m10.463 66.136-.534 1.466 73.916 26.903.534-1.466-73.916-26.903Zm73.807 25.194 3.01 3.58-4.61.82 1.6-4.4Z",
                  }),
                  d.jsx("path", {
                    d: "m6.097 81.896-.271 1.536L83.32 97.096l.271-1.536L6.097 81.896Zm77.093 12.014 3.58 3-4.4 1.61.82-4.61Z",
                  }),
                  d.jsx("path", {
                    d: "M99.36 5.08H97.8v78.77h1.56V5.08Zm1.56 78.08-2.34 4.06-2.34-4.06h4.68Z",
                  }),
                  d.jsx("path", {
                    d: "m114.132 6.37-13.676 77.482 1.537.272L115.67 6.64l-1.537-.27ZM103.65 83.72l-3.01 3.59-1.6-4.4 4.61.81Z",
                  }),
                  d.jsx("path", {
                    d: "m129.997 10.502-26.924 74.015 1.466.533 26.924-74.015-1.466-.533ZM106.19 84.92l-3.59 3-.81-4.61 4.4 1.61Z",
                  }),
                  d.jsx("path", {
                    d: "m144.818 17.238-39.355 68.165 1.351.78 39.355-68.165-1.351-.78ZM108.54 86.4l-4.05 2.34v-4.68l4.05 2.34Z",
                  }),
                  d.jsx("path", {
                    d: "m158.361 26.563-50.603 60.327 1.195 1.003 50.603-60.328-1.195-1.002ZM110.55 88.35l-4.4 1.6.82-4.61 3.58 3.01Z",
                  }),
                  d.jsx("path", {
                    d: "m169.987 38-60.342 50.633 1.003 1.195 60.341-50.632L169.987 38Zm-57.797 52.6-4.61.82 1.6-4.4 3.01 3.58Z",
                  }),
                  d.jsx("path", {
                    d: "m179.559 51.459-68.18 39.348.785 1.36 68.18-39.348-.785-1.36Zm-66.079 41.611h-4.68l2.34-4.05 2.34 4.05Z",
                  }),
                  d.jsx("path", {
                    d: "m186.505 66.015-73.912 26.917.534 1.465 73.912-26.916-.534-1.466Zm-72.175 29.715-4.61-.82 3.01-3.58 1.6 4.4Z",
                  }),
                  d.jsx("path", {
                    d: "m190.899 81.795-77.495 13.664.271 1.537 77.494-13.665-.27-1.536Zm-76.269 16.725-4.4-1.61 3.59-3  .81 4.61Z",
                  }),
                ],
              }),
            ],
          }),
          d.jsx("path", {
            d: "M196.37 97.77H.74v23.15h195.63V97.77Z",
            fill: H,
          }),
        ],
      }),
      d.jsx("ol", {
        "aria-label": "심볼 차원별 결과",
        className: "season-one-result-dimensions",
        children: Ym.map((U) => {
          const B = f.find((me) => U.codes.includes(me[0]));
          if (!B) return null;
          const Q = B[0] === U.codes[0],
            F = DS(B),
            $ = Q ? U.leftKorean : U.rightKorean,
            fe = {
              "--axis-accent": CS(B),
              "--axis-strength": `${(F / 3) * 50}%`,
              "--axis-marker-position": `${50 + (Q ? -1 : 1) * (F / 3) * 50}%`,
            };
          return d.jsxs(
            "li",
            {
              "aria-label": `${U.title}: ${$} ${F}점`,
              className: `season-one-axis season-one-axis--${Q ? "left" : "right"}`,
              style: fe,
              children: [
                d.jsxs("div", {
                  className: "season-one-axis__labels",
                  children: [
                    d.jsxs("span", {
                      children: [
                        d.jsx("small", { children: U.leftEnglish }),
                        d.jsx("b", { children: U.leftKorean }),
                      ],
                    }),
                    d.jsx("em", { children: U.title }),
                    d.jsxs("span", {
                      children: [
                        d.jsx("small", { children: U.rightEnglish }),
                        d.jsx("b", { children: U.rightKorean }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "season-one-axis__track",
                  children: [
                    d.jsx("i", { "aria-hidden": "true" }),
                    d.jsx("strong", { children: F }),
                  ],
                }),
              ],
            },
            U.title,
          );
        }),
      }),
    ],
  });
}
function OS(l, r, s) {
  return l.find(
    (c) => c.id === `${r}-${s}` || (c.leftLabel === r && c.rightLabel === s),
  );
}
function _s(l, r, s, c, f) {
  const h = OS(l, r, s),
    p = h?.leftPercent ?? 50,
    S = h?.rightPercent ?? 50;
  return { code: p >= S ? c : f, intensity: Math.abs(p - S) >= 25 ? 2 : 1 };
}
function Yp(l) {
  const r = _s(l, "의미", "실리", "B", "H"),
    s = _s(l, "구조", "능력", "S", "A"),
    c = _s(l, "원칙", "결과", "M", "U");
  return {
    code: `${r.code}${r.intensity}${s.code}${s.intensity}${c.code}${c.intensity}`,
    meaning: r,
    agency: s,
    judgment: c,
  };
}
const Gm = { width: 841.89, height: 595.276 },
  kt = { width: 74.3, roofHeight: 36.87, bandHeight: 18.76, bodyHeight: 51.21 },
  MS = {
    B1: { x: 252.74, y: 79.83 },
    B2: { x: 427.45, y: 79.83 },
    H1: { x: 165.39, y: 79.83 },
    H2: { x: 340.1, y: 402.89 },
    S1: { x: 427.45, y: 116.7 },
    S2: { x: 514.8, y: 116.7 },
    A1: { x: 165.39, y: 116.7 },
    A2: { x: 252.74, y: 116.7 },
    M1: { x: 340.1, y: 135.46 },
    M2: { x: 427.45, y: 135.46 },
    U1: { x: 165.39, y: 135.46 },
    U2: { x: 252.74, y: 135.46 },
  },
  zS = new URL("../brand/season-2-symbol-master.svg", import.meta.url).href,
  wS = { B: "의미", H: "실리", S: "구조", A: "능력", M: "원칙", U: "결과" },
  US = { B: "실리", H: "의미", S: "능력", A: "구조", M: "결과", U: "원칙" };
function BS(l) {
  return MS[`${l.code}${l.intensity}`];
}
function Ts({ choice: l, clipPath: r, y: s }) {
  const c = BS(l);
  return d.jsx("image", {
    clipPath: `url(#${r})`,
    height: Gm.height,
    href: zS,
    width: Gm.width,
    x: -c.x,
    y: s - c.y,
  });
}
const HS = [
  {
    ariaLabel: "이상주의 성향 2단계 심볼",
    symbol: {
      code: "B2S2M2",
      meaning: { code: "B", intensity: 2 },
      agency: { code: "S", intensity: 2 },
      judgment: { code: "M", intensity: 2 },
    },
  },
  {
    ariaLabel: "이상주의 성향 1단계 심볼",
    symbol: {
      code: "B1S1M1",
      meaning: { code: "B", intensity: 1 },
      agency: { code: "S", intensity: 1 },
      judgment: { code: "M", intensity: 1 },
    },
  },
  {
    ariaLabel: "현실주의 성향 1단계 심볼",
    symbol: {
      code: "H1A1U1",
      meaning: { code: "H", intensity: 1 },
      agency: { code: "A", intensity: 1 },
      judgment: { code: "U", intensity: 1 },
    },
  },
  {
    ariaLabel: "현실주의 성향 2단계 심볼",
    symbol: {
      code: "H2A2U2",
      meaning: { code: "H", intensity: 2 },
      agency: { code: "A", intensity: 2 },
      judgment: { code: "U", intensity: 2 },
    },
  },
];
function Xm({ ariaLabel: l, className: r, symbol: s }) {
  const c = `season-two-${T.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`,
    f = kt.roofHeight,
    h = f + kt.bandHeight,
    p = h + kt.bodyHeight,
    S = `${c}-roof`,
    y = `${c}-band`,
    g = `${c}-body`;
  return d.jsxs("svg", {
    "aria-label": l,
    className: r,
    "data-symbol-code": s.code,
    role: "img",
    viewBox: `0 0 ${kt.width} ${p}`,
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      d.jsxs("defs", {
        children: [
          d.jsx("clipPath", {
            id: S,
            children: d.jsx("rect", { width: kt.width, height: kt.roofHeight }),
          }),
          d.jsx("clipPath", {
            id: y,
            children: d.jsx("rect", {
              width: kt.width,
              height: kt.bandHeight,
              y: f,
            }),
          }),
          d.jsx("clipPath", {
            id: g,
            children: d.jsx("rect", {
              width: kt.width,
              height: kt.bodyHeight,
              y: h,
            }),
          }),
        ],
      }),
      d.jsx(Ts, { choice: s.meaning, clipPath: S, y: 0 }),
      d.jsx(Ts, { choice: s.agency, clipPath: y, y: f }),
      d.jsx(Ts, { choice: s.judgment, clipPath: g, y: h }),
    ],
  });
}
function LS({ axes: l }) {
  const r = Yp(l),
    s = [r.meaning, r.agency, r.judgment];
  return d.jsxs("div", {
    className: "season-two-result-figure",
    children: [
      d.jsx("div", {
        className: "season-two-symbol-guide",
        children: d.jsx("ol", {
          "aria-label": "심볼 성향 4단계",
          children: HS.map((c) =>
            d.jsx(
              "li",
              {
                children: d.jsx(Xm, {
                  ariaLabel: c.ariaLabel,
                  className: "season-two-symbol-guide__symbol",
                  symbol: c.symbol,
                }),
              },
              c.symbol.code,
            ),
          ),
        }),
      }),
      d.jsx("div", {
        className: "season-two-result-symbol-control",
        children: d.jsx(Xm, {
          ariaLabel: "보이지 않는 손 결과 심볼",
          className: "season-two-result-symbol",
          symbol: r,
        }),
      }),
      d.jsx("ol", {
        "aria-label": "심볼 차원별 결과",
        className: "season-two-result-dimensions",
        children: s.map((c, f) =>
          d.jsxs(
            "li",
            {
              children: [
                d.jsx("small", { children: String(f + 1).padStart(2, "0") }),
                d.jsxs("span", {
                  className: "result-dimension-labels",
                  children: [
                    d.jsxs("em", {
                      className: "result-dimension-labels__opposite",
                      children: [US[c.code], "보다"],
                    }),
                    d.jsx("b", { children: wS[c.code] }),
                  ],
                }),
                d.jsxs("strong", {
                  children: [c.intensity, d.jsx("em", { children: "점" })],
                }),
              ],
            },
            c.code,
          ),
        ),
      }),
    ],
  });
}
const qS = [
    d.jsxs(d.Fragment, {
      children: [
        "본 테스트는 웨이브 오리지널 [사상검증구역: 더 커뮤니티]의 프로그램 내에서 활용하기 위해 제작된 척도로,",
        " ",
        d.jsx("strong", {
          children:
            "측정값이 응답자의 정치사회적 견해와 일부 일치하지 않을 수 있습니다.",
        }),
      ],
    }),
    d.jsx(d.Fragment, {
      children:
        "테스트의 질문들은 연세대학교 사회과학대학 김용찬 교수의 자문을 거쳐 작성되었으며, 리서치 업체 ‘엠브레인’을 통해 신뢰도 조사를 완료했습니다.",
    }),
    d.jsx(d.Fragment, {
      children:
        "실제로 존재하는 여러 사회적 입장에 대한 응답자의 ‘동의 여부’를 확인하는 것이므로, 일부 차별적이거나 과격하다고 느껴지는 문항이 있는 점을 참고하여 주시기 바랍니다.",
    }),
  ],
  VS = [
    d.jsxs(d.Fragment, {
      children: [
        "본 테스트는 웨이브 오리지널 [더 커뮤니티 2: 보이지 않는 손]의 프로그램 내에서 활용하기 위한 목적으로 제작되었으며,",
        " ",
        d.jsx("strong", {
          children:
            "측정값이 응답자의 실제 가치관과 일치하지 않을 수 있습니다.",
        }),
      ],
    }),
    d.jsx(d.Fragment, {
      children:
        "테스트의 질문들은 서울시립대 사회학 박사 장원호 교수의 자문을 거쳐 작성되었으며, 리서치 업체 ‘엠브레인’을 통해 신뢰도 검증을 완료했습니다.",
    }),
    d.jsx(d.Fragment, {
      children:
        "비윤리적인 상황에 대한 사고실험 질문이 일부 포함되어 있습니다. 이는 기존의 다양한 사회철학 저서에서 다루어진 윤리적 딜레마 질문들로, 실제 사례에 대한 가치판단과 무관합니다.",
    }),
    d.jsx(d.Fragment, {
      children: "질문의 순서는 측정 영역과 무관하게 무작위로 제시됩니다.",
    }),
  ],
  YS = {
    "season-1": {
      number: "01",
      eyebrow: "시즌 1",
      title: "사상검증구역",
      dek: "평등과 시장, 페미니즘과 전통, 개방과 질서. 내가 상식이라 믿는 것은 어디에 놓이는가. 156만 명 이상이 참여한 사상검증 테스트에 지금 참여해보세요.",
      time: "약 9분",
      count: 87,
    },
    "season-2": {
      number: "02",
      eyebrow: "시즌 2",
      title: "보이지 않는 손",
      dek: "옳은 선택과 유리한 선택이 다를 때, 나는 무엇을 포기하는가.",
      time: "약 5분",
      count: 37,
    },
  },
  GS = { 원칙: "P", 결과: "R", 구조: "S", 능력: "A", 의미: "M", 실리: "U" },
  Gp = "community-admin-preview-v2",
  XS = "5028b04f1714c25ff49ed3b0240d56c7f52c0ee0b40b886d86c1f0b5e9a6032a";
async function ZS(l) {
  const r = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(l),
  );
  return [...new Uint8Array(r)]
    .map((s) => s.toString(16).padStart(2, "0"))
    .join("");
}
function QS(l) {
  const r = l.split("·"),
    [s, c, f] = r;
  return {
    selections: r,
    code: r.map((h) => GS[h] ?? "?").join("–"),
    tone: s === "결과" ? "red" : "blue",
    handVariant: c === "능력" ? 1 : 0,
    classes: [
      s === "결과" ? "result-card--result" : "result-card--principle",
      c === "능력" ? "result-card--ability" : "result-card--structure",
      f === "실리" ? "result-card--utility" : "result-card--meaning",
    ].join(" "),
  };
}
function Yt({ children: l, dark: r = !1, showFooter: s = !0 }) {
  const { pathname: c } = dt();
  return d.jsxs("div", {
    className: r ? "shell shell--dark" : "shell",
    children: [
      d.jsxs("div", {
        className: "route-wipe",
        "aria-hidden": "true",
        children: [d.jsx("i", {}), d.jsx("i", {}), d.jsx("i", {})],
      }),
      d.jsxs("header", {
        className: "site-header",
        children: [
          d.jsx(lo, {}),
          d.jsxs("nav", {
            children: [
              d.jsx(tt, {
                className: c === "/broadcast" ? "is-active" : "",
                to: "/broadcast",
                children: "ON AIR",
              }),
              d.jsx(tt, {
                className: c.startsWith("/season/1") ? "is-active" : "",
                to: "/season/1",
                children: "시즌 1",
              }),
              d.jsx(tt, {
                className:
                  c === "/" || c.startsWith("/season/2") ? "is-active" : "",
                to: "/season/2",
                children: "시즌 2",
              }),
            ],
          }),
        ],
      }),
      l,
      s && d.jsx(xS, {}),
    ],
  });
}
function KS({ onUnlock: l }) {
  const r = ii(),
    [s, c] = T.useState(""),
    [f, h] = T.useState(!1),
    [p, S] = T.useState(""),
    y = async (g) => {
      (g.preventDefault(), h(!0), S(""));
      try {
        if ((await ZS(s)) !== XS) {
          S("비밀번호가 맞지 않습니다.");
          return;
        }
        (sessionStorage.setItem(Gp, "unlocked"),
          l(),
          r("/admin/questions", { replace: !0 }));
      } catch {
        S("비밀번호를 확인하지 못했습니다. 다시 시도해 주세요.");
      } finally {
        h(!1);
      }
    };
  return d.jsxs("main", {
    className: "admin-login",
    children: [
      d.jsx("header", { children: d.jsx(lo, {}) }),
      d.jsxs("form", {
        onSubmit: y,
        children: [
          d.jsx("span", { children: "ADMIN PREVIEW" }),
          d.jsx("h1", { children: "관리자 확인" }),
          d.jsx("label", { htmlFor: "admin-password", children: "비밀번호" }),
          d.jsx("input", {
            id: "admin-password",
            type: "password",
            autoComplete: "current-password",
            autoFocus: !0,
            value: s,
            onChange: (g) => c(g.target.value),
          }),
          p && d.jsx("p", { role: "alert", children: p }),
          d.jsx("button", {
            type: "submit",
            disabled: f || s.length === 0,
            children: f ? "확인 중" : "확인",
          }),
        ],
      }),
    ],
  });
}
function kS() {
  const l = [
    { id: "season-1", label: "시즌 1 · 사상검증구역", questions: ks },
    { id: "season-2", label: "시즌 2 · 보이지 않는 손", questions: $s },
  ];
  return d.jsx(Yt, {
    dark: !0,
    children: d.jsxs("main", {
      className: "admin-questions",
      children: [
        d.jsxs("div", {
          className: "admin-questions__head",
          children: [
            d.jsx($t, { index: "ADMIN", children: "PRIVATE PREVIEW" }),
            d.jsx("h1", { children: "질문 리스트" }),
            d.jsx("p", {
              children:
                "이 화면과 테스트 경로는 관리자 미리보기 세션에서만 열립니다.",
            }),
          ],
        }),
        d.jsxs("nav", {
          className: "admin-questions__actions",
          "aria-label": "관리자 테스트 실행",
          children: [
            d.jsx(tt, { to: "/season/1/test", children: "시즌 1 테스트 ↗" }),
            d.jsx(tt, { to: "/season/2/test", children: "시즌 2 테스트 ↗" }),
          ],
        }),
        l.map((r) =>
          d.jsxs(
            "section",
            {
              className: "admin-question-set",
              children: [
                d.jsxs("header", {
                  children: [
                    d.jsx("h2", { children: r.label }),
                    d.jsxs("span", { children: [r.questions.length, "문항"] }),
                  ],
                }),
                d.jsx("ol", {
                  children: r.questions.map((s) =>
                    d.jsxs(
                      "li",
                      {
                        children: [
                          d.jsxs("div", {
                            children: [
                              d.jsx("b", { children: s.id }),
                              d.jsx("small", { children: s.group }),
                            ],
                          }),
                          d.jsx("p", { children: s.prompt }),
                          d.jsx("span", {
                            children: s.allowedAnswers.join(" · "),
                          }),
                        ],
                      },
                      s.id,
                    ),
                  ),
                }),
              ],
            },
            r.id,
          ),
        ),
      ],
    }),
  });
}
function $S() {
  return d.jsx(Yt, {
    dark: !0,
    showFooter: !1,
    children: d.jsxs("main", {
      className: "home",
      children: [
        d.jsxs("section", {
          className: "hero",
          children: [
            d.jsx(io, { season: "season-2" }),
            d.jsxs("h1", {
              children: [
                "자유 거래 구역에",
                d.jsx("br", {}),
                "오신 것을 환영합니다.",
              ],
            }),
            d.jsxs("div", {
              className: "hero__entry",
              children: [
                d.jsxs("p", {
                  children: [
                    "나의 최선이",
                    d.jsx("br", {}),
                    "모두의 최선일까?",
                  ],
                }),
                d.jsxs(tt, {
                  to: "/season/2/test",
                  children: [
                    "테스트 시작 ",
                    d.jsx("b", { "aria-hidden": "true", children: "↘" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx("section", {
          className: "home__poster",
          children: d.jsx("img", {
            src: new URL("./w=1600.jpeg", import.meta.url).href,
            alt: "더 커뮤니티 2 메인 포스터",
            width: "1600",
            height: "2259",
            loading: "lazy",
          }),
        }),
      ],
    }),
  });
}
function JS({ season: l }) {
  const r = YS[l],
    s = l === "season-2";
  return d.jsx(Yt, {
    dark: s,
    children: d.jsx("main", {
      className: `season-landing ${s ? "season-landing--two" : "season-landing--one"}`,
      children: d.jsxs("section", {
        className: "season-intro",
        children: [
          d.jsxs("div", {
            children: [
              d.jsx($t, { index: r.number, children: r.eyebrow }),
              d.jsx("span", { className: "season-number", children: r.number }),
              d.jsx("h1", {
                "aria-label": r.title,
                children: d.jsx(io, { season: l, decorative: !0 }),
              }),
              d.jsx("p", { className: "dek", children: r.dek }),
              s &&
                d.jsxs("div", {
                  className: "axis-list",
                  children: [
                    d.jsx("span", { children: "원칙 ↔ 결과" }),
                    d.jsx("span", { children: "구조 ↔ 능력" }),
                    d.jsx("span", { children: "의미 ↔ 실리" }),
                  ],
                }),
              d.jsxs("dl", {
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsx("dt", { children: "문항" }),
                      d.jsx("dd", { children: r.count }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("dt", { children: "소요" }),
                      d.jsx("dd", { children: r.time }),
                    ],
                  }),
                ],
              }),
              d.jsxs(tt, {
                className: `button ${s ? "button--blue" : "button--black"}`,
                to: `/season/${s ? 2 : 1}/test`,
                children: [
                  d.jsx("span", { children: "테스트 시작" }),
                  d.jsx("b", { children: "↘" }),
                ],
              }),
            ],
          }),
          s
            ? d.jsxs("div", {
                className: "poster",
                children: [
                  d.jsx("span", { children: "THE / 02" }),
                  d.jsx(qu, { tone: "red", variant: 1 }),
                  d.jsxs("b", {
                    children: ["INVISIBLE", d.jsx("br", {}), "HAND"],
                  }),
                  d.jsx("small", { children: "YOUR CHOICE IS NEVER NEUTRAL" }),
                ],
              })
            : d.jsx("div", {
                className: "season-one-poster",
                children: d.jsx("img", {
                  src: "/assets/season-1-poster.webp",
                  alt: "사상검증구역 더 커뮤니티 포스터",
                  width: "1000",
                  height: "1429",
                  loading: "eager",
                }),
              }),
        ],
      }),
    }),
  });
}
function Zm({ season: l }) {
  const r = ii(),
    [s] = Fv(),
    c = `community-progress-${l}`,
    f = T.useMemo(() => a1(l === "season-2" ? $s : ks, l), [l]),
    [h, p] = T.useState(!1),
    [S, y] = T.useState(""),
    [g, D] = T.useState(0),
    [A, H] = T.useState(() => JSON.parse(localStorage.getItem(c) ?? "{}")),
    [V, Y] = T.useState(""),
    [U, B] = T.useState(!1),
    [Q, F] = T.useState(!1),
    [$, fe] = T.useState(null),
    [me, ge] = T.useState(null),
    k = f[g];
  T.useEffect(() => localStorage.setItem(c, JSON.stringify(A)), [A, c]);
  const Re = async (ue) => {
      if (Q || U) return;
      (ge(null), fe(ue));
      const se = { ...A, [k.id]: ue };
      if ((H(se), g < f.length - 1)) {
        (F(!0),
          window.setTimeout(() => {
            (fe(null), ge(null), D(g + 1), F(!1));
          }, 260));
        return;
      }
      (B(!0), Y(""));
      try {
        const ve = await ni.submit(
          {
            season: l,
            answers: se,
            ...(S.trim() ? { displayName: S.trim() } : {}),
            ...(s.get("ref") ? { referredBy: s.get("ref") } : {}),
            ...(s.get("utm_source")
              ? { campaignSource: s.get("utm_source") }
              : {}),
            consentVersion: "result-storage-v1",
          },
          crypto.randomUUID(),
        );
        (localStorage.removeItem(c),
          localStorage.setItem(`community-latest-${l}`, ve.publicResultId),
          r(`/result/${ve.publicResultId}`));
      } catch (ve) {
        (Y(
          ve instanceof Error
            ? ve.message
            : "제출하지 못했습니다. / 提交失败。",
        ),
          B(!1));
      }
    },
    ze =
      l === "season-2"
        ? [
            { value: "O", label: "그렇다", mark: "O", key: "O" },
            { value: "X", label: "아니다", mark: "×", key: "X" },
          ]
        : k.allowedAnswers.map((ue, se) => ({
            value: ue,
            mark: String(ue),
            key: String(ue),
            label:
              k.allowedAnswers.length === 4
                ? ["전혀 아니다", "가끔 그렇다", "종종 그렇다", "항상 그렇다"][
                    se
                  ]
                : [
                    "매우 반대",
                    "",
                    "약간 반대",
                    "약간 동의",
                    "",
                    "강하게 동의",
                  ][se],
          }));
  return (
    T.useEffect(() => {
      if (!h || U || Q) return;
      const ue = (se) => {
        if (se.repeat || se.metaKey || se.ctrlKey || se.altKey) return;
        const ve = ze.find(
          (_t) => _t.key.toLowerCase() === se.key.toLowerCase(),
        );
        (ve && (se.preventDefault(), Re(ve.value)),
          se.key === "ArrowLeft" && g > 0 && D(g - 1));
      };
      return (
        window.addEventListener("keydown", ue),
        () => window.removeEventListener("keydown", ue)
      );
    }, [h, U, Q, g, k.id]),
    h
      ? d.jsxs("div", {
          className: `test-shell ${l === "season-2" ? "test-shell--two" : "test-shell--one"}`,
          children: [
            d.jsxs("header", {
              children: [
                d.jsx(lo, {}),
                d.jsxs("span", {
                  children: [String(g + 1).padStart(2, "0"), " / ", f.length],
                }),
              ],
            }),
            d.jsx("div", {
              className: "progress",
              children: d.jsx("i", {
                style: { width: `${((g + 1) / f.length) * 100}%` },
              }),
            }),
            d.jsxs(
              "main",
              {
                className: "question",
                "aria-live": "polite",
                children: [
                  d.jsxs("div", {
                    className: "question__meta",
                    children: [
                      d.jsx($t, {
                        index: String(g + 1).padStart(2, "0"),
                        children: "QUESTION",
                      }),
                      d.jsxs("span", {
                        children: [
                          "USE KEYBOARD",
                          " ",
                          l === "season-2" ? "O / X" : `1 — ${ze.length}`,
                        ],
                      }),
                    ],
                  }),
                  d.jsx("span", {
                    className: "question__ghost",
                    "aria-hidden": "true",
                    children: String(g + 1).padStart(2, "0"),
                  }),
                  d.jsxs("h1", {
                    children: [d.jsx("span", { children: "Q." }), k.prompt],
                  }),
                  d.jsx("div", {
                    className: `answers answers--${ze.length} ${l === "season-1" ? "answers--scale" : ""}`,
                    "aria-label": l === "season-1" ? "동의 정도 선택" : void 0,
                    children: ze.map((ue, se) =>
                      d.jsx(
                        "button",
                        {
                          className: `${$ === ue.value ? "is-selected" : ""} ${me === ue.value ? "is-hovered" : ""}`,
                          onClick: () => Re(ue.value),
                          onPointerEnter: (ve) => {
                            ve.pointerType === "mouse" && ge(ue.value);
                          },
                          onPointerLeave: () => ge(null),
                          onPointerUp: (ve) => {
                            (ge(null), ve.currentTarget.blur());
                          },
                          disabled: U || Q,
                          children:
                            l === "season-1"
                              ? d.jsxs(d.Fragment, {
                                  children: [
                                    d.jsxs("small", {
                                      className: "visually-hidden",
                                      children: [se + 1, "점"],
                                    }),
                                    d.jsxs("svg", {
                                      className: `scale-dot ${se === 0 || se === ze.length - 1 ? "scale-dot--endpoint" : ""}`,
                                      viewBox: "0 0 48 48",
                                      "aria-hidden": "true",
                                      children: [
                                        d.jsx("circle", {
                                          className: "scale-dot__disc",
                                          cx: "24",
                                          cy: "24",
                                          r: "21",
                                        }),
                                        d.jsx("circle", {
                                          className: "scale-dot__center",
                                          cx: "24",
                                          cy: "24",
                                          r: "4",
                                        }),
                                        d.jsx("path", {
                                          className: "scale-dot__check",
                                          d: "m15 24 6 6 13-14",
                                        }),
                                      ],
                                    }),
                                    d.jsx("span", { children: ue.label }),
                                  ],
                                })
                              : d.jsxs(d.Fragment, {
                                  children: [
                                    d.jsx("small", {
                                      children: String(se + 1).padStart(2, "0"),
                                    }),
                                    d.jsx("b", { children: ue.mark }),
                                    d.jsx("span", { children: ue.label }),
                                    d.jsx("i", { children: "↘" }),
                                  ],
                                }),
                        },
                        `${k.id}-${ue.value}`,
                      ),
                    ),
                  }),
                  V &&
                    d.jsxs("p", {
                      className: "error",
                      children: [
                        V,
                        " ",
                        d.jsx("button", {
                          onClick: () => Re(A[k.id] ?? ze[0].value),
                          children: "다시 시도",
                        }),
                      ],
                    }),
                  d.jsxs("button", {
                    className: "back",
                    disabled: g === 0 || U,
                    onClick: () => {
                      (fe(null), ge(null), D(Math.max(0, g - 1)));
                    },
                    children: ["← 이전 문항 ", d.jsx("kbd", { children: "←" })],
                  }),
                  U &&
                    d.jsx("div", {
                      className: "sending",
                      children: "결과를 계산하고 있습니다…",
                    }),
                ],
              },
              k.id,
            ),
          ],
        })
      : d.jsx(Yt, {
          dark: l === "season-2",
          showFooter: !1,
          children: d.jsx("main", {
            className: "gate",
            children: d.jsxs("form", {
              className: "gate__form",
              onSubmit: (ue) => {
                (ue.preventDefault(),
                  p(!0),
                  ni.prepareAppCheck().then((se) => {
                    s.get("debug_app_check") === "1" &&
                      console.info(
                        `App Check token: ${se ? "available" : "unavailable"}`,
                      );
                  }));
              },
              children: [
                d.jsx(io, { season: l }),
                d.jsx("h1", { children: "이름을 입력하세요." }),
                d.jsx("label", {
                  className: "visually-hidden",
                  htmlFor: `${l}-name`,
                  children: "결과에 표시할 이름",
                }),
                d.jsx("input", {
                  id: `${l}-name`,
                  maxLength: 24,
                  value: S,
                  onChange: (ue) => y(ue.target.value),
                  placeholder: "이름 (선택)",
                  autoComplete: "off",
                }),
                d.jsx("span", {
                  className: "gate__name-guide",
                  children: "결과에 표시할 이름은 선택사항입니다.",
                }),
                d.jsx("div", {
                  className: "test-notices",
                  "aria-label": "테스트 안내",
                  children: (l === "season-2" ? VS : qS).map((ue, se) =>
                    d.jsxs("p", { children: ["※ ", ue] }, se),
                  ),
                }),
                d.jsxs("button", {
                  className: `button ${l === "season-2" ? "button--blue" : "button--black"}`,
                  type: "submit",
                  children: [
                    d.jsx("span", { children: "시작" }),
                    d.jsx("b", { "aria-hidden": "true", children: "↘" }),
                  ],
                }),
              ],
            }),
          }),
        })
  );
}
const FS = [
    {
      title: "정치 영역",
      body: `정치 영역은 정부의 역할에 대한 태도를 측정합니다.

정부가 적극적으로 부의 재분배를 통해 빈부격차를 줄이고, 복지제도를 통한 안전망을 확보해야 한다는 ‘큰 정부’의 입장일수록 빨간색의 ‘좌파’로 분류됩니다.

정부가 개인의 노력과 자유를 최대한 보장하고, 자유시장경제의 경쟁을 통한 성장을 추구해야 한다는 ‘작은 정부’의 입장일수록 파란색의 ‘우파’로 분류됩니다.`,
    },
    {
      title: "젠더 영역",
      body: `젠더 영역은 페미니즘 일반에 대한 태도를 측정합니다.

현대사회에도 여전히 남성의 기득권이 유지되고 있기 때문에 여성에 대한 차별을 개선해 나가야 한다는 전제에 동의할수록 빨간색의 ‘페미니즘’으로 분류됩니다.

반대로 이미 여성에 대한 일방적인 차별은 대부분 해소되었으며, 두 성별 각각이 경험하는 세부적인 불평등을 동등하게 해결해야 하므로 여성 차별만을 주장하는 것은 ‘역차별’이라는 입장일수록 파란색의 ‘이퀄리즘’으로 분류됩니다.

* ‘이퀄리즘’은 학문으로 분류된 용어는 아니며, ‘페미니즘’에 동의하지 않는 진영이 위와 같은 취지로 언급한 용어를 차용하였습니다.`,
    },
    {
      title: "계급 영역",
      body: `계급 영역은 현재의 경제적 상황이 아닌, 어릴 적의 경제적 출신과 태도를 측정합니다.

어린 시절부터 경제적인 소득이 적은 환경 출신이자 이와 연관된 태도를 많이 유지할수록 빨간색의 ‘서민’으로 분류됩니다.

어린 시절부터 경제적으로 여유로운 환경에서 자라고 금전적인 문제를 겪을 기회가 적은 입장일수록 파란색의 ‘부유’로 분류됩니다.`,
    },
    {
      title: "개방성 영역",
      body: `개방성 영역은 사회적 소수자와 새로운 윤리규범에 대해 어떤 입장을 가지고 있는지를 측정합니다.

사회적 소수자를 위한 정책을 지지하고 기존의 윤리규범을 대체하는 새로운 윤리규범에 거부감이 적은 입장일수록 빨간색의 ‘개방적’으로 분류됩니다.

소수자보다는 다수의 입장을 중시하고 새로운 질서보다는 기존의 윤리규범에 더 높은 가치를 부여하는 입장일수록 파란색의 ‘전통적’으로 분류됩니다.`,
    },
  ],
  WS = [
    {
      title: "개인차원",
      intro: "개인적 삶에서 무엇을 경제적으로 우선하는지 확인합니다.",
      contrasts: [
        {
          term: "의미",
          description:
            "금전적인 가치로 환산되지 않는 것들을 우선에 두고자 한다.",
        },
        {
          term: "실리",
          description:
            "물질적 안정이 다른 가치를 실현하는 가장 중요한 토대라고 강조한다.",
        },
      ],
    },
    {
      title: "사회차원",
      intro: "사회적 자원을 분배할 때 무엇을 우선하는지 확인합니다.",
      contrasts: [
        {
          term: "구조",
          description:
            "불평등의 극복을 개인에게만 맡기지 않고, 제도와 정책이 적극적인 역할을 해야 한다고 생각한다.",
        },
        {
          term: "능력",
          description:
            "개인의 성취와 노력을 강조하며, 불평등은 공정한 경쟁 과정에서 나타날 수 있다고 생각한다.",
        },
      ],
    },
    {
      title: "윤리차원",
      intro: "도덕적 가치가 충돌할 때 무엇을 기준으로 판단하는지 확인합니다.",
      contrasts: [
        {
          term: "원칙",
          description:
            "행동의 결과를 모두 예측할 수 없으므로, 오랫동안 합의해 온 기준을 신중하게 따르는 것이 중요하다고 본다.",
        },
        {
          term: "결과",
          description:
            "하나의 원칙을 모든 상황에 적용할 수 없으므로, 최대 다수의 최대 유익을 적극적으로 추구한다.",
        },
      ],
    },
  ];
function IS({ season: l }) {
  return d.jsxs("section", {
    className: `result-guide result-guide--${l}`,
    children: [
      d.jsxs("div", {
        className: "result-guide__notices",
        children: [
          l === "season-1"
            ? d.jsx("p", {
                children:
                  "※ 심볼의 각 영역은 지지하는 성향이 강할수록 색상이 선명해집니다.",
              })
            : d.jsx("p", {
                children:
                  "※ 각 영역별 최대 2점까지 측정됩니다. 현실중심적인 성향은 검은색, 이상주의적인 성향은 흰색으로 표시되며 성향이 강할수록 선의 밀도도 높아집니다.",
              }),
          d.jsx("p", {
            children:
              "※ 결과에서 사용하는 용어들은 본 테스트와 프로그램 안에서 사용하기 위해 정의한 것으로, 실제 용례와 다를 수 있습니다.",
          }),
        ],
      }),
      d.jsx("h2", { children: "각 영역은 어떻게 측정되나요?" }),
      d.jsx("div", {
        className: "result-guide__sections",
        children:
          l === "season-1"
            ? FS.map((r) =>
                d.jsxs(
                  "details",
                  {
                    children: [
                      d.jsx("summary", { children: r.title }),
                      d.jsx("p", { children: r.body }),
                    ],
                  },
                  r.title,
                ),
              )
            : WS.map((r) =>
                d.jsxs(
                  "details",
                  {
                    children: [
                      d.jsx("summary", { children: r.title }),
                      d.jsxs("div", {
                        className: "result-guide__body",
                        children: [
                          d.jsx("p", {
                            className: "result-guide__lead",
                            children: r.intro,
                          }),
                          d.jsx("dl", {
                            className: "result-guide__contrasts",
                            children: r.contrasts.map((s, c) =>
                              d.jsxs(
                                "div",
                                {
                                  className: `result-guide__contrast result-guide__contrast--${c === 0 ? "ideal" : "real"}`,
                                  children: [
                                    d.jsx("dt", { children: s.term }),
                                    d.jsx("dd", { children: s.description }),
                                  ],
                                },
                                s.term,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  r.title,
                ),
              ),
      }),
    ],
  });
}
function PS({ result: l, referral: r = !1 }) {
  const [s, c] = T.useState(!1),
    [f, h] = T.useState(!1),
    p = l.season === "season-2" ? QS(l.resultType) : null,
    S = l.season === "season-2" ? Yp(l.axes) : null,
    y = localStorage.getItem(`community-compare-${l.season}`),
    g = `${location.origin}/r/${l.referralCode}`,
    A = `${l.displayName ? `${l.displayName}님의 선택은? / ${l.displayName}的选择是什么？` : "나의 선택은? / 我的选择是什么？"}`,
    H = `${g} ${A} - 나의 가치관 테스트 / 我的价值观测试`,
    V = async () => {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(H);
        return;
      }
      const U = document.createElement("textarea");
      ((U.value = H),
        (U.readOnly = !0),
        (U.style.position = "fixed"),
        (U.style.opacity = "0"),
        document.body.append(U),
        U.select());
      const B = document.execCommand?.("copy") ?? !1;
      if ((U.remove(), !B)) throw new Error("copy_failed");
    },
    Y = async () => {
      if ((h(!1), navigator.share))
        try {
          await navigator.share({ title: A, text: H });
          return;
        } catch (U) {
          if (U instanceof DOMException && U.name === "AbortError") return;
        }
      try {
        (await V(), c(!0));
      } catch {
        h(!0);
      }
    };
  return d.jsx(Yt, {
    dark: !0,
    children: d.jsxs("main", {
      className: "result-page",
      children: [
        d.jsxs("div", {
          className: "result-page__index",
          "aria-hidden": "true",
          children: [
            "RESULT",
            d.jsx("br", {}),
            d.jsx("b", { children: "SYMBOL" }),
          ],
        }),
        d.jsxs("section", {
          className: `result-card result-card--symbol ${r ? "" : "result-card--centered"} ${p ? `result-card--season-2 ${p.classes}` : "result-card--season-1"}`,
          "data-result-code": S?.code,
          children: [
            d.jsxs("div", {
              className: "result-card__head",
              children: [
                d.jsx($t, {
                  index: l.season === "season-2" ? "02" : "01",
                  children:
                    l.season === "season-2"
                      ? "YOUR INVISIBLE HAND"
                      : "YOUR COORDINATE",
                }),
                d.jsx("span", {
                  children: l.displayName
                    ? `${l.displayName}의 결과`
                    : "당신의 결과",
                }),
              ],
            }),
            d.jsx("div", {
              className: "result-symbol-stage",
              children:
                l.season === "season-1"
                  ? d.jsx(NS, {
                      resultType: l.resultType,
                      displayName: l.displayName,
                    })
                  : d.jsx(LS, { axes: l.axes }),
            }),
          ],
        }),
        r &&
          d.jsxs("section", {
            className: "referral-cta",
            children: [
              d.jsx($t, { index: "INVITE", children: "HAND TO HAND" }),
              d.jsxs("p", {
                children: [
                  l.displayName ?? "누군가",
                  "의 손과",
                  d.jsx("br", {}),
                  "당신의 손은",
                  d.jsx("br", {}),
                  "얼마나 다를까.",
                ],
              }),
              d.jsxs(tt, {
                className: "button button--red",
                to: `/season/${l.season === "season-2" ? 2 : 1}/test?ref=${l.referralCode}`,
                children: [
                  d.jsx("span", { children: "내 테스트 시작" }),
                  d.jsx("b", { children: "↘" }),
                ],
              }),
            ],
          }),
        d.jsx(IS, { season: l.season }),
        !r &&
          d.jsxs("section", {
            className: "share-panel",
            children: [
              l.season === "season-1" &&
                d.jsxs("div", {
                  className: "result-program-promo",
                  children: [
                    d.jsx("img", {
                      src: "/brand/season-1-bottom-banner.png",
                      alt: "사상검증구역 더 커뮤니티 방송 안내",
                    }),
                    d.jsx("a", {
                      href: "https://www.wavve.com/player/vod?programid=C9901_C99000000124&landing=season",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "이용권 첫 구매 100원으로 보러가기 ↗",
                    }),
                  ],
                }),
              l.season === "season-2" &&
                d.jsx("a", {
                  className: "result-program-card--mobile",
                  href: "https://m.site.naver.com/2fi4N",
                  target: "_blank",
                  rel: "noreferrer",
                  children: d.jsx("img", {
                    src: new URL("./season-2-program-card.jpg", import.meta.url)
                      .href,
                    alt: "더 커뮤니티 2 프로그램관 지금 보러 가기",
                    width: "800",
                    height: "400",
                    loading: "lazy",
                  }),
                }),
              d.jsx($t, { index: "NEXT", children: "MOVE ANOTHER" }),
              d.jsx("p", {
                children:
                  l.season === "season-2"
                    ? d.jsxs(d.Fragment, {
                        children: [
                          "모든 가치관은 서로",
                          d.jsx("br", {}),
                          d.jsx("em", { children: "부딪치며 형성됩니다" }),
                        ],
                      })
                    : d.jsxs(d.Fragment, {
                        children: [
                          "당신의 결과가",
                          d.jsx("br", {}),
                          "다른 사람의 선택을",
                          d.jsx("br", {}),
                          d.jsx("em", { children: "움직입니다." }),
                        ],
                      }),
              }),
              d.jsxs("button", {
                className: "button button--red",
                onClick: Y,
                children: [
                  d.jsx("span", {
                    children: s ? "링크 복사 완료" : "결과 공유하기",
                  }),
                  d.jsx("b", {
                    "aria-hidden": "true",
                    children: s ? "✓" : "↗",
                  }),
                ],
              }),
              f &&
                d.jsxs("div", {
                  className: "share-panel__error",
                  role: "status",
                  children: [
                    "링크를 자동으로 복사하지 못했습니다.",
                    d.jsx("a", { href: g, children: "공유 링크 열기" }),
                  ],
                }),
              d.jsx("a", {
                className: `result-program-link ${l.season === "season-2" ? "result-program-link--desktop" : ""}`,
                href: "https://m.site.naver.com/2fi4N",
                target: "_blank",
                rel: "noreferrer",
                children: "프로그램관 바로가기 ↗",
              }),
              d.jsx(tt, {
                className: "result-restart",
                to: `/season/${l.season === "season-2" ? 2 : 1}/test`,
                children:
                  l.season === "season-1"
                    ? "사상검증 새로 시작하기"
                    : "테스트 새로 시작하기",
              }),
              y
                ? d.jsx(tt, {
                    to: `/compare/${l.publicResultId}/${y}`,
                    children: "초대자와 결과 비교하기",
                  })
                : d.jsx("span", {
                    className: "compare-hint",
                    children:
                      "친구의 초대 링크로 참여하면 결과를 비교할 수 있습니다.",
                  }),
            ],
          }),
      ],
    }),
  });
}
function Qm({ referral: l = !1 }) {
  const { id: r, code: s } = rp(),
    [c, f] = T.useState(null),
    [h, p] = T.useState("");
  return (
    T.useEffect(() => {
      (l ? ni.referral(s) : ni.result(r))
        .then((S) => {
          (l &&
            localStorage.setItem(
              `community-compare-${S.season}`,
              S.publicResultId,
            ),
            f(S));
        })
        .catch(() => p("결과를 찾을 수 없습니다."));
    }, [r, s, l]),
    h
      ? d.jsx(Yt, {
          dark: !0,
          children: d.jsxs("main", {
            className: "state",
            children: [
              d.jsx("h1", { children: h }),
              d.jsx(tt, {
                className: "button button--blue",
                to: "/",
                children: "처음으로",
              }),
            ],
          }),
        })
      : c
        ? d.jsx(PS, { result: c, referral: l })
        : d.jsx(Yt, {
            dark: !0,
            children: d.jsx("main", {
              className: "state",
              children: d.jsx("p", { children: "결과를 불러오는 중…" }),
            }),
          })
  );
}
function e2() {
  const { leftId: l, rightId: r } = rp(),
    [s, c] = T.useState(null),
    [f, h] = T.useState(""),
    [p, S] = T.useState(50);
  return (
    T.useEffect(() => {
      ni.compare(l, r)
        .then(c)
        .catch((y) => h(y.message));
    }, [l, r]),
    s
      ? d.jsx(Yt, {
          dark: !0,
          children: d.jsxs("main", {
            className: "compare",
            children: [
              d.jsx($t, { index: "A/B", children: "HAND TO HAND" }),
              d.jsxs("h1", {
                children: [
                  "두 손 사이의",
                  d.jsx("br", {}),
                  d.jsx("em", { children: "거리" }),
                  "를 재다.",
                ],
              }),
              d.jsxs("div", {
                className: "compare-stage",
                style: { "--split": `${p}%` },
                children: [
                  d.jsxs("div", {
                    className: "compare-stage__side compare-stage__side--a",
                    children: [
                      d.jsxs("span", { children: ["A / ", s.left.resultType] }),
                      d.jsx(qu, { tone: "blue" }),
                      d.jsx("h2", { children: s.left.title }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "compare-stage__side compare-stage__side--b",
                    children: [
                      d.jsxs("span", {
                        children: ["B / ", s.right.resultType],
                      }),
                      d.jsx(qu, { tone: "red", variant: 1 }),
                      d.jsx("h2", { children: s.right.title }),
                    ],
                  }),
                  d.jsx("i", {
                    className: "compare-stage__knife",
                    children: d.jsx("b", { children: "↔" }),
                  }),
                  d.jsx("input", {
                    "aria-label": "두 결과 겹쳐 보기",
                    type: "range",
                    min: "8",
                    max: "92",
                    value: p,
                    onChange: (y) => S(Number(y.target.value)),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "compare__people",
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsx("small", { children: "A" }),
                      d.jsx("b", {
                        children: s.left.displayName ?? "첫 번째 손",
                      }),
                      d.jsx("span", { children: s.left.title }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("small", { children: "B" }),
                      d.jsx("b", {
                        children: s.right.displayName ?? "두 번째 손",
                      }),
                      d.jsx("span", { children: s.right.title }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                className: "differences",
                children: s.differences.map((y) =>
                  d.jsxs(
                    "p",
                    {
                      children: [
                        d.jsx("b", { children: y.axis }),
                        d.jsx("i", {
                          children: d.jsx("span", {
                            style: { width: `${y.points}%` },
                          }),
                        }),
                        d.jsxs("strong", {
                          children: [
                            String(y.points).padStart(2, "0"),
                            d.jsx("small", { children: "pt" }),
                          ],
                        }),
                      ],
                    },
                    y.axis,
                  ),
                ),
              }),
              d.jsx("p", {
                className: "compare__instruction",
                children: "중앙의 손잡이를 움직여 두 결과를 직접 겹쳐보세요.",
              }),
            ],
          }),
        })
      : d.jsx(Yt, {
          dark: !0,
          children: d.jsx("main", {
            className: "state",
            children: d.jsx("p", { children: f || "두 결과를 겹치는 중…" }),
          }),
        })
  );
}
function t2() {
  return d.jsx(Yt, {
    dark: !0,
    children: d.jsxs("main", {
      className: "broadcast",
      children: [
        d.jsxs("div", {
          className: "broadcast__copy",
          children: [
            d.jsx($t, { index: "ON AIR", children: "ORIGINAL SERIES" }),
            d.jsxs("h1", {
              children: [
                "협의가 사라진 곳에서",
                d.jsx("br", {}),
                d.jsx("em", { children: "정치는" }),
                " 무엇이 되는가?",
              ],
            }),
            d.jsxs("p", {
              children: [
                d.jsx("strong", {
                  children: "<더 커뮤니티 2: 보이지 않는 손>",
                }),
                d.jsx("br", {}),
                "프로그램 속 출연자들의 테스트에 직접 참여해보세요.",
              ],
            }),
            d.jsxs("button", {
              className: "button button--blue",
              type: "button",
              onClick: () => window.alert("공개 예정 / 即将公开"),
              children: [
                d.jsx("span", { children: "Wavve에서 보기" }),
                d.jsx("b", { children: "↗" }),
              ],
            }),
            d.jsxs("div", {
              className: "broadcast__facts",
              children: [
                d.jsx("span", { children: "REAL PEOPLE" }),
                d.jsx("span", { children: "ONE SPACE" }),
                d.jsx("span", { children: "DIFFERENT BELIEFS" }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "broadcast__poster",
          children: d.jsx("img", {
            className: "broadcast__poster-image",
            src: "https://imagedelivery.net/rz4kIC2FHjrPe9mGQi46Fw/ae2d4739-c91a-4372-aecc-e0dd317ae700/w=800",
            alt: "더 커뮤니티 2 메인 포스터",
            width: "800",
            height: "1130",
            fetchPriority: "high",
          }),
        }),
        d.jsx(AS, {
          inverse: !0,
          children: "WATCH — ARGUE — DOUBT — CHOOSE — REPEAT — ",
        }),
        d.jsxs("section", {
          className: "broadcast__statement",
          children: [
            d.jsx($t, { index: "01", children: "THE FORMAT" }),
            d.jsxs("blockquote", {
              children: [
                "“같은 질문도",
                d.jsx("br", {}),
                "사람 앞에서는",
                d.jsx("br", {}),
                d.jsx("em", { children: "다른 무게" }),
                "를 갖는다.”",
              ],
            }),
            d.jsx("p", {
              children:
                "테스트 결과를 정답표로 소비하지 마세요. 방송은 서로 다른 판단이 충돌하고 수정되는 과정을 보여줍니다.",
            }),
          ],
        }),
      ],
    }),
  });
}
function js() {
  return d.jsx(Yt, {
    dark: !0,
    children: d.jsxs("main", {
      className: "legacy-intro",
      children: [
        d.jsxs("section", {
          className: "legacy-intro__copy",
          children: [
            d.jsx($t, { index: "시즌 2", children: "USER TEST / 2026" }),
            d.jsx("p", {
              className: "legacy-intro__series",
              children: "더 커뮤니티 시즌 2",
            }),
            d.jsxs("h1", {
              children: [
                "보이지",
                d.jsx("br", {}),
                "않는 ",
                d.jsx("em", { children: "손" }),
              ],
            }),
            d.jsxs("p", {
              className: "legacy-intro__dek",
              children: [
                "원칙과 결과, 구조와 능력, 의미와 실리.",
                d.jsx("br", {}),
                "37가지 선택으로 확인하는 판단의 방향.",
              ],
            }),
            d.jsxs(tt, {
              className: "button button--paper",
              to: "/season/2",
              children: ["시즌 2 테스트 시작 ", d.jsx("b", { children: "↘" })],
            }),
          ],
        }),
        d.jsxs("section", {
          className: "legacy-intro__art",
          "aria-hidden": "true",
          children: [
            d.jsx("span", { children: "THE COMMUNITY / SEASON 2" }),
            d.jsx("b", { children: "02" }),
            d.jsx(qu, { tone: "white", variant: 1 }),
            d.jsx("i", { children: "INVISIBLE HAND" }),
          ],
        }),
        d.jsxs("aside", {
          className: "legacy-intro__fallback",
          children: [
            d.jsx("b", { children: "이전 결과 조회는 종료되었습니다." }),
            d.jsx("span", {
              children:
                "시즌 1 테스트는 새 시스템에서 다시 시작할 수 있습니다.",
            }),
            d.jsx(tt, { to: "/season/1", children: "시즌 1 보기 ↗" }),
          ],
        }),
      ],
    }),
  });
}
function a2() {
  const { pathname: l } = dt();
  return (
    T.useEffect(() => {
      window.scrollTo(0, 0);
    }, [l]),
    null
  );
}
function n2() {
  const [l, r] = T.useState(() => sessionStorage.getItem(Gp) === "unlocked");
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(RS, {}),
      d.jsx(a2, {}),
      d.jsxs(Sv, {
        children: [
          d.jsx(et, {
            path: "/admin",
            element: l
              ? d.jsx(ju, { to: "/admin/questions", replace: !0 })
              : d.jsx(KS, { onUnlock: () => r(!0) }),
          }),
          d.jsx(et, {
            path: "/",
            element: d.jsx(ju, { to: "/season/2", replace: !0 }),
          }),
          d.jsx(et, {
            path: "/season/1",
            element: d.jsx(JS, { season: "season-1" }),
          }),
          d.jsx(et, { path: "/season/2", element: d.jsx($S, {}) }),
          d.jsx(et, {
            path: "/season/1/test",
            element: d.jsx(Zm, { season: "season-1" }),
          }),
          d.jsx(et, {
            path: "/season/2/test",
            element: d.jsx(Zm, { season: "season-2" }),
          }),
          d.jsx(et, { path: "/result/:id", element: d.jsx(Qm, {}) }),
          d.jsx(et, { path: "/r/:code", element: d.jsx(Qm, { referral: !0 }) }),
          d.jsx(et, {
            path: "/compare/:leftId/:rightId",
            element: d.jsx(e2, {}),
          }),
          d.jsx(et, {
            path: "/admin/questions",
            element: l
              ? d.jsx(kS, {})
              : d.jsx(ju, { to: "/admin", replace: !0 }),
          }),
          d.jsx(et, { path: "/broadcast", element: d.jsx(t2, {}) }),
          d.jsx(et, { path: "/home", element: d.jsx(js, {}) }),
          d.jsx(et, { path: "/intro", element: d.jsx(js, {}) }),
          d.jsx(et, { path: "/start", element: d.jsx(js, {}) }),
          d.jsx(et, {
            path: "*",
            element: d.jsx(ju, { to: "/", replace: !0 }),
          }),
        ],
      }),
    ],
  });
}
E0.createRoot(document.getElementById("root")).render(
  d.jsx(T.StrictMode, {
    children: d.jsx(Qv, {
      basename: window.__COMMUNITY_BASE_PATH__ || void 0,
      children: d.jsx(n2, {}),
    }),
  }),
);
