Type.registerNamespace("Mscrm");
Type.registerNamespace("Microsoft.Crm");
Type.registerNamespace("Microsoft.Crm.Application.Pages.Common");
Type.registerNamespace("Microsoft.Crm.Utility");
var slaItemIntervalHandler = 0;
Mscrm.Form_onsave = function(context) {
    var applicableWhenConditionBuilder = $find("appConditionBuilder1"),
        successCriteriaConditionBuilder = $find("appConditionBuilder2"),
        conditionControlError = false;
    if (!applicableWhenConditionBuilder.ParseXml() || !successCriteriaConditionBuilder.ParseXml()) {
        conditionControlError = true;
        context.getEventArgs().preventDefault()
    }
    var releatedcaseCtrl = Mscrm.FormControlInputBehavior.GetBehavior("relatedcasefield"),
        selectedValue = releatedcaseCtrl.get_dataValue();
    $find("relatedfieldhidden").set_value(selectedValue);
    $find("relatedfieldhidden").handleDataValueChange(selectedValue, null);
    var applicableWhenXml = $find("appConditionBuilder1").GetXml();
    Xrm.Page.getAttribute("applicablewhenxml").setValue(applicableWhenXml);
    var successCriteriaXml = $find("appConditionBuilder2").GetXml();
    Xrm.Page.getAttribute("successconditionsxml").setValue(successCriteriaXml);
    var warnafter = Xrm.Page.getAttribute("warnafter").getValue(),
        failureafter = Xrm.Page.getAttribute("failureafter").getValue(),
        warnfailureAfterError = false;
    if (warnafter > failureafter) {
        warnfailureAfterError = true;
        alert(LOCID_WARN_GREATER_FAILURE);
        context.getEventArgs().preventDefault()
    }
    if (IsNull(selectedValue)) {
        alert(LOCID_ERROR_MISSING_SLAKPI);
        context.getEventArgs().preventDefault()
    }
    if (IsNull(successCriteriaXml) && !warnfailureAfterError && !conditionControlError
    ) !confirm(LOCID_WARN_SUCCESSCRITERIA_EMPTY) && context.getEventArgs().preventDefault()
};
Mscrm.Form_onload = function() {
    var relatedcasefield = document.getElementById("relatedcasefield_c");
    if (!IsNull(relatedcasefield)) relatedcasefield.title = slatype ? LOCID_TOOLTIP_SLAKPI : LOCID_RELATED_CASE_FIELD;
    var applicableWhenXml = document.getElementById("ApplicableWhenXml").value;
    $find("appConditionBuilder1").LoadXml(applicableWhenXml);
    var successCriteriaXml = document.getElementById("SuccessCriteriaXml").value;
    $find("appConditionBuilder2").LoadXml(successCriteriaXml);
    var releatedcaseCtrl = Mscrm.FormControlInputBehavior.GetBehavior("relatedfieldhidden"),
        releatedfieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("relatedcasefield");
    if (Xrm.Page.ui.getFormType() == 1)
        slaItemIntervalHandler = window.setInterval(function() {
                if (!IsNull(Xrm.Page.getAttribute("failureafter")) && !IsNull(Xrm.Page.getAttribute("warnafter"))) {
                    Xrm.Page.getAttribute("failureafter").setValue(60);
                    Xrm.Page.getAttribute("warnafter").setValue(30);
                    window.clearInterval(slaItemIntervalHandler)
                }
            },
            100);
    if (Xrm.Page.ui.getFormType() != 1) {
        var savedValue = releatedcaseCtrl.get_dataValue();
        releatedfieldCtrl.set_dataValue(savedValue);
        releatedfieldCtrl.set_disabled(true)
    }
    ShowNotifications()
};

function ShowNotifications() {
    var isCreate = Xrm.Page.ui.getFormType() == Xrm.FormType.create,
        errorMessage = isCreate ? "" : EntityRecordErrorNotification(Xrm.Page.data.entity.getId()),
        isValid = errorMessage == "",
        showNotification = !isCreate && !isValid;
    if (showNotification) {
        var notificationText = errorMessage;
        Xrm.Page.ui.setFormNotification(notificationText, "WARNING", "SLAItemErrorNotofication")
    } else Xrm.Page.ui.clearFormNotification("SLAItemErrorNotofication")
}