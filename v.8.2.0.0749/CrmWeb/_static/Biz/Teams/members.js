
var ACTION_ADD = 0,
    AppSalesPersonTypeCode = 9003;

function ModifyMembership(oInputGrid, refreshGridId, aTargetIds, action, oTypeToAdd, additionalParams, dataProvider) {
    if (oInputGrid) {
        var aTargetIds = getSelected(oInputGrid);
        if (IsNull(aTargetIds) || aTargetIds.length == 0) {
            alert(LOCID_ACTION_NOITEMSELECTED);
            return false
        }
    }
    var targetids = "";
    for (i = 0; i < aTargetIds.length; i++)
        targetids += aTargetIds[i] + ";";
    var parameters = [targetids, oTypeToAdd, action, refreshGridId];
    if (!Xrm.Internal.isTurboForm()) {
        var lookupSelectionStatus = "multi";
        if (oTypeToAdd == Territory)
            lookupSelectionStatus = "single";
        var callbackRef = Mscrm.Utilities
            .createCallbackFunctionObject("modifyMemberShipAction", this, parameters, false);
        if (typeof dataProvider != "undefined" && !isNullOrEmptyString(dataProvider))
            LookupObjectsWithCallback(callbackRef,
                null,
                lookupSelectionStatus,
                oTypeToAdd == AppSalesPerson ? SystemUser : oTypeToAdd,
                0,
                null,
                additionalParams,
                0,
                0,
                1,
                "",
                "",
                dataProvider);
        else
            LookupObjectsWithCallback(callbackRef,
                null,
                lookupSelectionStatus,
                oTypeToAdd == AppSalesPerson ? SystemUser : oTypeToAdd,
                0,
                null,
                additionalParams)
    } else {
        var lookupOptions = new Xrm.LookupOptions;
        lookupOptions.lookupTypes = [
            Xrm.Internal.getEntityName(oTypeToAdd == AppSalesPersonTypeCode ? SystemUser : oTypeToAdd)
        ];
        if (oTypeToAdd == Mscrm.InternalUtilities.EntityTypeCode.Territory)
            lookupOptions.lookupStyle = Xrm.LookupStyle.single;
        else
            lookupOptions.lookupStyle = Xrm.LookupStyle.multi;
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(additionalParams) &&
            additionalParams.indexOf("filterdefault=1")) {
            var additionalParams = {};
            additionalParams["filterdefault"] = 1;
            lookupOptions.additionalParams = additionalParams
        }
        if (typeof dataProvider != "undefined" && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(dataProvider))
            lookupOptions.dataProviderOverride = dataProvider;
        Xrm.Internal.lookupObjects(lookupOptions,
            function(lookupItems) {
                modifyMemberShipActionTurbo(lookupItems, targetids, oTypeToAdd, action, refreshGridId)
            })
    }
}

function modifyMemberShipActionTurbo(lookupItems, targetids, oTypeToAdd, action, refreshGridId) {
    var retvals = "";
    if (IsNull(lookupItems) || !lookupItems.length)
        return;
    else {
        for (i = 0; i < lookupItems.length; i++)
            retvals += lookupItems[i].id + ";";
        var xmlhttp = getXmlHttpRequest(targetids, retvals, oTypeToAdd, action),
            oXml = xmlhttp.responseXML,
            gridControl = Xrm.Page.ui.controls.get(refreshGridId);
        !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) &&
            gridControl.refresh()
    }
}

function modifyMemberShipAction(retval, targetids, oTypeToAdd, action, refreshGridId) {
    var retvals = "";
    if (!retval || retval.items.length == 0)
        return false;
    else {
        for (i = 0; i < retval.items.length; i++)
            retvals += retval.items[i].id + ";";
        var xmlhttp = getXmlHttpRequest(targetids, retvals, oTypeToAdd, action),
            oXml = xmlhttp.responseXML,
            gridControl = $find(refreshGridId);
        !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) &&
            handleXMLErr(oXml) &&
            gridControl.Refresh()
    }
}

function getXmlHttpRequest(targetids, retvals, oTypeToAdd, action) {
    var memberXml = "";
    targetids = targetids.substr(0, targetids.length - 1);
    retvals = retvals.substr(0, retvals.length - 1);
    switch (oTypeToAdd) {
    case Mscrm.InternalUtilities.EntityTypeCode.SystemUser:
    case AppSalesPersonTypeCode:
        memberXml = "<membership><users>" + retvals + "</users><teams>" + targetids + "</teams></membership>";
        break;
    case Mscrm.InternalUtilities.EntityTypeCode.Team:
        memberXml = "<membership><users>" + targetids + "</users><teams>" + retvals + "</teams></membership>";
        oTypeToAdd = Mscrm.InternalUtilities.EntityTypeCode.SystemUser;
        break;
    case Mscrm.InternalUtilities.EntityTypeCode.Territory:
        memberXml = "<membership><users>" + targetids + "</users><teams>" + retvals + "</teams></membership>";
        oTypeToAdd = AppSalesPersonTypeCode;
        break
    }
    var oXml = XUI.Xml.LoadXml(memberXml),
        submitUrl = Mscrm.CrmUri.create("");
    if (action == ACTION_ADD)
        submitUrl = Mscrm.CrmUri.create("/_grid/cmds/cmd_adduserteam.aspx");
    var xmlhttp = new XMLHttpRequest;
    submitUrl.get_query()["iObjType"] = oTypeToAdd;
    xmlhttp.open("POST", submitUrl.toString(), false);
    if (Xrm.Internal.isTurboForm())
        window.parent.Mscrm.WrpcTokenFuncs.setTokenInHeader(xmlhttp, submitUrl);
    else {
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp, submitUrl)
    }
    xmlhttp.send(oXml);
    return xmlhttp
}

function processLookupIds(lookup_results, okButton) {
    try {
        var oLUItems = lookup_results.items,
            oIds = new Array(oLUItems.length);
        if (oLUItems.length < 1) {
            okButton.disabled = true;
            return
        }
        for (i = 0; i < oLUItems.length; ++i)
            oIds[i] = oLUItems[i].id;
        okButton.disabled = false;
        __dialogXml = "<userids>" + oIds.join(";") + "</userids>"
    } catch (e) {
        okButton.disabled = __dialogXml == ""
    }
}