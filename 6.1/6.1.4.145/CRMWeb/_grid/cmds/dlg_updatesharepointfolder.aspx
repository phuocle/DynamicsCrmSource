<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.UpdateSharepointFolder" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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
oReturn.locationName = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(locationName) %>;
oReturn.absUrl = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(absUrl) %>;
oReturn.regardingType = "<%=regardingObjectType%>";
oReturn.regardingObjectId =  <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(regardingObjectId) %>;
oReturn.locationRelativePath = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(locationRelativePath) %>;
oReturn.parentType = "<%=parentType%>";
oReturn.parentId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(parentId) %>;
oReturn.docId =  <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(docId) %>;
oReturn.isAddOrEditMode = "<%=isAddMode%>";
oReturn.isCreateFolder = "<%=isCreateFolder %>";
oReturn.success = "true";
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
return;
}

function cancel() {
var oReturn = new Object();
oReturn.success = "false";
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
return;
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

