Type.registerNamespace("Mscrm");
Mscrm.SalesOrderState = function() {};
Mscrm.SalesOrderState.prototype = {
    active: 0,
    submitted: 1,
    canceled: 2,
    fulfilled: 3,
    invoiced: 4,
    fulfilledOrActive: 5
};
Mscrm.SalesOrderState.registerEnum("Mscrm.SalesOrderState", false);
Mscrm.SalesOrder = function() {};
Mscrm.SalesOrder.CloseOrFulfillOrder = function(closedState) {
    if (!Xrm.Page.data.getIsValid()) return;
    if (Xrm.Page.context.client.getClient() !== "Mobile" || !Mscrm.InternalUtilities.DialogUtility.isMDDEnabled()) {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create("/sfa/salesorder/dlg_Close.aspx");
        $v_0.get_query()["closedstate"] = closedState;
        var $v_1 = new Xrm.DialogOptions,
            $v_2 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.SalesOrder.PerformActionAfterCloseOrder, [closedState]);
        $v_1.height = 330;
        $v_1.width = 400;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
    } else {
        var $v_3 = new Xrm.DialogOptions;
        $v_3.width = 330;
        $v_3.height = 400;
        var $v_4 = {}, $v_5 = {};
        $v_4["salesorderid"] = Xrm.Page.data.entity.getId();
        $v_4["closedstate"] = closedState;
        Xrm.Dialog.openDialog("CloseOrder", $v_3, $v_4, Mscrm.SalesOrder.salesOrderDialogCloseCallback, null)
    }
};
Mscrm.SalesOrder.salesOrderDialogCloseCallback = function(dialogParams, callbackParams) {
    var $v_0 = dialogParams["lastButtonClicked"];
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_0.toString() !== "ok_id") return;
    var $v_1 = dialogParams["salesorderid"].toString(),
        $v_2 = dialogParams["closeorderdate_id"],
        $v_3 = parseInt(dialogParams["closedstate"].toString(), 10),
        $v_4 = dialogParams["closeorderstatusreason_id"],
        $v_5 = null;
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(dialogParams["description_id"])) $v_5 = dialogParams["description_id"].toString();
    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        Mscrm.CommandBarActions.PerformActionAfterCloseOrder($v_4, $v_2, $v_5, $v_3, $v_1)
};
Mscrm.SalesOrder.PerformActionAfterCloseOrder = function(returnValue, closedState) {
    !Mscrm.InternalUtilities.JSTypes.isNull(returnValue) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue.closeDate) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue.newStatus) &&
        Mscrm.CommandBarActions
        .PerformActionAfterCloseOrder(Number.parseInvariant(returnValue.newStatus),
            new Date(returnValue.closeDate),
            returnValue.description,
            closedState,
            Xrm.Page.data.entity.getId())
};
Mscrm.SalesOrder.ProcessOrder = function() {
    if (!Xrm.Page.data.getIsValid()) return;
    if (Xrm.Page.ui
        .getFormType() !==
        4 &&
        Xrm.Page.ui.getFormType() !== 3)
        Xrm.Page.data.save().then(function($p1_0) { Mscrm.SalesOrder.processOrderSuccessResponse() },
            Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
    else Mscrm.SalesOrder.processOrderSuccessResponse()
};
Mscrm.SalesOrder.processOrderSuccessResponse = function() {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    if (!Mscrm.SalesOrder.IsBackOfficeInstalled())
        Xrm.Internal.messages.convertSalesOrderToInvoice(Microsoft.Crm.Client.Core.Framework.Guid
            .tryCreate(Xrm.Page.data.entity.getId()),
            $v_0).then(function($p1_0) {
                var $v_1 = $p1_0.entity, $v_2 = $v_1.get_identifier().Id.toString();
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
                    Xrm.Utility.openEntityForm("invoice", $v_2, null)
            },
            function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) });
    else {
        var $v_3 = -1;
        Xrm.Internal.messages.setState(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId(), 1, $v_3)
            .then(function($p1_0) { Xrm.Page.data.refresh(true) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.SalesOrder.CloseOrder = function() { Mscrm.SalesOrder.CloseOrFulfillOrder(2) };
Mscrm.SalesOrder.FulfillOrder = function() { Mscrm.SalesOrder.CloseOrFulfillOrder(3) };
Mscrm.SalesOrder.GetProductsForOrder = function() { Mscrm.CommandBarActions.getProducts() };
Mscrm.SalesOrder.LockSalesOrder = function() { Mscrm.CommandBarActions.lock() };
Mscrm.SalesOrder.UnlockSalesOrder = function() { Mscrm.CommandBarActions.unlock() };
Mscrm.SalesOrder.IsSalesOrderActive = function() { return Mscrm.SalesOrder.IsSalesOrderState(0) };
Mscrm.SalesOrder.IsSalesOrderFulfilled = function() { return Mscrm.SalesOrder.IsSalesOrderState(3) };
Mscrm.SalesOrder.IsSalesOrderFulfilledOrActive = function() { return Mscrm.SalesOrder.IsSalesOrderState(5) };
Mscrm.SalesOrder.IsSalesOrderSubmitted = function() { return Mscrm.SalesOrder.IsSalesOrderState(1) };
Mscrm.SalesOrder.IsSalesOrderState = function(state) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode").getValue(), $v_1 = false;
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_1;
    switch (state) {
    case 0:
        if ($v_0 === 0) $v_1 = true;
        break;
    case 1:
        if ($v_0 === 1) $v_1 = true;
        break;
    case 3:
        if ($v_0 === 3) $v_1 = true;
        break;
    case 5:
        if ($v_0 === 3 || $v_0 === 0) $v_1 = true;
        break;
    default:
        $v_1 = false;
        break
    }
    return $v_1
};
Mscrm.SalesOrder.IsBackOfficeInstalled = function() {
    var $v_0 = Xrm.Internal.getResourceString("IS_BACKOFFICE_INSTALLED");
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return false;
    return $v_0 === "1"
};
Mscrm.SalesOrder.recalculate = function() {
    if (!Xrm.Page.data.getIsValid()) return;
    Xrm.Page.data.refresh(true)
};
Mscrm.SalesOrder.LookupAddress = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("customerid").getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_3 = Xrm.Page.ui.controls.get("customerid").getLabel();
        Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_PROVIDE_VALUE_ADDRESS"), $v_3),
            null);
        return
    }
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/sfa/quotes/dlg_lookupaddress.aspx?headerForm=1&parentType=" +
            CrmEncodeDecode.CrmUrlEncode($v_0[0].entityType) +
            "&parentId=" +
            CrmEncodeDecode.CrmUrlEncode($v_0[0].id) +
            "&willCall=" +
            (Xrm.Page.data.entity.attributes.get("willcall").getValue() ? "1" : "0")),
        $v_2 = new Xrm.DialogOptions;
    $v_2.width = 500;
    $v_2.height = 350;
    Xrm.Internal.openDialog($v_1.toString(), $v_2, null, null, Mscrm.SalesOrder.PerformActionAfterLookupAddress)
};
Mscrm.SalesOrder.PerformActionAfterLookupAddress = function(customerDialogResult) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(customerDialogResult)) {
        Mscrm.SalesOrder.setBillTo();
        var $v_0 = Xrm.Page.data.entity.getEntityName();
        Mscrm.SalesOrder.setShipTo(false, $v_0)
    }
};
Mscrm.SalesOrder.setBillTo = function() {
    var $v_0 = Xrm.Page.getAttribute("BillTo").getValue();
    if ($v_0) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_composite"))) {
            var $v_1 = Xrm.Page.data.entity.attributes.get("line1").getValue(),
                $v_2 = Xrm.Page.data.entity.attributes.get("line2").getValue(),
                $v_3 = Xrm.Page.data.entity.attributes.get("Line3").getValue(),
                $v_4 = Xrm.Page.data.entity.attributes.get("city").getValue(),
                $v_5 = Xrm.Page.data.entity.attributes.get("stateorprovince").getValue(),
                $v_6 = Xrm.Page.data.entity.attributes.get("postalcode").getValue(),
                $v_7 = Xrm.Page.data.entity.attributes.get("country").getValue();
            Mscrm.SalesOrder.setValueOfControl("billto_name", "Name");
            Mscrm.SalesOrder.setValueOfControl("billto_line1", "line1");
            Mscrm.SalesOrder.setValueOfControl("billto_line2", "line2");
            Mscrm.SalesOrder.setValueOfControl("billto_line3", "line3");
            Mscrm.SalesOrder.setValueOfControl("billto_city", "city");
            Mscrm.SalesOrder.setValueOfControl("billto_stateorprovince", "stateorprovince");
            Mscrm.SalesOrder.setValueOfControl("billto_postalcode", "postalcode");
            Mscrm.SalesOrder.setValueOfControl("billto_country", "country");
            Xrm.Internal.setComposeAddress("billto_", $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7)
        }
        Mscrm.SalesOrder.setValueOfControl("billto_name", "Name");
        Mscrm.SalesOrder.setValueOfControl("billto_line1", "line1");
        Mscrm.SalesOrder.setValueOfControl("billto_line2", "line2");
        Mscrm.SalesOrder.setValueOfControl("billto_line3", "line3");
        Mscrm.SalesOrder.setValueOfControl("billto_city", "city");
        Mscrm.SalesOrder.setValueOfControl("billto_stateorprovince", "stateorprovince");
        Mscrm.SalesOrder.setValueOfControl("billto_postalcode", "postalcode");
        Mscrm.SalesOrder.setValueOfControl("billto_country", "country");
        Mscrm.SalesOrder.setValueOfControl("billto_telephone", "telephone1");
        Mscrm.SalesOrder.setValueOfControl("billto_fax", "fax");
        Mscrm.SalesOrder.setValueOfControl("billto_addressid", "customeraddressid");
        Mscrm.SalesOrder.setValueOfControl("billto_contactname", "primarycontactname")
    }
};
Mscrm.SalesOrder.setShipTo = function(isDetail, iObjectType) {
    var $v_0 = Xrm.Page.getAttribute("ShipTo").getValue();
    if ($v_0) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_composite"))) {
            var $v_1 = Xrm.Page.data.entity.attributes.get("line1").getValue(),
                $v_2 = Xrm.Page.data.entity.attributes.get("line2").getValue(),
                $v_3 = Xrm.Page.data.entity.attributes.get("Line3").getValue(),
                $v_4 = Xrm.Page.data.entity.attributes.get("city").getValue(),
                $v_5 = Xrm.Page.data.entity.attributes.get("stateorprovince").getValue(),
                $v_6 = Xrm.Page.data.entity.attributes.get("postalcode").getValue(),
                $v_7 = Xrm.Page.data.entity.attributes.get("country").getValue();
            Mscrm.SalesOrder.setValueOfControl("shipto_name", "Name");
            Mscrm.SalesOrder.setValueOfControl("shipto_line1", "line1");
            Mscrm.SalesOrder.setValueOfControl("shipto_line2", "line2");
            Mscrm.SalesOrder.setValueOfControl("shipto_line3", "line3");
            Mscrm.SalesOrder.setValueOfControl("shipto_city", "city");
            Mscrm.SalesOrder.setValueOfControl("shipto_stateorprovince", "stateorprovince");
            Mscrm.SalesOrder.setValueOfControl("shipto_postalcode", "postalcode");
            Mscrm.SalesOrder.setValueOfControl("shipto_country", "country");
            Xrm.Internal.setComposeAddress("shipto_", $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7)
        }
        Mscrm.SalesOrder.setValueOfControl("shipto_name", "Name");
        Mscrm.SalesOrder.setValueOfControl("shipto_line1", "line1");
        Mscrm.SalesOrder.setValueOfControl("shipto_line2", "line2");
        Mscrm.SalesOrder.setValueOfControl("shipto_line3", "line3");
        Mscrm.SalesOrder.setValueOfControl("shipto_city", "city");
        Mscrm.SalesOrder.setValueOfControl("shipto_stateorprovince", "stateorprovince");
        Mscrm.SalesOrder.setValueOfControl("shipto_postalcode", "postalcode");
        Mscrm.SalesOrder.setValueOfControl("shipto_country", "country");
        Mscrm.SalesOrder.setValueOfControl("shipto_telephone", "telephone1");
        Mscrm.SalesOrder.setValueOfControl("shipto_fax", "fax");
        Mscrm.SalesOrder.setValueOfControl("shipto_addressid", "customeraddressid");
        Mscrm.SalesOrder.setValueOfControl("shipto_contactname", "primarycontactname");
        if (isDetail) Mscrm.SalesOrder.setValueOfControl("shipto_freighttermscode", "freighttermscode");
        else {
            iObjectType !== "invoice" &&
                Mscrm.SalesOrder.setValueOfControl("shipto_freighttermscode", "freighttermscode");
            Mscrm.SalesOrder.setValueOfControl("shippingmethodcode", "shippingmethodcode")
        }
    }
};
Mscrm.SalesOrder.setValueOfControl = function(controlName, attributeName) {
    var $v_0 = Xrm.Page.ui.controls.get(controlName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = Xrm.Page.data.entity.attributes.get(controlName);
        $v_1.setValue(Xrm.Page.data.entity.attributes.get(attributeName).getValue())
    }
};
Mscrm.CloseSalesOrderDialogResult = function() {};
Mscrm.CloseSalesOrderDialogResult.prototype = { newStatus: null, closeDate: null, description: null };
Mscrm.CustomerDialogResult = function() {};
Mscrm.CustomerDialogResult.prototype = { customerId: null };
Mscrm.SalesOrder.registerClass("Mscrm.SalesOrder");
Mscrm.CloseSalesOrderDialogResult.registerClass("Mscrm.CloseSalesOrderDialogResult");
Mscrm.CustomerDialogResult.registerClass("Mscrm.CustomerDialogResult");
Type.registerNamespace("Mscrm");
closeOrFulfillOrder = Mscrm.SalesOrder.CloseOrFulfillOrder;
performActionAfterCloseOrder = Mscrm.SalesOrder.PerformActionAfterCloseOrder;
closeOrder = Mscrm.SalesOrder.CloseOrder;
fulfillOrder = Mscrm.SalesOrder.FulfillOrder;
processOrder = Mscrm.SalesOrder.ProcessOrder;
lockSalesOrder = Mscrm.SalesOrder.LockSalesOrder;
unlockSalesOrder = Mscrm.SalesOrder.UnlockSalesOrder;
isSalesorderActive = Mscrm.SalesOrder.IsSalesOrderActive;
isSalesorderFulfilled = Mscrm.SalesOrder.IsSalesOrderFulfilled;
isSalesorderFulfilledOrActive = Mscrm.SalesOrder.IsSalesOrderFulfilledOrActive;
isSalesorderSubmitted = Mscrm.SalesOrder.IsSalesOrderSubmitted;
isBackOfficeInstalled = Mscrm.SalesOrder.IsBackOfficeInstalled;
canAppendToCustomer = Mscrm.SalesOrder.CanAppendToCustomer;
getProductsForOrder = Mscrm.SalesOrder.GetProductsForOrder;
reCalculate = Mscrm.SalesOrder.recalculate