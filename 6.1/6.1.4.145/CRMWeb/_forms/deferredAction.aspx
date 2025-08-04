<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.DeferredAction" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="uiCnt" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>

<head>
<uiCnt:Header id="crmHeader" runat="server" />
</head>

<body scroll="no">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
</body>

</html>