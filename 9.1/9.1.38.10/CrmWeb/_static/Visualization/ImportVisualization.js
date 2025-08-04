Type.registerNamespace('Mscrm');

Mscrm.ImportVisualizationDialog = function() {
}
Mscrm.ImportVisualizationDialog.get_visualizationType = function() {
    return Mscrm.ImportVisualizationDialog.$0;
}
Mscrm.ImportVisualizationDialog.set_visualizationType = function(value) {
    Mscrm.ImportVisualizationDialog.$0 = value;
    return value;
}
Mscrm.ImportVisualizationDialog.get_isKeepBothAllowed = function() {
    return Mscrm.ImportVisualizationDialog.$1;
}
Mscrm.ImportVisualizationDialog.get_isReplaceAllowed = function() {
    return (Mscrm.ImportVisualizationDialog.$3 && ((Mscrm.ImportVisualizationDialog.$0 === 1111) || (Number.parseInvariant(Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType) === 1112)) && Mscrm.ImportVisualizationDialog.paramObj.duplicateCount === 1);
}
Mscrm.ImportVisualizationDialog.get_$4 = function() {
    return $get('btn_success_close');
}
Mscrm.ImportVisualizationDialog.visualizationImportFailureCallBack = function(errorDetails) {
    Mscrm.ImportVisualizationDialog.$2();
    var $v_0 = $get('errorHeaderSpan');
    var $v_1 = $get('errorBodySpan');
    var $v_2 = $get('visualizationErrorArea');
    $v_0.style.display = 'inline';
    $v_1.style.display = 'inline';
    if (!IsNull($v_2)) {
        $v_2.innerHTML = errorDetails;
    }
}
Mscrm.ImportVisualizationDialog.uploadChartXml = function() {
    var $v_0 = ($get('uploadFileFrame')).contentWindow.document;
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = $v_0.getElementById('fileUpload');
    var $v_2 = $v_0.getElementById('vizType');
    if (IsNull($v_1) || IsNull($v_2)) {
        return;
    }
    if ($v_1.value === '') {
        alert(window.LOCID_VPD_IV_MISSINGFILE_ERR);
        return;
    }
    else {
        var $v_3 = $v_1.value;
        $v_3 = $v_3.substring($v_3.lastIndexOf('\\') + 1, $v_3.length);
        var $v_4 = $v_3.substring($v_3.lastIndexOf('.') + 1, $v_3.length).toLowerCase();
        if ($v_4 !== 'xml') {
            alert(window.LOCID_VPD_IV_INVALID_FILETYPE);
            return;
        }
        try {
            $v_2.value = Mscrm.ImportVisualizationDialog.$0.toString();
            ($v_0.getElementById('fileUploadForm')).submit();
            Mscrm.ImportVisualizationDialog.showImportWaitingSpan(true);
        }
        catch ($$e_5) {
            Mscrm.ImportVisualizationDialog.showImportWaitingSpan(false);
            alert(String.format(window.LOCID_VPD_IV_INVALIDFILE_ERR, $v_3));
        }
    }
}
Mscrm.ImportVisualizationDialog.proceedWithImport = function(visualizationXml, visualizationName, description, duplicateFound, suggestedName, entityLogicalName, visualizationId, duplicateVisId, duplicateVisIdName, duplicateVisType, entityDisplayName, entityPluralDisplayName, updateAllowed, createAllowed, duplicateCount) {
    Mscrm.ImportVisualizationDialog.paramObj = new Mscrm.VisualizationImportParameter();
    Mscrm.ImportVisualizationDialog.paramObj.visualizationXml = visualizationXml;
    Mscrm.ImportVisualizationDialog.paramObj.visualizationName = visualizationName;
    Mscrm.ImportVisualizationDialog.paramObj.description = description;
    Mscrm.ImportVisualizationDialog.paramObj.duplicateFound = duplicateFound;
    Mscrm.ImportVisualizationDialog.paramObj.suggestedName = suggestedName;
    Mscrm.ImportVisualizationDialog.paramObj.entityLogicalName = entityLogicalName;
    Mscrm.ImportVisualizationDialog.paramObj.visualizationId = visualizationId;
    Mscrm.ImportVisualizationDialog.paramObj.duplicateVisId = duplicateVisId;
    Mscrm.ImportVisualizationDialog.paramObj.duplicateVisIdName = duplicateVisIdName;
    Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType = duplicateVisType;
    Mscrm.ImportVisualizationDialog.paramObj.entityDisplayName = entityDisplayName;
    Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName = entityPluralDisplayName;
    Mscrm.ImportVisualizationDialog.paramObj.duplicateCount = duplicateCount;
    Mscrm.ImportVisualizationDialog.$3 = updateAllowed;
    Mscrm.ImportVisualizationDialog.$1 = createAllowed;
    if (duplicateFound) {
        Mscrm.ImportVisualizationDialog.$7();
    }
    else {
        Mscrm.ImportVisualizationDialog.paramObj.visualizationId = '';
        Mscrm.ImportVisualizationDialog.$6();
    }
}
Mscrm.ImportVisualizationDialog.$7 = function() {
    var $v_0 = '';
    var $v_1 = new Sys.StringBuilder();
    if (!isNullOrEmptyString(Mscrm.ImportVisualizationDialog.paramObj.duplicateVisId) && Mscrm.ImportVisualizationDialog.paramObj.duplicateVisId.toUpperCase() === Mscrm.ImportVisualizationDialog.paramObj.visualizationId.toUpperCase()) {
        if (Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType === '1111' && Mscrm.ImportVisualizationDialog.$0 !== 1111) {
            $v_0 = String.format(window.LOCID_VPD_IV_DUPE_SYS_ID_TEXT, Mscrm.ImportVisualizationDialog.paramObj.duplicateVisIdName, Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName);
        }
        else {
            $v_0 = String.format(window.LOCID_VPD_IV_DUPE_USER_ID_TEXT, Mscrm.ImportVisualizationDialog.paramObj.duplicateVisIdName, Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName);
        }
    }
    else {
        if (Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType === '1111' && Mscrm.ImportVisualizationDialog.$0 !== 1111) {
            $v_0 = String.format(window.LOCID_VPD_IV_DUPE_SYS_NAME_TEXT, Mscrm.ImportVisualizationDialog.paramObj.visualizationName, Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName);
        }
        else {
            $v_0 = String.format(window.LOCID_VPD_IV_DUPE_USER_NAME_TEXT, Mscrm.ImportVisualizationDialog.paramObj.visualizationName, Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName);
        }
    }
    if (Mscrm.ImportVisualizationDialog.get_isReplaceAllowed()) {
        $v_1.append(CrmEncodeDecode.CrmHtmlEncode(window.LOCID_VPD_IV_DUPE_REPLACE_OPT) + '<br />');
    }
    if (Mscrm.ImportVisualizationDialog.$1) {
        $v_1.append(CrmEncodeDecode.CrmHtmlEncode(window.LOCID_VPD_IV_DUPE_KEEPBOTH_OPT) + '<br />');
    }
    $v_1.append(CrmEncodeDecode.CrmHtmlEncode(window.LOCID_VPD_IV_DUPE_CANCEL_OPT));
    Mscrm.ImportVisualizationDialog.$8();
    Mscrm.ImportVisualizationDialog.$2();
    var $v_2 = $get('duplicateHeaderSpan');
    var $v_3 = $get('duplicateBodySpan');
    var $v_4 = $get('duplicateMessageLabel');
    var $v_5 = $get('duplicateMessageOption');
    $v_2.style.display = 'inline';
    $v_3.style.display = 'inline';
    $v_4.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_0);
    $v_5.innerHTML = $v_1.toString();
}
Mscrm.ImportVisualizationDialog.btnKeepBoth = function() {
    Mscrm.ImportVisualizationDialog.paramObj.visualizationId = '';
    Mscrm.ImportVisualizationDialog.$6();
}
Mscrm.ImportVisualizationDialog.$6 = function() {
    Mscrm.ImportVisualizationDialog.$2();
    var $v_0 = $get('nameAndDescSelectionHeader');
    var $v_1 = $get('nameAndDescSelectionBody');
    $v_0.style.display = 'inline';
    $v_1.style.display = 'inline';
    var $v_2 = $get('visualizationNameControl');
    var $v_3 = $get('visualizationDescriptionControl');
    var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior('visualizationNameControl');
    var $v_5 = Mscrm.FormControlInputBehavior.GetBehavior('visualizationDescriptionControl');
    $v_4.set_dataValue(Mscrm.ImportVisualizationDialog.paramObj.suggestedName);
    $v_2.defaultValue = Mscrm.ImportVisualizationDialog.paramObj.suggestedName;
    $v_5.set_dataValue(Mscrm.ImportVisualizationDialog.paramObj.description);
    $v_3.defaultValue = Mscrm.ImportVisualizationDialog.paramObj.description;
}
Mscrm.ImportVisualizationDialog.$C = function() {
    var $v_0 = $get('visualizationNameControl');
    Mscrm.ImportVisualizationDialog.paramObj.visualizationName = $v_0.value.trim();
    var $v_1 = $get('visualizationDescriptionControl');
    Mscrm.ImportVisualizationDialog.paramObj.description = $v_1.value.trim();
}
Mscrm.ImportVisualizationDialog.$D = function() {
    Mscrm.ImportVisualizationDialog.paramObj.visualizationId = Mscrm.ImportVisualizationDialog.paramObj.duplicateVisId;
    if (isNullOrEmptyString(Mscrm.ImportVisualizationDialog.paramObj.visualizationName)) {
        Mscrm.ImportVisualizationDialog.paramObj.visualizationName = Mscrm.ImportVisualizationDialog.paramObj.duplicateVisIdName;
    }
}
Mscrm.ImportVisualizationDialog.checkRequiredParamForImport = function() {
    var $v_0 = $get('visualizationNameControl');
    if (isNullOrEmptyString($v_0.value.trim())) {
        $v_0.DataValue = '';
        $v_0.focus();
        return false;
    }
    return true;
}
Mscrm.ImportVisualizationDialog.$2 = function() {
    var $v_0 = $get('uploadFileHeaderSpan');
    var $v_1 = $get('uploadFileBodySpan');
    var $v_2 = $get('duplicateHeaderSpan');
    var $v_3 = $get('duplicateBodySpan');
    var $v_4 = $get('errorHeaderSpan');
    var $v_5 = $get('errorBodySpan');
    var $v_6 = $get('nameAndDescSelectionHeader');
    var $v_7 = $get('nameAndDescSelectionBody');
    var $v_8 = $get('successHeaderSpan');
    var $v_9 = $get('successBodySpan');
    $v_0.style.display = 'none';
    $v_1.style.display = 'none';
    $v_2.style.display = 'none';
    $v_3.style.display = 'none';
    $v_4.style.display = 'none';
    $v_5.style.display = 'none';
    $v_6.style.display = 'none';
    $v_7.style.display = 'none';
    $v_8.style.display = 'none';
    $v_9.style.display = 'none';
}
Mscrm.ImportVisualizationDialog.$8 = function() {
    if (Mscrm.ImportVisualizationDialog.paramObj.duplicateFound) {
        if (Mscrm.ImportVisualizationDialog.$1) {
            $get('btn_KeepBoth').disabled = false;
        }
        else {
            $get('btn_KeepBoth').disabled = true;
        }
        if (Mscrm.ImportVisualizationDialog.get_isReplaceAllowed()) {
            $get('btn_Replace').disabled = false;
        }
        else {
            $get('btn_Replace').disabled = true;
        }
    }
}
Mscrm.ImportVisualizationDialog.showImportWaitingSpan = function(show) {
    var $v_0 = $get('importWizardBody');
    var $v_1 = $get('importWaitingSpan');
    if (!IsNull($v_0) && !IsNull($v_1)) {
        if (show) {
            $v_0.style.display = 'none';
            $v_1.style.display = 'inline';
        }
        else {
            $v_1.style.display = 'none';
            $v_0.style.display = 'inline';
        }
    }
}
Mscrm.ImportVisualizationDialog.importChart = function(keepBoth) {
    Mscrm.ImportVisualizationDialog.showImportWaitingSpan(true);
    window.setTimeout(function() {
        Mscrm.ImportVisualizationDialog.$B(keepBoth);
    }, 0);
}
Mscrm.ImportVisualizationDialog.$B = function($p0) {
    if ($p0) {
        Mscrm.ImportVisualizationDialog.$C();
    }
    else {
        Mscrm.ImportVisualizationDialog.$D();
    }
    if (!isNullOrEmptyString(Mscrm.ImportVisualizationDialog.paramObj.visualizationId)) {
        if (Number.parseInvariant(Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType) === 1111 && Mscrm.ImportVisualizationDialog.$0 !== 1111) {
        }
    }
    var $v_0 = null;
    var $v_1 = new RemoteCommand('PaneWebService', 'ImportChart', null);
    $v_1.ErrorHandler = Mscrm.ImportVisualizationDialog.$9;
    $v_1.SetParameter('name', Mscrm.ImportVisualizationDialog.paramObj.visualizationName);
    $v_1.SetParameter('description', Mscrm.ImportVisualizationDialog.paramObj.description);
    $v_1.SetParameter('visualizationType', Mscrm.ImportVisualizationDialog.$0);
    $v_1.SetParameter('visualizationId', Mscrm.ImportVisualizationDialog.paramObj.visualizationId);
    $v_1.SetParameter('visualizationXml', Mscrm.ImportVisualizationDialog.paramObj.visualizationXml);
    $v_1.SetParameter('entityLogicalName', Mscrm.ImportVisualizationDialog.paramObj.entityLogicalName);
    if ($p0) {
        $v_1.SetParameter('checkDuplicate', 'true');
    }
    else {
        $v_1.SetParameter('checkDuplicate', 'false');
    }
    $v_0 = $v_1.Execute(null);
    if ($v_0.Success) {
        var $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0.ReturnValue.toString());
        Mscrm.ImportVisualizationDialog.showImportWaitingSpan(false);
        if ($v_2.DuplicateFound) {
            Mscrm.ImportVisualizationDialog.paramObj.duplicateFound = $v_2.DuplicateFound;
            Mscrm.ImportVisualizationDialog.paramObj.suggestedName = $v_2.SuggestedName;
            Mscrm.ImportVisualizationDialog.paramObj.duplicateVisId = $v_2.VisualizationId;
            Mscrm.ImportVisualizationDialog.paramObj.duplicateVisIdName = $v_2.VisualizationName;
            Mscrm.ImportVisualizationDialog.paramObj.duplicateVisType = $v_2.VisualizationType.toString();
            Mscrm.ImportVisualizationDialog.paramObj.duplicateCount = $v_2.DuplicateCount;
            Mscrm.ImportVisualizationDialog.$7();
            return;
        }
        Mscrm.ImportVisualizationDialog.$A($v_0);
        return;
    }
}
Mscrm.ImportVisualizationDialog.$9 = function($p0, $p1) {
    if (IsNull($p0)) {
        $p0 = 'Not available';
    }
    var $v_0 = '';
    var $v_1 = null;
    if (!IsNull($p1)) {
        var $v_3 = XUI.Xml.SelectSingleNode($p1, 'error/description', null);
        if (!IsNull($v_3)) {
            $v_0 = XUI.Xml.GetText($v_3);
        }
        $v_1 = Mscrm.ErrorInformation.createFromDoc(XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode($p1, 'error', null))));
    }
    var $v_2 = Mscrm.Utilities.createCallbackFunctionObject('closeDialog', Mscrm.ImportVisualizationDialog, null, false);
    openErrorDlg($p0, $v_0, $v_1, -1, -1, $v_2);
}
Mscrm.ImportVisualizationDialog.$A = function($p0) {
    Mscrm.ImportVisualizationDialog.$2();
    var $v_0 = $get('successHeaderSpan');
    var $v_1 = $get('successBodySpan');
    $v_0.style.display = 'inline';
    $v_1.style.display = 'inline';
    var $v_2 = String.format(window.LOCID_VPD_MSG_IMPORTSUCCESS, Mscrm.ImportVisualizationDialog.paramObj.entityDisplayName);
    var $v_3 = $get('successMessageLabel');
    $v_3.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2);
    $addHandler(Mscrm.ImportVisualizationDialog.get_$4(), 'click', function($p1_0) {
        Mscrm.ImportVisualizationDialog.closeDialog($p0);
    });
}
Mscrm.ImportVisualizationDialog.closeDialog = function(result) {
    if (!IsNull(result)) {
        var $v_0 = {};
        $v_0.EntityPluralDisplayName = Mscrm.ImportVisualizationDialog.paramObj.entityPluralDisplayName;
        $v_0.VisualizationName = Mscrm.ImportVisualizationDialog.paramObj.visualizationName;
        $v_0.EntityLogicalName = Mscrm.ImportVisualizationDialog.paramObj.entityLogicalName;
        $v_0.Success = result.Success;
        $v_0.ReturnValue = result.ReturnValue;
        Mscrm.Utilities.setReturnValue($v_0);
    }
    $clearHandlers(Mscrm.ImportVisualizationDialog.get_$4());
    closeWindow();
}


Mscrm.VisualizationImportParameter = function() {
}
Mscrm.VisualizationImportParameter.prototype = {
    visualizationXml: null,
    visualizationName: null,
    description: null,
    duplicateFound: false,
    suggestedName: null,
    entityLogicalName: null,
    visualizationId: null,
    duplicateVisId: null,
    duplicateVisIdName: null,
    duplicateVisType: null,
    entityDisplayName: null,
    entityPluralDisplayName: null,
    duplicateCount: 0
}


Mscrm.ImportVisualizationDialog.registerClass('Mscrm.ImportVisualizationDialog');
Mscrm.VisualizationImportParameter.registerClass('Mscrm.VisualizationImportParameter');
Mscrm.ImportVisualizationDialog.paramObj = null;
Mscrm.ImportVisualizationDialog.$3 = false;
Mscrm.ImportVisualizationDialog.$1 = false;
Mscrm.ImportVisualizationDialog.$0 = 1112;
