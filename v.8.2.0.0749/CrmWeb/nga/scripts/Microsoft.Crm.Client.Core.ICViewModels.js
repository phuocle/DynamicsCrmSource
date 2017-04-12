Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels");
Microsoft.Crm.Client.Core.ViewModels.$GM = function() {};
Microsoft.Crm.Client.Core.ViewModels.$GM.registerInterface("Microsoft.Crm.Client.Core.ViewModels.$GM");
Microsoft.Crm.Client.Core.ViewModels.$GO = function() {};
Microsoft.Crm.Client.Core.ViewModels.$GO.registerInterface("Microsoft.Crm.Client.Core.ViewModels.$GO");
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType = function() {};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType
    .prototype = {
        task: 0,
        email: 1,
        appointment: 2,
        phoneCall: 3,
        incidentResolution: 4,
        note: 5,
        systemPost: 6,
        userPost: 7,
        socialActivity: 8,
        customActivity: 9,
        incident: 10,
        account: 11
    };
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType
    .registerEnum("Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType", !1);
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState = function() {};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState
    .prototype = { open: 0, completed: 1, canceled: 2, scheduled: 3 };
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState
    .registerEnum("Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState", !1);
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultPriority = function() {};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultPriority.prototype = { high: 0, normal: 1, low: 2 };
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultPriority
    .registerEnum("Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultPriority", !1);
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultDirection = function() {};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultDirection.prototype = { incoming: 0, outgoing: 1 };
Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultDirection
    .registerEnum("Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultDirection", !1);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel = function(n) {
    var r, t, i;
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel.initializeBase(this, [n]);
    this.$Ri = {};
    r = Microsoft.Crm.Client.Core.Framework.$1u.$b("IsUSD");
    !$0.$1(r) && Boolean.isInstanceOfType(r) && (this.$ev = r);
    t = this;
    this.$1XD = new Microsoft.Crm.Client.Core.Framework.Binding
        .$TM(function() { t.$5e.$Cb === t.$5e.$mL ? t.$5e.$1vx(!1) : t.$3Bt(!1) }, 1004);
    i = this;
    this.$1XC = new Microsoft.Crm.Client.Core.Framework.Binding
        .$TM(function() { i.$5e.$Cb + 1 === i.$5e.get_$1d7() ? i.$5e.$1vx(!0) : i.$3Bt(!0) }, 1004)
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel.prototype = {
    $1XD: null,
    $1XC: null,
    get_ListNavigationRecordCount: function() {
        if ($0.$1(this.$5e)) return"";
        var n = this.$5e.$Cb + 1;
        return n.toString() + "/" + this.$5e.$18U.toString()
    },
    $3Bs: function(n) {
        n ? this.set_NextNavigationIndex(this.$5e.$Cb + 1) : this.set_NextNavigationIndex(this.$5e.$Cb - 1);
        for (var t = this.$5e.$2LE(this.$Qk), i = !0; !t;) {
            if (!this.$Qk || this.$Qk === this.$5e.$18U - 1) {
                i = !1;
                break
            }
            n ? this.set_NextNavigationIndex(this.$Qk + 1) : this.set_NextNavigationIndex(this.$Qk - 1);
            t = this.$5e.$2LE(this.$Qk)
        }
        return i
            ? !0
            : (Microsoft.Crm.Client.Core.ViewModels.$Z.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Error_Title_0x8004020e"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Message_0x80042300"),
                0), !1)
    },
    $3Bt: function(n) {
        var i, t, u, f, r;
        this.$3Bs(n) &&
        (this.$5e.$ti = !0, i = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .get_$6e().get_$4O(), t = this.get_CurrentListNavigationDataContext()
            .get_$1N(), Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(t) &&
            (u = t, f = u.$M.$N, f.LogicalName !== "queueitem" && (i.$Q.$S.EntityReference = null)), r = new Microsoft
            .Crm.Client.Core.Commands.$B2(i), r.execute(), r.dispose(), t = this.get_CurrentListNavigationDataContext()
            .get_$1N(), Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(t) &&
        (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Ky().$1Yh(t), Microsoft
            .Crm.Client.Core.ViewModels.$p.$1hF(t)))
    },
    get_NavigateToPrevious: function() { return this.$1XD },
    set_NavigateToPrevious: function(n) { return this.$1XD = n, n },
    get_NavigateToNext: function() { return this.$1XC },
    set_NavigateToNext: function(n) { return this.$1XC = n, n },
    $Ri: null,
    $XU: null,
    $xa: null,
    $2Gb: function(n, t) {
        if ($0.$1(this.$xa)) {
            var i = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("RetrieveDashboardSelector", null, !0, [1, 2]),
                r = this;
            i.OnSuccess = function(n) {
                if (!$0.$1(n) && !$0.$1(n.$FS)) {
                    var i = n.$FS.Controls;
                    r.$1dm(i);
                    t()
                }
            };
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", n, i)
        } else t()
    },
    $1dm: function(n) {
        var r, t, s, h, w, f, c, l, b, e, a;
        for (this.$Ri = {}, this.$xa = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.ViewModels.$6p)), r = 0;
            r < n[0].Children.length;
            r++) {
            var u = n[0].Children[r], v = u.Id, i = u.LabelText;
            switch (i) {
            case"Service Desk Dashboard":
                i = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("InteractionCentric_ServiceDeskDashboard");
                break;
            case"Knowledge Manager":
                i = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("InteractionCentric_KnowledgeManagerDashboard");
                break;
            case"My Knowledge Dashboard":
                i = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("InteractionCentric_MyKnowledgeDashboard")
            }
            var o = this.$2CN(u.CommandParameters.Descriptors, "Properties"), y = !1, p = u.CommandParameters.IsDefault;
            if (o) {
                t = null;
                s = o;
                for (h in s)
                    w = { key: h, value: s[h] }, f = w
                        .value, f &&
                        f.Name === "PrimaryEntity" &&
                        (t = f.Value, this.$Ri[t] ||
                        (this.$Ri[t] = new(Microsoft.Crm.Client.Core.Framework.List$1
                            .$$(Microsoft.Crm.Client.Core.ViewModels.$6p))));
                c = o;
                for (l in c)
                    if (b = { key: l, value: c[l] }, e = b.value, e && e.Name === "DashboardCategory") {
                        a = e.Value.toString().split("_");
                        a.length > 1 &&
                            a[1] === "1" &&
                            t &&
                            (y = !0, this.$Ri[t].add(new Microsoft.Crm.Client.Core.ViewModels.$6p(v, i, t, p)));
                        y || this.$xa.add(new Microsoft.Crm.Client.Core.ViewModels.$6p(v, i, t, p));
                        break
                    }
            }
        }
    },
    $2CN: function(n, t) {
        var r, u, i, f;
        if (!n) return null;
        if (n[t]) return n[t];
        r = n;
        for (u in r)
            if ((i = { key: u, value: r[u] }, i.key !== "__proto__" &&
                    i.value &&
                    (i.value.toString().toLowerCase() === "[object object]" || !(i.value.toString().indexOf(t) < 0))) &&
                (f = this.$2CN(i.value, t), f)) return f;
        return null
    },
    $33v: function(n) {
        var i = n.$177[0], t;
        for (Xrm.Utility.create(i, null, null, null, null, null), t = 0; t < n.$177.length; t++) n.$177[t] = null;
        n = null
    },
    $2c6: function(n) {
        if ($0.$1(this.$6G) &&
        (this.$6G = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.ViewModels.$4t))), !this.$6G.contains(n)) {
            if (this.$6G.add(n), Microsoft.Crm.Client.Core.Framework.$6.get_$k()) {
                var t = n;
                t = $.extend(!0, {}, n);
                this.get_$NP().add(t)
            }
            this.$12L = null;
            n.set_$OS(!0);
            this.$2CX()
        }
    },
    clearSelectedViewModels: function() {
        var t = !1, n;
        if (!$0.$1(this.$6G)) {
            for (n = 0; n < this.$6G.get_Count(); n++) this.$6G.get_$H(n).$2gN(), t = !0;
            this.$6G.clear()
        }
        t && this.$1mr()
    },
    GetRootTabIndex: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_TabbingSupported() ? 1e3 : -3e4
    },
    $3Kh: function(n) {
        var t, i;
        if (!$0.$1(this.$6G) && (this.$6G.contains(n) || this.get_$NP().contains(n))) {
            if (this.$6G.remove(n), !this.$6G.contains(n))
                for (t = 0; t < this.$6G.get_Count(); t++)
                    if (this.$6G.get_Items()[t].get_Id() === n.get_Id()) {
                        this.$6G.remove(this.$6G.get_Items()[t]);
                        break
                    }
            if (this.get_$NP().remove(n), !this.get_$NP().contains(n))
                for (i = 0; i < this.get_$NP().get_Count(); i++)
                    if (this.get_$NP().get_Items()[i].get_Id() === n.get_Id()) {
                        this.get_$NP().remove(this.get_$NP().get_Items()[i]);
                        break
                    }
            this.$12L = null;
            this.$2qQ()
        }
    },
    $307: function(n) {
        var t, i;
        return Microsoft.Crm.Client.Core.ViewModels.$7w.isInstanceOfType(n)
            ? (t = n, $0.$1(t)) ? null : (i = {}, i.name = t.$16w, i.id = t.$16v, i.type = t.$16x, i)
            : null
    },
    isNavBarOff: function() { return Microsoft.Crm.Client.Core.ViewModels.$53.getParamStatus("navbar") },
    isBackButtonOff: function() { return Microsoft.Crm.Client.Core.ViewModels.$53.getParamStatus("backbtn") },
    $1uA: function(n) {
        this.get_CanGoBack()
            ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.prototype.$1uA.call(this, n)
            : this.$1UX.$u1.execute()
    }
};
Microsoft.Crm.Client.Core.ViewModels.$9R = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_HandleFilterChangeCompletedEvent = Function.createDelegate(this, this.HandleFilterChangeCompletedEvent);
    this.$1m = {};
    Microsoft.Crm.Client.Core.ViewModels.$9R.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$9R.prototype = {
    $2A: !1,
    $1F3: null,
    $Ld: null,
    get_AppliedFilterExpression: function() { return this.$Ld },
    set_AppliedFilterExpression: function(n) { return this.$Ld = n, n },
    $RY: null,
    $PE: null,
    get_AttributeMetadataActionProvider: function() { return this.$PE },
    set_AttributeMetadataActionProvider: function(n) { return this.$PE = n, n },
    get_IsLoading: function() { return this.$2A },
    set_IsLoading: function(n) { return this.$2A = n, this.$8("MetadataFetched"), n },
    get_IsMultipleEntityGraphSupported: function() { return this.$7y().get_IsMultipleEntityGraphSupported() },
    $2HK: function(n) {
        var i = 0, t, r, u;
        if (!$0.$1(n) && !$0.$1(n.get_$5U()))
            for (t = 0; t < n.get_$5U().get_Count(); t++)
                if (n.get_$5U().get_$H(t).get_$27().get_Count() > 0) {
                    r = n.get_$5U().get_$H(t).get_$27().get_$H(0).get_$Pd();
                    u = this.$1m[r][1];
                    switch (u) {
                    case 20:
                    case 11:
                    case 0:
                    case 12:
                    case 13:
                    case 1:
                    case 6:
                    case 10:
                    case 9:
                    case 14:
                        i += n.get_$5U().get_$H(t).get_$27().get_Count();
                        break;
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                        i += 1
                    }
                }
        return i
    },
    get_AppliedFiltersCount: function() {
        var n, t, i, r, u;
        if (this.$7y().get_IsMultipleEntityGraphSupported()) {
            if (n = 0, !$0.$1(this.$RY)) {
                t = this.$RY;
                for (i in t) r = { key: i, value: t[i] }, $0.$1(r.value) || (u = r.value, n += this.$2HK(u))
            }
            return n
        }
        return this.$2HK(this.$Ld)
    },
    $17: function() {
        if (!this.$1x) {
            var n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("AppliedFilters_Initialize", 0, this.get_ViewModelId());
            $0.$1(n) || n.addParameter(this.$I);
            this.$1F3 = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("AppliedFilters_AttributeMetadataRetrieve");
            Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this);
            this.$7y().$9F.$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O,
                this.$$d_HandleFilterChangeCompletedEvent)
        }
    },
    $GN: function() {
        this.$1m = null;
        this.$7y().$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O,
            this.$$d_HandleFilterChangeCompletedEvent);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    },
    HandleFilterChangeCompletedEvent: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("AppliedFilters_HandleFilterChangeCompletedEvent"),
            y,
            r,
            f,
            p,
            b,
            k,
            o,
            i,
            s,
            h,
            c,
            l,
            u,
            a,
            it,
            ut;
        if (t.start(), this.$7y().get_IsMultipleEntityGraphSupported()) {
            k = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$NB) ? "" : n.$NB.toString(),
                    n.$g);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(k);
            this.$RY = {};
            var d = this.$7y().$Ej, g = {}, nt = 0, tt = d;
            for (o in tt)
                i = { key: o, value: tt[o] }, this.$RY[i.key] = d[i.key].$88(), s = this.$RY[i.key].$CW.toArray(), g[i
                    .key] = s, nt += s.length;
            if (!nt) {
                this.$8("CurrentAppliedFilters");
                return
            }
            h = g;
            for (c in h)
                if (l = { key: c, value: h[c] }, u = l.value, u.length > 0) {
                    a = new Array(u.length);
                    it = 0;
                    for (var rt = u, et = rt.length, v = 0; v < et; ++v) ut = rt[v], a[it++] = ut.get_$O6();
                    this.$Ot(a, l.key)
                }
            t.stop();
            t.addParameter(this.get_ViewModelId())
        } else {
            if (y = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$Gj) ? "" : n.$Gj.$7F(),
                    n.$g), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                .$1w(y), this.$Ld = this.$7y().$Lj.$88(), r = this.$Ld.get_$5U().toArray(), !r.length) {
                this.$8("CurrentAppliedFilters");
                return
            }
            f = new Array(r.length);
            p = 0;
            for (var w = r, ft = w.length, e = 0; e < ft; ++e) b = w[e], f[p++] = b.get_$O6();
            t.stop();
            t.addParameter(this.get_ViewModelId());
            this.$Ot(f, this.$7y().$8S)
        }
        this.$8("CurrentAppliedFilters")
    },
    removedAppliedFilters: function(n) {
        this.$Ld.$Mr(n);
        var t = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m(n, 1, 0, this.$Ld);
        this.$7y().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, t);
        this.$8("CurrentAppliedFilters")
    },
    removedAppliedFiltersWithEntity: function(n, t) {
        this.$RY[n].$Mr(t);
        var i = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m(t, 1, 0, null);
        i.$Ki = this.$RY;
        this.$7y().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, i);
        this.$8("CurrentAppliedFilters")
    },
    removedAllAppliedFilters: function() {
        var n;
        this.$7y().get_IsMultipleEntityGraphSupported()
            ? (this.$RY = null, n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5m(this.$I, 1, 0, null), n.$Ki = this.$RY)
            : (this.$Ld = null, n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5m(this.$I, 1, 0, this.$Ld));
        this.$7y().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, n);
        this.$8("CurrentAppliedFilters")
    },
    TruncatedGlobalFilterScreenReaderText: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("TruncatedGlobalFilter_ScreenReader_Label"),
            this.get_AppliedFiltersCount())
    },
    $2Gi: function(n, t, i, r) {
        var u = new Array(2), f, e;
        switch (t) {
        case 20:
        case 11:
        case 0:
        case 12:
        case 13:
            u[0] = String.format("{0} {1}/{2}", r, n.get_$27().get_Count().toString(), this.$1m[i][2]);
            u[1] = String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_OptionSet"),
                r,
                n.get_$27().get_Count().toString(),
                this.$1m[i][2]);
            break;
        case 2:
            n.get_$27().get_$H(0).get_$Jj() || n.get_$27().get_$H(1).get_$Jj()
                ? (f = new Date(Date.parse(n.get_$27().get_$H(0)
                    .get_$2M())), e = new Date(Date.parse(n.get_$27().get_$H(1).get_$2M())), u[0] = String
                    .format("{0} {1}-{2}", r, f.format("d"), e.format("d")), u[1] = String
                    .format(Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("AppliedFilters_ScreenReader_ParsedData_DateTimeRange"),
                        r,
                        f.format("d"),
                        e.format("d")))
                : (u[0] = String.format("{0} {1}",
                    r,
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ChartAttributeValueMissing")), u[1] = String
                    .format(Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("AppliedFilters_ScreenReader_ParsedData_DateTimeRange_NoneSelected"),
                        r));
            break;
        case 5:
        case 4:
        case 3:
            n.get_$27().get_$H(0).get_$Jj() && n.get_$27().get_$H(0).get_$Jj() !== "null"
                ? n.get_$27().get_$H(0) && !n.get_$27().get_$H(1)
                ? (u[0] = String.format("{0} {1}", r, n.get_$27().get_$H(0).get_$2M()), u[1] = String
                    .format("{0} {1}", r, n.get_$27().get_$H(0).get_$2M()))
                : (u[0] = String.format("{0} {1}-{2}",
                    r,
                    n.get_$27().get_$H(0).get_$2M(),
                    n.get_$27().get_$H(1).get_$2M()), u[1] = String
                    .format(Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("AppliedFilters_ScreenReader_ParsedData_Range"),
                        r,
                        n.get_$27().get_$H(0).get_$2M(),
                        n.get_$27().get_$H(1).get_$2M()))
                : (u[0] = String.format("{0} {1}",
                    r,
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ChartAttributeValueMissing")), u[1] = String
                    .format(Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("AppliedFilters_ScreenReader_ParsedData_Range_NoneSelected"),
                        r));
            break;
        case 1:
        case 6:
        case 10:
        case 9:
        case 14:
        case 15:
            u[0] = String.format("{0} {1}", r, n.get_$27().get_Count());
            u[1] = String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_LookUp"),
                r,
                n.get_$27().get_Count())
        }
        return u
    },
    GenerateAppliedFilters: function() {
        var e = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("AppliedFilters_GeneratingAppliedFilters"),
            n,
            r,
            i,
            v,
            s,
            h,
            c,
            u,
            o,
            f,
            t,
            y,
            l,
            a;
        if (e.start(), n = {}, this.$7y().get_IsMultipleEntityGraphSupported()) {
            if (!$0.$1(this.$RY)) {
                h = this.$RY;
                for (c in h)
                    if (u = { key: c, value: h[c] }, !$0.$1(u.value))
                        for (o = u.value, f = 0; f < o.get_$5U().get_Count(); f++)
                            if (o.get_$5U().get_$H(f).get_$27().get_Count() > 0) {
                                if (t = o.get_$5U().get_$H(f).get_$27().get_$H(0).get_$Pd(), !this.$1m[t]) continue;
                                y = this.$1m[t][1];
                                n[t] = {};
                                l = this.$1m[t][0];
                                u.key !== this.$7y().$8S && (l += " (" + u.key + ")");
                                a = this.$2Gi(o.get_$5U().get_$H(f), y, t, l);
                                n[t].displaytext = a[0];
                                n[t].screenreadabletext = a[1];
                                n[t].entityname = u.key
                            }
                return e.stop(), e.addParameter(this.get_ViewModelId()), n
            }
            return null
        }
        if (!$0.$1(this.$Ld)) {
            for (r = 0; r < this.$Ld.get_$5U().get_Count(); r++)
                if (this.$Ld.get_$5U().get_$H(r).get_$27().get_Count() > 0) {
                    if (i = this.$Ld.get_$5U().get_$H(r).get_$27().get_$H(0).get_$Pd(), !this.$1m[i]) continue;
                    v = this.$1m[i][1];
                    n[i] = {};
                    s = this.$2Gi(this.$Ld.get_$5U().get_$H(r), v, i, this.$1m[i][0]);
                    n[i].displaytext = s[0];
                    n[i].screenreadabletext = s[1]
                }
            return e.stop(), e.addParameter(this.get_ViewModelId()), n
        }
        return null
    },
    $Ot: function(n, t) {
        var i, r;
        this.set_IsLoading(!0);
        i = {};
        i.EntityType = t;
        i.Attributes = n;
        i.OnSuccess = this.$$d_$4Y;
        r = this.$PE.$DC(i);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(r);
        this.$1F3.start()
    },
    $4Y: function(n) {
        var i, t;
        this.$1F3.stop();
        this.$1F3.addParameter(this.get_ViewModelId());
        i = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("AppliedFilters_AttributeMetadataCaching");
        i.start();
        this.$2A = !1;
        for (var u = n, f = u.length, r = 0; r < f; ++r) {
            t = u[r];
            switch (t.get_$5M()) {
            case 20:
            case 11:
            case 0:
            case 13:
            case 12:
                this.$1m[t.get_$1l()] = [
                    t.get_$AB(), t.get_$5M(), Microsoft.Crm.Client.Core.Framework.$1J.$l(t.get_$Bs().$2f).toString()
                ];
                break;
            default:
                this.$1m[t.get_$1l()] = [t.get_$AB(), t.get_$5M()]
            }
        }
        i.stop();
        i.addParameter(this.get_ViewModelId());
        this.$8("CurrentAppliedFilters");
        this.$Ib("AppliedFilters_LoadedFilters")
    },
    $7y: function() { return this.$2 },
    get_TabSpaceReserved: function() { return 50 },
    AppliedFilterScreenReaderText: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("AppliedFilters_ScreenReader_Label"), n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel = function() {
    this.$$d_$2cb = Function.createDelegate(this, this.$2cb);
    this.$$d_$1Xq = Function.createDelegate(this, this.$1Xq);
    this.$$d_$1Ti = Function.createDelegate(this, this.$1Ti);
    this.$$d_DefinitionUpdated = Function.createDelegate(this, this.DefinitionUpdated);
    Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel.prototype = {
    $19t: null,
    $cG: null,
    $1K2: null,
    $1V7: !1,
    get_$z0: function() {
        return this.$Rn
            ? "SubGridAssociated:" + this.$J
            : Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.get_$z0.call(this)
    },
    get_ColumnsForGrid: function() {
        var n;
        if (this.$19t = Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype
            .get_ColumnsForGrid.call(this), !$0.$1(this
            .$19t))
            for (var i = this
                         .$19t,
                r = i.length,
                t = 0;
                t < r;
                ++t)
                n = i[t], "name" in n &&
                    "hidden" in n &&
                    Array.contains(this.$2yK(), n.name.toString().toLowerCase()) &&
                    (n.hidden = !0);
        return this.$19t
    },
    $2yK: function() {
        switch (this.$J.toLowerCase()) {
        case"activitypointer":
            return["scheduledstart", "community", "instancetypecode"];
        case"incident":
            return["prioritycode", "caseorigincode", "customerid"];
        case"contact":
            return["parentcustomerid", "emailaddress1"];
        case"socialprofile":
            return[];
        default:
            return[]
        }
    },
    get_AssociatedGridFlyoutViewModel: function() {
        if (!$0.$1(this.$1K2)) {
            var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("GridFlyoutViewModel",
                    "GridViewFlyout",
                    "GridViewFlyout",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("Data", this.$1K2), new Microsoft.Crm.Client.Core.Models.Descriptors
                        .ViewModel.ValuePropertyDescriptor("SelectElementDataId", "gridView"), new Microsoft.Crm.Client
                        .Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("SelectedItemID", $0.$1(this.$Gh) ? this.get_DefinitionId() : this.$J)
                    ],
                    null,
                    null);
            this.$cG = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
                .$7I(n, this.get_ModelContext(), this.$3M, this.$2);
            this.$cG.add_$1Fb(this.$$d_DefinitionUpdated)
        }
        return this.$cG
    },
    DefinitionUpdated: function(n) {
        var t = n, i = t.$9W[t.$Iu];
        this.OnDefinitionUpdated(i)
    },
    $jf: null,
    get_SystemViewData: function() { return this.$jf },
    set_SystemViewData: function(n) { return this.$jf = n, n },
    $bL: null,
    $bW: !1,
    get_IsAssociatedGridActive: function() { return this.$bW },
    set_IsAssociatedGridActive: function(n) { return this.$bW = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$17.call(this), this
            .$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$4b,
                this.$$d_$1Ti), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Y9()
            .$A2(Microsoft.Crm.Client.Core.Framework.$3g, this.$$d_$1Xq), this.$bW = !1, this.$bL = Microsoft.Crm.Client
            .Core.ViewModels.ApplicationShellViewModel.get_instance().$6i, this.add_$2ca(this.$$d_$2cb))
    },
    $2cb: function() { this.SetCommandBarContext() },
    $1db: function(n) { return n.val = this.$J, !0 },
    $3UE: function() { return!1 },
    $3UG: function() { return!1 },
    $3UF: function() { return!1 },
    get_$37R: function() { return!1 },
    get_$373: function() { return!1 },
    $4Y: function(n) {
        this.$bW &&
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$4Y.call(this, n)
    },
    $5J: function(n) {
        this.$bW &&
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$5J.call(this, n)
    },
    $2Tp: function(n) {
        var t, r, u, i;
        return this.$FI
            ? (t = n.$6a.get_$H("fetchXml").Data, t = Microsoft.Crm.Client.Core.ViewModels.$2D
                .$1nP(t, this.$G3), r = Microsoft.Crm.Client.Core.ViewModels.$2D
                .$1D2(t), $0.$1(r) && !Microsoft.Crm.Client.Core.ViewModels.$2D.$1ER(this.$G3))
            ? (this.$17n = !0, n)
            : (u = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(t), i = Microsoft.Crm.Client.Core
                .ViewModels.$2D.$1TF(t), $0.$1(i) || (this.$14I = i.toString()), this.$2UW(), u)
            : n
    },
    $268: function(n) { this.$cG.ItemSelected(n) },
    $1Xq: function(n) {
        var i, u, f;
        if (!n.get_$LB() && this.$bW) {
            if (!$0.$1(this.$2.$F) && "InteractionCentricFormBody" in this.$2.$F) {
                var t = null, e = this.$2.$F.InteractionCentricFormBody, r = e.$F;
                for (i in r) {
                    u = { key: i, value: r[i] };
                    t = u.value;
                    break
                }
                !$0.$1(t) &&
                    "HeaderGroup" in this.$2.$F &&
                    "InteractionCentricFormTabNavigator" in this.$2.$F.HeaderGroup.$F &&
                    (f = this.$2.$F.HeaderGroup.$F.InteractionCentricFormTabNavigator, f
                        .set_CurrentSelectedValue(t.get_Name()))
            }
            this.$bL.$yp();
            this.$bL.forceRuleEvaluation()
        }
    },
    $3Vb: function() {
        if (!$0.$1(this.$2.$F) &&
            "HeaderGroup" in this.$2.$F &&
            "InteractionCentricFormTabNavigator" in this.$2.$F.HeaderGroup.$F) {
            var n = this.$2.$F.HeaderGroup.$F.InteractionCentricFormTabNavigator;
            n.$SV !== "AssociatedGrid0" && n.set_CurrentSelectedValue("AssociatedGrid0")
        }
    },
    $1Ti: function(n) {
        n.$Xp === "AssociatedGrid0"
            ? (this.$3Vb(), this.$bW = !0, this.SetCommandBarContext(), Microsoft.Crm.Client.Core.ViewModels
                .InteractionCentricNavigationEventManager.get_Instance().$1mu(this.$2))
            : (this.$bW = !1, this.$bL.$yp(), this.$bL.forceRuleEvaluation())
    },
    $3Ic: function() {
        if (!$0.$1(this.$jf) && !$0.$1(this.$jf.$F)) {
            var n = {},
                t = this.$jf.$F[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name")].$F;
            n[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_View_Group_Name")] = t;
            this.$1K2 = n;
            this.$8("AssociatedGridSelectViewDataReceived")
        }
    },
    SetCommandBarContext: function() {
        if (!this.$1V7) {
            this.$1V7 = !0;
            this.$bL.$yp();
            var n = this, t = this;
            this.$bL.$14U(this.get_$z0(), this).then(function(t) {
                    var f, o, e, r, u, i, s;
                    if (t)
                        for (f = !1, o = n.$bL.$Er, e = 0; e < o.get_Count() && !f; ++e)
                            if (r = o.getItem(e), n.$2dP(r), !$0.$1(r) && "ChangeListViewButton" in r.$F) {
                                for (u = r
                                        .findActiveChildViewModels(), i = 0;
                                    i < u.length && !f;
                                    i++)
                                    u[i].$11 === "ChangeListViewButton" &&
                                    (n.$jf = u[i], Microsoft.Crm.Client.Core.ViewModels
                                        .InteractionCentricGridControlViewModel.get_$OQ() &&
                                        (s = u[i].$F[Microsoft.Crm.Client.Core.Framework.Common.$2
                                            .$6("CRM_System_View_Group_Name")], n.$1Yk(s.$F, !1)), f = !0);
                                n.$3Ic()
                            }
                    n.$1V7 = !1
                },
                function() {})
        }
    },
    $2dP: function(n) {
        var t = n.$1mo([".AddExistingStandard"]), i;
        t &&
            t.length > 0 &&
            (i = t[0], i.set_ActionCommand(Microsoft.Crm.Client.Core.ViewModels.CommandFactory
                .$y(this,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.CommandDescriptor("OpenAssociateForm"))))
    },
    $GN: function() {
        this.$jf = null;
        $0.$1(this.$cG) || (this.$cG.remove_$1Fb(this.$$d_DefinitionUpdated), this.$cG.dispose(), this.$cG = null);
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$4b,
            this.$$d_$1Ti);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Y9()
            .$Ah(Microsoft.Crm.Client.Core.Framework.$3g, this.$$d_$1Xq);
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel = function() {
    Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel.prototype = {
    $XT: null,
    get_CardFormAttributes: function() { return this.$XT },
    set_CardFormAttributes: function(n) { return this.$XT = n, n },
    $iu: null,
    get_CardDetails: function() { return this.$iu },
    set_CardDetails: function(n) { return this.$iu = n, n },
    $iw: null,
    get_CardHeader: function() { return this.$iw },
    set_CardHeader: function(n) { return this.$iw = n, n },
    $iv: null,
    get_CardFooter: function() { return this.$iv },
    set_CardFooter: function(n) { return this.$iv = n, n },
    $Rc: null,
    get_ColorStrip: function() { return this.$Rc },
    set_ColorStrip: function(n) { return this.$Rc = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.$5I.prototype.$17.call(this), this.$iu = this.$XT.CardDetails, this
            .$iw = this.$XT.CardHeader, this.$iv = this.$XT.CardFooter, this.$Rc = this.$XT.ColorStrip[0])
    },
    $GN: function() {
        this.$XT = null;
        this.$iu = null;
        this.$iw = null;
        this.$iv = null;
        this.$Rc = null;
        Microsoft.Crm.Client.Core.ViewModels.$5I.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Cl = function() { Microsoft.Crm.Client.Core.ViewModels.$Cl.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$Cl.prototype = {
    handleCollapsibleToggleButtonClick: function() {
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("VisualFilterCollapseButtonClicked", 0, this.get_ViewModelId());
        var n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g(this.$I);
        this.$7y().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g, n)
    },
    $7y: function() { return this.$2 }
};
Microsoft.Crm.Client.Core.ViewModels.$UJ = function() { Microsoft.Crm.Client.Core.ViewModels.$UJ.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$UJ.prototype = {
    $6I: null,
    $17: function() { this.$1x || (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this), this.getData()) },
    get_ComboBoxViewModel: function() {
        return $0.$1(this.$6I) && (this.$6I = new Microsoft.Crm.Client.Core.ViewModels.$9d), this.$6I
    },
    getData: function() {},
    $1ej: null,
    get_ComboBoxClass: function() { return this.$1ej },
    set_ComboBoxClass: function(n) { return this.$1ej = n, n },
    $1gQ: null,
    get_SelectElementDataId: function() { return this.$1gQ },
    set_SelectElementDataId: function(n) { return this.$1gQ = n, n },
    $1go: null,
    get_WrapperClass: function() { return this.$1go },
    set_WrapperClass: function(n) { return this.$1go = n, n }
};
Microsoft.Crm.Client.Core.ViewModels.$Cx = function() {
    this.$$d_$2lK = Function.createDelegate(this, this.$2lK);
    Microsoft.Crm.Client.Core.ViewModels.$Cx.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Cx.prototype = {
    $2HV: function(n) { return n.$Ir },
    $30D: function(n) { return n.$2Z },
    SelectedItemName: function() {
        if (!this.$9W) return"";
        var n = this.$9W[this.$2.$g];
        return n ? n.$Ir : ""
    },
    get_SelectedItemID: function() {
        if (!this.$9W) return"";
        var n = this.$9W[this.$2.$g];
        return n ? n.$2Z : ""
    },
    getData: function() {
        this.$1bm();
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2Gb(this, this.$$d_$2lK)
    },
    ItemSelected: function(n) {
        var i, t;
        if (!IsNull(this.$9W)) {
            if (this.get_SelectedItemID() === n) return;
            Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("DashboardPickerDashboardChanged", 0, this.get_ViewModelId());
            i = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance();
            i.$XU = this.$9W[n];
            t = new Microsoft.Crm.Client.Core.Commands.OpenDashboardCommand(this.$2);
            t.$1s = i.$XU.$2Z;
            t.$Mj = 37;
            t.execute();
            t.dispose()
        }
    },
    $2lK: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(),
            r = this.$2.$g,
            e,
            t,
            u,
            i,
            f;
        if (n.$XU && (r = n.$XU.$2Z), e = Microsoft.Crm.Client.Core.ViewModels.$6p
            .$2CO(n.$xa, r), e
            ? t = n.$xa
            : (n.$XU || (n.$XU = Microsoft.Crm.Client.Core.ViewModels.$6p.$2q6(n.$Ri, r)), t = n.$Ri[n.$XU
                .$7d]), !IsNull(t) && t.get_Count() > 0) {
            for (this.$Gi = {}, u = {}, i = 0; i < t.get_Count(); i++) f = t.get_$H(i), u[f.$2Z] = f;
            this.$Gi[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name")] = u;
            this.$1bm();
            n.$XU = null;
            this.$8("dataRecieved")
        }
    },
    $GN: function() {
        this.$Gi = null;
        Microsoft.Crm.Client.Core.ViewModels.$Ur.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Cy = function() {
    Microsoft.Crm.Client.Core.ViewModels.$Cy.initializeBase(this);
    this.$wp = "dateRangeFilterOpen"
};
Microsoft.Crm.Client.Core.ViewModels.$Cy.prototype = {
    SetDates: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$D0.prototype.SetDates.call(this, n, t);
        this.$3J2()
    },
    $3J2: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$EA), t;
        n.$9o(this.$EA, "on-or-after", this.$i0.format("s")).$9o(this.$EA, "on-or-before", this.$dy.format("s"));
        t = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m(this.$EA, 2, 0, n, !0);
        this.$2.$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, t)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$D0 = function() {
    var t;
    this.$$d_$12P = Function.createDelegate(this, this.$12P);
    this.$29M = new Microsoft.Crm.Client.Core.ViewModels.Converters.$Ky;
    Microsoft.Crm.Client.Core.ViewModels.$D0.initializeBase(this);
    var n = (new Date).getFullYear(), i = n - 100, r = n + 100;
    this.$MX = new Date("01/01/" + i);
    this.$12c = new Date("12/31/" + r);
    this.$1M2 = !1;
    t = Sys.CultureInfo.CurrentCulture.dateTimeFormat;
    this.$Xq = t.ShortestDayNames;
    this.$1MA = !1;
    this.$wp = ""
};
Microsoft.Crm.Client.Core.ViewModels.$D0.prototype = {
    $1NI: "",
    $EA: "createdon",
    $2NK: null,
    $2N5: null,
    $1cg: null,
    $1QK: null,
    $MX: null,
    $12c: null,
    $i0: null,
    $dy: null,
    $Xq: null,
    get_ShortestDayNames: function() { return this.$Xq },
    set_ShortestDayNames: function(n) { return this.$Xq = n, n },
    DayName: function(n) { return this.$Xq[n] },
    SetAttributeDisplayName: function() {
        var n, t;
        if (this.$1NI === "") {
            if (n = [], n[0] = this.$EA, t = this.$2
                .$8S, !t)
                throw Error.create(String
                    .format("SetAttributeDisplayName() has failed in DateRangeViewModel, entityName is null."));
            this.$Ot(t, n)
        }
    },
    $Ot: function(n, t) {
        var i = {}, r, u;
        i.EntityType = n;
        i.Attributes = t;
        i.OnSuccess = this.$$d_$12P;
        r = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("AttributeMetadata", null));
        u = r.$DC(i);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(u)
    },
    $12P: function(n) {
        if (!$0.$1(n) && n.length) {
            var t = n[0];
            this.set_AttributeDisplayName(t.$1P)
        }
    },
    DateConverter: function(n) { return this.$29M.$Hw(n, 0) },
    GetLabel: function(n) { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6(n) },
    $y2: null,
    get_TimeFrame: function() { return this.$y2 },
    set_TimeFrame: function(n) { return this.$y2 = n, n },
    $1MA: !1,
    get_TimeFrameInitialized: function() { return this.$1MA },
    set_TimeFrameInitialized: function(n) { return this.$1MA = n, n },
    get_AttributeLogicalName: function() { return this.$EA },
    set_AttributeLogicalName: function(n) { return this.$EA = n, n },
    get_AttributeDisplayName: function() { return this.$1NI },
    set_AttributeDisplayName: function(n) { return this.$1NI = n, this.$8("FilterBy"), n },
    get_DateTextForMinDate: function() { return this.DateConverter(this.$MX) },
    set_DateTextForMinDate: function(n) { return this.$2NK = n, n },
    get_MinDate: function() { return this.$MX },
    set_MinDate: function(n) { return this.$MX = n, n },
    get_DateTextForMaxDate: function() { return this.DateConverter(this.$12c) },
    set_DateTextForMaxDate: function(n) { return this.$2N5 = n, n },
    get_MaxDate: function() { return this.$12c },
    set_MaxDate: function(n) { return this.$12c = n, n },
    get_StartDateText: function() { return this.$ba ? "" : this.DateConverter(this.$i0) },
    set_StartDateText: function(n) {
        return this.$1cg = n, Microsoft.Crm.Client.Core.Framework.$3.$A(n)
            ? this.$ba = !0
            : (this.$ba = !1, this.$i0 = new Date(n)), this.$8("StartDate"), n
    },
    get_StartDate: function() { return this.$i0 },
    set_StartDate: function(n) { return this.$i0 = n, n },
    get_EndDateText: function() { return this.$bY ? "" : this.DateConverter(this.$dy) },
    set_EndDateText: function(n) {
        return this.$1QK = n, Microsoft.Crm.Client.Core.Framework.$3.$A(n)
            ? this.$bY = !0
            : (this.$bY = !1, this.$dy = new Date(n)), this.$8("EndDate"), n
    },
    get_DateRangeText: function() {
        return this.get_StartDateText() || this.get_EndDateText()
            ? this.get_StartDateText() + "-" + this.get_EndDateText()
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ChartAttributeValueMissing")
    },
    get_EndDate: function() { return this.$dy },
    set_EndDate: function(n) { return this.$dy = n, n },
    $wp: null,
    get_DataId: function() { return this.$wp },
    set_DataId: function(n) { return this.$wp = n, n },
    $1M2: !1,
    get_ShowNoRange: function() { return this.$1M2 },
    set_ShowNoRange: function(n) { return this.$1M2 = n, n },
    $ba: !1,
    get_IsStartDateNull: function() { return this.$ba },
    set_IsStartDateNull: function(n) { return this.$ba = n, n },
    $bY: !1,
    get_IsEndDateNull: function() { return this.$bY },
    set_IsEndDateNull: function(n) { return this.$bY = n, n },
    SetDates: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.$3.$A(n) || Microsoft.Crm.Client.Core.Framework.$3.$A(t)
            ? (this.$1cg = null, this.$1QK = null, this.$ba = !0, this.$bY = !0)
            : (this.$1cg = n, this.$i0 = new Date(n), this.$1QK = t, this.$dy = new Date(t))
    }
};
Microsoft.Crm.Client.Core.ViewModels
    .EmailAttachmentViewModel = function() {
        Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.initializeBase(this)
    };
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("EmailAttachmentViewModel",
            Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel)
    };
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$2f6 = function(n) {
    switch (n) {
    case 1:
    case 8:
    case 5:
        return!0;
    case 2:
    case 3:
    case 4:
    case 6:
    case 7:
        return!1;
    default:
        return!1
    }
};
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$2f5 = function(n) {
    switch (n) {
    case 0:
    case 3:
        return!0;
    case 1:
    case 2:
        return!1;
    default:
        return!1
    }
};
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel
    .$2AR = function(n, t) {
        return t === "4201"
            ? Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$2f5(n)
            : t === "4202" ? Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$2f6(n) : !1
    };
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.prototype = {
    $j8: null,
    get_FileName: function() { return this.$j8 },
    set_FileName: function(n) { return this.$j8 = n, n },
    $UV: null,
    get_FileSize: function() { return this.$UV },
    set_FileSize: function(n) { return this.$UV = n, n },
    $xc: null,
    get_ObjectId: function() { return this.$xc },
    set_ObjectId: function(n) { return this.$xc = n, n },
    $q5: null,
    $wW: null,
    get_AttachmentId: function() { return this.$wW },
    set_AttachmentId: function(n) { return this.$wW = n, n },
    get_PopupWindowTimeout: function() { return 100 },
    $xG: !1,
    $17: function() {
        this.$1x ||
        (this.$2.$J === "appointment"
            ? (this.$q5 = "4201", this.$xG = !1)
            : this.$2
            .$J ===
            "email"
            ? (this.$q5 = "4202", this.$xG = !0)
            : (this.$q5 = "", this.$xG = !0), $0.$1(this.$2) ||
            $0.$1(this.$2.get_$1N()) ||
            (this.$xc = this.$2.get_$1N().get_Id()), Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this))
    },
    GetAttachmentItemUri: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$5F();
        return String
            .format("{0}/activities/attachment/edit.aspx?_CreateFromId=%7b{1}%7d&_CreateFromType={2}&id={3}&ish=true",
                n.context.getClientUrl(),
                this.$xc,
                this.$q5,
                this.ToStringAttachmentId())
    },
    ToStringAttachmentId: function() { return $0.$1(this.$wW) ? "" : this.$wW.toString() },
    Refresh: function() {
        var n = this.$2.$7V("EmailAttachmentsSubGrid");
        Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel.isInstanceOfType(n) &&
            !$0.$1(n.refreshCommand) &&
            n.refreshCommand.get_CanExecute() &&
            n.refreshCommand.execute()
    },
    GetWindowOptions: function(n, t, i, r) {
        return String.format("width={0}, height={1}, top={2}, left={3}, menubar=no, toolbar=no", n, t, i, r)
    },
    GetPopupWidth: function() { return 584 },
    GetPopupHeight: function() { return 213 },
    $32g: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$5F(), t = -1;
        return $0.$1(n) ||
        (this.$xG && !$0.$1(n.getAttribute("statuscode"))
            ? t = n.getAttribute("statuscode").getValue()
            : this.$xG || $0.$1(n.getAttribute("statecode")) || (t = n.getAttribute("statecode").getValue())), t
    },
    EnableAttachmentHandling: function() {
        var n = this.$32g();
        return Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$2AR(n, this.$q5)
    },
    $GN: function() {
        this.$j8 = null;
        this.$UV = null;
        this.$xc = null;
        this.$q5 = null;
        this.$wW = null;
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$LY = function(n, t, i, r, u, f, e, o, s) {
    this.$pR = n;
    this.$1g9 = t;
    this.$1gM = i;
    this.$1KR = r;
    this.$1Le = u;
    this.$1Lv = f;
    this.$1Lf = e;
    this.$1Lx = o;
    this.$pQ = s
};
Microsoft.Crm.Client.Core.ViewModels.$LY.prototype = {
    $pR: null,
    $1g9: null,
    $1gM: null,
    $1Le: null,
    $1Lv: null,
    $1KR: null,
    $1Lf: null,
    $1Lx: null,
    $pQ: null
};
Microsoft.Crm.Client.Core.ViewModels.$AI = function() {
    this.$$d_$3A1 = Function.createDelegate(this, this.$3A1);
    this.$$d_$3A7 = Function.createDelegate(this, this.$3A7);
    this.$$d_$39z = Function.createDelegate(this, this.$39z);
    this.$$d_$12P = Function.createDelegate(this, this.$12P);
    this.$$d_processQueueItemViewFetchXml = Function.createDelegate(this, this.processQueueItemViewFetchXml);
    this.$$d_$3A0 = Function.createDelegate(this, this.$3A0);
    this.$$d_processQueueSavedQueryFetchXml = Function.createDelegate(this, this.processQueueSavedQueryFetchXml);
    this.$$d_$3JX = Function.createDelegate(this, this.$3JX);
    this.$$d_OnFilterChangeCompletedEvent = Function.createDelegate(this, this.OnFilterChangeCompletedEvent);
    this.$tF = {};
    this.$1NL = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    Microsoft.Crm.Client.Core.ViewModels.$AI.initializeBase(this);
    this.$PA = "savedquery";
    this.$bC = "savedqueryvisualization"
};
Microsoft.Crm.Client.Core.ViewModels.$AI.prototype = {
    $1JB: null,
    $22W: "",
    $fF: !1,
    $11e: "",
    $K7: null,
    $196: !1,
    $1XR: 0,
    $SH: null,
    $XY: !1,
    get_ViewNameText: function() { return this.$22W },
    set_ViewNameText: function(n) {
        this.$22W = n;
        var t = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d(this.$I, n);
        return this.$5j().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
            .$8d,
            t), n
    },
    get_ChartConfigObject: function() {
        return this.$PL_7 && (this.$PL_7 = !1, this.set_IsLoading(!0), this.$Ke()), this.$Uy
    },
    get_$k: function() { return!0 },
    get_IsFilterApplied: function() { return this.$fF },
    set_IsFilterApplied: function(n) { return this.$fF = n, n },
    $18M: null,
    get_Streams: function() { return this.$18M },
    set_Streams: function(n) { return this.$18M = n, n },
    $bQ: null,
    $1gC: null,
    $Ll: null,
    get_QueueItemViewId: function() { return this.$Ll },
    set_QueueItemViewId: function(n) { return this.$Ll = n, n },
    $Xl: null,
    get_QueueId: function() { return this.$Xl },
    set_QueueId: function(n) { return this.$Xl = n, n },
    $xN: null,
    get_IsSavedQueryOnQueues: function() { return this.$xN },
    set_IsSavedQueryOnQueues: function(n) { return this.$xN = n, n },
    $17z: null,
    $x3: null,
    $PL_7: !1,
    $1fR: !1,
    $pp: null,
    $bS: null,
    $1K4: null,
    get_$ug: function() { return this.$5j() ? this.$5j().$8S : "" },
    get_AreZeroValueBaseSetAttributeFieldsSet: function() { return this.$PL_7 ? !0 : this.$196 },
    set_AreZeroValueBaseSetAttributeFieldsSet: function(n) { return this.$196 = n, n },
    $17: function() {
        if (!this.$1x) {
            var n = Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("VisualFilters_Initialize", 0, this.get_ViewModelId());
            $0.$1(n) || n.addParameter(this.$I);
            this.$SH = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("VisualFilters_ChartDataRetrieve");
            this.set_ChartSeriesClickCommand(null);
            this.set_AllowPointSelect(!1);
            this.set_IsFirstChart(!1);
            this.set_EnableDrilldown(!1);
            this.$x3 = null;
            this.$3RE();
            Microsoft.Crm.Client.Core.ViewModels.$2X.prototype.$17.call(this);
            this.$5j().$9F.$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O,
                this.$$d_OnFilterChangeCompletedEvent);
            this.$XY = !1;
            this.$PL_7 = !1;
            this.$5j().$9F.$A2(Function, this.$$d_$3JX)
        }
    },
    $3JX: function() {
        this.$Ke();
        this.$SH.start()
    },
    $3RE: function() {
        var n;
        if ($0.$1(this.$18M) || this.$5j().$dR !== "2") {
            this.$1Q0();
            return
        }
        if (n = this.$18M.split("|"), n.length < 4) {
            this.$1Q0();
            return
        }
        var r = n[0], t = n[1], u = n[2], i = n[3];
        switch (r) {
        case"0":
            this.$Xl = t;
            this.$xN = "false";
            this.$Ll = i;
            break;
        case"2":
            this.$Xl = t;
            this.$xN = "true";
            this.$Ll = i;
            break;
        case"1":
            this.$1Q0();
            break;
        default:
            this.$1Q0()
        }
    },
    $1Q0: function() {
        this.$Ll = null;
        this.$Xl = null
    },
    $1s7: function() { return!$0.$1(this.$Ll) && !$0.$1(this.$Xl) ? !0 : !1 },
    $Ke: function() {
        if (!$0.$1(this.$A8)) {
            var n = this;
            this.$2Ma().done(function() {
                n.$1s7() ? n.$2IJ() : Microsoft.Crm.Client.Core.ViewModels.Controls.$Cr.prototype.$Ke.call(n)
            })
        }
    },
    $2Ma: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("FilterGraphVM.GetDependencies"),
            i;
        return t.start(), Microsoft.Crm.Client.Core.Framework.$1o
            .$1pB("resources/styles/ishCssDependenciesPostLoad.css", null), i = this, Microsoft.Crm.Client.Core
            .Framework.$1o.$1D7([
                    "scripts/Microsoft.Crm.Client.Core.Messages.js", "scripts/ishOssDependenciesPostLoad.js"
                ],
                0,
                null).always(function() {
                n.resolve();
                t.stop()
            }), n.promise()
    },
    $2IJ: function() {
        var n, t;
        this.$xN === "true"
            ? (this.$pp = {}, this.$pp.savedqueryid = this.$Xl, n = new Microsoft.Crm.Client.Core.Models.Descriptors
                .ViewModel.QueryDescriptor("RetrieveFetchXmlFromSavedQueryId", null), n.OnSuccess = this
                .$$d_processQueueSavedQueryFetchXml, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                .get_instance().$2T("ActionProvider", this, n))
            : (t = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, "QueueFilterExpression"), t
                .$9o("queueid", "eq", this.$Xl), this.$17z = t, this.$2DH())
    },
    processQueueSavedQueryFetchXml: function(n) {
        var i = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n.toString()),
            r = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(i).$O("fetch").get_$7W().toString(),
            t = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("FilterGraphFetchXmlWithCallback", null);
        t.OnFailure = this.$$d_$3A0;
        t.QueryValue = r;
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, t)
    },
    $3A1: function(n) {
        for (var u,
            i = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, "QueueFilterExpression"),
            r = n.get_entities(),
            f = r.length,
            t = 0;
            t < f;
            ++t) u = r[t], i.$9o("queueid", "eq", u.$N.Id.toString());
        this.$17z = i;
        this.$2DH()
    },
    $3A0: function() { throw Error.create("FilterGraphViewModel: Queue FetchXml execution failed."); },
    $2DH: function() {
        this.$1gC = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i("queueitem").$4M;
        this.$pp = {};
        this.$pp.savedqueryid = this.$Ll;
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveFetchXmlFromSavedQueryId", null);
        n.OnSuccess = this.$$d_processQueueItemViewFetchXml;
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
    },
    processQueueItemViewFetchXml: function(n) {
        var r = this.$2ro(), u = Microsoft.Crm.Client.Core.Storage.Common.$2c.$12f(n, r), t, i;
        this.$bQ = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(u);
        t = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXmlForFilterGraph", null));
        i = t.$4W();
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(i)
    },
    $39z: function(n) {
        var e, o;
        if (!n.get_entities().length) {
            this.$x3 = this.$2ru();
            Microsoft.Crm.Client.Core.ViewModels.Controls.$Cr.prototype.$Ke.call(this);
            return
        }
        for (var r = "",
            u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.get_$ug()).$4M,
            t =
                "<fetch version='1.0' output-format='xml-platform' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='" + this.get_$ug() + "'>\r\n\t\t\t\t\t\t\t\t<attribute name='" + u + "' />\r\n\t\t\t\t\t\t\t\t<filter type = 'or'>",
            f = n.get_entities(),
            s = f.length,
            i = 0;
            i < s;
            ++i)
            e = f[i], o = e.getValue("objectid"), r += "<condition attribute='" +
                u +
                "' operator='eq' value='" +
                o.Id.toString() +
                "' />";
        t += r;
        t += "<\/filter><\/entity><\/fetch>";
        this.$x3 = t;
        Microsoft.Crm.Client.Core.ViewModels.Controls.$Cr.prototype.$Ke.call(this)
    },
    $3A7: function() { throw Error.create("FilterGraphViewModel: QueueItem FetchXml execution failed."); },
    $2ro: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "EntityTypeQueueFilterExpression"),
            t = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "EntityTypeFilterExpression");
        return t.$9o("objecttypecode", "eq", Xrm.Internal.getEntityCode(this.get_$ug()).toString()), n.$6X(t), n
            .$6X(this.$17z), n.$7F()
    },
    $2ru: function() {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.get_$ug()).$4M;
        return"<fetch version='1.0' output-format='xml-platform' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='" +
            this.get_$ug() +
            "'>\r\n\t\t\t\t\t\t\t\t<attribute name='" +
            n +
            "' />\r\n\t\t\t\t\t\t\t\t<filter type = 'or'>\r\n\t\t\t\t\t\t\t\t<condition attribute='" +
            n +
            "' operator='eq' value='" +
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() +
            "' />\r\n\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t<\/fetch>"
    },
    $3Qs: function(n) {
        var t, i, u, r, f;
        if (this.$K7)
            if (t = this.$K7.$pQ, this.$fF) {
                for (i = 0; i < t.get_Count(); i++) if (u = n.$F3(t.get_$H(i)), !$0.$1(u)) return;
                this.$fF = !1;
                this.$8("IsFilterApplied")
            } else for (r = 0; r < t.get_Count(); r++) f = n.$F3(t.get_$H(r)), $0.$1(f) || this.$8("IsFilterApplied")
    },
    $3Qt: function(n) {
        var t, i, e, u, o, r, s, f, h;
        if (this.$K7)
            if (t = this.$K7.$pQ, this.$fF) {
                if (!$0.$1(n))
                    for (i = 0; i < t.get_Count(); i++)
                        if (e = this.$1Sv(t
                            .get_$H(i)), u = n[e], !$0.$1(u) && (o = u.$F3(t.get_$H(i)), !$0.$1(o))) return;
                this.$fF = !1;
                this.$8("IsFilterApplied")
            } else if (!$0.$1(n))
                for (r = 0; r < t.get_Count(); r++)
                    s = this.$1Sv(t.get_$H(r)), f = n[s], $0.$1(f) ||
                        (h = f.$F3(t.get_$H(r)), $0.$1(h) || this.$8("IsFilterApplied"))
    },
    FilterGraphRenderCompleted: function() {
        var n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r("FilterGraph");
        this.$5j().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r, n)
    },
    OnFilterChangeCompletedEvent: function(n) {
        var t, i, r;
        if (this.$1XR++, this.$1fR = n.$UO.$1VE, this.$5j().get_IsMultipleEntityGraphSupported()) {
            this.$tF = {};
            t = n.$NB;
            for (i in t) r = { key: i, value: t[i] }, this.$tF[r.key] = n.$NB[r.key].$7F();
            this.$3Qt(this.$5j().$Ej)
        } else this.$11e = n.$Gj.$7F(), this.$3Qs(this.$5j().$Lj);
        if (!this.$XY) {
            this.$PL_7 = !0;
            return
        }
        this.$1XR >= 5 && this.$1Ky ? this.$36g() : (this.$Ke(), this.$SH.start())
    },
    $36g: function() {
        this.$1Ky = !1;
        this.$1XR = 0;
        this.set_$22r(null)
    },
    $21j: function() {
        $0.$1(this.$FT) ||
        (this.$SH.stop(), this.$SH.addParameter(this.get_ViewModelId()), this.$SH.addParameter(this.$I), Microsoft
            .Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo(this
                .$XY
                ? "RenderedRefreshedData"
                : "LoadedInitialData",
                0,
                this.get_ViewModelId()), this.$XY || (this.$Ib("RenderedInitialData"), this.$XY = !0), Microsoft.Crm
            .Client.Core.ViewModels.Controls.$Cr.prototype.$21j.call(this), this.$1JB = this.$6U.Text, this.$6U
            .Text = "", this.$1nG(), this.$2ZO(), this.$8("ChartConfigObject"))
    },
    $2ZO: function() {
        for (var l, r, u, a, n, f, e, t, o, y, h = {}, c = this.$K7.$pR.get_entities(), p = c.length, i = 0;
            i < p;
            ++i
        ) {
            l = c[i];
            r = l.fields;
            for (u in r) a = { key: u, value: r[u] }, this.$2ny(a.value, h)
        }
        n = null;
        f = h;
        for (e in f)
            if (t = { key: e, value: f[e] }, o = t.value.toArray(), this.$Ot(t.key, o), !n)
                for (var v = o, w = v.length, s = 0; s < w; ++s)
                    if (y = v[s], y === this.$K7.$pQ.get_$H(0)) {
                        n = t.key;
                        break
                    }
        this.$5j().get_IsMultipleEntityGraphSupported() || this.$Ot(n ? n : this.$5j().$8S, this.$K7.$pQ.toArray())
    },
    $2ny: function(n, t) {
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$56.isInstanceOfType(n)) {
            var r = n, u = r.$EA, i = r.$T;
            i in t || (t[i] = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)));
            t[i].add(u);
            this.$5j().get_IsMultipleEntityGraphSupported() || (this.$bS || (this.$bS = {}), this.$bS[u] = i)
        }
    },
    $Ot: function(n, t) {
        var i = {}, r, u;
        i.EntityType = n;
        i.Attributes = t;
        i.OnSuccess = this.$$d_$12P;
        r = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("AttributeMetadata", null));
        u = r.$DC(i);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(u)
    },
    $12P: function(n) {
        var i;
        if (this.$FT.$J7 !== 1)
            for (var r = n, u = r.length, t = 0; t < u; ++t)
                if (i = r[t], i.get_$mx() && !Microsoft.Crm.Client.Core.ViewModels.Controls.$68.$yh(i.get_$1Z())) {
                    this.$1DI(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_NoReadPrivilege"),
                        Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_NoPermission_Message"));
                    break
                }
    },
    $1DI: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Models.Chart.$IE;
        i.$6U = new Microsoft.Crm.Client.Core.Models.$JC;
        i.$ar = "";
        i.$J7 = 1;
        i.$Dg = new Microsoft.Crm.Client.Core.Framework.$N7;
        i.$Dg.$e7 = n;
        i.$Dg.$YO = t;
        this.set_$zD(i);
        this.$8("ChartConfigObject")
    },
    get_TitleText: function() { return this.$2A ? "" : this.$1JB },
    set_TitleText: function(n) { return this.$1JB = n, n },
    set_$22r: function(n) { return this.$K7 = n, this.$Ke(), this.$SH.start(), n },
    $1Ky: !1,
    get_GetNullPoint: function() { return null },
    $377: function(n) {
        return Microsoft.Crm.Client.Core.Models.$7l.isInstanceOfType(n) ||
            Microsoft.Crm.Client.Core.Models.$8j.isInstanceOfType(n) ||
            Microsoft.Crm.Client.Core.Models.$8k.isInstanceOfType(n)
            ? !0
            : !1
    },
    $282: function(n, t, i, r) {
        this.$5j().get_IsMultipleEntityGraphSupported() && i !== this.$5j().$8S ? i += "__alias" : i = null;
        Microsoft.Crm.Client.Core.Models.$8i.isInstanceOfType(t) && this.$2iV(n, t, i, r);
        Microsoft.Crm.Client.Core.Models.$7l.isInstanceOfType(t) && this.$2iS(n, t, i);
        Microsoft.Crm.Client.Core.Models.$8j.isInstanceOfType(t) && this.$2iT(n, t, i);
        Microsoft.Crm.Client.Core.Models.$8k.isInstanceOfType(t) && this.$2iU(n, t, i)
    },
    $2iV: function(n, t, i, r) {
        t.Value ? n.$9o(t.FieldName, "eq", t.Value.toString(), i, r) : n.$9o(t.FieldName, "null", null, i)
    },
    $2iS: function(n, t, i) {
        t.MinDate
            ? n.$9o(t.FieldName, "on-or-after", t.MinDate.toJSON().substring(0, 10), i)
            : n.$9o(t.FieldName, "null", null, i);
        t.MaxDate
            ? n.$9o(t.FieldName, "on-or-before", t.MaxDate.toJSON().substring(0, 10), i)
            : n.$9o(t.FieldName, "null", null, i)
    },
    $2iT: function(n, t, i) {
        var r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        r.add(t.Period.toString());
        r.add(t.Year.toString());
        n.$9o(t.FieldName, t.FiscalType, r, i)
    },
    $2iU: function(n, t, i) { n.$9o(t.FieldName, t.FiscalType, t.Year.toString(), i) },
    $3Qq: function(n) { this.$K7 = n },
    $1Sv: function(n) {
        var h, i, r, u, f, e, o;
        if (!$0.$1(n)) {
            if (!this.$bS) {
                this.$bS = {};
                for (var s = this.$K7.$pR.get_entities(), l = s.length, t = 0; t < l; ++t) {
                    h = s[t];
                    i = h.fields;
                    for (r in i)
                        if (u = { key: r, value: i[r] }, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$56
                            .isInstanceOfType(u.value)) {
                            var c = u.value, a = c.$EA, v = c.$T;
                            this.$bS[a] = v
                        }
                }
            }
            if (n in this.$bS) return this.$bS[n];
            if (!$0.$1(this.$1K4)) {
                f = this.$1K4;
                for (e in f) if (o = { key: e, value: f[e] }, n in o.value) return o.key
            }
            return this.$5j().$8S
        }
        return null
    },
    $2eB: function(n, t) {
        var s = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("VisualFilters_BuilderFilterExpressionForSelectedPoint"),
            e,
            u,
            o,
            i,
            f,
            r;
        if (s.start(), !$0.$1(n) && n.length > 0) {
            for (this.set_IsLoading(!0), this
                    .$fF = !0, e = null, u = null, this.$5j().get_IsMultipleEntityGraphSupported()
                    ? u = {}
                    : e = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "FilterGraph"), this.$1NL
                    .clear(), i = 0;
                i < n.length;
                i++)
                f = this.$377(n[i])
                    ? new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, n[i].FieldName)
                    : new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, n[i].FieldName), this.$1NL
                    .add(n[i].FieldName), this.$5j().get_IsMultipleEntityGraphSupported()
                    ? (r = this.$1Sv(n[i].FieldName), $0.$1(r) && (r = this.$5j().$8S), this
                        .$282(f, n[i], r, t), r in u ||
                    (u[r] = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                        .$5n(0, "FilterGraph")), u[r].$6X(f))
                    : (this.$282(f, n[i], this.$5j().$8S, t), e.$6X(f));
            this.$5j().get_IsMultipleEntityGraphSupported()
                ? (o = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                    .$5m("FilterGraph", 0, 0, null), o.$Ki = u)
                : o = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5m("FilterGraph", 0, 0, e);
            this.$5j().$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, o);
            this.$10H("IsFilterApplied", "IsLoading")
        }
        s.stop();
        s.addParameter(this.get_ViewModelId())
    },
    HandleSeriesPointClick: function(n) { this.$fF || this.$2eB(n.Aggregators) },
    $3I7: function(n) {
        for (var u,
            t,
            h,
            i,
            e,
            o,
            l = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n),
            a = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(l).$O("fetch/entity"),
            s = a.$5k("link-entity"),
            r = 0;
            r < s.get_$l();
            r++)
            if (u = s.get_$H(r), t = u.$1Q("name"), !Microsoft.Crm.Client.Core.Framework.$3.$A(t) &&
                !(t in this.$5j().$jQ)) {
                h = Microsoft.Crm.Client.Core.Storage.Common.$2c.$1pY();
                i = "";
                for (var c = h, v = c.length, f = 0;
                    f < v;
                    ++f
                ) e = c[f], o = u.$1Q(e), $0.$1(o) || (i += String.format(' {0}="{1}"', e, o));
                i += ' alias="' + t + '__alias" ';
                this.$5j().$jQ[t] = "<link-entity " + i + "/>"
            }
    },
    $GN: function() {
        this.$5j().$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O,
            this.$$d_OnFilterChangeCompletedEvent);
        this.$K7 = null;
        this.$11e = null;
        this.$1NL = null;
        this.$bQ = null;
        this.$17z = null;
        this.$pp = null;
        this.$5j().$9F.$Ah(Function, this.$$d_$3JX);
        $0.$1(this.$Nc) || (this.$Nc.$69(), this.set_CrmChartBuilder(null));
        this.set_PrimaryModelName(null);
        this.$FT = null;
        this.$tF = null;
        Microsoft.Crm.Client.Core.ViewModels.$2X.prototype.$GN.call(this)
    },
    get_TabSpaceReserved: function() { return 100 },
    $5j: function() { return this.$2 }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel = function() {
    this.$$d_$34F = Function.createDelegate(this, this.$34F);
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel.prototype = {
    $hM: null,
    $oX: null,
    $17: function() {
        this.$1x || Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this);
        this.$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$9H,
            this.$$d_$34F)
    },
    $34F: function(n) {
        this.$hM = n.$1gH;
        this.$hM && this.$8("SaveButtonDataReceived")
    },
    $2yL: function(n) {
        var t = new Microsoft.Crm.Client.Core.ViewModels.$2A;
        return t.set_Label(n.$1B), t.set_Parameters(n.$S), t.set_ImageName(n.$ex), t.set_ImageType(n.$ey), t.$Iz = n
            .$Iz, t.set_TargetViewModel(n.get_TargetViewModel()), t.$Df = n.$Df, t.set_Command(n.$7x), t
            .set_Enabled(!0), t.set_Visible(!0), t.set_ActionCommandCanExecute(!0), t
    },
    $2AA: function() {
        if (!$0.$1(this.$oX)) {
            for (var n = 0; n < this.$oX.get_Count(); ++n) this.$oX.get_$H(n).dispose(), this.$oX.set_$H(n, null);
            this.$oX.clear();
            this.$oX = null
        }
    },
    getSaveButtonViewModel: function() {
        var i, n, u, f;
        if (this.$hM) {
            i = this.$hM;
            n = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$2A));
            for (var r = i, e = r.length, t = 0; t < e; ++t) u = r[t], f = this.$2yL(u), n.add(f);
            return this.$2AA(), this.$oX = n, n.toArray()
        }
        return null
    },
    get_SaveButtonData: function() { return this.$hM },
    $GN: function() {
        var i;
        if (this.$hM) {
            for (var t = this.$hM, r = t.length, n = 0; n < r; ++n) i = t[n], i.dispose();
            this.$hM = null
        }
        this.$2AA();
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$9H,
            this.$$d_$34F);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Cz = function() {
    this.get_AttributeDisplayName = this.get_$3ak;
    this.set_AttributeDisplayName = this.set_$3ak;
    this.get_SelectedFilterExpression = this.get_$3an;
    this.set_SelectedFilterExpression = this.set_$3an;
    this.get_SelectedFilterCount = this.get_$X6;
    this.get_IsExpanded = this.get_$3aq;
    this.set_IsExpanded = this.set_$3aq;
    this.$33m = this.handleExpandOrCollapseIconClick;
    this.get_Active = this.get_$jp;
    this.set_Active = this.set_$jp;
    Microsoft.Crm.Client.Core.ViewModels.$Cz.initializeBase(this);
    this.$Ei = !0
};
Microsoft.Crm.Client.Core.ViewModels.$Cz.prototype = {
    $Fv: null,
    get_$3ak: function() { return this.$Fv },
    set_$3ak: function(n) { return this.$Fv = n, n },
    $3N: null,
    get_$3an: function() { return this.$3N },
    set_$3an: function(n) { return this.$3N = n, n },
    $Fz: !1,
    get_$3aq: function() { return this.$Fz },
    set_$3aq: function(n) { return this.$Fz = n, n },
    $Ei: !1,
    get_$jp: function() { return this.$Ei },
    set_$jp: function(n) { return this.$Ei = n, n },
    get_$X6: function() { return $0.$1(this.$3N) ? 0 : 1 },
    $2YZ: function(n) {
        if (this.$3N = n, $0.$1(this.$3N)) this.set_StartDateText(null), this.set_EndDateText(null);
        else {
            var t = this.$3N.get_$27();
            this.set_StartDateText(t.get_$H(0).get_$Jj() === "null" ? null : t.get_$H(0).get_$2M());
            this.set_EndDateText(t.get_$H(1).get_$Jj() === "null" ? null : t.get_$H(1).get_$2M())
        }
    },
    UpdateFilterExpression: function(n) {
        $0.$1(n) || $0.$1(n.Start) || $0.$1(n.End)
            ? this.$3N = null
            : (this.$3N = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$EA), this.$3N
                .$9o(this.$EA, "on-or-after", n.Start), this.$3N.$9o(this.$EA, "on-or-before", n.End));
        this.$2.$6B(this).$1JR(this.$3N, this.$EA)
    },
    handleExpandOrCollapseIconClick: function(n) {
        this.$Fz = n;
        this.$2.$6B(this).$1Zi()
    },
    $3V3: function() { this.$Fz = !!this.get_$X6() },
    SetDates: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$D0.prototype.SetDates.call(this, n, t);
        var i = {};
        i.Start = n;
        i.End = t;
        this.UpdateFilterExpression(i)
    },
    getScreenReadableText: function() {
        return this.get_$X6()
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_DateTimeRange"),
                this.$Fv,
                this.get_StartDateText(),
                this.get_EndDateText())
            : String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_DateTimeRange_NoneSelected"),
                this.$Fv)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$DX = function() {
    this.get_AttributeLogicalName = this.get_$3ah;
    this.set_AttributeLogicalName = this.set_$3ah;
    this.get_AttributeDisplayName = this.get_$3ak;
    this.set_AttributeDisplayName = this.set_$3ak;
    this.get_SelectedFilterExpression = this.get_$3an;
    this.set_SelectedFilterExpression = this.set_$3an;
    this.get_SelectedFilterCount = this.get_$X6;
    this.get_IsExpanded = this.get_$3aq;
    this.set_IsExpanded = this.set_$3aq;
    this.$33m = this.handleExpandOrCollapseIconClick;
    Microsoft.Crm.Client.Core.ViewModels.$DX.initializeBase(this);
    this.$Ei = !0
};
Microsoft.Crm.Client.Core.ViewModels.$DX.prototype = {
    $C0: null,
    get_$3ah: function() { return this.$C0 },
    set_$3ah: function(n) { return this.$C0 = n, n },
    $Fv: null,
    get_$3ak: function() { return this.$Fv },
    set_$3ak: function(n) { return this.$Fv = n, n },
    $3N: null,
    get_$3an: function() { return this.$3N },
    set_$3an: function(n) { return this.$3N = n, n },
    $Fz: !1,
    get_$3aq: function() { return this.$Fz },
    set_$3aq: function(n) { return this.$Fz = n, n },
    $Ei: !1,
    get_Active: function() { return this.$Ei },
    set_Active: function(n) { return this.$Ei = n, n },
    $PH: null,
    get_EntityReferences: function() { return this.$PH },
    set_EntityReferences: function(n) { return this.$PH = n, n },
    removeEntityReferenceForGuid: function(n) {
        delete this.$PH[n];
        this.$3N.$oN(new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$7J(this.$C0, "eq", n));
        this.$8("RemovedEntity");
        this.$2.$6B(this).$1JR(this.$3N, this.$C0)
    },
    getGuidAtIndex: function(n) {
        return!$0.$1(this.$3N) && !$0.$1(this.$3N.get_$27().get_Items()[n].get_$2M())
            ? this.$3N.get_$27().get_Items()[n].get_$2M().toString()
            : null
    },
    getSelectedFilterName: function(n) { return $0.$1(this.$PH[n]) ? null : this.$PH[n].toString() },
    get_$X6: function() { return $0.$1(this.$3N) ? 0 : this.$3N.get_$27().get_Count() },
    $2YZ: function(n) {
        this.updateEntityReferences(n);
        this.$3N = n;
        var i = this.$C0 + "_edit", r = this.$F[i], t = r.$EW;
        $0.$1(t) || t.$2YZ(n)
    },
    updateEntityReferences: function(n) {
        if ($0.$1(this.$PH) && (this.$PH = {}), !$0.$1(n))
            for (var t = 0;
                t < n.get_$27().get_Count();
                t++
            )
                $0.$1(n.get_$27().get_$H(t).get_$2M()) ||
                    (this.$PH[n.get_$27().get_$H(t).get_$2M().toString()] = n.get_$27().get_$H(t).get_$1ja())
    },
    updateFilterExpression: function(n) {
        var t = n.add;
        t
            ? ($0.$1(this.$3N) &&
            (this.$3N = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, this.$C0), this
                .$PH = {}), this.$3N.$9o(this.$C0, "eq", n.guid.toString(), "", n.entityReference.toString()), this
                .$PH[n.guid.toString()] = n.entityReference.toString())
            : $0.$1(this.$3N) ||
            (this.$3N.$oN(new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                .$7J(this.$C0, "eq", n.guid.toString())), delete this.$PH[n.guid
                .toString()], this.$3N.get_$27().get_Count() || (this.$3N = null, this.$PH = null));
        this.$2.$6B(this).$1JR(this.$3N, this.$C0)
    },
    handleExpandOrCollapseIconClick: function(n) {
        var i, t;
        this.$Fz = n;
        i = this.$C0 + "_edit";
        this.$2.$6B(this).$1Zi();
        t = this.$F[i];
        t.$1V8 || (t.$1V8 = !0, t.$17())
    },
    $3V3: function() { this.$Fz = !!this.get_$X6() },
    getScreenReadableText: function() {
        return this.get_$X6()
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_LookUp"),
                this.$Fv,
                this.get_$X6().toString())
            : String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_LookUp_NoneSelected"),
                this.$Fv)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$DY = function() { Microsoft.Crm.Client.Core.ViewModels.$DY.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$DY.prototype = {
    $1V8: !1,
    $1Wf: function(n) {
        var i, t, r;
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.prototype.$1Wf.call(this, n);
        i = n;
        t = {};
        t.guid = i.Id;
        t.add = !0;
        t.entityReference = i.Name;
        r = this.$2.$6B(this).$3N;
        Microsoft.Crm.Client.Core.ViewModels.$7P.$1rS(i.Id.toString(), r) || this.$2.$6B(this).updateFilterExpression(t)
    },
    buildChildViewModelDescriptors: function(n) {
        var t, i;
        this.$2eG(n);
        t = {};
        $0.$1(n.Properties.EditTabIndex) || (t.EditTabIndex = n.Properties.EditTabIndex);
        i = {
            input: new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("String",
                    "String",
                    "input",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("UpdateOnKeyUp", !0)
                    ],
                    t)
        };
        this.$9e === "multi" &&
        (i.partyList = Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$3Xb("GlobalFilterPartyListViewModel",
                "PartyList",
                "partyList",
                this.$Gr,
                null,
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("NavigationEnabled", this.$Qg)
                ],
                null,
                null), Microsoft.Crm.Client.Core.Framework.$6.get_$4R() && (this.$1IL = !0, this.$1IH = !1));
        this.$qZ(i)
    },
    $17: function() { !this.$1x && this.$1V8 && Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype.$17.call(this) }
};
Microsoft.Crm.Client.Core.ViewModels.$7P = function() { Microsoft.Crm.Client.Core.ViewModels.$7P.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$7P.$1rS = function(n, t) {
    if (!$0.$1(t) && !$0.$1(t.get_$27()))
        for (var i = 0; i < t.get_$27().get_Count(); i++) if (t.get_$27().get_$H(i).get_$2M() === n) return!0;
    return!1
};
Microsoft.Crm.Client.Core.ViewModels.$7P.prototype = {
    $oO: function(n, t) {
        var r, u, f, i;
        Microsoft.Crm.Client.Core.ViewModels.PartyListViewModel.prototype.$oO.call(this, n, t);
        r = this.$Tq;
        u = r.$2.$6B(r);
        $0.$1(u.$3N) ||
        (f = n.$W9, i = {}, i.guid = f.get_identifier(), i.add = !1, i.entityReference = f.Name, u
            .updateFilterExpression(i))
    },
    $2YZ: function(n) {
        var r, t, i, u;
        if (!$0.$1(this.$5P))
            for (r = this.$5P
                    .get_Count(), t = 0;
                t < r;
                t++)
                i = this.$5P.get_$H(0), u = i.$W9, Microsoft.Crm.Client.Core.ViewModels.$7P
                    .$1rS(u.get_identifier(), n) ||
                    i.$kx.execute()
    },
    $3Fq: function() {}
};
Microsoft.Crm.Client.Core.ViewModels.$DZ = function() {
    this.$$d_$12P = Function.createDelegate(this, this.$12P);
    this.$$d_$2JD = Function.createDelegate(this, this.$2JD);
    Microsoft.Crm.Client.Core.ViewModels.$DZ.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$DZ.prototype = {
    $G4: null,
    get_SelectedFilter: function() { return this.$G4 },
    set_SelectedFilter: function(n) { return this.$G4 = n, n },
    $Ip: null,
    get_AppliedFilter: function() { return this.$Ip },
    set_AppliedFilter: function(n) { return this.$Ip = n, n },
    $jC: !1,
    get_IsApplyButtonEnabled: function() { return this.$jC },
    set_IsApplyButtonEnabled: function(n) { return this.$jC = n, n },
    get_SelectedFilterCount: function() {
        var t = 0, i = this.$F, n, r;
        for (n in i) r = { key: n, value: i[n] }, t += r.value.get_SelectedFilterCount();
        return t
    },
    get_IsClearButtonEnabled: function() {
        return $0.$1(this.$G4) || $0.$1(this.$G4.get_$5U()) ? !1 : this.$G4.get_$5U().get_Count() ? !0 : !1
    },
    get_IsExpandAll: function() {
        var t = this.$F, n, i;
        for (n in t) if (i = { key: n, value: t[n] }, !i.value.get_IsExpanded()) return!0;
        return!1
    },
    $PE: null,
    get_AttributeMetadataActionProvider: function() { return this.$PE },
    set_AttributeMetadataActionProvider: function(n) { return this.$PE = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("GlobalFilter_Initialize", 0, this.get_ViewModelId()), Microsoft.Crm.Client.Core.ViewModels.$2s
            .prototype.$17.call(this), this.$3Uf(), this.$1dj(), this.$5j().$9F
            .$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O, this.$$d_$2JD))
    },
    $GN: function() {
        this.$G4 = null;
        this.$Ip = null;
        this.$5j().$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O, this.$$d_$2JD);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    },
    $3Uf: function() {
        var t = new Array(0), i = this.$F, n, r;
        for (n in i) r = { key: n, value: i[n] }, t.push(r.value.get_AttributeLogicalName());
        this.$Ot(t, this.$5j().$8S)
    },
    $Ot: function(n, t) {
        var i, r;
        n.length &&
        (i = {}, i.EntityType = t, i.Attributes = n, i.OnSuccess = this.$$d_$12P, r = this.$PE.$DC(i), Microsoft.Crm
            .Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(r))
    },
    $12P: function(n) {
        for (var t, r = n, u = r.length, i = 0;
            i < u;
            ++i
        )
            t = r[i], t.get_$mx() &&
                !Microsoft.Crm.Client.Core.ViewModels.Controls.$68.$yh(t.get_$1Z()) &&
                this.$F[t.get_$AB()].set_Active(!1);
        this.$8("ChildProperties")
    },
    $2JD: function(n) {
        var t, i;
        this.$5j().get_IsMultipleEntityGraphSupported()
            ? (i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$NB) ? "" : n.$NB.toString(),
                    n.$g), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                .$1w(i), this.$Ip = $0.$1(this.$5j().$Ej[this.$5j().$8S]) ? null : this.$5j().$Ej[this.$5j().$8S].$88())
            : (t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$Gj) ? "" : n.$Gj.$7F(),
                    n.$g), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                .$1w(t), this.$Ip = this.$5j().$Lj.$88());
        this.$G4 = $0.$1(this.$Ip) ? null : this.$Ip.$88();
        this.$1dj();
        this.$8("FilterExpression")
    },
    handleIsExpandAllButtonClick: function() {
        var r = this.get_IsExpandAll(), t = this.$F, n, i;
        for (n in t) i = { key: n, value: t[n] }, i.value.$33m(r);
        this.$8("IsExpandAll")
    },
    handleCancelClick: function() {
        this.$G4 = $0.$1(this.$Ip) ? null : this.$Ip.$88();
        this.$1dj();
        this.set_Visible(!0);
        this.$jC = !1
    },
    handleApplyClick: function() {
        var n, t;
        this.$jC &&
        (this.$Ip = $0.$1(this.$G4) ? null : this.$G4.$88(), this.set_Visible(!0), this
            .$jC = !1, this.$5j().get_IsMultipleEntityGraphSupported()
            ? (t = {}, t[this.$5j().$8S] = this.$Ip, n = new Microsoft.Crm.Client.Core.ViewModels.Controls
                .InteractionCentric.Events.$5m(this.$I, 1, 0, null), n.$Ki = t)
            : n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
            .$5m(this.$I, 1, 0, this.$Ip), this.$5j().$9F
            .raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, n))
    },
    handleClearClick: function() { this.get_IsClearButtonEnabled() && (this.$G4 = null, this.$1dj(), this.$jC = !0) },
    $1JR: function(n, t) {
        $0.$1(this.$G4) &&
            (this.$G4 = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, this.$5j().$8S));
        $0.$1(this.$G4.get_$5U()) || $0.$1(this.$G4.$F3(t)) || this.$G4.$Mr(t);
        this.$G4.$6X(n);
        this.$jC = !0;
        this.$8("FilterExpression")
    },
    updateIsExpandedPropertyOfChildren: function() {
        var t = this.$F, n, i, r;
        for (n in t) i = { key: n, value: t[n] }, r = i.value, r.$3V3()
    },
    $1Zi: function() { this.$8("IsExpandAll") },
    $1dj: function() {
        var n = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("GlobalFilter_UpdateChildFilterViewModels"),
            t,
            i;
        n.start();
        t = this.$F;
        for (i in t) {
            var u = { key: i, value: t[i] },
                r = u.value,
                f = $0.$1(this.$G4) ? null : this.$G4.$F3(r.get_AttributeLogicalName());
            r.$2YZ(f)
        }
        this.$8("ChildProperties");
        this.$Ib("GlobalFilter_ChildrenUpdateReflected");
        n.stop();
        n.addParameter(this.get_ViewModelId())
    },
    $5j: function() { return this.$2 },
    get_TabSpaceReserved: function() { return 100 },
    get_AppliedFilterCount: function() {
        return $0.$1(this.$Ip) || $0.$1(this.$Ip.get_$5U()) ? 0 : this.$Ip.get_$5U().get_Count()
    },
    GlobalFilterScreenReaderText: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("GlobalFilter_ScreenReader_Label"),
            this.get_AppliedFilterCount())
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Eb = function() { Microsoft.Crm.Client.Core.ViewModels.$Eb.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$Eb.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("OptionSetFilterItemViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$Eb)
};
Microsoft.Crm.Client.Core.ViewModels.$Eb.prototype = {
    $17g: null,
    get_LogicalName: function() { return this.$17g },
    set_LogicalName: function(n) { return this.$17g = n, n },
    $4Z: null,
    get_DisplayName: function() { return this.$4Z },
    set_DisplayName: function(n) { return this.$4Z = n, n }
};
Microsoft.Crm.Client.Core.ViewModels.$Ec = function() {
    this.get_AttributeLogicalName = this.get_$3ah;
    this.set_AttributeLogicalName = this.set_$3ah;
    this.get_AttributeDisplayName = this.get_$3ak;
    this.set_AttributeDisplayName = this.set_$3ak;
    this.get_SelectedFilterExpression = this.get_$3an;
    this.set_SelectedFilterExpression = this.set_$3an;
    this.get_SelectedFilterCount = this.get_$X6;
    this.get_IsExpanded = this.get_$3aq;
    this.set_IsExpanded = this.set_$3aq;
    this.$33m = this.handleExpandOrCollapseIconClick;
    this.get_Active = this.get_$jp;
    this.set_Active = this.set_$jp;
    Microsoft.Crm.Client.Core.ViewModels.$Ec.initializeBase(this);
    this.$Ei = !0
};
Microsoft.Crm.Client.Core.ViewModels.$Ec.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("OptionSetFilterViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$Ec)
};
Microsoft.Crm.Client.Core.ViewModels.$Ec.prototype = {
    $C0: null,
    get_$3ah: function() { return this.$C0 },
    set_$3ah: function(n) { return this.$C0 = n, n },
    $Fv: null,
    get_$3ak: function() { return this.$Fv },
    set_$3ak: function(n) { return this.$Fv = n, n },
    $3N: null,
    get_$3an: function() { return this.$3N },
    set_$3an: function(n) { return this.$3N = n, n },
    $Fz: !1,
    get_$3aq: function() { return this.$Fz },
    set_$3aq: function(n) { return this.$Fz = n, n },
    $17p: 0,
    get_OptionSetValuesCount: function() { return this.$17p },
    set_OptionSetValuesCount: function(n) { return this.$17p = n, n },
    $Ei: !1,
    get_$jp: function() { return this.$Ei },
    set_$jp: function(n) { return this.$Ei = n, n },
    get_IsSelectAll: function() { return this.get_$X6() !== this.$17p },
    get_$X6: function() { return $0.$1(this.$3N) ? 0 : this.$3N.get_$27().get_Count() },
    $2YZ: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("OptionSetFilter_UpdateFilterProperties"),
            i,
            r,
            f,
            u;
        t.start();
        this.$3N = n;
        i = this.$F;
        for (r in i) f = { key: r, value: i[r] }, u = f.value, u.set_Data(this.$1rS(u.$17g));
        t.stop();
        t.addParameter(this.get_ViewModelId())
    },
    updateFilterExpression: function(n) {
        var i = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("OptionSetFilter_UpdateFilterExpression"),
            r,
            t,
            u,
            f,
            e,
            o;
        if (i.start(), r = n.Value, t = n.Name, !$0.$1(r) && r)
            if ($0.$1(this.$3N) &&
                (this.$3N = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, this.$C0)), $0.$1(t)) {
                this.$3N = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, this.$C0);
                u = this.$F;
                for (f in u) e = { key: f, value: u[f] }, o = e.value, this.$3N.$9o(this.$C0, "eq", o.$17g)
            } else this.$3N.$9o(this.$C0, "eq", t);
        else
            $0.$1(t)
                ? this.$3N = null
                : (this.$3N.$oN(new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                    .$7J(this.$C0, "eq", t)), this.$3N.get_$27().get_Count() || (this.$3N = null));
        this.$2.$6B(this).$1JR(this.$3N, this.$C0);
        i.stop();
        i.addParameter(this.get_ViewModelId())
    },
    handleSelectAllButtonClick: function() {
        var i = this.$F, t, r, n;
        for (t in i) r = { key: t, value: i[t] }, r.value.set_Data(this.get_IsSelectAll());
        n = {};
        n.Name = null;
        n.Value = this.get_IsSelectAll();
        this.updateFilterExpression(n)
    },
    handleExpandOrCollapseIconClick: function(n) {
        this.$Fz = n;
        this.$2.$6B(this).$1Zi()
    },
    $3V3: function() { this.$Fz = !!this.get_$X6() },
    $1rS: function(n) {
        if (!$0.$1(this
                .$3N) &&
            !$0.$1(this.$3N.get_$27()))
            for (var t = 0;
                t < this.$3N.get_$27().get_Count();
                t++
            ) if (this.$3N.get_$27().get_$H(t).get_$2M() === n) return!0;
        return!1
    },
    getScreenReadableText: function() {
        return this.get_$X6() > 0
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_OptionSet"),
                this.$Fv,
                this.get_$X6().toString(),
                this.$17p.toString())
            : String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_OptionSet_NoneSelected"),
                this.$Fv)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$F1 = function() {
    this.get_AttributeLogicalName = this.get_$3ah;
    this.set_AttributeLogicalName = this.set_$3ah;
    this.get_AttributeDisplayName = this.get_$3ak;
    this.set_AttributeDisplayName = this.set_$3ak;
    this.get_SelectedFilterExpression = this.get_$3an;
    this.set_SelectedFilterExpression = this.set_$3an;
    this.get_SelectedFilterCount = this.get_$X6;
    this.get_IsExpanded = this.get_$3aq;
    this.set_IsExpanded = this.set_$3aq;
    this.$33m = this.handleExpandOrCollapseIconClick;
    Microsoft.Crm.Client.Core.ViewModels.$F1.initializeBase(this);
    this.$Ei = !0
};
Microsoft.Crm.Client.Core.ViewModels.$F1.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("SliderFilterViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$F1)
};
Microsoft.Crm.Client.Core.ViewModels.$F1.prototype = {
    $C0: null,
    get_$3ah: function() { return this.$C0 },
    set_$3ah: function(n) { return this.$C0 = n, n },
    $Fv: null,
    get_$3ak: function() { return this.$Fv },
    set_$3ak: function(n) { return this.$Fv = n, n },
    $3N: null,
    get_$3an: function() { return this.$3N },
    set_$3an: function(n) { return this.$3N = n, n },
    $Fz: !1,
    get_$3aq: function() { return this.$Fz },
    set_$3aq: function(n) { return this.$Fz = n, n },
    $Ei: !1,
    get_Active: function() { return this.$Ei },
    set_Active: function(n) { return this.$Ei = n, n },
    get_$X6: function() { return $0.$1(this.$3N) ? 0 : 1 },
    handleExpandOrCollapseIconClick: function(n) {
        this.$Fz = n;
        this.$2.$6B(this).$1Zi()
    },
    $3V3: function() { this.$Fz = !!this.get_$X6() },
    $2YZ: function(n) {
        this.$3N = n;
        this.set_SelectedMinimum($0.$1(this.$3N) ? this.$KB : this.$3N.get_$27().get_$H(0).get_$2M());
        this.set_SelectedMaximum($0.$1(this.$3N) ? this.$Is : this.$3N.get_$27().get_$H(1).get_$2M());
        $0.$1(this.$3N) && (this.$pl = !0)
    },
    updateFilterExpression: function() {
        if (this.$SI) {
            if ($0.$1(this.$3N)) return;
            this.$3N = null
        } else
            this.$3N = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$C0), this.$3N
                .$9o(this.$C0, "ge", this.$Ow.toString()), this.$3N.$9o(this.$C0, "le", this.$Jt.toString());
        this.$2.$6B(this).$1JR(this.$3N, this.$C0)
    },
    onDataChange: function() { this.updateFilterExpression(null) },
    getScreenReadableText: function() {
        return this.get_$X6()
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_Range"),
                this.$Fv,
                this.$Ow.toString(),
                this.$Jt.toString())
            : String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("AppliedFilters_ScreenReader_ParsedData_Range_NoneSelected"),
                this.$Fv)
    }
};
Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel = function() {
    this.$$d_onSelectedItemPropertyChanged = Function.createDelegate(this, this.onSelectedItemPropertyChanged);
    Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel.prototype = {
    $UP: null,
    get_CommandButtonViewModels: function() { return this.$UP },
    set_CommandButtonViewModels: function(n) { return this.$UP = n, n },
    $3HR: function() { this.getData() },
    $175: !1,
    get_EnableSaveState: function() { return this.$175 },
    set_EnableSaveState: function(n) { return this.$175 = n, n },
    getData: function() {
        var i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.$5R)),
            r = this.$UP,
            n,
            u,
            t;
        for (n in r)
            u = { key: n, value: r[n] }, t = u.value, i.add(new Microsoft.Crm.Client.Core.ViewModels.$Cn(t.$11, t.$1B));
        this.get_ComboBoxViewModel().set_ItemsList(i.toArray());
        this.get_ComboBoxViewModel().AddPropertyChangedListener("SelectedItem", this.$$d_onSelectedItemPropertyChanged)
    },
    $GN: function() {
        var n, t, i, r;
        if (!$0.$1(this.$UP)) {
            n = this.$UP;
            for (t in n) i = { key: t, value: n[t] }, r = i.value, r.dispose();
            this.$UP = null
        }
        this.get_ComboBoxViewModel()
            .RemovePropertyChangedListener("SelectedItem", this.$$d_onSelectedItemPropertyChanged);
        Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$GN.call(this)
    },
    $32Q: function(n) {
        for (var i, r = this.get_ComboBoxViewModel().get_ItemsList(), u = r.length, t = 0;
            t < u;
            ++t
        ) if (i = r[t], i.get_ValueString() === n) return i;
        return null
    },
    onSelectedItemPropertyChanged: function() {
        this.$Bj("OnItemSelected");
        this.$3Ny()
    },
    $3Ny: function() {
        var t, n, u, i, r;
        this.$175 &&
        (t = this.get_ComboBoxViewModel().$54, IsNull(t) ||
            IsNull(this.$UP[t]) ||
            (n = this.$UP[t], !$0.$1(n.$26) && n.$26.get_CanExecute() && n.$26.execute(), u = n.get_TargetViewModel()
                .get_$2W(), i = this.$32Q(t), i &&
            (r = n.$S.MetadataSubType, $0.$1(r) ||
                r === 3 ||
                r === 2 ||
                Microsoft.Crm.Client.Core.ViewModels.$p.$1yw(i.get_ValueString(), i.get_Label(), u))))
    },
    add_OnItemSelected: function(n) { this.$2F("OnItemSelected", n) },
    remove_OnItemSelected: function(n) { this.$4I("OnItemSelected", n) },
    $Bj: function(n) {
        var t = this.$5d(n);
        $0.$1(t) || t(this, new Sys.EventArgs)
    }
};
Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel = function() {
    Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel.prototype = {
    getData: function() { this.$1bm() },
    $2HV: function(n) { return n.$1B },
    $30D: function(n) { return n.$11 },
    get_HasChildFlyouts: function() {
        var n, t, i;
        if (!$0.$1(this.$9W)) {
            n = this.$9W;
            for (t in n)
                if (i = { key: t, value: n[t] }, Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel
                    .isInstanceOfType(i.value)) return!0;
            return!1
        }
        return!1
    },
    $1ef: 0,
    get_ClientWidth: function() { return this.$1ef },
    set_ClientWidth: function(n) { return this.$1ef = n, n },
    add_$2OZ: function(n) { $0.$1(this.$2) || this.$2.$2F("DropdownSelectedItemUpdated", n) },
    remove_$2OZ: function(n) { $0.$1(this.$2) || this.$2.$4I("DropdownSelectedItemUpdated", n) },
    $1Ho: null,
    SelectedItemName: function() {
        var n, t, i;
        if ($0.$1(this.$9W)) return"";
        if (n = this.$Iu in this.$9W
            ? this.$9W[this.$Iu]
            : this.$9W[Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$Iu).toString()], !$0.$1(n)) {
            if (Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(n)) return t = n, t.$1B;
            if (Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel
                .isInstanceOfType(n)) return i = n, $0.$1(this.$1Ho) && (this.$1Ho = i.SelectedItemName()), this.$1Ho
        }
        return""
    },
    FireDropdownSelectedItemUpdatedEvent: function() { this.$2qS("DropdownSelectedItemUpdated") },
    ItemSelected: function(n, t) {
        var c, e, r, i, f, l, u, o, s, h;
        if (!IsNull(this.$9W)) {
            if (c = this.$9W[this.$Iu], e = c, !$0.$1(e) &&
                Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel.isInstanceOfType(e))
                if ($0.$1(t) || this.$pU !== t) {
                    if (this.$pU === n) return
                } else return;
            if (this.$Iu === n && $0.$1(t)) return;
            if (this.$Iu = n, $0.$1(t) || (this.$pU = t), this.$Bj("OnItemSelected"), r = this.$9W[this
                .$Iu], !$0
                .$1(r) &&
                Microsoft.Crm.Client.Core.ViewModels.$2A
                .isInstanceOfType(r))
                i = r, !$0.$1(i
                        .$26) &&
                    i.$26.get_CanExecute() &&
                    i.$26.execute(), $0.$1(i.get_TargetViewModel())
                    ? Microsoft.Crm.Client.Core.Framework.Trace
                    .logWarning(1018, "TargetViewModel is undefined in commandButton")
                    : (f = i.$S.MetadataSubType, $0.$1(f) ||
                        f === 3 ||
                        f === 2 ||
                        (l = i.get_TargetViewModel().get_$2W(), Microsoft.Crm.Client.Core.ViewModels.$p
                            .$1yw(i.$11, i.$1B, l))), this.$8("dataRecieved");
            else if (u = r, !$0.$1(u) &&
                !$0.$1(t) &&
                Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel.isInstanceOfType(u)) {
                o = this.$9W;
                for (s in o)
                    h = { key: s, value: o[s] }, h.key === this.$Iu
                        ? (u.ItemSelected(t), this.$1Ho = u.SelectedItemName())
                        : h.value.ItemSelected(null)
            }
        }
    },
    $GN: function() {
        var o = this.$Gi, r, t, n, s, u, f, e, i;
        for (r in o) {
            if (t = { key: r, value: o[r] }, n = t.value, !$0.$1(n) &&
                Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel.isInstanceOfType(n)) s = n, s.$GN();
            else if (!$0.$1(n) && Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(n)) n.dispose();
            else if (!$0.$1(n) && Object.isInstanceOfType(n)) {
                u = t.value;
                f = u;
                for (e in f)
                    i = { key: e, value: f[e] }, Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(i.value) &&
                        i.value.dispose(), delete u[i.key]
            }
            delete this.$Gi[t.key]
        }
        this.$Gi = null;
        Microsoft.Crm.Client.Core.ViewModels.$Ur.prototype.$GN.call(this)
    },
    $2qS: function(n) {
        if (!$0.$1(this.$2)) {
            var t = this.$2.$5d(n);
            $0.$1(t) || t(this, new Sys.EventArgs)
        }
    }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel = function() {
    this.$$d_ChildDefinitionUpdated = Function.createDelegate(this, this.ChildDefinitionUpdated);
    this.$$d_$3FR = Function.createDelegate(this, this.$3FR);
    this.$$d_FilterUpdated = Function.createDelegate(this, this.FilterUpdated);
    this.$$d_$33W = Function.createDelegate(this, this.$33W);
    this.$$d_DropdownItemUpdated = Function.createDelegate(this, this.DropdownItemUpdated);
    this.$$d_DefinitionUpdated = Function.createDelegate(this, this.DefinitionUpdated);
    this.$$d_$1Ti = Function.createDelegate(this, this.$1Ti);
    this.$$d_$2JO = Function.createDelegate(this, this.$2JO);
    this.$$d_$34J = Function.createDelegate(this, this.$34J);
    this.$$d_$2mn = Function.createDelegate(this, this.$2mn);
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel.initializeBase(this);
    this.$11R = !0
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel.prototype = {
    $Ju: null,
    $EM: null,
    $DO: null,
    $15s: !1,
    $16X: null,
    $xK: !1,
    get_QueuePickerViewModel: function() {
        return $0.$1(this.$DO) && (this.$DO = new Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel(this)), this
            .$DO
    },
    get_QueuePickerDropDown: function() { return this.get_QueuePickerViewModel().get_QueuePickerDropDown() },
    get_$2dV: function() { return this.get_$1bG() },
    $Sq: null,
    get_$z0: function() {
        return $0.$1(this.$fZ) || Microsoft.Crm.Client.Core.Framework.$3.$A(this.$fZ)
            ? this.$8I
            ? "HomePageGrid:" + this.$J
            : Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.get_$z0.call(this)
            : this.$fZ
    },
    $wz: !1,
    get_EnableClickOnEntityDashboardIcon: function() { return this.$wz },
    set_EnableClickOnEntityDashboardIcon: function(n) { return this.$wz = n, n },
    get_IsActivityGrid: function() {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$J);
        return!$0.$1(n) && n.get_$9N() ? !0 : !1
    },
    get_TooltipString: function() {
        return Microsoft.Crm.Client.Core.Framework.$3.$MD(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("InteractionCentricGrid.EntityDashboardTooltip"),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$J).$8N)
    },
    $17: function() {
        this.$8I
            ? this.$1x ||
            (this.$1rB(), this.$wz = !1, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .$2Gb(this, this.$$d_$2mn), this.$2.get_EventHandler()
                .$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$9I, this.$$d_$34J))
            : this.$1Dy ? (this.$1rB(), this.$1r0()) : this.$364();
        var n = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR("ServiceDeskGridLoadEvent");
        n.$t("DialogGrid", this.$1Dy);
        n.$t("EntityGrid", this.$8I);
        n.$t("EntityName", this.$J || "");
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(n)
    },
    $364: function() {
        $0.$1(this.$2) || $0.$1(this.$2.$2) || this.set_$4J(this.$2.$2);
        var n = this.$2.$12, t = null;
        t = this.$xH || $0.$1(n) || $0.$1(n.ui) ? "SessionTabContainer0" : n.ui.tabs.getAll()[0].getName();
        this.$15s ||
        (this.$xH
            ? this.$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$6b,
                this.$$d_$2JO)
            : this.$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$4b,
                this.$$d_$1Ti), this.$15s = !0);
        this.$xK = this.$xK || this.$Uc === t;
        this.$xK && !this.$1x && (this.$1rB(), this.$1r0())
    },
    $1rB: function() {
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$17.call(this)
    },
    $2JO: function(n) {
        this.$Uc === n.$Xp &&
        (this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$6b,
            this.$$d_$2JO), this.$15s = !1, this.$xK = !0, this.$1x || this.$17())
    },
    $1Ti: function(n) {
        this.$Uc === n.$Xp &&
        (this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$4b,
            this.$$d_$1Ti), this.$15s = !1, this.$xK = !0, this.$1x || this.$17())
    },
    $Io: null,
    $M4: null,
    $1R8: null,
    $PU: null,
    $1GL: 0,
    $1r0: function() {
        this.$Sc &&
            $0.$1(this.$M4) &&
            ($0.$1(this.$Gh) || (this.$Io = {}, this.$35L(), this.$1GL = 0), this.$2C3(this.$J))
    },
    $35L: function() {
        var n, t, i, r;
        if (this.$PU = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), $0
            .$1(this.$Gh)) this.$PU.add(this.$J);
        else {
            n = this.$Gh;
            for (t in n) i = { key: t, value: n[t] }, r = i.key, this.$PU.add(r)
        }
    },
    $3Lt: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$6i;
        n.$yp();
        n.set_PrimaryModelName(this.$J);
        n.$14U("HomePageGrid:" + this.$J, this)
    },
    $2mn: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance();
        n.$Ri &&
            n.$Ri[this.$J] &&
            n.$Ri[this.$J].get_Count() > 0 &&
            (this.$wz = !0, this.$8("EntityDashboardDataReceived"))
    },
    OpenEntityDashboard: function() {
        var r, t;
        if (this.$wz) {
            var u = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(),
                i = new Microsoft.Crm.Client.Core.Commands.OpenDashboardCommand(this.$2),
                n = u.$Ri[this.$J.toLowerCase()];
            if (!$0.$1(n) && n.get_Count()) {
                for (r = 0, t = 0; t < n.get_Count(); t++)
                    if (n.get_$H(t).$1fP) {
                        r = t;
                        break
                    }
                u.$XU = n.get_$H(r);
                i.$1s = n.get_$H(r).$2Z;
                i.$Mj = 37;
                i.execute();
                i.dispose()
            }
        }
    },
    $34J: function(n) {
        var t, i, r;
        $0.$1(this.$Gh) && this.$8I
            ? (t = !1, $0.$1(this.$Ju) && (t = !0), this.$Ju = n
                .$Gi, this.$Ju &&
            (Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.get_$OQ() &&
                (i = this.$Ju[0].$F[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name")]
                    .$F, $0.$1(this.$Ug)
                    ? this.$1Yk(i, !1)
                    : (r = i[this.$Ug], $0.$1(r) ||
                        r.set_Label(Microsoft.Crm.Client.Core.Framework.Common.$2
                            .$6("AdvancedFindSearchResultsViewName")))),
                $0.$1(this
                    .$EM) ||
                (this.$EM.$Gi = this.$24I(), this.$EM.$1bm()), t && this.$8("SelectViewDataReceived")))
            : this.$1r0()
    },
    IsSelectViewDataReceived: function() { return!$0.$1(this.$Ju) },
    $2W9: function(n) {
        $0.$1(this.$EM) || (this.$EM.$Gi = n);
        this.$8("SelectViewDataReceived")
    },
    $24I: function() {
        var n, t, i;
        return $0.$1(this.$Ju)
            ? null
            : (Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.get_$OQ() &&
                !$0.$1(this.$M4) &&
                $0.$1(this.$Ug) &&
                this.$1Yk(this.$M4[Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("CRM_System_View_Group_Name")],
                    !1), !$0.$1(this.$Gh) && this.$J in this.$Gh
                ? this.$M4
                : this.$8I
                ? (n = {}, $0.$1(this.$Ju[0]))
                ? n
                : (t = this.$Ju[0].$F[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name")]
                        .$F, n[Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("CRM_System_View_Group_Name")] = t,
                    Microsoft.Crm.Client.Core.Framework.Common.$2
                        .$6("CRM_Personal_View_Group_Name") in
                        this.$Ju[0].$F &&
                        (i = this.$Ju[0].$F[Microsoft.Crm.Client.Core.Framework.Common.$2
                            .$6("CRM_Personal_View_Group_Name")].$F, n[Microsoft.Crm.Client.Core.Framework.Common.$2
                            .$6("CRM_Personal_View_Group_Name")] = i), n)
                : this.$M4)
    },
    $2zs: function() {
        if ($0.$1(this.$1R8)) {
            var n = {};
            n.All = this.$d7("All", Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_All"));
            n.Overdue = this.$d7("Overdue",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Overdue"));
            n.Today = this.$d7("Today", Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Today"));
            n.Tomorrow = this.$d7("Tomorrow",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Tomorrow"));
            n["NextXDays;7"] = this.$d7("NextXDays;7",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Next7Days"));
            n["NextXDays;30"] = this.$d7("NextXDays;30",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Next30Days"));
            n["NextXDays;90"] = this.$d7("NextXDays;90",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Next90Days"));
            n["NextXMonths;6"] = this.$d7("NextXMonths;6",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Next6Months"));
            n["NextXMonths;12"] = this.$d7("NextXMonths;12",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PickList_DateFilter_Next12Months"));
            this.$1R8 = n
        }
        return this.$1R8
    },
    get_DueLabel: function() { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Web.View_Label_ViewByDate") },
    get_$1bG: function() { return this.get_QueuePickerViewModel().$1gP },
    $d7: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.ViewModels.$2A;
        return i.set_$1Z(n), i.set_Label(t), i
    },
    get_GridFlyoutViewModel: function() {
        var n;
        if ($0.$1(this.$EM)) {
            var t = this.$24I(),
                i = this.$2nw(t),
                r = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ViewModelDescriptor("GridFlyoutViewModel",
                        "GridViewFlyout",
                        "GridViewFlyout",
                        [
                            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                            .ValuePropertyDescriptor("Data", t), new Microsoft.Crm.Client.Core.Models.Descriptors
                            .ViewModel.ValuePropertyDescriptor("SelectElementDataId", "gridView"), new Microsoft.Crm
                            .Client.Core.Models.Descriptors.ViewModel
                            .ValuePropertyDescriptor("SelectedItemID", $0.$1(this.$Gh) ? i : this.$J)
                        ],
                        null,
                        null);
            this.$EM = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
                .$7I(r, this.get_ModelContext(), this.$3M, this.$2);
            this.$EM.get_HasChildFlyouts() && (this.$EM.$pU = this.get_DefinitionId());
            n = this;
            Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(function() {
                    var t, i;
                    if (n.$8I && !$0.$1(n.$EM.$9W) && !$0.$1(n.$EM.$Iu)) {
                        for (t = n.$EM.$9W[n.$EM.$Iu];
                            !$0.$1(t) && !Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(t);
                        )
                            if (i = t, !$0.$1(i) &&
                                Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel
                                .isInstanceOfType(i)) t = i.$9W[i.$Iu];
                            else break;
                        !$0.$1(t) && Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(t) && n.$2cR(t)
                    }
                },
                Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$SY,
                "ICGridVM.GridFlyoutViewModel.AddToMru.AddDefaultView");
            this.$EM.add_$1Fb(this.$$d_DefinitionUpdated);
            this.get_GridFlyoutViewModel().add_$2OZ(this.$$d_DropdownItemUpdated)
        }
        return this.$EM
    },
    $2nw: function(n) {
        var i = this.get_DefinitionId(), f, r, u, e, t;
        if (this.get_DefinitionId() === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() &&
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name") in n) {
            f = n[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name")];
            r = f;
            for (u in r)
                if (e = { key: u, value: r[u] }, t = e.value, !$0.$1(t.$S) && !$0.$1(t.$S.IsDefault)) {
                    var s = t.$S.IsDefault, o = t.$S.MetadataSubType, h = !$0.$1(o) && o === 3;
                    if (s && !h && !$0.$1(t.$S.ViewId)) {
                        i = t.$S.ViewId;
                        this.$16 === 2
                            ? (this.$16X = i, this.add_$12Q(this.$$d_$33W))
                            : !$0.$1(t.$26) && t.$26.get_CanExecute() && t.$26.execute();
                        break
                    }
                }
        }
        return i
    },
    $33W: function() {
        if (this.remove_$12Q(this.$$d_$33W), !$0.$1(this.$16X) &&
            !$0.$1(this.get_GridFlyoutViewModel()) &&
            !$0.$1(this.get_GridFlyoutViewModel().$9W) &&
            this.$16X in this.get_GridFlyoutViewModel().$9W) {
            var n = this.get_GridFlyoutViewModel().$9W[this.$16X];
            !$0.$1(n.$26) && n.$26.get_CanExecute() && n.$26.execute()
        }
        this.$16X = null
    },
    $2cR: function(n) {
        var t = n, i;
        $0.$1(t.get_TargetViewModel())
            ? Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(1018, "TargetViewModel is undefined in commandButton")
            : (i = t.get_TargetViewModel().get_$2W(), Microsoft.Crm.Client.Core.ViewModels.$p.$1yw(t.$11, t.$1B, i))
    },
    DefinitionUpdated: function(n) {
        var t = n, i = t.$9W[t.$Iu];
        this.OnDefinitionUpdated(i)
    },
    DropdownItemUpdated: function() {
        var n = this.get_FilterFlyoutViewModel(), t;
        $0.$1(n) || $0.$1(n.get_ComboBoxViewModel()) || (t = n.get_ComboBoxViewModel().$54, this.OnFilterUpdated(t))
    },
    ChildDefinitionUpdated: function(n) {
        var t = n, i = t.$9W[t.$Iu];
        this.OnDefinitionUpdated(i)
    },
    get_FilterFlyoutViewModel: function() {
        if ($0.$1(this.$Sq)) {
            var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("DropdownForGridViewModel",
                    "ComboBoxWrapper",
                    "ComboBoxWrapper",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("CommandButtonViewModels", this.$2zs()), new Microsoft.Crm.Client.Core
                        .Models.Descriptors.ViewModel.ValuePropertyDescriptor("ComboBoxClass", "gridViewDropDown"),
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("SelectElementDataId", "gridView"), new Microsoft.Crm.Client.Core
                        .Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("WrapperClass", "filterViewDropDownWrapper")
                    ],
                    null,
                    null);
            this.$Sq = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(n, null);
            this.$Sq.$175 = !1;
            this.$Sq.add_OnItemSelected(this.$$d_FilterUpdated);
            this.$Sq.get_ComboBoxViewModel().set_SelectedItem("All")
        }
        return this.$Sq
    },
    FilterUpdated: function(n) {
        var t = n, i = t.get_ComboBoxViewModel().$54;
        this.OnFilterUpdated(i)
    },
    get_SelectViewData: function() { return this.$Ju },
    $2C3: function(n) {
        var t = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("RetrieveViewSelector", "HomePageGrid:" + n, !1),
            i;
        t.OnSuccess = this.$$d_$3FR;
        t.OnFailure = this.$$d_$5J;
        i = new Microsoft.Crm.Client.Core.ViewModels.$M(this, t);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(i.$4W())
    },
    $3FR: function(n) {
        var b = n, i = {}, r = new Microsoft.Crm.Client.Core.ViewModels.$Co, l, a, v, t, y, f, e, o, p, u, s, h, c, w;
        if (this.$cV(r, this, b.$FS.Controls), l = r.$F[Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("CRM_System_View_Group_Name")], i[Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("CRM_System_View_Group_Name")] = this.$2HI(l
            .$F), Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_View_Group_Name") in r.$F &&
        (a = r.$F[Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_View_Group_Name")], i[Microsoft.Crm
                .Client.Core.Framework.Common.$2.$6("CRM_Personal_View_Group_Name")] = this
            .$2HI(a.$F)), !$0.$1(this.$Gh) && this.$8I)
            if (v = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("GridFlyoutViewModel",
                    "GridViewFlyout",
                    "GridViewFlyout",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Data", i),
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("SelectElementDataId", "gridView"), new Microsoft.Crm.Client.Core
                        .Models.Descriptors.ViewModel.ValuePropertyDescriptor("SelectedItemID", this.get_DefinitionId())
                    ],
                    null,
                    null), t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(v, null), t
                .set_PrimaryModelName(this.$J), y = this.$Gh[this.$J], t.set_$1Z(this.$J), t
                .set_Label(this.$J !== "activitypointer"
                    ? y.DisplayName
                    : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ViewSelectorAllActivities")), t
                .add_$1Fb(this.$$d_ChildDefinitionUpdated), this.$Io[this
                .$J] = t, Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.get_$OQ() &&
                this.$1Yk(t.$9W, !0), this.$1GL++, this.$1GL === this.$PU.get_Count()) {
                f = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$5I));
                e = this.$Io;
                for (o in e) p = { key: o, value: e[o] }, f.add(p.value);
                u = {};
                u.Entities = this.$Io;
                this.$Ju = f.toArray();
                this.$M4 = u;
                this.set_PrimaryModelName("activitypointer");
                this.$3Lt();
                this.$2W9(u)
            } else this.set_PrimaryModelName(this.$PU.get_$H(this.$1GL)), this.$2C3(this.$J);
        else {
            s = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$5I));
            h = this.$Io;
            for (c in h) w = { key: c, value: h[c] }, s.add(w.value);
            this.$Ju = s.toArray();
            this.$M4 = i;
            this.$2W9(i)
        }
    },
    $2Tp: function(n) {
        var t = n.$6a.get_$H("fetchXml").Data, i = null, e, o, r, s, f, c;
        if (this.$FI) {
            if (t = Microsoft.Crm.Client.Core.ViewModels.$2D.$1nP(t, this.$G3), e = Microsoft.Crm.Client.Core.ViewModels
                .$2D.$1D2(t), $0
                .$1(e) &&
                !Microsoft.Crm.Client.Core.ViewModels.$2D.$1ER(this.$G3)) return this.$17n = !0, n;
            if (o = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                .$i(this.$J), o.get_$9N() &&
                this.$8I &&
                this.get_DefinitionId() === this.$Rt[this.$J] &&
                !$0.$1(this.$XP)) {
                r = Microsoft.Crm.Client.Core.Storage.Common.FetchXml.$2p.$m5(t);
                s = r.$Fy;
                for (var h = this.$XP.toArray(), l = h.length, u = 0; u < l; ++u) f = h[u], $0.$1(f) || s.add(f);
                t = r.$m6()
            } else
                this.$J !== "queueitem" ||
                    $0.$1(this.$DO) ||
                    (t = this
                        .$8I
                        ? this.$1nJ(t, this.get_$1bG())
                        : this.$1nJ(t, "436e2293-da8f-4ef9-a1e6-fff25a5beb22"));
            i = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(t);
            c = Microsoft.Crm.Client.Core.ViewModels.$2D.$1TF(t);
            $0.$1(this.$14I) && !$0.$1(c) && (this.$14I = Microsoft.Crm.Client.Core.ViewModels.$2D.$1TF(t).toString());
            this.$2UW()
        } else {
            if ($0.$1(this.get_$1bG()) &&
            (Microsoft.Crm.Client.Core.Framework.$3.$A(this.$PN) ||
                !Microsoft.Crm.Client.Core.Framework.$3.$A(this.$PN) && !this.$174)) return n;
            t = Microsoft.Crm.Client.Core.Framework.$3.$A(this.$PN) ? this.$1nJ(t, this.get_$1bG()) : this.$2sD(t);
            i = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(t)
        }
        return i
    },
    $2sD: function(n) {
        var i = Microsoft.Crm.Client.Core.Storage.Common.FetchXml.$2p.$m5(n),
            o = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B
                .$B(Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(this.$PN)),
            t = o.$O("link-entity"),
            s = o.$O("condition"),
            f,
            u,
            h,
            e,
            c;
        if ($0.$1(t))
            $0.$1(s)
                ? Microsoft.Crm.Client.Core.Framework.$C
                .$61("MoCA_ISH_LookupRelationshipFiltering",
                    2009,
                    "Lookup relationship filtering, incorrect filter condition XML was passed.")
                : (Microsoft.Crm.Client.Core.Framework.$C
                        .$C("MoCA_ISH_LookupRelationshipFiltering",
                            2009,
                            "Lookup relationship filtering, generating merged fetchXML using passed in filter condition."),
                    c = this.$2Hi(i, !0), Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$7J.$2QG(s, c));
        else {
            Microsoft.Crm.Client.Core.Framework.$C.$C("MoCA_ISH_LookupRelationshipFiltering",
                2009,
                "Lookup relationship filtering, generating merged fetchXML using passed in link-entity filter condition.");
            var l = $0.$1(t.$1Q("link-type")) ? null : t.$1Q("link-type").toString(),
                a = $0.$1(t.$1Q("alias")) ? null : t.$1Q("alias").toString(),
                r = new Microsoft.Crm.Client.Core.Storage.Common.FetchXml
                    .$84(t.$1Q("name").toString(), t.$1Q("from").toString(), t.$1Q("to").toString(), l, a);
            for (Microsoft.Crm.Client.Core.Storage.Common.FetchXml.$2p.$1iH(r, t), f = null, u = 0;
                u < i.$NC.get_Count();
                u++)
                if (r.$38P(i.$NC.get_$H(u))) {
                    f = i.$NC.get_$H(u);
                    break
                }
            if ($0.$1(f)) i.$NC.add(r);
            else for (h = this.$2Hi(f, !1), e = 0; e < r.$Fy.get_Count(); e++) h.$6X(r.$Fy.get_$H(e))
        }
        return i.$m6()
    },
    $2Hi: function(n, t) {
        for (var r = null, i = 0; i < n.get_$lY().get_Count(); i++)
            if (!n.get_$lY().get_$H(i).get_$sG() &&
            (n.get_$lY().get_$H(i).get_$27().get_Count() > 0 && t ||
                n.get_$lY().get_$H(i).get_$5U().get_Count() > 0 && !t)) {
                r = n.get_$lY().get_$H(i);
                break
            }
        return $0.$1(r) &&
        (r = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
            .$5n(0, n.get_$5f() + n.get_$lY().get_Count().toString()), n.get_$lY().add(r)), r
    },
    $1nJ: function(n, t) {
        var s = "",
            a = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n.toString()),
            v = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(a).$O("fetch"),
            i = v.$O("entity"),
            y = i.$1Q("name").toString(),
            r,
            c,
            e,
            o,
            u,
            l;
        if (y === "queue") return n;
        var p = i.$O("link-entity") ? i.$O("link-entity").get_$7W().toString() : "",
            w = i.$O("order") ? i.$O("order").get_$7W().toString() : "",
            f = i.$5k("filter"),
            h = "";
        if (!$0.$1(f)) for (r = 0; r < f.get_$l(); r++) c = f.get_$H(r), h += c.get_$7W();
        for (e = i.$5k("attribute"), o = "", u = 0; u < e.get_$l(); u++) o += e.get_$H(u).get_$7W();
        return l = "<\/entity><\/fetch>", s = t.toLowerCase() === "436e2293-da8f-4ef9-a1e6-fff25a5beb22".toLowerCase()
            ? "<link-entity name='queue' from='queueid' to='queueid'><filter type='and'><condition attribute='queueviewtype' operator='eq' value='1' /><\/filter><\/link-entity><link-entity name='queuemembership' from='queueid' to='queueid' alias='qm' link-type='inner'><attribute name='systemuserid' /><filter><condition attribute='systemuserid' operator='eq' value='" + Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString() + "' /><\/filter><\/link-entity>"
            : t.toLowerCase() === "e611d950-6bab-477c-a5a3-7e9a447b326d".toLowerCase()
            ? "<link-entity name='queue' from='queueid' to='queueid'><filter type='and'><condition attribute='queueviewtype' operator='eq' value='0' /><\/filter><\/link-entity>"
            : t.toLowerCase() === "5850FC36-8596-45fe-B607-FE81D0C453FD".toLowerCase()
            ? "<link-entity name='queuemembership' from='queueid' to='queueid' alias='qm' link-type='outer'> <attribute name='systemuserid'/> <\/link-entity> <link-entity name='queue' from='queueid' to='queueid' alias='qq' link-type='outer'> <attribute name='queueviewtype'/> <\/link-entity> <filter operator='and'> <filter type ='or'> <condition entityname='qq' attribute='queueviewtype' operator='eq' value='0' /> <condition entityname='qm' attribute='systemuserid' operator='eq' value='" + Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString() + "' /> <\/filter> <\/filter>"
            : "<filter type='and'><condition attribute='queueid' operator='eq' uitype='queue' value='{" +
            t +
            "}' /><\/filter>", "<fetch distinct='false' mapping='logical'><entity name='queueitem'>" +
            o +
            p +
            w +
            h +
            s +
            l
    },
    $2HI: function(n) {
        var i, u, r, t;
        if (Microsoft.Crm.Client.Core.Framework.$3.$A(this.$lW) ||
        (i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i.addRange(this.$lW.split(",")), !i
            .get_Count())) return n;
        for (u = {}, r = 0; r < i.get_Count(); r++)
            t = i.get_$H(r), t = new Microsoft.Crm.Client.Core.Framework.Guid(t).toString(), t in n && (u[t] = n[t]);
        return u
    },
    $cV: function(n, t, i) {
        for (var r, o, e, h, u, f, c = i, l = c.length, s = 0; s < l; ++s) {
            r = c[s];
            o = r.LabelText || "";
            switch (r.ControlType) {
            case"Button":
                $0.$1(r.CommandParameters) && (r.CommandParameters = {});
                r.CommandParameters.TargetViewModel = this;
                e = "";
                switch (r.CommandType) {
                case"ControlCommand":
                    r.CommandParameters.CommandPropertyName = r.Command;
                    e = "ControlCommand";
                    break;
                case"System":
                    e = r.Command;
                    break;
                case"WebResource":
                    e = "WebResourceCommand"
                }
                h = t.get_$2W();
                ($0.$1(h) || Microsoft.Crm.Client.Core.ViewModels.$41.isInstanceOfType(t)) &&
                    t.get_$CL() &&
                    (h = t.get_$CL().$J);
                u = new Microsoft.Crm.Client.Core.ViewModels.$2A;
                u.set_$1Z(r.Id);
                u.set_Label(o);
                u.set_Visible(!0);
                u.set_Parameters(r.CommandParameters);
                u.set_ImageName(r.ImageId);
                u.set_ImageType(r.ImageType);
                u.$Iz = r.AvailableOffline;
                u.set_TargetViewModel(t);
                u.$Df = null;
                u.set_Command(e);
                n.$8T(u.$11, u);
                break;
            case"Group":
                Microsoft.Crm.Client.Core.ViewModels.$2Y.isInstanceOfType(n) &&
                    !Microsoft.Crm.Client.Core.Framework.$3.$A(o)
                    ? (f = new Microsoft.Crm.Client.Core.ViewModels.$9f, f.set_Label(o), f
                        .set_$1Z(this.$1Qk(r.Id)), this.$cV(f, t, r.Children), n.$8T(f.$11, f))
                    : this.$cV(n, t, r.Children)
            }
        }
    },
    $268: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$J);
        t.get_$9N() && this.$8I
            ? (this.$EM.ItemSelected(this.$J, n), this.$EM.$8("dataRecieved"), this.$Sq.get_ComboBoxViewModel()
                .set_SelectedItem("All"))
            : this.$EM.ItemSelected(n);
        this.$J !== "queueitem" ||
            $0.$1(this.$DO) ||
            this.$DO.get_QueuePickerDropDown().get_ComboBoxViewModel()
            .set_SelectedItem("436e2293-da8f-4ef9-a1e6-fff25a5beb22")
    },
    $1Qk: function(n) {
        if ($0.$1(n)) return null;
        var t = n.split("|");
        return t[t.length - 1]
    },
    $GN: function() {
        var u = this.$M4, n, t, i, e;
        for (n in u)
            t = { key: n, value: u[n] }, Microsoft.Crm.Client.Core.ViewModels.$Co.isInstanceOfType(t.value) &&
                (i = t.value, $0.$1(i) || i.dispose());
        if (!$0.$1(this.$Ju)) {
            for (var f = this.$Ju, o = f.length, r = 0; r < o; ++r) e = f[r], e.dispose();
            this.$Ju = null
        }
        $0.$1(this.$EM) ||
        (this.$EM.remove_$1Fb(this.$$d_DefinitionUpdated), this.get_GridFlyoutViewModel()
            .remove_$2OZ(this.$$d_DropdownItemUpdated), this.$EM.dispose(), this.$EM = null);
        $0.$1(this
                .$Sq) ||
            (this.$Sq.remove_OnItemSelected(this.$$d_FilterUpdated), this.$Sq.dispose(), this.$Sq = null);
        $0.$1(this.$DO) || (this.$DO.dispose(), this.$DO = null);
        this.$15s &&
        (this.$xH
            ? this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$6b,
                this.$$d_$2JO)
            : this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$4b,
                this.$$d_$1Ti));
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$9I,
            this.$$d_$34J);
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel = function(n) {
    this.$$d_QueueUpdated = Function.createDelegate(this, this.QueueUpdated);
    Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel.initializeBase(this);
    this.$Vw = n
};
Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel.prototype = {
    $DO: null,
    $1ZM: !1,
    $Vw: null,
    $Uf: null,
    $1gP: null,
    get_QueuePickerDropDown: function() {
        if (($0.$1(this.$DO) || $0.$1(this.$DO.$UP)) && !this.$1ZM) {
            this.$1ZM = !0;
            var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("DropdownForGridViewModel",
                    "ComboBoxWrapper",
                    "ComboBoxWrapper",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("CommandButtonViewModels", this.$3Iy()), new Microsoft.Crm.Client.Core
                        .Models.Descriptors.ViewModel.ValuePropertyDescriptor("ComboBoxClass", "queuePickerDropDown")
                    ],
                    null,
                    null);
            this.$DO = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(n, null);
            this.$DO.add_OnItemSelected(this.$$d_QueueUpdated);
            this.$DO.get_ComboBoxViewModel().set_SelectedItem("436e2293-da8f-4ef9-a1e6-fff25a5beb22");
            this.$DO.get_ComboBoxViewModel().$jb = !0
        }
        return this.$DO
    },
    $3Iy: function() { return $0.$1(this.$Uf) && this.$2pb(), this.$Uf },
    $2pb: function() {
        var t = {}, n, i, r;
        t.userId = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString();
        t.includePublic = !0;
        n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("RetrieveUserQueues", t);
        i = this;
        n.OnSuccess = function(n) { i.$31k(n) };
        r = this;
        n.OnFailure = function(n) { r.$5J(n) };
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", null, n)
    },
    QueueUpdated: function(n) {
        var t = n;
        this.$1gP = t.get_ComboBoxViewModel().$54;
        $0.$1(this.$Vw) ||
        (this.$Vw.$Nr = null, this.$Vw.$2Q = null, $0
            .$1(this.$Vw.$2o) ||
            (this.$Vw.$Rz = !0), Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel
            .get_$OQ() &&
            this.$Vw.get_DefinitionId() === this.$Vw.$Ug &&
            (this.$Vw.$FI = !0), this.$Vw.$Ww())
    },
    $31k: function(n) {
        var t = 0, c = n.entityCollection, l = c.get_entities(), o, s, i, r, u, f;
        this.$Uf = {};
        for (var h = l, a = h.length, e = 0; e < a; ++e)
            o = h[e], s = o.$N.Id.toString(), $0.$1(s) ||
            (i = new Microsoft.Crm.Client.Core.ViewModels.$2A, i.set_$1Z(s), i.set_Label(o.getValue("name")), this
                .$Uf[t.toString()] = i, t++);
        r = new Microsoft.Crm.Client.Core.ViewModels.$2A;
        r.set_$1Z("5850FC36-8596-45fe-B607-FE81D0C453FD");
        r.set_Label(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_All"));
        this.$Uf[t.toString()] = r;
        t++;
        u = new Microsoft.Crm.Client.Core.ViewModels.$2A;
        u.set_$1Z("e611d950-6bab-477c-a5a3-7e9a447b326d");
        u.set_Label(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_Public"));
        this.$Uf[t.toString()] = u;
        t++;
        f = new Microsoft.Crm.Client.Core.ViewModels.$2A;
        f.set_$1Z("436e2293-da8f-4ef9-a1e6-fff25a5beb22");
        f.set_Label(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_Private"));
        this.$Uf[t.toString()] = f;
        t++;
        this.$DO.get_ComboBoxViewModel().$jb = !1;
        this.$DO.$UP = this.$Uf;
        this.$DO.$3HR();
        this.$1ZM = !1
    },
    $5J: function(n) { Microsoft.Crm.Client.Core.ViewModels.$Z.$3SB(n) },
    $GN: function() {
        var n, t, i, r;
        $0.$1(this.$DO) || (this.$DO.remove_OnItemSelected(this.$$d_QueueUpdated), this.$DO.dispose(), this.$DO = null);
        n = this.$Uf;
        for (t in n) i = { key: t, value: n[t] }, r = i.value, r.dispose();
        this.$Uf = null;
        Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$AO = function() {
    this.$$d_$32o = Function.createDelegate(this, this.$32o);
    this.$i5 = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Models.$JP));
    Microsoft.Crm.Client.Core.ViewModels.$AO.resolveInheritance();
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    this.get_Id = this.get_$1Z;
    this.set_Id = this.set_$1Z;
    this.get_$OS = this.get_IsSelected;
    this.set_$OS = this.set_IsSelected;
    this.get_$2W = this.get_PrimaryModelName;
    this.set_$2W = this.set_PrimaryModelName;
    this.get_Root = this.get_$4J;
    this.set_Root = this.set_$4J;
    this.get_$Dp = this.get_IsDisposed;
    Microsoft.Crm.Client.Core.ViewModels.$AO.initializeBase(this);
    this.$Rk = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Models.$JP));
    this.set_PageSize(2147483647)
};
Microsoft.Crm.Client.Core.ViewModels.$AO.prototype = {
    $rd: null,
    $md: null,
    $20f: !1,
    $NI: null,
    $ul: !1,
    get_ActionProvider: function() { return this.$NI },
    set_ActionProvider: function(n) { return this.$NI = n, n },
    $28: "",
    $7a: null,
    $1W2: 0,
    get_Data: function() { return this.$28 },
    set_Data: function(n) {
        return this.$28 !== n &&
            (this.$28 = n, $0.$1(n) ? this.set_Text("") : this.set_Text(this.$28.Name), this.$8("Data")), n
    },
    get_ProcessRequirementSatisfied: function() { return!$0.$1(this.$7a) && this.$7a !== "" },
    $Rk: null,
    get_FirstLevelSubjects: function() { return this.$Rk },
    set_FirstLevelSubjects: function(n) { return this.$Rk = n, n },
    get_Text: function() { return this.$7a },
    set_Text: function(n) { return this.$7a !== n && (this.$7a = n, this.$8("Text")), n },
    get_ItemIndex: function() { return this.$1W2 },
    set_ItemIndex: function(n) { return this.$1W2 !== n && (this.$1W2 = n), n },
    $Gk: !1,
    get_IsLoading: function() { return this.$Gk },
    set_IsLoading: function(n) { return this.$Gk = n, n },
    get_DefaultLookupViewActionProvider: function() { return this.$rd },
    set_DefaultLookupViewActionProvider: function(n) { return this.$rd = n, n },
    get_InitialLookupViewActionProvider: function() { return this.$md },
    set_InitialLookupViewActionProvider: function(n) { return this.$md = n, n },
    $1gX: 0,
    get_SubjectTextboxMaxLength: function() { return this.$1gX },
    set_SubjectTextboxMaxLength: function(n) { return this.$1gX = n, n },
    $17: function() {
        this.$1x || (this.$Gk = !0, Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$17.call(this))
    },
    FetchData: function() { this.$20f || (this.getSubjectData(), this.$3A9()) },
    SetValue: function(n) {
        var t = this.$i5.get_$H(n);
        $0.$1(t) ||
            this.set_Data(new Xrm.Objects.EntityReference("subject",
                new Microsoft.Crm.Client.Core.Framework.Guid(t.$2Z),
                t.$5H))
    },
    ToggleState: function(n) {
        var t = this.$i5.get_$H(n);
        $0.$1(t) || (t.$9n = t.$9n ? 0 : 1)
    },
    getSubjectData: function() {
        this.$Gk = !0;
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXmlForSubject", null);
        n.OnSuccess = this.$$d_$32o;
        n
            .QueryValue =
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<entity name='subject'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='subjectid' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='title'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='parentsubject'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<order attribute='createdon' descending='false' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/fetch>";
        this.set_DefinitionId(n.QueryValue.toString());
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
    },
    $32o: function(n) {
        var t = n.get_$Bp().$21O(), i;
        if (this.$Rk.clear(), !$0.$1(t) && t.length > 0) {
            for (i = 0; i < t.length; i++) {
                var f = t[i].GetValue("subjectid").toString(),
                    s = t[i].GetValue("title"),
                    e = t[i].GetValue("parentsubject"),
                    o = e ? e.Id.toString() : null,
                    r = o ? this.$i5.get_$H(o) : null,
                    u = new Microsoft.Crm.Client.Core.Models.$JP(f, s, r);
                $0.$1(r) ? this.$Rk.add(u) : r.$pT.add(u);
                this.$i5.set_$H(f, u)
            }
            this.$Gk = !1;
            this.$8("SubjectsLoaded")
        }
        this.$20f = !0
    },
    $3A9: function() { Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73("subject", null) },
    get_ProcessRequired: function() { return this.$ul },
    set_ProcessRequired: function(n) {
        var t = new Microsoft.Crm.Client.Core.ViewModels.Converters.$L4, i = t.$Hw(n, null);
        return this.$ul = i, n
    },
    parentNodeScreenReaderText: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("HierarchicalSubject_ParentNode_ScreenReader_Text"),
            n)
    },
    selectedNodeScreenReaderText: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("HierarchicalSubject_SelectedNode_ScreenReader_Text"),
            n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Ed = function() {
    this.get_$W8 = this.get_IsValid;
    this.set_$zT = this.set_DataBindingValidatorResult;
    this.set_$OY = this.set_ManualValidatorResult;
    this.set_$14P = this.set_RecommendationNotification;
    Microsoft.Crm.Client.Core.ViewModels.$Ed.resolveInheritance();
    this.get_Id = this.get_$1Z;
    this.set_Id = this.set_$1Z;
    this.get_$OS = this.get_IsSelected;
    this.set_$OS = this.set_IsSelected;
    this.get_$2W = this.get_PrimaryModelName;
    this.set_$2W = this.set_PrimaryModelName;
    this.get_Root = this.get_$4J;
    this.set_Root = this.set_$4J;
    this.get_$Dp = this.get_IsDisposed;
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    this.get_$Tz = this.get_RequiredLevel;
    this.set_$Tz = this.set_RequiredLevel;
    Microsoft.Crm.Client.Core.ViewModels.$Ed.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Ed.prototype = {
    add_$2TT: function(n) { this.$2F("RevalidateEvent", n) },
    remove_$2TT: function(n) { this.$4I("RevalidateEvent", n) },
    get_IsValid: function() { return($0.$1(this.$AA) || this.$AA.$5r) && ($0.$1(this.$9f) || this.$9f.$5r) },
    get_ErrorMessage: function() { return $0.$1(this.$9f) ? $0.$1(this.$AA) ? "" : this.$AA.$4q : this.$9f.$4q },
    get_ErrorMessageLevel: function() { return $0.$1(this.$9f) ? $0.$1(this.$AA) ? "" : this.$AA.$lM : this.$9f.$lM },
    $AA: null,
    get_DataBindingValidatorResult: function() { return this.$AA },
    set_DataBindingValidatorResult: function(n) {
        if (this.$AA !== n) {
            var t = this.get_IsValid(), i = this.get_ErrorMessage(), r = this.get_ErrorMessageLevel();
            this.$AA = n;
            this.$8("DataBindingValidatorResult");
            t !== this.get_IsValid() && this.$8("IsValid");
            r !== this.get_ErrorMessageLevel() && this.$8("ErrorMessageLevel");
            i !== this.get_ErrorMessage() && this.$8("ErrorMessage")
        }
        return n
    },
    $9f: null,
    get_ManualValidatorResult: function() { return this.$9f },
    set_ManualValidatorResult: function(n) {
        if (this.$9f !== n) {
            var t = this.get_IsValid(), i = this.get_ErrorMessage(), r = this.get_ErrorMessageLevel();
            this.$9f = n;
            this.$8("ManualValidatorResult");
            t !== this.get_IsValid() && this.$8("IsValid");
            r !== this.get_ErrorMessageLevel() && this.$8("ErrorMessageLevel");
            i !== this.get_ErrorMessage() && this.$8("ErrorMessage")
        }
        return n
    },
    $92: null,
    get_AcceptanceTextMessage: function() {
        return $0.$1(this.$92) || $0.$1(this.$92.actions) || this.$92.actions.length < 1
            ? ""
            : this.$92.actions[0].message
    },
    get_AcceptanceActions: function() {
        return $0.$1(this.$92) || $0.$1(this.$92.actions) || this.$92.actions.length < 1
            ? null
            : this.$92.actions[0].actions[0]
    },
    get_RecommendationNotification: function() { return this.$92 },
    set_RecommendationNotification: function(n) {
        return this.$92 !== n && (this.$92 = n, this.$8("RecommendationNotification")), n
    },
    $9i: 0,
    get_RequiredLevel: function() { return this.$9i },
    set_RequiredLevel: function(n) {
        return this.$9i !== n && (this.$9i = n, this.$1RE("RequiredLevel", "Required", "Recommended")), n
    },
    get_Required: function() { return this.$9i === 1 || this.$9i === 2 },
    get_Recommended: function() { return this.$9i === 3 },
    $2qR: function() {
        var n = this.$5d("RevalidateEvent");
        n && n()
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Dc = function() {
    this.$$d_$321 = Function.createDelegate(this, this.$321);
    this.$$d_LoadViewFailure = Function.createDelegate(this, this.LoadViewFailure);
    this.$$d_LoadViewSuccess = Function.createDelegate(this, this.LoadViewSuccess);
    Microsoft.Crm.Client.Core.ViewModels.$Dc.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Dc.prototype = {
    $TF: null,
    $6y: null,
    $lF: null,
    $Io: null,
    $wN: null,
    $oc: null,
    $1bD: "1",
    $hZ: null,
    $ha: null,
    $VM: null,
    $lE: !1,
    $1GY: null,
    $1GX: null,
    $FK: !1,
    get_ShouldShowOnlyGrid: function() { return this.$FK },
    set_ShouldShowOnlyGrid: function(n) { return this.$FK = n, n },
    $17: function() {
        var f, e, o, s, t, r, i, u, n;
        if (!this.$1x &&
        (Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$17.call(this), this.$6y = new(Microsoft
            .Crm.Client.Core.Framework.List$1.$$(String)), this.$lF = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(String)), this.$VM = {}, this.$G0 = this.$2.$6K.isMultiSelect, this.$Gm = this.$2.$6K.lookupStyle, this
            .$FK = $0.$1(this.$2.$6K.shouldShowOnlyGrid) ? !1 : this.$2.$6K.shouldShowOnlyGrid, f = this.$2.$6K
            .disableQuickFind, this.$j3 = $0.$1(f) ? !1 : f, !this.$FK))
            if (this.$br = $0.$1(this.$2.$6K.selectedViewIds) ? "" : this.$2.$6K.selectedViewIds, e = this.$2.$6K
                .disableViewPicker, this.$bR = $0.$1(e) ? !1 : e, this
                .$1KL = $0.$1(this.$2.$6K.DefaultViewId) ? "" : this.$2.$6K.DefaultViewId, this.$lE = !0, this
                .$16g = this.$2.$6K.allowfilteroff, this.$PN = this.$2.$6K.relationshipfiltercondition, this
                .$1GY = "", this.$1GX = "", o = this.$2.$6K
                .filterreferencingattributename, Microsoft.Crm.Client.Core.Framework.$3.$A(o) ||
            (s = o.split("."), this.$1GY = s[0], this
                .$1GX = s[1]), this.$Gm === "single")
                t = this.$2.$6K.optionset, this.$6y.add(t), r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .get_$V().$i(t), this.$lF.add(r.$1P.toString()), this.$VM[t] = r.$1P.toString(), this.$VM[r.$1P
                    .toString()] = t, this.set_SelectedEntity(t);
            else if (this.$Gm === "multi") {
                for (i = this.$2.$6K.logicalNames, u = this.$2.$6K
                        .displayNames, n = 0;
                    n < i.get_Count();
                    n++)
                    this.$6y.add(i.get_$H(n).toString()), this.$lF.add(u.get_$H(n).toString()), this.$VM[u.get_$H(n)
                        .toString()] = i.get_$H(n).toString(), this.$VM[i.get_$H(n).toString()] = u.get_$H(n)
                        .toString();
                this.$lF.sort();
                this.set_SelectedEntity(this.GetEntityLogicalName(this.$lF.get_$H(0)));
                this.$1IF = !1
            }
    },
    $br: null,
    $j3: !1,
    $bR: !1,
    get_DisableViewPicker: function() { return this.$bR },
    set_DisableViewPicker: function(n) { return this.$bR = n, n },
    $qA: null,
    $G0: !1,
    get_IsMultiSelect: function() { return this.$G0 },
    set_IsMultiSelect: function(n) { return this.$G0 = n, n },
    $Gm: null,
    get_LookupStyle: function() { return this.$Gm },
    set_LookupStyle: function(n) { return this.$Gm = n, n },
    $16g: !1,
    get_AllowFilterOff: function() { return this.$16g },
    set_AllowFilterOff: function(n) { return this.$16g = n, n },
    get_HasRelationshipFilterCondition: function() { return!Microsoft.Crm.Client.Core.Framework.$3.$A(this.$PN) },
    $1KL: null,
    get_EnableRelationshipFilter: function() { return this.$lE },
    set_EnableRelationshipFilter: function(n) {
        return this.$lE !== n &&
        (this.$lE = n, this.$TF.$174 = this.$lE, this.$TF
            .$2Q = null, this.$lE &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19o(), this.$TF.$Ww(), this
            .$8("EnableRelationshipFilter")), n
    },
    get_RelationshipFilterText: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Field_Label_UseRelationshipFilter"),
            this.get_$3Jt())
    },
    $PN: null,
    get_RelationshipFilterCondition: function() { return this.$PN },
    set_RelationshipFilterCondition: function(n) { return this.$PN = n, n },
    get_$3Jt: function() {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(this.$1GY, this.$1GX), t;
        return $0.$1(n)
            ? (this.$16g &&
            (t = this, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$1GY, [this.$1GX]),
                    Microsoft.Crm.Client.Core.Framework.$15.$5v("", "LookupRelationshipFilter"))
                .done(function() { t.$8("RelationshipLogicalName") })), "")
            : n.$1P
    },
    get_Views: function() { return this.$Io },
    set_Views: function(n) { return this.$Io = n, n },
    get_ItemViewModels: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1Sh()
    },
    get_ItemViewModelDisplayNames: function() {
        for (var u,
            t,
            f,
            e = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1Sh(),
            i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            r = e,
            o = r.length,
            n = 0;
            n < o;
            ++n) u = r[n], t = u.get_ModelContext(), $0.$1(t) || (f = t.get_$Qf().Name, i.add(f));
        return i.toArray()
    },
    FetchViewsForEntity: function(n) {
        var i = n ? this.get_UserViewsXml() : this.get_SystemViewsXml(),
            t = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("FetchXmlWithCallback", null);
        t.OnSuccess = this.$$d_LoadViewSuccess;
        t.OnFailure = this.$$d_LoadViewFailure;
        t.QueryValue = i;
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, t)
    },
    get_SystemViewsXml: function() {
        return"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\r\n\t\t\t\t\t\t\t\t\t\t\t  <entity name='savedquery'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='name' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='savedqueryid'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='returnedtypecode'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='fetchxml'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='returnedtypecode' operator='eq' value='" + this.$1bD + "' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='statecode' operator='eq' value='0' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type='or'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='queryapi' operator='eq' value='' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='queryapi' operator='null' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type='or'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='querytype' operator='eq' value='0' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='querytype' operator='eq' value='64' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t\t\t<\/fetch>"
    },
    get_UserViewsXml: function() {
        return"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\r\n\t\t\t\t\t\t\t\t\t\t\t  <entity name='userquery'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='name' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='userqueryid' alias='savedqueryid'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='returnedtypecode'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='fetchxml'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='returnedtypecode' operator='eq' value='" + this.$1bD + "' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='statecode' operator='eq' value='0' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type='or'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='querytype' operator='eq' value='0' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='querytype' operator='eq' value='64' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t\t\t<\/fetch>"
    },
    LoadViewSuccess: function(n) {
        var s = n, u, t, i, r, o;
        s.get_EntityCollection().$1v.$T === "savedquery" &&
        (this.FetchViewsForEntity(!0), this.$Io = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), this
            .$wN = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid)));
        u = !1;
        t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        Microsoft.Crm.Client.Core.Framework.$3.$A(this.$br) ? u = !0 : t.addRange(this.$br.split(","));
        for (var c = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$1KL),
            f = "",
            l = n.get_$Bp().$21O(),
            h = l,
            a = h.length,
            e = 0;
            e < a;
            ++e)
            if (i = h[e], !$0.$1(i.GetValue("fetchxml")) &&
            (r = i.GetValue("savedqueryid"), o = String
                .format("{{{0}}}", r.toString()), (u || t.contains(o.toUpperCase()) || t.contains(o.toLowerCase())) &&
            (this.$Io.add(i.GetValue("name")), this.$wN
                .add(r), c.toString()
                .toLowerCase() ===
                r.toString().toLowerCase() &&
                (f = i.GetValue("name")), t.get_Count() > 0 && this.$wN.get_Count() === t.get_Count()))) break;
        Microsoft.Crm.Client.Core.Framework.$3.$A(f)
            ? this.set_SelectedView(this.$Io.get_Count() > 0 ? this.$Io.get_$H(0) : "")
            : this.set_SelectedView(f);
        s.get_EntityCollection().$1v.$T === "userquery" && this.$8("Visible")
    },
    LoadViewFailure: function(n) { Microsoft.Crm.Client.Core.Framework.Trace.logError(1033, "Failed: " + n) },
    get_Entities: function() { return this.$6y },
    set_Entities: function(n) { return this.$6y = n, n },
    get_EntitiesDisplayName: function() { return this.$lF },
    set_EntitiesDisplayName: function(n) { return this.$lF = n, n },
    GetEntityLogicalName: function(n) { return this.$VM[n] },
    get_SelectedEntity: function() { return this.$oc },
    set_SelectedEntity: function(n) {
        if (this.$oc !== n) {
            this.$oc = n;
            var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$oc);
            this.$1bD = t.$7h.toString();
            this.FetchViewsForEntity()
        }
        return n
    },
    GetSelectedEntityDisplayName: function() { return this.$VM[this.$oc] },
    get_SelectedView: function() {
        return $0.$1(this.$hZ) &&
        (!$0.$1(this.$Io) && this.$Io.get_Count() > 0
            ? (this.$hZ = this.$Io.get_$H(0), this.$ha = this.$wN.get_$H(0).toString(), this.$1zo())
            : (this.$hZ = "", this.$ha = null)), this.$hZ
    },
    set_SelectedView: function(n) {
        return this.$hZ === n ||
            $0.$1(n) && $0.$1(this.$hZ) ||
            (this.$hZ = n, this.$ha = this.$wN.get_$H(this.$Io.indexOf(this.$hZ)).toString(), this.$1zo()), n
    },
    get_SelectedViewId: function() {
        if ($0.$1(this.$ha)) var n = this.get_SelectedView();
        return this.$ha
    },
    set_SelectedViewId: function(n) { return this.$ha !== n && (this.$ha = n), n },
    DeleteItem: function(n) {
        var t = this.$TF.$lZ(this.get_ItemViewModels()[n].$5g);
        t === -1 ? this.get_ItemViewModels()[n].set_$OS(!1) : this.$TF.$1R.get_$H(t).set_IsSelected(!1);
        this.$8("Visible")
    },
    $321: function(n) {
        for (var i, u = n.get_$Bp().$21O(), r = u, f = r.length, t = 0;
            t < f;
            ++t
        ) i = r[t], this.$Io.add(i.GetValue("name")), this.$wN.add(i.GetValue("savedqueryid"));
        this.$8("Visible")
    },
    $2hF: function() {
        return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("InteractionCentricGridViewModel",
                "InteractionCentricGridView",
                "InteractionCentricGridViewModel",
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("IsGridFormContext", !0), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("PageSize", 7), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("PreviousGridId", this.$qA), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("IsGridDialogContext", !0), new Microsoft.Crm.Client
                    .Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("DefinitionId", this.$ha), new Microsoft
                    .Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("IsMultiSelect", this.$G0),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("PrimaryModelName", this.$oc), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("EnableRelationshipFilter", this.$lE), new Microsoft
                    .Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("RelationshipFilterCondition", this.$PN), new Microsoft.Crm.Client.Core
                    .Models.Descriptors.ViewModel
                    .ActionProviderPropertyDescriptor("GetDefinitionProvider",
                        "ActionProvider",
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RetrieveListMetadata", null)), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel
                    .ActionProviderPropertyDescriptor("PersonalizationActionProvider",
                        "ActionProvider",
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RetrievePersonalization", null)), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel
                    .ActionProviderPropertyDescriptor("ActionProvider",
                        "ActionProvider",
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("FetchXmlForGrid", null))
                ],
                { ListItemTabIndex: -1 },
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ViewModelDescriptor("InteractionCentricGridControlHeaderViewModel",
                        "InteractionCentricGridControlHeaderView",
                        "GridHeaderViewModel",
                        [
                            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                            .ActionProviderPropertyDescriptor("PersonalizationActionProvider",
                                "ActionProvider",
                                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                                .QueryDescriptor("RetrievePersonalization", null)), new Microsoft.Crm.Client.Core.Models
                            .Descriptors.ViewModel.ValuePropertyDescriptor("IsGridDialogContext", !0), new Microsoft.Crm
                            .Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ShowSearch", !this.$j3)
                        ],
                        {},
                        null)
                ],
                "")
    },
    $2hG: function() {
        return new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("InteractionCentricGridViewModel",
                "InteractionCentricGridView",
                "InteractionCentricGridViewModel",
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("IsGridFormContext", !0), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("PageSize", 10), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("IsGridDialogContext", !0), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("PreviousGridId", this.$qA), new Microsoft.Crm.Client
                    .Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("IsMultiSelect", this.$G0), new Microsoft
                    .Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ShouldShowOnlyGrid", !0)
                ],
                { ListItemTabIndex: -1 },
                null,
                "")
    },
    $1zo: function() {
        $0.$1(this.$TF) ||
        (this.$qA = "grid_" + this.get_InteractionCentricGridViewModel().get_ViewModelId(), this.$TF.dispose(), this
            .$TF = null);
        var n = null;
        n = this.$FK ? this.$2hG() : this.$2hF();
        this.$TF = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(n, this.get_ModelContext(), this.$3M, this.$2);
        this.$FK ||
        (this.get_InteractionCentricGridViewModel().get_GridHeaderViewModel().get_FilterBarViewModel().$jA = this
            .get_InteractionCentricGridViewModel().$2IA(this.$oc));
        this.$8("Visible")
    },
    get_InteractionCentricGridViewModel: function() { return $0.$1(this.$TF) && this.$1zo(), this.$TF },
    SelectedItemScreenReaderText: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ScreenReaderText_RemoveButton"), n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel = function(n) {
    this.$$d_$1vR = Function.createDelegate(this, this.$1vR);
    this.$$d_$1vQ = Function.createDelegate(this, this.$1vQ);
    this.$$d_$3Dr = Function.createDelegate(this, this.$3Dr);
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel.resolveInheritance();
    this.get_AttributeMetadata = this.get_$1NK;
    this.set_AttributeMetadata = this.set_$1NK;
    this.get_Id = this.get_$1Z;
    this.set_Id = this.set_$1Z;
    this.get_$OS = this.get_IsSelected;
    this.set_$OS = this.set_IsSelected;
    this.get_$2W = this.get_PrimaryModelName;
    this.set_$2W = this.set_PrimaryModelName;
    this.get_Root = this.get_$4J;
    this.set_Root = this.set_$4J;
    this.get_$Dp = this.get_IsDisposed;
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    this.get_LaunchedWithUnsavedChanges = this.get_$1su;
    this.set_LaunchedWithUnsavedChanges = this.set_$1su;
    this.get_$2dT = this.get_AttributeFieldNames;
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel.initializeBase(this, [n])
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel.prototype = {
    $FP: null,
    $OR: !1,
    $1IP: !1,
    $1az: null,
    $Nk: null,
    $af: null,
    $z5: null,
    $Fc: 0,
    get_$2qf: function() { return this.$Fc },
    $17y: null,
    get_Query: function() { return this.$17y },
    set_Query: function(n) { return this.$17y = n, n },
    $bQ: null,
    get_CreateRecordActionProvider: function() { return this.$Nk },
    set_CreateRecordActionProvider: function(n) { return this.$Nk = n, n },
    get_SetEntityReferenceActionProvider: function() { return this.$af },
    set_SetEntityReferenceActionProvider: function(n) { return this.$af = n, n },
    get_BoundField: function() { return this.$FP },
    set_BoundField: function(n) { return this.$FP = n, n },
    get_AttributeFieldNames: function() { return this.$4x },
    set_AttributeFieldNames: function(n) {
        return n === this.$4x ? n : (this.$4x = n, this.$8("AttributeFieldNames"), n)
    },
    get_IsSaving: function() { return this.$OR },
    set_IsSaving: function(n) { return this.$OR !== n && (this.$OR = n, this.$8("IsSaving")), n },
    $186: null,
    get_RetrieveProcessActionProvider: function() { return this.$186 },
    set_RetrieveProcessActionProvider: function(n) { return this.$186 = n, n },
    add_PreNavigation: function(n) { this.$2F("PreNavigation", n) },
    remove_PreNavigation: function(n) { this.$4I("PreNavigation", n) },
    $2fE: function(n) { return n },
    $1db: function() { return!1 },
    $3UE: function() { return!1 },
    $3UF: function() { return!1 },
    $3UG: function() { return!1 },
    get_$37R: function() { return!1 },
    get_$373: function() { return this.$8G === 1 },
    $1vQ: function() { this.$15q() },
    $1vR: function(n) {
        var i, t;
        this.$3P ||
        (i = n[0], i && this.get_ModelContext().SetValue("processid", i), t = n[1],
            t &&
            (this.get_ModelContext().SetValue("stageid", t), this.get_ModelContext()
                .SetValue("traversedpath", t.toString())), this.$15q())
    },
    $1Op: function(n) {
        var t = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(n, "InteractionCentricWorkflow");
        return t.$3S = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["workflowid"]), t.$Od = !0, t
            .set_$80(1), t.$2u = 20, t
    },
    $2Vm: function(n) {
        if ($0.$1(this.$Q.$AV) || $0.$1(this.$Q.$AV.get_ModelContext()) || $0.$1(this.$FP)) this.set_ModelContext(n);
        else if (!$0.$1(this.$af) && !$0.$1(this.$Q.$AV.get_ModelContext().get_Id())) {
            this.set_ModelContext(n);
            var t = this.$af.$4W();
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(t)
        }
        this.$Bj("OnLoadModelCompleted")
    },
    $2Vn: function() {
        var i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$J),
            n = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "BPCForEntityFilterExpression"),
            t;
        n.$9o("category", "eq", "4");
        n.$9o("primaryentity", "eq", i.$7h.toString());
        n.$9o("statecode", "eq", "1");
        t =
            "<fetch mapping='logical' version='1.0'>\r\n\t\t\t\t\t\t\t\t\t<entity name='workflow'>\r\n\t\t\t\t\t\t\t\t\t<attribute name='workflowid' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='businessprocesstype' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='createdon' />\r\n\t\t\t\t\t\t\t\t\t<order attribute='processorder' />" + n.$7F() + "<\/entity>\r\n\t\t\t\t\t\t\t\t<\/fetch>";
        this.$17y = t;
        this.$bQ = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(this.$17y)
    },
    $kX: function() {
        var n = this;
        Microsoft.Crm.Client.Core.Models.$O.$Hx(this.$J,
            new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(this.$4x)).then(function(t) {
                var i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(n.$J);
                i.$tG
                    ? (n.$2Vn(), Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$36(n.$1Op(n.$bQ),
                            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                            .$23(1,
                                1,
                                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                                .get_$ZO()),
                            Microsoft.Crm.Client.Core.Framework.$15.$5v("", "InteractionCentricForm"))
                        .then(function(i) {
                                if (i.get_count() > 0) {
                                    var r = n.$2US(i);
                                    r &&
                                        t.SetValue("processid",
                                            new Microsoft.Crm.Client.Core.Framework.Guid(r),
                                            null,
                                            null)
                                }
                                n.$2Vm(t)
                            },
                            function(n) {
                                Microsoft.Crm.Client.Core.Framework.Trace
                                    .logError(1007,
                                        "Retrieve Multiple Failed for Business Process Control in Interaction Centric Create Form with error : {0}",
                                        n.$E)
                            }))
                    : n.$2Vm(t)
            },
            null)
    },
    $2US: function(n) {
        var t = this.$2px(n);
        return this.$3OK(t)
    },
    $3OK: function(n) {
        if (!n.length) return null;
        var t = this;
        return n.sort(function(n, t) {
            var u = Number.parseInvariant(n.fields.processorder.toString()),
                f = Number.parseInvariant(t.fields.processorder.toString()),
                i,
                r;
            return u === f
                ? (i = n.fields.createdon, r = t.fields.createdon, i === r) ? 0 : i > r ? 1 : -1
                : u > f ? 1 : -1
        }), n[0].fields.workflowid.toString()
    },
    $2px: function(n) {
        for (var i = [], t = 0; t < n.get_count(); t++)
            n.get_$H(t).fields.businessprocesstype && n.get_$H(t).fields.businessprocesstype.get_$XM() !== "0" ||
                i.push(n.get_$H(t));
        return i
    },
    $28P: function() {
        var t, i, r, n;
        if (!$0.$1(this.$Q.$S) && "InitializationParameters" in this.$Q.$S) {
            if (t = this.$Q.$S.InitializationParameters, "RelationshipAttribute" in t &&
                t.RelationshipAttribute.length > 0) {
                i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(this.$4x);
                for (var f = t
                             .RelationshipAttribute,
                    e = f.length,
                    u = 0;
                    u < e;
                    ++u) r = f[u], $0.$1(r) || i.contains(r) || i.add(r);
                this.set_AttributeFieldNames(i.toArray())
            }
            n = this;
            Microsoft.Crm.Client.Core.Models.$O.$tC(this.$J,
                t,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(this.$4x)).then(function(t) {
                    var i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(n.$J);
                    i.$tG
                        ? (n.$2Vn(), Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                            .$36(n.$1Op(n.$bQ),
                                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                .$23(1,
                                    1,
                                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                                    .get_$ZO()),
                                Microsoft.Crm.Client.Core.Framework.$15.$5v("", "InteractionCentricForm"))
                            .then(function(i) {
                                    if (i.get_count() > 0) {
                                        var r = n.$2US(i);
                                        r &&
                                            t.SetValue("processid",
                                                new Microsoft.Crm.Client.Core.Framework.Guid(r),
                                                null,
                                                null)
                                    }
                                    n.set_ModelContext(t);
                                    n.$Bj("OnLoadModelCompleted")
                                },
                                function(n) {
                                    Microsoft.Crm.Client.Core.Framework.Trace
                                        .logError(1007,
                                            "Retrieve Multiple Failed for Business Process Control in Interaction Centric Create Form with error : {0}",
                                            n.$E)
                                }))
                        : (n.set_ModelContext(t), n.$Bj("OnLoadModelCompleted"))
                },
                null)
        } else this.$kX()
    },
    $1UG: function(n) {
        switch (n) {
        case 2:
            this.$28P();
            break;
        default:
            this.$kX()
        }
    },
    $17: function() {
        if (this.$1IP = !0, this.$Fc = 0, this.$8G === 1) {
            if (!$0.$1(this.$4x))
                if ($0.$1(this.$Q.$S)) this.$kX();
                else {
                    var t = this.$Q.$S.InitializeFrom, n = null;
                    $0.$1(this.$Q.$S.InitializationParameters) ||
                        (n = this.$Q.$S.InitializationParameters, $0.$1(n.InitializeFrom) || (t = n.InitializeFrom));
                    $0.$1(n) || $0.$1(n.BoundField)
                        ? $0.$1(this.$Q.$S.BoundField) || (this.$FP = this.$Q.$S.BoundField)
                        : this.$FP = n.BoundField;
                    $0.$1(this.get_ModelContext()) && this.$1UG(t, n)
                }
            Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.prototype.$17.call(this)
        } else
            Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.prototype.$17.call(this), this.add_$IU(this.$$d_$3Dr)
    },
    $3Dr: function() {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$J), t;
        !$0.$1(n) &&
            n.$F5 &&
            (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$6i
                .forceRuleEvaluation(), this.remove_$IU(this.$$d_$3Dr));
        $0.$1(this.get_ModelContext()) ||
        (t = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
            .$8s(this.get_ModelContext()), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .get_$1Qa().raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8s, t))
    },
    $27k: function() {
        Microsoft.Crm.Client.Core.ViewModels.$53.isCreateFormViaUrl()
            ? (this.$1az = "SaveAndClose", this.$Fc = 3)
            : (this.$1az = "Save", this.$Fc = 1);
        this.$EE()
    },
    $2hz: function() {
        this.$Fc = 3;
        this.$EE()
    },
    $2hy: function(n) {
        this.$Fc = 6;
        this.$z5 = n;
        this.$EE()
    },
    $EE: function() {
        var n, t;
        if (!Microsoft.Crm.Client.Core.Framework.$6.$w && !this.$OR) {
            if (!this.$Cl) {
                Microsoft.Crm.Client.Core.ViewModels.$Z
                    .$3S9(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Title_Generic"),
                        Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Form_Component_Error"));
                this.$OR = !1;
                return
            }
            n = this.$5d("PreNavigation");
            n && n(this, null);
            $0.$1(this.$186)
                ? this.$15q()
                : (t = this.$186.$4W(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                    .get_$2S().$2c(t));
            this.set_IsSaving(!0)
        }
    },
    $15q: function() {
        if (!Microsoft.Crm.Client.Core.Framework.$6.$w && !$0.$1(this.$Nk)) {
            var n = this.$Nk.$4W();
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(n)
        }
    },
    $vS: function(n) {
        $0.$1(this.get_ModelContext()) ||
            $0.$1(this.get_ModelContext().get_Id()) ||
            this.get_ModelContext().get_Id() === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() ||
            Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.prototype.$vS.call(this, n)
    },
    $1ug: function(n, t) {
        this.$1IP = !1;
        this.$1TU(n, t)
    },
    $1ue: function(n) {
        this.set_IsSaving(!1);
        $0.$1(this.$z5) || this.$z5.resolve(!1);
        switch (n.$10) {
        case-2147220685:
            this.$RG = !0;
            this.$EE();
            break;
        default:
            this.$Qm(n)
        }
    },
    $V1: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$1CY(this.$11);
        $0.$1(n) || n(this)
    },
    $GN: function() {
        this.remove_$IU(this.$$d_$3Dr);
        Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.prototype.$GN.call(this)
    },
    $1TU: function(n, t) {
        var r, i;
        if ($0
            .$1(n) &&
            $0.$1(t) &&
            this.set_IsSaving(!1), r = null, $0.$1(n) || $0.$1(t) || (r = this.$5d("RecordSaved")), !$0.$1(t))
            switch (this.$Fc) {
            case 1:
                this.$V1();
                break;
            case 3:
                Microsoft.Crm.Client.Core.ViewModels.$53.isCreateFormViaUrl() &&
                    this.$1az === "SaveAndClose" &&
                    window.close();
                i = new Microsoft.Crm.Client.Core.Commands.$33(this, 40);
                i.$19 = {};
                i.$J = this.$J;
                i.$19.SourceId = t.get_$52();
                i.$1jH = !0;
                i.execute();
                i.dispose();
                break;
            case 6:
                $0.$1(this.$z5) || this.$z5.resolve(!0)
            }
        $0.$1(r) || r(new Microsoft.Crm.Client.Core.ViewModels.$Qk(n, t))
    },
    $2P6: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Object);
        return this.$8G === 1 && !$0.$1(this.$1IP) && !this.$1IP
            ? (t.resolve(!0), t.promise())
            : Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.prototype.$2P6.call(this, n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel = function() {
    this.$$d_$1Ti = Function.createDelegate(this, this.$1Ti);
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel.prototype = {
    $1ko: "CurrentSelectedTabName",
    $wo: null,
    get_CurrentSelectedTabName: function() { return this.$wo },
    set_CurrentSelectedTabName: function(n) { return this.$wo = n, n },
    get_GetIsCurrentSelectedTabPropertyName: function() { return"IsCurrentSelectedTab" },
    $17: function() {
        var n, t, i, f, r, u, e, o;
        if (!this.$1x) {
            Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this);
            this.$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$4b,
                this.$$d_$1Ti);
            n = null;
            t = this.$F;
            for (i in t) {
                f = { key: i, value: t[i] };
                n = f.value;
                break
            }
            if (n) {
                if (this.$wo = n.get_Name(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                    .get_instance().get_$1i().isFeatureEnabled("AssociatedGridURLAddressability") &&
                    !$0.$1(this.$2.$j2)) {
                    r = this.$F;
                    for (u in r)
                        if (e = { key: u, value: r[u] }, o = e.value, o.get_Name() === this.$2.$j2) {
                            this.$wo = this.$2.$j2;
                            this.$2.$j2 = null;
                            break
                        }
                }
                this.$8(this.$1ko)
            }
        }
    },
    $GN: function() {
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$4b,
            this.$$d_$1Ti);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    },
    $1Ti: function(n) {
        this.$wo = n.$Xp;
        this.$8(this.$1ko)
    }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel = function() {
    this.$IP = [];
    this.$H2 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel.initializeBase(this);
    this.$xJ = !0;
    this.$xB = !0
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel.$3Ac = function(n) {
    var u, t, e, v, y, i, r, b;
    if (n.lastButtonClicked === "add_id") {
        u = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1Sh();
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19o();
        var f = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.ViewModels.LookupControlItem)),
            k = n.records,
            c = Xrm.Page.getAttribute(k),
            l = {};
        if (n.isInlineOrAssociateFormLookup) {
            if (t = n.context, !$0.$1(t)) {
                e = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(t,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("AssociateRecordsForInteractionCentric", null));
                t.$Qj = !1;
                for (var a = u, d = a.length, o = 0;
                    o < d;
                    ++o
                )
                    v = a[o], y = v.get_ModelContext().get_$52(), t
                        .$Id = y, $0.$1(t.$Id) ||
                        $0.$1(e) ||
                        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S()
                        .$2c(e.$4W())
            }
        } else {
            if (n
                .isMultiSelect &&
                (i = c.getValue(), !$0.$1(i)))
                for (r = 0; r < i.length; r++) f.add(i[r]), $0.$1(i[r].id) || (l[i[r].id.toLowerCase()] = !0);
            for (var p = u, g = p.length, s = 0; s < g; ++s) {
                var w = p[s], h = w.get_ModelContext().get_$52(), nt = "{" + h.get_$52().toLowerCase() + "}";
                $0.$1(l[nt]) &&
                (b = new Microsoft.Crm.Client.Core.ViewModels
                    .LookupControlItem(h.get_$Du(), h.get_$52(), w.get_ModelContext().get_$Qf().Name.toString()), f
                    .add(b))
            }
            c.setValue(f.toArray())
        }
    } else Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19o();
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$1VF(!1)
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel.prototype = {
    $1LI: null,
    get_LookupForField: function() { return this.$1LI },
    set_LookupForField: function(n) { return this.$1LI = n, n },
    $G0: !1,
    get_IsMultiSelect: function() { return this.$G0 },
    set_IsMultiSelect: function(n) { return this.$G0 = n, n },
    get_InteractionCentricLookupMaxCount: function() { return 10 },
    get_RecordsCountText: function() {
        return this.$1R.get_Count() < 10
            ? this.$1R.get_Count() === 1
            ? this.$1R.get_Count().toString() +
            " " +
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Dialog_ChangeParent_Type_Record")
            : this.$1R.get_Count().toString() +
            " " +
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Web.Tools.FormEditor.Dialogs.subgrid.aspx.RecordsLabel")
            : "10+ " +
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Web.Tools.FormEditor.Dialogs.subgrid.aspx.RecordsLabel")
    },
    get_MoreThanOneMatchText: function() {
        return this.get_$AH().get_shouldAutoResolve() && !this.$2A && this.$IP.length > 1
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("LookupAmbiguousTooltip")
            : null
    },
    $1fm: null,
    get_$AH: function() { return this.$1fm },
    set_$AH: function(n) { return this.$1fm = n, n },
    $D1: null,
    get_EntitiesMetadataViewModel: function() { return this.$D1 },
    set_EntitiesMetadataViewModel: function(n) { return this.$D1 = n, n },
    $xB: !1,
    get_HideLookupMoreRecords: function() { return this.$xB },
    set_HideLookupMoreRecords: function(n) { return this.$xB = n, n },
    $17Y: !1,
    get_IsInlineOrAssociateFormLookup: function() { return this.$17Y },
    set_IsInlineOrAssociateFormLookup: function(n) { return this.$17Y = n, n },
    $QN: !1,
    $We: null,
    get_$V: function() { return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V() },
    $bf: null,
    get_ParentLookupViewModel: function() { return this.$bf },
    set_ParentLookupViewModel: function(n) { return this.$bf = n, n },
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.$97.prototype.$17.call(this);
        this.$jo = !1;
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19o()
    },
    $1tJ: function(n) {
        var r, i, t;
        if (this.$Gm === "single") this.$IP = n;
        else if (this.$Gm === "multi") {
            if (this.$H2.add(this.$J), this.$IP.length)
                for (r = this.$IP
                        .length, i = 0;
                    i <= n.length - 1 && this.$IP.length <= this.get_PageSize();
                    r++, i++) this.$IP[r] = n[i];
            else this.$IP = n;
            if (this.$D1) {
                if (this.$IP.length < this.get_PageSize())
                    for (t = 0; t < this.$D1.$6y.get_Count(); t++)
                        if (!this.$H2.contains(this.$D1.$6y.get_$H(t).get_$1l())) {
                            this.$D1.set_SelectedItem(t.toString());
                            break
                        }
            } else this.$D1 || this.$H2.clear()
        }
        this.get_$AH().get_shouldAutoResolve() && !this.$2A && this.$3QM(this.$IP.length)
    },
    $3QM: function(n) {
        var t = this.get_$AH(), i, r;
        t.$17b = !1;
        n === 1
            ? (t.$1Wf(this.$IP[0]), t.$17b = !0)
            : (i = n
                ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("LookupAmbiguousTooltip")
                : Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("InlineEditControls.InlineLookup.NoRecords"), r =
                n ? "Error_ISHLookupAutoResolve_MoreThanOneRecords" : "Error_ISHLookupAutoResolve_ZeroRecords", t
                .$2mI(i, r));
        t.$xO = !0
    },
    AddUnresolvedEmail: function() {
        if (this.get_$AH() && this.get_$AH().get_$Et() && this.get_$AH().$1sR(this.get_$AH().get_$Et().trim())) {
            var n = this.get_$AH().get_$Et().trim(),
                i = { addressused: n },
                r = new Xrm.Objects.EntityReference("activityparty",
                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                t = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord(r,
                        i,
                        { addressused: 14 },
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            this.$38h(this.get_$AH().get_Data(), n) || (t.$4P.add("addressused"), this.get_$AH().$2bx(t))
        }
    },
    $38h: function(n, t) {
        for (var f, r, u = n.get_entities(), e = u.length, i = 0;
            i < e;
            ++i
        ) if (f = u[i], r = f.getValue("addressused"), r && r.toString() === t) return!0;
        return!1
    },
    $5J: function(n) {
        if (n.$10 === -2147220960 && this.$Gm !== "single" && this.$D1) {
            this.$H2.add(this.$J);
            for (var t = 0; t < this.$D1.$6y.get_Count(); t++)
                if (!this.$H2.contains(this.$D1.$6y.get_$H(t).get_$1l())) {
                    this.$D1.set_SelectedItem(t.toString());
                    return
                }
            this.$QN && this.$8("NewItemDescriptorAndModel");
            this.set_IsLoading(!1);
            this.set_HasMoreRecords(!1);
            this.$QN = !1;
            this.$8("RecordCount")
        } else Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$5J.call(this, n)
    },
    $4Y: function(n) {
        var r, i, t;
        if ($0.$1(this.$Dt)) this.$We = n;
        else {
            if (r = Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("StopMarkerForLookupSearch", 1, null), this.$Gm !== "single") {
                this.$39d(n);
                return
            }
            for (this.$2o.get_$B4().$76(), this.$MQ = 0, i = n.get_$Bp()
                    .$21O(), t = 0;
                t < i.length;
                t++) this.$MQ < this.get_PageSize() ? (this.$MQ++, this.$1hK(i[t])) : n.get_$Bp().$DP(i[t]);
            this.$QN && this.$8("NewItemDescriptorAndModel");
            this.set_IsLoading(!1);
            this.set_HasMoreRecords(!n.get_$W4());
            this.$QN = !1;
            this.$8("RecordCount")
        }
    },
    openLookupDialog: function() {
        var u = new Xrm.DialogOptions, n, i, r, t;
        if (u.width = 485, n = {}, n.isMultiSelect = this.$G0, n.records = this.$1LI, n.disableQuickFind = this
            .get_$AH().$j3, n.disableViewPicker = this.get_$AH().$bR, n.relationshipfiltercondition = this.get_$AH()
            .get_$1Zq(), n.allowfilteroff = this.get_$AH().$18z, n.filterreferencingattributename = this.get_$AH()
            .$10G, this.$Gm === "single")
            n.optionset = this.$J, n.lookupStyle = "single", n.selectedViewIds = this.get_$AH().$br, n
                .DefaultViewId = this.get_$AH().$KX;
        else if (this.$Gm === "multi") {
            for (i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), r = new(Microsoft.Crm.Client.Core
                    .Framework.List$1.$$(String)), t = 0;
                t < this.$D1.$6y.get_Count();
                t++)
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$32()
                    .$7p(this.$D1.$6y.get_$H(t).get_$1l(), 1) &&
                    (i.add(this.$D1.$6y.get_$H(t).get_$1l()), r.add(this.$D1.$6y.get_$H(t).get_$AB()));
            if (!i.get_Count()) {
                Microsoft.Crm.Client.Core.ViewModels.$Z
                    .$3S9(this.get_$7E().$2H8(-2147220960), this.get_$7E().$5I(-2147220960));
                return
            }
            n.logicalNames = i;
            n.displayNames = r;
            n.lookupStyle = "multi"
        }
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$1VF(!0);
        this.$17Y && (n.context = this.$2, n.isMultiSelect = !0);
        n.isInlineOrAssociateFormLookup = this.$17Y;
        Xrm.Dialog.openDialog("Lookup",
            u,
            n,
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel.$3Ac,
            null)
    },
    screenReaderTextForInteractionCentricLookupList: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("InteractionCentricLookupListCount_ScreenReader_Label"),
            n)
    },
    $39d: function(n) {
        var i, t;
        for (this.$MQ || this.$2o.get_$B4().$76(), i = n.get_$Bp()
                .$21O(), t = 0;
            t < i.length;
            t++) this.$MQ < this.get_PageSize() ? (this.$MQ++, this.$1hK(i[t])) : n.get_$Bp().$DP(i[t]);
        this.$QN && this.$8("NewItemDescriptorAndModel");
        (this.$H2.get_Count() === this.$D1.$6y.get_Count() - 1 || this.$MQ >= 10) && this.set_IsLoading(!1);
        this.set_HasMoreRecords(!n.get_$W4());
        this.$QN = !1;
        this.$8("RecordCount")
    },
    $1tG: function() {
        $0.$1(this.get_$AH()) || this.get_$AH().get_shouldAutoResolve()
            ? $0.$1(this.$FE) || $0.$1(this.$J)
            ? this.set_IsLoading(!1)
            : (this.$Gm === "multi" &&
                this.$H2 &&
                (!this.$H2.get_Count() || this.$H2.get_Count() === this.$D1.$6y.get_Count()) &&
                (this.$H2.get_Count() === this.$D1.$6y.get_Count() && this.$H2.clear(), this.$IP
                    .length = 0, $0.$1(this.$2o) || this.$2o.get_$B4().$76()), Microsoft.Crm.Client.Core.ViewModels.$97
                .prototype.$1tG.call(this))
            : (this.$Gm === "multi" &&
                this.$H2 &&
                (!this.$H2.get_Count() || this.$H2.get_Count() === this.$D1.$6y.get_Count()) &&
                ($0.$1(this.$FE) ||
                    $0.$1(this.$J) ||
                    (this.$H2.get_Count() === this.$D1.$6y.get_Count() && this.$H2.clear(), this.$IP
                        .length = 0, $0.$1(this.$2o) || this.$2o.get_$B4().$76())), Microsoft.Crm.Client.Core.ViewModels
                .$97.prototype.$1tG.call(this))
    },
    $1ve: function() { this.get_CurrentItemIndex() >= 0 && this.get_$AH().$1Wf(this.$IP[this.get_CurrentItemIndex()]) },
    $30N: function(n) {
        this.$Dt = n;
        this.set_ListItemViewDescriptor(Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(this.$Dt));
        this.$QN = !0;
        $0.$1(this.$We) || (this.$4Y(this.$We), this.$We.dispose(), this.$We = null)
    },
    $GN: function() {
        $0.$1(this.get_$AH()) || this.set_$AH(null);
        $0.$1(this.$D1) || (this.$D1.dispose(), this.$D1 = null);
        this.$bf = null;
        this.$H2 = null;
        this.$IP = null;
        Microsoft.Crm.Client.Core.ViewModels.$97.prototype.$GN.call(this)
    },
    ShowNewButtonOnlyIfInteractionCentricEnabled: function() {
        var n, t;
        if (!$0.$1(this.$bf) && !$0.$1(this.$bf.$9d) && !$0.$1(this.$bf.$9d.$26)) {
            if (!$0.$1(this.get_$AH()) && !$0.$1(this.get_$AH().$17X) && this.get_$AH().$17X) return!1;
            if (n = this.$bf.$9d.$26.$J, !$0.$1(n) && (t = this.get_$V().$i(n), !$0.$1(t))) return t.$Dq
        }
        return!0
    },
    IsVisibleInMobileClientOrICEnabled: function() {
        var t = this.$J, n = this.get_$V().$i(t);
        return $0.$1(n) ? !1 : n.$OV || n.$Dq
    },
    SetPageSizeAndHideMoreRecords: function() {
        this.$2.$p !== 12 && this.$2.$p !== 37 && this.IsVisibleInMobileClientOrICEnabled()
            ? (this.set_PageSize(10), this.$xB = !1)
            : (this.set_PageSize(2147483647), this.$xB = !0)
    }
};
Microsoft.Crm.Client.Core.ViewModels
    .InteractionCentricPartyListLookupViewModel = function() {
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.initializeBase(this)
    };
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.$1Ma = function(n) {
    var i = { partyid: n },
        r = new Xrm.Objects.EntityReference("activityparty", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        t = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord(r,
                i,
                { partyid: 6 },
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    return t.$4P.add("partyid"), t
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel
    .$1h6 = function(n) {
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityCollection([Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.$1Ma(n)],
                !1,
                1,
                !1)
    };
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.prototype = {
    $Qg: !1,
    $1c5: !1,
    $12A: !1,
    $9e: "multi",
    $11x: !0,
    get_$KU: function() {
        var n, t;
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
            .isInstanceOfType(this.get_Data()) &&
            this.$9e === "single" &&
            (n = this.get_Data(), !$0.$1(n) &&
                n.get_count() > 0 &&
                (t = Microsoft.Crm.Client.Core.ViewModels.PartyListViewModel.$m9(n.get_$H(0)), Microsoft.Crm.Client.Core
                    .Framework.$3h.isInstanceOfType(t)))
            ? t
            : null
    },
    set_$KU: function(n) {
        return n !== this.get_$KU() &&
            this.set_Data($0.$1(n)
                ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty()
                : Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel.$1h6(n)), n
    },
    get_IsMultiSourceLookup: function() { return this.$11x },
    set_IsMultiSourceLookup: function(n) { return this.$11x = n, n },
    get_NavigationEnabled: function() { return this.$Qg },
    set_NavigationEnabled: function(n) { return this.$Qg = n, n },
    get_ShouldAutoResolveEmail: function() { return this.$1c5 },
    set_ShouldAutoResolveEmail: function(n) { return this.$1c5 = n, n },
    get_LookupStyle: function() { return this.$9e },
    set_LookupStyle: function(n) { return this.$9e = n, n },
    showOrHideResultsList: function() {
        Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2 &&
            ($0.$1(this.$EW) || $0.$1(this.$DY) || (this.$EW.$5P.get_Count() <= 0 ? this.$RB(!0) : this.$RB(!1)))
    },
    $1Wf: function(n) {
        this.$9e === "multi"
            ? ($0.$1(n) || this.$EW.$Ut(n), this.get_interactionCentricLookupAutoResolve() || this.$RB(!1))
            : Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.$1Wf.call(this, n);
        this.get_interactionCentricLookupAutoResolve() &&
        (this.$1j4(), this.clearError(), this.get_shouldAutoResolve() &&
            this.$DY.get_RecordCount() === 1 &&
            (this.$RB(!1), this.set_HasFocus(!1)))
    },
    $RB: function(n) {
        (Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2 ||
                this.get_shouldAutoResolve() && Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 3) &&
            ($0.$1(this.$EW) ||
                $0.$1(this.$DY) ||
                (this.$EW.set_HidePartyList(n), this.$DY.set_HideLookupResultsList(!n)))
    },
    updateInputValue: function() {
        this.get_interactionCentricLookupAutoResolve() && !$0.$1(this.$6Q) && this.$6Q.set_Value(this.$xS);
        this.$9e === "single" && Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.updateInputValue.call(this)
    },
    $1v1: function(n, t) {
        this.$9e === "multi"
            ? (this.$DY.set_SearchValue($0.$1(this.get_$Et()) ? "" : this.get_$Et()), this.$RB(!0))
            : Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$1v1.call(this, n, t)
    },
    $1uh: function(n, t) {
        this.$9e === "single" && Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$1uh.call(this, n, t)
    },
    $Of: function(n, t) {
        this.$9e === "multi" ? this.$1GM() : Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype.$Of.call(this, n, t);
        this.$12A && this.$RB(!0);
        this.$12A = !0
    },
    $2P8: function(n) {
        this.$Qj = !0;
        $0.$1(this.get_ModelContext())
            ? this.$1Wf(n.$CO)
            : (this.get_ModelContext().$1br(), this.$1Wf(n.$CO), this.get_ModelContext().$1Zt());
        this.$Qj = !1;
        this.$1OD()
    },
    $2eG: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype.buildChildViewModelDescriptors.call(this, n)
    },
    buildChildViewModelDescriptors: function(n) {
        var t, i;
        this.$G0 = this.$9e === "single" ? !1 : !0;
        Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype.buildChildViewModelDescriptors.call(this, n);
        t = {};
        $0.$1(n.Properties.EditTabIndex) || (t.EditTabIndex = n.Properties.EditTabIndex);
        i = {
            input: new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("String",
                    "String",
                    "input",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("UpdateOnKeyUp", !0)
                    ],
                    t)
        };
        this.$9e === "multi" &&
        (i.partylist = Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$3Xb("InteractionCentricPartyListViewModel",
                "InteractionCentricPartyList",
                "partyList",
                this.$Gr,
                null,
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("NavigationEnabled", this.$Qg)
                ],
                null,
                null));
        this.$qZ(i)
    },
    $2bx: function(n) { this.$9e === "multi" && ($0.$1(n) || this.$EW.$2bw(n), this.$1j4(), this.$RB(!1)) },
    $1v0: function(n, t) {
        this.get_HasFocus() || this.$9e !== "multi"
            ? this.$9e === "single" && Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.$1v0.call(this, n, t)
            : this.$1c5 && !$0.$1(this.$Dn) && this.$DY.AddUnresolvedEmail()
    },
    $8T: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype.$8T.call(this, n, t);
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel.isInstanceOfType(t) &&
            (this.$EW = t, this.$EW.$Tq = this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel = function() {
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel.initializeBase(this);
    this.AddPropertyChangedListener("Data", this.$$d_$Oe)
};
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel.prototype = {
    $Tq: null,
    $GN: function() {
        this.RemovePropertyChangedListener("Data", this.$$d_$Oe);
        this.$Tq = null;
        Microsoft.Crm.Client.Core.ViewModels.PartyListViewModel.prototype.$GN.call(this)
    },
    $3Fq: function(n) {
        if (n.$Y5) {
            var t = new Microsoft.Crm.Client.Core.Commands.$33(n, 40);
            t.$19 = { EntityReference: n.$W9 };
            t.$1Y = null;
            t.$J = n.$W9.get_$Du();
            t.execute();
            t.dispose()
        }
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Ur = function() {
    Microsoft.Crm.Client.Core.ViewModels.$Ur.initializeBase(this);
    this.set_StartIndex(1e3)
};
Microsoft.Crm.Client.Core.ViewModels.$Ur.prototype = {
    $9W: null,
    get_DataList: function() { return this.$9W },
    set_DataList: function(n) { return this.$9W = n, n },
    $Gi: null,
    get_Data: function() { return this.$Gi },
    set_Data: function(n) { return this.$Gi = n, n },
    $j0: null,
    get_DataNames: function() { return this.$j0 },
    set_DataNames: function(n) { return this.$j0 = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this), this.$9W = {}, this.$j0 = {}, this
            .set_ItemIDs(new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))), this.$jJ = new(Microsoft.Crm
            .Client.Core.Framework.List$1.$$(String)), this.getData())
    },
    $jJ: null,
    get_ItemNames: function() { return this.$jJ },
    set_ItemNames: function(n) { return this.$jJ = n, n },
    $2HV: function() { return null },
    $30D: function() { return null },
    $1fd: null,
    get_ItemIDs: function() { return this.$1fd },
    set_ItemIDs: function(n) { return this.$1fd = n, n },
    $1bm: function() {
        var s = this.$Gi, r, f, n, e, t, i, o;
        for (r in s) {
            var h = { key: r, value: s[r] },
                u = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)
                ),
                c = h.value;
            for (f in c)
                n = { key: f, value: c[f] }, e = this.$9W[n
                    .key], ($0.$1(e) || $0.$1(e.$26)) &&
                (this.$9W[n.key] = n.value, t = !1, Microsoft.Crm.Client.Core.ViewModels.$2A
                    .isInstanceOfType(n.value)
                    ? (i = n.value, !$0.$1(i.$S) && "MetadataSubType" in i.$S
                        ? (o = i.$S.MetadataSubType, t = !$0.$1(o) && o !== 3)
                        : t = !0)
                    : t = !0, t &&
                (this.get_ItemIDs().add(this.$30D(n.value)), this.$jJ.add(this.$2HV(n.value)), u
                    .add(this.$2HV(n.value))));
            u.get_Count() > 0 && (this.$j0[h.key] = u)
        }
    },
    $Iu: null,
    get_SelectedItemID: function() { return this.$Iu },
    set_SelectedItemID: function(n) { return this.$Iu = n, n },
    $pU: null,
    get_ChildSelectedItemID: function() { return this.$pU },
    set_ChildSelectedItemID: function(n) { return this.$pU = n, n },
    SelectedItemName: function() { return null },
    getData: function() {},
    ItemSelected: function() {},
    add_$1Fb: function(n) { this.$2F("OnItemSelected", n) },
    remove_$1Fb: function(n) { this.$4I("OnItemSelected", n) },
    $Bj: function(n) {
        var t = this.$5d(n);
        $0.$1(t) || t(this, new Sys.EventArgs)
    },
    $GN: function() {
        var f = this.$9W, n, t, i, r, e, u;
        for (n in f)
            t = { key: n, value: f[n] }, Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(t.value) &&
                t.value.dispose();
        if (this.$9W = null, !$0.$1(this.$j0)) {
            i = this.$j0;
            for (r in i) e = { key: r, value: i[r] }, u = e.value, u.clear(), u = null;
            this.$j0 = null
        }
        $0.$1(this.get_ItemIDs()) || (this.get_ItemIDs().clear(), this.set_ItemIDs(null));
        $0.$1(this.$jJ) || (this.$jJ.clear(), this.$jJ = null);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$E1 = function() {
    Microsoft.Crm.Client.Core.ViewModels.$E1.initializeBase(this);
    this.$wp = "InteractionWallDateRangeFilter"
};
Microsoft.Crm.Client.Core.ViewModels.$E1.prototype = {
    $BG: null,
    get_ParentViewModel: function() { return this.$BG },
    set_ParentViewModel: function(n) { return this.$BG = n, n },
    $GN: function() {
        this.$BG = null;
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    },
    SetDates: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$D0.prototype.SetDates.call(this, n, t);
        this.$3Qo();
        this.$BG.$2p = "DateRangeFilterApplied";
        this.$BG.refreshData();
        this.$BG.$2p = ""
    },
    $332: function() {
        var n = {};
        return this.$ba
            ? n.IsStartDateNull = "true"
            : (n.StartDate = this.$i0.toUTCString(), n.StartDateString = this
                .get_StartDateText()), this.$bY
            ? n.IsEndDateNull = "true"
            : (n.EndDate = this.$dy.toUTCString(), n.EndDateString = this.get_EndDateText()), n
    },
    $3Qo: function() {
        var t = this.$332(), n;
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("InteractionWallDateRangeApplied", 0, this.get_ViewModelId());
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("SetFilterExpression", 2002, t, "DateRangeFilterApplied");
        n = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
            .$5n(0, "InteractionWall.DateRangeFilterExpression");
        this.$ba ||
            this.$bY ||
            n.$9o("modifiedon", "on-or-after", this.$i0.format("s"))
            .$9o("modifiedon", "on-or-before", this.$dy.format("s"));
        this.$BG.$XX = n
    }
};
Microsoft.Crm.Client.Core.ViewModels
    .InteractionWallEventViewModel = function() {
        Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.initializeBase(this)
    };
Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.prototype = {
    $1BE: null,
    get_EntityLogicalName: function() { return this.$1BE },
    get_EntityDisplayName: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$84.$BD).$1P
    },
    get_$3Lu: function() { return this.$84.$bn },
    get_$3Sp: function() { return this.$84.$xs },
    $176: null,
    get_EntityId: function() { return this.$176 },
    set_EntityId: function(n) { return this.$176 = n, n },
    get_ActivityType: function() { return this.$84.$NG },
    get_State: function() { return this.$84.$Xm },
    get_Priority: function() { return this.$84.$qH },
    get_ResultDirection: function() { return this.$84.$xl },
    get_Subject: function() { return this.$84.$5H },
    get_CreatedBy: function() { return this.$84.$wk },
    get_Description: function() { return this.$84.$Re },
    $bV: null,
    get_ImageViewModel: function() { return this.$bV },
    set_ImageViewModel: function(n) { return this.$bV = n, n },
    get_TimeStamp: function() {
        var n = this.$84.$Xt,
            i = n.localeFormat("d") + " " + n.localeFormat("T"),
            r = Microsoft.Crm.Client.Core.Framework.$1h.get_$1uO(),
            u = new Microsoft.Crm.Client.Core.Framework.$1h(n.getFullYear(), n.getMonth(), n.getDate()),
            f = new Microsoft.Crm.Client.Core.Framework.$NK(u, r),
            t = f.get_$3Tn();
        return t <= 1
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("LabelForToday")
            : t > 1 && t <= 2 ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("LabelForYesterday") : i
    },
    get_StartDate: function() {
        var n = this.$84.$1M6, t = null;
        return n && (t = n.localeFormat("d") + " " + n.localeFormat("t")), t
    },
    get_EndDate: function() {
        var n = this.$84.$1KT, t = null;
        return n && (t = n.localeFormat("d") + " " + n.localeFormat("t")), t
    },
    get_AttachedFiles: function() { return this.$84.$1K3 },
    get_IsInteractionCentricEnabled: function() { return this.$84.$jE },
    get_TargetEntityString: function() { return this.$84.$23I },
    get_TargetEntityLogicalName: function() { return this.$84.$23H },
    get_IsTargetEntityInteractionCentricEnabled: function() { return this.$84.$236 },
    get_StringPartWallForPost: function() { return this.$84.$1fy },
    $84: null,
    get_ResultItem: function() { return this.$84 },
    set_ResultItem: function(n) { return this.$84 = n, n },
    $BG: null,
    get_ParentViewModel: function() { return this.$BG },
    set_ParentViewModel: function(n) { return this.$BG = n, n },
    $G1: null,
    get_QuickActionViewModel: function() { return this.$G1 },
    set_QuickActionViewModel: function(n) { return this.$G1 = n, n },
    $2p: null,
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.$5I.prototype.$17.call(this);
        this.$bV = new Microsoft.Crm.Client.Core.ViewModels.$7u;
        this.$84.$jB ? this.$bV.set_Data(this.$84.$jB) : this.$bV.set_Data("/_imgs/NavBar/EmptyUserImage.png");
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("QuickActionViewModel",
                "QuickActionInteractionWall",
                "QuickActionInteractionWall" + this.$84.$bn,
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("TargetViewModelContext", this), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("Entity", this.$84.$BD), new Microsoft.Crm.Client
                    .Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("Context", "grid"), new Microsoft.Crm
                    .Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("Context", this.$84.$BD === "email" ? "form" : "grid")
                ],
                null,
                null);
        this.$G1 = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(n, this.get_ModelContext(), this.$3M, this.$2);
        this.$G1.$2bR(this.$84.$bn, this.$84.$BD)
    },
    $GN: function() {
        $0.$1(this.$bV) || (this.$bV.dispose(), this.$bV = null);
        $0.$1(this.$G1) || (this.$G1.dispose(), this.$G1 = null);
        this.$BG = null;
        this.$84 = null;
        Microsoft.Crm.Client.Core.ViewModels.$5I.prototype.$GN.call(this)
    },
    navigateToUserRecord: function() {
        this.$2p = "SystemUserNavigation";
        this.$1XE("systemuser", this.$84.$xV);
        this.$2p = ""
    },
    navigateToTargetEntityItemRecord: function(n, t) {
        (this.$2p = "SystemPostLinkedEntityNavigation", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                .$f
                .$1d("NavigateToTargetEntityItemRecord", 2003, { RecordObjectTypeCode: n, EntityId: n }, this.$2p), this
                .$3Ql(n), this.$176 = t, Microsoft.Crm.Client.Core.Framework.$3.$A(this.$1BE)) ||
            (this.$1XE(this.$1BE, new Microsoft.Crm.Client.Core.Framework.Guid(this.$176)), this.$2p = "")
    },
    navigateToItemRecord: function() {
        this.$2p = "RecordNavigation";
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("NavigateToItemRecord",
                2003,
                {
                    RecordObjectTypeCode: Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType
                        .toString(this.$84.$NG),
                    EntityId: this.$84.$bn
                },
                this.$2p);
        var n = this.getEntityLogicalName();
        Microsoft.Crm.Client.Core.Framework.$3.$A(n) || (this.$1XE(n, this.$84.$bn), this.$2p = "")
    },
    screenReaderTextForInteractionWallItem: function(n, t, i) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("InteractionWallItem_ScreenReader_Label"),
            n,
            t,
            i)
    },
    getEntityLogicalName: function() {
        switch (this.$84.$NG) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 5:
        case 8:
        case 9:
        case 6:
        case 10:
        case 11:
            return this.$84.$BD;
        default:
            return""
        }
    },
    $1XE: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("NavigateToTargetEntityItemRecord", 2003, { RecordLogicalName: n, EntityId: t.toString() }, this.$2p);
        var r = new Xrm.Objects.EntityReference(n, t),
            u = { EntityReference: r },
            i = new Microsoft.Crm.Client.Core.Commands.$33(null, 40);
        try {
            i.$J = n;
            i.$19 = u;
            i.execute();
            this.$BG.$jF = !0
        } finally {
            i.dispose()
        }
    },
    IsEntityInteractionCentricEnabled: function(n) { return this.$2HS().contains(n) },
    $2HS: function() {
        for (var t,
            i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$OI(),
            r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            n = 0;
            n < i.length;
            n++) t = i[n], t.$Dq && r.add(t.$7h.toString());
        return r
    },
    $3Ql: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$Bm(n);
        this.$1BE = t.$d
    },
    getResultId: function() { return this.$84.$bn.toString() }
};
Microsoft.Crm.Client.Core.ViewModels.$LZ = function() { this.$1Hr = 0 };
Microsoft.Crm.Client.Core.ViewModels.$LZ.prototype = {
    $1Hr: 0,
    get_$1sZ: function() { return this.$1Hr > 0 },
    $1Jj: function() { this.$1Hr++ },
    $2Wi: function() { this.get_$1sZ() && this.$1Hr-- }
};
Microsoft.Crm.Client.Core.ViewModels.$UT = function() {
    Microsoft.Crm.Client.Core.ViewModels.$UT.resolveInheritance();
    this.$69 = this.dispose;
    Microsoft.Crm.Client.Core.ViewModels.$UT.initializeBase(this);
    this.$lR = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXml", null))
};
Microsoft.Crm.Client.Core.ViewModels.$UT.prototype = {
    $KY: null,
    $lR: null,
    $1aW: function(n, t, i, r, u, f, e) {
        var s, c, h, o, l;
        return this.$KY = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.ViewModels
                .$90,
                Microsoft.Crm.Client.Core.Framework.$4), s = new Microsoft.Crm.Client.Core.Storage.Common
            .FetchExpression.$5n(1, "activitypointer"), Microsoft.Crm.Client.Core.Framework.$3.$A(u) ||
        (c = ["subject", "description"], s = Microsoft.Crm.Client.Core.ViewModels.$69
            .$28q("activitypointer", c, u.replace("*", "%"))), h = new Microsoft.Crm.Client.Core.Storage.Common
            .FetchExpression.$5n(0, "activitypointer"), h.$9o("activitytypecode", "in", this.$306()), o = new Microsoft
            .Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "activitypointer"), o.$6X(h), o
            .$6X(Microsoft.Crm.Client.Core.ViewModels.$69.$28m("activitypointer", 0, "regardingobjectid", t)), o
            .$6X(s), o.$6X(f), this.set_DefinitionId(this.get_ViewModelId()), this.$2Q = Microsoft.Crm.Client.Core
            .Storage.Common.ObjectModel.$1X
            .$4y('<fetch mapping="logical"><entity name="activitypointer"><attribute name="activityid" /><attribute name="activitytypecode" /><attribute name="subject" /><attribute name="prioritycode" /><attribute name="description" /><attribute name="scheduledstart" /><attribute name="scheduledend" /><attribute name="createdby" /><attribute name="modifiedby" /><attribute name="modifiedon" /><attribute name="statecode" /><attribute name="statuscode" /><order attribute="modifiedon" descending="true" />' + o.$7F() + '<link-entity name="phonecall" from="activityid" to="activityid" alias="phonecalljoin" link-type="outer"><attribute name="directioncode" /><\/link-entity><link-entity name="socialactivity" from="activityid" to="activityid" alias="socialactivityjoin" link-type="outer"><attribute name="directioncode" /><\/link-entity><link-entity name="email" from="activityid" to="activityid" alias="emailjoin" link-type="outer"><attribute name="directioncode" /><\/link-entity><\/entity><\/fetch>'), this.$1p.$FD(), this.$1p.$2u = i, this.$1p.$BQ = r, Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f.$1d("RetrieveData", 2004, { FetchXml: this.$2Q.$6a.get_$H(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$r.toString(1)).Data, PageSize: i, PageNumber: r }, "DataLoad"), !$0.$1(e) && Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(e) && this.set_$4J(e), l = this.$lR.$4W(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(l), this.$KY
    },
    $4Y: function(n) {
        var s, r, i, l, o;
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("LoadDataSuccess", 2004, { ModelCount: n.get_$Bp().get_Count() }, "DataLoad");
        s = n.get_$Bp().$21O();
        r = new Microsoft.Crm.Client.Core.ViewModels.$90;
        for (var h = s, a = h.length, e = 0; e < a; ++e) {
            i = h[e];
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$C("LoadDataSuccess", 2004, i.$M.getObjectData(), "DataLoad");
            var v = i.GetValue("activityid"),
                c = i.GetValue("description"),
                u = -1,
                f = -1,
                t = new Microsoft.Crm.Client.Core.ViewModels.$Ld(v);
            t.$BD = i.$M.$2n.LogicalName;
            t.$5H = i.GetValue("subject");
            t.$Re = Microsoft.Crm.Client.Core.Framework.$3.$A(c) ? "" : c;
            switch (t.$BD.toLowerCase()) {
            case"appointment":
                t.$NG = 2;
                f = i.GetValue("prioritycode").$1f;
                t.$1M6 = Microsoft.Crm.Client.Core.Framework.$3.$A(i.GetValue("scheduledstart"))
                    ? new Date
                    : Microsoft.Crm.Client.Core.ViewModels.$2B.$1YV(i.$M.$4e.scheduledstart);
                t.$1KT = Microsoft.Crm.Client.Core.Framework.$3.$A(i.GetValue("scheduledend"))
                    ? new Date
                    : Microsoft.Crm.Client.Core.ViewModels.$2B.$1YV(i.$M.$4e.scheduledend);
                break;
            case"email":
                t.$NG = 1;
                f = i.GetValue("prioritycode").$1f;
                u = i.GetValue("emailjoin.directioncode").$1f;
                t.$xs = i.GetValue("statuscode").$1f.toString();
                break;
            case"phonecall":
                t.$NG = 3;
                u = i.GetValue("phonecalljoin.directioncode").$1f;
                break;
            case"socialactivity":
                t.$NG = 8;
                u = i.GetValue("socialactivityjoin.directioncode").$1f;
                break;
            case"task":
                t.$NG = 0;
                f = i.GetValue("prioritycode").$1f;
                break;
            case"incidentresolution":
                t.$NG = 4;
                break;
            default:
                t.$NG = 9
            }
            l = i.GetValue("statecode").$1f;
            switch (l) {
            case 0:
                t.$Xm = 0;
                break;
            case 1:
                t.$Xm = 1;
                break;
            case 2:
                t.$Xm = 2;
                break;
            case 3:
                t.$Xm = 3;
                break;
            default:
                t.$Xm = 1
            }
            switch (u) {
            case 0:
                t.$xl = 0;
                break;
            case 1:
                t.$xl = 1;
                break;
            default:
                t.$xl = 0
            }
            switch (f) {
            case 0:
                t.$qH = 2;
                break;
            case 1:
                t.$qH = 1;
                break;
            case 2:
                t.$qH = 0;
                break;
            default:
                t.$qH = 1
            }
            t.$Xt = Microsoft.Crm.Client.Core.ViewModels.$2B.$1YV(i.$M.$4e.modifiedon);
            t.$wk = i.GetValue("createdby").Name;
            o = i.GetValue("modifiedby");
            t.$1LM = o.Name;
            t.$xV = o.Id;
            try {
                t.$jE = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(i.$M.$EL().activitytypecode)
                    .$Dq
                    ? !0
                    : !1
            } catch (y) {
                t.$jE = !1
            }
            r.$mg(t)
        }
        r.$Ub = !n.get_$W4();
        this.$KY.resolve(r)
    },
    $5J: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1F("LoadDataFailure", 2004, { Error: n.$1A() }, "DataLoad");
        this.$KY.reject(n)
    },
    $306: function() {
        for (var n,
            r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$OI(),
            t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Number)),
            i = 0;
            i < r.length;
            i++) n = r[i], n.$Dq && n.get_$9N() && t.add(n.$7h);
        return t.add(4206), t
    }
};
Microsoft.Crm.Client.Core.ViewModels.$69 = function() {};
Microsoft.Crm.Client.Core.ViewModels.$69.$28q = function(n, t, i) {
    var r = null, e;
    r = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, n);
    for (var f = t, o = f.length, u = 0; u < o; ++u) e = f[u], r.$9o(e.toString(), "like", "%" + i + "%");
    return r
};
Microsoft.Crm.Client.Core.ViewModels.$69.$28m = function(n, t, i, r) {
    var u = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(t, n);
    return u.$9o(i, "eq", r), u
};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile = function() {};
Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile.prototype = {
    $j8: null,
    get_fileName: function() { return this.$j8 },
    set_fileName: function(n) { return this.$j8 = n, n },
    $1Kb: null,
    get_filePath: function() { return this.$1Kb },
    set_filePath: function(n) { return this.$1Kb = n, n },
    $UV: 0,
    get_fileSize: function() { return this.$UV },
    set_fileSize: function(n) { return this.$UV = n, n },
    get_fileSizeFormattedString: function() {
        var n, t;
        return this.$UV < 1024
            ? this.$UV.toString() + " bytes"
            : (n = Math.round(this.$UV / 1024), n < 1024)
            ? n.toString() + " KB"
            : (t = Math.round(n / 1024), t.toString() + " MB")
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Ld = function(n) {
    this.$1K3 = new(Microsoft.Crm.Client.Core.Framework.List$1
        .$$(Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile));
    this.$bn = n
};
Microsoft.Crm.Client.Core.ViewModels.$Ld.prototype = {
    $bn: null,
    $NG: 0,
    $Xm: 0,
    $xs: null,
    $qH: 0,
    $xl: 0,
    $5H: null,
    $Re: null,
    $Xt: null,
    $wk: null,
    $jB: null,
    $1LM: null,
    $1M6: null,
    $1KT: null,
    $xV: null,
    $1K3: null,
    $BD: null,
    $jE: !1,
    $23I: null,
    $1fy: null,
    $23H: null,
    $236: !1,
    toString: function() {
        var n = "";
        return n += "ResultId:" + this.$bn.toString() + ";", n +=
                "ResultType:" + Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultType.toString(this.$NG) + ";",
            n += "ResultState:" +
                Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState.toString(this.$Xm) +
                ";",
            n += "ResultPriority:" +
                Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultPriority.toString(this.$qH) +
                ";", n += "ResultDirection:" +
                Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultDirection.toString(this.$xl) +
                ";", n += "Title:" + this.$5H + ";", n += "TimeStamp:" + this.$Xt.toUTCString() + ";", n +=
                "CreatedBy:" + this.$wk + ";", n += "ModifiedBy:" + this.$1LM + ";",
            $0.$1(this
                    .$xV) ||
                (n += "ModifiedById:" + this.$xV.toString() + ";"), n += "EntityLogicalName:" + this.$BD + ";",
            n + ("IsInteractionCentricEnabled:" + this.$jE.toString())
    }
};
Microsoft.Crm.Client.Core.ViewModels.$90 = function() {
    this.$h8 = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Ld))
};
Microsoft.Crm.Client.Core.ViewModels.$90.prototype = {
    $h8: null,
    get_$l: function() { return this.$h8.get_Count() },
    $Ub: !1,
    get_$H: function(n) { return this.$h8.get_$H(n) },
    set_$H: function(n, t) { return this.$h8.set_$H(n, t), t },
    $mg: function(n) {
        for (var t = 0;
            this.get_$l() > 0 &&
                this.$h8.get_$H(t).$Xt >
                n
                .$Xt;
        ) if (t++, t === this.$h8.get_Count()) break;
        this.$h8.insert(t, n)
    },
    $36H: function(n) { for (var t = 0; t < n.get_$l(); t++) this.$mg(n.get_$H(t)) },
    $76: function() { this.$h8.clear() }
};
Microsoft.Crm.Client.Core.ViewModels.$3O = function() {};
Microsoft.Crm.Client.Core.ViewModels.$3O.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$3O.$1Ge = {};
    Microsoft.Crm.Client.Core.ViewModels.$3O.$3Jj()
};
Microsoft.Crm.Client.Core.ViewModels.$3O.$3Jj = function() {
    Microsoft.Crm.Client.Core.ViewModels.$3O.$1xP("InteractionWallSource_Note",
        function() { return new Microsoft.Crm.Client.Core.ViewModels.$US });
    Microsoft.Crm.Client.Core.ViewModels.$3O.$1xP("InteractionWallSource_Post",
        function() { return new Microsoft.Crm.Client.Core.ViewModels.$2j });
    Microsoft.Crm.Client.Core.ViewModels.$3O.$1xP("InteractionWallSource_Activity",
        function() { return new Microsoft.Crm.Client.Core.ViewModels.$UT })
};
Microsoft.Crm.Client.Core.ViewModels.$3O.$1xP = function(n, t) {
    n in Microsoft.Crm.Client.Core.ViewModels.$3O.$1Ge || (Microsoft.Crm.Client.Core.ViewModels.$3O.$1Ge[n] = t)
};
Microsoft.Crm.Client.Core.ViewModels.$3O.$3N3 = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.$3O.$1Ge[n];
    return t()
};
Microsoft.Crm.Client.Core.ViewModels.$US = function() {
    Microsoft.Crm.Client.Core.ViewModels.$US.resolveInheritance();
    this.$69 = this.dispose;
    Microsoft.Crm.Client.Core.ViewModels.$US.initializeBase(this);
    this.$lR = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXml", null))
};
Microsoft.Crm.Client.Core.ViewModels.$US.prototype = {
    $KY: null,
    $lR: null,
    $1aW: function(n, t, i, r, u, f, e) {
        var s, h, o, c;
        return this.$KY = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.ViewModels
                .$90,
                Microsoft.Crm.Client.Core.Framework.$4), s = new Microsoft.Crm.Client.Core.Storage.Common
            .FetchExpression.$5n(1, "activitypointer"), Microsoft.Crm.Client.Core.Framework.$3.$A(u) ||
        (h = ["subject", "notetext"], s = Microsoft.Crm.Client.Core.ViewModels.$69
            .$28q("annotation", h, u.replace("*", "%"))), o = new Microsoft.Crm.Client.Core.Storage.Common
            .FetchExpression.$5n(0, "annotation"), o.$6X(Microsoft.Crm.Client.Core.ViewModels.$69
            .$28m("annotation", 0, "objectid", t)), o.$6X(s), o.$6X(f), this
            .set_DefinitionId(this.get_ViewModelId()), this.$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .$1X
            .$4y('<fetch mapping="logical"><entity name="annotation"><attribute name="annotationid" /><attribute name="subject" /><attribute name="notetext" /><attribute name="filename" /><attribute name="filesize" /><attribute name="isdocument" /><attribute name="createdby" /><attribute name="modifiedby" /><attribute name="modifiedon" /><order attribute="modifiedon" descending="true" /><link-entity name="systemuser" from="systemuserid" to="createdby" alias="userimagejoin"><attribute name="entityimage_url" /><\/link-entity>' + o.$7F() + "<\/entity><\/fetch>"), this.$1p.$FD(), this.$1p.$2u = i, this.$1p.$BQ = r, Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f.$1d("RetrieveData", 2005, { FetchXml: this.$2Q.$6a.get_$H(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$r.toString(1)).Data, PageSize: i, PageNumber: r }, "DataLoad"), !$0.$1(e) && Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(e) && this.set_$4J(e), c = this.$lR.$4W(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(c), this.$KY
    },
    $4Y: function(n) {
        var h, u, i, t, s, r;
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("LoadDataSuccess", 2005, { ModelCount: n.get_$Bp().get_Count() }, "DataLoad");
        h = n.get_$Bp().$21O();
        u = new Microsoft.Crm.Client.Core.ViewModels.$90;
        for (var c = h, a = c.length, f = 0; f < a; ++f) {
            i = c[f];
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$C("LoadDataSuccess", 2005, i.$M.getObjectData(), "DataLoad");
            var l = i.GetValue("annotationid"), e = i.GetValue("subject"), o = i.GetValue("notetext");
            Microsoft.Crm.Client.Core.Framework.$3.$A(e) && (e = o, o = "");
            t = new Microsoft.Crm.Client.Core.ViewModels.$Ld(l);
            t.$BD = i.$M.$2n.LogicalName;
            t.$NG = 5;
            t.$Xm = 1;
            t.$5H = e;
            t.$Re = o;
            t.$Xt = Microsoft.Crm.Client.Core.ViewModels.$2B.$1YV(i.$M.$4e.modifiedon);
            t.$wk = i.GetValue("createdby").Name;
            t.$jB = i.GetValue("userimagejoin.entityimage_url");
            s = i.GetValue("modifiedby");
            t.$1LM = s.Name;
            t.$xV = s.Id;
            t.$jE = !1;
            i.GetValue("isdocument").$1f === 1 &&
            (r = new Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile, r.$j8 = i.GetValue("filename"), r
                .$UV = Number.parseLocale(i.GetValue("filesize")), r
                .$1Kb = "javascript:window.open('" +
                (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Q.usepathbasedurls
                    ? "/" + Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$nl()
                    : "") +
                "/nga/engagementhubdownload.aspx?AttachmentType=5&IsNotesTabAttachment=1&AttachmentId=" +
                l +
                "');void(0);", t.$1K3.add(r));
            u.$mg(t)
        }
        u.$Ub = !n.get_$W4();
        this.$KY.resolve(u)
    },
    $5J: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1F("LoadDataFailure", 2005, { Error: n.$1A() }, "DataLoad");
        this.$KY.reject(n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$2j = function() {
    Microsoft.Crm.Client.Core.ViewModels.$2j.resolveInheritance();
    this.$69 = this.dispose;
    Microsoft.Crm.Client.Core.ViewModels.$2j.initializeBase(this);
    this.$lR = new Microsoft.Crm.Client.Core.ViewModels.$M(this,
        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXml", null))
};
Microsoft.Crm.Client.Core.ViewModels.$2j.prototype = {
    $Ov: null,
    $KY: null,
    $lR: null,
    $2o0: function(n, t, i) {
        var r = n.get_$5U();
        r.get_Items()[0].get_$27()
            ? (t.val = new Date(r.get_Items()[0].get_$27().get_Items()[0].get_$2M().toString()), i
                .val = new Date(r.get_Items()[0].get_$27().get_Items()[1].get_$2M().toString()))
            : (t.val = new Date("0001-01-01T00:00:00Z"), i.val = new Date("3000-12-31T23:59:59Z"))
    },
    $1aW: function(n, t, i, r, u, f) {
        var e, o, v, a;
        this.$KY = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.ViewModels.$90,
            Microsoft.Crm.Client.Core.Framework.$4);
        this.$Ov = u;
        var s, h, c, l;
        return this.$2o0(f, c = { val: s }, l = { val: h }), s = c.val, h = l
                .val, e = {}, e["entityReference"] = new Xrm.Objects
                .EntityReference(n, new Microsoft.Crm.Client.Core.Framework.Guid(t)), e["pageSize"] = i, e["pageNumber"
                ] =
                r, e["commentsPerPost"] = 2, e["startDate"] = s, e["endDate"] = h, e["type"] = 1, e["source"] = 1,
            $0.$1(Microsoft.Crm.Client.Core.ViewModels.$2j
                    .$t7) &&
                (Microsoft.Crm.Client.Core.ViewModels.$2j
                    .$t7 = {}), Microsoft.Crm.Client.Core.ViewModels.$2j.$mT.toString() in
                Microsoft.Crm.Client.Core.ViewModels.$2j.$t7 ||
                (Microsoft.Crm.Client.Core.ViewModels.$2j.$t7[Microsoft.Crm.Client.Core.ViewModels.$2j.$mT
                    .toString()] = this, Microsoft.Crm.Client.Core.ViewModels.$2j.$mT++), Microsoft.Crm.Client.Core
                .ViewModels.Controls.InteractionCentric.$f.$1d("RetrieveData", 2006, e, "DataLoad"), o = new Microsoft
                .Crm
                .Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("RetrieveRecordWallRequest", e), v = this, o
                .OnSuccess = function(n) {
                    Microsoft.Crm.Client.Core.ViewModels.$2j.$mT--;
                    Microsoft.Crm.Client.Core.ViewModels.$2j.$mT < 0;
                    Microsoft.Crm.Client.Core.ViewModels.$2j.$t7[Microsoft.Crm.Client.Core.ViewModels.$2j.$mT
                            .toString()]
                        .$Fn(n);
                    delete Microsoft.Crm.Client.Core.ViewModels.$2j.$t7[Microsoft.Crm.Client.Core.ViewModels.$2j.$mT
                        .toString()]
                }, a = this, o.OnFailure = function(n) { a.$95(n) }, Microsoft.Crm.Client.Core.ViewModels
                .ApplicationShellViewModel.get_instance().$2T("ActionProvider", null, o), this.$KY
    },
    $Fn: function(n) {
        var u, i;
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("RetrieveSuccess", 2006, { ModelCount: n.entityCollection.get_count() }, "DataLoad");
        for (var e = new Microsoft.Crm.Client.Core.ViewModels.$90,
            o = !0,
            l = n.entityCollection,
            a = l.get_entities(),
            s = a,
            v = s.length,
            r = 0;
            r < v;
            ++r)
            if (u = s[r], Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$C("LoadDataSuccess", 2005, u.getObjectData(), "DataLoad"), i = u.fields, "text" in i) {
                var h = i.text, f = i.regardingobjectid, y = f.Id, t = new Microsoft.Crm.Client.Core.ViewModels.$Ld(y);
                t.$BD = Xrm.Internal.getEntityName(i.regardingobjectid.TypeCode);
                t.$5H = f.Name;
                t.$Re = h;
                t.$1fy = Microsoft.Crm.Client.Core.Framework.$3
                    .$MD(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_InteractionWallEvent_OnWallPost"),
                        "`~<" + t.$5H + ">~`");
                t.$Xt = new Date(Date.parse(i.modifiedon));
                t.$wk = i.createdby.Name;
                t.$jB = i["userimagejoin.entityimage_url"];
                t.$NG = i.source.$1f === 1 ? 6 : 7;
                t.$Xm = 1;
                o = this.$11m(f.TypeCode.toString());
                t.$jE = o;
                var p = this.$3GT(h),
                    w = Microsoft.Crm.Client.Core.Framework.$3
                        .$MD(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_InteractionWallEvent_OnWallPost"),
                            t.$5H),
                    c = !0;
                this.$Ov &&
                (c = t.$5H.toLowerCase().indexOf(this.$Ov.toLowerCase()) !== -1 ||
                    p.toLowerCase().indexOf(this.$Ov.toLowerCase()) !== -1 ||
                    w.toLowerCase().indexOf(this.$Ov.toLowerCase()) !== -1);
                c && e.$mg(t)
            }
        this.$KY.resolve(e)
    },
    $3GT: function(n) {
        var t, r, i, c, l;
        if (!n) return null;
        t = "`~<";
        r = ">~`";
        n = n.replace(new RegExp("\\@\\[", "g"), t).replace(new RegExp("\\]", "g"), r);
        for (var u = n.split(new RegExp(t + "|" + r)),
            s = !1,
            f = 0,
            e = 0,
            h = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            o = "";
            !s;
        )
            f = n.indexOf(t), e = n.indexOf(r), f !== -1 && e !== -1
                ? (h.add(n.substr(f + t.length, e - f - t.length)), n = n.substr(e + r.length))
                : s = !0;
        for (i = 0; i < u.length; i++)
            h.indexOf(u[i]) > -1
                ? (c = u[i].split(new RegExp(",")), l = c[2].replace(new RegExp('"', "g"), ""), o += l)
                : o += u[i];
        return o
    },
    $95: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1F("RetrieveFailure", 2006, { Error: n.$1A() }, "DataLoad");
        this.$KY.reject(n)
    },
    $11m: function(n) {
        var t = this.$2HS();
        return t.contains(n)
    },
    $2HS: function() {
        for (var t,
            i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$OI(),
            r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            n = 0;
            n < i.length;
            n++) t = i[n], t.$Dq && r.add(t.$7h.toString());
        return r
    },
    $5J: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1F("LoadDataFailure", 2006, { Error: n.$1A() }, "DataLoad");
        this.$KY.reject(n)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$7w = function() {
    this.$$d_$1yo = Function.createDelegate(this, this.$1yo);
    Microsoft.Crm.Client.Core.ViewModels.$7w.initializeBase(this);
    this.$Rm = null
};
Microsoft.Crm.Client.Core.ViewModels.$7w.prototype = {
    $dL: 0,
    $2u: 0,
    $Qa: !1,
    $Oz: null,
    $qX: null,
    $6v: null,
    $Rm: null,
    get_InteractionWallEventViewModels: function() { return this.$Rm },
    set_InteractionWallEventViewModels: function(n) { return this.$Rm = n, n },
    $Ui: null,
    get_ResultCollection: function() { return this.$Ui },
    set_ResultCollection: function(n) { return this.$Ui = n, n },
    $16w: null,
    get_customerName: function() { return this.$16w },
    set_customerName: function(n) { return this.$16w = n, n },
    $16x: null,
    get_customerType: function() { return this.$16x },
    set_customerType: function(n) { return this.$16x = n, n },
    $16v: null,
    get_customerId: function() { return this.$16v },
    set_customerId: function(n) { return this.$16v = n, n },
    $2p: null,
    $18L: null,
    get_SourceList: function() { return this.$18L },
    set_SourceList: function(n) { return this.$18L = n, n },
    get_ActiveSource: function() { return this.$qX },
    set_ActiveSource: function(n) {
        var t = !0;
        return Microsoft.Crm.Client.Core.Framework.$3.$A(this.$2p) && (t = !1, this.$2p = "SourceFilterPerformed"), this
            .$qX = n, this.$dL = 0, Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("SetActiveSource", 2002, { ActiveSource: n }, this.$2p), this.refreshData(), t || (this.$2p = ""), n
    },
    $6g: null,
    get_RegardingObject: function() { return this.$6g },
    set_RegardingObject: function(n) { return this.$6g = n, n },
    $Ub: !1,
    get_MoreRecords: function() { return this.$Ub },
    set_MoreRecords: function(n) { return this.$Ub = n, n },
    get_SearchActive: function() { return!Microsoft.Crm.Client.Core.Framework.$3.$A(this.$6v) },
    $XX: null,
    get_FilteredDateExpression: function() { return this.$XX },
    set_FilteredDateExpression: function(n) { return this.$XX = n, n },
    $j1: null,
    get_DateRangeViewModel: function() { return this.$j1 },
    set_DateRangeViewModel: function(n) { return this.$j1 = n, n },
    $pr: !1,
    get_IsDataLoading: function() { return this.$pr },
    set_IsDataLoading: function(n) { return this.$pr = n, n },
    $jF: !1,
    get_IsNavigated: function() { return this.$jF },
    set_IsNavigated: function(n) { return this.$jF = n, n },
    get_AllText: function() { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_InteractionWall_AllText") },
    SetSearchText: function(n, t) {
        this.$2p = "SearchPerformed";
        this.$6v = n;
        t &&
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("InteractionWallSearchText", 0, this.get_ViewModelId()), Microsoft.Crm.Client.Core.ViewModels.Controls
            .InteractionCentric.$f.$1d("SetSearchText", 2002, { text: n }, this.$2p), this.$dL = 0, this.refreshData());
        this.$2p = ""
    },
    loadMoreResults: function() {
        this.$2p = "LoadMoreResults";
        var n = {};
        n.oldPageNumber = this.$dL;
        this.$dL++;
        n.newPageNumber = this.$dL;
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f.$1d("LoadMoreResults", 2002, n, this.$2p);
        n = null;
        this.$1aW();
        this.$2p = ""
    },
    $17: function() {
        this.$2p = "Initialize";
        this.$Qa = !1;
        this.$p6 = !0;
        Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel.prototype.$17.call(this);
        this.$Rm = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel));
        this.$j1 = this.$2ri();
        this.$Ui = new Microsoft.Crm.Client.Core.ViewModels.$90;
        this.$Oz = new Microsoft.Crm.Client.Core.ViewModels.$LZ;
        this.$XX = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
            .$5n(0, "InteractionWall.DateRangeFilterExpression");
        this.$dL = 0;
        this.$2u = 10;
        this.$qX = this.get_AllText();
        this.$Ub = !1;
        this.set_HasError(!0);
        this.$2 && this.$2.get_ModelContext() && this.$2W5();
        this.$2.add_$IU(this.$$d_$1yo);
        this.$2p = ""
    },
    $GN: function() {
        this.$2p = "Dispose";
        this.$2A9();
        this.$Rm = null;
        this.$j1.dispose();
        this.$Ui.$76();
        this.$XX.$76();
        this.$j1 = null;
        this.$Ui = null;
        this.$XX = null;
        this.$18L = null;
        this.$Oz = null;
        this.$6g = null;
        this.$2.remove_$IU(this.$$d_$1yo);
        Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel.prototype.$GN.call(this);
        this.$2p = ""
    },
    $2A9: function() {
        var n, t;
        if (!$0.$1(this.$Rm)) {
            for (Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                    .$1d("DisposeDataSources", 2002, { EventCount: this.$Rm.get_Count() }, this.$2p), n = 0;
                n < this.$Rm.get_Count();
                ++n) t = this.$Rm.get_$H(n), t.dispose();
            this.$Rm.clear()
        }
    },
    $1yo: function() {
        this.$2p = "FormRootModelLoad";
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("RootOnLoadModelCompleted", 2002, null, this.$2p);
        this.$2W5();
        this.$2p = ""
    },
    $2W5: function() {
        var n, t;
        if (this.$2.$8G !== 2) {
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1F("SetRegardingObject",
                    2002,
                    { message: "Form is not in Edit Mode. Skipping regarding object and relationship setup" },
                    this.$2p);
            return
        }
        n = {};
        n.oldId = this.$6g;
        this.$6g = this.$2.get_ModelContext().$M.$N;
        n.newId = this.$6g;
        this.$7m = "objectid";
        n.oldRelationship = this.$5t;
        this.$5t = this.$6g.LogicalName + "_activitypointers";
        n.newRelationship = this.$5t;
        this.$5b = 0;
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("SetRegardingObject", 2002, n, this.$2p);
        n = null;
        this.$Qa = !0;
        t = this.$2.get_ModelContext().$M.fields.customerid;
        $0.$1(t) || (this.$16w = t.Name, this.$16v = t.Id.toString(), this.$16x = t.LogicalName);
        this.refreshData()
    },
    $2ri: function() {
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("InteractionWallDateRangeViewModel",
                "DateRangeControl",
                "DateRangeControl",
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("IsStartDateNull", !0), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("IsEndDateNull", !0), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("ShowNoRange", !0), new Microsoft.Crm.Client.Core
                    .Models.Descriptors.ViewModel.ValuePropertyDescriptor("ParentViewModel", this)
                ],
                null,
                null);
        return Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(n, this.get_ModelContext(), this.$3M, this.$2)
    },
    $2mY: function(n, t) {
        var i;
        return Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("DynamicInteractionWallEventGenerator", 2002, { ResultIndex: t }, this.$2p), Microsoft.Crm.Client.Core
            .ViewModels.Controls.InteractionCentric.$f.$C("DynamicInteractionWallEventGenerator",
                2002,
                { ResultItem: n.toString() },
                this.$2p), i = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("InteractionWallEventViewModel",
                "InteractionWallEvent",
                "InteractionWallEvent",
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ResultItem", n),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("ParentViewModel", this)
                ],
                null,
                null), Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
            .$7I(i, this.get_ModelContext(), this.$3M, this.$2)
    },
    resetAllFilters: function(n) {
        this.$2p = "ClearFilter";
        this.$XX.$76();
        this.$XX.set_$O6("InteractionWall.DateRangeFilterExpression");
        this.$j1.set_StartDateText("");
        this.$j1.set_EndDateText("");
        n && this.set_ActiveSource(this.get_AllText());
        this.$2p = ""
    },
    $2Rc: function() {
        this.$2p = "InteractionWallExternalRefresh";
        this.refreshData();
        this.$2p = ""
    },
    refreshData: function() {
        var n, t;
        this.$jF && (this.$2p = "NavigateBackReload");
        this.$Ui.$76();
        this.$2.get_ModelContext() &&
            (n = this.$2.get_ModelContext().$M, n && (t = n.$N, this.$6g !== t && (this.$6g = t)));
        this.$1aW();
        this.$jF && (this.$2p = "", this.$jF = !1)
    },
    screenReaderTextForInteractionWallSearchContainer: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("InteractionWall_Screenreader_DynamicSearchText"),
            n)
    },
    $1aW: function() {
        var i;
        if (this.$pr) {
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1F("RetrieveData", 2002, { Message: "Data is alreday loading. Skipping load attempt" }, this.$2p);
            return
        }
        if (this.$Ub = !1, this.$pr = !0, this.$qX === this.get_AllText()) {
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1d("RetrieveData", 2002, { Message: "Setting up data promises for all sources" }, this.$2p);
            for (var t = this.$18L, r = t.length, n = 0; n < r; ++n) i = t[n], this.$2WK(i)
        } else
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1d("RetrieveData", 2002, { Message: "Setting up data promise for " + this.$qX }, this.$2p), this
                .$2WK(this.$qX);
        this.$8("DataLoadCompleted")
    },
    $2WK: function(n) {
        var u = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(1, "InteractionWall"), i, t, r;
        u.$6X(this.$XX);
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("SetUpDataPromises", 2002, { dataSource: n }, this.$2p);
        i = Microsoft.Crm.Client.Core.ViewModels.$3O.$3N3(n);
        this.$6g
            ? (Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$C("SetUpDataPromises",
                    2002,
                    {
                        dataSource: n,
                        LogicalName: this.$6g.LogicalName,
                        RegardingObjectIdentifier: this.$6g.get_identifier(),
                        PageSize: this.get_PageSize(),
                        PageNumber: this.$dL,
                        SearchText: this.$6v,
                        AdditionalFilter: u.$7F()
                    },
                    this.$2p), t = this, r = this, i.$1aW(this.$6g.LogicalName,
                this.$6g.get_identifier(),
                this.$2u,
                this.$dL,
                this.$6v,
                u,
                this.$2).done(function(r) {
                t.$2p = n + "SourceLoadSuccess";
                t.$Ui.$36H(r);
                t.$Ub = t.$Ub || r.$Ub;
                t.$2Wj(i);
                t.$2p = ""
            }).fail(function() {
                r.$2p = n + "SourceLoadFailure";
                r.$2Wj(i);
                r.$2p = ""
            }), this.$Oz.$1Jj())
            : (Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1F("SetUpDataPromises",
                    2002,
                    { Message: "Regarding Object not set. Clearing loading flag to allow further loads." },
                    this.$2p), this.$pr = !1)
    },
    $2Wj: function(n) {
        if (this.$Oz.$2Wi(), Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("SignalSemaphore", 2002, { Message: "Semaphore successfully signalled" }, this.$2p), !this.$Oz
            .get_$1sZ()) {
            var t = this.$2p;
            this.$2p = "ConstructItems";
            this.$2hD();
            this.$2p = t
        }
        n.$69()
    },
    $2hD: function() {
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo("InteractionWallDataUpdated", 0, this.get_ViewModelId());
        this.$2A9();
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$1d("ConstructItems", 2002, { ResultCollectionCount: this.$Ui.get_$l() }, this.$2p);
        for (var n = 0; n < this.$Ui.get_$l(); n++) this.$Rm.add(this.$2mY(this.$Ui.get_$H(n), n));
        this.$pr = !1;
        this.$8("DataLoadCompleted")
    },
    $Ww: function() {
        this.$2p = this.$Qa ? "WallQuickCreate" : "PageRefresh";
        this.refreshData();
        this.$2p = ""
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Am = function() { Microsoft.Crm.Client.Core.ViewModels.$Am.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$Am.prototype = {
    $ZC: null,
    $9d: null,
    get_InteractionCentricLookupMaxCount: function() { return 10 },
    get_InteractionCentricLookupListViewModel: function() { return this.$ZC },
    get_LookupNewButtonViewModel: function() { return this.$9d },
    get_NewButtonText: function() { return Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Lookup_New_Text") },
    $ad: function(n) {
        var i, r, u, t;
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$ad.call(this, n);
        i = n;
        for (r in i)
            u = { key: r, value: i[r] }, t = u.value, Microsoft.Crm.Client.Core.ViewModels
                .InteractionCentricLookupListViewModel.isInstanceOfType(t)
                ? (this.$ZC = t, this.$ZC.$bf = this)
                : Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(t) && (this.$9d = t)
    },
    $GN: function() {
        $0.$1(this.$ZC) || (this.$ZC.dispose(), this.$ZC = null);
        $0.$1(this.$9d) || (this.$9d.dispose(), this.$9d = null);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Dw = function() {
    this.$$d_$2P8 = Function.createDelegate(this, this.$2P8);
    Microsoft.Crm.Client.Core.ViewModels.$Dw.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype = {
    $Dn: null,
    $EW: null,
    $1r2: null,
    $6Q: null,
    $9e_9: "single",
    $204: !1,
    $xS: null,
    get_LastTypedValue: function() { return this.$xS },
    set_LastTypedValue: function(n) { return this.$xS = n, n },
    $1LP: !1,
    get_NewButtonVisibility: function() { return this.$1LP },
    set_NewButtonVisibility: function(n) { return this.$1LP = n, n },
    $xZ: null,
    get_NewButtonEntityLogicalName: function() { return this.$xZ },
    set_NewButtonEntityLogicalName: function(n) { return this.$xZ = n, n },
    $br: null,
    get_SelectedViewIds: function() { return this.$br },
    set_SelectedViewIds: function(n) { return this.$br = n, n },
    $j3: !1,
    get_DisableQuickFind: function() { return this.$j3 },
    set_DisableQuickFind: function(n) { return this.$j3 = n, n },
    $17b: !1,
    get_IsResolveSuccessful: function() { return this.$17b },
    set_IsResolveSuccessful: function(n) { return this.$17b = n, n },
    $bR: !1,
    get_DisableViewPicker: function() { return this.$bR },
    set_DisableViewPicker: function(n) { return this.$bR = n, n },
    $xO: !1,
    get_IsSearchComplete: function() { return this.$xO },
    set_IsSearchComplete: function(n) { return this.$xO = n, n },
    get_LookupStyle: function() { return this.$9e_9 },
    set_LookupStyle: function(n) { return this.$9e_9 = n, n },
    get_InteractionCentricPartyListViewModel: function() { return this.$EW },
    $G0: !1,
    get_IsMultiSelect: function() { return this.$G0 },
    set_IsMultiSelect: function(n) { return this.$G0 = n, n },
    $DY: null,
    get_InteractionCentricInlineLookupListViewModel: function() { return this.$Dn },
    get_$Et: function() { return!$0.$1(this.$6Q) && !$0.$1(this.$6Q.$8C) ? this.$6Q.$8C.toString() : null },
    get_LookupInputViewModel: function() { return this.$6Q },
    set_LookupInputViewModel: function(n) {
        return this.$6Q = n, $0.$1(this.$6Q) ||
            (this.updateInputValue(), this.$6Q.set_ImeMode(this.$MP), this.$6Q.set_MaxLength(200)), n
    },
    get_InteractionCentricInlineLookUpListDescriptor: function() { return this.$1r2 },
    get_SearchValue: function() { return $0.$1(this.$DY.$FE) ? "" : this.$DY.$FE },
    get_interactionCentricLookupAutoResolve: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("InteractionCentricLookupAutoResolve")
    },
    get_shouldAutoResolve: function() { return this.get_interactionCentricLookupAutoResolve() ? this.$204 : !1 },
    $1v0: function() {
        if (!$0.$1(this.$6Q) && !this.get_HasFocus() && this.get_CurrentDataName() !== this.get_$Et()) {
            var n = this.get_$Et();
            this.set_$KU(null);
            this.$6Q.set_Value(n)
        }
    },
    $1j4: function() {
        $0.$1(this.$6Q) ||
        (this.get_interactionCentricLookupAutoResolve() ? this.$6Q.$2Vf("") : this.$6Q.set_Value(""), this.$6Q
            .fireRefreshFromContextEvent())
    },
    updateInputValue: function() {
        if (!$0.$1(this.$6Q)) {
            if (this.get_interactionCentricLookupAutoResolve()) {
                var n = this.get_CurrentDataName();
                Microsoft.Crm.Client.Core.Framework.$3.$A(n) ? this.$6Q.set_Value(this.$xS) : this.$6Q.set_Value(n)
            } else this.$6Q.set_Value(this.get_CurrentDataName());
            this.$6Q.fireRefreshFromContextEvent()
        }
    },
    buildChildViewModelDescriptors: function(n) {
        var t, i, r, u;
        $0.$1(this.$Dn) || (this.$Dn.dispose(), this.$Dn = null);
        t = {};
        $0.$1(n.Properties.EditTabIndex) || (t.EditTabIndex = n.Properties.EditTabIndex);
        t.OverlayMode = 2;
        i = !1;
        $0.$1(n.Properties.ShowLabel) || (i = n.Properties.ShowLabel);
        r = { IsSaveAndEditButtonHidden: !0, shouldOpenQuickCreate: !0 };
        u = {
            inlinelookup: new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("InteractionCentricInlineLookupListViewModel",
                    "InteractionCentricInlineLookupList",
                    "inlinelookup",
                    null,
                    null,
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ViewModelDescriptor("InteractionCentricLookupListViewModel",
                            "InteractionCentricLookupList",
                            "interactionCentricList",
                            [
                                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                                .ActionProviderPropertyDescriptor("ActionProvider",
                                    "ActionProvider",
                                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                                    .QueryDescriptor("LookupByName", null)), new Microsoft.Crm.Client.Core.Models
                                .Descriptors.ViewModel
                                .ValuePropertyDescriptor("LookupForField",
                                    this.getFieldNameFromDescriptorName(this
                                        .$I)), new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("IsMultiSelect", this.$G0), new Microsoft.Crm.Client.Core
                                .Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("IsInlineOrAssociateFormLookup", this.$11r)
                            ],
                            { ScrollDirection: "Horizontal" }), new Microsoft.Crm.Client.Core.Models.Descriptors
                        .ViewModel.ViewModelDescriptor("Button",
                            "Button",
                            "newInteractionCentricButton",
                            [
                                new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("Command", "CreateCommand"), new Microsoft.Crm.Client.Core
                                .Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("Enabled",
                                    Microsoft.Crm.Client.Core.Commands.OpenCreateFormCommand.get_$1Uc()), new Microsoft
                                .Crm.Client.Core.Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("Visible",
                                    Microsoft.Crm.Client.Core.Commands.OpenCreateFormCommand.get_$1Uc()), new Microsoft
                                .Crm.Client.Core.Models.Descriptors.ViewModel
                                .ValuePropertyDescriptor("Parameters", { externalParameters: r })
                            ],
                            null)
                    ]),
            input: new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("String",
                    "String",
                    "interactionCentricInput",
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("Label", this.$1B), new Microsoft.Crm.Client.Core.Models.Descriptors
                        .ViewModel.ValuePropertyDescriptor("ShowLabel", i), new Microsoft.Crm.Client.Core.Models
                        .Descriptors.ViewModel.ValuePropertyDescriptor("UpdateOnKeyUp", !0), new Microsoft.Crm.Client
                        .Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("OverlayText", "")
                    ],
                    t)
        };
        this.$qZ(u);
        this.get_shouldAutoResolve() && (this.$xO = !0)
    },
    $qZ: function(n) {
        var f = n, r, i, t, u;
        for (r in f)
            i = { key: r, value: f[r] }, t = i.value, $0.$1(this.$F[t.Name]) &&
            (u = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(t, this.get_$1N(), this.$3M, this.$2), this
                .$8T(u.get_Name(), u)), i.key === "inlinelookup"
                ? this.$1r2 = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(t)
                : i.key === "input" && (this.$1Ev = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(t))
    },
    $8T: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$4I.isInstanceOfType(t)
            ? this.set_LookupInputViewModel(t)
            : Microsoft.Crm.Client.Core.ViewModels.$Am.isInstanceOfType(t) &&
            (this.$Dn = t, this.$DY = this.$Dn.$ZC, this.$DY.$xJ = !0, this.$DY.set_$AH(this), this.$DY.$Gm = this
                .$9e_9, this.$21t(), this.$1dn(), this.$Dn.$9d.$26.$P = this.$$d_$2P8)
    },
    $1JS: function(n) {
        $0.$1(n) ||
        (this.$In = n.$2Q, this.$N5 = n.$TQ, this.set_LookupModelName(n.$BJ), this.$1dn()
        )
    },
    $1Wf: function(n) {
        this.get_shouldAutoResolve() && this.clearError();
        Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$1Wf.call(this, n)
    },
    $2mI: function(n, t) {
        var i = this;
        i.set_$OY(new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(!1, null, n, t))
    },
    clearError: function() {
        var n = this;
        n.set_$OY(null)
    },
    $1dn: function() {
        $0.$1(this.$DY) ||
            $0.$1(this.$N5) ||
            $0.$1(this.$In) ||
            $0.$1(this.$B3) ||
            this.$DY.$1zs(this.$B3, this.$In, this.$N5)
    },
    $21t: function() {
        if (!$0.$1(this.$Dn) && !$0.$1(this.$Dn.$9d) && !$0.$1(this.$Dn.$9d.$26)) {
            var n = this.$B3;
            $0.$1(this.$xZ) || this.$xZ === "" || (n = this.$xZ);
            this.$Dn.$9d.$26.set_PrimaryModelName(n);
            this.$Dn.$9d.$26.get_CanExecute() && Microsoft.Crm.Client.Core.ViewModels.$n.$II(n) && this.$1LP
                ? (this.$Dn.$9d.set_Visible(!0), Microsoft.Crm.Client.Core.ViewModels.QuickCreateFormViewModel
                    .isInstanceOfType(this.$2) ||
                    Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel.isInstanceOfType(this.$2) ||
                    $0.$1(this.get_ModelContext()) ||
                    (this.$Dn.$9d.$26.$Mk = this.get_ModelContext().get_$Qf(), this.$Dn.$9d.$26.$FC = this.$FC))
                : this.$Dn.$9d.set_Visible(!1)
        }
    },
    $2P8: function(n) {
        this.$Qj = !0;
        $0.$1(this.get_ModelContext())
            ? this.set_$KU(n.$CO)
            : (this.get_ModelContext().$1br(), this.set_$KU(n.$CO), this.get_ModelContext().$1Zt());
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s()
            ? $0.$1(this.$Dn) || $0.$1(this.$Dn.$ZC) || this.$Dn.$ZC.$Ww()
            : this.$1OD();
        this.$Bn("OnNewRecordSaved", n.$1X1)
    },
    $GN: function() {
        $0.$1(this.$Dn) || (this.$Dn.dispose(), this.$Dn = null);
        Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$GN.call(this)
    },
    search: function(n) {
        (this.$204 = n, $0.$1(this.$DY)) ||
        (this.$3Us(), this.$DY.$MQ = 0, this.$DY.$H2.clear(), this.$DY
            .set_SearchValue($0.$1(this
                    .get_$Et())
                ? ""
                : this.get_$Et()), this
            .get_shouldAutoResolve() &&
            (this.$xO = !1), this.get_interactionCentricLookupAutoResolve() &&
            (this.clearError(), this.$xS = this.$DY.$FE), this.set_ShowLookupBar(!0))
    },
    shouldPerformSearch: function() {
        return this.get_shouldAutoResolve() && this.$DY.$FE === "" && $0.$1(this.get_$Et())
            ? !1
            : $0.$1(this.$DY.$FE) || $0.$1(this.get_$Et()) ? !0 : this.$DY.$FE !== this.get_$Et()
    },
    $3Us: function() { this.$1MJ = this.get_$Et() && this.$1sR(this.get_$Et().trim()) ? this.get_$Et().trim() : null },
    $1sR: function(n) {
        if (!n || n === "") return!1;
        var t = new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator(!1, !0), i = t.$7c(n, !1, !1);
        return i.$5r
    },
    $1MJ: null
};
Microsoft.Crm.Client.Core.ViewModels.$Dy = function() {
    this.$$d_$Of = Function.createDelegate(this, this.$Of);
    Microsoft.Crm.Client.Core.ViewModels.$Dy.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Dy.prototype = {
    $Kc: null,
    $ZX: null,
    $Gr: null,
    $TS: null,
    get_EntitiesMetadataViewModel: function() { return this.$Kc },
    get_LookupViewActionProvider: function() { return this.$ZX },
    set_LookupViewActionProvider: function(n) { return this.$ZX = n, n },
    get_BindingField: function() { return this.$Gr },
    set_BindingField: function(n) { return this.$Gr = n, n },
    get_MetadataQueryDescriptor: function() { return this.$TS },
    set_MetadataQueryDescriptor: function(n) { return this.$TS = n, n },
    $2ZM: function() { return!0 },
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$17.call(this);
        this.$9e_9 = "multi"
    },
    $GN: function() {
        $0.$1(this.$Kc) ||
            (this.$Kc.RemovePropertyChangedListener("SelectedItem", this.$$d_$Of), this.$Kc.dispose(), this.$Kc = null);
        this.$TS = null;
        Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.$GN.call(this)
    },
    $1Yy: function(n, t) {
        $0.$1(n) ||
            ($0.$1(this.$Kc) || this.setEntityModelName(n.$BJ)) &&
            Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$1Yy.call(this, n, t)
    },
    $1v6: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$7U.prototype.$1v6.call(this, n, t);
        this.setEntityModelName(this.$B3)
    },
    $Of: function() { this.$1GM() },
    search: function(n) {
        var t = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("StartMarkerForLookupSearch", 1, null);
        this.$Kc.set_SelectedItem("0");
        Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.search.call(this, n);
        this.$DY.$D1 = this.$Kc
    },
    $1GM: function() {
        var n = this.$Kc.get_Data(), t, i;
        Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$2o.isInstanceOfType(n) &&
        (this.set_LookupModelName(n.$d), $0.$1(this.$VG)
            ? (i = this.$ZX.$DC(0), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .get_$2S().$2c(i))
            : n.$d === this.$VG.$BJ
            ? this.$1JS(this.$VG)
            : (t = this.$ZX.$DC(2), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .get_$2S().$2c(t)))
    },
    setEntityModelName: function(n) {
        if (this.$Kc) {
            var t = this.$Kc.$1lg(n);
            if (t >= 0) return this.$Kc.$2KJ(t.toString()), !0
        }
        return!1
    },
    $8T: function(n, t) {
        Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.$8T.call(this, n, t);
        Microsoft.Crm.Client.Core.ViewModels.$8p.isInstanceOfType(t) &&
        (this.$Kc = t, this.$Kc
            .AddPropertyChangedListener("SelectedItem", this.$$d_$Of), $0.$1(this.$B3) || (this.$Kc.$11W = this.$B3))
    },
    buildChildViewModelDescriptors: function(n) {
        var t, i, r;
        this.$In = null;
        this.$N5 = null;
        Microsoft.Crm.Client.Core.ViewModels.$Dw.prototype.buildChildViewModelDescriptors.call(this, n);
        t = {};
        $0.$1(n.Properties.EditTabIndex) || (t.EditTabIndex = n.Properties.EditTabIndex);
        i = $0.$1(this.$TS)
            ? new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveTargetEntityMetadata", { entityLogicalName: this.$J, targetAttribute: this.$Gr })
            : this.$TS;
        r = {
            combobox: Microsoft.Crm.Client.Core.Models.Descriptors.$U
                .$3Xb("EntityMetadataOptionSetViewModel",
                    "ComboBox",
                    "comboBoxControl",
                    null,
                    null,
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ActionProviderPropertyDescriptor("MetadataActionProvider", "ActionProvider", i)
                    ],
                    t,
                    null)
        };
        this.$qZ(r)
    }
};
Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel = function() {
    this.$$d_$33o = Function.createDelegate(this, this.$33o);
    Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel.prototype = {
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel.prototype.$17.call(this), this.$5j().$9F
            .$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r, this.$$d_$33o))
    },
    $33o: function() { this.$8("RenderMultiplePie") },
    $GN: function() {
        this.$5j().$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r, this.$$d_$33o);
        Microsoft.Crm.Client.Core.ViewModels.$AI.prototype.$GN.call(this)
    },
    $1gT: 0,
    get_singlePieWidth: function() { return this.$1gT },
    set_singlePieWidth: function(n) { return this.$1gT = n, n },
    $1g7: 0,
    get_pieInnerSize: function() { return this.$1g7 },
    set_pieInnerSize: function(n) { return this.$1g7 = n, n }
};
Microsoft.Crm.Client.Core.ViewModels
    .QueueContainerViewModel = function() {
        Microsoft.Crm.Client.Core.ViewModels.QueueContainerViewModel.initializeBase(this)
    };
Microsoft.Crm.Client.Core.ViewModels.QueueContainerViewModel.prototype = {
    $1Jh: 0,
    $15o: null,
    get_DashboardCategory: function() { return this.$2HR().$dR },
    get_StreamViewModels: function() {
        if (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Mo("ViewSwitched", 0, this.get_ViewModelId()), $0
            .$1(this.$15o)) {
            this.$15o = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel));
            for (var n = 0;
                !$0.$1(this.$F["QueuePanelViewModel" + n
                ]);
            ) this.$15o.add(this.$F["QueuePanelViewModel" + n]), n++
        }
        return this.$15o.toArray()
    },
    get_ViewType: function() { return this.$1Jh },
    set_ViewType: function(n) { return this.$1Jh = n, this.$8("DataChanged"), n },
    set_ShowAsTiles: function(n) { return this.$1Jh = n ? 1 : 0, this.$8("DataChanged"), n },
    get_SwitcherPanelViewModel: function() { return this.$F.ButtonStrip },
    $17: function() {
        this.$1x || (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this), this.$8("DataChanged"))
    },
    $Ww: function() { for (var i, t = this.get_StreamViewModels(), r = t.length, n = 0; n < r; ++n) i = t[n], i.$Ww() },
    $2HR: function() { return this.$2 },
    $GN: function() {
        var i;
        if (this.get_StreamViewModels()) {
            for (var t = this.get_StreamViewModels(), r = t.length, n = 0; n < r; ++n) i = t[n], i.dispose();
            this.$15o = null
        }
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel = function() {
    Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel.prototype = {
    $QY: !1,
    $BG: null,
    get_parentViewModel: function() { return this.$BG },
    set_parentViewModel: function(n) { return this.$BG = n, n },
    get_PreviousSelectionCount: function() { return this.$BG.$1wa },
    get_DashboardCategory: function() { return this.$BG.get_DashboardCategory() },
    get_ItemSelectionCounter: function() { return this.$BG.$1TG() },
    set_ItemSelectionCounter: function(n) { return this.$BG.$2W8(n), n },
    get_IsSelected: function() { return this.$QY },
    set_IsSelected: function(n) {
        var t = this.$BG.$1TG() > 0 ? this.$BG.$1TG() : 0;
        return this.$BG.$1wa = t, n
            ? (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("QuickActionCheckboxSelected", 0, this.get_ViewModelId()), t++)
            : t--, t > -1 && this.$BG.$2W8(t), this.$QY = n, this.$8("QueueItemStatusChanged"), n
    },
    get_IsCtrlPressed: function() { return Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel.$1rV },
    set_IsCtrlPressed: function(n) { return Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel.$1rV = n, n },
    $bg: null,
    get_ParentQueuePanelViewModel: function() { return this.$bg },
    set_ParentQueuePanelViewModel: function(n) { return this.$bg = n, n },
    $17Q: null,
    get_ID: function() { return this.$17Q },
    set_ID: function(n) { return this.$17Q = n, n },
    $Rc: null,
    get_ColorStrip: function() { return this.$Rc },
    set_ColorStrip: function(n) { return this.$Rc = n, n },
    $16q: null,
    get_ColorStripDisplayName: function() { return this.$16q },
    set_ColorStripDisplayName: function(n) { return this.$16q = n, n },
    $16p: null,
    get_ColorStripAttributeValue: function() { return this.$16p },
    set_ColorStripAttributeValue: function(n) { return this.$16p = n, n },
    $1Kt: null,
    get_HeaderItems: function() { return this.$1Kt },
    set_HeaderItems: function(n) { return this.$1Kt = n, n },
    $wu: null,
    get_DetailItems: function() { return this.$wu },
    set_DetailItems: function(n) { return this.$wu = n, n },
    $1Kh: null,
    get_FooterItems: function() { return this.$1Kh },
    set_FooterItems: function(n) { return this.$1Kh = n, n },
    $16f: null,
    get_ActivityItemNames: function() { return this.$16f },
    set_ActivityItemNames: function(n) { return this.$16f = n, n },
    $BD: null,
    get_EntityLogicalName: function() { return this.$BD },
    set_EntityLogicalName: function(n) { return this.$BD = n, n },
    $1fE: 0,
    get_HtmlDetailIndex: function() { return this.$1fE },
    set_HtmlDetailIndex: function(n) { return this.$1fE = n, n },
    $18R: 0,
    get_TitleIndex: function() { return this.$18R },
    set_TitleIndex: function(n) { return this.$18R = n, n },
    GetQueueItemGuid: function() { return this.$17Q },
    get_ColorTooltip: function() {
        return Microsoft.Crm.Client.Core.Framework.$3.$A(this.$16q) ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(this.$16p)
            ? ""
            : this.$16q + " : " + this.$16p
    },
    $3Dh: function() { return },
    screenReaderTextForQueueItem: function(n) {
        var t = this.$BD === "incident" ? "case" : this.$BD;
        return n
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("QueueItemsCondensedView_ScreenReader_ItemInfo"),
                t,
                this.$wu[this.$18R])
            : String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("QueueItems_ScreenReader_ItemInfo"),
                t,
                this.$wu[this.$18R])
    },
    screenReaderTextWithSelectionCount: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("QueueItems_ScreenReader_NRecordSelection"),
            this.$BG.$1TG())
    },
    isEntityInteractionCentricEnabled: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(n);
        return $0.$1(t) ? !1 : t.$Dq
    },
    navigateToRecord: function() {
        var t = this.$BD,
            i = new Xrm.Objects.EntityReference(t, new Microsoft.Crm.Client.Core.Framework.Guid(this.$5g)),
            u,
            r,
            f,
            n;
        this.$BD === "activitypointer"
            ? (t = this.$16f[0], i = new Xrm.Objects
                .EntityReference(t, new Microsoft.Crm.Client.Core.Framework.Guid(this.$5g)))
            : this.$BD === "queueitem" &&
            (u = this, r = u.get_ModelContext()
                .GetValue("objectid"), Microsoft.Crm.Client.Core.Framework.$3h.isInstanceOfType(r) &&
                (i = r, t = i.LogicalName));
        this.$bg.$Hn = this;
        f = new Microsoft.Crm.Client.Core.ViewModels
            .InteractionCentricListNavigationContext(this.$bg.$1R,
                this.$bg.get_CurrentItemIndex(),
                this.$bg.$KI.get_$H(1),
                this.$bg,
                !0);
        n = new Microsoft.Crm.Client.Core.Commands.$33(null, 40);
        try {
            n.$J = t;
            n.$19 = { ListNavigationContext: f };
            n.$19.EntityReference = i;
            n.execute()
        } finally {
            n.dispose()
        }
    },
    $GN: function() {
        this.$BG = null;
        this.$17Q = null;
        this.$Rc = null;
        this.$1Kt = null;
        this.$1Kh = null;
        this.$wu = null;
        this.$16f = null;
        this.$bg = null;
        Microsoft.Crm.Client.Core.ViewModels.$41.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel = function() {
    this.$$d_$31l = Function.createDelegate(this, this.$31l);
    this.$$d_getQueueItemViewSuccess = Function.createDelegate(this, this.getQueueItemViewSuccess);
    this.$$d_$2zF = Function.createDelegate(this, this.$2zF);
    this.$$d_$3EY = Function.createDelegate(this, this.$3EY);
    this.$$d_$1vL = Function.createDelegate(this, this.$1vL);
    this.$$d_$31m = Function.createDelegate(this, this.$31m);
    this.$$d_$32l = Function.createDelegate(this, this.$32l);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$32k = Function.createDelegate(this, this.$32k);
    this.$$d_handleStreamError = Function.createDelegate(this, this.handleStreamError);
    this.$$d_processFetchXml = Function.createDelegate(this, this.processFetchXml);
    this.$$d_$2JD = Function.createDelegate(this, this.$2JD);
    this.$1m = {};
    this.$15b = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    this.$Qy = {};
    this.$KI = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    this.$15c = {};
    this.$1IT = {};
    this.$1i1 = {};
    this.$15a = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
    this.$14G = new Array(0);
    this.$zw = new Array(0);
    Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel.prototype = {
    $5e: null,
    $Oz: null,
    $mo: !1,
    $fJ: !1,
    $1s5: !1,
    $v: null,
    $12B: !0,
    $1V1: !1,
    $X7: null,
    $NI: null,
    $dM: null,
    $T: null,
    $VN: null,
    $cK: null,
    $1O1: null,
    $SG: null,
    $KN: null,
    $cf: null,
    $V3: null,
    $1jQ: null,
    $Xz: null,
    $1sx: null,
    $Qx: 0,
    $1zB: 0,
    $1wa: 0,
    $10C: null,
    $2G: null,
    $14E: null,
    $OK: !1,
    $1VA: !1,
    $IN: "Initialize",
    get_AttributeMetadataActionProvider: function() { return this.$cK },
    set_AttributeMetadataActionProvider: function(n) { return this.$cK = n, n },
    get_SelectedSortBy: function() { return this.$15c[this.$X7] },
    set_SelectedSortBy: function(n) {
        return this.$X7 === this.$1IT[n] ? n : (this.$X7 = this.$1IT[n], this.$8("IsLoading"), n)
    },
    $Rp: !1,
    get_LoadTriggeredByPagingEvent: function() { return this.$Rp },
    set_LoadTriggeredByPagingEvent: function(n) { return this.$Rp = n, n },
    $qB: null,
    get_QueueItemIdArray: function() { return this.$qB },
    set_QueueItemIdArray: function(n) { return this.$qB = n, n },
    $xP: !1,
    get_ItemLimitExceeded: function() { return this.$xP },
    set_ItemLimitExceeded: function(n) { return this.$xP = n, n },
    $G5: null,
    get_TypeOfStream: function() { return this.$G5 },
    set_TypeOfStream: function(n) { return this.$G5 = n, n },
    $Lm: null,
    get_StreamId: function() { return this.$Lm },
    set_StreamId: function(n) { return this.$Lm = n, n },
    $KE: null,
    get_StreamName: function() { return this.$KE },
    set_StreamName: function(n) { return this.$KE = n, n },
    $A5: null,
    get_EntityTypeCode: function() { return this.$A5 },
    set_EntityTypeCode: function(n) { return this.$A5 = n, n },
    get_CurrentSavedQueryId: function() { return this.$dM },
    set_CurrentSavedQueryId: function(n) { return this.$dM = n, n },
    get_EntityLogicalName: function() { return this.$T },
    set_EntityLogicalName: function(n) { return this.$T = n, this.$G1.set_Entity(this.$T), n },
    get_IsEditMode: function() { return this.$1V1 },
    set_IsEditMode: function(n) { return this.$1V1 !== n && (this.$1V1 = n, this.$8("IsEditMode")), n },
    get_QueueItemCount: function() { return this.$Qx },
    get_ActionProvider: function() { return this.$NI },
    set_ActionProvider: function(n) { return this.$NI = n, n },
    get_SortableAttributes: function() { return this.$15a },
    $1LQ: null,
    get_NumberOfMembers: function() { return this.$1LQ },
    set_NumberOfMembers: function(n) { return this.$1LQ = n, n },
    get_QueueItemViewModels: function() {
        return Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("QueueContentAsked", 0, this.get_ViewModelId()), Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo("QueueShown", 0, this.get_ViewModelId()), this.$Qy
    },
    set_QueueItemViewModels: function(n) { return this.$Qy = n, n },
    get_ParentViewModel: function() { return this.$2.$6B(this) },
    get_IsSortedInDescending: function() { return this.$12B },
    set_IsSortedInDescending: function(n) {
        return this.$12B !== n && (this.$12B = n, this.$G1.$1OR(), this.$8("IsLoading")), n
    },
    get_DashboardCategory: function() { return this.$7y().$dR },
    get_AllCardAttributes: function() { return this.$KI },
    set_AllCardAttributes: function(n) { return this.$KI = n, n },
    get_EntityPluralName: function() { return this.$2G.$8N },
    $G1: null,
    get_quickActionViewModel: function() { return this.$G1 },
    set_quickActionViewModel: function(n) { return this.$G1 = n, n },
    get_MoreNextPage: function() { return this.$1p.$BQ < this.$1p.$JW },
    $y5: !1,
    get_UserPrivilege: function() { return this.$y5 },
    set_UserPrivilege: function(n) { return this.$y5 = n, n },
    $pq: !1,
    get_IsCardFormDefined: function() { return this.$pq },
    set_IsCardFormDefined: function(n) { return this.$pq = n, n },
    $Ll: null,
    get_QueueItemViewId: function() { return this.$Ll },
    set_QueueItemViewId: function(n) { return this.$Ll = n, n },
    $17j: null,
    get_MultiSelectInfo: function() { return this.$17j },
    set_MultiSelectInfo: function(n) { return this.$17j = n, n },
    $1L3: !1,
    get_IsErrorOccured: function() { return this.$1L3 },
    set_IsErrorOccured: function(n) { return this.$1L3 = n, n },
    $17: function() {
        if (!this.$1x) {
            this.$14E = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("QueuePanel_QueueDataRetrieve");
            Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$17.call(this);
            this.$pq = !0;
            this.$7y().$9F.$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O,
                this.$$d_$2JD);
            this.$qB = new Array(0);
            this.$1R.$76();
            this.$Oz = new Microsoft.Crm.Client.Core.ViewModels.$LZ;
            this.$Oz.$1Jj();
            this.$32j();
            this.$cK = new Microsoft.Crm.Client.Core.ViewModels
                .$M(this,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("AttributeMetadata", null));
            this.$Rp = !1;
            this.$1p.$2u = 20;
            var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .ViewModelDescriptor("QuickActionViewModel",
                    "QuickActionQueueContainer",
                    "QuickActionQueueContainer" + this.$Lm,
                    [
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .ValuePropertyDescriptor("TargetViewModelContext", this), new Microsoft.Crm.Client.Core.Models
                        .Descriptors.ViewModel.ValuePropertyDescriptor("Entity", this.$T), new Microsoft.Crm.Client.Core
                        .Models.Descriptors.ViewModel.ValuePropertyDescriptor("Context", "grid")
                    ],
                    null,
                    null);
            this.$G1 = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
                .$7I(n, this.get_ModelContext(), this.$3M, this.$2);
            this.$y5 = !0;
            this.$17j = new Microsoft.Crm.Client.Core.ViewModels.MultiSelectInfo
        }
    },
    $1TI: function() {
        if ($0.$1(this.$X7)) return"";
        return"<order attribute='" + this.$X7 + "' descending='" + this.$12B + "' />"
    },
    $2Rs: function() {
        this.$Oz.$2Wi();
        this.$Oz.get_$1sZ() || (this.$Oz.$1Jj(), this.$32m())
    },
    $32m: function() {
        var t, n;
        this.$IN = "QueuePanelViewModel.GetStreamsData";
        this.$Rp || (this.$1p.$BQ = 0);
        this.$G5 === "0" || this.$G5 === "2"
            ? (this.$2G = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                .$Bm(Number.parseInvariant(this.$A5)), $0.$1(this.$2G)
                ? (t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                    .$SK("QueuePanelViewModel.GetStreamsData", "Entity metadata cannot be null", "", this.$T), Microsoft
                    .Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t), Microsoft.Crm
                    .Client.Core.Framework.Utils.$E.$55(this.$2G, "EntityMetadata"))
                : (this.set_EntityLogicalName(this.$2G.$d), this.$y5 = Microsoft.Crm.Client.Core.ViewModels
                    .ApplicationShellViewModel.get_instance().get_$32().$7p(this.$T, 1), this.$VN = this.$2G.$4M, this
                    .$2Gy()))
            : (this.$dM = this.$Lm, n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("RetrieveFetchXmlFromSavedQueryId", null), n.OnSuccess = this.$$d_processFetchXml, n
                .OnFailure = this.$$d_handleStreamError, this.set_IsLoading(!0), Microsoft.Crm.Client.Core.ViewModels
                .ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n))
    },
    handleStreamError: function() { this.$1FX() },
    $1FX: function() {
        this.$1L3 = !0;
        this.set_IsLoading(!1)
    },
    processFetchXml: function(n) {
        var t, i;
        this.$IN = "QueuePanelViewModel.ProcessFetchXml";
        t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n.toString());
        this.$10C = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(t).$O("fetch");
        this.set_EntityLogicalName(this.$10C.$O("entity").$1Q("name").toString());
        this.$2G = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$T);
        $0.$1(this.$2G)
            ? (this.set_IsLoading(!1), i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SK("QueuePanelViewModel.ProcessFetchXml", "Entity metadata cannot be null", "", this.$T), Microsoft
                .Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(i), Microsoft.Crm.Client
                .Core.Framework.Utils.$E.$55(this.$2G, "EntityMetadata"))
            : (this.$VN = this.$2G.$4M, this.$y5 = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                .get_instance().get_$32().$7p(this.$T, 1));
        this.$2Gy()
    },
    $32j: function() {
        this.$IN = "QueuePanelViewModel.GetStreamAttributes";
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("FetchXmlWithCallback", null);
        n.OnSuccess = this.$$d_$32k;
        n.OnFailure = this.$$d_$5J;
        this.$G5 === "0"
            ? (this.$Oz.$1Jj(), n
                .QueryValue =
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\r\n\t\t\t\t\t\t\t\t\t\t\t  <entity name='queue'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='name' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='numberofmembers'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='queueviewtype'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute='queueid' operator='eq' value='" + this.$Lm + "' /><\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t  <\/entity>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/fetch>", Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n))
            : this.$G5 === "1"
            ? (this.$dM = this.$Lm, n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("RetrieveSavedQueryDetailsFromSavedQueryId", null), n.OnSuccess = this.$$d_$32l, this
                .set_IsLoading(!0), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .$2T("ActionProvider", this, n))
            : this.$G5 === "2" &&
            (this.$Oz.$1Jj(), this.$Lm.toLowerCase() === "5850FC36-8596-45fe-B607-FE81D0C453FD".toLowerCase()
                ? this.$KE = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_All")
                : this.$Lm.toLowerCase() === "e611d950-6bab-477c-a5a3-7e9a447b326d".toLowerCase()
                ? this.$KE = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_Public")
                : this.$Lm.toLowerCase() === "436e2293-da8f-4ef9-a1e6-fff25a5beb22".toLowerCase() &&
                (this.$KE = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Workplace_Queue_Selector_Private")), this
                .$2IL())
    },
    $2IL: function() {
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveSavedQueryDetailsFromSavedQueryId", null);
        this.$dM = this.$Ll;
        n.OnSuccess = this.$$d_$31m;
        n.OnFailure = this.$$d_handleStreamError;
        this.set_IsLoading(!0);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
    },
    $32k: function(n) {
        var t = n.get_$Bp().$21O(), i;
        if ($0.$1(t) || !t.length) {
            this.$1FX();
            return
        }
        this.$KE = t[0].GetValue("name");
        this.$1LQ = t[0].GetValue("numberofmembers");
        i = t[0].GetValue("queueviewtype");
        this.$1s5 = i.$1f === 1 ? !0 : !1;
        this.$2IL()
    },
    $32l: function(n) {
        var t = n;
        this.$KE = t.$1P
    },
    $31m: function(n) {
        var t = n;
        this.$KE = String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ICDashboard_Streams_label"),
            this.$KE,
            t.$1P);
        this.$2Rs()
    },
    $30K: function(n, t) {
        var i = "", r = "", u;
        return i += "<link-entity ", n
            .$1Q("name") &&
            (r = n.$1Q("name"), i += " name='" + r + "' ", t
                .add(r)), n
            .$1Q("from") &&
            (i += " from='" + n.$1Q("from") + "' "), n
            .$1Q("to") &&
            (i += " to='" + n.$1Q("to") + "' "), n
            .$1Q("visible") &&
            (i += " visible='" + n.$1Q("visible") + "' "), n.$1Q("link-type") &&
            (i += " link-type='" + n.$1Q("link-type") + "' "), u = this
            .$2HJ(r), $0.$1(u) ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(u.$7F()) ||
            (i += " alias='" + r + "__alias' "), i += ">", i += Microsoft.Crm.Client.Core.Framework.Utils.$6S
            .$1T2(n), i + " <\/link-entity>"
    },
    $2j4: function(n) {
        var p = n.$O("entity"),
            st = "",
            ht = "",
            ct = "",
            lt = "",
            i = '<filter type ="and">',
            r = "<\/filter>",
            at = p.$O("filter") ? p.$O("filter").get_$7W().toString() : "",
            o,
            b,
            k,
            d,
            t,
            g,
            nt,
            tt,
            f,
            c,
            it,
            yt,
            rt,
            e,
            l,
            ut,
            a,
            v,
            y,
            ft,
            et,
            pt,
            ot;
        n.$1Q("version") && (st = " version='" + n.$1Q("version") + "' ");
        n.$1Q("output-format") && (ht = " output-format='" + n.$1Q("output-format") + "' ");
        n.$1Q("mapping") && (ct = " mapping='" + n.$1Q("mapping") + "' ");
        n.$1Q("distinct") && (lt = " distinct='" + n.$1Q("distinct") + "' ");
        var u = n.$O("entity").$1Q("name"),
            w = p.$5k("link-entity"),
            s = "",
            h = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        for (o = 0; o < w.get_$l(); o++)
            s += this.$7y().get_IsMultipleEntityGraphSupported() ? this.$30K(w.get_$H(o), h) : w.get_$H(o).get_$7W();
        if (u === this.$7y().$8S) {
            b = this.$7y().$jQ;
            for (k in b) d = { key: k, value: b[k] }, h.contains(d.key) || (s += d.value)
        }
        if (u === "queueitem" && (s += this.$1hl("5850FC36-8596-45fe-B607-FE81D0C453FD".toLowerCase())), t = at, this
            .$7y().get_IsMultipleEntityGraphSupported()) {
            if (u === this.$7y().$8S) {
                if (g = this.$7y().$FH, !$0.$1(g)) {
                    nt = g;
                    for (tt in nt) {
                        var wt = { key: tt, value: nt[tt] }, bt = wt.value, vt = bt.$7F();
                        Microsoft.Crm.Client.Core.Framework.$3.$A(vt) || (t += i + vt + r)
                    }
                    t = i + t + r
                }
            } else if (f = this.$7y().$FH, !$0.$1(f)) {
                for (c = 0; c < h.get_Count(); c++)
                    it = h.get_$H(c), it in f &&
                        (yt = f[it], rt = yt.$7F(), Microsoft.Crm.Client.Core.Framework.$3.$A(rt) || (t += i + rt + r));
                if (u in f) {
                    if (e = f[u], $0.$1(e.get_$27())) {
                        for (ut = e
                                .get_$5U(), a = 0;
                            a < ut.get_Count();
                            a++)
                            if (v = ut.get_$H(a), !$0.$1(v
                                .get_$27()))
                                for (y = 0; y < v.get_$27().get_Count(); y++) v.get_$27().get_$H(y).set_$Av("")
                    } else for (l = 0; l < e.get_$27().get_Count(); l++) e.get_$27().get_$H(l).set_$Av("");
                    ft = e.$7F();
                    Microsoft.Crm.Client.Core.Framework.$3.$A(ft) || (t += i + ft + r)
                }
                et = this.$7y().$Iq;
                this.$7y().$8S in et &&
                    this.$1VA &&
                    (pt = et[this.$7y().$8S], ot = pt
                        .$7F(), Microsoft.Crm.Client.Core.Framework.$3.$A(ot) || (t += i + ot + r));
                t = i + t + r
            }
        } else t = i + at + this.$F3() + r;
        return"<fetch" +
            st +
            ht +
            ct +
            lt +
            "><entity name='" +
            u +
            "'>" +
            this.$Xz +
            s +
            this.$1TI() +
            t +
            "<\/entity><\/fetch>"
    },
    $2JD: function(n) {
        if (!$0.$1(n.$Gj)) {
            var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$Gj) ? "" : n.$Gj.$7F(),
                    n.$g);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t)
        }
        this.$G1.$1OR();
        this.$2Rs()
    },
    $Ww: function() {
        this.$G1.$1OR();
        this.$Rp = !1;
        this.retrieveData()
    },
    $3EY: function(n, t) {
        var i;
        if (t.get_$BA() !== 1) {
            i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SK("QueuePanelViewModel.OnQueueRecordsChanged",
                    String
                    .format("OnQueueRecordsChanged has failed in QueuePanelViewModel, EventArgs.RetrieveState not Successful.EventArgs.RetrieveState is { 0 }", Microsoft.Crm.Client.Core.Storage.DataApi.$2T.toString(t.get_$BA())),
                    "",
                    this.$T);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(i);
            throw Error.create(String
                .format("OnQueueRecordsChanged has failed in QueuePanelViewModel, EventArgs.RetrieveState not Successful. EventArgs.RetrieveState is {0}", Microsoft.Crm.Client.Core.Storage.DataApi.$2T.toString(t.get_$BA())));
        }
        this.$rm();
        var r = Microsoft.Crm.Client.Core.Models.$1E.$B(t.get_$dS()), u = this.get_ParentViewModel();
        this.$I === "QueuePanelViewModel0" &&
            u.$I.endsWith("0") &&
            Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo("RenderedFirstQueueWithData", 1, this.$2.get_ViewModelId());
        this.$4Y(r);
        this.$8("IsLoading")
    },
    $cH: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(this.$2Q, this.get_DefinitionId());
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$AP(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                n.get_$4u(),
                this.$$d_$1vL,
                this.$$d_$3EY)
    },
    $rm: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(this.$2Q, this.get_DefinitionId());
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1a2(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                n.get_$4u(),
                this.$$d_$1vL,
                this.$$d_$3EY)
    },
    $1vL: function() {},
    $2kI: function(n, t, i, r, u, f, e, o, s, h, c) {
        var l = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("QueueItemViewModel",
                "QueueItem",
                n,
                [
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ID", n),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("RecordId", n),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ColorStrip", t),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("ColorStripDisplayName", i), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("ColorStripAttributeValue", r), new Microsoft.Crm
                    .Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("HeaderItems", u), new Microsoft
                    .Crm.Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("DetailItems", f),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("FooterItems", e), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("EntityLogicalName", s), new Microsoft.Crm.Client.Core.Models
                    .Descriptors.ViewModel.ValuePropertyDescriptor("ParentQueuePanelViewModel", this), new Microsoft.Crm
                    .Client.Core.Models.Descriptors.ViewModel.ValuePropertyDescriptor("ActivityItemNames", o),
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ValuePropertyDescriptor("HtmlDetailIndex", h), new Microsoft.Crm.Client.Core.Models.Descriptors
                    .ViewModel.ValuePropertyDescriptor("TitleIndex", c)
                ],
                null,
                null);
        return Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$7I(l, this.get_ModelContext(), this.$3M, this.$2)
    },
    $Rg: null,
    get_DefinitionId: function() { return this.$Rg },
    set_DefinitionId: function(n) { return this.$Rg = n, n },
    getTotalRecordsCount: function() { return this.$Qx },
    $1So: function() {
        var n, t;
        this.$IN = "QueuePanelViewModel.GetData";
        n = 0;
        $0.$1(this.$NI) || $0.$1(this.$1v)
            ? this.set_IsLoading(!1)
            : ((this.$G5 === "2" || this.$G5 === "0") && (n = this.$1p.$BQ, this.$1p.$BQ = 0), this
                .set_DefinitionId(this.$1v.toString()), this.$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$1X.$4y(this.$1v), this.set_IsLoading(!0), this.$cH(), t = this.$NI.$4W(), Microsoft.Crm.Client.Core
                .ViewModels.ApplicationShellViewModel.get_instance().get_$2S()
                .$2c(t), (this.$G5 === "2" || this.$G5 === "0") && (this.$1p.$BQ = n), this.$14E.start())
    },
    $4Y: function(n) {
        var l, nt, h, u, p, e, w, b, o, k, s, d, i, g, f;
        this.$14E.stop();
        this.$14E.addParameter(this.get_ViewModelId());
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo(this.$OK ? "RenderedRefreshedData" : "LoadedInitialData", 0, this.get_ViewModelId());
        this.$OK || (this.$Ib("RenderedInitialData"), this.$OK = !0);
        this.$G5 === "1" &&
        (l = n, this.$Qx = l.get_EntityCollection().$AK, this.$xP = l.get_EntityCollection().$LX, this.$1p
            .$JW = Math.floor(this.$Qx / this.$1p.$2u));
        nt = n.get_$Bp().$21O();
        this.$Rp || (this.$qB = new Array(0), this.$2RG(), this.$Qy = {}, this.$1R.$76());
        for (var tt = nt, ft = tt.length, a = 0; a < ft; ++a) {
            var t = tt[a], r = t.GetValue(this.$VN), it = "#3F94E9", v = "", y = "";
            for (this.$V3 && (y = this.$sw(this.$V3, t.GetValue(this.$V3)), it = this.$2pW(y)), h = new Array(0), u = 0;
                u < this.$SG.length;
                u++)
                if (p = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                    .$2V(this.$T, this.$SG[u]), $0
                    .$1(p) ||
                    p.$2R !== 10) h.push(this.$sw(this.$SG[u], t.GetValue(this.$SG[u])));
                else if (!$0.$1(t) &&
                (e = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
                    .createFromObjectData(t.$2HG(this.$SG[u])), !$0.$1(e) && !$0.$1(e.get_entities()))) {
                    for (w = e.get_entities()
                            .length, b = "", o = 0;
                        o < w;
                        o++)
                        k = e.get_entities()[o], k.$N.LogicalName === "activityparty" &&
                        (s = k.fields.partyid, $0.$1(s) ||
                            $0.$1(s.Name) ||
                            (b += o === w - 1 ? s.Name : s.Name + " ;"));
                    h.push(b)
                }
            d = new Array(0);
            this.$2G.$7h === 4200 ? (d.push(t.get_$Go()), v = t.get_$Go()) : v = this.$T;
            var c = new Array(0), rt = -1, ut = -1;
            for (i = 0; i < this.$KN.length; i++)
                this.$KN[i] === "description" && this.$T === "email" && t.GetValue(this.$KN[i])
                    ? (c.push(t.GetValue(this.$KN[i]).toString()), rt = c.length - 1)
                    : this.$sw(this.$KN[i], t.GetValue(this.$KN[i])) &&
                    (this.$KN[i] === "title" && (ut = i), c.push(this.$sw(this.$KN[i], t.GetValue(this.$KN[i]))));
            for (g = new Array(0), f = 0;
                f < this.$cf.length;
                f++
            ) this.$sw(this.$cf[f], t.GetValue(this.$cf[f])) && g.push(this.$sw(this.$KN[f], t.GetValue(this.$cf[f])));
            r.toString() in this.$Qy ||
            (this.$Qy[r.toString()] = this.$2kI(r.toString(), it, this.$1jQ, y, h, c, g, d, v, rt, ut), this.$qB
                .push(r.toString()), this.$Qy[r.toString()].set_ModelContext(t), this.$1R
                .$2e(this.$Qy[r.toString()]), this.$Qy[r.toString()].$BG = this, this.$Qy[r.toString()]
                .set_IsSelected(!1))
        }
        this.$mo
            ? !$0.$1(this.$5e) && this.$fJ && (this.$5e.$2Z3(), this.$mo = !1, this.$fJ = !1)
            : this.$mo = this.$fJ ? !0 : !1;
        this.set_IsLoading(!1);
        n.dispose()
    },
    $5J: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RR("ServiceHubStreamsLoadDataFailureEvent");
        t.$t("LocalContext", this.$IN);
        t.$t("ErrorMessage", n.$E);
        t.$t("Exception", n.$178.message);
        t.$t("StreamName", this.$KE);
        t.$t("StreamId", this.$Lm);
        t.$t("TypeOfStream", this.$G5);
        t.$t("Query", this.$1v);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t);
        Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$5J.call(this, n)
    },
    $Ot: function() {
        this.$IN = "QueuePanelViewModel.RetrieveAtrributeMetadata";
        var n = this, t = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$T),
                Microsoft.Crm.Client.Core.Framework.$15.$5v(this.$Lm, this.$KE)).then(function(t) {
                    var e, r, i, u;
                    n.$15b.clear();
                    n.$15a.clear();
                    e = t.$21O();
                    r = new Array(0);
                    for (var o = e, s = o.length, f = 0;
                        f < s;
                        ++f
                    )
                        i = o[f], u = !0, Array.indexOf(n
                                    .$SG,
                                    i.get_$1l()) >=
                                0 &&
                                r.push(i), i
                                .get_$1l() ===
                                n.$V3 &&
                                (n.$1jQ = i.get_$AB(), r.push(i)), i.get_$mx() &&
                            (u = Microsoft.Crm.Client.Core.ViewModels.Controls.$68
                                .$yh(i.get_$1Z())), i
                                .get_$2Lk() &&
                                u &&
                                n.$2aq(i), i
                                .get_$1l() ===
                                "modifiedon" &&
                                n
                                .$2cN("modifiedon", i.get_$AB(), 0), i.get_$1l() === n.$7y().$Lf && (n.$1VA = !0),
                            u || (n.$1i1[i.get_$1l()] = i);
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                        .$Gs(n.$T,
                            !1,
                            new(Microsoft.Crm.Client.Core.Framework.$P
                                .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M))(r));
                    $0.$1(n.$X7) && (n.$X7 = n.$15b.get_$H(0));
                    n.$Rp = !1;
                    n.retrieveData()
                },
                function(n) {
                    t.set_IsLoading(!1);
                    var i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                        .$SK("QueuePanelViewModel.RetrieveAtrributeMetadata", n.$E, "", t.$T);
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(i);
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logError(1007,
                            "Retrieve Multiple Attribute Metadata failed in Queue Panel View Model with error : {0}",
                            n.$E)
                })
    },
    retrieveData: function() {
        if (this.$Rp || (this.$1p.$BQ = 0), this.$G5 === "1") {
            if (!this.$10C) {
                this.$1FX();
                return
            }
            var n = this.$2j4(this.$10C);
            this.$1v = n;
            this.$1So()
        } else
            this.$G5 === "2"
                ? this.$Ll !== "0" ? this.$2IK() : this.$2xl()
                : this.$Ll !== "0"
                ? this.$2IK()
                : (this
                    .$1v =
                    "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>\t \r\n\t\t\t\t\t\t\t\t<entity name='" + this.$T + "'>" + this.$Xz + this.$1TI() + "<link-entity name='queueitem' from='objectid' to='" + this.$VN + "'>\r\n\t\t\t\t\t\t\t\t\t<link-entity name='queue' from='queueid' to='queueid'>\r\n\t\t\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t\t\t<condition attribute='queueid' operator='eq' value='" + this.$Lm + "' />\r\n\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t\t\t\t<\/link-entity>" + this.$F3() + "<\/entity><\/fetch>", this.$1So())
    },
    handleQueueItemSelectedEvent: function(n, t, i) {
        this.$G1.handleQueueItemSelection(n, t, i);
        this.$8("QuickActionCommandBarEnabled")
    },
    $7y: function() { return this.$2 },
    get_TabSpaceReserved: function() { return 50 },
    $2Gy: function() {
        if (this
                .$IN = "QueuePanelViewModel.GetEntityCardAttributes", this.$2G.$7h === 4200
        ) this.createCardInstanceForActivity(), this.set_IsLoading(!1);
        else {
            var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor("RetrieveCardConfigurationAction", null);
            n.OnSuccess = this.$$d_$2zF;
            this.set_IsLoading(!0);
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
        }
    },
    createCardInstanceForActivity: function() {
        var n = new Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel, t, i, r;
        this.$1O1 = n.$XT;
        t = new Array(3);
        t[0] = "activitytypecode";
        t[1] = "prioritycode";
        t[2] = "scheduledend";
        n.$iw = t;
        i = new Array(3);
        i[0] = "subject";
        i[1] = "description";
        i[2] = "regardingobjectid";
        n.$iu = i;
        r = new Array(2);
        r[0] = "ownerid";
        r[1] = "createdon";
        n.$iv = r;
        n.$Rc = "statuscode";
        this.$SG = n.$iw;
        this.$KN = n.$iu;
        this.$cf = n.$iv;
        this.$V3 = n.$Rc;
        this.$KI = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        this.$Xz = "<attribute name='" + this.$VN + "' />";
        this.$qY(this.$KI, this.$SG);
        this.$qY(this.$KI, this.$KN);
        this.$qY(this.$KI, this.$cf);
        this.$G5 === "1" && this.$2GP(this.$KI, this.$T, this.$V3);
        this.$pq = !0;
        n.dispose()
    },
    $2GP: function(n, t, i) {
        this.$23p(n, i);
        $0.$1(i) || (this.$Xz += "<attribute name='" + i + "' />");
        this.$Ot(n, t)
    },
    $qY: function(n, t) {
        for (var i = 0; i < t.length; i++)
            this.$23p(n, t[i]), $0.$1(t[i]) || (this.$Xz += "<attribute name='" + t[i] + "' />")
    },
    $2zF: function(n) {
        if ($0.$1(n))
            this.$pq = !1, this.$2G.$7h === 4200 && this.createCardInstanceForActivity(), this.set_IsLoading(!1);
        else {
            this.$pq = !0;
            var t = n;
            this.$1O1 = t.$XT;
            this.$SG = t.$iw;
            this.$KN = t.$iu;
            this.$cf = t.$iv;
            this.$V3 = t.$Rc;
            this.$KI = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
            this.$Xz = "<attribute name='" + this.$VN + "' />";
            this.$qY(this.$KI, this.$SG);
            this.$qY(this.$KI, this.$KN);
            this.$qY(this.$KI, this.$cf);
            this.$T === "queueitem" && this.$qY(this.$KI, ["objectid"]);
            this.$2GP(this.$KI, this.$T, this.$V3);
            t.dispose()
        }
    },
    $F3: function() {
        var n = this.$7y(), t = null;
        return n.$8S === this.$T
            ? t = n.get_IsMultipleEntityGraphSupported() ? n.$FH[n.$8S] : n.$PM
            : this.$1VA && (t = n.get_IsMultipleEntityGraphSupported() ? n.$Iq[n.$8S] : n.$Rf), $0.$1(t) ? "" : t.$7F()
    },
    $2HJ: function(n) {
        if (n in this.$7y().$FH) {
            var t = this.$7y().$FH[n];
            if (!$0.$1(t)) return t
        }
        return null
    },
    $23p: function(n, t) { Microsoft.Crm.Client.Core.Framework.$3.$A(t) || n.contains(t) || n.add(t) },
    $sw: function(n, t) {
        if (n in this.$1i1) return"*****";
        if ($0.$1(t)) return"";
        if (Xrm.Objects.EntityReference.isInstanceOfType(t)) return t.Name;
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N.isInstanceOfType(t)) return t.$1B;
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$56.isInstanceOfType(t)) return this.$sw(n, t.$GM);
        var i = "", r, u;
        return u = Microsoft.Crm.Client.Core.Framework.Utils.$6m.$2hV(t.toString(), r = { val: i }), i = r.val, u, i
    },
    $2pW: function(n) {
        var f, t, o, i, r, e, u;
        if ($0.$1(n)) return"#3F94E9";
        try {
            if (f = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$2V(this.$T, this.$V3), t = f
                .$7M, $0.$1(t)) return"#3F94E9";
            o = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N));
            i = t.$Tj;
            for (r in i) if (e = { key: r, value: i[r] }, u = e.value, u.$1B === n) return u.$KQ
        } catch (s) {
        }
        return"#3F94E9"
    },
    loadMoreData: function() {
        this.$1p.$BQ++;
        this.$Rp = !0;
        this.retrieveData()
    },
    $1vx: function(n, t) {
        this.$5e = n;
        this.$fJ = !0;
        t ? this.loadMoreData() : (this.$1p.$BQ--, this.$Rp = !0, this.retrieveData())
    },
    $2aq: function(n) {
        var i = n.get_$1l(), t = n.get_$AB();
        Microsoft.Crm.Client.Core.Framework.$3.$A(t) && (t = i);
        this.$2cN(i, t)
    },
    $2cN: function(n, t, i) {
        $0.$1(i) ? (this.$15b.add(n), this.$15a.add(t)) : (this.$15b.insert(i, n), this.$15a.insert(i, t));
        this.$15c[n] = t;
        this.$1IT[t] = n
    },
    editModeApplySettings: function() {
        this.$G1.$1OR();
        this.$Rp = !1;
        this.retrieveData()
    },
    $2xl: function() {
        var t = {}, n, i, r;
        t.userId = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString();
        t.includePublic = !0;
        n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("RetrieveUserQueues", t);
        i = this;
        n.OnSuccess = function(n) { i.$2xm(n) };
        r = this;
        n.OnFailure = function(n) { r.$5J(n) };
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", null, n)
    },
    $2xm: function(n) {
        var r, u, e, i;
        this.$14G = new Array(0);
        r = n.entityCollection;
        u = r.get_entities();
        for (var f = u, o = f.length, t = 0; t < o; ++t)
            e = f[t], i = e.$N.Id.toString(), $0.$1(i) || this.$14G.push(i);
        this
            .$1v =
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>\t \r\n\t\t\t\t\t\t\t\t<entity name='" + this.$T + "'>" + this.$Xz + this.$1TI() + "<link-entity name='queueitem' from='objectid' to='" + this.$VN + "'>\r\n\t\t\t\t\t\t\t\t\t<link-entity name='queue' from='queueid' to='queueid'>\r\n\t\t\t\t\t\t\t\t\t\t<filter type='or'>" + this.$30m() + "<\/filter>\r\n\t\t\t\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t\t\t\t<\/link-entity>" + this.$F3() + "<\/entity><\/fetch>";
        this.$1So()
    },
    $30m: function() {
        for (var t = "<filter type='or'><condition attribute='queueid' operator='in'>", i = !1, n = 0;
            n < this.$14G.length;
            n++) $0.$1(this.$14G[n]) || (t += "<value>{" + this.$14G[n] + "}<\/value>", i = !0);
        return t += "<\/condition><\/filter>", i ? t : ""
    },
    isQuickActionBarEnabled: function() { return this.$G1.$Hp.get_Count() > 0 ? !0 : !1 },
    $2IC: function() {
        var n = "";
        return this.$2G && (n = this.$Qx === 1 ? this.$2G.$1P : this.get_EntityPluralName()), n
    },
    screenReaderTextForTilesContainer: function(n, t) {
        var i = this.$2G ? this.get_EntityPluralName() : null;
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("TilesContainer_ScreenReader_Label"),
            t,
            "tiles",
            i,
            this.$7y().$Lf,
            n)
    },
    screenReaderTextForTileHeader: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("TileHeader_ScreenReader_Label"),
            this.$KE,
            "queue",
            this.$Qx,
            this.$2IC())
    },
    screenReaderTextForTilePopup: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("TilePopup_ScreenReader_Label"),
            this.$KE,
            "queue",
            this.$Qx,
            this.$2IC(),
            this.$X7)
    },
    $2IK: function() {
        this.$dM = this.$Ll;
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveFetchXmlFromSavedQueryId", null);
        n.OnSuccess = this.$$d_getQueueItemViewSuccess;
        n.OnFailure = this.$$d_handleStreamError;
        this.set_IsLoading(!0);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
    },
    getQueueItemViewSuccess: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n.toString()),
            i = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(t).$O("fetch");
        this.$2nl(i)
    },
    $1hl: function(n) {
        return n === "436e2293-da8f-4ef9-a1e6-fff25a5beb22".toLowerCase()
            ? "<link-entity name='queuemembership' from='queueid' to='queueid' alias='qm' link-type='inner'>\r\n\t\t\t\t\t\t\t\t\t\t<attribute name='systemuserid' />\r\n\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t<condition attribute='systemuserid' operator='eq' value='" + Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString() + "' />\r\n\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t<\/link-entity>"
            : n === "e611d950-6bab-477c-a5a3-7e9a447b326d".toLowerCase()
            ? "<link-entity name='queue' from='queueid' to='queueid'>\r\n\t\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t\t<condition attribute='queueviewtype' operator='eq' value='0'/>\r\n\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t<\/link-entity>"
            : n === "5850FC36-8596-45fe-B607-FE81D0C453FD".toLowerCase()
            ? "<link-entity name='queuemembership' from='queueid' to='queueid' alias='qm' link-type='outer'> <attribute name='systemuserid'/> <\/link-entity> <link-entity name='queue' from='queueid' to='queueid' alias='qq' link-type='outer'> <attribute name='queueviewtype'/> <\/link-entity> <filter operator='and'> <filter type ='or'> <condition entityname='qq' attribute='queueviewtype' operator='eq' value='0' /> <condition entityname='qm' attribute='systemuserid' operator='eq' value='" + Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.toString() + "' /> <\/filter> <\/filter>"
            : ""
    },
    $2nl: function(n) {
        var i = null,
            r = n.$O("entity"),
            a = r.$O("filter"),
            s = "",
            h = "",
            c = "",
            l = "",
            u = r.$O("filter") ? Microsoft.Crm.Client.Core.Framework.Utils.$6S.$1T2(a) : "",
            e,
            o,
            t;
        this.$G5 === "0"
            ? u += "<condition attribute='objecttypecode' operator='eq' value='" +
            this.$A5 +
            "' />\r\n\t\t\t\t\t\t\t\t<condition attribute='queueid' operator='eq' value='" +
            this.$Lm +
            "' />"
            : this.$G5 === "2" &&
            (u += "<filter type='and'><condition attribute='objecttypecode' operator='eq' value='" +
                this.$A5 +
                "' /><\/filter>");
        var v = "<filter type='and'>" + u + "<\/filter>", y = r.$O("link-entity"), f = this.$2hE(y);
        this.$1s5 && (f += this.$1hl("436e2293-da8f-4ef9-a1e6-fff25a5beb22".toLowerCase()));
        this.$G5 === "2" && (f += this.$1hl(this.$Lm.toLowerCase()));
        e = "";
        this.$7y().get_IsMultipleEntityGraphSupported() &&
            (o = this.$2HJ(this.$1sx), o && (e = "<filter type='and'>" + o.$7F() + "<\/filter>"));
        n.$1Q("version") && (s = " version='" + n.$1Q("version") + "' ");
        n.$1Q("output-format") && (h = " output-format='" + n.$1Q("output-format") + "' ");
        n.$1Q("mapping") && (c = " mapping='" + n.$1Q("mapping") + "' ");
        l = " distinct='true' ";
        i = "<fetch" +
            s +
            h +
            c +
            l +
            "><entity name='queueitem'><attribute name='objectid' />" +
            v +
            f +
            e +
            "<\/entity><\/fetch>";
        t = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("FetchXmlWithCallback", null);
        t.OnSuccess = this.$$d_$31l;
        t.OnFailure = this.$$d_$5J;
        t.QueryValue = i;
        this.set_DefinitionId(i);
        this.set_IsLoading(!0);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, t)
    },
    $2hE: function(n) {
        var i;
        if ($0.$1(n))
            return"<link-entity name='" +
                this.$T +
                "' from='" +
                this.$VN +
                "' to='objectid' link-type='inner'>" +
                this.$F3() +
                "<\/link-entity>";
        var r = "", u = "", f = "", e = "", t = "";
        return n
                .$1Q("name") &&
                (t = n
                    .$1Q("name"), u = " name='" + t + "' "), r = " alias='" + t + "__alias' ",
            n
                .$1Q("from") &&
                (f = " from='" + n.$1Q("from") + "' "), n
                .$1Q("to") &&
                (e = " to='" + n.$1Q("to") + "' "), this.$7y().$8S !== this.$T && (this.$1sx = t), i = Microsoft.Crm
                .Client
                .Core.Framework.Utils.$6S.$1T2(n), i += this
                .$F3(), "<link-entity " + r + u + f + e + ">" + i + "<\/link-entity >"
    },
    $31l: function(n) {
        var e = n.get_$Bp().$21O(), f, i, r;
        this.$zw = new Array(0);
        for (var u = e, o = u.length, t = 0; t < o; ++t)
            f = u[t], i = f.GetValue("objectid"), $0.$1(i.Id.toString()) || this.$zw.push(i.Id.toString());
        this.$zw.length
            ? (r = n, this.$Qx = r.get_EntityCollection().$AK, this.$xP = r.get_EntityCollection().$LX, this.$1p
                .$JW = Math.floor(this.$Qx / this.$1p.$2u), this
                .$1v =
                "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>\r\n\t\t\t\t\t\t\t\t\t<entity name='" + this.$T + "'>" + this.$Xz + this.$1TI() + "<filter type='or'>" + this.$2zI() + "<\/filter>" + this.$F3() + "<\/entity><\/fetch>")
            : (this.$1v = null, this.$qB = new Array(0), this.$Qx = 0, this.$8("IsLoading"));
        this.$1So();
        n.dispose()
    },
    $2zI: function() {
        for (var t = "", n = 0; n < this.$zw.length; n++)
            t += "<condition attribute='" + this.$VN + "' operator='eq' value='" + this.$zw[n] + "' />";
        return t
    },
    screenReaderTextForItemCount: function() {
        var n = this.$xP ? this.$Qx.toString() + " +" : this.$Qx.toString(),
            t = this.$T === "incident" ? "case" : this.$T;
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("QueuePanels_ScreenReader_ItemCount"),
            this.$KE,
            n,
            t,
            this.$15c[this.$X7])
    },
    screenReaderTextForSortIcon: function() {
        var n = this.$12B ? " descending " : " ascending ";
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("QueuePanels_ScreenReader_SortIcon"),
            this.$15c[this.$X7],
            n)
    },
    screenReaderTextForStreamName: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("QueuePanels_ScreenReader_StreamName"),
            this.$KE)
    },
    screenReaderTextForMenuButton: function() {
        var n = this.$T === "incident" ? "case" : this.$T;
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("QueuePanels_ScreenReader_MenuButton"), n)
    },
    $2RG: function() {
        var n, t, i, r;
        if (this.$Qy) {
            n = this.$Qy;
            for (t in n) i = { key: t, value: n[t] }, r = i.value, r.dispose();
            this.$Qy = null
        }
    },
    $1TG: function() { return this.$1zB },
    $2W8: function(n) { this.$1zB = n },
    $GN: function() {
        $0.$1(this.$5e) || (this.$5e.dispose(), this.$5e = null);
        this.$1m = null;
        this.$v = null;
        this.$15b = null;
        this.$NI = null;
        this.$dM = null;
        this.$T = null;
        this.$VN = null;
        this.$cK = null;
        this.$1O1 = null;
        this.$SG = null;
        this.$KN = null;
        this.$V3 = null;
        this.$KI = null;
        this.$Xz = null;
        this.$10C = null;
        this.$2G = null;
        this.$15c = null;
        this.$1IT = null;
        this.$15a = null;
        this.$14E = null;
        this.$17j = null;
        this.$1R.dispose();
        this.$rm();
        this.$2RG();
        this.$G1.dispose();
        Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Bf = function() { Microsoft.Crm.Client.Core.ViewModels.$Bf.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$Bf.prototype = {
    $7x: null,
    $X: null,
    $S: null,
    get_Command: function() { return this.$7x },
    set_Command: function(n) { return this.$7x = n, this.$21w(), n },
    get_TargetViewModel: function() { return this.$X ? this.$X : this },
    set_TargetViewModel: function(n) { return this.$X = n, this.$21w(), n },
    get_Parameters: function() { return this.$S },
    set_Parameters: function(n) { return this.$S = n, this.$21w(), n },
    $21w: function() {
        $0.$1(this.$7x) ||
        ($0.$1(this.$S) && (this.$S = {}), this
            .set_ActionCommand(Microsoft.Crm.Client.Core.ViewModels.CommandFactory
                .$y(this,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .CommandDescriptor(this.$7x, null, this.$S))));
        this.$8("QuickActionButtonUpdated")
    },
    HandleOnClick: function() {
        var f = "ExecutingQuickAction::" + this.$7x + "::" + this.$1B, n, t, r, u, i;
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y(f, 0, this.get_ViewModelId());
        $0.$1(this.$2) ||
        (n = this.get_TargetViewModel(), $0.$1(n) ||
        (n.$4z === "email"
            ? (Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(n.$FL) &&
            (t = this.$2.$12, $0.$1(t.$Tn) && (t.$Tn = {}), r = n.$FL, t.$Tn
                .InteractionWallViewModel = new Microsoft.Crm.Client.Core.ViewModels.ClientApi
                .$T0("InteractionWallViewModel", r.$BG), t.$Tn.IsInteractionWallQuickAction = new Microsoft.Crm.Client
                .Core.ViewModels.ClientApi.$T0("IsInteractionWallQuickAction", "true")), u = this.$S
                .CommandId, u === "Mscrm.Form.email.Send"
                ? this.$34K()
                : ($0.$1(this.$2.$Q) || $0.$1(this.$2.$Q.$S)
                    ? $0.$1(this.$2.$Q.$AV) ||
                    (i = this.$2.$Q.$AV, $0.$1(i.$Q) ||
                        $0.$1(i.$Q.$S) ||
                        (i.$Q.$S.OverriddenEntityId = n.$Hp.get_$H(0).Id, i.$Q.$S.OverriddenEntityName = n.$4z))
                    : (this.$2.$Q.$S.OverriddenEntityName = n.$4z, this.$2.$Q.$S.OverriddenEntityId = n.$Hp.get_$H(0)
                        .Id), this.$26.execute()))
            : this.$26.execute()))
    },
    $1Yj: function(n, t, i) {
        for (var r, o, e = t.$M.fields[i], u = [], f = 0;
            f < e.get_entities().length;
            f++
        )
            r = e.get_entities()[f].fields.partyid, o = $0.$1(r)
                ? new Microsoft.Crm.Client.Core.ViewModels.LookupControlItem("", "", "")
                : new Microsoft.Crm.Client.Core.ViewModels.LookupControlItem(r.LogicalName, r.Id.toString(), r.Name), u
                .push(o);
        n.$Tn[i] = new Microsoft.Crm.Client.Core.ViewModels.ClientApi.$T0(i, u);
        u = null
    },
    $34K: function() {
        var i = this.get_TargetViewModel(),
            r = i.$FL,
            t = r.get_$3Lu(),
            u = new Xrm.Objects.EntityReference("email", t),
            f = Microsoft.Crm.Client.Core.Framework.$15.$5v("QuickActionButtonViewModel", "QuickActionButtonViewModel"),
            n = this,
            e = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(u,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["to", "from", "cc", "bcc"]),
                Microsoft.Crm.Client.Core.ViewModels.$w.get_$Jc(),
                f).then(function(i) {
                    var r = Microsoft.Crm.Client.Core.Models.$O.$B(i), u, f;
                    $0.$1(n.$2.$Q.$S)
                        ? $0.$1(n.$2.$Q.$AV) ||
                        (u = n.$2.$Q.$AV, $0.$1(u.$Q) ||
                            $0.$1(u.$Q.$S) ||
                            (u.$Q.$S.OverriddenEntityId = t.toString(), u.$Q.$S.OverriddenEntityName = "email"))
                        : (n.$2.$Q.$S.OverriddenEntityId = t.toString(), n.$2.$Q.$S.OverriddenEntityName = "email");
                    f = n.$2.$12;
                    n.$1Yj(f, r, "bcc");
                    n.$1Yj(f, r, "from");
                    n.$1Yj(f, r, "to");
                    n.$1Yj(f, r, "cc");
                    n.$26.execute();
                    r.$69()
                },
                function(n) {
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logError(1007,
                            "Retrieve Failed for Send Email QuickAction in Interaction Wall with error : {0}",
                            n.$E)
                })
    }
};
Microsoft.Crm.Client.Core.ViewModels.$8H = function(n) {
    this.$27A = [
        "Mscrm.HomepageGrid.incident.Resolve", "Mscrm.AssignSelectedRecord", "Mscrm.DeleteSelectedRecord",
        "Mscrm.HomepageGrid.incident.Cancel", "Mscrm.HomepageGrid.incident.DoNotDecrementEntitlementTerms",
        "Mscrm.HomepageGrid.incident.RunRoutingRule", "Mscrm.AddSelectedToQueue",
        "Mscrm.HomepageGrid.incident.MergeRecords", "Mscrm.HomepageGrid.incident.AssociateParentChildCase"
    ];
    this.$273 = [
        "Mscrm.HomepageGrid.Activate", "Mscrm.HomepageGrid.Deactivate", "Mscrm.DeleteSelectedRecord",
        "Mscrm.AssignSelectedRecord"
    ];
    this.$276 = [
        "Mscrm.HomepageGrid.Activate", "Mscrm.HomepageGrid.Deactivate", "Mscrm.DeleteSelectedRecord",
        "Mscrm.AssignSelectedRecord"
    ];
    this.$27D = [
        "Mscrm.HomepageGrid.queueitem.Route", "Mscrm.HomepageGrid.queueitem.Pick",
        "Mscrm.HomepageGrid.queueitem.Release", "Mscrm.HomepageGrid.queueitem.RemoveLeo"
    ];
    this.$27B = ["Mscrm.DeleteSelectedRecord"];
    this.$27C = [];
    this.$275 = [
        "Mscrm.CloseActivity", "Mscrm.DeleteSelectedRecord", "Mscrm.AssignSelectedRecord", "Mscrm.AddSelectedToQueue",
        "Mscrm.SaveAsCompleted", "Mscrm.SaveAsCancelled", "Mscrm.SetRegardingForSelected", "Mscrm.ConvertToCase"
    ];
    this.$274 = [
        "Mscrm.DeleteSelectedRecord", "Mscrm.AssignSelectedRecord", "Mscrm.AddSelectedToQueue", "Mscrm.SaveAsCompleted",
        "Mscrm.SaveAsCancelled", "Mscrm.SetRegardingForSelected"
    ];
    this.$279 = [
        "Mscrm.DeleteSelectedRecord", "Mscrm.AssignSelectedRecord", "Mscrm.AddSelectedToQueue",
        "Mscrm.SetRegardingForSelected"
    ];
    this.$278 = [
        "Mscrm.Form.email.Send", "Mscrm.Form.email.ReplyAll", "Mscrm.Form.email.Reply", "Mscrm.Form.email.Forward",
        "Mscrm.Form.email.AttachFile", "Mscrm.AssignPrimaryRecord", "Mscrm.DeletePrimaryRecord",
        "Mscrm.Form.ConvertToCase"
    ];
    this.$27E = [
        "Mscrm.HomepageGrid.Activate", "Mscrm.HomepageGrid.Deactivate", "Mscrm.DeleteSelectedRecord",
        "Mscrm.AssignSelectedRecord"
    ];
    this.$277 = [
        "Mscrm.HomepageGrid.Activate", "Mscrm.HomepageGrid.Deactivate", "Mscrm.DeleteSelectedRecord",
        "Mscrm.AssignSelectedRecord"
    ];
    this.$JR = {};
    this.$JR.incident = this.$27A;
    this.$JR.account = this.$273;
    this.$JR.contact = this.$276;
    this.$JR.knowledgearticle = this.$27B;
    this.$JR.knowledgebaserecord = this.$27C;
    this.$JR.activitypointer = this.$1CT(n);
    this.$JR.socialprofile = this.$27E;
    this.$JR.queueitem = this.$27D;
    this.$JR.appointment = this.$1CT(n);
    this.$JR.phonecall = this.$1CT(n);
    this.$JR.task = this.$1CT(n);
    this.$JR.email = this.$279;
    this.$JR.socialactivity = this.$1CT(n);
    this.$JR.customentity = this.$277;
    this.$1RX = {};
    this.$1RX.email = this.$278
};
Microsoft.Crm.Client.Core.ViewModels.$8H.$3ML = function(n) {
    switch (n) {
    case"Mscrm.CloseActivity":
        return"Mscrm.Form.CloseActivity";
    case"Mscrm.DeleteSelectedRecord":
        return"Mscrm.DeletePrimaryRecord";
    case"Mscrm.AddSelectedToQueue":
        return"Mscrm.AddPrimaryToQueue";
    case"Mscrm.AssignSelectedRecord":
        return"Mscrm.AssignPrimaryRecord";
    case"Mscrm.ConvertToCase":
        return"Mscrm.Form.ConvertToCase";
    case"Mscrm.SaveAsCompleted":
        return"Mscrm.SavePrimaryActivityAsComplete";
    default:
        return n
    }
};
Microsoft.Crm.Client.Core.ViewModels.$8H.$1y5 = function(n, t, i, r, u) {
    var e = new Microsoft.Crm.Client.Core.ViewModels.$8H(u), f;
    if ($0.$1(n) || $0.$1(t)) return null;
    switch (t) {
    case"grid":
        f = e.$JR;
        break;
    case"form":
        f = e.$1RX;
        break;
    default:
        f = null
    }
    return n in f
        ? new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(f[n])
        : i
        ? r
        ? new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(f.activitypointer)
        : new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(f.customentity)
        : null
};
Microsoft.Crm.Client.Core.ViewModels.$8H.prototype = {
    $JR: null,
    $1RX: null,
    $1CT: function(n) { return n ? this.$275 : this.$274 }
};
Microsoft.Crm.Client.Core.ViewModels
    .QuickActionGridControlWrapper = function(n) {
        Microsoft.Crm.Client.Core.ViewModels.QuickActionGridControlWrapper.initializeBase(this, [n])
    };
Microsoft.Crm.Client.Core.ViewModels.QuickActionGridControlWrapper
    .prototype = { $1eW: null, refresh: function() { this.$1eW.$Ww() }, getCellValue: function() { return null } };
Microsoft.Crm.Client.Core.ViewModels.$Bg = function() {
    this.$$d_$3Cj = Function.createDelegate(this, this.$3Cj);
    this.$$d_$3Cl = Function.createDelegate(this, this.$3Cl);
    this.$$d_$3Ck = Function.createDelegate(this, this.$3Ck);
    this.$$d_$3DM = Function.createDelegate(this, this.$3DM);
    this.$gu = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf));
    this.$Wq = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf));
    this.$Wp = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf));
    this.$gv = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf));
    Microsoft.Crm.Client.Core.ViewModels.$Bg.resolveInheritance();
    this.get_Id = this.get_$1Z;
    this.set_Id = this.set_$1Z;
    this.get_$OS = this.get_IsSelected;
    this.set_$OS = this.set_IsSelected;
    this.get_$2W = this.get_PrimaryModelName;
    this.set_$2W = this.set_PrimaryModelName;
    this.get_Root = this.get_$4J;
    this.set_Root = this.set_$4J;
    this.get_$Dp = this.get_IsDisposed;
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    Microsoft.Crm.Client.Core.ViewModels.$Bg.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$Bg.prototype = {
    $4z: null,
    $Pr: null,
    $14H: null,
    $16c: null,
    $1ZL: !1,
    $1r8: !1,
    $F5: !1,
    $mk: !1,
    $Hp: null,
    $FL: null,
    get_TargetViewModelContext: function() { return this.$FL },
    set_TargetViewModelContext: function(n) { return this.$FL = n, n },
    $pX: null,
    $wf: null,
    $16i: null,
    $pY: null,
    get_Context: function() { return this.$pY },
    set_Context: function(n) { return this.$pY = n, n },
    get_Entity: function() { return this.$4z },
    set_Entity: function(n) { return this.$4z = n, this.set_PrimaryModelName(this.$4z), this.$1x && this.$2MZ(), n },
    get_queueContainerQuickActionPopup: function() { return this.$1ZL },
    set_queueContainerQuickActionPopup: function(n) {
        return this.$1ZL = n, this.$8("QueueContainerQuickActionPopup"), n
    },
    get_interactionWallQuickActionPopup: function() { return this.$1r8 },
    set_interactionWallQuickActionPopup: function(n) {
        return this.$1r8 = n, this.$8("InteractionWallQuickActionPopup"), n
    },
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.$8e.prototype.$17.call(this);
        this.$Hp = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.EntityReference));
        this.$16c = new Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel;
        this.$16i = new Microsoft.Crm.Client.Core.ViewModels.QuickActionGridControlWrapper(this.$16c);
        this.$16i.$1eW = this;
        $0.$1(this.$4z) || this.$2MZ()
    },
    $1db: function(n) { return n.val = this.$Pr, !0 },
    $3UE: function(n) {
        if (!$0.$1(this.$FL)) {
            var t = this.$FL.get_State();
            return n.val = t, !0
        }
        return!1
    },
    $3UF: function(n) {
        if (!$0.$1(this.$FL)) {
            var t = this.$FL.get_State();
            return n.val = Microsoft.Crm.Client.Core.ViewModels.InteractionWallResultState.toString(t), !0
        }
        return!1
    },
    $3UG: function(n) { return $0.$1(this.$FL) ? !1 : (n.val = this.$FL.get_$3Sp(), !0) },
    get_$37R: function() { return!0 },
    get_$373: function() { return!1 },
    get_$2mo: function() { return[this.$4z] },
    get_$2mp: function() { return this.$$d_$3DM },
    $GN: function() {
        var n, t, i, r;
        this.$Hp = null;
        this.$FL = null;
        this.$pX = null;
        this.$wf = null;
        this.$16i = null;
        $0.$1(this.$16c) || (this.$16c.dispose(), this.$16c = null);
        this.$l3(n = { val: this.$gu });
        this.$gu = n.val;
        this.$l3(t = { val: this.$Wp });
        this.$Wp = t.val;
        this.$l3(i = { val: this.$gv });
        this.$gv = i.val;
        this.$l3(r = { val: this.$Wq });
        this.$Wq = r.val;
        this.$gu = null;
        this.$Wp = null;
        this.$gv = null;
        this.$Wq = null;
        this.$14H = null;
        Microsoft.Crm.Client.Core.ViewModels.$8e.prototype.$GN.call(this)
    },
    $l3: function(n) {
        if (!$0.$1(n.val)) {
            for (var t = 0; t < n.val.get_Count(); ++t)
                $0.$1(n.val.get_$H(t)) || (n.val.get_$H(t).dispose(), n.val.set_$H(t, null));
            n.val.clear()
        }
    },
    $2MZ: function() {
        var n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveMultipleEntityMetadataAction", null);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, n)
    },
    $3DM: function(n) {
        this.$F5 = n[0].$F5;
        this.$mk = n[0].get_$9N();
        this.$3QZ();
        this.$3A2()
    },
    $3QZ: function() { this.$Pr = this.$mk && this.$4z !== "email" ? "activitypointer" : this.$4z },
    $3A2: function() {
        (this.$14H = Microsoft.Crm.Client.Core.ViewModels.$8H
                .$1y5(this.$4z,
                    this.$pY,
                    this.$F5,
                    this.$mk,
                    Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(this.$FL)), this
                .$14H) &&
            this.$1y5(Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(this.$FL))
    },
    $3Ck: function(n) {
        this.$pX = n;
        this.$2kJ();
        this.$2kK()
    },
    $3Cl: function(n) {
        this.$wf = n;
        this.$1y5(!1)
    },
    $1y5: function(n) {
        var i = this.$2yQ(n),
            t = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("RetrieveCommandSet", i);
        t.OnSuccess = this.$$d_$3Ck;
        t.OnSuccess = n ? this.$$d_$3Cl : this.$$d_$3Ck;
        t.OnFailure = this.$$d_$3Cj;
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2T("ActionProvider", this, t)
    },
    $3Cj: function() { throw Error.create("QuickActionViewModel: Command Set Retrieval Failed"); },
    $2kJ: function() {
        var n;
        this.$l3(n = { val: this.$gu });
        this.$gu = n.val;
        this.$2M5(this.$pX.$FS.Controls);
        this.$8("QuickActionButtonCreated")
    },
    $2M5: function(n) {
        for (var t, r, u, f = n, e = f.length, i = 0; i < e; ++i) {
            t = f[i];
            switch (t.ControlType) {
            case"Button":
                r = t.Command.split("|");
                u = r[r.length - 1];
                this.$14H && this.$14H.contains(u) && this.$2bv(t, u);
                break;
            case"Group":
            case"Tab":
            case"FlyoutAnchor":
                this.$2M5(t.Children)
            }
        }
    },
    $2bv: function(n, t) {
        var u = this.$pX.$FS.Commands, r = u[this.$Pr][t], i = new Microsoft.Crm.Client.Core.ViewModels.$Bf;
        $0.$1(r) ||
        (n.CommandParameters.entityLogicalName = this.$Pr, n.CommandParameters.CommandId = t, n.CommandParameters
            .RibbonActionHandler = r.Actions, n.CommandParameters.TargetViewModel = this, i
            .set_Command("WebResourceCommand"), i.set_Parameters(n.CommandParameters), i.set_Label(n.LabelText), i
            .set_TargetViewModel(this), i.set_$4J(this.$2), i.set_$1Z(n.Id), this.$gu.contains(i) || this.$gu.add(i))
    },
    $2kK: function() {
        var i, r, u, n;
        this.$l3(i = { val: this.$Wq });
        this.$Wq = i.val;
        this.$l3(r = { val: this.$Wp });
        this.$Wp = r.val;
        this.$l3(u = { val: this.$gv });
        this.$gv = u.val;
        for (var f = this.$gu
                     .toArray(),
            e = f.length,
            t = 0;
            t < e;
            ++t)
            n = f[t], Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(this.$FL)
                ? this.$354(n)
                : this.$pY === "form" ? this.$Wq.add(n) : this.$2QX(n)
    },
    $2QX: function(n) {
        var f = n.$S.CommandId, e = this.$pX.$FS.Commands, r = e[this.$Pr][f], t, i, u;
        if (!$0.$1(r)) {
            if (t = r.EnableRules, !t.length ||
                Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(this.$FL)) {
                this.$Wq.add(n);
                return
            }
            if (i = this.$32R(t), !$0.$1(i)) {
                u = this.$2nS(i);
                switch (u) {
                case 0:
                    this.$Wq.add(n);
                    break;
                case 1:
                    this.$Wp.add(n);
                    break;
                case 2:
                    this.$gv.add(n)
                }
            }
        }
    },
    $354: function(n) {
        var t = n.$S.CommandId,
            o = Microsoft.Crm.Client.Core.ViewModels.$8H.$3ML(t),
            s = this.$wf.$FS.Commands,
            r = s[this.$Pr][o],
            h = this.$wf.$FS.Rules[this.$Pr],
            c = this.$wf.$FS.DisplayRules[this.$Pr],
            e,
            w;
        if (!$0.$1(r)) {
            var l = r.EnableRules,
                a = r.DisplayRules,
                u = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
                f = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.ViewModels.$91),
                v = this,
                i = l.map(function(n) { return f.$1QY(h[n], v) }),
                y = this,
                p = a.map(function(n) { return f.$1QY(c[n], y) });
            i = i.concat.apply(i, p);
            e = this;
            w = this;
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i).then(function(i) {
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(139, "Quick Actions : Evaluated [{1}] rules for command [{0}]", t, i.length);
                    var r = i.reduce(function(n, t) { return!!(n & t) }, !0);
                    r && e.$2QX(n);
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(139,
                            'Quick Actions : Evaluation of {2} rules for command [{0}] succeeded with result: {1}")',
                            t,
                            r,
                            i.length);
                    u.resolve(r)
                },
                function(n) {
                    Microsoft.Crm.Client.Core.Framework.Trace
                        .logInfo(139,
                            'Quick Actions : Evaluation of rules for command [{0}] failed with message: {1}")',
                            t,
                            n.$E);
                    u.reject(n)
                })
        }
    },
    $32R: function(n) {
        for (var f, e, r, u = n, s = u.length, t = 0; t < s; ++t) {
            f = u[t];
            e = this.$pX.$FS.Rules[this.$Pr][f];
            for (var o = e.Rules, h = o.length, i = 0; i < h; ++i) if (r = o[i], r.RuleType === 5) return r
        }
        return null
    },
    $2nS: function(n) {
        var t = n;
        return t.Minimum === 1 && t.Maximum === 1
            ? 0
            : t.Minimum === 1 && t.Maximum === -1 ? 1 : t.Minimum === 2 && t.Maximum === -1 ? 2 : 3
    },
    $2yQ: function(n) {
        return this.$pY === "form" || n
            ? "Form:" + this.$Pr
            : this.$pY === "grid" ? "HomePageGridItem:" + this.$Pr : null
    },
    getQuickActionButtonViewModels: function() {
        var n, t;
        return Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$1Mo("QuickActionsShown", 0, this.get_ViewModelId()),
            this.$Hp && this.$Hp.get_Count()
                ? this.$Hp.get_Count() === 1
                ? (n = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf)), n
                    .addRange(this.$Wq.toArray()), n.addRange(this.$Wp.toArray()), n.toArray())
                : (t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.$Bf)), t
                    .addRange(this.$Wp.toArray()), t.addRange(this.$gv.toArray()), t.toArray())
                : null
    },
    getQuickActionButtonViewModelCount: function() {
        return this.$Hp && this.$Hp.get_Count()
            ? this.$Hp.get_Count() === 1
            ? this.$Wq.get_Count() + this.$Wp.get_Count()
            : this.$Wp.get_Count() + this.$gv.get_Count()
            : 0
    },
    handleQueueItemSelection: function(n, t, i) {
        var e = n, r, f;
        if (t)
            r = new Mscrm.EntityReference, r.Id = e.toString(), r.TypeCode = Xrm.Internal.getEntityCode(i), this.$Hp
                .add(r);
        else
            for (var o = this.$Hp
                         .toArray(),
                s = o.length,
                u = 0;
                u < s;
                ++u) f = o[u], f.Id === e.toString() && this.$Hp.remove(f);
        this.$1ZL = !1;
        this.$10H("SelectionCountChanged", "QueueContainerQuickActionPopup")
    },
    $2bR: function(n, t) {
        var r = n, i = new Mscrm.EntityReference;
        i.Id = r.toString();
        i.TypeCode = Xrm.Internal.getEntityCode(t);
        this.$Hp.add(i)
    },
    $1OR: function() {
        this.$Hp.clear();
        this.$8("SelectionCountChanged")
    },
    $Ww: function() {
        var t, n;
        Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel.isInstanceOfType(this.$FL)
            ? (t = this.$FL.get_ParentViewModel(), t.$Ww(), t.$2HR().$9F.raiseEvent(Function, null))
            : Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel.isInstanceOfType(this.$FL) &&
            (n = this.$FL.$BG, n.$2p = "InteractionWallQuickActionRefresh", n.refreshData(), n.$2p = "")
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Ep = function() { Microsoft.Crm.Client.Core.ViewModels.$Ep.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.$Ep.prototype = {
    RefreshData: function() { this.$5j().refreshWithoutScriptReload() },
    $5j: function() { return this.$2 }
};
Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel = function() {
    Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel.prototype = {
    $2N6: 30,
    get_MaximumLengthOfTag: function() { return this.$2N6 },
    $3II: function() {
        var n = this;
        this.$1BD.sort(function(n, t) {
            var i = n, r = t, u = Number.parseInvariant(i.$zv), f = Number.parseInvariant(r.$zv);
            return f !== u ? f - u : i.$3R.localeCompare(r.$3R)
        })
    }
};
Microsoft.Crm.Client.Core.ViewModels.$FJ = function() {
    this.$$d_HandleViewNameSet = Function.createDelegate(this, this.HandleViewNameSet);
    Microsoft.Crm.Client.Core.ViewModels.$FJ.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.$FJ.prototype = {
    $PT: null,
    get_ViewName: function() { return this.$PT },
    set_ViewName: function(n) { return this.$PT = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this), this.$2.get_EventHandler()
            .$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d,
                this.$$d_HandleViewNameSet))
    },
    HandleViewNameSet: function(n) {
        this.$PT = n.$PT;
        this.$PT &&
        (this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d,
            this.$$d_HandleViewNameSet), this.$8("ViewNameSet"))
    },
    $GN: function() {
        this.$PT = null;
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d,
            this.$$d_HandleViewNameSet);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel = function() {
    this.$1BD = [];
    this.$vZ = [];
    Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel.prototype = {
    $aX: null,
    $VY: null,
    $5H: null,
    get_Title: function() { return this.$5H },
    set_Title: function(n) { return this.$5H = n, n },
    get_Data: function() { return this.$PL && (this.$PL = !1, this.set_IsLoading(!0), this.$Ke()), this.$1BD },
    get_SelectedElements: function() { return this.$vZ },
    set_SelectedElements: function(n) { return this.$vZ = n, n },
    $2mP: function(n) {
        var t = n.$1Mq[0];
        if (Microsoft.Crm.Client.Core.Models.$8i.isInstanceOfType(t)) {
            if (this.$VY.get_$27().get_Count() === 2) {
                var u = t,
                    i = Number.parseInvariant(u.Value.toString()),
                    f = Number.parseInvariant(this.$VY.get_$27().get_$H(0).get_$2M().toString()),
                    e = Number.parseInvariant(this.$VY.get_$27().get_$H(1).get_$2M().toString());
                return i >= f && i <= e
            }
        } else if (Microsoft.Crm.Client.Core.Models.$7l.isInstanceOfType(t) && this.$VY.get_$27().get_Count() === 2) {
            var r = t,
                o = new Date(Date.parse(this.$VY.get_$27().get_$H(0).get_$2M().toString())),
                s = new Date(Date.parse(this.$VY.get_$27().get_$H(1).get_$2M().toString()));
            return r.MinDate >= o && r.MaxDate <= s
        }
        return!!Number.parseInvariant(n.$zv)
    },
    get_SelectedIdsDictionary: function() {
        var n, t, r, i;
        if ($0.$1(this.$aX)) {
            if (n = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("VisualFilter_GetSelectedIdsDictionary"), n.start(), this.$aX = {}, this
                .$j9)
                for (t = 0;
                    t < this.get_Data().length;
                    t++
                ) this.$2mP(this.get_Data()[t]) && (this.$aX[this.get_Data()[t].$3R] = !0);
            else for (r = this.$vZ, i = 0; i < r.length; ++i) this.$aX[r[i]] = !0;
            n.stop();
            n.addParameter(this.get_ViewModelId());
            n.addParameter(this.$I)
        }
        return this.$aX
    },
    set_SelectedIdsDictionary: function(n) { return this.$aX = n, n },
    $j9: !1,
    get_FilterEventHadRangeQuery: function() { return this.$j9 },
    set_FilterEventHadRangeQuery: function(n) { return this.$j9 = n, n },
    $1L2: !1,
    get_IsError: function() { return this.$1L2 },
    set_IsError: function(n) { return this.$1L2 = n, n },
    $bT: null,
    get_ErrorTitle: function() { return this.$bT },
    set_ErrorTitle: function(n) { return this.$bT = n, n },
    $PL: !1,
    get_LazyLoad: function() { return this.$PL },
    set_LazyLoad: function(n) { return this.$PL = n, n },
    $UT: null,
    get_ErrorMessage: function() { return this.$UT },
    set_ErrorMessage: function(n) { return this.$UT = n, n },
    GetElementPrimaryId: function(n) {
        var t = n[0];
        return $0.$1(t) ? "" : t.Value
    },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.$AI.prototype.$17.call(this), this.$PL = !1, this.$j9 = !1, this
            .$aX = null, this.$VY = null)
    },
    $Ke: function() {
        if (!$0.$1(this.$A8)) {
            var n = this;
            this.$2Ma().done(function() {
                if (n.$1s7()) n.$2IJ();
                else {
                    n.set_IsLoading(!0);
                    var t = n.$A8.$4W();
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(t)
                }
                n.$SH.start()
            })
        }
    },
    $3II: function() {},
    $21j: function() {
        var i, t, n;
        if (this.$SH.stop(), this.$SH.addParameter(this.get_ViewModelId()), this.$SH.addParameter(this.$I), $0
            .$1(this.$FT)) {
            this.set_IsLoading(!1);
            return
        }
        for (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$1Mo(this
                    .$XY
                    ? "RenderedRefreshedData"
                    : "LoadedInitialData",
                    0,
                    this.get_ViewModelId()), this.$XY || (this.$Ib("RenderedInitialData"), this.$XY = !0), this
                .$1BD = [], i = this.$FT.$N6[0].Values, t = this.$FT.$Ec[0].DataPoints, n = 0;
            n < i.length;
            ++n) {
            var r = i[n], u = t[n].Value.toString(), f = t[n].Aggregators;
            this.$1BD[n] = new Microsoft.Crm.Client.Core.Models
                .EntityCountForAttributeValue(r, u, t[n].FormattedValue.toString(), f)
        }
        this.$3II();
        this.$2A ? this.set_IsLoading(!1) : this.$8("Data");
        this.$2ZO()
    },
    HandleApplyFilter: function(n, t) { this.$5j() && this.$2eB(n, t) },
    OnFilterChangeCompletedEvent: function(n) {
        var h, c, e, o, u, i, f, t, r, s;
        if (this.$5j().get_IsMultipleEntityGraphSupported()) {
            c = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$Gj) ? "" : n.$NB.toString(),
                    n.$g);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(c);
            this.$tF = {};
            e = n.$NB;
            for (o in e) u = { key: o, value: e[o] }, $0.$1(n.$NB[u.key]) || (this.$tF[u.key] = n.$NB[u.key].$7F())
        } else
            h = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    $0.$1(n.$Gj) ? "" : n.$Gj.$7F(),
                    n.$g), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                .$1w(h), this.$11e = n.$Gj.$7F();
        if (this.$K7) {
            for (i = this.$K7
                    .$pQ, f = !1, t = 0;
                t < i.get_Count();
                t++)
                r = null, this.$5j().get_IsMultipleEntityGraphSupported()
                    ? (s = this.$1Sv(i.get_$H(t)), $0.$1(n.$NB[s]) || (r = n.$NB[s].$F3(i.get_$H(t))))
                    : r = n.$Gj.$F3(i.get_$H(t)), $0.$1(r) ||
                    (f || (f = !0, this.$vZ = [], this.$aX = null), this.$33d(r));
            f || (this.$vZ = [], this.$aX = null, this.$j9 = !1, this.$VY = null)
        }
        if (!this.$XY) {
            this.$PL = !0;
            return
        }
        this.$Ke()
    },
    $33d: function(n) {
        if (!$0.$1(n) && n.get_$27().get_Count() > 0)
            if (n.get_$27().get_$H(0).get_$Jj() !== "eq") this.$j9 = !0, this.$VY = n.$88();
            else {
                this.$j9 = !1;
                this.$VY = null;
                for (var t = 0; t < n.get_$27().get_Count(); t++) this.$vZ.push(n.get_$27().get_$H(t).get_$2M())
            }
    },
    $1DI: function(n, t) {
        this.$1L2 = !0;
        this.$bT = n;
        this.$UT = t;
        this.$8("Data")
    },
    VisualFilterHeaderScreenReaderLabel: function(n) {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("VisualFilterHeader_ScreenReader_Label"),
            n,
            this.$5H)
    },
    PrimaryEntityDisplayName: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.get_$ug()).$1P
    },
    PrimaryEntityPluralName: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.get_$ug()).$8N
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Controls");
Microsoft.Crm.Client.Core.ViewModels.Controls.$68 = function() {};
Microsoft.Crm.Client.Core.ViewModels.Controls.$68.$yh = function(n) {
    var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$S9.get_$H(n.toString());
    return $0.$1(t) ? !1 : t.$Na
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
    .$Cp = function() { Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cp.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cp.prototype = {
    $1Af: null,
    $Gr: "",
    get_DataField: function() { return this.$1Af },
    set_DataField: function(n) { return this.$1Af = n, this.SetupData(), n },
    get_SpecifyFieldErrorTitle: function() {
        return String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ReferencePanel_QuickView_SpecifyField"),
            this.get_BindingField())
    },
    get_BindingField: function() {
        return Microsoft.Crm.Client.Core.Framework.$3.$A(this.$Gr)
            ? null
            : $0.$1(Xrm.Page.getControl(this.$Gr)) ? this.$Gr : Xrm.Page.getControl(this.$Gr).getLabel()
    },
    set_BindingField: function(n) { return this.$Gr = n, n },
    $xq: !1,
    get_ShouldShowSpecifyFieldError: function() { return this.$xq },
    set_ShouldShowSpecifyFieldError: function(n) { return this.$xq = n, n },
    $17: function() {
        this.$1x || (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this), this.SetupData())
    },
    SetupData: function() {
        var t, i, e, o, r, u, f, s, n;
        if ($0.$1(this.$1Af)) {
            t = this.$F;
            for (i in t) e = { key: i, value: t[i] }, o = e.value, o.set_Rerender(!1);
            this.$xq = !0;
            this.$8("Render");
            return
        }
        r = this.$1Af;
        this.$xq = !0;
        u = this.$F;
        for (f in u)
            s = { key: f, value: u[f] }, n = s.value, n.get_Name() === r.LogicalName
                ? (this.$xq = !1, n.set_RecordId(r), n.set_Rerender(!0), n.set_SetActionable(!0), n.$Ww())
                : n.set_Rerender(!1);
        this.$8("Render")
    },
    $GN: function() {
        var i = this.$F, n, r, t;
        for (n in i) r = { key: n, value: i[n] }, t = r.value, t && this.$1Q3(t);
        this.set_DataField(null);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel = function() {
    this.$$d_$138 = Function.createDelegate(this, this.$138);
    this.$$d_$HW = Function.createDelegate(this, this.$HW);
    this.$$d_HandleFilterChangeInitiatedEvent = Function.createDelegate(this, this.HandleFilterChangeInitiatedEvent);
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel
        .initializeBase(this, [37]);
    this.$1E2 = !1;
    this.$8S = "incident";
    this.$PM = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "incident");
    this.$Rf = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "incident");
    this.$Lj = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, "incident");
    this.set_DashboardCategory("1_0");
    this.$9F = new Microsoft.Crm.Client.Core.Framework.$DM;
    this.get_IsMultipleEntityGraphSupported() &&
    (this.$FH = {}, this.$FH.incident = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
        .$5n(0, "incident"), this.$Iq = {}, this.$Iq.incident = new Microsoft.Crm.Client.Core.Storage.Common
        .FetchExpression.$5n(0, "incident"), this.$Ej = {}, this.$Ej.incident = new Microsoft.Crm.Client.Core.Storage
        .Common.FetchExpression.$5n(0, "incident"), this.$jQ = {})
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel
    .$b6 = function(n, t, i, r) {
        for (var u, e = t.toArray(), o = e.length, f = 0;
            f < o;
            ++f
        ) u = e[f], i && n.$Mr(u.get_$O6()), r ? n.$6X(u.$88()) : n.$6X(u)
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel.prototype = {
    $1Ah: !0,
    $9F: null,
    get_EventHandler: function() { return this.$9F },
    set_EventHandler: function(n) { return this.$9F = n, n },
    $1E2: !1,
    $dR: null,
    get_IsMultipleEntityGraphSupported: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("InteractionCentricMultiEntityChartsFeature")
    },
    $Lf: null,
    get_FilterByAttributeName: function() { return this.$Lf },
    set_FilterByAttributeName: function(n) { return this.$Lf = n, n },
    $1Kd: null,
    get_FilterByAttributeId: function() { return this.$1Kd },
    set_FilterByAttributeId: function(n) { return this.$1Kd = n, n },
    $1L5: !1,
    get_IsFilterByAttributeSecured: function() { return this.$1L5 },
    set_IsFilterByAttributeSecured: function(n) { return this.$1L5 = n, n },
    get_DashboardCategory: function() { return this.$dR },
    set_DashboardCategory: function(n) {
        if (!$0.$1(n)) {
            var t = n.split("_");
            t.length > 1 && (this.$1E2 = t[1] === "1" ? !0 : !1);
            this.$dR = t[0]
        }
        return n
    },
    $8S: null,
    get_PrimaryEntity: function() { return this.$8S },
    set_PrimaryEntity: function(n) { return this.$8S = n, n },
    $Rf: null,
    get_DateRangeFilter: function() { return this.$Rf },
    set_DateRangeFilter: function(n) { return this.$Rf = n, n },
    $Lj: null,
    get_PrimaryEntityFilterExludingDateRange: function() { return this.$Lj },
    set_PrimaryEntityFilterExludingDateRange: function(n) { return this.$Lj = n, n },
    $PM: null,
    get_PrimaryEntityFilter: function() { return this.$PM },
    set_PrimaryEntityFilter: function(n) { return this.$PM = n, n },
    $Iq: null,
    $Ej: null,
    $FH: null,
    $jQ: null,
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$C(this.$1Cu("Initialize"),
                2001,
                {
                    PrimaryEntity: this.$8S,
                    DashboardCategory: this.$dR,
                    FilterByAttributeName: this.$Lf,
                    IsEntityDashboard: this.$1E2
                },
                "FirstLoad");
        this.$1x ||
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$6Y("InteractionCentricDashboard_Initialize", 1, this.get_ViewModelId()), Microsoft.Crm.Client.Core
            .ViewModels.RootViewModel.prototype.$17.call(this), this.$9F
            .$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m,
                this.$$d_HandleFilterChangeInitiatedEvent));
        this.$3W0();
        $0.$1(this.$2) ||
            (this.$2.$Xn && this.$HW(null, null), this.$2.add_$Tf(this.$$d_$HW), this.$2.add_$ng(this.$$d_$138))
    },
    $1Cu: function(n) { return"InteractionCentricDashboardViewModel-" + this.$11 + " (" + n + ")" },
    $3W0: function() {
        var i, n, t;
        this.$1L5 &&
            this.$1Ah &&
            (Microsoft.Crm.Client.Core.ViewModels.Controls.$68.$yh(this.$1Kd) ||
            (Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
                .$1F(this.$1Cu("ValidateFilterByAttribute"),
                    2001,
                    { Warning: "(ValidateFilterByAttribute) User doesn't have read access to attribute " + this.$Lf },
                    "NoReadLevelAccessOnAttribute"), this.$1Ah = !1, i = this, Microsoft.Crm.Client.Core.ViewModels.$Z
                .$3S9(Microsoft.Crm.Client.Core.Framework.Common.$2
                    .$6("Error_Title_ServiceDesk_AccessDenied_DateRange"),
                    Microsoft.Crm.Client.Core.Framework.Common.$2
                    .$6("Error_Message_ServiceDesk_AccessDenied_DateRange"),
                    function() {}), n = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$Lf), n
                .$9o(this.$Lf, "on-or-after", "2015-01-01T00:00:00"), n
                .$9o(this
                    .$Lf,
                    "on-or-before",
                    "2014-01-01T00:00:00"), this.get_IsMultipleEntityGraphSupported()
                ? (this.$Iq[this.$8S].$Mr(this.$Lf), this.$Iq[this.$8S].$6X(n), t = new Microsoft.Crm.Client.Core
                    .ViewModels.Controls.InteractionCentric.Events.$5m(this.$Lf, 2, 0, null), t.$Ki = this.$Iq)
                : (this.$Rf.$Mr(this.$Lf), this.$Rf.$6X(n), t = new Microsoft.Crm.Client.Core.ViewModels.Controls
                    .InteractionCentric.Events.$5m(this.$Lf, 2, 0, this.$Rf)), this.$2.$9F
                .raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m, t)))
    },
    $HW: function() {
        var n = this;
        Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(function() {
                n.$39s();
                window.localStorage.setItem("isMarsISHDashboard", "true")
            },
            -9,
            "JobLoadMarsScripts")
    },
    $138: function() {},
    $39s: function() {
        var r = Xrm.Page.context.getClientUrl(),
            t = "/WebResources/msdyn_LoadGuidedHelpMoCA.js",
            i = $get("CustomScriptsIFrame"),
            u = i.contentDocument.getElementById(r + t),
            n;
        $0.$1(u) &&
        (n = i.contentDocument.createElement("script"), n.setAttribute("type", "text/javascript"), n
            .setAttribute("id", t), n.setAttribute("src", r + t), i.contentDocument.body.appendChild(n))
    },
    $2Mp: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$C(this.$1Cu("HandleFilterChangeInitiatedEvent"),
                2001,
                {
                    SourceId: n.$g,
                    Filtertype: n.$H5,
                    FilterEventType: n.$lX,
                    FilterExpression: $0.$1(n.$6o) ? "" : n.$6o.$7F()
                },
                "FilterChangeInitiated")
    },
    HandleFilterChangeInitiatedEvent: function(n) {
        var r, i, u, t, f, e;
        if (this.get_IsMultipleEntityGraphSupported()) this.$33n(n);
        else {
            if (this.$2Mp(n), r = "", i = "", n.$lX) {
                if (n.$lX === 1) {
                    f = new Microsoft.Crm.Client.Core.Framework
                        .PerformanceStopwatch("InteractionCentricDashboard_FilterChangeInitiatedEvent_FilterRemoved");
                    f.start();
                    r = "FilterChangeInitiatedEvent.FilterRemoved";
                    switch (n.$H5) {
                    case 1:
                        this.$Lj.$76();
                        i = "Aggregated";
                        break;
                    case 0:
                        this.$PM.$Mr(n.$g);
                        i = "Individual"
                    }
                    f.stop();
                    f.addParameter(this.get_ViewModelId())
                }
            } else {
                u = new Microsoft.Crm.Client.Core.Framework
                    .PerformanceStopwatch("InteractionCentricDashboard_FilterChangeInitiatedEvent_FilterChanged");
                u.start();
                r = "FilterChangeInitiatedEvent.FilterChanged";
                t = n.$6o;
                switch (n.$H5) {
                case 2:
                    this.$1Ah && (i = "Global", this.$Rf.$Mr(t.get_$O6()), this.$Rf.$6X(t));
                    break;
                case 1:
                    this.$Lj = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$8S);
                    i = "Aggregated";
                    $0.$1(t) ||
                        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                        .InteractionCentricDashboardViewModel.$b6(this.$Lj, t.get_$5U(), !1, !0);
                    break;
                case 0:
                    $0.$1(t) ||
                    (i = "Individual", t.get_$5U().get_Count()
                        ? Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                        .InteractionCentricDashboardViewModel.$b6(this.$Lj, t.get_$5U(), !0, !0)
                        : (this.$Lj.$Mr(t.get_$O6()), this.$Lj.$6X(t.$88())))
                }
                u.stop();
                u.addParameter(this.get_ViewModelId())
            }
            e = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I, i, r, $0.$1(n.$6o) ? "" : n.$6o.$7F(), n.$g);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(e);
            this.$2RL(n)
        }
    },
    $33n: function(n) {
        var o, i, s, r, l, a, u, h, v, y, e, p, w, b, t, f, c, k, d, g, nt, tt, it, rt;
        if (this.$2Mp(n), o = "", i = "", n.$lX) {
            if (n.$lX === 1) {
                c = new Microsoft.Crm.Client.Core.Framework
                    .PerformanceStopwatch("InteractionCentricDashboard_FilterChangeInitiatedEvent_FilterRemoved");
                c.start();
                o = "FilterChangeInitiatedEvent.FilterRemoved";
                switch (n.$H5) {
                case 1:
                    i = "Aggregated";
                    k = this.$Ej;
                    for (d in k) g = { key: d, value: k[d] }, $0.$1(this.$Ej[g.key]) || this.$Ej[g.key].$76();
                    break;
                case 0:
                    i = "Individual";
                    nt = this.$FH;
                    for (tt in nt)
                        it = { key: tt, value: nt[tt] }, $0.$1(this.$FH[it.key]) || this.$FH[it.key].$Mr(n.$g)
                }
                c.stop();
                c.addParameter(this.get_ViewModelId())
            }
        } else {
            s = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("InteractionCentricDashboard_FilterChangeInitiatedEvent_FilterChanged");
            s.start();
            o = "FilterChangeInitiatedEvent.FilterChanged";
            $0.$1(n.$6o) || ($0.$1(n.$Ki) && (n.$Ki = {}), n.$Ki[this.$8S] = n.$6o);
            r = n.$Ki;
            switch (n.$H5) {
            case 2:
                if (i = "Global", this.$1Ah) {
                    $0.$1(this.$Iq) && (this.$Iq = {});
                    l = r;
                    for (a in l)
                        u = { key: a, value: l[a] }, $0.$1(this.$Iq[u.key]) &&
                        (this.$Iq[u.key] = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                            .$5n(0, u.key)), h = r[u.key], $0.$1(h) ||
                            (this.$Iq[u.key].$Mr(h.get_$O6()), this.$Iq[u.key].$6X(h))
                }
                break;
            case 1:
                i = "Aggregated";
                $0.$1(n.$Ki) && (this.$Ej = {});
                this.$Ej[this.$8S] = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$8S);
                v = r;
                for (y in v)
                    e = { key: y, value: v[y] }, this.$Ej[e.key] = new Microsoft.Crm.Client.Core.Storage.Common
                        .FetchExpression.$5n(0, e.key), p = r[e
                        .key], $0.$1(p) ||
                        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                        .InteractionCentricDashboardViewModel.$b6(this.$Ej[e.key], p.get_$5U(), !1, !0);
                break;
            case 0:
                i = "Individual";
                w = r;
                for (b in w)
                    t = { key: b, value: w[b] }, f = r[t
                        .key], $0.$1(f) ||
                    (t.key in this.$Ej ||
                    (this.$Ej[t.key] = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                        .$5n(0, t.key)), f.get_$5U().get_Count()
                        ? Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                        .InteractionCentricDashboardViewModel.$b6(this.$Ej[t.key], f.get_$5U(), !0, !0)
                        : (this.$Ej[t.key].$Mr(f.get_$O6()), this.$Ej[t.key].$6X(f.$88())))
            }
            s.stop();
            s.addParameter(this.get_ViewModelId())
        }
        rt = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
            .$SL(this.$I, i, o, $0.$1(n.$Ki) ? "" : n.$Ki.toString(), n.$g);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(rt);
        this.$2RL(n)
    },
    $2RL: function(n) {
        var r, u, f, i, e, o, t, s;
        if (this.get_IsMultipleEntityGraphSupported()) {
            this.$FH = {};
            u = this.$Iq;
            for (f in u)
                i = { key: f, value: u[f] }, this.$FH[i.key] = new Microsoft.Crm.Client.Core.Storage.Common
                    .FetchExpression.$5n(0, i.key), Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                    .InteractionCentricDashboardViewModel.$b6(this.$FH[i.key], this.$Iq[i.key].$CW, !1, !1);
            e = this.$Ej;
            for (o in e)
                t = { key: o, value: e[o] }, t.key in this.$FH ||
                (this.$FH[t.key] = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression
                    .$5n(0, t.key)), Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                    .InteractionCentricDashboardViewModel.$b6(this.$FH[t.key], this.$Ej[t.key].$CW, !1, !1);
            s = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5O(this.$I, null, n, this.$FH);
            this.$2Mo(s);
            this.$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O, s)
        } else
            this.$PM = new Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.$5n(0, this.$8S), Microsoft.Crm
                .Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel
                .$b6(this.$PM, this.$Rf.get_$5U(), !1, !1), Microsoft.Crm.Client.Core.ViewModels.Controls
                .InteractionCentric.InteractionCentricDashboardViewModel
                .$b6(this.$PM, this.$Lj.get_$5U(), !1, !1), r = new Microsoft.Crm.Client.Core.ViewModels.Controls
                .InteractionCentric.Events.$5O(this.$I, this.$PM, n, null), this.$2Mo(r), this.$9F
                .raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O, r)
    },
    $2Mo: function(n) {
        if (!$0.$1(n.$Gj)) {
            var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$SL(this.$I,
                    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z.toString(n.$UO.$H5),
                    "FilterChangeCompletedEvent",
                    n.$Gj.toString(),
                    n.$g);
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t)
        }
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$C(this.$1Cu("RaiseFilterChangeCompletedEvent"),
                2001,
                { SourceId: n.$g, FilterExpression: $0.$1(n.$Gj) ? "" : n.$Gj.$7F() },
                "FilterChangeCompleted")
    },
    refreshWithoutScriptReload: function() {
        Microsoft.Crm.Client.Core.ViewModels.RootViewModel.prototype.refreshWithoutScriptReload.call(this);
        var n, t;
        this.get_IsMultipleEntityGraphSupported()
            ? (n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5m(this.$I, 1, 0, null), n.$Ki = this.$FH, t = new Microsoft.Crm.Client.Core.ViewModels.Controls
                .InteractionCentric.Events.$5O(this.$I, null, n, this.$FH))
            : (n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
                .$5m(this.$I, 1, 0, this.$PM), t = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                .Events.$5O(this.$I, this.$PM, n, null));
        this.$9F.raiseEvent(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O, t)
    },
    $GN: function() {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$f
            .$C(this.$1Cu("InternalDispose"),
                2001,
                {
                    PrimaryEntity: this.$8S,
                    DashboardCategory: this.$dR,
                    FilterByAttributeName: this.$Lf,
                    IsEntityDashboard: this.$1E2
                },
                "DashboardDisposed");
        this.$8S = null;
        this.$PM = null;
        this.$Rf = null;
        this.$Lj = null;
        this.set_DashboardCategory(null);
        this.$Iq = null;
        this.$FH = null;
        this.$jQ = null;
        this.$Ej = null;
        this.$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m,
            this.$$d_HandleFilterChangeInitiatedEvent);
        Microsoft.Crm.Client.Core.ViewModels.RootViewModel.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm = function() {
    this.$$d_$34G = Function.createDelegate(this, this.$34G);
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm.prototype = {
    $1c9: !1,
    $2WV: "ShouldScroll",
    $1Lu: 0,
    get_ScrollTopValueToSet: function() { return this.$1Lu },
    set_ScrollTopValueToSet: function(n) { return this.$1Lu = n, n },
    $1Lt: 0,
    get_ScrollLeftValueToSet: function() { return this.$1Lt },
    set_ScrollLeftValueToSet: function(n) { return this.$1Lt = n, n },
    get_ShouldScroll: function() { return this.$1c9 },
    set_ShouldScroll: function(n) { return this.$1c9 !== n && (this.$1c9 = n, n && this.$8(this.$2WV)), n },
    $1eb: 0,
    get_BootstrapColumns: function() { return this.$1eb },
    set_BootstrapColumns: function(n) { return this.$1eb = n, n },
    $1em: !1,
    get_ContainsTiles: function() { return this.$1em },
    set_ContainsTiles: function(n) { return this.$1em = n, n },
    $1en: !1,
    get_ContainsVisualFilter: function() { return this.$1en },
    set_ContainsVisualFilter: function(n) { return this.$1en = n, n },
    $17: function() {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5.prototype.$17.call(this);
        this.$2.get_EventHandler().$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8O,
            this.$$d_$34G)
    },
    $34G: function(n) { n.$1eh === this.$I && (this.set_ShouldScroll(!0), this.$1Lu = n.$1gK, this.$1Lt = n.$1gJ) },
    $GN: function() {
        this.$2.get_EventHandler().$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8O,
            this.$$d_$34G);
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
    .$Da = function() { Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Da.initializeBase(this) };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Da
    .prototype = {
        $1gG: 0,
        get_RowSpan: function() { return this.$1gG },
        set_RowSpan: function(n) { return this.$1gG = n, n },
        $1eg: 0,
        get_ColSpan: function() { return this.$1eg },
        set_ColSpan: function(n) { return this.$1eg = n, n },
        $xL: !1,
        get_IsQuickViewForm: function() { return this.$xL },
        set_IsQuickViewForm: function(n) { return this.$xL = n, n },
        $1ed: 0,
        get_CellHeight: function() { return this.$1ed },
        set_CellHeight: function(n) { return this.$1ed = n, n },
        $1fX: !1,
        get_IsQueueContainer: function() { return this.$1fX },
        set_IsQueueContainer: function(n) { return this.$1fX = n, n },
        $1fT: !1,
        get_IsInteractionWallGridCell: function() { return this.$1fT },
        set_IsInteractionWallGridCell: function(n) { return this.$1fT = n, n },
        $1fb: !1,
        get_IsVisualFilterSection: function() { return this.$1fb },
        set_IsVisualFilterSection: function(n) { return this.$1fb = n, n },
        $1fM: !1,
        get_IsBlankGridCell: function() { return this.$1fM },
        set_IsBlankGridCell: function(n) { return this.$1fM = n, n },
        $1eq: null,
        get_ControlName: function() { return this.$1eq },
        set_ControlName: function(n) { return this.$1eq = n, n },
        $1gd: null,
        get_TierType: function() { return this.$1gd },
        set_TierType: function(n) { return this.$1gd = n, n },
        $1fL: !1,
        get_IsAutoHeight: function() { return this.$1fL },
        set_IsAutoHeight: function(n) { return this.$1fL = n, n },
        get_AdditionalCSSClassNamePropertyName: function() { return"AdditionalCSSClassName" }
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5 = function() {
    this.$$d_HandleVisualFilterCollapsibleChangeCompletedEvent = Function
        .createDelegate(this, this.HandleVisualFilterCollapsibleChangeCompletedEvent);
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5.prototype = {
    $zm: !1,
    $pS: !1,
    get_CheckIfCollapsed: function() { return this.$pS },
    set_CheckIfCollapsed: function(n) { return this.$pS = n, n },
    $wc: !1,
    get_Collapsible: function() { return this.$wc },
    set_Collapsible: function(n) { return this.$wc = n, n },
    $16t: !1,
    get_ContainsQueueContainerTier1: function() { return this.$16t },
    set_ContainsQueueContainerTier1: function(n) { return this.$16t = n, n },
    $1el: !1,
    get_ContainsHeader: function() { return this.$1el },
    set_ContainsHeader: function(n) { return this.$1el = n, n },
    get_DisplayLabel: function() { return this.$zm },
    set_DisplayLabel: function(n) { return this.$zm = n, n },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17
            .call(this), (this.$wc || this.$16t) &&
        (this.$pS = !0, this.$7y().$9F.$A2(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
            .$8g,
            this.$$d_HandleVisualFilterCollapsibleChangeCompletedEvent)))
    },
    $GN: function() {
        (this.$wc || this.$16t) &&
            this.$7y().$9F.$Ah(Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g,
                this.$$d_HandleVisualFilterCollapsibleChangeCompletedEvent);
        Microsoft.Crm.Client.Core.ViewModels.$2Y.prototype.$GN.call(this)
    },
    $7y: function() { return this.$2 },
    HandleVisualFilterCollapsibleChangeCompletedEvent: function() {
        if (this.$pS = !this.$pS, this
            .$8("CheckIfCollapsed"), Microsoft.Crm.Client.Core.Framework.PerformanceMarker.get_$CG() &&
            !this.$pS &&
            this.$wc) {
            Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$1Mo("VisualFilterCollapseButtonClickAcknowledged", 0, this.get_ViewModelId());
            var n = this;
            Microsoft.Crm.Client.Core.Framework.Scheduler
                .Schedule(function() {
                        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                            .$6Y("VisualFiltersShown")
                    },
                    -13,
                    "TabLayoutViewModel.HandleVisualFilterCollapsible")
        }
    },
    get_TabSpaceReserved: function() { return 10 },
    RefreshData: function() { this.$7y().refreshWithoutScriptReload() },
    IsTier1Dashboard: function() { return this.$7y().$dR === "1" }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Commands");
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand = function() {
    this.$$d_$2t = Function.createDelegate(this, this.$2t);
    Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.initializeBase(this);
    this.set_$2a(this.$$d_$2t)
};
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("OpenEmailAttachmentPopupCommand",
                Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$y)
    };
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
    .$y = function(n, t) {
        return Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel.isInstanceOfType(n) &&
            (Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB = n.refreshCommand), new Microsoft
            .Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand(t)
    };
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$2SM = function(n) {
    delete n.$Q.$S.OverriddenEntityId;
    delete n.$Q.$S.OverriddenEntityName
};
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
    .$24d = function(n) {
        return!$0.$1(n) &&
            !$0.$1(n.$Q) &&
            !$0.$1(n.$Q.$S) &&
            "OverriddenEntityName" in n.$Q.$S &&
            "OverriddenEntityId" in n.$Q.$S
            ? !0
            : !1
    };
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.prototype = {
    $1Jr: 0,
    $2t: function() {
        var s = null,
            f = null,
            i = null,
            h = -1,
            u = !0,
            o = !0,
            n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$5F(),
            c = !1,
            r,
            t,
            e,
            l,
            w,
            b,
            k;
        if ($0.$1(n) ||
            $0.$1(n.ui) ||
            $0.$1(n.ui.$2) ||
            (r = n.ui.$2, t = r, Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$24d(t)
                ? (f = t.$Q.$S.OverriddenEntityId, t.$Q.$S
                    .OverriddenEntityName ===
                    "email" &&
                    (i = "4202", u = !0), Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
                    .$2SM(t), o = !1, c = !0)
                : $0.$1(t.$Q) ||
                $0.$1(t.$Q.$AV) ||
                (e = t.$Q.$AV, Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$24d(e)
                    ? (f = e.$Q.$S.OverriddenEntityId, e.$Q.$S
                        .OverriddenEntityName ===
                        "email" &&
                        (i = "4202", u = !0), Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
                        .$2SM(e), o = !1)
                    : o = !0), !o ||
                $0.$1(r) ||
                $0.$1(r.get_$1N()) ||
                (f = r.get_$1N().get_Id(), r.get_$2W() === "appointment"
                    ? (i = "4201", u = !1)
                    : r
                    .get_$2W() ===
                    "email" &&
                    (i = "4202", u = !0))), $0.$1(n) ||
        (u && !$0.$1(n.getAttribute("statuscode"))
            ? h = n.getAttribute("statuscode").getValue()
            : u || $0.$1(n.getAttribute("statecode")) || (h = n.getAttribute("statecode").getValue())), l = Microsoft
            .Crm.Client.Core.ViewModels.EmailAttachmentViewModel
            .$2AR(h, i), $0.$1(f) ||
            $0.$1(i) ||
            (s = String.format("{0}/activities/attachment/edit.aspx?pId=%7b{1}%7d&pType={2}&ish=true",
                n.context.getClientUrl(),
                f,
                i)), !$0.$1(s) && (l || c)) {
            var a = 0, v = 0, y = 584, p = 213;
            v = (window.screen.width - y) / 2;
            a = (window.screen.height - p) / 2;
            w = window.open(s,
                "_blank",
                String.format("width={0}, height={1}, top={2}, left={3}, menubar=no, toolbar=no", y, p, a, v));
            c ||
            (b = this, k = function() {
                !$0.$1(Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB) &&
                    Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB.get_CanExecute() &&
                    Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB.execute()
            });
            this.$26e();
            this.$3Bb(w)
        }
    },
    $3Bb: function(n) {
        var t = this;
        this.$1Jr = Microsoft.Crm.Client.Core.Framework.$2F
            .$3J0(this.$N1,
                "EmailAttachmentTimer",
                function() {
                    n.closed &&
                    (t.$26e(), !$0.$1(Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB) &&
                        Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB.get_CanExecute() &&
                        Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB.execute())
                },
                100)
    },
    $26e: function() { this.$1Jr && (this.$1Jr = Microsoft.Crm.Client.Core.Framework.$2F.$2ex(this.$1Jr)) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Commands");
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6 = function(n) {
    this.$$d_$1ve = Function.createDelegate(this, this.$1ve);
    Microsoft.Crm.Client.Core.ViewModels.Commands.$B6.initializeBase(this);
    this.$1FH = n
};
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("LookupFieldClickCommand", Microsoft.Crm.Client.Core.ViewModels.Commands.$B6.$y)
    };
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6.$y = function(n, t) {
    var u = !$0.$1(n) && Microsoft.Crm.Client.Core.ViewModels.NavigationButtonViewModel.isInstanceOfType(n),
        f = !$0.$1(t),
        i,
        r;
    return!u || !f
        ? null
        : (i = n, r = new Microsoft.Crm.Client.Core.ViewModels.Commands.$B6(i), new Microsoft.Crm.Client.Core.Framework
            .Binding.$TM(r.$$d_$1ve, 163))
};
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6.prototype = {
    $1FH: null,
    $1ve: function() {
        for (var i = this.$1FH, n = this.$1FH, r, t; n;) {
            if (Microsoft.Crm.Client.Core.ViewModels.$Bk.isInstanceOfType(n)) break;
            n = n.$2.$6B(n)
        }
        r = n.$F.HorizontalTabs;
        t = {};
        t.uniqueid = i.get_$3JN();
        t.title = i.get_Text();
        r.openQuickviewForm(i.get_Data().LogicalName, t)
    },
    $GN: function() {
        this.$1FH = null;
        Microsoft.Crm.Client.Core.Framework.Binding.$3Z.prototype.$GN.call(this)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z = function() {};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z
    .prototype = { individual: 0, aggregated: 1, global: 2 };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z
    .registerEnum("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$1z", !1);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
    .$8g = function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g.initializeBase(this, [n])
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O = function(n, t, i, r) {
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O.initializeBase(this, [n]);
    this.$Gj = t;
    this.$UO = i;
    $0.$1(r) || (this.$NB = r)
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O
    .prototype = { $Gj: null, $NB: null, $UO: null };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m = function(n, t, i, r, u) {
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m.initializeBase(this, [n]);
    this.$H5 = t;
    this.$lX = i;
    this.$6o = r;
    this.$1VE = $0.$1(u) ? !1 : u
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m
    .prototype = {
        $6o: null,
        $Ki: null,
        $H5: 0,
        $lX: 0,
        $1VE: !1,
        get_FilterExpression: function() { return this.$6o },
        get_FilterExpressionByEntity: function() { return this.$Ki },
        set_FilterExpressionByEntity: function(n) { return this.$Ki = n, n },
        get_FilterEventType: function() { return this.$lX },
        get_Filtertype: function() { return this.$H5 },
        get_IsGlobalDateRangeFilter: function() { return this.$1VE }
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events
    .$8r = function(n) {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r.initializeBase(this, [n])
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz = function(n) { this.$g = n };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz
    .prototype = {
        $g: null,
        get_SourceId: function() { return this.$g },
        set_SourceId: function(n) { return this.$g = n, n }
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d = function(n, t) {
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d.initializeBase(this, [n]);
    this.$PT = t
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d.prototype = { $PT: null };
Type.registerNamespace("Microsoft.Crm.Client.Core.ICViewModels");
Microsoft.Crm.Client.Core.ICViewModels.$SN = function() {
    Microsoft.Crm.Client.Core.ICViewModels.$SN.initializeBase(this)
};
Microsoft.Crm.Client.Core.ICViewModels.$SN.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$4f.$Al = new Microsoft.Crm.Client.Core.ICViewModels.$SN
};
Microsoft.Crm.Client.Core.ICViewModels.$SN.prototype = {
    $27p: function(n) {
        return Microsoft.Crm.Client.Core.Framework.$6.get_$k()
            ? new Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel(n)
            : Microsoft.Crm.Client.Core.ViewModels.$Py.prototype.$27p.call(this, n)
    }
};
Microsoft.Crm.Client.Core.ICViewModels.$Pb = function() {
    Microsoft.Crm.Client.Core.ICViewModels.$Pb.initializeBase(this)
};
Microsoft.Crm.Client.Core.ICViewModels.$Pb.$$cctor = function() {
    Microsoft.Crm.Client.Core.Commands.$3m.$Al = new Microsoft.Crm.Client.Core.ICViewModels.$Pb
};
Microsoft.Crm.Client.Core.ICViewModels.$Pb.prototype = {
    $1lw: function(n, t, i, r, u) {
        var s, v, h, y, c, l, a, w;
        if (Microsoft.Crm.Client.Core.ViewModels.$Bg.isInstanceOfType(r)) {
            var e = null, f = null, o = null;
            if (o = r, s = o.$Hp, s.get_Count()) f = s.get_$H(0), e = Xrm.Internal.getEntityName(f.TypeCode);
            else return null;
            switch (n.ParameterType) {
            case 18:
            case 19:
            case 20:
            case 21:
                return n.Value;
            case 14:
                return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$1O.$GR;
            case 15:
                return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$1O.$Bq;
            case 16:
                return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$2L.$AX;
            case 1:
                return f.TypeCode;
            case 2:
                return Xrm.Internal.getEntityName(f.TypeCode);
            case 3:
                return[f.Id];
            case 4:
                return f.Id;
            case 7:
                return e ? Xrm.Internal.getEntityCode(e) : null;
            case 8:
                return e ? e : null;
            case 11:
            case 22:
                return f ? 1 : 0;
            case 25:
                return 0;
            case 28:
                return 0;
            case 9:
            case 23:
            case 29:
            case 26:
            case 24:
            case 30:
            case 27:
                if (v = !0, (n.ParameterType === 9 ||
                        n.ParameterType === 23 ||
                        n.ParameterType === 29 ||
                        n.ParameterType === 26) &&
                    (v = !1), h = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), y = new(Microsoft.Crm
                    .Client
                    .Core.Framework.List$1.$$(Mscrm
                        .EntityReference)), o &&
                    (n.ParameterType === 9 || n.ParameterType === 23 || n.ParameterType === 24) &&
                    f)
                    for (var b = s
                                 .toArray(),
                        k = b.length,
                        p = 0;
                        p < k;
                        ++p)
                        c = b[p], h.add(c.Id), l = new Mscrm.EntityReference, l.Id = c.Id, l.TypeCode = c.TypeCode, y
                            .add(l);
                return t === 1 ? Microsoft.Crm.Client.Core.Commands.$3m.$27W(h) : v ? y.toArray() : h.toArray();
            case 10:
                return f ? (a = new Mscrm.EntityReference, a.Id = f.Id, a.TypeCode = f.TypeCode, a) : null;
            case 5:
            case 12:
                return o.$16i;
            case 6:
            case 13:
                return null;
            case 17:
                return Microsoft.Crm.Client.Core.ViewModels.$Bf.isInstanceOfType(u)
                    ? (w = {}, w.SourceControlId = u.$S.CommandId, w)
                    : null;
            case 0:
            default:
                return null
            }
        } else return Microsoft.Crm.Client.Core.Commands.$3m.prototype.$1lw.call(this, n, t, i, r, u)
    }
};
Microsoft.Crm.Client.Core.ICViewModels.$PY = function() {
    Microsoft.Crm.Client.Core.ICViewModels.$PY.initializeBase(this)
};
Microsoft.Crm.Client.Core.ICViewModels.$PY.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$4A.$Al = new Microsoft.Crm.Client.Core.ICViewModels.$PY
};
Microsoft.Crm.Client.Core.ICViewModels.$PY.prototype = {
    $1Y9: function(n, t, i, r, u, f) {
        if (!Microsoft.Crm.Client.Core.Framework.$6
            .get_$k() ||
            "shouldOpenQuickCreate" in i && n !== "email")
            Microsoft.Crm.Client.Core.ViewModels.$4A.prototype.$1Y9.call(this, n, t, i, r, u, f);
        else {
            var e = new Microsoft.Crm.Client.Core.Commands.OpenInteractionCentricCreateFormCommand(null, n, 40, t);
            !$0.$1(i) &&
                "RefreshContext" in i &&
                Microsoft.Crm.Client.Core.ViewModels.$7w.isInstanceOfType(i.RefreshContext) &&
                (i.RefreshContext.$jF = !0);
            e.$9w = i;
            e.$Mk = f;
            $0.$1(r) || (e.$P = r);
            $0.$1(u) || (e.$1I = u);
            e.execute();
            e.dispose()
        }
    },
    $2Tr: function(n, t) {
        if (Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel.isInstanceOfType(t)) {
            var i = t;
            switch (n) {
            case"saveandclose":
                i.$27k();
                break;
            default:
                i.$2hz()
            }
        } else Microsoft.Crm.Client.Core.ViewModels.$4A.prototype.$2Tr.call(this, n, t)
    },
    $3Uj: function(n, t) {
        (Microsoft.Crm.Client.Core.ViewModels.$7w.isInstanceOfType(n) ||
                Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridHeaderControlViewModel
                .isInstanceOfType(n)) &&
            (t.shouldOpenQuickCreate = !0)
    }
};
Microsoft.Crm.Client.Core.ICViewModels.$PW = function() {
    Microsoft.Crm.Client.Core.ICViewModels.$PW.initializeBase(this)
};
Microsoft.Crm.Client.Core.ICViewModels.$PW.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$5l.$Al = new Microsoft.Crm.Client.Core.ICViewModels.$PW
};
Microsoft.Crm.Client.Core.ICViewModels.$PW.prototype = {
    $2JB: function(n, t, i, r, u, f) {
        var e, o, s, h;
        if (Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel.isInstanceOfType(r)) {
            if (e = r, e.$8G === 1)
                return o = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), e
                    .$2hy(o), s = this, h = this, o.then(function(o) {
                        o
                            ? (e.$8G = 0, Microsoft.Crm.Client.Core.Commands.WebResourceCommand.$1m5(n, t, i, r, u, f))
                            : f.resolve(!1)
                    },
                    function() { f.resolve(!1) }), !1;
            if (e.$8G === 2 || !e.$8G) return!0
        }
        return Microsoft.Crm.Client.Core.ViewModels.$5l.prototype.$2JB.call(this, n, t, i, r, u, f)
    }
};
Microsoft.Crm.Client.Core.ICViewModels.$PU = function() {
    Microsoft.Crm.Client.Core.ICViewModels.$PU.initializeBase(this)
};
Microsoft.Crm.Client.Core.ICViewModels.$PU.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$5o.$Al = new Microsoft.Crm.Client.Core.ICViewModels.$PU
};
Microsoft.Crm.Client.Core.ICViewModels.$PU.prototype = {
    $28V: function(n, t, i, r) {
        if (Microsoft.Crm.Client.Core.Framework.$6.get_$k()) {
            var f = r, u = f.get_$AH();
            return new Microsoft.Crm.Client.Core.Storage.DataApi.$3N(n, t, i, u.$1sR(u.$1MJ))
        }
        return Microsoft.Crm.Client.Core.ViewModels.$5o.prototype.$28V.call(this, n, t, i, r)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al = function() {
    this.$9u = new Microsoft.Crm.Client.Core.ViewModels.$7u;
    this.$n3 = {};
    this.$12G = {};
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("InteractionCentricCommunicationCardViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al)
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al.prototype = {
    $l9: null,
    $Ij: "",
    $Jx: "",
    $Jy: "",
    $RK: "",
    $RL: "",
    $nz: null,
    $KK: null,
    $KL: null,
    $2Aj: null,
    $NI: null,
    get_ActionProvider: function() { return this.$NI },
    set_ActionProvider: function(n) { return this.$NI = n, n },
    $PO: !1,
    get_SetActionable: function() { return this.$PO },
    set_SetActionable: function(n) { return this.$PO = n, n },
    $qG: !1,
    get_Rerender: function() { return this.$qG },
    set_Rerender: function(n) { return this.$qG = n, n },
    $uW: function(n, t, i, r) {
        var u, f;
        return Xrm.Objects.EntityReference.isInstanceOfType(n.GetValue(i))
            ? (f = n.GetValue(i), u = f.Name || t, this.$n3[r] = f.Id.toString(), this.$12G[r] = f.LogicalName)
            : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N.isInstanceOfType(n.GetValue(i))
            ? (u = n.GetValue(i).$1B, u = u || t)
            : (u = n.GetValue(i), u = u || t), u
    },
    $17F: null,
    get_FieldNamesList: function() { return this.$17F },
    set_FieldNamesList: function(n) { return this.$17F = n, n },
    $1K5: null,
    get_AttributesToFetch: function() { return this.$1K5 },
    set_AttributesToFetch: function(n) { return this.$1K5 = n, n },
    $7d: null,
    get_EntityName: function() { return this.$7d },
    set_EntityName: function(n) { return this.$7d = n, n },
    $E5: null,
    get_RecordId: function() { return this.$E5 },
    set_RecordId: function(n) { return this.$E5 = n, n },
    get_Text1: function() { return this.$Ij },
    set_Text1: function(n) { return this.$Ij !== n && (this.$Ij = n), n },
    get_Text2: function() { return this.$Jx },
    set_Text2: function(n) { return this.$Jx !== n && (this.$Jx = n), n },
    get_Text3: function() { return this.$Jy },
    set_Text3: function(n) { return this.$Jy !== n && (this.$Jy = n), n },
    get_Text4: function() { return this.$RK },
    set_Text4: function(n) { return this.$RK !== n && (this.$RK = n), n },
    get_Text5: function() { return this.$RL },
    set_Text5: function(n) { return this.$RL !== n && (this.$RL = n), n },
    get_EmailAddress: function() { return this.$l9 },
    set_EmailAddress: function(n) { return this.$l9 !== n && (this.$l9 = n), n },
    get_PhoneNumber: function() { return this.$nz },
    set_PhoneNumber: function(n) { return this.$nz !== n && (this.$nz = n), n },
    IsLink: function(n) { return $0.$1(this.$12G[n]) ? !1 : !0 },
    get_ImageViewModel: function() { return this.$9u },
    set_ImageViewModel: function(n) {
        return this.$9u !== n && ($0.$1(this.$9u) || (this.$9u.dispose(), this.$9u = null), this.$9u = n), n
    },
    get_Button1ViewModel: function() { return this.$KK },
    set_Button1ViewModel: function(n) {
        return this.$KK !== n && ($0.$1(this.$KK) || (this.$KK.dispose(), this.$KK = null), this.$KK = n), n
    },
    get_Button2ViewModel: function() { return this.$KL },
    set_Button2ViewModel: function(n) {
        return this.$KL !== n && ($0.$1(this.$KL) || (this.$KL.dispose(), this.$KL = null), this.$KL = n), n
    },
    $17: function() {
        this.$1x ||
        (Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$17.call(this), this.$PO = !0, this
            .fetchData())
    },
    fetchData: function() {
        var n;
        try {
            if (!$0.$1(this.$NI) && !Microsoft.Crm.Client.Core.Framework.$3.$1S(this.$7d) && !$0.$1(this.$E5)) {
                var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(this.$7d),
                    i = t.$4M,
                    r = "<fetch mapping='logical' version='1.0'><entity name='" +
                        this.$7d +
                        "'>" +
                        this.$1K5 +
                        "<filter><condition attribute='" +
                        i +
                        "' operator='eq' value='" +
                        this.$E5.Id.toString() +
                        "' /><\/filter><\/entity><\/fetch>";
                this.$1v = r;
                this.set_DefinitionId(this.get_ViewModelId());
                this.$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(this.$1v);
                n = this.$NI.$4W();
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(n)
            }
        } catch (u) {
            this.$2Aj = u.stack.toString()
        }
    },
    $4Y: function(n) {
        for (var r, u, s, f, t = this.$17F, h = n.get_$Bp().$21O(), i, o = h, c = o.length, e = 0; e < c; ++e)
            if (r = o[e], Microsoft.Crm.Client.Core.Framework.$3.$1S(t[3]) ||
            (i = this.$uW(r, "", t[3], "Text1"), this
                .set_Text1(i.toString())), Microsoft.Crm.Client.Core.Framework.$3.$1S(t[4]) ||
            (i = this.$uW(r, "", t[4], "Text2"), this
                .set_Text2(i.toString())), Microsoft.Crm.Client.Core.Framework.$3.$1S(t[5]) ||
            (i = this.$uW(r, "", t[5], "Text3"), this
                .set_Text3(i.toString())), Microsoft.Crm.Client.Core.Framework.$3.$1S(t[6]) ||
            (i = this.$uW(r, "", t[6], "Text4"), this
                .set_Text4(i.toString())), Microsoft.Crm.Client.Core.Framework.$3.$1S(t[7]) ||
                (i = this.$uW(r, "", t[7], "Text5"), this.set_Text5(i.toString())), this.$9u
                .set_Data(Microsoft.Crm.Client.Core.Framework.$3.$1S(r.GetValue(t[0]))
                    ? "/_imgs/NavBar/EmptyUserImage.png"
                    : r.GetValue(t[0])), this.set_EmailAddress(r.GetValue(t[1])), u = t[2].split(","), u.length > 1) {
                for (f = 0; f < u.length; f++)
                    if (s = u[f], i = r.GetValue(s), i && !Microsoft.Crm.Client.Core.Framework.$3.$1S(i.toString())) {
                        this.set_PhoneNumber(i.toString());
                        break
                    }
            } else this.set_PhoneNumber(r.GetValue(t[2]));
        this.$23j();
        this.$PO && (this.$PO = !1);
        this.$8("DataChanged")
    },
    $23j: function() {
        var t = new Microsoft.Crm.Client.Core.ViewModels.$2A, h = this.$l9, f = {}, i, u, l, o, r, s;
        f.protocol = "mailto:";
        f.target = h;
        f.CommandName = "TileButton1";
        t.set_Parameters(f);
        t.$Iz = Microsoft.Crm.Client.Core.Framework.$6.get_$4R();
        t.set_Command("UrlLauncherCommand");
        t.set_ImageType("Symbol");
        t.set_ImageName("NewEmail");
        Microsoft.Crm.Client.Core.Framework.$3.$1S(h) && (t.$26.set_CanExecute(!1), t.set_Enabled(!1));
        this.set_Button1ViewModel(t);
        var n = new Microsoft.Crm.Client.Core.ViewModels.$2A, c = this.$nz, e = {};
        e.target = c;
        e.CommandName = "TileButton2";
        n.set_Parameters(e);
        n.$Iz = Microsoft.Crm.Client.Core.Framework.$6.get_$4R();
        n.set_Command("SkypeUrlLauncherCommand");
        n.set_ImageType("Symbol");
        n.set_ImageName("NewPhoneCall");
        i = n.$26;
        Microsoft.Crm.Client.Core.Framework.$3.$1S(c) && (n.$26.set_CanExecute(!1), n.set_Enabled(!1));
        $0.$1(this.$E5) ||
        (u = this.$E5, l = Microsoft.Crm.Client.Core.Commands.SkypeUrlLauncherCommand
            .$V6(u.get_$Du(), u.get_$52(), this.$E5.Name), i.$169 = l, o = this
            .$2, Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(o)
            ? (r = o.get_ModelContext(), s = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
                .$i(r.get_ModelName()), $0.$1(r) ||
                $0.$1(s) ||
                (i.$Ic = r.get_Id(), i.$oH = r.GetValue(s.$63), i.$aI = r.get_ModelName()))
            : (i.$Ic = u.get_$52(), i.$oH = this.$E5.Name, i.$aI = u.get_$Du()));
        this.set_Button2ViewModel(n)
    },
    navigateToRecord: function(n) {
        if (this.IsLink(n)) {
            var i = new Xrm.Objects.EntityReference(this.$12G[n].toString(),
                    new Microsoft.Crm.Client.Core.Framework.Guid(this.$n3[n].toString())),
                r = { EntityReference: i },
                t = new Microsoft.Crm.Client.Core.Commands.$33(null, 40);
            try {
                t.$J = this.$12G[n].toString();
                t.$19 = r;
                t.execute()
            } finally {
                t.dispose()
            }
        } else return
    },
    $GN: function() {
        $0.$1(this.$KK) || (this.$KK.dispose(), this.set_Button1ViewModel(null));
        $0.$1(this.$KL) || (this.$KL.dispose(), this.set_Button2ViewModel(null));
        $0.$1(this.$9u) || (this.$9u.dispose(), this.set_ImageViewModel(null));
        this.$E5 = null;
        this.$17F = null;
        this.$12G = null;
        this.$n3 = null;
        Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel.prototype.$GN.call(this)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent
    .RichEntityContentViewModel = function() {
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel
            .initializeBase(this)
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
            .$1a("RichEntityContentViewModel",
                Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent
                .RichEntityContentViewModel.$3ND)
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel
    .$3ND = function() {
        return new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent
            .RichEntityContentViewModel
    };
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel
    .prototype = { $17: function() { Microsoft.Crm.Client.Core.ViewModels.$2s.prototype.$17.call(this) } };
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel",
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel);
Microsoft.Crm.Client.Core.ViewModels.$9R.registerClass("Microsoft.Crm.Client.Core.ViewModels.$9R",
    Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel",
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel,
        Microsoft.Crm.Client.Core.ViewModels.Interfaces.$66);
Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel", Microsoft.Crm.Client.Core.ViewModels.$5I);
Microsoft.Crm.Client.Core.ViewModels.$Cl.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Cl",
    Microsoft.Crm.Client.Core.ViewModels.$2s);
Microsoft.Crm.Client.Core.ViewModels.$UJ.registerClass("Microsoft.Crm.Client.Core.ViewModels.$UJ",
    Microsoft.Crm.Client.Core.ViewModels.$2s);
Microsoft.Crm.Client.Core.ViewModels.$Ur.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Ur",
    Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cf);
Microsoft.Crm.Client.Core.ViewModels.$Cx.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Cx",
    Microsoft.Crm.Client.Core.ViewModels.$Ur);
Microsoft.Crm.Client.Core.ViewModels.$D0.registerClass("Microsoft.Crm.Client.Core.ViewModels.$D0",
    Microsoft.Crm.Client.Core.ViewModels.$UX);
Microsoft.Crm.Client.Core.ViewModels.$Cy.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Cy",
    Microsoft.Crm.Client.Core.ViewModels.$D0);
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.$LY.registerClass("Microsoft.Crm.Client.Core.ViewModels.$LY");
Microsoft.Crm.Client.Core.ViewModels.$AI.registerClass("Microsoft.Crm.Client.Core.ViewModels.$AI",
    Microsoft.Crm.Client.Core.ViewModels.Controls.$Cr);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.$Cz.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Cz",
    Microsoft.Crm.Client.Core.ViewModels.$D0,
    Microsoft.Crm.Client.Core.ViewModels.$GM);
Microsoft.Crm.Client.Core.ViewModels.$DX.registerClass("Microsoft.Crm.Client.Core.ViewModels.$DX",
    Microsoft.Crm.Client.Core.ViewModels.EditModeSectionViewModel,
    Microsoft.Crm.Client.Core.ViewModels.$GM);
Microsoft.Crm.Client.Core.ViewModels.$Dw.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Dw",
    Microsoft.Crm.Client.Core.ViewModels.$7U);
Microsoft.Crm.Client.Core.ViewModels.$Dy.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Dy",
    Microsoft.Crm.Client.Core.ViewModels.$Dw);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$Dy);
Microsoft.Crm.Client.Core.ViewModels.$DY.registerClass("Microsoft.Crm.Client.Core.ViewModels.$DY",
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel",
        Microsoft.Crm.Client.Core.ViewModels.PartyListViewModel);
Microsoft.Crm.Client.Core.ViewModels.$7P.registerClass("Microsoft.Crm.Client.Core.ViewModels.$7P",
    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel);
Microsoft.Crm.Client.Core.ViewModels.$DZ.registerClass("Microsoft.Crm.Client.Core.ViewModels.$DZ",
    Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.$Eb.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Eb",
    Microsoft.Crm.Client.Core.ViewModels.$2s);
Microsoft.Crm.Client.Core.ViewModels.$Ec.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Ec",
    Microsoft.Crm.Client.Core.ViewModels.$UX,
    Microsoft.Crm.Client.Core.ViewModels.$GM);
Microsoft.Crm.Client.Core.ViewModels.$F1.registerClass("Microsoft.Crm.Client.Core.ViewModels.$F1",
    Microsoft.Crm.Client.Core.ViewModels.$En,
    Microsoft.Crm.Client.Core.ViewModels.$GM);
Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$UJ);
Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel",
        Microsoft.Crm.Client.Core.ViewModels
        .$Ur);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel",
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel);
Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.QueuePickerViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$2s);
Microsoft.Crm.Client.Core.ViewModels.$Ed.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Ed",
    Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
    Microsoft.Crm.Client.Core.ViewModels.$3X,
    Microsoft.Crm.Client.Core.ViewModels.$4t,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.ViewModels.$7x);
Microsoft.Crm.Client.Core.ViewModels.$AO.registerClass("Microsoft.Crm.Client.Core.ViewModels.$AO",
    Microsoft.Crm.Client.Core.ViewModels.$Ed,
    Microsoft.Crm.Client.Core.Framework.$He,
    Microsoft.Crm.Client.Core.ViewModels.$E8,
    Microsoft.Crm.Client.Core.ViewModels.$4t);
Microsoft.Crm.Client.Core.ViewModels.$Dc.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Dc",
    Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel",
        Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel,
        Microsoft.Crm.Client.Core.ViewModels.$7Q,
        Microsoft.Crm.Client.Core.ViewModels.$4t,
        Microsoft.Crm.Client.Core.Framework.$He,
        Microsoft.Crm.Client.Core.ViewModels.$8w,
        Microsoft.Crm.Client.Core.ViewModels.Interfaces.$66,
        Microsoft.Crm.Client.Core.ViewModels.Interfaces.$AX);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$97);
Microsoft.Crm.Client.Core.ViewModels.$E1.registerClass("Microsoft.Crm.Client.Core.ViewModels.$E1",
    Microsoft.Crm.Client.Core.ViewModels.$D0);
Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$5I);
Microsoft.Crm.Client.Core.ViewModels.$LZ.registerClass("Microsoft.Crm.Client.Core.ViewModels.$LZ");
Microsoft.Crm.Client.Core.ViewModels.$UT.registerClass("Microsoft.Crm.Client.Core.ViewModels.$UT",
    Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
    Microsoft.Crm.Client.Core.ViewModels.$GO);
Microsoft.Crm.Client.Core.ViewModels.$69.registerClass("Microsoft.Crm.Client.Core.ViewModels.$69");
Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.InteractionWallFile");
Microsoft.Crm.Client.Core.ViewModels.$Ld.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Ld");
Microsoft.Crm.Client.Core.ViewModels.$90.registerClass("Microsoft.Crm.Client.Core.ViewModels.$90");
Microsoft.Crm.Client.Core.ViewModels.$3O.registerClass("Microsoft.Crm.Client.Core.ViewModels.$3O");
Microsoft.Crm.Client.Core.ViewModels.$US.registerClass("Microsoft.Crm.Client.Core.ViewModels.$US",
    Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
    Microsoft.Crm.Client.Core.ViewModels.$GO);
Microsoft.Crm.Client.Core.ViewModels.$2j.registerClass("Microsoft.Crm.Client.Core.ViewModels.$2j",
    Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
    Microsoft.Crm.Client.Core.ViewModels.$GO);
Microsoft.Crm.Client.Core.ViewModels.$7w.registerClass("Microsoft.Crm.Client.Core.ViewModels.$7w",
    Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel,
    Microsoft.Crm.Client.Core.ViewModels.Interfaces.$Gf);
Microsoft.Crm.Client.Core.ViewModels.$Am.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Am",
    Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$AI);
Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel",
        Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel);
Microsoft.Crm.Client.Core.ViewModels.QueueContainerViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.QueueContainerViewModel",
        Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel", Microsoft.Crm.Client.Core.ViewModels.$41);
Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel",
        Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel);
Microsoft.Crm.Client.Core.ViewModels.$Bf.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Bf",
    Microsoft.Crm.Client.Core.ViewModels.$8e);
Microsoft.Crm.Client.Core.ViewModels.$8H.registerClass("Microsoft.Crm.Client.Core.ViewModels.$8H");
Microsoft.Crm.Client.Core.ViewModels.QuickActionGridControlWrapper
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.QuickActionGridControlWrapper",
        Microsoft.Crm.Client.Core.ViewModels.GridControlWrapper);
Microsoft.Crm.Client.Core.ViewModels.$Bg.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Bg",
    Microsoft.Crm.Client.Core.ViewModels.$8e,
    Microsoft.Crm.Client.Core.ViewModels.Interfaces.$66,
    Microsoft.Crm.Client.Core.ViewModels.Interfaces.$Do,
    Microsoft.Crm.Client.Core.ViewModels.$4t,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Core.ViewModels.$Ep.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Ep",
    Microsoft.Crm.Client.Core.ViewModels.$2s);
Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel",
        Microsoft.Crm.Client.Core.ViewModels.VisualFilterViewModel);
Microsoft.Crm.Client.Core.ViewModels.$FJ.registerClass("Microsoft.Crm.Client.Core.ViewModels.$FJ",
    Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.Controls.$68.registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.$68");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cp
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cp",
        Microsoft.Crm.Client.Core.ViewModels.$2Y);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel", Microsoft.Crm.Client.Core.ViewModels.RootViewModel);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cf);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Da
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Da",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cf);
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand
    .registerClass("Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand",
        Microsoft.Crm.Client.Core.Framework.Binding.$3Z);
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Commands.$B6",
        Microsoft.Crm.Client.Core.Framework.Binding
        .$3Z);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz");
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8g",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5O",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$5m",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8r",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$8d",
        Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.Events.$Kz);
Microsoft.Crm.Client.Core.ICViewModels.$SN.registerClass("Microsoft.Crm.Client.Core.ICViewModels.$SN",
    Microsoft.Crm.Client.Core.ViewModels.$Py);
Microsoft.Crm.Client.Core.ICViewModels.$Pb.registerClass("Microsoft.Crm.Client.Core.ICViewModels.$Pb",
    Microsoft.Crm.Client.Core.Commands.$3m);
Microsoft.Crm.Client.Core.ICViewModels.$PY.registerClass("Microsoft.Crm.Client.Core.ICViewModels.$PY",
    Microsoft.Crm.Client.Core.ViewModels.$4A);
Microsoft.Crm.Client.Core.ICViewModels.$PW.registerClass("Microsoft.Crm.Client.Core.ICViewModels.$PW",
    Microsoft.Crm.Client.Core.ViewModels.$5l);
Microsoft.Crm.Client.Core.ICViewModels.$PU.registerClass("Microsoft.Crm.Client.Core.ICViewModels.$PU",
    Microsoft.Crm.Client.Core.ViewModels.$5o);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al",
        Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
        Microsoft.Crm.Client.Core.ViewModels.$Gd);
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel", Microsoft.Crm.Client.Core.ViewModels.$UA);
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.AttachmentsListRefreshPropertyName = "AttachmentsRefresh";
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.AttachmentPopupWindowWidth = 584;
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.AttachmentPopupWindowHeight = 213;
Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.$Eb.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.$Ec.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.$F1.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.$3O.$1Ge = null;
Microsoft.Crm.Client.Core.ViewModels.$3O.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.$2j.$t7 = null;
Microsoft.Crm.Client.Core.ViewModels.$2j.$mT = 0;
Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel.$1rV = !1;
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$lB = null;
Microsoft.Crm.Client.Core.Commands.OpenEmailAttachmentPopupCommand.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.Commands.$B6.$$cctor();
Microsoft.Crm.Client.Core.ICViewModels.$SN.$$cctor();
Microsoft.Crm.Client.Core.ICViewModels.$Pb.$$cctor();
Microsoft.Crm.Client.Core.ICViewModels.$PY.$$cctor();
Microsoft.Crm.Client.Core.ICViewModels.$PW.$$cctor();
Microsoft.Crm.Client.Core.ICViewModels.$PU.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.RichEntityContent.RichEntityContentViewModel.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.ICViewModels.js.srcmap