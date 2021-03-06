Type.registerNamespace("Mscrm.AppsForCrm");
Mscrm.AppsForCrm.ScheduleCRMAppPerUserInstallResult = function() {};
Mscrm.AppsForCrm.ScheduleCRMAppPerUserInstallResult
    .prototype = { notInstalled: 0, installed: 1, installFailed: 2, unInstallFailed: 3, alreadyAdded: 4, pending: 5 };
Mscrm.AppsForCrm.ScheduleCRMAppPerUserInstallResult
    .registerEnum("Mscrm.AppsForCrm.ScheduleCRMAppPerUserInstallResult", false);
Mscrm.AppsForCrm.ScheduleCRMAppInstallResult = function() {};
Mscrm.AppsForCrm.ScheduleCRMAppInstallResult.prototype = { failure: 0, success: 1, none: 2 };
Mscrm.AppsForCrm.ScheduleCRMAppInstallResult.registerEnum("Mscrm.AppsForCrm.ScheduleCRMAppInstallResult", false);
Mscrm.AppsForCrm.AppsForCrm = function() {
    this.$$d_$m_0 = Function.createDelegate(this, this.$m_0);
    this.$$d_$k_0 = Function.createDelegate(this, this.$k_0);
    this.$$d_$p_0 = Function.createDelegate(this, this.$p_0);
    this.$$d_$j_0 = Function.createDelegate(this, this.$j_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0)
};
Mscrm.AppsForCrm.AppsForCrm.$o = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.AppsForCrm.AppsForCrm.prototype = {
    $g_0: null,
    $H_0: null,
    $K_0: null,
    $J_0: null,
    $I_0: null,
    $9_0: null,
    $C_0: null,
    $A_0: null,
    $B_0: null,
    $S_0: null,
    $P_0: null,
    $a_0: null,
    $1_0: null,
    $X_0: null,
    $W_0: null,
    $V_0: null,
    $U_0: null,
    $2_0: null,
    $f_0: null,
    $c_0: null,
    $O_0: null,
    $D_0: null,
    $Q_0: null,
    $E_0: false,
    $F_0: false,
    $G_0: false,
    $T_0: false,
    $d_0: null,
    $e_0: null,
    Initialize: function() {
        this.$S_0 = $get("cmdOutlookClient");
        !IsNull(this.$S_0) && $addHandler(this.$S_0, "click", this.$$d_$l_0);
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        this.$g_0 = $get("mailAppSection");
        this.$H_0 = $get("mailAppErrorOrgServerSideSyncSetup");
        this.$D_0 = $get("installErrorMessage");
        if (!IsNull(this.$H_0)) this.$H_0.style.display = "none";
        this.$K_0 = $get("mailAppErrorUserServerSideSyncSetup");
        if (!IsNull(this.$K_0)) this.$K_0.style.display = "none";
        this.$J_0 = $get("mailAppErrorUserPrivilege");
        if (!IsNull(this.$J_0)) this.$J_0.style.display = "none";
        this.$I_0 = $get("mailAppErrorServerNotIFDEnabled");
        if (!IsNull(this.$I_0)) this.$I_0.style.display = "none";
        this.$9_0 = $get("mailAppErrorAlreadyAdded");
        if (!IsNull(this.$9_0)) this.$9_0.style.display = "none";
        this.$C_0 = $get("mailAppSuccessMessage");
        if (!IsNull(this.$C_0)) this.$C_0.style.display = "none";
        this.$A_0 = $get("mailAppErrorPending");
        if (!IsNull(this.$A_0)) this.$A_0.style.display = "none";
        this.$B_0 = $get("mailAppFooter");
        if (!IsNull(this.$B_0)) this.$B_0.style.display = "";
        this.$f_0 = $get("popupMessage");
        this.$c_0 = $get("closePopupMessage");
        this.$1_0 = $get("detailMessagePopup");
        if (!IsNull(this.$1_0)) this.$1_0.style.display = "none";
        this.$P_0 = $get("cmdMailApp");
        !IsNull(this.$P_0) && $addHandler(this.$P_0, "click", this.$$d_$j_0);
        this.$X_0 = $get("readdLink");
        !IsNull(this.$X_0) && $addHandler(this.$X_0, "click", this.$$d_$j_0);
        this.$a_0 = $get("tryAgainLink");
        !IsNull(this.$a_0) && $addHandler(this.$a_0, "click", this.$$d_$j_0);
        this.$W_0 = $get("learnMoreUserPrivLink");
        !IsNull(this.$W_0) && $addHandler(this.$W_0, "click", this.$$d_$p_0);
        this.$V_0 = $get("learnMoreSSSUserLink");
        !IsNull(this.$V_0) && $addHandler(this.$V_0, "click", this.$$d_$p_0);
        this.$U_0 = $get("learnMoreSSSOrgLink");
        !IsNull(this.$U_0) && $addHandler(this.$U_0, "click", this.$$d_$p_0);
        this.$O_0 = $get("closePopupMessage");
        !IsNull(this.$O_0) && $addHandler(this.$O_0, "click", this.$$d_$k_0);
        this.$Q_0 = $get("detailsExpand");
        this.$2_0 = $get("detailsLink");
        !IsNull(this.$2_0) && $addHandler(this.$2_0, "click", this.$$d_$m_0);
        this.$E_0 = window.IsServerSideSyncEnabledForOrg;
        this.$F_0 = window.IsServerSideSyncEnabledForUser;
        this.$G_0 = window.IsUserHasCrmAppForOutlookPrivilege;
        this.$T_0 = window.IsOnPremServerIFDEnabled
    },
    ApplicationOnLoad: function() {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        !this.$T_0 && this.$0_0("EnableIFDServerErrorMessage");
        if (this.$E_0 && this.$F_0 && this.$G_0) {
            this.$r_0();
            this.$n_0()
        } else {
            this.$5_0(false);
            !this.$E_0 && this.$0_0("EnableOrgServerSideSyncErrorMessage");
            !this.$F_0 && this.$0_0("EnableUserServerSideSyncErrorMessage");
            !this.$G_0 && this.$0_0("EnableUserPrivilegeErrorMessage")
        }
    },
    $j_0: function($p0) {
        var $v_0 = false;
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        if (!IsNull($p0.target)) {
            $v_0 = !IsNull($p0.target.id) && $p0.target.id === "readdLink" ? true : false;
            var $v_1 = $p0.target.parentNode;
            if ($v_0) this.$9_0.style.display = "none";
            else this.$A_0.style.display = "none"
        }
        if (!this.$T_0) {
            this.$0_0("EnableIFDServerErrorMessage");
            return
        }
        if (!this.$E_0) {
            this.$0_0("EnableOrgServerSideSyncErrorMessage");
            return
        } else if (!this.$F_0) {
            this.$0_0("EnableUserServerSideSyncErrorMessage");
            return
        } else if (!this.$G_0) {
            this.$0_0("EnableUserPrivilegeErrorMessage");
            return
        } else {
            var $v_2 = new RemoteCommand("MailboxService", "AddAppForOutlookForCurrentUser");
            $v_2.SetParameter("readd", $v_0);
            var $v_3 = $v_2.Execute(), $v_4 = new Mscrm.AppsForCrm.ReturnInstallStatusFromXml($v_3.ReturnValue);
            if ($v_4.resultStatus === (4).toString()) this.$0_0("EnableAppAlreadyAddedErrorMessage");
            else if ($v_4.resultStatus === (1).toString()) this.$0_0("EnableAppSuccessMessage");
            else if ($v_4.resultStatus === (2).toString()) {
                $v_4.exceptionMessage.length && XUI.Html.SetText(this.$D_0, $v_4.exceptionMessage);
                this.$0_0("EnableAppErrorMessage")
            } else if ($v_4.resultStatus === (5).toString()) this.$0_0("EnableAppPendingMessage");
            else if ($v_4.resultStatus === (0).toString()) this.$0_0("EnableAppErrorMessage");
            else {
                XUI.Html.SetText(this.$D_0, $v_4.exceptionMessage);
                this.$0_0("EnableAppErrorMessage")
            }
        }
    },
    $0_0: function($p0) {
        this.$5_0(false);
        switch ($p0) {
        case "EnableOrgServerSideSyncErrorMessage":
            this.$H_0.style.display = "";
            break;
        case "EnableUserServerSideSyncErrorMessage":
            this.$K_0.style.display = "";
            break;
        case "EnableUserPrivilegeErrorMessage":
            this.$J_0.style.display = "";
            break;
        case "EnableIFDServerErrorMessage":
            this.$I_0.style.display = "";
            break;
        case "EnableAppAlreadyAddedErrorMessage":
            this.$9_0.style.display = "";
            break;
        case "EnableAppSuccessMessage":
            this.$C_0.style.display = "";
            break;
        case "EnableAppErrorMessage":
            this.$A_0.style.display = "";
            break;
        case "EnableAppPendingMessage":
            this.$C_0.style.display = "";
            break
        }
    },
    $l_0: function($p0) {
        var $v_0 = "";
        if ($get("SignupOutlookDownloadFWLink")) {
            var $v_4 = $get("SignupOutlookDownloadFWLink");
            $v_0 = $v_4.value
        }
        var $v_1 = {};
        $v_1["downloadUrl"] = $v_0.toString();
        var $v_2 = Mscrm.CrmUri.create("/_grid/cmds/dlg_downloadoutlookclient.aspx"), $v_3 = new Xrm.DialogOptions;
        $v_3.height = 370;
        $v_3.width = 640;
        Xrm.Internal.openDialog($v_2.toString(), $v_3, $v_1, null, null)
    },
    $p_0: function($p0) {
        if (!IsNull($p0.target)) {
            var $v_1 = "";
            if ($p0.target.id === "learnMoreSSSUserLink") $v_1 = window.LOCID_APPSFORCRM_USERSSS;
            else if ($p0.target.id === "learnMoreSSSOrgLink") $v_1 = window.LOCID_APPSFORCRM_ORGSSS;
            else if ($p0.target.id === "learnMoreUserPrivLink") $v_1 = window.LOCID_APPSFORCRM_USERPRIV;
            XUI.Html.SetText(this.$f_0, $v_1);
            this.$1_0.style.display = ""
        }
        var $v_0 = $get($p0.target.id);
        this.$1_0.style.left = $v_0.parentNode.offsetLeft + $v_0.parentNode.clientWidth + "px";
        this.$1_0.style.top = $v_0.parentNode.offsetTop + $v_0.parentNode.clientHeight + "px";
        this.$c_0.focus()
    },
    $k_0: function($p0) { this.$1_0.style.display = "none" },
    $m_0: function($p0) {
        this.$Q_0.style.visibility = "visible";
        this.$Q_0.style.display = ""
    },
    $r_0: function() {
        this.$d_0 = Xrm.Page.context.getUserId();
        var $v_0 = new RemoteCommand("MailboxService", "RetrieveDefaultMailboxId", null);
        $v_0.SetParameter("objectId", this.$d_0);
        $v_0.SetParameter("objectTypeCode", 8);
        var $v_1 = $v_0.Execute();
        this.$e_0 = $v_1.ReturnValue
    },
    $n_0: function() {
        var $$t_6 = this;
        Xrm.Internal.messages.retrieve("mailbox",
                this.$e_0,
                ["officeappsdeploymentscheduled", "officeappsdeploymentstatus", "officeappsdeploymenterror"])
            .then(function($p1_0) {
                    var $v_0 = $p1_0.entity,
                        $v_1 = parseInt($v_0.getValue("officeappsdeploymentscheduled").getValue("value").toString()),
                        $v_2 = "";
                    if (!IsNull($v_0
                        .getValue("officeappsdeploymenterror"))
                    ) $v_2 = $v_0.getValue("officeappsdeploymenterror").toString();
                    if ($v_1 === 1) {
                        $$t_6.$0_0("EnableAppPendingMessage");
                        $$t_6.$5_0(false)
                    } else if (!$v_1) {
                        var $v_3 = parseInt($v_0.getValue("officeappsdeploymentstatus").getValue("value").toString());
                        if (!$v_3) $$t_6.$5_0(true);
                        else if ($v_3 === 1) {
                            $$t_6.$0_0("EnableAppAlreadyAddedErrorMessage");
                            $$t_6.$5_0(false)
                        } else if ($v_3 === 2) {
                            $$t_6.$0_0("EnableAppErrorMessage");
                            var $v_4 = $v_2.split("##");
                            !IsNull($v_4) && $v_4.length === 2 && XUI.Html.SetText($$t_6.$D_0, $v_4[1]);
                            $$t_6.$5_0(false)
                        }
                    }
                },
                Mscrm.AppsForCrm.AppsForCrm.$o)
    },
    $5_0: function($p0) {
        if ($p0) this.$B_0.style.display = "";
        else this.$B_0.style.display = "none"
    }
};
Mscrm.AppsForCrm.AppsForCrmAdminSettings = function() {
    this.$$d_$i_0 = Function.createDelegate(this, this.$i_0);
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$$d_$h_0 = Function.createDelegate(this, this.$h_0);
    this.$$d_$q_0 = Function.createDelegate(this, this.$q_0)
};
Mscrm.AppsForCrm.AppsForCrmAdminSettings.SetQuickFindViewId = function() {
    var $v_0 = $find("crmGrid_SavedNewQuerySelector");
    if (!IsNull($v_0) && $v_0.showNewVSControl && !$v_0.showOriginalSelectBox
    ) $v_0.quickFindQuery = "0ed008ba-5b1e-47c3-9d89-2bcbe8143c76"
};
Mscrm.AppsForCrm.AppsForCrmAdminSettings.prototype = {
    $M_0: null,
    $N_0: null,
    $Z_0: null,
    $L_0: null,
    $6_0: null,
    $4_0: null,
    $8_0: null,
    $b_0: null,
    $7_0: null,
    $Y_0: null,
    $R_0: null,
    ApplicationOnLoad: function() {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        this.$Y_0 = $get("save");
        !IsNull(this.$Y_0) && $addHandler(this.$Y_0, "click", this.$$d_$q_0);
        this.$7_0 = $find("crmGrid");
        this.$h_0(null, null);
        if (!IsNull(this.$7_0)) {
            this.$7_0.add_onSelectionChange(this.$$d_$h_0);
            Mscrm.AppsForCrm.AppsForCrmAdminSettings.SetQuickFindViewId()
        }
        this.$R_0 = $get("doneLink");
        !IsNull(this.$R_0) && $addHandler(this.$R_0, "click", this.$$d_$t_0);
        this.$M_0 = $get("setupBody");
        this.$N_0 = $get("showLink");
        this.$L_0 = $get("settingBody");
        this.$6_0 = $get("editLink");
        this.$Z_0 = $get("showSpan");
        this.$b_0 = $get("autoAddCheckbox");
        !IsNull(this.$6_0) && $addHandler(this.$6_0, "click", this.$$d_$i_0);
        !IsNull(this.$N_0) && $addHandler(this.$N_0, "click", this.$$d_$t_0);
        this.$4_0 = $get("crmappBody");
        this.$8_0 = $get("gridContainer")
    },
    $h_0: function($p0, $p1) {
        if (!IsNull(this.$7_0)) {
            var $v_0 = $get("appForSelectedUsersCommandBtnId");
            if (this.$7_0.get_innerGrid().get_selectedRecords().length > 0) $v_0.style.display = "";
            else $v_0.style.display = "none"
        }
    },
    ScheduleCRMAppInstallOnSave: function(isAutoAddEnabled, gridId) {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        var $v_0;
        if (isAutoAddEnabled) {
            var $v_1 = new RemoteCommand("MailboxService", "ScheduleCRMAppInstallForAllUsers", null);
            $v_0 = $v_1.Execute();
            var $v_2 = new Mscrm.AppsForCrm.ReturnInstallStatusFromXml($v_0.ReturnValue), $v_3 = $find(gridId);
            if ($v_2.resultStatus === (1).toString()) $v_3.Refresh();
            else if ($v_2.resultStatus === (2).toString())
                !IsNull($v_2.exceptionMessage) && Xrm.Utility.alertDialog($v_2.exceptionMessage, null)
        } else {
            var $v_4 = new RemoteCommand("MailboxService", "UpdateIsOfficeAppsAutoDeploymentSetting", null);
            $v_4.SetParameter("enableAutoDeployForAllUsers", false);
            $v_0 = $v_4.Execute()
        }
    },
    ScheduleCRMAppInstallForSelectedUsers: function(gridId) {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        var $v_0 = $find(gridId),
            $v_1,
            $v_2 = new RemoteCommand("MailboxService", "ScheduleCRMAppInstallForSelectedUsers", null);
        $v_2.SetParameter("selectedMailboxIds", $v_0.get_selectedIds().join(","));
        $v_1 = $v_2.Execute();
        var $v_3 = new Mscrm.AppsForCrm.ReturnInstallStatusFromXml($v_1.ReturnValue);
        if ($v_3.resultStatus === (1).toString()) $v_0.Refresh();
        else if ($v_3.resultStatus === (2).toString())
            !IsNull($v_3.exceptionMessage) && Xrm.Utility.alertDialog($v_3.exceptionMessage, null)
    },
    OpenInstallStatusDetailsDialog: function(mailboxid, scheduled) {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailApp") ||
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.OfficeMailAppWebDeployment")) return;
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_appforoutlookinstallstatusdetails.aspx");
        $v_0.get_query()["mailboxid"] = mailboxid;
        $v_0.get_query()["scheduled"] = scheduled;
        var $v_1 = new Xrm.DialogOptions;
        if (scheduled === "true") {
            $v_1.height = 220;
            $v_1.width = 600
        } else {
            $v_1.height = 240;
            $v_1.width = 600
        }
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
    },
    $i_0: function($p0) {
        if (this.$L_0.style.display === "none") {
            this.$L_0.style.display = "";
            this.$6_0.title = window.LOCID_SETTINGS_HIDE;
            this.$4_0.style.overflow = "auto";
            this.$8_0.style.height = "24%"
        } else {
            this.$L_0.style.display = "none";
            this.$6_0.title = window.LOCID_SETTINGS_SHOW;
            this.$4_0.style.overflow = "hidden";
            this.$8_0.style.height = "47%"
        }
    },
    $t_0: function($p0) {
        if (this.$M_0.style.display === "none") {
            this.$M_0.style.display = "";
            this.$Z_0.style.display = "none";
            this.$4_0.style.overflow = "auto";
            this.$8_0.style.height = "24%"
        } else {
            this.$M_0.style.display = "none";
            this.$Z_0.style.display = "";
            this.$N_0.title = window.LOCID_SETTINGS_SHOW;
            this.$4_0.style.overflow = "hidden";
            this.$8_0.style.height = "47%"
        }
    },
    $q_0: function($p0) {
        var $v_0 = this.$b_0.checked;
        this.ScheduleCRMAppInstallOnSave($v_0, "crmGrid");
        this.$i_0($p0)
    }
};
Mscrm.AppsForCrm.ReturnInstallStatusFromXml = function(result) {
    var $v_0 = XUI.Xml.LoadXml(result);
    this.resultStatus = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "/result/ResultStatus", null));
    this.exceptionCode = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "/result/ExceptionCode", null));
    this.exceptionType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "/result/ExceptionType", null));
    this.exceptionMessage = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "/result/ExceptionMessage", null))
};
Mscrm.AppsForCrm.ReturnInstallStatusFromXml.prototype = {
    resultStatus: null,
    exceptionCode: null,
    exceptionType: null,
    exceptionMessage: null
};
Mscrm.AppsForCrm.AppsForCrmInstallStatusDetails = function() {
    this.$$d_$s_0 = Function.createDelegate(this, this.$s_0)
};
Mscrm.AppsForCrm.AppsForCrmInstallStatusDetails.prototype = {
    $2_0: null,
    $3_0: null,
    ApplicationOnLoad: function() {
        this.$3_0 = $get("exceptionDetails");
        if (!IsNull(this.$3_0)) this.$3_0.style.display = "none";
        this.$2_0 = $get("detailsLink");
        !IsNull(this.$2_0) && $addHandler(this.$2_0, "click", this.$$d_$s_0)
    },
    $s_0: function($p0) {
        var $v_0 = window.parent.document.getElementById("InlineDialog");
        if (!IsNull($v_0))
            if (this.$3_0.style.display === "none") {
                this.$3_0.style.display = "";
                $v_0.style.height = "400px";
                $v_0.firstChild.style.height = "400px"
            } else {
                this.$3_0.style.display = "none";
                $v_0.style.height = "240px";
                $v_0.firstChild.style.height = "240px"
            }
    }
};
Mscrm.AppsForCrm.AppsForCrm.registerClass("Mscrm.AppsForCrm.AppsForCrm");
Mscrm.AppsForCrm.AppsForCrmAdminSettings.registerClass("Mscrm.AppsForCrm.AppsForCrmAdminSettings");
Mscrm.AppsForCrm.ReturnInstallStatusFromXml.registerClass("Mscrm.AppsForCrm.ReturnInstallStatusFromXml");
Mscrm.AppsForCrm.AppsForCrmInstallStatusDetails.registerClass("Mscrm.AppsForCrm.AppsForCrmInstallStatusDetails")