// Monkey-patch the browser XHR API to add authentication header if it's unset
// This script file is being loaded to the custom scripts frame to ensure that 
// the client custom scripts calls to the server has valid authentication header.
// Its also being compiled into MailAppCoreDependencies.js so we need to make sure
// that the script could run inside and outside custom scripts frame.

(function (xhr) {
	// Returns true if we're running in the MailApp and we're not in the frame
	var runningOnMailAppPage = function () {
		return window.location.pathname.indexOf("mail.aspx") !== -1 || window.location.pathname.indexOf("mail.htm") !== -1;
	}

	var getAuthenticationManager = function () {
		if (Microsoft) {
			return Microsoft.Crm.Client.Core.Framework.AuthenticationManager.get_defaultInstance();
		}

		return parent && parent.Microsoft.Crm.Client.Core.Framework.AuthenticationManager.get_defaultInstance();
	};

	var getXrmObject = function () {
		if (Xrm) {
			return Xrm;
		}

		return parent && parent.Xrm;
	}

	var urlsToPatch = [];
	if (runningOnMailAppPage()) {
		// If we're running in the mail app and we're not in the iframe.
		urlsToPatch.push("/AppWebServices/MetricsReportingService.asmx/Report");
	} else {
		// If we're running in the iframe or we're inside MoCA based app that is not a MailApp.
		var xrmObject = getXrmObject();

		// If we will not be able to retrieve Xrm object we are not able to build urls that are save from security perspective and we should not patch them
		if (xrmObject) {
			urlsToPatch.push(getXrmObject().Page.context.getClientUrl() + "/XRMServices/2011/Organization.svc/web");
			urlsToPatch.push(getXrmObject().Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc");
			urlsToPatch.push(getXrmObject().Page.context.getClientUrl() + "/api/data");
		}
	}

	var isUrlShouldBePatched = function (url) {
		for (var i = 0; i < urlsToPatch.length; i++) {
			var toPatchUrl = urlsToPatch[i];
			if (url.indexOf(toPatchUrl) === 0) {
				return true;
			}
		}

		return false;
	}

	var _open = xhr.open;
	xhr.open = function (method, url, async) {
		if (isUrlShouldBePatched(url)) {
			var headerSet = false;
			var _setRequestHeader = this.setRequestHeader;
			this.setRequestHeader = function (header, value) {
				if (header === "Authorization") {
					headerSet = true;
				}
				return _setRequestHeader.apply(this, arguments);
			};
			var _send = this.send;
			this.send = function (data) {
				if (!headerSet) {
					var authenticationManager = getAuthenticationManager();

					// if we were not able to retrieve authentication manager we cannot set authentication header
					if (authenticationManager) {
						_setRequestHeader.apply(this, ["Authorization", getAuthenticationManager().get_LatteAuthToken()]);
					}
				}
				return _send.apply(this, arguments);
			};
		}
		return _open.apply(this, arguments);
	};
})(XMLHttpRequest.prototype);