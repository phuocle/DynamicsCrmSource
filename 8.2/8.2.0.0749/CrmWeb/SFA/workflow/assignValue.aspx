<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.AssignVariablePage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html xmlns:crm>
<head>
<title>
    <loc:text resourceid="Title_AssignValue" runat="server"/>
</title>
<style type="text/css">
    .ms-crm-Input-Container {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        text-align: right;
        <% }
           else
           { %>
        text-align: left;
        <% } %>
    }
</style>
<cnt:appheader id="crmHeader" runat="server"/>
<script language="Javascript" type="text/javascript">
    var saveAndClose = false;
    var initialXml = "";
    var lookupControls;
    var _currentLookupId = "";
    var _divSuffix = "_div";
    Sys.Application.add_load(function() {
        PageOnLoad();
        attachWindowOnBeforeUnload(Window_OnBeforeUnload);

        window.focus();

        $get("crmForm").style.height = "100%";
        var crmFormCtrl = $find("crmForm");
        crmFormCtrl.detachCloseAlert();
        crmFormCtrl.add_onSave(save);
        crmFormCtrl.set_bypassValidation(true);
    });

    function Window_OnBeforeUnload(oEvent) {
        oEvent = oEvent.rawEvent;

        if (!saveAndClose && GetValueForTag('readonlymode=') != "true") {
            var currentXml = GenerateXml()
            if (initialXml != currentXml) {
                oEvent.returnValue = (LOCID_FORMS_SAVE_CONFIRM_TITLE);
                return (LOCID_FORMS_SAVE_CONFIRM_TITLE);
            }
        }
    }

    function save(sender, args) {
        if (args) {

            args.preventDefault();
        }
        var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");

        if (stepLabel.get_dataValue() == null || IsGetCurrentLookupEmpty() || IsValueEmpty()) {
            alert(LOCID_REQUIRED_FIELD);
            return;
        }

        Mscrm.Utilities.setReturnValue(GenerateXml());
        saveAndClose = true;
        closeWindow();
    }

    function IsValueEmpty() {
        var valueType = GetCurrentVariableType();
        switch (valueType) {
        case LOCID_VARIABLE_TEXT:
            return IsFieldEmpty("variableValueText");
        case LOCID_VARIABLE_INTEGER:
            return IsFieldEmpty("variableValueInteger");
        case LOCID_VARIABLE_FLOAT:
            return IsFieldEmpty("variableValueFloat");
        case LOCID_VARIABLE_DATEONLY:
            return IsFieldEmpty("variableValueDateOnly");
        case LOCID_VARIABLE_DATETIME:
            return IsFieldEmpty("variableValueDateTime");
        case LOCID_VARIABLE_LOOKUP:
            return IsLookupFieldEmpty();
        }
    }

    function IsFieldEmpty(controlId) {
        var control = $get(controlId);
        var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);

        if (IsDataSlugSpecified(control)) {
            return false;
        } else {
            var value = ajaxControl.get_dataValue();
            return isNullOrEmptyString(value);
        }
    }

    function IsLookupFieldEmpty() {

        var currentLookup = document.getElementById(_currentLookupId);
        if (IsDataSlugSpecified(currentLookup)) {
            return false;
        } else {
            var lookupitems = Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Items();
            return (lookupitems.length == 0);
        }
    }

    function PageOnLoad() {
        formulateLookupCollection();

        GenerateAssignVariableTypeMapping();
        AttachAttribute("variableValueText");
        AttachAttribute("variableValueInteger");
        AttachAttribute("variableValueFloat");
        AttachAttribute("variableValueDateOnly");
        AttachAttribute("variableValueDateTime");

        var slugValue = $get("hidSlugInfo").value;
        if ($get("isReplacementRequired").value) {
            slugValue = slugValue.replace($get("oldSlugSubstring").value, $get("newSlugSubstring").value);
        }
        typeChanged(false);
        var readOnlyForm = GetValueForTag('readonlymode=');
        if (readOnlyForm == 'true') {
            disableAllFields();
        }
        PopulateSlugControls(slugValue);
        initialXml = GenerateXml("Initial");
        if (readOnlyForm != 'true') {
            $get("entityDescription").focus();
        }
    }

    function AttachAttribute(attribute) {
        var attrControl = $get(attribute);
        $addHandler(attrControl, "focus", OnAttributeFocus);
    }


    function disableAllFields() {
        SetReadOnlyForm(true);
        Mscrm.Utilities.enableDisableDomElement($get("valueDescription"), true);
        document.getElementById("variableSelector").disabled = true;
        document.getElementById("argumentSelector").disabled = true;
        $get("variableValueText").disabled = true;
        $get("entityDescription").disabled = true;
        $get("variableValueInteger").disabled = true;
        $get("variableValueFloat").disabled = true;
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateOnly").set_disabled(true);
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateTime").set_disabled(true);
        if (GetCurrentVariableType() == LOCID_VARIABLE_LOOKUP) {
            Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).setDisabled(true)
        }
        document.getElementById("radioInputArgument").disabled = true;
        document.getElementById("radioVariable").disabled = true;
    }


    function GenerateXml(sVal) {
        var sXml = "";
        sXml += "<AssignStep>";
        sXml += GenerateStepLabelXml();

        var vSelector = document.getElementById("variableSelector");
        var aSelector = document.getElementById("argumentSelector");
        if ((($get("radioVariable").checked == 1) && (vSelector.length != 0)) ||
            (($get("radioVariable").checked == 0) && (aSelector.length != 0))) {
            sXml += GenerateVariableXml(sVal);
        }
        sXml += "</AssignStep>";
        return sXml;
    }

    function GenerateStepLabelXml() {
        var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
        var sXml = "<steplabel>" + CrmEncodeDecode.CrmXmlEncode(stepLabel.get_dataValue()) + "</steplabel>";
        return sXml;
    }

    function GenerateVariableXml(sVal) {
        var sXml = "";
        sXml += "<Variable>";
        sXml += GenerateVariableTypeXml();
        sXml += GenerateVariableNameXml();
        sXml += GenerateVariableDataTypeXml();
        sXml += GenerateValueXml(sVal);
        sXml += "</Variable>";
        return sXml;
    }

    function GenerateVariableTypeXml() {
        var sXml = "";
        sXml += "<VariableType>" + ($get("radioVariable").checked ? "0" : "1") + "</VariableType>";
        return sXml;
    }

    function GenerateVariableDataTypeXml() {
        var sXml = "";
        sXml += "<VariableDataType>" + CrmEncodeDecode.CrmXmlEncode(GetCurrentVariableType()) + "</VariableDataType>";
        return sXml;
    }

    function GenerateVariableNameXml() {
        var sXml = "";
        var vSelector = document.getElementById("variableSelector");
        var aSelector = document.getElementById("argumentSelector");
        sXml += "<VariableName>" +
            ($get("radioVariable").checked
                ? CrmEncodeDecode.CrmXmlEncode(vSelector[vSelector.selectedIndex].text)
                : CrmEncodeDecode.CrmXmlEncode(aSelector[aSelector.selectedIndex].text)) +
            "</VariableName>";
        return sXml;
    }

    function GenerateValueXml(sVal) {
        var sXml = "<VariableValue>";
        var value = GetCurrentVariableType();
        switch (value) {
        case LOCID_VARIABLE_TEXT:
            sXml += GetValueControlXml("variableValueText", sVal);
            break;
        case LOCID_VARIABLE_INTEGER:
            sXml += GetValueControlXml("variableValueInteger", sVal);
            break;
        case LOCID_VARIABLE_FLOAT:
            sXml += GetValueControlXml("variableValueFloat", sVal);
            break;
        case LOCID_VARIABLE_DATEONLY:
            sXml += GetValueControlXml("variableValueDateOnly", sVal);
            break;
        case LOCID_VARIABLE_DATETIME:
            sXml += GetValueControlXml("variableValueDateTime", sVal);
            break;
        case LOCID_VARIABLE_LOOKUP:
            sXml += GetLookupValueControlXml(sVal);
            break;
        }
        sXml += "</VariableValue>";
        return sXml;
    }

    function GetValueControlXml(controlId, sVal) {
        control = $get(controlId);
        ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);


        if (IsDataSlugSpecified(control)) {
            return GetModifiedSlug(control, GetCurrentVariableType(), controlId, sVal);
        } else {
            var value = ajaxControl.get_dataValue();
            return (value == null)
                ? ""
                : (CrmEncodeDecode.CrmXmlEncode(IsDateControl(control) ? FormatDateTime(value) : value));
        }
    }

    function GetLookupValueControlXml(sVal) {
        var currentLookup = document.getElementById(_currentLookupId);
        if (IsDataSlugSpecified(currentLookup)) {
            return GetModifiedSlug(currentLookup, GetCurrentVariableType(), _currentLookupId, sVal);
        } else if (!IsLookupFieldEmpty()) {


            var items = Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Items();

            var type = items[0].type;
            var oid = items[0].id;
            return CrmEncodeDecode.CrmXmlEncode(oid + ";" + type);
        } else {
            return "";
        }
    }

    function GetModifiedSlug(control, currentVariableType, controlId, sVal) {
        var slugXml = "";
        if (sVal != "Initial") {
            var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control));
            slugXml = slugBehavior.get_slugValue();
        } else {
            slugXml = "<" +
                controlId +
                ">" +
                CrmEncodeDecode.CrmXmlEncode(GetDefaultSlugValue(controlId)) +
                "</" +
                controlId +
                ">";
        }
        slugXml = replaceSlugXmlBindingsForLookup(slugXml, currentVariableType);
        var replacmentXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\"" +
            GetCurrentKeySlugValue() +
            "\"/>");
        var oldXml;
        switch (currentVariableType) {
        case LOCID_VARIABLE_TEXT:
            oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueText\"/>");
            break;
        case LOCID_VARIABLE_INTEGER:
            var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueInteger\"/>");
            break;
        case LOCID_VARIABLE_FLOAT:
            var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueFloat\"/>");
            break;
        case LOCID_VARIABLE_LOOKUP:
            var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueLookup\"/>");
            break;
        case LOCID_VARIABLE_DATEONLY:
            var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueDateOnly\"/>");
            break;
        case LOCID_VARIABLE_DATETIME:
            var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".variableValueDateTime\"/>");
            break;
        }
        return slugXml.replace(oldXml, replacmentXml);
    }

    function GetCurrentKeySlugValue() {
        return ($get("radioVariable").checked
            ? $get("variableSelector").getAttribute("variableSlug" + $get("variableSelector").selectedIndex)
            : $get("argumentSelector").getAttribute("variableSlug" + $get("argumentSelector").selectedIndex));
    }


    function GetCurrentVariableType() {
        var selector = ($get("radioVariable").checked
            ? Mscrm.FormControlInputBehavior.GetBehavior("variableSelector")
            : Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector"));
        var value = selector.get_dataValue();
        if (value == null) {

            return "0";
        }
        return value.charAt(value.length - 1);
    }

    function IsGetCurrentLookupEmpty() {
        var selector = ($get("radioVariable").checked
            ? Mscrm.FormControlInputBehavior.GetBehavior("variableSelector")
            : Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector"));
        var value = selector.get_dataValue();
        if (value == null) {
            return true;
        }
    }

    function typeChanged(clearValueData) {
        if ($get("radioVariable").checked) {
            toggleVariableSelectorVisibility(true);
        } else {
            toggleVariableSelectorVisibility(false);
        }
        showValueBox(clearValueData);
    }

    function toggleVariableSelectorVisibility(variablesVisible) {

        $get("labelVarSelector").style.display = $get("variableSelector").style
            .display = (variablesVisible ? "inline" : "none");
        $get("labelArgSelector").style.display = $get("argumentSelector").style
            .display = (variablesVisible ? "none" : "inline");

        (variablesVisible ? $get("variableSelector").focus() : $get("argumentSelector").focus());
    }

    function showValueBox(clearData) {
        if (clearData) {
            clearAllValueBoxes();
        }
        var value = GetCurrentVariableType();

        Mscrm.FormControlInputBehavior.GetBehavior("variableValueText")
            .setDisplay(value == LOCID_VARIABLE_TEXT ? true : false);
        $get("labelValueText").style.display = (value == LOCID_VARIABLE_TEXT ? "inline" : "none");
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueInteger")
            .setDisplay(value == LOCID_VARIABLE_INTEGER ? true : false);
        $get("labelValueInteger").style.display = (value == LOCID_VARIABLE_INTEGER ? "inline" : "none");
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueFloat")
            .setDisplay(value == LOCID_VARIABLE_FLOAT ? true : false);
        $get("labelValueFloat").style.display = (value == LOCID_VARIABLE_FLOAT ? "inline" : "none");
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateOnly")
            .setDisplay(value == LOCID_VARIABLE_DATEONLY ? true : false);
        $get("labelValueDateOnly").style.display = (value == LOCID_VARIABLE_DATEONLY ? "inline" : "none");
        Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateTime")
            .setDisplay(value == LOCID_VARIABLE_DATETIME ? true : false);
        $get("labelValueDateTime").style.display = (value == LOCID_VARIABLE_DATETIME ? "inline" : "none");

        $get("labelValueLookup").style.display = $get("variableValueLookup_d").style
            .display = (value == LOCID_VARIABLE_LOOKUP ? "inline" : "none");

        if (value == LOCID_VARIABLE_LOOKUP) {
            showHideLookupControls();
        }


        if (GetValueForTag('readonlymode=') != "true") {
            try {
                switch (value) {
                case LOCID_VARIABLE_TEXT:
                    Mscrm.FormControlInputBehavior.GetBehavior("variableValueText").setFocus();
                    break;
                case LOCID_VARIABLE_INTEGER:
                    Mscrm.FormControlInputBehavior.GetBehavior("variableValueInteger").setFocus();
                    break;
                case LOCID_VARIABLE_FLOAT:
                    Mscrm.FormControlInputBehavior.GetBehavior("variableValueFloat").setFocus();
                    break;
                case LOCID_VARIABLE_DATEONLY:
                    Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateOnly").setFocus();
                    break;
                case LOCID_VARIABLE_DATETIME:
                    Mscrm.FormControlInputBehavior.GetBehavior("variableValueDateTime").setFocus();
                    break;

                }
            } catch (e) {
            }
        }
    }

    function clearAllValueBoxes() {
        var vText = document.getElementById("variableValueText");
        var vInteger = document.getElementById("variableValueInteger");
        var vDecimal = document.getElementById("variableValueFloat");
        var vDateOnly = document.getElementById("variableValueDateOnly");
        var vDateTime = document.getElementById("variableValueDateTime");
        clearControl(vText);
        clearControl(vInteger);
        clearControl(vDecimal);
        clearControl(vDateOnly);
        clearControl(vDateTime);
        clearLookupControl();
    }

    function clearControl(control) {
        if (IsDataSlugSpecified(control)) {
            var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control));
            slugBehavior.DeleteDataSlug();
        }
        Mscrm.FormControlInputBehavior.GetBehavior(control.id).set_dataValue(null);
    }

    function formulateLookupCollection() {

        var str = LOCID_LOOKUPS_CONTROL;
        lookupControls = str.split(";");
    }

    function showHideLookupControls() {

        var vSelector = Mscrm.FormControlInputBehavior.GetBehavior("variableSelector");
        var aSelector = Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector");
        for (var i = 0; i < lookupControls.length - 1; i++) {
            if ((vSelector.get_dataValue() == lookupControls[i] && $get("radioVariable").checked == "1") ||
                (aSelector.get_dataValue() == lookupControls[i] && $get("radioVariable").checked == "0")) {
                _currentLookupId = lookupControls[i];
                var lookUpDivElement = $get("variableValueLookup_d");
                lookUpDivElement.appendChild(document.getElementById(lookupControls[i] + _divSuffix));
                setLookupAttributeMappings();
                break;
            }
        }
    }

    function clearLookupControl() {


        if (!isNullOrEmptyString(_currentLookupId)) {
            var vLookup = document.getElementById(_currentLookupId);
            if (IsDataSlugSpecified(vLookup)) {
                var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(vLookup));
                slugBehavior.DeleteDataSlug();
            } else {


                Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Clear(false);
            }
        }

        var lookUpDivElement = $get("variableValueLookup_d");
        if (lookUpDivElement.childNodes.length != 0) {
            $get("hiddenDiv").appendChild(XUI.Html.DomUtils.GetFirstChild(lookUpDivElement));
        }
        $get("variableValueLookup_d").innerHTML = "";
    }

    function setLookupAttributeMappings() {


        AddAttributeTypeMapping(_currentLookupId, "Lookup");
        AttachAttribute(_currentLookupId);
        if (GetValueForTag('readonlymode=') != "true") {
            try {
                Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).setFocus();
            } catch (e) {
            }
        }

    }

    function replaceSlugXmlBindingsForLookup(slugXml, currentVariableType) {

        if (currentVariableType == LOCID_VARIABLE_LOOKUP) {
            slugXml = slugXml.replace("<" + _currentLookupId + ">", "<variableValueLookup>");
            slugXml = slugXml.replace("</" + _currentLookupId + ">", "</variableValueLookup>");
            slugXml = slugXml.replace(CrmEncodeDecode.CrmXmlEncode("<" + _currentLookupId + "DefaultValueControl"),
                CrmEncodeDecode.CrmXmlEncode("<variableValueLookupDefaultValueControl"));
            slugXml = slugXml.replace(CrmEncodeDecode.CrmXmlEncode("</" + _currentLookupId + "DefaultValueControl>"),
                CrmEncodeDecode.CrmXmlEncode("</variableValueLookupDefaultValueControl>"));

        }
        return slugXml;
    }
</script>

</head>
<body scroll="no">
<form id="resultRender" action="" method="post" target="resultFrame">
    <input type="hidden" name="variableXml" value="">
</form>
<table cellspacing="0" width="100%" cellpadding="0">
    <tr>
        <td style="padding-bottom: 5px" colspan="2">
            <mnu:appgenericmenubar id="menuBar" runat="server"/>
        </td>
    </tr>
</table>

<div style="position: absolute; top: 54px; bottom: 0px; width: 100%;">
    <table id="outerTableID" class="outerTable" cellspacing="0" cellpadding="5" height="100%">
        <tr>
            <td colspan="2">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar ms-crm-alignText-leadingedge" style="vertical-align: bottom">
                            <h4 class="ms-crm-Form">
                                <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.GeneralSection" runat="server"/>
                            </h4>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr id="valueDescription">
            <td colspan="2">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <col width="100px">
                    <col>
                    <tr class="param">
                        <td id="Td2" class="ms-crm-Field-Required">
                            <label for="entityDescription">
                                <loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.StatementLabel" runat="server"/>
                                <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                            </label>
                        </td>
                        <td>
                            <ui:textbox id="entityDescription" tabindex="10" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr id="rowDesign" height="100%">
            <td style="vertical-align: top" width="100%">
                <table width="99%" cellpadding="0" cellspacing="5">
                    <tr>

                        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar ms-crm-alignText-leadingedge" style="vertical-align: bottom" style="padding-left: 10px; padding-right: 10px;">
                            <h4 class="ms-crm-Form">
                                <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.ValueDetailSection" runat="server"/>
                            </h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
                                            <col width="80px">
                                            <col>
                                            <tr class="param">
                                                <td id="Td5" style="vertical-align: top">
                                                    <label for="radioVariableType">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Type" runat="server"/>
                                                    </label>
                                                </td>
                                                <td class="ms-crm-alignText-leadingedge">
                                                    <input class="ms-crm-RadioButton" tabindex="20" name="radioVariableType" runat="server"
                                                           id="radioVariable" type="radio" value="1" onclick="typeChanged(true)" checked>
                                                    <label for="radioVariable" id="label5">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Variable" runat="server"/>
                                                    </label>
                                                </td>
                                                <td class="ms-crm-alignText-leadingedge">
                                                    <input class="ms-crm-RadioButton" tabindex="20" name="radioVariableType" runat="server"
                                                           id="radioInputArgument" type="radio" value="0" onclick="typeChanged(true)">
                                                    <label for="radioInputArgument" id="label6">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.InputArgument" runat="server"/>
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
                                            <col width="80px">
                                            <col>
                                            <tr class="param">
                                                <td id="Td7" style="vertical-align: top">
                                                    <label for="variableSelector" id="labelVarSelector">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Name" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="argumentSelector" id="labelArgSelector" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Name" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                </td>
                                                <td>
                                                    <ui:select id="variableSelector" tabindex="30" onchange="showValueBox(true);" runat="server"/>
                                                    <ui:select id="argumentSelector" tabindex="30" onchange="showValueBox(true);" runat="server"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
                                            <col width="80px">
                                            <col>
                                            <tr class="param">
                                                <td id="Td3" style="vertical-align: top">
                                                    <label for="variableValueText" id="labelValueText" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="variableValueInteger" id="labelValueInteger" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="variableValueFloat" id="labelValueFloat" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="variableValueLookup_d" id="labelValueLookup" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="variableValueDateOnly" id="labelValueDateOnly" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                    <label for="variableValueDateTime" id="labelValueDateTime" style="display: none">
                                                        <loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server"/>
                                                        <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div id="variableValueLookup_d" tabindex="50" runat="server"/>
                                                    <ui:textbox id="variableValueText" tabindex="50" runat="server"/>
                                                    <ui:number id="variableValueInteger" tabindex="50" runat="server"/>
                                                    <ui:number id="variableValueFloat" tabindex="50" runat="server"/>
                                                    <ui:DateTimeUI id="variableValueDateOnly" TabIndex="50" runat="server"/>
                                                    <ui:DateTimeUI id="variableValueDateTime" TabIndex="50" runat="server"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="vertical-align: top">
                <table width="100%" cellpadding="0" cellspacing="5" height="100%">
                    <tr>
                        <td style="vertical-align: top">
                            <div id="areaForm" style="height: 99%; width: 90%; position: relative">
                                <frm:valueform id="crmForm" runat="server">
                                </frm:valueform>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
<input type="hidden" id="hidSlugInfo" value="<%= SlugInfo %>"/>
<input type="hidden" id="oldSlugSubstring" value="<%= OldSlugSubstring %>"/>
<input type="hidden" id="newSlugSubstring" value="<%= NewSlugSubstring %>"/>
<input type="hidden" id="isReplacementRequired" value="<%= IsReplacementRequired %>"/>
<div id="hiddenDiv" style="display: none" runat="server">
</div>
</body>
</html>