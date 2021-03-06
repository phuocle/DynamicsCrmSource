
var mainWnd,
    dataAspxResults,
    isInPageNav = false,
    AfterWindowOpenTimestamp = null,
    BeforeWindowOpenTimestamp = null;

function OpenPerformanceUI() {
    waitForMarkers = false;
    mainWnd = getMainWnd();
    BeforeWindowOpenTimestamp = RetrieveMarkersFromQueryString();
    GetPerfDiv() &&
        ClearPerfContent();
    var perfDiv = CreatePerfReportDiv();
    GenerateForEditForm();
    GenerateForOtherPages()
}

function GenerateForEditForm() {
    if (window._IsRefreshForm != "1")
        return;
    if (BeforeWindowOpenTimestamp && mainWnd.FinishInlineEditInitializerTimestamp) {
        addToPerfContent("--------------------------------------------------------------------------------<br/>");
        addToPerfContent("View-Ready Load Time Components<br/>--------------------------------------------------------------------------------<br/>");
        var retrievePageTime = mainWnd.StartRetrieveLayoutTimestamp - AfterWindowOpenTimestamp;
        if (!isInPageNav && mainWnd.FinishRefreshPreloadTimestamp)
            retrievePageTime = mainWnd.StartRetrieveLayoutTimestamp - mainWnd.FinishRefreshPreloadTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load page.aspx:\tTBD <br/>");
        var retrieveLayoutTime = mainWnd.FinishRetrieveLayoutTimestamp - mainWnd.StartRetrieveLayoutTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to retrieve layout:\t" + retrieveLayoutTime + " ms<br/>");
        var UpdatePageHeaderTime = mainWnd.FinishUpdatePageHeaderTimestamp - mainWnd.StartUpdatePageHeaderTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to update page header:\t" + UpdatePageHeaderTime + " ms<br/>");
        var perceivedTotal = mainWnd.HideLoadingScreenTimestamp - BeforeWindowOpenTimestamp,
            dataBindingTime = mainWnd.FinishDataBindingTimestamp - mainWnd.StartDataBindingTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to bind form data using layout template:\t" +
            dataBindingTime +
            " ms<br/>");
        var ScriptBlocksTime = mainWnd.FinishLoadingScriptBlocksTimestamp - mainWnd.StartLoadingScriptBlocksTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load script blocks:\t" + ScriptBlocksTime + " ms<br/>");
        addToPerfContent("Read-Ready Time:\t" + perceivedTotal + " ms<br/>");
        addToPerfContent("--------------------------------------------------------------------------------<br/>");
        addToPerfContent("Complete Load Components (In addition to View-ready Load Time)");
        addToPerfContent("<br/>--------------------------------------------------------------------------------<br/>");
        var StaticScriptsTime = mainWnd.FinishLoadingStaticScripts - mainWnd.StartLoadingStaticScripts;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load Static scripts:\t" + StaticScriptsTime + " ms<br/>");
        var DynamicScriptsTime = mainWnd.FinishLoadingDynamicScripts - mainWnd.StartLoadingDynamicScripts;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load Dynamic scripts:\t" + DynamicScriptsTime + " ms<br/>");
        var Pass1LoadTime = mainWnd.FinishInlineEditPass1Timestamp - mainWnd.StartInlineEditPass1Timestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to execute Pass1:\t" + Pass1LoadTime + " ms<br/>");
        var Pass2LoadTime = mainWnd.FinishInlineEditPass2Timestamp - mainWnd.StartInlineEditPass2Timestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to execute Pass2:\t" + Pass2LoadTime + " ms<br/>");
        var InlineEditInitializerTime = mainWnd.FinishInlineEditInitializerTimestamp -
            mainWnd.StartInlineEditInitializerTimestamp;
        addToPerfContent("&nbsp;&nbsp;&nbsp; Time to initialize inline controls:(Pass1 + Pass2)\t" +
            InlineEditInitializerTime +
            " ms<br/>");
        if (typeof mainWnd.FinishMobileFirstControlTimestamp != "undefined") {
            var FirstControlLoadTime = mainWnd.FinishMobileFirstControlTimestamp - mainWnd.BeforeWindowOpenTimestamp;
            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to load first control (First control edit):\t" +
                FirstControlLoadTime +
                " ms<br/>")
        }
        var FullyLoadTime = mainWnd.FinishInlineEditPass1Timestamp - BeforeWindowOpenTimestamp;
        addToPerfContent("Edit-Ready Time (CLT):\t" + FullyLoadTime + " ms<br/>");
        var CompletePass2LoadTime = mainWnd.FinishInlineEditPass2Timestamp - BeforeWindowOpenTimestamp;
        addToPerfContent("Edit-Ready Time Pass2:\t" + CompletePass2LoadTime + " ms<br/>");
        addToPerfContent("--------------------------------------------------------------------------------<br/>");
        addToPerfContent("Other Control Level Load Time<br/>");
        addToPerfContent("--------------------------------------------------------------------------------<br/>");
        for (marker in mainWnd.PerformanceMarkers) {
            var LoadTime = mainWnd.PerformanceMarkers[marker]["FinishLoadTimestamp"] -
                mainWnd.PerformanceMarkers[marker]["StartLoadTimestamp"];
            addToPerfContent("&nbsp;&nbsp;&nbsp; Time to Load " +
                mainWnd.PerformanceMarkers[marker]["ControlType"] +
                " with ID: " +
                marker +
                " is:\t" +
                LoadTime +
                " ms<br/>")
        }
        addToPerfContent("--------------------------------------------------------------------------------<br/>");
        if (!IsNull(window.colorizePerfMarkers) && "1" === window.colorizePerfMarkers) {
            addToPerfContent("Raw numbers<br>");
            addToPerfContent("now:\t" + (new Date).getTime().toString() + "<br>");
            addToPerfContent("mainWnd.BeforeWindowOpenTimestamp:\t" +
                CrmEncodeDecode.CrmHtmlEncode(BeforeWindowOpenTimestamp) +
                "<br>");
            addToPerfContent("mainWnd.HideLoadingScreenTimestampRaw:\t" +
                CrmEncodeDecode.CrmHtmlEncode(mainWnd.HideLoadingScreenTimestampRaw) +
                "<br>");
            addToPerfContent("mainWnd.HideLoadingScreenTimestamp:\t" +
                CrmEncodeDecode.CrmHtmlEncode(mainWnd.HideLoadingScreenTimestamp) +
                "<br>");
            addToPerfContent("mainWnd.ControlsInitializationCompleteTimestamp:\t" +
                CrmEncodeDecode.CrmHtmlEncode(mainWnd.ControlsInitializationCompleteTimestamp) +
                "<br>");
            addToPerfContent("mainWnd.FinishProcessControlInitializerTimestamp:\t" +
                CrmEncodeDecode.CrmHtmlEncode(mainWnd.FinishProcessControlInitializerTimestamp) +
                "<br>");
            addToPerfContent("--------------------------------------------------------------------------------<br/><br/>")
        }
    }
    var visitor = new Mscrm.DisplayAggregatePerformanceMarkerVisitor;
    Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers().accept(visitor);
    addToPerfContent(visitor.get_displayHtml());
    addToPerfContent("<br/>");
    for (var key in window.perfDict)
        window.perfDict.hasOwnProperty(key) &&
            addToPerfContent(key + ":\t" + window.perfDict[key] + "<br/>");
    addToPerfContent("<br/>")
}

function GenerateForOtherPages() {
    if (window._IsRefreshForm == "1")
        return;
    var perceivedTime = mainWnd.FinishPerceivedPageLoad - BeforeWindowOpenTimestamp;
    addToPerfContent("Perceived Time:\t" + perceivedTime + " ms<br/>");
    var completeTime = mainWnd.FinishCompletePageLoad - BeforeWindowOpenTimestamp;
    addToPerfContent("Complete Time:\t" + completeTime + " ms<br/>")
}

function RetrieveMarkersFromQueryString() {
    var url = Mscrm.CrmUri.create(window.location.href);
    return loadStartTime = url.get_query()["LoadStartTime"]
}

var _maxPerfAutoUpdates = 100,
    _totalPerfAutoUpdates = 0,
    _lastRequestTime = 0;

function GetPerfDiv() {
    var mainWnd = getMainWnd();
    return mainWnd.document.getElementById("perfDiv")
}

function RemovePerfReportDiv() {
    var perfDiv = GetPerfDiv(),
        mainWnd = getMainWnd();
    perfDiv && mainWnd.document.body.removeChild(perfDiv)
}

function CreatePerfReportDiv() {
    var perfDiv = GetPerfDiv();
    if (perfDiv)
        return;
    var mainWnd = getMainWnd();
    perfDiv && mainWnd.document.body.removeChild(perfDiv);
    perfDiv = mainWnd.document.createElement("div");
    perfDiv.setAttribute("id", "perfDiv");
    perfDiv.style.top = 0;
    perfDiv.style.background = "#AABBCC";
    perfDiv.style.border = "1px solid #000";
    perfDiv.style.opacity = "alpha(opacity=90)";
    perfDiv.style.zIndex = 5e3;
    var perfUpperActions = mainWnd.document.createElement("div");
    perfUpperActions.setAttribute("id", "perfUpperActions");
    perfUpperActions.style.textAlign = "right";
    perfDiv.appendChild(perfUpperActions);
    var perfInnerContent = mainWnd.document.createElement("div");
    perfInnerContent.setAttribute("id", "perfInnerContent");
    perfDiv.appendChild(perfInnerContent);
    var perfInnerActions = mainWnd.document.createElement("div");
    perfInnerActions.setAttribute("id", "perfInnerActions");
    perfDiv.appendChild(perfInnerActions);
    mainWnd.document.body.appendChild(perfDiv);
    addToPerfContent("<h3>Performance results</h3>");
    ShowPerfReport(true);
    $addHandler(window, "unload", DisposePerfReportDiv);
    return perfDiv
}

function DisposePerfReportDiv() {
    $removeHandler(window, "unload", DisposePerfReportDiv);
    var mainWnd = getMainWnd(),
        perfDiv = mainWnd.document.getElementById("perfDiv");
    perfDiv && mainWnd.document.body.removeChild(perfDiv)
}

function RegisterEventHandlers() {
    var mainWnd = getMainWnd(),
        crmTopBar = mainWnd.document.getElementById("crmTopBar");
    if (mainWnd.UseTabletExperience && crmTopBar) {
        mainWnd.$addHandler(crmTopBar, "touchstart", _PerfTouchStart);
        mainWnd.$addHandler(crmTopBar, "touchmove", _PerfTouchMove);
        mainWnd.$addHandler(crmTopBar, "touchend", _PerfTouchEnd)
    }
    mainWnd.$addHandler(mainWnd.document, "keyup", _PerfKeyUpHandler);
    $addHandler(window.document, "keyup", _PerfKeyUpHandler);
    $addHandler(window, "beforeunload", UnregisterEventHandlers)
}

function UnregisterEventHandlers() {
    var mainWnd = getMainWnd(),
        crmTopBar = mainWnd.document.getElementById("crmTopBar");
    if (mainWnd.UseTabletExperience && crmTopBar) {
        mainWnd.$removeHandler(crmTopBar, "touchstart", _PerfTouchStart);
        mainWnd.$removeHandler(crmTopBar, "touchmove", _PerfTouchMove);
        mainWnd.$removeHandler(crmTopBar, "touchend", _PerfTouchEnd)
    }
    mainWnd.$removeHandler(mainWnd.document, "keyup", _PerfKeyUpHandler);
    $removeHandler(window.document, "keyup", _PerfKeyUpHandler);
    $removeHandler(window, "beforeunload", UnregisterEventHandlers)
}

RegisterEventHandlers();

function _PerfKeyUpHandler(event) {
    event.keyCode == 81 &&
        event.ctrlKey &&
        event.shiftKey &&
        OpenPerformanceUI()
}

var _perfTouchStartX = 0,
    _perfTouchCurrentX = 0,
    _perfTouchSwipeThreshold = 50;

function _PerfTouchStart(event) {
    if (event.touches) {
        var touch = event.touches[0];
        if (touch)
            _perfTouchStartX = touch.pageX
    }
}

function _PerfTouchMove(event) {
    if (event.touches) {
        var touch = event.touches[0];
        if (touch)
            _perfTouchCurrentX = touch.pageX
    }
}

function _PerfTouchEnd(event) {
    if (_perfTouchCurrentX <= 0)
        return;
    var swipeLength = Math.abs(_perfTouchCurrentX - _perfTouchStartX);
    swipeLength > _perfTouchSwipeThreshold && OpenPerformanceUI();
    _perfTouchStartX = 0;
    _perfTouchCurrentX = 0
}

function addToPerfContent(str) {
    var mainWnd = getMainWnd(),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent");
    perfInnerContent.innerHTML += str
}

function ClearPerfContent() {
    var mainWnd = getMainWnd(),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent");
    perfInnerContent.innerHTML = ""
}

function ShowPerfReport(show) {
    var mainWnd = getMainWnd(),
        perfDiv = mainWnd.document.getElementById("perfDiv"),
        perfUpperActions = mainWnd.document.getElementById("perfUpperActions"),
        perfInnerContent = mainWnd.document.getElementById("perfInnerContent"),
        perfInnerActions = mainWnd.document.getElementById("perfInnerActions"),
        openDivWidth = 400,
        hiddenDivWidth = 60,
        padding = 10;
    if (show) {
        perfDiv.style.width = openDivWidth + "px";
        perfDiv.style.height = "auto";
        perfDiv.style.position = "absolute";
        perfDiv.style.left = "50%";
        perfDiv.style.marginLeft = -(openDivWidth / 2) + "px";
        perfDiv.style.padding = padding + "px";
        perfDiv.style.paddingTop = 0 + "px";
        perfDiv.style.overflow = "scroll";
        perfInnerContent.style.display = "block";
        perfInnerActions.style.display = "block";
        perfUpperActions
            .innerHTML =
            "<font color='blue'><a href='#' onclick='window.RemovePerfReportDiv()'><u>close</u></a></font>";
        perfInnerActions.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        perfInnerActions.innerHTML += "<a href='/tools/diagnostics/diag.aspx' target='_blank'><u>diagnostics</u></a>"
    } else {
        perfDiv.style.width = hiddenDivWidth + "px";
        perfDiv.style.height = "18px";
        perfDiv.style.position = "absolute";
        perfDiv.style.left = "50%";
        perfDiv.style.marginLeft = openDivWidth / 2 - hiddenDivWidth + "px";
        perfDiv.style.paddingBottom = 0 + "px";
        perfInnerContent.style.display = "none";
        perfInnerActions.style.display = "none";
        perfUpperActions
            .innerHTML =
            "Perf: <font color='blue'><a href='#' onclick='ShowPerfReport(true);return false;'><u>show</u></a>"
    }
}

function AddTimingValue(aMarkers, sTimeMarker) {
    try {
        var sValue = eval(sTimeMarker);
        typeof sValue != "undefined" && aMarkers.push({ name: sTimeMarker, value: sValue })
    } catch (e) {
    }
}

function getMainWnd() {
    return window
}