<%@ Page language="c#" ViewStateMode="Disabled" Inherits="Microsoft.Crm.Application.Pages.Diagnostics.DiagnosticsPage" validateRequest="true"%>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>

<!DOCTYPE html>
<html>
<head>
<title>CRM Diagnostics</title>
<style type="text/css">
body
{
font-family : "Segoe UI",Tahoma,Verdana,sans-serif;
}

table,
table th,
table td
{
text-align: left;
border: 1px;
border-color: #CCCCCC;
border-style: solid;
margin: 3px;
padding: 0px;
border-spacing: 0px;
border-collapse: collapse;
}
.runButton
{
width: 70px;
}

.normalButton
{
width: 130px;
}
</style>
<script language=javascript>
var IS_LIVE = '<%=Microsoft.Crm.Application.Utility.Util.IsLive()%>';
var IS_PATHBASEDURLS = '<%=Microsoft.Crm.Application.Utility.Util.IsPathBasedURLsEnabled()%>';
var ORG_UNIQUE_NAME = '<%=Microsoft.Crm.Application.Utility.Util.RetrieveOrganizationName(UserInformation.Current)%>';
var CLIENT_IP_ADDRESS = '<%=HttpContext.Current.Request.UserHostAddress%>';
var SERVER_TIME = '<%=DateTime.UtcNow.ToString()%> UTC';
</script>
<script type="text/javascript" src="<%=GetJSPath("/_static/tools/diagnostics/diag.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_static/tools/diagnostics/jsTests.js")%>"></script>
<script type="text/javascript" src="<%=GetJSPath("/_common/global.ashx")%>"></script>
</head>
<body style="background-image: url('/_imgs/theme/Outlook14Silver/Masthead.png'); background-repeat:no-repeat; background-position: 100% 0px;">
<form id="diagForm" runat="server">
<div>
<img style="left: 45%; top: 0px; width: 140px; display: inline; position: absolute;" src="/_imgs/crmmastheadlogo.png"/>
</div>
<h2>
CRM Diagnostics
</h2>
<p>
Diagnostic tests:</p>
<table width='800px' id='testsTable'>
<tr>
<th width="300px">
Data Point
</th>
<th width="100px">
Action
</th>
<th width="100px">
Status
</th>
<th>
Results Summary
</th>
</tr>

</table>
<br/>
Results:
<br/>
<textarea id="resultConsole" readonly rows="20" cols="100">
</textarea>
<br/><br/>
<span id="copyButton" style='display:none;'>
<input type="button" value="Copy to Clipboard" class="normalButton" onclick="copyToClipboard()" />
&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<input type="button" value="Clear" class="normalButton" onclick="clearResultConsole()" />
&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" value="E-Mail Results" class="normalButton" onclick="emailResults()" />
<br/>
</form>
</body>
<script language=javascript>
Sys.UI.DomEvent.addHandler (window, "load", function()
{
if(window.clipboardData != undefined)
{
document.getElementById('copyButton').style.display = 'inline';
}
});
</script>
</html>
