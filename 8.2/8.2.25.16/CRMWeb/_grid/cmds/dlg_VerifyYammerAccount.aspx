
<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.VerifyYammerAccountDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="javascript">
function applychanges() {
Mscrm.YammerLogOnDialog.checkCredentials()
.done(function (result) {
if (result) {
window.returnValue = true;
executeDialogCloseCallback(window.returnValue);
closeWindow();
}
});
}

function cancel() {
window.returnValue = false;
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

$P_CRM(document).ready(function () {
if (DISABLE_AUTHORIZATION != "") {
Mscrm.YammerLogOnDialog.toggleInput(false);
Mscrm.YammerLogOnDialog.showError(DISABLE_AUTHORIZATION, false);
return;
}

setTimeout(function() {
$P_CRM("#YammerEmail").focus();
}, 300);

$P_CRM("#YammerEmail, #YammerPassword").keydown(function (e) {

if(e.which == 13) {
e.preventDefault();
applychanges();
}
});
});
</script>
<style type="text/css">

#errorsBlock
{
padding-bottom: 13px;
}

#errorNotification
{
background-color: #FFF19D;
border: 1px solid #D7D889;
padding-bottom: 5px;
padding-top: 5px;
}

#onPremAuth {
padding-top: 5px;
}

#YammerEmail {
margin-bottom: 8px;
}

#loadingContainer {
height:100%;
width:100%;
position: relative;
background-color: white;
filter: alpha(opacity=90);
opacity: 0.9;
}

#loadingContainer td {
vertical-align: middle;
text-align: center;
}
</style>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<div id="errorsBlock" style="display:none;">
<div id="errorNotification">
<div id="Notification0" tabindex="0">
<table cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td valign="top">
<img id="errorIconImage"  alt="" class="ms-crm-Lookup-Item" src="/_imgs/error/notif_icn_crit16.png">
</td>
<td>
<span id="Notification0_text"/>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div id="onPremAuth" class='content'>
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<label for="YammerEmail">
<loc:text style="width:165px; margin-top:12px;" resourceid="Label_Yammer_EmailAddress" runat="server" />
</label>
</td>
<td>
<input type="text" id="YammerEmail" style="width:350px;" />
</td>
</tr>
<tr>
<td>
<label for="YammerPassword">
<loc:text style="width:165px; margin-top:12px;" resourceid="Label_Yammer_Password" runat="server" />
</label>
</td>
<td>
<input type="password" id="YammerPassword" style="width:350px;" />
</td>
</tr>
</table>
</div>
</frm:DialogForm>
<table id="loadingContainer" style="display: none;">
<tbody>
<tr>
<td>
<img src="/_imgs/AdvFind/progress.gif">
</td>
</tr>
</tbody>
</table>
</body>
</html>