<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.ConfirmAzureMLFeatureDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-RefreshDialog-Header {
height: 60px !important;
}

.ms-crm-RefreshDialog-Main {
top: 55px;
}
</style>

<script language="JavaScript">
var isInlineDialog = window != top;

function applychanges() {
window.returnValue = true;
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

function cancel() {
window.returnValue = false;
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<%=dialogBody%>
</td>
</tr>
</table>
</frm:DialogForm>
<script type="text/javascript">
if (document.getElementById("dialogHeaderTitle") != null)
document.getElementById("dialogHeaderTitle").tabIndex = '0';
setTimeout(function () {
if (document.getElementById("dvEmptyTitle") != null) {
document.getElementById("dvEmptyTitle").focus();
}
}, 100);
</script>

</body>
</html>
