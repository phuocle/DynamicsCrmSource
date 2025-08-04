<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Attributes.ManageAttributePage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>

<!DOCTYPE html>
<html>



<head>
<link rel="shortcut icon" href="/pa_favicon.ico" />


<cnt:appheader id="crmHeader" runat="server" />

<script type="text/javascript">

window.name="attributepage";

var ledtPicklistValues_listEditComponent;
var ledtBooleanValues_listEditComponent;
function onClickEnableAuditCheck()
{
<%if(_attributeMD != null) {%>
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsAuditingEnabled");
if (Mscrm.FormUtility.isControlDirty(ctrl))
{
if (!ctrl.get_dataValue())
{
var confirmation = confirm(LOCID_CONFIRM_AUDIT_DISABLE);
if (confirmation == false)
{
ctrl.set_dataValue(true);
}
}
}
<%} %>
}

Sys.Application.add_load(function() {
ledtPicklistValues_listEditComponent = $find('ledtPicklistValues');
ledtBooleanValues_listEditComponent = $find('ledtBooleanValues');
});

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
<form name="frmReload" id="frmReloadId" action="" method="post" target="attributepage">
<input type="hidden" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>" />
</form>
<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
<div class="ms-crm-Form-Layout" style="position:fixed;top:48px;height:calc(100% - 48px);">



<div style="height:96px;">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
</div>

<div class="ms-crm-Form-Background">



<div id="navBarContainer" class="ms-crm-Form-LeftBar">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>




<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize ms-crm-absolutePosition">
<div id="divInformation" class="page manageAttribute_div_Info">
<div class="ms-crm-TabBar-Cell" id="tabBarContainer">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>

<div id="tabsContent">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tabGeneral" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="vertical-align: top" class="manageAttribute_td_LeftColumn">
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">



<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Title" runat="server" />
</td>
</tr>
<tr>

<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="3">
<col style="width:135px" />
<col />
<col style="width:135px" class="FormSection_WriteColumnHeaders_col" />
<col />
<tr class="param">

<td id="txtDisplayNameLabel" class="ms-crm-Field-Required"><label for="txtDisplayName"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.DisplayName" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:textbox id="txtDisplayName" onchange="onDisplayNameChange();" runat="server" />
</td>

<td id="selReqLevelLabel" class="ms-crm-Field-Required"><label for="selReqLevel"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.RequirementLevel" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:select id="selReqLevel" runat="server" />
</td>
</tr>
<tr class="param">

<td id="txtSchemaNameLabel" class="ms-crm-Field-Required"><label for="txtSchemaName"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.SchemaName" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td>
<div id="txtSchemaNamePrefix" class="manageAttribute_div_SchemaName">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
</td>
<%
}
%>
<td width="100%">
<ui:textbox id="txtSchemaName" runat="server" />
</td>
</tr>
</table>
</td>

<td id="selectSearchableLabel" class="ms-crm-Field-Normal"><label for="selectSearchable"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.Searchable" runat="server" /></label></td>
<td>
<ui:select id="selectSearchable" runat="server" />
</td>
</tr>
<% if (_isVirtualEntity)
{
%>
<% if (_isDataSourceEntity)
{
%>
<tr class="param">

<td id="selectDataSourceSecretLabel" class="ms-crm-Field-Required"><label for="selectDataSourceSecret"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.DataSourceSecret" runat="server" /></label></td>
<td>
<ui:select id="selectDataSourceSecret" runat="server" />
</td>
<%
}
%>
</tr>
<tr class="param">

<td id="txtExternalNameLabel" class="ms-crm-Field-Required"><label for="txtExternalName"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.ExternalName" runat="server" /></label></td>
<td>
<ui:textbox id="txtExternalName" runat="server" />
</td>
</tr>
<%
}
%>
<tr class="param">
<tr class="param">
<td id="rdFieldSecurityLabel" class="ms-crm-Field-Normal"><label for="rdFieldSecurityLabel"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.FieldSecurity" runat="server" /></label></td>
<td>
<crm:radio style="height=13px" id="rdIsFieldSecurityEnabled" runat="server" />
</td>
<td></td>
<td></td>
</tr>
<tr class="param" id= "txtFieldSecurityAlertMessage" runat="server">
<td></td>
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Alert.FieldSecurity" runat="server" /></span>
<a style="vertical-align: middle;" target="_blank" rel="noopener noreferrer" href="<%=CurrentResourceManager.GetString("ManageAttribute.aspx_Link_LearnMore")%>" class="help_link">
<loc:Text ResourceId="ManageAttribute.aspx_Text_LearnMore" runat="server"/>
</a>
</td>
</tr>
<tr class="param">
<td id="rdAuditingLabel" class="ms-crm-Field-Required"><label for="rdIsAuditingEnabled"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.Auditing" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<crm:radio id="rdIsAuditingEnabled" onchange="onClickEnableAuditCheck();" runat="server" />
</td>
<td></td>
<td></td>
</tr>
<tr class="param" id= "txtFieldAuditAlertMessage" runat="server">
<td></td>
<td colspan="3">
<img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Alert.FieldAudit" runat="server" />
</td>
</tr>
<tr class="param" id= "txtFieldAuditAlertMessageGlobal" runat="server">
<td></td>
<td colspan="3" >
<img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Alert.FieldAudit.OrgFlag" runat="server" />
</td>
</tr>



<tr class="param" style="height:80px">
<td id="txtDescriptionLabel" class="ms-crm-Field-Normal" valign="top"><label for="txtDescription"><loc:text resourceid="SystemCustomization.ManageAttributePage.DescriptionSection.Title" runat="server" /></label></td>

<td colspan="3" valign="top">
<ui:textarea id="txtDescription" height="80px" runat="server" />
</td>
</tr>
<tr class="param">
<td id="selectIsGlobalFilterEnabledLabel" class="ms-crm-Field-Normal"><label for="selectIsGlobalFilterEnabled"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.GlobalFilterEnabled" runat="server" /></label></td>
<td>
<ui:CheckBox id="selectIsGlobalFilterEnabled" runat="server" />
</td>
<td id="selectIsSortableEnabledLabel" class="ms-crm-Field-Normal"><label for="selectIsSortableEnabled"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.SortableEnabled" runat="server" /></label></td>
<td>
<ui:CheckBox id="selectIsSortableEnabled" runat="server" />
</td>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.SolutionSimplificationCheckbox, Microsoft.Crm.Application.Security.UserInformation.Current) == true && _isSolutionAware) { %>
<td id="selectLocalizableEnabledLabel" class="ms-crm-Field-Normal"><label for="selectLocalizableEnabled"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.Localizable" runat="server" /></label></td>
<td>
<ui:CheckBox id="selectLocalizableEnabled" runat="server" />
</td>
<% } %>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.SolutionSimplificationCheckbox, Microsoft.Crm.Application.Security.UserInformation.Current) == true && _isSolutionAware) { %>
<td id="selectExportableEnabledLabel" class="ms-crm-Field-Normal"><label for="selectExportableEnabled"><loc:text resourceid="SystemCustomization.ManageAttributePage.SchemaSection.Labels.Exportable" runat="server" /></label></td>
<td>
<ui:CheckBox id="selectExportableEnabled" runat="server" />
</td>
<% } %>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding-top:5px">
<span>
<loc:Text ResourceId="SystemCustomization.HelpContent.Link.Title" runat="server"/>
<a target="_blank" rel="noopener noreferrer" href="<%=CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address")%>" class="help_link">
<loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
</a>
</span>
</td>
</tr>
</table>
</td>
</tr>



<tr height="25px">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
<loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Title" runat="server" />
</td>
</tr>
<tr>

<td>
<table id="sectionBodyTable" width="100%" cellspacing="0" cellpadding="0">

<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />
<col />


<tr class="param">
<td id="selTypeLabel" class="ms-crm-Field-Required typelabel"><label for="selType"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Type" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td class="typecontrol">
<ui:select id="selType" onchange="onTypeChange();" runat="server" />
</td>
<td></td>
</tr>

<tr id="dataSourceParam" class="param" style="display: none;">
<td id="selDataSourceLabel" class="ms-crm-Field-Required typelabel"><label for="selDataSource"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.DataSource" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td class="typecontrol">
<ui:select id="selDataSource" onchange="onDataSourceChange();" runat="server" />
</td>
<td>
<ui:button id="buttonDataSourceEdit" resourceid="SystemCustomization.ManageAttributePage.TypeSection.Button.Edit" onclick="onDataSourceEdit();" runat="server" />
</td>
</tr>

</table>
</td>
</tr>

<tr id="intParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td id="selIntFormatLabel" class="ms-crm-Field-Required"><label for="selIntFormat"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selIntFormat" onchange="onIntFormatChange();" runat="server" />
</td>
</tr>

<tr class="IntegerParams param">
<td id="numMinIntValueLabel" class="ms-crm-Field-Required"><label for="numMinIntValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MinValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMinIntValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>

<tr class="IntegerParams param">
<td id="numMaxIntValueLabel" class="ms-crm-Field-Required"><label for="numMaxIntValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxIntValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="floatParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td id="selFloatPrecisionLabel" class="ms-crm-Field-Required"><label for="selFloatPrecision"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Precision" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selFloatPrecision" onchange="onFloatPrecisionChange();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMinFloatValueLabel" class="ms-crm-Field-Required"><label for="numMinFloatValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MinValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMinFloatValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMaxFloatValueLabel" class="ms-crm-Field-Required"><label for="numMaxFloatValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxFloatValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="decimalParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td id="selDecimalPrecisionLabel" class="ms-crm-Field-Required"><label for="selDecimalPrecision"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Precision" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selDecimalPrecision" onchange="onDecimalPrecisionChange();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMinDecimalValueLabel" class="ms-crm-Field-Required"><label for="numMinDecimalValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MinValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMinDecimalValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMaxDecimalValueLabel" class="ms-crm-Field-Required"><label for="numMaxDecimalValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxDecimalValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="datetimeParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td id="selDatetimeBehaviorLabel" class="ms-crm-Field-Required"><label for="selDatetimeBehavior"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Behavior" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selDatetimeBehavior" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td id="selDatetimeFormatLabel" class="ms-crm-Field-Required"><label for="selDatetimeFormat"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selDatetimeFormat" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="bitParams" style="display: none;">
<td>
<table width="100%" cellspacing="0" cellpadding="0">

<tr class="param">
<td>
<app:applistedit id="ledtBooleanValues" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="picklistParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />
<col/>

<tr class="param">
<td id="rdUseExistingLabel" style="table-layout: fixed;"><label for="rdUseExisting"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.UseExistingSet.Label" runat="server" /></label></td>
<td class="typecontrol">
<ui:radio id="rdUseExisting" runat="server" style="width: 100%" />
</td>
<td></td>
</tr>
<tr class="param" id="tr_selectOptionSet" style="display: <%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(optionReferenceVisibility)%>;">
<td id="selectOptionSetLabel" style="table-layout: fixed;" class="ms-crm-Field-Required"><label for="selectOptionSet"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.ReferencedSetLabel" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td class="typecontrol">
<ui:select id="selectOptionSet" onchange="OnOptionsSetChange();" runat="server" />
</td>
<td nowrap>
<ui:button id="buttonEditSet" runat="server" />
<span>&nbsp;&nbsp;</span><ui:button id="buttonNewSet" runat="server" />
</td>
</tr>
<% if (_isVirtualEntity)
{
%>
<tr class="param" id="tr_OptionSetExternalName">
<td id="tdtxtOptionSetExternalName"><label for="txtOptionSetExternalName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.OptionSetExternalName" runat="server"/></label></td>
<td class="typecontrol">
<ui:TextBox id="txtOptionSetExternalName" runat="server"/>
</td>
<td></td>
</tr>
<%
}
%>
<tr class="param" id="picklistDefault_control">
<td id="tdledtPicklistDefault"><label for="ledtPicklistDefault"><loc:text resourceid="Web._controls.listedit.labels.DefaultValue" runat="server" /></label></td>
<td class="typecontrol">
<ui:select id="ledtPicklistDefault" name="ledtPicklistDefault" runat="server" />
</td>
<td></td>
</tr>
</table>
</td>
</tr>

<tr id="lookupParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />
<col />
<tr class="param">
<td id="selectTargetLabel" style="table-layout:fixed;" class="ms-crm-Field-Required typelabel"><label for="selectTarget"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.ReferencedEntity" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td class="typecontrol" ><ui:Select id="selectTarget" OnChange="onTargetChange();" runat="server"/></td>
<td></td>
</tr>
<tr class="param">
<td id="txtRelationshipNameLabel" style="table-layout:fixed;" class="ms-crm-Field-Required"><label for="txtRelationshipName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.RelationshipName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td width="100%" >
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td>
<div id="txtPrefix" class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
</td>
<%
}
%>
<td width="100%">
<ui:TextBox id="txtRelationshipName" runat="server"/>
</td>
</tr>
</table>
</td>
<td></td>
</tr>
<tr class="param">
<td class="control" colspan="2">
<% if(_mode == Mode.Update)
{
%>

<A class="ms-crm-Nav-Subarea-Link" onclick="configureRelationship();" tabIndex="0" href="#" target="_self">
<SPAN class="ms-crm-MenuItem-Text" tabIndex="-1">
<loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.LookupConfiguration" runat="server"/>
</SPAN>
</A>
<%} %>
</td>
<td></td>
</tr>
</table>
</td>
</tr>

<tr id="customerParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />
<col />
<tr class="param">
<td id="relationshipNames" style="table-layout:fixed;" class="ms-crm-Field-Required"><label for="txtRelationshipName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.CustomerRelationshipNames" runat="server"/></label></td>
<td></td>
<td></td>
</tr>
<tr class="param">
<td id="txtAccountRelationshipNameLabel" style="table-layout:fixed;" class="ms-crm-Field-Required"><label for="txtAccountRelationshipName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.CustomerAccountRelationshipName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td width="100%" >
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td>
<div id="txtPrefix" class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
</td>
<%
}
%>
<td width="100%">
<ui:TextBox id="txtAccountRelationshipName" runat="server"/>
</td>
</tr>
</table>
</td>
<td></td>
</tr>
<tr class="param">
<td class="control" colspan="2">
<% if(_mode == Mode.Update)
{
%>

<A class="ms-crm-Nav-Subarea-Link" onclick="configureRelationship('account');" tabIndex="0" href="#" target="_self">
<SPAN class="ms-crm-MenuItem-Text" tabIndex="-1">
<loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.LookupConfiguration" runat="server"/>
</SPAN>
</A>
<%} %>
</td>
<td></td>
</tr>
<tr class="param">
<td id="txtContactRelationshipNameLabel" style="table-layout:fixed;" class="ms-crm-Field-Required"><label for="txtContactRelationshipName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.CustomerContactRelationshipName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td width="100%" >
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td>
<div id="txtPrefix" class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
</td>
<%
}
%>
<td width="100%">
<ui:TextBox id="txtContactRelationshipName" runat="server"/>
</td>
</tr>
</table>
</td>
<td></td>
</tr>
<tr class="param">
<td class="control" colspan="2">
<% if(_mode == Mode.Update)
{
%>

<A class="ms-crm-Nav-Subarea-Link" onclick="configureRelationship('contact');" tabIndex="0" href="#" target="_self">
<SPAN class="ms-crm-MenuItem-Text" tabIndex="-1">
<loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.LookupConfiguration" runat="server"/>
</SPAN>
</A>
<%} %>
</td>
<td></td>
</tr>
</table>
</td>
</tr>

<tr id="statusParams" style="display: none;">
<td>

<div id="divStatesXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(statusXml) %></div>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />

<tr class="param">
<td id="selStateLabel"><label for="selState"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.State" runat="server" /></label></td>
<td width="100%">
<ui:select id="selState" onchange="onStateChange();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" cellspacing="0" cellpadding="0">

<tr class="param">
<td>
<app:applistedit id="ledtStatusValues" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>

<tr id="ntextParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />

<tr class="param" style="display: none">
<td id="selMemoFormatLabel" class="ms-crm-Field-Required"><label for="selMemoFormat"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selMemoFormat" onchange="onMemoFormatChange();" runat="server" />
</td>
</tr>

<tr class="MemoParams param" style="display: none;">
<td id="numMaxMemoLenLabel" class="ms-crm-Field-Required"><label for="numMaxMemoLen"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxLen" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxMemoLen" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="nvarcharParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />

<tr class="param">
<td id="selStringFormatLabel" class="ms-crm-Field-Required"><label for="selStringFormat"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selStringFormat" onchange="onStringFormatChange();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMaxStringLenLabel" class="ms-crm-Field-Required"><label for="numMaxStringLen"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxLen" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxStringLen" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="moneyParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />

<tr class="param">
<td id="selMoneyPrecisionLabel" class="ms-crm-Field-Required"><label for="selMoneyPrecision"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Precision" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selMoneyPrecision" onchange="onMoneyPrecisionChange();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMinMoneyValueLabel" class="ms-crm-Field-Required"><label for="numMinMoneyValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MinValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMinMoneyValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>

<tr class="param">
<td id="numMaxMoneyValueLabel" class="ms-crm-Field-Required"><label for="numMaxMoneyValue"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxValue" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:number id="numMaxMoneyValue" OnChange="LinkedAttributeDataChanges();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="imeParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />

<tr class="param">
<td id="selIMEModeLabel" class="ms-crm-Field-Required"><label for="selIMEMode"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.IMEMode" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selIMEMode" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr id="PhoneticGuideParams" style="display: none;">
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width: 135px" />
<col />
<% if(Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled("PhoneticBasedSearch", Microsoft.Crm.Application.Security.UserInformation.Current) == true) { %>
<tr class="param">
<td id="selStringPhoneticLabel" class="ms-crm-Field-Required"><label for="selStringPhonetic"><loc:text resourceid="SystemCustomization.ManageAttributePage.TypeSection.Labels.Phonetic" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td width="100%">
<ui:select id="selStringPhonetic" runat="server" AutoRegisterClientComponent = "false"/>
<script type="text/javascript">
Sys.Application.add_init(function () { crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get('selStringPhonetic')); });
</script>
</td>
</tr>
<% } %>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr height="25px" id="picklistParams_section" style="display: none;">

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<loc:text resourceid="SystemCustomization.ManageAttributePage.OptionSetSections.Title" runat="server" />
</td>
</tr>
<tr id="picklistParams_control" style="display: <%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(optionSetVisibility)%>;">
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />

<tr class="param">
<td colspan="2">
<app:apppicklistedit id="ledtPicklistValues" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr></tr>
<tr id="primaryEmailSection" style="display: none;" runat="server">
<td>
<img src="/_imgs/ico/16_info.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='InfoIcon.AltTag' runat='server'/>" />
<loc:text Encoding='HtmlAttribute' resourceid="SystemCustomization.ManageAttributePage.PrimaryEmailAddressText" runat="server" />
</td>
</tr>
<tr class="param" id= "dynamicToolTip" runat="server" style="display: none;">
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.DateTimeField.Dynamic_Behavior_Tooltip" runat="server" /></span>
</td>
</tr>
<tr class="param" id= "dateOnlyToolTip" runat="server" style="display: none;">
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.DateTimeField.DateOnly_Behavior_ToolTip" runat="server" /></span>
</td>
</tr>
<tr class="param" id= "staticTimeZoneInvariantToolTip" runat="server" style="display: none;">
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.DateTimeField.StaticTimeZoneInvariant_Behavior_ToolTip" runat="server" /></span>
</td>
</tr>
<tr class="param" id= "dateOnlyToolTipForUpdate" runat="server" style="display: none;">
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.DateTimeField.DateOnly_Behavior_ToolTip_ForUpdate" runat="server" /></span>
<a style="vertical-align: middle;" target="_blank" rel="noopener noreferrer" href="<%=CurrentResourceManager.GetString("ManageAttribute.aspx_Link_DateTime")%>" class="help_link">
<loc:Text ResourceId="ManageAttribute.aspx_Text_DateTime" runat="server"/>
</td>
</tr>
<tr class="param" id= "staticTimeZoneInvariantToolTipForUpdate" runat="server" style="display: none;">
<td colspan="3">
<img style="vertical-align: middle;" src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<span style="vertical-align: middle;"><loc:text resourceid="SystemCustomization.DateTimeField.StaticTimeZoneInvariant_Behavior_ToolTip_ForUpdate" runat="server" /></span>
<a style="vertical-align: middle;" target="_blank" rel="noopener noreferrer" href="<%=CurrentResourceManager.GetString("ManageAttribute.aspx_Link_DateTime")%>" class="help_link">
<loc:Text ResourceId="ManageAttribute.aspx_Text_DateTime" runat="server"/>
</td>
</tr>




<tr height="25px" runat="server" id="DataPropagationSectionHeaderRow">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
<loc:text resourceid="SystemCustomization.ManageAttributePage.DataPropagationSection.Title" runat="server" />
</td>
</tr>
<tr>
<td>

<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<col style="width:135px" />
<col />
<col style="width:135px" class="FormSection_WriteColumnHeaders_col" />
<col />
<tr class="param" id= "linkedAttributeRow1" runat="server">
<td colspan="4" id="tdDataPropagationSectionDetails">
</td>
</tr>

<tr class="param" id="linkedAttributeRow2" runat="server">
<td id="tdDataPropagationSectionLinkedFieldLabel"><label for="txtLinkedAttributeName"><asp:Label ID="labelLinkedAttributeName" runat="server"/></label></td>
<td id="tdLinkedAttributeName">
<ui:textbox id="txtLinkedAttributeName" runat="server" />
</td>
<td></td>
<td></td>
</tr>

<tr class="param" id="linkedAttributeRow3" runat="server">
<td class="" valign="top"><label for="selectLinkedAttribute"><loc:text resourceid="SystemCustomization.ManageAttributePage.DataPropagationSection.Labels.SelectField" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td>
<ui:select id="selectLinkedAttribute" onchange="onLinkedAttributeChange();" runat="server" />
</td>
<td></td>
<td></td>
</tr>

<tr class="param" id="linkedAttributeRow4" style="display:none" runat="server">
<td id="txtNewAttributeNameLabel" style="vertical-align: top"><label for="txtNewAttributeName"><loc:text resourceid="SystemCustomization.ManageAttributePage.DataPropagationSection.Labels.DisplayName" runat="server" /></label></td>
<td>
<ui:textbox id="txtNewAttributeName" runat="server" />
</td>
<td colspan="2">
<ui:button id="buttonValidate" resourceid="SystemCustomization.ManageAttributePage.DataPropagationSection.Button.Validate" onclick="onValidateClick();" runat="server" />
</td>
</tr>
<tr class="param" id="linkedAttributeRow5">
<td colspan="3">
<cnt:appnotifications id="notifications" runat="server" />
</td>
<td></td>
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



<div id="divBusinessRules" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(
Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>"
id="ifrmBisRules" name="ifrmBisRules" class="container"
url="<%=businessRuleUrl %>"
allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
</div>




<div class="ms-crm-Form-StatusBar" style="position:absolute; bottom:0px; left:0px; right:0px;"></div>
</div>

</div>

</body>
</html>