
var _oId = new Array(_sCurrentObjectId);
function openFormObj(sAction,sGrid)
{
    var iX,
        iY,
        oUrl,
        obj = null;
    switch(sAction)
    {
        case "addteam":
            oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_addteamuser.aspx?iObjType=" + Mscrm.EntityTypeCode.Team + "&iTotal=1");
            iX = 400;
            iY = 330;
            obj = openStdDlg(oUrl,_oId,iX,iY);
            getCrmGrid().Refresh();
            break;
        case "addroles":
            oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_role.aspx?iObjType=" + Mscrm.EntityTypeCode.SystemUser + "&iTotal=1");
            iX = 500;
            iY = 350;
            var crmDialog = new Mscrm.CrmDialog(oUrl,_oId,iX,iY,null),
                parameters = [getCrmGrid()];
            crmDialog.setCallbackInfo("PerformActionAfterRemoveRoles",this,parameters);
            crmDialog.show();
            break
    }
    return
}
function RemoveTeam(sGrid)
{
    var a = getSelected(sGrid);
    if(a.length > 0)
    {
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_removeteams.aspx");
        oUrl.get_query()["iObjType"] = Mscrm.EntityTypeCode.SystemUser;
        oUrl.get_query()["iTotal"] = a.length;
        oUrl.get_query()["userid"] = _sCurrentObjectId;
        openStdDlg(oUrl,a,400,200) && 
            getCrmGrid().Refresh();
        return
    }
    else
        alert(LOCID_NO_ITEM_SELECTED)
}
function RemoveRoles(sGrid)
{
    var a = getSelected(sGrid);
    if(a.length > 0)
    {
        var iAllRoles = $find(sGrid).get_innerGrid().get_numberOfRecords(),
            oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_removeroles.aspx");
        oUrl.get_query()["iObjType"] = Mscrm.EntityTypeCode.SystemUser;
        oUrl.get_query()["iTotal"] = a.length;
        oUrl.get_query()["iAllRoles"] = iAllRoles;
        oUrl.get_query()["userid"] = _sCurrentObjectId;
        var parameters = [getCrmGrid()],
            crmDialog = new Mscrm.CrmDialog(oUrl,a,500,200,null);
        crmDialog.setCallbackInfo("PerformActionAfterRemoveRoles",this,parameters);
        crmDialog.show();
        return
    }
    else
        alert(LOCID_NO_ITEM_SELECTED)
}
function PerformActionAfterRemoveRoles(returnValue,gridControl)
{
    returnValue && !IsNull(gridControl) && 
        gridControl.refresh()
}
