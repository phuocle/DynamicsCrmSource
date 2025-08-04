<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.Business.Closure" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript">
function newHoliday(parentCalendarId)
{
var sParams = null;
if(!IsNull($get("calendarid")) && !IsNull($get("calendarid").value) )
{
sParams = "calendarid=" + CrmEncodeDecode.CrmUrlEncode($get("calendarid").value) + "&cType=" + CrmEncodeDecode.CrmUrlEncode($get("calendartype").value);
}
openObj(HolidayCalendarRule, null, sParams);
}
</script>
</head>
<body class="stage" style="padding-right:0px">
<input type="hidden" id="dateValue">
<input type="hidden" name="calendarid" id="calendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId)%>">
<input type="hidden" name="calendartype" id="calendartype" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarType)%>" />
<div style="position:relative" class="stdTable">
<div><label class = "ms-crm-Setting-ContextHeader-Title">
<% if(CalendarType==Microsoft.Crm.Application.Utility.Util.HolidaySchedule){ %>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarName) %>
<%} else{ %>
<loc:text resourceid="SM_Business_Closures_Title" runat="server" />
<% }%>
</label>
</div>
<div style="height:23px">
<cnt:AppDateNavigationBar id="crmDateNavBar" UseLocalDateAsDefault="false" runat="server"/>
</div>
<div class="ms-crm-home-querycontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-absolutePosition" style="top:77px">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
</div>
</div>
</div>
</body>
</html>
