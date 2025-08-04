<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Entities.UpdateIconsPage"   %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>




<form name="frmIconUpload">
<input type="hidden" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>">
<input type="hidden" id="entityId" name="entityId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(this.EntityId.ToString())%>">
<table width="100%" cellspacing="0" cellpadding="0">




<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom;"><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.GridIconSection.Title" runat="server"/></td>
</tr>
<tr class="secdesc">

<td><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.GridIconSection.Description" runat="server"/></td>
</tr>
<tr>

<td>
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:50%" />
<col style="width:50%" />
<tr>
<td>
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.Labels.InProductionIcon" runat="server"/></td>
<td><img alt="" width="16px" height="16px" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode((System.String.IsNullOrEmpty(_entityMD.IconSmallName)) ? Microsoft.Crm.Application.Utility.CrmUri.Create("/_Common/icon.aspx?objectTypeCode=" + _entityMD.Code + "&iconType=gridIcon&cache=0").ToString() : Microsoft.Crm.Application.Utility.CrmUri.CreateWebResourceUri(Microsoft.Crm.WebResourceConstants.WebResourcePrefix + _entityMD.IconSmallName, Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>"></td>
</tr>
</table>
</td>
<td>
</td>
</tr>
<tr>
<td colspan="2">
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td><label for="iconSmall"><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.Labels.NewIcon" runat="server"/></label></td>
<td><sdk:LookupControl id="iconSmall" AccessibilityLabelResourceId="SystemCustomization.UpdateIconsPage.Labels.NewIcon" DefaultViewId="DCAC5DFC-2EFF-42b3-9A0D-AFF1577533EB" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>




<tr style="height:20px"><td></td></tr>




<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom;"><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.EntityFormsIconSection.Title" runat="server"/></td>
</tr>
<tr class="secdesc">

<td><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.EntityFormsIconSection.Description" runat="server"/></td>
</tr>
<tr>

<td>
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:50%" />
<col style="width:50%" />
<tr>
<td>
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.Labels.InProductionIcon" runat="server"/></td>
<td><img alt="" width="32px" height="32px" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode((System.String.IsNullOrEmpty(_entityMD.IconMediumName)) ? Microsoft.Crm.Application.Utility.CrmUri.Create("/_Common/icon.aspx?objectTypeCode=" + _entityMD.Code + "&iconType=outlookShortcutIcon&cache=0", Microsoft.Crm.Application.Security.UserInformation.Current).ToString() : Microsoft.Crm.Application.Utility.CrmUri.CreateWebResourceUri(Microsoft.Crm.WebResourceConstants.WebResourcePrefix + _entityMD.IconMediumName, Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>"></td>
</tr>
</table>
</td>
<td>
</td>
</tr>
<tr>
<td colspan="2">
<table style="width: 100%;table-layout:fixed;" cellspacing="0" cellpadding="0">
<col style="width:140px" /><col />

<tr class="param">
<td><label for="iconMedium"><loc:Text ResourceId="SystemCustomization.UpdateIconsPage.Labels.NewIcon" runat="server"/></label></td>
<td><sdk:LookupControl id="iconMedium" AccessibilityLabelResourceId="SystemCustomization.UpdateIconsPage.Labels.NewIcon" DefaultViewId="DCAC5DFC-2EFF-42b3-9A0D-AFF1577533EB" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</form>