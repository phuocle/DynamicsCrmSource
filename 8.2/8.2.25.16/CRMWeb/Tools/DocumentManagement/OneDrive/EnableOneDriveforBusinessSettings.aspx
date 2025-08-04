<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.EnableOneDriveForBusinessSettingsPage" %>

<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
<script type="text/javascript" language="javascript">
window.inlineDialogId = '<%=InlineDialogId%>';
window.isInlined = true;
<% if (CloseWindow) { %>
if (!IsOutlookClient()) {
if (window.parent) {
window.parent.location.reload();
}
}

closeWindow(true);
<% } %>
</script>

<% if (!string.IsNullOrEmpty(ErrorData)) { %>
<script type="text/javascript">
var errorUrl = '<%=ErrorData%>';
if (errorUrl != "") {
var options = new Xrm.DialogOptions();
options.height = 250;
options.width = 660;
Xrm.Internal.openDialog(Mscrm.CrmUri.create(errorUrl).toString(), options, null, null, null);
}
</script>
<% } %>

<script type="text/javascript">
Sys.Application.add_load(windowOnLoad);
var _chkEnableOneDrive = null;
var _chkEnableOneDriveValue = ('<%=IsOneDriveEnabled%>').toString();
var _isFcbEnabledAndActiveSiteNotPresent = ('<%=IsFcbEnabledAndActiveSiteNotPresent%>').toString();
var _displayError = ('<%=DisplayError%>').toString();
var _chekboxval = null;

function cancel() {
Mscrm.Utilities.setReturnValue(false);
closeWindow(true);
}

function windowOnLoad() {
_chkEnableOneDrive = $get("chkEnableOneDrive");
_chekboxval = $get("chekboxval");
_chekboxval.value = _chkEnableOneDriveValue.toLowerCase();
if (_chkEnableOneDriveValue.toLowerCase() == "false")
{
document.getElementById("chkEnableOneDrive").disabled = (_isFcbEnabledAndActiveSiteNotPresent.toLowerCase() != "false") ? true : false;
}
document.getElementById("lblOneDriveError").style.display = (_displayError.toLowerCase() != "false") ? 'block' : 'none';
_chkEnableOneDrive.checked = (_chkEnableOneDriveValue.toLowerCase() != "false") ? true : false;

Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationStart, Mscrm.S2SUpgradePageHelper.enableOneDrive_CommandName);
}

function applychanges() {
Mscrm.Utilities.setReturnValue(false);
if (_chkEnableOneDriveValue.toLowerCase() == _chekboxval.value) {
if (_chekboxval.value) {
if (window.parent.opener) {
window.parent.opener.location.reload();
}
}
closeWindow(true);
}
else {
if (!IsNull(window.inlineDialogId)) {
document.getElementById("txtdlgname").value = window.inlineDialogId;
}
disableControls();
document.getElementById("enableOneDrive").submit();
}
Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationSuccess, Mscrm.S2SUpgradePageHelper.enableOneDrive_CommandName);
}

function disableControls() {
document.getElementById("cmdDialogCancel").disabled = true;
document.getElementById("butBegin").disabled = true;
}

function chkClick(_checkbox) {
if (_checkbox.checked) {
_chekboxval.value = "true";
}
else {
_chekboxval.value = "false";
}
}

</script>
<style type="text/css">
.ms-crm-dlglabel
{
vertical-align:top;
font-family:Segoe UI;
color:#444444;
font-size:12px;
font-weight:normal !important;
padding-right:5px;
}
#DlgHdTitle
{
color:#000000  !important ;
font-size:36px !important ;
font-family:Segoe UI !important ;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>
margin-top: 11px;
}
#chkEnableOneDrive
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-right: 0;
<% }else{ %>
margin-left: 0;
<% } %>
}
.ms-crm-RefreshDialog-Main {
top: 70px;
}
</style>
</head>
<body>
<form name="enableOneDrive" id="enableOneDrive" method="POST">
<input type="hidden" id="chekboxval" name="chekboxval" />
<input type="hidden" name="txtdlgname" id="txtdlgname"  value="<%=InlineDialogId%>"  />
<table cellpadding="0" cellspacing="0" style="table-layout: fixed; margin-top:10px;">
<tr>
<td >
<loc:Text ResourceId="DocumentManagement.SettingsOption.EnableOneDrive.Description" runat="server" />
</td>
</tr>
<tr>
<td>
&nbsp;
</td>
</tr>
<tr>
<td>
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsOption.EnableOneDrive.SubDescription"
runat="server" />
</td>
</tr>
<tr>
<td style="padding-top: 10px">
<input type="checkbox" id="chkEnableOneDrive" onclick="chkClick(this)" style="width: 16px; cursor: pointer;vertical-align: middle;"
title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.SettingsPage.EnableOneDrive.Description' runat='server'/>" />
<label id="lblEnableOneDrive" for="chkEnableOneDrive" style="vertical-align: middle">
<loc:Text ResourceId="DocumentManagement.SettingsOption.EnableOneDrive.Title"
runat="server" />
</label>
</td>
</tr>
<tr>
<td colspan="2" style="padding-top: 5px">
<label id="lblOneDriveError" style="color: red;">
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsOption.EnableOneDrive.Error"
runat="server" />
</label>
</td>
</tr>
</table>
</form>
</body>
</html>
