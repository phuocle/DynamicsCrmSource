<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.AddOn.ErrorPage" EnableViewState="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table>
        <tr>
            <td>
                <img src="/_imgs/error/notif_icn_crit16.png" alt="warning icon"/>
            </td>
            <td class="ms-crm-left-padding">
                <% RenderErrorDescription(); %>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>