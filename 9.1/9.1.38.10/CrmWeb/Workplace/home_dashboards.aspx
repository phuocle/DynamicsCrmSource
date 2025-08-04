<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Workplace.HomeDashboardsPage" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html style="overflow:hidden">

<head>
<cnt:AppHeader runat="server" id="crmHeader" />
<style>
.stage
{
overflow:hidden;
padding-top:12px !important;
}
.stdTable
{
position:relative;
}

.ms-crm-MainContainer
{
position:absolute;
bottom:0px;
top:0px;
left:0px;
right:0px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right:20px;
<% } else { %>
margin-left:20px;
<% } %>
}
#dashboardFrameRow
{
margin-top:4px;
}
#dashboardListDiv
{
position:absolute;
top:0px;
height:35px;
margin-top:2px;
width:100%;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left:5px;
<% } else { %>
padding-right:5px;
<% } %>
}
.dashboard-brdr
{
border: 1px solid;
}
.ms-crm-DashboardFrameContainer
{
top:36px;
position:absolute;
bottom:12px;
left:0px;
right:0px;
align:center;
}
#dashboardSelector a.ms-crm-View-Name,
#dashboardSelector a.ms-crm-View-Name-select
{
height: 32px !important;
position:relative;
}
#dashboardSelector a.ms-crm-View-Name span.ms-crm-View-Name,
#dashboardSelector a.ms-crm-View-Name-select span.ms-crm-View-Name
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.27px.font_size") %>;
font-family: <% = WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight") %>;
display: block;
line-height: 28px;
height: 100% !important;
max-width: 400px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left: 21px;
padding-right: 0px;
<% } else { %>
margin-right: 21px;
padding-left: 0px;
<% } %>
}
span.ms-crm-Viz-Name,
span.ms-crm-Viz-Name-hover,
span.ms-crm-Viz-Name-select,
span.ms-crm-View-Name,
span.ms-crm-View-Name-hover,
span.ms-crm-View-Name-select
{

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left:10px !important;
padding-right:0px !important;
<% } else { %>
padding-left:0px !important;
padding-right:10px !important;
<% } %>
}
span.ms-crm-View-icon
{
display: block;
position: absolute;
top: 3px;
width: 19px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: -3px;
<% } else { %>
right: -3px;
<% } %>
}
img.ms-crm-View-icon
{
margin-top:1px;
}
.ms-crm-Dashboard-Body
{
position:relative;
}

div.ms-crm-Form-Area
{
position:absolute;
width:100%;
}
.FormSection_CellPadding
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 3px !important;
<% } else { %>
padding-left: 3px !important;
<% } %>
}
#dashboardAreaForm  A.ms-crm-InlineTabHeaderText H2.ms-crm-Form,
#dashboardAreaForm  A.ms-crm-InlineTabHeaderText:link H2.ms-crm-Form,
#dashboardAreaForm  A.ms-crm-InlineTabHeaderText:visited H2.ms-crm-Form,
#dashboardAreaForm  A.ms-crm-InlineTabHeaderText:active H2.ms-crm-Form,
#dashboardAreaForm  A.ms-crm-InlineTabHeaderText:hover H2.ms-crm-Form
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %> !important;
font-weight:<%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>  !important;
<% if (!Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>
color: #666 !important;
<% } %>
}
.ms-crm-InlineTabHeaderExpander a
{
display:none;
}
table.ms-crm-InlineTabHeader
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 0px !important;
padding-right: 4px !important;
<% } else { %>
padding-left: 4px !important;
padding-right: 0px !important;
<% } %>
}
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>

td#vizList span.ms-crm-View-icon,
{
top: 0px;
}

td#vizList A.ms-crm-View-Name,
td#vizList A.ms-crm-Viz-Name,
td#vizList A.ms-crm-Viz-Name-select,
td#vizList A.ms-crm-Viz-Name-select-hover
{
position:relative;
}

.stage
{
padding-top: 0px !important;
}

.ms-crm-metaphor-dashboard-container .ms-crm-MainContainer
{
margin-left:0px;
margin-right:0px;
background-color:#F1F1F1;
}

.ms-crm-metaphor-dashboard-container .dashboard-brdr
{
border: 0px;
}

.ms-crm-metaphor-dashboard-container #dashboardListDiv
{
padding-top:20px !important;
margin-top:0px;
height:37px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 0px;
padding-right: 45px;
<% } else { %>
padding-left: 45px;
padding-right: 0px;
<% } %>
}

.ms-crm-metaphor-dashboard-container .ms-crm-DashboardFrameContainer
{
top:75px;
margin-left:30px;
margin-right:30px;
margin-bottom: 0px;
bottom: 0px;
}

.ms-crm-metaphor-dashboard-container #dashboardSelector > tbody {
vertical-align: top
}

.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name,
.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name-select
{
height: 32px !important;
}

.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name span.ms-crm-View-Name,
.ms-crm-metaphor-dashboard-container #dashboardSelector a.ms-crm-View-Name-select span.ms-crm-View-Name
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.24px.font_size") %>;
line-height: 26px;
color:#505050;
width:auto;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-left: 12px;
<% } else { %>
margin-right: 12px;
<% } %>
}

.ms-crm-metaphor-dashboard-container A.ms-crm-View-Name:hover
{
background-color: rgba(255, 255, 255, 0.3) !important;
}

.ms-crm-dashboard-metaphor-dialog Li.ms-crm-VS-header-MenuItem,
.ms-crm-dashboard-metaphor-dialog A.ms-crm-VS-header-MenuItem-Anchor,
.ms-crm-dashboard-metaphor-dialog span.ms-crm-VS-header-MenuItem-Sep
{
height: 30px !important;
}
.ms-crm-dashboard-metaphor-dialog LI.ms-crm-VS-MenuItem,
.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-header-MenuItem-Icon,
.ms-crm-dashboard-metaphor-dialog span.ms-crm-VS-MenuItem-Sep
{
height: 28px;
}

.ms-crm-dashboard-metaphor-dialog span.ms-crm-VS-MenuItem-Sep-Hover
{
padding-top : 4px;
padding-bottom : 4px;
border-top-width : 1px !important;
border-top-style : solid !important;
border-bottom-width : 1px !important;
border-bottom-style : solid !important;
height : 20px;
line-height : 20px;
}

.ms-crm-dashboard-metaphor-dialog A.ms-crm-VS-MenuItem-Anchor
{
height: 26px !important;
}
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Rest,
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Selected,
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-header-MenuItem-Title-Rest,
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-header-MenuItem-Title-Hover
{
padding-top: 4px !important;
padding-bottom: 4px !important;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 1px !important;
<% } else { %>
padding-right: 1px !important;
<% } %>
}
.ms-crm-dashboard-metaphor-dialog NOBR.ms-crm-VS-MenuItem-Title-Hover
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
border-left-width: 1px;
border-left-style: solid;
padding-left : 0px;
<% } else { %>
border-right-width: 1px;
border-right-style: solid;
padding-right : 0px;
<% } %>
border-top-width : 1px!important;
border-top-style : solid!important;
border-bottom-width : 1px!important;
border-bottom-style : solid!important;
padding-top : 3px;
padding-bottom :3px;

}

.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon.ms-crm-VS-MenuItem-Icon-Hover
{
height : 20px;
padding-top: 3px !important;
padding-bottom: 3px !important;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
border-right-width: 1px !important;
border-right-style: solid !important;
border-right-color: #EFEFEF !important;
padding-right: 0px !important;
<% } else { %>
border-left-width: 1px!important;
border-left-style: solid!important;
border-left-color: #EFEFEF !important;
padding-left: 0px !important;
<% } %>
border-top-width : 1px !important;
border-top-style : solid !important;
border-top-color: #EFEFEF !important;
border-bottom-width : 1px !important;
border-bottom-style : solid! important;
border-bottom-color: #EFEFEF !important;
}
.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon
{
height: 20px !important;
padding-top: 4px !important;
padding-bottom: 4px !important;
border: none !important;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 1px !important;
<% } else { %>
padding-left: 1px !important;
<% } %>
}

.ms-crm-dashboard-metaphor-dialog SPAN.ms-crm-VS-MenuItem-Icon img
{
vertical-align:middle;
}

.ms-crm-metaphor-dashboard-container #dummyDashboardReflowDiv
{
height: 150px;
}

@media screen and (min-width: 1921px) {

.ms-crm-metaphor-dashboard-container #dummyDashboardReflowMarginDiv
{
margin: 0 auto;
width: 1860px;
}
.ms-crm-metaphor-dashboard-container #dashboardListDiv
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
}
}

@media screen and (max-width: 1024px) {
.ms-crm-metaphor-dashboard-container .ms-crm-DashboardFrameContainer
{
top:132px;
}
.ms-crm-metaphor-dashboard-container #dummyDashboardReflowWhiteDiv
{
height: 200px;
}
.ms-crm-metaphor-dashboard-container #dummyDashboardReflowDiv
{
height: 200px;
}
}

@media screen and (max-width: 500px) {
.ms-crm-metaphor-dashboard-container #dashboardListDiv
{
padding-top: 24px !important;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 35px;
<% } else { %>
padding-left: 35px;
<% } %>
}
.ms-crm-metaphor-dashboard-container .ms-crm-DashboardFrameContainer
{
top:185px;
}
.ms-crm-metaphor-dashboard-container #dummyDashboardReflowWhiteDiv
{
height: 250px;
}
.ms-crm-metaphor-dashboard-container #dummyDashboardReflowDiv
{
height: 250px;
}
}
<% } %>
</style>
<script type="text/javascript">
Mscrm.HomeDashboardsPage.run();
</script>
</head>
<body class="stage">
<ui:EventManager runat="server" id="crmEventManager"/>
<div id="mainTable" class="stdTable <% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>ms-crm-metaphor-dashboard-container<% } %>">
<div class="ms-crm-MainContainer" id ="mainContainer" runat="server">
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>
<div id="dummyDashboardReflowWhiteDiv" style='background-color: #FFFFFF !important'>
<div id="dummyDashboardReflowDiv"></div>
<div id="dummyDashboardReflowMarginDiv">
<div id="dashboardListDiv" style = "padding-top: 0px">
<% } %>
<% else { %>
<div class="homepage_table ms-crm-List-Title" id="dashboardListDiv" style = "padding-top: 0px">
<% } %>
<cnt:DashboardSelector id="dashboardSelector" runat="server" />
</div>
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>
</div>
</div>
<% } %>

<div id="dashboardFrameRow" class="ms-crm-Dashboard-Background dashboard-brdr ms-crm-DashboardFrameContainer" style="z-index:0" title="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Dashboards_Singular_Name")) %>">
<div id="dashboardBodyContainer" style="height: 100%">
<frm:UnboundDashboardForm id="unboundDashboardForm" RenderOnlyBody="true"  runat="server" />
</div>
</div>
<div id="dashboardLoadingRow" class="ms-crm-Dashboard-Background dashboard-brdr ms-crm-DashboardFrameContainer" style="z-index:1">
<div style="height:100%" class="ms-crm-absolutePosition">
<table class="ms-crm-Form-Dashboard" style="height:100%;width:100%">
<tr>
<td align="center">
<div>
<div>
<img id="loadingImage" alt="" runat="server" />
</div>
<div>
<label for="loadingImage">
<asp:Label id="loadingImageLabel" runat="server"></asp:Label>
</label>
</div>
</div>
</td>
</tr>
</table>
</div>
</div>
<div id="dashboardNotificationRow" class="ms-crm-Dashboard-Background dashboard-brdr ms-crm-DashboardFrameContainer" style="z-index:0">
<div style="height:100%" class="ms-crm-absolutePosition">
<table class="ms-crm-Form-Dashboard" style="height:100%;width:100%">
<tr>
<td align="center">
<div> <loc:Text ResourceId="Dashboards_Not_Available" runat="server" /></div>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</body>
</html>
