// monkey-patch the browser XHR API to add header if it's unset
(function(xhr) {
	var _open = xhr.open;
	var authenticationManager = null;
	var isMailApp = window.location.pathname.indexOf("mail.aspx") != -1 || window.location.pathname.indexOf("mail.htm") != -1;
	var clientUrl = isMailApp ? "/AppWebServices/MetricsReportingService.asmx/Report" : parent.Xrm.Page.context.getClientUrl() + "/XRMServices/2011/Organization.svc/web";
	xhr.open = function (method, url, async) {
		if (url === clientUrl) {
			// if the URL is targeting the CRMServer we want to intercept, then monkey-patch some methods
			var headerSet = false;
			var _setRequestHeader = this.setRequestHeader;
			this.setRequestHeader = function(header, value) {
				if (header === "Authorization") {
					headerSet = true;
				}
				return _setRequestHeader.apply(this, arguments);
			};
			var _send = this.send;
			this.send = function(data) {
				if (!headerSet) {
					if (!authenticationManager) {
						authenticationManager = isMailApp ?
							Microsoft.Crm.Client.Core.Framework.AuthenticationManager.get_defaultInstance() :
							window.parent.Microsoft.Crm.Client.Core.Framework.AuthenticationManager.get_defaultInstance();
					}
					_setRequestHeader.apply(this, ["Authorization", authenticationManager.get_LatteAuthToken()]);
				}
				return _send.apply(this, arguments);
			};
		}
		return _open.apply(this, arguments);
	};
})(XMLHttpRequest.prototype);