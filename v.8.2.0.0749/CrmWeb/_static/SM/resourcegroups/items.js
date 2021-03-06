
var ACTION_ADD = 0,
    ACTION_REMOVE = 1;

function ModifyItems(oInputGrid, oRefreshGrid, aTargetIds, action) {
    if (oInputGrid) {
        var aTargetIds = getSelected(oInputGrid);
        if (!aTargetIds) {
            alert(LOCID_ACTION_NOITEMSELECTED);
            return false
        }
    }
    var targetids = "",
        memberXml = "",
        oTypeToAdd = "4000",
        lookupSelectionStatus = "multi",
        oTypesToAdd = formatString("{0},{1},{2},{3}", SystemUser, Team, Equipment, ResourceGroup);
    for (i = 0; i < aTargetIds.length; i++)
        targetids += aTargetIds[i] + ";";
    var parameters = [aTargetIds, targetids, action, oTypeToAdd, oRefreshGrid],
        callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterLookUpItemSelect", this, parameters, false);
    LookupObjectsWithCallback(callbackFunctionObject, null, lookupSelectionStatus, oTypesToAdd, 0)
}

function performActionAfterLookUpItemSelect(retval, aTargetIds, targetids, action, oTypeToAdd, oRefreshGrid) {
    var retvals = "";
    if (!retval || retval.items.length == 0)
        return false;
    else {
        for (var aResourceGroups = [],
            i = 0;
            i < retval.items.length;
            i++)
            if (retval.items[i].type == ResourceGroup)
                aResourceGroups.push(retval.items[i]);
            else
                retvals += retval.items[i].id + ";";
        if (aResourceGroups.length > 0) {
            var aCircularFlags = HandleCircularReferences(aTargetIds, aResourceGroups),
                aCircularKidsNames = [];
            for (i = 0; i < aResourceGroups.length; i++)
                if (aCircularFlags[i] == true)
                    aCircularKidsNames.push(aResourceGroups[i].name);
                else
                    retvals += aResourceGroups[i].id + ";";
            aCircularKidsNames.length > 0 &&
                ShowCycleError(aCircularKidsNames)
        }
        if (retvals.length > 0) {
            targetids = targetids.substr(0, targetids.length - 1);
            retvals = retvals.substr(0, retvals.length - 1);
            memberXml = "<membership>";
            memberXml += "<resources>" + retvals + "</resources>";
            memberXml += "<resourcegroups>" + targetids + "</resourcegroups></membership>";
            var oXml = XUI.Xml.LoadXml(memberXml),
                submitUrl = null;
            if (action == ACTION_ADD)
                submitUrl = Mscrm.CrmUri.create("/_grid/cmds/cmd_additems.aspx");
            else if (action == ACTION_REMOVE)
                submitUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_removeitems.aspx");
            else
                submitUrl = Mscrm.CrmUri.create("");
            var xmlhttp = new XMLHttpRequest;
            submitUrl.get_query()["iObjType"] = oTypeToAdd;
            xmlhttp.open("POST", submitUrl.toString(), false);
            Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
            SetTokenInHeader(xmlhttp, submitUrl);
            xmlhttp.send(oXml);
            oRefreshGrid &&
                handleXMLErr(xmlhttp.responseXML) &&
                $find(oRefreshGrid).Refresh()
        }
    }
}

function HandleCircularReferences(aParentGuids, aChildren) {
    aParentGuids.type = "guid";
    for (var aChildGuids = [],
        i = 0;
        i < aChildren.length;
        i++)
        aChildGuids.push(aChildren[i].id);
    aChildGuids.type = "guid";
    var aReturnItems = [],
        oCommand = new RemoteCommand("ResourceGroupUI", "IsResourceGroupCycle");
    if (oCommand != null) {
        oCommand.SetParameter("parentIds", aParentGuids);
        oCommand.SetParameter("childCandidates", aChildGuids);
        var oResult = oCommand.Execute();
        if (oResult.Success)
            if (isArray(oResult.ReturnValue.boolean))
                aReturnItems = oResult.ReturnValue.boolean;
            else
                aReturnItems.push(oResult.ReturnValue.boolean)
    }
    return aReturnItems
}

function ShowCycleError(aCircularKidsNames) {
    var oUrl = Mscrm.CrmUri.create("/SM/ResourceGroups/cycledialog.aspx");
    oUrl.get_query()["cyclecount"] = aCircularKidsNames.length;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 270;
    dialogOptions.width = 460;
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, aCircularKidsNames, null, null)
}

function RemoveItems(sGrid, sGroupId) {
    var aTargetIds = getSelected(sGrid);
    if (aTargetIds.length > 0) {
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_removeitems.aspx");
        oUrl.get_query()["iTotal"] = aTargetIds.length;
        oUrl.get_query()["groupid"] = sGroupId;
        var parameters = [sGrid],
            callBackForRemoveItemsObject = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(callBackForRemoveItems, parameters),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 200;
        dialogOptions.width = 690;
        Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, aTargetIds, null, callBackForRemoveItemsObject)
    } else
        alert(LOCID_ACTION_NOITEMSELECTED)
}

function callBackForRemoveItems(oRet, sGrid) {
    oRet &&
        $find(sGrid).Refresh()
}