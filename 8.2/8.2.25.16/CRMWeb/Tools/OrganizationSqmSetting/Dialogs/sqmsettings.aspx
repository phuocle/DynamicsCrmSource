<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.OrganizationSqmSetting.OrganizationSqmSettingPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="System.Globalization" %>

<!DOCTYPE HTML>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<title><loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.CustFeedbackTab.DialogTitle" runat="server"/></title>


<script type="text/javascript">


var _checkSqmAcceptControl;
var _privacyOption;
var _privacyStatementLink;

Sys.Application.add_load(function () {

if (IS_LIVE) {
$get("tabSQM").style.display = "none";
}
else
{
$get("privacyStatementRow").style.display = "none";
}

_checkSqmAcceptControl = Mscrm.FormControlInputBehavior.GetBehavior('checkSqmAccept');
_privacyOption = Mscrm.FormControlInputBehavior.GetBehavior('privacyOption');
_privacyStatementLink = Mscrm.FormControlInputBehavior.GetBehavior('txtPrivacyStatementUrl');

oprivacyOption = $get("privacyOption");
if (!IsNull(oprivacyOption)) {
if (oprivacyOption.value == 0) {
$get("checkPrivacy").checked = false;
}
else {
$get("checkPrivacy").checked = true;
if (oprivacyOption.value == 1)
$get("Sel_privacyoption1").checked = true;
else if (privacyOption.value == 2)
$get("Sel_privacyoption2").checked = true;
else if (privacyOption.value == 3)
$get("Sel_privacyoption3").checked = true;
}
}

var privacyStatementLink = _privacyStatementLink.get_dataValue();

$get("Sel_showprivacystatementlinkoption1").checked = !privacyStatementLink;
$get("Sel_showprivacystatementlinkoption2").checked = privacyStatementLink;
$get("txtPrivacyStatementUrl").disabled = !privacyStatementLink;

onPrivacyClick();
$addHandler($get("learnmore"), "click", openLink);
$addHandler($get("viewprivacyStatement"), "click", openPrivacyLink);

});

function openLink(domEvent) {
domEvent.preventDefault();
var el = domEvent.target;
var url = el.getAttribute("href");
if (!IsNull(url)) {
window.open(url);
}
}

function openPrivacyLink(privacyLinkEvent) {
privacyLinkEvent.preventDefault();
var url = $get("txtPrivacyStatementUrl").value;
if (!IsNull(url) && validateUrl(url)) {
window.open(url);
}
}

function cancel()
{
closeWindowAndRemoveHandlers();
}

function applychanges()
{

if($get("Sel_showprivacystatementlinkoption2").checked && !validateUrl($get("txtPrivacyStatementUrl").value))
{
return false;
}

var boSuccess = true;
if ((!IsNull(_checkSqmAcceptControl) && _checkSqmAcceptControl.get_isDirty())
|| (!IsNull(_privacyOption) && _privacyOption.get_isDirty())
|| _privacyStatementLink.get_isDirty() )
{
var retval = "<organization>";
if (!IsNull(_checkSqmAcceptControl) && _checkSqmAcceptControl.get_isDirty()) retval += "<sqmenabled>" + ((_checkSqmAcceptControl.get_dataValue()) ? "1" : "0") + "</sqmenabled>";
if (!IsNull(_privacyOption) && _privacyOption.get_isDirty()) retval += getPrivacyOptionString();

if(_privacyStatementLink.get_isDirty())
{
retval += getPrivacyStatementUrlNode();
}

retval += "</organization>";


var xml = XUI.Xml.LoadXml(retval);

var xmlhttp = new XMLHttpRequest();
var oUrl = Mscrm.CrmUri.create("/Tools/OrganizationSqmSetting/cmds/cmd_update.aspx");
xmlhttp.open("POST", oUrl.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, oUrl);

boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xml);
if (boSuccess)
{
boSuccess=handleXMLErr(xmlhttp.responseXML);
}




}
if (boSuccess)
{
closeWindowAndRemoveHandlers();
}
}

function closeWindowAndRemoveHandlers()
{



$removeHandler($get("viewprivacyStatement"), "click", openLink);
$removeHandler($get("learnmore"), "click", openLink);
closeWindow(true);
}

function getPrivacyOption()
{
var val = 0;
var Sel_privacyoption1 = $get("Sel_privacyoption1");
var Sel_privacyoption2 = $get("Sel_privacyoption2");
var Sel_privacyoption3 = $get("Sel_privacyoption3");

if ($get("checkPrivacy").checked)
{
if (Sel_privacyoption1.checked)
{
val = Sel_privacyoption1.value;
}
else if (Sel_privacyoption2.checked)
{
val = Sel_privacyoption2.value;
}
else if (Sel_privacyoption3.checked)
{
val = Sel_privacyoption3.value;
}
}
return val;
}

function getPrivacyOptionString()
{
var retVal = new StringBuilder();
retVal.Append("<reportscripterrors>");
retVal.Append(CrmEncodeDecode.CrmXmlEncode(getPrivacyOption()));
retVal.Append("</reportscripterrors>");
return retVal.ToString();
}

function getPrivacyStatementUrlNode()
{
var retVal = new StringBuilder();
retVal.Append("<privacystatementurl>");
retVal.Append(CrmEncodeDecode.CrmXmlEncode($get("txtPrivacyStatementUrl").value));
retVal.Append("</privacystatementurl>");
return retVal.ToString();
}


function onPrivacyClick()
{
var Sel_privacyoption1 = $get("Sel_privacyoption1");
var Sel_privacyoption2 = $get("Sel_privacyoption2");
var Sel_privacyoption3 = $get("Sel_privacyoption3");

if ($get("checkPrivacy").checked)
{
Sel_privacyoption1.removeAttribute("disabled");
Sel_privacyoption2.removeAttribute("disabled");
Sel_privacyoption3.removeAttribute("disabled");


if (!(Sel_privacyoption1.checked || Sel_privacyoption2.checked || Sel_privacyoption3.checked))
{
Sel_privacyoption1.checked = true;
}
}
else
{
Sel_privacyoption1.setAttribute("disabled", true);
Sel_privacyoption2.setAttribute("disabled", true);
Sel_privacyoption3.setAttribute("disabled", true);
}
$get("privacyOption").value = getPrivacyOption();
}

function onPrivacyOptionClick(Sel_privacyoption)
{
$get("privacyOption").value = Sel_privacyoption.value;
}

function onShowPrivacyStatementOptionClick(Sel_privacystatementoption)
{
if(Sel_privacystatementoption.value == 1)
{
$get("txtPrivacyStatementUrl").disabled = true;
$get("txtPrivacyStatementUrl").value = "";
}
else
{
$get("txtPrivacyStatementUrl").disabled = false;
}

}


function validateUrl(selectedUrl)
{
if(!selectedUrl.match(/^https?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/))
{
alert("<%=Microsoft.Crm.Utility.AppResourceManager.Default.GetString("Organization_Invalid_Privacy_Statement_Url")%>");
return false;
}
return true;
}


</script>
</head>
<body style="overflow-x: auto;">
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<table class="stdTable" border="0" cellspacing="2" cellpadding="2">
<tr>
<td valign="top">
<div class="ms-crm-Form-Area">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<tr height="100%">
<td width="25">&nbsp;</td>
<td valign="top">

<div id="tabSQM">
<table width="100%" cellspacing="0" cellpadding="3">
<col width="20" /><col />
<tr height="19">
<td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.SectionHeader" runat="server" /></td>
</tr>
<tr height="5"><td colspan="2"></td></tr>
<tr >
<td colspan="2" ><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.Invite" runat="server"/></td>
</tr>
<tr >
<td colspan="2" ><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.DataInfo1" runat="server"/></td>
</tr>
<tr >
<td colspan="2" ><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.DataInfo2" runat="server"/></td>
</tr>
<tr >
<td colspan="2" nowrap><a id="learnmore" class="ms-crm-Link" HREF="http://go.microsoft.com/fwlink/p/?LinkID=627379"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.LearnMoreText" runat="server"/></a></td>
</tr>
<tr>
<td><ui:CheckBox id="checkSqmAccept" runat="server"/></td>
<td nowrap class="sqmsettings_td_AcceptBox">
<label for="checkSqmAccept">
<nobr><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.CustFeedbackTab.AcceptCheckbox" runat="server"/></nobr>
</label>
</td>
</tr>
</table>
</div>


<div id="privacy">
<ui:Hidden id="privacyOption" runat="server" />
<table width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed">
<col width="20" /><col width="20" /><col width="20" /><col />

<tr height="19"><td colspan="4" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.ErrorReportingTab.Heading" runat="server"/></td></tr>
<tr height="5"><td colspan="4"></td></tr>
<tr>
<td colspan="4">
<loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.ErrorReportingTab.Description" runat="server"/><br /><br />
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td><ui:CheckBox id="checkPrivacy" onclick="onPrivacyClick();" runat="server"/></td>
<td nowrap class="sqmsettings_td_AcceptBox" colspan="2">&nbsp;
<label for="checkPrivacy">
<nobr><loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.ErrorReportingTab.PrivacyCheckbox" runat="server"/></nobr>
</label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colspan="2"><loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.ErrorReportingTab.Text1" runat="server"/></td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><input type="radio" class="radio" id="Sel_privacyoption1" name="crmFormprivacyOption" onclick="onPrivacyOptionClick(this);" value="1"></td>
<td>&nbsp;<label for="Sel_privacyoption1"><loc:Text ResourceID="Organization_Script_Error_Reporting_Option_AskToReport" runat="server" /></label></td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><input type="radio" class="radio" id="Sel_privacyoption2" name="crmFormprivacyOption" onclick="onPrivacyOptionClick(this);" value="2"></td>
<td>&nbsp;<label for="Sel_privacyoption2"><loc:Text ResourceID="Organization_Script_Error_Reporting_Option_AutoReport" runat="server" /></label></td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><input type="radio" class="radio" id="Sel_privacyoption3" name="crmFormprivacyOption" onclick="onPrivacyOptionClick(this);" value="3"></td>
<td>&nbsp;<label for="Sel_privacyoption3"><loc:Text ResourceID="Organization_Script_Error_Reporting_Option_NeverReport" runat="server" /></label></td>
</tr>
<tr id="privacyStatementRow">
<td colspan="4">
<table width="100%" cellspacing="0" cellpadding="0">
<tr height="10">
<td colspan="3">&nbsp;</td>
</tr>
<tr height="19">
<td colspan="3" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.PrivacyStatement.Heading" runat="server"/>
</td>
</tr>
<tr height="5"><td colspan="4"></td></tr>
<tr>
<td colspan="3"><loc:Text ResourceId="Web.Tools.OrganizationSqmSetting.Dialogs.PrivacyStatement.Description" runat="server"/><br /><br />
</td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="Organization_Privacy_Statement_OptionsIntro" runat="server"/>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td width="10"><input type="radio" class="radio" id="Sel_showprivacystatementlinkoption1" name="crmFormshowPrivacyStatementLinkOption" value="1" onclick="onShowPrivacyStatementOptionClick(this);" ></td>
<td><label for="Sel_showprivacystatementlinkoption1"><loc:Text ResourceId="Organization_Privacy_Statement_NoLink" runat="server"/></label></td>
</tr>
<tr>
<td>&nbsp;</td>
<td width="10"><input type="radio" class="radio" id="Sel_showprivacystatementlinkoption2" name="crmFormshowPrivacyStatementLinkOption" value="2" onclick="onShowPrivacyStatementOptionClick(this);" ></td>
<td><label for="Sel_showprivacystatementlinkoption2"><loc:Text ResourceId="Organization_Privacy_Statement_ShowLink" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td colspan="2">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td width="23">&nbsp;</td>
<td><label for="txtPrivacyStatementUrl"><loc:Text ResourceId="Organization_Privacy_Statement_Url" runat="server"/></label></td>
</tr>
<tr>
<td width="23">&nbsp;</td>
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td width="80%">
<ui:TextBox id="txtPrivacyStatementUrl" runat="server" width="400" />
</td>
<td width="20%">
&nbsp;<a id="viewprivacyStatement" class="ms-crm-Link" style="text-decoration: underline; cursor: hand; cursor: pointer"><loc:Text ResourceId="Organization_Privacy_Statement_Url_Test" runat="server"/></a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>

</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
