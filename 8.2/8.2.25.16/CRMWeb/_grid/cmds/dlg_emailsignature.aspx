<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.SelectEmailSignatureDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Xml.Xsl" %>
<%@ Import Namespace="System.Xml.XPath" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<script type="text/javascript">

function ChangeLanguage()
{
var languageCode = $get("LanguageCode").value;
var oCommand = new RemoteCommand("EmailSignatureService", "RetrieveEmailSignatureListHtml");
oCommand.SetParameter("languageCode", languageCode);
oCommand.SetParameter("ownerId", "<%= Microsoft.Crm.Util.GetGuid(Request.QueryString["ownerId"]) %>");
oCommand.SetParameter("entityName", "<%= Microsoft.Crm.CrmEncodeDecode.CrmUrlPathEncode(Request.QueryString["entityName"]) %>");
var oResult = oCommand.Execute();
if (typeof (oResult.ReturnValue) == "string")
{
$get("ItemList").innerHTML = oResult.ReturnValue;
AutoSelectFirstTemplate();
}
else
{
$get("ItemList").innerHTML = "";
$get("butBegin").disabled = true;
}
}

function AutoSelectFirstTemplate()
{
if (($get("SignatureTable").tagName == "UL") && (!IsNull($get("SignatureTable").childNodes[0])))
{
if ($get("SignatureTable").childNodes[0].click)
{
Mscrm.Utilities.click($get("SignatureTable").childNodes[0]);
}
else
{
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
var allowDefault = $get("SignatureTable").childNodes[0].dispatchEvent(evt);
}
$get("butBegin").disabled = false;
}
else
{
$get("butBegin").disabled = true;
}
}

var _oSignature;
Sys.Application.add_load(function ()
{
AutoSelectFirstTemplate();
});

function Ok()
{
if (_oSignature != null)
{
var objSignature = new Object();
var qsUrl = Mscrm.CrmUri.create(window.location.search);
var richClient = qsUrl.get_query()["richClient"]


if (null != richClient && richClient == "1")
{
objSignature.tmplId = _oSignature.getAttribute("itemId");
window.returnValue = objSignature;
}
else
{

var targetType = qsUrl.get_query()["targetType"];
var targetId = qsUrl.get_query()["targetId"];
if (null != targetType && (targetType == "4406" || targetType == "4402"))
{
objSignature.tmplId = _oSignature.getAttribute("itemId");
objSignature.tmplTitle = _oSignature.getAttribute("itemTitle");
objSignature.innerHTML = '<img style="MARGIN-RIGHT: 4px" alt="" align=absMiddle src="/_imgs/ico_16_2010.gif">';
window.returnValue = objSignature;
}
else
{
var command = new RemoteCommand("EmailSignatureService", "GetInstantiatedEmailSignature");
command.SetParameter("signatureId", _oSignature.getAttribute("itemId"));
var result = command.Execute();
if (result.Success)
{

objSignature.EmailBody = "";
objSignature.EmailSubject = "";
if (typeof (result.ReturnValue) == "string")
{
oXml = XUI.Xml.LoadXml(result.ReturnValue);
if(oXml.getElementsByTagName("SignatureValue")[0] && oXml.getElementsByTagName("SignatureValue")[0].firstChild)
{
objSignature.EmailBody = CrmEncodeDecode.CrmXmlDecode(oXml.getElementsByTagName("SignatureValue")[0].firstChild.nodeValue);
}
}
window.returnValue = objSignature;
}
else
{
window.returnValue = null;
}
}
}
}
else
{
window.returnValue = null;
}
Mscrm.Utilities.setReturnValue(window.returnValue);
closeWindow();
}

function SelectSignature(objSignature, bWasDblClick)
{
if (objSignature != _oSignature)
{
SelectItem(objSignature);
_oSignature = objSignature;
}
$get("butBegin").disabled = false;
if (bWasDblClick)
{
Ok();
}
}

function applychanges()
{
Ok();
}


function cancel()
{
closeWindow();
}
</script>
<style>
.blockMain
{
position: absolute;
top:0px;
bottom:0px;
width: 100%;
bottom:0px;
display: inline-block;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>

}
.ms-crm-email
{
position:absolute;
top:15px;
left:15px;
right:15px;
display:inline-block;
overflow:hidden;
}
.ms-crm-SelectOn
{
border:1px solid transparent;
}
</style>
</head>
<body>
<form name="crmForm" id="crmForm" action="" style="padding: 0px; margin: 0px; height: 100%;">
<div class="ms-crm-email">
<div style="display: inline-block; height: 300px; padding-bottom: 10px; width: 50%;">
<table cellpadding="0" cellspacing="0" width="100%" style="position: relative;">
<col width="100" />
<col />
<tr>
<td id="languagecode_c">
<label for="LanguageCode">
<loc:MetadataText ID="MetadataText1" EntityType="template" AttributeName="languagecode" runat="server" />
</label>
</td>
<td nowrap="nowrap">&nbsp;<sdk:LanguagePicker id="LanguageCode" runat="server" IncludeAllOption="true" OnChange="ChangeLanguage();" /></td>
</tr>
</table>
</div>
<div style="position: absolute; top: 35px; bottom: 0px; left: 0px; right: 0px; width: 100%;">
<div class="blockMain">
<div id="ItemList" class="ms-crm-Dialog-List ms-crm-Dialog-List-Layered ms-crm-TextAlign-LeadingEdge  ms-crm-absolutePosition ms-crm-SelectOn" style="padding-top: 0px; padding-bottom: 0px; height: auto;">
<ui:XmlRenderer id="xmlRenderer" runat="server" />
</div>
</div>
</div>
</div>
</form>
</body>
</html>
