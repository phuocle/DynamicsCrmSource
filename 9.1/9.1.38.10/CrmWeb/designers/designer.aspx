<%-- 
Designer ASPX page that orchestrates designer app flow.

--%>
<%@ Page ContentType="text/html" language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Designers.DesignerPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html <% if (this.IsRTL) { %> dir="rtl"<% } %> lang="<%= this.TwoCharacterLanguageCode %>">
<head>
	<base href="/designers/Designer.aspx" />
	<meta http-equiv="x-ua-compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="/pa_favicon.ico" />

	<% this.BuildVersion  = "9100380010"; %>

	<title><%= this.GetPageTitle()  %></title>

	<link rel="stylesheet" href="<%= this.GetWebResourcePath("Common/Styles/Common.css") %>" />
	<% if (this.IsRTL) { %>
		<link rel="stylesheet" href="<%= this.GetWebResourcePath("Common/Styles/Common.rtl.css") %>" />
	<% } %>

	<%= this.InjectDesignerStyles() %>
	<link href="/_controls/navbar/customheadernavbar.css.aspx" rel="stylesheet" type="text/css" />

	<script type="text/javascript">
		// This logic needs to move to the App Interface layer
		var orgName = "<%= orgName %>";
		var IsOnlineOrIfd = "<%= isOnlineOrIfd %>";
		var isPathBasedUrl = "<%= isPathBasedUrl %>";
		var lCID = "<%= lCID %>";
	</script>

	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/jquery_2.2.3.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/Angular/angular.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/Angular/angular_aria.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/Angular/angular_ui_router.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/Sdk.Soap.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/moment.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Common/Scripts/Common.js") %>"></script>
	<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/stacktrace_with_promises_and_json_polyfills.js") %>"></script>

	<script type="text/javascript" src="/_static/_common/scripts/react_15.2.0.min.js"></script>
	<script type="text/javascript" src="/_static/_common/scripts/react_dom_15.2.0.min.js"></script>
	
	<% if((this.IsPerfTrackingEnabled) || (isOnlineOrIfd)) { %>
		<script type="text/javascript" src="<%= this.GetWebResourcePath("PerformanceTools/Scripts/PerformanceTools.js") %>"></script>
		<script type="text/javascript" src="<%= this.GetWebResourcePath("Scripts/aria-webjs-sdk-1.8.3.js") %>"></script>
		<script type="text/javascript" src="<%= this.GetWebResourcePath("Telemetry/Scripts/Telemetry.js") %>"></script>
	<% } %>

	<!-- Inject Designer Specific scripts -->
	<%= this.InjectDesignerScripts() %>


	<script>
		<%= this.InjectAngularModule() %>
		angular.module("Mscrm.Designers.DesignerApp").value("traceLevel", <%= (int) this.TraceLevel %>);
		angular.module("Mscrm.Designers.DesignerApp").value("initialBreadcrumb", <%= this.InjectInitialBreadcrumb()%>);
		angular.module("Mscrm.Designers.DesignerApp").value("resourceStrings", <%= this.InjectResourceStrings()%>);
		angular.module("Mscrm.Designers.DesignerApp").value("designerConfigs", <%= this.InjectEmbeddedDesignerConfigs()%>);
		angular.module("Mscrm.Designers.DesignerApp").value("dateTimeFormatInfo", <%= this.InjectDateTimeFormatInfo()%>);
		angular.module("Mscrm.Designers.DesignerApp").controller("mscrmBootstrapController", Mscrm.Designers.Common.Bootstrap.BootstrapController);
		angular.module("Mscrm.Designers.DesignerApp").value("solutionId", "<%= this.SolutionId.ToString() %>");
		angular.module("Mscrm.Designers.DesignerApp").value("solutionUniqueName", "<%= this.SolutionUniqueName.ToString() %>");
		angular.module("Mscrm.Designers.DesignerApp").value("sessionInfo", <%= this.InjectSessionInfo()%>);
		angular.module("Mscrm.Designers.DesignerApp").value("solutionPublisherIdPrefix", "<%= this.SolutionPublisherIdPrefix.ToString() %>");
		angular.module("Mscrm.Designers.DesignerApp").value("orgSettings", <%= this.InjectOrgSettings() %>);
		<% if (this.GetStartUpRoute() != string.Empty) { %>
		if (location.hash == ''){
			location.hash = <%= @"'" + this.GetStartUpRoute() + @"'"%>;
		}
		<% } %>
 		
		angular.module("Mscrm.Designers.DesignerApp").controller('bannerController', function($scope) {
			$scope.hideBanner = Mscrm.Designers.Common.HtmlTemplateManagerBase.templateMap.data['mscrmBannerControl'] !== '<div style="height: 48px"></div>';
		});
	</script>

</head>

<body ng-app ="Mscrm.Designers.DesignerApp" class="ng-cloak" ng-controller="mscrmBootstrapController as baseController" mscrm-page-Level-section-navigation-shortcut>
		<div ng-controller="bannerController" ng-show="!hideBanner">
			<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server" />
		</div>
		<div ui-view style="height:100%"></div>	
		<mscrm-modal-dialog></mscrm-modal-dialog>
</body>

</html>