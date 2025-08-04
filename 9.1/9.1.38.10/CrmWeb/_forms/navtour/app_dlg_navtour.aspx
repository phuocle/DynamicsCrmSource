<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.AppNavTour" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-3.6.0.min.js"></script>
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery_ui_1.13.1.js"></script>
</head>
<body class="navTour" onkeydown="if((new Sys.UI.DomEvent(event)).keyCode == 27){manageTourCookie();}">
<frm:DialogForm id="crmForm" runat="server">
<div id="navTourPages">
<div id="navTourHeaders" tabindex="1"></div>
<div id="navTourMainContent">
<iframe id="navTourMainContentIFrame" title="<loc:Text ResourceId="Web.AppNavTour.WelcomePageFrameTitle" runat="server" />"></iframe>
<div id="navTourMainContentLoading">
<table style="height:100%;width:100%;background-color:#FFFFFF">
<tbody>
<tr>
<td style="vertical-align: middle" align="center">
<img id="loading" alt="" src="/_imgs/advfind/progress.gif">
<br><loc:Text ResourceId="PageLoadingMessage" runat="server" />
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="navTourFooter" class="navTourSmallText">
<ul>
<li>
<div id="dontShowAgainContainer">
<div id="dontShowAgainFirstOutlineContainer">
<input type="checkbox" id="dontShowAgainFirst" class="ms-crm-CheckBox"/>
</div>
<label for="dontShowAgainFirst" id="navTourFooterLabel" class="navTourSmallText">DoNotShow</label>
</div>
</li>
<li >
<div id="continueContainer">
<div id="continueOutlineContainer">
<input id="cmdClose" title="<loc:Text ResourceId="Web.AppNavTour.Continue" encoding="none" runat="server" />" type="button" class="ms-crm-appsNavTourContainer-Button" value="<loc:Text ResourceId="Web.AppNavTour.Continue" encoding="none" runat="server" />" onclick="javascript: closeDialog();"/>
</div>
</div>
</li>
</ul>
</div>
</div>
</frm:DialogForm>
</body>
</html>
