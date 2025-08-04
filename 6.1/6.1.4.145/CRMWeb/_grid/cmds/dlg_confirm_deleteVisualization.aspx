<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmDeleteVisualizationDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>






<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Visualization_Deletion_Confirmation_Title" runat="server"/></title>
<script language="javascript">
function applychanges()
{
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel()
{
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" >
<table width="100%" style="table-layout:fixed">
<col>
<tr>
<td><loc:Text ResourceId="Visualization_Deletion_Confirmation_Message" runat="server" /></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
