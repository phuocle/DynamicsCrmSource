Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, USER_DATE_START_DAY, _dCalMinDate);
    _oServiceRetrieveCommand = new RemoteCommand("Service", "Retrieve");
    !IsNull(location.search.match(/loadDialog=([^&]*)/)) &&
        window
        .setTimeout("ScheduleActivity($get('crmFormSubmit').crmFormSubmitId.value, ServiceAppointment, !IsNull(location.search.match(/autoSearch=([^&]*)/)))", 100)
};
Mscrm.Form_onsave = function(context) { CustomFormSubmit($find("crmForm"), context.getEventArgs()) };
Mscrm.serviceid_onchange = function() { ServiceLookupChanged() };
Mscrm.isalldayevent_onchange = function() {
    Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart").set_forceSubmit(true);
    Mscrm.FormControlInputBehavior.GetBehavior("scheduledend").set_forceSubmit(true)
}