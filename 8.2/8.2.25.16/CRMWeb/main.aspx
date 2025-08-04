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
<script id="/_static/_common/scripts/jquery-2.1.1.min.js" type="text/javascript" src="/_static/_common/scripts/jquery-2.1.1.min.js">
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
<script  type="text/javascript">
var mainPageLoadStart = Date.now();
function ShowHierarchicalPage() {
var hierarchyBtn = document.getElementById('hierarchyButton');
var objectTypeCode = hierarchyBtn.getAttribute('objectTypecode');
var primaryEntityId = hierarchyBtn.getAttribute('primaryEntityId');
var viewType = hierarchyBtn.getAttribute('viewType');
Mscrm.Utilities.showHierarchyPage(objectTypeCode, primaryEntityId, viewType);
}
</script>
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
<a title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Mscrm_MainTab_Actions_ViewHierarchy_ToolTipDescription"))%>" tabIndex="0" class="contextualAction" id="hierarchyButton"
href="javascript:ShowHierarchicalPage();" style="display:none">
<img src="<%=HierarchyImageStripInfo.ImageStripUrl.ToString() %>"
alt="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Mscrm_MainTab_Actions_ViewHierarchy_ToolTipDescription")) %>"
title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Mscrm_MainTab_Actions_ViewHierarchy_ToolTipDescription"))%>"
class="<%=HierarchyImageStripInfo.CssClass %>" />
</a>
<cnt:RecordSetControlProxy id="crmRecordSetControlProxy" runat="server" />
<div title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut"))%>" onclick="popOutSourceUrl(document.getElementById('popoutButton').getAttribute('sourceUrl')); return false;"
class="contextualAction" id="popoutButton" style="display: none">
<a tabIndex="0" aria-label="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut"))%>" href="#">
<img alt="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut")) %>"
title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_PopOut"))%>"
src="<%=PopOutImageStripInfo.ImageStripUrl.ToString() %>"
class="<%=PopOutImageStripInfo.CssClass %>" />
</a>
</div>
<div title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_Close")) %>" onclick="closeSourceUrl(document.getElementById('closeButton')); return false;"
class="contextualAction" id="closeButton" style="display: none">
<a tabIndex="0" aria-label="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_Close")) %>" href="#">
<img alt="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_Close")) %>"
title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Form_Close"))%>"
src="/_imgs/Cancel_16.png"
class="closeButton" />
</a>
</div>
</div>
</div>
<div>
<cnt:AppNavBar id="crmAppNav" runat="server"></cnt:AppNavBar>
<cnt:SplitterControl id="crmSplitterControl" runat="server"></cnt:SplitterControl>
<cnt:ContentPanel id="crmContentPanel" runat="server"></cnt:ContentPanel>
</div>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.WidgetManager, Microsoft.Crm.Application.Security.UserInformation.Current)) { %>
<cnt:WidgetManager runat="server" id="crmWidgetManager"></cnt:WidgetManager>
<div id="crmUrlAddressableWidgetHolder" ></div>
<%} %>
<cnt:AppFooter id="crmFooter" runat="server"/>
</body>
</html>
