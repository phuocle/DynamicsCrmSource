<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Dashboard" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html xmlns:Crm lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style>
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
</head>

<body class="ms-crm-Form-Dashboard">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<div id="dashboardTable" class="stdTable ms-crm-Dashboard-Body">
<div id ="SubGridCommandBarData"  />
<frm:UnboundDashboardForm id="unboundDashboardForm" RenderOnlyBody="true"  runat="server" />
</div>
<script type="text/javascript">
Mscrm.DashboardPage.run();
if (window.UseTabletExperience) {
var data = { bottom: false, top: false, startY: 0 }


var contentPanel = document.getElementById("formBodyContainer");
if (contentPanel) {

contentPanel.addEventListener("touchstart", function (e) {
data.startY = e.pageY;
data.top = contentPanel.scrollTop <= 0;
data.bottom = contentPanel.scrollTop >= contentPanel.scrollHeight - contentPanel.clientHeight;
}, false);

contentPanel.addEventListener("touchmove", function (e) {
var delta = data.startY - e.pageY;

if (delta < 0 && data.top || delta > 0 && data.bottom) {
e.preventDefault();
e.stopPropagation();
}
else {
e.stopPropagation();
}
}, false);
}

if (window.LOCID_UI_DIR === "RTL") {


var dashboardFrames = document.getElementsByTagName('iframe');
for (var i = 0; i < dashboardFrames.length; i++) {
var frame = dashboardFrames[i];
if (frame && frame.id)
{
if (frame.id.indexOf("WebResource") == 0 || frame.id.indexOf("IFRAME") == 0) {
frame.addEventListener("load", scrollFrameToRight, false);
}
}
}
}
}


function scrollFrameToRight(event) {
var scrollContainer = null;
if (this.id.indexOf("WebResource") == 0) {
scrollContainer = this.parentNode.parentNode;
}
else if (this.id.indexOf("IFRAME") == 0) {
scrollContainer = this.parentNode;
}

if (scrollContainer) {
var maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
scrollContainer.scrollLeft += maxScrollLeft;
}
}


var cssMediaQueryEvaluator = Mscrm.CssMediaQueryEvaluator.get_instance();
if (!cssMediaQueryEvaluator.hasNativeBrowserSupport()) {
cssMediaQueryEvaluator.initialize();
}
</script>
</body>
</html>
