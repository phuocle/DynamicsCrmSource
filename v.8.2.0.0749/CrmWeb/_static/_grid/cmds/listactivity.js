
function applychanges(activityType, templateId) {
    if ($find("crmForm").BuildXml(true, false) == 1) {
        var parameters = [];
        parameters[0] = templateId;
        var oUrl = Mscrm.CrmUri.create("/MA/CampaignActivity/Dialogs/confirm_propagation.aspx?EntityTypeCode=" +
                CrmEncodeDecode.CrmUrlEncode(activityType)),
            crmDialog = new Mscrm.CrmDialog(oUrl, null, 410, 420, null);
        crmDialog.setCallbackInfo("applyChangesCallback", this, parameters);
        crmDialog.show()
    } else
        return false;
    return true
}

function applyChangesCallback(objRet, templateId) {
    if (!objRet)
        return;
    _custParams += "&SendEmail=" + CrmEncodeDecode.CrmUrlEncode(objRet.SendEmail);
    _custParams += "&OwnerType=" + CrmEncodeDecode.CrmUrlEncode(objRet.OwnerType);
    if (objRet.Customer)
        _custParams += "&OwnerOption=1";
    else if (objRet.Activity)
        _custParams += "&OwnerOption=2";
    else if (objRet.Myself)
        _custParams += "&OwnerOption=3";
    else if (objRet.UserQueue) {
        _custParams += "&OwnerOption=0";
        _custParams += "&OwnerId=" + CrmEncodeDecode.CrmUrlEncode(objRet.OwnerId)
    } else
        return;
    if (templateId != null)
        _custParams += "&templateId=" + templateId;
    if (objRet.AddToQueue)
        _custParams += "&QueueId=" + CrmEncodeDecode.CrmUrlEncode(objRet.QueueId);
    $find("crmForm").set_saving(true);
    __dialogXml = $get("crmFormSubmit").crmFormSubmitXml.value;
    go()
}

function SetPrevDirectionCode() {
    sPrevDirectionCode = $get("directioncode").value
}

$addHandler(document, "keydown", ExecuteKeyDown);

function ExecuteKeyDown(eventObj) {
    if (eventObj.keyCode == KEY_S)
        if (eventObj.ctrlKey || eventObj.altKey) {
            eventObj.keyCode = 0;
            eventObj.preventDefault()
        }
}