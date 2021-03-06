Type.registerNamespace("Mscrm");
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource = function() {};
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.form_OnLoad = function() {
    Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$0();
    var $v_0 = Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$2;
    Xrm.Page.data.addOnLoad($v_0);
    var $v_1 = Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$1, $v_2 = Xrm.Page.getControl("profileitemgrid");
    $v_2.addOnLoad($v_1)
};
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource
    .componentState_OnChange = function() { Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$0() };
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$1 = function($p0) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 =
            "<fetch version='1.0' mapping='logical'><entity name='mobileofflineprofile'><attribute name='isvalidated' /><attribute name='componentstate' /><filter type = 'and'><condition attribute='mobileofflineprofileid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_0) + "' /><condition attribute='componentstate' operator='eq' value='1' /></filter></entity></fetch>";
    Xrm.Internal.messages.retrieveUnpublishedMultiple($v_1).then(function($p1_0) {
            var $v_2 = $p1_0.entityCollection;
            if ($v_2.get_entities().length > 0) {
                var $v_3 = $v_2.get_entities()[0],
                    $v_4 = $v_3.getValue("isvalidated").get_value(),
                    $v_5 = Xrm.Page.data.entity.attributes.get("isvalidated");
                $v_5.setValue($v_4);
                Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$0()
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource
    .$2 = function($p0) { Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$0() };
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.$0 = function() {
    if (Xrm.Page.ui.getFormType() !== 1) {
        var $v_0 = "", $v_1 = Xrm.Page.data.entity.attributes.get("isvalidated");
        if ($v_1.getValue()) $v_0 = Xrm.Internal.getResourceString("LOCID_PROFILE_PUBLISHED");
        else $v_0 = Xrm.Internal.getResourceString("LOCID_PROFILE_NOTPUBLISHED");
        Xrm.Page.ui.setFormNotification($v_0, "WARNING", "MobileOfflineProfileNotification")
    }
};
Mscrm.MobileOfflineProfileMainSystemLibraryWebResource
    .registerClass("Mscrm.MobileOfflineProfileMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.form_OnLoad;
Mscrm.componentstate_onchange = Mscrm.MobileOfflineProfileMainSystemLibraryWebResource.componentState_OnChange