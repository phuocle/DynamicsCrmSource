<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Dialogs.DefaultEntitlementConfirmationDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">
var _sAction = "defaultentitlement_confirm";
var _requestType = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(requestType) %>;
var _iObjType = "<%=EntityTypeCode%>";
var _iCustomerId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(customerId) %>;

function applychanges() {
_custParams += "&customerId=" + CrmEncodeDecode.CrmUrlEncode(_iCustomerId);
_overrideDialogArgs = true;
go();
}
function cancel() { closeWindow(); }
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
