<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.OptionSet.OptionSetPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>

<head>

<link rel="shortcut icon" href="/pa_favicon.ico" />

<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">

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

<script type="text/javascript">

window.name = "optionsetpage";

var ledtPicklistValues_listEditComponent;

Sys.Application.add_load(function() {
ledtPicklistValues_listEditComponent = $find('ledtPicklistValues');
});
</script>
</head>

<body scroll="no">
<form name="frmReload" action="" method="post" target="optionsetpage">
<input	type="hidden" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>" />
</form>
<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
<div class="ms-crm-Form-Layout" style="position:fixed;top:48px;height:calc(100% - 48px);">



<div style="height: 96px">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
</div>

<div class="ms-crm-Form-Background" style="position:absolute; top:96px; bottom:24px; left:0px; right:0px;">
<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize">
<% if (_isSgFCBDependentOptionSetEnabled == true) { %>
<div class="ms-crm-TabBar-Cell" id="tabBarContainer">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>

<div id="tabsContent">
<div id="tabGeneral" class="ms-crm-Tab">
<% } %>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">



<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Title" runat="server"/></td>
</tr>
<tr>

<td>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:115px" />
<col />
<col style="width:135px" />
<col />
<tr class="param">

<td id="txtDisplayNameLabel" class="ms-crm-Field-Required"><label for="txtDisplayName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.DisplayName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtDisplayName" runat="server"/></td>

<td id="txtSchemaNameLabel" class="ms-crm-Field-Required FormSection_CellPadding"><label for="txtSchemaName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>

<td>
<table width="100%"  cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td><div id="txtPrefix" class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div></td>
<%
}
%>
<td width="100%"><ui:TextBox id="txtSchemaName" runat="server"/></td>
</tr>
</table>
</td>
</tr>
<tr class="param">

<td id="txtExternalNameLabel"><label for="txtExternalName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.OptionSetExternalName" runat="server"/></label></td>
<td><ui:TextBox id="txtExternalName" runat="server"/></td>
</tr>



<tr class="param" style="height: 80px">
<td id="txtDescriptionLabel" style="vertical-align: top"><label for="txtDescription"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.DescriptionSection.Title" runat="server"/></label></td>

<td colspan="3"><ui:TextArea id="txtDescription" Height="80px" runat="server"/></td>
</tr>
</table>
</td>
</tr>


<tr height="25px">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.OptionSetSections.Title" runat="server"/></td>
</tr>
<tr id="picklistParams">
<td>
<table width="100%"  cellspacing="0" cellpadding="0">

<tr class="param">
<td><app:AppPicklistEdit id="ledtPicklistValues" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</div>

<% if (_isSgFCBDependentOptionSetEnabled == true) { %>
<div id="tabCascading" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">
<tr id="cascadingTextLabel" class="ms-crm-Field-Normal" style="width:40%; vertical-align:top"><label for="cascadingText"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.CascadingText" runat="server" /></label>
</tr>
<tr>
<td style="vertical-align: top" class="manageAttribute_td_LeftColumn">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<tr id="picklistParams">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />

<tr class="param" id="tr_selectParentOptionSet">
<td id="parentOptionSetLabel" class="ms-crm-Field-Normal" style="width:40%; vertical-align:top"><label for="parentOptionSet"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.ParentOptionSet" runat="server" /></label></td>
<td class="typecontrol" style="width:50%">
<ui:select id="selectParentOptionSet" onchange="OnParentOptionSetChange();" runat="server" />
</td>
<td></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:135px" /><col />

<tr class="param">
<td colspan="2" style="width:40%; vertical-align:top">
<app:apppicklistedit id="ledtPicklistValuesParent" runat="server" />
</td>
<td colspan="1" style="width:15%; vertical-align:top">
</td>
<td colspan="2" style="width:45%; vertical-align:top">
<app:apppicklistmappingedit id="ledtPicklistValuesChild" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<% } %>
</div>
</div>
</div>
</div>




<div class="ms-crm-Form-StatusBar" style="position:absolute; bottom:0px; left:0px; right:0px;"></div>
</div>
</body>
</html>
