
var _oServiceRetrieveCommand,
    _oAppointmentRequest,
    _iAnchorOffset = 0,
    _searchTimeAfter = null,
    _searchSpecificDate = null,
    _searchDateAfter = null,
    _searchDateBefore = null,
    _searchSpecificTime = null,
    _searchTimeBefore = null,
    _gridTopPositionCollapsed = "300px",
    _gridTopPositionExpanded = "400px",
    serviceActivityContainer,
    crmForm,
    oValueSpan;
function SchedulingDialogJsWindowOnLoad()
{
    _searchTimeAfter = Mscrm.FormControlInputBehavior.GetBehavior("SearchTimeAfter");
    _searchSpecificDate = Mscrm.FormControlInputBehavior.GetBehavior("SearchSpecificDate");
    _searchDateAfter = Mscrm.FormControlInputBehavior.GetBehavior("SearchDateAfter");
    _searchDateBefore = Mscrm.FormControlInputBehavior.GetBehavior("SearchDateBefore");
    _searchSpecificTime = Mscrm.FormControlInputBehavior.GetBehavior("SearchSpecificTime");
    _searchTimeBefore = Mscrm.FormControlInputBehavior.GetBehavior("SearchTimeBefore");
    serviceActivityContainer = $get("serviceActivityContainer");
    crmForm = $get("crmForm");
    _oServiceRetrieveCommand = new RemoteCommand("Service","Retrieve");
    PopulateForm(getDialogArguments());
    var crmGrid = $find("crmGrid");
    crmGrid.add_onRefresh(GridRefreshed);
    crmGrid.add_onChangePage(PrepareForPageChange);
    crmGrid.add_onSelectionChange(GridSelectionChanged);
    $addHandler(crmForm.UseDefaultDuration,"click",ResetToDefaultDuration);
    var crmFormCtrl = $find("crmForm");
    crmFormCtrl.add_onSave(save);
    crmGrid.add_onBeforeFormLoad(HandleGridItemSelected);
    crmGrid.SetParameter("disableDblClick","0");
    crmFormCtrl.detachCloseAlert();
    var oServiceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
    oServiceid.add_onafterselect(ServiceLookupChanged);
    _bAutoSearch && !IsNull(oServiceid.get_dataValue()) && 
        Search();
    setFocus()
}
function setFocus()
{
    document.getElementById("customers").focus()
}
Sys.Application.add_load(SchedulingDialogJsWindowOnLoad);
function HandleGridItemSelected(sender,args)
{
    SelectProposal();
    args.breakEvent = true
}
function PopulateForm(oActivityInfo)
{
    if(IsNull(oActivityInfo))
        return;
    var i,
        item,
        aoItems,
        oLookupItem;
    if(!IsNull(oActivityInfo.Customers))
    {
        aoItems = [];
        for(i = 0; i < oActivityInfo.Customers.length; i++)
        {
            item = oActivityInfo.Customers[i];
            oLookupItem = new LookupControlItem(item.EntityId,item.ObjectTypeCode,item.DisplayName);
            aoItems.push(oLookupItem)
        }
        var customers = Mscrm.FormControlInputBehavior.GetBehavior("customers");
        customers.set_dataValue(aoItems)
    }
    if(!IsNull(oActivityInfo.Resources))
    {
        aoItems = [];
        for(i = 0; i < oActivityInfo.Resources.length; i++)
        {
            item = oActivityInfo.Resources[i];
            oLookupItem = new LookupControlItem(item.EntityId,item.ObjectTypeCode,item.DisplayName);
            oLookupItem.resourceSpecId = item.ResourceSpecId;
            oLookupItem.effort = item.EffortRequired;
            aoItems.push(oLookupItem)
        }
        var resources = Mscrm.FormControlInputBehavior.GetBehavior("resources");
        resources.set_dataValue(aoItems)
    }
    if(!IsNull(oActivityInfo.Service))
    {
        aoItems = [];
        item = oActivityInfo.Service;
        oLookupItem = new LookupControlItem(item.EntityId,item.ObjectTypeCode,item.DisplayName);
        aoItems.push(oLookupItem);
        var serviceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
        serviceid.set_dataValue(aoItems);
        var oEvent = {};
        oEvent.DoNotClearSpecIds = true;
        ServiceLookupChanged(oEvent)
    }
    if(!IsNull(oActivityInfo.Site))
    {
        aoItems = [];
        item = oActivityInfo.Site;
        oLookupItem = new LookupControlItem(item.EntityId,item.ObjectTypeCode,item.DisplayName);
        aoItems.push(oLookupItem);
        var siteid = Mscrm.FormControlInputBehavior.GetBehavior("siteid");
        siteid.set_dataValue(aoItems)
    }
}
function SelectProposal()
{
    var proposalInfo = BuildProposalInfo();
    Mscrm.Utilities.setReturnValue(proposalInfo);
    if(proposalInfo == null)
    {
        alert(LOCID_SCHEDDLG_SELECT_PROPOSAL);
        return
    }
    if(!isOutlookHostedWindow())
    {
        $find("DayOfWeek").dispose();
        $find("RelatedInformationPane").dispose()
    }
    closeWindow()
}
function cancel()
{
    Mscrm.Utilities.setReturnValue(null);
    if(!isOutlookHostedWindow())
    {
        $find("DayOfWeek").dispose();
        $find("RelatedInformationPane").dispose()
    }
    closeWindow()
}
function save(sender,args)
{
    args.preventDefault();
    return
}
function getoid(node)
{
    node = node.firstElementChild;
    while(node && IsNull(oValueSpan))
        if(!IsNull(node.attributes) && node.getAttribute("oid"))
        {
            oValueSpan = node;
            return
        }
        else
        {
            getoid(node);
            node = node.nextSibling
        }
}
function resetValueSpan()
{
    oValueSpan = null
}
function BuildProposalInfo()
{
    var crmGrid = $find("crmGrid"),
        selectedRecords = crmGrid.get_innerGrid().get_selectedRecords();
    if(selectedRecords.length === 0)
        return null;
    for(var dStart,
        dEnd,
        oService,
        oSite,
        aoCustomers = [],
        aoResources = [],
        gridBodyTable = crmGrid.get_innerGrid().get_element(),
        iSelectedIndex = selectedRecords[0][2],
        oRow = crmGrid.get_innerGrid().get_dataTableBody().rows[iSelectedIndex],
        iLen = oRow.cells.length,
        oCellData,
        sProperty,
        i = 0; i < iLen; i++)
    {
        oCellData = XUI.Html.DomUtils.GetFirstChild(oRow.cells[i]);
        sProperty = gridBodyTable.getElementsByTagName("COL")[i].getAttribute("name");
        switch(sProperty)
        {
            case "Service":
                resetValueSpan();
                getoid(XUI.Html.DomUtils.GetFirstChild(oCellData));
                oService = new ServiceObject(XUI.Html.GetText(oValueSpan),oValueSpan.getAttribute("oid"));
                break;
            case "Site":
                if(!IsNull(XUI.Html.DomUtils.GetFirstChild(oCellData)))
                {
                    resetValueSpan();
                    getoid(XUI.Html.DomUtils.GetFirstChild(oCellData));
                    if(oValueSpan && !IsNull(oValueSpan.getAttribute("oid")))
                        oSite = new SiteObject(XUI.Html.GetText(oValueSpan),oValueSpan.getAttribute("oid"))
                }
                break;
            case "Start":
                dStart = ParseDateTime(XUI.Html.GetText(oCellData));
                break;
            case "End":
                dEnd = ParseDateTime(XUI.Html.GetText(oCellData));
                break;
            case "ProposalParties":
                XUI.Html.DomUtils.ForEachChild(oCellData,function(element)
                {
                    if(IsNull(element) || IsNull(XUI.Html.DomUtils.GetFirstChild(element)) || XUI.Html.DomUtils.GetFirstChild(element).tagName != "SPAN")
                        return false;
                    oValueSpan = XUI.Html.DomUtils.GetFirstChild(element);
                    aoResources.push(new AttendeeObject(Trim(XUI.Html.GetText(oValueSpan)),oValueSpan.getAttribute("oid"),oValueSpan.getAttribute("otype"),oValueSpan.getAttribute("resourcespecid"),oValueSpan.getAttribute("effort")))
                });
                break
        }
    }
    var oAttendeeLookup = Mscrm.FormControlInputBehavior.GetBehavior("customers"),
        aoItems = oAttendeeLookup.Items();
    for(i = 0; i < aoItems.length; i++)
        aoCustomers.push(new AttendeeObject(aoItems[i].name,aoItems[i].id,aoItems[i].type));
    return new ActivityInfo(aoCustomers,aoResources,oService,oSite,dStart.toString(),dEnd.toString())
}
function StartTimeChanged()
{
    var SearchStartTime = document.getElementById("SearchStartTime"),
        rangeOfTimesArea = $get("rangeOfTimesArea"),
        specificTimeArea = $get("specificTimeArea");
    switch(SearchStartTime.value)
    {
        case _sSpecificTime:
            rangeOfTimesArea.style.display = "none";
            specificTimeArea.style.display = "inline";
            break;
        case _sRangeOfTimes:
            rangeOfTimesArea.style.display = "inline";
            specificTimeArea.style.display = "none";
            break;
        case _sAnyTime:
        case _sMorning:
        case _sAfternoon:
        case _sEvening:
            rangeOfTimesArea.style.display = "none";
            specificTimeArea.style.display = "none";
            break;
        default:
            break
    }
}
function SearchDayOfWeekChanged(dayOfWeek)
{
    var SearchStartDate = document.getElementById("SearchStartDate"),
        rangeOfDatesArea = document.getElementById("rangeOfDatesArea"),
        rangeOfDatesForDaysArea = document.getElementById("rangeOfDatesForDaysArea"),
        specificDateArea = document.getElementById("specificDateArea"),
        gridContainer = document.getElementById("gridContainer");
    SearchStartDate.value = _sRangeOfDates;
    rangeOfDatesForDaysArea.style.display = "inline";
    rangeOfDatesArea.style.display = "";
    specificDateArea.style.display = "none";
    SetSearchDayOfWeek(dayOfWeek);
    gridContainer.style.top = serviceActivityContainer.style.height = _gridTopPositionExpanded
}
function StartDateChanged()
{
    var SearchStartDate = document.getElementById("SearchStartDate"),
        rangeOfDatesArea = document.getElementById("rangeOfDatesArea"),
        rangeOfDatesForDaysArea = document.getElementById("rangeOfDatesForDaysArea"),
        specificDateArea = document.getElementById("specificDateArea"),
        gridContainer = document.getElementById("gridContainer");
    switch(SearchStartDate.value)
    {
        case _sSpecificDate:
            rangeOfDatesForDaysArea.style.display = "none";
            rangeOfDatesArea.style.display = "none";
            specificDateArea.style.display = "inline";
            gridContainer.style.top = serviceActivityContainer.style.height = _gridTopPositionCollapsed;
            break;
        case _sRangeOfDates:
            rangeOfDatesForDaysArea.style.display = "inline";
            rangeOfDatesArea.style.display = "";
            specificDateArea.style.display = "none";
            gridContainer.style.top = serviceActivityContainer.style.height = _gridTopPositionExpanded;
            break;
        case _sASAP:
        case _sToday:
        case _sTomorrow:
        case _sThisWeek:
        case _sNextWeek:
        case _sNextMonth:
            rangeOfDatesForDaysArea.style.display = "none";
            rangeOfDatesArea.style.display = "none";
            specificDateArea.style.display = "none";
            gridContainer.style.top = serviceActivityContainer.style.height = _gridTopPositionCollapsed;
            break;
        default:
            break
    }
}
function SetSearchDayOfWeek(dayOfWeek)
{
    for(var oCheckBoxAll = crmForm.DayOfWeekAll,
        oCheckBox = oCheckBoxAll,
        i = 0; i < 7; i++)
        if(document.getElementById("DayOfWeek" + i).value == dayOfWeek)
        {
            if(oCheckBoxAll.checked)
            {
                oCheckBoxAll.checked = false;
                UpdateDaysCheckboxes()
            }
            oCheckBox = document.getElementById("DayOfWeek" + i);
            oCheckBox.checked = true;
            break
        }
    var SearchStartDate = document.getElementById("SearchStartDate"),
        rangeOfDatesForDaysArea = document.getElementById("rangeOfDatesForDaysArea"),
        rangeOfDatesArea = document.getElementById("rangeOfDatesArea"),
        specificDateArea = document.getElementById("specificDateArea"),
        gridContainer = document.getElementById("gridContainer");
    SearchStartDate.value = "RangeOfDates";
    rangeOfDatesForDaysArea.style.display = "inline";
    rangeOfDatesArea.style.display = "";
    specificDateArea.style.display = "none";
    gridContainer.style.top = serviceActivityContainer.style.height = _gridTopPositionCollapsed
}
function UpdateDaysCheckboxes()
{
    for(var oCheckBox,
        bAllDaysChecked = crmForm.DayOfWeekAll.checked,
        i = 0; i < 7; i++)
    {
        oCheckBox = document.getElementById("DayOfWeek" + i);
        oCheckBox.checked = bAllDaysChecked;
        oCheckBox.disabled = bAllDaysChecked
    }
}
function ShowHideSearchDuration()
{
    var SearchDurationMinutes = Mscrm.FormControlInputBehavior.GetBehavior("SearchDurationMinutes");
    SearchDurationMinutes.set_disabled(!SearchDurationMinutes.get_disabled())
}
function BuildAppointmentRequest(dStart,dEnd,sDirection)
{
    if(sDirection != "Backward" && sDirection != "Forward")
        sDirection = "Forward";
    var searchStart = GetStartDate(),
        searchEnd = GetEndDate(),
        iStartMinutes = GetStartMinutes(),
        SearchDurationMinutes = Mscrm.FormControlInputBehavior.GetBehavior("SearchDurationMinutes"),
        iDurationMinutes = SearchDurationMinutes.get_dataValue(),
        sServiceId = "",
        serviceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid"),
        oServiceLookupItems = serviceid.Items();
    if(oServiceLookupItems.length > 0)
        sServiceId = oServiceLookupItems[0].id;
    if(dStart == null)
        dStart = searchStart;
    if(dEnd == null)
        dEnd = searchEnd;
    var sSiteId = "",
        siteid = Mscrm.FormControlInputBehavior.GetBehavior("siteid"),
        oSiteLookupItems = siteid.Items();
    if(oSiteLookupItems.length > 0)
        sSiteId = oSiteLookupItems[0].id;
    var sSearchXml = "<AppointmentRequest>";
    if(sServiceId != "")
        sSearchXml += FormatNode("ServiceId",sServiceId,true);
    if(sSiteId != "")
        sSearchXml += FormatNode("Sites",FormatNode("guid",sSiteId),true,true);
    sSearchXml += FormatNode("Direction",sDirection,true);
    sSearchXml += FormatNode("NumberOfResults",_iRecordsPerPage,true);
    sSearchXml += FormatNode("SearchWindowStart",FormatDateTime(dStart),true);
    sSearchXml += FormatNode("SearchWindowEnd",FormatDateTime(dEnd),true);
    sSearchXml += FormatNode("AnchorOffset",_iAnchorOffset,true);
    sSearchXml += FormatNode("UserTimeZoneCode",_sUserTimeZoneCode,true);
    if(HasRecurrence())
    {
        sSearchXml += FormatNode("SearchRecurrenceRule",GetRecurrenceRule(),true);
        var recurrenceStart = GetDate(searchStart);
        recurrenceStart.setHours(Math.floor(iStartMinutes / 60));
        recurrenceStart.setMinutes(iStartMinutes % 60);
        sSearchXml += FormatNode("SearchRecurrenceStart",FormatDateTime(recurrenceStart),true);
        sSearchXml += FormatNode("RecurrenceDuration",GetRecurrenceDuration(GetDate(searchStart),searchEnd),true);
        sSearchXml += FormatNode("RecurrenceTimeZoneCode",_sUserTimeZoneCode,true)
    }
    if(!crmForm.UseDefaultDuration.checked)
        sSearchXml += FormatNode("Duration",iDurationMinutes,true);
    sSearchXml += BuildAppointmentsToIgnore();
    sSearchXml += BuildRequiredResources();
    sSearchXml += "</AppointmentRequest>";
    return sSearchXml
}
function FormatNode(tag,value,ns,isValXml)
{
    tag = CrmEncodeDecode.CrmXmlEncode(tag);
    if(IsNull(isValXml) || !isValXml)
        value = CrmEncodeDecode.CrmXmlEncode(value);
    var sNode = "<" + tag;
    if(!IsNull(ns))
        sNode += ' xmlns="' + _sSchedulingNamespace + '"';
    return sNode + ">" + value + "</" + tag + ">"
}
function BuildAppointmentsToIgnore()
{
    var sXml = "",
        oResourceLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources"),
        aoItems = oResourceLookup.Items();
    if(_sActivityId != "" && aoItems.length > 0)
    {
        var oResource;
        for(i = 0; i < aoItems.length; i++)
        {
            oResource = aoItems[i];
            sXml += "<AppointmentsToIgnore>";
            sXml += FormatNode("ResourceId",oResource.id);
            sXml += "<Appointments>";
            sXml += FormatNode("guid",_sActivityId);
            sXml += "</Appointments>";
            sXml += "</AppointmentsToIgnore>"
        }
        sXml = FormatNode("AppointmentsToIgnore",sXml,true,true)
    }
    return sXml
}
function BuildRequiredResources()
{
    var sXml = "",
        oResourceLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources"),
        aoItems = oResourceLookup.Items();
    if(aoItems.length > 0)
    {
        var oResource;
        for(i = 0; i < aoItems.length; i++)
        {
            oResource = aoItems[i];
            sXml += "<RequiredResource>";
            sXml += FormatNode("ResourceId",oResource.id);
            if(!IsNull(oResource.resourceSpecId))
                sXml += FormatNode("ResourceSpecId",oResource.resourceSpecId);
            sXml += "</RequiredResource>"
        }
        sXml = FormatNode("RequiredResources",sXml,true,true)
    }
    return sXml
}
function GetRecurrenceRule()
{
    var recurrenceString = "",
        SearchStartDate = document.getElementById("SearchStartDate");
    if(SearchStartDate.value == _sRangeOfDates)
        if(!crmForm.DayOfWeekAll.checked)
            for(var daysOfWeek = ["SU","MO","TU","WE","TH","FR","SA"],
                value,
                i = 0; i < 7; i++)
                if(document.getElementById("DayOfWeek" + i).checked)
                {
                    value = parseInt(document.getElementById("DayOfWeek" + i).value,10);
                    if(!isNaN(value) && value >= 0 && value < daysOfWeek.length)
                    {
                        if(recurrenceString.length > 0)
                            recurrenceString += ",";
                        recurrenceString += daysOfWeek[value]
                    }
                }
    recurrenceString = recurrenceString == "" ? "FREQ=DAILY" : "FREQ=WEEKLY;BYDAY=" + recurrenceString;
    return recurrenceString + ";INTERVAL=1"
}
function GetDate(d)
{
    return new Date(d.getFullYear(),d.getMonth(),d.getDate())
}
function AddDays(d,addDays)
{
    return new Date(d.getFullYear(),d.getMonth(),d.getDate() + addDays)
}
function GetEndDate()
{
    var today = LocalDateTimeNow(),
        endDate,
        SearchStartDate = document.getElementById("SearchStartDate");
    switch(SearchStartDate.value)
    {
        case _sASAP:
            return new Date(today.getFullYear() + 1,today.getMonth(),today.getDate());
        case _sSpecificDate:
            endDate = _searchSpecificDate.get_dataValue();
            return AddDays(endDate,1);
        case _sRangeOfDates:
            if(crmForm.DateRangeBeforeCheckBox.checked)
            {
                endDate = _searchDateBefore.get_dataValue();
                return AddDays(endDate,1)
            }
            else
                return new Date(today.getFullYear() + 1,today.getMonth(),today.getDate());
            break;
        case _sToday:
            return AddDays(LocalDateTimeNow(),1);
        case _sTomorrow:
            return AddDays(LocalDateTimeNow(),2);
        case _sThisWeek:
            endDate = GetLastDayOfWeek(LocalDateTimeNow());
            return AddDays(endDate,1);
        case _sNextWeek:
            var nextWeek = AddDays(LocalDateTimeNow(),7);
            endDate = GetLastDayOfWeek(nextWeek);
            return AddDays(endDate,1);
        case _sNextMonth:
            return new Date(today.getFullYear(),today.getMonth() + 2,1);
        default:
            return new Date(today.getFullYear() + 1,today.getMonth(),today.getDate())
    }
}
function GetStartDate()
{
    var dValue,
        dNow = LocalDateTimeNow(),
        SearchStartDate = document.getElementById("SearchStartDate");
    switch(SearchStartDate.value)
    {
        case _sASAP:
        case _sToday:
        case _sThisWeek:
            return dNow;
        case _sSpecificDate:
            dValue = _searchSpecificDate.get_dataValue();
            return dValue < dNow ? dNow : dValue;
        case _sRangeOfDates:
            dValue = crmForm.DateRangeAfterCheckBox.checked ? _searchDateAfter.get_dataValue() : dNow;
            return dValue < dNow ? dNow : dValue;
        case _sTomorrow:
            return AddDays(dNow,1);
        case _sNextWeek:
            var nextWeek = AddDays(dNow,7);
            return GetFirstDayOfWeek(nextWeek);
        case _sNextMonth:
            return new Date(dNow.getFullYear(),dNow.getMonth() + 1,1);
        default:
            return dNow
    }
}
function GetRecurrenceDuration(searchStart,searchEnd)
{
    var iDurationMinutes = GetEndMinutes() - GetStartMinutes();
    if(iDurationMinutes <= 0)
        iDurationMinutes += 1440;
    return iDurationMinutes
}
function GetDtStart(d)
{
    var minutes = GetStartMinutes();
    return new Date(d.getFullYear(),d.getMonth(),d.getDate(),Math.floor(minutes / 60),minutes % 60,0)
}
function GetStartMinutes()
{
    var result = 0,
        value,
        SearchStartTime = document.getElementById("SearchStartTime");
    switch(SearchStartTime.value)
    {
        case _sMorning:
            break;
        case _sAfternoon:
            result = 12 * 60;
            break;
        case _sEvening:
            result = 16 * 60;
            break;
        case _sSpecificTime:
            value = _searchSpecificTime.get_dataValue();
            result = value.getHours() * 60 + value.getMinutes();
            break;
        case _sRangeOfTimes:
            value = _searchTimeAfter.get_dataValue();
            result = value.getHours() * 60 + value.getMinutes();
            break
    }
    return result
}
function GetEndMinutes()
{
    var result = 24 * 60,
        value,
        SearchStartTime = document.getElementById("SearchStartTime");
    switch(SearchStartTime.value)
    {
        case _sMorning:
            result = 12 * 60;
            break;
        case _sAfternoon:
            result = 16 * 60;
            break;
        case _sEvening:
            break;
        case _sSpecificTime:
            value = _searchSpecificTime.get_dataValue();
            result = value.getHours() * 60 + value.getMinutes();
            result++;
            break;
        case _sRangeOfTimes:
            value = _searchTimeBefore.get_dataValue();
            result = value.getHours() * 60 + value.getMinutes();
            result++;
            break
    }
    return result
}
function HasRecurrence()
{
    var SearchStartTime = document.getElementById("SearchStartTime");
    if(SearchStartTime.value != _sAnyTime)
        return true;
    return HasDayOfWeekRecurrence()
}
function HasDayOfWeekRecurrence()
{
    var SearchStartDate = document.getElementById("SearchStartDate");
    if(SearchStartDate.value == _sRangeOfDates)
        if(!crmForm.DayOfWeekAll.checked)
            for(var i = 0; i < 7; i++)
                if(document.getElementById("DayOfWeek" + i).checked)
                    return true;
    return false
}
function PrepareForPageChange(sender,args)
{
    var sDirection,
        dStart = null,
        dEnd = null,
        crmGrid = $find("crmGrid");
    if(args.newPageNumber == null || args.newPageNumber == 1)
    {
        sDirection = "Forward";
        crmGrid.SetParameter("SearchWindowStart","");
        crmGrid.SetParameter("SearchWindowEnd","")
    }
    else
    {
        var iRecordNumber;
        if(args.newPageNumber > args.currentPageNumber)
        {
            iRecordNumber = _iRecordsPerPage - 1;
            sDirection = "Forward"
        }
        else
        {
            iRecordNumber = 0;
            sDirection = "Backward"
        }
        for(var gridBodyTable = crmGrid.get_innerGrid().get_element(),
            oRow = crmGrid.get_innerGrid().get_dataTableBody().rows[iRecordNumber],
            iLen = oRow.cells.length,
            oCellData,
            sProperty,
            i = 0; i < iLen; i++)
        {
            oCellData = XUI.Html.DomUtils.GetFirstChild(oRow.cells[i]);
            sProperty = gridBodyTable.getElementsByTagName("COL")[i].getAttribute("name");
            if(sProperty == "Start")
            {
                if(sDirection == "Backward")
                {
                    dEnd = ParseDateTime(XUI.Html.GetText(oCellData));
                    dEnd.setSeconds(dEnd.getSeconds() - 1);
                    crmGrid.SetParameter("SearchWindowStart","");
                    crmGrid.SetParameter("SearchWindowEnd",FormatDateTime(dEnd))
                }
                if(sDirection == "Forward")
                {
                    dStart = ParseDateTime(XUI.Html.GetText(oCellData));
                    dStart.setSeconds(dStart.getSeconds() + 1);
                    crmGrid.SetParameter("SearchWindowStart",FormatDateTime(dStart));
                    crmGrid.SetParameter("SearchWindowEnd","")
                }
                break
            }
        }
    }
    if(_oAppointmentRequest == null)
        _oAppointmentRequest = BuildAppointmentRequest(dStart,dEnd,sDirection);
    crmGrid.SetParameter("AppointmentRequest",_oAppointmentRequest)
}
function Search()
{
    _oAppointmentRequest = null;
    var SearchButton = document.getElementById("SearchButton"),
        CancelSearchButton = document.getElementById("CancelSearchButton");
    SearchButton.style.display = "none";
    CancelSearchButton.style.display = "inline";
    if(ValidateSearchCriteria())
    {
        var serviceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid"),
            oServiceLookupItems = serviceid.Items(),
            sServiceName = "";
        if(oServiceLookupItems.length > 0)
            sServiceName = oServiceLookupItems[0].name;
        var crmGrid = $find("crmGrid");
        crmGrid.SetParameter("ServiceName",sServiceName);
        crmGrid.set_pageNumber(1)
    }
    else
        GridRefreshed()
}
function GridRefreshed()
{
    var CancelSearchButton = document.getElementById("CancelSearchButton"),
        SearchButton = document.getElementById("SearchButton");
    CancelSearchButton.style.display = "none";
    SearchButton.style.display = "inline"
}
function GridSelectionChanged()
{
    $get("BookButton").disabled = $find("crmGrid").get_innerGrid().get_selectedRecords().length === 0
}
function ResetToDefaultDuration()
{
    if(crmForm.UseDefaultDuration.checked)
    {
        var SearchDurationMinutes = Mscrm.FormControlInputBehavior.GetBehavior("SearchDurationMinutes");
        SearchDurationMinutes.resetToDefault()
    }
}
function CancelSearch(e)
{
    if(e.target.id != "CancelSearchButton")
    {
        var SearchButton = document.getElementById("SearchButton");
        window.parent.focus();
        SearchButton.focus();
        return
    }
    $get("BookButton").disabled = true;
    $find("crmGrid").CancelRefresh();
    GridRefreshed();
    $find("crmGrid").set_refreshCommandExecuting(false)
}
function ValidateSearchCriteria()
{
    var searchEnd,
        dNow,
        serviceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
    if(IsNull(serviceid.get_dataValue()))
    {
        alert(LOCID_SCHEDDLG_SVCREQUIRED);
        serviceid.setFocus();
        return false
    }
    var SearchStartDate = document.getElementById("SearchStartDate");
    if(SearchStartDate.value == "")
    {
        SearchStartDate.focus();
        alert(LOCID_SCHEDDLG_SELECTSTARTDATE);
        return false
    }
    var SearchStartTime = document.getElementById("SearchStartTime");
    if(SearchStartTime.value == "")
    {
        SearchStartTime.focus();
        alert(LOCID_SCHEDDLG_SELECTSTARTTIME);
        return false
    }
    if(SearchStartDate.value == _sRangeOfDates)
    {
        if(!HasDayOfWeekRecurrence() && !crmForm.DayOfWeekAll.checked)
        {
            crmForm.DayOfWeekAll.focus();
            alert(LOCID_SCHEDDLG_SELECTDAYOFWEEK);
            return false
        }
        if(!crmForm.DateRangeBeforeCheckBox.checked && !crmForm.DateRangeAfterCheckBox.checked)
        {
            crmForm.DateRangeAfterCheckBox.focus();
            alert(LOCID_SCHEDDLG_BEFOREAFTERDTRQD);
            return false
        }
        if(crmForm.DateRangeAfterCheckBox.checked && _searchDateAfter.get_dataValue() == null)
        {
            _searchDateAfter.setFocus();
            alert(LOCID_SCHEDDLG_STARTAFTR_RQD);
            return false
        }
        if(crmForm.DateRangeBeforeCheckBox.checked && _searchDateBefore.get_dataValue() == null)
        {
            _searchDateBefore.setFocus();
            alert(LOCID_SCHEDDLG_STARTBFOR_RQD);
            return false
        }
        if(crmForm.DateRangeBeforeCheckBox.checked && crmForm.DateRangeAfterCheckBox.checked)
            if(_searchDateBefore.get_dataValue() < _searchDateAfter.get_dataValue())
            {
                _searchDateAfter.setFocus();
                alert(LOCID_SCHEDDLG_INVALIDDATERANGE);
                return false
            }
        dNow = LocalDateTimeNow();
        searchEnd = GetEndDate();
        if(searchEnd < dNow)
        {
            _searchDateAfter.setFocus();
            alert(LOCID_SCHEDDLG_DATEINTHEPAST);
            return false
        }
    }
    if(SearchStartDate.value == _sSpecificDate)
    {
        dNow = LocalDateTimeNow();
        searchEnd = GetEndDate();
        if(searchEnd < dNow)
        {
            _searchSpecificDate.setFocus();
            alert(LOCID_SCHEDDLG_DATEINTHEPAST);
            return false
        }
    }
    if(SearchStartTime.value == _sRangeOfTimes)
        if(GetStartMinutes() >= GetEndMinutes())
        {
            _searchTimeAfter.setFocus();
            alert(LOCID_SCHEDDLG_ENDTIMEBFRSTART);
            return false
        }
    var SearchDurationMinutes = Mscrm.FormControlInputBehavior.GetBehavior("SearchDurationMinutes");
    if(!crmForm.UseDefaultDuration.checked && (SearchDurationMinutes.get_dataValue() == null || SearchDurationMinutes.get_dataValue() == 0))
    {
        SearchDurationMinutes.setFocus();
        alert(LOCID_SCHEDDLG_DURATION_REQUIRED);
        return false
    }
    return true
}
function ServiceLookupChanged(oEvent)
{
    var serviceid = Mscrm.FormControlInputBehavior.GetBehavior("serviceid"),
        aoItems = serviceid.Items();
    if(aoItems.length == 1)
    {
        var columns = [];
        columns.type = "string";
        columns[0] = "duration";
        columns[1] = "anchoroffset";
        _oServiceRetrieveCommand.SetParameter("id",aoItems[0].id);
        _oServiceRetrieveCommand.SetParameter("columns",columns);
        _oServiceRetrieveCommand.Execute(HandleGetService)
    }
    if(oEvent == null || !oEvent.DoNotClearSpecIds)
    {
        var oResourcesLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources");
        aoItems = oResourcesLookup.Items();
        var oItem;
        for(i = 0; i < aoItems.length; i++)
        {
            oItem = aoItems[i];
            oItem.resourceSpecId = null;
            oItem.effort = null;
            oResourcesLookup.UpdateItem(oItem.id,oItem)
        }
    }
}
function HandleGetService(oResult)
{
    if(oResult.Success)
    {
        oService = oResult.ReturnValue.service;
        var SearchDurationMinutes = Mscrm.FormControlInputBehavior.GetBehavior("SearchDurationMinutes");
        crmForm.UseDefaultDuration.checked && 
            SearchDurationMinutes.set_dataValue(oService.duration);
        SearchDurationMinutes.resetDefault(oService.duration);
        if(oService.anchoroffset == null)
            _iAnchorOffset = 0;
        else
            _iAnchorOffset = oService.anchoroffset
    }
    else
        _iAnchorOffset = 0
}
