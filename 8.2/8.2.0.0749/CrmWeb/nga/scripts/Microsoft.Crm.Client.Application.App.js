Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels");
Microsoft.Crm.Client.Core.ViewModels.$Lc = function(n, t) {
    this.$2 = n;
    this.$Wi = t
};
Microsoft.Crm.Client.Core.ViewModels.$Lc.prototype = {
    $2: null,
    $Wi: null,
    $4W: function() {
        var n = new Microsoft.Crm.Client.Core.ViewModels.$DW(this.$Wi);
        return Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$1Dd(n, this.$2), n
    },
    $DC: function() { throw Error.notImplemented(); }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.App");
Microsoft.Crm.Client.Application.App.$FU = function() {};
Microsoft.Crm.Client.Application.App.$FU.registerInterface("Microsoft.Crm.Client.Application.App.$FU");
Microsoft.Crm.Client.Application.App.$MJ = function(n) {
    var t, i, r;
    this.$$d_$3CT = Function.createDelegate(this, this.$3CT);
    this.$B7 = {};
    t = n;
    for (i in t) r = { key: i, value: t[i] }, this.$B7[r.key] = r.value
};
Microsoft.Crm.Client.Application.App.$MJ.prototype = {
    $B7: null,
    $HF: function() {
        try {
            if ("navpagetype" in this.$B7) return this.$32y();
            if (this.$CG()) {
                if ("error" in this.$B7)
                    return Microsoft.Crm.Client.Core.ViewModels.$Z
                        .$3SB(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093990)), null;
                if ("pagetype" in this.$B7) return this.$2xf()
            }
        } catch (n) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logException(1004, n, "Encountered exception when creating startup view model from URL")
        }
        return null
    },
    $CG: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("AppLinking")
    },
    $32y: function() {
        var i = this.$B7.navetn, r = this.$B7.navid, u = this.$B7.navpagetype, n, t;
        switch (u) {
        case"entitylist":
            n = 13;
            break;
        case"dashboard":
            n = 1;
            break;
        case"entityrecord":
            n = 2;
            break;
        default:
            return Microsoft.Crm.Client.Core.ViewModels.$Z
                .$3SB(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093990)), null
        }
        return!r || !i
            ? null
            : (n === 2 && i.toLowerCase() === "Workspace".toLowerCase() && (n = 1), t = Microsoft.Crm.Client.Application
                .App.StartPage.$Es(n, i, r, null, !1, null), $0.$1(t) || (t.$1EM = !0), t)
    },
    $2xf: function() {
        var i = this.$B7.etn, r = this.$B7.id, u = this.$B7.pagetype, t, f, n, e;
        switch (u) {
        case"view":
            t = 13;
            break;
        case"dashboard":
            t = 1;
            break;
        case"interactioncentricdashboard":
            t = 37;
            Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                $0.$1(r) &&
                !$0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                    .get_$de()) &&
                (r = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().get_$de()
                    .toString());
            break;
        case"entity":
        case"create":
            t = 2;
            break;
        case"interactioncentricform":
            t = 40;
            break;
        default:
            return Microsoft.Crm.Client.Core.ViewModels.$Z
                .$3SB(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093990)), null
        }
        return this.$3Vt(t, u, r, i)
            ? !Microsoft.Crm.Client.Core.Framework.$3.$A(i) && !this.$3B6(i)
            ? (Microsoft.Crm.Client.Core.ViewModels.$Z.$3SB(Microsoft.Crm.Client.Core.Framework.$4
                .$lh(-2147093990)), null)
            : Microsoft.Crm.Client.Core.Framework.$6.get_$k() && (f = this.$2zR(i, u), f)
            ? (Microsoft.Crm.Client.Core.ViewModels.$Z.$3S9(null, f), null)
            : (n = Microsoft.Crm.Client.Application.App.StartPage
                .$Es(t, i, r || Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(), null, !1, null), n
                .$9w = this.$B7, e = this.$B7.tabset, Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
                .isFeatureEnabled("AssociatedGridURLAddressability") &&
                !$0.$1(n) &&
                !$0.$1(e) &&
                i === n.$J &&
                (n.$j2 = "AssociatedGrid0", n.add_$7i(this.$$d_$3CT)), u === "create")
            ? (this.$33f(n), null)
            : n
            : (Microsoft.Crm.Client.Core.ViewModels.$Z.$3SB(Microsoft.Crm.Client.Core.Framework.$4
                .$lh(-2147093990)), null)
    },
    $3CT: function(n) {
        var e = this.$B7.tabset, i, u, r, f, t, o;
        if (!$0.$1(n) &&
            !$0.$1(e) &&
            (i = n, i.remove_$7i(this.$$d_$3CT), !$0.$1(i.$F) && "InteractionCentricRelationships" in i.$F)) {
            for (u = i.$F.InteractionCentricRelationships, u.GenerateAssociatedItems(), r = u.$17k, f = !1, t = 0;
                t < r.length;
                ++t)
                if (o = $0.$1(r[t].associatedViewData
                        .$Ho)
                    ? ""
                    : r[t].associatedViewData.$Ho, o.toLowerCase() === e.toLowerCase()) {
                    f = !0;
                    r[t].OpenItem();
                    break
                }
            f || Microsoft.Crm.Client.Core.ViewModels.$Z.$3SB(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093990))
        }
    },
    $3B6: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(n);
        return!!t
    },
    $2zR: function(n, t) {
        var i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(n);
        if (!i) return null;
        if (t === "create")
            switch (i.$d) {
            case"socialactivity":
            case"socialprofile":
                return String.format(Xrm.Internal.getResourceString("Web.cs.createNotSupported"), i.$1P)
            }
        return null
    },
    $1Y9: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Commands.CreateFormCommand(n, n.$J, t);
        i.execute();
        i.dispose()
    },
    $33f: function(n) {
        var t = CrmEncodeDecode.CrmUrlDecode(this.$B7.data), i = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$3Su(t);
        this.$1Y9(n, i)
    },
    $3Vt: function(n, t, i, r) {
        return Microsoft.Crm.Client.Core.Framework.$3.$A(i) &&
            t !== "create" &&
            (n === 2 || n === 40 || n === 1 || n === 37)
            ? !1
            : Microsoft.Crm.Client.Core.Framework.$3.$A(r) && (n === 2 || n === 40 || n === 13 || t === "create")
            ? !1
            : !0
    }
};
Microsoft.Crm.Client.Application.App.$MI = function() {};
Microsoft.Crm.Client.Application.App.$MI.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.$jn = new Microsoft.Crm.Client.Application.App.$MI
};
Microsoft.Crm.Client.Application.App.$MI.prototype = {
    $1A9: !1,
    get_$2hP: function() {
        return!$0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$On())
    },
    get_$1AA: function() { return this.$1A9 },
    set_$1AA: function(n) {
        return this.$1A9 !== n &&
        (this.$1A9 = n, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$On()
            .set_Enabled(this.$1A9)), n
    }
};
Microsoft.Crm.Client.Application.App.$3w = function() { Microsoft.Crm.Client.Application.App.$3w.initializeBase(this) };
Microsoft.Crm.Client.Application.App.$3w.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.$3w.$D) &&
        (Microsoft.Crm.Client.Application.App.$3w.$D = new Microsoft.Crm.Client.Application.App.$3w), Microsoft.Crm
        .Client.Application.App.$3w.$D
};
Microsoft.Crm.Client.Application.App.$3w.prototype = {
    add_$1uX: function(n) { this.$2F("AppUIInitialized", n) },
    remove_$1uX: function(n) { this.$4I("AppUIInitialized", n) },
    $Bj: function(n, t) { this.$Bn(n, t) }
};
Microsoft.Crm.Client.Application.App.$1v = function() {};
Microsoft.Crm.Client.Application.App.$1v.$3Jo = function(n) { Microsoft.Crm.Client.Application.App.$1v.$U8.add(n) };
Microsoft.Crm.Client.Application.App.$1v.$2Yy = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$il.$21 &&
    (n.get_$GB()
        ? Microsoft.Crm.Client.Application.App.$1v.$U8.contains(n) ||
        Microsoft.Crm.Client.Application.App.$1v.$U8.add(n)
        : Microsoft.Crm.Client.Application.App.$1v.$U8.remove(n), Microsoft.Crm.Client.Application.App.$1v
        .$29p(), Microsoft.Crm.Client.Application.App.$1v.$9Z &&
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$il.$2VX(0))
};
Microsoft.Crm.Client.Application.App.$1v.$3IP = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Application.App.$1v.$365().then(function() {
            if (Microsoft.Crm.Client.Application.App.$1v.$9Z) {
                var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$il.$2xd(function(n) {
                    switch (n) {
                    case 0:
                    case 5:
                    case 2:
                        Microsoft.Crm.Client.Application.App.$1v.$2JK(t);
                        break;
                    default:
                        Microsoft.Crm.Client.Application.App.$1v.$2JJ(t)
                    }
                });
                t.always(function() {
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$il.$2VX(0);
                    n.resolve(null)
                })
            } else n.resolve(null)
        },
        function(n) {
            Microsoft.Crm.Client.Core.Framework.$C.$1d("ClientQualityManager_ProcessLastShutdownState",
                1004,
                "Unable to initialize quality management subscribers: " + n.$E)
        }), n.promise()
};
Microsoft.Crm.Client.Application.App.$1v.$365 = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t, u;
    if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$il.$21) {
        t = [];
        for (var r = Microsoft.Crm.Client.Application.App.$1v.$U8
                     .toArray(),
            f = r.length,
            i = 0;
            i < f;
            ++i) u = r[i], Array.add(t, u.$17());
        Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t).always(function() {
            for (var t = 0;
                t < Microsoft.Crm.Client.Application.App.$1v.$U8.get_Count();
                t++
            )
                Microsoft.Crm.Client.Application.App.$1v.$U8.get_$H(t).get_$GB() ||
                    (Microsoft.Crm.Client.Application.App.$1v.$U8.removeAt(t), t--);
            Microsoft.Crm.Client.Application.App.$1v.$29p();
            n.resolve(null)
        })
    } else n.resolve(null);
    return n.promise()
};
Microsoft.Crm.Client.Application.App.$1v.$2JK = function(n) {
    for (var u, i = [], r = Microsoft.Crm.Client.Application.App.$1v.$U8.toArray(), f = r.length, t = 0;
        t < f;
        ++t
    ) u = r[t], Array.add(i, u.$2JK());
    Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i).always(function() { n.resolve(null) })
};
Microsoft.Crm.Client.Application.App.$1v.$2JJ = function(n) {
    for (var u, i = [], r = Microsoft.Crm.Client.Application.App.$1v.$U8.toArray(), f = r.length, t = 0;
        t < f;
        ++t
    ) u = r[t], Array.add(i, u.$2JJ());
    Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i).always(function() { n.resolve(null) })
};
Microsoft.Crm.Client.Application.App.$1v.$29p = function() {
    Microsoft.Crm.Client.Application.App.$1v.$9Z = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
        .get_Instance().$il.$21 &&
        Microsoft.Crm.Client.Application.App.$1v.$U8.get_Count() > 0
};
Microsoft.Crm.Client.Application.App.$1n = function() {};
Microsoft.Crm.Client.Application.App.$1n.$2fV = function() {
    var r = window.applicationCache, u = !$0.$1(r), n, t, f, i;
    if (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache - AppCache exists : " + u), n = !1, t = document
        .getElementsByTagName("html"), t &&
        t.length > 0 &&
        (f = t[0], i = f.getAttribute("manifest"), n = !$0
            .$1(i) &&
            !Microsoft.Crm.Client.Core.Framework.$3.$1S(i)), Microsoft.Crm.Client.Core.Framework.Trace
        .logInfo(5, "AppCache - Manifest specified : " + n), u && n) {
        Microsoft.Crm.Client.Application.App.$1n.$2an();
        try {
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache - Start Update");
            r.update();
            window.setTimeout(Microsoft.Crm.Client.Application.App.$1n.$2ch, 12e4)
        } catch (e) {
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache - Update threw exception");
            Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
        }
    } else Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
};
Microsoft.Crm.Client.Application.App.$1n.$2ch = function() {
    Microsoft.Crm.Client.Application.App.$18.$kI[Microsoft.Crm.Client.Application.App.$18.$Xw] ||
    (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5,
            "AppCache : No event received since 120 secs. Current Appcache status is : " +
            window.applicationCache.status),
        $0.$1(Microsoft.Crm.Client.Application.App.$1n.$1W8) ||
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5,
                "Last Appcache event was : " + JSON.stringify(Microsoft.Crm.Client.Application.App.$1n.$1W8)),
        window.applicationCache.status === 1
            ? Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
            : window.applicationCache.status === 4
            ? Microsoft.Crm.Client.Application.App.$1n.$2YN(null)
            : $.get("version.txt", "_$123", Microsoft.Crm.Client.Application.App.$1n.$2fe, "text"))
};
Microsoft.Crm.Client.Application.App.$1n.$2fe = function(n) {
    var t, i;
    if (!$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K())) {
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5,
            "Check for appCache update failed. No previous server versions...");
        return
    }
    var r = new RegExp("\\d*\\.\\d*", "g"), u = r.exec(n.toString()), f = r.exec(n.toString());
    $0.$1(u) ||
        $0.$1(f) ||
        (t = u[0] + "." + f[0], i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Yd, Microsoft.Crm
                .Client.Core.Framework.Trace
                .logInfo(5, "Retrieved server versions... Old :" + i + " New:  " + t),
            t === i
                ? (Microsoft.Crm.Client.Core.Framework.Trace
                    .logInfo(5, "Appcache FailSafe: No update detected..."), Microsoft.Crm.Client.Application.App.$18
                    .$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0))
                : Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(5, "Appcache FailSafe: AppCache update has failed to complete in 120 secs..."))
};
Microsoft.Crm.Client.Application.App.$1n.$2an = function() {
    var n = window.applicationCache;
    n.onupdateready = Microsoft.Crm.Client.Application.App.$1n.$24S;
    n.onerror = Microsoft.Crm.Client.Application.App.$1n.$1hh;
    n.onnoupdate = Microsoft.Crm.Client.Application.App.$1n.$1hh;
    n.oncached = Microsoft.Crm.Client.Application.App.$1n.$24R;
    n.onchecking = Microsoft.Crm.Client.Application.App.$1n.$1N1;
    n.onobsolete = Microsoft.Crm.Client.Application.App.$1n.$1N1;
    n.ondownloading = Microsoft.Crm.Client.Application.App.$1n.$1N1
};
Microsoft.Crm.Client.Application.App.$1n.$2YN = function(n) {
    var t = window.applicationCache;
    Microsoft.Crm.Client.Application.App.$1n.$to(t, n);
    t.status === 4
        ? Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()
        ? Microsoft.Crm.Client.Application.App.$18.$3TR(1,
            Microsoft.Crm.Client.Core.Framework.$4.$h("Appcache updated").$T7(),
            0)
        : (t.swapCache(), window.location.reload(!0))
        : Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
};
Microsoft.Crm.Client.Application.App.$1n.$2cg = function(n) {
    Microsoft.Crm.Client.Application.App.$1n.$to(window.applicationCache, n);
    Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
};
Microsoft.Crm.Client.Application.App.$1n.$2cf = function(n) {
    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5,
        String.format("AppCache - Event : {0} Status : {1} Details : {2}", n.type, "Cached", JSON.stringify(n)));
    Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18.$Xw, !0)
};
Microsoft.Crm.Client.Application.App.$1n.$2ci = function(n) {
    Microsoft.Crm.Client.Application.App.$1n.$to(window.applicationCache, n)
};
Microsoft.Crm.Client.Application.App.$1n.$to = function(n, t) {
    if (Microsoft.Crm.Client.Application.App.$1n.$1W8 = t, !$0.$1(t)) {
        var i = "ApplicationCacheObjectWasNull";
        if (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "Received appcache event..."), !$0.$1(n))
            switch (n.status) {
            case 2:
                i = "Checking";
                break;
            case 3:
                i = "Downloading";
                break;
            case 1:
                i = "Idle";
                break;
            case 5:
                i = "Obsolete";
                break;
            case 0:
                i = "Uncached";
                break;
            case 4:
                i = "UpdateReady";
                break;
            default:
                i = "Unknown Status"
            }
        try {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(5,
                    String.format("AppCache - Event : {0} Status : {1} Details : {2}", t.type, i, JSON.stringify(t)))
        } catch (r) {
            Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "LogAppCacheEvent failed")
        }
    }
};
Microsoft.Crm.Client.Application.App.$18 = function() {};
Microsoft.Crm.Client.Application.App.$18.$35Q = function() {
    var i;
    Microsoft.Crm.Client.Application.App.$18.$kI = {};
    for (var t = Microsoft.Crm.Client.Application.App.$18
                 .$1jF,
        r = t.length,
        n = 0;
        n < r;
        ++n) i = t[n], Microsoft.Crm.Client.Application.App.$18.$kI[i] = !1
};
Microsoft.Crm.Client.Application.App.$18.$oj = function(n, t) {
    $0.$1(Microsoft.Crm.Client.Application.App.$18.$kI) && Microsoft.Crm.Client.Application.App.$18.$35Q();
    n in Microsoft.Crm.Client.Application.App.$18.$kI &&
    (Microsoft.Crm.Client.Application.App.$18.$kI[n] = t, Microsoft.Crm.Client.Core.Framework.Trace
        .logInfo(1016, "Setting clientStatusFlag : " + n + " to true"));
    Microsoft.Crm.Client.Application.App.$18.$2fT()
};
Microsoft.Crm.Client.Application.App.$18.$2fT = function() {
    for (var i, t = Microsoft.Crm.Client.Application.App.$18.$1jF, r = t.length, n = 0;
        n < r;
        ++n
    ) if (i = t[n], !Microsoft.Crm.Client.Application.App.$18.$kI[i]) return;
    Microsoft.Crm.Client.Core.Framework.Trace.logInfo(1016,
        "All ClientStatusFlags are true, Ready to send clientReady...");
    Microsoft.Crm.Client.Application.App.$18.$w7()
};
Microsoft.Crm.Client.Application.App.$18.$w7 = function() {
    if (!Microsoft.Crm.Client.Application.App.$18.$rA) {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1OW(null);
        Microsoft.Crm.Client.Application.App.$18.$rA = !0;
        for (var n = 0;
            n < Microsoft.Crm.Client.Application.App.$18.$19r.length;
            n++
        ) Microsoft.Crm.Client.Application.App.$18.$19r[n]();
        Microsoft.Crm.Client.Application.App.$18.$19r = new Array(0)
    }
};
Microsoft.Crm.Client.Application.App.$18.$3TR = function(n, t, i) {
    i === 1
        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$19F(n, t)
        : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$19q(n, t)
};
Microsoft.Crm.Client.Application.App.$18.$2ay = function(n) {
    Microsoft.Crm.Client.Application.App.$18.$rA ? n() : Microsoft.Crm.Client.Application.App.$18.$19r.push(n)
};
Microsoft.Crm.Client.Application.App.$13 = function() {
    this.$VU = {};
    this.$2KB = ["MobileClientTelemetry", "MobileClientOfflineAutoOptin"];
    this.$2Qg = ["MobileClientOffline"];
    this.isFeatureInitialized = this.$3ZJ;
    this.isFeatureEnabled = this.$1rc;
    this.isFeatureEnabledByFCBName = this.$3ZI
};
Microsoft.Crm.Client.Application.App.$13.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.$13.$D) &&
        (Microsoft.Crm.Client.Application.App.$13.$D = new Microsoft.Crm.Client.Application.App.$13), Microsoft.Crm
        .Client.Application.App.$13.$D
};
Microsoft.Crm.Client.Application.App.$13.prototype = {
    $ys: null,
    $WN: null,
    $1Bh: null,
    $2WQ: function(n) {
        return!$0.$1(n) && (!n.get_$3LI() || !$0.$1(this.$WN) && n.get_$1XA() in this.$WN && this.$WN[n.get_$1XA()])
    },
    $17: function(n, t) {
        var r, i;
        this.$ys = n;
        this.$WN = t;
        for (var f = Microsoft.Crm.Client.Application.App.Features.FeatureName
                     .$1he,
            e = f.length,
            u = 0;
            u < e;
            ++u)
            r = f[u], (!$0.$1(this.$ys) && r in this.$ys && this.$ys[r].$Ai || !$0.$1(this.$WN) && r in this.$WN) &&
            (i = null, r in this.$VU
                ? (i = this.$VU[r], this.$2WQ(i) && i.get_$1s4() && !i.get_$11q() && i.set_$CG(!0))
                : (i = Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
                    .$1AI(r), this.$2WQ(i) && (i.set_$CG(!0), this.$VU[r] = i)))
    },
    $35b: function(n) {
        var i, t;
        this.$WN = n;
        for (var u = this
                     .$2KB,
            f = u.length,
            r = 0;
            r < f;
            ++r)
            i = u[r], t = Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
                .$1AI(i), !$0.$1(t) &&
                !$0.$1(this.$WN) &&
                t.get_$1XA() in this.$WN &&
                this.$WN[t.get_$1XA()] &&
                (t.set_$CG(!0), this.$VU[i] = t, this.InitializeFeature(i))
    },
    $3Hu: function() {
        for (var n, i, r = this.$2Qg, u = r.length, t = 0;
            t < u;
            ++t
        )
            n = r[t], i = Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
                .$1AI(n), $0.$1(i) || (this.$VU[n] = i, this.PreInitializeFeature(n))
    },
    $1qj: function() {
        for (var i, t = Microsoft.Crm.Client.Application.App.Features.FeatureName.$1he, r = t.length, n = 0;
            n < r;
            ++n
        ) i = t[n], this.InitializeFeature(i);
        MscrmComponents.RegisterComponentsUnderFeatureControl(this)
    },
    GetFeature: function(n) { return this.$VU[n] },
    InitializeFeature: function(n) {
        var t = this.$VU[n];
        $0.$1(t) || !t.get_$CG() || t.get_$11q() || this.$VU[n].$17()
    },
    PreInitializeFeature: function(n) {
        var t = this.$VU[n];
        $0.$1(t) || t.get_$1s4() || this.$VU[n].$2Qf()
    },
    $1rc: function(n) { return!$0.$1(n) && !$0.$1(this.GetFeature(n)) && this.GetFeature(n).get_$CG() },
    $3ZI: function(n) { return $0.$1(this.$1Bh) && this.$3HT(), this.$1rc(this.$1Bh[n]) },
    $3ZJ: function(n) { return!$0.$1(this.GetFeature(n)) && this.GetFeature(n).get_$11q() },
    $37N: function(n) { return!$0.$1(this.GetFeature(n)) && this.GetFeature(n).get_$1s4() },
    $3HT: function() {
        var n, t, r, i;
        this.$1Bh = {};
        n = this.$ys;
        for (t in n) r = { key: t, value: n[t] }, i = r.value, this.$1Bh[i.$1R6] = i.$sC
    }
};
Microsoft.Crm.Client.Application.App.$3p = function() {
    this.$$d_$3DD = Function.createDelegate(this, this.$3DD);
    Microsoft.Crm.Client.Application.App.$3p.resolveInheritance();
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    Microsoft.Crm.Client.Application.App.$3p.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.$3p.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.$3p.$D) &&
        (Microsoft.Crm.Client.Application.App.$3p.$D = new Microsoft.Crm.Client.Application.App.$3p), Microsoft.Crm
        .Client.Application.App.$3p.$D
};
Microsoft.Crm.Client.Application.App.$3p.prototype = {
    $ce: !1,
    $YI: !1,
    $o0: !1,
    $OO: null,
    $Nv: null,
    $1P1: null,
    $1P0: !1,
    $cz: null,
    set_$2es: function(n) {
        return this.$ce !== n &&
        (this.$ce = n, this.$Nv.CameraDisabled = this.$ce, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("deviceSettingInformation", this.$Nv)), n
    },
    get_$1lH: function() { return this.$YI },
    set_$1lH: function(n) {
        return this.$YI !== n &&
        (this.$YI = n, this.$Nv.DeviceAccessDisabled = this.$YI, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("deviceSettingInformation", this.$Nv)), n
    },
    get_$1wE: function() { return this.$o0 },
    set_$1wE: function(n) {
        return this.$o0 !== n &&
        (this.$o0 = n, this.$Nv.PhotoSaveDisabled = this.$o0, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("deviceSettingInformation", this.$Nv)), n
    },
    get_$1qa: function() { return this.$OO },
    set_$1qa: function(n) {
        return this.$OO !== n &&
        (this.$OO = n, this.$Nv.ImageRes = this.$OO, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("deviceSettingInformation", this.$Nv)), n
    },
    get_$fB: function() { return this.get_$1Dx() && !this.$ce },
    get_$2L3: function() { return this.get_$2L2() && !this.$YI },
    get_$37C: function() { return this.get_$37B() && !this.$YI && !this.$ce },
    get_$1Dx: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("DeviceIntegration") &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_CameraAvailable()
    },
    get_$2L2: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("DeviceIntegration") &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_$3B9()
    },
    get_$37B: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("DeviceIntegration") &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_CameraAvailable()
    },
    get_$2L1: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("DeviceIntegration") &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_$2sS()
    },
    get_$3Ry: function() { return this.get_$1Dx() || this.get_$2L2() || this.get_$2L1() },
    $17: function() {
        this.$1P0 = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO;
        this.$Nv = {};
        var t = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
                .get_CameraAvailable(),
            n = this,
            i = this;
        Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("deviceSettingInformation").then(function(i) {
                $0.$1(i)
                    ? (n.$ce = !t, n.$OO = "DeviceDefault", n
                        .$o0 = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$n1 || !t, n.$YI = !0)
                    : (n.$ce = i.CameraDisabled || !t, n.$YI = i.DeviceAccessDisabled, n.$OO = i.ImageRes, n
                        .$o0 = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
                        .$n1 ||
                        i.PhotoSaveDisabled ||
                        !t);
                n.$Nv.CameraDisabled = n.$ce;
                n.$Nv.DeviceAccessDisabled = n.$YI;
                n.$Nv.ImageRes = n.$OO;
                n.$Nv.PhotoSaveDisabled = n.$o0
            },
            function(n) {
                Microsoft.Crm.Client.Core.Framework.$C.$61("DeviceIntegrationManager_Initialize",
                    1004,
                    "Error retrieving Session State DeviceIntegration: " + n.$E)
            })
    },
    $39V: function() {
        if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_DeviceFeatureAvailable() &&
            (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ||
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS())) {
            var n = null;
            document.addEventListener("deviceready", this.$$d_$3DD);
            this.$1P1 = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Cordova Init");
            this.$1P1.start();
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X && (n = ["scripts/android/cordova.js"]);
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() && (n = ["scripts/ios/cordova.js"]);
            Microsoft.Crm.Client.Core.Framework.$1o.$1D7(n, 0, null)
        }
    },
    $qx: function(n) {
        this.$1P0
            ? n()
            : ($0.$1(this.$cz) && (this.$cz = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Function))), this.$cz
                .add(n))
    },
    $3DD: function() {
        if (this.$1P0 = !0, this.$1P1.stop(), document.removeEventListener("deviceready", this.$$d_$3DD), !$0
            .$1(this.$cz)) {
            for (var n = 0; n < this.$cz.get_Count(); n++) $0.$1(this.$cz.get_$H(n)) || this.$cz.get_$H(n)();
            this.$cz.clear()
        }
    }
};
Microsoft.Crm.Client.Application.App.$6R = function() {};
Microsoft.Crm.Client.Application.App.$6R.$35J = function() {
    var n = Mscrm.CrmUri.create("/AppWebServices/MetricsReportingService.asmx/Report");
    Microsoft.Crm.Client.Core.Framework.$1C.get_$5()
        .set_$38L(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$1O.$1EY);
    Microsoft.Crm.Client.Core.Framework.$1C.get_$5().set_$3L3(n.toString());
    Dynamics.Telemetry.constants.InMemoryActivitiesReportingThreshold = 1
};
Microsoft.Crm.Client.Application.App.$6R.$3AQ = function() {
    var t = Microsoft.Crm.Client.Application.App.$6R.$2zN(),
        n = new Microsoft.Crm.Client.Core.Framework.$N6("ClientShimLoad", t);
    Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$hz(n);
    Microsoft.Crm.Client.Application.App.$6R.$3AN(n);
    Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$VZ(n.rid)
};
Microsoft.Crm.Client.Application.App.$6R.$3AN = function(n) {
    var o = {
            "Shim Init": "ShimInit",
            "JavaScript Init": "JsInit",
            "Style Init": "CssInit",
            "RequireJs JavaScript Init": "RequireJsInit",
            "Delayed Assets Init": "DelayedAssetsInit",
            DataSource_CheckRemoteDataSourceUpdates: "ServerUpdatesCheck",
            DataSource_SyncAllEntityAndAttributeMetadata: "SyncEntityAttributeMetadata",
            DataSource_SyncAllApplicationMetadata: "SyncApplicationMetadata"
        },
        s = {},
        u = null,
        y,
        f,
        e,
        r,
        t,
        c,
        l,
        a,
        d,
        g;
    if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
    (u = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$203(), !$0
        .$1(u))) for (y = u.length, f = 0; f < y; f++) e = u[f], r = e.Name, e.StopTime !== -1 ? o[r] = e[r] : s[r] = r;
    for (var i = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Framework.$N5)),
        p = 0,
        w = 0,
        b = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$QL(),
        nt = b.length,
        h = 0;
        h < nt;
        ++h)
        t = b[h], t.$1b === "PageLoadStart"
            ? n.t = t.$4o
            : t.$1b in o
            ? (c = Math.round(t.$2N2()), c > 0 &&
                (l = o[t.$1b], i.set_$H(l, new Microsoft.Crm.Client.Core.Framework.$N5(l, c, t.get_$1lm(), n, {}))))
            : t.$1b in s
            ? (a = s[t.$1b], i.set_$H(a, new Microsoft.Crm.Client.Core.Framework.$N5(a, null, t.get_$1lm(), n, {})))
            : t.$1b === "DataSource_SyncEntityAttributeBatch"
            ? p++
            : t.$1b === "DataSource_SyncApplicationMetadataBatch" && w++;
    i.$3ZW("SyncEntityAttributeMetadata") && (i.get_$H("SyncEntityAttributeMetadata").p.Batches = p);
    i.$3ZW("SyncApplicationMetadata") && (i.get_$H("SyncApplicationMetadata").p.Batches = w);
    for (var k = i
                 .get_$396(),
        tt = k.length,
        v = 0;
        v < tt;
        ++v) d = k[v], g = i.get_$H(d), Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$1hH(g)
};
Microsoft.Crm.Client.Application.App.$6R.$2zN = function() {
    var n = {}, t, i;
    return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
        ? (t = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
            .get_DeviceState(), n.Manufacturer = t.get_$1lK(), n.DeviceModel = t.get_$1lL(), n.InstallId = Microsoft.Crm
            .Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1r4(), n.ShimVersion = String
            .format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Application_Version_Format"),
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$2N(),
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$Ao(),
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$14p(),
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1u9()), n
            .FormFactor = t.get_$2C(), n.UserAgent = window.navigator
            .userAgent, Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$21 &&
        (i = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.get_MailState(), n
            .MailAppHostType = i.get_$3Ai(), n.MailAppHostVersion = i.get_$3Aj(), n.MailAppOWAView = i.get_$3Ak()), n
            .ServerVersion = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$P0.$X8, n
            .DBVersion = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$P0.$SX, n
            .OSTypeVersion = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1pm())
        : n.PalEnabled = 0, n
};
Microsoft.Crm.Client.Application.App.$51 = function() {
    if (this.$$d_$3Ii = Function.createDelegate(this, this.$3Ii), Microsoft.Crm.Client.Core.Framework.PAL.Core
        .NativeBridge.get_Instance().$1T.$21) {
        var n = this;
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
            .AddPropertyChangedListener(Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$R.$1ww.$I,
                function() { n.$2Yz() });
        this.$2Yz()
    }
};
Microsoft.Crm.Client.Application.App.$51.$T6 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.$51.$D) &&
        (Microsoft.Crm.Client.Application.App.$51.$D = new Microsoft.Crm.Client.Application.App.$51), Microsoft.Crm
        .Client.Application.App.$51.$D
};
Microsoft.Crm.Client.Application.App.$51.$17 = function() { Microsoft.Crm.Client.Application.App.$51.$T6() };
Microsoft.Crm.Client.Application.App.$51.prototype = {
    $1Ii: !1,
    $2Yz: function() {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$3Ih()
            ? this.$1Ii ||
            (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M().add_$1F5(this.$$d_$3Ii), this.$1Ii = !0)
            : this.$1Ii &&
            (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M().remove_$1F5(this.$$d_$3Ii), this
                .$1Ii = !1)
    },
    $3Ii: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T
            .$3Va(new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$PE(t.$UB))
    }
};
Microsoft.Crm.Client.Application.App.$j = function() {};
Microsoft.Crm.Client.Application.App.$j.$1bw = function() {
    var n, t;
    if ($0.$1(Microsoft.Crm.Client.Application.App.$j.$9D))
        if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
            .get_PALEnabled())
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X
                ? window.setTimeout(function() { Microsoft.Crm.Client.Application.App.$j.$2He() }, 50)
                : Microsoft.Crm.Client.Application.App.$j.$2He();
        else {
            if (Microsoft.Crm.Client.Application.App.$j.$9D = {}, Microsoft.Crm.Client.Application.App.$j.$9D
                    .Initializing = "Please stay on this screen while we get things ready for you...", Microsoft.Crm
                    .Client
                    .Application.App.$j.$9D.UserEducationTip2 = "Press anywhere on a field to enter data.", Microsoft
                    .Crm
                    .Client.Application.App.$j.$9D.SyncProgressIndicator = "{0}/{1}", Microsoft.Crm.Client.Application
                    .App
                    .$j.$9D.StepProgressIndicator = "({0}%)", Microsoft.Crm.Client.Application.App.$j.$9D
                    .SyncProgressIndicatorTextStep1 = "Getting started", Microsoft.Crm.Client.Application.App.$j.$9D
                    .SyncProgressIndicatorTextStep2 = "Downloading metadata", Microsoft.Crm.Client.Application.App.$j
                    .$9D
                    .SyncProgressIndicatorTextStep3 = "Processing metadata", Microsoft.Crm.Client.Application.App.$j.$9D
                    .SyncProgressIndicatorTextStep4 = "Downloading customizations", Microsoft.Crm.Client.Application.App
                    .$j
                    .$9D
                    .SyncProgressIndicatorTextStep5 = "Processing customizations",
                Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2
                    ? Microsoft.Crm.Client.Application.App.$j.$9D.UserEducationHeaderTitle_Phone = "Tips."
                    : (Microsoft.Crm.Client.Application.App.$j.$9D
                            .UserEducationHeaderTitle = "Here are some tips to help you get around", Microsoft.Crm
                            .Client
                            .Application.App.$j.$9D
                            .UserEducationTip1 =
                            "Swipe up from the bottom edge to see commands related to what you're doing.",
                        Microsoft.Crm.Client.Application.App.$j.$9D
                            .UserEducationTip3 =
                            "Press and hold to see more options (the same as right-click with a mouse)."),
                Microsoft.Crm.Client.Core.Framework.$6
                    .get_$k())
                for (Microsoft.Crm.Client.Application.App.$j.$9D.Initializing = Microsoft.Crm.Client.Core.Framework.$1u
                        .$b("_initializing"), Microsoft.Crm.Client.Application.App.$j.$9D
                        .UserEducationHeaderTitle = Microsoft.Crm.Client.Core.Framework.$1u
                        .$b("_userEducationHeader"), n = 1;
                    n <= Microsoft.Crm.Client.Application.App.$j.$1te;
                    n++)
                    t = n.toString(), Microsoft.Crm.Client.Application.App.$j
                        .$9D["SyncProgressIndicatorTextStep" + t] = Microsoft.Crm.Client.Core.Framework.$1u
                        .$b("_syncStep" + t);
            Microsoft.Crm.Client.Application.App.$j.$1hp(Microsoft.Crm.Client.Application.App.$j.$9D)
        }
    else Microsoft.Crm.Client.Application.App.$j.$1hp(Microsoft.Crm.Client.Application.App.$j.$9D);
    Microsoft.Crm.Client.Application.App.$j.$1AX = 0
};
Microsoft.Crm.Client.Application.App.$j.$2He = function() {
    (!Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X ||
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$yQ() > 1) &&
        Array.addRange(Microsoft.Crm.Client.Application.App.$j.$22B, Microsoft.Crm.Client.Application.App.$j.$2ZC);
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$1pz(Microsoft.Crm.Client.Application
        .App.$j.$22B,
        function(n) {
            var i, r, t;
            if (!$0.$1(n)) {
                Microsoft.Crm.Client.Application.App.$j.$9D = n;
                i = Microsoft.Crm.Client.Application.App.$j.$9D;
                for (r in i)
                    t = { key: r, value: i[r] }, t.key === Microsoft.Crm.Client.Application.App.$j.$9D[t.key] &&
                        (Microsoft.Crm.Client.Application.App.$j.$9D[t.key] = "");
                Microsoft.Crm.Client.Application.App.$j.$1hp(Microsoft.Crm.Client.Application.App.$j.$9D)
            }
        })
};
Microsoft.Crm.Client.Application.App.$j.$1hp = function(n) {
    var r = $("#WaitLabel", window.document.body),
        i = $("#UserEducationTitle", window.document.body),
        u = $("#HelpTip1", window.document.body),
        f = $("#HelpTip2", window.document.body),
        e = $("#HelpTip3", window.document.body),
        t;
    $0.$1(n.languageCode) ||
    (t = Microsoft.Crm.Client.Application.App.$2Q.$2zv(Microsoft.Crm.Client.Application.App.$j.$9D.languageCode
        .toString()), $0.$1(t) ||
    (r.css("font-family", t["SegoeUI-Light"]), i.css("font-family", t.SegoeUI), u.css("font-family", t.SegoeUI), f
        .css("font-family", t.SegoeUI), e.css("font-family", t.SegoeUI)));
    r.html($1Y.$Px(n.Initializing.toString()));
    f.html($1Y.$Px(n.UserEducationTip2.toString()));
    Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2
        ? i.html($1Y.$Px(n.UserEducationHeaderTitle_Phone.toString()))
        : (i.html($1Y.$Px(n.UserEducationHeaderTitle.toString())), u.html($1Y.$Px(n.UserEducationTip1.toString())), e
            .html($1Y.$Px(n.UserEducationTip3.toString())));
    Microsoft.Crm.Client.Application.App.$j.$2Wh()
};
Microsoft.Crm.Client.Application.App.$j.$2Wh = function() {
    var n, t;
    Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
    (Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        $("#WarmLoadCRMUILoading", window.document.body)
        .css("display", "none"), $("#UserEducation", window.document.body).css("display", "block"));
    Microsoft.Crm.Client.Application.App.$j.$wH ||
    (Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        ? Microsoft.Crm.Client.Application.App.$j.$wH = "/nga/resources/images/interaction_centric_user_education.png"
        : Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2
        ? ($("#HelpTip1", window.document.body).css("display", "none"), $(window.document.body)
            .addClass("phone"), Microsoft.Crm.Client.Application.App.$j
            .$wH = "/nga/resources/images/user_education_phone.png")
        : Microsoft.Crm.Client.Application.App.$j.$wH = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
        .get_IsIOS() ||
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X
        ? "/nga/resources/images/user_education_ios_android.png"
        : "/nga/resources/images/user_education.png");
    n = "userEducationImage";
    Microsoft.Crm.Client.Core.Framework.$6.get_$k() && (n = "interactionCentricUserEducationImage");
    t = window.document.getElementById(n);
    t.src = Microsoft.Crm.Client.Application.App.$j.$wH;
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .remove_$1F5(Microsoft.Crm.Client.Application.App.$j.$1lS);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .add_$1F5(Microsoft.Crm.Client.Application.App.$j.$1lS)
};
Microsoft.Crm.Client.Application.App.$j.$1DX = function() {
    $("#UserEducation", window.document.body).css("display", "none");
    var n = window.document.getElementById("userEducationImage");
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .remove_$1F5(Microsoft.Crm.Client.Application.App.$j.$1lS)
};
Microsoft.Crm.Client.Application.App.$j.$351 = function() {
    $("#LoadingSection", window.document.body).css("display", "none")
};
Microsoft.Crm.Client.Application.App.$j.$1lS = function(n, t) {
    var i, r;
    Array.indexOf(Microsoft.Crm.Client.Application.App.$j.$2A4, t.$UB) !== -1 &&
    (i = "", t.$1JE >= 0
        ? (r = 0, t.$1Yz < t.$1JE &&
        (r = Math.floor(t.$1Yz * 100 / t.$1JE), !$0.$1(Microsoft.Crm.Client.Application.App.$j.$9D) &&
            Microsoft.Crm.Client.Application.App.$j.$9D.StepProgressIndicator &&
            $("#StepProgressIndicator", window.document.body)
            .text(String.format(Microsoft.Crm.Client.Application.App.$j.$9D.StepProgressIndicator.toString(), r))))
        : (Microsoft.Crm.Client.Application.App.$j
                .$1AX++, i = "SyncProgressIndicatorTextStep" + Microsoft.Crm.Client.Application.App.$j.$1AX.toString(),
            $0.$1(Microsoft.Crm.Client.Application.App.$j.$9D) ||
            (Microsoft.Crm.Client.Application.App.$j.$9D.SyncProgressIndicator &&
                $("#SyncProgressIndicator", window.document.body)
                .text(String.format(Microsoft.Crm.Client.Application.App.$j.$9D.SyncProgressIndicator.toString(),
                    Microsoft.Crm.Client.Application.App.$j.$1AX,
                    Microsoft.Crm.Client.Application.App.$j
                    .$1te)), Microsoft.Crm.Client.Application.App.$j.$9D[i] &&
                $("#SyncProgressIndicatorText", window.document.body)
                .text(Microsoft.Crm.Client.Application.App.$j.$9D[i]
                    .toString())), $("#StepProgressIndicator", window.document.body).empty()))
};
Microsoft.Crm.Client.Application.App.Automation = function() {};
Microsoft.Crm.Client.Application.App.Automation.GetPerformanceMarker = function(n, t) {
    for (var i, u = Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$QL(), r = u.length - 1;
        r >= 0;
        r--
    ) if ((i = u[r], i.$1b === n) && ($0.$1(t) || i.$1RG() === t)) return i.$4o;
    return-1
};
Microsoft.Crm.Client.Application.App.Automation
    .IsMetadataSyncCompleted = function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$22Q() ? !0 : !1
    };
Microsoft.Crm.Client.Application.App.Automation
    .ClearAllPerformanceMarkers = function() { Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1ON() };
Microsoft.Crm.Client.Application.App.Automation.EnablePerformanceMarkers = function(n) {
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.set_$CG(n);
    n && Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$3Qz(-1)
};
Microsoft.Crm.Client.Application.App.Automation.ClearLocalDatabase = function() {
    Microsoft.Crm.Client.Application.App.StartPage.UnsetISHSyncCookie();
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().$XI()
        .done(function() { window.location.replace("about:blank") })
};
Microsoft.Crm.Client.Application.App.Automation
    .CollectGlobalObjectCounts = function() {
        return JSON.stringify(Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.$1jM())
    };
Microsoft.Crm.Client.Application.App.Automation
    .CollectApplicationMetadataSyncErrors = function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$24V()
    };
Microsoft.Crm.Client.Application.App.Automation
    .InvalidateAllApplicationMetadata = function() { Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1rD() };
Microsoft.Crm.Client.Application.App.Automation
    .EnableGlobalObjectTracking = function(n) { Microsoft.Crm.Client.Core.Framework.$1r.set_$UF(n) };
Microsoft.Crm.Client.Application.App.Automation
    .GetMemoryUsage = function() { return Microsoft.Crm.Client.Application.App.Automation.$1th };
Microsoft.Crm.Client.Application.App.Automation
    .RefreshMemoryUsage = function() {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T
            .$1pd(function(n) { Microsoft.Crm.Client.Application.App.Automation.$1th = Math.round(n / 1024) })
    };
Microsoft.Crm.Client.Application.App.Automation
    .RetrieveInAppAutomationInformation = function() {
        return JSON.stringify({
            InAppAutomationState: Microsoft.Crm.Client.Application.App.Automation.$mY,
            InAppAutomationMessage: Microsoft.Crm.Client.Application.App.Automation.$mX
        })
    };
Microsoft.Crm.Client.Application.App.Automation.SetupInAppAutomationCollectorService = function(n) {
    Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.SetCollectorServerUrl(n);
    Microsoft.Crm.Client.Core.ViewModels.$1q.$20W(!0).then(function(n) {
            Microsoft.Crm.Client.Application.App.Automation.$mX = "Collector session: " + n + "\n";
            Microsoft.Crm.Client.Application.App.Automation.$mY = 2
        },
        function(n) {
            Microsoft.Crm.Client.Application.App.Automation.$mX = "Error creating collector session: " + n.$E + "\n";
            Microsoft.Crm.Client.Application.App.Automation.$mY = 0
        })
};
Microsoft.Crm.Client.Application.App.Automation.ExecuteInAppAutomationTestCase = function(n, t) {
    var i, r;
    if (Microsoft.Crm.Client.Application.App.Automation.$mY = 3, i = Microsoft.Crm.Client.Core.ViewModels.$o
        .CreateTestCaseForQA(n), $0.$1(i)) {
        Microsoft.Crm.Client.Application.App.Automation.$mY = 0;
        Microsoft.Crm.Client.Application.App.Automation.$mX = "Inapp automation testcase creation failed.";
        return
    }
    Microsoft.Crm.Client.Application.App.Automation.$mX = "Executing " +
        i.$4Z +
        " " +
        Microsoft.Crm.Client.Core.ViewModels.$S.toString(i.$2p) +
        "\n";
    r = new Microsoft.Crm.Client.Core.ViewModels.$5Y(i, t);
    r.$BU().then(function() {
            Microsoft.Crm.Client.Application.App.Automation.$mY = 1;
            Microsoft.Crm.Client.Application.App.Automation
                .$mX = i.$4Z +
                " " +
                Microsoft.Crm.Client.Core.ViewModels.$S.toString(i.$2p) +
                " Completed with Success\n"
        },
        function() {
            Microsoft.Crm.Client.Application.App.Automation.$mY = 0;
            Microsoft.Crm.Client.Application.App.Automation
                .$mX = i.$4Z +
                " " +
                Microsoft.Crm.Client.Core.ViewModels.$S.toString(i.$2p) +
                " Completed with Exception\n"
        })
};
Microsoft.Crm.Client.Application.App.Automation
    .GoOffline = function() { Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.set_$s(!1) };
Microsoft.Crm.Client.Application.App.Automation
    .ForceOfflineSync = function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R().get_$3C() &&
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R().$1z0()
    };
Microsoft.Crm.Client.Application.App.$2U = function() {};
Microsoft.Crm.Client.Application.App.$2U.$3Hn = function() {
    var n = [new Microsoft.Crm.Client.Application.App.Components.$7i];
    Microsoft.Crm.Client.Core.Framework.$2U.$3Ho(n)
};
Microsoft.Crm.Client.Application.App.$2U.$qr = function() {
    var n = [
        new Microsoft.Crm.Client.Application.App.Components.$Lm, new Microsoft.Crm.Client.Application.App.Components.$4F
    ];
    return Microsoft.Crm.Client.Core.Framework.$2U.$qr(n)
};
Microsoft.Crm.Client.Application.App.ShimBackHandler = function() {
    this.$$d_$3Bu = Function.createDelegate(this, this.$3Bu)
};
Microsoft.Crm.Client.Application.App.ShimBackHandler
    .get_$5 = function() {
        return $0.$1(Microsoft.Crm.Client.Application.App.ShimBackHandler.$D) &&
        (Microsoft.Crm.Client.Application.App.ShimBackHandler.$D = new Microsoft.Crm.Client.Application.App
            .ShimBackHandler), Microsoft.Crm.Client.Application.App.ShimBackHandler.$D
    };
Microsoft.Crm.Client.Application.App.ShimBackHandler.prototype = {
    $39I: function(n) { n.add_$3CW(this.$$d_$3Bu) },
    $3Bu: function() { this.$2ng() },
    $2ng: function() {
        var t = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(), n;
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState().get_$2RQ()
            ? Microsoft.Crm.Client.Core.Controls.$4X.get_$5().$2np()
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$29z()
            ? Microsoft.Crm.Client.Core.ViewModels.$29.$SJ("InlineDialog", null)
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$2Qa()
            ? (n = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_DialogConductor()
                .get_Top(), Microsoft.Crm.Client.Core.ViewModels.MessageDialogViewModel.isInstanceOfType(n)
                ? n.$Ux()
                : Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel.isInstanceOfType(n) && n.$V1())
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$2RH()
            ? Microsoft.Crm.Client.Core.ViewModels.QuickCreateFormViewModel
            .isInstanceOfType(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .get_DialogConductor().get_Top()) &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_DialogConductor()
            .get_Top().get_$1Uo() &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_DialogConductor()
            .get_Top().$V1()
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$2Xe()
            ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_DialogConductor()
            .get_Top().$34Y()
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_AppBarVisible()
            ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$19u().collapse()
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$2Wk()
            ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$12n().$6T
            .set_Visible(!1)
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$2J1()
            ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$37().$AF
            .set_Visible(!1)
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.get_NavigationState()
            .get_$25x()
            ? (Microsoft.Crm.Client.Core.ViewModels.AssociateFormViewModel
                .isInstanceOfType(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                    .get_DialogConductor().get_Top()) &&
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_DialogConductor()
                .get_Top().$V1(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .get_CanGoBack() &&
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$qo().execute())
            : (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39
                .updateBackBehavior(), Microsoft.Crm.Client.Core.Framework.Trace
                .logWarning(4, "Shim back button is firing event to server in a situation where it should not be"))
    }
};
Microsoft.Crm.Client.Application.App.$11 = function(n, t, i, r) {
    if (this.$$d_$2Zx = Function.createDelegate(this, this.$2Zx), this.$$d_$2Zy = Function
        .createDelegate(this, this.$2Zy), Microsoft.Crm.Client.Application.App.$11
        .initializeBase(this), !n || !t || !i)
        throw Error.argumentNull("dataSource|authenticationManager|applicationState");
    this.$5i = n;
    this.$19E = t;
    this.$qh = i;
    r && (r.add_$3F2(this.$$d_$2Zy), r.add_$3EZ(this.$$d_$2Zx))
};
Microsoft.Crm.Client.Application.App.$11.get_$5 = function() {
    if (!Microsoft.Crm.Client.Application.App.$11.$D)
        throw Error
            .invalidOperation("UserSecurityManager.Instance cannot be accessed before UserSecurityManager.Initialize is called.");
    return Microsoft.Crm.Client.Application.App.$11.$D
};
Microsoft.Crm.Client.Application.App.$11.$17 = function(n, t, i, r) {
    Microsoft.Crm.Client.Application.App.$11.$D = new Microsoft.Crm.Client.Application.App.$11(n, t, i, r)
};
Microsoft.Crm.Client.Application.App.$11.prototype = {
    $5i: null,
    $19E: null,
    $qh: null,
    $XC: function(n, t) {
        var i = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), r, u, f;
        return this.$qh.get_$1Tp()
            ? !this.$5i.$JT() ||
            this.$5i.get_$K().$3G.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) ||
            this.$5i.get_$K().$3G.equals(n) && this.$5i.get_$K().get_$Jl().equals(t)
            ? i.resolve(!0)
            : this.$5i.get_$K().$Dr ||
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl ||
            Microsoft.Crm.Client.Core.Framework.$3.$A(this.$5i.get_$1WF())
            ? (u = this, f = this, this.$1j9().then(function() { i.resolve(!0) }, function(n) { i.reject(n) }))
            : this.$3SF(i)
            : !this.$5i.$JT() ||
            this.$5i.get_$K().$3G.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) ||
            this.$5i.get_$K().$3G.equals(n)
            ? i.resolve(!1)
            : (r = this, this.$5i.$wF(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094002, this.$5i.get_$K().$AN))
                .always(function() { i.reject(r.$5i.get_$K().get_$102()) })), i.promise()
    },
    $on: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return this.$26H(!0).then(function(i) {
                i
                    ? n.resolve(!1)
                    : t.$26J(!0).then(function(i) {
                            i
                                ? n.resolve(!1)
                                : t.$3O9().then(function(i) {
                                        n.resolve(i);
                                        t.$19E.$20G();
                                        Microsoft.Crm.Client.Core.Framework.$C
                                            .$C("SignOutUser", 4, "User signed out successfully")
                                    },
                                    function() {
                                        n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993));
                                        t.$1cH()
                                    })
                        },
                        function() { n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993)) })
            },
            function(t) {
                Microsoft.Crm.Client.Core.Framework.Trace.logError(4, t.$E);
                n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993))
            }), n.promise()
    },
    $14Q: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return this.$26H(!1).then(function(i) {
                i
                    ? n.resolve(!1)
                    : t.$26J(!1).then(function(i) {
                            i
                                ? n.resolve(!1)
                                : t.$1j9().then(function() {
                                        n.resolve(!0);
                                        t.$19E.$2RU();
                                        Microsoft.Crm.Client.Core.Framework.$C
                                            .$C("ReconfigureUser", 4, "User reconfigured successfully")
                                    },
                                    function() {
                                        n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993));
                                        t.$1cH()
                                    })
                        },
                        function() { n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993)) })
            },
            function(t) {
                Microsoft.Crm.Client.Core.Framework.Trace.logError(4, t.$E);
                n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993))
            }), n.promise()
    },
    $1cH: function() { Microsoft.Crm.Client.Core.ViewModels.$Z.$1cG(-2147093993) },
    $3SF: function(n) {
        var t = this,
            i = function() { t.$1j9().then(function() { n.resolve(!0) }, function(t) { n.reject(t) }) },
            r = this,
            u = function() { r.$19E.$25s() },
            f = Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$IJ()
                ? "SignOut_Previous_User_Message_MoCAOffline"
                : "SignOut_Previous_User_Message";
        Microsoft.Crm.Client.Core.ViewModels.$1S.$20B("",
            String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6(f),
                this.$5i.get_$K().$AN,
                this.$5i.get_$K().get_$nl()),
            u,
            i,
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Button_Label_No"),
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Button_Label_Yes"))
    },
    $3O9: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), t, i;
        return this.$qh.get_$1Tp()
            ? (Microsoft.Crm.Client.Core.ViewModels.$2I.get_$5().$IO.$76(), t = this, i = this, Microsoft.Crm.Client
                .Core.Imported.DeferredPromiseHelper.when(this.$5i.$221(), this.$5i.$1OM())
                .then(function() { n.resolve(!0) },
                    function() { n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993)) }))
            : n.resolve(!1), n.promise()
    },
    $26H: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
        if (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$YK() > 0) {
            var u = this,
                i = function() {
                    var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 31);
                    n.execute();
                    n.dispose();
                    t.resolve(!0)
                },
                f = this,
                r = function() { t.resolve(!1) };
            Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("DialogTitle_UnsavedDrafts"),
                this.$2z0(n),
                1,
                i,
                r,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_ViewDrafts"),
                this.$1Cf(n))
        } else t.resolve(!1);
        return t.promise()
    },
    $1Cf: function(n) {
        return n
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_Signout")
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_Reconfigure")
    },
    $2z0: function(n) {
        return this.$qh.get_$1Tp()
            ? String.format(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Drafts_Page_Warning_Message"),
                this.$1Cf(n).toLocaleLowerCase())
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("NoReconfigureSupport_Drafts_Page_Warning_Message")
    },
    $1j9: function() {
        Microsoft.Crm.Client.Core.ViewModels.$2I.get_$5().$IO.$76();
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(this.$5i.$1OO(), this.$5i.$1OM())
            .then(function() { n.resolve(!0) },
                function() { n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093993)) }), n.promise()
    },
    $26J: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4), i, r;
        return Xrm.Utility.isAppOfflineSyncEnabled() && Xrm.Utility.isMocaOfflineFeatureEnabled()
            ? (i = this, r = this, this.$2fc(n).then(function(r) {
                    if (r)
                        if (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$2XX() > 0) {
                            var u = function() {
                                    var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 13);
                                    n.$J = "syncerror";
                                    n.$19 = {};
                                    n.$19.ListDefinitionId = "F1203E8B-6C6A-4210-906E-8428CB1FDE68";
                                    n.execute();
                                    n.dispose();
                                    t.resolve(!0)
                                },
                                f = function() { t.resolve(!1) };
                            Microsoft.Crm.Client.Core.ViewModels.$1S
                                .$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                                    .$6("DialogTitle_UnResolvedSyncErrors"),
                                    String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                                        .$6("Offline_SyncError_Records_Warning_Message"),
                                        i.$1Cf(n).toLocaleLowerCase()),
                                    1,
                                    u,
                                    f,
                                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_ViewSyncErrors"),
                                    i.$1Cf(n))
                        } else t.resolve(!1);
                    else t.resolve(!0)
                },
                function(n) { t.reject(n) }))
            : t.resolve(!1), t.promise()
    },
    $2fc: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4),
            i = this,
            r = this;
        return Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance().$1qM()
            .then(function(r) {
                    if (r) {
                        var u = function() { t.resolve(!0) }, f = function() { t.resolve(!1) };
                        Microsoft.Crm.Client.Core.ViewModels.$1S
                            .$15X(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("DialogTitle_UnSyncedRecords"),
                                String.format(Microsoft.Crm.Client.Core.Framework.Common.$2
                                    .$6("Offline_Records_Warning_Message"),
                                    i.$1Cf(n).toLocaleLowerCase()),
                                1,
                                u,
                                f)
                    } else t.resolve(!0)
                },
                function(n) { t.reject(n) }), t.promise()
    },
    $2Zx: function() { this.$14Q() },
    $2Zy: function() { this.$on() }
};
Microsoft.Crm.Client.Application.App.$2Q = function() {};
Microsoft.Crm.Client.Application.App.$2Q.$2zv = function(n) {
    if ($0.$1(n)) return null;
    switch (n.toLowerCase()) {
    case"ja-jp":
    case"ja":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(1041);
    case"zh-hans":
    case"zh-hans-cn":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(2052);
    case"zh-hant":
    case"zh-hant-tw":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(1028);
    case"hi":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(1081);
    case"ko":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(1042);
    case"th":
        return Microsoft.Crm.Client.Application.App.$2Q.$sq(1054);
    default:
        return null
    }
};
Microsoft.Crm.Client.Application.App.$2Q.$sq = function(n) {
    var t = {};
    return t.SegoeUI = Microsoft.Crm.Client.Application.App.$2Q.$1Cp(n, "SegoeUI"), t["SegoeUI-Bold"] = Microsoft.Crm
        .Client.Application.App.$2Q.$1Cp(n, "SegoeUI-Bold"), t["SegoeUI-Semibold"] = Microsoft.Crm.Client.Application
        .App.$2Q.$1Cp(n, "SegoeUI-Semibold"), t["SegoeUI-Light"] = Microsoft.Crm.Client.Application.App.$2Q
        .$1Cp(n, "SegoeUI-Light"), t["SegoeUI-Semilight"] = Microsoft.Crm.Client.Application.App.$2Q
        .$1Cp(n, "SegoeUI-Semilight"), t
};
Microsoft.Crm.Client.Application.App.$2Q.$37F = function(n) {
    return Array.contains(Microsoft.Crm.Client.Application.App.$2Q.$2AK, n.toString()) ? !0 : !1
};
Microsoft.Crm.Client.Application.App.$2Q.$1Cp = function(n, t) {
    if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X) {
        if (Microsoft.Crm.Client.Application.App.$2Q.$37F(n)) return n === 1042 ? "initial" : "Android CJK";
        if (n === 1081) return"Android Hindi";
        if (n === 1054) return"Android Thai"
    }
    switch (n) {
    case 1041:
        switch (t) {
        case"SegoeUI":
        case"SegoeUI-Light":
        case"SegoeUI-Semilight":
            return"HiraKakuProN-W3, Meiryo UI";
        case"SegoeUI-Bold":
        case"SegoeUI-Semibold":
            return"HiraKakuProN-W6, Meiryo UI";
        default:
            return"HiraKakuProN-W3, Meiryo UI"
        }
    case 2052:
        switch (t) {
        case"SegoeUI":
        case"SegoeUI-Light":
        case"SegoeUI-Semilight":
            return"STHeitiSC-Light, Microsoft YaHei UI";
        case"SegoeUI-Bold":
        case"SegoeUI-Semibold":
            return"STHeitiSC-Medium, Microsoft YaHei UI";
        default:
            return"STHeitiSC-Light, Microsoft YaHei UI"
        }
    case 1028:
    case 3076:
        switch (t) {
        case"SegoeUI":
        case"SegoeUI-Light":
        case"SegoeUI-Semilight":
            return"STHeitiTC-Light, Microsoft JhengHei UI";
        case"SegoeUI-Bold":
        case"SegoeUI-Semibold":
            return"STHeitiTC-Medium, Microsoft JhengHei UI";
        default:
            return"STHeitiTC-Light, Microsoft JhengHei UI"
        }
    case 1081:
        switch (t) {
        case"SegoeUI":
        case"SegoeUI-Light":
        case"SegoeUI-Semilight":
            return"DevanagariSangamMN, Nirmala UI";
        case"SegoeUI-Bold":
        case"SegoeUI-Semibold":
            return"DevanagariSangamMN-Bold, Nirmala UI";
        default:
            return"DevanagariSangamMN, Nirmala UI"
        }
    case 1042:
        switch (t) {
        case"SegoeUI":
            return"AppleSDGothicNeo-Regular, Malgun Gothic";
        case"SegoeUI-Light":
        case"SegoeUI-Semilight":
            return"AppleSDGothicNeo-Light, Malgun Gothic";
        case"SegoeUI-Bold":
            return"AppleSDGothicNeo-Bold, Malgun Gothic";
        case"SegoeUI-Semibold":
            return"AppleSDGothicNeo-SemiBold, Malgun Gothic";
        default:
            return"AppleSDGothicNeo-Regular, Malgun Gothic"
        }
    case 1054:
        switch (t) {
        case"SegoeUI":
        case"SegoeUI-Light":
        case"SegoeUI-Bold":
        case"SegoeUI-Semibold":
        case"SegoeUI-Semilight":
        default:
            return"Thonburi, Leelawadee UI"
        }
    default:
        if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$n1)
            switch (t) {
            case"SegoeUI":
                return"Segoe WP";
            case"SegoeUI-Light":
                return"Segoe WP Light";
            case"SegoeUI-Bold":
                return"Segoe WP Bold";
            case"SegoeUI-Semibold":
                return"Segoe WP Semibold";
            case"SegoeUI-Semilight":
                return"Segoe WP Semilight";
            default:
                return t
            }
        return t
    }
};
Microsoft.Crm.Client.Application.App.$6f = function() {};
Microsoft.Crm.Client.Application.App.$6f.$31d = function(n) {
    switch (n) {
    case 0:
        return 1;
    case 3:
        return 4;
    case 1:
        return 2;
    case 2:
        return 3;
    case 4:
        return 7;
    case 5:
        return 8;
    case 6:
        return 6;
    case 7:
        return 5;
    default:
        throw Error.invalidOperation("OperationType is not recognized without a Model context.");
    }
};
Microsoft.Crm.Client.Application.App.$6f.$2xN = function(n) {
    switch (n) {
    case 0:
        return 32;
    case 3:
        return 65536;
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 5:
        return 16;
    case 6:
        return 262144;
    case 7:
        return 524288;
    default:
        throw Error.invalidOperation("Not implemented.");
    }
};
Microsoft.Crm.Client.Application.App.$6f.$2xr = function(n) {
    switch (n) {
    case 0:
        return 1;
    case 1:
        return 2;
    case 2:
        return 4;
    default:
        throw Error.invalidOperation("Not implemented.");
    }
};
Microsoft.Crm.Client.Application.App.$6f.prototype = {
    get_$V: function() { return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V() },
    get_$K: function() { return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K() },
    get_$e: function() { return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "SecurityContext") },
    $22G: function(n) { return $0.$1(n) ? !1 : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$2o.$22G(n) },
    $2LM: function(n) {
        if ($0.$1(n)) return!1;
        var t = this.get_$V().$i(n);
        return $0.$1(t) ? !1 : t.$2JZ(2)
    },
    $7p: function(n, t) { return this.$1ry(n, t, -1) },
    $385: function(n, t) { return this.$2LT(n, t, -1, !0) },
    $1ry: function(n, t, i) { return this.$2LT(n, t, i, !1) },
    $2LT: function(n, t, i, r) {
        var e = Microsoft.Crm.Client.Application.App.$6f.$31d(t), u, f;
        return $0.$1(n) || $0.$1(e)
            ? !1
            : (u = this.get_$V().$i(n), f = u, $0.$1(u))
            ? !1
            : u.$HL && (f = this.get_$V().$i(u.$gY), $0.$1(f))
            ? !1
            : r || Microsoft.Crm.Client.Core.Framework.$6.get_$k() && u.$Dq || u.$2JZ(e)
            ? this.get_$K().$34r(f, e, i)
            : !1
    },
    $121: function(n, t, i) { return this.$2LS(n, t, i, -1) },
    $2LS: function(n, t, i, r) {
        var u = this.get_$V().$i(n), f = u, e, o;
        return $0.$1(u) || $0.$1(n) || $0.$1(i) || !Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(t)
            ? !1
            : (e = t.$M, o = Microsoft.Crm.Client.Application.App.$6f
                .$2xN(i, e), !Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$2o
                .$1DL(n, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()) ||
                !t.$M.$FM)
            ? this.$1ry(n, i, r)
            : u.$HL && (f = this.get_$V().$i(u.$gY), $0.$1(f))
            ? !1
            : Microsoft.Crm.Client.Core.Framework.$6.get_$k() && u.$Dq || u.$1qP(o)
            ? this.get_$K().$1DL(f, e, o, r)
            : !1
    },
    $1Sy: function(n, t, i) {
        var r = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.$24, Object), u, f;
        return $0.$1(n) || $0.$1(n.get_$Go()) || Microsoft.Crm.Client.Core.Framework.$3.$A(t)
            ? r.resolve(Microsoft.Crm.Client.Core.Framework.$24.get_$13c())
            : (u = this, f = this, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(n.get_$Go(), [t]), this.get_$e())
                .then(function(t) {
                        if (t.get_$3XJ() !== 1) r.resolve(Microsoft.Crm.Client.Core.Framework.$24.get_$13c());
                        else {
                            i &&
                                i !== 2 &&
                                Error.invalidOperation(String
                                    .format("Unsupported OperationType {0}. Supported OperationTypes are Create and Update.",
                                        i));
                            var f = n.$M, u = t.get_$H(0);
                            r.resolve(new Microsoft.Crm.Client.Core.Framework
                                .$24(u.$Dr,
                                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$t1(u, 2, f),
                                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K()
                                    .$t1(u, Microsoft.Crm.Client.Application.App.$6f.$2xr(i), f)))
                        }
                    },
                    function() { r.resolve(Microsoft.Crm.Client.Core.Framework.$24.get_$2RT()) })), r.promise()
    }
};
Microsoft.Crm.Client.Application.App.StartPage = function() {};
Microsoft.Crm.Client.Application.App.StartPage.set_$36F = function(n) {
    if ($0.$1(Microsoft.Crm.Client.Application.App.StartPage
        .$1Dl)) return Microsoft.Crm.Client.Application.App.StartPage.$1Dl = n, n;
    throw Error.invalidOperation("Home Page loaded listener delegate already bound");
};
Microsoft.Crm.Client.Application.App.StartPage
    .get_isPreview = function() { return Microsoft.Crm.Client.Core.Framework.$6.$w };
Microsoft.Crm.Client.Application.App.StartPage
    .set_isPreview = function(n) { return Microsoft.Crm.Client.Core.Framework.$6.$w = n, n };
Microsoft.Crm.Client.Application.App.StartPage.get_$e = function() {
    return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "StartPage")
};
Microsoft.Crm.Client.Application.App.StartPage.start = function(n) {
    var f, e, o, s, i, t, r, u;
    Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.turnOffUnhandledErrorWarnings();
    Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("StartPageStart", 1);
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() ||
        Microsoft.Crm.Client.Application.App.StartPage.$2WL();
    f = new Xrm.$CX;
    e = window.Xrm;
    e.Page = f;
    Xrm.Utility.setInstance(new Xrm.XrmUtilityWrapper);
    Xrm.Internal.setInstance(new Xrm.XrmInternalWrapper);
    Xrm.Dialog.setInstance(new Xrm.XrmDialogWrapper);
    XrmUI.Manager.$LT(new XrmUI.XrmUIHelper);
    o = new Xrm.XrmServiceDirectory;
    Xrm.Internal.setServiceDirectory(o);
    Microsoft.Crm.Client.Application.App.$1n.$2fV();
    Microsoft.Crm.Client.Application.App.StartPage.$2nW(n);
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$20D &&
    (Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.EnablePerformanceBadge(), Microsoft.Crm.Client
        .Application.App.Automation
        .EnablePerformanceMarkers(!0), s = window.location.protocol === "http:" ? 45678 : 45679, i = Microsoft.Crm
        .Client.Core.Framework.UserAgent.getInstance().$1jN, Microsoft.Crm.Client.Core.ViewModels.PerformanceReport
        .SetCollectorServerUrl(Microsoft.Crm.Client.Core.Framework.$3
            .$MD("{0}//{1}:{2}",
                window.location.protocol,
                Microsoft.Crm.Client.Core.Framework.$3.$A(i) ? window.location.hostname : i,
                s)));
    Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        !$0.$1(Microsoft.Crm.Client.Application.App.StartPage.$7u.pagetype) &&
        Microsoft.Crm.Client.Application.App.StartPage.$1wR();
    Microsoft.Crm.Client.Core.Framework.$1F.set_$1l9(0);
    t = !1;
    "liveid" in Microsoft.Crm.Client.Application.App.StartPage.$7u && (t = !0);
    Microsoft.Crm.Client.Application.App.$13.get_$5().$3Hu();
    Microsoft.Crm.Client.Application.App.StartPage.$3Hx(n, t);
    Xrm.Mobile.offline = new Xrm.Offline;
    Xrm.Mobile.offline.setInstance(new Microsoft.Crm.Client.Core.ViewModels.OfflineWrapper);
    Microsoft.Crm.Client.Core.Framework.$h.get_$5().$Qt = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3;
    window.onerror = Microsoft.Crm.Client.Core.Framework.$3B.get_$5().$$d_$3Zm;
    Microsoft.Crm.Client.Application.App.StartPage.$1d3 = 0;
    Microsoft.Crm.Client.Application.App.StartPage.$ri = MscrmComponents
        .DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
    r = Microsoft.Crm.Client.Core.Framework.$1u.$b("MetadataGenerationIframeFinished");
    u = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl;
    u
        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().add_$1Fc(function() {
            var n = new Microsoft.Crm.Client.Core.Framework
                .PerformanceStopwatch("StartPage.NativeBridge.GetMetadataBundle");
            n.start();
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$30g(function(t) {
                n.stop();
                Mscrm.InlinedAppData = t;
                Microsoft.Crm.Client.Application.App.StartPage.$ri.resolve(!0)
            })
        })
        : ($0.$1(r) || r) && Microsoft.Crm.Client.Application.App.StartPage.$ri.resolve(!0);
    u
        ? Microsoft.Crm.Client.Application.App.StartPage.$ri
        .done(function() { Microsoft.Crm.Client.Application.App.StartPage.$2K9(t) })
        : Microsoft.Crm.Client.Application.App.StartPage.$2K9(t);
    Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        window.addEventListener("beforeunload", Microsoft.Crm.Client.Application.App.StartPage.$3CY, !1)
};
Microsoft.Crm.Client.Application.App.StartPage.$3CY = function() {
    var n, t;
    if (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1M1) {
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1M1 = !1;
        return
    }
    for (n = 0;
        n <
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$6e()
            .get_ActiveNavigationStack().get_Count();
        n++)
        t = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$6e()
            .get_ActiveNavigationStack().get_$H(n), t && t.dispose()
};
Microsoft.Crm.Client.Application.App.StartPage.$2K9 = function(n) {
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
        ? (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
            .add_$1Fc(Microsoft.Crm.Client.Application.App.StartPage.get_$3EE()), Microsoft.Crm.Client.Application.App
            .$51
            .$17())
        : n
        ? Microsoft.Crm.Client.Core.Framework.Trace.logError(97, "Unsupported client server configuration")
        : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$17().then(function() {
                Microsoft.Crm.Client.Application.App.$11.$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3,
                    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D,
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33(),
                    null);
                var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$JT()
                    ? new Microsoft.Crm.Client.Core.Framework.$O8(!1,
                        null,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$Jl())
                    : new Microsoft.Crm.Client.Core.Framework.$O8(!1, null, null, null);
                Microsoft.Crm.Client.Application.App.StartPage.$1wl(n)
            },
            function(n) { Microsoft.Crm.Client.Application.App.StartPage.$Vx(n) })
};
Microsoft.Crm.Client.Application.App.StartPage
    .EnableBackgroundSync = function(n) { Microsoft.Crm.Client.Application.App.StartPage.$1rP = n };
Microsoft.Crm.Client.Application.App.StartPage.onInlinedAppDataLoaded = function() {
    var n = Microsoft.Crm.Client.Core.Framework.$1u.$b("MetadataGenerationIframeFinished");
    !$0.$1(n) && n && Microsoft.Crm.Client.Application.App.StartPage.$ri.resolve(!0)
};
Microsoft.Crm.Client.Application.App.StartPage.$3Hx = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.AuthenticationManager
        .set_defaultInstance(Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$T6(n, t, !0));
    var i = Microsoft.Crm.Client.Application.App.$13.get_$5().$37N("MobileClientOffline");
    i && Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().set_$6R(new Microsoft.Crm.Client.Core.Offline.$L);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource
        .$T6(Microsoft.Crm.Client.Application.App.StartPage.$31G());
    i && (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H = Microsoft.Crm.Client.Core.Offline.$l.get_$6J());
    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D
        .$3Jm(Microsoft.Crm.Client.Application.App.$4e.get_$5());
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .add_$3Vp(Microsoft.Crm.Client.Application.App.StartPage.$2Pd)
};
Microsoft.Crm.Client.Application.App.StartPage.get_$3EE = function() {
    return function() {
        var t, n, i;
        if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
        (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl &&
        (t = Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCATelemetryEndPoint"), Microsoft
            .Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
            .InitializeRequestManager(t)), Microsoft.Crm.Client.Application.App.$13.get_$5()
            .$35b(Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
                .get_$Zj()), Microsoft.Crm.Client.Core.Framework.$2Z.$3AV(), Microsoft.Crm.Client.Application.App
            .StartPage.$2WL()), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_$2N()
            .get_$2ZV() ===
            1) {
            n = Microsoft.Crm.Client.Core.Framework.$4.$h("");
            n.$10 = -2147094014;
            Microsoft.Crm.Client.Application.App.StartPage.$w6(0, n.$T7(), 0);
            return
        }
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$17().then(function() {
                Microsoft.Crm.Client.Application.App.$j.$1bw();
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                    Microsoft.Crm.Client.Core.ViewModels.$1P.get_$5().$17();
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS() &&
                    Microsoft.Crm.Client.Core.ViewModels.AboutDialogViewModel.$3MU();
                Microsoft.Crm.Client.Application.App.$11.$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3,
                    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D,
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33(),
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc);
                Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
                    .$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3,
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc);
                Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D
                    .add_$Tc(Microsoft.Crm.Client.Application.App.StartPage.$1wq);
                Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.$1i2();
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
                    .add_$2PM(Microsoft.Crm.Client.Application.App.StartPage.get_$2P5());
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
                    .add_$2PA(Microsoft.Crm.Client.Application.App.StartPage.get_$2P4());
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T
                    .add_$3Dv(Microsoft.Crm.Client.Application.App.StartPage.get_$3Dw());
                var n = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Delayed Assets Init");
                n.start();
                Microsoft.Crm.Client.Core.Framework.$1o.$7().always(function() { n.stop() })
            },
            function(n) { Microsoft.Crm.Client.Application.App.StartPage.$Vx(n) });
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.$21 &&
        (i = Microsoft.Crm.Client.Application.App.ShimBackHandler.get_$5(), i
            .$39I(Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39))
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$2WL = function() {
    var t = Microsoft.Crm.Client.Core.Framework.$1u.$b("PageLoadStartTime"),
        f = Microsoft.Crm.Client.Core.Framework.$1u.$b("JsLoadStartTime"),
        o = Microsoft.Crm.Client.Core.Framework.$1u.$b("JsLoadEndTime"),
        s = Microsoft.Crm.Client.Core.Framework.$1u.$b("RequireJsLoadStartTime"),
        e = Microsoft.Crm.Client.Core.Framework.$1u.$b("RequireJsLoadEndTime"),
        r,
        u,
        i,
        n;
    if (Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
            .createRetroactiveStopwatch("Style Init", 0, f), Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
            .createRetroactiveStopwatch("JavaScript Init", f, o),
        $0.$1(e) ||
            Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
            .createRetroactiveStopwatch("RequireJs JavaScript Init", s, e),
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$1c2() !== -1
            ? (r = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
                .get_$1c2() -
                t, Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Mk("PageLoadStart", 1, null, r), Microsoft
                .Crm
                .Client.Core.Framework.PerformanceStopwatch.createRetroactiveStopwatch("Shim Init", r, 0))
            : Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mk("PageLoadStart", 1, null, 0), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
            .$1T
            .$21 &&
            !$0.$1(Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
                .get_$203()))
        for (u = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
                .get_$203(), i = 0;
            i < u.length;
            i++)
            n = u[i], n.StopTime === -1
                ? Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$1Mk(n.Name, 0, null, n.StartTime - t)
                : Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch
                .createRetroactiveStopwatch(n.Name, n.StartTime - t, n.StopTime - t)
};
Microsoft.Crm.Client.Application.App.StartPage.get_$2P5 = function() {
    return function() {
        var n = $("#UserEducation", window.document.body).css("display");
        Microsoft.Crm.Client.Application.App.StartPage.$do &&
            n !== "block" &&
            (Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.$1bu(), Microsoft.Crm.Client.Core.Framework
                .AuthenticationManager.$D.add_$Tc(Microsoft.Crm.Client.Application.App.StartPage.$vE))
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$1dZ = function() {
    Microsoft.Crm.Client.Core.Framework.$C.$1F("Start Page",
        1005,
        "TriggerMetadataUpdate : calling StartCheckForDataSourceUpdates.");
    Microsoft.Crm.Client.Application.App.StartPage.$20U(new Microsoft.Crm.Client.Core.Framework
        .$O8(!1,
            null,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$Jl()))
};
Microsoft.Crm.Client.Application.App.StartPage.$2Sl = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_Start", 1004, null);
    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D
        .remove_$Tc(Microsoft.Crm.Client.Application.App.StartPage.$vE);
    Microsoft.Crm.Client.Application.App.StartPage.$do = !1;
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .remove_$1Wv(Microsoft.Crm.Client.Application.App.StartPage.$1dZ);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .add_$1Wv(Microsoft.Crm.Client.Application.App.StartPage.$1dZ);
    Microsoft.Crm.Client.Application.App.StartPage.$30H().then(function(n) {
            var i = new Date;
            i.setHours(i.getHours() - 24);
            ($0.$1(n) || n < i) && Microsoft.Crm.Client.Application.App.StartPage.$20U(t)
        },
        Microsoft.Crm.Client.Application.App.StartPage.$Vx)
};
Microsoft.Crm.Client.Application.App.StartPage.$20U = function(n) {
    Microsoft.Crm.Client.Application.App.StartPage.$2Lx()
        ? Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance().$1qM()
        .then(function(t) {
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = t ? !1 : !0;
                Microsoft.Crm.Client.Application.App.StartPage.$26G(n)
            },
            function(n) {
                Microsoft.Crm.Client.Core.Framework.$C.$1F("Start Page",
                    1004,
                    "StartCheckForDataSourceUpdates:Error: " + n.$E.toString());
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !1
            })
        : (Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !1, Microsoft.Crm.Client.Application.App.StartPage
            .$26G(n))
};
Microsoft.Crm.Client.Application.App.StartPage.$26G = function(n) {
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ui(n.$L1, n.$Sh, !1).then(function(n) {
                Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_End", 1004, null);
                Microsoft.Crm.Client.Application.App.StartPage.$3No(new Date);
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                    .set_$K(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K());
                Microsoft.Crm.Client.Application.App.StartPage.$1cj().always(function() {
                    Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !0;
                    n === 2 &&
                        Microsoft.Crm.Client.Application.App.StartPage.$1rN() &&
                        (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1EG(!0), Microsoft.Crm.Client
                            .Core
                            .Storage.DataApi.$H.get_$5().$3H.set_$11v(!1));
                    !$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$4h) &&
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$4h.$8x
                        .equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())
                        ? Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5()
                        .$1Dg(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K())
                        .then(function() { Microsoft.Crm.Client.Application.App.StartPage.$2Qc(n) },
                            Microsoft.Crm.Client.Application.App.StartPage.$Vx)
                        : Microsoft.Crm.Client.Application.App.StartPage.$2Qc(n)
                })
            },
            Microsoft.Crm.Client.Application.App.StartPage.$Vx)
        .always(function() { Microsoft.Crm.Client.Application.App.StartPage.$2Qn() })
};
Microsoft.Crm.Client.Application.App.StartPage.$2Qc = function(n) {
    var t, i;
    n !== 2
        ? Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$YK()
        ? (i = function() {
            var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 31);
            n.execute();
            n.dispose()
        }, Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("New_Metadata_SaveDrafts_Title"),
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_SaveDrafts_Message"),
            0,
            i,
            null,
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_ViewDrafts"),
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_OK_Text")))
        : (Microsoft.Crm.Client.Core.Framework.Trace
            .logVerbose(1004, "StartPage.StartCheckForDataSourceUpdates.ShowMetadataDownloadPrompt"), Microsoft.Crm
            .Client.Core.Framework.Trace.logVerbose(1004,
                "StartPage.CheckForDataSourceUpdates.ShowMetadataDownloadPrompt"), t = function() {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(1004, "StartPage.StartCheckForDataSourceUpdates.MetadataDownloadPrompt_Cancelled");
            Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(1004, "StartPage.CheckForDataSourceUpdates.MetadataDownloadPrompt_Cancelled");
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H
                .$K4(new Microsoft.Crm.Client.Core.Storage.DataApi.$OY(9))
        }, Microsoft.Crm.Client.Core.Framework.$6.get_$k()
            ? Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("New_Metadata_Prompt_Title_IC"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Message_IC"),
                0,
                Microsoft.Crm.Client.Application.App.StartPage.get_$2YW(),
                t,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_OK_IC"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_Cancel_IC"))
            : Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("New_Metadata_Prompt_Title"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Message"),
                0,
                Microsoft.Crm.Client.Application.App.StartPage.get_$2YW(),
                t,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_OK"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_Cancel")))
        : Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
        (Microsoft.Crm.Client.Core.Framework.$C.$1F("Start Page",
            1005,
            "StartCheckForDataSourceUpdates: update level came as no refresh. updating md sync progress as sync cancel."), Microsoft.Crm.Client.Core.Framework.$C.$1F("Start Page", 1005, "CheckForDataSourceUpdates: update level came as no refresh. updating md sync progress as sync cancel."), Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$K4(new Microsoft.Crm.Client.Core.Storage.DataApi.$OY(9)), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() && Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO && Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$16K())
};
Microsoft.Crm.Client.Application.App.StartPage.$2Qn = function() {
    Microsoft.Crm.Client.Application.App.StartPage.$1rh
        ? Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$2Ln(!0)
        : Microsoft.Crm.Client.Application.App.StartPage.$tU = !0
};
Microsoft.Crm.Client.Application.App.StartPage.get_$2P4 = function() {
    return function() {
        Microsoft.Crm.Client.Application.App.StartPage.$do = !0;
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$I8()
    }
};
Microsoft.Crm.Client.Application.App.StartPage.get_$3ED = function() {
    return function() {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$21 &&
            Microsoft.Crm.Client.Core.Commands.PinCommand.$1iw()
    }
};
Microsoft.Crm.Client.Application.App.StartPage.get_onNativeBridgeAppLink = function() {
    return function(n) {
        var r = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(window.location.href + n),
            i = new Microsoft.Crm.Client.Application.App.$MJ(r).$HF(),
            t;
        $0.$1(i) ||
        (i.$17(), t = new Microsoft.Crm.Client.Core.Commands.NavigationCommand(null, 1), t.$X = i, t.execute(), t
            .dispose())
    }
};
Microsoft.Crm.Client.Application.App.StartPage.get_$3Dw = function() {
    return function(n) {
        var i = Sys.Serialization.JavaScriptSerializer.deserialize(n),
            t = i,
            r = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$6e().get_$4O();
        Microsoft.Crm.Client.Core.ViewModels.$1P.get_$5()
            .$2fF(r, Microsoft.Crm.Client.Core.ViewModels.$3R.$3Ax(t.EventName), t.MemoryUsage)
    }
};
Microsoft.Crm.Client.Application.App.StartPage.get_$2YW = function() {
    return function() {
        Microsoft.Crm.Client.Core.Framework.Trace
            .logVerbose(1004, "StartPage.StartCheckForDataSourceUpdates.MetadataDownloadPrompt_Accepted");
        Microsoft.Crm.Client.Application.App.$j.$1bw();
        Microsoft.Crm.Client.Application.App.$13.get_$5()
            .$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Fa,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$Zj());
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            $("#WaitLabel", window.document.body).text(Microsoft.Crm.Client.Application.App.$j.$9D.Initializing
                .toString());
        Microsoft.Crm.Client.Application.App.StartPage.$25K(1).then(function() {
                Microsoft.Crm.Client.Application.App.$13.get_$5().$1qj();
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                    Microsoft.Crm.Client.Core.ViewModels.$1P.get_$5().$17();
                Microsoft.Crm.Client.Application.App.StartPage.$2Sb();
                Microsoft.Crm.Client.Application.App.$j.$1DX()
            },
            function(n) {
                Microsoft.Crm.Client.Application.App.$j.$1DX();
                Microsoft.Crm.Client.Application.App.StartPage.$Vx(n)
            }).always(function() {
            Microsoft.Crm.Client.Application.App.StartPage.$1rN()
                ? Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.get_$5().$1JP()
                : Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
                ($0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q()) ||
                    !Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$mH) &&
                (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1EG(!1), Microsoft.Crm.Client.Core
                    .Storage.DataApi.$H.get_$5().$3H.set_$11v(!1))
        })
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$2Sb = function() {
    var n = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
        .$6Z(Microsoft.Crm.Client.Application.App.StartPage.$1TL().toLowerCase());
    n.$AW = !0;
    n.$g = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ON.toString();
    n.$17();
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$3LV(n);
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$12n().$FD();
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$19u().clearCommandSets();
    !Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
        .isFeatureEnabled("TaskBasedFlow") ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
        Microsoft.Crm.Client.Core.Framework.$6.$w ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$37().$FD();
    !Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
        .isFeatureEnabled("LandingPage") ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
        Microsoft.Crm.Client.Core.Framework.$6.$w ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$HQ().$2Sb()
};
Microsoft.Crm.Client.Application.App.StartPage.$3Ie = function(n, t) {
    Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_Start", 1004, null);
    Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D
        .remove_$Tc(Microsoft.Crm.Client.Application.App.StartPage.$1wq);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .remove_$1Wv(Microsoft.Crm.Client.Application.App.StartPage.$1dZ);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .add_$1Wv(Microsoft.Crm.Client.Application.App.StartPage.$1dZ);
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
    (Microsoft.Crm.Client.Application.App.$18.$oj(Microsoft.Crm.Client.Application.App.$18
        .$1jE,
        !0), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X &&
        Microsoft.Crm.Client.Application.App.$j.$2Wh());
    t.$L1
        ? Microsoft.Crm.Client.Application.App.StartPage.$1wl(t)
        : Microsoft.Crm.Client.Application.App.$11.get_$5().$XC(t.$3G, t.$DM)
        .then(function() { Microsoft.Crm.Client.Application.App.StartPage.$1wl(t) },
            function(n) { Microsoft.Crm.Client.Application.App.StartPage.$Vx(n) })
};
Microsoft.Crm.Client.Application.App.StartPage.$1wl = function(n) {
    if ($0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o()) ||
        $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R()) ||
        (Microsoft.Crm.Client.Core.Storage.DataApi.$H
            .$Lg = !1), Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$JT() &&
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G.equals(n.$3G) &&
        !Microsoft.Crm.Client.Core.Framework.$3.$A(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .get_$1WF()) &&
        !Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        !Microsoft.Crm.Client.Core.Framework.$6.$w &&
        !Microsoft.Crm.Client.Core.Framework.$6.get_$5O()) {
        Microsoft.Crm.Client.Application.App.$13.get_$5()
            .$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Fa,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$Zj());
        Microsoft.Crm.Client.Application.App.StartPage.$1G8()
            .done(function() { Microsoft.Crm.Client.Application.App.StartPage.$20U(n) });
        return
    }
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
        Microsoft.Crm.Client.Application.App.$j.$1bw();
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1hz().then(function() {
            var t = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$20p;
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ui(n.$L1, n.$Sh, t).then(function(n) {
                        Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_End", 1004, null);
                        Microsoft.Crm.Client.Application.App.StartPage.$1cj().always(function() {
                            Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                                n !== 2 &&
                                Microsoft.Crm.Client.Application.App.$j.$1bw();
                            Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !0;
                            Microsoft.Crm.Client.Application.App.StartPage.$3V8(n)
                        })
                    },
                    function(n) { Microsoft.Crm.Client.Application.App.StartPage.$Vx(n) })
                .always(function() { Microsoft.Crm.Client.Application.App.StartPage.$2Qn() })
        },
        function() {
            var t = function() { window.location.reload(!0) },
                i = function() { Microsoft.Crm.Client.Application.App.$11.get_$5().$14Q() },
                n = {};
            n.Transfer_Reattempt_Prompt_Title = "Transfer_Reattempt_Prompt_Title";
            n.Transfer_Reattempt_Prompt_Message = "Transfer_Reattempt_Prompt_Message";
            n.Transfer_Reattempt_Prompt_Ok = "Transfer_Reattempt_Prompt_Ok";
            n.Transfer_Reattempt_Prompt_Cancel = "Transfer_Reattempt_Prompt_Cancel";
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
                ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$1pz(Microsoft.Crm.Client
                    .Application.App.StartPage.$2Y4,
                    function(r) {
                        $0.$1(r) || (n = r);
                        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl
                            ? t()
                            : Microsoft.Crm.Client.Core.ViewModels.$1S
                            .$20B(n.Transfer_Reattempt_Prompt_Title,
                                n.Transfer_Reattempt_Prompt_Message,
                                t,
                                i,
                                n.Transfer_Reattempt_Prompt_Ok,
                                n.Transfer_Reattempt_Prompt_Cancel,
                                "TransferFail")
                    })
                : Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl
                ? t()
                : Microsoft.Crm.Client.Core.ViewModels.$1S.$20B(n.Transfer_Reattempt_Prompt_Title,
                    n.Transfer_Reattempt_Prompt_Message,
                    t,
                    i,
                    n.Transfer_Reattempt_Prompt_Ok,
                    n.Transfer_Reattempt_Prompt_Cancel,
                    "TransferFail")
        })
};
Microsoft.Crm.Client.Application.App.StartPage.$b4 = function(n) {
    var t = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Application.App.StartPage.$1d3 === 1
        ? Microsoft.Crm.Client.Application.App.StartPage.$3Ul(n, t)
        : Microsoft.Crm.Client.Application.App.StartPage.$25K(n).then(function() {
                Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_End", 1004, null);
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                    Microsoft.Crm.Client.Core.ViewModels.$1P.get_$5().$17();
                n === 1
                    ? Microsoft.Crm.Client.Core.Framework.$h.get_$5().$1j6("NavigationStackKey")
                    .then(function() {
                            Microsoft.Crm.Client.Application.App.StartPage.$1G8().always(function() { t.resolve(!0) })
                        },
                        function(n) {
                            Microsoft.Crm.Client.Application.App.StartPage.$Vx(n);
                            t.reject(n)
                        })
                    : Microsoft.Crm.Client.Application.App.StartPage.$1G8().always(function() {
                        Microsoft.Crm.Client.Application.App.StartPage.$1rN() &&
                            Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.get_$5().$1JP();
                        t.resolve(!0)
                    });
                Microsoft.Crm.Client.Application.App.StartPage.$2Vr()
            },
            function(n) {
                Microsoft.Crm.Client.Application.App.StartPage.$Vx(n);
                t.reject(n)
            }), t.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$3Ul = function(n, t) {
    n === 2
        ? (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.set_$1EJ(!1), Microsoft.Crm.Client.Application.App
            .StartPage.$1G8().always(function() { t.resolve(!0) }))
        : Microsoft.Crm.Client.Core.Framework.$h.get_$5().$1j6("NavigationStackKey").then(function() {
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1OO().then(function() {
                        Microsoft.Crm.Client.Application.App.StartPage.$ri.done(function() {
                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$35j().then(function() {
                                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.set_$1EJ(!0);
                                    Microsoft.Crm.Client.Application.App.StartPage.$1G8()
                                        .always(function() { t.resolve(!0) });
                                    Microsoft.Crm.Client.Application.App.StartPage.$1rP &&
                                        Microsoft.Crm.Client.Core.Framework.Scheduler.Schedule(function() {
                                                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$b4(0)
                                                    .then(function() {
                                                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                                                                .set_$1EJ(!1);
                                                            Microsoft.Crm.Client.Core.Framework.Trace
                                                                .logVerbose(1004, "DataSource_Update_Complete_Success");
                                                            Microsoft.Crm.Client.Application.App.StartPage.$2Vr()
                                                        },
                                                        function() {
                                                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                                                                .set_$1EJ(!0);
                                                            Microsoft.Crm.Client.Core.Framework.Trace
                                                                .logVerbose(1004, "DataSource_Update_Complete_Failure")
                                                        })
                                            },
                                            -13,
                                            "ISH_DataSource_Async_Check")
                                },
                                function(n) { t.reject(n) })
                        })
                    },
                    function(n) { t.reject(n) })
            },
            function(n) {
                Microsoft.Crm.Client.Application.App.StartPage.$Vx(n);
                t.reject(n)
            })
};
Microsoft.Crm.Client.Application.App.StartPage.$Vx = function(n) {
    if (Microsoft.Crm.Client.Core.Framework.$6.get_$k()) {
        var t = Microsoft.Crm.Client.Core.Framework.$1u.$b("IC_Error_Message_0x" +
            Microsoft.Crm.Client.Core.Framework.Common.$2.$sr(n.$10)).toString();
        n.$E === "IC_Error_Message_Generic_Mobile_Client" && (t = Microsoft.Crm.Client.Core.Framework.$1u.$b(n.$E) + t);
        n.$10 === -2147094015 && Microsoft.Crm.Client.Application.App.$j.$1DX();
        Microsoft.Crm.Client.Core.ViewModels.$1S.$20B("", t, null, null, "", "");
        throw Error.invalidOperation(n.$E);
    } else
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
            ? (n.$10 === -2147220960 && (n = Microsoft.Crm.Client.Core.Framework.$4.$St(-2147094001)), n.$NA === 3
                ? Microsoft.Crm.Client.Core.ViewModels.$Z.$260(n)
                ? Microsoft.Crm.Client.Application.App.StartPage.$1qz().always(function() {
                    var t = function() {
                        Microsoft.Crm.Client.Application.App.StartPage
                            .$w6(0, Microsoft.Crm.Client.Core.Framework.$4.$St(-2147094e3).$T7(), n.$NA)
                    };
                    Microsoft.Crm.Client.Core.ViewModels.$Z.$20A(n, t)
                })
                : Microsoft.Crm.Client.Application.App.StartPage
                .$w6(0, Microsoft.Crm.Client.Core.Framework.$4.$St(-2147094e3).$T7(), n.$NA)
                : Microsoft.Crm.Client.Application.App.StartPage.$w6(0, n.$T7(), n.$NA))
            : Microsoft.Crm.Client.Application.App.StartPage.$1qz()
            .always(function() {
                if (n.$NA === 3 && Microsoft.Crm.Client.Core.ViewModels.$Z.$260(n)
                    ? Microsoft.Crm.Client.Core.ViewModels.$Z.$20A(n, null)
                    : Microsoft.Crm.Client.Core.ViewModels.$Z
                    .$3SB(n), Microsoft.Crm.Client.Core.Framework.$4
                    .isInstanceOfType(n) &&
                    n.$10 === -2147094e3) throw Error.invalidOperation(n.$E);
            })
};
Microsoft.Crm.Client.Application.App.StartPage.$1G8 = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
        ? Microsoft.Crm.Client.Application.App.$18.$2ay(function() {
            Microsoft.Crm.Client.Application.App.StartPage.$2Qe(n)
        })
        : Microsoft.Crm.Client.Application.App.StartPage.$2Qe(n), n.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$2Qe = function(n) {
    Microsoft.Crm.Client.Application.App.StartPage.$1qz().always(function() {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$21 &&
        (Microsoft.Crm.Client.Core.Commands.PinCommand.$1iw(), Microsoft.Crm.Client.Core.Framework.PAL.Core
            .NativeBridge.get_Instance().add_$3CO(Microsoft.Crm.Client.Application.App.StartPage.get_$3ED()));
        Microsoft.Crm.Client.Application.App.StartPage.$1wr &&
            window.setTimeout(function() { console.profileEnd() }, 1500);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .apcl("IsServerAvailable", Microsoft.Crm.Client.Application.App.$4e.get_$5().$$d_$LH);
        var t = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled();
        t &&
            (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO ||
                Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsIOS()) &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$16K();
        t && Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$26j();
        Microsoft.Crm.Client.Application.App.$6R.$3AQ();
        n.resolve()
    })
};
Microsoft.Crm.Client.Application.App.StartPage.$2cs = function() {
    var f = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$tc(), t, i, r, u, e, n;
    if (Array.contains(Microsoft.Crm.Client.Application.App.$2Q.$2MH, f.toString()) ||
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
        .$n1)
        for (t = Microsoft.Crm.Client.Application.App.$2Q
                .$sq(f), i = 0;
            i < document.styleSheets.length;
            i++)
            if (r = document.styleSheets[i], !$0.$1(r
                .rules))
                for (u = 0, e = r.rules
                        .length;
                    u < e;
                    u++)
                    n = r.rules[u], $0.$1(n.style) ||
                    ($0.$1(n.selectorText) ||
                        n.selectorText.indexOf(".scrollerItem .largeLabel") === -1 ||
                        (n.style.fontSize = "28px"), n.style.fontFamily.indexOf("SegoeUI-Semibold") !== -1
                        ? (n.style
                                .fontFamily = t["SegoeUI-Semibold"],
                            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
                                .$EO &&
                                (n.style.fontWeight = "bold"))
                        : n.style.fontFamily.indexOf("SegoeUI-Light") !== -1
                        ? n.style.fontFamily = t["SegoeUI-Light"].toString()
                        : n.style.fontFamily.indexOf("SegoeUI-Semilight") !== -1
                        ? n.style.fontFamily = t["SegoeUI-Semilight"].toString()
                        : n.style.fontFamily.indexOf("SegoeUI-Bold") !== -1
                        ? (n.style.fontFamily = t["SegoeUI-Bold"]
                            .toString(), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO &&
                            (n.style.fontWeight = "bold"))
                        : n.style.fontFamily
                        .indexOf("SegoeUI") !==
                        -1 &&
                        (n.style.fontFamily = t.SegoeUI), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
                        .$5X &&
                        !$0.$1(n.style.font) &&
                        (n.style.font.indexOf("SegoeUI-Semibold") !== -1
                            ? n.style.font = n.style.font.replace("SegoeUI-Semibold", t["SegoeUI-Semibold"].toString())
                            : n.style.font.indexOf("SegoeUI-Light") !== -1
                            ? n.style.font = n.style.font.replace("SegoeUI-Light", t["SegoeUI-Light"].toString())
                            : n.style.font.indexOf("SegoeUI-Bold") !== -1
                            ? n.style.font = n.style.font.replace("SegoeUI-Bold", t["SegoeUI-Bold"].toString())
                            : n.style.font.indexOf("SegoeUI") !== -1 &&
                            (n.style.font = n.style.font.replace("SegoeUI-Bold", t.SegoeUI.toString()))))
};
Microsoft.Crm.Client.Application.App.StartPage.$1wR = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
        t = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("InteractionCentricApplicationShellVM.GetDelayedScripts");
    return t.start(), Microsoft.Crm.Client.Core.Framework.$1o
        .$1pB("resources/styles/ishCssDependenciesPostLoad.css", null), Microsoft.Crm.Client.Core.Framework.$1o
        .$1D7([
                "scripts/Microsoft.Crm.Client.Core.Messages.js", "scripts/ishOssDependenciesPostLoad.js",
                "/_static/_controls/richeditor/ckeditor/ckeditor.js"
            ],
            0,
            null).always(function() {
            n.resolve();
            t.stop()
        }), n.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$1qz = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
        i = function() {
            var t = Microsoft.Crm.Client.Application.App.StartPage.$35T();
            Microsoft.Crm.Client.Application.App.StartPage.$2cs();
            Microsoft.Crm.Client.Application.App.$j.$1DX();
            Microsoft.Crm.Client.Application.App.StartPage.$2nV();
            Microsoft.Crm.Client.Application.App.StartPage.$3Sk(t);
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$mr &&
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
                .AddPropertyChangedListener(Microsoft.Crm.Client.Core.Framework.$i.$1si.$I,
                    function() {
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device()
                            .get_DeviceState()
                            .get_KeyboardVisible() ||
                            window.setTimeout(function() {
                                    if (!Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
                                        .get_device()
                                        .get_DeviceState().get_KeyboardVisible()) {
                                        var n = {};
                                        n.scrollTop = 0;
                                        $("html,body").animate(n, 150, "swing")
                                    }
                                },
                                0)
                    });
            Xrm.Utility.isMocaOfflineFeatureEnabled() &&
                Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.get_$5()
                .$1Th(Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$bt,
                    Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$jL);
            n.resolve()
        },
        t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("Delayed Assets Init");
    return t.start(), Microsoft.Crm.Client.Core.Framework.$1o.$7().always(function() {
        t.stop();
        i()
    }), n.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$2nW = function(n) {
    var e = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("EvaluateUrl"), i, r, u, t, f, o;
    e.start();
    Microsoft.Crm.Client.Application.App.$2U.$3Hn();
    Microsoft.Crm.Client.Application.App.StartPage.$7u = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(n);
    i = {};
    r = Microsoft.Crm.Client.Application.App.StartPage.$7u;
    for (u in r)
        t = { key: u, value: r[u] }, i[t.key
            .toLowerCase()] = t.key.toLowerCase() === "data" ? t.value : t.value.toLowerCase();
    if (Microsoft.Crm.Client.Application.App.StartPage
        .$7u = i, "profile" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        Microsoft.Crm.Client.Application.App.StartPage.$7u.profile.indexOf("startup") !== -1 &&
        (console.profile("Startup"), Microsoft.Crm.Client.Application.App.StartPage
            .$1wr = !0), "tracelevel" in Microsoft.Crm.Client.Application.App.StartPage.$7u)
        try {
            Microsoft.Crm.Client.Core.Framework.Trace
                .set_$21V($1W.$Cr(Microsoft.Crm.Client.Core.Framework.$5h,
                    Microsoft.Crm.Client.Application.App.StartPage.$7u.tracelevel))
        } catch (s) {
        }
    if ("showperf" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        Microsoft.Crm.Client.Application.App.StartPage.$7u.showperf === "true" &&
        (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance()
            .$20D = !0), "collectorurl" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
    (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1jN = Microsoft.Crm.Client.Application.App
        .StartPage.$7u.collectorurl), "rtl" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
    (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .$2TX = Microsoft.Crm.Client.Application.App.StartPage.$7u
        .rtl ===
        "true"), "viewcachethreshold" in Microsoft.Crm.Client.Application.App.StartPage.$7u)
        try {
            f = Number.parseInvariant(Microsoft.Crm.Client.Application.App.StartPage.$7u.viewcachethreshold);
            f > 1 &&
            (o = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$6e(), o
                .$21H = f)
        } catch (h) {
        }
    "phone" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        Microsoft.Crm.Client.Application.App.StartPage.$7u.phone === "true" &&
        (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Jn = !0);
    "syncappmeta" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        Microsoft.Crm.Client.Application.App.StartPage.$7u.syncappmeta === "true" &&
        (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$20p = !0);
    e.stop()
};
Microsoft.Crm.Client.Application.App.StartPage.$2nV = function() {
    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled()
        ? (Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel.PaneScrollIndicatorEnabled = Microsoft.Crm
            .Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_$3GM(), Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel.$za = Microsoft.Crm.Client
            .Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState().get_$2le())
        : ("panoramadelayedrender" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        (Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel
            .$za = Microsoft.Crm.Client.Application.App.StartPage.$7u
            .panoramadelayedrender ===
            "true"), "panescrollindicator" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        (Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel
            .PaneScrollIndicatorEnabled = Microsoft.Crm.Client.Application.App.StartPage.$7u.panescrollindicator ===
            "true"), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Jn &&
        (Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel
            .PaneScrollIndicatorEnabled = !0, Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel
            .$za = !0))
};
Microsoft.Crm.Client.Application.App.StartPage.$31G = function() {
    var n = "";
    if ("org" in Microsoft.Crm.Client.Application.App.StartPage.$7u) {
        var r = Microsoft.Crm.Client.Application.App.StartPage.$7u.org,
            t = window.location.hostname,
            i = window.location.port,
            u = Microsoft.Crm.Client.Core.Framework.$3.$A(i)
                ? t
                : Microsoft.Crm.Client.Core.Framework.$3.$MD("{0}:{1}", t, i);
        "server" in Microsoft.Crm.Client.Application.App.StartPage.$7u
            ? n = Microsoft.Crm.Client.Application.App.StartPage.$7u.server
            : (n = window.location
                .protocol +
                "//" +
                u +
                "/", "liveid" in Microsoft.Crm.Client.Application.App.StartPage.$7u || (n += r))
    } else throw Error.argument("OrgName", "Org name must be specified in url parameters");
    return n
};
Microsoft.Crm.Client.Application.App.StartPage.$1a5 = function() {
    var t, n;
    Microsoft.Crm.Client.Application.App.StartPage.$1sJ ||
    (Microsoft.Crm.Client.Application.App.StartPage.$1sJ = !0, t = {}, Microsoft.Crm.Client.Core.ViewModels
        .ApplicationShellViewModel.get_instance().set_$On(new Microsoft.Crm.Client.Core.ViewModels.$UR), t
        .dataContext = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(), t
        .clientContext = new Microsoft.Crm.Client.Core.Controls.$MK, $(document.body).empty(), n = document
        .createElement("div"), n.style.width = "100%", n.style.height = "100%", document.body
        .appendChild(n), Microsoft.Crm.Client.Core.Framework.$6.get_$5O()
        ? ReactDOM.render(MscrmComponents.MailAppShell(t), n)
        : Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        ? ReactDOM.render(InteractionCentricComponents.InteractionCentricShell(t), n)
        : ReactDOM.render(MscrmComponents.ApplicationShell(t), n))
};
Microsoft.Crm.Client.Application.App.StartPage.$35T = function() {
    var n = Microsoft.Crm.Client.Application.App.$2U.$qr(), t = new Microsoft.Crm.Client.Core.ViewModels.$54;
    return Microsoft.Crm.Client.Core.ViewModels.$54.$15Z = new Microsoft.Crm.Client.Core.ViewModels
        .$M(null,
            new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("ScriptErrorRequest", null)), Microsoft.Crm.Client.Core.ViewModels
        .ApplicationShellViewModel.get_instance().set_$2UB(t), Microsoft.Crm.Client.Application.App.$13.get_$5()
        .$1qj(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .set_$rh(new Xrm.$CX), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .set_$1i(Microsoft.Crm.Client.Application.App.$13.get_$5()), Microsoft.Crm.Client.Core.ViewModels
        .CustomScriptsContainerViewModel.get_$5().$3FO(), Microsoft.Crm.Client.Application.App.StartPage
        .$1rh = !0, Microsoft.Crm.Client.Application.App.StartPage.$tU &&
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$2Ln(!0), n
};
Microsoft.Crm.Client.Application.App.StartPage.$3Sk = function(n) {
    var u = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("StartCrmUI"), f, r, i, t, e, o;
    if (u.start(), !Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$1Uf &&
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X &&
        (f = new Xrm.AlertDialogStrings, f.text = Xrm.Internal.getResourceString("Error_Message_OS_Not_Supported"), Xrm
            .Dialog.openAlertDialog(f, null, null)), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
        .get_instance().set_$2S(n.$DQ(Microsoft.Crm.Client.Core.Framework.$AQ)), Microsoft.Crm.Client.Core.ViewModels
        .ApplicationShellViewModel.get_instance().set_$Iy(n.$DQ(Microsoft.Crm.Client.Core.ViewModels.$AS)), Microsoft
        .Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .set_$32(n.$DQ(Microsoft.Crm.Client.Core.Framework.$As)), Microsoft.Crm.Client.Core.ViewModels
        .ApplicationShellViewModel.get_instance().set_$22E(n.$DQ(Microsoft.Crm.Client.Core.Framework.$Ax)), Microsoft
        .Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .set_$K(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .get_$K()), Xrm.Utility.isMocaOfflineFeatureEnabled() &&
    (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H
        .set_$2LK(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("MobileClientOffline")), Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
        .$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3, null), Microsoft.Crm.Client.Core.ViewModels
        .ApplicationShellViewModel.get_instance().set_$Jh(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers
            .$2V.get_$5())), Microsoft.Crm.Client.Core.Framework.$6
        .get_$5O())
        o = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$6Z(Microsoft.Crm.Client.Core.Framework.$1.toString(57)), o
            .$AW = !0, Microsoft.Crm.Client.Application.App.StartPage.$2Qd(o, u);
    else {
        if (r = 1, i = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
            .get_$1Pm(), Microsoft.Crm.Client.Core.Framework.$6.get_$k()) {
            r = 37;
            i = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().get_$de();
            var s = $0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                        .get_$pH())
                    ? ""
                    : Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().get_$pH()
                    .toString(),
                h = $0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                        .get_$Jl())
                    ? ""
                    : Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().get_$Jl()
                    .toString(),
                c = $0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                        .get_$nl())
                    ? ""
                    : Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().get_$nl()
                    .toString(),
                l = $0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                        .get_LanguageId())
                    ? ""
                    : Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
                    .get_LanguageId()
                    .toString(),
                a = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                    .$SM(Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$2GM(),
                        s,
                        h,
                        c,
                        l,
                        Microsoft.Crm.Client.Core.Framework.LocalStorage.$1e.get_$Ix().$F4("MoCASessionID"));
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(a)
        }
        t = Microsoft.Crm.Client.Application.App.StartPage.$2jQ(r);
        e = Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction
            .$B(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(), null);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$2S().$2c(e);
        e.add_$89(function() {
            t.$g = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ON.toString();
            var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(r, Microsoft.Crm.Client.Core.Framework.$6.get_$2C(), t.$1s, 1, !1, t.$g.toString()),
                    Microsoft.Crm.Client.Application.App.StartPage.get_$e());
            n.then(function(n) {
                    $0.$1(n.get_$H(0))
                        ? (t.$g = i.toString(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                            .get_instance().$ON = i)
                        : t.$g = n.get_$H(0).$g;
                    Microsoft.Crm.Client.Application.App.StartPage.$2Qd(t, u)
                },
                function() {
                    t.$g = i.toString();
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ON = i
                })
        })
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$2KN = function(n) {
    $0.$1(n) ||
    (n.$17(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$uJ(n), Microsoft.Crm
        .Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ag(n), Microsoft.Crm.Client.Application.App
        .StartPage.$1qv(n))
};
Microsoft.Crm.Client.Application.App.StartPage.$2Qd = function(n, t) {
    var u, f, i, h, c;
    if (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
        .set_$s(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s()), Microsoft.Crm.Client.Core.Storage
        .DataApi.DataSource.$3.get_$6M().add_$1bO(function(n, t) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$s(t.$B2)
        }), Xrm.Utility.isMocaOfflineFeatureEnabled() &&
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M().add_$3CH(function() {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$3VD();
            Microsoft.Crm.Client.Application.App.StartPage.$3R5()
        }), $(document).keyup(Microsoft.Crm.Client.Application.App.StartPage.$397), Microsoft.Crm.Client.Application.App
        .StartPage.get_isPreview()) {
        Microsoft.Crm.Client.Application.App.StartPage.$1UH(!0);
        Microsoft.Crm.Client.Application.App.StartPage.$1De();
        var l = sessionStorage.getItem("previewForm_formXml"),
            e = sessionStorage.getItem("previewForm_formId"),
            a = sessionStorage.getItem("previewForm_EntityLogicalName"),
            v = sessionStorage.getItem("previewForm_dashboardName"),
            o = Number.parseInvariant(sessionStorage.getItem("previewForm_formType")),
            y = Number.parseInvariant(sessionStorage.getItem("previewForm_etc")),
            p = Number.parseInvariant(sessionStorage.getItem("previewForm_formAccessType")),
            s = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$2rF(o),
            w = new Microsoft.Crm.Client.Core.Framework.Utils.$Nv(e, l, o, p, y, v),
            r = Microsoft.Crm.Client.Application.App.StartPage.$Es(s, a, e, null, !1, null);
        r.$72 = new Microsoft.Crm.Client.Core.ViewModels.$Lc(r, w);
        s === 5
            ? (u = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
                .$6Z(Microsoft.Crm.Client.Core.Framework.$1.toString(2)), Microsoft.Crm.Client.Core.ViewModels
                .ApplicationShellViewModel.get_instance().$uJ(u), Microsoft.Crm.Client.Application.App.StartPage
                .$ag(u), f = new Microsoft.Crm.Client.Core.Commands.CreateFormCommand(r, r.$J, null), f.execute(), f
                .dispose())
            : Microsoft.Crm.Client.Application.App.StartPage.$ag(r);
        Microsoft.Crm.Client.Application.App.StartPage.$1G7();
        t.stop()
    } else
        (Microsoft.Crm.Client.Core.Framework.$6.get_$1Vt() || Microsoft.Crm.Client.Core.Framework.$6.get_$4R()) &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("LandingPage")
            ? (Microsoft.Crm.Client.Application.App.StartPage.$1UH(!1), i = new Microsoft.Crm.Client.Core.ViewModels
                .Controls.LandingPageViewModel, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                .get_instance().set_$HQ(i), i.$pt = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                .get_instance().get_$1i().isFeatureEnabled("TaskBasedFlow"), i.$17Z = Microsoft.Crm.Client.Core
                .ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
                .isFeatureEnabled("LandingPageActivities"), i.$35O().always(function() {
                if (i.$Th)
                    Microsoft.Crm.Client.Application.App.StartPage.$1a5(), i.$17o = function() {
                        Microsoft.Crm.Client.Application.App.StartPage.$1De();
                        var i = new Microsoft.Crm.Client.Application.App
                            .$MJ(Microsoft.Crm.Client.Application.App.StartPage.$7u).$HF();
                        Microsoft.Crm.Client.Application.App.StartPage.$1zn(i, n, t);
                        Microsoft.Crm.Client.Application.App.StartPage.$1G7()
                    };
                else {
                    Microsoft.Crm.Client.Application.App.StartPage.$1De();
                    var r = new Microsoft.Crm.Client.Application.App
                        .$MJ(Microsoft.Crm.Client.Application.App.StartPage.$7u).$HF();
                    Microsoft.Crm.Client.Application.App.StartPage.$1zn(r, n, t);
                    Microsoft.Crm.Client.Application.App.StartPage.$1G7()
                }
            }))
            : Microsoft.Crm.Client.Core.Framework.$6.get_$5O()
            ? (Microsoft.Crm.Client.Application.App.StartPage.$1UH(!0), Microsoft.Crm.Client.Application.App.StartPage
                .$1De(), h = new Microsoft.Crm.Client.Application.App
                .$MJ(Microsoft.Crm.Client.Application.App.StartPage.$7u).$HF(), Microsoft.Crm.Client.Application.App
                .StartPage.$1tE(h, n, t), Microsoft.Crm.Client.Application.App.StartPage.$1G7())
            : (Microsoft.Crm.Client.Application.App.StartPage.$1UH(!0), Microsoft.Crm.Client.Application.App.StartPage
                .$1De(), c = new Microsoft.Crm.Client.Application.App
                .$MJ(Microsoft.Crm.Client.Application.App.StartPage.$7u).$HF(), Microsoft.Crm.Client.Application.App
                .StartPage.$1zn(c, n, t), Microsoft.Crm.Client.Application.App.StartPage.$1G7());
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
        .add_$3FG(Microsoft.Crm.Client.Application.App.StartPage.get_onNativeBridgeAppLink());
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance()
        .add_$2OE(Microsoft.Crm.Client.Application.App.StartPage.get_onNativeBridgeAppLink())
};
Microsoft.Crm.Client.Application.App.StartPage.$1De = function() {
    var n, t;
    !Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
        .isFeatureEnabled("TaskBasedFlow") ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
        Microsoft.Crm.Client.Core.Framework.$6.$w ||
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
        (n = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("GlobalTBFMenuViewModel.Initialization"), n
            .start(), t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
            .$6Z(Microsoft.Crm.Client.Core.ViewModels.$58.getName()), t.$17(), Microsoft.Crm.Client.Core.ViewModels
            .ApplicationShellViewModel.get_instance().set_$37(t), n.stop())
};
Microsoft.Crm.Client.Application.App.StartPage.$1G7 = function() {
    Microsoft.Crm.Client.Application.App.$3p.get_$5().$39V();
    Microsoft.Crm.Client.Application.App.$1v.$3IP()
};
Microsoft.Crm.Client.Application.App.StartPage.$1zn = function(n, t, i) {
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2I4().then(function(r) {
            try {
                if (!$0.$1(r) && r.get_Count() > 0) {
                    var u = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
                    Microsoft.Crm.Client.Core.Framework.$6.get_$k()
                        ? Microsoft.Crm.Client.Application.App.StartPage.$1wR().done(function() { u.resolve() })
                        : u.resolve();
                    u.done(function() {
                        var e = Microsoft.Crm.Client.Core.ViewModels.$2I.get_$5().$Z6(r.get_$H(r.get_Count() - 1).$Oa),
                            t,
                            f,
                            u,
                            o;
                        if (Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                            n &&
                            e &&
                            Microsoft.Crm.Client.Application.App.StartPage
                            .$ag(n), t = null, !((n ||
                                Microsoft.Crm.Client.Application.App.StartPage.$7u.pagetype === "create") &&
                            Microsoft.Crm.Client.Core.Framework.$6
                            .get_$k()))
                            for (f = 0;
                                f < r.get_Count();
                                f++
                            )
                                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                                    .$1XI++, u = r
                                    .get_$H(f), t = Microsoft.Crm.Client.Application.App.StartPage
                                    .$Es(u.$nO, u.$nM, u.$Oa, u.$19, u.$AW, t), t
                                    .$17(), f === r.get_Count() - 1 &&
                                    Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(t) &&
                                    (o = t, o.$1vg = !$0.$1(n) && e, o
                                        .set_$1su(e)), f === r.get_Count() - 1 && ($0.$1(n) || e)
                                    ? (t.$1s.toUpperCase() ===
                                        Microsoft.Crm.Client.Application.App.StartPage.$1TL().toUpperCase()
                                        ? (t.$AW = u.$AW, Microsoft.Crm.Client.Application.App.StartPage.$ag(t))
                                        : (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                                            .$uJ(t), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                                            .get_instance().$ag(t)), Microsoft.Crm.Client.Application.App.StartPage
                                        .$1qv(t))
                                    : (t.$1s.toUpperCase() ===
                                        Microsoft.Crm.Client.Application.App.StartPage.$1TL().toUpperCase() &&
                                        (t.$AW = u.$AW), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                                        .get_instance().get_$6e().$uo(t));
                        e || Microsoft.Crm.Client.Application.App.StartPage.$2KN(n);
                        Microsoft.Crm.Client.Application.App.StartPage.$1a5();
                        i.stop()
                    })
                } else
                    Microsoft.Crm.Client.Application.App.StartPage.$7u.pagetype === "create" &&
                        Microsoft.Crm.Client.Core.Framework.$6.get_$k()
                        ? (Microsoft.Crm.Client.Application.App.StartPage.$2KN(n), Microsoft.Crm.Client.Application.App
                            .StartPage.$1a5(), i.stop())
                        : Microsoft.Crm.Client.Application.App.StartPage.$1tE(n, t, i);
                Xrm.Internal.executeOnXrmReadyEventHandlers();
                Microsoft.Crm.Client.Application.App.$3w.get_$5().$Bj("AppUIInitialized", null)
            } catch (f) {
                Microsoft.Crm.Client.Core.Framework.Trace
                    .logException(1004, f, "Encountered exception when restoring nav-stack");
                Microsoft.Crm.Client.Application.App.StartPage.$ag(t);
                i.stop()
            }
        },
        function() { Microsoft.Crm.Client.Application.App.StartPage.$1tE(n, t, i) })
};
Microsoft.Crm.Client.Application.App.StartPage.$1tE = function(n, t, i) {
    var r = $0.$1(n) ? t : n;
    Microsoft.Crm.Client.Application.App.StartPage.$ag(r);
    Microsoft.Crm.Client.Application.App.StartPage.$1qv(r);
    Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        Microsoft.Crm.Client.Core.Framework.Scheduler
        .Schedule(function() { Microsoft.Crm.Client.Application.App.StartPage.$1wR() },
            -13,
            "ISH:PostLoadScriptsAndCss");
    i.stop()
};
Microsoft.Crm.Client.Application.App.StartPage.$1UH = function(n) {
    var r = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("NavigationBarViewModel.Initialization"), i, t;
    r.start();
    Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        ? (i = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
            .$6Z(Microsoft.Crm.Client.Core.ViewModels.$59.getName()), i.$6T.set_DefinitionId("sitemap"), i
            .$17(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$Ky(i))
        : (t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
            .$6Z(Microsoft.Crm.Client.Core.ViewModels.$99.getName()), t.$6T.set_DefinitionId("sitemap"), t.$1qg = n, t
            .$17(), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().set_$12n(t));
    r.stop()
};
Microsoft.Crm.Client.Application.App.StartPage.$1qv = function(n) {
    if (n.$1rY) Microsoft.Crm.Client.Core.ViewModels.$2K.get_$5().get_$jy().resolve(!0);
    else {
        var t = null;
        t = function() {
            n.remove_$7i(t);
            Microsoft.Crm.Client.Core.ViewModels.$2K.get_$5().get_$jy().resolve(!0)
        };
        n.add_$7i(t)
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$397 = function(n) {
    var i = n.keyCode, t = new Microsoft.Crm.Client.Core.Framework.$NT(n);
    switch (i) {
    case 81:
        (t.$2lD() || t.$2ce()) &&
            t.$3Rr() &&
            Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.TogglePerformanceResultsVisibility()
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$ag = function(n) {
    n.$17();
    n.AddPropertyChangedListener("IsFullyLoaded", Microsoft.Crm.Client.Application.App.StartPage.$2Op);
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ag(n);
    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$uJ(n);
    Microsoft.Crm.Client.Application.App.StartPage.$1a5()
};
Microsoft.Crm.Client.Application.App.StartPage.$2jQ = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$6Z(Microsoft.Crm.Client.Core.Framework.$1.toString(n));
    return t.$AW = !0, "workspace" in Microsoft.Crm.Client.Application.App.StartPage.$7u &&
        t.set_DefinitionId(Microsoft.Crm.Client.Application.App.StartPage.$7u.workspace), t
};
Microsoft.Crm.Client.Application.App.StartPage.$2Op = function() {
    $0.$1(Microsoft.Crm.Client.Application.App.StartPage.$1Dl) || Microsoft.Crm.Client.Application.App.StartPage.$1Dl()
};
Microsoft.Crm.Client.Application.App.StartPage.$Es = function(n, t, i, r, u, f) {
    var e = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$6Z(Microsoft.Crm.Client.Core.Framework.$1.toString(n)),
        o,
        s,
        h;
    $0.$1(e.$1s) && e.set_DefinitionId(t);
    o = {};
    switch (n) {
    case 13:
        e.set_PrimaryModelName(t);
        $0.$1(r) || $0.$1(f)
            ? o.ListDefinitionId = i
            : (o = r, $0.$1(r.RelationshipName) || (o.ParentEntityViewModel = f));
        break;
    case 2:
    case 40:
        e.set_PrimaryModelName(t);
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() && n === 40 && $0.$1(i)
            ? (s = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5()
                .$6Z(Microsoft.Crm.Client.Core.Framework.$1.toString(40)), s.set_PrimaryModelName(t), s
                .set_DefinitionId(s.$J), s.$8G = 1, e = s)
            : (h = new Xrm.Objects.EntityReference(t, new Microsoft.Crm.Client.Core.Framework.Guid(i)), o
                .EntityReference = h);
        break;
    case 1:
    case 37:
        e.$g = i;
        e.$AW = u;
        break;
    case 17:
        if ($0.$1(r))
            throw Error.invalidOperation("Cannot build a ChartDrilldownForm without external context parameters.");
        e.set_PrimaryModelName(t);
        o = r;
        e.set_DefinitionId("CHARTDRILLDOWNFORM");
        break;
    case 5:
        e.set_PrimaryModelName(t);
        break;
    case 50:
        o = r
    }
    return e.set_ExternalContext(new Microsoft.Crm.Client.Core.ViewModels.$It(null, o)), e
};
Microsoft.Crm.Client.Application.App.StartPage.$30H = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Date, Microsoft.Crm.Client.Core.Framework.$4);
    return Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("LastTimeCheckSourceForUpdatesOnResumeKey")
            .then(function(t) { $0.$1(t) ? n.resolve(null) : n.resolve(new Date(t.utctime)) },
                function(t) { n.reject(t) }),
        n.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$3No = function(n) {
    var t = {};
    t.utctime = n.toUTCString();
    Microsoft.Crm.Client.Core.Framework.$h.get_$5().$R7("LastTimeCheckSourceForUpdatesOnResumeKey", t, !0)
};
Microsoft.Crm.Client.Application.App.StartPage.$w6 = function(n, t, i) {
    Microsoft.Crm.Client.Application.App.$j.$351();
    i === 1
        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$19F(n, t)
        : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$19q(n, t)
};
Microsoft.Crm.Client.Application.App.StartPage.$1TL = function() {
    return Microsoft.Crm.Client.Core.Framework.$6.get_$k() ? "InteractionCentricWorkspace".toUpperCase() : "Workspace"
};
Microsoft.Crm.Client.Application.App.StartPage.$1cj = function() {
    var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t;
    return Microsoft.Crm.Client.Application.App.StartPage.$2Lx()
        ? (t = new Date, Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance()
            .$1cj()
            .then(function(i) {
                    var u = new Date,
                        f = u - t,
                        e = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                            .$O7("1006",
                                "MOCADataSyncTransitionTime",
                                "",
                                "",
                                0,
                                "",
                                "",
                                Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                                "",
                                "",
                                f),
                        r;
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(e);
                    i.$1KV ||
                    (r = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                        .$O7("1007",
                            "MOCADataSyncSuccess",
                            "",
                            "",
                            0,
                            Microsoft.Crm.Client.Core.Offline.Upsync.Common.$5Z.toString(i.$qP),
                            "",
                            Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                            (new Date).toString(),
                            "",
                            0), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                        .$1w(r));
                    n.resolve(i)
                },
                function(i) {
                    var r = new Date,
                        u = r - t,
                        f = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                            .$O7("1006",
                                "MOCADataSyncTransitionTime",
                                "",
                                "",
                                0,
                                "",
                                "MOCADataSyncTransitionTime is failed",
                                Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                                "",
                                "",
                                u);
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(f);
                    i.$E.toLowerCase() !== "no records found" &&
                        Microsoft.Crm.Client.Core.Framework.Trace
                        .logError(1004, "Error occured while UpSync. Error details -- " + i.$E);
                    n.reject(i)
                }))
        : (Xrm.Utility
            .isMocaOfflineFeatureEnabled() &&
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() ||
            Microsoft.Crm.Client.Core.Framework.Trace
            .logWarning(1004,
                "Cannot initiate playback in StartPlayback() due to one of these reasons. Either client is not enabled for offline sync; Server is not available; Offline data store does not exist; PlaybackManager is not instantiated."), n.reject(Microsoft.Crm.Client.Core.Framework.$4.$h("Offline feature is not available or we are not online"))), n.promise()
};
Microsoft.Crm.Client.Application.App.StartPage.$2Lx = function() {
    return Xrm.Utility.isMocaOfflineFeatureEnabled() &&
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() &&
        !$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o()) &&
        !$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R()) &&
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R().get_$3C() &&
        !!Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance()
};
Microsoft.Crm.Client.Application.App.StartPage.$3V8 = function(n) {
    var i, t, r, u;
    if (Microsoft.Crm.Client.Core.Framework.$C.$12X("DataSource_Initialize_End", 1004, null), Microsoft.Crm.Client.Core
        .Storage.DataApi.DataSource.$3.$JT()) {
        if (Microsoft.Crm.Client.Application.App.StartPage.$35u(n), Microsoft.Crm.Client.Application.App.$13.get_$5()
            .$17(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Fa,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
                .get_$Zj()), Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
            !Microsoft.Crm.Client.Application.App.$13.get_$5().$1rc("InteractionCentricDashboard")) {
            Microsoft.Crm.Client.Application.App.$j.$1DX();
            Microsoft.Crm.Client.Core.ViewModels.$1S.$20B("",
                Microsoft.Crm.Client.Core.Framework.$1u.$b("noPermissionMessage").toString(),
                null,
                null,
                "",
                "");
            return
        }
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        (i = Microsoft.Crm.Client.Core.Framework.$1u
            .$b("MetadataInSAMTableInvalid"), Microsoft.Crm.Client.Application.App.$13.get_$5()
            .$1rc("ISHMetadataOnDemand") &&
            !i
            ? Microsoft.Crm.Client.Application.App.StartPage.$1d3 = 1
            : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.set_$1EJ(!1))
    }
    n === 1
        ? Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$YK()
        ? (u = function() {
            var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 31);
            n.execute();
            n.dispose()
        }, Microsoft.Crm.Client.Application.App.StartPage.$b4(2)
            .done(function() {
                Microsoft.Crm.Client.Core.ViewModels.$1S
                    .$15X(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_SaveDrafts_Title"),
                        Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_SaveDrafts_Message"),
                        0,
                        u,
                        null,
                        Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ButtonText_ViewDrafts"),
                        Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_OK_Text"))
            }))
        : (Microsoft.Crm.Client.Core.Framework.Trace
            .logVerbose(1004, "StartPage.UpdateMetadata.ShowMetadataDownloadPrompt"), t = function() {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(1004, "StartPage.UpdateMetadata.MetadataDownloadPrompt_Accepted");
            Microsoft.Crm.Client.Application.App.StartPage.$b4(1)
        }, r = function() {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logVerbose(1004, "StartPage.UpdateMetadata.MetadataDownloadPrompt_Cancelled");
            Microsoft.Crm.Client.Application.App.StartPage.$b4(2)
        }, Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Gl ||
            Microsoft.Crm.Client.Core.Framework.$6.$w ||
            Microsoft.Crm.Client.Core.Framework.$6.get_$k()
            ? t()
            : Microsoft.Crm.Client.Core.ViewModels.$1S.$20B(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("New_Metadata_Prompt_Title"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Message"),
                t,
                r,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_OK"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("New_Metadata_Prompt_Button_Cancel"),
                "MetadataSync"))
        : Microsoft.Crm.Client.Application.App.StartPage.$b4(n)
};
Microsoft.Crm.Client.Application.App.StartPage.$25K = function(n) {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$at.$21 &&
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$at.$3FC();
    var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$b4(n);
    return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$at.$21 &&
        t.then(function() { Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$at.$3F9() },
            function() { Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$at.$3FB() }), t
};
Microsoft.Crm.Client.Application.App.StartPage.$35u = function(n) {
    if (n !== 2 &&
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
        ($0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q()) ||
            JSON.stringify(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$4h.$1A()) !==
            JSON.stringify(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$1A())) &&
        (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H
            .set_$7q(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K()
                .$4h), Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$mH &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$8x !==
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty())) {
        var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
            .$O7("1000",
                "MOCADataSyncAppMetadataAssigned",
                "",
                "",
                0,
                "",
                "",
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$8x,
                (new Date).toString(),
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$14B,
                0);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t);
        Microsoft.Crm.Client.Core.Framework.$C.$C("OfflineProfileAssigned", 4, "Profile assigned successfully.")
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$1rN = function() {
    return Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$TI() &&
        Microsoft.Crm.Client.Core.ViewModels.$n.$1rz() &&
        !Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$11v() &&
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$mH &&
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
        .isFeatureEnabled("MobileClientOfflineAutoOptin") &&
        !Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$YK()
};
Microsoft.Crm.Client.Application.App.StartPage.$3R5 = function() {
    var n = Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu();
    n.$Mv !== 1 || n.$RD
        ? Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1Vb(!1)
        : Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1Vb(!0)
};
Microsoft.Crm.Client.Application.App.StartPage.$2Vr = function() {
    if (Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$t8) {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K(),
            t = n.$3G.toString() + "_" + n.get_$Jl().toString(),
            i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$22Q();
        Microsoft.Crm.Client.Application.App.StartPage.$2Vb(t.toLowerCase(), i, 100)
    }
};
Microsoft.Crm.Client.Application.App.StartPage.UnsetISHSyncCookie = function() {
    if (Microsoft.Crm.Client.Core.Framework.$6.get_$k()) {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K(),
            t = n.$3G.toString() + "_" + n.get_$Jl().toString();
        Microsoft.Crm.Client.Application.App.StartPage.$2Vb(t.toLowerCase(), "", -1)
    }
};
Microsoft.Crm.Client.Application.App.StartPage.$2Vb = function(n, t, i) {
    var u, r;
    $0.$1(n) ||
    (u = "", IsNull(i) || (r = new Date, r.setTime(r.getTime() + i * 31536e6), u = "; expires=" + r.toUTCString()),
        document.cookie = n + "=" + t + u + "; path=/")
};
Microsoft.Crm.Client.Application.App.StartPage.$2Pd = function() { Microsoft.Crm.Client.Application.App.$6R.$35J() };
Microsoft.Crm.Client.Application.App.$4e = function() { this.$$d_$LH = Function.createDelegate(this, this.$LH) };
Microsoft.Crm.Client.Application.App.$4e.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.$4e.$D) &&
    (Microsoft.Crm.Client.Application.App.$4e.$D = Microsoft.Crm.Client.Core.Framework.$6.get_$5O()
        ? new Microsoft.Crm.Client.Application.App.$P2
        : new Microsoft.Crm.Client.Application.App.$4e), Microsoft.Crm.Client.Application.App.$4e.$D
};
Microsoft.Crm.Client.Application.App.$4e.prototype = {
    $7c: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$16R().then(function(i) {
                if (i.$Cl) t.$2Pe(n, i);
                else {
                    var r = Microsoft.Crm.Client.Core.Framework.$4.$lh(i.$6n);
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$wF(r)
                        .always(function() {
                            n.reject(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$102())
                        })
                }
            },
            function(t) {
                var r = i.$334(t);
                r.$10 === -2147093999
                    ? n.reject(r)
                    : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$wF(r)
                    .always(function() {
                        n.reject(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$102())
                    })
            }), n.promise()
    },
    $334: function(n) {
        return n.$10 === -2147220955 ||
            n.$10 === -2147209463 ||
            n.$10 === -2147209460 ||
            n.$10 === -2147220692 ||
            n.$10 === -2147094013 ||
            n.$10 === -2147093995
            ? Microsoft.Crm.Client.Core.Framework.$4.$3ZY(n, null, -2147094013)
            : Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999)
    },
    $2Pe: function(n, t) { n.resolve(new Microsoft.Crm.Client.Core.Framework.$FI(t.$3G, t.$DM)) },
    $LH: function() {
        if (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s()) {
            var n = this;
            this.$7c().fail(function(n) {
                n.$10 !== -2147093999 &&
                    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$19F(0, n.$T7())
            })
        }
    }
};
Microsoft.Crm.Client.Application.App.$P2 = function() { Microsoft.Crm.Client.Application.App.$P2.initializeBase(this) };
Microsoft.Crm.Client.Application.App.$P2.prototype = {
    $2Pe: function(n, t) {
        if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$21) {
            var i = this;
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$2Go(function(i) {
                var r = i.error, u = i.emailAddress, f, e, o, s;
                !Microsoft.Crm.Client.Core.Framework.$3.$A(r) || Microsoft.Crm.Client.Core.Framework.$3.$A(u)
                    ? n.reject(Microsoft.Crm.Client.Core.Framework.$4.$h(r))
                    : (f = t.$22C.toString().toLowerCase(), e = u
                        .toLowerCase(), f !== e
                        ? (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$21 &&
                        (o = new Microsoft.Crm.Client.Core.Framework
                            .$7M({
                                errorcode: -2147085807,
                                message: "Email Addresses in CRM and exchange do not match."
                            }), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T
                            .$19q(-1, o)), s = Microsoft.Crm.Client.Core.Framework.Common.$2
                            .$6("Error_Message_0x80061211"), n.reject(Microsoft.Crm.Client.Core.Framework.$4.$h(s)))
                        : n.resolve(new Microsoft.Crm.Client.Core.Framework.$FI(t.$3G, t.$DM)))
            })
        } else Microsoft.Crm.Client.Application.App.$4e.prototype.$2Pe.call(this, n, t)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.App.Components");
Microsoft.Crm.Client.Application.App.Components.$7i = function() {};
Microsoft.Crm.Client.Application.App.Components.$7i.$2h6 = function(n, t) {
    t.$Mq(Microsoft.Crm.Client.Application.App.Features.$e).$NS(Microsoft.Crm.Client.Application.App.Features.$e).$3Zk()
        .$3Zl(function() { return n })
};
Microsoft.Crm.Client.Application.App.Components.$7i.$1xQ = function() {
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("EditableGridControlPbl", Microsoft.Crm.Client.Application.App.Features.$DD);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("EditableGridControlJsEvents", Microsoft.Crm.Client.Application.App.Features.$DC);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientMashup", Microsoft.Crm.Client.Application.App.Features.$7W);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ExportToExcelMobile", Microsoft.Crm.Client.Application.App.Features.$DN);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ExcelDocumentTemplate", Microsoft.Crm.Client.Application.App.Features.$D6);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("WordDocumentTemplate", Microsoft.Crm.Client.Application.App.Features.$FL);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientTelemetry", Microsoft.Crm.Client.Application.App.Features.$F8);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("CortanaProactiveExperience", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("CustomControlMobile", Microsoft.Crm.Client.Application.App.Features.$Cv);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ISHMetadataOnDemand", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("InteractionCentricDashboard", Microsoft.Crm.Client.Application.App.Features.$6W);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("TaskBasedFlow", Microsoft.Crm.Client.Application.App.Features.$F7);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ProcessUnification", Microsoft.Crm.Client.Application.App.Features.$El);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AppLinking", Microsoft.Crm.Client.Application.App.Features.$Cd);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientTheming", Microsoft.Crm.Client.Application.App.Features.$ER);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("GuidedHelp", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ISHGuidedHelp", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MarsLegacyClientEnabled", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AppModuleForOrganization", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AppModuleMOCAForScaleGroup", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("OfficeMailApp", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("OfficeMailAppMobile", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("OfficeMailAppMetadata", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("SSSCustomProperty", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ElasticSearch", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientOffline", Microsoft.Crm.Client.Application.App.Features.$EQ);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientOfflineAutoOptin", Microsoft.Crm.Client.Application.App.Features.$EO);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("DocumentRecommendations", Microsoft.Crm.Client.Application.App.Features.$D5);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("InteractionCentricMultiEntityChartsFeature", Microsoft.Crm.Client.Application.App.Features.$Dx);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ProductRecommendations", Microsoft.Crm.Client.Application.App.Features.$Em);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("WebResourceAndIFrameOnISH", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("SSSReliablePromote", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("EnableControlMappings", Microsoft.Crm.Client.Application.App.Features.$DH);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AssociatedGridURLAddressability", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("LookupRelationshipFilters", Microsoft.Crm.Client.Application.App.Features.$EL);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AdvancedSimilaritySearch", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("InteractionCentricLookupAutoResolve", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("QuickFindSearchOnISH", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("EmailEngagement", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("OneDriveIntegration", Microsoft.Crm.Client.Application.App.Features.$EY);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("SharePointS2S", Microsoft.Crm.Client.Application.App.Features.$Ey);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("InteractionCentricEmailLink", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("LandingPage", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("PaneStackingOnPhones", Microsoft.Crm.Client.Application.App.Features.$Ee);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("DeviceIntegration", Microsoft.Crm.Client.Application.App.Features.$D2);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("PowerBI", Microsoft.Crm.Client.Application.App.Features.$Eh);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("LandingPageActivities", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("MobileClientDeviceIntegration", Microsoft.Crm.Client.Application.App.Features.$EP);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("ActionCard", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("NonBaseActionCard", Microsoft.Crm.Client.Application.App.Features.$32);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("AuthenticatedMashups", Microsoft.Crm.Client.Application.App.Features.$Ce);
    Microsoft.Crm.Client.Application.App.Features.$e.get_$5()
        .$5L("OfficeMailAppEmailEngagement", Microsoft.Crm.Client.Application.App.Features.$32)
};
Microsoft.Crm.Client.Application.App.Components.$7i.prototype = {
    $2h1: function(n) {
        Microsoft.Crm.Client.Application.App.Components.$7i
            .$2h6(Microsoft.Crm.Client.Application.App.Features.$e.get_$5(), n);
        var t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5(),
            r = this,
            i = function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$14X(n) },
            u = this;
        t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(37),
            function() {
                var n = new Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric
                    .InteractionCentricDashboardViewModel;
                return n.set_DefinitionId(Microsoft.Crm.Client.Core.Framework.$1.toString(37).toUpperCase()), n
                    .$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)), n
            },
            null,
            i);
        Microsoft.Crm.Client.Application.App.Components.$7i.$1xQ()
    }
};
Microsoft.Crm.Client.Application.App.Components.$6u = function() {};
Microsoft.Crm.Client.Application.App.Components.$6u.$3Jq = function(n, t) {
    t.$Mq(Microsoft.Crm.Client.Core.ViewModels.$A).$NS(Microsoft.Crm.Client.Core.ViewModels.$A).$3Zk()
        .$3Zl(function() { return n });
    t.$Mq(Microsoft.Crm.Client.Core.ViewModels.$A).$NS(Microsoft.Crm.Client.Core.Framework.$6y).$3Zk()
        .$3Zl(function() { return n })
};
Microsoft.Crm.Client.Application.App.Components.$6u.$3Jg = function(n, t) {
    t.$Mq(Microsoft.Crm.Client.Core.ViewModels.$G).$NS(Microsoft.Crm.Client.Core.ViewModels.$G).$3Zk()
        .$3Zl(function() { return n })
};
Microsoft.Crm.Client.Application.App.Components.$6u.$1xQ = function(n) {
    n.$R("Decimal", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("DurationViewModel", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("Float", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("Picklist", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("PicklistStatus", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("RadioButton", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("Label", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("TextArea", Microsoft.Crm.Client.Core.ViewModels.$3Q);
    n.$R("Button", Microsoft.Crm.Client.Core.ViewModels.$2A);
    n.$R("DropDialogButton", Microsoft.Crm.Client.Core.ViewModels.$2s);
    n.$R("Link", Microsoft.Crm.Client.Core.ViewModels.$3u);
    n.$R("Url", Microsoft.Crm.Client.Core.ViewModels.$3u);
    n.$R("EmailAddress", Microsoft.Crm.Client.Core.ViewModels.$3u);
    n.$R("Image", Microsoft.Crm.Client.Core.ViewModels.$7u);
    n.$R("Section", Microsoft.Crm.Client.Core.ViewModels.$2Y);
    n.$R("PanoramaContainer", Microsoft.Crm.Client.Core.ViewModels.ActiveItemContainerViewModel);
    n.$R("Pane", Microsoft.Crm.Client.Core.ViewModels.$2Y);
    n.$R("RootViewModel", Microsoft.Crm.Client.Core.ViewModels.RootViewModel);
    n.$R("Group", Microsoft.Crm.Client.Core.ViewModels.$2Y);
    n.$R("MultilineList", Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel);
    n.$R("SelectableList", Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel);
    n.$R("MultiItemList", Microsoft.Crm.Client.Core.ViewModels.MultiItemListViewModel);
    n.$R("DraftList", Microsoft.Crm.Client.Core.ViewModels.DraftsMultilineListViewModel);
    n.$R("HierarchyList", Microsoft.Crm.Client.Core.ViewModels.HierarchyListViewModel);
    n.$R("GridContainer", Microsoft.Crm.Client.Core.ViewModels.$4h);
    n.$R("Grid", Microsoft.Crm.Client.Core.ViewModels.GridViewModel);
    n.$R("ListItem", Microsoft.Crm.Client.Core.ViewModels.$41);
    n.$R("EmailTemplatesList", Microsoft.Crm.Client.Core.ViewModels.EmailTemplatesListViewModel);
    n.$R("Integer", Microsoft.Crm.Client.Core.ViewModels.$Ak);
    n.$R("Int64", Microsoft.Crm.Client.Core.ViewModels.$Aj);
    n.$R("Real", Microsoft.Crm.Client.Core.ViewModels.$7Y);
    n.$R("Money", Microsoft.Crm.Client.Core.ViewModels.$7Y);
    n.$R("Decimal", Microsoft.Crm.Client.Core.ViewModels.$7Y);
    n.$R("ComboBox", Microsoft.Crm.Client.Core.ViewModels.$9d);
    n.$R("DateTimeScroller", Microsoft.Crm.Client.Core.ViewModels.$8m);
    n.$R("DurationScroller", Microsoft.Crm.Client.Core.ViewModels.$DA);
    n.$R("FormHeader", Microsoft.Crm.Client.Core.ViewModels.$DR);
    n.$R("ListComponentFormHeader", Microsoft.Crm.Client.Core.ViewModels.$B1);
    n.$R("HitHighlightLabel", Microsoft.Crm.Client.Core.ViewModels.$AP);
    n.$R("SubjectTree", Microsoft.Crm.Client.Core.ViewModels.$F3);
    n.$R("MailAppMultiLineListViewModel", Microsoft.Crm.Client.Core.ViewModels.MailAppMultiLineListViewModel);
    n.$R("MailAppRelevantSearchListViewModel", Microsoft.Crm.Client.Core.ViewModels.MailAppRelevantSearchListViewModel)
};
Microsoft.Crm.Client.Application.App.Components.$Lm = function() {};
Microsoft.Crm.Client.Application.App.Components.$Lm.prototype = {
    $2h1: function(n) {
        var t, i, r, u, f;
        n.$Mq(Microsoft.Crm.Client.Core.Framework.$DM).$3Zk();
        t = this;
        n.$Mq(Microsoft.Crm.Client.Core.Framework.$7C).$NS(Microsoft.Crm.Client.Core.Framework.$AQ).$3Zk()
            .$3Zl(function() { return new Microsoft.Crm.Client.Core.Framework.$7C });
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$Kz
            ? (i = this, n.$Mq(Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn)
                .$NS(Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT)
                .$3Zl(function() { return new Microsoft.Crm.Client.Core.Framework.ClientWatson.$Dn }))
            : (r = this, n.$Mq(Microsoft.Crm.Client.Core.Framework.ClientWatson.$37)
                .$NS(Microsoft.Crm.Client.Core.Framework.ClientWatson.$AT)
                .$3Zl(function() { return new Microsoft.Crm.Client.Core.Framework.ClientWatson.$37 }));
        n.$Mq(Microsoft.Crm.Client.Core.Views.ViewManager).$NS(Microsoft.Crm.Client.Core.Framework.$4J).$3Zk();
        u = this;
        n.$Mq(Microsoft.Crm.Client.Application.App.$6f).$NS(Microsoft.Crm.Client.Core.Framework.$As).$3Zk()
            .$3Zl(function() { return new Microsoft.Crm.Client.Application.App.$6f });
        f = this;
        n.$Mq(Microsoft.Crm.Client.Application.App.$11).$NS(Microsoft.Crm.Client.Core.Framework.$Ax).$3Zk()
            .$3Zl(function() { return Microsoft.Crm.Client.Application.App.$11.get_$5() })
    }
};
Microsoft.Crm.Client.Application.App.Components.$4F = function() {};
Microsoft.Crm.Client.Application.App.Components.$4F.$2h7 = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5(), i;
    Microsoft.Crm.Client.Application.App.Components.$6u.$3Jq(t, n);
    Microsoft.Crm.Client.Application.App.Components.$6u.$1xQ(t);
    i = function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$14X(n) };
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(1),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(1);
            return n.set_DefinitionId(Microsoft.Crm.Client.Core.Framework.$1.toString(1).toUpperCase()), n
                    .$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(2),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel(2);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 2)
        },
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(13),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(13);
            return n.set_DefinitionId("gridform"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(17),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(17);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(26),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(26);
            return n.set_DefinitionId("searchPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(47),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(47);
            return n.set_DefinitionId("relevanceSearchPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(34),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.MailApp.SenderFormRootViewModel(34);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(57),
        function() { return new Microsoft.Crm.Client.Core.ViewModels.MailApp.UnknownRecipientFormViewModel(57) },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(35),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(35);
            return n.set_DefinitionId("setRegardingPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(59),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.MailApp.RegardingObjectCardViewModel(59);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(31),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(31);
            return n.set_DefinitionId("draftsPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(32),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(32);
            return n.set_DefinitionId("duplicateRecordsPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(3),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel;
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        });
    t.$1a(Microsoft.Crm.Client.Core.ViewModels.$99.getName(),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.$99;
            return n.$1A1 = new Microsoft.Crm.Client.Core.ViewModels
                .$M(n, new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("PingServer", null)),
            n
                .$1to = new Microsoft.Crm.Client.Core.ViewModels
                .$M(n,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("MetadataDownload", null)), n
        });
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(5),
        function() {
            var n = Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 4
                ? new Microsoft.Crm.Client.Core.ViewModels.MailApp.MailAppCreateFormViewModel(5)
                : new Microsoft.Crm.Client.Core.ViewModels.QuickCreateFormViewModel(5);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 1);
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1YA(n, 2)
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2gd(n) });
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(36),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.MailApp.SenderCreateFormViewModel(5);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 1)
        },
        i);
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(22),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.$V8;
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 2);
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1YA(n, 2)
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19s(n) });
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(14),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.InlineCreateFormViewModel;
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2Po(n) },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$Ne(n) });
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(12),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel;
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 1);
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1YA(n, 4)
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19s(n) });
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(10),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(10);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        });
    t.$CP("AssociateFormViewModel",
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.AssociateFormViewModel;
            return n.$1NE = new Microsoft.Crm.Client.Core.ViewModels
                .$M(n,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("AssociateRecords", null)), n
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$2Po(n) },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$Ne(n) });
    t.$CP("GlobalLookupViewModel",
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.GlobalLookupViewModel;
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                .$M(n,
                    new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .QueryDescriptor("RootDefinition", null)), n
        },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$13e(n) },
        function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$Ne(n) });
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(41),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(41);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        });
    t.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(50),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(50);
            return n.set_DefinitionId("powerBIFullScreenPage"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        null,
        i);
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(54),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.MailApp.EmailTemplatesRootViewModel(54);
            return n.set_DefinitionId("template"), n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        });
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(53),
        function() { return Microsoft.Crm.Client.Core.ViewModels.MailApp.FollowViewModel.get_$5() });
    t.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(55),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(55);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        });
    Microsoft.Crm.Client.Application.App.Components.$4F.$2h5(t);
    Microsoft.Crm.Client.Application.App.Components.$4F.$1xQ(t)
};
Microsoft.Crm.Client.Application.App.Components.$4F.$2h5 = function(n) {
    n.$2Rk("ActionProvider", Microsoft.Crm.Client.Core.ViewModels.$M)
};
Microsoft.Crm.Client.Application.App.Components.$4F.$2h3 = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.$G.get_$5();
    t.$1Ab = new Microsoft.Crm.Client.Core.ViewModels.$M(null,
        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("Customization", null));
    Microsoft.Crm.Client.Application.App.Components.$6u.$3Jg(t, n)
};
Microsoft.Crm.Client.Application.App.Components.$4F.$2h4 = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.CustomScriptsContainerViewModel.get_$5(), i;
    t.$1yF = new Microsoft.Crm.Client.Core.ViewModels.$M(null,
        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("RetrieveWebResouces", null));
    t.$1Qf = new Microsoft.Crm.Client.Core.ViewModels.$Le;
    n.$Mq(Microsoft.Crm.Client.Core.ViewModels.CustomScriptsContainerViewModel)
        .$NS(Microsoft.Crm.Client.Core.ViewModels.CustomScriptsContainerViewModel).$3Zk().$3Zl(function() { return t });
    i = Microsoft.Crm.Client.Core.ViewModels.$17.get_$5();
    n.$Mq(Microsoft.Crm.Client.Core.ViewModels.$17).$NS(Microsoft.Crm.Client.Core.ViewModels.$91).$3Zk()
        .$3Zl(function() { return i })
};
Microsoft.Crm.Client.Application.App.Components.$4F.$2h2 = function(n) {
    var t = Microsoft.Crm.Client.Core.ViewModels.ClientApiManager.get_$5();
    n.$Mq(Microsoft.Crm.Client.Core.ViewModels.ClientApiManager).$NS(Microsoft.Crm.Client.Core.ViewModels.$AS).$3Zk()
        .$3Zl(function() { return t });
    n.$Mq(Microsoft.Crm.Client.Core.ViewModels.ClientApiManager)
        .$NS(Microsoft.Crm.Client.Core.ViewModels.ClientApiManager).$3Zk().$3Zl(function() { return t })
};
Microsoft.Crm.Client.Application.App.Components.$4F.$1xQ = function(n) {
    n.$R("EditModeSectionViewModel", Microsoft.Crm.Client.Core.ViewModels.EditModeSectionViewModel);
    n.$R("NotesEditModeSectionViewModel", Microsoft.Crm.Client.Core.ViewModels.$EX);
    n.$R("OptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.OptionSetViewModel);
    n.$R("UnboundOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.$FF);
    n.$R("ToggleViewModel", Microsoft.Crm.Client.Core.ViewModels.ToggleViewModel);
    n.$R("StatusOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.StatusOptionSetViewModel);
    n.$R("UnboundStatusOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.UnboundStatusOptionSetViewModel);
    n.$R("EntityReferenceOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.$DK);
    n.$R("LanguageOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.$EH);
    n.$R("UnboundLanguageOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.UnboundLanguageOptionSetViewModel);
    n.$R("TimeZoneOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.$FE);
    n.$R("LookupViewModel", Microsoft.Crm.Client.Core.ViewModels.$7U);
    n.$R("LookupListViewModel", Microsoft.Crm.Client.Core.ViewModels.$97);
    n.$R("LookupBarViewModel", Microsoft.Crm.Client.Core.ViewModels.$B4);
    n.$R("CrmCollapsibleSection", Microsoft.Crm.Client.Core.ViewModels.$2Y);
    n.$R("EditListItem", Microsoft.Crm.Client.Core.ViewModels.EditListItemViewModel);
    n.$R("CrmFieldsComponent", Microsoft.Crm.Client.Core.ViewModels.$Cs);
    n.$R("MultipleSourceLookup", Microsoft.Crm.Client.Core.ViewModels.$ES);
    n.$R("EntityMetadataOptionSetViewModel", Microsoft.Crm.Client.Core.ViewModels.$8p);
    n.$R("PartyListLookup", Microsoft.Crm.Client.Core.ViewModels.PartyListLookupViewModel);
    n.$R("PartyList", Microsoft.Crm.Client.Core.ViewModels.PartyListViewModel);
    n.$R("PartyListItem", Microsoft.Crm.Client.Core.ViewModels.PartyListItemViewModel);
    n.$R("PartyListRead", Microsoft.Crm.Client.Core.ViewModels.PartyListReadViewModel);
    n.$R("AddressReadOnly", Microsoft.Crm.Client.Core.ViewModels.$Cb);
    n.$R("PhoneReadOnly", Microsoft.Crm.Client.Core.ViewModels.$Ef);
    n.$R("EmailReadOnly", Microsoft.Crm.Client.Core.ViewModels.$DG);
    n.$R("UriReadOnly", Microsoft.Crm.Client.Core.ViewModels.$FG);
    n.$R("CrmChartDrilldown", Microsoft.Crm.Client.Core.ViewModels.CrmChartDrilldownViewModel);
    n.$R("SearchBoxViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.SearchBoxViewModel);
    n.$R("MailAppSearchBoxViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.MailAppSearchBoxViewModel);
    n.$R("PageSearchHeaderViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.PageSearchHeaderViewModel);
    n.$R("SearchSummaryViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$Bx);
    n.$R("DraftsViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$8n);
    n.$R("DuplicateRecordsViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$8o);
    n.$R("DraftsCommandButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$D8);
    n.$R("SyncErrorsCommandButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$F4);
    n.$R("SiteMapCommandButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$F0);
    n.$R("RollupViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.RollupViewModel);
    n.$R("SimpleButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.$79);
    n.$R("MailAppMultiLineListViewModel", Microsoft.Crm.Client.Core.ViewModels.MailAppMultiLineListViewModel);
    n.$R("MailAppRelevantSearchListViewModel", Microsoft.Crm.Client.Core.ViewModels.MailAppRelevantSearchListViewModel);
    n.$R("ControlViewModel", Microsoft.Crm.Client.Core.ViewModels.$2s);
    n.$R("TelPhoneReadOnly", Microsoft.Crm.Client.Core.ViewModels.Controls.$F9);
    n.$R("PopOutLinkLabelViewModel", Microsoft.Crm.Client.Core.ViewModels.MailApp.$9C);
    n.$R("FeedbackViewModel", Microsoft.Crm.Client.Core.ViewModels.$DP);
    n.$R("RecentlyViewedItemListViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$Eo);
    n.$R("MailAppRecentlyViewedItemListViewModel", Microsoft.Crm.Client.Core.ViewModels.MailApp.$7V);
    n.$R("LandingPageViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.LandingPageViewModel);
    n.$R("SetRegardingButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.MailApp.$Ex);
    n.$R("EmailTemplatesRegardingComboBoxViewModel",
        Microsoft.Crm.Client.Core.ViewModels.MailApp.EmailTemplatesRegardingComboBoxViewModel);
    n.$R("ExternalProtocolLinkLabelViewModel",
        Microsoft.Crm.Client.Core.ViewModels.MailApp.ExternalProtocolLinkLabelViewModel);
    n.$R("RecipientExternalProtocolLinkViewModel",
        Microsoft.Crm.Client.Core.ViewModels.MailApp.RecipientExternalProtocolLinkViewModel);
    n.$R("DateViewModel", Microsoft.Crm.Client.Core.ViewModels.$A2);
    n.$R("DurationViewModel", Microsoft.Crm.Client.Core.ViewModels.$A7);
    Microsoft.Crm.Client.Application.App.Components.$4F.$1Zl(n)
};
Microsoft.Crm.Client.Application.App.Components.$4F.$1Zl = function(n) {
    n.$R("ProcessSectionViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$9D);
    n.$R("ProxyProcessHeader", Microsoft.Crm.Client.Core.ViewModels.Controls.$Bc);
    n.$R("ProcessMetadataManager", Microsoft.Crm.Client.Core.ViewModels.Controls.ProcessMetadataManager);
    n.$R("ProcessManager", Microsoft.Crm.Client.Core.ViewModels.Controls.$44);
    n.$R("ProcessActiveStageManager", Microsoft.Crm.Client.Core.ViewModels.Controls.$BV);
    n.$R("ProcessHeader", Microsoft.Crm.Client.Core.ViewModels.Controls.$BX);
    n.$R("Stage", Microsoft.Crm.Client.Core.ViewModels.Controls.$C5);
    n.$R("StageAdvanceAction", Microsoft.Crm.Client.Core.ViewModels.Controls.$7Z);
    n.$R("StageNavigationAction", Microsoft.Crm.Client.Core.ViewModels.Controls.$C4);
    n.$R("ProxyProcessControl", Microsoft.Crm.Client.Core.ViewModels.Controls.$8G);
    n.$R("ProcessEntity", Microsoft.Crm.Client.Core.ViewModels.Controls.$BW)
};
Microsoft.Crm.Client.Application.App.Components.$4F.prototype = {
    $2h1: function(n) {
        Microsoft.Crm.Client.Application.App.Components.$4F.$2h7(n);
        Microsoft.Crm.Client.Application.App.Components.$4F.$2h4(n);
        Microsoft.Crm.Client.Application.App.Components.$4F.$2h3(n);
        Microsoft.Crm.Client.Application.App.Components.$4F.$2h2(n)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.App.Features");
Microsoft.Crm.Client.Application.App.Features.$Cd = function() {
    Microsoft.Crm.Client.Application.App.Features.$Cd.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Cd.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("EmailLinkCommand", Microsoft.Crm.Client.Core.Commands.EmailLinkCommand.$y)
    }
};
Microsoft.Crm.Client.Application.App.Features.$Ce = function() {
    Microsoft.Crm.Client.Application.App.Features.$Ce.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Ce
    .prototype = { get_$3LI: function() { return!0 }, get_$1XA: function() { return"AuthenticatedMashups" } };
Microsoft.Crm.Client.Application.App.Features.$D5 = function() {
    Microsoft.Crm.Client.Application.App.Features.$D5.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$D6 = function() {
    Microsoft.Crm.Client.Application.App.Features.$D6.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$D6.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$21C = !0;
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("OpenDocumentTemplateCommand", Microsoft.Crm.Client.Core.Commands.OpenDocumentTemplateCommand.$y)
    }
};
Microsoft.Crm.Client.Application.App.Features.$DC = function() {
    Microsoft.Crm.Client.Application.App.Features.$DC.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$DD = function() {
    Microsoft.Crm.Client.Application.App.Features.$DD.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$EL = function() {
    Microsoft.Crm.Client.Application.App.Features.$EL.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Ee = function() {
    Microsoft.Crm.Client.Application.App.Features.$Ee.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Ee.prototype = {
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        Microsoft.Crm.Client.Core.Framework.$6.get_$4R() &&
        (Microsoft.Crm.Client.Application.App.$3w.get_$5()
            .add_$1uX(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.get_$5().$1XY), Microsoft.Crm
            .Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .set_$Jm(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.get_$5()))
    }
};
Microsoft.Crm.Client.Application.App.Features.$EP = function() {
    Microsoft.Crm.Client.Application.App.Features.$EP.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$EP
    .prototype = { get_$3LI: function() { return!0 }, get_$1XA: function() { return"MobileClientDeviceIntegration" } };
Microsoft.Crm.Client.Application.App.Features.$Eh = function() {
    Microsoft.Crm.Client.Application.App.Features.$Eh.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Eh.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("OpenInPowerBICommand", Microsoft.Crm.Client.Core.Commands.OpenInPowerBICommand.$y);
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("OpenReportInPowerBICommand", Microsoft.Crm.Client.Core.Commands.OpenReportInPowerBICommand.$y);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("PowerBIViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.PowerBIViewModel);
        Microsoft.Crm.Client.Core.Commands.OpenDashboardCommand.$1s3 = !0
    }
};
Microsoft.Crm.Client.Application.App.Features.$F7 = function() {
    Microsoft.Crm.Client.Application.App.Features.$F7.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$F7.prototype = {
    $Wy: function() {
        var n;
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R(Microsoft.Crm.Client.Core.ViewModels.$58.getName(),
            Microsoft.Crm.Client.Core.ViewModels.$58);
        n = this;
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(38),
            function() {
                var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(38);
                return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)), n.set_DefinitionId("TaskBasedFlowGlobalMenu"), n
            });
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("TaskBasedFlowPageViewModel",
            Microsoft.Crm.Client.Core.ViewModels.TaskBasedFlowPageViewModel);
        var t = this, i = this, r = this;
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(39),
            function() {
                var n = new Microsoft.Crm.Client.Core.ViewModels.TaskBasedFlowContainerViewModel;
                return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("GetMultipleEntityFormDefinition", null)), n
            },
            function(n) {
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 1);
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$1YA(n, 4)
            },
            function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$19s(n) })
    }
};
Microsoft.Crm.Client.Application.App.Features.$FL = function() {
    Microsoft.Crm.Client.Application.App.Features.$FL.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$FL.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$22h = !0;
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("OpenWordTemplateCommand", Microsoft.Crm.Client.Core.Commands.OpenWordTemplateCommand.$y)
    }
};
Microsoft.Crm.Client.Application.App.Features.$Cv = function() {
    Microsoft.Crm.Client.Application.App.Features.$Cv.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Cv.prototype = {
    $17: function() { Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this) },
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("CustomControl",
            Microsoft.Crm.Client.Core.ViewModels.Controls.CustomControls.$2n)
    }
};
Microsoft.Crm.Client.Application.App.Features.$DH = function() {
    Microsoft.Crm.Client.Application.App.Features.$DH.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$DH.prototype = {
    $17: function() { Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this) },
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("CustomControl",
            Microsoft.Crm.Client.Core.ViewModels.Controls.CustomControls.$2n)
    }
};
Microsoft.Crm.Client.Application.App.Features.$DN = function() {
    Microsoft.Crm.Client.Application.App.Features.$DN.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$DN.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("ExportToExcelCommand", Microsoft.Crm.Client.Core.Commands.ExportToExcelCommand.$y)
    }
};
Microsoft.Crm.Client.Application.App.Features.$e = function() { this.$1mc = {} };
Microsoft.Crm.Client.Application.App.Features.$e.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Application.App.Features.$e.$D) &&
    (Microsoft.Crm.Client.Application.App.Features.$e.$D = new Microsoft.Crm.Client.Application.App.Features
        .$e), Microsoft.Crm.Client.Application.App.Features.$e.$D
};
Microsoft.Crm.Client.Application.App.Features.$e.prototype = {
    $1AI: function(n) {
        var t = this.$1mc[n];
        return t
            ? new t
            : (Microsoft.Crm.Client.Core.Framework.$C.$1d("FeatureFactory",
                1004,
                String.format("Can not create Feature: '{0}' - Type not found", n)), null)
    },
    $5L: function(n, t) { this.$1mc[n] = t }
};
Microsoft.Crm.Client.Application.App.Features.FeatureName = function() {};
Microsoft.Crm.Client.Application.App.Features.$32 = function() {};
Microsoft.Crm.Client.Application.App.Features.$32.prototype = {
    $fG_0: !1,
    $tP_0: !1,
    $HM: !1,
    $17: function() {
        this.$Wy();
        this.$fG_0 = !0
    },
    get_$11q: function() { return this.$fG_0 },
    $2Qf: function() { this.$tP_0 = !0 },
    get_$1s4: function() { return this.$tP_0 },
    get_$CG: function() { return this.$HM },
    set_$CG: function(n) { return this.$HM = n, n },
    get_$3LI: function() { return!1 },
    get_$1XA: function() { return"" },
    $Wy: function() {}
};
Microsoft.Crm.Client.Application.App.Features.$7W = function() {
    Microsoft.Crm.Client.Application.App.Features.$7W.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$7W.prototype = {
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .set_$IQ(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.get_$5())
    },
    get_$3LI: function() {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            !Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$5X &&
            !Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$34i()
    },
    get_$1XA: function() { return"HasMashupSupport" },
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("IFrameViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.$7t);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("WebResourceViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.WebResourceViewModel);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("ACIControlViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.$CY)
    }
};
Microsoft.Crm.Client.Application.App.Features.$D2 = function() {
    Microsoft.Crm.Client.Application.App.Features.$D2.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$D2.prototype = {
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        Microsoft.Crm.Client.Application.App.$3p.get_$5().$17();
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .set_$5p(Microsoft.Crm.Client.Application.App.$3p.get_$5())
    }
};
Microsoft.Crm.Client.Application.App.Features.$6W = function() {
    Microsoft.Crm.Client.Application.App.Features.$6W.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$6W.$3Jp = function(n) {
    n.$1a(Microsoft.Crm.Client.Core.ViewModels.$59.getName(),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.$59;
            return n.$1A1 = new Microsoft.Crm.Client.Core.ViewModels
                .$M(n, new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("PingServer", null)),
            n
        });
    n.$1a(Microsoft.Crm.Client.Core.Framework.$1.toString(4),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.RootViewModel(4);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        })
};
Microsoft.Crm.Client.Application.App.Features.$6W.$CP = function(n) {
    var t = function(n) { Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$14X(n) };
    n.$CP(Microsoft.Crm.Client.Core.Framework.$1.toString(40),
        function() {
            var n = new Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormViewModel(40);
            return n.$72 = new Microsoft.Crm.Client.Core.ViewModels
                    .$M(n,
                        new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RootDefinition", null)),
                n
        },
        function(n) {
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Iy().$Ad(n, 2)
        },
        t)
};
Microsoft.Crm.Client.Application.App.Features.$6W.$1Zl = function(n) {
    n.$R("ProcessSectionViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.$9D);
    n.$R("ProxyProcessHeader", Microsoft.Crm.Client.Core.ViewModels.Controls.$Bc);
    n.$R("ProcessMetadataManager", Microsoft.Crm.Client.Core.ViewModels.Controls.ProcessMetadataManager);
    n.$R("ProcessManager", Microsoft.Crm.Client.Core.ViewModels.Controls.$44);
    n.$R("ProcessActiveStageManager", Microsoft.Crm.Client.Core.ViewModels.Controls.$BV);
    n.$R("ProcessHeader", Microsoft.Crm.Client.Core.ViewModels.Controls.$BX);
    n.$R("Stage", Microsoft.Crm.Client.Core.ViewModels.Controls.$C5);
    n.$R("StageAdvanceAction", Microsoft.Crm.Client.Core.ViewModels.Controls.$7Z);
    n.$R("StageNavigationAction", Microsoft.Crm.Client.Core.ViewModels.Controls.$C4);
    n.$R("ProxyProcessControl", Microsoft.Crm.Client.Core.ViewModels.Controls.$8G);
    n.$R("ProcessEntity", Microsoft.Crm.Client.Core.ViewModels.Controls.$BW)
};
Microsoft.Crm.Client.Application.App.Features.$6W.prototype = {
    $Wy: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this);
        var n = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5();
        n.$R("InteractionWallViewModel", Microsoft.Crm.Client.Core.ViewModels.$7w);
        n.$R("InteractionWallEventViewModel", Microsoft.Crm.Client.Core.ViewModels.InteractionWallEventViewModel);
        n.$R("InteractionWallDateRangeViewModel", Microsoft.Crm.Client.Core.ViewModels.$E1);
        n.$R("MultiplePieChartViewModel", Microsoft.Crm.Client.Core.ViewModels.MultiplePieChartViewModel);
        n.$R("RadioButtonGroupViewModel", Microsoft.Crm.Client.Core.ViewModels.RadioButtonGroupViewModel);
        n.$R("RadioButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.RadioButtonViewModel);
        n.$R("ContainerViewModel", Microsoft.Crm.Client.Core.ViewModels.$2Y);
        n.$R("InteractionCentricInlineLookupListViewModel", Microsoft.Crm.Client.Core.ViewModels.$Am);
        n.$R("InteractionCentricLookupListViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel);
        n.$R("InteractionCentricLookupViewModel", Microsoft.Crm.Client.Core.ViewModels.$Dw);
        n.$R("InteractionCentricMultipleSourceLookupViewModel", Microsoft.Crm.Client.Core.ViewModels.$Dy);
        n.$R("AppliedFiltersViewModel", Microsoft.Crm.Client.Core.ViewModels.$9R);
        n.$R("InteractionCentricDashboardViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.InteractionCentricDashboardViewModel);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("DateRangeViewModel",
            Microsoft.Crm.Client.Core.ViewModels.$D0);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("DateRangeFilterViewModel",
            Microsoft.Crm.Client.Core.ViewModels.$Cy);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("DateRangeGlobalFilterChildViewModel",
            Microsoft.Crm.Client.Core.ViewModels.$Cz);
        Microsoft.Crm.Client.Core.ViewModels.$A.get_$5().$R("TagFilterViewModel",
            Microsoft.Crm.Client.Core.ViewModels.TagFilterViewModel);
        n.$R("QueueContainerViewModel", Microsoft.Crm.Client.Core.ViewModels.QueueContainerViewModel);
        n.$R("QueuePanelViewModel", Microsoft.Crm.Client.Core.ViewModels.QueuePanelViewModel);
        n.$R("QueueItemViewModel", Microsoft.Crm.Client.Core.ViewModels.QueueItemViewModel);
        n.$R("CardFormViewModel", Microsoft.Crm.Client.Core.ViewModels.CardFormViewModel);
        n.$R("ImageButtonWrapperViewModel", Microsoft.Crm.Client.Core.ViewModels.$Ds);
        n.$R("FilterGraphViewModel", Microsoft.Crm.Client.Core.ViewModels.$AI);
        n.$R("GlobalFilterViewModel", Microsoft.Crm.Client.Core.ViewModels.$DZ);
        n.$R("ColumnLayoutViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cm);
        n.$R("GridCellLayoutViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Da);
        n.$R("TabLayoutViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$F5);
        n.$R("BaseLayoutViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cf);
        n.$R("AppliedFiltersViewModel", Microsoft.Crm.Client.Core.ViewModels.$9R);
        n.$R("DashboardPickerViewModel", Microsoft.Crm.Client.Core.ViewModels.$Cx);
        n.$R("InteractionCentricApplicationShellViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricApplicationShellViewModel);
        n.$R("HierarchicalSubjectViewModel", Microsoft.Crm.Client.Core.ViewModels.$AO);
        n.$R("DateViewModel", Microsoft.Crm.Client.Core.ViewModels.$A2);
        n.$R("DurationViewModel", Microsoft.Crm.Client.Core.ViewModels.$A7);
        n.$R("RangeSliderViewModel", Microsoft.Crm.Client.Core.ViewModels.$En);
        n.$R("GlobalFilterPartyListLookupViewModel", Microsoft.Crm.Client.Core.ViewModels.$DY);
        n.$R("GlobalFilterEditModeSectionViewModel", Microsoft.Crm.Client.Core.ViewModels.$DX);
        n.$R("GlobalFilterPartyListViewModel", Microsoft.Crm.Client.Core.ViewModels.$7P);
        n.$R("InteractionCentricCommunicationCardViewModel",
            Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.CommunicationCard.$Al);
        n.$R("NavBarAssociatedViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarAssociatedViewModel);
        n.$R("MultiSessionTabContainerViewModel",
            Microsoft.Crm.Client.Core.ViewModels.MultiSessionTabContainerViewModel);
        n.$R("ReferencePanelViewModel", Microsoft.Crm.Client.Core.ViewModels.$Bk);
        n.$R("NavBarAreaViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarAreaViewModel);
        n.$R("NavBarGroupViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarGroupViewModel);
        n.$R("NavBarSubAreaViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarSubAreaViewModel);
        n.$R("NavBarSearchViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarSearchViewModel);
        n.$R("NavBarUserInfoViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarUserInfoViewModel);
        n.$R("NavBarMruViewModel", Microsoft.Crm.Client.Core.ViewModels.NavBarMruViewModel);
        n.$R("NavBarQuickCreateViewModel", Microsoft.Crm.Client.Core.ViewModels.$EU);
        n.$R("NavBarSettingsViewModel", Microsoft.Crm.Client.Core.ViewModels.$EV);
        n.$R("RichEditorViewModel", Microsoft.Crm.Client.Core.ViewModels.RichEditorViewModel);
        n.$R("InteractionCentricGridViewModel", Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridViewModel);
        n.$R("AssociatedGridViewModel", Microsoft.Crm.Client.Core.ViewModels.AssociatedGridViewModel);
        n.$R("DropdownForGridViewModel", Microsoft.Crm.Client.Core.ViewModels.DropdownForGridViewModel);
        n.$R("GridFlyoutViewModel", Microsoft.Crm.Client.Core.ViewModels.GridFlyoutViewModel);
        n.$R("ComponentSwitcherViewModel", Microsoft.Crm.Client.Core.ViewModels.Controls.InteractionCentric.$Cp);
        n.$R("QuickViewFormViewModel", Microsoft.Crm.Client.Core.ViewModels.QuickViewFormViewModel);
        n.$R("RefreshControlViewModel", Microsoft.Crm.Client.Core.ViewModels.$Ep);
        n.$R("CollapseVisualFilterButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.$Cl);
        n.$R("InteractionCentricFormFooterViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormFooterViewModel);
        n.$R("KbSearchControlViewModel", Microsoft.Crm.Client.Core.ViewModels.$7T);
        n.$R("InteractionCentricFormBodyViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricFormBodyViewModel);
        n.$R("QuickActionViewModel", Microsoft.Crm.Client.Core.ViewModels.$Bg);
        n.$R("QuickActionButtonViewModel", Microsoft.Crm.Client.Core.ViewModels.$Bf);
        n.$R("EmailAttachmentViewModel", Microsoft.Crm.Client.Core.ViewModels.EmailAttachmentViewModel);
        n.$R("FilterBarViewModel", Microsoft.Crm.Client.Core.ViewModels.$DQ);
        n.$R("ICTimerControlViewModel", Microsoft.Crm.Client.Core.ViewModels.$7R);
        n.$R("InteractionCentricPartyListViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListViewModel);
        n.$R("InteractionCentricPartyListLookupViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricPartyListLookupViewModel);
        n.$R("InteractionCentricLookupListViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricLookupListViewModel);
        n.$R("HybridGridControlViewModel", Microsoft.Crm.Client.Core.ViewModels.$Dc);
        n.$R("ViewIdDisplayViewModel", Microsoft.Crm.Client.Core.ViewModels.$FJ);
        n.$R("InteractionCentricGridControlViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel);
        n.$R("InteractionCentricGridControlHeaderViewModel",
            Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridHeaderControlViewModel);
        n.$R("HierarchicalSubjectViewModel", Microsoft.Crm.Client.Core.ViewModels.$AO);
        n.$R("PagedListValidateViewModel", Microsoft.Crm.Client.Core.ViewModels.$Ed);
        Microsoft.Crm.Client.Application.App.Features.$6W.$3Jp(n);
        Microsoft.Crm.Client.Application.App.Features.$6W.$CP(n);
        Microsoft.Crm.Client.Application.App.Features.$6W.$1Zl(n)
    }
};
Microsoft.Crm.Client.Application.App.Features.$El = function() {
    Microsoft.Crm.Client.Application.App.Features.$El.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$El.prototype = {
    $Wy: function() {
        var n = Microsoft.Crm.Client.Core.ViewModels.$A.get_$5(),
            t = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance(),
            f = this,
            i = function() {
                var r = new Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8, n = {};
                n.DataSource = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3;
                n.ModelFactory = r;
                var i = new Microsoft.Crm.Client.Core.ViewModels.SwitchProcessListViewModel,
                    u = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                        .QueryDescriptor("RetrieveSwitchProcessListData", n),
                    f = new Microsoft.Crm.Client.Core.ViewModels.$M(i, u);
                return i.$15M(f), new Microsoft.Crm.Client.Core.ViewModels.SwitchProcessDialogViewModel(t, i)
            },
            e = this,
            r = function(n) {
                var t = n;
                t.$13e()
            },
            o = this,
            u = function(n) {
                var t = n;
                t.$Ne()
            };
        n.$CP(Microsoft.Crm.Client.Core.ViewModels.SwitchProcessDialogViewModel.getName(), i, r, u);
        n.$R(Microsoft.Crm.Client.Core.ViewModels.SwitchProcessListViewModel.getName(),
            Microsoft.Crm.Client.Core.ViewModels.SwitchProcessListViewModel)
    }
};
Microsoft.Crm.Client.Application.App.Features.$F8 = function() {
    this.$$d_$3Cz = Function.createDelegate(this, this.$3Cz);
    this.$$d_$3CS = Function.createDelegate(this, this.$3CS);
    this.$$d_$2Op = Function.createDelegate(this, this.$2Op);
    this.$$d_$2P0 = Function.createDelegate(this, this.$2P0);
    this.$$d_$3L6 = Function.createDelegate(this, this.$3L6);
    this.$$d_$1hV = Function.createDelegate(this, this.$1hV);
    Microsoft.Crm.Client.Application.App.Features.$F8.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$F8.prototype = {
    get_$3LI: function() { return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() },
    get_$1XA: function() { return"MobileClientTelemetry" },
    $Wy: function() { Microsoft.Crm.Client.Application.App.Features.$32.prototype.$Wy.call(this) },
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        Microsoft.Crm.Client.Core.Framework.Trace.$1Mn(this.$$d_$1hV);
        Microsoft.Crm.Client.Core.Framework.$3B.get_$5().add_$2PP(this.$$d_$3L6);
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M().add_$2NI(this.$$d_$2P0);
        Microsoft.Crm.Client.Application.App.StartPage.set_$36F(this.$$d_$2Op);
        Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.set_$2cj(this.$$d_$3CS);
        Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().add_$2lG(this.$$d_$3Cz)
    },
    $3Cz: function(n, t) {
        var i = t;
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
            .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RU(i.$I, i.$1la))
    },
    $2P0: function(n, t) {
        var i = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RW("Metadata_Sync_Complete");
        i.$2cB(t.$1tp, t.$1xk);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(i)
    },
    $2Op: function() {
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
            .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$RQ)
    },
    $3CS: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
            .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$OB(n, t, i))
    },
    $1hV: function(n, t, i) {
        if (t <= 2) {
            var r = i.get_$zP(),
                u = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                    .$P6(r.$b("s"), r.$b("l"), r.get_$WH(), r.$b("st"), r.$b("em"), r.$b("est"), r.$b("ci"));
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(u)
        }
    },
    $3L6: function(n) {
        var t = n(), i = null, u;
        try {
            i = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K()
        } catch (r) {
            Microsoft.Crm.Client.Core.Framework.Trace.logException(1004, r, r.message)
        }
        u = new Microsoft.Crm.Client.Core.Framework.TelemetryCore.$P5(t.$Q7, t.$Q8, t.$QZ, t.$C8, t.$vv, t.$qt, i);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$aN(u)
    }
};
Microsoft.Crm.Client.Application.App.Features.$EO = function() {
    Microsoft.Crm.Client.Application.App.Features.$EO.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$EO.prototype = {
    $fG: !1,
    get_$3LI: function() { return!0 },
    get_$1XA: function() { return"MobileClientOfflineAutoOptin" },
    get_$11q: function() { return this.$fG },
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        this.$fG = !0;
        (Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
                Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
                Microsoft.Crm.Client.Core.Framework.$6.$w) &&
            (this.$fG = !1)
    }
};
Microsoft.Crm.Client.Application.App.Features.$EQ = function() {
    Microsoft.Crm.Client.Application.App.Features.$EQ.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$EQ.prototype = {
    $tP: !1,
    get_$3LI: function() { return!0 },
    get_$1XA: function() { return"MobileClientOffline" },
    get_$1s4: function() { return this.$tP },
    $2Qf: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$2Qf.call(this);
        this.$tP = !0;
        (Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
                Microsoft.Crm.Client.Core.Framework.$6.get_$5O() ||
                Microsoft.Crm.Client.Core.Framework.$6.$w) &&
            (this.$tP = !1)
    }
};
Microsoft.Crm.Client.Application.App.Features.$ER = function() {
    Microsoft.Crm.Client.Application.App.Features.$ER.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$ER.prototype = {
    $17: function() {
        Microsoft.Crm.Client.Application.App.Features.$32.prototype.$17.call(this);
        Microsoft.Crm.Client.Core.ViewModels.Controls.$3I.get_instance().IsEnabled = !0
    }
};
Microsoft.Crm.Client.Application.App.Features.$Dx = function() {
    Microsoft.Crm.Client.Application.App.Features.$Dx.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Dx
    .prototype = {
        get_$CG: function() {
            return Microsoft.Crm.Client.Application.App.Features.$32.prototype.get_$CG.call(this) &&
                Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        },
        set_$CG: function(n) {
            return Microsoft.Crm.Client.Application.App.Features.$32.prototype.set_$CG.call(this, n), n
        }
    };
Microsoft.Crm.Client.Application.App.Features.$Em = function() {
    Microsoft.Crm.Client.Application.App.Features.$Em.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$EY = function() {
    Microsoft.Crm.Client.Application.App.Features.$EY.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.Features.$Ey = function() {
    Microsoft.Crm.Client.Application.App.Features.$Ey.initializeBase(this)
};
Type.registerNamespace("Microsoft.Crm.Client.Application.App.ClientQualitySubscribers");
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h = function() {
    Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.resolveInheritance();
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.initializeBase(this)
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
    .$$cctor = function() {
        Microsoft.Crm.Client.Application.App.$1v.$3Jo(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
            .get_$5())
    };
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
    .get_$5 = function() {
        return $0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$D) &&
        (Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$D = new Microsoft.Crm.Client.Application
            .App.ClientQualitySubscribers.$2h), Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$D
    };
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.set_$2cj = function(n) {
    if ($0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
        .$193)) return Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$193 = n, n;
    throw Error.invalidOperation("App crash listener delegate already bound");
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.prototype = {
    $ZY: !1,
    $d1: !1,
    $1tc: !1,
    $1P2: !1,
    get_$1jx: function() { return this.$d1 },
    set_$1jx: function(n) {
        return n !== this.$d1 &&
        (this.$d1 = n, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("CrashDetectionEnabled", { CrashDetectionEnabled: this.$d1 }), Microsoft.Crm.Client.Application.App.$1v
            .$2Yy(this)), n
    },
    get_$1td: function() { return this.$ZY },
    set_$1td: function(n) {
        return this.$ZY !== n &&
        (this.$ZY = n, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("MashupsDisabled", { MashupsDisabled: this.$ZY }), this.$AC("MashupEnabledUpdate", null)), n
    },
    get_$27j: function() { return this.$1P2 },
    $2Yx: function() { Microsoft.Crm.Client.Application.App.$1v.$2Yy(this) },
    add_$2N3: function(n) { this.$2F("MashupEnabledUpdate", n) },
    remove_$2N3: function(n) { this.$4I("MashupEnabledUpdate", n) },
    $37q: function() { return!this.$ZY },
    $3Jk: function() {
        this.$1tc ||
        (this.$1tc = !0, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("MashupEncountered", { MashupEncountered: !0 }))
    },
    get_$GB: function() { return this.$d1 && Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_$1tb() },
    $17: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t, i;
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_$1tb()
            ? (t = this, i = this, Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper
                .when(this.$35U(), this.$35i())
                .then(function() { n.resolve(null) },
                    function(t) {
                        Microsoft.Crm.Client.Core.Framework.$C.$1d("MashupManager_Initialize",
                            1004,
                            "Error initializing MashupManager: " + t.$E);
                        n.reject(t)
                    }))
            : (this.$2Yx(), n.resolve()), n.promise()
    },
    $2JK: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t, i;
        return this.$ZY
            ? n.resolve(null)
            : (t = this, i = this, Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("MashupEncountered")
                .then(function(i) {
                        var r = !$0.$1(i) && "MashupEncountered" in i && i.MashupEncountered;
                        r
                            ? Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("MemoryCrashCount").then(function(i) {
                                    var u = !$0.$1(i) && "MemoryCrashCount" in i ? i.MemoryCrashCount + 1 : 1, f;
                                    $0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$193) ||
                                        Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
                                        .$193(t.$ZY, r, u);
                                    f = function() {
                                        Microsoft.Crm.Client.Core.Framework.$h.get_$5()
                                            .$R7("MemoryCrashCount", { MemoryCrashCount: u });
                                        Microsoft.Crm.Client.Core.Framework.$h.get_$5()
                                            .$R7("MashupEncountered", { MashupEncountered: !1 });
                                        n.resolve(null)
                                    };
                                    u >= 2 ? (t.$3S6(), f()) : (t.$1ud(), f())
                                },
                                function(t) {
                                    Microsoft.Crm.Client.Core.Framework.$C
                                        .$1d("MashupManager_HandlePreviousMemoryCrash",
                                            1004,
                                            "Error retrieving Session State Memory Crash Count" + t.$E);
                                    n.resolve(null)
                                })
                            : (Microsoft.Crm.Client.Core.Framework.$h.get_$5()
                                .$R7("MemoryCrashCount", { MemoryCrashCount: 0 }), n.resolve(null))
                    },
                    function(t) {
                        Microsoft.Crm.Client.Core.Framework.$C
                            .$1d("MashupManager_HandlePreviousMemoryCrash",
                                1004,
                                "Error retrieving Session State Mashup Encountered" + t.$E);
                        n.resolve(null)
                    })), n.promise()
    },
    $2JJ: function() {
        this.$1ud();
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
        return n.resolve(), Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("MemoryCrashCount", { MemoryCrashCount: 0 }), Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("MashupEncountered", { MashupEncountered: !1 }), n.promise()
    },
    $35U: function() {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            n = this,
            i = this;
        return Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("CrashDetectionEnabled").then(function(i) {
                n.$d1 = !$0.$1(i) && "CrashDetectionEnabled" in i ? i.CrashDetectionEnabled : !0;
                n.$d1 || n.$2Yx();
                t.resolve(null)
            },
            function(n) {
                Microsoft.Crm.Client.Core.Framework.$C.$1d("MashupManager_Initialize",
                    1004,
                    "Error retrieving Session State CrashDetectionEnabled: " + n.$E);
                t.reject(n)
            }), t.promise()
    },
    $35i: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            t = this,
            i = this;
        return Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("MashupsDisabled").then(function(i) {
                t.$ZY = !$0.$1(i) && "MashupsDisabled" in i ? i.MashupsDisabled : !1;
                n.resolve(null)
            },
            function(t) {
                Microsoft.Crm.Client.Core.Framework.$C.$1d("MashupManager_Initialize",
                    1004,
                    "Error retrieving Session State MashupsDisabled: " + t.$E);
                n.reject(t)
            }), n.promise()
    },
    $3S6: function() {
        var n = new Microsoft.Crm.Client.Core.ViewModels.AppCrashDetectedViewModel,
            t = this,
            i = function() {
                t.$1P2 = !0;
                t.$1ud()
            },
            r = this,
            u = function() {
                r.set_$1td(n.$1Av);
                r.set_$1jx(!n.$1B3);
                i()
            };
        n.$ET = u;
        n.$KM = i;
        n.Show()
    },
    $1ud: function() {
        this.$1P2 = !0;
        this.$AC("MashupEnabledUpdate", null)
    },
    $AC: function(n, t) {
        var i = this.$5d(n);
        i && i(this, t)
    }
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V = function(n, t) {
    this.$$d_$2mf = Function.createDelegate(this, this.$2mf);
    this.$$d_$2me = Function.createDelegate(this, this.$2me);
    this.$$d_$2Zw = Function.createDelegate(this, this.$2Zw);
    this.$$d_$2Zv = Function.createDelegate(this, this.$2Zv);
    this.$5i = n;
    t && (t.add_$3EI(this.$$d_$2Zv), t.add_$3EJ(this.$$d_$2Zw))
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.get_$5 = function() {
    if ($0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
        .$D))
        throw Error
            .invalidOperation("OfflineManager.Instance cannot be accessed before OfflineManager.Initialize is called.");
    return Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
    .$17 = function(n, t) {
        Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
            .$D = $0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D)
            ? new Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V(n, t)
            : Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D
    };
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$2Wg = function() {
    var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 13);
    n.$J = "syncerror";
    n.$19 = {};
    n.$19.ListDefinitionId = "F1203E8B-6C6A-4210-906E-8428CB1FDE68";
    n.execute();
    n.dispose()
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.prototype = {
    $5i: null,
    $1JP: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().set_$IJ(!0);
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().set_$2LL(!1);
        ($0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu()) ||
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu().$Mv === 1 &&
                !Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu().$RD) &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1Vb(!0);
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H
            .$17(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D.$5i.get_$K());
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$16K();
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1vF(this,
                new Microsoft.Crm.Client.Core.Storage.DataApi
                .$OX(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$IJ()));
        var n = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
            .$O7("1004",
                "MOCADataSyncUserOptedIn",
                "",
                "",
                0,
                "",
                "User Opt-in enabled.",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                (new Date).toString(),
                "",
                0);
        Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(n);
        Microsoft.Crm.Client.Core.Framework.$C.$C("UserOptedIn", 4, "User Opt-in enabled")
    },
    $2O3: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$IJ()
            ? Microsoft.Crm.Client.Core.ViewModels.$Z.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_Offline_Information"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Offline_Information_Message"),
                0)
            : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$YK() > 0
            ? Microsoft.Crm.Client.Core.ViewModels.$Z.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_Draft_Records_Warning"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Draft_Records_Message"),
                1)
            : Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_Offline"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Offline_Message"),
                0,
                this.$$d_$2me,
                null,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Settings_Diagnostics_Label_Enable"),
                null)
    },
    $2O4: function() {
        Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s()
            ? Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$2LL()
            ? Microsoft.Crm.Client.Core.ViewModels.$Z.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_OfflineOptOut_Information"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_OfflineOptOut_Information_Message"),
                0)
            : Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$IJ() &&
            Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_OfflineOptOut"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_OfflineOptOut_Message"),
                0,
                this.$$d_$2mf,
                null,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Settings_Diagnostics_Label_Disable"),
                null)
            : Microsoft.Crm.Client.Core.ViewModels.$Z.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Settings_OfflineOptOut"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Offline_DisableSync_Information_Message"),
                0)
    },
    $2Zv: function() { this.$2O3() },
    $2Zw: function() { this.$2O4() },
    $2me: function() { this.$1JP() },
    $2mf: function() {
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$11v(!0);
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.set_$1EG(!1);
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1vF(this,
                new Microsoft.Crm.Client.Core.Storage.DataApi
                .$OX(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().get_$IJ()));
        Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$f9
            .$2gJ(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D.$5i.get_$K());
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$EO &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$16K()
    },
    $1Th: function(n, t) {
        if (n > 0) {
            var e = this,
                u = function() { Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$2Wg() },
                f = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Sync_Status_Error_Message"),
                r = "",
                i = f;
            $0.$1(t) ||
            (r = Microsoft.Crm.Client.Core.Framework.$3
                .$MD(Microsoft.Crm.Client.Core.Framework.Common.$2
                    .$6("L_Last_Save_To_CRM_Server_Text"),
                    t.toString()), i = i + "\n\n" + r);
            Microsoft.Crm.Client.Core.ViewModels.$1S.$15X(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Sync_Status_Dialog_Title"),
                i,
                0,
                null,
                u,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_OK_Text"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Show_Details_Text"))
        }
    },
    $2T2: function(n) { return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R().$2T2(n) },
    $32h: function() {
        var n = "";
        if (!$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu()))
            switch (Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu().$RD) {
            case 1:
                n = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_OfflineProfile_Not_Available");
                break;
            case 3:
                n = this.$1Vo()
                    ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Metadata_Changed_Text")
                    : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Metadata_Changed");
                break;
            case 2:
                n = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Offline_DB_Not_Available");
                break;
            case-1:
                n = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Sync_Failure");
                break;
            case-2:
                n = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Upgrade_Client")
            }
        return n
    },
    $314: function() { return Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$Zu() },
    $1Vo: function() {
        return $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$f9) ||
            $0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$f9.get_$12y())
            ? !1
            : Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$f9.get_$12y().$1Vo()
    },
    $2H1: function(n) {
        return Xrm.Utility.isEntityOfflineSyncEnabled(n) ? 1 : Xrm.Utility.isEntityOfflineDisabled(n) ? 2 : 0
    },
    $2IY: function() { return new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(["syncerror".toLowerCase()]) }
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U = function() {
    this.$$d_$1uX = Function.createDelegate(this, this.$1uX);
    Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.resolveInheritance();
    this.apcl = this.AddPropertyChangedListener;
    this.rpcl = this.RemovePropertyChangedListener;
    Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.initializeBase(this);
    this.$1XY = this.$$d_$1uX;
    this.$OU = !1
};
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U
    .get_$5 = function() {
        return $0.$1(Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.$D) &&
        (Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.$D = new Microsoft.Crm.Client.Application
            .App.ClientQualitySubscribers.$4U), Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.$D
    };
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.prototype = {
    $OU: !1,
    $1XY: null,
    get_$tT: function() { return this.$OU },
    set_$tT: function(n) {
        return n !== this.$OU &&
        (this.$OU = n, Microsoft.Crm.Client.Core.Framework.$h.get_$5()
            .$R7("PaneStackingEnabledKey", { PaneStackingEnabledKey: this.$OU }), this.$8("IsStackingEnabled")), n
    },
    $1uX: function() {
        this.$362();
        Microsoft.Crm.Client.Application.App.$3w.get_$5().remove_$1uX(this.$1XY)
    },
    $362: function() {
        var n = this, t = this;
        Microsoft.Crm.Client.Core.Framework.$h.get_$5().$LN("PaneStackingEnabledKey")
            .then(function(t) { n.$OU = !$0.$1(t) && "PaneStackingEnabledKey" in t ? t.PaneStackingEnabledKey : !1 },
                function(n) {
                    Microsoft.Crm.Client.Core.Framework.$C
                        .$1d("PaneStackingManager_Initialize",
                            1004,
                            "Error retrieving Session State IsStackingEnabled: " + n.$E)
                })
    }
};
Microsoft.Crm.Client.Core.ViewModels.$Lc.registerClass("Microsoft.Crm.Client.Core.ViewModels.$Lc",
    null,
    Microsoft.Crm.Client.Core.ViewModels.$GQ);
Microsoft.Crm.Client.Application.App.$MJ.registerClass("Microsoft.Crm.Client.Application.App.$MJ");
Microsoft.Crm.Client.Application.App.$MI.registerClass("Microsoft.Crm.Client.Application.App.$MI",
    null,
    Microsoft.Crm.Client.Core.ViewModels.$GZ);
Microsoft.Crm.Client.Application.App.$3w.registerClass("Microsoft.Crm.Client.Application.App.$3w",
    Microsoft.Crm.Client.Core.Framework.$BI);
Microsoft.Crm.Client.Application.App.$1v.registerClass("Microsoft.Crm.Client.Application.App.$1v");
Microsoft.Crm.Client.Application.App.$1n.registerClass("Microsoft.Crm.Client.Application.App.$1n");
Microsoft.Crm.Client.Application.App.$18.registerClass("Microsoft.Crm.Client.Application.App.$18");
Microsoft.Crm.Client.Application.App.$13.registerClass("Microsoft.Crm.Client.Application.App.$13",
    null,
    Microsoft.Crm.Client.Core.Framework.Common.$HL);
Microsoft.Crm.Client.Application.App.$3p.registerClass("Microsoft.Crm.Client.Application.App.$3p",
    Microsoft.Crm.Client.Core.Framework.$BI,
    Microsoft.Crm.Client.Core.Framework.$HG,
    Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Application.App.$6R.registerClass("Microsoft.Crm.Client.Application.App.$6R");
Microsoft.Crm.Client.Application.App.$51.registerClass("Microsoft.Crm.Client.Application.App.$51");
Microsoft.Crm.Client.Application.App.$j.registerClass("Microsoft.Crm.Client.Application.App.$j");
Microsoft.Crm.Client.Application.App.Automation.registerClass("Microsoft.Crm.Client.Application.App.Automation");
Microsoft.Crm.Client.Application.App.$2U.registerClass("Microsoft.Crm.Client.Application.App.$2U");
Microsoft.Crm.Client.Application.App.ShimBackHandler
    .registerClass("Microsoft.Crm.Client.Application.App.ShimBackHandler");
Microsoft.Crm.Client.Application.App.$11.registerClass("Microsoft.Crm.Client.Application.App.$11",
    Microsoft.Crm.Client.Core.Framework.$BI,
    Microsoft.Crm.Client.Core.Framework.$Ax);
Microsoft.Crm.Client.Application.App.$2Q.registerClass("Microsoft.Crm.Client.Application.App.$2Q");
Microsoft.Crm.Client.Application.App.$6f.registerClass("Microsoft.Crm.Client.Application.App.$6f",
    null,
    Microsoft.Crm.Client.Core.Framework.$As);
Microsoft.Crm.Client.Application.App.StartPage.registerClass("Microsoft.Crm.Client.Application.App.StartPage");
Microsoft.Crm.Client.Application.App.$4e.registerClass("Microsoft.Crm.Client.Application.App.$4e",
    null,
    Microsoft.Crm.Client.Core.Framework.$HQ);
Microsoft.Crm.Client.Application.App.$P2.registerClass("Microsoft.Crm.Client.Application.App.$P2",
    Microsoft.Crm.Client.Application.App.$4e);
Microsoft.Crm.Client.Application.App.Components.$7i
    .registerClass("Microsoft.Crm.Client.Application.App.Components.$7i",
        null,
        Microsoft.Crm.Client.Core.Framework
        .$HV);
Microsoft.Crm.Client.Application.App.Components.$6u
    .registerClass("Microsoft.Crm.Client.Application.App.Components.$6u");
Microsoft.Crm.Client.Application.App.Components.$Lm
    .registerClass("Microsoft.Crm.Client.Application.App.Components.$Lm",
        null,
        Microsoft.Crm.Client.Core.Framework
        .$HV);
Microsoft.Crm.Client.Application.App.Components.$4F
    .registerClass("Microsoft.Crm.Client.Application.App.Components.$4F",
        null,
        Microsoft.Crm.Client.Core.Framework
        .$HV);
Microsoft.Crm.Client.Application.App.Features.$32.registerClass("Microsoft.Crm.Client.Application.App.Features.$32");
Microsoft.Crm.Client.Application.App.Features.$Cd
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Cd",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Ce
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Ce",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$D5
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$D5",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$D6
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$D6",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$DC
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$DC",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$DD
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$DD",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$EL
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$EL",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Ee
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Ee",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$EP
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$EP",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Eh
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Eh",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$F7
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$F7",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$FL
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$FL",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Cv
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Cv",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$DH
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$DH",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$DN
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$DN",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$e.registerClass("Microsoft.Crm.Client.Application.App.Features.$e");
Microsoft.Crm.Client.Application.App.Features.FeatureName
    .registerClass("Microsoft.Crm.Client.Application.App.Features.FeatureName");
Microsoft.Crm.Client.Application.App.Features.$7W
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$7W",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$D2
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$D2",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$6W
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$6W",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$El
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$El",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$F8
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$F8",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$EO
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$EO",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$EQ
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$EQ",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$ER
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$ER",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Dx
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Dx",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Em
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Em",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$EY
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$EY",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.Features.$Ey
    .registerClass("Microsoft.Crm.Client.Application.App.Features.$Ey",
        Microsoft.Crm.Client.Application.App.Features.$32);
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h
    .registerClass("Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.$HH,
        Microsoft.Crm.Client.Core.Framework.$He,
        Microsoft.Crm.Client.Application.App.$FU);
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V
    .registerClass("Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V",
        null,
        Microsoft.Crm.Client.Core.Framework.$HI);
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U
    .registerClass("Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U",
        Microsoft.Crm.Client.Core.Framework.$BI,
        Microsoft.Crm.Client.Core.Framework.$Hb,
        Microsoft.Crm.Client.Core.Framework.$He);
Microsoft.Crm.Client.Application.App.$MI.$$cctor();
Microsoft.Crm.Client.Application.App.$3w.$D = null;
Microsoft.Crm.Client.Application.App.$1v.$9Z = !1;
Microsoft.Crm.Client.Application.App.$1v.$U8 = new(Microsoft.Crm.Client.Core.Framework.List$1
    .$$(Microsoft.Crm.Client.Application.App.$FU));
Microsoft.Crm.Client.Application.App.$1n.$1hh = Microsoft.Crm.Client.Application.App.$1n.$2cg;
Microsoft.Crm.Client.Application.App.$1n.$24S = Microsoft.Crm.Client.Application.App.$1n.$2YN;
Microsoft.Crm.Client.Application.App.$1n.$1N1 = Microsoft.Crm.Client.Application.App.$1n.$2ci;
Microsoft.Crm.Client.Application.App.$1n.$24R = Microsoft.Crm.Client.Application.App.$1n.$2cf;
Microsoft.Crm.Client.Application.App.$1n.$1W8 = null;
Microsoft.Crm.Client.Application.App.$18.$1jE = "ClientReady";
Microsoft.Crm.Client.Application.App.$18.$Xw = "AppCacheUpdateCompleted";
Microsoft.Crm.Client.Application.App.$18.$kI = null;
Microsoft.Crm.Client.Application.App.$18.$rA = !1;
Microsoft.Crm.Client.Application.App.$18.$1jF = [
    Microsoft.Crm.Client.Application.App.$18.$1jE, Microsoft.Crm.Client.Application.App.$18.$Xw
];
Microsoft.Crm.Client.Application.App.$18.$19r = new Array(0);
Microsoft.Crm.Client.Application.App.$13.$D = null;
Microsoft.Crm.Client.Application.App.$3p.$D = null;
Microsoft.Crm.Client.Application.App.$51.$D = null;
Microsoft.Crm.Client.Application.App.$j.$2A4 = [0, 2, 3, 4, 5, 6];
Microsoft.Crm.Client.Application.App.$j.$9D = null;
Microsoft.Crm.Client.Application.App.$j.$wH = null;
Microsoft.Crm.Client.Application.App.$j.$22B = [
    "Initializing", "UserEducationHeaderTitle", "UserEducationTip1", "UserEducationTip2", "UserEducationTip3"
];
Microsoft.Crm.Client.Application.App.$j.$2ZC = [
    "SyncProgressIndicator", "UserEducationHeaderTitle_Phone", "StepProgressIndicator",
    "SyncProgressIndicatorTextStep1", "SyncProgressIndicatorTextStep2", "SyncProgressIndicatorTextStep3",
    "SyncProgressIndicatorTextStep4", "SyncProgressIndicatorTextStep5"
];
Microsoft.Crm.Client.Application.App.$j.$1te = 5;
Microsoft.Crm.Client.Application.App.$j.$1AX = 0;
Microsoft.Crm.Client.Application.App.Automation.$1th = 0;
Microsoft.Crm.Client.Application.App.Automation.$mY = 0;
Microsoft.Crm.Client.Application.App.Automation.$mX = null;
Microsoft.Crm.Client.Application.App.ShimBackHandler.$D = null;
Microsoft.Crm.Client.Application.App.$11.$D = null;
Microsoft.Crm.Client.Application.App.$2Q.$2MH = ["1028", "1041", "2052", "3076", "1081", "1042", "1054"];
Microsoft.Crm.Client.Application.App.$2Q.$2AK = ["1028", "1041", "2052", "3076", "1042"];
Microsoft.Crm.Client.Application.App.StartPage.$7u = null;
Microsoft.Crm.Client.Application.App.StartPage.$1Dl = null;
Microsoft.Crm.Client.Application.App.StartPage.$1wr = !1;
Microsoft.Crm.Client.Application.App.StartPage.$2Y4 = [
    "Transfer_Reattempt_Prompt_Title", "Transfer_Reattempt_Prompt_Message", "Transfer_Reattempt_Prompt_Ok",
    "Transfer_Reattempt_Prompt_Cancel"
];
Microsoft.Crm.Client.Application.App.StartPage.$do = !1;
Microsoft.Crm.Client.Application.App.StartPage.$1rP = !0;
Microsoft.Crm.Client.Application.App.StartPage.$1wq = Microsoft.Crm.Client.Application.App.StartPage.$3Ie;
Microsoft.Crm.Client.Application.App.StartPage.$vE = Microsoft.Crm.Client.Application.App.StartPage.$2Sl;
Microsoft.Crm.Client.Application.App.StartPage.$ri = null;
Microsoft.Crm.Client.Application.App.StartPage.$1d3 = 0;
Microsoft.Crm.Client.Application.App.StartPage.$1rh = !1;
Microsoft.Crm.Client.Application.App.StartPage.$tU = !1;
Microsoft.Crm.Client.Application.App.StartPage.$1sJ = !1;
Microsoft.Crm.Client.Application.App.$4e.$D = null;
Microsoft.Crm.Client.Application.App.Features.$e.$D = null;
Microsoft.Crm.Client.Application.App.Features.FeatureName.guidedHelp = "GuidedHelp";
Microsoft.Crm.Client.Application.App.Features.FeatureName.ishGuidedHelp = "ISHGuidedHelp";
Microsoft.Crm.Client.Application.App.Features.FeatureName.marsLegacyClientEnabled = "MarsLegacyClientEnabled";
Microsoft.Crm.Client.Application.App.Features.FeatureName.appModuleForOrganization = "AppModuleForOrganization";
Microsoft.Crm.Client.Application.App.Features.FeatureName.appModuleMOCAForScaleGroup = "AppModuleMOCAForScaleGroup";
Microsoft.Crm.Client.Application.App.Features.FeatureName
    .$1he = [
        "EditableGridControlPbl", "EditableGridControlJsEvents", "MobileClientMashup", "GuidedHelp", "ISHGuidedHelp",
        "AppModuleForOrganization", "AppModuleMOCAForScaleGroup", "MobileClientTelemetry", "CortanaProactiveExperience",
        "CustomControlMobile", "TaskBasedFlow", "ProcessUnification", "ExportToExcelMobile", "ExcelDocumentTemplate",
        "WordDocumentTemplate", "AppLinking", "ISHMetadataOnDemand", "InteractionCentricDashboard",
        "PrivilegeBasedMetadataSync", "MobileClientOffline", "MobileClientOfflineAutoOptin", "MobileClientTheming",
        "KnowledgeArticle", "ServiceCaseTopicAnalysis", "AdvancedSimilaritySearch", "OfficeMailApp",
        "OfficeMailAppMobile", "OfficeMailAppMetadata", "SSSCustomProperty", "ElasticSearch", "SLAV2",
        "InteractionCentricMultiEntityChartsFeature", "DocumentRecommendations", "SSSReliablePromote",
        "ProductRecommendations", "AssociatedGridURLAddressability", "EnableControlMappings",
        "LookupRelationshipFilters", "WebResourceAndIFrameOnISH", "InteractionCentricLookupAutoResolve",
        "QuickFindSearchOnISH", "InteractionCentricEmailLink", "OneDriveIntegration", "SharePointS2S",
        "EmailEngagement", "LandingPage", "DeviceIntegration", "PowerBI", "AutoDataCapture", "FlowIntegration",
        "PaneStackingOnPhones", "MobileClientDeviceIntegration", "ActionCard", "NonBaseActionCard",
        "AuthenticatedMashups", "OfficeMailAppEmailEngagement"
    ];
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$193 = null;
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$D = null;
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2h.$$cctor();
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$2V.$D = null;
Microsoft.Crm.Client.Application.App.ClientQualitySubscribers.$4U.$D = null
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Application.App.js.srcmap