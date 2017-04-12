
var ACTION_ADD = 0,
    ACTION_REMOVE = 1;

function AddMembers(oRefreshGrid, sTargetId) {
    if (!sTargetId)
        return false;
    var lookupSelectionStatus = "multi",
        oTypesToAdd = SystemUser + "," + Equipment,
        parameters = [oRefreshGrid, sTargetId],
        callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterLookUpAddMember", this, parameters, false);
    LookupObjectsWithCallback(callbackFunctionObject, null, lookupSelectionStatus, oTypesToAdd, 0)
}

function performActionAfterLookUpAddMember(retval, oRefreshGrid, sTargetId) {
    var memberXml = "",
        equipment = "",
        users = "";
    if (!retval || retval.items.length == 0)
        return false;
    else {
        for (i = 0; i < retval.items.length; i++)
            if (retval.items[i].type == Equipment)
                equipment += retval.items[i].id + ";";
            else if (retval.items[i].type == SystemUser)
                users += retval.items[i].id + ";";
        memberXml = "<membership>";
        if (equipment.length > 0) {
            equipment = equipment.substr(0, equipment.length - 1);
            memberXml += "<equipment>" + equipment + "</equipment>"
        }
        if (users.length > 0) {
            users = users.substr(0, users.length - 1);
            memberXml += "<users>" + users + "</users>"
        }
        memberXml += "<site>" + sTargetId + "</site></membership>";
        var oXml = XUI.Xml.LoadXml(memberXml),
            xmlhttp = new XMLHttpRequest,
            oUrl = Mscrm.CrmUri.create("/_grid/cmds/cmd_addsitemembers.aspx");
        xmlhttp.open("POST", oUrl.toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp, oUrl);
        xmlhttp.send(oXml);
        var oXml = xmlhttp.responseXML;
        oRefreshGrid &&
            handleXMLErr(oXml) &&
            $find(oRefreshGrid).Refresh()
    }
}

function RemoveMembers(sGrid, sGroupId) {
    var aSelectedMembers = getSelected(sGrid);
    if (aSelectedMembers.length > 0) {
        var dialogUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_removesitemembers.aspx?iTotal=" + aSelectedMembers.length),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 250;
        dialogOptions.width = 500;
        Xrm.Internal.openDialog(dialogUrl.toString(),
            dialogOptions,
            aSelectedMembers,
            null,
            function(result) {
                result &&
                    $find(sGrid).Refresh()
            })
    } else
        alert(LOCID_ACTION_NOITEMSELECTED)
}