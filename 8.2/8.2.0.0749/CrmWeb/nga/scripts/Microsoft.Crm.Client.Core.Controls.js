Type.registerNamespace("Microsoft.Crm.Client.Core.Controls");
Microsoft.Crm.Client.Core.Controls.TabPriority = function() {};
Microsoft.Crm.Client.Core.Controls.$MK = function() {
    this.viewManager = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.Framework.$4J);
    this.userAgent = Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance();
    this.memoryUsageTracker = Microsoft.Crm.Client.Core.ViewModels.$1P.get_$5();
    this.device = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device();
    this.navigation = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39;
    this.theming = Microsoft.Crm.Client.Core.ViewModels.Controls.$3I.get_instance();
    this.applicationShellViewModel = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance();
    this.childControlTypeNameResolver = Microsoft.Crm.Client.Core.ViewModels.$4n.$1H0;
    this.getLocalizedString = Microsoft.Crm.Client.Core.Framework.Common.$2.$6;
    this.getTextBoxTypeString = Microsoft.Crm.Client.Core.ViewModels.$4I.getTextBoxTypeString;
    this.focusField = Microsoft.Crm.Client.Core.Framework.$1t.$2qd;
    this.interceptBlurringEvents = Microsoft.Crm.Client.Core.Framework.$1t.$36T;
    this.scrollBarWidth = Microsoft.Crm.Client.Core.Framework.$1t.get_ScrollBarWidth();
    this.navigationDispatcher = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39;
    this.customEventHandlersManager = Microsoft.Crm.Client.Core.ViewModels.$G.get_$5();
    this.getUrlLauncherCommand = Microsoft.Crm.Client.Core.Commands.UrlLauncherCommand.$27y;
    this.isPhone = Microsoft.Crm.Client.Core.Framework.$6.get_$4R();
    this.isInteractionCentric = Microsoft.Crm.Client.Core.Framework.$6.get_$k();
    this.isMailApp = Microsoft.Crm.Client.Core.Framework.$6.get_$5O();
    this.reactBackHandlerHelper = Microsoft.Crm.Client.Core.Controls.$4X.get_$5();
    this.isUserCultureRightToLeft = Microsoft.Crm.Client.Core.Framework.$7A.$1sQ();
    this.isPreview = Microsoft.Crm.Client.Core.Framework.$6.$w;
    this.xrmUIControlsWrapper = Microsoft.Crm.Client.Core.ViewModels.XrmUIControlsWrapper.get_$5();
    this.getPerformanceStopwatch = Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch.$2kk;
    this.isUsingPointerUp = Microsoft.Crm.Client.Core.Framework.$1t.get_$38j();
    this.schedulerCreateOwnerToken = Microsoft.Crm.Client.Core.Framework.Scheduler.$rP;
    var n = new Microsoft.Crm.Client.Core.Controls.$ML;
    this.mapTouchEvents = n.$$d_$3Aq;
    this.simulateMouseEventForLongPress = n.$$d_$3SL;
    this.transitionPropertyName = this.$297("-moz-transition", "-webkit-transition", "transition");
    this.transformPropertyName = this.$297("-moz-transform", "-webkit-transform", "transform")
};
Microsoft.Crm.Client.Core.Controls.$MK.prototype = {
    mapTouchEvents: null,
    simulateMouseEventForLongPress: null,
    transitionPropertyName: null,
    transformPropertyName: null,
    getTranslateValue: function(n, t) {
        return this.userAgent.$5X || this.userAgent.$mn
            ? "translate(" + n.toString() + "px, " + t.toString() + "px)"
            : "translate3D(" + n.toString() + "px, " + t.toString() + "px, 0px)"
    },
    get_KeyboardHeight: function() { return Microsoft.Crm.Client.Core.Framework.$1t.get_$394() },
    focusNextMajorComponent: function(n, t) {
        var u = n.closest(".majorComponent"), o, e, h, r, f, i, s, c;
        if (!u.length && n[0].parentNode)
            if (n[0].parentNode.childNodes) {
                if (o = n[0].parentNode.childNodes
                    .length, o > 0)
                    for (e = 0; e < o; e++)
                        if (h = $(n[0].parentNode.childNodes[e]), u = h.closest(".majorComponent"), u.length > 0) break
            } else u = $(n[0].parentNode).closest(".majorComponent");
        for (r = $(document.body).find(".majorComponent"), f = r.length, i = 0; i < f; i++) {
            if (s = i === f - 1 ? 0 : i + 1, c = i >= 1 ? i - 1 : f - 1, i === f - 1) {
                $(r[s]).focus();
                return
            }
            if (r[i] === u[0]) {
                t ? $(r[c]).focus() : $(r[s]).focus();
                return
            }
        }
    },
    $297: function(n, t, i) { return this.userAgent.$mn ? n : this.userAgent.$Kz ? i : t }
};
Microsoft.Crm.Client.Core.Controls.$4X = function() { this.$mM = new Array(0) };
Microsoft.Crm.Client.Core.Controls.$4X.get_$5 = function() {
    return $0.$1(Microsoft.Crm.Client.Core.Controls.$4X.$D) &&
        (Microsoft.Crm.Client.Core.Controls.$4X.$D = new Microsoft.Crm.Client.Core.Controls.$4X), Microsoft.Crm.Client
        .Core.Controls.$4X.$D
};
Microsoft.Crm.Client.Core.Controls.$4X.prototype = {
    addHandler: function(n) {
        Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.$21 &&
            (Array.add(this.$mM, n), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39
                .changeState("ReactFieldPopover", !0), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
                .get_Instance().$39.updateBackBehavior())
    },
    removeHandler: function(n) {
        if (Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_PALEnabled() &&
            Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39.$21) {
            var t = Array.remove(this.$mM, n);
            return this.$2YQ(), t
        }
        return!1
    },
    $2np: function() {
        var n = this.$147();
        this.$2YQ();
        $0.$1(n) || n()
    },
    $2YQ: function() {
        this.$mM.length < 1 &&
        (Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$39
            .changeState("ReactFieldPopover", !1), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge
            .get_Instance().$39.updateBackBehavior())
    },
    $147: function() {
        var n = this.$mM[this.$mM.length - 1];
        return Array.removeAt(this.$mM, this.$mM.length - 1), n
    }
};
Microsoft.Crm.Client.Core.Controls.$ML = function() {
    this.$$d_$3To = Function.createDelegate(this, this.$3To);
    this.$$d_$3SL = Function.createDelegate(this, this.$3SL);
    this.$$d_$3Aq = Function.createDelegate(this, this.$3Aq)
};
Microsoft.Crm.Client.Core.Controls.$ML.prototype = {
    $3Aq: function(n) {
        var t = n;
        t.unbind("touchstart");
        t.unbind("touchmove");
        t.unbind("touchend");
        t.bind("touchstart", this.$$d_$3To);
        t.bind("touchmove", this.$$d_$3To);
        t.bind("touchend", this.$$d_$3To)
    },
    $3SK: function(n) {
        var t = !$0.$1(n);
        return t ? this.$3SM(n) : !1
    },
    $3SL: function(n) {
        var t = -1, i = -1, r, u, f;
        return $0.$1(n.changedTouches)
            ? (t = n.clientX, i = n.clientY)
            : (t = n.changedTouches[0].pageX, i = n.changedTouches[0].pageY), r = document.createEvent("MouseEvent"), r
            .initMouseEvent("mousedown", !0, !0, window.self, 1, t, i, t, i, !1, !1, !1, !1, 0, null), u = document
            .createEvent("MouseEvent"), u.initMouseEvent("mousemove",
            !0,
            !0,
            window.self,
            1,
            t,
            i,
            t,
            i,
            !1,
            !1,
            !1,
            !1,
            0,
            null), f = this, Microsoft.Crm.Client.Core.Framework.$5w.$1U4(function() {
            if (n.target.dispatchEvent(r), n.target.dispatchEvent(u), Microsoft.Crm.Client.Core.Framework.UserAgent
                .getInstance().$Kz) {
                var t = $(n.target);
                t.parents(".scrollRegion").first().css("overflow-y", "auto")
            }
        }), !0
    },
    $3SM: function(n) {
        var e = !$0.$1(n.originalEvent), r, f, t, i, u, o;
        return e
            ? (r = n.originalEvent.changedTouches, f = !$0.$1(r) && r.length > 0, !f)
            ? !1
            : (t = r[0], i = "", n.type === "touchstart"
                ? i = "mousedown"
                : n.type === "touchmove" ? i = "mousemove" : n.type === "touchend" && (i = "mouseup"), u = document
                .createEvent("MouseEvent"), u
                .initMouseEvent(i,
                    !0,
                    !0,
                    window,
                    1,
                    t.screenX,
                    t.screenY,
                    t.clientX,
                    t.clientY,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null), o = this, Microsoft.Crm.Client.Core.Framework.$5w
                .$1U4(function() { n.target.dispatchEvent(u) }), !0)
            : !1
    },
    $3To: function(n) {
        n.preventDefault();
        return this.$3SK(n)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.Views");
Microsoft.Crm.Client.Core.Views.ViewManager = function() {
    this.getDefinitionCallbacks = {};
    this.$6a = {}
};
Microsoft.Crm.Client.Core.Views.ViewManager.prototype = {
    $pG: function(n, t) {
        if (this.$6a[n] = t, n in this.getDefinitionCallbacks) {
            Microsoft.Crm.Client.Core.Framework.$C.$1d("Get view definition callback", 128, n);
            var i = this.getDefinitionCallbacks[n];
            i(t);
            delete this.getDefinitionCallbacks[n]
        }
    },
    $1jJ: function(n) { this.$2A2(n) },
    requestDefinition: function(n, t) {
        n in this.$6a
            ? (Microsoft.Crm.Client.Core.Framework.$C.$1d("Get view definition in cache", 128, n), t(this.$6a[n]))
            : (Microsoft.Crm.Client.Core.Framework.$C.$1d("Get view definition callback requested", 128, n), this
                .getDefinitionCallbacks[n] = t)
    },
    removeDescriptor: function(n) { n in this.$6a && delete this.$6a[n] },
    $2A2: function(n) {
        delete this.$6a[n];
        delete this.getDefinitionCallbacks[n]
    }
};
Microsoft.Crm.Client.Core.Controls.TabPriority.registerClass("Microsoft.Crm.Client.Core.Controls.TabPriority");
Microsoft.Crm.Client.Core.Controls.$MK.registerClass("Microsoft.Crm.Client.Core.Controls.$MK");
Microsoft.Crm.Client.Core.Controls.$4X.registerClass("Microsoft.Crm.Client.Core.Controls.$4X");
Microsoft.Crm.Client.Core.Controls.$ML.registerClass("Microsoft.Crm.Client.Core.Controls.$ML");
Microsoft.Crm.Client.Core.Views.ViewManager.registerClass("Microsoft.Crm.Client.Core.Views.ViewManager",
    null,
    Microsoft.Crm.Client.Core.Framework.$4J);
Microsoft.Crm.Client.Core.Controls.TabPriority.None = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.Default = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.SiteMap = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.SiteMapItem = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.HomepageButton = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.ProcessStageButton = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.PageNavigator = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.PaneTitle = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.PaneContent = -1;
Microsoft.Crm.Client.Core.Controls.TabPriority.FormCommandButton = -1;
Microsoft.Crm.Client.Core.Controls.$4X.$D = null
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.Controls.js.srcmap