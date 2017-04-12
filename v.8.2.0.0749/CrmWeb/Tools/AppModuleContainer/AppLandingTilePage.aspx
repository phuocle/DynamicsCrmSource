<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.AppLandingTilePage" %>

<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
</head>
<body scroll="yes" style="overflow-x: hidden; overflow-y: auto">
<ui:EventManager runat="server" ID="crmEventManager"></ui:EventManager>
<div id="appModuleContainerPanel">
    <cnt:appmodulecontainer id="appModuleContainer" runat="server"></cnt:appmodulecontainer>
</div>
</body>
</html>