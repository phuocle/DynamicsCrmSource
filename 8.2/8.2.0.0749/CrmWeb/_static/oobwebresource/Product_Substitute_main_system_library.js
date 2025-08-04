Type.registerNamespace("Mscrm");
Mscrm.ProductSubstituteMainSystemLibraryWebResource = function() {};
Mscrm.ProductSubstituteMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = Xrm.Page.getAttribute("productid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) &&
            Xrm.Page.ui.controls.get("productid").setDisabled(true)
};
Mscrm.ProductSubstituteMainSystemLibraryWebResource
    .registerClass("Mscrm.ProductSubstituteMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.ProductSubstituteMainSystemLibraryWebResource.formOnload