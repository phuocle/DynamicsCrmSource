<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.KnowledgeManagement.EnableKnowledgeManagementPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
.ms-crm-Validation-Progress
{
height: 100%;
width: 100%;
background-color: #ffffff;
top: 0px;
bottom: 0px
}
</style>

<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
function selectAllEntities() {
var entitySelectionTable = $get("entitySelectionTable");
var checkAll = $get("checkAll");
for (i = 0; i < entitySelectionTable.rows.length; i++) {
var chkBox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(entitySelectionTable.rows[i]));
chkBox.checked = checkAll.checked;
}
KM_ENTITY_COUNT_SELECTED = checkAll.checked ? ENTITY_COUNT : 0;
}

function onEntityCheckBoxClick(domEvent) {
var chkBox = domEvent.target;
var chkAll = $get("checkAll");

if (chkBox.checked)
KM_ENTITY_COUNT_SELECTED++;
else
KM_ENTITY_COUNT_SELECTED--;

if (KM_ENTITY_COUNT_SELECTED == ENTITY_COUNT) {
chkAll.checked = true;
}
}

function GetNextPageDefinition() {
var oUrl = Mscrm.CrmUri.create("/Tools/KnowledgeManagement/KmSettingsWizard/SettingsFinalize.aspx");
return new NextPageDefinition(oUrl, Mscrm.EnableKnowledgeManagementPageHelper.getWizardDataToPost());
}

function moveNext() {
if (Mscrm.EnableKnowledgeManagementPageHelper.savePageProperties(ENTITY_COUNT)) {
if ( isCurrentSolutionParature() ) {
var siteUrl = WizardGetProperty("DefaultSiteUrl");
var accountID = WizardGetProperty("AccountID");
var department = WizardGetProperty("Department");
var supportURL = WizardGetProperty("SupportURL");
var validations = 0;
if (!isNullOrEmptyString(siteUrl)) {
Mscrm.EnableKnowledgeManagementPageHelper.validateSiteURL();
}

if (!isNullOrEmptyString(accountID)) {
Mscrm.EnableKnowledgeManagementPageHelper.validateAccountID();
}

if (!isNullOrEmptyString(department)) {
Mscrm.EnableKnowledgeManagementPageHelper.validateDepartment();
}

var result = Mscrm.EnableKnowledgeManagementPageHelper.validateSupportUrl();
if (result != 0) {
WizardSetProperty("ValidateResult", result);
WizardNavigate(_WizardNavigateEnum.NEXT);
}

Mscrm.EnableKnowledgeManagementPageHelper.validate(siteUrl, accountID, department,
function () {
validations = 0;
WizardSetProperty("ValidateResult", validations);
WizardNavigate(_WizardNavigateEnum.NEXT);
},
function (result) {
!IsNull(result) ? validations = result : validations = 1;
WizardSetProperty("ValidateResult", validations);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
);
}
else {
var validations = 100;
var useExtPortal = WizardGetProperty("ChkUseExtPortal");
if (useExtPortal) {
var NativeCRMUrl = WizardGetProperty("NativeCRMUrl");
validations = Mscrm.EnableKnowledgeManagementPageHelper.validateNativeCrmUrl();
}

WizardSetProperty("ValidateResult", validations);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}

}

function OnUserCancel() {
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function pageLoad() {
var entityTable = $get("entitySelectionTable");

if (Mscrm.Utilities.isIE7()) {
entityTable.style.width = "99.5%";
}
else {
entityTable.style.width = "100%";
}

$get("selKnowledgeSolution").style.width = "100%";
var isParature = Mscrm.EnableKnowledgeManagementPageHelper.loadIsParature();
WizardSetProperty("IsParature", isParature);
$get("selKnowledgeSolution").value = (isParature == true) ? "parature" : "nativecrm";

var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
var txtAccountId = $get("txtAccountId");
var txtDepartment = $get("txtDepartment");
var txtSupportURL = $get("txtSupportURL");
$get('buttonCancel').onclick = OnUserCancel;
Mscrm.EnableKnowledgeManagementPageHelper.initializeControls(ENTITY_COUNT);

$addHandler(txtAccountId, 'blur', OnTextBoxBlur);
$addHandler(txtDepartment, 'blur', OnTextBoxBlur);
$addHandler(txtDepartment, 'keyup', OnTextBoxKeyUp);
$addHandler(txtSupportURL, 'blur', OnTextBoxBlur);
$addHandler(txtSupportURL, 'keyup', OnTextBoxKeyUp);
$addHandler(txtNativeCRMUrl, 'blur', OnTextBoxBlur);
$addHandler(txtNativeCRMUrl, 'keyup', OnTextBoxKeyUp);

applyStyleForTextBoxes();

txtSiteCollectionUrl.readOnly = true;
txtAccountId.readOnly = true;
var selParatureInstance = $get("selParatureInstance");
selParatureInstance.style.width = "100%";

var imgDisplay = document.getElementById("paratureImage").style.display;
if (imgDisplay == "" || imgDisplay == "none")
Mscrm.EnableKnowledgeManagementPageHelper.validateParatureInstance();

if (! $get("chkUseExtPortal").checked) {
$get("txtNativeCRMUrl").disabled = true;
}

if (isCurrentSolutionParature()) {
$get("nativeCRMDetailsTable").style.display = "none";
$get("paratureDetailsTable").style.display = "";
}
else {
$get("nativeCRMDetailsTable").style.display = "";
$get("paratureDetailsTable").style.display = "none";
}

EnableDisableButtons();
}
Sys.Application.add_load(pageLoad);
Sys.Application.add_unload(pageUnload);

var bAccGrayTextOn = false;
var bDepGrayTextOn = false;
var bSupGrayTextOn = false;
var bCrmUrlGrayTextOn = false;
var oldFontStyle;
var oldColor;

function isCurrentSolutionParature() {
var selKnowledgeSolution = $get("selKnowledgeSolution");
return selKnowledgeSolution.value == "parature";
}

function applyStyleForTextBox(textBox) {

oldFontStyle = textBox.style.fontStyle;
oldColor = textBox.style.color;
textBox.style.fontStyle = "italic";
textBox.style.color = "Gray";
switch (textBox.id) {
case "txtAccountId":
textBox.value = LOCID_KM_ACCOUNT_GRAYTEXT;
bAccGrayTextOn = true;
break;
case "txtDepartment":
textBox.value = LOCID_KM_DEPARTMENT_GRAYTEXT;
bDepGrayTextOn = true;
$addHandler(textBox, 'focus', OnTextBoxFocus);
break;
case "txtSupportURL":
textBox.value = LOCID_KM_SUPPORTURL_GRAYTEXT;
bSupGrayTextOn = true;
$addHandler(textBox, 'focus', OnTextBoxFocus);
break;
case "txtNativeCRMUrl":
textBox.value = LOCID_KM_NATIVECRMURL_GRAYTEXT;
bCrmUrlGrayTextOn = true;
$addHandler(textBox, 'focus', OnTextBoxFocus);
break;
}
}

function disableGrayStyleAndRemoveHandler(txtControlId) {
var txtControl = $get(txtControlId);
txtControl.value = "";
txtControl.style.fontStyle = "normal";
txtControl.style.color = "Black";
$removeHandler(txtControl, 'focus', OnTextBoxFocus);

switch (txtControlId) {
case "txtAccountId":
bAccGrayTextOn = false;
break;
case "txtDepartment":
bDepGrayTextOn = false;
break;
case "txtSupportURL":
bSupGrayTextOn = false;
break;
case "txtNativeCRMUrl":
bCrmUrlGrayTextOn = false;
break;
}
}

function OnTextBoxFocus() {
disableGrayStyleAndRemoveHandler(this.id);
}

function OnTextBoxBlur() {
validateAndApplyStyle(this.id);
}

function OnTextBoxKeyUp() {
EnableDisableButtons();
}

function validateAndApplyStyle(txtBoxId) {
if (isNullOrEmptyString($get(txtBoxId).value)) {
var textBox = $get(txtBoxId);
applyStyleForTextBox(textBox);
}
}

function pageUnload() {
var txtAccountId = $get("txtAccountId");
var txtDepartment = $get("txtDepartment");
var txtSupportURL = $get("txtSupportURL");
var txtNativeCRMUrl = $get("txtNativeCRMUrl");
try {
$removeHandler(txtAccountId, 'blur', OnTextBoxBlur);
$removeHandler(txtDepartment, 'focus', OnTextBoxFocus);
$removeHandler(txtDepartment, 'blur', OnTextBoxBlur);
$removeHandler(txtDepartment, 'keyup', OnTextBoxKeyUp);
$removeHandler(txtSupportURL, 'focus', OnTextBoxFocus);
$removeHandler(txtSupportURL, 'blur', OnTextBoxBlur);
$removeHandler(txtSupportURL, 'keyup', OnTextBoxKeyUp);
$removeHandler(txtNativeCRMUrl, 'focus', OnTextBoxFocus);
$removeHandler(txtNativeCRMUrl, 'blur', OnTextBoxBlur);
$removeHandler(txtNativeCRMUrl, 'keyup', OnTextBoxKeyUp);
}
catch (e) {
}
}

function Reset() {
if (confirm(window.LOCID_RESET_CONFORMATIONTEXT) == true) {
$get("txtSiteCollectionUrl").value = "";
applyStyleForTextBox($get("txtAccountId"));
applyStyleForTextBox($get("txtDepartment"));
$get("selParatureInstance").selectedIndex = -1;
applyStyleForTextBox($get("txtSupportURL"));
$get("buttonNext").disabled = true;
WizardSetProperty("IsReset", "true");
$get("btnReset").disabled = true;
if (true == WizardGetProperty("IsParature"))
{
Mscrm.EnableKnowledgeManagementPageHelper.saveKnowledgeManagementSettings(saveKnowledgeManagementSettingsCallbackFunction, true);
}
}
}

function saveKnowledgeManagementSettingsCallbackFunction(oResult, reset) {
if (oResult.Success == false) {
alert(LOCID_DOCM_RESETERROR);
return;
}
else {
Mscrm.EnableKnowledgeManagementPageHelper.updateKMSettings();
}
}

function onSolutionChange() {

if (isCurrentSolutionParature()) {
$get("paratureDetailsTable").style.display = "";
$get("nativeCRMDetailsTable").style.display = "none";

} else {
$get("paratureDetailsTable").style.display = "none";
$get("nativeCRMDetailsTable").style.display = "";
}

EnableDisableButtons();
}


function OnInstanceChange() {
Mscrm.EnableKnowledgeManagementPageHelper.populateInstanceValues();
var txtControl = $get("txtAccountId");
txtControl.style.fontStyle = "normal";
txtControl.style.color = "Black";
bAccGrayTextOn = false;
EnableDisableFields(false);
EnableDisableButtons();
$get("txtSiteCollectionUrl").style.backgroundColor = "#F0F0F0";
}

function EnableDisableFields(enableDisable) {
$get("txtSiteCollectionUrl").disabled = enableDisable;
$get("txtAccountId").disabled = enableDisable;
$get("txtDepartment").disabled = enableDisable;
$get("txtSupportURL").disabled = enableDisable;
$get("buttonNext").disabled = enableDisable;
$get("paratureImage").style.display = "none";
}

function applyStyleForTextBoxes() {
var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
var txtAccountId = $get("txtAccountId");
var txtDepartment = $get("txtDepartment");
var txtSupportURL = $get("txtSupportURL");
var txtNativeCRMUrl = $get("txtNativeCRMUrl");

if (isNullOrEmptyString(txtAccountId.value)) {
applyStyleForTextBox(txtAccountId);
}
if (isNullOrEmptyString(txtDepartment.value)) {
applyStyleForTextBox(txtDepartment);
}
if (isNullOrEmptyString(txtSupportURL.value)) {
applyStyleForTextBox(txtSupportURL);
}

if (isNullOrEmptyString(txtNativeCRMUrl.value)) {
applyStyleForTextBox(txtNativeCRMUrl);
}
}


function EnableDisableButtons() {
if (isCurrentSolutionParature()) {
if ($get("selParatureInstance").selectedIndex != -1 && $get("txtDepartment").value.length != 0 && $get("txtSupportURL").value.length != 0 && !bDepGrayTextOn && !bSupGrayTextOn) {
$get("btnReset").disabled = false;
$get("buttonNext").disabled = false;
}
else {
$get("btnReset").disabled = true;
$get("buttonNext").disabled = true;
}
}
else {
if (!$get("chkUseExtPortal").checked) {
$get("txtNativeCRMUrl").disabled = true;
$get("buttonNext").disabled = false;
}
else
{
$get("txtNativeCRMUrl").disabled = false;
if ($get("txtNativeCRMUrl").value.length != 0 && !bCrmUrlGrayTextOn) {
$get("buttonNext").disabled = false;
}
else
{
$get("buttonNext").disabled = true;
}
}
}
}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">

<table id="entityTable" width="100%" cellpadding=1 cellspacing=1>
<tr>
<td width="100%"><label style="font-weight:bold"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.EntityTable.Title" runat="server"/></label></td>
</tr>
<tr>
<td width="100%"><label class="KM-Wizard-TextFont"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.EntityTable.Description" runat="server"/></label></td>
</tr>
<tr><td>
<br />
<table class="km-wizard-TableEntities" border="1" cellpadding="0" cellspacing="0" >
<tr>
<td class="km-wizard-HeaderColumn1" >
<ui:CheckBox id="checkAll" onclick="selectAllEntities();" runat="server"/>
</td>
<td class="km-wizard-HeaderColumn2" >
<nobr>
<loc:Text ResourceId="Object_Plural_Entity" runat="server" />
</nobr>
</td>
</tr>
<tr><td colspan="2" height="100%" class="km-wizard-entity">
<div class="km-wizard-OverflowDiv" >
<table id="entitySelectionTable" class="km-wizard-TableGeneric" cellpadding="0" cellspacing="0" style="width:100%" runat="server">
</table>
</div>
</td></tr>

</table>
</td></tr>
<tr><td>
<table id="knowledgeSolutionTable" width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr>
<td width="100%"><label><br /><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.KnowledgeSolution.Title" runat="server" /></b></label></td>
</tr>
<tr>
<td width="100%"><label class="KM-Wizard-TextFont"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.KnowledgeSolution.Description" runat="server" /></label></td>
</tr>
<tr><td>
<table id="knowledgeSolutionTextTable" width="100%">
<tr>
<td width="25%" style="wordwrap: break-word;" id="colknowledgeSolution"><label for="selKnowledgeSolution"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.KnowledgeSolution.Label" runat="server" /></b></label></td>
<td width="75%" maxlength="1000" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.KnowledgeManagement.SettingsPage.KnowledgeSolution.InstanceDropdown' runat='server'/>"><select id="selKnowledgeSolution" onchange="onSolutionChange();" runat="server"><option id="optPatatureSolution" value="parature" runat="server">Parature</option><option id="optCrmSolution"  value="nativecrm" runat="server">Dynamics 365</option></select></td>
</tr>
</table>
</td></tr>
</table>
</td></tr>
<tr><td>
<table id="nativeCRMDetailsTable" width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr>
<td><label><br /><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.NativeCRMConnection.Title" runat="server" /></b></label></td>
</tr>
<tr>
<td><label class="KM-Wizard-TextFont"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.NativeCRMConnection.Description" runat="server" /></label></td>
</tr>
<tr><td>
<table id="nativeCRMDetailsTextTable" width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr><td>
<table width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr>
<td width="25%" style="wordwrap: break-word;" id="chkUseExtPortalLabel"><label for="chkUseExtPortal"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.UseExtPortal.Title" runat="server" /></b></label></td>
<td width="3%" ><ui:CheckBox id="chkUseExtPortal" margin-left="0" defaultChecked="true" onclick="EnableDisableButtons();" runat="server" /></td>
<td><label class="KM-Wizard-TextFont"><loc:Text Encoding='HtmlAttribute' ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.UseExtPortal.Description" runat="server" /></label></td>
</tr>
</table>
</td></tr>
<tr><td>
<table width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr>
<td width="25%"></td>
<td width="75%"><label class="KM-Wizard-TextFont"><loc:Text Encoding='HtmlAttribute' ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.UseExtPortal.DetailDescription" runat="server" /></label></td>
</tr>
</table>
<br />
</td></tr>
<tr><td>
<table width="100%" ellpadding="1" cellspacing="1" runat="server">
<tr>
<td width="25%" style="wordwrap: break-word;"><label for="txtNativeCRMUrl" class="required"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.CRMURL.Label" runat="server" /></b></label></td>
<td width="75%"><ui:TextBox id="txtNativeCRMUrl" MaxLength="1000" runat="Server" class="siteURL" onchange="EnableDisableButtons();" /></td>
</tr>
</table>
</td></tr>
</table>
</td></tr>
</table>
<br />
<tr><td>
<table id="paratureDetailsTable" width="100%" cellpadding="1" cellspacing="1" runat="server">
<tr>
<td><label><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.ParatureConnection.Title" runat="server" /></b></label></td>
</tr>
<tr>
<td><label class="KM-Wizard-TextFont"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.ParatureConnection.Description" runat="server" /></label></td>
</tr>
<tr><td>
<br />
<table width="100%" id="siteUrlTextTable">
<tr>
<td width="25%" style="wordwrap: break-word;" id="colParatureInstance"><label for="selParatureInstance"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Instance.Label" runat="server" /></b></label><img id="paratureImage" align="right" alt="" style="display: none" /></td>
<td width="75%" maxlength="1000" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.KnowledgeManagement.SettingsPage.ParatureConnection.InstanceDropdown' runat='server'/>"><ui:Select id="selParatureInstance" runat="server" onchange="OnInstanceChange();" /></td>
</tr>
<tr>
<td width="25%" style="wordwrap: break-word;"><label for="txtSiteCollectionUrl" class="required"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.URL.Label" runat="server" /></b></label></td>
<td width="75%"><ui:TextBox id="txtSiteCollectionUrl" MaxLength="255" runat="Server" class="siteURL" /></td>
</tr>
<tr>
<td width="25%" style="wordwrap: break-word;"><label for="txtAccountId" class="required"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Account.Label" runat="server" /></b></label></td>
<td width="75%"><ui:TextBox id="txtAccountId" MaxLength="1000" runat="Server" /></td>
</tr>
<tr>
<td width="25%" style="wordwrap: break-word;"><label for="txtDepartment" class="required"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Department.Label" runat="server" /></b></label></td>
<td width="75%"><ui:TextBox id="txtDepartment" MaxLength="1000" runat="Server" onchange="EnableDisableButtons()" /></td>
</tr>
<tr>
<td width="25%" style="wordwrap: break-word;"><label for="txtSupportURL" class="required"><b><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.SupprortURL.Label" runat="server" /></b></label></td>
<td width="75%"><ui:TextBox id="txtSupportURL" MaxLength="1000" runat="Server" onchange="EnableDisableButtons()" /></td>
</tr>
</table>
</td></tr>
<tr><td>
<table id="SupportURLText" class="KM-Wizard-TextFont">
<tr>
<td width="100%">
<label><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.SupprortURL.Message1" runat="server" /></label>
<label class="km-wizard-url-format"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.SupprortURL.Message2" runat="server" /></label>
<label><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.SupprortURL.Message3" runat="server" /></label>
</td>
</tr>
</table>
</td></tr>
<tr><td>
<table id="ResetTable">
<tr>
<td><ui:Button id="btnReset" OnClick="Reset();" runat="server" ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Reset.Text" accesskey="R"></ui:Button><label class="KM-Wizard-TextFont"><loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Reset.HelpText" runat="server" /></label><br /></td>
</tr>
</table>
</td></tr>
</table>
</td></tr>
</table>
<br />
<div id="showProgress" class="ms-crm-Validation-Progress" style="display: none;">
<div id="progressInner" style="height: 100%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.Validating" runat="server" />
</div>
</div>
</div>
</frm:WizardForm>
</body>
</html>

