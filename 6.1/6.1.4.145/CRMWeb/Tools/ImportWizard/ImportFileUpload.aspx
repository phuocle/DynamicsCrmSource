<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Import.ImportFileUploadPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="Javascript" type="text/javascript">
function SubmitForm()
{
var fileName = document.getElementById("uploadFileNameId");
if(fileName.value != "")
{
var shortName = fileName.value;
shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);

if(shortName.length > 40)
{
shortName = shortName.substring(0,35);
}

var ele = window.parent.document.getElementById("progressMessage");
XUI.Html.SetText(ele, formatString(LOCID_IW_FILEUPLOAD_PROGRESS, shortName));
}
document.getElementById("uploadFileform").submit();

var ele = window.parent.document.getElementById("progressDiv");
ele.style.display = "inline";

var ele = window.parent.document.getElementById("mainBody");
ele.style.display = "none";
}


$addHandler(window, "load", PageOnLoad);
function PageOnLoad()
{
if("<% =hasError%>" == "True")
{
if(<% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %> == "0x8004034A")
{
openErrorDlg(<% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorCode) %>, <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %>);
}
else
{
if(<% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %> != "")
{
alert(<% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(errorMessage) %>);
}
else
{
$get("errorFrame").src = Mscrm.CrmUri.create("/_common/error/popuperror.aspx?hr=" + <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(errorCode))%>).toString();
}
}
window.parent.FailureCallBackFromUpload("<%=importId.ToString("B", CultureInfo.InvariantCulture) %>");
var ele = window.parent.document.getElementById("progressDiv");
ele.style.display = "none";

var ele = window.parent.document.getElementById("mainBody");
ele.style.display = "block";
}
else if("<% =hasError%>" == "False")
{
window.parent.SuccessCallBackFromUpload(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(fileName) %>,
"<%=importId.ToString("B", CultureInfo.InvariantCulture) %>",
"<%=importFileId.ToString("B", CultureInfo.InvariantCulture) %>",
"<%=importType.ToString() %>",
"<%=headerColumnIndexesToBeIgnoredCsv %>");
var ele = window.parent.document.getElementById("progressDiv");
ele.style.display = "none";
}

document.getElementById("uploadFileNameId").addEventListener("change", validateFileSize, false);
}

function handleKeyPress(eventObject)
{
if(eventObject.keyCode == 13)
{
return false;
}
}

function validateFileSize(eventObject)
{
var fileObject = eventObject.target.files;
if (fileObject[0] != null)
{
var fileSize = fileObject[0].size;
var maxAllowedFileSize = parseInt(<%=MaxAllowedFileSize %>);
if (maxAllowedFileSize < parseInt(fileSize))
{
document.getElementById("uploadFileNameId").value = "";
alert(formatString(LOCID_UFP_ERROR_FILESIZE, maxAllowedFileSize/(1024*1024)));
}
}
}

</script>
</head>
<body scroll="auto" class="ms-crm-WizardForm-Main">
<div id="controlDiv" class="mscrm-iw-BorderedDivBlueBackground" style="top:0px;height:100px; padding-right:0px;padding-left:0px" scrolling="no">
<form id="uploadFileform" name='uploadFileform' enctype='multipart/form-data' method='post' action='ImportFileUpload.aspx?action=fileUpload' style="padding: 6px;">
<span class="mscrm-iw-PageWidth">
<loc:Text ResourceId="ImportWizard.UploadFilePage.UploadIFrame.Header" runat="server"/>
</span>
<br />
<br />
<input id='uploadFileNameId' type='file' name='uploadFileName' class="mscrm-iw-PageWidth ms-crm-WhiteBackground" onkeypress="handleKeyPress(new Sys.UI.DomEvent(event))" />
<br />
<span class="mscrm-iw-PageWidth">
<loc:Text ResourceId="ImportWizard.UploadFilePage.UploadIFrame.Footer.ExportToXlsx" runat="server"/>
</span>
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ImportWizard/ImportFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</form>
<iframe id="errorFrame" name="errorFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" width="0%" height="0%" scrolling="no" frameborder="0">
</iframe>
</div>
<br />
<br />

<div id="enclosedDiv" class="mscrm-iw-InfoBarBlue" style="display:none;position:absolute;top:121px;">
<table width="100%" style="table-layout:fixed">
<tr>
<td><nobr id="enclosedDivText"></nobr></td>
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft){ %>
<td align="left">
<%}else{ %>
<td align="right">
<%} %>
<a id="linkRemoveFile" href='#' onclick="window.parent.removeUploadedFile()" class="ms-crm-Link">
<loc:Text ResourceId="ImportWizard.UploadFilePage.EnclosedDiv.Remove" runat="server" />
</a>
</td>
</tr>
</table>
</div>
</body>
</html>
