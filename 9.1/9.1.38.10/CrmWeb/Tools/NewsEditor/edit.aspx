<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.NewsArticle" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.ms-crm-Form-StatusBar
{
line-height: 24px;
}
</style>
</head>
<body>
<div class="ms-crm-Form-Layout">
<div style="height:98px">
<div>
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server" />
</div>
</div>
<div class="ms-crm-NRForm-Background">
<div id="tdAreas" class="ms-crm-NRForm-Main-Container">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="areaForm" style="height: 100%">
<frm:CrudForm id="crmForm" runat="server" />
</div>
</div>
</div>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</div>
</body>
</html>
