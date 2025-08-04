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
padding-left:6px !important;
padding-right:0px !important;
<% } else { %>
padding-left:0px !important;
padding-right:6px !important;
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
color: #666 !important;
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
</style>
<script type="text/javascript">
Mscrm.HomeDashboardsPage.run();
</script>
</head>
<body class="stage">
<ui:EventManager runat="server" id="crmEventManager"/>
<div id="mainTable" class="stdTable">
<div class="ms-crm-MainContainer" id ="mainContainer" runat="server">
<div class="homepage_table ms-crm-List-Title" id="dashboardListDiv" style = "padding-top: 0px">
<cnt:DashboardSelector id="dashboardSelector" runat="server" />
</div>

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
