<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Workplace.HomeAnswersPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE HTML>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>

    <script language="javascript" type="text/javascript">
        Sys.Application.add_load(HomeAnswersOnLoad);

        function HomeAnswersOnLoad() {
            HandleBackButtonIssues("answers");


            $get("frmSearchInt").SearchSubject.value = "";


            var crmGrid = $find("crmGrid");
            crmGrid.add_onBeforeFormLoad(HandleGridItemSelected);
            crmGrid.SetParameter("disableDblClick", "0");
        }

        function HandleGridItemSelected(sender, oArgs) {

            openObj(DocumentIndex, oArgs.objectID);


            oArgs.breakEvent = true;
        }
    </script>
</head>

<body class="stage">

<table class="stdTable" cellspacing="0" cellpadding="0">
    <col width="42"><col>
    <tr height="100%">
        <td colspan="2">
            <table class="stdTable" style="background-color: #e9e9e9;" cellpadding="0" cellspacing="0">
                <col width="200"><col>
                <tr>
                    <td class="ms-crm-Articles-LeftPane">

                        <cnt:AppArticleFind id="crmArticleFind" runat="server"/>
                    </td>
                    <td>

                        <cnt:AppGrid id="crmGrid" runat="server"/>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>