<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ProductCloneDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader" />
<script language="JavaScript">
function cancel() {
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

function applychanges() {
Mscrm.Utilities.setReturnValue(true);
closeWindow(true);
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
</frm:DialogForm>

<script type="text/javascript" >
setTimeout(function () {
if (document.getElementById("dvEmptyTitle") != null) {
document.getElementById("dvEmptyTitle").focus();
}
}, 100);
</script>
</body>
</html>
