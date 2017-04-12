Type.registerNamespace("Mscrm");
var ResetOnlyWhenDirty = 1,
    DoNotForceSubmit = 0,
    ForceSubmit = 1,
    servertypes = { ExchangeServer: 0, Pop3smtp: 1, ExchangeOnpremOnCrmOnline: 2, ExchangeOnlineOnCrmOnPrem: 3 },
    Incoming_Outgoing_Connection_Section = "{8a43ba06-3273-01cb-7e32-c3ea72b65dde}",
    Outgoing_Connection_Section = "{176434B4-37E7-48AE-A979-5069AF06241A}",
    EmailNotifications = "{4f97240a-83f8-4a0b-bb27-104022023b42}",
    CredentialsTab = "tab1";
Mscrm.emailserver_onchange = function() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() == servertypes.Pop3smtp) {
        ResetValue("outgoinguseimpersonation", false);
        ResetValue("incominguseimpersonation", false);
        ResetValue("moveundeliveredemails", true);
        SetVisibility("useautodiscover_c", false);
        SetVisibility("useautodiscover_d", false);
        SetVisibility("outgoinguseimpersonation_c", false);
        SetVisibility("outgoinguseimpersonation_d", false);
        SetVisibility("incominguseimpersonation_c", false);
        SetVisibility("incominguseimpersonation_d", false);
        SetVisibility("moveundeliveredemails_c", false);
        SetVisibility("moveundeliveredemails_d", false)
    } else if ($find("crmForm").get_formType() == Mscrm.SdkFormType.createForm)
        if (Mscrm.FormControlInputBehavior.GetBehavior("incomingserverlocation").get_dataValue() == null &&
            Mscrm.FormControlInputBehavior.GetBehavior("outgoingserverlocation").get_dataValue() == null) {
            ResetValue("useautodiscover", true);
            Mscrm.useautodiscover_onchange()
        }
};
Mscrm.useautodiscover_onchange = function() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("useautodiscover").get_dataValue() == true) {
        SetServerLocationVsibility(false);
        ResetValue("incomingserverlocation", null);
        ResetValue("outgoingserverlocation", null);
        SetPortNumberVsibility(false);
        if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
            IS_HYBRIDSSS_FEATUREEENABLED &&
            Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnpremOnCrmOnline &&
            (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")) {
            Xrm.Page.getAttribute("incomingserverlocation").setRequiredLevel(Xrm.RequiredLevel.none);
            Xrm.Page.getAttribute("outgoingserverlocation").setRequiredLevel(Xrm.RequiredLevel.none);
            $get(Incoming_Outgoing_Connection_Section).style.display = "none"
        }
        SetUseSSLVsibility(false)
    } else {
        SetServerLocationVsibility(true);
        if (Mscrm.FormControlInputBehavior.GetBehavior("incomingserverlocation").get_dataValue() == null)
            if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
                IS_HYBRIDSSS_FEATUREEENABLED &&
                Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
                (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")
            ) ResetValue("incomingserverlocation", SAMPLE_EMAIL_SERVER_URL);
            else $get("incomingserverlocation").value = SAMPLE_EMAIL_SERVER_URL;
        if (Mscrm.FormControlInputBehavior.GetBehavior("outgoingserverlocation").get_dataValue() == null)
            if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
                IS_HYBRIDSSS_FEATUREEENABLED &&
                Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
                (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")
            ) ResetValue("outgoingserverlocation", SAMPLE_EMAIL_SERVER_URL);
            else $get("outgoingserverlocation").value = SAMPLE_EMAIL_SERVER_URL;
        SetPortNumberVsibility(true);
        if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
            IS_HYBRIDSSS_FEATUREEENABLED &&
            Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnpremOnCrmOnline &&
            (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")) {
            Xrm.Page.getAttribute("incomingserverlocation").setRequiredLevel(Xrm.RequiredLevel.required);
            Xrm.Page.getAttribute("outgoingserverlocation").setRequiredLevel(Xrm.RequiredLevel.required);
            $get(Incoming_Outgoing_Connection_Section).style.display = ""
        } else if (typeof IS_REVERSEHYBRIDSSS_FEATUREEENABLED != "undefined" &&
            IS_REVERSEHYBRIDSSS_FEATUREEENABLED &&
            Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
            (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")) {
            $get("incomingserverlocation_c").children[0].innerHTML = LABEL_SERVERLOCATION;
            SetVisibility("outgoingserverlocation_c", false);
            SetVisibility("outgoingserverlocation_d", false);
            $("#incomingserverlocation_c").attr("title", TOOLTIP_SERVERLOCATION)
        }
        SetUseSSLVsibility(true)
    }
};
Mscrm.usedefaulttenantid_onchange = function() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("usedefaulttenantid").get_dataValue() == true) {
        Mscrm.FormControlInputBehavior.GetBehavior("exchangeonlinetenantid").set_disabled(true);
        if (Mscrm.FormControlInputBehavior.GetBehavior("exchangeonlinetenantid")
            .get_dataValue() ==
            null) ResetValue("exchangeonlinetenantid", LOCID_CONFIG_TENANTID);
        else if (Mscrm.FormControlInputBehavior.GetBehavior("exchangeonlinetenantid").get_dataValue() !=
            LOCID_CONFIG_TENANTID) {
            var url = Mscrm.CrmUri.create("/_common/error/dlg_error.aspx");
            url.get_query()["hresult"] = "0x8005E25C";
            var dialogOptions = new Xrm.DialogOptions;
            dialogOptions.width = 550;
            dialogOptions.height = 260;
            Xrm.Internal.openDialog(url.toString(), dialogOptions, window, null, null)
        }
    } else Mscrm.FormControlInputBehavior.GetBehavior("exchangeonlinetenantid").set_disabled(false)
};

function SetServerLocationVsibility(isVisible) {
    SetVisibility("incomingserverlocation_c", isVisible);
    SetVisibility("incomingserverlocation_d", isVisible);
    SetVisibility("outgoingserverlocation_c", isVisible);
    SetVisibility("outgoingserverlocation_d", isVisible)
}

function SetPortNumberVsibility(isVisible) {
    SetVisibility("incomingportnumber_c", isVisible);
    SetVisibility("incomingportnumber_d", isVisible);
    SetVisibility("outgoingportnumber_c", isVisible);
    SetVisibility("outgoingportnumber_d", isVisible)
}

function SetUseSSLVsibility(isVisible) {
    SetVisibility("incomingusessl_c", isVisible);
    SetVisibility("incomingusessl_d", isVisible);
    SetVisibility("outgoingusessl_c", isVisible);
    SetVisibility("outgoingusessl_d", isVisible)
}

Mscrm.incomingusessl_onchange = function() {
    oServerType = Mscrm.FormControlInputBehavior.GetBehavior("servertype");
    oIncomingPortNumber = Mscrm.FormControlInputBehavior.GetBehavior("incomingportnumber");
    if (Mscrm.FormControlInputBehavior.GetBehavior("incomingusessl").get_dataValue() == true)
        if (oServerType
            .get_dataValue() ==
            servertypes.Pop3smtp &&
            oIncomingPortNumber.get_dataValue() == 110) ResetValue("incomingportnumber", 995, DoNotForceSubmit);
        else
            oServerType.get_dataValue() == servertypes.ExchangeServer &&
                oIncomingPortNumber.get_dataValue() == 80 &&
                ResetValue("incomingportnumber", 443, DoNotForceSubmit);
    else if (oServerType
        .get_dataValue() ==
        servertypes.Pop3smtp &&
        oIncomingPortNumber.get_dataValue() == 995) ResetValue("incomingportnumber", 110, DoNotForceSubmit);
    else
        oServerType.get_dataValue() == servertypes.ExchangeServer &&
            oIncomingPortNumber.get_dataValue() == 443 &&
            ResetValue("incomingportnumber", 80, DoNotForceSubmit)
};
Mscrm.outgoingusessl_onchange = function() {
    oServerType = Mscrm.FormControlInputBehavior.GetBehavior("servertype");
    oOutgoingPortNumber = Mscrm.FormControlInputBehavior.GetBehavior("outgoingportnumber");
    if (Mscrm.FormControlInputBehavior.GetBehavior("outgoingusessl").get_dataValue() == true)
        if (oServerType
            .get_dataValue() ==
            servertypes.Pop3smtp &&
            oOutgoingPortNumber.get_dataValue() == 25) ResetValue("outgoingportnumber", 465, DoNotForceSubmit);
        else
            oServerType.get_dataValue() == servertypes.ExchangeServer &&
                oOutgoingPortNumber.get_dataValue() == 80 &&
                ResetValue("outgoingportnumber", 443, DoNotForceSubmit);
    else if (oServerType
        .get_dataValue() ==
        servertypes.Pop3smtp &&
        oOutgoingPortNumber.get_dataValue() == 465) ResetValue("outgoingportnumber", 25, DoNotForceSubmit);
    else
        oServerType.get_dataValue() == servertypes.ExchangeServer &&
            oOutgoingPortNumber.get_dataValue() == 443 &&
            ResetValue("outgoingportnumber", 80, DoNotForceSubmit)
};
Mscrm.usesamesettingsforoutgoingconnections_onchange = function() { HandleUseSameSettingsForOutgoingConnections(true) };

function HandleUseSameSettingsForOutgoingConnections(isEventTriggered) {
    if (Mscrm.FormControlInputBehavior.GetBehavior("usesamesettingsforoutgoingconnections").get_dataValue() == true) {
        ResetValue("outgoingcredentialretrieval", null, DoNotForceSubmit, ResetOnlyWhenDirty);
        ResetValue("outgoinguseimpersonation", null, DoNotForceSubmit, ResetOnlyWhenDirty);
        ResetValue("outgoingusername", null, DoNotForceSubmit, ResetOnlyWhenDirty);
        ResetValue("outgoingpassword", null, DoNotForceSubmit, ResetOnlyWhenDirty);
        ResetAuthenticationProtocolOnCredentialRetrievalChange(Mscrm.FormControlInputBehavior
            .GetBehavior("outgoingauthenticationprotocol"),
            Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval"));
        SetVisibility("{023BC2BD-FF14-4F45-B3CA-D47C02B0124A}", false)
    } else {
        if (isEventTriggered) {
            ResetValue("outgoingcredentialretrieval",
                Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval").get_dataValue());
            ResetValue("outgoinguseimpersonation",
                Mscrm.FormControlInputBehavior.GetBehavior("incominguseimpersonation").get_dataValue());
            Mscrm.outgoingcredentialretrieval_onchange()
        }
        SetVisibility("{023BC2BD-FF14-4F45-B3CA-D47C02B0124A}", true)
    }
}

Mscrm.ProcessEmailsReceivedAfter_onchange = function() {
    var dateEntered = Mscrm.FormControlInputBehavior.GetBehavior("processemailsreceivedafter").get_dataValue(),
        dateNow = Mscrm.DateTimeUtility.localDateTimeNow();
    dateEntered.setHours(0, 0, 0, 0);
    dateNow.setHours(0, 0, 0, 0);
    if (dateEntered < dateNow)
        !confirm(ESP_OLDDATEMESSAGE, ESP_OLDDATETITLE) &&
            ResetValue("processemailsreceivedafter", null, DoNotForceSubmit)
};
Mscrm.outgoingcredentialretrieval_onchange = function() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval").get_dataValue() != "1" &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku != "true")) {
        SetVisibility("outgoingusername_c", false);
        SetVisibility("outgoingusername_d", false);
        SetVisibility("outgoingpassword_c", false);
        SetVisibility("outgoingpassword_d", false);
        ResetValue("outgoingusername", null);
        ResetValue("outgoingpassword", null)
    } else {
        SetVisibility("outgoingusername_c", true);
        SetVisibility("outgoingusername_d", true);
        SetVisibility("outgoingpassword_c", true);
        SetVisibility("outgoingpassword_d", true);
        if (!ALLOW_EMAIL_CREDENTIALS && (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")) {
            Mscrm.FormControlInputBehavior.GetBehavior("outgoingusername").set_disabled(true);
            Mscrm.FormControlInputBehavior.GetBehavior("outgoingpassword").set_disabled(true)
        } else {
            Mscrm.FormControlInputBehavior.GetBehavior("outgoingusername").set_disabled(false);
            Mscrm.FormControlInputBehavior.GetBehavior("outgoingpassword").set_disabled(false)
        }
    }
    ResetAuthenticationProtocolOnCredentialRetrievalChange(Mscrm.FormControlInputBehavior
        .GetBehavior("outgoingauthenticationprotocol"),
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval"))
};
Mscrm.incomingcredentialretrieval_onchange = function() {
    oIncomingCredentialRetrieval = Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval");
    if (oIncomingCredentialRetrieval.get_dataValue() != "1") {
        SetVisibility("incomingusername_c", false);
        SetVisibility("incomingusername_d", false);
        SetVisibility("incomingpassword_c", false);
        SetVisibility("incomingpassword_d", false);
        ResetValue("incomingusername", null);
        ResetValue("incomingpassword", null)
    } else {
        SetVisibility("incomingusername_c", true);
        SetVisibility("incomingusername_d", true);
        SetVisibility("incomingpassword_c", true);
        SetVisibility("incomingpassword_d", true);
        if (!ALLOW_EMAIL_CREDENTIALS) {
            Mscrm.FormControlInputBehavior.GetBehavior("incomingusername").set_disabled(true);
            Mscrm.FormControlInputBehavior.GetBehavior("incomingpassword").set_disabled(true)
        } else {
            Mscrm.FormControlInputBehavior.GetBehavior("incomingusername").set_disabled(false);
            Mscrm.FormControlInputBehavior.GetBehavior("incomingpassword").set_disabled(false)
        }
    }
    ResetAuthenticationProtocolOnCredentialRetrievalChange(Mscrm.FormControlInputBehavior
        .GetBehavior("incomingauthenticationprotocol"),
        oIncomingCredentialRetrieval);
    Mscrm.FormControlInputBehavior.GetBehavior("usesamesettingsforoutgoingconnections").get_dataValue() == true &&
        ResetAuthenticationProtocolOnCredentialRetrievalChange(Mscrm.FormControlInputBehavior
            .GetBehavior("outgoingauthenticationprotocol"),
            oIncomingCredentialRetrieval)
};
Mscrm.timeoutmailboxconnection_onchange = function() {
    if (Xrm.Page.getAttribute("timeoutmailboxconnection").getValue() == true) {
        SetVisibility("timeoutmailboxconnectionafteramount_c", true);
        SetVisibility("timeoutmailboxconnectionafteramount_d", true)
    } else {
        SetVisibility("timeoutmailboxconnectionafteramount_c", false);
        SetVisibility("timeoutmailboxconnectionafteramount_d", false);
        ResetValue("timeoutmailboxconnectionafteramount", null)
    }
};
Mscrm.resettenantidvalue = function() {
    typeof IS_REVERSEHYBRIDSSS_FEATUREEENABLED != "undefined" &&
        IS_REVERSEHYBRIDSSS_FEATUREEENABLED &&
        Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false") &&
        ResetValue("exchangeonlinetenantid", LOCID_CONFIG_TENANTID, ForceSubmit)
};

function ResetAuthenticationProtocolOnCredentialRetrievalChange(oAuthenticationProtocol, oCredentialRetrieval) {
    if (IsNull(oAuthenticationProtocol) || IsNull(oCredentialRetrieval)) return;
    if (oCredentialRetrieval.get_dataValue() == "2" || oCredentialRetrieval.get_dataValue() == "4") {
        oAuthenticationProtocol.set_dataValue("0");
        oAuthenticationProtocol.set_disabled(true);
        oAuthenticationProtocol.set_forceSubmit(true)
    } else {
        oCredentialRetrieval.get_dataValue() == "3" &&
            oAuthenticationProtocol.get_dataValue() == "3" &&
            oAuthenticationProtocol.set_dataValue("0");
        if (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true") {
            oAuthenticationProtocol.set_dataValue("3");
            oAuthenticationProtocol.set_disabled(true);
            oAuthenticationProtocol.set_forceSubmit(true)
        } else
            Xrm.Page.getAttribute("servertype").getValue() != servertypes.ExchangeServer &&
                (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true") &&
                oAuthenticationProtocol.set_disabled(false)
    }
}

function AddOnFocusEventHandlers() {
    var incomingPasswordControl = $get("incomingpassword");
    !IsNull(incomingPasswordControl) && $addHandler(incomingPasswordControl, "focus", IncomingPasswordFocusHandler);
    var outgoingPasswordControl = $get("outgoingpassword");
    !IsNull(outgoingPasswordControl) && $addHandler(outgoingPasswordControl, "focus", OutgoingPasswordFocusHandler);
    attachWindowOnUnload(RemoveOnFocusEventHandlers)
}

function RemoveOnFocusEventHandlers() {
    var incomingPasswordControl = $get("incomingpassword");
    !IsNull(incomingPasswordControl) && $removeHandler(incomingPasswordControl, "focus", IncomingPasswordFocusHandler);
    var outgoingPasswordControl = $get("outgoingpassword");
    !IsNull(outgoingPasswordControl) && $removeHandler(outgoingPasswordControl, "focus", OutgoingPasswordFocusHandler)
}

function IncomingPasswordFocusHandler() {
    var incomingPasswordControl = $get("incomingpassword");
    !IsNull(incomingPasswordControl) && incomingPasswordControl.select()
}

function OutgoingPasswordFocusHandler() {
    var outgoingPasswordControl = $get("outgoingpassword");
    !IsNull(outgoingPasswordControl) && outgoingPasswordControl.select()
}

Mscrm.emailserverprofileform_onload = function() {
    var ResetOnlyWhenDirty = 1, DoNotForceSubmit = 0, ForceSubmit = 1;
    Xrm.Page.getControl("servertype").setVisible(false);
    Mscrm.emailserver_onchange();
    Mscrm.useautodiscover_onchange();
    Mscrm.outgoingcredentialretrieval_onchange();
    Mscrm.incomingcredentialretrieval_onchange();
    Mscrm.timeoutmailboxconnection_onchange();
    HandleUseSameSettingsForOutgoingConnections(false);
    ConfigureSslSettings();
    ConfigureSettingsForOnline();
    SetDefaultValues();
    AddOnFocusEventHandlers();
    ConfigureS2SSettings();
    FilterEmailProfileDataForOSDPOrg();
    EnableDelegationAccess();
    ConfigureSettingsForCrmOnlineExchangeOnPrem();
    ConfigureEmailServerTypeName();
    ConfigureSettingForExchangeOnlineOnCrmOnPrem()
};

function ConfigureSettingForExchangeOnlineOnCrmOnPrem() {
    if (typeof IS_REVERSEHYBRIDSSS_FEATUREEENABLED != "undefined" &&
        IS_REVERSEHYBRIDSSS_FEATUREEENABLED &&
        Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")) {
        Xrm.Page.getControl("exchangeonlinetenantid").setVisible(true);
        Xrm.Page.getControl("usedefaulttenantid").setVisible(true);
        Mscrm.usedefaulttenantid_onchange();
        Xrm.Page.getAttribute("incomingcredentialretrieval").setValue("2");
        Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval").set_disabled(true);
        SetVisibility(CredentialsTab, false);
        $get("tab1Tab").parentNode.style.display = "none";
        Mscrm.FormControlInputBehavior.GetBehavior("maxconcurrentconnections").set_disabled(true);
        SetVisibility("maxconcurrentconnections_c", false);
        SetVisibility("maxconcurrentconnections_d", false);
        SetVisibility(Incoming_Outgoing_Connection_Section, false)
    } else {
        SetVisibility("exchangeonlinetenantid_c", false);
        SetVisibility("exchangeonlinetenantid_d", false);
        SetVisibility("usedefaulttenantid_c", false);
        SetVisibility("usedefaulttenantid_d", false)
    }
}

function FilterEmailProfileDataForOSDPOrg() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() == servertypes.ExchangeServer &&
        typeof FILTER_EMAIL_PROFILE_DATA_FOR_OSDP_ORG != undefined &&
        FILTER_EMAIL_PROFILE_DATA_FOR_OSDP_ORG) {
        Xrm.Page.getControl("useautodiscover").setVisible(false);
        Xrm.Page.getControl("maxconcurrentconnections").setVisible(false);
        Xrm.Page.getControl("minpollingintervalinminutes").setVisible(false)
    } else {
        Xrm.Page.getControl("useautodiscover").setDisabled(false);
        Xrm.Page.getControl("incomingserverlocation").setDisabled(false);
        Xrm.Page.getControl("outgoingserverlocation").setDisabled(false);
        Xrm.Page.getControl("minpollingintervalinminutes").setDisabled(false);
        Xrm.Page.getControl("maxconcurrentconnections").setDisabled(false);
        Xrm.Page.ui.tabs.get("tab_3").setVisible(true);
        Xrm.Page.getControl("incomingportnumber").getParent().setVisible(true)
    }
}

function EnableDelegationAccess() {
    if (typeof FILTER_EMAIL_PROFILE_DATA_FOR_DELEGATE_ACCESS != undefined &&
        FILTER_EMAIL_PROFILE_DATA_FOR_DELEGATE_ACCESS) {
        Xrm.Page.getControl("incominguseimpersonation").setVisible(true);
        Xrm.Page.getControl("outgoinguseimpersonation").setVisible(true)
    } else {
        Xrm.Page.getControl("incominguseimpersonation").setVisible(false);
        Xrm.Page.getControl("outgoinguseimpersonation").setVisible(false)
    }
}

function ConfigureS2SSettings() {
    if (typeof IS_LIVEOSDP != "undefined" &&
        !IS_LIVEOSDP &&
        Xrm.Page.getAttribute("servertype").getValue() != servertypes.ExchangeOnlineOnCrmOnPrem) {
        Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval").RemoveOption("2");
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval").RemoveOption("2")
    }
}

Mscrm.emailserverprofileform_onsave = function() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() == servertypes.ExchangeServer &&
        typeof FILTER_EMAIL_PROFILE_DATA_FOR_OSDP_ORG != undefined &&
        FILTER_EMAIL_PROFILE_DATA_FOR_OSDP_ORG) {
        Xrm.Page.getAttribute("incomingcredentialretrieval").setValue("2");
        Xrm.Page.getAttribute("incomingauthenticationprotocol").setValue("0");
        Xrm.Page.getAttribute("outgoingauthenticationprotocol").setValue("0")
    }
    if (typeof IS_REVERSEHYBRIDSSS_FEATUREEENABLED != "undefined" &&
        IS_REVERSEHYBRIDSSS_FEATUREEENABLED &&
        Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")) {
        var incomingServerLocationUrl = Xrm.Page.getAttribute("incomingserverlocation").getValue();
        Xrm.Page.getAttribute("outgoingserverlocation").setValue(incomingServerLocationUrl)
    }
    oIncomingCredentialRetrieval = Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval");
    if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() == servertypes.ExchangeServer &&
        typeof FILTER_EMAIL_PROFILE_DATA_FOR_DELEGATE_ACCESS != undefined &&
        !FILTER_EMAIL_PROFILE_DATA_FOR_DELEGATE_ACCESS) {
        oOutgoingCredentialRetrieval = Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval");
        if (oIncomingCredentialRetrieval
            .get_dataValue() ==
            "1" ||
            oIncomingCredentialRetrieval
            .get_dataValue() ==
            "3") Xrm.Page.getAttribute("incominguseimpersonation").setValue(true);
        else Xrm.Page.getAttribute("incominguseimpersonation").setValue(false);
        if (oOutgoingCredentialRetrieval
            .get_dataValue() ==
            "1" ||
            oOutgoingCredentialRetrieval
            .get_dataValue() ==
            "3") Xrm.Page.getAttribute("outgoinguseimpersonation").setValue(true);
        else Xrm.Page.getAttribute("outgoinguseimpersonation").setValue(false)
    }
    if (Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval").get_dataValue() != "1" ||
        !ALLOW_EMAIL_CREDENTIALS) {
        ResetValue("outgoingusername", null, ForceSubmit, ResetOnlyWhenDirty);
        ResetValue("outgoingpassword", null, ForceSubmit, ResetOnlyWhenDirty)
    }
    if (oIncomingCredentialRetrieval.get_dataValue() != "1" || !ALLOW_EMAIL_CREDENTIALS) {
        ResetValue("incomingusername", null, ForceSubmit, ResetOnlyWhenDirty);
        ResetValue("incomingpassword", null)
    }
    if (Mscrm.FormControlInputBehavior.GetBehavior("useautodiscover").get_dataValue() == true) {
        ResetValue("incomingserverlocation", null, DoNotForceSubmit, ResetOnlyWhenDirty);
        ResetValue("outgoingserverlocation", null, DoNotForceSubmit, ResetOnlyWhenDirty)
    }
    if (Mscrm.FormControlInputBehavior.GetBehavior("usesamesettingsforoutgoingconnections").get_dataValue() == true) {
        ResetValue("outgoingcredentialretrieval", null);
        ResetValue("outgoinguseimpersonation", null);
        ResetValue("outgoingusername", null);
        ResetValue("outgoingpassword", null)
    }
};

function ResetValue(controlId, newValue, setSubmit, resetOnlyWhenDirty) {
    var oControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);
    if (oControl.get_dataValue() == newValue) return;
    var domControl = $get(controlId);
    if (resetOnlyWhenDirty == ResetOnlyWhenDirty && !Mscrm.FormUtility.isControlDirty(domControl)) return;
    oControl.set_dataValue(newValue);
    setSubmit != DoNotForceSubmit && domControl.setAttribute("ForceSubmit", true)
}

function SetVisibility(controlId, visible) {
    var domControl = $get(controlId);
    domControl.style.display = visible ? "" : "none"
}

function ConfigureSslSettings() {
    if (ALLOW_SSL_PROFILE_ONLY) {
        ResetValue("outgoingusessl", true);
        ResetValue("incomingusessl", true);
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingusessl").set_disabled(true);
        Mscrm.FormControlInputBehavior.GetBehavior("incomingusessl").set_disabled(true)
    }
}

function ConfigureSettingsForCrmOnlineExchangeOnPrem() {
    if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
        IS_HYBRIDSSS_FEATUREEENABLED &&
        Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnpremOnCrmOnline &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")) {
        Xrm.Page.getAttribute("incomingcredentialretrieval").setValue(1);
        Xrm.Page.getAttribute("outgoingcredentialretrieval").setValue(1);
        Xrm.Page.getControl("incomingcredentialretrieval").setVisible(false);
        Xrm.Page.getControl("outgoingcredentialretrieval").setVisible(false);
        Xrm.Page.getControl("incomingusername").setVisible(true);
        Xrm.Page.getControl("incomingpassword").setVisible(true);
        Xrm.Page.getControl("incomingusername").setDisabled(false);
        Xrm.Page.getControl("incomingpassword").setDisabled(false);
        Xrm.Page.getControl("usesamesettingsforoutgoingconnections").setVisible(false);
        Xrm.Page.getAttribute("incomingauthenticationprotocol").setValue(3);
        Xrm.Page.getAttribute("outgoingauthenticationprotocol").setValue(3);
        Xrm.Page.getControl("incomingauthenticationprotocol").setVisible(false);
        Xrm.Page.getControl("outgoingauthenticationprotocol").setVisible(false);
        Xrm.Page.getControl("incomingusessl").setVisible(false);
        Xrm.Page.getControl("outgoingusessl").setVisible(false);
        Xrm.Page.getControl("outgoinguseimpersonation").setVisible(false);
        Xrm.Page.getAttribute("outgoinguseimpersonation").setValue(true);
        Xrm.Page.getAttribute("incominguseimpersonation").setValue(true);
        Xrm.Page.getAttribute("incomingusername").setRequiredLevel(Xrm.RequiredLevel.required);
        Xrm.Page.getAttribute("incomingpassword").setRequiredLevel(Xrm.RequiredLevel.required);
        $get("{702c94c0-8597-738d-07cc-c2a812798e45}_section_h3").innerHTML = LOCID_INCOMING_HEADERSTRING;
        $get("incomingusername_c").title = LOCID_USERNAME_TOOLTIP;
        $get("incomingpassword_c").title = LOCID_PASSWORD_TOOLTIP;
        $get(Outgoing_Connection_Section).style.display = "none";
        if (Mscrm.FormControlInputBehavior.GetBehavior("useautodiscover")
            .get_dataValue() ==
            true) $get(Incoming_Outgoing_Connection_Section).style.display = "none";
        $get(EmailNotifications).style.display = "";
        Xrm.Page.getAttribute("maxconcurrentconnections").setRequiredLevel(Xrm.RequiredLevel.required);
        Xrm.Page.getAttribute("minpollingintervalinminutes").setRequiredLevel(Xrm.RequiredLevel.required);
        Xrm.Page.getAttribute("incomingportnumber").setRequiredLevel(Xrm.RequiredLevel.required);
        Xrm.Page.getAttribute("outgoingportnumber").setRequiredLevel(Xrm.RequiredLevel.required)
    }
}

function ConfigureSettingsForOnline() {
    if (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true") {
        if (ALLOW_SSL_PROFILE_ONLY) {
            SetVisibility("outgoingusessl_c", false);
            SetVisibility("outgoingusessl_d", false);
            SetVisibility("incomingusessl_c", false);
            SetVisibility("incomingusessl_d", false)
        }
        Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval").RemoveOption("3");
        Mscrm.FormControlInputBehavior.GetBehavior("incomingcredentialretrieval").RemoveOption("4");
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval").RemoveOption("3");
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingcredentialretrieval").RemoveOption("4");
        Mscrm.FormControlInputBehavior.GetBehavior("incomingauthenticationprotocol").RemoveOption("1");
        Mscrm.FormControlInputBehavior.GetBehavior("incomingauthenticationprotocol").RemoveOption("2");
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingauthenticationprotocol").RemoveOption("1");
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingauthenticationprotocol").RemoveOption("2")
    }
}

function SetDefaultValues() {
    if (Mscrm.FormControlInputBehavior.GetBehavior("maxconcurrentconnections").get_dataValue() == null)
        if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() ==
            servertypes.ExchangeOnlineOnCrmOnPrem) ResetValue("maxconcurrentconnections", 27);
        else ResetValue("maxconcurrentconnections", 10);
    Mscrm.FormControlInputBehavior.GetBehavior("minpollingintervalinminutes").get_dataValue() == null &&
        ResetValue("minpollingintervalinminutes", 0);
    if (Mscrm.FormControlInputBehavior.GetBehavior("servertype").get_dataValue() == servertypes.Pop3smtp) {
        Mscrm.FormControlInputBehavior.GetBehavior("incomingportnumber").get_dataValue() == null &&
            ResetValue("incomingportnumber", 995, DoNotForceSubmit);
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingportnumber").get_dataValue() == null &&
            ResetValue("outgoingportnumber", 465, DoNotForceSubmit)
    } else {
        Mscrm.FormControlInputBehavior.GetBehavior("incomingportnumber").get_dataValue() == null &&
            ResetValue("incomingportnumber", 443, DoNotForceSubmit);
        Mscrm.FormControlInputBehavior.GetBehavior("outgoingportnumber").get_dataValue() == null &&
            ResetValue("outgoingportnumber", 443, DoNotForceSubmit)
    }
    if (Mscrm.FormControlInputBehavior.GetBehavior("useautodiscover").get_dataValue() == false) {
        if (Mscrm.FormControlInputBehavior.GetBehavior("incomingserverlocation")
            .get_dataValue() ==
            null) $get("incomingserverlocation").value = SAMPLE_EMAIL_SERVER_URL;
        if (Mscrm.FormControlInputBehavior.GetBehavior("outgoingserverlocation")
            .get_dataValue() ==
            null) $get("outgoingserverlocation").value = SAMPLE_EMAIL_SERVER_URL
    }
}

function ConfigureEmailServerTypeName() {
    if ($find("crmForm").get_formType() == Mscrm.SdkFormType.createForm)
        if (Mscrm.FormControlInputBehavior.GetBehavior("emailservertypename").get_dataValue() == null)
            if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
                IS_HYBRIDSSS_FEATUREEENABLED &&
                Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnpremOnCrmOnline &&
                (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")
            ) $get("emailservertypename").value = LOCID_PROFILE_EXCHONPREMHYBRID;
            else if (typeof IS_HYBRIDSSS_FEATUREEENABLED != "undefined" &&
                IS_HYBRIDSSS_FEATUREEENABLED &&
                Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeOnlineOnCrmOnPrem &&
                (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "false")
            ) $get("emailservertypename").value = LOCID_PROFILE_EXCHONLINEHYBRID;
            else if (Xrm.Page.getAttribute("servertype").getValue() == servertypes.ExchangeServer)
                if (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true"
                ) $get("emailservertypename").value = LOCID_PROFILE_EXCHANGEONLINE;
                else $get("emailservertypename").value = LOCID_PROFILE_EXCHANGEONPREM;
            else if (Xrm.Page.getAttribute("servertype")
                .getValue() ==
                servertypes.Pop3smtp) $get("emailservertypename").value = LOCID_PROFILE_OTHER
}