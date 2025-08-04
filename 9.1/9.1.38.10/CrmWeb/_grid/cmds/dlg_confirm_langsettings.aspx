<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmLangSettingsDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">
var isApplyOrCancelClicked = false;
function applychanges()
{
isApplyOrCancelClicked = true;
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel( )
{
isApplyOrCancelClicked = true;
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}



function checkBeforeUnload() {
if (isApplyOrCancelClicked == false) {
Mscrm.Utilities.setReturnValue(false);
}
}

window.onbeforeunload = checkBeforeUnload;
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody1)%>
<br /><br />
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody2)%>
<br /><br />
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody4)%>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
