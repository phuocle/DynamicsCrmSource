
var previousBaseRecordValue,
    previousMatchingRecordValue;

function ForceSubmitRuleForm(sender, args) {
    var crmFormCtrl = $find("crmForm");
    crmFormCtrl.remove_onSave(ForceSubmitRuleForm);
    var bClose = false;
    if (args.getSaveMode() == 2)
        bClose = true;
    var isConditionsDirty = isConditionControlDirty(),
        bConfirm = true;
    if (aspxVars_IsSimilarityRuleActivated == "true")
        if (crmFormCtrl.get_isDirty() == true || isConditionsDirty == true)
            bConfirm = confirm(LOCID_ACTIVATEDRULE_UPDATE);
    if (bConfirm == true)
        if (crmFormCtrl.get_isDirty() == true || isConditionsDirty == true)
            crmFormCtrl.SubmitCrmForm(args.getSaveMode(), true, true, bClose);
        else
            return;
    else
        crmFormCtrl.add_onSave(ForceSubmitRuleForm);
    args.preventDefault()
}

function onSaveRule(event) {
    var conditionFrame = $get("ruleconditioncontrol").contentWindow,
        appCondition = conditionFrame.$find("similarityRuleAppCondition"),
        conditionXml = "";
    if (appCondition)
        if (appCondition.ParseXml())
            conditionXml = appCondition.GetXml();
        else {
            $find("crmForm").add_onSave(ForceSubmitRuleForm);
            event.preventDefault();
            return false
        }
    createHiddenInput("conditionXml", conditionXml);
    var isConditionControlDirty = false;
    if (appCondition && appCondition.get_isDirty() == true)
        isConditionControlDirty = true;
    createHiddenInput("isConditionControlDirty", isConditionControlDirty);
    var baseEntityCode = document.getElementById("baseentitytypecode").value,
        matchingEntityCode = document.getElementById("matchingentitytypecode").value;
    createHiddenInput("baseentitytypecode", baseEntityCode);
    createHiddenInput("matchingentitytypecode", matchingEntityCode);
    aspxVars_isNewform == "true" &&
        createHiddenInput("statecode", aspxVars_DraftStateCode)
}

function onMatchingRecordTypeChange() {
    var conditionControlIframe = $get("ruleconditioncontrol"),
        doc = conditionControlIframe.contentWindow || conditionControlIframe.contentDocument,
        baseEntityCode = $get("baseentitytypecode").value,
        matchingEntityTypeSelector = $get("matchingentitytypecode"),
        matchingEntityCode = matchingEntityTypeSelector.value,
        matchingEntityTypeBehaviour = Mscrm.FormControlInputBehavior.GetElementBehavior(matchingEntityTypeSelector);
    if (baseEntityCode == aspxVars_utilNoneEntityCode) {
        alert(LOCID_SELECT_BASERECORD_FIRST);
        matchingEntityTypeBehaviour.set_dataValue(aspxVars_utilNoneEntityCode);
        return
    }
    if (previousMatchingRecordValue != aspxVars_utilNoneEntityCode) {
        var appCondition = doc.$find("similarityRuleAppCondition"),
            conditionXml = "";
        if (appCondition)
            conditionXml = appCondition.GetXml();
        if (conditionXml && conditionXml != "")
            if (!confirm(LOCID_ENTITY_CHANGE)) {
                matchingEntityTypeBehaviour.set_dataValue(previousMatchingRecordValue);
                return
            }
    }
    if (matchingEntityCode == aspxVars_utilNoneEntityCode) {
        matchingEntityTypeBehaviour.set_dataValue(baseEntityCode);
        matchingEntityCode = baseEntityCode
    }
    var conditionControlIframe = $get("ruleconditioncontrol"),
        url = Mscrm.CrmUri
            .create("/tools/systemcustomization/similarityrules/similarityrulecondition.aspx?baseentitycode=" +
                baseEntityCode +
                "&matchingentitycode=" +
                matchingEntityCode).toString();
    conditionControlIframe.src = url;
    previousMatchingRecordValue = matchingEntityTypeSelector.value
}

function isConditionControlDirty() {
    var appCondition = $get("ruleconditioncontrol").contentWindow.$find("similarityRuleAppCondition");
    return !IsNull(appCondition) && appCondition.get_isDirty()
}