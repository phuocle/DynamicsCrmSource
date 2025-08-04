<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Web.Pages.ResCenterBase" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">

window.onload = function ()
{
var resourceCenterParams = Mscrm.Utilities.getResourceCenterUrlAndParams("74933", "130480");
window.location.replace(resourceCenterParams);
}

</script>
</head>

<body>
</body>
</html>