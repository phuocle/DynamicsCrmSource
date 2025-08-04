<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.SystemHealth" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader" />
<style>
.ms-crm-sysHealthHomeBtn
{
position:absolute;
top:0px;
height:50px;
left:0px;
right:0px;
padding-top:10px;
}
.ms-crm-sysHealthContent
{
position:absolute;
<% if (!Util.IsForOutlookClient()) {%>
top:50px;
<%} else { %>
top:0px;
<%} %>
bottom:0px;
left:0px;
right:0px;
}
</style>
</head>
<body>
<div class="ms-crm-SettingsPage ms-crm-absolutePosition">
<div class="ms-crm-sysHealthContent">
<table class="ms-crm-SettingsPage" cellpadding="0" cellspacing="0">
<col />
<col width="10px" />
<col width="30%" />
<tr class="ms-crm-SettingsPage">
<td class="ms-crm-SettingsPage ms-crm-toppad">
<table class="ms-crm-GroupBlank" cellpadding="0" cellspacing="0">
<% RenderAlerts(); %>
<iframe id="notificationsIFrame" width="100%" frameborder="0" height="1400px" scrolling="no" runat="server"/>
</table>
</td>
</tr>
</table>
</div>
</div>
</body>
</html>
