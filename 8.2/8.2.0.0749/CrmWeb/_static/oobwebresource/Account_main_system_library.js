Type.registerNamespace("Mscrm");
Mscrm.AccountMainSystemLibraryWebResource = function() {};
Mscrm.AccountMainSystemLibraryWebResource.parentaccountid_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = Xrm.Page.ui.controls.get("parentaccountid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("accountid", "neq", $v_0);
            $v_1.addCustomFilter($v_2, "account")
        }
    }
};
Mscrm.AccountMainSystemLibraryWebResource.form_onload = function() {
    if (Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Internal.isEnabledForInteractionCentric() &&
        Xrm.Page.ui.getFormType() !== 2) {
        var $v_0 = Xrm.Page.ui.controls.get("name");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getDisabled() && $v_0.setFocus()
    }
};
Mscrm.AccountMainSystemLibraryWebResource.registerClass("Mscrm.AccountMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.parentaccountid_setadditionalparams = Mscrm.AccountMainSystemLibraryWebResource
    .parentaccountid_setadditionalparams;
Mscrm.Form_onload = Mscrm.AccountMainSystemLibraryWebResource.form_onload