<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SummaryPrepareClientCustomizationsDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">
var isOkOrCancelClicked = false;





function applychanges()
{
isOkOrCancelClicked = true;
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}





function cancel()
{
isOkOrCancelClicked = true;
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}






function checkBeforeUnload()
{
if (isOkOrCancelClicked == false) {
Mscrm.Utilities.setReturnValue(false);
}
}

window.onbeforeunload = checkBeforeUnload;

</script>
</head>



<body>
<frm:DialogForm id="crmForm" runat="server">
<ul id="Summary" runat="server" cellpadding="0" cellspacing="0" width="100%">
</ul>
</frm:DialogForm>

</body>
</html>
