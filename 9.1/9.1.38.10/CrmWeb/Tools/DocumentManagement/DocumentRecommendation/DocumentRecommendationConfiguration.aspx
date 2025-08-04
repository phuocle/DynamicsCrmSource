<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.DocumentRecommendationConfigurationPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>

<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

var _isDocumentRecommendationsEnabled = ('<%=IsDocumentRecommendationsEnabled%>').toString();
var _isEntitiesConfiguredForDocumentRecommendations = "false";
var _pageNotificationLabel = document.createElement('div');
_pageNotificationLabel.id = "pageNotificationLabel";

function pageLoad() {
var entityTable = $get("entitySelectionTable");
$get("footerText").style.visibility = "hidden";
$get("checkAll").title = LOCID_CHECKALLTOOLTIP_TEXT;
$get("applyButton").title = LOCID_APPLYBOTTONTOOLTIP;
$get("applyButton").disabled = true;
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-disabled');
$get("txtExternalBaseUrl").title = LOCID_EXTERNALBASEURLTLTIP_TXT;

if (Mscrm.Utilities.isIE7()) {
entityTable.style.width = "99.5%";
}
else {
entityTable.style.width = "100%";
}

if (Mscrm.Utilities.isIE()) {
var pageNotificationDiv = document.getElementById("pageNotificationDiv");
pageNotificationDiv.innerHTML = "";
}

if (ENTITY_COUNT == 0) {
var pageNotification = document.getElementById("pageNotification");
var _pageNotificationDiv = document.getElementById("pageNotificationDiv");
_pageNotificationLabel.innerHTML = ('<%=EntitiesNotConfiguredForDocumentRecommendationsNotificationText%>');
pageNotification.appendChild(_pageNotificationLabel);
_pageNotificationDiv.innerHTML = ('<%=EntitiesNotConfiguredForDocumentRecommendationsNotificationTextWithoutAnchorTag%>')
document.getElementById("entitySelectionTableDiv").style.overflow = "hidden";
disableSelectAllCheckBoxAndApplyButton();
}
else {
_isEntitiesConfiguredForDocumentRecommendations = "true";
}

if (_isDocumentRecommendationsEnabled.toLowerCase() != "true") {
var pageNotification = document.getElementById("pageNotification");
var _pageNotificationDiv = document.getElementById("pageNotificationDiv");
_pageNotificationLabel.innerHTML = ('<%=PreRequisiteForDocumentRecommendationsNotMetNotificationText%>');
pageNotification.appendChild(_pageNotificationLabel);
_pageNotificationDiv.innerHTML = ('<%=PreRequisiteForDocumentRecommendationsNotMetNotificationTextWithoutAnchorTag%>');
document.getElementById("entitySelectionTableDiv").style.overflow = "hidden";
disableSelectAllCheckBoxAndApplyButton();
}

document.getElementById("pageNotificationRow").style.display = ((_isDocumentRecommendationsEnabled.toLowerCase() == "true") && (_isEntitiesConfiguredForDocumentRecommendations == "true")) ? 'none' : 'block';

Mscrm.DocumentRecommendationPageHelper.updateEntityTableCheckBoxState(ENTITY_COUNT);

}

function onApplyChanges() {
if (Mscrm.DocumentRecommendationPageHelper.savePageProperties(ENTITY_COUNT)) {
var entitydocumentRecommendedXml = DOCR_SELECTED_ENTITY;
if (!isNullOrEmptyString(entitydocumentRecommendedXml)) {
var externalBaseUrl = $get("txtExternalBaseUrl").value;
Mscrm.DocumentRecommendationPageHelper.saveDocumentRecommendationSettings(SaveDocumentRecommendedSettingsCallBackFunction, externalBaseUrl);
}
else {
}
}
}

function SaveDocumentRecommendedSettingsCallBackFunction(oResult) {
if (oResult.Success == false) {
$get("footerText").style.visibility = "visible";
$get("applyButton").disabled = false;
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-enabled');
document.getElementById("footerText").innerText = LOCID_UPDATEFAILURE_TEXT;
return;
}
else {
document.getElementById("footerText").innerText = LOCID_SUCCESS_TEXT;
$get("applyButton").disabled = true;
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-disabled');
Mscrm.DocumentRecommendationPageHelper.updateEntityTableCheckBoxState(ENTITY_COUNT);
}
}

function onEntityCheckBoxClick(domEvent) {
var checkBox = domEvent.target;
var checkAll = $get("checkAll");

if (checkBox.checked) {
DOCR_ENTITY_COUNT_SELECTED++;
}
else {
DOCR_ENTITY_COUNT_SELECTED--;
}
if (DOCR_ENTITY_COUNT_SELECTED == ENTITY_COUNT) {
checkAll.checked = true;
}
else {
checkAll.checked = false;
}
$get("footerText").style.visibility = "visible";
$get("applyButton").disabled = false;
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-enabled');
$get("footerText").innerText = LOCID_UNSAVED_TEXT;
}

function selectAllEntities() {
var entitySelectionTable = $get("entitySelectionTable");
var checkAll = $get("checkAll");
for (i = 0; i < entitySelectionTable.rows.length; i++) {
var chkBox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(entitySelectionTable.rows[i]));
chkBox.checked = checkAll.checked;
}
DOCR_ENTITY_COUNT_SELECTED = checkAll.checked ? ENTITY_COUNT : 0;
$get("applyButton").disabled = false;
$get("footerText").style.visibility = "visible";
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-enabled');
document.getElementById("footerText").innerText = LOCID_UNSAVED_TEXT;
}

function onChangeExternalBaseUrl() {
$get("applyButton").disabled = false;
$get("footerText").style.visibility = "visible";
$get("applyButton").setAttribute('class', 'mscrm-documentRecommendation-basic-Button button-enabled');
document.getElementById("footerText").innerText = LOCID_UNSAVED_TEXT;
}

function disableSelectAllCheckBoxAndApplyButton(){
document.getElementById("checkAll").disabled = "true";
document.getElementById("applyButton").disabled = "true";
}

</script>
</head>
<body>
<div style="overflow-y: auto; height: 80%;">
<div id="entityTableDiv" style="margin-left: 30px; margin-right: 30px;" runat="server">
<div class="mscrm-documentRecommendation-Title">
<span>
<loc:text resourceid="Web.Tools.DocumentRecommendation.ConfigurationPage.Title" runat="server" />
</span>
</div>
<table width="100%" style="margin-top: 32px;">
<tr>
<td width="50%" style="vertical-align: top;">
<table id="entityTable" class="mscrm-documentRecommendation-EntityTable" cellpadding="1" cellspacing="1">
<tbody class="mscrm-documentRecommendation-entityTableBody" tabindex="-1">
<tr id="pageNotificationRow" style="background-color: #fff19e; border: 1px solid #D7D889;">
<td class="mscrm-documentRecommendation-PageNotificationImageTd">
<img src="/_imgs\Tools\RecommendedDocuments_NotificationImage_16.gif" width="16" height="16" alt="Alert" /></td>
<td class="mscrm-documentRecommendation-PageNotificationTextTd">
<div id="pageNotification">
<div id="pageNotificationDiv" class="ms-crm-div-NotVisible"></div>
</div>
</td>
</tr>
<tr style="display: block;">
<td>
<div style="color: #000000; font-size: 12px; line-height: 1.2;">
<loc:Text ResourceId="Web.Tools.DocumentRecommendation.SettingsPage.EntityTable.HeadingText" runat="server" />
</div>
</td>
</tr>
<tr style="display: block; margin-top: 6px; border-top: thin solid; border-color: #BFBFBF;">
<td>
<img src="/_imgs/ico/16_info.gif" alt="" style="margin-top: 6px;" width="16" height="16" /></td>
<td>
<div style="color: #666666; font-size: 12px; margin-top: 6px;" class="mscrm-documentRecommendation-TableDescription">
<%=ConfigureDocumentRecommendationDescription%>
</div>
</td>
</tr>
<tr class="mscrm-documentRecommendation-Section-Title">
<td>
<div>
<loc:Text ResourceId="Web.Tools.DocumentRecommendation.SettingsPage.EntityTable.Title" runat="server" />
</div>
</td>
</tr>
<tr style="padding-top: 8px;">
<td>
<table id="entityTableContainer" class="mscrm-documentRecommendation-TableEntities">
<tr style="border-bottom: thin solid; border-top: thin solid; border-color: #BFBFBF;">
<td class="mscrm-documentRecommendation-HeaderCheckBoxColumn">
<ui:CheckBox id="checkAll" onclick="selectAllEntities();" runat="server" />
</td>
<td style="width: 2px">
<img alt="" src="/_imgs/grid/bar_line.gif?ver=-50714400" class="ms-crm-List-ResizeBar ms-crm-ImageStrip-resize" id="column_separator">
</td>
<td class="mscrm-documentRecommendation-HeaderEntityColumn">
<loc:Text ResourceId="Object_Singular_Entity" runat="server" />
</td>
</tr>
<tr>
<td colspan="3" height="100%">
<div id="entitySelectionTableDiv" class="mscrm-documentRecommendation-OverflowDiv">
<table id="entitySelectionTable" tabindex="-1" class="mscrm-documentRecommendation-TableGeneric" runat="server">
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
<td width="50%" style="vertical-align: top;">
<table id="externalSuggestions" class="mscrm-documentRecommendation-ExternalSuggestions" cellpadding="1" cellspacing="1">
<tbody class="mscrm-documentRecommendation-entityTableBody" tabindex="-1">
<tr style="display: block;">
<td>
<div style="line-height: 1.2;" class="mscrm-documentRecommendation-TableTitle">
<loc:Text ResourceId="Web.Tools.DocumentRecommendation.SettingsPage.ExternalSuggestions.HeadingText" runat="server" />
</div>
</td>
</tr>
<tr style="display: block; margin-top: 6px; border-top: thin solid; border-color: #BFBFBF;">
<td>
<img src="/_imgs/ico/16_info.gif" alt="" width="16" height="16" style="margin-top: 6px;"/></td>
<td>
<div style="margin-top: 6px;" class="mscrm-documentRecommendation-TableTitle mscrm-documentRecommendation-TableDescription">
<%=ConfigureDocumentRecommendationExternalSuggestionsDescription%>
</div>
</td>
</tr>
<tr class="mscrm-documentRecommendation-Section-Title">
<td>
<div>
<loc:Text ResourceId="Web.Tools.DocumentRecommendation.SettingsPage.ExternalSuggestions.Title" runat="server" />
</div>
</td>
</tr>
<tr style="display: block;">
<td>
<div class="mscrm-documentRecommendation-TableTitle">
<loc:Text ResourceId="Web.Tools.DocumentRecommendation.SettingsPage.ExternalSuggestions.LabelText" runat="server" />
</div>
</td>
</tr>
<tr style="margin-top: 6px;">
<td>
<div>
<ui:TextBox id="txtExternalBaseUrl" class="mscrm-documentRecommendation-TableTitle" tabindex="0" onchange="onChangeExternalBaseUrl();" runat="Server" />
</div>
</td>
</tr>
<tr>
<td>
<table tabindex="-1" style="width: 100%; table-layout: fixed;"></table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</table>
</div>
<table style="margin-top: 10px;">
<tr>
<td>
<div id="footer" class="mscrm-documentRecommendation-Footer">
<div class="mscrm-documentRecommendation-FooterTextDiv">
<label id="footerText" class="mscrm-documentRecommendation-Footer-Label" aria-live="polite">
<loc:text ID="footerLabel" resourceid="Web.Tools.DocumentRecommendation.SettingsPage.FooterText" runat="server" />
</label>
<button id="applyButton" class="mscrm-documentRecommendation-basic-Button" onclick="onApplyChanges()">
<loc:text resourceid="Web.Tools.DocumentRecommendation.Config.ApplyButton" runat="server" />
</button>
</div>
</div>
</td>
</tr>
</table>
</div>
</body>
</html>
