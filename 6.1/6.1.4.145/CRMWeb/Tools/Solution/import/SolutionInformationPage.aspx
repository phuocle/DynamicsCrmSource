<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionInformationPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>



<head>

<app:appheader runat="server" id="crmHeader" />

<script type="text/javascript">
Sys.Application.add_load(PageOnLoad);
Sys.Application.add_unload(PageOnUnload);

function PageOnLoad() {
var xmlObject = getDialogArguments();
$addHandler(window, "resize", resizeLayout);
if (!IsNull(xmlObject) && !IsNull(xmlObject.xml) && xmlObject.xml.length > 1) {
var hiddenImportXml = document.getElementById('hiddenImportXml');
if (hiddenImportXml.value.length < 2) {
hiddenImportXml.value = xmlObject.xml;
$get("reloadform").submit();
}
else {
window.setTimeout(resizeLayout, 1);
}
}
}

function PageOnUnload() {
$removeHandler(window, "resize", resizeLayout);
}

function resizeLayout() {
var computedStyle = $get("div_content").offsetHeight - ($get("tb_solution").offsetHeight + $get("tb_publisher").offsetHeight + 7);

if (computedStyle>0)
{
$get("tb_components").style.height = computedStyle + "px";
}
}

function ExpandCollapseTab(tabHeader) {
var id = tabHeader.id.split("_")[1];
var tabBody = document.getElementById("tabBody_" + id);
var tabImage = document.getElementById("tabImage_" + id);
if (tabBody.style.display != "none") {
tabBody.style.display = "none";
tabImage.src = "/_imgs/tab_section_right.png";
}
else {
tabBody.style.display = "";
tabImage.src = "/_imgs/tab_section_down.png";
}
window.setTimeout(resizeLayout, 1);
}

function KeyDown(e, tabHeader) {
switch (e.keyCode) {
case KEY_SPACE:
case KEY_ENTER:
ExpandCollapseTab(tabHeader);
e.preventDefault();
e.stopPropagation();
return false;
}
}

window.name = "solutioninformationpage";
</script>
<style>

.ms-crm-InlineTabExpanderRTL{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<%= Microsoft.Crm.Application.Utility.WebUtility.FlipImage("h") %>
<% } %>
}
</style>
</head>



<body class="ms-crm-Dialog-Body">
<div class="ms-crm-Form-Title" style="height: 34px;">
<table class="ms-crm-Form-Title-NoNav" cellpadding="0" cellspacing="0">
<tr class="ms-crm-Form-Title ms-crm-solution-wizard">
<td class="ms-crm-Form-LargeIcon-default">
<img alt="" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.IconUtil.GetIconPath(7100, Microsoft.Crm.IconType.FormHeaderEntityIcon, Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" />
</td>
<td class="ms-crm-Form-Title" style="vertical-align: middle;white-space: nowrap">
<div id = "crmForm_CurrentViewTitle" class="ms-crm-Form-Breadcrum">
<h3 class="ms-crm-Form">
<nobr style="text-overflow:ellipsis;">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(solutionDisplayName)%>
</nobr>
</h3>
</div>
</td>
</tr>
</table>
</div>
<div id="div_content" class="ms-crm-DialogStrict-Main" style="top:34px;">
<table style="width: 100%">
<tr>
<td id="tabs">

<table id="tb_solution" class="tab" style="table-layout: fixed; width:100%; vertical-align: top;">
<tr>
<td name="tabData" >
<div style="border-bottom: 1px solid #B6B9BD; width: 100%">
<a name="tabHeader" tabindex="0" id="tabHeader_solutionViewPanel" class="ms-crm-Menu-Label" onkeydown="KeyDown(new Sys.UI.DomEvent(event), this);" onclick="ExpandCollapseTab(this)">
<img name="tabImage" id="tabImage_solutionViewPanel" class="ms-crm-inlinetabexpander ms-crm-InlineTabExpanderRTL" alt="" src="/_imgs/<%=displaySolution ? "down" : "right"%>.gif"></img>
<span name="tabText" class="sectionbar">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Solution.Title" runat="server" />
</span>
</a>
</div>
<table cellspacing="0" cellpadding="3" id="tabBody_solutionViewPanel"
style="width:100%; <%=displaySolution ? "" : "display: none"%>">
<tr>
<td style="width:50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr style="vertical-align: topl">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="solution_friendlyname">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Solution.solution_friendlyname" runat="server" />
</label>
</td>
<td>
<ui:textbox id="solution_friendlyname" tabindex="-1" runat="server" />
</td>
</tr>
<tr style="vertical-align: top">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="solutionversion">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Solution.version" runat="server" />
</label>
</td>
<td id="version_d">
<ui:textbox id="solutionversion" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
<td style="width: 50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width:135px" />
<col />
<tr>
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="solution_uniquename">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Solution.solution_uniquename" runat="server" />
</label>
</td>
<td>
<ui:textbox id="solution_uniquename" tabindex="-1" runat="server" />
</td>
</tr>
<tr>
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="isManaged">
<loc:text resourceid="MSG.SolutionImport.Solution.Type.Label" runat="server" />
</label>
</td>
<td>
<ui:textbox id="isManaged" runat="server" style="width: 100%" />
</td>
</tr>
</table>
</td>
</tr>
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign" colspan="2" rowspan="3">
<table class="stdTable"  cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr>
<td>
<label for="solution_description">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Solution.solution_description" runat="server" />
</label>
</td>
<td rowspan="3" style="height: 65px;">
<ui:textarea id="solution_description" runat="server" />
</td>
</tr>
<tr style="height: 25px;vertical-align: top;">
<td></td>
</tr>
<tr style="height: 25px;vertical-align: top;">
<td></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>

<table id="tb_publisher" class="tab" style="table-layout: fixed; width: 100%;vertical-align: top;">

<tr>
<td name="tabData" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<div style="border-bottom:1px solid #B6B9BD;width:100%">
<a name="tabHeader" tabindex="0" id="tabHeader_publisherViewPanel" class="ms-crm-Menu-Label" onkeydown="KeyDown(new Sys.UI.DomEvent(event), this);" onclick="ExpandCollapseTab(this)">
<img name="tabImage" id="tabImage_publisherViewPanel" class="ms-crm-inlinetabexpander ms-crm-InlineTabExpanderRTL" alt="" src="/_imgs/tab_section_right.png"></img>
<span name="tabText" class="sectionbar">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Title" runat="server" />
</span>
</a>
</div>
<table cellspacing="0" cellpadding="3" id="tabBody_publisherViewPanel" style="display: none; width: 100%">
<tr>
<td style="width:50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="publisher_friendlyname">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.FriendlyName" runat="server" />
</label>
</td>
<td>
<ui:textbox id="publisher_friendlyname" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
<td style="width:50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr  style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="publisher_uniquename">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.UniqueName" runat="server" />
</label>
</td>
<td>
<ui:textbox id="publisher_uniquename" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="width: 100%" colspan="2">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign ms-crm-Field-Normal">
<label for="publisher_description">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Description" runat="server" />
</label>
</td>
<td rowspan="3">
<ui:textarea id="publisher_description" runat="server" />
</td>
</tr>
<tr style="height:25px;vertical-align: top;">
<td></td>
</tr>
<tr style="height:25px;vertical-align: top;">
<td></td>
</tr>
</table>
</td>
</tr>
<tr style="vertical-align: top;">
<td style="width: 50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width:100%;vertical-align: top">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr>
<td>
<label for="address1_telephone1">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Phone" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_telephone1" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
<td style="width: 50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr>
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="emailaddress">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.EMail" runat="server" />
</label>
</td>
<td>
<ui:textbox id="emailaddress" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr style="vertical-align: top;">
<td colspan="2">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%;vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr>
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="supportingwebsiteurl">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.SupportUrl" runat="server" />
</label>
</td>
<td>
<ui:textbox id="supportingwebsiteurl" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr style="vertical-align: top;">
<td style="width: 50%">
<table class="stdTable" cellspacing="0" style="table-layout: fixed; width: 100%; vertical-align: top;">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_line1">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Street1" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_line1" tabindex="-1" runat="server" />
</td>
</tr>
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_line2">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Street2" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_line2" tabindex="-1" runat="server" />
</td>
</tr>
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_city">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.City" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_city" tabindex="-1" runat="server" />
</td>
</tr>
<tr style="vertical-align: top;">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_stateorprovince">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.State" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_stateorprovince" tabindex="-1" runat="server" />
</td>
</tr>
</table>
</td>
<td style="width: 50%">
<table class="stdTable" cellspacing="0" style="vertical-align: top;table-layout: fixed; width: 100%">
<col style="padding-left: 10px; width: 135px" />
<col />
<tr style="vertical-align: top">
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_postalcode">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Zip" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_postalcode" tabindex="-1" runat="server" />
</td>
</tr>
<tr>
<td class="ms-crm-FieldLabel-LeftAlign">
<label for="address1_country">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Publisher.Country" runat="server" />
</label>
</td>
<td>
<ui:textbox id="address1_country" tabindex="-1" runat="server" />
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>

<div id="tb_components" class="tab" style="position: relative;min-height: 230px;margin: 0px 3px;">

<div style="height: 25px; border-bottom: 1px solid #B6B9BD; width: 100%">
<span class="sectionbar">
<loc:text resourceid="SystemCustomization.ImportCustomizationsPage.Tab.Grid.Title" runat="server" />
</span>
</div>

<div class="ms-crm-absolutePosition" style="top: 30px; bottom: 10px">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<app:appgrid id="gridImport" runat="server" />
</div>
</div>
</div>
</td>
</tr>
</table>
</div>
<div id="buttonrow" class="ms-crm-WizardForm-Footer">
<form id="reloadform" name='reloadform' enctype='multipart/form-data' method='post' action='solutioninformationpage.aspx' target="solutioninformationpage">
<input type="hidden" name="hiddenImportXml" id="hiddenImportXml" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(strImportXml)%>" />
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/Solution/import/solutioninformationpage.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</form>
<ui:button id="btnclose" onclick="closeWindow();" resourceid="Button_Label_Close" runat="server"></ui:button>
</div>
</body>
</html>
