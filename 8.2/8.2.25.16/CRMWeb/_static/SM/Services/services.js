
function servicesWindowOnLoadHandler()
{
    $addHandler($get("crmForm"),"submit",SubmitOverride);
    attachWindowOnBeforeUnload(treeClose)
}
executeFunctionDeferred(servicesWindowOnLoadHandler,false,true);
function treeClose(oEvent)
{
    var crmFormCtrl = $find("crmForm");
    oEvent = oEvent.rawEvent;
    var msg = LOCID_FORMS_SAVE_CONFIRM_TITLE;
    if(crmFormCtrl.get_saving())
        return;
    var oTreeFrame = $get("IFRAME_RuleTree");
    if(oTreeFrame != null)
    {
        UpdateCalculatedFields();
        if(crmFormCtrl.BuildXml(false,true) != 3)
        {
            oEvent.returnValue = msg;
            return msg
        }
        else
            if(oTreeFrame != null && typeof oTreeFrame.contentWindow.IsDirty != "undefined" && oTreeFrame.contentWindow.IsDirty())
            {
                oEvent.returnValue = msg;
                return msg
            }
    }
}
function OnServiceSave()
{
    var oTreeFrame = $get("IFRAME_RuleTree");
    if(oTreeFrame != null)
    {
        var sRootResourceSpecId = oTreeFrame.contentWindow.Save();
        UpdateCalculatedFields();
        sRootResourceSpecId != null && 
            Mscrm.FormControlInputBehavior.GetBehavior("resourcespecid").set_dataValue(sRootResourceSpecId)
    }
}
function UpdateCalculatedFields()
{
    var oCrmFormElement = $get("crmForm"),
        oGranularityControl = Mscrm.FormControlInputBehavior.GetBehavior(oCrmFormElement.granularity.id),
        oDisplaygranularityControl = Mscrm.FormControlInputBehavior.GetBehavior(oCrmFormElement.displaygranularity.id),
        oDisplayanchoroffsetControl = Mscrm.FormControlInputBehavior.GetBehavior("displayanchoroffset"),
        oAnchoroffsetControl = Mscrm.FormControlInputBehavior.GetBehavior(oCrmFormElement.anchoroffset.id),
        dataVal = oDisplaygranularityControl.get_dataValue();
    oGranularityControl.set_dataValue(dataVal == null ? "" : formatString("FREQ=MINUTELY;INTERVAL={0};",dataVal));
    var oOffset = oDisplayanchoroffsetControl.get_dataValue(),
        iOffset = 480;
    if(oOffset != null)
        iOffset = oOffset.getHours() * 60 + oOffset.getMinutes();
    oAnchoroffsetControl.get_dataValue() != iOffset && 
        oAnchoroffsetControl.set_dataValue(iOffset.toString())
}
function SubmitOverride()
{
    return false
}
function SetNotification(sNotification)
{
    var crmNotifications = $find("crmNotifications"),
        sNotificationSource = "Resources";
    if(IsNull(sNotification) || sNotification.length == 0)
        crmNotifications.SetNotifications([],sNotificationSource);
    else
    {
        var oaNot = new Array(crmNotifications.CreateNotification("NoResources",2,sNotificationSource,sNotification));
        crmNotifications.SetNotifications(oaNot,sNotificationSource)
    }
}
