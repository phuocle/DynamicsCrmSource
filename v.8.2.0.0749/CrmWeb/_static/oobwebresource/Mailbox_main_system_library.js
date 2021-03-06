Type.registerNamespace("Mscrm");
var NotesSection = "tab3", CredentialFieldHeader = "{a1314504-10b4-2c4d-1688-461d91eeb587}_section_h3";
Mscrm.emailserverprofile_setadditionalparams = function(context) {
    var lookupBehavior = Mscrm.FormControlInputBehavior.GetBehavior("emailserverprofile");
    lookupBehavior.AddParam("ShowNewButton", 0)
};
Mscrm.allowemailcredentials_onclick = function() { HideUserNamePasswordIfNotAllowed() };
Mscrm.emailserverprofile_onchange = function() { HideCredentialsIfNotAllowedToChange() };
Mscrm.Form_onload = function() {
    DisableEmailCredentialsIfNotAllowed();
    IS_LIVEOSDP &&
        (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED) &&
        HideConfigurationTestResults();
    HideIsEmailAddressApprovedbyO365AdminStatus();
    HideUserNamePasswordIfNotAllowed();
    DisableDeleteEmailsForMailbox();
    AddOnFocusEventHandlers();
    RemoveEmptyOptionsFromSelectBoxes();
    HideSection();
    HideRegardingFieldIfForwardMailBoxIsSetNo();
    Mscrm.emailserverprofile_onchange()
};

function HideConfigurationTestResults() {
    var isemailaddressapprovedbyo365admin = Xrm.Page.getAttribute("isemailaddressapprovedbyo365admin"),
        configurationtest_tab = Xrm.Page.ui.tabs.get("tab_4");
    if (!IsNull(configurationtest_tab))
        if (!IsNull(isemailaddressapprovedbyo365admin) && isemailaddressapprovedbyo365admin.getValue() == "1"
        ) configurationtest_tab.setVisible(true);
        else configurationtest_tab.setVisible(false)
}

function HideIsEmailAddressApprovedbyO365AdminStatus() {
    var mailboxStatusTab = Xrm.Page.ui.tabs.get("MailboxStatusTab");
    if (!IsNull(mailboxStatusTab))
        if (IS_LIVEOSDP && (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED))
            if (IS_EXCHANGEONPREMONCRMONLINE) mailboxStatusTab.setVisible(false);
            else mailboxStatusTab.setVisible(true);
        else mailboxStatusTab.setVisible(false)
}

function HideRegardingFieldIfForwardMailBoxIsSetNo() {
    if (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" && IS_SSSRELIABILITY_FEATUREENABLED)
        if (Mscrm.FormControlInputBehavior.GetBehavior("isforwardmailbox").get_dataValue() == false) {
            SetVisibility("regardingobjectid_c", false);
            SetVisibility("regardingobjectid_d", false)
        }
}

function HideSection() {
    if (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" &&
        IS_SSSRELIABILITY_FEATUREENABLED &&
        (typeof _bIsLiveSku != "undefined" && _bIsLiveSku == "true")) {
        SetVisibility(NotesSection, false);
        $get("tab3Tab").parentNode.style.display = "none"
    }
}

function HideCredentialsIfNotAllowedToChange() {
    if (typeof IS_SSSRELIABILITY_FEATUREENABLED != "undefined" &&
        IS_SSSRELIABILITY_FEATUREENABLED &&
        Mscrm.FormControlInputBehavior.GetBehavior("emailserverprofile").get_dataValue() != null &&
        typeof _bIsLiveSku != "undefined")
        if (!CREDENTIAL_USERSPECIFIED) {
            SetVisibility(CredentialFieldHeader, false);
            SetVisibility("allowemailconnectortousecredentials_c", false);
            SetVisibility("allowemailconnectortousecredentials", false);
            SetVisibility("username_c", false);
            SetVisibility("username_d", false);
            SetVisibility("password_c", false);
            SetVisibility("password_d", false)
        }
}

function RemoveEmptyOptionsFromSelectBoxes() {
    Mscrm.FormControlInputBehavior.GetBehavior("incomingemaildeliverymethod").RemoveOption("");
    Mscrm.FormControlInputBehavior.GetBehavior("outgoingemaildeliverymethod").RemoveOption("")
}

function AddOnFocusEventHandlers() {
    var passwordControl = $get("password");
    !IsNull(passwordControl) && $addHandler(passwordControl, "focus", PasswordFocusHandler);
    attachWindowOnUnload(RemoveOnFocusEventHandlers)
}

function RemoveOnFocusEventHandlers() {
    var passwordControl = $get("password");
    !IsNull(passwordControl) && $removeHandler(passwordControl, "focus", PasswordFocusHandler)
}

function PasswordFocusHandler() {
    var passwordControl = $get("password");
    !IsNull(passwordControl) && passwordControl.select()
}

function HideUserNamePasswordIfNotAllowed() {
    var isAllowEmailCredsBehavior = Mscrm.FormControlInputBehavior.GetBehavior("allowemailconnectortousecredentials"),
        password_c = $get("password_c");
    if (!IsNull(password_c))
        password_c.style.display = !IsNull(isAllowEmailCredsBehavior) && isAllowEmailCredsBehavior.get_dataValue()
            ? ""
            : "none";
    var password_d = $get("password_d");
    if (!IsNull(password_d))
        password_d.style.display = !IsNull(isAllowEmailCredsBehavior) && isAllowEmailCredsBehavior.get_dataValue()
            ? ""
            : "none";
    var username_c = $get("username_c");
    if (!IsNull(username_c))
        username_c.style.display = !IsNull(isAllowEmailCredsBehavior) && isAllowEmailCredsBehavior.get_dataValue()
            ? ""
            : "none";
    var username_d = $get("username_d");
    if (!IsNull(username_d))
        username_d.style.display = !IsNull(isAllowEmailCredsBehavior) && isAllowEmailCredsBehavior.get_dataValue()
            ? ""
            : "none"
}

function DisableDeleteEmailsForMailbox() {
    if ((IsNull(Mscrm.FormControlInputBehavior.GetBehavior("isforwardmailbox")) ||
            Mscrm.FormControlInputBehavior.GetBehavior("isforwardmailbox").get_dataValue() == false) &&
        IS_QUEUE_MAILBOX == false) {
        var processAndDeleteEmailsControl = Mscrm.FormControlInputBehavior.GetBehavior("processanddeleteemails");
        if (!IsNull(processAndDeleteEmailsControl)) {
            processAndDeleteEmailsControl.set_disabled(true);
            $get("processanddeleteemails_c").style.display = "none";
            $get("processanddeleteemails_d").style.display = "none"
        }
    }
}

function ResetValue(controlId, newValue, setSubmit) {
    var oControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);
    if (IsNull(oControl)) return;
    if (oControl.get_dataValue() == newValue) return;
    oControl.set_dataValue(newValue);
    if (setSubmit != false) {
        var domControl = $get(controlId);
        domControl.setAttribute("ForceSubmit", true)
    }
}

function SetVisibility(controlId, visible) {
    var domControl = $get(controlId);
    domControl.style.display = visible ? "" : "none"
}

function DisableEmailCredentialsIfNotAllowed() {
    if (ALLOW_EMAIL_CREDENTIALS) {
        var allowEmailConnectorToUseCredentialsControl = Mscrm.FormControlInputBehavior
            .GetBehavior("allowemailconnectortousecredentials");
        !IsNull(allowEmailConnectorToUseCredentialsControl) &&
            allowEmailConnectorToUseCredentialsControl.set_disabled(false)
    } else {
        !
            IsNull($get("allowemailconnectortousecredentials")) &&
            ResetValue("allowemailconnectortousecredentials", false);
        !IsNull($get("password")) && ResetValue("password", null);
        !IsNull($get("username")) && ResetValue("username", null);
        !IsNull(Mscrm.FormControlInputBehavior.GetBehavior("allowemailconnectortousecredentials")) &&
            Mscrm.FormControlInputBehavior.GetBehavior("allowemailconnectortousecredentials").set_disabled(true)
    }
}