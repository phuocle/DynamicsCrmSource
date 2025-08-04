Type.registerNamespace("Mscrm");
Mscrm.YammerConfigHandler = function(element) {
    this.$$d_$R_3 = Function.createDelegate(this, this.$R_3);
    this.$$d_$Q_3 = Function.createDelegate(this, this.$Q_3);
    this.$$d_$V_3 = Function.createDelegate(this, this.$V_3);
    this.$$d_$U_3 = Function.createDelegate(this, this.$U_3);
    this.$$d_onAuthorize = Function.createDelegate(this, this.onAuthorize);
    Mscrm.YammerConfigHandler.initializeBase(this, [element])
};
Mscrm.YammerConfigHandler.verifyUserEmail = function() {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, Object), $v_1 = Mscrm.YammerLogOnDialog.create(true);
    $v_1.setCallbackInfo("resolve", $v_0, null);
    $v_1.show();
    return $v_0.promise()
};
Mscrm.YammerConfigHandler.verifyUser = function(email, password) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, Object),
        $v_1 = Mscrm.YammerWebServiceClient.createCommand("VerifyYammerUserCredentials", null);
    $v_1.SetParameter("email", email);
    $v_1.SetParameter("password", password);
    $v_1.Execute(function($p1_0, $p1_1) {
        if (IsNull($p1_0) || !$p1_0.Success) $v_0.reject($p1_0);
        else $v_0.resolve($p1_0.ReturnValue)
    });
    return $v_0.promise()
};
Mscrm.YammerConfigHandler.onResetYammerCredentials = function(clickEvent) {
    clickEvent.preventDefault();
    Mscrm.YammerConfigHandler.$H = $P_CRM(clickEvent.target).data("userid");
    var $v_0 = {};
    $v_0["OnReset"] = Mscrm.YammerConfigHandler.$X;
    var $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_confirmation.aspx");
    $v_1.get_query()["resource_title"] = "Web.Tools.Yammer.Embed.OnPremiseResetEmailConfirmationTitle";
    $v_1.get_query()["resource_description"] = "Web.Tools.Yammer.Embed.OnPremiseResetEmailConfirmation";
    var $v_2 = new Mscrm.CrmDialog($v_1, null, 500, 150, null);
    $v_2.setCallbackInfo("OnReset", $v_0, null);
    $v_2.show()
};
Mscrm.YammerConfigHandler.$X = function($p0) {
    if ($p0 && $p0) {
        var $v_0 = Mscrm.YammerWebServiceClient.createCommand("ResetYammerCredentials", null);
        $v_0.SetParameter("userId", Mscrm.YammerConfigHandler.$H);
        $v_0.Execute();
        location.reload()
    }
};
Mscrm.YammerConfigHandler.$C = function($p0) { return "#" + $p0 };
Mscrm.YammerConfigHandler.$b = function($p0) { return $p0 + " option:selected" };
Mscrm.YammerConfigHandler.$O = function($p0) { return $p0 + ":checked" };
Mscrm.YammerConfigHandler.prototype = {
    $7_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $P_CRM(".authorizeLink");
        $v_0.click(this.$$d_onAuthorize);
        this.$T_3();
        $P_CRM(Mscrm.YammerConfigHandler.$D).change(this.$$d_$U_3);
        $P_CRM(Mscrm.YammerConfigHandler.$E).change(this.$$d_$V_3)
    },
    dispose: function() {
        $P_CRM(".authorizeLink").unbind("click", this.$$d_onAuthorize);
        $P_CRM(Mscrm.YammerConfigHandler.$D).unbind("change", this.$$d_$U_3);
        $P_CRM(Mscrm.YammerConfigHandler.$E).unbind("change", this.$$d_$V_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    onAuthorize: function(clickEvent) {
        clickEvent.preventDefault();
        if ($P_CRM(clickEvent.target).hasClass("disabled")) return;
        var $v_0 = $P_CRM(".authorizeLink").attr("onpremise");
        if ($v_0 === "True") {
            var $v_1 = Mscrm.YammerLogOnDialog.create(false);
            $v_1.setCallbackInfo("onAuthorizeOnPremise", this, null);
            $v_1.show()
        } else this.$Y_3()
    },
    $T_3: function() {
        var $v_0 = $P_CRM(Mscrm.YammerConfigHandler.$G), $v_1 = {};
        $v_1.source = this.$$d_$Q_3;
        $v_1.change = this.$$d_$R_3;
        $v_1.select = this.$$d_$R_3;
        $v_1.minLength = 0;
        $v_0.autocomplete($v_1)
    },
    $R_3: function($p0, $p1) {
        var $v_0 = IsNull($p1.item) ? "0" : $p1.item.rawValue;
        this.$Z_3(Number.parseInvariant($v_0));
        $v_0 === "0" && $P_CRM(Mscrm.YammerConfigHandler.$G).val(Mscrm.YammerConfigHandler.$I);
        return true
    },
    $Q_3: function($p0, $p1) {
        var $v_0 = new RemoteCommand("YammerConfigWebService", "AdminGroupAutoComplete");
        $v_0.SetParameter("searchTerms", $p0.term);
        var $$t_F = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            if (!$p1_0.Success || isNullOrEmptyString($p1_0.ReturnValue)) return;
            var $v_5 = JSON.parse($p1_0.ReturnValue);
            if (IsNull($v_5.group)) return;
            for (var $v_6 = new Array($v_5.group.length), $v_7 = 0; $v_7 < $v_5.group.length; $v_7++) {
                var $v_8 = {};
                $v_8.label = $v_5.group[$v_7].full_name;
                $v_8.value = $v_5.group[$v_7].full_name;
                $v_8.rawValue = $v_5.group[$v_7].id;
                $v_6[$v_7] = $v_8
            }
            $p1($v_6)
        })
    },
    onAuthorizeOnPremise: function(returnValue) { returnValue && returnValue && this.$W_3() },
    $W_3: function() { this.$J_3() },
    $Y_3: function() {
        this.$0_3("stepAuthorize", false);
        $P_CRM("#radioSecurityPrivate").click();
        this.$2_3("stepSelectNetwork", false);
        this.$2_3("stepSelectGroup", false);
        this.$2_3("stepSetSecurity", false);
        this.$0_3("stepSelectNetwork", false);
        this.$0_3("stepSelectGroup", false);
        this.$0_3("stepSetSecurity", false);
        $P_CRM("div.footer").hide();
        if (this.$7_3 && !this.$7_3.$6_0.closed) return;
        this.$7_3 = Mscrm.YammerOAuthDialogHandler.startOAuth(false);
        var $$t_0 = this;
        this.$7_3.waitForCompletion().done(function() { $$t_0.$J_3() })
    },
    $J_3: function() {
        this.$7_3 = null;
        this.$2_3("stepAuthorize", true);
        this.$0_3("stepAuthorize", true);
        this.$P_3();
        $P_CRM("#radioSecurityPrivate").click()
    },
    $U_3: function($p0) {
        var $v_0 = $P_CRM(Mscrm.YammerConfigHandler.$b(Mscrm.YammerConfigHandler.$D)).val(),
            $v_1 = Number.parseInvariant($v_0);
        this.$L_3($v_1)
    },
    $c_3: function($p0) {
        if ($p0) {
            this.$0_3("stepSelectNetwork", true);
            this.$2_3("stepSelectGroup", true);
            this.$2_3("stepSetSecurity", true);
            $P_CRM("div.footer").show();
            this.$0_3("stepSelectGroup", true)
        } else {
            this.$0_3("stepSelectNetwork", false);
            this.$2_3("stepSelectGroup", false);
            this.$2_3("stepSetSecurity", false);
            $P_CRM("div.footer").hide();
            this.$0_3("stepSelectGroup", false)
        }
    },
    $V_3: function($p0) {
        var $v_0 = $P_CRM(Mscrm.YammerConfigHandler.$O(Mscrm.YammerConfigHandler.$E)).val();
        this.$a_3(Number.parseInvariant($v_0))
    },
    $P_3: function() {
        var $v_0 = Mscrm.YammerWebServiceClient.createCommand("GetAdminNetworks", null), $$t_7 = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            if (!IsNull($p1_0) && $p1_0.Success) {
                var $v_1 = new Mscrm.Yammer.GetAdminNetworksResult($p1_0.Xml), $v_2 = $v_1.$5_0;
                if (IsNull($v_2) || !$v_2.length) {
                    alert(LOCID_YAMMER_NONETWORK);
                    return
                }
                var $v_3 = $P_CRM(Mscrm.YammerConfigHandler.$C("stepAuthorize") + " .networkName");
                $v_3.text($v_2[0].$A_0);
                $v_3.attr("data-networkId", $v_2[0].$1_0);
                var $v_4 = Number.parseInvariant($v_2[0].$1_0);
                $$t_7.$L_3($v_4)
            } else {
                alert(LOCID_YAMMER_NONETWORK);
                return
            }
        })
    },
    $L_3: function($p0) {
        var $v_0 = {};
        $v_0["networkId"] = $p0;
        var $v_1 = Mscrm.YammerWebServiceClient.createCommand("SaveSelectedNetwork", $v_0);
        $v_1.SetParameter("networkId", $p0);
        var $$t_4 = this;
        $v_1.Execute(function() {
            var $v_2 = $v_1.Reference["networkId"];
            $$t_4.$c_3($v_2)
        })
    },
    $Z_3: function($p0) {
        this.$0_3("stepSelectGroup", false);
        var $v_0 = Mscrm.YammerWebServiceClient.createCommand("SaveSelectedGroup", null);
        $v_0.SetParameter("groupId", $p0);
        var $$t_5 = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            if (IsNull($p1_0) || !$p1_0.Success) {
                var $v_1 = IsNull($p1_0) ? null : $p1_0.Xml;
                Mscrm.YammerWebServiceClient.defaultErrorHandler("SaveSelectedGroup", $v_1)
            }
        });
        this.$0_3("stepSelectGroup", true)
    },
    $a_3: function($p0) {
        var $v_0 = Mscrm.YammerWebServiceClient.createCommand("SaveYammerPostMethod", null);
        $v_0.SetParameter("yammerPostMethod", $p0);
        var $$t_5 = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            if (IsNull($p1_0) || !$p1_0.Success) {
                var $v_1 = IsNull($p1_0) ? null : $p1_0.Xml;
                Mscrm.YammerWebServiceClient.defaultErrorHandler("SaveYammerPostMethod", $v_1)
            }
        })
    },
    $0_3: function($p0, $p1) {
        var $v_0 = $P_CRM("#" + $p0 + " img.check");
        if ($p1) $v_0.show();
        else $v_0.hide()
    },
    $2_3: function($p0, $p1) {
        var $v_0 = $P_CRM("#" + $p0 + " .overlay");
        $v_0.toggle(!$p1)
    }
};
Mscrm.YammerLogOnDialog = function() {};
Mscrm.YammerLogOnDialog.checkCredentials = function() {
    var $v_0 = $P_CRM("#YammerEmail").val(),
        $v_1 = $P_CRM("#YammerPassword").val(),
        $v_2 = userVerification,
        $v_3 = Mscrm.YammerWebServiceClient.createCommand($v_2
            ? "VerifyYammerUserCredentials"
            : "VerifyYammerAdminCredentials",
            null);
    $v_3.ErrorHandler = null;
    $v_3.SetParameter("email", $v_0);
    $v_3.SetParameter("password", $v_1);
    $P_CRM("#loadingContainer").show();
    Mscrm.YammerLogOnDialog.toggleInput(false);
    var $v_4 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, Object);
    $v_3.Execute(function($p1_0, $p1_1) {
        Mscrm.YammerLogOnDialog.toggleInput(true);
        $P_CRM("#loadingContainer").hide();
        if (!$p1_0.Success) {
            Mscrm.YammerLogOnDialog.$e($p1_0.RawResponse);
            $v_4.resolve(false)
        }
        if (!$p1_0.ReturnValue) {
            Mscrm.YammerLogOnDialog.showError(LOCID_YAMMER_INVALID_CREDS, false);
            $v_4.resolve(false)
        }
        $v_4.resolve(true)
    });
    return $v_4.promise()
};
Mscrm.YammerLogOnDialog.toggleInput = function(enable) {
    var $v_0 = $P_CRM("#YammerEmail, #YammerPassword, #butBegin");
    if (enable) $v_0.removeAttr("disabled");
    else $v_0.attr("disabled", "disabled")
};
Mscrm.YammerLogOnDialog.create = function(user) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_VerifyYammerAccount.aspx");
    if (user) $v_0.get_query()["user"] = "1";
    var $v_1 = new Mscrm.CrmDialog($v_0, null, 630, 222, null);
    return $v_1
};
Mscrm.YammerLogOnDialog.showError = function(message, showWarning) {
    $P_CRM("#errorIconImage").attr("src",
        showWarning
        ? window.CDNURL + "/_imgs/error/notif_icn_warn16.png"
        : window.CDNURL + "/_imgs/error/notif_icn_crit16.png");
    $P_CRM("#errorsBlock").show();
    $P_CRM("#Notification0_text").text(message).attr("title", message);
    var $v_0 = $P_CRM("#errorsBlock").outerHeight();
    window.parent.parent.$P_CRM("#InlineDialog").height(222 + $v_0);
    window.parent.parent.$P_CRM("#InlineDialog_Iframe").height(222 + $v_0)
};
Mscrm.YammerLogOnDialog.$e = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode($p0.documentElement, "//error/description", null),
        $v_1 = XUI.Xml.SelectSingleNode($p0.documentElement, "//error/code", null),
        $v_2 = IsNull($v_1) ? "" : XUI.Xml.GetText($v_1),
        $v_3 = $v_2 === "0x8004B016" ? true : false,
        $v_4 = IsNull($v_0) ? $p0 + "" : XUI.Xml.GetText($v_0);
    Mscrm.YammerLogOnDialog.showError($v_4, $v_3)
};
Mscrm.YammerOAuthDialogHandler = function($p0) {
    this.$$d_$S_0 = Function.createDelegate(this, this.$S_0);
    this.$$d_$K_0 = Function.createDelegate(this, this.$K_0);
    if (IsNull($p0)) throw Error.argumentNull("child");
    this.$6_0 = $p0
};
Mscrm.YammerOAuthDialogHandler.startOAuth = function(user) {
    var $v_0 = Mscrm.CrmUri.create("/tools/yammer/yammeroauthhandler.aspx", null);
    $v_0.get_query()["CRMWRPCToken"] = YAM_OAUTH_WRPC;
    $v_0.get_query()["CRMWRPCTokenTimeStamp"] = YAM_OAUTH_WRPC_TIME;
    if (user) $v_0.get_query()["user"] = 1;
    var $v_1 = safeWindowOpen($v_0, "", "height=600,width=800");
    return new Mscrm.YammerOAuthDialogHandler($v_1)
};
Mscrm.YammerOAuthDialogHandler.prototype = {
    waitForCompletion: function() {
        if (!this.$B_0) throw Error.invalidOperation();
        this.$B_0 = false;
        this.$3_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, String);
        this.$K_0();
        this.$d_0();
        return this.$3_0.promise()
    },
    get_child: function() { return this.$6_0 },
    $6_0: null,
    $F_0: 0,
    $8_0: 1e3,
    $B_0: true,
    $3_0: null,
    $K_0: function() {
        try {
            var $v_0 = Mscrm.YammerWebServiceClient.createCommand("GetOAuthStatus", null), $$t_6 = this;
            $v_0.Execute(function($p1_0, $p1_1) {
                if (!IsNull($p1_0) && $p1_0.Success) {
                    var $v_1 = $p1_0.Xml;
                    if (!IsNull($v_1) && $v_1.nodeName === "GetOAuthStatusResult") {
                        var $v_2 = XUI.Xml.GetText($v_1);
                        $$t_6.$M_0(!$v_2.trim().length, $v_2);
                        return
                    }
                    $$t_6.$8_0 = 1e3
                } else $$t_6.$8_0 += 500;
                !$$t_6.$B_0 && window.setTimeout($$t_6.$$d_$K_0, $$t_6.$8_0)
            })
        } catch ($v_3) {
            this.$8_0 += 500;
            window.setTimeout(this.$$d_$K_0, this.$8_0);
            Mscrm.YammerWebServiceClient
                .defaultErrorHandler(String.format("{0}:{1}", "GetOAuthStatus", $v_3.message), null)
        }
    },
    $M_0: function($p0, $p1) {
        this.$B_0 = true;
        if (IsNull(this.$3_0)) return;
        if ($p0) this.$3_0.resolve(true);
        else this.$3_0.reject($p1);
        this.$3_0 = null
    },
    $d_0: function() {
        this.$F_0 && window.clearTimeout(this.$F_0);
        this.$F_0 = window.setTimeout(this.$$d_$S_0, 6e5)
    },
    $S_0: function() {
        this.$M_0(false, null);
        if (!this.$6_0.closed)
            this.$6_0.location.href = Mscrm.CrmUri.create("/tools/yammer/yammeroauthhandler.aspx?timedout=true",
                window.location.href).toString()
    }
};
Mscrm.YammerWebServiceClient = function() {};
Mscrm.YammerWebServiceClient.createCommand = function($p0, $p1) {
    var $v_0 = new RemoteCommand("YammerConfigWebService", $p0);
    $v_0.ErrorHandler = Mscrm.YammerWebServiceClient.defaultErrorHandler;
    if (IsNull($p1)) $p1 = {};
    if (!("command" in $p1)) $p1["command"] = $p0;
    $v_0.Reference = $p1;
    return $v_0
};
Mscrm.YammerWebServiceClient.defaultErrorHandler = function($p0, $p1) {
    var $v_0 = IsNull($p0) ? "" : $p0, $v_1 = IsNull($p1) ? "" : XUI.Xml.GetText($p1);
    catchError(String.format("{0}:{1}", $v_0, $v_1), window.location.href, 0, true)
};
Type.registerNamespace("Mscrm.Yammer");
Mscrm.Yammer.ConfigOptions = function() {};
Mscrm.Yammer.EmailAddress = function() {};
Mscrm.Yammer.Contact = function() {};
Mscrm.Yammer.User = function() {};
Mscrm.Yammer.ObjectProperties = function() {};
Mscrm.Yammer.Config = function() {};
Mscrm.Yammer.FeedOptions = function() {};
Mscrm.Yammer.Network = function() {};
Mscrm.Yammer.Network.prototype = {
    $4_0: null,
    $A_0: null,
    $1_0: null,
    get_name: function() { return this.$4_0 },
    set_name: function(value) {
        this.$4_0 = value;
        return value
    },
    get_permalink: function() { return this.$A_0 },
    set_permalink: function(value) {
        this.$A_0 = value;
        return value
    },
    get_id: function() { return this.$1_0 },
    set_id: function(value) {
        this.$1_0 = value;
        return value
    }
};
Mscrm.Yammer.Group = function() {};
Mscrm.Yammer.Group.prototype = {
    $4_0: null,
    $1_0: null,
    get_name: function() { return this.$4_0 },
    set_name: function(value) {
        this.$4_0 = value;
        return value
    },
    get_id: function() { return this.$1_0 },
    set_id: function(value) {
        this.$1_0 = value;
        return value
    }
};
Mscrm.Yammer.GetAdminNetworksResult = function(node) {
    if (IsNull(node)) {
        this.$5_0 = new Array(0);
        return
    }
    var $v_0 = {};
    $v_0["a"] = "http://schemas.microsoft.com/crm/2009/WebServices";
    var $v_1 = XUI.Xml.SelectNodes(node, "//a:Network", $v_0);
    if (!$v_1.length) {
        this.$5_0 = new Array(0);
        return
    }
    this.$5_0 = new Array($v_1.length);
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = new Mscrm.Yammer.Network;
        $v_3.$1_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_2], "a:Id", $v_0));
        $v_3.$A_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_2], "a:Permalink", $v_0));
        this.$5_0[$v_2] = $v_3
    }
};
Mscrm.Yammer.GetAdminNetworksResult.prototype = { $5_0: null, get_networks: function() { return this.$5_0 } };
Mscrm.Yammer.SaveSelectedNetworkAndGetGroupsResult = function(node) {
    var $v_0 = {};
    $v_0["a"] = "http://schemas.microsoft.com/crm/2009/WebServices";
    var $v_1 = XUI.Xml.SelectNodes(node, "//a:Group", $v_0);
    if (!$v_1.length) {
        this.$9_0 = new Array(0);
        return
    }
    this.$9_0 = new Array($v_1.length);
    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = new Mscrm.Yammer.Group;
        $v_3.$1_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_2], "a:Id", $v_0));
        $v_3.$4_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_2], "a:Name", $v_0));
        this.$9_0[$v_2] = $v_3
    }
};
Mscrm.Yammer.SaveSelectedNetworkAndGetGroupsResult
    .prototype = { $9_0: null, get_groups: function() { return this.$9_0 } };
Mscrm.YammerConfigHandler.registerClass("Mscrm.YammerConfigHandler", Mscrm.CrmUIControl);
Mscrm.YammerLogOnDialog.registerClass("Mscrm.YammerLogOnDialog");
Mscrm.YammerOAuthDialogHandler.registerClass("Mscrm.YammerOAuthDialogHandler");
Mscrm.YammerWebServiceClient.registerClass("Mscrm.YammerWebServiceClient");
Mscrm.Yammer.ConfigOptions.registerClass("Mscrm.Yammer.ConfigOptions");
Mscrm.Yammer.EmailAddress.registerClass("Mscrm.Yammer.EmailAddress");
Mscrm.Yammer.Contact.registerClass("Mscrm.Yammer.Contact");
Mscrm.Yammer.User.registerClass("Mscrm.Yammer.User");
Mscrm.Yammer.ObjectProperties.registerClass("Mscrm.Yammer.ObjectProperties");
Mscrm.Yammer.Config.registerClass("Mscrm.Yammer.Config");
Mscrm.Yammer.FeedOptions.registerClass("Mscrm.Yammer.FeedOptions");
Mscrm.Yammer.Network.registerClass("Mscrm.Yammer.Network");
Mscrm.Yammer.Group.registerClass("Mscrm.Yammer.Group");
Mscrm.Yammer.GetAdminNetworksResult.registerClass("Mscrm.Yammer.GetAdminNetworksResult");
Mscrm.Yammer.SaveSelectedNetworkAndGetGroupsResult.registerClass("Mscrm.Yammer.SaveSelectedNetworkAndGetGroupsResult");
Mscrm.YammerConfigHandler.$D = Mscrm.YammerConfigHandler.$C("stepSelectNetwork") + " .networkSelect";
Mscrm.YammerConfigHandler.$G = Mscrm.YammerConfigHandler.$C("stepSelectGroup") + " .groupSelect";
Mscrm.YammerConfigHandler.$E = Mscrm.YammerConfigHandler.$C("stepSetSecurity") + " input.securitySelect";
Mscrm.YammerConfigHandler.$H = null;
Mscrm.YammerConfigHandler.$I = window.LOCID_YAMMER_ALLCOMPANY