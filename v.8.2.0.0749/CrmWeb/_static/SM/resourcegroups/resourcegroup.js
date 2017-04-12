
function JoinGroup(sGrid, sTargetId) {
    var oTypeToAdd = "4007",
        lookupSelectionStatus = "multi",
        oTypesToAdd = ResourceGroup.toString(),
        parameters = [sGrid, sTargetId],
        callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterLookUpSelect", this, parameters, false);
    LookupObjectsWithCallback(callbackFunctionObject, null, lookupSelectionStatus, oTypesToAdd, 0)
}

function performActionAfterLookUpSelect(retval, sGrid, sTargetId) {
    var retvals = "";
    if (!retval || retval.items.length == 0)
        return false;
    else {
        for (i = 0; i < retval.items.length; i++)
            retvals += retval.items[i].id + ";";
        retvals = retvals.substr(0, retvals.length - 1);
        var memberXml = "";
        memberXml = "<membership>";
        memberXml += "<resources>" + sTargetId + "</resources>";
        memberXml += "<resourcegroups>" + retvals + "</resourcegroups></membership>";
        var oXml = XUI.Xml.LoadXml(memberXml),
            xmlhttp = new XMLHttpRequest;
        xmlhttp.open("POST", Mscrm.CrmUri.create("/_grid/cmds/cmd_additems.aspx").toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp, Mscrm.CrmUri.create("/_grid/cmds/cmd_additems.aspx"));
        xmlhttp.send(oXml);
        var oXml = xmlhttp.responseXML;
        sGrid &&
            handleXMLErr(oXml) &&
            $find(sGrid).Refresh()
    }
}

function DepartGroup(sGrid, sTargetId) {
    var a = getSelected(sGrid);
    if (a.length > 0) {
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_departgroups.aspx");
        oUrl.get_query()["iTotal"] = a.length;
        oUrl.get_query()["targetid"] = sTargetId;
        var parameters = new Array(sGrid),
            callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("DepartGroupCallBack", this, parameters);
        openStdDlgWithCallback(oUrl, a, 400, 230, callbackFunction)
    } else
        alert(LOCID_ACTION_NOITEMSELECTED)
}

function DepartGroupCallBack(returnValue, sGrid) {
    returnValue &&
        $find(sGrid).Refresh()
}

function PublishResourceGroups() {
    var command = new RemoteCommand("ResourceSpecTree", "PublishResourceGroups");
    command.Execute(PublishResourceGroupsCallback)
}

function PublishResourceGroupsCallback(oResult) {
    if (!oResult.Success)
        return
}

function deleteGroup(sGrid) {
    var a = getSelected(sGrid);
    if (a.length > 0)
        if (!CheckForReferences(a, sGrid))
            return;
    doAction(sGrid, ResourceGroup, "delete")
}

function CheckForReferences(aTargetGuids, sGrid) {
    aTargetGuids.type = "guid";
    var oCommand = new RemoteCommand("ResourceGroupUI", "IsResourceGroupChild");
    if (oCommand != null) {
        oCommand.SetParameter("ids", aTargetGuids);
        var oResult = oCommand.Execute();
        if (oResult.Success)
            if (oResult.ReturnValue) {
                var dialogUrl = Mscrm.CrmUri.create("/SM/ResourceGroups/deletewarndialog.aspx"),
                    setValueFunctionCallBack = Mscrm.Utilities
                        .createCallbackFunctionForXrmDialog(setValueFunction, [sGrid]),
                    dialogOptions = new Xrm.DialogOptions;
                dialogOptions.height = 270;
                dialogOptions.width = 460;
                Xrm.Internal.openDialog(dialogUrl.toString(), dialogOptions, null, null, setValueFunctionCallBack);
                return false
            }
    }
    return true
}

function setValueFunction(objRet, sGrid) {
    objRet &&
        doAction(sGrid, ResourceGroup, "delete")
}