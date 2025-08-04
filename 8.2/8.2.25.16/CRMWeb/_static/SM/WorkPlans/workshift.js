
function newWorkShift(parentCalendarId,resourceId,oType)
{
    openStdWin(Mscrm.CrmUri.create("/SM/workplans/edit.aspx?id=&calendarId=" + CrmEncodeDecode.CrmUrlEncode(parentCalendarId) + "&resourceId=" + CrmEncodeDecode.CrmUrlEncode(resourceId) + "&oType=" + CrmEncodeDecode.CrmUrlEncode(oType) + "&selecteddates=" + CrmEncodeDecode.CrmUrlEncode(window.frames["areaMonthlyCalendarFrame"].frames["MonthCalendar"].$get("frmGrid").selectedDates.value) + "&name=Working Hours&mode=New"),"Calendar",550,540)
}
function editWorkShift(parentCalendarId,resourceId)
{
    frames["areaMonthlyCalendarFrame"].frames["MonthCalendar"].$find("crmMonthlyCalendarTopTable").editSelectedEntity()
}
function performGridRefreshAction(resultValue)
{
    resultValue && 
        auto(CalendarRule)
}
function newWorkDay(parentCalendarId,resourceId,oType)
{
    var callbackFunc = Mscrm.Utilities.createCallbackFunctionForXrmDialog(performGridRefreshAction,[this]),
        dialogUrl = Mscrm.CrmUri.create("/SM/workplans/Dialogs/timesheet.aspx?id=&calendarId=" + CrmEncodeDecode.CrmUrlEncode(parentCalendarId) + "&resourceId=" + CrmEncodeDecode.CrmUrlEncode(resourceId) + "&oType=" + CrmEncodeDecode.CrmUrlEncode(oType) + "&selecteddates=" + CrmEncodeDecode.CrmUrlEncode(window.frames["areaMonthlyCalendarFrame"].frames["MonthCalendar"].$get("frmGrid").selectedDates.value));
    inlineDialogHelper(dialogUrl,660,500,null,null,callbackFunc)
}
function newTimeOff(parentCalendarId,resourceId)
{
    var callbackFunc = Mscrm.Utilities.createCallbackFunctionForXrmDialog(performGridRefreshAction,[this]),
        dialogUrl = Mscrm.CrmUri.create("/SM/workplans/Dialogs/timeoff.aspx?id=&calendarId=" + CrmEncodeDecode.CrmUrlEncode(parentCalendarId) + "&resourceId=" + CrmEncodeDecode.CrmUrlEncode(resourceId) + "&oType=" + CrmEncodeDecode.CrmUrlEncode(oType) + "&selecteddates=" + CrmEncodeDecode.CrmUrlEncode(window.frames["areaMonthlyCalendarFrame"].frames["MonthCalendar"].$get("frmGrid").selectedDates.value));
    inlineDialogHelper(dialogUrl,550,420,null,null,callbackFunc)
}
function inlineDialogHelper(oUrl,iX,iY,dialogParameter,initFunction,callbackFunc)
{
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.width = iX;
    dialogOptions.height = iY;
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,dialogParameter,initFunction,callbackFunc)
}
