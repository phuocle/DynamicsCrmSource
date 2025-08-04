Type.registerNamespace("Microsoft.Crm.Client.Application.ViewModels");
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction = function() {
    this.$$d_$1aa = Function.createDelegate(this, this.$1aa);
    this.$$d_$14k = Function.createDelegate(this, this.$14k);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("RetrieveUserQueues",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction.$32F)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction.$32F = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction;
    return Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor.isInstanceOfType(t) && (i.$B9 = t), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction.prototype = {
    $B9: null,
    $9k: null,
    $BK: null,
    $2t: function() {
        this.$9k = this.$B9.OnSuccess;
        this.$BK = this.$B9.OnFailure;
        var n = this.$B9.QueryValue, t = n.userId, i = n.includePublic;
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.RetrieveUserQueuesRequest(t, i), this.get_$e()),
            this.$$d_$14k,
            this.$$d_$1aa), 1
    },
    $14k: function(n) {
        this.$9k(n);
        this.$1U()
    },
    $1aa: function(n) {
        this.$BK(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction = function() {
    this.$$d_$1aa = Function.createDelegate(this, this.$1aa);
    this.$$d_$14k = Function.createDelegate(this, this.$14k);
    Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("GetCurrentServerDateTimeInUtcRequest",
                Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction.$300)
    };
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction.$300 = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction;
    return i.$B9 = t, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1pD, i
};
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction.prototype = {
    $B9: null,
    $9k: null,
    $BK: null,
    $2t: function() {
        this.$9k = this.$B9.OnSuccess;
        this.$BK = this.$B9.OnFailure;
        var n = this.$B9.QueryValue, t = n.entityName, i = n.entityId;
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.GetCurrentServerDateTimeInUtcRequest(t, i), this.get_$e()),
            this.$$d_$14k,
            this.$$d_$1aa), 1
    },
    $14k: function(n) {
        this.$9k(n);
        this.$1U()
    },
    $1aa: function(n) {
        this.$BK(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .AssociateRecordsActionForInteractionCentric = function() {
        Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("AssociateRecordsForInteractionCentric",
                Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric, i = n;
    return t.$9_3 = i, t.$P = i.$$d_$3CU, t.$Mx = i.$Mx, t.$Id = i.$Id, t.$5b = i.$5b, t.$9y = i.$9y, t.$7m = i.$7m, t
        .$5t = i.$5t, t
};
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric
    .prototype = {
        $Mx: null,
        $Id: null,
        $5b: 0,
        $7m: null,
        $5t: null,
        $9y: 0,
        $2t: function() { return this.$FY(this.$Mx, this.$Id, this.$5b, this.$7m, this.$5t, this.$9y), 1 }
    };
Microsoft.Crm.Client.Application.ViewModels
    .FilterGraphRetrieveListDataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlForFilterGraph",
        Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2rK);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FilterGraphFetchXmlWithCallback",
        Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2q0)
};
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2rK = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2rJ(n, t);
    return i.$bo = 2, i
};
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2rJ = function(n, t) {
    var r = n, u = t, i = new Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction, f;
    return i.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(r), i.$1Ke = r.$$d_$39z, i
        .$1I_3 = r.$$d_$3A7, i.$9_3 = r, i.$IM = "", f = Microsoft.Crm.Client.Core.Storage.Common.$1U.$Bo(r.$J), i
        .$2Q = $0.$1(u.QueryValue)
        ? r.$bQ
        : Array.isInstanceOfType(u.QueryValue)
        ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$1AG(u.QueryValue, 16, f)
        : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(u.QueryValue.toString()), i
};
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$2q0 = function(n, t) {
    var r = n, u = t, i = new Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction;
    return i.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(r), i.$1Ke = r.$$d_$3A1, i
        .$1I_3 = u.OnFailure, i.$9_3 = r, i.$IM = "", i.$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X
        .$4y(u.QueryValue.toString()), i
};
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.prototype = {
    $1Ke: null,
    $1m8: function(n) {
        var t = this.$9_3;
        if (t.$bQ = n, this.$9_3.get_$Dp()) {
            this.$1U();
            return
        }
        this.$1v = this.$1Op(n);
        this.$Qn()
    },
    $1Op: function(n) {
        var t = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(n, "");
        return t.$3S = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet([this.$9_3.$1gC]), t.$Od = !0, t
            .set_$80(1), t.$2u = 20, t
    },
    $4Y: function(n) { this.$1Ke(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction = function() {
    this.$$d_$1aa = Function.createDelegate(this, this.$1aa);
    this.$$d_$14k = Function.createDelegate(this, this.$14k);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("RetrieveRecordWallRequest",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$32E)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$32E = function(n, t) {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$B9 = t;
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction;
    return i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14l, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.prototype = {
    $9k: null,
    $BK: null,
    $2t: function() {
        this.$9k = Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$B9.OnSuccess;
        this.$BK = Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$B9.OnFailure;
        var n = Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$B9.QueryValue,
            t = n.entityReference,
            i = n.pageNumber,
            r = n.pageSize,
            u = n.commentsPerPost,
            f = n.startDate,
            e = n.endDate,
            o = n.type,
            s = n.source;
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.RetrieveRecordWallRequest(t, i, r, u, f, e, o, s), this.get_$e()),
            this.$$d_$14k,
            this.$$d_$1aa), 1
    },
    $14k: function(n) {
        this.$9k(n);
        this.$1U()
    },
    $1aa: function(n) {
        this.$BK(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.$Bh = function() {
    Microsoft.Crm.Client.Application.ViewModels.$Bh.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$Bh.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("QuickViewFormFetchData",
        Microsoft.Crm.Client.Application.ViewModels.$Bh.$2pZ)
};
Microsoft.Crm.Client.Application.ViewModels.$Bh.$2pZ = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.$Bh;
    return t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.$Bh.prototype = {
    $2t: function() {
        var n = this.$9_3, t = this, i = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(n.$E5,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(n.$4x),
                Microsoft.Crm.Client.Core.ViewModels.$w.get_$Jc(),
                Microsoft.Crm.Client.Core.Framework.$15.$5v(n.$11, n.$11)).then(function(i) {
                    n.$Fn(i);
                    t.$1U()
                },
                function(t) {
                    n.$95(t);
                    i.$1z(t)
                }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveFilterGraphDataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveFilterGraphByIdAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction.$1n9)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction.$1n9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction;
    return t.$1nA(n), t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction.prototype = {
    $33B: function() { this.$9_3.set_ViewNameText(this.$Lc.$1P) },
    $3V6: function(n) { this.$9_3.$3I7(n) },
    $2H9: function(n) {
        var i = n, t = this.$9_3, r, u, f, e;
        return $0.$1(t.$x3) || (i = t.$x3), u = t.$K7, u
            ? t.$5j().get_IsMultipleEntityGraphSupported()
            ? (e = this.$9_3.$tF, r = Microsoft.Crm.Client.Core.Storage.Common.$2c.$3B0(i, e, this.$9_3.$5j().$jQ))
            : (f = t.$11e, r = Microsoft.Crm.Client.Core.Storage.Common.$2c.$12f(i, f))
            : r = i, Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.prototype.$2H9.call(this, r)
    },
    $286: function() {
        for (var s,
            i,
            n,
            t = null,
            r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            e = this.$Ap.$Bd.$6z,
            o = e.$NM,
            c = o.length,
            u = 0;
            u < c;
            ++u) s = o[u], r.add(s.$2q);
        for (i = 0; i < this.$Ap.$Bd.$HI.get_Count(); i++) r.add(this.$Ap.$Bd.$HI.get_$H(i).$2q);
        for (var h = e
                     .$2x,
            l = h.length,
            f = 0;
            f < l;
            ++f) n = h[f], n.$D7 && !r.contains(n.$2q) && (t || (t = {}), t[n.$2q] = n.$D7);
        return t
    },
    $2CQ: function(n, t) {
        var u = t, i, r, f;
        for (i in u) if (r = { key: i, value: u[i] }, f = r.value, f.$HJ === n.$HJ) return r;
        return null
    },
    $1kS: function(n, t, i) {
        var u = {}, e = n, f, r, o, s;
        for (f in e)
            r = { key: f, value: e[f] }, r.key in t
                ? (o = t[r.key], s = this.$2CQ(o, i), u[s.key] = r.value)
                : u[r.key] = r.value;
        return u
    },
    $2kT: function(n, t) {
        for (var f,
            o,
            s,
            i = this.$286(),
            h = this.$1kS(n.$4e, t, i),
            c = this.$1kS(n.$EL(), t, i),
            l = this.$1kS(n.$1X, t, i),
            a = n.$3S.$1A(),
            v = a.columns,
            e = {},
            r = Array.clone(v),
            u = 0;
            u < r.length;
            u++) f = r[u], f in t && (o = t[f], s = this.$2CQ(o, i), r[u] = s.key);
        return e.columns = r, n.$284(h, c, l, e)
    },
    $2KY: function(n, t, i, r, u, f, e, o) {
        for (var a, s, c, l, v, h = 0;
            h < r.get_Count();
            h++
        )
            (a = r.get_$H(h), i[a]) &&
            (s = i[a], c = -1, o && (c = s.get_$H(s.get_Count() - 1)), l =
                $0
                .$25(u)
                ? t.get_$H(s.get_$H(0)).clone()
                : this.$2kT(t.get_$H(s.get_$H(0)), u), o &&
                !$0.$25(f) &&
                (v = t.get_$H(s.get_$H(0))
                    .$4e[f], e[v] = null), o ? c > n.get_Count() - 1 ? n.add(l) : n.insert(c, l) : n.add(l))
    },
    $2Av: function() {
        var i, n, t, u;
        if (this.$9_3.get_$Dp()) {
            this.$1U();
            return
        }
        i = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("RetrieveChartDataAction.ProcessFetchData");
        i.start();
        this.$Ap.$2WI();
        var f = this.$2H9(this.$Ap.get_$2ZZ()),
            e = this.$9_3.$5j().get_IsMultipleEntityGraphSupported()
                ? this.$Ap.$2zH(this.$9_3.$5j().$jQ)
                : this.$Ap.get_$1H(),
            r = new Microsoft.Crm.Client.Core.Storage.DataApi.$1O(e);
        r.$Od = !0;
        r.$2u = this.$Ap.$Bd.$6z.$Eg;
        i.stop();
        n = [];
        Array.addRange(n, this.$Ap.$Bd.$2Sp());
        this.$9_3.$1s7()
            ? Array.add(n,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen
                    .IntersectRecordsWithQueueAndAggregateRequest(new Microsoft.Crm.Client.Core.Framework
                        .Guid(this.$9_3.$Xl),
                        this.$A3.Id,
                        this.$K5.Id,
                        this.$9_3.$11e),
                    this.get_$e()))
            : Array.add(n, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$vH(r, f, this.get_$e()));
        t = this;
        u = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(n),
            function(n) {
                for (var u, f, r = null, i = 0;
                    i < n.length;
                    i++
                )
                    ($0.$1(n[i]) ||
                            Object.getType(n[i]) !==
                            Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection) &&
                        ($0.$1(n[i]) || Object.getType(n[i]) !== Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse)
                        ? (u = n[i].$21O(), f = t.$Ap.$Bd.$nF[u[0].$T], u.length > 0 && !$0.$1(f) && f.$En.$nC(u, !1))
                        : Object.getType(n[i]) === Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
                        ? r = n[i]
                        : Object.getType(n[i]) === Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse &&
                        (r = n[i].entityCollection);
                r
                    ? t.$Hv(function() { t.$2MQ(r) }, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1O9)
                    : t.$1En(Microsoft.Crm.Client.Core.Framework.$4
                        .$h("load chart data failure, EntityCollection is not found in results! "))
            },
            function(n) { u.$2MO(n) })
    },
    $3Ay: function(n) {
        var g = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("RetrieveFilterGraphDataAction_MergeBaseSetFilteredSet"),
            rt,
            ut,
            k,
            a,
            ft,
            et,
            st,
            v,
            i,
            ht,
            ct,
            lt,
            at;
        g.start();
        for (var o = this.$9_3,
            t = o.$K7,
            r = t.$pR,
            s = t.$1Le,
            u = t.$1Lv,
            nt = t.$1Lf,
            tt = t.$1Lx,
            y = t.$1KR,
            p = this.$26p(t.$1g9),
            h = this.$26p(t.$1gM),
            c = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord)),
            e = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty(),
            it = n.get_entities(),
            vt = it.length,
            w = 0;
            w < vt;
            ++w) {
            var f = it[w], l = f.$4e, b = l[s];
            s in l || (rt = f.$EL(), ut = rt[s], b = this.$1Co(ut));
            k = !1;
            p[b] = null;
            b in p || (e.add(f.clone()), k = !0);
            u &&
            (a = l[u], u in l || (ft = f.$EL(), et = ft[u], a = this.$1Co(et)), h[a] = null,
                a in h || k || e.add(f.clone()));
            c.add(f)
        }
        if (e.get_count() > 0) {
            for (var ot = t.$pR.get_entities(), yt = ot.length, d = 0; d < yt; ++d) st = ot[d], e.add(st.clone());
            this.$27r(e, ht = { val: v }, ct = { val: i });
            v = ht.val;
            i = ct.val;
            o.set_$22r(i);
            o.$1Lw = v.get_Count() > 1 ? v.get_$H(1).$I : "";
            r = i.$pR;
            s = i.$1Le;
            u = i.$1Lv;
            nt = i.$1Lf;
            tt = i.$1Lx;
            y = i.$1KR;
            o.$1Ky = !0
        }
        return this.$2KY(c, r, p, nt, y, u, h, !0), u && this.$2KY(c, r, h, tt, y, null, null, !1), lt = this
            .$2gZ(r.$4U), at = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityCollection(c.toArray(), r.$Co, r.$AK, r.$LX, n.$1v, lt), g.stop(), at
    },
    $249: function(n, t, i, r) {
        var f, u;
        n in t
            ? (f = t[n], f.add(r))
            : (u = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Number)), u.add(r), t[n] = u, i.add(n))
    },
    $2cS: function(n, t) {
        for (var r, i = 0; i < t.get_Count(); i++)
            r = n[t.get_$H(i)], r.add(i), n[t.get_$H(i)] =
                r
    },
    $2l9: function(n, t) {
        var u = {}, f = n, r, i;
        for (r in f) i = { key: r, value: f[r] }, u[i.key] = t.contains(i.key) ? "0" : i.value;
        return u
    },
    $2l8: function(n, t) {
        var u = n, f = u, r, i;
        for (r in f) i = { key: r, value: f[r] }, t.contains(i.key) && (i.value.value = 0), u[i.key] = i.value
    },
    $2jo: function() {
        for (var r,
            t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            u = this.$Ap.$Bd.$6z.$NM,
            i = u,
            f = i.length,
            n = 0;
            n < f;
            ++n) r = i[n], t.add(r.$2q);
        return t
    },
    $2jH: function() {
        for (var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i = this.$Ap.$Bd.$HI, n = 0;
            n < i.get_Count();
            n++) t.add(i.get_$H(n).$I);
        return t
    },
    $1Co: function(n) {
        var t, i;
        if ($0.$9c(n)) return"undefined";
        if (t = n.value, !t) return null;
        i = n.attributeType;
        switch (i) {
        case 21:
            return this.$1Co(t.value);
        case 1:
        case 6:
        case 9:
            return t.name;
        case 15:
            return t.rawguid;
        case 2:
            return t.toString();
        case 13:
        case 12:
        case 0:
        case 11:
            return t.value;
        default:
            return t.toString()
        }
    },
    $3IK: function(n) {
        var t = this.$9_3, f = t.$K7, i, r, u;
        if (!t.$5j().get_IsMultipleEntityGraphSupported()) {
            i = this.$Ap.$Bd.$Lr;
            for (r in i)
                if (u = { key: r, value: i[r] }, u
                    .key !==
                    this.$Lc.$6h)
                    return t.$196 = !0, t.$1DI(Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("Error_Title_0x8004e019"),
                        Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("SignInError.OrgIsInAdminOnlyMode.SecondMessage")), Microsoft.Crm.Client.Core.Storage.Common
                        .ObjectModel.EntityCollection.createEmpty()
        }
        return $0.$25(f)
            ? (this.$27s(n, !0), n)
            : (t.$196 = !0, t.$1fR && !$0.$1(this.$Ap.$Bd.$38.$4n.$3R.$D7) ? (this.$27s(n, !1), n) : this.$3Ay(n))
    },
    $27s: function(n, t) {
        var f = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("RetrieveFilterGraphDataAction_ProcessDataRecords:NoZeroValueSet"),
            i,
            r,
            u,
            e,
            o;
        f.start();
        i = this.$9_3;
        this.$27r(n, e = { val: r }, o = { val: u });
        r = e.val;
        u = o.val;
        i.$1Lw = r.get_Count() > 1 ? r.get_$H(1).$I : "";
        t ? i.set_$22r(u) : i.$3Qq(u);
        i.$5j().get_IsMultipleEntityGraphSupported() && (i.$1K4 = this.$Ap.$Bd.$Lr);
        f.stop()
    },
    $27r: function(n, t, i) {
        var v = new Array(n.get_entities().length),
            s = {},
            y = {},
            h = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            p = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            d,
            g,
            l,
            nt,
            tt,
            it,
            a,
            rt,
            ut,
            ft;
        t.val = this.$Ap.$Bd.$HI;
        for (var f = t.val.get_$H(0).$2q,
            u = t.val.get_Count() > 1 ? t.val.get_$H(1).$2q : "",
            w = this.$2jo(),
            et = this.$286(),
            e = 0,
            b = n.get_entities(),
            ot = b.length,
            c = 0;
            c < ot;
            ++c) {
            var r = b[c], o = r.$4e, k = o[f];
            f in o || (d = r.$EL(), g = d[f], k = this.$1Co(g));
            this.$249(k, s, h, e);
            this.$2cS(s, h);
            Microsoft.Crm.Client.Core.Framework.$3.$A(u) ||
                (l = o[u], u in o || (nt = r.$EL(), tt = nt[u], l = this.$1Co(tt)), this.$249(l, y, p, e));
            it = this.$2l9(r.$4e, w);
            a = r.$EL();
            this.$2l8(a, w);
            rt = r.$284(it, a, null, null);
            v[e] = rt;
            e++
        }
        ut = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityCollection(v, n.$Co, n.$AK, n.$LX, n.$1v, n.$4U);
        ft = this.$2jH();
        i.val = new Microsoft.Crm.Client.Core.ViewModels.$LY(ut, s, y, et, f, u, h, p, ft)
    },
    $26p: function(n) {
        var t, i, r, u, f;
        if ($0.$25(n)) return null;
        t = {};
        i = n;
        for (r in i) u = { key: r, value: i[r] }, f = this.$2ga(u.value), t[u.key] = f;
        return t
    },
    $2gZ: function(n) {
        return $0.$25(n) ? null : new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$23(n.$Ep, n.$R3, n.$CT)
    },
    $2ga: function(n) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1
                     .$$(Number)),
            t = 0;
            t < n.get_Count();
            t++) i.add(n.get_$H(t));
        return i
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveVisualFilterDataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveVisualFilterDataByIdAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction.$1n9)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction.$1n9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction;
    return t.$1nA(n), t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction
    .prototype = { $33G: function() { this.$9_3.$5H = this.$XO.$1P } };
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveSavedQueryDetailsAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction.$AR)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction.$AR = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction, i;
    return r.$1mk = n.$1fA, i = t, $0.$1(i
            .OnSuccess) ||
        (r.$P = i.OnSuccess), $0.$1(i.OnFailure) || (r.$1I_3 = i.OnFailure), r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction
    .prototype = {
        $P: null,
        $1mk: null,
        $2t: function() {
            return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(this.$1mk, this.get_$e()),
                this.$$d_$4Y,
                this.$$d_$5J), 1
        },
        $4Y: function(n) {
            n.get_$3XJ() > 0
                ? (this.$P(n), this.$1U())
                : this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088111))
        },
        $5J: function(n) { this.$1z(n) }
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveFetchXmlFromSavedQueryId",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId.$AR)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId.$AR = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId, i;
    return r.$1qk(n), i = t, $0.$1(i
            .OnSuccess) ||
        (r.$P = i.OnSuccess), $0.$1(i.OnFailure) || (r.$1I_3 = i.OnFailure), r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId.prototype = {
    $P: null,
    $hN: null,
    $1qk: function(n) {
        var t, r, i;
        Microsoft.Crm.Client.Core.ViewModels.$AI.isInstanceOfType(n)
            ? (t = n, this.$9_3 = t, r = t.$pp, this.$hN = new Microsoft.Crm.Client.Core.Framework
                .Guid(r.savedqueryid), this.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$rb)
            : (i = n, this.$9_3 = i, this.$hN = new Microsoft.Crm.Client.Core.Framework.Guid(i.$dM), this
                .$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$rb)
    },
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(16, this.get_$2C(), null, 1, !1, this.$hN.toString().toLowerCase()),
                this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        if (n.get_$3XJ() > 0) {
            var t = n.get_$H(0), i = t.get_$Gz().$AM(1);
            this.$P(i);
            this.$1U()
        } else this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088111))
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveCardConfigurationAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction.$AR)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction.$AR = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction, i;
    return r.$1qk(n), i = t, $0.$1(i.OnSuccess)
        ? Microsoft.Crm.Client.Core.Framework.Utils.$E.$55(i.OnSuccess, "queryDescriptor.OnSuccess")
        : r.$7N = i.OnSuccess, r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction.prototype = {
    $T: null,
    $7N: null,
    $1qk: function(n) {
        var t = n;
        this.$9_3 = t;
        this.$T = t.$T;
        this.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$rb
    },
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(41, this.get_$2C(), this.$T), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        if (n.get_$3XJ() > 0) {
            var i = n.get_$H(0),
                r = i.get_$Gz().$AM(0),
                u = r,
                t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(u.ViewModelDescriptor, null);
            t.$17();
            this.$7N(t);
            this.$1U()
        } else this.$7N(null), this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.$Br = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.$Br.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$Br.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlForSimilarCasesForISH",
        Microsoft.Crm.Client.Application.ViewModels.$Br.$2pe)
};
Microsoft.Crm.Client.Application.ViewModels.$Br.$2pe = function(n, t) {
    var r = n, u = t, i = new Microsoft.Crm.Client.Application.ViewModels.$Br;
    return i.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(r), i.$P = r.$$d_$4Y, i
        .$1I_3 = r.$$d_$5J, i.$9_3 = r, i.$2Q = $0.$1(u.QueryValue)
        ? r.$2Q
        : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(u.QueryValue.toString()), i.$IM = r
        .get_DefinitionId(), i.$B6 = r.$1p.$BQ + 1, i
};
Microsoft.Crm.Client.Application.ViewModels.$Br.prototype = {
    $2t: function() {
        var n = new Xrm.Gen.GetSimilarRecordsRequest(new Xrm.Objects
            .EntityReference(Xrm.Page.data.getEntity().getEntityName(),
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.getEntity().getId())),
            "",
            new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["title", "modifiedon"]));
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$2B(n, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty();
        $0.$1(n) || (t = n.entityCollection);
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.prototype.$4Y.call(this, t)
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .SetInteractionCentricCreateEntityReferenceAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction
            .initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("SetInteractionCentricCreateEntityReference",
                Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction, i = n;
    return t.$9_3 = i, t.$1Y = i.get_ModelContext(), t.$FP = i.$FP, t.$I3 = i.$Q.$AV.get_ModelContext().$M, t
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveSavedQueryDetailsFromSavedQueryId = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveSavedQueryDetailsFromSavedQueryId",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId.$AR)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId.$AR = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId, i;
    return r.$1qk(n), i = t, $0.$1(i
            .OnSuccess) ||
        (r.$P = i.OnSuccess), $0.$1(i.OnFailure) || (r.$1I_3 = i.OnFailure), r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId.prototype = {
    $4Y: function(n) {
        if (n.get_$3XJ() > 0) {
            var t = n.get_$H(0);
            this.$P(t);
            this.$1U()
        } else this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2146088111))
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.ViewModels.Actions");
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$8K.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveInteractionCentricProcessControlFirstStage",
                Microsoft.Crm.Client.Application.ViewModels.Actions.$8K.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K
    .$B = function(n) { return Microsoft.Crm.Client.Application.ViewModels.Actions.$8K.$d9(n) };
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K.$d9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.Actions.$8K;
    return t.$9_3 = n, t.$T = n.$J, t.set_$nh(t.$$d_$1FV), t.$1I_3 = n.$$d_$1vQ, t.$13C = n.$$d_$1vR, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric",
        Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction);
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$Bh
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Bh", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction);
Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction);
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$Br
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Br",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction",
        Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction);
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId);
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$8K",
        Microsoft.Crm.Client.Application.ViewModels.Actions.$6e);
Microsoft.Crm.Client.Application.ViewModels.RetrieveUserQueuesDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.GetCurrentServerDateTimeInUtcAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsActionForInteractionCentric.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.FilterGraphRetrieveListDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$B9 = null;
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordWallRequestAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$Bh.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilterGraphDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveVisualFilterDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveFetchXmlFromSavedQueryId.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveCardConfigurationAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$Br.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.SetInteractionCentricCreateEntityReferenceAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveSavedQueryDetailsFromSavedQueryId.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$8K.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Application.ICViewModels.js.srcmap