<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Entities.ManageEntityPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>




<head>


<cnt:AppHeader id="crmHeader" runat="server" />


<script type="text/javascript" language="javascript">

var _bCreate = <%= _mode == Mode.Create ? "true" : "false"%>;
var _sEntityId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_entityId) %>;

function onClickEnableDupCheck()
{
<%if(_entityMD != null && _InitialValueEnableDupCheck == true) {%>
var chkEnableDupCheck = $get('chkEnableDupCheck');
if (chkEnableDupCheck.checked == false)
{
var confirmation = confirm(LOCID_CONFIRM_DISABLE_DEDUP);
if (confirmation == false)
{
chkEnableDupCheck.checked = true;
}
}

<%} %>
}

function onClickEnableAuditCheck()
{
<%if(_entityMD != null) {%>
var chkIsAuditingEnabled = $get('chkIsAuditingEnabled');
if (Mscrm.FormUtility.isControlDirty(chkIsAuditingEnabled))
{
if (chkIsAuditingEnabled.checked == false)
{
var confirmation = confirm(LOCID_CONFIRM_AUDIT_DISABLE);
if (confirmation == false)
{
chkIsAuditingEnabled.checked = true;
}
}
}
if (chkIsAuditingEnabled.checked == false)
{
$get('labelWarningMessageForAudit').style.display = "none";
}
else
{
$get('labelWarningMessageForAudit').style.display = "inline";
}

<%} %>
}

function enableDisableAutoRoute()
{
var _chkAutoRoute = $get('chkAutoRoute');
if( (Mscrm.FormControlInputBehavior.GetBehavior('selOwnershipType').get_dataValue() == _ownershipTypeUserOwned)
&& $get('chkCollaboration').checked == true )
{
_chkAutoRoute.disabled = false;
}
else
{
_chkAutoRoute.disabled = true;
_chkAutoRoute.checked = false;
}

}

function enableDisableMobileClientOptions()
{
var _chkMobileClientEnabled = $get('chkIsEnabledForMobileClient');
var _chkMobileClientReadOnly = $get('chkIsReadOnlyForMobileClient');

if(_chkMobileClientEnabled.checked == true)
{
_chkMobileClientReadOnly.disabled = <%= _defaultIsReadOnlyForMobileClientDisabled ? "true" : "false" %>;
_chkMobileClientReadOnly.checked = <%= _defaultIsReadOnlyForMobileClientChecked ? "true" : "false" %>;
}
else
{
_chkMobileClientReadOnly.disabled = true;
_chkMobileClientReadOnly.checked = false;
}

}

function onhelpkeydown(e)
{
var srcElement = e.target;
if(e.keyCode == 13 && !IsNull(srcElement))
{
e.preventDefault();
XUI.Html.DispatchDomEvent(srcElement, XUI.Html.CreateDomEvent("onclick"));
}
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
width: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width)%>px;
}

div.page
{
position: absolute;
top: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(formHeaderHeight)%>px;
bottom: 24px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width)%>px;
left: 0px;
<% } else { %>
right: 0px;
left: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width)%>px;
<% } %>
margin: 0px 7px 0px 10px;
}

#tabsContent
{
position: absolute;
top: 21px;
left: 0px;
right: 0px;
bottom: 24px;
}

div.tabContent
{
position: absolute;
overflow-y: auto;
overflow-x: hidden;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}

</style>
</head>




<body style="overflow: hidden;">
<form name="frmReload" id="frmReloadId" action="" method="post">
<input type="hidden" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>" />
<input type="hidden" id="pagemode" name="pagemode" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_pageMode)%>" />
</form>

<div class="ms-crm-Form-Layout">



<div id="tr_crmMenuBar" style="height:<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(formHeaderHeight)%>px">
<div id = "div_crmMenuBar" style="display:<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(formHeaderDisplay)%>">
<mnu:AppCustomizationMenuBar id="crmEntityMenuBar" runat="server"/>
</div>
</div>

<div class="ms-crm-Form-Background" style="height: 100%">



<div id="navBarContainer" class="ms-crm-Form-LeftBar">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>




<div id="tdAreas">
<div id="areaForm">



<div id="divInformation" class="page" style="display:inline;">
<div id="informationArea">
<div class="ms-crm-TabBar-Cell">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>

<div id="tabsContent">



<div id="tabGeneral" class="ms-crm-Tab tabContent">
<table width="99%" cellspacing="0" cellpadding="0" style="margin-bottom: 10px">



<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Title" runat="server"/></td>
</tr>



<tr style="height:20px"><td></td></tr>

<tr>

<td>
<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:48%" /><col /><col style="width:48%" />
<tr>

<td>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td id="txtSingularNameLabel" class="ms-crm-Field-Required"><label for="txtSingularName"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.SingularName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtSingularName" OnChange="onSingularNameChange();" TabIndex="1" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtPluralNameLabel" class="ms-crm-Field-Required"><label for="txtPluralName"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.PluralName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtPluralName" TabIndex="2" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtSchemaNameLabel" class="ms-crm-Field-Required"><label for="txtSchemaName"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td>
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td><div class="manageAttribute_div_SchemaName"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div></td>
<%
}
%>
<td width="100%"><ui:TextBox id="txtSchemaName" TabIndex="3" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr class="param">
<td id="selPrimaryImageLabel"><label for="selPrimaryImage"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.PrimaryImage" runat="server"/></label></td>
<td><ui:Select id="selPrimaryImage" TabIndex="4" runat="server"/></td>
</tr>
</table>
</td>

<td>&nbsp;</td>

<td>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td id="selOwnershipTypeLabel" class="ms-crm-Field-Required"><label for="selOwnershipType"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.OwnershipType" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Select id="selOwnershipType" TabIndex="4" onchange="enableDisableAutoRoute();" runat="server"/></td>
</tr>

<tr class="param" >
<td colspan="2">
<ui:CheckBox id="checkIsActivity" OnClick="Mscrm.CustomActivity.onIsActivityCheckBoxClick(this);" TabIndex="5" runat="server"/>
<label id="checkIsActivityLabel" for="checkIsActivity"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.IsActivity" runat="server"/></label>
</td>
</tr>
<tr class="param">
<td colspan="2">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="width:5%">
</td>
<td>
<ui:CheckBox id="checkIsCommunicationActivity" OnClick="Mscrm.CustomActivity.onSurfaceActivityCheckBoxClick(this);" TabIndex="6" runat="server"/>
<label id="checkIsCommunicationActivityLabel" for="checkIsCommunicationActivity"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.IsCommunicationActivity" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
<tr class="param"><td>&nbsp;</td></tr>
</table>
</td>
</tr>

<tr>
<td colspan="3">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" />
<col />
<tr class="param" style="height: 50px;">
<td id="txtDescriptionLabel" style="vertical-align: top"><label for="txtDescription"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.Description" runat="server"/></label></td>
<td><ui:TextArea id="txtDescription" Height="50px" TabIndex="7" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>




<tr style="height:20px"><td></td></tr>




<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.DisplayAreaSection.Title" runat="server"/></td>
</tr>
<tr class="param">

<td>
<table id="tblDisplayAreas" width="100%" cellspacing="0" cellpadding="0" runat="server">
</table>
</td>
</tr>




<tr style="height:20px"><td></td></tr>




<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Title" runat="server"/></td>
</tr>
<tr style="height:10px"><td></td></tr>





<tr>

<td class="ms-crm-Form-Section" style="vertical-align: bottom">
<nobr>
<loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Processes.Title" runat="server"/>
</nobr>
</td>
</tr>
<tr style="height:10px"><td></td></tr>


<td>
<table width="100%" cellspacing="0" cellpadding="0">

<tr>
<td>
<ui:CheckBox id="chkIsBusinessProcessEnabled" TabIndex="22" runat="server"/>
<label id="chkIsBusinessProcessEnabledLabel" for="chkIsBusinessProcessEnabled"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableBusinessProcess" runat="server"/></label>
</td>
</tr>
</table>
</td>
<tr style="height:10px"><td></td></tr>
<tr>

<td class="ms-crm-Form-Section" style="vertical-align: bottom">
<nobr>
<loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.CommunicationCollaboration.Title" runat="server"/>
</nobr>
</td>
</tr>
<tr style="height:10px"><td></td></tr>

<tr class="param">

<td>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td>
<ui:CheckBox id="chkAENotes" TabIndex="25" runat="server"/>
<label id="chkAENotesLabel" for="chkAENotes"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Notes" runat="server"/></label>
</td>
</tr>

<tr>
<td>
<ui:CheckBox id="chkAEActivities" TabIndex="26" runat="server"/>
<label id="chkAEActivitiesLabel" for="chkAEActivities"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Activities" runat="server"/></label>
</td>
</tr>




<tr>
<td>
<ui:CheckBox id="chkCConnections" TabIndex="27" runat="server"/>
<label id="chkCConnectionsLabel" for="chkCConnections"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Connections" runat="server"/></label>
</td>
</tr>

<tr>
<td>
<ui:CheckBox id="chkAEEnableEmail" TabIndex="28" runat="server"/>
<label id="chkAEEnableEmailLabel" for="chkAEEnableEmail"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableEmail" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="EnableMailMergeCheck" TabIndex="30" runat="server"/>
<label id="Label1" for="EnableMailMergeCheck"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MailMerge" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="enableDocumentMgmt" TabIndex="31" runat="server"/>
<label id="enableDocumentMgmtLabel" for="enableDocumentMgmt"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.DocumentMgmt" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="enableAutoCreateAccessTeams" TabIndex="32" runat="server"/>
<label id="enableAutoCreateAccessTeamsLabel" for="enableAutoCreateAccessTeams"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.AutoCreateAccessTeams" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkCollaboration" TabIndex="33" onclick="enableDisableAutoRoute();" runat="server"/>
<label id="chkCollaborationLabel" for="chkCollaboration"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Callaboration" runat="server"/></label>
</td>
</tr>

<tr>
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="width:5%">
</td>
<td>
<ui:CheckBox id="chkAutoRoute" TabIndex="34" runat="server"/>
<label id="chkAutoRouteLabel" for="chkAutoRoute"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableAutoRoute" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr style="height:10px"><td></td></tr>
<tr>

<td class="ms-crm-Form-Section" style="vertical-align: bottom">
<nobr>
<loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.DataServices.Title" runat="server"/>
</nobr>
</td>
</tr>
<tr style="height:10px"><td></td></tr>
<tr >

<td>
<table width="100%" cellspacing="0" cellpadding="0">



<tr>
<td>
<ui:CheckBox id="chkIsQuickCreateEnabled" TabIndex="40" runat="server"/>
<label id="chkIsQuickCreateEnabledLabel" for="chkIsQuickCreateEnabled"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.QuickCreate" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkEnableDupCheck" TabIndex="41" onclick="onClickEnableDupCheck();" runat="server"/>
<label id="chkEnableDupCheckLabel" for="chkEnableDupCheck"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.DuplicateDetection" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkIsAuditingEnabled" TabIndex="42" onclick="onClickEnableAuditCheck();" runat="server" />
<label id="chkIsAuditingEnabledLabel" for="chkIsAuditingEnabled"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.Auditing" runat="server"/></label>
</td>
</tr>
<tr>
<td>
<ui:LabelUI id="labelWarningMessageForAudit" runat="server"/>
</td>
</tr>
<tr class="param" id="labelWarningMessageForGlobalAudit"  runat="server">
<td >
<img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>" />
<loc:text resourceid="SystemCustomization.ManageEntityPage.Audit.Labels.EnableGlobal"
runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr style="height:10px"><td></td></tr>
<tr>

<td class="ms-crm-Form-Section" style="vertical-align: bottom">
<nobr>
<loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.OutlookMobile.Title" runat="server"/>
</nobr>
</td>
</tr>
<tr style="height:10px"><td></td></tr>
<tr >

<td>
<table width="100%" cellspacing="0" cellpadding="0">



<tr>
<td>
<ui:CheckBox id="chkIsEnabledForMobile" TabIndex="50" runat="server"/>
<label id="chkIsEnabledForMobileLabel" for="chkIsEnabledForMobile"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileExpress" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkIsEnabledForMobileClient" onclick="enableDisableMobileClientOptions();" TabIndex="51" runat="server"/>
<label id="chkIsEnabledForMobileClientLabel" for="chkIsEnabledForMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClient" runat="server"/></label>
</td>
</tr>
<tr>
<td>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="width:5%">
</td>
<td>
<ui:CheckBox id="chkIsReadOnlyForMobileClient" TabIndex="52" runat="server"/>
<label id="chkIsReadOnlyForMobileClientLabel" for="chkIsReadOnlyForMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClientReadOnly" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkIsReadingPaneEnabled" TabIndex="54" runat="server"/>
<label id="chkIsReadingPaneEnabledLabel" for="chkIsReadingPaneEnabled"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.ReadingPaneEnable" runat="server"/></label>
</td>
</tr>



<tr>
<td>
<ui:CheckBox id="chkRCOffline" TabIndex="55" runat="server"/>
<label id="chkRCOfflineLabel" for="chkRCOffline"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.Offline" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>



<tr style="height:20px"><td></td></tr>



<tr>
<td>
<loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Legend.Title" runat="server"/>
</td>
</tr>



<tr style="height:20px"><td></td></tr>



<tr>
<td>
<span>
<loc:Text ResourceId="SystemCustomization.HelpContent.Link.Title" runat="server"/>
<a target="_blank" TabIndex="61" href="<%=CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address")%>" class="help_link">
<loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
</a>
</span>
</td>
</tr>
</table>
</div>




<div id="tabAttribute" class="ms-crm-Tab tabContent">
<table width="100%" cellspacing="0" cellpadding="0">
<col style="width:50%" /><col />
<tr>



<td style="vertical-align: top" class="manageEntity_td_LeftColumn">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">



<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Title" runat="server"/></td>
</tr>
<tr>

<td>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:160px" /><col />

<tr class="param">
<td id="txtAttributeDisplayNameLabel" class="ms-crm-Field-Required"><label for="txtAttributeDisplayName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.DisplayName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtAttributeDisplayName" OnChange="onAttributeSchemaNameChange();" runat="server"/></td>
</tr>

<tr class="param">
<td id="txtAttributeSchemaNameLabel" class="ms-crm-Field-Required"><label for="txtAttributeSchemaName"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td>
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<%
if (_mode == Mode.Create)
{
%>
<td><div id="schemaNamePrefix" class="manageAttribute_div_SchemaName"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.LowercaseSchemaName) %></div></td>
<%
}
%>
<td width="100%"><ui:TextBox id="txtAttributeSchemaName" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr class="param">
<td id="selAttributeReqLevelLabel" class="ms-crm-Field-Required"><label for="selAttributeReqLevel"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.RequirementLevel" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Select id="selAttributeReqLevel" runat="server"/></td>
</tr>
</table>
</td>
</tr>




<tr style="height:20px"><td></td></tr>




<tr>

<td id="txtAttributeDescriptionLabel" class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><label for="txtAttributeDescription"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.DescriptionSection.Title" runat="server"/></label></td>
</tr>
<tr class="param" style="height: 120px">

<td><ui:TextArea id="txtAttributeDescription" Height="120px" runat="server"/></td>
</tr>
</table>
</td>




<td style="vertical-align: top" class="manageEntity_td_RightColumn">
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">



<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Title" runat="server"/></td>
</tr>
<tr>

<td>
<table width="100%" style="table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:160px" /><col />

<tr class="param">
<td id="selAttributeTypeLabel" class="ms-crm-Field-Required"><label for="selAttributeType"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.Type" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td width="100%"><ui:Select id="selAttributeType" runat="server"/></td>
</tr>

<tr class="param">
<td id="selAttributeFormatLabel" class="ms-crm-Field-Required"><label for="selAttributeFormat"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td width="100%"><ui:Select id="selAttributeFormat" runat="server"/></td>
</tr>

<tr class="param">
<td id="numMaxAttributeLenLabel" class="ms-crm-Field-Required"><label for="numMaxAttributeLen"><loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxLen" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Number id="numMaxAttributeLen" runat="server"/></td>
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



<div id="divForms" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmForm" name="ifrmForm" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/Forms.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divViews" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmView" name="ifrmView" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/uiElements.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divUIElements" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmUI" name="ifrmUI" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/uiElements.aspx?includeForms=1&entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divVisualizations" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmVisualizations" name="ifrmVisualizations" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/Visualizations.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divAttributes" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmAttributes" name="ifrmAttributes" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Attributes/attributeList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divRelationships1ToN" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmRelationships1ToN" name="ifrmRelationships1ToN" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=0" + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
<div id="divRelationshipsNTo1" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmRelationshipsNTo1" name="ifrmRelationshipsNTo1" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=1"+solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
<div id="divRelationshipsNToN" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmRelationshipsNToN" name="ifrmRelationshipsNToN" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=2"+solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>



<div id="divMappings" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmMappings" name="ifrmMappings" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Mappings/mappingList.aspx?entityId=" + _entityId+solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
<%

if ((_mode != Mode.Create) && _entityMD != null && _entityMD.IsRenameable && !_entityMD.IsCustomEntity)
{
%>



<div id="divMessages" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="ifrmMessages" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../DisplayStrings/displayStringList.aspx?entityId=" + _entityId+solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>
<%
}
%>



<div id="divBusinessRules" class="page">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" id="Iframe1" name="ifrmMappings" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../BusinessRules/businessRulesList.aspx?entityId=" + _entityId+solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
</div>
</div>

</div>
</div>




<div class="ms-crm-Form-StatusBar" style="position:absolute; bottom:0px; left:0px; right:0px;"></div>
</div>

</div>

</body>
</html>
