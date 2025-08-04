<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ImportLabels.FieldTranslationsImportDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="ImportTranslations_DialogTitle" runat="server"/></title>

<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">

$addHandler(window, "load", PageOnLoad);
function PageOnLoad() {
if (_sError) {


var dialogDescription = this.parent.document.getElementById("dialogHeaderDesc");
dialogDescription.innerHTML = LOCID_IMPORT_SMRY_DLG_DSC;

var failureSpan = this.parent.document.getElementById("ImportFailedSpan");

var errorElement = this.parent.document.getElementById("ErrorDescription");
errorElement.innerHTML = _sErrorMessage;
failureSpan.style.display = "inline";
}
if (_sErrorMessage == "success")
this.parent.closeWindow();
}
</script>

<style type="text/css">
.noborder
{
border: none;
}
</style>
</head>
<body scroll="no">
<table class="stdTable" cellspacing="0" cellpadding="3">
<form id="UploadForm" name="UploadForm" enctype="multipart/form-data" method="POST" action="dlg_FieldTranslationsImport.aspx" target="FormFrame">
<tr valign="middle" style="height:40px">
<td valign="middle" align="center" style="width:16%">
<label for="fileUpload"><loc:Text ResourceId="UploadTranslationsFile_Label" runat="server"/></label>
</td>
<td valign="middle" style="width:69%">
<input type="hidden" name="fileName" value="">
<input type="file" id="txtUserFileName" name="userFile" class="ms-crm-File-Upload">
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ImportLabels/Dialogs/dlg_FieldTranslationsImport.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</td>
</tr>
</form>
</table>
</body>
</html>
