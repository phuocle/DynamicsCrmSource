<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.OutlookStagePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%
    Response.Cache.SetCacheability(HttpCacheability.Private);
    Response.Cache.VaryByParams["*"] = true;
    Response.Expires = 24 * 60;
%>

<html style="overflow: hidden">
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <title>
        <loc:Text ResourceId="Outlook_Folder_HomePage_Title" runat="server"/>
    </title>
</head>
<body>
<div style="width: 0px; height: 0px">
    <ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
    <rbn:RibbonManager id="crmRibbonManager" style="display: none" runat="server"></rbn:RibbonManager>
</div>
<iframe runat="server" id="stage" name="stage" style="width: 100%; height: 100%" frameborder="0"></iframe>
</body>
</html>