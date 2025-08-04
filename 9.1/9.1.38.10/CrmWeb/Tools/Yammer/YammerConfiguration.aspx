<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.Yammer.YammerConfiguration" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Platform.Sdk.Caching.CacheData" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<title>
<loc:text resourceid="Web.Tools.Yammer.Config.Title" runat="server" />
</title>
<cnt:appheader runat="server" id="crmHeader" />
<script type="text/javascript">
function launchEditRules() {

try {

openUrl(postRuleConfigUrl, false);
}
catch (e) {

window.location.href = Mscrm.CrmUri.create(postRuleConfigUrl).toString();
}


return false;
}

</script>
</head>
<body>
<div id="scrollContainer">
<cnt:yammerconfighandler id="yammerConfigHandler" runat="server"></cnt:yammerconfighandler>
<div class="textBlock configTitle">
<% if (!HasValidConfig) { %>
<div id="disclaimerTitle" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Disclaimer.Title" runat="server" />
</p>
</div>
<% } %>
<div id="configTitle" style='display:<%=HasValidConfig ? "inline" : "none" %>;' tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.PartTitle" runat="server" />
</p>
</div>
</div>

<% if (!HasValidConfig) { %>
<div id="disclaimerPart" class='content'>
<p>
<%=DisclaimerTextWhat%>
</p>
<div class="buttonsDiv">
<%= RenderButtons() %></div>
</div>
<% } %>
<div id="configPart" class='content <%= HasValidConfig ? "" : "hide" %>'>
<div class='validConfigContent'>
<div class="textBlock firstPara" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.Connect" runat="server" />
</p>
</div>
<div class="textBlock secondPara" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.ConnectWhy" runat="server" />
<a target="_blank" href="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Tools.Yammer.Config.LearnMoreLink"))+"&clcid=0x"+CrmCultureInfo.CurrentUICulture.LCID.ToString("X", CultureInfo.InvariantCulture)%>">
<loc:text resourceid="Web.Tools.Yammer.Config.LearnMore" runat="server" />
</a>
</p>
</div>
<div class="textBlock noteLanguage" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.NoteLanguage" runat="server" />
</p>
</div>
<div class="textBlock notePara" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.Note" runat="server" />
<a target="_blank" href="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Tools.Yammer.Config.VisitYammerLink"))+"&clcid=0x"+CrmCultureInfo.CurrentUICulture.LCID.ToString("X", CultureInfo.InvariantCulture)%>">
<loc:text resourceid="Web.Tools.Yammer.Config.VisitYammer" runat="server" />
</a>
</p>
</div>
<div class="textBlock noteActivityFeeds" tabindex="0">
<p>

<loc:text resourceid="Web.Tools.Yammer.Config.NoteActivityFeeds" runat="server" />
</p>
</div>
<ol class="list">
<li class="item-auth">
<div id="stepAuthorize" class="list-item">
<p>
<span><a href="#" class="authorizeLink" onpremise="<%=IsOrgOnPremise %>">
<%if(!IsOrgOnPremise) { %>
<loc:text resourceid="Web.Tools.Yammer.Config.Authorize" runat="server" />
<%} else { %>
<loc:text resourceid="Web.Tools.Yammer.Config.AuthorizeOnPremise" runat="server" />
<% } %>
</a></span>
</p>

<div class="textBlock authPara indent overlay-holder" tabindex="0">
<div class='overlay <%= HasValidConfig ? "hide" : "" %>'>
</div>
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.ConnectedToNetwork" runat="server" />
<span class="networkName">
<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(YammerNetworkName) %></span>
</p>
</div>
</div>
</li>
<li class="hide">
<div id="stepSelectNetwork" class="list-item">
<div class='overlay <%= HasValidConfig ? "hide" : "" %>'>
</div>
<div class="spacer">
<loc:text resourceid="Web.Tools.Yammer.Config.SelectNetwork" runat="server" />
</div>
<div tabindex="0">
<loc:text resourceid="Web.Tools.Yammer.Config.YammerNetworkFieldLabel" runat="server" />
<span class="oneNetwork <%= HasValidConfig ? "" : "hide" %>">
<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(YammerNetworkName) %></span>
<select class="networkSelect <%= HasValidConfig ? "hide" : "" %>">
<option value="0">
<loc:text resourceid="Web.Tools.Yammer.Config.SelectFromDropDown" runat="server" />
</option>
</select>
</div>
</div>
</li>
<li class="item-group">
<div id="stepSelectGroup" class="list-item">
<div class='overlay <%= HasValidConfig ? "hide" : "" %>'>
</div>
<div tabindex="0">
<loc:text resourceid="Web.Tools.Yammer.Config.SelectGroup" runat="server" />
</div>
<div class="indent textBlock groupPara">
<p>
<label for="yammerGroupSelect">
<loc:text resourceid="Web.Tools.Yammer.Config.YammerGroupFieldLabel" runat="server" />
</label>
<input class="groupSelect stepSelectGroupDisabledControl" id="yammerGroupSelect" type="text"
value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(SelectedGroup)%>" <%= HasValidConfig ? "" : "disabled" %> >
</p>
</div>
</div>
</li>
<li class="item-security">
<div id="stepSetSecurity" class="list-item">
<div class='overlay <%= HasValidConfig ? "hide" : "" %>'>
</div>
<div tabindex="0">
<loc:text resourceid="Web.Tools.Yammer.Config.SetSecurityLevel" runat="server" />
</div>
<div class="indent">

<div class="radioLabel spacer" tabindex="0">
<input id="radioSecurityPublic" class="securitySelect stepSetSecurityDisabledControl" name="securitySelect" type="radio" value="0" <%= HasValidConfig && Config.YammerPostMethod == YammerPostMethod.Public ? "checked='checked'": "" %>  <%= HasValidConfig ? "" : "disabled" %>  />
<label for="radioSecurityPublic" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.Yammer.Config.SecurityLevelPublicTooltip' runat="server"/>">

<loc:text resourceid="Web.Tools.Yammer.Config.SecurityLevelPublic" runat="server" />
</label>
<div class="ms-crm-Hidden-NoBehavior" aria-describeby="radioSecurityPublic">
<loc:Text Encoding='Html' ResourceId='Web.Tools.Yammer.Config.SecurityLevelPublicTooltip' runat="server"/>
</div>
</div>

<div class="radioLabel" tabindex="0">
<input id="radioSecurityPrivate" class="securitySelect stepSetSecurityDisabledControl" name="securitySelect" type="radio" value="1" <%= HasValidConfig && Config.YammerPostMethod == YammerPostMethod.Private ? "checked='checked'" : "" %>  <%= HasValidConfig ? "" : "disabled" %>  />
<label for="radioSecurityPrivate" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.Yammer.Config.SecurityLevelPrivateTooltip' runat="server"/>">
<loc:text resourceid="Web.Tools.Yammer.Config.SecurityLevelPrivate" runat="server" />
</label>
<div class="ms-crm-Hidden-NoBehavior" aria-describeby="radioSecurityPrivate">
<loc:Text Encoding='Html' ResourceId='Web.Tools.Yammer.Config.SecurityLevelPublicTooltip' runat="server"/>									</div>
</div>
</div>
</div>
</li>
</ol>
</div>
<div class='footer <%= HasValidConfig ? "" : "hide" %>'>
<div class="textBlock congratsTitle" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.Yammer.Config.Congrats" runat="server" />
</p>
</div>
<div class="textBlock congratsFirstPara">
<p>
<a href="#" onclick="javascript:launchEditRules();">
<loc:text resourceid="Web.Tools.Yammer.Config.EditMessageRules" runat="server" />
</a>
<span tabindex="0"><loc:text resourceid="Web.Tools.Yammer.Config.SelectMessages" runat="server" /></span>
<a target="_blank" href="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Tools.Yammer.Config.YammerCorporateLink"))+"&clcid=0x"+CrmCultureInfo.CurrentUICulture.LCID.ToString("X", CultureInfo.InvariantCulture)%>">
<loc:text resourceid="Web.Tools.Yammer.Config.LearnMore" runat="server" />
</a>
</p>
</div>
<div class="textBlock congratsSecondPara" tabindex="0">
<p>
<%= CongratsSecondParaText %>
</p>
</div>
</div>
</div>
</div>
</body>
</html>
