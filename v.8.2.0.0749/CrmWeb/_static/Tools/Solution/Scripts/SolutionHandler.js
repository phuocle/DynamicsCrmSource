Type.registerNamespace("Mscrm");
Mscrm.SolutionExportWizardReturnValue = function() {};
Mscrm.SolutionHandler = function() {};
Mscrm.SolutionHandler.publishSolution = function() { Mscrm.FormAction.onActionMenuClick("publishsolution", 7100) };
Mscrm.SolutionHandler.publishAllCustomization = function() {
    Mscrm.Performance.PerformanceMarkerManager.get_instance().clearAllMarkers();
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Publish All Customization - Start");
    setPerfMarkerTimestamp("PublishCutomizationStart");
    DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
    window.setTimeout(Mscrm.SolutionHandler.$1, 200)
};
Mscrm.SolutionHandler.prepareClientCustomizations = function() {
    DisplayActionMsg(window.LOCID_ENTUTL_PREPARINGENT, 400, 150);
    window.setTimeout(Mscrm.SolutionHandler.$0, 200)
};
Mscrm.SolutionHandler.$1 = function() {
    try {
        var $v_0 = new Mscrm.RemoteCommandXml("SystemCustomization", "PublishAllCustomizations"),
            $v_1 = $v_0.execute(null)
    } finally {
        HideActionMsg();
        var $v_2 = $get("areaSolutionComponentFrame");
        if (!IsNull($v_2)) {
            var $v_3 = $v_2.contentWindow.document;
            if (!IsNull($v_3)) {
                var $v_4 = $find("gridDisplayStrings");
                !IsNull($v_4) && $v_4.refresh()
            }
        }
        Mscrm.MetricsStopwatch.createRetroactiveStopwatch("Solution Publishing",
            window.self.PublishCutomizationStart,
            (new Date).getTime());
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Publish All Customization - End", 1)
    }
};
Mscrm.SolutionHandler.$0 = function() {
    try {
        var $v_0 = new Mscrm.RemoteCommandXml("SystemCustomization", "PrepareClientCustomizations"),
            $v_1 = $v_0.execute(null)
    } finally {
        HideActionMsg()
    }
};
Mscrm.SolutionHandler.importSolution = function() {
    var $v_0 = Mscrm.CrmUri.create("/tools/solution/import/SolutionImportWizard.aspx"),
        $v_1 = Mscrm.WindowInformation.getWindowInformation(9208);
    openStdWin($v_0, null, $v_1.Width, $v_1.Height, null)
};
Mscrm.SolutionHandler.openSolutionsMarketplace = function() {
    var $v_0 = window.DynamicsMarketplaceBehavior;
    if ($v_0)
        if ($v_0 === 1) {
            safeWindowOpen(Mscrm.CrmUri.create("https://go.microsoft.com/fwlink/p/?LinkId=799645"), null, null);
            return
        } else if ($v_0 === 2) {
            var $v_1 = new Xrm.DialogOptions;
            $v_1.width = window.AzureMarketplaceDialogWidth;
            $v_1.height = window.AzureMarketplaceDialogHeight;
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/Solution/marketplace.aspx").toString(),
                $v_1,
                null,
                null,
                null);
            return
        }
    openStdWin(Mscrm.CrmUri.create(SOLUTIONS_MARKETPLACE_URL),
        null,
        window.screen.availWidth * .9,
        window.screen.availHeight * .9,
        "scrollbars=1,toolbar=1,menubar=1,location=1")
};
Mscrm.SolutionHandler.exportSolution = function(solutionId) {
    var $v_0 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=BB1FACEB-E1F0-4FE7-91D3-8C9DEEB4885D");
    $v_0.get_query()["appSolutionId"] = solutionId;
    var $v_1 = Mscrm.WindowInformation.getWindowInformation(9207), $v_2 = new Xrm.DialogOptions;
    $v_2.width = $v_1.Width;
    $v_2.height = $v_1.Height;
    var $v_3 = [solutionId],
        $v_4 = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(Mscrm.SolutionHandler.exportSolutionWizardCallback, $v_3);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_4)
};
Mscrm.SolutionHandler.cloneSolution = function(cloneType) {
    var $v_0 = Mscrm.SolutionHandler.selectedElements();
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    if (Mscrm.SolutionHandler.isSolutionManaged() === "1") {
        alert(window.LOCID_CLONING_ERROR);
        return
    }
    if (Mscrm.SolutionHandler.isSolutionPatch()) {
        alert(window.LOCID_CLONING_PATCH_ERROR);
        return
    }
    var $v_1 = $find("crmGrid"),
        $v_2 = $v_1.get_selectedIds()[0],
        $v_3 = $v_1.getCellValue("uniquename", $v_2),
        $v_4 = $v_1.getCellValue("friendlyname", $v_2),
        $v_5 = $v_1.getCellValue("version", $v_2),
        $v_6 = Mscrm.CrmUri.create("/Tools/Solution/SolutionCloneOrPatch.aspx");
    $v_6.get_query()["solutionname"] = $v_3;
    $v_6.get_query()["displayname"] = $v_4;
    $v_6.get_query()["version"] = $v_5;
    $v_6.get_query()["clonetype"] = cloneType;
    $v_6.get_query()["solutionId"] = $v_2;
    var $v_7 = new Xrm.DialogOptions;
    $v_7.height = 300;
    $v_7.width = 500;
    Xrm.Internal.openDialog($v_6.toString(), $v_7, null, null, Mscrm.SolutionHandler.refreshGridCallback)
};
Mscrm.SolutionHandler.cloneToPatchOrSolution = function(cloneType,
    parentSolutionName,
    patchDisplayName,
    versionNumber,
    preAction,
    postAction) {
    versionNumber = Mscrm.Utilities.validateVersion(versionNumber);
    if (Mscrm.InternalUtilities._String.isNullOrEmpty(versionNumber)) return;
    var $v_0 = new RemoteCommand("Solution", cloneType, null);
    $v_0.SetParameter("parentSolutionName", parentSolutionName);
    $v_0.SetParameter("displayName", patchDisplayName);
    $v_0.SetParameter("versionNumber", versionNumber);
    var $v_1 = new Mscrm.AsyncJobCommandParameter;
    $v_1.cmd = $v_0;
    $v_1.preAction = preAction;
    $v_1.postAction = postAction;
    (new Mscrm.AsyncJobCommand($v_1)).executeCommand()
};
Mscrm.SolutionHandler.promoteSelectedSolution = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements();
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    var $v_1 = $find("crmGrid"),
        $v_2 = $v_1.get_selectedIds()[0],
        $v_3 = $v_1.getCellValue("uniquename", $v_2),
        $v_4 = Mscrm.CrmUri.create("/tools/solution/dlg_solutionUpgrade.aspx");
    $v_4.get_query()["solutionName"] = $v_3;
    var $v_5 = new Xrm.DialogOptions;
    $v_5.height = 275;
    $v_5.width = 570;
    Xrm.Internal.openDialog($v_4.toString(), $v_5, null, null, Mscrm.SolutionHandler.refreshGridCallback)
};
Mscrm.SolutionHandler.exportSolutionWizardCallback = function(result, solutionId) {
    if (!IsNull(result) && result.bExport) {
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_exportsolution.aspx");
        $v_0.get_query()["appSolutionId"] = solutionId;
        $v_0.get_query()["command"] = "exportsolution";
        $v_0.get_query()["ismanaged"] = result.bProtected ? "1" : "0";
        if (!isNullOrEmptyString(result.sTargetVersion)) $v_0.get_query()["targetVersion"] = result.sTargetVersion;
        if (!isNullOrEmptyString(result.sOptionsXML)) $v_0.get_query()["optionxml"] = result.sOptionsXML;
        !isNullOrEmptyString(result.wrpcTokenAsQueryString) && $v_0.appendToQuery(result.wrpcTokenAsQueryString);
        Mscrm.SolutionHandler.doExportWithFileContent($v_0.toString(), result.sFileContent)
    }
};
Mscrm.SolutionHandler.doExport = function(url) { Mscrm.SolutionHandler.doExportWithFileContent(url, null) };
Mscrm.SolutionHandler.doExportWithFileContent = function(url, fileContent) {
    var $v_0 = window.document.getElementsByName("exportWizardFormId")[0];
    if (IsNull($v_0)) {
        $v_0 = window.document.createElement("form");
        $v_0.setAttribute("name", "exportWizardFormId");
        $v_0.setAttribute("method", "post");
        $v_0.setAttribute("style", "display:none");
        document.body.appendChild($v_0)
    }
    var $v_1 = null;
    if (!isNullOrEmptyString(fileContent)) {
        $v_1 = window.document.createElement("input");
        $v_1.type = "hidden";
        $v_1.name = "fileContent";
        $v_1.value = fileContent;
        $v_0.appendChild($v_1)
    }
    $v_0.action = url;
    $v_0.target = "exportFrame";
    $v_0.submit();
    !IsNull($v_1) && $v_0.removeChild($v_1)
};
Mscrm.SolutionHandler.exportTranslation = function(solutionId) {
    if (Mscrm.SolutionHandler.isSolutionManaged() === "1") {
        confirm(window.LOCID_EXPORT_TRANSLATION_ERROR);
        return
    }
    if (confirm(window.LOCID_EXPORT_TRANSLATION_WARN)) {
        var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_exportsolution.aspx");
        $v_0.get_query()["appSolutionId"] = solutionId;
        $v_0.get_query()["command"] = "exporttranslation";
        Mscrm.SolutionHandler.doExport($v_0.toString())
    }
};
Mscrm.SolutionHandler.importTranslation = function(solutionId) {
    var $v_0 = Mscrm.CrmUri.create("/tools/muiProvisioning/Dialogs/LangTranslationsImport.aspx");
    $v_0.get_query()["appSolutionId"] = solutionId;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 270;
    $v_1.width = 600;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
};
Mscrm.SolutionHandler.importTranslationFromGrid = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements(), $v_1 = null;
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    $v_1 = $v_0[0];
    Mscrm.SolutionHandler.importTranslation($v_1)
};
Mscrm.SolutionHandler.selectedElements = function() { return getSelected("crmGrid") };
Mscrm.SolutionHandler.isSolutionManaged = function() {
    var $v_0 = $find("crmGrid");
    if (!$v_0) return "0";
    else {
        var $v_1 = $v_0.get_selectedIds()[0];
        return $v_0.getCellValue("ismanaged", $v_1)
    }
};
Mscrm.SolutionHandler.isSolutionPatch = function() {
    var $v_0 = $find("crmGrid");
    if (!$v_0) return false;
    else {
        var $v_1 = $v_0.get_selectedIds()[0];
        return !IsNull($v_0.getCellValue("parentsolutionid", $v_1))
    }
};
Mscrm.SolutionHandler.publishFromGrid = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements(), $v_1 = null;
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    $v_1 = $v_0[0];
    Xrm.Internal.doAction("crmGrid", 7100, "publishsolution", $v_1)
};
Mscrm.SolutionHandler.deleteSolution = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements();
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    var $v_1 = $v_0[0], $v_2 = Mscrm.CrmUri.create("/tools/solution/dlg_uninstall.aspx");
    $v_2.get_query()["id"] = $v_1;
    var $v_3 = new Xrm.DialogOptions;
    $v_3.height = 275;
    $v_3.width = 570;
    Xrm.Internal.openDialog($v_2.toString(), $v_3, null, null, Mscrm.SolutionHandler.refreshGridCallback)
};
Mscrm.SolutionHandler.refreshGridCallback = function() { refreshGrid("crmGrid") };
Mscrm.SolutionHandler.exportSolutionFromGrid = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements();
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    var $v_1 = $v_0[0];
    Mscrm.SolutionHandler.exportSolution($v_1)
};
Mscrm.SolutionHandler.exportTranslationFromGrid = function() {
    var $v_0 = Mscrm.SolutionHandler.selectedElements(), $v_1 = "";
    if ($v_0.length < 1) {
        alert(window.LOCID_SELECTONE_WARN);
        return
    }
    if ($v_0.length > 1) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return
    }
    $v_1 = $v_0[0];
    Mscrm.SolutionHandler.exportTranslation($v_1)
};
Mscrm.SolutionHandler.onDisplayNameChange = function() {
    var $v_0 = $get("crmFormSubmit");
    if (!IsNull($v_0))
        if (IsNull($v_0.crmFormSubmitId.value) || $v_0.crmFormSubmitId.value === "") {
            var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("friendlyname"),
                $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("uniquename"),
                $v_3 = $v_1.get_dataValue(),
                $v_4 = $v_2.get_dataValue();
            if (!IsNull($v_3) && $v_3.length > 0 && (IsNull($v_4) || !$v_4.length)) {
                var $v_5 = new RegExp("[^A-Za-z0-9_]", "g");
                $v_2.set_dataValue($v_3.replace($v_5, "").substr(0, $v_2.get_maxLength()))
            }
        }
};
Mscrm.SolutionExportWizardReturnValue.registerClass("Mscrm.SolutionExportWizardReturnValue");
Mscrm.SolutionHandler.registerClass("Mscrm.SolutionHandler")