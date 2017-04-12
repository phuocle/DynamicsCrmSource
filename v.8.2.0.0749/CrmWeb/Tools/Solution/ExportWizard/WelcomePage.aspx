<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.WelcomePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">


        function remoteEntityCommandCallback(oResult) {
            return true;
        }

        function CallbackParams(bClose, bReload, bRefreshGrid) {
            this.bClose = bClose;
            this.bReload = bReload;
            this.bRefreshGrid = bRefreshGrid;
        }

        function publishEntitiesAll(fCallback, oCallbackParams) {
            var oCommand = new RemoteCommand("SystemCustomization", "PublishAllCustomizations");
            executeRemoteCommand(oCommand, LOCID_ENTUTL_PUBLISHINGENT, fCallback, oCallbackParams);
        }

        function ExecutePublish() {
            var oCallbackParams = new CallbackParams(false, false, false);
            publishEntitiesAll(remoteEntityCommandCallback, oCallbackParams);
        }


        function GetNextPageDefinition() {
            var solutionId = document.getElementById("appSolutionId").value;
            var oCommand = new RemoteCommand("Solution", "IsSolutionMissingDependencies");
            oCommand.SetParameter("solutionId", solutionId);
            var uri;
            var oResult = oCommand.Execute();

            if (oResult.ReturnValue) {
                uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/MissingDependencyPage.aspx?appSolutionId=' +
                    solutionId);
            } else {
                uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/AdditionalItemsPage.aspx?appSolutionId=' +
                    solutionId);
            }
            return new NextPageDefinition(uri);
        }

        function moveNext() {
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }

        function WantToSkip() {
            return false;
        }
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <input type="hidden" name="appSolutionId" id="appSolutionId" value="<%= solutionId %>"/>
    <table class="ms-crm-layouttable" cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
            <td style="height: 10px;"> </td>
        </tr>
        <tr valign="top">
            <td>
                <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(warningString) %>
            </td>
        </tr>
        <tr height=15>
            <td/>
        </tr>
        <tr valign="top">
            <td>
                <cui:button id="publishButton" disabled="false" OnClick="ExecutePublish()" resourceid="ExportSolutionWizard.PublishPage.Button.PublishAll.Text"
                            runat="server">
                </cui:button>
            </td>
        </tr>
        <tr>
            <td style="height: 15px;"> </td>
        </tr>
        <tr valign="top">
            <td>
                <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(continueString) %>
            </td>
        </tr>
        </tbody>
    </table>
</frm:WizardForm>
<input type="hidden" id="hiddenFailType" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(errorType) %>"/>
</body>
</html>