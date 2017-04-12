Type.registerNamespace("Mscrm");
Mscrm.MessageBarTheme = function() {};
Mscrm.MessageBarTheme.prototype = { regular: 0, green: 1 };
Mscrm.MessageBarTheme.registerEnum("Mscrm.MessageBarTheme", false);
Mscrm.MessageType = function() {};
Mscrm.MessageType.prototype = {
    activateNow: 0,
    downloadCrmOutlookClient: 1,
    scheduleUpgrade: 2,
    notifications: 3,
    usersWithoutRoleAlert: 4,
    activateMobileSubscription: 5,
    systemAlerts: 6,
    storageLimitWarning: 7,
    storageLimitChanged: 8,
    freeTestInstanceAvailable: 9,
    previewEnding: 10,
    popOutRecord: 11,
    useOffice365Credentials: 12,
    transitionPrepare: 13,
    transitionSoon: 14,
    transitionComplete: 15,
    enableS2SAlert: 16,
    previewTerms: 17,
    unsupportedChromeVersion: 18,
    unsupportedIEVersion: 19,
    s2SCertificateExpiryNotification: 20,
    serviceDeskAlert: 21,
    insight: 22,
    storageQuota: 23,
    getAppsForCrm: 24,
    documentRecommendations: 25
};
Mscrm.MessageType.registerEnum("Mscrm.MessageType", false);
Mscrm.SeverityLevel = function() {};
Mscrm.SeverityLevel.prototype = { information: 0, warning: 1, error: 2 };
Mscrm.SeverityLevel.registerEnum("Mscrm.SeverityLevel", false);
Mscrm.ClientType = function() {};
Mscrm.ClientType.prototype = { webClient: 0, outlookOnline: 1, outlookOffline: 2 };
Mscrm.ClientType.registerEnum("Mscrm.ClientType", false);
Mscrm.DeploymentModel = function() {};
Mscrm.DeploymentModel.prototype = { live: 0, onPremise: 1 };
Mscrm.DeploymentModel.registerEnum("Mscrm.DeploymentModel", false);
Mscrm.ButtonAction = function() {};
Mscrm.ButtonAction.prototype = {
    activateNowBillingAdmin: 0,
    activateNowNonBillingAdmin: 1,
    downloadCrmOutlookClient: 2,
    scheduleUpgrade: 3,
    notifications: 4,
    usersWithoutRoleAlert: 5,
    activateMobileSubscription: 6,
    systemAlerts: 7,
    storageLimitWarning: 8,
    storageLimitChanged: 9,
    freeTestInstanceAvailable: 10,
    previewEnding: 11,
    popOutRecord: 12,
    useOffice365Credentials: 13,
    transitionPrepare: 14,
    transitionSoon: 15,
    transitionComplete: 16,
    enableS2SAlert: 17,
    previewTerms: 18,
    unsupportedChromeVersion: 19,
    unsupportedIEVersion: 20,
    s2SCertificateExpiryNotification: 21,
    openServiceDesk: 22,
    insight: 23,
    popupUrl: 24,
    getAppsForCrm: 25,
    documentRecommendations: 26
};
Mscrm.ButtonAction.registerEnum("Mscrm.ButtonAction", false);
Mscrm.AppMessageBar = function(element) {
    this.$$d_$i_3 = Function.createDelegate(this, this.$i_3);
    this.$$d_$j_3 = Function.createDelegate(this, this.$j_3);
    this.$$d_$p_3 = Function.createDelegate(this, this.$p_3);
    this.$$d_$o_3 = Function.createDelegate(this, this.$o_3);
    this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$$d_$a_3 = Function.createDelegate(this, this.$a_3);
    this.$$d_$q_3 = Function.createDelegate(this, this.$q_3);
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    this.$$d_$X_3 = Function.createDelegate(this, this.$X_3);
    this.$$d_$V_3 = Function.createDelegate(this, this.$V_3);
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$J_3 = Date.parseInvariant("01/01/0001");
    this.$7_3 = -1;
    Mscrm.AppMessageBar.initializeBase(this, [element])
};
Mscrm.AppMessageBar.prototype = {
    $L_3: null,
    $5_3: null,
    $B_3: null,
    $A_3: null,
    $2_3: null,
    $6_3: null,
    $D_3: null,
    $4_3: null,
    $K_3: null,
    $N_3: null,
    $1_3: 0,
    $0_3: null,
    $8_3: false,
    $M_3: false,
    $H_3: false,
    $O_3: false,
    $C_3: 0,
    $S_3: "",
    $I_3: 32,
    get_actualHeight: function() { return this.$I_3 },
    set_actualHeight: function(value) {
        this.$I_3 = value;
        return value
    },
    $9_3: false,
    get_isVisible: function() { return this.$9_3 },
    set_isVisible: function(value) {
        this.$9_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$L_3 = $get("messageBarIcon");
        this.$5_3 = $get("crmAppMessageBar");
        this.$5_3.style.display = "none";
        this.$B_3 = $get("crmAppMessageBarTitle");
        this.$A_3 = $get("crmAppMessageBarHyperlink");
        this.$2_3 = $get("crmAppMessageBarButton");
        this.$6_3 = $get("crmAppMessageBarButtonText");
        this.$D_3 = $get("crmAppMessageBarCloseButton");
        this.$4_3 = $get("crmAppMessageBarCloseButtonImage");
        this.$K_3 = $get("messageBarLeftBorder");
        this.$N_3 = $get("messageBarRightBorder");
        this.$Y_3()
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        var $v_0 = null;
        switch (eventCode) {
        case 14:
            this.$k_3(parameters);
            break;
        case 9:
            if (!this.$O_3) {
                $v_0 = window.top.notificationContext;
                if (!$v_0 || $v_0 === "") $v_0 = "Global";
                if (this.isContextDifferent($v_0)) {
                    var $$t_4 = this;
                    window.setTimeout(function() { $$t_4.$h_3($v_0) }, 2e3)
                }
            }
            break;
        case 68:
            this.$O_3 = true;
            break;
        case 99:
            if (parameters["add"]) this.addMessage(parameters["message"]);
            else this.removeMessage(parameters["messageId"]);
            this.showMessage();
            break
        }
        return null
    },
    isContextDifferent: function(newcontextType) {
        if (this.$S_3 !== newcontextType) {
            this.$S_3 = newcontextType;
            return true
        } else return false
    },
    addMessage: function(newMessage) {
        if (!IsNull(newMessage)) {
            if (!IsNull(this.$0_3)) Array.insert(this.$0_3, 0, newMessage);
            else this.$0_3 = [newMessage];
            this.$7_3--
        }
    },
    removeMessage: function(messageId) {
        if (!IsNull(this.$0_3) && !IsNull(messageId) && this.$0_3[0].Id === messageId) {
            Array.removeAt(this.$0_3, 0);
            if (this.$0_3.length > 0) {
                this.$7_3--;
                if (this.$1_3 > 0) this.$1_3--
            }
        }
    },
    $Y_3: function() {
        $addHandler(this.$2_3, "click", this.$$d_$n_3);
        $addHandler(this.$2_3, "mousedown", this.$$d_$V_3);
        $addHandler(this.$2_3, "mouseup", this.$$d_$X_3);
        $addHandler(this.$2_3, "mouseover", this.$$d_$W_3);
        $addHandler(this.$2_3, "mouseout", this.$$d_$X_3);
        $addHandler(this.$D_3, "click", this.$$d_$q_3);
        $addHandler(this.$4_3, "mousedown", this.$$d_$a_3);
        $addHandler(this.$4_3, "mouseup", this.$$d_$c_3);
        $addHandler(this.$4_3, "mouseover", this.$$d_$b_3);
        $addHandler(this.$4_3, "mouseout", this.$$d_$c_3)
    },
    showMessage: function() {
        if (Mscrm.Utilities.isIosDevice() || typeof this.$0_3 === "undefined" || !this.$0_3) {
            this.$U_3();
            return
        }
        var $v_0 = (new Date).toString();
        if (Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType
                .toString()) !==
            19) $v_0 = this.$0_3[this.$1_3].OverrideCancellationTime;
        var $v_1 = Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString());
        if (!$v_1) this.$C_3 = 1;
        if (!Mscrm.AppMessageBarUtility.$Z(this.$0_3[this.$1_3].Id, $v_0)) {
            this.$e_3();
            this.$d_3()
        } else {
            this.$8_3 = false;
            var $v_2 = Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString()) !==
                23;
            this.$G_3($v_2)
        }
    },
    $d_3: function() {
        this.$2_3.style.display = "";
        var $v_0 = Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString());
        if ($v_0 === 1)
            if (this.$m_3() || this.$M_3 || this.$l_3()) this.$G_3(false);
            else {
                var $v_7 = this.$0_3[this.$1_3].Data.anyType;
                this.$2_3.setAttribute("href", $v_7);
                this.$2_3.setAttribute("target", "_self")
            }
        else if ($v_0 === 24)
            if (this.$H_3) {
                this.$8_3 = false;
                this.$G_3(false)
            } else this.$2_3.setAttribute("target", "_self");
        else if ($v_0 === 13 || $v_0 === 14 || $v_0 === 15 || $v_0 === 12) {
            var $v_8 = this.$0_3[this.$1_3].Data.anyType;
            if ($v_8 === "transitionwizard") {
                this.$2_3.setAttribute("href", "#");
                this.$2_3.setAttribute("target", "_self")
            } else {
                this.$2_3.setAttribute("href", $v_8);
                this.$2_3.setAttribute("target", "_blank")
            }
        } else if ($v_0 === 19) {
            var $v_9 = this.$0_3[this.$1_3].Data.anyType;
            this.$2_3.setAttribute("href", $v_9);
            this.$2_3.setAttribute("target", "_blank")
        } else if ($v_0 === 20) this.$2_3.style.display = "none";
        else if ($v_0 === 22) {
            var $v_A = this.$0_3[this.$1_3].Data.anyType;
            this.$2_3.setAttribute("href", $v_A);
            this.$2_3.setAttribute("target", "_blank")
        } else if ($v_0 === 23) {
            var $v_B = this.$0_3[this.$1_3].Data.anyType[1];
            if (Object.getType($v_B) === String) {
                this.$2_3.setAttribute("href", $v_B);
                this.$2_3.setAttribute("target", "_blank")
            } else this.$2_3.style.display = "none"
        } else if ($v_0 === 25) this.$2_3.children[0].innerText = this.$0_3[this.$1_3].ActionButtonText;
        else {
            this.$2_3.setAttribute("href", "#");
            this.$2_3.setAttribute("target", "_self")
        }
        var $v_1 = this.$0_3[this.$1_3].Title;
        if ($v_1 && Object.getType($v_1) === String) XUI.Html.SetText(this.$B_3, $v_1.toString());
        else XUI.Html.SetText(this.$B_3, "");
        var $v_2 = this.$0_3[this.$1_3].MessageText;
        if (!IsNull($v_2) && Object.getType($v_2) === String) XUI.Html.SetText(this.$A_3, $v_2.toString());
        else XUI.Html.SetText(this.$A_3, "");
        XUI.Html.SetText(this.$6_3, this.$0_3[this.$1_3].ActionButtonText);
        this.$D_3.title = this.$0_3[this.$1_3].CloseButtonTooltip;
        var $v_3 = this.$L_3,
            $v_4 = this.$0_3[this.$1_3].SeverityLevel.toString(),
            $v_5 = Mscrm.EnumConverterMessageBar.severityLevelToEnum($v_4);
        $v_3.className = Mscrm.AppMessageBarUtility.getIconImageStrip($v_5);
        var $v_6;
        switch ($v_5) {
        case 2:
            $v_6 = "error";
            break;
        case 1:
            $v_6 = "warning";
            break;
        default:
            $v_6 = "info";
            break
        }
        $v_3.src = String.format("/_imgs/messagebar/msgbar_icn_{0}.png", $v_6);
        if (this.$C_3 === 1) {
            $v_3.src = "/_imgs/messagebar/msgbar_icn_info_green.png";
            this.$B_3.className = "ms-crm-msgbar_title_text";
            this.$6_3.className = this.$F_3("ms-crm-msgbar_button_cold");
            this.$4_3.className = "ms-crm-msgbar_close_button_green";
            this.$5_3.className = "crmAppMessageBar_green";
            this.$A_3.className = "crmAppMessageBarMessage_green";
            this.$K_3.style.display = "none";
            this.$N_3.style.display = "none"
        }
    },
    $m_3: function() {
        if (typeof MS_CRM_CLIENT_OUTLOOK_INSTALLED !== "undefined") return MS_CRM_CLIENT_OUTLOOK_INSTALLED;
        else return false
    },
    $l_3: function() { return !(window.navigator.platform == "Win32" || window.navigator.platform == "Windows") },
    $n_3: function($p0) {
        switch (Mscrm.EnumConverterMessageBar.buttonActionToEnum(this.$0_3[this.$1_3].ButtonAction.toString())) {
        case 0:
            var $$t_1 = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.ActivateNowBillingAdmin($$t_1.$0_3[$$t_1.$1_3].Data.anyType)
                },
                1);
            var $$t_2 = this;
            window.setTimeout(function() { $$t_2.$3_3(false) }, 3e3);
            break;
        case 1:
            var $$t_3 = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.ActivateNowNonBillingAdmin($$t_3.$0_3[$$t_3.$1_3].Data.anyType)
                },
                1);
            var $$t_4 = this;
            window.setTimeout(function() { $$t_4.$3_3(true) }, 3e3);
            break;
        case 18:
            var $$t_5 = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.PreviewTerms($$t_5.$0_3[$$t_5.$1_3].Data.anyType)
                },
                1);
            break;
        case 2:
            var $$t_6 = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.DownloadOutlookClient($$t_6.$0_3[$$t_6.$1_3].Data.anyType)
                },
                1);
            this.$M_3 = true;
            var $$t_7 = this;
            window.setTimeout(function() { $$t_7.$3_3(false) }, 3e3);
            break;
        case 25:
            var $$t_8 = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.GetCrmApps() }, 1);
            this.$H_3 = true;
            var $$t_9 = this;
            window.setTimeout(function() { $$t_9.$3_3(false) }, 3e3);
            break;
        case 3:
            var $$t_A = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.scheduleUpgrade() }, 1);
            break;
        case 5:
            var $$t_B = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.usersWithoutRoleAlert() }, 1);
            break;
        case 7:
            var $$t_C = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.showSystemAlerts() }, 1);
            var $$t_D = this;
            window.setTimeout(function() { $$t_D.$3_3(false) }, 3e3);
            break;
        case 8:
            var $$t_E = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.DisplayStorageInformation($$t_E.$0_3[$$t_E.$1_3].Data.anyType)
                },
                1);
            var $$t_F = this;
            window.setTimeout(function() { $$t_F.$3_3(true) }, 3e3);
            break;
        case 9:
            var $$t_G = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.DisplayStorageInformation($$t_G.$0_3[$$t_G.$1_3].Data.anyType)
                },
                1);
            var $$t_H = this;
            window.setTimeout(function() { $$t_H.$3_3(true) }, 3e3);
            break;
        case 10:
            var $$t_I = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.FreeTestInstanceAvailable($$t_I.$0_3[$$t_I.$1_3].Data.anyType)
                },
                1);
            var $$t_J = this;
            window.setTimeout(function() { $$t_J.$3_3(true) }, 3e3);
            break;
        case 11:
            var $$t_K = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.PreviewEnding($$t_K.$0_3[$$t_K.$1_3].Data.anyType)
                },
                1);
            var $$t_L = this;
            window.setTimeout(function() { $$t_L.$3_3(false) }, 3e3);
            break;
        case 12:
            var $$t_M = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.PopOutRecord($$t_M.$0_3[$$t_M.$1_3].Data) }, 1);
            var $$t_N = this;
            window.setTimeout(function() { $$t_N.$3_3(false) }, 3e3);
            break;
        case 14:
        case 15:
        case 16:
            var $$t_O = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.TransitionButton($$t_O.$0_3[$$t_O.$1_3].Data.anyType)
                },
                1);
            var $$t_P = this;
            window.setTimeout(function() { $$t_P.$3_3(true) }, 3e3);
            break;
        case 13:
            var $$t_Q = this;
            window.setTimeout(function() { $$t_Q.$3_3(false) }, 3e3);
            break;
        case 17:
            var $$t_R = this;
            window.setTimeout(function() { Mscrm.AppMessageBarActions.enableS2SAlert() }, 1);
            var $$t_S = this;
            window.setTimeout(function() { $$t_S.$3_3(false) }, 3e3);
            break;
        case 20:
            var $$t_T = this;
            window.setTimeout(function() { $$t_T.$3_3(false) }, 3e3);
            break;
        case 23:
            var $$t_U = this;
            window.setTimeout(function() { $$t_U.$3_3(false) }, 3e3);
            break;
        case 24:
            var $$t_V = this;
            window.setTimeout(function() { $$t_V.$3_3(true) }, 3e3);
            break;
        case 21:
            var $$t_W = this;
            window.setTimeout(function() {
                    Mscrm.AppMessageBarActions.s2SCertificateExpiryNotification($$t_W.$0_3[$$t_W.$1_3].Data.anyType)
                },
                1);
            var $$t_X = this;
            window.setTimeout(function() { $$t_X.$3_3(false) }, 3e3);
            break;
        case 22:
            Mscrm.AppMessageBarActions.OpenServiceDesk(this.$0_3[this.$1_3].Data.anyType);
            var $$t_Y = this;
            window.setTimeout(function() { $$t_Y.$3_3(false) }, 3e3);
            break;
        case 26:
            Mscrm.AppMessageBarActions.OpenDocumentRecommendationsDialog();
            var $$t_Z = this;
            window.setTimeout(function() { $$t_Z.$3_3(false) }, 3e3);
            break;
        default:
            break
        }
    },
    $G_3: function($p0) {
        if (this.$7_3 === this.$1_3) return;
        this.$7_3 = this.$1_3;
        if ($p0)
            if (Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString()) === 23) {
                var $v_0 = this.$0_3[this.$1_3].Data.anyType[0];
                Mscrm.AppMessageBarUtility.$T(this.$0_3[this.$1_3].Id, $v_0)
            } else
                Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString()) !== 19 &&
                    Mscrm.AppMessageBarUtility.$T(this.$0_3[this.$1_3].Id,
                        this.$0_3[this.$1_3].OverrideCancellationTime);
        if (this.$1_3 !== this.$0_3.length - 1) {
            XUI.Html.SetOpacity(this.$5_3, 1);
            if (!this.$8_3) {
                this.$1_3++;
                this.showMessage()
            } else this.$g_3()
        } else this.$U_3()
    },
    $e_3: function() {
        this.$9_3 = true;
        this.raiseEvent(20, null);
        this.$5_3.style.display = ""
    },
    $U_3: function() {
        this.$9_3 = false;
        this.raiseEvent(20, null);
        this.$5_3.style.display = "none"
    },
    $a_3: function($p0) {
        var $v_0 = this.$4_3;
        $v_0.className = this.$P_3("ms-crm-ImageStrip-msgbar_close_button_click")
    },
    $c_3: function($p0) {
        var $v_0 = this.$4_3;
        $v_0.className = this.$P_3("ms-crm-ImageStrip-msgbar_close_button_cold")
    },
    $b_3: function($p0) {
        var $v_0 = this.$4_3;
        $v_0.className = this.$P_3("ms-crm-ImageStrip-msgbar_close_button_hover")
    },
    $V_3: function($p0) { this.$6_3.className = this.$F_3("ms-crm-msgbar_button_click") },
    $X_3: function($p0) { this.$6_3.className = this.$F_3("ms-crm-msgbar_button_cold") },
    $W_3: function($p0) { this.$6_3.className = this.$F_3("ms-crm-msgbar_button_hover") },
    $F_3: function($p0) {
        if (this.$C_3 === 1) return $p0 + "_green";
        return $p0
    },
    $P_3: function($p0) {
        if (this.$C_3 === 1) return "ms-crm-msgbar_close_button_green";
        return $p0
    },
    $q_3: function($p0) {
        if (Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString()) === 19) {
            var $v_0 = new Date, $v_1 = new Date($v_0.getFullYear(), $v_0.getMonth() + 1, $v_0.getDate());
            Mscrm.AppMessageBarUtility.$T(this.$0_3[this.$1_3].Id, $v_1.toString())
        }
        Mscrm.EnumConverterMessageBar.messageTypeToEnum(this.$0_3[this.$1_3].MessageType.toString()) === 24 &&
            this.$r_3(true);
        this.$3_3(true)
    },
    $3_3: function($p0) {
        this.$8_3 = true;
        this.$G_3($p0)
    },
    $g_3: function() {
        XUI.Html.SetOpacity(this.$5_3, 0);
        window.setTimeout(this.$$d_$o_3, 1e3)
    },
    $o_3: function() {
        this.$1_3++;
        this.showMessage();
        this.$f_3()
    },
    $f_3: function() { XUI.Html.SetOpacity(this.$5_3, 1) },
    $k_3: function($p0) {
        $p0 = $p0[this.get_id()];
        if (typeof $p0["height"] !== "undefined") {
            var $v_0 = $p0["height"];
            this.set_height($v_0)
        }
    },
    $h_3: function($p0) {
        if (Mscrm.DateTimeUtility.localDateTimeNow() - this.$J_3 <= 3e5) return;
        else this.$J_3 = Mscrm.DateTimeUtility.localDateTimeNow();
        var $v_0 = new RemoteCommand("MessageBar", "GetAllMessages");
        $v_0.ErrorHandler = this.$$d_$p_3;
        $v_0.SetParameter("clientType", 0);
        $v_0.SetParameter("contextType", $p0);
        var $v_1 = this.$$d_$j_3, $v_2 = $v_0.Execute($v_1)
    },
    $p_3: function($p0, $p1) {},
    $j_3: function($p0, $p1) {
        this.$1_3 = 0;
        this.$7_3 = -1;
        this.$0_3 = null;
        if ($p0.Success) {
            this.$0_3 = $p0.ReturnValue.Message;
            if (typeof this.$0_3 === "undefined") this.$0_3 = null;
            else if (typeof this.$0_3
                .length ===
                "undefined" ||
                !this.$0_3.length) this.$0_3 = [$p0.ReturnValue.Message];
            this.showMessage()
        }
    },
    $r_3: function($p0) {
        var $v_0 = new RemoteCommand("MessageBar", "UpdateIsAppsForCrmAlertDismissed");
        $v_0.SetParameter("userDismissedAppsForCRMAlert", $p0);
        $v_0.ErrorHandler = this.$$d_$p_3;
        var $v_1 = this.$$d_$i_3;
        $v_0.Execute($v_1)
    },
    $i_3: function($p0, $p1) {}
};
Mscrm.AppMessageBarActions = function() {};
Mscrm.AppMessageBarActions.get_ContentFrameId = function() {
    Mscrm.AppMessageBarActions.$E = "contentIFrame0";
    var $v_0 = window.top.document.getElementById("crmContentPanel");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.attributes.getNamedItem("currentContentId");
        if (!IsNull($v_1) && $v_1.specified) Mscrm.AppMessageBarActions.$E = $v_1.value
    }
    return Mscrm.AppMessageBarActions.$E
};
Mscrm.AppMessageBarActions.ActivateNowBillingAdmin = function(data) {
    var $v_0 = data[1];
    openStdWin($v_0,
        "_blank",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9,
        "status=1,resizable=1,scrollbars=1")
};
Mscrm.AppMessageBarActions.DownloadOutlookClient = function(downloadLink) {
    var $v_0 = {};
    $v_0["downloadUrl"] = downloadLink;
    var $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_downloadoutlookclient.aspx"), $v_2 = new Xrm.DialogOptions;
    $v_2.height = 370;
    $v_2.width = 600;
    Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, null)
};
Mscrm.AppMessageBarActions.GetCrmApps = function() {
    Mscrm.AppMessageBarActions.NavigateContentFrameTo("/Tools/appsforcrm/AppsForCrm.aspx")
};
Mscrm.AppMessageBarActions.ActivateNowNonBillingAdmin = function(data) { window.location.href = data };
Mscrm.AppMessageBarActions.usersWithoutRoleAlert = function() {
    if (!isNullOrEmptyString(Mscrm.AppMessageBarActions.get_ContentFrameId())) {
        var $v_0 = $get(Mscrm.AppMessageBarActions.get_ContentFrameId());
        if (!IsNull($v_0)) {
            var $v_1 = "{61289874-49FB-43FF-AFF0-00380E820515}", $v_2 = Mscrm.CrmUri.create("/_root/homepage.aspx");
            $v_2.get_query()["etc"] = 8;
            $v_2.get_query()["pagemode"] = "iframe";
            $v_2.get_query()["sitemappath"] = "Settings|System_Setting|nav_security";
            $v_2.get_query()["viewid"] = $v_1;
            $v_2.get_query()["viewtype"] = 1039;
            $v_0.setAttribute("src", $v_2.toString())
        }
    }
};
Mscrm.AppMessageBarActions.showSystemAlerts = function() {
    try {
        window.top.goTo("Workplace", "MyWork", "nav_traces")
    } catch ($$e_0) {
        try {
            window.goTo("Workplace", "MyWork", "nav_traces")
        } catch ($$e_1) {
            var $v_0 = $get(Mscrm.AppMessageBarActions.get_ContentFrameId());
            $v_0.setAttribute("src", "/_root/tracewall.aspx")
        }
    }
};
Mscrm.AppMessageBarActions.scheduleUpgrade = function() {
    var $v_0 = $get(Mscrm.AppMessageBarActions.get_ContentFrameId()),
        $v_1 = Mscrm.CrmUri.create("/tools/Admin/addon/systemaddons.aspx");
    $v_0.setAttribute("src", $v_1.toString())
};
Mscrm.AppMessageBarActions.DisplayStorageInformation = function(data) {
    if (data.startsWith("http")) window.open(data, "_blank");
    else {
        var $v_0 = $get(Mscrm.AppMessageBarActions.get_ContentFrameId());
        $v_0.setAttribute("src", data)
    }
};
Mscrm.AppMessageBarActions.NavigateContentFrameTo = function(data) {
    var $v_0 = $get(Mscrm.AppMessageBarActions.get_ContentFrameId());
    $v_0.setAttribute("src", data)
};
Mscrm.AppMessageBarActions.TransitionButton = function(data) {
    data === "transitionwizard" &&
        Mscrm.AppMessageBarActions
        .NavigateContentFrameTo("/tools/Admin/addon/systemaddons.aspx?opentransitionwizard=true")
};
Mscrm.AppMessageBarActions.FreeTestInstanceAvailable = function(data) {
    var $v_0 = String.format("status=1,resizable=1,scrollbars=1,width={0},height={0}",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9);
    window.open(data.toString(), "_blank", $v_0)
};
Mscrm.AppMessageBarActions.PreviewEnding = function(data) {
    var $v_0 = String.format("status=1,resizable=1,scrollbars=1,width={0},height={0}",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9);
    window.open(data.toString(), "_blank", $v_0)
};
Mscrm.AppMessageBarActions.PopOutRecord = function(data) {
    var $v_0 = data[0], $v_1 = data[1], $v_2 = data[2], $v_3 = data[3];
    openObj($v_0, $v_1, $v_2.get_queryString(), null, Mscrm.NavigationMode.DefaultNavigationMode, $v_3)
};
Mscrm.AppMessageBarActions.enableS2SAlert = function() {
    openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=2164dd44-6f89-430c-9c7b-abfa44320df0"),
        null,
        650,
        620,
        "resizable=0, status=0, dialog=1")
};
Mscrm.AppMessageBarActions.PreviewTerms = function(data) {
    var $v_0 = String.format("status=1,resizable=1,scrollbars=1,width={0},height={0}",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9);
    window.open(data.toString(), "_blank", $v_0)
};
Mscrm.AppMessageBarActions.PopupUrl = function(data) {
    var $v_0 = String.format("status=1,resizable=1,scrollbars=1,width={0},height={0}",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9);
    window.open(data, "_blank", $v_0)
};
Mscrm.AppMessageBarActions.s2SCertificateExpiryNotification = function(data) {
    var $v_0 = String.format("status=1,resizable=1,scrollbars=1,width={0},height={0}",
        window.screen.availWidth * .9,
        window.screen.availHeight * .9);
    window.open(data, "_blank", $v_0)
};
Mscrm.AppMessageBarActions.OpenServiceDesk = function(data) { window.open(data, "_blank") };
Mscrm.AppMessageBarActions.OpenDocumentRecommendationsDialog = function() {
    var $v_0 = window.top.document.getElementById("crmContentPanel");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.attributes.getNamedItem("currentContentId"),
            $v_2 = $v_0.attributes.getNamedItem("currentGridId"),
            $v_3 = null,
            $v_4 = null;
        if (!IsNull($v_1) && $v_1.specified) $v_3 = window.top.document.getElementById($v_1.value);
        if (!IsNull($v_2) && $v_2.specified) $v_4 = window.top.document.getElementById($v_2.value);
        if (!IsNull($v_3) && !IsNull($v_4)) {
            var $v_5 = $v_3.contentWindow,
                $v_6 = $v_4.contentWindow,
                $v_7 = $v_5.Xrm.Page.data.entity.getId(),
                $v_8 = $v_5.Xrm.Page.data.entity.getEntityName(),
                $v_9 = window.top.$find("crmGrid", $v_6).control;
            Mscrm.CommandBarActions.showDocumentSuggestionsDialog($v_9, $v_7, $v_8, "notification")
        }
    }
};
Mscrm.AppMessageBarUtility = function() {};
Mscrm.AppMessageBarUtility.getIconImageStrip = function(severityLevel) {
    switch (severityLevel) {
    case 0:
        return "ms-crm-ImageStrip-msgbar_icn_info";
    case 1:
        return "ms-crm-ImageStrip-msgbar_icn_warning";
    case 2:
        return "ms-crm-ImageStrip-msgbar_icn_error";
    default:
        return "ms-crm-ImageStrip-msgbar_icn_info"
    }
};
Mscrm.AppMessageBarUtility.$T = function($p0, $p1) {
    var $v_0 = new Date, $v_1 = new Date($v_0.getFullYear() + 100, 1, 1);
    if (typeof $p1 === "undefined" || isNullOrEmptyString($p1)
    )
        document.cookie = CrmEncodeDecode.CrmNameValueEncode(Mscrm.AppMessageBarUtility.$Q($p0)) +
            "=" +
            Mscrm.AppMessageBarUtility.$R +
            ";expires=" +
            $v_1.toUTCString() +
            ";";
    else
        document.cookie = CrmEncodeDecode.CrmNameValueEncode(Mscrm.AppMessageBarUtility.$Q($p0)) +
            "=" +
            $p1 +
            ";expires=" +
            $v_1.toUTCString() +
            ";"
};
Mscrm.AppMessageBarUtility.$Z = function($p0, $p1) {
    var $v_0 = Mscrm.AppMessageBarUtility.$Q($p0),
        $v_1 = CrmEncodeDecode.CrmNameValueEncode($v_0),
        $v_2 = document.cookie.indexOf($v_1);
    if ($v_2 !== -1) {
        var $v_3, $v_4 = document.cookie.indexOf(";", $v_2 + $v_1.length);
        if ($v_4 === -1) $v_3 = document.cookie.substr($v_2 + $v_1.length + 1);
        else {
            var $v_5 = $v_2 + $v_1.length + 1;
            $v_3 = document.cookie.substr($v_5, $v_4 - $v_5)
        }
        if ($v_3 !== Mscrm.AppMessageBarUtility.$R)
            try {
                var $v_6 = new Date(Date.parse($p1)), $v_7 = new Date(Date.parse($v_3));
                if ($v_6 > $v_7) return false
            } catch ($$e_A) {
            }
        return true
    }
    return false
};
Mscrm.AppMessageBarUtility.$Q = function($p0) { return "CRM_MSG_BAR_" + $p0 };
Mscrm.EnumConverterMessageBar = function() {};
Mscrm.EnumConverterMessageBar.severityLevelToEnum = function(severityLevel) {
    switch (severityLevel) {
    case "Information":
        return 0;
    case "Warning":
        return 1;
    case "Error":
        return 2;
    default:
        return 0
    }
};
Mscrm.EnumConverterMessageBar.messageTypeToEnum = function(messageType) {
    switch (messageType) {
    case "ActivateNow":
        return 0;
    case "PreviewTerms":
        return 17;
    case "DownloadCrmOutlookClient":
        return 1;
    case "GetAppsForCrm":
        return 24;
    case "ScheduleUpgrade":
        return 2;
    case "UsersWithoutRoleAlert":
        return 4;
    case "SystemAlerts":
        return 6;
    case "StorageLimitWarning":
        return 7;
    case "StorageLimitChanged":
        return 8;
    case "FreeTestInstanceAvailable":
        return 9;
    case "PreviewEnding":
        return 10;
    case "PopOutRecord":
    case "11":
        return 11;
    case "UseOffice365Credentials":
        return 12;
    case "TransitionPrepare":
        return 13;
    case "TransitionSoon":
        return 14;
    case "TransitionComplete":
        return 15;
    case "EnableS2SAlert":
        return 16;
    case "UnsupportedIEVersion":
        return 19;
    case "S2SCertificateExpiryNotification":
        return 20;
    case "ServiceDeskAlert":
        return 21;
    case "Insight":
        return 22;
    case "StorageQuota":
        return 23;
    case "DocumentRecommendations":
        return 25;
    default:
        return 0
    }
};
Mscrm.EnumConverterMessageBar.buttonActionToEnum = function(buttonAction) {
    switch (buttonAction) {
    case "ActivateNowBillingAdmin":
        return 0;
    case "ActivateNowNonBillingAdmin":
        return 1;
    case "PreviewTerms":
        return 18;
    case "DownloadCrmOutlookClient":
        return 2;
    case "GetAppsForCrm":
        return 25;
    case "ScheduleUpgrade":
        return 3;
    case "UsersWithoutRoleAlert":
        return 5;
    case "SystemAlerts":
        return 7;
    case "StorageLimitWarning":
        return 8;
    case "StorageLimitChanged":
        return 9;
    case "FreeTestInstanceAvailable":
        return 10;
    case "PreviewEnding":
        return 11;
    case "PopOutRecord":
    case "12":
        return 12;
    case "UseOffice365Credentials":
        return 13;
    case "TransitionPrepare":
        return 14;
    case "TransitionSoon":
        return 15;
    case "TransitionComplete":
        return 16;
    case "EnableS2SAlert":
        return 17;
    case "UnsupportedIEVersion":
        return 20;
    case "S2SCertificateExpiryNotification":
        return 21;
    case "OpenServiceDesk":
        return 22;
    case "Insight":
        return 23;
    case "PopupUrl":
        return 24;
    case "DocumentRecommendations":
        return 26;
    default:
        return 0
    }
};
Mscrm.AppMessageBar.registerClass("Mscrm.AppMessageBar", Mscrm.CrmUIControl);
Mscrm.AppMessageBarActions.registerClass("Mscrm.AppMessageBarActions");
Mscrm.AppMessageBarUtility.registerClass("Mscrm.AppMessageBarUtility");
Mscrm.EnumConverterMessageBar.registerClass("Mscrm.EnumConverterMessageBar");
Mscrm.AppMessageBarActions.$E = null;
Mscrm.AppMessageBarUtility.$R = "HideMessage"