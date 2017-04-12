Type.registerNamespace("Microsoft.Crm.Client.Application.PhoneApp");
Microsoft.Crm.Client.Application.PhoneApp.GetPhotoFromGalleryError = function() {};
Microsoft.Crm.Client.Application.PhoneApp.GetPhotoFromGalleryError
    .prototype = { galleryNotAvailable: 0, genericError: 1, fileSizeBreached: 2, userCanceled: 3 };
Microsoft.Crm.Client.Application.PhoneApp.GetPhotoFromGalleryError
    .registerEnum("Microsoft.Crm.Client.Application.PhoneApp.GetPhotoFromGalleryError", !1);
Microsoft.Crm.Client.Application.PhoneApp.StartPage = function() {
    this.$$d_$1xD = Function.createDelegate(this, this.$1xD);
    this.$$d_$2P4 = Function.createDelegate(this, this.$2P4);
    this.$$d_$2P5 = Function.createDelegate(this, this.$2P5);
    this.$$d_$2Sl = Function.createDelegate(this, this.$2Sl);
    this.$$d_$2Na = Function.createDelegate(this, this.$2Na);
    this.$$d_$3Bi = Function.createDelegate(this, this.$3Bi);
    this.$1vC = this.$$d_$3Bi;
    this.$1vD = this.$$d_$2Na;
    this.$vE = this.$$d_$2Sl;
    this.$do = !1
};
Microsoft.Crm.Client.Application.PhoneApp.StartPage
    .get_instance = function() { return Microsoft.Crm.Client.Application.PhoneApp.StartPage.$D };
Microsoft.Crm.Client.Application.PhoneApp.StartPage.prototype = {
    $1vC: null,
    $1vD: null,
    $vE: null,
    $do: !1,
    $c9: !1,
    $1jC: !1,
    $rA: !1,
    get_palEnabled: function() { return Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() },
    get_hideCommandBar: function() {
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33().get_$34z()
    },
    addNativeBridgeOnReadyOrNow: function(n) {
        this.get_palEnabled() && Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().add_$1Fc(n)
    },
    getPhotoFromGallery: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$TW.get_$2NX(), u, f;
        if (!r.get_$2D9()) {
            i(0);
            return
        }
        u = this;
        f = this;
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$TW.$2I7(!1,
            n,
            function(n) {
                window.setTimeout(function() {
                        var i = {};
                        i.FileName = n.get_$JE();
                        i.FileContents = n.get_$JD();
                        i.MimeType = n.get_$MW();
                        t(i)
                    },
                    0)
            },
            function(n) {
                window.setTimeout(function() {
                        var f = "MultimediaDispatcherErrorDomain",
                            e = "ImagePickerControllerError",
                            t = n[Microsoft.Crm.Client.Core.Framework.ErrorConverter.$1BN],
                            r,
                            u;
                        if (t.startsWith(f)) r = t.substr(f.length);
                        else if (t.startsWith(e)) r = t.substr(e.length);
                        else {
                            i(1);
                            return
                        }
                        u = Number.parseInvariant(r);
                        u === 1 ? i(3) : i(u === 5 ? 2 : 1)
                    },
                    0)
            })
    },
    saveAttachment: function(n, t, i, r, u, f) {
        var e = new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$2H, o;
        e.set_$JD(n);
        e.set_$JE(t);
        e.set_$MW(i);
        e.set_$vr(r);
        o = this;
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$VD.$1Hd(e,
            function(n) {
                e.set_$kl(n);
                u(e)
            },
            f)
    },
    openAttachment: function(n, t) {
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$6m
            .$1Fh(n.get_$kl(), n.get_$JE(), n.get_$MW(), t)
    },
    setCommandBar: function(n, t, i) {
        this.get_palEnabled() &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().$3QY(n, t, i)
    },
    setMasthead: function(n) {
        this.get_palEnabled() &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().setMasthead(n)
    },
    setServerVersion: function(n, t) {
        var i, r;
        this.get_palEnabled() &&
        (i = {}, i.serverversion = n, i
            .databaseversion = t, this
            .$rA ||
            (r = this, window.setTimeout(function() { r.setServerVersion(n, t) }, 10)), Microsoft.Crm.Client.Core
            .Framework.PAL.Core.NativeBridge.get_Instance()
            .$3K(Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T,
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_$2N().get_$3A(),
                new Microsoft.Crm.Client.Core.Framework.PAL.Dispatchers.$5c(i)))
    },
    signOut: function() {
        this.get_palEnabled() && Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$20G()
    },
    bootstrap: function(n) { this.get_palEnabled() && this.$25M(n, !0, !1) },
    start: function(n) {
        var t = window.applicationCache, i, r, u, f, o, e;
        if (!$0.$1(t)) {
            this.$c9 = !0;
            i = this;
            t.onupdateready = function(n) {
                i.$to(n);
                i.$c9 = !1;
                t.status === 4
                    ? (Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache: SwapCache"), t.swapCache(), i
                        .$w6(1, Microsoft.Crm.Client.Core.Framework.$4.$h("Appcache updated").$T7(), 0))
                    : i.$w7()
            };
            r = this;
            t.onerror = function(n) {
                r.$to(n);
                r.$c9 = !1;
                r.$w7()
            };
            u = this;
            t.onnoupdate = function(n) {
                u.$to(n);
                u.$c9 = !1;
                u.$w7()
            };
            f = this;
            t.oncached = function(n) {
                f.$to(n);
                f.$c9 = !1;
                f.$w7()
            };
            try {
                Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache: Start Update");
                t.update()
            } catch (s) {
                Microsoft.Crm.Client.Core.Framework.Trace.logInfo(5, "AppCache: Update threw exception");
                this.$c9 = !1;
                this.$w7()
            }
        }
        o = this.$30b(n);
        e = "liveid" in o;
        this.get_palEnabled()
            ? this.$25M(n, e, !0)
            : e
            ? Microsoft.Crm.Client.Core.Framework.Trace.logError(97, "Unsupported client server configuration")
            : this.$1xD()
    },
    $to: function(n) {
        var t = "ApplicationCacheObjectWasNull", i = window.applicationCache;
        if (!$0.$1(i))
            switch (i.status) {
            case 2:
                t = "Checking";
                break;
            case 3:
                t = "Downloading";
                break;
            case 1:
                t = "Idle";
                break;
            case 5:
                t = "Obsolete";
                break;
            case 0:
                t = "Uncached";
                break;
            case 4:
                t = "UpdateReady"
            }
        try {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(5,
                    String.format("AppCache Event {0}. Status : {1}. Details : {2}", n.type, t, JSON.stringify(n)))
        } catch (r) {
        }
    },
    $25M: function(n, t, i) {
        Microsoft.Crm.Client.Core.Framework.Trace.set_$CG(!1);
        Microsoft.Crm.Client.Core.Framework.$1F.set_$1l9(0);
        Microsoft.Crm.Client.Core.Framework.$1c.set_$2Kv(!1);
        Microsoft.Crm.Client.Core.Framework.AuthenticationManager
            .set_defaultInstance(Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$T6(n, t, i));
        this.addNativeBridgeOnReadyOrNow(i ? this.$1vC : this.$1vD)
    },
    $30b: function(n) {
        var f = Microsoft.Crm.Client.Core.Framework.Utils.$1B.$Dx(n), r = {}, u = f, t, i;
        for (t in u) i = { key: t, value: u[t] }, r[i.key.toLowerCase()] = i.value.toLowerCase();
        return r
    },
    $3Bi: function() {
        var n, t;
        if (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_$2N().get_$2ZV() === 1) {
            n = Microsoft.Crm.Client.Core.Framework.$4.$h("");
            n.$10 = -2147094014;
            this.$w6(0, n.$T7(), 0);
            return
        }
        t = this;
        Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.add_$Tc(function(n, i) {
            var r = i, u;
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159, "StartPage OnAuthenticated: FirstPageLoad. Arguments: " + JSON.stringify(r));
            u = n;
            r.$L1 || u.get_$Fq() !== 1
                ? Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159,
                    "StartPage OnAuthenticated: FirstPageLoad. Could not redirect because IsError is true OR AuthManager.Status is != Ready")
                : t.$1xD()
        });
        this.$2Na()
    },
    $2Na: function() {
        var t = this, n;
        Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.add_$Tc(function(n, i) {
            var r = i, u;
            Microsoft.Crm.Client.Core.Framework.Trace
                .logInfo(159, "StartPage OnAuthenticated: SubsequentPageLoad. Arguments: " + JSON.stringify(r));
            u = n;
            r.$L1
                ? t.$w6(0, r.$Sh.$T7(), r.$Sh.$NA)
                : u.get_$Fq() === 1 &&
                Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$26j()
        });
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().add_$2PM(this.$$d_$2P5);
        Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().add_$2PA(this.$$d_$2P4);
        Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.$1i2();
        n = this;
        window.setTimeout(function() {
                n.$1jC = !0;
                n.$w7()
            },
            0)
    },
    $2P5: function() {
        this.$do &&
        (Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.$1bu(), Microsoft.Crm.Client.Core.Framework
            .AuthenticationManager.$D.add_$Tc(this.$vE))
    },
    $2Sl: function() {
        Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.remove_$Tc(this.$vE);
        this.$do = !1
    },
    $2P4: function() { this.$do = !0 },
    $w7: function() {
        this.$1jC &&
            !this.$c9 &&
            (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1OW(null), this.$rA = !0)
    },
    $w6: function(n, t, i) {
        i === 1
            ? Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$19F(n, t)
            : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.$19q(n, t)
    },
    $1xD: function() {
        var n, t, i;
        if (this.$c9) {
            Microsoft.Crm.Client.Core.Framework.Trace
                .logWarning(5, "Delaying RedirectToDefault since the AppCache update is still pending");
            window.setTimeout(this.$$d_$1xD, 100);
            return
        }
        n = Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.$65;
        t = n + "/m/default.aspx?client_type=MobileClient&HideMasthead=true";
        Microsoft.Crm.Client.Core.Framework.Trace.logInfo(159, "Do RedirectToDefaultPage");
        i = this;
        window.setTimeout(function() { window.location.replace(t) }, 100)
    }
};
Microsoft.Crm.Client.Application.PhoneApp.StartPage
    .registerClass("Microsoft.Crm.Client.Application.PhoneApp.StartPage");
Microsoft.Crm.Client.Application.PhoneApp.StartPage.$D = new Microsoft.Crm.Client.Application.PhoneApp.StartPage
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Application.PhoneApp.js.srcmap