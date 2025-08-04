<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.WebWizard.InlineWizard" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
.WizardTitle
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
text-align: right;
<%} else {%>
text-align:left;
<%}%>
}
.ms-crm-MastHead-SignIn-Org
{
width: auto;
}
</style>
</head>

<body>
<table class="ms-crm-MastHead" id="LayoutTable" cellpadding="0" cellspacing="0">
<tr>
<td class="ms-crm-MastHead-Logo-Live ms-crm-MastHead-SignIn" id="tdLogoMastHeadBar">
<%= userInfo %>
<span class="ms-crm-MastHead-SignIn">
<loc:Text ResourceId="HomePage_MastHead_UserSignOut_Sep" runat="server" />
</span><span class="ms-crm-MastHead-SignOut" id="tdSignOut">
<%= signOutHtml %>
</span>
</td>
</tr>
<tr><td align="center" valign="top">
<table cellpadding="0" cellspacing="0">
<tr><td>
<div class="WizardTitle">
<loc:Text ResourceId="GettingStarted.Title" runat="server" />
</div>
</td></tr>
<tr><td>
<div id="InlineWizardForm">
<iframe id="inlineWizardContainer" name="inlineWizardContainer" height="100%" width="100%" runat="server" scrolling="no"></iframe>
</div>
</td></tr>
</table>
</td>
</tr>
</table>
</body>
</html>
