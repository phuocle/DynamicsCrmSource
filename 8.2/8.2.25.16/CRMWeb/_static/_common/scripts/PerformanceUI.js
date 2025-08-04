
var _perfMainAspxResults,
    _perfInnerAspxResults,
    _perfDivIndent = "&nbsp;&nbsp;&nbsp;",
    mainWnd,
    dataAspxResults,
    isInPageNav = false,
    contentIframeWindow,
    AfterWindowOpenTimestamp = null,
    BeforeWindowOpenTimestamp = null,
    isRefresh = null;
function OpenPerformanceUI(refresh)
{
    if(GetPerfDiv())
        return;
    if(refresh)
    {
        isRefresh = refresh;
        isInPageNav = isInPageNavigation();
        contentIframeWindow = getContentIframe().contentWindow;
        mainWnd = window;
        var waitForMarkers = false;
        if(isInPageNav)
            if(!isNavQuickCreate())
            {
                if(window._globalQuickCreate)
                    return;
                AfterWindowOpenTimestamp = mainWnd.top.InnerIFrameSrcChangeTimestamp;
                BeforeWindowOpenTimestamp = mainWnd.top.StartInPageNavigationTimestamp
            }
            else
            {
                AfterWindowOpenTimestamp = mainWnd.top.QuickCreateIFrameLoadingStartTime;
                BeforeWindowOpenTimestamp = mainWnd.top.QuickCreateFormLoadStartTime
            }
        else
        {
            AfterWindowOpenTimestamp = mainWnd.top.AfterWindowOpenTimestamp;
            if(mainWnd.top.BeforeWindowOpenTimestamp)
                BeforeWindowOpenTimestamp = mainWnd.top.BeforeWindowOpenTimestamp;
            else
                BeforeWindowOpenTimestamp = mainWnd.top.LoadStartTime
        }
        if(!mainWnd.FinishDataBindingTimestamp || typeof _IsRefreshForm != "undefined" && _IsRefreshForm == "1" && !mainWnd.FinishInlineEditInitializerTimestamp)
            waitForMarkers = true;
        if(!isInPageNav && (!BeforeWindowOpenTimestamp || !AfterWindowOpenTimestamp))
        {
            retrieveMarkersFromOpener();
            waitForMarkers = true
        }
        if(waitForMarkers)
        {
            window.setTimeout(function()
            {
                OpenPerformanceUI(refresh)
            },100);
            return
        }
        if(GetPerfDiv())
            if(refresh)
                ClearPerfContent();
            else
            {
                ShowPerfReport(true);
                return
            }
        var perfDiv = CreatePerfReportDiv();
        if(AfterWindowOpenTimestamp && BeforeWindowOpenTimestamp && (typeof _IsRefreshForm == "undefined" || _IsRefreshForm != "1" || mainWnd.FinishInlineEditInitializerTimestamp))
        {
            addToPerfContent("--------------------------------------------------------------------------------<br/>");
            addToPerfContent("View-Ready Load Time Components<br/>--------------------------------------------------------------------------------<br/>");
            var openWindowTime = AfterWindowOpenTimestamp - BeforeWindowOpenTimestamp;
            openWindowTime > 0 && addToPerfContent("&nbsp;&nbsp;&nbsp; Time to open the window:\t" + openWindowTime + " ms<br/>");
            if(!isInPageNav && mainWnd.StartRefreshPreloadTimestamp && mainWnd.FinishRefreshPreloadTimestamp)
            {
                var preloadPageTime = mainWnd.FinishRefreshPreloadTimestamp - mainWnd.StartRefreshPreloadTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to preload page:\t" + preloadPageTime + " ms<br/>")
            }
            if(mainWnd.REQ_ID)
            {
                var dataAspxResults = getJson("/Tools/Diagnostics/diag.aspx/GetPerformanceMarkers","{'markersCacheId':'" + mainWnd.REQ_ID + "'}");
                addToPerfContent("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Page.aspx server queuing time:\t" + (dataAspxResults.HttpContextTimestamp - dataAspxResults.RequestArrivalTime) + " ms<br/>");
                addToPerfContent("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Page.aspx server exec time:\t" + (dataAspxResults.OnEndRequest - dataAspxResults.HttpContextTimestamp) + " ms<br/>")
            }
            if(mainWnd.dataReqId)
            {
                var dataAspxResults = getJson("/Tools/Diagnostics/diag.aspx/GetPerformanceMarkers","{'markersCacheId':'" + mainWnd.dataReqId + "'}");
                addToPerfContent("&nbsp;&nbsp;&nbsp; data.aspx server queuing time:\t" + (dataAspxResults.HttpContextTimestamp - dataAspxResults.RequestArrivalTime) + " ms<br/>");
                addToPerfContent("&nbsp;&nbsp;&nbsp; data.aspx server exec time:\t" + (dataAspxResults.OnEndRequest - dataAspxResults.HttpContextTimestamp) + " ms<br/>")
            }
            var retrievePageTime = mainWnd.StartRetrieveLayoutTimestamp - AfterWindowOpenTimestamp;
            if(!isInPageNav && mainWnd.FinishRefreshPreloadTimestamp)
                retrievePageTime = mainWnd.StartRetrieveLayoutTimestamp - mainWnd.FinishRefreshPreloadTimestamp;
            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load page.aspx:\t" + retrievePageTime + " ms<br/>");
            var retrieveLayoutTime = mainWnd.FinishRetrieveLayoutTimestamp - mainWnd.StartRetrieveLayoutTimestamp;
            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to retrieve layout:\t" + retrieveLayoutTime + " ms<br/>");
            var UpdatePageHeaderTime = mainWnd.FinishUpdatePageHeaderTimestamp - mainWnd.StartUpdatePageHeaderTimestamp;
            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to update page header:\t" + UpdatePageHeaderTime + " ms<br/>");
            var perceivedTotal = mainWnd.HideLoadingScreenTimestamp - BeforeWindowOpenTimestamp,
                dataBindingTime = mainWnd.FinishDataBindingTimestamp - mainWnd.StartDataBindingTimestamp;
            if(typeof _IsRefreshForm != "undefined" && _IsRefreshForm == "1")
            {
                dataBindingTime = mainWnd.FinishTemplateBindingTimestamp - mainWnd.StartTemplateBindingTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to bind form data using layout template:\t" + dataBindingTime + " ms<br/>");
                var ScriptBlocksTime = mainWnd.FinishLoadingScriptBlocksTimestamp - mainWnd.StartLoadingScriptBlocksTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load script blocks:\t" + ScriptBlocksTime + " ms<br/>");
                addToPerfContent("Read-Ready Time:\t" + perceivedTotal + " ms<br/>");
                addToPerfContent("--------------------------------------------------------------------------------<br/>");
                addToPerfContent("Complete Load Components (In addition to View-ready Load Time)");
                addToPerfContent("<br/>--------------------------------------------------------------------------------<br/>");
                var BrowserScriptProcessingTime = mainWnd.StartRefreshInitializationTimestamp - mainWnd.FinishLoadFormLayoutTimestamp;
                BrowserScriptProcessingTime > 0 && addToPerfContent("&nbsp;&nbsp;&nbsp; Time taken by browser to call Refresh Page Initialize:\t" + BrowserScriptProcessingTime + " ms<br/>");
                var LoadScriptTime = mainWnd.StartRefreshInitializationTimestamp - mainWnd.GlobalInitializeReadFormBegin;
                LoadScriptTime > 0 && addToPerfContent("&nbsp;&nbsp;&nbsp; Time taken by browser to load page Scripts:\t" + LoadScriptTime + " ms<br/>");
                var TimeTakenByBrowserForCallback = mainWnd.GlobalInitializeReadFormBegin - mainWnd.HideLoadingScreenTimestamp;
                TimeTakenByBrowserForCallback > 0 && addToPerfContent("&nbsp;&nbsp;&nbsp; Time taken by browser for browser callback\t" + TimeTakenByBrowserForCallback + " ms<br/>");
                var StaticScriptsTime = mainWnd.FinishLoadingStaticScripts - mainWnd.StartLoadingStaticScripts;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load Static scripts:\t" + StaticScriptsTime + " ms<br/>");
                var DynamicScriptsTime = mainWnd.FinishLoadingDynamicScripts - mainWnd.StartLoadingDynamicScripts;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load Dynamic scripts:\t" + DynamicScriptsTime + " ms<br/>");
                var ScriptBlocksTime = mainWnd.FinishLoadingScriptBlocksTimestamp - mainWnd.StartLoadingScriptBlocksTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load script blocks/application init statements:\t" + ScriptBlocksTime + " ms<br/>");
                var Pass1LoadTime = mainWnd.FinishInlineEditPass1Timestamp - mainWnd.StartInlineEditPass1Timestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to execute Pass1:\t" + Pass1LoadTime + " ms<br/>");
                var Pass2LoadTime = mainWnd.FinishInlineEditPass2Timestamp - mainWnd.StartInlineEditPass2Timestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to execute Pass2:\t" + Pass2LoadTime + " ms<br/>");
                var InlineEditInitializerTime = mainWnd.FinishInlineEditInitializerTimestamp - mainWnd.StartInlineEditInitializerTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to initialize inline controls:(Pass1 + Pass2)\t" + InlineEditInitializerTime + " ms<br/>");
                var LinkControlTime = mainWnd.FinishLinkControlInitTimestamp - mainWnd.StartLinkControlInitTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to initialize link control:\t" + LinkControlTime + " ms<br/>");
                var dataBindingTime2 = mainWnd.FinishDataBindingTimestamp - mainWnd.StartDataBindingTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to bind activity Feeds and ProcessControl:\t" + dataBindingTime2 + " ms<br/>");
                var ProcessControlInitializerTime = mainWnd.FinishProcessControlInitializerTimestamp - mainWnd.StartProcessControlInitializerTimestamp;
                ProcessControlInitializerTime > 0 && addToPerfContent("&nbsp;&nbsp;&nbsp; Time to initialize process control:\t" + ProcessControlInitializerTime + " ms<br/>");
                var FinalizeProcessControlTime = mainWnd.FinishFinalizeProcessControlTimestamp - mainWnd.StartFinalizeProcessControlTimestamp;
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to finalize Process Control:\t" + FinalizeProcessControlTime + " ms<br/>");
                mainWnd.MediaQueryInitializationTime && addToPerfContent("mediaQuery initialization time: \t" + mainWnd.MediaQueryInitializationTime + "ms<br/>");
                mainWnd.MediaQueryExecutionTime && addToPerfContent("mediaQuery execution time: \t" + mainWnd.MediaQueryExecutionTime.join(", ") + "ms<br/>");
                mainWnd.MediaQueryApplyTime && addToPerfContent("mediaQuery apply time: \t" + mainWnd.MediaQueryApplyTime.join(", ") + "ms<br/>");
                var FullyLoadTime = mainWnd.FinishInlineEditPass1Timestamp - BeforeWindowOpenTimestamp;
                addToPerfContent("Edit-Ready Time:\t" + FullyLoadTime + " ms<br/>");
                var CompletePass2LoadTime = mainWnd.FinishInlineEditPass2Timestamp - BeforeWindowOpenTimestamp;
                addToPerfContent("Edit-Ready Time Pass2:\t" + CompletePass2LoadTime + " ms<br/>");
                addToPerfContent("--------------------------------------------------------------------------------<br/>");
                addToPerfContent("Other Control Level Load Time<br/>");
                addToPerfContent("--------------------------------------------------------------------------------<br/>");
                var WallLoadFirstTime = mainWnd.FinishWallHtmlLoadTimestamp - mainWnd.StartWallHtmlLoadTimestamp,
                    WallLoadRefreshTime = mainWnd.FinishWallRefreshLoadTimestamp - mainWnd.StartWallRefreshLoadTimestamp,
                    TotalWallLoadTime = WallLoadFirstTime + WallLoadRefreshTime;
                TotalWallLoadTime && addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load Activity Wall:\t" + TotalWallLoadTime + " ms<br/>");
                for(marker in mainWnd.PerformanceMarkers)
                {
                    var LoadTime = mainWnd.PerformanceMarkers[marker]["FinishLoadTimestamp"] - mainWnd.PerformanceMarkers[marker]["StartLoadTimestamp"];
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to Load " + mainWnd.PerformanceMarkers[marker]["ControlType"] + " with ID: " + marker + " is:\t" + LoadTime + " ms<br/>")
                }
                if(mainWnd.FinishSubjectLookupRetrieveTimestamp && mainWnd.StartSubjectLookupRetrieveTimestamp)
                {
                    var SubjectLookupTime = mainWnd.FinishSubjectLookupRetrieveTimestamp - mainWnd.StartSubjectLookupRetrieveTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to retrieve subject lookup:\t" + SubjectLookupTime + " ms<br/>")
                }
                if(mainWnd.FinishSubjectLookupShowTimestamp && mainWnd.StartSubjectLookupShowTimestamp)
                {
                    var SubjectLookupShowTime = mainWnd.FinishSubjectLookupShowTimestamp - mainWnd.StartSubjectLookupShowTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to show subject lookup:\t" + SubjectLookupShowTime + " ms<br/>")
                }
                if(mainWnd.FinishOpenFlyOutTimestamp && mainWnd.StartOpenFlyOutTimestamp)
                {
                    var FlyoutOpenTime = mainWnd.FinishOpenFlyOutTimestamp - mainWnd.StartOpenFlyOutTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load flyout:\t" + FlyoutOpenTime + " ms<br/>")
                }
                if(mainWnd.FinishCloseFlyOutTimestamp && mainWnd.StartCloseFlyOutTimestamp)
                {
                    var FlyoutCloseTime = mainWnd.FinishCloseFlyOutTimestamp - mainWnd.StartCloseFlyOutTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to close flyout:\t" + FlyoutCloseTime + " ms<br/>")
                }
                if(mainWnd.FinishCancelFlyOutTimestamp && mainWnd.StartCancelFlyOutTimestamp)
                {
                    var FlyoutCancelTime = mainWnd.FinishCancelFlyOutTimestamp - mainWnd.StartCancelFlyOutTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to cancel flyout:\t" + FlyoutCancelTime + " ms<br/>")
                }
                if(mainWnd.FinishLoadingNewProcessStageTimestamp && mainWnd.StartLoadingNewProcessStageTimestamp)
                {
                    var ProcessStageChangeTime = mainWnd.FinishLoadingNewProcessStageTimestamp - mainWnd.StartLoadingNewProcessStageTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to change process stage:\t" + ProcessStageChangeTime + " ms<br/>")
                }
                if(mainWnd.FinishLoadingProcessStageBackTimestamp && mainWnd.StartLoadingProcessStageBackTimestamp)
                {
                    var ProcessBackChangeTime = mainWnd.FinishLoadingProcessStageBackTimestamp - mainWnd.StartLoadingProcessStageBackTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to go back process stage:\t" + ProcessBackChangeTime + " ms<br/>")
                }
                if(mainWnd.FinishLoadingProcessStageAdvanceTimestamp && mainWnd.StartLoadingProcessStageAdvanceTimestamp)
                {
                    var ProcessAdvanceChangeTime = mainWnd.FinishLoadingProcessStageAdvanceTimestamp - mainWnd.StartLoadingProcessStageAdvanceTimestamp;
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to advance process stage:\t" + ProcessAdvanceChangeTime + " ms<br/>")
                }
                if(!isNavQuickCreate() && !window._globalQuickCreate)
                {
                    var CommandBarLayoutLoadTime = Mscrm.AggregatePerformanceMarkers.getMarkerValue("CommandBarLayoutLoadTime",Mscrm.PerformanceMarkerAggregateType.sum);
                    addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load commandbar layout:\t" + CommandBarLayoutLoadTime + " ms<br/>");
                    if(mainWnd.top.CommandBarUnloadEndTime && mainWnd.top.CommandBarUnloadStartTime)
                    {
                        var CommandBarUnLoadTime = mainWnd.top.CommandBarUnloadEndTime - mainWnd.top.CommandBarUnloadStartTime;
                        if(CommandBarUnLoadTime < 1)
                            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to unload commandbar:\t< 1 ms<br/>");
                        else
                            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to unload commandbar:\t" + CommandBarUnLoadTime + " ms<br/>")
                    }
                    if(mainWnd.top.CommandBarLoadEndTime && mainWnd.top.CommandBarLoadStartTime)
                    {
                        var unloadTimeToSubtract = 0;
                        if(mainWnd.top.CommandBarUnloadStartTime >= mainWnd.top.CommandBarLoadStartTime && mainWnd.top.CommandBarUnloadEndTime <= mainWnd.top.CommandBarLoadEndTime)
                            unloadTimeToSubtract = mainWnd.top.CommandBarUnloadEndTime - mainWnd.top.CommandBarUnloadStartTime;
                        var CommandBarLoadTime = mainWnd.top.CommandBarLoadEndTime - mainWnd.top.CommandBarLoadStartTime - unloadTimeToSubtract;
                        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to Load commandbar:\t" + CommandBarLoadTime + " ms<br/>")
                    }
                }
                addToPerfContent("--------------------------------------------------------------------------------<br/>");
                if(!IsNull(window.colorizePerfMarkers) && "1" === window.colorizePerfMarkers)
                {
                    addToPerfContent("Raw numbers<br>");
                    addToPerfContent("now:\t" + (new Date).getTime().toString() + "<br>");
                    addToPerfContent("mainWnd.BeforeWindowOpenTimestamp:\t" + CrmEncodeDecode.CrmHtmlEncode(BeforeWindowOpenTimestamp) + "<br>");
                    addToPerfContent("mainWnd.HideLoadingScreenTimestampRaw:\t" + CrmEncodeDecode.CrmHtmlEncode(mainWnd.HideLoadingScreenTimestampRaw) + "<br>");
                    addToPerfContent("mainWnd.HideLoadingScreenTimestamp:\t" + CrmEncodeDecode.CrmHtmlEncode(mainWnd.HideLoadingScreenTimestamp) + "<br>");
                    addToPerfContent("mainWnd.ControlsInitializationCompleteTimestamp:\t" + CrmEncodeDecode.CrmHtmlEncode(mainWnd.ControlsInitializationCompleteTimestamp) + "<br>");
                    addToPerfContent("mainWnd.FinishProcessControlInitializerTimestamp:\t" + CrmEncodeDecode.CrmHtmlEncode(mainWnd.FinishProcessControlInitializerTimestamp) + "<br>");
                    addToPerfContent("--------------------------------------------------------------------------------<br/><br/>")
                }
            }
            else
            {
                addToPerfContent("&nbsp;&nbsp;&nbsp; Time to bind form data using layout template:\t" + dataBindingTime + " ms<br/>");
                addToPerfContent("Perceived Load Time (read/scroll ready):\t" + perceivedTotal + " ms<br/>")
            }
        }
        addToPerfContent("<br/>");
        for(var key in window.perfDict)
            window.perfDict.hasOwnProperty(key) && 
                addToPerfContent(key + ":\t" + window.perfDict[key] + "<br/>");
        addToPerfContent("<br/>")
    }
    else
    {
        var isGridHomePage = window.location.href.indexOf("/homepage.aspx") != -1;
        if(!isGridHomePage)
        {
            var mainWnd = getMainWnd(),
                openerWnd = window.top.opener,
                fullyLoadTimeExpected = !mainWnd.UseTabletExperience,
                innerFrame = mainWnd.document.getElementById("contentIFrame");
            if(!innerFrame || !innerFrame.contentWindow.PostRenderTime || fullyLoadTimeExpected && !mainWnd.FullyLoadedTime || !mainWnd.LoadStartTime)
            {
                RequestUpdate(refresh);
                return
            }
            if(GetPerfDiv())
                if(refresh)
                    ClearPerfContent();
                else
                {
                    ShowPerfReport(true);
                    return
                }
            var indent = _perfDivIndent,
                innerWnd = innerFrame.contentWindow,
                mainAspxMID = mainWnd.MARKERS_CACHE_ID,
                innerAspxMID = innerWnd.MARKERS_CACHE_ID,
                getPerformanceMarkersUri = Mscrm.CrmUri.create("/Tools/Diagnostics/diag.aspx").toString() + "/GetPerformanceMarkers";
            _perfMainAspxResults = getJson(getPerformanceMarkersUri,"{'markersCacheId':'" + mainAspxMID + "'}");
            _perfInnerAspxResults = getJson(getPerformanceMarkersUri,"{'markersCacheId':'" + innerAspxMID + "'}");
            var perfDiv = CreatePerfReportDiv(),
                loadStartTime = mainWnd.LoadStartTime;
            !mainWnd.InitActionQueueCompletedTime && RequestUpdate(true);
            if(mainWnd.AfterWindowOpenTimestamp && mainWnd.BeforeWindowOpenTimestamp)
                if(mainWnd.InnerIFrameSrcChangeTimestamp - mainWnd.AfterWindowOpenTimestamp > 1e3)
                    loadStartTime = mainWnd.InnerIFrameSrcChangeTimestamp;
                else
                {
                    var windowOpenOverhead = mainWnd.AfterWindowOpenTimestamp - mainWnd.BeforeWindowOpenTimestamp;
                    loadStartTime = mainWnd.BeforeWindowOpenTimestamp;
                    addToPerfContent("Time to open the window:\t" + windowOpenOverhead + " ms<br/>")
                }
            else
                mainWnd.opener && RequestUpdate(true);
            addToPerfContent("Server side execution info:<br/>");
            addToPerfContent(indent + "Main.aspx server queuing time:\t" + (_perfMainAspxResults.HttpContextTimestamp - _perfMainAspxResults.RequestArrivalTime) + " ms<br/>");
            addToPerfContent(indent + "Main.aspx server exec time:\t" + (_perfMainAspxResults.OnEndRequest - _perfMainAspxResults.HttpContextTimestamp) + " ms<br/>");
            addToPerfContent(indent + "Edit.aspx server queuing time:\t" + (_perfInnerAspxResults.HttpContextTimestamp - _perfInnerAspxResults.RequestArrivalTime) + " ms<br/>");
            addToPerfContent(indent + "Edit.aspx server exec time:\t" + (_perfInnerAspxResults.OnEndRequest - _perfInnerAspxResults.HttpContextTimestamp) + " ms<br/>");
            var timeToGetEditAspx = 0,
                hasOpenerWnd = false;
            try
            {
                openerWnd.document;
                hasOpenerWnd = true
            }
            catch(e)
            {
            }
            hasOpenerWnd && openerWnd.PreloadStartTime && openerWnd.PreloadEndTime && addToPerfContent("Time to preload Edit.aspx:\t" + (openerWnd.PreloadEndTime - openerWnd.PreloadStartTime) + " ms<br/>");
            var plt = innerWnd.PostRenderTime;
            if(innerWnd.PerceivedLoadTime)
                plt = innerWnd.PerceivedLoadTime;
            var pltError = 0;
            if(innerWnd.PerceivedLoadPreRenderTime)
            {
                pltError = Math.abs(innerWnd.PerceivedLoadTime - innerWnd.PerceivedLoadPreRenderTime) / 2;
                plt -= pltError
            }
            addToPerfContent("Perceived Load Time (read/scroll ready):\t" + (plt - loadStartTime) + " ms<br/>");
            pltError > 0 && addToPerfContent(indent + "Potential calculation error:\t&plusmn; " + pltError + " ms<br/>");
            addToPerfContent("Full Load Time (edit ready):\t" + (mainWnd.FullyLoadedTime - loadStartTime) + " ms<br/>");
            if(mainWnd._actionQueuePerfMarkers && mainWnd._actionQueuePerfMarkers.length > 0)
            {
                addToPerfContent("<br/>");
                addToPerfContent("Action Queue execution info:<br/>");
                AddActionQueuePerfInfoToContent(mainWnd,loadStartTime)
            }
            if(innerWnd._actionQueuePerfMarkers && innerWnd._actionQueuePerfMarkers.length > 0)
            {
                addToPerfContent("<br/>");
                addToPerfContent("Action Queue execution info (inner frame):<br/>");
                AddActionQueuePerfInfoToContent(innerWnd,loadStartTime)
            }
            addToPerfContent("<br/>")
        }
        else
            if(isGridHomePage)
            {
                var mainWnd = window.top,
                    fullyLoadTimeExpected = !mainWnd.UseTabletExperience,
                    innerFrame = getContentIframe().contentWindow;
                if(!innerFrame || !innerFrame.PostRenderTime || fullyLoadTimeExpected && !mainWnd.FullyLoadedTime || !mainWnd.LoadStartTime)
                {
                    RequestUpdate(refresh);
                    return
                }
                if(GetPerfDiv())
                    if(refresh)
                        ClearPerfContent();
                    else
                    {
                        ShowPerfReport(true);
                        return
                    }
                var indent = _perfDivIndent,
                    innerWnd = innerFrame,
                    mainAspxMID = mainWnd.MARKERS_CACHE_ID,
                    innerAspxMID = innerWnd.MARKERS_CACHE_ID,
                    getPerformanceMarkersUri = Mscrm.CrmUri.create("/Tools/Diagnostics/diag.aspx").toString() + "/GetPerformanceMarkers";
                _perfMainAspxResults = getJson(getPerformanceMarkersUri,"{'markersCacheId':'" + mainAspxMID + "'}");
                _perfInnerAspxResults = getJson(getPerformanceMarkersUri,"{'markersCacheId':'" + innerAspxMID + "'}");
                var perfDiv = CreatePerfReportDiv(),
                    loadStartTime = mainWnd.LoadStartTime;
                !innerWnd.InitActionQueueCompletedTime && RequestUpdate(true);
                var navBarClickTime = mainWnd.PerformanceMarkers["navBar"]["NavBarClickTime"],
                    homePageGridLoadStartTime = mainWnd.HomePageGridLoadStart;
                if(homePageGridLoadStartTime && homePageGridLoadStartTime > loadStartTime)
                    loadStartTime = homePageGridLoadStartTime;
                if(innerWnd.PostRenderTime < loadStartTime)
                    addToPerfContent("Perceived Load Time:\t Loaded from Grid Cache.<br/>");
                else
                {
                    addToPerfContent("Perceived Load Time:\t" + (innerWnd.PostRenderTime - loadStartTime) + " ms<br/>");
                    if(_perfInnerAspxResults)
                    {
                        var queuingTime = _perfInnerAspxResults.HttpContextTimestamp - _perfInnerAspxResults.RequestArrivalTime;
                        queuingTime > 0 && addToPerfContent(indent + "Grid request server queuing time:\t" + queuingTime + " ms<br/>");
                        addToPerfContent(indent + "Grid request server exec time:\t" + (_perfInnerAspxResults.OnEndRequest - _perfInnerAspxResults.HttpContextTimestamp) + " ms<br/>")
                    }
                }
                if(mainWnd.FullyLoadedTime && mainWnd.FullyLoadedTime < loadStartTime)
                    addToPerfContent("Full Load Time:\t Loaded from Grid Cache.<br/>");
                else
                    mainWnd.FullyLoadedTime && 
                        addToPerfContent("Full Load Time:\t" + (mainWnd.FullyLoadedTime - loadStartTime) + " ms<br/>");
                if(mainWnd._actionQueuePerfMarkers && mainWnd._actionQueuePerfMarkers.length > 0)
                {
                    addToPerfContent("<br/>");
                    addToPerfContent("Action Queue execution info:<br/>");
                    AddActionQueuePerfInfoToContent(mainWnd,loadStartTime)
                }
                if(innerWnd._actionQueuePerfMarkers && innerWnd._actionQueuePerfMarkers.length > 0)
                {
                    addToPerfContent("<br/>");
                    addToPerfContent("Action Queue execution info (inner frame):<br/>");
                    AddActionQueuePerfInfoToContent(innerWnd,loadStartTime)
                }
                addToPerfContent("<br/>")
            }
    }
}
function retrieveMarkersFromOpener()
{
    var mainWnd = getMainWnd();
    if(mainWnd.opener && mainWnd.opener.getWindowOpenTimeJson)
        try
        {
            var windowLoadTime = Sys.Serialization.JavaScriptSerializer.deserialize(mainWnd.opener.getWindowOpenTimeJson(mainWnd.name,true));
            mainWnd.BeforeWindowOpenTimestamp = windowLoadTime.BeforeWindowOpenTimestamp;
            mainWnd.AfterWindowOpenTimestamp = windowLoadTime.AfterWindowOpenTimestamp
        }
        catch(e)
        {
        }
}
function AddActionQueuePerfInfoToContent(wnd,loadStartTime)
{
    var actionQueuePerfMarkers = wnd._actionQueuePerfMarkers,
        actionQueueInfoHtml = "";
    actionQueueInfoHtml += "<div style='height:100px;overflow-y:scroll;border-style:solid;border-width:1px;background-color:#ddd;'>";
    for(var i = 0; i < actionQueuePerfMarkers.length; i++)
    {
        var actionTimingInfo = actionQueuePerfMarkers[i],
            totalTime = actionTimingInfo.endTime - actionTimingInfo.startTime;
        if(totalTime > 0)
            actionQueueInfoHtml += _perfDivIndent + actionTimingInfo.name + ":\t" + totalTime + " ms<br/>"
    }
    actionQueueInfoHtml += "</div>";
    addToPerfContent(actionQueueInfoHtml);
    if(wnd.InitActionQueueCompletedTime > loadStartTime)
        wnd.InitActionQueueCompletedTime && addToPerfContent("Total Init Queue Time:\t" + (wnd.InitActionQueueCompletedTime - loadStartTime) + " ms<br/>");
    else
        wnd.InitActionQueueCompletedTime && addToPerfContent("Total Init Queue Time:\t From Cache <br/>")
}
var _maxPerfAutoUpdates = 100,
    _totalPerfAutoUpdates = 0,
    _lastRequestTime = 0;
function RequestUpdate(refresh)
{
    if((new Date).getTime() - _lastRequestTime <= 20)
        return;
    _lastRequestTime = (new Date).getTime();
    if(_totalPerfAutoUpdates <= _maxPerfAutoUpdates)
    {
        _totalPerfAutoUpdates++;
        window.setTimeout(function()
        {
            OpenPerformanceUI(refresh)
        },100)
    }
}
function GetPerfDiv()
{
    var mainWnd = getMainWnd();
    return getMainWnd().document.getElementById("perfDiv")
}
function RemovePerfReportDiv()
{
    var perfDiv = GetPerfDiv(),
        mainWnd = getMainWnd();
    perfDiv && mainWnd.document.body.removeChild(perfDiv)
}
function CreatePerfReportDiv()
{
    var perfDiv = GetPerfDiv();
    if(GetPerfDiv())
        return;
    var mainWnd = getMainWnd();
    perfDiv && mainWnd.document.body.removeChild(perfDiv);
    perfDiv = mainWnd.document.createElement("div");
    perfDiv.setAttribute("id","perfDiv");
    perfDiv.style.top = 0;
    perfDiv.style.background = "#AABBCC";
    perfDiv.style.border = "1px solid #000";
    perfDiv.style.opacity = "alpha(opacity=90)";
    perfDiv.style.zIndex = 5e3;
    var perfUpperActions = mainWnd.document.createElement("div");
    perfUpperActions.setAttribute("id","perfUpperActions");
    perfUpperActions.style.textAlign = "right";
    perfDiv.appendChild(perfUpperActions);
    var perfInnerContent = mainWnd.document.createElement("div");
    perfInnerContent.setAttribute("id","perfInnerContent");
    perfDiv.appendChild(perfInnerContent);
    var perfInnerActions = mainWnd.document.createElement("div");
    perfInnerActions.setAttribute("id","perfInnerActions");
    perfDiv.appendChild(perfInnerActions);
    mainWnd.document.body.appendChild(perfDiv);
    addToPerfContent("<br/><h3>Performance Results</h3>");
    ShowPerfReport(true);
    $addHandler(window,"unload",DisposePerfReportDiv);
    return perfDiv
}
function DisposePerfReportDiv()
{
    $removeHandler(window,"unload",DisposePerfReportDiv);
    var mainWnd = getMainWnd(),
        perfDiv = mainWnd.document.getElementById("perfDiv");
    perfDiv && mainWnd.document.body.removeChild(perfDiv)
}
function RegisterEventHandlers()
{
    var mainWnd = getMainWnd();
    $addHandler(window.document,"keyup",_PerfKeyUpHandler);
    $addHandler(window,"unload",UnregisterEventHandlers)
}
function UnregisterEventHandlers()
{
    var mainWnd = getMainWnd();
    $removeHandler(window.document,"keyup",_PerfKeyUpHandler);
    $removeHandler(window,"unload",UnregisterEventHandlers)
}
RegisterEventHandlers();
function _PerfKeyUpHandler(event)
{
    if(event.keyCode == 81 && event.ctrlKey && event.shiftKey)
        if(typeof _IsRefreshForm != "undefined" && _IsRefreshForm == "1")
            OpenPerformanceUI(true);
        else
            OpenPerformanceUI()
}
var _perfTouchStartX = 0,
    _perfTouchCurrentX = 0,
    _perfTouchSwipeThreshold = 50;
function _PerfTouchStart(event)
{
    if(event.touches)
    {
        var touch = event.touches[0];
        if(touch)
            _perfTouchStartX = touch.pageX
    }
}
function _PerfTouchMove(event)
{
    if(event.touches)
    {
        var touch = event.touches[0];
        if(touch)
            _perfTouchCurrentX = touch.pageX
    }
}
function _PerfTouchEnd(event)
{
    if(_perfTouchCurrentX <= 0)
        return;
    var swipeLength = Math.abs(_perfTouchCurrentX - _perfTouchStartX);
    swipeLength > _perfTouchSwipeThreshold && OpenPerformanceUI();
    _perfTouchStartX = 0;
    _perfTouchCurrentX = 0
}
function addToPerfContent(str)
{
    var mainWnd = getMainWnd(),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent");
    perfInnerContent.innerHTML += str
}
function ClearPerfContent()
{
    var mainWnd = getMainWnd(),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent");
    perfInnerContent.innerHTML = ""
}
function ShowPerfReport(show)
{
    var mainWnd = getMainWnd(),
        perfDiv = mainWnd.document.getElementById("perfDiv"),
        perfUpperActions = mainWnd.document.getElementById("perfUpperActions"),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent"),
        perfInnerActions = mainWnd.document.getElementById("perfInnerActions"),
        openDivWidth = 400,
        hiddenDivWidth = 60,
        padding = 10;
    if(show)
    {
        perfDiv.style.width = openDivWidth + "px";
        if(isRefresh)
            perfDiv.style.height = "75%";
        else
            perfDiv.style.height = "auto";
        perfDiv.style.position = "absolute";
        perfDiv.style.left = "45%";
        perfDiv.style.top = "5%";
        perfDiv.style.marginLeft = -(openDivWidth / 2) + "px";
        perfDiv.style.padding = padding + "px";
        perfDiv.style.paddingTop = 0 + "px";
        perfDiv.style.overflow = "scroll";
        perfInnerContent.style.display = "block";
        perfInnerActions.style.display = "block";
        var currentContentId = "contentIFrame0";
        if(window.top.document.getElementById("crmContentPanel"))
            currentContentId = window.top.document.getElementById("crmContentPanel").getAttribute("currentContentId");
        if(window.top.document.getElementById("NavBarGloablQuickCreate"))
            currentContentId = window.top.document.getElementById("NavBarGloablQuickCreate").getAttribute("id");
        var closeAction = "window.top.document.getElementById('" + currentContentId + "').contentWindow.RemovePerfReportDiv()";
        if(isRefresh)
            perfUpperActions.innerHTML = "<font color='blue'><a href='#' onclick=" + closeAction + "><u>close</u></a></font>";
        else
            if(window.location.href.indexOf("/homepage.aspx") != -1)
                perfUpperActions.innerHTML = "<font color='blue'><a href='#' onclick=" + closeAction + "><u>close</u></a></font>";
            else
                perfUpperActions.innerHTML = "<font color='blue'><a href='#' onclick='window." + currentContentId + ".RemovePerfReportDiv()'><u>close</u></a></font>";
        if(window.clipboardData)
        {
            perfInnerActions.innerHTML = "<font color='blue'>";
            if(!isRefresh)
                if(window.location.href.indexOf("/homepage.aspx") != -1)
                {
                    perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfResults()'><u>copy</u></a>";
                    perfInnerActions.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfReport()'><u>copy report</u></a>"
                }
                else
                {
                    perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfResults()'><u>copy</u></a>";
                    perfInnerActions.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfReport()'><u>copy report</u></a>"
                }
            else
            {
                perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfResults()'><u>copy</u></a>";
                perfInnerActions.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                perfInnerActions.innerHTML += "<a href='#' onclick='window." + currentContentId + ".copyPerfReport()'><u>copy report</u></a>"
            }
            perfInnerActions.innerHTML += "</font>"
        }
        perfInnerActions.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        perfInnerActions.innerHTML += "<a href='/tools/diagnostics/diag.aspx' target='_blank'><u>diagnostics</u></a>"
    }
    else
    {
        perfDiv.style.width = hiddenDivWidth + "px";
        perfDiv.style.height = "18px";
        perfDiv.style.position = "absolute";
        perfDiv.style.left = "50%";
        perfDiv.style.marginLeft = openDivWidth / 2 - hiddenDivWidth + "px";
        perfDiv.style.paddingBottom = 0 + "px";
        perfInnerContent.style.display = "none";
        perfInnerActions.style.display = "none";
        if(isRefresh)
            perfUpperActions.innerHTML = "Perf: <font color='blue'><a href='#' onclick='ShowPerfReport(true);return false;'><u>show</u></a>";
        else
            perfUpperActions.innerHTML = "Perf: <font color='blue'><a href='#' onclick='window." + currentContentId + ".ShowPerfReport(true)'><u>show</u></a>"
    }
}
function GetPerfResultsText()
{
    var mainWnd = getMainWnd(),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent");
    if(perfInnerContent)
        return perfInnerContent.innerText
}
function BuildPerfResultsReport(perfResults)
{
    var reIndent = /    /g,
        reSeparator = /: /g,
        reMs = / ms/g;
    perfResults = perfResults.replace(reIndent,"");
    perfResults = perfResults.replace(reSeparator,"\t");
    perfResults = perfResults.replace(reMs,"");
    return perfResults
}
function BuildPerfMarkersReport()
{
    if(isRefresh)
    {
        var aMarkers = [];
        mainWnd = getMainWnd();
        if(isInPageNavigation())
        {
            AddTimingValue(aMarkers,"mainWnd.InnerIFrameSrcChangeTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartInPageNavigationTimestamp");
            mainWnd = window
        }
        else
        {
            AddTimingValue(aMarkers,"mainWnd.BeforeWindowOpenTimestamp");
            AddTimingValue(aMarkers,"mainWnd.AfterWindowOpenTimestamp")
        }
        AddTimingValue(aMarkers,"mainWnd.StartRetrieveLayoutTimestamp");
        AddTimingValue(aMarkers,"mainWnd.FinishRetrieveLayoutTimestamp");
        AddTimingValue(aMarkers,"mainWnd.StartDataBindingTimestamp");
        AddTimingValue(aMarkers,"mainWnd.FinishDataBindingTimestamp");
        if(typeof _IsRefreshForm != "undefined" && _IsRefreshForm == "1")
        {
            AddTimingValue(aMarkers,"mainWnd.StartSubjectLookupRetrieveTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishSubjectLookupRetrieveTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartSubjectLookupShowTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishSubjectLookupShowTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartOpenFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishOpenFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartCloseFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishCloseFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartCancelFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishCancelFlyOutTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartLinkControlInitTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishLinkControlInitTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartWallHtmlLoadTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishWallHtmlLoadTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartWallRefreshLoadTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishWallRefreshLoadTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartRetrieveAttributesMetadataTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishRetrieveAttributesMetadataTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartProcessControlInitializerTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishProcessControlInitializerTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartInlineEditInitializerTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishInlineEditInitializerTimestamp");
            AddTimingValue(aMarkers,"mainWnd.BeginCreateFormNavControlTimestamp");
            AddTimingValue(aMarkers,"mainWnd.EndCreateFormNavControlTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartLoadingNewProcessStageTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishLoadingNewProcessStageTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartLoadingProcessStageBackTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishLoadingProcessStageBackTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartLoadingProcessStageAdvanceTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishLoadingProcessStageAdvanceTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartUpdatePageHeaderTimestamp");
            AddTimingValue(aMarkers,"mainWnd.FinishUpdatePageHeaderTimestamp");
            AddTimingValue(aMarkers,"mainWnd.StartLoadingStaticScripts");
            AddTimingValue(aMarkers,"mainWnd.FinishLoadingStaticScripts");
            AddTimingValue(aMarkers,"mainWnd.StartLoadingDynamicScripts");
            AddTimingValue(aMarkers,"mainWnd.FinishLoadingDynamicScripts");
            AddTimingValue(aMarkers,"mainWnd.ServiceRoundtrip_average");
            AddTimingValue(aMarkers,"mainWnd.ServiceRoundtrip_count");
            AddTimingValue(aMarkers,"mainWnd.ResetFormState_average");
            AddTimingValue(aMarkers,"mainWnd.ResetFormState_count");
            if(isNavQuickCreate())
            {
                AddTimingValue(aMarkers,"mainWnd.top.QuickCreateFormLoadStartTime");
                AddTimingValue(aMarkers,"mainWnd.top.QuickCreateIFrameLoadingStartTime");
                AddTimingValue(aMarkers,"mainWnd.top.QuickCreateIFrameLoadingEndTime");
                AddTimingValue(aMarkers,"mainWnd.top.QuickCreateFormLoadEndTime")
            }
        }
        if(dataAspxResults)
        {
            AddTimingValue(aMarkers,"dataAspxResults.RequestArrivalTime");
            AddTimingValue(aMarkers,"dataAspxResults.HttpContextTimestamp");
            AddTimingValue(aMarkers,"dataAspxResults.OnEndRequest")
        }
    }
    else
    {
        var aMarkers = [];
        AddTimingValue(aMarkers,"getMainWnd().AfterWindowOpenTimestamp");
        AddTimingValue(aMarkers,"getMainWnd().BeforeWindowOpenTimestamp");
        AddTimingValue(aMarkers,"getMainWnd().LoadStartTime");
        AddTimingValue(aMarkers,"getMainWnd().BeforePerceivedRibbonRenderingTimestamp");
        AddTimingValue(aMarkers,"getMainWnd().AfterPerceivedRibbonRenderingTimestamp");
        AddTimingValue(aMarkers,"getMainWnd().InnerIFrameSrcChangeTimestamp");
        AddTimingValue(aMarkers,"getMainWnd().FullyLoadedTime");
        AddTimingValue(aMarkers,"getMainWnd().PostRenderTime");
        AddTimingValue(aMarkers,"getMainWnd().StartLoadContentPanel");
        AddTimingValue(aMarkers,"getMainWnd().PreLoadContentPageWaitTimeout");
        AddTimingValue(aMarkers,"getOpenerWnd().PreloadStartTime");
        AddTimingValue(aMarkers,"getOpenerWnd().PreloadEndTime");
        AddTimingValue(aMarkers,"_perfMainAspxResults.OnEndRequest");
        AddTimingValue(aMarkers,"_perfMainAspxResults.RequestArrivalTime");
        AddTimingValue(aMarkers,"_perfMainAspxResults.HttpContextTimestamp");
        AddTimingValue(aMarkers,"_perfInnerAspxResults.OnEndRequest");
        AddTimingValue(aMarkers,"_perfInnerAspxResults.RequestArrivalTime");
        AddTimingValue(aMarkers,"_perfInnerAspxResults.HttpContextTimestamp");
        AddTimingValue(aMarkers,"getInnerWnd().LoadStartTime");
        AddTimingValue(aMarkers,"getInnerWnd().PostRenderTime")
    }
    for(var perfMarkers = "",
        i = 0; i < aMarkers.length; i++)
        perfMarkers += aMarkers[i].name + "\t" + aMarkers[i].value + "\n";
    return perfMarkers
}
function AddTimingValue(aMarkers,sTimeMarker)
{
    try
    {
        var sValue = eval(sTimeMarker);
        typeof sValue != "undefined" && aMarkers.push({name:sTimeMarker,value:sValue})
    }
    catch(e)
    {
    }
}
function getMainWnd()
{
    if(isInPageNavigation() && window == window.top)
        return window;
    else
        return window.top
}
function isInPageNavigation()
{
    if(isRefresh)
        if(window.top.frames.length == 1)
            return false;
        else
            return true;
    return null
}
function isNavQuickCreate()
{
    if(window.top.document.getElementById("NavBarGloablQuickCreate") != null)
        return true;
    else
        return false
}
function getContentIframe()
{
    if(window.top.document.getElementById("crmContentPanel").getAttribute("currentContentId"))
        return window.top.document.getElementById(window.top.document.getElementById("crmContentPanel").getAttribute("currentContentId"));
    return window.top.document.getElementById("contentIFrame")
}
function getInnerWnd()
{
    var mainWnd = getMainWnd(),
        innerFrame = getContentIframe();
    if(innerFrame != null)
        return innerFrame.contentWindow
}
function getOpenerWnd()
{
    return window.top.opener
}
function copyPerfResults()
{
    window.clipboardData && window.clipboardData.setData("Text",GetPerfResultsText())
}
function copyPerfReport()
{
    var perfMarkers = BuildPerfMarkersReport(),
        perfResults = BuildPerfResultsReport(GetPerfResultsText());
    window.clipboardData && window.clipboardData.setData("Text",perfMarkers + "\n\n" + perfResults)
}
function closePerfResults()
{
    var perfDiv = getMainWnd().document.getElementById("perfDiv");
    if(perfDiv)
        if(perfDiv.style.visibility === "hidden")
            perfDiv.style.visibility = "show";
        else
            perfDiv.style.visibility = "hidden"
}
function getJson(url,args)
{
    var res = null;
    try
    {
        var mainWnd = getMainWnd(),
            _perfXmlhttp = new mainWnd.XMLHttpRequest;
        _perfXmlhttp.open("POST",url,false);
        _perfXmlhttp.setRequestHeader("content-type","application/json; charset=utf-8");
        _perfXmlhttp.setRequestHeader("cache-control","no-cache");
        _perfXmlhttp.send(args);
        if(_perfXmlhttp.readyState == 4 && _perfXmlhttp.status == 200)
            try
            {
                res = (eval("(" + _perfXmlhttp.responseText + ")")).d
            }
            catch(e)
            {
                res = e.Message
            }
    }
    catch(e)
    {
    }
    return res
}
