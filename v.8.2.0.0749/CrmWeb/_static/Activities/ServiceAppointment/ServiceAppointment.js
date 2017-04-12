
var _oServiceRetrieveCommand,
    _bFromSchedulingDialog = false;

function ScheduleActivity(sId, iObjectTypeCode, bAutoSearch, callbackReference, isPreventDefault) {
    if (!IsOnline()) {
        alert(LOCID_GO_ONLINE_TO_SCHEDULE);
        return
    }
    var oWindowInfo = GetWindowInformation(ActivityScheduling),
        oUrl = oWindowInfo.Url,
        iX = oWindowInfo.Width,
        iY = oWindowInfo.Height;
    oUrl.get_query()["ActivityId"] = sId;
    oUrl.get_query()["ActivityTypeCode"] = iObjectTypeCode;
    if (bAutoSearch)
        oUrl.get_query()["autoSearch"] = "true";
    var oActivity = BuildActivityInfo(),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = iY;
    dialogOptions.width = iX;
    var parameters = [callbackReference, isPreventDefault],
        callbackFunction = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(populateFromDialog, parameters);
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oActivity, null, callbackFunction)
}

function BuildActivityInfo() {
    var i,
        item,
        oService = null,
        oSite = null,
        oServiceLookup = Mscrm.FormControlInputBehavior.GetBehavior("serviceid"),
        aoItems = oServiceLookup.Items();
    if (aoItems.length == 1)
        oService = new ServiceObject(aoItems[0].name, aoItems[0].id);
    var oSiteLookup = Mscrm.FormControlInputBehavior.GetBehavior("siteid");
    if (oSiteLookup != null) {
        aoItems = oSiteLookup.Items();
        if (aoItems.length == 1)
            oSite = new SiteObject(aoItems[0].name, aoItems[0].id)
    }
    var aoResources = [],
        oAttendeeLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources");
    aoItems = oAttendeeLookup.Items();
    for (i = 0; i < aoItems.length; i++) {
        item = aoItems[i];
        aoResources.push(new AttendeeObject(item.name, item.id, item.type, item.resourceSpecId, item.effort))
    }
    var aoCustomers = [];
    oAttendeeLookup = Mscrm.FormControlInputBehavior.GetBehavior("customers");
    if (oAttendeeLookup != null) {
        aoItems = oAttendeeLookup.Items();
        for (i = 0; i < aoItems.length; i++) {
            item = aoItems[i];
            aoCustomers.push(new AttendeeObject(item.name, item.id, item.type))
        }
    }
    return new ActivityInfo(aoCustomers, aoResources, oService, oSite)
}

function populateFromDialog(oActivity, callbackReference, isPreventDefault) {
    if (oActivity == null)
        return;
    var aoItems,
        oLookup,
        oLookupItem,
        i,
        oService,
        oSite,
        oAttendee;
    oLookup = Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
    oService = oActivity.Service;
    var aoExistingItems = oLookup.Items();
    if (aoExistingItems.length === 0 || oService.EntityId != aoExistingItems[0].id) {
        _bFromSchedulingDialog = true;
        oLookupItem = new LookupControlItem(oService.EntityId, oService.ObjectTypeCode, oService.DisplayName);
        oLookupItem.data = "";
        aoItems = [];
        aoItems.push(oLookupItem);
        oLookup.Clear();
        oLookup.AddItems(aoItems);
        oLookup.RaiseOnChangeEvent()
    }
    aoItems = [];
    oLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources");
    for (i = 0; i < oActivity.Resources.length; i++) {
        oAttendee = oActivity.Resources[i];
        oLookupItem = new LookupControlItem(oAttendee.EntityId, oAttendee.ObjectTypeCode, oAttendee.DisplayName);
        oLookupItem.data = "";
        oLookupItem.resourceSpecId = oAttendee.ResourceSpecId;
        oLookupItem.effort = oAttendee.EffortRequired;
        aoItems.push(oLookupItem)
    }
    if (oLookup.AreValuesDifferent(aoItems)) {
        oLookup.Clear();
        oLookup.AddItems(aoItems);
        oLookup.RaiseOnChangeEvent()
    }
    aoItems = [];
    oLookup = Mscrm.FormControlInputBehavior.GetBehavior("customers");
    if (oLookup != null) {
        for (i = 0; i < oActivity.Customers.length; i++) {
            oAttendee = oActivity.Customers[i];
            oLookupItem = new LookupControlItem(oAttendee.EntityId, oAttendee.ObjectTypeCode, oAttendee.DisplayName);
            oLookupItem.data = "";
            aoItems.push(oLookupItem)
        }
        if (aoItems.length == 0)
            aoItems = null;
        if (oLookup.AreValuesDifferent(aoItems)) {
            oLookup.Clear();
            oLookup.AddItems(aoItems);
            oLookup.RaiseOnChangeEvent()
        }
    }
    oLookup = Mscrm.FormControlInputBehavior.GetBehavior("siteid");
    if (oLookup != null) {
        oSite = oActivity.Site;
        if (oSite != null) {
            var aoExistingItems = oLookup.Items();
            if (aoExistingItems.length === 0 || oSite.EntityId != aoExistingItems[0].id) {
                oLookupItem = new LookupControlItem(oSite.EntityId, oSite.ObjectTypeCode, oSite.DisplayName);
                oLookupItem.data = "";
                aoItems = [];
                aoItems.push(oLookupItem);
                oLookup.Clear();
                oLookup.AddItems(aoItems);
                oLookup.RaiseOnChangeEvent()
            }
        } else {
            oLookup.Clear();
            oLookup.RaiseOnChangeEvent()
        }
    }
    var oIsalldayeventElement = $get("isalldayevent", $get("crmForm"));
    if (oIsalldayeventElement.checked) {
        oIsalldayeventElement.checked = false;
        setAllDay();
        XUI.Html.DispatchDomEvent(oIsalldayeventElement, XUI.Html.CreateDomEvent("change"))
    }
    var start = Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart"),
        bTimesChanged = false;
    if (start.get_dataValue() != oActivity.ScheduledStart) {
        start.set_dataValue(new Date(oActivity.ScheduledStart));
        bTimesChanged = true
    }
    var end = Mscrm.FormControlInputBehavior.GetBehavior("scheduledend");
    if (end.get_dataValue() != oActivity.ScheduledEnd) {
        end.set_dataValue(new Date(oActivity.ScheduledEnd));
        bTimesChanged = true
    }
    bTimesChanged &&
        endTimeChanged();
    Mscrm.Utilities.executeFunction(callbackReference, isPreventDefault)
}

function ServiceLookupChanged(oEvent) {
    var aoItems = Mscrm.FormControlInputBehavior.GetBehavior("serviceid").Items();
    if (aoItems.length >= 1) {
        var columns = [];
        columns.type = "string";
        columns[0] = "duration";
        columns[1] = "initialstatuscode";
        _oServiceRetrieveCommand.SetParameter("id", aoItems[0].id);
        _oServiceRetrieveCommand.SetParameter("columns", columns);
        _oServiceRetrieveCommand.Execute(HandleGetService)
    }
    var oResourcesLookup = Mscrm.FormControlInputBehavior.GetBehavior("resources");
    aoItems = oResourcesLookup.Items();
    var oItem;
    for (i = 0; i < aoItems.length; i++) {
        oItem = aoItems[i];
        oItem.resourceSpecId = null;
        oItem.effort = null;
        oResourcesLookup.UpdateItem(oItem.id, oItem)
    }
}

function HandleGetService(oResult) {
    if (oResult.Success) {
        oService = oResult.ReturnValue.service;
        var oCrmFormElement = $get("crmForm"),
            oStatusCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("statuscode");
        if (oStatusCodeControl != null) {
            var oldValue = oStatusCodeControl.get_dataValue();
            oStatusCodeControl.set_dataValue(oService.initialstatuscode);
            oStatusCodeControl.get_dataValue() === null &&
                oStatusCodeControl.set_dataValue(oldValue)
        }
        if (!_bFromSchedulingDialog) {
            var _scheduleddurationminutes = Mscrm.FormControlInputBehavior.GetBehavior("scheduleddurationminutes");
            _scheduleddurationminutes.set_dataValue(oService.duration);
            durationChanged()
        }
        _bFromSchedulingDialog = false
    }
}

function SendEmail() {
    var oArgs = {};
    oArgs.TotalRecords = 1;
    oArgs.SelectedRecords = 1;
    var aIds = new Array(1),
        oCrmFormSubmit = $get("crmFormSubmit");
    aIds[0] = oCrmFormSubmit.crmFormSubmitId.value;
    oArgs.Ids = aIds;
    oArgs.GridXml = null;
    var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=true&multiPage=false&objectTypeCode=" +
            ServiceAppointment +
            "&objectId=" +
            oCrmFormSubmit.crmFormSubmitId.value),
        crmDialog = new Mscrm.CrmDialog(oUrl, oArgs, 600, 600, null);
    crmDialog.show()
}

function saveAsCompleted() {
    var crmFormCtrl = $find("crmForm");
    crmFormCtrl.SubmitCrmForm(58, true, true, false)
}