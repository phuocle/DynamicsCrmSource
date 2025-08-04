<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.MonthlyCalendarData" AutoEventWireup="false" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt_service_cal" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">
Sys.Application.add_load(
function ()
{
$find('crmMonthlyCalendarTopTable').set_isEditable(<%=RenderReadOnlyMode()%>);
}
);

function auto(iObjType)
{

if (window.parent)
{
try
{
window.parent.auto(iObjType);
}
catch(e)
{
}
}
}
</script>
</head>
<body>
<input type="hidden" id="dateValue">
<div class="ms-crm-Cal-Month-Biz-Content">
<div class="ms-crm-Cal-Month-Nav-Row">
<cnt:AppDateNavigationBar id="crmDateNavBar" runat="server"/>
</div>
<div class="ms-crm-Cal-Month-Content-Row">
<cnt_service_cal:AppMonthCalendar id="crmMonthlyCalendar" runat="server"/>
</div>
</div>
</body>
</html>