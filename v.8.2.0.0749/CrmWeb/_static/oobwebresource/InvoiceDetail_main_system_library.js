Type.registerNamespace("Mscrm");
Mscrm.InvoiceDetailMainSystemLibraryWebResource = function() {};
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .uomidSetAdditionalParams = function(context) {
        Mscrm.QoiDetail.setAdditionalParametersForUom(1090, Mscrm.InvoiceDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.InvoiceDetailMainSystemLibraryWebResource.productidSetAdditionalParams = function(context) {
    var $v_0 = "{6F89C8C3-3EF9-4E9E-AD0D-EBD894D47C86}";
    Mscrm.QoiDetail.setAdditionalParametersForProduct($v_0,
        "invoice",
        Mscrm.InvoiceDetailMainSystemLibraryWebResource.$0())
};
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .FormOnLoad = function() {
        Mscrm.QoiDetail.initializeFields("invoice",
            Mscrm.InvoiceDetailMainSystemLibraryWebResource.$0(),
            "invoicedetail",
            Mscrm.InvoiceDetailMainSystemLibraryWebResource.productidSetAdditionalParams,
            "invoiceid")
    };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .FormOnSave = function(context) {
        return Mscrm.CommandBarActions.checkPriceAndQuantityNonnegative(context.getEventArgs())
    };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .isproductoverriddenOnChange = function() { Mscrm.CommandBarActions.productOverriddenHandler() };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .productidOnChange = function() { Mscrm.QoiDetail.updateFieldsWhenProductChanges() };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .uomidOnChange = function() {
        Mscrm.QoiDetail.updateFieldsWhenUomChanges("invoice", Mscrm.InvoiceDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .ispriceoverriddenOnChange = function() { Mscrm.CommandBarActions.updatePriceAttributes(true) };
Mscrm.InvoiceDetailMainSystemLibraryWebResource
    .willcallOnChange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.InvoiceDetailMainSystemLibraryWebResource.$0 = function() {
    return Mscrm.CommandBarActions.getIdFromLookupAttribute("invoiceid")
};
Mscrm.InvoiceDetailMainSystemLibraryWebResource.registerClass("Mscrm.InvoiceDetailMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.uomid_setadditionalparams = Mscrm.InvoiceDetailMainSystemLibraryWebResource.uomidSetAdditionalParams;
Mscrm.Form_onload = Mscrm.InvoiceDetailMainSystemLibraryWebResource.FormOnLoad;
Mscrm.isproductoverridden_onchange = Mscrm.InvoiceDetailMainSystemLibraryWebResource.isproductoverriddenOnChange;
Mscrm.productid_onchange = Mscrm.InvoiceDetailMainSystemLibraryWebResource.productidOnChange;
Mscrm.uomid_onchange = Mscrm.InvoiceDetailMainSystemLibraryWebResource.uomidOnChange;
Mscrm.ispriceoverridden_onchange = Mscrm.InvoiceDetailMainSystemLibraryWebResource.ispriceoverriddenOnChange;
Mscrm.willcall_onchange = Mscrm.InvoiceDetailMainSystemLibraryWebResource.willcallOnChange;
Mscrm.productid_setadditionalparams = Mscrm.InvoiceDetailMainSystemLibraryWebResource.productidSetAdditionalParams;
Mscrm.Form_onsave = Mscrm.InvoiceDetailMainSystemLibraryWebResource.FormOnSave