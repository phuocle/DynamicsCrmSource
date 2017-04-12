/*!
 * This file is based on or incorporates material from the projects listed below
 * (collectively Third Party Code). Microsoft is not the original author of the 
 * Third Party Code. The original copyright notice and the license, under which 
 * Microsoft received such Third Party Code, are set forth below. Such licenses 
 * and notices are provided for informational purposes only. Microsoft, not the 
 * third party, licenses the Third Party Code to you under the terms set forth in
 * the EULA for the Microsoft Product. Microsoft reserves all other rights not 
 * expressly granted under this agreement, whether by implication, estoppel or otherwise. 
 * 
 * jQuery 2.1.1
 * Copyright 2014 jQuery Foundation and other contributors 
 * Provided for Informational Purposes Only
 * MIT License 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the Software), to deal in the
 * Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions: 
 * 
 * The above copyright notice and this permission notice shall be included in all 
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */
(function(n, t) {
    typeof module == "object" && typeof module.exports == "object"
        ? module.exports = n.document
        ? t(n, !0)
        : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        }
        : t(n)
})(typeof window != "undefined" ? window : this,
    function(n, t) {
        function ui(n) {
            var t = n.length, r = i.type(n);
            return r === "function" || i.isWindow(n)
                ? !1
                : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
        }

        function fi(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) { return!!t.call(n, i, n) !== r });
            if (t.nodeType) return i.grep(n, function(n) { return n === t !== r });
            if (typeof t == "string") {
                if (ef.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) { return et.call(t, n) >= 0 !== r })
        }

        function ur(n, t) {
            while ((n = n[t]) && n.nodeType !== 1);
            return n
        }

        function of(n) {
            var t = ei[n] = {};
            return i.each(n.match(c) || [], function(n, i) { t[i] = !0 }), t
        }

        function ct() {
            u.removeEventListener("DOMContentLoaded", ct, !1);
            n.removeEventListener("load", ct, !1);
            i.ready()
        }

        function p() {
            Object.defineProperty(this.cache = {}, 0, { get: function() { return{} } });
            this.expando = i.expando + Math.random()
        }

        function fr(n, t, r) {
            var u;
            if (r === undefined && n.nodeType === 1)
                if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), typeof r == "string") {
                    try {
                        r = r === "true"
                            ? !0
                            : r === "false"
                            ? !1
                            : r === "null" ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                    } catch (f) {
                    }
                    e.set(n, t, r)
                } else r = undefined;
            return r
        }

        function at() { return!0 }

        function g() { return!1 }

        function hr() {
            try {
                return u.activeElement
            } catch (n) {
            }
        }

        function vr(n, t) {
            return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")
                ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody"))
                : n
        }

        function bf(n) { return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n }

        function kf(n) {
            var t = pf.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function oi(n, t) {
            for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function yr(n, t) {
            var f, c, o, s, h, l, a, u;
            if (t.nodeType === 1) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                    delete h.handle;
                    h.events = {};
                    for (o in u) for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function o(n, t) {
            var r = n.getElementsByTagName
                ? n.getElementsByTagName(t || "*")
                : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
            return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function df(n, t) {
            var i = t.nodeName.toLowerCase();
            i === "input" && er.test(n.type)
                ? t.checked = n.checked
                : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
        }

        function pr(t, r) {
            var f,
                u = i(r.createElement(t)).appendTo(r.body),
                e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0]))
                    ? f.display
                    : i.css(u[0], "display");
            return u.detach(), e
        }

        function hi(n) {
            var r = u, t = si[n];
            return t ||
            (t = pr(n, r), t !== "none" && t ||
            (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = vt[0]
                .contentDocument, r.write(), r.close(), t = pr(n, r), vt.detach()), si[n] = t), t
        }

        function rt(n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || yt(n), r && (u = r.getPropertyValue(t) || r[t]),
                r &&
                (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
                    ci.test(u) &&
                        wr.test(t) &&
                        (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r
                            .width, f.width = e, f.minWidth = o, f.maxWidth = s)), u !== undefined ? u + "" : u
        }

        function br(n, t) {
            return{
                get: function() {
                    if (n()) {
                        delete this.get;
                        return
                    }
                    return(this.get = t).apply(this, arguments)
                }
            }
        }

        function gr(n, t) {
            if (t in n) return t;
            for (var r = t[0]
                         .toUpperCase() +
                         t.slice(1),
                u = t,
                i = dr.length;
                i--;
            ) if (t = dr[i] + r, t in n) return t;
            return u
        }

        function nu(n, t, i) {
            var r = ne.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function tu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
                e < 4;
                e += 2
            )
                r === "margin" && (o += i.css(n, r + w[e], !0, f)),
                    u
                        ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)),
                            r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f)))
                        : (o += i
                                .css(n, "padding" + w[e], !0, f),
                            r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o
        }

        function iu(n, t, r) {
            var o = !0,
                u = t === "width" ? n.offsetWidth : n.offsetHeight,
                e = yt(n),
                s = i.css(n, "boxSizing", !1, e) === "border-box";
            if (u <= 0 || u == null) {
                if (u = rt(n, t, e), (u < 0 || u == null) && (u = n.style[t]), ci.test(u)) return u;
                o = s && (f.boxSizingReliable() || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
        }

        function ru(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length;
                f < h;
                f++
            )
                (u = n[f], u.style) &&
                (o[f] = r.get(u, "olddisplay"), e = u.style
                    .display, t
                    ? (o[f] || e !== "none" || (u.style.display = ""),
                        u.style.display === "" && it(u) && (o[f] = r.access(u, "olddisplay", hi(u.nodeName))))
                    : (s = it(u), e === "none" && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; f < h; f++)
                (u = n[f], u.style) &&
                (t && u.style.display !== "none" && u.style.display !== "" ||
                    (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) { return new s.prototype.init(n, t, i, r, u) }

        function fu() { return setTimeout(function() { nt = undefined }), nt = i.now() }

        function bt(n, t) {
            var r, u = 0, i = { height: n };
            for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function eu(n, t, i) {
            for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length;
                r < e;
                r++
            ) if (u = f[r].call(i, t, n)) return u
        }

        function fe(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this, y = {}, s = n.style, c = n.nodeType && it(n), e = r.get(n, "fxshow");
            u.queue ||
            (o = i._queueHooks(n, "fx"), o.unqueued == null &&
                (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() { o.unqueued || w() }), o.unqueued++, l
                .always(function() {
                    l.always(function() {
                        o.unqueued--;
                        i.queue(n, "fx").length || o.empty.fire()
                    })
                }));
            n.nodeType === 1 &&
                ("height" in t || "width" in t) &&
                (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i
                        .css(n, "display"), b = h === "none" ? r.get(n, "olddisplay") || hi(n.nodeName) : h,
                    b === "inline" && i.css(n, "float") === "none" && (s.display = "inline-block"));
            u.overflow &&
            (s.overflow = "hidden", l.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], re.exec(a)) {
                    if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
                        if (a === "show" && e && e[f] !== undefined) c = !0;
                        else continue;
                    y[f] = e && e[f] || i.style(n, f)
                } else h = undefined;
            if (i.isEmptyObject(y)) (h === "none" ? hi(n.nodeName) : h) === "inline" && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() { i(n).hide() });
                l.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y)
                    v = eu(c ? e[f] : 0, f, l), f in e ||
                        (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
            }
        }

        function ee(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i
                    .camelCase(r), e = t[f], u = n[r], i
                    .isArray(u) &&
                    (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i
                    .cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function ou(n, t, r) {
            var e,
                o,
                s = 0,
                l = wt.length,
                f = i.Deferred().always(function() { delete c.elem }),
                c = function() {
                    if (o) return!1;
                    for (var s = nt || fu(),
                        t = Math.max(0, u.startTime + u.duration - s),
                        h = t / u.duration || 0,
                        i = 1 - h,
                        r = 0,
                        e = u.tweens.length;
                        r < e;
                        r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, { specialEasing: {} }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: nt || fu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0, r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < r; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (ee(h, u.opts.specialEasing); s < l; s++) if (e = wt[s].call(u, n, h, u.opts), e) return e;
            return i.map(h, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx
                .timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function pu(n) {
            return function(t, r) {
                typeof t != "string" && (r = t, t = "*");
                var u, f = 0, e = t.toLowerCase().match(c) || [];
                if (i.isFunction(r))
                    while (u = e[f++])
                        u[0] === "+"
                            ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r))
                            : (n[u] = n[u] || []).push(r)
            }
        }

        function wu(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [],
                    function(n, i) {
                        var s = i(t, r, u);
                        if (typeof s != "string" || o || f[s]) {
                            if (o) return!(h = s)
                        } else return t.dataTypes.unshift(s), e(s), !1
                    }), h
            }

            var f = {}, o = n === li;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function ai(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function ae(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                r[0
                    ] ===
                    "*";
            ) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return f !== r[0] && r.unshift(f), i[f]
        }

        function ve(n, t, i, r) {
            var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
            if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n
                        .responseFields[u] &&
                        (i[n
                            .responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e =
                        u,
                    u = c.shift(), u)
                    if (u === "*") u = e;
                    else if (e !== "*" && e !== u) {
                        if (f = o[e + " " + u] || o["* " + u], !f)
                            for (h in o)
                                if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                                    f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (f !== !0)
                            if (f && n.throws) t = f(t);
                            else
                                try {
                                    t = f(t)
                                } catch (l) {
                                    return{
                                        state: "parsererror",
                                        error: f ? l : "No conversion from " + e + " to " + u
                                    }
                                }
                    }
            return{ state: "success", data: t }
        }

        function vi(n, t, r, u) {
            var f;
            if (i.isArray(t))
                i.each(t,
                    function(t, i) {
                        r || pe.test(n) ? u(n, i) : vi(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
                    });
            else if (r || i.type(t) !== "object") u(n, t);
            else for (f in t) vi(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) { return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView }

        var k = [],
            a = k.slice,
            bi = k.concat,
            ii = k.push,
            et = k.indexOf,
            ot = {},
            nf = ot.toString,
            ri = ot.hasOwnProperty,
            f = {},
            u = n.document,
            ki = "2.1.1",
            i = function(n, t) { return new i.fn.init(n, t) },
            tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rf = /^-ms-/,
            uf = /-([\da-z])/gi,
            ff = function(n, t) { return t.toUpperCase() },
            y,
            st,
            nr,
            tr,
            ir,
            rr,
            c,
            ei,
            ht,
            l,
            d,
            vt,
            si,
            oe,
            su,
            tt,
            hu,
            kt,
            cu,
            dt,
            gt,
            yi,
            ti,
            pi,
            wi,
            du,
            gu;
        i.fn = i.prototype = {
            jquery: ki,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() { return a.call(this) },
            get: function(n) { return n != null ? n < 0 ? this[n + this.length] : this[n] : a.call(this) },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) { return i.each(this, n, t) },
            map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) },
            slice: function() { return this.pushStack(a.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(n) {
                var i = this.length, t = +n + (n < 0 ? i : 0);
                return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: ii,
            sort: k.sort,
            splice: k.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
            for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++),
                typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--);
                u < c;
                u++)
                if ((e = arguments[u]) != null)
                    for (f in e)
                        (r = n[f], t = e[f], n !== t) &&
                        (h && t && (i.isPlainObject(t) || (o = i.isArray(t)))
                            ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f
                            ] = i.extend(h, s, t))
                            : t !== undefined && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) { throw new Error(n); },
            noop: function() {},
            isFunction: function(n) { return i.type(n) === "function" },
            isArray: Array.isArray,
            isWindow: function(n) { return n != null && n === n.window },
            isNumeric: function(n) { return!i.isArray(n) && n - parseFloat(n) >= 0 },
            isPlainObject: function(n) {
                return i.type(n) !== "object" || n.nodeType || i.isWindow(n)
                    ? !1
                    : n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(n) {
                for (var t in n) return!1;
                return!0
            },
            type: function(n) {
                return n == null
                    ? n + ""
                    : typeof n == "object" || typeof n == "function" ? ot[nf.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                var t, r = eval;
                n = i.trim(n);
                n &&
                (n.indexOf("use strict") === 1
                    ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t))
                    : r(n))
            },
            camelCase: function(n) { return n.replace(rf, "ms-").replace(uf, ff) },
            nodeName: function(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() },
            each: function(n, t, i) {
                var u, r = 0, f = n.length, e = ui(n);
                if (i) {
                    if (e) {
                        for (; r < f; r++) if (u = t.apply(n[r], i), u === !1) break
                    } else for (r in n) if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; r < f; r++) if (u = t.call(n[r], r, n[r]), u === !1) break
                } else for (r in n) if (u = t.call(n[r], r, n[r]), u === !1) break;
                return n
            },
            trim: function(n) { return n == null ? "" : (n + "").replace(tf, "") },
            makeArray: function(n, t) {
                var r = t || [];
                return n != null && (ui(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)), r
            },
            inArray: function(n, t, i) { return t == null ? -1 : et.call(t, n, i) },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0, e = n.length, o = ui(n), f = [];
                if (o) for (; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
                else for (r in n) u = t(n[r], r, i), u != null && f.push(u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                return(typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n))
                    ? undefined
                    : (f = a.call(arguments, 2), r = function() {
                        return n.apply(t || this, f.concat(a.call(arguments)))
                    }, r.guid = n.guid = n.guid || i.guid++, r)
            },
            now: Date.now,
            support: f
        });
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
            function(n, t) { ot["[object " + t + "]"] = t.toLowerCase() });
        y = function(n) {
            function r(n, t, i, r) {
                var w, h, c, v, k, y, d, l, nt, g;
                if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || typeof n != "string"
                ) return i;
                if ((v = t.nodeType) !== 1 && v !== 9) return[];
                if (a && !r) {
                    if (w = sr.exec(n))
                        if (c = w[1]) {
                            if (v === 9)
                                if (h = t.getElementById(c), h && h.parentNode) {
                                    if (h.id === c) return i.push(h), i
                                } else return i;
                            else if (t.ownerDocument &&
                                (h = t.ownerDocument.getElementById(c)) &&
                                ot(t, h) &&
                                h.id === c) return i.push(h), i
                        } else {
                            if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                            if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName
                            ) return b.apply(i, t.getElementsByClassName(c)), i
                        }
                    if (u.qsa && (!o || !o.test(n))) {
                        if (l = d = f, nt = t, g = v === 9 && n, v === 1 && t.nodeName.toLowerCase() !== "object") {
                            for (y = et(n), (d = t.getAttribute("id"))
                                    ? l = d.replace(hr, "\\$&")
                                    : t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length;
                                k--;
                            ) y[k] = l + yt(y[k]);
                            nt = gt.test(n) && ii(t.parentNode) || t;
                            g = y.join(",")
                        }
                        if (g)
                            try {
                                return b.apply(i, nt.querySelectorAll(g)), i
                            } catch (tt) {
                            } finally {
                                d || t.removeAttribute("id")
                            }
                    }
                }
                return si(n.replace(at, "$1"), t, i, r)
            }

            function ni() {
                function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u }

                var i = [];
                return n
            }

            function h(n) { return n[f] = !0, n }

            function c(n) {
                var t = e.createElement("div");
                try {
                    return!!n(t)
                } catch (i) {
                    return!1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ti(n, i) { for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i }

            function wi(n, t) {
                var i = t && n,
                    r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
                if (r) return r;
                if (i) while (i = i.nextSibling) if (i === t) return-1;
                return n ? 1 : -1
            }

            function cr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return(i === "input" || i === "button") && t.type === n
                }
            }

            function tt(n) {
                return h(function(t) {
                    return t = +t, h(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ii(n) { return n && typeof n.getElementsByTagName !== ut && n }

            function bi() {}

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                return i
            }

            function ri(n, t, i) {
                var r = t.dir, u = i && r === "parentNode", e = ki++;
                return t.first
                    ? function(t, i, f) { while (t = t[r]) if (t.nodeType === 1 || u) return n(t, i, f) }
                    : function(t, i, o) {
                        var s, h, c = [v, e];
                        if (o) {
                            while (t = t[r]) if ((t.nodeType === 1 || u) && n(t, i, o)) return!0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || u) {
                                    if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e
                                    ) return c[2] = s[2];
                                    if (h[r] = c, c[2] = n(t, i, o)) return!0
                                }
                    }
            }

            function ui(n) {
                return n.length > 1
                    ? function(t, i, r) {
                        for (var u = n.length; u--;) if (!n[u](t, i, r)) return!1;
                        return!0
                    }
                    : n[0]
            }

            function ar(n, t, i) {
                for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                return i
            }

            function pt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = t != null;
                    f < s;
                    f++
                ) (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function fi(n, t, i, r, u, e) {
                return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
                    var l,
                        c,
                        a,
                        p = [],
                        y = [],
                        w = e.length,
                        k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                        v = n && (f || !t) ? pt(k, p, n, o, s) : k,
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;) (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;) (a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)
                                (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
                })
            }

            function ei(n) {
                for (var s,
                    u,
                    r,
                    o = n.length,
                    h = t.relative[n[0].type],
                    c = h || t.relative[" "],
                    i = h ? 1 : 0,
                    l = ri(function(n) { return n === s }, c, !0),
                    a = ri(function(n) { return nt.call(s, n) > -1 }, c, !0),
                    e = [
                        function(n, t, i) {
                            return!h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                        }
                    ];
                    i < o;
                    i++)
                    if (u = t.relative[n[i].type]) e = [ri(ui(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; r < o; r++) if (t.relative[n[r].type]) break;
                            return fi(i > 1 && ui(e),
                                i > 1 &&
                                yt(n.slice(0, i - 1).concat({ value: n[i - 2].type === " " ? "*" : "" }))
                                .replace(at, "$1"),
                                u,
                                i < r && ei(n.slice(i, r)),
                                r < o && ei(n = n.slice(r)),
                                r < o && yt(n))
                        }
                        e.push(u)
                    }
                return ui(e)
            }

            function vr(n, i) {
                var u = i.length > 0,
                    f = n.length > 0,
                    o = function(o, s, h, c, l) {
                        var y,
                            d,
                            w,
                            k = 0,
                            a = "0",
                            g = o && [],
                            p = [],
                            nt = ct,
                            tt = o || f && t.find.TAG("*", l),
                            it = v += nt == null ? 1 : Math.random() || .1,
                            rt = tt.length;
                        for (l && (ct = s !== e && s); a !== rt && (y = tt[a]) != null; a++) {
                            if (f && y) {
                                for (d = 0; w = n[d++];)
                                    if (w(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (v = it)
                            }
                            u && ((y = !w && y) && k--, o && g.push(y))
                        }
                        if (k += a, u && a !== k) {
                            for (d = 0; w = i[d++];) w(g, p, s, h);
                            if (o) {
                                if (k > 0) while (a--) g[a] || p[a] || (p[a] = gi.call(c));
                                p = pt(p)
                            }
                            b.apply(c, p);
                            l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                        }
                        return l && (v = it, ct = nt), g
                    };
                return u ? h(o) : o
            }

            var it,
                u,
                t,
                ht,
                oi,
                et,
                wt,
                si,
                ct,
                y,
                rt,
                p,
                e,
                l,
                a,
                o,
                g,
                lt,
                ot,
                f = "sizzle" + -new Date,
                s = n.document,
                v = 0,
                ki = 0,
                hi = ni(),
                ci = ni(),
                li = ni(),
                bt = function(n, t) { return n === t && (rt = !0), 0 },
                ut = typeof undefined,
                ai = -2147483648,
                di = {}.hasOwnProperty,
                w = [],
                gi = w.pop,
                nr = w.push,
                b = w.push,
                vi = w.slice,
                nt = w.indexOf ||
                    function(n) {
                        for (var t = 0, i = this.length; t < i; t++) if (this[t] === n) return t;
                        return-1
                    },
                kt =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                yi = ft.replace("w", "w#"),
                pi = "\\[" +
                    i +
                    "*(" +
                    ft +
                    ")(?:" +
                    i +
                    "*([*^$|!~]?=)" +
                    i +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    yi +
                    "))|)" +
                    i +
                    "*\\]",
                dt = ":(" +
                    ft +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    pi +
                    ")*)|.*)\\)|)",
                at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                tr = new RegExp("^" + i + "*," + i + "*"),
                ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                ur = new RegExp(dt),
                fr = new RegExp("^" + yi + "$"),
                vt = {
                    ID: new RegExp("^#(" + ft + ")"),
                    CLASS: new RegExp("^\\.(" + ft + ")"),
                    TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + pi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        i +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        i +
                        "*(?:([+-]|)" +
                        i +
                        "*(\\d+)|))" +
                        i +
                        "*\\)|)",
                        "i"),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp("^" +
                        i +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        i +
                        "*((?:-\\d)?\\d*)" +
                        i +
                        "*\\)|)(?=[^-]|$)",
                        "i")
                },
                er = /^(?:input|select|textarea|button)$/i,
                or = /^h\d$/i,
                st = /^[^{]+\{\s*\[native \w/,
                sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                hr = /'|\\/g,
                k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                d = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i
                        ? t
                        : r < 0
                        ? String.fromCharCode(r + 65536)
                        : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                };
            try {
                b.apply(w = vi.call(s.childNodes), s.childNodes);
                w[s.childNodes.length].nodeType
            } catch (yr) {
                b = {
                    apply: w.length
                        ? function(n, t) { nr.apply(n, vi.call(t)) }
                        : function(n, t) {
                            for (var i = n.length, r = 0; n[i++] = t[r++];);
                            n.length = i - 1
                        }
                }
            }
            u = r.support = {};
            oi = r.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            };
            p = r.setDocument = function(n) {
                var v, r = n ? n.ownerDocument || n : s, h = r.defaultView;
                return r === e || r.nodeType !== 9 || !r.documentElement
                    ? e
                    : (e = r, l = r
                        .documentElement, a = !oi(r), h &&
                        h !== h.top &&
                        (h.addEventListener
                            ? h.addEventListener("unload", function() { p() }, !1)
                            : h.attachEvent && h.attachEvent("onunload", function() { p() })), u
                        .attributes = c(function(n) { return n.className = "i", !n.getAttribute("className") }), u
                        .getElementsByTagName = c(function(n) {
                            return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
                        }), u.getElementsByClassName = st.test(r.getElementsByClassName) &&
                        c(function(n) {
                            return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild
                                .className = "i", n.getElementsByClassName("i").length === 2
                        }), u.getById = c(function(n) {
                        return l.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
                    }), u.getById
                        ? (t.find.ID = function(n, t) {
                            if (typeof t.getElementById !== ut && a) {
                                var i = t.getElementById(n);
                                return i && i.parentNode ? [i] : []
                            }
                        }, t.filter.ID = function(n) {
                            var t = n.replace(k, d);
                            return function(n) { return n.getAttribute("id") === t }
                        })
                        : (delete t.find.ID, t.filter.ID = function(n) {
                            var t = n.replace(k, d);
                            return function(n) {
                                var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                                return i && i.value === t
                            }
                        }), t.find.TAG = u.getElementsByTagName
                        ? function(n, t) { if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n) }
                        : function(n, t) {
                            var i, r = [], f = 0, u = t.getElementsByTagName(n);
                            if (n === "*") {
                                while (i = u[f++]) i.nodeType === 1 && r.push(i);
                                return r
                            }
                            return u
                        }, t.find.CLASS = u.getElementsByClassName &&
                        function(n, t) {
                            if (typeof t.getElementsByClassName !== ut && a) return t.getElementsByClassName(n)
                        }, g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) &&
                    (c(function(n) {
                        n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
                        n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                        n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                        n.querySelectorAll(":checked").length || o.push(":checked")
                    }), c(function(n) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden");
                        n.appendChild(t).setAttribute("name", "D");
                        n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                        n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                        n.querySelectorAll("*,:x");
                        o.push(",.*:")
                    })), (u.matchesSelector = st.test(lt = l.matches ||
                            l.webkitMatchesSelector ||
                            l.mozMatchesSelector ||
                            l.oMatchesSelector ||
                            l.msMatchesSelector)) &&
                        c(function(n) {
                            u.disconnectedMatch = lt.call(n, "div");
                            lt.call(n, "[s!='']:x");
                            g.push("!=", dt)
                        }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st
                        .test(l.compareDocumentPosition), ot = v || st.test(l.contains)
                        ? function(n, t) {
                            var r = n.nodeType === 9 ? n.documentElement : n, i = t && t.parentNode;
                            return n === i ||
                                !!(i &&
                                    i.nodeType === 1 &&
                                    (r.contains
                                        ? r.contains(i)
                                        : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                        }
                        : function(n, t) {
                            if (t) while (t = t.parentNode) if (t === n) return!0;
                            return!1
                        }, bt = v
                        ? function(n, t) {
                            if (n === t) return rt = !0, 0;
                            var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                            return i
                                ? i
                                : (i = (n.ownerDocument || n) === (t.ownerDocument || t)
                                    ? n.compareDocumentPosition(t)
                                    : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i)
                                ? n === r || n.ownerDocument === s && ot(s, n)
                                ? -1
                                : t === r || t.ownerDocument === s && ot(s, t)
                                ? 1
                                : y ? nt.call(y, n) - nt.call(y, t) : 0
                                : i & 4 ? -1 : 1
                        }
                        : function(n, t) {
                            if (n === t) return rt = !0, 0;
                            var i, u = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t];
                            if (o && h) {
                                if (o === h) return wi(n, t)
                            } else
                                return n === r
                                    ? -1
                                    : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                            for (i = n; i = i.parentNode;) f.unshift(i);
                            for (i = t; i = i.parentNode;) e.unshift(i);
                            while (f[u] === e[u]) u++;
                            return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
                        }, r)
            };
            r.matches = function(n, t) { return r(n, null, null, t) };
            r.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== e && p(n), t = t
                    .replace(rr, "='$1']"), u.matchesSelector && a && (!g || !g.test(t)) && (!o || !o.test(t)))
                    try {
                        var i = lt.call(n, t);
                        if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
                    } catch (f) {
                    }
                return r(t, e, null, [n]).length > 0
            };
            r.contains = function(n, t) { return(n.ownerDocument || n) !== e && p(n), ot(n, t) };
            r.attr = function(n, i) {
                (n.ownerDocument || n) !== e && p(n);
                var f = t.attrHandle[i.toLowerCase()],
                    r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : undefined;
                return r !== undefined
                    ? r
                    : u.attributes || !a
                    ? n.getAttribute(i)
                    : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
            };
            r.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); };
            r.uniqueSort = function(n) {
                var r, f = [], t = 0, i = 0;
                if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
                    while (r = n[i++]) r === n[i] && (t = f.push(i));
                    while (t--) n.splice(f[t], 1)
                }
                return y = null, n
            };
            ht = r.getText = function(n) {
                var r, i = "", u = 0, t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += ht(n)
                    } else if (t === 3 || t === 4) return n.nodeValue
                } else while (r = n[u++]) i += ht(r);
                return i
            };
            t = r.selectors = {
                cacheLength: 50,
                createPseudo: h,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(k, d), n[3] = (n[3] || n[4] || n[5] || "")
                            .replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth"
                            ? (n[3] || r.error(n[0]), n[4] = +(
                                n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(
                                n[7] + n[8] || n[3] === "odd"))
                            : n[3] && r.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0])
                            ? null
                            : (n[3]
                                ? n[2] = n[4] || n[5] || ""
                                : t &&
                                ur.test(t) &&
                                (i = et(t, !0)) &&
                                (i = t.indexOf(")", t.length - i) - t.length) &&
                                (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(k, d).toLowerCase();
                        return n === "*"
                            ? function() { return!0 }
                            : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t ||
                            (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) &&
                            hi(n,
                                function(n) {
                                    return t.test(typeof n.className == "string" && n.className ||
                                        typeof n.getAttribute !== ut && n.getAttribute("class") ||
                                        "")
                                })
                    },
                    ATTR: function(n, t, i) {
                        return function(u) {
                            var f = r.attr(u, n);
                            return f == null
                                ? t === "!="
                                : t
                                ? (f += "", t === "="
                                    ? f === i
                                    : t === "!="
                                    ? f !== i
                                    : t === "^="
                                    ? i && f.indexOf(i) === 0
                                    : t === "*="
                                    ? i && f.indexOf(i) > -1
                                    : t === "$="
                                    ? i && f.slice(-i.length) === i
                                    : t === "~="
                                    ? (" " + f + " ").indexOf(i) > -1
                                    : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1)
                                : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = n.slice(0, 3) !== "nth", o = n.slice(-4) !== "last", e = t === "of-type";
                        return r === 1 && u === 0
                            ? function(n) { return!!n.parentNode }
                            : function(t, i, h) {
                                var a,
                                    k,
                                    c,
                                    l,
                                    y,
                                    w,
                                    b = s !== o ? "nextSibling" : "previousSibling",
                                    p = t.parentNode,
                                    g = e && t.nodeName.toLowerCase(),
                                    d = !h && !e;
                                if (p) {
                                    if (s) {
                                        while (b) {
                                            for (c = t;
                                                c = c[b
                                                ];
                                            ) if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return!1;
                                            w = b = n === "only" && !w && "nextSibling"
                                        }
                                        return!0
                                    }
                                    if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                        for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l =
                                                a[0] === v && a[2], c = y && p.childNodes[y];
                                            c = ++y && c && c[b] || (l = y = 0) || w.pop();
                                        )
                                            if (c.nodeType === 1 && ++l && c === t) {
                                                k[n] = [v, y, l];
                                                break
                                            }
                                    } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                                    else
                                        while (c = ++y && c && c[b] || (l = y = 0) || w.pop()
                                        )
                                            if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) &&
                                                ++l &&
                                                (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break;
                                    return l -= u, l === r || l % r == 0 && l / r >= 0
                                }
                            }
                    },
                    PSEUDO: function(n, i) {
                        var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return u[f]
                            ? u(i)
                            : u.length > 1
                            ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase())
                                ? h(function(n, t) {
                                    for (var r,
                                        f =
                                            u(n, i),
                                        e = f.length;
                                        e--;
                                    ) r = nt.call(n, f[e]), n[r] = !(t[r] = f[e])
                                })
                                : function(n) { return u(n, 0, e) })
                            : u
                    }
                },
                pseudos: {
                    not: h(function(n) {
                        var i = [], r = [], t = wt(n.replace(at, "$1"));
                        return t[f]
                            ? h(function(n, i, r, u) {
                                for (var e,
                                    o =
                                        t(n, null, u, []),
                                    f = n.length;
                                    f--;
                                ) (e = o[f]) && (n[f] = !(i[f] = e))
                            })
                            : function(n, u, f) { return i[0] = n, t(i, null, f, r), !r.pop() }
                    }),
                    has: h(function(n) { return function(t) { return r(n, t).length > 0 } }),
                    contains: h(function(n) {
                        return function(t) { return(t.textContent || t.innerText || ht(t)).indexOf(n) > -1 }
                    }),
                    lang: h(function(n) {
                        return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d)
                            .toLowerCase(), function(t) {
                            var i;
                            do
                                if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")
                                ) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return!1
                        }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) { return n === l },
                    focus: function(n) {
                        return n === e.activeElement &&
                            (!e.hasFocus || e.hasFocus()) &&
                            !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) { return n.disabled === !1 },
                    disabled: function(n) { return n.disabled === !0 },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && !!n.checked || t === "option" && !!n.selected
                    },
                    selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return!1;
                        return!0
                    },
                    parent: function(n) { return!t.pseudos.empty(n) },
                    header: function(n) { return or.test(n.nodeName) },
                    input: function(n) { return er.test(n.nodeName) },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && n.type === "button" || t === "button"
                    },
                    text: function(n) {
                        var t;
                        return n.nodeName.toLowerCase() === "input" &&
                            n.type === "text" &&
                            ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: tt(function() { return[0] }),
                    last: tt(function(n, t) { return[t - 1] }),
                    eq: tt(function(n, t, i) { return[i < 0 ? i + t : i] }),
                    even: tt(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: tt(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: tt(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: tt(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (it in{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[it] = cr(it);
            for (it in{ submit: !0, reset: !0 }) t.pseudos[it] = lr(it);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, et = r.tokenize = function(n, i) {
                    var e, f, s, o, u, h, c, l = ci[n + " "];
                    if (l) return i ? 0 : l.slice(0);
                    for (u = n, h = [], c = t.preFilter; u;) {
                        (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                        e = !1;
                        (f = ir.exec(u)) &&
                            (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), u = u.slice(e.length));
                        for (o in t.filter)
                            (f = vt[o].exec(u)) &&
                                (!c[o] || (f = c[o](f))) &&
                                (e = f.shift(), s.push({ value: e, type: o, matches: f }), u = u.slice(e.length));
                        if (!e) break
                    }
                    return i ? u.length : u ? r.error(n) : ci(n, h).slice(0)
                }, wt = r.compile = function(n, t) {
                    var r, u = [], e = [], i = li[n + " "];
                    if (!i) {
                        for (t || (t = et(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                        i = li(n, vr(e, u));
                        i.selector = n
                    }
                    return i
                }, si = r.select = function(n, i, r, f) {
                    var s, e, o, l, v, c = typeof n == "function" && n, h = !f && et(n = c.selector || n);
                    if (r = r || [], h.length === 1) {
                        if (e = h[0] = h[0].slice(0), e.length > 2 &&
                            (o = e[0]).type === "ID" &&
                            u.getById &&
                            i.nodeType === 9 &&
                            a &&
                            t.relative[e[1].type]) {
                            if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], i) c && (i = i.parentNode);
                            else return r;
                            n = n.slice(e.shift().value.length)
                        }
                        for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                            if (o = e[s], t.relative[l = o.type]) break;
                            if ((v = t.find[l]) &&
                                (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                                if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(r, f), r;
                                break
                            }
                        }
                    }
                    return(c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i), r
                }, u.sortStable = f.split("").sort(bt).join("") === f, u.detectDuplicates = !!rt, p(), u
                    .sortDetached = c(function(n) { return n.compareDocumentPosition(e.createElement("div")) & 1 }),
                c(function(n) {
                        return n.innerHTML = "<a href='#'><\/a>", n.firstChild
                            .getAttribute("href") ===
                            "#"
                    }) ||
                    ti("type|href|height|width",
                        function(n, t, i) { if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2) }),
                u.attributes &&
                    c(function(n) {
                        return n.innerHTML = "<input/>", n.firstChild
                            .setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
                    }) ||
                    ti("value",
                        function(n, t, i) {
                            if (!i && n.nodeName.toLowerCase() === "input")
                                return n
                                    .defaultValue
                        }), c(function(n) { return n.getAttribute("disabled") == null }) ||
                    ti(kt,
                        function(n, t, i) {
                            var r;
                            if (!i)
                                return n[t] === !0
                                    ? t.toLowerCase()
                                    : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
                        }), r
        }(n);
        i.find = y;
        i.expr = y.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = y.uniqueSort;
        i.text = y.getText;
        i.isXMLDoc = y.isXML;
        i.contains = y.contains;
        var di = i.expr.match.needsContext, gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ef = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1
                ? i.find.matchesSelector(u, n) ? [u] : []
                : i.find.matches(n, i.grep(t, function(n) { return n.nodeType === 1 }))
        };
        i.fn.extend({
            find: function(n) {
                var t, u = this.length, r = [], f = this;
                if (typeof n != "string")
                    return this.pushStack(i(n).filter(function() {
                        for (t = 0; t < u; t++) if (i.contains(f[t], this)) return!0
                    }));
                for (t = 0; t < u; t++) i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r
                    .selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) { return this.pushStack(fi(this, n || [], !1)) },
            not: function(n) { return this.pushStack(fi(this, n || [], !0)) },
            is: function(n) { return!!fi(this, typeof n == "string" && di.test(n) ? i(n) : n || [], !1).length }
        });
        nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        tr = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if (typeof n == "string") {
                if (r = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : nr.exec(n),
                    r && (r[1] || !t)) {
                    if (r[1]) {
                        if (t = t instanceof i ? t[0] : t, i
                                .merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                            gi
                                .test(r[1]) &&
                                i.isPlainObject(t))
                            for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this
                        .context = u, this.selector = n, this
                }
                return!t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n)
            }
            return n.nodeType
                ? (this.context = this[0] = n, this.length = 1, this)
                : i.isFunction(n)
                ? typeof st.ready != "undefined" ? st.ready(n) : n(i)
                : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i
                    .makeArray(n, this))
        };
        tr.prototype = i.fn;
        st = i(u);
        ir = /^(?:parents|prev(?:Until|All))/;
        rr = { children: !0, contents: !0, next: !0, prev: !0 };
        i.extend({
            dir: function(n, t, r) {
                for (var u = [], f = r !== undefined; (n = n[t]) && n.nodeType !== 9;)
                    if (n.nodeType === 1) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
                return i
            }
        });
        i.fn.extend({
            has: function(n) {
                var t = i(n, this), r = t.length;
                return this.filter(function() { for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return!0 })
            },
            closest: function(n, t) {
                for (var r,
                    f = 0,
                    o = this.length,
                    u = [],
                    e = di.test(n) || typeof n != "string" ? i(n, t || this.context) : 0;
                    f < o;
                    f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r
                            .nodeType <
                            11 &&
                            (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n
                    ? typeof n == "string" ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n)
                    : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) { return this.pushStack(i.unique(i.merge(this.get(), i(n, t)))) },
            addBack: function(n) { return this.add(n == null ? this.prevObject : this.prevObject.filter(n)) }
        });
        i.each({
                parent: function(n) {
                    var t = n.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(n) { return i.dir(n, "parentNode") },
                parentsUntil: function(n, t, r) { return i.dir(n, "parentNode", r) },
                next: function(n) { return ur(n, "nextSibling") },
                prev: function(n) { return ur(n, "previousSibling") },
                nextAll: function(n) { return i.dir(n, "nextSibling") },
                prevAll: function(n) { return i.dir(n, "previousSibling") },
                nextUntil: function(n, t, r) { return i.dir(n, "nextSibling", r) },
                prevUntil: function(n, t, r) { return i.dir(n, "previousSibling", r) },
                siblings: function(n) { return i.sibling((n.parentNode || {}).firstChild, n) },
                children: function(n) { return i.sibling(n.firstChild) },
                contents: function(n) { return n.contentDocument || i.merge([], n.childNodes) }
            },
            function(n, t) {
                i.fn[n] = function(r, u) {
                    var f = i.map(this, t, r);
                    return n
                            .slice(-5) !==
                            "Until" &&
                            (u = r), u && typeof u == "string" && (f = i.filter(u, f)),
                        this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f)
                }
            });
        c = /\S+/g;
        ei = {};
        i.Callbacks = function(n) {
            n = typeof n == "string" ? ei[n] || of(n) : i.extend({}, n);
            var u,
                h,
                o,
                c,
                f,
                e,
                t = [],
                r = !n.once && [],
                l = function(i) {
                    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++)
                        if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                            u = !1;
                            break
                        }
                    o = !1;
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
                },
                s = {
                    add: function() {
                        if (t) {
                            var r = t.length;
                            (function e(r) {
                                i.each(r,
                                    function(r, u) {
                                        var f = i.type(u);
                                        f === "function"
                                            ? n.unique && s.has(u) || t.push(u)
                                            : u && u.length && f !== "string" && e(u)
                                    })
                            })(arguments);
                            o ? f = t.length : u && (c = r, l(u))
                        }
                        return this
                    },
                    remove: function() {
                        return t &&
                            i.each(arguments,
                                function(n, r) {
                                    for (var u;
                                        (u = i.inArray(r, t, u)) >
                                            -
                                            1;
                                    ) t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
                                }), this
                    },
                    has: function(n) { return n ? i.inArray(n, t) > -1 : !!(t && t.length) },
                    empty: function() { return t = [], f = 0, this },
                    disable: function() { return t = r = u = undefined, this },
                    disabled: function() { return!t },
                    lock: function() { return r = undefined, u || s.disable(), this },
                    locked: function() { return!r },
                    fireWith: function(n, i) {
                        return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)),
                            this
                    },
                    fire: function() { return s.fireWith(this, arguments), this },
                    fired: function() { return!!h }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() { return f },
                        always: function() { return t.done(arguments).fail(arguments), this },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u,
                                    function(u, e) {
                                        var o = i.isFunction(n[u]) && n[u];
                                        t[e[1]](function() {
                                            var n = o && o.apply(this, arguments);
                                            n && i.isFunction(n.promise)
                                                ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify)
                                                : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                        })
                                    });
                                n = null
                            }).promise()
                        },
                        promise: function(n) { return n != null ? i.extend(n, r) : r }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u,
                    function(n, i) {
                        var e = i[2], o = i[3];
                        r[i[1]] = e.add;
                        o && e.add(function() { f = o }, u[n ^ 1][2].disable, u[2][2].lock);
                        t[i[0]] = function() { return t[i[0] + "With"](this === t ? r : this, arguments), this };
                        t[i[0] + "With"] = e.fireWith
                    }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = a.call(arguments),
                    r = u.length,
                    e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                    f = e === 1 ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? a.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o,
                    c,
                    s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r);
                        t < r;
                        t++
                    )
                        u[t] && i.isFunction(u[t].promise)
                            ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o))
                            : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) { return i.ready.promise().done(n), this };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) { n ? i.readyWait++ : i.ready(!0) },
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) ||
                    (i.isReady = !0, n !== !0 && --i.readyWait > 0) ||
                    (ht.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
            }
        });
        i.ready.promise = function(t) {
            return ht ||
            (ht = i.Deferred(), u.readyState === "complete"
                ? setTimeout(i.ready)
                : (u.addEventListener("DOMContentLoaded", ct, !1), n.addEventListener("load", ct, !1))), ht.promise(t)
        };
        i.ready.promise();
        l = i.access = function(n, t, r, u, f, e, o) {
            var s = 0, c = n.length, h = r == null;
            if (i.type(r) === "object") {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (u !== undefined &&
                (f = !0, i.isFunction(u) || (o = !0), h &&
                    (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) { return h.call(i(n), r) })), t)
            ) for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        i.acceptData = function(n) { return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType };
        p.uid = 1;
        p.accepts = i.acceptData;
        p.prototype = {
            key: function(n) {
                if (!p.accepts(n)) return 0;
                var r = {}, t = n[this.expando];
                if (!t) {
                    t = p.uid++;
                    try {
                        r[this.expando] = { value: t };
                        Object.defineProperties(n, r)
                    } catch (u) {
                        r[this.expando] = t;
                        i.extend(n, r)
                    }
                }
                return this.cache[t] || (this.cache[t] = {}), t
            },
            set: function(n, t, r) {
                var f, e = this.key(n), u = this.cache[e];
                if (typeof t == "string") u[t] = r;
                else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
                else for (f in t) u[f] = t[f];
                return u
            },
            get: function(n, t) {
                var i = this.cache[this.key(n)];
                return t === undefined ? i : i[t]
            },
            access: function(n, t, r) {
                var u;
                return t === undefined || t && typeof t == "string" && r === undefined
                    ? (u = this.get(n, t), u !== undefined ? u : this.get(n, i.camelCase(t)))
                    : (this.set(n, t, r), r !== undefined ? r : t)
            },
            remove: function(n, t) {
                var u, r, f, o = this.key(n), e = this.cache[o];
                if (t === undefined) this.cache[o] = {};
                else for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), t in
                e ? r = [t, f] : (r = f, r = r in e ? [r] : r.match(c) || [])),
                u = r.length;
                u--;)
        delete e[r[u]]
    },
    hasData:

function(n) { return!i.isEmptyObject(this.cache[n[this.expando]] || {}) },
discard:function(n) { n[this.expando] && delete this.cache[n[this.expando]] }};
var r = new p, e = new p, sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, hf = /([A-Z])/g;
i.extend({
    hasData: function(n) { return e.hasData(n) || r.hasData(n) },
    data: function(n, t, i) { return e.access(n, t, i) },
    removeData: function(n, t) { e.remove(n, t) },
    _data: function(n, t, i) { return r.access(n, t, i) },
    _removeData: function(n, t) { r.remove(n, t) }
});
i.fn.extend({
    data: function(n, t) {
        var o, f, s, u = this[0], h = u && u.attributes;
        if (n === undefined) {
            if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                for (o = h.length; o--;)
                    h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                r.set(u, "hasDataAttrs", !0)
            }
            return s
        }
        return typeof n == "object"
            ? this.each(function() { e.set(this, n) })
            : l(this,
                function(t) {
                    var r, f = i.camelCase(n);
                    if (u && t === undefined)
                        return(r = e.get(u, n), r !== undefined)
                            ? r
                            : (r = e.get(u, f), r !== undefined)
                            ? r
                            : (r = fr(u, f, undefined), r !== undefined) ? r : void 0;
                    this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        n.indexOf("-") !== -1 && i !== undefined && e.set(this, n, t)
                    })
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0)
    },
    removeData: function(n) { return this.each(function() { e.remove(this, n) }) }
});
i.extend({
    queue: function(n, t, u) {
        var f;
        if (n)
            return t = (t || "fx") + "queue", f = r
                .get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
    },
    dequeue: function(n, t) {
        t = t || "fx";
        var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t), o = function() { i.dequeue(n, t) };
        u === "inprogress" && (u = r.shift(), e--);
        u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
        !e && f && f.empty.fire()
    },
    _queueHooks: function(n, t) {
        var u = t + "queueHooks";
        return r.get(n, u) ||
            r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) })
    }
});
i.fn.extend({
    queue: function(n, t) {
        var r = 2;
        return(typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r)
            ? i.queue(this[0], n)
            : t === undefined
            ? this
            : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
    },
    dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) },
    clearQueue: function(n) { return this.queue(n || "fx", []) },
    promise: function(n, t) {
        var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() { --e || o.resolveWith(f, [f]) };
        for (typeof n != "string" && (t = n, n = undefined), n =
                n || "fx";
            s--;
        ) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
        return h(), o.promise(t)
    }
});
var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = ["Top", "Right", "Bottom", "Left"],
    it = function(n, t) { return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n) },
    er = /^(?:checkbox|radio)$/i;
(function() {
    var i = u.createDocumentFragment(), n = i.appendChild(u.createElement("div")), t = u.createElement("input");
    t.setAttribute("type", "radio");
    t.setAttribute("checked", "checked");
    t.setAttribute("name", "t");
    n.appendChild(t);
    f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
    n.innerHTML = "<textarea>x<\/textarea>";
    f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
})();
d = typeof undefined;
f.focusinBubbles = "onfocusin" in n;
var cf = /^key/,
    lf = /^(?:mouse|pointer|contextmenu)|click/,
    or = /^(?:focusinfocus|focusoutblur)$/,
    sr = /^([^.]*)(?:\.(.+)|)$/;
i.event = {
    global: {},
    add: function(n, t, u, f, e) {
        var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
        if (a)
            for (u
                    .handler &&
                    (v = u, u = v.handler, e = v.selector), u
                    .guid ||
                    (u.guid = i.guid++), (p = a
                        .events) ||
                    (p = a.events = {}), (y = a.handle) ||
                (y = a.handle = function(t) {
                    return typeof i !== d && i.event.triggered !== t.type
                        ? i.event.dispatch.apply(n, arguments)
                        : undefined
                }), t = (t || "").match(c) || [""], b = t.length;
                b--;
            )
                (w = sr.exec(t[b]) || [], o = g = w[1], k = (w[2] || "").split(".").sort(), o) &&
                (s = i.event
                    .special[o] ||
                    {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i
                    .extend({
                            type: o,
                            origType: g,
                            data: f,
                            handler: u,
                            guid: u.guid,
                            selector: e,
                            needsContext: e && i.expr.match.needsContext.test(e),
                            namespace: k.join(".")
                        },
                        v), (l = p[o]) ||
                (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 ||
                    n
                    .addEventListener &&
                    n.addEventListener(o, y, !1)), s.add &&
                (s.add.call(n, h), h.handler
                    .guid ||
                    (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event
                    .global[o] = !0)
    },
    remove: function(n, t, u, f, e) {
        var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
        if (y && (v = y.events)) {
            for (t = (t || "").match(c) || [""], w = t.length; w--;) {
                if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), !o) {
                    for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                    continue
                }
                for (l = i.event
                        .special[o] ||
                        {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h =
                        h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length;
                    p--;
                )
                    s = a[p], (e || d === s.origType) &&
                        (!u || u.guid === s.guid) &&
                        (!h || h.test(s.namespace)) &&
                        (!f || f === s.selector || f === "**" && s.selector) &&
                        (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                k &&
                    !a.length &&
                    (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
            }
            i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
        }
    },
    trigger: function(t, f, e, o) {
        var w,
            s,
            c,
            b,
            a,
            v,
            l,
            p = [e || u],
            h = ri.call(t, "type") ? t.type : t,
            y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
        if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) &&
            !or.test(h + i.event.triggered) &&
            (h
                    .indexOf(".") >=
                    0 &&
                    (y = h.split("."), h = y.shift(), y
                        .sort()), a = h
                    .indexOf(":") <
                    0 &&
                    "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t
                    .isTrigger = o ? 2 : 3, t
                    .namespace = y.join("."), t.namespace_re = t.namespace
                    ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                    : null, t.result = undefined, t
                    .target ||
                    (t
                        .target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {},
                o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
            if (!o && !l.noBubble && !i.isWindow(e)) {
                for (b = l.delegateType || h, or
                        .test(b + h) ||
                        (s = s.parentNode);
                    s;
                    s = s.parentNode) p.push(s), c = s;
                c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
            }
            for (w = 0;
                (s = p[w++]) &&
                    !t
                    .isPropagationStopped();
            )
                t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t
                            .type] &&
                        r
                        .get(s, "handle"), v && v.apply(s, f), v = a && s[a],
                    v &&
                        v.apply &&
                        i.acceptData(s) &&
                        (t.result = v.apply(s, f), t.result === !1 && t.preventDefault()
                        );
            return t.type = h, o ||
                t.isDefaultPrevented() ||
                (!l._default || l._default.apply(p.pop(), f) === !1) &&
                i.acceptData(e) &&
                a &&
                i.isFunction(e[h]) &&
                !i.isWindow(e) &&
                (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event
                    .triggered = undefined, c && (e[a] = c)), t.result
        }
    },
    dispatch: function(n) {
        n = i.event.fix(n);
        var o,
            s,
            e,
            u,
            t,
            h = [],
            c = a.call(arguments),
            l = (r.get(this, "events") || {})[n.type] || [],
            f = i.event.special[n.type] || {};
        if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
            for (h = i.event.handlers
                    .call(this, n, l), o = 0;
                (u = h[o++]) && !n.isPropagationStopped();
            )
                for (n.currentTarget = u
                        .elem, s = 0;
                    (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();
                )
                    (!n.namespace_re || n.namespace_re.test(t.namespace)) &&
                    (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler)
                        .apply(u.elem, c), e !== undefined &&
                        (n.result = e) === !1 &&
                        (n.preventDefault(), n.stopPropagation()));
            return f.postDispatch && f.postDispatch.call(this, n), n.result
        }
    },
    handlers: function(n, t) {
        var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
        if (s && r.nodeType && (!n.button || n.type !== "click"))
            for (; r !== this; r = r.parentNode || this)
                if (r.disabled !== !0 || n.type !== "click") {
                    for (u = [], e = 0; e < s; e++)
                        o = t[e], f = o.selector + " ", u[f] === undefined &&
                        (u[f] = o
                            .needsContext
                            ? i(f, this).index(r) >= 0
                            : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                    u.length && h.push({ elem: r, handlers: u })
                }
        return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h
    },
    props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(n, t) { return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n }
    },
    mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(n, t) {
            var e, i, r, f = t.button;
            return n.pageX == null &&
                    t.clientX != null &&
                    (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n
                        .pageX = t.clientX +
                        (i && i.scrollLeft || r && r.scrollLeft || 0) -
                        (i && i.clientLeft || r && r.clientLeft || 0), n
                        .pageY = t.clientY +
                        (i && i.scrollTop || r && r.scrollTop || 0) -
                        (i && i.clientTop || r && r.clientTop || 0)),
                n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
        }
    },
    fix: function(n) {
        if (n[i.expando]) return n;
        var f, e, o, r = n.type, s = n, t = this.fixHooks[r];
        for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o =
                t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length;
            f--;
        ) e = o[f], n[e] = s[e];
        return n.target || (n.target = u), n.target
            .nodeType ===
            3 &&
            (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
    },
    special: {
        load: { noBubble: !0 },
        focus: {
            trigger: function() { if (this !== hr() && this.focus) return this.focus(), !1 },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() { if (this === hr() && this.blur) return this.blur(), !1 },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
            },
            _default: function(n) { return i.nodeName(n.target, "a") }
        },
        beforeunload: {
            postDispatch: function(n) {
                n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
            }
        }
    },
    simulate: function(n, t, r, u) {
        var f = i.extend(new i.Event, r, { type: n, isSimulated: !0, originalEvent: {} });
        u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
        f.isDefaultPrevented() && r.preventDefault()
    }
};
i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i, !1) };
i.Event = function(n, t) {
    if (!(this instanceof i.Event)) return new i.Event(n, t);
    n && n.type
        ? (this.originalEvent = n, this.type = n.type, this
            .isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1
            ? at
            : g)
        : this.type = n;
    t && i.extend(this, t);
    this.timeStamp = n && n.timeStamp || i.now();
    this[i.expando] = !0
};
i.Event.prototype = {
    isDefaultPrevented: g,
    isPropagationStopped: g,
    isImmediatePropagationStopped: g,
    preventDefault: function() {
        var n = this.originalEvent;
        this.isDefaultPrevented = at;
        n && n.preventDefault && n.preventDefault()
    },
    stopPropagation: function() {
        var n = this.originalEvent;
        this.isPropagationStopped = at;
        n && n.stopPropagation && n.stopPropagation()
    },
    stopImmediatePropagation: function() {
        var n = this.originalEvent;
        this.isImmediatePropagationStopped = at;
        n && n.stopImmediatePropagation && n.stopImmediatePropagation();
        this.stopPropagation()
    }
};
i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
    function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) ||
                    (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
f.focusinBubbles ||
    i.each({ focus: "focusin", blur: "focusout" },
        function(n, t) {
            var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n), !0) };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this, f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this, f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
i.fn.extend({
    on: function(n, t, r, u, f) {
        var e, o;
        if (typeof n == "object") {
            typeof t != "string" && (r = r || t, t = undefined);
            for (o in n) this.on(o, t, r, n[o], f);
            return this
        }
        if (r == null && u == null
                ? (u = t, r = t = undefined)
                : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1
        ) u = g;
        else if (!u) return this;
        return f === 1 &&
        (e = u, u = function(n) { return i().off(n), e.apply(this, arguments) }, u
            .guid = e.guid || (e.guid = i.guid++)), this.each(function() { i.event.add(this, n, u, r, t) })
    },
    one: function(n, t, i, r) { return this.on(n, t, i, r, 1) },
    off: function(n, t, r) {
        var u, f;
        if (n && n.preventDefault && n.handleObj)
            return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType,
                u.selector,
                u.handler), this;
        if (typeof n == "object") {
            for (f in n) this.off(f, t, n[f]);
            return this
        }
        return(t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = g), this
            .each(function() { i.event.remove(this, n, r, t) })
    },
    trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) },
    triggerHandler: function(n, t) {
        var r = this[0];
        if (r) return i.event.trigger(n, t, r, !0)
    }
});
var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    lr = /<([\w:]+)/,
    af = /<|&#?\w+;/,
    vf = /<(?:script|style|link)/i,
    yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ar = /^$|\/(?:java|ecma)script/i,
    pf = /^true\/(.*)/,
    wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    h = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
h.optgroup = h.option;
h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
h.th = h.td;
i.extend({
    clone: function(n, t, r) {
        var u, c, s, e, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
        if (!f
            .noCloneChecked &&
            (n.nodeType === 1 || n.nodeType === 11) &&
            !i.isXMLDoc(n)) for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) df(s[u], e[u]);
        if (t)
            if (r) for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) yr(s[u], e[u]);
            else yr(n, h);
        return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
    },
    buildFragment: function(n, t, r, u) {
        for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; c < w; c++)
            if (f = n[c], f || f === 0)
                if (i.type(f) === "object") i.merge(v, f.nodeType ? [f] : f);
                else if (af.test(f)) {
                    for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1]
                            .toLowerCase(), l = h[y] || h._default, e
                            .innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0];
                        a--;
                    ) e = e.lastChild;
                    i.merge(v, e.childNodes);
                    e = s.firstChild;
                    e.textContent = ""
                } else v.push(t.createTextNode(f));
        for (s.textContent = "", c = 0; f = v[c++];)
            if ((!u || i.inArray(f, u) === -1) &&
            (p = i.contains(f.ownerDocument, f), e = o(s
                .appendChild(f),
                "script"), p && oi(e), r)) for (a = 0; f = e[a++];) ar.test(f.type || "") && r.push(f);
        return s
    },
    cleanData: function(n) {
        for (var f, t, o, u, h = i.event.special, s = 0; (t = n[s]) !== undefined; s++) {
            if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
                if (f.events) for (o in f.events) h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                r.cache[u] && delete r.cache[u]
            }
            delete e.cache[t[e.expando]]
        }
    }
});
i.fn.extend({
    text: function(n) {
        return l(this,
            function(n) {
                return n === undefined
                    ? i.text(this)
                    : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                    })
            },
            null,
            n,
            arguments.length)
    },
    append: function() {
        return this.domManip(arguments,
            function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vr(this, n);
                    t.appendChild(n)
                }
            })
    },
    prepend: function() {
        return this.domManip(arguments,
            function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
    },
    before: function() {
        return this.domManip(arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) })
    },
    after: function() {
        return this.domManip(arguments,
            function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) })
    },
    remove: function(n, t) {
        for (var r, f = n ? i.filter(n, this) : this, u = 0;
            (r = f[u]) != null;
            u++
        )
            t || r.nodeType !== 1 || i.cleanData(o(r)), r.parentNode &&
                (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")), r.parentNode.removeChild(r));
        return this
    },
    empty: function() {
        for (var n, t = 0; (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
        return this
    },
    clone: function(n, t) {
        return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() { return i.clone(this, n, t) })
    },
    html: function(n) {
        return l(this,
            function(n) {
                var t = this[0] || {}, r = 0, u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(cr, "<$1><\/$2>");
                    try {
                        for (; r < u; r++)
                            t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {
                    }
                }
                t && this.empty().append(n)
            },
            null,
            n,
            arguments.length)
    },
    replaceWith: function() {
        var n = arguments[0];
        return this.domManip(arguments,
            function(t) {
                n = this.parentNode;
                i.cleanData(o(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
    },
    detach: function(n) { return this.remove(n, !0) },
    domManip: function(n, t) {
        n = bi.apply([], n);
        var h, v, s, c, u, y, e = 0, l = this.length, w = this, b = l - 1, a = n[0], p = i.isFunction(a);
        if (p || l > 1 && typeof a == "string" && !f.checkClone && yf.test(a))
            return this.each(function(i) {
                var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
        if (l &&
        (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h
            .firstChild, h.childNodes.length === 1 && (h = v), v)) {
            for (s = i.map(o(h, "script"), bf), c = s
                    .length;
                e < l;
                e++) u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
            if (c)
                for (y = s[s.length - 1].ownerDocument, i
                        .map(s, kf), e = 0;
                    e < c;
                    e++)
                    u = s[e], ar.test(u.type || "") &&
                        !r.access(u, "globalEval") &&
                        i.contains(y, u) &&
                        (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
        }
        return this
    }
});
i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0;
                r <= o;
                r++
            ) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
si = {};
var wr = /^margin/,
    ci = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
    yt = function(n) { return n.ownerDocument.defaultView.getComputedStyle(n, null) };
(function() {
    function h() {
        t.style
            .cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
        t.innerHTML = "";
        e.appendChild(r);
        var i = n.getComputedStyle(t, null);
        s = i.top !== "1%";
        o = i.width === "4px";
        e.removeChild(r)
    }

    var s, o, e = u.documentElement, r = u.createElement("div"), t = u.createElement("div");
    t.style &&
    (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f
        .clearCloneStyle = t.style.backgroundClip === "content-box", r.style
        .cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(t), n
        .getComputedStyle &&
        i.extend(f,
        {
            pixelPosition: function() { return h(), s },
            boxSizingReliable: function() { return o == null && h(), o },
            reliableMarginRight: function() {
                var f, i = t.appendChild(u.createElement("div"));
                return i.style.cssText = t.style
                    .cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), f
            }
        }))
})();
i.swap = function(n, t, i, r) {
    var f, u, e = {};
    for (u in t) e[u] = n.style[u], n.style[u] = t[u];
    f = i.apply(n, r || []);
    for (u in t) n.style[u] = e[u];
    return f
};
var gf = /^(none|table(?!-c[ea]).+)/,
    ne = new RegExp("^(" + lt + ")(.*)$", "i"),
    te = new RegExp("^([+-])=(" + lt + ")", "i"),
    ie = { position: "absolute", visibility: "hidden", display: "block" },
    kr = { letterSpacing: "0", fontWeight: "400" },
    dr = ["Webkit", "O", "Moz", "ms"];
i.extend({
    cssHooks: {
        opacity: {
            get: function(n, t) {
                if (t) {
                    var i = rt(n, "opacity");
                    return i === "" ? "1" : i
                }
            }
        }
    },
    cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function(n, t, r, u) {
        if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
            var o, h, e, s = i.camelCase(t), c = n.style;
            if (t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], r !== undefined) {
                if (h = typeof r, h === "string" &&
                    (o = te.exec(r)) &&
                    (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), r == null || r !== r) return;
                h !== "number" || i.cssNumber[s] || (r += "px");
                f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit");
                e && "set" in e && (r = e.set(n, r, u)) === undefined || (c[t] = r)
            } else return e && "get" in e && (o = e.get(n, !1, u)) !== undefined ? o : c[t]
        }
    },
    css: function(n, t, r, u) {
        var f, s, e, o = i.camelCase(t);
        return(t = i
                    .cssProps[o] ||
                    (i.cssProps[o] = gr(n.style, o)), e = i
                    .cssHooks[t] ||
                    i
                    .cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = rt(n, t, u)),
                f === "normal" && t in kr && (f = kr[t]), r === "" || r)
            ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f)
            : f
    }
});
i.each(["height", "width"],
    function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return gf.test(i.css(n, "display")) && n.offsetWidth === 0
                        ? i.swap(n, ie, function() { return iu(n, t, u) })
                        : iu(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && yt(n);
                return nu(n, r, u ? tu(n, t, u, i.css(n, "boxSizing", !1, f) === "border-box", f) : 0)
            }
        }
    });
i.cssHooks.marginRight = br(f.reliableMarginRight,
    function(n, t) { if (t) return i.swap(n, { display: "inline-block" }, rt, [n, "marginRight"]) });
i.each({ margin: "", padding: "", border: "Width" },
    function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i];
                    r < 4;
                    r++
                ) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        wr.test(n) || (i.cssHooks[n + t].set = nu)
    });
i.fn.extend({
    css: function(n, t) {
        return l(this,
            function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = yt(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            },
            n,
            t,
            arguments.length > 1)
    },
    show: function() { return ru(this, !0) },
    hide: function() { return ru(this) },
    toggle: function(n) {
        return typeof n == "boolean"
            ? n ? this.show() : this.hide()
            : this.each(function() { it(this) ? i(this).show() : i(this).hide() })
    }
});
i.Tween = s;
s.prototype = {
    constructor: s,
    init: function(n, t, r, u, f, e) {
        this.elem = n;
        this.prop = r;
        this.easing = f || "swing";
        this.options = t;
        this.start = this.now = this.cur();
        this.end = u;
        this.unit = e || (i.cssNumber[r] ? "" : "px")
    },
    cur: function() {
        var n = s.propHooks[this.prop];
        return n && n.get ? n.get(this) : s.propHooks._default.get(this)
    },
    run: function(n) {
        var t, r = s.propHooks[this.prop];
        return this.pos = this.options.duration
            ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration)
            : t = n, this.now = (this
                .end -
                this.start) *
            t +
            this.start, this.options
            .step &&
            this.options.step.call(this
                .elem,
                this.now,
                this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
    }
};
s.prototype.init.prototype = s.prototype;
s.propHooks = {
    _default: {
        get: function(n) {
            var t;
            return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null)
                ? n.elem[n.prop]
                : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
        },
        set: function(n) {
            i.fx.step[n.prop]
                ? i.fx.step[n.prop](n)
                : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop])
                ? i.style(n.elem, n.prop, n.now + n.unit)
                : n.elem[n.prop] = n.now
        }
    }
};
s.propHooks.scrollTop = s.propHooks.scrollLeft = {
    set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) }
};
i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 } };
i.fx = s.prototype.init;
i.fx.step = {};
var nt,
    pt,
    re = /^(?:toggle|show|hide)$/,
    uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
    ue = /queueHooks$/,
    wt = [fe],
    ut = {
        "*": [
            function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    u = uu.exec(t),
                    e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                    r = (i.cssNumber[n] || e !== "px" && +s) && uu.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (r && r[3] !== e) {
                    e = e || r[3];
                    u = u || [];
                    r = +s || 1;
                    do o = o || ".5", r = r / o, i.style(f.elem, n, r + e);
                    while (o !== (o = f.cur() / s) && o !== 1 && --h)
                }
                return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
            }
        ]
    };
i.Animation = i.extend(ou,
{
    tweener: function(n, t) {
        i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
        for (var r, u = 0, f = n.length; u < f; u++) r = n[u], ut[r] = ut[r] || [], ut[r].unshift(t)
    },
    prefilter: function(n, t) { t ? wt.unshift(n) : wt.push(n) }
});
i.speed = function(n, t, r) {
    var u = n && typeof n == "object"
        ? i.extend({}, n)
        : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t };
    return u.duration = i.fx.off
        ? 0
        : typeof u.duration == "number"
        ? u.duration
        : u
        .duration in
        i.fx.speeds
        ? i.fx.speeds[u.duration]
        : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u
        .complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
};
i.fn.extend({
    fadeTo: function(n, t, i, r) {
        return this.filter(it).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r)
    },
    animate: function(n, t, u, f) {
        var s = i.isEmptyObject(n),
            o = i.speed(t, u, f),
            e = function() {
                var t = ou(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
        return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
    },
    stop: function(n, t, u) {
        var f = function(n) {
            var t = n.stop;
            delete n.stop;
            t(u)
        };
        return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this
            .each(function() {
                var s = !0, t = n != null && n + "queueHooks", o = i.timers, e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else for (t in e) e[t] && e[t].stop && ue.test(t) && f(e[t]);
                for (t = o.length; t--;)
                    o[t]
                        .elem ===
                        this &&
                        (n == null || o[t].queue === n) &&
                        (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
    },
    finish: function(n) {
        return n !== !1 && (n = n || "fx"), this.each(function() {
            var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
            for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f
                    .length;
                t--;
            ) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
            for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
            delete e.finish
        })
    }
});
i.each(["toggle", "show", "hide"],
    function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    },
    function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
i.timers = [];
i.fx.tick = function() {
    var r, n = 0, t = i.timers;
    for (nt = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    nt = undefined
};
i.fx.timer = function(n) {
    i.timers.push(n);
    n() ? i.fx.start() : i.timers.pop()
};
i.fx.interval = 13;
i.fx.start = function() { pt || (pt = setInterval(i.fx.tick, i.fx.interval)) };
i.fx.stop = function() {
    clearInterval(pt);
    pt = null
};
i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
i.fn.delay = function(n, t) {
    return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t,
        function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() { clearTimeout(r) }
        })
}, function() {
    var n = u.createElement("input"), t = u.createElement("select"), i = t.appendChild(u.createElement("option"));
    n.type = "checkbox";
    f.checkOn = n.value !== "";
    f.optSelected = i.selected;
    t.disabled = !0;
    f.optDisabled = !i.disabled;
    n = u.createElement("input");
    n.value = "t";
    n.type = "radio";
    f.radioValue = n.value === "t"
}();
tt = i.expr.attrHandle;
i.fn.extend({
    attr: function(n, t) { return l(this, i.attr, n, t, arguments.length > 1) },
    removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) }
});
i.extend({
    attr: function(n, t, r) {
        var u, f, e = n.nodeType;
        if (n && e !== 3 && e !== 8 && e !== 2) {
            if (typeof n.getAttribute === d) return i.prop(n, t, r);
            if (e === 1 && i.isXMLDoc(n) ||
                (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), r !== undefined)
                if (r === null) i.removeAttr(n, t);
                else return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r);
            else
                return u && "get" in u && (f = u.get(n, t)) !== null
                    ? f
                    : (f = i.find.attr(n, t), f == null ? undefined : f)
        }
    },
    removeAttr: function(n, t) {
        var r, u, e = 0, f = t && t.match(c);
        if (f && n.nodeType === 1)
            while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
    },
    attrHooks: {
        type: {
            set: function(n, t) {
                if (!f.radioValue && t === "radio" && i.nodeName(n, "input")) {
                    var r = n.value;
                    return n.setAttribute("type", t), r && (n.value = r), t
                }
            }
        }
    }
});
su = { set: function(n, t, r) { return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
i.each(i.expr.match.bool.source.match(/\w+/g),
    function(n, t) {
        var r = tt[t] || i.find.attr;
        tt[t] = function(n, t, i) {
            var u, f;
            return i || (f = tt[t], tt[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, tt[t] = f), u
        }
    });
hu = /^(?:input|select|textarea|button)$/i;
i.fn.extend({
    prop: function(n, t) { return l(this, i.prop, n, t, arguments.length > 1) },
    removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) }
});
i.extend({
    propFix: { "for": "htmlFor", "class": "className" },
    prop: function(n, t, r) {
        var f, u, o, e = n.nodeType;
        if (n && e !== 3 && e !== 8 && e !== 2)
            return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]),
                r !== undefined
                    ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r
                    : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
    },
    propHooks: {
        tabIndex: {
            get: function(n) { return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1 }
        }
    }
});
f.optSelected ||
(i.propHooks.selected = {
    get: function(n) {
        var t = n.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
    }
});
i.each([
        "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap",
        "frameBorder",
        "contentEditable"
    ],
    function() { i.propFix[this.toLowerCase()] = this });
kt = /[\t\r\n\f]/g;
i.fn.extend({
    addClass: function(n) {
        var o, t, r, u, s, f, h = typeof n == "string" && n, e = 0, l = this.length;
        if (i.isFunction(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, this.className)) });
        if (h)
            for (o = (n || "").match(c) || []; e < l; e++)
                if (t = this[e], r = t.nodeType === 1 &&
                    (t.className ? (" " + t.className + " ").replace(kt, " ") : " "), r) {
                    for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                    f = i.trim(r);
                    t.className !== f && (t.className = f)
                }
        return this
    },
    removeClass: function(n) {
        var o, t, r, u, s, f, h = arguments.length === 0 || typeof n == "string" && n, e = 0, l = this.length;
        if (i.isFunction(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, this.className)) });
        if (h)
            for (o = (n || "").match(c) || []; e < l; e++)
                if (t = this[e], r = t
                    .nodeType ===
                    1 &&
                    (t.className ? (" " + t.className + " ").replace(kt, " ") : ""), r) {
                    for (s = 0; u = o[s++];) while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                    f = n ? i.trim(r) : "";
                    t.className !== f && (t.className = f)
                }
        return this
    },
    toggleClass: function(n, t) {
        var u = typeof n;
        return typeof t == "boolean" && u === "string"
            ? t ? this.addClass(n) : this.removeClass(n)
            : i.isFunction(n)
            ? this.each(function(r) { i(this).toggleClass(n.call(this, r, this.className, t), t) })
            : this.each(function() {
                if (u === "string")
                    for (var t, e = 0, f = i(this), o = n.match(c) || [];
                        t = o[e++
                        ];
                    ) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else
                    (u === d || u === "boolean") &&
                    (this.className && r.set(this, "__className__", this.className), this
                        .className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
            })
    },
    hasClass: function(n) {
        for (var i = " " + n + " ", t = 0, r = this.length;
            t < r;
            t++
        ) if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0) return!0;
        return!1
    }
});
cu = /\r/g;
i.fn.extend({
    val: function(n) {
        var t, r, f, u = this[0];
        return arguments.length
            ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 &&
                (u = f ? n.call(this, r, i(this).val()) : n,
                    u == null
                        ? u = ""
                        : typeof u == "number"
                        ? u += ""
                        : i
                        .isArray(u) &&
                        (u = i
                            .map(u, function(n) { return n == null ? "" : n + "" })), t =
                        i.valHooks[this
                            .type] ||
                        i.valHooks[this.nodeName
                            .toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined ||
                        (this.value = u))
            }))
            : u
            ? (t = i.valHooks[u
                    .type] ||
                i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined)
            ? r
            : (r = u.value, typeof r == "string" ? r.replace(cu, "") : r == null ? "" : r)
            : void 0
    }
});
i.extend({
    valHooks: {
        option: {
            get: function(n) {
                var t = i.find.attr(n, "value");
                return t != null ? t : i.trim(i.text(n))
            }
        },
        select: {
            get: function(n) {
                for (var o,
                    t,
                    s = n.options,
                    r = n.selectedIndex,
                    u = n.type === "select-one" || r < 0,
                    h = u ? null : [],
                    c = u ? r + 1 : s.length,
                    e = r < 0 ? c : u ? r : 0;
                    e < c;
                    e++)
                    if (t = s[e], (t.selected || e === r) &&
                        (f.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) &&
                        (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                        if (o = i(t).val(), u) return o;
                        h.push(o)
                    }
                return h
            },
            set: function(n, t) {
                for (var u,
                    r,
                    f = n.options,
                    e = i
                        .makeArray(t),
                    o = f.length;
                    o--;
                ) r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
                return u || (n.selectedIndex = -1), e
            }
        }
    }
});
i.each(["radio", "checkbox"],
    function() {
        i.valHooks[this] = {
            set: function(n, t) { if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0 }
        };
        f.checkOn || (i.valHooks[this].get = function(n) { return n.getAttribute("value") === null ? "on" : n.value })
    });
i
    .each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } });
i.fn.extend({
    hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) },
    bind: function(n, t, i) { return this.on(n, null, t, i) },
    unbind: function(n, t) { return this.off(n, null, t) },
    delegate: function(n, t, i, r) { return this.on(t, n, i, r) },
    undelegate: function(n, t, i) { return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i) }
});
dt = i.now();
gt = /\?/;
i.parseJSON = function(n) { return JSON.parse(n + "") };
i.parseXML = function(n) {
    var t, r;
    if (!n || typeof n != "string") return null;
    try {
        r = new DOMParser;
        t = r.parseFromString(n, "text/xml")
    } catch (u) {
        t = undefined
    }
    return(!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
};
var b,
    v,
    se = /#.*$/,
    lu = /([?&])_=[^&]*/,
    he = /^(.*?):[ \t]*([^\r\n]*)$/mg,
    ce = /^(?:GET|HEAD)$/,
    le = /^\/\//,
    au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    vu = {},
    li = {},
    yu = "*/".concat("*");
try {
    v = location.href
} catch (ge) {
    v = u.createElement("a");
    v.href = "";
    v = v.href
}
b = au.exec(v.toLowerCase()) || [];
i.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: v,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": yu,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML },
        flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(n, t) { return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n) },
    ajaxPrefilter: pu(vu),
    ajaxTransport: pu(li),
    ajax: function(n, t) {
        function w(n, t, h, c) {
            var v, it, b, y, w, l = t;
            e !== 2 &&
            (e = 2, d && clearTimeout(d), s = undefined, k = c || "", u
                .readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, h && (y = ae(r, u, h)), y =
                ve(r, y, u, v), v
                ? (r.ifModified &&
                    (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u
                        .getResponseHeader("etag"), w && (i.etag[f] = w)),
                    n === 204 || r.type === "HEAD"
                        ? l = "nocontent"
                        : n === 304 ? l = "notmodified" : (l = y.state, it = y.data, b = y.error, v = !b))
                : (b = l, (n || !l) && (l = "error", n < 0 && (n = 0))), u.status = n, u
                .statusText = (t || l) + "", v ? nt.resolveWith(o, [it, l, u]) : nt.rejectWith(o, [u, l, b]), u
                .statusCode(p), p = undefined, a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]), tt
                .fireWith(o, [u, l]), a &&
                (g.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
        }

        typeof n == "object" && (t = n, n = undefined);
        t = t || {};
        var s,
            f,
            k,
            y,
            d,
            h,
            a,
            l,
            r = i.ajaxSetup({}, t),
            o = r.context || r,
            g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
            nt = i.Deferred(),
            tt = i.Callbacks("once memory"),
            p = r.statusCode || {},
            it = {},
            rt = {},
            e = 0,
            ut = "canceled",
            u = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (e === 2) {
                        if (!y) for (y = {}; t = he.exec(k);) y[t[1].toLowerCase()] = t[2];
                        t = y[n.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() { return e === 2 ? k : null },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                },
                overrideMimeType: function(n) { return e || (r.mimeType = n), this },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (e < 2) for (t in n) p[t] = [p[t], n[t]];
                        else u.always(n[u.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ut;
                    return s && s.abort(t), w(0, t), this
                }
            };
        if (nt.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || v) + "")
                .replace(se, "").replace(le, b[1] + "//"), r.type = t.method || t.type || r.method || r.type, r
                .dataTypes = i.trim(r.dataType || "*").toLowerCase()
                .match(c) ||
                [""], r.crossDomain == null &&
            (h = au.exec(r.url.toLowerCase()), r
                .crossDomain = !!(h &&
                (h[1] !== b[1] ||
                    h[2] !== b[2] ||
                    (h[3] || (h[1] === "http:" ? "80" : "443")) !== (b[3] || (b[1] === "http:" ? "80" : "443"))))),
            r
                .data &&
                r.processData &&
                typeof r.data != "string" &&
                (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), e === 2) return u;
        a = r.global;
        a && i.active++ == 0 && i.event.trigger("ajaxStart");
        r.type = r.type.toUpperCase();
        r.hasContent = !ce.test(r.type);
        f = r.url;
        r.hasContent ||
        (r
            .data &&
            (f = r.url += (gt.test(f) ? "&" : "?") + r.data, delete r
                .data), r.cache === !1 &&
            (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
        r.ifModified &&
        (i
                .lastModified[f] &&
                u
                .setRequestHeader("If-Modified-Since", i.lastModified[f]),
            i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
        (r.data && r.hasContent && r.contentType !== !1 || t.contentType) &&
            u.setRequestHeader("Content-Type", r.contentType);
        u.setRequestHeader("Accept",
            r.dataTypes[0] && r.accepts[r.dataTypes[0]]
            ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + yu + "; q=0.01" : "")
            : r.accepts["*"]);
        for (l in r.headers) u.setRequestHeader(l, r.headers[l]);
        if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2)) return u.abort();
        ut = "abort";
        for (l in{ success: 1, error: 1, complete: 1 }) u[l](r[l]);
        if (s = wu(li, r, t, u), s) {
            u.readyState = 1;
            a && g.trigger("ajaxSend", [u, r]);
            r.async && r.timeout > 0 && (d = setTimeout(function() { u.abort("timeout") }, r.timeout));
            try {
                e = 1;
                s.send(it, w)
            } catch (ft) {
                if (e < 2) w(-1, ft);
                else throw ft;
            }
        } else w(-1, "No Transport");
        return u
    },
    getJSON: function(n, t, r) { return i.get(n, t, r, "json") },
    getScript: function(n, t) { return i.get(n, undefined, t, "script") }
});
i.each(["get", "post"],
    function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i
                .ajax({ url: n, type: t, dataType: f, data: r, success: u })
        }
    });
i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } });
i._evalUrl = function(n) {
    return i.ajax({ url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 })
};
i.fn.extend({
    wrapAll: function(n) {
        var t;
        return i.isFunction(n)
            ? this.each(function(t) { i(this).wrapAll(n.call(this, t)) })
            : (this[0] &&
            (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t
                .map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this)
    },
    wrapInner: function(n) {
        return i.isFunction(n)
            ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) })
            : this.each(function() {
                var t = i(this), r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
    },
    wrap: function(n) {
        var t = i.isFunction(n);
        return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) })
    },
    unwrap: function() {
        return this.parent().each(function() { i.nodeName(this, "body") || i(this).replaceWith(this.childNodes) }).end()
    }
});
i.expr.filters.hidden = function(n) { return n.offsetWidth <= 0 && n.offsetHeight <= 0 };
i.expr.filters.visible = function(n) { return!i.expr.filters.hidden(n) };
var ye = /%20/g,
    pe = /\[\]$/,
    bu = /\r?\n/g,
    we = /^(?:submit|button|image|reset|file)$/i,
    be = /^(?:input|select|textarea|keygen)/i;
i.param = function(n, t) {
    var r,
        u = [],
        f = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
    if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { f(this.name, this.value) });
    else for (r in n) vi(r, n[r], t, f);
    return u.join("&").replace(ye, "+")
};
i.fn.extend({
    serialize: function() { return i.param(this.serializeArray()) },
    serializeArray: function() {
        return this.map(function() {
            var n = i.prop(this, "elements");
            return n ? i.makeArray(n) : this
        }).filter(function() {
            var n = this.type;
            return this.name &&
                !i(this).is(":disabled") &&
                be.test(this.nodeName) &&
                !we.test(n) &&
                (this.checked || !er.test(n))
        }).map(function(n, t) {
            var r = i(this).val();
            return r == null
                ? null
                : i.isArray(r)
                ? i.map(r, function(n) { return{ name: t.name, value: n.replace(bu, "\r\n") } })
                : { name: t.name, value: r.replace(bu, "\r\n") }
        }).get()
    }
});
i.ajaxSettings.xhr = function() {
    try {
        return new XMLHttpRequest
    } catch (n) {
    }
};
var ke = 0, ni = {}, de = { 0: 200, 1223: 204 }, ft = i.ajaxSettings.xhr();
if (n.ActiveXObject) i(n).on("unload", function() { for (var n in ni) ni[n]() });
return f.cors = !!ft && "withCredentials" in ft, f.ajax = ft = !!ft, i.ajaxTransport(function(n) {
    var t;
    if (f.cors || ft && !n.crossDomain)
        return{
            send: function(i, r) {
                var f, u = n.xhr(), e = ++ke;
                if (u.open(n.type, n.url, n.async, n.username, n.password), n
                    .xhrFields) for (f in n.xhrFields) u[f] = n.xhrFields[f];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (f in i) u.setRequestHeader(f, i[f]);
                t = function(n) {
                    return function() {
                        t &&
                        (delete ni[e], t = u.onload = u
                            .onerror = null, n === "abort"
                            ? u.abort()
                            : n === "error"
                            ? r(u.status, u.statusText)
                            : r(de[u.status] || u.status,
                                u.statusText,
                                typeof u.responseText == "string" ? { text: u.responseText } : undefined,
                                u.getAllResponseHeaders()))
                    }
                };
                u.onload = t();
                u.onerror = t("error");
                t = ni[e] = t("abort");
                try {
                    u.send(n.hasContent && n.data || null)
                } catch (o) {
                    if (t) throw o;
                }
            },
            abort: function() { t && t() }
        }
}), i.ajaxSetup({
    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
    contents: { script: /(?:java|ecma)script/ },
    converters: { "text script": function(n) { return i.globalEval(n), n } }
}), i.ajaxPrefilter("script",
    function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script",
    function(n) {
        if (n.crossDomain) {
            var r, t;
            return{
                send: function(f, e) {
                    r = i("<script>").prop({ async: !0, charset: n.scriptCharset, src: n.url }).on("load error",
                        t = function(n) {
                            r.remove();
                            t = null;
                            n && e(n.type === "error" ? 404 : 200, n.type)
                        });
                    u.head.appendChild(r[0])
                },
                abort: function() { t && t() }
            }
        }
    }), yi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var n = yi.pop() || i.expando + "_" + dt++;
        return this[n] = !0, n
    }
}), i.ajaxPrefilter("json jsonp",
    function(t, r, u) {
        var f,
            o,
            e,
            s = t.jsonp !== !1 &&
            (ti.test(t.url)
                ? "url"
                : typeof t.data == "string" &&
                !(t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                ti.test(t.data) &&
                "data");
        if (s || t.dataTypes[0] === "jsonp")
            return f = t.jsonpCallback = i.isFunction(t
                    .jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback, s
                ? t[s] = t[s].replace(ti, "$1" + f)
                : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t
                .converters["script json"] = function() { return e || i.error(f + " was not called"), e[0] }, t
                .dataTypes[0] = "json", o = n[f], n[f] = function() { e = arguments }, u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = undefined
            }), "script"
    }), i.parseHTML = function(n, t, r) {
    if (!n || typeof n != "string") return null;
    typeof t == "boolean" && (r = t, t = !1);
    t = t || u;
    var f = gi.exec(n), e = !r && [];
    return f
        ? [t.createElement(f[1])]
        : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
}, pi = i.fn.load, i.fn.load = function(n, t, r) {
    if (typeof n != "string" && pi) return pi.apply(this, arguments);
    var u, o, s, f = this, e = n.indexOf(" ");
    return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)),
        i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 &&
            i.ajax({ url: n, type: o, dataType: "html", data: t }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).complete(r && function(n, t) { f.each(r, s || [n.responseText, t, n]) }), this
}, i.expr.filters.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, wi = n
    .document.documentElement, i.offset = {
    setOffset: function(n, t, r) {
        var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
        l === "static" && (n.style.position = "relative");
        u = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
        v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
        i.isFunction(t) && (t = t.call(n, r, u));
        t.top != null && (f.top = t.top - u.top + h);
        t.left != null && (f.left = t.left - u.left + o);
        "using" in t ? t.using.call(n, f) : a.css(f)
    }
}, i.fn.extend({
    offset: function(n) {
        if (arguments.length) return n === undefined ? this : this.each(function(t) { i.offset.setOffset(this, n, t) });
        var r, f, t = this[0], u = { top: 0, left: 0 }, e = t && t.ownerDocument;
        if (e)
            return(r = e.documentElement, !i.contains(r, t))
                ? u
                : (typeof t
                        .getBoundingClientRect !==
                        d &&
                        (u = t
                            .getBoundingClientRect()), f = ku(e),
                    { top: u.top + f.pageYOffset - r.clientTop, left: u.left + f.pageXOffset - r.clientLeft })
    },
    position: function() {
        if (this[0]) {
            var n, r, u = this[0], t = { top: 0, left: 0 };
            return i.css(u, "position") === "fixed"
                ? r = u.getBoundingClientRect()
                : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i
                    .css(n[0], "borderTopWidth", !0), t.left += i
                    .css(n[0], "borderLeftWidth", !0)), {
                top: r.top - t.top - i.css(u, "marginTop", !0),
                left: r.left - t.left - i.css(u, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var n = this
                    .offsetParent ||
                    wi;
                n && !i.nodeName(n, "html") && i.css(n, "position") === "static";
            ) n = n.offsetParent;
            return n || wi
        })
    }
}), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
    function(t, r) {
        var u = "pageYOffset" === r;
        i.fn[t] = function(i) {
            return l(this,
                function(t, i, f) {
                    var e = ku(t);
                    if (f === undefined) return e ? e[r] : t[i];
                    e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f
                },
                t,
                i,
                arguments.length,
                null)
        }
    }), i.each(["top", "left"],
    function(n, t) {
        i.cssHooks[t] = br(f.pixelPosition,
            function(n, r) { if (r) return r = rt(n, t), ci.test(r) ? i(n).position()[t] + "px" : r })
    }), i.each({ Height: "height", Width: "width" },
    function(n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n },
            function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || typeof u != "boolean"),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return l(this,
                        function(t, r, u) {
                            var f;
                            return i.isWindow(t)
                                ? t.document.documentElement["client" + n]
                                : t.nodeType === 9
                                ? (f = t.documentElement, Math.max(t.body["scroll" + n],
                                    f["scroll" + n],
                                    t.body["offset" + n],
                                    f["offset" + n],
                                    f["client" + n]))
                                : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                        },
                        t,
                        e ? u : undefined,
                        e,
                        null)
                }
            })
    }), i.fn.size = function() { return this.length }, i.fn.andSelf = i.fn
    .addBack, typeof define == "function" && define.amd && define("jquery", [], function() { return i }), du = n
    .jQuery, gu = n.$, i.noConflict = function(t) {
    return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
}, typeof t === d && (n.jQuery = n.$ = i), i})
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/jquery-2.1.1.js.srcmap