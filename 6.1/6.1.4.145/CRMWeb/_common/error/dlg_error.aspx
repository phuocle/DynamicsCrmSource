






<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ErrorDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Reporting" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:text resourceid="web._common.error.errorHandler.aspx_title" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-Error-Header
{
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial !important;
font-weight: lighter !important;
font-size: 27px !important;
}
</style>

<script type="text/javascript">

var errInfo;
Sys.Application.add_load(Pageload);


function applychanges()
{
executeDialogCloseCallback();
closeWindow();
}

function openErrorDetails() {
document.getElementById("reloadform").submit();
}
function Pageload() {
var oArgs;
oArgs = getDialogArguments();

var errorMsg;
if (!IsNull(oArgs)) {
errorMsg = oArgs["errMessage"];
errInfo = oArgs["errInfo"];
}
if (!window.parent.UseTabletExperience && (IsNull(errInfo) || isNullOrEmptyString(errInfo.get_serializedException()))) {
document.getElementById("butDialogCopy").disabled = true;
}

if (!IsNull(oArgs))
{
if (ErrorCodeSupportsCustomMessage)
{
if (!IsNull(errorMsg) && errorMsg != "") {
document.getElementById("ErrorMessage").innerHTML = errorMsg;
}
}
else if (ErrorCodeSupportsParameters && !isNullOrEmptyString(localizedMessage) && (!IsNull(errInfo)) && errInfo != "")
{
var parameters = errInfo.get_parameters();
if (!IsNull(parameters))
{


var i = 0;
var paramArray = [ localizedMessage ];
while (!IsNull(parameters[i]))
{
paramArray.push(parameters[i]);
i++;
}



var finalMessage = String.format.apply(null, paramArray);
XUI.Html.SetText(document.getElementById("ErrorMessage"), finalMessage);
}
}


if (!IsNull(errInfo)) {
var msg = Mscrm.ErrorInformation.formatMessageWithParameters(document.getElementById("ErrorMessage").innerHTML,errInfo.get_parameters());
msg = msg.replace(/(\r)?\n/g, "<br/>");
msg = msg.replace(/(\\r)?\\n/g, "<br/>");



if (((errInfo.get_code() == "0x80048298")
|| (errInfo.get_code() == "0x8004832B") )
&& !IsNull(errInfo.get_description())) {
var errorDetails = "";
<%
if (SRSReportUtility.IsSafeToShowSrsErrors())
{
%>
errorDetails = "<br/>" + CrmEncodeDecode.CrmHtmlEncode(
"<%=AppResourceManager.Default.GetString("Error_Details")%>") + "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + errInfo.get_description();
<%
}
%>



msg = formatString(msg, errorDetails, "");
}
else if ((errInfo.get_code() == "0x80040231") && !IsNull(errInfo.get_description())) {

var errorInfoDecoded = CrmEncodeDecode.CrmHtmlDecode(errInfo.get_description());
var principalTeam = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("SecurityPrincipal.Team")%>");
var principalUser = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("SecurityPrincipal.User")%>");

if(errorInfoDecoded.indexOf("type="+Mscrm.EntityTypeCode.Team) != -1)
{
msg = formatString(msg,principalTeam);
}
else
{
msg = formatString(msg,principalUser);
}
}
else if (!IsNull(errInfo.get_code()) && (errInfo.get_code().toUpperCase()=="0x8003F451".toUpperCase()||errInfo.get_code().toUpperCase()=="0x8003F452".toUpperCase()) && !IsNull(errInfo.get_description()))
{
msg =errInfo.get_description();
}
document.getElementById("ErrorMessage").innerHTML = msg;
document.getElementById("serializedException").value = "<Exception>" + CrmEncodeDecode.CrmXmlEncode(errInfo.get_serializedException()) + "</Exception>";
}
}
}

function keyDownHandler(eventObj)
{
if(eventObj.keyCode == 13 && !IsNull(eventObj.target))
{
eventObj.preventDefault();
XUI.Html.DispatchDomEvent(eventObj.target, XUI.Html.CreateDomEvent('click'));
}
}

function dialogBodyTouchMoveHandler(eventObj)
{

eventObj.preventDefault();
}
function scrollableContentTouchMoveHandler(eventObj)
{

eventObj.stopPropagation();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" showheader="false" runat="server">

<table cellpadding="8" cellspacing="0" style="table-layout:fixed;width:100%;height:100%" id="errorInformation">
<col style="width:75px" /><col />
<tr class="ms-crm-ErrorMessage-row">
<td>
<img alt=" " id="ErrorImage" runat="server" />
</td>
<td>
<div runat="server" id="ErrorTitle" class="ms-crm-Error-Header"></div>
<span runat="server" id="ErrorMessage" class="ms-crm-Error-Message" style="word-wrap:break-word;" onkeydown="keyDownHandler(new Sys.UI.DomEvent(event))"></span>
</td>
</tr>
</table>

</frm:DialogForm>
<form name='reloadform' id='reloadform' enctype='multipart/form-data' method='post'	action='dlg_errorLog.aspx'>
<input type="hidden" id="serializedException" name="serializedException" value="" />
</form>
</body>
</html>
