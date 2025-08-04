<!DOCTYPE html />
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.AddLocationPage" %>

<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<html>
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />

<style type="text/css">
td.sectionHeader
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

td.sectionSubHeader
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.8pt.font_size")%>;
}

html {
overflow: auto;
}
</style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">
<%if(canCreateFolder)
{%>
<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
<col width="20%" />
<col width="25%" />
<col width="55%"/>
<tr>
<td class="sectionHeader">
<loc:Text ResourceId="DocumentManagement.AddLocation.EnterName.Label" runat="server" />
</td>
<td colspan="2" style="padding-left:10">
<input type="text" maxlength="160" id="locationNameText" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(locationNameTextValue)%>" />
</td>
</tr>
<tr>
<td colspan="3">&nbsp;</td>
</tr>
<tr>
<td class="sectionHeader">
<loc:Text ResourceId="DocumentManagement.AddLocation.SectionHeader" runat="server" />
</td>
<td colspan="2">
<input class="ms-crm-RadioButton" type="radio" id="absoluteUrl" name="urlType" checked="checked" />
<label for="absoluteUrl"><loc:Text ResourceId="DocumentManagement.AddLocation.SharePointLocation.Label" runat="server" /></label>
</td>
</tr>
<tr id="absoluteUrlTextRow" runat="server" >
<td>&nbsp;</td>
<td colspan="2" style="padding-left:10">
<sdk:UrlControl id="absoluteUrlTextFullDialog" AutoRegisterClientComponent="false" runat="server" />
</td>
</tr>
<tr>
<td colspan="3">&nbsp;</td>
</tr>
<tr id="Tips">
<td>&nbsp;</td>
<td colspan="2" style="padding-left:10">
<loc:Text ResourceId="DocumentManagement.AbsoluteUrl.Tip" runat="server" />
</td>
</tr>
<tr>
<td colspan="3">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td colspan="2">
<input class="ms-crm-RadioButton" type="radio" id="relativeUrl" name="urlType" runat="server" />
<%if(mode == AddLocationDialogMode.Add)
{%>
<label for="relativeUrl">
<loc:Text ResourceId="DocumentManagement.AddLocation.NewLocation.Label" runat="server" />
</label>
<% } else {%>
<label for="relativeUrl">
<loc:Text ResourceId="DocumentManagement.EditLocation.NewLocation.Label" runat="server" />
</label>
<% } %>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td style="padding-left:20">
<label for="locationLookup"><loc:Text ResourceId="DocumentManagement.AddLocation.ParentURL.Label" runat="server" /></label>
</td>
<td>
<sdk:LookupControl ID="locationLookup" AccessibilityLabelResourceId="DocumentManagement.AddLocation.ParentURL.Label" LookupStyle="single" AutoRegisterClientComponent="false" runat="server" />
</td>
</tr>
<tr style="padding-top:3">
<td>&nbsp;</td>
<td style="padding-left:20">
<label for="folderNameText"><loc:Text ResourceId="DocumentManagement.AddLocation.Folder.Label" runat="server" />
</td>
<td>
<input type="text" id="folderNameText" runat="server" />
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td style="padding-left:5" colspan="2" align="left">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td style="padding-left:20" colspan="2" align="left">
<img id="errorImage" style="display:none;vertical-align:middle" alt="" src="/_imgs/error/notif_icn_crit16.png" />&nbsp;<label id="errorMessageLabel"></label>
</td>
</tr>
<tr id="showProgress" style="display: none; padding-left:20; padding-top:3;">
<td>&nbsp;</td>
<td colspan="2" align="center">
<img alt="" src="/_imgs/ico/16_progress.gif" />
<br />
<loc:Text ResourceId="DocumentManagement.AddLocation.Loading" runat="server"/>
</td>
</tr>
</table>
<% } else {%>
<table cellpadding="0" cellspacing="0" width="100%">
<col width="20%" />
<col width="80%" />
<tr>
<td class="sectionHeader">
<loc:Text ResourceId="DocumentManagement.AddLocation.EnterName.Label" runat="server" />
</td>
<td style="padding-left:10">
<input type="text" maxlength="160" id="locationNameText" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(locationNameTextValue)%>"/>
</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
</tr>
<tr>
<td class="sectionHeader">
<loc:Text ResourceId="DocumentManagement.AddLocation.SectionHeader" runat="server" />
</td>
<td style="padding-left:10">
<label><loc:Text ResourceId="DocumentManagement.AddLocation.SharePointLocation.Label" runat="server" /></label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td style="padding-left:10">
<sdk:UrlControl id="absoluteUrlTextSmallDialog" AutoRegisterClientComponent="false" runat="server" />
</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
</tr>
<tr>
<td colspan="2">
<loc:Text ResourceId="DocumentManagement.AbsoluteUrl.Tip" runat="server" />
</td>
</tr>
</table>
<% } %>
<iframe id="proxyFrame" name="proxyIframe" scrolling="auto" style="display: none">
</iframe>
</frm:DialogForm>
</body>
</html>
