Type.registerNamespace("NLG");
NLG.EmailData = function() {};
NLG.inr = function() {};
NLG.inr.registerInterface("NLG.inr");
NLG.ts = function(n, t) {
    this.$3_0 = n;
    this.$A_0 = t
};
NLG.ri = function() {};
NLG.rem = function(n, t, i, r, u) {
    if (this.$L_0 = n, this.$R_0 = t, this.$x_0 = i, this.$G_0 = r, this.$K_0 = u, u) {
        var e = n.$9_0[r], f = n.$9_0[r + u - 1];
        this.$3_0 = e.$3_0;
        this.$A_0 = f.$3_0 + f.$A_0 - this.$3_0
    } else
        this.$A_0 = 0, this.$3_0 = r < n.$9_0.length
            ? n.$9_0[r].$3_0
            : n.$9_0.length > 0 ? n.$9_0[n.$9_0.length - 1].$3_0 + n.$9_0[n.$9_0.length - 1].$A_0 : 0
};
NLG.cr = function(n, t, i, r, u) {
    if (this.$p_0 = n, this.$G_0 = r.$G_0 + t, this.$K_0 = i, this
        .$3_0 = this.$K_0 > 0
        ? r.$L_0.$9_0[this.$G_0].$3_0
        : this.$G_0 === r.$L_0.$9_0.length
        ? r.$L_0.$9_0.length ? r.$L_0.$9_0[r.$L_0.$9_0.length - 1].$3_0 + r.$L_0.$9_0[r.$L_0.$9_0.length - 1].$A_0 : 0
        : r.$L_0.$9_0[this.$G_0].$3_0, this.$K_0 > 0) {
        var e = r.$L_0.$9_0[this.$G_0], f = r.$L_0.$9_0[this.$G_0 + this.$K_0 - 1];
        this.$A_0 = f.$3_0 + f.$A_0 - e.$3_0
    } else this.$A_0 = 0;
    this.$q_0 = u
};
NLG.sim = function(n, t) {
    if (!n) throw NLG.ex.$s("spans");
    if (null === t) throw NLG.ex.$s("parentString");
    this.$9_0 = n;
    this.$19_0 = t
};
NLG.a = function(n, t) {
    var f, a, l, s, u, h, e, v, y, o, p, w;
    this.$M_0 = n;
    var r = n.$5_0, i = r[t], c = r[i];
    for (++i, this.$2A_0 = new Array(c), this.$29_0 = new Array(c), this
            .$1c_0 = new Array(c), f = 0;
        f < c;
        ++f)
        for (this.$2A_0[f] = n.$H_0(r[i]), ++i, this.$29_0[f] = r[i], ++i, a = r[i], ++i, this
                .$1c_0[f] = new Array(a), l = 0;
            l < a;
            ++l) this.$1c_0[f][l] = n.$H_0(r[i]), ++i;
    for (s = r[i], ++i, this.$2C_0 = new Array(s), this.$1e_0 = new Array(s), this.$1f_0 = new Array(s), this
            .$1K_0 = new Array(s), u = 0;
        u < s;
        ++u)
        for (this.$2C_0[u] = n.$H_0(r[i]), ++i, h = r[i], ++i, this.$1e_0[u] = new Array(h), this
                .$1f_0[u] = new Array(h), this.$1K_0[u] = new Array(h), e = 0;
            e < h;
            ++e)
            this.$1e_0[u][e] = n.$H_0(r[i]), ++i, this.$1f_0[u][e] = r[i], this.$1K_0[u][e] = (y = this
                .$12_0(v = { val: i }), i = v.val, y), NLG.a.$v(this.$1K_0[u][e]);
    for (this.$Q_0 = r[i], ++i, this.$26_0 = new Array(this.$Q_0), this.$27_0 = new Array(this.$Q_0), this
            .$1a_0 = new Array(this.$Q_0), o = 0;
        o < this.$Q_0;
        ++o)
        this.$26_0[o] = n.$H_0(r[i]), ++i, this.$27_0[o] = r[i], this.$1a_0[o] = (w = this.$12_0(p = { val: i }), i = p
            .val, w), NLG.a.$v(this.$1a_0[o])
};
NLG.a.$1p = function(n) { return(n & 16383) >= 16 && (n & 16384) != 16384 && (n & 32768) != 32768 };
NLG.a.$J = function(n) { return(n & 32768) == 32768 };
NLG.a.$Z = function(n) {
    if (!NLG.a.$J(n)) throw NLG.ex.$8("listTypeID");
    return n & -32769
};
NLG.a.$2N = function(n, t, i) {
    switch (n) {
    case 1:
        return t === i;
    case 2:
        return t === i;
    case 3:
        return t === i;
    case 5:
        return t === i;
    case 9:
        return t.$1X_0(i);
    default:
        return NLG.a.$J(n) ? t.$1X_0(i) : NLG.a.$1p(n) ? t === i : t.$1X_0(i)
    }
};
NLG.a.$v = function(n) {
    NLG.fb.isInstanceOfType(n)
        ? n.$25_0()
        : NLG.lv.isInstanceOfType(n) ? n.$25_0() : NLG.sv.isInstanceOfType(n) && n.$25_0()
};
NLG.a.$2U = function(n) { return n - 16 };
NLG.a.$1n = function(n) { return(n & -16385) - 16 };
NLG.a.prototype = {
    $2Z_0: function(n) {
        for (var t = 0; t < this.$Q_0; ++t) if (this.$26_0[t] === n) return t;
        return-1
    },
    $1U_0: function(n) {
        if (n < 0 || n >= this.$Q_0) throw NLG.ex.$8("attrID");
        return this.$27_0[n]
    },
    $1V_0: function(n, t) {
        if (!this.$24_0(n)) throw NLG.ex.$8("structTypeID");
        var i = this.$1f_0[NLG.a.$1n(n)];
        if (t < 0 || t >= i.length) throw NLG.ex.$8("iField");
        return i[t]
    },
    $1F_0: function(n, t) {
        var u, i, f, r, e;
        if (null === t || t === undefined) return!1;
        switch (n) {
        case 1:
            return String.isInstanceOfType(t);
        case 2:
            return Boolean.isInstanceOfType(t);
        case 3:
            return Number.isInstanceOfType(t);
        case 5:
            return Number.isInstanceOfType(t);
        case 9:
            return NLG.fb.isInstanceOfType(t);
        default:
            if (NLG.a.$J(n)) return u = t, !!u && u.$h_0 === NLG.a.$Z(n);
            if (NLG.a.$1p(n)) {
                try {
                    i = t
                } catch (o) {
                    return!1
                }
                f = NLG.a.$2U(n);
                r = this.$1c_0[f].length;
                switch (this.$29_0[f]) {
                case 0:
                    return i >= 0 && i < r;
                case 1:
                    return!(i & -1 << r - 1);
                case 2:
                    return!!i && !(i & -1 << r);
                default:
                    throw NLG.ex.$6();
                }
            } else return e = t, !!e && e.$r_0 === n
        }
    },
    $3B_0: function(n) {
        switch (n) {
        case 1:
        case 2:
        case 3:
        case 5:
        case 9:
            return!0;
        default:
            return NLG.a.$J(n) ? this.$3B_0(NLG.a.$Z(n)) : NLG.a.$1p(n) ? this.$3A_0(n) : this.$24_0(n)
        }
    },
    $3A_0: function(n) {
        var t = NLG.a.$2U(n);
        return t >= 0 && t < this.$2A_0.length
    },
    $24_0: function(n) {
        var t = NLG.a.$1n(n);
        return t >= 0 && t < this.$2C_0.length
    },
    $1T_0: function(n) { return this.$1a_0[n] },
    $33_0: function(n) { return this.$1e_0[NLG.a.$1n(n)].length },
    $37_0: function(n, t) { return this.$1K_0[NLG.a.$1n(n)][t] },
    $Q_0: 0,
    $12_0: function(n) {
        var t = this.$M_0.$5_0, i = t[n.val], h, r, u, c, l, a, v, y, f, e, p, w, b, o, s, k;
        if (++n.val, NLG.a.$J(i)) {
            for (h = t[n.val], ++n.val, r = new NLG
                    .lv(this, NLG.a.$Z(i)), u = 0;
                u < h;
                ++u) Array.add(r.$0_0, this.$12_0(n));
            return r
        }
        switch (i) {
        case 1:
            return c = t[n.val], ++n.val, this.$M_0.$H_0(c);
        case 2:
            return l = t[n.val] === 1, ++n.val, l;
        case 3:
            return a = t[n.val], ++n.val, a;
        case 5:
            return v = t[n.val], ++n.val, this.$M_0.$1Q_0[v];
        case 9:
            for (y = t[n.val], ++n.val, f = new NLG
                    .fb(this), e = 0;
                e < y;
                ++e) p = t[n.val], ++n.val, f.$d_0(p, this.$12_0(n));
            return f;
        default:
            if (NLG.a.$1p(i)) return w = t[n.val], ++n.val, w;
            for (b = t[n.val], ++n.val, o = new NLG
                    .sv(this, i), s = 0;
                s < b;
                ++s) k = t[n.val], ++n.val, o.$2L_0(k, this.$12_0(n));
            return o
        }
    },
    $M_0: null,
    $26_0: null,
    $27_0: null,
    $1a_0: null,
    $2A_0: null,
    $29_0: null,
    $1c_0: null,
    $2C_0: null,
    $1f_0: null,
    $1e_0: null,
    $1K_0: null
};
NLG.fb = function(n) {
    if (!n) throw NLG.ex.$s("annotations");
    this.$4_0 = n
};
NLG.fb.prototype = {
    $N_0: function(n) {
        if (n < 0 || n >= this.$4_0.$Q_0) throw NLG.ex.$8("attributeID");
        if (!this.$F_0) return null;
        var t = this.$F_0[n];
        return t === undefined ? null : t
    },
    $d_0: function(n, t) {
        if (this.$P_0) throw NLG.ex.$O("");
        if (n < 0 || n >= this.$4_0.$Q_0) throw NLG.ex.$8("attributeID");
        if (!this.$4_0.$1F_0(this.$4_0.$1U_0(n), t)) throw NLG.ex.$8("value");
        NLG.a.$v(t);
        this.$F_0 || (this.$F_0 = new Array(this.$4_0.$Q_0));
        this.$F_0[n] = t
    },
    get_$2e_0: function() {
        var i;
        if (!this.$F_0) return!1;
        for (var t = this.$F_0, r = t.length, n = 0; n < r; ++n) if (i = t[n], i) return!0;
        return!1
    },
    $1A_0: function(n) {
        if (this.$P_0) throw NLG.ex.$O("");
        if (n < 0 || n >= this.$4_0.$Q_0) throw NLG.ex.$8("attributeID");
        this.$F_0 && (this.$F_0[n] = null)
    },
    $l_0: function(n) {
        if (this.$P_0) throw NLG.ex.$O("");
        if (!n) throw NLG.ex.$8("other");
        if (n.$4_0 !== this.$4_0) throw NLG.ex.$8("other");
        this.$F_0 || (this.$F_0 = new Array(this.$4_0.$Q_0));
        for (var t = 0; t < this.$4_0.$Q_0; ++t) this.$F_0[t] = n.$F_0 ? n.$F_0[t] : undefined
    },
    $P_0: !1,
    $1X_0: function(n) {
        var t, r, i;
        if (this === n) return!0;
        if (!n || this.$4_0 !== n.$4_0) return!1;
        for (t = 0; t < this.$4_0.$Q_0; ++t)
            if (r = this
                    .$F_0
                    ? this.$F_0[t]
                    : undefined, i = n
                    .$F_0
                    ? n.$F_0[t]
                    : undefined, r === undefined
                    ? i !== undefined
                    : i === undefined || !NLG.a.$2N(this.$4_0.$1U_0(t), r, i)
            ) return!1;
        return!0
    },
    $10_0: function() {
        var n = new NLG.fb(this.$4_0);
        return n.$l_0(this), n
    },
    $25_0: function() {
        if (!this.$P_0 && (this.$P_0 = !0, this.$F_0)) for (var n = 0; n < this.$4_0.$Q_0; ++n) NLG.a.$v(this.$F_0[n])
    },
    $4_0: null,
    $F_0: null
};
NLG.sv = function(n, t) {
    if (!n) throw NLG.ex.$s("annotations");
    if (!n.$24_0(t)) throw NLG.ex.$8("structTypeID");
    this.$4_0 = n;
    this.$o_0 = this.$4_0.$33_0(t);
    this.$r_0 = t
};
NLG.sv.prototype = {
    $r_0: 0,
    $u_0: function(n) {
        if (n < 0 || n >= this.$o_0) throw NLG.ex.$8("iField");
        return this.$X_0 && this.$X_0[n] !== undefined ? this.$X_0[n] : this.$4_0.$37_0(this.$r_0, n)
    },
    $2L_0: function(n, t) {
        if (this.$P_0) throw NLG.ex.$O("");
        if (n < 0 || n >= this.$o_0) throw NLG.ex.$8("iField");
        if (!this.$4_0.$1F_0(this.$4_0.$1V_0(this.$r_0, n), t)) throw NLG.ex.$8("value");
        this.$X_0 || (this.$X_0 = new Array(this.$o_0));
        this.$X_0[n] = t
    },
    $P_0: !1,
    $1X_0: function(n) {
        if (this === n) return!0;
        if (!n || this.$4_0 !== n.$4_0 || this.$r_0 !== n.$r_0) return!1;
        for (var t = 0; t < this.$o_0; ++t)
            if (!NLG.a.$2N(this.$4_0.$1V_0(this.$r_0, t), this.$u_0(t), n.$u_0(t))) return!1;
        return!0
    },
    $10_0: function() {
        var t = new NLG.sv(this.$4_0, this.$r_0), n;
        if (this.$X_0) for (t.$X_0 = new Array(this.$o_0), n = 0; n < this.$o_0; ++n) t.$X_0[n] = this.$X_0[n];
        return t
    },
    $25_0: function() {
        if (!this.$P_0 && (this.$P_0 = !0, this.$X_0)) for (var n = 0; n < this.$o_0; ++n) NLG.a.$v(this.$X_0[n])
    },
    $4_0: null,
    $o_0: 0,
    $X_0: null
};
NLG.lv = function(n, t) {
    this.$4_0 = n;
    this.$h_0 = t;
    this.$0_0 = new Array(0)
};
NLG.lv.prototype = {
    $h_0: 0,
    $0_0: null,
    $P_0: !1,
    $1X_0: function(n) {
        if (this === n) return!0;
        if (!n || n.$4_0 !== this.$4_0 || n.$h_0 !== this.$h_0 || n.$0_0.length !== this.$0_0.length) return!1;
        for (var t = 0; t < this.$0_0.length; ++t) if (!NLG.a.$2N(this.$h_0, this.$0_0[t], n.$0_0[t])) return!1;
        return!0
    },
    $10_0: function() {
        for (var r, t = new NLG.lv(this.$4_0, this.$h_0), i = this.$0_0, u = i.length, n = 0;
            n < u;
            ++n
        ) r = i[n], Array.add(t.$0_0, r);
        return t
    },
    $25_0: function() {
        var i;
        if (!this.$P_0) {
            this.$P_0 = !0;
            for (var t = this.$0_0, r = t.length, n = 0; n < r; ++n) i = t[n], NLG.a.$v(i)
        }
    },
    $4_0: null
};
NLG.snr = function(n, t, i) {
    this.g = this.$3U_0;
    this.$2i_0 = n;
    this.$2g_0 = t;
    this.$16_0 = i
};
NLG.snr.prototype = {
    $3U_0: function(n) {
        if (null === n || !n.length) throw NLG.ex.$8("name");
        var t = n.charCodeAt(0), i = n.substr(1);
        return t === 1 && i === this.$2i_0 ? this.$2g_0 : this.$16_0 ? this.$16_0.g(n) : null
    },
    $2i_0: null,
    $2g_0: null,
    $16_0: null
};
NLG.aq = function() {};
NLG.aq.$B = function(n, t, i, r) {
    var s = n.$5_0,
        o = s[t],
        gr = s[o],
        ui,
        a,
        fi,
        ei,
        oi,
        si,
        l,
        li,
        k,
        yi,
        bi,
        ft,
        et,
        gi,
        st,
        ht,
        nr,
        tr,
        d,
        v,
        er,
        at,
        p,
        cr,
        wt,
        w,
        vr,
        ni,
        nt,
        c,
        tt,
        ii,
        dr;
    if (o += 3, ui = s[o] === 1, ++o, !ui && !n.$2_0.$1F_0(gr, i)) throw NLG.ex.$8("obj");
    for (a = s[o], ++o, fi = o, o += a, ei = o, o += a, oi = o, o += a, si = o, l = 0; l < a; ++l) {
        var e = s[fi + l], f = s[ei + l], h = si + s[oi + l], u = h < s.length ? s[h] : 0;
        switch (f) {
        case 1:
            if (i = r ? r.g(n.$H_0(u)) : null, !i) throw NLG.ex.$O("");
            break;
        case 2:
            i = !!r && !!r.g(n.$H_0(u));
            break;
        case 3:
            if (e === 9) i = i.$N_0(u), null === i && (i = n.$2_0.$1T_0(u));
            else {
                for (var hi = new NLG.lv(n
                             .$2_0,
                             n.$2_0.$1U_0(u)),
                    ci = i.$0_0,
                    nu = ci.length,
                    it = 0;
                    it < nu;
                    ++it) li = ci[it], k = li.$N_0(u), null === k && (k = n.$2_0.$1T_0(u)), Array.add(hi.$0_0, k);
                i = hi
            }
            break;
        case 4:
            if (NLG.a.$J(e)) {
                for (var ai = new NLG.lv(n.$2_0, n.$2_0.$1V_0(NLG.a.$Z(e), u)), vi = i.$0_0, tu = vi.length, rt = 0;
                    rt < tu;
                    ++rt) yi = vi[rt], Array.add(ai.$0_0, yi.$u_0(u));
                i = ai
            } else i = i.$u_0(u);
            break;
        case 5:
            NLG.aq.$B(n, u, i, r) ? i = NLG.aq.$B(n, s[h + 1], i, r) : s[h + 2] && (i = NLG.aq.$B(n, s[h + 2], i, r));
            break;
        case 6:
            if (NLG.a.$J(e)) {
                for (var pi = new NLG.lv(n
                             .$2_0,
                             2),
                    wi = i.$0_0,
                    iu = wi.length,
                    ut = 0;
                    ut < iu;
                    ++ut) bi = wi[ut], Array.add(pi.$0_0, NLG.f.$E(n, u, bi, r));
                i = pi
            } else i = NLG.f.$E(n, u, i, r);
            break;
        case 43:
            i = NLG.f.$E(n, u, i, r);
            break;
        case 7:
            throw NLG.ex.$6();
        case 45:
            if (e === 9)
                ft = new NLG.fb(n.$2_0), ft.$l_0(i), et = new NLG.fb(n.$2_0), NLG.as
                    .$13(n, u, null, new NLG.snr("Input", ft, new NLG.snr("Output", et, r))), i = et;
            else {
                for (var ki = new NLG.lv(n
                             .$2_0,
                             9),
                    di = i.$0_0,
                    ru = di.length,
                    ot = 0;
                    ot < ru;
                    ++ot)
                    gi = di[ot], st = new NLG.fb(n.$2_0), st.$l_0(gi), ht = new NLG.fb(n.$2_0), NLG.as
                        .$13(n, u, null, new NLG.snr("Input", st, new NLG.snr("Output", ht, r))), Array
                        .add(ki.$0_0, ht);
                i = ki
            }
            break;
        case 46:
            i = (tr = n.$2_0.$12_0(nr = { val: h }), h = nr.val, tr);
            NLG.a.$v(i);
            break;
        case 13:
        case 14:
            if (d = i, v = f === 14 && !u ? 0 : NLG.aq.$B(n, u, i, r), v < 0 || v >= d.$0_0.length) throw NLG.ex.$O("");
            else i = d.$0_0[f === 14 ? d.$0_0.length - v - 1 : v];
            break;
        case 15:
            i = i.$0_0.length;
            break;
        case 24:
            var ir = NLG.aq.$B(n, u, i, r), y = i.$10_0(), rr = NLG.aq.$f(n, u);
            if (NLG.a.$J(rr))
                for (var ur = ir, fr = ur.$0_0, uu = fr.length, ct = 0;
                    ct < uu;
                    ++ct
                ) er = fr[ct], Array.add(y.$0_0, NLG.aq.$1s(n.$2_0, er, ur.$h_0, y.$h_0));
            else Array.add(y.$0_0, NLG.aq.$1s(n.$2_0, ir, rr, y.$h_0));
            i = y;
            break;
        case 27:
            for (var or = new NLG.lv(n
                         .$2_0,
                         NLG.a.$Z(e)),
                sr = i.$0_0,
                fu = sr.length,
                lt = 0;
                lt < fu;
                ++lt) at = sr[lt], NLG.f.$E(n, u, at, r) && Array.add(or.$0_0, at);
            i = or;
            break;
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
            if (p = NLG.aq.$B(n, u, i, r), NLG.a.$J(e)) {
                var g = i, vt = NLG.a.$Z(e), yt = new NLG.lv(n.$2_0, vt);
                if (NLG.a.$J(NLG.aq.$f(n, u))) {
                    if (wt = p, g.$0_0.length !== wt.$0_0.length) throw NLG.ex.$O("");
                    for (w = 0; w < g.$0_0.length; ++w)
                        Array.add(yt.$0_0, NLG.aq.$1j(f, g.$0_0[w], wt.$0_0[w], vt === 5))
                } else
                    for (var hr = g
                                 .$0_0,
                        eu = hr.length,
                        pt = 0;
                        pt < eu;
                        ++pt) cr = hr[pt], Array.add(yt.$0_0, NLG.aq.$1j(f, cr, p, vt === 5));
                i = yt
            } else if (NLG.a.$J(NLG.aq.$f(n, u))) {
                for (var ou = p, lr = new NLG.lv(n.$2_0, e), ar = ou.$0_0, su = ar.length, bt = 0;
                    bt < su;
                    ++bt
                ) vr = ar[bt], Array.add(lr.$0_0, NLG.aq.$1j(f, i, vr, e === 5));
                i = lr
            } else i = NLG.aq.$1j(f, i, p, e === 5);
            break;
        case 40:
        case 41:
            if (e === 2 && NLG.aq.$f(n, u) === 2 && (i ? f === 41 : f === 40)) i = f === 41;
            else if (NLG.a.$J(e)) {
                var b = i, kt = new NLG.lv(n.$2_0, 2), dt = NLG.aq.$B(n, u, i, r);
                if (NLG.a.$J(NLG.aq.$f(n, u))) {
                    if (nt = dt, b.$0_0.length !== nt.$0_0.length) throw NLG.ex.$O("");
                    for (c = 0; c < b.$0_0.length; ++c)
                        Array.add(kt.$0_0, f === 40 ? nt.$0_0[c] && b.$0_0[c] : nt.$0_0[c] || b.$0_0[c])
                } else
                    for (var yr = b
                                 .$0_0,
                        hu = yr.length,
                        gt = 0;
                        gt < hu;
                        ++gt) ni = yr[gt], Array.add(kt.$0_0, f === 40 ? dt && ni : dt || ni);
                i = kt
            } else if (tt = NLG.aq.$B(n, u, i, r), NLG.a.$J(NLG.aq.$f(n, u))) {
                for (var cu = tt, pr = new NLG.lv(n.$2_0, 2), wr = cu.$0_0, lu = wr.length, ti = 0;
                    ti < lu;
                    ++ti
                ) ii = wr[ti], Array.add(pr.$0_0, f === 40 ? ii && i : ii || i);
                i = pr
            } else i = f === 40 ? tt && i : tt || i;
            break;
        case 42:
            if (NLG.a.$J(e)) {
                for (var br = new NLG.lv(n
                             .$2_0,
                             2),
                    kr = i.$0_0,
                    au = kr.length,
                    ri = 0;
                    ri < au;
                    ++ri) dr = kr[ri], Array.add(br.$0_0, !dr);
                i = br
            } else i = !i;
            break;
        default:
            if (f >= 0 && f <= 47) throw NLG.ex.$6();
            else throw NLG.ex.$6();
        }
    }
    return i
};
NLG.aq.$e = function(n, t, i, r, u, f, e) {
    var h = n.$5_0,
        o = h[t],
        fr = h[o],
        gt,
        ni,
        ti,
        c,
        it,
        l,
        ii,
        y,
        s,
        p,
        rt,
        ri,
        ui,
        ut,
        ft,
        vi,
        et,
        at,
        b,
        k,
        tr,
        bt,
        g,
        nt,
        ir,
        kt,
        tt,
        a,
        v,
        dt,
        rr,
        ur,
        ot;
    if (++o, gt = h[o], ++o, ni = !!h[o], ++o, !ni) throw NLG.ex.$O("");
    if (ti = !!h[o], ++o, !i) {
        if (!ti && !n.$2_0.$1F_0(fr, r)) throw NLG.ex.$8("obj");
        if (!n.$2_0.$1F_0(gt, u)) throw NLG.ex.$8("obj");
    }
    if (c = h[o], ++o, i < 0 || i >= c) throw NLG.ex.$8("iStep");
    it = h[o + i];
    o += c;
    l = h[o + i];
    o += c;
    ii = o;
    o += c;
    y = o + h[ii + i];
    s = y < h.length ? h[y] : 0;
    switch (l) {
    case 1:
        if (p = f ? f.g(n.$H_0(s)) : null, !p) throw NLG.ex.$O("");
        return rt = u, ut = (ui = NLG.aq.$15(t, i, c, ri = { val: e }), e = ri
            .val, ui), ut && (rt = NLG.aq.$e(n, ut.$j_0, ut.$k_0, p, u, f, e)), p !== rt && p.$l_0(rt), p;
    case 3:
        if (it === 9) {
            var st = r, fi = u, ei, oi, ht = (oi = NLG.aq.$15(t, i, c, ei = { val: e }), e = ei.val, oi);
            return ht &&
            (ft = st.$N_0(s), null === ft && (ft = n.$2_0.$1T_0(s)), fi = NLG.aq
                .$e(n, ht.$j_0, ht.$k_0, NLG.aq.$1N(ft), u, f, e)), st.$d_0(s, fi), st
        }
        var w = r, si = u, hi, ci, ct = (ci = NLG.aq.$15(t, i, c, hi = { val: e }), e = hi.val, ci);
        if (ct) {
            for (var li = new NLG.lv(n
                         .$2_0,
                         n.$2_0.$1U_0(s)),
                ai = w.$0_0,
                er = ai.length,
                lt = 0;
                lt < er;
                ++lt) vi = ai[lt], et = vi.$N_0(s), null === et && (et = n.$2_0.$1T_0(s)), Array.add(li.$0_0, et);
            si = NLG.aq.$e(n, ct.$j_0, ct.$k_0, li, u, f, e)
        }
        if (at = si, at.$0_0.length !== w.$0_0.length) throw NLG.ex.$O("");
        for (b = 0; b < w.$0_0.length; ++b)
            k = w.$0_0[b], k.$P_0 && (k = k.$10_0(), w.$0_0[b] = k), k.$d_0(s, at.$0_0[b]);
        return w;
    case 4:
        if (NLG.a.$J(it)) {
            var d = r, bi = u, ki, di, pt = (di = NLG.aq.$15(t, i, c, ki = { val: e }), e = ki.val, di);
            if (pt) {
                for (var gi = new NLG.lv(n.$2_0, n.$2_0.$1V_0(NLG.a.$Z(it), s)), nr = d.$0_0, or = nr.length, wt = 0;
                    wt < or;
                    ++wt) tr = nr[wt], Array.add(gi.$0_0, tr.$u_0(s));
                bi = NLG.aq.$e(n, pt.$j_0, pt.$k_0, gi, u, f, e)
            }
            if (bt = bi, bt.$0_0.length !== d.$0_0.length) throw NLG.ex.$O("");
            for (g = 0; g < d.$0_0.length; ++g)
                nt = d.$0_0[g], nt.$P_0 && (nt = nt.$10_0(), d.$0_0[g] = nt), nt.$2L_0(s, bt.$0_0[g]);
            return d
        }
        var vt = r, yi = u, pi, wi, yt = (wi = NLG.aq.$15(t, i, c, pi = { val: e }), e = pi.val, wi);
        return yt && (yi = NLG.aq.$e(n, yt.$j_0, yt.$k_0, NLG.aq.$1N(vt.$u_0(s)), u, f, e)), vt.$2L_0(s, yi), vt;
    case 5:
        return ir = NLG.aq
                .$B(n, s, r, f), i < c - 1 && (e = new NLG.aq.c(t, i + 1, e)),
            ir
                ? NLG.aq.$e(n, h[y + 1], 0, r, u, f, e)
                : h[y + 2]
                ? NLG.aq.$e(n, h[y + 2], 0, r, u, f, e)
                : (kt = u, tt = null, e && (tt = new NLG.aq.c(e.$j_0, e.$k_0, null), e = e.$2I_0),
                    tt && (kt = NLG.aq.$e(n, tt.$j_0, tt.$k_0, NLG.aq.$1N(r), u, f, e)), kt);
    case 13:
    case 14:
        if (a = r, v = l === 14 && !s ? 0 : NLG.aq.$B(n, s, r, f), v < 0 || v >= a.$0_0.length) throw NLG.ex.$O("");
        return dt = u, ot = (ur = NLG.aq.$15(t, i, c, rr = { val: e }), e = rr
            .val, ur), ot &&
            (dt = NLG.aq.$e(n, ot.$j_0, ot.$k_0, NLG.aq.$1N(a.$0_0[l === 14 ? a.$0_0.length - v - 1 : v]), u, f, e)), a
            .$0_0[l === 14 ? a.$0_0.length - v - 1 : v] = dt, a;
    default:
        if (l >= 0 && l <= 47) throw NLG.ex.$6();
        else throw NLG.ex.$6();
    }
};
NLG.aq.$f = function(n, t) {
    var i = n.$5_0, r = i[t];
    return i[r + 1]
};
NLG.aq.$1s = function(n, t, i, r) {
    var s, l;
    if (i === r) return t;
    if (i === 3) {
        if (r === 5) return t
    } else if (i === 5) {
        if (r === 3) return t
    } else if (NLG.a.$J(i) && NLG.a.$J(r))
        if (NLG.a.$Z(i) === 3) {
            if (NLG.a.$Z(r) === 5) {
                for (var a = t, e = new NLG.lv(n, 5), o = a.$0_0, v = o.length, u = 0;
                    u < v;
                    ++u
                ) s = o[u], Array.add(e.$0_0, s);
                return e
            }
        } else if (NLG.a.$Z(i) === 5 && NLG.a.$Z(r) === 3) {
            for (var y = t, h = new NLG.lv(n, 3), c = y.$0_0, p = c.length, f = 0;
                f < p;
                ++f
            ) l = c[f], Array.add(h.$0_0, l);
            return h
        }
    throw NLG.ex.$O("");
};
NLG.aq.$1j = function(n, t, i, r) {
    var f = Number.isInstanceOfType(t) ? t : t, e = Number.isInstanceOfType(i) ? i : i, u;
    switch (n) {
    case 34:
        u = f + e;
        break;
    case 35:
        u = f - e;
        break;
    case 36:
        u = f * e;
        break;
    case 37:
        u = f / e;
        break;
    case 38:
        u = f % e;
        break;
    case 39:
        u = Math.pow(f, e);
        break;
    default:
        throw NLG.ex.$6();
    }
    return r ? u : u
};
NLG.aq.$15 = function(n, t, i, r) {
    if (t < i - 1) return new NLG.aq.c(n, t + 1, null);
    if (r.val) {
        var u = r.val;
        return r.val = r.val.$2I_0, u
    }
    return null
};
NLG.aq.$1N = function(n) {
    var t, i, r;
    return NLG.fb.isInstanceOfType(n)
        ? (t = n, t.$P_0 && (n = t.$10_0()))
        : NLG.lv.isInstanceOfType(n)
        ? (i = n, i.$P_0 && (n = i.$10_0()))
        : NLG.sv.isInstanceOfType(n) && (r = n, r.$P_0 && (n = r.$10_0())), n
};
NLG.aq.c = function(n, t, i) {
    this.$j_0 = n;
    this.$k_0 = t;
    this.$2I_0 = i
};
NLG.as = function() {};
NLG.as.$13 = function(n, t, i, r) {
    var u = n.$5_0, e = u[t], h = u[e], v, y, p, o, s, f, w, c, k, a, d, g;
    for (++e, v = e, e += h, y = e, e += h, p = e, o = 0; o < h; ++o) {
        s = u[v + o];
        f = p + u[y + o];
        switch (s) {
        case 1:
        case 2:
            w = NLG.aq.$B(n, u[f + 1], s === 2 ? NLG.aq.$B(n, u[f], i, r) : i, r);
            NLG.aq.$e(n, u[f], 0, i, NLG.aq.$1s(n.$2_0, w, NLG.aq.$f(n, u[f + 1]), NLG.aq.$f(n, u[f])), r, null);
            break;
        case 3:
            if (c = NLG.aq.$B(n, u[f], i, r), NLG.aq.$f(n, u[f]) === 9) c.$1A_0(u[f + 1]);
            else for (var b = c.$0_0, nt = b.length, l = 0; l < nt; ++l) k = b[l], k.$1A_0(u[f + 1]);
            break;
        case 6:
            a = new NLG.fb(n.$2_0);
            u[f + 1] > 0 && a.$l_0(NLG.aq.$B(n, u[f + 1], i, r));
            r = new NLG.snr(n.$H_0(u[f]), a, r);
            break;
        case 8:
            NLG.aq.$B(n, u[f], i, r) ? NLG.as.$13(n, u[f + 1], i, r) : u[f + 2] && NLG.as.$13(n, u[f + 2], i, r);
            break;
        case 10:
            d = NLG.aq.$B(n, u[f], i, r);
            g = NLG.aq.$B(n, u[f + 1], i, r);
            NLG.as.$13(n, u[f + 2], i, new NLG.snr("Input", d, new NLG.snr("Output", g, r)));
            break;
        default:
            if (s >= 0 && s <= 10) throw NLG.ex.$6();
            else throw NLG.ex.$6();
        }
    }
};
NLG.cg = function(n, t) {
    this.$M_0 = n;
    this.$D_0 = n.$5_0;
    var i = this.$D_0[t];
    if (this.$p_0 = n.$H_0(this.$D_0[i]), ++i, this.$D_0[i]) throw NLG.ex.$6();
    ++i;
    this.$28_0 = this.$D_0[i];
    ++i;
    this.$1G_0 = this.$D_0[i];
    ++i;
    this.$2B_0 = i;
    this.$2h_0 = i + this.$1G_0;
    this.$1J_0 = i + 2 * this.$1G_0;
    this.$D_0[this.$2B_0] === 2 && (this.$1o_0 = this.$M_0.$2c_0(this.$D_0[this.$D_0[this.$1J_0]]))
};
NLG.cg.$3D = function(n, t) {
    for (var u, r, f, o, s, i = Array.clone(n), e = 0; e < t.length; ++e)
        if (u = t[e], r = NLG.cg.$2u(i, u), r < 0) ~r !== i.length || u.$A_0 || Array.add(i, u);
        else if (u.$A_0) {
            for (f = 1; r + f < i.length; ++f) {
                if (i[r + f].$3_0 >= u.$3_0 + u.$A_0) break;
                for (o = 0; o < e; ++o)
                    if (t[o] === i[r + f]) {
                        f = 0;
                        break
                    }
                if (!f) break
            }
            if (f > 0) {
                for (s = 0; s < f; ++s) Array.removeAt(i, r);
                Array.insert(i, r, u)
            }
        } else {
            while (r > 0 && i[r - 1].$3_0 === u.$3_0) --r;
            Array.insert(i, r, u)
        }
    return i
};
NLG.cg.$2u = function(n, t) {
    for (var i = 0, u = n.length - 1, r, f; i <= u;) {
        if (r = i + (u - i >> 1), f = n[r].$3_0 - t.$3_0, !f) return r;
        f < 0 ? i = r + 1 : u = r - 1
    }
    return~i
};
NLG.cg.prototype = {
    $p_0: null,
    $1o_0: null,
    $3E_0: function(n, t, i, r, u) {
        for (var e,
            l,
            o,
            a,
            p,
            y,
            h = new NLG.fb(this.$M_0.$2_0),
            c = new NLG.snr("Whiteboard", h, null),
            s = r || NLG.cg.$2K,
            f = 0;
            f < this.$1G_0;
            ++f) {
            if (u > 0 && (new Date).getTime() > u) throw NLG.ex.$2r();
            if ((e = this.$D_0[this.$2B_0 + f], f || e !== 1 && e !== 2 || !r) &&
                (l = this.$D_0[this.$2h_0 + f], !l || NLG.f.$E(this.$M_0, l, h, c))) {
                if (o = null, a = !1, e === 1) throw NLG.ex.$6();
                else if (e === 2) s = this.$M_0.$2c_0(this.$D_0[this.$D_0[this.$1J_0 + f]]).$2s_0(n, t, i);
                else if (e === 4) {
                    p = this.$D_0[this.$D_0[this.$1J_0 + f]];
                    o = new Array(0);
                    for (var w = s, b = w.length, v = 0;
                        v < b;
                        ++v
                    ) y = w[v], NLG.f.$E(this.$M_0, p, y, c) || Array.add(o, y)
                } else if (e === 3) throw NLG.ex.$6();
                else if (e === 5) o = this.$2t_0(n, t, i, s, h, c, this.$D_0[this.$1J_0 + f], u), a = !0;
                else throw NLG.ex.$O("");
                a && f !== this.$1G_0 - 1 ? o.length && (s = NLG.cg.$3D(s, o)) : s = o
            }
        }
        return h
    },
    $2t_0: function(n, t, i, r, u, f, e, o) {
        var tt = this.$D_0[e], g, h, p, v, y, w, b, k, nt, s, d;
        for (++e, g = new NLG.sim(r, n), h = 0; h < r.length;) {
            if (o > 0 && (new Date).getTime() > o) throw NLG.ex.$2r();
            for (var a = -1, c = null, it = r.length - h, l = 0; l < tt; ++l)
                if (p = this.$D_0[e + 4 * l], !p || NLG.f.$E(this.$M_0, p, u, f)) {
                    if (v = this.$M_0.$2d_0(this.$D_0[e + 4 * l + 1]), v.$18_0.$2G_0 > it) continue;
                    else if (c && v.$18_0.$Y_0 <= c.$K_0) continue;
                    y = v.$2b_0(g, 0, r.length, h, !1, 0, t, i, f);
                    y && (!c || y.$K_0 > c.$K_0) && (a = l, c = y)
                }
            if (a >= 0) {
                if (w = this
                    .$D_0[e + 4 * a + 2], w && NLG.as.$13(this.$M_0, w, u, new NLG.renr(this.$M_0.$2_0, c, f)), b = this
                    .$D_0[e + 4 * a + 3], k = !1, b)
                    for (nt = this.$M_0.$H_0(b), s = c.$t_0; s; s = s.$q_0)
                        if (nt === s.$p_0) {
                            s.$G_0 + s.$K_0 > h && (k = !0, h = s.$G_0 + s.$K_0);
                            break
                        }
                k || (h += Math.max(c.$K_0, 1))
            } else ++h
        }
        return d = u.$N_0(this.$28_0), u.$1A_0(this.$28_0), d ? this.$3T_0(d) : NLG.cg.$2K
    },
    $3T_0: function(n) {
        for (var i, t, u = new Array(0), f = n.$0_0, e = f.length, r = 0;
            r < e;
            ++r
        )
            (i = f[r], null !== i.$N_0(0) && null !== i.$N_0(1)) &&
            (t = new NLG.ts(i.$N_0(0), i.$N_0(1)), t.$T_0 = new NLG.fb(this.$M_0.$2_0), t.$T_0.$l_0(i), t.$T_0
                .$1A_0(0), t.$T_0.$1A_0(1), t.$T_0.$1A_0(2), Array.add(u, t));
        return u
    },
    $M_0: null,
    $28_0: 0,
    $D_0: null,
    $1G_0: 0,
    $2B_0: 0,
    $2h_0: 0,
    $1J_0: 0
};
NLG.f = function() {};
NLG.f.$E = function(n, t, i, r) {
    try {
        var o = n.$5_0, u = o[t], f = o[u];
        switch (f - f % 100) {
        case 0:
            for (var h = o[u + 1], e = f === 1, s = 0;
                s < h;
                ++s
            ) if (e = NLG.f.$E(n, o[u + 2 + s], i, r), e ? f === 2 : f === 1) return e;
            return f === 3 && (e = !e), e;
        case 100:
            return NLG.f.$3Q(n, u, i, r);
        case 200:
            return NLG.f.$3L(n, u, i, r);
        case 300:
            return NLG.f.$3O(n, u, Number.isInstanceOfType(i) ? i : i, r);
        case 400:
            return NLG.f.$3M(n, u, i, r);
        case 500:
            return NLG.f.$3R(n, u, i, r);
        case 600:
            return NLG.f.$3N(n, u, i, r);
        case 700:
            return NLG.f.$3K(n, u, i, r);
        case 800:
            return NLG.f.$3J(n, u, i, r);
        case 900:
            return NLG.f.$3S(n, u, i, r);
        case 1e3:
            return NLG.f.$3P(n, u, i, r);
        default:
            return!1
        }
    } catch (c) {
        throw NLG.ex.$8("objToTest");
    }
};
NLG.f.$3Q = function(n, t, i, r) {
    var f = n.$5_0, e = f[t], u;
    if (e === 101) return n.$34_0(f[t + 1]).test(i);
    if (e === 102) throw NLG.ex.$6();
    else {
        u = NLG.aq.$B(n, f[t + 1], null, r);
        f[t + 2] === 1 && (i = i.toUpperCase(), u = u.toUpperCase());
        switch (e) {
        case 103:
            return i === u;
        case 104:
            return i.indexOf(u) >= 0;
        case 105:
            return i.startsWith(u);
        case 106:
            return i.endsWith(u);
        case 107:
            return u.indexOf(i) >= 0;
        case 108:
            return u.startsWith(i);
        case 109:
            return u.endsWith(i);
        default:
            throw NLG.ex.$6();
        }
    }
};
NLG.f.$3L = function(n, t, i, r) {
    var u = n.$5_0, f = u[t];
    switch (f) {
    case 201:
        return i === (u[t + 1] === 1);
    case 202:
        return i === NLG.aq.$B(n, u[t + 1], null, r);
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3O = function(n, t, i, r) {
    var f = n.$5_0, e = f[t], u = n.$1Q_0[f[t + 1]];
    f[t + 2] > 0 && (u += NLG.aq.$B(n, f[t + 2], null, r));
    switch (e) {
    case 301:
        return i === u;
    case 302:
        return i < u;
    case 303:
        return i <= u;
    case 304:
        return i > u;
    case 305:
        return i >= u;
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3M = function(n, t, i, r) {
    var e = n.$5_0, s = e[t], o = e[t + 1] === 1, u = e[t + 2], f;
    switch (s) {
    case 401:
        return o ? u ? !!(i & u) : !i : i === u;
    case 402:
        return o ? (i & u) === u : i < 32 && (1 << i & u) === u;
    case 403:
        return o ? !!(i & u) : i < 32 && !!(1 << i & u);
    default:
        f = NLG.aq.$B(n, u, null, r);
        switch (s) {
        case 404:
            return i === f;
        case 405:
            return 0 != (i & f);
        case 406:
            return i === (i & f);
        case 407:
            return f === (i & f);
        default:
            throw NLG.ex.$6();
        }
    }
};
NLG.f.$3R = function(n, t, i, r) {
    var u = n.$5_0, f = u[t];
    switch (f) {
    case 501:
        return NLG.f.$E(n, u[t + 2], i.$u_0(u[t + 1]), r);
    case 502:
        return i.$1X_0(NLG.aq.$B(n, u[t + 1], null, r));
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3N = function(n, t, i, r) {
    var o = n.$5_0, u = o[t], h;
    switch (u) {
    case 601:
    case 602:
        for (var f = u === 602, s = i.$0_0, c = s.length, e = 0;
            e < c;
            ++e
        ) if (h = s[e], f = NLG.f.$E(n, o[t + 1], h, r), f ? u === 601 : u === 602) return f;
        return f;
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3K = function(n, t, i, r) {
    var u = n.$5_0, o = u[t], f, e;
    switch (o) {
    case 701:
        return i.get_$2e_0();
    case 702:
        return!i.get_$2e_0();
    case 703:
        return null !== i.$N_0(u[t + 1]);
    case 704:
        return null === i.$N_0(u[t + 1]);
    case 705:
        return f = i.$N_0(u[t + 1]), null !== f && NLG.f.$E(n, u[t + 2], f, r);
    case 706:
        return e = i.$N_0(u[t + 1]), null === e || NLG.f.$E(n, u[t + 2], e, r);
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3J = function(n, t, i, r) {
    var u = n.$5_0, l = u[t], s, c;
    switch (l) {
    case 802:
        for (var o = i.$0_0, a = o.length, f = 0; f < a; ++f) if (s = o[f], NLG.f.$E(n, u[t + 1], s, r)) return!0;
        return!1;
    case 803:
        for (var h = i.$0_0, v = h.length, e = 0; e < v; ++e) if (c = h[e], !NLG.f.$E(n, u[t + 1], c, r)) return!1;
        return i.$0_0.length > 0;
    case 801:
        return i.$0_0.length > 0;
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.$3S = function(n, t, i, r) {
    var u = n.$5_0, f = u[t];
    if (f !== 901) throw NLG.ex.$6();
    return(!u[t + 2] || NLG.f.$E(n, u[t + 2], i.$19_0.substr(i.$1B_0.$3_0, i.$1B_0.$A_0), r)) &&
        (!u[t + 3] || NLG.f.$E(n, u[t + 3], i.$1B_0.$T_0 || new NLG.fb(n.$2_0), r)) &&
        (!u[t + 4] || NLG.f.$E(n, u[t + 4], i.$1B_0.$3_0, r)) &&
        (!u[t + 5] || NLG.f.$E(n, u[t + 5], i.$1B_0.$A_0, r))
};
NLG.f.$3P = function(n, t, i, r) {
    var c = n.$5_0, y = c[t], a, f;
    switch (y) {
    case 1001:
        var v = n.$H_0(c[t + 1]), l = v.charCodeAt(0), p = v.substr(1), e = -1, s = -1, o = -1, h = -1, u = i.$2p_0;
        switch (l) {
        case 4:
            e = u.$G_0;
            s = u.$K_0;
            o = u.$3_0;
            h = u.$A_0;
            break;
        case 5:
            e = i.$n_0;
            s = u.$G_0 - i.$n_0;
            o = u.$R_0;
            h = u.$3_0 - u.$R_0;
            break;
        case 6:
            e = u.$G_0 + u.$K_0;
            s = i.$n_0 + i.$1P_0 - e;
            o = u.$3_0 + u.$A_0;
            h = u.$R_0 + u.$x_0 - o;
            break;
        case 1:
        case 2:
        case 3:
            for (a = !1, f = u.$t_0; f; f = f.$q_0)
                if (p === f.$p_0) {
                    a = !0;
                    l === 1
                        ? (e = f.$G_0, s = f.$K_0, o = f.$3_0, h = f.$A_0)
                        : l === 2
                        ? (e = i.$n_0, s = f.$G_0 - i.$n_0, o = u.$R_0, h = f.$3_0 - u.$R_0)
                        : (e = f.$G_0 + f.$K_0, s = i.$n_0 + i.$1P_0 - e, o = f.$3_0 + f.$A_0, h = u.$R_0 + u.$x_0 - o);
                    break
                }
            if (!a) return!1;
            break;
        case 7:
            e = i.$n_0;
            s = i.$1P_0;
            o = u.$R_0;
            h = u.$x_0;
            break;
        default:
            throw NLG.ex.$6();
        }
        return null !== n.$2d_0(c[t + 2]).$2b_0(u.$L_0, e, s, e, !0, 2, o, h, r);
    case 1002:
        return NLG.aq.$B(n, c[t + 1], null, r);
    default:
        throw NLG.ex.$6();
    }
};
NLG.f.t = function(n, t) {
    this.$1B_0 = n;
    this.$19_0 = t
};
NLG.iu = function() {};
NLG.of = function(n) {
    var t = new NLG.ri, i, r, c, u, f, e, a, o, v, y, s, p, w, h, ut;
    for (t.$b_0 = 0, i = NLG.of.$V(n, null, t), this.$I_0 = new Array(i), r = 0;
    r < i;
    ++r)
    this.$I_0[r] = NLG.of.$1E(n, t);
    for (c = NLG.of.$V(n, null, t), this.$5_0 = new Array(c), u = i, this.$5_0[0] = u, f = 0;
    f < i - 1;
    ++f)
    u += NLG.of.$1E(n, t), this.$5_0[f + 1] = u;
    for (var d = NLG.of.$V(n, null, t), g = new Array(d), l = 0;
    l < d;
    ++l)
    g[l] = NLG.of.$V(n, null, t);
    for (e = i; e < c; ++e) this.$5_0[e] = NLG.of.$V(n, g, t);
    for (a = NLG.of.$V(n, null, t), this.$1Q_0 = new Array(a), o = 0;
    o < a;
    ++o)
    v = n.indexOf("D", t.$b_0), this.$1Q_0[o] = parseFloat(n.substr(t.$b_0, v - t.$b_0)), t.$b_0 = v + 1;
    for (y = NLG.of.$V(n, null, t), this.$2Q_0 = new Array(y), s = 0;
    s < y;
    ++s)
    for (p = NLG.of.$V(n, null, t), w = new Array(p), this.$2Q_0[s] = w, h = 0;
    h < p;
    ++h)
    w[h] = NLG.of.$1E(n, t);
    for (var nt = NLG.of.$V(n, null, t), tt = new Array(nt), b = 0;
    b < nt;
    ++b)
    tt[b] = NLG.of.$V(n, null, t);
    for (var it = NLG.of.$V(n, null, t), rt = new Array(it), k = 0;
    k < it;
    ++k)
    rt[k] = tt[NLG.of.$1E(n, t)];
    ut = String.fromCharCode.apply(null, rt);
    this.$a_0 = new Array(i);
    this.$39_0(ut)
};
NLG.of.$V = function(n, t, i) {
    var r = NLG.of.$1u(n.charCodeAt(i.$b_0));
    if (++i.$b_0, r === 92) return 0 - NLG.of.$V(n, null, i);
    if (r === 91) return t[NLG.of.$1E(n, i) + 27];
    if (r >= 64) return t[r - 64];
    for (var f = 0, e = 0, u = r;;) {
        if (f |= (u & 31) << 5 * e, u & 32) break;
        ++e;
        u = NLG.of.$1u(n.charCodeAt(i.$b_0));
        ++i.$b_0
    }
    return f
};
NLG.of.$1E = function(n, t) {
    for (var r = 0, i;;) if (i = NLG.of.$1u(n.charCodeAt(t.$b_0)), ++t.$b_0, r += i, i < 92) break;
    return r
};
NLG.of.$1u = function(n) {
    var t = n - 32;
    return n > 92 ? t - 2 : n > 34 ? t - 1 : t
};
NLG.of.prototype = {
    $2_0: null,
    $30_0: function(n) {
        for (var i, t = 0; t < this.$I_0.length; ++t)
            if (this.$I_0[t] === 8 && (i = this.$a_0[t], i.$p_0 === n)) return i;
        return null
    },
    $5_0: null,
    $2Q_0: null,
    $1Q_0: null,
    $H_0: function(n) { return this.$a_0[n] },
    $34_0: function(n) { return this.$a_0[n] },
    $2d_0: function(n) { return this.$a_0[n] },
    $2c_0: function(n) { return this.$a_0[n] },
    $39_0: function(n) {
        for (var s, r, h, u, e, t, o, f, i = 0;
            i < this.$I_0.length;
            ++i
        ) this.$I_0[i] === 1 && (s = this.$5_0[i], this.$a_0[i] = n.substr(this.$5_0[s], this.$5_0[s + 1]));
        for (this.$2_0 = new NLG
                .a(this, 0), r = 0;
            r < this.$I_0.length;
            ++r)
            this.$I_0[r] === 2 &&
            (h = this.$5_0[r], this
                .$a_0[r] = new RegExp(this.$H_0(this.$5_0[h]), this.$5_0[h + 1] === 1 ? "i" : ""));
        for (u = 0; u < this.$I_0.length; ++u) this.$I_0[u] === 3 && (this.$a_0[u] = new NLG.sre(this, u));
        for (e = 0; e < this.$I_0.length; ++e) if (this.$I_0[e] === 4) throw NLG.ex.$6();
        for (t = 0; t < this.$I_0.length; ++t)
            if (this.$I_0[t] === 5) throw NLG.ex.$6();
            else this.$I_0[t] === 6 && (this.$a_0[t] = new NLG.tk(this, t));
        for (o = 0; o < this.$I_0.length; ++o) if (this.$I_0[o] === 7) throw NLG.ex.$6();
        for (f = 0; f < this.$I_0.length; ++f) this.$I_0[f] === 8 && (this.$a_0[f] = new NLG.cg(this, f))
    },
    $I_0: null,
    $a_0: null
};
NLG.renr = function(n, t, i) {
    this.g = this.$3U_0;
    this.$4_0 = n;
    this.$7_0 = t;
    this.$16_0 = i
};
NLG.renr.prototype = {
    $3U_0: function(n) {
        var i, l, r, u, f, t, e, s, h, o, c;
        if (null === n || !n.length) throw NLG.ex.$8("name");
        if (i = n.charCodeAt(0), l = n.substr(1), i === 7 || i === 4 || i === 5 || i === 6) {
            switch (i) {
            case 7:
                r = this.$7_0.$R_0;
                u = this.$7_0.$x_0;
                break;
            case 4:
                r = this.$7_0.$3_0;
                u = this.$7_0.$A_0;
                break;
            case 5:
                r = this.$7_0.$R_0;
                u = this.$7_0.$3_0 - this.$7_0.$R_0;
                break;
            case 6:
                r = this.$7_0.$3_0 + this.$7_0.$A_0;
                u = this.$7_0.$R_0 + this.$7_0.$x_0 - r;
                break;
            default:
                throw NLG.ex.$6();
            }
            return f = new NLG.fb(this.$4_0), i === 4 &&
                this.$7_0.$K_0 === 1 &&
                this.$7_0.$L_0.$9_0[this.$7_0.$G_0].$T_0 &&
                f.$l_0(this.$7_0.$L_0.$9_0[this.$7_0.$G_0].$T_0), f.$d_0(0, r), f.$d_0(1, u), f
                .$d_0(2, this.$7_0.$L_0.$19_0.substr(r, u)), f
        }
        for (t = this.$7_0.$t_0; t; t = t.$q_0)
            if (l === t.$p_0) {
                h = -1;
                switch (i) {
                case 2:
                    e = this.$7_0.$R_0;
                    s = t.$3_0 - this.$7_0.$R_0;
                    break;
                case 3:
                    e = t.$3_0 + t.$A_0;
                    s = this.$7_0.$R_0 + this.$7_0.$x_0 - e;
                    break;
                case 1:
                    e = t.$3_0;
                    s = t.$A_0;
                    t.$K_0 === 1 && (h = t.$G_0);
                    break;
                default:
                    throw NLG.ex.$6();
                }
                return o = new NLG.fb(this.$4_0), h >= 0 && (c = this.$7_0.$L_0.$9_0[h], c.$T_0 && o.$l_0(c.$T_0)), o
                    .$d_0(0, e), o.$d_0(1, s), o.$d_0(2, this.$7_0.$L_0.$19_0.substr(e, s)), o
            }
        return this.$16_0 ? this.$16_0.g(n) : null
    },
    $4_0: null,
    $7_0: null,
    $16_0: null
};
NLG.bfm = function() {};
NLG.bfm.$3C = function(n, t, i, r, u, f, e, o, s, h, c) {
    var v, g, nt, tt, it, l, y, p, a, w, b, d, rt;
    if (!n) throw NLG.ex.$s("nfa");
    if (!t) throw NLG.ex.$s("sreInputManager");
    if (i < 0) throw NLG.ex.$8("iFirstItem");
    if (r < 0) throw NLG.ex.$8("cTotalItems");
    if (u < (e ? i - 1 : i) || u > (e ? i + r - 1 : i + r)) throw NLG.ex.$8("iStartMatchFrom");
    if (v = e ? u - i + 1 : i + r - u, !(it = NLG.bfm
        .$3H(n, e, g = { val: v }, nt = { val: u }, tt = { val: f }, i, r), v = g.val, u = nt.val, f = tt
        .val, it)) return null;
    for (l = NLG.bfm.$31(), l.$1v_0 = !0, l.$23_0(n, v), l.$20_0 = e, l.$2M_0 = o, l.$22_0 = i, l.$2T_0 = r, l
            .$2X_0 = n.$1D_0.length > 0, l.$1z_0 = n.$1R_0.length > 0, l.$21_0 = f, l
            .$1g_0 = f ? 2147483647 : 0, y = null, p = -1, l.$1W_0 = e ? u + 1 : u - 1, l.$1Y_0 = u, l.$z_0 = 0, l.$S_0
            .$2Y_0(n.$1C_0[0], !0, -1), l.$S_0.get_$1O_0() && (y = l.$S_0.$2a_0(), p = 0, o === 2 && (v = 0)), a = 0;
        a < v;
        ++a) {
        w = e ? u - a : u + a;
        l.$1W_0 = w;
        l.$1Y_0 = e ? w - 1 : w + 1;
        l.$z_0 = a + 1;
        for (var ut = t
                     .$9_0[w],
            ft = l.$S_0.get_$2H_0(),
            k = 0;
            k < ft;
            ++k)
            if ((b = l.$S_0.$36_0(k), b !== 1) &&
                (d = n.$1C_0[b * 2 + 1] & 4194303, d === NLG.nfa.$2j ||
                    NLG.f.$E(n.$1i_0, n.$1r_0[d], new NLG.f.t(ut, t.$19_0), c)) &&
                (l.$U_0.$2Y_0(n.$1C_0[b * 2], !b, k), l.$U_0.$1h_0)) break;
        if (l.$U_0.get_$1O_0() && (y = l.$U_0.$2a_0(), p = a + 1 - y.$w_0, o === 2)) break;
        if (a === v - 1) break;
        else if (l.$U_0.get_$2H_0() < 2 && (!l.$U_0.get_$2H_0() || l.$U_0.get_$1O_0())) break;
        else rt = l.$S_0, l.$S_0 = l.$U_0, l.$U_0 = rt, l.$U_0.$2S_0()
    }
    return l.$1v_0 = !1, p < 0 ? null : o === 2 ? NLG.bfm.$2q : NLG.bfm.$2w(n, e, u, y, p, t, s, h, l)
};
NLG.bfm.$3H = function(n, t, i, r, u, f, e) {
    if (n.$2G_0 > i.val) return!1;
    if (n.$2m_0)
        if (t) {
            if (!u.val && n.$Y_0 < i.val) return!1;
            u.val && n.$Y_0 < 2147483647 && i.val > n.$Y_0 && (r.val -= i.val - n.$Y_0, i.val -= i.val - n.$Y_0)
        } else {
            if (r.val > f) return!1;
            u.val = !1
        }
    if (n.$2l_0)
        if (t) {
            if (r.val < f + e - 1) return!1;
            u.val = !1
        } else {
            if (!u.val && n.$Y_0 < i.val) return!1;
            u.val && n.$Y_0 < 2147483647 && i.val > n.$Y_0 && (r.val += i.val - n.$Y_0, i.val -= i.val - n.$Y_0)
        }
    return!0
};
NLG.bfm.$2w = function(n, t, i, r, u, f, e, o, s) {
    for (var c, v, a = t ? i - r.$w_0 - u + 1 : i + r.$w_0, h = new NLG.rem(f, e, o, a, u), y = n.$1m_0.length - 1;
        y >= 0;
        --y) NLG.bfm.$2O(h, n.$1m_0[y], a, u);
    for (c = n.$1D_0.length - 1; c >= 0; --c) r.$11_0 & 1 << c && NLG.bfm.$2O(h, n.$1D_0[c], a, u);
    if (s.$1z_0)
        for (v = r.$m_0; v !== -1;) {
            var l = s.$W_0[v], p = l.$2n_0, w = t ? i - l.$14_0 - p + 1 : i + l.$14_0;
            h.$t_0 = new NLG.cr(n.$1R_0[l.$1M_0], w - a, p, h, h.$t_0);
            v = l.$q_0
        }
    return h
};
NLG.bfm.$2O = function(n, t, i, r) {
    var f, u = t.$2V_0;
    t.$1S_0 >= 0 ? (f = i + t.$1S_0, u < 0 && (u = r - t.$1S_0 - t.$1w_0)) : f = i + r - t.$1w_0 - u;
    n.$t_0 = new NLG.cr(t.$p_0, f - i, u, n, n.$t_0)
};
NLG.bfm.$31 = function() {
    for (var i, n = null, r = NLG.bfm.$1k, u = r.length, t = 0; t < u; ++t) i = r[t], i.$1v_0 || (n = i);
    return n || (n = new NLG.bfm.m, NLG.bfm.$1k[NLG.bfm.$1k.length] = n), n
};
NLG.bfm.m = function() { this.$W_0 = new Array(100) };
NLG.bfm.m.prototype = {
    $23_0: function(n, t) {
        this.$c_0 = n;
        this.$S_0 || (this.$S_0 = new NLG.bfm.s(this));
        this.$U_0 || (this.$U_0 = new NLG.bfm.s(this));
        this.$S_0.$23_0();
        this.$U_0.$23_0();
        this.$1I_0 = 0;
        this.$2R_0 = t
    },
    $S_0: null,
    $U_0: null,
    $1v_0: !1,
    $c_0: null,
    $20_0: !1,
    $2M_0: 0,
    $22_0: 0,
    $2T_0: 0,
    $1W_0: 0,
    $1Y_0: 0,
    $2R_0: 0,
    $z_0: 0,
    $1g_0: 0,
    $2X_0: !1,
    $1z_0: !1,
    $21_0: !1,
    $32_0: function() {
        return this.$W_0[this.$1I_0] || (this.$W_0[this.$1I_0] = new NLG.bfm.c), ++this.$1I_0, this.$1I_0 - 1
    },
    $1I_0: 0
};
NLG.bfm.c = function() {};
NLG.bfm.e = function() {};
NLG.bfm.s = function(n) {
    this.$C_0 = new Array(50);
    this.$1H_0 = -1;
    this.$17_0 = new Array(50);
    this.$1_0 = n
};
NLG.bfm.s.prototype = {
    $23_0: function() {
        this.$2f_0 = this.$1_0.$c_0.$2o_0;
        this.$2S_0()
    },
    $2S_0: function() {
        this.$1b_0 = 0;
        this.$1H_0 = -1;
        this.$1h_0 = !1;
        for (var t = (this.$2f_0 >> 5) + 1, n = 0; n < t; ++n) this.$17_0[n] = 0
    },
    get_$2H_0: function() { return this.$1b_0 },
    get_$1O_0: function() { return this.$1H_0 >= 0 },
    $1h_0: !1,
    $36_0: function(n) { return this.$C_0[n].$1l_0 },
    $2a_0: function() {
        var t = this.$C_0[this.$1H_0], n = new NLG.bfm.e;
        return n.$1l_0 = t.$1l_0, n.$w_0 = t.$w_0, n.$i_0 = t.$i_0, n.$m_0 = t.$m_0, n.$11_0 = t.$11_0, n
    },
    $2Y_0: function(n, t, i) {
        var l = this.$1_0.$2R_0 - this.$1_0.$z_0,
            a = !!(n & NLG.nfa.$1y) && n !== NLG.nfa.$1t,
            h = a ? 0 : n === NLG.nfa.$1t ? -1 : this.$1_0.$c_0.$g_0[n] - 1,
            v = t && this.$1_0.$21_0,
            e,
            f,
            u,
            r,
            o,
            y,
            c,
            s;
        for (v && ++h, e = 0; e <= h; ++e) {
            if (v && e === h)
                if (this.get_$1O_0()) break;
                else f = -1, u = -1, r = 0;
            else
                a
                    ? (f = -1, u = n & ~NLG.nfa.$1y, r = u & 2097151)
                    : (o = this.$1_0.$c_0.$g_0[n + 1 + e], o & NLG.nfa.$1x
                        ? (f = -1, u = o & ~NLG.nfa.$1x)
                        : (f = o, u = this.$1_0.$c_0.$g_0[f]), r = u & 2097151);
            if (!(this.$17_0[r >> 5] & 1 << r % 32)) {
                if (y = this.$1_0.$c_0.$1C_0[r * 2 + 1], (y >> 22 & 511) > l) {
                    this.$17_0[r >> 5] |= 1 << r % 32;
                    continue
                }
                if (!l && r !== 1) {
                    this.$17_0[r >> 5] |= 1 << r % 32;
                    continue
                }
                if ((u === -1 || (c = u >> 22 & 255, !c || this.$3G_0(c))) &&
                    (this
                        .$17_0[r >> 5] |= 1 << r % 32, s = 0, !this.$1_0.$21_0 ||
                        !(i >= 0) ||
                        (s = t ? this.$1_0.$z_0 : this.$1_0.$S_0.$C_0[i].$w_0, !(s > this.$1_0.$1g_0))) &&
                    (this.$2x_0(r,
                        i,
                        f >= 0 && u & 2097152 ? this.$1_0.$c_0.$g_0[f + 1] : 0,
                        f >= 0 && u & NLG.nfa.$2W ? this.$1_0.$c_0.$g_0[f + (u & 2097152 ? 1 : 0) + 1] : -1,
                        s), this.$1h_0)) break
            }
        }
    },
    $3G_0: function(n) {
        return n & 1 && (this.$1_0.$20_0 ? this.$1_0.$1Y_0 : this.$1_0.$1W_0) >= this.$1_0.$22_0
            ? !1
            : n & 2 && (this.$1_0.$20_0 ? this.$1_0.$1W_0 : this.$1_0.$1Y_0) < this.$1_0.$22_0 + this.$1_0.$2T_0
            ? !1
            : !0
    },
    $2x_0: function(n, t, i, r, u) {
        var f = this.$1b_0, c, s, h, e, o;
        if (++this.$1b_0, this.$C_0[f] || (this.$C_0[f] = new NLG.bfm.e), this.$C_0[f].$1l_0 = n, this.$C_0[f]
                .$w_0 = u, this.$1_0
                .$2X_0 &&
                (this.$C_0[f]
                    .$11_0 = t >= 0 ? this.$1_0.$S_0.$C_0[t].$11_0 | i : i),
            this.$1_0.$1z_0 &&
            (t >= 0
                ? (this.$C_0[f].$i_0 = this.$1_0.$S_0.$C_0[t].$i_0, this.$C_0[f].$m_0 = this.$1_0.$S_0.$C_0[t].$m_0)
                : (this.$C_0[f].$i_0 = -1, this.$C_0[f]
                    .$m_0 = -1), r >= 0))
            for (c = this.$1_0.$c_0
                    .$g_0[r], s = 0;
                s < c;
                ++s)
                h = this.$1_0.$c_0.$g_0[r + 1 + s], e = this.$1_0
                    .$32_0(), h > 0
                    ? (this.$1_0.$W_0[e].$1M_0 = h, this.$1_0.$W_0[e].$14_0 = this.$1_0.$z_0, this.$1_0.$W_0[e]
                        .$q_0 = this.$C_0[f].$i_0, this.$C_0[f].$i_0 = e)
                    : (o = this.$1_0.$W_0[this.$C_0[f].$i_0], this.$C_0[f].$i_0 = o.$q_0, this.$1_0.$W_0[e].$1M_0 = o
                        .$1M_0, this.$1_0.$W_0[e].$14_0 = o.$14_0, this.$1_0.$W_0[e]
                        .$2n_0 = this.$1_0.$z_0 - o.$14_0, this.$1_0.$W_0[e].$q_0 = this.$C_0[f].$m_0, this.$C_0[f]
                        .$m_0 = e);
        n === 1 &&
        (this.$1H_0 = f, this.$1_0.$1g_0 = Math.min(this.$1_0
            .$1g_0,
            u), this.$1_0.$2M_0 && this.$1_0.$2M_0 !== 2 || (this.$1h_0 = !0))
    },
    $1_0: null,
    $2f_0: 0,
    $1b_0: 0
};
NLG.nfa = function(n, t) {
    var i, r, u, f, e, o, s, h;
    for (this.$1i_0 = n, i = n.$5_0, this.$2o_0 = i[t], ++t, r = i[t], ++t, this.$1C_0 = new Array(r), u = 0;
        u < r;
        ++u) this.$1C_0[u] = i[t], ++t;
    for (r = i[t], ++t, this.$g_0 = new Array(r), f = 0; f < r; ++f) this.$g_0[f] = i[t], ++t;
    for (r = i[t], ++t, this.$1r_0 = new Array(r), e = 0; e < r; ++e) this.$1r_0[e] = i[t], ++t;
    for (++t, r = i[t], ++t, this
            .$1m_0 = new Array(r), o = 0;
        o < r;
        ++o) this.$1m_0[o] = new NLG.nfa.s(n.$H_0(i[t]), i[t + 1], i[t + 2], i[t + 3]), t += 4;
    for (r = i[t], ++t, this
            .$1D_0 = new Array(r), s = 0;
        s < r;
        ++s) this.$1D_0[s] = new NLG.nfa.s(n.$H_0(i[t]), i[t + 1], i[t + 2], i[t + 3]), t += 4;
    for (r = i[t], ++t, this.$1R_0 = new Array(r), h = 0; h < r; ++h) this.$1R_0[h] = n.$H_0(i[t]), ++t;
    this.$2G_0 = i[t];
    ++t;
    this.$Y_0 = i[t];
    ++t;
    this.$2m_0 = !!i[t];
    ++t;
    this.$2l_0 = !!i[t];
    ++t
};
NLG.nfa.prototype = {
    $1i_0: null,
    $2o_0: 0,
    $1C_0: null,
    $g_0: null,
    $1r_0: null,
    $1m_0: null,
    $1D_0: null,
    $1R_0: null,
    $2G_0: 0,
    $Y_0: 0,
    $2m_0: !1,
    $2l_0: !1
};
NLG.nfa.s = function(n, t, i, r) {
    this.$p_0 = n;
    this.$2V_0 = t;
    this.$1S_0 = i;
    this.$1w_0 = r
};
NLG.sre = function(n, t) {
    var i = n.$5_0[t];
    this.$2F_0 = n.$5_0[i];
    ++i;
    this.$18_0 = new NLG.nfa(n, i)
};
NLG.sre.prototype = {
    $2b_0: function(n, t, i, r, u, f, e, o, s) {
        var h, c;
        if (!n) throw NLG.ex.$s("inputManager");
        return(h = NLG.bfm.$3C(this.$18_0, n, t, i, r, u, !1, f, e, o, s), !h)
            ? null
            : this.$2F_0 &&
            (c = new NLG.sre.w, c.$2p_0 = h, c.$n_0 = t, c.$1P_0 = i, !NLG.f
                .$E(this.$18_0.$1i_0, this.$2F_0, c, new NLG.renr(this.$18_0.$1i_0.$2_0, h, s)))
            ? null
            : h
    },
    $18_0: null,
    $2F_0: 0
};
NLG.sre.w = function() {};
NLG.tk = function(n, t) {
    var r, i, f, u;
    for (this.$4_0 = n.$2_0, r = n.$5_0, i = r[t], this.$2E_0 = r[i], ++i, f = r[i], ++i, this
            .$1d_0 = new Array(f), this.$2D_0 = new Array(f), u = 0;
        u < f;
        ++u) this.$1d_0[u] = new RegExp(n.$H_0(r[i])), ++i, this.$2D_0[u] = n.$H_0(r[i]), ++i
};
NLG.tk.prototype = {
    $2s_0: function(n, t, i) {
        var u = t, h = new Array(0), r, s;
        for (t > 0 && (n = n.substr(t)); u < t + i;) {
            for (var f = -1, c = -1, e = -1, o = 0;
                o < this.$1d_0.length;
                ++o
            )
                r = this.$1d_0[o].exec(n), r &&
                    r[0].length > 0 &&
                    r[1].length > 0 &&
                    (f < 0 || r[0].length > c) &&
                    (f = o, c = r[0].length, e = r[1].length);
            f >= 0
                ? (s = new NLG.ts(u, e), s.$T_0 = new NLG.fb(this.$4_0), s.$T_0.$d_0(this.$2E_0, this.$2D_0[f]), Array
                    .add(h, s), n = n.substr(e), u += e)
                : (n = n.substr(1), u += 1)
        }
        return h
    },
    $2v_0: function(n) {
        for (var r, f, i = new Array(0), t = new Array(0), e = n, o = e.length, u = 0;
            u < o;
            ++u
        )
            r = e[u], f = this.$38_0(r), f === "EOP"
                ? t.length > 0 && (Array.add(i, t), t = new Array(0))
                : f === "EOS" ? (Array.add(t, r), Array.add(i, t), t = new Array(0)) : Array.add(t, r);
        return t.length > 0 && Array.add(i, t), i
    },
    $38_0: function(n) { return n.$T_0.$N_0(this.$2E_0) },
    $4_0: null,
    $2E_0: 0,
    $1d_0: null,
    $2D_0: null
};
NLG.ex = function() {};
NLG.ex.$O = function(n) { return Error.invalidOperation(n) };
NLG.ex.$8 = function(n) { return Error.argument(n) };
NLG.ex.$s = function(n) { return Error.argumentNull(n) };
NLG.ex.$6 = function() { return Error.notImplemented() };
NLG.ex.$2r = function() { return Error.create("Processing Timeout") };
NLG.PlainTextConverter = function() {};
NLG.PlainTextConverter.getLastMessage = function(n, t) {
    var r = window.Microsoft_NaturalLanguage_AttachmentRes[t], u, i;
    return r ? (u = r.lastMessage.exec(n), i = u, i && (n = n.substr(0, i.index)), n) : n
};
NLG.PlainTextConverter.getPlainText = function(n) {
    var u = document.createElement("div"), t = $(u), i, r;
    return t.html(NLG.PlainTextConverter.$3I(n)), t.find("style").remove(), t.find("script").remove(), i = t
        .find("br"), i.size() > 0 && i.replaceWith("\n"), r = t.find("p"), r.size() > 0 && r.append("\n"), t.text()
        .trim()
};
NLG.PlainTextConverter.$3I = function(n) {
    for (var r = "",
        t = 0,
        i = n
            .indexOf("<!--"),
        u;
        i > 0;
    ) r += n.substr(t, i), u = n.indexOf("-->", i), t = u + 3, i = n.indexOf("<!--", t);
    return r + n.substr(t)
};
Type.registerNamespace("NLG.FAD");
NLG.FAD.res = function() {};
NLG.FAD.AttachmentSentence = function() {};
NLG.FAD.AttachmentSentence.prototype = { startIndex: 0, length: 0 };
NLG.FAD.AttachmentResult = function() {};
NLG.FAD.AttachmentResult.prototype = { hasAttachment: !1, ruleNumber: 0, sentences: null };
NLG.FAD.ForgottenAttachmentDetector = function() {};
NLG.FAD.ForgottenAttachmentDetector.$3F = function(n) {
    var t = new NLG.FAD.res, i;
    return(t.$2y_0 = n.culture, i = new NLG.of(n.grammar), t.$y_0 = i.$30_0("Main"), t.$1q_0 = i.$2_0
            .$2Z_0("FAD_Schema.AttachmentBoost"), t.$2J_0 = i.$2_0
            .$2Z_0("FAD_Schema.RuleName"), !t.$y_0 || !t.$y_0.$1o_0 || t.$1q_0 < 0 || t.$2J_0 < 0)
        ? null
        : (t.$2P_0 = n, t)
};
NLG.FAD.ForgottenAttachmentDetector.$35 = function(n) {
    var t, i;
    return NLG.FAD.ForgottenAttachmentDetector.$1Z[n]
        ? NLG.FAD.ForgottenAttachmentDetector.$1Z[n]
        : typeof Microsoft_NaturalLanguage_AttachmentRes != "undefined" &&
        (t = window.Microsoft_NaturalLanguage_AttachmentRes[n], t)
        ? (i = NLG.FAD.ForgottenAttachmentDetector.$3F(t), NLG.FAD.ForgottenAttachmentDetector.$1Z[n] = i, i)
        : null
};
NLG.FAD.ForgottenAttachmentDetector.prototype = {
    maxtx: 2e3,
    maxtm: 200,
    tmr: !1,
    pas: !1,
    hasAttachments: function(n, t) {
        var i, f, r, u, e, o, s;
        return(this.tmr = !1, i = new NLG.FAD.AttachmentResult, f = (new Date).getTime() + this.maxtm, !n || null === t)
            ? i
            : (r = NLG.FAD.ForgottenAttachmentDetector.$35(t), !r)
            ? i
            : null === n.body && null === n.subject
            ? i
            : (u = null, e = null, null !== n.subject && (u = n.subject.substr(0, this.maxtx)),
                null !== n.body && (e = n.body.substr(0, this.maxtx)),
                u && (o = r.$2P_0.subjectPatterns.exec(u), s = o, !s && (i = this.$2k_0(u, r, f), i.hasAttachment)))
            ? i
            : this.$2k_0(e, r, f)
    },
    $2k_0: function(n, t, i) {
        var r = new NLG.FAD.AttachmentResult, u, f, s, h, e;
        if (null === n) return r;
        for (var c = t.$y_0.$1o_0.$2v_0(t.$y_0.$1o_0.$2s_0(n, 0, n.length)), l = c.length, o = 0; o < l; ++o) {
            u = c[o];
            try {
                if (f = t.$y_0.$3E_0(n, 0, n.length, u, i), !f) continue;
                if (s = f.$N_0(t.$1q_0), null !== s &&
                    s === 1 &&
                    (h = f.$N_0(t.$2J_0), null !== h &&
                    (r.ruleNumber = h, r
                        .hasAttachment = !0, r.sentences || (r.sentences = new Array(0)), e = new NLG.FAD
                        .AttachmentSentence, e.startIndex = u[0].$3_0, e
                        .length = u[u.length - 1].$3_0 + u[u.length - 1].$A_0 - u[0].$3_0, r.sentences[r.sentences
                        .length] = e, !this.pas))) return r
            } catch (a) {
                return a.message === "Processing Timeout" && (this.tmr = !0), r
            }
        }
        return r
    }
};
NLG.EmailData.registerClass("NLG.EmailData");
NLG.ts.registerClass("NLG.ts");
NLG.ri.registerClass("NLG.ri");
NLG.rem.registerClass("NLG.rem");
NLG.cr.registerClass("NLG.cr");
NLG.sim.registerClass("NLG.sim");
NLG.a.registerClass("NLG.a");
NLG.fb.registerClass("NLG.fb");
NLG.sv.registerClass("NLG.sv");
NLG.lv.registerClass("NLG.lv");
NLG.snr.registerClass("NLG.snr", null, NLG.inr);
NLG.aq.registerClass("NLG.aq");
NLG.aq.c.registerClass("NLG.aq.c");
NLG.as.registerClass("NLG.as");
NLG.cg.registerClass("NLG.cg");
NLG.f.registerClass("NLG.f");
NLG.f.t.registerClass("NLG.f.t");
NLG.iu.registerClass("NLG.iu");
NLG.of.registerClass("NLG.of");
NLG.renr.registerClass("NLG.renr", null, NLG.inr);
NLG.bfm.registerClass("NLG.bfm");
NLG.bfm.m.registerClass("NLG.bfm.m");
NLG.bfm.c.registerClass("NLG.bfm.c");
NLG.bfm.e.registerClass("NLG.bfm.e");
NLG.bfm.s.registerClass("NLG.bfm.s");
NLG.nfa.registerClass("NLG.nfa");
NLG.nfa.s.registerClass("NLG.nfa.s");
NLG.sre.registerClass("NLG.sre");
NLG.sre.w.registerClass("NLG.sre.w");
NLG.tk.registerClass("NLG.tk");
NLG.ex.registerClass("NLG.ex");
NLG.PlainTextConverter.registerClass("NLG.PlainTextConverter");
NLG.FAD.res.registerClass("NLG.FAD.res");
NLG.FAD.AttachmentSentence.registerClass("NLG.FAD.AttachmentSentence");
NLG.FAD.AttachmentResult.registerClass("NLG.FAD.AttachmentResult");
NLG.FAD.ForgottenAttachmentDetector.registerClass("NLG.FAD.ForgottenAttachmentDetector");
NLG.cg.$2K = new Array(0);
NLG.iu.$1L = -2147483648;
NLG.bfm.$1k = [new NLG.bfm.m];
NLG.bfm.$2q = new NLG.rem(new NLG.sim(new Array(0), ""), 0, 0, 0, 0);
NLG.nfa.$2z = NLG.iu.$1L;
NLG.nfa.$1x = NLG.iu.$1L;
NLG.nfa.$2W = NLG.iu.$1L;
NLG.nfa.$1y = NLG.iu.$1L;
NLG.nfa.$1t = -1;
NLG.nfa.$2j = 4194303;
NLG.FAD.ForgottenAttachmentDetector.$1Z = {}
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.NaturalLanguage.ClientRuntime.js.srcmap