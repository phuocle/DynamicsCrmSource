
var bLoaded = false,
    oGanttFrame = null,
    oDetailsContainer = null,
    oSizeChanger = null,
    oStartDate = null,
    oEndDate = null,
    oGlobalOverlay = null,
    sDetailsUrlCache = "",
    sLastDetailsUrlCache = "",
    bIsExpanded = false,
    subAreaType = "schedules",
    sQuickFind = "",
    _sSearchResults = LOCID_SEARCH_RESULTS,
    zoomLevelMax = 5,
    sLastViewId = "",
    _selectedBlockID = -1,
    _selectedRowID = -1,
    _sOldHref = "",
    _filter = null,
    _pagingCookie = "",
    GanttMinHeight = 200,
    SeparatorHeight = 14,
    _startDate = new Date(_sStartDateParameter),
    _endDate = new Date(_sEndDateParameter),
    _sLastDateSelected = null,
    bCalendarIsExpanded = true,
    _oCalendarTimer = null;
$addHandler(window, "load", ApptBookJsWindowOnLoad);

function ApptBookJsWindowOnLoad() {
    oDetailsContainer = $get("frmDetailedPaneTr");
    oSizeChanger = $get("sizeChanger");
    oGanttFrame = window.frames["frmGanttFrame"];
    oStartDate = $get("StartDate");
    oEndDate = $get("EndDate");
    _endDate.setHours(0, 0, 0, 0);
    _startDate.setHours(0, 0, 0, 0);
    _sLastDateSelected = new Date(_startDate);
    $get("hrtop").style.width = "100%";
    $get("hrbottom").style.width = "100%";
    ExpandCalendar(GetCachedSetting("AB_CalendarExpand", true));
    bLoaded = true;
    var detailsHeight = GetCachedSetting("AB_DetailsHeight", 173),
        detailsShow = GetCachedSetting("AB_DetailsShow", false),
        entityName = $get("crmTypeSelector").value;
    GetSubAreaType(entityName);
    ShowDetails(detailsShow);
    oDetailsContainer.style.height = detailsHeight;
    GanttSelectionChanged();
    $get("ganttPageBodyTable").summary = CrmEncodeDecode.CrmHtmlEncode(_outerTableSummary)
}

function CreateNewAppointment(oType, bLoadDialog) {
    _startDate.setHours(0, 0, 0, 0);
    CreateNewAppointmentHelper(oType, _startDate, bLoadDialog)
}

function Print() {
    if (Mscrm.Utilities.isIosDevice()) {
        alert(LOCID_UNSUPPORTED_RIBBONACTION);
        return
    }
    !IsNull(oGanttFrame) &&
        !IsNull(oGanttFrame.window.$find("crmGrid")) &&
        oGanttFrame.window.$find("crmGrid").Print()
}

function Reschedule() {
    if (!IsBlockSelected() || SelectedBlockType() != ServiceAppointment) {
        alert(LOCID_APPTBOOK_NO_SVC_APPT);
        return
    }
    var iState = GetSelectedActivityStatus();
    if (iState == _iClosedState || iState == _iCancelledState) {
        alert(LOCID_CANNOT_RESCHED_CLOSED);
        return
    }
    var rescheduleQueryString = "?rof=false&loadDialog=true&autoSearch=true&id=" +
        CrmEncodeDecode.CrmUrlEncode(SelectedBlockId());
    openObjEx(SelectedBlockType(), null, null, rescheduleQueryString)
}

function ChangeStatus() {
    if (!IsBlockSelected()) {
        alert(LOCID_APPTBOOK_NO_SELECTION);
        return
    }
    if (GetSelectedActivityStatus() == _iClosedState) {
        alert(LOCID_APPTBOOK_ACTIVITY_READONLY);
        return
    }
    switch (SelectedBlockType()) {
    case ServiceAppointment:
    case Appointment:
        var oUrl = Mscrm.CrmUri.create("/SM/ActivityScheduling/dlg_setstate.aspx");
        oUrl.get_query()["iObjType"] = SelectedBlockType();
        oUrl.get_query()["sId"] = SelectedBlockId();
        var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("SetStateCallback", this),
            ret = openStdDlgWithCallback(oUrl, null, 400, 200, callbackFunction);
        isOutlookHostedWindow() &&
            SetStateCallback(ret);
        break
    }
}

function SetStateCallback(sResponse) {
    switch (sResponse) {
    case 1:
        ReloadGantt();
        break;
    case 2:
        Reschedule();
        break
    }
}

function GetSelectedActivityStatus() {
    if (IsBlockSelected()) {
        command = new RemoteCommand("ActivitiesWebService", "GetState");
        command.SetParameter("id", SelectedBlockId());
        command.SetParameter("typeCode", SelectedBlockType());
        var oResult = command.Execute();
        if (oResult.Success)
            return oResult.ReturnValue
    }
    return -1
}

function SendEmail() {
    if (IsBlockSelected())
        switch (SelectedBlockType()) {
        case ServiceAppointment:
            var oArgs = {};
            oArgs.TotalRecords = 1;
            oArgs.SelectedRecords = 1;
            var aIds = new Array(1);
            aIds[0] = SelectedBlockId();
            oArgs.Ids = aIds;
            oArgs.GridXml = null;
            var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx");
            oUrl.get_query()["bulkemail"] = true;
            oUrl.get_query()["multiPage"] = false;
            oUrl.get_query()["objectTypeCode"] = ServiceAppointment;
            oUrl.get_query()["objectId"] = SelectedBlockId();
            var crmDialog = new Mscrm.CrmDialog(oUrl, oArgs, 600, 600, null);
            crmDialog.show();
            break;
        case Appointment:
            alert(LOCID_APPTBOOK_INVALID_ACTION);
            break;
        default:
        }
    else
        alert(LOCID_DIRECT_EMAIL_NO_SELECTION)
}

function ShowConflicts() {
    !IsNull(oGanttFrame) &&
        oGanttFrame.ToggleShowConflicts()
}

function RefreshDetails() {
    sLastDetailsUrlCache = "";
    LoadDetailsPane()
}

function IsBlockSelected() {
    return !IsNull(oGanttFrame) &&
        !IsNull(oGanttFrame.selectedBlock) &&
        oGanttFrame.selectedBlock.getAttribute("oid") != "" &&
        oGanttFrame.selectedBlock.getAttribute("otype") != ""
}

function IsExpandedRow(oRow) {
    return oRow.id.indexOf("oaRow") != -1
}

function SelectedBlockId() {
    if (IsBlockSelected())
        return oGanttFrame.selectedBlock.getAttribute("oid");
    return ""
}

function SelectedBlockType() {
    if (IsBlockSelected())
        return Number(oGanttFrame.selectedBlock.getAttribute("otype"));
    return 0
}

function GanttSelectionChanged() {
    if (Mscrm.Utilities.isEdge())
        oGanttFrame = window.frames["frmGanttFrame"];
    if (!IsNull(oGanttFrame)) {
        var oRow = oGanttFrame.selectedRow,
            oBlock = oGanttFrame.selectedBlock;
        sDetailsUrlCache = "DetailsAppointmentPane.aspx";
        if (!IsNull(oRow))
            if (!IsNull(oRow.getAttribute("oid")) && !IsNull(oRow.getAttribute("otype"))) {
                sDetailsUrlCache += "?subAreaType=" + CrmEncodeDecode.CrmUrlEncode(subAreaType);
                if (IsExpandedRow(oRow))
                    sDetailsUrlCache += "&rowType=" +
                        CrmEncodeDecode.CrmUrlEncode(oRow.parentNode.parentNode.getAttribute("otype")) +
                        "&rowId=" +
                        CrmEncodeDecode.CrmUrlEncode(oRow.parentNode.parentNode.getAttribute("oid"));
                else
                    sDetailsUrlCache += "&rowType=" +
                        CrmEncodeDecode.CrmUrlEncode(oRow.getAttribute("otype")) +
                        "&rowId=" +
                        CrmEncodeDecode.CrmUrlEncode(oRow.getAttribute("oid"));
                if (!IsNull(oBlock))
                    if (!IsNull(oBlock.getAttribute("oid")) && !IsNull(oBlock.getAttribute("otype")))
                        sDetailsUrlCache += "&blockType=" +
                            CrmEncodeDecode.CrmUrlEncode(oBlock.getAttribute("otype")) +
                            "&blockId=" +
                            CrmEncodeDecode.CrmUrlEncode(oBlock.getAttribute("oid"))
            }
        bIsExpanded &&
            LoadDetailsPane()
    }
}

function LoadDetailsPane() {
    if (sDetailsUrlCache != sLastDetailsUrlCache) {
        $get("detailPane").src = sDetailsUrlCache;
        sLastDetailsUrlCache = sDetailsUrlCache
    }
}

function auto() {
    !IsNull(oGanttFrame) &&
        oGanttFrame.location.reload()
}

function SetZoomLevel(iLevel) {
    if (zoomLevel < 0)
        zoomLevel = 0;
    else if (zoomLevel > zoomLevelMax)
        zoomLevel = zoomLevelMax;
    else
        zoomLevel = iLevel;
    SetCachedSetting("AB_ZoomLevel", zoomLevel);
    ReloadGantt()
}

function ReloadGantt() {
    !IsNull(oGanttFrame) &&
        !IsNull(oGanttFrame.ClearSelection) &&
        oGanttFrame.ClearSelection();
    RefreshGantt();
    RefreshDetails();
    var oViewSelect = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector"),
        extraAttributeDictionary = [];
    extraAttributeDictionary["startDate"] = StartDate();
    extraAttributeDictionary["endDate"] = EndDate();
    extraAttributeDictionary["zoomLevel"] = zoomLevel;
    var sViewId = oViewSelect.get_dataValue();
    !IsNull(sViewId) &&
        sViewId != _sSearchResults &&
        updateStickyViewUrl(getViewType($get("crmGrid_SavedQuerySelector")),
            sViewId,
            $get("crmTypeSelector").value,
            null,
            extraAttributeDictionary)
}

function RefreshGantt() {
    if (IsNull(oGanttFrame))
        return;
    if (oGanttFrame.document.readyState == "complete") {
        _selectedBlockID = oGanttFrame.SelectedBlockID();
        _selectedRowID = oGanttFrame.SelectedRowID()
    }
    _endDate.setHours(0, 0, 0, 0);
    _startDate.setHours(0, 0, 0, 0);
    if (_endDate < _startDate)
        return;
    var viewType = "",
        SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector"),
        viewId = SavedQuerySelector.get_selectedOption().value;
    if (viewId == _sSearchResults)
        viewId = SavedQuerySelector.get_element().getAttribute("quickFindQuery");
    else {
        viewType = SavedQuerySelector.get_selectedOption().getAttribute("Type");
        apptQuickFindReset()
    }
    if (sLastViewId.length > 0 && sLastViewId != viewId)
        _pagingCookie = "";
    else if (oGanttFrame.document.readyState == "complete" &&
        !IsNull(oGanttFrame.window.$find("crmGrid")) &&
        !IsNull(oGanttFrame.window.$find("crmGrid").GetProperty("pagingCookie")))
        _pagingCookie = oGanttFrame.window.$find("crmGrid").GetProperty("pagingCookie");
    var sHref = "?viewID=" + CrmEncodeDecode.CrmUrlEncode(viewId);
    sHref += "&viewType=" + CrmEncodeDecode.CrmUrlEncode(viewType);
    sHref += "&subareatype=" + CrmEncodeDecode.CrmUrlEncode(subAreaType);
    sHref += "&pagingCookie=" + CrmEncodeDecode.CrmUrlEncode(IsNull(_pagingCookie) ? "" : _pagingCookie);
    sHref += "&zoomLevel=" + CrmEncodeDecode.CrmUrlEncode(zoomLevel);
    sHref += "&startDate=" + CrmEncodeDecode.CrmUrlEncode(StartDate());
    sHref += "&endDate=" + CrmEncodeDecode.CrmUrlEncode(EndDate());
    sHref += "&selRowID=" + CrmEncodeDecode.CrmUrlEncode(_selectedRowID);
    sHref += "&selBlockID=" + CrmEncodeDecode.CrmUrlEncode(_selectedBlockID);
    if (oGanttFrame.document.readyState == "complete") {
        _sOldHref = oGanttFrame.location.search;
        _filter = oGanttFrame.window.$find("crmGrid").GetParameter("filter")
    }
    if (!IsNull(_sOldHref.match(/sortCol=([^&]*)/)))
        sHref += "&sortCol=" + RegExp.$1;
    if (!IsNull(_sOldHref.match(/sortDir=([^&]*)/)))
        sHref += "&sortDir=" + RegExp.$1;
    if (!IsNull(_sOldHref.match(/pageNum=([^&]*)/)) && (sLastViewId.length == 0 || sLastViewId == viewId))
        sHref += "&pageNum=" + RegExp.$1;
    if (sQuickFind != "")
        sHref += "&quickfind=" + CrmEncodeDecode.CrmUrlEncode(sQuickFind);
    if (!IsNull(_filter) && (sLastViewId.length == 0 || sLastViewId == viewId))
        sHref += "&filter=" + CrmEncodeDecode.CrmUrlEncode(_filter);
    oGanttFrame.location.search = sHref;
    sLastViewId = viewId;
    outerSummaryArg = SavedQuerySelector.get_selectedText();
    $get("ganttPageBodyTable").summary = formatString(LOCID_OUTER_SUMMARY_STRING,
        CrmEncodeDecode.CrmHtmlEncode(outerSummaryArg))
}

function Today() {
    if (!IsGanttChartLoaded())
        return;
    var today = LocalDateTimeNow();
    today.setHours(0, 0, 0, 0);
    if (_startDate != today || _endDate != today) {
        _startDate = today;
        _endDate = today;
        _sLastDateSelected = today;
        zoomLevel = 4;
        oStartDate.value = Mscrm.DateTimeUtility.formatDate(today);
        oEndDate.value = oStartDate.value;
        oStartDate.setAttribute("returnValue", FormatUtcDate(today));
        oEndDate.setAttribute("returnValue", oStartDate.getAttribute("returnValue"));
        DateRangeChanged()
    }
}

function SelectCalendarRange(iHighlightRange) {
    if (_sLastDateSelected == null)
        return;
    switch (iHighlightRange) {
    case HILITE_DAY:
        zoomLevel = 4;
        ChangeRange(_sLastDateSelected, _sLastDateSelected, true);
        break;
    case HILITE_WEEK:
        zoomLevel = 1;
        ChangeRange(GetFirstDayOfWeek(_sLastDateSelected), GetLastDayOfWeek(_sLastDateSelected), true);
        break;
    case HILITE_NONE:
        zoomLevel = 0;
        var oMonthStart = new Date(_sLastDateSelected);
        oMonthStart.setDate(1);
        var oMonthEnd = new Date(oMonthStart);
        oMonthEnd.setMonth(oMonthEnd.getMonth() + 1);
        oMonthEnd.setDate(0);
        ChangeRange(oMonthStart, oMonthEnd, true);
        break
    }
}

function DateRangeChanged(bStealth) {
    if (IsNull(bStealth) || !bStealth)
        _sLastDateSelected = _startDate;
    if (bCalendarIsExpanded) {
        DrawInlineCalendar(_startDate, 1, true, "ReturnDate(this);", _oInlineContainer, _hiliteCode, _dHiliteDay);
        HiliteDays(_startDate.valueOf(), _endDate.valueOf())
    }
    _endDate.setHours(0, 0, 0, 0);
    _startDate.setHours(0, 0, 0, 0);
    SetCachedSetting("AB_StartDate", _startDate);
    SetCachedSetting("AB_EndDate", _endDate);
    _startDate <= _endDate &&
        ReloadGantt()
}

function CalendarChanged() {
    !IsNull(_oCalendarTimer) &&
        clearTimeout(_oCalendarTimer);
    _oCalendarTimer = setTimeout(UpdateFromCalendar, 300)
}

function UpdateFromCalendar() {
    _oCalendarTimer = null;
    ChangeRange(ParseUtcDate(oStartDate.getAttribute("returnValue")),
        ParseUtcDate(oEndDate.getAttribute("returnValue")))
}

function ChangeStartDate(dStartDate) {
    if (!isNaN(dStartDate) && dStartDate != null)
        dStartDate = new Date(dStartDate.valueOf());
    if (dStartDate == _startDate)
        return;
    var duration = GetDuration();
    dStartDate.setHours(0, 0, 0, 0);
    _startDate = dStartDate;
    _endDate = new Date(dStartDate.valueOf() + duration);
    DateRangeChanged()
}

function ChangeEndDate(dEndDate) {
    if (!isNaN(dEndDate) && dEndDate != null)
        dEndDate = new Date(dEndDate.valueOf());
    if (dEndDate == _endDate)
        return;
    dEndDate.setHours(0, 0, 0, 0);
    var iNewDuration = dEndDate.valueOf() - _startDate.valueOf(),
        iDayDuration = 24 * 60 * 60 * 1e3,
        iMaxDuration = _iMaxDateRange * iDayDuration;
    if (iNewDuration > iMaxDuration) {
        alert(LOCID_AF_ERRORDATEINTERVAL_MSG);
        dEndDate = new Date(_startDate.valueOf() + iMaxDuration - iDayDuration)
    }
    if (dEndDate < _startDate) {
        var duration = GetDuration();
        _startDate = new Date(dEndDate.valueOf() - duration);
        _startDate.setHours(0, 0, 0, 0)
    }
    _endDate = dEndDate;
    DateRangeChanged()
}

function ChangeRange(oInStartDate, oInEndDate, bStealth) {
    if (oInEndDate == _endDate && oInStartDate == _startDate || oInStartDate > oInEndDate)
        return;
    oInStartDate.setHours(0, 0, 0, 0);
    oInEndDate.setHours(0, 0, 0, 0);
    _startDate = oInStartDate;
    _endDate = oInEndDate;
    DateRangeChanged(bStealth)
}

function StartDate() {
    _startDate.setHours(0, 0, 0, 0);
    return FormatUtcDate(_startDate)
}

function EndDate() {
    _endDate.setHours(0, 0, 0, 0);
    return FormatUtcDate(_endDate)
}

function ZoomLevel() {
    return zoomLevel
}

function GetDuration() {
    return _endDate.valueOf() - _startDate.valueOf()
}

function apptQuickFindReset() {
    var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");
    SavedQuerySelector.RemoveOption(_sSearchResults);
    if (oGanttFrame != undefined)
        if (document.getElementById("crmGrid_JumpBar")) {
            var oJumpBar = oGanttFrame.window.$find("crmGrid_JumpBar");
            oJumpBar != undefined &&
                oJumpBar.Reset()
        }
    var quickFindContainer = $find("crmGrid_quickFindContainer");
    if (!IsNull(quickFindContainer))
        quickFindContainer.NotifyExitedQuickFind();
    else {
        var findCriteria = document.getElementById("crmGrid_findCriteria");
        if (!IsNull(findCriteria))
            findCriteria.value = ""
    }
    sQuickFind = ""
}

function clearFind() {
    apptQuickFindReset();
    ReloadGantt()
}

function SubAreaType() {
    return subAreaType
}

function PagingCookie() {
    return _pagingCookie
}

function On(o) {
    o.style.backgroundColor = "#5A7EBF";
    o.style.color = "#ffffff"
}

function Off(o) {
    o.style.backgroundColor = "";
    o.style.color = ""
}

var bIsPressed = false,
    iLastDetailSize = 0,
    iTopLimit = 0,
    iBottomLimit = 0,
    iDownY = 0,
    iDetailsHeight = 0;

function ToggleExpansion() {
    ShowDetails(!bIsExpanded)
}

function ShowDetails(bShow) {
    if (!bLoaded)
        return;
    var apptbookDirection,
        ganttsheet = oGanttFrame.document.getElementById("ganttSheet");
    if (bShow) {
        LoadDetailsPane();
        apptbookDirection = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ApptBook/down.gif"));
        oSizeChanger.src = apptbookDirection.source;
        oSizeChanger.className = apptbookDirection.cssClass;
        oSizeChanger.alt = LOCID_HIDERESOURCEDETAILS;
        oSizeChanger.title = LOCID_HIDERESOURCEDETAILS;
        setSpliterApptbookPosition(parseInt(XUI.Html.GetComputedStyle(oDetailsContainer, "height")));
        ganttsheet.style.bottom = oDetailsContainer.style.height
    } else {
        apptbookDirection = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ApptBook/up.gif"));
        oSizeChanger.src = apptbookDirection.source;
        oSizeChanger.className = apptbookDirection.cssClass;
        oSizeChanger.alt = LOCID_SHOWRESOURCEDETAILS;
        oSizeChanger.title = LOCID_SHOWRESOURCEDETAILS;
        setSpliterApptbookPosition(0);
        ganttsheet.style.bottom = "0px"
    }
    bIsExpanded = bShow;
    SetCachedSetting("AB_DetailsShow", bShow)
}

function MouseDownBlock(e) {
    e.stopPropagation()
}

function MouseDownApptbook(e) {
    if (!bLoaded)
        return;
    if (IsNull(oGlobalOverlay)) {
        oGlobalOverlay = document.createElement("div");
        oGlobalOverlay.className = "overlay";
        $addHandler(oGlobalOverlay, "mouseup", MouseUpApptbook);
        $addHandler(oGlobalOverlay, "mousemove", MouseMoveApptbook);
        document.body.appendChild(oGlobalOverlay)
    }
    oGlobalOverlay.style.display = "";
    bIsPressed = true;
    iLastDetailSize = 0;
    $get("ganttPageBodyTable").cursor = "col-resize";
    iDownY = e.clientY;
    var iSeparatorMouseY = iDownY - $get("separator").offsetTop;
    iDetailsHeight = oDetailsContainer.offsetHeight;
    iTopLimit = $get("frmGanttFrameTr").offsetTop + iSeparatorMouseY;
    iBottomLimit = window.document.body.clientHeight;
    e.preventDefault()
}

function MouseMoveApptbook(e) {
    if (!bIsPressed)
        return;
    var mousePos = e.clientY;
    if (mousePos >= iTopLimit && mousePos <= iBottomLimit)
        resizeSpliterApptbook(mousePos);
    else if (mousePos < iTopLimit)
        resizeSpliterApptbook(iTopLimit);
    else
        resizeSpliterApptbook(iBottomLimit);
    e.preventDefault()
}

function MouseUpApptbook(e) {
    if (!bLoaded)
        return;
    if (!IsNull(oGlobalOverlay))
        oGlobalOverlay.style.display = "none";
    bIsPressed = false;
    $get("ganttPageBodyTable").cursor = "default";
    iLastDetailSize > 0 &&
        SetCachedSetting("AB_DetailsHeight", iLastDetailSize);
    e.preventDefault()
}

function resizeSpliterApptbook(mousePos) {
    iLastDetailSize = iDetailsHeight + (iDownY - mousePos);
    if (iLastDetailSize > 10) {
        ShowDetails(true);
        setSpliterApptbookPosition(iLastDetailSize)
    } else
        ShowDetails(false)
}

function setSpliterApptbookPosition(iLastDetailSize) {
    var oPrimary = $get("primary");
    if (iLastDetailSize > 0) {
        if (document.body.offsetHeight < iLastDetailSize + oPrimary.offsetTop + GanttMinHeight) {
            var newValue = document.body.offsetHeight - oPrimary.offsetTop - GanttMinHeight;
            if (newValue > 0)
                iLastDetailSize = newValue
        }
        oDetailsContainer.style.display = "block";
        oDetailsContainer.style.height = iLastDetailSize + "px"
    } else
        oDetailsContainer.style.display = "none";
    $get("separator").style.bottom = iLastDetailSize + "px";
    oPrimary.style.bottom = iLastDetailSize + SeparatorHeight + "px"
}

function setCalendarWidth(width) {
    var widthWithPadding = width + 6;
    $get("CalendarPane").style.width = width + "px";
    if (LOCID_UI_DIR == "RTL") {
        $get("frmGanttFrameTr").style.left = widthWithPadding + "px";
        $get("separator").style.left = widthWithPadding + "px";
        oDetailsContainer.style.left = widthWithPadding + "px"
    } else {
        $get("frmGanttFrameTr").style.right = widthWithPadding + "px";
        $get("separator").style.right = widthWithPadding + "px";
        oDetailsContainer.style.right = widthWithPadding + "px"
    }
}

function ExpandCalendar(expand) {
    Show($get("calExpand"), !expand);
    Show($get("calCollapse"), expand);
    Show($get("calendarTitle"), expand);
    Show($get("monthCalendar"), expand);
    Show($get("popupCalendar"), !expand);
    Show($get("today"), !expand);
    Show($get("MonthViewLabel"), expand);
    Show($get("WeekViewLabel"), expand);
    Show($get("DayViewLabel"), expand);
    if (expand) {
        setCalendarWidth(142);
        InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY);
        LaunchInlineCalendar(oStartDate,
            _startDate,
            1,
            true,
            oEndDate,
            null,
            $get("monthCalendar"),
            HILITE_DAY,
            _startDate);
        _oMonthsContainer = _oInlineContainer;
        HiliteDays(_startDate.valueOf(), _endDate.valueOf())
    } else
        setCalendarWidth(36);
    bCalendarIsExpanded = expand;
    SetCachedSetting("AB_CalendarExpand", bCalendarIsExpanded)
}

function Show(o, show) {
    o.style.display = show ? "inline" : "none"
}

function PopupCalendar(calbutton) {
    if (!IsGanttChartLoaded())
        return;
    InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY);
    oStartDate.setAttribute("returnValue", StartDate());
    oEndDate.setAttribute("returnValue", EndDate());
    LaunchCalendar(oStartDate.parentNode,
        oStartDate,
        _startDate,
        1,
        true,
        oEndDate,
        "parent.ReturnDate(this)",
        HILITE_DAY,
        _startDate,
        false,
        calbutton)
}

function OnViewTypeChange(oSelect) {
    var entityName = oSelect.value,
        queryType = 0;
    GetSubAreaType(entityName);
    var cacheParams = {};
    cacheParams["updateQueryString"] = "type=" + entityName;
    var pageManager = top.Mscrm.PageManager.get_instance();
    pageManager.raiseEvent(Mscrm.ScriptEvents.UpdatePageInformation, cacheParams);
    var oGetQueryList = new RemoteCommand("ActivitiesWebService", "RenderAppointmentBookViewSelector");
    oGetQueryList.SetParameter("entityName", entityName);
    oGetQueryList.SetParameter("queryType", queryType);
    var oResult = oGetQueryList.Execute();
    if (oResult.Success == ERROR_NONE) {
        var tdViewSelector = $get("tdViewSelector"),
            tdViewSelectorFirstChild = XUI.Html.DomUtils.GetFirstChild(tdViewSelector),
            oId = tdViewSelectorFirstChild.id,
            savedQuerySelector = Mscrm.FormControlInputBehavior.GetElementBehavior(tdViewSelectorFirstChild);
        null != savedQuerySelector &&
            savedQuerySelector.dispose();
        tdViewSelector.innerHTML = XUI.Xml.GetText(oResult.Xml);
        tdViewSelectorFirstChild = XUI.Html.DomUtils.GetFirstChild(tdViewSelector);
        tdViewSelectorFirstChild.id = oId;
        tdViewSelectorFirstChild.onchange = ReloadGantt;
        crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, tdViewSelectorFirstChild);
        ReloadGantt()
    }
}

function IsGanttChartLoaded() {
    if (IsNull(oStartDate) || IsNull(oEndDate))
        return false;
    return true
}

function GetSubAreaType(entityName) {
    switch (entityName) {
    case "activitypointer":
    case "serviceappointment":
    case "appointment":
        subAreaType = "apptbook";
        break;
    case "resource":
    case "systemuser":
    case "equipment":
        subAreaType = "schedules";
        break
    }
}