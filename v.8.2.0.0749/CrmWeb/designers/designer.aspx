<%@ Page ContentType="text/html" language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Designers.DesignerPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html <% if (this.IsRTL)
         { %> dir="rtl"<% } %> lang="<%= this.TwoCharacterLanguageCode %>">
<head>
    <base href="/designers/Designer.aspx"/>
    <meta http-equiv="x-ua-compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="shortcut icon" href="/favicon.ico"/>

    <% this.BuildVersion = "8200000749"; %>

    <title><%= this.GetPageTitle() %></title>

    <link rel="stylesheet" href="/designers/Common/Styles/Common.css?v=8200000749"/>
    <% if (this.IsRTL)
       { %>
        <link rel="stylesheet" href="/designers/Common/Styles/Common.rtl.css?v=8200000749"/>
    <% } %>

    <%= this.InjectDesignerStyles() %>

    <script type="text/javascript">

        var orgName = "<%= orgName %>";
        var IsOnlineOrIfd = "<%= isOnlineOrIfd %>";
        var lCID = "<%= lCID %>";
    </script>

    <script type="text/javascript" src="/designers/Scripts/jquery-2.2.3.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/Angular/angular.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/Angular/angular-aria.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/Angular/angular-ui-router.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/Sdk.Soap.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/moment.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Common/Scripts/Common.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Scripts/stacktrace-with-promises-and-json-polyfills.js?v=8200000749"></script>
    <script type="text/javascript" src="/designers/Framework/Scripts/Framework.js?v=8200000749"></script>

    <% if ((this.IsPerfTrackingEnabled) || (isOnlineOrIfd))
       { %>
        <script type="text/javascript" src="/designers/Perf/Scripts/Perf.js?v=8200000749"></script>
        <script type="text/javascript" src="/designers/DesignerTelemetry/Scripts/DesignerTelemetry.js?v=8200000749"></script>
    <% } %>


    <%= this.InjectDesignerScripts() %>


    <script>
        <%= this.InjectAngularModule() %>
        angular.module("Mscrm.Designers.DesignerApp").value("traceLevel", <%= (int) this.TraceLevel %>);
        angular.module("Mscrm.Designers.DesignerApp").value("initialBreadcrumb", <%= this.InjectInitialBreadcrumb() %>);
        angular.module("Mscrm.Designers.DesignerApp").value("resourceStrings",
            <%= this.InjectResourceStrings(@"all") %>);
        angular.module("Mscrm.Designers.DesignerApp").value("designerConfigs",
            <%= this.InjectEmbeddedDesignerConfigs() %>);
        angular.module("Mscrm.Designers.DesignerApp").value("dateTimeFormatInfo",
            <%= this.InjectDateTimeFormatInfo() %>);
        angular.module("Mscrm.Designers.DesignerApp")
            .controller("mscrmBootstrapController", Mscrm.Designers.Common.Bootstrap.BootstrapController);
        angular.module("Mscrm.Designers.DesignerApp").value("solutionId", "<%= this.SolutionId.ToString() %>");
        angular.module("Mscrm.Designers.DesignerApp").value("solutionUniqueName",
            "<%= this.SolutionUniqueName.ToString() %>");
        angular.module("Mscrm.Designers.DesignerApp").value("sessionInfo", <%= this.InjectSessionInfo() %>);
        angular.module("Mscrm.Designers.DesignerApp").value("solutionPublisherIdPrefix",
            "<%= this.SolutionPublisherIdPrefix.ToString() %>");
        <% if (this.GetStartUpRoute() != string.Empty)
           { %>
        if (location.hash == '') {
            location.hash = <%= @"'" + this.GetStartUpRoute() + @"'" %>;
        }
        <% } %>
    </script>

</head>

<body ng-app="Mscrm.Designers.DesignerApp" class="ng-cloak" ng-controller="mscrmBootstrapController as baseController" mscrm-page-Level-section-navigation-shortcut>
<div ui-view style="height: 100%"></div>
<mscrm-modal-dialog></mscrm-modal-dialog>
</body>

</html>