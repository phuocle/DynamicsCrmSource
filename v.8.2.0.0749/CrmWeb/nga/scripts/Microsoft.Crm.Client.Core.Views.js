Type.registerNamespace("Microsoft.Crm.Client.Core.Commands");
Microsoft.Crm.Client.Core.Commands.PinCommand = function(n, t) {
    this.$$d_$3FI = Function.createDelegate(this, this.$3FI);
    this.$$d_$wG = Function.createDelegate(this, this.$wG);
    this.$$d_$2t = Function.createDelegate(this, this.$2t);
    Microsoft.Crm.Client.Core.Commands.PinCommand.initializeBase(this);
    var i = t.InitializationParameters;
    this.set_$2a(this.$$d_$2t);
    this.$Bb = n;
    this.$X = i.TargetViewModel;
    this.$Ig = i.StartScreen
        ? "{D04E4181-ED85-4305-A3DC-3DA59C00F25B}"
        : Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
    this.$1Ds = "IsBoundToScreen" in i && i.IsBoundToScreen;
    this.$1b4 = this.$Bb.$1B;
    this.$21i();
    this.get_CanExecute() &&
    (this.$wG(), Microsoft.Crm.Client.Core.ViewModels.ListComponentViewModel.isInstanceOfType(this.$X) &&
        (this.$13R = this.$$d_$wG, this.$X.add_$12Q(this.$13R)))
};
Microsoft.Crm.Client.Core.Commands.PinCommand.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.CommandFactory.$1a("PinCommand",
        Microsoft.Crm.Client.Core.Commands.PinCommand.$y)
};
Microsoft.Crm.Client.Core.Commands.PinCommand.$1iw = function() {
    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$32O(function(n) {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$X0(new Microsoft.Crm.Client.Core.Framework.Guid("{D04E4181-ED85-4305-A3DC-3DA59C00F25B}"),
                Microsoft.Crm.Client.Core.Commands.PinCommand.get_$e()).done(function(t) {
                for (var h,
                    i,
                    r = new(Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p)),
                    e = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
                    o = {},
                    s = n,
                    l = s.length,
                    u = 0;
                    u < l;
                    ++u) h = s[u], o[h] = null;
                for (var c = t
                             .$E2,
                    a = c.length,
                    f = 0;
                    f < a;
                    ++f) i = c[f], i.$Af.toString() in o || (r.add(i), e.add(i.$Af.toString()));
                r.get_Count() > 0 &&
                (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$kz(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                        .$3F(new Microsoft.Crm.Client.Core.Framework.Guid("{D04E4181-ED85-4305-A3DC-3DA59C00F25B}"),
                            r.toArray()),
                        Microsoft.Crm.Client.Core.Commands.PinCommand.get_$e()), Microsoft.Crm.Client.Core.Framework.PAL
                    .Core.NativeBridge.get_Instance().$UK.$2gB(e.toArray()))
            })
    })
};
Microsoft.Crm.Client.Core.Commands.PinCommand.get_$e = function() {
    return Microsoft.Crm.Client.Core.Framework.$15.$5v("", "PinCommand")
};
Microsoft.Crm.Client.Core.Commands.PinCommand.$y = function(n, t) {
    return new Microsoft.Crm.Client.Core.Commands.PinCommand(n, t)
};
Microsoft.Crm.Client.Core.Commands.PinCommand.$2hW = function(n) {
    var i = window.document.createElement("img"), t, r;
    return i.setAttribute("src", n), t = window.document.createElement("canvas"), t.width = i.getAttribute("width"), t
        .height = i.getAttribute("height"), t.getContext("2d").drawImage(i, 0, 0), r = t.toDataURL("image/png"), r
        .substr(22)
};
Microsoft.Crm.Client.Core.Commands.PinCommand.prototype = {
    $Bb: null,
    $X: null,
    $Ig: null,
    $1Ds: !1,
    $1b4: null,
    $13R: null,
    $2I: null,
    $1dG: null,
    $3FI: function(n, t) { this.$2I === t.$2I && this.$wG() },
    $25X: function() {
        var r = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$Ig), u, h, f, c, i, e, o, s;
        if (!Microsoft.Crm.Client.Core.Framework.$3.$A(this.$X.get_$2W()) &&
            Microsoft.Crm.Client.Core.ViewModels.ListComponentViewModel.isInstanceOfType(this.$X) &&
            (u = this.$X, !$0.$1(u.$g)))
            return Microsoft.Crm.Client.Core.Models.$3S.$B(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$1p(r, this.$X.get_$2W(), new Microsoft.Crm.Client.Core.Framework.Guid(u.$g), 1, u.$9Y));
        if (!$0.$1(this.$X.get_$1N())) return h = this.$X.get_$1N(), Microsoft.Crm.Client.Core.Models.$3S.$V7(r, h.$M);
        if (this.$X
            .$p ===
            1 &&
            (f = this.$X, !$0.$1(f.$g)))
            return c = "IsPowerBIDashboard=" + f.$1EO.toString(), Microsoft.Crm.Client.Core.Models.$3S
                .$B(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .$1p(r, "Workspace".toUpperCase(), new Microsoft.Crm.Client.Core.Framework.Guid(f.$g), 4, c));
        if (this.$X.$p === 50) {
            var l = this.$X.get_Root(), t = l.$BH.powerBIFullScreenComponent, n = {};
            n.externalContextPowerBIUrl = t.$UW;
            n.dashboardId = t.$Xj;
            n.tileId = t.$bi;
            n.reportId = t.$jU;
            n.reportEmbedUrl = t.$q9;
            n.powerBIComponentType = t.$bh;
            i = "";
            e = n;
            for (o in e)
                s = { key: o, value: e[o] }, i += String
                    .format("{0}={1}&", CrmEncodeDecode.CrmUrlEncode(s.key), CrmEncodeDecode.CrmUrlEncode(s.value));
            return i = i.substring(0, i.length - 1), Microsoft.Crm.Client.Core.Models.$3S
                .$B(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .$1p(r,
                        "PowerBIFullScreenPage".toUpperCase(),
                        Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                        5,
                        i))
        }
        return Microsoft.Crm.Client.Core.Framework.Trace
            .logError(1014, "Attempted to pin with unrecognized context."), Error
            .invalidOperation("Attempted to pin with unrecognized context."), null
    },
    $21i: function() {
        var n, t;
        this.$1Ds && this.$Ig !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()
            ? Error.argument("descriptor", "Pin command must have empty ScreenId if it is bound to the pin screen.")
            : !this.$1Ds &&
            Microsoft.Crm.Client.Core.Framework.$3.$A(this.$Ig) &&
            Error.argument("descriptor", "Pin command must have non-empty ScreenId if not bound to the pin screen.");
        n = !$0.$1(this.$X);
        (this.$X.get_$2W() === "opportunityproduct" || this.$X.get_$2W() === "productpricelevel") && (n = !1);
        this.$Ig !== "{D04E4181-ED85-4305-A3DC-3DA59C00F25B}" ||
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$21 ||
            (n = !1);
        this.$X.get_$Dp() && (n = !1);
        Microsoft.Crm.Client.Core.ViewModels.ListComponentViewModel.isInstanceOfType(this.$X) &&
        (t = this.$X, Microsoft.Crm.Client.Core.Framework.$3
            .$A(t.$9Y) ||
            (n = !1), this.$1Ds && (n = !1), !Microsoft.Crm.Client.Core.ViewModels.MultilineListViewModel
            .isInstanceOfType(t) ||
            t.$el ||
            Microsoft.Crm.Client.Core.Framework.$6.get_$4R() ||
            (n = !1));
        this.set_CanExecute(n)
    },
    $wG: function() {
        var t, n, i;
        this.$3P ||
            (t = this.$25X(), $0.$1(t)) ||
            ($0.$1(this.$2I) &&
            (this.$2I = t.get_$2h().get_$4u(), Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
                .$1hQ(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .$1p,
                    this.$2I,
                    this.$$d_$3FI)), this.$Ig === "{D04E4181-ED85-4305-A3DC-3DA59C00F25B}" &&
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$21 &&
                this.$3TQ(1e3), n = this, i = this, t.$26D().then(function(t) {
                    if (!$0.$1(n.$Bb)) {
                        var i = n.$Bb.$Hi;
                        t
                            ? (n.$Bb.set_Label(Microsoft.Crm.Client.Core.Framework.$3
                                    .$MD(Microsoft.Crm.Client.Core.Framework.Common.$2
                                        .$6("L_PinCommand_Unpin_Text"),
                                        n
                                        .$1b4)), i["data-pinned"] = "1",
                                Microsoft.Crm.Client.Core.ViewModels.$8e
                                    .isInstanceOfType(n.$Bb) &&
                                    n.$Bb.set_ImageName("Unpin"))
                            : (n.$Bb.set_Label(Microsoft.Crm.Client.Core.Framework.$3
                                    .$MD(Microsoft.Crm.Client.Core.Framework.Common.$2
                                        .$6("L_PinCommand_Pin_Text"),
                                        n
                                        .$1b4)), i["data-pinned"] = null,
                                Microsoft.Crm.Client.Core.ViewModels.$8e.isInstanceOfType(n.$Bb) &&
                                    n.$Bb.set_ImageName("Pin"));
                        n.$Bb.set_TestabilityAttributes(i)
                    }
                },
                function(n) {
                    Error.create(String.format("PinCommand has failed in UpdateLabelAndIcon:\n\n {0}", n.$E))
                }))
    },
    $3TQ: function(n) {
        var t = new Date;
        (!this.$1dG || t.getTime() - this.$1dG.getTime() > n) &&
            (this.$1dG = new Date, Microsoft.Crm.Client.Core.Commands.PinCommand.$1iw())
    },
    $2t: function() {
        var t = this.$25X(), n = this, i = this;
        t.$26D().then(function(i) {
                if (i)
                    n.$Ig === "{D04E4181-ED85-4305-A3DC-3DA59C00F25B}"
                        ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK
                        .$2lv(t.get_$2h().$Af.toString(),
                            n.$Bb.$uS,
                            n.$Bb.$uT,
                            Number.parseInvariant(n.$Bb.$IG.toString()),
                            Number.parseInvariant(n.$Bb.$Fu.toString()),
                            function(i) { i && (n.$ze(t.get_$2h()), window.document.body.focus()) })
                        : n.$ze(t.get_$2h());
                else if (n.$Ig === "{D04E4181-ED85-4305-A3DC-3DA59C00F25B}") {
                    var e = { forcerefresh: !0, pinnedtilemodel: t },
                        f = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                            .QueryDescriptor("PopulateTileData", e),
                        r,
                        u;
                    Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$tX
                        ? (r = window
                            .innerWidth /
                            2 -
                            Number.parseInvariant(n.$Bb.$Fu.toString()) / 2, u = window.innerHeight / 2)
                        : (r = n.$Bb.$uS, u = n.$Bb.$uT);
                    f.OnSuccess = function() {
                        var f = new Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY,
                            i = f.$28z(t),
                            e = n.$3U7("CRM " + i.get_LeftCornerText());
                        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK.$2kb(t.get_$2h()
                            .$Af
                            .toString(),
                            n.$2eP(t.get_$2h()),
                            e,
                            i.get_$KJ(),
                            r,
                            u,
                            Number.parseInvariant(n.$Bb.$IG.toString()),
                            Number.parseInvariant(n.$Bb.$Fu.toString()),
                            function(r, u) {
                                if (r) {
                                    n.$2Tz(t.get_$2h());
                                    var f = Microsoft.Crm.Client.Core.Commands.PinCommand.$2hW(i.get_$1U2());
                                    Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$UK
                                        .$3OO(t.get_$2h().$Af.toString(),
                                            i.get_$3Sd(),
                                            i.get_$3Se(),
                                            i.get_$1Jp(),
                                            i.get_$3X3(),
                                            f,
                                            u.length ? "name" : "none");
                                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                                        .get_$19u()
                                        .collapse()
                                }
                            })
                    };
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                        .$2T("ActionProvider", n.$X, f)
                } else n.$2Tz(t.get_$2h())
            },
            function(n) { Error.create(String.format("PinCommand has failed in OnExecute:\n\n {0}", n.$E)) })
    },
    $3U7: function(n) {
        return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().$n0 &&
            n.length > 15 &&
            (n = n.substr(0, 14) + "…"), n
    },
    $2Tz: function(n) {
        var t = this, i = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ka(n).then(function() {
                Microsoft.Crm.Client.Core.Framework.$C
                    .$1d("PinCommand_OnExecute_CreateTile_Success", 1014, n.get_$4u());
                t.$wG();
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$X0(n.$GZ, Microsoft.Crm.Client.Core.Commands.PinCommand.get_$e())
            },
            function(n) { Error.create(String.format("PinCommand has failed in CreatePinnedTile:\n\n {0}", n.$E)) })
    },
    $ze: function(n) {
        var t = this, i = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$ky(n).then(function() {
                Microsoft.Crm.Client.Core.Framework.$C
                    .$1d("PinCommand_OnExecute_DeleteTile_Success", 1014, n.get_$4u());
                t.$wG();
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$X0(n.$GZ, Microsoft.Crm.Client.Core.Commands.PinCommand.get_$e())
            },
            function(n) { Error.create(String.format("PinCommand has failed in DeletePinnedTile:\n\n {0}", n.$E)) })
    },
    $2eP: function(n) {
        var t;
        switch (n.$AJ) {
        case 1:
            t = "entitylist";
            break;
        case 4:
            t = "dashboard";
            break;
        default:
            t = "entityrecord"
        }
        return Microsoft.Crm.Client.Core.Framework.$3.$MD("{0}={1}&{2}={3}&{4}={5}",
            "navetn",
            CrmEncodeDecode.CrmUrlEncode(n.$82),
            "navid",
            CrmEncodeDecode.CrmUrlEncode(n.$Af.toString()),
            "navpagetype",
            CrmEncodeDecode.CrmUrlEncode(t))
    },
    $GN: function() {
        $0.$1(this.$13R) || $0.$1(this.$X) || (this.$X.remove_$12Q(this.$13R), this.$13R = null);
        this.$X = null;
        this.$Bb = null;
        $0.$1(this.$2I) ||
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1xe(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p, this.$2I, this.$$d_$3FI);
        Microsoft.Crm.Client.Core.Framework.Binding.$3Z.prototype.$GN.call(this)
    }
};
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand = function() {
    this.$$d_$2t = Function.createDelegate(this, this.$2t);
    Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand.initializeBase(this);
    this.set_$2a(this.$$d_$2t)
};
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.CommandFactory
            .$1a("ShowPerformanceCommand", Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand.$y)
    };
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand
    .$y = function() { return new Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand };
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand
    .prototype = {
        $2t: function() { Microsoft.Crm.Client.Core.ViewModels.PerformanceReport.TogglePerformanceResultsVisibility() }
    };
Microsoft.Crm.Client.Core.Commands.PinCommand.registerClass("Microsoft.Crm.Client.Core.Commands.PinCommand",
    Microsoft.Crm.Client.Core.Framework.Binding.$3Z);
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand
    .registerClass("Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand",
        Microsoft.Crm.Client.Core.Framework.Binding.$3Z);
Microsoft.Crm.Client.Core.Commands.PinCommand.$$cctor();
Microsoft.Crm.Client.Core.Commands.ShowPerformanceCommand.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.Views.js.srcmap