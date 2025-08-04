
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Reporting.RemoteSrsReportViewer" AutoEventWireup="true" EnableViewState="true" EnableEventValidation="false" %>
<%@ Register TagPrefix="rsweb" Namespace="Microsoft.Reporting.WebForms" Assembly="Microsoft.ReportViewer.WebForms" %>

<!DOCTYPE html>
<html>
<head runat="server">
<title>CRM Report Viewer</title>
<style type="text/css">
body
{
background-color: #FFFFFF;
margin:0px 0px 0px 0px;
padding:0px 0px 0px 0px;
scroll=none;
}


div.MSRS-RVC .WaitControlBackground {
width: 100%;
text-align: center;
}
div.MSRS-RVC .WaitControlBackground table {
margin: auto;
}
</style>
<script type="text/javascript" language="javascript">

window.addEventListener('resize', function () {
var reportViewerId = "#reportViewer";
try
{
var reportViewer = document.querySelector(reportViewerId);
if (reportViewer) {
reportViewer.style.height = "100%";
window.setTimeout(function () {
var element = document.querySelector(reportViewerId + " span");
if (element && element.control) {
element.control.OnWindowResize();
}
});
}
}
catch (e)
{
throw e;
}
});

if (window.getComputedStyle != null)
{

var baseGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function (elt, pseudoElt)
{
try
{
return baseGetComputedStyle(elt, pseudoElt);
}
catch (e)
{
if (elt.documentElement)
{
return baseGetComputedStyle(elt.documentElement, pseudoElt);
}
else
{
throw e;
}
}
}
}







if (window.open != null)
{
var baseOpen = window.open;
window.open = function (URL, name, specs, replace)
{

if (window.parent.shouldLaunchPageInOutlookHostedWindow(URL)
&& URL.toUpperCase().indexOf("RESERVED.REPORTVIEWERWEBCONTROL.AXD") != -1
&& URL.toUpperCase().indexOf("OPTYPE=EXPORT") != -1)
{

window.parent.openUrl(URL, true);
}
else
{
if (_isIE())
{


var id = "ie-window-open-substitute";
var anchor = document.getElementById(id);
if (!anchor)
{
anchor = document.createElement("a");
anchor.id = id;
anchor.style.display = "none";
document.body.appendChild(anchor);
}
anchor.href = URL;
anchor.target = name;
anchor.click();
}
else
{
baseOpen(URL, name, specs, replace);
}
}
}

/**
* Returns whether the browser is IE
*/
function _isIE()
{
return window.navigator.userAgent.indexOf("Trident") !== -1;
}
}
</script>
</head>

<body style="<%if (doNotShowBorder) { %> border-style:none;<% } %>">

<div style="height:100%; width:100%; position:absolute">
<form id="form1" runat="server" style="height:100%">
<asp:ScriptManager id="scriptManager"  runat="server" />
<rsweb:ReportViewer id="reportViewer"  runat="server" width="100%" height="100%"/>
</form>
</div>

</body>
</html>

