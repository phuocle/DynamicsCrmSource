<!DOCTYPE HTML>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Audit.AuditDetailsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<body>
<table style="width: 100%; height: 30%; table-layout: fixed" cellpadding="0" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-columnLabel ms-crm-Field-Label-Print" id="changedByLabel"
runat="server" />
<td class="ms-crm-Dialog-columnValue  ms-crm-Field-Data-Print" id="changedByValue"
runat="server" />
<td class="ms-crm-Dialog-columnLabel ms-crm-Field-Label-Print" id="entityLabel" runat="server" />
<td class="ms-crm-Dialog-columnValue  ms-crm-Field-Data-Print" id="entityValue" runat="server" />
</tr>
<tr>
<td class="ms-crm-Dialog-columnLabel ms-crm-Field-Label-Print" id="changedDateLabel"
runat="server" />
<td class="ms-crm-Dialog-columnValue  ms-crm-Field-Data-Print" id="changedDateValue"
runat="server" />
<td colspan="2" />
</tr>
<tr>
<td colspan="4" style="height: 2px;">
<hr />
</td>
</tr>
<tr style="height: 20px;">
<td colspan="4" id="cellInfoBar" runat="server">
<img alt='' src='/_imgs/importwizardinfo.gif'>&nbsp;&nbsp;<span id="infoBar" style="vertical-align: 40%;"
runat="server"></span>
</td>
</tr>
<tr>
<td colspan="4" valign="bottom">
<table class="ms-crm-Dialog-TableHeader" border="1" cellpadding="0" cellspacing="0"
id="tableHeaders" runat="server" />
</td>
</tr>
</table>
<div class="ms-crm-Dialog-TableMembers">
<table class="ms-crm-Dialog-TableData" border="1" cellpadding="0" cellspacing="0"
id="tableAuditDetails" runat="server" />
</div>
</body>
</html>
