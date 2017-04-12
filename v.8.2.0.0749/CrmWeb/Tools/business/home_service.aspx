<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.Business.Service" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript" language="javascript">

        Sys.Application.add_load(WindowOnLoad);

        function WindowOnLoad() {
            HandleBackButtonIssues(null);
        }

    </script>
</head>

<body class="stage">

<div class="stdTable">
    <div class="ms-crm-home-querycontainer" style="height: 68px">
        <table width="100%" height="50%" cellpadding="0" cellspacing="0">
            <col width="70%"><col width="30%">
            <tr>
                <td>
                    <label class="ms-crm-Setting-ContextHeader-Title">
                        <loc:Text ResourceId="SM_Title_Services" runat="server"/>
                    </label>
                </td>
                <td>
                    <cnt:AppQuickFind id="crmQuickFind" runat="server"/>
                </td>
            </tr>
        </table>
        <table width="100%" height="50%" cellpadding="0" cellspacing="0">
            <col><col><col width="80%">
            <tr>
                <td nowrap class="home_service_td_AppViewSelector">
                    <label for="crmGrid_SavedQuerySelector">
                        <span class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="Web.View_Label_70" runat="server"/>
                        </span>
                    </label>
                </td>
                <td>
                    <cnt:AppViewSelector runat="server" id="crmViewSelector"/>
                </td>
                <td align="center">
                    <span class="home_service_span_QuickFindSpacer">&nbsp;</span>
                </td>
            </tr>
        </table>
    </div>
    <div class="ms-crm-home-menucontainer">
        <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 94px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="true"/>
        </div>
    </div>
</div>

</body>
</html>