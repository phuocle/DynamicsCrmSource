<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.Services.ServiceReadOnlyPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<div style="height: 98px">
    <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</div>
<div id="areaForm" class="ms-crm-NRForm-Background">
    <frm:CrudForm id="crmForm" runat="server"/>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
    <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
</div>
</body>
</html>