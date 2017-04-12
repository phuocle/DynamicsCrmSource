
var _numStageSteps = 0,
    _insertDirection = "after",
    _currentSelectedControlId = null,
    _bAllAttrSelected = false,
    optionsImageOpen = new Image;
optionsImageOpen.src = "/_imgs/ico_16_collapsed.png";
var optionsImageClose = new Image;
optionsImageClose.src = "/_imgs/ico_16_expanded.png";
var _oldCreateStage = "",
    _oldUpdateStage = "",
    _oldDeleteStage = "",
    _oldSyncWorfklowLogOnFailure = false,
    _oldRunAs = "",
    runAsCurrentValue = 1,
    addStepMenuCtrl = null,
    rendererTypeCode = "",
    parentStepId = "",
    isLastChildReturned = false,
    Clone = {};

function SetRenderTypeCode(_rendererTypeCode) {
    rendererTypeCode = _rendererTypeCode
}

function GetSelectedWFStepForActionControl() {
    var el = GetSelectedWorkflowStep(),
        StepContainer = $get($get2("hidBaseStepId").value + "DIV");
    if (StepContainer == null)
        return null;
    var childElements = Mscrm.Utilities.getChildElementsByClassName(StepContainer, "ms-crm-workflow-outer", false);
    if (el == null && childElements != null && childElements.length > 0) {
        isLastChildReturned = true;
        return childElements[childElements.length - 1]
    }
    el = $get(el.id, StepContainer);
    if (el != null)
        return el;
    else if (childElements != null && childElements.length > 0) {
        isLastChildReturned = true;
        return childElements[childElements.length - 1]
    }
}

function WorkflowActionsCntrlOnLoad(Name, IdsToHide, IdsToClone) {
    SetCurrentControl(Name);
    ResetWFStepDescriptionArray();
    EnableDisableDeleteBtn();
    AddStepToMenuControl();
    PopulateAssignStepSlugs();
    AttachOnChangeEventsToLookups();
    RemoveBlankOptionFromCreateStep();
    LoadWorkflowEventNotification();
    DisableDescriptionAndOtherwiseText();
    HideSteps(IdsToHide);
    if (!IsNull(IdsToClone)) {
        IdsToClone.type = "string";
        Clone[Name] = IdsToClone
    }
}

function HideSteps(IdsToHide) {
    if (IsNull(IdsToHide) || IdsToHide.length == 0)
        return;
    for (var styleSheet = document.createElement("style"),
        i = 0;
        i < IdsToHide.length;
        i++)
        styleSheet.innerHTML += "#" + CrmEncodeDecode.CrmHtmlEncode(IdsToHide[i]) + "{display:none;} ";
    document.body.appendChild(styleSheet)
}

function DisableDescriptionAndOtherwiseText() {
    var container = $get($Id("gridDefinitionContainer")),
        tdElements = Mscrm.Utilities.getChildElementsByClassName(container, "ms-crm-workflow-stepData", true);
    if (tdElements != null && tdElements.length > 0)
        for (var tdElement = tdElements[0],
            i = 0;
            i < tdElement.childNodes.length;
            i++) {
            var childNode = tdElement.childNodes[i];
            if (!IsNull(childNode.tagName) && childNode.tagName.toLowerCase() == "a")
                childNode.style.display = "none";
            if (IsNull(childNode.tagName))
                childNode.nodeValue = ""
        }
    var descElements = Mscrm.Utilities
        .getChildElementsByClassName(container, "ms-crm-Input-Container wfStepDescription", false);
    if (descElements != null)
        for (i = 0; i < descElements.length; i++)
            descElements[i].style.display = "none"
}

function LoadWorkflowEventNotification() {
    var errMessage = CrmEncodeDecode.CrmXmlDecode($get2("workflowErrorMessage").value);
    !IsNull(errMessage) &&
        errMessage.length != 0 &&
        $find("WorkflowNotifications").AddNotification("invalidWorkflow", Mscrm.Severity.SEVERITYERROR, "", errMessage)
}

function AttachOnChangeEventsToLookups(selectedLookups) {
    for (var lookups = IsNull(selectedLookups) ? document.documentElement.getElementsByTagName("IMG") : selectedLookups,
        expectedSuffix = "_lookupwfc",
        i = 0;
        i < lookups.length;
        i++) {
        var currentLookup = lookups[i],
            controlId = currentLookup.id,
            pos = controlId.lastIndexOf(expectedSuffix);
        if (pos == controlId.length - expectedSuffix.length) {
            var control = Mscrm.FormControlInputBehavior.GetElementBehavior(currentLookup);
            if (!IsNull(control))
                if (controlId.indexOf("Assign") == 0) {
                    control.remove_change(OnSelectAssigneeReturn);
                    control.add_change(OnSelectAssigneeReturn)
                } else if (controlId.indexOf("ChildWorkflow") == 0) {
                    control.remove_change(OnSelectChildWorkflowReturn);
                    control.add_change(OnSelectChildWorkflowReturn)
                }
        }
    }
}

function OnAssigneeSlugDelete(sender, args) {
    var el = getLookUpElementWithEvent(sender);
    UpdateAssigneeForControl(el)
}

function IsWorkflowDirty() {
    if (IsWFDescriptionModified())
        return true
}

function RemoveBlankOptionFromCreateStep() {
    for (var buttons = document.documentElement.getElementsByTagName("button"),
        length = buttons.length,
        i = 0;
        i < length;
        i++) {
        var buttonControl = buttons[i];
        if (buttonControl.getAttribute("setDisabled") == "true") {
            var idTokens = buttonControl.id.split("_"),
                entityList = $get(idTokens[0] + "_entitylstwfc");
            if (entityList.options[entityList.selectedIndex].value == "")
                buttonControl.setAttribute("disabled", true);
            else
                entityList.options[0].value == "" &&
                    entityList.options.remove(0)
        }
    }
}

function PopulateAssignStepSlugs() {
    if ($get("hidSlugInfo") != null && !IsNull(currControl))
        $get2("hidSlugInfo").value = $get("hidSlugInfo").value;
    SetAttributeTypeMapping("", null);
    for (var lookups = document.getElementsByTagName("IMG"),
        expectedSuffix = "_lookupwfc",
        expectedPrefix = "Assign",
        len = lookups.length,
        i = 0;
        i < len;
        i++) {
        var controlId = lookups[i].id,
            pos = controlId.lastIndexOf(expectedSuffix);
        pos == controlId.length - expectedSuffix.length &&
            controlId.substr(0, expectedPrefix.length) == expectedPrefix &&
            AddAttributeTypeMapping(controlId, "Owner")
    }
    PopulateSlugControlsWithCallback(CrmEncodeDecode.CrmXmlDecode($get2("hidSlugInfo").value),
        "deleteslugbody",
        OnAssigneeSlugDelete)
}

function OnAssigneeSlugDelete(sender, args) {
    var el = getLookUpElementWithEvent(sender);
    UpdateAssigneeForControl(el)
}

function RunAsChanged() {
    runAsCurrentValue = (runAsCurrentValue + 1) % 2
}

function OnWfFormClose(sender, args) {
    IsWorkflowDirty() &&
        args.preventDefault()
}

function OnWfFormSubmit(domEvent) {
    if (!$get2("hidPrimaryEntity").value) {
        alert(LOCID_WARN_TO_SPECIFY_ENTITY);
        domEvent.stopPropagation();
        return false
    }
    var oCrmFormSubmit = $get("crmFormSubmit"),
        s = oCrmFormSubmit.crmFormSubmitXml.value;
    s = s.replace(/<selectWorkflowEntityName.*selectWorkflowEntityName>/, "");
    s = s.replace(/<[^<]*customOperationArguments[^>]*>[^>]*customOperationArguments[^>]*>/g, "");
    s = s.replace(/<[^<]*wfc[^>]*>[^>]*wfc>/g, "");
    oCrmFormSubmit.crmFormSubmitXml.value = s;
    PostbackCollapsedStageControlIdList();
    if (IsWFDescriptionModified()) {
        createHiddenInput("descriptionXml", GetWFStepDescriptionXml());
        return true
    }
}

function AddFocusEvent(element, onFocusCallback) {
    if (element == null || onFocusCallback == null)
        return;
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version <= 8)
        $addHandler(element, "focusin", onFocusCallback);
    else
        element.addEventListener("focus", onFocusCallback, true)
}

function RemoveFocusEvent(element, onFocusCallback) {
    if (element == null || onFocusCallback == null)
        return;
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version <= 8)
        element.onfocusin = null;
    else
        element.removeEventListener("focus", onFocusCallback, true)
}

function notifyChildClose() {
    RefreshWorkflowStepDelay()
}

function RefreshWorkflowStepDelay() {
    var el = GetSelectedWFStepForActionControl(),
        command = new RemoteCommand("Workflow", "RefreshWorkflowStep");
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command)
}

function GetWorkflowDefintionContainerElement() {
    return window.$get2("gridDefinitionContainer")
}

function setCreateEntityStep(oid, sValue) {
    if (oid == null || sValue == null)
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateCreateEntityStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("createXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function UpdateStepDescription() {
    var command;
    command = new RemoteCommand("Workflow", "SetStepDescription");
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(GetSelectedWFStepForActionControl(), command)
}

function addCreateEntityStep() {
    AddStepToMenuControl();
    if (IsStepEnabled($Id("mnu_AddStep_CreateStep"))) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddCreateEntityStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertCreateEntityStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        if (isLastChildReturned) {
            el = null;
            isLastChildReturned = false
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command);
        AddStepToMenuControl()
    }
}

function setUpdateEntityStep(oid, sValue) {
    if (oid == null || sValue == null)
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateUpdateEntityStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("createXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function addUpdateEntityStep() {
    AddStepToMenuControl();
    if (IsStepEnabled($Id("mnu_AddStep_UpdateStep"))) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddUpdateEntityStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertUpdateEntityStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        if (isLastChildReturned) {
            el = null;
            isLastChildReturned = false
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command);
        AddStepToMenuControl()
    }
}

function addAssignEntityStep(sender) {
    AddStepToMenuControl();
    if (IsStepEnabled($Id("mnu_AddStep_AssignStep"))) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddAssignEntityStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertAssignEntityStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        if (isLastChildReturned) {
            el = null;
            isLastChildReturned = false
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command);
        AddStepToMenuControl()
    }
}

function setAssignEntityStep(oid, sValue) {
    if (oid == null || sValue == null)
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateAssignEntityStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("assignXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function addSendEmailStep(sender) {
    AddStepToMenuControl();
    if (IsStepEnabled($Id("mnu_AddStep_SendEmailStep"))) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddSendEmailStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertSendEmailStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        if (isLastChildReturned) {
            el = null;
            isLastChildReturned = false
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command);
        AddStepToMenuControl()
    }
}

function setSendEmailStep(oid, sValue) {
    if (IsNull(oid) || IsNull(sValue))
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateSendEmailStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("emailXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function addChangeStatusStep(sender) {
    AddStepToMenuControl();
    if (IsStepEnabled($Id("mnu_AddStep_ChangeStatusStep"))) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddChangeStatusStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertChangeStatusStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        if (isLastChildReturned) {
            el = null;
            isLastChildReturned = false
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command);
        AddStepToMenuControl()
    }
}

function setChangeStatusStep(oid, sValue) {
    if (IsNull(oid) || IsNull(sValue))
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateChangeStatusStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("changeStatusXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function addChildWorkflowStep(sender) {
    AddStepToMenuControl();
    if (IsStepEnabled("mnu_AddStep_ChildWorkflowStep")) {
        var el = GetSelectedWFStepForActionControl(),
            command;
        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddChildWorkflowStep");
            if (!IsNull(el))
                command.SetParameter("parentId", el.getAttribute("parent"));
            else
                command.SetParameter("parentId", "");
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        } else {
            command = new RemoteCommand("Workflow", "InsertChildWorkflowStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
            command.SetParameter("direction", _insertDirection);
            command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
            command.SetParameter("rendererTypeCode", rendererTypeCode)
        }
        ExecuteCommandAndRefreshWorkflowArea(!IsNull(el) ? el.id : null, command)
    }
}

function setChildWorkflowStep(oid, sValue) {
    if (IsNull(oid) || IsNull(sValue))
        return;
    var command;
    command = new RemoteCommand("Workflow", "UpdateChildWorkflowStep");
    command.SetParameter("activityId", oid);
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    command.SetParameter("childWorkflowXml", sValue);
    command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
    command.SetParameter("rendererTypeCode", rendererTypeCode);
    ExecuteCommandAndRefreshWorkflowArea(oid, command)
}

function deleteStep(sender) {
    AddStepToMenuControl();
    var deleteButton = $get2("_MBdeleteStep");
    if (deleteButton.getAttribute("disabled"))
        return;
    var el = GetSelectedWFStepForActionControl();
    if (IsNull(el))
        return;
    var proceedWithDelete = false;
    if (IsCompositeStepSelected())
        proceedWithDelete = confirm(LOCID_CONFIRM_COMPOSITE_DELETE);
    else
        proceedWithDelete = confirm(LOCID_CONFIRM_STEP_DELETE);
    if (proceedWithDelete) {
        var command = new RemoteCommand("Workflow", "DeleteWorkflowStep");
        command.SetParameter("activityId", el.id);
        command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
        command.SetParameter("parentStepId", CrmEncodeDecode.CrmXmlDecode($get2("hidBaseStepId").value));
        command.SetParameter("rendererTypeCode", rendererTypeCode);
        ExecuteCommandAndRefreshWorkflowArea(null, command);
        AddStepToMenuControl()
    }
}

function WorkflowStageCount() {
    var stageStepCount = 0,
        command = new RemoteCommand("Workflow", "WorkflowStageCount");
    command.SetParameter("entityId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
    var oResult = command.Execute();
    if (oResult.Success)
        stageStepCount = oResult.ReturnValue;
    return stageStepCount
}

function CanWorkflowStageBeDeleted(stepId) {
    var canBeDeleted = true,
        command = new RemoteCommand("Workflow", "CanWorkflowStageBeDeleted");
    command.SetParameter("activityId", stepId);
    command.SetParameter("entityId", $get("crmFormSubmit").crmFormSubmitId.value);
    var oResult = command.Execute();
    if (oResult.Success) {
        canBeDeleted = oResult.ReturnValue;
        !canBeDeleted &&
            alert(LOCID_ALERT_STAGE_STEP_NO_DELETE)
    } else
        canBeDeleted = false;
    return canBeDeleted
}

var newWorkflowStepHtml;

function ExecuteCommandAndRefreshWorkflowArea(selectedElId, command) {
    if (Clone[currControl] != null)
        IsActionCtrldirty = true;
    command.SetParameter("descriptionXml", GetWFStepDescriptionXml());
    var oResult = command.Execute();
    if (oResult.Success) {
        newWorkflowStepHtml = oResult.ReturnValue;
        _currentSelectedControlId = selectedElId;
        window.setTimeout("ResetWorkflowSteps()", 1)
    }
    return oResult
}

function ResetWorkflowSteps() {
    var elContainer = GetWorkflowDefintionContainerElement();
    ResetSelectedStep();
    if (elContainer != null) {
        elContainer.removeChild(XUI.Html.DomUtils.GetFirstChild(elContainer));
        elContainer.innerHTML = newWorkflowStepHtml;
        RegisterAllClientControlsInDOMElement(elContainer)
    }
    if (!IsNull(_currentSelectedControlId) && _currentSelectedControlId.length > 0) {
        var selectedElement = $get(_currentSelectedControlId, elContainer);
        if (!IsNull(selectedElement))
            if (selectedElement.style.display != "none" && selectedElement.style.visibility != "hidden")
                selectedElement.focus();
            else
                SelectWorkflowStep(_currentSelectedControlId)
    }
    ResetWFStepDescriptionArray();
    AttachOnChangeEventsToLookups();
    PopulateAssignStepSlugs();
    RemoveBlankOptionFromCreateStep();
    RecollapseSteps();
    DisableDescriptionAndOtherwiseText()
}

function RegisterAllClientControlsInDOMElement(element) {
    RegisterClientControl("SELECT", Mscrm.FormInputControl.SelectInputBehavior, element);
    RegisterClientControl("INPUT",
        Mscrm.FormInputControl.TextBoxInputBehavior,
        element,
        function(node) {
            return Sys.UI.DomElement.containsCssClass(node, "ms-crm-Text")
        });
    RegisterClientControl("IMG",
        Mscrm.FormInputControl.PresenceLookupUIBehavior,
        element,
        function(node) {
            return Sys.UI.DomElement.containsCssClass(node, "ms-crm-Lookup")
        });
    AttachOnChangeEventsToLookups(element.getElementsByTagName("IMG"))
}

function RegisterClientControl(domElementName, ajaxClass, element, canCreateComponent) {
    for (var elements = element.getElementsByTagName(domElementName),
        i = 0;
        i < elements.length;
        i++)
        (IsNull(canCreateComponent) || canCreateComponent(elements[i]) === true) &&
            crmCreate(ajaxClass, {}, null, null, elements[i])
}

function AttachOnChangeEventsToLookups(selectedLookups) {
    for (var lookups = IsNull(selectedLookups) ? document.documentElement.getElementsByTagName("IMG") : selectedLookups,
        expectedSuffix = "_lookupwfc",
        i = 0;
        i < lookups.length;
        i++) {
        var currentLookup = lookups[i],
            controlId = currentLookup.id,
            pos = controlId.lastIndexOf(expectedSuffix);
        if (pos == controlId.length - expectedSuffix.length) {
            var control = Mscrm.FormControlInputBehavior.GetElementBehavior(currentLookup);
            if (!IsNull(control))
                if (controlId.indexOf("Assign") == 0) {
                    control.remove_change(OnSelectAssigneeReturn);
                    control.add_change(OnSelectAssigneeReturn)
                } else if (controlId.indexOf("ChildWorkflow") == 0) {
                    control.remove_change(OnSelectChildWorkflowReturn);
                    control.add_change(OnSelectChildWorkflowReturn)
                }
        }
    }
}

function showWorkStepMenuKeydown(domEvent) {
    switch (domEvent.keyCode) {
    case 13:
    case 38:
    case 40:
        showWorkStepMenu();
        break
    }
}

function showWorkStepMenu() {
    var isCreateRecordMenuDisabled = false,
        isAssignEntityMenuDisabled = false,
        isSetStateMenuDisabled = false,
        isUpdateRecordMenuDisabled = false,
        isSendEmailMenuDisabled = false,
        el = GetSelectedWFStepForActionControl(),
        stepName = GetSelectedStepName();
    if (IsNull(el) && _numStageSteps > 0) {
        isCreateRecordMenuDisabled = true;
        isAssignEntityMenuDisabled = true;
        isSetStateMenuDisabled = true;
        isUpdateRecordMenuDisabled = true;
        isSendEmailMenuDisabled = true
    } else {
        isCreateRecordMenuDisabled = false;
        isUpdateRecordMenuDisabled = false;
        isAssignEntityMenuDisabled = false;
        isSetStateMenuDisabled = false
    }
    var isFeatureEnabled = Mscrm.FeatureControl.get_Current()
        .isFeatureEnabled(Mscrm.FeatureNames.AnyChanelToAnyEntityRecordCreation);
    if (isFeatureEnabled) {
        var container = $Id("gridDefinitionContainer");
        if (container == "gridDefinitionContainer_CtrlPrimaryActionStep" &&
            rendererTypeCode == Mscrm.EntityTypeCode.ConvertRuleItem.toString()) {
            var stepContainer = $get($get2("hidBaseStepId").value + "DIV");
            if (!IsNull(stepContainer) && !IsNull(stepContainer.children))
                if (stepContainer.children.length == 1 &&
                (stepContainer.children[0].getAttribute("id") == "NoStep" ||
                    stepContainer.children[0].getAttribute("id").startsWith("UpdateStep")))
                    isCreateRecordMenuDisabled = false;
                else if (stepContainer.children.length >= 1)
                    isCreateRecordMenuDisabled = true;
                else
                    isCreateRecordMenuDisabled = false
        }
    }
    isSendEmailMenuDisabled = !CanSendEmail();
    addStepMenuCtrl = $find($Id("mnumnu_AddStep"));
    IsStepPresent($Id("mnu_AddStep_CreateStep")) &&
        addStepMenuCtrl.setItemProperty($Id("mnu_AddStep_CreateStep"),
            "disabled",
            isCreateRecordMenuDisabled.toString());
    IsStepPresent($Id("mnu_AddStep_UpdateStep")) &&
        addStepMenuCtrl.setItemProperty($Id("mnu_AddStep_UpdateStep"),
            "disabled",
            isUpdateRecordMenuDisabled.toString());
    IsStepPresent($Id("mnu_AddStep_AssignStep")) &&
        addStepMenuCtrl.setItemProperty($Id("mnu_AddStep_AssignStep"),
            "disabled",
            isAssignEntityMenuDisabled.toString());
    IsStepPresent($Id("mnu_AddStep_ChangeStatusStep")) &&
        addStepMenuCtrl.setItemProperty($Id("mnu_AddStep_ChangeStatusStep"),
            "disabled",
            isSetStateMenuDisabled.toString());
    IsStepPresent($Id("mnu_AddStep_SendEmailStep")) &&
        addStepMenuCtrl.setItemProperty($Id("mnu_AddStep_SendEmailStep"),
            "disabled",
            isSendEmailMenuDisabled.toString());
    for (var menuItems = XUI.Xml.SelectNodes(addStepMenuCtrl.get_menuXml(), "menu/item", null),
        i = 0;
        i < menuItems.length;
        i++) {
        var menuItem = menuItems[i],
            idAttr = menuItem.attributes.getNamedItem("id");
        if (!IsNull(idAttr) && XUI.Xml.GetText(idAttr).indexOf("CustomActivity") != -1) {
            var attribute = menuItem.attributes.getNamedItem("disabled");
            if (IsNull(attribute)) {
                attribute = addStepMenuCtrl.get_menuXml().createAttribute("disabled");
                menuItem.attributes.setNamedItem(attribute)
            }
            XUI.Xml.SetText(menuItem.attributes.getNamedItem("disabled"), isCreateRecordMenuDisabled)
        }
    }
}

function IsStepPresent(stepName) {
    var item = XUI.Xml.SelectSingleNode(addStepMenuCtrl.get_menuXml(), "/menu/item[@id='" + stepName + "']", null);
    return !IsNull(item)
}

function IsStepEnabled(stepName) {
    var disabledAttr = addStepMenuCtrl.getItemProperty(stepName, "disabled");
    if (isNullOrEmptyString(disabledAttr))
        return true;
    return !Mscrm.Utilities.parseBoolean(disabledAttr)
}

function HasValidEntityForAssign() {
    try {
        var assignEntity = $get2("hidHasAssignEntity");
        if (assignEntity.value == "1")
            return true;
        return false
    } catch (e) {
    }
    return true
}

function CanSendEmail() {
    try {
        var val = $get2("hidCanSendEMail");
        if (val.value == "1")
            return true;
        return false
    } catch (e) {
    }
    return true
}

function HasValidEntityForUpdate() {
    try {
        var updateEntity = $get2("hidHasUpdateEntity");
        if (updateEntity.value == "1")
            return true;
        return false
    } catch (e) {
    }
    return true
}

function HasValidEntityForChangeStatus() {
    try {
        var setStateEntity = $get2("hidHasChangeStatusEntity");
        if (setStateEntity.value == "1")
            return true;
        return false
    } catch (e) {
    }
    return true
}

function ChooseAttributes(primaryEntityName) {
    var oArgs = {};
    oArgs.FieldsXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preFieldsXml")));
    oArgs.FieldPropertiesXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("prePropertiesXml")));
    oArgs.GridXml = _iAttrs;
    oArgs.PrimaryEntityName = primaryEntityName;
    var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx");
    oURL.get_query()["mode"] = "updateonattr";
    var currentState = $get2("hidCurrentState");
    if (currentState.value == "Published")
        oURL.get_query()["readOnly"] = "true";
    oURL.get_query()["entityId"] = "";
    var sDialogArgs = "help:0;status:0;scroll:0;center:1;",
        crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 570, 450, sDialogArgs);
    crmDialog.setCallbackInfo("performActionAfterAddColumns", this, null);
    crmDialog.show()
}

function performActionAfterAddColumns(oAttrObjs) {
    var ownerChanges = false,
        statecodeChanges = false;
    if (oAttrObjs) {
        _iAttrs = "";
        for (var i = oAttrObjs.length - 2; i >= 0; i--) {
            if (i == 0)
                _iAttrs += oAttrObjs[i].FieldName;
            else
                _iAttrs += oAttrObjs[i].FieldName + ";";
            if (oAttrObjs[i].FieldName == "ownerid")
                ownerChanges = true;
            if (oAttrObjs[i].FieldName == "statecode")
                statecodeChanges = true
        }
        if (ownerChanges == true)
            $get("chkOnUpdateOwner").checked = true;
        else
            $get("chkOnUpdateOwner").checked = false;
        if (statecodeChanges == true)
            $get("chkOnUpdateStatus").checked = true;
        else
            $get("chkOnUpdateStatus").checked = false;
        if (oAttrObjs[oAttrObjs.length - 1] == "true")
            _bAllAttrSelected = true;
        else
            _bAllAttrSelected = false
    } else if (oAttrObjs == false) {
        _iAttrs = "";
        $get("chkOnUpdateOwner").checked = false;
        $get("chkOnUpdateStatus").checked = false;
        _bAllAttrSelected = false
    }
}

function UpdateAttributeList(attribute) {
    var isChecked;
    if (attribute == "ownerid")
        isChecked = $get("chkOnUpdateOwner").checked;
    else if (attribute == "statecode")
        isChecked = $get("chkOnUpdateStatus").checked;
    if (isChecked)
        if (_iAttrs == "")
            _iAttrs = attribute;
        else
            _iAttrs = _iAttrs + ";" + attribute;
    else {
        var reAttribute = new RegExp("\\b" + attribute + "\\b");
        _iAttrs = _iAttrs.replace(reAttribute, "");
        _iAttrs = _iAttrs.replace(/^;/, "");
        _iAttrs = _iAttrs.replace(";;", ";");
        _iAttrs = _iAttrs.replace(/;$/, "")
    }
}

function OnCreateCheckboxChanged() {
    ToggleStageDropDown(0)
}

function OnAssignOrSetStateChangeCheckboxChanged(attributeName) {
    UpdateAttributeList(attributeName);
    ToggleStageDropDown(1)
}

function OnAttributeChangeCheckboxChanged() {
    ToggleUpdateAttrButton();
    ToggleStageDropDown(1)
}

function OnDeleteCheckboxChanged() {
    ToggleStageDropDown(2)
}

function ToggleStageDropDown(stage) {
    var control,
        state;
    switch (stage) {
    case 0:
        control = $get("createstage");
        shouldDisable = !$get("chkOnCreate").checked;
        break;
    case 1:
        control = $get("updatestage");
        shouldDisable = !($get("chkOnUpdateOwner").checked ||
            $get("chkOnUpdateStatus").checked ||
            $get("chkOnUpdateAttr").checked);
        break;
    case 2:
        control = $get("deletestage");
        shouldDisable = !$get("chkOnDelete").checked;
        break
    }
    if (!IsNull(control))
        control.Disabled = shouldDisable
}

function ToggleUpdateAttrButton() {
    var attrBtn = document.getElementById("btnChooseAttributes");
    if (attrBtn.disabled)
        attrBtn.disabled = false;
    else {
        attrBtn.disabled = true;
        _iAttrs = "";
        if ($get("chkOnUpdateStatus").checked)
            _iAttrs = "statecode";
        if ($get("chkOnUpdateOwner").checked) {
            if (_iAttrs != "")
                _iAttrs = _iAttrs + ";";
            _iAttrs = _iAttrs + "ownerid"
        }
    }
}

function AddStepToMenuControl() {
    addStepMenuCtrl = $find($Id("mnumnu_AddStep"));
    !IsNull(addStepMenuCtrl) &&
        addStepMenuCtrl.add_onOpenMenu(showWorkStepMenu)
}

function CopyWorkflowStep(destCompStepIds, srcCompStepId) {
    if (!IsNull(destCompStepIds) && !IsNull(destCompStepIds)) {
        var command;
        command = new RemoteCommand("Workflow", "CopyWorkflowStep");
        command.SetParameter("workflowId", CrmEncodeDecode.CrmXmlDecode($get2("hidWorkflowId").value));
        command.SetParameter("sourceCompStepId", srcCompStepId);
        command.SetParameter("idsToClone", destCompStepIds);
        var oResult = command.Execute();
        return oResult
    }
}