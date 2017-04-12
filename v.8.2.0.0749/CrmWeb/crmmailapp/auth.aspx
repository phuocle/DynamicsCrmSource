<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>Dynamics CRM</title>
    <script>
        (function() {
            // If a MailAppRedirect was provided, we should load that page in this window.
            if (window.location.search && window.location.search.length > 0) {
                var paramStr = window.location.search.substring(1);
                var splitParams = paramStr.split('&');
                for (var i = 0; i < splitParams.length; i++) {
                    var paramKeyValue = splitParams[i].split('=');
                    if (paramKeyValue[0] === 'MailAppRedirect') {
                        window.location = window.location.protocol +
                            '//' +
                            window.location.host +
                            '/CrmMailApp/' +
                            decodeURIComponent(paramKeyValue[1]);
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