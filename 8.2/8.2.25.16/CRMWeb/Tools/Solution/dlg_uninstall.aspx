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
var CannotDeleteInUseComponentErrorCode = "8004f01f";


window.closeParent = true;

var oCommand = new RemoteCommand("Solution", "DeleteSolution", null, null, "Solutions");
oCommand.SetParameter("id", <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["id"]) %>);

var originalErrorHandler = oCommand.ErrorHandler;
oCommand.ErrorHandler =  function(errorCode, soapResponseXml) {
if (errorCode.toLowerCase() === "0x" + CannotDeleteInUseComponentErrorCode) {
var url =
Mscrm.CrmUri.create(
'/tools/dependency/dependencyviewdialog.aspx?objectid='
+ <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["id"]) %>
+ '&objecttype=7100&operationtype=dependenciesforuninstall&errorcode='
+ CannotDeleteInUseComponentErrorCode);

var dialogOptions = new Xrm.DialogOptions;
dialogOptions.width = 800;
dialogOptions.height = 600;
window.parent.Xrm.Internal.openDialog(url.toString(), dialogOptions, null, null, null)

closeWindow();
}
else {
originalErrorHandler(errorCode, soapResponseXml);
}
};

var parameter = new Mscrm.AsyncJobCommandParameter();
parameter.cmd = oCommand;
parameter.preAction = disableButton;
parameter.postAction = postDeletion;
var asyncJobCommand = new Mscrm.AsyncJobCommand(parameter);
asyncJobCommand.executeCommand();
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
