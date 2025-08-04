<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DashboardError.DashboardErrorPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE HTML>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
    </title>
    <style type="text/css">
        .tblContentAlign {
            margin: auto;
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
</head>
<body class="ms-crm-ErrorDialog">
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
    <tr>
        <td style="text-align: center; vertical-align: middle">
            <table cellpadding="0" cellspacing="0" class="tblContentAlign">
                <tr>
                    <td class="ms-crm-Dialog-Error-Icon" align="right">
                        <img alt="" src="/_imgs/error/notif_icn_critical.png"/>
                    </td>
                    <td class="ms-crm-Dialog-Error-Title">
                        <loc:Text ResourceId="Error_Title_0x8004e30e" runat="server"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td style="padding-top: 8px" class="ms-crm-Dialog-Error-Body" id="tdMessage" runat="server">
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>