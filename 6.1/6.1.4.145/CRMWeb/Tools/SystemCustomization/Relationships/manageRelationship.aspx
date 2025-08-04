<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Relationships.ManageRelationshipPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>




<head>


<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript">
window.name = "relationshippage";
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




<body>
<form name="frmReload" id="frmReloadId" action="" method="post" target="relationshippage">
<input	type="hidden" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>" />
</form>

<div class="ms-crm-Form-Layout">



<div style="height:96px;">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
</div>

<div class="ms-crm-Form-Background">



<div id="navBarContainer" class="ms-crm-Form-LeftBar">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>




<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize">



<div id="divInformation" class="page" style="display:inline;">
<div class="ms-crm-TabBar-Cell">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tabsContent">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tabGeneral" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">



<tr style="display:<%=IsManyToMany() ? "" : "none" %>;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Title" runat="server"/></td>
</tr>
<tr style="display:<%=IsManyToMany() ? "" : "none" %>;">
<td>

<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />
<tr class="param">
<td id="selCENameLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Labels.EntityName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selCEName" runat="server"/></td>
</tr>
</table>

<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selCEDisplayOptionLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Labels.Option" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selCEDisplayOption" OnChange="onDisplayOptionChange(this, $get('selCEDisplayArea'), $get('txtCECustomLabel'), $get('txtCEDisplayOrder'));" runat="server"/></td>
</tr>

<tr class="param">
<td id="selCEDisplayAreaLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Labels.Area" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selCEDisplayArea" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtCECustomLabelLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Labels.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:TextBox id="txtCECustomLabel" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtCEDisplayOrderLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.CurrentEntitySection.Labels.Order" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Number id="txtCEDisplayOrder" Precision="0" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>




<tr class="spacer" style="display:<%=IsManyToMany() ? "" : "none" %>;"><td></td></tr>




<tr style="display:<%=IsManyToMany() ? "" : "none" %>;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Title" runat="server"/></td>
</tr>
<tr style="display:<%=IsManyToMany() ? "" : "none" %>;">
<td>

<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />
<tr class="param">
<td id="selOENameLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Labels.EntityName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selOEName" OnChange="onOtherEntityChange();" runat="server"/></td>
</tr>
</table>

<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">

<col style="width:150px" /><col />
<tr class="param">
<td id="selOEDisplayOptionLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Labels.Option" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selOEDisplayOption" OnChange="onDisplayOptionChange(this, $get('selOEDisplayArea'), $get('txtOECustomLabel'), $get('txtOEDisplayOrder'));" runat="server"/></td>
</tr>

<tr class="param">
<td id="selOEDisplayAreaLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Labels.Area" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selOEDisplayArea" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtOECustomLabelLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Labels.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:TextBox id="txtOECustomLabel" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtOEDisplayOrderLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.OtherEntitySection.Labels.Order" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Number id="txtOEDisplayOrder" Precision="0" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>




<tr class="spacer" style="display:<%=IsManyToMany() ? "" : "none" %>;"><td></td></tr>





<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.DefinitionSection.Title" runat="server"/></td>
</tr>
<tr>

<td>

<table width="100%" cellspacing="0" cellpadding="0" style="display:<%=IsManyToMany() ? "none" : "" %>;">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selReferencedEntityNameLabel" class="ms-crm-Field-Required"><label for="selReferencedEntityName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.DefinitionSection.Labels.ReferencedEntityName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selReferencedEntityName" OnChange="onEntityChange();" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selReferencingEntityNameLabel" class="ms-crm-Field-Required"><label for="selReferencingEntityName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.DefinitionSection.Labels.ReferencingEntityName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selReferencingEntityName" OnChange="onEntityChange();" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>



<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtSchemaNameLabel" class="ms-crm-Field-Required"><label for="txtSchemaName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.DefinitionSection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control">
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
</table>

<table style="width:100%;table-layout:fixed;display:<%=IsManyToMany() ? "" : "none" %>;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtIntersectEntityNameLabel" class="ms-crm-Field-Required"><label for="txtIntersectEntityName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.DefinitionSection.Labels.IntersectEntityName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control">
<table width="100%"  cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td><div id="txtPrefix2" class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div></td>
<%
}
%>
<td width="100%"><ui:TextBox id="txtIntersectEntityName" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>

<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />
<tr class="param">
<td id="selectIsValidForAdvancedFindLabel" class="ms-crm-Field-Normal"><label for="selectIsValidForAdvancedFind"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.Searchable" runat="server" /></label></td>
<td class="control">
<ui:select id="selectIsValidForAdvancedFind" runat="server" />
</td>
</tr>
</table>
</td>
</tr>




<tr class="spacer" style="display:<%=IsManyToMany() ? "none" : "" %>;"><td></td></tr>



<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AttributeSection.Title" runat="server"/></td>
</tr>
<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">

<td>
<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtReferencedInstanceNameLabel" class="ms-crm-Field-Required"><label for="txtReferencedInstanceName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AttributeSection.Labels.DisplayName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:TextBox id="txtReferencedInstanceName" OnChange="onReferencedInstanceNameChange();" runat="server"/></td>
</tr>

<tr class="param">
<td id="selReqLevelLabel" class="ms-crm-Field-Required"><label for="selReqLevel"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AttributeSection.Labels.RequirementLevel" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selReqLevel" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtAttributeSchemaNameLabel" class="ms-crm-Field-Required"><label for="txtAttributeSchemaName"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AttributeSection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control">
<table width="100%"  cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td><div class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div></td>
<%
}
%>
<td width="100%"><ui:TextBox id="txtAttributeSchemaName" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="3" style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param" style="height: 50px">
<td id="selDescriptionLabel" style="vertical-align: top"><label for="txtDescription"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AttributeSection.Labels.Description" runat="server"/></label></td>
<td class="control"><ui:TextArea id="txtDescription" Height="50px" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>




<tr class="spacer" style="display:<%=IsManyToMany() ? "none" : "" %>;"><td></td></tr>




<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AssociatedMenuSection.Title" runat="server"/></td>
</tr>
<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">
<td>

<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selDisplayOptionLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AssociatedMenuSection.Labels.Option" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selDisplayOption" OnChange="onDisplayOptionChange(this, $get('selDisplayArea'), $get('txtCustomLabel'), $get('txtDisplayOrder'))" runat="server"/></td>
</tr>

<tr class="param">
<td id="selDisplayAreaLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AssociatedMenuSection.Labels.Area" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Select id="selDisplayArea" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="txtCustomLabelLabel" class="ms-crm-Field-Required"><label for="txtCustomLabel"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AssociatedMenuSection.Labels.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:TextBox id="txtCustomLabel" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtDisplayOrderLabel" class="req"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.AssociatedMenuSection.Labels.Order" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td class="control"><ui:Number id="txtDisplayOrder" Precision="0" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>



<tr class="spacer" style="display:<%=IsManyToMany() ? "none" : "" %>;"><td></td></tr>




<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Title" runat="server"/></td>
</tr>
<tr style="display:<%=IsManyToMany() ? "none" : "" %>;">

<td>

<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selTypeLabel" class="ms-crm-Field-Required"><label for="selType"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Type" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selType" OnChange="onTypeChange();" runat="server"/></td>
</tr>
</table>

<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selCascadeAssignLabel" class="ms-crm-Field-Required"><label for="selCascadeAssign"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Assign" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeAssign" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtCascadeShareLabel" class="ms-crm-Field-Required"><label for="selCascadeShare"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Share" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeShare" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtCascadeUnshareLabel" class="ms-crm-Field-Required"><label for="selCascadeUnshare"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Unshare" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeUnshare" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td style="vertical-align: top">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:150px" /><col />

<tr class="param">
<td id="selCascadeReparentLabel" class="ms-crm-Field-Required"><label for="selCascadeReparent"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Reparent" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeReparent" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtCascadeDeleteLabel" class="ms-crm-Field-Required"><label for="selCascadeDelete"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Delete" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeDelete" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtCascadeMergeLabel" class="ms-crm-Field-Required"><label for="selCascadeMerge"><loc:Text ResourceId="SystemCustomization.ManageRelationshipPage.TypeSection.Labels.Merge" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="control"><ui:Select id="selCascadeMerge" runat="server"/></td>
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



<div id="divMappings" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmMappings" name="ifrmMappings" class="container" url="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("mappings/mappingList.aspx?mappingId=" + Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(_mappingId), Microsoft.Crm.Application.Security.UserInformation.Current).ToString()+solutionParameter)%>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
</div>
</div>




<div class="ms-crm-Form-StatusBar" style="position:absolute; bottom:0px; left:0px; right:0px;"></div>
</div>
</body>
</html>
