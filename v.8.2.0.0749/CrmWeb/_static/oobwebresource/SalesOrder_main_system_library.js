Type.registerNamespace("Mscrm");
Mscrm.SalesOrderMainSystemLibraryWebResource = function() {};
Mscrm.SalesOrderMainSystemLibraryWebResource.formOnload = function() {
    Xrm.Page.context.client.getClient() === "Mobile" && Mscrm.CommandBarActions.checkForSuggestions();
    var $v_0 = Xrm.Page.ui.getFormType();
    $v_0 === 1 && Mscrm.OpportunityQOIControl.setDefaultPricelistForUser("salesorder", "pricelevelid");
    $v_0 !== 3 && $v_0 !== 4 && Mscrm.CommandBarActions.enableDisableShippingAddress()
};
Mscrm.SalesOrderMainSystemLibraryWebResource
    .willcallOnchange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.SalesOrderMainSystemLibraryWebResource.pricelevelidSetadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("pricelevelid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.SalesOrderMainSystemLibraryWebResource.opportunityIdSetadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("opportunityid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.SalesOrderMainSystemLibraryWebResource.quoteidSetadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("quoteid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.CommandBarActions.addTransactionCurrencyFilter($v_0)
};
Mscrm.SalesOrderMainSystemLibraryWebResource.registerClass("Mscrm.SalesOrderMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.pricelevelid_setadditionalparams = Mscrm.SalesOrderMainSystemLibraryWebResource.pricelevelidSetadditionalparams;
Mscrm.opportunityid_setadditionalparams = Mscrm.SalesOrderMainSystemLibraryWebResource.opportunityIdSetadditionalparams;
Mscrm.quoteid_setadditionalparams = Mscrm.SalesOrderMainSystemLibraryWebResource.quoteidSetadditionalparams;
Mscrm.Form_onload = Mscrm.SalesOrderMainSystemLibraryWebResource.formOnload;
Mscrm.willcall_onchange = Mscrm.SalesOrderMainSystemLibraryWebResource.willcallOnchange;
EnableDisableShippingAddress = Mscrm.SalesOrderMainSystemLibraryWebResource.enableDisableShippingAddress;
AddTransactionCurrencyParam = Mscrm.SalesOrderMainSystemLibraryWebResource.addTransactionCurrencyParam