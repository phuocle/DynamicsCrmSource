Type.registerNamespace("Mscrm");
Mscrm.BulkOperationMainSystemLibraryWebResource = function() {};
Mscrm.BulkOperationMainSystemLibraryWebResource
    .form_onload = function() { Mscrm.BulkOperationMainSystemLibraryWebResource.setVisibleSubgrid() };
Mscrm.BulkOperationMainSystemLibraryWebResource.setVisibleSubgrid = function() {
    var $v_0 = Xrm.Page.ui.controls.get("accounts"),
        $v_1 = Xrm.Page.ui.controls.get("contacts"),
        $v_2 = Xrm.Page.ui.controls.get("leads"),
        $v_3 = Xrm.Page.getAttribute("targetedrecordtypecode").getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        var $v_4 = Number.parseInvariant($v_3.toString()), $v_5 = $v_4 === 1, $v_6 = $v_4 === 2, $v_7 = $v_4 === 4;
        $v_0.setVisible($v_5);
        $v_1.setVisible($v_6);
        $v_2.setVisible($v_7)
    }
};
Mscrm.BulkOperationMainSystemLibraryWebResource.registerClass("Mscrm.BulkOperationMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.BulkOperationMainSystemLibraryWebResource.form_onload