<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.UserDefined.AreaPage"%>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body class="stage">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<rbn:ribbonmanager id="crmRibbonManager"
                   runat="server">
</rbn:ribbonmanager>
</body>
</html>