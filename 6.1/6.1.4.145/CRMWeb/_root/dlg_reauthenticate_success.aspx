<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AuthenticateSuccessDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server"/>

<script language="JavaScript" type="text/javascript">

Sys.Application.add_load(onload_handler);

function onload_handler()
{
if (window.opener && window.opener.RegisterAuthExpiryReminder)
{
window.opener.RegisterAuthExpiryReminder(REMIND_AUTH_EXPIRATION, AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES);

if (window.opener.Mscrm && window.opener.Mscrm.PageManager && window.opener.Mscrm.PageManager.get_instance()) {
window.opener.Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignInRequested, null);
}
}
}
function closeCurrentWindow()
{
closeWindow();

window.opener.HideActionMsg();
}
</script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
<table>
<tr><td><br/></br></td></tr>
<tr>
<td><loc:Text ResourceId="Dialog_Reauthenticate_Success_Description" runat="server"></loc:Text></td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
