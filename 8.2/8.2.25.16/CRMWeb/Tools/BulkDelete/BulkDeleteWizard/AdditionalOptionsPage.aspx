<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.AdditionalOptionsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style>
DIV.ms-crm-Lookup-Party
{
border-bottom: #6699cc 1px solid;
border-left: #6699cc 1px solid;
overflow-y: auto;
width: 100%;
word-wrap: break-word;
background: window;
height: 20px;
border-top: #6699cc 1px solid;
border-right: #6699cc 1px solid;
padding-top: 2px;
}
</style>
<script language="javascript">
var _sCCRecipients = "";
var numberOfDaysInputControl = null;
var _recipients = null;
var _startTime = null;

function WizardCloseMessage(oEvent) {
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}

Sys.Application.add_load(function () {

_recipients = Mscrm.FormControlInputBehavior.GetBehavior('recipients');
_startTime = Mscrm.FormControlInputBehavior.GetBehavior('startTime');
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);

document.getElementById("buttonBack").onclick = function () { if (!Mscrm.Utilities.resetValidationFailedElement()) moveBack(); };

InitializeControls();
});

function IsImmediatelyEligible() {
if (WizardGetProperty("entityName") != null && WizardGetProperty("entityName") == "asyncoperation")
if (LOCID_ISPRIVILEGED == "true")
if ($(WizardGetProperty("fetchXml")).find("[attribute=operationtype]").length == 1 &&
$(WizardGetProperty("fetchXml")).find("[attribute=operationtype]")[0].outerHTML.match(/\svalue\s*=\s*"10"/g) != null)
return true;
return false;
}

function InitializeControls() {
numberOfDaysInputControl = document.getElementById("numberOfDaysInput");

XUI.Html.SetText(document.getElementById("checkNotifyText"), LOCID_EMAILOPTIONSTEXT);

var txtJobName = document.getElementById("txtJobName");

if (WizardHasProperty("jobName")) {
txtJobName.value = WizardGetProperty("jobName");
}
else {
txtJobName.value = formatString(LOCID_AF_JOBNAMEFORMAT, LOCID_USER_DATETIME);
}

if (WizardHasProperty("startDateTime")) {
_startTime.set_dataValue(new Date(WizardGetProperty("startDateTime")));
}

if (IsImmediatelyEligible())
document.getElementById("rbRunNow").disabled = false;
else
document.getElementById("rbRunNow").disabled = true;

if (WizardHasProperty("runNow")) {
document.getElementById("rbRunNow").checked = WizardGetProperty("runNow");
}
else {
document.getElementById("rdSchedule").checked = true;
WizardSetProperty("runNow", false);
}

if (WizardHasProperty("isRecurring")) {
document.getElementById("chkRecurrence").checked = WizardGetProperty("isRecurring");
}

onClickChkRecurrence();
if (WizardHasProperty("recurrenceDays")) {
numberOfDaysInputControl.value = WizardGetProperty("recurrenceDays");
}

if (WizardHasProperty("recurrenceDays")) {
numberOfDaysInputControl.value = WizardGetProperty("recurrenceDays");
}

if (WizardHasProperty("sendEmail")) {
document.getElementById("checkNotify").checked = WizardGetProperty("sendEmail");
}

onClickChkNotify();

if (WizardHasProperty("emailCc")) {
_recipients.AddItems(WizardGetProperty("emailCc"));
}
}
function onChangeNumberOfDays() {
var numDaysValue = parseInt(numberOfDaysInputControl.value, 10);

if (!(numDaysValue > 0 && numDaysValue <= 365)) {

if (document.getElementById("chkRecurrence").checked == true) {
alert(LOCID_DD_ENTERINTEGER);
numberOfDaysInputControl.value = numberOfDaysInputControl.lastValue;
numberOfDaysInputControl.focus();
return false;
}
else {
numberOfDaysInputControl.value = numberOfDaysInputControl.lastValue;
return true;
}
}

return true;
}

function ValidateDateTime() {
var wizardStartTime = new Date(WizardGetProperty("wizardStartTime"));


if (_startTime.get_dataValue() >= wizardStartTime) {
return true;
}
else {
alert(LOCID_DD_INVALID_DATE);
return false;
}
}

function moveBack() {
if(IsImmediatelyEligible()){
document.getElementById("rbRunNow").disabled = true;
document.getElementById("rdSchedule").disabled = false;
document.getElementById("rdSchedule").checked = true;
WizardSetProperty("runNow", false);
}
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
Navigate(_WizardNavigateEnum.BACK);
}

function moveNext() {
if (onChangeNumberOfDays() == false) {
return;
}

if (ValidateDateTime() == false) {
return;
}
if (document.getElementById("checkNotify").checked == true) {
if (collectRecipients() == false || validateEmailRecipients() == false) {

alert(LOCID_INVALID_EMAIL);
return;
}
}
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
Navigate(_WizardNavigateEnum.NEXT);
}

function collectRecipients() {
_sCCRecipients = "";
var aItems = _recipients.Items(false, true);
if (aItems && aItems.length > 0) {
for (j = 0; j < aItems.length - 1; j++) {

if (aItems[j].id) {
_sCCRecipients = _sCCRecipients + aItems[j].id + ",";
}
else {
return false;
}
}


if (aItems[j].id) {
_sCCRecipients = _sCCRecipients + aItems[j].id;
}
else {
return false;
}
}

return true;
}

function validateEmailRecipients() {



var command = new RemoteCommand("DuplicateDetection", "ValidateEmailRecipients");


command.SetParameter("recipients", _sCCRecipients);


var result = command.Execute();

if (result.Success == true) {
return result.ReturnValue;
}
else {
return false;
}
}

function Navigate(wizardNavigateEnum) {
if ($get("txtJobName").value == "") {
alert(LOCID_JOBNAME_EMPTY);
return;
}
SavePageProperties();
WizardNavigate(wizardNavigateEnum);
}

function SavePageProperties() {
WizardSetProperty("jobName", document.getElementById("txtJobName").value);
WizardSetProperty("startDateTime", _startTime.get_dataValue().toString());
WizardSetProperty("recurrenceDays", parseInt(numberOfDaysInputControl.value, 10));
WizardSetProperty("isRecurring", document.getElementById("chkRecurrence").checked);
WizardSetProperty("sendEmail", document.getElementById("checkNotify").checked);
WizardSetProperty("currentUserEmail", LOCID_CURRENTUSER_EMAIL);
WizardSetProperty("emailCc", _recipients.Items(false, true, undefined, undefined, true));
WizardSetProperty("runNow", document.getElementById("rbRunNow").checked);
}

function GetNextPageDefinition() {
var entityName = "";
if (WizardHasProperty("entityName")) {
entityName = WizardGetProperty("entityName");
}
var oUrl = Mscrm.CrmUri.create("/Tools/BulkDelete/BulkDeleteWizard/SummaryPage.aspx");
oUrl.get_query()["entityName"] = entityName;
oUrl.get_query()["startDateTime"] = FormatUtcDate(_startTime.get_dataValue());
return new NextPageDefinition(oUrl);
}

function onClickChkRecurrence() {
if (document.getElementById("chkRecurrence").checked) {
numberOfDaysInputControl.disabled = false;
}
else {
numberOfDaysInputControl.disabled = true;
}
}

function onChangeRbRunNow() {
if (document.getElementById("rbRunNow").checked) {
document.getElementById("chkRecurrence").checked = false;
document.getElementById("chkRecurrence").disabled = true;
document.getElementById("DateInput").disabled = true;
document.getElementById("startTimeTimeInput").disabled = true;
document.getElementById("startTimeimg").disabled = true;
}
else {
document.getElementById("chkRecurrence").disabled = false;
document.getElementById("DateInput").disabled = false;
document.getElementById("startTimeTimeInput").disabled = false;
document.getElementById("startTimeimg").disabled = false;
}
onClickChkRecurrence();
}

function onClickChkNotify() {
_recipients.set_disabled(!$get("checkNotify").checked);
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table width="100%" cellpadding=0 cellspacing=0>
<tr>
<td class="BulkDeleteWizard_td_page3">
<table width="100%" cellpadding=0 cellspacing=0>
<tr>
<td><label class="ms-crm-Bold-Header" for="txtJobName"><loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.JobName" runat="server"/></label></td>
</tr>
<tr>
<td style="padding-top: 5px;padding-bottom: 10px;">
<input class="text" type="text" size="83" id="txtJobName" maxlength=200 name="txtName"/>
</td>
</tr>
<tr height=15>
<td>&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr>
<td class="BulkDeleteWizard_td_page3">
<table width="100%" cellpadding=0 cellspacing=0>
<tr>
<td><label class="ms-crm-Bold-Header" for="startTime"><loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.JobStartTime" runat="server"/></label></td>
</tr>
<tr>
<td>
<table width="100%">
<col width="20">
<tr>
<td style="padding-top: 5px; padding-bottom: 5px;">
<input type="radio" id="rbRunNow" onclick="onChangeRbRunNow();" runat="Server" name="Schedule" width="auto" />
</td>
<td>
<label for="chkRunNow">
<loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.RunNow" runat="server" />
</label>
</td>
</tr>
<tr align="left">
<td style="padding-top: 5px; padding-bottom: 5px;">
<input type="radio" id="rdSchedule" onclick="onChangeRbRunNow();" runat="server" name="Schedule" width="auto" checked="true" />
</td>
<td>
<br />
<label for="chkRecurrence">
<loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.ScheduleText" runat="server" />
</label>
<br />
<sdk:DateTimeControl id="startTime" runat="server" />
</td>
<td>&nbsp;</td>
</tr>
</table>
<table width="100%">
<col width=20><col>
<tr>
<td><ui:CheckBox id="chkRecurrence" onclick="onClickChkRecurrence();" runat="Server" /></td>
<td><label for="chkRecurrence"><loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.RecurringOption" runat="server"/></label></td>
</tr>
</table>
<table width="100%">
<col width=20><col width=100><col>
<tr>
<td>&nbsp;</td>
<td>
<ui:EditableSelect id="numberOfDays"  onchange="onChangeNumberOfDays" runat="server"/>
</td>
<td><label for="numberOfDays"><loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.DaysText" runat="server"/></label></td>
<td>&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr height=15>
<td>&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr valign="top">
<td class="BulkDeleteWizard_td_starttime">
<table width="100%" cellpadding=0 cellspacing=0>
<col width=20><col>
<tr>
<td><ui:CheckBox id="checkNotify" onclick="onClickChkNotify();" runat="Server" /></td>
<td id="emailNotification"><label for="checkNotify" id="checkNotifyText" ></label></td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%">
<tr>
<td><label for="recipients"><loc:Text ResourceId="BulkDeleteWizard.AdditionalOptionsPage.AlsoNotifyText" runat="server"/></label></td>
</tr>
</table>
<table width="100%">
<col width="70%"><col>
<tr>
<td><sdk:PartyListControl id="recipients" LookupStyle="multi" runat="server"/></td>
<td>&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
