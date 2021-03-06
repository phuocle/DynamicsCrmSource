
function Refresh(type) {
    var frmGrid = $get("frmGrid");
    (frmGrid.ObjectTypeId.value == type || type == Calendar && frmGrid.ObjectTypeId.value == CalendarRule) &&
        frmGrid.submit()
}

function openCrmEntity(oSpan, sParams) {
    var url = "";
    if (!IsNull(sParams))
        url += sParams;
    openCrmObj(url, buildWinName(), oSpan)
}

function performRefreshCalendarAndGridAction(result) {
    result &&
        window.parent.auto(CalendarRule)
}

function performActionAfterRecurringWorkShiftChange(resultValue, frmGrid, clickDate, rawUrl, iX, iY) {
    if (resultValue) {
        var selectedValue = resultValue.value;
        if (selectedValue == 0) {
            var dialogUrl = Mscrm.CrmUri.create("/SM/workplans/Dialogs/timesheet.aspx?id=&calendarId=" +
                    CrmEncodeDecode.CrmUrlEncode(frmGrid.calendarId.value) +
                    "&resourceId=" +
                    CrmEncodeDecode.CrmUrlEncode(frmGrid.oId.value) +
                    "&oType=" +
                    CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
                    "&selecteddates=" +
                    CrmEncodeDecode.CrmUrlEncode(clickDate)),
                callbackFunc = Mscrm.Utilities
                    .createCallbackFunctionForXrmDialog(performRefreshCalendarAndGridAction, [this]);
            inlineDialogHelper(dialogUrl, iX, iY, null, null, callbackFunc)
        } else if (selectedValue == 1) {
            var copiedRuleId = resultValue.idValue;
            rawUrl.get_query()["id"] = copiedRuleId.length > 0 ? copiedRuleId : "";
            rawUrl.get_query()["calendarId"] = frmGrid.calendarId.value;
            rawUrl.get_query()["resourceId"] = frmGrid.oId.value;
            rawUrl.get_query()["oType"] = frmGrid.oType.value;
            rawUrl.get_query()["selecteddates"] = clickDate;
            rawUrl.get_query()["name"] = "Working Hours";
            rawUrl.get_query()["mode"] = "New";
            openStdWin(rawUrl, "Calendar", iX, iY)
        } else if (selectedValue == 2) {
            rawUrl.get_query()["calendarId"] = frmGrid.calendarId.value;
            rawUrl.get_query()["resourceId"] = frmGrid.oId.value;
            rawUrl.get_query()["oType"] = frmGrid.oType.value;
            rawUrl.get_query()["date"] = clickDate;
            rawUrl.get_query()["mode"] = "Edit";
            openStdWin(rawUrl, "Calendar", iX, iY)
        }
    }
}

function openCrmObj(sUrl, sName, oSpan) {
    var oWindowInfo = GetWindowInformation(oSpan.getAttribute("itemType")),
        rawUrl = oWindowInfo.Url,
        iX = oWindowInfo.Width,
        iY = oWindowInfo.Height;
    if (rawUrl.toString().indexOf("?") != -1) {
        if (sUrl.charAt(0) == "?")
            sUrl = "&" + sUrl.substr(1);
        else if (sUrl.charAt(0) != "&")
            sUrl = "&" + sUrl
    } else if (sUrl.charAt(0) == "&")
        sUrl = "?" + sUrl.substr(1);
    else if (sUrl.charAt(0) != "?")
        sUrl = "?" + sUrl;
    var url = rawUrl.toString() + sUrl,
        clickDate = oSpan.parentNode.parentNode.parentNode.parentNode.getAttribute("d"),
        frmGrid = $get("frmGrid"),
        callbackFunction = null,
        resultValue = null,
        oUrl = null;
    switch (Number(oSpan.getAttribute("itemType"))) {
    case ServiceRestrictionCalendarRule:
        openStdDlg(Mscrm.CrmUri.create(url +
                "&oType=" +
                CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
                "&calendarId=" +
                CrmEncodeDecode.CrmUrlEncode(frmGrid.calendarId.value)),
            top.window,
            iX,
            iY);
        break;
    case TimeOffCalendarRule:
        oUrl = Mscrm.CrmUri.create(url +
            "&calendarId=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.calendarId.value) +
            "&resourceId=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oId.value) +
            "&oType=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
            "&name=Time off&mode=Edit");
        inlineDialogHelper(oUrl, iX, iY, window.self, null, null);
        break;
    case OccurrenceCalendarRule:
    case RecurrenceCalendarRule:
        openStdDlg(Mscrm.CrmUri.create(url +
                "&calendarId=" +
                CrmEncodeDecode.CrmUrlEncode(frmGrid.calendarId.value) +
                "&innerCalendarId=" +
                CrmEncodeDecode.CrmUrlEncode(frmGrid.oId.value) +
                "&oType=" +
                CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
                "&name=Working Hours&mode=Edit"),
            top.window,
            iX,
            iY);
        break;
    case HolidayCalendarRule:
        callbackFunction = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(performRefreshCalendarAndGridAction, [this]);
        oUrl = Mscrm.CrmUri.create(url + "&mode=Edit");
        inlineDialogHelper(oUrl, iX, iY, top.window, null, callbackFunction);
        break;
    case OccurringWorkShift:
        callbackFunction = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(performRefreshCalendarAndGridAction, [this]);
        oUrl = Mscrm.CrmUri.create(url +
            "&calendarId=" +
            CrmEncodeDecode.CrmUrlEncode(oSpan.getAttribute("itemId")) +
            "&resourceId=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oId.value) +
            "&oType=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
            "&selecteddates=" +
            CrmEncodeDecode.CrmUrlEncode(clickDate) +
            "&mode=Edit");
        inlineDialogHelper(oUrl, iX, iY, null, null, callbackFunction);
        break;
    case NotWorkingWorkShift:
    case RecurringWorkShift:
        oUrl = Mscrm.CrmUri.create(url);
        var parameters = [frmGrid, clickDate, oUrl, iX, iY];
        callbackFunction = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(performActionAfterRecurringWorkShiftChange, parameters);
        oUrl = Mscrm.CrmUri.create("/SM/workplans/Dialogs/changeschedule.aspx?id=" +
            CrmEncodeDecode.CrmUrlEncode(oSpan.getAttribute("subId")) +
            "&calendarid=" +
            CrmEncodeDecode.CrmUrlEncode(oSpan.getAttribute("itemId")) +
            "&resourceId=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oId.value) +
            "&oType=" +
            CrmEncodeDecode.CrmUrlEncode(frmGrid.oType.value) +
            "&date=" +
            CrmEncodeDecode.CrmUrlEncode(clickDate));
        inlineDialogHelper(oUrl, iX, iY, null, null, callbackFunction);
        break;
    case Appointment:
        if (!IsNull(oSpan) && !IsNull(oSpan.getAttribute("rtype")) && oSpan.getAttribute("rtype") == "1")
            Mscrm.AppointmentCalHelper.openAppt(oSpan.getAttribute("itemType"), oSpan.getAttribute("itemId"));
        else
            openStdWin(Mscrm.CrmUri.create(url), sName);
        break;
    case None:
        break;
    default:
        openStdWin(Mscrm.CrmUri.create(url), sName)
    }
}

function inlineDialogHelper(oUrl, iX, iY, dialogParameter, initFunction, callbackFunc) {
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.width = iX;
    dialogOptions.height = iY;
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, dialogParameter, initFunction, callbackFunc)
}

function appendQueryString(initialQueryString, keys, values) {
    var queryString = initialQueryString;
    if (IsNull(keys) || IsNull(values) || keys == "")
        return queryString;
    var keysArray = keys.split(","),
        valuesArray = values.split(",");
    if (keysArray.length != valuesArray.length)
        return queryString;
    for (var i = 0; i < keysArray.length; i++) {
        queryString += queryString.length == 0 ? "?" : "&";
        queryString += keysArray[i] + "=" + valuesArray[i]
    }
    return queryString
}

function Delete(sCalendar, sNotSelectedError, iCalendarType) {
    var selectedItems = [],
        itemTypes = [],
        itemIds = [],
        sCustParams = "",
        iObjType = Calendar,
        distinctTypes = false,
        frmGrid = $get("frmGrid");
    if (!IsNull(iCalendarType)) {
        if (frmGrid.selectedItemType.value != "" && frmGrid.selectedItem.value != "") {
            itemTypes[0] = MapVirtualToRealTypes(frmGrid.selectedItemType.value);
            itemIds[0] = frmGrid.selectedItem.value.toUpperCase();
            iObjType = itemTypes[0]
        }
    } else {
        selectedItems = window.parent.getSelectedSubTypes(sCalendar);
        for (var i = 0; i < selectedItems.length; i++) {
            itemTypes[i] = MapVirtualToRealTypes(selectedItems[i][1]);
            if (i > 0)
                if (!distinctTypes && itemTypes[i - 1] != itemTypes[i])
                    distinctTypes = true;
            itemIds[i] = selectedItems[i][0]
        }
        if (distinctTypes)
            iObjType = QueueItem;
        else
            iObjType = itemTypes[0]
    }
    if (itemIds.length == 0) {
        alert(sNotSelectedError);
        return
    }
    sCustParams = "&sSubTypes=" + itemTypes.join(",");
    sCustParams += "&sCalendarId=" + frmGrid.calendarId.value;
    var crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri
        .create("/_grid/cmds/dlg_delete.aspx?iObjType=" + iObjType + "&iTotal=" + itemIds.length + sCustParams),
        itemIds,
        450,
        250,
        null);
    crmDialog.setCallbackInfo("performRefreshCalendarAndGridAction", this, null);
    crmDialog.show()
}

function MapVirtualToRealTypes(iItemType) {
    switch (Number(iItemType)) {
    case HolidayCalendarRule:
    case TimeOffCalendarRule:
        return CalendarRule;
        break;
    case OccurringWorkShift:
    case NotWorkingWorkShift:
    case RecurringWorkShift:
        return Calendar;
        break;
    case None:
        return 0;
        break;
    default:
        return iItemType
    }
}