<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmSharepointFolder" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.ms-crm-RefreshDialog-Main
{
top: 110px !important;
}
div.ms-crm-RefreshDialog-Header
{
height: 100px !important;
}
div.ms-crm-RefreshDialog-Header-Desc
{
word-wrap:break-word;
}
</style>
<title><loc:Text ResourceId="SharePointAddFolder" runat="server"/></title>
<script language="javascript">
function applychanges() {
var oReturn = new Object();
oReturn.locationUrl = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(locationUrl) %>;
oReturn.folderName = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(folderName) %>;
oReturn.isAddOrEditMode = "<%=isAddMode%>";
oReturn.isCreateFolder = "<%=isCreateFolder %>";
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
return;
}

function cancel() {
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" >
<table width="100%" style="table-layout:fixed">
<col>
<tr>
<td><loc:Text ResourceId="SharePointAddFolderDescriptionText" runat="server" /></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>

