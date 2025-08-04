<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.Timesheet" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.RefreshDialog-Button_Override
{
margin-top: 0px !important;
}
</style>
</head>
<script language="javascript">
var _nextGuid=1;

function DeleteServiceRestrictions(sGrid, sTargetId)
{
var target = getSelected(sGrid);
if (target.length > 0)
{
var options = new Xrm.DialogOptions();
options.width = 450;
options.height = 250;
var url = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_service_restriction.aspx");
url.get_query()["n"] = target.length;

var parameters = new Array(sGrid, target);
var callbackObject = Mscrm.Utilities.createCallbackFunctionForXrmDialog(DeleteServiceRestrictionsCallbackFunction, parameters);
Xrm.Internal.openDialog(url.toString(), options, null, null, callbackObject);

return;
}
else
{
alert(LOCID_ACTION_NOITEMSELECTED);
}
}

function DeleteServiceRestrictionsCallbackFunction(oReturnValue, sGrid, target)
{
if(oReturnValue)
{
DeleteServiceRestriction(target);
$find(sGrid).Refresh();
}
}

function GUIDGen()
{
key = _nextGuid.toString() + "0000".substring(_nextGuid.toString().length, "0000".length)
guid = "{00000000-0000-" + key + "-0000-000000000000}";
_nextGuid++;
return guid;
}

function OpenServiceAvailabilityDialog(url)
{
var dialogOptions = new Xrm.DialogOptions();
dialogOptions.width = 550;
dialogOptions.height = 380;
Xrm.Internal.openDialog(Mscrm.CrmUri.create(url).toString(), dialogOptions, GetServiceRestrictionData, null, ServiceRestriction);
}

function ServiceRestriction(serviceRestrictionParams)
{
if (!IsNull(serviceRestrictionParams))
{
var calRuleId = serviceRestrictionParams.calRuleId;
var serviceId = serviceRestrictionParams.serviceId;
var serviceName = serviceRestrictionParams.serviceName;
var scheduledStartOffset = serviceRestrictionParams.scheduledStartOffset;

var Duration;
Duration = serviceRestrictionParams.duration/1000/60;



if (Duration > 1440) Duration = Duration - (24 * 60);


var sRuleXml = "<calendarrule>";
sRuleXml += "<serviceid name=\"" + CrmEncodeDecode.CrmXmlAttributeEncode(serviceName) + "\" dsc=\"0\">" + CrmEncodeDecode.CrmXmlEncode(serviceId) + "</serviceid>";
sRuleXml += "<timecode formattedvalue='3'>3</timecode>";
sRuleXml += "<subcode formattedvalue='9'>9</subcode>";
sRuleXml += "<calendarruleid>" + CrmEncodeDecode.CrmXmlEncode(GUIDGen()) + "</calendarruleid>";
sRuleXml += "<offset>" + CrmEncodeDecode.CrmXmlEncode(scheduledStartOffset) + "</offset>";
sRuleXml += "<duration>" + CrmEncodeDecode.CrmXmlEncode(Duration) + "</duration>";
sRuleXml += "</calendarrule>";

var _oXmlDoc = XUI.Xml.LoadXml(sRuleXml);
var oRestrictionXml = XUI.Xml.LoadXml($get("serviceRestrictionXml").value);
if(calRuleId != "")
{

var oOldRule = XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules/calendarrule[calendarruleid='" + calRuleId + "']", null);
XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules", null).replaceChild(XUI.Xml.SelectSingleNode(_oXmlDoc, "calendarrule", null), oOldRule);
}
else
{

XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules", null).appendChild(XUI.Xml.SelectSingleNode(_oXmlDoc, "calendarrule", null));
}

$get("serviceRestrictionXml").value = Trim(XUI.Xml.XMLSerializer.serializeToString(oRestrictionXml));

var crmGrid = $find("crmGrid");
crmGrid.SetParameter("serviceRestrictionRulesXml", $get("serviceRestrictionXml").value);
crmGrid.Refresh();
}
}

function DeleteServiceRestriction(rgCalRuleId)
{
var oRestrictionXml = XUI.Xml.LoadXml($get("serviceRestrictionXml").value);

for (var i = 0; i < rgCalRuleId.length; i++)
{

var oOldRule = XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules/calendarrule[calendarruleid='" + rgCalRuleId[i] + "']", null);
XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules", null).removeChild(oOldRule);
}

$get("serviceRestrictionXml").value = Trim(XUI.Xml.XMLSerializer.serializeToString(oRestrictionXml));

var crmGrid = $find("crmGrid");
crmGrid.SetParameter("serviceRestrictionRulesXml", $get("serviceRestrictionXml").value);
crmGrid.Refresh();
}

function GetServiceRestrictionData(calRuleId)
{
var oRestrictionXml = XUI.Xml.LoadXml($get("serviceRestrictionXml").value);
var oRet = new Object();
if (calRuleId!="")
{
var oOldRule = XUI.Xml.SelectSingleNode(oRestrictionXml, "/calendarrules/calendarrule[calendarruleid='" + calRuleId + "']", null);
var duration = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oOldRule, "duration", null));
var offset = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oOldRule, "offset", null));
var end = (parseInt(offset,10)+parseInt(duration,10));

scheduledStart = new Date();
scheduledStart.setHours(offset/60, offset%60, 0, 0);

scheduledEnd = new Date();
scheduledEnd.setHours(end/60, end%60, 0, 0);

oRet.serviceId			= XUI.Xml.SelectSingleNode(oOldRule, "serviceid", null);
oRet.serviceName		= XUI.Xml.SelectSingleNode(oOldRule, "serviceid/@name", null);
oRet.serviceDsc			= XUI.Xml.SelectSingleNode(oOldRule, "serviceid/@dsc", null);
oRet.ScheduledStart		= scheduledStart;
oRet.ScheduledEnd		= scheduledEnd;
}
else
{
var oWorkingHours		= window.frames["TimeSheet"].GetCurrentWorkingHours();
oRet.whScheduledStart	= oWorkingHours.ScheduledStart;
oRet.whScheduledEnd		= oWorkingHours.ScheduledEnd;
}
return oRet;
}

Sys.Application.add_load(function()
{
if ($get("calendarType").value == "<%=CustomerService%>") {
$get("capacitybutton").style.display = "none";
}
XUI.Html.SetText($get("capacitybutton"), capacityButtonLabel());
});

function cancel()
{
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}


function applychanges()
{
if (window.frames["TimeSheet"].CommitForm())
{
var command = new RemoteCommand("SchedulePlanning", "SaveTimeSheet");
var oType=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ObjectTypeCode.ToString())%>;
command.SetParameter("resourceIdString", $get("resourceid").value);
command.SetParameter("calendarIdString", $get("calendarid").value);
command.SetParameter("calendarRuleIdString", $get("calendarruleid").value);
command.SetParameter("exceptionDate", <%=(ExceptionMode ? "FormatUtcDate(Mscrm.DateTimeUtility.parseDate(Mscrm.FormControlInputBehavior.GetBehavior('dateControl').get_innerText()))" : "\"\"")%>);
command.SetParameter("timeZone", $get("timeZone").value);
command.SetParameter("day", $get("day").value);
command.SetParameter("rulesXml", window.frames["TimeSheet"].$get("clientData").value);
command.SetParameter("ServiceRestrictionsWSXml", $get("serviceRestrictionXml").value);
command.SetParameter("oType", oType);

var result = command.Execute();
if (result.Success)
{

Mscrm.Utilities.setReturnValue(result.ReturnValue);
}
else
{
Mscrm.Utilities.setReturnValue(null);
}
}
closeWindow();
}

function capacityButtonLabel()
{
if (window.frames["TimeSheet"].EnableEffort)
{
return LOCID_HIDE_CAPACITY;
}
else
{
return LOCID_SHOW_CAPACITY;
}
}

function toggleCapacity()
{
window.frames["TimeSheet"].OnEffortToggle();
XUI.Html.SetText($get("capacitybutton"), capacityButtonLabel());
}
</script>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="ms-crm-absolutePosition">
<div>
<cnt:AppNotifications id="Notifications" runat="server"/>
</div>
<div class="ms-crm-TabBar-Cell" style="height:20px;">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="position:absolute; top:20px; bottom:0px; left:0px; right:0px;">
<div id="tab1" class="ms-crm-Tab ms-crm-absolutePosition" style="padding:10px; height:auto;">
<div style="display: <%=(ExceptionMode ? "block" : "none" )%>; position:absolute; top:0px; left:0px; right:0px; height:24px;" class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<div style="margin-top:12px;">
<loc:Text ResourceId="SM_Select_Exception_Date" runat="server" />
</div>
</div>
<div style="display: <%=(ExceptionMode ? "block" : "none" )%>; white-space:nowrap; position:absolute; top:24px; left:0px; right:0px; height:24px;" valign="middle">
<table style="width:100%; height:24px;" cellspacing="0" cellpadding="0">
<tr>
<td style="width:21%;"><label for="dateControl"><loc:Text ResourceId="SM_Date" runat="server" /></label></td>
<td style="width:29%;"><ui:DateTimeUI id="dateControl" runat="server" AllowBlankDate="False" /></td>
<td style="width:50%;"></td>
</tr>
</table>
</div>
<div style="position:absolute; top:<%=(ExceptionMode ? "48px" : "0px" )%>; left:0px; right:0px; height:24px;">
<table style="width:100%;" cellspacing="0" cellpadding="0">
<tr>
<td style="width:60%;" class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom"><loc:Text ResourceId="SM_Enter_Working_Hours_And_Breaks" runat="server"/></td>
<td style="width:40%;" class="ms-crm-Form-Section ms-crm-Form-SectionBar dlgs_timesheet_td_BtnCap"><ui:Button ID="capacitybutton" CssClass="ms-crm-RefreshDialog-Button RefreshDialog-Button_Override" OnClick="toggleCapacity();" ResourceId="SM_Unknown_Capacity" runat="server"></ui:Button></td>
</tr>
</table>
</div>
<div style="position:absolute; top:<%=(ExceptionMode ? "72px" : "24px" )%>; left:0px; right:0px; bottom:<%=(ExceptionMode ? "48px" : "0px" )%>;">
<iframe id="TimeSheet" name="TimeSheet" class="TimeSheet" scrolling="no" frameborder="0" src="timesheetdata.aspx?<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString.ToString())%>" style="position:absolute; top:0px; bottom:0px; left:0px; right:0px;" width="100%" height="100%"></iframe>
</div>
<div style="display: <%=(ExceptionMode ? "block" : "none" )%>; position:absolute; bottom:24px; left:0px; right:0px; height:24px;" class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<div style="margin-top:12px;">
<loc:Text ResourceId="SM_Select_The_Timezone" runat="server" />
</div>
</div>
<div style="display: <%=(ExceptionMode ? "block" : "none" )%>; white-space:nowrap; position:absolute; bottom:0px; left:0px; right:0px; height:24px;" valign="middle">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="width:21%;"><loc:Text ResourceId="SM_Timezone" runat="server" /></td>
<td style="width:79%;"><cnt:AppTimeZoneControl id="timeZone" AutoBinding="false" runat="server" /></td>
</tr>
</table>
</div>
</div>
<div id="tab2" class="ms-crm-Tab" style="display:none;padding:10px; position:absolute; top:0px; bottom:0px; left:0px; right:0px; height:auto;">
<div style="height:23px">
<mnu:AppGridMenuBar id="crmGridMenuBar" runat="server"/>
</div>
<div style="position:absolute; top:36px; bottom:10px; left:10px; right:10px;">
<div style="position:absolute; width:100%; height:100%;">
<cnt:AppGrid id="crmGrid" runat="server"/>
</div>
</div>
</div>
</div>
</div>
<input type="hidden" id="resourceid" name="resourceid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ResourceId)%>">
<input type="hidden" id="calendarid" name="calendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId)%>">
<input type="hidden" id="calendarruleid" name="calendarruleid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarRuleId)%>">
<input type="hidden" id="calendarType" name="calendarType" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(calendarType)%>">
<input type="hidden" id="day" name="day" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Day)%>">
<input type="hidden" id="serviceRestrictionXml" name="serviceRestrictionXml" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ServiceRestrictionsXml)%>">
</frm:DialogForm>
</body>

