<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.AnnouncementEditor.Home" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
div.stdTable
{
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
padding-top:20px;
height:auto;
}
</style>
</head>

<body class="stage">
<div class="stdTable">
<div><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="NamePlural_NewsArticle" runat="server"/></label></div>
<div style="height:25px">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-absolutePosition" style="top:79px">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
</div>
</div>
</div>
</body>
</html>