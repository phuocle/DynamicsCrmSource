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
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
direction:rtl;
<% } %>

}
</style>
<script type="text/javascript" language="javascript">
if (window.getComputedStyle != null) {

var baseGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function (elt, pseudoElt) {
try {
return baseGetComputedStyle(elt, pseudoElt);
}
catch (e) {
if (elt.documentElement) {
return baseGetComputedStyle(elt.documentElement, pseudoElt);
}
else {
throw e;
}
}
}
}






if (window.open != null) {
var baseOpen = window.open;
window.open = function (URL, name, specs, replace) {

if (window.parent.shouldLaunchPageInOutlookHostedWindow(URL)
&& URL.toUpperCase().indexOf("RESERVED.REPORTVIEWERWEBCONTROL.AXD") != -1
&& URL.toUpperCase().indexOf("OPTYPE=EXPORT") != -1) {

window.parent.openUrl(URL, true);
}
else {
baseOpen(URL, name, specs, replace);
}
}
}
</script>
</head>

<body style="<%if (doNotShowBorder) { %> border-style:none;<% } %>">

<table cellspacing="0" cellpadding="0" width="100%" height="100%">
<tr>
<td>
<form id="form1" runat="server" style="height:100%">
<asp:ScriptManager id="scriptManager"  runat="server" />
<rsweb:ReportViewer id="reportViewer"  runat="server" width="100%" height="100%"/>
</form>
</td>
</tr>
</table>

</body>
</html>

