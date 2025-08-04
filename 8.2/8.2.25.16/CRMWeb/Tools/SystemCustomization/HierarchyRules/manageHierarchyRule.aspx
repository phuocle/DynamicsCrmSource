<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.HierarchyRules.ManageHierarchyRulePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>



<head>

<cnt:appheader id="crmHeader" runat="server" />
<script src="/_static/_common/scripts/jquery-2.1.1.min.js"></script>
<script src="/_static/_common/scripts/jquery_ui_1.8.21.min.js"></script>
<script src="/_static/_common/scripts/CrmInternalUtility.js"></script>
<script type="text/javascript">

window.name = "hierarchySettingspage";
var newHierarchySettingSolutionPrefix = '<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%>';
Mscrm.HierarchySettings.disableInformationNav();
function openRelationshipwindow()
{

}
</script>
<style type="text/css">

#navBarContainer
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
float: right;
<% } else { %>
float: left;
<% } %>
width: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
}

#tdAreas
{
position: absolute;
top: 96px;
bottom: 24px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
left: 0px;
<% } else { %>
right: 0px;
left: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
<% } %>
}

#tabBarContainer
{
position: absolute;
top: 0px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 10px;
left: 7px;
<% } else { %>
right: 7px;
left: 10px;
<% } %>
height: 21px;
}

#tabsContent
{
position: absolute;
top: 21px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 10px;
left: 7px;
<% } else { %>
right: 7px;
left: 10px;
<% } %>
bottom: 24px;
}
</style>
</head>



<body scroll="no">
<form name="frmReload" id="frmReloadId" action="" method="post" target="hierarchySettingspage"></form>
<div class="ms-crm-Form-Layout">
<div style="height:96px;">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-Form-Background">
<div id="navBarContainer" class="ms-crm-Form-LeftBar">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>
<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize ms-crm-absolutePosition">
<div id="divInformation" class="page ">
<div class="ms-crm-TabBar-Cell" id="tabBarContainer">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tabsContent">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tabGeneral" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="vertical-align: top" class="">
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<loc:text resourceid="SystemCustomization.ManageHierarchySettingPage.SchemaSection.Title" runat="server" />
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="3">
<col style="width:164px" />
<col class="FormSection_WriteColumnHeaders_col" />
<tr class="param">
<td id="txtHierarchySettingNameLabel" class="ms-crm-Field-Required"><label for="txtHierarchySettingName"><loc:text resourceid="SystemCustomization.ManageHierarchySettingPage.SchemaSection.Labels.SchemaName" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td>
<div id="txthierarchyRuleNamePrefix" class="">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
</td>
<%
}
%>
<td width="100%">
<ui:textbox id="txtHierarchySettingName" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr class="param">
<td id="selectQuickFormLabel" class="ms-crm-Field-Normal"><label for="selectQuickForm" title="<loc:Text Encoding='HtmlAttribute' ResourceId='SystemCustomization.ManageHierarchySettingPage.Label.QuickViewForm' runat='server'/>" /><loc:text resourceid="SystemCustomization.ManageHierarchySettingPage.Label.QuickViewForm" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:Select id="selectQuickForm" runat="server"/>
</td>
<td>
<a href="javascript:Mscrm.HierarchySettings.openFormEditorWindow()" style="color:#0000ff; text-decoration:underline">
<loc:Text ResourceId="SystemCustomization.ManageHierarchySettingPage.Select.CreateNew" runat="server"/>
</a>
</td>
<td></td>
</tr>
<tr class="param">
<td id="txtRelationshipLabel"><label for="txtRelationship"><loc:text resourceid="SystemCustomization.ManageHierarchySettingPage.Title.Line" runat="server" /></label></td>
<td>
<ui:textbox id="txtRelationship"  runat="server" ReadOnly="True" />
</td>
<td/>
<td/>
</tr>
<tr>
<td colspan="4">
<p><%=hierarchyRelationshipCreateText%></p>
</td>
</tr>
<tr class="param" style="height:80px">
<td id="txtHierarchySettingdescriptionLabel" class="ms-crm-Field-Normal" valign="top"><label for="txtHierarchySettingDescription"><loc:text resourceid="SystemCustomization.ManageHierarchySettingPage.DescriptionSection.Title" runat="server" /></label></td>
<td colspan="3" valign="top">
<ui:textarea id="txtHierarchySettingDescription" height="80px" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript">
Mscrm.HierarchySettings.disableInformationNav();
</script>
</body>
</html>
