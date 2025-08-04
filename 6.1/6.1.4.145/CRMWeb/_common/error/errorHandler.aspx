<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Web.Pages.ErrorHandlerPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />

<script type="text/javascript">
Sys.Application.add_load(PageLoad);
function tryAgain()
{

var oArgs = window.top.getDialogArguments();
var bDialogMode = (oArgs !== null && typeof(oArgs) !== "undefined");

var currentWindow = GetWindow();

if (_requestUrl === "")
{
currentWindow.location.reload();
}
else if (bDialogMode)
{

window.returnValue = Mscrm.CrmWindow.dialogRetryReturnValue;
closeWindow();
}
else
{
if (_requestUrl === currentWindow.location.pathname + currentWindow.location.search)
{
currentWindow.location.reload();
}
else
{
currentWindow.location = _requestUrl;
}
}
}

function GetWindow()
{
return _bDevErrorMode ? window.parent : window;
}

function PageLoad()
{




if (document.body.offsetWidth < 480)
{
document.getElementById("ErrorWindowBody").setAttribute("width", "100%");
document.getElementById("ErrorDetailsBody").setAttribute("width", "100%");
}

if (document.body.offsetHeight < 200)
{
document.getElementById("ErrorWindowBody").setAttribute("height", "100%");
}



if (typeof(_removeRecordFromRecentlyViewed) != "undefined")
{

var pm = null;
var parent = window.parent;
var win = window;
while (IsNull(pm) && !IsNull(parent) && win != parent)
{
pm = parent.$find("crmPageManager");
win = parent;
parent = win.parent;
}
if (!IsNull(pm))
{
var parameters = {};
parameters["objectIds"] = new Array(_removeRecordFromRecentlyViewed);
pm.raiseEvent(Mscrm.ScriptEvents.RecordsDeleted, parameters);
}
}
}

</script>
<style type="text/css">
.tblErrorDetails
{
table-layout:fixed;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
</style>
</head>
<body class="ms-crm-ErrorDialog2">
<div style="width:100%;height:100%;text-align:center">
<table id = "ErrorWindowBody" width="480px" height="200px" cellspacing="0" cellpadding="0" style="margin:auto;text-align:center">
<tr height="34px">
<td class="errorHandler_td">
<loc:Text ResourceId="Web._common.error.devError.aspx_03" runat="server" />
</td>
</tr>
<tr>
<td style="text-align:center;padding-top:3px;">
<table id = "ErrorDetailsBody" width="442px" cellspacing="0" cellpadding="5" class="tblErrorDetails">
<col width="58" />
<col />
<tr>
<td align="center" style="padding-top:10px;">
<img runat="server" id="ImageErrorIcon" /></td>
<td>
<h1><div tabIndex="0" runat="server" id="ErrorTitle" class="ms-crm-Error-Header"></div></h1>
<p><span runat="server" id="ErrorText"></span></p>
</td>
</tr>
<tbody runat="server" id="TableRowInfo" visible="false">
<tr>
<td colspan="2" style="padding-top:20px;">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="16" />
<col />
<col width="16" />
<tr height="20px">
<td><img alt="" src="/_imgs/box_on_left.gif" class="errorHandler_img_boxOnLeft"></td>
<td nowrap class="ms-crm-Error-AdditionalInformation">
<loc:Text ResourceId="Web._common.error.unsupported.aspx_74" runat="server"/>
</td>
<td><img alt="" src="/_imgs/box_right.gif" class="errorHandler_img_BoxRight"/></td>
</tr>
<tr>
<td style="border:1 solid #889dc2; background-color:#ffffff;" colspan="3">
<div class="errorHandler_div_info" id="DivErrorExtraInformation" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<% if(Request.QueryString["inline"] == null || Request.QueryString["inline"] != "1")
{
%>
<tr height="20px">
<td class="errorHandler_td_middle" colspan="2">
<ui:Button runat="server" id="ButtonTryAgain" OnClick="tryAgain();" ResourceId="web._common.error.errorHandler.aspx_TryAgain"></ui:Button>
<ui:Button runat="server" id="CloseButton" OnClick="Mscrm.InlineDialogUtility.closeAllInlineDialogs();" ResourceId="web._common.error.errorHandler.aspx_Close"></ui:Button>
</td>
</tr>
<%
}
%>
</table>
<br />
<br />
<br />
<br />
<br />
</div>
</body>
</html>
