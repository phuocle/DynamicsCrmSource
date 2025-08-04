
var _oMessages = {sNoSelectedAttribute:LOCID_ATTRLST_MUSTSELECT,sOnlySelectOne:LOCID_ONLYSELECTONE_WARN},
    _oConst = {entityId:"entityId",attributeId:"attributeId",attributeFilter:"attributeFilter",sDisableDoubleClick:"0",sMultipleItemsSelected:"2",sCreateAttributeUrlFormat:"/tools/systemcustomization/attributes/manageAttribute.aspx?entityId={0}",sUpdateAttributeUrlFormat:"/tools/systemcustomization/attributes/manageAttribute.aspx?attributeId={0}&entityId={1}",sBulkUpdateAttributeUrlFormat:"/_grid/cmds/dlg_editattribute.aspx?iTotal={0}&iEntityId={1}",sUpdateAction:"update",sDeleteAction:"delete",sShowDependencyAction:"showdependency",sComponentHistoryAction:"componentHistory",sManagedPropertyAction:"managedProperty"},
    _sEntityId;
function AttributeListJsWindowOnLoad()
{
    var gridAttributes = $find("gridAttributes");
    _sEntityId = gridAttributes.GetParameter(_oConst.entityId);
    gridAttributes.add_onBeforeFormLoad(onAttributeDblClick);
    gridAttributes.SetParameter("disableDblClick",_oConst.sDisableDoubleClick)
}
Sys.Application.add_load(AttributeListJsWindowOnLoad);
function dispatchAction(sAttributeOid,sAction)
{
    if(sAttributeOid == null)
    {
        alert(_oMessages.sNoSelectedAttribute);
        return
    }
    if(sAttributeOid == _oConst.sMultipleItemsSelected)
    {
        alert(_oMessages.sOnlySelectOne);
        return
    }
    switch(sAction)
    {
        case _oConst.sDeleteAction:
            var gridControl = $find("gridAttributes");
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"));
            var retVal = Mscrm.GridRibbonActions.deleteRecords(gridControl,gridControl.get_selectedRecords(),Mscrm.EntityTypeCode.Attribute);
            break;
        case _oConst.sShowDependencyAction:
            Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.Attribute,getAttributeId(sAttributeOid));
            break;
        case _oConst.sComponentHistoryAction:
            Mscrm.SolutionComponentList.launchComponentHistoryDlg("Attribute",getAttributeId(sAttributeOid));
            break;
        case _oConst.sManagedPropertyAction:
            Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.Attribute,getAttributeId(sAttributeOid));
            break;
        case _oConst.sUpdateAction:
            updateAttributeAction(sAttributeOid);
            break
    }
}
function remoteAttributeCommandCallback(oResult)
{
    if(oResult.Success && oResult.RemoteCommand.Command == _oAttrUtlConst.sDeleteAttributeCommand && !IsNull(oResult.ReturnValue) && oResult.ReturnValue.Used)
        showUsage(_oSCUConst.sAttributeMode,oResult.ReturnValue);
    else
        $find("gridAttributes").Refresh();
    return true
}
function createAttributeAction()
{
    var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateAttributeUrlFormat,_sEntityId)),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute);
    openStdWin(oUrl,buildWinName(),windowInfo.Width,windowInfo.Height)
}
function updateAttributeAction(sAttributeOid)
{
    var sAttributeIds = getAttributeIds(sAttributeOid);
    if(IsNull(sAttributeIds))
        return;
    if(sAttributeIds.length > 1)
    {
        oUrl = Mscrm.CrmUri.create(formatString(_oConst.sBulkUpdateAttributeUrlFormat,sAttributeIds.length,_sEntityId));
        var result = openStdDlg(oUrl,sAttributeIds,530,380);
        result && 
            $find("gridAttributes").Refresh()
    }
    else
    {
        oUrl = Mscrm.CrmUri.create(formatString(_oConst.sUpdateAttributeUrlFormat,sAttributeIds[0],_sEntityId));
        var windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute);
        openStdWin(oUrl,buildWinName(sAttributeIds[0]),windowInfo.Width,windowInfo.Height)
    }
}
function deleteAttributeAction(sAttributeOid)
{
    var sAttributeId = getAttributeId(sAttributeOid),
        bCustomAttribute = isCustomAttribute(sAttributeOid);
    deleteAttribute(sAttributeId,bCustomAttribute,remoteAttributeCommandCallback)
}
function onFilterChange()
{
    var gridAttributes = $find("gridAttributes");
    gridAttributes.SetParameter(_oConst.attributeFilter,Mscrm.FormControlInputBehavior.GetBehavior("selFilter").get_dataValue());
    gridAttributes.ResetPageNumber();
    gridAttributes.Refresh()
}
function onAttributeDblClick(sender,args)
{
    var attributeIdsArray = new Array(1);
    attributeIdsArray[0] = args.objectID;
    updateAttributeAction(attributeIdsArray);
    args.breakEvent = true
}
function getSelectedAttributeOid()
{
    var aRecords = $find("gridAttributes").get_innerGrid().get_selectedRecords();
    if(aRecords.length > 1)
        return _oConst.sMultipleItemsSelected;
    return aRecords.length > 0 ? aRecords[0][0] : null
}
function getSelectedAttributeOids()
{
    for(var aRecords = $find("gridAttributes").get_innerGrid().get_selectedRecords(),
        ids = new Array(aRecords.length),
        i = 0; i < aRecords.length; i++)
        ids[i] = aRecords[i][0];
    return aRecords.length > 0 ? ids : null
}
function isCustomAttribute(sAttributeOid)
{
    return sAttributeOid.split(":")[0] == "1"
}
function isCustomizableAttribute(sAttributeOid)
{
    return sAttributeOid.split(":")[1] == "1"
}
function getAttributeId(sAttributeOid)
{
    return sAttributeOid.split(":")[2]
}
function getAttributeIds(sAttributeOid)
{
    ids = new Array(sAttributeOid.length);
    for(var i = 0; i < sAttributeOid.length; i++)
        ids[i] = sAttributeOid[i].split(":")[2];
    return ids
}
