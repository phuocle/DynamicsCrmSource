<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.SystemCustomization.Attributes.SetStateModelStatus" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-IE7-td-Texarea-Container, .ms-crm-IE7-Texarea { position: static; }
    </style>
    <script language="javascript">

        var _oResult = {};
        var objectTypeCode;

        function cancel() {
            closeWindow();
        }

        function RenderStatusAndAllowedTransitions() {
            _oResult = getDialogArguments();
            if (_oResult.length > 0) {
                document.write("<table width='100%'>")
                document
                    .write("<tr><td><label><loc:Text ResourceId='Set_State_Model_Status_Dlg_col1_Description' runat='server'/></label></td><td style='width:60px;'>")
                document
                    .write("</td><td colspan=2><label for='dlgHeader'><loc:Text ResourceId='Set_State_Model_Status_Dlg_col2_Description' runat='server'/></label></td></tr>");
                Mscrm.SetStatusTransition._updatedStausXml = Mscrm.SetStatusTransition
                    .cleanOrphanAllowedTransitionStatus(XUI.Xml.LoadXml(_oResult[0]));
                Mscrm.SetStatusTransition.entityTypeCode = parseInt(_oResult[1], 10);
                var statusOptions = XUI.Xml.SelectNodes(Mscrm.SetStatusTransition._updatedStausXml,
                    "states/state",
                    null);
                for (var i = 0; i < statusOptions.length; i++) {
                    var statusOptionNodesIterator = i + 1;
                    var statusOptionRelatedStateCode = XUI.Xml
                        .GetText(statusOptions[i].attributes.getNamedItem("value"));
                    var statusOptionRelatedStateName = XUI.Xml
                        .GetText(statusOptions[i].attributes.getNamedItem("label"));
                    var sourceTransitionNodes = XUI.Xml
                        .SelectNodes(Mscrm.SetStatusTransition._updatedStausXml,
                            "states/state[" +
                            CrmEncodeDecode.CrmXmlAttributeEncode(statusOptionNodesIterator) +
                            "]/values/value",
                            null);
                    var sourceTransitionValues = new Array(sourceTransitionNodes.length);
                    for (var j = 0; j < sourceTransitionNodes.length; j++) {
                        var sourceTransitionNodesIterator = j + 1;
                        var transitionNodeLabel = XUI.Xml
                            .GetText(sourceTransitionNodes[j].attributes.getNamedItem("label"));
                        var sourceStatustransitionNodeValue = XUI.Xml
                            .GetText(sourceTransitionNodes[j].attributes.getNamedItem("value"));
                        var encodedSourceStatustransitionNodeValue = CrmEncodeDecode
                            .CrmHtmlAttributeEncode(sourceStatustransitionNodeValue);
                        document.write("<tr><td style='width: 170px;'>");
                        var currentStatusTextBox;
                        if (window.LOCID_UI_DIR === "RTL") {
                            currentStatusTextBox = "<div class='ms-crm-Input-Container' id='txtSchemaName_container" +
                                encodedSourceStatustransitionNodeValue +
                                "' ><img alt='" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode(transitionNodeLabel) +
                                "' src='" +
                                Mscrm.SetStatusTransition.getStateIcon(statusOptionRelatedStateCode) +
                                "' style='float:right;'/><span class='ms-crm-MenuItem-TextRTL' id='" +
                                encodedSourceStatustransitionNodeValue +
                                "_source'>" +
                                CrmEncodeDecode.CrmHtmlEncode(transitionNodeLabel) +
                                "</div>";
                        } else {
                            currentStatusTextBox = "<div class='ms-crm-Input-Container' id='txtSchemaName_container" +
                                encodedSourceStatustransitionNodeValue +
                                "' ><img alt='" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode(transitionNodeLabel) +
                                "' src='" +
                                Mscrm.SetStatusTransition.getStateIcon(statusOptionRelatedStateCode) +
                                "' style='float:left;'/><span class='ms-crm-MenuItem-TextRTL' id='" +
                                encodedSourceStatustransitionNodeValue +
                                "_source'>" +
                                CrmEncodeDecode.CrmHtmlEncode(transitionNodeLabel) +
                                "</div>";
                        }
                        document.write(currentStatusTextBox);
                        document.write("</td><td style='width: 60px;'>");
                        document.write("</td><td>");
                        document.write("<div id='txtNewSchemaName_container" +
                            encodedSourceStatustransitionNodeValue +
                            "' >");
                        document.write("<span class='multipicklist' width='100%' title='Enter Value' id='" +
                            encodedSourceStatustransitionNodeValue +
                            "_picklist' >");
                        document.write("<table class='multipicklist' width='100%' >");
                        document.write("<colgroup>");
                        document.write("<col/>");
                        document.write("<col width ='3' />");
                        document.write("<col width ='27' />");
                        document.write("</colgroup>");
                        document.write("<tbody><tr><td>");
                        var allowedTransitionValues = Mscrm.SetStatusTransition
                            .retrieveTargetTransitionNames("states/state[" +
                                CrmEncodeDecode.CrmXmlAttributeEncode(statusOptionNodesIterator) +
                                "]/values/value[" +
                                CrmEncodeDecode.CrmXmlAttributeEncode(sourceTransitionNodesIterator) +
                                "]/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']");
                        var newStatusTextbox =
                            "<div  class='ms-crm-Input-Container' id='txtTargetSchemaName_container" +
                                encodedSourceStatustransitionNodeValue +
                                "' ><span class='ms-crm-MenuItem-TextRTL' id='" +
                                encodedSourceStatustransitionNodeValue +
                                "_target'>" +
                                allowedTransitionValues +
                                "</div>";
                        document.write(newStatusTextbox);
                        document.write("</td><td></td><td>");
                        document.write("<button  type='button' style='width:25px' id='" +
                            encodedSourceStatustransitionNodeValue +
                            "_browse' onclick='Mscrm.SetStatusTransition.openDialog(" +
                            encodedSourceStatustransitionNodeValue +
                            ") ' srcStatusValueAttrib='" +
                            encodedSourceStatustransitionNodeValue +
                            "'>...</button>");
                        document.write("</td></tr><tbody></table></span></div></td></tr>");
                    }
                }
                document.write("</table>");
            }
            if (_oResult.length > 1) {
                objectTypeCode = _oResult[1];
            }

            if (_oResult.length > 2) {
                $get('enablestatuschk').checked = _oResult[2];
            }
        }

        function button_reset() {
            Mscrm.SetStatusTransition._updatedStausXml = Mscrm.SetStatusTransition
                .cleanOrphanAllowedTransitionStatus(XUI.Xml.LoadXml(_oResult[0]));
            Mscrm.SetStatusTransition.resetAllowedStatusTransitions();
        }

        function applychanges() {
            var transitionPath = Mscrm.StatusReasonTransition.getStateTransitionPath(parseInt(objectTypeCode, 10));
            Mscrm.StatusReasonTransition
                .validateTransitionPath(Mscrm.SetStatusTransition._updatedStausXml,
                    transitionPath,
                    parseInt(objectTypeCode, 10));

        }

        function statustransitionarguments() {
            var returnValue = new Array();
            returnValue[0] = convertXmlDocToString(Mscrm.SetStatusTransition._updatedStausXml);
            returnValue[1] = $get('enablestatuschk').checked;
            Mscrm.Utilities.setReturnValue(returnValue);
            closeWindow(true);

        }

    </script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
    <table width="100%">
        <col width="100"><col>
        <tr>
            <td>
                <input type="checkbox" id="enablestatuschk" class="checkbox">
                <label for="subject">
                    <loc:Text ResourceId="Set_State_Model_Status_Dlg_checkbox_Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <script type="text/javascript">
                    RenderStatusAndAllowedTransitions();
                </script>
            </td>
        </tr>
    </table>
</frm:dialogform>
</body>
</html>