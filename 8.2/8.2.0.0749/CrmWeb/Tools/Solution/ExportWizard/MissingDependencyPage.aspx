<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.MissingDependencyPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">

        Sys.Application.add_load(function() {

            setTimeout(adjustGridContainer, 100);
        });

        function adjustGridContainer() {
            var gridContainer = $get('gridContainer');
            var notificationsContainer = $get('errorFields');
            gridContainer.style.top = notificationsContainer.offsetHeight + 5 + "px";
        }


        function GetNextPageDefinition() {
            var solutionId = document.getElementById("appSolutionId").value;
            var uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/AdditionalItemsPage.aspx?appSolutionId=' +
                solutionId);
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
    <cnt:AppNotifications id="errorFields" runat="server"/>
    <div id="gridContainer" class="ms-crm-home-staticgridcontainer">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <app:AppGrid id="missingDependencyGrid" runat="server"/>
        </div>
    </div>
</frm:WizardForm>
</body>
</html>