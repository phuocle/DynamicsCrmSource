<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.TargetVersionSelectionPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function GetNextPageDefinition() {
            var targetVersion = WizardGetProperty("targetVersion");
            var exportAsProtected = WizardGetProperty("exportAsProtected");
            var uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/ExportSummaryPage.aspx?targetVersion=' +
                targetVersion +
                '&protected=' +
                exportAsProtected);
            return new NextPageDefinition(uri, WizardGetProperty("optionsXml"));
        }

        function moveNext() {
            var currentVersion = <%= CurrentVersion %>;

            var targetVersion = $get("ExportVersionDropDown").value;
            WizardSetProperty("targetVersion", targetVersion);
            if (targetVersion == currentVersion) {
                ExportSolution();
            } else {
                WizardNavigate(_WizardNavigateEnum.NEXT);
            }
        }

        function ExportSolution() {
            WizardSetDialogReturnValue(new
                ReturnExportResult(true, WizardGetProperty("exportAsProtected"), WizardGetProperty("optionsXml")));
            WizardNavigate(_WizardNavigateEnum.CLOSE);
        }
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table class="ms-crm-layouttable" cellpadding="0" cellspacing="0">
        <tbody>
        <tr valign="middle">
            <td style="width: 50%">
                <label for="ExportVersionDropDown" class="ms-crm-bold">
                    <loc:Text ResourceId='ExportSolutionWizard.TargetSelectionPage.DropdownLabel.Text'
                              runat='server'/>
                </label>
            </td>
            <td class="control">
                <ui:Select id="ExportVersionDropDown" runat="server" class="ms-crm-Select">
                </ui:Select>
            </td>
        </tr>
        </tbody>
    </table>
</frm:WizardForm>
</body>
</html>