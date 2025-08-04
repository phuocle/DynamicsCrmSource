<%-- 
Template for a page which can execute server side code. This page is loaded as part of the authentication flow and can be used to get 
additional information from the server which are not available through the SDK.

NOTE: This page is loaded in both tablet and phone clients, and therefore any changes made here
should be verified to work in both these apps.
--%>
<%@ Page ContentType="text/html" language="c#" Inherits="Microsoft.Crm.Web.InteractionCentricDashboardPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<script type="text/javascript">
		var __pageStartDate = Date.now();

		// polyfill window.performance APIs needed for performance markers
		if (!window.performance) { window.performance = {}; }
		if (!window.performance.now) {
			window.performance.now = function () {
				return Date.now() - __pageStartDate;
			}
		}

		// save page start time
		var PageLoadStartTime = (window.performance.timing && window.performance.timing.navigationStart) || __pageStartDate;

		var _helpUrl = "<%= helpUrl %>";

		var _initializing = "<%= UserEducationLocalizedStrings[initializing] %>";
		var _ieSpecificMsg = "<%= UserEducationLocalizedStrings[ieSpecificMessage] %>";
		var _safariSpecificMsg = "<%= UserEducationLocalizedStrings[safariSpecificMessge] %>";
		var _userEducationHeader = "<%= UserEducationLocalizedStrings[headerTitle] %>";
		var _tip1 = "<%= UserEducationLocalizedStrings[tip1] %>";
		var _tip2 = "<%= UserEducationLocalizedStrings[tip2] %>";
		var _tip3 = "<%= UserEducationLocalizedStrings[tip3] %>";
		var _tip1Heading = "<%= UserEducationLocalizedStrings[tip1Heading] %>";
		var _tip2Heading = "<%= UserEducationLocalizedStrings[tip2Heading] %>";
		var _tip3Heading = "<%= UserEducationLocalizedStrings[tip3Heading] %>";
		var _syncStep1 = "<%= UserEducationLocalizedStrings[syncStep1] %>";
		var _syncStep2 = "<%= UserEducationLocalizedStrings[syncStep2] %>";
		var _syncStep3 = "<%= UserEducationLocalizedStrings[syncStep3] %>";
		var _syncStep4 = "<%= UserEducationLocalizedStrings[syncStep4] %>";
		var _syncStep5 = "<%= UserEducationLocalizedStrings[syncStep5] %>";
		var noPermissionMessage = "<%= noPermissions %>";

		var _fullText = _userEducationHeader + " " + _tip1Heading + " " + _tip1 + " " + _tip2Heading + " " + _tip2 + " " + _tip3Heading + " " + _tip3;

		<%= errorMessageVariables %>

		var _isInteractionCentricClient = true;
		var ISHNavigationEvents = {};

		// Inlined App Data flag
		var MetadataGenerationIframeFinished = false;
		function OnMetadataIFrameLoadFinished() {
			MetadataGenerationIframeFinished = true;
			try {
				Microsoft.Crm.Client.Application.App.StartPage.onInlinedAppDataLoaded();
			}
			catch (err) { }
		}

		// If SAM table metadata is invalid or being regenerated, don't use background sync.
		// Do sync before app load in that case
		var MetadataInSAMTableInvalid = <%= isInvalidMetadataState.ToString().ToLower() %>;
	</script>
	<title><loc:Text ResourceId="Brand_CRM" runat="server"/></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<meta name="apple-mobile-web-app-capable" content="yes">

	<!-- css -->
	<link href="resources/styles/ishLoadingCssDependencies.css?v=9100380010" rel="stylesheet" type="text/css" />
	<link href="resources/styles/ishCssDependencies.css?v=9100380010" rel="stylesheet" type="text/css" />
</head>
<body>
	<% if (isIFrameNeeded) { %>
		<iframe id="engagementhubMetadata" style="display: none;" src="<%= engagementhubMetadataUrl %>" onload="OnMetadataIFrameLoadFinished()"></iframe>
	<% } %>

	<script type="text/javascript">var JsLoadStartTime = window.performance.now();</script>

	<!-- Script libraries -->
	<script type="text/javascript" src="scripts/ishOssDependencies.js?v=9100380010"></script>
	<script type="text/javascript" src="scripts/MicrosoftAjax.js?v=9100380010"></script>
	<script type="text/javascript">
		if (jQuery.fn.jquery >= "1.9")
		{
			$.browser = "";
		}
	</script>

	<div id="WarmLoadLoadingSection" class="ShowProgress">
	<% if (isColdLoad) { %>
		<div id="WarmLoadCRMUILoading" class="indeterminateProgressRing rootViewControlLoadingRing" style="display: none">
	<% } else { %>
		<div id="WarmLoadCRMUILoading" class="indeterminateProgressRing rootViewControlLoadingRing">
	<% } %>
			<div class="progressDot"></div>
			<div class="progressDot"></div>
			<div class="progressDot"></div>
			<div class="progressDot"></div>
			<div class="progressDot"></div>
		</div>
	</div>
	<!-- !! Must be kept consistent with the InteractionCentricUserEducation component !! -->
	<% if (isColdLoad) { %>
		<div id="UserEducation" class="interactionCentricUserEducation" tabindex= "-1" aria-label="Interactive Service Hub">
	<% } else { %>
		<div id="UserEducation" class="interactionCentricUserEducation" style="display: none" tabindex= "-1" aria-label="Interactive Service Hub">
	<% } %>
		<div id="userEducationWrapper">
			<div id="UserEducationHeader" class="interactionCentricUserEducationHeader">
				<label id="UserEducationTitle" class="userEducationTitle"></label>
			</div>
			<div id="UserEducationTips" class="interactionCentricUserEducationTips">
				<div class="helpTip"><label id="UserEducationHelpTip1Heading" class="helpTipHeading"></label><label id="UserEducationHelpTip1" class="helpTipDescription"></label></div>
				<div class="helpTip"><label id="UserEducationHelpTip2Heading" class="helpTipHeading"></label><label id="UserEducationHelpTip2" class="helpTipDescription"></label></div>
				<div class="helpTip helpTipLast"><label id="UserEducationHelpTip3Heading" class="helpTipHeading"></label><label id="UserEducationHelpTip3" class="helpTipDescription"></label></div>
			</div>
			<div class="gifSection">
				<img id="interactionCentricUserEducationImage" class="interactionCentricUserEducationImage" />
			</div>
			
			<div id="ieSafriSpecificMsgWrapper"><div id="infoIcon"></div><span id="ieSafariSpecificMsg"></span></div>
		</div>
		<div class="interactionCentricUserEducationFeedbackSection">
			<div id="LoadingSection" class="loadingSection">
				<div id="SyncProgressIndicatorSection" class="interactionCentricSyncProgressIndicatorSection">
					<label id="SyncProgressIndicator" class="interactionCentricSyncProgressIndicator"></label>
					<label id="SyncProgressIndicatorText" class="interactionCentricSyncProgressIndicatorText"></label>
					<label id="StepProgressIndicator" class="stepProgressIndicator"></label>
				</div>
				<label id="WaitLabel" class="interactionCentricWaitLabel"></label>
				<div id="CRMUILoading" class="indeterminateProgressRing">
					<div class="progressDot"></div>
					<div class="progressDot"></div>
					<div class="progressDot"></div>
					<div class="progressDot"></div>
					<div class="progressDot"></div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		$("#UserEducation").attr("aria-label", _fullText)
		$("#UserEducation").attr("tabindex", -1).focus();
		$("#UserEducationTitle").html(_userEducationHeader);
		$("#UserEducationHelpTip1Heading").html(_tip1Heading);
		$("#UserEducationHelpTip1").html(_tip1);
		$("#UserEducationHelpTip2Heading").html(_tip2Heading);
		$("#UserEducationHelpTip2").html(_tip2);
		$("#UserEducationHelpTip3Heading").html(_tip3Heading);
		$("#UserEducationHelpTip3").html(_tip3);
		$("#WaitLabel").html(_initializing);
		function isIE() {
			var ua = window.navigator.userAgent;
			var old_ie = ua.indexOf('MSIE ');
			var new_ie = ua.indexOf('Trident/');

			if ((old_ie > -1) || (new_ie > -1)) {
				return true;
			}
			return false;
		}

		function isMacSafari() {
			var ua = window.navigator.userAgent;
			if (ua.indexOf("Safari") > -1) {
				// Android and Chrome have Safari in the user string
				if ((ua.indexOf("Chrome") > -1) || (ua.indexOf("Android") > -1)) {
					return false;
				}
				else {
					return (ua.indexOf("Mac") > -1);
				}
			}
		}

		if (isIE() === true || isMacSafari() === true) {

			$("#infoIcon").addClass("symbolFont");
			$("#infoIcon").addClass("iconInfo-symbol");

			if (isIE() === true) {
				$("#ieSafariSpecificMsg").html(_ieSpecificMsg);
			}
			else {
				$("#ieSafariSpecificMsg").html(_safariSpecificMsg);
			}
		}
	</script>

	<!-- CRM Libraries -->
	<script type="text/javascript" src="scripts/ishMocaCoreDependencies.js?v=9100380010"></script>
	<script type="text/javascript" src="scripts/ishViewModelDependencies.js?v=9100380010"></script>
	<script type="text/javascript" src="scripts/ishViewDependencies.js?v=9100380010"></script>
	<script type="text/javascript" src="scripts/react.js?v=9100380010"></script>
	<script type="text/javascript">    var JsLoadEndTime = window.performance.now();</script>

	<!-- Generic Confirm dialog for when the UI framework is not available. Do not use directly, instead use ConfirmDialog.ShowJQueryDialog - this is styled to reflect ConfirmDialog rendered in client context -->
	<!-- !! Must be kept consistent with the ConfirmDialog component and all other htm or aspx files !! -->
	<div id="ConfirmDialog" tabindex="-1" class="popupShadow conductorContent messageDialog-popup-OkCancel information"
		role="dialog" style="z-index: 1002; display:none;" data-id="messageDialog">
		<div class="messageDialog-popupContent">
			<div class="messageDialog-contentContainer">
				<span class="messageDialog-message">
					<span id="ConfirmDialogTitle" class="messageDialog-Title" data-id="messageDialogTitle"></span>
					<div id="ConfirmDialogMessage" class="messageDialog-Message messageDialog-MessageBody" data-id="messageDialogMessage"></div>
				</span>
			</div>
			<div class="messageDialog-actionContainer">
				<span class="messageDialog-buttons">
					<span class="messageDialog-buttonContainer">
						<button id="ConfirmDialogYes" tabindex="-1" class="button dynamicsButton messageDialog_OK_Button" role="button"aria-labelledby="ConfirmDialogYesLabel" data-id="Ok">
							<div class="button-container">
								<span class="button-commandRing"></span>
								<span class="button-label" id="ConfirmDialogYesLabel"></span>
							</div>
						</button>
						<button id="ConfirmDialogNo" tabindex="-1" class="button dynamicsButton messageDialog_Cancel_Button" role="button" aria-labelledby="ConfirmDialogNoLabel" data-id="Cancel">
							<div class="button-container">
								<span class="button-commandRing"></span>
								<span class="button-label" id="ConfirmDialogNoLabel"></span>
							</div>
						</button>
					</span>
				</span>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
		<!-- InteractionCentric Hub - Navigation Event Manager APIs -->
		ISHNavigationEvents.Subscribe = function (handler) {
			return Microsoft.Crm.Client.Core.ViewModels.InteractionCentricNavigationEventManager.get_Instance().AddHandler(handler);
		};

		ISHNavigationEvents.Unsubscribe = function (handler) {
			return Microsoft.Crm.Client.Core.ViewModels.InteractionCentricNavigationEventManager.get_Instance().RemoveHandler(handler);
		};
	</script>

	<!-- Begin MoCA AuthenticationManager Section -->
	<script type="text/javascript">
		function authenticatedPageLoaded() {
			Microsoft.Crm.Client.Core.Framework.AuthenticationManager.get_defaultInstance().onCookieAvailable();
		}
	</script>
	
	<!-- !! Auth elements must be kept consistent with the AuthenticationManager component and all other htm or aspx files !! -->
	<form method="POST" id="authForm" target="authFrame">
		<input type="hidden" name="wa" value="wsignin1.0" />
		<input type="hidden" id = "authToken" name="wresult" value="" />
		<input type="hidden" id="wctx" name="wctx" value="" />
	</form>

	<iframe id="authFrame" name="authFrame" src="" style="display:none"></iframe>
	<!-- End MoCA AuthenticationManager Section -->
	<script type="text/javascript">
		var VERSION_NUMERIC_VALUE = "9100380010";
		var require = {
			urlArgs: "v=" + VERSION_NUMERIC_VALUE,
			waitSeconds: 100
		};
	</script>
	<script type="text/javascript">var RequireJsLoadStartTime = window.performance.now();</script>
	<script type="text/javascript" src="scripts/require.js?v=9100380010" data-main="scripts/main"></script>
</body>
</html>