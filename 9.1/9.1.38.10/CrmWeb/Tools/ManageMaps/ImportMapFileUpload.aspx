<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.ManageMaps.ImportMapFileUploadPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html xmlns:crm>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="Javascript">
$addHandler(window,"load", windowOnLoad);
function windowOnLoad()
{
<% if (mapValidationErrorOccurred) { %>
window.parent.MapValidationFailureCallBackFromUpload(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(validationErrors)%>);

<%} else if(!String.IsNullOrEmpty(mapXml)) {%>
window.parent.CheckForDuplicateMapResultCallBackFromUpload(CrmEncodeDecode.CrmXmlEncode(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mapXml) %>),<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mapName)%>,<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(duplicateFound.ToString(CultureInfo.InvariantCulture))%>,<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(suggestedName)%>);
<% } %>
}
</script>
</head>
<body scroll="no" onkeypress="if(event.keyCode == 27){return closeWindow();}">
<label for="fileUpload">
<b><loc:text resourceid="UploadMapFile_Label" runat="server" /></b>
</label>
<br>
<br>
<form id="fileUploadForm" name="fileUploadForm" enctype='multipart/form-data' method='post'
action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/ImportMapFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>">
<input type="file" name="fileUpload" id="fileUpload" style="width: 100%;" />	<%=CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/ImportMapFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</form>
</body>
</html>
