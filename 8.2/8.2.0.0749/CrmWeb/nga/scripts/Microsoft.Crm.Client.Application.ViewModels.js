Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels");
Microsoft.Crm.Client.Core.ViewModels.$DW = function(n) {
    this.$$d_$3Jc = Function.createDelegate(this, this.$3Jc);
    this.$$d_$1Eo = Function.createDelegate(this, this.$1Eo);
    this.$$d_$2MX = Function.createDelegate(this, this.$2MX);
    this.$ER = new Microsoft.Crm.Client.Core.ViewModels.MessageDialogViewModel;
    Microsoft.Crm.Client.Core.ViewModels.$DW.initializeBase(this);
    this.$Wi = n
};
Microsoft.Crm.Client.Core.ViewModels.$DW.prototype = {
    $Wi: null,
    $1wX: null,
    $2kA: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Framework.$4);
        return n.resolve(new(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W))(this.$1wX)), n.promise()
    },
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$3l,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1yC(this.$Wi),
            this.$$d_$2MX,
            this.$$d_$1Eo), 1
    },
    $3Jc: function() { window.location.reload(!1) },
    $3SE: function() {
        this.$ER.$GA = 0;
        this.$ER.$Fk = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Mobile_Preview_No_Records_Title");
        this.$ER.set_Message(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Mobile_Preview_No_Records_Message"));
        this.$ER.$CJ = 0;
        this.$ER.$IT = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Mobile_Preview_No_Records_Refresh_Button");
        this.$ER.$ET = this.$$d_$3Jc;
        this.$ER.Show()
    },
    $2MX: function(n) {
        var t, i, r;
        if (this.$1wX = n.$1Zc, t = n.$1Zc[0], t.$4m === 2 &&
            n.$1K1 === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()) {
            this.$3SE();
            return
        }
        i = new Xrm.Objects.EntityReference(t.$6h, new Microsoft.Crm.Client.Core.Framework.Guid(n.$1K1));
        r = this.$9_3;
        r.get_ExternalContext().$S.EntityReference = i;
        this.$vF(this.$2kA())
    },
    $1Eo: function(n) { this.$1z(n) }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions");
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I = function() {
    this.$$d_$s7 = Function.createDelegate(this, this.$s7);
    this.$$d_$2PD = Function.createDelegate(this, this.$2PD);
    Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("ResolveRecipients", Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$B)
    };
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I;
    return i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB, Microsoft.Crm.Client.Core.ViewModels
        .MailApp.Actions.$8I.$15Q(i, t), i
};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$15Q = function(n, t) {
    var i, u, r;
    if (!$0.$1(t) && (i = t, !$0.$1(i.QueryValue) && Object.isInstanceOfType(i.QueryValue))) {
        if (u = i.QueryValue, r = u.resolveFromScratch, !$0.$1(r)) {
            n.$xk = r;
            return
        }
        n.$xk = !1
    }
};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.prototype = {
    get_$7L: function() { return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance() },
    get_$4p: function() { return this.get_$7L().$2w },
    $5G: null,
    $KZ: null,
    $aF: null,
    $xk: !1,
    $2t: function() {
        return(this.$2de(), this.$2X9(), !Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q
                .$21)
            ? (this.$s7(Microsoft.Crm.Client.Core.Framework.$4
                .$h("'NativeBridge.Instance.OfficeMailDispatcher' is not available.")), 0)
            : (this.$1k(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.$7O,
                this.$3Mu(),
                this.$$d_$2PD,
                this.$$d_$s7), 1)
    },
    $2de: function() { this.get_$7L().$2w.set_$1xv(1) },
    $2PD: function(n) {
        this.$aF = n;
        this.$2el();
        this.$1H1()
    },
    $2el: function() {
        var n = this.$xk ? new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)) : this.$3af(this.get_$4p()),
            t = this.$3af(this.$aF);
        this.$KZ = new Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$3ZM;
        this.$KZ.$wS = this.$2GF(n, t);
        this.$KZ.$184 = this.$2GF(t, n)
    },
    $3af: function(n) {
        var t = this.$3UR(n);
        return t.$DP(this.get_$4p().$1LK.toLowerCase()), t
    },
    $3Ut: function() {
        this.get_$4p().$ja = this.$aF.$PJ;
        this.get_$4p().$1MD = this.$aF.$Ul;
        this.get_$4p().$1KC = this.$aF.$wa;
        this.get_$4p().$1K8 = this.$aF.$wY;
        this.get_$4p().$xf = this.$aF.$xf;
        this.get_$4p().$bl = this.$aF.$bl;
        this.get_$4p().$be = this.$aF.$be
    },
    $1H1: function() {
        if ($0.$1(Mscrm.InlinedAppData.senderData))
            if ($0.$9c(Mscrm.InlinedAppData.senderData)) {
                var n = this;
                this.$2HQ().done(function(t) {
                    n.$67(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData(t)
                        .get_entities());
                    Mscrm.InlinedAppData.senderData = null
                })
            } else this.$3Lo();
        else
            this.$67(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
                .createFromObjectData(Mscrm.InlinedAppData.senderData).get_entities()), Mscrm.InlinedAppData
                .senderData = null
    },
    $3Lo: function() {
        if (!this.$KZ.$wS.get_Count()) {
            this.$67(null);
            return
        }
        var n = this, t = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1xu(this.$KZ.$wS.toArray())
            .then(function(t) {
                    n.$67(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData(t)
                        .get_entities())
                },
                function(n) {
                    t.$s7(Microsoft.Crm.Client.Core.Framework.$4
                        .$3ZY(n, "Request to the CRM server failed with an error."))
                })
    },
    $2yD: function() {
        for (var n, f, r, u = this.$KZ.$184, t = this.get_$7L().get_$R1().$21O(), i = 0;
            i < u.get_Count();
            i++
        )
            for (n = t.length - 1; n > 0; n--)
                f = this.get_$7L().get_$R1().get_$H(n), r = f
                    .getValue("mailappemailaddress"), $0.$1(r) ||
                    r.toLowerCase() !== u.get_$H(i) ||
                    Array.removeAt(t, n);
        return t
    },
    $b1: function(n) {
        var i = new Array(0), t;
        if (!$0.$1(n)) for (t = 0; t < n.length; t++) Array.add(i, n[t].$Ak);
        return i
    },
    $3Mu: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy
                .JsonResponses.$7O,
                Microsoft.Crm.Client.Core.Framework.$4),
            t,
            i;
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$21 ||
            n.reject(Microsoft.Crm.Client.Core.Framework.$4
                .$h("'NativeBridge.Instance.OfficeMailDispatcher' is not available.")), Microsoft.Crm.Client.Core
            .Storage.Office.$1d.get_$5().clearRecipients(), t = this, i = this, Microsoft.Crm.Client.Core.Storage.Office
            .$1d.get_$5().getRecipients().then(function(t) { n.resolve(t) }, function(t) { n.reject(t) }), n.promise()
    },
    $2HQ: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), t, i;
        return Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$21 ||
            n.reject(Microsoft.Crm.Client.Core.Framework.$4
                .$h("'NativeBridge.Instance.OfficeMailDispatcher' is not available.")), t = this, i = this, Microsoft
            .Crm.Client.Core.Storage.Office.$1d.get_$5().getInitialSenderData()
            .then(function(t) { n.resolve(t) }, function(t) { n.reject(t) }), n.promise()
    },
    $s7: function(n) {
        n.$10 === -2147093999 && (n.$10 = -2147093997);
        this.get_$7L().$2w.set_$1xv(2);
        this.$2CV(n);
        this.$1z(n)
    },
    $67: function(n) {
        if (this.$KZ.get_$2bB() || this.$xk) {
            var t = this.$2yD();
            $0.$1(n) || Array.addRange(t, this.$3UQ(n));
            this.$3Ut();
            this.$3SG();
            this.get_$7L().get_$R1().$7n(t)
        }
        this.get_$7L().$2w.set_$1xv(3);
        this.$2CW(n);
        this.$1U()
    },
    $3UQ: function(n) {
        for (var u, i = new Array(0), r = n, f = r.length, t = 0;
            t < f;
            ++t
        ) u = r[t], i.push(this.get_$7L().$1GU.$2Y5(u));
        return i
    },
    $3SG: function() {
        if (!this.$xk && Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsMailAppComposeMode()) {
            var n = this.$31u();
            Microsoft.Crm.Client.Core.Framework.$3.$A(n) || this.get_$7L().$Ag.showNotification(n, 0)
        }
    },
    $31u: function() {
        return this.$KZ.get_$3Dy()
            ? this.get_$4p().get_$DK() !== 1
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Recipients_Added")
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Attendees_Added")
            : this.$KZ.get_$3Dz()
            ? this.get_$4p().get_$DK() !== 1
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Recipients_Removed")
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Attendees_Removed")
            : this.$KZ.get_$2bA()
            ? this.get_$4p().get_$DK() !== 1
            ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Recipients_Added_And_Removed")
            : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_OWA_Attendees_Added_And_Removed")
            : null
    },
    $3UR: function(n) {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i;
        return Microsoft.Crm.Client.Core.Models.MailApp.$DF
            .isInstanceOfType(n) &&
            (t = this.$3UP(n)), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.$7O
            .isInstanceOfType(n) &&
            (t = this.$3US(n)), this.$3St(t), i = this, Microsoft.Crm.Client.Core.Framework.$5s
            .$2AD(String, t, function(n, t) { return n === t })
    },
    $3UP: function(n) {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        return $0.$1(n.$ja) || t.add(n.$ja.$Ak), t.addRange(this.$b1(n.$1MD)), t.addRange(this.$b1(n.$1KC)), t
            .addRange(this.$b1(n.$1K8)), t.addRange(this.$b1(n.$bl)), t.addRange(this.$b1(n.$be)), t
    },
    $3US: function(n) {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String));
        return $0.$1(n.$PJ) || t.add(n.$PJ.$Ak), t.addRange(this.$b1(n.$Ul)), t.addRange(this.$b1(n.$wa)), t
            .addRange(this.$b1(n.$wY)), t.addRange(this.$b1(n.$bl)), t.addRange(this.$b1(n.$be)), t
    },
    $3St: function(n) { for (var t = 0; t < n.get_Count(); t++) n.set_$H(t, n.get_$H(t).toLowerCase()) },
    $2GF: function(n, t) {
        for (var r = new(Microsoft.Crm.Client.Core.Framework.List$1
                     .$$(String)),
            i = 0;
            i < t.get_Count();
            i++) n.$1A5(t.get_$H(i)) || r.add(t.get_$H(i));
        return r
    },
    $2X9: function() {
        this.$5G = new Microsoft.Crm.Client.Core.Framework.$N6("MailAppAction", { Action: "ResolveRecipientsAction" });
        Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$hz(this.$5G)
    },
    $2CW: function(n) {
        $0.$1(this.$5G) ||
        (this.$5G.p.Resolved = !0, this.$5G.p.ResolvedRecords = n, Microsoft.Crm.Client.Core.Framework.$1C.get_$5()
            .$VZ(this.$5G.rid), this.$5G = null)
    },
    $2CV: function(n) {
        $0.$1(this.$5G) ||
        (this.$5G.p.Resolved = !1, this.$5G.p.ErrorCode = n.$10, this.$5G.p.ErrorMessage = n.$E, Microsoft.Crm
            .Client.Core.Framework.$1C.get_$5().$VZ(this.$5G.rid), this.$5G = null)
    }
};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$3ZM = function() {};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$3ZM
    .prototype = {
        $wS: null,
        $184: null,
        get_$1Mg: function() { return!$0.$1(this.$wS) && this.$wS.get_Count() > 0 },
        get_$1Zz: function() { return!$0.$1(this.$184) && this.$184.get_Count() > 0 },
        get_$3Dy: function() { return this.get_$1Mg() && !this.get_$1Zz() },
        get_$3Dz: function() { return!this.get_$1Mg() && this.get_$1Zz() },
        get_$2bA: function() { return this.get_$1Mg() && this.get_$1Zz() },
        get_$2bB: function() { return this.get_$1Mg() || this.get_$1Zz() }
    };
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction = function(n) {
    Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction.initializeBase(this);
    this.$US = n
};
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveEmailEngagementSummary",
                Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction.$B)
    };
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction
    .$B = function(n) {
        return new Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction(n)
    };
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction.prototype = {
    $US: null,
    get_$7L: function() { return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance() },
    $2t: function() {
        if (this.$US.$Gk)
            return this.$1z(Microsoft.Crm.Client.Core.Framework.$4
                .$h("Retrieving email engagement summary is in proccess")), 0;
        this.$US.$Gk = !0;
        var i =
                "<fetch returntotalrecordcount='true' mapping=\"logical\" count=\"100\"><entity name='email' > <attribute name='activityid' /><attribute name='opencount' /><attribute name='replycount' /><attribute name='modifiedon' /><attribute name='isemailfollowed' /><attribute name='inreplyto' /><filter type=\"and\"><condition attribute=\"activityid\" operator=\"eq\" value=\"" + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.$b.$5w(this.get_$7L().$2w.$7z.$Aj) + "\"/><\/filter><order attribute='modifiedon' descending='true' /><\/entity><\/fetch>",
            r = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(i, null),
            n = this,
            t = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(r, Microsoft.Crm.Client.Core.ViewModels.$w.get_$Jc(), this.get_$e()).then(function(t) {
                    var r, i, u;
                    t &&
                    (r = t.get_entities(), r.length &&
                    (i = r[0], n.$US.set_OpenCount(i.getValue("opencount")), n.$US
                        .set_ReplyCount(i.getValue("replycount")), n.$US
                        .set_LastActivityDate(i.getValue("modifiedon")), n
                        .$US.$XQ = i.getValue("activityid").toString(), u = !Microsoft.Crm.Client.Core.Framework.$3
                        .$A(i.getValue("inreplyto")), n.$3RN(u)));
                    n.$US.$Gk = !1;
                    n.$1U()
                },
                function(n) {
                    t.$US.$Gk = !1;
                    t.$1z(Microsoft.Crm.Client.Core.Framework.$4
                        .$h("An error retrieving email engagement summary. Error message: \n\n {0}", n.$E))
                }), 1
    },
    $3RN: function(n) {
        var t = n && !Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_IsMailAppComposeMode(),
            i = this.get_$7L().$2w.$7z.$UQ,
            r = i && this.get_$7L().$2w.$17c;
        this.$US.set_ShowSummary(t || r)
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.ViewModels");
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction = function() {
    this.$$d_$1hv = Function.createDelegate(this, this.$1hv);
    this.$$d_$24p = Function.createDelegate(this, this.$24p);
    Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("AssociateOneToMany",
                Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction, r = t;
    return i.$S = r.QueryValue, i.$9k = r.OnSuccess, i.$BK = r.OnFailure, i
};
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction.prototype = {
    $9k: null,
    $BK: null,
    $S: null,
    $2t: function() {
        var i = this.$S.parentReference,
            r = this.$S.childReference,
            n = this.$S.relationshipAttributeName,
            o = this.$S.newRecordSelected,
            u = Microsoft.Crm.Client.Core.Framework.$15.$5v("", "AssociateOneToMany"),
            f,
            e,
            t;
        return $0.$1(n)
            ? (f = Microsoft.Crm.Client.Core.Framework.$4.$1Ra(null), this.$1hv(f))
            : (e = [n], t = this, this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$6F(r,
                    new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(e),
                    Microsoft.Crm.Client.Core.ViewModels.$w.get_$Jc(),
                    u),
                function(f) {
                    var c = i.LogicalName === "territory" && r.LogicalName === "systemuser" && n === "territoryid",
                        e,
                        s,
                        h;
                    f.hasValue(n) && !c
                        ? (e = f.getValue(n), s = e.Id, s.equals(i.Id)
                            ? t.$24p(r)
                            : (h = parseInt(o ? "0x80631119" : "0x80048478", 16), t
                                .$1hv(Microsoft.Crm.Client.Core.Framework.$4.$lh(h))))
                        : (f.initializeValue(n, i, 6), f.$4P.addRange([n]), Microsoft.Crm.Client.Core.Storage.DataApi
                            .DataSource.$3.$7n(f.$N, f, !0, u).then(t.$$d_$24p, t.$$d_$1hv))
                },
                this.$$d_$1hv)), 1
    },
    $24p: function(n) {
        this.$9k(n);
        this.$1U()
    },
    $1hv: function(n) {
        this.$BK(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction = function() {
    this.$$d_$2dN = Function.createDelegate(this, this.$2dN);
    Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("AssociateRecords", Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction, i = n;
    return t.$9_3 = i, t.$P = i.$$d_$3CU, t
};
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction.prototype = {
    $P: null,
    $FY: function(n, t, i, r, u, f) {
        var e, o, s, h, c;
        i
            ? i === 1 &&
            (h = this, c = this, Xrm.XrmUtilityWrapper.$24o(n,
                t,
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelationshipReference(u, r, f, i),
                function() { h.$24m() },
                function(n) { c.$1z(Microsoft.Crm.Client.Core.Framework.$4.$lh(n.$6r.$6n)) }))
            : (e = {}, e.parentReference = n, e.childReference = t, e.relationshipAttributeName = r, o = new Microsoft
                .Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor("AssociateOneToMany", e), s = this, o
                .OnSuccess = function() { s.$24m() }, o.OnFailure = this.$$d_$2dN, Microsoft.Crm.Client.Core.ViewModels
                .ApplicationShellViewModel.get_instance().$2T("ActionProvider", null, o))
    },
    $2t: function() {
        var n = this.$9_3, t = n.$Mx, i = n.$Id;
        return this.$FY(t, i, n.$5b, n.$7m, n.$5t, n.$9y), 1
    },
    $24m: function() {
        $0.$1(this.$P) || this.$P();
        this.$1U()
    },
    $2dN: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.$Bs = function(n, t, i) {
    this.$$d_$2Ou = Function.createDelegate(this, this.$2Ou);
    Microsoft.Crm.Client.Application.ViewModels.$Bs.initializeBase(this);
    this.$5i = n;
    this.$WK = t;
    this.$DU = i;
    this.$9_3 = i;
    var r = this.$DU;
    this.$P = r.$$d_$4Y || (r.$$d_$4Y = Function.createDelegate(r, r.$4Y))
};
Microsoft.Crm.Client.Application.ViewModels.$Bs.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveSwitchProcessListData",
        Microsoft.Crm.Client.Application.ViewModels.$Bs.$AR)
};
Microsoft.Crm.Client.Application.ViewModels.$Bs.$AR = function(n, t) {
    var r = n, i = t.QueryValue, u = i.DataSource, f = i.ModelFactory;
    return new Microsoft.Crm.Client.Application.ViewModels.$Bs(u, f, r)
};
Microsoft.Crm.Client.Application.ViewModels.$Bs.prototype = {
    $5i: null,
    $WK: null,
    $DU: null,
    $2t: function() {
        var n = this.$DU.get_$1kf(), t = this.$DU.get_$1ki(), i = this.get_$e(), r = this.$5i.$hA(n, t, i);
        return this.$1k(Object, r, this.$$d_$2Ou, this.$$d_$5J), 1
    },
    $2Ou: function(n) {
        this.$DU.set_$1cz(this.$WK.$28v(n));
        this.$4Y(this.$DU.get_$1cz().get_$2Aa())
    }
};
Microsoft.Crm.Client.Application.ViewModels.$B3 = function(n) {
    this.$$d_$2Ou = Function.createDelegate(this, this.$2Ou);
    Microsoft.Crm.Client.Application.ViewModels.$B3.initializeBase(this);
    this.$DU = n;
    var t = this.$DU;
    this.$P = t.$$d_$4Y || (t.$$d_$4Y = Function.createDelegate(t, t.$4Y));
    this.$9_3 = n
};
Microsoft.Crm.Client.Application.ViewModels.$B3.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("LoadArchivedProcessListData",
        Microsoft.Crm.Client.Application.ViewModels.$B3.$AR)
};
Microsoft.Crm.Client.Application.ViewModels.$B3.$AR = function(n, t) {
    var i = t.TargetViewModel;
    return new Microsoft.Crm.Client.Application.ViewModels.$B3(i)
};
Microsoft.Crm.Client.Application.ViewModels.$B3.prototype = {
    $DU: null,
    $2t: function() {
        var t = this.$DU.get_$1kf(), i = this.$DU.get_$1ki(), r = this.get_$e(), n = this.$24a();
        return this.$1k(Object, n, this.$$d_$2Ou, this.$$d_$5J), 1
    },
    $2Ou: function() {
        this.$DU.$3La();
        this.$4Y(this.$DU.get_Root().$ml ? this.$DU.get_$1cz().get_$2Aa() : this.$DU.get_$1cz().get_$24a())
    },
    $24a: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4);
        return n.resolve(), n
    }
};
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("ExportToExcelAction", Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction.$B = function(n, t) {
    var r = n, i = new Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction;
    return i.$P = t.SuccessCallbackParameter, i.$1I_3 = t.FailureCallbackParameter, i.$20 = r, i
};
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction.prototype = {
    $P: null,
    $20: null,
    $2t: function() {
        var n = new Microsoft.Crm.Client.Core.Framework.Guid(this.$20.get_DefinitionId()),
            t = this.$20.$An === 1 || !this.$20.$An ? "savedquery" : "userquery",
            i = new Xrm.Objects.EntityReference(t, n);
        return this.$1k(Xrm.Sdk.Response, this.$2rt(i), this.$$d_$4Y, this.$$d_$1z), 1
    },
    $2zf: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi.$86("", this.$20.get_ModelContext().get_Id()),
            t = $.extend(!1, {}, this.$20.$2Q);
        return n.$9H = t, n.$Jv(this.$20.get_ModelContext().get_Id(),
            this.$20.$9Y,
            this.$20.$BT,
            this.$20.$2J,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()), n.$9H.$AM(1)
    },
    $2rt: function(n) {
        var i = this.$20.get_ModelContext() ? this.$2zf() : "",
            t = MscrmComponents.DeferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Framework.$4),
            r = Xrm.Internal.messages.exportToExcel(n, i, "", "", {}),
            u = this,
            f = this;
        return r.then(function(n) { t.resolve(n) },
            function(n) { t.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(n.$6r.$6n)) }), t
    },
    $4Y: function(n) {
        this.$P(n.excelFile);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$2mq = Function.createDelegate(this, this.$2mq);
    Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("GetLookupListItemDescriptor",
                Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction, f = n, e, r, u;
    return i.$P = f.$$d_$30N, i.$9_3 = f, e = t, r = e.QueryValue, i.$1K = r.EntityName, u = r.ViewQuery, i
        .$In = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.isInstanceOfType(u) ? r.ViewQuery.$AM(1) : u, i
        .$N5 = r.ViewLayout, i
};
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction
    .$2nv = function(n) { return n.indexOf(".") > 0 ? n.split(".")[0] : null };
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction
    .$2S9 = function(n) { return n.indexOf(".") > 0 ? n.split(".")[1] : n };
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.prototype = {
    $P: null,
    $1K: null,
    $N5: null,
    $In: null,
    $1eE: null,
    $1NM: null,
    get_$3WN: function() {
        return $0.$1(this.$1eE) && (this.$1eE = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(this.$In)), this.$1eE
    },
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$1K, this.get_$e()),
            this.$$d_$2mq,
            this.$$d_$5J), 1
    },
    $2mq: function(n) {
        var a = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(this.$N5),
            c = a.getElementsByTagName("cell"),
            i = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))),
            e = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            o,
            t,
            h,
            r,
            s,
            u,
            l,
            f;
        for (e.add(n.get_$GU()), i.set_$H(this.$1K,
                new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))([n.get_$GU()])), o = 0;
            e.get_Count() < 3 && o < c.length;
            o++)
            if (t = c[o].attributes.getNamedItem("name").nodeValue, t !== n.get_$GU()) {
                if (h = Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.$2nv(t), $0
                    .$25(h)) i.get_$H(this.$1K).add(t);
                else {
                    for (r = null, s = this.get_$3WN()
                            .getElementsByTagName("link-entity"), u = 0;
                        u < s.length;
                        u++)
                        l = s[u].attributes.getNamedItem("alias")
                            .nodeValue, l === h && (r = s[u].attributes.getNamedItem("name").nodeValue);
                    if ($0.$1(r)) continue;
                    f = i.get_$H(r);
                    $0.$1(f) && (f = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), i.set_$H(r, f));
                    f.add(t)
                }
                e.add(t)
            }
        this.$1NM = e.toArray();
        this.$39t(i)
    },
    $39t: function(n) {
        var f = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(String)), e = [], o = n.$1dN(), r, t, u, c;
        for (r in o) {
            var s = { key: r, value: o[r] }, h = s.key, i = s.value.get_Items();
            for (t = 0; t < i.length; t++)
                u = i[t], f.set_$H(u, h), i[t] = Microsoft.Crm.Client.Application.ViewModels
                    .GetLookupListItemDescriptorAction.$2S9(u);
            Array.add(e,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(h, i), this.get_$e()))
        }
        c = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(e),
            function(n) {
                for (var r,
                    t,
                    u = new(Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M)),
                    e = n,
                    o = e.length,
                    i = 0;
                    i < o;
                    ++i) for (r = e[i], t = 0; t < r.get_$3XJ(); t++) u.add(r.get_$H(t));
                c.$1tF(u, f)
            },
            this.$$d_$5J)
    },
    $1tF: function(n, t) {
        for (var f, r, e, u = new Array(3), i = 0;
            i < 3;
            i++
        )
            f = "itemlabel" + i, i < this.$1NM.length
                ? (r = this.$1NM[i], e = this.$2q2(n, t.get_$H(r), r), u[i] = Microsoft.Crm.Client.Core.Models.$2g
                    .$2kR(Xrm.Objects.AttributeType.toString(e.get_$5M()), r, f, !1, !0))
                : u[i] = Microsoft.Crm.Client.Core.Models.Descriptors.$U
                .$3Xb("Label", "DefaultValueLabel", f, null, null, null, null, null);
        this.$P(new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor("ListItem", "ListItem", "item", null, null, u, null));
        this.$1U()
    },
    $2q2: function(n, t, i) {
        for (var r, f = Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.$2S9(i), u = 0;
            u < n.get_Count();
            u++) if (r = n.get_$H(u), r.get_$e1() === t && r.get_$1l() === f) return r;
        return null
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .GetMultipleEntityFormDefinitionAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("GetMultipleEntityFormDefinition",
                Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction.$4W)
    };
Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction.$4W = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction;
    return Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$1Dd(t, n), t
};
Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction.prototype = {
    $39e: function(n, t) {
        var u, f, s;
        if (n.get_$3XJ() > 0) {
            if (this.$Nt = n.get_$H(0).get_$5Z(), this.$9_3
                .set_sourceId(n.get_$H(0).$g), !$0.$1(this.get_$RW()) && !this.$9_3.get_$Dp()) {
                var e = Microsoft.Crm.Client.Core.ViewModels.$1Q
                        .$CA(String, "PrimaryModelName", this.get_$RW().Properties),
                    i = Microsoft.Crm.Client.Core.ViewModels.$1Q
                        .$CA(Array, "PrimaryAttributeFieldNames", this.get_$RW().Properties),
                    h = Microsoft.Crm.Client.Core.ViewModels.$1Q
                        .$CA(Object, "RelatedAttributeFieldNames", this.get_$RW().Properties),
                    c = Microsoft.Crm.Client.Core.ViewModels.$1Q
                        .$CA(Object, "RelationshipList", this.get_$RW().Properties),
                    r = [];
                !$0.$1(e) &&
                    !$0.$1(i) &&
                    i.length > 0 &&
                    Array.add(r,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(e, i), this.get_$e()));
                u = h;
                for (f in u) {
                    var o = { key: f, value: u[f] }, l = o.key, a = c[l], v = a.TargetEntityTypeName;
                    Array.add(r,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(v, o.value), this.get_$e()))
                }
                s = this;
                this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(r),
                    function() { s.$19x() },
                    this.$1jZ(Microsoft.Crm.Client.Core.Framework.$4))
            }
        } else
            Microsoft.Crm.Client.Core.Framework.Trace
                .logError(1, String.format("Root definition '{0}' not found.", t.toString())), this
                .$1Eo(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147084512))
    },
    $2Yt: function(n) { this.$p === 39 && (this.$9_3.$83 = n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .MetadataDownloadAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("MetadataDownload",
                Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction;
    return t.$9_3 = n, t
};
Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction
    .prototype = {
        $2t: function() {
            return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M().$2P1(this, new Sys.EventArgs), 1
        }
    };
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("OpenDocumentTemplateAction",
                Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction.$B = function(n, t) {
    var r = n, i = new Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction;
    return i.$zn = t.DocumentTemplateEntityReference, i.$P = t.SuccessCallbackParameter, i.$1I_3 = t
        .FailureCallbackParameter, i.$20 = r, i
};
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction.prototype = {
    $zn: null,
    $P: null,
    $20: null,
    $2t: function() { return this.$1k(Xrm.Sdk.Response, this.$2rp(), this.$$d_$4Y, this.$$d_$1z), 1 },
    $2rp: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Framework.$4),
            t = new Microsoft.Crm.Client.Core.Framework.Guid(this.$20.get_DefinitionId()),
            i = this.$20.$An === 1 || !this.$20.$An ? "savedquery" : "userquery",
            r = new Xrm.Objects.EntityReference(i, t),
            u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen.RenderTemplateFromViewRequest(this.$zn, r), this.get_$e()),
            f = this,
            e = this;
        return u.then(function(t) { n.resolve(t) }, function(t) { n.reject(t) }), n
    },
    $4Y: function(n) {
        this.$P(n.excelFile);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("OpenWordTemplateAction",
                Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction, r = t;
    return i.$1zC = r.SelectedRecordId, i.$1hu = r.AssociatedEntityTypeCode, i.$16b = r.WordTemplateEntityReference, i
        .$P = r.SuccessCallbackParameter, i.$1I_3 = r.FailureCallbackParameter, i
};
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction.prototype = {
    $16b: null,
    $1hu: 0,
    $1zC: null,
    $P: null,
    $2t: function() { return this.$1k(Xrm.Sdk.Response, this.$2sR(), this.$$d_$4Y, this.$$d_$1z), 1 },
    $2sR: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Framework.$4),
            t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen.ExportWordDocumentRequest(this
                        .$1hu,
                        this.$16b,
                        JSON.stringify([this.$1zC.toString()])),
                    this.get_$e()),
            i = this,
            r = this;
        return t.then(function(t) { n.resolve(t) }, function(t) { n.reject(t) }), n
    },
    $4Y: function(n) {
        this.$P(n.wordFile);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveDocumentTemplatesAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveDocumentTemplates",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction, r, u;
    return i.$9_3 = n, i.$1QU = Xrm.Internal.getEntityCode(i.$9_3
        .get_$2W()), r = t, $0.$1(r
            .OnSuccess) ||
        (i.$7N = r.OnSuccess), $0.$1(r
            .OnFailure) ||
        (i.$1I_3 = r.OnFailure), $0.$1(r.QueryValue) ||
        (u = r.QueryValue, $0.$1(u.DocumentType) || (i.$wv = u.DocumentType)), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.prototype = {
    $7N: null,
    $wv: 0,
    $1QU: 0,
    $2t: function() {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(44, this.get_$2C(), this.$9_3.get_$2W(), 0),
                    null),
            n = this,
            i = this;
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            t,
            function(t) {
                n.$7N(n.$2CK(t));
                n.$1U()
            },
            function(n) { i.$1z(n) }), 1
    },
    $2CK: function(n) {
        for (var r, t, u = new Array(0), i = 0;
            i < n.get_$3XJ();
            i++
        )
            r = n.get_$H(i), t = r.get_$5Z(), t.templateTypeCode === 9940 &&
                t.documentType === this.$wv &&
                this.$1sT(t.displayConditions) &&
                Array.add(u, r);
        return new(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W))(u)
    },
    $1sT: function(n) {
        var t, e, r, f;
        if ($0.$1(n) || !n.length) return!1;
        if (n[0] === "everyone") return!0;
        t = {};
        e = this;
        Array.forEach(n, function(n) { t[new Microsoft.Crm.Client.Core.Framework.Guid(n).toString()] = !0 });
        r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Gg;
        for (var u = r, o = u.length, i = 0; i < o; ++i) if (f = u[i], f.toString() in t) return!0;
        return!1
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$3ZP = function() {};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$3ZP
    .prototype = { templateTypeCode: 0, documentType: 0, displayConditions: null };
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$1tB = Function.createDelegate(this, this.$1tB);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveAncestors",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction;
    return t.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14l, t.$P = i.$$d_$1t6, t.$1I_3 = i
        .$$d_$5J, t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction.prototype = {
    $P: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$9_3.get_$2W(), this.get_$e()),
            this.$$d_$1tB,
            this.$$d_$5J), 1
    },
    $1tB: function(n) {
        var t, r, i;
        if (this.$9_3.get_$Dp()) {
            this.$1U();
            return
        }
        t = this.$9_3;
        r = t.$EN.get_Count() > 0 ? t.$EN.get_$H(t.$EN.get_Count() - 1) : t.get_$1N().get_Id();
        t.$1GE = n.get_$GU();
        i = new Array(0);
        Array.add(i, n.get_$GU());
        $0.$1(t.$7m) || Array.add(i, t.$7m);
        Array.add(i, n.get_$HZ());
        var f = "<filter type='and'><condition attribute='" +
                n.get_$HZ() +
                "' operator='above' value='{" +
                r +
                "}' /><\/filter>",
            e = new Microsoft.Crm.Client.Core.Framework.Storage
                .$95(new Microsoft.Crm.Client.Core.Framework.Storage.$4R(n.get_$HZ()), r.toString(), 0, 0),
            o = new Microsoft.Crm.Client.Core.Storage.DataApi.$Ny(t.$J, i),
            s = o.$2e6(f, e),
            u = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(s, r);
        u.set_$80(1);
        u.$2u = 49;
        u.$Od = !0;
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(u, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$23(1, 2), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)
    },
    $4Y: function(n) {
        var r = this.$9_3, i, t;
        $0.$1(this.$P) || r.$3P
            ? this.$1U()
            : (i = Microsoft.Crm.Client.Core.Models.$1E.$B(n), t = this, this.$Hv(function() {
                    t.$P(i);
                    t.$1U();
                    t.dispose()
                },
                Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ac))
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$39b = Function.createDelegate(this, this.$39b);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveCustomControlTemplate",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.$2Ge)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.$2Ge = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.$2ie(n),
        u = t,
        r = u.QueryValue;
    return i.$H3 = new Microsoft.Crm.Client.Core.Framework
        .PerformanceStopwatch("RetrieveCustomControlTemplateDataAction.RetrieveDefault"), i.$kn = i.$$d_$39b, i
        .$g = String.format("CustomControlTemplate_{0}", r.customControlTemplateName), i.$1w1 = r, i.$P = n.$$d_$2MU, i
        .$1I_3 = n.$$d_$39X, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.$2ie = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction;
    return t.$9_3 = n, t.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1aU, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.prototype = {
    $P: null,
    $g: null,
    $1w1: null,
    $kn: null,
    $H3: null,
    $2t: function() {
        $0.$1(this.$H3) || this.$H3.start();
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(48, this.get_$2C(), "customcontrol", 0, !1, this.$g),
                this.get_$e());
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            n,
            this.$kn,
            this.$$d_$5J), 1
    },
    $39b: function(n) {
        var r, u, t, f, i;
        if ($0.$1(this.$H3) || this.$H3.stop(), r = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("RetrieveCustomControlTemplateDataAction.ParseForDefault"), r
            .start(), u = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .ViewModelDescriptor, n.get_$3XJ() > 0)
            for (t = 0; t < n.get_$3XJ(); t++)
                if (f = n.get_$H(t), f.$4m === 48) {
                    u = f.get_$5Z();
                    break
                }
        i = {};
        i.descriptor = u;
        i.paramDictionary = this.$1w1;
        r.stop();
        this.$P(i);
        this.$1U()
    },
    $5J: function(n) {
        $0.$1(this.$H3) || this.$H3.stop();
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction = function() {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction.initializeBase(this);
    this.$7x = "OpenDashboardCommand";
    this.$kK = "_DashboardCommands";
    this.$1Ir = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_Dashboard_Group_Name");
    this.$1G4 = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_Dashboard_Group_Name");
    this.$4m = Microsoft.Crm.Client.Core.Framework.$6.get_$k() ? 37 : 1;
    this.$ts = [0]
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveDashboardSelector",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction;
    return i.$9_3 = n, i.$KS = Microsoft.Crm.Client.Core.Framework.$6.get_$k()
        ? $1W.$iP(Microsoft.Crm.Client.Core.Framework.$1, 37).toUpperCase()
        : $1W.$iP(Microsoft.Crm.Client.Core.Framework.$1, n.$p).toUpperCase(), Microsoft.Crm.Client.Application
        .ViewModels.$6M.$1RZ(i, t)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveDefaultListForEntityAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction, r = t;
    return i.$P = r.OnSuccessParameter, i.$T = r.EntityLogicalNameParameter, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction.prototype = {
    $P: null,
    $T: null,
    $2t: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi
            .$O3(11, Microsoft.Crm.Client.Core.Framework.$6.get_$2C(), this.$T, 0, !0, null, 1);
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(n, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$1z), 1
    },
    $4Y: function(n) {
        n.get_$3XJ() > 0
            ? (this.$P(n.get_$H(0)), this.$1U())
            : this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$h("No default list for entity found."))
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveEntityMetadataByDisplayNameAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction, r = t;
    return i.$P = r.OnSuccessParameter, i.$VM = r.EntityDisplayNameParameter, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction.prototype = {
    $P: null,
    $VM: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$1m),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$Jq(this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$1z), 1
    },
    $4Y: function(n) {
        for (var t, r = this.$VM.toUpperCase(), u = n.$21O(), f = u.length, i = 0; i < f; ++i)
            if (t = u[i], t.get_$AB().toUpperCase() === r || t.get_$146().toUpperCase() === r) {
                this.$P(t);
                this.$1U();
                return
            }
        this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$h("Entity not found."))
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("QuickCreateRetrieveFormDataXml",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$B);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("EditRootRetrieveFormDataXml",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$2AL)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction, i = n;
    return t.$9_3 = i, t.$I3 = i.get_ModelContext().$M, t.$P = i.$$d_$1Xy, t.$FW = i.$FW, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$2AL = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction, i = n;
    return t.$9_3 = i, t.$I3 = i.get_ModelContext().$M, t.$P = i.$$d_$1Xy, t.$FW = i.$FW, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.prototype = {
    $P: null,
    $I3: null,
    $FW: null,
    $2t: function() {
        var n, t;
        return $0.$1(this.$FW)
            ? this.$2Ub()
            : (n = this.$2in(this.$FW), $0.$1(n) ||
                (t = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap(n), $0.$25(t) || this.$3B1(t))), 1
    },
    $2in: function(n) {
        var t = Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$Z(n);
        return t.hasChildNodes() ? Microsoft.Crm.Client.Core.Storage.Common.Xml.$B.$B(t).$Aq().get_$H(0) : null
    },
    $3B1: function(n) {
        for (var r,
            t,
            h,
            c,
            u = [],
            o = [],
            f = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)),
            i = {},
            s = n.get_fieldNames(),
            l = s.length,
            e = 0;
            e < l;
            ++e)
            r = s[e], t = n.$1X[r], t === 11 || t === 12 || t === 13
                ? u.push(r)
                : (t === 6 || t === 9 || t === 1) && o.push(r);
        i[Xrm.Objects.AttributeType.toString(11)] = u;
        i[Xrm.Objects.AttributeType.toString(6)] = o;
        f.addRange(u);
        f.get_Count()
            ? (c = this, this.$1k(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(n.$2n.LogicalName, f.toArray()), this.get_$e()),
                function(t) { c.$2N9(t, i, n) },
                this.$$d_$95))
            : (h = new(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M)), this
                .$2N9(h, i, n))
    },
    $2N9: function(n, t, i) {
        for (var f, e, r, o = {}, u = 0; u < n.get_$3XJ(); u++) o[n.get_$H(u).get_$1l()] = n.get_$H(u);
        f = t;
        for (e in f)
            r = { key: e, value: f[e] }, r.key === Xrm.Objects.AttributeType.toString(11)
                ? i = this.$3B3(r.value, i, o)
                : r.key === Xrm.Objects.AttributeType.toString(6) && (i = this.$3B2(r.value, i));
        this.$I3.mergeChanges(i);
        this.$2Ub()
    },
    $2Ub: function() {
        var n = Xrm.Soap.EntityRecordSerializer.$3Tg(this.$I3);
        n.length
            ? this.$Fn(n)
            : this.$95(Microsoft.Crm.Client.Core.Framework.$4
                .$h(String.format("Entity form data xml could not be formatted for entityrecord : {0}", this.$I3)))
    },
    $3B3: function(n, t, i) {
        for (var f, h, c, e, l = n, a = l.length, s = 0; s < a; ++s) {
            var u = l[s], o = this.$I3.getValue(u), r = t.getValue(u);
            if (!$0.$1(r) && $0.$1(r.$1B))
                if ($0.$1(o) || $0.$1(o.$1B) || o.$1f !== r.$1f) {
                    if (f = i[u], !$0.$1(f) && !$0.$1(f.get_$Bs()) && !$0.$1(f.get_$Bs().$2f)) {
                        h = f.get_$Bs().$2f;
                        for (c in h)
                            e = { key: c, value: h[c] }, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N
                                .isInstanceOfType(e.value) &&
                                !$0.$1(e.value.$1B) &&
                                e.value.$1f === r.$1f &&
                                (r.$1B = e.value.$1B, t.setValue(u, r))
                    }
                } else r.$1B = o.$1B, t.setValue(u, r)
        }
        return t
    },
    $3B2: function(n, t) {
        for (var e = n, o = e.length, u = 0; u < o; ++u) {
            var f = e[u], r = this.$I3.getValue(f), i = t.getValue(f);
            $0.$1(r) ||
                $0.$1(r.Name) ||
                $0.$1(i) ||
                !$0.$1(i.Name) ||
                r.Id.equals(i.Id) && (i.Name = r.Name, t.setValue(f, i))
        }
        return t
    },
    $Fn: function(n) {
        $0.$1(this.$P) || this.$P(n);
        this.$1U()
    },
    $95: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .DeleteSnapViewEntriesAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("DeleteSnapViewEntries",
                Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction
    .$B = function() { return new Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction };
Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction.prototype = {
    $2t: function() {
        var n = this, t = this;
        return this.$1k(Object,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$zf("SnapData"),
            function() { n.$1U() },
            function(n) { t.$1z(n) }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction = function() {
    this.$$d_$21L = Function.createDelegate(this, this.$21L);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("PopulateTileData", Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction, r, u;
    return i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1Yl, r = t, $0.$1(r) ||
    (u = r.QueryValue, i.$1n1 = u.forcerefresh, i.$7j = u.pinnedtilemodel, i
        .$Ep = i.$9_3.get_Root().$1s.toLowerCase() === Microsoft.Crm.Client.Core.Framework.$1.toString(1).toLowerCase()
        ? 0
        : 1, $0.$1(r.OnSuccess) || (i.$7N = r.OnSuccess)), i
};
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction.prototype = {
    $1n1: !1,
    $7j: null,
    $Ep: 0,
    $hP: null,
    $dY: null,
    $7N: null,
    $3DQ: function() { return this.$2t() },
    $2t: function() {
        var n = this.$7j.$2TD(), t = $0.$1(n) ? 0 : n.length, i, r;
        return t
            ? t === 1
            ? (i = this, this.$1k(Object, n[0], function() { i.$1wT() }, this.$$d_$5J))
            : (r = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(n),
                function() { r.$1wT() },
                this.$$d_$5J))
            : this.$1wT(), 1
    },
    $1wT: function() {
        var n = new Array(0), u, f, e, t, o, i, r;
        this.$7j.get_$iC() && this.$7j.get_$iC() !== 3
            ? this.$7j.get_$iC() !== 1 ||
            this.$7j.get_$1d8().equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) ||
            (f = new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(11, this.get_$2C(), this.$7j.get_$UC(), 1, !1, this.$7j.get_$1d8().toString()), e = this.get_$zV()
                .$5c(f, this.get_$e()), Array.add(n, e))
            : (u = !$0.$1(this.$7j.get_$Fs()), (!u || this.$1n1) && this.$3Je(n));
        t = $0.$1(n) ? 0 : n.length;
        t
            ? t === 1
            ? (o = this, i = this, this.$1k(Object,
                n[0],
                function(n) { o.$21L([n]) },
                function() { i.$ze(i.$7j.get_$2h()) }))
            : (r = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(n),
                this.$$d_$21L,
                function() { r.$ze(r.$7j.get_$2h()) }))
            : this.$21L(null)
    },
    $21L: function(n) {
        if (!$0.$1(n)) {
            var t = n[0];
            this.$2QD(t)
        }
        this.$4Y()
    },
    $2QD: function(n) {
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.isInstanceOfType(n)) this.$7j.set_$Fs(n);
        else if (Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W)
            .isInstanceOfType(n)) {
            var t = n.get_$H(0);
            $0.$1(t) ? this.$ze(this.$7j.get_$2h()) : this.$7j.set_$Fs(t)
        }
    },
    $3Je: function(n) {
        var f = this.$9_3.get_Root().$p === 2,
            r = this.$7j.get_$UC() === this.$9_3.get_Root().$J,
            e = Microsoft.Crm.Client.Core.Models.Tiles.Decorators.$AV.isInstanceOfType(this.$7j),
            u = Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(this.$9_3.get_Root().get_ModelContext()),
            t = this.$9_3.get_Root().get_ModelContext(),
            i;
        f
            ? r && e && u && !$0.$1(t.$M)
            ? this.$7j.set_$Fs(t.$M)
            : r || !u || $0.$1(t.$M) || $0.$1(t.$M.$6E)
            ? this.$2TH(n)
            : (i = t.$M.$6E.getByRelationshipName(this.$7j
                .get_$3Jv()), !$0.$1(i) && i.get_count() > 0 && this.$7j.set_$Fs(i.get_entities()[0]))
            : this.$2TH(n)
    },
    $2TH: function(n) {
        var u = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$23(this.$Ep,
                    2,
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$ZO()),
            f = new Xrm.Objects.EntityReference(this.$7j.get_$UC(), this.$7j.get_$1d8()),
            e,
            t,
            r,
            i,
            o,
            s;
        if (this.$7j.get_$3O1().equals(new Microsoft.Crm.Client.Core.Framework
            .Guid("{D04E4181-ED85-4305-A3DC-3DA59C00F25B}"))) {
            for (e = new Microsoft.Crm.Client.Core.Models.Tiles.Factories.$IY, t = new Microsoft.Crm.Client.Core.Storage
                    .Common.ColumnSet(e.$1TE(this.$7j)), this.$7j.set_$1Iw(t), r = !1, i = 0;
                i < t.$3O.length;
                i++)
                if (o = t.$3O[i], o.toLowerCase() === this.$7j.get_$LW()) {
                    r = !0;
                    break
                }
            r || t.$3O.push(this.$7j.get_$LW())
        }
        this.$7j.get_$J6()
            ? this.$3UZ(f, u)
            : (s = this.get_$zV().$6F(f, this.$7j.get_$1Iw(), u, this.get_$e()), Array.add(n, s))
    },
    $3UZ: function(n, t) {
        var i = this;
        this.get_$2U7().$1yy(function() {
                var r = i.get_$zV().$6F(n, i.$7j.get_$1Iw(), t, i.get_$e());
                r.then(function(n) {
                        i.$2QD(n);
                        $0.$1(i.$7N) || i.$7N(null)
                    },
                    function(n) {
                        n.$10 === -2147220969 && i.$ze(i.$7j.get_$2h());
                        $0.$1(i.$1I_3) || i.$1I_3(null)
                    })
            },
            Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1di,
            "UpdateCachedData")
    },
    get_$zV: function() { return this.$dY || (this.$dY = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3) },
    get_$2U7: function() { return this.$hP || (this.$hP = new Microsoft.Crm.Client.Core.Models.$Iz) },
    $ze: function(n) {
        var t = this;
        this.get_$zV().$ky(n).then(function() { t.get_$zV().$X0(n.$GZ, t.get_$e()) }, this.$$d_$5J)
    },
    $4Y: function() {
        $0.$1(this.$7N) || this.$7N(null);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.$BU = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.$BU.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$BU.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("PopulateSwitchProcessFlyOut",
        Microsoft.Crm.Client.Application.ViewModels.$BU.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$BU.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.$BU, r;
    return i.$9_3 = n, r = t, $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), i
};
Microsoft.Crm.Client.Application.ViewModels.$BU.prototype = {
    $P: null,
    $2t: function() {
        if (!$0.$1(this.$9_3) && !$0.$1(this.$9_3.get_Root())) {
            var n = this.$9_3.get_Root().$7V("ProcessManager");
            if (!$0.$1(n))
                return this.$1k(Microsoft.Crm.Client.Core.ViewModels.$6n, n.$2TM(), this.$$d_$4Y, this.$$d_$5J), 1
        }
        return this.$4Y(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, null)), 0
    },
    $4Y: function(n) {
        $0.$1(this.$P) || $0.$1(n) || this.$P(n);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveActivityCreateButtonsAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveActivityCreateButtons",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction, r = t;
    return $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1y1, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction.prototype = {
    $2cM: function(n, t) {
        var f = t.get_$AB(), e = t.get_$1l(), u = {}, r, i;
        u.RefreshContext = this.$9_3;
        r = Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$2e1(e, f, "CreateCommand", { PrimaryModelName: t.get_$1l(), externalParameters: u }, !0);
        i = new Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor;
        i.ViewModelDescriptor = r;
        i.ViewDescriptor = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(r);
        n.add(i)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveListByDisplayNameAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction, r = t;
    return i.$P = r.OnSuccessParameter, i.$1I_3 = r.OnFailureParameter, i.$1sz = r.ListDisplayNameParameter, i.$T = r
        .EntityLogicalNameParameter, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction.prototype = {
    $P: null,
    $1sz: null,
    $T: null,
    $2t: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi
            .$O3(11,
                Microsoft.Crm.Client.Core.Framework.$6.get_$2C(),
                this.$T,
                0,
                !1,
                null,
                1,
                this.$1sz
                .toUpperCase());
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(n, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$1z), 1
    },
    $4Y: function(n) {
        n.get_$3XJ() > 0
            ? (this.$P(n.get_$H(0)), this.$1U())
            : this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$h("No list with given display name found."))
    }
};
Microsoft.Crm.Client.Application.ViewModels.$77 = function() {
    this.$$d_$2PG = Function.createDelegate(this, this.$2PG);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.$77.initializeBase(this);
    this.$5Y = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
};
Microsoft.Crm.Client.Application.ViewModels.$77.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveSubjectTreeWithData",
        Microsoft.Crm.Client.Application.ViewModels.$77.$3N4)
};
Microsoft.Crm.Client.Application.ViewModels.$77.$3N4 = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.$77, r = t;
    return Microsoft.Crm.Client.Application.ViewModels.$77.$1Dd(i, n, r), i
};
Microsoft.Crm.Client.Application.ViewModels.$77.$2ij = function(n, t) {
    var r = t.QueryValue.toString(), i;
    n.$1cr = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(r);
    n.$20g = r;
    i =
        "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<entity name='subject'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='subjectid' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='title'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='parentsubject'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<order attribute='createdon' descending='false' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/fetch>";
    n.$1cq = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(i);
    n.$20d = i
};
Microsoft.Crm.Client.Application.ViewModels.$77.$1Dd = function(n, t, i) {
    var r = t;
    n.$9_3 = r;
    n.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yf;
    n.$P = r.$$d_$4Y;
    n.$1I_3 = r.$$d_$5J;
    Microsoft.Crm.Client.Application.ViewModels.$77.$2ij(n, i)
};
Microsoft.Crm.Client.Application.ViewModels.$77.prototype = {
    $P: null,
    $5Y: null,
    $vz: null,
    $15p: null,
    $er: !1,
    $1cq: null,
    $1cr: null,
    $20d: null,
    $20g: null,
    $bo: 0,
    $2t: function() { return this.$1m8(), 1 },
    $1m8: function() {
        if ($0.$1(this.$1cq) || $0.$1(this.$1cr)) this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(0));
        else {
            if (this.$9_3.get_$Dp()) {
                this.$1U();
                return
            }
            this.$2kE();
            this.$Qn()
        }
    },
    $2kE: function() {
        this.$vz = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(this.$1cq, this.$20d);
        this.$15p = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(this.$1cr, this.$20g);
        var n = $0.$1(this.$9_3.get_$1N()) ? "" : this.$9_3.get_$1N().get_Id();
        this.$vz.$Jv(n, null, null, null, this.$5Y);
        this.$15p.$Jv(n, null, null, null, this.$5Y);
        this.$vz.$2u = this.$15p.$2u = 100;
        this.$vz.$Od = this.$15p.$Od = !0
    },
    $Qn: function() {
        var n, t, i;
        this.$vz.$B6 === 1 && !0 ? (n = 1, t = this.$bo) : (n = 2, t = 1);
        i = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(this.$2e5(n, t)),
            function(n) {
                n.length < 2 ? i.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999)) : i.$4Y(n[0], n[1])
            },
            this.$$d_$5J)
    },
    $2e5: function(n, t) {
        var i = [];
        return Array.add(i,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(this.$vz, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$23(n, t), this.get_$e())), Array
            .add(i,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$36(this.$15p, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$23(n, t), this.get_$e())), i
    },
    $4Y: function(n, t) {
        var r, i;
        this.$er = !0;
        r = this.$9_3;
        $0.$1(this.$P) || r.$3P
            ? this.$1U()
            : (i = this, this.$Hv(function() {
                    i.$P(i.$2eO(n, t));
                    i.$1U()
                },
                Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yg))
    },
    $2eO: function(n, t) {
        var i = this.$1PE(n), r = this.$1PE(t);
        return i.$uH = r.$uH = this.$$d_$2PG, new Microsoft.Crm.Client.Core.Models.$T9(i, r)
    },
    $1PE: function(n) { return Microsoft.Crm.Client.Core.Models.$1E.$B(n) },
    $5J: function(n) {
        if (n.$10 === -2147093999) {
            var t = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty();
            this.$4Y(t, t)
        } else this.$1z(n)
    },
    $2PG: function(n) {
        $0.$1(this.$9_3) ||
            this.$9_3.get_$Dp() ||
            n.$10 === -2147093999 ||
            (this.$er && this.$9_3.$Qm(n), Microsoft.Crm.Client.Core.Framework.Trace.logError(1, n.$E))
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("RetrieveMultipleEntityAttributeMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction.$30k)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction.$30k = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction, r;
    return i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yR, r = t, i.$1wd = r
        .PrimaryEntityName, i.$Wj = r.PrimaryAttributeFieldNames, i.$GW = r.RelatedAttributeFieldNames, i.$LO = r
        .RelationshipList, i.$P = r.OnSuccess, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction.prototype = {
    $P: null,
    $1wd: null,
    $Wj: null,
    $GW: null,
    $LO: null,
    $2t: function() {
        var n = {}, r, u, o;
        n["?primary?"] = null;
        var s = !$0.$1(this.$Wj) && this.$Wj.length > 0, t = [], i = [];
        s &&
        (Array.add(t,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$1wd, this.$Wj), this.get_$e())), Array
            .add(i, "?primary?"));
        r = this.$GW;
        for (u in r) {
            var f = { key: u, value: r[u] }, e = f.key, h = this.$LO[e].TargetEntityTypeName;
            Array.add(t,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(h, f.value), this.get_$e()));
            Array.add(i, e)
        }
        return o = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t),
            function(t) {
                for (var u = 0, f = t, s = f.length, r = 0; r < s; ++r) {
                    var h = f[r], e = h.$21O(), c = e[0].get_$e1();
                    n[i[u].toString()] = e;
                    u++
                }
                o.$Fn(n)
            },
            this.$$d_$95), 1
    },
    $Fn: function(n) {
        $0.$1(this.$P) || this.$P(n);
        this.$1U()
    },
    $95: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.$Bp = function() {
    Microsoft.Crm.Client.Application.ViewModels.$Bp.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$Bp.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveMultipleEntityForNoteAction",
        Microsoft.Crm.Client.Application.ViewModels.$Bp.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$Bp.$B = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.$Bp, i = t;
    return $0.$1(i.OnSuccess) || (r.$P = i.OnSuccess), $0.$1(i.OnFailure) || (r.$1I = i.OnFailure), r.$1t4 = i
        .QueryValue, r
};
Microsoft.Crm.Client.Application.ViewModels.$Bp.prototype = {
    $P: null,
    $1I: null,
    $1t4: null,
    $2t: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$23(1, 1, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$ZO()),
            t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$36(this.$1t4,
                    n,
                    Microsoft.Crm.Client.Core.Framework.$15.$5v("", "RetrieveMultipleEntityForNoteAction")),
            i = this,
            r = this;
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            t,
            function(n) { i.$P(n) },
            function(n) { r.$1I(n) }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveMultipleEntityMetadataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveMultipleEntityMetadataAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction, r, u;
    return $0.$1(n)
        ? Object.isInstanceOfType(t) && (u = t, i.$s0 = u.EntityLogicalNamesParameter, i.$P = u.OnSuccessParameter)
        : Microsoft.Crm.Client.Core.ViewModels.Interfaces.$Do.isInstanceOfType(n) &&
        (r = n, i.$s0 = r.get_$2mo(), i.$P = r.get_$2mp(), i.$9_3 = r), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction.prototype = {
    $P: null,
    $s0: null,
    $2t: function() {
        var t, n, i;
        if (!$0.$1(this.$s0) && this.$s0.length > 0) {
            for (t = [], n = 0; n < this.$s0.length; n++)
                Array.add(t, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$s0[n], this.get_$e()));
            return i = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t),
                function(n) { i.$4Y(n) },
                this.$$d_$1z), 1
        }
        throw Error.argument("entityLogicalNames", "entityLogicalNames is not provided");
    },
    $4Y: function(n) {
        $0.$1(this.$P) || this.$P(n);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveApplicationSettingsAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveApplicationSettings",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction, r = t;
    return $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction.prototype = {
    $P: null,
    $2t: function() {
        var u = new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("ApplicationSettingsID"),
            n = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor)),
            w = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingsSignoutCommand",
                    "Button",
                    "SignOutCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Signout"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0),
            f,
            e,
            o,
            s,
            h,
            i,
            c,
            l,
            t,
            r,
            a,
            v,
            y,
            p;
        return n.add(w), Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$1T.get_$33()
            .get_$1Tp() &&
            (f = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingsReconfigureCommand",
                    "Button",
                    "ReconfigureCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Reconfigure"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0), n.add(f)), Microsoft.Crm.Client.Core.Framework.UserAgent.getInstance().get_$1tb() &&
        (e = new Microsoft.Crm.Client.Core.Models.Descriptors
            .CommandControlDescriptor("SettingsDiagnosticsCommand",
                "Button",
                "ShowDiagnosticsAndErrorsCommand",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Diagnostics_ClientExtensions"),
                n.get_Count() + 1,
                "System",
                "Settings",
                "Symbol",
                null,
                !0), n.add(e)), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("LandingPage") &&
            (o = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingsLandingPageCommand",
                    "Button",
                    "ShowLandingPageSettingsCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_LandingPage"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0), n.add(o)), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .get_$1i().isFeatureEnabled("PaneStackingOnPhones") &&
            Microsoft.Crm.Client.Core.Framework.$6.get_$4R() &&
            (s = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingPaneStackingCommand",
                    "Button",
                    "ShowPaneStackingSettingCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_PaneStacking_Label"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0), n.add(s)), !$0.$1(Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                .get_$5p()) &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$5p().get_$3Ry() &&
            (h = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("DeviceSettingsCommand",
                    "Button",
                    "ShowDeviceSettingsCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_DeviceIntegration"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0), n.add(h)), i = Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("Web.NavBar.SettingsLearningPath_OptIn_Caption"), c = Xrm.Internal
            .isGuidedHelpEnabledForUser(), c &&
        (i = Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("Web.NavBar.SettingsLearningPath_OptOut_Caption")), l = new Microsoft.Crm.Client.Core.Models.Descriptors
            .CommandControlDescriptor("GuidedHelpSettingsCommand",
                "Button",
                "GuidedHelpSettingsCommand",
                i,
                n.get_Count() + 1,
                "System",
                "Settings",
                "Symbol",
                null,
                !0), n.add(l), t = {}, t.protocol = "http:", r = Microsoft.Crm.Client.Core.Framework.Common.$2
            .$6("Settings_Help_Link"), r += "&clcid=0x" +
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().get_$tc().toString(16), t
            .target = r, a = new Microsoft.Crm.Client.Core.Models.Descriptors
            .CommandControlDescriptor("SettingsHelpCommand",
                "Button",
                "UrlLauncherCommand",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Help"),
                n.get_Count() + 1,
                "System",
                "Settings",
                "Symbol",
                t,
                !0), n.add(a), v = new Microsoft.Crm.Client.Core.Models.Descriptors
            .CommandControlDescriptor("SettingsAboutCommand",
                "Button",
                "ShowAboutInformationCommand",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_About"),
                n.get_Count() + 1,
                "System",
                "Settings",
                "Symbol",
                null,
                !0), n.add(v), Microsoft.Crm.Client.Core.ViewModels.$n.$1rz() &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("MobileClientOffline") &&
            !Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$1Vb() &&
            (y = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingsOfflineCommand",
                    "Button",
                    "OfflineOptinCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_Offline"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !1), n.add(y)), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .get_$1i().isFeatureEnabled("MobileClientOffline") &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
            .isFeatureEnabled("MobileClientOfflineAutoOptin") &&
            Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.$2LV() &&
            (p = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor("SettingsOfflineDisableCommand",
                    "Button",
                    "OfflineOptOutCommand",
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Settings_OfflineOptOut"),
                    n.get_Count() + 1,
                    "System",
                    "Settings",
                    "Symbol",
                    null,
                    !0), n.add(p)), u.Controls = n
            .toArray(), $0.$1(this.$P) || this.$P(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, u)), this
            .$1U(), 0
    }
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$2eo = Function.createDelegate(this, this.$2eo);
    Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("ExecuteQuickFindAction",
                Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction;
    return t.$P = i.$$d_$4Y, t.$1I_3 = i.$$d_$5J, t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction.prototype = {
    $P: null,
    $s6: null,
    $9H: null,
    $1v: null,
    $6v: null,
    $X3: null,
    $2t: function() {
        var t, n;
        return Microsoft.Crm.Client.Core.Framework.$3.$1S(this.$9_3.$6v) ||
        (this.$X3 = this.$9_3.get_EntityNames(), t = this.$9_3, this.$6v = this.$9_3.$6v, n = new Xrm.Sdk.Internal
            .MobileClientOfflineRequest(new Xrm.Sdk
                .ExecuteQuickFindRequest(this.$6v, null, this.$X3),
                this.$$d_$2eo), this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$2B(n, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)), 1
    },
    $4Y: function(n) {
        $0.$1(this.$s6) ||
        (Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("LoadedSearchData"), this.$s6.stop(), this
            .$s6 = null);
        $0.$1(this.$P) || this.$P(n.result);
        this.$1U()
    },
    $5J: function(n) {
        $0.$1(this.$s6) || (this.$s6.stop(), this.$s6 = null);
        $0.$1(this.$1I_3) || this.$1I_3(n);
        this.$1z(n)
    },
    $2eo: function() {
        var t = MscrmComponents.DeferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Framework.$4),
            i = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(16, this.get_$2C(), this.$X3[0], 1, !0, null, 3),
            n = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(i, this.get_$e()).then(function(i) {
                var r, f, o, s;
                if (i.get_$3XJ()) {
                    r = i.get_$H(0);
                    for (var e = i.$21O(), h = e.length, u = 0; u < h; ++u)
                        if (f = e[u], f.$1P.match(new RegExp("Quick\\s?Find"))) {
                            r = f;
                            break
                        }
                    n.$9H = r.get_$Gz();
                    n.$1v = new Microsoft.Crm.Client.Core.Storage.DataApi.$SE(n.$9H, n.$6v, n.$X3);
                    o = n.$1v.$9H.$AM(2);
                    Microsoft.Crm.Client.Core.ViewModels.$n.$DF() && Microsoft.Crm.Client.Core.Framework.$3.$1S(o)
                        ? (s = [
                            new Xrm.Sdk.QuickFindResult(n.$1v.$X3[0],
                                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                .EntityCollection(new Array(0), !1, 0, !1, n.$1v),
                                -2147093989)
                        ], t.resolve(new Xrm.Sdk
                            .ExecuteQuickFindResponse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                .QuickFindResultCollection.createFromEntities(s))))
                        : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$36(n.$1v, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), n.get_$e()).then(function(i) {
                                var r = [new Xrm.Sdk.QuickFindResult(n.$1v.$X3[0], i, 0)];
                                t.resolve(new Xrm.Sdk
                                    .ExecuteQuickFindResponse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                        .QuickFindResultCollection.createFromEntities(r)))
                            },
                            function(n) {
                                Microsoft.Crm.Client.Core.Framework.$C
                                    .$C("DataSource_ExecuteQuickFind_RetrieveMultiple_LocalError", 1005, n.$E);
                                t.reject(n)
                            })
                } else
                    n.$1k(Xrm.Sdk.Response,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$2B(new Xrm.Sdk.ExecuteQuickFindRequest(null, null, n.$X3), n.get_$e()),
                        n.$$d_$4Y,
                        n.$$d_$5J)
            },
            this.$$d_$5J), t.promise()
    }
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("ExecuteExternalSearchAction",
                Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction.$B = function(n) {
    var t = null, i = new Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction;
    if (Microsoft.Crm.Client.Core.ViewModels.MultiItemListViewModel.isInstanceOfType(n))
        if ("HeaderGroup" in n.$2.$F) t = n.$2.$F.HeaderGroup.$F.SearchBox, i.$1YO = n.$1p.$BQ;
        else return null;
    else t = n;
    return i.$P = t.$$d_$4Y, i.$1I_3 = t.$$d_$5J, i.$9_3 = t, i
};
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction.prototype = {
    $P: null,
    $1YO: 0,
    $2u: 0,
    $us: null,
    $1QO: null,
    $1VP: !1,
    $1Eq: null,
    $2t: function() {
        var n = this.$9_3;
        return this.$2u = n.get_RelevanceSearchPageSize(), Microsoft.Crm.Client.Core.Framework.$3.$1S(n.$6v) ||
        (n.$Kg && n.$Kg.length === 1
            ? (this.$1VP = !0, this.$1k(Object,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1yi(n.$Kg[0], this.get_$e()),
                this.$$d_$4Y,
                this.$$d_$5J))
            : this.$2IX()), 1
    },
    $329: function(n, t, i, r, u, f, e, o, s, h, c) {
        var a = "", b = this.$1pN(2), k = this.$1pN(6), d = this.$9_3, v, l, p, w, y;
        if ($0.$1(d.get_FacetPaneViewModel()) ||
        (a += "&facet=(@search.entityname," +
            k +
            "),(ownerid," +
            k +
            "),(modifiedon," +
            b +
            "),(createdon," +
            b +
            ")"), t.length === 1 && !$0.$1(s))
            for (v = 0; v < s.length; v++)
                a += ",(" + t[0] + "." + s[v].get_$1l() + "," + this.$1pN(s[v].get_$5M()) + ")";
        if (l = "", a += "&search=" + CrmEncodeDecode.CrmUrlEncode(n),
            t.length > 0 && (a += "&searchEntities=" + t.join(",")), i) {
            if (p = f[t[0]].toString() === "1", w = e[t[0]]
                .toString() ===
                "1", p)
                for (y = 0; y < c.length; y++)
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$i(c[y]).get_$9N() &&
                        (a += "," + c[y]);
            w && (a += ",annotation");
            p && (l += "activities:regardingobjecttypecode eq '" + t[0] + "'");
            w && (p && (l += ","), l += "annotation:objecttypecode eq '" + t[0] + "'")
        }
        return $0
            .$1(h) ||
            h === "" ||
            (l !== "" && (l += " and "), l += h), $0
            .$1(o) ||
            o === "" ||
            ("" !== l && (l += ","), l += o), l !== "" && (a += "&$filter=" + l), a +=
            "&$top=" + Math.min(r, 1e3).toString(), 0 < u &&
            (a += "&$skip=" + Math.min(Math.max(0, u * r), 1e5).toString()), a
    },
    $1pN: function(n) {
        switch (n) {
        case 2:
            return"values:" +
                this.$1Cd("year", -1) +
                "|" +
                this.$1Cd("month", -1) +
                "|" +
                this.$1Cd("week", -1) +
                "|" +
                this.$1Cd("day", -1) +
                "|" +
                this.$1Cd("today", 0);
        case 5:
        case 8:
        case 3:
            return"interval:100";
        default:
            return"count:100"
        }
    },
    $1Cd: function(n, t) {
        var i = new Date;
        switch (n) {
        case"year":
            i.setFullYear(i.getFullYear() + t);
            break;
        case"month":
            i.setMonth(i.getMonth() + t);
            break;
        case"week":
            i.setDate(i.getDate() + t * 7);
            break;
        case"day":
            i.setDate(i.getDate() + t)
        }
        return i.toJSON()
    },
    $4Y: function(n) {
        var i, h, t, e, c, o, s, l, r, u, f, p;
        if (this.$1VP) {
            if (i = this.$9_3, h = $.parseJSON(n.Value), this
                .$1VP = !1, t = "", $0.$1(i.$Kg) || i.$Kg.length !== 1 || (t = i.$Kg[0]), e = new Array(0), this
                .$1QO = {}, !$0.$1(t)) {
                c = h[t];
                o = c.attributeNames;
                for (s in o)
                    l = { key: s, value: o[s] }, r = l.value, Array.add(e, r.logicalName), this.$1QO[r.logicalName] = r
                        .LookUpOTC
            }
            u = this;
            this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
                this.$Ot(t, e),
                function(n) { $0.$1(n) || (u.$1Eq = n.get_$3XJ() ? n.$21O() : new Array(0), u.$2IX()) },
                this.$$d_$5J)
        } else {
            var a = {},
                v = this.$9_3,
                w = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.$64
                    .$2rH(n,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V(),
                        this.$2u,
                        this.$1YO + 1,
                        a,
                        this.$us),
                y = new Array(1),
                b = new Xrm.Sdk.QuickFindResult("multiItem", w, 0);
            y[0] = b;
            f = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection(y);
            p = $0.$1(v.$Kg) ? "" : v.$Kg[0];
            f.$1BU = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.$64
                .$2rI(n, this.$1Eq, p, this.$1QO);
            f.$1DY = a;
            $0.$1(this.$P) || this.$P(f);
            this.$1U()
        }
    },
    $Ot: function(n, t) {
        var i = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
                Microsoft.Crm.Client.Core.Framework.$4),
            r = this,
            u = this;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(n, t), this.get_$e())
            .then(function(n) { i.resolve(n) }, function(n) { i.reject(n) }), i.promise()
    },
    $2IX: function() {
        for (var i, u, n = this.$9_3, r = n.$J9.get_Items(), f = r.length, t = 0; t < f; ++t)
            if (i = r[t], i.$I === "multiItempane") {
                this.$us = i.$F.multiItemList.$us;
                break
            }
        u = this.$329(n.$6v,
            n.get_EntityNames(),
            n.$c2,
            this.$2u,
            this.$1YO,
            n.$Vy,
            n.$Z7,
            n.$6o,
            this.$1Eq,
            n.$O0,
            n.get_ItemValues());
        this.$1k(Object,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$1m7(u, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)
    },
    $5J: function(n) {
        $0.$1(this.$1I_3) || this.$1I_3(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.PingServerAction = function() {
    this.$$d_$2mQ = Function.createDelegate(this, this.$2mQ);
    Microsoft.Crm.Client.Application.ViewModels.PingServerAction.initializeBase(this);
    this.$1Yf = this.$$d_$2mQ
};
Microsoft.Crm.Client.Application.ViewModels.PingServerAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("PingServer", Microsoft.Crm.Client.Application.ViewModels.PingServerAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.PingServerAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.PingServerAction;
    return t.$9_3 = n, t
};
Microsoft.Crm.Client.Application.ViewModels.PingServerAction.prototype = {
    $1Yf: null,
    $2t: function() {
        return Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.add_$Tc(this.$1Yf), Microsoft.Crm.Client
            .Core.Framework.AuthenticationManager.$D.$1i2(), 1
    },
    $2mQ: function(n, t) {
        var i, r;
        if (Microsoft.Crm.Client.Core.Framework.AuthenticationManager.$D.remove_$Tc(this.$1Yf), t
            .$L1)
            t.$Sh.$10 === -2147093999
                ? this.$1wF(null)
                : Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$Dc.$19F(0, t.$Sh.$T7());
        else if (Microsoft.Crm.Client.Core.ViewModels.$n.$DF() &&
            !$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o()) &&
            !$0.$1(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R()) &&
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$1o().get_$6R().get_$3C())
            if (Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance()) {
                Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !1;
                i = new Date;
                Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("UpSync.Started", 1);
                Microsoft.Crm.Client.Core.Framework.$C.$C("StartPlayback", 1004, "Playback Started");
                r = Xrm.Internal.getResourceString("Msg_Progress_MOCA_Dialog");
                Xrm.Internal.progress(r, 40, 100, 0);
                var f = this, e = this, u = this;
                Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.get_DefaultInstance().$1cj()
                    .then(function(n) {
                            var r = new Date,
                                u = r - i,
                                f = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
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
                                        u),
                                t;
                            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(f);
                            Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("UpSync.Completed", 1);
                            n.$1KV ||
                            (t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                                .$O7("1007",
                                    "MOCADataSyncSuccess",
                                    "",
                                    "",
                                    0,
                                    Microsoft.Crm.Client.Core.Offline.Upsync.Common.$5Z.toString(n.$qP),
                                    "",
                                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                                    (new Date).toString(),
                                    "",
                                    0), Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter
                                .get_Instance()
                                .$1w(t));
                            Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !0
                        },
                        function(n) {
                            var r = new Date, u = r - i, t;
                            Microsoft.Crm.Client.Core.Framework.PerformanceMarker.$6Y("UpSync.Failed", 1);
                            t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
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
                            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t);
                            n.$E.toLowerCase() !== "no records found" &&
                                Microsoft.Crm.Client.Core.Framework.Trace
                                .logError(1004, "Error occured while UpSync. Error details -- " + n.$E);
                            Microsoft.Crm.Client.Core.Storage.DataApi.$H.$Lg = !0
                        }).always(function() {
                        Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$bt > 0 &&
                        (Microsoft.Crm.Client.Core.Framework.$C
                            .$1F("PlaybackErrorCount",
                                1004,
                                "Playback error count: " +
                                Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$bt), u
                            .$3SI(Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$bt,
                                Microsoft.Crm.Client.Core.Offline.Upsync.BatchManager.PlaybackManager.$jL));
                        u.$2QR();
                        window.setTimeout(function() { Xrm.Internal.progress("", 0, 0, 0) }, 1e3)
                    })
            } else Microsoft.Crm.Client.Core.Framework.Trace.logError(1004, "Unable to instantiate playback manager.");
        else this.$2QR()
    },
    $3SI: function(n, t) {
        if (n > 0) {
            var u = this,
                f = function() { u.$2Wg() },
                e = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Sync_Status_Error_Message"),
                r = "",
                i = e;
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
                f,
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_OK_Text"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Show_Details_Text"))
        }
    },
    $2Wg: function() {
        var n = new Microsoft.Crm.Client.Core.Commands.$33(null, 13);
        n.$J = "syncerror";
        n.$19 = {};
        n.$19.ListDefinitionId = "F1203E8B-6C6A-4210-906E-8428CB1FDE68";
        n.execute();
        n.dispose()
    },
    $2QR: function() {
        var n = this, t = this;
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$uc()
            .then(function(t) { t ? n.$1U() : n.$1wF(null) }, function(n) { t.$1wF(n) })
    },
    $1wF: function(n) {
        $0.$1(n) ? n = Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093998) : n.$10 = -2147093998;
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveDataSetMetadataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveDataSetMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction.$JF = function(n, t) {
    var f = n, i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction, u, r;
    return i.$9_3 = f, u = t, r = u.QueryValue, i.$T = r.entityLogicalName, i.$A3 = r.viewId, i.$P = u
        .OnSuccess, "isLookup" in r &&
        r.isLookup &&
        i.$A3 === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() &&
        (i.$1Uw = !0), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction.prototype = {
    $P: null,
    $T: null,
    $A3: null,
    $1Uw: !1,
    $2t: function() {
        var t = this.$1Uw
                ? new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(16, this.get_$2C(), this.$T, 1, !0, null, 2)
                : new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(16, this.get_$2C(), this.$T, 1, !1, this.$A3),
            i = this.$1Uw
                ? new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(30, this.get_$2C(), this.$T, 1, !0, null, 2)
                : new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(30, this.get_$2C(), this.$T, 1, !1, this.$A3),
            r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(t, this.get_$e()),
            u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(i, this.get_$e()),
            n = this,
            f = this;
        return this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(r, u),
            function(t) {
                ($0.$1(t) || t.length < 2) && n.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094003));
                var i = t;
                n.$33t(i)
            },
            function(n) { f.$5J(n) }), 1
    },
    $33t: function(n) {
        this.$P(n);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction = function(n) {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction.initializeBase(this);
    this.$1in = n
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveFilteredProcesses",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction.$B = function(n, t, i) {
    var u = n, e = u.get_Root(), r, f;
    return i = i ||
        new Microsoft.Crm.Client.Core.Models.ProcessControl.Builders
        .$MB(u, new Microsoft.Crm.Client.Core.Models.ProcessControl.Builders.$M8(e)), r = new Microsoft.Crm.Client
        .Application.ViewModels.RetrieveFilteredProcessesAction(i), r.$9_3 = u, r.$60 = Microsoft.Crm.Client.Core
        .Framework.SchedulerPriorities.$1HI, f = t, $0.$1(f.OnSuccess) || (r.$P = f.OnSuccess), r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction.prototype = {
    $1in: null,
    $2t: function() {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen.RetrieveFilteredProcessesRequest(this.$9_3.get_$2W()), this.get_$e()),
            i = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(15, this.get_$2C(), this.$9_3.get_$2W(), 1),
            r = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(i, this.get_$e()),
            n = this,
            u = this;
        return this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(t, r),
            function(t) {
                if (t.length === 2 &&
                    !$0.$1(t[0]) &&
                    t[0].name === "RetrieveFilteredProcesses" &&
                    Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W)
                    .isInstanceOfType(t[1])) {
                    var i = t[0].processes, r = t[1];
                    n.$2TE(i, r)
                } else n.$6j(null)
            },
            function(n) {
                var t = n;
                u.$3Mq(t)
            }), 1
    },
    $1Rf: function(n) {
        for (var r, i = new Array(0), t = 0;
            t < n.get_count();
            t++
        ) r = n.get_entities()[t], i[t] = this.$1in.$Ao(r, t);
        return i
    },
    $1TY: function() {
        this.$2TE(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty(),
            new(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W)))
    },
    $3Mq: function(n) { n.$10 === -2147093999 ? this.$1TY() : this.$1z(n) },
    $2TE: function(n, t) {
        var i, u, f, e, r, o, s;
        if (!this.$9_3.get_$Dp()) {
            for (i = new Array(0), u = 0; u < n.get_count(); u++) {
                for (f = n.get_$H(u), e = !1, r = 0; r < t.get_$3XJ(); r++)
                    if ((!Microsoft.Crm.Client.Core.Framework.$6.get_$k() || !this.$38D(t.get_$H(r))) &&
                        (o = t.get_$H(r).$g.toString(), s = f.$N.Id.toString(), o === s)) {
                        e = !0;
                        break
                    }
                e && (i[i.length] = f)
            }
            var h = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection(i, !1, i.length, !1),
                c = this.$1Rf(h),
                l = new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("change_process", c, 0),
                a = new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, l);
            this.$P(a)
        }
        this.$1U()
    },
    $38D: function(n) {
        var u = n.get_$5Z(), o = n.$6h, t, i, f, r, e;
        if (!$0.$1(u)) {
            t = u.ChildViewModels;
            for (i in t)
                if (f = { key: i, value: t[i] }, r = f
                    .value, r.TypeName === "ProcessEntity" &&
                (e = Microsoft.Crm.Client.Core.ViewModels.$1Q
                    .$CA(String, "EntityLogicalName", r.Properties), e !== o)) return!0
        }
        return!1
    },
    $P: null
};
Microsoft.Crm.Client.Application.ViewModels.$Bq = function() {
    this.$$d_$3Md = Function.createDelegate(this, this.$3Md);
    this.$$d_$3Me = Function.createDelegate(this, this.$3Me);
    Microsoft.Crm.Client.Application.ViewModels.$Bq.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$Bq.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveMultipleProcessInstances",
        Microsoft.Crm.Client.Application.ViewModels.$Bq.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$Bq.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.$Bq, r, u;
    return i.$9_3 = n, r = t
            .QueryValue, "entityLogicalName" in r && (i.$T = r.entityLogicalName),
        "currentEntityId" in r && (i.$VA = r.currentEntityId), u = t, $0.$1(u.OnSuccess) || (i.$P = u.OnSuccess), i
};
Microsoft.Crm.Client.Application.ViewModels.$Bq.prototype = {
    $VA: null,
    $T: null,
    $P: null,
    $1I: null,
    $2t: function() {
        return $0.$1(this.$VA) &&
            (this.$VA = new Microsoft.Crm.Client.Core.Framework.Guid(this.$9_3.get_ModelContext().get_Id())), this
            .$1k(Object,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$hA(this.$T, this.$VA.toString(), this.get_$e()),
                this.$$d_$3Me,
                this.$$d_$3Md), 1
    },
    $3Me: function(n) {
        $0.$1(this.$P) || this.$P(n);
        this.$1U()
    },
    $3Md: function(n) {
        $0.$1(this.$1I) || this.$1I();
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.$6J = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.$6J.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$6J.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveMultipleRecords",
        Microsoft.Crm.Client.Application.ViewModels.$6J.$1pr)
};
Microsoft.Crm.Client.Application.ViewModels.$6J.$1pr = function(n, t) {
    var i, u;
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$21K(Microsoft.Crm.Client.Core.ViewModels.$4B.isInstanceOfType(n),
        "Action context is not IMultipleEntityAttributeFormViewModel");
    i = new Microsoft.Crm.Client.Application.ViewModels.$6J;
    u = n;
    i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB;
    i.$9_3 = u;
    var r = t, f = r.EntityLogicalName, e = r.EntityId;
    return i.$CO = new Xrm.Objects.EntityReference(f, new Microsoft.Crm.Client.Core.Framework.Guid(e)), i
        .$3S = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(r.PrimaryAttributeFieldNames), i.$Ty = r
        .RelatedEntitiesQuery, i.$1Zn = r.RelatedAttributes, i.$4U = r.RetrieveOptions, i.$P = r.OnSuccess, i
};
Microsoft.Crm.Client.Application.ViewModels.$6J.prototype = {
    $P: null,
    $Ty: null,
    $1Zn: null,
    $2t: function() {
        var n = this.$9_3;
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$aS(this.$CO,
                this.$3S,
                this.$3S,
                this.$Ty,
                this.$4U,
                this.get_$e(),
                Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(n) ? n.$28p(this.$CO) : null),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        var e = [], i, f, h, t, c;
        if (n.$6E.$7R)
            for (var o = n.$6E
                         .$7R,
                l = o.length,
                r = 0;
                r < l;
                ++r)
                if (i = o[r], i
                    .get_$2M() &&
                    i.get_$2M().get_entities())
                    for (var s = i.get_$2M()
                                 .get_entities(),
                        a = s.length,
                        u = 0;
                        u < a;
                        ++u)
                        f = s[u], f &&
                        (h = i.get_$4u().$97 in this.$1Zn ? this.$1Zn[i.get_$4u().$97] : null, Array
                            .add(e, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$16Q(f, h)));
        t = this;
        c = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(e),
            function() {
                var i = Microsoft.Crm.Client.Core.Models.$BF.$2zL(n);
                $0.$1(t.$P)
                    ? t.$9_3.UpdateRecordModel(i).done(function() {
                        Microsoft.Crm.Client.Core.Framework.$6.get_$4R() && t.$2MR(t.$9_3);
                        t.$1U()
                    })
                    : (t.$P(i), t.$1U())
            },
            function(n) { c.$5J(n) })
    },
    $2MR: function(n) {
        var i, r, t;
        if (Microsoft.Crm.Client.Core.Framework.$1J.$l(n.$F) > 0) {
            i = n.$F;
            for (r in i)
                t = { key: r, value: i[r] }, Microsoft.Crm.Client.Core.ViewModels.PanoramaItemViewModel
                    .isInstanceOfType(t.value)
                    ? t.value.$1t8()
                    : Microsoft.Crm.Client.Core.ViewModels.$2Y.isInstanceOfType(t.value) && this.$2MR(t.value)
        }
    }
};
Microsoft.Crm.Client.Application.ViewModels.$6K = function() {
    Microsoft.Crm.Client.Application.ViewModels.$6K.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$6K.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveNavigationEntities",
        Microsoft.Crm.Client.Application.ViewModels.$6K.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$6K.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.$6K, r = t;
    return $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), Microsoft.Crm.Client.Application.ViewModels.$6K.$36f(i, n), i
};
Microsoft.Crm.Client.Application.ViewModels.$6K.$36f = function(n, t) {
    n.$9_3 = t;
    n.$VA = t.get_ModelContext().get_Id();
    n.$14S = t.$1IX;
    n.$ux = t.get_$2RX();
    n.$1Zg = t.get_$3JV();
    n.$U6 = t
};
Microsoft.Crm.Client.Application.ViewModels.$6K.prototype = {
    $P: null,
    $VA: null,
    $14S: null,
    $ux: null,
    $1Zg: null,
    $U6: null,
    $2t: function() {
        if (!$0.$1(this.$14S) && !$0.$1(this.$ux)) {
            var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$14m(this.$VA, this.$14S, this.$ux, this.$1Zg, this.get_$e()),
                i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$ux, this.get_$e()),
                n = this,
                r = this;
            this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(t, i),
                function(t) {
                    var r = t[0], u = t[1], i = r;
                    i.ShowCreate = i.ShowCreate && n.$3Rx(u);
                    n.$3MC(i)
                },
                function(n) { r.$3MB(n) })
        }
        return 1
    },
    $3Rx: function(n) {
        return!Microsoft.Crm.Client.Core.Framework.$6.get_$k() && (!n.$OV || n.$ZJ) ||
            Microsoft.Crm.Client.Core.Framework.$6.get_$k() && !n.$Dq
            ? !1
            : this.$14S === "lead" && this.$ux === "opportunity"
            ? !1
            : this.$14S === "quote" && this.$ux === "salesorder" ? !1 : !0
    },
    $3MC: function(n) {
        var i = this.$30u(), t;
        $0.$1(this.$P) ||
            $0.$1(n) ||
            $0.$1(i) ||
            (t = this.$1Rf(n, i), n.ShowCreate && (t[t.length] = this.$2hv(n.EntityLogicalName, i)), this.$P(t));
        this.$1U()
    },
    $1Rf: function(n, t) {
        for (var u, r = new Array(0), i = 0;
            i < n.NavigationEntities.length;
            i++
        ) u = n.NavigationEntities[i], r[i] = this.$2jv(u, i, t);
        return r
    },
    $2jv: function(n, t, i) {
        var h = n.PrimaryField, o = n.EntityLogicalName, c = o + "_navigationButton" + t, r = {}, s, u, e, f;
        return r.NextEntityId = n.Id, r.NextEntityLogicalName = o, r.TargetViewModel = this.$9_3, r
            .ActionType = "NavigateToNextEntity", r.NewActiveStageId = i.get_$66(), r.NewTraversedPath = i.get_$CU()
            .get_$GS(), s = new Microsoft.Crm.Client.Core.ViewModels.Commands.$BG(r), u = {}, u.StageViewModel = this
            .$U6, u.SuccessCommand = s, u.EntityId = new Microsoft.Crm.Client.Core.Framework.Guid(n.Id)
            .toString(), e = Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$2e1(c, h, "ProcessStageGateCommand", u), f = new Microsoft.Crm.Client.Core.Models.Descriptors
            .ComponentDefinitionDescriptor, f.ViewModelDescriptor = e, f.ViewDescriptor = Microsoft.Crm.Client.Core
            .Models.Descriptors.$U.$Gu(e), f
    },
    $2hv: function(n, t) {
        var i = {}, e, r, f, u;
        return i.RefreshContext = this.$9_3, i.IsSaveAndCloseButtonHidden = !0, i.IsSaveAndEditButtonHidden = !0, i
            .IsSaveAndProcessNavigateButtonHidden = !1, i.RelationshipAttribute = [this.$1Zg], i.ParentReference = this
            .$9_3.get_$1N().get_$Qf(), i.NewActiveStageId = t.get_$66(), i.NewTraversedPath = t.get_$CU()
            .get_$GS(), e = new Microsoft.Crm.Client.Core.Commands.CreateFormCommand(this.$9_3, n, i), r = {}, r
            .StageViewModel = this.$U6, r.SuccessCommand = e, f = Microsoft.Crm.Client.Core.Models.Descriptors.$U
            .$2e1("process_create_navigation_entity",
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("ProcessControl.CreateNew"),
                "ProcessStageGateCommand",
                r), u = new Microsoft.Crm.Client.Core.Models.Descriptors.ComponentDefinitionDescriptor, u
            .ViewModelDescriptor = f, u.ViewDescriptor = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(f), u
    },
    $30u: function() {
        var i = this.$U6.$A1;
        if ($0.$1(this.$U6.get_$1r())) return null;
        var n = this.$U6.get_$1r().get_$AT(),
            t = n.$JP(i),
            r = Mscrm.ProcessControlShared.ObjectModels.$2W.$OH(n.get_$Ew(), t);
        return new Mscrm.ProcessControlShared.ObjectModels.$K5(new Mscrm.ProcessControlShared.ObjectModels.$2W(r), t)
    },
    $3MB: function(n) { n.$10 === -2147093999 ? (this.$1TY(), this.$1U()) : this.$1z(n) },
    $1TY: function() { this.$P(new Array(0)) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrievePersonalDocumentTemplates",
                Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction, r, u;
    return i.$9_3 = n, i.$1QU = Xrm.Internal.getEntityCode(i.$9_3
        .get_$2W()), r = t, $0.$1(r
            .OnSuccess) ||
        (i.$7N = r.OnSuccess), $0.$1(r
            .OnFailure) ||
        (i.$1I_3 = r.OnFailure), $0.$1(r.QueryValue) ||
        (u = r.QueryValue, $0.$1(u.DocumentType) || (i.$wv = u.DocumentType)), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction.prototype = {
    $7N: null,
    $wv: 0,
    $1QU: 0,
    $2t: function() {
        var n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(44, this.get_$2C(), this.$9_3.get_$2W(), 0), null);
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            n,
            this.$$d_$4Y,
            this.$$d_$1z), 1
    },
    $4Y: function(n) {
        this.$7N(this.$2CK(n));
        this.$1U()
    },
    $2CK: function(n) {
        for (var i, r, u = new Array(0), t = 0;
            t < n.get_$3XJ();
            t++
        )
            i = n.get_$H(t), r = i.get_$5Z(), r.templateTypeCode === 9941 &&
                r.documentType === this.$wv &&
                Array.add(u, i);
        return new(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W))(u)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveProvisionedLanguages",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction, i = n;
    return t.$P = i.$$d_$4Y, t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction.prototype = {
    $P: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.DataApi.$1k,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$R5(),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        $0.$1(this.$P) || this.$P(n.$1O.$VK, n.$1O.$Bq);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveGlobalCreateEnabledEntitiesAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveGlobalCreateEnabledEntities",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.$2e2 = function(n, t, i, r) {
    var u = !0;
    return Microsoft.Crm.Client.Core.ViewModels.$n.$DF() &&
    (u = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s()
        ? !0
        : Xrm.Utility.isEntityOfflineSyncEnabled(r)), new Microsoft.Crm.Client.Core.Models.Descriptors
        .CommandControlDescriptor(n,
            "Button",
            "CreateCommand",
            t,
            i,
            "System",
            "Add",
            "Symbol",
            { PrimaryModelName: r },
            u)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction, r = t;
    return $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.prototype = {
    $P: null,
    $2t: function() {
        for (var n,
            t,
            u = new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("CreateNewCommandsID"),
            i = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor)),
            f = Microsoft.Crm.Client.Core.ViewModels.$3G.$XD,
            r = 0;
            r < f.get_Count();
            r++)
            n = f.get_$H(r), t = n.LogicalName, n.IsChildEntity ||
                t === "activitypointer" ||
                t === "syncerror" ||
                i.add(Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction
                    .$2e2(t, n.DisplayName, i.get_Count() + 1, n.LogicalName));
        return u.Controls = i.toArray(), this.$P(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, u)), 0
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveGlobalMenuData",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction, i = n;
    return t.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$oS, t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction.prototype = {
    $2t: function() {
        var o = this.$9_3, f = new Sys.StringBuilder, i = 0, e = o.$AF.$F, r, t, n;
        for (r in e)
            t = { key: r, value: e[r] }, Microsoft.Crm.Client.Core.ViewModels.$2A.isInstanceOfType(t.value) &&
            (n = t.value, n.set_Visible(!1), n
                .set_Enabled(!1), !$0.$1(n.$J) &&
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$32().$7p(n.$J, 1) &&
                (f.append("<value>" + t.key + "<\/value>"), i++));
        if (!i) return 0;
        var s = "<filter type='and'><condition attribute='uniquename' operator='in'>" +
                f +
                "<\/condition><condition attribute='statecode' operator='eq' value='1'/><\/filter>",
            h = new Microsoft.Crm.Client.Core.Storage.DataApi.$Ny("workflow", ["uniquename", "processroleassignment"]),
            c = h.$2e6(s),
            u = new Microsoft.Crm.Client.Core.Storage.DataApi.$u(c, "");
        return u.$Od = !0, u.$2u = i, this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(u, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$1z), 1
    },
    $4Y: function(n) {
        for (var i = this.$9_3, o = i.$AF.$F, r = n.get_entities(), s = r.length, t = 0; t < s; ++t) {
            var u = r[t], f = o[u.getValue("uniquename")], h = this.$2Gj(u), e = this.$1sT(h);
            f.set_Visible(e);
            f.set_Enabled(e)
        }
        i.$8(Microsoft.Crm.Client.Core.ViewModels.$58.$1TP);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction = function() {
    this.$$d_$2OP = Function.createDelegate(this, this.$2OP);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$39c = Function.createDelegate(this, this.$39c);
    this.$$d_$39a = Function.createDelegate(this, this.$39a);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.initializeBase(this);
    this.$7x = "ChangeControlCommand";
    this.$kK = "_ControlCommands";
    this.$ts = [0];
    this.$IH = !1
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveControlConfigurations",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$JF);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveDefaultControlConfiguration",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$2Ge)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$JF = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$283(n), r;
    return i.$H3 = new Microsoft.Crm.Client.Core.Framework
        .PerformanceStopwatch("RetrieveControlConfigurationsDataAction.RetrieveForCommands"), i.$kn = i
        .$$d_$39a, r = t, $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$2Ge = function(n) {
    var t = Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$283(n);
    return t.$H3 = new Microsoft.Crm.Client.Core.Framework
        .PerformanceStopwatch("RetrieveControlConfigurationsDataAction.RetrieveDefault"), t.$kn = t.$$d_$39c, t.$P = n
        .$$d_$1vP, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$283 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction, i, r;
    return t.$9_3 = Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(n) ? n : n, t.$J = t.$9_3.get_$2W(), t
        .$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1aU, i = "", r = "", $0.$1(t.$9_3.get_Root().$1s) || t.$9_3.get_Root().$1s.toUpperCase() !== "WORKSPACE"
        ? t.$9_3.get_Root().$I === "EntityEditFormRootViewModel"
        ? (i = t.$9_3.get_Root().$J, r = String.format("{0}_{1}", i, t.$9_3.get_Root().$g))
        : (i = t.$9_3.get_$2W(), r = String.format("{0}_{1}", i, t.$9_3.get_Root().$g))
        : (i = t.$9_3.get_Root().$1s.toUpperCase(), r = String.format("{0}_{1}", "", t.$9_3.get_Root().$g)), t
        .$KS = i, t.$g = r, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.prototype = {
    $P: null,
    $KS: null,
    $J: null,
    $g: null,
    $7x: null,
    $ts: null,
    $kK: null,
    $IH: !1,
    $kn: null,
    $H3: null,
    $2t: function() {
        var n, t;
        return $0.$1(this.$H3) || this.$H3.start(), n = this.$9_3.get_Root()
            .$6B(this.$9_3), (!Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(this.$9_3) ||
                this.$9_3.get_RetrieveRequired()) &&
            (Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(this.$9_3) ||
                Microsoft.Crm.Client.Core.ViewModels.CustomControlDataSetViewModel.isInstanceOfType(this.$9_3) ||
                Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(n)) &&
            (!Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(n) || n.get_RetrieveRequired())
            ? (t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(42, this.get_$2C(), this.$KS, 0, this.$IH, this.$g),
                    this.get_$e()), this.$1k(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                t,
                this.$kn,
                this.$$d_$5J), 1)
            : (this.$kn(new(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W))), 0)
    },
    $39a: function(n) {
        var v, d, o, y, s, f, r, l, e, u, t, g, h, i, p, a, c, w, nt, b, k, tt;
        if ($0.$1(this.$H3) || this.$H3.stop(), v = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("RetrieveControlConfigurationsDataAction.ParseForCommands"), v
            .start(), d = this.$KS + this.$kK, o = new Microsoft.Crm.Client.Core.Models.Descriptors
            .CommandSet(d), n.get_$3XJ() > 0)
            for (y = new(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor)), s = 0;
                s < n.get_$3XJ();
                s++)
                if (f = n.get_$H(s), f.$4m === 42 && (r = null, l = f.get_$5Z(), l.length > 0)) {
                    for (e = {}, u = 0; u < l.length; u++)
                        if (t = l[u], t.TypeName === "Grid" ||
                            t.TypeName === "MultilineList" ||
                            t.PrimaryModelName === this.$J) {
                            if (g = new RegExp('{"Value":"\\d","Name":"FormFactor"}'), h = JSON.stringify(t.Properties)
                                .replace(g, ""), h in e) {
                                this.$2Kx(t.Properties) && (e[h].CommandParameters.Index = u);
                                continue
                            }
                            if (i = {}, i.ApplicationMetadataType = n.get_$H(s).get_$1N5(), i
                                .Descriptor = null, !$0.$1(this.$9_3.get_Root()) &&
                                $0.$1(r) &&
                                (r = t.TypeName === "Grid" || this.$9_3.get_Root().$I === "GridRootViewModel"
                                    ? this.$9_3.get_Root().$7V("GridContainer")
                                    : Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(this.$9_3)
                                    ? this.$9_3
                                    : Microsoft.Crm.Client.Core.ViewModels.CustomControlDataSetViewModel
                                    .isInstanceOfType(this.$9_3)
                                    ? Microsoft.Crm.Client.Core.ViewModels.CustomControlDataSetViewModel
                                    .$su(this.$9_3.get_Root(), this.$9_3)
                                    : this.$9_3.get_Root()
                                    .$6B(this.$9_3)), !$0.$1(r) &&
                                Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(r))
                                if (i.ContainerViewModel = r, t.TypeName === "CustomControl") {
                                    if (r.$rg === t.Name || $0.$1(r.$rg)) {
                                        for (i.Descriptor = t, p = t.Properties, a = 0; a < p.length; a++)
                                            if (c = p[a], c.Name === "DisplayName") {
                                                try {
                                                    i.DisplayName = Microsoft.Crm.Client.Core.Framework.Common.$2
                                                        .$6(c.Value.toString())
                                                } catch (ft) {
                                                    i.DisplayName = $0.$1(c.Value) ? t.TypeName : c.Value.toString()
                                                }
                                                break
                                            }
                                        i.Index = u;
                                        var it = i.DisplayName,
                                            rt = f.$g + u.toString(),
                                            ut = new Microsoft.Crm.Client.Core.Models.Descriptors
                                                .CommandControlDescriptor(rt,
                                                    "Button",
                                                    this.$7x,
                                                    it,
                                                    y.get_Count(),
                                                    "System",
                                                    null,
                                                    null,
                                                    i,
                                                    !0);
                                        e[h] = ut
                                    }
                                } else
                                    (t.TypeName === "Grid" ||
                                            t.TypeName === "MultilineList" ||
                                            t.TypeName === "HierarchyList") &&
                                        (w = Microsoft.Crm.Client.Core.Framework.Common.$2
                                            .$6("CustomControl_Default_ListGrid"), i.ViewId = f.$g, i
                                            .DisplayName = w, nt = new Microsoft.Crm.Client.Core.Models.Descriptors
                                            .CommandControlDescriptor(f.$g,
                                                "Button",
                                                this.$7x,
                                                w,
                                                y.get_Count(),
                                                "System",
                                                null,
                                                null,
                                                i,
                                                !0), e[h] = nt)
                        }
                    b = e;
                    for (k in b) tt = { key: k, value: b[k] }, Array.add(o.Controls, tt.value)
                }
        v.stop();
        o.Controls.length > 0
            ? (o.Controls.sort(this.$$d_$2OP), this.$P(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, o)))
            : this.$P(null);
        this.$1U()
    },
    $2hR: function(n) {
        var t = 0;
        switch (n) {
        case"0":
            t = 2;
            break;
        case"1":
            t = 1;
            this.get_$2C() === 3 && (t = 3);
            break;
        case"2":
            t = 3
        }
        return t
    },
    $39c: function(n) {
        var e, o, s, l, r, h, u, i, t, c, f;
        if ($0.$1(this.$H3) || this.$H3.stop(), e = new Microsoft.Crm.Client.Core.Framework
            .PerformanceStopwatch("RetrieveControlConfigurationsDataAction.ParseForDefault"), e
            .start(), o = null, s = -1, n.get_$3XJ() > 0)
            for (l = new(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor)), r = 0;
                r < n.get_$3XJ();
                r++)
                if (h = n.get_$H(r), h
                    .$4m ===
                    42 &&
                    (u = h.get_$5Z(), u.length > 0))
                    for (i = 0; i < u.length; i++)
                        t = u[i], t.ControlTypeName === "CustomControlHostView" &&
                            this.$J === t.PrimaryModelName &&
                            Microsoft.Crm.Client.Core.ViewModels.$4h.isInstanceOfType(this.$9_3) &&
                            (this.$9_3.$rg === t.Name || $0.$1(this.$9_3.$rg)) &&
                            (c = t.Properties, this.$2Kx(c) && (o = t, s = i));
        f = {};
        f.descriptor = o;
        f.index = s;
        e.stop();
        this.$P(f);
        this.$1U()
    },
    $2Kx: function(n) {
        for (var t, i = 0; i < n.length; i++)
            if (t = n[i], !IsNull(t) && t.Name === "FormFactor"
            ) return IsNull(t.Value) || this.$2hR(t.Value) !== this.get_$2C() ? !1 : !0;
        return!1
    },
    $2OP: function(n, t) { return n.LabelText.localeCompare(t.LabelText) },
    $5J: function(n) {
        $0.$1(this.$H3) || this.$H3.stop();
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.$3A = function() {
    this.$$d_$39Z = Function.createDelegate(this, this.$39Z);
    Microsoft.Crm.Client.Application.ViewModels.$3A.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlForSuggestions",
        Microsoft.Crm.Client.Application.ViewModels.$3A.$1Rb)
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$1Rb = function(n) {
    var i = n,
        r = i.$2,
        t = new Microsoft.Crm.Client.Application.ViewModels.$3A,
        u = r.$6K.entityName,
        f = r.$6K.entityId,
        e = r.$6K.pricelevelid;
    return Mscrm.InternalUtilities._Script.isNullOrUndefined(r.$6K.lineItemMetaData) ||
        (t.$pw = JSON.parse(r.$6K.lineItemMetaData.toString())), t.$17S = r.$6K.isCustomLineItemEntity, t
        .$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(i), t.$P = i.$$d_$4Y, t.$1I_3 = i
        .$$d_$5J, t.$9_3 = i, t.$IM = i.get_DefinitionId(), t
        .$B6 = i.$1p.$BQ + 1, $0
        .$1(e) ||
        (t.$1Ld = new Microsoft.Crm.Client.Core.Framework
            .Guid(e)), $0.$1(u) ||
        $0.$1(f) ||
        (t.$Hm = new Xrm.Objects.EntityReference(u, new Microsoft.Crm.Client.Core.Framework.Guid(f))), Microsoft.Crm
        .Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
        .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore
            .$P0("started",
                u,
                String.format("Started loading suggestions (triggered by {0})",
                    r.$6K
                    .SuggestionsSource))), t.$17S && (t.$bo = 1), t
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$26t = function(n, t) {
    Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel.isInstanceOfType(n.get_Root()) &&
    (n.get_Root().$V1(), Microsoft.Crm.Client.Core.ViewModels.$Z
        .$3S9(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Title_Generic"),
            Microsoft.Crm.Client.Core.Framework.Common.$2.$6(t)))
};
Microsoft.Crm.Client.Application.ViewModels.$3A.prototype = {
    $Xr: !1,
    $pv: null,
    $1Ld: null,
    $Hm: null,
    $pw: null,
    $17S: !1,
    $2t: function() {
        var n = this.$9_3;
        return(n.set_Label(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("query.product.cell.productname.suggestions")), n
                .set_NoRecordsText(Microsoft.Crm.Client.Core.Framework.Common.$2
                    .$6("Suggestions_Dlg_No_Suggestions")), n
                .$1rZ = !0, n.set_GridEnabled(!1), n.$H1 = !0, n.set_DisableItemLongPress(!0), n
                .$11w = !0, $0.$1(this.$Hm) || $0.$1(this.$1Ld) && !this.$17S)
            ? (Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
                .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                    .$P0("aborted",
                        this.$Hm ? this.$Hm.TypeName : "null",
                        String.format("Form entity (id {0}) metadata not available",
                            this.$Hm ? this.$Hm.Id.toString() : "null"))), Microsoft.Crm.Client.Application.ViewModels
                .$3A
                .$26t(this.$9_3, "Suggestions_Dlg_Error_No_Price_List"), 0)
            : (this.$3Hf(), 1)
    },
    $3Hf: function() {
        var n = this;
        this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.PopulateRecommendationCacheForRecordRequest(this.$Hm), this.get_$e()),
            function(t) {
                n.$Xr = t.showAzureRecommendations;
                n.$3Mw()
            },
            this.$$d_$5J)
    },
    $3Mw: function() {
        var n = this;
        this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.RetrieveItemIdsForRecordRequest(this.$Hm), this.get_$e()),
            function(t) {
                if (n.$pv = t.itemIds, $0.$1(n.$pv) || n.$pv.length <= 0) {
                    Microsoft.Crm.Client.Application.ViewModels.$3A.$26t(n.$9_3, "Suggestions_Dlg_Error_No_Line_Items");
                    n.$5J(Microsoft.Crm.Client.Core.Framework.$4
                        .$h(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Title_Generic"),
                            Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Suggestions_Dlg_Error_No_Line_Items")));
                    return
                }
                n.$3MY()
            },
            this.$$d_$5J)
    },
    $3MY: function() {
        var n = this;
        this.$1jo(Number, String, Xrm.Internal.getMaxSuggestionsCount(), function(t) { n.$3ON(t) }, this.$$d_$39Z)
    },
    $39Z: function(n) { this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$h(n)) },
    $3ON: function(n) {
        var t = null, r;
        if (this.$17S)
            t = String.format(Microsoft.Crm.Client.Application.ViewModels.$3A.$2CC,
                "<value>" + this.$pv.join("<\/value><value>") + "<\/value>",
                this.$pw.entityPrimaryKey,
                this.$pw.entityName,
                this.$pw.itemIdAttributeName,
                this.$pw.basketRecordLookupAttributeName,
                this.$Hm.Id);
        else {
            var u = this.$Xr ? "recommendationcache" : "productsubstitute",
                f = this.$Xr ? "productpricelevelid" : "productid",
                e = this.$Xr ? "additionaldatarecordid" : "substitutedproductid",
                o = this.$Xr ? "itemid" : "productid",
                s = this.$Xr ? "recommendeditemid" : "substitutedproductid",
                h = this.$Xr
                    ? '<condition attribute="recommendationtype" operator="eq" value="1" />\r\n\t\t\t\t\t<condition attribute="isrecommendationactive" operator="eq" value="1" />'
                    : '<condition attribute="salesrelationshiptype" operator="eq" value="1" />',
                c = this.$Xr
                    ? '<attribute name="recommendationrating" aggregate="max" alias="recommendationrating" />\r\n\t\t\t\t\t<attribute name="recommendeditemid" groupby="true" alias="recommendeditemid" />\r\n\t\t\t\t\t<order alias="recommendationrating" descending="true" />'
                    : "",
                i = new Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZO(this.$Hm.LogicalName, this.$pw);
            t = String.format(Microsoft.Crm.Client.Application.ViewModels.$3A.$2C4,
                this.$1Ld,
                u,
                f,
                e,
                c,
                o,
                "<value>" + this.$pv.join("<\/value><value>") + "<\/value>",
                h,
                s,
                i.$jO,
                i.$jN,
                this.$Hm.Id,
                i.$jP)
        }
        this.$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(t);
        r = this.$9_3;
        r.$1p.$2u = n;
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.prototype.$2t.call(this)
    }
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZO = function(n, t) {
    this.$1eY = n;
    null !== t
        ? (this.$jO = t.entityName, this.$jP = t.entityPrimaryKey, this.$jN = t.basketRecordLookupAttributeName)
        : this.$17()
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZO.prototype = {
    $1eY: null,
    $jO: null,
    $jP: null,
    $jN: null,
    $17: function() {
        switch (this.$1eY) {
        case"opportunity":
            this.$jO = "opportunityproduct";
            this.$jP = "opportunityproductid";
            this.$jN = "opportunityid";
            break;
        case"quote":
            this.$jO = "quotedetail";
            this.$jP = "quotedetailid";
            this.$jN = "quoteid";
            break;
        case"salesorder":
            this.$jO = "salesorderdetail";
            this.$jP = "salesorderdetailid";
            this.$jN = "salesorderid";
            break;
        case"invoice":
            this.$jO = "invoicedetail";
            this.$jP = "invoicedetailid";
            this.$jN = "invoiceid";
            break;
        default:
            this.$jO = "";
            this.$jP = "";
            this.$jN = ""
        }
    }
};
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZN = function() {};
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZN
    .prototype = {
        entityName: null,
        entityPrimaryKey: null,
        basketRecordLookupAttributeName: null,
        itemIdAttributeName: null,
        parentEntityPrimaryAttributeName: null
    };
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveUnboundTargetEntityMetadataAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveUnboundTargetEntityMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction, r = n, u, f;
    return i.$P = r.$$d_$1tJ, i.$9_3 = r, u = t, f = u.QueryValue, i.$15w = f.targetAttribute, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction.prototype = {
    $P: null,
    $15w: null,
    $2t: function() {
        for (var r, u, t = this.$9_3.get_ModelContext().$30Z(this.$15w), i = [], n = 0;
            n < t.length;
            n++
        ) Array.add(i, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(t[n], this.get_$e()));
        return r = this, u = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i),
            function(n) { r.$4Y(n) },
            function(n) { u.$5J(n) }), 1
    },
    $4Y: function(n) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)), t = 0; t < n.length; t++) i.add(n[t]);
        this.$P(i);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveTaskBasedFlowActionBase = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase.prototype = {
    $2Gj: function(n) {
        var t = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String)), r, e, i, f;
        if ($0.$1(n) || (r = n.getValue("processroleassignment"), $0.$1(r))) return t.toArray();
        e = Sys.Net.XMLDOM(r).firstChild;
        for (var o = e
                     .childNodes,
            s = o.length,
            u = 0;
            u < s;
            ++u)
            i = o[u], f = i.nodeName.toLowerCase(), f === "everyone"
                ? t.add("everyone")
                : f !== "role" ||
                $0.$1(i.attributes.getNamedItem("Id")) ||
                t.add(i.attributes.getNamedItem("Id").nodeValue);
        return t.toArray()
    },
    $1sT: function(n) {
        var t, c, u, e, o, h;
        if ($0.$1(n) || !n.length) return!1;
        if (n[0].toLowerCase() === "everyone") return!0;
        t = {};
        c = this;
        Array.forEach(n,
            function(n) {
                try {
                    t[new Microsoft.Crm.Client.Core.Framework.Guid(n).toString()] = !0
                } catch (i) {
                }
            });
        u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$Gg;
        for (var f = u, l = f.length, i = 0; i < l; ++i) if (e = f[i], e.toString() in t) return!0;
        o = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$uV;
        for (var s = o, a = s.length, r = 0; r < a; ++r) if (h = s[r], h.toString() in t) return!0;
        return!1
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    this.$$d_$Fn = Function.createDelegate(this, this.$Fn);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("CheckTaskBasedFlowStatus",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction, i = n;
    return t.$9_3 = i, t.$22i = new Microsoft.Crm.Client.Core.Framework.Guid(i.$11), t.$1de = i.$Ft, t.$60 = Microsoft
        .Crm.Client.Core.Framework.SchedulerPriorities.$1yh, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction.prototype = {
    $22i: null,
    $1de: null,
    $2t: function() {
        var n = new Xrm.Objects.EntityReference("workflow", this.$22i);
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(n,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["statecode", "processroleassignment"]),
                Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(),
                this.get_$e()),
            this.$$d_$Fn,
            this.$$d_$95), 1
    },
    $Fn: function(n) {
        var t = this.$2Gj(n), i = this.$1sT(t), r = n.getValue("statecode").$1f;
        r && i ||
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$37().$1xZ(this.$1de);
        this.$1U()
    },
    $95: function(n) {
        n.$10 === -2147220969 &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$37().$1xZ(this.$1de);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels.$UC = function() {
    Microsoft.Crm.Client.Application.ViewModels.$UC.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$UC.prototype = {
    $14j: null,
    $1U: function() {
        Microsoft.Crm.Client.Core.ViewModels.$Tg.prototype.$1U.call(this);
        $0.$1(this.$9_3.get_Root()) || this.$9_3.get_Root().$2SP(this)
    },
    $1z: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.$Tg.prototype.$1z.call(this, n);
        $0.$1(this.$9_3.get_Root()) || this.$9_3.get_Root().$2SP(this)
    },
    $2PY: function() {
        Microsoft.Crm.Client.Core.ViewModels.$Tg.prototype.$2PY.call(this);
        $0.$1(this.$9_3.get_Root()) || this.$9_3.get_Root().$2cF(this)
    },
    get_$4u: function() { return this.$I },
    get_$29K: function() { return this.$14j },
    get_$2rC: function() { return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$D.$O8(this.$14j, 1) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveHeaderMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction;
    return t.$9_3 = i, t.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yD, t.$T = i.$J, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction.prototype = {
    $P: null,
    $T: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$T, this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        this.$9_3.set_Label(n.get_$146());
        $0.$1(this.$P) || this.$P(n);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveActivitiesEnabledForMobile",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction.$JF = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction;
    return t.$P = n.$$d_$1tJ, t.$9_3 = n, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction.prototype = {
    $P: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$1m),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$Jq(this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $2cM: function(n, t) { n.add(t) },
    $4Y: function(n) {
        for (var t, u = n.get_$3XJ(), r = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)), i = 0;
            i < u;
            i++
        ) t = n.get_$H(i), t.get_$9N() && t.$18h === 1 && this.$2cM(r, t);
        this.$P(r);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveAttachmentContents",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction.$sQ)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction.$sQ = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction;
    return t.$9 = i, t.$P = i.$$d_$2So, t.$1I = i.$$d_$3M0, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction.prototype = {
    $P: null,
    $1I: null,
    $9: null,
    get_$3JS: function() { return $0.$1(this.$9) ? null : this.$9.get_ModelContext().get_$52() },
    $2t: function() {
        if (Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() ||
            Microsoft.Crm.Client.Core.ViewModels.$n.$L0(this.$9.$2.$1s) &&
            Microsoft.Crm.Client.Core.ViewModels.$n.$L0("annotation")) {
            var n = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["documentbody", "mimetype"]);
            return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$6F(this.get_$3JS(), n, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), this.get_$e()),
                this.$$d_$4Y,
                this.$$d_$5J), 1
        }
        return this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999)), 0
    },
    $4Y: function(n) {
        if ($0.$1(n)) {
            var t = Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147220969);
            this.$5J(t);
            return
        }
        $0.$1(this.$P) || this.$P(Microsoft.Crm.Client.Core.Models.$O.$B(n));
        this.$1U()
    },
    $5J: function(n) {
        $0.$1(this.$1I) || this.$1I(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction = function() {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction.initializeBase(this);
    this.$7x = "ChangeChartViewCommand"
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveChartViewSelector",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction;
    return i.$9_3 = n, i.$KS = i.$9_3.get_$2W(), Microsoft.Crm.Client.Application.ViewModels.$6M.$1RZ(i, t)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction = function() {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction.initializeBase(this);
    this.$7x = "ChangeChartCommand";
    this.$kK = "_ChartCommands";
    this.$1Ir = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_Visualization_Group_Name");
    this.$1G4 = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_Visualization_Group_Name");
    this.$4m = 23;
    this.$ts = [0]
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveChartSelector",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction, r = n;
    return i.$9_3 = r, i.$KS = r.$J, Microsoft.Crm.Client.Application.ViewModels.$6M.$1RZ(i, t)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction
    .prototype = {
        $38b: function() {
            return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().$Eb
                .$3ZW("575b9a8f-46da-4fb5-b014-51a689b003f0")
        },
        $38i: function() {
            return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().$Eb
                .$3ZW("d68cb29d-2243-41d1-b5a8-ee24dc885140")
        }
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction = function() {
    this.$$d_$2Mc = Function.createDelegate(this, this.$2Mc);
    this.$$d_$39r = Function.createDelegate(this, this.$39r);
    this.$$d_$3Cm = Function.createDelegate(this, this.$3Cm);
    this.$bA = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.Framework.$4J);
    this.$1e9 = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.Framework.$6y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveListMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.$1yI)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.$1yI = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction, r = t;
    return $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), Microsoft.Crm.Client.Application.ViewModels
        .RetrieveListMetadataAction.$1Dd(i, n), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.$1Dd = function(n, t) {
    var i = t, r, u, f;
    n.$9_3 = t;
    n.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yJ;
    n.$cq = i.get_$3WM();
    n.$p = i.get_$2gx();
    n.$1s = i.get_$2ld();
    r = i;
    n.add_$RE(r.$$d_$gH || (r.$$d_$gH = Function.createDelegate(r, r.$gH)));
    u = i;
    n.add_$O3(u.$$d_$1Fa || (u.$$d_$1Fa = Function.createDelegate(u, u.$1Fa)));
    n.add_$89(n.$$d_$3Cm);
    f = i;
    n.$1I_3 = f.$$d_$39u || (f.$$d_$39u = Function.createDelegate(f, f.$39u))
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.prototype = {
    $1s: null,
    $cq: null,
    $Nt: null,
    $p: 0,
    $P: null,
    $22X: !1,
    get_$RW: function() { return $0.$1(this.$Nt) ? null : this.$Nt.ViewModelDescriptor },
    $16M: function() {
        if (!$0.$1(this.get_$RW())) {
            this.$1e9.$2Yt(this.$cq, this.get_$RW(), null);
            var n = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(this.get_$RW());
            $0.$1(this.$bA) || (this.$bA.$pG(this.$cq, n), this.$22X = !0)
        }
    },
    $2t: function() {
        var n = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$1s),
            t = n.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())
                ? new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(this.$p, this.get_$2C(), this.$9_3.get_$2W(), 1, !0, null, 1)
                : new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(this.$p, this.get_$2C(), this.$9_3.get_$2W(), this.$9_3.get_$1N5(), !1, n.toString());
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(t, this.get_$e()),
            this.$$d_$39r,
            this.$$d_$2Mc), 1
    },
    $39r: function(n) {
        if (!n.get_$3XJ()) {
            this.$2Mc(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094003));
            return
        }
        if (this.$Nt = n.get_$H(0).get_$5Z(), !$0.$1(this.$Nt)) {
            if (this.$9_3.get_$Dp()) {
                this.$1U();
                return
            }
            var t = this.$9_3;
            t.set_$3SY(this.$1s);
            this.$16M();
            $0.$1(this.$P) || this.$P(this.$Nt);
            this.$1U()
        }
    },
    $2Mc: function(n) { this.get_$CS() !== 3 && this.$1z(n) },
    $3Cm: function() { this.$22X || this.$bA.$2A2(this.$cq) }
};
Microsoft.Crm.Client.Application.ViewModels.$6M = function() {
    this.$$d_$2OP = Function.createDelegate(this, this.$2OP);
    this.$1G4 = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_Personal_View_Group_Name");
    this.$1Ir = Microsoft.Crm.Client.Core.Framework.Common.$2.$6("CRM_System_View_Group_Name");
    this.$ts = Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel.get_$OQ()
        ? [1, 3]
        : [1];
    Microsoft.Crm.Client.Application.ViewModels.$6M.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$6M.$1RZ = function(n, t) {
    var i = t;
    return $0.$1(i.OnSuccess) || (n.$P = i.OnSuccess), n
};
Microsoft.Crm.Client.Application.ViewModels.$6M.prototype = {
    $P: null,
    $KS: null,
    $7x: null,
    $4m: 16,
    $kK: "_ViewCommands",
    $38b: function() { return!0 },
    $38i: function() {
        return Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$K().$Eb
            .$3ZW("f3b782a2-e6d5-4b86-9b7d-33f627fe5c5d")
    },
    $33C: function() { return!0 },
    $2t: function() {
        for (var i, r, t = [], n = 0;
            n < this.$ts.length;
            n++
        )
            Array.add(t,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(this.$4m, this.get_$2C(), this.$KS, 0, !1, null, this.$ts[n]),
                    this.get_$e()));
        return i = this, r = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t),
            function(n) { i.$4Y(n) },
            function(n) { r.$5J(n) }), 1
    },
    $4Y: function(n) {
        var b = this.$KS + this.$kK,
            a = new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet(b),
            s = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor(this.$1Ir, "Group", null, this.$1Ir, 0, null, null, null),
            h = new Microsoft.Crm.Client.Core.Models.Descriptors
                .CommandControlDescriptor(this.$1G4, "Group", null, this.$1G4, 1, null, null, null),
            k = this.$38b(),
            d = this.$38i(),
            p = this.$9_3,
            g = p.$lW,
            t = null,
            o,
            c,
            i,
            w,
            r,
            f,
            l,
            e,
            v,
            u,
            y;
        if (!$0.$1(g))
            for (t = p.$lW.toUpperCase()
                    .split(","), o = 0;
                o < t.length;
                o++) t[o] = t[o].replace("{", "").replace("}", "");
        if (n.length > 0)
            for (c = 0; c < n.length; c++)
                if (i = n[c], i.get_$3XJ() > 0)
                    for (w = new(Microsoft.Crm.Client.Core.Framework.List$1
                            .$$(Microsoft.Crm.Client.Core.Models.Descriptors.CommandControlDescriptor)), r = 0;
                        r < i.get_$3XJ();
                        r++) {
                        if (f = i.get_$H(r), l = !0, t && t.length > 0)
                            for (l = !1, e = 0; e < t.length; e++)
                                if (t[e] && f.$g.toUpperCase() === t[e]) {
                                    l = !0;
                                    t[e] = null;
                                    break
                                }
                        l &&
                        (v = f.$1P, u = {}, u.ViewId = f.$g, u.DisplayName = v, u.ApplicationMetadataType = i
                            .get_$H(r).get_$1N5(), u.MetadataSubType = i.get_$H(r).$ES, u.Descriptors = i.get_$H(r)
                            .get_$Gz().$6a, u.IsDefault = i.get_$H(r).$IH, y = new Microsoft.Crm.Client.Core.Models
                            .Descriptors
                            .CommandControlDescriptor(f.$g,
                                "Button",
                                this.$7x,
                                v,
                                w.get_Count(),
                                "System",
                                null,
                                null,
                                u,
                                this.$33C(f)), !i.get_$H(r).$W7 && k
                            ? Array.add(s.Children, y)
                            : i.get_$H(r).$W7 && d && Array.add(h.Children, y))
                    }
        h.Children.length > 0 && (h.Children.sort(this.$$d_$2OP), Array.add(a.Controls, h));
        s.Children.length > 0 && (s.Children.sort(this.$$d_$2OP), Array.add(a.Controls, s));
        this.$P(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, a));
        this.$1U()
    },
    $2OP: function(n, t) { return n.LabelText.localeCompare(t.LabelText) },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveTimeZoneDefinition",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction, i = n;
    return t.$P = i.$$d_$4Y, t.$9_3 = i, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction.prototype = {
    $P: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.DataApi.$1k,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$R5(),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        var i = n.$Q.timezonedefinitionbycode, t;
        $0.$1(this.$P) ||
        (t = new(Microsoft.Crm.Client.Core.Framework.List$1
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition))(i.$21O()), this
            .$P(this.$3SX(t)));
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) },
    $3SX: function(n) {
        var t = this;
        return n.sort(function(n, t) {
            var u = n.$Ik, i = n.$Y1, f = t.$Ik, r = t.$Y1;
            return i !== r ? r - i : u - f
        }), n
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction = function() {
    Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction.initializeBase(this);
    this.$7x = "ChangeViewsCommand"
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveViewSelector",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction.$JF = function(n, t) {
    var r = n, i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction;
    return i.$9_3 = r, i.$KS = i.$9_3.get_$2W(), Microsoft.Crm.Client.Application.ViewModels.$6M.$1RZ(i, t)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction.prototype = {
    $2t: function() {
        if (!this.$9_3.$Sc) {
            var n = this;
            return window.setTimeout(function() {
                    var t = n.$KS + n.$kK;
                    n.$P(new Microsoft.Crm.Client.Core.ViewModels
                        .$6n(n.$9_3, new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet(t)));
                    n.$1U()
                },
                0), 1
        }
        return Microsoft.Crm.Client.Application.ViewModels.$6M.prototype.$2t.call(this)
    },
    $33C: function(n) { return Microsoft.Crm.Client.Core.ViewModels.$n.$2Lz(n.get_$Gz(), n.$6h) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction = function() {
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$1tB = Function.createDelegate(this, this.$1tB);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveEntityReferences",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction, r = n, u;
    return i.$P = r.$$d_$1tJ, i.$9_3 = r, u = t, i.$T = u.QueryValue, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction.prototype = {
    $P: null,
    $T: null,
    $e4: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$T, this.get_$e()),
            this.$$d_$1tB,
            this.$$d_$5J), 1
    },
    $1tB: function(n) {
        this.$e4 = n.get_$GU();
        var i = this.$9_3,
            r = new Microsoft.Crm.Client.Core.Framework.$1b(this.$e4, !1),
            u = new Microsoft.Crm.Client.Core.Storage.DataApi.$Ny(this.$T, r),
            f = u.$2e6(i.$lG),
            t = new Microsoft.Crm.Client.Core.Storage.DataApi.$SP(f, this.$T, this.$e4, i.$lG);
        t.set_$80(1);
        t.$2u = 25;
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(t, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)
    },
    $4Y: function(n) {
        for (var i = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.$3h)), t = 0;
            t < n.get_count();
            t++)
            i.add(new Xrm.Objects.EntityReference(n.get_$H(t).$N.LogicalName,
                n.get_$H(t).$N.Id,
                n.get_$H(t).getValue(this.$e4)));
        this.$P(i);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveLookupViewQueryFromId",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction.$2D2)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction.$2D2 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction;
    return t.set_$WF(n), t.$P = n.$$d_$3DB, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction.prototype = {
    $P: null,
    get_$WF: function() { return this.$9_3 },
    set_$WF: function(n) { return this.$9_3 = n, n },
    $2t: function() {
        var t = new Microsoft.Crm.Client.Core.Framework.Guid(this.get_$WF().$KX),
            i = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(16, this.get_$2C(), null, 1, !1, t.toString()),
            r = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(30, this.get_$2C(), null, 1, !1, t.toString()),
            n = this;
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(i, this.get_$e()),
            function(t) {
                n.$1k(Microsoft.Crm.Client.Core.Framework.$P
                    .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(r, n.get_$e()),
                    function(i) { n.$Fn(t, i) },
                    n.$$d_$5J)
            },
            this.$$d_$5J), 1
    },
    $Fn: function(n, t) {
        var i, r, u;
        n.get_$3XJ() > 0 && t.get_$3XJ() > 0
            ? (i = this.get_$WF(), r = new Microsoft.Crm.Client.Core.Models
                .$87(new Microsoft.Crm.Client.Core.Framework.Guid(i.$KX),
                    n.get_$H(0).get_$Gz(),
                    t.get_$H(0).get_$5Z(),
                    n.get_$H(0).$6h), this.$P(r))
            : (u = Microsoft.Crm.Client.Core.Models.$87.$287(this.get_$WF().$B3), this.get_$WF().$1Xj(u));
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("RetrieveLookupViewQueryFromEntityType",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction.$2D2)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction.$2D2 = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction;
    return i.set_$WF(n), i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yM, i.$1al = t, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction.prototype = {
    $1al: 0,
    $Q0: null,
    get_$WF: function() { return this.$9_3 },
    set_$WF: function(n) { return this.$9_3 = n, n },
    $2t: function() {
        this.$Q0 = this.get_$WF().$B3;
        var t = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(16, this.get_$2C(), this.$Q0, 1, !0, null, 2),
            i = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(30, this.get_$2C(), this.$Q0, 1, !0, null, 2),
            r = [
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(t, this.get_$e()), Microsoft.Crm.Client.Core
                .Storage.DataApi.DataSource.$3.$5c(i, this.get_$e())
            ],
            n = this;
        return this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(r),
            function(t) {
                t.length === 2
                    ? n.$3MV(t[0], t[1])
                    : t.length > 0 && Microsoft.Crm.Client.Core.Framework.$4.isInstanceOfType(t[0])
                    ? n.$5J(t[0])
                    : n.$5J(Microsoft.Crm.Client.Core.Framework.$4
                        .$h("Unknown error in RetrieveLookupViewQueryFromEntityTypeAction"))
            },
            this.$$d_$5J), 1
    },
    $3MV: function(n, t) {
        if (n.get_$3XJ() > 0 && t.get_$3XJ() > 0) {
            var i = new Microsoft.Crm.Client.Core.Models
                .$87(new Microsoft.Crm.Client.Core.Framework.Guid(n.get_$H(0).$g),
                    n.get_$H(0).get_$Gz(),
                    t.get_$H(0).get_$5Z(),
                    this.$Q0);
            this.$1al ? this.get_$WF().$2Ox(i) : this.get_$WF().$1Xj(i);
            this.$1U()
        } else this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$h("Lookup definition not found"))
    },
    $5J: function(n) {
        var t = Microsoft.Crm.Client.Core.Models.$87.$287(this.$Q0);
        this.$1al ? this.get_$WF().$2Ox(t) : this.get_$WF().$1Xj(t);
        $0.$1(this.$1I_3) || this.$1I_3(n);
        this.$6j(null)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrievePersonalization",
                Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.$B = function(n) {
    var u = n, t = new Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction, i, r;
    return t.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.$VI(u), i = u, t
        .$P = i.$$d_$39x || (i.$$d_$39x = Function.createDelegate(i, i.$39x)), r = u, t
        .$1I_3 = r.$$d_$2Me || (r.$$d_$2Me = Function.createDelegate(r, r.$2Me)), t.$9_3 = u, t
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction
    .$VI = function(n) {
        return Microsoft.Crm.Client.Core.ViewModels.CrmTileContainerViewModel.isInstanceOfType(n) && !n.$jH
            ? Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yZ
            : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yY
    };
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.prototype = {
    $P: null,
    $2t: function() {
        var n = this.$9_3;
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$49,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$hD(n.get_$a9()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        if (!$0.$1(this.$P)) {
            var t = Microsoft.Crm.Client.Core.Models.$8a.$B(n.$7D);
            this.$P(t)
        }
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction = function() {
    this.$$d_$2Zt = Function.createDelegate(this, this.$2Zt);
    this.$$d_$1Eo = Function.createDelegate(this, this.$1Eo);
    this.$bA = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.Framework.$4J);
    this.$1e9 = Microsoft.Crm.Client.Core.Framework.$3K.Instance.$DQ(Microsoft.Crm.Client.Core.Framework.$6y);
    Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RootDefinition", Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$32I)
    };
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$32I = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction;
    return Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$1Dd(t, n), t
};
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$1Dd = function(n, t) {
    var i = t, r, u;
    n.$9_3 = i;
    n.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ps;
    n.$cq = i.get_ViewModelId();
    n.$p = i.get_componentType();
    n.$1s = i.get_definitionId();
    n.$An = i.get_applicationMetadataType();
    n.$g = i.get_sourceId();
    r = i;
    n.add_$RE(r.$$d_$gH || (r.$$d_$gH = Function.createDelegate(r, r.$gH)));
    u = i;
    n.add_$O3(u.$$d_$1Fa || (u.$$d_$1Fa = Function.createDelegate(u, u.$1Fa)))
};
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.prototype = {
    $1s: null,
    $g: null,
    $cq: null,
    $Nt: null,
    $An: 1,
    $p: 0,
    get_$RW: function() { return $0.$1(this.$Nt) ? null : this.$Nt.ViewModelDescriptor },
    $16M: function() {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4), i, n, r;
        return $0.$1(this.get_$RW()) || this.$9_3.get_$Dp()
            ? t.resolve()
            : (i = Microsoft.Crm.Client.Core.ViewModels.QuickCreateFormViewModel.isInstanceOfType(this.$9_3) &&
                    Microsoft.Crm.Client.Core.Framework.$6.get_$2C() !== 4, n = this, Microsoft.Crm.Client.Core
                    .Framework
                    .Scheduler.Schedule(function(r) {
                            var u = new Microsoft.Crm.Client.Core.Framework
                                .PerformanceStopwatch("RootViewModel:UpdateRoot:UpdateRootViewModel");
                            u.start();
                            n.$1e9.$2Yt(n.$cq, n.get_$RW(), null, i ? null : r);
                            u.stop();
                            u.addParameter(n.$1s);
                            i && n.$pG(t)
                        },
                        Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$16M,
                        "GetRootDefinitionAction.UpdateRoot.UpdateRootViewModel"),
                i ||
                (r = this, Microsoft.Crm.Client.Core.Framework.Scheduler
                    .Schedule(function() { r.$pG(t) },
                        Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$16M,
                        "GetRootDefinitionAction.UpdateRoot.UpdateView"))), t.promise()
    },
    $pG: function(n) {
        var t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("RootViewModel:UpdateRoot:UpdateView"), i;
        t.start();
        i = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$Gu(this.get_$RW());
        this.$2Yt(i);
        $0.$1(this.$bA) || this.$bA.$pG(this.$cq, i);
        t.stop();
        t.addParameter(this.$1s);
        Microsoft.Crm.Client.Core.Framework.PerformanceMarker
            .$1Mo("LoadedInteractionReady", 1, this.$9_3.get_ViewModelId());
        n.resolve()
    },
    $2Yt: function() {},
    $2t: function() { return this.$vF(), 1 },
    $vF: function(n) {
        var t = new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(this.$p, this.get_$2C(), this.$1s, 1, !0, this.$g), i;
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() && (t.$11j = !1);
        n || (n = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(t, this.get_$e()));
        i = this;
        this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            n,
            function(n) { i.$39e(n, t) },
            this.$$d_$1Eo)
    },
    $39e: function(n, t) {
        var i, r, u;
        n.get_$3XJ() > 0
            ? (this.$Nt = n.get_$H(0).get_$5Z(), this.$9_3
                .set_sourceId(n.get_$H(0).$g), $0.$1(this.get_$RW()) ||
                this.$9_3.get_$Dp() ||
                (i = Microsoft.Crm.Client.Core.ViewModels.$1Q
                        .$CA(Array, "AttributeFieldNames", this.get_$RW().Properties),
                    $0.$1(i)
                        ? this.$19x()
                        : this.$1k(Microsoft.Crm.Client.Core.Framework.$P
                            .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$1s, i), this.get_$e()),
                            this.$1jZ(Microsoft.Crm.Client.Core.Framework.$P
                                .$$(Microsoft.Crm.Client.Core.Storage.Common.$2M)),
                            this.$1jZ(Microsoft.Crm.Client.Core.Framework.$4))))
            : t.$6h === "Workspace".toUpperCase()
            ? (r = new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(this.$p, this.get_$2C(), this.$1s, 1, !0), u = this, this
                .$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(r, this.get_$e()),
                    function(n) { u.$2pU(n, r) },
                    this.$$d_$1Eo))
            : t.$6h === "Workspace".toUpperCase()
            ? this.$1Eo(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094011))
            : t.$6h === "InteractionCentricWorkspace".toUpperCase()
            ? Microsoft.Crm.Client.Core.ViewModels.$Z.$3S9(Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Error_Title_ServiceDesk_AccessDenied_DateRange"),
                Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Message_ServiceDesk_AccessDenied_DateRange"),
                this.$$d_$2Zt)
            : (Microsoft.Crm.Client.Core.Framework.Trace
                .logError(1, String.format("Root definition '{0}' not found.", t.toString())), this
                .$1Eo(Microsoft.Crm.Client.Core.Framework.$4.$lh(0)))
    },
    $2pU: function(n) {
        var t, o, i, h, c;
        if (n.get_$3XJ() > 0) {
            var f = {}, r = new Array(0), u = new Array(0);
            for (t = 0; t < n.get_$3XJ(); ++t) {
                for (var s = n.get_$H(t).get_$5Z().ViewModelDescriptor.Properties, l = s.length, e = 0; e < l; ++e)
                    if (o = s[e], o.Name === "IsSystemDashboard") {
                        o.Value ? Array.add(r, n.get_$H(t).$1P) : Array.add(u, n.get_$H(t).$1P);
                        break
                    }
                f[n.get_$H(t).$1P] = n.get_$H(t)
            }
            i = null;
            r.length > 0 ? (r.sort(), i = f[r[0].toString()]) : u.length > 0 && (u.sort(), i = f[u[0].toString()]);
            this.$9_3.set_sourceId(i.$g);
            this.$Nt = i.get_$5Z();
            this.$19x()
        } else
            h = Microsoft.Crm.Client.Core.Framework.Common.$2.$1DQ("MoCA_No_Dashboard_Information_Message")
                ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("MoCA_No_Dashboard_Information_Message")
                : "", c = Microsoft.Crm.Client.Core.Framework.Common.$2.$1DQ("PinnedTiles")
                ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("PinnedTiles")
                : "", this.$Nt = Microsoft.Crm.Client.Core.Models.Descriptors.$U.$2jx(this.get_$2C() === 2, h, c), this
                .$19x()
    },
    $2Zt: function() { this.dispose() },
    $19x: function() {
        var n = this;
        this.$1k(Object, this.$16M(), function() { n.$1U() }, this.$$d_$1Eo)
    },
    $1jZ: function() {
        var n = this;
        return function() { n.$19x() }
    },
    $1Eo: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    this.$$d_$Fn = Function.createDelegate(this, this.$Fn);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("AttributeMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction.$2xv)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction.$2xv = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction, r;
    return i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y2, r = t, i.$BJ = r
        .EntityType, i.$2x = r.Attributes, i.$P = r.OnSuccess, i.$1I_3 = r.OnFailure, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction.prototype = {
    $P: null,
    $BJ: null,
    $2x: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$BJ, this.$2x), this.get_$e()),
            this.$$d_$Fn,
            this.$$d_$95), 1
    },
    $Fn: function(n) {
        n.get_$3XJ() > 0
            ? ($0.$1(this.$P) || this.$P(n.$21O()), this.$1U())
            : this.$95(Microsoft.Crm.Client.Core.Framework.$4
                .$h(String.format("No attribute metadata found for entity type : {0}", this.$BJ)))
    },
    $95: function(n) {
        $0.$1(this.$1I_3) || this.$1I_3(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction = function() {
    this.$$d_$3AF = Function.createDelegate(this, this.$3AF);
    this.$$d_$3FQ = Function.createDelegate(this, this.$3FQ);
    this.$$d_$1En = Function.createDelegate(this, this.$1En);
    this.$$d_$3FS = Function.createDelegate(this, this.$3FS);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveChartByIdAction",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.$1n9)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.$1n9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction;
    return t.$1nA(n), t
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.prototype = {
    $A3: null,
    $K5: null,
    $Lc: null,
    $XO: null,
    $Ap: null,
    $1nA: function(n) {
        var t = n;
        this.$9_3 = t;
        this.$A3 = new Xrm.Objects.EntityReference(t.$PA, new Microsoft.Crm.Client.Core.Framework.Guid(t.$A3));
        this.$K5 = new Xrm.Objects.EntityReference(t.$bC, new Microsoft.Crm.Client.Core.Framework.Guid(t.$K5));
        this.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y3
    },
    $1mt: function(n, t) {
        var i = this.$5d("OnLoadDataFailed");
        i && i(this, new Microsoft.Crm.Client.Core.Storage.DataApi.$9z(n, t))
    },
    $2t: function() {
        if ($0.$1(this.$A3)) throw Error.create("viewid is required to call retrieve chart data");
        if ($0.$1(this.$K5)) throw Error.create("visualizationId is required to call retrieve chart data");
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(23, this.get_$2C(), null, 1, !1, this.$K5.Id.toString()),
                this.get_$e()),
            this.$$d_$3FS,
            this.$$d_$1En), 1
    },
    $3FS: function(n) {
        if (n.get_$3XJ() > 0)
            this.$XO = n.get_$H(0), this.$33G(), this.$1k(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(16, this.get_$2C(), null, 1, !1, this.$A3.Id.toString()),
                    this.get_$e()),
                this.$$d_$3FQ,
                this.$$d_$3AF);
        else {
            var t = new Microsoft.Crm.Client.Core.Framework
                .$5k(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_NoReadPrivilege"),
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Error_Message_0x80040220"));
            this.$1DG(t)
        }
    },
    $3FQ: function(n) {
        var t, r, u, f;
        if (n.get_$3XJ() > 0) {
            this.$Lc = n.get_$H(0);
            t = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("RetrieveChartDataAction.ParserFetchData");
            t.start();
            r = this.$XO.get_$5Z().datadescription;
            u = this.$Lc.get_$Gz().$AM(1);
            this.$33B();
            try {
                this.$Ap = new Microsoft.Crm.Client.Core.Models.Chart.$IN(r, u);
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
                    .isFeatureEnabled("InteractionCentricMultiEntityChartsFeature") &&
                    this.$3V6(this.$Ap.$Bd.$6z.get_$1H())
            } catch (i) {
                if (Microsoft.Crm.Client.Core.Framework.$5k
                    .$1EB(i))
                    f = Microsoft.Crm.Client.Core.Framework.$5L
                        .$1Ra(Microsoft.Crm.Client.Core.Framework.$5k, i, "ChartError"), this.$1DG(f);
                else throw i;
            }
            t.stop();
            this.$3X0()
        } else this.$1En(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147084511))
    },
    $33B: function() {},
    $3V6: function() {},
    $33G: function() {},
    $2Av: function() {
        var r, u, t, i, n, f;
        if (this.$9_3.get_$Dp()) {
            this.$1U();
            return
        }
        r = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch("RetrieveChartDataAction.ProcessFetchData");
        r.start();
        this.$Ap.$2WI();
        u = this.$2H9(this.$Ap.get_$2ZZ());
        t = new Microsoft.Crm.Client.Core.Storage.DataApi.$1O(this.$Ap.get_$1H());
        t.$Od = !0;
        t.$2u = this.$Ap.$Bd.$6z.$Eg;
        r.stop();
        i = [];
        Array.addRange(i, this.$Ap.$Bd.$2Sp());
        Array.add(i, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$vH(t, u, this.get_$e()));
        n = this;
        f = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i),
            function(t) {
                for (var r, f, u = null, i = 0;
                    i < t.length;
                    i++
                )
                    $0.$1(t[i]) ||
                        Object.getType(t[i]) !== Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection
                        ? (r = t[i].$21O(), f = n.$Ap.$Bd.$nF[r[0].$T], r.length > 0 && !$0.$1(f) && f.$En.$nC(r, !1))
                        : u = t[i];
                u
                    ? n.$Hv(function() { n.$2MQ(u) }, Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1O9)
                    : n.$1En(Microsoft.Crm.Client.Core.Framework.$4
                        .$h("load chart data failure, EntityCollection is not found in results! "))
            },
            function(n) { f.$2MO(n) })
    },
    $2H9: function(n) {
        var i = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Storage.DataApi.$1O)), t;
        return n && (t = new Microsoft.Crm.Client.Core.Storage.DataApi.$1O(n), t.$2u = 0, t.$Od = !0, i.set_$H("", t)),
            i
    },
    $3IK: function(n) { return n },
    $2MQ: function(n) {
        if (this.$9_3.get_$Dp()) this.$1U();
        else if ($0.$1(n))
            this.$1z(Microsoft.Crm.Client.Core.Framework.$4.$h(String.format("Retrieve multiple returned null")));
        else {
            var r = this.$3IK(n),
                t = this.$9_3,
                i = new Microsoft.Crm.Client.Core.Framework
                    .PerformanceStopwatch("RetrieveChartDataAction.BuildChartModel");
            i.start();
            $0.$1(t.$Nc) || (t.$Nc.$69(), t.set_CrmChartBuilder(null));
            t.set_CrmChartBuilder(Microsoft.Crm.Client.Core.ViewModels.Controls.$9Y
                .$2iF(this.$Lc, this.$XO, this.$Ap.$Bd, Microsoft.Crm.Client.Core.Models.$1E.$B(r)));
            this.$1U();
            i.stop()
        }
    },
    $3X0: function() {
        var t = this.$Ap.$Bd.$3MF(), n, i;
        t.length
            ? (n = this, i = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t),
                function(t) {
                    n.$Ap.$Bd.$P5(t);
                    n.$2Av()
                },
                function(n) { i.$1En(n) }))
            : (this.$Ap.$Bd.$P5(null), this.$2Av())
    },
    $1En: function(n) {
        this.$1z(n);
        this.$2gA();
        this.$1mt("RetrieveChartDataAction", n.$E)
    },
    $2gA: function() {
        this.$Lc = null;
        this.$XO = null;
        this.$Ap = null
    },
    $3AF: function(n) {
        this.$1z(n);
        this.$1mt("RetrieveViewData", n.$E)
    },
    $2MO: function(n) {
        var t, i;
        n.$10 === -2147093999
            ? (t = new Microsoft.Crm.Client.Core.Framework
                .$5k(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("L_Offline_Indicator_Text"),
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_UnavailableOffline")), this.$1DG(t))
            : n.$10 === -2147220960
            ? (i = new Microsoft.Crm.Client.Core.Framework
                .$5k(Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_NoReadPrivilege"),
                    Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Chart_NoPermission_Message")), this.$1DG(i))
            : (this.$1z(n), this.$1mt("RetrieveVizData", n.$E))
    },
    $1DG: function(n) {
        if (!$0.$1(this.$9_3) && !this.$9_3.get_$Dp()) {
            var i = this.$9_3, t = new Microsoft.Crm.Client.Core.Models.Chart.$IE;
            t.$6U = new Microsoft.Crm.Client.Core.Models.$JC;
            t.$ar = this.$Lc ? this.$Lc.$1P : "";
            t.$J7 = 1;
            t.$Dg = new Microsoft.Crm.Client.Core.Framework.$N7;
            t.$Dg.$e7 = n.get_$wA();
            t.$Dg.$YO = n.get_$1Ap();
            i.set_$zD(t)
        }
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveCommandSetAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveCommandSet",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.$JF)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.$JF = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction, r;
    return i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y6, r = t, i.$KS = r
        .QueryValue, $0.$1(r.OnSuccess) || (i.$P = r.OnSuccess), $0.$1(r.OnFailure) || (i.$1I_3 = r.OnFailure), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.prototype = {
    $P: null,
    $KS: null,
    $Pq: null,
    $2t: function() {
        var n = this, t = this;
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(9, this.get_$2C(), null, 1, !0, this.$KS),
                this.get_$e()),
            function(t) {
                if (t.get_$3XJ() > 0) {
                    var i = t.get_$H(0).get_$5Z();
                    n.$Pq = i
                } else n.$Pq = new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("");
                n.$4Y()
            },
            function(n) { t.$5J(n) }), 1
    },
    $4Y: function() {
        var t, n, i;
        $0.$1(this.$Pq) || $0.$1(this.$P)
            ? this.$1U()
            : (t = [], this.$23o(t, this.$Pq.Controls), n = this, i = this, this.$BI(Microsoft.Crm.Client.Core.Imported
                .DeferredPromiseHelper.whenArray(t),
                function() {
                    n.$P(new Microsoft.Crm.Client.Core.ViewModels.$6n(n.$9_3, n.$Pq));
                    n.$1U()
                },
                function(n) { i.$1z(n) }))
    },
    $5J: function(n) { this.$1z(n) },
    $23o: function(n, t) {
        for (var i, u = t, f = u.length, r = 0;
            r < f;
            ++r
        )
            i = u[r], i.Children.length > 0
                ? this.$23o(n, i.Children)
                : $0.$1(i.CommandParameters) ||
                $0.$1(i.CommandParameters.RetrievalAction) ||
                Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.$2Ch.contains(i.Id) ||
                Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                this.$9_3.$8G === 1 &&
                i.Id === "ProcessControlsButton" ||
                Array.add(n, this.$3MJ(i))
    },
    $3MJ: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            i = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                .QueryDescriptor(n.CommandParameters.RetrievalAction,
                    this.$9_3.get_$2W() + n.CommandParameters.ContextSuffix,
                    !1,
                    [1, 2]),
            r = this;
        return i.OnSuccess = function(i) {
            $0.$1(i) || $0.$1(i.$FS) || (n.Children = i.$FS.Controls);
            t.resolve(null)
        }, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
            .$2T("ActionProvider", this.$9_3, i), t.promise()
    }
};
Microsoft.Crm.Client.Application.ViewModels.$B5 = function() {
    this.$$d_$3EU = Function.createDelegate(this, this.$3EU);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$1tB = Function.createDelegate(this, this.$1tB);
    Microsoft.Crm.Client.Application.ViewModels.$B5.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$B5.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("LookupByName",
        Microsoft.Crm.Client.Application.ViewModels.$B5.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$B5.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.$B5, i = n;
    return t.$P = i.$$d_$4Y, t.$1I_3 = i.$$d_$5J, t.$1vZ = i.$$d_$1tJ, t.$9_3 = i, t.$X4 = i.$FE, t.$T = i.$J, t
};
Microsoft.Crm.Client.Application.ViewModels.$B5.prototype = {
    $P: null,
    $1vZ: null,
    $T: null,
    $X4: null,
    $e4: null,
    $2t: function() {
        var n = this.$9_3;
        return $0.$1(n.get_$AH()) ? this.$Qn() : this.$3NX(), 1
    },
    $Qn: function() {
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$T, this.get_$e()),
            this.$$d_$1tB,
            this.$$d_$5J)
    },
    $1tB: function(n) {
        var t = this.$9_3, u, r, f, o, i, s, h, e;
        $0.$1(t.get_$AH()) || t.get_$AH().set_LookupDisplayName(n.get_$AB());
        u = null;
        $0.$1(t.get_$AH()) || $0.$1(t.get_$AH().$In) || (u = t.get_$AH().$In);
        r = Array.clone(t.get_$2lH());
        f = Array.clone(t.get_$2lI());
        this.$e4 = n.get_$GU();
        $0.$1(u) && (o = new Microsoft.Crm.Client.Core.Storage.DataApi.$Ny(this.$T), u = o.$2e6());
        i = Microsoft.Crm.Client.Core.ViewModels.$5o.$Al.$28V(u, this.$T, this.$e4, this.$9_3);
        $0.$1(this.$9_3.get_ModelContext()) ||
            this.$T !== this.$9_3.get_ModelContext().get_ModelName() ||
            $0.$1(n) ||
            $0.$1(n.get_$HZ()) ||
            (s = "<condition attribute='" +
                n.get_$HZ() +
                "' operator='ne' value='" +
                this.$9_3.get_ModelContext().get_Id() +
                "' />", Array.add(r, s), Array.add(f, this.$T));
        Microsoft.Crm.Client.Core.Framework.$3.$A(t.get_$AH().get_$1Zq()) ||
            (t.get_$AH().$1L8 ? i.$3Qu(t.get_$AH().get_$1Zq()) : Array.add(r, t.get_$AH().get_$1Zq()));
        i.set_$80(1);
        i.$2u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K()
            ? Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$2L.$h0
            : 25;
        t.get_$2ZA() && Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s()
            ? (h = new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(16, Microsoft.Crm.Client.Core.Framework.$6.get_$2C(), this.$T, 1, !0, null, 3), e = this, this
                .$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(h, this.get_$e()),
                    function(n) {
                        n.$21O().length > 0
                            ? (i.$2W1(e
                                .$X4,
                                r,
                                f,
                                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V(),
                                !1), e.$3Ms(t, i, n))
                            : e.$2T7(i, r, f)
                    },
                    this.$$d_$5J))
            : this.$2T7(i, r, f)
    },
    $3Ms: function(n, t, i) {
        var o, u;
        if (this.$T in n.$qC)
            o = n.$qC[this.$T].$6a.get_$H("fetchXml").Data, u = Microsoft.Crm.Client.Core.Storage.Common.FetchXml.$2p
                .$m5(t.get_$1H()), u.$24T(o), this.$2T4(t, u.$m6());
        else
            for (var f = i.$21O(), s = f.length, r = 0; r < s; ++r) {
                var h = f[r],
                    c = new Xrm.Objects.EntityReference("savedquery",
                        new Microsoft.Crm.Client.Core.Framework.Guid(h.$g)),
                    e = this,
                    l = this;
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$6F(c,
                        new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["querytype"]),
                        Microsoft.Crm.Client.Core.ViewModels.$w.get_$Jc(),
                        this.get_$e()).then(function(r) {
                            var f = Microsoft.Crm.Client.Core.Models.$O.$B(r),
                                s = f.$M.fields.querytype,
                                h = f.$M.fields.savedqueryid.toString(),
                                u;
                            if (s === 4) {
                                for (u = 0, u = 0; u < i.get_$3XJ(); u++) if (i.get_$H(u).$g === h) break;
                                n.$qC[e.$T] = i.get_$H(u).get_$Gz();
                                var c = i.get_$H(u),
                                    l = c.get_$Gz().$6a.get_$H("fetchXml").Data,
                                    o = Microsoft.Crm.Client.Core.Storage.Common.FetchXml.$2p.$m5(t.get_$1H());
                                o.$24T(l);
                                e.$2T4(t, o.$m6())
                            }
                        },
                        function(n) {
                            Microsoft.Crm.Client.Core.Framework.Trace
                                .logError(1007,
                                    "Retrieve Failed for RetrieveQuickFindMetadataAndLookupResults in LookupByNameAction with error : {0}",
                                    n.$E)
                        })
            }
    },
    $2T4: function(n, t) {
        var e, i, r, u, f;
        this.$X4 === "" && (this.$X4 = "*");
        n.set_$1H(Microsoft.Crm.Client.Core.ViewModels.$2D.$1nP(t, this.$X4));
        e = Microsoft.Crm.Client.Core.ViewModels.$2D.$1D2(n.get_$1H());
        $0.$1(e) && !Microsoft.Crm.Client.Core.ViewModels.$2D.$1ER(this.$X4)
            ? this.$4Y(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection(new Array(0), !1, 0, !1))
            : (i = "", r = Microsoft.Crm.Client.Core.ViewModels.$2D
                .$1TF(n.get_$1H()), $0.$1(r) || (i = r.toString()), u = this, f = this, Microsoft.Crm.Client.Core
                .Storage
                .DataApi.DataSource.$3.$36(n, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), this.get_$e())
                .done(function(n) {
                    u.$4Y(n);
                    var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                        .$RR("ServiceDeskQuickFindSearchEvent");
                    t.$t("EntityName", u.$T);
                    t.$t("ColumnSet", i);
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t)
                }).fail(function(n) {
                    f.$5J(n);
                    var t = new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                        .$RR("ServiceDeskQuickFindSearchFailedEvent");
                    t.$t("EntityName", f.$T);
                    t.$t("ColumnSet", i);
                    t.$t("ErrorStatus", n.$E);
                    Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().$1w(t)
                }))
    },
    $4Y: function(n) {
        var r = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction
                .$1PA(this.$9_3, Microsoft.Crm.Client.Core.Models.$1E.$B(n)),
            i,
            t;
        for (this.$P(r), i = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Framework.$3h)), t = 0;
            t < n.get_count();
            t++)
            i.add(new Xrm.Objects.EntityReference(n.get_$H(t).$2n.LogicalName,
                n.get_$H(t).$2n.Id,
                n.get_$H(t).getValue(this.$e4)));
        this.$1vZ(i.toArray());
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) },
    $2T7: function(n, t, i) {
        n.$2W1(this.$X4, t, i, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V(), !0);
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(n, Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)
    },
    $3NX: function() {
        var n = this.$9_3, t, i;
        n.get_$AH().$26S();
        !$0.$1(n.get_$AH().$Wh) && !$0.$1(n.get_$AH().$Wh.handlers) && n.get_$AH().$Wh.handlers.get_Count() > 0
            ? (t = this.$9_3.get_$AH().$Wh, t.runCompleteCallback = this.$$d_$3EU, i = Microsoft.Crm.Client.Core
                .ViewModels.CustomScriptsContainerViewModel.get_$5().$uj.length, Microsoft.Crm.Client.Core.ViewModels
                .CustomScriptsContainerViewModel.get_$5()
                .$BU(t), Microsoft.Crm.Client.Core.ViewModels.CustomScriptsContainerViewModel.get_$5().$uj.length > i &&
                this.$Qn())
            : this.$Qn()
    },
    $3EU: function() { this.$WW.get_$W8() && this.$Qn() }
};
Microsoft.Crm.Client.Application.ViewModels.$3a = function() {
    Microsoft.Crm.Client.Application.ViewModels.$3a.initializeBase(this, [1])
};
Microsoft.Crm.Client.Application.ViewModels.$3a.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("CreateRecord",
        Microsoft.Crm.Client.Application.ViewModels.$3a.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$3a.$B = function(n) {
    return Microsoft.Crm.Client.Application.ViewModels.$3a.$1AJ(n)
};
Microsoft.Crm.Client.Application.ViewModels.$3a.$1AJ = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.$3a, i, r, u;
    return Microsoft.Crm.Client.Core.ViewModels.Interfaces.$AX.isInstanceOfType(n) &&
    (i = n, t.$9_3 = i, r = i, t.$P = r.$$d_$1ug || (r.$$d_$1ug = Function.createDelegate(r, r.$1ug)), u = i, t
        .$1I_3 = u.$$d_$1ue || (u.$$d_$1ue = Function.createDelegate(u, u.$1ue)), t
        .set_$P8(i.get_$P8()), Microsoft.Crm.Client.Core.Framework.$6.get_$k() && i.get_$2qf() === 1 && (t.$vT = 2)), t
};
Microsoft.Crm.Client.Application.ViewModels.$3a.prototype = {
    $P: null,
    $1aM: null,
    $1aL: null,
    $Qn: function() {
        var t = this.$9_3.get_ModelContext(), n;
        return!Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() &&
            Microsoft.Crm.Client.Core.ViewModels.$n.$DF() &&
            !Microsoft.Crm.Client.Core.ViewModels.$n.$L0(t.$M.$N.LogicalName)
            ? (this.$1b1(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093996)), 1)
            : (Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                .$6Y("CreateRecordActionInitiated", 0, this.$9_3.get_ViewModelId()), n = this, this.$1k(Xrm.Objects
                .EntityReference,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$B(t.$M, this.get_$P8(), this.get_$e()),
                function(i) {
                    Microsoft.Crm.Client.Core.Framework.PerformanceMarker
                        .$6Y("CreateRecordActionFinished", 0, n.$9_3.get_ViewModelId());
                    n.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(t.$M.$N.LogicalName, n.get_$e()),
                        function(r) {
                            var f, u;
                            Microsoft.Crm.Client.Core.ViewModels.Interfaces.$AX.isInstanceOfType(n.$9_3)
                                ? (u = new(Microsoft.Crm.Client.Core.Framework.List$1
                                    .$$(String))(n.$9_3
                                    .get_$2dT()), u.contains(r.get_$GU()) || u.add(r.get_$GU()), f = new Microsoft.Crm
                                    .Client.Core.Storage.Common.ColumnSet(u.toArray()))
                                : f = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet([r.get_$GU()]);
                            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s()
                                ? n.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                                    .$6F(i, f, Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu(), n.get_$e()),
                                    function(t) { n.$285(t, r.get_$GU()) },
                                    n.$$d_$1b1)
                                : n.$285(t.$M, r.get_$GU())
                        },
                        n.$$d_$1b1)
                },
                this.$$d_$1b1), 1)
    },
    $1U: function() {
        $0.$1(this.$P) || this.$P(this.$1aM, this.$1aL);
        Microsoft.Crm.Client.Core.ViewModels.$Tg.prototype.$1U.call(this)
    },
    $GN: function() {
        this.$1aM = null;
        this.$1aL = null;
        Microsoft.Crm.Client.Core.Framework.$BI.prototype.$GN.call(this)
    },
    $285: function(n, t) {
        Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(this.$9_3.get_ModelContext()) &&
            this.$9_3.get_ModelContext().$69();
        var i = Microsoft.Crm.Client.Core.Models.$O.$B(n), r = i.$M.$N;
        this.$9_3.set_ModelContext(i);
        this.$1aM = i;
        this.$1aL = new Xrm.Objects.EntityReference(r.LogicalName, r.Id, i.$M.getValue(t));
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() && Microsoft.Crm.Client.Core.ViewModels.$p.$1hF(i);
        this.$1U()
    }
};
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction = function() {
    this.$$d_$2lt = Function.createDelegate(this, this.$2lt);
    this.$$d_$2lu = Function.createDelegate(this, this.$2lu);
    Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("DeleteRecord", Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction, r = t;
    return i.$S = r.QueryValue, i.$P = r.OnSuccess, i.$1I = r.OnFailure, i
};
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction.prototype = {
    $P: null,
    $1I: null,
    $S: null,
    $2t: function() {
        var n = new Xrm.Objects.EntityReference(this.$S.entityName.toString(),
            new Microsoft.Crm.Client.Core.Framework.Guid(this.$S.entityId.toString()));
        return this.$1k(Xrm.Objects.EntityReference,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.Delete(n, this.get_$e()),
            this.$$d_$2lu,
            this.$$d_$2lt), 1
    },
    $2lu: function(n) {
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() && Microsoft.Crm.Client.Core.ViewModels.$p.$2SD(n);
        this.$P(n);
        this.$1U()
    },
    $2lt: function(n) {
        this.$1I(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .RetrieveCustomizationModelAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("Customization",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction.$1Sn)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction.$1Sn = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction;
    return i.$1s = t, i.$9_3 = n, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1y7, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction.prototype = {
    $P: null,
    $1s: null,
    $2t: function() {
        var t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(6, this.get_$2C(), null, 1, !1, this.$1s),
                    this.get_$e()),
            i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi.$O3(25, this.get_$2C(), null, 1, !1, this.$1s),
                    this.get_$e()),
            n = this,
            r = this;
        return this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(t, i),
            function(t) {
                var i = null, r = null, u;
                t[0].get_$3XJ() > 0 &&
                    !$0.$1(t[0].get_$H(0)) &&
                    (String.isInstanceOfType(t[0].get_$H(0).get_$5Z())
                        ? r = t[0].get_$H(0).get_$5Z()
                        : i = t[0].get_$H(0).get_$5Z());
                t[1].get_$3XJ() > 0 &&
                    !$0.$1(t[1].get_$H(0)) &&
                    (String.isInstanceOfType(t[1].get_$H(0).get_$5Z())
                        ? r = t[1].get_$H(0).get_$5Z()
                        : i = t[1].get_$H(0).get_$5Z());
                u = new Microsoft.Crm.Client.Core.Models.$3E(n.$1s, i, r);
                $0.$1(n.$P) || n.$P(u);
                Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().$IV(n, u);
                n.$1U()
            },
            function(n) { r.$95(n) }), 1
    },
    $95: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().$3Em(this);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveOptionSetMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction, e = t, r = n, u, f;
    return i.$P = r.$$d_$1vH, i.$9_3 = r, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
        .$1yU, Microsoft.Crm.Client.Core.ViewModels.$5I.isInstanceOfType(n) &&
        Microsoft.Crm.Client.Core.ViewModels.$4B.isInstanceOfType(n.$2)
        ? (u = n.$2.get_ModelContext(), f = e.QueryValue, i.$1K = u.$1CV(f).get_$HS(), i.$CX = u.$2GI(f))
        : (i.$1K = r.$J, i.$CX = e.QueryValue), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction.prototype = {
    $P: null,
    $1K: null,
    $CX: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$1K, [this.$CX]), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $Bs: function(n) {
        var i = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1N)),
            r = n.$Tj,
            t,
            u,
            f;
        for (t in r) u = { key: t, value: r[t] }, f = u.value, i.add(f);
        return i.toArray()
    },
    $4Y: function(n) {
        var t, i, r;
        n.get_$3XJ() === 1 && n.get_$H(0).get_$1l() === this.$CX
            ? (t = n.get_$H(0), i = t.get_$Bs(), $0.$1(i)
                ? this.$5J(Microsoft.Crm.Client.Core.Framework.$4
                    .$h("OptionSet is null on the returned IAttributeMetadata"))
                : (r = this.$Bs(i), $0.$1(this.$P) || this.$P(r, t.get_$1Pl() === -1, t.get_$1Pl()), this.$1U()))
            : this.$5J(Microsoft.Crm.Client.Core.Framework.$4
                .$h(String.format("The metadata array does not have requested arribute name {0}", this.$CX)))
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction = function() {
    this.$$d_$2PG = Function.createDelegate(this, this.$2PG);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$2nm = Function.createDelegate(this, this.$2nm);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.initializeBase(this);
    this.$1Ik = {};
    this.$bo = 2;
    Microsoft.Crm.Client.Core.Framework.$6.get_$k() ||
        (this.$1Ik["00000000-0000-0000-00aa-000010001039"] = this.$$d_$2nm);
    this.$5Y = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V()
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXml",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$Km);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlForGrid",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rL);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("QueryId",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rO);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlWithDates",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2ph);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlWithCallback",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2pg);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlForSubject",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rM);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("FetchXmlWithPlaceholders",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2pi)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rM = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$Km(n, t), r = t;
    return i.$9_3 = n, i.$bo = 2, i.$P = function(n) { r.OnSuccess(n) }, i.$1I_3 = r.OnFailure, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2pg = function(n, t) {
    var u = n, r = t, i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction;
    return i.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(u), i
        .$P = function(n) { r.OnSuccess(n) }, i.$1I_3 = r.OnFailure, i.$9_3 = u, i.$IM = r.QueryValue.toString(), i
        .$2Q = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(r.QueryValue.toString()), i
        .$B6 = u.$1p.$BQ + 1, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$Km = function(n, t) {
    var i = n, u = t, r = new Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction, f;
    return r.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(i), r.$P = i.$$d_$4Y, r
        .$1I_3 = i.$$d_$5J, r.$9_3 = i, r.$IM = i.get_DefinitionId(), f = Microsoft.Crm.Client.Core.Storage.Common.$1U
        .$Bo(i.$J), r.$2Q = $0.$1(u.QueryValue)
        ? i.$2Q
        : Array.isInstanceOfType(u.QueryValue)
        ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$1AG(u.QueryValue, 16, f)
        : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$4y(u.QueryValue.toString()), r
        .$B6 = i.$1p.$BQ + 1, r
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rL = function(n, t) {
    var r = n, f = t, i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction, u;
    return i.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(r), i.$P = r.$$d_$4Y, i
        .$1I_3 = r.$$d_$5J, i.$9_3 = r, i.$IM = r
        .get_DefinitionId(), Microsoft.Crm.Client.Core.ViewModels.GridViewModel.isInstanceOfType(r) &&
        (i.$IM += r.get_$2dV()), i.$2Q = $0.$1(f.QueryValue)
        ? r.$2Q
        : Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X
        .$4y(f.QueryValue.toString()), Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel
        .isInstanceOfType(n) &&
        (u = n, u.$FI && (i.$IM += u.get_ViewModelId(), $0.$1(i.$2Q) || (i.$2Q = u.$2Tp(i.$2Q)))), i
        .$B6 = r.$1p.$BQ + 1, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2rO = function() { throw Error.notImplemented(); };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2ph = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$Km(n, t), r;
    return i.$IM = i.$IM + Math.random().toString(), r = i.$2Q
        .$AM(1), Microsoft.Crm.Client.Core.Framework.$3.$A(r) ||
    (r = r.replace("{_NOW_}",
        Microsoft.Crm.Client.Core.Framework.$1h.$2s1(Microsoft.Crm.Client.Core.Framework.$1h.get_$1uO())), i.$2Q
        .$Eh(1, r)), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$2pi = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$Km(n, t), r, u;
    return i.$IM = i.$IM + Math.random().toString(), r = i.$2Q.$AM(1), Microsoft.Crm.Client.Core.Framework.$3.$A(r) ||
    (u = new RegExp("\\{([^\\}]*)\\}", "gm"), r = r.replace(u,
        function() {
            var t = arguments[1],
                i = new Microsoft.Crm.Client.Core.Framework.$D1(t, Number, Microsoft.Crm.Client.Core.Framework.$7b);
            return n.$b(i)
        }), i.$2Q.$Eh(1, r)), i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction
    .$1PA = function(n, t) { return n.$2o || n.$1NG(t), t };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI = function(n) {
    var t, i;
    return Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(n.get_Root()) ||
        Object.getType(n).getName().indexOf("QueuePanelViewModel") > -1
        ? (t = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities
            .$14l, Object.getType(n).getName().indexOf("QueuePanelViewModel") > -1 &&
            (i = n.get_Root().$6B(n), n.get_Name().endsWith("0") && ($0.$1(i) || i.$I.endsWith("0")) || t--), t)
        : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yG
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction
    .$29n = function(n) {
        return Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(n.get_Root())
            ? Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yH
            : Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1ac
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.prototype = {
    $5Y: null,
    $P: null,
    $1v: null,
    $1Ik: null,
    $er: !1,
    $2Q: null,
    $IM: null,
    $B6: 0,
    $bo: 0,
    get_$2LW: function() {
        var n = this.$9_3;
        return!$0.$1(n.get_DefinitionId()) && n.get_DefinitionId().toLowerCase() in this.$1Ik
    },
    $2t: function() {
        var t = this.$9_3, i, r, n;
        return $0.$1(this.$2Q) || Microsoft.Crm.Client.Core.Framework.$3.$A(this.$2Q.$AM(1))
            ? (i = Microsoft.Crm.Client.Core.Framework.Guid
                    .tryCreate(t.get_DefinitionId()), r = i.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())
                    ? new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(16, this.get_$2C(), this.$9_3.get_$2W(), 1, !0, null, 1)
                    : new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(16, this.get_$2C(), this.$9_3.get_$2W(), t.$An, !1, i.toString()),
                Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
                    i.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) &&
                    !$0.$1(this.$9_3) &&
                    Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel
                    .isInstanceOfType(this.$9_3) &&
                    this.$9_3.$8I &&
                    (r = new Microsoft.Crm.Client.Core.Storage.DataApi
                        .$O3(16, this.get_$2C(), this.$9_3.get_$2W(), t.$An, !1, null, 1)), n = this, this
                    .$1k(Microsoft.Crm.Client.Core.Framework.$P
                        .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(r, this.get_$e()),
                        function(i) {
                            i.get_$3XJ()
                                ? (n.$2Q = i.get_$H(0).get_$Gz(), n.$2Q = t.$2Tp(n.$2Q), n.$25o(n.$2Q))
                                : n.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147094003))
                        },
                        this.$$d_$5J))
            : this.$25o(this.$2Q), 1
    },
    $25o: function(n) {
        var i, r, u, t, e, f;
        if (!Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s() &&
            Microsoft.Crm.Client.Core.ViewModels.$n.$DF()) {
            i = [];
            r = Microsoft.Crm.Client.Core.Storage.DataApi.$H.get_$5().$3H.get_$7q().$LD;
            for (u in r)
                t = { key: u, value: r[u] }, Microsoft.Crm.Client.Core.ViewModels.$n.$L0(t.key) &&
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$32()
                    .$2LM(t.key) &&
                    (e = null, Array.add(i,
                        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                        .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(t.key, e), null)));
            f = this;
            this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(i),
                function(t) {
                    for (var r, u = t, e = u.length, i = 0;
                        i < e;
                        ++i
                    ) r = u[i], f.$5Y.$Gs(r.get_$H(0).get_$e1(), !0, r);
                    f.$1m8(n)
                },
                this.$$d_$5J)
        } else this.$1m8(n)
    },
    $1m8: function(n) {
        var t, i, r;
        if ($0.$1(n)) this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(0));
        else if (Microsoft.Crm.Client.Core.ViewModels.$n.$38t(this.$2Q, this.$9_3.get_$2W())) {
            if (t = this.$9_3, Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel
                .isInstanceOfType(t) &&
                t.$FI ||
                (t.$2Q = n), this.$9_3.get_$Dp()) {
                this.$1U();
                return
            }
            this.$1v = this.$1Op(n);
            this.get_$2LW()
                ? this.$1Ik[t.get_DefinitionId().toLowerCase()]()
                : Microsoft.Crm.Client.Core.ViewModels.HierarchyListViewModel.isInstanceOfType(this.$9_3)
                ? (i = this, r = this, this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(t.$J, this.get_$e()),
                    function(n) {
                        i.$1v.$2aw(n.get_$HZ());
                        i.$Qn()
                    },
                    function(n) { r.$1z(n) }))
                : this.$Qn()
        } else this.$5J(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093989))
    },
    $Qn: function() {
        var t, i, u = !0, f, n, e, o;
        if (Microsoft.Crm.Client.Core.ViewModels.ListComponentViewModel.isInstanceOfType(this.$9_3) &&
            (f = this.$9_3, u = f.$1IF), this.$1v
            .$T ===
            "knowledgearticle" &&
            (u = !1), this.$1v.$B6 === 1 && u
            ? $0.$1(this.$9_3.get_Root()) || this.$9_3.get_Root().$p !== 1
            ? (t = 1, i = this.$bo)
            : (t = 0, i = this.$bo)
            : (t = 2, i = 1), Microsoft.Crm.Client.Core.ViewModels.InteractionCentricGridControlViewModel
            .isInstanceOfType(this.$9_3) &&
            (n = this.$9_3, this.$1v.$Ov = n.$Ov, this.$1v.$124 = n.$124, n.$FI && n.$17n)) {
            n.$17n = !1;
            this.$4Y(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection(new Array(0), !1, 0, !1));
            return
        }
        if (this.$1v.$T === "knowledgearticle" &&
            this.$1v.$124 &&
            !Microsoft.Crm.Client.Core.Framework.$3.$A(this.$1v.$Ov)) {
            var s = Sys.Net.XMLDOM(this.$1v.get_$1H()),
                h = s.getElementsByTagName("filter")[1],
                r = this.$HG(h.childNodes[0], "value");
            r = r.substring(0, r.length - 1);
            this.$1v.$Ov === r &&
            (e = this.$2pf(this.$1v.$B6, this.$1v.$2u), o = this, this
                .$1k(Xrm.Sdk.Response,
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$2B(new Xrm.Gen.FullTextSearchKnowledgeArticleRequest(this.$1v.$Ov, !0, !0, -1, e), this.get_$e()),
                    function(n) { o.$4Y(n.entityCollection) },
                    this.$$d_$5J))
        }
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(this.$1v,
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$23(t, i, Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$ZO()),
                this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J)
    },
    $2nm: function() {
        var n = this;
        this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.RollupRequest(this.$9_3.get_ModelContext().get_$Uo(), this.$1v.get_$1H(), 1),
                this.get_$e()),
            function(t) { n.$4Y(t.entityCollection) },
            this.$$d_$5J)
    },
    $1Op: function(n) {
        var t = this.$9_3, i = new Microsoft.Crm.Client.Core.Storage.DataApi.$86(n, this.$IM), e, h, c, f, u, r;
        if (Microsoft.Crm.Client.Core.ViewModels.$EA.isInstanceOfType(t) &&
        (e = t, i.$2WB(e.get_$20L(), this.$5Y), !$0.$1(i.$v) &&
            Microsoft.Crm.Client.Core.Framework.$3.$A(e.get_$20L().$3E) &&
            e.set_$20L(i.$v)), Microsoft.Crm.Client.Core.ViewModels.CustomControlDataSetViewModel.isInstanceOfType(t)) {
            for (h = t, c = new Array(0), f = 0; f < h.$E9.length; f++) c[f] = h.$E9[f].name;
            i.$3Qm(c)
        }
        if (!this.get_$2LW()) {
            if (u = $0.$1(t
                    .get_$1N())
                ? ""
                : t.get_$1N().get_Id(), Microsoft.Crm.Client.Core.ViewModels.CustomControlDataSetViewModel
                .isInstanceOfType(t) &&
                !$0.$1(t.get_$1N()) &&
                !$0.$1(t.$kN) &&
                !Microsoft.Crm.Client.Core.Framework.$3.$A(t.$kN)) {
                u = "";
                var o = null, l = t.$kN, s = l.split(".");
                s.length > 1
                    ? t.get_$1N().get_ModelName() === s[0] ? o = t.get_$1N().GetValue(s[1]) : u = t.get_$1N().get_Id()
                    : s.length === 1 && (o = t.get_$1N().GetValue(l));
                $0.$1(o) || (u = o.Id.toString())
            }
            Microsoft.Crm.Client.Core.ViewModels.GridViewModel.isInstanceOfType(this.$9_3)
                ? i.$Jv(u, t.$9Y, t.$2J, t.$BT, this.$5Y)
                : Microsoft.Crm.Client.Core.Framework.$3.$A(t.$9Y) &&
                Microsoft.Crm.Client.Core.Framework.$3.$A(t.$BT) &&
                Microsoft.Crm.Client.Core.Framework.$3.$A(t.$2J) ||
                (Microsoft.Crm.Client.Core.ViewModels.HierarchyListViewModel.isInstanceOfType(t) &&
                    t.$1qW &&
                    (r = t, r.$EN.get_Count() > 0 &&
                    (u = r.$EN.get_$H(r.$EN
                        .get_Count() -
                        1), r.$1we !== r.get_$1N().get_Id() && (r.$EN.$76(), r.$1we = r.get_$1N().get_Id()))), i
                    .$Jv(u, t.$9Y, t.$2J, t.$BT, this.$5Y))
        }
        return i.set_$80(this.$B6), i.$2u = t.$1p.$2u, i.$Od = !0, i
    },
    $4Y: function(n) {
        var t, i, u, r;
        this.$14j = $0.$1(n.$4U) ? null : n.$4U.$CT;
        this.$er = !0;
        t = this.$9_3;
        $0.$1(this.$P) || t.$3P
            ? this.$1U()
            : (i = this.$1PE(n), i.$uH = this.$$d_$2PG, u = Microsoft.Crm.Client.Application.ViewModels
                .RetrieveListDataAction.$1PA(t, i), r = this, this.$Hv(function() {
                    r.$P(u);
                    r.$1U()
                },
                Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$29n(this.$9_3)))
    },
    $1PE: function(n) { return Microsoft.Crm.Client.Core.Models.$1E.$B(n) },
    $5J: function(n) {
        if (n.$10 === -2147093999) {
            var t = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty();
            t.$1v = this.$1v;
            this.$4Y(t)
        } else this.$1z(n)
    },
    $2PG: function(n) {
        $0.$1(this.$9_3) ||
            this.$9_3.get_$Dp() ||
            n.$10 === -2147093999 ||
            (this.$er && this.$9_3.$Qm(n), Microsoft.Crm.Client.Core.Framework.Trace.logError(1, n.$E))
    },
    $HG: function(n, t) { return n.attributes.getNamedItem(t).nodeValue },
    $2pf: function(n, t) {
        return String
            .format("<fetch mapping='logical' returntotalrecordcount='true' page='{0}' count='{1}'><entity name='knowledgearticle'><attribute name='knowledgearticleid' /><attribute name='articlepublicnumber' /><attribute name='title' /><attribute name='description' /><attribute name='content' /><attribute name='knowledgearticleviews' /><attribute name='createdon' /><attribute name='modifiedon' /><attribute name='statecode' /><attribute name='statuscode' /><attribute name='expirationdate' /><attribute name='languagelocaleid' /><attribute name='majorversionnumber' /><attribute name='minorversionnumber' /><attribute name='islatestversion' /><\/entity><\/fetch>", n, t)
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("PinnedTiles", Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction;
    return t.$P = i.$$d_$4Y, t.$1I_3 = i.$$d_$5J, t.$9_3 = i, t.$60 = Microsoft.Crm.Client.Core.Framework
        .SchedulerPriorities.$1ya, t.$Ig = i.$2.$1s.toLowerCase() === Microsoft.Crm.Client.Core.Framework.$1.toString(1)
        ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()
        : i.$2.$g, t.$1rs = $0.$1(i.$2o), t
};
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction
    .$1PA = function(n, t) { return $0.$1(n.$2o) && n.$1NG(t), t };
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.prototype = {
    $P: null,
    $Ig: null,
    $1rs: !1,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$3F,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$X0(new Microsoft.Crm.Client.Core.Framework.Guid(this.$Ig), this.get_$e()),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        var r = this.$9_3, i = Microsoft.Crm.Client.Core.Models.$6Z.$B(n), t;
        Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.$1PA(r, i);
        !$0.$1(this.$P) && this.$1rs
            ? (t = this, this.$Hv(function() {
                    t.$P(i);
                    t.$2AB(n)
                },
                this.get_$JU()))
            : this.$2AB(n)
    },
    $2AB: function(n) {
        var i, t, e, o;
        if (n.$E2.length) {
            var r = new(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p)),
                u = [],
                f = [];
            for (i = 0; i < n.$E2.length; i++)
                t = n.$E2[i], t.$82 === "Workspace".toUpperCase() ||
                    t.$82 === "PowerBIFullScreenPage".toUpperCase() ||
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$32()
                    .$7p(t.$82, 1) ||
                    r.add(t), t.$82 === "Workspace".toUpperCase() &&
                (e = new Microsoft.Crm.Client.Core.Storage.DataApi
                    .$O3(1, this.get_$2C(), "Workspace".toUpperCase(), 0, !0, t.$Af.toString()), Array
                    .add(u, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(e, this.get_$e())), Array
                    .add(f, t));
            o = this;
            this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(u),
                function(n) {
                    for (var t = 0; t < n.length; t++) $0.$1(n[t].get_$H(0)) && r.add(f[t]);
                    o.$3I5(r)
                },
                this.$$d_$5J)
        } else this.$1U()
    },
    $3I5: function(n) {
        if (n.get_Count() > 0) {
            var t = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .$3F(new Microsoft.Crm.Client.Core.Framework.Guid(this.$Ig), n.toArray()),
                i = this;
            this.$1k(Object,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$kz(t, this.get_$e()),
                function() { i.$1U() },
                this.$$d_$5J)
        } else this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction = function() {
    this.$$d_$3Ea = Function.createDelegate(this, this.$3Ea);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveRecord",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$sQ);
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveRecordFromCustomControlDataSet",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$2rG)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$sQ = function(n, t) {
    var f, r, e;
    Microsoft.Crm.Client.Core.Framework.Utils.$E.$21K(Microsoft.Crm.Client.Core.ViewModels.$7Q.isInstanceOfType(n),
        "Action context is not IAttributeFormViewModel");
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction, u = n, o = n;
    if (i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB, i.$9_3 = u, f = t, i.$1xT = f.QueryValue, i
        .$3S = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(n.get_AttributeFieldNames()), i.$4U = n
        .get_RetrieveOptions(), r = o.get_ExternalContext(), $0.$1(r) || $0.$1(r.$S) || $0.$1(r.$S.EntityReference))
        if ($0.$1(u.get_$1N())) throw Error.argumentNull("reference", "Missing reference for retrieve request.");
        else e = u.get_ModelContext(), i.$CO = e.get_$Uo();
    else i.$CO = r.$S.EntityReference;
    return i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$2rG = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction, f = n, r = t, e = r.QueryValue, u;
    if (i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB, i.$9_3 = f, i.$3S = e.$1ei, i.$4U = e
        .$1ee, $0.$1(r
            .OnSuccess) ||
        (i.$P_6 = function(n) { r.OnSuccess(n) }), $0.$1(r.OnFailure) || (i.$1I_3 = r.OnFailure), $0
        .$1(f.get_$1N())) throw Error.argumentNull("reference", "Missing reference for retrieve request.");
    else u = f.get_ModelContext(), i.$CO = $0.$1(u.$5S) ? u.get_$52() : u.get_$Uo();
    return i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.prototype = {
    $P_6: null,
    $CO: null,
    $1xT: null,
    $3S: null,
    $er: !1,
    $4U: null,
    $2t: function() {
        var r = new Array(0), u = this.$1xT, n, t, i;
        for (n in u)
            t = { key: n, value: u[n] }, r.push(new(Microsoft.Crm.Client.Core.Framework.$3P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .Relationship,
                    String))(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship(t.key, 0), t.value));
        return i = this.$9_3, this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$aS(this.$CO,
                this.$3S,
                this.$3S,
                r,
                this.$4U,
                this.get_$e(),
                Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(i) ? i.$28p(this.$CO) : null),
            this.$$d_$4Y,
            this.$$d_$5J), 1
    },
    $4Y: function(n) {
        var t = this.$9_3;
        this.$er = !0;
        $0.$1(n) || this.$9_3.get_$Dp()
            ? t.set_ModelContext(null)
            : (this.$14j = $0.$1(n
                    .$4U)
                ? null
                : n.$4U.$CT, $0.$1(t.get_ModelContext()) || t.get_ModelContext().get_Id() !== n.$2n.get_identifier()
                ? t.set_ModelContext(Microsoft.Crm.Client.Core.Models.$O.$B(n))
                : t.get_ModelContext().$7n(n), t.get_ModelContext().$uG = this.$$d_$3Ea);
        $0.$1(this.$P_6) || this.$P_6(t.get_ModelContext());
        this.$1U()
    },
    $5J: function(n) {
        $0.$1(this.$9_3.get_ModelContext()) ? n.$10 = -2147220969 : n.$10 === -2147093999 && (n.$10 = -2147093997);
        this.$1z(n)
    },
    $3Ea: function(n) {
        $0.$1(this.$9_3) ||
            this.$9_3.get_$Dp() ||
            Microsoft.Crm.Client.Core.Framework.$5z.$1VZ(n.$10) ||
            ($0.$1(this.$9_3.get_ModelContext()) && (n.$10 = -2147220969), this.$er && this.$9_3.$Qm(n), Microsoft.Crm
                .Client.Core.Framework.Trace.logError(1, n.$E))
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction = function() {
    this.$$d_$LG = Function.createDelegate(this, this.$LG);
    this.$$d_$3E6 = Function.createDelegate(this, this.$3E6);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RelationshipPinnedTiles",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.$B = function(n, t) {
    var r = n, i, u;
    return r.$6W.set_$od(!1), i = new Microsoft.Crm.Client.Application.ViewModels
        .RetrieveRelationshipPinnedTileDataAction, u = t, i.$P = r.$$d_$4Y, i.$1I_3 = r.$$d_$5J, i.$9_3 = r, i
        .$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yd, i.$1Zr = u.QueryValue, i.$1Jl = !1, i
        .$12k = i.$$d_$3E6, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction
    .$1PA = function(n, t) { return n.$2o || n.$1NG(t), t };
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.prototype = {
    $14R: null,
    $uw: null,
    $P: null,
    $1Zr: null,
    $12k: null,
    $1Jl: !1,
    $2t: function() {
        if (Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(this.$9_3.get_ModelContext())) {
            if (this.$2NP()) return this.$Qn(), 1;
            this.$9_3.get_ModelContext().get_Id() === Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()
                ? this.$9_3.apcl("ModelContext", this.$$d_$LG)
                : this.$9_3.get_ModelContext().add_$9g(this.$12k);
            this.$1Jl = !0
        } else
            this.$4Y(new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p)));
        return 1
    },
    $GN: function() {
        this.$14R = null;
        this.$uw = null;
        this.$1Jl &&
        (this.$9_3.rpcl("ModelContext", this.$$d_$LG), this.$9_3.get_ModelContext().remove_$9g(this.$12k), this
            .$1U());
        Microsoft.Crm.Client.Core.Framework.$BI.prototype.$GN.call(this)
    },
    $LG: function() { this.$9_3.get_ModelContext().add_$9g(this.$12k) },
    $3E6: function() {
        this.$2NP() &&
        (this.$1Jl = !1, this.$9_3.rpcl("ModelContext", this.$$d_$LG), this.$9_3.get_ModelContext()
            .remove_$9g(this.$12k), this.$Qn())
    },
    $2NP: function() {
        if (Microsoft.Crm.Client.Core.Models.$O.isInstanceOfType(this.$9_3.get_ModelContext())) {
            var n = this.$9_3.get_ModelContext();
            if (n.$ZS || n.$Oq || this.$9_3.get_Root().get_LaunchedWithUnsavedChanges()) return!0
        }
        return!1
    },
    $Qn: function() {
        var n = this;
        this.$Hv(function() {
                var u = n.$9_3.get_Root().get_ModelContext(), i, r, t, f;
                for (u && u.$M && (n.$uw = u.$M, n.$uw.$6E && (n.$14R = n.$uw.$6E)), i = new(Microsoft.Crm.Client.Core
                        .Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p)), r = 0;
                    r < n.$1Zr.length;
                    r++)
                    t = n.$1Zr[r], f = t.BindingName, t.IsRelationshipTile
                        ? n.$2eK(new Microsoft.Crm.Client.Core.Framework.Guid(n.$9_3.get_Root().$g), i, t)
                        : f === "self_referential" && n.$uw
                        ? n.$2eL(new Microsoft.Crm.Client.Core.Framework.Guid(n.$9_3.get_Root().$g), i, t)
                        : n.$2eF(new Microsoft.Crm.Client.Core.Framework.Guid(n.$9_3.get_Root().$g), i, t);
                n.$4Y(i)
            },
            this.get_$JU())
    },
    $4Y: function(n) {
        var i = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .$3F(new Microsoft.Crm.Client.Core.Framework.Guid(this.$9_3.get_Root().$g), n.toArray()),
            t = Microsoft.Crm.Client.Core.Models.$6Z.$B(i),
            r = this.$9_3;
        Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.$1PA(r, t);
        this.$P(t);
        this.$1U()
    },
    $2eK: function(n, t, i) {
        var u = -1, r, f;
        $0.$1(i.RelationshipType) || (u = i.RelationshipType);
        r = -1;
        $0.$1(i.RelationshipRoleOrdinal) || (r = i.RelationshipRoleOrdinal);
        f = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p
            .$1P9(n,
                i.TargetEntityName,
                new Microsoft.Crm.Client.Core.Framework.Guid(i.DefinitionId),
                2,
                i.ContextFilter,
                0,
                i.DisplayName,
                i.RelationshipName,
                i.RelationshipExtraCondition,
                u,
                i.ReferencingName,
                r);
        t.add(f)
    },
    $2eL: function(n, t, i) {
        var r = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p.$V7(n, this.$uw);
        r = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Tiles.Decorators.$ON(r, i);
        r.$DW = 1;
        t.add(r)
    },
    $2eF: function(n, t, i) {
        var f = i.BindingName,
            e = this.$14R && this.$14R.getByRelationshipName(f) ? this.$14R.getByRelationshipName(f).get_$H(0) : null,
            u,
            o,
            s,
            r,
            h;
        e &&
        (u = new Microsoft.Crm.Client.Core.Models.Tiles.Validators.$Ia, u.set_$3Jr(i), o = u
            .$7c("CommunicationCardFieldNames"), s = u
            .$7c("FieldName"), s.$5r &&
        (h = i.FieldName, o.$5r
            ? (r = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p.$V7(n, e), r = new Microsoft.Crm.Client.Core
                .Storage.Common.ObjectModel.Tiles.Decorators.$ON(r, i), r.$DW = 1)
            : r = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1p.$1kK(n, e, h), r.$aK = f, t.add(r)))
    }
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$12P = Function.createDelegate(this, this.$12P);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveTargetEntityMetadata",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction, u = n, f, r;
    return i.$P = u.$$d_$1tJ, i.$9_3 = u, f = t, r = f.QueryValue, i.$T = r.entityLogicalName, i.$15w = r
        .targetAttribute, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction.prototype = {
    $P: null,
    $T: null,
    $15w: null,
    $2t: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(this.$T, [this.$15w]);
        return this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$4j(n, this.get_$e()),
            this.$$d_$12P,
            this.$$d_$5J), 1
    },
    $12P: function(n) {
        var t = this;
        this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$1m),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$Jq(this.get_$e()),
            function(i) { t.$4Y(i, new(Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(n.get_$H(0).get_$My())) },
            this.$$d_$5J)
    },
    $4Y: function(n, t) {
        for (var i, f = new(Microsoft.Crm.Client.Core.Framework.List$1.$$(Object)), u = {}, r = 0;
            r < n.get_$3XJ();
            r++) u[n.get_$H(r).get_$1l()] = n.get_$H(r);
        for (i = 0; i < t.get_Count(); i++) t.get_$H(i) in u && f.add(u[t.get_$H(i)]);
        this.$P(f);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.$6N = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.$6N.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$6N.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveUserContext",
        Microsoft.Crm.Client.Application.ViewModels.$6N.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$6N.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.$6N;
    return t.$9_3 = n, t
};
Microsoft.Crm.Client.Application.ViewModels.$6N
    .prototype = {
        $2t: function() {
            return this.$1k(Microsoft.Crm.Client.Core.Storage.DataApi.$1k,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$R5(),
                this.$$d_$4Y,
                this.$$d_$5J), 1
        },
        $4Y: function() { this.$1U() },
        $5J: function(n) { this.$1z(n) }
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction = function() {
    this.$$d_$3AG = Function.createDelegate(this, this.$3AG);
    this.$$d_$34M = Function.createDelegate(this, this.$34M);
    Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("RetrieveWebResouces",
                Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction.$32G)
    };
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction.$32G = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction;
    return i.$Z2 = t, i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$1yj, i
};
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction.prototype = {
    $Z2: null,
    $2t: function() {
        var t, n = new Array(0), i, r, u;
        if (!$0.$1(this.$Z2.$TT))
            for (i = 0; i < this.$Z2.$TT.length; i++)
                t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                        .$O3(20, this.get_$2C(), "webresource", 1, !1, this.$Z2.$TT[i]),
                        this.get_$e()), Array.add(n, t);
        if (!$0.$1(this.$Z2.$TU))
            for (r = 0; r < this.$Z2.$TU.length; r++)
                t = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$5c(new Microsoft.Crm.Client.Core.Storage.DataApi
                        .$O3(29, this.get_$2C(), "staticjsfile", 1, !1, this.$Z2.$TU[r]),
                        this.get_$e()), Array.add(n, t);
        switch (n.length) {
        case 0:
            return this.$1qE(new Array(0)), 0;
        case 1:
            this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                n[0],
                this.$$d_$34M,
                this.$$d_$3AG);
            break;
        default:
            u = this;
            this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(n),
                function(n) { return u.$1qE(n) },
                this.$$d_$3AG)
        }
        return 1
    },
    $34M: function(n) { this.$1qE([n]) },
    $1qE: function(n) {
        for (var t = 0; t < n.length; t++)
            $0.$1(n[t].get_$H(0)) ||
                $0.$1(n[t].get_$H(0).get_$5Z()) ||
                this.$Z2.scriptsToLoad.add(n[t].get_$H(0).get_$5Z().toString());
        this.$3AH(this.$Z2)
    },
    $3AH: function(n) {
        Microsoft.Crm.Client.Core.ViewModels.CustomScriptsContainerViewModel.get_$5().$3Dn(this, n);
        this.$6j(null)
    },
    $3AG: function(n) {
        this.$6j(Error.create(String.format("RetrieveWebResourcesAction has failed with error {0}", n.$E)))
    }
};
Microsoft.Crm.Client.Application.ViewModels.$Ty = function(n) {
    this.$$d_$1b1 = Function.createDelegate(this, this.$1b1);
    Microsoft.Crm.Client.Application.ViewModels.$Ty.initializeBase(this);
    this.$vT = n
};
Microsoft.Crm.Client.Application.ViewModels.$Ty.prototype = {
    $vT: 0,
    $RG: !1,
    $20j: !1,
    get_$P8: function() {
        return this.$RG ||
            !Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_device().get_DeviceState()
            .get_$2mW()
    },
    set_$P8: function(n) { return this.$RG = n, n },
    $2t: function() {
        var n = this;
        return this.$1k(Boolean, this.$2Tc(), function(t) { t ? n.$Qn() : n.$1U() }, this.$$d_$1b1), 1
    },
    $1b1: function(n) { this.$1z(n) },
    $2Tc: function() {
        if (!$0.$1(Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().$1J) &&
            Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().$1J.$st().get_Count() > 0 &&
            (!Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$1i()
                .isFeatureEnabled("EditableGridControlJsEvents") ||
                !this.$20j))
            return Microsoft.Crm.Client.Core.ViewModels.$G.get_$5()
                .$2Tc(new Microsoft.Crm.Client.Core.ViewModels.$Sm(this.$vT));
        var n = MscrmComponents.DeferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.$4);
        return n.resolve(!0), n.promise()
    }
};
Microsoft.Crm.Client.Application.ViewModels
    .ScriptErrorRequestAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("ScriptErrorRequest",
                Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction.$32J)
    };
Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction.$32J = function(n, t) {
    var r = t, i = new Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction;
    return i.$9_3 = n, i.$1sw = Number.parseInvariant(r.lineNumber.toString()), i.$1nC = r.func.toString(), i.$I7 = r
        .fileName.toString(), i.$1xh = r.report.toString(), i.$1xj = Boolean.parse(r.reportToWatson.toString()), i
        .$1lt = Number.parseInvariant(r.errorReportingPreference.toString()), i.$1hR = Boolean
        .parse(r.addServerInformation.toString()), i
};
Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction.prototype = {
    $1sw: 0,
    $1nC: null,
    $I7: null,
    $1xh: null,
    $1xj: !1,
    $1lt: 0,
    $1hR: !1,
    $2t: function() {
        var n = this, t = this;
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Sdk.$Nz(this.$1sw, this.$1nC, this.$I7, this.$1xh, this.$1xj, this.$1lt, this.$1hR),
                this.get_$e()),
            function() { n.$1U() },
            function(n) { t.$1z(n) }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    this.$$d_$Fn = Function.createDelegate(this, this.$Fn);
    Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("SetCreateModelFromRetrievedEntity",
                Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction, i = n;
    return t.$9_3 = i, t.$1Y = i.get_ModelContext(), t.$4x = i.$4x, t.$I3 = i.$Q.$AV.get_ModelContext().$M, t.$P = i
        .$$d_$2PT, t
};
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction.prototype = {
    $4x: null,
    $P: null,
    $I3: null,
    $1Y: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(this.$I3.$N,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(this.$4x),
                Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(),
                this.get_$e()),
            this.$$d_$Fn,
            this.$$d_$95), 1
    },
    $Fn: function(n) {
        if (!$0.$1(this.$P)) {
            var t = Microsoft.Crm.Client.Core.Models.$O.$B(n);
            t.$1br();
            this.$1Y = t;
            this.$P(this.$1Y)
        }
        this.$1U()
    },
    $95: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction = function() {
    this.$$d_$95 = Function.createDelegate(this, this.$95);
    this.$$d_$Fn = Function.createDelegate(this, this.$Fn);
    Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("SetQuickCreateEntityReference",
                Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction, i = n;
    return t.$9_3 = i, t.$1Y = i.get_ModelContext(), t.$FP = i.$FP, t.$I3 = i.$Q.$AV.get_ModelContext().$M, t.$P = i
        .$$d_$2PN, t
};
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction.prototype = {
    $FP: null,
    $P: null,
    $I3: null,
    $1Y: null,
    $2t: function() {
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.$1m,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$73(this.$I3.$N.LogicalName, this.get_$e()),
            this.$$d_$Fn,
            this.$$d_$95), 1
    },
    $Fn: function(n) {
        if (!$0.$1(this.$P)) {
            var t = new Xrm.Objects.EntityReference(this.$I3.$N.LogicalName,
                this.$I3.$N.Id,
                this.$I3.getValue(n.get_$GU()));
            this.$1Y.SetValue(this.$FP, t);
            this.$P(this.$1Y)
        }
        this.$1U()
    },
    $95: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels
    .SetStateRequestAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.initializeBase(this, [1])
    };
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("SetStateRequest",
                Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.$2jG)
    };
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.$2jG = function(n, t) {
    var i = t;
    return Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction
        .$1AJ(n, i.statecode, i.entitylogicalname.toString())
};
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.$1AJ = function(n, t, i) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction;
    return r.$9_3 = n, r.$XE = Number.parseInvariant(t.toString()), r.$T = i, r
};
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.prototype = {
    $XE: 0,
    $T: null,
    $Qn: function() {
        var n, t, i;
        if (Microsoft.Crm.Client.Core.ViewModels.$n.$II(this.$T))
            if (n = this.$9_3.get_ModelContext(), t = -1, Xrm.Utility.isMocaOffline()) {
                var r = new Xrm.Objects.EntityReference(this.$T,
                        new Microsoft.Crm.Client.Core.Framework.Guid(n.get_$1Z())),
                    u = new Xrm.Gen.SetStateRequest(r, this.$XE, t, !0),
                    f = this,
                    e = function() { f.$1U() };
                Xrm.Utility.executeNonCudCommand("SetState",
                    this.$T,
                    u,
                    e,
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            } else
                i = this, this.$1k(Xrm.Sdk.Response,
                    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                    .$2B(new Xrm.Gen.SetStateRequest(new Xrm.Objects
                            .EntityReference(this.$T, new Microsoft.Crm.Client.Core.Framework.Guid(n.get_$1Z())),
                            this.$XE,
                            t),
                        this.get_$e()),
                    function() { i.$1U() },
                    this.$$d_$1b1);
        else this.$1b1(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999));
        return 1
    }
};
Microsoft.Crm.Client.Application.ViewModels.$5i = function() {
    Microsoft.Crm.Client.Application.ViewModels.$5i.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.$5i.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("UpdateBusinessProcessFlowState",
        Microsoft.Crm.Client.Application.ViewModels.$5i.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$5i.$B = function(n, t) {
    var u = t, r = u.QueryValue, i;
    return Microsoft.Crm.Client.Application.ViewModels.$5i.$2d7(r), i = new Microsoft.Crm.Client.Application.ViewModels
        .$5i, i.$Dy = r.bpfInstanceId, i.$T = r.entitylogicalname, i.$16 = r.state, i.$Bv = r.status, i.$FX = r
        .entityid, $0.$1(u.OnSuccess) || (i.$P = u.OnSuccess), $0.$1(u.OnFailure) || (i.$1I_3 = u.OnFailure), i
};
Microsoft.Crm.Client.Application.ViewModels.$5i.$2d7 = function() {};
Microsoft.Crm.Client.Application.ViewModels.$5i.prototype = {
    $P: null,
    $FX: null,
    $Dy: null,
    $T: null,
    $16: 0,
    $Bv: 0,
    $2t: function() {
        var i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$b3(this.$T, this.$FX, this.$16, this.$Bv, this.$Dy, this.get_$e()),
            n = this,
            t = this;
        return this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(i),
            function(t) {
                n.$P && n.$P(t);
                n.$1U()
            },
            function(n) {
                t.$1I_3 && t.$1I_3(n);
                t.$1z(n)
            }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels.$4k = function(n) {
    Microsoft.Crm.Client.Application.ViewModels.$4k.initializeBase(this, [n])
};
Microsoft.Crm.Client.Application.ViewModels.$4k.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M
        .registerDynamicQuery("UpdateMultipleRecords", Microsoft.Crm.Client.Application.ViewModels.$4k.$B)
};
Microsoft.Crm.Client.Application.ViewModels.$4k.$B = function(n, t) {
    var i = t, e = i.SaveMode, u = new Microsoft.Crm.Client.Application.ViewModels.$4k(e), f = n, r;
    return u.$9_3 = f, u.set_$P8(f.get_SuppressDuplicateDetection()), u.$Ty = i.RelatedEntitiesQuery, u
            .$1Xz = "OnSuccess" in i ? i.OnSuccess : null, r = "AdditionalEntityToRetrieve",
        r in i &&
        (u.$yG = i[r], r = "AdditionalEntityToRetrieveAttributes", u
            .$1Mh = r in i ? i[r] : null, r = "AdditionalEntityToRetrieveRelationship", u
            .$23s = r in i ? i[r] : null), u
};
Microsoft.Crm.Client.Application.ViewModels.$4k.prototype = {
    $1Xz: null,
    $Ty: null,
    $yG: null,
    $1Mh: null,
    $23s: null,
    get_$2ms: function() {
        var n = this.$9_3.get_ModelContext();
        return n.get_$1N().$M
    },
    get_$v4: function() { return this.$Ty },
    $2Yp: function(n, t) {
        var i = this.$9_3.get_ModelContext();
        i.$3LJ();
        Microsoft.Crm.Client.Application.ViewModels.$2m.prototype.$2Yp.call(this, n, t)
    },
    $2Mn: function(n) {
        var t, i;
        $0.$1(this.$yG) ||
            $0.$1(this.$1Mh) ||
            (t = new(Microsoft.Crm.Client.Core.Framework.List$1
                .$$(Xrm.Sdk.Request)), n.name === "Retrieve"
                ? t.add(n)
                : n.name === "ExecuteMultiple" && t.addRange(n.requests), i = new Xrm.Gen
                .RetrieveRequest(this.$yG,
                    new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(this.$1Mh),
                    null,
                    !1,
                    Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu()), t.add(i), n = new Xrm.Gen
                .ExecuteMultipleRequest(t.toArray(), new Xrm.Gen.ExecuteMultipleSettings(!0, !0)));
        Microsoft.Crm.Client.Application.ViewModels.$2m.prototype.$2Mn.call(this, n)
    },
    $2Rx: function(n) {
        var t, r, f;
        if (Microsoft.Crm.Client.Application.ViewModels.$2m.prototype.$2Rx.call(this, n), !$0.$1(this.$1Xz)) {
            if (t = null, n.name === "ExecuteMultiple") {
                r = n;
                for (var u = r
                             .responses,
                    e = u.length,
                    i = 0;
                    i < e;
                    ++i)
                    if (f = u[i], t = f.$Am.entity, !$0.$1(t) &&
                        !$0.$1(this.$yG) &&
                        t.$2n.get_identifier() === this.$yG.get_identifier()) break
            }
            this.$1Xz(t)
        }
    }
};
Microsoft.Crm.Client.Application.ViewModels.$2m = function(n) {
    this.$$d_$3AJ = Function.createDelegate(this, this.$3AJ);
    this.$$d_$3Jy = Function.createDelegate(this, this.$3Jy);
    Microsoft.Crm.Client.Application.ViewModels.$2m.initializeBase(this, [n])
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M
        .registerDynamicQuery("UpdateRecord", Microsoft.Crm.Client.Application.ViewModels.$2m.$B);
    Microsoft.Crm.Client.Core.ViewModels.$M
        .registerDynamicQuery("UpdateRecordForQuickEditForm", Microsoft.Crm.Client.Application.ViewModels.$2m.$2jE);
    Microsoft.Crm.Client.Core.ViewModels.$M
        .registerDynamicQuery("UpdateRecordForCustomControl", Microsoft.Crm.Client.Application.ViewModels.$2m.$2j9)
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$B = function(n, t) {
    return Microsoft.Crm.Client.Application.ViewModels.$2m.$1AJ(n, t)
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$2jE = function(n, t) {
    var i = Microsoft.Crm.Client.Application.ViewModels.$2m.$1AJ(n, t), r = n;
    return i.$P = r.$$d_$3FL, i.set_$P8(Microsoft.Crm.Client.Application.ViewModels.$2m.$29o(t, r.get_$P8())), i
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$2j9 = function(n, t) {
    var r = Microsoft.Crm.Client.Application.ViewModels.$2m.$1AJ(n, 1), i;
    return r.$20j = !0, !$0.$1(t) &&
        Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.QueryDescriptor.isInstanceOfType(t) &&
        (i = t, $0.$1(i
                .OnSuccess) ||
            (r.$P = function(n) { i.OnSuccess(n) }), $0.$1(i
            .OnFailure) ||
        (r.$1I_3 = function(n) { i.OnFailure(n) })), r
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$1AJ = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.$2m(t), r = n;
    return i.$9_3 = r, Microsoft.Crm.Client.Core.ViewModels.EditRootViewModel.isInstanceOfType(n)
        ? i.set_$P8(Microsoft.Crm.Client.Application.ViewModels.$2m.$29o(t, r.get_$P8()))
        : i.set_$P8(!0), i
};
Microsoft.Crm.Client.Application.ViewModels.$2m.$29o = function(n, t) {
    switch (n) {
    case 5:
    case 6:
        return!0;
    default:
        return t
    }
};
Microsoft.Crm.Client.Application.ViewModels.$2m.prototype = {
    $P: null,
    get_$2ms: function() {
        var n = this.$9_3.get_ModelContext();
        return n.$M
    },
    get_$v4: function() { return null },
    $Qn: function() {
        var t = this.$9_3.get_ModelContext(), n = this.get_$2ms(), i = this;
        return this.$1k(Xrm.Objects.EntityReference,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$7n(n.$2n, n, this.get_$P8(), this.get_$e()),
            function() { i.$2Yp(t, n) },
            this.$$d_$1b1), 1
    },
    $2Yp: function(n, t) {
        var r, i;
        Microsoft.Crm.Client.Core.Framework.$6.get_$k() &&
        (Microsoft.Crm.Client.Core.ViewModels.$p.$2SD(n.get_$Qf()), Microsoft.Crm.Client.Core.ViewModels.$p
            .$1hF(n), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$Ky().$1Yh(n));
        r = [];
        this.$2ZP(r, t);
        $0.$1(n.$5S) || this.$2ZP(r, n.$5S);
        i = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(r),
            function(r) {
                var u = new(Microsoft.Crm.Client.Core.Framework.$8X.$$(Microsoft.Crm.Client.Core.Storage.Common.$4s)),
                    e,
                    f,
                    o;
                i.$23k(r[0], u, t.$N.LogicalName);
                $0.$1(n.$5S) || $0.$1(r[1]) || i.$23k(r[1], u, n.$5S.$N.LogicalName);
                !Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() &&
                    Microsoft.Crm.Client.Core.ViewModels.$n.$L0(t.$2n.LogicalName)
                    ? i.$3CI(t, u)
                    : (e = $0.$1(n.$5S) ? t.$N : t.$2n, f = new Xrm.Gen
                        .RetrieveRequest(e,
                            u.get_$H(e.LogicalName),
                            i.get_$v4(),
                            !1,
                            Microsoft.Crm.Client.Core.ViewModels.$w
                            .get_$fu()), $0.$1(n.$5S) ||
                    (f = new Xrm.Gen
                        .ExecuteMultipleRequest([
                                f, new Xrm.Gen.RetrieveRequest(n.$5S.$N,
                                    u.get_$H(n.$5S.$N.LogicalName),
                                    i.get_$v4(),
                                    !1,
                                    Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu())
                            ],
                            new Xrm.Gen.ExecuteMultipleSettings(!0, !0))), i.$2Mn(f), o = Microsoft.Crm.Client.Core
                        .ViewModels
                        .ApplicationShellViewModel.get_instance()
                        .$ov, $0.$1(o) ||
                    (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().$ov = null, Xrm
                        .XrmUtilityWrapper.$2Z0(o, null)))
            },
            this.$$d_$1b1)
    },
    $23k: function(n, t, i) {
        var u, f, r, e, o, s;
        if (Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.$2M)
            .isInstanceOfType(n)) {
            for (u = n, f = new(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(String)), r = 0;
                r < u.get_$3XJ();
                r++)
                ($0.$1(u.get_$H(r).get_$19D()) || u.get_$H(r).get_$1l() === "entityimage_url") &&
                    f.add(u.get_$H(r).get_$1l());
            t.set_$H(i, new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(f.toArray()))
        } else if (Object.isInstanceOfType(n)) {
            e = n;
            for (o in e) s = { key: o, value: e[o] }, t.set_$H(s.key, s.value)
        }
    },
    $2ZP: function(n, t) {
        var f = MscrmComponents.DeferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.$4),
            i = t.get_directColumnSet(),
            r,
            u;
        Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(i)
            ? (r = {}, r[t.$N.LogicalName] = i, Array.add(n, f.resolve(r)))
            : (u = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$4j(new Microsoft.Crm.Client.Core.Storage.DataApi.$5u(t.$N.LogicalName, i.$3O), this.get_$e()), Array
                .add(n, u))
    },
    $2Mn: function(n) {
        this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$2B(n, this.get_$e()),
            this.$$d_$3Jy,
            this.$$d_$1b1)
    },
    $3CI: function(n, t) {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1hQ(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n.$2n.get_key(), this.$$d_$3AJ);
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(n.$2n,
                t.get_$H(n.$2n.LogicalName),
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$23(2, 2),
                this.get_$e())
    },
    $3AJ: function(n, t) {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
            .$1xe(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                t.get_$dS().$2n.get_key(),
                this.$$d_$3AJ);
        $0.$1(this.$P) || this.$P(t.get_$dS().$2n);
        this.$1U()
    },
    $3Jy: function(n) {
        this.$2Rx(n);
        this.$1U()
    },
    $2Rx: function(n) {
        var t, i;
        if (n.name === "Retrieve") $0.$1(this.$P) || this.$P(n.entity.$N);
        else if (n.name === "ExecuteMultiple") {
            t = n;
            for (var u = t.responses, f = u.length, r = 0; r < f; ++r) {
                if (i = u[r], t.isFaulted && !$0.$1(i.$Fx)) {
                    this.$1b1(Microsoft.Crm.Client.Core.Framework.$4.$lh(i.$Fx.$6n));
                    return
                }
                t.isFaulted || $0.$1(this.$P) || this.$P(i.$Am.entity.$N)
            }
        }
    }
};
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction = function() {
    this.$$d_$3VY = Function.createDelegate(this, this.$3VY);
    this.$$d_$3VZ = Function.createDelegate(this, this.$3VZ);
    Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("UpdateSyncErrorRecord",
                Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction, r = t;
    return i.$S = r.QueryValue, i.$P = r.OnSuccess, i.$1I = r.OnFailure, i
};
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction.prototype = {
    $P: null,
    $1I: null,
    $S: null,
    $2t: function() {
        var n = "statecode", r = new Array(1), u = {}, f = {}, t, i;
        return r[0] = n, u[n] = 12, f[n] = 1, t = new Xrm.Objects
                .EntityReference("syncerror",
                    new Microsoft.Crm.Client.Core.Framework.Guid(this.$S.entityId
                        .toString())),
            i = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord(t,
                    f,
                    u,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0))), i
                .$4P
                .addRange(r), this.$1k(Xrm.Objects.EntityReference,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$7n(t, i, !1, this.get_$e()),
                this.$$d_$3VZ,
                this.$$d_$3VY), 1
    },
    $3VZ: function(n) {
        this.$P(n);
        this.$1U()
    },
    $3VY: function(n) {
        this.$1I(n);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction = function() {
    this.$$d_$3EG = Function.createDelegate(this, this.$3EG);
    this.$$d_$3DJ = Function.createDelegate(this, this.$3DJ);
    Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction.initializeBase(this);
    this.$1Xd = this.$$d_$3DJ;
    this.$1Xs = this.$$d_$3EG
};
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerDynamicQuery("WaitForEditEnabled",
                Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction;
    return t.$9_3 = n, t
};
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction.prototype = {
    $1Xd: null,
    $1Xs: null,
    $2t: function() {
        return Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().$16 === 2
            ? (this.$1U(), 0)
            : (Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().add_$YM(this.$1Xd), Microsoft.Crm.Client.Core.ViewModels
                .$G.get_$5().add_$2TW(this.$1Xs), 1)
    },
    $3DJ: function() { this.$2Kb() },
    $3EG: function() { this.$2Kb() },
    $2Kb: function() {
        Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().remove_$YM(this.$1Xd);
        Microsoft.Crm.Client.Core.ViewModels.$G.get_$5().remove_$2TW(this.$1Xs);
        this.$1U()
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Application.ViewModels.Actions");
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction = function() {
    this.$$d_$25i = Function.createDelegate(this, this.$25i);
    this.$$d_$25j = Function.createDelegate(this, this.$25j);
    Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("CalculateRollupField",
                Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction.$B = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction, i = n;
    return t.$P = i.$$d_$25j, t.$1I_3 = i.$$d_$25i, t.$9_3 = n, t.$5g = Microsoft.Crm.Client.Core.Framework.Guid
        .tryCreate(t.$9_3.get_ModelContext().get_Id()), t.$T = t.$9_3.get_$2W(), t.$EA = n.$Kh, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction.prototype = {
    $5g: null,
    $T: null,
    $EA: null,
    $P: null,
    $2t: function() {
        var n = new Xrm.Objects.EntityReference(this.$T, this.$5g);
        return this.$1k(Xrm.Sdk.Response,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$2B(new Xrm.Gen.CalculateRollupFieldRequest(n, this.$EA), this.get_$e()),
            this.$$d_$25j,
            this.$$d_$25i), 1
    },
    $25j: function(n) {
        if (!$0.$1(this.$P) && n.name === "CalculateRollupField") {
            var t = n.entity;
            this.$P(t)
        }
        this.$1U()
    },
    $25i: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction = function() {
    this.$$d_$5J = Function.createDelegate(this, this.$5J);
    this.$$d_$4Y = Function.createDelegate(this, this.$4Y);
    Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("PopulateDocumentTemplateFlyout",
                Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction, r;
    return i.$9_3 = n, r = t, $0.$1(r
            .OnSuccess) ||
        (i.$7N = r.OnSuccess), $0.$1(r.QueryValue) ||
        (r.QueryValue.endsWith("1") ? i.$Ta = 1 : r.QueryValue.endsWith("2") && (i.$Ta = 2)), i
        .$Pq = i.$Ta === 1
        ? new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("documenttemplatesflyout_commands")
        : new Microsoft.Crm.Client.Core.Models.Descriptors.CommandSet("wordtemplatesflyout_commands"), i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.prototype = {
    $ro: null,
    $7N: null,
    $Pq: null,
    $Ta: 0,
    $2t: function() {
        return $0.$1(this.$9_3)
            ? (this.$4Y(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, null)), 0)
            : (this.$1k(Microsoft.Crm.Client.Core.ViewModels.$6n, this.$3MA(), this.$$d_$4Y, this.$$d_$5J), 1)
    },
    $4Y: function(n) {
        $0.$1(this.$7N) || $0.$1(n) || this.$7N(n);
        this.$1U()
    },
    $5J: function(n) { this.$1z(n) },
    $3MA: function() {
        return $0.$1(this.$ro) &&
        (this.$ro = MscrmComponents
            .DeferredPromiseFactory(Microsoft.Crm.Client.Core.ViewModels
                .$6n,
                Microsoft.Crm.Client.Core.Framework.$4), Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
            .get_instance().get_$s()
            ? Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$21C &&
            this.$Ta === 1
            ? this.$289()
            : Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$22h &&
            this.$Ta === 2
            ? this.$289()
            : this.$ro.resolve(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, this.$Pq))
            : this.$ro.resolve(new Microsoft.Crm.Client.Core.ViewModels.$6n(this.$9_3, this.$Pq))), this.$ro.promise()
    },
    $289: function() {
        if (!this.$9_3.get_$Dp()) {
            var t = this.$3Ml(), i = this.$3Mo(), n = this;
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(t, i)
                .always(function() { n.$ro.resolve(new Microsoft.Crm.Client.Core.ViewModels.$6n(n.$9_3, n.$Pq)) })
        }
    },
    $3Ml: function() {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Boolean), i = {}, n, r, u;
        return i.DocumentType = this.$Ta, n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrieveDocumentTemplates", i), r = this, n.OnSuccess = function(n) {
            r.$1Rf(n, !1);
            t.resolve(!0)
        }, u = this, n.OnFailure = function() { t.resolve(!1) }, Microsoft.Crm.Client.Core.ViewModels
            .ApplicationShellViewModel.get_instance().$2T("ActionProvider", this.$9_3, n), t.promise()
    },
    $3Mo: function() {
        var t = MscrmComponents.DeferredPromiseFactory(Boolean, Boolean), i = {}, n, r, u;
        return i.DocumentType = this.$Ta, n = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
            .QueryDescriptor("RetrievePersonalDocumentTemplates", i), r = this, n.OnSuccess = function(n) {
            r.$1Rf(n, !0);
            t.resolve(!0)
        }, u = this, n.OnFailure = function() { t.resolve(!1) }, Microsoft.Crm.Client.Core.ViewModels
            .ApplicationShellViewModel.get_instance().$2T("ActionProvider", this.$9_3, n), t.promise()
    },
    $1Rf: function(n, t) {
        var f = n.$21O(), k = this, o, e, s, r, i, c;
        for (f.sort(function(n, t) { return n.$1P.localeCompare(t.$1P) }), o = this.$Pq.Controls
                .length, e = this.$Ta === 1
                ? t
                ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Menu_Label_Group_PersonalDocumentTemplates")
                : Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Menu_Label_Group_DocumentTemplates")
                : t
                ? Microsoft.Crm.Client.Core.Framework.Common.$2.$6("Menu_Label_Group_PersonalWordTemplates")
                : Microsoft.Crm.Client.Core.Framework.Common.$2
                .$6("Menu_Label_Group_WordTemplates"), s = t ? 1 : 0, r = new Microsoft.Crm.Client.Core.Models
                .Descriptors
                .CommandControlDescriptor(e, "Group", null, e, s, null, null, null), i = 0;
            i < f.length;
            i++) {
            var h = f[i],
                l = this.$9_3.get_$2W() + "_template_" + i,
                a = h.$1P,
                v = new Microsoft.Crm.Client.Core.Framework.Guid(h.$g),
                y = t ? "personaldocumenttemplate" : "documenttemplate",
                u = new Xrm.Objects.EntityReference(y, v);
            u.Name = u.LogicalName === "documenttemplate" ? "DocumentTemplate" : "PersonalDocumentTemplate";
            c = this.$Ta === 1 ? { DocumentTemplateEntityReference: u } : { WordTemplateEntityReference: u };
            var p = this.$Ta === 1 ? "OpenDocumentTemplateCommand" : "OpenWordTemplateCommand",
                w = this.$Ta === 1 ? "DocumentTemplates" : "WordTemplates",
                b = new Microsoft.Crm.Client.Core.Models.Descriptors
                    .CommandControlDescriptor(l, "Button", p, a, o++, "System", w, "Symbol", c);
            Array.add(r.Children, b)
        }
        r.Children.length > 0 && Array.add(this.$Pq.Controls, r)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$9m.initializeBase(this, [1])
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("CreateMultipleRecentlyViewedItemsAction",
                Microsoft.Crm.Client.Application.ViewModels.Actions.$9m.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m.$B = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.Actions.$9m, i = t;
    return r.$Qi = i.EntityRecords, !$0.$1(i.onSuccess) &&
        Function.isInstanceOfType(i.onSuccess) &&
        (r.$P = i.onSuccess), !$0.$1(i
            .onFailure) &&
        Function.isInstanceOfType(i.onFailure) &&
        (r.$1I_3 = i.onFailure), r
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m.prototype = {
    $P: null,
    $1I: null,
    $Qi: null,
    $Qn: function() {
        var n, r, u, f;
        if (!Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() &&
            Microsoft.Crm.Client.Core.ViewModels.$n.$DF())
            return this.$1I(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093996)), 1;
        if ($0.$1(this.$Qi) || !this.$Qi.length) return this.$P(null), 1;
        n = [];
        for (var i = this
                     .$Qi,
            e = i.length,
            t = 0;
            t < e;
            ++t)
            r = i[t], Array.add(n,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$B(r, !1, Microsoft.Crm.Client.Core.Framework.$15.$5v("", "CreateRecentlyViewedItemListAction")));
        return u = this, f = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(n),
            function(n) { u.$P(n) },
            function(n) { f.$1I(n) }), 1
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$8L.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveLandingPageActivities", Microsoft.Crm.Client.Application.ViewModels.Actions.$8L.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.Actions.$8L;
    return t.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(i), t.$P = i.$$d_$4Y, t
        .$1I_3 = i.$$d_$5J, t.$9_3 = i, t.$IM = i.get_DefinitionId(), t.$2Q = Microsoft.Crm.Client.Application
        .ViewModels.Actions.$8L.$25R(), t.$B6 = i.$1p.$BQ + 1, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L.$25R = function() {
    var n = Microsoft.Crm.Client.Core.Storage.Common.$1U.$Bo("activitypointer");
    return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X
        .$1AG('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" returntotalrecordcount="true" no-lock="true"><entity name="activitypointer">\t<attribute name="subject"/>\t<attribute name="scheduledstart"/>\t<attribute name="regardingobjectid"/>\t<attribute name="scheduledend"/>\t<order attribute="scheduledend" descending="false"/>\t<filter type="and">\t\t<condition attribute="statecode" operator="in">\t\t\t<value>0<\/value>\t\t\t<value>3<\/value>\t\t<\/condition>\t\t<condition attribute="isregularactivity" operator="eq" value="1"/><filter type="or">\t\t\t<condition attribute="scheduledstart" operator="today"/>\t\t\t<condition attribute="scheduledend" operator="today"/>\t\t\t<condition attribute="scheduledstart" operator="this-week"/>\t\t\t<condition attribute="scheduledend" operator="this-week"/>\t\t\t<condition attribute="scheduledend" operator="olderthan-x-weeks" value="1"/>\t\t\t<condition attribute="scheduledend" operator="last-week"/>\t\t<\/filter>\t<\/filter>\t<filter type="and">\t\t<filter type="or">\t\t\t<condition attribute="activitytypecode" operator="eq" value="4202"/>\t\t\t<condition attribute="activitytypecode" operator="eq" value="4210"/>\t\t\t<condition attribute="activitytypecode" operator="eq" value="4212"/>\t\t\t<condition attribute="activitytypecode" operator="eq" value="4216"/>\t\t\t<condition attribute="activitytypecode" operator="eq" value="4201"/>\t\t<\/filter>\t<\/filter><\/entity><\/fetch>', 16, n)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("FetchXmlForDocumentRecommendations",
                Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.$2pd)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.$2pd = function(n) {
    var i = n,
        r = i.$2,
        t = new Microsoft.Crm.Client.Application.ViewModels.Actions.$6H,
        u = r.$6K.entityName,
        f = r.$6K.entityId;
    return t.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(i), t.$P = i.$$d_$4Y, t
            .$1I_3 = i.$$d_$5J, t.$9_3 = i, t.$IM = i.get_DefinitionId(), t
            .$B6 = i.$1p.$BQ + 1, $0.$1(u) ||
            $0.$1(f) ||
            (t.$Hm = new Xrm.Objects
                .EntityReference(u, new Microsoft.Crm.Client.Core.Framework.Guid(f))),
        r.$6K.SuggestionsSource.toString() === "notification" &&
            Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance()
            .$1w(new Microsoft.Crm.Client.Core.Framework.TelemetryCore
                .$P1("DocRecTooltipClickEvent",
                    Xrm.Page.context.getOrgUniqueName(),
                    Xrm.Page.context.getUserId(),
                    "Document Recommendation Tooltip clicked",
                    0)), t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H
    .$2gc = function(n) {
        Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel.isInstanceOfType(n.get_Root()) &&
            (n.get_Root().$V1(), Microsoft.Crm.Client.Core.ViewModels.$Z.$3S9("title", "message"))
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.prototype = {
    $Hm: null,
    $2t: function() {
        var n = this.$9_3;
        return(n.$11w = !0, $0.$1(this.$Hm))
            ? (Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.$2gc(this.$9_3), 0)
            : (this.$3Qp(), Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.prototype.$2t
                .call(this), 1)
    },
    $3Qp: function() {
        this.$9_3.$2J = String.format(Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.$2CL,
            this.$Hm.LogicalName,
            this.$Hm.Id,
            this.$Hm.TypeCode)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z = function() {
    this.$$d_$3MD = Function.createDelegate(this, this.$3MD);
    this.$$d_$3ME = Function.createDelegate(this, this.$3ME);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveEntityCollection", Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.$4z;
    return Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B9 = t, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.prototype = {
    $9k: null,
    $BK: null,
    $2t: function() {
        this.$9k = Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B9.OnSuccess;
        this.$BK = Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B9.OnFailure;
        var n = Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B9.QueryValue, t = n.KeyQuery;
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$36(t, Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu(), this.get_$e()),
            this.$$d_$3ME,
            this.$$d_$3MD), 1
    },
    $3ME: function(n) { this.$9k(n) },
    $3MD: function(n) { this.$BK(n) }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x = function() {
    this.$$d_$2Nn = Function.createDelegate(this, this.$2Nn);
    this.$$d_$3C5 = Function.createDelegate(this, this.$3C5);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("NonCud", Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.$4x;
    return Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B9 = t, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.prototype = {
    $9k: null,
    $BK: null,
    $2t: function() {
        var n = Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B9.QueryValue,
            u = n.CommandName.toString(),
            f = n.EntityName.toString(),
            t = n.NonCudRequest,
            i,
            r;
        return this.$9k = Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B9.OnSuccess, this.$BK = Microsoft
            .Crm.Client.Application.ViewModels.Actions.$4x.$B9
            .OnFailure, $0.$1(t)
            ? (i = Microsoft.Crm.Client.Core.Framework.$4.$1Ra(null), this.$2Nn(i))
            : (r = new Microsoft.Crm.Client.Core.NonCudExecution.ExecutionWrapper.$Mb(u, f, t), this
                .$1k(Microsoft.Crm.Client.Core.Framework.List$1
                    .$$(Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$6V),
                    r.$3IC(),
                    this.$$d_$3C5,
                    this.$$d_$2Nn)), 1
    },
    $3C5: function(n) { this.$9k(n) },
    $2Nn: function(n) { this.$BK(n) }
};
Microsoft.Crm.Client.Application.ViewModels.Actions
    .RetrieveDraftRecordsAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveDraftRecordsAction",
                Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction.$B = function(n) {
    var i = n, t = new Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction, r;
    return t.$P = i.$$d_$4Y, t.$1I_3 = i.$$d_$5J, t.$9_3 = i, r = new Microsoft.Crm.Client.Core.Storage.DataApi.$SQ, t
        .$1v = r, t.$1v.set_$80(i.$1p.$BQ + 1), t.$1v.$2u = i.get_PageSize(), t.$1v.$T = i.$J, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction
    .prototype = {
        $1v: null,
        $2t: function() {
            return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$2Sv(this.$1v, this.get_$e()),
                this.$$d_$4Y,
                this.$$d_$5J), 1
        },
        $1PE: function(n) { return Microsoft.Crm.Client.Core.Models.$A6.$B(n) }
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction = function() {
    this.$$d_$1aa = Function.createDelegate(this, this.$1aa);
    this.$$d_$14k = Function.createDelegate(this, this.$14k);
    Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveEntityRecord",
                Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction;
    return i.$B9 = t, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction.prototype = {
    $9k: null,
    $BK: null,
    $B9: null,
    $2t: function() {
        this.$9k = this.$B9.OnSuccess;
        this.$BK = this.$B9.OnFailure;
        var n = this.$B9.QueryValue, t = n.Identifier, i = n.ColumnSet;
        return this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(t, i, Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu(), this.get_$e()),
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
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K = function() {
    this.$$d_$1P8 = Function.createDelegate(this, this.$1P8);
    this.$$d_$28t = Function.createDelegate(this, this.$28t);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$7K.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("CreateNavigationEntity", Microsoft.Crm.Client.Application.ViewModels.Actions.$7K.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.$7K, r;
    return i.$9_3 = n, r = t, i.$vu = r.SourceEntityLogicalName, i.$vt = r.SourceEntityId, i.$ow = r
        .TargetEntityLogicalName, i.$20x = r.TargetEntityAttribute, i.$P = r.OnSuccess, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K.prototype = {
    $vu: null,
    $vt: null,
    $ow: null,
    $20x: null,
    $P: null,
    $2t: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$rO(this.$vu, this.$vt, this.$ow, this.$20x, this.get_$e()).then(this.$$d_$28t, this.$$d_$1P8), 1
    },
    $28t: function(n) {
        if (!$0.$1(this.$P)) {
            var t = n;
            this.$P(t.NavigationEntities[0].Id)
        }
        this.$1U()
    },
    $1P8: function(n) { this.$1z(n) }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F = function() {
    this.$$d_$2fO = Function.createDelegate(this, this.$2fO);
    this.$$d_$2fP = Function.createDelegate(this, this.$2fP);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$7F.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("ChangeProcess", Microsoft.Crm.Client.Application.ViewModels.Actions.$7F.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.$7F, r = t;
    return i.$9_3 = n, i.$FX = r.EntityId, i.$T = r
            .EntityLogicalName, "ProcessControlId" in r && (i.$gq = r.ProcessControlId),
        "ProcessInstanceId" in r && (i.$Dy = r.ProcessInstanceId), i.$g3 = r.NewStageId, i.$u3 = r.TraversedPath, i
            .$P = r
            .SuccesCallback, i.$1I = r.FailureCallback, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F.prototype = {
    $FX: null,
    $T: null,
    $gq: null,
    $Dy: null,
    $g3: null,
    $u3: null,
    $P: null,
    $1I: null,
    $2t: function() {
        $0.$1(this.$FX) &&
            (this.$FX = new Microsoft.Crm.Client.Core.Framework.Guid(this.$9_3.get_ModelContext().get_Id()));
        var n = $0.$1(this.$g3) ? "" : this.$g3.toString(), t = $0.$1(this.$u3) ? n : this.$u3;
        return this.$1k(Object,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$r4(this.$FX.toString(), this.$T, this.$gq.toString(), this.$Dy, n, t, this.get_$e()),
            this.$$d_$2fP,
            this.$$d_$2fO), 1
    },
    $2fP: function() {
        var t, i, n, r;
        this.$FX.toString() === this.$9_3.get_ModelContext().get_Id() &&
        (t = this.$9_3, i = t.$7V("ProcessManager"), i
            .$33e(), Microsoft.Crm.Client.Core.Framework.$6.get_$k()
            ? (n = new Microsoft.Crm.Client.Core.Commands.$33(null, 40), n.$J = this
                .$T, r = {
                EntityReference: new Xrm.Objects
                    .EntityReference(this.$T, new Microsoft.Crm.Client.Core.Framework.Guid(this.$FX.toString()))
            }, n.$19 = r, n.execute(), n.dispose())
            : Xrm.Utility.openEntityForm(t.$J, this.$FX.toString()));
        $0.$1(this.$P) || this.$P();
        this.$1U()
    },
    $2fO: function(n) {
        $0.$1(this.$1I) || this.$1I();
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X = function() {
    this.$$d_$3Bl = Function.createDelegate(this, this.$3Bl);
    this.$$d_$3Bm = Function.createDelegate(this, this.$3Bm);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$7X.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("NavigateToNextEntity", Microsoft.Crm.Client.Application.ViewModels.Actions.$7X.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Application.ViewModels.Actions.$7X, r;
    return i.$9_3 = n, r = t, i.$u5 = r.NextEntityLogicalName, i.$u4 = r.NextEntityId, i.$12s = r.NewActiveStageId, i
        .$12q = r.NewTraversedPath, i.$ld = r.FollowUpCommand, i
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X.prototype = {
    $12q: null,
    $u4: null,
    $u5: null,
    $12s: null,
    $GN: function() {
        this.set_$2Cj(null);
        Microsoft.Crm.Client.Core.Framework.$BI.prototype.$GN.call(this)
    },
    $2t: function() {
        var n = this.$9_3.get_ModelContext(),
            t = new Microsoft.Crm.Client.Core.Framework.Guid(n.get_$52().get_$52()),
            i = n.get_$HS(),
            r = n.GetValue("processid"),
            u = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
            f = new Xrm.Gen.NavigateToNextEntityRequest(t, i, this.$u4, this.$u5, this.$12s, this.$12q, r, u),
            e = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$2B(f, this.get_$e());
        return this.$1k(Xrm.Sdk.Response, e, this.$$d_$3Bm, this.$$d_$3Bl), 1
    },
    $3Bl: function(n) { this.$1z(n) },
    $3Bm: function() {
        if ($0.$1(this.$ld)) {
            var n = null;
            Microsoft.Crm.Client.Core.ViewModels.Controls.$7Z.isInstanceOfType(this.$9_3) &&
                !$0.$1(this.$9_3.get_$1r()) &&
                (n = this.$9_3.get_$1r().$1nM());
            Xrm.Utility.openEntityForm(this.$u5, this.$u4.toString(), n)
        } else this.$ld.execute();
        this.$1U()
    },
    $ld: null,
    set_$2Cj: function(n) { return $0.$1(this.$ld) || (this.$ld.dispose(), this.$ld = null), this.$ld = n, n }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L = function() {
    this.$$d_$2MW = Function.createDelegate(this, this.$2MW);
    this.$$d_$1WR = Function.createDelegate(this, this.$1WR);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveProcessActionRecord", Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.$B = function(n, t) {
    var i = t, r = new Microsoft.Crm.Client.Application.ViewModels.Actions.$6L, u;
    return r.$P = i.OnSuccess, r.$1I_3 = i.OnFailure, u = i.QueryValue, Microsoft.Crm.Client.Application.ViewModels
        .Actions.$6L.$1wj = u.ProcessActionName.toString(), r
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.prototype = {
    $P: null,
    $2t: function() { return this.$Ke(), 1 },
    $Ke: function() {
        var n = new Microsoft.Crm.Client.Core.Storage.DataApi
            .$O3(45,
                this.get_$2C(),
                "sdkmessage",
                1,
                !1,
                Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.$1wj,
                0);
        this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(n, this.get_$e()),
            this.$$d_$1WR,
            this.$$d_$2MW)
    },
    $1WR: function(n) {
        var i = MscrmComponents.DeferredPromiseFactory(Xrm.ProcessActionSuccessResponse, Xrm.ErrorResponse), t = this;
        this.$Hv(function() {
                var i = n.get_$3XJ() > 0
                    ? n.get_$H(0).get_$5Z()
                    : new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel.ViewModelDescriptor;
                t.$P(i);
                t.$1U()
            },
            this.get_$JU())
    },
    $2MW: function(n) {
        var t = MscrmComponents.DeferredPromiseFactory(Xrm.ProcessActionSuccessResponse, Xrm.ErrorResponse),
            i = new Xrm.ErrorResponse(n.$10, n.$E, n.$E);
        t.reject(i);
        this.$1z(n)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction = function() {
    this.$$d_$2JP = Function.createDelegate(this, this.$2JP);
    this.$$d_$34B = Function.createDelegate(this, this.$34B);
    Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveProcessActiveStage",
                Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction
    .$B = function(n) {
        return Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.$d9(n)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.$d9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction;
    return t.$9_3 = n, t.$Ha = new Microsoft.Crm.Client.Core.Framework.Guid(n.$L6), t.$P = n.$$d_$iV, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.prototype = {
    $T: null,
    get_$BS: function() { return this.$9_3 },
    $FX: null,
    $Ha: null,
    $P: null,
    $2t: function() {
        var n = this.$9_3, t, i, r, u, f, e;
        return!$0.$1(n.$2) &&
            !$0.$1(n.$2.get_ModelContext()) &&
            (t = n.$2.get_ModelContext(), !$0.$1(t) && !$0.$1(t.$M) && !$0.$1(t.$M.$DE))
            ? (this.$2JF(t.$M.$DE), 0)
            : ($0.$1(n.get_ModelContext())
                ? this.$2JP(Microsoft.Crm.Client.Core.Framework.$4
                    .$h("RetrieveProcessActiveStageAction - ViewModel.ModelContext is null."))
                : (this.$T = n.get_ModelContext().get_ModelName(), this.$FX = Microsoft.Crm.Client.Core.Framework.Guid
                    .tryCreate(n.get_ModelContext()
                        .get_Id()), Microsoft.Crm.Client.Core.ViewModels.Controls.$44.$u2(this.$T)
                    ? (i = new Mscrm.ProcessControlShared.ObjectModels.$K1, i.EntityLogicalName = this.$T, i.Id = this
                        .$FX.toString(), this.$3Lx(i))
                    : (r = n.$Dy, u = null, Microsoft.Crm.Client.Core.Framework.$3.$1S(r) ||
                    (u = new Xrm.Objects
                        .EntityReference("businessprocessflowinstance",
                            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(r))), f = new Xrm.Gen
                        .RetrieveProcessActiveStageRequest(this.$FX, this.$T, this.$Ha, u), e = Microsoft.Crm.Client
                        .Core.Storage.DataApi.DataSource.$3.$2B(f, this.get_$e()), this
                        .$1k(Xrm.Sdk.Response, e, this.$$d_$34B, this.$$d_$2JP))), 1)
    },
    $rH: function(n) {
        ($0.$1(n) || $0.$1(n.$KF)) && (n = this.$28f());
        this.$P(n);
        this.$1U()
    },
    $28f: function() {
        var t = new Mscrm.ProcessControlShared.ObjectModels.$K1, n;
        return $0.$1(this.get_$BS().get_ModelContext()) ||
        (t.EntityLogicalName = this.get_$BS().get_ModelContext().get_ModelName(), t.Id = this.get_$BS()
            .get_ModelContext().get_Id()), n = new Mscrm.ProcessControlShared.ObjectModels.$K3, n.$KF = this.get_$BS()
            .get_$Ct().toString(), n.$CU = this.get_$BS().get_$uY(), n.$Cp = [t], n
    },
    $34B: function(n) {
        var t = n.entity;
        this.$2JF(t)
    },
    $2JF: function(n) {
        if ($0.$1(n)) {
            this.$rH(null);
            return
        }
        var r = this.get_$BS().get_$9X(),
            u = new Microsoft.Crm.Client.Core.Models.ProcessControl.Factories.$K8,
            t = u.$28Q(n, r),
            i = null;
        if ($0.$1(t) || (i = this.get_$BS().$Dl(t.$KF)), $0.$25(i)) {
            this.$3An(t);
            return
        }
        this.$rH(t)
    },
    $3An: function(n) {
        var t = this.$28f(), r = this.$2qB(n.$Cp), i;
        if ($0.$1(r)) {
            this.$rH(t);
            return
        }
        i = this;
        this.$1k(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
            .$6F(r,
                new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["processid", "stageid", "traversedpath"]),
                Microsoft.Crm.Client.Core.ViewModels.$w.get_$g4(),
                this.get_$e()),
            function(r) {
                if (r.hasValue("processid") && i.$Ha.equals(r.getValue("processid")) && r.hasValue("stageid")) {
                    var u = r.getValue("stageid").toString(), f = r.getValue("traversedpath"), e = i.get_$BS().$Dl(u);
                    IsNull(e)
                        ? (t.$KF = i.get_$BS().get_$Ct().toString(), t.$CU = i.get_$BS().get_$uY())
                        : (t = n, t.$KF = u, t.$CU = f)
                }
                i.$rH(t)
            },
            this.$$d_$2JP)
    },
    $2qB: function(n) {
        if ($0.$1(n) || !n.length) return null;
        var t = n[n.length - 1];
        return new Xrm.Objects.EntityReference(t.EntityLogicalName, new Microsoft.Crm.Client.Core.Framework.Guid(t.Id))
    },
    $2JP: function(n) { n.$10 === -2147093999 ? this.$1TY() : this.$1z(n) },
    $1TY: function() { this.$rH(null) },
    $3Lx: function(n) {
        var t = new Mscrm.ProcessControlShared.ObjectModels.$K3, u, r, i, f, e;
        for (t.$KF = this.get_$BS().get_$Ct().toString(), t.$CU = this.get_$BS().get_$uY(), u = new Microsoft.Crm.Client
                .Core.Offline.OfflineStore.DAL.$7k, r = new Array(0), i = 1;
            i <= 5;
            i++)
            f = String.format("entity{0}id", i), e = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL
                .$Hz(f, n.Id, 1, 0), r.push(e);
        var s = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$I0(r), o = this, h = this;
        this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.when(u.$6F("businessprocessflowinstance", s)),
            function(i) {
                var r = i[0];
                r.rows.length > 0 ? o.$2eH(t, r) : t.$Cp = [n];
                o.$rH(t)
            },
            function() {
                t.$Cp = [n];
                h.$rH(t)
            })
    },
    $2eH: function(n, t) {
        var r = {}, i, f, e, o, u, s;
        for (n.$Cp = new Array(0), i = t.rows.item(0), ("processstageid"in
        i)&&
        !$0.$1(i.processstageid) &&
        (n.$KF = i.processstageid.toString().toLowerCase(), r.processstageid = i.processstageid.toString()
            .toLowerCase()), ("traversedpath" in i) &&
            !$0.$1(i.traversedpath) &&
            (n.$CU = i.traversedpath.toString(), r.traversedpath = i.traversedpath.toString()), f = 1;
        f <= 5;
        f++)
        e = String.format("entity{0}id", f), o = String
            .format("entity{0}objecttypecode", f), e in i &&
            o in i &&
            !$0.$1(i[e]) &&
            !$0.$1(i[o]) &&
            (u = new Mscrm.ProcessControlShared.ObjectModels.$K1, u.Id = i[e].toString(), u.EntityLogicalName = i[o]
                .toString(), r[e] = u.Id, r[o] = u.EntityLogicalName, n.$Cp.push(u));
        (s = "businessprocessflowinstanceid" in i && !$0.$1(i.businessprocessflowinstanceid), s) &&
            (r.businessprocessflowinstanceid = i.businessprocessflowinstanceid.toString(), this.$3R3(r))
    },
    $3R3: function(n) {
        var i = new Microsoft.Crm.Client.Core.Framework.Guid(n.businessprocessflowinstanceid.toString()),
            r = new Xrm.Objects.EntityReference("businessprocessflowinstance", i),
            u = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord(r,
                    n,
                    {},
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0))),
            t = this.get_$BS().$2.get_ModelContext(),
            f = !$0.$1(t) && $0.$1(t.$M.$DE);
        f && (this.get_$BS().$2.get_ModelContext().$M.$DE = u)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$UI = function() {
    this.$$d_$2MW = Function.createDelegate(this, this.$2MW);
    this.$$d_$1WR = Function.createDelegate(this, this.$1WR);
    this.$$d_$39q = Function.createDelegate(this, this.$39q);
    this.$$d_$39n = Function.createDelegate(this, this.$39n);
    this.$$d_$39o = Function.createDelegate(this, this.$39o);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$UI.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$UI.prototype = {
    $P: null,
    $Wn: null,
    $T: null,
    set_$nh: function(n) { return this.$P = n, n },
    $2t: function() { return this.$Wn = this.$30A(), $0.$1(this.$Wn) ? this.$2zc(this.$T) : this.$Ke(), 1 },
    $1WR: function(n) {
        var t = this;
        this.$Hv(function() {
                var i = new Microsoft.Crm.Client.Core.Framework
                        .PerformanceStopwatch("RetrieveProcessControlAction:LoadDefinitionsSuccess"),
                    r,
                    u;
                i.start();
                $0.$1(t.$P) ||
                (r = new Microsoft.Crm.Client.Core.Models.Descriptors.ViewModel
                    .ViewModelDescriptor, u = n.get_$3XJ() > 0 ? n.get_$H(0).get_$5Z() : r, t.$P(u));
                t.$1U();
                i.stop()
            },
            this.get_$JU())
    },
    $2MW: function(n) { this.$1z(n) },
    $30A: function() {
        if (!$0.$1(this.$Wn)) return this.$Wn;
        var n = this.$9_3.get_ModelContext();
        return $0.$1(n) ? null : n.GetValue("processid")
    },
    $2zc: function(n) {
        (Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 1 ||
                Microsoft.Crm.Client.Core.Framework.$6.get_$2C() === 2) &&
            !Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_$s() &&
            Xrm.Utility.isMocaOfflineFeatureEnabled() &&
            Xrm.Utility.isEntityOfflineSyncEnabled(n)
            ? this.$2zd(this.$T)
            : this.$1k(Xrm.Sdk.Response,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$2B(new Xrm.Gen.RetrieveProcessWithFallbackRequest(n, null), this.get_$e()),
                this.$$d_$39o,
                this.$$d_$39n)
    },
    $2zd: function(n) {
        var r = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$7k, t = new Array(0), i;
        t.push(new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz("primaryentity", n.toLowerCase(), 1, 0));
        t.push(new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz("category", 4, 0, 0));
        t.push(new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz("statecode", 1, 0, 0));
        t.push(new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz("businessprocesstype", 1, 0, 1, 0));
        t.push(new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$Hz("businessprocesstype", "", 1, 6, 1));
        i = new Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.$I0(t);
        this.$1k(Microsoft.Crm.Client.Core.Imported.Norsync.SQLiteResults,
            r.$6F("Workflow", i),
            this.$$d_$39q,
            this.$$d_$39n)
    },
    $39q: function(n) {
        this.$Wn = null;
        !$0.$1(n) && n.rows.length > 0 && !$0.$1(n.rows.item(0)) && this.$3RB(n);
        this.$Ke()
    },
    $3RB: function(n) {
        var u, f, i, r, t;
        for (Microsoft.Crm.Client.Core.Framework.Utils.$E
                .$1W(n.rows.item(0)
                    .workflowid,
                    "entityMetadata"), u = $0.$1(n.rows.item(0).workflowid)
                ? null
                : Microsoft.Crm.Client.Core.Framework.Guid
                .tryCreate(n.rows.item(0).workflowid
                    .toString()), f = $0.$1(n.rows.item(0)
                .processorder)
            ? 2147483647
            : n.rows.item(0).processorder, i = 1;
            i < n.rows.length;
            i++)
            r = 2147483647, t = n.rows.item(i), $0.$1(t
                    .processorder) ||
                (r = t.processorder), f > r &&
            (u = $0.$1(t.workflowid)
                ? null
                : Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(t.workflowid.toString()), f = r);
        this.$Wn = u
    },
    $39o: function(n) {
        var t = n.entity;
        t && t.set_clientRetrieveOptions(Microsoft.Crm.Client.Core.ViewModels.$w.get_$fu());
        this.$Wn = t ? t.getValue("workflowid") : null;
        this.$Ke()
    },
    $39n: function(n) { n.$10 === -2147093999 ? this.$1TY() : this.$1z(n) },
    $Ke: function() {
        if ($0.$1(this.$Wn) || this.get_$2C() === 4)
            this.$1WR(new(Microsoft.Crm.Client.Core.Framework.$P
                .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W)));
        else {
            var n = new Microsoft.Crm.Client.Core.Storage.DataApi
                .$O3(15, this.get_$2C(), null, 1, !0, this.$Wn.toString());
            this.$1k(Microsoft.Crm.Client.Core.Framework.$P.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W),
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.$5c(n, this.get_$e()),
                this.$$d_$1WR,
                this.$$d_$2MW)
        }
    },
    $1TY: function() {
        this.$1WR(new(Microsoft.Crm.Client.Core.Framework.$P
            .$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$W))(0))
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e = function() {
    this.$$d_$1FV = Function.createDelegate(this, this.$1FV);
    Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveProcessControlFirstStage",
                Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e
    .$B = function(n) { return Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.$d9(n) };
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.$d9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.Actions.$6e;
    return t.$9_3 = n, t.$T = n.$J, t.set_$nh(t.$$d_$1FV), t.$1I_3 = n.$$d_$1vQ, t.$13C = n.$$d_$1vR, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.prototype = {
    $13C: null,
    set_$3DT: function(n) { return this.$13C = n, n },
    $1FV: function(n) {
        var u, e, t, o, i;
        if (!n) {
            this.$13C(null);
            return
        }
        var s = this.$9_3.get_$2W(), r = null, f = n.ChildViewModels;
        for (u in f)
            if ((e = { key: u, value: f[u] }, t = e.value, t.TypeName === "ProcessEntity") &&
                (o = Microsoft.Crm.Client.Core.ViewModels.$1Q
                    .$CA(String, "EntityLogicalName", t.Properties), o === s) &&
                (r = this.$2qA(t), r)) break;
        i = [];
        Array.add(i, this.$Wn);
        Array.add(i, r);
        this.$13C(i)
    },
    $2qA: function(n) {
        var t = null, u = n.ChildViewModels, i, f, r;
        for (i in u)
            if ((f = { key: i, value: u[i] }, r = f.value, r.TypeName === "Stage") &&
                (t = Microsoft.Crm.Client.Core.ViewModels.$1Q.$CA(String, "StageId", r.Properties), t)) break;
        return new Microsoft.Crm.Client.Core.Framework.Guid(t)
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.initializeBase(this)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveRecentlyViewedItemList",
        Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$B);
    (Microsoft.Crm.Client.Core.Framework.$6.get_$1Vt() || Microsoft.Crm.Client.Core.Framework.$6.get_$4R()) &&
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$6M()
        .add_$2NI(Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$2P0)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Core.ViewModels.PagedListViewModel,
        r = new Microsoft.Crm.Client.Application.ViewModels.Actions.$2q,
        u;
    return r.$60 = Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$VI(i), r.$9_3 = i, r.$IM = i
        .get_DefinitionId(), r.$2Q = Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$25R(), r
        .$B6 = i.$1p.$BQ + 1, u = t, r.$P = function(n) {
        i.dispose();
        i = null;
        u.OnSuccess(n)
    }, r.$1I_3 = function(n) {
        i.dispose();
        i = null;
        u.OnFailure(n)
    }, r
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$25R = function() {
    var i, t, u, f;
    if ($0.$1(Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD)) {
        i = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$V().$OI();
        Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD = '<filter type="or">';
        Microsoft.Crm.Client.Application.ViewModels.Actions.$2q
            .$lD += "<condition attribute='recentlyviewedxml' operator='like' value='%etc=\"1030\"%' />";
        for (var r = i, e = r.length, n = 0; n < e; ++n)
            t = r[n], t.$OV &&
            (Microsoft.Crm.Client.Application.ViewModels.Actions.$2q
                .$lD += "<condition attribute='recentlyviewedxml' operator='like' value ='%etc=\"" + t.$7h + "\"%' />");
        Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD += "<\/filter>"
    }
    return u = String
        .format("<fetch mapping='logical' returntotalrecordcount='true'>\r\n\t\t\t\t\t\t\t<entity name='{0}'>\r\n\t\t\t\t\t\t\t<attribute name='recentlyviewedxml'/>\r\n\t\t\t\t\t\t\t<attribute name='objecttypecode'/>\r\n\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t<condition attribute='ownerid' operator='eq' value='{1}' />\r\n\t\t\t\t\t\t\t\t<condition attribute='recentlyviewedxml' operator='neq' value='' />\r\n\t\t\t\t\t\t\t\t<condition attribute='recentlyviewedxml' operator='not-null' />\r\n\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t" + Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD + "\r\n\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t<\/fetch>", "userentityuisettings", Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$K().$3G), f = Microsoft.Crm.Client.Core.Storage.Common.$1U.$Bo("userentityuisettings"), Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.$1X.$1AG(u, 16, f)
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q
    .$2P0 = function() { Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD = null };
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.prototype = {
    $4Y: function(n) {
        if (this.$14j = $0.$1(n.$4U) ? null : n.$4U.$CT, $0.$1(this.$P) || this.$9_3.get_$Dp()) this.$1U();
        else {
            var t = this;
            this.$Hv(function() {
                    var i = t.$1PE(n);
                    t.$P(i);
                    t.$1U()
                },
                Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$29n(this.$9_3))
        }
    }
};
Microsoft.Crm.Client.Application.ViewModels.Actions
    .RetrieveProcessControlDefinitionAction = function() {
        Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction.initializeBase(this)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("RetrieveProcessControlDefinition",
                Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction
    .$B = function(n) {
        return Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction.$d9(n)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction.$d9 = function(n) {
    var t = new Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction;
    return t.$9_3 = n, t.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$14o, t.$T = n.$J, t
        .set_$nh(n.$$d_$1FV), t.$1I_3 = n.$$d_$3Ds, t
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR = function() {
    Microsoft.Crm.Client.Application.ViewModels.Actions.$CR.initializeBase(this, [1])
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR
    .$$cctor = function() {
        Microsoft.Crm.Client.Core.ViewModels.$M
            .registerQuery("UpdateMultipleRecentlyViewedItemsAction",
                Microsoft.Crm.Client.Application.ViewModels.Actions.$CR.$B)
    };
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR.$B = function(n, t) {
    var r = new Microsoft.Crm.Client.Application.ViewModels.Actions.$CR, i = t;
    return r.$Kd = i.EntityRecords, !$0.$1(i.onSuccess) &&
        Function.isInstanceOfType(i.onSuccess) &&
        (r.$P = i.onSuccess), !$0.$1(i.onFailure) && Function.isInstanceOfType(i.onFailure) && (r.$1I = i.onFailure), r
};
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR.prototype = {
    $P: null,
    $1I: null,
    $Kd: null,
    $Qn: function() {
        var n, t, r, u, f;
        if (!Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3.get_$s() &&
            Microsoft.Crm.Client.Core.ViewModels.$n.$DF())
            return n = Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093996), this.$1I(n), this.$1z(n), 1;
        if ($0.$1(this.$Kd) || !this.$Kd.length) return this.$P(null), this.$1U(), 1;
        t = [];
        for (var e = this
                     .$Kd,
            o = e.length,
            i = 0;
            i < o;
            ++i)
            r = e[i], Array.add(t,
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$3
                .$7n(r.$2n,
                    r,
                    !1,
                    Microsoft.Crm.Client.Core.Framework.$15.$5v("", "UpdateMultipleRecentlyViewedItemsAction")));
        return u = this, f = this, this.$BI(Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(t),
            function(n) {
                u.$P(n);
                u.$1U()
            },
            function(n) {
                f.$1I(n);
                f.$1z(n)
            }), 1
    }
};
Type.registerNamespace("Microsoft.Crm.Client.Core.ViewModels.Actions");
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J = function() {
    this.$$d_$s7 = Function.createDelegate(this, this.$s7);
    this.$$d_$67 = Function.createDelegate(this, this.$67);
    Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.initializeBase(this)
};
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.$$cctor = function() {
    Microsoft.Crm.Client.Core.ViewModels.$M.registerQuery("RetrieveEmailFollowTrackingInfoAction",
        Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.$B)
};
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.$B = function(n, t) {
    var i = new Microsoft.Crm.Client.Core.ViewModels.Actions.$8J;
    return i.$60 = Microsoft.Crm.Client.Core.Framework.SchedulerPriorities.$hB, Microsoft.Crm.Client.Core.ViewModels
        .Actions.$8J.$15Q(i, t), i
};
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.$15Q = function(n, t) {
    var r = t, i = r.QueryValue;
    n.$1MF = i.TrackingId;
    n.$1KK = i.ConversationTrackingId;
    n.$pc = i.EmailLinks;
    n.$7N = i.OnSuccess;
    n.$1I_3 = r.OnFailure
};
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.prototype = {
    $5G: null,
    $7N: null,
    $1MF: null,
    $1KK: null,
    $pc: null,
    get_$26n: function() { return"webclient" },
    $2t: function() {
        return(this.$2X9(), !Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().$5Q.$21)
            ? (this.$s7(Microsoft.Crm.Client.Core.Framework.$4
                .$h("'NativeBridge.Instance.OfficeMailDispatcher' is not available.")), 0)
            : (this.$1k(Microsoft.Crm.Client.Core.Models.$A8, this.$2Sw(), this.$$d_$67, this.$$d_$s7), 1)
    },
    $2nx: function(n) {
        for (var i = {}, t = 0; t < this.$pc.length; t++) i[this.$pc[t]] = n.emailLinkTrackingUrls[t];
        return i
    },
    $2B2: function(n) { return n.emailTrackingPixelUrl },
    $2Sw: function() {
        var n = MscrmComponents.DeferredPromiseFactory(Microsoft.Crm.Client.Core.Models.$A8,
                Microsoft.Crm.Client.Core.Framework.$4),
            i = [],
            t,
            r;
        return i.push(Xrm.Internal.messages
            .getEmailTrackingPixelUrl(this
                .$1MF,
                this.$1KK,
                this.get_$26n())), !$0.$1(this.$pc) &&
            this.$pc.length > 0 &&
            i.push(Xrm.Internal.messages
                .getEmailLinkTrackingUrls(this
                    .$1MF,
                    this.$1KK,
                    this.get_$26n(),
                    this.$pc)), t = this, r = this, Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper
            .whenArray(i).then(function(i) {
                    i.length === 1
                        ? n.resolve(new Microsoft.Crm.Client.Core.Models.$A8(t.$2B2(i[0]), null))
                        : i.length === 2
                        ? n.resolve(new Microsoft.Crm.Client.Core.Models.$A8(t.$2B2(i[0]), t.$2nx(i[1])))
                        : n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999))
                },
                function(t) {
                    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.$x.isInstanceOfType(t)
                        ? n.reject(Microsoft.Crm.Client.Core.Framework.$4.$Kl(t.$2H6()))
                        : n.reject(Microsoft.Crm.Client.Core.Framework.$4.$lh(-2147093999))
                }), n
    },
    $s7: function(n) {
        n.$10 === -2147093999 && (n.$10 = -2147093997);
        this.$2CV(n);
        this.$1z(n)
    },
    $67: function(n) {
        this.$7N(n);
        this.$2CW(n);
        this.$1U()
    },
    $2X9: function() {
        this.$5G = new Microsoft.Crm.Client.Core.Framework
            .$N6("MailAppAction", { Action: "RetrieveEmailFollowTrackingInfoAction" });
        Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$hz(this.$5G)
    },
    $2CW: function(n) {
        $0.$1(this.$5G) ||
        (this.$5G.p.EmailFollowTrackingInfoRetrieved = !0, this.$5G.p.EmailFollowTrackingPixelUrl = n.$wy, this.$5G
            .p.EmailFollowTrackingUrlPairs = n.$wx, Microsoft.Crm.Client.Core.Framework.$1C.get_$5()
            .$VZ(this.$5G.rid), this.$5G = null)
    },
    $2CV: function(n) {
        $0.$1(this.$5G) ||
        (this.$5G.p.EmailFollowTrackingInfoRetrieved = !1, this.$5G.p.ErrorCode = n.$10, this.$5G.p.ErrorMessage = n
            .$E, Microsoft.Crm.Client.Core.Framework.$1C.get_$5().$VZ(this.$5G.rid), this.$5G = null)
    }
};
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Core.ViewModels.$DW.registerClass("Microsoft.Crm.Client.Core.ViewModels.$DW",
    Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction);
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I",
        Microsoft.Crm.Client.Core.ViewModels
        .$Tg);
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$3ZM
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$3ZM");
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tg);
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$UC
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$UC",
        Microsoft.Crm.Client.Core.ViewModels.$Tu,
        Microsoft.Crm.Client.Core.ViewModels.$Gb);
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$UC);
Microsoft.Crm.Client.Application.ViewModels.$Bs
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Bs",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.$B3
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$B3",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction",
        Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction);
Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$3ZP
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$3ZP");
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$6M
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$6M", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$6M);
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$UC);
Microsoft.Crm.Client.Application.ViewModels.$BU
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$BU", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction);
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$77
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$77", Microsoft.Crm.Client.Core.ViewModels.$Tg);
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$Bp
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Bp", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.PingServerAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.PingServerAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$Bq
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Bq", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$UC);
Microsoft.Crm.Client.Application.ViewModels.$6J
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$6J",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction);
Microsoft.Crm.Client.Application.ViewModels.$6K
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$6K", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase);
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$3A
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$3A",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZO
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZO");
Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZN
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$3A.$3ZN");
Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowActionBase);
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$6M);
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$6M);
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction",
        Microsoft.Crm.Client.Application.ViewModels.$6M);
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$B5
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$B5", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$Ty
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$Ty", Microsoft.Crm.Client.Core.ViewModels.$Tg);
Microsoft.Crm.Client.Application.ViewModels.$3a
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$3a", Microsoft.Crm.Client.Application.ViewModels.$Ty);
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$6N
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$6N", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction",
        Microsoft.Crm.Client.Application.ViewModels.$Ty);
Microsoft.Crm.Client.Application.ViewModels.$5i
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$5i", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.$2m
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$2m", Microsoft.Crm.Client.Application.ViewModels.$Ty);
Microsoft.Crm.Client.Application.ViewModels.$4k
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.$4k", Microsoft.Crm.Client.Application.ViewModels.$2m);
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$9m",
        Microsoft.Crm.Client.Application.ViewModels.$Ty);
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$8L",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$6H",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$4z", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$4x", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$7K", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$7F", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$7X", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$6L", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction",
        Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$UI
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$UI", Microsoft.Crm.Client.Core.ViewModels.$Tu);
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$6e",
        Microsoft.Crm.Client.Application.ViewModels.Actions.$UI);
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$2q",
        Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction);
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction",
        Microsoft.Crm.Client.Application.ViewModels.Actions.$UI);
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR
    .registerClass("Microsoft.Crm.Client.Application.ViewModels.Actions.$CR",
        Microsoft.Crm.Client.Application.ViewModels.$Ty);
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J
    .registerClass("Microsoft.Crm.Client.Core.ViewModels.Actions.$8J", Microsoft.Crm.Client.Core.ViewModels.$Tg);
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.$8I.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.MailApp.Actions.RetrieveEmailEngagementSummaryAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.AssociateOneToManyAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.AssociateRecordsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$Bs.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$B3.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.ExportToExcelAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.GetLookupListItemDescriptorAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.GetMultipleEntityFormDefinitionAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.MetadataDownloadAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.OpenDocumentTemplateAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.OpenWordTemplateAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveDocumentTemplatesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveAncestorsDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomControlTemplateDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveDashboardSelectorDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveDefaultListForEntityAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityMetadataByDisplayNameAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveFormDataXmlAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.DeleteSnapViewEntriesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.PopulateTileDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$BU.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivityCreateButtonsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveListByDisplayNameAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$77.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityAttributeMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$Bp.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveMultipleEntityMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveApplicationSettingsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.ExecuteQuickFindAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.ExecuteExternalSearchAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.PingServerAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveDataSetMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveFilteredProcessesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$Bq.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$6J.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$6K.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalDocumentTemplatesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveProvisionedLanguagesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalCreateEnabledEntitiesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveGlobalMenuDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveControlConfigurationsDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$3A
    .$2C4 =
    '<fetch mapping="logical" distinct="false" aggregate="true" >\r\n\t\t\t\t<entity name="productpricelevel">\r\n\t\t\t\t\t<attribute name="uomid" groupby="true" alias="uomid" />\r\n\t\t\t\t\t<attribute name = "productpricelevelid" groupby="true" alias="productpricelevelid" />\r\n\t\t\t\t\t<attribute name = "amount" groupby="true" alias="amount" />\r\n\t\t\t\t\t<attribute name = "productid" groupby="true" alias="productid" />\r\n\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t<condition attribute = "pricelevelid" operator="eq" value="{0}" />\r\n\t\t\t\t\t\t<condition entityname = "basketrecord_productdetailentity" attribute="{12}" operator="null" />\r\n\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t<link-entity name = "{1}" to="{2}" from="{3}" link-type="inner">\r\n\t\t\t\t\t\t{4}\r\n\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t<condition attribute = "{5}" operator="in">\r\n\t\t\t\t\t\t\t{6}\r\n\t\t\t\t\t\t\t<\/condition>\r\n\t\t\t\t\t\t\t{7}\r\n\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t<link-entity name = "{9}" from="productid" to="{8}" link-type="outer" alias="basketrecord_productdetailentity" >\r\n\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t<condition attribute = "{10}" operator="eq" value= "{11}" />\r\n\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t\t<link-entity name = "product" to="{8}" from="productid" link-type="inner">\r\n\t\t\t\t\t\t\t<filter type = "or">\r\n\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t<condition attribute = "statecode" operator="eq" value= "0" />\r\n\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t<condition attribute = "statecode" operator="eq" value= "3" />\r\n\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t<\/entity>\r\n\t\t\t<\/fetch>';
Microsoft.Crm.Client.Application.ViewModels.$3A
    .$2CC =
    '<fetch mapping="logical" distinct="false" aggregate="true">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<entity name="recommendationcache">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="recommendeditemid" groupby="true" alias="recommendeditemid"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="recommendationrating" aggregate="max" alias="recommendationrating"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="itemid" operator="in">{0}<\/condition>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="isrecommendationactive" operator="eq" value="1" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition entityname="productsuggestions_detailentity" attribute="{1}" operator="null" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<order alias="recommendationrating" descending="true" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="product" from="productid" to="recommendeditemid" link-type="inner" alias="a_7d64828b1789436db0d0cf80c2660962">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="0" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="3" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="{2}" from="{3}" to="recommendeditemid" link-type="outer" alias="productsuggestions_detailentity" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="{4}" operator="eq" value="{5}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<\/filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<\/entity>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/fetch>';
Microsoft.Crm.Client.Application.ViewModels.$3A.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveUnboundTargetEntityMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveTaskBasedFlowStatusAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveHeaderMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveActivitiesEnabledForMobileAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttachmentContentsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartViewSelectorDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartSelectorDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveListMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveTimeZoneDefinitionAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveViewSelectorDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveEntityReferencesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromIdAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveLookupViewQueryFromEntityTypeAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrievePersonalizationAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.GetRootDefinitionAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveAttributeMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveChartDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.$2Ch = new(Microsoft.Crm.Client.Core.Framework
    .List$1.$$(String))(["DocumentTemplatesFlyout", "WordTemplatesFlyout"]);
Microsoft.Crm.Client.Application.ViewModels.RetrieveCommandSetAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$B5.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$3a.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.DeleteRecordAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveCustomizationModelAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveOptionSetMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveListDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrievePinnedTileDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveRecordDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveRelationshipPinnedTileDataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveTargetEntityMetadataAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$6N.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.RetrieveWebResourcesAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.ScriptErrorRequestAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.SetCreateModelFromRetrievedEntityAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.SetQuickCreateEntityReferenceAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.SetStateRequestAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$5i.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$4k.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.$2m.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.UpdateSyncStatusAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.WaitForEditEnabledAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.CalculateRollupFieldAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$21C = !1;
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$22h = !1;
Microsoft.Crm.Client.Application.ViewModels.Actions.PopulateDocumentTemplateFlyoutAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$9m.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$8L.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H
    .$2CL =
    '<filter type="and">\r\n\t\t\t\t\t<condition attribute="regardingobjectid" operator="eq" uitype="{0}" value="{1}"/>\r\n\t\t\t\t\t<condition attribute="regardingobjecttypecode" operator="eq" value="{2}"/>\r\n\t\t\t\t<\/filter>';
Microsoft.Crm.Client.Application.ViewModels.Actions.$6H.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$B9 = null;
Microsoft.Crm.Client.Application.ViewModels.Actions.$4z.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$B9 = null;
Microsoft.Crm.Client.Application.ViewModels.Actions.$4x.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveDraftRecordsAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveEntityRecordAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$7K.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$7F.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$7X.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.$1wj = "";
Microsoft.Crm.Client.Application.ViewModels.Actions.$6L.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessActiveStageAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$6e.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$lD = null;
Microsoft.Crm.Client.Application.ViewModels.Actions.$2q.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.RetrieveProcessControlDefinitionAction.$$cctor();
Microsoft.Crm.Client.Application.ViewModels.Actions.$CR.$$cctor();
Microsoft.Crm.Client.Core.ViewModels.Actions.$8J.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Application.ViewModels.js.srcmap