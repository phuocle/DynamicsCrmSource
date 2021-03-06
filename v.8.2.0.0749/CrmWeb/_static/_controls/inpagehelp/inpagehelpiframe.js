
function ExecuteAction(actionName, etc, event) {
    var e;
    if (event)
        e = event;
    else
        e = window.event;
    var parentFrame = parent;
    if (isOutlookHostedWindow() && getOutlookHostedWindow().HelpVisorScriptTarget != null)
        parentFrame = getOutlookHostedWindow().HelpVisorScriptTarget;
    if (parentFrame.IsOutlookClient())
        parentFrame.AppendBaseSchemeAndHost = true;
    else
        parentFrame.Mscrm.SessionInfo.set_appendBaseSchemeAndHost(true);
    if (e) {
        var actionLink = e.srcElement;
        if (actionName == null)
            actionName = actionLink.action;
        if (etc == null)
            etc = actionLink.etc
    }
    switch (actionName) {
    case "importdata":
    case "exporttoexcel":
    case "importdatamap":
    case "downloaddataimporttemplate":
    case "managesampledata":
    case "importcontacts":
    case "addusers":
        if (parentFrame.Mscrm.Utilities.isIosDevice()) {
            alert(parentFrame.LOCID_UNSUPPORTED_RIBBONACTION);
            return
        }
        break
    }
    switch (actionName) {
    case "importdata":
        if (parentFrame.IsOnline()) {
            var windowInf = parentFrame.Mscrm.WindowInformation
                    .getWindowInformation(parentFrame.Mscrm.EntityTypeCode.ImportWizardDialog),
                windowUrl = parentFrame.Mscrm.CrmUri
                    .updateCrmUriHostAndScheme(parentFrame.Mscrm.CrmUri
                        .create("/WebWizard/WizardContainer.aspx?WizardId=A0E9DC09-8730-4C97-A8B9-6F585C0C16F7")),
                dialogOptions = new Xrm.DialogOptions;
            dialogOptions.height = windowInf.Height;
            dialogOptions.width = windowInf.Width;
            Xrm.Internal.openDialog(windowUrl.toString(),
                dialogOptions,
                null,
                null,
                function(result) {
                    result &&
                        parentFrame.auto(parentFrame.ImportFile)
                })
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "customize":
        if (parentFrame.IsOnline())
            if (UserAndOrgLanguagesMatch(parentFrame)) {
                var oUrl = parentFrame.Mscrm.CrmUri.create("/Tools/SystemCustomization/Entities/manageEntity.aspx");
                oUrl.get_query()["etc"] = etc;
                var windowInfo = parentFrame.Mscrm.WindowInformation
                        .getWindowInformation(parentFrame.Mscrm.EntityTypeCode.Entity),
                    windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl);
                parentFrame.openStdWin(windowUrl.toString(), null, windowInfo.Width, windowInfo.Height)
            } else
                alert(parentFrame.LOCID_NOT_AVAILABLE_IN_MUI);
        else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "detectduplicates":
        if (parentFrame.IsOnline()) {
            var sGridName = "crmGrid",
                sObjId = "detectduplicatesallrecords";
            if (parentFrame.isOutlookHostedWindow())
                try {
                    parent.doAction(sGridName, parseInt(etc, 10), sObjId)
                } catch (err) {
                    parentFrame.doAction(sGridName, parseInt(etc, 10), sObjId)
                }
            else
                parentFrame.doAction(sGridName, parseInt(etc, 10), sObjId)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "personalsettings":
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 695;
        dialogOptions.width = 900;
        var parameters = new Array(e),
            callbackFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(executeActionCallback, parameters),
            windowUrl = parentFrame.Mscrm.CrmUri
                .updateCrmUriHostAndScheme(parentFrame.Mscrm.CrmUri
                    .create("/tools/personalsettings/dialogs/personalsettings.aspx"));
        Xrm.Internal.openDialog(windowUrl.toString(), dialogOptions, null, null, callbackFunction);
        return false;
    case "systemsettings":
        if (parentFrame.IsOnline()) {
            var dialogOptions = new Xrm.DialogOptions;
            dialogOptions.height = 600;
            dialogOptions.width = 900;
            var parameters = new Array(e),
                callbackFunction = Mscrm.Utilities
                    .createCallbackFunctionForXrmDialog(executeActionCallback, parameters),
                windowUrl = parentFrame.Mscrm.CrmUri
                    .updateCrmUriHostAndScheme(parentFrame.Mscrm.CrmUri
                        .create("/tools/systemsettings/dialogs/systemsettings.aspx"));
            Xrm.Internal.openDialog(windowUrl.toString(), dialogOptions, null, null, callbackFunction)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        return false;
    case "addusers":
        if (parentFrame.IsOnline()) {
            var windowUrl = parentFrame.Mscrm.CrmUri
                    .updateCrmUriHostAndScheme(parentFrame.Mscrm.CrmUri
                        .create("/WebWizard/WizardContainer.aspx?WizardId=2631659F-A668-4A48-833B-D20E187B5A89")),
                dialogOptions = new Xrm.DialogOptions;
            dialogOptions.width = 800;
            dialogOptions.height = 530;
            Xrm.Internal.openDialog(windowUrl.toString(), dialogOptions, null, null, null)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "exporttoexcel":
        if (parentFrame.isRichClient())
            getOutlookHostedWindow().ExportToExcel();
        else
            parentFrame.$find("crmGrid").ExportToExcel();
        break;
    case "quickcampaign":
        if (parentFrame.IsOnline())
            parentFrame.doAction("crmGrid", parseInt(etc, 10), "minicampaignallitemsonview");
        else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "advancedfind":
        var oUrl = parentFrame.Mscrm.CrmUri.create("/AdvancedFind/AdvFind.aspx");
        oUrl.get_query()["EntityCode"] = etc;
        var windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl);
        parentFrame.openStdWin(windowUrl.toString(), null, 700, 600);
        break;
    case "importdatamap":
        if (parentFrame.IsOnline()) {
            var oUrl = parentFrame.Mscrm.CrmUri.create("/_grid/cmds/dlg_uploadimportmap.aspx"),
                windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl),
                dialogOptions = new Xrm.DialogOptions;
            dialogOptions.height = 325;
            dialogOptions.width = 400;
            Xrm.Internal.openDialog(windowUrl.toString(), dialogOptions, null, null, null)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "downloaddataimporttemplate":
        if (parentFrame.IsOnline()) {
            var oUrl = parentFrame.Mscrm.CrmUri.create("/tools/importwizard/landingpage.aspx"),
                windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl);
            parentFrame.openStdWin(windowUrl.toString(), null, 500, 300, true)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "managesampledata":
        if (parentFrame.IsOnline()) {
            var oUrl = parentFrame.Mscrm.CrmUri.create("/tools/importwizard/sampledata.aspx"),
                windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl);
            parentFrame.openStdWin(windowUrl.toString(), null, 500, 210, true)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "newworkflow":
        if (parentFrame.IsOnline())
            parentFrame.openObj(parentFrame.Workflow);
        else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "setupduplicatedetection":
        if (parentFrame.IsOnline()) {
            var oUrl = parentFrame.Mscrm.CrmUri
                    .create("/tools/duplicatedetection/duplicatedetectionsettings/duplicatedetectionsettings.aspx"),
                windowUrl = parentFrame.Mscrm.CrmUri.updateCrmUriHostAndScheme(oUrl);
            parentFrame.openStdDlg(windowUrl.toString(), null, 540, 450, true)
        } else
            alert(parentFrame.LOCID_NOT_AVAILABLE_OFFLINE);
        break;
    case "importcontacts":
        getOutlookHostedWindow().ShowContactImportWizard();
        break
    }
    ExecuteActionCallback(true, e);
    return false
}

function ExecuteActionCallback(retValue, e) {
    var parentFrame = parent;
    if (window.external != null && window.external.HelpVisorScriptTarget != null)
        parentFrame = window.external.HelpVisorScriptTarget;
    cancelEvent(e);
    if (parentFrame.IsOutlookClient())
        parentFrame.AppendBaseSchemeAndHost = false;
    else
        parentFrame.Mscrm.SessionInfo.set_appendBaseSchemeAndHost(false)
}

function cancelEvent(e) {
    if (!e)
        return;
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false
}

function UserAndOrgLanguagesMatch(frame) {
    return frame.ORG_LANGUAGE_CODE == frame.USER_LANGUAGE_CODE
}