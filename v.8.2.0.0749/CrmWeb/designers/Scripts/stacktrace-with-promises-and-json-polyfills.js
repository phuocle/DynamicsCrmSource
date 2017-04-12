!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window
            ? window
            : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.StackTrace = e()
    }
}(function() {
    var e;
    return function t(e, n, r) {
        function o(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(a, !0);
                    if (i) return i(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var l = n[a] = { exports: {} };
                e[a][0].call(l.exports,
                    function(t) {
                        var n = e[a][1][t];
                        return o(n ? n : t)
                    },
                    l,
                    l.exports,
                    t,
                    e,
                    n,
                    r)
            }
            return n[a].exports
        }

        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
            1: [
                function(t, n, r) {
                    !function(o, i) {
                        "use strict";
                        "function" == typeof e && e.amd
                            ? e("error-stack-parser", ["stackframe"], i)
                            : "object" == typeof r
                            ? n.exports = i(t("stackframe"))
                            : o.ErrorStackParser = i(o.StackFrame)
                    }(this,
                        function(e) {
                            "use strict";

                            function t(e, t, n) {
                                if ("function" == typeof Array.prototype.map) return e.map(t, n);
                                for (var r = new Array(e.length), o = 0; o < e.length; o++) r[o] = t.call(n, e[o]);
                                return r
                            }

                            function n(e, t, n) {
                                if ("function" == typeof Array.prototype.filter) return e.filter(t, n);
                                for (var r = [], o = 0; o < e.length; o++) t.call(n, e[o]) && r.push(e[o]);
                                return r
                            }

                            function r(e, t) {
                                if ("function" == typeof Array.prototype.indexOf) return e.indexOf(t);
                                for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                                return-1
                            }

                            var o = /(^|@)\S+\:\d+/,
                                i = /^\s*at .*(\S+\:\d+|\(native\))/m,
                                a = /^(eval@)?(\[native code\])?$/;
                            return{
                                parse: function(e) {
                                    if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]
                                    ) return this.parseOpera(e);
                                    if (e.stack && e.stack.match(i)) return this.parseV8OrIE(e);
                                    if (e.stack) return this.parseFFOrSafari(e);
                                    throw new Error("Cannot parse given Error object")
                                },
                                extractLocation: function(e) {
                                    if (-1 === e.indexOf(":")) return[e];
                                    var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/, n = t.exec(e.replace(/[\(\)]/g, ""));
                                    return[n[1], n[2] || void 0, n[3] || void 0]
                                },
                                parseV8OrIE: function(o) {
                                    var a = n(o.stack.split("\n"), function(e) { return!!e.match(i) }, this);
                                    return t(a,
                                        function(t) {
                                            t.indexOf("(eval ") > -1 &&
                                            (t = t.replace(/eval code/g, "eval")
                                                .replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                            var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/)
                                                    .slice(1),
                                                o = this.extractLocation(n.pop()),
                                                i = n.join(" ") || void 0,
                                                a = r(["eval", "<anonymous>"], o[0]) > -1 ? void 0 : o[0];
                                            return new e(i, void 0, a, o[1], o[2], t)
                                        },
                                        this)
                                },
                                parseFFOrSafari: function(r) {
                                    var o = n(r.stack.split("\n"), function(e) { return!e.match(a) }, this);
                                    return t(o,
                                        function(t) {
                                            if (t.indexOf(" > eval") > -1 &&
                                                (t = t
                                                    .replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,
                                                        ":$1")),
                                                -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e(t);
                                            var n = t.split("@"),
                                                r = this.extractLocation(n.pop()),
                                                o = n.join("@") || void 0;
                                            return new e(o, void 0, r[0], r[1], r[2], t)
                                        },
                                        this)
                                },
                                parseOpera: function(e) {
                                    return!e.stacktrace ||
                                        e.message.indexOf("\n") > -1 &&
                                        e.message.split("\n").length > e.stacktrace.split("\n").length
                                        ? this.parseOpera9(e)
                                        : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                                },
                                parseOpera9: function(t) {
                                    for (var n = /Line (\d+).*script (?:in )?(\S+)/i,
                                        r = t.message.split("\n"),
                                        o = [],
                                        i = 2,
                                        a = r.length;
                                        a > i;
                                        i += 2) {
                                        var s = n.exec(r[i]);
                                        s && o.push(new e(void 0, void 0, s[2], s[1], void 0, r[i]))
                                    }
                                    return o
                                },
                                parseOpera10: function(t) {
                                    for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                                        r = t.stacktrace.split("\n"),
                                        o = [],
                                        i = 0,
                                        a = r.length;
                                        a > i;
                                        i += 2) {
                                        var s = n.exec(r[i]);
                                        s && o.push(new e(s[3] || void 0, void 0, s[2], s[1], void 0, r[i]))
                                    }
                                    return o
                                },
                                parseOpera11: function(r) {
                                    var i = n(r.stack.split("\n"),
                                        function(e) { return!!e.match(o) && !e.match(/^Error created at/) },
                                        this);
                                    return t(i,
                                        function(t) {
                                            var n,
                                                r = t.split("@"),
                                                o = this.extractLocation(r.pop()),
                                                i = r.shift() || "",
                                                a = i.replace(/<anonymous function(: (\w+))?>/, "$2")
                                                    .replace(/\([^\)]*\)/g, "") ||
                                                    void 0;
                                            i.match(/\(([^\)]*)\)/) && (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                            var s = void 0 === n || "[arguments not available]" === n
                                                ? void 0
                                                : n.split(",");
                                            return new e(a, s, o[0], o[1], o[2], t)
                                        },
                                        this)
                                }
                            }
                        })
                }, { stackframe: 14 }
            ],
            2: [
                function(t, n, r) {
                    (function(r, o) {
                        (function() {
                            "use strict";

                            function i(e) { return"function" == typeof e || "object" == typeof e && null !== e }

                            function a(e) { return"function" == typeof e }

                            function s(e) { Z = e }

                            function u(e) { V = e }

                            function c() { return function() { r.nextTick(g) } }

                            function l() { return function() { z(g) } }

                            function f() {
                                var e = 0, t = new Q(g), n = document.createTextNode("");
                                return t.observe(n, { characterData: !0 }), function() { n.data = e = ++e % 2 }
                            }

                            function p() {
                                var e = new MessageChannel;
                                return e.port1.onmessage = g, function() { e.port2.postMessage(0) }
                            }

                            function h() { return function() { setTimeout(g, 1) } }

                            function g() {
                                for (var e = 0; W > e; e += 2) {
                                    var t = ne[e], n = ne[e + 1];
                                    t(n), ne[e] = void 0, ne[e + 1] = void 0
                                }
                                W = 0
                            }

                            function d() {
                                try {
                                    var e = t, n = e("vertx");
                                    return z = n.runOnLoop || n.runOnContext, l()
                                } catch (r) {
                                    return h()
                                }
                            }

                            function m(e, t) {
                                var n = this, r = n._state;
                                if (r === ae && !e || r === se && !t) return this;
                                var o = new this.constructor(v), i = n._result;
                                if (r) {
                                    var a = arguments[r - 1];
                                    V(function() { P(r, o, a, i) })
                                } else j(n, o, e, t);
                                return o
                            }

                            function y(e) {
                                var t = this;
                                if (e && "object" == typeof e && e.constructor === t) return e;
                                var n = new t(v);
                                return E(n, e), n
                            }

                            function v() {}

                            function _() { return new TypeError("You cannot resolve a promise with itself") }

                            function w() {
                                return new TypeError("A promises callback cannot return that same promise.")
                            }

                            function b(e) {
                                try {
                                    return e.then
                                } catch (t) {
                                    return ue.error = t, ue
                                }
                            }

                            function A(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (o) {
                                    return o
                                }
                            }

                            function C(e, t, n) {
                                V(function(e) {
                                        var r = !1,
                                            o = A(n,
                                                t,
                                                function(n) { r || (r = !0, t !== n ? E(e, n) : N(e, n)) },
                                                function(t) { r || (r = !0, T(e, t)) },
                                                "Settle: " + (e._label || " unknown promise"));
                                        !r && o && (r = !0, T(e, o))
                                    },
                                    e)
                            }

                            function O(e, t) {
                                t._state === ae
                                    ? N(e, t._result)
                                    : t._state === se
                                    ? T(e, t._result)
                                    : j(t, void 0, function(t) { E(e, t) }, function(t) { T(e, t) })
                            }

                            function S(e, t, n) {
                                t.constructor === e.constructor && n === re && constructor.resolve === oe
                                    ? O(e, t)
                                    : n === ue ? T(e, ue.error) : void 0 === n ? N(e, t) : a(n) ? C(e, t, n) : N(e, t)
                            }

                            function E(e, t) { e === t ? T(e, _()) : i(t) ? S(e, t, b(t)) : N(e, t) }

                            function L(e) { e._onerror && e._onerror(e._result), M(e) }

                            function N(e, t) {
                                e._state === ie &&
                                    (e._result = t, e._state = ae, 0 !== e._subscribers.length && V(M, e))
                            }

                            function T(e, t) { e._state === ie && (e._state = se, e._result = t, V(L, e)) }

                            function j(e, t, n, r) {
                                var o = e._subscribers, i = o.length;
                                e
                                    ._onerror = null, o[i] = t, o[i + ae] = n, o[i + se] = r,
                                0 === i && e._state && V(M, e)
                            }

                            function M(e) {
                                var t = e._subscribers, n = e._state;
                                if (0 !== t.length) {
                                    for (var r, o, i = e._result, a = 0;
                                        a < t.length;
                                        a += 3
                                    ) r = t[a], o = t[a + n], r ? P(n, r, o, i) : o(i);
                                    e._subscribers.length = 0
                                }
                            }

                            function k() { this.error = null }

                            function x(e, t) {
                                try {
                                    return e(t)
                                } catch (n) {
                                    return ce.error = n, ce
                                }
                            }

                            function P(e, t, n, r) {
                                var o, i, s, u, c = a(n);
                                if (c) {
                                    if (o = x(n, r), o === ce ? (u = !0, i = o.error, o = null) : s = !0, t === o
                                    ) return void T(t, w())
                                } else o = r, s = !0;
                                t._state !== ie ||
                                    (c && s ? E(t, o) : u ? T(t, i) : e === ae ? N(t, o) : e === se && T(t, o))
                            }

                            function R(e, t) {
                                try {
                                    t(function(t) { E(e, t) }, function(t) { T(e, t) })
                                } catch (n) {
                                    T(e, n)
                                }
                            }

                            function F(e) { return new de(this, e).promise }

                            function U(e) {
                                function t(e) { E(o, e) }

                                function n(e) { T(o, e) }

                                var r = this, o = new r(v);
                                if (!H(e)) return T(o, new TypeError("You must pass an array to race.")), o;
                                for (var i = e
                                             .length,
                                a = 0;
                                o._state === ie && i > a;
                                a++) j(r.resolve(e[a]), void 0, t, n);
                                return o
                            }

                            function G(e) {
                                var t = this, n = new t(v);
                                return T(n, e), n
                            }

                            function $() {
                                throw new
                                    TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }

                            function D() {
                                throw new
                                    TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }

                            function B(e) {
                                this._id = he++, this._state = void 0, this._result = void 0, this
                                    ._subscribers = [], v !== e &&
                                    ("function" != typeof e && $(), this instanceof B ? R(this, e) : D())
                            }

                            function J(e, t) {
                                this._instanceConstructor = e, this
                                    .promise = new e(v), Array.isArray(t)
                                    ? (this._input = t, this.length = t.length, this._remaining = t.length, this
                                        ._result = new Array(this
                                            .length), 0 === this.length
                                        ? N(this.promise, this._result)
                                        : (this.length = this.length || 0, this
                                            ._enumerate(), 0 === this._remaining && N(this.promise, this._result)))
                                    : T(this.promise, this._validationError())
                            }

                            function q() {
                                var e;
                                if ("undefined" != typeof o) e = o;
                                else if ("undefined" != typeof self) e = self;
                                else
                                    try {
                                        e = Function("return this")()
                                    } catch (t) {
                                        throw new
                                            Error("polyfill failed because global object is unavailable in this environment")
                                    }
                                var n = e.Promise;
                                (!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) &&
                                    (e.Promise = ge)
                            }

                            var I;
                            I = Array.isArray
                                ? Array.isArray
                                : function(e) { return"[object Array]" === Object.prototype.toString.call(e) };
                            var z,
                                Z,
                                Y,
                                H = I,
                                W = 0,
                                V = function(e, t) { ne[W] = e, ne[W + 1] = t, W += 2, 2 === W && (Z ? Z(g) : Y()) },
                                X = "undefined" != typeof window ? window : void 0,
                                K = X || {},
                                Q = K.MutationObserver || K.WebKitMutationObserver,
                                ee = "undefined" != typeof r && "[object process]" === {}.toString.call(r),
                                te = "undefined" != typeof Uint8ClampedArray &&
                                    "undefined" != typeof importScripts &&
                                    "undefined" != typeof MessageChannel,
                                ne = new Array(1e3);
                            Y = ee ? c() : Q ? f() : te ? p() : void 0 === X && "function" == typeof t ? d() : h();
                            var re = m,
                                oe = y,
                                ie = void 0,
                                ae = 1,
                                se = 2,
                                ue = new k,
                                ce = new k,
                                le = F,
                                fe = U,
                                pe = G,
                                he = 0,
                                ge = B;
                            B.all = le, B.race = fe, B.resolve = oe, B.reject = pe, B._setScheduler = s, B
                                ._setAsap = u, B
                                ._asap = V, B.prototype = {
                                constructor: B,
                                then: re,
                                "catch": function(e) { return this.then(null, e) }
                            };
                            var de = J;
                            J.prototype._validationError = function() {
                                return new Error("Array Methods must be provided an Array")
                            }, J.prototype._enumerate = function() {
                                for (var e = this
                                             .length,
                                    t = this._input,
                                    n = 0;
                                    this._state === ie && e > n;
                                    n++) this._eachEntry(t[n], n)
                            }, J.prototype._eachEntry = function(e, t) {
                                var n = this._instanceConstructor, r = n.resolve;
                                if (r === oe) {
                                    var o = b(e);
                                    if (o === re && e._state !== ie) this._settledAt(e._state, t, e._result);
                                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                    else if (n === ge) {
                                        var i = new n(v);
                                        S(i, e, o), this._willSettleAt(i, t)
                                    } else this._willSettleAt(new n(function(t) { t(e) }), t)
                                } else this._willSettleAt(r(e), t)
                            }, J.prototype._settledAt = function(e, t, n) {
                                var r = this.promise;
                                r
                                        ._state ===
                                        ie &&
                                        (this
                                            ._remaining--, e === se ? T(r, n) : this._result[t] = n),
                                    0 === this._remaining && N(r, this._result)
                            }, J.prototype._willSettleAt = function(e, t) {
                                var n = this;
                                j(e,
                                    void 0,
                                    function(e) { n._settledAt(ae, t, e) },
                                    function(e) { n._settledAt(se, t, e) })
                            };
                            var me = q, ye = { Promise: ge, polyfill: me };
                            "function" == typeof e && e.amd
                                ? e(function() { return ye })
                                : "undefined" != typeof n && n.exports
                                ? n.exports = ye
                                : "undefined" != typeof this && (this.ES6Promise = ye), me()
                        }).call(this)
                    }).call(this,
                        t("_process"),
                        "undefined" != typeof global
                        ? global
                        : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, { _process: 4 }
            ],
            3: [
                function(t, n, r) {
                    (function(t) {
                        (function() {
                            function o(e, t) {
                                function n(e) {
                                    if (n[e] !== m) return n[e];
                                    var o;
                                    if ("bug-string-char-index" == e) o = "a" != "a"[0];
                                    else if ("json" == e) o = n("json-stringify") && n("json-parse");
                                    else {
                                        var a, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if ("json-stringify" == e) {
                                            var u = t.stringify, l = "function" == typeof u && _;
                                            if (l) {
                                                (a = function() { return 1 }).toJSON = a;
                                                try {
                                                    l = "0" === u(0) &&
                                                        "0" === u(new r) &&
                                                        '""' == u(new i) &&
                                                        u(v) === m &&
                                                        u(m) === m &&
                                                        u() === m &&
                                                        "1" === u(a) &&
                                                        "[1]" == u([a]) &&
                                                        "[null]" == u([m]) &&
                                                        "null" == u(null) &&
                                                        "[null,null,null]" == u([m, v, null]) &&
                                                        u({ a: [a, !0, !1, null, "\x00\b\n\f\r	"] }) == s &&
                                                        "1" === u(null, a) &&
                                                        "[\n 1,\n 2\n]" == u([1, 2], null, 1) &&
                                                        '"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) &&
                                                        '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) &&
                                                        '"-000001-01-01T00:00:00.000Z"' == u(new c(-621987552e5)) &&
                                                        '"1969-12-31T23:59:59.999Z"' == u(new c(-1))
                                                } catch (f) {
                                                    l = !1
                                                }
                                            }
                                            o = l
                                        }
                                        if ("json-parse" == e) {
                                            var p = t.parse;
                                            if ("function" == typeof p)
                                                try {
                                                    if (0 === p("0") && !p(!1)) {
                                                        a = p(s);
                                                        var h = 5 == a.a.length && 1 === a.a[0];
                                                        if (h) {
                                                            try {
                                                                h = !p('"	"')
                                                            } catch (f) {
                                                            }
                                                            if (h)
                                                                try {
                                                                    h = 1 !== p("01")
                                                                } catch (f) {
                                                                }
                                                            if (h)
                                                                try {
                                                                    h = 1 !== p("1.")
                                                                } catch (f) {
                                                                }
                                                        }
                                                    }
                                                } catch (f) {
                                                    h = !1
                                                }
                                            o = h
                                        }
                                    }
                                    return n[e] = !!o
                                }

                                e || (e = u.Object()), t || (t = u.Object());
                                var r = e.Number || u.Number,
                                    i = e.String || u.String,
                                    s = e.Object || u.Object,
                                    c = e.Date || u.Date,
                                    l = e.SyntaxError || u.SyntaxError,
                                    f = e.TypeError || u.TypeError,
                                    p = e.Math || u.Math,
                                    h = e.JSON || u.JSON;
                                "object" == typeof h && h && (t.stringify = h.stringify, t.parse = h.parse);
                                var g, d, m, y = s.prototype, v = y.toString, _ = new c(-0xc782b5b800cec);
                                try {
                                    _ = -109252 == _.getUTCFullYear() &&
                                        0 === _.getUTCMonth() &&
                                        1 === _.getUTCDate() &&
                                        10 == _.getUTCHours() &&
                                        37 == _.getUTCMinutes() &&
                                        6 == _.getUTCSeconds() &&
                                        708 == _.getUTCMilliseconds()
                                } catch (w) {
                                }
                                if (!n("json")) {
                                    var b = "[object Function]",
                                        A = "[object Date]",
                                        C = "[object Number]",
                                        O = "[object String]",
                                        S = "[object Array]",
                                        E = "[object Boolean]",
                                        L = n("bug-string-char-index");
                                    if (!_)
                                        var N = p.floor,
                                            T = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                            j = function(e, t) {
                                                return T[t] +
                                                    365 * (e - 1970) +
                                                    N((e - 1969 + (t = +(t > 1))) / 4) -
                                                    N((e - 1901 + t) / 100) +
                                                    N((e - 1601 + t) / 400)
                                            };
                                    if ((g = y.hasOwnProperty) ||
                                    (g = function(e) {
                                        var t, n = {};
                                        return(n.__proto__ = null, n.__proto__ = { toString: 1 }, n).toString != v
                                            ? g = function(e) {
                                                var t = this.__proto__, n = e in (this.__proto__ = null, this);
                                                return this.__proto__ = t, n
                                            }
                                            : (t = n.constructor, g = function(e) {
                                                var n = (this.constructor || t).prototype;
                                                return e in this && !(e in n && this[e] === n[e])
                                            }), n = null, g.call(this, e)
                                    }), d = function(e, t) {
                                        var n, r, o, i = 0;
                                        (n = function() { this.valueOf = 0 }).prototype.valueOf = 0, r = new n;
                                        for (o in r) g.call(r, o) && i++;
                                        return n = r = null, i
                                            ? d = 2 == i
                                            ? function(e, t) {
                                                var n, r = {}, o = v.call(e) == b;
                                                for (n in e)
                                                    o && "prototype" == n ||
                                                        g.call(r, n) ||
                                                        !(r[n] = 1) ||
                                                        !g.call(e, n) ||
                                                        t(n)
                                            }
                                            : function(e, t) {
                                                var n, r, o = v.call(e) == b;
                                                for (n in e)
                                                    o && "prototype" == n ||
                                                        !g.call(e, n) ||
                                                        (r = "constructor" === n) ||
                                                        t(n);
                                                (r || g.call(e, n = "constructor")) && t(n)
                                            }
                                            : (r = [
                                                "valueOf", "toString", "toLocaleString", "propertyIsEnumerable",
                                                "isPrototypeOf",
                                                "hasOwnProperty", "constructor"
                                            ], d = function(e, t) {
                                                var n,
                                                    o,
                                                    i = v.call(e) == b,
                                                    s = !i &&
                                                        "function" != typeof e.constructor &&
                                                        a[typeof e.hasOwnProperty] &&
                                                        e.hasOwnProperty ||
                                                        g;
                                                for (n in e) i && "prototype" == n || !s.call(e, n) || t(n);
                                                for (o = r.length; n = r[--o]; s.call(e, n) && t(n));
                                            }), d(e, t)
                                    }, !n("json-stringify")) {
                                        var M = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            },
                                            k = "000000",
                                            x = function(e, t) { return(k + (t || 0)).slice(-e) },
                                            P = "\\u00",
                                            R = function(e) {
                                                for (var t = '"',
                                                    n = 0,
                                                    r = e.length,
                                                    o = !L || r > 10,
                                                    i = o && (L ? e.split("") : e);
                                                    r > n;
                                                    n++) {
                                                    var a = e.charCodeAt(n);
                                                    switch (a) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        t += M[a];
                                                        break;
                                                    default:
                                                        if (32 > a) {
                                                            t += P + x(2, a.toString(16));
                                                            break
                                                        }
                                                        t += o ? i[n] : e.charAt(n)
                                                    }
                                                }
                                                return t + '"'
                                            },
                                            F = function(e, t, n, r, o, i, a) {
                                                var s, u, c, l, p, h, y, _, w, b, L, T, M, k, P, U;
                                                try {
                                                    s = t[e]
                                                } catch (G) {
                                                }
                                                if ("object" == typeof s && s)
                                                    if (u = v
                                                            .call(s), u != A || g.call(s, "toJSON")
                                                    )
                                                        "function" == typeof s.toJSON &&
                                                            (u != C && u != O && u != S || g.call(s, "toJSON")) &&
                                                            (s = s.toJSON(e));
                                                    else if (s > -1 / 0 && 1 / 0 > s) {
                                                        if (j) {
                                                            for (p = N(s / 864e5), c = N(p / 365.2425) + 1970 - 1;
                                                                j(c + 1, 0) <= p;
                                                                c++);
                                                            for (l = N((p - j(c, 0)) / 30.42); j(c, l + 1) <= p; l++);
                                                            p = 1 + p - j(c, l), h = (s % 864e5 + 864e5) % 864e5, y =
                                                                    N(h / 36e5) % 24,
                                                                _ = N(h / 6e4) % 60, w = N(h / 1e3) % 60, b = h % 1e3
                                                        } else
                                                            c = s.getUTCFullYear(), l = s.getUTCMonth(), p = s
                                                                .getUTCDate(), y = s
                                                                .getUTCHours(), _ = s.getUTCMinutes(), w = s
                                                                .getUTCSeconds(), b = s
                                                                .getUTCMilliseconds();
                                                        s = (
                                                                0 >= c || c >= 1e4
                                                                    ? (0 > c ? "-" : "+") + x(6, 0 > c ? -c : c)
                                                                    : x(4, c)
                                                            ) +
                                                            "-" +
                                                            x(2, l + 1) +
                                                            "-" +
                                                            x(2, p) +
                                                            "T" +
                                                            x(2, y) +
                                                            ":" +
                                                            x(2, _) +
                                                            ":" +
                                                            x(2, w) +
                                                            "." +
                                                            x(3, b) +
                                                            "Z"
                                                    } else s = null;
                                                if (n && (s = n.call(t, e, s)), null === s) return"null";
                                                if (u = v.call(s), u == E) return"" + s;
                                                if (u == C) return s > -1 / 0 && 1 / 0 > s ? "" + s : "null";
                                                if (u == O) return R("" + s);
                                                if ("object" == typeof s) {
                                                    for (k = a.length; k--;) if (a[k] === s) throw f();
                                                    if (a.push(s), L = [], P = i, i += o, u == S) {
                                                        for (M = 0, k = s
                                                                .length;
                                                            k > M;
                                                            M++
                                                        ) T = F(M, s, n, r, o, i, a), L.push(T === m ? "null" : T);
                                                        U = L.length
                                                            ? o
                                                            ? "[\n" + i + L.join(",\n" + i) + "\n" + P + "]"
                                                            : "[" + L.join(",") + "]"
                                                            : "[]"
                                                    } else
                                                        d(r || s,
                                                            function(e) {
                                                                var t = F(e, s, n, r, o, i, a);
                                                                t !== m && L.push(R(e) + ":" + (o ? " " : "") + t)
                                                            }), U = L.length
                                                            ? o
                                                            ? "{\n" + i + L.join(",\n" + i) + "\n" + P + "}"
                                                            : "{" + L.join(",") + "}"
                                                            : "{}";
                                                    return a.pop(), U
                                                }
                                            };
                                        t.stringify = function(e, t, n) {
                                            var r, o, i, s;
                                            if (a[typeof t] && t)
                                                if ((s = v.call(t)) == b) o = t;
                                                else if (s == S) {
                                                    i = {};
                                                    for (var u, c = 0, l = t.length;
                                                        l > c;
                                                        u = t[c++], s = v.call(u), (s == O || s == C) && (i[u] = 1));
                                                }
                                            if (n)
                                                if ((s = v.call(n)) == C) {
                                                    if ((n -= n % 1) > 0
                                                    ) for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                                } else s == O && (r = n.length <= 10 ? n : n.slice(0, 10));
                                            return F("", (u = {}, u[""] = e, u), o, i, r, "", [])
                                        }
                                    }
                                    if (!n("json-parse")) {
                                        var U,
                                            G,
                                            $ = i.fromCharCode,
                                            D = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "	",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            },
                                            B = function() { throw U = G = null, l() },
                                            J = function() {
                                                for (var e, t, n, r, o, i = G, a = i.length; a > U;)
                                                    switch (o = i.charCodeAt(U)) {
                                                    case 9:
                                                    case 10:
                                                    case 13:
                                                    case 32:
                                                        U++;
                                                        break;
                                                    case 123:
                                                    case 125:
                                                    case 91:
                                                    case 93:
                                                    case 58:
                                                    case 44:
                                                        return e = L ? i.charAt(U) : i[U], U++, e;
                                                    case 34:
                                                        for (e = "@", U++; a > U;)
                                                            if (o = i.charCodeAt(U), 32 > o) B();
                                                            else if (92 == o)
                                                                switch (o = i.charCodeAt(++U)) {
                                                                case 92:
                                                                case 34:
                                                                case 47:
                                                                case 98:
                                                                case 116:
                                                                case 110:
                                                                case 102:
                                                                case 114:
                                                                    e += D[o], U++;
                                                                    break;
                                                                case 117:
                                                                    for (t = ++U, n = U + 4;
                                                                        n > U;
                                                                        U++
                                                                    )
                                                                        o = i
                                                                                .charCodeAt(U),
                                                                            o >= 48 && 57 >= o ||
                                                                                o >= 97 && 102 >= o ||
                                                                                o >= 65 && 70 >= o ||
                                                                                B();
                                                                    e += $("0x" + i.slice(t, U));
                                                                    break;
                                                                default:
                                                                    B()
                                                                }
                                                            else {
                                                                if (34 == o) break;
                                                                for (o = i
                                                                        .charCodeAt(U), t = U;
                                                                    o >= 32 && 92 != o && 34 != o;
                                                                ) o = i.charCodeAt(++U);
                                                                e += i.slice(t, U)
                                                            }
                                                        if (34 == i.charCodeAt(U)) return U++, e;
                                                        B();
                                                    default:
                                                        if (t = U, 45 == o && (r = !0, o = i.charCodeAt(++U)),
                                                            o >= 48 && 57 >= o) {
                                                            for (
                                                                48 == o &&
                                                                    (o = i.charCodeAt(U + 1), o >= 48 && 57 >= o) &&
                                                                    B(), r = !
                                                                    1;
                                                                a > U && (o = i.charCodeAt(U), o >= 48 && 57 >= o);
                                                                U++);
                                                            if (46 == i.charCodeAt(U)) {
                                                                for
                                                                (n = ++U;
                                                                    a > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o);
                                                                    n++);
                                                                n == U && B(), U = n
                                                            }
                                                            if (o = i.charCodeAt(U), 101 == o || 69 == o) {
                                                                for (o = i
                                                                        .charCodeAt(++U), (43 == o || 45 == o) && U++,
                                                                    n = U;
                                                                    a > n && (o = i.charCodeAt(n), o >= 48 && 57 >= o);
                                                                    n++);
                                                                n == U && B(), U = n
                                                            }
                                                            return+i.slice(t, U)
                                                        }
                                                        if (r && B(), "true" == i.slice(U, U + 4)) return U += 4, !0;
                                                        if ("false" == i.slice(U, U + 5)) return U += 5, !1;
                                                        if ("null" == i.slice(U, U + 4)) return U += 4, null;
                                                        B()
                                                    }
                                                return"$"
                                            },
                                            q = function(e) {
                                                var t, n;
                                                if ("$" == e && B(), "string" == typeof e) {
                                                    if ("@" == (L ? e.charAt(0) : e[0])) return e.slice(1);
                                                    if ("[" == e) {
                                                        for (t = [];
                                                            e = J(), "]" != e;
                                                            n || (n = !0)
                                                        )
                                                            n && ("," == e ? (e = J(), "]" == e && B()) : B()),
                                                                "," == e && B(), t
                                                                    .push(q(e));
                                                        return t
                                                    }
                                                    if ("{" == e) {
                                                        for (t = {};
                                                            e = J(), "}" != e;
                                                            n || (n = !0)
                                                        )
                                                            n && ("," == e ? (e = J(), "}" == e && B()) : B()),
                                                                ("," == e ||
                                                                        "string" != typeof e ||
                                                                        "@" != (L ? e.charAt(0) : e[0]) ||
                                                                        ":" != J()) &&
                                                                    B(), t[e.slice(1)] = q(J());
                                                        return t
                                                    }
                                                    B()
                                                }
                                                return e
                                            },
                                            I = function(e, t, n) {
                                                var r = z(e, t, n);
                                                r === m ? delete e[t] : e[t] = r
                                            },
                                            z = function(e, t, n) {
                                                var r, o = e[t];
                                                if ("object" == typeof o && o)
                                                    if (v.call(o) == S) for (r = o.length; r--;) I(o, r, n);
                                                    else d(o, function(e) { I(o, e, n) });
                                                return n.call(e, t, o)
                                            };
                                        t.parse = function(e, t) {
                                            var n, r;
                                            return U = 0, G = "" + e, n = q(J()), "$" != J() && B(), U = G = null,
                                                t && v.call(t) == b ? z((r = {}, r[""] = n, r), "", t) : n
                                        }
                                    }
                                }
                                return t.runInContext = o, t
                            }

                            var i = "function" == typeof e && e.amd,
                                a = { "function": !0, object: !0 },
                                s = a[typeof r] && r && !r.nodeType && r,
                                u = a[typeof window] && window || this,
                                c = s && a[typeof n] && n && !n.nodeType && "object" == typeof t && t;
                            if (!c || c.global !== c && c.window !== c && c.self !== c || (u = c), s && !i) o(u, s);
                            else {
                                var l = u.JSON,
                                    f = u.JSON3,
                                    p = !1,
                                    h = o(u,
                                        u.JSON3 = {
                                            noConflict: function() {
                                                return p || (p = !0, u.JSON = l, u.JSON3 = f, l = f = null), h
                                            }
                                        });
                                u.JSON = { parse: h.parse, stringify: h.stringify }
                            }
                            i && e(function() { return h })
                        }).call(this)
                    }).call(this,
                        "undefined" != typeof global
                        ? global
                        : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}
            ],
            4: [
                function(e, t, n) {
                    function r(e) {
                        if (c === setTimeout) return setTimeout(e, 0);
                        try {
                            return c(e, 0)
                        } catch (t) {
                            try {
                                return c.call(null, e, 0)
                            } catch (t) {
                                return c.call(this, e, 0)
                            }
                        }
                    }

                    function o(e) {
                        if (l === clearTimeout) return clearTimeout(e);
                        try {
                            return l(e)
                        } catch (t) {
                            try {
                                return l.call(null, e)
                            } catch (t) {
                                return l.call(this, e)
                            }
                        }
                    }

                    function i() { g && p && (g = !1, p.length ? h = p.concat(h) : d = -1, h.length && a()) }

                    function a() {
                        if (!g) {
                            var e = r(i);
                            g = !0;
                            for (var t = h.length; t;) {
                                for (p = h, h = []; ++d < t;) p && p[d].run();
                                d = -1, t = h.length
                            }
                            p = null, g = !1, o(e)
                        }
                    }

                    function s(e, t) { this.fun = e, this.array = t }

                    function u() {}

                    var c, l, f = t.exports = {};
                    !function() {
                        try {
                            c = setTimeout
                        } catch (e) {
                            c = function() { throw new Error("setTimeout is not defined") }
                        }
                        try {
                            l = clearTimeout
                        } catch (e) {
                            l = function() { throw new Error("clearTimeout is not defined") }
                        }
                    }();
                    var p, h = [], g = !1, d = -1;
                    f.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        h.push(new s(e, t)), 1 !== h.length || g || r(a)
                    }, s.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f
                        .browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f
                        .addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f
                        .emit = u, f.binding = function(e) { throw new Error("process.binding is not supported") }, f
                        .cwd = function() { return"/" }, f
                        .chdir = function(e) { throw new Error("process.chdir is not supported") }, f
                        .umask = function() { return 0 }
                }, {}
            ],
            5: [
                function(e, t, n) {
                    function r() { this._array = [], this._set = Object.create(null) }

                    var o = e("./util"), i = Object.prototype.hasOwnProperty;
                    r.fromArray = function(e, t) {
                        for (var n = new r, o = 0, i = e.length; i > o; o++) n.add(e[o], t);
                        return n
                    }, r.prototype.size = function() { return Object.getOwnPropertyNames(this._set).length }, r
                        .prototype
                        .add = function(e, t) {
                            var n = o.toSetString(e), r = i.call(this._set, n), a = this._array.length;
                            (!r || t) && this._array.push(e), r || (this._set[n] = a)
                        }, r.prototype.has = function(e) {
                        var t = o.toSetString(e);
                        return i.call(this._set, t)
                    }, r.prototype.indexOf = function(e) {
                        var t = o.toSetString(e);
                        if (i.call(this._set, t)) return this._set[t];
                        throw new Error('"' + e + '" is not in the set.')
                    }, r.prototype.at = function(e) {
                        if (e >= 0 && e < this._array.length) return this._array[e];
                        throw new Error("No element indexed by " + e)
                    }, r.prototype.toArray = function() { return this._array.slice() }, n.ArraySet = r
                }, { "./util": 11 }
            ],
            6: [
                function(e, t, n) {
                    function r(e) { return 0 > e ? (-e << 1) + 1 : (e << 1) + 0 }

                    function o(e) {
                        var t = 1 === (1 & e), n = e >> 1;
                        return t ? -n : n
                    }

                    var i = e("./base64"), a = 5, s = 1 << a, u = s - 1, c = s;
                    n.encode = function(e) {
                        var t, n = "", o = r(e);
                        do t = o & u, o >>>= a, o > 0 && (t |= c), n += i.encode(t);
                        while (o > 0);
                        return n
                    }, n.decode = function(e, t, n) {
                        var r, s, l = e.length, f = 0, p = 0;
                        do {
                            if (t >= l) throw new Error("Expected more digits in base 64 VLQ value.");
                            if (s = i.decode(e
                                .charCodeAt(t++)), -1 === s
                            ) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                            r = !!(s & c), s &= u, f += s << p, p += a
                        } while (r);
                        n.value = o(f), n.rest = t
                    }
                }, { "./base64": 7 }
            ],
            7: [
                function(e, t, n) {
                    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                    n.encode = function(e) {
                        if (e >= 0 && e < r.length) return r[e];
                        throw new TypeError("Must be between 0 and 63: " + e)
                    }, n.decode = function(e) {
                        var t = 65, n = 90, r = 97, o = 122, i = 48, a = 57, s = 43, u = 47, c = 26, l = 52;
                        return e >= t && n >= e
                            ? e - t
                            : e >= r && o >= e
                            ? e - r + c
                            : e >= i && a >= e ? e - i + l : e == s ? 62 : e == u ? 63 : -1
                    }
                }, {}
            ],
            8: [
                function(e, t, n) {
                    function r(e, t, o, i, a, s) {
                        var u = Math.floor((t - e) / 2) + e, c = a(o, i[u], !0);
                        return 0 === c
                            ? u
                            : c > 0
                            ? t - u > 1 ? r(u, t, o, i, a, s) : s == n.LEAST_UPPER_BOUND ? t < i.length ? t : -1 : u
                            : u - e > 1 ? r(e, u, o, i, a, s) : s == n.LEAST_UPPER_BOUND ? u : 0 > e ? -1 : e
                    }

                    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2, n.search = function(e, t, o, i) {
                        if (0 === t.length) return-1;
                        var a = r(-1, t.length, e, t, o, i || n.GREATEST_LOWER_BOUND);
                        if (0 > a) return-1;
                        for (; a - 1 >= 0 && 0 === o(t[a], t[a - 1], !0);) --a;
                        return a
                    }
                }, {}
            ],
            9: [
                function(e, t, n) {
                    function r(e, t, n) {
                        var r = e[t];
                        e[t] = e[n], e[n] = r
                    }

                    function o(e, t) { return Math.round(e + Math.random() * (t - e)) }

                    function i(e, t, n, a) {
                        if (a > n) {
                            var s = o(n, a), u = n - 1;
                            r(e, s, a);
                            for (var c = e[a], l = n; a > l; l++) t(e[l], c) <= 0 && (u += 1, r(e, u, l));
                            r(e, u + 1, l);
                            var f = u + 1;
                            i(e, t, n, f - 1), i(e, t, f + 1, a)
                        }
                    }

                    n.quickSort = function(e, t) { i(e, t, 0, e.length - 1) }
                }, {}
            ],
            10: [
                function(e, t, n) {
                    function r(e) {
                        var t = e;
                        return"string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))),
                            null != t.sections ? new a(t) : new o(t)
                    }

                    function o(e) {
                        var t = e;
                        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                        var n = s.getArg(t, "version"),
                            r = s.getArg(t, "sources"),
                            o = s.getArg(t, "names", []),
                            i = s.getArg(t, "sourceRoot", null),
                            a = s.getArg(t, "sourcesContent", null),
                            u = s.getArg(t, "mappings"),
                            l = s.getArg(t, "file", null);
                        if (n != this._version) throw new Error("Unsupported version: " + n);
                        r = r.map(String).map(s.normalize).map(function(e) {
                            return i && s.isAbsolute(i) && s.isAbsolute(e) ? s.relative(i, e) : e
                        }), this._names = c.fromArray(o.map(String), !0), this._sources = c.fromArray(r, !0), this
                            .sourceRoot = i, this.sourcesContent = a, this._mappings = u, this.file = l
                    }

                    function i() {
                        this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this
                            .originalLine = null, this
                            .originalColumn = null, this.name = null
                    }

                    function a(e) {
                        var t = e;
                        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                        var n = s.getArg(t, "version"), o = s.getArg(t, "sections");
                        if (n != this._version) throw new Error("Unsupported version: " + n);
                        this._sources = new c, this._names = new c;
                        var i = { line: -1, column: 0 };
                        this._sections = o.map(function(e) {
                            if (e.url) throw new Error("Support for url field in sections not implemented.");
                            var t = s.getArg(e, "offset"), n = s.getArg(t, "line"), o = s.getArg(t, "column");
                            if (n < i.line || n === i.line && o < i.column
                            ) throw new Error("Section offsets must be ordered and non-overlapping.");
                            return i = t, {
                                generatedOffset: { generatedLine: n + 1, generatedColumn: o + 1 },
                                consumer: new r(s.getArg(e, "map"))
                            }
                        })
                    }

                    var s = e("./util"),
                        u = e("./binary-search"),
                        c = e("./array-set").ArraySet,
                        l = e("./base64-vlq"),
                        f = e("./quick-sort").quickSort;
                    r.fromSourceMap = function(e) { return o.fromSourceMap(e) }, r.prototype._version = 3, r.prototype
                        .__generatedMappings = null, Object
                        .defineProperty(r.prototype,
                            "_generatedMappings",
                            {
                                get: function() {
                                    return this
                                        .__generatedMappings ||
                                        this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
                                }
                            }), r.prototype.__originalMappings = null, Object
                        .defineProperty(r.prototype,
                            "_originalMappings",
                            {
                                get: function() {
                                    return this
                                        .__originalMappings ||
                                        this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
                                }
                            }), r.prototype._charIsMappingSeparator = function(e, t) {
                        var n = e.charAt(t);
                        return";" === n || "," === n
                    }, r.prototype._parseMappings = function(e, t) {
                        throw new Error("Subclasses must implement _parseMappings")
                    }, r.GENERATED_ORDER = 1, r.ORIGINAL_ORDER = 2, r.GREATEST_LOWER_BOUND = 1, r
                        .LEAST_UPPER_BOUND = 2, r
                        .prototype.eachMapping = function(e, t, n) {
                            var o, i = t || null, a = n || r.GENERATED_ORDER;
                            switch (a) {
                            case r.GENERATED_ORDER:
                                o = this._generatedMappings;
                                break;
                            case r.ORIGINAL_ORDER:
                                o = this._originalMappings;
                                break;
                            default:
                                throw new Error("Unknown order of iteration.")
                            }
                            var u = this.sourceRoot;
                            o.map(function(e) {
                                    var t = null === e.source ? null : this._sources.at(e.source);
                                    return null != t && null != u && (t = s.join(u, t)),
                                    {
                                        source: t,
                                        generatedLine: e.generatedLine,
                                        generatedColumn: e.generatedColumn,
                                        originalLine: e.originalLine,
                                        originalColumn: e.originalColumn,
                                        name: null === e.name ? null : this._names.at(e.name)
                                    }
                                },
                                this).forEach(e, i)
                        }, r.prototype.allGeneratedPositionsFor = function(e) {
                        var t = s.getArg(e, "line"),
                            n = {
                                source: s.getArg(e, "source"),
                                originalLine: t,
                                originalColumn: s
                                    .getArg(e, "column", 0)
                            };
                        if (null != this.sourceRoot && (n.source = s.relative(this.sourceRoot, n.source)), !this
                            ._sources
                            .has(n.source)) return[];
                        n.source = this._sources.indexOf(n.source);
                        var r = [],
                            o = this._findMapping(n,
                                this._originalMappings,
                                "originalLine",
                                "originalColumn",
                                s.compareByOriginalPositions,
                                u.LEAST_UPPER_BOUND);
                        if (o >= 0) {
                            var i = this._originalMappings[o];
                            if (void 0 === e.column)
                                for (var a = i
                                        .originalLine;
                                    i && i.originalLine === a;
                                )
                                    r.push({
                                        line: s.getArg(i, "generatedLine", null),
                                        column: s.getArg(i, "generatedColumn", null),
                                        lastColumn: s.getArg(i, "lastGeneratedColumn", null)
                                    }), i = this._originalMappings[++o];
                            else
                                for (var c = i
                                        .originalColumn;
                                    i && i.originalLine === t && i.originalColumn == c;
                                )
                                    r.push({
                                        line: s.getArg(i, "generatedLine", null),
                                        column: s.getArg(i, "generatedColumn", null),
                                        lastColumn: s.getArg(i, "lastGeneratedColumn", null)
                                    }), i = this._originalMappings[++o]
                        }
                        return r
                    }, n.SourceMapConsumer = r, o.prototype = Object.create(r.prototype), o.prototype.consumer = r, o
                        .fromSourceMap = function(e) {
                            var t = Object.create(o.prototype),
                                n = t._names = c.fromArray(e._names.toArray(), !0),
                                r = t._sources = c.fromArray(e._sources.toArray(), !0);
                            t.sourceRoot = e._sourceRoot, t.sourcesContent = e
                                ._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
                            for (var a = e._mappings.toArray().slice(),
                                u = t.__generatedMappings = [],
                                l = t.__originalMappings = [],
                                p = 0,
                                h = a.length;
                                h > p;
                                p++) {
                                var g = a[p], d = new i;
                                d.generatedLine = g.generatedLine, d.generatedColumn = g
                                    .generatedColumn, g.source &&
                                (d.source = r.indexOf(g.source), d.originalLine = g.originalLine, d.originalColumn = g
                                    .originalColumn, g.name && (d.name = n.indexOf(g.name)), l.push(d)), u.push(d)
                            }
                            return f(t.__originalMappings, s.compareByOriginalPositions), t
                        }, o.prototype._version = 3, Object
                        .defineProperty(o.prototype,
                            "sources",
                            {
                                get: function() {
                                    return this._sources.toArray()
                                        .map(function(e) {
                                                return null != this.sourceRoot
                                                    ? s.join(this
                                                        .sourceRoot,
                                                        e)
                                                    : e
                                            },
                                            this)
                                }
                            }), o.prototype._parseMappings = function(e, t) {
                        for (var n,
                            r,
                            o,
                            a,
                            u,
                            c = 1,
                            p = 0,
                            h = 0,
                            g = 0,
                            d = 0,
                            m = 0,
                            y = e.length,
                            v = 0,
                            _ = {},
                            w = {},
                            b = [],
                            A = [];
                            y > v;
                        )
                            if (";" === e.charAt(v)) c++, v++, p = 0;
                            else if ("," === e.charAt(v)) v++;
                            else {
                                for (n = new i, n.generatedLine = c, a = v;
                                    y > a && !this._charIsMappingSeparator(e, a);
                                    a++);
                                if (r = e.slice(v, a), o = _[r]) v += r.length;
                                else {
                                    for (o = []; a > v;) l.decode(e, v, w), u = w.value, v = w.rest, o.push(u);
                                    if (2 === o.length) throw new Error("Found a source, but no line and column");
                                    if (3 === o.length) throw new Error("Found a source and line, but no column");
                                    _[r] = o
                                }
                                n.generatedColumn = p + o[0], p = n
                                    .generatedColumn, o.length > 1 &&
                                (n.source = d + o[1], d += o[1], n.originalLine = h + o[2], h = n.originalLine, n
                                    .originalLine += 1, n.originalColumn = g + o[3], g = n
                                    .originalColumn, o.length > 4 && (n.name = m + o[4], m += o[4])), A
                                    .push(n), "number" == typeof n.originalLine && b.push(n)
                            }
                        f(A, s.compareByGeneratedPositionsDeflated), this
                            .__generatedMappings = A, f(b, s.compareByOriginalPositions), this.__originalMappings = b
                    }, o.prototype._findMapping = function(e, t, n, r, o, i) {
                        if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
                        if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
                        return u.search(e, t, o, i)
                    }, o.prototype.computeColumnSpans = function() {
                        for (var e = 0; e < this._generatedMappings.length; ++e) {
                            var t = this._generatedMappings[e];
                            if (e + 1 < this._generatedMappings.length) {
                                var n = this._generatedMappings[e + 1];
                                if (t.generatedLine === n.generatedLine) {
                                    t.lastGeneratedColumn = n.generatedColumn - 1;
                                    continue
                                }
                            }
                            t.lastGeneratedColumn = 1 / 0
                        }
                    }, o.prototype.originalPositionFor = function(e) {
                        var t = { generatedLine: s.getArg(e, "line"), generatedColumn: s.getArg(e, "column") },
                            n = this._findMapping(t,
                                this._generatedMappings,
                                "generatedLine",
                                "generatedColumn",
                                s.compareByGeneratedPositionsDeflated,
                                s.getArg(e, "bias", r.GREATEST_LOWER_BOUND));
                        if (n >= 0) {
                            var o = this._generatedMappings[n];
                            if (o.generatedLine === t.generatedLine) {
                                var i = s.getArg(o, "source", null);
                                null !== i &&
                                (i = this._sources
                                    .at(i), null != this.sourceRoot && (i = s.join(this.sourceRoot, i)));
                                var a = s.getArg(o, "name", null);
                                return null !== a && (a = this._names.at(a)),
                                {
                                    source: i,
                                    line: s.getArg(o, "originalLine", null),
                                    column: s.getArg(o, "originalColumn", null),
                                    name: a
                                }
                            }
                        }
                        return{ source: null, line: null, column: null, name: null }
                    }, o.prototype.hasContentsOfAllSources = function() {
                        return this.sourcesContent
                            ? this.sourcesContent.length >= this._sources.size() &&
                            !this.sourcesContent.some(function(e) { return null == e })
                            : !1
                    }, o.prototype.sourceContentFor = function(e, t) {
                        if (!this.sourcesContent) return null;
                        if (null != this.sourceRoot && (e = s.relative(this.sourceRoot, e)), this._sources
                            .has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                        var n;
                        if (null != this.sourceRoot && (n = s.urlParse(this.sourceRoot))) {
                            var r = e.replace(/^file:\/\//, "");
                            if ("file" == n.scheme && this._sources.has(r)
                            ) return this.sourcesContent[this._sources.indexOf(r)];
                            if ((!n
                                    .path ||
                                    "/" == n.path) &&
                                this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)]
                        }
                        if (t) return null;
                        throw new Error('"' + e + '" is not in the SourceMap.')
                    }, o.prototype.generatedPositionFor = function(e) {
                        var t = s.getArg(e, "source");
                        if (null != this.sourceRoot && (t = s.relative(this.sourceRoot, t)), !this._sources
                            .has(t)) return{ line: null, column: null, lastColumn: null };
                        t = this._sources.indexOf(t);
                        var n = { source: t, originalLine: s.getArg(e, "line"), originalColumn: s.getArg(e, "column") },
                            o = this._findMapping(n,
                                this._originalMappings,
                                "originalLine",
                                "originalColumn",
                                s.compareByOriginalPositions,
                                s.getArg(e, "bias", r.GREATEST_LOWER_BOUND));
                        if (o >= 0) {
                            var i = this._originalMappings[o];
                            if (i.source === n.source)
                                return{
                                    line: s.getArg(i, "generatedLine", null),
                                    column: s.getArg(i, "generatedColumn", null),
                                    lastColumn: s.getArg(i, "lastGeneratedColumn", null)
                                }
                        }
                        return{ line: null, column: null, lastColumn: null }
                    }, n.BasicSourceMapConsumer = o, a.prototype = Object.create(r.prototype), a.prototype
                        .constructor = r, a.prototype._version = 3, Object.defineProperty(a.prototype,
                        "sources",
                        {
                            get: function() {
                                for (var e = [], t = 0;
                                    t < this._sections.length;
                                    t++
                                )
                                    for (var n = 0;
                                        n < this._sections[t].consumer.sources.length;
                                        n++
                                    ) e.push(this._sections[t].consumer.sources[n]);
                                return e
                            }
                        }), a.prototype.originalPositionFor = function(e) {
                        var t = { generatedLine: s.getArg(e, "line"), generatedColumn: s.getArg(e, "column") },
                            n = u.search(t,
                                this._sections,
                                function(e, t) {
                                    var n = e.generatedLine - t.generatedOffset.generatedLine;
                                    return n ? n : e.generatedColumn - t.generatedOffset.generatedColumn
                                }),
                            r = this._sections[n];
                        return r
                            ? r.consumer.originalPositionFor({
                                line: t.generatedLine - (r.generatedOffset.generatedLine - 1),
                                column: t.generatedColumn -
                                (r.generatedOffset.generatedLine === t.generatedLine
                                    ? r.generatedOffset.generatedColumn - 1
                                    : 0),
                                bias: e.bias
                            })
                            : { source: null, line: null, column: null, name: null }
                    }, a.prototype.hasContentsOfAllSources = function() {
                        return this._sections.every(function(e) { return e.consumer.hasContentsOfAllSources() })
                    }, a.prototype.sourceContentFor = function(e, t) {
                        for (var n = 0; n < this._sections.length; n++) {
                            var r = this._sections[n], o = r.consumer.sourceContentFor(e, !0);
                            if (o) return o
                        }
                        if (t) return null;
                        throw new Error('"' + e + '" is not in the SourceMap.');
                    }, a.prototype.generatedPositionFor = function(e) {
                        for (var t = 0; t < this._sections.length; t++) {
                            var n = this._sections[t];
                            if (-1 !== n.consumer.sources.indexOf(s.getArg(e, "source"))) {
                                var r = n.consumer.generatedPositionFor(e);
                                if (r) {
                                    var o = {
                                        line: r.line + (n.generatedOffset.generatedLine - 1),
                                        column: r.column +
                                        (n.generatedOffset.generatedLine === r.line
                                            ? n.generatedOffset.generatedColumn - 1
                                            : 0)
                                    };
                                    return o
                                }
                            }
                        }
                        return{ line: null, column: null }
                    }, a.prototype._parseMappings = function(e, t) {
                        this.__generatedMappings = [], this.__originalMappings = [];
                        for (var n = 0; n < this._sections.length; n++)
                            for (var r = this
                                         ._sections[n],
                            o = r.consumer._generatedMappings,
                            i = 0;
                            i < o.length;
                            i++) {
                                var a = o[i], u = r.consumer._sources.at(a.source);
                                null !== r.consumer.sourceRoot && (u = s.join(r.consumer.sourceRoot, u)), this._sources
                                    .add(u), u = this._sources.indexOf(u);
                                var c = r.consumer._names.at(a.name);
                                this._names.add(c), c = this._names.indexOf(c);
                                var l = {
                                    source: u,
                                    generatedLine: a.generatedLine + (r.generatedOffset.generatedLine - 1),
                                    generatedColumn: a.generatedColumn +
                                    (r.generatedOffset.generatedLine === a.generatedLine
                                        ? r.generatedOffset.generatedColumn - 1
                                        : 0),
                                    originalLine: a.originalLine,
                                    originalColumn: a.originalColumn,
                                    name: c
                                };
                                this.__generatedMappings
                                    .push(l), "number" == typeof l.originalLine && this.__originalMappings.push(l)
                            }
                        f(this
                            .__generatedMappings,
                            s
                            .compareByGeneratedPositionsDeflated),
                        f(this.__originalMappings, s.compareByOriginalPositions)
                    }, n.IndexedSourceMapConsumer = a
                }, { "./array-set": 5, "./base64-vlq": 6, "./binary-search": 8, "./quick-sort": 9, "./util": 11 }
            ],
            11: [
                function(e, t, n) {
                    function r(e, t, n) {
                        if (t in e) return e[t];
                        if (3 === arguments.length) return n;
                        throw new Error('"' + t + '" is a required argument.')
                    }

                    function o(e) {
                        var t = e.match(y);
                        return t ? { scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5] } : null
                    }

                    function i(e) {
                        var t = "";
                        return e
                            .scheme &&
                            (t += e.scheme + ":"), t += "//", e
                            .auth &&
                            (t += e.auth + "@"), e
                            .host &&
                            (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
                    }

                    function a(e) {
                        var t = e, r = o(e);
                        if (r) {
                            if (!r.path) return e;
                            t = r.path
                        }
                        for (var a, s = n.isAbsolute(t), u = t.split(/\/+/), c = 0, l = u.length - 1;
                            l >= 0;
                            l--
                        )
                            a = u[l], "." === a
                                ? u.splice(l, 1)
                                : ".." === a
                                ? c++
                                : c > 0 && ("" === a ? (u.splice(l + 1, c), c = 0) : (u.splice(l, 2), c--));
                        return t = u.join("/"), "" === t && (t = s ? "/" : "."), r ? (r.path = t, i(r)) : t
                    }

                    function s(e, t) {
                        "" === e && (e = "."), "" === t && (t = ".");
                        var n = o(t), r = o(e);
                        if (r && (e = r.path || "/"), n && !n.scheme) return r && (n.scheme = r.scheme), i(n);
                        if (n || t.match(v)) return t;
                        if (r && !r.host && !r.path) return r.host = t, i(r);
                        var s = "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
                        return r ? (r.path = s, i(r)) : s
                    }

                    function u(e, t) {
                        "" === e && (e = "."), e = e.replace(/\/$/, "");
                        for (var n = 0; 0 !== t.indexOf(e + "/");) {
                            var r = e.lastIndexOf("/");
                            if (0 > r) return t;
                            if (e = e.slice(0, r), e.match(/^([^\/]+:\/)?\/*$/)) return t;
                            ++n
                        }
                        return Array(n + 1).join("../") + t.substr(e.length + 1)
                    }

                    function c(e) { return e }

                    function l(e) { return p(e) ? "$" + e : e }

                    function f(e) { return p(e) ? e.slice(1) : e }

                    function p(e) {
                        if (!e) return!1;
                        var t = e.length;
                        if (9 > t) return!1;
                        if (95 !== e.charCodeAt(t - 1) ||
                            95 !== e.charCodeAt(t - 2) ||
                            111 !== e.charCodeAt(t - 3) ||
                            116 !== e.charCodeAt(t - 4) ||
                            111 !== e.charCodeAt(t - 5) ||
                            114 !== e.charCodeAt(t - 6) ||
                            112 !== e.charCodeAt(t - 7) ||
                            95 !== e.charCodeAt(t - 8) ||
                            95 !== e.charCodeAt(t - 9)) return!1;
                        for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return!1;
                        return!0
                    }

                    function h(e, t, n) {
                        var r = e.source - t.source;
                        return 0 !== r
                            ? r
                            : (r = e
                                .originalLine -
                                t.originalLine, 0 !== r
                                ? r
                                : (r = e
                                    .originalColumn -
                                    t.originalColumn, 0 !== r || n
                                    ? r
                                    : (r = e
                                        .generatedColumn -
                                        t.generatedColumn, 0 !== r
                                        ? r
                                        : (r = e.generatedLine - t.generatedLine, 0 !== r ? r : e.name - t.name))))
                    }

                    function g(e, t, n) {
                        var r = e.generatedLine - t.generatedLine;
                        return 0 !== r
                            ? r
                            : (r = e
                                .generatedColumn -
                                t.generatedColumn, 0 !== r || n
                                ? r
                                : (r = e.source - t.source, 0 !== r
                                    ? r
                                    : (r = e
                                        .originalLine -
                                        t.originalLine, 0 !== r
                                        ? r
                                        : (r = e.originalColumn - t.originalColumn, 0 !== r ? r : e.name - t.name))))
                    }

                    function d(e, t) { return e === t ? 0 : e > t ? 1 : -1 }

                    function m(e, t) {
                        var n = e.generatedLine - t.generatedLine;
                        return 0 !== n
                            ? n
                            : (n = e
                                .generatedColumn -
                                t.generatedColumn, 0 !== n
                                ? n
                                : (n = d(e.source, t.source), 0 !== n
                                    ? n
                                    : (n = e
                                        .originalLine -
                                        t.originalLine, 0 !== n
                                        ? n
                                        : (n = e.originalColumn - t.originalColumn, 0 !== n ? n : d(e.name, t.name)))))
                    }

                    n.getArg = r;
                    var y = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/, v = /^data:.+\,.+$/;
                    n.urlParse = o, n.urlGenerate = i, n.normalize = a, n.join = s, n
                        .isAbsolute = function(e) { return"/" === e.charAt(0) || !!e.match(y) }, n.relative = u;
                    var _ = function() {
                        var e = Object.create(null);
                        return!("__proto__" in e)
                    }();
                    n.toSetString = _ ? c : l, n.fromSetString = _ ? c : f, n.compareByOriginalPositions = h, n
                        .compareByGeneratedPositionsDeflated = g, n.compareByGeneratedPositionsInflated = m
                }, {}
            ],
            12: [
                function(t, n, r) {
                    !function(t, o) {
                        "use strict";
                        "function" == typeof e && e.amd
                            ? e("stackframe", [], o)
                            : "object" == typeof r ? n.exports = o() : t.StackFrame = o()
                    }(this,
                        function() {
                            "use strict";

                            function e(e) { return!isNaN(parseFloat(e)) && isFinite(e) }

                            function t(e, t, n, r, o, i) {
                                void 0 !== e && this.setFunctionName(e), void 0 !== t && this.setArgs(t),
                                    void 0 !== n && this.setFileName(n), void 0 !== r && this.setLineNumber(r),
                                    void 0 !== o && this.setColumnNumber(o), void 0 !== i && this.setSource(i)
                            }

                            return t.prototype = {
                                getFunctionName: function() { return this.functionName },
                                setFunctionName: function(e) { this.functionName = String(e) },
                                getArgs: function() { return this.args },
                                setArgs: function(e) {
                                    if ("[object Array]" !== Object.prototype.toString.call(e)
                                    ) throw new TypeError("Args must be an Array");
                                    this.args = e
                                },
                                getFileName: function() { return this.fileName },
                                setFileName: function(e) { this.fileName = String(e) },
                                getLineNumber: function() { return this.lineNumber },
                                setLineNumber: function(t) {
                                    if (!e(t)) throw new TypeError("Line Number must be a Number");
                                    this.lineNumber = Number(t)
                                },
                                getColumnNumber: function() { return this.columnNumber },
                                setColumnNumber: function(t) {
                                    if (!e(t)) throw new TypeError("Column Number must be a Number");
                                    this.columnNumber = Number(t)
                                },
                                getSource: function() { return this.source },
                                setSource: function(e) { this.source = String(e) },
                                toString: function() {
                                    var t = this.getFunctionName() || "{anonymous}",
                                        n = "(" + (this.getArgs() || []).join(",") + ")",
                                        r = this.getFileName() ? "@" + this.getFileName() : "",
                                        o = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "",
                                        i = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
                                    return t + n + r + o + i
                                }
                            }, t
                        })
                }, {}
            ],
            13: [
                function(t, n, r) {
                    !function(o, i) {
                        "use strict";
                        "function" == typeof e && e.amd
                            ? e("stack-generator", ["stackframe"], i)
                            : "object" == typeof r ? n.exports = i(t("stackframe")) : o.StackGenerator = i(o.StackFrame)
                    }(this,
                        function(e) {
                            return{
                                backtrace: function(t) {
                                    var n = [], r = 10;
                                    "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
                                    for (var o = arguments.callee; o && n.length < r;) {
                                        for (var i = new Array(o.arguments
                                                     .length),
                                            a = 0;
                                            a < i.length;
                                            ++a) i[a] = o.arguments[a];
                                        /function(?:\s+([\w$]+))+\s*\(/.test(o.toString())
                                            ? n.push(new e(RegExp.$1 || void 0, i))
                                            : n.push(new e(void 0, i));
                                        try {
                                            o = o.caller
                                        } catch (s) {
                                            break
                                        }
                                    }
                                    return n
                                }
                            }
                        })
                }, { stackframe: 12 }
            ],
            14: [function(e, t, n) { arguments[4][12][0].apply(n, arguments) }, { dup: 12 }],
            15: [
                function(t, n, r) {
                    !function(o, i) {
                        "use strict";
                        "function" == typeof e && e.amd
                            ? e("stacktrace-gps", ["source-map", "stackframe"], i)
                            : "object" == typeof r
                            ? n.exports = i(t("source-map/lib/source-map-consumer"), t("stackframe"))
                            : o.StackTraceGPS = i(o.SourceMap || o.sourceMap, o.StackFrame)
                    }(this,
                        function(e, t) {
                            "use strict";

                            function n(e) {
                                return new Promise(function(t, n) {
                                    var r = new XMLHttpRequest;
                                    r.open("get", e), r.onerror = n, r
                                        .onreadystatechange = function() {
                                            4 === r.readyState &&
                                            (r.status >= 200 && r.status < 300
                                                ? t(r.responseText)
                                                : n(new Error("HTTP status: " + r.status + " retrieving " + e)))
                                        }, r.send()
                                })
                            }

                            function r(e) {
                                if ("undefined" != typeof window && window.atob) return window.atob(e);
                                throw new Error("You must supply a polyfill for window.atob in this environment")
                            }

                            function o(e) {
                                if ("undefined" != typeof JSON && JSON.parse) return JSON.parse(e);
                                throw new Error("You must supply a polyfill for JSON.parse in this environment")
                            }

                            function i(e, t) {
                                for (var n,
                                    r = /function\s+([^(]*?)\s*\(([^)]*)\)/,
                                    o = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
                                    i = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
                                    a = e.split("\n"),
                                    s = "",
                                    u = Math.min(t, 20),
                                    c = 0;
                                    u > c;
                                    ++c) {
                                    var l = a[t - c - 1], f = l.indexOf("//");
                                    if (f >= 0 && (l = l.substr(0, f)), l) {
                                        if (s = l + s, n = o.exec(s), n && n[1]) return n[1];
                                        if (n = r.exec(s), n && n[1]) return n[1];
                                        if (n = i.exec(s), n && n[1]) return n[1]
                                    }
                                }
                            }

                            function a() {
                                if ("function" != typeof Object.defineProperty || "function" != typeof Object.create
                                ) throw new Error("Unable to consume source maps in older browsers")
                            }

                            function s(e) {
                                if ("object" != typeof e) throw new TypeError("Given StackFrame is not an object");
                                if ("string" != typeof e.fileName
                                ) throw new TypeError("Given file name is not a String");
                                if ("number" != typeof e.lineNumber || e.lineNumber % 1 !== 0 || e.lineNumber < 1
                                ) throw new TypeError("Given line number must be a positive integer");
                                if ("number" != typeof e.columnNumber || e.columnNumber % 1 !== 0 || e.columnNumber < 0
                                ) throw new TypeError("Given column number must be a non-negative integer");
                                return!0
                            }

                            function u(e) {
                                var t = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/.exec(e);
                                if (t && t[1]) return t[1];
                                throw new Error("sourceMappingURL not found")
                            }

                            function c(n, r, o, i, a) {
                                var s = new e.SourceMapConsumer(n),
                                    u = s.originalPositionFor({ line: o, column: i }),
                                    c = s.sourceContentFor(u.source);
                                return c && (a[u.source] = c), new t(u.name, r, u.source, u.line, u.column)
                            }

                            return function l(e) {
                                return this instanceof l
                                    ? (e = e || {}, this.sourceCache = e.sourceCache || {}, this
                                        .ajax = e.ajax || n, this
                                        ._atob = e.atob || r, this._get = function(t) {
                                        return new Promise(function(n, r) {
                                            var o = "data:" === t.substr(0, 5);
                                            if (this.sourceCache[t]) n(this.sourceCache[t]);
                                            else if (e
                                                .offline &&
                                                !o) r(new Error("Cannot make network requests in offline mode"));
                                            else if (o) {
                                                var i = /^data:application\/json;([\w=:"-]+;)*base64,/, a = t.match(i);
                                                if (a) {
                                                    var s = a[0].length, u = t.substr(s), c = this._atob(u);
                                                    this.sourceCache[t] = c, n(c)
                                                } else
                                                    r(new
                                                        Error("The encoding of the inline sourcemap is not supported"))
                                            } else {
                                                var l = this.ajax(t, { method: "get" });
                                                this.sourceCache[t] = l, l.then(n, r)
                                            }
                                        }.bind(this))
                                    }, this.pinpoint = function(e) {
                                        return new Promise(function(t, n) {
                                            this.getMappedLocation(e).then(function(e) {
                                                    function n() { t(e) }

                                                    this.findFunctionName(e).then(t, n)["catch"](n)
                                                }.bind(this),
                                                n)
                                        }.bind(this))
                                    }, this.findFunctionName = function(e) {
                                        return new Promise(function(n, r) {
                                            s(e), this._get(e.fileName).then(function(r) {
                                                    var o = e.lineNumber, a = e.columnNumber, s = i(r, o, a);
                                                    n(s ? new t(s, e.args, e.fileName, o, a) : e)
                                                },
                                                r)["catch"](r)
                                        }.bind(this))
                                    }, void(this.getMappedLocation = function(e) {
                                        return new Promise(function(t, n) {
                                            a(), s(e);
                                            var r = this.sourceCache, i = e.fileName;
                                            this._get(i).then(function(a) {
                                                    var s = u(a),
                                                        l = "data:" === s.substr(0, 5),
                                                        f = i.substring(0, i.lastIndexOf("/") + 1);
                                                    "/" === s[0] || l || /^https?:\/\/|^\/\//i.test(s) || (s = f + s),
                                                        this
                                                            ._get(s).then(function(n) {
                                                                    var i = e.lineNumber, a = e.columnNumber;
                                                                    "string" == typeof n &&
                                                                            (n = o(n.replace(/^\)\]\}'/, ""))),
                                                                        "undefined" == typeof n.sourceRoot &&
                                                                            (n.sourceRoot = f),
                                                                        t(c(n, e.args, i, a, r))
                                                                },
                                                                n)["catch"](n)
                                                }.bind(this),
                                                n)["catch"](n)
                                        }.bind(this))
                                    }))
                                    : new l(e)
                            }
                        })
                }, { "source-map/lib/source-map-consumer": 10, stackframe: 14 }
            ],
            16: [
                function(e, t, n) {
                    Array.isArray ||
                        (Array
                            .isArray = function(e) { return"[object Array]" === Object.prototype.toString.call(e) }),
                        "undefined" == typeof Promise && ES6Promise.polyfill(), Function.prototype.bind ||
                        (Function.prototype.bind = function(e) {
                            if ("function" != typeof this)
                                throw new
                                    TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                            var t = Array.prototype.slice.call(arguments, 1),
                                n = this,
                                r = function() {},
                                o = function() {
                                    return n.apply(this instanceof r && e ? this : e,
                                        t.concat(Array.prototype.slice.call(arguments)))
                                };
                            return r.prototype = this.prototype, o.prototype = new r, o
                        }), Array.prototype.map ||
                        (Array.prototype.map = function(e, t) {
                            if (void 0 === this || null === this) throw new TypeError("this is null or not defined");
                            var n, r = Object(this), o = r.length >>> 0;
                            if ("function" != typeof e) throw new TypeError(e + " is not a function");
                            arguments.length > 1 && (n = t);
                            for (var i = new Array(o), a = 0; o > a;) {
                                var s, u;
                                a in r && (s = r[a], u = e.call(n, s, a, r), i[a] = u), a++
                            }
                            return i
                        }), Array.prototype.filter ||
                        (Array.prototype.filter = function(e) {
                            if (void 0 === this || null === this) throw new TypeError("this is null or not defined");
                            var t = Object(this), n = t.length >>> 0;
                            if ("function" != typeof e) throw new TypeError(e + " is not a function");
                            for (var r = [], o = arguments.length >= 2 ? arguments[1] : void 0, i = 0; n > i; i++)
                                if (i in t) {
                                    var a = t[i];
                                    e.call(o, a, i, t) && r.push(a)
                                }
                            return r
                        }), Array.prototype.forEach ||
                        (Array.prototype.forEach = function(e, t) {
                            var n, r;
                            if (null === this || void 0 === this) throw new TypeError(" this is null or not defined");
                            var o = Object(this), i = o.length >>> 0;
                            if ("function" != typeof e) throw new TypeError(e + " is not a function");
                            for (arguments.length > 1 && (n = t), r = 0; i > r;) {
                                var a;
                                r in o && (a = o[r], e.call(n, a, r, o)), r++
                            }
                        })
                }, {}
            ],
            17: [
                function(t, n, r) {
                    !function(o, i) {
                        "use strict";
                        "function" == typeof e && e.amd
                            ? e("stacktrace", ["error-stack-parser", "stack-generator", "stacktrace-gps"], i)
                            : "object" == typeof r
                            ? n.exports = i(t("error-stack-parser"), t("stack-generator"), t("stacktrace-gps"))
                            : o.StackTrace = i(o.ErrorStackParser, o.StackGenerator, o.StackTraceGPS)
                    }(this,
                        function(e, t, n) {
                            function r(e, t) {
                                var n = {};
                                return[e, t].forEach(function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                                    return n
                                }), n
                            }

                            function o(e) { return e.stack || e["opera#sourceloc"] }

                            function i(e, t) { return"function" == typeof t ? e.filter(t) : e }

                            var a = {
                                    filter: function(e) {
                                        return-1 === (e.functionName || "").indexOf("StackTrace$$") &&
                                            -1 === (e.functionName || "").indexOf("ErrorStackParser$$") &&
                                            -1 === (e.functionName || "").indexOf("StackTraceGPS$$") &&
                                            -1 === (e.functionName || "").indexOf("StackGenerator$$")
                                    },
                                    sourceCache: {}
                                },
                                s = function() {
                                    try {
                                        throw new Error
                                    } catch (e) {
                                        return e
                                    }
                                };
                            return{
                                get: function(e) {
                                    var t = s();
                                    return o(t) ? this.fromError(t, e) : this.generateArtificially(e)
                                },
                                getSync: function(n) {
                                    n = r(a, n);
                                    var u = s(), c = o(u) ? e.parse(u) : t.backtrace(n);
                                    return i(c, n.filter)
                                },
                                fromError: function(t, o) {
                                    o = r(a, o);
                                    var s = new n(o);
                                    return new Promise(function(n) {
                                        var r = i(e.parse(t), o.filter);
                                        n(Promise.all(r.map(function(e) {
                                            return new Promise(function(t) {
                                                function n() { t(e) }

                                                s.pinpoint(e).then(t, n)["catch"](n)
                                            })
                                        })))
                                    }.bind(this))
                                },
                                generateArtificially: function(e) {
                                    e = r(a, e);
                                    var n = t.backtrace(e);
                                    return"function" == typeof e.filter && (n = n.filter(e.filter)), Promise.resolve(n)
                                },
                                instrument: function(e, t, n, r) {
                                    if ("function" != typeof e
                                    ) throw new Error("Cannot instrument non-function object");
                                    if ("function" == typeof e.__stacktraceOriginalFn) return e;
                                    var i = function() {
                                        try {
                                            return this.get().then(t, n)["catch"](n), e.apply(r || this, arguments)
                                        } catch (i) {
                                            throw o(i) && this.fromError(i).then(t, n)["catch"](n), i
                                        }
                                    }.bind(this);
                                    return i.__stacktraceOriginalFn = e, i
                                },
                                deinstrument: function(e) {
                                    if ("function" != typeof e
                                    ) throw new Error("Cannot de-instrument non-function object");
                                    return"function" == typeof e.__stacktraceOriginalFn ? e.__stacktraceOriginalFn : e
                                },
                                report: function(e, t, n) {
                                    return new Promise(function(r, o) {
                                        var i = new XMLHttpRequest;
                                        i.onerror = o, i
                                            .onreadystatechange =
                                            function() {
                                                4 === i.readyState &&
                                                (i.status >= 200 && i.status < 400
                                                    ? r(i.responseText)
                                                    : o(new Error("POST to " + t + " failed with status: " + i.status)))
                                            }, i.open("post", t), i
                                            .setRequestHeader("Content-Type", "application/json");
                                        var a = { stack: e };
                                        void 0 !== n && (a.message = n), i.send(JSON.stringify(a))
                                    })
                                }
                            }
                        })
                }, { "error-stack-parser": 1, "stack-generator": 13, "stacktrace-gps": 15 }
            ]
        },
        {},
        [2, 3, 16, 17])(17)
});
//# sourceMappingURL=stacktrace-with-promises-and-json-polyfills.min.js.map