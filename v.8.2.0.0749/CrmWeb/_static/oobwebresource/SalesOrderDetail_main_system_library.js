Type.registerNamespace("Mscrm");
Mscrm.SalesOrderDetailMainSystemLibraryWebResource = function() {};
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .uomidSetAdditionalParams = function(context) {
        Mscrm.QoiDetail.setAdditionalParametersForUom(1088, Mscrm.SalesOrderDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource.productidSetAdditionalParams = function(context) {
    var $v_0 = "{445D571A-5DBB-41CE-8E63-0C7769AB9B11}";
    Mscrm.QoiDetail.setAdditionalParametersForProduct($v_0,
        "salesorder",
        Mscrm.SalesOrderDetailMainSystemLibraryWebResource.$0())
};
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .FormOnLoad = function() {
        Mscrm.QoiDetail.initializeFields("salesorder",
            Mscrm.SalesOrderDetailMainSystemLibraryWebResource.$0(),
            "salesorderdetail",
            Mscrm.SalesOrderDetailMainSystemLibraryWebResource.productidSetAdditionalParams,
            "salesorderid")
    };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .FormOnSave = function(context) {
        return Mscrm.CommandBarActions.checkPriceAndQuantityNonnegative(context.getEventArgs())
    };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .isproductoverriddenOnChange = function() { Mscrm.CommandBarActions.productOverriddenHandler() };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .productidOnChange = function() { Mscrm.QoiDetail.updateFieldsWhenProductChanges() };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .uomidOnChange = function() {
        Mscrm.QoiDetail.updateFieldsWhenUomChanges("salesorder",
            Mscrm.SalesOrderDetailMainSystemLibraryWebResource.$0())
    };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .ispriceoverriddenOnChange = function() { Mscrm.CommandBarActions.updatePriceAttributes(true) };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource
    .willcallOnChange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.SalesOrderDetailMainSystemLibraryWebResource.$0 = function() {
    return Mscrm.CommandBarActions.getIdFromLookupAttribute("salesorderid")
};
Mscrm.SalesOrderDetailMainSystemLibraryWebResource.registerClass("Mscrm.SalesOrderDetailMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.uomid_setadditionalparams = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.uomidSetAdditionalParams;
Mscrm.Form_onload = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.FormOnLoad;
Mscrm.isproductoverridden_onchange = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.isproductoverriddenOnChange;
Mscrm.productid_onchange = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.productidOnChange;
Mscrm.uomid_onchange = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.uomidOnChange;
Mscrm.ispriceoverridden_onchange = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.ispriceoverriddenOnChange;
Mscrm.willcall_onchange = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.willcallOnChange;
Mscrm.productid_setadditionalparams = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.productidSetAdditionalParams;
Mscrm.Form_onsave = Mscrm.SalesOrderDetailMainSystemLibraryWebResource.FormOnSave