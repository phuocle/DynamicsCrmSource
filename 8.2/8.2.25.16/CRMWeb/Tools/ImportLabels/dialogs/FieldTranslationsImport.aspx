<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.ImportLabels.FieldTranslationsImportPage"
CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:Text ResourceId="ImportTranslations_DialogTitle" runat="server" /></title>
<app:AppHeader runat="server" id="crmHeader" />
<script type="text/javascript">
function cancel() {
closeWindow();
}

function applychanges() {
var importTranslationsFrame = $get("ImportTranslationsFormFrame");
var uploadForm = importTranslationsFrame.contentWindow.document.getElementById("UploadForm");
var sFileName = uploadForm.userFile.value;


if (sFileName == "") {
alert(LOCID_IMPORT_NOFILESPECIFIED);
return false;
}


var regex = "[?\"/*<>|]";

if (sFileName.length > 255 || sFileName.search(regex) != -1) {
alert(LOCID_IMPORT_INVALIDFILENAME);
return false;
}


sFileName = sFileName.slice(sFileName.lastIndexOf("\\") + 1);
var sExtension = sFileName.slice(sFileName.lastIndexOf(".") + 1).toLowerCase();

if (sExtension != "zip") {
alert(LOCID_IMPORT_INVALIDFILEEXT);
return false;
}

uploadForm.fileName.value = uploadForm.userFile.value;



try {
uploadForm.submit();
}
catch (e) {
alert(LOCID_IMPORT_INVALIDFILEPATH);
return false;
}
}
</script>
<style type="text/css">
body
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) {%>
direction: rtl;
<% } %>
}
.header
{
background-color: #ffffff;
}
.noborder
{
border: none;
}
</style>
</head>
<body scroll="no" onkeypress="if((new Sys.UI.DomEvent(event)).keyCode == 27){return closeWindow();}">
<frm:DialogForm id="crmForm" runat="server">
<span id="FileSelectionSpan" style="display: block">
<iframe id="ImportTranslationsFormFrame" name="FormFrame" src="dlg_FieldTranslationsImport.aspx"
scrolling="no" style="height: 30px; width: 100%" frameborder="0"></iframe>
</span>
<span id="ImportFailedSpan" style="display: none">
<table style="height: 70%; width: 100%" cellpadding="3">
<tr>
<td valign="middle" style="height: 10%" class="ms-crm-Bold-Header FieldTranslationsImport_td">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsFailed"
Encoding="None" runat="server" />
</td>
</tr>
<tr>
<td valign="top" style="height: 60%" class="FieldTranslationsImport_td">
<loc:Text ResourceId="SystemCustomization.ImportCustomizationsPage.Strings.ImportingTranslationsFailureReason"
Encoding="None" runat="server" />
</td>
</tr>
<tr>
<td id="ErrorDescription" valign="top" class="FieldTranslationsImport_td">
&nbsp;
</td>
</tr>
</table>
</span>
</frm:DialogForm>
</body>
</html>
