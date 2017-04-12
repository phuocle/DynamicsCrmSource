Type.registerNamespace("Mscrm.EmailConnector");
Mscrm.EmailConnector.ApplyMailboxSettingsMode = function() {};
Mscrm.EmailConnector.ApplyMailboxSettingsMode.prototype = { selectedRecords: 0, currentPage: 1, currentView: 2 };
Mscrm.EmailConnector.ApplyMailboxSettingsMode.registerEnum("Mscrm.EmailConnector.ApplyMailboxSettingsMode", false);
Mscrm.EmailConnector.ActionMask = function() {};
Mscrm.EmailConnector.ActionMask.prototype = {
    none: 0,
    performTestAccess: 1,
    applyDefaultMailboxSettings: 2,
    setCrmOrgAsExchangeMailboxOrg: 4
};
Mscrm.EmailConnector.ActionMask.registerEnum("Mscrm.EmailConnector.ActionMask", false);
Mscrm.EmailConnector.ApplyMailboxSettings = function(mode,
    gridControl,
    selectedRecords,
    allRecords,
    dialogMode,
    testEmailConfiguration,
    entityTypeCode,
    setCrmOrgAsExchangeMailboxOrg) {
    this.$7_0 = -1;
    this.$O_0 = Number.parseInvariant(dialogMode);
    this.$a_0 = entityTypeCode;
    this.$Z_0 = allRecords;
    this.$f_0 = mode;
    this.$S_0 = gridControl;
    this.$g_0 = selectedRecords;
    if (this.$O_0 === 1) this.$C_0 = 1;
    else if (testEmailConfiguration) this.$C_0 = 3;
    else this.$C_0 = 2;
    if (setCrmOrgAsExchangeMailboxOrg === 1) this.$C_0 = this.$C_0 | 4;
    this.$M_0 = Mscrm.EmailConnector.ApplyMailboxSettings.$p(this.$r_0())
};
Mscrm.EmailConnector.ApplyMailboxSettings.$t = function($p0) {
    var $v_0 = '<filter type="and"><condition attribute="emailserverprofile" operator="eq" value="{0}" /></filter>';
    return String.format($v_0, CrmEncodeDecode.CrmXmlEncode($p0[0].Id))
};
Mscrm.EmailConnector.ApplyMailboxSettings.$u = function($p0) {
    for (var $v_0 = '<filter type="and"><condition attribute="mailboxid" operator="in">{0}</condition></filter>',
        $v_1 = new Sys.StringBuilder,
        $v_2 = "<value>{0}</value>",
        $v_3 = 0;
        $v_3 < $p0.length;
        $v_3++) $v_1.append(String.format($v_2, CrmEncodeDecode.CrmXmlEncode($p0[$v_3].Id)));
    return String.format($v_0, $v_1.toString())
};
Mscrm.EmailConnector.ApplyMailboxSettings.$10 = function($p0) {
    if (isNullOrEmptyString($p0)) return "";
    var $v_0 = XUI.Xml.LoadXml($p0), $v_1 = XUI.Xml.SelectSingleNode($v_0, "fetch/entity[1]", null);
    while (!IsNull(XUI.Xml.SelectSingleNode($v_1, "//attribute", null))) {
        var $v_8 = XUI.Xml.SelectSingleNode($v_1, "//attribute", null);
        $v_1.removeChild($v_8)
    }
    var $v_2 = $v_0.createElement("attribute"), $v_3 = $v_0.createAttribute("name");
    $v_3.value = "mailboxid";
    $v_2.attributes.setNamedItem($v_3);
    var $v_4 = $v_0.createElement("attribute"), $v_5 = $v_0.createAttribute("name");
    $v_5.value = "isforwardmailbox";
    $v_4.attributes.setNamedItem($v_5);
    var $v_6 = $v_0.createElement("attribute"), $v_7 = $v_0.createAttribute("name");
    $v_7.value = "regardingobjectid";
    $v_6.attributes.setNamedItem($v_7);
    $v_1.appendChild($v_2);
    $v_1.appendChild($v_4);
    $v_1.appendChild($v_6);
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.HybridSSS") &&
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.TestExchangeServer")) {
        var $v_9 = $v_0.createElement("attribute"), $v_A = $v_0.createAttribute("name");
        $v_A.value = "isserviceaccount";
        $v_9.attributes.setNamedItem($v_A);
        $v_1.appendChild($v_9)
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_0)
};
Mscrm.EmailConnector.ApplyMailboxSettings.$p = function($p0) {
    if (IsNull($p0)) return "";
    var $v_0 = XUI.Xml.LoadXml($p0), $v_1 = XUI.Xml.SelectSingleNode($v_0, "fetch", null);
    !IsNull($v_1.attributes.getNamedItem("paging-cookie")) && $v_1.attributes.removeNamedItem("paging-cookie");
    !IsNull($v_1.attributes.getNamedItem("page")) && $v_1.attributes.removeNamedItem("page");
    !IsNull($v_1.attributes.getNamedItem("count")) && $v_1.attributes.removeNamedItem("count");
    !IsNull($v_1.attributes.getNamedItem("returntotalrecordcount")) &&
        $v_1.attributes.removeNamedItem("returntotalrecordcount");
    var $v_2 = $v_0.createAttribute("count");
    $v_2.value = "200";
    $v_1.attributes.setNamedItem($v_2);
    return XUI.Xml.XMLSerializer.serializeToString($v_0)
};
Mscrm.EmailConnector.ApplyMailboxSettings.prototype = {
    refreshMailboxGrid: function() {
        var $v_0 = this.$S_0, $v_1 = $v_0.getViewSelector(), $v_2 = new Xrm.LookupObject;
        $v_2.id = "{4E495712-3F08-49CC-BD14-70C1745EB4ED}";
        $v_2.name = "View Unapproved Mailboxes";
        $v_2.entityType = "savedquery";
        $v_1.setCurrentView($v_2)
    },
    getMailboxStatusCount: function() {
        var $v_0 = {}, $v_1 = this.$i_0(this.$M_0, 1);
        if (isNullOrEmptyString($v_1)) return $v_0;
        var $v_2 = new RemoteCommand("MailboxService", "GetMailboxStatusCount", null);
        $v_2.SetParameter("fetchXml", $v_1);
        var $v_3 = $v_2.Execute(), $v_4 = 0, $v_5 = 0;
        if ($v_3.Success) {
            var $v_6 = $v_3.ReturnValue.replace("{", "").replace("}", "").split(" ", 2);
            $v_4 = Number.parseInvariant($v_6[0]);
            $v_5 = Number.parseInvariant($v_6[1])
        }
        $v_0["0"] = $v_4;
        $v_0["1"] = $v_5;
        return $v_0
    },
    getUnapprovedMailboxEmailAddress: function(adminEmail) {
        var $v_0 = new RemoteCommand("MailboxService", "GetUnapprovedMailboxEmailAddress", null),
            $v_1 = this.$i_0(this.$M_0, 1);
        $v_0.SetParameter("fetchXml", $v_1);
        var $v_2 = $v_0.Execute();
        this.sendEmail($v_2.ReturnValue, adminEmail)
    },
    sendEmail: function(emailAddress, adminEmail) {
        var $v_0 = $get("lnkTenantAdminSendMail");
        if (Object.getTypeName(emailAddress) === "Object") $v_0.setAttribute("hidden", true);
        else {
            var $v_1 = String.format(window.LOCID_APPROVEEMAIL_TEMPLATE, emailAddress, Xrm.Page.context.getUserName()),
                $v_2 = String.format("mailto:{0}&Subject={1}&Body={2}", adminEmail, "Mailbox approval", $v_1);
            $v_0.href = $v_2
        }
    },
    processBatch: function(pageNumber, callback) {
        var $v_0 = this.$i_0(this.$M_0, pageNumber);
        if (isNullOrEmptyString($v_0)) return;
        var $v_1 = new RemoteCommand("MailboxService", "SubmitApplyMailboxSettingsJob", null);
        $v_1.SetParameter("fetchXml", $v_0);
        $v_1.SetParameter("actionMask", this.$C_0);
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) {
            var $v_3 = $v_2.ReturnValue.split(",", 6);
            this.$H_0 += Number.parseInvariant($v_3[0]);
            var $v_4 = Number.parseInvariant($v_3[2]) > 0;
            if (this.$7_0 === -1) this.$7_0 = Number.parseInvariant($v_3[1]);
            this.$T_0 = $v_3[3];
            this.$b_0 = $v_3[4];
            this.$e_0 = $v_3[5];
            if (pageNumber > this.$7_0 / 200 && !$v_4) {
                if (this.$H_0 > 0)
                    if (this.$e_0 === "True") alert(this.$b_0);
                    else alert(String.format(window.LOCID_APPLYMLBOX_MULTIPLEERRORS, this.$H_0, this.$7_0));
                callback(-1, pageNumber * 200, this.$7_0, this.$H_0);
                return
            } else {
                if (pageNumber > this.$7_0 / 200) this.$7_0 = (pageNumber + 1) * 200;
                callback(pageNumber, pageNumber * 200, this.$7_0, this.$H_0)
            }
        }
    },
    $r_0: function() {
        switch (this.$f_0) {
        case 0:
            return this.$l_0(this.$g_0);
        case 1:
            return this.$l_0(this.$Z_0);
        case 2:
            return Mscrm.EmailConnector.ApplyMailboxSettings.$10(this.$S_0.GetParameter("effectiveFetchXml"));
        default:
            throw Error.invalidOperation()
        }
    },
    $s_0: function($p0) {
        if (this.$O_0 === 1 && this.$a_0 === 9605) return Mscrm.EmailConnector.ApplyMailboxSettings.$t($p0);
        else return Mscrm.EmailConnector.ApplyMailboxSettings.$u($p0)
    },
    $l_0: function($p0) {
        if (!$p0.length) return "";
        return String
            .format('<fetch><entity name="mailbox"><attribute name="mailboxid" /><attribute name="isforwardmailbox" /><attribute name="regardingobjectid" /><attribute name="isserviceaccount" /><attribute name="emailaddress" /><attribute name="testemailconfigurationscheduled" /><attribute name="isemailaddressapprovedbyo365admin" /><attribute name="emailrouteraccessapproval" />{0}</entity></fetch>', this.$s_0($p0))
    },
    $i_0: function($p0, $p1) {
        if (IsNull($p0)) return "";
        var $v_0 = XUI.Xml.LoadXml($p0), $v_1 = XUI.Xml.SelectSingleNode($v_0, "fetch", null);
        if (this.$T_0) {
            var $v_3 = $v_0.createAttribute("paging-cookie");
            $v_3.value = this.$T_0;
            $v_1.attributes.setNamedItem($v_3)
        }
        var $v_2 = $v_0.createAttribute("page");
        $v_2.value = $p1.toString();
        $v_1.attributes.setNamedItem($v_2);
        if (this.$7_0 === -1) {
            var $v_4 = $v_0.createAttribute("returntotalrecordcount");
            $v_4.value = "true";
            $v_1.attributes.setNamedItem($v_4)
        }
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    $g_0: null,
    $Z_0: null,
    $f_0: 0,
    $S_0: null,
    $O_0: 0,
    $a_0: 0,
    $C_0: 0,
    $M_0: null,
    $T_0: null,
    $H_0: 0,
    $b_0: null,
    $e_0: null
};
Mscrm.EmailConnector.FolderBasedTracking = function() {};
Mscrm.EmailConnector.FolderBasedTracking.prototype = {
    updateMappings: function(mailboxId, createUpdateMappings) {
        for (var $v_0 = new Sys
                     .StringBuilder,
            $v_3 = 0;
            $v_3 < createUpdateMappings.length;
            $v_3++)
            $v_0.append(String
                .format('<Mapping FolderId="{0}" FolderName="{1}" RegardingObjectTypeCode="{2}" RegardingObjectName="{3}" RegardingObjectId="{4}"/>', CrmEncodeDecode.CrmXmlAttributeEncode(createUpdateMappings[$v_3].$Q_0), CrmEncodeDecode.CrmXmlAttributeEncode(createUpdateMappings[$v_3].$R_0), CrmEncodeDecode.CrmXmlAttributeEncode(createUpdateMappings[$v_3].$W_0), CrmEncodeDecode.CrmXmlAttributeEncode(createUpdateMappings[$v_3].$V_0), CrmEncodeDecode.CrmXmlAttributeEncode(createUpdateMappings[$v_3].$U_0)));
        var $v_1 = String.format('<?xml version="1.0" encoding="UTF-8"?><FolderMappings>{0}</FolderMappings>',
                $v_0.toString()),
            $v_2 = new RemoteCommand("MailboxTrackingFolderService", "UpdateMappings", null);
        $v_2.SetParameter("mailboxId", mailboxId);
        $v_2.SetParameter("mappingsXml", $v_1);
        return $v_2.Execute()
    }
};
Mscrm.EmailConnector.FolderBasedTrackingMapping = function(folderId,
    folderName,
    regardingObjectTypeCode,
    regardingObjectId,
    regardingObjectName) {
    this.$Q_0 = folderId;
    this.$R_0 = folderName;
    this.$W_0 = regardingObjectTypeCode;
    this.$U_0 = regardingObjectId;
    this.$V_0 = regardingObjectName
};
Mscrm.EmailConnector.FolderBasedTrackingMapping
    .prototype = {
        $Q_0: null,
        $R_0: null,
        $W_0: null,
        $U_0: null,
        $V_0: null,
        get_folderId: function() { return this.$Q_0 },
        get_folderName: function() { return this.$R_0 },
        get_regardingObjectTypeCode: function() { return this.$W_0 },
        get_regardingObjectId: function() { return this.$U_0 },
        get_regardingObjectName: function() { return this.$V_0 }
    };
Mscrm.EmailConnector.EmailServerProfileTestServerStatus = function() {};
Mscrm.EmailConnector.EmailServerProfileTestServerStatus.prototype = {
    $8_0: null,
    $B_0: null,
    $I_0: null,
    $E_0: null,
    $F_0: null,
    $4_0: null,
    $J_0: null,
    $h_0: null,
    $3_0: null,
    $2_0: null,
    $6_0: null,
    $D_0: null,
    get_testExecutionStatus: function() { return this.$8_0 },
    set_testExecutionStatus: function(value) {
        this.$8_0 = value;
        return value
    },
    get_testValidationStatus: function() { return this.$B_0 },
    set_testValidationStatus: function(value) {
        this.$B_0 = value;
        return value
    },
    get_testAuthorizationStatus: function() { return this.$I_0 },
    set_testAuthorizationStatus: function(value) {
        this.$I_0 = value;
        return value
    },
    get_testRequest: function() { return this.$E_0 },
    set_testRequest: function(value) {
        this.$E_0 = value;
        return value
    },
    get_testResponse: function() { return this.$F_0 },
    set_testResponse: function(value) {
        this.$F_0 = value;
        return value
    },
    get_autoDiscover: function() { return this.$4_0 },
    set_autoDiscover: function(value) {
        this.$4_0 = value;
        return value
    },
    get_testTimeTaken: function() { return this.$J_0 },
    set_testTimeTaken: function(value) {
        this.$J_0 = value;
        return value
    },
    get_testStartTime: function() { return this.$h_0 },
    set_testStartTime: function(value) {
        this.$h_0 = value;
        return value
    },
    get_incomingServerLocation: function() { return this.$3_0 },
    set_incomingServerLocation: function(value) {
        this.$3_0 = value;
        return value
    },
    get_incomingUserName: function() { return this.$2_0 },
    set_incomingUserName: function(value) {
        this.$2_0 = value;
        return value
    },
    get_ownerEmailAddress: function() { return this.$6_0 },
    set_ownerEmailAddress: function(value) {
        this.$6_0 = value;
        return value
    },
    get_lastCrmMessage: function() { return this.$D_0 },
    set_lastCrmMessage: function(value) {
        this.$D_0 = value;
        return value
    }
};
Mscrm.EmailConnector.TestExchangeServer = function(serviceAccountMailboxId, emailServerProfileId, serverType) {
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$j_0 = -1;
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.TestExchangeServer")) return;
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.HybridSSS") &&
        !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ReverseHybridSSS")) return;
    this.$X_0 = serviceAccountMailboxId;
    this.$P_0 = emailServerProfileId;
    this.$5_0 = serverType;
    this.$y_0()
};
Mscrm.EmailConnector.TestExchangeServer.$Y = function() {
    var $v_0 = $get("fwdLink");
    $v_0.style.display = "";
    var $v_1 = $get("fwdLinkInfoImage");
    $v_1.style.display = ""
};
Mscrm.EmailConnector.TestExchangeServer.$G = function($p0) {
    var $v_0 = $get("dialogOptionHeadingSpan");
    XUI.Html.SetText($v_0, $p0)
};
Mscrm.EmailConnector.TestExchangeServer.$K = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = $get("exchangeConnectionStatusImage");
        $v_0.src = $p0
    }
};
Mscrm.EmailConnector.TestExchangeServer.prototype = {
    $X_0: null,
    $P_0: null,
    $5_0: null,
    $N_0: 1,
    $0_0: null,
    $L_0: null,
    $c_0: null,
    $d_0: null,
    $A_0: false,
    $y_0: function() {
        this.$0_0 = new Mscrm.EmailConnector.EmailServerProfileTestServerStatus;
        var $v_0 = ["useautodiscover", "incomingusername", "incomingserverlocation", "owneremailaddress", "ownerid"],
            $$t_2 = this;
        Xrm.Internal.messages.retrieve("emailserverprofile", this.$P_0, $v_0)
            .then(function($p1_0) { $p1_0 && $$t_2.$x_0($p1_0) }, this.$$d_$w_0)
    },
    $x_0: function($p0) {
        var $v_0 = $p0.entity;
        this.$0_0.$4_0 = $v_0.getValue("useautodiscover");
        this.$0_0.$2_0 = $v_0.getValue("incomingusername");
        this.$0_0.$3_0 = $v_0.getValue("incomingserverlocation");
        if (!IsNull(this.$5_0) && this.$5_0 === (2).toString()) {
            this.$0_0.$4_0 = $v_0.getValue("useautodiscover");
            this.$0_0.$2_0 = $v_0.getValue("incomingusername");
            this.$0_0.$3_0 = $v_0.getValue("incomingserverlocation");
            if (!IsNull(this.$0_0
                    .$4_0) &&
                this.$0_0.$4_0.get_value() === 1) this.$9_0(window.LOCID_EWSTEST_AUTODTITLE, "", 1);
            else this.$9_0(window.LOCID_EWSTEST_HTTPSSTEP, this.$0_0.$3_0, 1);
            this.$9_0(window.LOCID_EWSTEST_EWSSTEP,
                String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                2);
            this.$9_0(window.LOCID_EWSTEST_MAILBOXSTEP,
                String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                3)
        } else if (!IsNull(this.$5_0) && this.$5_0 === (3).toString()) {
            this.$0_0.$4_0 = $v_0.getValue("useautodiscover");
            this.$0_0.$3_0 = $v_0.getValue("incomingserverlocation");
            this.$0_0.$6_0 = $v_0.getValue("owneremailaddress");
            var $v_3 = $v_0.getValue("ownerid");
            this.$0_0.$2_0 = $v_3.Name;
            if (!IsNull(this.$0_0.$4_0) && this.$0_0.$4_0.get_value() === 1) {
                this.$9_0(window.LOCID_EWSTEST_CONAUTHORIZE, this.$0_0.$2_0, 1);
                this.$9_0(window.LOCID_EWSTEST_EWSCONONLINE, "", 2)
            } else {
                this.$9_0(window.LOCID_EWSTEST_EWSCONONLINE, this.$0_0.$3_0, 1);
                this.$9_0(window.LOCID_EWSTEST_CONAUTHORIZE, this.$0_0.$2_0, 2)
            }
            this.$9_0(window.LOCID_EWSTEST_CONAUTHENT, this.$0_0.$6_0, 3)
        }
        var $v_1 = $get("totalValidationSteps");
        XUI.Html.SetText($v_1, "3");
        var $v_2 = $get("validationStatusMessage");
        XUI.Html.SetText($v_2, window.LOCID_EWSTEST_INPROGRESSSTATUS);
        this.$L_0 = $get("fwdLink");
        if (!IsNull(this.$L_0)) {
            this.$c_0 = this.$$d_$n_0;
            this.$d_0 = this.$$d_$z_0;
            $addHandler(this.$L_0, "click", this.$c_0);
            $addHandler(this.$L_0, "keydown", this.$d_0)
        }
    },
    $n_0: function($p0) {
        var $v_0 = Xrm.Page.context.getUserLcid(), $v_1 = "0x" + $v_0.toString(16), $v_2 = 620065;
        if (!IsNull(this.$5_0) && this.$5_0 === (3).toString()) $v_2 = 785186;
        var $v_3 = String.format("http://go.microsoft.com/fwlink/?LinkID={0}&clcid={1}", $v_2, $v_1),
            $v_4 = Mscrm.CrmUri.create($v_3);
        $v_4.checkParamsNoEqual = true;
        safeWindowOpen($v_4,
            "",
            "height=" +
            window.screen.availHeight * .75 +
            ",width=" +
            window.screen.availWidth * .75 +
            ",scrollbars=1,resizable=1,status=1,toolbar=1,menubar=1,location=1",
            false,
            true)
    },
    $z_0: function($p0) {
        switch ($p0.keyCode) {
        case 32:
        case 13:
            this.$n_0($p0);
            break
        }
    },
    isExchangeServerTestRunning: function() {
        var $v_0 = new RemoteCommand("MailboxService", "IsTestAccessRunningOrScheduled", null);
        $v_0.SetParameter("mailboxId", this.$X_0);
        var $v_1 = $v_0.Execute();
        return !!$v_1 && $v_1.ReturnValue
    },
    testExchangeServerTest: function() {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.TestExchangeServer")) return;
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.HybridSSS") &&
            !Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ReverseHybridSSS")) return;
        this.$0_0 = new Mscrm.EmailConnector.EmailServerProfileTestServerStatus;
        var $$t_0 = this;
        this.$j_0 = window.setInterval(function() {
                if (!$$t_0.isExchangeServerTestRunning() || $$t_0.$N_0 > 180) {
                    window.clearInterval($$t_0.$j_0);
                    $$t_0.$11_0()
                }
                $$t_0.$N_0++
            },
            5e3)
    },
    $11_0: function() {
        if (this.$N_0 < 180) {
            var $v_0 = [
                    "lasttestvalidationstatus", "lasttestexecutionstatus", "lastauthorizationstatus", "lasttestrequest",
                    "lasttestresponse", "lasttesttotalexecutiontime", "useautodiscover", "incomingusername",
                    "incomingserverlocation", "owneremailaddress", "ownerid", "lastcrmmessage"
                ],
                $$t_B = this;
            Xrm.Internal.messages.retrieve("emailserverprofile", this.$P_0, $v_0)
                .then(function($p1_0) { $p1_0 && $$t_B.$12_0($p1_0) }, this.$$d_$w_0)
        } else {
            var $v_1 = new Xrm.Objects.EntityReference("mailbox",
                    new Microsoft.Crm.Client.Core.Framework.Guid(this.$X_0)),
                $v_2 = {};
            $v_2["testemailconfigurationscheduled"] = "0";
            $v_2["postponemailboxprocessinguntil"] = Mscrm.EmailConnector.TestExchangeServer.$m;
            var $v_3 = {};
            $v_3["testemailconfigurationscheduled"] = 0;
            $v_3["postponemailboxprocessinguntil"] = 2;
            var $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_1,
                    $v_2,
                    $v_3,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_4.get_changedFieldNames()
                .addRange(["testemailconfigurationscheduled", "postponemailboxprocessinguntil"]);
            var $$t_C = this;
            Xrm.Internal.messages.update($v_4).then(function($p1_0) {
                    $$t_C.$1_0(window.LOCID_EWSTEST_TIMEOUT,
                        "/_imgs/error/notif_icn_crit16.png",
                        1,
                        window.LOCID_EWSTEST_EXECUTIONFAILED);
                    $$t_C.$1_0(window.LOCID_EWSTEST_TIMEOUT,
                        "/_imgs/error/notif_icn_crit16.png",
                        2,
                        window.LOCID_EWSTEST_EXECUTIONFAILED);
                    $$t_C.$1_0(window.LOCID_EWSTEST_TIMEOUT,
                        "/_imgs/error/notif_icn_crit16.png",
                        3,
                        window.LOCID_EWSTEST_EXECUTIONFAILED);
                    var $v_5 = $get("validationStatusMessage");
                    XUI.Html.SetText($v_5, window.LOCID_EWSTEST_EXECUTIONFAILED);
                    Sys.UI.DomElement.addCssClass($v_5, "ms-crm-ExchangeTestFailure");
                    Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTFAILURE);
                    Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionfailure.png");
                    var $v_6 = $get("elapsedTimeText");
                    XUI.Html.SetText($v_6, String.format(window.LOCID_EWSTEST_TOTALTIMETAKEN, 900));
                    var $v_7 = $get("elapsedTimeRow");
                    $v_7.style.display = "";
                    var $v_8 = $get("totalValidationSteps");
                    XUI.Html.SetText($v_8, "0");
                    Mscrm.EmailConnector.TestExchangeServer.$Y()
                },
                this.$$d_$w_0)
        }
    },
    $9_0: function($p0, $p1, $p2) {
        var $v_0 = $get("statusReportTable"), $v_1 = $v_0.insertRow(-1);
        $v_1.id = $p2.toString();
        $v_1.setAttribute("height", "28px");
        var $v_2 = document.createElement("label");
        XUI.Html.SetText($v_2, $p0);
        $v_2.setAttribute("tabindex", 0);
        $v_2.setAttribute("title", $p0);
        var $v_3 = $v_1.insertCell(-1);
        $v_3.id = $p2 + "_dlNameCell";
        $v_3.className = "mscrm-text-regular mscrm-text-dark mscrm-siteTable-RowColumn";
        $v_3.appendChild($v_2);
        $v_1.appendChild($v_3);
        var $v_4 = document.createElement("div");
        $v_4.id = $p2 + "_validationStepCell";
        $v_4.setAttribute("title", $p1);
        $v_4.setAttribute("tabindex", 0);
        $v_4.className = "ms-crm-gridUrl";
        XUI.Html.SetText($v_4, $p1);
        var $v_5 = $v_1.insertCell(-1);
        $v_5.id = $p2 + "_siteUrlCell";
        $v_5.className = "mscrm-text-regular mscrm-text-dark mscrm-siteTable-RowColumn";
        $v_5.appendChild($v_4);
        $v_1.appendChild($v_5);
        var $v_6 = $v_1.insertCell(-1);
        $v_6.id = $p2 + "_validateStatusCell";
        $v_6.className = "mscrm-siteTable-RowColumn mscrm-siteTable-RowColumn-Validate";
        var $v_7 = document.createElement("img");
        $v_7.id = $p2 + "_validateStatusImage";
        $v_7.setAttribute("src", "/_imgs/ico/16_progress.gif");
        $v_7.setAttribute("alt", window.LOCID_EWSTEST_INPROGRESS);
        $v_7.setAttribute("tabindex", 0);
        $v_6.appendChild($v_7);
        $v_1.appendChild($v_6);
        $v_1.scrollIntoView()
    },
    $1_0: function($p0, $p1, $p2, $p3) {
        if (!IsNull($p0)) {
            var $v_0 = $get($p2 + "_validationStepCell");
            XUI.Html.SetText($v_0, $p0);
            $v_0.title = $p0
        }
        if (!IsNull($p1)) {
            var $v_1 = $get($p2 + "_validateStatusImage");
            $v_1.src = $p1;
            !IsNull($p3) && $v_1.setAttribute("alt", $p3)
        }
    },
    $k_0: function($p0, $p1, $p2) {
        if (!isNullOrEmptyString($p0) || !isNullOrEmptyString($p1)) {
            var $v_0 = $get("invalidSitesMessage");
            $v_0.style.display = "";
            var $v_1 = $get("requestResponseloglink");
            $v_1.style.display = "";
            var $v_2 = $get("requestResponseTextHolder");
            $v_2.style.display = "inline";
            var $v_3 = $get("requestResponseLogid");
            XUI.Html.SetText($v_3, this.$q_0($p0, $p1, $p2))
        }
        window.dialogWidth = "650px";
        window.dialogHeight = "600px";
        Mscrm.EmailConnector.TestExchangeServer.$Y()
    },
    $q_0: function($p0, $p1, $p2) {
        var $v_0 = "";
        if (!isNullOrEmptyString($p2)) {
            $v_0 += "*********************\r\n";
            $v_0 += window.LOCID_EWSTEST_MESSAGEFROMCRM + ":\r\n";
            $v_0 += "*********************\r\n";
            $v_0 += $p2 + "\r\n"
        }
        if (!isNullOrEmptyString($p0)) {
            $v_0 += "*****************************\r\n";
            $v_0 += window.LOCID_EWSTEST_REQUESTTOEXCHANGE + ":\r\n";
            $v_0 += "*****************************\r\n";
            $v_0 += $p0 + "\r\n"
        }
        if (!isNullOrEmptyString($p1)) {
            $v_0 += "*****************************\r\n";
            $v_0 += window.LOCID_EWSTEST_RESPFROMEXCHANGE + "\r\n";
            $v_0 += "*****************************\r\n";
            $v_0 += $p1 + "\r\n"
        }
        return $v_0
    },
    $w_0: function($p0) {
        this.$1_0(window.LOCID_EWSTEST_MAILBOXERROR,
            "/_imgs/error/notif_icn_crit16.png",
            1,
            window.LOCID_EWSTEST_EXECUTIONFAILED);
        this.$1_0(window.LOCID_EWSTEST_MAILBOXERROR,
            "/_imgs/error/notif_icn_crit16.png",
            2,
            window.LOCID_EWSTEST_EXECUTIONFAILED);
        this.$1_0(window.LOCID_EWSTEST_MAILBOXERROR,
            "/_imgs/error/notif_icn_crit16.png",
            3,
            window.LOCID_EWSTEST_EXECUTIONFAILED);
        var $v_0 = $get("totalValidationSteps");
        XUI.Html.SetText($v_0, "0");
        var $v_1 = $get("validationStatusMessage");
        XUI.Html.SetText($v_1, window.LOCID_EWSTEST_EXECUTIONFAILED);
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-ExchangeTestFailure");
        Mscrm.EmailConnector.TestExchangeServer.$Y()
    },
    $v_0: function() {
        if (!IsNull(this.$0_0.$4_0) && this.$0_0.$4_0.get_value() === 1) {
            if (this.$0_0.$I_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/ico/16_succeeded.png",
                    1,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/error/notif_icn_crit16.png",
                    1,
                    window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
            if (this.$0_0.$8_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$6_0),
                    "/_imgs/ico/16_succeeded.png",
                    3,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$6_0),
                    "/_imgs/error/notif_icn_crit16.png",
                    3,
                    window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
            if (this.$0_0.$B_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(this.$0_0.$3_0, "/_imgs/ico/16_succeeded.png", 2, window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(this.$0_0.$3_0, "/_imgs/error/notif_icn_crit16.png", 2, window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
        } else {
            if (this.$0_0.$I_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/ico/16_succeeded.png",
                    2,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/error/notif_icn_crit16.png",
                    2,
                    window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
            if (this.$0_0.$B_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(this.$0_0.$3_0, "/_imgs/ico/16_succeeded.png", 1, window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(this.$0_0.$3_0, "/_imgs/error/notif_icn_crit16.png", 1, window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
            if (this.$0_0.$8_0
                .get_valueString() ===
                (1).toString())
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$6_0),
                    "/_imgs/ico/16_succeeded.png",
                    3,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
            else {
                this.$A_0 = true;
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$6_0),
                    "/_imgs/error/notif_icn_crit16.png",
                    3,
                    window.LOCID_EWSTEST_EXECUTIONFAILED)
            }
        }
        var $v_0 = $get("validationStatusMessage");
        if (!this.$A_0) {
            XUI.Html.SetText($v_0, window.LOCID_EWSTEST_EXECUTIONPASSED);
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-ExchangeTestSuccess");
            Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTSUCCESS);
            Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionsuccess.png")
        } else {
            XUI.Html.SetText($v_0, window.LOCID_EWSTEST_EXECUTIONFAILED);
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-ExchangeTestFailure");
            Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTFAILURE);
            Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionfailure.png");
            this.$k_0(this.$0_0.$E_0, this.$0_0.$F_0, this.$0_0.$D_0)
        }
        this.$o_0()
    },
    $12_0: function($p0) {
        var $v_0 = $p0.entity;
        this.$0_0.$8_0 = $v_0.getValue("lasttestexecutionstatus");
        this.$0_0.$B_0 = $v_0.getValue("lasttestvalidationstatus");
        this.$0_0.$I_0 = $v_0.getValue("lastauthorizationstatus");
        this.$0_0.$E_0 = $v_0.getValue("lasttestrequest");
        this.$0_0.$F_0 = $v_0.getValue("lasttestresponse");
        this.$0_0.$J_0 = $v_0.getValue("lasttesttotalexecutiontime");
        this.$0_0.$4_0 = $v_0.getValue("useautodiscover");
        this.$0_0.$3_0 = $v_0.getValue("incomingserverlocation");
        this.$0_0.$D_0 = $v_0.getValue("lastcrmmessage");
        if (!IsNull(this.$5_0) && this.$5_0 === (3).toString()) {
            this.$0_0.$6_0 = $v_0.getValue("owneremailaddress");
            var $v_2 = $v_0.getValue("ownerid");
            this.$0_0.$2_0 = $v_2.Name;
            this.$v_0();
            return
        } else this.$0_0.$2_0 = $v_0.getValue("incomingusername");
        var $v_1 = $get("validationStatusMessage");
        if (this.$0_0.$B_0.get_valueString() === (1).toString())
            if (this.$0_0.$8_0.get_valueString() === (1).toString()) {
                this.$1_0(this.$0_0.$3_0, "/_imgs/ico/16_succeeded.png", 1, window.LOCID_EWSTEST_EXECUTIONPASSED);
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/ico/16_succeeded.png",
                    2,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                    "/_imgs/ico/16_succeeded.png",
                    3,
                    window.LOCID_EWSTEST_EXECUTIONPASSED);
                XUI.Html.SetText($v_1, window.LOCID_EWSTEST_EXECUTIONPASSED);
                Sys.UI.DomElement.addCssClass($v_1, "ms-crm-ExchangeTestSuccess");
                Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTSUCCESS);
                Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionsuccess.png")
            } else {
                if (this.$0_0.$8_0.get_valueString() === (0).toString()) {
                    if (!IsNull(this.$5_0) && this.$5_0 === (2).toString()) {
                        this.$1_0(this.$0_0.$3_0,
                            "/_imgs/ico/16_succeeded.png",
                            1,
                            window.LOCID_EWSTEST_EXECUTIONPASSED);
                        this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                            "/_imgs/error/notif_icn_crit16.png",
                            2,
                            window.LOCID_EWSTEST_EXECUTIONFAILED);
                        this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                            "/_imgs/error/notif_icn_crit16.png",
                            3,
                            window.LOCID_EWSTEST_EXECUTIONFAILED)
                    } else {
                        if (!IsNull(this.$0_0.$4_0) && this.$0_0.$4_0.get_value() === 1) {
                            this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                                "/_imgs/error/notif_icn_crit16.png",
                                1,
                                window.LOCID_EWSTEST_EXECUTIONFAILED);
                            this.$1_0(this.$0_0.$3_0,
                                "/_imgs/error/notif_icn_crit16.png",
                                2,
                                window.LOCID_EWSTEST_EXECUTIONFAILED)
                        } else {
                            this.$1_0(this.$0_0.$3_0,
                                "/_imgs/error/notif_icn_crit16.png",
                                1,
                                window.LOCID_EWSTEST_EXECUTIONFAILED);
                            this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                                "/_imgs/error/notif_icn_crit16.png",
                                2,
                                window.LOCID_EWSTEST_EXECUTIONFAILED)
                        }
                        this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$6_0),
                            "/_imgs/ico/16_succeeded.png",
                            3,
                            window.LOCID_EWSTEST_EXECUTIONPASSED)
                    }
                    this.$k_0(this.$0_0.$E_0, this.$0_0.$F_0, this.$0_0.$D_0);
                    XUI.Html.SetText($v_1, window.LOCID_EWSTEST_EXECUTIONFAILED);
                    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-ExchangeTestFailure");
                    Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTFAILURE);
                    Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionfailure.png")
                } else if (this.$0_0.$8_0.get_valueString() === (2).toString()) {
                    this.$1_0(this.$0_0.$3_0, "/_imgs/ico/16_succeeded.png", 1, window.LOCID_EWSTEST_EXECUTIONPASSED);
                    this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                        "/_imgs/error/notif_icn_alert16.png",
                        2,
                        window.LOCID_EWSTEST_EXECUTIONWARNING);
                    this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                        "/_imgs/error/notif_icn_alert16.png",
                        3,
                        window.LOCID_EWSTEST_EXECUTIONWARNING);
                    XUI.Html.SetText($v_1, window.LOCID_EWSTEST_EXECUTIONWARNING);
                    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-ExchangeTestWarning");
                    Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTWARNIGS)
                }
                Mscrm.EmailConnector.TestExchangeServer.$Y()
            }
        else if (this.$0_0.$B_0.get_valueString() === (0).toString()) {
            if (!IsNull(this.$0_0.$4_0) && this.$0_0.$4_0.get_value() === 1) {
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/error/notif_icn_crit16.png",
                    1,
                    window.LOCID_EWSTEST_EXECUTIONFAILED);
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/imagestrips/transparent_spacer.gif",
                    2,
                    "");
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                    "/_imgs/imagestrips/transparent_spacer.gif",
                    3,
                    "")
            } else {
                this.$1_0(this.$0_0.$3_0, "/_imgs/error/notif_icn_crit16.png", 1, window.LOCID_EWSTEST_EXECUTIONFAILED);
                this.$1_0(String.format(window.LOCID_EWSTEST_USERNAMETITLE, this.$0_0.$2_0),
                    "/_imgs/imagestrips/transparent_spacer.gif",
                    2,
                    "");
                this.$1_0(String.format(window.LOCID_EWSTEST_MAILBOXTITLE, this.$0_0.$2_0),
                    "/_imgs/imagestrips/transparent_spacer.gif",
                    3,
                    "")
            }
            XUI.Html.SetText($v_1, window.LOCID_EWSTEST_EXECUTIONFAILED);
            Sys.UI.DomElement.addCssClass($v_1, "ms-crm-ExchangeTestFailure");
            Mscrm.EmailConnector.TestExchangeServer.$G(window.LOCID_EWSTEST_TESTFAILURE);
            Mscrm.EmailConnector.TestExchangeServer.$K("/_imgs/exchangeconnectionfailure.png");
            this.$k_0(this.$0_0.$E_0, this.$0_0.$F_0, this.$0_0.$D_0)
        }
        this.$o_0()
    },
    $o_0: function() {
        if (!isNullOrEmptyString(this.$0_0.$J_0)) {
            var $v_1 = Mscrm.Utilities.parseInt(this.$0_0.$J_0, 0) / 1e3, $v_2 = $get("elapsedTimeText");
            XUI.Html.SetText($v_2, String.format(window.LOCID_EWSTEST_TOTALTIMETAKEN, $v_1 + 5e3 * this.$N_0 / 1e3));
            var $v_3 = $get("elapsedTimeRow");
            $v_3.style.display = ""
        }
        var $v_0 = $get("totalValidationSteps");
        XUI.Html.SetText($v_0, "0")
    }
};
Mscrm.EmailConnector.ApplyMailboxSettings.registerClass("Mscrm.EmailConnector.ApplyMailboxSettings");
Mscrm.EmailConnector.FolderBasedTracking.registerClass("Mscrm.EmailConnector.FolderBasedTracking");
Mscrm.EmailConnector.FolderBasedTrackingMapping.registerClass("Mscrm.EmailConnector.FolderBasedTrackingMapping");
Mscrm.EmailConnector.EmailServerProfileTestServerStatus
    .registerClass("Mscrm.EmailConnector.EmailServerProfileTestServerStatus");
Mscrm.EmailConnector.TestExchangeServer.registerClass("Mscrm.EmailConnector.TestExchangeServer");
Mscrm.EmailConnector.ApplyMailboxSettings.batchSize = 200;
Mscrm.EmailConnector.TestExchangeServer.$m = new Date(9999, 11, 30)