
var _oCalPopUp,
    _oCalInput,
    _iWeekNumMax = 53,
    _oDateTimeFormat = Sys.CultureInfo.CurrentCulture.dateTimeFormat,
    _sCalMonths = window.LOCID_ARRAY_SHORT_MONTHS ? LOCID_ARRAY_SHORT_MONTHS.split(",") : _oDateTimeFormat["AbbreviatedMonthNames"],
    _sCalLongMonths = _oDateTimeFormat["MonthNames"],
    _sCalShortestDays = _oDateTimeFormat["ShortestDayNames"],
    _sCalLongDays = _oDateTimeFormat["DayNames"],
    _sTimeFormats = ["h:mm tt","hh:mm tt","H:mm","HH:mm","h:mm:ss tt","hh:mm:ss tt","H:mm:ss","HH:mm:ss","tt h:mm","tt hh:mm"],
    _dCalMinDate = new Date(1753,0,1),
    _dCalMaxDate = new Date(9999,11,30),
    _iCalStartDay,
    _sCalSeperator,
    iShowWeekCalWidth = window.UseTabletExperience ? 220 : Number(LOCID_SHOW_WEEK_CAL_WIDTH),
    iNoWeekCalWidth = window.UseTabletExperience ? 200 : Number(LOCID_NO_WEEK_CAL_WIDTH),
    iCalHeight = window.UseTabletExperience ? 210 : LOCID_CALENDAR_HEIGHT,
    _iCalWidth = typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER ? iShowWeekCalWidth : iNoWeekCalWidth,
    _iTodayBarHeight = 18,
    _bDragging = false,
    _sBeginDate = null,
    _sEndDate = null,
    _oEndDate = null,
    _bSelectRange = false,
    _iNumMonths = 1,
    _oMonthsContainer,
    _sOnClick = "ReturnDate(this);",
    _oInlineContainer = null,
    _hiliteCode,
    _dHiliteDay;
function DateJsWindowOnLoad()
{
    InitDateVars()
}
function DateJsWindowOnUnload()
{
    $removeHandler(window,"load",DateJsWindowOnLoad);
    $removeHandler(window,"unload",DateJsWindowOnUnload)
}
$addHandler(window,"load",DateJsWindowOnLoad);
$addHandler(window,"unload",DateJsWindowOnUnload);
function InitDateVars()
{
    _iCalStartDay = "undefined" == typeof ORG_DATE_START_DAY ? 0 : ORG_DATE_START_DAY;
    _sCalSeperator = "undefined" == typeof USER_DATE_SEPARATOR ? "" : USER_DATE_SEPARATOR;
    _iCalWidth = typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER ? iShowWeekCalWidth : iNoWeekCalWidth;
    $removeHandler(window,"load",DateJsWindowOnLoad)
}
function InitCalendar(sDateFormatString,sSeperator,iStartDay,dMinDate,dMaxDate)
{
    if(sSeperator)
    {
        _sCalSeperator = sSeperator;
        if(!IsNull(iStartDay))
        {
            _iCalStartDay = iStartDay;
            if(dMinDate)
            {
                _dCalMinDate = dMinDate;
                if(dMaxDate)
                    _dCalMaxDate = dMaxDate
            }
        }
    }
}
function DrawCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,bPopUp,yearOnly)
{
    if("undefined" == typeof hiliteCode)
        hiliteCode = HILITE_NONE;
    if(!dHiliteDay)
        dHiliteDay = null;
    var calendarHTML = "";
    if(!IsNull(yearOnly) && yearOnly == true)
        calendarHTML = DrawYear(dInitDate,sOnClick);
    else
        if(iNumMonths > 1)
        {
            calendarHTML = DrawMonth(dInitDate,sOnClick,hiliteCode,dHiliteDay,false,true,bSelectRange,bPopUp);
            var dNextMonthDate = new Date(dInitDate);
            dNextMonthDate.setDate(1);
            for(var i = 1; i < iNumMonths - 1; i++)
            {
                dNextMonthDate.setMonth(dNextMonthDate.getMonth() + 1);
                calendarHTML += DrawMonth(dNextMonthDate,sOnClick,hiliteCode,dHiliteDay,false,false,bSelectRange,bPopUp)
            }
            dNextMonthDate.setMonth(dNextMonthDate.getMonth() + 1);
            calendarHTML += DrawMonth(dNextMonthDate,sOnClick,hiliteCode,dHiliteDay,true,false,bSelectRange,bPopUp)
        }
        else
            calendarHTML = DrawMonth(dInitDate,sOnClick,hiliteCode,dHiliteDay,true,true,bSelectRange,bPopUp);
    return calendarHTML
}
function DrawPopUpCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,yearOnly)
{
    DrawPopUpCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,yearOnly,null)
}
function DrawPopUpCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,yearOnly,callback)
{
    var temp = document.createElement("div");
    temp.innerHTML = DrawCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,true,yearOnly);
    var calBody = XUI.Html.DomUtils.GetFirstChild(temp);
    _oCalPopUp.set_body(calBody);
    var actualCalHeight = iCalHeight * iNumMonths - (iNumMonths - 1) * _iTodayBarHeight + 2;
    _oCalPopUp.set_width(_iCalWidth);
    _oCalPopUp.set_height(actualCalHeight);
    if(!IsNull(callback))
        _oCalPopUp.show(callback);
    else
        _oCalPopUp.show()
}
function DrawInlineCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,oInlineContainer,hiliteCode,dHiliteDay)
{
    if(oInlineContainer)
    {
        oInlineContainer.style.width = _iCalWidth + "px";
        oInlineContainer.innerHTML = DrawCalendar(dInitDate,iNumMonths,bSelectRange,sOnClick,hiliteCode,dHiliteDay,false)
    }
}
function ResetVars()
{
    !IsNull(_oCalPopUp) && 
        _oCalPopUp.hide();
    _oCalPopUp = undefined
}
function ZeroUtcTime(sDate)
{
    if(sDate.indexOf("T") != -1)
        sDate = sDate.substr(0,sDate.indexOf("T"));
    return sDate += "T00:00:00"
}
function HandleKeysForCalPopUp(evt)
{
    if(_oCalPopUp && _oCalPopUp.get_isVisible())
    {
        if(evt.keyCode == Mscrm.KeyCode.KEY_ESC)
        {
            evt.stopPropagation();
            evt.preventDefault();
            _oCalPopUp.hide();
            $removeHandler(evt.target,"keydown",HandleKeysForCalPopUp)
        }
        if(evt.keyCode == Mscrm.KeyCode.KEY_TAB || evt.keyCode == Mscrm.KeyCode.KEY_ENTER)
        {
            _oCalPopUp.hide();
            $removeHandler(evt.target,"keydown",HandleKeysForCalPopUp)
        }
    }
    else
        $removeHandler(evt.target,"keydown",HandleKeysForCalPopUp)
}
function SetDefaultFocus()
{
    var calFirstControl = $get("tdPrv");
    !IsNull(calFirstControl) && 
        calFirstControl.focus()
}
function HandleKeysForCal(event)
{
    if(event.keyCode == KEY_ENTER)
        if(!IsNull(event.target))
        {
            event.target.click();
            SetDefaultFocus()
        }
}
function InitVars(oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay)
{
    if(isNaN(dInitDate))
        dInitDate = LocalDateTimeNow();
    _oCalInput = oInputElem;
    $addHandler(_oCalInput,"keydown",HandleKeysForCalPopUp);
    if(bSelectRange)
    {
        if(oInputElem && oInputElem.getAttribute("returnValue"))
        {
            oInputElem.setAttribute("returnValue",ZeroUtcTime(oInputElem.getAttribute("returnValue")));
            _sBeginDate = ParseUtcDate(oInputElem.getAttribute("returnValue")).valueOf()
        }
        _oEndDate = oEndDate;
        if(oEndDate && oEndDate.getAttribute("returnValue"))
        {
            oEndDate.setAttribute("returnValue",ZeroUtcTime(oEndDate.getAttribute("returnValue")));
            _sEndDate = ParseUtcDate(oEndDate.getAttribute("returnValue")).valueOf()
        }
    }
    if("undefined" != typeof iNumMonths)
        _iNumMonths = iNumMonths;
    if("undefined" != typeof sOnClick)
        _sOnClick = sOnClick;
    _bSelectRange = bSelectRange;
    _hiliteCode = hiliteCode;
    _dHiliteDay = dHiliteDay;
    if(_oCalPopUp)
    {
        var calendarContainer = _oCalPopUp.get_body() && _oCalPopUp.get_body().parentNode ? _oCalPopUp.get_body().parentNode : null;
        _oCalPopUp.dispose();
        _oCalPopUp = null;
        calendarContainer && calendarContainer.parentNode && 
            calendarContainer.parentNode.removeChild(calendarContainer)
    }
}
function ConstructPopUp(oContainer,sDialogIdSuffix,clickSrc)
{
    var contextNode = $get("contentDiv");
    contextNode = contextNode ? contextNode : document.body;
    var calendarElement = document.createElement("div");
    contextNode.appendChild(calendarElement);
    _oCalPopUp = Mscrm.Dialog.createDialog(calendarElement);
    var imgButton = $get(oContainer.id.replace("CalContainer","") + "img");
    clickSrc = clickSrc ? clickSrc : imgButton ? imgButton : oContainer ? oContainer : _oCalInput;
    var xy = Mscrm.Utilities.getXYPos(clickSrc,!Mscrm.Utilities.get_isLeftToRight(),contextNode),
        posX = xy.x,
        posY = xy.y + clickSrc.offsetHeight,
        width = _oCalPopUp.get_width() > 0 ? _oCalPopUp.get_width() : 150,
        height = _oCalPopUp.get_height() > 0 ? _oCalPopUp.get_height() : iCalHeight;
    if(!Mscrm.Utilities.get_isLeftToRight())
        posX = posX + clickSrc.offsetWidth;
    _oCalPopUp.set_left(posX);
    _oCalPopUp.set_top(posY);
    _oCalPopUp.addForbiddenElement(_oCalInput);
    _oCalPopUp.set_isModal(false);
    _oCalPopUp.set_launchesRight(true);
    _oCalPopUp.set_minHeight(Mscrm.Dialog.auto);
    _oCalPopUp.set_maxHeight(Mscrm.Dialog.auto);
    _oCalPopUp.set_isLoading(false);
    _oCalPopUp.set_enableShadow(false);
    _oCalPopUp.set_dialogId(oContainer.id + sDialogIdSuffix + "_miniCal");
    _oCalPopUp.set_containerClassName(_oCalPopUp.get_containerClassName() + " ms-crm-MiniCal-Border")
}
function LaunchCalendar(oContainer,oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay,yearOnly,clickEvtSrc)
{
    LaunchCalendar(oContainer,oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay,yearOnly,clickEvtSrc,null)
}
function LaunchCalendar(oContainer,oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay,yearOnly,clickEvtSrc,callback)
{
    if(!sOnClick || "" == sOnClick)
        sOnClick = _sOnClick;
    InitVars(oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay);
    ConstructPopUp(oContainer,oInputElem.id,clickEvtSrc);
    DrawPopUpCalendar(dInitDate,_iNumMonths,bSelectRange,_sOnClick,hiliteCode,dHiliteDay,yearOnly,callback)
}
function LaunchInlineCalendar(oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,oInlineContainer,hiliteCode,dHiliteDay)
{
    if(!sOnClick || "" == sOnClick)
        sOnClick = "ReturnDate(this);";
    _oInlineContainer = oInlineContainer;
    InitVars(oInputElem,dInitDate,iNumMonths,bSelectRange,oEndDate,sOnClick,hiliteCode,dHiliteDay);
    DrawInlineCalendar(dInitDate,_iNumMonths,bSelectRange,_sOnClick,oInlineContainer,hiliteCode,dHiliteDay)
}
function SetDateValues(oInput)
{
    oInput.value = Trim(oInput.value);
    var s = oInput.value;
    if(s.length > 0)
    {
        var D = Mscrm.DateTimeUtility.parseDate(s);
        if(D)
        {
            oInput.value = Mscrm.DateTimeUtility.formatDate(D);
            oInput.setAttribute("returnValue",FormatUtcDate(D));
            return true
        }
        else
        {
            oInput.select();
            return false
        }
    }
    else
    {
        oInput.setAttribute("returnValue","");
        return true
    }
}
function GetFirstDayInCalendar(D)
{
    D.setDate(1);
    var i = D.getDay() - _iCalStartDay;
    if(i < 0)
        i += 7;
    if(i == 0)
        return D;
    D.setDate(i * -1 + 1);
    D.setHours(0);
    D.setMinutes(0);
    D.setSeconds(0);
    return D
}
function BeginDrag(eventObject,oTD)
{
    if(!_bDragging)
    {
        _oMonthsContainer = oTD.parentNode.parentNode.parentNode.parentNode;
        _sBeginDate = oTD.getAttribute("d");
        _bDragging = true;
        HiliteDays(_sBeginDate,oTD.getAttribute("d"))
    }
}
function EndDrag(eventObject,oTD)
{
    if(_bDragging)
    {
        _sEndDate = oTD.getAttribute("d");
        _bDragging = false;
        if(parseInt(_sBeginDate,10) > parseInt(_sEndDate,10))
        {
            var sTemp = _sBeginDate;
            _sBeginDate = _sEndDate;
            _sEndDate = sTemp
        }
        if(_oCalInput)
        {
            _oCalInput.value = Mscrm.DateTimeUtility.formatDate(new Date(parseInt(_sBeginDate,10)));
            _oCalInput.setAttribute("returnValue",FormatUtcDate(new Date(parseInt(_sBeginDate,10))));
            XUI.Html.DispatchDomEvent(_oCalInput,XUI.Html.CreateDomEvent("change"))
        }
        if(_oEndDate)
        {
            _oEndDate.value = Mscrm.DateTimeUtility.formatDate(new Date(parseInt(_sEndDate,10)));
            _oEndDate.setAttribute("returnValue",FormatUtcDate(new Date(parseInt(_sEndDate,10))));
            XUI.Html.DispatchDomEvent(_oEndDate,XUI.Html.CreateDomEvent("change"))
        }
        _oCalPopUp && 
            _oCalPopUp.hide()
    }
}
function DoDrag(eventObject,oTD)
{
    if(_bDragging)
        if(eventObject)
            if(1 == eventObject.button)
                HiliteDays(_sBeginDate,oTD.getAttribute("d"));
            else
            {
                _bDragging = false;
                _sBeginDate = "";
                HiliteDays(_sBeginDate,_sBeginDate)
            }
        else
            HiliteDays(_sBeginDate,oTD.getAttribute("d"))
}
function HiliteDateRange(sBeginUTC,sEndUTC)
{
    var beginDate = ParseUtcDate(ZeroUtcTime(sBeginUTC)),
        endDate = ParseUtcDate(ZeroUtcTime(sEndUTC));
    _bDragging = false;
    _sBeginDate = beginDate.valueOf();
    _sEndDate = endDate.valueOf();
    if(_oCalPopUp)
        _oMonthsContainer = _oCalPopUp.get_body();
    else
        _oMonthsContainer = _oInlineContainer;
    if(_oCalPopUp)
        DrawPopUpCalendar(ParseUtcDate(ZeroUtcTime(sBeginUTC)),_iNumMonths,_bSelectRange,_sOnClick,_hiliteCode,_dHiliteDay);
    else
        DrawInlineCalendar(ParseUtcDate(ZeroUtcTime(sBeginUTC)),_iNumMonths,_bSelectRange,_sOnClick,_oInlineContainer,_hiliteCode,_dHiliteDay);
    HiliteDays(_sBeginDate,_sEndDate);
    _oCalInput.setAttribute("returnValue",sBeginUTC);
    _oCalInput.value = Mscrm.DateTimeUtility.formatDate(beginDate);
    _oEndDate.setAttribute("returnValue",sEndUTC);
    _oEndDate.value = Mscrm.DateTimeUtility.formatDate(endDate)
}
function HiliteDays(sBeginDate,sEndDate)
{
    var c,
        msec;
    try
    {
        for(var iBeginDate = parseInt(sBeginDate,10),
            iEndDate = parseInt(sEndDate,10),
            tables = _oMonthsContainer.getElementsByTagName("TABLE"),
            i = 0,
            iNumTables = tables.length; i < iNumTables; i++)
        {
            var oTbl = tables[i];
            if(isNullOrEmptyString(oTbl.getAttribute("month")))
                continue;
            for(var j = 0,
                iNumRows = oTbl.rows.length; j < iNumRows; j++)
                for(var k = 0,
                    iNumCells = oTbl.rows[j].cells.length; k < iNumCells; k++)
                {
                    c = oTbl.rows[j].cells[k];
                    if(!isNullOrEmptyString(c.getAttribute("d")))
                    {
                        msec = parseInt(c.getAttribute("d"),10);
                        if(msec >= iBeginDate && msec <= iEndDate || msec <= iBeginDate && msec >= iEndDate)
                            c.className += " ms-crm-MiniCal-Day-Selected";
                        else
                            c.className = c.getAttribute("cls")
                    }
                }
        }
    }
    catch(e)
    {
    }
}
function isMobile()
{
    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Windows Phone/i))
        return true;
    return false
}
var HILITE_NONE = 0,
    HILITE_DAY = 1,
    HILITE_WEEK = 2,
    HILITE_MONTH = 3;
function DrawMonth(D,sOnClick,hiliteCode,hiliteDay,bShowToday,bShowMonthNav,bSelectRange,bPopUp)
{
    var dHiliteStart = null,
        dHiliteEnd = null,
        sDoDragFn = "DoDrag(event, this);",
        sBeginDragFn = "BeginDrag(event, this);",
        sEndDragFn = "EndDrag(event, this);";
    bShowToday = "undefined" == typeof bShowToday ? true : bShowToday;
    bShowMonthNav = "undefined" == typeof bShowMonthNav ? true : bShowMonthNav;
    switch(hiliteCode)
    {
        case HILITE_DAY:
            dHiliteStart = new Date(hiliteDay);
            dHiliteEnd = new Date(hiliteDay);
            break;
        case HILITE_WEEK:
            dHiliteStart = new GetFirstDayOfWeek(hiliteDay);
            dHiliteEnd = new GetLastDayOfWeek(hiliteDay);
            break;
        case HILITE_MONTH:
            dHiliteStart = new GetFirstDayOfMonth(hiliteDay);
            dHiliteEnd = new GetLastDayOfMonth(hiliteDay);
            break;
        default:
            break
    }
    if(dHiliteStart != null)
    {
        dHiliteStart.setMilliseconds(0);
        dHiliteStart.setSeconds(0);
        dHiliteStart.setMinutes(0);
        dHiliteStart.setHours(0)
    }
    if(dHiliteEnd != null)
    {
        dHiliteEnd.setMilliseconds(999);
        dHiliteEnd.setSeconds(59);
        dHiliteEnd.setMinutes(59);
        dHiliteEnd.setHours(23)
    }
    var tmpDate = new Date(D);
    tmpDate.setHours(0,0,0,0);
    var dToday = LocalDateTimeNow();
    dToday.setHours(0,0,0,0);
    var iToday = dToday.valueOf(),
        dInitDate = new Date(tmpDate.valueOf()),
        iInitMonth = dInitDate.getMonth();
    tmpDate = GetFirstDayInCalendar(tmpDate);
    var s = "<table month='1' cellpadding='0' cellspacing='0' class='ms-crm-MiniCal' summary='";
    s += formatString(LOCID_CALENDAR_SUMMARY_MASK,CrmEncodeDecode.CrmHtmlEncode(Mscrm.DateTimeUtility.formatDate(dInitDate,"y")),"");
    s += "'><tr><td class='ms-crm-MiniCal-Header' colspan='";
    if(typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER)
        s += "8";
    else
        s += "7";
    s += "'><table cellpadding='0' cellspacing='0' style='table-layout:fixed; width:100%;'><tr class='ms-crm-MiniCal-Nav'>";
    var iValue = dInitDate.valueOf(),
        tabIndexAttribute = isMobile() ? "" : "tabindex='0'";
    if(tmpDate < _dCalMinDate || bShowMonthNav == false)
        s += "<td id='tdPrv' onclick='" + sOnClick + "' align='center' width='22' style='cursor: default' nav='0' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_PREVIOUS_MONTH) + "'>&nbsp;</td>";
    else
        s += "<td id='tdPrv' onclick='" + sOnClick + "' align='center' width='22' d='" + iValue + "' nav='1' onmouseover='this.className = \"ms-crm-MiniCal-Nav-Button-Hovered\"' onmouseout='this.className = \"\"' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_PREVIOUS_MONTH) + "'><img src=\"/_imgs/ribbon/arrow_left.png\" class='ms-crm-MiniCal'/></td>";
    s += "<td id='tdCaption' onclick='" + sOnClick + "' align='center' d='" + iValue + "' nav='2' onmouseover='this.className = \"ms-crm-MiniCal-Nav-Button-Hovered\"' onmouseout='this.className = \"\"' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);'>";
    s += CrmEncodeDecode.CrmHtmlEncode(Mscrm.DateTimeUtility.formatDate(dInitDate,"y"));
    s += "</td>";
    var dLastDay = new Date(tmpDate.valueOf());
    dLastDay.setDate(dLastDay.getDate() + 42);
    if(dLastDay > _dCalMaxDate || bShowMonthNav == false)
        s += "<td id='tdNxt' onclick='" + sOnClick + "' align='center' width='22' style='cursor: default;' nav='0' " + tabIndexAttribute + "onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_NEXT_MONTH) + "'>&nbsp;</td>";
    else
        s += "<td id='tdNxt' onclick='" + sOnClick + "' align='center' width='22' d='" + iValue + "' nav='1' onmouseover='this.className = \"ms-crm-MiniCal-Nav-Button-Hovered\"' onmouseout='this.className = \"\"' " + tabIndexAttribute + "onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_NEXT_MONTH) + "'><img src=\"/_imgs/ribbon/arrow_right.png\" class='ms-crm-MiniCal'/></td>";
    s += "</tr></table></td></tr>";
    s += "<tr>";
    var i = 0,
        ii = _iCalStartDay;
    if(typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER)
        s += "<td class='ms-crm-MiniCal-DayOfWeek' nav='0'></td>";
    while(i < 7)
    {
        s += "<td class='ms-crm-MiniCal-DayOfWeek' nav='0'>" + _sCalShortestDays[ii] + "</td>";
        i++;
        ii++;
        if(ii > 6)
            ii = 0
    }
    s += "</tr>";
    var iDate = 0,
        sClass = "";
    for(i = 0; i < 6; i++)
    {
        s += '<tr onmouseover=\'var domEventObject = new Sys.UI.DomEvent(event); if(domEventObject.target.getAttribute("noHl")!=1){domEventObject.target.className += " ms-crm-MiniCal-Day-Hovered";}\' onmouseout=\'var domEventObject = new Sys.UI.DomEvent(event); if(domEventObject.target.getAttribute("noHl")!=1){domEventObject.target.className = domEventObject.target.getAttribute("cls");}\'>';
        if(typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER)
        {
            var iWeekNumber = getWeekNumber(GetLastDayOfWeek(tmpDate));
            s += "<td noHl='1' class='ms-crm-MiniCal-Week-Number'>" + iWeekNumber + "</td>"
        }
        for(ii = 0; ii < 7; ii++)
        {
            iDate = tmpDate.getDate();
            iValue = tmpDate.valueOf();
            sClass = "ms-crm-MiniCal-Day";
            if(iValue == iToday)
                sClass += " ms-crm-MiniCal-Day-Today";
            var dayIsInThisMonth = tmpDate.getMonth() == iInitMonth;
            if((hiliteCode == HILITE_DAY || hiliteCode == HILITE_WEEK || hiliteCode == HILITE_MONTH) && tmpDate.getTime() >= dHiliteStart.getTime() && tmpDate.getTime() <= dHiliteEnd.getTime())
                sClass += dayIsInThisMonth ? " ms-crm-MiniCal-Day-Hilited-Current" : " ms-crm-MiniCal-Day-Hilited-NotCurrent";
            else
                if(!dayIsInThisMonth)
                    sClass += " ms-crm-MiniCal-Day-NotCurrent";
            if(tmpDate < _dCalMinDate || tmpDate > _dCalMaxDate)
                s += "<td class='" + sClass + "' cls='" + sClass + "' style='cursor:default' nav='0'>&nbsp;</td>";
            else
            {
                if(bSelectRange)
                {
                    if(_sBeginDate <= iValue && iValue <= _sEndDate)
                        sClass += " ms-crm-MiniCal-Day-Selected";
                    s += "<td onmousedown ='" + sBeginDragFn + "' onmousemove='" + sDoDragFn + "' onmouseup='" + sEndDragFn + "'"
                }
                else
                    s += "<td onclick='" + sOnClick + "'";
                s += " class='" + sClass + "' cls='" + sClass + "' style='cursor:pointer' d='" + iValue + "' onselectstart='return false;' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);'>" + iDate + "</td>"
            }
            tmpDate = incrementDayAcrossTimeZones(tmpDate)
        }
        s += "</tr>"
    }
    if(bShowToday == true)
    {
        var showWeekNumbers = typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER ? USER_SHOW_WEEK_NUMBER : false;
        s += getTodayBarHtml(showWeekNumbers ? "8" : "7",sOnClick)
    }
    s += "</table>";
    return s
}
function incrementDayAcrossTimeZones(oDay)
{
    var oNewDay = new Date(oDay.getFullYear(),oDay.getMonth(),oDay.getDate() + 1);
    if(dayDiff(oDay,oNewDay) < 1)
    {
        oNewDay.setDate(oNewDay.getDate() + 1);
        oNewDay.setHours(1,0,0)
    }
    return oNewDay
}
function decrementDayAcrossTimeZones(oDay)
{
    var oNewDay = new Date(oDay.getFullYear(),oDay.getMonth(),oDay.getDate() - 1);
    if(dayDiff(oNewDay,oDay) >= 2)
        oNewDay = incrementDayAcrossTimeZones(oNewDay);
    return oNewDay
}
function dayDiff(fromDate,toDate)
{
    var td = new Date(toDate.valueOf()),
        fd = new Date(fromDate.valueOf());
    td.setHours(15,0,0,0);
    fd.setHours(12,0,0,0);
    var diffTime = td.getTime() - fd.getTime();
    return diffTime / 8.64e7
}
function elapsedTime(fromDate,toDate)
{
    return toDate - fromDate
}
function newDate(year,month,day,hour,minute,sec)
{
    if(IsNull(hour) || IsNull(minute) || IsNull(sec))
    {
        hour = 0;
        minute = 0;
        sec = 0
    }
    var oDay = new Date(year,month,day,hour,minute,sec),
        oCorrectDay = new Date(year,month,day,12,0,0);
    if(dayDiff(oDay,oCorrectDay) >= 1)
        oDay = incrementDayAcrossTimeZones(oDay);
    else
        if(dayDiff(oDay,oCorrectDay) <= -1)
            oDay = decrementDayAcrossTimeZones(oDay);
    return oDay
}
function getTodayBarHtml(iColSpan,sOnClick)
{
    var dToday = LocalDateTimeNow(),
        s = "<tr class='ms-crm-MiniCal-TodayBar'><td id='tdToday' class='ms-crm-MiniCal-TodayBar' cls='ms-crm-MiniCal-TodayBar' colspan='",
        tabIndexAttribute = isMobile() ? "" : "tabindex='0'";
    s += iColSpan;
    s += "' onclick='" + sOnClick + "' d='" + dToday.valueOf() + "' onmouseover='this.className = \"ms-crm-MiniCal-TodayBar-Hovered\"' onmouseout='this.className = \"ms-crm-MiniCal-TodayBar\"' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);'><div class='ms-crm-MiniCal-TodayBar'>";
    s += formatString(LOCID_TODAY_DATE_FORMAT_MASK,Mscrm.DateTimeUtility.formatDate(dToday));
    return s + "</div></td></tr>"
}
function getWeekNumber(oDate)
{
    var oFirstDayLastYear = getFirstDayOfFirstWeek(oDate.getFullYear() - 1),
        oFirstDayThisYear = getFirstDayOfFirstWeek(oDate.getFullYear()),
        oFirstDayNextYear = getFirstDayOfFirstWeek(oDate.getFullYear() + 1),
        oYearStart;
    if(oDate.valueOf() < oFirstDayThisYear.valueOf())
        oYearStart = oFirstDayLastYear;
    else
        if(oDate.valueOf() < oFirstDayNextYear.valueOf())
            oYearStart = oFirstDayThisYear;
        else
            oYearStart = oFirstDayNextYear;
    var iMSSinceYearStart = oDate.valueOf() - oYearStart.valueOf() + 8.64e7,
        fWeeksSinceYearStart = iMSSinceYearStart / 6.048e8;
    return Math.ceil(fWeeksSinceYearStart)
}
function getFirstDayOfFirstWeek(year)
{
    var oDateInFirstWeek;
    switch(LOCID_FIRST_WEEK_SELECT)
    {
        case "FirstFourDayWeek":
            oDateInFirstWeek = new Date(year,0,4);
            break;
        case "FirstFullWeek":
            oDateInFirstWeek = new Date(year,0,7);
            break;
        case "FirstDay":
        default:
            oDateInFirstWeek = new Date(year,0,1);
            break
    }
    return GetFirstDayOfWeek(oDateInFirstWeek)
}
function DrawYear(D,sOnClick)
{
    var tmpDate = new Date(D);
    tmpDate.setMonth(0);
    tmpDate.setDate(1);
    var s = "<table cellpadding='0' cellspacing='0' class='ms-crm-MiniCal' width='";
    s += typeof USER_SHOW_WEEK_NUMBER != "undefined" && USER_SHOW_WEEK_NUMBER ? iShowWeekCalWidth : iNoWeekCalWidth;
    s += "'>";
    s += "<tr><td class='ms-crm-MiniCal-Header' colspan='3'><table cellpadding='0' cellspacing='0' style='table-layout:fixed;width:100%'><tr class='ms-crm-MiniCal-Nav'>";
    var iValue = tmpDate.valueOf(),
        iYear = tmpDate.getFullYear(),
        tabIndexAttribute = isMobile() ? "" : "tabindex='0'";
    if(iYear <= _dCalMinDate.getFullYear())
        s += "<td id='tdPrv align='center' width='22' style='cursor:default;' nav='0'>&nbsp;</td>";
    else
        s += "<td id='tdPrv' onclick='" + sOnClick + "' align='center' width='22' d='" + iValue + "' nav='2' onmouseover='this.className = \"ms-crm-MiniCal-Nav-Button-Hovered\"' onmouseout='this.className = \"\"'" + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_PREVIOUS_YEAR) + "'><img src=\"/_imgs/ribbon/arrow_left.png\" class='ms-crm-MiniCal'/></td>";
    s += "<td id='tdCaption' align='center' style='cursor:default;' nav='0' " + tabIndexAttribute + ">" + CrmEncodeDecode.CrmHtmlEncode(Mscrm.DateTimeUtility.getCalendarYear(tmpDate)) + "</td>";
    if(iYear >= _dCalMaxDate.getFullYear())
        s += "<td id='tdNxt' align='center' width='22' style='cursor:default;' nav='0'>&nbsp;</td>";
    else
        s += "<td id='tdNxt' onclick='" + sOnClick + "' align='center' width='22' d='" + iValue + "' nav='2' onmouseover='this.className = \"ms-crm-MiniCal-Nav-Button-Hovered\"' onmouseout='this.className = \"\"' " + tabIndexAttribute + " onkeydown='HandleKeysForCal(event);' title ='" + CrmEncodeDecode.CrmHtmlEncode(LOCID_CALENDAR_NEXT_YEAR) + "'><img src=\"/_imgs/ribbon/arrow_right.png\" class='ms-crm-MiniCal'/></td>";
    s += "</tr></table></td></tr>";
    var iMonth = 0;
    for(i = 0; i < 4; i++)
    {
        s += "<tr style='height:" + (31 + i % 2) + "px;' onmouseover='var domEventObject = new Sys.UI.DomEvent(event); domEventObject.target.className += \" ms-crm-MiniCal-Month-Hovered\"' onmouseout='var domEventObject = new Sys.UI.DomEvent(event); domEventObject.target.className = \"ms-crm-MiniCal-Month\"'>";
        for(ii = 0; ii < 3; ii++)
        {
            iMonth = tmpDate.getMonth();
            iValue = tmpDate.valueOf();
            s += "<td class='ms-crm-MiniCal-Month' onclick='" + sOnClick + "' d='" + iValue + "' nav='1' tabindex='0' onkeydown='HandleKeysForCal(event);'>" + CrmEncodeDecode.CrmHtmlAttributeEncode(_sCalMonths[iMonth]) + "</td>";
            tmpDate.setMonth(iMonth + 1)
        }
        s += "</tr>"
    }
    s += getTodayBarHtml(3,sOnClick);
    s += "</table>";
    return s
}
function ReturnDate(o,yearOnly)
{
    var callback = null;
    try
    {
        if(Mscrm.Utilities.isMobileRefresh())
            callback = Mscrm.FormInputControl.DateTimeImage.optimizeForMobile
    }
    catch(e)
    {
    }
    var D = new Date(parseInt(o.getAttribute("d"),10));
    if(o.getAttribute("nav"))
        switch(parseInt(o.getAttribute("nav"),10))
        {
            case 1:
                var m = D.getMonth(),
                    d = D.getDate(),
                    a = [31,28,31,30,31,30,31,31,30,31,30,31];
                if(D.getFullYear() % 4 == 0 && !(D.getFullYear() % 100 == 0 && D.getFullYear() % 400 != 0))
                    a[1] = 29;
                if(o.id == "tdPrv")
                {
                    m--;
                    m > 0 && d > a[m] && 
                        D.setDate(a[m]);
                    D.setMonth(m)
                }
                else
                    if(o.id == "tdNxt")
                    {
                        m++;
                        m < 12 && d > a[m] && 
                            D.setDate(a[m]);
                        D.setMonth(m)
                    }
                if(_oCalPopUp)
                    if(!IsNull(yearOnly) && yearOnly == true)
                    {
                        _oCalInput.value = Mscrm.DateTimeUtility.formatDate(D);
                        _oCalInput.setAttribute("returnValue",FormatUtcDate(D));
                        XUI.Html.DispatchDomEvent(_oCalInput,XUI.Html.CreateDomEvent("change"));
                        _oCalPopUp.hide()
                    }
                    else
                    {
                        DrawPopUpCalendar(D,_iNumMonths,_bSelectRange,_sOnClick,null,null,null,callback);
                        HiliteDays(_sBeginDate,_sEndDate)
                    }
                else
                    if(_oInlineContainer)
                    {
                        DrawInlineCalendar(D,_iNumMonths,_bSelectRange,_sOnClick,_oInlineContainer);
                        HiliteDays(_sBeginDate,_sEndDate)
                    }
                break;
            case 2:
                if(o.id == "tdPrv")
                    D.setYear(D.getFullYear() - 1);
                else
                    o.id == "tdNxt" && 
                        D.setYear(D.getFullYear() + 1);
                if(_oCalPopUp)
                {
                    var temp = document.createElement("div");
                    temp.innerHTML = DrawYear(D,"ReturnDate(this);");
                    var calBody = XUI.Html.DomUtils.GetFirstChild(temp);
                    _oCalPopUp.set_body(calBody);
                    _oCalPopUp.set_width(_iCalWidth);
                    _oCalPopUp.set_height(iCalHeight);
                    _oCalPopUp.show(callback)
                }
                else
                    if(_oInlineContainer)
                        _oInlineContainer.innerHTML = DrawYear(D,_sOnClick);
                break
        }
    else
    {
        _oCalInput.value = Mscrm.DateTimeUtility.formatDate(D);
        _oCalInput.setAttribute("returnValue",FormatUtcDate(D));
        XUI.Html.DispatchDomEvent(_oCalInput,XUI.Html.CreateDomEvent("change"));
        if(_oEndDate)
        {
            _oEndDate.value = _oCalInput.value;
            _oEndDate.setAttribute("returnValue",_oCalInput.getAttribute("returnValue"));
            XUI.Html.DispatchDomEvent(_oEndDate,XUI.Html.CreateDomEvent("change"))
        }
        if(_oCalPopUp)
            _oCalPopUp.hide();
        else
            _oEndDate && _oEndDate.getAttribute("returnValue") && 
                HiliteDateRange(_oCalInput.getAttribute("returnValue"),_oEndDate.getAttribute("returnValue"))
    }
    try
    {
        !Mscrm.Utilities.isMobileRefresh() && 
            _oCalInput.focus()
    }
    catch(e)
    {
    }
}
function ParseDateTime(s)
{
    var dDate,
        timeStr;
    if(1026 == LOCID_LCID || 1091 == LOCID_LCID || 1051 == LOCID_LCID || 1038 == LOCID_LCID || 1050 == LOCID_LCID || 4122 == LOCID_LCID || 2074 == LOCID_LCID || 3098 == LOCID_LCID || 7194 == LOCID_LCID || 6170 == LOCID_LCID || 8218 == LOCID_LCID || 5146 == LOCID_LCID)
    {
        var regEx = new RegExp(LOCID_DATEPATTERN,""),
            datePart = regEx.exec(s);
        if(null == datePart)
            throw formatString(LOCID_ALERT_ENTER_VALID_DATE,USER_DATE_FORMATTED_FORMATSTRING);
        if(datePart[0] == s)
            return Mscrm.DateTimeUtility.parseDate(s);
        else
        {
            dDate = Mscrm.DateTimeUtility.parseDate(datePart[0]);
            timeStr = s.substr(datePart.lastIndex + 1)
        }
    }
    else
        if(1035 == LOCID_LCID || 1044 == LOCID_LCID || 2074 == LOCID_LCID)
        {
            var i = s.indexOf(" ");
            if(i == s.length)
                return Mscrm.DateTimeUtility.parseDate(s);
            dDate = Mscrm.DateTimeUtility.parseDate(s.substr(0,i));
            timeStr = s.substr(i + 1)
        }
        else
        {
            var i = s.lastIndexOf(_sCalSeperator);
            i = s.indexOf(" ",i + _sCalSeperator.length + 1);
            if(i == s.length)
                return Mscrm.DateTimeUtility.parseDate(s);
            dDate = Mscrm.DateTimeUtility.parseDate(s.substr(0,i));
            timeStr = s.substr(i + 1)
        }
    var dTime = parseTime(timeStr);
    dDate.setHours(dTime.getHours());
    dDate.setMinutes(dTime.getMinutes());
    dDate.setSeconds(dTime.getSeconds());
    dDate.setMilliseconds(dTime.getMilliseconds());
    return dDate
}
function ParseUtcDate(s)
{
    if(s.length > 10)
        return new Date(parseInt(s.substr(0,4),10),parseInt(s.substr(5,2),10) - 1,parseInt(s.substr(8,2),10),parseInt(s.substr(11,2),10),parseInt(s.substr(14,2),10),parseInt(s.substr(17,2),10));
    else
        return new Date(parseInt(s.substr(0,4),10),parseInt(s.substr(5,2),10) - 1,parseInt(s.substr(8,2),10))
}
function FormatUtcDate(D)
{
    var dateTimeNoSeconds = new Date(D.getTime());
    dateTimeNoSeconds.setSeconds(0);
    return Mscrm.DateTimeUtility.formatDateTime(dateTimeNoSeconds)
}
function FormatUtcDateTime(dDateTime)
{
    return FormatDateTime(dDateTime) + "Z"
}
function GetFirstDayOfWeek(D)
{
    D.setHours(0,0,0,0);
    var daysToSubtract = (D.getDay() + 7 - _iCalStartDay) % 7,
        dBeginningOfWeek = new Date(D.getTime() - (daysToSubtract * 24 - 2) * 60 * 60 * 1e3);
    dBeginningOfWeek.setHours(0,0,0,0);
    return dBeginningOfWeek
}
function GetLastDayOfWeek(D)
{
    var dFirstDay = GetFirstDayOfWeek(D),
        dLastDay = new Date(dFirstDay.getTime() + (6 * 24 + 2) * 60 * 60 * 1e3);
    dLastDay.setHours(0,0,0,0);
    return dLastDay
}
function GetFirstDayOfMonth(D)
{
    return new Date(D.getFullYear(),D.getMonth(),1)
}
function GetLastDayOfMonth(D)
{
    var dBeginningOfNextMonth = new Date(D.getFullYear(),D.getMonth() + 1,1);
    return new Date(dBeginningOfNextMonth.getTime() - 24 * 60 * 60 * 1e3)
}
function IsValidNumber(n)
{
    if(n == null)
        return false;
    var l = n.length;
    if(l == 0)
        return false;
    var s = 0;
    if(n.charAt(0) == "-")
        s = 1;
    for(var c,
        i = s; i < l; i++)
    {
        c = n.charCodeAt(i);
        if(c < 46 || c > 57)
            return false
    }
    return true
}
function IsStartDateLessThanEndDate(oStartDate,oEndDate,oSourceCtrl,sMsg)
{
    if(!IsNull(oStartDate) && !IsNull(oEndDate) && oStartDate.getTime() > oEndDate.getTime())
    {
        !IsNull(sMsg) && 
            alert(sMsg);
        oSourceCtrl.set_dataValue(CloneDate(oSourceCtrl.get_prevDataValue()));
        return false
    }
    else
    {
        oSourceCtrl.set_prevDataValue(CloneDate(oSourceCtrl.get_dataValue()));
        return true
    }
}
function CloneDate(oDate)
{
    if(!IsNull(oDate))
    {
        var oCloneDate = LocalDateTimeNow();
        oCloneDate.setTime(oDate.getTime());
        return oCloneDate
    }
    else
        return null
}
function ValidateStartDateIsSmallerThanEndDate(sDId,eDId,errorMessage,dCId)
{
    var oStartDate = Xrm.Page.ui.controls.get(sDId).getAttribute().getValue(),
        oEndDate = Xrm.Page.ui.controls.get(eDId).getAttribute().getValue();
    if(!IsNull(oStartDate) && !IsNull(oEndDate))
        if(oEndDate < oStartDate)
        {
            Mscrm.InternalUtilities._Script.alert(errorMessage);
            var oDateToClear = Xrm.Page.ui.controls.get(dCId).getAttribute();
            oDateToClear.setValue(null);
            oDateToClear.fireOnChange()
        }
}
function HideCalendarPopup()
{
    !IsNull(_oCalPopUp) && 
        _oCalPopUp.hide()
}
