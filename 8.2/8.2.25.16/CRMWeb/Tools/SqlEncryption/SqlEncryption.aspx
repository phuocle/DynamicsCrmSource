<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.SqlEncryption.SqlEncryptionPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>



<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
function chkShowEncryptionKey_OnClick() {
var chkShowEncryptionKey = window.document.getElementById("chkShowEncryptionKey");
var valShowEncryptionKey = chkShowEncryptionKey.checked;

if (valShowEncryptionKey)
{
window.document.getElementById("divDisplayEncryptionKeyHidden").style.display = "none";
window.document.getElementById("divDisplayEncryptionKeyShown").style.display = "block";
}
else
{
window.document.getElementById("divDisplayEncryptionKeyHidden").style.display = "block";
window.document.getElementById("divDisplayEncryptionKeyShown").style.display = "none";
}
}

function butChangeEncryptionKey_OnClick() {
var txtChangeNewEncryptionKey = document.getElementById("txtChangeNewEncryptionKey");
var valChangeNewEncryptionKey = txtChangeNewEncryptionKey.value

SetSqlEncryptionKey(valChangeNewEncryptionKey, true, LOCID_ENCR_KEY_CHANGING);
}

function butRestoreEncryptionKey_OnClick() {
var txtRestoreEnterEncryptionKey = document.getElementById("txtRestoreEnterEncryptionKey");
var valRestoreNewEncryptionKey = txtRestoreEnterEncryptionKey.value

SetSqlEncryptionKey(valRestoreNewEncryptionKey, false, LOCID_ENCR_KEY_RESTORING);
}

function SetSqlEncryptionKey(encryptionKey, changeEncryptionKey, sActionMessage) {
if (0 == encryptionKey.length)
{
alert(LOCID_ENCR_KEY_EMPTY);
return false;
}

var txtOriginalEncryptionKey = document.getElementById("txtDisplayEncryptionKeyShown");
var valOriginalEncryptionKey = txtOriginalEncryptionKey.value

if ((changeEncryptionKey) && (encryptionKey == valOriginalEncryptionKey))
{
alert(LOCID_ENCR_KEY_NOTDIF_FROM_ORIG);
return false;
}

showProgressSpinningCircle(true, sActionMessage);

var oCommand = new RemoteCommand("SystemCustomization", "SetSqlEncryptionKey");
oCommand.SetParameter("encryptionKey", encryptionKey);
oCommand.SetParameter("changeEncryptionKey", changeEncryptionKey);
oCommand.Execute(remoteCommandCallback);
}

function remoteCommandCallback(oResult) {
showProgressSpinningCircle(false);


var oCommand = oResult.RemoteCommand;
var changeEncryptionKey = ("true" == oCommand.GetParameter("changeEncryptionKey").Value);

if (oResult.Success)
{
if (true == changeEncryptionKey)
{
alert(LOCID_ENCR_KEY_CHANGE_SUCCESS);
}
else
{
alert(LOCID_ENCR_KEY_RESTORE_SUCCESS);
}






window.location.reload();

return true;
}
else
{

if (true == changeEncryptionKey)
{
alert(LOCID_ENCR_KEY_CHANGE_FAIL);
}
else
{
alert(LOCID_ENCR_KEY_RESTORE_FAIL);
}



return false;
}
}

function showProgressSpinningCircle(show, sActionMessage) {
if (show)
{
$get("tblEncryption").style.display = "none";
$get("tblProgressSpinningCircle").style.display = "block";
$get("lblProgressSpinningMessage").innerText = sActionMessage;
$get("butDialogClose").disabled = true;
}
else
{
$get("tblEncryption").style.display = "block";
$get("tblProgressSpinningCircle").style.display = "none";
$get("lblProgressSpinningMessage").innerText = sActionMessage;
$get("butDialogClose").disabled = false;
}
}

function changeTabIndex_OnLoad() {
document.getElementById("chkShowEncryptionKey").tabIndex="-1";
}
</script>
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>

</head>



<body onload="changeTabIndex_OnLoad()">
<frm:DialogForm id="crmForm" runat="server">



<table id="tblProgressSpinningCircle" style="display:none;cursor:wait" height="100%" width="100%">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br>
<nobr id="lblProgressSpinningMessage">
</nobr>
</td>
</tr>
</table>



<table id="tblEncryption" width="100%" height="100%" cellspacing="0" cellpadding="0">
<tr height="100%"><td valign="top">



<div id="divInformationSection">
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.Information" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="20px"><col>

<tr><td id="tdStatusEncryption" colspan="2">
<loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.EncryptionStatus" runat="server"/> <b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(this.statusEncryption)%></b>
</td></tr>
<tr/>

<tr><td colspan="2"><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.CurrentEncryptionKey" runat="server"/></td></tr>
<tr><td colspan="2">
<div id="divDisplayEncryptionKeyHidden"><ui:TextBox id="txtDisplayEncryptionKeyHidden" runat="server"/></div>
<div id="divDisplayEncryptionKeyShown" style="display:none"><ui:TextBox id="txtDisplayEncryptionKeyShown" runat="server"/></div>
</td></tr>
<tr>
<td><ui:CheckBox id="chkShowEncryptionKey" onclick="chkShowEncryptionKey_OnClick();" runat="server"/></td>
<td><label for="chkShowEncryptionKey"><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.Show" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>



<div id="divChangeSection" style="display:<%= this.isSqlEncryptionActive ? "block" : "none" %>">
<br>
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.ChangeEncryptionKey" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col><col width="135px">
<tr><td colspan="2"><ui:TextBox id="txtChangeNewEncryptionKey" runat="server"/></td></tr>
<tr>
<td><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.ChangeKeyRequirements" runat="server"/></td>
<td align="right"><ui:Button id="butChangeEncryptionKey" onclick="butChangeEncryptionKey_OnClick();" ResourceId="Web.Tools.SqlEncryption.aspx.Change" runat="server"/></td>
</tr>
</table>
</fieldset>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; margin-top:5px;">
<col width="20px"/>
<col />
<tr>
<td>
<img alt="" src="/_imgs/error/notif_icn_warn16.png" />
</td>
<td>
<loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.ChangeAndRestoreWarning" runat="server">
<loc:Argument runat="server"><a href="http://go.microsoft.com/fwlink/?LinkId=316366" target="_blank" style="text-decoration:underline"><loc:Text ResourceId="DataManagement.SqlEncryption.ChangeAndRestoreWarning.HelpLinkTitle" runat="server"/></a></loc:Argument>
</loc:Text>
</td>
</tr>
<tr>
<td>
<img alt="" src="/_imgs/error/notif_icn_warn16.png" />
</td>
<td>
<loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.ChangeWarning" runat="server"/>
</td>
</tr>
</table>
</div>



<div id="divRestoreSection" style="display:<%= this.isSqlEncryptionActive ? "none" : "block" %>">
<br>
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.RestoreEncryptionKey" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col><col width="135px">
<tr><td colspan="2"><ui:TextBox id="txtRestoreEnterEncryptionKey" runat="server"/></td></tr>
<tr>
<td/>
<td align="right"><ui:Button id="butRestoreEncryptionKey" onclick="butRestoreEncryptionKey_OnClick();" ResourceId="Web.Tools.SqlEncryption.aspx.Restore" runat="server"/></td>
</tr>
</table>
</fieldset>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; margin-top:5px;">
<col width="20px"/>
<col />
<tr>
<td>
<img alt="" src="/_imgs/error/notif_icn_warn16.png" />
</td>
<td>
<loc:Text ResourceId="Web.Tools.SqlEncryption.aspx.ChangeAndRestoreWarning" runat="server">
<loc:Argument runat="server"><a href="http://go.microsoft.com/fwlink/?LinkId=316366" target="_blank" style="text-decoration:underline"><loc:Text ResourceId="DataManagement.SqlEncryption.ChangeAndRestoreWarning.HelpLinkTitle" runat="server"/></a></loc:Argument>
</loc:Text>
</td>
</tr>
</table>
</div>
</td></tr>
</table>
</frm:DialogForm>
</body>
</html>
