<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.UninstallDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript">

function applychanges() {


window.closeParent = true;

var parameter = new Mscrm.AsyncJobCommandParameter();
var oCommand = new RemoteCommand("Solution", "DeleteSolution");
oCommand.SetParameter("id", <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["id"]) %>);
parameter.cmd = oCommand;
parameter.preAction = disableButton;
parameter.postAction = postDeletion;
new Mscrm.AsyncJobCommand(parameter).executeCommand();
}

function cancel() {
closeWindow();
}

function disableButton() {
$get("butBegin").disabled = true;
$get("cmdDialogCancel").disabled = true;
$get("progressTbl").style.display = "";
$get("dialogTbl").style.display = "none";
}

function postDeletion(result) {
if (result) {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table id="progressTbl" style="display: none; cursor: wait; height: 100%; width: 100%">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<nobr>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(SpinCaption)%>
</nobr>
</td>
</tr>
</table>
<table id="dialogTbl" style="height: 100%; width: 100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<div id="divblock" style="display: block" class="ms-crm-Dialog-Header-Desc">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription)%>
</div>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
