Type.registerNamespace("Mscrm");
Mscrm.PhoneCallMainSystemLibraryWebResource = function() {};
Mscrm.PhoneCallMainSystemLibraryWebResource.FormOnLoad = function() {
    Mscrm.EntityPageHandlerFactory.create();
    var $v_0 = Xrm.Page.getAttribute("directioncode");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        $v_0.addOnChange(Mscrm.PhoneCallMainSystemLibraryWebResource.directionCodeOnChange)
};
Mscrm.PhoneCallMainSystemLibraryWebResource.directionCodeOnChange = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("from"), $v_1 = Xrm.Page.data.entity.attributes.get("to");
    Mscrm.CommandBarActions.swapLookups($v_0, $v_1)
};
Mscrm.PhoneCallMainSystemLibraryWebResource.registerClass("Mscrm.PhoneCallMainSystemLibraryWebResource");
Mscrm.Form_onload = Mscrm.PhoneCallMainSystemLibraryWebResource.FormOnLoad;
Mscrm.directioncode_onchange = Mscrm.PhoneCallMainSystemLibraryWebResource.directionCodeOnChange