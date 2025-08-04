
<%@ Page language="c#" Inherits="Microsoft.Crm.Reports.ReportSchedule.ScheduleWizard" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Title_Wizard"  runat="server" /></title>
<script language="javascript">

var SUBMIT_STATUS_SUCCESS = 1;
var SUBMIT_STATUS_FAILURE = -1;
var SUBMIT_STATUS_UNKNOWN = 0;


var aSchedNavPath = new Array("", "spnFrequencySlide", "spnDatesSlide", "spnParametersSlide", "spnScheduleSummary", "spnInProgress", "spnSuccessFailure");
var aSnapNavPath = new Array("", "spnParametersSlide", "spnSnapshotSummary", "spnInProgress", "spnSuccessFailure");


var _sFirstSlide = "";
var _iCurrentSlideIndex = 0;
var _aNavPath = null;
var _sReportCopySuffix = null;
var _bIsDefaultFilterDirty = false;
var _iSubmitStatus = SUBMIT_STATUS_UNKNOWN;
var _sSubmitWarnings = "";
var _sReportId = "";


var _dtuiStart = null;
var _dtuiEnd = null;
var _btnNext = null;
var _btnBack = null;
var _btnCancel = null;
var _spnReportName = null;
var _header = null;
var _headerdesc = null;
var _roEndDate = null;
var FilterEditor;
var _spnSuccessFailureWarnings = null;

Sys.Application.add_load(function() {
_dtuiEnd = Mscrm.FormControlInputBehavior.GetBehavior("dtuiEnd");
_dtuiStart = Mscrm.FormControlInputBehavior.GetBehavior("dtuiStart");
FilterEditor = $find("filterEditor");
_btnNext = $get('btnNext');
_btnBack = $get('btnBack');
_btnCancel = $get('btnCancel');
_spnReportName = $get('spnReportName');
_header = $get('header');
_headerdesc = $get('headerdesc');
_roEndDate = $get('roEndDate');
_spnSuccessFailureWarnings = $get('spnSuccessFailureWarnings');

if (_iWizardObject == "-1" && _iWizardType == "-1")
{
alert(LOCID_NOT_SRS_REPORT);
Mscrm.Utilities.setReturnValue(false);
closeWizard();
}


XUI.Html.SetText($get('spnSnapshotReportHistoryLimitWarning'), LOCID_WARN_HIST_LIMIT_SNAP);
XUI.Html.SetText($get('spnScheduleReportHistoryLimitWarning'), LOCID_WARN_HIST_LIMIT_SCHED);


if (_iWizardType == WIZARD_TYPE_CREATE)
{
_sFirstSlide = "spnNewFirst";
}
else
{
_sFirstSlide = (_iWizardObject == WIZARD_OBJECT_SCHEDULE) ? "spnUpdateScheduleFirst" : "spnUpdateSnapshotFirst";
}


$get('spnInit').style.display = "none";


$get(_sFirstSlide).style.display = "inline";


preProcessSlide(_sFirstSlide);
});


function goBack()
{

_iCurrentSlideIndex--;


showCurrentSlide();


preProcessSlide(getCurrentSlideName());
}


function goNext()
{

_btnBack.disabled = false;


if (!postProcessSlide(getCurrentSlideName()))
{
return false;
}


_iCurrentSlideIndex++;


showCurrentSlide();


preProcessSlide(getCurrentSlideName());


return true;
}


function showCurrentSlide()
{

var iPathSlideCount = getPathSlideCount();
for (var i = 0; i < iPathSlideCount; i++)
{
$get(_aNavPath[i]).style.display = "none";
}


$get(getCurrentSlideName()).style.display = "inline";
}


function getCurrentSlideName()
{


return (IsNull(_aNavPath) ? _sFirstSlide : _aNavPath[_iCurrentSlideIndex]);
}


function getPathSlideCount()
{


return (IsNull(_aNavPath) ? 1 : _aNavPath.length)
}


function setNavPath (navPathArray)
{
_aNavPath = navPathArray;



_aNavPath[0] = _sFirstSlide;
}


function cancel()
{

if(confirm(LOCID_WARN_CLOSE_WIZARD) == true)
{

_btnNext.disabled = _btnBack.disabled = _btnCancel.disabled = true;


Mscrm.Utilities.setReturnValue(false);
closeWizard();
}
}


function closeWizard()
{
if (IsNull(window.returnValue))
window.returnValue = true;

closeWindow();
}


function buildXml()
{

var aXml = new Array();
var sUsers = "";
var sTeams = "";


aXml.push("<ScheduleWizardData>");


aXml.push("<ReportBaseId>" + CrmEncodeDecode.CrmXmlEncode(_sReportBaseId) + "</ReportBaseId>");


aXml.push("<ReportCopySuffix>" + CrmEncodeDecode.CrmXmlEncode(getReportCopySuffix()) + "</ReportCopySuffix>");


aXml.push("<Schedule>");
if (_iWizardObject == WIZARD_OBJECT_SCHEDULE) {
var frequencyControl = $find("fc");
aXml.push(frequencyControl.get_dataXml());
}
aXml.push("</Schedule>");


var parameterControl = $find("pc");
parameterControl.set_returnOnlyDirtyParameters(_iWizardType == WIZARD_TYPE_UPDATE);
aXml.push("<ReportParameters>");
aXml.push(parameterControl.get_dataXml());
aXml.push("</ReportParameters>");


var returnFilter = !FilterEditor.get_isDisabled() && (_iWizardType == WIZARD_TYPE_CREATE || _bIsDefaultFilterDirty);
aXml.push("<DefaultFilter>");
if (returnFilter)
aXml.push(FilterEditor.get_filterExecXml());
aXml.push("</DefaultFilter>");


aXml.push("</ScheduleWizardData>");


return aXml.join("");
}


function postProcessSlide(slideName)
{
var frequencyControl = $find("fc");
var parameterControl = $find("pc");


switch(slideName)
{
case "spnNewFirst" :


if ($get('roNewSchedule').checked)
{

_iWizardObject = WIZARD_OBJECT_SCHEDULE


setNavPath(aSchedNavPath);
}
else
{

_iWizardObject = WIZARD_OBJECT_SNAPSHOT;


setNavPath(aSnapNavPath);
}
break;

case "spnUpdateScheduleFirst" :

setNavPath(aSchedNavPath);
break;

case "spnUpdateSnapshotFirst" :

setNavPath(aSnapNavPath);
break;

case "spnFrequencySlide" :
frequencyControl.SetFocus();
if (!frequencyControl.IsValid())
{
return false;
}
break;

case "spnDatesSlide" :

frequencyControl.set_startDate(_dtuiStart.get_dataValue());


var dEnd = null;
if (_roEndDate.checked)
{

if (IsNull(_dtuiEnd.get_dataValue()))
{
alert(LOCID_DTM_BLANK_DATE_ERROR);
_dtuiEnd.setFocus();
return false;
}


if (frequencyControl.get_startDate().valueOf() > _dtuiEnd.get_dataValue().valueOf())
{
alert(LOCID_ERROR_START_AFTER_END);
_dtuiEnd.setFocus();
return false;
}


dEnd = _dtuiEnd.get_dataValue();
}


frequencyControl.set_endDate(dEnd);
break;

case "spnParametersSlide" :



if (!FilterEditor.get_isDisabled() && (_iWizardType == WIZARD_TYPE_CREATE || _bIsDefaultFilterDirty))
parameterControl.SetFilterTextParameterValue(FilterEditor.get_filterSummary());


parameterControl.SetDrillThroughUrlParameterValue(_sDrillThroughUrl);

if (!parameterControl.IsValid())
return false;

break;

case "spnScheduleSummary" :

window.setTimeout("submitWizard(false)", 500);
break;

case "spnSnapshotSummary" :

window.setTimeout("submitWizard($get('roGenerateSnapshotYes').checked)", 500);
break;

case "spnInProgress" :


if (_iSubmitStatus == SUBMIT_STATUS_UNKNOWN)
{
window.setTimeout(goNext, 100);
_btnBack.disabled = true;
return false;
}
break

case "spnSuccessFailure" :
closeWizard();
return false;
break;
}


return true;
}


function preProcessSlide(slideName)
{
var frequencyControl = $find("fc");
var parameterControl = $find("pc");


_btnBack.disabled = _btnNext.disabled = _btnCancel.disabled = false;


_btnBack.disabled = (slideName == _sFirstSlide);




if (!IsNull(_aNavPath) && slideName == _aNavPath[getPathSlideCount() - 1])
{
_btnBack.disabled = _btnCancel.disabled = true;
XUI.Html.SetText(_btnNext, LOCID_BUTTON_FINISH);
}
else
{
XUI.Html.SetText(_btnNext, LOCID_BUTTON_NEXT);
}


switch(slideName)
{
case "spnNewFirst" :
$get('roNewSnapshot').focus();
XUI.Html.SetText(_spnReportName, _sReportBaseName);


XUI.Html.SetText(_header, LOCID_HEAD_NEWFIRST);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_NEWFIRST);
break;

case "spnUpdateScheduleFirst" :
XUI.Html.SetText(_spnReportName, _sReportBaseName);


XUI.Html.SetText(_header, LOCID_HEAD_SCHEDUPDATEFIRST);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SCHEDUPDATEFIRST);
break;

case "spnUpdateSnapshotFirst" :
XUI.Html.SetText(_spnReportName, _sReportBaseName);


XUI.Html.SetText(_header, LOCID_HEAD_SNAPUPDATEFIRST);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SNAPUPDATEFIRST);
break;

case "spnFrequencySlide" :
frequencyControl.SetFocus();


XUI.Html.SetText(_header, LOCID_HEAD_FREQUENCY);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_FREQUENCY);
break;

case "spnDatesSlide" :



if (IsNull(_dtuiStart.get_dataValue()))
{
_dtuiStart.set_dataValue(frequencyControl.get_startDate());
_dtuiStart.resetDefault();
}


if (IsNull(_dtuiEnd.get_dataValue()) && !IsNull(frequencyControl.get_endDate()))
{

_dtuiEnd.set_dataValue(frequencyControl.get_endDate());
_dtuiEnd.ResetDefault();
_roEndDate.checked = true;
}


if (frequencyControl.get_frequency() == Mscrm.FrequencyControl.FREQ_ONCE)
{

XUI.Html.SetText(_header, LOCID_HEAD_DATEONCE);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_DATEONCE);


$get('spnStartDate').style.display = "none";
$get('spnDate').style.display = "inline";
$get('trEndDate').style.display = "none";
$get('spnDateText').style.display = "inline";
$get('spnDatesText').style.display = "none";


$get('roNoEndDate').checked = true;
}
else
{

XUI.Html.SetText(_header, LOCID_HEAD_STARTENDDATES);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_STARTENDDATES);


$get('spnStartDate').style.display = "inline";
$get('spnDate').style.display = "none";
$get('trEndDate').style.display = "table-row";
$get('spnDateText').style.display = "none";
$get('spnDatesText').style.display = "inline";
}
$get('dtuiEnd').setAttribute("contentEditable","true");
toggleEndDateOptions()
_dtuiStart.setFocus();
break;

case "spnParametersSlide" :
parameterControl.SetFocus();


XUI.Html.SetText(_header, LOCID_HEAD_PARAMETERS);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_PARAMETERS);
break;


case "spnScheduleSummary" :


XUI.Html.SetText($get('spnScheduleSummaryDesc'), (_iWizardType == WIZARD_TYPE_CREATE ? LOCID_DESC_SCHED_CREATE_SUMMARY : LOCID_DESC_SCHED_UPDATE_SUMMARY));


XUI.Html.SetText($get('spnScheduleSummaryBaseReport'), _sReportBaseName);
XUI.Html.SetText($get('spnScheduleSummaryScheduleName'), formatString(getReportCopySuffix(), _sReportBaseName));
XUI.Html.SetText($get('spnScheduleSummaryFrequency'), frequencyControl.GetFrequencySummary());
XUI.Html.SetText($get('spnScheduleSummaryStart'), formatString(LOCID_DATE_TIME_ORDER_FORMAT, Mscrm.DateTimeUtility.formatDate(frequencyControl.get_startDate()), timeToString(frequencyControl.get_startDate(), 0)));
XUI.Html.SetText($get('spnScheduleSummaryEnd'), IsNull(frequencyControl.get_endDate()) ? LOCID_LABEL_NO_END_DATE : Mscrm.DateTimeUtility.formatDate(frequencyControl.get_endDate()));


_iSubmitStatus = SUBMIT_STATUS_UNKNOWN


XUI.Html.SetText(_btnNext, (_iWizardType == WIZARD_TYPE_CREATE) ? LOCID_BUTTON_CREATE : LOCID_BUTTON_UPDATE);


XUI.Html.SetText(_header, LOCID_HEAD_SCHEDSUMMARY);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SCHEDSUMMARY);
break;

case "spnSnapshotSummary" :
XUI.Html.SetText($get('spnReportCopyNameLabelSnapshotSummary'), formatString(getReportCopySuffix(), _sReportBaseName));


_iSubmitStatus = SUBMIT_STATUS_UNKNOWN


XUI.Html.SetText(_btnNext, LOCID_BUTTON_SAVE);


XUI.Html.SetText(_header, LOCID_HEAD_SNAPSUMMARY);
XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SNAPSUMMARY);
break;

case "spnInProgress" :

XUI.Html.SetText(_header, "");
XUI.Html.SetText(_headerdesc, "");

if (_iSubmitStatus == SUBMIT_STATUS_UNKNOWN)
{

_btnBack.disabled = _btnNext.disabled = true;


window.setTimeout(goNext, 100);
}
else
{



if (_iSubmitStatus == SUBMIT_STATUS_SUCCESS)
{
_iWizardType = WIZARD_TYPE_UPDATE;
}




goBack();
}
break

case "spnSuccessFailure" :
_btnNext.focus();


var sHeadText = LOCID_SUMHEAD_FAILURE;
var sBodyText = LOCID_SUMBODY_FAILURE;
var sHeader = LOCID_HEAD_FAILURE;
var sHeaderDesc = LOCID_HEADDESC_FAILURE;


if (_iSubmitStatus == SUBMIT_STATUS_SUCCESS)
{

var sType = (_iWizardType == WIZARD_TYPE_CREATE ? "CREATE" : "UPDATE");
if (_iWizardObject == WIZARD_OBJECT_SNAPSHOT && $get('roGenerateSnapshotYes').checked)
sType += "GEN";



switch (sType)
{
case "CREATE":
sHeadText = LOCID_SUMHEAD_SNAP_CREATE;
sHeaderDesc = LOCID_HEADDESC_SUCCSNAPCREATE;
break;
case "CREATEGEN":
sHeadText = LOCID_SUMHEAD_SNAP_CREATEGEN;
sHeaderDesc = LOCID_HEADDESC_SUCCSNAPCREATE;
break;
case "UPDATE":
sHeadText = LOCID_SUMHEAD_SNAP_UPDATE;
sHeaderDesc = LOCID_HEADDESC_SUCCSNAPUPDATE;
break;
case "UPDATEGEN":
sHeadText = LOCID_SUMHEAD_SNAP_UPDATEGEN;
sHeaderDesc = LOCID_HEADDESC_SUCCSNAPUPDATE;
break;
}
sBodyText = LOCID_SUMBODY_SNAP;
sHeader = LOCID_HEAD_SUCCESS;

$get('spnSuccessFailureExplanation').style.display = "inline";
}
else
{

$get('failureImage').style.display = "inline";
}


XUI.Html.SetText($get('spnSuccessFailureHeader'), sHeadText);
XUI.Html.SetText($get('spnSuccessFailureBody'), sBodyText);
XUI.Html.SetText(_header, sHeader);
XUI.Html.SetText(_headerdesc, sHeaderDesc);


$get("hdnReportId").value = _sReportId;


if (_sSubmitWarnings.length > 0)
{
_spnSuccessFailureWarnings.innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_LABEL_WARNINGS_ERRORS);
_spnSuccessFailureWarnings.innerHTML += _sSubmitWarnings
}
else
{
XUI.Html.SetText(_spnSuccessFailureWarnings, "");
}

break;
}
}



function getReportCopySuffix()
{

if (!IsNull(_sReportCopySuffix))
return _sReportCopySuffix;


if (_iWizardType == WIZARD_TYPE_UPDATE)
{
_sReportCopySuffix = "";
return _sReportCopySuffix;
}


var sCopySuffixFormat = (_iWizardObject == WIZARD_OBJECT_SCHEDULE ? LOCID_SCHEDULE_COPY_SUFFIX : LOCID_SNAPSHOT_COPY_SUFFIX);








_sReportCopySuffix = Mscrm.ReportUtil.getReportCopySuffix(sCopySuffixFormat);
return _sReportCopySuffix;
}


function toggleEndDateOptions()
{
if ($get('roNoEndDate').checked)
{
_dtuiEnd.set_disabled(true);
}
else
{
_dtuiEnd.set_disabled(false);
_dtuiEnd.setFocus();
}
}


function submitWizard(takeSnapshotNow)
{

var command = new RemoteCommand("ScheduleService", "ProcessWizardData");
command.SetParameter("xmlWizardData", buildXml());
command.SetParameter("takeSnapshotNow", takeSnapshotNow);


try
{
command.Execute(submitWizardDone);
}
catch (e)
{
_iSubmitStatus = SUBMIT_STATUS_FAILURE;
}
}

function submitWizardDone(oResult)
{

if (oResult.Success)
{
_iSubmitStatus = (oResult.ReturnValue.Success ? SUBMIT_STATUS_SUCCESS : SUBMIT_STATUS_FAILURE)
_sReportId = oResult.ReturnValue.ReportId;









if (oResult.ReturnValue.Warnings.string != null)
{


var aResultWarnings = (typeof(oResult.ReturnValue.Warnings.string) == "string") ? new Array(oResult.ReturnValue.Warnings.string) : oResult.ReturnValue.Warnings.string;

_sSubmitWarnings = "<ul class=\"ms-crm-ReportScheduleList\">";
for (var i = 0; i < aResultWarnings.length; i++)
{
_sSubmitWarnings += "<li>";
_sSubmitWarnings += CrmEncodeDecode.CrmHtmlEncode(aResultWarnings[i]);
_sSubmitWarnings += "</li>";
}
_sSubmitWarnings += "</ul>";
}
else
{
_sSubmitWarnings = "";
}
}
else
{
_iSubmitStatus = SUBMIT_STATUS_FAILURE;
_sSubmitWarnings = "";
}
}


function editFilter()
{

var oUrl = Mscrm.CrmUri.create("/CRMReports/ReportSchedule/EditFilter.aspx?id=" + _sReportBaseId);

var oArgs = new Object();
oArgs.ReportName = _sReportBaseName;
oArgs.FilterXml = (_bIsDefaultFilterDirty) ? FilterEditor.get_filterExecXml() : null;

var oResult = openStdDlg(oUrl, oArgs, window.document.body.clientWidth, window.document.body.clientHeight, true);


if (!IsNull(oResult))
{
FilterEditor.set_filterXml(oResult.filterXml);





_bIsDefaultFilterDirty = true;
}
}








</script>
</head>
<body scroll="no">
<ui:Hidden ID="hdnReportId" runat="server" />
<div style="width:100%; height:100%;">
<div class="ms-crm-Dialog-Header" style="vertical-align: middle;">
<div class="ms-crm-Dialog-Header-Title" id="header"></div>
<div class="ms-crm-Dialog-Header-Desc" id="headerdesc"></div>
</div>
<div valign="top" class="WizardMain" style="position:absolute; top:57px; bottom:40px; left:0px; right:0px">
<div>
<table class="ReportName" width="99%">
<tr valign="top">
<td width="100%"><span id="spnReportName" class="ReportName"></span></td>
</tr>
</table>
</div>
<div style="position:absolute; top:56px; bottom:0px; width:650px;">
<div id="spnInit" class="slide" style="display: inline; width:100%; height:100%; position:absolute">
<table height="100%" width="100%" style="cursor:wait">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif"/><br>
<loc:Text ResourceId="InProgress_Init"  runat="server" />
</td>
</tr>
</table>
</div>
<div id="spnNewFirst" class="slide">
<loc:Text ResourceId="Desc_NewFirstHeader"  runat="server" />
<ul class="ms-crm-ReportScheduleList">
<li><loc:Text ResourceId="Desc_NewFirstItem2"  runat="server" /></li>
<li><loc:Text ResourceId="Desc_NewFirstItem1"  runat="server" /></li>
</ul><br />

<loc:Text ResourceId="Label_NewFirst"  runat="server" /><br>
<table cellspacing="10" cellpadding="0">
<tr>
<td valign="top"><input type="radio" name="radNewFirstObject" id="roNewSnapshot" class="radio" checked></td>
<td><label for="roNewSnapshot"><loc:Text ResourceId="Label_CreateOneTimeSnapshot"  runat="server" /></label></td>
</tr>
<tr>
<td valign="top"><input type="radio" name="radNewFirstObject" id="roNewSchedule" class="radio"></td>
<td><label for="roNewSchedule"><loc:Text ResourceId="Label_CreateSchedule"  runat="server" /></label></td>
</tr>
</table>
</div>
<div id="spnUpdateScheduleFirst" class="slide">
<loc:Text ResourceId="Desc_UpdateSchedule"  runat="server" /><br/><br/>
<loc:Text ResourceId="Label_ClickNext"  runat="server" />
</div>
<div id="spnUpdateSnapshotFirst" class="slide">
<loc:Text ResourceId="Desc_UpdateSnapshot"  runat="server" /><br/><br/>
<loc:Text ResourceId="Label_ClickNext"  runat="server" />
</div>
<div id="spnFrequencySlide" class="slide">
<loc:Text ResourceId="Desc_Schedule"  runat="server" /><br>&nbsp;
<cnt:FrequencyControl id="fc" runat="server" />
</div>
<div id="spnDatesSlide" class="slide">
<span id="spnDatesText"><loc:Text ResourceId="Desc_Dates"  runat="server" /></span>
<span id="spnDateText" style="display:none"><loc:Text ResourceId="Desc_DateOnce"  runat="server" /></span>

<br><br>
<table cellspacing="10" cellpadding="0"  style="width:300px;">
<colgroup>
<col width ="75" />
<col />
</colgroup>
<tr>
<td style="width:75px"><span id="spnStartDate"><loc:Text ResourceId="Label_StartDate"  runat="server" /></span>
<span id="spnDate" style="display:none"><label for="dtuiStart"><loc:Text ResourceId="Label_Date"  runat="server" /></label></span></td>
<td style="padding-left:80px; "><ui:DateTimeUI id="dtuiStart" runat="server" DisplayFormat="date" /></td>
</tr>
<tr id="trEndDate">
<td valign="top"  style="width:50px"><loc:Text ResourceId="Label_EndDate"  runat="server" /></td>
<td>
<table cellspacing="2" cellpadding="0"  style="width:200px;">
<colgroup>
<col width ="25" />
<col width ="50"/>
<col />
</colgroup>
<tr>
<td><input type="radio" name="radEndDate" id="roNoEndDate" class="radio" runat="server" onclick="toggleEndDateOptions()" checked></td>
<td colspan="2"><label for="roNoEndDate"><loc:Text ResourceId="Label_NoEndDate"  runat="server" /></label></td>
</tr>
<tr>
<td><input type="radio" name="radEndDate" id="roEndDate" class="radio" onclick="toggleEndDateOptions()" runat="server" ></td>
<td><label for="roEndDate"><loc:Text ResourceId="Label_EndOn"  runat="server" /></label></td>
<td><label class="ms-crm-Hidden" for="dtuiEnd"><loc:Text ResourceId="ReportScheduling.EndDate.label"  runat="server" /></label><ui:DateTimeUI id="dtuiEnd" runat="server" DisplayFormat="date" /></td>
</tr>
</table>
</td>
</tr>
</table><br><br>
</div>
<div id="spnParametersSlide" class="slide" style="position:absolute; height:100%">
<div>
<loc:Text ResourceId="Desc_Parameters"  runat="server" /><br><br>
<cnt:ParameterControl id="pc" runat="server" />
</div>
<div class="ScheduleWizard_td_BtnEditFilter" style="position:absolute; bottom:0px; width:100%">
<ui:Button ID="btnEditFilter" OnClick="editFilter();" ResourceId="Button_EditFilter"  runat="server"></ui:Button>
</div>
</div>

<div id="spnDefaultFilter" class="slide">
<table width="100%" height="100%">
<tr><td>
<cnt:AppFilterEditor id="filterEditor" runat="server" />
</td></tr>
</table>
</div>

<div id="spnScheduleSummary" class="slide">
<table cellspacing="10" cellpadding="0">
<tr>
<td colspan="2"><span id="spnScheduleSummaryDesc"></span><td>
</tr>
<tr><td colspan="2" height="10"></td></tr>
<tr valign="top">
<td class="ScheduleWizard_td_Text"><loc:Text ResourceId="Label_ReportColon"  runat="server" /></td>
<td><span id="spnScheduleSummaryBaseReport"></span><td>
</tr>
<tr valign="top">
<td class="ScheduleWizard_td_Text"><nobr><loc:Text ResourceId="Label_ScheduleName"  runat="server" /></nobr></td>
<td><span id="spnScheduleSummaryScheduleName"></span><td>
</tr>
<tr valign="top">
<td class="ScheduleWizard_td_Text"><loc:Text ResourceId="Label_Frequency"  runat="server" /></td>
<td><span id="spnScheduleSummaryFrequency"></span><td>
</tr>
<tr valign="top">
<td class="ScheduleWizard_td_Text"><loc:Text ResourceId="Label_Start"  runat="server" /></td>
<td><span id="spnScheduleSummaryStart"></span><td>
</tr>
<tr valign="top">
<td class="ScheduleWizard_td_Text"><loc:Text ResourceId="Label_End"  runat="server" /></td>
<td><span id="spnScheduleSummaryEnd"></span><td>
</tr>
</table><br><br>
<span id="spnScheduleReportHistoryLimitWarning"></span>



</div>
<div id="spnSnapshotSummary" class="slide">
<table cellspacing="10" cellpadding="0">
<tr>
<td colspan="4"><loc:Text ResourceId="Desc_SnapshotSummary"  runat="server" /><td>
</tr>
<tr valign="top">
<td width="10"></td>
<td colspan="2"><nobr><loc:Text ResourceId="Label_SettingName"  runat="server" /></nobr></td>
<td><span id="spnReportCopyNameLabelSnapshotSummary"></span></td>
</tr>
<tr><td colspan="4" height="10"></td></tr>
<tr>
<td colspan="4"><loc:Text ResourceId="Desc_GenerateSnapshotNow"  runat="server" /><td>
</tr>
<tr>
<td></td>
<td valign="top"><input type="radio" name="radGenerateSnapshot" id="roGenerateSnapshotYes" class="radio" checked></td>
<td colspan="2"><label for="roGenerateSnapshotYes"><loc:Text ResourceId="Label_GenerateSnapshotYes"  runat="server" /></label><td>
</tr>
<tr>
<td></td>
<td valign="top"><input type="radio" name="radGenerateSnapshot" id="roGenerateSnapshotNo" class="radio"></td>
<td colspan="2"><label for="roGenerateSnapshotNo"><loc:Text ResourceId="Label_GenerateSnapshotNo"  runat="server" /></label><td>
</tr>
</table><br><br>
<span id="spnSnapshotReportHistoryLimitWarning"></span>



</div>
<div id="spnInProgress" class="slide" style="display: none; width:100%; height:100%; position:absolute">
<table height="100%" width="100%" style="cursor:wait">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif"/><br>
<loc:Text ResourceId="InProgress_ProcessingRequest"  runat="server" />
</td>
</tr>
</table>
</div>
<div id="spnSuccessFailure" class="slide">
<img src="/_imgs/error/notif_icn_crit16.png" alt="" class="ms-crm-ScheduleWizard-Failure" id="failureImage" />
<span id="spnSuccessFailureHeader"></span><br><br>
<span id="spnSuccessFailureBody">
<loc:Text ResourceId="Desc_SnapshotOperationSuccess"  runat="server" />
</span><br><br>
<span id="spnSuccessFailureExplanation" style="display:none;">
<ul class="ms-crm-ReportScheduleList">
<li><loc:Text ResourceId="Desc_SnapshotOperationSuccess1"  runat="server" /></li>
<li><loc:Text ResourceId="Desc_SnapshotOperationSuccess2"  runat="server" /></li>
<li><loc:Text ResourceId="Desc_SnapshotOperationSuccess3"  runat="server" /></li>
</ul>
</span>
<span id="spnSuccessFailureWarnings" style="overflow:auto"></span>

<loc:Text ResourceId="Desc_CloseWizard"  runat="server" />
</div>
</div>
</div>
<div class="ms-crm-Dialog-Buttons" style="position:absolute; bottom:0px;">
<ui:Button ID="btnBack" Disabled=true OnClick="goBack();" ResourceId="Button_Back"  runat="server" ></ui:Button> &nbsp;
<ui:Button ID="btnNext" Disabled=true OnClick="goNext();" ResourceId="Button_Next"  runat="server" ></ui:Button> &nbsp;
<ui:Button ID="btnCancel" Disabled=true OnClick="cancel();" ResourceId="Button_Cancel"  runat="server" ></ui:Button>
</div>
</div>

</body>
</html>

