<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Calendar.MonthlyCalendarData" AutoEventWireup="false" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt_service_cal" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
</head>
<body>
<input type="hidden" id="dateValue">
<div class="ms-crm-Cal-Month-Content">
<div class="ms-crm-Cal-Month-Nav-Row">
<cnt:AppDateNavigationBar id="crmDateNavBar" runat="server"/>
</div>
<div class="ms-crm-Cal-Month-Content-Row">
<cnt_service_cal:AppMonthCalendar id="crmMonthlyCalendar" runat="server"/>
</div>
</div>
</body>
</html>
