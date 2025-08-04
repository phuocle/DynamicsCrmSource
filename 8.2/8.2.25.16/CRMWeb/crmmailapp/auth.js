(function () {
	// Parse query params
	var queryParams = {};
	if (window.location.search && window.location.search.length > 0) {
		var paramStr = window.location.search.substring(1);
		var splitParams = paramStr.split('&');
		for (var i = 0; i < splitParams.length; i++) {
			var paramKeyValue = splitParams[i].split('=');
			queryParams[paramKeyValue[0]] = decodeURIComponent(paramKeyValue[1]);
		}
	}

	// Create the AuthContext based on appropriate config
	var context;
	if (window == window.top) {
		if (window.opener && window.opener.AuthenticationContext && window.opener.AuthenticationContext()) {
			context = new AuthenticationContext(window.opener.AuthenticationContext().config);
		}
	} else {
		if (window.parent && window.parent.AuthenticationContext && window.parent.AuthenticationContext()) {
			context = new AuthenticationContext(window.parent.AuthenticationContext().config);
		}
	}

	function fallback()
	{
		if (window == window.top) {
			// We are in our own window. Need to communicate with main page.
			if (window.opener && window.opener.adalLoginCallback) {
				window.opener.adalLoginCallback({ hash: window.location.hash });
				window.close();
			}			
		} else {
			context.handleWindowCallback();

			if (window.parent.adalLoginCallback) {
				window.parent.adalLoginCallback(window.location.hash);
			}
		}
	}

	var callOwnerCallback = function () {
		var loginDialogMode = localStorage.getItem("MailApp_LoginDialogMode");
		localStorage.setItem("MailApp_LoginDialogMode", "");
		if (loginDialogMode === "OfficeDialog")
		{
			Office.initialize = function ()
			{
				if (Office.context.ui.messageParent)
				{
					Office.context.ui.messageParent(JSON.stringify({hash: window.location.hash}));
				}
				else
				{
					fallback();
				}
			};
		}
		else 
		{
			fallback();
		}
		
	}

	var getTokenKey = 'GetToken';
	if (queryParams[getTokenKey]) {

		window.adalLoginCallback = function (hash) {
			callOwnerCallback();
		}

		var newQuery = '';
		for (var prop in queryParams) {
			if (prop != getTokenKey) {
				var delim = newQuery ? '&' : '?';
				newQuery += prop + '=' + encodeURIComponent(queryParams[prop]);
			}
		}
		context.config.redirectUri = window.location.protocol + '//' + window.location.host + window.location.pathname + newQuery;
		context.acquireToken(queryParams[getTokenKey], function (error, token) {
			window.close();
		});
	} else {
		callOwnerCallback();
	}
})();