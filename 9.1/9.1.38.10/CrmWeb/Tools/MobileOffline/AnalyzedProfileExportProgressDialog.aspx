<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MobileOffline.AnalyzedProfileExportProgressDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html lang="eng">
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />
<script language="Javascript">
function onLoad() {
GenerateProfileReport();

window.setTimeout(function () {
cancel();
}, 1000);
}

function GenerateProfileReport() {
var id = document.getElementById("profileId").value.toString();
var formAction = Mscrm.GlobalImported.CrmUri.create("/tools/mobileoffline/ExportProfileReport.aspx?mobileOfflineProfileId=" + id);
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("id", "exportIFrame_form");
form.setAttribute("action", formAction);
form.setAttribute("target", "exportIFrame");

document.getElementsByTagName("body")[0].appendChild(form);
form.submit();
}

function cancel() {
closeWindow();
}
</script>
</head>
<body onload="onLoad()" scroll="no">
<input type="hidden" id="profileId" value="<%=ProfileId%>" />
<frm:DialogForm ID="crmForm" runat="server"></frm:DialogForm>
<iframe name="exportIFrame"></iframe>
</body>
</html>
