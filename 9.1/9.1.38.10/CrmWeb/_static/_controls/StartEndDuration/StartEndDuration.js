
var _workdayStart = (new Date).setHours(0,0,0,0),
    _workdayEnd = (new Date).setHours(24,0,0,0),
    _bSupressEndMidnightWarning = false,
    _oldNonAllDayStartTime = null,
    _oldNonAllDayEndTime = null,
    _bSuppressEvents = false,
    _millisecondsPerInterval = 1.8e6,
    _minutesPerInterval = 30,
    _minutesPerDay = 1440,
    _millisecondsPerMinute = 6e4,
    _millisecondsPerDay = 8.64e7,
    _minutesInDuration = 30,
    _scheduledend = null,
    _scheduledstart = null,
    _scheduleddurationminutes = null,
    _isalldayevent = null,
    _scheduledstartCtrl = null,
    _scheduleddurationminutesCtrl = null,
    _scheduledendCtrl = null,
    _isalldayeventCtrl = null,
    _isendtimecleared = false;
function suppressEvents(suppress)
{
    _bSuppressEvents = suppress
}
function decrementDay(oDay)
{
    var oNewDay = new Date(oDay.getFullYear(),oDay.getMonth(),oDay.getDate() - 1);
    if(dayDifference(oNewDay,oDay) >= 2)
        oNewDay = incrementDay(oNewDay);
    return oNewDay
}
function incrementDay(oDay)
{
    var oNewDay = new Date(oDay.getFullYear(),oDay.getMonth(),oDay.getDate() + 1);
    if(dayDifference(oDay,oNewDay) < 1)
    {
        oNewDay.setDate(oNewDay.getDate() + 1);
        oNewDay.setHours(1,0,0)
    }
    return oNewDay
}
function dayDifference(fromDate,toDate)
{
    var td = new Date(toDate.valueOf()),
        fd = new Date(fromDate.valueOf());
    td.setHours(15,0,0,0);
    fd.setHours(12,0,0,0);
    var diffTime = td.getTime() - fd.getTime();
    return diffTime / 8.64e7
}
function getDateTimeNow()
{
    now = new Date(Date());
    now.format("dd/M/yy h:mm tt");
    now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + parseFloat(ORG_TIMEZONE_OFFSET_STRING));
    return now
}
function GetScheduledEndValue()
{
    if(!_bSupressEndMidnightWarning || EndCrossesMidnight())
        return getAttributeValue(_scheduledend);
    else
    {
        var oEndTime = getAttributeValue(_scheduledend);
        if(oEndTime.getHours() == 0 && oEndTime.getMinutes() == 0)
            oEndTime = incrementDay(oEndTime);
        return oEndTime
    }
}
function EndCrossesMidnight()
{
    var oEndTime = getAttributeValue(_scheduledend),
        oStartTime = getAttributeValue(_scheduledstart);
    if(oEndTime.getDate() > oStartTime.getDate())
        return true;
    return false
}
function isClientApiAvailable()
{
    return !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) && !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui)
}
function initDates()
{
    if(isClientApiAvailable())
    {
        _scheduledendCtrl = Xrm.Page.ui.controls.get("scheduledend");
        _scheduledend = Xrm.Page.data.entity.attributes.get("scheduledend");
        _scheduledstartCtrl = Xrm.Page.ui.controls.get("scheduledstart");
        _scheduledstart = Xrm.Page.data.entity.attributes.get("scheduledstart");
        _scheduleddurationminutesCtrl = Xrm.Page.ui.controls.get("scheduleddurationminutes");
        _scheduleddurationminutes = Xrm.Page.data.entity.attributes.get("scheduleddurationminutes");
        _isalldayeventCtrl = Xrm.Page.ui.controls.get("isalldayevent");
        _isalldayevent = Xrm.Page.data.entity.attributes.get("isalldayevent")
    }
    else
    {
        _scheduledend = Mscrm.FormControlInputBehavior.GetBehavior("scheduledend");
        _scheduledendCtrl = _scheduledend;
        _scheduledstart = Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart");
        _scheduledstartCtrl = _scheduledstart;
        _scheduleddurationminutes = Mscrm.FormControlInputBehavior.GetBehavior("scheduleddurationminutes");
        _scheduleddurationminutesCtrl = _scheduleddurationminutes;
        _isalldayevent = $get("isalldayevent",$get("crmForm"));
        _isalldayeventCtrl = _isalldayevent
    }
    if(!IsNull(_scheduleddurationminutes) && !IsNull(getAttributeValue(_scheduleddurationminutes)))
        _minutesInDuration = getAttributeValue(_scheduleddurationminutes);
    if(getAttributeValue(_scheduledstart) == null || getAttributeValue(_scheduledend) == null)
        typeof IS_SCHEDULABLE_ACTIVITY == "undefined" && 
            durationChanged();
    else
        if(!IsNull(_scheduleddurationminutes) && !IsNull(getAttributeValue(_scheduleddurationminutes)))
            endTimeChanged();
        else
            _minutesInDuration = 30;
    isAllDayEvent() && 
        setAllDay();
    attachTimeControlEvents();
    window.skipInitialXMLValue && window.setInitialFormXMLValue && 
        setInitialFormXMLValue()
}
function attachTimeControlEvents()
{
    controlAddOnChange(_scheduledend,endTimeChanged);
    controlAddOnChange(_scheduledstart,startTimeChanged);
    !IsNull(_scheduleddurationminutes) && 
        controlAddOnChange(_scheduleddurationminutes,durationChanged);
    if(!IsNull(_isalldayeventCtrl))
        if(isClientApiAvailable())
            controlAddOnChange(_isalldayevent,setAllDay);
        else
        {
            $addHandler(_isalldayevent,"click",setAllDay);
            $addHandler(_isalldayevent,"keypress",setAllDay)
        }
}
function setAllDay()
{
    suppressEvents(true);
    var oStartTime,
        oEndTime,
        numberOfDays;
    if(!IsNull(_scheduleddurationminutes) && !IsNull(getAttributeValue(_scheduleddurationminutes)))
        _minutesInDuration = getAttributeValue(_scheduleddurationminutes);
    try
    {
        if(isAllDayEvent())
        {
            setShowtime(_scheduledstartCtrl,false);
            setShowtime(_scheduledendCtrl,false);
            SetIsAllDay(_scheduledendCtrl,true);
            _oldNonAllDayStartTime = getAttributeValue(_scheduledstart);
            _oldNonAllDayEndTime = GetScheduledEndValue();
            if(_oldNonAllDayStartTime == null && _oldNonAllDayEndTime == null)
            {
                _oldNonAllDayStartTime = getDateTimeNow();
                _oldNonAllDayEndTime = new Date(_oldNonAllDayStartTime.valueOf() + _minutesInDuration * _millisecondsPerMinute)
            }
            if(_oldNonAllDayStartTime == null)
                _oldNonAllDayStartTime = new Date(_oldNonAllDayEndTime.valueOf() - _minutesInDuration * _millisecondsPerMinute);
            if(_oldNonAllDayEndTime == null)
                _oldNonAllDayEndTime = new Date(_oldNonAllDayStartTime.valueOf() + _minutesInDuration * _millisecondsPerMinute);
            var startTime = new Date(_oldNonAllDayStartTime.valueOf());
            startTime.setHours(0,0,0,0);
            var endTime = new Date(_oldNonAllDayEndTime.valueOf());
            if(endTime.getHours() != 0 || endTime.getMinutes() != 0 || endTime.valueOf() == startTime.valueOf())
                endTime = incrementDay(endTime);
            setAttributeValue(_scheduledstart,startTime);
            setAttributeValue(_scheduledend,endTime)
        }
        else
        {
            if(typeof cType != "undefined" && typeof holidaySchedule != "undefined" && cType == holidaySchedule)
            {
                setShowtime(_scheduledstartCtrl,false);
                setShowtime(_scheduledendCtrl,false)
            }
            else
            {
                setShowtime(_scheduledstartCtrl,true);
                setShowtime(_scheduledendCtrl,true)
            }
            if(getIsAllDay(_scheduledendCtrl))
            {
                SetIsAllDay(_scheduledendCtrl,false);
                oStartTime = new Date(getAttributeValue(_scheduledstart).valueOf());
                oStartTime.setHours(_oldNonAllDayStartTime.getHours(),_oldNonAllDayStartTime.getMinutes(),0,0);
                setAttributeValue(_scheduledstart,oStartTime);
                oEndTime = new Date(getAttributeValue(_scheduledend).valueOf());
                if(_oldNonAllDayEndTime.getHours() != 0 || _oldNonAllDayEndTime.getMinutes() != 0 || _oldNonAllDayEndTime.valueOf() == oStartTime.valueOf())
                    oEndTime = decrementDay(oEndTime);
                oEndTime.setHours(_oldNonAllDayEndTime.getHours(),_oldNonAllDayEndTime.getMinutes(),0,0);
                setAttributeValue(_scheduledend,oEndTime)
            }
            oEndTime < oStartTime && 
                setAttributeValue(_scheduledend,new Date(getAttributeValue(_scheduledstart).valueOf() + _minutesInDuration * _millisecondsPerMinute))
        }
        setDuration(_scheduleddurationminutes,isAllDayEvent())
    }
    catch(e)
    {
    }
    finally
    {
        suppressEvents(false)
    }
}
function setDuration(oDuration,bIsAllDay)
{
    var timeStart = getAttributeValue(_scheduledstart),
        timeEnd = GetScheduledEndValue();
    if(bIsAllDay)
    {
        var minutesPerWorkday;
        if(_workdayStart < _workdayEnd)
        {
            minutesPerWorkday = (_workdayEnd - _workdayStart) / _millisecondsPerMinute;
            minutesPerWorkday = Math.floor(minutesPerWorkday)
        }
        else
        {
            var dayStart = new Date(_workdayStart.getFullYear(),_workdayStart.getMonth(),_workdayStart.getDate(),0,0,0,0),
                dayEnd = new Date(dayStart);
            dayEnd.setDate(dayEnd.getDate() + 1);
            minutesPerWorkday = (_workdayEnd - dayStart + (dayEnd - _workdayStart)) / 60 / 1e3;
            minutesPerWorkday = Math.floor(minutesPerWorkday)
        }
        if(IsNull(timeEnd) || IsNull(timeStart))
            if(!IsNull(oDuration))
                setAttributeValue(oDuration,0);
            else
                _minutesInDuration = 0;
        else
        {
            var tempDuration = Math.round((timeEnd - timeStart) / _millisecondsPerDay * minutesPerWorkday);
            if(timeEnd.getTimezoneOffset() > timeStart.getTimezoneOffset())
                tempDuration = tempDuration - (timeEnd.getTimezoneOffset() - timeStart.getTimezoneOffset());
            if(!IsNull(oDuration))
                setAttributeValue(oDuration,tempDuration);
            else
                _minutesInDuration = tempDuration
        }
    }
    else
        if(IsNull(timeEnd) || IsNull(timeStart))
            if(!IsNull(oDuration))
                setAttributeValue(oDuration,0);
            else
                _minutesInDuration = 0;
        else
        {
            var tempDuration = Math.round((timeEnd - timeStart) / 60 / 1e3 - (timeEnd.getTimezoneOffset() - timeStart.getTimezoneOffset()));
            if(!IsNull(oDuration))
                setAttributeValue(oDuration,tempDuration);
            else
                _minutesInDuration = tempDuration
        }
}
function startTimeChanged(eventObject)
{
    if(isControlDisabled(_scheduledstartCtrl) || isControlDisabled(_scheduledendCtrl) || !IsNull(_scheduleddurationminutesCtrl) && isControlDisabled(_scheduleddurationminutesCtrl))
        return;
    if(_bSuppressEvents)
        return;
    if(getAttributeValue(_scheduledstart) == null || getAttributeValue(_scheduledend) == null)
        return;
    suppressEvents(true);
    try
    {
        setAttributeValue(_scheduledend,endDateAcrossTimeZones());
        setDuration(_scheduleddurationminutes,isAllDayEvent())
    }
    catch(e)
    {
    }
    finally
    {
        suppressEvents(false)
    }
}
function endTimeChanged(eventObject)
{
    if(!IsNull(_scheduledstartCtrl) && isControlDisabled(_scheduledstartCtrl) || !IsNull(_scheduledendCtrl) && isControlDisabled(_scheduledendCtrl) || !IsNull(_scheduleddurationminutesCtrl) && isControlDisabled(_scheduleddurationminutesCtrl))
        return;
    if(_bSuppressEvents)
        return;
    if(getAttributeValue(_scheduledstart) == null || getAttributeValue(_scheduledend) == null)
    {
        if(getAttributeValue(_scheduledend) == null)
            _isendtimecleared = true;
        return
    }
    suppressEvents(true);
    try
    {
        if(GetScheduledEndValue() < getAttributeValue(_scheduledstart) || isAllDayEvent() && GetScheduledEndValue().toString() == getAttributeValue(_scheduledstart).toString())
        {
            if(_isendtimecleared)
                _isendtimecleared = false;
            else
                alert(LOCID_SPECIFY_END_TIME);
            setAttributeValue(_scheduledend,new Date(getAttributeValue(_scheduledstart).valueOf() + _minutesInDuration * _millisecondsPerMinute))
        }
        setDuration(_scheduleddurationminutes,isAllDayEvent())
    }
    catch(e)
    {
    }
    finally
    {
        suppressEvents(false)
    }
}
function durationChanged()
{
    if(isControlDisabled(_scheduledstartCtrl) || isControlDisabled(_scheduledendCtrl) || !IsNull(_scheduleddurationminutesCtrl) && isControlDisabled(_scheduleddurationminutesCtrl))
        return;
    if(_bSuppressEvents)
        return;
    suppressEvents(true);
    if(_scheduleddurationminutes != null)
        if(getAttributeValue(_scheduleddurationminutes) != null)
            _minutesInDuration = getAttributeValue(_scheduleddurationminutes);
        else
            setAttributeValue(_scheduleddurationminutes,_minutesInDuration);
    try
    {
        if(getAttributeValue(_scheduledstart) == null)
            if(getAttributeValue(_scheduledend) == null)
                setStartEndToNow();
            else
                setAttributeValue(_scheduledstart,new Date(GetScheduledEndValue().valueOf() - _minutesInDuration * _millisecondsPerMinute));
        if(_minutesInDuration < _minutesPerDay && isAllDayEvent())
        {
            _oldNonAllDayStartTime = new Date(getAttributeValue(_scheduledstart).valueOf());
            _oldNonAllDayEndTime = new Date(getAttributeValue(_scheduledstart).valueOf() + _minutesInDuration * _millisecondsPerMinute);
            setAllDayEvent(false);
            if(!IsNull(_isalldayevent))
            {
                setAllDay();
                suppressEvents(true)
            }
        }
        setAttributeValue(_scheduledend,endDateAcrossTimeZones())
    }
    catch(e)
    {
    }
    finally
    {
        suppressEvents(false)
    }
}
function endDateAcrossTimeZones()
{
    if(!IsNull(_scheduleddurationminutes) && !IsNull(getAttributeValue(_scheduleddurationminutes)))
        _minutesInDuration = getAttributeValue(_scheduleddurationminutes);
    var oStartDate = new Date(getAttributeValue(_scheduledstart).valueOf()),
        oEndDate = new Date(getAttributeValue(_scheduledstart).valueOf() + _minutesInDuration * _millisecondsPerMinute),
        daysInDuration = Math.round(_minutesInDuration / _minutesPerDay);
    if(isAllDayEvent())
    {
        if(dayDifference(oStartDate,oEndDate) < daysInDuration)
            oEndDate = incrementDay(oEndDate);
        var timeDiff = oEndDate.valueOf() - oStartDate.valueOf();
        if(timeDiff < _millisecondsPerDay)
            oEndDate = new Date(oEndDate.valueOf() + timeDiff)
    }
    return oEndDate
}
function setStartEndToNow()
{
    if(!IsNull(_scheduleddurationminutes) && !IsNull(getAttributeValue(_scheduleddurationminutes)))
        _minutesInDuration = getAttributeValue(_scheduleddurationminutes);
    var now = getDateTimeNow().valueOf(),
        startTime = now + (_millisecondsPerInterval - now % _millisecondsPerInterval);
    setAttributeValue(_scheduledstart,new Date(startTime));
    setAttributeValue(_scheduledend,new Date(getAttributeValue(_scheduledstart).valueOf() + _minutesInDuration * _millisecondsPerMinute))
}
function isAllDayEvent()
{
    if(!IsNull(_isalldayevent))
        if(isClientApiAvailable())
            return getAttributeValue(_isalldayevent);
        else
            return _isalldayevent.checked;
    else
        return false
}
function setAllDayEvent(bIsAllDay)
{
    if(!IsNull(_isalldayevent))
        if(isClientApiAvailable())
        {
            var alldayValue = bIsAllDay ? "1" : "0";
            setAttributeValue(_isalldayevent,alldayValue)
        }
        else
            _isalldayevent.checked = bIsAllDay
}
function getAttributeValue(attributeName)
{
    try
    {
        if(isClientApiAvailable())
            return attributeName.getValue()
    }
    catch(exception)
    {
    }
    return attributeName.get_dataValue()
}
function setAttributeValue(attributeName,value)
{
    if(isClientApiAvailable())
    {
        attributeName.setValue(value);
        attributeName.fireOnChange()
    }
    else
        attributeName.set_dataValue(value)
}
function controlAddOnChange(control,method)
{
    if(isClientApiAvailable())
        control.addOnChange(method);
    else
        control.add_change(method)
}
function isControlDisabled(control)
{
    if(isClientApiAvailable())
        return control.getDisabled();
    else
        return control.get_disabled()
}
function setShowtime(control,value)
{
    if(isClientApiAvailable())
        control.setShowTime(value);
    else
        control.set_showTime(value)
}
function SetIsAllDay(control,value)
{
    if(isClientApiAvailable())
        control.setIsAllDay(value);
    else
        control.set_allDayDisplay(value)
}
function getIsAllDay(control)
{
    if(isClientApiAvailable())
        return control.getIsAllDay();
    else
        return control.get_allDayDisplay()
}
