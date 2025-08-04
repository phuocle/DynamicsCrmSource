<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.FinishPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html >
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">



function copyToClipboard()
{
var clipboard = new XUI.ClipboardManager();
clipboard.SetData(XUI.Html.GetText($get('notifications')));
}




function finishPage_onload() {
$addHandler(window, "resize", AdjustNotificationArea);


XUI.Html.SetText($get("usersAdded"), formatString(LOCID_USERS_ADDED, WizardGetProperty("UsersAdded")));


var iUsersNotAdded = WizardGetProperty("UsersNotAdded");
if (iUsersNotAdded > 0)
{
XUI.Html.SetText($get("usersNotAdded"), formatString(LOCID_USERS_NOT_ADDED, iUsersNotAdded));
}


writeMessages(WizardGetProperty("Errors"), LOCID_ERROR, Mscrm.Severity.SEVERITYERROR);
writeMessages(WizardGetProperty("Warnings"), LOCID_WARNING, Mscrm.Severity.SEVERITYWARNING);


var btnCopyClipboard = $get("buttonCopyToClipboard");
if (Mscrm.Utilities.get_ieBrowserVersion() == 0)
{
btnCopyClipboard.setAttribute('disabled', 'true');
}



if (!WizardHasProperty("Warnings") && !WizardHasProperty("Errors"))
{
$get('notifications').style.display = "none";
btnCopyClipboard.style.display = "none";
}

window.setTimeout(AdjustNotificationArea, 10);
}

function finishPage_onUnload() {
$removeHandler(window, "resize", AdjustNotificationArea);
}




function moveNext()
{
WizardSetDialogReturnValue(WizardGetProperty("UsersAdded") > 0);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}




function writeMessages(saMessages, sSeverityLabel, iNotificationSeverity)
{

if (IsNull(saMessages))
{
return;
}

for (var i = 0; i < saMessages.length; i++)
{
var sNotificationId = formatString("message_{0}_{1}", iNotificationSeverity, i);






$find("notifications").AddNotification(sNotificationId, iNotificationSeverity, "", formatString(sSeverityLabel, CrmEncodeDecode.CrmHtmlDecode(saMessages[i])));
}
}

function AdjustNotificationArea() {
var notificationArea = $get('finishMessages');
var usersAdded = $get('usersAdded');
var usersNotAdded = $get('usersNotAdded');
var buttonCopyToClipboard = $get('buttonCopyToClipboard');
var addUsersRestart = $get('addUsersRestart');
var finishPage = $get('finishPage');
var notificationAreaHeight = (finishPage.offsetHeight - (usersAdded.offsetHeight + usersNotAdded.offsetHeight + buttonCopyToClipboard.offsetHeight + addUsersRestart.offsetHeight + 10));

if (notificationAreaHeight > 0)
notificationArea.style.height = notificationAreaHeight + 'px';
}


Sys.Application.add_load(finishPage_onload);
Sys.Application.add_unload(finishPage_onUnload);
</script>
<style type="text/css">
DIV.Notifications
{
background-color: #ffffff;
border: 1px solid #6699cc;
height: 100%;
padding:0px;
}

Div.Notification
{
padding:5px;
}
</style>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div id="finishPage" class="stdTable">
<div id="usersAdded"></div>
<div id="usersNotAdded"></div>
<div id="finishMessages" class="ms-crm-AddUsers-FinishMessages">
<cnt:AppNotifications id="notifications" runat="server" />
</div>
<ui:Button ID="buttonCopyToClipboard" ResourceId="AddUsersWizard.FinishPage.CopyToClipboard" OnClick="copyToClipboard();" runat="server" />
<div id="addUsersRestart" class="ms-crm-AddUsers-Restart">
<cnt:NextButton id="restartButton" runat="server" />
</div>
</div>
</frm:WizardForm>
</body>
</html>
