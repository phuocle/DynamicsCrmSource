
var _iconUpdateConst = {sIconSmall:"iconSmall",sIconMedium:"iconMedium",sIconLarge:"iconLarge"};
function cancel()
{
    Mscrm.Utilities.setReturnValue(null);
    closeWindow()
}
function applychanges()
{
    validateParameters() && 
        submitIcons()
}
function submitIcons()
{
    var sDataXml = getIconsXml(),
        oCommand = new RemoteCommand("SystemCustomization","UpdateEntityIcons");
    oCommand.SetXmlParameter("data",sDataXml);
    executeRemoteCommand(oCommand,null,updateIconsCallback,null)
}
function validateParameters()
{
    var bValid = true;
    bValid = bValid && checkWebResourceType($get(_iconUpdateConst.sIconSmall));
    bValid = bValid && checkWebResourceType($get(_iconUpdateConst.sIconMedium));
    bValid = bValid && checkWebResourceType($get(_iconUpdateConst.sIconLarge));
    return bValid
}
function checkWebResourceType(oControl)
{
    var result = true,
        ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(oControl);
    if(!IsNull(ctrl) && ctrl.get_isDirty() && !IsNull(ctrl.get_dataValue()) && !IsImageWebResourceType(GetTypeCode(ctrl.get_dataValue()[0].id)))
    {
        alert(LOCID_UPDICNS_WRONGTYPE);
        oControl.focus();
        result = false
    }
    return result
}
function updateIconsCallback(oResult,oCallbackParams)
{
    if(oResult.Success)
    {
        Mscrm.Utilities.setReturnValue(true);
        closeWindow()
    }
    return true
}
function getIconsXml()
{
    var oDataXml = createXmlDoc(_oTags.entity);
    addTextXmlNode(oDataXml,_oTags.entityid,$get("entityId").value);
    addIconsXml(oDataXml);
    return convertXmlDocToString(oDataXml)
}
function addIconsXml(oDataXml)
{
    var oCXml = addXmlNode(oDataXml,_oTags.icons);
    addIcon(oCXml,_oTags.iconlarge,$get(_iconUpdateConst.sIconLarge));
    addIcon(oCXml,_oTags.iconmedium,$get(_iconUpdateConst.sIconMedium));
    addIcon(oCXml,_oTags.iconsmall,$get(_iconUpdateConst.sIconSmall))
}
function addIcon(oParentNode,sChildNodeName,oControl)
{
    var ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(oControl);
    if(!IsNull(ctrl) && ctrl.get_isDirty())
    {
        var dataValue = ctrl.get_dataValue();
        addTextXmlNode(oParentNode,sChildNodeName,!IsNull(dataValue) ? dataValue[0].name : "")
    }
}
