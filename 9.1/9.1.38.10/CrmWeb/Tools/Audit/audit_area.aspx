<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Audit.AuditAreaPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
</head>
<body>
<ui:eventmanager runat="server" id="crmEventManager"></ui:eventmanager>
<cnt:iframecontrol runat="server" id="crmIFrameControl"></cnt:iframecontrol>
</body>
</html>
