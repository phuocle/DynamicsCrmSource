<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DiscardCheckout" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>


<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web._grid.cmds.dlg_discardcheckout.aspx_discardTitle" runat="server"/></title>
<script language="javascript">
function applychanges() {
var oReturn = new Object();
oReturn.entityId = _entityId;
oReturn.entityName = _entityName;
oReturn.documentId = _documentId;
oReturn.locationId = _locationId;
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
return;
}

function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

Sys.Application.add_load(function () {
Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
document.body.addEventListener("touchmove", function (event) { event.preventDefault(); event.stopPropagation() }, false);
}
});

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" >
<table width="100%" style="table-layout:fixed">
<col>
<tr>
<td><loc:Text ResourceId="Web._grid.cmds.dlg_discardcheckout.aspx_discardconfirm" runat="server"/></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>