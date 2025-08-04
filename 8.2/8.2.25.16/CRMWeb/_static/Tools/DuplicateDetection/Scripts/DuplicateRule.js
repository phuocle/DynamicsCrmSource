
var previousBaseRecordValue,
    previousMatchingRecordValue;
function ForceSubmitRuleForm(sender,args)
{
    var crmFormCtrl = $find("crmForm");
    crmFormCtrl.remove_onSave(ForceSubmitRuleForm);
    var bClose = false;
    if(args.getSaveMode() == 2)
        bClose = true;
    var isConditionsDirty = isConditionControlDirty(),
        bConfirm = true;
    if(aspxVars_IsDuplicateRulePublished == "true")
        if(crmFormCtrl.get_isDirty() == true && $get("crmFormSubmitXml").value.indexOf("<iscasesensitive>") != -1 || isConditionsDirty == true)
            bConfirm = confirm(LOCID_PUBLISHEDRULE_UPDATE);
    if(bConfirm == true)
        if(crmFormCtrl.get_isDirty() == true || isConditionsDirty == true)
            crmFormCtrl.SubmitCrmForm(args.getSaveMode(),true,true,bClose);
        else
            return;
    else
        crmFormCtrl.add_onSave(ForceSubmitRuleForm);
    args.preventDefault()
}
function onSaveRule(event)
{
    var conditionFrame = $get("ruleconditioncontrol").contentWindow;
    if(conditionFrame.ComputeTotalMatchCodeLength() > aspxVars_MaximumMatchcodeLength)
    {
        alert(LOCID_MATCHCODE_WARNING);
        $find("crmForm").add_onSave(ForceSubmitRuleForm);
        event.preventDefault();
        return false
    }
    var appCondition = conditionFrame.$find("dupRuleAppCondition"),
        conditionXml = "";
    if(appCondition)
        if(appCondition.ParseXml())
            conditionXml = appCondition.GetXml();
        else
        {
            $find("crmForm").add_onSave(ForceSubmitRuleForm);
            event.preventDefault();
            return false
        }
    if(!conditionXml || conditionXml == "")
        conditionXml = "<and/>";
    createHiddenInput("conditionXml",conditionXml);
    var isConditionControlDirty = false;
    if(appCondition && appCondition.get_isDirty() == true)
        isConditionControlDirty = true;
    createHiddenInput("isConditionControlDirty",isConditionControlDirty);
    var baseEntityCode = document.getElementById("baseentitytypecode").value,
        matchingEntityCode = document.getElementById("matchingentitytypecode").value;
    createHiddenInput("baseentitytypecode",baseEntityCode);
    createHiddenInput("matchingentitytypecode",matchingEntityCode);
    aspxVars_isNewform == "true" && 
        createHiddenInput("statuscode",aspxVars_UnpublishedStatusCode)
}
function onBaseRecordTypeChange()
{
    var conditionControlIframe = $get("ruleconditioncontrol"),
        doc = conditionControlIframe.contentWindow || conditionControlIframe.contentDocument,
        url = "",
        baseEntityTypeSelector = $get("baseentitytypecode"),
        baseEntityCode = baseEntityTypeSelector.value,
        matchingEntityTypeSelector = $get("matchingentitytypecode"),
        matchingEntityCode = matchingEntityTypeSelector.value,
        display = "none",
        baseEntityTypeBehaviour = Mscrm.FormControlInputBehavior.GetElementBehavior(baseEntityTypeSelector),
        matchingEntityTypeBehaviour = Mscrm.FormControlInputBehavior.GetElementBehavior(matchingEntityTypeSelector);
    if(previousBaseRecordValue != aspxVars_utilNoneEntityCode)
    {
        var appCondition = doc.$find("dupRuleAppCondition"),
            conditionXml = "";
        if(appCondition)
            conditionXml = appCondition.GetXml();
        if(conditionXml && conditionXml != "")
            if(!confirm(LOCID_ENTITY_CHANGE))
            {
                baseEntityTypeBehaviour.set_dataValue(previousBaseRecordValue);
                return
            }
    }
    else
        previousMatchingRecordValue = baseEntityTypeSelector.value;
    if(baseEntityCode != aspxVars_utilNoneEntityCode)
    {
        if(matchingEntityCode == aspxVars_utilNoneEntityCode)
        {
            matchingEntityTypeBehaviour.set_dataValue(baseEntityCode);
            matchingEntityCode = baseEntityCode
        }
        url = Mscrm.CrmUri.create("/tools/duplicatedetection/duplicatedetectionrules/duplicaterulecondition.aspx?baseentitycode=" + baseEntityCode + "&matchingentitycode=" + matchingEntityCode).toString();
        display = "inline"
    }
    else
    {
        alert(LOCID_BASERECORD_EMPTY);
        baseEntityTypeBehaviour.set_dataValue(previousBaseRecordValue);
        return
    }
    conditionControlIframe.src = url;
    previousBaseRecordValue = baseEntityTypeSelector.value
}
function onMatchingRecordTypeChange()
{
    var conditionControlIframe = $get("ruleconditioncontrol"),
        doc = conditionControlIframe.contentWindow || conditionControlIframe.contentDocument,
        baseEntityCode = $get("baseentitytypecode").value,
        matchingEntityTypeSelector = $get("matchingentitytypecode"),
        matchingEntityCode = matchingEntityTypeSelector.value,
        matchingEntityTypeBehaviour = Mscrm.FormControlInputBehavior.GetElementBehavior(matchingEntityTypeSelector);
    if(baseEntityCode == aspxVars_utilNoneEntityCode)
    {
        alert(LOCID_SELECT_BASERECORD_FIRST);
        matchingEntityTypeBehaviour.set_dataValue(aspxVars_utilNoneEntityCode);
        return
    }
    if(previousMatchingRecordValue != aspxVars_utilNoneEntityCode)
    {
        var appCondition = doc.$find("dupRuleAppCondition"),
            conditionXml = "";
        if(appCondition)
            conditionXml = appCondition.GetXml();
        if(conditionXml && conditionXml != "")
            if(!confirm(LOCID_ENTITY_CHANGE))
            {
                matchingEntityTypeBehaviour.set_dataValue(previousMatchingRecordValue);
                return
            }
    }
    if(matchingEntityCode == aspxVars_utilNoneEntityCode)
    {
        matchingEntityTypeBehaviour.set_dataValue(baseEntityCode);
        matchingEntityCode = baseEntityCode
    }
    var conditionControlIframe = $get("ruleconditioncontrol"),
        url = Mscrm.CrmUri.create("/tools/duplicatedetection/duplicatedetectionrules/duplicaterulecondition.aspx?baseentitycode=" + baseEntityCode + "&matchingentitycode=" + matchingEntityCode).toString();
    conditionControlIframe.src = url;
    previousMatchingRecordValue = matchingEntityTypeSelector.value
}
function publishRule()
{
    if($find("crmForm").get_isDirty() || isConditionControlDirty() == true)
        alert(LOCID_PUBLISHRULE_DIRTY);
    else
    {
        var oArgs = {},
            ruleIdArray = new Array(1);
        ruleIdArray[0] = aspxVars_CurrentEntityId;
        oArgs.Ids = ruleIdArray;
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_publishduplicaterule.aspx"),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 200;
        dialogOptions.width = 400;
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs.Ids,null,performActionAfterPublishRule)
    }
}
function performActionAfterPublishRule(ret)
{
    if(ret == true)
    {
        try
        {
            window.opener.auto(aspxVars_DuplicateRule)
        }
        catch(e)
        {
        }
        var oUrl = Mscrm.CrmUri.create(location.href);
        location.href = oUrl.toString()
    }
}
function unpublishRule()
{
    if($find("crmForm").get_isDirty() || isConditionControlDirty() == true)
        alert(LOCID_UNPUBLISHRULE_DIRTY);
    else
    {
        var oArgs = {},
            ruleIdArray = new Array(1);
        ruleIdArray[0] = aspxVars_CurrentEntityId;
        oArgs.Ids = ruleIdArray;
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_unpublishduplicaterule.aspx"),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 200;
        dialogOptions.width = 400;
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs.Ids,null,performActionAfterUnpublishRule)
    }
}
function performActionAfterUnpublishRule(ret)
{
    if(ret == true)
    {
        try
        {
            window.opener.auto(aspxVars_DuplicateRule)
        }
        catch(e)
        {
        }
        var oUrl = Mscrm.CrmUri.create(location.href);
        location.href = oUrl.toString()
    }
}
function isConditionControlDirty()
{
    var appCondition = $get("ruleconditioncontrol").contentWindow.$find("dupRuleAppCondition");
    return !IsNull(appCondition) && appCondition.get_isDirty()
}
