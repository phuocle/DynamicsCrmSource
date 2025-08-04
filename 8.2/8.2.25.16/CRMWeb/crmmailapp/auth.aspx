<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>Dynamics CRM</title>
	<script>
		(function () {
			// If a MailAppRedirect was provided, we should load that page in this window.
			var search = window.location.search;
			if (search && search.length > 0) {
				var redirectParam = 'MailAppRedirect=';
				var params = search.split('&');

				for (var i = 0; i < params.length; i++) {
					if (params[i].startsWith(redirectParam)) {
						window.location = window.location.protocol + '//' + window.location.host + '/CrmMailApp/' + decodeURIComponent(params[i].substring(redirectParam.length, params[i].length));
						return;
					}
				}
			}

			// No redirect provided. Try communicating with page opener.
			if (window.opener && window.opener.authLoginCallback) {
				window.opener.authLoginCallback();
			}

			window.close();
		})();
	</script>
</head>
<body>

</body>
</html>
