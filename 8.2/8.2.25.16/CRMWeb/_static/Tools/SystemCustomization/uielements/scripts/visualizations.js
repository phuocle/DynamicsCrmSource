
var _oErrors = {sNoneSelected:LOCID_MANUIE_MUSTSELECT},
    _oConst = {entityOtc:"entityOtc",visualizationsFilters:"visualizationsFilters",sEditAction:"edit",sDeleteAction:"delete",sExportAction:"export",sShowDependencyAction:"showDependency",sManagedPropertyAction:"managedProperty",sDisableDoubleClick:"0"},
    _entityOtc,
    _oVisualizationActions = {GetAction:_oVisualizationActions_getAction,actions:{$edit:editVisualization,$delete:deleteVisualization,$export:exportVisualization}};
function _oVisualizationActions_getAction(sAction)
{
    return this["actions"]["$" + sAction]
}
function VisualizationsJsWindowOnLoad()
{
    var gridVisualizations = $find("gridVisualizations");
    _entityOtc = gridVisualizations.GetParameter(_oConst.entityOtc);
    gridVisualizations.add_onBeforeFormLoad(onVisualizationDblClick);
    gridVisualizations.SetParameter("disableDblClick",_oConst.sDisableDoubleClick)
}
Sys.Application.add_load(VisualizationsJsWindowOnLoad);
function dispatchAction(sOid,sAction)
{
    if(sOid == null)
        alert(_oErrors.sNoneSelected);
    else
        switch(sAction)
        {
            case _oConst.sShowDependencyAction:
                Mscrm.Dependency.launchDependencyDlg(Mscrm.EntityTypeCode.SavedQueryVisualization,sOid);
                break;
            case _oConst.sManagedPropertyAction:
                Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(Mscrm.EntityTypeCode.SavedQueryVisualization,sOid);
                break;
            default:
                var oAction = _oVisualizationActions.GetAction(sAction);
                oAction(sOid);
                break
        }
}
function createVisualization()
{
    var uri = Mscrm.CrmUri.create("/main.aspx?pagetype=vizdesigner"),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.SavedQueryVisualization);
    uri.get_query()["extraqs"] = "etc=" + _entityOtc;
    openStdWin(uri.toString(),buildWinName(),windowInfo.Width,windowInfo.Height,"resizable=0")
}
function importVisualization()
{
    Mscrm.VisualizationActions.importVisualization(Mscrm.EntityTypeCode.SavedQueryVisualization);
    Mscrm.VisualizationActions.refreshVisualizationsGrid()
}
function deleteVisualization(sOid)
{
    doAction(null,SavedQueryVisualization,_oConst.sDeleteAction,sOid);
    Mscrm.VisualizationActions.refreshVisualizationsGrid()
}
function onFilterChange()
{
    var gridVisualizations = $find("gridVisualizations");
    gridVisualizations.SetParameter(_oConst.visualizationsFilters,Mscrm.FormControlInputBehavior.GetBehavior("selectFilter").get_dataValue());
    gridVisualizations.ResetPageNumber();
    gridVisualizations.Refresh()
}
function editVisualization(sOid)
{
    if(_bCanUpdateViews)
    {
        var uri = Mscrm.CrmUri.create("/main.aspx?pagetype=vizdesigner"),
            windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.SavedQueryVisualization);
        uri.get_query()["extraqs"] = "etc=" + _entityOtc + "&id=" + sOid;
        openStdWin(uri.toString(),buildWinName(sOid),windowInfo.Width,windowInfo.Height,"resizable=0")
    }
    else
        showError(_oSCUErrorCodes.sAccessDenied)
}
function exportVisualization(sOid)
{
    Mscrm.VisualizationActions.exportVisualization(sOid,Mscrm.EntityTypeCode.SavedQueryVisualization,true,document.getElementById("exportChartDiv"))
}
function onVisualizationDblClick(sender,args)
{
    dispatchAction(args.objectID,_oConst.sEditAction);
    args.breakEvent = true
}
function getSelectedVisualizationOid()
{
    var aRecords = $find("gridVisualizations").get_innerGrid().get_selectedRecords();
    return aRecords.length > 0 ? aRecords[0][0] : null
}
