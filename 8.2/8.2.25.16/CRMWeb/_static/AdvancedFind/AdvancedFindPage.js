
var QueryPage = 1,
    SavedViewsPage = 2,
    ResultsPage = 3,
    _currentPage = QueryPage,
    _mainWindow = IsFetchDataPage() ? window.parent : window;
function IsFetchDataPage()
{
    return window.location.pathname.toUpperCase().endsWith("/FETCHDATA.ASPX")
}
function IsQueryButtonPressed(commandProperties)
{
    commandProperties["On"] = _mainWindow._currentPage == QueryPage
}
function IsResultsButtonPressed(commandProperties)
{
    commandProperties["On"] = _mainWindow._currentPage == ResultsPage
}
function IsSavedViewsButtonPressed(commandProperties)
{
    commandProperties["On"] = _mainWindow._currentPage == SavedViewsPage
}
function changeArea(newPage)
{
    var oldPage = _mainWindow._currentPage;
    _mainWindow._currentPage = newPage;
    _mainWindow.$get("advancedFind").style.display = newPage == QueryPage ? "block" : "none";
    _mainWindow.$get("userQueries").style.display = newPage == SavedViewsPage ? "block" : "none";
    _mainWindow.$get("searchResults").style.display = newPage == ResultsPage ? "block" : "none";
    oldPage == ResultsPage && 
        window.setTimeout("ToggleSearchResultsContextualRibbon()",10);
    (oldPage == SavedViewsPage || newPage == SavedViewsPage) && 
        window.setTimeout("ToggleSavedViewsContextualRibbon()",15)
}
function ToggleSavedViewsContextualRibbon()
{
    var gridComponent;
    if(_mainWindow._currentPage == SavedViewsPage)
        gridComponent = _mainWindow.$find("userQueryGrid");
    else
        gridComponent = null;
    var parameters = {};
    parameters["selectedControl"] = gridComponent;
    var em = _mainWindow.Mscrm.PageManager.get_instance().get_eventManager();
    em.raiseEvent(Mscrm.ScriptEvents.SetRibbonSelectedControl,parameters,gridComponent)
}
function ToggleSearchResultsContextualRibbon()
{
    var parameters = {},
        oldRd,
        newRd;
    if(_mainWindow._currentPage == ResultsPage)
    {
        oldRd = _mainWindow.$find("crmRibbonData");
        newRd = _mainWindow.resultFrame.window.$find("crmRibbonData");
        parameters["initialTabId"] = formatString("EntityTemplateTab.{0}.NoRelationship.SubGridStandard.Mscrm.SubGrid.{0}.MainTab",_mainWindow.$find("advFind").get_entityName())
    }
    else
    {
        newRd = _mainWindow.$find("crmRibbonData");
        oldRd = _mainWindow.resultFrame.window.$find("crmRibbonData")
    }
    unloadRibbonData(oldRd);
    loadRibbonData(newRd,parameters)
}
function ShowUserQueries()
{
    if(IsFetchDataPage())
    {
        window.parent.ShowUserQueries();
        return
    }
    changeArea(SavedViewsPage);
    var gridSpan = $find("userQueryGrid_span");
    !IsNull(gridSpan) && 
        gridSpan.setGridTopStyle();
    changeUserQueryTitle();
    var iOldTypeCode = Mscrm.UserQueryActions._queryTargetTypeCode;
    Mscrm.UserQueryActions._queryTargetTypeCode = EntityTypeMap[_mainWindow.$find("advFind").get_entityName()];
    iOldTypeCode != Mscrm.UserQueryActions._queryTargetTypeCode && 
        Mscrm.UserQueryActions.refreshGrid(_mainWindow.$find("userQueryGrid"))
}
function changeUserQueryTitle()
{
    var oPrimaryEntityList = document.getElementById("slctPrimaryEntity");
    if(IsNull(oPrimaryEntityList) || oPrimaryEntityList.selectedIndex == -1)
        return;
    var selectedEntity = XUI.Html.GetText(oPrimaryEntityList.options[oPrimaryEntityList.selectedIndex]);
    Mscrm.UserQueryActions.changeViewTitle(selectedEntity)
}
function ShowQuery()
{
    if(IsFetchDataPage())
    {
        window.parent.ShowQuery();
        return
    }
    changeArea(QueryPage);
    AddTelemetryLog("ViewQuery")
}
function ExecuteQuery()
{
    if(!IsValidInput() || _mainWindow._currentPage == ResultsPage)
        return;
    var advFind = _mainWindow.$find("advFind"),
        sFetchXml = advFind.get_fetchXml();
    if(IsNull(sFetchXml))
        return;
    changeArea(ResultsPage);
    var resultRender = _mainWindow.$get("resultRender");
    $get("FetchXml",resultRender).value = sFetchXml;
    $get("LayoutXml",resultRender).value = advFind.get_layoutXml();
    $get("EntityName",resultRender).value = advFind.get_entityName();
    $get("DefaultAdvFindViewId",resultRender).value = advFind.get_defaultAdvancedFindViewId();
    $get("ViewId",resultRender).value = advFind.get_queryId();
    $get("ViewType",resultRender).value = advFind.get_queryObjectType();
    if(_mainWindow._entityType === advFind.get_entityName())
    {
        $get("UIProvider",resultRender).value = advFind.get_uiProvider();
        $get("DataProvider",resultRender).value = advFind.get_dataProvider()
    }
    else
    {
        $get("UIProvider",resultRender).value = "";
        $get("DataProvider",resultRender).value = ""
    }
    var oXmlDom = XUI.Xml.LoadXml(sFetchXml);
    if(IsNull(XUI.Xml.GetParserError(oXmlDom)))
        $get("SortCol",resultRender).value = _mainWindow.GetOrderNodeAttrAndDirection(oXmlDom);
    var tmpSearchingMsg = "<table height='100%' width='100%' style='cursor:wait' class='ms-crm-Loading'><tr><td valign='middle' align='center' id='ExecutingSearchMessage'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + _mainWindow.LOCID_AF_EXECUTINGSEARCH + "</td></tr></table>",
        fetchResults = _mainWindow.resultFrame.document.getElementById("fetchResults");
    if(!IsNull(fetchResults))
    {
        _mainWindow.resultFrame.XUI.Html.DomUtils.ForEachChild(fetchResults,_mainWindow.resultFrame.Function.createDelegate(this,function(child)
        {
            _mainWindow.resultFrame.Mscrm.Utilities.destroyElement(child)
        }));
        XUI.Html.SetOuterHTML(fetchResults,tmpSearchingMsg)
    }
    else
        _mainWindow.resultFrame.document.body.innerHTML = tmpSearchingMsg;
    window.setTimeout("_mainWindow.$get('resultRender').submit()",10);
    AddTelemetryLog("ExecuteQuery")
}
function IsValidInput()
{
    try
    {
        _mainWindow.focus()
    }
    catch(e)
    {
        return false
    }
    return true
}
function QuerySave()
{
    if(!IsValidInput())
        return;
    _mainWindow.$find("advFind").Save();
    AddTelemetryLog("Save")
}
function QuerySaveAs()
{
    if(!IsValidInput())
        return;
    _mainWindow.$find("advFind").SaveAs();
    AddTelemetryLog("SaveAs")
}
function QueryNew()
{
    _mainWindow.$find("advFind").StartNew();
    refreshRibbon();
    AddTelemetryLog("NewQuery")
}
function QueryEditColumns()
{
    _mainWindow.$find("advFind").EditView();
    AddTelemetryLog("EditColumns")
}
function QueryEditProperties()
{
    _mainWindow.$find("advFind").EditProperties();
    AddTelemetryLog("EditProperties")
}
function ClearQuery()
{
    _mainWindow.$find("advFind").Clear(true,false);
    AddTelemetryLog("ClearQuery")
}
function GroupAnd()
{
    if(!IsValidInput())
        return;
    _mainWindow.$find("advFind").Group("and");
    AddTelemetryLog("GroupAnd")
}
function GroupOr()
{
    if(!IsValidInput())
        return;
    _mainWindow.$find("advFind").Group("or");
    AddTelemetryLog("GroupOr")
}
function ToggleDetails()
{
    var advFind = _mainWindow.$find("advFind");
    if(advFind.get_mode() == Mscrm.AdvancedFindModes.detailed)
        advFind.set_mode(Mscrm.AdvancedFindModes.simple);
    else
        advFind.set_mode(Mscrm.AdvancedFindModes.detailed);
    advFind.ConfigureMode();
    AddTelemetryLog("ToggleDetails")
}
function ToggleDetailsQuery(commandProperties)
{
    commandProperties["On"] = _mainWindow.$find("advFind").get_mode() != Mscrm.AdvancedFindModes.simple
}
function DownloadFetchXml()
{
    if(Mscrm.Utilities.isIosDevice())
    {
        alert(LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    if(!IsValidInput())
        return;
    var advFind = _mainWindow.$find("advFind"),
        iOldMode = advFind.get_fetchMode();
    advFind.set_fetchMode(Mscrm.FetchModes.ignoreEmpty);
    var sFetchXml = advFind.get_fetchXml();
    Mscrm.XmlUtil.downloadXml(IsNull(sFetchXml) ? "" : sFetchXml,LOCID_FILENAME_FETCHXML);
    advFind.set_fetchMode(iOldMode);
    AddTelemetryLog("DownloadFetchXml")
}
function IsButtonEnabled(button)
{
    if(_mainWindow._currentPage != QueryPage)
        return false;
    var advFind = _mainWindow.$find("advFind");
    if((button & advFind.get_buttons()) != button)
        return false;
    switch(button)
    {
        case Mscrm.AdvancedFindButtons.save:
            if(advFind.get_queryListControl().get_list().get_selectedIndex() == 0)
                return advFind.get_canCreateUserQuery();
            if(advFind.get_queryObjectType() === UserQuery)
                return advFind.get_canWriteUserQuery();
            return false;
        case Mscrm.AdvancedFindButtons.saveAs:
            return advFind.get_canCreateUserQuery();
        default:
            return true
    }
}
function IsShowResultsButtonEnabled()
{
    var oEntitySelect = $get("slctPrimaryEntity",element);
    if(!IsNull(oEntitySelect))
        return oEntitySelect.options.length > 0;
    return false
}
function AfterSave()
{
    window.status = LOCID_AF_MSGVIEWSAVED;
    refreshRibbon()
}
function GetQueryData(queryType,queryId)
{
    var command = queryType == SavedQuery ? "SystemQuery" : "UserQuery";
    return _mainWindow.$find("advFind").get_clientCache().GetElement(command,queryId,null)
}
function HandleQueryChange()
{
    refreshRibbon()
}
function AddTelemetryLog(operationName)
{
    try
    {
        var entityName = _mainWindow.$find("advFind").get_entityName(),
            entityId = Xrm.Internal.getEntityCode(entityName),
            userRoleId = window.USER_ROLES.toString(),
            arguments = {};
        arguments["entityId"] = entityId.toString();
        arguments["operationName"] = operationName;
        arguments["userRoleId"] = userRoleId;
        Mscrm.MetricsReporting.instance().addMetric("advancedfind",arguments)
    }
    catch(e)
    {
    }
}
