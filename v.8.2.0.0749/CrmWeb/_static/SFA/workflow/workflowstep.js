
var workflowSelectedStep = null,
    workflowCssName = "",
    stepImageOpen = new Image;
stepImageOpen.setAttribute("src", "/_imgs/grid/r.gif");
var stepImageClose = new Image;
stepImageClose.setAttribute("src", "/_imgs/grid/d.gif");
var WaitTimeoutStepName = "WaitTimeout",
    WaitStepName = "WaitStep",
    WaitBranchStepName = "WaitBranch",
    ConditionStepName = "ConditionStep",
    IfConditionName = "IfCondition",
    ElseIfCondition = "ElseIfCondition",
    ElseCondition = "ElseCondition",
    InteractionStepPageName = "InteractionPageStep",
    maximumNestedTables = 21,
    _expandCollapseArray = [],
    currControl,
    currContainerPrefix = "WF_Container",
    stepSelectedAttr = "stepselected";

function SetCurrentControl(_name) {
    currControl = _name
}

function $Id(Id) {
    return !IsNull(currControl) ? Id + "_" + currControl : Id
}

function $get2(id) {
    return $get($Id(id))
}

function getElementWithStepname(el, stepName) {
    while (!IsNull(el) && el.nodeName != "#document")
        if (el.tagName.toLowerCase() == "table" && el.getAttribute("stepname") != undefined)
            if (stepName == "" || stepName != "" && el.getAttribute("stepname") == stepName)
                return el;
            else
                el = el.parentNode;
        else
            el = el.parentNode;
    return el
}

function getElementWithStepnameAttribute(el) {
    return getElementWithStepname(el, "")
}

function getLookUpElementWithEvent(el) {
    if (IsNull(el))
        return el;
    var stepElement = getElementWithStepnameAttribute(el),
        lookUp = document.getElementById(stepElement.id + "_lookupwfc");
    return lookUp
}

function IsWaitTimeoutExpression(sXml) {
    var oXml = XUI.Xml.LoadXml(sXml),
        oNodes = XUI.Xml.SelectNodes(oXml, "/and/condition/column[@id='colEntity']", null);
    if (oNodes.length == 1 && oNodes[0].getAttribute("value").indexOf("#Workflow") == 0) {
        oNodes = XUI.Xml.SelectNodes(oXml, "/and/condition/column[@id='colAttribute']", null);
        if (oNodes.length == 1 && oNodes[0].getAttribute("value").indexOf("#WaitTimeout#Workflow#") == 0)
            return true
    }
    return false
}

function OnWorkflowStepKeydown(domEvent) {
    switch (domEvent.keyCode) {
    case 84:
        if (domEvent.ctrlKey) {
            var stepMenu = $get2("mnu_AddStep");
            if (!IsNull(stepMenu) && !stepMenu.getAttribute("disabled")) {
                Mscrm.Utilities.click(stepMenu);
                domEvent.stopPropagation()
            }
        }
        break
    }
}

function OnWorkflowStepClick(domEvent) {
    var el = domEvent.target;
    el = getElementWithStepnameAttribute(el);
    if (IsNull(el))
        return;
    if (IsNull(currControl))
        !IsNull(workflowSelectedStep) &&
            UnselectStep(workflowSelectedStep);
    else {
        var stepSelectedElement = document.getElementById($Id(currContainerPrefix)).getAttribute(stepSelectedAttr);
        !IsNull(stepSelectedElement) &&
            UnselectStep($get(stepSelectedElement))
    }
    SelectStep(el);
    domEvent.stopPropagation()
}

function GetAvailableCreateByEntityForStep() {
    var el = GetSelectedWorkflowStep(),
        oCrmFormSubmit = $get("crmFormSubmit"),
        command;
    if (IsNull(el) || el.id == "NoStep") {
        command = new RemoteCommand("Workflow", "GetValidStepControlType");
        if (!IsNull(el))
            command.SetParameter("parentId", el.getAttribute("parent"));
        else
            command.SetParameter("parentId", "");
        command.SetParameter("siblingId", "");
        command.SetParameter("entityId", oCrmFormSubmit.crmFormSubmitId.value)
    } else {
        command = new RemoteCommand("Workflow", "GetValidStepControlType");
        command.SetParameter("parentId", "");
        command.SetParameter("siblingId", el.id);
        command.SetParameter("entityId", oCrmFormSubmit.crmFormSubmitId.value)
    }
    var oResult = command.Execute();
    if (oResult.Success)
        return oResult.ReturnValue;
    return " "
}

function GetSelectedWorkflowStep() {
    if (IsNull(currControl))
        return workflowSelectedStep;
    else
        return $get(document.getElementById($Id(currContainerPrefix)).getAttribute(stepSelectedAttr))
}

function ResetSelectedStep() {
    if (IsNull(currControl)) {
        if (!IsNull(workflowSelectedStep)) {
            UnselectStep(workflowSelectedStep);
            workflowSelectedStep = null;
            workflowCssName = ""
        }
    } else {
        var stepSelectedElement = document.getElementById($Id(currContainerPrefix)).getAttribute(stepSelectedAttr);
        if (!IsNull(stepSelectedElement)) {
            UnselectStep($get(stepSelectedElement));
            document.getElementById($Id(currContainerPrefix)).setAttribute(stepSelectedAttr, "undefined");
            workflowCssName = ""
        }
    }
    EnableDisableDeleteBtn()
}

function UnselectStep(el) {
    if (IsNull(el))
        return;
    el.className = workflowCssName
}

function SelectStep(el) {
    if (IsNull(el))
        return;
    if (IsNull(currControl))
        workflowSelectedStep = el;
    else
        document.getElementById($Id(currContainerPrefix)).setAttribute(stepSelectedAttr, el.id);
    workflowCssName = el.className;
    el.className = "ms-crm-workflow-outer-selected";
    EnableDisableDeleteBtn()
}

function EnableDisableDeleteBtn() {
    var el = GetSelectedWorkflowStep(),
        deleteButton = $get2("_MBdeleteStep");
    if (!IsNull(deleteButton))
        if (IsNull(el) || el.id == "NoStep" || IsLastIfBranchWithElseSelected())
            WfDisableItem(deleteButton, true);
        else
            WfDisableItem(deleteButton, false)
}

function WfDisableItem(o, bDisable) {
    if (bDisable) {
        o.setAttribute("disabled", true);
        o.style.opacity = .5
    } else {
        o.removeAttribute("disabled");
        o.style.opacity = 1
    }
}

function GetConditionStep(selectedStep) {
    return getElementWithStepname(selectedStep, ConditionStepName)
}

function IsThereElseBranchExistInTheSelected() {
    var el = GetSelectedWorkflowStep();
    el = GetConditionStep(el);
    if (IsNull(el) || IsNull(XUI.Html.DomUtils.GetFirstChild(el)))
        return false;
    var children = GetConditionStepChildren(el);
    if (children[2] > 0)
        return true;
    return false
}

function IsCompositeStepSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.id != "NoStep") {
        var stepName = el.getAttribute("stepname");
        switch (stepName) {
        case "InteractionStepPage":
        case "ConditionStep":
        case "IfCondition":
        case "ElseCondition":
        case "ElseIfCondition":
        case "WaitStep":
        case "WaitBranch":
            return true;
            break;
        default:
            return false;
            break
        }
    }
    return false
}

function IsElseBranchSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.id != "NoStep") {
        var stepName = el.getAttribute("stepname");
        if (stepName == "ElseCondition")
            return true;
        else
            return false
    } else
        return false
}

function GetSelectedStepName() {
    var el = GetSelectedWorkflowStep();
    if (IsNull(el))
        return null;
    if (el.id != "NoStep") {
        var stepName = el.getAttribute("stepname");
        return stepName
    }
    return null
}

function IsStageStepSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.id.indexOf("StageStep") >= 0)
        return true;
    return false
}

function IsInteractionPageSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.id != "NoStep") {
        var stepName = el.getAttribute("stepname");
        if (stepName == InteractionStepPageName)
            return true;
        else
            return false
    } else
        return false
}

function IsChildOfInteractionPage() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el)) {
        el = el.parentNode;
        if (!IsNull(el) && el.id.indexOf(InteractionStepPageName) >= 0)
            return true
    }
    return false
}

function IsIfElseBranchSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.id != "NoStep") {
        var stepName = el.getAttribute("stepname");
        if (stepName == "IfCondition" || stepName == "ElseIfCondition")
            return true;
        else
            return false
    } else
        return false
}

function IsLastIfBranchWithElseSelected() {
    var el = GetSelectedWorkflowStep();
    if (!IsNull(el) && el.getAttribute("stepname") == "IfCondition") {
        el = GetConditionStep(el);
        if (IsNull(el) || IsNull(XUI.Html.DomUtils.GetFirstChild(el)))
            return false;
        var children = GetConditionStepChildren(el);
        if (children[1] == 0 && children[2] == 1)
            return true
    }
    return false
}

function GetConditionStepChildren(conditionStep) {
    var children = [];
    children[0] = 0;
    children[1] = 0;
    children[2] = 0;
    for (var childNodes = conditionStep.getElementsByTagName("table"),
        length = childNodes.length,
        index = 0;
        index < length;
        index++) {
        var oNode = childNodes[index];
        if (!IsSiblingConditionalStep(conditionStep, oNode))
            continue;
        if (oNode.getAttribute("stepname") == "ElseIfCondition")
            children[1]++;
        else if (oNode.getAttribute("stepname") == "ElseCondition")
            children[2]++;
        else if (oNode.getAttribute("stepname") == "IfCondition")
            children[0]++
    }
    return children
}

function IsSiblingConditionalStep(step1, child) {
    return GetDirectConditionStep(step1) == GetDirectConditionStep(child)
}

function GetDirectConditionStep(child) {
    while (!IsNull(child) && child.nodeName != "#document") {
        var attr = child.getAttribute("stepname");
        if (attr == ConditionStepName)
            return child;
        child = child.parentNode
    }
    return null
}

function SelectedStepIsIfBranchWithNoSibling() {
    var selectedStep = GetSelectedWorkflowStep();
    if (selectedStep.getAttribute("stepname") == "IfCondition") {
        var parentStep = GetConditionStep(selectedStep),
            children = GetConditionStepChildren(parentStep);
        if (children[0] == 1 && children[1] == 0 && children[2] == 0)
            return true
    }
    return false
}

function SelectWorkflowStep(id) {
    if (isNullOrEmptyString(id) || id.toLowerCase() == "nostep")
        return;
    var el = $get(id);
    !IsNull(el) &&
        SelectStep(el)
}

function ConfigureFormEntity(domEvent, workflowId, stepId, primaryEntityName, mode) {
    domEvent.stopPropagation();
    var el = XUI.Html.DomUtils.GetNextSibling(domEvent.target);
    if (IsNull(el))
        return;
    var arrTokens = el.id.split("_"),
        entityNameValue = GetEntityNameValue(arrTokens[0], mode);
    if (IsNull(entityNameValue))
        return;
    var entityName = entityNameValue,
        relatedAttributeName = null;
    if (entityName.indexOf(".") > 0) {
        var nameArray = entityName.split(".");
        if (nameArray.length == 3)
            entityName = nameArray[0];
        else {
            relatedAttributeName = nameArray[1];
            entityName = nameArray[0]
        }
    }
    if (mode == "3") {
        primaryEntityName = entityName;
        entityName = "email"
    }
    var param;
    if (el.value.length > 0 && el.value == entityName) {
        param = "workflowId=" + CrmEncodeDecode.CrmUrlEncode(workflowId);
        param += "&entityname=" + CrmEncodeDecode.CrmUrlEncode(entityName);
        param += "&activityname=" + CrmEncodeDecode.CrmUrlEncode(arrTokens[0])
    } else {
        param = "entityname=" + CrmEncodeDecode.CrmUrlEncode(entityName);
        param += "&workflowId=" + CrmEncodeDecode.CrmUrlEncode(workflowId)
    }
    param += "&stepId=" + CrmEncodeDecode.CrmUrlEncode(arrTokens[0]);
    param += "&entityFullName=" + entityNameValue;
    if (!IsNull(primaryEntityName))
        param += "&primaryentity=" + CrmEncodeDecode.CrmUrlEncode(primaryEntityName);
    if (!IsNull(relatedAttributeName))
        param += "&relatedattributename=" + CrmEncodeDecode.CrmUrlEncode(relatedAttributeName);
    var readonlyMode = GetReadonlyMode(arrTokens[0], mode);
    if (readonlyMode)
        param += "&readonlymode=" + CrmEncodeDecode.CrmUrlEncode("true");
    if (!IsNull(mode))
        param += "&mode=" + mode;
    if (mode == "3")
        param += "&templateId=" + stepId;
    var oWindowInfo = GetWindowInformation(Workflow),
        iDialogX = oWindowInfo.Width,
        iDialogY = oWindowInfo.Height;
    if (entityName == "annotation") {
        oWindowInfo = GetWindowInformation(Annotation);
        iDialogX = oWindowInfo.Width + 220;
        iDialogY = oWindowInfo.Height + 150;
        var dialogUrl = oWindowInfo.Url +
                "?stepId=" +
                stepId +
                "&pId=" +
                CrmEncodeDecode.CrmUrlEncode(workflowId) +
                "&pType=4703",
            command = new RemoteCommand("Workflow", "GetWorkflowStepNoteId");
        command.SetParameter("activityId", stepId);
        command.SetParameter("entityId", workflowId);
        var oResult = command.Execute();
        if (oResult.Success && oResult.ReturnValue.length > 0)
            dialogUrl += "&id=" + CrmEncodeDecode.CrmUrlEncode(oResult.ReturnValue);
        if (readonlyMode)
            dialogUrl += "&readonlymode=" + CrmEncodeDecode.CrmUrlEncode("true");
        openStdWin(Mscrm.CrmUri.create(dialogUrl), entityName, iDialogX, iDialogY);
        !readonlyMode &&
            UpdateStepDescription()
    } else {
        var parameters = [arrTokens[0], entityNameValue, mode],
            callbackFunc = Mscrm.Utilities
                .createCallbackFunctionObject("PerformActionAfterConfigureFormEntity", this, parameters, false),
            sRetVal = openStdDlgWithCallback(Mscrm.CrmUri.create("/SFA/Workflow/entityform.aspx?" + param),
                {},
                iDialogX,
                iDialogY + 20,
                callbackFunc,
                true,
                false,
                "maximize:yes;minimize:yes");
        isOutlookHostedWindow() &&
            PerformActionAfterConfigureFormEntity(sRetVal, arrTokens[0], entityNameValue, mode)
    }
}

function PerformActionAfterConfigureFormEntity(sRetVal, arrToken, entityNameValue, mode) {
    sRetVal != null &&
        sRetVal.length > 0 &&
        SetStepConfiguration(arrToken, entityNameValue, sRetVal, mode)
}

function GetEntityNameValue(stepName, mode) {
    if (mode == "2")
        return "email";
    var elLstCtrl = Mscrm.FormControlInputBehavior.GetBehavior(stepName + "_entitylstwfc");
    if (elLstCtrl === null) {
        var elLst = $get(stepName + "_entitylstwfc");
        return elLst.value
    } else
        return elLstCtrl.get_dataValue()
}

function GetReadonlyMode(stepName, mode) {
    var elLst;
    if (mode == "2")
        elLst = $get(stepName + "_sendemailfromwfc");
    else
        elLst = $get(stepName + "_entitylstwfc");
    return elLst.disabled
}

function WorkflowEntityLstChange(domEvent, mode) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        elInput = $get(arrTokens[0] + "_activitystatewfc"),
        elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el);
    if (elInput.value.length > 0)
        if (confirm(LOCID_CONFIRM_CHANGE_ENTITY)) {
            elInput.value = "";
            CleanUpAttachment($get("crmFormSubmit").crmFormSubmitId.value, arrTokens[0])
        } else {
            elCtrl.set_dataValue(elCtrl.get_defaultValue());
            return false
        }
    var focusElementId = el.id,
        entityName = elCtrl.get_dataValue();
    if (entityName.indexOf(".") > 0)
        entityName = entityName.split(".")[0];
    var config = "<" + entityName + "/>";
    SetStepConfiguration(arrTokens[0], elCtrl.get_dataValue(), config, mode);
    window.setTimeout("ReFocusOnList('" + focusElementId + "');", 1);
    return true
}

function ReFocusOnList(focusElementId) {
    var focusElement = $get(focusElementId);
    !IsNull(focusElement) &&
        focusElement.focus()
}

function SetStepConfiguration(stepId, entity, formConfig, stepMode) {
    var sb = new StringBuilder;
    sb.Append("<and>");
    if (stepMode == "3") {
        var eType = $get(stepId + "_sendemailfromwfc"),
            eTypeCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(eType),
            eTypeValue;
        if (eTypeCtrl.get_dataValue() != undefined)
            eTypeValue = eTypeCtrl.get_dataValue();
        else
            eTypeValue = eType.value;
        sb.Append('<condition><column id="colAction" value="sendemail"></column>');
        sb.Append('<column id="colType" value="' + eTypeValue + '"></column>');
        if (formConfig.indexOf("<templateid>") > 0) {
            var templateId = formConfig.substring(formConfig.indexOf("<templateid>"));
            formConfig = formConfig.substring(0, formConfig.indexOf("<templateid>"));
            templateId = templateId.substring(templateId.indexOf(">") + 1, templateId.indexOf("</templateid>"));
            sb.Append('<column id="colTemplate" value="' + templateId + '"></column>')
        }
    } else if (stepMode == "2") {
        var eType = $get(stepId + "_sendemailfromwfc"),
            eTypeCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(eType),
            eTypeValue;
        if (eTypeCtrl.get_dataValue() != undefined)
            eTypeValue = eTypeCtrl.get_dataValue();
        else
            eTypeValue = eType.value;
        sb.Append('<condition><column id="colAction" value="sendemail"></column>');
        sb.Append('<column id="colType" value="' + eTypeValue + '"></column>')
    } else if (stepMode == "1")
        sb.Append('<condition><column id="colAction" value="update"></column>');
    else
        sb.Append('<condition><column id="colAction" value="create"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(entity) + '"></column>');
    sb.Append('<column id="colConfiguration" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(formConfig) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    if (stepMode == "2" || stepMode == "3")
        setSendEmailStep(stepId, sb.ToString());
    else if (stepMode == "1")
        setUpdateEntityStep(stepId, sb.ToString());
    else
        setCreateEntityStep(stepId, sb.ToString())
}

function OnSelectAssigneeReturn(sender, args) {
    var oLookup = sender,
        el = oLookup.get_element();
    UpdateAssigneeForControl(el)
}

function UpdateAssigneeForControl(el) {
    var arrTokens = el.id.split("_"),
        elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el),
        elLstCtrl = Mscrm.FormControlInputBehavior.GetBehavior(arrTokens[0] + "_entitylstwfc");
    if (IsNull(elCtrl.get_dataValue()))
        UpdateAssignStep(arrTokens[0], elLstCtrl.get_dataValue(), "");
    else
        UpdateAssignStep(arrTokens[0], elLstCtrl.get_dataValue(), elCtrl.get_dataXml())
}

function OnAssignStepEntityLstChange(domEvent) {
    var el = domEvent.target,
        elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el),
        arrTokens = el.id.split("_"),
        elLu = Mscrm.FormControlInputBehavior.GetBehavior(arrTokens[0] + "_lookupwfc");
    if (!IsNull(elLu.get_dataValue()) || IsDataSlugSpecified(elLu))
        if (confirm(LOCID_CONFIRM_CHANGE_ENTITY))
            elLu.Clear();
        else {
            elCtrl.set_dataValue(elCtrl.get_defaultValue());
            return false
        }
    UpdateAssignStep(arrTokens[0], elCtrl.get_dataValue(), "")
}

function UpdateAssignStep(stepId, entityName, dataXml) {
    var sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="assign"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(entityName) + '"></column>');
    sb.Append('<column id="colConfiguration" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(dataXml) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    setAssignEntityStep(stepId, sb.ToString())
}

function UpdateStopWorkflowStep(stepId, stepStatus, dataXml) {
    var sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="stopWorkflow"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(stepStatus) + '"></column>');
    sb.Append('<column id="colConfiguration" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(dataXml) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    setStopWorkflowStep(stepId, sb.ToString())
}

function OnSendEmailFromChanged(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        elInput = $get(arrTokens[0] + "_activitystatewfc");
    if (elInput.value.length > 0)
        if (confirm(LOCID_CONFIRM_CHANGE_ENTITY)) {
            elInput.value = "";
            CleanUpAttachment($get("crmFormSubmit").crmFormSubmitId.value, arrTokens[0])
        } else {
            var elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el);
            elCtrl.set_dataValue(elCtrl.get_defaultValue());
            return false
        }
    var elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el),
        sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="sendemail"></column>');
    sb.Append('<column id="colType" value="');
    sb.Append(elCtrl.get_dataValue());
    sb.Append('"></column>');
    sb.Append('<column id="colParameter" value=""></column>');
    sb.Append('<column id="colConfiguration" value=""></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    setSendEmailStep(arrTokens[0], sb.ToString());
    return true
}

function CleanUpAttachment(workflowId, stepId) {
    if (IsNull(workflowId) || IsNull(stepId))
        return;
    var command;
    command = new RemoteCommand("Workflow", "DeleteAttachmentStep");
    command.SetParameter("workflowId", workflowId);
    command.SetParameter("stepId", stepId);
    command.Execute()
}

function OnSelectChildWorkflowReturn(sender, args) {
    var el = sender.get_element(),
        arrTokens = el.id.split("_"),
        elLst = $get(arrTokens[0] + "_entitylstwfc"),
        elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el),
        elLstCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLst);
    UpdateChildworkflowStep(arrTokens[0], elLstCtrl.get_dataValue(), elCtrl.get_dataXml())
}

function OnSelectChildInteractiveWorkflowReturn(sender, args) {
    var lookup = sender.get_element(),
        arrTokens = lookup.id.split("_"),
        elLst = $get(arrTokens[0] + "_entitylstwfc"),
        elLstCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLst);
    UpdateChildInteractiveWorkflowStep(arrTokens[0], elLstCtrl.get_dataValue(), sender.get_dataXml())
}

function OnChildInteractiveWorkflowEntityChanged(domEvent) {
    var elist = domEvent.target,
        arrTokens = elist.id.split("_"),
        elLu = $get(arrTokens[0] + "_lookupwfc"),
        elLuControl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLu);
    elLuControl != null &&
        elLuControl.Clear();
    var elistCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elist);
    UpdateChildInteractiveWorkflowStep(arrTokens[0], elistCtrl.get_dataValue(), "")
}

function OnChildWorkflowEntityChanged(domEvent) {
    var elist = domEvent.target,
        arrTokens = elist.id.split("_"),
        elLu = $get(arrTokens[0] + "_lookupwfc"),
        elLuControl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLu);
    elLuControl != null &&
        elLuControl.Clear();
    var elistCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elist);
    UpdateChildworkflowStep(arrTokens[0], elistCtrl.get_dataValue(), "")
}

function UpdateChildworkflowStep(stepId, entityName, dataXml) {
    setChildWorkflowStep(stepId, getChildWorkflowXML(entityName, dataXml))
}

function getChildWorkflowXML(entityName, dataXml) {
    var sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="childworkflow"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(entityName) + '"></column>');
    sb.Append('<column id="colConfiguration" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(dataXml) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    return sb.ToString()
}

function UpdateChildInteractiveWorkflowStep(stepId, entityName, dataXml) {
    setChildInteractiveWorkflowStep(stepId, getChildWorkflowXML(entityName, dataXml))
}

function ConfigureAssignTarget(domEvent, workflowId, customStepCategory) {
    domEvent.stopPropagation();
    var el = XUI.Html.DomUtils.GetNextSibling(domEvent.target),
        arrTokens = el.id.split("_"),
        param;
    param = "workflowId=" + CrmEncodeDecode.CrmUrlEncode(workflowId);
    param += "&activityname=" + CrmEncodeDecode.CrmUrlEncode(arrTokens[0]);
    param += "&readonlymode=" + CrmEncodeDecode.CrmUrlEncode(domEvent.target.getAttribute("readonly"));
    param += "&customStepCategory=" + CrmEncodeDecode.CrmUrlEncode(customStepCategory);
    var parameters = new Array(arrTokens[0]),
        callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("PerformActionAfterConfigureAssignTarget", this, parameters, false),
        sRetVal = openStdDlgWithCallback(Mscrm.CrmUri.create("/SFA/Workflow/assignactivityform.aspx?" + param),
            {},
            850,
            600,
            callbackFunc);
    isOutlookHostedWindow() &&
        PerformActionAfterConfigureAssignTarget(sRetVal, arrTokens[0])
}

function PerformActionAfterConfigureAssignTarget(sRetVal, arrToken) {
    if (sRetVal != null && sRetVal.length > 0) {
        var elLst = $get(arrToken + "_entitylstwfc"),
            elistCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLst);
        UpdateAssignStep(arrToken, elistCtrl.get_dataValue(), sRetVal)
    }
}

function ConfigureStopWorkflowMessage(domEvent, workflowId, isReadOnly) {
    domEvent.stopPropagation();
    var el = XUI.Html.DomUtils.GetNextSibling(domEvent.target),
        arrTokens = el.id.split("_"),
        param;
    param = "workflowId=" + CrmEncodeDecode.CrmUrlEncode(workflowId);
    param += "&activityname=" + CrmEncodeDecode.CrmUrlEncode(arrTokens[0]);
    param += "&readonlymode=" + CrmEncodeDecode.CrmUrlEncode(isReadOnly);
    var parameters = [el, arrTokens[0]],
        callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("PerformActionAfterConfigureStopWorkflowMessage", this, parameters, false),
        sRetVal = openStdDlgWithCallback(Mscrm.CrmUri.create("/SFA/Workflow/statusMessageForm.aspx?" + param),
            {},
            850,
            600,
            callbackFunc);
    isOutlookHostedWindow() &&
        PerformActionAfterConfigureStopWorkflowMessage(sRetVal, el, arrTokens[0])
}

function PerformActionAfterConfigureStopWorkflowMessage(sRetVal, el, arrToken) {
    if (sRetVal != null && sRetVal.length > 0) {
        var sb = new StringBuilder;
        sb.Append("<and>");
        sb.Append('<condition><column id="colAction" value="assign"></column>');
        sb.Append('<column id="colParameter" value="');
        sb.Append(CrmEncodeDecode.CrmXmlEncode(el.value) + '"></column>');
        sb.Append('<column id="colConfiguration" value="');
        sb.Append(CrmEncodeDecode.CrmXmlEncode(sRetVal) + '"></column>');
        sb.Append("</condition>");
        sb.Append("</and>");
        var elLst = document.getElementById(arrToken + "_statelstwfc");
        if (elLst.DataValue != undefined)
            UpdateStopWorkflowStep(arrToken, elLst.DataValue, sRetVal);
        else
            UpdateStopWorkflowStep(arrToken, elLst.value, sRetVal)
    }
}

function ConfigureCustomActivity(domEvent, workflowId, customStepCategory) {
    domEvent.stopPropagation();
    var evEl = domEvent.target,
        el = XUI.Html.DomUtils.GetNextSibling(evEl),
        arrTokens = el.id.split("_"),
        param,
        messageName = "";
    if (customStepCategory.toUpperCase() == "SDKMESSAGE") {
        var sdkMessageIdElement = document.getElementById(arrTokens[0] + "_activitystatewfc");
        if (sdkMessageIdElement != null && sdkMessageIdElement.value != undefined)
            messageName = sdkMessageIdElement.value
    }
    param = "workflowId=" + CrmEncodeDecode.CrmUrlEncode(workflowId);
    param += "&activityname=" + CrmEncodeDecode.CrmUrlEncode(arrTokens[0]);
    param += "&readonlymode=" + CrmEncodeDecode.CrmUrlEncode(evEl.getAttribute("readonly"));
    param += "&customstepcategory=" + CrmEncodeDecode.CrmUrlEncode(customStepCategory);
    param += "&messageName=" + CrmEncodeDecode.CrmUrlEncode(messageName);
    var parameters = [el.value, arrTokens[0], customStepCategory],
        callBackRef = Mscrm.Utilities
            .createCallbackFunctionObject("ConfigureCustomActivityCallBack", this, parameters, false),
        sRetVal = openStdDlgWithCallback(Mscrm.CrmUri.create("/SFA/Workflow/customactivityform.aspx?" + param),
            {},
            850,
            600,
            callBackRef);
    isOutlookHostedWindow() &&
        ConfigureCustomActivityCallBack(sRetVal, el.value, arrTokens[0], customStepCategory)
}

function ConfigureCustomActivityCallBack(sRetVal, elValue, arrTokensZero, customStepCategory) {
    if (sRetVal != null && sRetVal.length > 0) {
        var sb = new StringBuilder;
        sb.Append("<and>");
        sb.Append('<condition><column id="colAction" value="customActivity"></column>');
        sb.Append('<column id="colParameter" value="');
        sb.Append(CrmEncodeDecode.CrmXmlEncode(elValue) + '"></column>');
        sb.Append('<column id="colConfiguration" value="');
        sb.Append(CrmEncodeDecode.CrmXmlEncode(sRetVal) + '"></column>');
        sb.Append("</condition>");
        sb.Append("</and>");
        setCustomActivityStep(arrTokensZero, sb.ToString(), customStepCategory)
    }
}

function OnVersionChanged(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        elCu = $get(arrTokens[0] + "_version"),
        elCuCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elCu);
    if (!IsNull(elCuCtrl.get_dataValue())) {
        var sb = new StringBuilder;
        sb.Append("<and>");
        sb.Append('<condition><column id="colAction" value="version"></column>');
        sb.Append('<column id="colParameter" value="');
        sb.Append(CrmEncodeDecode.CrmXmlEncode(el.value) + '"></column>');
        sb.Append('<column id="colConfiguration" value=""></column>');
        sb.Append("</condition>");
        sb.Append("</and>");
        setCustomActivityStep(arrTokens[0], sb.ToString())
    }
}

function OnInvokeSdkMessageOptionChange(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        sdkMessageList = $get(arrTokens[0] + "_sdkmessagewfc"),
        command,
        parentStep = GetSelectedWorkflowStep();
    command = new RemoteCommand("Workflow", "UpdateInvokedMessageOfInvokeSdkMessageStep");
    command.SetParameter("entityId", $get("crmFormSubmit").crmFormSubmitId.value);
    command.SetParameter("activityId", arrTokens[0]);
    command.SetParameter("sdkMessageId",
        Mscrm.FormControlInputBehavior.GetElementBehavior(sdkMessageList).get_dataValue());
    ExecuteCommandAndRefreshWorkflowArea(arrTokens[0], command);
    return null
}

function OnInvokeEntityOptionChange(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        sdkMessageList = $get(arrTokens[0] + "_sdkmessagewfc"),
        entityLst = $get(arrTokens[0] + "_entitylstwfc"),
        command,
        parentStep = GetSelectedWorkflowStep();
    command = new RemoteCommand("Workflow", "UpdateInvokeSdkMessageStepEntity");
    command.SetParameter("entityId", $get("crmFormSubmit").crmFormSubmitId.value);
    command.SetParameter("activityId", arrTokens[0]);
    command.SetParameter("sdkMessageId",
        Mscrm.FormControlInputBehavior.GetElementBehavior(sdkMessageList).get_dataValue());
    command.SetParameter("sdkMessageFilterId",
        Mscrm.FormControlInputBehavior.GetElementBehavior(entityLst).get_dataValue());
    ExecuteCommandAndRefreshWorkflowArea(arrTokens[0], command);
    return null
}

function OnChangeStatusStepStateChanged(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        elLst = $get(arrTokens[0] + "_entitylstwfc"),
        stLst = $get(arrTokens[0] + "_statuslstwfc"),
        sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="changeStatus"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetElementBehavior(elLst).get_dataValue()) +
        '"></column>');
    sb.Append('<column id="colStatus" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetElementBehavior(stLst).get_dataValue()) +
        '"></column>');
    sb.Append('<column id="colState" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(StatusToState(stLst)) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    setChangeStatusStep(arrTokens[0], sb.ToString())
}

function StatusToState(stLst) {
    var stLstCtrl = Mscrm.FormControlInputBehavior.GetBehavior(stLst.id),
        state = null;
    XUI.Html.DomUtils.ForEachChild(stLst,
        Function.createDelegate(this,
            function(oGroup) {
                XUI.Html.DomUtils.ForEachChild(oGroup,
                    Function.createDelegate(this,
                        function(child) {
                            if (child.value == stLstCtrl.get_dataValue())
                                state = oGroup.id
                        }))
            }));
    return state
}

function OnChangeStatusStepEntityLstChanged(domEvent) {
    var elLst = domEvent.target,
        elLstCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(elLst),
        arrTokens = elLst.id.split("_"),
        stLst = $get(arrTokens[0] + "_statuslstwfc"),
        stateVal,
        endLoop = false,
        statusVal = elLstCtrl.get_dataValue();
    XUI.Html.DomUtils.ForEachChild(elLst,
        Function.createDelegate(this,
            function(oGroup) {
                XUI.Html.DomUtils.ForEachChild(oGroup,
                    Function.createDelegate(this,
                        function(child) {
                            if (endLoop)
                                return;
                            if (child.tagName.toUpperCase() == "OPTION" && statusVal) {
                                stateVal = child.getAttribute("state");
                                endLoop = true;
                                return
                            }
                        }))
            }));
    var val = CrmEncodeDecode.CrmXmlDecode(stateVal);
    if (val.indexOf("<") == -1)
        val = CrmEncodeDecode.CrmXmlDecode(val);
    var oXml = XUI.Xml.LoadXml(val);
    stLst.innerHTML = "";
    for (var oNodes = XUI.Xml.SelectNodes(oXml, "/states/state", null),
        iSize = oNodes.length,
        i = 0;
        i < iSize;
        i++) {
        var oNode = oNodes[i],
            groupId = oNode.getAttribute("value"),
            stLstComponent = Mscrm.FormControlInputBehavior.GetElementBehavior(stLst);
        stLstComponent.AddOptionGroup(oNode.getAttribute("label"), groupId, "asending");
        for (var statusNodes = oNode.childNodes,
            len = statusNodes ? statusNodes.length : 0,
            j = 0;
            j < len;
            j++) {
            var statusNode = statusNodes[j];
            stLstComponent.AddOption(CrmEncodeDecode.CrmXmlDecode(statusNode.getAttribute("label")),
                statusNode.getAttribute("value"),
                groupId)
        }
    }
    stLstComponent.set_selectedIndex(0);
    stLstComponent.fireOnChange()
}

function OnChangeStopWorkflowLstChanged(domEvent) {
    var el = domEvent.target,
        arrTokens = el.id.split("_"),
        elCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(el),
        sb = new StringBuilder;
    sb.Append("<and>");
    sb.Append('<condition><column id="colAction" value="stopWorkflow"></column>');
    sb.Append('<column id="colParameter" value="');
    sb.Append(CrmEncodeDecode.CrmXmlEncode(elCtrl.get_dataValue()) + '"></column>');
    sb.Append("</condition>");
    sb.Append("</and>");
    setStopWorkflowStep(arrTokens[0], sb.ToString())
}

var WorkflowStepDescriptionCache = [];

function OnWFStepDescriptionChange(domEvent) {
    var el = domEvent.target,
        elValue = el.value,
        defaultValue = el.getAttribute("DefaultValue");
    if (elValue.length != defaultValue.length || elValue != defaultValue) {
        var arrTokens = el.id.split("_");
        WorkflowStepDescriptionCache[arrTokens[0]] = elValue
    }
}

function GetWFStepDescriptionXml() {
    var isThereChange = false,
        sb = new StringBuilder;
    sb.Append("<steps>");
    var stepName;
    for (stepName in WorkflowStepDescriptionCache) {
        sb.Append("<step><name>");
        sb.Append(CrmEncodeDecode.CrmXmlEncode(stepName));
        sb.Append("</name>");
        sb.Append("<description>");
        sb.Append(CrmEncodeDecode.CrmXmlEncode(WorkflowStepDescriptionCache[stepName]));
        sb.Append("</description>");
        sb.Append("</step>");
        isThereChange = true
    }
    sb.Append("</steps>");
    if (!isThereChange)
        return "";
    else
        return sb.ToString()
}

function IsWFDescriptionModified() {
    for (stepName in WorkflowStepDescriptionCache)
        return true;
    return false
}

function ResetWFStepDescriptionArray() {
    WorkflowStepDescriptionCache = []
}

function ExpandCollapseStep(divId, imgId) {
    var element = $get(divId),
        img = $get(imgId);
    if (!IsNull(element) && !IsNull(img) && !IsNull(stepImageOpen) && !IsNull(stepImageClose))
        if (element.style.display == "block") {
            element.style.display = "none";
            img.setAttribute("src", stepImageOpen.getAttribute("src"));
            _expandCollapseArray[divId] = imgId
        } else {
            element.style.display = "block";
            img.setAttribute("src", stepImageClose.getAttribute("src"));
            _expandCollapseArray[divId] = null
        }
}

function RecollapseSteps() {
    var divId;
    for (divId in _expandCollapseArray) {
        var imgId = _expandCollapseArray[divId];
        !IsNull(imgId) &&
            ExpandCollapseStep(divId, imgId)
    }
}

function IsDataSlugSpecified(dataControl) {
    var control = GetValueControlWithSlug(dataControl),
        slugControl = Mscrm.FormUtility.getSlugBehavior(control);
    if (slugControl)
        return slugControl.get_isDataSlug();
    return false
}

function SaveAndCloseCustomStepConfiguration() {
    var sb = new StringBuilder,
        i = 0,
        index = 0;
    sb.Append("<parameters>");
    var parameterControl = $get("ParameterValue" + i);
    while (!IsNull(parameterControl)) {
        sb.Append('<parameter name="' + parameterControl.getAttribute("parametername") + '">');
        var isRequired = false;
        if (parameterControl.getAttribute("required") == "True")
            isRequired = true;
        if (IsDataSlugSpecified(parameterControl)) {
            var slugControl = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(parameterControl)),
                oXml = XUI.Xml.LoadXml(CrmEncodeDecode.CrmHtmlDecode(slugControl.get_slugValue())),
                oNodes = XUI.Xml.SelectNodes(oXml, "//slugbody", null);
            oNodes.length == 1 &&
                sb.Append(XUI.Xml.XMLSerializer.serializeToString(oNodes[0]))
        } else
            switch (parameterControl.getAttribute("parameterType")) {
            case "CrmBoolean":
                var boolValue = null,
                    ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(parameterControl);
                boolValue = ctrl.get_dataValue();
                if (!IsNull(boolValue))
                    sb.Append(boolValue);
                else if (isRequired) {
                    alert(formatString(LOCID_MSG_VALUEREQUIRED, parameterControl.getAttribute("parametername")));
                    return
                }
                break;
            case "CrmDateTime":
                if (isRequired && isNullOrEmptyString($get("DateInput", parameterControl).value)) {
                    alert(formatString(LOCID_MSG_VALUEREQUIRED, parameterControl.getAttribute("parametername")));
                    return
                }
                var ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(parameterControl);
                if (!IsNull(ctrl.get_dataValue())) {
                    var oXml = XUI.Xml.LoadXml(ctrl.get_dataXml()),
                        oNodes = XUI.Xml.SelectNodes(oXml, "/", null);
                    oNodes.length == 1 &&
                        sb.Append(XUI.Xml.GetText(oNodes[0].firstChild))
                }
                break;
            case "Lookup":
            case "Owner":
            case "Customer":
                var lookupControls = parameterControl.parentNode.parentNode.getElementsByTagName("SPAN");
                if (lookupControls.length > 0 && lookupControls[0].className == "ms-crm-Lookup-Item") {
                    var lookupItem = lookupControls[0];
                    sb.Append("<refId>" + lookupItem.getAttribute("oid") + "</refId>");
                    sb.Append("<refType>" + lookupItem.getAttribute("otype") + "</refType>");
                    sb.Append("<refLabel>" + CrmEncodeDecode.CrmXmlEncode(XUI.Html.GetText(lookupItem)) + "</refLabel>")
                } else if (isRequired) {
                    var displayName = parameterControl.getAttribute("parametername");
                    if (displayName.indexOf("_") > 0 && displayName.split("_").length > 3) {
                        var indexofName = displayName.split("_");
                        displayName = displayName.substring(displayName.indexOf(indexofName[3]), displayName.length);
                        alert(formatString(LOCID_MSG_VALUEREQUIRED, displayName))
                    } else
                        alert(formatString(LOCID_MSG_VALUEREQUIRED, parameterControl.getAttribute("parametername")));
                    return
                }
                break;
            default:
                if (isRequired && isNullOrEmptyString(parameterControl.value)) {
                    alert(formatString(LOCID_MSG_VALUEREQUIRED, parameterControl.getAttribute("parametername")));
                    return
                }
                var ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(parameterControl);
                sb.Append(CrmEncodeDecode.CrmXmlEncode(ctrl.get_dataValue()));
                break
            }
        sb.Append("</parameter>");
        i++;
        parameterControl = $get("ParameterValue" + i)
    }
    sb.Append("</parameters>");
    Mscrm.Utilities.setReturnValue(sb.ToString());
    closeWindow()
}

function SetFieldFocusAtOnLoad(activeElement) {
    if (!IsNull(activeElement)) {
        var element = activeElement;
        while (!IsNull(element.parentNode)) {
            if (!isNullOrEmptyString(element.id))
                break;
            element = element.parentNode
        }
        if (Sys.UI.DomElement.containsCssClass(activeElement, "ms-crm-Lookup")) {
            element = element.getElementsByTagName("IMG");
            !IsNull(element) &&
                element.length > 0 &&
                SetFieldFocus(element[0])
        } else if (activeElement.className == "ms-crm-DateTime") {
            element = element.getElementsByTagName("INPUT");
            !IsNull(element) &&
                element.length > 0 &&
                SetFieldFocus(element[0])
        } else
            SetFieldFocus(element)
    }
}

function SetFieldFocus(ele) {
    if (ele.nodeName != "#document" &&
        XUI.Html.GetComputedStyle(ele, "display") != "none" &&
        XUI.Html.GetComputedStyle(ele, "visibility") != "hidden" &&
        !ele.isDisabled) {
        var focusEvent = XUI.Html.CreateDomEvent("focus");
        XUI.Html.DispatchDomEvent(ele, focusEvent)
    }
}

function CanSetFocus(ele) {
    while (!IsNull(ele)) {
        if (ele.nodeName != "#document" &&
        (XUI.Html.GetComputedStyle(ele, "display") == "none" ||
            XUI.Html.GetComputedStyle(ele, "visibility") == "hidden" ||
            ele.getAttribute("disabled") ||
            ele.isDisabled))
            return false;
        ele = ele.parentNode
    }
    return true
}

function GetHiddenDataTypeMappingInfo(dataType) {
    try {
        var command,
            _workflowId = null;
        if (!IsWorkflowEditForm())
            return null;
        if (!IsNull($get2("hidWorkflowId")) && !IsNull(currControl))
            _workflowId = $get2("hidWorkflowId").value;
        else
            _workflowId = $get("crmFormSubmit").crmFormSubmitId.value;
        command = new RemoteCommand("Workflow", "GetDataTypeMappingInfo");
        command.SetParameter("workflowId", _workflowId);
        command.SetParameter("dataType", dataType);
        var oResult = command.Execute();
        if (oResult.Success)
            return oResult.ReturnValue
    } catch (e) {
    }
    return null
}

function GetEntityListMappingInfo(dataType) {
    try {
        var command;
        if (!IsWorkflowEditForm())
            return null;
        command = new RemoteCommand("Workflow", "GetEntityListHtml");
        command.SetParameter("workflowId", $get("crmFormSubmit").crmFormSubmitId.value);
        command.SetParameter("dataType", dataType);
        var oResult = command.Execute();
        if (oResult.Success)
            return oResult.ReturnValue
    } catch (e) {
    }
    return null
}

function IsWorkflowEditForm() {
    var stepArea = $get2("gridDefinitionContainer");
    if (IsNull(stepArea) || stepArea.className != "wfWorkflowStepArea")
        return false;
    return true
}

function GetDefaultSlugValue(controlId) {
    for (var slugInfoList = CrmEncodeDecode.CrmXmlDecode($get2("hidSlugInfo").value).split("<;>"),
        index = 0,
        index = 0;
        index < slugInfoList.length;
        index++) {
        var info = slugInfoList[index],
            infoList = info.split("<:>");
        if (infoList[0] == controlId)
            return "<slugbody>" + infoList[1] + "</slugbody>"
    }
    return ""
}

function CheckParameters() {
    var parameterIndex = 0,
        parameter = $get("ParameterValue" + parameterIndex);
    while (!IsNull(parameter)) {
        var slug = GetValueControlWithSlug(parameter);
        if (!IsNull(slug) && slug.IsDataSlug) {
            if (slug.IsSlugDirty)
                return false
        } else if (parameter.IsDirty || IsSlugDeleted(parameter))
            return false;
        parameterIndex++;
        parameter = $get("ParameterValue" + parameterIndex)
    }
    return true
}

function ExceedMaximumNestedTables() {
    var el = GetSelectedWorkflowStep();
    if (IsNull(el))
        return false;
    var numTables = 0;
    while (!IsNull(el)) {
        if (el.id == $Id("gridDefinitionContainer"))
            break;
        if (el.tagName.toLowerCase() == "table")
            numTables++;
        el = el.parentNode
    }
    return numTables >= maximumNestedTables
}

function AddHyperlinkEmailBody() {
    addHyperlink("description");
    try {
        var _oIFrame = $get("descriptionIFrame"),
            _oEmailBody = _oIFrame.contentWindow;
        SetCaretPosition(_oEmailBody.document.body, _oEmailBody.document.body.innerHTML.length)
    } catch (e) {
    }
}

function addHyperlink(textControlId) {
    var oDialogArgs = {};
    oDialogArgs.Xml = "";
    var oUrl = Mscrm.CrmUri.create("/SFA/workflow/dlg_insert_hyperlink.aspx"),
        query = oUrl.get_query();
    query["EntityId"] = ENTITYID;
    query["StepId"] = STEPID;
    var parameters = new Array(textControlId),
        callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterInsertHyperlink", this, parameters, false),
        hyperlinkText = openStdDlgWithCallback(oUrl, oDialogArgs, 843, 504, callbackFunc);
    isOutlookHostedWindow() &&
        performActionAfterInsertHyperlink(hyperlinkText, textControlId)
}

function performActionAfterInsertHyperlink(hyperlinkText, textControlId) {
    var textControl = $get(textControlId);
    !isNullOrEmptyString(hyperlinkText) &&
        InsertHyperLinkSlug(hyperlinkText, textControlId)
}

function IsDateControl(control) {
    if (!IsNull(control)) {
        var format = control.getAttribute("format");
        return !IsNull(format) && (format == "datetime" || format == "date")
    }
    return false
}