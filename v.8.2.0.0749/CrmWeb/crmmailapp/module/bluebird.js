/* 
This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise. 

Bluebird 2.9.6
Copyright (c) 2014 Petka Antonov

 Provided for Informational Purposes Only
MIT License 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/**
 * bluebird build version 2.9.6
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, progress, cancel, using, filter, any, each, timers
*/

!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window
            ? e = window
            : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Promise = t()
    }
}(function() {
    var t, e, r;
    return function n(t, e, r) {
        function i(s, a) {
            if (!e[s]) {
                if (!t[s]) {
                    var u = "function" == typeof _dereq_ && _dereq_;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var l = e[s] = { exports: {} };
                t[s][0].call(l.exports,
                    function(e) {
                        var r = t[s][1][e];
                        return i(r ? r : e)
                    },
                    l,
                    l.exports,
                    n,
                    t,
                    e,
                    r)
            }
            return e[s].exports
        }

        for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
            1: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) {
                            var e = new r(t), n = e.promise();
                            return e.setHowMany(1), e.setUnwrap(), e.init(), n
                        }

                        var r = t._SomePromiseArray;
                        t.any = function(t) { return e(t) }, t.prototype.any = function() { return e(this) }
                    }
                }, {}
            ],
            2: [
                function(t, e) {
                    "use strict";

                    function r() {
                        this._isTickUsed = !1, this._lateQueue = new s(16), this._normalQueue = new s(16);
                        var t = this;
                        this.drainQueues = function() { t._drainQueues() }, this
                            ._schedule = o.isStatic ? o(this.drainQueues) : o
                    }

                    var n;
                    try {
                        throw new Error
                    } catch (i) {
                        n = i
                    }
                    var o = t("./schedule.js"),
                        s = t("./queue.js"),
                        a = "undefined" != typeof process ? process : void 0;
                    r.prototype.haveItemsQueued = function() { return this._normalQueue.length() > 0 }, r.prototype
                        ._withDomain = function(t) {
                            return void 0 === a || null == a.domain || t.domain || (t = a.domain.bind(t)), t
                        }, r.prototype.throwLater = function(t, e) {
                        if (1 === arguments.length && (e = t, t = function() { throw e }), t = this
                            ._withDomain(t), "undefined" != typeof setTimeout) setTimeout(function() { t(e) }, 0);
                        else
                            try {
                                this._schedule(function() { t(e) })
                            } catch (r) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                            }
                    }, r.prototype.invokeLater = function(t, e, r) {
                        t = this._withDomain(t), this._lateQueue.push(t, e, r), this._queueTick()
                    }, r.prototype.invokeFirst = function(t, e, r) {
                        t = this._withDomain(t), this._normalQueue.unshift(t, e, r), this._queueTick()
                    }, r.prototype.invoke = function(t, e, r) {
                        t = this._withDomain(t), this._normalQueue.push(t, e, r), this._queueTick()
                    }, r.prototype.settlePromises = function(t) { this._normalQueue._pushOne(t), this._queueTick() }, r
                        .prototype._drainQueue = function(t) {
                            for (; t.length() > 0;) {
                                var e = t.shift();
                                if ("function" == typeof e) {
                                    var r = t.shift(), n = t.shift();
                                    e.call(r, n)
                                } else e._settlePromises()
                            }
                        }, r.prototype._drainQueues = function() {
                        this._drainQueue(this._normalQueue), this._reset(), this._drainQueue(this._lateQueue)
                    }, r.prototype._queueTick = function() {
                        this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                    }, r.prototype._reset = function() { this._isTickUsed = !1 }, e.exports = new r, e.exports
                        .firstLineError = n
                }, { "./queue.js": 28, "./schedule.js": 31 }
            ],
            3: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e, r) {
                        function n() { return this.value }

                        function i() { throw this.reason }

                        function o(t) { return this._then(n, null, null, { value: t }, void 0) }

                        function s(t) { return this._then(i, i, null, { reason: t }, void 0) }

                        function a(t) { this._setBoundTo(t) }

                        t.prototype.bind = function(e) {
                            var n = r(e);
                            if (n instanceof t) {
                                if (!n.isFulfilled()) {
                                    if (n.isRejected()) return t.reject(n.reason());
                                    var i = this.then(), u = i;
                                    return i = i._then(o, s, null, n, void 0), n
                                            ._then(a, i._reject, null, i, null),
                                        i._cancellable() || i._setPendingCancellationParent(u), i
                                }
                                e = n.value()
                            }
                            var i = this.then();
                            return i._setBoundTo(e), i
                        }, t.bind = function(e, r) { return t.resolve(r).bind(e) }, t.prototype
                            ._setPendingCancellationParent = function(t) { this._settledValue = t }, t.prototype
                            ._pendingCancellationParent = function() {
                                if (this.isPending() && void 0 !== this._settledValue) {
                                    var t = this._settledValue;
                                    return t.cancellable(), this._settledValue = void 0, t
                                }
                            }, t.prototype
                            ._setIsMigratingBinding = function() { this._bitField = 8388608 | this._bitField }, t
                            .prototype
                            ._unsetIsMigratingBinding = function() { this._bitField = -8388609 & this._bitField }, t
                            .prototype
                            ._isMigratingBinding = function() { return 8388608 === (8388608 & this._bitField) }, t
                            .prototype._setBoundTo = function(t) { this._boundTo = t }, t.prototype
                            ._isBound = function() { return void 0 !== this._boundTo }
                    }
                }, {}
            ],
            4: [
                function(t, e) {
                    "use strict";

                    function r() {
                        try {
                            Promise === i && (Promise = n)
                        } catch (t) {
                        }
                        return i
                    }

                    var n;
                    "undefined" != typeof Promise && (n = Promise);
                    var i = t("./promise.js")();
                    i.noConflict = r, e.exports = i
                }, { "./promise.js": 23 }
            ],
            5: [
                function(t, e) {
                    "use strict";
                    var r = Object.create;
                    if (r) {
                        var n = r(null), i = r(null);
                        n[" size"] = i[" size"] = 0
                    }
                    e.exports = function(e) {
                        function r(t, r) {
                            var n;
                            if (null != t && (n = t[r]), "function" != typeof n) {
                                var i = "Object " + a.classString(t) + " has no method '" + a.toString(r) + "'";
                                throw new e.TypeError(i)
                            }
                            return n
                        }

                        function n(t) {
                            var e = this.pop(), n = r(t, e);
                            return n.apply(t, this)
                        }

                        function i(t) { return t[this] }

                        function o(t) {
                            var e = +this;
                            return 0 > e && (e = Math.max(0, e + t.length)), t[e]
                        }

                        {
                            var s, a = t("./util.js"), u = a.canEvaluate;
                            a.isIdentifier
                        }
                        e.prototype.call = function(t) {
                            for (var e = arguments
                                         .length,
                            r = new Array(e - 1),
                            i = 1;
                            e > i;
                            ++i) r[i - 1] = arguments[i];
                            return r.push(t), this._then(n, void 0, void 0, r, void 0)
                        }, e.prototype.get = function(t) {
                            var e, r = "number" == typeof t;
                            if (r) e = o;
                            else if (u) {
                                var n = s(t);
                                e = null !== n ? n : i
                            } else e = i;
                            return this._then(e, void 0, void 0, t, void 0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            6: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        var r = t("./errors.js"), n = t("./async.js"), i = r.CancellationError;
                        e.prototype._cancel = function(t) {
                            if (!this.isCancellable()) return this;
                            for (var e, r = this; void 0 !== (e = r._cancellationParent) && e.isCancellable();) r = e;
                            this._unsetCancellable(), r._target()._rejectCallback(t, !1, !0)
                        }, e.prototype.cancel = function(t) {
                            return this.isCancellable()
                                ? (void 0 === t && (t = new i), n.invokeLater(this._cancel, this, t), this)
                                : this
                        }, e.prototype.cancellable = function() {
                            return this._cancellable()
                                ? this
                                : (this._setCancellable(), this._cancellationParent = this
                                    ._pendingCancellationParent(), this)
                        }, e.prototype.uncancellable = function() {
                            var t = this.then();
                            return t._unsetCancellable(), t
                        }, e.prototype.fork = function(t, e, r) {
                            var n = this._then(t, e, r, void 0, void 0);
                            return n._setCancellable(), n._cancellationParent = void 0, n
                        }
                    }
                }, { "./async.js": 2, "./errors.js": 13 }
            ],
            7: [
                function(t, e) {
                    "use strict";
                    e.exports = function() {
                        function e(t) {
                            this._parent = t;
                            var r = this._length = 1 + (void 0 === t ? 0 : t._length);
                            m(this, e), r > 32 && this.uncycle()
                        }

                        function r(t, e) {
                            for (var r = 0;
                                r < e.length - 1;
                                ++r
                            ) e[r].push("From previous event:"), e[r] = e[r].join("\n");
                            return r < e.length && (e[r] = e[r].join("\n")), t + "\n" + e.join("\n")
                        }

                        function n(t) {
                            for (var e = 0; e < t.length; ++e)
                                (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) &&
                                    (t.splice(e, 1), e--)
                        }

                        function i(t) {
                            for (var e = t[0], r = 1; r < t.length; ++r) {
                                for (var n = t[r], i = e.length - 1, o = e[i], s = -1, a = n.length - 1; a >= 0; --a)
                                    if (n[a] === o) {
                                        s = a;
                                        break
                                    }
                                for (var a = s; a >= 0; --a) {
                                    var u = n[a];
                                    if (e[i] !== u) break;
                                    e.pop(), i--
                                }
                                e = n
                            }
                        }

                        function o(t) {
                            for (var e = [], r = 0; r < t.length; ++r) {
                                var n = t[r], i = f.test(n) || "    (No stack trace)" === n, o = i && v(n);
                                i && !o && (d && " " !== n.charAt(0) && (n = "    " + n), e.push(n))
                            }
                            return e
                        }

                        function s(t) {
                            for (var e = t.stack.replace(/\s+$/g, "").split("\n"), r = 0; r < e.length; ++r) {
                                var n = e[r];
                                if ("    (No stack trace)" === n || f.test(n)) break
                            }
                            return r > 0 && (e = e.slice(r)), e
                        }

                        function a(t) {
                            var e;
                            if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                            else {
                                e = t.toString();
                                var r = /\[object [a-zA-Z0-9$_]+\]/;
                                if (r.test(e))
                                    try {
                                        var n = JSON.stringify(t);
                                        e = n
                                    } catch (i) {
                                    }
                                0 === e.length && (e = "(empty array)")
                            }
                            return"(<" + u(e) + ">, no stack trace)"
                        }

                        function u(t) {
                            var e = 41;
                            return t.length < e ? t : t.substr(0, e - 3) + "..."
                        }

                        function c(t) {
                            var e = t.match(y);
                            return e ? { fileName: e[1], line: parseInt(e[2], 10) } : void 0
                        }

                        var l = t("./async.js"),
                            h = t("./util.js"),
                            p = /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
                            f = null,
                            _ = null,
                            d = !1;
                        h.inherits(e, Error), e.prototype.uncycle = function() {
                            var t = this._length;
                            if (!(2 > t)) {
                                for (var e = [], r = {}, n = 0, i = this; void 0 !== i; ++n) e.push(i), i = i._parent;
                                t = this._length = n;
                                for (var n = t - 1; n >= 0; --n) {
                                    var o = e[n].stack;
                                    void 0 === r[o] && (r[o] = n)
                                }
                                for (var n = 0; t > n; ++n) {
                                    var s = e[n].stack, a = r[s];
                                    if (void 0 !== a && a !== n) {
                                        a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[n]
                                            ._parent = void 0, e[n]._length = 1;
                                        var u = n > 0 ? e[n - 1] : this;
                                        t - 1 > a
                                            ? (u._parent = e[a + 1], u._parent.uncycle(), u
                                                ._length = u._parent._length + 1)
                                            : (u._parent = void 0, u._length = 1);
                                        for (var c = u._length + 1, l = n - 2; l >= 0; --l) e[l]._length = c, c++;
                                        return
                                    }
                                }
                            }
                        }, e.prototype.parent = function() { return this._parent }, e.prototype
                            .hasParent = function() { return void 0 !== this._parent }, e.prototype
                            .attachExtraTrace = function(t) {
                                if (!t.__stackCleaned__) {
                                    this.uncycle();
                                    for (var s = e.parseStackAndMessage(t), a = s.message, u = [s.stack], c = this;
                                        void 0 !== c;
                                    ) u.push(o(c.stack.split("\n"))), c = c._parent;
                                    i(u), n(u), t.stack = r(a, u), t.__stackCleaned__ = !0
                                }
                            }, e.parseStackAndMessage = function(t) {
                            var e = t.stack, r = t.toString();
                            return e = "string" == typeof e && e.length > 0 ? s(t) : ["    (No stack trace)"],
                                { message: r, stack: o(e) }
                        }, e.formatAndLogError = function(t, e) {
                            if ("object" == typeof console) {
                                var r;
                                if ("object" == typeof t || "function" == typeof t) {
                                    var n = t.stack;
                                    r = e + _(n, t)
                                } else r = e + String(t);
                                "function" == typeof console.warn || "object" == typeof console.warn
                                    ? console.warn(r)
                                    : ("function" == typeof console.log || "object" == typeof console.log) &&
                                    console.log(r)
                            }
                        }, e.unhandledRejection = function(t) {
                            e.formatAndLogError(t, "^--- With additional stack trace: ")
                        }, e.isSupported = function() { return"function" == typeof m }, e
                            .fireRejectionEvent = function(t, r, n, i) {
                                var o = !1;
                                try {
                                    "function" == typeof r && (o = !0, "rejectionHandled" === t ? r(i) : r(n, i))
                                } catch (s) {
                                    l.throwLater(s)
                                }
                                var a = !1;
                                try {
                                    a = j(t, n, i)
                                } catch (s) {
                                    a = !0, l.throwLater(s)
                                }
                                var u = !1;
                                if (g)
                                    try {
                                        u = g(t.toLowerCase(), { reason: n, promise: i })
                                    } catch (s) {
                                        u = !0, l.throwLater(s)
                                    }
                                a ||
                                    o ||
                                    u ||
                                    "unhandledRejection" !== t ||
                                    e.formatAndLogError(n, "Possibly unhandled ")
                            };
                        var v = function() { return!1 }, y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        e.setBounds = function(t, r) {
                            if (e.isSupported()) {
                                for (var n, i, o = t.stack.split("\n"), s = r.stack.split("\n"), a = -1, u = -1, l = 0;
                                    l < o.length;
                                    ++l) {
                                    var h = c(o[l]);
                                    if (h) {
                                        n = h.fileName, a = h.line;
                                        break
                                    }
                                }
                                for (var l = 0; l < s.length; ++l) {
                                    var h = c(s[l]);
                                    if (h) {
                                        i = h.fileName, u = h.line;
                                        break
                                    }
                                }
                                0 > a ||
                                    0 > u ||
                                    !n ||
                                    !i ||
                                    n !== i ||
                                    a >= u ||
                                    (v = function(t) {
                                        if (p.test(t)) return!0;
                                        var e = c(t);
                                        return e && e.fileName === n && a <= e.line && e.line <= u ? !0 : !1
                                    })
                            }
                        };
                        var g,
                            m = function() {
                                var t = /^\s*at\s*/,
                                    e = function(t, e) {
                                        return"string" == typeof t
                                            ? t
                                            : void 0 !== e.name && void 0 !== e.message ? e.toString() : a(e)
                                    };
                                if ("number" == typeof Error.stackTraceLimit &&
                                    "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6, f = t, _ = e;
                                    var r = Error.captureStackTrace;
                                    return v = function(t) { return p.test(t) },
                                        function(t, e) {
                                            Error.stackTraceLimit = Error.stackTraceLimit + 6, r(t, e), Error
                                                .stackTraceLimit = Error.stackTraceLimit - 6
                                        }
                                }
                                var n = new Error;
                                if ("string" == typeof n.stack && n.stack.split("\n")[0].indexOf("stackDetection@") >= 0
                                ) return f = /@/, _ = e, d = !0, function(t) { t.stack = (new Error).stack };
                                var i;
                                try {
                                    throw new Error
                                } catch (o) {
                                    i = "stack" in o
                                }
                                return"stack" in n || !i
                                    ? (_ = function(t, e) {
                                        return"string" == typeof t
                                            ? t
                                            : "object" != typeof e && "function" != typeof e ||
                                            void 0 === e.name ||
                                            void 0 === e.message
                                            ? a(e)
                                            : e.toString()
                                    }, null)
                                    : (f = t, _ = e, function(t) {
                                        Error.stackTraceLimit = Error.stackTraceLimit + 6;
                                        try {
                                            throw new Error
                                        } catch (e) {
                                            t.stack = e.stack
                                        }
                                        Error.stackTraceLimit = Error.stackTraceLimit - 6
                                    })
                            }([]),
                            j = function() {
                                if (h.isNode)
                                    return function(t, e, r) {
                                        return"rejectionHandled" === t ? process.emit(t, r) : process.emit(t, e, r)
                                    };
                                var t = !1, e = !0;
                                try {
                                    var r = new self.CustomEvent("test");
                                    t = r instanceof CustomEvent
                                } catch (n) {
                                }
                                if (!t)
                                    try {
                                        var i = document.createEvent("CustomEvent");
                                        i.initCustomEvent("testingtheevent", !1, !0, {}), self.dispatchEvent(i)
                                    } catch (n) {
                                        e = !1
                                    }
                                e &&
                                (g = function(e, r) {
                                    var n;
                                    return t
                                        ? n = new self.CustomEvent(e, { detail: r, bubbles: !1, cancelable: !0 })
                                        : self.dispatchEvent &&
                                        (n = document.createEvent("CustomEvent"), n
                                            .initCustomEvent(e, !1, !0, r)), n ? !self.dispatchEvent(n) : !1
                                });
                                var o = {};
                                return o.unhandledRejection = "onunhandledRejection".toLowerCase(), o
                                    .rejectionHandled = "onrejectionHandled".toLowerCase(), function(t, e, r) {
                                    var n = o[t], i = self[n];
                                    return i
                                        ? ("rejectionHandled" === t ? i.call(self, r) : i.call(self, e, r), !0)
                                        : !1
                                }
                            }();
                        return e
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            8: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        function r(t, e, r) { this._instances = t, this._callback = e, this._promise = r }

                        function n(t, e) {
                            var r = {}, n = s(t).call(r, e);
                            if (n === a) return n;
                            var i = u(r);
                            return i.length
                                ? (a
                                    .e = new
                                    c("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"), a)
                                : n
                        }

                        var i = t("./util.js"),
                            o = t("./errors.js"),
                            s = i.tryCatch,
                            a = i.errorObj,
                            u = t("./es5.js").keys,
                            c = o.TypeError;
                        return r.prototype.doFilter = function(t) {
                            for (var r = this._callback,
                                i = this._promise,
                                o = i._boundTo,
                                u = 0,
                                c = this._instances.length;
                                c > u;
                                ++u) {
                                var l = this
                                        ._instances[u],
                                h = l === Error || null != l && l.prototype instanceof Error;
                                if (h && t instanceof l) {
                                    var p = s(r).call(o, t);
                                    return p === a ? (e.e = p.e, e) : p
                                }
                                if ("function" == typeof l && !h) {
                                    var f = n(l, t);
                                    if (f === a) {
                                        t = a.e;
                                        break
                                    }
                                    if (f) {
                                        var p = s(r).call(o, t);
                                        return p === a ? (e.e = p.e, e) : p
                                    }
                                }
                            }
                            return e.e = t, e
                        }, r
                    }
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }
            ],
            9: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e, r) {
                        function n() { this._trace = new e(o()) }

                        function i() { return r() ? new n : void 0 }

                        function o() {
                            var t = s.length - 1;
                            return t >= 0 ? s[t] : void 0
                        }

                        var s = [];
                        return n.prototype._pushContext = function() {
                            r() && void 0 !== this._trace && s.push(this._trace)
                        }, n.prototype._popContext = function() { r() && void 0 !== this._trace && s.pop() }, t
                            .prototype
                            ._peekContext = o, t.prototype._pushContext = n.prototype._pushContext, t.prototype
                            ._popContext = n.prototype._popContext, i
                    }
                }, {}
            ],
            10: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        var n,
                            i,
                            o = t("./async.js"),
                            s = t("./errors.js").Warning,
                            a = t("./util.js"),
                            u = a.canAttachTrace,
                            c = !1 ||
                                a.isNode && (!!process.env.BLUEBIRD_DEBUG || "development" === process.env.NODE_ENV);
                        return e.prototype
                                ._ensurePossibleRejectionHandled = function() {
                                    this._setRejectionIsUnhandled(), o
                                        .invokeLater(this._notifyUnhandledRejection, this, void 0)
                                }, e.prototype
                                ._notifyUnhandledRejectionIsHandled =
                                function() { r.fireRejectionEvent("rejectionHandled", n, void 0, this) }, e.prototype
                                ._notifyUnhandledRejection = function() {
                                    if (this._isRejectionUnhandled()) {
                                        var t = this._getCarriedStackTrace() || this._settledValue;
                                        this._setUnhandledRejectionIsNotified(), r
                                            .fireRejectionEvent("unhandledRejection", i, t, this)
                                    }
                                }, e.prototype
                                ._setUnhandledRejectionIsNotified =
                                function() { this._bitField = 524288 | this._bitField }, e
                                .prototype
                                ._unsetUnhandledRejectionIsNotified =
                                function() { this._bitField = -524289 & this._bitField },
                            e.prototype
                                ._isUnhandledRejectionNotified = function() { return(524288 & this._bitField) > 0 }, e
                                .prototype
                                ._setRejectionIsUnhandled = function() { this._bitField = 2097152 | this._bitField }, e
                                .prototype
                                ._unsetRejectionIsUnhandled = function() {
                                    this
                                            ._bitField = -2097153 & this._bitField,
                                        this._isUnhandledRejectionNotified() &&
                                        (this._unsetUnhandledRejectionIsNotified(), this
                                            ._notifyUnhandledRejectionIsHandled())
                                }, e.prototype
                                ._isRejectionUnhandled = function() { return(2097152 & this._bitField) > 0 }, e
                                .prototype._setCarriedStackTrace = function(t) {
                                    this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = t
                                }, e.prototype
                                ._isCarryingStackTrace = function() { return(1048576 & this._bitField) > 0 }, e
                                .prototype._getCarriedStackTrace = function() {
                                    return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0
                                }, e.prototype
                                ._captureStackTrace = function() {
                                    return c && (this._trace = new r(this._peekContext())), this
                                }, e.prototype._attachExtraTrace = function(t, e) {
                                if (c && u(t)) {
                                    var n = this._trace;
                                    if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                                    else if (!t.__stackCleaned__) {
                                        var i = r.parseStackAndMessage(t);
                                        t.stack = i.stack.join("\n"), t.__stackCleaned__ = !0
                                    }
                                }
                            }, e.prototype._warn = function(t) {
                                var e = new s(t), n = this._peekContext();
                                if (n) n.attachExtraTrace(e);
                                else {
                                    var i = r.parseStackAndMessage(e);
                                    e.stack = i.message + "\n" + i.stack.join("\n")
                                }
                                r.formatAndLogError(e, "")
                            }, e
                                .onPossiblyUnhandledRejection = function(t) { i = "function" == typeof t ? t : void 0 },
                            e
                                .onUnhandledRejectionHandled = function(t) { n = "function" == typeof t ? t : void 0 },
                            e
                                .longStackTraces = function() {
                                    if (o
                                        .haveItemsQueued() &&
                                        c === !1)
                                        throw new
                                            Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");
                                    c = r.isSupported()
                                }, e
                                .hasLongStackTraces = function() { return c && r.isSupported() },
                            r.isSupported() || (e.longStackTraces = function() {}, c = !1), function() { return c }
                    }
                }, { "./async.js": 2, "./errors.js": 13, "./util.js": 38 }
            ],
            11: [
                function(t, e) {
                    "use strict";
                    var r = t("./util.js"), n = r.isPrimitive, i = r.wrapsPrimitiveReceiver;
                    e.exports = function(t) {
                        var e = function() { return this },
                            r = function() { throw this },
                            o = function(t, e) {
                                return 1 === e ? function() { throw t } : 2 === e ? function() { return t } : void 0
                            };
                        t.prototype["return"] = t.prototype
                            .thenReturn = function(t) {
                                return i && n(t)
                                    ? this._then(o(t, 2), void 0, void 0, void 0, void 0)
                                    : this._then(e, void 0, void 0, t, void 0)
                            }, t.prototype["throw"] = t.prototype
                            .thenThrow = function(t) {
                                return i && n(t)
                                    ? this._then(o(t, 1), void 0, void 0, void 0, void 0)
                                    : this._then(r, void 0, void 0, t, void 0)
                            }
                    }
                }, { "./util.js": 38 }
            ],
            12: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e) {
                        var r = t.reduce;
                        t.prototype.each = function(t) { return r(this, t, null, e) }, t
                            .each = function(t, n) { return r(t, n, null, e) }
                    }
                }, {}
            ],
            13: [
                function(t, e) {
                    "use strict";

                    function r(t, e) {
                        function r(n) {
                            return this instanceof r
                                ? (c(this, "message", "string" == typeof n ? n : e), c(this, "name", t), void(
                                    Error.captureStackTrace
                                        ? Error.captureStackTrace(this, this.constructor)
                                        : Error.call(this)))
                                : new r(n)
                        }

                        return u(r, Error), r
                    }

                    function n(t) {
                        return this instanceof n
                            ? (c(this, "name", "OperationalError"), c(this, "message", t), this.cause = t, this
                                .isOperational = !0, void(t instanceof Error
                                ? (c(this, "message", t.message), c(this, "stack", t.stack))
                                : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)))
                            : new n(t)
                    }

                    var i,
                        o,
                        s = t("./es5.js").freeze,
                        a = t("./util.js"),
                        u = a.inherits,
                        c = a.notEnumerableProp,
                        l = r("Warning", "warning"),
                        h = r("CancellationError", "cancellation error"),
                        p = r("TimeoutError", "timeout error"),
                        f = r("AggregateError", "aggregate error");
                    try {
                        i = TypeError, o = RangeError
                    } catch (_) {
                        i = r("TypeError", "type error"), o = r("RangeError", "range error")
                    }
                    for (var d =
                                 "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),
                        v = 0;
                        v < d.length;
                        ++v) "function" == typeof Array.prototype[d[v]] && (f.prototype[d[v]] = Array.prototype[d[v]]);
                    f.prototype.length = 0, f.prototype.isOperational = !0;
                    var y = 0;
                    f.prototype.toString = function() {
                        var t = Array(4 * y + 1).join(" "), e = "\n" + t + "AggregateError of:\n";
                        y++, t = Array(4 * y + 1).join(" ");
                        for (var r = 0; r < this.length; ++r) {
                            for (var n = this[r] === this ? "[Circular AggregateError]" : this[r] + "",
                                i = n.split("\n"),
                                o = 0;
                                o < i.length;
                                ++o) i[o] = t + i[o];
                            n = i.join("\n"), e += n + "\n"
                        }
                        return y--, e
                    }, u(n, Error);
                    var g = Error.__BluebirdErrorTypes__;
                    g ||
                    (g = s({
                        CancellationError: h,
                        TimeoutError: p,
                        OperationalError: n,
                        RejectionError: n,
                        AggregateError: f
                    }), c(Error, "__BluebirdErrorTypes__", g)), e
                        .exports = {
                            Error: Error,
                            TypeError: i,
                            RangeError: o,
                            CancellationError: g.CancellationError,
                            OperationalError: g.OperationalError,
                            TimeoutError: g.TimeoutError,
                            AggregateError: g.AggregateError,
                            Warning: l
                        }
                }, { "./es5.js": 14, "./util.js": 38 }
            ],
            14: [
                function(t, e) {
                    var r = function() {
                        "use strict";
                        return void 0 === this
                    }();
                    if (r)
                        e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            keys: Object.keys,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: r,
                            propertyIsWritable: function(t, e) {
                                var r = Object.getOwnPropertyDescriptor(t, e);
                                return!(r && !r.writable && !r.set)
                            }
                        };
                    else {
                        var n = {}.hasOwnProperty,
                            i = {}.toString,
                            o = {}.constructor.prototype,
                            s = function(t) {
                                var e = [];
                                for (var r in t) n.call(t, r) && e.push(r);
                                return e
                            },
                            a = function(t, e, r) { return t[e] = r.value, t },
                            u = function(t) { return t },
                            c = function(t) {
                                try {
                                    return Object(t).constructor.prototype
                                } catch (e) {
                                    return o
                                }
                            },
                            l = function(t) {
                                try {
                                    return"[object Array]" === i.call(t)
                                } catch (e) {
                                    return!1
                                }
                            };
                        e.exports = {
                            isArray: l,
                            keys: s,
                            defineProperty: a,
                            freeze: u,
                            getPrototypeOf: c,
                            isES5: r,
                            propertyIsWritable: function() { return!0 }
                        }
                    }
                }, {}
            ],
            15: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e) {
                        var r = t.map;
                        t.prototype.filter = function(t, n) { return r(this, t, n, e) }, t
                            .filter = function(t, n, i) { return r(t, n, i, e) }
                    }
                }, {}
            ],
            16: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n) {
                        function i() { return this }

                        function o() { throw this }

                        function s(t) { return function() { return t } }

                        function a(t) { return function() { throw t } }

                        function u(t, e, r) {
                            var n;
                            return n = p && f(e) ? r ? s(e) : a(e) : r ? i : o, t._then(n, _, void 0, e, void 0)
                        }

                        function c(t) {
                            var i = this.promise, o = this.handler, s = i._isBound() ? o.call(i._boundTo) : o();
                            if (void 0 !== s) {
                                var a = n(s, i);
                                if (a instanceof e) return a = a._target(), u(a, t, i.isFulfilled())
                            }
                            return i.isRejected() ? (r.e = t, r) : t
                        }

                        function l(t) {
                            var r = this.promise, i = this.handler, o = r._isBound() ? i.call(r._boundTo, t) : i(t);
                            if (void 0 !== o) {
                                var s = n(o, r);
                                if (s instanceof e) return s = s._target(), u(s, t, !0)
                            }
                            return t
                        }

                        var h = t("./util.js"), p = h.wrapsPrimitiveReceiver, f = h.isPrimitive, _ = h.thrower;
                        e.prototype._passThroughHandler = function(t, e) {
                            if ("function" != typeof t) return this.then();
                            var r = { promise: this, handler: t };
                            return this._then(e ? c : l, e ? c : void 0, void 0, r, void 0)
                        }, e.prototype.lastly = e
                            .prototype["finally"] = function(t) { return this._passThroughHandler(t, !0) }, e.prototype
                            .tap = function(t) { return this._passThroughHandler(t, !1) }
                    }
                }, { "./util.js": 38 }
            ],
            17: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t, r, n) {
                            for (var o = 0; o < r.length; ++o) {
                                n._pushContext();
                                var s = h(r[o])(t);
                                if (n._popContext(), s === l) {
                                    n._pushContext();
                                    var a = e.reject(l.e);
                                    return n._popContext(), a
                                }
                                var u = i(s, n);
                                if (u instanceof e) return u
                            }
                            return null
                        }

                        function s(t, r, i, o) {
                            var s = this._promise = new e(n);
                            s._captureStackTrace(), this._stack = o, this._generatorFunction = t, this
                                ._receiver = r, this
                                ._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(p) : p
                        }

                        var a = t("./errors.js"),
                            u = a.TypeError,
                            c = t("./util.js"),
                            l = c.errorObj,
                            h = c.tryCatch,
                            p = [];
                        s.prototype.promise = function() { return this._promise }, s.prototype
                            ._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this
                                    ._generatorFunction = void 0, this._next(void 0)
                            }, s.prototype._continue = function(t) {
                            if (t === l) return this._promise._rejectCallback(t.e, !1, !0);
                            var r = t.value;
                            if (t.done === !0) this._promise._resolveCallback(r);
                            else {
                                var n = i(r, this._promise);
                                if (!(n instanceof e) && (n = o(n, this._yieldHandlers, this._promise), null === n)
                                )
                                    return void this
                                        ._throw(new
                                            u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                n._then(this._next, this._throw, void 0, this, null)
                            }
                        }, s.prototype._throw = function(t) {
                            this._promise._attachExtraTrace(t), this._promise._pushContext();
                            var e = h(this._generator["throw"]).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, s.prototype._next = function(t) {
                            this._promise._pushContext();
                            var e = h(this._generator.next).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, e.coroutine = function(t, e) {
                            if ("function" != typeof t)
                                throw new u("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var r = Object(e).yieldHandler, n = s, i = (new Error).stack;
                            return function() {
                                var e = t.apply(this, arguments), o = new n(void 0, void 0, r, i);
                                return o._generator = e, o._next(void 0), o.promise()
                            }
                        }, e.coroutine.addYieldHandler = function(t) {
                            if ("function" != typeof t)
                                throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            p.push(t)
                        }, e.spawn = function(t) {
                            if ("function" != typeof t)
                                return r("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var n = new s(t, this), i = n.promise();
                            return n._run(e.spawn), i
                        }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            18: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        {
                            var o = t("./util.js");
                            o.canEvaluate, o.tryCatch, o.errorObj
                        }
                        e.join = function() {
                            var t, e = arguments.length - 1;
                            if (e > 0 && "function" == typeof arguments[e]) {
                                t = arguments[e];
                                var n
                            }
                            for (var i = arguments.length, o = new Array(i), s = 0; i > s; ++s) o[s] = arguments[s];
                            t && o.pop();
                            var n = new r(o).promise();
                            return void 0 !== t ? n.spread(t) : n
                        }
                    }
                }, { "./util.js": 38 }
            ],
            19: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i, o) {
                        function s(t, e, r, n) {
                            this.constructor$(t), this._promise._setIsSpreadable(), this._promise
                                ._captureStackTrace(), this
                                ._callback = e, this._preservedValues = n === o ? new Array(this.length()) : null, this
                                ._limit = r, this._inFlight = 0, this._queue = r >= 1 ? [] : p, this._init$(void 0, -2)
                        }

                        function a(t, e, r, n) {
                            var i = "object" == typeof r && null !== r ? r.concurrency : 0;
                            return i = "number" == typeof i && isFinite(i) && i >= 1 ? i : 0, new s(t, e, i, n)
                        }

                        var u = t("./util.js"), c = u.tryCatch, l = u.errorObj, h = {}, p = [];
                        u.inherits(s, r), s.prototype._init = function() {}, s.prototype
                            ._promiseFulfilled = function(t, r) {
                                var n = this._values, o = this.length(), s = this._preservedValues, a = this._limit;
                                if (n[r] === h) {
                                    if (n[r] = t, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())
                                    ) return
                                } else {
                                    if (a >= 1 && this._inFlight >= a) return n[r] = t, void this._queue.push(r);
                                    null !== s && (s[r] = t);
                                    var u = this._callback, p = this._promise._boundTo;
                                    this._promise._pushContext();
                                    var f = c(u).call(p, t, r, o);
                                    if (this._promise._popContext(), f === l) return this._reject(f.e);
                                    var _ = i(f, this._promise);
                                    if (_ instanceof e) {
                                        if (_ = _._target(), _
                                            ._isPending())
                                            return a >= 1 && this._inFlight++, n[r] = h, _._proxyPromiseArray(this, r);
                                        if (!_._isFulfilled()) return this._reject(_._reason());
                                        f = _._value()
                                    }
                                    n[r] = f
                                }
                                var d = ++this._totalResolved;
                                d >= o && (null !== s ? this._filter(n, s) : this._resolve(n))
                            }, s.prototype._drainQueue = function() {
                            for (var t = this._queue, e = this._limit, r = this._values;
                                t.length > 0 && this._inFlight < e;
                            ) {
                                if (this._isResolved()) return;
                                var n = t.pop();
                                this._promiseFulfilled(r[n], n)
                            }
                        }, s.prototype._filter = function(t, e) {
                            for (var r = e.length, n = new Array(r), i = 0, o = 0; r > o; ++o) t[o] && (n[i++] = e[o]);
                            n.length = i, this._resolve(n)
                        }, s.prototype.preservedValues = function() { return this._preservedValues }, e.prototype
                            .map = function(t, e) {
                                return"function" != typeof t
                                    ? n("fn must be a function\n\n    See http://goo.gl/916lJJ\n")
                                    : a(this, t, e, null).promise()
                            }, e.map = function(t, e, r, i) {
                            return"function" != typeof e
                                ? n("fn must be a function\n\n    See http://goo.gl/916lJJ\n")
                                : a(t, e, r, i).promise()
                        }
                    }
                }, { "./util.js": 38 }
            ],
            20: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        var o = t("./util.js"), s = o.tryCatch;
                        e.method = function(t) {
                            if ("function" != typeof t)
                                throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            return function() {
                                var n = new e(r);
                                n._captureStackTrace(), n._pushContext();
                                var i = s(t).apply(this, arguments);
                                return n._popContext(), n._resolveFromSyncValue(i), n
                            }
                        }, e.attempt = e["try"] = function(t, n, a) {
                            if ("function" != typeof t)
                                return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var u = new e(r);
                            u._captureStackTrace(), u._pushContext();
                            var c = o.isArray(n) ? s(t).apply(a, n) : s(t).call(a, n);
                            return u._popContext(), u._resolveFromSyncValue(c), u
                        }, e.prototype._resolveFromSyncValue = function(t) {
                            t === o.errorObj ? this._rejectCallback(t.e, !1, !0) : this._resolveCallback(t, !0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            21: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        function r(t, e) {
                            var r = this;
                            if (!o.isArray(t)) return n.call(r, t, e);
                            var i = a(e).apply(r._boundTo, [null].concat(t));
                            i === u && s.throwLater(i.e)
                        }

                        function n(t, e) {
                            var r = this, n = r._boundTo, i = void 0 === t ? a(e).call(n, null) : a(e).call(n, null, t);
                            i === u && s.throwLater(i.e)
                        }

                        function i(t, e) {
                            var r = this;
                            if (!t) {
                                var n = r._target(), i = n._getCarriedStackTrace();
                                i.cause = t, t = i
                            }
                            var o = a(e).call(r._boundTo, t);
                            o === u && s.throwLater(o.e)
                        }

                        var o = t("./util.js"), s = t("./async.js"), a = o.tryCatch, u = o.errorObj;
                        e.prototype.nodeify = function(t, e) {
                            if ("function" == typeof t) {
                                var o = n;
                                void 0 !== e && Object(e).spread && (o = r), this._then(o, i, void 0, this, t)
                            }
                            return this
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            22: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        var n = t("./util.js"), i = t("./async.js"), o = n.tryCatch, s = n.errorObj;
                        e.prototype.progressed = function(t) { return this._then(void 0, void 0, t, void 0, void 0) }, e
                            .prototype._progress = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._target()._progressUnchecked(t)
                            }, e.prototype
                            ._progressHandlerAt = function(t) {
                                return 0 === t ? this._progressHandler0 : this[(t << 2) + t - 5 + 2]
                            }, e.prototype._doProgressWith = function(t) {
                            var r = t.value, i = t.handler, a = t.promise, u = t.receiver, c = o(i).call(u, r);
                            if (c === s) {
                                if (null != c.e && "StopProgressPropagation" !== c.e.name) {
                                    var l = n.canAttachTrace(c.e) ? c.e : new Error(n.toString(c.e));
                                    a._attachExtraTrace(l), a._progress(c.e)
                                }
                            } else c instanceof e ? c._then(a._progress, null, null, a, void 0) : a._progress(c)
                        }, e.prototype._progressUnchecked = function(t) {
                            for (var n = this._length(), o = this._progress, s = 0; n > s; s++) {
                                var a = this._progressHandlerAt(s), u = this._promiseAt(s);
                                if (u instanceof e)
                                    "function" == typeof a
                                        ? i.invoke(this._doProgressWith,
                                            this,
                                            { handler: a, promise: u, receiver: this._receiverAt(s), value: t })
                                        : i.invoke(o, u, t);
                                else {
                                    var c = this._receiverAt(s);
                                    "function" == typeof a
                                        ? a.call(c, t, u)
                                        : c instanceof r && !c._isResolved() && c._promiseProgressed(t, u)
                                }
                            }
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            23: [
                function(t, e) {
                    "use strict";
                    e.exports = function() {
                        function e(t) {
                            if ("function" != typeof t)
                                throw new
                                    u("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");
                            if (this.constructor !== e)
                                throw new
                                    u("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");
                            this._bitField = 0, this._fulfillmentHandler0 = void 0, this
                                ._rejectionHandler0 = void 0, this
                                ._progressHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this
                                ._settledValue = void 0, this._boundTo = void 0, t !== c && this._resolveFromResolver(t)
                        }

                        var r = function() {
                                return new u("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")
                            },
                            n = function() { return new e.PromiseInspection(this._target()) },
                            i = function(t) { return e.reject(new u(t)) },
                            o = t("./util.js"),
                            s = t("./async.js"),
                            a = t("./errors.js"),
                            u = e.TypeError = a.TypeError;
                        e.RangeError = a.RangeError, e.CancellationError = a.CancellationError, e.TimeoutError = a
                            .TimeoutError, e.OperationalError = a.OperationalError, e.RejectionError = a
                            .OperationalError, e
                            .AggregateError = a.AggregateError;
                        var c = function() {},
                            l = {},
                            h = { e: null },
                            p = t("./thenables.js")(e, c),
                            f = t("./promise_array.js")(e, c, p, i),
                            _ = t("./captured_trace.js")(),
                            d = t("./debuggability.js")(e, _),
                            v = t("./context.js")(e, _, d),
                            y = t("./catch_filter.js")(h),
                            g = t("./promise_resolver.js"),
                            m = g._nodebackForPromise,
                            j = o.errorObj,
                            b = o.tryCatch;
                        return e.prototype.toString = function() { return"[object Promise]" }, e.prototype.caught = e
                                .prototype["catch"] = function(t) {
                                    var r = arguments.length;
                                    if (r > 1) {
                                        var n, i = new Array(r - 1), o = 0;
                                        for (n = 0; r - 1 > n; ++n) {
                                            var s = arguments[n];
                                            if ("function" != typeof s
                                            )
                                                return e
                                                    .reject(new
                                                        u("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));
                                            i[o++] = s
                                        }
                                        i.length = o, t = arguments[n];
                                        var a = new y(i, t, this);
                                        return this._then(void 0, a.doFilter, void 0, a, void 0)
                                    }
                                    return this._then(void 0, t, void 0, void 0, void 0)
                                }, e.prototype.reflect = function() { return this._then(n, n, void 0, this, void 0) }, e
                                .prototype.then = function(t, e, r) {
                                    if (d() && arguments.length > 0 && "function" != typeof t && "function" != typeof e
                                    ) {
                                        var n = ".then() only accepts functions but was passed: " + o.classString(t);
                                        arguments.length > 1 && (n += ", " + o.classString(e)), this._warn(n)
                                    }
                                    return this._then(t, e, r, void 0, void 0)
                                }, e.prototype.done = function(t, e, r) {
                                var n = this._then(t, e, r, void 0, void 0);
                                n._setIsFinal()
                            }, e.prototype.spread = function(t, e) {
                                var r = this._target(),
                                    n = r._isSpreadable() ? r === this ? this : this.then() : this.all();
                                return n._then(t, e, void 0, l, void 0)
                            }, e.prototype.isCancellable = function() {
                                return!this.isResolved() && this._cancellable()
                            }, e
                                .prototype.toJSON = function() {
                                    var t = {
                                        isFulfilled: !1,
                                        isRejected: !1,
                                        fulfillmentValue: void 0,
                                        rejectionReason: void 0
                                    };
                                    return this.isFulfilled()
                                        ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0)
                                        : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
                                }, e.prototype.all = function() {
                                var t = new f(this).promise();
                                return t._setIsSpreadable(), t
                            }, e.prototype.error = function(t) { return this.caught(o.originatesFromRejection, t) }, e
                                .is = function(t) { return t instanceof e }, e.fromNode = function(t) {
                                var r = new e(c), n = b(t)(m(r));
                                return n === j && r._rejectCallback(n.e, !0, !0), r
                            }, e.all = function(t) {
                                var e = new f(t).promise();
                                return e._setIsSpreadable(), e
                            }, e.defer = e.pending = function() {
                                var t = new e(c);
                                return new g(t)
                            }, e.cast = function(t) {
                                var r = p(t);
                                if (!(r instanceof e)) {
                                    var n = r;
                                    r = new e(c), r._fulfillUnchecked(n)
                                }
                                return r
                            }, e.resolve = e.fulfilled = e.cast, e.reject = e.rejected = function(t) {
                                var r = new e(c);
                                return r._captureStackTrace(), r._rejectCallback(t, !0), r
                            }, e.setScheduler = function(t) {
                                if ("function" != typeof t)
                                    throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var e = s._schedule;
                                return s._schedule = t, e
                            }, e.prototype._then = function(t, r, n, i, o) {
                                var a = void 0 !== o, u = a ? o : new e(c);
                                a || (u._propagateFrom(this, 5), u._captureStackTrace());
                                var l = this._target();
                                l !== this &&
                                    (a || (u._setIsMigrated(), void 0 === i && (u._setIsMigratingBinding(), i = this)));
                                var h = l._addCallbacks(t, r, n, u, i);
                                return l._isResolved() &&
                                    !l._isSettlePromisesQueued() &&
                                    s.invoke(l._settlePromiseAtPostResolution, l, h), u
                            }, e.prototype
                                ._settlePromiseAtPostResolution = function(t) {
                                    this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), this
                                        ._settlePromiseAt(t)
                                }, e.prototype._length = function() { return 131071 & this._bitField }, e.prototype
                                ._isFollowingOrFulfilledOrRejected =
                                function() { return(939524096 & this._bitField) > 0 }, e
                                .prototype._isFollowing = function() {
                                    return 536870912 === (536870912 & this._bitField)
                                }, e
                                .prototype
                                ._setLength = function(t) { this._bitField = -131072 & this._bitField | 131071 & t }, e
                                .prototype._setFulfilled = function() { this._bitField = 268435456 | this._bitField }, e
                                .prototype._setRejected = function() { this._bitField = 134217728 | this._bitField }, e
                                .prototype._setFollowing = function() { this._bitField = 536870912 | this._bitField }, e
                                .prototype._setIsFinal = function() { this._bitField = 33554432 | this._bitField }, e
                                .prototype
                                ._isFinal = function() { return(33554432 & this._bitField) > 0 }, e.prototype
                                ._cancellable = function() { return(67108864 & this._bitField) > 0 }, e.prototype
                                ._setCancellable = function() { this._bitField = 67108864 | this._bitField }, e
                                .prototype
                                ._unsetCancellable = function() { this._bitField = -67108865 & this._bitField }, e
                                .prototype
                                ._isSpreadable = function() { return(131072 & this._bitField) > 0 }, e.prototype
                                ._setIsSpreadable = function() { this._bitField = 131072 | this._bitField }, e.prototype
                                ._setIsMigrated = function() { this._bitField = 4194304 | this._bitField }, e.prototype
                                ._unsetIsMigrated = function() { this._bitField = -4194305 & this._bitField }, e
                                .prototype
                                ._isMigrated = function() { return(4194304 & this._bitField) > 0 }, e.prototype
                                ._receiverAt = function(t) {
                                    var e = 0 === t ? this._receiver0 : this[5 * t - 5 + 4];
                                    return this._isBound() && void 0 === e ? this._boundTo : e
                                }, e.prototype._promiseAt = function(t) {
                                return 0 === t ? this._promise0 : this[5 * t - 5 + 3]
                            }, e.prototype._fulfillmentHandlerAt = function(t) {
                                return 0 === t ? this._fulfillmentHandler0 : this[5 * t - 5 + 0]
                            }, e.prototype._rejectionHandlerAt = function(t) {
                                return 0 === t ? this._rejectionHandler0 : this[5 * t - 5 + 1]
                            }, e.prototype._migrateCallbacks = function(t, r) {
                                var n = t._fulfillmentHandlerAt(r),
                                    i = t._rejectionHandlerAt(r),
                                    o = t._progressHandlerAt(r),
                                    s = t._promiseAt(r),
                                    a = t._receiverAt(r);
                                s instanceof e &&
                                        (s._setIsMigrated(), void 0 === a && (a = t, s._setIsMigratingBinding())),
                                    this._addCallbacks(n, i, o, s, a)
                            }, e.prototype._addCallbacks = function(t, e, r, n, i) {
                                var o = this._length();
                                if (o >= 131066 && (o = 0, this._setLength(0)), 0 === o
                                )
                                    this
                                            ._promise0 = n, void 0 !== i && (this._receiver0 = i),
                                        "function" != typeof t ||
                                            this._isCarryingStackTrace() ||
                                            (this._fulfillmentHandler0 = t),
                                        "function" == typeof e && (this._rejectionHandler0 = e),
                                        "function" == typeof r && (this._progressHandler0 = r);
                                else {
                                    var s = 5 * o - 5;
                                    this[s + 3] = n, this[s + 4] = i, "function" == typeof t && (this[s + 0] = t),
                                        "function" == typeof e && (this[s + 1] = e),
                                        "function" == typeof r && (this[s + 2] = r)
                                }
                                return this._setLength(o + 1), o
                            }, e.prototype._setProxyHandlers = function(t, e) {
                                var r = this._length();
                                if (r >= 131066 && (r = 0, this._setLength(0)), 0 === r
                                ) this._promise0 = e, this._receiver0 = t;
                                else {
                                    var n = 5 * r - 5;
                                    this[n + 3] = e, this[n + 4] = t
                                }
                                this._setLength(r + 1)
                            }, e.prototype._proxyPromiseArray = function(t, e) { this._setProxyHandlers(t, e) }, e
                                .prototype
                                ._resolveCallback = function(t, n) {
                                    if (!this._isFollowingOrFulfilledOrRejected()) {
                                        if (t === this) return this._rejectCallback(r(), !1, !0);
                                        var i = p(t, this);
                                        if (!(i instanceof e)) return this._fulfill(t);
                                        var o = 1 | (n ? 4 : 0);
                                        this._propagateFrom(i, o);
                                        var s = i._target();
                                        if (s._isPending()) {
                                            for (var a = this
                                                         ._length(),
                                            u = 0;
                                            a > u;
                                            ++u) s._migrateCallbacks(this, u);
                                            this._setFollowing(), this._setLength(0), this._setFollowee(s)
                                        } else
                                            s._isFulfilled()
                                                ? this._fulfillUnchecked(s._value())
                                                : this._rejectUnchecked(s._reason(), s._getCarriedStackTrace())
                                    }
                                }, e.prototype._rejectCallback = function(t, e, r) {
                                r || o.markAsOriginatingFromRejection(t);
                                var n = o.ensureErrorObject(t),
                                    i = o.canAttachTrace(t) && "string" == typeof n.stack && n.stack.length > 0;
                                this._attachExtraTrace(n, e ? i : !1), this._reject(t, n === t ? void 0 : n)
                            }, e.prototype._resolveFromResolver = function(t) {
                                var e = this;
                                this._captureStackTrace(), this._pushContext();
                                var r = !0,
                                    n = b(t)(function(t) { null !== e && (e._resolveCallback(t), e = null) },
                                        function(t) { null !== e && (e._rejectCallback(t, r), e = null) });
                                r = !1, this._popContext(), void 0 !== n &&
                                    n === j &&
                                    null !== e &&
                                    (e._rejectCallback(n.e, !0, !0), e = null)
                            }, e.prototype._settlePromiseFromHandler = function(t, e, n, i) {
                                if (!i._isRejected()) {
                                    i._pushContext();
                                    var o;
                                    if (o = e !== l || this._isRejected()
                                        ? b(t).call(e, n)
                                        : b(t).apply(this._boundTo, n), i
                                        ._popContext(), o === j || o === i || o === h) {
                                        var s = o === i ? r() : o.e;
                                        i._rejectCallback(s, !1, !0)
                                    } else i._resolveCallback(o)
                                }
                            }, e.prototype._target = function() {
                                for (var t = this; t._isFollowing();) t = t._followee();
                                return t
                            }, e.prototype._followee = function() { return this._rejectionHandler0 }, e.prototype
                                ._setFollowee = function(t) { this._rejectionHandler0 = t }, e.prototype
                                ._cleanValues = function() {
                                    this._cancellable() && (this._cancellationParent = void 0)
                                }, e
                                .prototype._propagateFrom = function(t, e) {
                                    (1 & e) > 0 &&
                                            t._cancellable() &&
                                            (this._setCancellable(), this._cancellationParent = t),
                                        (4 & e) > 0 && this._setBoundTo(t._boundTo)
                                }, e.prototype._fulfill = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t)
                            }, e.prototype._reject = function(t, e) {
                                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e)
                            }, e.prototype._settlePromiseAt = function(t) {
                                var r = this._promiseAt(t), n = r instanceof e;
                                if (n && r._isMigrated())
                                    return r._unsetIsMigrated(), s.invoke(this._settlePromiseAt, this, t);
                                var i = this._isFulfilled()
                                        ? this._fulfillmentHandlerAt(t)
                                        : this._rejectionHandlerAt(t),
                                    o = this._isCarryingStackTrace() ? this._getCarriedStackTrace() : void 0,
                                    a = this._settledValue,
                                    u = this._receiverAt(t);
                                n && r._isMigratingBinding() && (r._unsetIsMigratingBinding(), u = u._boundTo), this
                                        ._clearCallbackDataAtIndex(t), "function" == typeof i
                                        ? n ? this._settlePromiseFromHandler(i, u, a, r) : i.call(u, a, r)
                                        : u instanceof f
                                        ? u._isResolved() ||
                                        (this._isFulfilled() ? u._promiseFulfilled(a, r) : u._promiseRejected(a, r))
                                        : n && (this._isFulfilled() ? r._fulfill(a) : r._reject(a, o)),
                                    t >= 4 && 4 === (31 & t) && s.invokeLater(this._setLength, this, 0)
                            }, e.prototype._clearCallbackDataAtIndex = function(t) {
                                if (0 === t)
                                    this._isCarryingStackTrace() || (this._fulfillmentHandler0 = void 0), this
                                        ._rejectionHandler0 = this._progressHandler0 = this._receiver0 = this
                                        ._promise0 = void 0;
                                else {
                                    var e = 5 * t - 5;
                                    this[e + 3] = this[e + 4] = this[e + 0] = this[e + 1] = this[e + 2] = void 0
                                }
                            }, e.prototype
                                ._isSettlePromisesQueued = function() {
                                    return-1073741824 === (-1073741824 & this._bitField)
                                },
                            e.prototype
                                ._setSettlePromisesQueued =
                                function() { this._bitField = -1073741824 | this._bitField }, e
                                .prototype
                                ._unsetSettlePromisesQueued =
                                function() { this._bitField = 1073741823 & this._bitField }, e
                                .prototype._queueSettlePromises = function() {
                                    s.settlePromises(this), this._setSettlePromisesQueued()
                                }, e.prototype._fulfillUnchecked = function(t) {
                                if (t === this) {
                                    var e = r();
                                    return this._attachExtraTrace(e), this._rejectUnchecked(e, void 0)
                                }
                                this._setFulfilled(), this._settledValue = t, this
                                    ._cleanValues(), this._length() > 0 && this._queueSettlePromises()
                            }, e.prototype._rejectUncheckedCheckError = function(t) {
                                var e = o.ensureErrorObject(t);
                                this._rejectUnchecked(t, e === t ? void 0 : e)
                            }, e.prototype._rejectUnchecked = function(t, e) {
                                if (t === this) {
                                    var n = r();
                                    return this._attachExtraTrace(n), this._rejectUnchecked(n)
                                }
                                return this._setRejected(), this._settledValue = t, this
                                    ._cleanValues(), this._isFinal()
                                    ? void s.throwLater(function(t) {
                                            throw"stack" in t && s.invokeFirst(_.unhandledRejection, void 0, t), t
                                        },
                                        void 0 === e ? t : e)
                                    : (void 0 !== e && e !== t && this._setCarriedStackTrace(e), void(
                                        this._length() > 0
                                            ? this._queueSettlePromises()
                                            : this._ensurePossibleRejectionHandled()))
                            }, e.prototype._settlePromises = function() {
                                this._unsetSettlePromisesQueued();
                                for (var t = this._length(), e = 0; t > e; e++) this._settlePromiseAt(e)
                            }, e
                                ._makeSelfResolutionError = r, t("./method.js")(e, c, p, i), t("./bind.js")(e, c, p),
                            t("./finally.js")(e, h, p), t("./direct_resolve.js")(e),
                            t("./synchronous_inspection.js")(e),
                            t("./join.js")(e, f, p, c), o.toFastProperties(e), o.toFastProperties(e.prototype), e
                                .Promise = e, _
                                .setBounds(s
                                    .firstLineError,
                                    o
                                    .lastLineError), t("./map.js")(e, f, i, p, c), t("./using.js")(e, i, p, v),
                            t("./generators.js")(e, i, c, p), t("./nodeify.js")(e), t("./cancel.js")(e),
                            t("./promisify.js")(e, c), t("./props.js")(e, f, p, i), t("./race.js")(e, c, p, i),
                            t("./reduce.js")(e, f, i, p, c), t("./settle.js")(e, f), t("./call_get.js")(e),
                            t("./some.js")(e, f, i), t("./progress.js")(e, f), t("./any.js")(e), t("./each.js")(e, c),
                            t("./timers.js")(e, c), t("./filter.js")(e, c), e.prototype = e.prototype, e
                    }
                }, {
                    "./any.js": 1,
                    "./async.js": 2,
                    "./bind.js": 3,
                    "./call_get.js": 5,
                    "./cancel.js": 6,
                    "./captured_trace.js": 7,
                    "./catch_filter.js": 8,
                    "./context.js": 9,
                    "./debuggability.js": 10,
                    "./direct_resolve.js": 11,
                    "./each.js": 12,
                    "./errors.js": 13,
                    "./filter.js": 15,
                    "./finally.js": 16,
                    "./generators.js": 17,
                    "./join.js": 18,
                    "./map.js": 19,
                    "./method.js": 20,
                    "./nodeify.js": 21,
                    "./progress.js": 22,
                    "./promise_array.js": 24,
                    "./promise_resolver.js": 25,
                    "./promisify.js": 26,
                    "./props.js": 27,
                    "./race.js": 29,
                    "./reduce.js": 30,
                    "./settle.js": 32,
                    "./some.js": 33,
                    "./synchronous_inspection.js": 34,
                    "./thenables.js": 35,
                    "./timers.js": 36,
                    "./using.js": 37,
                    "./util.js": 38
                }
            ],
            24: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            switch (t) {
                            case-2:
                                return[];
                            case-3:
                                return{}
                            }
                        }

                        function s(t) {
                            var n, i = this._promise = new e(r);
                            t instanceof e && (n = t, i._propagateFrom(n, 5)), this._values = t, this._length = 0, this
                                ._totalResolved = 0, this._init(void 0, -2)
                        }

                        var a = t("./util.js"), u = a.isArray;
                        return s.prototype.length = function() { return this._length }, s.prototype
                            .promise = function() { return this._promise }, s.prototype._init = function c(t, r) {
                            var s = n(this._values, this._promise);
                            if (s instanceof e) {
                                if (s._setBoundTo(this._promise._boundTo), s = s._target(), this._values = s, !s
                                    ._isFulfilled())
                                    return s._isPending()
                                        ? void s._then(c, this._reject, void 0, this, r)
                                        : void this._reject(s._reason());
                                if (s = s._value(), !u(s)) {
                                    var a = new e
                                        .TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                                    return void this.__hardReject__(a)
                                }
                            } else if (!u(s))
                                return void this._promise
                                    ._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());
                            if (0 === s.length) return void(-5 === r ? this._resolveEmptyArray() : this._resolve(o(r)));
                            var l = this.getActualLength(s.length);
                            this._length = l, this._values = this.shouldCopyValues() ? new Array(l) : this._values;
                            for (var h = this._promise, p = 0; l > p; ++p) {
                                var f = this._isResolved(), _ = n(s[p], h);
                                _ instanceof e
                                    ? (_ = _._target(), f
                                        ? _._unsetRejectionIsUnhandled()
                                        : _._isPending()
                                        ? _._proxyPromiseArray(this, p)
                                        : _._isFulfilled()
                                        ? this._promiseFulfilled(_._value(), p)
                                        : this._promiseRejected(_._reason(), p))
                                    : f || this._promiseFulfilled(_, p)
                            }
                        }, s.prototype._isResolved = function() { return null === this._values }, s.prototype
                            ._resolve = function(t) { this._values = null, this._promise._fulfill(t) }, s.prototype
                            .__hardReject__ = s.prototype
                            ._reject = function(t) { this._values = null, this._promise._rejectCallback(t, !1, !0) }, s
                            .prototype._promiseProgressed = function(t, e) {
                                this._promise._progress({ index: e, value: t })
                            }, s.prototype._promiseFulfilled = function(t, e) {
                            this._values[e] = t;
                            var r = ++this._totalResolved;
                            r >= this._length && this._resolve(this._values)
                        }, s.prototype._promiseRejected = function(t) { this._totalResolved++, this._reject(t) }, s
                            .prototype.shouldCopyValues = function() { return!0 }, s.prototype
                            .getActualLength = function(t) { return t }, s
                    }
                }, { "./util.js": 38 }
            ],
            25: [
                function(t, e) {
                    "use strict";

                    function r(t) { return t instanceof Error && p.getPrototypeOf(t) === Error.prototype }

                    function n(t) {
                        var e;
                        if (r(t)) {
                            e = new l(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                            for (var n = p.keys(t), i = 0; i < n.length; ++i) {
                                var o = n[i];
                                f.test(o) || (e[o] = t[o])
                            }
                            return e
                        }
                        return s.markAsOriginatingFromRejection(t), t
                    }

                    function i(t) {
                        return function(e, r) {
                            if (null !== t) {
                                if (e) {
                                    var i = n(a(e));
                                    t._attachExtraTrace(i), t._reject(i)
                                } else if (arguments.length > 2) {
                                    for (var o = arguments
                                                 .length,
                                        s = new Array(o - 1),
                                        u = 1;
                                        o > u;
                                        ++u) s[u - 1] = arguments[u];
                                    t._fulfill(s)
                                } else t._fulfill(r);
                                t = null
                            }
                        }
                    }

                    var o,
                        s = t("./util.js"),
                        a = s.maybeWrapAsError,
                        u = t("./errors.js"),
                        c = u.TimeoutError,
                        l = u.OperationalError,
                        h = s.haveGetters,
                        p = t("./es5.js"),
                        f = /^(?:name|message|stack|cause)$/;
                    if (o = h
                        ? function(t) { this.promise = t }
                        : function(t) { this.promise = t, this.asCallback = i(t), this.callback = this.asCallback }, h
                    ) {
                        var _ = { get: function() { return i(this.promise) } };
                        p.defineProperty(o.prototype, "asCallback", _), p.defineProperty(o.prototype, "callback", _)
                    }
                    o._nodebackForPromise = i, o.prototype.toString = function() { return"[object PromiseResolver]" }, o
                        .prototype.resolve = o.prototype.fulfill = function(t) {
                            if (!(this instanceof o))
                                throw new
                                    TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                            this.promise._resolveCallback(t)
                        }, o.prototype.reject = function(t) {
                        if (!(this instanceof o))
                            throw new
                                TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._rejectCallback(t)
                    }, o.prototype.progress = function(t) {
                        if (!(this instanceof o))
                            throw new
                                TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._progress(t)
                    }, o.prototype.cancel = function(t) { this.promise.cancel(t) }, o.prototype
                        .timeout = function() { this.reject(new c("timeout")) }, o.prototype
                        .isResolved = function() { return this.promise.isResolved() }, o.prototype
                        .toJSON = function() { return this.promise.toJSON() }, e.exports = o
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }
            ],
            26: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) {
                            try {
                                return t.__isPromisified__ === !0
                            } catch (e) {
                                return!1
                            }
                        }

                        function i(t, e, r) {
                            var i = p.getDataPropertyOrDefault(t, e + r, j);
                            return i ? n(i) : !1
                        }

                        function o(t, e, r) {
                            for (var n = 0; n < t.length; n += 2) {
                                var i = t[n];
                                if (r.test(i))
                                    for (var o = i
                                                 .replace(r, ""),
                                        s = 0;
                                        s < t.length;
                                        s += 2)
                                        if (t[s] === o)
                                            throw new
                                                y("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s", e))
                            }
                        }

                        function s(t, e, r, s) {
                            for (var a = p.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
                                var l = a[c], h = t[l], f = s === m ? !0 : m(l, h, t);
                                "function" != typeof h || n(h) || i(t, l, e) || !s(l, h, t, f) || u.push(l, h)
                            }
                            return o(u, e, r), u
                        }

                        function a(t, n) {
                            function i() {
                                var i = n;
                                n === h && (i = this), "string" == typeof t && (t = i[t]);
                                var o = new e(r);
                                o._captureStackTrace(), o._setIsSpreadable();
                                var s = f(o);
                                try {
                                    t.apply(i, _(arguments, s))
                                } catch (a) {
                                    var u = d(a);
                                    o._attachExtraTrace(u), o._reject(u)
                                }
                                return o
                            }

                            return i.__isPromisified__ = !0, i
                        }

                        function u(t, e, r, n) {
                            for (var i = new RegExp(b(e) + "$"), o = s(t, e, i, r), a = 0, u = o.length;
                                u > a;
                                a += 2
                            ) {
                                var c = o[a], l = o[a + 1], f = c + e;
                                t[f] = n === w ? w(c, h, c, l, e) : n(l, function() { return w(c, h, c, l, e) })
                            }
                            return p.toFastProperties(t), t
                        }

                        function c(t, e) { return w(t, e, void 0, t) }

                        var l,
                            h = {},
                            p = t("./util.js"),
                            f = t("./promise_resolver.js")._nodebackForPromise,
                            _ = p.withAppended,
                            d = p.maybeWrapAsError,
                            v = p.canEvaluate,
                            y = t("./errors").TypeError,
                            g = "Async",
                            m = function(t, e) { return p.isIdentifier(t) && "_" !== t.charAt(0) && !p.isClass(e) },
                            j = { __isPromisified__: !0 },
                            b = function(t) { return t.replace(/([$])/, "\\$") },
                            w = v ? l : a;
                        e.promisify = function(t, e) {
                            if ("function" != typeof t)
                                throw new y("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            return n(t) ? t : c(t, arguments.length < 2 ? h : e)
                        }, e.promisifyAll = function(t, e) {
                            if ("function" != typeof t && "object" != typeof t
                            )
                                throw new
                                    y("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");
                            e = Object(e);
                            var r = e.suffix;
                            "string" != typeof r && (r = g);
                            var n = e.filter;
                            "function" != typeof n && (n = m);
                            var i = e.promisifier;
                            if ("function" != typeof i && (i = w), !p
                                .isIdentifier(r))
                                throw new
                                    RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");
                            for (var o = p.inheritedDataKeys(t, { includeHidden: !0 }), s = 0; s < o.length; ++s) {
                                var a = t[o[s]];
                                "constructor" !== o[s] && p.isClass(a) && (u(a.prototype, r, n, i), u(a, r, n, i))
                            }
                            return u(t, r, n, i)
                        }
                    }
                }, { "./errors": 13, "./promise_resolver.js": 25, "./util.js": 38 }
            ],
            27: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            for (var e = c.keys(t), r = e.length, n = new Array(2 * r), i = 0; r > i; ++i) {
                                var o = e[i];
                                n[i] = t[o], n[i + r] = o
                            }
                            this.constructor$(n)
                        }

                        function s(t) {
                            var r, s = n(t);
                            return u(s)
                                ? (r = s instanceof e
                                    ? s._then(e.props, void 0, void 0, void 0, void 0)
                                    : new o(s).promise(), s instanceof e && r._propagateFrom(s, 4), r)
                                : i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")
                        }

                        var a = t("./util.js"), u = a.isObject, c = t("./es5.js");
                        a.inherits(o, r), o.prototype._init = function() { this._init$(void 0, -3) }, o.prototype
                            ._promiseFulfilled = function(t, e) {
                                this._values[e] = t;
                                var r = ++this._totalResolved;
                                if (r >= this._length) {
                                    for (var n = {}, i = this.length(), o = 0, s = this.length();
                                        s > o;
                                        ++o
                                    ) n[this._values[o + i]] = this._values[o];
                                    this._resolve(n)
                                }
                            }, o.prototype
                            ._promiseProgressed = function(t, e) {
                                this._promise._progress({ key: this._values[e + this.length()], value: t })
                            }, o.prototype.shouldCopyValues = function() { return!1 }, o.prototype
                            .getActualLength = function(t) { return t >> 1 }, e.prototype
                            .props = function() { return s(this) }, e.props = function(t) { return s(t) }
                    }
                }, { "./es5.js": 14, "./util.js": 38 }
            ],
            28: [
                function(t, e) {
                    "use strict";

                    function r(t, e, r, n, i) { for (var o = 0; i > o; ++o) r[o + n] = t[o + e], t[o + e] = void 0 }

                    function n(t) { this._capacity = t, this._length = 0, this._front = 0 }

                    n.prototype._willBeOverCapacity = function(t) { return this._capacity < t }, n.prototype
                        ._pushOne = function(t) {
                            var e = this.length();
                            this._checkCapacity(e + 1);
                            var r = this._front + e & this._capacity - 1;
                            this[r] = t, this._length = e + 1
                        }, n.prototype._unshiftOne = function(t) {
                        var e = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var r = this._front, n = (r - 1 & e - 1 ^ e) - e;
                        this[n] = t, this._front = n, this._length = this.length() + 1
                    }, n.prototype.unshift = function(t, e, r) {
                        this._unshiftOne(r), this._unshiftOne(e), this._unshiftOne(t)
                    }, n.prototype.push = function(t, e, r) {
                        var n = this.length() + 3;
                        if (this._willBeOverCapacity(n))
                            return this._pushOne(t), this._pushOne(e), void this._pushOne(r);
                        var i = this._front + n - 3;
                        this._checkCapacity(n);
                        var o = this._capacity - 1;
                        this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = r, this._length = n
                    }, n.prototype.shift = function() {
                        var t = this._front, e = this[t];
                        return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
                    }, n.prototype.length = function() { return this._length }, n.prototype
                        ._checkCapacity = function(t) { this._capacity < t && this._resizeTo(this._capacity << 1) }, n
                        .prototype._resizeTo = function(t) {
                            var e = this._capacity;
                            this._capacity = t;
                            var n = this._front, i = this._length, o = n + i & e - 1;
                            r(this, 0, this, e, o)
                        }, e.exports = n
                }, {}
            ],
            29: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t, o) {
                            var u = n(t);
                            if (u instanceof e) return a(u);
                            if (!s(t))
                                return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                            var c = new e(r);
                            void 0 !== o && c._propagateFrom(o, 5);
                            for (var l = c._fulfill, h = c._reject, p = 0, f = t.length; f > p; ++p) {
                                var _ = t[p];
                                (void 0 !== _ || p in t) && e.cast(_)._then(l, h, void 0, c, null)
                            }
                            return c
                        }

                        var s = t("./util.js").isArray,
                            a = function(t) { return t.then(function(e) { return o(e, t) }) };
                        e.race = function(t) { return o(t, void 0) }, e.prototype
                            .race = function() { return o(this, void 0) }
                    }
                }, { "./util.js": 38 }
            ],
            30: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i, o) {
                        function s(t, r, n, s) {
                            this.constructor$(t), this._promise._captureStackTrace(), this
                                ._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === n, this
                                ._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this
                                ._valuesPhase = void 0;
                            var a = i(n, this._promise), u = !1, c = a instanceof e;
                            c &&
                            (a = a._target(), a._isPending()
                                ? a._proxyPromiseArray(this, -1)
                                : a._isFulfilled()
                                ? (n = a._value(), this._gotAccum = !0)
                                : (this._reject(a
                                    ._reason()), u = !0)), c || this._zerothIsAccum || (this._gotAccum = !0), this
                                ._callback = r, this._accum = n, u || this._init$(void 0, -5)
                        }

                        function a(t, e, r, i) {
                            if ("function" != typeof e)
                                return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var o = new s(t, e, r, i);
                            return o.promise()
                        }

                        var u = t("./util.js"), c = u.tryCatch, l = u.errorObj;
                        u.inherits(s, r), s.prototype._init = function() {}, s.prototype
                            ._resolveEmptyArray = function() {
                                (this._gotAccum || this._zerothIsAccum) &&
                                    this._resolve(null !== this._preservedValues ? [] : this._accum)
                            }, s.prototype._promiseFulfilled = function(t, r) {
                            var n = this._values;
                            n[r] = t;
                            var o,
                                s = this.length(),
                                a = this._preservedValues,
                                u = null !== a,
                                h = this._gotAccum,
                                p = this._valuesPhase;
                            if (!p) for (p = this._valuesPhase = new Array(s), o = 0; s > o; ++o) p[o] = 0;
                            if (o = p[r], 0 === r && this._zerothIsAccum
                                ? (this._accum = t, this._gotAccum = h = !0, p[r] = 0 === o ? 1 : 2)
                                : -1 === r
                                ? (this._accum = t, this._gotAccum = h = !0)
                                : 0 === o ? p[r] = 1 : (p[r] = 2, this._accum = t), h) {
                                for (var f, _ = this._callback, d = this._promise._boundTo, v = this._reducingIndex;
                                    s > v;
                                    ++v)
                                    if (o = p[v], 2 !== o) {
                                        if (1 !== o) return;
                                        if (t = n[v], this._promise
                                            ._pushContext(), u
                                            ? (a.push(t), f = c(_).call(d, t, v, s))
                                            : f = c(_).call(d, this._accum, t, v, s), this._promise
                                            ._popContext(), f === l) return this._reject(f.e);
                                        var y = i(f, this._promise);
                                        if (y instanceof e) {
                                            if (y = y._target(), y
                                                ._isPending()) return p[v] = 4, y._proxyPromiseArray(this, v);
                                            if (!y._isFulfilled()) return this._reject(y._reason());
                                            f = y._value()
                                        }
                                        this._reducingIndex = v + 1, this._accum = f
                                    } else this._reducingIndex = v + 1;
                                this._resolve(u ? a : this._accum)
                            }
                        }, e.prototype.reduce = function(t, e) { return a(this, t, e, null) }, e
                            .reduce = function(t, e, r, n) { return a(t, e, r, n) }
                    }
                }, { "./util.js": 38 }
            ],
            31: [
                function(t, e) {
                    "use strict";
                    var r;
                    if (t("./util.js").isNode) {
                        var n = process.version.split(".").map(Number);
                        r = 0 === n[0] && n[1] > 10 || n[0] > 0 ? global.setImmediate : process.nextTick
                    } else
                        "undefined" != typeof MutationObserver
                            ? (r = function(t) {
                                var e = document.createElement("div"), r = new MutationObserver(t);
                                return r.observe(e, { attributes: !0 }), function() { e.classList.toggle("foo") }
                            }, r.isStatic = !0)
                            : r = "undefined" != typeof setTimeout
                            ? function(t) { setTimeout(t, 0) }
                            : function() {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                            };
                    e.exports = r
                }, { "./util.js": 38 }
            ],
            32: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) { this.constructor$(t), this._promise._setIsSpreadable() }

                        var i = e.PromiseInspection, o = t("./util.js");
                        o.inherits(n, r), n.prototype._promiseResolved = function(t, e) {
                            this._values[t] = e;
                            var r = ++this._totalResolved;
                            r >= this._length && this._resolve(this._values)
                        }, n.prototype._promiseFulfilled = function(t, e) {
                            var r = new i;
                            r._bitField = 268435456, r._settledValue = t, this._promiseResolved(e, r)
                        }, n.prototype._promiseRejected = function(t, e) {
                            var r = new i;
                            r._bitField = 134217728, r._settledValue = t, this._promiseResolved(e, r)
                        }, e.settle = function(t) { return new n(t).promise() }, e.prototype
                            .settle = function() { return new n(this).promise() }
                    }
                }, { "./util.js": 38 }
            ],
            33: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n) {
                        function i(t) {
                            this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                        }

                        function o(t, e) {
                            if ((0 | e) !== e || 0 > e)
                                return n("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");
                            var r = new i(t), o = r.promise();
                            return r.setHowMany(e), r.init(), o
                        }

                        var s = t("./util.js"),
                            a = t("./errors.js").RangeError,
                            u = t("./errors.js").AggregateError,
                            c = s.isArray;
                        s.inherits(i, r), i.prototype._init = function() {
                            if (this._initialized) {
                                if (this._promise
                                    ._setIsSpreadable(), 0 === this._howMany) return void this._resolve([]);
                                this._init$(void 0, -5);
                                var t = c(this._values);
                                !this._isResolved() &&
                                    t &&
                                    this._howMany > this._canPossiblyFulfill() &&
                                    this._reject(this._getRangeError(this.length()))
                            }
                        }, i.prototype.init = function() { this._initialized = !0, this._init() }, i.prototype
                            .setUnwrap = function() { this._unwrap = !0 }, i.prototype
                            .howMany = function() { return this._howMany }, i.prototype
                            .setHowMany = function(t) { this._howMany = t }, i.prototype
                            ._promiseFulfilled = function(t) {
                                this._addFulfilled(t), this._fulfilled() === this.howMany() &&
                                (this._values.length = this.howMany(), this
                                    ._resolve(1 === this.howMany() && this._unwrap ? this._values[0] : this._values))
                            }, i.prototype._promiseRejected = function(t) {
                            if (this._addRejected(t), this.howMany() > this._canPossiblyFulfill()) {
                                for (var e = new u, r = this.length();
                                    r < this._values.length;
                                    ++r
                                ) e.push(this._values[r]);
                                this._reject(e)
                            }
                        }, i.prototype._fulfilled = function() { return this._totalResolved }, i.prototype
                            ._rejected = function() { return this._values.length - this.length() }, i.prototype
                            ._addRejected = function(t) { this._values.push(t) }, i.prototype
                            ._addFulfilled = function(t) { this._values[this._totalResolved++] = t }, i.prototype
                            ._canPossiblyFulfill = function() { return this.length() - this._rejected() }, i.prototype
                            ._getRangeError = function(t) {
                                var e = "Input array must contain at least " +
                                    this._howMany +
                                    " items but contains only " +
                                    t +
                                    " items";
                                return new a(e)
                            }, i.prototype._resolveEmptyArray = function() { this._reject(this._getRangeError(0)) }, e
                            .some = function(t, e) { return o(t, e) }, e.prototype
                            .some = function(t) { return o(this, t) }, e._SomePromiseArray = i
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            34: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) {
                            void 0 !== t
                                ? (t = t._target(), this._bitField = t._bitField, this._settledValue = t._settledValue)
                                : (this._bitField = 0, this._settledValue = void 0)
                        }

                        e.prototype.value = function() {
                            if (!this.isFulfilled())
                                throw new
                                    TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                            return this._settledValue
                        }, e.prototype.error = e.prototype.reason = function() {
                            if (!this.isRejected())
                                throw new
                                    TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                            return this._settledValue
                        }, e.prototype.isFulfilled = t.prototype
                            ._isFulfilled = function() { return(268435456 & this._bitField) > 0 }, e.prototype
                            .isRejected = t.prototype
                            ._isRejected = function() { return(134217728 & this._bitField) > 0 }, e
                            .prototype.isPending = t.prototype
                            ._isPending = function() { return 0 === (402653184 & this._bitField) }, e.prototype
                            .isResolved = t.prototype
                            ._isResolved = function() { return(402653184 & this._bitField) > 0 }, t
                            .prototype.isPending = function() { return this._target()._isPending() }, t.prototype
                            .isRejected = function() { return this._target()._isRejected() }, t.prototype
                            .isFulfilled = function() { return this._target()._isFulfilled() }, t.prototype
                            .isResolved = function() { return this._target()._isResolved() }, t.prototype
                            ._value = function() { return this._settledValue }, t.prototype
                            ._reason = function() { return this._unsetRejectionIsUnhandled(), this._settledValue }, t
                            .prototype.value = function() {
                                var t = this._target();
                                if (!t.isFulfilled())
                                    throw new
                                        TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                                return t._settledValue
                            }, t.prototype.reason = function() {
                            var t = this._target();
                            if (!t.isRejected())
                                throw new
                                    TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                            return t._unsetRejectionIsUnhandled(), t._settledValue
                        }, t.PromiseInspection = e
                    }
                }, {}
            ],
            35: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t, n) {
                            if (c(t)) {
                                if (t instanceof e) return t;
                                if (o(t)) {
                                    var l = new e(r);
                                    return t._then(l._fulfillUnchecked,
                                        l._rejectUncheckedCheckError,
                                        l._progressUnchecked,
                                        l,
                                        null), l
                                }
                                var h = a.tryCatch(i)(t);
                                if (h === u) {
                                    n && n._pushContext();
                                    var l = e.reject(h.e);
                                    return n && n._popContext(), l
                                }
                                if ("function" == typeof h) return s(t, h, n)
                            }
                            return t
                        }

                        function i(t) { return t.then }

                        function o(t) { return l.call(t, "_promise0") }

                        function s(t, n, i) {
                            function o(r) {
                                l &&
                                (t === r
                                    ? l._rejectCallback(e._makeSelfResolutionError(), !1, !0)
                                    : l._resolveCallback(r), l = null)
                            }

                            function s(t) { l && (l._rejectCallback(t, p, !0), l = null) }

                            function c(t) { l && "function" == typeof l._progress && l._progress(t) }

                            var l = new e(r), h = l;
                            i && i._pushContext(), l._captureStackTrace(), i && i._popContext();
                            var p = !0, f = a.tryCatch(n).call(t, o, s, c);
                            return p = !1, l && f === u && (l._rejectCallback(f.e, !0, !0), l = null), h
                        }

                        var a = t("./util.js"), u = a.errorObj, c = a.isObject, l = {}.hasOwnProperty;
                        return n
                    }
                }, { "./util.js": 38 }
            ],
            36: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) {
                            var e = this;
                            return e instanceof Number && (e = +e), clearTimeout(e), t
                        }

                        function i(t) {
                            var e = this;
                            throw e instanceof Number && (e = +e), clearTimeout(e), t
                        }

                        var o = t("./util.js"),
                            s = e.TimeoutError,
                            a = function(t, e) {
                                if (t.isPending()) {
                                    "string" != typeof e && (e = "operation timed out");
                                    var r = new s(e);
                                    o.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._cancel(r)
                                }
                            },
                            u = function(t) { return c(+this).thenReturn(t) },
                            c = e.delay = function(t, n) {
                                if (void 0 === n) {
                                    n = t, t = void 0;
                                    var i = new e(r);
                                    return setTimeout(function() { i._fulfill() }, n), i
                                }
                                return n = +n, e.resolve(t)._then(u, null, null, n, void 0)
                            };
                        e.prototype.delay = function(t) { return c(this, t) }, e.prototype.timeout = function(t, e) {
                            t = +t;
                            var r = this.then().cancellable();
                            r._cancellationParent = this;
                            var o = setTimeout(function() { a(r, e) }, t);
                            return r._then(n, i, void 0, o, void 0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            37: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            for (var r = t.length, n = 0; r > n; ++n) {
                                var i = t[n];
                                if (i.isRejected()) return e.reject(i.error());
                                t[n] = i._settledValue
                            }
                            return t
                        }

                        function s(t) { setTimeout(function() { throw t }, 0) }

                        function a(t) {
                            var e = n(t);
                            return e !== t &&
                                "function" == typeof t._isDisposable &&
                                "function" == typeof t._getDisposer &&
                                t._isDisposable() &&
                                e._setDisposable(t._getDisposer()), e
                        }

                        function u(t, r) {
                            function i() {
                                if (o >= u) return c.resolve();
                                var l = a(t[o++]);
                                if (l instanceof e && l._isDisposable()) {
                                    try {
                                        l = n(l._getDisposer().tryDispose(r), t.promise)
                                    } catch (h) {
                                        return s(h)
                                    }
                                    if (l instanceof e) return l._then(i, s, null, null, null)
                                }
                                i()
                            }

                            var o = 0, u = t.length, c = e.defer();
                            return i(), c.promise
                        }

                        function c(t) {
                            var e = new v;
                            return e._settledValue = t, e._bitField = 268435456, u(this, e).thenReturn(t)
                        }

                        function l(t) {
                            var e = new v;
                            return e._settledValue = t, e._bitField = 134217728, u(this, e).thenThrow(t)
                        }

                        function h(t, e, r) { this._data = t, this._promise = e, this._context = r }

                        function p(t, e, r) { this.constructor$(t, e, r) }

                        function f(t) {
                            return h.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                        }

                        var _ = t("./errors.js").TypeError, d = t("./util.js").inherits, v = e.PromiseInspection;
                        h.prototype.data = function() { return this._data }, h.prototype
                                .promise = function() { return this._promise }, h.prototype
                                .resource = function() {
                                    return this.promise().isFulfilled() ? this.promise().value() : null
                                },
                            h.prototype.tryDispose = function(t) {
                                var e = this.resource(), r = this._context;
                                void 0 !== r && r._pushContext();
                                var n = null !== e ? this.doDispose(e, t) : null;
                                return void 0 !== r && r._popContext(), this._promise._unsetDisposable(), this
                                    ._data = null, n
                            }, h.isDisposer = function(t) {
                                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                            }, d(p, h), p.prototype.doDispose = function(t, e) {
                                var r = this.data();
                                return r.call(t, t, e)
                            }, e.using = function() {
                                var t = arguments.length;
                                if (2 > t) return r("you must pass at least 2 arguments to Promise.using");
                                var i = arguments[t - 1];
                                if ("function" != typeof i
                                ) return r("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                t--;
                                for (var s = new Array(t), a = 0; t > a; ++a) {
                                    var u = arguments[a];
                                    if (h.isDisposer(u)) {
                                        var p = u;
                                        u = u.promise(), u._setDisposable(p)
                                    } else {
                                        var _ = n(u);
                                        _ instanceof e &&
                                            (u = _._then(f, null, null, { resources: s, index: a }, void 0))
                                    }
                                    s[a] = u
                                }
                                var d = e.settle(s).then(o).then(function(t) {
                                    d._pushContext();
                                    var e;
                                    try {
                                        e = i.apply(void 0, t)
                                    } finally {
                                        d._popContext()
                                    }
                                    return e
                                })._then(c, l, void 0, s, void 0);
                                return s.promise = d, d
                            }, e.prototype._setDisposable = function(t) {
                                this._bitField = 262144 | this._bitField, this._disposer = t
                            }, e.prototype._isDisposable = function() { return(262144 & this._bitField) > 0 }, e
                                .prototype
                                ._getDisposer = function() { return this._disposer }, e.prototype
                                ._unsetDisposable = function() {
                                    this._bitField = -262145 & this._bitField, this._disposer = void 0
                                }, e.prototype.disposer = function(t) {
                                if ("function" == typeof t) return new p(t, this, i());
                                throw new _
                            }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            38: [
                function(t, e, r) {
                    "use strict";

                    function n() {
                        try {
                            return C.apply(this, arguments)
                        } catch (t) {
                            return F.e = t, F
                        }
                    }

                    function i(t) { return C = t, n }

                    function o(t) { return"string" == typeof t ? t : "" + t }

                    function s(t) {
                        return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
                    }

                    function a(t) { return!s(t) }

                    function u(t) { return s(t) ? new Error(o(t)) : t }

                    function c(t, e) {
                        var r, n = t.length, i = new Array(n + 1);
                        for (r = 0; n > r; ++r) i[r] = t[r];
                        return i[r] = e, i
                    }

                    function l(t, e, r) {
                        if (!w.isES5) return{}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                        var n = Object.getOwnPropertyDescriptor(t, e);
                        return null != n ? null == n.get && null == n.set ? n.value : r : void 0
                    }

                    function h(t, e, r) {
                        if (s(t)) return t;
                        var n = { value: r, configurable: !0, enumerable: !1, writable: !0 };
                        return w.defineProperty(t, e, n), t
                    }

                    function p(t) { throw t }

                    function f(t) {
                        try {
                            if ("function" == typeof t) {
                                var e = w.keys(t.prototype);
                                return e.length > 0 && !(1 === e.length && "constructor" === e[0])
                            }
                            return!1
                        } catch (r) {
                            return!1
                        }
                    }

                    function _(t) {
                        function e() {}

                        return e.prototype = t, e
                    }

                    function d(t) { return S.test(t) }

                    function v(t, e, r) {
                        for (var n = new Array(t), i = 0; t > i; ++i) n[i] = e + i + r;
                        return n
                    }

                    function y(t) {
                        try {
                            return t + ""
                        } catch (e) {
                            return"[no string representation]"
                        }
                    }

                    function g(t) {
                        try {
                            h(t, "isOperational", !0)
                        } catch (e) {
                        }
                    }

                    function m(t) {
                        return null == t
                            ? !1
                            : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0
                    }

                    function j(t) {
                        return t instanceof Error && w.propertyIsWritable(t, "stack")
                    }

                    function b(t) { return{}.toString.call(t) }

                    var w = t("./es5.js"),
                        k = "undefined" == typeof navigator,
                        E = function() {
                            try {
                                var t = {};
                                return w.defineProperty(t, "f", { get: function() { return 3 } }), 3 === t.f
                            } catch (e) {
                                return!1
                            }
                        }(),
                        F = { e: {} },
                        C,
                        T = function(t, e) {
                            function r() {
                                this.constructor = t, this.constructor$ = e;
                                for (var r in e.prototype)
                                    n.call(e.prototype, r) &&
                                        "$" !== r.charAt(r.length - 1) &&
                                        (this[r + "$"] = e.prototype[r])
                            }

                            var n = {}.hasOwnProperty;
                            return r.prototype = e.prototype, t.prototype = new r, t.prototype
                        },
                        x = function() { return"string" !== this }.call("string"),
                        P = function() {
                            return w.isES5
                                ? function(t, e) {
                                    for (var r = [],
                                        n = Object.create(null),
                                        i = Object(e).includeHidden ? Object.getOwnPropertyNames : Object.keys;
                                        null != t;
                                    ) {
                                        var o;
                                        try {
                                            o = i(t)
                                        } catch (s) {
                                            return r
                                        }
                                        for (var a = 0; a < o.length; ++a) {
                                            var u = o[a];
                                            if (!n[u]) {
                                                n[u] = !0;
                                                var c = Object.getOwnPropertyDescriptor(t, u);
                                                null != c && null == c.get && null == c.set && r.push(u)
                                            }
                                        }
                                        t = w.getPrototypeOf(t)
                                    }
                                    return r
                                }
                                : function(t) {
                                    var e = [];
                                    for (var r in t) e.push(r);
                                    return e
                                }
                        }(),
                        S = /^[a-z$_][a-z$_0-9]*$/i,
                        R = function() {
                            return"stack" in new Error
                                ? function(t) { return j(t) ? t : new Error(y(t)) }
                                : function(t) {
                                    if (j(t)) return t;
                                    try {
                                        throw new Error(y(t))
                                    } catch (e) {
                                        return e
                                    }
                                }
                        }(),
                        A = {
                            isClass: f,
                            isIdentifier: d,
                            inheritedDataKeys: P,
                            getDataPropertyOrDefault: l,
                            thrower: p,
                            isArray: w.isArray,
                            haveGetters: E,
                            notEnumerableProp: h,
                            isPrimitive: s,
                            isObject: a,
                            canEvaluate: k,
                            errorObj: F,
                            tryCatch: i,
                            inherits: T,
                            withAppended: c,
                            asString: o,
                            maybeWrapAsError: u,
                            wrapsPrimitiveReceiver: x,
                            toFastProperties: _,
                            filledRange: v,
                            toString: y,
                            canAttachTrace: j,
                            ensureErrorObject: R,
                            originatesFromRejection: m,
                            markAsOriginatingFromRejection: g,
                            classString: b,
                            isNode: "undefined" != typeof process && "[object process]" === b(process).toLowerCase()
                        };
                    try {
                        throw new Error
                    } catch (O) {
                        A.lastLineError = O
                    }
                    e.exports = A
                }, { "./es5.js": 14 }
            ]
        },
        {},
        [4])(4)
}), "undefined" != typeof window && null !== window
    ? window.P = window.Promise
    : "undefined" != typeof self && null !== self && (self.P = self.Promise);