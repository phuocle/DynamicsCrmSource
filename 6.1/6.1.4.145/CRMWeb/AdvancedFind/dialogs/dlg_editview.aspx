<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.AdvancedFind.Dialogs.EditView" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">

var RESULT_CANCEL = -1;
var RESULT_BACK = -2;
var RESULT_EXPORT = 10;
$addHandler(window, "load", PageOnLoad);
function PageOnLoad()
{
var oArgs = getDialogArguments();
var frameRender = $get("frameRender");

if (oArgs.hasOwnProperty("fetchXml"))
{
$get("FetchXml", frameRender).value = oArgs.fetchXml;
$get("LayoutXml", frameRender).value = oArgs.layoutXml;
}
else
{
$get("FetchXml", frameRender).value = oArgs.FetchXml;
$get("LayoutXml", frameRender).value = oArgs.LayoutXml;
}
if (_bFromExportExcel)
$get("btnBack").style.visibility = "hidden";
frameRender.submit();
}

function applychanges()
{
var viewEditor = $get("viewEditor");


if (viewEditor.contentWindow.document.readyState != "complete")
{
return;
}

if (viewEditor.contentWindow.ValidateView())
{
var oOutArgs = new Object();
oOutArgs.Action = RESULT_EXPORT;
var oInArgs = getDialogArguments();

oOutArgs.FetchXml = viewEditor.contentWindow.$get("crmFormSubmit").crmFormSubmitFetchXml.value;
oOutArgs.LayoutXml = viewEditor.contentWindow.$get("crmForm").layoutxml.value;


var result = oOutArgs.LayoutXml.match(/(?:multiobjectidfield=")(\w+)(?:")/);
if (result != null && result.length > 1)
{

var fieldName = result[1];

var attributeRegEx = new RegExp("<attribute\\s+name\\s*=\\s*\"" + fieldName + "\"","");
if (oOutArgs.FetchXml.match(attributeRegEx) == null)
{

oOutArgs.FetchXml = oOutArgs.FetchXml.replace(/<\/entity>/, "<attribute name=\"" + fieldName + "\" /></entity>");
}
}


if (Mscrm.Utilities.isEdge()) {
oInArgs.LayoutXml = oInArgs.LayoutXml.replace(/\s\/>/g, "/>");
}


with (oInArgs)
{
if (oInArgs.hasOwnProperty("fetchXml"))
{
oOutArgs.IsDirty = (oOutArgs.FetchXml != fetchXml || oOutArgs.LayoutXml != oInArgs.layoutXml);
}
else
{
oOutArgs.IsDirty = (oOutArgs.FetchXml != FetchXml || oOutArgs.LayoutXml != LayoutXml);
}
}

if (oOutArgs.IsDirty)
{
Mscrm.Utilities.setReturnValue(oOutArgs);
}
closeWindow();
}
}


function back() {
var oReturnValue = new Object();
oReturnValue.Action = RESULT_BACK;
window.returnValue = oReturnValue;
Mscrm.Utilities.setReturnValue(window.returnValue);
if (_bFromExportExcel) {
if (!IsNull(window.opener) && !IsNull(window.opener.$get("dialogOkButton"))) {
window.opener.$get("dialogOkButton").focus();
}
}
closeWindow();
}


function cancel() {
if (_bFromExportExcel) {
var oReturnValue = new Object();
oReturnValue.Action = RESULT_CANCEL;
window.returnValue = oReturnValue;
Mscrm.Utilities.setReturnValue(window.returnValue);
}
closeWindow();
}
</script>

<style type="text/css">
div.ms-crm-DialogStrict-Main
{
-webkit-overflow-scrolling:touch;
}
#btnBack
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
margin-right: 30px !important;
float:right !important;
<% }else{ %>
margin-left: 30px !important;
float:left !important;
<% } %>
}
</style>
</head>

<body class="ms-crm-absolutePosition">
<FORM id="frameRender" action="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/tools/vieweditor/viewManager.aspx?viewType=" + Microsoft.Crm.Util.UserQuery.ToString(CultureInfo.InvariantCulture) + "&objectTypeCode=" + EntityType.ToString(CultureInfo.InvariantCulture) + "&fromAdvFind=1&FromExportExcel=" + (this.FromExportExcel ? "1" : "0"), Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" method="post" target="viewEditor">
<INPUT type="hidden" id="FetchXml" name="FetchXml" value="">
<INPUT type="hidden" id="LayoutXml" name="LayoutXml" value="">

<INPUT type="hidden" id="crmFormSubmitId" name="crmFormSubmitId" value="">
</FORM>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" style="width:100%; height:100%">
<tr>
<td style="vertical-align:top"><iframe name="viewEditor" id="viewEditor" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" style="position:absolute; width:100%; height:100%;" scrolling="no" frameborder="0"></iframe></td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
