Type.registerNamespace("Mscrm");
Mscrm.CustomizationLevel = function() {};
Mscrm.CustomizationLevel.prototype = {
    customizationNone: 0,
    customizationEntity: 1,
    customizationAttribute: 2,
    customizationPicklist: 3
};
Mscrm.CustomizationLevel.registerEnum("Mscrm.CustomizationLevel", false);

function ImportWizardPage_OnLoad() { RegisterAuthExpiryReminder() }

function GetNextWizardPageUrl(currentPage) {
    var $v_0 = FindStringInArray(Mscrm.PageSequence.advancedModePages, currentPage),
        $v_1 = Mscrm.PageSequence.advancedModePages[$v_0 + 1];
    return Mscrm.CrmUri.create("/Tools/ImportWizard/" + $v_1 + ".aspx").toString()
}

function FindStringInArray(array, str) {
    for (var $v_0 = 0; $v_0 < array.length; $v_0++) if (array[$v_0] === str) return $v_0;
    return -1
}

function CallImportWebService(methodName, propertiesToPost, funAsyncCallbackFunction) {
    var $v_0 = new RemoteCommand("ImportWebService", methodName), $v_1 = ConstructPostData(propertiesToPost);
    $v_0.SetParameter("wizardDataXml", $v_1);
    return $v_0.Execute(funAsyncCallbackFunction)
}

function ConstructPostData(propertiesList) {
    for (var $v_0 = "<ImportWizardData>", $v_1 = 0; $v_1 < propertiesList.length; $v_1++) {
        var $v_2 = propertiesList[$v_1], $v_3 = WizardGetProperty($v_2);
        if (IsNull($v_3)) continue;
        if ($v_2 !== "MapXml") $v_3 = CrmEncodeDecode.CrmXmlEncode($v_3);
        $v_0 = $v_0 + "<" + $v_2 + ">" + $v_3 + "</" + $v_2 + ">"
    }
    $v_0 = $v_0 + "</ImportWizardData>";
    return $v_0
}

function disableAllButtons() {
    WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
    WizardSetButtonEnabled(false, _WizardButtonsEnum.BACKBUTTON);
    WizardSetButtonEnabled(false, _WizardButtonsEnum.CANCELBUTTON)
}

function enableAllButtons() {
    WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
    WizardSetButtonEnabled(true, _WizardButtonsEnum.BACKBUTTON);
    WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON)
}

function GetImportMapXml(propertiesToPost) {
    var $v_0 = CallImportWebService("GetImportMapXml", propertiesToPost);
    if (!$v_0.Success) return false;
    WizardSetProperty("MapXml", $v_0.ReturnValue);
    return true
}

function OnWizardUnload(eventObject) {
    WizardHasProperty("ImportId") &&
        !(WizardHasProperty("IsImportJobSubmitted") && Boolean.parse(WizardGetProperty("IsImportJobSubmitted"))) &&
        DeleteImportFilesInThisSession(OnDeleteDone)
}

function DeleteImportFilesInThisSession(funAsyncCallbackFunction) {
    var $v_0 = new RemoteCommand("ImportWebService", "DeleteImport");
    $v_0.SetParameter("importId", WizardGetProperty("ImportId"));
    return $v_0.Execute(funAsyncCallbackFunction)
}

function OnDeleteDone(result, cmd) {}

function SetProgressMessageDisplayState(bShow) {
    var $v_0 = $get("progressDiv"), $v_1 = $get("mainBody");
    if (bShow) {
        $v_0.style.display = "inline";
        $v_1.style.display = "none"
    } else if (!bShow) {
        $v_0.style.display = "none";
        $v_1.style.display = "block"
    }
}

Mscrm.PageSequence = function() {};
Mscrm.PageSequence.registerClass("Mscrm.PageSequence");
Mscrm.PageSequence.advancedModePages = [
    "UploadFilePage", "UploadPreviewPage", "DataSourcePage", "EntityMapPage", "AttributeMapPage", "MapSummaryPage",
    "CustomizeImportPage", "FinishPage"
]