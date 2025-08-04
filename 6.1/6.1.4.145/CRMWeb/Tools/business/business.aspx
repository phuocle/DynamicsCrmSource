<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BusinessManagement.BusinessManagementPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
</head>
<body>
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<cnt:IFrameControl runat="server" id="crmIFrameControl"></cnt:IFrameControl>
</body>
</html>