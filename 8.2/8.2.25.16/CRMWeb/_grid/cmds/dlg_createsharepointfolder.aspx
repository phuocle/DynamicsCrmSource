<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.CreateSharepointFolder" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.ms-crm-RefreshDialog-Main
{
display: none;
}
div.ms-crm-RefreshDialog-Header
{
height: auto;
}
div.ms-crm-RefreshDialog-Header-Desc
{
height: 110px;
overflow-y: auto;
word-wrap:break-word;
}
</style>
<title><loc:Text ResourceId="SharePointAddFolder" runat="server"/></title>
<script language="javascript">
function applychanges()
{
var oReturn = new Object();
oReturn.objId = "<%=objectId%>";
oReturn.objType = "<%=oType%>";
oReturn.folderName = "<%=folderName%>";
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
return;
}

function cancel()
{
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" >
<table width="100%" style="table-layout:fixed">
<col>
<tr>
<td></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
