<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.MainPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<META name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="SHORTCUT ICON" href="/favicon.ico" />
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.default.aspx_16" CheckForLive="true" runat="server"/></title>
<% if(Request.Browser.Browser == "Firefox" && Request.Browser.MajorVersion >= 28){ %>
<script id="/_static/_common/scripts/jquery-1.11.3.min.js" type="text/javascript" src="/_static/_common/scripts/jquery-1.11.3.min.js">
</script>
<script id="/_static/_common/scripts/jquery.tmpl.min.js" type="text/javascript" src="/_static/_common/scripts/jquery.tmpl.min.js">
</script>
<script id="/_static/_common/scripts/jquery_ui_1.8.21.min.js" type="text/javascript" src="/_static/_common/scripts/jquery_ui_1.8.21.min.js">
</script>
<%} %>
</head>
<noscript>
<div style="padding:10px;background-color:#C9C7BA;">
<span class="warningHeader"><loc:Text ResourceId="Web.default.aspx_22" runat="server"/></span>
<hr size="1" color="#000000">
<span class="warningDescription">
<% if (Request.Browser.Browser == "IE") { %>
<loc:Text ResourceId="Web.loader.aspx_sec_warning" Encoding="None" runat="server"><loc:Argument runat="server"><i><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(GenerateServerUrl()) %></i></loc:Argument></loc:Text><br><br>
<loc:Text ResourceId="Web.default.aspx_Steps" Encoding="None" runat="server"/>
<br><br>
<loc:Text ResourceId="Web.default.aspx_Step1" Encoding="None" runat="server"/>
<br><br>

<loc:Text ResourceId="Web.default.aspx_Step2" Encoding="None" runat="server"/>
<br><br>

<loc:Text ResourceId="Web.default.aspx_Step3" Encoding="None" runat="server"/>
<br><br>

<loc:Text ResourceId="Web.default.aspx_Step4" Encoding="None" runat="server"><loc:Argument runat="server"><i><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(GenerateServerUrl()) %></i></loc:Argument></loc:Text>
<% } else { %>
<loc:Text ResourceId="Web.loader.nonIE.aspx_sec_warning" Encoding="None" runat="server"/>
<% } %>
</span>
</div>
</noscript>

<!--[if MSCRMClient]>
<script  type="text/javascript">


var MS_CRM_CLIENT_OUTLOOK_INSTALLED=true;
</script>
<![endif]-->

<body scroll="no">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<cnt:LayoutManager runat="server" id="crmWindowManager"></cnt:LayoutManager>
<cnt:CacheManager runat="server" id="crmCacheManager"></cnt:CacheManager>
<cnt:HistoryManager runat="server" id="crmHistoryManager"></cnt:HistoryManager>
<cnt:NavigationManager runat="server" id="crmNavigationManager"></cnt:NavigationManager>
<cnt:RecentlyViewed runat="server" id="crmRecentlyViewed"></cnt:RecentlyViewed>
<cnt:LookupMru runat="server" id="crmLookupMru"></cnt:LookupMru>


<div id="crmMasthead" runat="server" tabindex="-1">
<div class="navStatusArea" id="navStatusArea"></div>
<cnt:navbar id="navBar" runat="server"></cnt:navbar>
<div class="navBarOverlay" id="navBarOverlay"></div>
</div>
<div id="crmTopBar" class="ms-crm-TopBarContainer ms-crm-TopBarContainerGlobal" runat="server">
<cnt:AppMessageBar id="crmAppMessageBar" runat="server"></cnt:AppMessageBar>
<rbn:RibbonManager id="crmRibbonManager" runat="server"></rbn:RibbonManager>
<cnt:UserInfo id="crmUserInfo" class="crmUserInfo" runat="server"></cnt:UserInfo>
<div id="contextualActionBar">
<cnt:RecordSetControlProxy id="crmRecordSetControlProxy" runat="server" />
<a tabIndex="0" href="javascript:popOutSourceUrl(document.getElementById('popoutButton').getAttribute('sourceUrl'));"
class="contextualAction" id="popoutButton" style="display: none">
<img alt="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut")) %>"
title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut"))%>"
src="<%=PopOutImageStripInfo.ImageStripUrl.ToString() %>"
class="<%=PopOutImageStripInfo.CssClass %>" />
</a>
</div>
</div>
<div>
<cnt:AppNavBar id="crmAppNav" runat="server"></cnt:AppNavBar>
<cnt:SplitterControl id="crmSplitterControl" runat="server"></cnt:SplitterControl>
<cnt:ContentPanel id="crmContentPanel" runat="server"></cnt:ContentPanel>
</div>
<cnt:AppFooter id="crmFooter" runat="server"/>
</body>
</html>
