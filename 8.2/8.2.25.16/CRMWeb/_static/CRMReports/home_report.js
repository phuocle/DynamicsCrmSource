
function homeReportWindowOnLoadHandler()
{
    var crmGrid = $find("crmGrid");
    crmGrid.add_onBeforeFormLoad(Mscrm.ReportUtil.handleReportDoubleClick);
    try
    {
        top.setNav("reports")
    }
    catch(e)
    {
    }
}
executeFunctionDeferred(homeReportWindowOnLoadHandler,false,true)
