<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.AppsForCrm.AppForOutlookAdminSettingsPage" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
var cachedIframeHeight;
window.onload = function ()
{
if (!isOutlookHostedWindow())
{
var crmContentPanel = window.parent.$get("crmContentPanel");
var crmTopBar = window.parent.$get("crmTopBar");
if (crmContentPanel)
{
crmContentPanel.className = "crmapp-top";
}
if (crmTopBar)
{
crmTopBar.style.display = "none";
}
var iframe = window.parent.$get("contentIFrame0");
if (iframe)
{
cachedIframeHeight = iframe.style.height;
iframe.style.height = "calc(100% - 50px)";
}
}
var appForCrm = new Mscrm.AppsForCrm.AppsForCrmAdminSettings();
appForCrm.ApplicationOnLoad();
};

$(document).ready(function ()
{
$('body').click(function ()
{
Mscrm.AppsForCrm.AppsForCrmAdminSettings.SetQuickFindViewId();
});
});

$(window).unload(function ()
{
var crmContentPanel = window.parent.$get("crmContentPanel");
var crmTopBar = window.parent.$get("crmTopBar");
if (crmContentPanel)
{
crmContentPanel.className = "crmContentPanel";
crmContentPanel.style.top = "146px";
}
if (crmTopBar)
{
crmTopBar.style.display = "";
}
var iframe = window.parent.$get("contentIFrame0");
if (iframe)
{
iframe.style.height = cachedIframeHeight;
}
});

</script>
</head>
<body id="crmappBody" style="overflow: auto;" tabindex="-1">
<div class="ms-crm-crmAppForOutlook-bodyContainer">
<div style="width: 765px;">
<div id="headerTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-title" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Title' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Title" runat="server" />
</div>
<div style="padding-top: 20px;">
<span id="headerSubTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-subtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Subtitle' runat='server'/>">
<loc:Text ID="subtitle" runat="server" />
</span>
</div>
<div id="ifdServerSettingsError" runat="server" style="padding-top: 30px;">
<div style="margin-left: 30px; padding-right: 50px;">
<img id="erroriconServr" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png" />
<span tabindex="0" style="padding-left: 6px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled" runat="server" />
</span>
<a id="learMoreIFD" href="https://go.microsoft.com/fwlink/p/?LinkID=723354" target="_blank" rel="noopener noreferrer" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink" runat="server" />
</a>
</div>
</div>
</div>
<div id="crmAppbodyContent" name="crmAppbodyContent" style="width: 710px;" runat="server">
<div>
<div id="setupHeader" runat="server" style="padding-top: 30px;">
<span tabindex="0" class="ms-crm-CrmAppForOutlook-settings" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Header' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Setup.Header" runat="server" />
</span>&nbsp;
<span id="showSpan" runat="server">
[&nbsp<a id="showLink" tabindex="0" href="#" class="ms-crm-CrmAppForOutlook-editLink" runat="server"><loc:Text ResourceId="MailApp.Setup.Show" runat="server" /></a>&nbsp]
</span>
</div>
<div id="setupBody" runat="server" style="padding-top: 12px; margin-left: -2px;">
<span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Configuration.Header' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Setup.Configuration.Header" runat="server" />
</span>
<br />
<span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Configuration.Description' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Setup.Configuration.Description" runat="server" />
</span>
<br />
<span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.RegisterApp.Description' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Setup.RegisterApp.Description" runat="server" />
</span>
<div tabindex="0" id="appCommand" runat="server">
</div>
<span>[&nbsp<a id="doneLink" tabindex="0" href="#" class="ms-crm-CrmAppForOutlook-editLink" runat="server"><loc:Text ResourceId="MailApp.Setup.Done" runat="server" /></a>&nbsp]
</span>
</div>
</div>
<div>
<div id="mailAppRequirements" class="ms-crm-CrmAppForOutlook-requirementsBackground">
<div id="requirementsHeader">
<span id="requirementsTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-requirementsTitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Requirements.Title' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Requirements.Title" runat="server" />
</span>
<span id="requirementsSubtitle" tabindex="0" class="ms-crm-CrmAppForOutlook-requirementsSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Requirements.Subtitle' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Requirements.Subtitle" runat="server" />
</span>
</div>
<ol class="ms-crm-CrmAppForOutlook-requirementList">
<li>
<span id="sssRequirementListItem" runat="server" />&nbsp;
<a id="LearnMoreLink" href="https://go.microsoft.com/fwlink/?linkid=2066149" target="_blank" rel="noopener noreferrer" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
<loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server" />
</a>
<br />
<span id="testAndEnableHintText" runat="server" />
</li>
<li>
<span id="securityRoleRequirementListItem" runat="server" />&nbsp;
<a id="LearnMoreLinkSecurityRole" href="https://go.microsoft.com/fwlink/?linkid=2066249" target="_blank" rel="noopener noreferrer" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
<loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server" />
</a>
</li>
</ol>
</div>
<div id="documentationHeader"  style="margin-top: 37px;" runat="server">
<span tabindex="0" class="ms-crm-CrmAppForOutlook-documentationHeader"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Documentation.Header' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Documentation.Header" runat="server"/>
</span>
<br />
<ul class="ms-crm-CrmAppForOutlook-resourceList">
<li id="reviewRequirementListItem" runat="server" style="margin-bottom: 10px;"/>
<li id="exploreUserGuideListItem" runat="server" style="margin-bottom: 10px;"/>
<li id="customizeAppListItem" runat="server" style="margin-bottom: 10px;"/>
<li id="appDashboardListItem" runat="server" style="margin-bottom: 10px;"/>
<li id="sssDashboardListItem" runat="server" style="margin-bottom: 10px;"/>
<li id="troubleshootingListItem" runat="server" />
</ul>
<input type="checkbox" id="autoAddCheckbox" name="autoAddCheckbox" class="ms-crm-CrmAppForOutlook-autoAddCheckbox" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.AutoAdd.Description' runat='server'/>" runat='server'/>
<span class="ms-crm-CrmAppForOutlook-autoAddDescription" id="autoAddDescriptionText" runat="server" />&nbsp;
<span id="seeMoreLink" class="ms-crm-CrmAppForOutlook-seeMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.SeeMore' runat='server'/>">
<loc:Text ResourceId="MailApp.Generic.SeeMore" runat="server" />
</span>
<span id="seeLessLink" class="ms-crm-CrmAppForOutlook-seeMoreLink" style="display: none;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.SeeLess' runat='server'/>">
<loc:Text ResourceId="MailApp.Generic.SeeLess" runat="server" />
</span>
<br />
<span class="ms-crm-CrmAppForOutlook-autoAddTooltip" id="autoAddTooltipText" style="display: none;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.AutoAdd.Tooltip' runat='server'/>">
<loc:Text ResourceId="MailApp.RootPage.Settings.AutoAdd.Tooltip" runat="server" />
</span>
<div class="ms-crm-CrmAppForOutlook-save ms-crm-CrmAppForOutlook-savehover" id="save" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.Save.ButtonText' runat='server'/>">
<span class="ms-crm-CrmAppForOutlook-savetext">
<loc:Text ResourceId="MailApp.RootPage.Settings.Save.ButtonText" runat="server" />
</span>
</div>

</div>
</div>
<div>
<div>
<div>
<div style="padding-top: 15px;">
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col width="70%">
<col width="30%">
<tr>
<td>
<cnt:appviewselector id="crmViewSelector" runat="server" />
</td>
<td>
<cnt:appquickfind id="crmQuickFind" runat="server" />
</td>
</tr>
</table>
</div>
</div>
<div>
<div style="padding-top: 12px;">
<mnu:appgridmenubar id="crmMenuBar" runat="server" />
</div>
</div>
<div>
<div id="gridContainer" class="ms-crm-crmgrid-Container" style="padding-top: 10px;" runat="server">
<cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="true" />
</div>
</div>
</div>
</div>
</div>
</body>
</html>