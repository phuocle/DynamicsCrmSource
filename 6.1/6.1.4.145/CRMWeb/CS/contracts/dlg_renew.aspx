<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.Contracts.RenewDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
.ms-crm-RefreshDialog-Main
{
top: 115px !important;
}
</style>

<script language="JavaScript">

function cancel()
{
closeWindow();
}

function applychanges()
{
var ret = new Object();
ret.includeCancelledLines = $get("includeCancelledLines").checked;

Mscrm.Utilities.setReturnValue(ret);
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
<td><input align="absmiddle" type="checkbox" class="checkbox" id="includeCancelledLines" checked></td>
<td><label for="includeCancelledLines"><loc:Text ResourceId="Web.CS.contracts.dlg_clone.aspx_42" runat="server"/></label></td>
</tr></table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
