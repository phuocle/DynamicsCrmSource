Type.registerNamespace("Mscrm");
Mscrm.ChannelPropertyGroupMainSystemLibraryWebResource = function() {};
Mscrm.ChannelPropertyGroupMainSystemLibraryWebResource.form_OnLoad = function() {
    var $v_0 = Xrm.Page.ui.getFormType() === 1;
    if ($v_0) {
        var $v_1 = Xrm.Page.ui.controls.get("regardingtypecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getAttribute("regardingtypecode")
            .getValue())) $v_1.setDisabled(true);
        else $v_1.setDisabled(false)
    }
};
Mscrm.ChannelPropertyGroupMainSystemLibraryWebResource
    .registerClass("Mscrm.ChannelPropertyGroupMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.ChannelPropertyGroupMainSystemLibraryWebResource.form_OnLoad