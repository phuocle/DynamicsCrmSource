<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.PrepareClientCustomizationsPage"  %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<!DOCTYPE html>
<html>




<head>

<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">



function CallbackParams(bClose, bReload, bRefreshGrid)
{
this.bClose = bClose;
this.bReload = bReload;
this.bRefreshGrid = bRefreshGrid;
}





function applychanges()
{


var rowIndex = 3;


var nameIndex = 2;


var records = $find("gridLanguages").get_innerGrid().get_allRecords();
var selectedLanguages = [];

for (var i = 0; i < records.length; i++)
{
var checkbox = $get('gridBodyTable_ctl00_' + i, records[i][rowIndex]);

if (checkbox.checked)
{
selectedLanguages.push({ 'lcid' : records[i][rowIndex].getAttribute('lcid'), 'name' : records[i][rowIndex].childNodes[nameIndex].textContent });
}
}



var selectedFormFactors = [ { 'id' : 1, 'name' : LOCID_FORMFACTOR_TABLET }, { 'id' : 2, 'name' : LOCID_FORMFACTOR_PHONE }, { 'id' : 3, 'name' : LOCID_FORMFACTOR_DESKTOP }, { 'id' : 4, 'name' : LOCID_FORMFACTOR_MAILAPP }];

if (selectedLanguages.length > 0 && selectedFormFactors.length > 0)
{
doConfirm(selectedLanguages, selectedFormFactors);
}
else
{

alert(LOCID_NO_ITEM_SELECTED);
}
}





function doConfirm(selectedLanguages, selectedFormFactors)
{
var dlgUrl = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_prepareclientcustomizations.aspx');
dlgUrl.get_query()['langs_selected'] = selectedLanguages.length;

var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 275;
dialogOptions.width = 550;

var confirmPrepareClientCustomizationsCallbackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(confirmPrepareClientCustomizationsCallback, new Array(selectedLanguages, selectedFormFactors));
Xrm.Internal.openDialog(dlgUrl.toString(), dialogOptions, null, null, confirmPrepareClientCustomizationsCallbackObj);
}





function confirmPrepareClientCustomizationsCallback(result, selectedLanguages, selectedFormFactors)
{

if (result === false) {
return;
}


if (selectedLanguages < 1)
{
alert(LOCID_NO_ITEM_SELECTED);
return;
}


$get("progressTbl").style.display = "";
$get("gridTbl").style.display = "none";
$get("butBegin").disabled = true;
$get("cmdDialogCancel").disabled = true;


prepareClientCustomizations(selectedLanguages, selectedFormFactors);
}





function prepareClientCustomizations(selectedLanguages, selectedFormFactors)
{

XUI.Html.SetText($get("prepareCaption"), LOCID_WAIT_DIALOG_PREPARING);
XUI.Html.SetText($get("languageCaption"), "");


var required = selectedLanguages.length * selectedFormFactors.length;
var completed = 0;


var completedLanguages = 0;
var completedFormFactors = {};


var results = {};


var currentProgress = 0;


var progressQueue = [];



var incrementCeiling = Math.floor(100 / required) / 6;


var incrementalIncrement = 0;


var incrementTimers = [];


var doIncrement = function () {
var increment = incrementCeiling > 0 ? Math.floor(Math.random() * (incrementCeiling) + 1) : incrementCeiling;
var maxProgress = Math.floor(((completed + 1) / required) * 100);


if (increment <= 1)
{
incrementalIncrement += increment;
if (incrementalIncrement >= 1)
{

incrementalIncrement = 0;
increment = (Math.floor(Math.random() * 7 - 3 + 1)) + 3;
}
}

var newProgress = currentProgress + increment;
return newProgress > maxProgress ? maxProgress : newProgress;
};

var doProgress = function () {
if (progressQueue.length < 1)
{
return;
}

var newProgress = progressQueue.shift();
incrementTimers.push(window.setTimeout(function () {

if (newProgress['progress'] > 0 && newProgress['progress'] < 100 && newProgress['progress'] > currentProgress)
{
currentProgress = newProgress['progress'];
XUI.Html.SetText($get("prepareCaption"), LOCID_WAIT_DIALOG_PROGRESS_1.replace("{0}", currentProgress));
}


if (completedLanguages > 0)
{
XUI.Html.SetText($get("languageCaption"), LOCID_WAIT_DIALOG_PROGRESS_2.replace("{0}", completedLanguages).replace("{1}", selectedLanguages.length));
}


if (currentProgress < Math.floor(((completed + 1) / required) * 100))
{

progressQueue.push({
'period' : (Math.floor(Math.random() * (15 - 5 + 1)) + 5) * 1000,
'progress' : doIncrement(),
});
doProgress();
}
},
newProgress['period']));
}


var isShowingSummary = false;
var errorDialogCount = 0;
var errorDialogCallback = function() {
--errorDialogCount;


if (required == completed && errorDialogCount < 1 && !isShowingSummary)
{
isShowingSummary = true;
showSummary(selectedLanguages, selectedFormFactors, results);
}
}


progressQueue.push({
'period' : ((Math.floor(Math.random() * 7 - 3 + 1)) + 3) * 1000,
'progress' : doIncrement(),
});
doProgress();


for (var i = 0; i < selectedLanguages.length; i++)
{
var selectedLcid = selectedLanguages[i]['lcid'];
var selectedName = selectedLanguages[i]['name'];
completedFormFactors[selectedLcid] = 0;

for (var j = 0; j < selectedFormFactors.length; j++)
{
var selectedFormFactor = selectedFormFactors[j]['id'];
var selectedFormFactorName = selectedFormFactors[j]['name'];

var oCommand = new Mscrm.RemoteCommandXml("SystemCustomization", "PrepareClientCustomizations");
oCommand.setParameter("lcid", selectedLcid);
oCommand.setParameter("formfactor", selectedFormFactor);


(function(command, languageName, formFactorName) {
command.set_errorHandler(function(resultCode, xmlNode)
{
if (IsNull(resultCode))
{
resultCode = "Not available";
}

var errorMessage = Mscrm.RemoteCommandXml.getErrorMessage(xmlNode);
var errorContext = LOCID_WAIT_DIALOG_ERROR.replace("{0}", languageName).replace("{1}", formFactorName);
var errorInfo = Mscrm.ErrorInformation.createErrorInfo(resultCode, errorMessage, errorContext + "\n\n" + Mscrm.RemoteCommandXml.getStackTrace(xmlNode));
var errorDialogCallbackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(errorDialogCallback, new Array());

++errorDialogCount;
openErrorDlg(resultCode, errorMessage, errorInfo,-1,-1, errorDialogCallbackObj, errorContext);
});
})(oCommand, selectedName, selectedFormFactorName);


(function(lcid, languageName, formFactorName) {
oCommand.execute(
function(result)
{
if (!results[languageName])
{
results[languageName] = {};
}

results[languageName][formFactorName] = result.get_success();

++completedFormFactors[lcid];


if (selectedLanguages.length > 1 && completedFormFactors[lcid] === selectedFormFactors.length)
{
++completedLanguages;
}

++completed;

if (completed === required)
{

for (var i = 0; i < incrementTimers.length; i++) {
window.clearTimeout(incrementTimers[i]);
}

incrementTimers = [];

XUI.Html.SetText($get("prepareCaption"), LOCID_WAIT_DIALOG_PROGRESS_1.replace("{0}", "100"));

if (selectedLanguages.length > 1)
{
XUI.Html.SetText($get("languageCaption"), LOCID_WAIT_DIALOG_PROGRESS_2.replace("{0}", selectedLanguages.length).replace("{1}", selectedLanguages.length));
}


window.setTimeout(function() {

refreshDialog();


if (errorDialogCount < 1 && !isShowingSummary)
{
isShowingSummary = true;
showSummary(selectedLanguages, selectedFormFactors, results);
}
},
1500);
}
else
{

progressQueue.push({
'period': 1500,
'progress': Math.floor((completed / required) * 100),
});
doProgress();
}
});
})(selectedLcid, selectedName, selectedFormFactorName);
}
}
}





function showSummary(selectedLanguages, selectedFormFactors, results)
{

if (results.length < 1)
{
return;
}

var summary = "<summary>";
var failedCount = 0;

var dlgUrl = Mscrm.CrmUri.create('/_grid/cmds/dlg_summary_prepareclientcustomizations.aspx');
for (var i = 0; i < selectedLanguages.length; i++)
{
var languageName = selectedLanguages[i]['name'];
var formFactorFailed = false;

summary += "<language id='" + languageName + "'>";
for (var j = 0; j < selectedFormFactors.length; j++)
{
summary += "<result>"
var formFactorName = selectedFormFactors[j]['name']


if (results[languageName][formFactorName])
{
summary += LOCID_SUMMARY_DIALOG_SUCCESS.replace("{0}", languageName).replace("{1}", formFactorName)
}
else
{
formFactorFailed = true;
summary += LOCID_SUMMARY_DIALOG_FAILED.replace("{0}", languageName).replace("{1}", formFactorName);
}

summary += "</result>"
}

summary += "</language>";
if (formFactorFailed)
{
++failedCount;
}
}

summary+= "</summary>"

dlgUrl.get_query()['summary'] = summary;
dlgUrl.get_query()['langs_selected'] = selectedLanguages.length;
dlgUrl.get_query()['langs_failed'] = failedCount;

var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 275;
dialogOptions.width = 550;

var summaryCloseCallbackCallbackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(summaryCloseCallback, new Array());
Xrm.Internal.openDialog(dlgUrl.toString(), dialogOptions, null, null, summaryCloseCallbackCallbackObj);
}





function summaryCloseCallback()
{
Mscrm.Utilities.setReturnValue(false);


window.setTimeout(function() {
closeWindow();
},
100);

}





function refreshDialog()
{
$get("cmdDialogCancel").disabled = false;

$get("progressTbl").style.display = "none";
$get("gridTbl").style.display = "block";


$find("gridLanguages").Refresh(function (){});


disableOKButton(true);

return true;
}





function checkBoxClicked()
{

var records = $find("gridLanguages").get_innerGrid().get_allRecords();
var isDisabled = true;
for (var i = 0; i < records.length; i++)
{
var checkbox = $get('gridBodyTable_ctl00_' + i, records[i][3]);
if (checkbox.checked)
{
isDisabled = false;
break;
}
}

disableOKButton(isDisabled);
}




function disableOKButton(isDisabled)
{
document.getElementById("butBegin").disabled = isDisabled;
}





function cancel()
{
closeWindow();
}




function initializeDialog()
{

var ok = document.getElementById("butBegin");
XUI.Html.SetText(ok, LOCID_OK_BUTTON_CAPTION);
ok.disabled = true;


var cancel = document.getElementById("cmdDialogCancel");
XUI.Html.SetText(cancel, LOCID_CANCEL_BUTTON_CAPTION);
}

</script>
</head>



<body onload="initializeDialog()">
<frm:DialogForm id="crmForm" runat="server">
<table id="progressTbl" style="display: none; cursor: wait; height:100%; width:100%">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br>
<span id="prepareCaption" style="white-space: nowrap"></span>
<br>
<span id="languageCaption" style="white-space: nowrap"></span>
</td>
</tr>
</table>
<div id="gridTbl" style="display:block; width:100%; height:100%">
<app:AppGrid id="gridLanguages" runat="server"/>
<input type="hidden" id="crmFormSubmitId" name="crmFormSubmitId" value="0">

</div>
</frm:DialogForm>
</body>
</html>
