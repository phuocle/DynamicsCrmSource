<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.ApplandingPage" %>

<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<cnt:AppHeader ID="crmHeader" runat="server" />
<title>
<loc:Text ResourceId="Web.default.aspx_99" runat="server" />
</title>
<style type="text/css">
div.crmContentPanel {
display: block;
position: absolute;
top: 50px !important;
bottom: 0px;
width: 100%;
padding-right: 4px;
}
</style>
</head>
<body scroll="no" style="overflow: hidden;">
<ui:eventmanager runat="server" id="crmEventManager"></ui:eventmanager>
<cnt:layoutmanager runat="server" id="crmWindowManager"></cnt:layoutmanager>
<cnt:cachemanager runat="server" id="crmCacheManager"></cnt:cachemanager>
<cnt:historymanager runat="server" id="crmHistoryManager"></cnt:historymanager>
<cnt:navigationmanager runat="server" id="crmNavigationManager"></cnt:navigationmanager>
<div id="crmMasthead" runat="server" tabindex="-1">
<div class="navStatusArea" id="navStatusArea"></div>
<cnt:NavBar ID="navBar" runat="server"></cnt:NavBar>
<div class="navBarOverlay" id="navBarOverlay"></div>
</div>
<div id="crmTopBar" class="ms-crm-TopBarContainer ms-crm-TopBarContainerGlobal" runat="server">
</div>
<div>
<cnt:contentpanel id="crmContentPanel" runat="server"></cnt:contentpanel>
</div>
<cnt:appfooter id="crmFooter" runat="server" />
</body>
</html>
