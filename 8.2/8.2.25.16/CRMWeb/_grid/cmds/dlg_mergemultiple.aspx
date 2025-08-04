<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Dialogs.MergeMultipleDialogForm"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript" type="text/javascript">
var _sAction = "mergemultiple";
var _requestType = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(requestType) %>;
var _iObjType = "<%=EntityTypeCode%>";
var _fetchXml = "<%=fetchXml%>";
var FORM_TYPE = "MergeCase";
var messageContent = "";
var selectedText = "";
var confirmActionClickTS = 0;
function getCustomDialogArgs()
{
var records = new Array();
var cnt = 0;
var items = getNotSelected('crmGridControl');
for (var i = 0; i < items.length; i++) {
records[cnt++] = items[i];
}
items = getSelected('crmGridControl');
for (var i = 0; i < items.length; i++) {
records[cnt++] = items[i];
}
return records;
}
function applychanges()
{
confirmActionClickTS = (new Date()).getTime();

if ($find('crmGridControl').get_innerGrid().get_numberOfRecords() == 0) { closeWindow(); return; }

var selectedItem = getSelected('crmGridControl');
if (selectedItem.length == 0) { alert(LOCID_MERGE_ATLEASETONE_ERROR); return; }

var index=$find('crmGridControl').get_innerGrid().get_primaryFieldColumnIndex();
selectedText = XUI.Html.GetText(getSelectedRow('crmGridControl')[0][3].children[index]);

_custParams += "&masterId=" + CrmEncodeDecode.CrmUrlEncode(selectedItem);
_custParams += "&requestType=" + CrmEncodeDecode.CrmUrlEncode(_requestType);
_overrideDialogArgs = true;
go();

}
function cancel() {
var cancelActionClickTS = (new Date()).getTime();
Mscrm.Utilities.reportDialogButtonClick("Cancel", cancelActionClickTS);
closeWindow();
}


function processMergeMultiple() {
var total = $find('crmGridControl').get_innerGrid().get_numberOfRecords() - 1 - _errorCount;
var title = selectedText;
var msg = "";

var success = ""; var fail = "";
switch (_requestType) {

case "merge":
if (total > 0) { success = String.format(LOCID_MERGE_SUCCESS, total, title); }
if (_errorCount > 0) { fail = String.format(LOCID_MERGE_FAIL, _errorCount); }
break;

case "associatechild":
if (total > 0) { success = String.format(LOCID_PARENT_CHILD_ASSCO_SUCCESS, total + 1, title); }
if (_errorCount > 0) { fail = String.format(LOCID_PARENTCHILD_NOSUCC_FAILS, _errorCount); }
if (total == 0 && _errorCount > 0) { fail = String.format(LOCID_PARENTCHILD_NOSUCC_FAILS, _errorCount); }
break;
}
var err_summary = "";
if (_errors)
{
for (var prop in _errors)
{
try {
if (_errors.hasOwnProperty(prop))
{
var errInfo = _errors[prop];
var var_LOCID_ERR_MSG = CrmEncodeDecode.CrmHtmlDecode(errInfo.get_displaytext());
var parameters = errInfo.get_parameters();
if (!IsNull(parameters)) {
if (!IsNull(parameters[0])) {
var_LOCID_ERR_MSG = String.format(var_LOCID_ERR_MSG, parameters[0]);
}
}
var LOCID_ERR_MSG = null;

if (errInfo["count"] == 1)
{
LOCID_ERR_MSG = LOCID_ERROR_MESSAGE_FAIL_SINGLE;
}
else
{
LOCID_ERR_MSG = String.format(LOCID_ERROR_MESSAGE_FAIL, errInfo["count"]);
}

err_summary = String.format(LOCID_ERR_FAIL1_FAIL2, err_summary, LOCID_ERR_MSG, var_LOCID_ERR_MSG);
err_summary = err_summary.replace(/(\\r\\n)/g, "\n\r");
}
}
catch (e) {

}
}

}

messageContent = String.format(LOCID_MERGE_SUCCESS_FAIL, success, fail, err_summary);
Mscrm.Utilities.reportDialogButtonClick(_requestType, confirmActionClickTS, {"successfulMergedRecordsCnt": total, "failedMergedRecordsCnt": _errorCount});

}
function RegisterOnChange() {
$get("butBegin").setAttribute("disabled", "disabled");

var crmGridControl = $find('crmGridControl');
crmGridControl.add_onSelectionChange(OnChange);
}

function OnChange(sender, args) {
if (sender.get_innerGrid().get_selectedRecords().length > 0) {
$get("butBegin").removeAttribute("disabled");
}
else {
$get("butBegin").setAttribute("disabled", "disabled");
}
}

function setFilters() {
var oArgs = getDialogArguments();
if (!IsNull(oArgs)) {
var crmGridControl = $find('crmGridControl');
var filterXml = XUI.Xml.LoadXml(getFilterCondition());
var fetchXmlDoc = XUI.Xml.LoadXml(CrmEncodeDecode.CrmXmlDecode(_fetchXml));
if (!IsNull(XUI.Xml.SelectSingleNode(fetchXmlDoc, "fetch/entity/filter", null))) {
XUI.Xml.SelectSingleNode(fetchXmlDoc, "fetch/entity", null).removeChild(XUI.Xml.SelectSingleNode(fetchXmlDoc, "fetch/entity/filter", null));
}

XUI.Xml.SelectSingleNode(fetchXmlDoc, "fetch/entity", null).appendChild(XUI.Xml.SelectSingleNode(filterXml, "filter", null));
_fetchXml = XUI.Xml.XMLSerializer.serializeToString(fetchXmlDoc);
crmGridControl.SetParameter("fetchXml", _fetchXml);
crmGridControl.SetParameter("suppressfetch", "0");
crmGridControl.Refresh();
RegisterOnChange();
Mscrm.Utilities.reportAspxDialogLoadTelemetry();
}
}

function getFilterCondition() {
var filterXml;
switch (_requestType) {

case "merge":
filterXml = "<filter><condition attribute='statecode' operator='eq' value='0' /><condition attribute='incidentid' operator='in'>";
break;
case "associatechild":
filterXml = "<filter><condition attribute='statecode' operator='eq' value='0' /><condition attribute='parentcaseid' operator='null' /><condition attribute='incidentid' operator='in'>";
break;
}
var oArgs = getDialogArguments();
for (var i = 0; i < oArgs.length; i++) {
filterXml = filterXml + "<value>" + CrmEncodeDecode.CrmXmlEncode(sanitizeId(oArgs[i])) + "</value>";
}
filterXml = filterXml + "</condition></filter>";
return filterXml;
}
function sanitizeId(id) {

return id.replace("{", "").replace("}", "");
}

</script>
</head>
<body style="background-color: #fafafd;">
<frm:DialogForm id="crmForm" runat="server">
<div style="position:absolute;left:10px;right:10px;bottom:10px;top:10px;" id="Div1">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<sdk:gridcontrol id="crmGridControl" runat="server" IsLoadOnDemandEnabled = false style="display:block" />
</div>
</div>
</frm:DialogForm>
</body>
</html>
