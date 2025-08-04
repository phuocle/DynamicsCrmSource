<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.ExportProgressDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">

function positionProgressbar() {
var loadingImageHeight = document.getElementById('loadingImage').height;
var dialogHeaderHeight = document.getElementById('dialogHeader').clientHeight;
loadingContainer.style.top = (dialogHeaderHeight + ((window.innerHeight - dialogHeaderHeight - loadingImageHeight) / 2)) + 'px';
loadingContainer.style.left = ((window.innerWidth - loadingImageHeight) / 2) + 'px';
}

var exportProgressArgs;

function initializeProgressDialog() {
setUpCloseButton();

exportProgressArgs = window.getDialogArguments();
var isTemplate = exportProgressArgs["isTemplate"];
if (!IsNull(isTemplate) && isTemplate) {
generateTemplate();
} else {
submitForm();
}

positionProgressbar();
}


function setUpCloseButton() {
var outlookWindow = window.isOutlookHostedWindow();
if (IsNull(outlookWindow) || !outlookWindow)
return;


document.getElementById("closeButton").style.display = "none";

document.getElementById("dialogTitle").style.width = "100%";
}


function generateTemplate() {
var createTemplateUri = exportProgressArgs["createTemplateUri"];
if (IsNull(createTemplateUri))
return;
showDownloadStartedScreen();
window.location.href = createTemplateUri.toString();
}




function submitForm() {
var formAction = exportProgressArgs["formAction"];
var formData = new FormData();

if (IsNull(formAction))
return;

var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", formAction);
form.setAttribute("target", "exportIFrame");

var formParameters = exportProgressArgs["formParameters"];
for (var key in formParameters) {
var input = document.createElement("input");
input.setAttribute("type", "hidden");
input.setAttribute("name", key);
input.setAttribute("value", formParameters[key]);
formData.append(key, formParameters[key]);
form.appendChild(input);
}

document.getElementsByTagName("body")[0].appendChild(form);

document.cookie = "excelDownloadToken=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";


var xhr = new XMLHttpRequest();
xhr.open("POST", formAction);
xhr.responseType = 'blob';
xhr.onreadystatechange = function () {

if (this.readyState === 4) {
if (this.status == 200) {
var contentDispositionHeader = this.getResponseHeader("content-disposition");
var fileName = getFileName(contentDispositionHeader);
if (window.navigator.msSaveBlob) {
window.navigator.msSaveBlob(this.response, fileName);
}
else {
let link = window.document.createElement('a');
link.href = window.URL.createObjectURL(this.response);
link.download = fileName;
window.document.body.appendChild(link);
link.click();
link.remove();
}
}
if (window.IS_OUTLOOK_CLIENT) {
showDownloadStartedScreen();
} else {



window.setTimeout(closeWindow, 1000);
}
}
};
xhr.send(formData);
}
function getFileName(contentDispositionHeader) {
var fileName = "";
var startIndex = 0, endIndex = contentDispositionHeader.length;
if (contentDispositionHeader.indexOf("filename*=UTF-8") != -1) {

startIndex = contentDispositionHeader.indexOf("\'") + 2;
endIndex = contentDispositionHeader.length;
}
else {
if (contentDispositionHeader.indexOf("'") != -1) {					
startIndex = contentDispositionHeader.indexOf("'") + 1;
endIndex = contentDispositionHeader.indexOf("'", startIndex + 1);
}
else if (contentDispositionHeader.indexOf("\"") != -1) {			
startIndex = contentDispositionHeader.indexOf("\"") + 1;
endIndex = contentDispositionHeader.indexOf("\"", startIndex + 1);
}
else {
startIndex = contentDispositionHeader.indexOf("filename") + 9;
endIndex = contentDispositionHeader.length;
}
}
fileName = contentDispositionHeader.substring(startIndex, endIndex);
fileName = decodeURI(fileName);
return fileName;
}




function checkCookie() {
if (document.cookie.indexOf("excelDownloadToken=1") >= 0)
return;

window.clearInterval(window.checkCookiePollingInterval);

if (window.IS_OUTLOOK_CLIENT) {
showDownloadStartedScreen();
} else {



window.setTimeout(closeWindow, 1000);
}
}

function showDownloadStartedScreen() {
document.getElementsByTagName("body")[0].className = "downloaded";
}
</script>
<style>
.indicator {
position: absolute;
}

.downloaded .downloadedTitle,
.title,
.detail,
.indicator {
display: block;
}

.title {
width: 500px;
overflow: hidden;
text-overflow: ellipsis;
}

.downloadedTitle,
.downloaded .title,
.downloaded .detail,
.downloaded .indicator {
display: none;
}

.exportIframe {
display: none;
}

.ms-crm-RefreshDialog-Header-Title .ms-crm-TextAutoEllipsis {
width:calc(100% - 76px);
}

.closeImage {
height: 16px;
width: 16px;
}

.showProgressForm {
height: 100%;
}
</style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server" class="showProgressForm" ShowButtons="false" ShowHeader="false"></frm:DialogForm>
<div id="dialogHeader" class="ms-crm-RefreshDialog-Header">
<a href="#" class="ms-crm-RefreshDialog-FirstTopButton" id="closeButton" tabindex="1">
<img src="/_imgs/CloseDialog.png" class="closeImage" alt='<loc:text resourceid="InlineEdit.FlyOut.Close" runat="server" />' onclick="closeWindow();" />
</a>
<div id="dialogTitle" class="ms-crm-RefreshDialog-Header-Title ms-crm-TextAutoEllipsis">
<div class="title">
<%= DialogHeaderText %>
</div>
<div class="downloadedTitle">
<%= DownloadStartedText %>
</div>
</div>
<div class="ms-crm-RefreshDialog-Header-Desc detail">
<asp:Label ID="DialogDescription" runat="server"><%= DialogDetailText %></asp:Label>
</div>
</div>
<div id='loadingContainer' class="indicator">
<img id="loadingImage" alt='<loc:text resourceid="InlineEditForm_Processing" runat="server" />' src="/_imgs/processing_loader.gif">
</div>
<iframe name="exportIFrame" title="" class="exportIframe"></iframe>
</body>
</html>
