<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.MicrosoftFlow.FlowTemplatesPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.default.aspx_16" CheckForLive="true" runat="server"/></title>
</head>
<body>
<div style="width:100%;height:100%;text-align:center">
<div style="margin:34px auto;text-align:center;width:480px;">
<loc:Text ResourceId="MicrosoftFlow_Disabled_Error" Encoding="None" runat="server"/>
</div>
</div>
</body>
</html>