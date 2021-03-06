Type.registerNamespace("Mscrm");
Mscrm.InvoiceMainSystemLibraryWebResource = function() {};
Mscrm.InvoiceMainSystemLibraryWebResource.priceLevelIdSetAdditionalParams = function(context) {
    var $v_0 = Xrm.Page.ui.controls.get("pricelevelid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.InvoiceMainSystemLibraryWebResource.opportunityIdSetAdditionalParams = function(context) {
    var $v_0 = Xrm.Page.ui.controls.get("opportunityid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.InvoiceMainSystemLibraryWebResource.salesOrderIdSetAdditionalParams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("salesorderid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.InvoiceMainSystemLibraryWebResource.formOnLoad = function() {
    Xrm.Page.context.client.getClient() === "Mobile" && Mscrm.CommandBarActions.checkForSuggestions();
    if (Xrm.Page.ui.getFormType() === 1)
        Mscrm.OpportunityQOIControl.setDefaultPricelistForUser("invoice", "pricelevelid");
    else if (Xrm.Page.ui.getFormType() !== 3 && Xrm.Page.ui.getFormType() !== 4) {
        Mscrm.CommandBarActions.enableDisableShippingAddress();
        Xrm.Page.data.refresh(false)
    }
};
Mscrm.InvoiceMainSystemLibraryWebResource
    .willCallOnChange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.InvoiceMainSystemLibraryWebResource.registerClass("Mscrm.InvoiceMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.pricelevelid_setadditionalparams = Mscrm.InvoiceMainSystemLibraryWebResource.priceLevelIdSetAdditionalParams;
Mscrm.opportunityid_setadditionalparams = Mscrm.InvoiceMainSystemLibraryWebResource.opportunityIdSetAdditionalParams;
Mscrm.salesorderid_setadditionalparams = Mscrm.InvoiceMainSystemLibraryWebResource.salesOrderIdSetAdditionalParams;
Mscrm.Form_onload = Mscrm.InvoiceMainSystemLibraryWebResource.formOnLoad;
Mscrm.willcall_onchange = Mscrm.InvoiceMainSystemLibraryWebResource.willCallOnChange