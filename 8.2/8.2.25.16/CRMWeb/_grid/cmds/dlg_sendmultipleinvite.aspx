<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SendMultipleInviteDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Components.UI"%>
<!DOCTYPE html >

<html>
<head>
<title><loc:Text ResourceId="Web._grid.cmds.dlg_sendmultipleinvite.aspx_title" runat="server"/></title>
<script language="javascript">

var userId;

function showProgress()
{
document.body.innerHTML = "<table class='stdTable' style='background-color:FFFFFF'><tr><td style='vertical-align: middle' align='center'><IMG alt='' src='/_imgs/AdvFind/progress.gif'><br>" +
CrmEncodeDecode.CrmHtmlEncode(LOCID_INVITATION_PROGRESS) + "&nbsp;<div id=\"InviteProgress\"></div>...</td></tr></table>";
}

function saveUserForm()
{

<%if (!bError)
{
%>

var _sUserId;
var len = 0;
if(typeof(_sUserIds) != "undefined")
{
var len = _sUserIds.length;
}

showProgress();
var divProgress = document.getElementById("InviteProgress");
var s =0;
for(var i=0; i<len; i++)
{
divProgress.InnerHTML = s+"/"+i;
var _sUserId = _sUserIds[i];
var oCommand = new RemoteCommand("UserManager", "SendInviteForGrid");
oCommand.SetParameter("userId", _sUserId);
oResult = oCommand.Execute();
if(oResult.Success)
{
s++;
}
divProgress.InnerHTML = s+"/"+i;
}
<%}%>

window.returnValue = true;
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}
function cancel()
{
window.returnValue = false;
closeWindow();
}

</script>

</head>
<body>
<%if (bError)
{%>
<div>
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
<col width="10px"><col width="100px">
<tr><td colspan="2"><ui:LabelUI ID="ErrorForInvite" runat="server" /></td></tr>
</table>
</div>
<%}else{%>
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
<col width="20px"><col width="10px"><col><col width="10px">
<tr height="10px"><td colspan="3"></td></tr>
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_multiple1" runat="server" />
</td></tr>
<tr height="10px"><td colspan="3"></td></tr>
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_145" runat="server" />
</td>
</tr>
<tr height="10px"><td colspan="3"></td></tr>
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_132" runat="server" />
</td>
</tr>
</table>
<%}%>
</body>
</html>

