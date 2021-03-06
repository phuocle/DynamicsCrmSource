Type.registerNamespace("Mscrm");
Mscrm.BulkDelete_0 = function() {
    var windowInf = GetWindowInformation(BulkDeleteWizardDialog), options = new Xrm.DialogOptions;
    options.width = windowInf.Width;
    options.height = windowInf.Height;
    var url = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=A50E9478-8EC9-45ab-B927-FDFFF64A0729");
    Xrm.Internal.openDialog(url.toString(), options, null, null, null)
};
Mscrm.DuplicateDetection_0 = function() {
    var windowInf = GetWindowInformation(DuplicateDetectionDialog), options = new Xrm.DialogOptions;
    options.width = windowInf.Width;
    options.height = windowInf.Height;
    var url = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=3E4792DF-42CC-4b6b-B7E6-E197B4986EFF");
    Xrm.Internal.openDialog(url.toString(), options, null, null, null)
};
Mscrm.HelpAbout_0 = function() { openStdDlg(Mscrm.CrmUri.create("/about/default.aspx"), "MSCRMAbout", 570, 548) };
Mscrm.HelpCrmLive_0 = function() {
    safeWindowOpen(Mscrm.CrmUri.create("http://go.microsoft.com/fwlink/?LinkId=35152&clcid=0x" +
            USER_LANGUAGE_CODE.toString(16)),
        "MSCRMLive",
        "width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1")
};
Mscrm.HelpUpdatesOutlook_0 = function() {
    safeWindowOpen(Mscrm.CrmUri.create("http://go.microsoft.com/fwlink/?LinkId=76815"),
        "HelpUpdates",
        "width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1")
};
Mscrm.HelpUpdatesWeb_0 = function() {
    safeWindowOpen(Mscrm.CrmUri.create("http://go.microsoft.com/fwlink/?LinkId=76816"),
        "HelpUpdates",
        "width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1")
};
Mscrm.ImportData_0 = function() {
    if (Mscrm.IsIos_0()) {
        alert(LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var windowInf = GetWindowInformation(ImportWizardDialog), options = new Xrm.DialogOptions;
    options.width = windowInf.Width;
    options.height = windowInf.Height;
    var url = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=A0E9DC09-8730-4C97-A8B9-6F585C0C16F7");
    Xrm.Internal.openDialog(url.toString(),
        options,
        null,
        null,
        function(result) {
            if (result) {
                if (isOutlookHostedWindow()) {
                    getOutlookHostedWindow().refreshGrid();
                    return
                }
                var gridControl = $find("crmGrid");
                if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) gridControl.Refresh();
                else if (window.top.document.getElementById("crmContentPanel")) {
                    currentContentId = window.top.document.getElementById("crmContentPanel")
                        .getAttribute("currentContentId");
                    var find = $get(currentContentId).contentWindow.$find;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(find)) gridControl = find("crmGrid");
                    !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.Refresh()
                }
            }
        });
    try {
        var arguments = {};
        arguments["context"] = "grid";
        arguments["dialogName"] = "ImportData";
        arguments["entityId"] = "";
        arguments["gridType"] = "";
        arguments["userRoleId"] = window.USER_ROLES.toString();
        Mscrm.MetricsReporting.instance().addMetric("dialogs", arguments)
    } catch (e) {
    }
};
Mscrm.ExportDataTemplate_0 = function(selectedEntityTypeName) {
    if (Mscrm.IsIos_0()) {
        alert(LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    var createTemplateUri = Mscrm.CrmUri.create("/tools/importwizard/createtemplate.aspx?entityName=" +
        selectedEntityTypeName);
    if (window.IS_OUTLOOK_CLIENT) {
        var documentType = 1,
            exportProgressUri = Mscrm.CrmUri.create("/_grid/print/export_progress.aspx?documentType=" + documentType),
            progressDialogArgs = { isTemplate: true, createTemplateUri: createTemplateUri };
        openStdDlg(exportProgressUri, progressDialogArgs, 580, 180)
    } else window.location.href = createTemplateUri.toString()
};
Mscrm.IsIos_0 = function() {
    return navigator.userAgent != "" &&
        navigator.userAgent != null &&
        (navigator.userAgent.toLowerCase().search("ipad") > -1 ||
            navigator.userAgent.toLowerCase().search("ipod") > -1 ||
            navigator.userAgent.toLowerCase().search("iphone") > -1)
};
Mscrm.IsIEBrowser_0 = function() { return navigator.appName == "Microsoft Internet Explorer" }