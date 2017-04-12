<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.WorkflowPrintPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>

    <%
        CurrentHeader.SetStyleSheet("/_forms/styles/print.css.aspx");
    %>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="JavaScript" type="text/javascript">

        var _numStageSteps = 0;
        var _currentSelectedControlId = null;

        $addHandler(window, "load", windowOnLoad);

        function windowOnLoad() {
            PopulateAssignStepSlugs();
        }

        function PopulateAssignStepSlugs() {
            SetAttributeTypeMapping("", null);
            var lookups = document.getElementsByTagName("IMG");
            var expectedSuffix = "_lookupwfc";
            var expectedPrefix = "Assign";
            for (var i = 0; i < lookups.length; i++) {
                var controlId = lookups[i].id;
                var pos = controlId.lastIndexOf(expectedSuffix);
                if (pos == controlId.length - expectedSuffix.length &&
                    controlId.substr(0, expectedPrefix.length) == expectedPrefix) {
                    AddAttributeTypeMapping(lookups[i].id, "Owner");
                }
            }

            PopulateSlugControlsWithCallback(CrmEncodeDecode.CrmXmlDecode(document.getElementById('hidSlugInfo').value),
                "deleteslugbody",
                OnAssigneeSlugDelete);
        }

        function OnAssigneeSlugDelete() {
            UpdateAssigneeForControl(event.target.get_innerControl());
        }
    </script>
</head>
<body>
<frm:PrintForm id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="3" style="table-layout: fixed;">
        <col width="100"/><col/>

        <tr>
            <td colspan="4">
                <table class="stdTable" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="padding: 2px;">
                            <div id="PublicationParameterArea" runat="server"></div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr height="100%">
            <td colspan="4">
                <div style="height: 100%">
                    <table class="wfWorkflowDefinitionContainer" cellspacing="0" cellpadding="0">

                        <tr height="25">
                            <td>
                                <mnu:AppGridMenuBar id="WorkflowStepMenuBar" runat="server"/>
                            </td>
                        </tr>


                        <tr height="100%">
                            <td valign="top" style="height: 100%">
                                <div id='gridDefinitionContainer' runat="server" class="wfWorkflowStepArea"></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
    <div id="dynamicValuePlaceHolder" runat="server" style="display: none;"></div>
</frm:PrintForm>
</body>
</html>