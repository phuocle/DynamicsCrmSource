try
{
	(function () 
	{
		var appSessionId = '';

		function TryReportInitEvent() {
			try
			{
				// Start a new telemetry session.
				StartNewSession();

				// Discover the telemetry endpoint for the current org.
				var reportingEndpointUrl = DiscoverEndpointAndReportInitEvent();
			}
			catch (e) {
				// Failsafe: Ignore telemetry errors.
				console.log("Error when trying to report init event");
			}
		}

		function DiscoverEndpointAndReportInitEvent() {
			// Build the discovery URL
			var port = window.location.port;
			var host = window.location.hostname;

			var orgUrl = window.location.protocol + '//' + host;
			if (port) {
				orgUrl += ":" + port;
			}

			var discoveryUrl = 'https://crminsights.crm.dynamics.com/api/Discovery/?originUrl=' + orgUrl;

			// Process the discovery response and report the MoCA init event.
			var processResponse = function (xhr) {
				var reportingEndpointUrl = xhr.responseText;
				if (!reportingEndpointUrl || reportingEndpointUrl == '' || reportingEndpointUrl == '""') {
					console.log("Reporting Endpoint not found.");
			
					// Set the Endpoint url of TelemetryReporter as an empty string
					var currentTimeStamp = CreateAndStoreTimestamp();
					Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().InitializeRequestManager('');
					return;
				}
				reportingEndpointUrl = reportingEndpointUrl.replace(/"/g, "")
				reportingEndpointUrl = "https://" + reportingEndpointUrl + "/api/crminsightseventdata"

				ReportAppInitEvent(reportingEndpointUrl);

				// Set the endpoint url of the TelemetryReporter class
				Microsoft.Crm.Client.Core.Framework.TelemetryCore.TelemetryReporter.get_Instance().InitializeRequestManager(reportingEndpointUrl);
			}

			// Start the CORS request for discovery
			MakeCorsRequest(discoveryUrl, "GET", null, processResponse);
		}

		// Report the MoCA Init event to the telemetry endpoint
		function ReportAppInitEvent(reportingEndpointUrl) {
			var currentTimeStamp = CreateAndStoreTimestamp();
			var isAppConfigured = window.localStorage.getItem('IsAppConfigured');
			var clientType = Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_GetClientType();

			var eventValues = {
				StartTime: currentTimeStamp,
				AppVersion: VERSION_NUMERIC_VALUE,
				IsAppConfigured: isAppConfigured == null ? "false" : isAppConfigured,
				ClientType: clientType
			};

			var eventName = 'moca_init';

			// Changing the event name in case of Service Desk context.
			var currentUrl = window.location.href.toLowerCase();
			if (currentUrl.indexOf('engagementhub.aspx') != -1)
			{
				eventName = 'ServiceDeskInit';
			}

			var eventData = [];
			eventData.push(
				{
					ActivityId: appSessionId,
					EventName: eventName,
					EventValues: eventValues
				});

			MakeCorsRequest(reportingEndpointUrl, "POST", eventData);
		}

		function MakeCorsRequest(reportingEndpointUrl, method, data, onResponseAvailable) {
			try {
				var xhr = new XMLHttpRequest();
				xhr.open(method, reportingEndpointUrl);
				if (method === "POST") {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				}
				xhr.setRequestHeader("accept", "application/json");
				xhr.onload = function () {
					if (onResponseAvailable) {
						onResponseAvailable(xhr);
					}
					else {
						console.log("XHR Status: ", xhr.status, "-", xhr.statusText);
					}
				}

				xhr.send(JSON.stringify(data));
			}
			catch (e) {
				console.log("An unexpected error occurred while reporting init event");
			}
		}

		function StartNewSession() {
			var isFirstLoad = true;
			var index = window.location.search.indexOf('isfirstload');
			if (index != -1) {
				var valuePairs = window.location.search.substr(index).split('&',1);
				var valuePair = valuePairs[0].split('=');
				if (valuePair.length == 2 && valuePair[1] == 'false') {
					isFirstLoad = false;
				}
			}

			var sessionIdKey = 'MoCASessionID';

			if (isFirstLoad)
			{
				appSessionId = NewGuid();
				window.localStorage.setItem(sessionIdKey, appSessionId);
			}
			else {
				appSessionId = window.localStorage.getItem(sessionIdKey);
			}
		}

		function CreateAndStoreTimestamp() {
			var timeStamp = new Date();
			var timeStampString = JSON.stringify(timeStamp).replace(/"/g, "");;

			window.localStorage.setItem('MoCAInitTime', timeStampString);
			
			return timeStampString;
		}

		function NewGuid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
				  .toString(16)
				  .substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			  s4() + '-' + s4() + s4() + s4();
		}

		TryReportInitEvent();
	}());
} 
catch (e)
{
	console.log('Unexpected error when initializing telemetry. The failure can be ignored so that the app can load.')
}