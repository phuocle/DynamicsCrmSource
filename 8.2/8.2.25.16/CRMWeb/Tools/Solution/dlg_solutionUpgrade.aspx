<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionUpgradeDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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

$addHandler(window, "load", applychanges);

function applychanges() {
var CannotDeleteInUseComponentErrorCode = '8004f01f';

$get("btnCross").style.display = "none";
window.closeParent = true;

var oCommand = new RemoteCommand("Solution", "PromoteSolution", null, null, "Solutions");
oCommand.SetParameter("parentSolutionUniqueName", <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["solutionName"]) %>);

var originalErrorHandler = oCommand.ErrorHandler;
oCommand.ErrorHandler = function(errorCode, soapResponseXml) {
if (errorCode.toLowerCase() === "0x" + CannotDeleteInUseComponentErrorCode) {
var url =
Mscrm.CrmUri.create(
'/tools/dependency/dependencyviewdialog.aspx?objectid='
+ <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["solutionId"]) %>
+ '&objecttype=7100&operationtype=dependenciesforuninstall&errorcode='
+ CannotDeleteInUseComponentErrorCode);

var dialogOptions = new Xrm.DialogOptions;
dialogOptions.width = 800;
dialogOptions.height = 600;
window.parent.Xrm.Internal.openDialog(url.toString(), dialogOptions, null, null, null);

closeWindow();
}
else {
originalErrorHandler(errorCode, soapResponseXml);
}
};

var parameter = new Mscrm.AsyncJobCommandParameter();
parameter.cmd = oCommand;
parameter.preAction = hideButtons;
parameter.postAction = postDeletion;
new Mscrm.AsyncJobCommand(parameter).executeCommand();
}

function cancel() {
closeWindow();
}

function hideButtons() {
$get("butBegin").style.display = "none";
$get("cmdDialogCancel").style.display = "none";
$get("progressTbl").style.display = "";
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
</frm:DialogForm>

</body>
</html>
