Type.registerNamespace("Mscrm");
Mscrm.Opportunity = function() {};
Mscrm.Opportunity.registerClass("Mscrm.Opportunity");

function SelectQOINav() {
    if (QOI_NAV != "") {
        var o = document.getElementById(QOI_NAV);
        if (!IsNull(o)) {
            XUI.Html.DispatchDomEvent(o, XUI.Html.CreateDomEvent("mousedown"));
            XUI.Html.DispatchDomEvent(o, XUI.Html.CreateDomEvent("click"))
        }
    }
}

function complete(bWon) {
    if (window._IsRefreshForm === "1") Mscrm.OpportunityCommandActions.opportunityClose(bWon);
    else {
        var oCrmFormSubmit = $get("crmFormSubmit"), oUrl = Mscrm.CrmUri.create("/SFA/opps/dlg_closeopp.aspx");
        oUrl.get_query()["pId"] = oCrmFormSubmit.crmFormSubmitId.value;
        oUrl.get_query()["pType"] = oCrmFormSubmit.crmFormSubmitObjectType.value;
        if (!IsNull(bWon)) oUrl.get_query()["won"] = bWon;
        var estimatedvalueValue = Mscrm.FormControlInputBehavior.GetBehavior("estimatedvalue").get_dataValue();
        if (!IsNull(estimatedvalueValue)) oUrl.get_query()["estimatedVal"] = estimatedvalueValue;
        var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterCloseOpp", this),
            ret_val = openStdDlgWithCallback(oUrl, document, 450, 420, callbackFunction);
        isOutlookHostedWindow() && performActionAfterCloseOpp(ret_val)
    }
}

function performActionAfterCloseOpp(ret_val) {
    if (ret_val) {
        var oActivityXml = createHiddenInput("crActivityXml", ret_val.ActivityXml),
            oStatusCode = createHiddenInput("crNewStatus", ret_val.StatusCode),
            oState = createHiddenInput("crNewState", ret_val.State);
        if (!$find("crmForm").SubmitCrmForm("5", true, true, false)) {
            deleteInput(oActivityXml);
            deleteInput(oStatusCode);
            deleteInput(oState)
        }
    }
}

function reactivate() {
    if (window._IsRefreshForm === "1") Mscrm.OpportunityCommandActions.opportunityReopen();
    else {
        var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterReactivateOpp", this),
            oResult = openStdDlgWithCallback(Mscrm.CrmUri.create("/SFA/opps/dlg_reopen.aspx"),
                null,
                400,
                200,
                callbackFunction);
        isOutlookHostedWindow() && performActionAfterReactivateOpp(oResult)
    }
}

function performActionAfterReactivateOpp(oResult) { oResult && $find("crmForm").SubmitCrmForm("6", true, true, false) }

function locAddObjTo(iType, bIsCustomRelationship, sRelName) {
    if (bIsCustomRelationship) {
        locAddRelatedTo(iType);
        return
    }
    var oCrmFormSubmit = $get("crmFormSubmit"),
        oCrmFormElement = $get("crmForm"),
        pricelevelidControl = Mscrm.FormControlInputBehavior.GetBehavior(oCrmFormElement.pricelevelid.id);
    if (iType == OpportunityProduct)
        if (IsNull(oCrmFormElement.pricelevelid)) alert(LOCID_PRICE_LIST_NOT_ON_FORM);
        else if (pricelevelidControl.get_dataValue() == null) alert(LOCID_PRICE_LIST_NOT_SELECTED);
        else if (pricelevelidControl.get_isDirty()) alert(LOCID_PRICE_LIST_NOT_SAVED);
        else
            openFrmObj("?opportunityid=" + CrmEncodeDecode.CrmUrlEncode(oCrmFormSubmit.crmFormSubmitId.value),
                buildWinName(),
                iType);
    else openObjEx(iType, oCrmFormSubmit.crmFormSubmitObjectType.value, oCrmFormSubmit.crmFormSubmitId.value)
}

function customAddRelatedItem(iEventId) {
    if (window._IsRefreshForm === "1")
        switch (iEventId) {
        case 22:
            Mscrm.ReadFormUtilities.execute(Mscrm.InlineCommands.OpportunityAddRelatedQuote, null);
            break;
        case 21:
            Mscrm.ReadFormUtilities.execute(Mscrm.InlineCommands.OpportunityAddRelatedOrder, null);
            break;
        case 23:
            Mscrm.ReadFormUtilities.execute(Mscrm.InlineCommands.OpportunityAddRelatedInvoice, null);
            break;
        default:
            break
        }
    else {
        var crmFormCtrl = $find("crmForm");
        if (!crmFormCtrl.IsValid()) return;
        crmFormCtrl.SubmitCrmForm(iEventId, true, true, false)
    }
}

function RefreshEstimatedRevenue(iOTC, oArgs) {
    try {
        if (window.opener != null) window.opener.auto(iOTC);
        else !IsNull(oArgs) && !IsNull(oArgs.opener) && oArgs.opener.auto(iOTC);
        Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.RecalculateRecord, null)
    } catch (e) {
    }
}