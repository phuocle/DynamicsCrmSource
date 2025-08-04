<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Process.ProcessDesigner"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head runat="server">
<title runat="server"></title>
<app:AppHeader runat="server" id="crmHeader"/>
</head>
<body class="mscrm-processeditor-Body mscrm-automationcore">
<mnu:appformmenubar id="crmMenuBar" ShowFormHeader="false" runat="server"></mnu:appformmenubar>
<div class="mscrm-processeditor" id="processdesigner">
<div runat="server" id="HeaderViewContainer" class="mscrm-processeditor-HeaderViewContainer">
</div>
<div runat="server" id="BodyViewContainer" class="mscrm-processeditor-BodyViewContainer">
</div>
<div runat="server" id="FooterViewContainer" class="mscrm-processeditor-FooterViewContainer">
</div>
</div>

<frm:hardcodedform id="crmForm" runat="server">
</frm:hardcodedform>
</body>
</html>
