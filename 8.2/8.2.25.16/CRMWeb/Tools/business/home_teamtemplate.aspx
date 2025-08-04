<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Business.TeamTemplate" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
</head>
<body class="stage">
<div style="position:relative" class="stdTable">
<div class="ms-crm-home-menucontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-home-staticgridcontainer">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
</div>
</div>
</div>
</body>
</html>
