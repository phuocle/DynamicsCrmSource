<%@ Page language="c#" Inherits="Microsoft.Crm.Test.Pages.TestPage" CodeBehind="Microsoft.Crm.Test.Pages.dll"%>

<%


if (Request.QueryString["setServerOutOfRotation"] != null && Request.Url.IsLoopback)
{
if (Request.QueryString["setServerOutOfRotation"] == "true")
{
SetServerOutOfRotation();
}
else
{
SetServerIntoRotation();
}
}





if (Request.QueryString["checkHealth"] != null && Request.QueryString["checkHealth"] == "true")
{
if (CheckHealth())
{
Server.TransferRequest("/crmtest.htm", true);
}
else
{
Server.TransferRequest("/crmtest_IgnorePingError.htm", true);
}
}
if (Request.QueryString["healthprobe"] != null)
Server.TransferRequest("/crmtest.htm",true);
%>


<html>
<head>
<title>
CRM Test Page
</title>
</head>
<body>
CRM Test Page - New
<hr>
<br>
Time : <% = System.DateTime.Now.ToString() %>
</body>
</html>