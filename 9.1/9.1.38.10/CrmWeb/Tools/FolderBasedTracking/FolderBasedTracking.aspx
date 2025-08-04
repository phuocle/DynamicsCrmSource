<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.FolderBasedTracking.FolderBasedTrackingPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
var trackedFolderIds = [];
var mailboxId;
var originalTrackedFolderIds = [];
var deletedTrackedFolderIds = [];
var recLength = 0;

var isChangePresent = false;
var saveStatus = false;
$P_CRM(document).ready(function () {
$P_CRM('html').click(function (event) {
var event = event || window.event;
var objElement = event.srcElement || event.target;

if (objElement.id.indexOf('txtExchangefolder_') == -1 && objElement.className.indexOf('ms-crm-folderbasedtracking-TreeView-parent-div') == -1
&& objElement.className.indexOf('ms-crm-navtree-node-icon') == -1 && objElement.className.indexOf('tree_foldercontainer')) {
$P_CRM('.ms-crm-folderbasedtracking-TreeView-parent-div').addClass('hidden');
}

if (saveStatus && objElement.id.indexOf('row_') != -1 && objElement.id.indexOf('_column_') != -1 && objElement.id.indexOf('_lookup') != -1) {
ShowOrHideValidationMessages('');
}

if (objElement.className.indexOf('Menu') != -1) {
saveStatus = false;
}
});
$P_CRM(".ms-crm-ImageStrip-btn_off_lookup").each(function () {
$P_CRM(this).hover(function (event) {
if (event.srcElement.id == this.id) {
changeLookupIcon(this);
}
});
$P_CRM(this).mouseout(function (event) {
if (event.srcElement.id == this.id) {
rollbackLookupIcon(this);
}
});
});
});

function changeLookupIcon(obj)
{
$P_CRM(obj).css('background', '/_imgs/imagestrips/transparent_spacer.gif');
$P_CRM(obj).css('height', '20px !important');
$P_CRM(obj)[0].src = '/_imgs/search_hover.gif';
}

function rollbackLookupIcon(obj)
{
$P_CRM(obj).css('background', '/_imgs/search_normal.gif');
$P_CRM(obj).css('height', '20px !important');
$P_CRM(obj)[0].src = '/_imgs/imagestrips/transparent_spacer.gif';
}


$P_CRM(function ()
{
$P_CRM(window).bind('beforeunload', function ()
{
checkChangesInRegardingObject();
if (isChangePresent)
{
return LOCID_UNSAVEDCHANGES_MESSAGE;
}
});
});

function checkChangesInRegardingObject()
{

var isDirty = false;

var trObj = $P_CRM('#allFolderMappings tr:not(.hidden).ms-crm-folderbasedtracking-table-row');

if (!saveStatus)
{
for (var i = 0; i < trObj.length; i++) {
var rowId = trObj[i].id.split('_')[1];
isDirty = $get('row_' + rowId + '_column_2_lookup')._behaviors[0].get_isDirty();
if (isDirty) {
isChangePresent = true;
break;
}
}
}
}

function DisableControls()
{
$P_CRM('#addNewMapping').css("display", "none");
$P_CRM('#idSave').css("display", "none");
}


window.onresize = function () {
$P_CRM('div.ms-crm-folderbasedtracking-TreeView-parent-div').each(function () {
if (!$P_CRM(this).hasClass('hidden')) {
$P_CRM(this).addClass('hidden');
}
});
};

window.onload = function () {

if ($P_CRM('#IsDBVersionLesserThanCarina')[0].value == 'true') {

ShowOrHideValidationMessages('DbVersionLesserThanCarinaMessage')
DisableControls();
return false;
}

if ($P_CRM('#IsFolderBasedTrackingEnabled')[0].value=='false')
{
$P_CRM('#FolderBasedTrackingEnabled').removeClass('hidden');
DisableControls();
return false;
}


var isServerSideSyncEnabled = $P_CRM('#IsServerSideSyncEnabled')[0].value;
if (isServerSideSyncEnabled == 'true') {

$P_CRM('#ExchangeFolderLastSynced').removeClass('hidden');
}
else
{

ShowOrHideValidationMessages('EnableServerSideSyncMessage')
$P_CRM('#FolderBasedTrackingEnableServerSideSync')[0].innerHTML = $P_CRM('#EnableServerSideSync')[0].value;
DisableControls();
return false;

}


$P_CRM('#FolderBasedTrackingDialogDescription')[0].innerHTML = $P_CRM('#FolderBasedTrackingDialogDescriptionWithEmail')[0].defaultValue;

trackedFolderIds = $P_CRM('#TrackedFolderIds')[0].value.split('|');
mailboxId = $P_CRM('#MailboxId')[0].value;


originalTrackedFolderIds = trackedFolderIds.slice();
originalTrackedFolderIds = originalTrackedFolderIds.filter(function (v) { return v !== '' });


SelectDisableTreeNode();


EnableDisableNewMappingButton();
};


function ShowOrHideValidationMessages(obj) {

$P_CRM('#FolderBasedTrackingEnabled').addClass('hidden');
$P_CRM('#ErrorMessage').addClass('hidden');
$P_CRM('#SuccessMessage').addClass('hidden');
$P_CRM('#ExchangeFolderError').addClass('hidden');
$P_CRM('#EnableServerSideSyncMessage').addClass('hidden');
$P_CRM('#DbVersionLesserThanCarinaMessage').addClass('hidden');
$P_CRM('#ErrorUnResolvedEntity').addClass('hidden');

switch (obj)
{
case 'FolderBasedTrackingEnabled':
$P_CRM('#FolderBasedTrackingEnabled').removeClass('hidden');
return false;
case 'ErrorMessage':
$P_CRM('#ErrorMessage').removeClass('hidden');
return false;
case 'SuccessMessage':
$P_CRM('#SuccessMessage').removeClass('hidden');
return false;
case 'ExchangeFolderError':
$P_CRM('#ExchangeFolderError').removeClass('hidden');
return false;
case 'EnableServerSideSyncMessage':
$P_CRM('#EnableServerSideSyncMessage').removeClass('hidden');
return false;
case 'DbVersionLesserThanCarinaMessage':
$P_CRM('#DbVersionLesserThanCarinaMessage').removeClass('hidden');
return false;
case 'ErrorUnResolvedEntity':
$P_CRM('#ErrorUnResolvedEntity').removeClass('hidden');
return false;
}
}


function SelectDisableTreeNode() {
var objSelectedItemLen = trackedFolderIds.length;
if (objSelectedItemLen > 0) {
for (var i = 0; i < objSelectedItemLen; i++) {
if (trackedFolderIds[i] != '') {
var objSelect = document.getElementById(trackedFolderIds[i]);
if (objSelect != null && objSelect != undefined) {
$P_CRM(objSelect.parentNode).addClass('selectedItem');
var ExchangefolderId = 'txtExchangefolder_' + trackedFolderIds[i].split(';')[1]

var txtObj = $P_CRM('#' + ExchangefolderId);
if (txtObj.length > 0)
txtObj[0].value = objSelect.textContent;
}
}
else {
trackedFolderIds.splice(i, 1);
}
}
disableNodes();
}
return false;
}


function ShowTreeview(txtObj) {
var ht = $P_CRM(window).height() - $P_CRM(txtObj).offset().top;
var cnt = txtObj.id.split('_')[1];
if ($P_CRM('#hdnOpenedTreeId').text() != '') {
var treeId = $P_CRM('#hdnOpenedTreeId').text();
if (txtObj.id != 'txtExchangefolder_' + treeId.split('_')[1]) {
var treeId = $P_CRM('#hdnOpenedTreeId').text();
$P_CRM('#' + treeId).addClass('hidden');
$P_CRM('#hdnOpenedTreeId').text('');
}
}
if ($P_CRM('#tdTree_' + cnt).length > 0) {
if ($P_CRM('#tdTree_' + cnt).hasClass('hidden')) {
if (ht >= 200) {
var treeview = $P_CRM('#tdTree_' + cnt)[0];
$P_CRM('#tdTree_' + cnt).removeClass('hidden');
treeview.style.visibility = 'visible';
$P_CRM('#tdTree_' + cnt)[0].style.position = 'absolute';
$P_CRM('#tdTree_' + cnt).removeAttr('style');
}
else {
$P_CRM('#tdTree_' + cnt).css('top', $P_CRM(txtObj).offset().top - 224);
$P_CRM('#tdTree_' + cnt).removeClass('hidden');
}
$P_CRM('#hdnOpenedTreeId').text('tdTree_' + cnt);
}
else {
$P_CRM('#tdTree_' + cnt).addClass('hidden');
$P_CRM('#hdnOpenedTreeId').text('');
}
}
return false;
}


function fnAddNewRow() {
if ($P_CRM('#allFolderMappings tr.hidden').length > 0) {

ShowOrHideValidationMessages('');
recLength = $P_CRM('#MaxRecordsLength')[0].value;

$P_CRM('#allFolderMappings tr.hidden:first').removeClass('hidden');


disableNodes();


EnableDisableNewMappingButton();
}
return false;
}


function NodeExpandCollapse(obj) {
if (obj.parentNode.parentNode.childNodes.length == 2) {
if ($P_CRM(obj.parentNode.parentNode.childNodes[1]).hasClass('hidden')) {
$P_CRM(obj.parentNode.parentNode.childNodes[1]).removeClass('hidden')
obj.src = '/_imgs/solution/NavExpandedArrow16_Silver.png';
obj.title = LOCID_TREE_ALT_COLLAPSE;
}
else {
$P_CRM(obj.parentNode.parentNode.childNodes[1]).addClass('hidden')
obj.src = '/_imgs/solution/NavCollapsedArrow16_Silver.png';
obj.title = LOCID_TREE_ALT_EXPAND;
}
}
return false;
}



function GetSelectedNodeText(obj,event) {
tempEvent = event.target || event.srcElement;
if (tempEvent.nodeName != 'IMG' && !$P_CRM(obj).hasClass('ms-crm-folderbasedtracking-disableNode')) {
isChangePresent = true;

ShowOrHideValidationMessages('');
var _selectedText = obj.getElementsByTagName('label')[0].textContent;
var objUnSelectCheckItem = $P_CRM('#row_' + obj.id.split(';')[1] + ' span');
var _prvSelectedId = '';
for (var i = 0; i < objUnSelectCheckItem.length; i++) {
if ($P_CRM(objUnSelectCheckItem[i]).hasClass('selectedItem')) {
$P_CRM(objUnSelectCheckItem[i]).removeClass('selectedItem');
_prvSelectedId = objUnSelectCheckItem[i].childNodes[objUnSelectCheckItem[i].childNodes.length - 1].id;

for (var cntI = 0; cntI < originalTrackedFolderIds.length; cntI++) {
if (originalTrackedFolderIds[cntI].indexOf(_prvSelectedId.split(';')[0]) != -1) {
deletedTrackedFolderIds.push(_prvSelectedId);
}
}
}
}
$P_CRM(obj).addClass('selectedItem');
var treeId = $P_CRM('#hdnOpenedTreeId').text();
var txtId = 'txtExchangefolder_' + treeId.split('_')[1];

$P_CRM('#' + txtId)[0].value = _selectedText;
$P_CRM('#txtExchangefolder_' + treeId.split('_')[1] + '_container').removeClass('ms-crm-ExchangeFolder-Error');
$P_CRM('#' + treeId).addClass('hidden');

if (_prvSelectedId != '') {

var index = trackedFolderIds.indexOf(_prvSelectedId);
trackedFolderIds.splice(index, 1);


relaseNodes(_prvSelectedId);
}


trackedFolderIds.push(obj.id.split('span$')[1]);


for (var cntDel = 0; cntDel < deletedTrackedFolderIds.length; cntDel++) {
if (deletedTrackedFolderIds[cntDel].indexOf(obj.id.split('span$')[1].split(';')[0]) != -1) {
deletedTrackedFolderIds.splice(cntDel, 1);
}
}

disableNodes();
}
return false;
}


function relaseNodes(_prvSelectedId) {
var objTable = $P_CRM('#allFolderMappings');
var rowLen = objTable[0].rows;
for (var x = 0; x < rowLen.length; x++) {
if (rowLen[x].id.indexOf('row_') != -1 && rowLen[x].className != 'hidden') {
var elId = rowLen[x].id.split('_')[1];
elId = _prvSelectedId.split(';')[0] + ';' + elId;
if (elId != _prvSelectedId) {
var objEl = document.getElementById(elId);
if (objEl != null && objEl != undefined) {
if ($P_CRM(objEl.parentNode).hasClass('ms-crm-folderbasedtracking-disableNode')) {
$P_CRM(objEl.parentNode).removeClass('ms-crm-folderbasedtracking-disableNode');
var objSpan = objEl.parentNode.getElementsByTagName('label');
if (objSpan != null && objSpan.length > 0) {
objSpan[objSpan.length - 1].disabled = '';
}
}
}
}
}
}
return false;
}


function disableNodes() {
for (var i = 0; i < trackedFolderIds.length; i++) {
var objTable = $P_CRM('#allFolderMappings');
var rowLen = objTable[0].rows;
for (var x = 1; x < rowLen.length; x++) {
if (rowLen[x].id.indexOf('row_') != -1 && rowLen[x].className!='hidden') {
var elId = rowLen[x].id.split('_')[1];
elId = trackedFolderIds[i].split(';')[0] + ';' + elId;
if (elId != trackedFolderIds[i]) {
var objEl = document.getElementById(elId);
if (objEl != undefined && objEl != null) {
if (!$P_CRM(objEl.parentNode).hasClass('ms-crm-folderbasedtracking-disableNode')) {
$P_CRM(objEl.parentNode).addClass('ms-crm-folderbasedtracking-disableNode');
var objSpan = objEl.parentNode.getElementsByTagName('label');
if (objSpan != null && objSpan.length > 0) {
objSpan[objSpan.length - 1].disabled = 'true';
}
}
}
}
}
}
}
}


function fnRowHoverIn(rowObject) {
$P_CRM(rowObject).addClass('ms-crm-folderbasedtracking-table-row-hover');
$P_CRM("#delete_" + rowObject.id.split('_')[1]).removeClass('hidden');
return false;
}


function fnRowHoverOut(rowObject) {
$P_CRM(rowObject).removeClass('ms-crm-folderbasedtracking-table-row-hover');
$P_CRM("#delete_" + rowObject.id.split('_')[1]).addClass('hidden');
return false;
}


function fnDeleteRow(obj) {

ShowOrHideValidationMessages('');
var objRow = obj.parentNode.parentNode;

if (objRow.getAttribute('disabled') != 'disabled' && objRow.disabled != true) {


UnSelectNodeFromDeletedRow(objRow);
$P_CRM('#allFolderMappings tr.hidden:first').before(objRow);
$P_CRM(objRow).addClass('hidden');

disableNodes();
}
else {

var InvalidFolderId = '';

$P_CRM('#' + objRow.id + ' input').each(function () {
if ($P_CRM(this)[0].id.indexOf('txtInvalidExchangefolder_') != -1) {
InvalidFolderId = $P_CRM(this)[0].id.split('_')[1];
}
});
$P_CRM('#allFolderMappings')[0].deleteRow(objRow.rowIndex);
deletedTrackedFolderIds.push(InvalidFolderId);
trackedFolderIds.splice(trackedFolderIds.indexOf(InvalidFolderId), 1);
}


EnableDisableNewMappingButton();

ShowOrHideValidationMessages('');
return false;
}

function EnableDisableNewMappingButton()
{
if ($P_CRM('#allFolderMappings tr.hidden').length > 0) {
$P_CRM('#addNewMapping').prop('disabled', false);
$P_CRM('#addNewMapping span').removeClass('ms-crm-folderbasedtracking-newfoldermapping-disabledstate');
$P_CRM('#addNewMapping span').addClass('ms-crm-folderbasedtracking-newfoldermapping-enabledstate');
$P_CRM('#addNewMapping').addClass('ms-crm-folderbasetracking-addnewmappingbutton-hover');
$P_CRM('#addNewMapping span')[0].title = LOCID_NEWMAPPING_ALT;

}
else {
$P_CRM('#addNewMapping').prop('disabled', true);
$P_CRM('#addNewMapping span').removeClass('ms-crm-folderbasedtracking-newfoldermapping-enabledstate');
$P_CRM('#addNewMapping span').addClass('ms-crm-folderbasedtracking-newfoldermapping-disabledstate');
$P_CRM('#addNewMapping').removeClass('ms-crm-folderbasetracking-addnewmappingbutton-hover');
$P_CRM('#addNewMapping span')[0].title = LOCID_NEWMAPPING_MAXROWS_ALT;
}
}



function UnSelectNodeFromDeletedRow(objRow) {
var _prvSelectedId = '';
var objUnSelectItem = $P_CRM('#' + objRow.id + ' .selectedItem');

if (objUnSelectItem.length > 0) {
objUnSelectItem.removeClass('selectedItem');
_prvSelectedId = objUnSelectItem[0].childNodes[objUnSelectItem[0].childNodes.length - 1].id;
}

$P_CRM('#' + objRow.id + ' input').each(function () {
if (this.id.indexOf('txtExchangefolder_') != -1) {
if (this.value != '')
{
isChangePresent = true;
}
this.value = '';

$P_CRM('#' + this.id + '_container').removeClass('ms-crm-ExchangeFolder-Error');
}
});

$P_CRM('#row_' + objRow.id.split('_')[1] + '_column_2_lookup_lookupTable ul').html('');


if (_prvSelectedId != '') {

for (var cntI = 0; cntI < originalTrackedFolderIds.length; cntI++) {
if (originalTrackedFolderIds[cntI].indexOf(_prvSelectedId.split(';')[0]) != -1) {
deletedTrackedFolderIds.push(_prvSelectedId);
}
}

trackedFolderIds.splice(trackedFolderIds.indexOf(_prvSelectedId), 1);

relaseNodes(_prvSelectedId);
}
}


function SaveMappings() {
if (Validate() && !$P_CRM('#idSave div').hasClass('ms-crm-folderbasedtracking-newfoldermapping-disabledstate')) {
var createUpdateMappingCollection = [];
var folderBasedTrackingMapping;

for (var i = 0; i < trackedFolderIds.length; i++) {
var trackedFolderIdRow = trackedFolderIds[i].split(';');
var folderId = trackedFolderIdRow[0];
var rowId = trackedFolderIdRow[1];
var regardingObject = Sys.Application.findComponent('row_' + rowId + '_column_2_lookup$PresenceLookupUIBehavior').Items(false, false, false, false, true)

var regardingObjectText = Sys.Application.findComponent('row_' + rowId + '_column_2_lookup$PresenceLookupUIBehavior').getLookupSearchText();
if ((regardingObject.length == 0 && regardingObjectText != '') || (regardingObject.length > 0 && regardingObjectText != regardingObject[0].name)) {
ShowOrHideValidationMessages('ErrorUnResolvedEntity');
return;
}

var FolderName = '';
if ($P_CRM('#txtExchangefolder_' + rowId).length==0) {
FolderName = document.getElementById('txtInvalidExchangefolder_' + folderId + ';' + rowId).value;

FolderName = FolderName.substring(0, FolderName.lastIndexOf(LOCID_INVALIDFOLDERS_ERROR) - 1);
}
else {
FolderName = $P_CRM('#txtExchangefolder_' + rowId)[0].value;
}

if (regardingObject.length > 0) {
folderBasedTrackingMapping = new Mscrm.EmailConnector.FolderBasedTrackingMapping(folderId, FolderName, regardingObject[0].type, regardingObject[0].id, regardingObject[0].name);
}
else {
folderBasedTrackingMapping = new Mscrm.EmailConnector.FolderBasedTrackingMapping(folderId, FolderName, '', '', '');
}


createUpdateMappingCollection.push(folderBasedTrackingMapping);
}

submitJob = new Mscrm.EmailConnector.FolderBasedTracking();

window.setTimeout(Function.createDelegate(this, function () {
var result=submitJob.updateMappings($P_CRM('#MailboxId')[0].value, createUpdateMappingCollection);
if (result.ReturnValue) {
ShowOrHideValidationMessages('SuccessMessage')
$P_CRM('#SuccessMessage').addClass('ms-crm-SuccessMessage')
isChangePresent = false;
saveStatus = true;
}
else {
ShowOrHideValidationMessages('ErrorMessage')
}
}), 0);
}
}

function Validate() {
var errCnt = 0
$P_CRM('#allFolderMappings tr:not(.hidden) input.ms-crm-Exchangefolder').each(function () {
if (this.id.indexOf('txtExchangefolder_') != -1) {
if (this.value == '') {
$P_CRM('#txtExchangefolder_' + this.id.split('_')[1] + '_container').addClass('ms-crm-ExchangeFolder-Error');
ShowOrHideValidationMessages('ExchangeFolderError')
errCnt++;
}
else {
$P_CRM('#txtExchangefolder_' + this.id.split('_')[1] + '_container').removeClass('ms-crm-ExchangeFolder-Error');
}
}
});
if (errCnt != 0) {
return false;
}
else {
return true;
}
}

function ShowTreeViewOnKeyPress(event, obj)
{

if (event.keyCode == 13 || event.keyCode == 32)
{
ShowTreeview(obj);
}
}

function addNewRowOnEnter(event)
{
if(event.keyCode == 13)
{
fnAddNewRow();
}
}

function TreeViewEvents(event, obj) {

if (event.keyCode == 13) {
GetSelectedNodeText(obj,event);
}

if (event.keyCode == 40) {
if (obj.nextSibling != null && obj.nextSibling.className != 'hidden') {
var objSpan = obj.nextSibling.children[0].children[0].children[0];
if (objSpan != null && objSpan != undefined) {
objSpan.focus();
}
}
else if (obj.parentNode.nextSibling != null) {
obj.parentNode.nextSibling.children[0].focus();
}
else if (obj.parentNode.parentNode.parentNode.parentNode != null) {
objDiv = obj.parentNode.parentNode.parentNode.parentNode;
if (objDiv != null && objDiv != undefined) {
if (objDiv.nextSibling != null) {
objDiv.nextSibling.children[0].focus();
}
}
}
}

if (event.keyCode == 38) {
if (obj.parentNode.previousSibling != null) {
obj.parentNode.previousSibling.children[0].focus();
}
else {
var objDiv = obj.parentNode.parentNode.parentNode;
if (objDiv != undefined && objDiv != null && objDiv.className != 'treenav_body') {
if (objDiv.previousSibling != null) {
objDiv.previousSibling.focus();
}
}
}
}

if (event.keyCode == 39) {
if (obj.nextSibling != null) {
obj.children[0].src = '/_imgs/solution/NavExpandedArrow16_Silver.png';
$P_CRM(obj.nextSibling).removeClass('hidden')
var objSpan = obj.nextSibling.children[0].children[0].children[0];
if (objSpan != null && objSpan != undefined) {
objSpan.focus();
}
}
}

if (event.keyCode == 37) {
var objDiv = obj.parentNode.parentNode.parentNode;
if (objDiv != undefined && objDiv != null && objDiv.className != 'treenav_body') {
$P_CRM(objDiv).addClass('hidden')
if (objDiv.previousSibling != null) {
objDiv.previousSibling.focus();
objDiv.previousSibling.children[0].src = '/_imgs/solution/NavCollapsedArrow16_Silver.png';
}
}

}
}
</script>
<style type="text/css">
html {
height:98% !important;
overflow-x:hidden;
}
body
{
user-select: none;
-o-user-select:none;
-moz-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
}

.ms-crm-folderbasedtracking-TreeView-parent-div {
height: 20em;
width: 37.9%;
position:absolute;
z-index: 999;
background-color: white;
}

.ms-crm-folderbasedtracking {
overflow:auto;
padding:1.167em;
}

.ms-crm-folderbasedtracking-savebutton {
display: table;
padding-bottom: 0.41em;
padding-left: 0.41em;
padding-right: 0.41em;
padding-top: 0.41em;
}

.ms-crm-folderbasedtracking-savebutton-savetext {
display: table-cell;
vertical-align: middle;
padding-top: 0.18em;

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 0.333em;
<% } else { %>
padding-left: 0.333em;
<% } %>
}
.ms-crm-folderbasedtracking-helpbutton {
display: block;
position: absolute;
top: 1.667em;

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
left: 2.5em;
<% } else { %>
right: 2.5em;
<% } %>
}

.ms-crm-folderbasedtracking-helpbutton-img {
width: 1.53em;
height: 1.53em;
}

.ms-crm-folderbasedtracking-title {
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-weight: lighter;
font-size: 3em;
color: #000000;

width:90%;
margin-top:0.28em;
}

.ms-crm-folderbasedtracking-desc {
font-family: Segoe UI Regular, Segoe UI, Tahoma, Arial;
font-size:1.1em;
color: #444444;
margin-top:0.833em;
}

.ms-crm-folderbasedtracking-UserMessages {
font-family: Segoe UI Regular, Segoe UI, Tahoma, Arial;
font-size:1.1em;
color: #ff0000;
margin-top:0.833em;
}

.ms-crm-folderbasedtracking-table {
width:100%;
margin-top:1.833em;
border-width: 0.09em;
border-collapse: collapse;
}

.ms-crm-folderbasedtracking-newfoldermapping-table{
border-bottom: 0.1em solid #CCCCCC;
width: 100%;
padding-top: 0.41em;
}

.ms-crm-folderbasedtracking-table-header-row {
border-bottom: 0 solid #CCCCCC;
border-width: 0.09em;
}

.ms-crm-folderbasedtracking-table-header-column {
font-family: Segoe UI Bold, Segoe UI, Tahoma, Arial;
font-size:1em;
font-weight: bold;
color: #444444;
padding-bottom: 0.833em;
}

.ms-crm-folderbasedtracking-table-row-hover {
background-color: #F6F6F6;
}

.hidden {
display:none;
}

.ms-crm-folderbasedtracking-table-exchangefolder-column {
width:39%;
padding-top:0.833em;
padding-bottom:0.833em;
}

.ms-crm-folderbasedtracking-table-mappingimage-column {
padding-top:0.833em;
padding-bottom:0.833em;

}
.ms-crm-folderbasedtracking-img-rotate
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
-webkit-transform: rotateY(180deg);
-moz-transform: rotateY(180deg);
-ms-transform: rotateY(180deg);
-o-transform: rotateY(180deg);
transform: rotateY(180deg);
<% } %>
}

.ms-crm-folderbasedtracking-table-deleteimage {
width:1.667em;
height:1.667em;
}

.ms-crm-folderbasedtracking-table-regardingobject-column {
padding-top:0.833em;
padding-bottom:0.833em;
width:39%;
}

.ms-crm-folderbasedtracking-table-deleteimage-column {
width:4.167em;
}

.ms-crm-folderbasedtracking-newfoldermapping {
margin-top:1.1em;

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right:0.855em;
<% } else { %>
margin-left:0.855em;
<% } %>
}

.ms-crm-folderbasedtracking-newfoldermapping-text {
font-family: Segoe UI Regular, Segoe UI, Tahoma, Arial;
font-size:1.1em;
}

.ms-crm-folderbasedtracking-newfoldermapping-enabledstate,
.ms-crm-folderbasedtracking-base-color {
color: #444444 !important;
}

.ms-crm-folderbasedtracking-newfoldermapping-disabledstate
{
color: #C0C0C0;
}


.ms-crm-Exchangefolder {
background:#FFFFFF url(/_imgs/down.gif) center right no-repeat;
display: inline-block;

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 0em;
background-position-x:left;
padding-right:1px;
<% } else { %>
padding-right: 0em;
background-position-x:right;
padding-left:1px;
<% } %>
}

div.tree_foldercontainer {
user-select: none;
-o-user-select:none;
-moz-user-select: none;
-khtml-user-select: none;
-webkit-user-select: none;
height: 100%;
width: 99%;
overflow:auto;
background-repeat: repeat-x;
display: block;
border: 0.09em solid #cccccc;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 0.417em;
<% } else { %>
padding-left: 0.417em;
<% } %>
}
li.tree-folder-node-top{
line-height: 1.667em;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right: 1.1em;
<% } else { %>
padding-left: 1.1em;
<% } %>
}
li.tree-folder-node-leaf {
line-height: 1.667em;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right: 0.833em;
<% } else { %>
margin-left: 0.833em;
<% } %>
}
li.ms-crm-navtree-group {
line-height: 1.667em;
margin: 0em;
}
li.ms-crm-navtree-group-li-child {
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right: 0.667em;
padding-right:0.417em
<% } else { %>
padding-left:0.417em;
margin-left:0.667em
<% } %>
}
.ms-crm-navtree-group-li-label {
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right:0.667em;
margin-right:0.667em;
<% } else { %>
padding-left:0.667em;
margin-left:0.667em;
<% } %>
}
.ms-crm-navtree-group-li-label-leaf {
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right:1.333em;
<% } else { %>
padding-left:1.333em;
<% } %>
}

li.tree-folder-node-children {
line-height: 1.667em;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right: 1.1em;
<% } else { %>
margin-left: 1.1em;
<% } %>

}
a.ms-crm-folderbasedtracking-savebutton-hover:hover, ms-crm-folderbasedtracking-newfoldermapping-text:hover
{
background-color:#d7ebf9;
border-color:#d7ebf9;
}
.ms-crm-folderbasetracking-addnewmappingbutton-hover:hover {
background-color:#d7ebf9;
border-color:#d7ebf9;
}
.ms-crm-folderbasedtracking-disableNode
{
color:Silver;
}
.ms-crm-folderbasedtracking-lastsynctime
{
font-family: Segoe UI Regular, Segoe UI, Tahoma, Arial;
font-size:1.1em;
color: #666666;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 1.25em;
float: left;
<% } else { %>
padding-right: 1.25em;
float: right;
<% } %>
}
.ms-crm-folderbasedtracking-floatLeft {
padding-bottom: 0.41em;
padding-left: 0.41em;
padding-right: 0.41em;
padding-top: 0.41em;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}

.ms-crm-icon {
height:1.25em;
width:1.25em;
padding-bottom:0em;
vertical-align:top;
}
.ms-crm-ExchangeFolder-Error {
border:solid red 0.09em !important;
}
.ms-crm-Image-VAlign {
vertical-align:middle;
}
.ms-crm-SuccessMessage {
color:#029002 !important;
}
.ms-crm-folderbasedtracking-TreeNode {
display:inline-block;
width:99%;
}
.ms-crm-navtree-node-children
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right:1.1em;
<% } else { %>
padding-left:1.1em;
<% } %>
}
a.NavigateLink {
text-decoration:underline !important;
}
TR.ms-crm-folderbasedtracking-table-row TD:first-child,
TR.ms-crm-folderbasedtracking-table-header-row TH:first-child
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right:0.667em;
<% } else { %>
padding-left:0.667em;
<% } %>
}
.ms-crm-ImageStrip-btn_off_lookup {
background:url(/_imgs/search_normal.gif) !important;
border:solid #C6C6C6 1px;
height: 18px;

}
DIV.ms-crm-Lookup {
height:18px !important;
}
.ms-crm-ImageStrip-btn_dis_lookup {
background:url(/_imgs/search_normal.gif) !important;
border:solid #C6C6C6 1px !important;
height: 18px !important;
}
.ms-crm-ImageStrip-plussign {
vertical-align:middle;
padding-bottom:0.3em
}
.ms-crm-FolderBasedTracking-Save_16 {
vertical-align:middle;
}
</style>
<title><loc:Text resourceid="FolderBasedTracking.DialogTitle" runat="server" /></title>
</head>
<body class="mscrm-pbleditor-Body">
<div class="ms-crm-folderbasedtracking">
<a class="ms-crm-folderbasedtracking-savebutton-hover ms-crm-folderbasedtracking-savebutton" href="#" id="idSave" title="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.Save.Button' runat='server'/>" onclick="SaveMappings()">
<img class="ms-crm-FolderBasedTracking-Save_16 ms-crm-commandbar-image16by16" src="/_imgs/Ribbon/save_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.Save.Button' runat='server'/>"/>
<div class="ms-crm-folderbasedtracking-savebutton-savetext"><loc:Text resourceid="FolderBasedTracking.Save.Button" runat="server" /></div>
</a>
<a class="ms-crm-folderbasedtracking-helpbutton" href="#" id="idHelp" title="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.Help.Tooltip' runat='server'/>" >
<img class="ms-crm-RefreshDialogFlipImage ms-crm-folderbasedtracking-helpbutton-img" src="/_imgs/refreshCommandBar/HelpDialog.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.Help.Tooltip' runat='server'/>" onclick="loadHelp()" />
</a>
<div class="ms-crm-folderbasedtracking-title">
<loc:Text resourceid="FolderBasedTracking.DialogTitle" runat="server" />
</div>
<div class="ms-crm-folderbasedtracking-desc">
<span id="FolderBasedTrackingDialogDescription"></span>
</div>
<div class="ms-crm-folderbasedtracking-UserMessages">
<div id="EnableServerSideSyncMessage" class="hidden ms-crm-folderbasedtracking-base-color">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_warn16.png" >
<span id="FolderBasedTrackingEnableServerSideSync"></span>
</div>
<div id="ExchangeFolderError" class="hidden">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_crit16.png" >
<loc:Text resourceid="FolderBasedTracking.ExchangeFolder.Error" runat="server" />
</div>
<div id="SuccessMessage" class="hidden">
<img class="ms-crm-icon ms-crm-folderbasedtracking-img-rotate" src="/_imgs/ico/16_succeeded.png" >
<loc:Text resourceid="FolderBasedTracking.Save.SuccessMessage" runat="server" />
</div>
<div id="ErrorMessage" class="hidden">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_crit16.png" >
<loc:Text resourceid="FolderBasedTracking.Save.ErrorMessage" runat="server" />
</div>
<div id="ErrorUnResolvedEntity" class="hidden">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_crit16.png" >
<loc:Text resourceid="FolderBasedTracking.Save.ErrorUnResolvedEntity" runat="server" />
</div>
<div id="FolderBasedTrackingEnabled" class="hidden ms-crm-folderbasedtracking-base-color">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_info16.png" >
<loc:Text resourceid="FolderBasedTracking.IsFolderBasedTrackingEnabled" runat="server" />
</div>
<div id="DbVersionLesserThanCarinaMessage" class="hidden ms-crm-folderbasedtracking-base-color">
<img class="ms-crm-icon" src="/_imgs/error/notif_icn_warn16.png" >
<loc:Text resourceid="FolderBasedTracking.LowerVersion.ErrorMessage" runat="server" />
</div>
</div>
<input type="hidden" id="hdnOpenedTreeId" />
<div style="overflow:auto;max-height:395px">
<table class="ms-crm-folderbasedtracking-table" cellpadding="0" cellspacing="0"
id="allFolderMappings" runat="server" />
</div>
<table class="ms-crm-folderbasedtracking-newfoldermapping-table" id="newfoldermapping" runat="server">
<tr>
<td style="padding-bottom: 1em">
<div tabindex="0" class="ms-crm-folderbasedtracking-floatLeft ms-crm-folderbasetracking-addnewmappingbutton-hover" onclick="fnAddNewRow();" onkeyup="addNewRowOnEnter(event)" id="addNewMapping">
<img class="ms-crm-ImageStrip-plussign" src="/_imgs/imagestrips/transparent_spacer.gif" >&nbsp;
<span class="ms-crm-folderbasedtracking-newfoldermapping-text" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.NewFolderMapping.Button' runat='server'/>"
title="<loc:Text Encoding='HtmlAttribute' ResourceId='FolderBasedTracking.NewFolderMapping.Button' runat='server'/>">
<loc:Text resourceid="FolderBasedTracking.NewFolderMapping.Button" runat="server" />
</span>
</div>
</td>
</tr>
</table>
<div tabindex="-1" class="ms-crm-folderbasedtracking-newfoldermapping ms-crm-CommandBar-Button">
<div id="ExchangeFolderLastSynced" class="ms-crm-folderbasedtracking-lastsynctime hidden">
<loc:Text resourceid="FolderBasedTracking.ExchangeFolderLastSync" runat="server" />&nbsp;
<%= CrmEncodeDecode.CrmHtmlEncode(GetLastSyncDateTime()) %>
</div>
<div style="clear:both"/>
</div>
</div>
<input type="hidden" id="TrackedFolderIds" runat="server"/>
<input type="hidden" id="MailboxId" runat="server"/>
<input type="hidden" id="MaxRecordsLength" runat="server"/>
<input type="hidden" id="IsServerSideSyncEnabled" runat="server"/>
<input type="hidden" id="IsFolderBasedTrackingEnabled" runat="server"/>
<input type="hidden" id="IsDBVersionLesserThanCarina" runat="server"/>
<input type="hidden" id="FolderBasedTrackingDialogDescriptionWithEmail" runat="server"/>
<input type="hidden" id="EnableServerSideSync" runat="server"/>
</body>
</html>
