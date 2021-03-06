Type.registerNamespace("Mscrm");
Mscrm.OneNoteSettingsPageHelper = function() {};
Mscrm.OneNoteSettingsPageHelper.initializeControls = function(entityCount) {
    for (var $v_1 = 0; $v_1 < entityCount; $v_1++) {
        var $v_2 = $get("entityName_" + $v_1).value, $v_3 = $get("oneNoteEnabled_" + $v_2);
        Mscrm.OneNoteSettingsPageHelper.$0[$v_2] = $v_3.checked
    }
    var $v_0 = $get("checkAll");
    $v_0.checked = window.DOCM_ENTITY_COUNT_SELECTED === entityCount
};
Mscrm.OneNoteSettingsPageHelper.savePagePropertiesForOneNote = function(entityCount) {
    if (!window.ONEN_ENTITY_COUNT_SELECTED) if (!confirm(window.LOCID_ONEN_NOENTITY_SELECTED)) return false;
    for (var $v_0 = {}, $v_1 = "<EntityOneNoteEnabledXml>", $v_2 = 0; $v_2 < entityCount; $v_2++) {
        var $v_3 = $get("entityName_" + $v_2).value, $v_4 = $get("oneNoteEnabled_" + $v_3);
        if (Mscrm.OneNoteSettingsPageHelper.$0[$v_3] !== $v_4.checked) {
            $v_1 += '<entity name="' + $v_3 + '">';
            $v_1 += $v_4.checked;
            $v_1 += "</entity>"
        }
        if ($v_4.checked) {
            var $v_5 = $get("entityBaseLanguageDisplayName_" + $v_2).value,
                $v_6 = XUI.Html.GetText($get("entityDisplayName_" + $v_2)),
                $v_7 = {};
            $v_7["entityDisplayName"] = $v_6;
            $v_7["entityBaseLanguageDisplayName"] = $v_5;
            $v_0[$v_3] = $v_7
        }
    }
    $v_1 += "</EntityOneNoteEnabledXml>";
    window.WizardSetProperty("EntityOneNoteEnabledXml", $v_1);
    return true
};
Mscrm.OneNoteSettingsPageHelper.saveOneNoteSettings = function(funAsyncCallbackFunction) {
    var $v_0, $v_1 = new RemoteCommand("EntityPropertySettingWebService", "UpdatePropertySettingForEntities");
    $v_0 = window.WizardGetProperty("EntityOneNoteEnabledXml");
    $v_1.SetParameter("entityPropertyXml", $v_0);
    $v_1.SetParameter("propertyName", "isonenoteintegrationenabled");
    $v_1.Execute(funAsyncCallbackFunction)
};
Mscrm.OneNoteSettingsPageHelper.registerClass("Mscrm.OneNoteSettingsPageHelper");
Mscrm.OneNoteSettingsPageHelper.$0 = {}