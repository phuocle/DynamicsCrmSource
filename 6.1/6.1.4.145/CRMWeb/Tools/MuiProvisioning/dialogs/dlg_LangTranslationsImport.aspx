<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.LanguageTranslationsImport.LanguageTranslationsImportDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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
function PageOnLoad()
{
var sError = "<%=bError %>";
sError = sError.toLowerCase();
if (sError === "true") {


var dialogDescription = this.parent.document.getElementById("ImportTranslationsDialogDescription");
dialogDescription.innerHTML = LOCID_IMPORT_SMRY_DLG_DSC;

var waitSpan = this.parent.document.getElementById("WaitForImportSpan");
waitSpan.style.display = "none";
var failureSpan = this.parent.document.getElementById("ImportFailedSpan");

var sErrorMessage = "<%= errorMessage %>";

var errorElement = this.parent.document.getElementById("ErrorDescription");
errorElement.innerHTML = sErrorMessage
failureSpan.style.display = "inline";
}













var sImportJobId = "<%=importJobId %>";
if (sImportJobId !== "")
{
CheckStatus(sImportJobId);
}
}



function uploadFile()
{
var uploadForm = this.parent.FormFrame.$get("UploadForm");
var sFileName = uploadForm.userFile.value;


if (sFileName == "")
{
alert(LOCID_IMPORT_NOFILESPECIFIED);
return false;
}


var regex = "[?\"/*<>|]";

if (sFileName.length > 255 || sFileName.search(regex) != -1)
{
alert(LOCID_IMPORT_INVALIDFILENAME);
return false;
}


sFileName = sFileName.slice(sFileName.lastIndexOf("\\") + 1);
var sExtension = sFileName.slice(sFileName.lastIndexOf(".") + 1).toLowerCase();

if (sExtension != "zip")
{
alert(LOCID_IMPORT_INVALIDFILEEXT);
return false;
}



uploadForm.fileName.value = uploadForm.userFile.value;
uploadForm.importJobId.value = GetGuid();


var dialogDescription = this.parent.document.getElementById("ImportTranslationsDialogDescription");
dialogDescription.innerHTML = LOCID_IMPORT_WAIT_DLG_DSC;


var fileSelectionSpan = this.parent.document.getElementById("FileSelectionSpan");
fileSelectionSpan.style.display = "none";

var waitSpan = this.parent.document.getElementById("WaitForImportSpan");
waitSpan.style.display = "inline";



try
{
uploadForm.submit();


window.setTimeout(PollForStatus, 100);
}
catch (e)
{
alert(LOCID_IMPORT_INVALIDFILEPATH);
return false;
}
}

function PollForStatus()
{
var importJobId = $get("UploadForm").importJobId.value;
if (!CheckStatus(importJobId))
{


setTimeout(PollForStatus, 100);
}
}

function CheckStatus(importJobId)
{

var oProgressRetrieveCommand = new RemoteCommand("ImportJob", "RetrieveProgress");

oProgressRetrieveCommand.ErrorHandler = function () { };
oProgressRetrieveCommand.SetParameter("id", importJobId);
var oResult = oProgressRetrieveCommand.Execute();


if (oResult.Success)
{
var oImportJob = oResult.ReturnValue;

if (!IsNull(oImportJob) && oImportJob != "")
{
var oDataXml = XUI.Xml.LoadXml(oImportJob);
if (!IsNull(oDataXml))
{
var oStatusNode = XUI.Xml.SelectSingleNode(oDataXml, "//status", null);

if (!IsNull(oStatusNode))
{
switch (XUI.Xml.GetText(oStatusNode))
{
case "Running":
break;
case "Succeeded":

var dialogDescription = this.parent.document.getElementById("ImportTranslationsDialogDescription");
dialogDescription.innerHTML = LOCID_IMPORT_SMRY_DLG_DSC;

var waitSpan = this.parent.document.getElementById("WaitForImportSpan");
waitSpan.style.display = "none";

var successSpan = this.parent.document.getElementById("ImportSuccessfulSpan");
successSpan.style.display = "inline";

return true;
case "Failed":

var dialogDescription = this.parent.document.getElementById("ImportTranslationsDialogDescription");
dialogDescription.innerHTML = LOCID_IMPORT_SMRY_DLG_DSC;

var waitSpan = this.parent.document.getElementById("WaitForImportSpan");
waitSpan.style.display = "none";

var failureSpan = this.parent.document.getElementById("ImportFailedSpan");
var tab = this.parent.document.getElementById("Tab");
var tabCol = this.parent.document.getElementById("TabCol");
var row = this.parent.document.getElementById("Row");
var rowCol = this.parent.document.getElementById("RowCol");

var oErrorCodeNode = XUI.Xml.SelectSingleNode(oDataXml, "//errorcode", null);
var oWorkSheetName = XUI.Xml.SelectSingleNode(oDataXml, "//worksheet", null);
var oRowNumber = XUI.Xml.SelectSingleNode(oDataXml, "//rownumber", null);
if (!IsNull(oErrorCodeNode))
{
var oErrorMessageCommand = new RemoteCommand("ImportJob", "GetErrorMessage");
oErrorMessageCommand.SetParameter("errorCode", XUI.Xml.GetText(oErrorCodeNode));

var oResultErrorCommand = oErrorMessageCommand.Execute();
if (oResultErrorCommand.Success)
{
var oErrorMessage = oResultErrorCommand.ReturnValue;

var errorElement = this.parent.document.getElementById("ErrorDescription");
errorElement.innerHTML = oErrorMessage;

var oWorkSheetNameText = XUI.Xml.GetText(oWorkSheetName);

if (!IsNull(oWorkSheetName) && oWorkSheetNameText != "")
{
tabCol.innerHTML = LOCID_IMPORT_SMRY_TAB + oWorkSheetNameText;
tab.style.display = "inline";
}

if (!IsNull(oRowNumber))
{
var sRowNumberText = XUI.Xml.GetText(oRowNumber);
if (sRowNumberText != "" && sRowNumberText != "0")
{
rowCol.innerHTML = LOCID_IMPORT_SMRY_ROW + sRowNumberText;
row.style.display = "inline";
}
}
}
}
failureSpan.style.display = "inline";

return true;
default:
break;
}
}
}
}
}
return false;
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
<form id="UploadForm" name="UploadForm" enctype="multipart/form-data" method="POST" action="dlg_LangTranslationsImport.aspx" target="FormFrame">
<tr valign="middle" style="height:40px">
<td valign="middle" style="width:15%">
<label for="fileUpload"><loc:Text ResourceId="UploadTranslationsFile_Label" runat="server"/></label>
</td>
<td valign="middle" style="width:66%">
<input type="hidden" name="importJobId" value="">
<input type="hidden" name="fileName" value="">
<input type="file" id="txtUserFileName" onkeypress="if((new Sys.UI.DomEvent(event)).keyCode == 13){return false;}" name="userFile" class="ms-crm-File-Upload">
<input name="appSolutionId" type="hidden" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(this.CurrentSolutionContext.SolutionId)%>">
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/MuiProvisioning/Dialogs/dlg_LangTranslationsImport.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</td>
<td class="ImportCustomizationsForm_td_BtnImportFile" valign="middle"  align="left" style="width:19%;">
<button id="btnImportFile" onclick="uploadFile();" class="button" style="width:90px"><loc:Text ResourceId="ImportTranslationsButton_Label" runat="server"/></button>
</td>
</tr>
</form>
</table>
</body>
</html>
