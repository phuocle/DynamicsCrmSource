Type.registerNamespace("Mscrm");
Mscrm.InvoiceState = function() {};
Mscrm.InvoiceState.prototype = { active: 0, closed: 1, paid: 2, canceled: 3 };
Mscrm.InvoiceState.registerEnum("Mscrm.InvoiceState", false);
Mscrm.Invoice = function() {};
Mscrm.Invoice.CloseInvoice = function(closedState) {
    if (!Xrm.Page.data.getIsValid()) return;
    if (Xrm.Page.context.client.getClient() !== "Mobile" || !Mscrm.InternalUtilities.DialogUtility.isMDDEnabled()) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("invoicenumber"),
            $v_1 = Mscrm.GlobalImported.CrmUri.create("/sfa/invoice/dlg_close.aspx?closedstate=" +
                CrmEncodeDecode.CrmUrlEncode(closedState)).toString(),
            $v_2 = Mscrm.Invoice.$0,
            $v_3 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_2, [closedState]),
            $v_4 = new Xrm.DialogOptions;
        $v_4.width = 400;
        $v_4.height = 200;
        Xrm.Internal.openDialog($v_1, $v_4, $v_0.getValue(), null, $v_3)
    } else {
        var $v_5 = new Xrm.DialogOptions;
        $v_5.width = 400;
        $v_5.height = 200;
        var $v_6 = {}, $v_7 = {};
        $v_6["invoiceid"] = Xrm.Page.data.entity.getId();
        $v_6["closedstate"] = closedState;
        var $v_8 = Mscrm.Invoice.invoiceDialogCloseCallback;
        Xrm.Dialog.openDialog("InvoiceClose", $v_5, $v_6, $v_8, null)
    }
};
Mscrm.Invoice.invoiceDialogCloseCallback = function(dialogParams, callbackParams) {
    var $v_0 = dialogParams["lastButtonClicked"];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_0.toString() !== "ok_id") return;
    var $v_1 = dialogParams["invoiceid"].toString(),
        $v_2 = parseInt(dialogParams["closedstate"], 10),
        $v_3 = parseInt(dialogParams["closeinvoicestatusreason_id"], 10);
    Mscrm.CommandBarActions.performActionAfterCloseInvoice($v_3, $v_2, $v_1)
};
Mscrm.Invoice.lockInvoice = function() { Mscrm.CommandBarActions.lock() };
Mscrm.Invoice.unlockInvoice = function() { Mscrm.CommandBarActions.unlock() };
Mscrm.Invoice.getProductsForInvoice = function() { Mscrm.CommandBarActions.getProducts() };
Mscrm.Invoice.isInvoicePaid = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getValue() === 2) return true;
    return false
};
Mscrm.Invoice.$0 = function($p0, $p1) {
    !Mscrm.InternalUtilities.JSTypes.isNull($p0) &&
        Mscrm.CommandBarActions.performActionAfterCloseInvoice($p0, $p1, Xrm.Page.data.entity.getId())
};
Mscrm.Invoice.registerClass("Mscrm.Invoice");
CloseInvoice = Mscrm.Invoice.CloseInvoice;
lockInvoice = Mscrm.Invoice.lockInvoice;
unlockInvoice = Mscrm.Invoice.unlockInvoice;
getProductsForInvoice = Mscrm.Invoice.getProductsForInvoice;
isInvoicePaid = Mscrm.Invoice.isInvoicePaid