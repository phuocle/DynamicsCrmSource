Type.registerNamespace("Mscrm");
Mscrm.BulkOperation = function() {};
Mscrm.BulkOperation.selectSuccessNav = function() {
    var $v_0 = Xrm.Page.getControl("navBulkOperationSuccesses");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("mousedown"));
        XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("click"))
    }
};
Mscrm.BulkOperation.registerClass("Mscrm.BulkOperation");
Type.registerNamespace("Mscrm");
SelectSuccessNav = Mscrm.BulkOperation.selectSuccessNav