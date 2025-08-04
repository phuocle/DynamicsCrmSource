<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.GettingStarted.GettingStartedLiveHome" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>

    <script type="text/javascript" language="JavaScript">
        $addHandler(window, 'load', PageOnLoad);

        function PageOnload() {
            var protocol = "https://";
            var fwLink = "132197";
            var resourceCenterParams = protocol +
                "go.microsoft.com/fwlink/?LinkID=" +
                fwLink +
                "&LangCode=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(UILcid.ToString(CultureInfo.InvariantCulture))) %>" +
                "&SkuType=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(SkuType())) %>";
            window.location.replace(resourceCenterParams);
        }
    </script>
</head>

<body>
</body>
</html>