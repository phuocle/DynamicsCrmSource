Type.registerNamespace("Mscrm");
Type.registerNamespace("Microsoft.Crm");
Type.registerNamespace("Microsoft.Crm.Application.Pages.Common");
Type.registerNamespace("Microsoft.Crm.Utility");
Mscrm.routeoption_onchange = function() {
    var routeoptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("routeoption");
    if (IsNull(routeoptionCtrl)) return;
    var routedqueueid = Mscrm.FormControlInputBehavior.GetBehavior("routedqueueid");
    if (!IsNull(routedqueueid) && !routedqueueid.IsValid()) {
        routeoptionCtrl.set_dataValue(!routeoptionCtrl.get_dataValue());
        return
    }
    var assignobjectid = Mscrm.FormControlInputBehavior.GetBehavior("assignobjectid");
    if (!IsNull(assignobjectid) && !assignobjectid.IsValid()) {
        routeoptionCtrl.set_dataValue(!routeoptionCtrl.get_dataValue());
        return
    }
    $get("routedqueueid_c").style.display = "none";
    $get("routedqueueid_d").style.display = "none";
    $get("assignobjectid_c").style.display = "none";
    $get("assignobjectid_d").style.display = "none";
    var setRouteValue;
    if (routeoptionCtrl.get_dataValue() == 0) {
        assignobjectid.set_dataValue(null);
        $get("routedqueueid_c").style.display = "";
        $get("routedqueueid_d").style.display = "";
        setRouteValue = Mscrm.FormControlInputBehavior.GetBehaviorForForm("assignobjectid")
    } else {
        routedqueueid.set_dataValue(null);
        $get("assignobjectid_c").style.display = "";
        $get("assignobjectid_d").style.display = "";
        setRouteValue = Mscrm.FormControlInputBehavior.GetBehaviorForForm("routedqueueid")
    }
    !IsNull(setRouteValue) && setRouteValue.setValue(null)
};
Mscrm.Form_onload = function() {
    var routeoptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("routeoption"),
        routedqueueid = Mscrm.FormControlInputBehavior.GetBehavior("routedqueueid");
    if (IsNull(routeoptionCtrl) || IsNull(routedqueueid)) return;
    Mscrm.Form.setFieldRequiredOrRecommended($get("routeoption_c").parentNode, 2, window.LOCID_FORM_REQUIRED_ALT);
    var routedqueueBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior($get("routedqueueid"));
    if (IsNull(routedqueueBehavior)) return;
    routedqueueBehavior.set_defaultViewId("{f374f814-00a2-44ed-8b88-13f34e202e79}");
    var conditionXml = document.getElementById("ConditionXml").value;
    if (conditionXml) conditionXml = conditionXml.replace(/dataslugs=""/g, "");
    $find("appConditionBuilder").LoadXml(conditionXml);
    $get("routedqueueid_c").style.display = "none";
    $get("routedqueueid_d").style.display = "none";
    $get("assignobjectid_c").style.display = "none";
    $get("assignobjectid_d").style.display = "none";
    if (routeoptionCtrl.get_dataValue() == 0) {
        $get("routedqueueid_c").style.display = "";
        $get("routedqueueid_d").style.display = ""
    } else {
        $get("assignobjectid_c").style.display = "";
        $get("assignobjectid_d").style.display = ""
    }
    ShowNotifications()
};

function ShowNotifications() {
    var isCreate = Xrm.Page.ui.getFormType() == Xrm.FormType.create,
        routedQueue = Xrm.Page.data.entity.attributes.get("routedqueueid"),
        assignedObject = Xrm.Page.data.entity.attributes.get("assignobjectid"),
        isRoutedQueue = Mscrm.InternalUtilities.JSTypes.isNull(routedQueue) ||
            Mscrm.InternalUtilities.JSTypes.isNull(routedQueue.getValue()),
        isAssignedObject = Mscrm.InternalUtilities.JSTypes.isNull(assignedObject) ||
            Mscrm.InternalUtilities.JSTypes.isNull(assignedObject.getValue()),
        isc = $find("appConditionBuilder").ParseXml() || $find("appConditionBuilder").GetXml() != null,
        isValid = isCreate ? true : IsEntityRecordValid(Xrm.Page.data.entity.getId()),
        routedQueueValue = routedQueue.getValue();
    if (routedQueueValue != null && routedQueueValue.length > 0) {
        routedQueueName = routedQueueValue[0].name;
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(routedQueueName)) isValid = false
    }
    var showNotification = !isCreate && (isRoutedQueue && isAssignedObject || !isc || !isValid);
    if (showNotification) {
        var notificationText = "";
        if (isRoutedQueue && isAssignedObject && (!isc || !isValid)) notificationText = LOCID_ERROR_MISSING_ALL;
        else if (isRoutedQueue && isAssignedObject) notificationText = LOCID_ERROR_MISSING_ROUTETO;
        else notificationText = LOCID_ERROR_MISSING_CODNTION_REF;
        Xrm.Page.ui.setFormNotification(notificationText, "WARNING", "RoutingRuleItemErrorNotofication")
    } else Xrm.Page.ui.clearFormNotification("RoutingRuleItemErrorNotofication")
}

Mscrm.Form_onsave = function(event) {
    var conditionBuilder = $find("appConditionBuilder");
    if (!conditionBuilder.ParseXml()) {
        event.getEventArgs().preventDefault();
        event.getEventArgs().stopPropagation()
    }
    var routeoptionCtrl = Mscrm.FormControlInputBehavior.GetBehavior("routeoption");
    if (routeoptionCtrl.get_dataValue() == 0) {
        var routedqueueBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior($get("routedqueueid"));
        if (IsNull(routedqueueBehavior.get_dataValue())) {
            alert(LOCID_ROUTEQUEUEIDREQD);
            event.getEventArgs().preventDefault();
            return false
        }
    } else {
        var assignedObjectBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior($get("assignobjectid"));
        if (IsNull(assignedObjectBehavior.get_dataValue())) {
            alert(LOCID_ASSIGNOBJIDREQD);
            event.getEventArgs().preventDefault();
            return false
        }
    }
    var conditionXml = $find("appConditionBuilder").GetXml();
    Xrm.Page.getAttribute("conditionxml").setValue(conditionXml)
}