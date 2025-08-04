<!DOCTYPE HTML >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.WorkflowDetailPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server"/>
<style>
    .ms-crm-appgridmenubar { border: 0px; }

    .ms-crm-InlineTabBody {
        height: 100%;
        display: block;
    }

    .ms-crm-Input-Container TEXTAREA { position: relative; }

    .ms-crm-Form-StatusBar-Container {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 25px;
    }

    #tab0, #tab1, #tab2 {
        width: 98%;
        height: 98%;
        padding: 1%;
        overflow: auto;
        position: relative;
    }

    iframe.noteData {
        width: 94%;
        height: 91%;
        position: absolute;
    }

    #WF_Container.ms-crm-absolutePosition {
        left: 6px;
        right: 6px;
        height: 100%;
    }

    #PP_Container table.stdTable, #PP_Container Div.stdTable { height: auto; }

    .ms-crm-Form-Nav-Container { width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>; }

    .ms-crm-Form-Main-Container {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        right: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        <% }
           else
           { %>
        left: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        <% } %>
        margin-bottom: 20px;
    }

    .wfWorkflowDefinitionContainer { bottom: 10px; }

    img.expandCollapseImg { padding-right: 1px; }

    #runas .ms-crm-RadioButton {
        margin-left: -3px !important;
        padding-left: 0px;
    }

    #customOperationArguments .ms-crm-CheckBox {
        width: 14px;
        margin-left: 0px;
        padding-left: 0px;
    }

    #rad_customOperationArguments_direction1 {
        margin-left: -3px !important;
        padding-left: 0px;
    }
</style>
<script language="JavaScript" type="text/javascript">

    var _numStageSteps = 0;
    var _insertDirection = "after";
    var _currentSelectedControlId = null;
    var oArgs;
    var _iAttrs = "";
    var _bAllAttrSelected = false;
    var optionsImageOpen = new Image();
    optionsImageOpen.src = "/_imgs/ico_16_collapsed.png";
    var optionsImageClose = new Image();
    optionsImageClose.src = "/_imgs/ico_16_expanded.png";
    var _oldIAttrs = "";
    var _oldRunOnDemand = "";
    var _oldRunSubprocess = "";
    var _oldOnCreate = "";
    var _oldOnDelete = "";
    var _oldScope = -1;
    var _oldWorkflowType = -1;
    var _oldBAllAttrSelected = false;
    var _oldName = "";
    var _oldAsyncAutoDelete = false;
    var _oldCustomOperationArguments = "";
    var _oldUniqueName = "";
    var _oldInTransaction = true;

    var _oldCreateStage = "";
    var _oldUpdateStage = "";
    var _oldDeleteStage = "";
    var _oldSyncWorfklowLogOnFailure = false;
    var _oldRunAs = "";
    var runAsCurrentValue = 1;


    Sys.Application.add_load(WorkflowEditOnLoad);
    var addStepMenuCtrl = null;

    function WorkflowEditOnLoad() {
        var crmFormSubmit = $get("crmFormSubmit");


        Xrm.Page.data = new Object();
        Xrm.Page.data.entity = new Object();
        Xrm.Page.data.entity.getId = function() { return crmFormSubmit.crmFormSubmitId.value; }
        Xrm.Page.data.entity.getEntityName = function() { return crmFormSubmit.crmFormSubmitObjectTypeName.value; }

        $addHandler(crmFormSubmit, "submit", OnWfFormSubmit);
        var crmFormCtrl = $find("crmForm");
        crmFormCtrl.add_onClose(OnWfFormClose);

        if (!LOCID_IS_DISABLED) {
            crmFormCtrl.add_onSave(SavePublicationParams);
            BindSavePublicationParams();
        }


        var customOperationsElement = $find('customOperationArguments');
        if (!IsNull(customOperationsElement) && LOCID_IS_CUSTOMOPERATION) {
            customOperationsElement.set_referredArgumentValidationCallback(ReferredArgumentValidation);
        }

        ResetWFStepDescriptionArray();

        EnableDisableDeleteBtn();
        addStepMenuCtrl = $find('mnumnu_AddStep');

        if (!IsNull(addStepMenuCtrl)) {
            addStepMenuCtrl.add_onOpenMenu(showWorkStepMenu);
        }
        _iAttrs = XUI.Html.GetText($get("preAttrList"));
        SaveOldTriggerValue();


        _numStageSteps = WorkflowStageCount();


        swapInsertIcons();

        PopulateAssignStepSlugs();

        AttachOnChangeEventsToLookups();

        RemoveBlankOptionFromCreateStep();

        LoadWorkflowEventNotification();

        ShowParameterViewTitle();
        InitializeCollapsedStageControlAfterSave();


        if (typeof(RefreshWorkflowCategory) != "undefined") {
            RefreshWorkflowCategory();
        }

        var oName = $get("name");
        if (CanSetFocus(oName)) {
            oName.focus();
        }

        DisableDialogPublicationParametersIfNecessary();

        SaveCustomOperationData();
    }

    function SaveCustomOperationData() {
        if (LOCID_IS_CUSTOMOPERATION) {
            if ((typeof (LOCID_ARGUMENTS_XML) != "undefined") && (LOCID_ARGUMENTS_XML != null)) {
                var customOperationsElement = $find('customOperationArguments');
                if (!IsNull(customOperationsElement)) {
                    if (LOCID_IS_DISABLED) {
                        customOperationsElement.set_disabled(true);
                    }
                    customOperationsElement.set_dataXml(LOCID_ARGUMENTS_XML);
                }

                _oldCustomOperationArguments = LOCID_ARGUMENTS_XML;
            }

            _oldUniqueName = $get('uniquename').value;
            _oldInTransaction = $get('inTransaction').checked;
        }
        $addHandler($get("tab2Tab"), "click", SetNotesSize);
        $addHandler($get("tab0Tab"), "click", ResizeStepMenuBar);
        $addHandler(window,
            "unload",
            function() {
                $removeHandler($get("crmFormSubmit"), "submit", OnWfFormSubmit);
                $removeHandler($get("tab0Tab"), "click", ResizeStepMenuBar);
            });
    }

    function ValidateWorkflowUniqueName() {
        if (LOCID_IS_CUSTOMOPERATION) {
            uniqueName = $get('uniquename').value;
            if (!/^[\-_]*[A-Za-z0-9]+[\-A-Za-z0-9_]*$/g.test(uniqueName)) {
                alert(LOCID_UNIQUENAME_ERRORMESSAGE);
                event.cancelBubble = true;

                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                return false;
            }
        }
        return true;
    }


    function SetNotesSize() {

        var notesControl = $get('notescontrol');
        notesControl.style.width = "94%";
        notesControl.style.height = "91%";
        $removeHandler($get("tab2Tab"), "click", SetNotesSize);
    }

    function ResizeStepMenuBar() {
        var menubar = $find("WorkflowStepMenuBarmnuBar");
        if (!IsNull(menubar)) {
            window.setTimeout(function() { menubar.resizeCheck(); }, 5);
        }
    }

    function SaveOldTriggerValue() {
        _oldIAttrs = _iAttrs;
        if (LOCID_IS_ASYNC_WORKFLOW || LOCID_IS_SYNC_WORKFLOW) {
            _oldOnCreate = $get("chkOnCreate").checked;
            _oldOnDelete = $get("chkOnDelete").checked;
            _oldScope = $get("scope").selectedIndex;
            _oldBAllAttrSelected = _bAllAttrSelected;
            if (LOCID_IS_ASYNC_WORKFLOW) {
                _oldAsyncAutoDelete = $get("asyncautodelete").checked;
            }
            SaveSyncWorkflowValues();
        }
        _oldWorkflowType = $get("type").selectedIndex;
        if (LOCID_IS_CUSTOMOPERATION) {
            _oldSyncWorkflowLogOnFailure = $get('syncworkflowlogonfailure').checked;
        } else {
            _oldRunOnDemand = $get("chkOnDemand").checked;
            _oldRunSubprocess = $get("chkSubprocess").checked;
        }
        _oldName = $get("name").value;
    }

    function SaveSyncWorkflowValues() {
        if (LOCID_IS_SYNC_WORKFLOW) {
            _oldSyncWorkflowLogOnFailure = $get('syncworkflowlogonfailure').checked;
            _oldCreateStage = $get('createstage').value;
            _oldUpdateStage = $get('updatestage').value;
            _oldDeleteStage = $get('deletestage').value;
            _oldRunAs = runAsCurrentValue;
        }
    }

    function TriggerValueChanged() {
        var currType = $get("type").selectedIndex;
        if (LOCID_IS_ASYNC_WORKFLOW || LOCID_IS_SYNC_WORKFLOW) {
            var currScope = $get("scope").selectedIndex;

            if (_oldIAttrs != _iAttrs ||
                _oldRunOnDemand != $get("chkOnDemand").checked ||
                _oldRunSubprocess != $get("chkSubprocess").checked ||
                _oldOnCreate != $get("chkOnCreate").checked ||
                _oldOnDelete != $get("chkOnDelete").checked ||
                _oldScope != currScope ||
                _oldWorkflowType != currType ||
                _oldBAllAttrSelected != _bAllAttrSelected ||
                (LOCID_IS_ASYNC_WORKFLOW && _oldAsyncAutoDelete != $get("asyncautodelete").checked) ||
                SyncWorkflowAttributesChanged()) {
                return true;
            }
        } else if (LOCID_IS_DIALOG) {

            if (_oldIAttrs != _iAttrs ||
                _oldRunOnDemand != $get("chkOnDemand").checked ||
                _oldRunSubprocess != $get("chkSubprocess").checked ||
                _oldWorkflowType != currType) {
                return true;
            }
        } else if (LOCID_IS_CUSTOMOPERATION) {
            if (_oldIAttrs != _iAttrs ||
                _oldWorkflowType != currType ||
                _oldSyncWorkflowLogOnFailure != $get('syncworkflowlogonfailure').checked) {
                return true;
            }
        } else {
            if (_oldIAttrs != _iAttrs ||
                _oldRunSubprocess != $get("chkSubprocess").checked ||
                _oldWorkflowType != currType) {
                return true;
            }
        }

        if (_oldName != $get("name").value) {
            return true;
        }

        return false;
    }

    function SyncWorkflowAttributesChanged() {
        if (!LOCID_IS_SYNC_WORKFLOW)
            return false;

        return _oldCreateStage != $get('createstage').value ||
            _oldUpdateStage != $get('updatestage').value ||
            _oldDeleteStage != $get('deletestage').value ||
            _oldSyncWorkflowLogOnFailure != $get('syncworkflowlogonfailure').checked ||
            _oldRunAs != runAsCurrentValue
    }

    function HasArguments(xml) {
        return xml.indexOf('next="1"') < 0 || _oldCustomOperationArguments.indexOf('next="1"') < 0;
    }

    function ArgumentsChanged() {
        if (LOCID_IS_CUSTOMOPERATION) {
            var xml = $find('customOperationArguments').get_dataXml();
            var uniqueName = $get('uniquename').value;
            var inTransaction = $get('inTransaction').checked;
            return (((HasArguments(xml)) && Trim(_oldCustomOperationArguments) != Trim(xml)) ||
                (_oldUniqueName != uniqueName) ||
                (_oldInTransaction != inTransaction));
        }
        return false;
    }


    function IsWorkflowDirty() {
        if (ArgumentsChanged()) {
            return true;
        }

        if (TriggerValueChanged()) {
            return true;
        }
        if (IsWFDescriptionModified()) {
            return true;
        }
    }

    function RemoveBlankOptionFromCreateStep() {


        var buttons = document.documentElement.getElementsByTagName("button");
        var length = buttons.length;

        for (var i = 0; i < length; i++) {
            var buttonControl = buttons[i];
            if (buttonControl.getAttribute("setDisabled") == "true") {
                var idTokens = buttonControl.id.split("_");


                var entityList = $get(idTokens[0] + "_entitylstwfc");
                if (entityList.options[entityList.selectedIndex].value == "") {

                    buttonControl.setAttribute("disabled", true);
                } else if (entityList.options[0].value == "") {

                    entityList.options.remove(0);
                }
            }
        }
    }

    function PopulateAssignStepSlugs() {
        SetAttributeTypeMapping("", null);
        var lookups = document.getElementsByTagName("IMG");
        var expectedSuffix = "_lookupwfc";
        var expectedPrefix = "Assign";
        var len = lookups.length;
        for (var i = 0; i < len; i++) {
            var controlId = lookups[i].id;
            var pos = controlId.lastIndexOf(expectedSuffix);
            if (pos == controlId.length - expectedSuffix.length &&
                controlId.substr(0, expectedPrefix.length) == expectedPrefix) {
                AddAttributeTypeMapping(controlId, "Owner");
            }
        }

        PopulateSlugControlsWithCallback(CrmEncodeDecode.CrmXmlDecode($get("hidSlugInfo").value),
            "deleteslugbody",
            OnAssigneeSlugDelete);
    }

    function OnAssigneeSlugDelete(sender, args) {

        var el = getLookUpElementWithEvent(sender);
        UpdateAssigneeForControl(el);

    }

    function RunAsChanged() {
        runAsCurrentValue = (runAsCurrentValue + 1) % 2;
    }


    function OnWfFormClose(sender, args) {
        if (IsWorkflowDirty()) {
            args.preventDefault();
        }
    }

    function ToggleParameterView() {
        ToggleView("PublicationParameterArea",
            "optionsText",
            "optionsImg",
            LOCID_PUBLICATION_TITLE_SHOW,
            LOCID_PUBLICATION_TITLE_HIDE);
    }

    function ToggleArgumentView() {
        ToggleView("customOperationArguments",
            "argumentsText",
            "argumentsImg",
            LOCID_ARGUMENTS_TITLE_SHOW,
            LOCID_ARGUMENTS_TITLE_HIDE);
    }


    function ToggleView(controlElement, titleElement, imageElement, showTitle, hideTitle) {
        var element = $get(controlElement);
        var optionsElement = $get(titleElement);
        if (optionsElement.getAttribute("disabled")) {
            return;
        }

        if (element.style.display == 'none') {
            ShowViewTitle(true, controlElement, titleElement, imageElement, showTitle, hideTitle);
        } else {
            ShowViewTitle(false, controlElement, titleElement, imageElement, showTitle, hideTitle);
        }
    }

    function ShowParameterViewTitle(bVisible) {
        ShowViewTitle(bVisible,
            "PublicationParameterArea",
            "optionsText",
            "optionsImg",
            LOCID_PUBLICATION_TITLE_SHOW,
            LOCID_PUBLICATION_TITLE_HIDE);
    }

    function ShowViewTitle(bVisible, controlElement, titleElement, imageElement, showTitle, hideTitle) {
        var element = $get(controlElement);
        var oImg = $get(imageElement);
        var oText = $get(titleElement);

        if (!IsNull(bVisible)) {
            if (bVisible) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }

        if (element.style.display == 'none') {
            oImg.setAttribute("src", optionsImageOpen.getAttribute("src"));
            XUI.Html.SetText(oText, showTitle);
            if (LOCID_IS_CUSTOMOPERATION) {
                AdjustCustomOperationContainerHeight();
            } else {
                $get("WF_Container").style.top = "45px";
            }
        } else {
            oImg.setAttribute("src", optionsImageClose.getAttribute("src"));
            XUI.Html.SetText(oText, hideTitle);
            if (LOCID_IS_CUSTOMOPERATION) {
                AdjustCustomOperationContainerHeight();
            } else {
                AdjustWorkFlowContainerHeight();
            }
        }
    }

    function AdjustWorkFlowContainerHeight() {
        if (LOCID_IS_ASYNC_WORKFLOW) {
            $get("PP_Container").style.maxHeight = "285px";
            $get("WF_Container").style.top = "300px";
        } else if (LOCID_IS_DIALOG) {
            $get("PP_Container").style.maxHeight = "190px";
            $get("WF_Container").style.top = "190px";
        } else if (LOCID_IS_SYNC_WORKFLOW) {
            $get("PP_Container").style.maxHeight = "415px";
            $get("WF_Container").style.top = "470px";
        }
    }

    function AdjustCustomOperationContainerHeight() {
        var isParametertHide = false;
        var oParameter = $get("PublicationParameterArea");
        if (oParameter == null || oParameter.style.display == "none") {
            isParametertHide = true;
        }

        var isArgumentHide = false;
        var oArguments = $get("customOperationArguments");
        if (oArguments == null || oArguments.style.display == "none") {
            isArgumentHide = true;
        }

        var height = 78;
        if (!isParametertHide) {
            height += 140;
        }
        if (!isArgumentHide) {
            height += 250;
        }

        $get("PP_Container").style.maxHeight = "456px";
        $get("WF_Container").style.top = height + "px";
    }

    function OnWfFormSubmit(domEvent) {
        if (!$get("hidPrimaryEntity").value) {
            alert(LOCID_WARN_TO_SPECIFY_ENTITY);
            domEvent.stopPropagation();
            return false;
        }

        var oCrmFormSubmit = $get('crmFormSubmit');
        var s = oCrmFormSubmit.crmFormSubmitXml.value;
        s = s.replace(/<selectWorkflowEntityName.*selectWorkflowEntityName>/, "");
        s = s.replace(/<[^<]*customOperationArguments[^>]*>[^>]*customOperationArguments[^>]*>/g, "");


        s = s.replace(/<[^<]*wfc[^>]*>[^>]*wfc>/g, "");

        oCrmFormSubmit.crmFormSubmitXml.value = s;
        PostbackCollapsedStageControlIdList();

        if (IsWFDescriptionModified()) {
            createHiddenInput("descriptionXml", GetWFStepDescriptionXml());
            return true;
        }
    }

    function PostbackCollapsedStageControlIdList() {
        var sb = new StringBuilder();
        for (divId in _expandCollapseArray) {
            var imgId = _expandCollapseArray[divId];
            if (imgId != null) {
                sb.Append(divId + ',' + imgId + ';');
            }
        }
        if (IsNull($get("collapsedStageControlIdListPost"))) {
            createHiddenInput("collapsedStageControlIdListPost", sb.ToString());
        } else {
            $get("collapsedStageControlIdListPost").value = sb.ToString();
        }
    }

    function InitializeCollapsedStageControlAfterSave() {
        var idList = $get("collapsedStageControlIdList").value;
        if (idList.length < 1) {
            return;
        }

        var stages = idList.split(';');

        if (stages.length < 2) {
            return;
        }
        var i;
        var length = stages.length - 1;
        for (i = 0; i < length; i++) {
            var parts = stages[i].split(',');
            if (!IsNull($get(parts[0])) && !IsNull($get(parts[1]))) {
                ExpandCollapseStep(parts[0], parts[1]);
            }
        }
    }

    function SavePublicationParams() {




        <% if (CurrentEntity.Disabled)
           { %>


        return;
        <% } %>

        if (!IsWorkflowDirty()) {
            return;
        }

        if (!ValidateWorkflowUniqueName()) {
            return;
        }

        var currentState = $get("hidCurrentState");

        if (currentState.value == "Draft") {
            var isTemplate = true;
            var workflowType = $get("type");
            if (workflowType.options[workflowType.selectedIndex].value == "1") {
                isTemplate = false;
            }

            var hidParameterVisible = $get("ParameterExpanded");
            if (IsNull(hidParameterVisible)) {
                var element = $get("PublicationParameterArea");
                createHiddenInput("ParameterExpanded", element.style.display);
            }


            var onCreate = false;
            var onDelete = false;
            var scope = "";
            var asyncautodelete = false;
            var syncworkflowlogonfailure = false;
            var runOnDemand = LOCID_IS_CUSTOMOPERATION ? true : $get("chkOnDemand").checked;
            var runSubprocess = LOCID_IS_CUSTOMOPERATION ? false : $get("chkSubprocess").checked;
            var runAs = "";
            var stages = "0,0,0";
            var id = $get('crmFormSubmit').crmFormSubmitId.value;
            var name = $get("name").value;
            var xml = "";
            var uniqueName = "";
            var inTransaction = true;

            if (LOCID_IS_SYNC_WORKFLOW || LOCID_IS_ASYNC_WORKFLOW) {
                onCreate = $get("chkOnCreate").checked;
                onDelete = $get("chkOnDelete").checked;
                var workflowScope = $get("scope");
                scope = workflowScope.options[workflowScope.selectedIndex].value;
                if (LOCID_IS_ASYNC_WORKFLOW) {
                    asyncautodelete = $get("asyncautodelete").checked;
                }
                if (LOCID_IS_SYNC_WORKFLOW) {
                    syncworkflowlogonfailure = $get('syncworkflowlogonfailure').checked;
                    stages = $get('createstage').value +
                        "," +
                        $get('updatestage').value +
                        "," +
                        $get('deletestage').value;
                }
            } else if (LOCID_IS_CUSTOMOPERATION) {
                var customOperationsElement = $find('customOperationArguments');
                if (!IsNull(customOperationsElement)) {
                    xml = customOperationsElement.get_dataXml();
                }

                var uniqueNameElement = $get('uniquename');
                if (!IsNull(uniqueNameElement)) {
                    uniqueName = uniqueNameElement.value;
                }

                var inTransactionElement = $get('inTransaction');
                if (!IsNull(inTransactionElement)) {
                    inTransaction = inTransactionElement.checked;
                }

                var syncworkflowlogonfailureElement = $get('syncworkflowlogonfailure');
                if (!IsNull(syncworkflowlogonfailureElement)) {
                    syncworkflowlogonfailure = syncworkflowlogonfailureElement.checked;
                }
            }

            var command = new RemoteCommand("Workflow", "SetPublicationParameters");
            command.SetParameter("workflowId", id);
            command.SetParameter("title", name);
            command.SetParameter("isTemplate", isTemplate);
            command.SetParameter("runOnDemand", runOnDemand);
            command.SetParameter("runSubprocess", runSubprocess);
            command.SetParameter("onCreate", onCreate);
            command.SetParameter("onDelete", onDelete);
            command.SetParameter("updateAttributes", _iAttrs);
            command.SetParameter("allAttrSelected", _bAllAttrSelected);
            command.SetParameter("scope", scope);
            command.SetParameter("asyncAutoDelete", asyncautodelete);
            command.SetParameter("syncWorkflowLogOnFailure", syncworkflowlogonfailure);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());
            command.SetParameter("stages", stages);
            command.SetParameter("runAs", runAsCurrentValue);
            command.SetParameter("customOperationArguments", xml);
            command.SetParameter("uniqueName", uniqueName);
            command.SetParameter("inTransaction", inTransaction);

            var oResult = command.Execute();
            if (oResult.Success) {
                _oldCustomOperationArguments = xml;
                _oldUniqueName = uniqueName;
                _oldInTransaction = inTransaction;

                SaveOldTriggerValue();
                if (oResult.ReturnValue != "workflowerror") {
                    var notifications = $get("WorkflowNotifications");
                    if (!IsNull(notifications)) {
                        notifications.style.display = "none";
                    }
                }

                try {
                    if (window.opener != null && window.opener.auto != null) {
                        window.opener.auto(Mscrm.EntityTypeCode.Workflow, name, id);
                    }
                } catch (e) {
                };
                return true;
            }
        }
        return false;
    }

    function BindSavePublicationParams() {
        RemoveFocusEvent($get("WF_Container"), OnSavePublicationParams);
        AddFocusEvent($get("WF_Container"), OnSavePublicationParams);
    }

    function OnSavePublicationParams(e) {
        e = e || window.event;
        e.cancelBubble = true;
        e.returnValue = false;
        e.stopPropagation || e.stopPropagation();
        RemoveFocusEvent($get("WF_Container"), OnSavePublicationParams);
        SavePublicationParams();
    }


    function AddFocusEvent(element, onFocusCallback) {
        if (element == null || onFocusCallback == null) return;
        if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version <= 8) {
            $addHandler(element, "focusin", onFocusCallback);
        } else {
            element.addEventListener("focus", onFocusCallback, true);
        }
    }

    function RemoveFocusEvent(element, onFocusCallback) {
        if (element == null || onFocusCallback == null) return;
        if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version <= 8) {
            element.onfocusin = null;
        } else {
            element.removeEventListener("focus", onFocusCallback, true);
        }
    }

    function notifyChildClose() {
        RefreshWorkflowStepDelay();
    }

    function RefreshWorkflowStepDelay() {
        var el = GetSelectedWorkflowStep();
        var command = new RemoteCommand("Workflow", "RefreshWorkflowStep");
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
    }

    function WarnToSave() {
        <%

           if (CurrentForm.State == FormState.New)
           {
        %>
        alert(LOCID_WARN_TO_SAVE_WORKFLOW);
        <%
           }
        %>
    }

    function GetWorkflowDefintionContainerElement() {
        return window.$get("gridDefinitionContainer");
    }

    function addStageStep() {
        if (!IsStepEnabled('mnu_AddStep_StageStep')) {
            return;
        }


        if ((_numStageSteps == 0) && !confirm(LOCID_CONFIRM_STAGE_STEP_ADD)) {

            return;
        }

        var el = GetSelectedWorkflowStep();
        var command = new RemoteCommand("Workflow", "AddStageStep");

        if (!IsNull(el)) {
            if (el.id == "NoStep") {
                command.SetParameter("siblingId", el.getAttribute("parent"));
            } else {
                command.SetParameter("siblingId", el.id);
            }
        } else {
            command.SetParameter("siblingId", "");
        }

        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("direction", _insertDirection);


        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);


        _numStageSteps = WorkflowStageCount();
    }

    function addCheckStep() {
        if (IsStepEnabled('mnu_AddStep_CheckStep')) {
            var el = GetSelectedWorkflowStep();

            var command;


            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddCheckStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertCheckStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }


            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }

    function addInteractionStep() {
        if (!IsStepEnabled('mnu_AddStep_InteractionStep')) {
            return;
        }

        var el = GetSelectedWorkflowStep();
        var command;

        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddInteractionStep");
            if (!IsNull(el)) {
                command.SetParameter("parentId", el.getAttribute("parent"));
            } else {
                command.SetParameter("parentId", "");
            }
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        } else {
            command = new RemoteCommand("Workflow", "InsertInteractionStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);
        }


        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);

    }

    function addPageStep() {
        if (!IsStepEnabled('mnu_AddStep_InteractionPageStep')) {
            return;
        }

        var el = GetSelectedWorkflowStep();
        var command;

        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddInteractionPageStep");
            if (!IsNull(el)) {
                command.SetParameter("parentId", el.getAttribute("parent"));
            } else {
                command.SetParameter("parentId", "");
            }
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        } else {
            command = new RemoteCommand("Workflow", "InsertInteractionPageStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);
        }


        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);

    }

    function addQueryStep() {
        if (!IsStepEnabled('mnu_AddStep_QueryDataStep')) {
            return;
        }

        var el = GetSelectedWorkflowStep();
        var command;

        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddQueryDataStep");
            if (!IsNull(el)) {
                command.SetParameter("parentId", el.getAttribute("parent"));
            } else {
                command.SetParameter("parentId", "");
            }
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        } else {
            command = new RemoteCommand("Workflow", "InsertQueryDataStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);
        }


        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);

    }

    function addAssignVariableStep() {
        if (!IsStepEnabled('mnu_AddStep_AssignVariableStep')) {
            return;
        }

        var el = GetSelectedWorkflowStep();
        var command;

        if (IsNull(el) || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddAssignVariableStep");
            if (!IsNull(el)) {
                command.SetParameter("parentId", el.getAttribute("parent"));
            } else {
                command.SetParameter("parentId", "");
            }
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        } else {
            command = new RemoteCommand("Workflow", "InsertAssignVariableStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);
        }


        ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);


    }

    function addAssignOutputArgumentStep() {
        if (!IsStepEnabled('mnu_AddStep_AssignOutputArgumentStep')) {
            return;
        }

        var el = GetSelectedWorkflowStep();
        var command;

        if (el == null || el.id == "NoStep") {
            command = new RemoteCommand("Workflow", "AddAssignOutputArgumentStep");
            if (el != null) {
                command.SetParameter("parentId", el.getAttribute("parent"));
            } else {
                command.SetParameter("parentId", "");
            }
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        } else {
            command = new RemoteCommand("Workflow", "InsertAssignOutputArgumentStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);
        }


        ExecuteCommandAndRefreshWorkflowArea((el != null ? el.id : null), command);


    }

    function addElseIfStep() {
        if (IsStepEnabled('mnu_AddStep_ElseIfStep')) {
            var el = GetSelectedWorkflowStep();
            if (IsNull(el)) {
                return;
            }


            if (el.getAttribute("condition") == "false") {
                alert(LOCID_ERROR_ADD_COND_BRANCH);
                return;
            }


            var command = new RemoteCommand("Workflow", "InsertElseIfStep");
            command.SetParameter("siblingId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("direction", _insertDirection);

            ExecuteCommandAndRefreshWorkflowArea(el.id, command);
        }
    }

    function addElseStep() {
        if (IsStepEnabled('mnu_AddStep_ElseStep')) {
            var el = GetSelectedWorkflowStep();
            if (IsNull(el)) {
                return;
            }

            var command = new RemoteCommand("Workflow", "AddElseStep");
            command.SetParameter("parentId", el.getAttribute("parent"));
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

            ExecuteCommandAndRefreshWorkflowArea(el.id, command);
        }
    }

    function insertVariable(entityId, variableId, isInputArg) {
        var oDialogArgs = new Object();
        oDialogArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/dlg_insert_variable.aspx");

        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["VariableId"] = variableId;
        oUrl.get_query()["IsInputArg"] = isInputArg;


        var dialogOptions = new Xrm.DialogOptions();
        dialogOptions
            .height =
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/InsertVariable.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>;
        dialogOptions
            .width =
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/InsertVariable.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>
        Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oDialogArgs, null, insertVariableCallback);
    }

    function addVariable(entityId, variableId, isInputArg) {
        if (isInputArg && ($get("chkOnDemand").checked == true || $get("chkSubprocess").checked == false)) {
            var parameters = new Array(entityId, variableId, isInputArg);
            var callBackRef = Mscrm.Utilities
                .createCallbackFunctionObject("confirmInputArgumentCallback", this, parameters, false);
            var result = openStdDlgWithCallback(Mscrm.CrmUri.create("/sfa/workflow/dlg_confirm_inputargument.aspx"),
                null,
                400,
                230,
                callBackRef);
            if (isOutlookHostedWindow()) {
                confirmInputArgumentCallback(result, entityId, variableId, isInputArg);
            }
        } else {
            insertVariable(entityId, variableId, isInputArg);
        }

    }

    function confirmInputArgumentCallback(result, entityId, variableId, isInputArg) {
        if (result == true) {
            $get("chkOnDemand").checked = false;
            $get("chkSubprocess").checked = true;
        } else {
            return;
        }

        insertVariable(entityId, variableId, isInputArg);
    }

    function insertVariableCallback(result) {
        if (!IsNull(result) && result != false) {
            newWorkflowStepHtml = result;
            window.setTimeout("ResetWorkflowSteps()", 1);
        }
    }

    function deleteVariable(entityId, variableId) {
        if (confirm(LOCID_CONFIRM_STEP_DELETE)) {
            var command = new RemoteCommand("Workflow", "DeleteVariable");
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("variableId", variableId);
            ExecuteCommandAndRefreshWorkflowArea(entityId, command);
        }
    }

    function setAssignVariable(oid, entityId, readOnlyMode) {
        var oDialogArgs = new Object();
        oDialogArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/assignValue.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = oid;
        oUrl.get_query()["readonlymode"] = readOnlyMode;

        if (readOnlyMode == "false") {
            oUrl.get_query()["StepDescription"] = Mscrm.FormControlInputBehavior.GetBehavior(oid + "_wfdescwfc")
                .get_dataValue();
        } else {
            oUrl.get_query()["StepDescription"] = XUI.Html.GetText($get(oid + "_wfdescwfc"));
        }


        var parameters = new Array(oid);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterAssignValue", this, parameters, false);

        var sNewXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterAssignValue(sNewXml, oid);
        }
    }

    function performActionAfterAssignValue(sNewXml, oid) {

        if (typeof(sNewXml) != "undefined" && sNewXml != null) {
            if (IsNull(sNewXml)) {
                sNewXml = "<Variable/>";
            }

            var command = new RemoteCommand("Workflow", "UpdateAssignVariable");
            command.SetParameter("activityId", oid);
            command.SetParameter("assignXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }

    function setAssignArgument(oid, entityId, readOnlyMode) {
        var oCustomOperationArgs = new Object();
        oCustomOperationArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/assignArgumentValue.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = oid;
        oUrl.get_query()["readonlymode"] = readOnlyMode;


        if (readOnlyMode == "false") {

            oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                .CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior(oid + "_wfdescwfc").get_dataValue());
        } else {

            oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                .CrmUrlEncode(XUI.Html.GetText($get(oid + "_wfdescwfc")));
        }

        var parameters = new Array(oid);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSetAssignArgument", this, parameters, false);
        var sNewXml = openStdDlgWithCallback(oUrl,
            oCustomOperationArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/assignValue.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterSetAssignArgument(sNewXml, oid);
        }
    }

    function performActionAfterSetAssignArgument(sNewXml, oid) {
        if (typeof(sNewXml) != "undefined") {
            if (IsNull(sNewXml)) {
                sNewXml = "<Argument/>";
            }

            var command = new RemoteCommand("Workflow", "UpdateAssignOutputArgument");
            command.SetParameter("activityId", oid);
            command.SetParameter("assignXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }

    function setPromptResponse(oid, entityId, readOnlyMode) {
        var oDialogArgs = new Object();
        oDialogArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/PromptResponse.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = oid;
        oUrl.get_query()["readonlymode"] = readOnlyMode;


        if (readOnlyMode == "false") {
            oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                .CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior(oid + "_wfdescwfc").get_dataValue());
        } else {
            oUrl.get_query()["StepDescription"] = CrmEncodeDecode
                .CrmUrlEncode(XUI.Html.GetText($get(oid + "_wfdescwfc")));
        }

        var parameters = new Array(oid);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSetPromptResponse", this, parameters, false);
        var sNewXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/PromptResponse.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/PromptResponse.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterSetPromptResponse(sNewXml, oid);
        }
    }

    function performActionAfterSetPromptResponse(sNewXml, oid) {
        if (!IsNull(sNewXml)) {
            var command = new RemoteCommand("Workflow", "UpdateInteraction");
            command.SetParameter("activityId", oid);
            command.SetParameter("interactionXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }

    function setInputArgument(oid, entityId, readOnlyMode) {
        var oDialogArgs = new Object();
        oDialogArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/mapChildArguments.aspx");
        oUrl.get_query()["workflowId"] = entityId;
        oUrl.get_query()["activityname"] = oid;
        oUrl.get_query()["readonlymode"] = readOnlyMode;

        var parameters = new Array(oid);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterMapChildArguments", this, parameters, false);

        var sNewXml = openStdDlgWithCallback(oUrl, oDialogArgs, 850, 600, callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterMapChildArguments(sNewXml, oid);
        }

    }

    function performActionAfterMapChildArguments(sNewXml, oid) {
        if (!IsNull(sNewXml)) {
            var command = new RemoteCommand("Workflow", "UpdateChildInputArguments");
            command.SetParameter("activityId", oid);
            command.SetParameter("argumentsXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }

    function ConfigureQuery(entityId, stepId, readOnlyMode) {
        var oDialogArgs = new Object();
        oDialogArgs.Xml = "";
        var oUrl = Mscrm.CrmUri.create("/SFA/workflow/fetchquery.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = stepId;

        if (readOnlyMode == "false") {
            oUrl.get_query()["StepDescription"] = (Mscrm.FormControlInputBehavior.GetBehavior(stepId + "_wfdescwfc")
                .get_dataValue());
        } else {
            oUrl.get_query()["StepDescription"] = (XUI.Html.GetText($get(stepId + "_wfdescwfc")));
        }
        oUrl.get_query()["readonlymode"] = readOnlyMode;

        var parameters = new Array(stepId);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterFetchQuery", this, parameters, false);

        var sFetchXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/FetchQuery.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("SFA/workflow/FetchQuery.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterFetchQuery(sFetchXml, stepId);
        }

    }

    function performActionAfterFetchQuery(sFetchXml, stepId) {
        if (typeof(sFetchXml) != "undefined") {
            if (IsNull(sFetchXml)) {
                sFetchXml = "<fetchxml/>";
                return;
            }

            var command = new RemoteCommand("Workflow", "UpdateQueryStep");
            command.SetParameter("stepId", stepId);
            command.SetParameter("queryXml", sFetchXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("descriptionXml", GetWFStepDescriptionXml());

            ExecuteCommandAndRefreshWorkflowArea(stepId, command);
        }
    }


    function setCondition(oid, sXml, entityId) {
        var oDialogArgs = new Object();
        if (IsNull(sXml)) {
            oDialogArgs.Xml = "";
        } else {
            oDialogArgs.Xml = sXml;
        }

        var oUrl = Mscrm.CrmUri.create("/Condition/Condition.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = oid;

        var parameters = new Array(oid);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSetCondition", this, parameters, false);

        var sNewXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterSetCondition(sNewXml, oid);
        }

    }

    function performActionAfterSetCondition(sNewXml, oid) {
        if (typeof(sNewXml) != "undefined") {
            if (IsNull(sNewXml)) {
                sNewXml = "<and/>";
            }
            var command = new RemoteCommand("Workflow", "UpdateCondition");
            command.SetParameter("activityId", oid);
            command.SetParameter("conditionXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }

    function setWaitBranchCondition(domEvent, stepId, sXml, entityId) {
        var oDialogArgs = new Object();
        if (IsNull(sXml)) {
            oDialogArgs.Xml = "";
        } else {
            oDialogArgs.Xml = sXml;
        }

        var ele = domEvent.target.parentNode;


        if (IsNull(ele)) {
            return;
        }

        var oUrl = Mscrm.CrmUri.create("/Condition/Condition.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = stepId;
        oUrl.get_query()["ExpressionType"] = "timeout";

        var parameters = new Array(stepId, ele);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSetWaitBranchCondition", this, parameters, false);

        var sNewXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterSetWaitBranchCondition(sNewXml, stepId, ele);
        }
    }

    function performActionAfterSetWaitBranchCondition(sNewXml, stepId, ele) {
        if (typeof(sNewXml) != "undefined") {
            if (IsNull(sNewXml)) {
                sNewXml = "<and/>";
            } else {
                if (IsWaitTimeoutExpression(sNewXml)) {
                    var childNodes = ele.getElementsByTagName("INPUT");
                    if (childNodes.length > 0) {
                        if (!confirm(LOCID_CONFIRM_CHANGE_WAITTIMEOUT)) {
                            return;
                        }
                    }
                }
            }
            var command = new RemoteCommand("Workflow", "UpdateWaitBranchExpression");
            command.SetParameter("activityId", stepId);
            command.SetParameter("conditionXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

            ExecuteCommandAndRefreshWorkflowArea(stepId, command);
        }
    }

    function addWaitStep() {
        if (IsStepEnabled('mnu_AddStep_WaitStep')) {
            var el = GetSelectedWorkflowStep();

            var command;


            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddWaitStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertWaitStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }


            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }

    function addWaitBranchStep() {
        if (IsStepEnabled('mnu_AddStep_WaitBranchStep')) {
            var el = GetSelectedWorkflowStep();
            var stepName = GetSelectedStepName();

            if (stepName == null) {
                return;
            }

            var serviceName = "";
            var refId = "";
            var insertStep = false;

            if (stepName == WaitStepName) {
                refId = "parentId";
                serviceName = "AddWaitBranchStep";
            } else {
                if (stepName == WaitTimeoutStepName || stepName == WaitBranchStepName) {
                    refId = "siblingId";
                    serviceName = "InsertWaitBranchStep";
                    insertStep = true;
                } else {
                    return;
                }
            }

            var command = new RemoteCommand("Workflow", serviceName);
            command.SetParameter(refId, el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            if (insertStep == true) {
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea(el.id, command);
        }
    }


    function setWaitTimeoutExpression(stepId, sXml, entityId) {
        var oDialogArgs = new Object();
        if (IsNull(sXml)) {
            oDialogArgs.Xml = "";
        } else {
            oDialogArgs.Xml = sXml;
        }

        var oUrl = Mscrm.CrmUri.create("/Condition/Condition.aspx");
        oUrl.get_query()["EntityId"] = entityId;
        oUrl.get_query()["StepId"] = stepId;
        oUrl.get_query()["ExpressionType"] = "timeoutonly";

        var parameters = new Array(stepId);
        var callbackFunc = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterSetWaitTimeoutExpression", this, parameters, false);

        var sNewXml = openStdDlgWithCallback(oUrl,
            oDialogArgs,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_WIDTH"), System.Globalization.CultureInfo.InvariantCulture) %>,
            <%= Convert.ToInt32(CurrentResourceManager.GetString("condition/condition.aspx_WINDOW_HEIGHT"), System.Globalization.CultureInfo.InvariantCulture) %>,
            callbackFunc);

        if (isOutlookHostedWindow()) {
            performActionAfterSetWaitTimeoutExpression(sNewXml, stepId);
        }
    }

    function performActionAfterSetWaitTimeoutExpression(sNewXml, stepId) {
        if (typeof(sNewXml) != "undefined") {
            if (IsNull(sNewXml)) {
                sNewXml = "<and/>";
            }
            var command = new RemoteCommand("Workflow", "UpdateWaitTimeoutExpression");
            command.SetParameter("activityId", stepId);
            command.SetParameter("timeoutXml", sNewXml);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

            ExecuteCommandAndRefreshWorkflowArea(stepId, command);
        }
    }

    function setCreateEntityStep(oid, sValue) {
        if (oid == null || sValue == null) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateCreateEntityStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("createXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function UpdateStepDescription() {
        var command;
        command = new RemoteCommand("Workflow", "SetStepDescription");
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        ExecuteCommandAndRefreshWorkflowArea(GetSelectedWorkflowStep(), command);
    }


    function addCreateEntityStep() {
        if (IsStepEnabled('mnu_AddStep_CreateStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddCreateEntityStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertCreateEntityStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setUpdateEntityStep(oid, sValue) {
        if (oid == null || sValue == null) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateUpdateEntityStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("createXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function addUpdateEntityStep() {
        if (IsStepEnabled('mnu_AddStep_UpdateStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddUpdateEntityStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertUpdateEntityStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setCustomActivityStep(oid, sValue, customStepCategory) {
        if (oid == null || sValue == null) {
            return
        }

        var command;
        if (customStepCategory == null || customStepCategory.toUpperCase() != "SDKMESSAGE") {
            command = new RemoteCommand("Workflow", "UpdateCustomActivityStep");
            command.SetParameter("activityId", oid);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("actionXml", sValue);

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        } else {
            command = new RemoteCommand("Workflow", "UpdateInvokeSdkMessageOperationStep");
            command.SetParameter("activityId", oid);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("actionXml", sValue);

            ExecuteCommandAndRefreshWorkflowArea(oid, command);
        }
    }


    function addCustomActivityStep(activity) {

        if (IsStepEnabled('mnu_AddStep_CreateStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddCustomActivityStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertCustomActivityStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            command.SetParameter("customActivityId", activity);

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function addAssignEntityStep() {
        if (IsStepEnabled('mnu_AddStep_AssignStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddAssignEntityStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertAssignEntityStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setAssignEntityStep(oid, sValue) {
        if (oid == null || sValue == null) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateAssignEntityStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("assignXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function addSendEmailStep() {
        if (IsStepEnabled('mnu_AddStep_SendEmailStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddSendEmailStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertSendEmailStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setSendEmailStep(oid, sValue) {
        if (IsNull(oid) || IsNull(sValue)) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateSendEmailStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("emailXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function addChangeStatusStep() {
        if (IsStepEnabled('mnu_AddStep_ChangeStatusStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddChangeStatusStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertChangeStatusStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setChangeStatusStep(oid, sValue) {

        if (IsNull(oid) || IsNull(sValue)) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateChangeStatusStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("changeStatusXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function addInvokeSdkMessageOperation() {
        if (IsStepEnabled('mnu_AddStep_SDKOperation')) {
            var el = GetSelectedWorkflowStep();
            var command;
            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddInvokeSdkMessageStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("descriptionXml", GetWFStepDescriptionXml());
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertInvokeSdkMessageStep");
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("siblingId", el.id);
                command.SetParameter("direction", _insertDirection);
                command.SetParameter("descriptionXml", GetWFStepDescriptionXml());
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function addChildWorkflowStep() {
        if (IsStepEnabled('mnu_AddStep_ChildWorkflowStep')) {
            var el = GetSelectedWorkflowStep();

            var command;
            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddChildWorkflowStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertChildWorkflowStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function addChildInteractiveWorkflowStep() {
        if (IsStepEnabled('mnu_AddStep_ChildInteractiveWorkflowStep')) {
            var el = GetSelectedWorkflowStep();
            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddChildInteractiveWorkflowStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertChildInteractiveWorkflowStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setChildWorkflowStep(oid, sValue) {

        if (IsNull(oid) || IsNull(sValue)) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateChildWorkflowStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("childWorkflowXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function setChildInteractiveWorkflowStep(oid, sValue) {

        if (IsNull(oid) || IsNull(sValue)) {
            return;
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateChildInteractiveWorkflowStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("childWorkflowXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function setDirectionBefore(popupControl) {
        _insertDirection = "before";


        swapInsertIcons(popupControl);
    }


    function setDirectionAfter(popupControl) {
        _insertDirection = "after";


        swapInsertIcons(popupControl);
    }

    function swapInsertIcons(popupControl) {
        if (IsNull(popupControl)) {
            popupControl = $find('mnumnu_InsertDirection');
            if (IsNull(popupControl)) {
                return;
            }
        }

        var menuXml = popupControl.get_menuXml();

        if (_insertDirection == "after") {

            popupControl.setItemProperty('mnu_InsertDirection_Before',
                Microsoft.Crm.CommandBar.MenuControlConstants.iconPathAttributeName,
                "/_imgs/ico_16_insertOff.gif");

            popupControl.setItemProperty('mnu_InsertDirection_After',
                Microsoft.Crm.CommandBar.MenuControlConstants.iconPathAttributeName,
                "/_imgs/ico_16_insertCheck.gif");
        } else {

            popupControl.setItemProperty('mnu_InsertDirection_Before',
                Microsoft.Crm.CommandBar.MenuControlConstants.iconPathAttributeName,
                "/_imgs/ico_16_insertCheck.gif");


            popupControl.setItemProperty('mnu_InsertDirection_After',
                Microsoft.Crm.CommandBar.MenuControlConstants.iconPathAttributeName,
                "/_imgs/ico_16_insertOff.gif");
        }
    }


    function addStopWorkflowStep() {
        if (IsStepEnabled('mnu_AddStep_StopWorkflowStep')) {
            var el = GetSelectedWorkflowStep();

            var command;

            if (IsNull(el) || el.id == "NoStep") {
                command = new RemoteCommand("Workflow", "AddStopWorkflowStep");
                if (!IsNull(el)) {
                    command.SetParameter("parentId", el.getAttribute("parent"));
                } else {
                    command.SetParameter("parentId", "");
                }
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            } else {
                command = new RemoteCommand("Workflow", "InsertStopWorkflowStep");
                command.SetParameter("siblingId", el.id);
                command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
                command.SetParameter("direction", _insertDirection);
            }

            ExecuteCommandAndRefreshWorkflowArea((!IsNull(el) ? el.id : null), command);
        }
    }


    function setStopWorkflowStep(oid, sValue) {

        if (IsNull(oid) || IsNull(sValue)) {
            return
        }


        var command;
        command = new RemoteCommand("Workflow", "UpdateStopWorkflowStep");
        command.SetParameter("activityId", oid);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
        command.SetParameter("stopWorkflowXml", sValue);

        ExecuteCommandAndRefreshWorkflowArea(oid, command);
    }


    function deleteStep() {
        var deleteButton = $get("_MBdeleteStep");
        if (deleteButton.getAttribute("disabled")) {
            return;
        }
        var el = GetSelectedWorkflowStep();
        if (IsNull(el)) {
            return;
        }

        if (IsLastIfBranchWithElseSelected()) {
            alert(LOCID_ERROR_DELETE_COND_BRANCH);
            return;
        }

        var isStageStepSelected = IsStageStepSelected();
        if (isStageStepSelected && !CanWorkflowStageBeDeleted(el.id)) {
            return;
        }

        var proceedWithDelete = false;
        if (isStageStepSelected) {

            proceedWithDelete = confirm(LOCID_CONFIRM_STAGE_STEP_DELETE);
        } else {

            if (IsCompositeStepSelected()) {
                proceedWithDelete = confirm(LOCID_CONFIRM_COMPOSITE_DELETE);
            } else {
                proceedWithDelete = confirm(LOCID_CONFIRM_STEP_DELETE);
            }
        }


        if (proceedWithDelete) {


            if (SelectedStepIsIfBranchWithNoSibling()) {
                el = GetConditionStep(el);
            }

            var command = new RemoteCommand("Workflow", "DeleteWorkflowStep");
            command.SetParameter("activityId", el.id);
            command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);
            ExecuteCommandAndRefreshWorkflowArea(null, command);


            if (isStageStepSelected) {
                _numStageSteps--;
            }
        }
    }

    function WorkflowStageCount() {
        var stageStepCount = 0;

        var command = new RemoteCommand("Workflow", "WorkflowStageCount");
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

        var oResult = command.Execute();
        if (oResult.Success) {
            stageStepCount = oResult.ReturnValue;
        }

        return stageStepCount;
    }


    function CanWorkflowStageBeDeleted(stepId) {
        var canBeDeleted = true;


        var command = new RemoteCommand("Workflow", "CanWorkflowStageBeDeleted");
        command.SetParameter("activityId", stepId);
        command.SetParameter("entityId", $get('crmFormSubmit').crmFormSubmitId.value);

        var oResult = command.Execute();
        if (oResult.Success) {
            canBeDeleted = oResult.ReturnValue;
            if (!canBeDeleted) {

                alert(LOCID_ALERT_STAGE_STEP_NO_DELETE);
            }
        } else {
            canBeDeleted = false;
        }

        return canBeDeleted;
    }

    var newWorkflowStepHtml;

    function ExecuteCommandAndRefreshWorkflowArea(selectedElId, command) {
        command.SetParameter("descriptionXml", GetWFStepDescriptionXml());
        var oResult = command.Execute();
        if (oResult.Success) {
            newWorkflowStepHtml = oResult.ReturnValue;

            _currentSelectedControlId = selectedElId;
            window.setTimeout("ResetWorkflowSteps()", 1);
        }
        return oResult;
    }

    function ResetWorkflowSteps() {
        var elContainer = GetWorkflowDefintionContainerElement();
        ResetSelectedStep();
        if (elContainer != null) {

            elContainer.removeChild(XUI.Html.DomUtils.GetFirstChild(elContainer));

            elContainer.innerHTML = newWorkflowStepHtml;
            RegisterAllClientControlsInDOMElement(elContainer);
        }

        if (!IsNull(_currentSelectedControlId) && (_currentSelectedControlId.length > 0)) {
            var selectedElement = $get(_currentSelectedControlId);
            if (!IsNull(selectedElement)) {
                if (selectedElement.style.display != "none" && selectedElement.style.visibility != "hidden") {
                    selectedElement.focus();
                } else {
                    SelectWorkflowStep(_currentSelectedControlId);
                }
            }
        }

        ResetWFStepDescriptionArray();
        AttachOnChangeEventsToLookups();
        PopulateAssignStepSlugs();
        RemoveBlankOptionFromCreateStep();
        RecollapseSteps();
        DisableDialogPublicationParametersIfNecessary();
    }

    function ReferredArgumentValidation(argumentName) {
        if (IsNull(argumentName)) return false;
        var referredArgumentNamesControl = $get("hidReferredArgumentNames");
        if (!IsNull(referredArgumentNamesControl)) {
            var referredArgumentNamesValue = referredArgumentNamesControl.value;
            if (!IsNull(referredArgumentNamesValue) && referredArgumentNamesValue != "") {
                var argumentNames = referredArgumentNamesValue.split("#");
                if (!IsNull(argumentNames)) {
                    for (var i = 0; i < argumentNames.length; i++) {
                        if (argumentNames[i] == argumentName) {
                            var errorMsg = LOCID_USEDARGUMENT_ERRORMESSAGE;
                            alert(errorMsg);
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }


    function RegisterAllClientControlsInDOMElement(element) {

        RegisterClientControl("SELECT", Mscrm.FormInputControl.SelectInputBehavior, element);


        RegisterClientControl("INPUT",
            Mscrm.FormInputControl.TextBoxInputBehavior,
            element,
            function(node) {

                return Sys.UI.DomElement.containsCssClass(node, "ms-crm-Text");

            });


        RegisterClientControl("IMG",
            Mscrm.FormInputControl.PresenceLookupUIBehavior,
            element,
            function(node) {
                return Sys.UI.DomElement.containsCssClass(node, "ms-crm-Lookup");
            });

        AttachOnChangeEventsToLookups(element.getElementsByTagName("IMG"));
    }

    function RegisterClientControl(domElementName, ajaxClass, element, canCreateComponent) {
        var elements = element.getElementsByTagName(domElementName);
        for (var i = 0; i < elements.length; i++) {
            if (IsNull(canCreateComponent) || canCreateComponent(elements[i]) === true) {
                crmCreate(ajaxClass, {}, null, null, elements[i]);
            }
        }
    }

    function AttachOnChangeEventsToLookups(selectedLookups) {
        var lookups = IsNull(selectedLookups) ? document.documentElement.getElementsByTagName("IMG") : selectedLookups;
        var expectedSuffix = "_lookupwfc";
        for (var i = 0; i < lookups.length; i++) {
            var currentLookup = lookups[i];
            var controlId = currentLookup.id;
            var pos = controlId.lastIndexOf(expectedSuffix);
            if (pos == controlId.length - expectedSuffix.length) {
                var control = Mscrm.FormControlInputBehavior.GetElementBehavior(currentLookup);


                if (!IsNull(control)) {
                    if (controlId.indexOf("Assign") == 0) {
                        control.remove_change(OnSelectAssigneeReturn);
                        control.add_change(OnSelectAssigneeReturn);
                    } else if (controlId.indexOf("ChildWorkflow") == 0) {
                        control.remove_change(OnSelectChildWorkflowReturn);
                        control.add_change(OnSelectChildWorkflowReturn);
                    } else if (controlId.indexOf("ChildInteractiveWorkflow") == 0) {
                        control.remove_change(OnSelectChildInteractiveWorkflowReturn);
                        control.add_change(OnSelectChildInteractiveWorkflowReturn);
                    }
                }
            }
        }
    }

    function DisableDialogPublicationParametersIfNecessary() {
        <% if (!CurrentEntity.Disabled)
           { %>
        var currentState = $get("hidCurrentState");
        if (currentState.value == "Activated") {
            $get("chkOnDemand").setAttribute("disabled", true);
            $get("chkSubprocess").setAttribute("disabled", true);
        } else if (LOCID_IS_DIALOG) {
            var oTable = $get("argumentsTable");
            var oRows = oTable.getElementsByTagName('TR');
            if (oRows.length > 1) {
                $get("chkOnDemand").setAttribute("disabled", true);
                $get("chkSubprocess").setAttribute("disabled", true);
            } else {
                $get("chkOnDemand").removeAttribute("disabled");
                $get("chkSubprocess").removeAttribute("disabled");
            }
        }
        <% } %>
    }

    function showWorkStepMenuKeydown(domEvent) {

        switch (domEvent.keyCode) {
        case 13:
        case 38:
        case 40:
            showWorkStepMenu();
            break;
        }
    }

    function showWorkStepMenu() {

        var isElseStepMenuDisabled = false;
        var isElseIfStepMenuDisabled = false;
        var isCheckStepMenuDisabled = false;
        var isWaitStepMenuDisabled = false;
        var isWaitBranchStepMenuDisabled = true;
        var isCreateRecordMenuDisabled = false;
        var isAssignEntityMenuDisabled = false;
        var isSetStateMenuDisabled = false;
        var isStopWorkflowMenuDisabled = false;
        var isUpdateRecordMenuDisabled = false;
        var isChildWorkflowMenuDisabled = false;
        var isSendEmailMenuDisabled = false;
        var isPromptResponseMenuDisabled = false;
        var isAddPageMenuDisabled = false;
        var isQueryMenuDisabled = false;
        var isChildInteractiveWorkflowMenuDisabled = false;
        var isFormulaMenuDisabled = false;
        var isSDKOperationDisabled = false;
        var el = GetSelectedWorkflowStep();
        var isStageStepSelected = IsStageStepSelected();
        var isInteractionPageSelected = IsInteractionPageSelected();
        var isChildOfInteractionPage = IsChildOfInteractionPage();
        var isIfElseBranchSelected = IsIfElseBranchSelected();
        var isElseBranchSelected = IsElseBranchSelected();
        var stepName = GetSelectedStepName();
        var bExceedMaximumNestedTables = ExceedMaximumNestedTables();
        var disableActionStep = bExceedMaximumNestedTables;


        if ((IsNull(el) && (_numStageSteps > 0)) || isStageStepSelected || bExceedMaximumNestedTables) {
            isCheckStepMenuDisabled = true;
            isElseIfStepMenuDisabled = true;
            isElseStepMenuDisabled = true;
            isCreateRecordMenuDisabled = true;
            isAssignEntityMenuDisabled = true;
            isSetStateMenuDisabled = true;
            isStopWorkflowMenuDisabled = true;
            isUpdateRecordMenuDisabled = true;
            isChildWorkflowMenuDisabled = true;
            isSendEmailMenuDisabled = true;
            isWaitStepMenuDisabled = true;
            isWaitBranchStepMenuDisabled = true;
            disableActionStep = true;
            isPromptResponseMenuDisabled = true;
            isAddPageMenuDisabled = true;
            isQueryMenuDisabled = true;
            isChildInteractiveWorkflowMenuDisabled = true;
            isFormulaMenuDisabled = true;
            isSDKOperationDisabled = true;
        } else {
            isElseStepMenuDisabled = (!isIfElseBranchSelected || IsThereElseBranchExistInTheSelected());
            isElseIfStepMenuDisabled = !isIfElseBranchSelected;
            isCheckStepMenuDisabled = isIfElseBranchSelected || isElseBranchSelected;

            disableActionStep = isCheckStepMenuDisabled;

            if (stepName == WaitTimeoutStepName || stepName == WaitBranchStepName) {
                disableActionStep = true;
                isElseIfStepMenuDisabled = true;
                isElseStepMenuDisabled = true;
                isCheckStepMenuDisabled = true;
                isWaitBranchStepMenuDisabled = false;
            }
            if (isChildOfInteractionPage) {
                disableActionStep = true;
                isElseIfStepMenuDisabled = true;
                isElseStepMenuDisabled = true;
                isCheckStepMenuDisabled = true;
                isWaitBranchStepMenuDisabled = true;
                isPromptResponseMenuDisabled = false;
                isAddPageMenuDisabled = true;
                isQueryMenuDisabled = true;
                isChildInteractiveWorkflowMenuDisabled = true;
                isFormulaMenuDisabled = true;
            } else {
                isPromptResponseMenuDisabled = true;
                isAddPageMenuDisabled = disableActionStep;
                isQueryMenuDisabled = disableActionStep;
                isChildInteractiveWorkflowMenuDisabled = disableActionStep;
                isFormulaMenuDisabled = disableActionStep;
            }
            isWaitStepMenuDisabled = disableActionStep;
            isCreateRecordMenuDisabled = disableActionStep;
            isUpdateRecordMenuDisabled = disableActionStep;
            isAssignEntityMenuDisabled = disableActionStep;
            isSetStateMenuDisabled = disableActionStep;
            isStopWorkflowMenuDisabled = disableActionStep;
            isChildWorkflowMenuDisabled = disableActionStep;
            isSendEmailMenuDisabled = disableActionStep;
            isSDKOperationDisabled = disableActionStep;
        }

        if (!disableActionStep) {
            var updateEntity = HasValidEntityForUpdate()
            var setStateEntity = HasValidEntityForChangeStatus();
            var childWorkflowEntity = HasValidEntityForChildWorkflow();
            var assignEntity = HasValidEntityForAssign();

            if (!updateEntity || !setStateEntity || !childWorkflowEntity || !assignEntity) {
                var retValue = GetAvailableCreateByEntityForStep();
                if (!updateEntity) {
                    updateEntity = retValue.indexOf("update") >= 0;
                }
                if (!setStateEntity) {
                    setStateEntity = retValue.indexOf("changestatus") >= 0;
                }
                if (!childWorkflowEntity) {
                    childWorkflowEntity = retValue.indexOf("childworkflow") >= 0;
                }
                if (!assignEntity) {
                    assignEntity = retValue.indexOf("assign") >= 0;
                }
            }
            isUpdateRecordMenuDisabled = !updateEntity;
            isSetStateMenuDisabled = !setStateEntity;
            isChildWorkflowMenuDisabled = !childWorkflowEntity;
            isAssignEntityMenuDisabled = !assignEntity;
            isSendEmailMenuDisabled = !CanSendEmail();
        }
        addStepMenuCtrl.setItemProperty('mnu_AddStep_StageStep', 'disabled', bExceedMaximumNestedTables.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_CheckStep', 'disabled', isCheckStepMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_ElseIfStep', 'disabled', isElseIfStepMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_ElseStep', 'disabled', isElseStepMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_CreateStep', 'disabled', isCreateRecordMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_UpdateStep', 'disabled', isUpdateRecordMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_AssignStep', 'disabled', isAssignEntityMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_ChangeStatusStep', 'disabled', isSetStateMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_StopWorkflowStep',
            'disabled',
            isStopWorkflowMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_ChildWorkflowStep',
            'disabled',
            isChildWorkflowMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_SendEmailStep', 'disabled', isSendEmailMenuDisabled.toString());
        addStepMenuCtrl.setItemProperty('mnu_AddStep_SDKOperation', 'disabled', isSDKOperationDisabled.toString());
        if (LOCID_IS_ASYNC_WORKFLOW) {
            addStepMenuCtrl.setItemProperty('mnu_AddStep_WaitStep', 'disabled', isWaitStepMenuDisabled.toString());
            addStepMenuCtrl.setItemProperty('mnu_AddStep_WaitBranchStep',
                'disabled',
                isWaitBranchStepMenuDisabled.toString());
        } else if (LOCID_IS_DIALOG) {
            addStepMenuCtrl.setItemProperty('mnu_AddStep_InteractionPageStep',
                'disabled',
                isAddPageMenuDisabled.toString());
            addStepMenuCtrl.setItemProperty('mnu_AddStep_InteractionStep',
                'disabled',
                isPromptResponseMenuDisabled.toString());
            addStepMenuCtrl.setItemProperty('mnu_AddStep_QueryDataStep', 'disabled', isQueryMenuDisabled.toString());
            addStepMenuCtrl.setItemProperty('mnu_AddStep_ChildInteractiveWorkflowStep',
                'disabled',
                isChildInteractiveWorkflowMenuDisabled.toString());
            addStepMenuCtrl.setItemProperty('mnu_AddStep_AssignVariableStep',
                'disabled',
                isFormulaMenuDisabled.toString());
        } else if (LOCID_IS_CUSTOMOPERATION) {
            addStepMenuCtrl.setItemProperty('mnu_AddStep_AssignOutputArgumentStep', 'disabled', false);
        }

        var menuItems = XUI.Xml.SelectNodes(addStepMenuCtrl.get_menuXml(), "menu/item", null);
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            var idAttr = menuItem.attributes.getNamedItem('id');
            if (!IsNull(idAttr) && XUI.Xml.GetText(idAttr).indexOf("CustomActivity") != -1) {
                var attribute = menuItem.attributes.getNamedItem('disabled');
                if (IsNull(attribute)) {
                    attribute = addStepMenuCtrl.get_menuXml().createAttribute('disabled');
                    menuItem.attributes.setNamedItem(attribute)
                }
                XUI.Xml.SetText(menuItem.attributes.getNamedItem('disabled'), isCreateRecordMenuDisabled);
            }
        }
    }

    function IsStepEnabled(stepName) {
        var disabledAttr = addStepMenuCtrl.getItemProperty(stepName, 'disabled');
        if (isNullOrEmptyString(disabledAttr)) {
            return true;
        }

        return !Mscrm.Utilities.parseBoolean(disabledAttr);
    }

    function HasValidEntityForAssign() {

        try {
            var assignEntity = $get("hidHasAssignEntity");
            if (assignEntity.value == "1") {
                return true;
            }
            return false;
        } catch (e) {
        }
        return true;
    }

    function CanSendEmail() {

        try {
            var val = $get("hidCanSendEMail");
            if (val.value == "1") {
                return true;
            }
            return false;
        } catch (e) {
        }
        return true;
    }


    function HasValidEntityForUpdate() {
        try {
            var updateEntity = $get("hidHasUpdateEntity");
            if (updateEntity.value == "1") {
                return true;
            }
            return false;
        } catch (e) {
        }
        return true;
    }

    function HasValidEntityForChangeStatus() {
        try {
            var setStateEntity = $get("hidHasChangeStatusEntity");
            if (setStateEntity.value == "1") {
                return true;
            }
            return false;
        } catch (e) {
        }
        return true;
    }

    function HasValidEntityForChildWorkflow() {
        try {
            var childWorkflowEntity = $get("hidHasChildWorkflowEntity");
            if (childWorkflowEntity.value == "1") {
                return true;
            }
            return false;
        } catch (e) {
        }
        return true;
    }


    function IsGlobalCustomOperation() {
        if (LOCID_IS_CUSTOMOPERATION && $get("hidPrimaryEntity").value == "none") {
            return true;
        }
        return false;
    }

    function ChooseAttributes(primaryEntityName) {

        oArgs = new Object();
        oArgs.FieldsXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preFieldsXml")));
        oArgs.FieldPropertiesXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("prePropertiesXml")));
        oArgs.PrimaryEntityName = primaryEntityName;
        oArgs.GridXml = _iAttrs;

        var oURL = Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/AddColumns.aspx?");

        <% if (_isProcessUnificationFCBEnabled && _isAsyncWorkflowAndBpfModelEntityScenario)
           { %>
        var fetchXml = "<fetch><entity name=\"" +
            CrmEncodeDecode.CrmXmlAttributeEncode(primaryEntityName) +
            "\"><filter></filter></entity></fetch>";
        var _oFetchXmlDom = XUI.Xml.LoadXml(fetchXml);
        var _oEntitiesXmlDom = XUI.Xml.LoadXml(XUI.Html.GetText($get("preEntitiesXml")));
        var _oLayoutXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preLayoutXml")));

        oArgs.GridXml = _oLayoutXml;
        oArgs.FetchXml = _oFetchXmlDom;
        oArgs.EntitiesXml = _oEntitiesXmlDom;
        oArgs.ShowRelatedEntities = true;
        oArgs.bQuickFindMode = false;
        oURL.get_query()["mode"] = "select";
        <% }
           else
           { %>
        oURL.get_query()["mode"] = "updateonattr";
        <% } %>


        var currentState = $get("hidCurrentState");
        if (currentState.value == "Published") {
            oURL.get_query()["readOnly"] = "true";
        }

        oURL.get_query()["entityId"] = "";
        var sDialogArgs = "help:0;status:0;scroll:0;center:1;";
        var crmDialog = new Mscrm.CrmDialog(oURL, oArgs, 570, 450, sDialogArgs);
        crmDialog.setCallbackInfo("performActionAfterAddColumns", this, null);
        crmDialog.show();
    }

    function performActionAfterAddColumns(oAttrObjs) {
        var ownerChanges = false;
        var statecodeChanges = false;
        if (!oArgs.ShowRelatedEntities) {
            if (oAttrObjs) {

                _iAttrs = "";
                for (var i = (oAttrObjs.length - 2); i >= 0; i--) {

                    if (i == 0) {
                        _iAttrs += oAttrObjs[i].FieldName;
                    } else {
                        _iAttrs += oAttrObjs[i].FieldName + ";";
                    }

                    if (oAttrObjs[i].FieldName == "ownerid") {
                        ownerChanges = true;
                    }

                    if (oAttrObjs[i].FieldName == "statecode") {
                        statecodeChanges = true;
                    }
                }


                if (ownerChanges == true) {
                    $get("chkOnUpdateOwner").checked = true;
                } else {
                    $get("chkOnUpdateOwner").checked = false;
                }

                if (statecodeChanges == true) {
                    $get("chkOnUpdateStatus").checked = true;
                } else {
                    $get("chkOnUpdateStatus").checked = false;
                }

                if (oAttrObjs[oAttrObjs.length - 1] == "true") {
                    _bAllAttrSelected = true;
                } else {
                    _bAllAttrSelected = false;
                }
            } else if (oAttrObjs == false) {

                _iAttrs = "";
                $get("chkOnUpdateOwner").checked = false;
                $get("chkOnUpdateStatus").checked = false;
                _bAllAttrSelected = false;
            }
        } else {

            if (oAttrObjs && oAttrObjs.GridXml) {

                _iAttrs = "";
                var gridXmlDoc = XUI.Xml.LoadXml(oAttrObjs.GridXml);
                var columnCount = XUI.Xml.SelectNodes(gridXmlDoc.documentElement, "/grid/row/cell", null).length;

                for (var i = 0; i < columnCount; i++) {
                    var node = gridXmlDoc.getElementsByTagName('cell')[i];
                    var attributeName = node.getAttribute('name');
                    if (i == columnCount - 1) {
                        _iAttrs += attributeName;
                    } else {
                        _iAttrs += attributeName + ";";
                    }
                }


                if (ownerChanges == true) {
                    $get("chkOnUpdateOwner").checked = true;
                } else {
                    $get("chkOnUpdateOwner").checked = false;
                }

                if (statecodeChanges == true) {
                    $get("chkOnUpdateStatus").checked = true;
                } else {
                    $get("chkOnUpdateStatus").checked = false;
                }

                if (oAttrObjs[oAttrObjs.length - 1] == "true") {
                    _bAllAttrSelected = true;
                } else {
                    _bAllAttrSelected = false;
                }
            } else if (oAttrObjs == false) {

                _iAttrs = "";
                $get("chkOnUpdateOwner").checked = false;
                $get("chkOnUpdateStatus").checked = false;
                _bAllAttrSelected = false;
            }
        }
    }

    function UpdateAttributeList(attribute) {

        var isChecked;
        if (attribute == "ownerid") {
            isChecked = $get("chkOnUpdateOwner").checked;
        } else if (attribute == "statecode") {
            isChecked = $get("chkOnUpdateStatus").checked;
        }


        if (isChecked) {

            if (_iAttrs == "") {
                _iAttrs = attribute;
            } else {
                _iAttrs = _iAttrs + ";" + attribute;
            }
        } else {

            var reAttribute = new RegExp("\\b" + attribute + "\\b");
            _iAttrs = _iAttrs.replace(reAttribute, "");


            _iAttrs = _iAttrs.replace(/^;/, "");


            _iAttrs = _iAttrs.replace(";;", ";");


            _iAttrs = _iAttrs.replace(/;$/, "");
        }
    }

    function OnCreateCheckboxChanged() {
        ToggleStageDropDown(0);
    }

    function OnAssignOrSetStateChangeCheckboxChanged(attributeName) {
        UpdateAttributeList(attributeName);
        ToggleStageDropDown(1);
    }

    function OnAttributeChangeCheckboxChanged() {
        ToggleUpdateAttrButton();
        ToggleStageDropDown(1);
    }

    function OnDeleteCheckboxChanged() {
        ToggleStageDropDown(2);
    }

    function ToggleStageDropDown(stage) {
        var control, state;
        switch (stage) {
        case 0:
            control = $get('createstage');

            shouldDisable = true;
            break;
        case 1:
            control = $get('updatestage');
            shouldDisable = !($get("chkOnUpdateOwner").checked ||
                $get("chkOnUpdateStatus").checked ||
                $get("chkOnUpdateAttr").checked);
            break;
        case 2:
            control = $get('deletestage');

            shouldDisable = true;
            break;
        }

        if (!IsNull(control)) {
            control.disabled = shouldDisable;
        }
    }

    function ToggleUpdateAttrButton() {

        var attrBtn = document.getElementById("btnChooseAttributes");

        if (attrBtn.disabled) {
            attrBtn.disabled = false;
        } else {
            attrBtn.disabled = true;


            _iAttrs = "";


            if ($get("chkOnUpdateStatus").checked) {
                _iAttrs = "statecode";
            }


            if ($get("chkOnUpdateOwner").checked) {
                if (_iAttrs != "") {
                    _iAttrs = _iAttrs + ";";
                }

                _iAttrs = _iAttrs + "ownerid";
            }
        }
    }

    function ChangeWorkflowState(state, workflowObjId, changeStateId, entityTypeId) {
        var oResult;
        if (state == 'activate') {

            SavePublicationParams();


            var command = new RemoteCommand("Workflow", "PublishReady");
            command.SetParameter("workflowId", $get('crmFormSubmit').crmFormSubmitId.value);
            var oResult = ExecuteCommandAndRefreshWorkflowArea(GetSelectedWorkflowStep(), command);

            if (oResult.Success) {

                changeState(state, workflowObjId, changeStateId, entityTypeId);
            }
        } else {

            changeState(state, workflowObjId, changeStateId, entityTypeId);
        }

        auto(Workflow);
    }

    function LoadWorkflowEventNotification() {

        <% if (!string.IsNullOrEmpty(workflowErrorMessage))
           { %>
        {
            $find("WorkflowNotifications").AddNotification("invalidWorkflow",
                Mscrm.Severity.SEVERITYERROR,
                "",
                <%= "\"" + workflowErrorMessage + "\"" %>);
        }
        <% } %>
    }


    function VisualizeWorkflow(workflowID, workflowEnumValue) {
        var visualizeUri = Mscrm.CrmUri.create("/Tools/SystemCustomization/ProcessDesigner/processdesigner.aspx");
        var width = window.screen.availWidth - 10;
        var height = window.screen.availHeight;
        visualizeUri.get_query()["id"] = workflowID;
        visualizeUri.get_query()["type"] = workflowEnumValue;
        openStdDlg(visualizeUri, null, width, height, true, false, "maximize:yes;minimize:yes");
    }

</script>
</head>
<body>
<pre id="preFieldsXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_fieldXmlDoc.OuterXml) %></pre>
<pre id="prePropertiesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_propertiesXmlDoc.OuterXml) %></pre>
<pre id="preAttrList" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_attributeList) %></pre>
<pre id="preEntitiesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_entitiesXml) %></pre>
<pre id="preLayoutXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_layoutXml) %></pre>

<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:appformmenubar id="crmMenuBar" runat="server"></mnu:appformmenubar>
        </div>
    </div>
    <div class="ms-crm-Form-Background ms-crm-absolutePosition" style="top: 98px; bottom: 25px;">
        <% if (!string.IsNullOrEmpty(workflowErrorMessage))
           { %>
            <div>
                <div class="ms-crm-Dialog-Notification-Bar">
                    <cnt:appnotifications id="WorkflowNotifications" AutoRegisterClientComponent="false" runat="server"></cnt:appnotifications>
                </div>
            </div>
        <% } %>
        <div class="ms-crm-Form-Nav-Container ms-crm-Form-LeftBar">
            <cnt:appnavigationbar id="crmNavBar" runat="server"></cnt:appnavigationbar>
        </div>
        <div id="tdAreas" class="ms-crm-Form-Main-Container" runat="server">
            <div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
                <div id="areaForm" class="ms-crm-Form-Area ms-crm-absolutePosition">
                    <frm:hardcodedform id="crmForm" supportsdefaultdata="true" runat="server">
                        <div class="ms-crm-TabBar-Cell">
                            <cnt:AppTabBar id="crmTabBar" runat="server"/>
                        </div>
                        <div class="ms-crm-absolutePosition" id="mainTable" style="top: 20px">
                            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                                <div id="tab0" class="ms-crm-Tab" style="display: inline; overflow-y: auto;">
                                    <div style="min-width: 800px; position: relative; height: 100%;">

                                        <div id="PP_Container">
                                            <div id="WF_ParameterContainer" class="stdTable">

                                                <div id="PP_menuBar" style="height: 25px; padding: 2px;">
                                                    <nobr>
                                                        <A HREF="#" onclick="ToggleParameterView();" id="optionsTitle">
                                                            <img name="optionsImg" align="middle" class="expandCollapseImg" src="/_imgs/ico_16_expanded.png" id="optionsImg"/>
                                                            <b style="padding-left: 3px; padding-right: 3px; vertical-align: middle" id="optionsText">
                                                                <loc:Text ResourceId="WorkflowPublicationTitleHide" runat="server"/>
                                                            </b>
                                                        </A>
                                                    </nobr>
                                                </div>
                                                <div id="PublicationParameterArea" runat="server"></div>
                                                <% if (IsCustomOperation)
                                                   { %>
                                                    <div id="CO_menuBar" style="height: 25px; padding: 2px;">
                                                        <nobr>
                                                            <A HREF="#" onclick="ToggleArgumentView();" id="argumentsTitle">
                                                                <img name="argumentsImg" align="middle" class="expandCollapseImg" src="/_imgs/ico_16_expanded.png" id="argumentsImg"/>
                                                                <b style="padding-left: 3px; padding-right: 3px; vertical-align: middle" id="argumentsText">
                                                                    <loc:Text ResourceId="WorkflowArgumentsTitleHide" runat="server"/>
                                                                </b>
                                                            </A>
                                                        </nobr>
                                                    </div>
                                                    <div id="CO_edit">
                                                        <asp:PlaceHolder id="placeholderCustomOperationArguments" runat="server"/>
                                                    </div>
                                                <% } %>
                                            </div>
                                            <div id="WF_Container" class="ms-crm-absolutePosition">
                                                <div class="wfWorkflowDefinitionContainer">
                                                    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">

                                                        <div class="wfMenuBarContainer">
                                                            <mnu:AppGridMenuBar id="WorkflowStepMenuBar" runat="server"/>
                                                        </div>


                                                        <div class="ms-crm-absolutePosition wfGridDefinitionContainer">
                                                            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                                                                <div id='gridDefinitionContainer' runat="server" class="wfWorkflowStepArea"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="tab1" class="ms-crm-Tab" style="display: none; overflow-y: auto;">
                                    <table width="98%" height="98%" cellspacing="0" cellpadding="3" style="table-layout: fixed;">
                                        <col width="100"/><col/>
                                        <tr>
                                            <td id="owner_c" class="ms-crm-Field-Required">
                                                <label for="ownerid">
                                                    <loc:Text ResourceId="Web.SFA.Workflow.owner" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                </label>
                                            </td>
                                            <td>
                                                <sdk:LookupControl id="ownerid" AccessibilityLabelResourceId="Web.SFA.Workflow.owner" LookupStyle="single" runat="server" TabIndex="2"/>
                                            </td>
                                        </tr>
                                        <tr height="100%">
                                            <td valign="top">
                                                <label for="description">
                                                    <loc:Text ResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_85" runat="server"/>
                                                </label>
                                            </td>
                                            <td valign="top">
                                                <sdk:TextAreaControl id="description" runat="server" TabIndex="3" height="500px" maxlength="2000"/>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="tab2" class="ms-crm-Tab" style="display: none; overflow: hidden;" runat="server">
                                </div>
                                <div id="dynamicValuePlaceHolder" runat="server" style="display: none;">
                                </div>
                            </div>
                        </div>
                    </frm:hardcodedform>
                </div>
            </div>
        </div>
    </div>
    <div class="ms-crm-Form-StatusBar-Container">
        <div class="ms-crm-Form-StatusBar" colspan="2">
            <sdk:renderstatuscontrol id="crmRenderStatus" runat="server"/>
        </div>
    </div>
</div>
<input type="hidden" id="hidCurrentState" value="<%= CurrentEntity["statecode"] %>"/>
<input type="hidden" id="hidPrimaryEntity" value="<%= _primaryEntityName %>"/>
<input type="hidden" id="collapsedStageControlIdList" value="" runat="server"/>
</body>
</html>