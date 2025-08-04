<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.IncidentMessageDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">
function applychanges() {
closeWindow();
}
function cancel() {
closeWindow();
}
</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<%=messageContent%>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
