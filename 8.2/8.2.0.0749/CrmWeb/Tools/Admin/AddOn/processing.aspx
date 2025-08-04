<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.AddOn.ProcessingPage" EnableViewState="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="javascript" type="text/javascript">


        function GetNextPageDefinition() {

            var dataToPost = WizardGetProperty("ProcessingPostData");
            var sUrl = Mscrm.CrmUri.create(WizardGetProperty("ProcessingUrl")).toString();
            return new NextPageDefinition(sUrl, dataToPost);
        }


        function processingPage_onload() {

            WizardNavigateSetIndicator(_WizardNavigateEnum.NEXT, false);
        }


        Sys.Application.add_load(processingPage_onload);
    </script>

</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table class="stdTable">
        <tr>
            <td class="ms-crm-addon-processing">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/><br/>
                <loc:Text ResourceId="AddOnWizard.Processing.SpinnerText" runat="server"/>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>