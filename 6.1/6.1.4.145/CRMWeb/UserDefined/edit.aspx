<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.UserDefined.DetailPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html id="HtmlTag"  runat="server">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style>
html, body
{
overflow: hidden;
}
#descriptionIFrame
{
height:99%;
}
.ms-crm-Form-Nav-Container
{
top:0px;
}
</style>
<% if(Request.Browser.Browser == "Firefox" && Request.Browser.MajorVersion >= 28){ %>
<script id="/_static/_common/scripts/jquery-1.11.3.min.js" type="text/javascript" src="/_static/_common/scripts/jquery-1.11.3.min.js">
</script>
<script id="/_static/_common/scripts/jquery.tmpl.min.js" type="text/javascript" src="/_static/_common/scripts/jquery.tmpl.min.js">
</script>
<script id="/_static/_common/scripts/jquery_ui_1.8.21.min.js" type="text/javascript" src="/_static/_common/scripts/jquery_ui_1.8.21.min.js">
</script>
<%} %>
</head>
<body scroll="no">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="FormCell" runat="server" style="width: 100%;height: 100%; position: absolute; top: 0px; bottom: 0px;"></div>
</div>
<cnt:AppFooter id="crmFooter" runat="server"/>
<div id="controlHeaderContainer" style="display:none"></div>
</body>
</html>

