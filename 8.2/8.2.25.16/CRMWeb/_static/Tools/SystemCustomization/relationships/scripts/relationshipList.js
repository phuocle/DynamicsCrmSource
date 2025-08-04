
var _oMessages = {sNoSelectedRelationship:LOCID_RELLST_MUSTSELECT},
    _oConst = {custom:"custom",referenced:"referenced",referencing:"referencing",manyToMany:"many",entityId:"entityId",relationshipFilter:"relationshipFilter",sDisableDoubleClick:"0",sCreateRelationshipUrlFormat:"/tools/systemcustomization/relationships/manageRelationship.aspx?entityRole={0}&entityId={1}",sUpdateRelationshipUrlFormat:"/tools/systemcustomization/relationships/manageRelationship.aspx?entityRole={0}&entityRelationshipId={1}&entityId={2}",sUpdateAction:"update",sDeleteAction:"delete",sShowDependencyAction:"showdependency",sManagedPropertyAction:"managedProperty"},
    _sEntityId;
Sys.Application.add_load(RelationshipListJsWindowOnLoad);
function RelationshipListJsWindowOnLoad()
{
    var gridRelationships = $find("gridRelationships");
    _sEntityId = gridRelationships.GetParameter(_oConst.entityId);
    gridRelationships.add_onBeforeFormLoad(onRelationshipDblClick);
    gridRelationships.SetParameter("disableDblClick",_oConst.sDisableDoubleClick)
}
function dispatchAction(sRelationshipOid,sAction)
{
    if(sRelationshipOid == null)
    {
        alert(_oMessages.sNoSelectedRelationship);
        return
    }
    switch(sAction)
    {
        case _oConst.sDeleteAction:
            var gridControl = $find("gridRelationships");
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"));
            Mscrm.GridRibbonActions.deleteRecords(gridControl,gridControl.get_selectedRecords(),Mscrm.EntityTypeCode.EntityRelationship);
            break;
        case _oConst.sShowDependencyAction:
            Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.EntityRelationship,getRelationshipId(sRelationshipOid));
            break;
        case _oConst.sManagedPropertyAction:
            Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.EntityRelationship,getRelationshipId(sRelationshipOid));
            break;
        case _oConst.sUpdateAction:
            updateRelationshipAction(sRelationshipOid);
            break
    }
}
function remoteRelationshipCommandCallback(oResult)
{
    if(oResult.Success && oResult.RemoteCommand.Command == _oRelUtlConst.sDeleteRelationshipCommand && !IsNull(oResult.ReturnValue) && oResult.ReturnValue.Used)
        showUsage(_oSCUConst.sRelationshipMode,oResult.ReturnValue);
    else
        $find("gridRelationships").Refresh();
    return true
}
function createRelationshipAction(iRole)
{
    var role = _oConst.referenced;
    if(iRole == 1)
        role = _oConst.referencing;
    else
        if(iRole == 2)
            role = _oConst.manyToMany;
    var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateRelationshipUrlFormat,role,_sEntityId)),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Relationship);
    openStdWin(oUrl,buildWinName(),windowInfo.Width,windowInfo.Height)
}
function updateRelationshipAction(sRelationshipOid)
{
    var sRelationshipId = getRelationshipId(sRelationshipOid),
        sRelationshipRole = getEntityRole(sRelationshipOid),
        oUrl = Mscrm.CrmUri.create(formatString(_oConst.sUpdateRelationshipUrlFormat,sRelationshipRole,sRelationshipId,_sEntityId)),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Relationship);
    openStdWin(oUrl,buildWinName(sRelationshipId),windowInfo.Width,windowInfo.Height)
}
function deleteRelationshipAction(sRelationshipOid)
{
    var sRelationshipId = getRelationshipId(sRelationshipOid),
        bCustomRelationship = getRelationshipType(sRelationshipOid) == _oConst.custom;
    deleteRelationship(sRelationshipId,bCustomRelationship,remoteRelationshipCommandCallback)
}
function onFilterChange()
{
    var iTypeFilter = selTypeFilter.value,
        gridRelationships = $find("gridRelationships");
    gridRelationships.SetParameter(_oConst.relationshipFilter,(iTypeFilter | _relationshipRole).toString());
    gridRelationships.ResetPageNumber();
    gridRelationships.Refresh()
}
function onRelationshipDblClick(sender,args)
{
    updateRelationshipAction(args.objectID);
    args.breakEvent = true
}
function getSelectedRelationshipOid()
{
    var aRecords = $find("gridRelationships").get_innerGrid().get_selectedRecords();
    return aRecords.length > 0 ? aRecords[0][0] : null
}
function getRelationshipType(sRelationshipOid)
{
    return sRelationshipOid.split(":")[0]
}
function getEntityRole(sRelationshipOid)
{
    return sRelationshipOid.split(":")[1]
}
function getRelationshipId(sRelationshipOid)
{
    return sRelationshipOid.split(":")[2]
}
