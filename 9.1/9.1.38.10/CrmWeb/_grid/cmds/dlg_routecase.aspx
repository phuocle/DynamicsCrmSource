<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Dialogs.RunRoutingWorkflow" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="JavaScript">
var _sAction = "routecase";
var _iObjType = 0;
var mode = true;
var _custParams = "";

function confirmMode(b)
{
window.returnValue = b;
}

function applychanges()
{
go();
}

function cancel()
{
closeWindow();
}
</script>
</head>
<body scroll="no">
<frm:dialogform id="crmForm" runat="server">
<table>
<tr style="padding-top:10px"  >
<td style="padding-left:5px;padding-right:5px;">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody)%>
</td>
</tr>
</table>
</frm:dialogform>
</body>
</html>
