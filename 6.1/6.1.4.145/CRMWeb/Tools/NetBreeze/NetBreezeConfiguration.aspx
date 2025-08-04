<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.NetBreeze.NetBreezeConfigurationPage" %>

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
<loc:text resourceid="Web.Tools.NetBreeze.Config.Title" runat="server" />
</title>
<cnt:appheader runat="server" id="crmHeader" />
<script>
$P_CRM(window).load(function() {
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.run();
});
</script>
</head>
<body class="provisioning">
<div id="Disclaimer" class="content" runat="server">
<div class="logoOffset">
<div class="title">
<span><loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.Title" runat="server" /></span>
</div>
<div class="claims" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.TextClaims" runat="server" />
</p>
</div>

<div class="bottomButtons">
<button id="acceptDisclaimer" class="basic-button">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.ContinueButton" runat="server" />
</button>
<button id="close" class="basic-button">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.CancelButton" runat="server" />
</button>
</div>
</div>
</div>
<input type="hidden" id="SocialInsightsInstance" runat="server" />
<div id="InstanceSelection" class="content" runat="server" style="display: none;">
<div class="logoOffset">
<div class="title">
<span><loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Title" runat="server" /></span>
</div>
<div class="connect-description" tabindex="0">
<p>
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Description" runat="server" />
</p>
</div>

<div class="instance">
<label for="NetbreezeInstance">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Select" runat="server" />
</label>
<p>
<ui:Select id="NetbreezeInstance" runat="server">
</ui:Select>
<button
id="applyInstance" class="basic-button" disabled="disabled">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ApplyChanges" runat="server" />
</button>
</p>
<div class="solutionUnavailable" id="SolutionUnavailable" style="display: none;" runat="server">
<img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>" />
<span class="solutionUnavailable" tabindex="0">
<loc:text resourceid="Web.Tools.NetBreeze.SolutionUnavailableMessage" runat="server" />
</span>
</div>
</div>
<p class="reset">
<button id="resetNetbreeze" class="basic-button">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetInCRM" runat="server" />
</button>
<br/>
<span tabindex="0">
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetDescription" runat="server" />
</span>
<br/>
<div id="resetStatusMessageSucess" class="resetStatus" style="display: none;" tabindex="0">
<img src="/_imgs/tools/Notification_Confirmation_16.png" />
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetSuccess" runat="server" />
</div>
<div id="resetStatusMessageFailure" class="resetStatus" style="display: none;" tabindex="0">
<img src="/_imgs/tools/Notification_Error_16.png" />
<loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetFailure" runat="server" />
</div>
</p>
</div>
</div>
</body>
</html>
