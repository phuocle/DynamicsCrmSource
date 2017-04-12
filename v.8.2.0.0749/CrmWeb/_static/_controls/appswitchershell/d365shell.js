var D365Library = D365Library || {};
D365Library.bootstrapper = function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = { exports: {}, id: n, loaded: !1 };
        return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }

    var r = {};
    return e.m = t, e.c = r, e.p = "/assets/", e(0)
}({
    0: function(t, e, r) { t.exports = r(138) },
    4: function(t, e, r) {
        (function(t, n) { /*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
            "use strict";

            function i() {
                try {
                    var t = new Uint8Array(1);
                    return t
                            .__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } },
                        42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (e) {
                    return!1
                }
            }

            function o() { return t.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function s(e, r) {
                if (o() < r) throw new RangeError("Invalid typed array length");
                return t.TYPED_ARRAY_SUPPORT
                    ? (e = new Uint8Array(r), e.__proto__ = t.prototype)
                    : (null === e && (e = new t(r)), e.length = r), e
            }

            function t(e, r, n) {
                if (!(t.TYPED_ARRAY_SUPPORT || this instanceof t)) return new t(e, r, n);
                if ("number" == typeof e) {
                    if ("string" == typeof r)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, e)
                }
                return u(this, e, r, n)
            }

            function u(t, e, r, n) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return"undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
                    ? p(t, e, r, n)
                    : "string" == typeof e ? h(t, e, r) : d(t, e)
            }

            function a(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function f(t, e, r, n) {
                return a(e), e <= 0
                    ? s(t, e)
                    : void 0 !== r ? "string" == typeof n ? s(t, e).fill(r, n) : s(t, e).fill(r) : s(t, e)
            }

            function c(e, r) {
                if (a(r), e = s(e, r < 0 ? 0 : 0 | y(r)), !t.TYPED_ARRAY_SUPPORT) for (var n = 0; n < r; ++n) e[n] = 0;
                return e
            }

            function h(e, r, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !t
                    .isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | v(r, n);
                e = s(e, i);
                var o = e.write(r, n);
                return o !== i && (e = e.slice(0, o)), e
            }

            function l(t, e) {
                var r = e.length < 0 ? 0 : 0 | y(e.length);
                t = s(t, r);
                for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                return t
            }

            function p(e, r, n, i) {
                if (r.byteLength, n < 0 || r.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (r.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                return r = void 0 === n && void 0 === i
                        ? new Uint8Array(r)
                        : void 0 === i ? new Uint8Array(r, n) : new Uint8Array(r, n, i),
                    t.TYPED_ARRAY_SUPPORT ? (e = r, e.__proto__ = t.prototype) : e = l(e, r), e
            }

            function d(e, r) {
                if (t.isBuffer(r)) {
                    var n = 0 | y(r.length);
                    return e = s(e, n), 0 === e.length ? e : (r.copy(e, 0, 0, n), e)
                }
                if (r) {
                    if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r
                    ) return"number" != typeof r.length || $(r.length) ? s(e, 0) : l(e, r);
                    if ("Buffer" === r.type && Q(r.data)) return l(e, r.data)
                }
                throw new
                    TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function y(t) {
                if (t >= o())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" +
                        o().toString(16) +
                        " bytes");
                return 0 | t
            }

            function g(e) { return+e != e && (e = 0), t.alloc(+e) }

            function v(e, r) {
                if (t.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer &&
                    "function" == typeof ArrayBuffer.isView &&
                    (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var i = !1;;)
                    switch (r) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return n;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return q(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * n;
                    case"hex":
                        return n >>> 1;
                    case"base64":
                        return V(e).length;
                    default:
                        if (i) return q(e).length;
                        r = ("" + r).toLowerCase(), i = !0
                    }
            }

            function _(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return"";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return"";
                if (r >>>= 0, e >>>= 0, r <= e) return"";
                for (t || (t = "utf8");;)
                    switch (t) {
                    case"hex":
                        return O(this, e, r);
                    case"utf8":
                    case"utf-8":
                        return x(this, e, r);
                    case"ascii":
                        return k(this, e, r);
                    case"latin1":
                    case"binary":
                        return U(this, e, r);
                    case"base64":
                        return P(this, e, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return D(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                    }
            }

            function w(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function m(e, r, n, i, o) {
                if (0 === e.length) return-1;
                if ("string" == typeof n
                        ? (i = n, n = 0)
                        : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n,
                    isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return-1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return-1;
                    n = 0
                }
                if ("string" == typeof r && (r = t.from(r, i)), t
                    .isBuffer(r)) return 0 === r.length ? -1 : b(e, r, n, i, o);
                if ("number" == typeof r)
                    return r = 255 & r, t.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
                        ? o
                        ? Uint8Array.prototype.indexOf.call(e, r, n)
                        : Uint8Array.prototype.lastIndexOf.call(e, r, n)
                        : b(e, [r], n, i, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function b(t, e, r, n, i) {
                function o(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) }

                var s = 1, u = t.length, a = e.length;
                if (void 0 !== n &&
                (n = String(n)
                    .toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return-1;
                    s = 2, u /= 2, a /= 2, r /= 2
                }
                var f;
                if (i) {
                    var c = -1;
                    for (f = r; f < u; f++)
                        if (o(t, f) === o(e, c === -1 ? 0 : f - c)) {
                            if (c === -1 && (c = f), f - c + 1 === a) return c * s
                        } else c !== -1 && (f -= f - c), c = -1
                } else
                    for (r + a > u && (r = u - a), f = r; f >= 0; f--) {
                        for (var h = !0, l = 0; l < a; l++)
                            if (o(t, f + l) !== o(e, l)) {
                                h = !1;
                                break
                            }
                        if (h) return f
                    }
                return-1
            }

            function E(t, e, r, n) {
                r = Number(r) || 0;
                var i = t.length - r;
                n ? (n = Number(n), n > i && (n = i)) : n = i;
                var o = e.length;
                if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                    var u = parseInt(e.substr(2 * s, 2), 16);
                    if (isNaN(u)) return s;
                    t[r + s] = u
                }
                return s
            }

            function A(t, e, r, n) { return X(q(e, t.length - r), t, r, n) }

            function T(t, e, r, n) { return X(J(e), t, r, n) }

            function R(t, e, r, n) { return T(t, e, r, n) }

            function B(t, e, r, n) { return X(V(e), t, r, n) }

            function S(t, e, r, n) { return X(K(e, t.length - r), t, r, n) }

            function P(t, e, r) {
                return 0 === e && r === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, r))
            }

            function x(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r;) {
                    var o = t[i], s = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (i + u <= r) {
                        var a, f, c, h;
                        switch (u) {
                        case 1:
                            o < 128 && (s = o);
                            break;
                        case 2:
                            a = t[i + 1], 128 === (192 & a) && (h = (31 & o) << 6 | 63 & a, h > 127 && (s = h));
                            break;
                        case 3:
                            a = t[i + 1], f = t[i + 2], 128 === (192 & a) &&
                                128 === (192 & f) &&
                                (h = (15 & o) << 12 | (63 & a) << 6 | 63 & f,
                                    h > 2047 && (h < 55296 || h > 57343) && (s = h));
                            break;
                        case 4:
                            a = t[i + 1], f = t[i + 2], c = t[i + 3],
                                128 === (192 & a) &&
                                    128 === (192 & f) &&
                                    128 === (192 & c) &&
                                    (h = (15 & o) << 18 | (63 & a) << 12 | (63 & f) << 6 | 63 & c,
                                        h > 65535 && h < 1114112 && (s = h))
                        }
                    }
                    null === s
                        ? (s = 65533, u = 1)
                        : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n
                        .push(s), i += u
                }
                return I(n)
            }

            function I(t) {
                var e = t.length;
                if (e <= tt) return String.fromCharCode.apply(String, t);
                for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += tt));
                return r
            }

            function k(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function U(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function O(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = e; o < r; ++o) i += G(t[o]);
                return i
            }

            function D(t, e, r) {
                for (var n = t
                             .slice(e, r),
                    i = "",
                    o = 0;
                    o < n.length;
                    o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function j(t, e, r) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function C(e, r, n, i, o, s) {
                if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > o || r < s) throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length) throw new RangeError("Index out of range")
            }

            function M(t, e, r, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 2);
                    i < o;
                    ++i
                ) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function L(t, e, r, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
            }

            function Y(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function N(t, e, r, n, i) {
                return i || Y(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), W
                    .write(t, e, r, n, 23, 4), r + 4
            }

            function z(t, e, r, n, i) {
                return i || Y(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), W
                    .write(t, e, r, n, 52, 8), r + 8
            }

            function F(t) {
                if (t = H(t).replace(et, ""), t.length < 2) return"";
                for (; t.length % 4 !== 0;) t += "=";
                return t
            }

            function H(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

            function G(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function q(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function J(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }

            function K(t, e) {
                for (var r, n, i, o = [], s = 0;
                    s < t.length && !((e -= 2) < 0);
                    ++s
                ) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                return o
            }

            function V(t) { return Z.toByteArray(F(t)) }

            function X(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function $(t) { return t !== t }

            var Z = r(26), W = r(34), Q = r(35);
            e.Buffer = t, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, t
                    .TYPED_ARRAY_SUPPORT = void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : i(), e
                    .kMaxLength = o(), t
                    .poolSize = 8192, t._augment = function(e) { return e.__proto__ = t.prototype, e }, t
                    .from = function(t, e, r) { return u(null, t, e, r) },
                t.TYPED_ARRAY_SUPPORT &&
                (t.prototype.__proto__ = Uint8Array.prototype, t
                    .__proto__ = Uint8Array, "undefined" != typeof Symbol &&
                    Symbol.species &&
                    t[Symbol.species] === t &&
                    Object.defineProperty(t, Symbol.species, { value: null, configurable: !0 })), t
                    .alloc = function(t, e, r) { return f(null, t, e, r) }, t
                    .allocUnsafe = function(t) { return c(null, t) }, t
                    .allocUnsafeSlow = function(t) { return c(null, t) }, t
                    .isBuffer = function(t) { return!(null == t || !t._isBuffer) }, t.compare = function(e, r) {
                    if (!t.isBuffer(e) || !t.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
                    if (e === r) return 0;
                    for (var n = e.length, i = r.length, o = 0, s = Math.min(n, i); o < s; ++o)
                        if (e[o] !== r[o]) {
                            n = e[o], i = r[o];
                            break
                        }
                    return n < i ? -1 : i < n ? 1 : 0
                }, t.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return!0;
                    default:
                        return!1
                    }
                }, t.concat = function(e, r) {
                    if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return t.alloc(0);
                    var n;
                    if (void 0 === r) for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
                    var i = t.allocUnsafe(r), o = 0;
                    for (n = 0; n < e.length; ++n) {
                        var s = e[n];
                        if (!t.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(i, o), o += s.length
                    }
                    return i
                }, t.byteLength = v, t.prototype._isBuffer = !0, t.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) w(this, e, e + 1);
                    return this
                }, t.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) w(this, e, e + 3), w(this, e + 1, e + 2);
                    return this
                }, t.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8)
                        w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4);
                    return this
                }, t.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : _.apply(this, arguments)
                }, t.prototype.equals = function(e) {
                    if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === t.compare(this, e)
                }, t.prototype.inspect = function() {
                    var t = "", r = e.INSPECT_MAX_BYTES;
                    return this.length > 0 &&
                    (t = this.toString("hex", 0, r).match(/.{2}/g)
                        .join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
                }, t.prototype.compare = function(e, r, n, i, o) {
                    if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === r && (r = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0),
                        void 0 === o && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length
                    ) throw new RangeError("out of range index");
                    if (i >= o && r >= n) return 0;
                    if (i >= o) return-1;
                    if (r >= n) return 1;
                    if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
                    for (var s = o - i, u = n - r, a = Math.min(s, u), f = this.slice(i, o), c = e.slice(r, n), h = 0;
                        h < a;
                        ++h)
                        if (f[h] !== c[h]) {
                            s = f[h], u = c[h];
                            break
                        }
                    return s < u ? -1 : u < s ? 1 : 0
                }, t.prototype.includes = function(t, e, r) { return this.indexOf(t, e, r) !== -1 }, t.prototype
                    .indexOf = function(t, e, r) { return m(this, t, e, r, !0) }, t.prototype
                    .lastIndexOf = function(t, e, r) { return m(this, t, e, r, !1) }, t.prototype
                    .write = function(t, e, r, n) {
                        if (void 0 === e) n = "utf8", r = this.length, e = 0;
                        else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                        else {
                            if (!isFinite(e))
                                throw new
                                    Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e = 0 | e, isFinite(r) ? (r = 0 | r, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                        }
                        var i = this.length - e;
                        if ((void 0 === r || r > i) && (r = i), t
                            .length >
                            0 &&
                            (r < 0 || e < 0) ||
                            e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1;;)
                            switch (n) {
                            case"hex":
                                return E(this, t, e, r);
                            case"utf8":
                            case"utf-8":
                                return A(this, t, e, r);
                            case"ascii":
                                return T(this, t, e, r);
                            case"latin1":
                            case"binary":
                                return R(this, t, e, r);
                            case"base64":
                                return B(this, t, e, r);
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return S(this, t, e, r);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), o = !0
                            }
                    }, t.prototype.toJSON = function() {
                    return{ type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }
                };
            var tt = 4096;
            t.prototype.slice = function(e, r) {
                var n = this.length;
                e = ~~e, r = void 0 === r ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n),
                    r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
                var i;
                if (t.TYPED_ARRAY_SUPPORT) i = this.subarray(e, r), i.__proto__ = t.prototype;
                else {
                    var o = r - e;
                    i = new t(o, (void 0));
                    for (var s = 0; s < o; ++s) i[s] = this[s + e]
                }
                return i
            }, t.prototype.readUIntLE = function(t, e, r) {
                t = 0 | t, e = 0 | e, r || j(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, t.prototype.readUIntBE = function(t, e, r) {
                t = 0 | t, e = 0 | e, r || j(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, t.prototype.readUInt8 = function(t, e) { return e || j(t, 1, this.length), this[t] }, t.prototype
                .readUInt16LE = function(t, e) { return e || j(t, 2, this.length), this[t] | this[t + 1] << 8 }, t
                .prototype
                .readUInt16BE = function(t, e) { return e || j(t, 2, this.length), this[t] << 8 | this[t + 1] }, t
                .prototype
                .readUInt32LE = function(t, e) {
                    return e || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) +
                        16777216 * this[t + 3]
                }, t.prototype.readUInt32BE = function(t, e) {
                return e || j(t, 4, this.length), 16777216 * this[t] +
                    (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, t.prototype.readIntLE = function(t, e, r) {
                t = 0 | t, e = 0 | e, r || j(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n
            }, t.prototype.readIntBE = function(t, e, r) {
                t = 0 | t, e = 0 | e, r || j(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, t.prototype.readInt8 = function(t, e) {
                return e || j(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
            }, t.prototype.readInt16LE = function(t, e) {
                e || j(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, t.prototype.readInt16BE = function(t, e) {
                e || j(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, t.prototype.readInt32LE = function(t, e) {
                return e || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, t.prototype.readInt32BE = function(t, e) {
                return e || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, t.prototype
                .readFloatLE = function(t, e) { return e || j(t, 4, this.length), W.read(this, t, !0, 23, 4) }, t
                .prototype
                .readFloatBE = function(t, e) { return e || j(t, 4, this.length), W.read(this, t, !1, 23, 4) }, t
                .prototype.readDoubleLE = function(t, e) {
                    return e || j(t, 8, this.length), W.read(this, t, !0, 52, 8)
                }, t
                .prototype.readDoubleBE = function(t, e) {
                    return e || j(t, 8, this.length), W.read(this, t, !1, 52, 8)
                }, t
                .prototype.writeUIntLE = function(t, e, r, n) {
                    if (t = +t, e = 0 | e, r = 0 | r, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        C(this, t, e, r, i, 0)
                    }
                    var o = 1, s = 0;
                    for (this[e] = 255 & t; ++s < r && (o *= 256);) this[e + s] = t / o & 255;
                    return e + r
                }, t.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e = 0 | e, r = 0 | r, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    C(this, t, e, r, i, 0)
                }
                var o = r - 1, s = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
                return e + r
            }, t.prototype.writeUInt8 = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 1, 255, 0), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    this[
                        r] = 255 & e, r + 1
            }, t.prototype.writeUInt16LE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 2, 65535, 0),
                    t.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : M(this, e, r, !0), r + 2
            }, t.prototype.writeUInt16BE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 2, 65535, 0),
                    t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : M(this, e, r, !1), r + 2
            }, t.prototype.writeUInt32LE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 4, 4294967295, 0),
                    t.TYPED_ARRAY_SUPPORT
                        ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = 255 & e)
                        : L(this, e, r, !0), r + 4
            }, t.prototype.writeUInt32BE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 4, 4294967295, 0),
                    t.TYPED_ARRAY_SUPPORT
                        ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e)
                        : L(this, e, r, !1), r + 4
            }, t.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e = 0 | e, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    C(this, t, e, r, i - 1, -i)
                }
                var o = 0, s = 1, u = 0;
                for (this[e] = 255 & t;
                    ++o < r &&
                    (s *= 256
                    );
                ) t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), this[e + o] = (t / s >> 0) - u & 255;
                return e + r
            }, t.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e = 0 | e, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    C(this, t, e, r, i - 1, -i)
                }
                var o = r - 1, s = 1, u = 0;
                for (this[e + o] = 255 & t;
                    --o >= 0 &&
                    (s *= 256
                    );
                ) t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), this[e + o] = (t / s >> 0) - u & 255;
                return e + r
            }, t.prototype.writeInt8 = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 1, 127, -128),
                    t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    e < 0 && (e = 255 + e + 1), this[r] = 255 & e, r + 1
            }, t.prototype.writeInt16LE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 2, 32767, -32768),
                    t.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : M(this, e, r, !0), r + 2
            }, t.prototype.writeInt16BE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 2, 32767, -32768),
                    t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : M(this, e, r, !1), r + 2
            }, t.prototype.writeInt32LE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 4, 2147483647, -2147483648),
                    t.TYPED_ARRAY_SUPPORT
                        ? (this[r] = 255 & e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24)
                        : L(this, e, r, !0), r + 4
            }, t.prototype.writeInt32BE = function(e, r, n) {
                return e = +e, r = 0 | r, n || C(this, e, r, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    t.TYPED_ARRAY_SUPPORT
                        ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e)
                        : L(this, e, r, !1), r + 4
            }, t.prototype.writeFloatLE = function(t, e, r) { return N(this, t, e, !0, r) }, t.prototype
                .writeFloatBE = function(t, e, r) { return N(this, t, e, !1, r) }, t.prototype
                .writeDoubleLE = function(t, e, r) { return z(this, t, e, !0, r) }, t.prototype
                .writeDoubleBE = function(t, e, r) { return z(this, t, e, !1, r) }, t.prototype
                .copy = function(e, r, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), r >= e.length && (r = e.length), r || (r = 0),
                        i > 0 && i < n && (i = n), i === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (r < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
                    var o, s = i - n;
                    if (this === e && n < r && r < i) for (o = s - 1; o >= 0; --o) e[o + r] = this[o + n];
                    else if (s < 1e3 || !t.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) e[o + r] = this[o + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), r);
                    return s
                }, t.prototype.fill = function(e, r, n, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof r
                        ? (i = r, r = 0, n = this.length)
                        : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof e && (e = 255 & e);
                if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
                if (n <= r) return this;
                r >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                var s;
                if ("number" == typeof e) for (s = r; s < n; ++s) this[s] = e;
                else {
                    var u = t.isBuffer(e) ? e : q(new t(e, i).toString()), a = u.length;
                    for (s = 0; s < n - r; ++s) this[s + r] = u[s % a]
                }
                return this
            };
            var et = /[^+\/0-9A-Za-z-_]/g
        }).call(e, r(4).Buffer, function() { return this }())
    },
    16: function(t, e, r) {
        (function(t, n) {
            function i(t, r) {
                var n = { seen: [], stylize: s };
                return arguments
                        .length >=
                        3 &&
                        (n.depth = arguments[2]), arguments
                        .length >=
                        4 &&
                        (n
                            .colors = arguments[3]), y(r) ? n.showHidden = r : r && e._extend(n, r),
                    b(n.showHidden) && (n.showHidden = !1), b(n
                            .depth) &&
                        (n.depth = 2), b(n
                            .colors) &&
                        (n.colors = !1), b(n
                        .customInspect) &&
                    (n.customInspect = !0), n.colors && (n.stylize = o), a(n, t, n.depth)
            }

            function o(t, e) {
                var r = i.styles[e];
                return r ? "[" + i.colors[r][0] + "m" + t + "[" + i.colors[r][1] + "m" : t
            }

            function s(t, e) { return t }

            function u(t) {
                var e = {};
                return t.forEach(function(t, r) { e[t] = !0 }), e
            }

            function a(t, r, n) {
                if (t.customInspect &&
                    r &&
                    B(r.inspect) &&
                    r.inspect !== e.inspect &&
                    (!r.constructor || r.constructor.prototype !== r)) {
                    var i = r.inspect(n, t);
                    return w(i) || (i = a(t, i, n)), i
                }
                var o = f(t, r);
                if (o) return o;
                var s = Object.keys(r), y = u(s);
                if (t
                    .showHidden &&
                    (s = Object.getOwnPropertyNames(r)), R(r) &&
                    (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return c(r);
                if (0 === s.length) {
                    if (B(r)) {
                        var g = r.name ? ": " + r.name : "";
                        return t.stylize("[Function" + g + "]", "special")
                    }
                    if (E(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                    if (T(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                    if (R(r)) return c(r)
                }
                var v = "", _ = !1, m = ["{", "}"];
                if (d(r) && (_ = !0, m = ["[", "]"]), B(r)) {
                    var b = r.name ? ": " + r.name : "";
                    v = " [Function" + b + "]"
                }
                if (E(r) && (v = " " + RegExp.prototype.toString.call(r)),
                    T(r) && (v = " " + Date.prototype.toUTCString.call(r)), R(r) && (v = " " + c(r)),
                    0 === s.length && (!_ || 0 == r.length)) return m[0] + v + m[1];
                if (n < 0)
                    return E(r)
                        ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                        : t.stylize("[Object]", "special");
                t.seen.push(r);
                var A;
                return A = _ ? h(t, r, n, y, s) : s.map(function(e) { return l(t, r, n, y, e, _) }), t.seen
                    .pop(), p(A, v, m)
            }

            function f(t, e) {
                if (b(e)) return t.stylize("undefined", "undefined");
                if (w(e)) {
                    var r = "'" +
                        JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') +
                        "'";
                    return t.stylize(r, "string")
                }
                return _(e)
                    ? t.stylize("" + e, "number")
                    : y(e) ? t.stylize("" + e, "boolean") : g(e) ? t.stylize("null", "null") : void 0
            }

            function c(t) { return"[" + Error.prototype.toString.call(t) + "]" }

            function h(t, e, r, n, i) {
                for (var o = [], s = 0, u = e.length;
                    s < u;
                    ++s
                ) k(e, String(s)) ? o.push(l(t, e, r, n, String(s), !0)) : o.push("");
                return i.forEach(function(i) { i.match(/^\d+$/) || o.push(l(t, e, r, n, i, !0)) }), o
            }

            function l(t, e, r, n, i, o) {
                var s, u, f;
                if (f = Object
                        .getOwnPropertyDescriptor(e, i) ||
                        { value: e[i] }, f.get
                        ? u = f.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special")
                        : f
                        .set &&
                        (u = t
                            .stylize("[Setter]", "special")), k(n, i) || (s = "[" + i + "]"),
                    u ||
                    (t.seen.indexOf(f.value) < 0
                        ? (u = g(r) ? a(t, f.value, null) : a(t, f.value, r - 1),
                            u.indexOf("\n") > -1 &&
                            (u = o
                                ? u.split("\n").map(function(t) { return"  " + t }).join("\n").substr(2)
                                : "\n" + u.split("\n").map(function(t) { return"   " + t }).join("\n")))
                        : u = t.stylize("[Circular]", "special")), b(s)) {
                    if (o && i.match(/^\d+$/)) return u;
                    s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                        ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name"))
                        : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t
                            .stylize(s, "string"))
                }
                return s + ": " + u
            }

            function p(t, e, r) {
                var n = 0,
                    i = t.reduce(function(t, e) {
                            return n++, e.indexOf("\n") >= 0 && n++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        },
                        0);
                return i > 60
                    ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1]
                    : r[0] + e + " " + t.join(", ") + " " + r[1]
            }

            function d(t) { return Array.isArray(t) }

            function y(t) { return"boolean" == typeof t }

            function g(t) { return null === t }

            function v(t) { return null == t }

            function _(t) { return"number" == typeof t }

            function w(t) { return"string" == typeof t }

            function m(t) { return"symbol" == typeof t }

            function b(t) { return void 0 === t }

            function E(t) { return A(t) && "[object RegExp]" === P(t) }

            function A(t) { return"object" == typeof t && null !== t }

            function T(t) { return A(t) && "[object Date]" === P(t) }

            function R(t) { return A(t) && ("[object Error]" === P(t) || t instanceof Error) }

            function B(t) { return"function" == typeof t }

            function S(t) {
                return null === t ||
                    "boolean" == typeof t ||
                    "number" == typeof t ||
                    "string" == typeof t ||
                    "symbol" == typeof t ||
                    "undefined" == typeof t
            }

            function P(t) { return Object.prototype.toString.call(t) }

            function x(t) { return t < 10 ? "0" + t.toString(10) : t.toString(10) }

            function I() {
                var t = new Date, e = [x(t.getHours()), x(t.getMinutes()), x(t.getSeconds())].join(":");
                return[t.getDate(), j[t.getMonth()], e].join(" ")
            }

            function k(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            var U = /%[sdj%]/g;
            e.format = function(t) {
                if (!w(t)) {
                    for (var e = [], r = 0; r < arguments.length; r++) e.push(i(arguments[r]));
                    return e.join(" ")
                }
                for (var r = 1,
                    n = arguments,
                    o = n.length,
                    s = String(t).replace(U,
                        function(t) {
                            if ("%%" === t) return"%";
                            if (r >= o) return t;
                            switch (t) {
                            case"%s":
                                return String(n[r++]);
                            case"%d":
                                return Number(n[r++]);
                            case"%j":
                                try {
                                    return JSON.stringify(n[r++])
                                } catch (e) {
                                    return"[Circular]"
                                }
                            default:
                                return t
                            }
                        }),
                    u = n[r];
                    r < o;
                    u = n[++r]) s += g(u) || !A(u) ? " " + u : " " + i(u);
                return s
            }, e.deprecate = function(r, i) {
                function o() {
                    if (!s) {
                        if (n.throwDeprecation) throw new Error(i);
                        n.traceDeprecation ? console.trace(i) : console.error(i), s = !0
                    }
                    return r.apply(this, arguments)
                }

                if (b(t.process)) return function() { return e.deprecate(r, i).apply(this, arguments) };
                if (n.noDeprecation === !0) return r;
                var s = !1;
                return o
            };
            var O, D = {};
            e.debuglog = function(t) {
                if (b(O) && (O = n.env.NODE_DEBUG || ""), t = t.toUpperCase(), !D[t])
                    if (new RegExp("\\b" + t + "\\b", "i").test(O)) {
                        var r = n.pid;
                        D[t] = function() {
                            var n = e.format.apply(e, arguments);
                            console.error("%s %d: %s", t, r, n)
                        }
                    } else D[t] = function() {};
                return D[t]
            }, e.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.isArray = d, e.isBoolean = y, e.isNull = g, e.isNullOrUndefined = v, e.isNumber = _, e.isString = w, e
                .isSymbol = m, e.isUndefined = b, e.isRegExp = E, e.isObject = A, e.isDate = T, e.isError = R, e
                .isFunction = B, e.isPrimitive = S, e.isBuffer = r(52);
            var j = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            e.log = function() { console.log("%s - %s", I(), e.format.apply(e, arguments)) }, e.inherits = r(51), e
                ._extend = function(t, e) {
                    if (!e || !A(e)) return t;
                    for (var r = Object.keys(e), n = r.length; n--;) t[r[n]] = e[r[n]];
                    return t
                }
        }).call(e, function() { return this }(), r(19))
    },
    17: function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill ||
                (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    },
    19: function(t, e) {
        function r() { throw new Error("setTimeout has not been defined") }

        function n() { throw new Error("clearTimeout has not been defined") }

        function i(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
            try {
                return c(t, 0)
            } catch (e) {
                try {
                    return c.call(null, t, 0)
                } catch (e) {
                    return c.call(this, t, 0)
                }
            }
        }

        function o(t) {
            if (h === clearTimeout) return clearTimeout(t);
            if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
            try {
                return h(t)
            } catch (e) {
                try {
                    return h.call(null, t)
                } catch (e) {
                    return h.call(this, t)
                }
            }
        }

        function s() { y && p && (y = !1, p.length ? d = p.concat(d) : g = -1, d.length && u()) }

        function u() {
            if (!y) {
                var t = i(s);
                y = !0;
                for (var e = d.length; e;) {
                    for (p = d, d = []; ++g < e;) p && p[g].run();
                    g = -1, e = d.length
                }
                p = null, y = !1, o(t)
            }
        }

        function a(t, e) { this.fun = t, this.array = e }

        function f() {}

        var c, h, l = t.exports = {};
        !function() {
            try {
                c = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                c = r
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                h = n
            }
        }();
        var p, d = [], y = !1, g = -1;
        l.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            d.push(new a(t, e)), 1 !== d.length || y || i(u)
        }, a.prototype.run = function() { this.fun.apply(null, this.array) }, l.title = "browser", l.browser = !0, l
            .env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = f, l.addListener = f, l.once = f, l
            .off = f, l.removeListener = f, l.removeAllListeners = f, l.emit = f, l
            .binding = function(t) { throw new Error("process.binding is not supported") }, l
            .cwd = function() { return"/" }, l
            .chdir = function(t) { throw new Error("process.chdir is not supported") }, l
            .umask = function() { return 0 }
    },
    20: function(t, e, r) {
        (function(e) {
            function n(t) {
                return function() {
                    var r = [],
                        n = {
                            update: function(t, n) { return e.isBuffer(t) || (t = new e(t, n)), r.push(t), this },
                            digest: function(n) {
                                var i = e.concat(r), o = t(i);
                                return r = null, n ? o.toString(n) : o
                            }
                        };
                    return n
                }
            }

            var i = r(47), o = n(r(31)), s = n(r(45));
            t.exports = function(t) { return"md5" === t ? new o : "rmd160" === t ? new s : i(t) }
        }).call(e, r(4).Buffer)
    },
    26: function(t, e) {
        "use strict";

        function r(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return"=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
        }

        function n(t) { return 3 * t.length / 4 - r(t) }

        function i(t) {
            var e, n, i, o, s, u, a = t.length;
            s = r(t), u = new c(3 * a / 4 - s), i = s > 0 ? a - 4 : a;
            var h = 0;
            for (e = 0, n = 0; e < i; e += 4, n += 3)
                o = f[t.charCodeAt(e)] << 18 |
                    f[t.charCodeAt(e + 1)] << 12 |
                    f[t.charCodeAt(e + 2)] << 6 |
                    f[t.charCodeAt(e + 3)], u[h++] = o >> 16 & 255, u[h++] = o >> 8 & 255, u[h++] = 255 & o;
            return 2 === s
                ? (o = f[t.charCodeAt(e)] << 2 | f[t.charCodeAt(e + 1)] >> 4, u[h++] = 255 & o)
                : 1 === s &&
                (o = f[t
                        .charCodeAt(e)] <<
                    10 |
                    f[t.charCodeAt(e + 1)] << 4 |
                    f[t.charCodeAt(e + 2)] >> 2, u[h++] = o >> 8 & 255, u[h++] = 255 & o), u
        }

        function o(t) { return a[t >> 18 & 63] + a[t >> 12 & 63] + a[t >> 6 & 63] + a[63 & t] }

        function s(t, e, r) {
            for (var n, i = [], s = e; s < r; s += 3) n = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], i.push(o(n));
            return i.join("")
        }

        function u(t) {
            for (var e, r = t.length, n = r % 3, i = "", o = [], u = 16383, f = 0, c = r - n;
                f < c;
                f += u
            ) o.push(s(t, f, f + u > c ? c : f + u));
            return 1 === n
                ? (e = t[r - 1], i += a[e >> 2], i += a[e << 4 & 63], i += "==")
                : 2 === n &&
                (e = (t[r - 2] << 8) + t[r - 1], i += a[e >> 10], i += a[e >> 4 & 63], i += a[e << 2 & 63], i += "="), o
                .push(i), o.join("")
        }

        e.byteLength = n, e.toByteArray = i, e.fromByteArray = u;
        for (var a = [],
            f = [],
            c = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            l = 0,
            p = h.length;
            l < p;
            ++l) a[l] = h[l], f[h.charCodeAt(l)] = l;
        f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
    },
    28: function(t, e, r) {
        (function(e) {
            function n(t, r) {
                if (!(this instanceof n)) return new n(t, r);
                this._opad = a, this._alg = t;
                var s = "sha512" === t ? 128 : 64;
                r = this._key = e.isBuffer(r) ? r : new e(r), r.length > s
                    ? r = i(t).update(r).digest()
                    : r.length < s && (r = e.concat([r, o], s));
                for (var u = this
                             ._ipad = new e(s),
                    a = this._opad = new e(s),
                    f = 0;
                    f < s;
                    f++) u[f] = 54 ^ r[f], a[f] = 92 ^ r[f];
                this._hash = i(t).update(u)
            }

            var i = r(20), o = new e(128);
            o.fill(0), t.exports = n, n.prototype.update = function(t, e) { return this._hash.update(t, e), this }, n
                .prototype.digest = function(t) {
                    var e = this._hash.digest();
                    return i(this._alg).update(this._opad).update(e).digest(t)
                }
        }).call(e, r(4).Buffer)
    },
    29: function(t, e, r) {
        (function(e) {
            function r(t, r) {
                if (t.length % o !== 0) {
                    var n = t.length + (o - t.length % o);
                    t = e.concat([t, s], n)
                }
                for (var i = [], u = r ? t.readInt32BE : t.readInt32LE, a = 0;
                    a < t.length;
                    a += o
                ) i.push(u.call(t, a));
                return i
            }

            function n(t, r, n) {
                for (var i = new e(r), o = n ? i.writeInt32BE : i.writeInt32LE, s = 0;
                    s < t.length;
                    s++
                ) o.call(i, t[s], 4 * s, !0);
                return i
            }

            function i(t, i, o, s) {
                e.isBuffer(t) || (t = new e(t));
                var a = i(r(t, s), t.length * u);
                return n(a, o, s)
            }

            var o = 4, s = new e(o);
            s.fill(0);
            var u = 8;
            t.exports = { hash: i }
        }).call(e, r(4).Buffer)
    },
    30: function(t, e, r) {
        (function(t) {
            function n() {
                var t = [].slice.call(arguments).join(" ");
                throw new Error([t, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"]
                    .join("\n"))
            }

            function i(t, e) { for (var r in t) e(t[r], r) }

            var o = r(33);
            e.createHash = r(20), e.createHmac = r(28), e.randomBytes = function(e, r) {
                if (!r || !r.call) return new t(o(e));
                try {
                    r.call(this, void 0, new t(o(e)))
                } catch (n) {
                    r(n)
                }
            }, e.getHashes = function() { return["sha1", "sha256", "sha512", "md5", "rmd160"] };
            var s = r(32)(e);
            e.pbkdf2 = s.pbkdf2, e.pbkdf2Sync = s
                .pbkdf2Sync, i([
                    "createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv",
                    "createSign",
                    "createVerify", "createDiffieHellman"
                ],
                function(t) { e[t] = function() { n("sorry,", t, "is not implemented yet") } })
        }).call(e, r(4).Buffer)
    },
    31: function(t, e, r) {
        function n(t, e) {
            t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
            for (var r = 1732584193, n = -271733879, i = -1732584194, c = 271733878, h = 0; h < t.length; h += 16) {
                var l = r, p = n, d = i, y = c;
                r = o(r, n, i, c, t[h + 0], 7, -680876936), c = o(c, r, n, i, t[h + 1], 12, -389564586), i =
                        o(i, c, r, n, t[h + 2], 17, 606105819), n = o(n, i, c, r, t[h + 3], 22, -1044525330), r =
                        o(r, n, i, c, t[h + 4], 7, -176418897), c = o(c, r, n, i, t[h + 5], 12, 1200080426), i =
                        o(i, c, r, n, t[h + 6], 17, -1473231341), n = o(n, i, c, r, t[h + 7], 22, -45705983), r =
                        o(r, n, i, c, t[h + 8], 7, 1770035416), c = o(c, r, n, i, t[h + 9], 12, -1958414417), i =
                        o(i, c, r, n, t[h + 10], 17, -42063), n = o(n, i, c, r, t[h + 11], 22, -1990404162),
                    r = o(r, n, i, c, t[h + 12], 7, 1804603682), c = o(c, r, n, i, t[h + 13], 12, -40341101), i =
                        o(i, c, r, n, t[h + 14], 17, -1502002290), n = o(n, i, c, r, t[h + 15], 22, 1236535329), r =
                        s(r, n, i, c, t[h + 1], 5, -165796510), c = s(c, r, n, i, t[h + 6], 9, -1069501632), i =
                        s(i, c, r, n, t[h + 11], 14, 643717713), n = s(n, i, c, r, t[h + 0], 20, -373897302), r =
                        s(r, n, i, c, t[h + 5], 5, -701558691), c = s(c, r, n, i, t[h + 10], 9, 38016083), i =
                        s(i, c, r, n, t[h + 15], 14, -660478335), n = s(n, i, c, r, t[h + 4], 20, -405537848), r =
                        s(r, n, i, c, t[h + 9], 5, 568446438), c = s(c, r, n, i, t[h + 14], 9, -1019803690), i =
                        s(i, c, r, n, t[h + 3], 14, -187363961), n = s(n, i, c, r, t[h + 8], 20, 1163531501), r =
                        s(r, n, i, c, t[h + 13], 5, -1444681467), c = s(c, r, n, i, t[h + 2], 9, -51403784), i =
                        s(i, c, r, n, t[h + 7], 14, 1735328473), n = s(n, i, c, r, t[h + 12], 20, -1926607734), r =
                        u(r, n, i, c, t[h + 5], 4, -378558), c = u(c, r, n, i, t[h + 8], 11, -2022574463), i =
                        u(i, c, r, n, t[h + 11], 16, 1839030562), n = u(n, i, c, r, t[h + 14], 23, -35309556), r =
                        u(r, n, i, c, t[h + 1], 4, -1530992060), c = u(c, r, n, i, t[h + 4], 11, 1272893353), i =
                        u(i, c, r, n, t[h + 7], 16, -155497632), n = u(n, i, c, r, t[h + 10], 23, -1094730640), r =
                        u(r, n, i, c, t[h + 13], 4, 681279174), c = u(c, r, n, i, t[h + 0], 11, -358537222), i =
                        u(i, c, r, n, t[h + 3], 16, -722521979), n = u(n, i, c, r, t[h + 6], 23, 76029189), r =
                        u(r, n, i, c, t[h + 9], 4, -640364487), c = u(c, r, n, i, t[h + 12], 11, -421815835), i =
                        u(i, c, r, n, t[h + 15], 16, 530742520), n = u(n, i, c, r, t[h + 2], 23, -995338651), r =
                        a(r, n, i, c, t[h + 0], 6, -198630844), c = a(c, r, n, i, t[h + 7], 10, 1126891415), i =
                        a(i, c, r, n, t[h + 14], 15, -1416354905), n = a(n, i, c, r, t[h + 5], 21, -57434055), r =
                        a(r, n, i, c, t[h + 12], 6, 1700485571), c = a(c, r, n, i, t[h + 3], 10, -1894986606), i =
                        a(i, c, r, n, t[h + 10], 15, -1051523), n = a(n, i, c, r, t[h + 1], 21, -2054922799), r =
                        a(r, n, i, c, t[h + 8], 6, 1873313359), c = a(c, r, n, i, t[h + 15], 10, -30611744), i =
                        a(i, c, r, n, t[h + 6], 15, -1560198380), n = a(n, i, c, r, t[h + 13], 21, 1309151649), r =
                        a(r, n, i, c, t[h + 4], 6, -145523070), c = a(c, r, n, i, t[h + 11], 10, -1120210379), i =
                        a(i, c, r, n, t[h + 2], 15, 718787259), n = a(n, i, c, r, t[h + 9], 21, -343485551), r =
                        f(r, l), n = f(n, p), i = f(i, d), c = f(c, y)
            }
            return Array(r, n, i, c)
        }

        function i(t, e, r, n, i, o) { return f(c(f(f(e, t), f(n, o)), i), r) }

        function o(t, e, r, n, o, s, u) { return i(e & r | ~e & n, t, e, o, s, u) }

        function s(t, e, r, n, o, s, u) { return i(e & n | r & ~n, t, e, o, s, u) }

        function u(t, e, r, n, o, s, u) { return i(e ^ r ^ n, t, e, o, s, u) }

        function a(t, e, r, n, o, s, u) { return i(r ^ (e | ~n), t, e, o, s, u) }

        function f(t, e) {
            var r = (65535 & t) + (65535 & e), n = (t >> 16) + (e >> 16) + (r >> 16);
            return n << 16 | 65535 & r
        }

        function c(t, e) { return t << e | t >>> 32 - e }

        var h = r(29);
        t.exports = function(t) { return h.hash(t, n, 16) }
    },
    32: function(t, e, r) {
        var n = r(39);
        t.exports = function(t, e) {
            e = e || {};
            var r = n(t);
            return e.pbkdf2 = r.pbkdf2, e.pbkdf2Sync = r.pbkdf2Sync, e
        }
    },
    33: function(t, e, r) {
        (function(e, n) {
            !function() {
                var i = ("undefined" == typeof window ? e : window) || {};
                _crypto = i.crypto || i.msCrypto || r(53), t.exports = function(t) {
                    if (_crypto.getRandomValues) {
                        var e = new n(t);
                        return _crypto.getRandomValues(e), e
                    }
                    if (_crypto.randomBytes) return _crypto.randomBytes(t);
                    throw new
                        Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
                }
            }()
        }).call(e, function() { return this }(), r(4).Buffer)
    },
    34: function(t, e) {
        e.read = function(t, e, r, n, i) {
            var o,
                s,
                u = 8 * i - n - 1,
                a = (1 << u) - 1,
                f = a >> 1,
                c = -7,
                h = r ? i - 1 : 0,
                l = r ? -1 : 1,
                p = t[e + h];
            for (h += l, o = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; o = 256 * o + t[e + h], h += l, c -= 8);
            for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += l, c -= 8);
            if (0 === o) o = 1 - f;
            else {
                if (o === a) return s ? NaN : (p ? -1 : 1) * (1 / 0);
                s += Math.pow(2, n), o -= f
            }
            return(p ? -1 : 1) * s * Math.pow(2, o - n)
        }, e.write = function(t, e, r, n, i, o) {
            var s,
                u,
                a,
                f = 8 * o - i - 1,
                c = (1 << f) - 1,
                h = c >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0
                    ? (u = isNaN(e) ? 1 : 0, s = c)
                    : (s = Math.floor(Math
                            .log(e) /
                            Math
                            .LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), e +=
                            s + h >= 1 ? l / a : l * Math.pow(2, 1 - h), e * a >= 2 && (s++, a /= 2),
                        s + h >= c
                            ? (u = 0, s = c)
                            : s + h >= 1
                            ? (u = (e * a - 1) * Math.pow(2, i), s += h)
                            : (u = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0));
                i >= 8;
                t[r + p] = 255 & u, p += d, u /= 256, i -= 8);
            for (s = s << i | u, f += i; f > 0; t[r + p] = 255 & s, p += d, s /= 256, f -= 8);
            t[r + p - d] |= 128 * y
        }
    },
    35: function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t) { return"[object Array]" == r.call(t) }
    },
    38: function(t, e, r) {
        var n;
        (function(i) {
            !function(o) {
                "use strict";

                function s() {
                    var t = o.crypto || o.msCrypto;
                    if (!l && t && t.getRandomValues)
                        try {
                            var e = new Uint8Array(16);
                            y = l = function() { return t.getRandomValues(e), e }, l()
                        } catch (r) {
                        }
                    if (!l) {
                        var n = new Array(16);
                        p = l = function() {
                            for (var t, e = 0;
                                e < 16;
                                e++
                            ) 0 === (3 & e) && (t = 4294967296 * Math.random()), n[e] = t >>> ((3 & e) << 3) & 255;
                            return n
                        }, "undefined" != typeof console &&
                            console.warn &&
                            console
                            .warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")
                    }
                }

                function u() {
                    try {
                        var t = r(30).randomBytes;
                        d = l = t && function() { return t(16) }, l()
                    } catch (e) {
                    }
                }

                function a(t, e, r) {
                    var n = e && r || 0, i = 0;
                    for (e = e || [], t.toLowerCase()
                            .replace(/[0-9a-f]{2}/g, function(t) { i < 16 && (e[n + i++] = _[t]) });
                        i < 16;
                    ) e[n + i++] = 0;
                    return e
                }

                function f(t, e) {
                    var r = e || 0, n = v;
                    return n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]] +
                        "-" +
                        n[t[r++]] +
                        n[t[r++]] +
                        "-" +
                        n[t[r++]] +
                        n[t[r++]] +
                        "-" +
                        n[t[r++]] +
                        n[t[r++]] +
                        "-" +
                        n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]] +
                        n[t[r++]]
                }

                function c(t, e, r) {
                    var n = e && r || 0, i = e || [];
                    t = t || {};
                    var o = null != t.clockseq ? t.clockseq : E,
                        s = null != t.msecs ? t.msecs : (new Date).getTime(),
                        u = null != t.nsecs ? t.nsecs : T + 1,
                        a = s - A + (u - T) / 1e4;
                    if (a < 0 && null == t.clockseq && (o = o + 1 & 16383),
                        (a < 0 || s > A) && null == t.nsecs && (u = 0), u >= 1e4
                    ) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    A = s, T = u, E = o, s += 122192928e5;
                    var c = (1e4 * (268435455 & s) + u) % 4294967296;
                    i[n++] = c >>> 24 & 255, i[n++] = c >>> 16 & 255, i[n++] = c >>> 8 & 255, i[n++] = 255 & c;
                    var h = s / 4294967296 * 1e4 & 268435455;
                    i[n++] = h >>> 8 & 255, i[n++] = 255 & h, i[n++] = h >>> 24 & 15 | 16, i[n++] = h >>> 16 & 255, i[
                        n++] = o >>> 8 | 128, i[n++] = 255 & o;
                    for (var l = t.node || b, p = 0; p < 6; p++) i[n + p] = l[p];
                    return e ? e : f(i)
                }

                function h(t, e, r) {
                    var n = e && r || 0;
                    "string" == typeof t && (e = "binary" === t ? new g(16) : null, t = null), t = t || {};
                    var i = t.random || (t.rng || l)();
                    if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) for (var o = 0; o < 16; o++) e[n + o] = i[o];
                    return e || f(i)
                }

                var l, p, d, y;
                o ? s() : u();
                for (var g = "function" == typeof i ? i : Array, v = [], _ = {}, w = 0;
                    w < 256;
                    w++
                ) v[w] = (w + 256).toString(16).substr(1), _[v[w]] = w;
                var m = l(),
                    b = [1 | m[0], m[1], m[2], m[3], m[4], m[5]],
                    E = 16383 & (m[6] << 8 | m[7]),
                    A = 0,
                    T = 0,
                    R = h;
                R.v1 = c, R.v4 = h, R.parse = a, R.unparse = f, R.BufferClass = g, R._rng = l, R._mathRNG = p, R
                    ._nodeRNG = d, R._whatwgRNG = y, "undefined" != typeof t && t.exports
                    ? t.exports = R
                    : (n = function() { return R }.call(e, r, e, t), !(void 0 !== n && (t.exports = n)))
            }("undefined" != typeof window ? window : null)
        }).call(e, r(4).Buffer)
    },
    39: function(t, e, r) {
        (function(e) {
            t.exports = function(t) {
                function r(t, e, r, i, o, s) {
                    if ("function" == typeof o && (s = o, o = void 0), "function" != typeof s
                    ) throw new Error("No callback provided to pbkdf2");
                    setTimeout(function() {
                        var u;
                        try {
                            u = n(t, e, r, i, o)
                        } catch (a) {
                            return s(a)
                        }
                        s(void 0, u)
                    })
                }

                function n(r, n, i, o, s) {
                    if ("number" != typeof i) throw new TypeError("Iterations not a number");
                    if (i < 0) throw new TypeError("Bad iterations");
                    if ("number" != typeof o) throw new TypeError("Key length not a number");
                    if (o < 0) throw new TypeError("Bad key length");
                    s = s || "sha1", e.isBuffer(r) || (r = new e(r)), e.isBuffer(n) || (n = new e(n));
                    var u, a, f, c = 1, h = new e(o), l = new e(n.length + 4);
                    n.copy(l, 0, 0, n.length);
                    for (var p = 1; p <= c; p++) {
                        l.writeUInt32BE(p, n.length);
                        var d = t.createHmac(s, r).update(l).digest();
                        if (!u &&
                            (u = d.length, f = new e(u), c = Math
                                .ceil(o / u), a = o - (c - 1) * u, o > (Math.pow(2, 32) - 1) * u)
                        ) throw new TypeError("keylen exceeds maximum length");
                        d.copy(f, 0, 0, u);
                        for (var y = 1; y < i; y++) {
                            d = t.createHmac(s, r).update(d).digest();
                            for (var g = 0; g < u; g++) f[g] ^= d[g]
                        }
                        var v = (p - 1) * u, _ = p == c ? a : u;
                        f.copy(h, v, 0, _)
                    }
                    return h
                }

                return{ pbkdf2: r, pbkdf2Sync: n }
            }
        }).call(e, r(4).Buffer)
    },
    42: function(t, e, r) {
        try {
            (function() {
                "use strict";
                e.ResourcesKey = "Resources", e.TaskpaneResourceKey = "Taskpane", e.HeaderResourceKey = "Header", e
                    .ShellResourceKey = "Shell"
            }).call(this)
        } finally {
        }
    },
    43: function(t, e, r) {
        try {
            (function() {
                "use strict";
                e.InternalModuleName = "internalD365Shell"
            }).call(this)
        } finally {
        }
    },
    45: function(t, e, r) {
        (function(e) {
            function r(t, e, r) { return t ^ e ^ r }

            function n(t, e, r) { return t & e | ~t & r }

            function i(t, e, r) { return(t | ~e) ^ r }

            function o(t, e, r) { return t & r | e & ~r }

            function s(t, e, r) { return t ^ (e | ~r) }

            function u(t, e) { return t << e | t >>> 32 - e }

            function a(t) {
                var r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                "string" == typeof t && (t = new e(t, "utf8"));
                var n = y(t), i = 8 * t.length, o = 8 * t.length;
                n[i >>> 5] |= 128 << 24 - i % 32, n[(i + 64 >>> 9 << 4) + 14] =
                    16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                for (var s = 0; s < n.length; s += 16) v(r, n, s);
                for (var s = 0; s < 5; s++) {
                    var u = r[s];
                    r[s] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                }
                var a = g(r);
                return new e(a)
            }

            t.exports = a; /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
            var f = [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14,
                    11,
                    8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15,
                    14, 5,
                    6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
                ],
                c = [
                    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4,
                    9, 1, 2,
                    15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7,
                    10, 14,
                    12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
                ],
                h = [
                    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11,
                    7, 13,
                    12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
                    6, 8, 6,
                    5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
                ],
                l = [
                    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6,
                    15, 13,
                    11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12,
                    9, 12, 5,
                    15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
                ],
                p = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                d = [1352829926, 1548603684, 1836072691, 2053994217, 0],
                y = function(t) {
                    for (var e = [], r = 0, n = 0; r < t.length; r++, n += 8) e[n >>> 5] |= t[r] << 24 - n % 32;
                    return e
                },
                g = function(t) {
                    for (var e = [], r = 0; r < 32 * t.length; r += 8) e.push(t[r >>> 5] >>> 24 - r % 32 & 255);
                    return e
                },
                v = function(t, e, a) {
                    for (var y = 0; y < 16; y++) {
                        var g = a + y, v = e[g];
                        e[g] = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8)
                    }
                    var _, w, m, b, E, A, T, R, B, S;
                    A = _ = t[0], T = w = t[1], R = m = t[2], B = b = t[3], S = E = t[4];
                    for (var P, y = 0; y < 80; y += 1)
                        P = _ + e[a + f[y]] | 0, P += y < 16
                            ? r(w, m, b) + p[0]
                            : y < 32
                            ? n(w, m, b) + p[1]
                            : y < 48 ? i(w, m, b) + p[2] : y < 64 ? o(w, m, b) + p[3] : s(w, m, b) + p[4], P = 0 | P,
                        P =
                            u(P, h[y]), P = P + E | 0, _ = E, E = b, b = u(m, 10), m = w, w = P, P =
                            A + e[a + c[y]] | 0, P +=
                            y < 16
                            ? s(T, R, B) + d[0]
                            : y < 32
                            ? o(T, R, B) + d[1]
                            : y < 48 ? i(T, R, B) + d[2] : y < 64 ? n(T, R, B) + d[3] : r(T, R, B) + d[4], P = 0 | P,
                        P =
                            u(P, l[y]), P = P + S | 0, A = S, S = B, B = u(R, 10), R = T, T = P;
                    P = t[1] + m + B | 0, t[1] = t[2] + b + S | 0, t[2] = t[3] + E + A | 0, t[3] = t[4] + _ + T | 0, t[4
                        ] =
                        t[0] + w + R | 0, t[0] = P
                }
        }).call(e, r(4).Buffer)
    },
    46: function(t, e) {
        t.exports = function(t) {
            function e(e, r) {
                this._block = new t(e), this._finalSize = r, this._blockSize = e, this._len = 0, this._s = 0
            }

            return e.prototype.init = function() { this._s = 0, this._len = 0 }, e.prototype.update = function(e, r) {
                "string" == typeof e && (r = r || "utf8", e = new t(e, r));
                for (var n = this._len += e.length, i = this._s = this._s || 0, o = 0, s = this._block; i < n;) {
                    for (var u = Math.min(e.length, o + this._blockSize - i % this._blockSize), a = u - o, f = 0;
                        f < a;
                        f++) s[i % this._blockSize + f] = e[f + o];
                    i += a, o += a, i % this._blockSize === 0 && this._update(s)
                }
                return this._s = i, this
            }, e.prototype.digest = function(t) {
                var e = 8 * this._len;
                this._block[this._len % this._blockSize] = 128, this._block
                        .fill(0, this._len % this._blockSize + 1),
                    e % (8 * this._blockSize) >= 8 * this._finalSize &&
                    (this._update(this._block), this._block.fill(0)
                    ),
                    this._block.writeInt32BE(e, this._blockSize - 4);
                var r = this._update(this._block) || this._hash();
                return t ? r.toString(t) : r
            }, e.prototype._update = function() { throw new Error("_update must be implemented by subclass") }, e
        }
    },
    47: function(t, e, r) {
        var e = t.exports = function(t) {
                var r = e[t];
                if (!r) throw new Error(t + " is not supported (we accept pull requests)");
                return new r
            },
            n = r(4).Buffer,
            i = r(46)(n);
        e.sha1 = r(48)(n, i), e.sha256 = r(49)(n, i), e.sha512 = r(50)(n, i)
    },
    48: function(t, e, r) {
        var n = r(16).inherits;
        t.exports = function(t, e) {
            function r() {
                return d.length
                    ? d.pop().init()
                    : this instanceof r ? (this._w = p, e.call(this, 64, 56), this._h = null, void this.init()) : new r
            }

            function i(t, e, r, n) {
                return t < 20 ? e & r | ~e & n : t < 40 ? e ^ r ^ n : t < 60 ? e & r | e & n | r & n : e ^ r ^ n
            }

            function o(t) { return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514 }

            function s(t, e) { return t + e | 0 }

            function u(t, e) { return t << e | t >>> 32 - e }

            var a = 0,
                f = 4,
                c = 8,
                h = 12,
                l = 16,
                p = new("undefined" == typeof Int32Array ? Array : Int32Array)(80),
                d = [];
            return n(r, e), r.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this
                    ._e = 3285377520, e.prototype.init.call(this), this
            }, r.prototype._POOL = d, r.prototype._update = function(t) {
                var e, r, n, a, f, c, h, l, p, d;
                e = c = this._a, r = h = this._b, n = l = this._c, a = p = this._d, f = d = this._e;
                for (var y = this._w, g = 0; g < 80; g++) {
                    var v = y[g] = g < 16 ? t.readInt32BE(4 * g) : u(y[g - 3] ^ y[g - 8] ^ y[g - 14] ^ y[g - 16], 1),
                        _ = s(s(u(e, 5), i(g, r, n, a)), s(s(f, v), o(g)));
                    f = a, a = n, n = u(r, 30), r = e, e = _
                }
                this._a = s(e, c), this._b = s(r, h), this._c = s(n, l), this._d = s(a, p), this._e = s(f, d)
            }, r.prototype._hash = function() {
                d.length < 100 && d.push(this);
                var e = new t(20);
                return e.writeInt32BE(0 | this._a, a), e.writeInt32BE(0 | this._b, f), e.writeInt32BE(0 | this._c, c), e
                    .writeInt32BE(0 | this._d, h), e.writeInt32BE(0 | this._e, l), e
            }, r
        }
    },
    49: function(t, e, r) {
        var n = r(16).inherits;
        t.exports = function(t, e) {
            function r() { this.init(), this._w = p, e.call(this, 64, 56) }

            function i(t, e) { return t >>> e | t << 32 - e }

            function o(t, e) { return t >>> e }

            function s(t, e, r) { return t & e ^ ~t & r }

            function u(t, e, r) { return t & e ^ t & r ^ e & r }

            function a(t) { return i(t, 2) ^ i(t, 13) ^ i(t, 22) }

            function f(t) { return i(t, 6) ^ i(t, 11) ^ i(t, 25) }

            function c(t) { return i(t, 7) ^ i(t, 18) ^ o(t, 3) }

            function h(t) { return i(t, 17) ^ i(t, 19) ^ o(t, 10) }

            var l = [
                    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
                    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
                    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
                    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
                    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
                    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
                    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
                ],
                p = new Array(64);
            return n(r, e), r.prototype.init = function() {
                return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this
                    ._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this._len = this
                    ._s = 0, this
            }, r.prototype._update = function(t) {
                var e, r, n, i, o, p, d, y, g, v, _ = this._w;
                e = 0 | this._a, r = 0 | this._b, n = 0 | this._c, i = 0 | this._d, o = 0 | this._e, p = 0 | this._f,
                    d = 0 | this._g, y = 0 | this._h;
                for (var w = 0; w < 64; w++) {
                    var m = _[w] = w < 16 ? t.readInt32BE(4 * w) : h(_[w - 2]) + _[w - 7] + c(_[w - 15]) + _[w - 16];
                    g = y + f(o) + s(o, p, d) + l[w] + m, v = a(e) + u(e, r, n), y = d, d = p, p = o, o = i + g, i = n,
                        n = r, r = e, e = g + v
                }
                this._a = e + this._a | 0, this._b = r + this._b | 0, this._c = n + this._c | 0, this
                    ._d = i + this._d | 0, this._e = o + this._e | 0, this._f = p + this._f | 0, this
                    ._g = d + this._g | 0, this._h = y + this._h | 0
            }, r.prototype._hash = function() {
                var e = new t(32);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e
                    .writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e
                    .writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
            }, r
        }
    },
    50: function(t, e, r) {
        var n = r(16).inherits;
        t.exports = function(t, e) {
            function r() { this.init(), this._w = a, e.call(this, 128, 112) }

            function i(t, e, r) { return t >>> r | e << 32 - r }

            function o(t, e, r) { return t & e ^ ~t & r }

            function s(t, e, r) { return t & e ^ t & r ^ e & r }

            var u = [
                    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548,
                    961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560,
                    3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
                    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868,
                    3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933,
                    770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
                    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
                    3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936,
                    666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
                    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
                    2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
                    3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
                    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
                    958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
                    1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
                    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427,
                    3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
                    116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
                    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
                    1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591
                ],
                a = new Array(160);
            return n(r, e), r.prototype.init = function() {
                return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this
                    ._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this
                    ._al = -205731576, this._bl = -2067093701, this._cl = -23791573, this._dl = 1595750129, this
                    ._el = -1377402159, this._fl = 725511199, this._gl = -79577749, this._hl = 327033209, this
                    ._len = this._s = 0, this
            }, r.prototype._update = function(t) {
                var e, r, n, a, f, c, h, l, p, d, y, g, v, _, w, m, b = this._w;
                e = 0 | this._a, r = 0 | this._b, n = 0 | this._c, a = 0 | this._d, f = 0 | this._e, c = 0 | this._f,
                    h = 0 | this._g, l = 0 | this._h, p = 0 | this._al, d = 0 | this._bl, y = 0 | this._cl, g =
                        0 | this._dl, v = 0 | this._el, _ = 0 | this._fl, w = 0 | this._gl, m = 0 | this._hl;
                for (var E = 0; E < 80; E++) {
                    var A, T, R = 2 * E;
                    if (E < 16) A = b[R] = t.readInt32BE(4 * R), T = b[R + 1] = t.readInt32BE(4 * R + 4);
                    else {
                        var B = b[R - 30],
                            S = b[R - 30 + 1],
                            P = i(B, S, 1) ^ i(B, S, 8) ^ B >>> 7,
                            x = i(S, B, 1) ^ i(S, B, 8) ^ i(S, B, 7);
                        B = b[R - 4], S = b[R - 4 + 1];
                        var I = i(B, S, 19) ^ i(S, B, 29) ^ B >>> 6,
                            k = i(S, B, 19) ^ i(B, S, 29) ^ i(S, B, 6),
                            U = b[R - 14],
                            O = b[R - 14 + 1],
                            D = b[R - 32],
                            j = b[R - 32 + 1];
                        T = x + O, A = P + U + (T >>> 0 < x >>> 0 ? 1 : 0), T += k, A =
                            A + I + (T >>> 0 < k >>> 0 ? 1 : 0), T += j, A = A + D + (T >>> 0 < j >>> 0 ? 1 : 0), b[R] =
                            A, b[R + 1] = T
                    }
                    var C = s(e, r, n),
                        M = s(p, d, y),
                        L = i(e, p, 28) ^ i(p, e, 2) ^ i(p, e, 7),
                        Y = i(p, e, 28) ^ i(e, p, 2) ^ i(e, p, 7),
                        N = i(f, v, 14) ^ i(f, v, 18) ^ i(v, f, 9),
                        z = i(v, f, 14) ^ i(v, f, 18) ^ i(f, v, 9),
                        F = u[R],
                        H = u[R + 1],
                        G = o(f, c, h),
                        q = o(v, _, w),
                        J = m + z,
                        K = l + N + (J >>> 0 < m >>> 0 ? 1 : 0);
                    J += q, K = K + G + (J >>> 0 < q >>> 0 ? 1 : 0), J += H, K = K + F + (J >>> 0 < H >>> 0 ? 1 : 0),
                        J += T, K = K + A + (J >>> 0 < T >>> 0 ? 1 : 0);
                    var V = Y + M, X = L + C + (V >>> 0 < Y >>> 0 ? 1 : 0);
                    l = h, m = w, h = c, w = _, c = f, _ = v, v = g + J | 0, f =
                        a + K + (v >>> 0 < g >>> 0 ? 1 : 0) | 0, a = n, g = y, n = r, y = d, r = e, d = p, p =
                        J + V | 0, e = K + X + (p >>> 0 < J >>> 0 ? 1 : 0) | 0
                }
                this._al = this._al + p | 0, this._bl = this._bl + d | 0, this._cl = this._cl + y | 0, this
                    ._dl = this._dl + g | 0, this._el = this._el + v | 0, this._fl = this._fl + _ | 0, this
                    ._gl = this._gl + w | 0, this._hl = this._hl + m | 0, this
                    ._a = this._a + e + (this._al >>> 0 < p >>> 0 ? 1 : 0) | 0, this
                    ._b = this._b + r + (this._bl >>> 0 < d >>> 0 ? 1 : 0) | 0, this
                    ._c = this._c + n + (this._cl >>> 0 < y >>> 0 ? 1 : 0) | 0, this
                    ._d = this._d + a + (this._dl >>> 0 < g >>> 0 ? 1 : 0) | 0, this
                    ._e = this._e + f + (this._el >>> 0 < v >>> 0 ? 1 : 0) | 0, this
                    ._f = this._f + c + (this._fl >>> 0 < _ >>> 0 ? 1 : 0) | 0, this
                    ._g = this._g + h + (this._gl >>> 0 < w >>> 0 ? 1 : 0) | 0, this
                    ._h = this._h + l + (this._hl >>> 0 < m >>> 0 ? 1 : 0) | 0
            }, r.prototype._hash = function() {
                function e(t, e, n) { r.writeInt32BE(t, n), r.writeInt32BE(e, n + 4) }

                var r = new t(64);
                return e(this._a, this._al, 0), e(this
                    ._b,
                    this._bl,
                    8), e(this._c, this._cl, 16), e(this
                    ._d,
                    this._dl,
                    24), e(this._e, this._el, 32), e(this
                    ._f,
                    this._fl,
                    40), e(this._g, this._gl, 48), e(this._h, this._hl, 56), r
            }, r
        }
    },
    51: function(t, e) {
        "function" == typeof Object.create
            ? t.exports = function(t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype,
                    { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })
            }
            : t.exports = function(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            }
    },
    52: function(t, e) {
        t.exports = function(t) {
            return t &&
                "object" == typeof t &&
                "function" == typeof t.copy &&
                "function" == typeof t.fill &&
                "function" == typeof t.readUInt8
        }
    },
    53: function(t, e) {},
    54: function(t, e) {},
    61: function(t, e, r) {
        try {
            (function() {
                "use strict";
                e.MANIFEST_URI_LOCAL = "http://localhost:8080/mock-cdn/manifest.json", e
                    .MANIFEST_URI_PROD = "https://d365prod.azureedge.net/sdk/manifest.json", e
                    .MANIFEST_URI_TIP1 = "https://d365tip1.azureedge.net/sdk/manifest.json", e.XHR_TIMEOUT_MILLIS = 1e4
            }).call(this)
        } finally {
        }
    },
    62: function(t, e, r) {
        try {
            (function() {
                "use strict";
                e.merge = function(t, r) {
                    var n = {};
                    return void 0 === t
                        ? r
                        : ("object" == typeof t && Object.keys(t).forEach(function(e) { n[e] = t[e] }), Object.keys(r)
                            .forEach(function(i) {
                                return"object" == typeof r[i] && r[i] && t[i]
                                    ? void(n[i] = e.merge(t[i], r[i]))
                                    : void(n[i] = r[i])
                            }), n)
                }
            }).call(this)
        } finally {
        }
    },
    90: function(t, e, r) {
        var n;
        (function(t, i, o) { /*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */
            (function() {
                "use strict";

                function s(t) { return"function" == typeof t || "object" == typeof t && null !== t }

                function u(t) { return"function" == typeof t }

                function a(t) { $ = t }

                function f(t) { tt = t }

                function c() { return function() { t.nextTick(y) } }

                function h() { return function() { X(y) } }

                function l() {
                    var t = 0, e = new nt(y), r = document.createTextNode("");
                    return e.observe(r, { characterData: !0 }), function() { r.data = t = ++t % 2 }
                }

                function p() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = y, function() { t.port2.postMessage(0) }
                }

                function d() { return function() { setTimeout(y, 1) } }

                function y() {
                    for (var t = 0; t < Q; t += 2) {
                        var e = st[t], r = st[t + 1];
                        e(r), st[t] = void 0, st[t + 1] = void 0
                    }
                    Q = 0
                }

                function g() {
                    try {
                        var t = r(54);
                        return X = t.runOnLoop || t.runOnContext, h()
                    } catch (e) {
                        return d()
                    }
                }

                function v(t, e) {
                    var r = this, n = new this.constructor(w);
                    void 0 === n[ft] && L(n);
                    var i = r._state;
                    if (i) {
                        var o = arguments[i - 1];
                        tt(function() { j(i, n, o, r._result) })
                    } else k(r, n, t, e);
                    return n
                }

                function _(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var r = new e(w);
                    return S(r, t), r
                }

                function w() {}

                function m() { return new TypeError("You cannot resolve a promise with itself") }

                function b() { return new TypeError("A promises callback cannot return that same promise.") }

                function E(t) {
                    try {
                        return t.then
                    } catch (e) {
                        return pt.error = e, pt
                    }
                }

                function A(t, e, r, n) {
                    try {
                        t.call(e, r, n)
                    } catch (i) {
                        return i
                    }
                }

                function T(t, e, r) {
                    tt(function(t) {
                            var n = !1,
                                i = A(r,
                                    e,
                                    function(r) { n || (n = !0, e !== r ? S(t, r) : x(t, r)) },
                                    function(e) { n || (n = !0, I(t, e)) },
                                    "Settle: " + (t._label || " unknown promise"));
                            !n && i && (n = !0, I(t, i))
                        },
                        t)
                }

                function R(t, e) {
                    e._state === ht
                        ? x(t, e._result)
                        : e._state === lt
                        ? I(t, e._result)
                        : k(e, void 0, function(e) { S(t, e) }, function(e) { I(t, e) })
                }

                function B(t, e, r) {
                    e.constructor === t.constructor && r === ut && constructor.resolve === at
                        ? R(t, e)
                        : r === pt ? I(t, pt.error) : void 0 === r ? x(t, e) : u(r) ? T(t, e, r) : x(t, e)
                }

                function S(t, e) { t === e ? I(t, m()) : s(e) ? B(t, e, E(e)) : x(t, e) }

                function P(t) { t._onerror && t._onerror(t._result), U(t) }

                function x(t, e) {
                    t._state === ct && (t._result = e, t._state = ht, 0 !== t._subscribers.length && tt(U, t))
                }

                function I(t, e) { t._state === ct && (t._state = lt, t._result = e, tt(P, t)) }

                function k(t, e, r, n) {
                    var i = t._subscribers, o = i.length;
                    t._onerror = null, i[o] = e, i[o + ht] = r, i[o + lt] = n, 0 === o && t._state && tt(U, t)
                }

                function U(t) {
                    var e = t._subscribers, r = t._state;
                    if (0 !== e.length) {
                        for (var n, i, o = t._result, s = 0;
                            s < e.length;
                            s += 3
                        ) n = e[s], i = e[s + r], n ? j(r, n, i, o) : i(o);
                        t._subscribers.length = 0
                    }
                }

                function O() { this.error = null }

                function D(t, e) {
                    try {
                        return t(e)
                    } catch (r) {
                        return dt.error = r, dt
                    }
                }

                function j(t, e, r, n) {
                    var i, o, s, a, f = u(r);
                    if (f) {
                        if (i = D(r, n), i === dt ? (a = !0, o = i.error, i = null) : s = !0, e === i
                        ) return void I(e, b())
                    } else i = n, s = !0;
                    e._state !== ct || (f && s ? S(e, i) : a ? I(e, o) : t === ht ? x(e, i) : t === lt && I(e, i))
                }

                function C(t, e) {
                    try {
                        e(function(e) { S(t, e) }, function(e) { I(t, e) })
                    } catch (r) {
                        I(t, r)
                    }
                }

                function M() { return yt++ }

                function L(t) { t[ft] = yt++, t._state = void 0, t._result = void 0, t._subscribers = [] }

                function Y(t) { return new mt(this, t).promise }

                function N(t) {
                    var e = this;
                    return new e(W(t)
                        ? function(r, n) { for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(r, n) }
                        : function(t, e) { e(new TypeError("You must pass an array to race.")) })
                }

                function z(t) {
                    var e = this, r = new e(w);
                    return I(r, t), r
                }

                function F() {
                    throw new
                        TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function H() {
                    throw new
                        TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function G(t) {
                    this[ft] = M(), this._result = this._state = void 0, this
                        ._subscribers = [], w !== t &&
                        ("function" != typeof t && F(), this instanceof G ? C(this, t) : H())
                }

                function q(t, e) {
                    this._instanceConstructor = t, this
                        .promise = new t(w), this
                        .promise[ft] ||
                        L(this.promise), W(e)
                        ? (this._input = e, this.length = e.length, this._remaining = e.length, this
                            ._result = new Array(this.length), 0 === this.length
                            ? x(this.promise, this._result)
                            : (this.length = this.length || 0, this
                                ._enumerate(), 0 === this._remaining && x(this.promise, this._result)))
                        : I(this.promise, J())
                }

                function J() { return new Error("Array Methods must be provided an Array") }

                function K() {
                    var t;
                    if ("undefined" != typeof i) t = i;
                    else if ("undefined" != typeof self) t = self;
                    else
                        try {
                            t = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var r = t.Promise;
                    r && "[object Promise]" === Object.prototype.toString.call(r.resolve()) && !r.cast ||
                        (t.Promise = wt)
                }

                var V;
                V = Array.isArray
                    ? Array.isArray
                    : function(t) { return"[object Array]" === Object.prototype.toString.call(t) };
                var X,
                    $,
                    Z,
                    W = V,
                    Q = 0,
                    tt = function(t, e) { st[Q] = t, st[Q + 1] = e, Q += 2, 2 === Q && ($ ? $(y) : Z()) },
                    et = "undefined" != typeof window ? window : void 0,
                    rt = et || {},
                    nt = rt.MutationObserver || rt.WebKitMutationObserver,
                    it = "undefined" == typeof self &&
                        "undefined" != typeof t &&
                        "[object process]" ===
                        {}.toString
                        .call(t),
                    ot = "undefined" != typeof Uint8ClampedArray &&
                        "undefined" != typeof importScripts &&
                        "undefined" != typeof MessageChannel,
                    st = new Array(1e3);
                Z = it ? c() : nt ? l() : ot ? p() : void 0 === et ? g() : d();
                var ut = v,
                    at = _,
                    ft = Math.random().toString(36).substring(16),
                    ct = void 0,
                    ht = 1,
                    lt = 2,
                    pt = new O,
                    dt = new O,
                    yt = 0,
                    gt = Y,
                    vt = N,
                    _t = z,
                    wt = G;
                G.all = gt, G.race = vt, G.resolve = at, G.reject = _t, G._setScheduler = a, G._setAsap = f, G
                    ._asap = tt, G
                    .prototype = { constructor: G, then: ut, "catch": function(t) { return this.then(null, t) } };
                var mt = q;
                q.prototype._enumerate = function() {
                    for (var t = this
                                 .length,
                        e = this._input,
                        r = 0;
                        this._state === ct && r < t;
                        r++) this._eachEntry(e[r], r)
                }, q.prototype._eachEntry = function(t, e) {
                    var r = this._instanceConstructor, n = r.resolve;
                    if (n === at) {
                        var i = E(t);
                        if (i === ut && t._state !== ct) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                        else if (r === wt) {
                            var o = new r(w);
                            B(o, t, i), this._willSettleAt(o, e)
                        } else this._willSettleAt(new r(function(e) { e(t) }), e)
                    } else this._willSettleAt(n(t), e)
                }, q.prototype._settledAt = function(t, e, r) {
                    var n = this.promise;
                    n
                            ._state ===
                            ct &&
                            (this
                                ._remaining--, t === lt ? I(n, r) : this._result[e] = r),
                        0 === this._remaining && x(n, this._result)
                }, q.prototype._willSettleAt = function(t, e) {
                    var r = this;
                    k(t, void 0, function(t) { r._settledAt(ht, e, t) }, function(t) { r._settledAt(lt, e, t) })
                };
                var bt = K, Et = { Promise: wt, polyfill: bt };
                r(191).amd
                    ? (n = function() { return Et }.call(e, r, e, o), !(void 0 !== n && (o.exports = n)))
                    : "undefined" != typeof o && o.exports
                    ? o.exports = Et
                    : "undefined" != typeof this && (this.ES6Promise = Et), bt()
            }).call(this)
        }).call(e, r(19), function() { return this }(), r(17)(t))
    },
    106: function(t, e, r) { r(192), t.exports = self.fetch.bind(self) },
    137: function(t, e, r) {
        try {
            (function() {
                "use strict";
                var t = r(141),
                    n = r(61),
                    i = r(38),
                    o = function() {
                        function t(t) {
                            this.promise = t, this.taskpane = this.createTaskpaneManager(), this.header = this
                                .createHeaderManager(), this.promise.then(function(t) {
                                var e = t.header, r = t.taskpane;
                                e && r && e.on("taskpaneToggleClick", function() { return r.toggle() })
                            })
                        }

                        return t.prototype.getUserAvatar = function() {
                            return this.promise.then(function(t) { return t.getUserAvatar() })
                        }, t.prototype.createTaskpaneManager = function() {
                            var t = this;
                            return{
                                on: function(e, r) {
                                    var n = t.promise.then(function(t) { return t.taskpane.on(e, r) });
                                    return function() { n.then(function(t) { return t() }) }
                                },
                                show: function() { return t.promise.then(function(t) { return t.taskpane.show() }) },
                                hide: function() { return t.promise.then(function(t) { return t.taskpane.hide() }) },
                                toggle: function() {
                                    return t.promise.then(function(t) {
                                        return t.taskpane
                                            .toggle()
                                    })
                                },
                                pin: function(e) { return t.promise.then(function(t) { return t.taskpane.pin(e) }) },
                                unpin: function(e) {
                                    return t.promise.then(function(t) {
                                        return t.taskpane
                                            .unpin(e)
                                    })
                                },
                                identifyActiveApp: function(e) {
                                    return t.promise.then(function(t) { t.taskpane.identifyActiveApp(e) })
                                },
                                identifyActiveApps: function(e) {
                                    return t.promise.then(function(t) { t.taskpane.identifyActiveApps(e) })
                                },
                                addTransientApp: function(e) {
                                    return t.promise.then(function(t) { return t.taskpane.addTransientApp(e) })
                                },
                                addTransientApps: function(e) {
                                    return t.promise.then(function(t) { return t.taskpane.addTransientApps(e) })
                                }
                            }
                        }, t.prototype.createHeaderManager = function() {
                            var t = this;
                            return{
                                on: function(e, r) {
                                    var n = t.promise.then(function(t) { return t.header.on(e, r) });
                                    return function() { n.then(function(t) { return t() }) }
                                },
                                setTitle: function(e) {
                                    return t.promise.then(function(t) {
                                        return t.header
                                            .setTitle(e)
                                    })
                                },
                                addGroup: function(e) {
                                    return t.promise.then(function(t) {
                                        return t.header
                                            .addGroup(e)
                                    })
                                },
                                setCurrentGroup: function(e) {
                                    return t.promise.then(function(t) { return t.header.setCurrentGroup(e) })
                                }
                            }
                        }, t
                    }();
                e.StubbedShellManager = o;
                var s = function() {
                    function e() {}

                    return e.getBrowserLocale = function() {
                        return navigator.languages
                            ? navigator.languages[0].toLowerCase()
                            : (navigator.language || navigator.userLanguage).toLowerCase()
                    }, e.prototype.init = function(r) {
                        var n = r.environment ? r.environment.toLowerCase() : e.defaultEnvironment,
                            s = e.manifestUris[n],
                            u = s + "?v=" + i.v4(),
                            a = r.locale ? r.locale.toLowerCase() : e.getBrowserLocale(),
                            f = t
                                .loadManifest(u, a, !!r.header, !!r.taskpane)["catch"
                                ](function(t) { throw console.error("The manifest at " + u + " failed to load"), t })
                                .then(function(t) { return t.init(r) });
                        return new o(f)
                    }, e.defaultEnvironment = "prod", e
                        .manifestUris = { prod: n.MANIFEST_URI_PROD, tip1: n.MANIFEST_URI_TIP1 }, e
                }();
                e.StubbedShell = s
            }).call(this)
        } finally {
        }
    },
    138: function(t, e, r) {
        try {
            (function() {
                "use strict";
                var t = r(62), e = r(137);
                r(90).polyfill(), r(106);
                var n = function(t) { return(new e.StubbedShell).init(t) };
                window && (window.D365 = t.merge(window.D365, { init: n }))
            }).call(this)
        } finally {
        }
    },
    139: function(t, e, r) {
        try {
            (function() {
                "use strict";
                var t = function() {
                    function t() { this.graph = {} }

                    return t.prototype.declare = function(t, e, r) {
                        void 0 === r && (r = []), this.graph[t] = { name: t, loader: e, dependencies: r.slice() }
                    }, t.prototype.resolve = function(t) {
                        var e = this, r = this.graph[t];
                        if (!r) throw'Unknown resource "' + t + '"';
                        if (!r.promise) {
                            for (var n = {}, i = 0, o = Object.keys(this.graph); i < o.length; i++) {
                                var s = o[i];
                                this.graph[s].promise || (n[s] = this.graph[s])
                            }
                            for (var u = !0; u;) {
                                u = !1;
                                for (var a = 0, f = Object.keys(n); a < f.length; a++) {
                                    var c = f[a], h = n[c];
                                    if (h.dependencies
                                        .every(function(t) { return e.graph[t] && !!e.graph[t].promise })) {
                                        var l = h.dependencies.map(function(t) { return e.graph[t].promise });
                                        h.promise = Promise.all(l).then(h.loader), delete n[h.name], u = !0
                                    }
                                }
                            }
                            var p = Object.keys(n);
                            if (p.length > 0) throw"Resources form a dependency cycle: " + p.join(",")
                        }
                        return r.promise
                    }, t
                }();
                e.DependencyResolver = t
            }).call(this)
        } finally {
        }
    },
    140: function(t, e, r) {
        try {
            (function() {
                "use strict";

                function t(t) {
                    return new Promise(function(e, r) {
                        setTimeout(r, n.XHR_TIMEOUT_MILLIS), fetch(t, { method: "GET", cache: "no-cache" })
                            .then(function(t) {
                                return t.ok
                                    ? t.text().then(function(t) { return e(JSON.parse(t)) })
                                    : r(t.status + " (" + t.statusText + ")")
                            })["catch"](r)
                    })
                }

                var n = r(61);
                e.ajaxGetJson = t
            }).call(this)
        } finally {
        }
    },
    141: function(t, e, r) {
        try {
            (function() {
                "use strict";

                function t(t, e, r, o) {
                    return h.ajaxGetJson(t).then(function(t) {
                        var s = n(t), u = i(t, e, r, o);
                        return Promise.all([s, u])
                    }).then(function() { return window[d.InternalModuleName] })
                }

                function n(t) {
                    for (var e = new c.DependencyResolver,
                        r = Object.keys(t.resources),
                        n = function(r) {
                            var n = t.resources[r],
                                i = n.path,
                                o = n.depends,
                                u = n.type,
                                a = i
                                    ? function() {
                                        return s(i + "?v=" + t.version, u || i.split(/[#?&]/)[0].split(".").pop(), r)
                                    }
                                    : function() { return Promise.resolve() };
                            e.declare(r, a, o)
                        },
                        i = 0,
                        o = r;
                        i < o.length;
                        i++) {
                        var u = o[i];
                        n(u)
                    }
                    var a = "__root__" + Math.random();
                    return e.declare(a, function() { return null }, r), e.resolve(a)
                }

                function i(t, e, r, n) {
                    var i = [];
                    return n && i.push(o(t, e, p.TaskpaneResourceKey)["catch"](function(t) { return console.warn(t) })),
                        r && i.push(o(t, e, p.HeaderResourceKey)["catch"](function(t) { return console.warn(t) })),
                        Promise.all(i)
                }

                function o(t, e, r) {
                    if ("en-us" === e) return Promise.resolve();
                    if (!t.locales || !t.locales[r]) return Promise.reject("Manifest lists no locales for " + r);
                    var n = t.locales[r][e];
                    return n
                        ? h.ajaxGetJson(n + "?v=" + t.version)["catch"](function(t) {
                            var n = "Couldn't load " + e + " for " + r + ": " + t;
                            return Promise.reject(n)
                        }).then(function(t) {
                            window.D365 = l.merge(window.D365, (e = {}, e[p.ResourcesKey] = (n = {}, n[r] = t, n), e));
                            var e, n
                        })
                        : Promise.reject("Locale " + e + " is not supported")
                }

                function s(t, e, r) {
                    switch (e.toLowerCase()) {
                    case"js":
                        return a(t);
                    case"css":
                        return u(t);
                    case"json":
                        return f(t, r);
                    default:
                        return Promise.reject('Unknown extension ".' + e + '"')
                    }
                }

                function u(t) {
                    return new Promise(function(e, r) {
                        var n = document.createElement("link");
                        n.href = t, n.type = "text/css", n.rel = "stylesheet", n.onload = e, n.onerror = r, document
                            .head.appendChild(n)
                    })
                }

                function a(t) {
                    return new Promise(function(e, r) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.src = t, n.onload = e, n.onerror = r, document.head.appendChild(n)
                    })
                }

                function f(t, e) {
                    return h.ajaxGetJson(t).then(function(t) {
                        window.D365 = l.merge(window.D365, (r = {}, r[e] = t, r));
                        var r
                    })
                }

                var c = r(139), h = r(140), l = r(62), p = r(42), d = r(43);
                e.loadManifest = t
            }).call(this)
        } finally {
        }
    },
    191: function(t, e) { t.exports = function() { throw new Error("define cannot be used indirect") } },
    192: function(t, e) {
        !function(t) {
            "use strict";

            function e(t) {
                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i
                    .test(t)) throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }

            function r(t) { return"string" != typeof t && (t = String(t)), t }

            function n(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return{ done: void 0 === e, value: e }
                    }
                };
                return y.iterable && (e[Symbol.iterator] = function() { return e }), e
            }

            function i(t) {
                this.map = {}, t instanceof i
                    ? t.forEach(function(t, e) { this.append(e, t) }, this)
                    : t && Object.getOwnPropertyNames(t).forEach(function(e) { this.append(e, t[e]) }, this)
            }

            function o(t) { return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0) }

            function s(t) {
                return new Promise(function(e, r) {
                    t.onload = function() { e(t.result) }, t.onerror = function() { r(t.error) }
                })
            }

            function u(t) {
                var e = new FileReader;
                return e.readAsArrayBuffer(t), s(e)
            }

            function a(t) {
                var e = new FileReader;
                return e.readAsText(t), s(e)
            }

            function f() {
                return this.bodyUsed = !1, this._initBody = function(t) {
                    if (this._bodyInit = t, "string" == typeof t) this._bodyText = t;
                    else if (y.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                    else if (y.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                    else if (y
                        .searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                    else if (t) {
                        if (!y
                            .arrayBuffer ||
                            !ArrayBuffer.prototype.isPrototypeOf(t)) throw new Error("unsupported BodyInit type")
                    } else this._bodyText = "";
                    this.headers.get("content-type") ||
                    ("string" == typeof t
                        ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set("content-type", this._bodyBlob.type)
                        : y.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, y.blob
                    ? (this.blob = function() {
                        var t = o(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() { return this.blob().then(u) }, this.text = function() {
                        var t = o(this);
                        if (t) return t;
                        if (this._bodyBlob) return a(this._bodyBlob);
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    })
                    : this.text = function() {
                        var t = o(this);
                        return t ? t : Promise.resolve(this._bodyText)
                    }, y.formData && (this.formData = function() { return this.text().then(l) }), this
                    .json = function() { return this.text().then(JSON.parse) }, this
            }

            function c(t) {
                var e = t.toUpperCase();
                return g.indexOf(e) > -1 ? e : t
            }

            function h(t, e) {
                e = e || {};
                var r = e.body;
                if (h.prototype.isPrototypeOf(t)) {
                    if (t.bodyUsed) throw new TypeError("Already read");
                    this.url = t.url, this.credentials = t
                        .credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this
                        .mode = t.mode, r || (r = t._bodyInit, t.bodyUsed = !0)
                } else this.url = t;
                if (this.credentials = e
                        .credentials ||
                        this.credentials ||
                        "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this
                        .method = c(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this
                        .referrer = null, ("GET" === this.method || "HEAD" === this.method) && r
                ) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(r)
            }

            function l(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function(t) {
                    if (t) {
                        var r = t.split("="), n = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(n), decodeURIComponent(i))
                    }
                }), e
            }

            function p(t) {
                var e = new i, r = (t.getAllResponseHeaders() || "").trim().split("\n");
                return r.forEach(function(t) {
                    var r = t.trim().split(":"), n = r.shift().trim(), i = r.join(":").trim();
                    e.append(n, i)
                }), e
            }

            function d(t, e) {
                e || (e = {}), this.type = "default", this.status = e.status, this
                    .ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText, this
                    .headers = e.headers instanceof i ? e.headers : new i(e.headers), this.url = e.url || "", this
                    ._initBody(t)
            }

            if (!t.fetch) {
                var y = {
                    searchParams: "URLSearchParams" in t,
                    iterable: "Symbol" in t && "iterator" in Symbol,
                    blob: "FileReader" in t &&
                        "Blob" in t &&
                        function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return!1
                            }
                        }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                };
                i.prototype.append = function(t, n) {
                    t = e(t), n = r(n);
                    var i = this.map[t];
                    i || (i = [], this.map[t] = i), i.push(n)
                }, i.prototype["delete"] = function(t) { delete this.map[e(t)] }, i.prototype.get = function(t) {
                    var r = this.map[e(t)];
                    return r ? r[0] : null
                }, i.prototype.getAll = function(t) { return this.map[e(t)] || [] }, i.prototype
                    .has = function(t) { return this.map.hasOwnProperty(e(t)) }, i.prototype
                    .set = function(t, n) { this.map[e(t)] = [r(n)] }, i.prototype
                    .forEach = function(t, e) {
                        Object.getOwnPropertyNames(this.map)
                            .forEach(function(r) { this.map[r].forEach(function(n) { t.call(e, n, r, this) }, this) },
                                this)
                    }, i.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, r) { t.push(r) }), n(t)
                }, i.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) { t.push(e) }), n(t)
                }, i.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, r) { t.push([r, e]) }), n(t)
                }, y.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
                var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                h.prototype.clone = function() { return new h(this) }, f.call(h.prototype), f.call(d.prototype), d
                    .prototype.clone = function() {
                        return new d(this._bodyInit,
                        {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new i(this.headers),
                            url: this.url
                        })
                    }, d.error = function() {
                    var t = new d(null, { status: 0, statusText: "" });
                    return t.type = "error", t
                };
                var v = [301, 302, 303, 307, 308];
                d.redirect = function(t, e) {
                    if (v.indexOf(e) === -1) throw new RangeError("Invalid status code");
                    return new d(null, { status: e, headers: { location: t } })
                }, t.Headers = i, t.Request = h, t.Response = d, t.fetch = function(t, e) {
                    return new Promise(function(r, n) {
                        function i() {
                            return"responseURL" in s
                                ? s.responseURL
                                : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                                ? s.getResponseHeader("X-Request-URL")
                                : void 0
                        }

                        var o;
                        o = h.prototype.isPrototypeOf(t) && !e ? t : new h(t, e);
                        var s = new XMLHttpRequest;
                        s.onload = function() {
                                var t = { status: s.status, statusText: s.statusText, headers: p(s), url: i() },
                                    e = "response" in s ? s.response : s.responseText;
                                r(new d(e, t))
                            }, s.onerror = function() { n(new TypeError("Network request failed")) }, s
                                .ontimeout = function() { n(new TypeError("Network request failed")) }, s
                                .open(o
                                    .method,
                                    o.url,
                                    !0), "include" === o.credentials && (s.withCredentials = !0),
                            "responseType" in s && y.blob && (s.responseType = "blob"), o.headers
                                .forEach(function(t, e) { s.setRequestHeader(e, t) }), s
                                .send("undefined" == typeof o._bodyInit ? null : o._bodyInit)
                    })
                }, t.fetch.polyfill = !0
            }
        }("undefined" != typeof self ? self : this)
    }
});