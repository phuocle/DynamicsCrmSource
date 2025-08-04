<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.InsertVariableDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server"/>
<title>
    <loc:text resourceid="Web.SFA.Workflow.InsertVariableDialog.Title" runat="server"/>
</title>
<script language="javascript">

    var initialXml = "";
    var savedChanges = false;
    var isCrmType = false;
    var oDataTypeCtrl = null;

    var _variableName = null;
    var _variableDefaultValueInteger = null;
    var _variableDefaultValueFloat = null;
    var _variableDefaultValueDateOnly = null;
    var _variableDefaultValueDateTime = null;
    var _variableDefaultValueText = null;

    Sys.Application.add_load(PageOnLoad);

    function PageOnLoad() {
        _variableName = Mscrm.FormControlInputBehavior.GetBehavior("VariableName");
        _variableDefaultValueInteger = Mscrm.FormControlInputBehavior.GetBehavior("VariableDefaultValueInteger");
        _variableDefaultValueFloat = Mscrm.FormControlInputBehavior.GetBehavior("VariableDefaultValueFloat");
        _variableDefaultValueDateOnly = Mscrm.FormControlInputBehavior.GetBehavior("VariableDefaultValueDateOnly");
        _variableDefaultValueDateTime = Mscrm.FormControlInputBehavior.GetBehavior("VariableDefaultValueDateTime");
        _variableDefaultValueText = Mscrm.FormControlInputBehavior.GetBehavior("VariableDefaultValueText");
        oDataTypeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("VariableDataType");
        attachWindowOnBeforeUnload(window_onbeforeunload);


        window.focus();
        showHideDefaultValueDetails();
        setIfCrmType();

        _variableName.get_element().focus();
        initialXml = GenerateVariableXML();
    }

    function applychanges() {
        if (IsNull(_variableName.get_dataValue())) {

            alert(LOCID_REQUIRED_FIELD);
            return;
        }
        if (isCrmType) {
            var entity = Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_EntitySelector");
            var attribute = Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_AttributeSelector");
            if (isNullOrEmptyString(entity.get_dataValue()) || isNullOrEmptyString(attribute.get_dataValue())) {
                alert(LOCID_REQUIRED_FIELD)
                return;
            }
        }
        var dataType = oDataTypeCtrl.get_dataValue();
        switch (dataType) {
        case LOCID_VARIABLE_TEXT:
            if (null == _variableDefaultValueText.get_dataValue()) {
                alert(LOCID_REQUIRED_FIELD);
                return;
            }
            break;
        case LOCID_VARIABLE_INTEGER:
            if (_variableDefaultValueInteger.get_element().getAttribute("ValidationFailed")) {
                return;
            }
            if (IsNull(_variableDefaultValueInteger.get_dataValue())) {
                alert(LOCID_REQUIRED_FIELD);
                return;
            }
            break;
        case LOCID_VARIABLE_FLOAT:
            if (_variableDefaultValueFloat.get_element().getAttribute("ValidationFailed")) {
                return;
            }
            if (IsNull(_variableDefaultValueFloat.get_dataValue())) {
                alert(LOCID_REQUIRED_FIELD);
                return;
            }
            break;
        case LOCID_VARIABLE_DATEONLY:
            if (null == _variableDefaultValueDateOnly.get_dataValue()) {
                alert(LOCID_REQUIRED_FIELD);
                return;
            }
            break;
        case LOCID_VARIABLE_DATETIME:
            if (null == _variableDefaultValueDateTime.get_dataValue()) {
                alert(LOCID_REQUIRED_FIELD);
                return;
            }
            break;
        default:
            break;
        }
        var sNewXml = GenerateVariableXML();


        var command;
        if ("" != LOCID_VARIABLE_ID) {

            command = new RemoteCommand("Workflow", "UpdateVariable");
            command.SetParameter("variableId", LOCID_VARIABLE_ID);
        } else {

            command = new RemoteCommand("Workflow", "CreateVariable");
        }

        command.SetParameter("entityId", LOCID_ENTITY_ID);
        command.SetParameter("variableXml", sNewXml);
        command.SetParameter("descriptionXml", "");

        var oResult = command.Execute();
        if (oResult.Success) {
            Mscrm.Utilities.setReturnValue(oResult.ReturnValue);
            savedChanges = true;
            closeWindow();
        } else {
            $get("VariableName").focus();
        }
    }

    function cancel() {
        Mscrm.Utilities.setReturnValue(false);
        closeWindow();
    }

    function window_onbeforeunload(eventObject) {
        if (!savedChanges) {
            var returnXml = GenerateVariableXML();
            if (initialXml != returnXml) {
                eventObject.rawEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
                return LOCID_FORMS_SAVE_CONFIRM_TITLE;
            }
        }
    }


    function GenerateVariableXML() {

        var sXml = "";
        sXml += "<Variable>";
        sXml += "<VariableType>" + LOCID_TYPE + "</VariableType>"
        sXml += "<VariableName>" + CrmEncodeDecode.CrmXmlEncode(_variableName.get_dataValue()) + "</VariableName>";
        sXml += "<VariableDataType>" +
            CrmEncodeDecode.CrmXmlEncode(oDataTypeCtrl.get_dataValue()) +
            "</VariableDataType>";
        sXml += GenerateDefaultValueXml();
        sXml += GenerateMetadataBinding();
        sXml += "</Variable>";
        return sXml;

    }

    function GenerateMetadataBinding() {
        var sXml = "";
        sXml += "<MetadataBound>";
        if (isCrmType) {
            sXml += "1";
            sXml += "</MetadataBound>";
            sXml += GenerateDetailedBinding();
        } else {
            sXml += "0";
            sXml += "</MetadataBound>";
        }

        return sXml;
    }

    function GenerateDetailedBinding() {

        if (isCrmType) {
            var sXml = "<MetadataBinding><Entity>";
            sXml += CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior
                .GetBehavior("prEntityAttribute_EntitySelector").get_dataValue());
            sXml += "</Entity><Attribute>";
            sXml += CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior
                .GetBehavior("prEntityAttribute_AttributeSelector").get_dataValue());
            sXml += "</Attribute></MetadataBinding>";
            return sXml;
        }
    }

    function GenerateDefaultValueXml() {
        var sXml = "<DefaultValue>";
        var dataType = oDataTypeCtrl.get_dataValue();
        switch (dataType) {
        case LOCID_VARIABLE_TEXT:
            sXml += ((_variableDefaultValueText.get_dataValue() != null)
                ? CrmEncodeDecode.CrmXmlEncode(_variableDefaultValueText.get_dataValue())
                : "");
            break;
        case LOCID_VARIABLE_INTEGER:
            sXml += !IsNull(_variableDefaultValueInteger.get_dataValue())
                ? _variableDefaultValueInteger.get_dataValue()
                : "";
            break;
        case LOCID_VARIABLE_FLOAT:
            sXml += !IsNull(_variableDefaultValueFloat.get_dataValue())
                ? _variableDefaultValueFloat.get_dataValue()
                : "";
            break;
        case LOCID_VARIABLE_DATEONLY:

            var dateValue = _variableDefaultValueDateOnly.get_dataValue();
            sXml += ((dateValue != null) ? CrmEncodeDecode.CrmXmlEncode(FormatDateTime(dateValue)) : "");
            break;
        case LOCID_VARIABLE_DATETIME:
            var dateTimeValue = _variableDefaultValueDateTime.get_dataValue();
            sXml += ((dateTimeValue != null) ? CrmEncodeDecode.CrmXmlEncode(FormatDateTime(dateTimeValue)) : "");
            break;
        default:
            sXml = "";
            return sXml;
        }
        sXml += "</DefaultValue>";
        return sXml;

    }


    function dataTypeChanged() {
        flushDefaultValueTextboxes();
        showHideDefaultValueDetails();
        setIfCrmType();
    }


    function flushDefaultValueTextboxes() {
        _variableDefaultValueText.set_dataValue(null);
        _variableDefaultValueInteger.set_dataValue(null);
        _variableDefaultValueFloat.set_dataValue(null);
        _variableDefaultValueDateOnly.set_dataValue(null);
        _variableDefaultValueDateTime.set_dataValue(null);
    }

    function showHideDefaultValueDetails() {
        var dataType = oDataTypeCtrl.get_dataValue();

        document.getElementById("prEntityAttribute").style.display = (dataType == LOCID_VARIABLE_LOOKUP ? "" : "none");
        $get("DefaultValueBox").style.display = (dataType == LOCID_VARIABLE_LOOKUP ? "none" : "");

        _variableDefaultValueInteger.get_element().style
            .display = (dataType == LOCID_VARIABLE_INTEGER ? "inline" : "none");
        _variableDefaultValueFloat.get_element().style.display = (dataType == LOCID_VARIABLE_FLOAT ? "inline" : "none");

        _variableDefaultValueText.setDisplay(dataType == LOCID_VARIABLE_TEXT ? true : false);
        _variableDefaultValueInteger.setDisplay(dataType == LOCID_VARIABLE_INTEGER ? true : false);
        _variableDefaultValueFloat.setDisplay(dataType == LOCID_VARIABLE_FLOAT ? true : false);
        _variableDefaultValueDateOnly.setDisplay(dataType == LOCID_VARIABLE_DATEONLY ? true : false);
        _variableDefaultValueDateTime.setDisplay(dataType == LOCID_VARIABLE_DATETIME ? true : false);
    }

    function setIfCrmType() {
        var dataType = oDataTypeCtrl.get_dataValue();
        switch (dataType) {
        case LOCID_VARIABLE_LOOKUP:
            isCrmType = true;
            break;
        default:
            isCrmType = false;
        }
    }

</script>
</head>
<body>
<frm:DialogForm id="crmForm" showheader="true" runat="server">
    <table cellspacing="0" width="100%" cellpadding="5" style="table-layout: fixed;">
        <col width="100"/>
        <col width="100%"/>
        <tr>
            <td>
                <loc:Text ResourceId="Web.SFA.Workflow.InsertVariableDialog.Name" runat="server"/>
                <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </td>
            <td>
                <ui:TextBox id="VariableName" TabIndex="1" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Web.SFA.Workflow.InsertVariableDialog.DataType" runat="server"/>
            </td>
            <td>
                <ui:Select id="VariableDataType" TabIndex="30" runat="server" onchange="dataTypeChanged();"/>
            </td>
        </tr>
        <tr id="DefaultValueBox">
            <td>
                <loc:Text ResourceId="Web.SFA.Workflow.InsertVariableDialog.DefaultValue" runat="server"/>
                <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </td>
            <td>
                <ui:TextBox id="VariableDefaultValueText" TabIndex="40" runat="server"/>
                <ui:Number id="VariableDefaultValueInteger" TabIndex="40" runat="server"/>
                <ui:Number id="VariableDefaultValueFloat" TabIndex="40" runat="server"/>
                <ui:DateTimeUI id="VariableDefaultValueDateTime" TabIndex="40" runat="server"/>
                <ui:DateTimeUI id="VariableDefaultValueDateOnly" TabIndex="40" runat="server"/>
            </td>
        </tr>
        <cnt:entityattributeselectioncontrol id="prEntityAttribute" runat="server"/>
    </table>
</frm:DialogForm>
</body>
</html>