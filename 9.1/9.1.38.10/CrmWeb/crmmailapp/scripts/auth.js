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
	if (window === window.top) {
		if (window.opener && window.opener.AuthenticationContext && window.opener.AuthenticationContext()) {
			context = new AuthenticationContext(window.opener.AuthenticationContext().config);
		}
	} else {
		if (window.parent && window.parent.AuthenticationContext && window.parent.AuthenticationContext()) {
			context = new AuthenticationContext(window.parent.AuthenticationContext().config);
		}
	}

	function handleNoOpener() {
		console.error('Unable to communicate back to main frame! Auth may have succeeded but we are unable to provide token to the app. In IE, this may be due to bad security zone configurations');
		var errorCodeId = "80061210";
		var helpLink = 'http://go.microsoft.com/fwlink/?LinkID=398563&client=MailApp&error=Microsoft.Crm.Exception:' + errorCodeId;
		
		var supportedLanguages = [
			"ar-sa","bg-bg", "ca-es",
			"zh-tw", "cs-cz", "da-dk",
			"de-de", "el-gr", "fi-fi",
			"fr-fr", "he-il", "hu-hu",
			"it-it", "ja-jp", "ko-kr",
			"nl-nl", "nb-no", "pl-pl",
			"pt-br", "ro-ro", "ru-ru",
			"hr-hr", "sk-sk", "sv-se",
			"th-th", "tr-tr", "id-id",
			"uk-ua", "sl-si", "et-ee",
			"lv-lv", "lt-lt", "vi-vn",
			"eu-es", "hi-in", "ms-my",
			"kk-kz", "gl-es", "zh-cn",
			"pt-pt", "sr-latn-rs", "zh-hk",
			"es-es", "sr-cyrl-rs",
		];

		function getDisplayLanguage()
		{
			const displayLanguage = localStorage && localStorage.getItem('MailApp_DisplayLanguage');

			if (displayLanguage && supportedLanguages.indexOf(displayLanguage.toLowerCase()) !== -1)
			{
				return displayLanguage;
			}

			return null;
		}

		var resourceId = getDisplayLanguage();

		// Request resources in order to show error message
		var resourceUrl =
			window.location.protocol +
			'//' +
			window.location.host +
			'/crmmailapp/resources/loc/resources' +
			(resourceId ? '.' + resourceId : '') +
			'.js';

		var req = new XMLHttpRequest();
		req.onload = function(evt) {
			// Load resources into execution context
			var resourceJs = req.response;
			eval(resourceJs);

			if (RESOURCES) {
				var messageContainer = document.getElementById('messageContainer');
				var messageElement = document.getElementById('messageText');
				var linkElement = document.getElementById('messageLink');

				messageContainer.className = '';
				linkElement.href = helpLink;
				linkElement.innerText = RESOURCES['MoCA_OWA_Help_Link_Text'];
				messageElement.innerText = RESOURCES['Error_Message_0x' + errorCodeId];
			} else {
				console.error('Could not successfully load resources');
			}
		}
		req.open('GET', resourceUrl);
		req.send();
	};

	function fallback()
	{
		if (window === window.top) {
			try {
				// We are in our own window. Need to communicate with main page.
				if (window.opener && window.opener.adalLoginCallback) {
					window.opener.adalLoginCallback({ hash: window.location.hash });
					window.close();
				}
				else {
					handleNoOpener();
				}
			} catch (err) {
				handleNoOpener();
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
		if (!window.opener && loginDialogMode === "OfficeDialog")
		{
			Office.initialize = function ()
			{
				if (Office.context.ui.messageParent)
				{
					Office.context.ui.messageParent(JSON.stringify({ hash: window.location.hash }));
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

		window.adalLoginCallback = function (hash)
		{
			callOwnerCallback();
		};

		var newQuery = '';
		for (var prop in queryParams) {
			if (prop !== getTokenKey) {
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