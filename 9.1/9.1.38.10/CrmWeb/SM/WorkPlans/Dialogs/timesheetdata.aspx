<!DOCTYPE html />
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.TimesheetDataPage" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt_service_cal" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
</head>
<body>
<div id="RenderStartTimeControl" style="display:none;"><ui:DateTimeUI id="startTC" AllowBlankDate="False" runat="server" /><label class="ms-crm-Hidden" for="startTC"><loc:Text ResourceId="Timesheetdata.start.time" runat="server"/></label></div>
<div id="RenderEndTimeControl" style="display:none;"><ui:DateTimeUI id="endTC" AllowBlankDate="False" runat="server" /><label class="ms-crm-Hidden" for="endTC"><loc:Text ResourceId="Timesheetdata.end.time" runat="server"/></label></div>
<cnt_service_cal:AppTimeSheet id="crmTimesheet" runat="server"/>
</body>
</html>