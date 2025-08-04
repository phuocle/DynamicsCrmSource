
var _oErrors = {sCannotDeleteDefaultView:LOCID_MANUIE_CANTDELDEFVIEW,sCannotDeactivateNonPublicView:LOCID_MANUIE_CANTDEANONPUBVIEW,sCannotDeactivateDefaultView:LOCID_MANUIE_CANTDEACDEFVIEW,sCannotDefaultInactiveView:LOCID_MANUIE_CANTDEFINACTVIEW,sNoSelectedView:LOCID_MANUIE_MUSTSELECT,sCannotSetDefaultView:LOCID_MANUIE_CANTSETDEFVIEW},
    _oConst = {entityOtc:"entityOtc",entityLogicalName:"entityLogicalName",uiElementsFilter:"uiElementsFilter",sDisableDoubleClick:"0",sEditAction:"edit",sDeleteAction:"delete",sSetDefaultAction:"setDefault",sShowDependencyAction:"showDependency",sActivateAction:"activate",sDeactivateAction:"deactivate",sManagedPropertyAction:"managedProperty",sCreateViewUrlFormat:"/tools/vieweditor/viewManager.aspx?objectTypeCode={0}&mode=new&entityId={1}",sEditViewUrlFormat:"/tools/vieweditor/viewManager.aspx?id={0}&entityId={1}",iViewEditorWidth:800,iViewEditorHeight:510,sActivePublicView:"ActivePublic",sInactivePublicView:"InactivePublic",sDefaultPublicView:"DefaultPublic",sViewStateActive:"Active",sViewStateInactive:"Inactive",sSetDefaultUrlFormat:"/tools/ViewEditor/cmds/cmd_setdefaultview.aspx?newId={0}&oldId={1}&{2}"},
    _entityOtc,
    _entityLogicalName,
    _oUIElementActions = {GetAction:_oUIElementActions_getAction,$edit:editView,$delete:deleteView,$setDefault:setDefaultView,$activate:activateView,$deactivate:deactivateView};
function _oUIElementActions_getAction(sAction)
{
    return this["$" + sAction]
}
Sys.Application.add_load(UiElementsJsWindowOnLoad);
function UiElementsJsWindowOnLoad()
{
    var gridUIElements = $find("gridUIElements");
    _entityOtc = gridUIElements.GetParameter(_oConst.entityOtc);
    _entityLogicalName = gridUIElements.GetParameter(_oConst.entityLogicalName);
    gridUIElements.add_onBeforeFormLoad(onUIElementDblClick);
    gridUIElements.SetParameter("disableDblClick",_oConst.sDisableDoubleClick)
}
function dispatchAction(sUIElementOid,sAction)
{
    if(sUIElementOid == null)
        alert(_oErrors.sNoSelectedView);
    else
        switch(sAction)
        {
            case _oConst.sShowDependencyAction:
                Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.SavedQuery,getViewId(sUIElementOid));
                break;
            case _oConst.sManagedPropertyAction:
                Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.SavedQuery,getViewId(sUIElementOid));
                break;
            default:
                var oAction = _oUIElementActions.GetAction(sAction);
                if(typeof oAction == "function")
                    oAction(sUIElementOid);
                else
                    typeof oAction == "string" && 
                        alert(oAction)
        }
}
function createView()
{
    var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateViewUrlFormat,_entityOtc,CrmEncodeDecode.CrmUrlEncode(GetEntityIdFromQuery())));
    openStdWin(oUrl,buildWinName(),_oConst.iViewEditorWidth,_oConst.iViewEditorHeight)
}
function deleteView(sUIElementOid)
{
    if(getViewType(sUIElementOid) == _oConst.sDefaultPublicView)
    {
        alert(_oErrors.sCannotDeleteDefaultView);
        return
    }
    doAction(null,SavedQuery,_oConst.sDeleteAction,getViewId(sUIElementOid));
    $find("gridUIElements").Refresh();
    isOutlookHostedWindow() && 
        getOutlookHostedWindow().RefreshViewList()
}
function editView(sUIElementOid)
{
    var viewId = getViewId(sUIElementOid),
        oUrl = Mscrm.CrmUri.create(formatString(_oConst.sEditViewUrlFormat,viewId,CrmEncodeDecode.CrmUrlEncode(GetEntityIdFromQuery())));
    if(viewId == getDefaultViewId())
        oUrl.get_query()["default"] = "1";
    openStdWin(oUrl,buildWinName(viewId),_oConst.iViewEditorWidth,_oConst.iViewEditorHeight)
}
function setDefaultView(sUIElementOid)
{
    var sViewType = getViewType(sUIElementOid);
    switch(sViewType)
    {
        case _oConst.sActivePublicView:
            var sUrl = Mscrm.CrmUri.create(formatString(_oConst.sSetDefaultUrlFormat,getViewId(sUIElementOid),getDefaultViewId(),GetTokenAsQS(Mscrm.CrmUri.create("/tools/ViewEditor/cmds/cmd_setdefaultview.aspx")))).toString(),
                xmlhttp = new XMLHttpRequest;
            xmlhttp.open("POST",sUrl,false);
            Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
            xmlhttp.send();
            handleXMLErr(xmlhttp.responseXML);
            $find("gridUIElements").Refresh();
            break;
        case _oConst.sInactivePublicView:
            alert(_oErrors.sCannotDefaultInactiveView);
            break;
        case _oConst.sDefaultPublicView:
            break;
        default:
            alert(_oErrors.sCannotSetDefaultView);
            break
    }
}
function activateView(sUIElementOid)
{
    var sViewType = getViewType(sUIElementOid);
    if(sViewType != _oConst.sInactivePublicView)
        return;
    changeViewState(sUIElementOid,_oConst.sViewStateActive,sViewType)
}
function deactivateView(sUIElementOid)
{
    var sViewType = getViewType(sUIElementOid);
    if(sViewType == _oConst.sInactivePublicView)
        return;
    changeViewState(sUIElementOid,_oConst.sViewStateInactive,sViewType)
}
function changeViewState(sUIElementOid,stateCode,sViewType)
{
    switch(sViewType)
    {
        case _oConst.sActivePublicView:
        case _oConst.sInactivePublicView:
            var gridUIElements = $find("gridUIElements");
            gridUIElements.ShowLoadingMessage();
            var oCommand = new RemoteCommand("SystemCustomization","ChangeViewState");
            oCommand.SetParameter("viewId",getViewId(sUIElementOid));
            oCommand.SetParameter("stateCode",stateCode);
            oCommand.Execute();
            gridUIElements.Refresh();
            break;
        case _oConst.sDefaultPublicView:
            alert(_oErrors.sCannotDeactivateDefaultView);
            break;
        default:
            alert(_oErrors.sCannotDeactivateNonPublicView);
            break
    }
}
function getDefaultViewId()
{
    for(var sUIElementOid,
        aRecords = $find("gridUIElements").get_innerGrid().get_allRecords(),
        i = 0; i < aRecords.length; i++)
    {
        sUIElementOid = aRecords[i][0];
        if(getViewType(sUIElementOid) == _oConst.sDefaultPublicView)
            return getViewId(sUIElementOid)
    }
    return ""
}
function getViewType(sUIElementOid)
{
    return sUIElementOid.split(":")[1]
}
function getViewId(sUIElementOid)
{
    return sUIElementOid.split(":")[2]
}
function onUIElementDblClick(sender,args)
{
    var sUIElementOid = args.objectID;
    dispatchAction(sUIElementOid,_oConst.sEditAction);
    args.breakEvent = true
}
function onFilterChange()
{
    var gridUIElements = $find("gridUIElements");
    gridUIElements.SetParameter(_oConst.uiElementsFilter,Mscrm.FormControlInputBehavior.GetBehavior("selFilter").get_dataValue());
    gridUIElements.ResetPageNumber();
    gridUIElements.Refresh()
}
function getSelectedUIElementOid()
{
    var aRecords = $find("gridUIElements").get_innerGrid().get_selectedRecords();
    return aRecords.length > 0 ? aRecords[0][0] : null
}
function GetEntityIdFromQuery()
{
    var oUrl = Mscrm.CrmUri.create(window.location.search);
    return oUrl.get_query()["entityId"]
}
