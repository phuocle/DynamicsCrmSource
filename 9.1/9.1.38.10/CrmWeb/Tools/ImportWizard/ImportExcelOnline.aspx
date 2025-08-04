<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.ImportExcelOnline" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="Javascript" type="text/javascript">

Sys.Application.add_load(PageOnLoad);
function PageOnLoad() {
var importExcelOnlineMainDiv = window.document.getElementById("importExcelOnlineDiv");
var errorDiv = window.document.getElementById("errorDiv");
if("<% =hasError%>" == "True")
{
importExcelOnlineMainDiv.style.display = "none";
errorDiv.style.display = "inline";
}
else if ("<% =hasError%>" == "False")
{
importExcelOnlineMainDiv.style.display = "inline";
errorDiv.style.display = "none";
GetImportMapXml();
}
}

function GetImportMapXml() {
var propertiesToPost = new Array("ImportId", "ImportMapId", "ImportType", "HeaderColumnIndexesToBeIgnored");
var command = new RemoteCommand("ImportWebService", "GetImportMapXml"),
wizardDataXml = ConstructPostData(propertiesToPost);
command.SetParameter("wizardDataXml", wizardDataXml);
return command.Execute(autoMappingForUpdateModeDone);
}

function GetDataValues(property) {
switch (property) {
case "ImportId":
return "<%=importId.ToString("B", CultureInfo.InvariantCulture) %>";
case "ImportMapId":
return "{00000000-0000-0000-0000-000000000000}";
case "ImportType":
return "<%=importType.ToString() %>";
case "MapChanged":
return false;
case "MapXml":
return mapXml;
case "DataDelimiter":
case "FieldDelimiter":
case "IsFirstRowHeader":
return null;
case "DefaultOwner":
return defaultOwner;
case "DefaultOwnerType":
return defaultOwnerType;
case "DuplicateDetection":
return true;
case "HeaderColumnIndexesToBeIgnored":
return "<%=HeaderColumnIndexesToBeIgnoredCsv %>"
}
}

function ConstructPostData(propertiesList) {
for (var postData = "<ImportWizardData>", i = 0; i < propertiesList.length; i++) {
var property = propertiesList[i],
propertyValue = GetDataValues(property);
if (IsNull(propertyValue))
continue;
if (property !== "MapXml")
propertyValue = CrmEncodeDecode.CrmXmlEncode(propertyValue);
postData = postData + "<" + property + ">" + propertyValue + "</" + property + ">"
}
postData = postData + "</ImportWizardData>";
return postData
}

function autoMappingForUpdateModeDone(oResult) {
if (oResult.Success == true) {
mapXml = oResult.ReturnValue;

if (!IsNull(Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()) && !IsNull(Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0])) {
defaultOwner = Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0].id;
defaultOwnerType = Mscrm.FormControlInputBehavior.GetBehavior("assignTo").get_dataValue()[0].type;
}
SubmitImportJob();
}
}

function SubmitImportJob() {
var propertiesToPost = new Array("ImportId", "ImportMapId", "MapXml", "MapChanged", "DataDelimiter", "FieldDelimiter", "IsFirstRowHeader", "DuplicateDetection", "DefaultOwner", "DefaultOwnerType", "ImportType");
var command = new RemoteCommand("ImportWebService", "SubmitImportJob"),
wizardDataXml = ConstructPostData(propertiesToPost);
command.SetParameter("wizardDataXml", wizardDataXml);
return command.Execute(jobSubmissionDone);
}

function jobSubmissionDone(oResult) {
if (oResult.Success == true) {
importMapId = '{' + oResult.ReturnValue + '}';
}
else {
}
}

function openMyImportsWindow() {
openStdWin(Mscrm.CrmUri.create("/workplace/home_import.aspx"), "Import_Details", 900, 600, null);
}
</script>
</head>
<body>
<div class="ms-crm-importExcelOnline-OwnerDiv" >
<span>
<sdk:LookupControl id="assignTo" LookupClass="BasicOwner" runat="server" />
</span>
</div>
<div class="ms-crm-importExcelOnline" >
<div id="importExcelOnlineDiv" >
<div>
<span class="ms-crm-importExcelOnline-PageTitle" >
<loc:text resourceid="ImportWizard.FinishPage.Title" runat="server" />
</span>
</div>
<div class="ms-crm-importExcelOnline-SubtitleTextdiv" >
<span class="ms-crm-importExcelOnline-SubtitleText" >
<loc:text resourceid="ImportWizard.FinishPage.InfoBalloon.FinalMessageLine1" runat="server" />
</span>
</div>
<div class="ms-crm-importExcelOnline-FinishMessageDiv" >
<span class="ms-crm-importExcelOnline-FinishMessageText" >
<loc:text resourceid="ImportWizard.FinishPage.InfoBalloon.FinalMessageLine2.Part1" runat="server" />
<a class='ms-crm-importExcelOnline-ImportLink' href='#' onclick='window.openMyImportsWindow()' >
<loc:text resourceid="ImportWizard.FinishPage.InfoBalloon.FinalMessageLine2.Part2" runat="server" />
</a>
</span>
</div>
<div class="ms-crm-importExcelOnline-FinishMessageDiv" >
<span class="ms-crm-importExcelOnline-FinishMessageText" >
<loc:text resourceid="ImportWizard.ImportExcelOnline.ImportWarningMessageLine" runat="server" />
</span>
</div>
</div>
<div id="errorDiv" style="display:none">
<div>
<span class="ms-crm-importExcelOnline-PageTitle" >
<% =errorMessageTitle.ToString() %>
</span>
</div>
<div class="ms-crm-importExcelOnline-FinishMessageDiv" >
<img class="ms-crm-importExcelOnline-ErrorImage" alt="" src="/_imgs/Tools/Notification_Error_16.png" />
<span class="ms-crm-importExcelOnline-FinishMessageText">
<% =errorMessage.ToString() %>
</span>
</div>
</div>
</div>
<div class="ms-crm-importExcelOnline-CloseButtonDiv" >
<button id="importExcelOnlineClose" onclick="closeWindow();" title="<loc:text resourceid="ImportWizard.ImportExcelOnline.CloseButton.ToolTip" runat="server" />" class="ms-crm-RefreshDialog-Button ms-crm-importExcelOnline-CloseButton">
<loc:text resourceid="ImportWizard.ImportExcelOnline.CloseButton.Text" runat="server" />
</button>
</div>
</body>
</html>
