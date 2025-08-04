<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.ManageMaps.SampleDataFileUploadPage"  %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="Javascript">
Sys.Application.add_load(PageLoad);
function PageLoad()
{
var dataXml = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(dataXml) %>;
var errorCode = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %>;

if(errorCode != "")
{
$get("errorFrame").src = Mscrm.CrmUri.create("/_common/error/popuperror.aspx?hr=" + CrmEncodeDecode.CrmUrlEncode(errorCode)).toString();
}
else if(dataXml != "")
{
window.parent.UploadSuccessfulCallBack(dataXml);
}
}

</script>
</head>
<body scroll="no" onkeypress="if (new Sys.UI.DomEvent(event).charCode == 27){return closeWindow();}">
<table width="100%" style="margin-top:50px;">
<tr>
<td valign="top" style="padding-left:5px">
<label for="fileUpload"><loc:Text ResourceId="UploadSampleFile_Label" runat="server"/></label>
</td>
<td>
<form id="fileUploadForm" name="fileUploadForm" enctype="multipart/form-data" method="post" action="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/SampleDataFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" frameborder="0">
<input type="file" name="fileUpload" id="fileUpload" style="width:315px; direction:ltr;"/>
<%=CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/SampleDataFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))%>
</form>
</td>
</tr>
<tr style="display:none;">
<td colspan="3">
<iframe id="errorFrame" name="errorFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" width="0%" height="0%" scrolling="no" frameborder="0">
</iframe>
</td>
</tr>
</table>
</body>
</html>
