<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicateDetectionSettingsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.DuplicateDetection.duplicatedetectionsettings.aspx_title" runat="server"/></title>

<script type="text/javascript" language="javascript">


function cancel()
{
closeWindow();
}

function applychanges()
{
var retval = "<organization>";
retval += "<isduplicatedetectionenabled>" + $get("chkEnableDeDup").checked + "</isduplicatedetectionenabled>";
retval += "<isduplicatedetectionenabledforimport>" + $get("chkImport").checked + "</isduplicatedetectionenabledforimport>";
retval += "<isduplicatedetectionenabledforofflinesync>" + $get("chkOfflineSync").checked + "</isduplicatedetectionenabledforofflinesync>";
retval += "<isduplicatedetectionenabledforonlinecreateupdate>" + $get("chkOnlineCreate").checked + "</isduplicatedetectionenabledforonlinecreateupdate>";

<% if (IsOctober2020UpdateEnabled) {%>
retval += GetDuplicateDetectionOptions();
<% } %>
retval += "</organization>";

var boSuccess = true;
var xml= XUI.Xml.LoadXml(retval);

var xmlhttp = new XMLHttpRequest();
var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/DuplicateDetectionSettings/cmds/cmd_update.aspx");
xmlhttp.open("POST", oUrl.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, oUrl);

boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xml);

if (boSuccess)
{




var responseXml = xmlhttp.responseXML;
var node = XUI.Xml.SelectSingleNode(responseXml, "/error", null);
if (!IsNull(node))
{
var errorCode = XUI.Xml.SelectSingleNode(node, "code", null);
if(XUI.Xml.GetText(errorCode).toLowerCase() == "0x80048428")
{
XUI.Xml.SetText(errorCode, "0x80048462");
}
}
handleXMLErr(responseXml);



}
if(boSuccess)
{
closeWindow();
}

}
function GetDuplicateDetectionOptions()
{
if (!IsNull(rdDuplicateDetectionOptions) && Mscrm.FormUtility.isControlDirty($get("rdDuplicateDetectionOptions")))
{
_boAnySettingChanged = true;
var orgSettings = Xrm.Utility.getGlobalContext().organizationSettings;
var duplicateDetectionOption = {};

try{

duplicateDetectionOption = JSON.parse(orgSettings.attributes.qualifyLeadAdditionalOptions);
}
catch(e)
{

duplicateDetectionOption = {};
}
var chosenOption = Mscrm.FormControlInputBehavior.GetBehavior("rdDuplicateDetectionOptions").get_dataValue();
if(chosenOption)
{
duplicateDetectionOption["DuplicateDetectionMerge"] = "true";
}
else{
duplicateDetectionOption["DuplicateDetectionMerge"] = "false";
}

var duplicateDetectionOptionJson = JSON.stringify(duplicateDetectionOption);
try{

var event = {};
event["moduleName"] = "AdminSystemSettings";
event["componentName"] = "Sales";
event["functionName"] = "GetDuplicateDetectionOptions";
event["eventType"] = "information";
event["eventDetails"] = duplicateDetectionOptionJson;
Xrm.Internal.addMetric("salesoperationevents", event);
}
catch(e)
{
}

return "<qualifyleadadditionaloptions>" + duplicateDetectionOptionJson + "</qualifyleadadditionaloptions>";

}
return "";
}

function onClickEnableDeDup()
{
var confirmation = true;
<% if(_InitialValueEnableDupCheck == true) {%>
if($get("chkEnableDeDup").checked == false)
{
confirmation = confirm(LOCID_CONFIRM_DISABLE_DUPCHECK);
}
<%} %>

if(confirmation == true)
{
var disableAll = false;

if($get("chkEnableDeDup").checked == false)
{
disableAll = true;
}

$get("chkOnlineCreate").disabled = disableAll;
$get("chkOfflineSync").disabled = disableAll;
$get("chkImport").disabled = disableAll;

}
else
{

$get("chkEnableDeDup").checked = true;
}
}

</script>

<style type="text/css">

DIV.ms-crm-DialogStrict-Main
{
overflow: hidden;
}
DIV.ms-crm-Form-Area
{
padding-left:5px;
padding-right:5px;
padding-top:5px;
}
.divContent
{
position:absolute;
top:25px;
bottom:0px;
left:5px;
right:5px;
}
</style>

</head>

<body>
<form name="crmForm">
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<div class="ms-crm-Form-Area">
<div class="ms-crm-TabBar-Cell" style="height: 20px;">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tab0" class="ms-crm-Tab divContent" style="height:auto;display:inline">
<table width="100%">
<col width=20><col>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" valign="bottom"><loc:Text ResourceId="Duplicatedetectionsettings.aspx_Enable_Duplicate_Detection" runat="server"/>
</td>
</tr>
<tr>
<td><ui:CheckBox id="chkEnableDeDup" onclick="onClickEnableDeDup();" runat="Server" /></td>
<td class="ms-crm-Bold-Header"><label for="chkEnableDeDup"><loc:Text ResourceId="Duplicatedetectionsettings.aspx_chkEnableDeDupe_label" runat="server"/></label></td>
</tr>
<tr>
<td></td>
<td><loc:Text ResourceId="Duplicatedetectionsettings.aspx_DetectDuplicates_label" runat="server"/></td>
</tr>
<tr>
<td></td>
<td>
<table width="100%">
<col width=20><col>
<tr>
<td><ui:CheckBox id="chkOnlineCreate" runat="Server" /></td>
<td><label for="chkOnlineCreate"><loc:Text ResourceId="Duplicatedetectionsettings.aspx_chkOnlineCreate_label" runat="server"/></label></td>
</tr>
<tr>
<td><ui:CheckBox id="chkOfflineSync" runat="Server" /></td>
<td><label for="chkOfflineSync"><loc:Text ResourceId="Duplicatedetectionsettings.aspx_chkOfflineSync_label" runat="server"/></label></td>
</tr>
<tr>
<td><ui:CheckBox id="chkImport" runat="Server" /></td>
<td><label for="chkImport"><loc:Text ResourceId="Duplicatedetectionsettings.aspx_chkImport_label" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>
</table>
<% if (IsOctober2020UpdateEnabled) {%>
<table width="100%">
<col width=20><col>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2"><BR>
<loc:Text ResourceId="DuplicateDetectionSettings.DetectDuplicates_Title" runat="server"/>
</td>
</tr>
<tr>
<td></td>
<td>
<table width="100%">
<tr>
<td width="68.6%">
<loc:Text ResourceId="DuplicateDetectionSettings.DetectDuplicates_Subtitle" runat="server"/>
</td>
<td>
<asp:HyperLink ID="learnMoreLink" runat="server" Visible="true" ForeColor="#15428B"  NavigateUrl="https://go.microsoft.com/fwlink/p/?linkid=2137569" Target="_blank" rel="noopener noreferrer">
<loc:Text ResourceId="Dialog_AutoNumbering_LearnMore" runat="server"/></asp:HyperLink>
</td>
</tr>
<tr>
<td valign="center" role="radiogroup" aria-labelledby="labelduplicateDetectionOptions">
<ui:Radio id="rdDuplicateDetectionOptions" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
<%} %>
</div>
</div>
</frm:DialogForm>
</form>

</body>

</html>