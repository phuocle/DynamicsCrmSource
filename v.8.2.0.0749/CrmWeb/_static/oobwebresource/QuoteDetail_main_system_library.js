Type.registerNamespace("Mscrm");
Mscrm.QuoteDetailMainSystemLibraryWebResource = function() {};
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .uomidSetAdditionalParams = function(context) {
        Mscrm.QoiDetail.setAdditionalParametersForUom(1084, Mscrm.QuoteDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.QuoteDetailMainSystemLibraryWebResource.productidSetAdditionalParams = function(context) {
    var $v_0 = "{3DD8DD62-0108-43BA-8DC7-72E638F964EB}";
    Mscrm.QoiDetail.setAdditionalParametersForProduct($v_0, "quote", Mscrm.QuoteDetailMainSystemLibraryWebResource.$0())
};
Mscrm.QuoteDetailMainSystemLibraryWebResource.FormOnLoad = function() {
    Mscrm.QoiDetail.initializeFields("quote",
        Mscrm.QuoteDetailMainSystemLibraryWebResource.$0(),
        "quotedetail",
        Mscrm.QuoteDetailMainSystemLibraryWebResource.productidSetAdditionalParams,
        "quoteid")
};
Mscrm.QuoteDetailMainSystemLibraryWebResource.FormOnSave = function(context) {
    return Mscrm.CommandBarActions.checkPriceAndQuantityNonnegative(context.getEventArgs())
};
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .isproductoverriddenOnChange = function() { Mscrm.CommandBarActions.productOverriddenHandler() };
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .productidOnChange = function() { Mscrm.QoiDetail.updateFieldsWhenProductChanges() };
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .uomidOnChange = function() {
        Mscrm.QoiDetail.updateFieldsWhenUomChanges("quote", Mscrm.QuoteDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .ispriceoverriddenOnChange = function() { Mscrm.CommandBarActions.updatePriceAttributes(true) };
Mscrm.QuoteDetailMainSystemLibraryWebResource
    .willcallOnChange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.QuoteDetailMainSystemLibraryWebResource.$0 = function() {
    return Mscrm.CommandBarActions.getIdFromLookupAttribute("quoteid")
};
Mscrm.QuoteDetailMainSystemLibraryWebResource.registerClass("Mscrm.QuoteDetailMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.uomid_setadditionalparams = Mscrm.QuoteDetailMainSystemLibraryWebResource.uomidSetAdditionalParams;
Mscrm.Form_onload = Mscrm.QuoteDetailMainSystemLibraryWebResource.FormOnLoad;
Mscrm.isproductoverridden_onchange = Mscrm.QuoteDetailMainSystemLibraryWebResource.isproductoverriddenOnChange;
Mscrm.productid_onchange = Mscrm.QuoteDetailMainSystemLibraryWebResource.productidOnChange;
Mscrm.uomid_onchange = Mscrm.QuoteDetailMainSystemLibraryWebResource.uomidOnChange;
Mscrm.ispriceoverridden_onchange = Mscrm.QuoteDetailMainSystemLibraryWebResource.ispriceoverriddenOnChange;
Mscrm.willcall_onchange = Mscrm.QuoteDetailMainSystemLibraryWebResource.willcallOnChange;
Mscrm.productid_setadditionalparams = Mscrm.QuoteDetailMainSystemLibraryWebResource.productidSetAdditionalParams;
Mscrm.Form_onsave = Mscrm.QuoteDetailMainSystemLibraryWebResource.FormOnSave