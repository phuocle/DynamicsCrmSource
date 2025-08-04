Type.registerNamespace("Mscrm");
Mscrm.OfficeGraphSettingsPageHelper = function() {};
Mscrm.OfficeGraphSettingsPageHelper.savePageProperties = function(entityCount, isOfficeGraphIntegrationEnabled) {
    var $v_0 = $get("enableOfficeGraph"), $v_1 = "";
    if (isOfficeGraphIntegrationEnabled !== $v_0.checked) {
        $v_1 = '<EntityOfficeGraphEnabledXml isOfficeGraphEnabled="' + $v_0.checked + '">';
        $v_1 += "</EntityOfficeGraphEnabledXml>"
    }
    window.WizardSetProperty("EntityOfficeGraphEnabledXml", $v_1);
    return true
};
Mscrm.OfficeGraphSettingsPageHelper.getWizardDataToPost = function() {
    var $v_0 = window.WizardGetProperty("EntityOfficeGraphEnabledXml");
    return $v_0
};
Mscrm.OfficeGraphSettingsPageHelper.registerClass("Mscrm.OfficeGraphSettingsPageHelper")