Type.registerNamespace("Mscrm");
Mscrm.ContactMainSystemLibraryWebResource = function() {};
Mscrm.ContactMainSystemLibraryWebResource.parentcustomerid_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = Xrm.Page.ui.controls.get("parentcustomerid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("contactid", "neq", $v_0);
            $v_1.addCustomFilter($v_2, "contact")
        }
    }
};
Mscrm.ContactMainSystemLibraryWebResource.form_onload = function() {
    if (Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Internal.isEnabledForInteractionCentric() &&
        Xrm.Page.ui.getFormType() !== 2) {
        var $v_0 = Xrm.Page.ui.controls.get("lastname");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getDisabled() && $v_0.setFocus()
    }
    if (!Xrm.Internal.isEnabledForInteractionCentric() && Xrm.Page.context.client.getClient() === "Mobile") {
        var $v_1 = Xrm.Page.ui.controls.get("subgrid_Entitlement");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible(false)
    }
};
Mscrm.ContactMainSystemLibraryWebResource.registerClass("Mscrm.ContactMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.parentcustomerid_setadditionalparams = Mscrm.ContactMainSystemLibraryWebResource
    .parentcustomerid_setadditionalparams