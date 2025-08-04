<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Audit.AuditSummaryPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
    <title>
        <loc:text resourceid="Audit.SummaryView.Title" runat="server"/>
    </title>
    <style type="text/css">
        .gridContainer {
            position: absolute;
            top: 25px;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
    </style>
</head>
<body>
<div style="height: 100%; width: 100%;">
    <div style="height: 25px; width: 100%">
        <mnu:appgridmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div id="GridContainer" class="gridContainer">
        <!--[if IE 7]>
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <![endif]-->
        <cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="true"/>
        <!--[if IE 7]>
            </div>
        <![endif]-->
    </div>
</div>
</body>
</html>