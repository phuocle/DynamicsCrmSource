<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Entitlements.EntitlementRenewDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript">

function cancel()
{
closeWindow();
}

function applychanges()
{
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellspacing="0" cellpadding="0" width="100%" height="100%" style="table-layout:fixed;">
<tr>
<td class="dlg_renew_td">
<table><tr>
</tr></table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
