<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.UploadFilePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.div1Style
{
position:absolute;
top: 0px;
height:30px;
}
.div2Style
{
position:absolute;
top:31px;
height:20px;
}
.uploadFrame
{
position: absolute;
top: 70px;
bottom: 0px;
width: 100%;
}
</style>
<script language="Javascript" type="text/javascript">

var hasUserChangedUploadFile;
var fileBeingUploaded = false;

var cancelClicked = false;
function OnBeforeWindowUnload(oEvent)
{
oEvent = oEvent.rawEvent;

if(fileBeingUploaded == true)
{
oEvent.returnValue = LOCID_FILE_UPLOAD_IN_PROGRESS;
return LOCID_FILE_UPLOAD_IN_PROGRESS;
}
else if(cancelClicked)
{
if(WizardGetProperty("MapChanged") == true)
{
oEvent.returnValue = LOCID_MAPPING_WILLBE_LOST;
return LOCID_MAPPING_WILLBE_LOST;
}
}
else if(showPrivilegeAlert)
{
return;
}
else
{
oEvent.returnValue = " ";
return " ";
}
}

function FailureCallBackFromUpload(importId)
{
WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON);
SetProgressMessageDisplayState(false);
WizardSetProperty("ImportId", importId);
fileBeingUploaded = false;
hasUserChangedUploadFile = false;
}


function SuccessCallBackFromUpload(fileName, importId, importFileId, importType, headerColumnIndexesToBeIgnored)
{
WizardSetProperty("ImportId", importId);
WizardSetProperty("ImportFileName", fileName);
WizardSetProperty("ImportFileId", importFileId);
WizardSetProperty("ImportType", importType);
WizardSetProperty("HeaderColumnIndexesToBeIgnored", headerColumnIndexesToBeIgnored);

fileBeingUploaded = false;

if(importType == ImportType_Update)
{

WizardSetProperty("ImportMapId", "{00000000-0000-0000-0000-000000000000}");
WizardSetProperty("MapXml", null);
var propertiesToPost = new Array("ImportId", "ImportMapId", "ImportType", "HeaderColumnIndexesToBeIgnored");
CallImportWebService("GetImportMapXml", propertiesToPost, autoMappingForUpdateModeDone);
disableAllButtons();
}
else
{
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}

function autoMappingForUpdateModeDone(oResult)
{
if(oResult.Success == false)
{
FailureCallBackFromUpload(WizardGetProperty("ImportId"));
removeUploadedFile(true);
}
else
{
var mapXmlDoc = XUI.Xml.LoadXml(oResult.ReturnValue);
var unmappedEntityNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap[(@ProcessCode='" + ImportEntityProcessCode_Unmapped + "')]", null);
var unmappedAttributeMapNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap/AttributeMaps/AttributeMap[(ProcessCode='" + ImportEntityProcessCode_Unmapped + "')]", null);
var unmappedPicklistMapNodes = XUI.Xml.SelectNodes(mapXmlDoc, "/Map/EntityMaps/EntityMap/AttributeMaps/AttributeMap/PicklistMaps/PicklistMap[ProcessCode='" + ImportEntityProcessCode_Unmapped + "']", null);

if(unmappedEntityNodes.length > 0)
{
alert(LOCID_UVI_ENTITY_AUTOMAP_FAILED);
FailureCallBackFromUpload(WizardGetProperty("ImportId"));
removeUploadedFile(true);
}
else if (unmappedAttributeMapNodes.length > 0)
{
var attributeList = "\r\n";
for( i = 0 ; i < unmappedAttributeMapNodes.length ; i++)
{
var attributeName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(unmappedAttributeMapNodes[i], "SourceAttributeName", null));
attributeList += attributeName + "\r\n";
}
alert(formatString(LOCID_UVI_ATTR_AUTOMAP_FAILED, attributeList));

FailureCallBackFromUpload(WizardGetProperty("ImportId"));
removeUploadedFile(true);
}
else
{
var continueToSubmitPage = true;
if(unmappedPicklistMapNodes.length > 0)
{
var picklistValues = "\r\n";
for( i = 0 ; i < unmappedPicklistMapNodes.length ; i++)
{
var picklistValue = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(unmappedPicklistMapNodes[i], "SourceValue", null));
picklistValues += picklistValue + "\r\n";
}
if(!confirm(formatString(LOCID_UVI_PKLST_AUTOMAP_FAILED, picklistValues)))
{
FailureCallBackFromUpload(WizardGetProperty("ImportId"));
removeUploadedFile(true);
continueToSubmitPage = false;
}
}

if(continueToSubmitPage)
{

WizardSetProperty("MapXml", oResult.ReturnValue);
WizardSetProperty("MapXmlImportId", WizardGetProperty("ImportMapId"));

detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}
}
}

function removeUploadedFile(updateViaImportFile)
{
WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
var importFileFullName = WizardGetProperty("ImportFileName");
if (!IsNull(importFileFullName))
{
hasUserChangedUploadFile = true;
var frameContentWindow = document.getElementById("uploadFileFrame").contentWindow;
frameContentWindow.enableFileUpload();
WizardSetProperty("ImportFileName", null);
WizardSetProperty("RemoveUploadedFile",true);

if(updateViaImportFile != true)
{
frameContentWindow.document.getElementById("enclosedDiv").style.display = "none";
document.getElementById("removeDiv2").style.display = "none";
document.getElementById("removeDiv1").style.display = "block";
}
}
}


function deleteImportFilesDone(oResult)
{
if(oResult.Success == false)
{

alert(LOCID_IW_IMPORT_CLEAN_FAILED);
SetProgressMessageDisplayState(false);
PageOnLoad();
}
else
{
WizardSetProperty("RemoveUploadedFile",false);
ResetImportState();
SubmitIframeForm();
}
}

function moveNext()
{
var shortName = document.getElementById("uploadFileFrame").contentWindow.getFileName();
shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);
var fileExtension = shortName.slice(shortName.lastIndexOf(".") + 1).toLowerCase();
if (!isNullOrEmptyString(fileExtension)
&& fileExtension != "xml"
&& fileExtension != "csv"
&& fileExtension != "zip"
&& fileExtension != "txt"
&& fileExtension != "xlsx")
{
alert(LOCID_IW_UNSUPPORTED_FILETYPE);
return;
}

WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
var importFileFullName = WizardGetProperty("ImportFileName");

var importId = WizardGetProperty("ImportId");
var importFileId = WizardGetProperty("ImportFileId");

if(hasUserChangedUploadFile || WizardGetProperty("RemoveUploadedFile") == true)
{
if(!IsNull(importFileFullName) || WizardGetProperty("RemoveUploadedFile") == true)
{
if(shortName.length > 40)
shortName = shortName.substring(0,35);

DeleteImportFilesInThisSession(deleteImportFilesDone);

XUI.Html.SetText(document.getElementById("progressMessage"), formatString(LOCID_IW_FILEUPLOAD_PROGRESS, shortName))
SetProgressMessageDisplayState(true);
}
else
SubmitIframeForm();
}
else
{
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}

function SubmitIframeForm()
{
WizardSetButtonEnabled(false, _WizardButtonsEnum.CANCELBUTTON);

try
{
var frame = document.getElementById("uploadFileFrame");
frame.contentWindow.document.getElementById("uploadFileform").action = "ImportFileUpload.aspx?action=fileUpload";
fileBeingUploaded = true;
frame.contentWindow.SubmitForm();
WizardSetProperty("MapChanged", false);
}
catch(e)
{
alert(LOCID_IW_IMPORT_INVALID_FILE);
FailureCallBackFromUpload();
}
WizardSetButtonEnabled(true, _WizardButtonsEnum.CANCELBUTTON);
}

function ResetImportState()
{

WizardSetProperty("ImportFileName", null);
WizardSetProperty("ImportFileId", null);
WizardSetProperty("ImportId", null);
WizardSetProperty("RemoveUploadedFile",null);
WizardSetProperty("ImportType", null);
WizardSetProperty("HeaderColumnIndexesToBeIgnored", null);



WizardSetProperty("FieldDelimiter", null);
WizardSetProperty("DataDelimiter", null);
WizardSetProperty("IsFirstRowHeader", null);
WizardSetProperty("DelimitersUpdated", null);
WizardSetProperty("UploadPreviewPageWSError", null);


WizardSetProperty("ImportMapId", null);
WizardSetProperty("WizardMode", null);
WizardSetProperty("MapXml", null);
WizardSetProperty("MapXmlImportId", null);
WizardSetProperty("DefaultImportMapForZipFiles", null);


WizardSetProperty("MapChanged", null);
WizardSetProperty("EntityMapPageWSError", null);


WizardSetProperty("JumpBackToEntityMappingPage", null);
WizardSetProperty("JumpBackToAttributeMappingPage", null);
WizardSetProperty("JumpBackToDataSourcePage", null);


WizardSetProperty("DuplicateDetection", null);
WizardSetProperty("DefaultOwner", null);
WizardSetProperty("DefaultOwnerType", null);
WizardSetProperty("OwnerDisplayName", null);
}


function GetNextPageDefinition()
{
if(WizardGetProperty("ImportType") == ImportType_Update)
{
var nextPageUrl = GetNextWizardPageUrl("MapSummaryPage");
var dataToPost = ConstructPostData(new Array("MapXml"));
return new NextPageDefinition(nextPageUrl, dataToPost);
}
else
{
var nextPageUrl = GetNextWizardPageUrl("UploadFilePage");
var dataToPost = ConstructPostData(new Array("ImportId", "ImportFileName"));
return new NextPageDefinition(nextPageUrl, dataToPost);
}
}

function OnCancelClicked()
{
cancelClicked = true;
WizardNavigate(_WizardNavigateEnum.CANCEL);
}



$addHandler(window, "load", PageOnLoad);
function PageOnLoad()
{
attachWindowOnUnload(OnWizardUnload, parent.window);
attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);

SetProgressMessageDisplayState(false);
if(showPrivilegeAlert)
{
alert(LOCID_PRIVILEGES_MISSING);
closeWindow();
}

var cancelBtn = document.getElementById("buttonCancel");
cancelBtn.onclick = OnCancelClicked;

var frameContentWin = document.getElementById("uploadFileFrame").contentWindow;
var frameContentDoc = frameContentWin.document;

if (!IsNull(WizardGetProperty("ImportFileName")))
{
WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
frameContentDoc.getElementById("enclosedDiv").style.display = "block";
document.getElementById("removeDiv2").style.display = "block";
frameContentWin.disableFileUpload();

var shortName=WizardGetProperty("ImportFileName");
shortName=shortName.slice(shortName.lastIndexOf("\\") + 1);

frameContentDoc.getElementById("enclosedDivText").title = formatString(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("ImportWizard.UploadFilePage.EnclosedDiv.EnclosedDivText"))%>,shortName);
XUI.Html.SetText(frameContentDoc.getElementById("enclosedDivText"), formatString(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("ImportWizard.UploadFilePage.EnclosedDiv.EnclosedDivText"))%>,shortName));

XUI.Html.SetText($get("infoBalloonText"), formatString(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("ImportWizard.UploadFilePage.InfoBalloonText"))%>,shortName));
}

hasUserChangedUploadFile = false;
XUI.Html.SetText(document.getElementById("warningBalloonText"), <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("ImportWizard.UploadFilePage.WarningBalloonText"))%>);
}

function uploadFileNameChanged()
{
var enableNextButton = true;
var frameContentWindow = document.getElementById("uploadFileFrame").contentWindow;
var fileName = document.getElementById("uploadFileFrame").contentWindow.getFileName();
shortName = fileName.slice(fileName.lastIndexOf("\\") + 1);
if(fileName === "")
{
enableNextButton = false;
}
document.getElementById("removeDiv1").style.display = "none";
hasUserChangedUploadFile = true;
WizardSetButtonEnabled(enableNextButton, _WizardButtonsEnum.NEXTBUTTON);
frameContentWindow.document.getElementById("hiddenFileName").textContent=shortName;
frameContentWindow.document.getElementById("uploadFileNameId").setAttribute("aria-labelledby","dataFileNameLabel uploadFileNameId");
}
</script>
</head>
<body>
<frm:wizardform id="crmForm" runat="server">
<div id="mainBody" style="top: 0px; bottom: 30px; position: absolute; width: 100%;">
<loc:Text ResourceId="ImportWizard.UploadFilePage.Header" runat="server"/>
<br />
<br />
<br />
<div id="removeDiv1" class="mscrm-iw-InfoBarBlue div1Style" style="display:none;">
<img alt='' class="mscrm-iw-InfoBarBalloon" src='/_imgs/importwizardinfo.gif'>&nbsp;&nbsp;<span id="infoBalloonText" class="mscrm-iw-InfoBarText" runat="server"></span>
</div>
<div id="removeDiv2" class="mscrm-iw-InfoBarYellow div2Style" style="display:none;">
<img alt='' class="mscrm-iw-InfoBarBalloon" src='/_imgs/importwizard_yellowwarning.gif'>&nbsp;&nbsp;<span id="warningBalloonText" class="mscrm-iw-InfoBarText" runat="server"></span>
</div>
<br />
<br />
<div class="uploadFrame">
<iframe id="uploadFileFrame" class="mscrm-iw-UploadFilePage-UploadFileFrame" name="uploadFileFrame" src="ImportFileUpload.aspx" scrolling="auto" frameborder="0">
</iframe>
</div>
</div>
<div id="progressDiv" class="mscrm-iw-ProgressDiv">
<table class="mscrm-iw-ProgressTable">
<tr>
<td valign='middle' align='center'>
<img alt='' src='/_imgs/AdvFind/progress.gif' />
<br/>
<label id="progressMessage"></label>
</td>
</tr>
</table>
</div>
</frm:WizardForm>
</body>
</html>
