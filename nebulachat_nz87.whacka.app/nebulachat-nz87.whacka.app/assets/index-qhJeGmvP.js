var zd = Object.defineProperty;
var Dd = (e, t, n) => t in e ? zd(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Wu = (e, t, n) => Dd(e, typeof t != "symbol" ? t + "" : t, n);

function jd(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
const Fd = "modulepreload",
    Ud = function(e) {
        return "/" + e
    },
    Hu = {},
    $d = function(t, n, r) {
        let l = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                a = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
            l = Promise.allSettled(n.map(u => {
                if (u = Ud(u), u in Hu) return;
                Hu[u] = !0;
                const s = u.endsWith(".css"),
                    c = s ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${c}`)) return;
                const f = document.createElement("link");
                if (f.rel = s ? "stylesheet" : Fd, s || (f.as = "script"), f.crossOrigin = "", f.href = u, a && f.setAttribute("nonce", a), document.head.appendChild(f), s) return new Promise((d, y) => {
                    f.addEventListener("load", d), f.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${u}`)))
                })
            }))
        }

        function o(i) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i
        }
        return l.then(i => {
            for (const a of i || []) a.status === "rejected" && o(a.reason);
            return t().catch(o)
        })
    };

function Bd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ms = {
        exports: {}
    },
    Ol = {},
    Ls = {
        exports: {}
    },
    A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr = Symbol.for("react.element"),
    Vd = Symbol.for("react.portal"),
    Wd = Symbol.for("react.fragment"),
    Hd = Symbol.for("react.strict_mode"),
    Kd = Symbol.for("react.profiler"),
    Qd = Symbol.for("react.provider"),
    Yd = Symbol.for("react.context"),
    Gd = Symbol.for("react.forward_ref"),
    Xd = Symbol.for("react.suspense"),
    Jd = Symbol.for("react.memo"),
    Zd = Symbol.for("react.lazy"),
    Ku = Symbol.iterator;

function qd(e) {
    return e === null || typeof e != "object" ? null : (e = Ku && e[Ku] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Os = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    As = Object.assign,
    zs = {};

function Cn(e, t, n) {
    this.props = e, this.context = t, this.refs = zs, this.updater = n || Os
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Cn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ds() {}
Ds.prototype = Cn.prototype;

function Vi(e, t, n) {
    this.props = e, this.context = t, this.refs = zs, this.updater = n || Os
}
var Wi = Vi.prototype = new Ds;
Wi.constructor = Vi;
As(Wi, Cn.prototype);
Wi.isPureReactComponent = !0;
var Qu = Array.isArray,
    js = Object.prototype.hasOwnProperty,
    Hi = {
        current: null
    },
    Fs = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Us(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) js.call(t, r) && !Fs.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: yr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Hi.current
    }
}

function bd(e, t) {
    return {
        $$typeof: yr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ki(e) {
    return typeof e == "object" && e !== null && e.$$typeof === yr
}

function ep(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Yu = /\/+/g;

function to(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ep("" + e.key) : t.toString(36)
}

function Hr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case yr:
                case Vd:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + to(i, 0) : r, Qu(l) ? (n = "", e != null && (n = e.replace(Yu, "$&/") + "/"), Hr(l, t, n, "", function(s) {
        return s
    })) : l != null && (Ki(l) && (l = bd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Yu, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Qu(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + to(o, a);
            i += Hr(o, t, n, u, l)
        } else if (u = qd(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + to(o, a++), i += Hr(o, t, n, u, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Cr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Hr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function tp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var de = {
        current: null
    },
    Kr = {
        transition: null
    },
    np = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: Kr,
        ReactCurrentOwner: Hi
    };

function $s() {
    throw Error("act(...) is not supported in production builds of React.")
}
A.Children = {
    map: Cr,
    forEach: function(e, t, n) {
        Cr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Cr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Cr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ki(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
A.Component = Cn;
A.Fragment = Wd;
A.Profiler = Kd;
A.PureComponent = Vi;
A.StrictMode = Hd;
A.Suspense = Xd;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
A.act = $s;
A.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = As({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Hi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) js.call(t, u) && !Fs.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a
    }
    return {
        $$typeof: yr,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
A.createContext = function(e) {
    return e = {
        $$typeof: Yd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Qd,
        _context: e
    }, e.Consumer = e
};
A.createElement = Us;
A.createFactory = function(e) {
    var t = Us.bind(null, e);
    return t.type = e, t
};
A.createRef = function() {
    return {
        current: null
    }
};
A.forwardRef = function(e) {
    return {
        $$typeof: Gd,
        render: e
    }
};
A.isValidElement = Ki;
A.lazy = function(e) {
    return {
        $$typeof: Zd,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: tp
    }
};
A.memo = function(e, t) {
    return {
        $$typeof: Jd,
        type: e,
        compare: t === void 0 ? null : t
    }
};
A.startTransition = function(e) {
    var t = Kr.transition;
    Kr.transition = {};
    try {
        e()
    } finally {
        Kr.transition = t
    }
};
A.unstable_act = $s;
A.useCallback = function(e, t) {
    return de.current.useCallback(e, t)
};
A.useContext = function(e) {
    return de.current.useContext(e)
};
A.useDebugValue = function() {};
A.useDeferredValue = function(e) {
    return de.current.useDeferredValue(e)
};
A.useEffect = function(e, t) {
    return de.current.useEffect(e, t)
};
A.useId = function() {
    return de.current.useId()
};
A.useImperativeHandle = function(e, t, n) {
    return de.current.useImperativeHandle(e, t, n)
};
A.useInsertionEffect = function(e, t) {
    return de.current.useInsertionEffect(e, t)
};
A.useLayoutEffect = function(e, t) {
    return de.current.useLayoutEffect(e, t)
};
A.useMemo = function(e, t) {
    return de.current.useMemo(e, t)
};
A.useReducer = function(e, t, n) {
    return de.current.useReducer(e, t, n)
};
A.useRef = function(e) {
    return de.current.useRef(e)
};
A.useState = function(e) {
    return de.current.useState(e)
};
A.useSyncExternalStore = function(e, t, n) {
    return de.current.useSyncExternalStore(e, t, n)
};
A.useTransition = function() {
    return de.current.useTransition()
};
A.version = "18.3.1";
Ls.exports = A;
var R = Ls.exports;
const z = Bd(R),
    rp = jd({
        __proto__: null,
        default: z
    }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp = R,
    op = Symbol.for("react.element"),
    ip = Symbol.for("react.fragment"),
    up = Object.prototype.hasOwnProperty,
    ap = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    sp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Bs(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) up.call(t, r) && !sp.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: op,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ap.current
    }
}
Ol.Fragment = ip;
Ol.jsx = Bs;
Ol.jsxs = Bs;
Ms.exports = Ol;
var x = Ms.exports,
    Do = {},
    Vs = {
        exports: {}
    },
    Ce = {},
    Ws = {
        exports: {}
    },
    Hs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, I) {
        var M = P.length;
        P.push(I);
        e: for (; 0 < M;) {
            var H = M - 1 >>> 1,
                Z = P[H];
            if (0 < l(Z, I)) P[H] = I, P[M] = Z, M = H;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var I = P[0],
            M = P.pop();
        if (M !== I) {
            P[0] = M;
            e: for (var H = 0, Z = P.length, Gt = Z >>> 1; H < Gt;) {
                var Xe = 2 * (H + 1) - 1,
                    eo = P[Xe],
                    Rt = Xe + 1,
                    _r = P[Rt];
                if (0 > l(eo, M)) Rt < Z && 0 > l(_r, eo) ? (P[H] = _r, P[Rt] = M, H = Rt) : (P[H] = eo, P[Xe] = M, H = Xe);
                else if (Rt < Z && 0 > l(_r, M)) P[H] = _r, P[Rt] = M, H = Rt;
                else break e
            }
        }
        return I
    }

    function l(P, I) {
        var M = P.sortIndex - I.sortIndex;
        return M !== 0 ? M : P.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var u = [],
        s = [],
        c = 1,
        f = null,
        d = 3,
        y = !1,
        g = !1,
        v = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(P) {
        for (var I = n(s); I !== null;) {
            if (I.callback === null) r(s);
            else if (I.startTime <= P) r(s), I.sortIndex = I.expirationTime, t(u, I);
            else break;
            I = n(s)
        }
    }

    function E(P) {
        if (v = !1, h(P), !g)
            if (n(u) !== null) g = !0, Yt(S);
            else {
                var I = n(s);
                I !== null && Ge(E, I.startTime - P)
            }
    }

    function S(P, I) {
        g = !1, v && (v = !1, m(C), C = -1), y = !0;
        var M = d;
        try {
            for (h(I), f = n(u); f !== null && (!(f.expirationTime > I) || P && !W());) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var Z = H(f.expirationTime <= I);
                    I = e.unstable_now(), typeof Z == "function" ? f.callback = Z : f === n(u) && r(u), h(I)
                } else r(u);
                f = n(u)
            }
            if (f !== null) var Gt = !0;
            else {
                var Xe = n(s);
                Xe !== null && Ge(E, Xe.startTime - I), Gt = !1
            }
            return Gt
        } finally {
            f = null, d = M, y = !1
        }
    }
    var _ = !1,
        N = null,
        C = -1,
        U = 5,
        L = -1;

    function W() {
        return !(e.unstable_now() - L < U)
    }

    function Tt() {
        if (N !== null) {
            var P = e.unstable_now();
            L = P;
            var I = !0;
            try {
                I = N(!0, P)
            } finally {
                I ? it() : (_ = !1, N = null)
            }
        } else _ = !1
    }
    var it;
    if (typeof p == "function") it = function() {
        p(Tt)
    };
    else if (typeof MessageChannel < "u") {
        var Be = new MessageChannel,
            Oe = Be.port2;
        Be.port1.onmessage = Tt, it = function() {
            Oe.postMessage(null)
        }
    } else it = function() {
        w(Tt, 0)
    };

    function Yt(P) {
        N = P, _ || (_ = !0, it())
    }

    function Ge(P, I) {
        C = w(function() {
            P(e.unstable_now())
        }, I)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        g || y || (g = !0, Yt(S))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return d
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(P) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = d
        }
        var M = d;
        d = I;
        try {
            return P()
        } finally {
            d = M
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, I) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var M = d;
        d = P;
        try {
            return I()
        } finally {
            d = M
        }
    }, e.unstable_scheduleCallback = function(P, I, M) {
        var H = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? H + M : H) : M = H, P) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = M + Z, P = {
            id: c++,
            callback: I,
            priorityLevel: P,
            startTime: M,
            expirationTime: Z,
            sortIndex: -1
        }, M > H ? (P.sortIndex = M, t(s, P), n(u) === null && P === n(s) && (v ? (m(C), C = -1) : v = !0, Ge(E, M - H))) : (P.sortIndex = Z, t(u, P), g || y || (g = !0, Yt(S))), P
    }, e.unstable_shouldYield = W, e.unstable_wrapCallback = function(P) {
        var I = d;
        return function() {
            var M = d;
            d = I;
            try {
                return P.apply(this, arguments)
            } finally {
                d = M
            }
        }
    }
})(Hs);
Ws.exports = Hs;
var cp = Ws.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = R,
    _e = cp;

function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ks = new Set,
    bn = {};

function Ht(e, t) {
    yn(e, t), yn(e + "Capture", t)
}

function yn(e, t) {
    for (bn[e] = t, e = 0; e < t.length; e++) Ks.add(t[e])
}
var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    jo = Object.prototype.hasOwnProperty,
    dp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gu = {},
    Xu = {};

function pp(e) {
    return jo.call(Xu, e) ? !0 : jo.call(Gu, e) ? !1 : dp.test(e) ? Xu[e] = !0 : (Gu[e] = !0, !1)
}

function hp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function mp(e, t, n, r) {
    if (t === null || typeof t > "u" || hp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function pe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    oe[t] = new pe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    oe[e] = new pe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    oe[e] = new pe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    oe[e] = new pe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    oe[e] = new pe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Qi = /[\-:]([a-z])/g;

function Yi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Qi, Yi);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Qi, Yi);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Qi, Yi);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
oe.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Gi(e, t, n, r) {
    var l = oe.hasOwnProperty(t) ? oe[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (mp(t, n, l, r) && (n = null), r || l === null ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ot = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pr = Symbol.for("react.element"),
    Jt = Symbol.for("react.portal"),
    Zt = Symbol.for("react.fragment"),
    Xi = Symbol.for("react.strict_mode"),
    Fo = Symbol.for("react.profiler"),
    Qs = Symbol.for("react.provider"),
    Ys = Symbol.for("react.context"),
    Ji = Symbol.for("react.forward_ref"),
    Uo = Symbol.for("react.suspense"),
    $o = Symbol.for("react.suspense_list"),
    Zi = Symbol.for("react.memo"),
    at = Symbol.for("react.lazy"),
    Gs = Symbol.for("react.offscreen"),
    Ju = Symbol.iterator;

function Tn(e) {
    return e === null || typeof e != "object" ? null : (e = Ju && e[Ju] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Y = Object.assign,
    no;

function Un(e) {
    if (no === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        no = t && t[1] || ""
    }
    return `
` + no + e
}
var ro = !1;

function lo(e, t) {
    if (!e || ro) return "";
    ro = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || l[i] !== o[a]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        ro = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Un(e) : ""
}

function gp(e) {
    switch (e.tag) {
        case 5:
            return Un(e.type);
        case 16:
            return Un("Lazy");
        case 13:
            return Un("Suspense");
        case 19:
            return Un("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = lo(e.type, !1), e;
        case 11:
            return e = lo(e.type.render, !1), e;
        case 1:
            return e = lo(e.type, !0), e;
        default:
            return ""
    }
}

function Bo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Zt:
            return "Fragment";
        case Jt:
            return "Portal";
        case Fo:
            return "Profiler";
        case Xi:
            return "StrictMode";
        case Uo:
            return "Suspense";
        case $o:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ys:
            return (e.displayName || "Context") + ".Consumer";
        case Qs:
            return (e._context.displayName || "Context") + ".Provider";
        case Ji:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Zi:
            return t = e.displayName || null, t !== null ? t : Bo(e.type) || "Memo";
        case at:
            t = e._payload, e = e._init;
            try {
                return Bo(e(t))
            } catch {}
    }
    return null
}

function yp(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Bo(t);
        case 8:
            return t === Xi ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function xt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Xs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function vp(e) {
    var t = Xs(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Nr(e) {
    e._valueTracker || (e._valueTracker = vp(e))
}

function Js(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Xs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function rl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Vo(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Zu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = xt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Zs(e, t) {
    t = t.checked, t != null && Gi(e, "checked", t, !1)
}

function Wo(e, t) {
    Zs(e, t);
    var n = xt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ho(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ho(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function qu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ho(e, t, n) {
    (t !== "number" || rl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var $n = Array.isArray;

function cn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Ko(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function bu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(k(92));
            if ($n(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: xt(n)
    }
}

function qs(e, t) {
    var n = xt(t.value),
        r = xt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ea(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function bs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Qo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? bs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Tr, ec = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Tr = Tr || document.createElement("div"), Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function er(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Wn = {
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
        strokeWidth: !0
    },
    wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function(e) {
    wp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Wn[t] = Wn[e]
    })
});

function tc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px"
}

function nc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = tc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Ep = Y({
    menuitem: !0
}, {
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
    wbr: !0
});

function Yo(e, t) {
    if (t) {
        if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62))
    }
}

function Go(e, t) {
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
            return !0
    }
}
var Xo = null;

function qi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Jo = null,
    fn = null,
    dn = null;

function ta(e) {
    if (e = Er(e)) {
        if (typeof Jo != "function") throw Error(k(280));
        var t = e.stateNode;
        t && (t = Fl(t), Jo(e.stateNode, e.type, t))
    }
}

function rc(e) {
    fn ? dn ? dn.push(e) : dn = [e] : fn = e
}

function lc() {
    if (fn) {
        var e = fn,
            t = dn;
        if (dn = fn = null, ta(e), t)
            for (e = 0; e < t.length; e++) ta(t[e])
    }
}

function oc(e, t) {
    return e(t)
}

function ic() {}
var oo = !1;

function uc(e, t, n) {
    if (oo) return e(t, n);
    oo = !0;
    try {
        return oc(e, t, n)
    } finally {
        oo = !1, (fn !== null || dn !== null) && (ic(), lc())
    }
}

function tr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Fl(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n
}
var Zo = !1;
if (tt) try {
    var Rn = {};
    Object.defineProperty(Rn, "passive", {
        get: function() {
            Zo = !0
        }
    }), window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn)
} catch {
    Zo = !1
}

function Sp(e, t, n, r, l, o, i, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (c) {
        this.onError(c)
    }
}
var Hn = !1,
    ll = null,
    ol = !1,
    qo = null,
    kp = {
        onError: function(e) {
            Hn = !0, ll = e
        }
    };

function xp(e, t, n, r, l, o, i, a, u) {
    Hn = !1, ll = null, Sp.apply(kp, arguments)
}

function _p(e, t, n, r, l, o, i, a, u) {
    if (xp.apply(this, arguments), Hn) {
        if (Hn) {
            var s = ll;
            Hn = !1, ll = null
        } else throw Error(k(198));
        ol || (ol = !0, qo = s)
    }
}

function Kt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function ac(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function na(e) {
    if (Kt(e) !== e) throw Error(k(188))
}

function Cp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Kt(e), t === null) throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return na(l), e;
                if (o === r) return na(l), t;
                o = o.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, a = l.child; a;) {
                if (a === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (a === r) {
                    i = !0, r = l, n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (a === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(k(189))
            }
        }
        if (n.alternate !== r) throw Error(k(190))
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t
}

function sc(e) {
    return e = Cp(e), e !== null ? cc(e) : null
}

function cc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = cc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var fc = _e.unstable_scheduleCallback,
    ra = _e.unstable_cancelCallback,
    Pp = _e.unstable_shouldYield,
    Np = _e.unstable_requestPaint,
    J = _e.unstable_now,
    Tp = _e.unstable_getCurrentPriorityLevel,
    bi = _e.unstable_ImmediatePriority,
    dc = _e.unstable_UserBlockingPriority,
    il = _e.unstable_NormalPriority,
    Rp = _e.unstable_LowPriority,
    pc = _e.unstable_IdlePriority,
    Al = null,
    Qe = null;

function Ip(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
        Qe.onCommitFiberRoot(Al, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Op,
    Mp = Math.log,
    Lp = Math.LN2;

function Op(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Mp(e) / Lp | 0) | 0
}
var Rr = 64,
    Ir = 4194304;

function Bn(e) {
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
            return e
    }
}

function ul(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = Bn(a) : (o &= i, o !== 0 && (r = Bn(o)))
    } else i = n & ~l, i !== 0 ? r = Bn(i) : o !== 0 && (r = Bn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Ap(e, t) {
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
            return -1
    }
}

function zp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Fe(o),
            a = 1 << i,
            u = l[i];
        u === -1 ? (!(a & n) || a & r) && (l[i] = Ap(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function bo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function hc() {
    var e = Rr;
    return Rr <<= 1, !(Rr & 4194240) && (Rr = 64), e
}

function io(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n
}

function Dp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Fe(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function eu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Fe(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var j = 0;

function mc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gc, tu, yc, vc, wc, ei = !1,
    Mr = [],
    mt = null,
    gt = null,
    yt = null,
    nr = new Map,
    rr = new Map,
    ct = [],
    jp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function la(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            mt = null;
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
            nr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rr.delete(t.pointerId)
    }
}

function In(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = Er(t), t !== null && tu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Fp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return mt = In(mt, e, t, n, r, l), !0;
        case "dragenter":
            return gt = In(gt, e, t, n, r, l), !0;
        case "mouseover":
            return yt = In(yt, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return nr.set(o, In(nr.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, rr.set(o, In(rr.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Ec(e) {
    var t = Ot(e.target);
    if (t !== null) {
        var n = Kt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = ac(n), t !== null) {
                    e.blockedOn = t, wc(e.priority, function() {
                        yc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Xo = r, n.target.dispatchEvent(r), Xo = null
        } else return t = Er(n), t !== null && tu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function oa(e, t, n) {
    Qr(e) && n.delete(t)
}

function Up() {
    ei = !1, mt !== null && Qr(mt) && (mt = null), gt !== null && Qr(gt) && (gt = null), yt !== null && Qr(yt) && (yt = null), nr.forEach(oa), rr.forEach(oa)
}

function Mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ei || (ei = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Up)))
}

function lr(e) {
    function t(l) {
        return Mn(l, e)
    }
    if (0 < Mr.length) {
        Mn(Mr[0], e);
        for (var n = 1; n < Mr.length; n++) {
            var r = Mr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (mt !== null && Mn(mt, e), gt !== null && Mn(gt, e), yt !== null && Mn(yt, e), nr.forEach(t), rr.forEach(t), n = 0; n < ct.length; n++) r = ct[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ct.length && (n = ct[0], n.blockedOn === null);) Ec(n), n.blockedOn === null && ct.shift()
}
var pn = ot.ReactCurrentBatchConfig,
    al = !0;

function $p(e, t, n, r) {
    var l = j,
        o = pn.transition;
    pn.transition = null;
    try {
        j = 1, nu(e, t, n, r)
    } finally {
        j = l, pn.transition = o
    }
}

function Bp(e, t, n, r) {
    var l = j,
        o = pn.transition;
    pn.transition = null;
    try {
        j = 4, nu(e, t, n, r)
    } finally {
        j = l, pn.transition = o
    }
}

function nu(e, t, n, r) {
    if (al) {
        var l = ti(e, t, n, r);
        if (l === null) yo(e, t, r, sl, n), la(e, r);
        else if (Fp(l, e, t, n, r)) r.stopPropagation();
        else if (la(e, r), t & 4 && -1 < jp.indexOf(e)) {
            for (; l !== null;) {
                var o = Er(l);
                if (o !== null && gc(o), o = ti(e, t, n, r), o === null && yo(e, t, r, sl, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else yo(e, t, r, null, n)
    }
}
var sl = null;

function ti(e, t, n, r) {
    if (sl = null, e = qi(r), e = Ot(e), e !== null)
        if (t = Kt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = ac(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return sl = e, null
}

function Sc(e) {
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
            switch (Tp()) {
                case bi:
                    return 1;
                case dc:
                    return 4;
                case il:
                case Rp:
                    return 16;
                case pc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var dt = null,
    ru = null,
    Yr = null;

function kc() {
    if (Yr) return Yr;
    var e, t = ru,
        n = t.length,
        r, l = "value" in dt ? dt.value : dt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Yr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Gr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Lr() {
    return !0
}

function ia() {
    return !1
}

function Pe(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Lr : ia, this.isPropagationStopped = ia, this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Lr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Lr)
        },
        persist: function() {},
        isPersistent: Lr
    }), t
}
var Pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    lu = Pe(Pn),
    wr = Y({}, Pn, {
        view: 0,
        detail: 0
    }),
    Vp = Pe(wr),
    uo, ao, Ln, zl = Y({}, wr, {
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
        getModifierState: ou,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (uo = e.screenX - Ln.screenX, ao = e.screenY - Ln.screenY) : ao = uo = 0, Ln = e), uo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ao
        }
    }),
    ua = Pe(zl),
    Wp = Y({}, zl, {
        dataTransfer: 0
    }),
    Hp = Pe(Wp),
    Kp = Y({}, wr, {
        relatedTarget: 0
    }),
    so = Pe(Kp),
    Qp = Y({}, Pn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Yp = Pe(Qp),
    Gp = Y({}, Pn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Xp = Pe(Gp),
    Jp = Y({}, Pn, {
        data: 0
    }),
    aa = Pe(Jp),
    Zp = {
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
        MozPrintableKey: "Unidentified"
    },
    qp = {
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
        224: "Meta"
    },
    bp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = bp[e]) ? !!t[e] : !1
}

function ou() {
    return eh
}
var th = Y({}, wr, {
        key: function(e) {
            if (e.key) {
                var t = Zp[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Gr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ou,
        charCode: function(e) {
            return e.type === "keypress" ? Gr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Gr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    nh = Pe(th),
    rh = Y({}, zl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    sa = Pe(rh),
    lh = Y({}, wr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ou
    }),
    oh = Pe(lh),
    ih = Y({}, Pn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    uh = Pe(ih),
    ah = Y({}, zl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    sh = Pe(ah),
    ch = [9, 13, 27, 32],
    iu = tt && "CompositionEvent" in window,
    Kn = null;
tt && "documentMode" in document && (Kn = document.documentMode);
var fh = tt && "TextEvent" in window && !Kn,
    xc = tt && (!iu || Kn && 8 < Kn && 11 >= Kn),
    ca = " ",
    fa = !1;

function _c(e, t) {
    switch (e) {
        case "keyup":
            return ch.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Cc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var qt = !1;

function dh(e, t) {
    switch (e) {
        case "compositionend":
            return Cc(t);
        case "keypress":
            return t.which !== 32 ? null : (fa = !0, ca);
        case "textInput":
            return e = t.data, e === ca && fa ? null : e;
        default:
            return null
    }
}

function ph(e, t) {
    if (qt) return e === "compositionend" || !iu && _c(e, t) ? (e = kc(), Yr = ru = dt = null, qt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return xc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var hh = {
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
    week: !0
};

function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hh[e.type] : t === "textarea"
}

function Pc(e, t, n, r) {
    rc(r), t = cl(t, "onChange"), 0 < t.length && (n = new lu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Qn = null,
    or = null;

function mh(e) {
    jc(e, 0)
}

function Dl(e) {
    var t = tn(e);
    if (Js(t)) return e
}

function gh(e, t) {
    if (e === "change") return t
}
var Nc = !1;
if (tt) {
    var co;
    if (tt) {
        var fo = "oninput" in document;
        if (!fo) {
            var pa = document.createElement("div");
            pa.setAttribute("oninput", "return;"), fo = typeof pa.oninput == "function"
        }
        co = fo
    } else co = !1;
    Nc = co && (!document.documentMode || 9 < document.documentMode)
}

function ha() {
    Qn && (Qn.detachEvent("onpropertychange", Tc), or = Qn = null)
}

function Tc(e) {
    if (e.propertyName === "value" && Dl(or)) {
        var t = [];
        Pc(t, or, e, qi(e)), uc(mh, t)
    }
}

function yh(e, t, n) {
    e === "focusin" ? (ha(), Qn = t, or = n, Qn.attachEvent("onpropertychange", Tc)) : e === "focusout" && ha()
}

function vh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(or)
}

function wh(e, t) {
    if (e === "click") return Dl(t)
}

function Eh(e, t) {
    if (e === "input" || e === "change") return Dl(t)
}

function Sh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var $e = typeof Object.is == "function" ? Object.is : Sh;

function ir(e, t) {
    if ($e(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!jo.call(t, l) || !$e(e[l], t[l])) return !1
    }
    return !0
}

function ma(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ga(e, t) {
    var n = ma(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ma(n)
    }
}

function Rc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Ic() {
    for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = rl(e.document)
    }
    return t
}

function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function kh(e) {
    var t = Ic(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rc(n.ownerDocument.documentElement, n)) {
        if (r !== null && uu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ga(n, o);
                var i = ga(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var xh = tt && "documentMode" in document && 11 >= document.documentMode,
    bt = null,
    ni = null,
    Yn = null,
    ri = !1;

function ya(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ri || bt == null || bt !== rl(r) || (r = bt, "selectionStart" in r && uu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Yn && ir(Yn, r) || (Yn = r, r = cl(ni, "onSelect"), 0 < r.length && (t = new lu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = bt)))
}

function Or(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var en = {
        animationend: Or("Animation", "AnimationEnd"),
        animationiteration: Or("Animation", "AnimationIteration"),
        animationstart: Or("Animation", "AnimationStart"),
        transitionend: Or("Transition", "TransitionEnd")
    },
    po = {},
    Mc = {};
tt && (Mc = document.createElement("div").style, "AnimationEvent" in window || (delete en.animationend.animation, delete en.animationiteration.animation, delete en.animationstart.animation), "TransitionEvent" in window || delete en.transitionend.transition);

function jl(e) {
    if (po[e]) return po[e];
    if (!en[e]) return e;
    var t = en[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Mc) return po[e] = t[n];
    return e
}
var Lc = jl("animationend"),
    Oc = jl("animationiteration"),
    Ac = jl("animationstart"),
    zc = jl("transitionend"),
    Dc = new Map,
    va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ct(e, t) {
    Dc.set(e, t), Ht(t, [e])
}
for (var ho = 0; ho < va.length; ho++) {
    var mo = va[ho],
        _h = mo.toLowerCase(),
        Ch = mo[0].toUpperCase() + mo.slice(1);
    Ct(_h, "on" + Ch)
}
Ct(Lc, "onAnimationEnd");
Ct(Oc, "onAnimationIteration");
Ct(Ac, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(zc, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ph = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));

function wa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, _p(r, t, void 0, e), e.currentTarget = null
}

function jc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        u = a.instance,
                        s = a.currentTarget;
                    if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
                    wa(l, a, s), o = u
                } else
                    for (i = 0; i < r.length; i++) {
                        if (a = r[i], u = a.instance, s = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
                        wa(l, a, s), o = u
                    }
        }
    }
    if (ol) throw e = qo, ol = !1, qo = null, e
}

function $(e, t) {
    var n = t[ai];
    n === void 0 && (n = t[ai] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Fc(t, e, 2, !1), n.add(r))
}

function go(e, t, n) {
    var r = 0;
    t && (r |= 4), Fc(n, e, r, t)
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);

function ur(e) {
    if (!e[Ar]) {
        e[Ar] = !0, Ks.forEach(function(n) {
            n !== "selectionchange" && (Ph.has(n) || go(n, !1, e), go(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ar] || (t[Ar] = !0, go("selectionchange", !1, t))
    }
}

function Fc(e, t, n, r) {
    switch (Sc(t)) {
        case 1:
            var l = $p;
            break;
        case 4:
            l = Bp;
            break;
        default:
            l = nu
    }
    n = l.bind(null, t, n, e), l = void 0, !Zo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function yo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Ot(a), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = o = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    uc(function() {
        var s = o,
            c = qi(n),
            f = [];
        e: {
            var d = Dc.get(e);
            if (d !== void 0) {
                var y = lu,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Gr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = nh;
                        break;
                    case "focusin":
                        g = "focus", y = so;
                        break;
                    case "focusout":
                        g = "blur", y = so;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = so;
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
                        y = ua;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Hp;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = oh;
                        break;
                    case Lc:
                    case Oc:
                    case Ac:
                        y = Yp;
                        break;
                    case zc:
                        y = uh;
                        break;
                    case "scroll":
                        y = Vp;
                        break;
                    case "wheel":
                        y = sh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Xp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = sa
                }
                var v = (t & 4) !== 0,
                    w = !v && e === "scroll",
                    m = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var p = s, h; p !== null;) {
                    h = p;
                    var E = h.stateNode;
                    if (h.tag === 5 && E !== null && (h = E, m !== null && (E = tr(p, m), E != null && v.push(ar(p, E, h)))), w) break;
                    p = p.return
                }
                0 < v.length && (d = new y(d, g, null, n, c), f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== Xo && (g = n.relatedTarget || n.fromElement) && (Ot(g) || g[nt])) break e;
                if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = s, g = g ? Ot(g) : null, g !== null && (w = Kt(g), g !== w || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = s), y !== g)) {
                    if (v = ua, E = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = sa, E = "onPointerLeave", m = "onPointerEnter", p = "pointer"), w = y == null ? d : tn(y), h = g == null ? d : tn(g), d = new v(E, p + "leave", y, n, c), d.target = w, d.relatedTarget = h, E = null, Ot(c) === s && (v = new v(m, p + "enter", g, n, c), v.target = h, v.relatedTarget = w, E = v), w = E, y && g) t: {
                        for (v = y, m = g, p = 0, h = v; h; h = Xt(h)) p++;
                        for (h = 0, E = m; E; E = Xt(E)) h++;
                        for (; 0 < p - h;) v = Xt(v),
                        p--;
                        for (; 0 < h - p;) m = Xt(m),
                        h--;
                        for (; p--;) {
                            if (v === m || m !== null && v === m.alternate) break t;
                            v = Xt(v), m = Xt(m)
                        }
                        v = null
                    }
                    else v = null;
                    y !== null && Ea(f, d, y, v, !1), g !== null && w !== null && Ea(f, w, g, v, !0)
                }
            }
            e: {
                if (d = s ? tn(s) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file") var S = gh;
                else if (da(d))
                    if (Nc) S = Eh;
                    else {
                        S = vh;
                        var _ = yh
                    }
                else(y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = wh);
                if (S && (S = S(e, s))) {
                    Pc(f, S, n, c);
                    break e
                }
                _ && _(e, d, s),
                e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && Ho(d, "number", d.value)
            }
            switch (_ = s ? tn(s) : window, e) {
                case "focusin":
                    (da(_) || _.contentEditable === "true") && (bt = _, ni = s, Yn = null);
                    break;
                case "focusout":
                    Yn = ni = bt = null;
                    break;
                case "mousedown":
                    ri = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ri = !1, ya(f, n, c);
                    break;
                case "selectionchange":
                    if (xh) break;
                case "keydown":
                case "keyup":
                    ya(f, n, c)
            }
            var N;
            if (iu) e: {
                switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else qt ? _c(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");C && (xc && n.locale !== "ko" && (qt || C !== "onCompositionStart" ? C === "onCompositionEnd" && qt && (N = kc()) : (dt = c, ru = "value" in dt ? dt.value : dt.textContent, qt = !0)), _ = cl(s, C), 0 < _.length && (C = new aa(C, e, null, n, c), f.push({
                event: C,
                listeners: _
            }), N ? C.data = N : (N = Cc(n), N !== null && (C.data = N)))),
            (N = fh ? dh(e, n) : ph(e, n)) && (s = cl(s, "onBeforeInput"), 0 < s.length && (c = new aa("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: s
            }), c.data = N))
        }
        jc(f, t)
    })
}

function ar(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function cl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = tr(e, n), o != null && r.unshift(ar(e, o, l)), o = tr(e, t), o != null && r.push(ar(e, o, l))), e = e.return
    }
    return r
}

function Xt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ea(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && s !== null && (a = s, l ? (u = tr(n, o), u != null && i.unshift(ar(n, u, a))) : l || (u = tr(n, o), u != null && i.push(ar(n, u, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Nh = /\r\n?/g,
    Th = /\u0000|\uFFFD/g;

function Sa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nh, `
`).replace(Th, "")
}

function zr(e, t, n) {
    if (t = Sa(t), Sa(e) !== t && n) throw Error(k(425))
}

function fl() {}
var li = null,
    oi = null;

function ii(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ui = typeof setTimeout == "function" ? setTimeout : void 0,
    Rh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ka = typeof Promise == "function" ? Promise : void 0,
    Ih = typeof queueMicrotask == "function" ? queueMicrotask : typeof ka < "u" ? function(e) {
        return ka.resolve(null).then(e).catch(Mh)
    } : ui;

function Mh(e) {
    setTimeout(function() {
        throw e
    })
}

function vo(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), lr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    lr(t)
}

function vt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function xa(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Nn = Math.random().toString(36).slice(2),
    Ke = "__reactFiber$" + Nn,
    sr = "__reactProps$" + Nn,
    nt = "__reactContainer$" + Nn,
    ai = "__reactEvents$" + Nn,
    Lh = "__reactListeners$" + Nn,
    Oh = "__reactHandles$" + Nn;

function Ot(e) {
    var t = e[Ke];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[nt] || n[Ke]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = xa(e); e !== null;) {
                    if (n = e[Ke]) return n;
                    e = xa(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Er(e) {
    return e = e[Ke] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33))
}

function Fl(e) {
    return e[sr] || null
}
var si = [],
    nn = -1;

function Pt(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > nn || (e.current = si[nn], si[nn] = null, nn--)
}

function F(e, t) {
    nn++, si[nn] = e.current, e.current = t
}
var _t = {},
    se = Pt(_t),
    ge = Pt(!1),
    Ft = _t;

function vn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function ye(e) {
    return e = e.childContextTypes, e != null
}

function dl() {
    B(ge), B(se)
}

function _a(e, t, n) {
    if (se.current !== _t) throw Error(k(168));
    F(se, t), F(ge, n)
}

function Uc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(k(108, yp(e) || "Unknown", l));
    return Y({}, n, r)
}

function pl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Ft = se.current, F(se, e), F(ge, ge.current), !0
}

function Ca(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n ? (e = Uc(e, t, Ft), r.__reactInternalMemoizedMergedChildContext = e, B(ge), B(se), F(se, e)) : B(ge), F(ge, n)
}
var Ze = null,
    Ul = !1,
    wo = !1;

function $c(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}

function Ah(e) {
    Ul = !0, $c(e)
}

function Nt() {
    if (!wo && Ze !== null) {
        wo = !0;
        var e = 0,
            t = j;
        try {
            var n = Ze;
            for (j = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ze = null, Ul = !1
        } catch (l) {
            throw Ze !== null && (Ze = Ze.slice(e + 1)), fc(bi, Nt), l
        } finally {
            j = t, wo = !1
        }
    }
    return null
}
var rn = [],
    ln = 0,
    hl = null,
    ml = 0,
    Ne = [],
    Te = 0,
    Ut = null,
    qe = 1,
    be = "";

function Mt(e, t) {
    rn[ln++] = ml, rn[ln++] = hl, hl = e, ml = t
}

function Bc(e, t, n) {
    Ne[Te++] = qe, Ne[Te++] = be, Ne[Te++] = Ut, Ut = e;
    var r = qe;
    e = be;
    var l = 32 - Fe(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Fe(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - Fe(t) + l | n << l | r, be = o + e
    } else qe = 1 << o | n << l | r, be = e
}

function au(e) {
    e.return !== null && (Mt(e, 1), Bc(e, 1, 0))
}

function su(e) {
    for (; e === hl;) hl = rn[--ln], rn[ln] = null, ml = rn[--ln], rn[ln] = null;
    for (; e === Ut;) Ut = Ne[--Te], Ne[Te] = null, be = Ne[--Te], Ne[Te] = null, qe = Ne[--Te], Ne[Te] = null
}
var ke = null,
    Se = null,
    V = !1,
    je = null;

function Vc(e, t) {
    var n = Re(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Pa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, Se = vt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, Se = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ut !== null ? {
                id: qe,
                overflow: be
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Re(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ke = e, Se = null, !0) : !1;
        default:
            return !1
    }
}

function ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function fi(e) {
    if (V) {
        var t = Se;
        if (t) {
            var n = t;
            if (!Pa(e, t)) {
                if (ci(e)) throw Error(k(418));
                t = vt(n.nextSibling);
                var r = ke;
                t && Pa(e, t) ? Vc(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, ke = e)
            }
        } else {
            if (ci(e)) throw Error(k(418));
            e.flags = e.flags & -4097 | 2, V = !1, ke = e
        }
    }
}

function Na(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ke = e
}

function Dr(e) {
    if (e !== ke) return !1;
    if (!V) return Na(e), V = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps)), t && (t = Se)) {
        if (ci(e)) throw Wc(), Error(k(418));
        for (; t;) Vc(e, t), t = vt(t.nextSibling)
    }
    if (Na(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Se = vt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Se = null
        }
    } else Se = ke ? vt(e.stateNode.nextSibling) : null;
    return !0
}

function Wc() {
    for (var e = Se; e;) e = vt(e.nextSibling)
}

function wn() {
    Se = ke = null, V = !1
}

function cu(e) {
    je === null ? je = [e] : je.push(e)
}
var zh = ot.ReactCurrentBatchConfig;

function On(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode
            }
            if (!r) throw Error(k(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = l.refs;
                i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e))
    }
    return e
}

function jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ta(e) {
    var t = e._init;
    return t(e._payload)
}

function Hc(e) {
    function t(m, p) {
        if (e) {
            var h = m.deletions;
            h === null ? (m.deletions = [p], m.flags |= 16) : h.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function l(m, p) {
        return m = kt(m, p), m.index = 0, m.sibling = null, m
    }

    function o(m, p, h) {
        return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < p ? (m.flags |= 2, p) : h) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function i(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, p, h, E) {
        return p === null || p.tag !== 6 ? (p = Po(h, m.mode, E), p.return = m, p) : (p = l(p, h), p.return = m, p)
    }

    function u(m, p, h, E) {
        var S = h.type;
        return S === Zt ? c(m, p, h.props.children, E, h.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === at && Ta(S) === p.type) ? (E = l(p, h.props), E.ref = On(m, p, h), E.return = m, E) : (E = tl(h.type, h.key, h.props, null, m.mode, E), E.ref = On(m, p, h), E.return = m, E)
    }

    function s(m, p, h, E) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = No(h, m.mode, E), p.return = m, p) : (p = l(p, h.children || []), p.return = m, p)
    }

    function c(m, p, h, E, S) {
        return p === null || p.tag !== 7 ? (p = jt(h, m.mode, E, S), p.return = m, p) : (p = l(p, h), p.return = m, p)
    }

    function f(m, p, h) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Po("" + p, m.mode, h), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Pr:
                    return h = tl(p.type, p.key, p.props, null, m.mode, h), h.ref = On(m, null, p), h.return = m, h;
                case Jt:
                    return p = No(p, m.mode, h), p.return = m, p;
                case at:
                    var E = p._init;
                    return f(m, E(p._payload), h)
            }
            if ($n(p) || Tn(p)) return p = jt(p, m.mode, h, null), p.return = m, p;
            jr(m, p)
        }
        return null
    }

    function d(m, p, h, E) {
        var S = p !== null ? p.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : a(m, p, "" + h, E);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Pr:
                    return h.key === S ? u(m, p, h, E) : null;
                case Jt:
                    return h.key === S ? s(m, p, h, E) : null;
                case at:
                    return S = h._init, d(m, p, S(h._payload), E)
            }
            if ($n(h) || Tn(h)) return S !== null ? null : c(m, p, h, E, null);
            jr(m, h)
        }
        return null
    }

    function y(m, p, h, E, S) {
        if (typeof E == "string" && E !== "" || typeof E == "number") return m = m.get(h) || null, a(p, m, "" + E, S);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Pr:
                    return m = m.get(E.key === null ? h : E.key) || null, u(p, m, E, S);
                case Jt:
                    return m = m.get(E.key === null ? h : E.key) || null, s(p, m, E, S);
                case at:
                    var _ = E._init;
                    return y(m, p, h, _(E._payload), S)
            }
            if ($n(E) || Tn(E)) return m = m.get(h) || null, c(p, m, E, S, null);
            jr(p, E)
        }
        return null
    }

    function g(m, p, h, E) {
        for (var S = null, _ = null, N = p, C = p = 0, U = null; N !== null && C < h.length; C++) {
            N.index > C ? (U = N, N = null) : U = N.sibling;
            var L = d(m, N, h[C], E);
            if (L === null) {
                N === null && (N = U);
                break
            }
            e && N && L.alternate === null && t(m, N), p = o(L, p, C), _ === null ? S = L : _.sibling = L, _ = L, N = U
        }
        if (C === h.length) return n(m, N), V && Mt(m, C), S;
        if (N === null) {
            for (; C < h.length; C++) N = f(m, h[C], E), N !== null && (p = o(N, p, C), _ === null ? S = N : _.sibling = N, _ = N);
            return V && Mt(m, C), S
        }
        for (N = r(m, N); C < h.length; C++) U = y(N, m, C, h[C], E), U !== null && (e && U.alternate !== null && N.delete(U.key === null ? C : U.key), p = o(U, p, C), _ === null ? S = U : _.sibling = U, _ = U);
        return e && N.forEach(function(W) {
            return t(m, W)
        }), V && Mt(m, C), S
    }

    function v(m, p, h, E) {
        var S = Tn(h);
        if (typeof S != "function") throw Error(k(150));
        if (h = S.call(h), h == null) throw Error(k(151));
        for (var _ = S = null, N = p, C = p = 0, U = null, L = h.next(); N !== null && !L.done; C++, L = h.next()) {
            N.index > C ? (U = N, N = null) : U = N.sibling;
            var W = d(m, N, L.value, E);
            if (W === null) {
                N === null && (N = U);
                break
            }
            e && N && W.alternate === null && t(m, N), p = o(W, p, C), _ === null ? S = W : _.sibling = W, _ = W, N = U
        }
        if (L.done) return n(m, N), V && Mt(m, C), S;
        if (N === null) {
            for (; !L.done; C++, L = h.next()) L = f(m, L.value, E), L !== null && (p = o(L, p, C), _ === null ? S = L : _.sibling = L, _ = L);
            return V && Mt(m, C), S
        }
        for (N = r(m, N); !L.done; C++, L = h.next()) L = y(N, m, C, L.value, E), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? C : L.key), p = o(L, p, C), _ === null ? S = L : _.sibling = L, _ = L);
        return e && N.forEach(function(Tt) {
            return t(m, Tt)
        }), V && Mt(m, C), S
    }

    function w(m, p, h, E) {
        if (typeof h == "object" && h !== null && h.type === Zt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Pr:
                    e: {
                        for (var S = h.key, _ = p; _ !== null;) {
                            if (_.key === S) {
                                if (S = h.type, S === Zt) {
                                    if (_.tag === 7) {
                                        n(m, _.sibling), p = l(_, h.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === at && Ta(S) === _.type) {
                                    n(m, _.sibling), p = l(_, h.props), p.ref = On(m, _, h), p.return = m, m = p;
                                    break e
                                }
                                n(m, _);
                                break
                            } else t(m, _);
                            _ = _.sibling
                        }
                        h.type === Zt ? (p = jt(h.props.children, m.mode, E, h.key), p.return = m, m = p) : (E = tl(h.type, h.key, h.props, null, m.mode, E), E.ref = On(m, p, h), E.return = m, m = E)
                    }
                    return i(m);
                case Jt:
                    e: {
                        for (_ = h.key; p !== null;) {
                            if (p.key === _)
                                if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                    n(m, p.sibling), p = l(p, h.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = No(h, m.mode, E),
                        p.return = m,
                        m = p
                    }
                    return i(m);
                case at:
                    return _ = h._init, w(m, p, _(h._payload), E)
            }
            if ($n(h)) return g(m, p, h, E);
            if (Tn(h)) return v(m, p, h, E);
            jr(m, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(m, p.sibling), p = l(p, h), p.return = m, m = p) : (n(m, p), p = Po(h, m.mode, E), p.return = m, m = p), i(m)) : n(m, p)
    }
    return w
}
var En = Hc(!0),
    Kc = Hc(!1),
    gl = Pt(null),
    yl = null,
    on = null,
    fu = null;

function du() {
    fu = on = yl = null
}

function pu(e) {
    var t = gl.current;
    B(gl), e._currentValue = t
}

function di(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function hn(e, t) {
    yl = e, fu = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null)
}

function Me(e) {
    var t = e._currentValue;
    if (fu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, on === null) {
            if (yl === null) throw Error(k(308));
            on = e, yl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else on = on.next = e;
    return t
}
var At = null;

function hu(e) {
    At === null ? At = [e] : At.push(e)
}

function Qc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, hu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rt(e, r)
}

function rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var st = !1;

function mu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Yc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function et(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, D & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, rt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, hu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, rt(e, n)
}

function Xr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eu(e, n)
    }
}

function Ra(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function vl(e, t, n, r) {
    var l = e.updateQueue;
    st = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            s = u.next;
        u.next = null, i === null ? o = s : i.next = s, i = u;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== i && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u))
    }
    if (o !== null) {
        var f = l.baseState;
        i = 0, c = s = u = null, a = o;
        do {
            var d = a.lane,
                y = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e,
                        v = a;
                    switch (d = t, y = n, v.tag) {
                        case 1:
                            if (g = v.payload, typeof g == "function") {
                                f = g.call(y, f, d);
                                break e
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = v.payload, d = typeof g == "function" ? g.call(y, f, d) : g, d == null) break e;
                            f = Y({}, f, d);
                            break e;
                        case 2:
                            st = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = l.effects, d === null ? l.effects = [a] : d.push(a))
            } else y = {
                eventTime: y,
                lane: d,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (s = c = y, u = f) : c = c.next = y, i |= d;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                d = a, a = d.next, d.next = null, l.lastBaseUpdate = d, l.shared.pending = null
            }
        } while (!0);
        if (c === null && (u = f), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        Bt |= i, e.lanes = i, e.memoizedState = f
    }
}

function Ia(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
                l.call(r)
            }
        }
}
var Sr = {},
    Ye = Pt(Sr),
    cr = Pt(Sr),
    fr = Pt(Sr);

function zt(e) {
    if (e === Sr) throw Error(k(174));
    return e
}

function gu(e, t) {
    switch (F(fr, t), F(cr, e), F(Ye, Sr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qo(t, e)
    }
    B(Ye), F(Ye, t)
}

function Sn() {
    B(Ye), B(cr), B(fr)
}

function Gc(e) {
    zt(fr.current);
    var t = zt(Ye.current),
        n = Qo(t, e.type);
    t !== n && (F(cr, e), F(Ye, n))
}

function yu(e) {
    cr.current === e && (B(Ye), B(cr))
}
var K = Pt(0);

function wl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Eo = [];

function vu() {
    for (var e = 0; e < Eo.length; e++) Eo[e]._workInProgressVersionPrimary = null;
    Eo.length = 0
}
var Jr = ot.ReactCurrentDispatcher,
    So = ot.ReactCurrentBatchConfig,
    $t = 0,
    Q = null,
    b = null,
    te = null,
    El = !1,
    Gn = !1,
    dr = 0,
    Dh = 0;

function ie() {
    throw Error(k(321))
}

function wu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$e(e[n], t[n])) return !1;
    return !0
}

function Eu(e, t, n, r, l, o) {
    if ($t = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jr.current = e === null || e.memoizedState === null ? $h : Bh, e = n(r, l), Gn) {
        o = 0;
        do {
            if (Gn = !1, dr = 0, 25 <= o) throw Error(k(301));
            o += 1, te = b = null, t.updateQueue = null, Jr.current = Vh, e = n(r, l)
        } while (Gn)
    }
    if (Jr.current = Sl, t = b !== null && b.next !== null, $t = 0, te = b = Q = null, El = !1, t) throw Error(k(300));
    return e
}

function Su() {
    var e = dr !== 0;
    return dr = 0, e
}

function We() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return te === null ? Q.memoizedState = te = e : te = te.next = e, te
}

function Le() {
    if (b === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = b.next;
    var t = te === null ? Q.memoizedState : te.next;
    if (t !== null) te = t, b = e;
    else {
        if (e === null) throw Error(k(310));
        b = e, e = {
            memoizedState: b.memoizedState,
            baseState: b.baseState,
            baseQueue: b.baseQueue,
            queue: b.queue,
            next: null
        }, te === null ? Q.memoizedState = te = e : te = te.next = e
    }
    return te
}

function pr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ko(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = b,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var a = i = null,
            u = null,
            s = o;
        do {
            var c = s.lane;
            if (($t & c) === c) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var f = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (a = u = f, i = r) : u = u.next = f, Q.lanes |= c, Bt |= c
            }
            s = s.next
        } while (s !== null && s !== o);
        u === null ? i = r : u.next = a, $e(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, Q.lanes |= o, Bt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function xo(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        $e(o, t.memoizedState) || (me = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Xc() {}

function Jc(e, t) {
    var n = Q,
        r = Le(),
        l = t(),
        o = !$e(r.memoizedState, l);
    if (o && (r.memoizedState = l, me = !0), r = r.queue, ku(bc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || te !== null && te.memoizedState.tag & 1) {
        if (n.flags |= 2048, hr(9, qc.bind(null, n, r, l, t), void 0, null), ne === null) throw Error(k(349));
        $t & 30 || Zc(n, t, l)
    }
    return l
}

function Zc(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function qc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ef(t) && tf(e)
}

function bc(e, t, n) {
    return n(function() {
        ef(t) && tf(e)
    })
}

function ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$e(e, n)
    } catch {
        return !0
    }
}

function tf(e) {
    var t = rt(e, 1);
    t !== null && Ue(t, e, 1, -1)
}

function Ma(e) {
    var t = We();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Uh.bind(null, Q, e), [t.memoizedState, e]
}

function hr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function nf() {
    return Le().memoizedState
}

function Zr(e, t, n, r) {
    var l = We();
    Q.flags |= e, l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r)
}

function $l(e, t, n, r) {
    var l = Le();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (b !== null) {
        var i = b.memoizedState;
        if (o = i.destroy, r !== null && wu(r, i.deps)) {
            l.memoizedState = hr(t, n, o, r);
            return
        }
    }
    Q.flags |= e, l.memoizedState = hr(1 | t, n, o, r)
}

function La(e, t) {
    return Zr(8390656, 8, e, t)
}

function ku(e, t) {
    return $l(2048, 8, e, t)
}

function rf(e, t) {
    return $l(4, 2, e, t)
}

function lf(e, t) {
    return $l(4, 4, e, t)
}

function of (e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function uf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $l(4, 4, of .bind(null, t, e), n)
}

function xu() {}

function af(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function sf(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function cf(e, t, n) {
    return $t & 21 ? ($e(n, t) || (n = hc(), Q.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n)
}

function jh(e, t) {
    var n = j;
    j = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = So.transition;
    So.transition = {};
    try {
        e(!1), t()
    } finally {
        j = n, So.transition = r
    }
}

function ff() {
    return Le().memoizedState
}

function Fh(e, t, n) {
    var r = St(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, df(e)) pf(t, n);
    else if (n = Qc(e, t, n, r), n !== null) {
        var l = fe();
        Ue(n, e, r, l), hf(n, t, r)
    }
}

function Uh(e, t, n) {
    var r = St(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (df(e)) pf(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                a = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = a, $e(a, i)) {
                var u = t.interleaved;
                u === null ? (l.next = l, hu(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Qc(e, t, l, r), n !== null && (l = fe(), Ue(n, e, r, l), hf(n, t, r))
    }
}

function df(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}

function pf(e, t) {
    Gn = El = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function hf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eu(e, n)
    }
}
var Sl = {
        readContext: Me,
        useCallback: ie,
        useContext: ie,
        useEffect: ie,
        useImperativeHandle: ie,
        useInsertionEffect: ie,
        useLayoutEffect: ie,
        useMemo: ie,
        useReducer: ie,
        useRef: ie,
        useState: ie,
        useDebugValue: ie,
        useDeferredValue: ie,
        useTransition: ie,
        useMutableSource: ie,
        useSyncExternalStore: ie,
        useId: ie,
        unstable_isNewReconciler: !1
    },
    $h = {
        readContext: Me,
        useCallback: function(e, t) {
            return We().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Me,
        useEffect: La,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Zr(4194308, 4, of .bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Zr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Zr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = We();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = We();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Fh.bind(null, Q, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = We();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Ma,
        useDebugValue: xu,
        useDeferredValue: function(e) {
            return We().memoizedState = e
        },
        useTransition: function() {
            var e = Ma(!1),
                t = e[0];
            return e = jh.bind(null, e[1]), We().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Q,
                l = We();
            if (V) {
                if (n === void 0) throw Error(k(407));
                n = n()
            } else {
                if (n = t(), ne === null) throw Error(k(349));
                $t & 30 || Zc(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, La(bc.bind(null, r, o, e), [e]), r.flags |= 2048, hr(9, qc.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = We(),
                t = ne.identifierPrefix;
            if (V) {
                var n = be,
                    r = qe;
                n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Dh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Bh = {
        readContext: Me,
        useCallback: af,
        useContext: Me,
        useEffect: ku,
        useImperativeHandle: uf,
        useInsertionEffect: rf,
        useLayoutEffect: lf,
        useMemo: sf,
        useReducer: ko,
        useRef: nf,
        useState: function() {
            return ko(pr)
        },
        useDebugValue: xu,
        useDeferredValue: function(e) {
            var t = Le();
            return cf(t, b.memoizedState, e)
        },
        useTransition: function() {
            var e = ko(pr)[0],
                t = Le().memoizedState;
            return [e, t]
        },
        useMutableSource: Xc,
        useSyncExternalStore: Jc,
        useId: ff,
        unstable_isNewReconciler: !1
    },
    Vh = {
        readContext: Me,
        useCallback: af,
        useContext: Me,
        useEffect: ku,
        useImperativeHandle: uf,
        useInsertionEffect: rf,
        useLayoutEffect: lf,
        useMemo: sf,
        useReducer: xo,
        useRef: nf,
        useState: function() {
            return xo(pr)
        },
        useDebugValue: xu,
        useDeferredValue: function(e) {
            var t = Le();
            return b === null ? t.memoizedState = e : cf(t, b.memoizedState, e)
        },
        useTransition: function() {
            var e = xo(pr)[0],
                t = Le().memoizedState;
            return [e, t]
        },
        useMutableSource: Xc,
        useSyncExternalStore: Jc,
        useId: ff,
        unstable_isNewReconciler: !1
    };

function ze(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function pi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Bl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Kt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = fe(),
            l = St(e),
            o = et(r, l);
        o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (Ue(t, e, l, r), Xr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = fe(),
            l = St(e),
            o = et(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (Ue(t, e, l, r), Xr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = fe(),
            r = St(e),
            l = et(n, r);
        l.tag = 2, t != null && (l.callback = t), t = wt(e, l, r), t !== null && (Ue(t, e, r, n), Xr(t, e, r))
    }
};

function Oa(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ir(n, r) || !ir(l, o) : !0
}

function mf(e, t, n) {
    var r = !1,
        l = _t,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Me(o) : (l = ye(t) ? Ft : se.current, r = t.contextTypes, o = (r = r != null) ? vn(e, l) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Aa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null)
}

function hi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, mu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Me(o) : (o = ye(t) ? Ft : se.current, l.context = vn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (pi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), vl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function kn(e, t) {
    try {
        var n = "",
            r = t;
        do n += gp(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function _o(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function mi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Wh = typeof WeakMap == "function" ? WeakMap : Map;

function gf(e, t, n) {
    n = et(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        xl || (xl = !0, Ci = r), mi(e, t)
    }, n
}

function yf(e, t, n) {
    n = et(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            mi(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        mi(e, t), typeof r != "function" && (Et === null ? Et = new Set([this]) : Et.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function za(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Wh;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = rm.bind(null, e, t, n), t.then(e, e))
}

function Da(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ja(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = et(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e)
}
var Hh = ot.ReactCurrentOwner,
    me = !1;

function ce(e, t, n, r) {
    t.child = e === null ? Kc(t, null, n, r) : En(t, e.child, n, r)
}

function Fa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return hn(t, l), r = Eu(e, t, n, r, o, l), n = Su(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && n && au(t), t.flags |= 1, ce(e, t, r, l), t.child)
}

function Ua(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Mu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, vf(e, t, o, r, l)) : (e = tl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ir, n(i, r) && e.ref === t.ref) return lt(e, t, l)
    }
    return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function vf(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ir(o, r) && e.ref === t.ref)
            if (me = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
            else return t.lanes = e.lanes, lt(e, t, l)
    }
    return gi(e, t, n, r, l)
}

function wf(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, F(an, Ee), Ee |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, F(an, Ee), Ee |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, F(an, Ee), Ee |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(an, Ee), Ee |= r;
    return ce(e, t, l, n), t.child
}

function Ef(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function gi(e, t, n, r, l) {
    var o = ye(n) ? Ft : se.current;
    return o = vn(t, o), hn(t, l), n = Eu(e, t, n, r, o, l), r = Su(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && r && au(t), t.flags |= 1, ce(e, t, n, l), t.child)
}

function $a(e, t, n, r, l) {
    if (ye(n)) {
        var o = !0;
        pl(t)
    } else o = !1;
    if (hn(t, l), t.stateNode === null) qr(e, t), mf(t, n, r), hi(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var u = i.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = Me(s) : (s = ye(n) ? Ft : se.current, s = vn(t, s));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== s) && Aa(t, i, r, s), st = !1;
        var d = t.memoizedState;
        i.state = d, vl(t, r, i, l), u = t.memoizedState, a !== r || d !== u || ge.current || st ? (typeof c == "function" && (pi(t, n, c, r), u = t.memoizedState), (a = st || Oa(t, n, a, r, d, u, s)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Yc(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : ze(t.type, a), i.props = s, f = t.pendingProps, d = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Me(u) : (u = ye(n) ? Ft : se.current, u = vn(t, u));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== u) && Aa(t, i, r, u), st = !1, d = t.memoizedState, i.state = d, vl(t, r, i, l);
        var g = t.memoizedState;
        a !== f || d !== g || ge.current || st ? (typeof y == "function" && (pi(t, n, y, r), g = t.memoizedState), (s = st || Oa(t, n, s, r, d, g, u) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = u, r = s) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return yi(e, t, n, r, o, l)
}

function yi(e, t, n, r, l, o) {
    Ef(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Ca(t, n, !1), lt(e, t, o);
    r = t.stateNode, Hh.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = En(t, e.child, null, o), t.child = En(t, null, a, o)) : ce(e, t, a, o), t.memoizedState = r.state, l && Ca(t, n, !0), t.child
}

function Sf(e) {
    var t = e.stateNode;
    t.pendingContext ? _a(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(e, t.context, !1), gu(e, t.containerInfo)
}

function Ba(e, t, n, r, l) {
    return wn(), cu(l), t.flags |= 256, ce(e, t, n, r), t.child
}
var vi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function wi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function kf(e, t, n) {
    var r = t.pendingProps,
        l = K.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(K, l & 1), e === null) return fi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Hl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = wi(n), t.memoizedState = vi, e) : _u(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Kh(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = kt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = kt(a, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? wi(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = vi, r
    }
    return o = e.child, e = o.sibling, r = kt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function _u(e, t) {
    return t = Hl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Fr(e, t, n, r) {
    return r !== null && cu(r), En(t, e.child, null, n), e = _u(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Kh(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = _o(Error(k(422))), Fr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Hl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && En(t, e.child, null, i), t.child.memoizedState = wi(i), t.memoizedState = vi, o);
    if (!(t.mode & 1)) return Fr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(k(419)), r = _o(o, r, void 0), Fr(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, me || a) {
        if (r = ne, r !== null) {
            switch (i & -i) {
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
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, rt(e, l), Ue(r, e, l, -1))
        }
        return Iu(), r = _o(Error(k(421))), Fr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Se = vt(l.nextSibling), ke = t, V = !0, je = null, e !== null && (Ne[Te++] = qe, Ne[Te++] = be, Ne[Te++] = Ut, qe = e.id, be = e.overflow, Ut = t), t = _u(t, r.children), t.flags |= 4096, t)
}

function Va(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), di(e.return, t, n)
}

function Co(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function xf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (ce(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Va(e, n, t);
            else if (e.tag === 19) Va(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (F(K, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && wl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Co(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && wl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Co(t, !0, n, null, o);
            break;
        case "together":
            Co(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function qr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function lt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Bt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Qh(e, t, n) {
    switch (t.tag) {
        case 3:
            Sf(t), wn();
            break;
        case 5:
            Gc(t);
            break;
        case 1:
            ye(t.type) && pl(t);
            break;
        case 4:
            gu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            F(gl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (F(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kf(e, t, n) : (F(K, K.current & 1), e = lt(e, t, n), e !== null ? e.sibling : null);
            F(K, K.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return xf(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(K, K.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, wf(e, t, n)
    }
    return lt(e, t, n)
}
var _f, Ei, Cf, Pf;
_f = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ei = function() {};
Cf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, zt(Ye.current);
        var o = null;
        switch (n) {
            case "input":
                l = Vo(e, l), r = Vo(e, r), o = [];
                break;
            case "select":
                l = Y({}, l, {
                    value: void 0
                }), r = Y({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = Ko(e, l), r = Ko(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fl)
        }
        Yo(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var a = l[s];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (bn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (a = l != null ? l[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
                if (s === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (o || (o = []), o.push(s, n)), n = u;
            else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (bn.hasOwnProperty(s) ? (u != null && s === "onScroll" && $("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u))
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
Pf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function An(e, t) {
    if (!V) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Yh(e, t, n) {
    var r = t.pendingProps;
    switch (su(t), t.tag) {
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
            return ue(t), null;
        case 1:
            return ye(t.type) && dl(), ue(t), null;
        case 3:
            return r = t.stateNode, Sn(), B(ge), B(se), vu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (Ti(je), je = null))), Ei(e, t), ue(t), null;
        case 5:
            yu(t);
            var l = zt(fr.current);
            if (n = t.type, e !== null && t.stateNode != null) Cf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return ue(t), null
                }
                if (e = zt(Ye.current), Dr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ke] = t, r[sr] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            $("cancel", r), $("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Vn.length; l++) $(Vn[l], r);
                            break;
                        case "source":
                            $("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $("error", r), $("load", r);
                            break;
                        case "details":
                            $("toggle", r);
                            break;
                        case "input":
                            Zu(r, o), $("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, $("invalid", r);
                            break;
                        case "textarea":
                            bu(r, o), $("invalid", r)
                    }
                    Yo(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && zr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && zr(r.textContent, a, e), l = ["children", "" + a]) : bn.hasOwnProperty(i) && a != null && i === "onScroll" && $("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Nr(r), qu(r, o, !0);
                            break;
                        case "textarea":
                            Nr(r), ea(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = fl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ke] = t, e[sr] = r, _f(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Go(n, r), n) {
                            case "dialog":
                                $("cancel", e), $("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Vn.length; l++) $(Vn[l], e);
                                l = r;
                                break;
                            case "source":
                                $("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $("error", e), $("load", e), l = r;
                                break;
                            case "details":
                                $("toggle", e), l = r;
                                break;
                            case "input":
                                Zu(e, r), l = Vo(e, r), $("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = Y({}, r, {
                                    value: void 0
                                }), $("invalid", e);
                                break;
                            case "textarea":
                                bu(e, r), l = Ko(e, r), $("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Yo(n, l),
                        a = l;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? nc(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ec(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && er(e, u) : typeof u == "number" && er(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (bn.hasOwnProperty(o) ? u != null && o === "onScroll" && $("scroll", e) : u != null && Gi(e, o, u, i))
                            }
                        switch (n) {
                            case "input":
                                Nr(e), qu(e, r, !1);
                                break;
                            case "textarea":
                                Nr(e), ea(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + xt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? cn(e, !!r.multiple, o, !1) : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = fl)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ue(t), null;
        case 6:
            if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                if (n = zt(fr.current), zt(Ye.current), Dr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (o = r.nodeValue !== n) && (e = ke, e !== null)) switch (e.tag) {
                        case 3:
                            zr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r
            }
            return ue(t), null;
        case 13:
            if (B(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (V && Se !== null && t.mode & 1 && !(t.flags & 128)) Wc(), wn(), t.flags |= 98560, o = !1;
                else if (o = Dr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(k(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
                        o[Ke] = t
                    } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ue(t), o = !1
                } else je !== null && (Ti(je), je = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Iu())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
        case 4:
            return Sn(), Ei(e, t), e === null && ur(t.stateNode.containerInfo), ue(t), null;
        case 10:
            return pu(t.type._context), ue(t), null;
        case 17:
            return ye(t.type) && dl(), ue(t), null;
        case 19:
            if (B(K), o = t.memoizedState, o === null) return ue(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) An(o, !1);
                else {
                    if (ee !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = wl(e), i !== null) {
                                for (t.flags |= 128, An(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return F(K, K.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && J() > xn && (t.flags |= 128, r = !0, An(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = wl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), An(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return ue(t), null
                    } else 2 * J() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, An(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = K.current, F(K, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
        case 22:
        case 23:
            return Ru(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(k(156, t.tag))
}

function Gh(e, t) {
    switch (su(t), t.tag) {
        case 1:
            return ye(t.type) && dl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Sn(), B(ge), B(se), vu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return yu(t), null;
        case 13:
            if (B(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(k(340));
                wn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(K), null;
        case 4:
            return Sn(), null;
        case 10:
            return pu(t.type._context), null;
        case 22:
        case 23:
            return Ru(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ur = !1,
    ae = !1,
    Xh = typeof WeakSet == "function" ? WeakSet : Set,
    T = null;

function un(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            X(e, t, r)
        } else n.current = null
}

function Si(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var Wa = !1;

function Jh(e, t) {
    if (li = al, e = Ic(), uu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    u = -1,
                    s = 0,
                    c = 0,
                    f = e,
                    d = null;
                t: for (;;) {
                    for (var y; f !== n || l !== 0 && f.nodeType !== 3 || (a = i + l), f !== o || r !== 0 && f.nodeType !== 3 || (u = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (y = f.firstChild) !== null;) d = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (d === n && ++s === l && (a = i), d === o && ++c === r && (u = i), (y = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = y
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (oi = {
            focusedElem: e,
            selectionRange: n
        }, al = !1, T = t; T !== null;)
        if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
        else
            for (; T !== null;) {
                t = T;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var v = g.memoizedProps,
                                    w = g.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ze(t.type, v), w);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                    }
                } catch (E) {
                    X(t, t.return, E)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, T = e;
                    break
                }
                T = t.return
            }
    return g = Wa, Wa = !1, g
}

function Xn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Si(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function Vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ki(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Nf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Nf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[sr], delete t[ai], delete t[Lh], delete t[Oh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Tf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ha(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Tf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function xi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (xi(e, t, n), e = e.sibling; e !== null;) xi(e, t, n), e = e.sibling
}

function _i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (_i(e, t, n), e = e.sibling; e !== null;) _i(e, t, n), e = e.sibling
}
var re = null,
    De = !1;

function ut(e, t, n) {
    for (n = n.child; n !== null;) Rf(e, t, n), n = n.sibling
}

function Rf(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
        Qe.onCommitFiberUnmount(Al, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ae || un(n, t);
        case 6:
            var r = re,
                l = De;
            re = null, ut(e, t, n), re = r, De = l, re !== null && (De ? (e = re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
            break;
        case 18:
            re !== null && (De ? (e = re, n = n.stateNode, e.nodeType === 8 ? vo(e.parentNode, n) : e.nodeType === 1 && vo(e, n), lr(e)) : vo(re, n.stateNode));
            break;
        case 4:
            r = re, l = De, re = n.stateNode.containerInfo, De = !0, ut(e, t, n), re = r, De = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Si(n, t, i), l = l.next
                } while (l !== r)
            }
            ut(e, t, n);
            break;
        case 1:
            if (!ae && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                X(n, t, a)
            }
            ut(e, t, n);
            break;
        case 21:
            ut(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ae = (r = ae) || n.memoizedState !== null, ut(e, t, n), ae = r) : ut(e, t, n);
            break;
        default:
            ut(e, t, n)
    }
}

function Ka(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Xh), t.forEach(function(r) {
            var l = om.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Ae(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            re = a.stateNode, De = !1;
                            break e;
                        case 3:
                            re = a.stateNode.containerInfo, De = !0;
                            break e;
                        case 4:
                            re = a.stateNode.containerInfo, De = !0;
                            break e
                    }
                    a = a.return
                }
                if (re === null) throw Error(k(160));
                Rf(o, i, l), re = null, De = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (s) {
                X(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) If(t, e), t = t.sibling
}

function If(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ae(t, e), Ve(e), r & 4) {
                try {
                    Xn(3, e, e.return), Vl(3, e)
                } catch (v) {
                    X(e, e.return, v)
                }
                try {
                    Xn(5, e, e.return)
                } catch (v) {
                    X(e, e.return, v)
                }
            }
            break;
        case 1:
            Ae(t, e), Ve(e), r & 512 && n !== null && un(n, n.return);
            break;
        case 5:
            if (Ae(t, e), Ve(e), r & 512 && n !== null && un(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    er(l, "")
                } catch (v) {
                    X(e, e.return, v)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && Zs(l, o), Go(a, i);
                    var s = Go(a, o);
                    for (i = 0; i < u.length; i += 2) {
                        var c = u[i],
                            f = u[i + 1];
                        c === "style" ? nc(l, f) : c === "dangerouslySetInnerHTML" ? ec(l, f) : c === "children" ? er(l, f) : Gi(l, c, f, s)
                    }
                    switch (a) {
                        case "input":
                            Wo(l, o);
                            break;
                        case "textarea":
                            qs(l, o);
                            break;
                        case "select":
                            var d = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? cn(l, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? cn(l, !!o.multiple, o.defaultValue, !0) : cn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[sr] = o
                } catch (v) {
                    X(e, e.return, v)
                }
            }
            break;
        case 6:
            if (Ae(t, e), Ve(e), r & 4) {
                if (e.stateNode === null) throw Error(k(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (v) {
                    X(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ae(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                lr(t.containerInfo)
            } catch (v) {
                X(e, e.return, v)
            }
            break;
        case 4:
            Ae(t, e), Ve(e);
            break;
        case 13:
            Ae(t, e), Ve(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Nu = J())), r & 4 && Ka(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (s = ae) || c, Ae(t, e), ae = s) : Ae(t, e), Ve(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
                    for (T = e, c = e.child; c !== null;) {
                        for (f = T = c; T !== null;) {
                            switch (d = T, y = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Xn(4, d, d.return);
                                    break;
                                case 1:
                                    un(d, d.return);
                                    var g = d.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (v) {
                                            X(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    un(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Ya(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = d, T = y) : Ya(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                l = f.stateNode, s ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, u = f.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = tc("display", i))
                            } catch (v) {
                                X(e, e.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = s ? "" : f.memoizedProps
                        } catch (v) {
                            X(e, e.return, v)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            Ae(t, e), Ve(e), r & 4 && Ka(e);
            break;
        case 21:
            break;
        default:
            Ae(t, e), Ve(e)
    }
}

function Ve(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Tf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (er(l, ""), r.flags &= -33);
                    var o = Ha(e);
                    _i(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = Ha(e);
                    xi(e, a, i);
                    break;
                default:
                    throw Error(k(161))
            }
        }
        catch (u) {
            X(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Zh(e, t, n) {
    T = e, Mf(e)
}

function Mf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null;) {
        var l = T,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Ur;
            if (!i) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || ae;
                a = Ur;
                var s = ae;
                if (Ur = i, (ae = u) && !s)
                    for (T = l; T !== null;) i = T, u = i.child, i.tag === 22 && i.memoizedState !== null ? Ga(l) : u !== null ? (u.return = i, T = u) : Ga(l);
                for (; o !== null;) T = o, Mf(o), o = o.sibling;
                T = l, Ur = a, ae = s
            }
            Qa(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : Qa(e)
    }
}

function Qa(e) {
    for (; T !== null;) {
        var t = T;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ae || Vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ae)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Ia(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ia(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                            var s = t.alternate;
                            if (s !== null) {
                                var c = s.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && lr(f)
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
                        throw Error(k(163))
                }
                ae || t.flags & 512 && ki(t)
            } catch (d) {
                X(t, t.return, d)
            }
        }
        if (t === e) {
            T = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, T = n;
            break
        }
        T = t.return
    }
}

function Ya(e) {
    for (; T !== null;) {
        var t = T;
        if (t === e) {
            T = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, T = n;
            break
        }
        T = t.return
    }
}

function Ga(e) {
    for (; T !== null;) {
        var t = T;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Vl(4, t)
                    } catch (u) {
                        X(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            X(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        ki(t)
                    } catch (u) {
                        X(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ki(t)
                    } catch (u) {
                        X(t, i, u)
                    }
            }
        } catch (u) {
            X(t, t.return, u)
        }
        if (t === e) {
            T = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, T = a;
            break
        }
        T = t.return
    }
}
var qh = Math.ceil,
    kl = ot.ReactCurrentDispatcher,
    Cu = ot.ReactCurrentOwner,
    Ie = ot.ReactCurrentBatchConfig,
    D = 0,
    ne = null,
    q = null,
    le = 0,
    Ee = 0,
    an = Pt(0),
    ee = 0,
    mr = null,
    Bt = 0,
    Wl = 0,
    Pu = 0,
    Jn = null,
    he = null,
    Nu = 0,
    xn = 1 / 0,
    Je = null,
    xl = !1,
    Ci = null,
    Et = null,
    $r = !1,
    pt = null,
    _l = 0,
    Zn = 0,
    Pi = null,
    br = -1,
    el = 0;

function fe() {
    return D & 6 ? J() : br !== -1 ? br : br = J()
}

function St(e) {
    return e.mode & 1 ? D & 2 && le !== 0 ? le & -le : zh.transition !== null ? (el === 0 && (el = hc()), el) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sc(e.type)), e) : 1
}

function Ue(e, t, n, r) {
    if (50 < Zn) throw Zn = 0, Pi = null, Error(k(185));
    vr(e, n, r), (!(D & 2) || e !== ne) && (e === ne && (!(D & 2) && (Wl |= n), ee === 4 && ft(e, le)), ve(e, r), n === 1 && D === 0 && !(t.mode & 1) && (xn = J() + 500, Ul && Nt()))
}

function ve(e, t) {
    var n = e.callbackNode;
    zp(e, t);
    var r = ul(e, e === ne ? le : 0);
    if (r === 0) n !== null && ra(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ra(n), t === 1) e.tag === 0 ? Ah(Xa.bind(null, e)) : $c(Xa.bind(null, e)), Ih(function() {
            !(D & 6) && Nt()
        }), n = null;
        else {
            switch (mc(r)) {
                case 1:
                    n = bi;
                    break;
                case 4:
                    n = dc;
                    break;
                case 16:
                    n = il;
                    break;
                case 536870912:
                    n = pc;
                    break;
                default:
                    n = il
            }
            n = Uf(n, Lf.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Lf(e, t) {
    if (br = -1, el = 0, D & 6) throw Error(k(327));
    var n = e.callbackNode;
    if (mn() && e.callbackNode !== n) return null;
    var r = ul(e, e === ne ? le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
    else {
        t = r;
        var l = D;
        D |= 2;
        var o = Af();
        (ne !== e || le !== t) && (Je = null, xn = J() + 500, Dt(e, t));
        do try {
            tm();
            break
        } catch (a) {
            Of(e, a)
        }
        while (!0);
        du(), kl.current = o, D = l, q !== null ? t = 0 : (ne = null, le = 0, t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (l = bo(e), l !== 0 && (r = l, t = Ni(e, l))), t === 1) throw n = mr, Dt(e, 0), ft(e, r), ve(e, J()), n;
        if (t === 6) ft(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !bh(l) && (t = Cl(e, r), t === 2 && (o = bo(e), o !== 0 && (r = o, t = Ni(e, o))), t === 1)) throw n = mr, Dt(e, 0), ft(e, r), ve(e, J()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Lt(e, he, Je);
                    break;
                case 3:
                    if (ft(e, r), (r & 130023424) === r && (t = Nu + 500 - J(), 10 < t)) {
                        if (ul(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            fe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = ui(Lt.bind(null, e, he, Je), t);
                        break
                    }
                    Lt(e, he, Je);
                    break;
                case 4:
                    if (ft(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Fe(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ui(Lt.bind(null, e, he, Je), r);
                        break
                    }
                    Lt(e, he, Je);
                    break;
                case 5:
                    Lt(e, he, Je);
                    break;
                default:
                    throw Error(k(329))
            }
        }
    }
    return ve(e, J()), e.callbackNode === n ? Lf.bind(null, e) : null
}

function Ni(e, t) {
    var n = Jn;
    return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = he, he = n, t !== null && Ti(t)), e
}

function Ti(e) {
    he === null ? he = e : he.push.apply(he, e)
}

function bh(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!$e(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function ft(e, t) {
    for (t &= ~Pu, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Fe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Xa(e) {
    if (D & 6) throw Error(k(327));
    mn();
    var t = ul(e, 0);
    if (!(t & 1)) return ve(e, J()), null;
    var n = Cl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = bo(e);
        r !== 0 && (t = r, n = Ni(e, r))
    }
    if (n === 1) throw n = mr, Dt(e, 0), ft(e, t), ve(e, J()), n;
    if (n === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, he, Je), ve(e, J()), null
}

function Tu(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t)
    } finally {
        D = n, D === 0 && (xn = J() + 500, Ul && Nt())
    }
}

function Vt(e) {
    pt !== null && pt.tag === 0 && !(D & 6) && mn();
    var t = D;
    D |= 1;
    var n = Ie.transition,
        r = j;
    try {
        if (Ie.transition = null, j = 1, e) return e()
    } finally {
        j = r, Ie.transition = n, D = t, !(D & 6) && Nt()
    }
}

function Ru() {
    Ee = an.current, B(an)
}

function Dt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Rh(n)), q !== null)
        for (n = q.return; n !== null;) {
            var r = n;
            switch (su(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && dl();
                    break;
                case 3:
                    Sn(), B(ge), B(se), vu();
                    break;
                case 5:
                    yu(r);
                    break;
                case 4:
                    Sn();
                    break;
                case 13:
                    B(K);
                    break;
                case 19:
                    B(K);
                    break;
                case 10:
                    pu(r.type._context);
                    break;
                case 22:
                case 23:
                    Ru()
            }
            n = n.return
        }
    if (ne = e, q = e = kt(e.current, null), le = Ee = t, ee = 0, mr = null, Pu = Wl = Bt = 0, he = Jn = null, At !== null) {
        for (t = 0; t < At.length; t++)
            if (n = At[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        At = null
    }
    return e
}

function Of(e, t) {
    do {
        var n = q;
        try {
            if (du(), Jr.current = Sl, El) {
                for (var r = Q.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                El = !1
            }
            if ($t = 0, te = b = Q = null, Gn = !1, dr = 0, Cu.current = null, n === null || n.return === null) {
                ee = 1, mr = t, q = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    a = n,
                    u = t;
                if (t = le, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var y = Da(i);
                    if (y !== null) {
                        y.flags &= -257, ja(y, i, a, o, t), y.mode & 1 && za(o, s, t), t = y, u = s;
                        var g = t.updateQueue;
                        if (g === null) {
                            var v = new Set;
                            v.add(u), t.updateQueue = v
                        } else g.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            za(o, s, t), Iu();
                            break e
                        }
                        u = Error(k(426))
                    }
                } else if (V && a.mode & 1) {
                    var w = Da(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), ja(w, i, a, o, t), cu(kn(u, a));
                        break e
                    }
                }
                o = u = kn(u, a),
                ee !== 4 && (ee = 2),
                Jn === null ? Jn = [o] : Jn.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var m = gf(o, u, t);
                            Ra(o, m);
                            break e;
                        case 1:
                            a = u;
                            var p = o.type,
                                h = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Et === null || !Et.has(h)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var E = yf(o, a, t);
                                Ra(o, E);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Df(n)
        } catch (S) {
            t = S, q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Af() {
    var e = kl.current;
    return kl.current = Sl, e === null ? Sl : e
}

function Iu() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4), ne === null || !(Bt & 268435455) && !(Wl & 268435455) || ft(ne, le)
}

function Cl(e, t) {
    var n = D;
    D |= 2;
    var r = Af();
    (ne !== e || le !== t) && (Je = null, Dt(e, t));
    do try {
        em();
        break
    } catch (l) {
        Of(e, l)
    }
    while (!0);
    if (du(), D = n, kl.current = r, q !== null) throw Error(k(261));
    return ne = null, le = 0, ee
}

function em() {
    for (; q !== null;) zf(q)
}

function tm() {
    for (; q !== null && !Pp();) zf(q)
}

function zf(e) {
    var t = Ff(e.alternate, e, Ee);
    e.memoizedProps = e.pendingProps, t === null ? Df(e) : q = t, Cu.current = null
}

function Df(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Gh(n, t), n !== null) {
                n.flags &= 32767, q = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ee = 6, q = null;
                return
            }
        } else if (n = Yh(n, t, Ee), n !== null) {
            q = n;
            return
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}

function Lt(e, t, n) {
    var r = j,
        l = Ie.transition;
    try {
        Ie.transition = null, j = 1, nm(e, t, n, r)
    } finally {
        Ie.transition = l, j = r
    }
    return null
}

function nm(e, t, n, r) {
    do mn(); while (pt !== null);
    if (D & 6) throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Dp(e, o), e === ne && (q = ne = null, le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $r || ($r = !0, Uf(il, function() {
            return mn(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ie.transition, Ie.transition = null;
        var i = j;
        j = 1;
        var a = D;
        D |= 4, Cu.current = null, Jh(e, n), If(n, e), kh(oi), al = !!li, oi = li = null, e.current = n, Zh(n), Np(), D = a, j = i, Ie.transition = o
    } else e.current = n;
    if ($r && ($r = !1, pt = e, _l = l), o = e.pendingLanes, o === 0 && (Et = null), Ip(n.stateNode), ve(e, J()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (xl) throw xl = !1, e = Ci, Ci = null, e;
    return _l & 1 && e.tag !== 0 && mn(), o = e.pendingLanes, o & 1 ? e === Pi ? Zn++ : (Zn = 0, Pi = e) : Zn = 0, Nt(), null
}

function mn() {
    if (pt !== null) {
        var e = mc(_l),
            t = Ie.transition,
            n = j;
        try {
            if (Ie.transition = null, j = 16 > e ? 16 : e, pt === null) var r = !1;
            else {
                if (e = pt, pt = null, _l = 0, D & 6) throw Error(k(331));
                var l = D;
                for (D |= 4, T = e.current; T !== null;) {
                    var o = T,
                        i = o.child;
                    if (T.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (T = s; T !== null;) {
                                    var c = T;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xn(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, T = f;
                                    else
                                        for (; T !== null;) {
                                            c = T;
                                            var d = c.sibling,
                                                y = c.return;
                                            if (Nf(c), c === s) {
                                                T = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = y, T = d;
                                                break
                                            }
                                            T = y
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var v = g.child;
                                if (v !== null) {
                                    g.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null, v = w
                                    } while (v !== null)
                                }
                            }
                            T = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, T = i;
                    else e: for (; T !== null;) {
                        if (o = T, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Xn(9, o, o.return)
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, T = m;
                            break e
                        }
                        T = o.return
                    }
                }
                var p = e.current;
                for (T = p; T !== null;) {
                    i = T;
                    var h = i.child;
                    if (i.subtreeFlags & 2064 && h !== null) h.return = i, T = h;
                    else e: for (i = p; T !== null;) {
                        if (a = T, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Vl(9, a)
                            }
                        } catch (S) {
                            X(a, a.return, S)
                        }
                        if (a === i) {
                            T = null;
                            break e
                        }
                        var E = a.sibling;
                        if (E !== null) {
                            E.return = a.return, T = E;
                            break e
                        }
                        T = a.return
                    }
                }
                if (D = l, Nt(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
                    Qe.onPostCommitFiberRoot(Al, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            j = n, Ie.transition = t
        }
    }
    return !1
}

function Ja(e, t, n) {
    t = kn(n, t), t = gf(e, t, 1), e = wt(e, t, 1), t = fe(), e !== null && (vr(e, 1, t), ve(e, t))
}

function X(e, t, n) {
    if (e.tag === 3) Ja(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ja(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Et === null || !Et.has(r))) {
                    e = kn(n, e), e = yf(t, e, 1), t = wt(t, e, 1), e = fe(), t !== null && (vr(t, 1, e), ve(t, e));
                    break
                }
            }
            t = t.return
        }
}

function rm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (le & n) === n && (ee === 4 || ee === 3 && (le & 130023424) === le && 500 > J() - Nu ? Dt(e, 0) : Pu |= n), ve(e, t)
}

function jf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ir, Ir <<= 1, !(Ir & 130023424) && (Ir = 4194304)) : t = 1);
    var n = fe();
    e = rt(e, t), e !== null && (vr(e, t, n), ve(e, n))
}

function lm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), jf(e, n)
}

function om(e, t) {
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
            throw Error(k(314))
    }
    r !== null && r.delete(t), jf(e, n)
}
var Ff;
Ff = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ge.current) me = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Qh(e, t, n);
            me = !!(e.flags & 131072)
        }
    else me = !1, V && t.flags & 1048576 && Bc(t, ml, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            qr(e, t), e = t.pendingProps;
            var l = vn(t, se.current);
            hn(t, n), l = Eu(null, t, r, e, l, n);
            var o = Su();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (o = !0, pl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mu(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, hi(t, r, e, n), t = yi(null, t, r, !0, o, n)) : (t.tag = 0, V && o && au(t), ce(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = um(r), e = ze(r, e), l) {
                    case 0:
                        t = gi(null, t, r, e, n);
                        break e;
                    case 1:
                        t = $a(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Fa(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ua(null, t, r, ze(r.type, e), n);
                        break e
                }
                throw Error(k(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), gi(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), $a(e, t, r, l, n);
        case 3:
            e: {
                if (Sf(t), e === null) throw Error(k(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                Yc(e, t),
                vl(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = kn(Error(k(423)), t), t = Ba(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = kn(Error(k(424)), t), t = Ba(e, t, r, n, l);
                    break e
                } else
                    for (Se = vt(t.stateNode.containerInfo.firstChild), ke = t, V = !0, je = null, n = Kc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (wn(), r === l) {
                        t = lt(e, t, n);
                        break e
                    }
                    ce(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Gc(t), e === null && fi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ii(r, l) ? i = null : o !== null && ii(r, o) && (t.flags |= 32), Ef(e, t), ce(e, t, i, n), t.child;
        case 6:
            return e === null && fi(t), null;
        case 13:
            return kf(e, t, n);
        case 4:
            return gu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : ce(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Fa(e, t, r, l, n);
        case 7:
            return ce(e, t, t.pendingProps, n), t.child;
        case 8:
            return ce(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ce(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, F(gl, r._currentValue), r._currentValue = i, o !== null)
                    if ($e(o.value, i)) {
                        if (o.children === l.children && !ge.current) {
                            t = lt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = et(-1, n & -n), u.tag = 2;
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var c = s.pending;
                                                c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), di(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(k(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), di(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                ce(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, hn(t, n), l = Me(l), r = r(l), t.flags |= 1, ce(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), Ua(e, t, r, l, n);
        case 15:
            return vf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), qr(e, t), t.tag = 1, ye(r) ? (e = !0, pl(t)) : e = !1, hn(t, n), mf(t, r, l), hi(t, r, l, n), yi(null, t, r, !0, e, n);
        case 19:
            return xf(e, t, n);
        case 22:
            return wf(e, t, n)
    }
    throw Error(k(156, t.tag))
};

function Uf(e, t) {
    return fc(e, t)
}

function im(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Re(e, t, n, r) {
    return new im(e, t, n, r)
}

function Mu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function um(e) {
    if (typeof e == "function") return Mu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ji) return 11;
        if (e === Zi) return 14
    }
    return 2
}

function kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Re(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function tl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Mu(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Zt:
            return jt(n.children, l, o, t);
        case Xi:
            i = 8, l |= 8;
            break;
        case Fo:
            return e = Re(12, n, t, l | 2), e.elementType = Fo, e.lanes = o, e;
        case Uo:
            return e = Re(13, n, t, l), e.elementType = Uo, e.lanes = o, e;
        case $o:
            return e = Re(19, n, t, l), e.elementType = $o, e.lanes = o, e;
        case Gs:
            return Hl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Qs:
                    i = 10;
                    break e;
                case Ys:
                    i = 9;
                    break e;
                case Ji:
                    i = 11;
                    break e;
                case Zi:
                    i = 14;
                    break e;
                case at:
                    i = 16, r = null;
                    break e
            }
            throw Error(k(130, e == null ? e : typeof e, ""))
    }
    return t = Re(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function jt(e, t, n, r) {
    return e = Re(7, e, r, t), e.lanes = n, e
}

function Hl(e, t, n, r) {
    return e = Re(22, e, r, t), e.elementType = Gs, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Po(e, t, n) {
    return e = Re(6, e, null, t), e.lanes = n, e
}

function No(e, t, n) {
    return t = Re(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function am(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = io(0), this.expirationTimes = io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = io(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Lu(e, t, n, r, l, o, i, a, u) {
    return e = new am(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Re(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mu(o), e
}

function sm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Jt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function $f(e) {
    if (!e) return _t;
    e = e._reactInternals;
    e: {
        if (Kt(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ye(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ye(n)) return Uc(e, n, t)
    }
    return t
}

function Bf(e, t, n, r, l, o, i, a, u) {
    return e = Lu(n, r, !0, e, l, o, i, a, u), e.context = $f(null), n = e.current, r = fe(), l = St(n), o = et(r, l), o.callback = t ? ? null, wt(n, o, l), e.current.lanes = l, vr(e, l, r), ve(e, r), e
}

function Kl(e, t, n, r) {
    var l = t.current,
        o = fe(),
        i = St(l);
    return n = $f(n), t.context === null ? t.context = n : t.pendingContext = n, t = et(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, i), e !== null && (Ue(e, l, i, o), Xr(e, l, i)), i
}

function Pl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Za(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ou(e, t) {
    Za(e, t), (e = e.alternate) && Za(e, t)
}

function cm() {
    return null
}
var Vf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Au(e) {
    this._internalRoot = e
}
Ql.prototype.render = Au.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Kl(e, t, null, null)
};
Ql.prototype.unmount = Au.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vt(function() {
            Kl(null, e, null, null)
        }), t[nt] = null
    }
};

function Ql(e) {
    this._internalRoot = e
}
Ql.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = vc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
        ct.splice(n, 0, e), n === 0 && Ec(e)
    }
};

function zu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function qa() {}

function fm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var s = Pl(i);
                o.call(s)
            }
        }
        var i = Bf(t, r, e, 0, null, !1, !1, "", qa);
        return e._reactRootContainer = i, e[nt] = i.current, ur(e.nodeType === 8 ? e.parentNode : e), Vt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var s = Pl(u);
            a.call(s)
        }
    }
    var u = Lu(e, 0, !1, null, null, !1, !1, "", qa);
    return e._reactRootContainer = u, e[nt] = u.current, ur(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
        Kl(t, u, n, r)
    }), u
}

function Gl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = Pl(i);
                a.call(u)
            }
        }
        Kl(t, i, e, l)
    } else i = fm(n, t, e, l, r);
    return Pl(i)
}
gc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Bn(t.pendingLanes);
                n !== 0 && (eu(t, n | 1), ve(t, J()), !(D & 6) && (xn = J() + 500, Nt()))
            }
            break;
        case 13:
            Vt(function() {
                var r = rt(e, 1);
                if (r !== null) {
                    var l = fe();
                    Ue(r, e, 1, l)
                }
            }), Ou(e, 1)
    }
};
tu = function(e) {
    if (e.tag === 13) {
        var t = rt(e, 134217728);
        if (t !== null) {
            var n = fe();
            Ue(t, e, 134217728, n)
        }
        Ou(e, 134217728)
    }
};
yc = function(e) {
    if (e.tag === 13) {
        var t = St(e),
            n = rt(e, t);
        if (n !== null) {
            var r = fe();
            Ue(n, e, t, r)
        }
        Ou(e, t)
    }
};
vc = function() {
    return j
};
wc = function(e, t) {
    var n = j;
    try {
        return j = e, t()
    } finally {
        j = n
    }
};
Jo = function(e, t, n) {
    switch (t) {
        case "input":
            if (Wo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Fl(r);
                        if (!l) throw Error(k(90));
                        Js(r), Wo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            qs(e, n);
            break;
        case "select":
            t = n.value, t != null && cn(e, !!n.multiple, t, !1)
    }
};
oc = Tu;
ic = Vt;
var dm = {
        usingClientEntryPoint: !1,
        Events: [Er, tn, Fl, rc, lc, Tu]
    },
    zn = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    pm = {
        bundleType: zn.bundleType,
        version: zn.version,
        rendererPackageName: zn.rendererPackageName,
        rendererConfig: zn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ot.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = sc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: zn.findFiberByHostInstance || cm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Br.isDisabled && Br.supportsFiber) try {
        Al = Br.inject(pm), Qe = Br
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
Ce.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zu(t)) throw Error(k(200));
    return sm(e, t, null, n)
};
Ce.createRoot = function(e, t) {
    if (!zu(e)) throw Error(k(299));
    var n = !1,
        r = "",
        l = Vf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Lu(e, 1, !1, null, null, n, !1, r, l), e[nt] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new Au(t)
};
Ce.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
    return e = sc(t), e = e === null ? null : e.stateNode, e
};
Ce.flushSync = function(e) {
    return Vt(e)
};
Ce.hydrate = function(e, t, n) {
    if (!Yl(t)) throw Error(k(200));
    return Gl(null, e, t, !0, n)
};
Ce.hydrateRoot = function(e, t, n) {
    if (!zu(e)) throw Error(k(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = Vf;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Bf(t, null, e, 1, n ? ? null, l, !1, o, i), e[nt] = t.current, ur(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ql(t)
};
Ce.render = function(e, t, n) {
    if (!Yl(t)) throw Error(k(200));
    return Gl(null, e, t, !1, n)
};
Ce.unmountComponentAtNode = function(e) {
    if (!Yl(e)) throw Error(k(40));
    return e._reactRootContainer ? (Vt(function() {
        Gl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[nt] = null
        })
    }), !0) : !1
};
Ce.unstable_batchedUpdates = Tu;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yl(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Gl(e, t, n, !1, r)
};
Ce.version = "18.3.1-next-f1338f8080-20240426";

function Wf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)
    } catch (e) {
        console.error(e)
    }
}
Wf(), Vs.exports = Ce;
var hm = Vs.exports,
    ba = hm;
Do.createRoot = ba.createRoot, Do.hydrateRoot = ba.hydrateRoot;
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nl() {
    return Nl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Nl.apply(null, arguments)
}
var ht;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(ht || (ht = {}));
const es = "popstate";

function mm(e) {
    e === void 0 && (e = {});

    function t(l, o) {
        let {
            pathname: i = "/",
            search: a = "",
            hash: u = ""
        } = kr(l.location.hash.substr(1));
        return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Ri("", {
            pathname: i,
            search: a,
            hash: u
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(l, o) {
        let i = l.document.querySelector("base"),
            a = "";
        if (i && i.getAttribute("href")) {
            let u = l.location.href,
                s = u.indexOf("#");
            a = s === -1 ? u : u.slice(0, s)
        }
        return a + "#" + (typeof o == "string" ? o : Hf(o))
    }

    function r(l, o) {
        Du(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")")
    }
    return ym(t, n, r, e)
}

function we(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Du(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function gm() {
    return Math.random().toString(36).substr(2, 8)
}

function ts(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ri(e, t, n, r) {
    return n === void 0 && (n = null), Nl({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? kr(t) : t, {
        state: n,
        key: t && t.key || r || gm()
    })
}

function Hf(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function kr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function ym(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: o = !1
    } = r, i = l.history, a = ht.Pop, u = null, s = c();
    s == null && (s = 0, i.replaceState(Nl({}, i.state, {
        idx: s
    }), ""));

    function c() {
        return (i.state || {
            idx: null
        }).idx
    }

    function f() {
        a = ht.Pop;
        let w = c(),
            m = w == null ? null : w - s;
        s = w, u && u({
            action: a,
            location: v.location,
            delta: m
        })
    }

    function d(w, m) {
        a = ht.Push;
        let p = Ri(v.location, w, m);
        n && n(p, w), s = c() + 1;
        let h = ts(p, s),
            E = v.createHref(p);
        try {
            i.pushState(h, "", E)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError") throw S;
            l.location.assign(E)
        }
        o && u && u({
            action: a,
            location: v.location,
            delta: 1
        })
    }

    function y(w, m) {
        a = ht.Replace;
        let p = Ri(v.location, w, m);
        n && n(p, w), s = c();
        let h = ts(p, s),
            E = v.createHref(p);
        i.replaceState(h, "", E), o && u && u({
            action: a,
            location: v.location,
            delta: 0
        })
    }

    function g(w) {
        let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
            p = typeof w == "string" ? w : Hf(w);
        return p = p.replace(/ $/, "%20"), we(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return e(l, i)
        },
        listen(w) {
            if (u) throw new Error("A history only accepts one active listener");
            return l.addEventListener(es, f), u = w, () => {
                l.removeEventListener(es, f), u = null
            }
        },
        createHref(w) {
            return t(l, w)
        },
        createURL: g,
        encodeLocation(w) {
            let m = g(w);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: d,
        replace: y,
        go(w) {
            return i.go(w)
        }
    };
    return v
}
var ns;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ns || (ns = {}));

function vm(e, t, n) {
    return n === void 0 && (n = "/"), wm(e, t, n)
}

function wm(e, t, n, r) {
    let l = typeof t == "string" ? kr(t) : t,
        o = Yf(l.pathname || "/", n);
    if (o == null) return null;
    let i = Kf(e);
    Em(i);
    let a = null,
        u = Lm(o);
    for (let s = 0; a == null && s < i.length; ++s) a = Rm(i[s], u);
    return a
}

function Kf(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (o, i, a) => {
        let u = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        u.relativePath.startsWith("/") && (we(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let s = gn([r, u.relativePath]),
            c = n.concat(u);
        o.children && o.children.length > 0 && (we(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), Kf(o.children, t, c, s)), !(o.path == null && !o.index) && t.push({
            path: s,
            score: Nm(s, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, i) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
        else
            for (let u of Qf(o.path)) l(o, i, u)
    }), t
}

function Qf(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = Qf(r.join("/")),
        a = [];
    return a.push(...i.map(u => u === "" ? o : [o, u].join("/"))), l && a.push(...i), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function Em(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Tm(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Sm = /^:[\w-]+$/,
    km = 3,
    xm = 2,
    _m = 1,
    Cm = 10,
    Pm = -2,
    rs = e => e === "*";

function Nm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(rs) && (r += Pm), t && (r += xm), n.filter(l => !rs(l)).reduce((l, o) => l + (Sm.test(o) ? km : o === "" ? _m : Cm), r)
}

function Tm(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Rm(e, t, n) {
    let {
        routesMeta: r
    } = e, l = {}, o = "/", i = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a],
            s = a === r.length - 1,
            c = o === "/" ? t : t.slice(o.length) || "/",
            f = Im({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: s
            }, c),
            d = u.route;
        if (!f) return null;
        Object.assign(l, f.params), i.push({
            params: l,
            pathname: gn([o, f.pathname]),
            pathnameBase: Am(gn([o, f.pathnameBase])),
            route: d
        }), f.pathnameBase !== "/" && (o = gn([o, f.pathnameBase]))
    }
    return i
}

function Im(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Mm(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((s, c, f) => {
            let {
                paramName: d,
                isOptional: y
            } = c;
            if (d === "*") {
                let v = a[f] || "";
                i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const g = a[f];
            return y && !g ? s[d] = void 0 : s[d] = (g || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}

function Mm(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Du(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, u) => (r.push({
            paramName: a,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function Lm(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Du(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function Yf(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Om = e => e.replace(/\/\/+/g, "/"),
    gn = e => Om(e.join("/")),
    Am = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function zm(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Gf = ["post", "put", "patch", "delete"];
new Set(Gf);
const Dm = ["get", ...Gf];
new Set(Dm);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tl() {
    return Tl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Tl.apply(null, arguments)
}
const jm = R.createContext(null),
    Fm = R.createContext(null),
    Xf = R.createContext(null),
    Xl = R.createContext(null),
    Jl = R.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Jf = R.createContext(null);

function ju() {
    return R.useContext(Xl) != null
}

function Um() {
    return ju() || we(!1), R.useContext(Xl).location
}

function $m(e, t) {
    return Bm(e, t)
}

function Bm(e, t, n, r) {
    ju() || we(!1);
    let {
        navigator: l
    } = R.useContext(Xf), {
        matches: o
    } = R.useContext(Jl), i = o[o.length - 1], a = i ? i.params : {};
    i && i.pathname;
    let u = i ? i.pathnameBase : "/";
    i && i.route;
    let s = Um(),
        c;
    if (t) {
        var f;
        let w = typeof t == "string" ? kr(t) : t;
        u === "/" || (f = w.pathname) != null && f.startsWith(u) || we(!1), c = w
    } else c = s;
    let d = c.pathname || "/",
        y = d;
    if (u !== "/") {
        let w = u.replace(/^\//, "").split("/");
        y = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let g = vm(e, {
            pathname: y
        }),
        v = Qm(g && g.map(w => Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: gn([u, l.encodeLocation ? l.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? u : gn([u, l.encodeLocation ? l.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), o, n, r);
    return t && v ? R.createElement(Xl.Provider, {
        value: {
            location: Tl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: ht.Pop
        }
    }, v) : v
}

function Vm() {
    let e = Jm(),
        t = zm(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return R.createElement(R.Fragment, null, R.createElement("h2", null, "Unexpected Application Error!"), R.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? R.createElement("pre", {
        style: l
    }, n) : null, null)
}
const Wm = R.createElement(Vm, null);
class Hm extends R.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? R.createElement(Jl.Provider, {
            value: this.props.routeContext
        }, R.createElement(Jf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Km(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = R.useContext(jm);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), R.createElement(Jl.Provider, {
        value: t
    }, r)
}

function Qm(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let i = e,
        a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let c = i.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || we(!1), i = i.slice(0, Math.min(i.length, c + 1))
    }
    let u = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let f = i[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c), f.route.id) {
                let {
                    loaderData: d,
                    errors: y
                } = n, g = f.route.loader && d[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                if (f.route.lazy || g) {
                    u = !0, s >= 0 ? i = i.slice(0, s + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((c, f, d) => {
        let y, g = !1,
            v = null,
            w = null;
        n && (y = a && f.route.id ? a[f.route.id] : void 0, v = f.route.errorElement || Wm, u && (s < 0 && d === 0 ? (Zm("route-fallback"), g = !0, w = null) : s === d && (g = !0, w = f.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, d + 1)),
            p = () => {
                let h;
                return y ? h = v : g ? h = w : f.route.Component ? h = R.createElement(f.route.Component, null) : f.route.element ? h = f.route.element : h = c, R.createElement(Km, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: h
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? R.createElement(Hm, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var Zf = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Zf || {});

function Ym(e) {
    let t = R.useContext(Fm);
    return t || we(!1), t
}

function Gm(e) {
    let t = R.useContext(Jl);
    return t || we(!1), t
}

function Xm(e) {
    let t = Gm(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || we(!1), n.route.id
}

function Jm() {
    var e;
    let t = R.useContext(Jf),
        n = Ym(Zf.UseRouteError),
        r = Xm();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const ls = {};

function Zm(e, t, n) {
    ls[e] || (ls[e] = !0)
}

function qm(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function qf(e) {
    we(!1)
}

function bm(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = ht.Pop,
        navigator: o,
        static: i = !1,
        future: a
    } = e;
    ju() && we(!1);
    let u = t.replace(/^\/*/, "/"),
        s = R.useMemo(() => ({
            basename: u,
            navigator: o,
            static: i,
            future: Tl({
                v7_relativeSplatPath: !1
            }, a)
        }), [u, a, o, i]);
    typeof r == "string" && (r = kr(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: d = "",
        state: y = null,
        key: g = "default"
    } = r, v = R.useMemo(() => {
        let w = Yf(c, u);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: d,
                state: y,
                key: g
            },
            navigationType: l
        }
    }, [u, c, f, d, y, g, l]);
    return v == null ? null : R.createElement(Xf.Provider, {
        value: s
    }, R.createElement(Xl.Provider, {
        children: n,
        value: v
    }))
}

function e0(e) {
    let {
        children: t,
        location: n
    } = e;
    return $m(Ii(t), n)
}
new Promise(() => {});

function Ii(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return R.Children.forEach(e, (r, l) => {
        if (!R.isValidElement(r)) return;
        let o = [...t, l];
        if (r.type === R.Fragment) {
            n.push.apply(n, Ii(r.props.children, o));
            return
        }
        r.type !== qf && we(!1), !r.props.index || !r.props.children || we(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Ii(r.props.children, o)), n.push(i)
    }), n
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const t0 = "6";
try {
    window.__reactRouterVersion = t0
} catch {}
const n0 = "startTransition",
    os = rp[n0];

function r0(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: l
    } = e, o = R.useRef();
    o.current == null && (o.current = mm({
        window: l,
        v5Compat: !0
    }));
    let i = o.current,
        [a, u] = R.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: s
        } = r || {},
        c = R.useCallback(f => {
            s && os ? os(() => u(f)) : u(f)
        }, [u, s]);
    return R.useLayoutEffect(() => i.listen(c), [i, c]), R.useEffect(() => qm(r), [r]), R.createElement(bm, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var is;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(is || (is = {}));
var us;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(us || (us = {}));
var l0 = Object.defineProperty,
    Rl = Object.getOwnPropertySymbols,
    bf = Object.prototype.hasOwnProperty,
    ed = Object.prototype.propertyIsEnumerable,
    as = (e, t, n) => t in e ? l0(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Mi = (e, t) => {
        for (var n in t || (t = {})) bf.call(t, n) && as(e, n, t[n]);
        if (Rl)
            for (var n of Rl(t)) ed.call(t, n) && as(e, n, t[n]);
        return e
    },
    Li = (e, t) => {
        var n = {};
        for (var r in e) bf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Rl)
            for (var r of Rl(e)) t.indexOf(r) < 0 && ed.call(e, r) && (n[r] = e[r]);
        return n
    };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var Wt;
(e => {
    const t = class O {
        constructor(u, s, c, f) {
            if (this.version = u, this.errorCorrectionLevel = s, this.modules = [], this.isFunction = [], u < O.MIN_VERSION || u > O.MAX_VERSION) throw new RangeError("Version value out of range");
            if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
            this.size = u * 4 + 17;
            let d = [];
            for (let g = 0; g < this.size; g++) d.push(!1);
            for (let g = 0; g < this.size; g++) this.modules.push(d.slice()), this.isFunction.push(d.slice());
            this.drawFunctionPatterns();
            const y = this.addEccAndInterleave(c);
            if (this.drawCodewords(y), f == -1) {
                let g = 1e9;
                for (let v = 0; v < 8; v++) {
                    this.applyMask(v), this.drawFormatBits(v);
                    const w = this.getPenaltyScore();
                    w < g && (f = v, g = w), this.applyMask(v)
                }
            }
            l(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = []
        }
        static encodeText(u, s) {
            const c = e.QrSegment.makeSegments(u);
            return O.encodeSegments(c, s)
        }
        static encodeBinary(u, s) {
            const c = e.QrSegment.makeBytes(u);
            return O.encodeSegments([c], s)
        }
        static encodeSegments(u, s, c = 1, f = 40, d = -1, y = !0) {
            if (!(O.MIN_VERSION <= c && c <= f && f <= O.MAX_VERSION) || d < -1 || d > 7) throw new RangeError("Invalid value");
            let g, v;
            for (g = c;; g++) {
                const h = O.getNumDataCodewords(g, s) * 8,
                    E = i.getTotalBits(u, g);
                if (E <= h) {
                    v = E;
                    break
                }
                if (g >= f) throw new RangeError("Data too long")
            }
            for (const h of [O.Ecc.MEDIUM, O.Ecc.QUARTILE, O.Ecc.HIGH]) y && v <= O.getNumDataCodewords(g, h) * 8 && (s = h);
            let w = [];
            for (const h of u) {
                n(h.mode.modeBits, 4, w), n(h.numChars, h.mode.numCharCountBits(g), w);
                for (const E of h.getData()) w.push(E)
            }
            l(w.length == v);
            const m = O.getNumDataCodewords(g, s) * 8;
            l(w.length <= m), n(0, Math.min(4, m - w.length), w), n(0, (8 - w.length % 8) % 8, w), l(w.length % 8 == 0);
            for (let h = 236; w.length < m; h ^= 253) n(h, 8, w);
            let p = [];
            for (; p.length * 8 < w.length;) p.push(0);
            return w.forEach((h, E) => p[E >>> 3] |= h << 7 - (E & 7)), new O(g, s, p, d)
        }
        getModule(u, s) {
            return 0 <= u && u < this.size && 0 <= s && s < this.size && this.modules[s][u]
        }
        getModules() {
            return this.modules
        }
        drawFunctionPatterns() {
            for (let c = 0; c < this.size; c++) this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
            this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
            const u = this.getAlignmentPatternPositions(),
                s = u.length;
            for (let c = 0; c < s; c++)
                for (let f = 0; f < s; f++) c == 0 && f == 0 || c == 0 && f == s - 1 || c == s - 1 && f == 0 || this.drawAlignmentPattern(u[c], u[f]);
            this.drawFormatBits(0), this.drawVersion()
        }
        drawFormatBits(u) {
            const s = this.errorCorrectionLevel.formatBits << 3 | u;
            let c = s;
            for (let d = 0; d < 10; d++) c = c << 1 ^ (c >>> 9) * 1335;
            const f = (s << 10 | c) ^ 21522;
            l(f >>> 15 == 0);
            for (let d = 0; d <= 5; d++) this.setFunctionModule(8, d, r(f, d));
            this.setFunctionModule(8, 7, r(f, 6)), this.setFunctionModule(8, 8, r(f, 7)), this.setFunctionModule(7, 8, r(f, 8));
            for (let d = 9; d < 15; d++) this.setFunctionModule(14 - d, 8, r(f, d));
            for (let d = 0; d < 8; d++) this.setFunctionModule(this.size - 1 - d, 8, r(f, d));
            for (let d = 8; d < 15; d++) this.setFunctionModule(8, this.size - 15 + d, r(f, d));
            this.setFunctionModule(8, this.size - 8, !0)
        }
        drawVersion() {
            if (this.version < 7) return;
            let u = this.version;
            for (let c = 0; c < 12; c++) u = u << 1 ^ (u >>> 11) * 7973;
            const s = this.version << 12 | u;
            l(s >>> 18 == 0);
            for (let c = 0; c < 18; c++) {
                const f = r(s, c),
                    d = this.size - 11 + c % 3,
                    y = Math.floor(c / 3);
                this.setFunctionModule(d, y, f), this.setFunctionModule(y, d, f)
            }
        }
        drawFinderPattern(u, s) {
            for (let c = -4; c <= 4; c++)
                for (let f = -4; f <= 4; f++) {
                    const d = Math.max(Math.abs(f), Math.abs(c)),
                        y = u + f,
                        g = s + c;
                    0 <= y && y < this.size && 0 <= g && g < this.size && this.setFunctionModule(y, g, d != 2 && d != 4)
                }
        }
        drawAlignmentPattern(u, s) {
            for (let c = -2; c <= 2; c++)
                for (let f = -2; f <= 2; f++) this.setFunctionModule(u + f, s + c, Math.max(Math.abs(f), Math.abs(c)) != 1)
        }
        setFunctionModule(u, s, c) {
            this.modules[s][u] = c, this.isFunction[s][u] = !0
        }
        addEccAndInterleave(u) {
            const s = this.version,
                c = this.errorCorrectionLevel;
            if (u.length != O.getNumDataCodewords(s, c)) throw new RangeError("Invalid argument");
            const f = O.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][s],
                d = O.ECC_CODEWORDS_PER_BLOCK[c.ordinal][s],
                y = Math.floor(O.getNumRawDataModules(s) / 8),
                g = f - y % f,
                v = Math.floor(y / f);
            let w = [];
            const m = O.reedSolomonComputeDivisor(d);
            for (let h = 0, E = 0; h < f; h++) {
                let S = u.slice(E, E + v - d + (h < g ? 0 : 1));
                E += S.length;
                const _ = O.reedSolomonComputeRemainder(S, m);
                h < g && S.push(0), w.push(S.concat(_))
            }
            let p = [];
            for (let h = 0; h < w[0].length; h++) w.forEach((E, S) => {
                (h != v - d || S >= g) && p.push(E[h])
            });
            return l(p.length == y), p
        }
        drawCodewords(u) {
            if (u.length != Math.floor(O.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            let s = 0;
            for (let c = this.size - 1; c >= 1; c -= 2) {
                c == 6 && (c = 5);
                for (let f = 0; f < this.size; f++)
                    for (let d = 0; d < 2; d++) {
                        const y = c - d,
                            v = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
                        !this.isFunction[v][y] && s < u.length * 8 && (this.modules[v][y] = r(u[s >>> 3], 7 - (s & 7)), s++)
                    }
            }
            l(s == u.length * 8)
        }
        applyMask(u) {
            if (u < 0 || u > 7) throw new RangeError("Mask value out of range");
            for (let s = 0; s < this.size; s++)
                for (let c = 0; c < this.size; c++) {
                    let f;
                    switch (u) {
                        case 0:
                            f = (c + s) % 2 == 0;
                            break;
                        case 1:
                            f = s % 2 == 0;
                            break;
                        case 2:
                            f = c % 3 == 0;
                            break;
                        case 3:
                            f = (c + s) % 3 == 0;
                            break;
                        case 4:
                            f = (Math.floor(c / 3) + Math.floor(s / 2)) % 2 == 0;
                            break;
                        case 5:
                            f = c * s % 2 + c * s % 3 == 0;
                            break;
                        case 6:
                            f = (c * s % 2 + c * s % 3) % 2 == 0;
                            break;
                        case 7:
                            f = ((c + s) % 2 + c * s % 3) % 2 == 0;
                            break;
                        default:
                            throw new Error("Unreachable")
                    }!this.isFunction[s][c] && f && (this.modules[s][c] = !this.modules[s][c])
                }
        }
        getPenaltyScore() {
            let u = 0;
            for (let d = 0; d < this.size; d++) {
                let y = !1,
                    g = 0,
                    v = [0, 0, 0, 0, 0, 0, 0];
                for (let w = 0; w < this.size; w++) this.modules[d][w] == y ? (g++, g == 5 ? u += O.PENALTY_N1 : g > 5 && u++) : (this.finderPenaltyAddHistory(g, v), y || (u += this.finderPenaltyCountPatterns(v) * O.PENALTY_N3), y = this.modules[d][w], g = 1);
                u += this.finderPenaltyTerminateAndCount(y, g, v) * O.PENALTY_N3
            }
            for (let d = 0; d < this.size; d++) {
                let y = !1,
                    g = 0,
                    v = [0, 0, 0, 0, 0, 0, 0];
                for (let w = 0; w < this.size; w++) this.modules[w][d] == y ? (g++, g == 5 ? u += O.PENALTY_N1 : g > 5 && u++) : (this.finderPenaltyAddHistory(g, v), y || (u += this.finderPenaltyCountPatterns(v) * O.PENALTY_N3), y = this.modules[w][d], g = 1);
                u += this.finderPenaltyTerminateAndCount(y, g, v) * O.PENALTY_N3
            }
            for (let d = 0; d < this.size - 1; d++)
                for (let y = 0; y < this.size - 1; y++) {
                    const g = this.modules[d][y];
                    g == this.modules[d][y + 1] && g == this.modules[d + 1][y] && g == this.modules[d + 1][y + 1] && (u += O.PENALTY_N2)
                }
            let s = 0;
            for (const d of this.modules) s = d.reduce((y, g) => y + (g ? 1 : 0), s);
            const c = this.size * this.size,
                f = Math.ceil(Math.abs(s * 20 - c * 10) / c) - 1;
            return l(0 <= f && f <= 9), u += f * O.PENALTY_N4, l(0 <= u && u <= 2568888), u
        }
        getAlignmentPatternPositions() {
            if (this.version == 1) return []; {
                const u = Math.floor(this.version / 7) + 2,
                    s = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (u * 2 - 2)) * 2;
                let c = [6];
                for (let f = this.size - 7; c.length < u; f -= s) c.splice(1, 0, f);
                return c
            }
        }
        static getNumRawDataModules(u) {
            if (u < O.MIN_VERSION || u > O.MAX_VERSION) throw new RangeError("Version number out of range");
            let s = (16 * u + 128) * u + 64;
            if (u >= 2) {
                const c = Math.floor(u / 7) + 2;
                s -= (25 * c - 10) * c - 55, u >= 7 && (s -= 36)
            }
            return l(208 <= s && s <= 29648), s
        }
        static getNumDataCodewords(u, s) {
            return Math.floor(O.getNumRawDataModules(u) / 8) - O.ECC_CODEWORDS_PER_BLOCK[s.ordinal][u] * O.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][u]
        }
        static reedSolomonComputeDivisor(u) {
            if (u < 1 || u > 255) throw new RangeError("Degree out of range");
            let s = [];
            for (let f = 0; f < u - 1; f++) s.push(0);
            s.push(1);
            let c = 1;
            for (let f = 0; f < u; f++) {
                for (let d = 0; d < s.length; d++) s[d] = O.reedSolomonMultiply(s[d], c), d + 1 < s.length && (s[d] ^= s[d + 1]);
                c = O.reedSolomonMultiply(c, 2)
            }
            return s
        }
        static reedSolomonComputeRemainder(u, s) {
            let c = s.map(f => 0);
            for (const f of u) {
                const d = f ^ c.shift();
                c.push(0), s.forEach((y, g) => c[g] ^= O.reedSolomonMultiply(y, d))
            }
            return c
        }
        static reedSolomonMultiply(u, s) {
            if (u >>> 8 || s >>> 8) throw new RangeError("Byte out of range");
            let c = 0;
            for (let f = 7; f >= 0; f--) c = c << 1 ^ (c >>> 7) * 285, c ^= (s >>> f & 1) * u;
            return l(c >>> 8 == 0), c
        }
        finderPenaltyCountPatterns(u) {
            const s = u[1];
            l(s <= this.size * 3);
            const c = s > 0 && u[2] == s && u[3] == s * 3 && u[4] == s && u[5] == s;
            return (c && u[0] >= s * 4 && u[6] >= s ? 1 : 0) + (c && u[6] >= s * 4 && u[0] >= s ? 1 : 0)
        }
        finderPenaltyTerminateAndCount(u, s, c) {
            return u && (this.finderPenaltyAddHistory(s, c), s = 0), s += this.size, this.finderPenaltyAddHistory(s, c), this.finderPenaltyCountPatterns(c)
        }
        finderPenaltyAddHistory(u, s) {
            s[0] == 0 && (u += this.size), s.pop(), s.unshift(u)
        }
    };
    t.MIN_VERSION = 1, t.MAX_VERSION = 40, t.PENALTY_N1 = 3, t.PENALTY_N2 = 3, t.PENALTY_N3 = 40, t.PENALTY_N4 = 10, t.ECC_CODEWORDS_PER_BLOCK = [
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    ], t.NUM_ERROR_CORRECTION_BLOCKS = [
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    ], e.QrCode = t;

    function n(a, u, s) {
        if (u < 0 || u > 31 || a >>> u) throw new RangeError("Value out of range");
        for (let c = u - 1; c >= 0; c--) s.push(a >>> c & 1)
    }

    function r(a, u) {
        return (a >>> u & 1) != 0
    }

    function l(a) {
        if (!a) throw new Error("Assertion error")
    }
    const o = class G {
        constructor(u, s, c) {
            if (this.mode = u, this.numChars = s, this.bitData = c, s < 0) throw new RangeError("Invalid argument");
            this.bitData = c.slice()
        }
        static makeBytes(u) {
            let s = [];
            for (const c of u) n(c, 8, s);
            return new G(G.Mode.BYTE, u.length, s)
        }
        static makeNumeric(u) {
            if (!G.isNumeric(u)) throw new RangeError("String contains non-numeric characters");
            let s = [];
            for (let c = 0; c < u.length;) {
                const f = Math.min(u.length - c, 3);
                n(parseInt(u.substring(c, c + f), 10), f * 3 + 1, s), c += f
            }
            return new G(G.Mode.NUMERIC, u.length, s)
        }
        static makeAlphanumeric(u) {
            if (!G.isAlphanumeric(u)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let s = [],
                c;
            for (c = 0; c + 2 <= u.length; c += 2) {
                let f = G.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c)) * 45;
                f += G.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c + 1)), n(f, 11, s)
            }
            return c < u.length && n(G.ALPHANUMERIC_CHARSET.indexOf(u.charAt(c)), 6, s), new G(G.Mode.ALPHANUMERIC, u.length, s)
        }
        static makeSegments(u) {
            return u == "" ? [] : G.isNumeric(u) ? [G.makeNumeric(u)] : G.isAlphanumeric(u) ? [G.makeAlphanumeric(u)] : [G.makeBytes(G.toUtf8ByteArray(u))]
        }
        static makeEci(u) {
            let s = [];
            if (u < 0) throw new RangeError("ECI assignment value out of range");
            if (u < 128) n(u, 8, s);
            else if (u < 16384) n(2, 2, s), n(u, 14, s);
            else if (u < 1e6) n(6, 3, s), n(u, 21, s);
            else throw new RangeError("ECI assignment value out of range");
            return new G(G.Mode.ECI, 0, s)
        }
        static isNumeric(u) {
            return G.NUMERIC_REGEX.test(u)
        }
        static isAlphanumeric(u) {
            return G.ALPHANUMERIC_REGEX.test(u)
        }
        getData() {
            return this.bitData.slice()
        }
        static getTotalBits(u, s) {
            let c = 0;
            for (const f of u) {
                const d = f.mode.numCharCountBits(s);
                if (f.numChars >= 1 << d) return 1 / 0;
                c += 4 + d + f.bitData.length
            }
            return c
        }
        static toUtf8ByteArray(u) {
            u = encodeURI(u);
            let s = [];
            for (let c = 0; c < u.length; c++) u.charAt(c) != "%" ? s.push(u.charCodeAt(c)) : (s.push(parseInt(u.substring(c + 1, c + 3), 16)), c += 2);
            return s
        }
    };
    o.NUMERIC_REGEX = /^[0-9]*$/, o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, o.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let i = o;
    e.QrSegment = o
})(Wt || (Wt = {}));
(e => {
    (t => {
        const n = class {
            constructor(l, o) {
                this.ordinal = l, this.formatBits = o
            }
        };
        n.LOW = new n(0, 1), n.MEDIUM = new n(1, 0), n.QUARTILE = new n(2, 3), n.HIGH = new n(3, 2), t.Ecc = n
    })(e.QrCode || (e.QrCode = {}))
})(Wt || (Wt = {}));
(e => {
    (t => {
        const n = class {
            constructor(l, o) {
                this.modeBits = l, this.numBitsCharCount = o
            }
            numCharCountBits(l) {
                return this.numBitsCharCount[Math.floor((l + 7) / 17)]
            }
        };
        n.NUMERIC = new n(1, [10, 12, 14]), n.ALPHANUMERIC = new n(2, [9, 11, 13]), n.BYTE = new n(4, [8, 16, 16]), n.KANJI = new n(8, [8, 10, 12]), n.ECI = new n(7, [0, 0, 0]), t.Mode = n
    })(e.QrSegment || (e.QrSegment = {}))
})(Wt || (Wt = {}));
var sn = Wt;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var o0 = {
        L: sn.QrCode.Ecc.LOW,
        M: sn.QrCode.Ecc.MEDIUM,
        Q: sn.QrCode.Ecc.QUARTILE,
        H: sn.QrCode.Ecc.HIGH
    },
    td = 128,
    nd = "L",
    rd = "#FFFFFF",
    ld = "#000000",
    od = !1,
    id = 1,
    i0 = 4,
    u0 = 0,
    a0 = .1;

function ud(e, t = 0) {
    const n = [];
    return e.forEach(function(r, l) {
        let o = null;
        r.forEach(function(i, a) {
            if (!i && o !== null) {
                n.push(`M${o+t} ${l+t}h${a-o}v1H${o+t}z`), o = null;
                return
            }
            if (a === r.length - 1) {
                if (!i) return;
                o === null ? n.push(`M${a+t},${l+t} h1v1H${a+t}z`) : n.push(`M${o+t},${l+t} h${a+1-o}v1H${o+t}z`);
                return
            }
            i && o === null && (o = a)
        })
    }), n.join("")
}

function ad(e, t) {
    return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((l, o) => o < t.x || o >= t.x + t.w ? l : !1))
}

function s0(e, t, n, r) {
    if (r == null) return null;
    const l = e.length + n * 2,
        o = Math.floor(t * a0),
        i = l / t,
        a = (r.width || o) * i,
        u = (r.height || o) * i,
        s = r.x == null ? e.length / 2 - a / 2 : r.x * i,
        c = r.y == null ? e.length / 2 - u / 2 : r.y * i,
        f = r.opacity == null ? 1 : r.opacity;
    let d = null;
    if (r.excavate) {
        let g = Math.floor(s),
            v = Math.floor(c),
            w = Math.ceil(a + s - g),
            m = Math.ceil(u + c - v);
        d = {
            x: g,
            y: v,
            w,
            h: m
        }
    }
    const y = r.crossOrigin;
    return {
        x: s,
        y: c,
        h: u,
        w: a,
        excavation: d,
        opacity: f,
        crossOrigin: y
    }
}

function c0(e, t) {
    return t != null ? Math.max(Math.floor(t), 0) : e ? i0 : u0
}

function sd({
    value: e,
    level: t,
    minVersion: n,
    includeMargin: r,
    marginSize: l,
    imageSettings: o,
    size: i,
    boostLevel: a
}) {
    let u = z.useMemo(() => {
        const g = (Array.isArray(e) ? e : [e]).reduce((v, w) => (v.push(...sn.QrSegment.makeSegments(w)), v), []);
        return sn.QrCode.encodeSegments(g, o0[t], n, void 0, void 0, a)
    }, [e, t, n, a]);
    const {
        cells: s,
        margin: c,
        numCells: f,
        calculatedImageSettings: d
    } = z.useMemo(() => {
        let y = u.getModules();
        const g = c0(r, l),
            v = y.length + g * 2,
            w = s0(y, i, g, o);
        return {
            cells: y,
            margin: g,
            numCells: v,
            calculatedImageSettings: w
        }
    }, [u, i, o, r, l]);
    return {
        qrcode: u,
        margin: c,
        cells: s,
        numCells: f,
        calculatedImageSettings: d
    }
}
var f0 = function() {
        try {
            new Path2D().addPath(new Path2D)
        } catch {
            return !1
        }
        return !0
    }(),
    d0 = z.forwardRef(function(t, n) {
        const r = t,
            {
                value: l,
                size: o = td,
                level: i = nd,
                bgColor: a = rd,
                fgColor: u = ld,
                includeMargin: s = od,
                minVersion: c = id,
                boostLevel: f,
                marginSize: d,
                imageSettings: y
            } = r,
            v = Li(r, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "marginSize", "imageSettings"]),
            {
                style: w
            } = v,
            m = Li(v, ["style"]),
            p = y == null ? void 0 : y.src,
            h = z.useRef(null),
            E = z.useRef(null),
            S = z.useCallback(Be => {
                h.current = Be, typeof n == "function" ? n(Be) : n && (n.current = Be)
            }, [n]),
            [_, N] = z.useState(!1),
            {
                margin: C,
                cells: U,
                numCells: L,
                calculatedImageSettings: W
            } = sd({
                value: l,
                level: i,
                minVersion: c,
                boostLevel: f,
                includeMargin: s,
                marginSize: d,
                imageSettings: y,
                size: o
            });
        z.useEffect(() => {
            if (h.current != null) {
                const Be = h.current,
                    Oe = Be.getContext("2d");
                if (!Oe) return;
                let Yt = U;
                const Ge = E.current,
                    P = W != null && Ge !== null && Ge.complete && Ge.naturalHeight !== 0 && Ge.naturalWidth !== 0;
                P && W.excavation != null && (Yt = ad(U, W.excavation));
                const I = window.devicePixelRatio || 1;
                Be.height = Be.width = o * I;
                const M = o / L * I;
                Oe.scale(M, M), Oe.fillStyle = a, Oe.fillRect(0, 0, L, L), Oe.fillStyle = u, f0 ? Oe.fill(new Path2D(ud(Yt, C))) : U.forEach(function(H, Z) {
                    H.forEach(function(Gt, Xe) {
                        Gt && Oe.fillRect(Xe + C, Z + C, 1, 1)
                    })
                }), W && (Oe.globalAlpha = W.opacity), P && Oe.drawImage(Ge, W.x + C, W.y + C, W.w, W.h)
            }
        }), z.useEffect(() => {
            N(!1)
        }, [p]);
        const Tt = Mi({
            height: o,
            width: o
        }, w);
        let it = null;
        return p != null && (it = z.createElement("img", {
            src: p,
            key: p,
            style: {
                display: "none"
            },
            onLoad: () => {
                N(!0)
            },
            ref: E,
            crossOrigin: W == null ? void 0 : W.crossOrigin
        })), z.createElement(z.Fragment, null, z.createElement("canvas", Mi({
            style: Tt,
            height: o,
            width: o,
            ref: S,
            role: "img"
        }, m)), it)
    });
d0.displayName = "QRCodeCanvas";
var cd = z.forwardRef(function(t, n) {
    const r = t,
        {
            value: l,
            size: o = td,
            level: i = nd,
            bgColor: a = rd,
            fgColor: u = ld,
            includeMargin: s = od,
            minVersion: c = id,
            boostLevel: f,
            title: d,
            marginSize: y,
            imageSettings: g
        } = r,
        v = Li(r, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "title", "marginSize", "imageSettings"]),
        {
            margin: w,
            cells: m,
            numCells: p,
            calculatedImageSettings: h
        } = sd({
            value: l,
            level: i,
            minVersion: c,
            boostLevel: f,
            includeMargin: s,
            marginSize: y,
            imageSettings: g,
            size: o
        });
    let E = m,
        S = null;
    g != null && h != null && (h.excavation != null && (E = ad(m, h.excavation)), S = z.createElement("image", {
        href: g.src,
        height: h.h,
        width: h.w,
        x: h.x + w,
        y: h.y + w,
        preserveAspectRatio: "none",
        opacity: h.opacity,
        crossOrigin: h.crossOrigin
    }));
    const _ = ud(E, w);
    return z.createElement("svg", Mi({
        height: o,
        width: o,
        viewBox: `0 0 ${p} ${p}`,
        ref: n,
        role: "img"
    }, v), !!d && z.createElement("title", null, d), z.createElement("path", {
        fill: a,
        d: `M0,0 h${p}v${p}H0z`,
        shapeRendering: "crispEdges"
    }), z.createElement("path", {
        fill: u,
        d: _,
        shapeRendering: "crispEdges"
    }), S)
});
cd.displayName = "QRCodeSVG";

function p0() {
    const e = R.useRef(null);
    return R.useEffect(() => {
        const t = e.current;
        if (!t) return;
        const n = t.getContext("2d");
        if (!n) return;
        const r = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let l = 0,
            o = 0,
            i = 1,
            a = [],
            u = [],
            s = 0,
            c = 0;
        const f = () => {
                const g = t.getBoundingClientRect();
                i = Math.min(window.devicePixelRatio || 1, 2), l = Math.max(g.width, 1), o = Math.max(g.height, 1), t.width = Math.floor(l * i), t.height = Math.floor(o * i), n.setTransform(i, 0, 0, i, 0, 0);
                const v = Math.round(Math.min(230, Math.max(90, l * o / 5200)));
                a = Array.from({
                    length: v
                }, () => {
                    const m = Math.random();
                    return {
                        x: Math.random() * l,
                        y: Math.random() * o,
                        r: .4 + m * 1.5,
                        depth: m,
                        phase: Math.random() * Math.PI * 2,
                        speed: 6e-4 + Math.random() * .0016,
                        hue: Math.random() > .72 ? "cyan" : "white"
                    }
                });
                const w = Math.round(Math.min(26, Math.max(10, l / 22)));
                u = Array.from({
                    length: w
                }, () => ({
                    x: Math.random() * l,
                    y: Math.random() * o,
                    r: .9 + Math.random() * 1.9,
                    vy: -(.05 + Math.random() * .16),
                    vx: (Math.random() - .5) * .08,
                    phase: Math.random() * Math.PI * 2
                }))
            },
            d = () => {
                n.clearRect(0, 0, l, o), c += 1;
                for (const g of a) {
                    const v = .45 + .55 * (.5 + .5 * Math.sin(c * g.speed + g.phase)),
                        w = (.28 + g.depth * .62) * v;
                    if (n.beginPath(), n.fillStyle = g.hue === "cyan" ? `rgba(150, 226, 255, ${w})` : `rgba(236, 246, 255, ${w})`, n.arc(g.x, g.y, g.r, 0, Math.PI * 2), n.fill(), g.depth > .82) {
                        n.beginPath();
                        const m = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r * 6);
                        m.addColorStop(0, `rgba(120, 200, 255, ${w*.35})`), m.addColorStop(1, "rgba(120, 200, 255, 0)"), n.fillStyle = m, n.arc(g.x, g.y, g.r * 6, 0, Math.PI * 2), n.fill()
                    }
                    r || (g.y -= .02 + g.depth * .05, g.y < -4 && (g.y = o + 4, g.x = Math.random() * l))
                }
                for (const g of u) {
                    const v = .35 + .35 * Math.sin(c * .012 + g.phase),
                        w = n.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r * 7);
                    w.addColorStop(0, `rgba(0, 207, 255, ${.55*v})`), w.addColorStop(.55, `rgba(22, 119, 255, ${.22*v})`), w.addColorStop(1, "rgba(22, 119, 255, 0)"), n.fillStyle = w, n.beginPath(), n.arc(g.x, g.y, g.r * 7, 0, Math.PI * 2), n.fill(), r || (g.y += g.vy, g.x += g.vx, g.y < -20 && (g.y = o + 20, g.x = Math.random() * l), g.x < -20 && (g.x = l + 20), g.x > l + 20 && (g.x = -20))
                }
                s = requestAnimationFrame(d)
            };
        f(), d();
        const y = () => {
            cancelAnimationFrame(s), f(), d()
        };
        return window.addEventListener("resize", y), () => {
            cancelAnimationFrame(s), window.removeEventListener("resize", y)
        }
    }, []), x.jsx("canvas", {
        ref: e,
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 h-full w-full"
    })
}

function h0({
    src: e,
    alt: t
}) {
    const [n, r] = R.useState(!1);
    return x.jsxs("div", {
        className: "relative",
        children: [x.jsx("div", {
            "aria-hidden": "true",
            className: "absolute -inset-8 rounded-full opacity-70 blur-2xl",
            style: {
                background: "radial-gradient(circle, rgba(22,119,255,0.55) 0%, rgba(0,207,255,0.22) 45%, rgba(0,0,0,0) 72%)"
            }
        }), x.jsx("div", {
            className: "animate-floaty relative",
            children: x.jsxs("div", {
                className: "icon-glow relative h-[104px] w-[104px] overflow-hidden rounded-[26px] ring-1 ring-cyan-300/40 sm:h-28 sm:w-28",
                children: [n ? x.jsx("div", {
                    className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a1a38] via-black to-[#062a4d]",
                    children: x.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-11 w-11 text-cyan-300",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        children: [x.jsx("rect", {
                            x: "3",
                            y: "4",
                            width: "18",
                            height: "14",
                            rx: "4"
                        }), x.jsx("path", {
                            d: "M8 20l1.8-2M16 20l-1.8-2M8.5 10.5c.7-.9 1.8-.9 2.5 0M13 10.5c.7-.9 1.8-.9 2.5 0",
                            strokeLinecap: "round"
                        })]
                    })
                }) : x.jsx("img", {
                    src: e,
                    alt: t,
                    className: "h-full w-full object-cover",
                    onError: () => r(!0)
                }), x.jsx("div", {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/15",
                    style: {
                        background: "linear-gradient(150deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 34%, rgba(0,0,0,0) 60%)"
                    }
                })]
            })
        })]
    })
}
const To = "Chat AI Pro",
    m0 = "https://chat-ai-pro-ymod.onrender.com/",
    g0 = "https://api.whacka.app/storage/v1/object/public/app-images/platform/chat/image/44caa4d9-462b-45d5-9157-e3eb7a7b76d9/178cd478-2408-4888-8d08-fc58626876ba.jpg";

function y0() {
    return x.jsxs("div", {
        className: "space-bg relative h-full w-full overflow-y-auto",
        children: [x.jsxs("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [x.jsx("div", {
                className: "absolute left-1/2 top-[-18%] h-[62vh] w-[62vh] -translate-x-1/2 rounded-full blur-3xl",
                style: {
                    background: "radial-gradient(circle, rgba(22,119,255,0.30) 0%, rgba(6,19,41,0.10) 48%, rgba(0,0,0,0) 72%)"
                }
            }), x.jsx("div", {
                className: "absolute bottom-[-22%] left-1/2 h-[52vh] w-[80vw] -translate-x-1/2 rounded-full blur-3xl",
                style: {
                    background: "radial-gradient(circle, rgba(0,207,255,0.16) 0%, rgba(6,19,41,0) 70%)"
                }
            })]
        }), x.jsx(p0, {}), x.jsx("main", {
            className: "relative z-10 flex min-h-full w-full flex-col items-center justify-center px-6 pb-12 pt-[calc(env(safe-area-inset-top,0px)+2.5rem)]",
            children: x.jsxs("div", {
                className: "flex w-full max-w-[420px] flex-col items-center md:max-w-[460px]",
                children: [x.jsx("div", {
                    className: "rise-in relative flex flex-col items-center",
                    style: {
                        animationDelay: "0.05s"
                    },
                    children: x.jsxs("div", {
                        className: "relative",
                        children: [x.jsx("div", {
                            "aria-hidden": "true",
                            className: "animate-pulse-ring absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25"
                        }), x.jsx("div", {
                            "aria-hidden": "true",
                            className: "absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25",
                            style: {
                                animation: "pulseRing 6s ease-in-out 1.2s infinite"
                            }
                        }), x.jsx(h0, {
                            src: g0,
                            alt: `${To} icon`
                        })]
                    })
                }), x.jsx("h1", {
                    className: "rise-in font-display text-glow mt-8 text-center text-[30px] font-black tracking-[0.06em] text-white sm:text-[34px]",
                    style: {
                        animationDelay: "0.18s"
                    },
                    children: To
                }), x.jsx("div", {
                    className: "rise-in mt-3 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent",
                    style: {
                        animationDelay: "0.24s"
                    }
                }), x.jsx("p", {
                    className: "rise-in mt-4 text-center text-[13px] font-light tracking-[0.22em] text-blue-100/60 uppercase",
                    style: {
                        animationDelay: "0.28s"
                    },
                    children: "Your AI. In orbit."
                }), x.jsxs("div", {
                    className: "rise-in relative mt-10 sm:mt-12",
                    style: {
                        animationDelay: "0.36s"
                    },
                    children: [x.jsx("div", {
                        "aria-hidden": "true",
                        className: "absolute -inset-6 rounded-[34px] blur-2xl",
                        style: {
                            background: "radial-gradient(circle, rgba(22,119,255,0.42) 0%, rgba(0,207,255,0.16) 55%, rgba(0,0,0,0) 75%)"
                        }
                    }), x.jsxs("div", {
                        className: "qr-frame relative overflow-hidden rounded-[26px] bg-white p-4 sm:p-5",
                        children: [x.jsx(cd, {
                            value: m0,
                            size: 240,
                            bgColor: "#ffffff",
                            fgColor: "#03101f",
                            level: "M",
                            title: `Scan to open ${To}`,
                            className: "block h-[176px] w-[176px] sm:h-[204px] sm:w-[204px]"
                        }), x.jsx("span", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute left-2 top-2 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-[#1677ff]/70"
                        }), x.jsx("span", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute right-2 top-2 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-[#1677ff]/70"
                        }), x.jsx("span", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute bottom-2 left-2 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-[#1677ff]/70"
                        }), x.jsx("span", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute bottom-2 right-2 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-[#1677ff]/70"
                        }), x.jsx("div", {
                            "aria-hidden": "true",
                            className: "animate-scanline pointer-events-none absolute inset-x-3 top-0 h-[46%]",
                            style: {
                                background: "linear-gradient(180deg, rgba(0,207,255,0) 0%, rgba(0,207,255,0.10) 55%, rgba(110,230,255,0.55) 96%, rgba(0,207,255,0) 100%)",
                                mixBlendMode: "multiply"
                            }
                        })]
                    })]
                }), x.jsx("p", {
                    className: "rise-in font-display mt-9 text-center text-[13px] font-bold tracking-[0.30em] text-white sm:text-sm",
                    style: {
                        animationDelay: "0.46s"
                    },
                    children: "SCAN TO USE THE APP"
                }), x.jsx("div", {
                    className: "rise-in mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#00cfff] to-transparent",
                    style: {
                        animationDelay: "0.5s"
                    }
                }), x.jsx("p", {
                    className: "rise-in mt-4 text-center text-[13px] leading-relaxed text-blue-100/55",
                    style: {
                        animationDelay: "0.54s"
                    },
                    children: "Scan the QR code to get started."
                })]
            })
        })]
    })
}

function v0() {
    return x.jsx(r0, {
        children: x.jsx(e0, {
            children: x.jsx(qf, {
                path: "*",
                element: x.jsx(y0, {})
            })
        })
    })
}
const w0 = {
        VITE_PROJECT_ID: "f97206ce-006c-49ea-b2b9-e67c13f91779"
    },
    Il = new Map;
let xr = !1;
const Ro = typeof
import.meta < "u" && w0 || {}, E0 = Ro.VITE_PREVIEW_TOKEN && Ro.VITE_PROJECT_ID ? `:${Ro.VITE_PROJECT_ID}` : "", S0 = Object.freeze(["__whacka_auth_token", "__whacka_auth_user", "__whacka_user_id", "__whacka_supabase_token", "__whacka_gate_token", "__whacka_migration_pending"]);

function k0(e, t) {
    return t && S0.includes(e) ? `${e}${t}` : e
}

function Fu(e) {
    return k0(e, E0)
}

function xe(e) {
    const t = Fu(e);
    try {
        return localStorage.getItem(t)
    } catch {
        return xr = !0, Il.has(t) ? Il.get(t) : null
    }
}

function _n(e, t) {
    const n = Fu(e);
    Il.set(n, String(t));
    try {
        localStorage.setItem(n, t)
    } catch {
        xr = !0
    }
}

function qn(e) {
    const t = Fu(e);
    Il.delete(t);
    try {
        localStorage.removeItem(t)
    } catch {
        xr = !0
    }
}

function x0() {
    return xr
}

function _0() {
    try {
        return localStorage.getItem("__whacka_storage_probe"), !0
    } catch {
        return xr = !0, !1
    }
}

function C0(e = globalThis.crypto) {
    if (e && typeof e.randomUUID == "function") try {
        return e.randomUUID()
    } catch {}
    const t = new Uint8Array(16);
    let n = !1;
    if (e && typeof e.getRandomValues == "function") try {
        e.getRandomValues(t), n = !0
    } catch {}
    if (!n)
        for (let l = 0; l < 16; l++) t[l] = Math.floor(Math.random() * 256);
    t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
    const r = Array.from(t, l => l.toString(16).padStart(2, "0")).join("");
    return `${r.slice(0,8)}-${r.slice(8,12)}-${r.slice(12,16)}-${r.slice(16,20)}-${r.slice(20)}`
}
const ss = "__whacka_user_id",
    P0 = "__whacka_auth_token",
    N0 = "__whacka_auth_user";

function Uu() {
    try {
        const t = xe(P0),
            n = xe(N0);
        if (t && n) {
            const r = JSON.parse(n);
            if (r != null && r.id) return r.id
        }
    } catch {}
    let e = xe(ss);
    return e || (e = C0(), _n(ss, e), console.log("[user] New anonymous user created:", e)), e
}
let fd = null;
window.addEventListener("message", e => {
    var t;
    try {
        const n = new URL(e.origin).hostname;
        if (!n.endsWith("whacka.app") && !n.includes("localhost")) return
    } catch {
        return
    }((t = e.data) == null ? void 0 : t.type) === "whacka-platform-auth" && e.data.token && (fd = e.data.token)
});

function T0() {
    return fd
}
const gr = "__whacka_auth_token",
    R0 = "__whacka_auth_user",
    I0 = "__whacka_supabase_token",
    M0 = "X-Whacka-Session-Renew",
    dd = 60,
    Oi = new Set;

function L0(e) {
    return Oi.add(e), () => Oi.delete(e)
}

function O0(e) {
    const t = e.replace(/-/g, "+").replace(/_/g, "/"),
        n = t.length % 4 ? "=".repeat(4 - t.length % 4) : "";
    return typeof atob == "function" ? atob(t + n) : Buffer.from(t + n, "base64").toString("binary")
}

function Ai(e) {
    try {
        const t = String(e || "").split(".")[1];
        if (!t) return 0;
        const {
            exp: n
        } = JSON.parse(O0(t));
        return typeof n == "number" && Number.isFinite(n) ? n : 0
    } catch {
        return 0
    }
}

function pd(e, t = dd, n = Math.floor(Date.now() / 1e3)) {
    const r = Ai(e);
    return r ? r + t <= n : !1
}

function hd(e, t) {
    qn(gr), qn(R0), qn(I0), console.warn(e);
    for (const n of Oi) try {
        n(t)
    } catch (r) {
        console.error("[auth] expiry listener error:", r)
    }
}

function A0(e = Math.floor(Date.now() / 1e3)) {
    const t = xe(gr);
    return !t || !pd(t, dd, e) ? !1 : (hd("[auth] Session expired — signed out. Sign in again to continue.", {
        ended: !1
    }), !0)
}

function z0(e) {
    const t = xe(gr);
    return !t || !e || t !== e ? !1 : (hd("[auth] This account no longer has access to this app — signed out.", {
        ended: !0
    }), !0)
}

function D0(e) {
    try {
        const t = e && e.headers && typeof e.headers.get == "function" ? e.headers.get(M0) : null;
        if (!t) return !1;
        const n = xe(gr);
        return !n || Ai(t) <= Ai(n) ? !1 : (_n(gr, t), !0)
    } catch {
        return !1
    }
}
const cs = {
        VITE_WHACKA_SDK: "20261019.b0ace971"
    },
    j0 = "__whacka_auth_token",
    F0 = "__whacka_gate_token";

function Zl(e = {}) {
    const t = { ...e
    };
    try {
        A0()
    } catch {}
    try {
        const i = Uu();
        i && (t["X-Whacka-UID"] = i)
    } catch {}
    const n = T0();
    if (n && !pd(n)) t.Authorization = `Bearer ${n}`;
    else {
        const i = xe(j0);
        i && (t.Authorization = `Bearer ${i}`)
    }
    const r = (typeof
        import.meta < "u" && cs || {}).VITE_PREVIEW_TOKEN;
    r && (t["X-Whacka-Preview"] = r);
    const l = xe(F0);
    l && (t["X-Whacka-Gate"] = l);
    const o = (typeof
        import.meta < "u" && cs || {}).VITE_WHACKA_SDK;
    return o && (t["X-Whacka-SDK"] = String(o).slice(0, 40)), t
}

function md(e) {
    try {
        const t = new URL(e).hostname;
        return t.endsWith("whacka.app") || t.includes("localhost")
    } catch {
        return !1
    }
}

function U0() {
    return window.self === window.top || !document.referrer ? !1 : md(document.referrer)
}

function fs(e, t) {
    return new Promise((n, r) => {
        const l = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
            o = window.setTimeout(() => {
                window.removeEventListener("message", i), r(new Error("Host bridge timed out"))
            }, 3e4);

        function i(a) {
            var s;
            if (a.source !== window.parent || !md(a.origin) || ((s = a.data) == null ? void 0 : s.type) !== "whacka-host-response" || a.data.requestId !== l) return;
            if (window.clearTimeout(o), window.removeEventListener("message", i), a.data.ok) {
                n();
                return
            }
            const u = new Error(a.data.error || "Host action failed");
            a.data.name && (u.name = a.data.name), r(u)
        }
        window.addEventListener("message", i), window.parent.postMessage({
            type: e,
            requestId: l,
            ...t
        }, "*")
    })
}

function $0() {
    if (U0()) {
        try {
            const e = typeof navigator.share == "function" ? navigator.share.bind(navigator) : null;
            Object.defineProperty(navigator, "share", {
                configurable: !0,
                value: async t => {
                    if (e) try {
                        return await e(t)
                    } catch (n) {
                        if (n instanceof Error && n.name === "AbortError") throw n
                    }
                    return fs("whacka-host-share", {
                        data: t
                    })
                }
            })
        } catch {}
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText == "function") {
                const e = navigator.clipboard.writeText.bind(navigator.clipboard);
                navigator.clipboard.writeText = async t => {
                    try {
                        return await e(t)
                    } catch {
                        return fs("whacka-host-copy", {
                            text: t
                        })
                    }
                }
            }
        } catch {}
    }
}
const ds = /^ar\b/i,
    Vr = e => String(e || "").toLowerCase();

function B0(e) {
    const t = e || {};
    return Vr(t.htmlDir) === "rtl" || Vr(t.bodyDir) === "rtl" || ds.test(String(t.htmlLang || "")) || Vr(t.htmlDirection) === "rtl" || Vr(t.bodyDirection) === "rtl" || ds.test(String(t.navLang || "")) ? "ar" : "en"
}

function Qt() {
    let e = null,
        t = null;
    try {
        e = document.documentElement || null, t = document.body || null
    } catch {}
    let n = "";
    try {
        n = navigator.language || ""
    } catch {}
    const r = l => {
        try {
            return l ? getComputedStyle(l).direction : ""
        } catch {
            return ""
        }
    };
    return B0({
        htmlDir: e ? e.dir : "",
        bodyDir: t ? t.dir : "",
        htmlLang: e ? e.lang : "",
        get htmlDirection() {
            return r(e)
        },
        get bodyDirection() {
            return r(t)
        },
        navLang: n
    })
}

function V0(e) {
    return /^(ar|he|fa|ur)\b/i.test(String(e || ""))
}

function W0(e, t = 50) {
    let n = null,
        r = null,
        l = !1;
    const o = () => {
            if (n = null, !l) try {
                e(Qt())
            } catch {}
        },
        i = () => {
            l || (n && clearTimeout(n), n = setTimeout(o, t))
        };
    try {
        r = new MutationObserver(i);
        const a = {
            attributes: !0,
            attributeFilter: ["dir", "lang"]
        };
        r.observe(document.documentElement, a), document.body && r.observe(document.body, a)
    } catch {}
    return () => {
        if (l = !0, n && clearTimeout(n), n = null, r) try {
            r.disconnect()
        } catch {}
    }
}
const H0 = 8e3,
    K0 = 25,
    Q0 = {
        dialog: "نوافذ التأكيد المنبثقة محجوبة داخل هذه المعاينة المضمّنة — افتح التطبيق من رابطه المباشر لتنفيذ هذا الإجراء."
    },
    Y0 = {
        dialog: "Confirmation pop-ups are blocked inside this embedded preview — open the app by its direct link to use this action."
    };

function G0(e, t, n, r) {
    return n >= K0 ? !1 : e === "confirm" ? t === !1 : e === "prompt" ? t === null : e === "alert"
}

function X0({
    embedded: e,
    defaultPrevented: t,
    button: n,
    modifier: r,
    hasDownload: l,
    target: o,
    href: i,
    baseHref: a
}) {
    if (t || n !== 0 || r || l || (o || "").toLowerCase() === "_blank" || !i) return null;
    let u;
    try {
        u = new URL(i, a)
    } catch {
        return null
    }
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    let s;
    try {
        s = new URL(a)
    } catch {
        return null
    }
    return u.origin === s.origin ? null : u.href
}
const J0 = `
  :host {
    position: fixed;
    bottom: max(8px, env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    /* Informational only — must never intercept a tap (shell:38 dead-tap class). */
    pointer-events: none;
    max-width: min(92vw, 420px);
  }
  .chip {
    font: 500 13px/1.35 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    color: #FFFFFF;
    background: rgba(24, 24, 27, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 9px 13px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
    text-align: center;
    opacity: 0;
    transition: opacity 180ms ease;
  }
  .chip.in { opacity: 1; }
  @media (prefers-reduced-motion: reduce) { .chip { transition: none; } }
`;
let ps = !1;

function Z0() {
    if (ps || typeof document > "u" || !document.body) return;
    ps = !0;
    const e = Qt() === "ar",
        t = e ? Q0 : Y0,
        n = document.createElement("div");
    n.dir = e ? "rtl" : "ltr";
    const r = n.attachShadow({
            mode: "closed"
        }),
        l = document.createElement("style");
    l.textContent = J0, r.appendChild(l);
    const o = document.createElement("div");
    o.className = "chip", o.setAttribute("role", "status"), o.setAttribute("aria-live", "polite"), o.textContent = t.dialog, r.appendChild(o), document.body.appendChild(n), requestAnimationFrame(() => {
        try {
            o.classList.add("in")
        } catch {}
    }), setTimeout(() => {
        try {
            n.remove()
        } catch {}
    }, H0)
}

function q0() {
    if (typeof window > "u") return;
    let e = !1;
    try {
        e = window.self !== window.top
    } catch {
        e = !0
    }
    if (!e) return;
    const t = {
        alert: window.alert,
        confirm: window.confirm,
        prompt: window.prompt
    };
    for (const n of ["alert", "confirm", "prompt"]) {
        const r = t[n];
        typeof r == "function" && (window[n] = function(...l) {
            const o = Date.now(),
                i = r.apply(window, l);
            try {
                G0(n, i, Date.now() - o, !0) && Z0()
            } catch {}
            return i
        })
    }
    document.addEventListener("click", n => {
        try {
            const r = n.target,
                l = r && typeof r.closest == "function" ? r.closest("a[href]") : null;
            if (!l) return;
            const o = X0({
                embedded: !0,
                defaultPrevented: n.defaultPrevented,
                button: typeof n.button == "number" ? n.button : 0,
                modifier: !!(n.metaKey || n.ctrlKey || n.shiftKey || n.altKey),
                hasDownload: l.hasAttribute("download"),
                target: l.getAttribute("target") || "",
                href: l.getAttribute("href"),
                baseHref: window.location.href
            });
            if (!o) return;
            n.preventDefault(), window.open(o, "_blank", "noopener") || (window.location.href = o)
        } catch {}
    })
}
const b0 = {
        VITE_API_BASE: "",
        VITE_PROJECT_ID: "f97206ce-006c-49ea-b2b9-e67c13f91779",
        VITE_WHACKA_SDK: "20261019.b0ace971"
    },
    $u = typeof
import.meta < "u" && b0 || {}, eg = $u.VITE_API_BASE || "", gd = $u.VITE_PROJECT_ID, tg = $u.VITE_WHACKA_SDK || null, ng = 20, rg = 12;
let hs = 0,
    ms = 0;
const gs = new Set;

function lg() {
    try {
        const e = window.location;
        return String((e.pathname || "/") + (e.hash || "")).slice(0, 200)
    } catch {
        return null
    }
}

function yd() {
    try {
        return typeof window > "u" || window.self !== window.top ? !1 : !!gd
    } catch {
        return !1
    }
}

function zi(e, t) {
    if (!(hs >= ng || !e)) {
        hs++;
        try {
            fetch(`${eg}/api/app/${gd}/client-error`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: String(e).slice(0, 1e3),
                    source: t ? String(t).slice(0, 300) : null,
                    path: lg(),
                    sdk: tg
                }),
                keepalive: !0
            }).catch(() => {})
        } catch {}
    }
}

function og() {
    try {
        if (!yd()) return;
        const e = window.__whackaErrors || [];
        for (const t of e) zi(t && t.message, t && t.source);
        window.__whackaReportToServer = zi
    } catch {}
}

function Di({
    route: e,
    status: t,
    code: n,
    message: r,
    sample: l
}) {
    try {
        if (!yd()) return;
        const o = `${e}|${n}|${t}`;
        if (gs.has(o) || l && Math.random() * l >= 1 || ms >= rg) return;
        gs.add(o), ms++, zi(`[sdk] ${e} ${t||"-"} ${n}: ${String(r||"").slice(0,200)}`, `sdk:${e}`)
    } catch {}
}
const ig = {
        VITE_API_BASE: "",
        VITE_PROJECT_ID: "f97206ce-006c-49ea-b2b9-e67c13f91779"
    },
    vd = "__whacka_gate_token",
    Bu = typeof
import.meta < "u" && ig || {}, wd = Bu.VITE_PROJECT_ID, Ed = Bu.VITE_API_BASE || "", ug = 8e3, ag = 15e3;

function sg(e) {
    _n(vd, e)
}

function ys() {
    qn(vd)
}
const Vu = "__whacka_gate_seed";

function cg() {
    try {
        return localStorage.getItem(Vu) === "open"
    } catch {
        return !1
    }
}

function Sd() {
    try {
        return localStorage.getItem(Vu) === "locked"
    } catch {
        return !1
    }
}

function ji(e) {
    try {
        localStorage.setItem(Vu, e ? "open" : "locked")
    } catch {}
}
let vs = !1;

function fg(e) {
    if (!e || e.gated !== !0 || Bu.VITE_PREVIEW_TOKEN) return !1;
    if (ji(!1), !vs) {
        vs = !0;
        try {
            window.location.reload()
        } catch {}
    }
    return !0
}

function dg() {
    try {
        const e = window.location.hash || "",
            t = e.match(/[#&]k=([^&]+)/);
        if (!t) return null;
        const n = decodeURIComponent(t[1]);
        let r = e.replace(/([#&])k=[^&]*/, "$1");
        r = r.replace(/^#&/, "#").replace(/[#&]+$/, "");
        const l = r && r !== "#" ? r : "";
        return window.history.replaceState(null, "", window.location.pathname + window.location.search + l), n
    } catch {
        return null
    }
}
async function ws() {
    const e = await ql(`${Ed}/api/app/${wd}/gate/status`, {
        headers: Zl()
    }, {
        timeoutMs: ug,
        route: "gate/status",
        report: Sd()
    });
    return e.ok || await hg(e, "Gate status failed", "gate/status"), e.json()
}
async function kd(e) {
    let t;
    try {
        t = await ql(`${Ed}/api/app/${wd}/gate/unlock`, {
            method: "POST",
            headers: Zl({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                code: e
            })
        }, {
            timeoutMs: ag,
            route: "gate/unlock"
        })
    } catch (r) {
        return {
            ok: !1,
            error: r && r.message || "network",
            code: r && r.code || "NETWORK"
        }
    }
    if (t.ok) {
        let r = {};
        try {
            r = await t.json() || {}
        } catch {
            r = {}
        }
        if (r.token) {
            if (sg(r.token), r.supabaseToken) try {
                Nd(r.supabaseToken)
            } catch {}
            return {
                ok: !0
            }
        }
        return r.notGated ? {
            ok: !0,
            notGated: !0
        } : {
            ok: !1,
            error: r.error || "wrong",
            status: t.status,
            code: "INVALID_CODE"
        }
    }
    const n = await xd(t);
    return {
        ok: !1,
        error: n && n.error || "wrong",
        status: t.status,
        code: _d(t, n)
    }
}
const pg = {
    400: "BAD_REQUEST",
    401: "AUTH_REQUIRED",
    402: "PAYMENT_REQUIRED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    409: "CONFLICT",
    410: "GONE",
    413: "PAYLOAD_TOO_LARGE",
    422: "UNPROCESSABLE",
    429: "RATE_LIMITED",
    500: "INTERNAL",
    502: "UPSTREAM_UNAVAILABLE",
    503: "UNAVAILABLE",
    504: "TIMEOUT"
};

function Fi(e, {
    status: t,
    code: n,
    route: r,
    body: l,
    cause: o
} = {}) {
    const i = new Error(e);
    return typeof t == "number" && (i.status = t), n && (i.code = n), r && (i.route = r), l !== void 0 && (i.body = l), o && (i.cause = o), i.sdk = !0, i
}
async function xd(e) {
    try {
        const t = await e.json();
        return t && typeof t == "object" && t.__wk === "envelope" ? t.body || {} : t && typeof t == "object" ? t : {}
    } catch {
        return {}
    }
}

function _d(e, t) {
    if (t && typeof t.code == "string" && t.code) return t.code;
    try {
        const n = e.headers && e.headers.get && e.headers.get("X-Whacka-Code");
        if (n) return n
    } catch {}
    return pg[e.status] || (e.status >= 500 ? "INTERNAL" : "REQUEST_FAILED")
}
async function hg(e, t, n) {
    const r = await xd(e);
    try {
        D0(e)
    } catch {}
    if (e.status === 401) try {
        fg(r)
    } catch {}
    const l = _d(e, r),
        o = r && typeof r.error == "string" && r.error || `${t} (${e.status})`,
        i = Fi(o, {
            status: e.status,
            code: l,
            route: n,
            body: r
        });
    throw e.status >= 500 && Di({
        route: n,
        status: e.status,
        code: l,
        message: o
    }), i
}
const mg = 3e4;

function gg(e) {
    const t = String(e).match(/\/api\/app\/[^/]+\/([^?]+)/);
    return t ? t[1] : String(e).slice(0, 80)
}

function yg(e, t) {
    if (!e || e.status !== 401 || !e.headers || typeof e.headers.get != "function" || e.headers.get("X-Whacka-Code") !== "SESSION_ENDED") return;
    const n = t && t.headers,
        r = n && (typeof n.get == "function" ? n.get("Authorization") : n.Authorization || n.authorization);
    typeof r == "string" && r.startsWith("Bearer ") && z0(r.slice(7))
}
async function ql(e, t = {}, n = {}) {
    const r = typeof n.timeoutMs == "number" ? n.timeoutMs : mg,
        l = n.route || gg(e),
        o = t && t.signal,
        i = typeof AbortController == "function" ? new AbortController : null;
    let a = !1,
        u = null;
    const s = () => {
        i && i.abort()
    };
    i && (o && (o.aborted ? i.abort() : o.addEventListener("abort", s, {
        once: !0
    })), r > 0 && (u = setTimeout(() => {
        a = !0, i.abort()
    }, r)));
    try {
        const c = await fetch(e, i ? { ...t,
            signal: i.signal
        } : t);
        try {
            yg(c, t)
        } catch {}
        return c
    } catch (c) {
        if (o && o.aborted && !a) throw c;
        if (a) {
            const d = Fi(`Request timed out after ${Math.round(r/1e3)}s`, {
                code: "TIMEOUT",
                route: l,
                cause: c
            });
            throw n.report !== !1 && Di({
                route: l,
                status: 0,
                code: "TIMEOUT",
                message: d.message
            }), d
        }
        const f = Fi("Network error — check your connection and try again", {
            code: "NETWORK",
            route: l,
            cause: c
        });
        throw n.report !== !1 && Di({
            route: l,
            status: 0,
            code: "NETWORK",
            message: (c && c.message ? String(c.message) : "fetch failed").slice(0, 120),
            sample: 20
        }), f
    } finally {
        u && clearTimeout(u), o && typeof o.removeEventListener == "function" && o.removeEventListener("abort", s)
    }
}
const vg = {
        BASE_URL: "/",
        DEV: !1,
        MODE: "production",
        PROD: !0,
        SSR: !1,
        VITE_API_BASE: "",
        VITE_APP_OWNER_ID: "44caa4d9-462b-45d5-9157-e3eb7a7b76d9",
        VITE_APP_URL: "https://nebulachat-nz87.whacka.app",
        VITE_PROJECT_ID: "f97206ce-006c-49ea-b2b9-e67c13f91779",
        VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hbXhoa2pid25vbWFkZ2xrbWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNzEzODgsImV4cCI6MjA4NTg0NzM4OH0.JETyVzRVAyJ7KxlYCqRgf0Xey8Nrn4xKCllShnZ4-8k",
        VITE_SUPABASE_URL: "https://api.whacka.app",
        VITE_WHACKA_LIVE: "broadcast",
        VITE_WHACKA_SDK: "20261019.b0ace971",
        VITE_WHACKA_UPLOAD_MAX_MB: "25"
    },
    Ui = "__whacka_supabase_token",
    Cd = "__whacka_gate_token",
    wg = 24 * 60 * 60,
    Ml = typeof
import.meta < "u" && vg || {}, Eg = Ml.VITE_API_BASE || "", Sg = 15e3;

function kg() {
    return xe(Ui)
}

function Pd(e) {
    e ? _n(Ui, e) : qn(Ui)
}

function xg(e) {
    try {
        const t = e.split(".")[1];
        if (!t) return 0;
        const n = atob(t.replace(/-/g, "+").replace(/_/g, "/")),
            {
                exp: r
            } = JSON.parse(n);
        return typeof r == "number" ? r : 0
    } catch {
        return 0
    }
}

function _g(e) {
    const t = xg(e);
    return t ? t - Math.floor(Date.now() / 1e3) < wg : !0
}

function Cg(e, t) {
    try {
        const n = atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"));
        return JSON.parse(n)[t]
    } catch {
        return
    }
}
let Es = !1;

function Ss(e) {
    if (!xe(Cd)) return !1;
    const n = Ml.VITE_PROJECT_ID;
    return n ? Cg(e, "agp") !== n : !1
}
let Dn = null;
async function Pg() {
    let e;
    try {
        e = Uu()
    } catch {
        return null
    }
    if (!e) return null;
    try {
        const t = { ...Zl(),
                "X-Whacka-UID": e,
                "Content-Type": "application/json"
            },
            n = xe(Cd);
        n && (t["X-Whacka-Gate"] = n);
        const r = Ml.VITE_PREVIEW_TOKEN;
        r && (t["X-Whacka-Preview"] = r);
        const l = await ql(`${Eg}/api/auth/guest-token`, {
            method: "POST",
            headers: t,
            body: JSON.stringify({
                projectId: Ml.VITE_PROJECT_ID
            })
        }, {
            timeoutMs: Sg,
            route: "auth/guest-token"
        });
        if (!l.ok) return null;
        const {
            supabaseToken: o
        } = await l.json();
        return o || null
    } catch {
        return null
    }
}
async function qg() {
    const e = kg();
    return e && !_g(e) && (!Ss(e) || Es) ? e : Dn || (Dn = (async () => {
        try {
            const t = await Pg();
            return t && (Pd(t), Es = Ss(t)), t
        } finally {
            Dn = null
        }
    })(), Dn)
}

function Nd(e) {
    Pd(e)
}
const Ng = 1500,
    Tg = 12e3,
    ks = {
        en: "This browser is blocking the app from saving data on this device, so you'll be signed out each time you reopen it. Allow site data in the browser settings to keep your session.",
        ar: "المتصفح يمنع التطبيق من حفظ البيانات على هذا الجهاز، لذلك سيتم تسجيل خروجك في كل مرة تفتحه فيها. اسمح بحفظ بيانات المواقع من إعدادات المتصفح للحفاظ على جلستك."
    },
    Rg = `
  :host {
    position: fixed;
    bottom: max(8px, env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    pointer-events: none;
    max-width: min(92vw, 420px);
  }
  .chip {
    font: 500 13px/1.35 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    color: #FFFFFF;
    background: rgba(24, 24, 27, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 9px 13px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
    text-align: center;
    opacity: 0;
    transition: opacity 180ms ease;
  }
  .chip.in { opacity: 1; }
  @media (prefers-reduced-motion: reduce) { .chip { transition: none; } }
`;
let It = null;

function Ig() {
    if (It || typeof document > "u" || !document.body) return;
    const e = Qt() === "ar";
    It = document.createElement("div"), It.dir = e ? "rtl" : "ltr";
    const t = It.attachShadow({
            mode: "closed"
        }),
        n = document.createElement("style");
    n.textContent = Rg, t.appendChild(n);
    const r = document.createElement("div");
    r.className = "chip", r.setAttribute("role", "status"), r.setAttribute("aria-live", "polite"), r.textContent = e ? ks.ar : ks.en, t.appendChild(r), document.body.appendChild(It), requestAnimationFrame(() => {
        try {
            r.classList.add("in")
        } catch {}
    }), setTimeout(() => {
        try {
            It.remove()
        } catch {}
        It = null
    }, Tg)
}

function Mg() {
    try {
        if (typeof window > "u" || window.self !== window.top || _0()) return;
        setTimeout(Ig, Ng)
    } catch {}
}
const bl = "_whacka_badge_pro_hidden";
let He = (() => {
    try {
        return localStorage.getItem(bl) === "1"
    } catch {
        return !1
    }
})();
const Ll = new Set;
let jn = null;

function Lg() {
    return He
}

function Og() {
    try {
        return localStorage.getItem(bl) !== null
    } catch {
        return !1
    }
}

function Ag(e) {
    return Ll.add(e), () => Ll.delete(e)
}

function zg() {
    return jn || (jn = fetch("/api/app/f97206ce-006c-49ea-b2b9-e67c13f91779/badge").then(n => n.ok ? n.json() : null).then(n => {
        if (!n) return He;
        const r = !!n.hideBadge;
        try {
            localStorage.setItem(bl, r ? "1" : "0")
        } catch {}
        return r !== He && (He = r, Ll.forEach(l => {
            try {
                l(He)
            } catch {}
        })), He
    }).catch(() => (jn = null, He)), jn)
}
try {
    typeof window < "u" && window.self !== window.top && window.addEventListener("message", e => {
        try {
            if (e.source !== window.parent) return;
            const n = new URL(e.origin).hostname;
            if (!(n.endsWith("whacka.app") || n.includes("localhost"))) return
        } catch {
            return
        }
        if (!e.data || e.data.type !== "whacka-set-branding") return;
        const t = !!e.data.hideBadge;
        try {
            localStorage.setItem(bl, t ? "1" : "0")
        } catch {}
        t !== He && (He = t, Ll.forEach(n => {
            try {
                n(He)
            } catch {}
        }))
    })
} catch {}
const Dg = 512;

function jg(e) {
    return typeof e != "string" || !e || e.length > Dg || e[0] !== "/" || e[1] !== "?" && e[1] !== "#" || /[\u0000-\u001f\u007f]/.test(e) ? null : e
}

function Fg(e) {
    const t = {
        matched: !1,
        code: null,
        to: null
    };
    if (typeof e != "string" || !e) return t;
    const n = new URLSearchParams(e.replace(/^#/, "")),
        r = n.get("wk_code"),
        l = n.get("wk_to");
    return t.matched = r !== null || l !== null, t.code = r || null, t.to = jg(l), t
}
const Ug = "__whacka_auth_token",
    $g = "__whacka_auth_user";

function Td() {
    try {
        return Uu() || null
    } catch {
        return null
    }
}

function Rd() {
    try {
        return !!(xe(Ug) && xe($g))
    } catch {
        return !1
    }
}
let Io = Td(),
    Mo = Rd(),
    Fn = null,
    xs = 0,
    $i = 0;
const Bi = new Set;

function Bg() {
    const e = Td();
    if (e !== Io) {
        Mo && Fn === null && (Fn = Io), Io = e, Mo = Rd(), xs++, Mo && Fn !== null && (e !== Fn && $i++, Fn = null);
        for (const t of [...Bi]) try {
            t({
                epoch: xs,
                accountEpoch: $i
            })
        } catch {}
    }
}

function Vg(e) {
    return typeof e == "function" && Bi.add(e), () => Bi.delete(e)
}

function _s() {
    return $i
}
L0(() => Bg());
const Cs = {
    ar: {
        private: "تطبيق خاص",
        title: "هذا التطبيق خاص",
        desc: "أدخل رمز الدخول للمتابعة",
        placeholder: "رمز الدخول",
        enter: "دخول",
        wrong: "رمز غير صحيح. حاول مرة أخرى.",
        tooMany: "محاولات كثيرة. انتظر دقيقة ثم حاول مرة أخرى.",
        offline: "تعذّر الوصول إلى الخادم. تحقّق من اتصالك بالإنترنت.",
        failed: "حدث خطأ ما. حاول مرة أخرى.",
        welcome: "أهلاً بك",
        remembered: "سنتذكّر هذا الجهاز.",
        opening: "جارٍ الفتح…",
        hint: "لا تملك رمزًا؟ اسأل المالك.",
        stealthTitle: "تطبيق خاص"
    },
    en: {
        private: "Private",
        title: "This app is private",
        desc: "Enter your access code",
        placeholder: "Access code",
        enter: "Enter",
        wrong: "Wrong code. Try again.",
        tooMany: "Too many tries. Wait a minute and try again.",
        offline: "Can't reach the server. Check your connection.",
        failed: "Something went wrong. Try again.",
        welcome: "You're in",
        remembered: "We'll remember this device.",
        opening: "Opening…",
        hint: "Need a code? Ask the owner.",
        stealthTitle: "Private app"
    }
};

function Wg(e) {
    return e ? e.status === 403 || e.code === "INVALID_CODE" || e.code === "FORBIDDEN" ? "wrong" : e.status === 429 || e.code === "RATE_LIMITED" || e.code === "DAILY_LIMIT" ? "tooMany" : !e.status && (e.code === "TIMEOUT" || e.code === "NETWORK") ? "offline" : "failed" : "failed"
}

function Hg({
    status: e = {}
}) {
    const [t] = R.useState(Qt), n = Cs[t] || Cs.en, r = V0(t), l = !!e.stealth, o = e.themeColor && /^#?[0-9a-fA-F]{3,8}$/.test(e.themeColor) ? e.themeColor[0] === "#" ? e.themeColor : `#${e.themeColor}` : "#4F46E5", i = "#1c1a17", [a, u] = R.useState(""), [s, c] = R.useState(!1), [f, d] = R.useState(!1), [y, g] = R.useState("");
    async function v(S) {
        if (S.preventDefault(), s || !a.trim()) return;
        c(!0), g("");
        let _;
        try {
            _ = await kd(a.trim())
        } catch (N) {
            _ = {
                ok: !1,
                code: N && N.code || "NETWORK"
            }
        }
        _ && _.ok ? (d(!0), setTimeout(() => window.location.reload(), 650)) : (g(n[Wg(_)]), c(!1))
    }
    const w = l ? i : o,
        m = {
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px 28px",
            boxSizing: "border-box",
            direction: r ? "rtl" : "ltr",
            background: l ? "#ffffff" : `radial-gradient(130% 70% at 50% 6%, ${nl(o,.13)} 0%, #ffffff 62%)`,
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            color: "#1a1613"
        },
        p = {
            width: 64,
            height: 64,
            borderRadius: 17,
            display: "grid",
            placeItems: "center",
            marginBottom: 14,
            color: "#fff",
            fontWeight: 750,
            fontSize: 26,
            overflow: "hidden",
            background: w,
            boxShadow: `0 12px 26px -10px ${nl(w,.55)}`
        },
        h = {
            width: "100%",
            maxWidth: 280,
            height: 50,
            borderRadius: 13,
            boxSizing: "border-box",
            border: `1.5px solid ${y?"#dc2626":"#e7e4dd"}`,
            background: y ? "#fbe9e9" : "#fff",
            textAlign: "center",
            fontSize: 17,
            fontWeight: 650,
            letterSpacing: "0.12em",
            color: "#1a1613",
            outline: "none"
        },
        E = {
            width: "100%",
            maxWidth: 280,
            height: 50,
            marginTop: 12,
            border: "none",
            borderRadius: 13,
            background: w,
            color: "#fff",
            fontSize: 15,
            fontWeight: 680,
            cursor: "pointer",
            opacity: s ? .7 : 1,
            boxShadow: `0 10px 22px -10px ${nl(w,.7)}`
        };
    return f ? x.jsxs("div", {
        style: m,
        children: [x.jsx(Kg, {
            color: w
        }), x.jsx("p", {
            style: {
                fontSize: 18,
                fontWeight: 720,
                margin: "0 0 5px"
            },
            children: n.welcome
        }), x.jsx("p", {
            style: {
                fontSize: 13,
                color: "#78746c",
                margin: 0
            },
            children: n.remembered
        })]
    }) : x.jsxs("div", {
        style: m,
        children: [l ? x.jsx("div", {
            style: p,
            "aria-hidden": !0,
            children: "🔒"
        }) : e.appIcon ? x.jsx("img", {
            src: e.appIcon,
            alt: "",
            style: p
        }) : x.jsx("div", {
            style: p,
            "aria-hidden": !0,
            children: (e.appName || "A").charAt(0).toUpperCase()
        }), !l && e.appName && x.jsx("p", {
            style: {
                fontSize: 16,
                fontWeight: 700,
                margin: "0 0 22px"
            },
            children: e.appName
        }), !l && x.jsxs("span", {
            style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "#78746c",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid #e7e4dd",
                borderRadius: 999,
                padding: "4px 11px",
                marginBottom: 16
            },
            children: ["🔒 ", n.private]
        }), x.jsx("p", {
            style: {
                fontSize: 18,
                fontWeight: 720,
                margin: "0 0 5px"
            },
            children: l ? n.stealthTitle : n.title
        }), x.jsx("p", {
            style: {
                fontSize: 13,
                color: "#78746c",
                margin: "0 0 22px"
            },
            children: n.desc
        }), x.jsxs("form", {
            onSubmit: v,
            style: {
                width: "100%",
                maxWidth: 280,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [x.jsx("input", {
                value: a,
                onChange: S => {
                    u(S.target.value), y && g("")
                },
                placeholder: n.placeholder,
                autoCapitalize: "characters",
                autoCorrect: "off",
                spellCheck: !1,
                style: h,
                "aria-label": n.placeholder
            }), y && x.jsx("p", {
                style: {
                    color: "#dc2626",
                    fontSize: 12.5,
                    margin: "8px 0 0"
                },
                children: y
            }), x.jsx("button", {
                type: "submit",
                disabled: s || !a.trim(),
                style: E,
                children: s ? n.opening : n.enter
            })]
        }), !l && x.jsx("p", {
            style: {
                fontSize: 11.5,
                color: "#a8a399",
                marginTop: 20,
                maxWidth: 240,
                lineHeight: 1.45
            },
            children: n.hint
        })]
    })
}

function Kg({
    color: e
}) {
    return x.jsx("div", {
        style: {
            width: 34,
            height: 34,
            borderRadius: "50%",
            marginBottom: 18,
            border: `3px solid ${nl(e,.2)}`,
            borderTopColor: e,
            animation: "wk-gate-spin 0.8s linear infinite"
        },
        children: x.jsx("style", {
            children: "@keyframes wk-gate-spin{to{transform:rotate(360deg)}}"
        })
    })
}

function nl(e, t) {
    try {
        let n = e.replace("#", "");
        n.length === 3 && (n = n.split("").map(l => l + l).join(""));
        const r = parseInt(n.slice(0, 6), 16);
        return `rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`
    } catch {
        return `rgba(79,70,229,${t})`
    }
}(() => {
    function e() {
        try {
            const t = getComputedStyle(document.documentElement);
            let n = t.getPropertyValue("--color-bg").trim();
            if (n || (n = t.getPropertyValue("--color-primary").trim()), n) {
                const r = n.split(/\s+/).map(Number);
                if (r.length === 3 && r.every(l => !isNaN(l))) {
                    const l = "#" + r.map(i => i.toString(16).padStart(2, "0")).join(""),
                        o = document.querySelector('meta[name="theme-color"]');
                    o && o.setAttribute("content", l)
                }
            }
        } catch {}
    }
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(e)) : requestAnimationFrame(e)
})();
(() => {
    const e = window.visualViewport,
        t = document.getElementById("root");
    if (!e || !t) return;
    const n = document.documentElement,
        r = () => {
            const o = Math.max(0, Math.round(window.innerHeight - e.height));
            n.style.setProperty("--keyboard-height", o + "px"), n.style.setProperty("--visual-height", e.height + "px"), e.offsetTop === 0 && e.height >= window.innerHeight - 1 ? t.style.height = "" : t.style.height = e.height + "px"
        };
    e.addEventListener("resize", r), e.addEventListener("scroll", r);
    const l = () => {
        window.scrollY !== 0 && window.scrollTo(0, 0), document.documentElement.scrollTop !== 0 && (document.documentElement.scrollTop = 0), document.body.scrollTop !== 0 && (document.body.scrollTop = 0)
    };
    window.addEventListener("scroll", l, {
        passive: !1
    }), document.addEventListener("touchend", o => {
        const i = o.target;
        !(i.tagName === "TEXTAREA" || i.tagName === "INPUT" && /^(text|search|url|email|password|number|tel)$/.test(i.type)) || document.activeElement === i || (o.preventDefault(), i.focus({
            preventScroll: !0
        }))
    }, !1), r()
})();
try {
    sessionStorage.removeItem("_pr")
} catch {}
window.addEventListener("beforeinstallprompt", e => e.preventDefault());
$0();
q0();
og();
Mg();
(() => {
    const e = "f97206ce-006c-49ea-b2b9-e67c13f91779",
        t = "",
        n = navigator.userAgent || "",
        r = /iPad|iPhone|iPod/.test(n) || navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1,
        l = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(n) || (navigator.maxTouchPoints || 0) > 1 && window.innerWidth < 1024,
        o = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === !0;
    fetch(`${t}/api/app/${e}/session`, {
        method: "POST",
        headers: Zl({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            isStandalone: o,
            isMobile: l,
            isIOS: r
        })
    }).catch(() => {})
})();

function Qg(e, t) {
    try {
        if (document.getElementById("_wk_update_pill")) return;
        const n = Qt() === "ar",
            r = document.createElement("div");
        r.id = "_wk_update_pill", r.dir = n ? "rtl" : "ltr", r.style.cssText = "position:fixed;left:50%;transform:translateX(-50%);bottom:max(16px, env(safe-area-inset-bottom, 16px));z-index:99999;display:flex;align-items:center;max-width:calc(100vw - 32px);background:rgba(0,0,0,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:#fff;border-radius:20px;box-shadow:0 2px 12px rgba(0,0,0,0.18);font-family:system-ui,-apple-system,sans-serif;font-size:12px;";
        const l = document.createElement("button");
        l.type = "button", l.textContent = n ? "تم التحديث — اضغط للتحديث" : "Updated — tap to refresh", l.style.cssText = "background:none;border:none;color:inherit;font:inherit;cursor:pointer;padding:9px 4px;padding-inline-start:14px;", l.addEventListener("click", e);
        const o = document.createElement("button");
        o.type = "button", o.setAttribute("aria-label", n ? "إغلاق" : "Dismiss"), o.textContent = "✕", o.style.cssText = "background:none;border:none;color:rgba(255,255,255,0.7);font:inherit;font-size:11px;cursor:pointer;padding:9px 8px;padding-inline-end:13px;", o.addEventListener("click", () => {
            if (r.remove(), typeof t == "function") try {
                t()
            } catch {}
        }), r.appendChild(l), r.appendChild(o), document.body.appendChild(r)
    } catch {}
}
const Id = (() => {
    var e, t;
    try {
        return !!((t = (e = window.Capacitor) == null ? void 0 : e.isNativePlatform) != null && t.call(e))
    } catch {
        return !1
    }
})();
var Ts, Rs, Wr, Is;
if (Id) {
    setTimeout(() => {
        var e, t, n, r;
        try {
            (r = (n = (t = (e = window.Capacitor) == null ? void 0 : e.Plugins) == null ? void 0 : t.CapacitorUpdater) == null ? void 0 : n.notifyAppReady) == null || r.call(n)
        } catch {}
    }, 0);
    try {
        (Is = (Wr = (Rs = (Ts = window.Capacitor) == null ? void 0 : Ts.Plugins) == null ? void 0 : Rs.App) == null ? void 0 : Wr.addListener) == null || Is.call(Wr, "appUrlOpen", e => {
            var t, n;
            try {
                const r = String((e == null ? void 0 : e.url) || "").match(/[#&?]wk_code=([^&]+)/);
                if (!r) return;
                try {
                    const l = (n = (t = window.Capacitor.Plugins.Browser) == null ? void 0 : t.close) == null ? void 0 : n.call(t);
                    l && typeof l.catch == "function" && l.catch(() => {})
                } catch {}
                Ad(decodeURIComponent(r[1]))
            } catch {}
        })
    } catch {}
}
try {
    "serviceWorker" in navigator && window.self === window.top && !Id && window.addEventListener("load", () => {
        let e = !navigator.serviceWorker.controller,
            t = !1;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
            if (e) {
                e = !1;
                return
            }
            if (t) return;
            t = !0;
            const n = () => window.location.reload();
            if (document.visibilityState === "hidden") {
                n();
                return
            }
            const r = () => {
                document.visibilityState === "hidden" && n()
            };
            document.addEventListener("visibilitychange", r), Qg(n, () => {
                document.removeEventListener("visibilitychange", r), t = !1
            })
        }), navigator.serviceWorker.register("/sw.js").then(n => {
            document.addEventListener("visibilitychange", () => {
                document.visibilityState === "visible" && n.update().catch(() => {})
            })
        }).catch(() => {})
    })
} catch {}
const Ps = {
    fontFamily: "'Helvetica Neue', Helvetica, system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "-0.02em",
    lineHeight: 1.6
};

function Lo() {
    return Qt() === "ar"
}

function Yg() {
    const [e, t] = z.useState(() => {
        try {
            return localStorage.getItem("_whacka_badge_hidden") === "1"
        } catch {
            return !1
        }
    }), [n, r] = z.useState(Lg), [l, o] = z.useState(() => !Og()), [i, a] = z.useState(Lo);
    z.useEffect(() => {
        const y = () => a(Lo()),
            g = setTimeout(y, 900),
            v = W0(y);
        return () => {
            clearTimeout(g), v()
        }
    }, []), z.useEffect(() => (zg(), Ag(r)), []), z.useEffect(() => {
        if (!l) return;
        const y = setTimeout(() => o(!1), 1200);
        return () => clearTimeout(y)
    }, [l]);
    const u = !e && !n && !l,
        [s, c] = z.useState(0);
    if (z.useEffect(() => {
            if (!u) return;
            const y = () => {
                a(Lo());
                try {
                    const v = window.innerWidth,
                        w = window.innerHeight,
                        m = Math.min(w * .34, 200),
                        p = Math.round(w * .35);
                    let h = 0;
                    for (const E of [v * .5, v * .28, v * .72]) {
                        let S = document.elementFromPoint(Math.round(E), w - 6);
                        for (let _ = 0; S && S !== document.body && _ < 6 && !(S.closest && S.closest("[data-whacka-badge]")); _++) {
                            const N = getComputedStyle(S);
                            if (N.position === "fixed" || N.position === "sticky") {
                                const C = S.getBoundingClientRect();
                                C.bottom >= w - 16 && C.height >= 28 && C.height <= m && C.top >= w * .5 && (C.width >= v * .5 || C.width >= 48) && (h = Math.max(h, w - C.top));
                                break
                            }
                            S = S.parentElement
                        }
                    }
                    c(h > 0 ? Math.min(Math.round(h + 10), p) : 0)
                } catch {
                    c(0)
                }
            };
            y();
            const g = setTimeout(y, 900);
            return window.addEventListener("resize", y), () => {
                clearTimeout(g), window.removeEventListener("resize", y)
            }
        }, [u]), !u) return null;
    let f = "";
    try {
        const y = window.location.hostname;
        y.endsWith(".whacka.app") ? f = y.slice(0, -11) : y && y !== "whacka.app" && !/^(localhost|127\.|192\.168\.|10\.)/.test(y) && (f = y)
    } catch {}
    let d = i ? "ar" : "";
    try {
        const y = (document.documentElement.lang || "").toLowerCase();
        !d && /^pt\b/.test(y) ? d = "pt" : !d && /^es\b/.test(y) && (d = "es")
    } catch {}
    return x.jsxs("a", {
        href: `https://whacka.app/${d}?utm_source=whacka_badge${f?`&utm_campaign=${encodeURIComponent(f)}`:""}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-whacka-badge": "",
        dir: i ? "rtl" : "ltr",
        lang: i ? "ar" : "en",
        onClick: y => {
            y.stopPropagation()
        },
        style: {
            position: "fixed",
            bottom: s > 0 ? s : "max(16px, env(safe-area-inset-bottom))",
            right: 16,
            zIndex: 99998,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 0",
            paddingInlineStart: 12,
            paddingInlineEnd: 14,
            background: "rgba(32,37,92,0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "#fff",
            fontSize: 12,
            fontFamily: "system-ui, -apple-system, sans-serif",
            borderRadius: 20,
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(32,37,92,0.25)"
        },
        children: [i ? x.jsxs(x.Fragment, {
            children: [x.jsx("span", {
                style: Ps,
                children: "Whacka"
            }), x.jsx("span", {
                "aria-hidden": "true",
                style: {
                    opacity: .45,
                    lineHeight: 1
                },
                children: "·"
            }), x.jsx("span", {
                style: {
                    opacity: .85,
                    fontFamily: "system-ui, -apple-system, 'Segoe UI', 'Noto Sans Arabic', 'Noto Naskh Arabic', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.6
                },
                children: "اصنع تطبيقك"
            })]
        }) : x.jsxs(x.Fragment, {
            children: [x.jsx("span", {
                style: {
                    opacity: .7
                },
                children: "Made with"
            }), x.jsx("span", {
                style: Ps,
                children: "Whacka"
            })]
        }), x.jsx("button", {
            type: "button",
            "aria-label": i ? "إغلاق" : "Dismiss",
            onClick: y => {
                y.stopPropagation(), y.preventDefault(), t(!0);
                try {
                    localStorage.setItem("_whacka_badge_hidden", "1")
                } catch {}
            },
            style: {
                margin: -14,
                marginInlineStart: -12,
                padding: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                font: "inherit"
            },
            children: x.jsx("span", {
                style: {
                    width: 16,
                    height: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    fontSize: 10,
                    lineHeight: 1
                },
                children: "✕"
            })
        })]
    })
}
class Md extends z.Component {
    constructor() {
        super(...arguments);
        Wu(this, "state", {
            error: null
        })
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    componentDidCatch(n) {
        window.__previewReport && window.__previewReport(n.message, "react-error-boundary")
    }
    render() {
        if (this.state.error) {
            const n = Qt() === "ar";
            return x.jsxs("div", {
                dir: n ? "rtl" : "ltr",
                style: {
                    minHeight: "100dvh",
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "system-ui, -apple-system, 'Noto Sans Arabic', sans-serif",
                    background: "#fafafa",
                    color: "#18181b"
                },
                children: [x.jsx("h2", {
                    style: {
                        margin: "0 0 6px",
                        fontSize: 18,
                        fontWeight: 700
                    },
                    children: n ? "حدث خطأ ما" : "Something went wrong"
                }), x.jsx("button", {
                    onClick: () => window.location.reload(),
                    style: {
                        marginTop: 16,
                        padding: "10px 24px",
                        fontSize: 14,
                        fontWeight: 600,
                        borderRadius: 10,
                        border: "none",
                        background: "#18181b",
                        color: "#fff",
                        cursor: "pointer"
                    },
                    children: n ? "إعادة التحميل" : "Reload"
                }), x.jsxs("details", {
                    style: {
                        marginTop: 24,
                        maxWidth: 480,
                        width: "100%",
                        fontSize: 12,
                        color: "#71717a"
                    },
                    children: [x.jsx("summary", {
                        style: {
                            cursor: "pointer"
                        },
                        children: n ? "التفاصيل" : "Details"
                    }), x.jsx("pre", {
                        dir: "ltr",
                        style: {
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                            textAlign: "left",
                            fontSize: 12,
                            color: "#52525b",
                            background: "#f4f4f5",
                            padding: 12,
                            borderRadius: 8,
                            border: "1px solid #e4e4e7",
                            marginTop: 8
                        },
                        children: this.state.error.message
                    })]
                })]
            })
        }
        return this.props.children
    }
}

function Ld() {
    const e = document.getElementById("app-splash");
    if (!e) return;
    const t = () => {
        e.classList.add("hide"), setTimeout(() => e.remove(), 450)
    };
    requestAnimationFrame(() => requestAnimationFrame(t))
}
let Oo = null;

function Od() {
    return Oo || (Oo = Do.createRoot(document.getElementById("root"))), Oo
}

function Gg({
    children: e
}) {
    const [t, n] = z.useState(_s);
    return z.useEffect(() => {
        const r = Vg(({
            accountEpoch: l
        }) => {
            setTimeout(() => n(l), 0)
        });
        return n(_s()), r
    }, []), x.jsx(z.Fragment, {
        children: e
    }, t)
}

function Ao() {
    Od().render(x.jsx(z.StrictMode, {
        children: x.jsxs(Md, {
            children: [x.jsx(Gg, {
                children: x.jsx(v0, {})
            }), x.jsx(Yg, {})]
        })
    })), Ld()
}

function zo(e) {
    Od().render(x.jsx(z.StrictMode, {
        children: x.jsx(Md, {
            children: x.jsx(Hg, {
                status: e
            })
        })
    })), Ld()
}
async function Ns() {
    const e = dg();
    if (!e && cg()) {
        Ao(), ws().then(t => {
            if (t) {
                if (ji(!t.gated), !t.gated) {
                    ys();
                    return
                }
                t.unlocked || zo(t)
            }
        }).catch(() => {});
        return
    }
    try {
        if (e) try {
            await kd(e)
        } catch {}
        const t = await ws();
        if (t && ji(!t.gated), !t || !t.gated || t.unlocked) {
            t && !t.gated && ys(), Ao();
            return
        }
        zo(t)
    } catch {
        Sd() ? zo({
            gated: !0,
            unlocked: !1
        }) : Ao()
    }
}

function Ad(e, t) {
    ql("/api/auth/exchange-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            code: e
        })
    }, {
        timeoutMs: 15e3,
        route: "auth/exchange-code"
    }).then(r => r.ok ? r.json() : Promise.reject(new Error("exchange failed"))).then(({
        token: r,
        supabaseToken: l,
        user: o
    }) => {
        try {
            _n("__whacka_auth_token", r), _n("__whacka_auth_user", JSON.stringify(o))
        } catch {}
        if (l && Nd(l), x0() && typeof t == "function") {
            $d(async () => {
                const {
                    adoptSession: i
                } = await
                import ("./auth-Nw2K5Q1C.js");
                return {
                    adoptSession: i
                }
            }, []).then(({
                adoptSession: i
            }) => i(o || null)).catch(() => {}).finally(t);
            return
        }
        window.location.reload()
    }).catch(r => {
        console.error("[auth] Google sign-in exchange failed:", r), typeof t == "function" && t()
    })
}(function() {
    let t = null;
    try {
        const n = window.__wkOAuth,
            r = n || Fg(location.hash);
        if (n || r.matched) {
            t = r.code || null, n || history.replaceState(null, "", r.to || location.pathname + location.search);
            try {
                delete window.__wkOAuth
            } catch {}
        }
    } catch {}
    if (!t) {
        Ns();
        return
    }
    Ad(t, Ns)
})();
export {
    xe as a, qg as g, Bg as n, L0 as o, A0 as s
};