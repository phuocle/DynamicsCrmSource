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
// Wizard submission status constants
var SUBMIT_STATUS_SUCCESS = 1;
var SUBMIT_STATUS_FAILURE = -1;
var SUBMIT_STATUS_UNKNOWN = 0;
// Navigation arrays
var aSchedNavPath = new Array("", "spnFrequencySlide", "spnDatesSlide", "spnParametersSlide", "spnScheduleSummary", "spnInProgress", "spnSuccessFailure");
var aSnapNavPath = new Array("", "spnParametersSlide", "spnSnapshotSummary", "spnInProgress", "spnSuccessFailure");
// Global variables
var _sFirstSlide = "";
var _iCurrentSlideIndex = 0;
var _aNavPath = null;
var _sReportCopySuffix = null;
var _bIsDefaultFilterDirty = false;
var _iSubmitStatus = SUBMIT_STATUS_UNKNOWN;
var _sSubmitWarnings = "";
var _sReportId = "";
// DateTimeControl.cs
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
	// If code-behind hasn't setup anything, then there is an error
	if (_iWizardObject == "-1" && _iWizardType == "-1")
	{
		alert(LOCID_NOT_SRS_REPORT);
		Mscrm.Utilities.setReturnValue(false);
		closeWizard();
	}
	// Place resource strings into placeholders
	XUI.Html.SetText($get('spnSnapshotReportHistoryLimitWarning'), LOCID_WARN_HIST_LIMIT_SNAP);
	XUI.Html.SetText($get('spnScheduleReportHistoryLimitWarning'), LOCID_WARN_HIST_LIMIT_SCHED);
	// Pick the first slide
	if (_iWizardType == WIZARD_TYPE_CREATE)
	{
		_sFirstSlide = "spnNewFirst";
	}
	else
	{
		_sFirstSlide = (_iWizardObject == WIZARD_OBJECT_SCHEDULE) ? "spnUpdateScheduleFirst" : "spnUpdateSnapshotFirst";
	}
	// Disable the init display
	$get('spnInit').style.display = "none";
	// Show the first slide
	$get(_sFirstSlide).style.display = "inline";
	// Pre-process the first slide
	preProcessSlide(_sFirstSlide);
});
// Handles Back button click
function goBack()
{
	// Decrement the current page index by one
	_iCurrentSlideIndex--;
	// After calculating the exact current slide index, display its content
	showCurrentSlide();
	// Handle any pre-processing on the slide
	preProcessSlide(getCurrentSlideName());
}
// Handles Next button click
function goNext()
{
	// Make sure that Back button is enabled on all the slides triggered by the Next button
	_btnBack.disabled = false;
	// Handle any post-processing on the slide
	if (!postProcessSlide(getCurrentSlideName()))
	{
		return false;
	}
	// Increment the current slide index by one
	_iCurrentSlideIndex++;
	// After calculating the exact current slide index, display its content
	showCurrentSlide();
	// Handle any pre-processing on the slide
	preProcessSlide(getCurrentSlideName());
	// Return
	return true;
}
// Display the content of the current slide
function showCurrentSlide()
{
	// Make all slides in the nav path invisible
	var iPathSlideCount = getPathSlideCount();
	for (var i = 0; i < iPathSlideCount; i++)
	{
		$get(_aNavPath[i]).style.display = "none";
	}
	// Make [display=inline] for the requested slide
	$get(getCurrentSlideName()).style.display = "inline";
}
// Returns the name/id of the current slide
function getCurrentSlideName()
{
	// If navigation array hasn't been set up, return the first slide,
	// otherwise, return the current slide
	return (IsNull(_aNavPath) ? _sFirstSlide : _aNavPath[_iCurrentSlideIndex]);
}
// Returns the number of slides in the current navigation path
function getPathSlideCount()
{
	// If the navigation array hasn't been set up, return 1 for the first slide,
	// otherwise return the current slide count
	return (IsNull(_aNavPath) ? 1 : _aNavPath.length)
}
// Once the user has chosen a navigation path, set up the array/variables
function setNavPath (navPathArray)
{
	_aNavPath = navPathArray;
	// In case the user clicks back to the first slide, let the navigation
	// array handle it
	_aNavPath[0] = _sFirstSlide;
}
// Handles Cancel button click
function cancel()
{
	// Check with the user to see if they really want to close
	if(confirm(LOCID_WARN_CLOSE_WIZARD) == true)
	{
		// Disable all the buttons to avoid user's click on them during the delay in closing the wizard
		_btnNext.disabled = _btnBack.disabled = _btnCancel.disabled = true;
		// Close the wizard finally
		Mscrm.Utilities.setReturnValue(false);
		closeWizard();
	}
}
// Called at time of closing the wizard
function closeWizard()
{
	if (IsNull(window.returnValue))
		window.returnValue = true;
	closeWindow();
}
// Builds an Xml string containing all the information from the wizard
function buildXml()
{
	// Setup array to build xml
	var aXml = new Array();
	var sUsers = "";
	var sTeams = "";
	// Add the root element
	aXml.push("<ScheduleWizardData>");
	// Report base name Xml
	aXml.push("<ReportBaseId>" + CrmEncodeDecode.CrmXmlEncode(_sReportBaseId) + "</ReportBaseId>");
	// Report copy suffix Xml
	aXml.push("<ReportCopySuffix>" + CrmEncodeDecode.CrmXmlEncode(getReportCopySuffix()) + "</ReportCopySuffix>");
	// Frequency/start & end date Xml
	aXml.push("<Schedule>");
	if (_iWizardObject == WIZARD_OBJECT_SCHEDULE) {
		var frequencyControl = $find("fc");
		aXml.push(frequencyControl.get_dataXml());
	}
	aXml.push("</Schedule>");
	// Report parameters Xml
	var parameterControl = $find("pc");
	parameterControl.set_returnOnlyDirtyParameters(_iWizardType == WIZARD_TYPE_UPDATE);
	aXml.push("<ReportParameters>");
	aXml.push(parameterControl.get_dataXml());
	aXml.push("</ReportParameters>");
	// Default filter Xml
	var returnFilter = !FilterEditor.get_isDisabled() && (_iWizardType == WIZARD_TYPE_CREATE || _bIsDefaultFilterDirty);
	aXml.push("<DefaultFilter>");
	if (returnFilter)
		aXml.push(FilterEditor.get_filterExecXml());
	aXml.push("</DefaultFilter>");
	// Close the root element
	aXml.push("</ScheduleWizardData>");
	// Return the Xml string
	return aXml.join("");
}
// Performs any necessary actions on slide unload (post-processing)
function postProcessSlide(slideName)
{
	var frequencyControl = $find("fc");
	var parameterControl = $find("pc");
	// Some custom processing and input validation on respective slide
	switch(slideName)
	{
		case "spnNewFirst" : // First slide for "new" wizard
			// Save user's selection of object-type
			if ($get('roNewSchedule').checked)
			{
				// User has selected to create a new schedule
				_iWizardObject = WIZARD_OBJECT_SCHEDULE
				// Save the navigation path
				setNavPath(aSchedNavPath);
			}
			else
			{
				// User has selected to create a new 1-time snapshot
				_iWizardObject = WIZARD_OBJECT_SNAPSHOT;
				// Save the navigation path
				setNavPath(aSnapNavPath);
			}
			break;
		case "spnUpdateScheduleFirst" : // First slide of "update schedule" wizard
			// Save the navigation path
			setNavPath(aSchedNavPath);
			break;
		case "spnUpdateSnapshotFirst" : // First slide of "update snapshot" wizard
			// Save the navigation path
			setNavPath(aSnapNavPath);
			break;
		case "spnFrequencySlide" : // Schedule frequency slide
			frequencyControl.SetFocus();
			if (!frequencyControl.IsValid())
			{
				return false;
			}
			break;
		case "spnDatesSlide" : // Start/End dates slide
			// Save the start date
			frequencyControl.set_startDate(_dtuiStart.get_dataValue());
			// Retrieve end date
			var dEnd = null;
			if (_roEndDate.checked)
			{
				// Make sure user has entered end date
				if (IsNull(_dtuiEnd.get_dataValue()))
				{
					alert(LOCID_DTM_BLANK_DATE_ERROR); // Error message from datetimeUI
					_dtuiEnd.setFocus();
					return false;
				}
				// Make sure end >= start
				if (frequencyControl.get_startDate().valueOf() > _dtuiEnd.get_dataValue().valueOf())
				{
					alert(LOCID_ERROR_START_AFTER_END);
					_dtuiEnd.setFocus();
					return false;
				}
				// Store the end date
				dEnd = _dtuiEnd.get_dataValue();
			}
			// Save the end dates
			frequencyControl.set_endDate(dEnd);
			break;
		case "spnParametersSlide" : // Report parameters slide
			// Save the default filter summary as a parameter if create wizard
			// or default filter has been updated
			if (!FilterEditor.get_isDisabled() && (_iWizardType == WIZARD_TYPE_CREATE || _bIsDefaultFilterDirty))
				parameterControl.SetFilterTextParameterValue(FilterEditor.get_filterSummary());
			// Set the value of the drillthrough url parameter
			parameterControl.SetDrillThroughUrlParameterValue(_sDrillThroughUrl);
			if (!parameterControl.IsValid())
				return false;
			break;
		case "spnScheduleSummary" : // Schedule create/update summary
			// Submit the wizard
			window.setTimeout("submitWizard(false)", 500);
			break;
		case "spnSnapshotSummary" : // Snapshot create/update summary
			// Submit the wizard
			window.setTimeout("submitWizard($get('roGenerateSnapshotYes').checked)", 500);
			break;
		case "spnInProgress" : // Submission in progress screen
			// If web service call hasn't returned yet, stay on this slide, but
			// retry moving forward again after a time
			if (_iSubmitStatus == SUBMIT_STATUS_UNKNOWN)
			{
				window.setTimeout(goNext, 100);
				_btnBack.disabled = true;
				return false;
			}
			break
		case "spnSuccessFailure" : // Success/Failure slide
			closeWizard();
			return false;
			break;
	}
	// Post-process successful
	return true;
}
// Performs any necessary actions on slide load (pre-processing)
function preProcessSlide(slideName)
{
	var frequencyControl = $find("fc");
	var parameterControl = $find("pc");
	// By default enable all the buttons
	_btnBack.disabled = _btnNext.disabled = _btnCancel.disabled = false;
	// Disable Back button on the first slide
	_btnBack.disabled = (slideName == _sFirstSlide);
	// The "Next" button becomes a "Finish" button on the final slide, and
	// the remaining buttons are disabled. On all other pages, reset the next
	// button to say "Next" in case it has been changed
	if (!IsNull(_aNavPath) && slideName == _aNavPath[getPathSlideCount() - 1])
	{
		_btnBack.disabled = _btnCancel.disabled = true;
		XUI.Html.SetText(_btnNext, LOCID_BUTTON_FINISH);
	}
	else
	{
		XUI.Html.SetText(_btnNext, LOCID_BUTTON_NEXT);
	}
	// Some custom processing and input validation on respective slide
	switch(slideName)
	{
		case "spnNewFirst" : // First slide for "new" wizard
			$get('roNewSnapshot').focus();
			XUI.Html.SetText(_spnReportName, _sReportBaseName);
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_NEWFIRST);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_NEWFIRST);
			break;
		case "spnUpdateScheduleFirst" : // First slide for update schedule wizard
			XUI.Html.SetText(_spnReportName, _sReportBaseName);
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_SCHEDUPDATEFIRST);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SCHEDUPDATEFIRST);
			break;
		case "spnUpdateSnapshotFirst" : // First slide for update snapshot wizard
			XUI.Html.SetText(_spnReportName, _sReportBaseName);
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_SNAPUPDATEFIRST);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SNAPUPDATEFIRST);
			break;
		case "spnFrequencySlide" : // Schedule frequency slide
			frequencyControl.SetFocus();
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_FREQUENCY);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_FREQUENCY);
			break;
		case "spnDatesSlide" : // Start/End dates slide
			// Update DateTimeUI controls based on FrequencyControl only if
			// the start/end dates are null (default value).
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
			// Set the text
			if (frequencyControl.get_frequency() == Mscrm.FrequencyControl.FREQ_ONCE)
			{
				// Set the header text
				XUI.Html.SetText(_header, LOCID_HEAD_DATEONCE);
				XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_DATEONCE);
				// Set visibility of date labels
				$get('spnStartDate').style.display = "none";
				$get('spnDate').style.display = "inline";
				$get('trEndDate').style.display = "none";
				$get('spnDateText').style.display = "inline";
				$get('spnDatesText').style.display = "none";
				// Set no end date radio button
				$get('roNoEndDate').checked = true;
			}
			else
			{
				// Set the header text
				XUI.Html.SetText(_header, LOCID_HEAD_STARTENDDATES);
				XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_STARTENDDATES);
				// Set visibility of date labels
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
		case "spnParametersSlide" : // Report parameters slide
			parameterControl.SetFocus();
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_PARAMETERS);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_PARAMETERS);
			break;
		case "spnScheduleSummary" : //Schedule create/update summary
			// Display summary description based on wizard type (update/create)
			XUI.Html.SetText($get('spnScheduleSummaryDesc'), (_iWizardType == WIZARD_TYPE_CREATE ? LOCID_DESC_SCHED_CREATE_SUMMARY : LOCID_DESC_SCHED_UPDATE_SUMMARY));
			// Write out summary spans
			XUI.Html.SetText($get('spnScheduleSummaryBaseReport'), _sReportBaseName);
			XUI.Html.SetText($get('spnScheduleSummaryScheduleName'), formatString(getReportCopySuffix(), _sReportBaseName));
			XUI.Html.SetText($get('spnScheduleSummaryFrequency'), frequencyControl.GetFrequencySummary());
			XUI.Html.SetText($get('spnScheduleSummaryStart'), formatString(LOCID_DATE_TIME_ORDER_FORMAT, Mscrm.DateTimeUtility.formatDate(frequencyControl.get_startDate()), timeToString(frequencyControl.get_startDate(), 0)));
			XUI.Html.SetText($get('spnScheduleSummaryEnd'), IsNull(frequencyControl.get_endDate()) ? LOCID_LABEL_NO_END_DATE : Mscrm.DateTimeUtility.formatDate(frequencyControl.get_endDate()));
			// Reset submit status
			_iSubmitStatus = SUBMIT_STATUS_UNKNOWN
			// Change the next button to say "Create" or "Update"
			XUI.Html.SetText(_btnNext, (_iWizardType == WIZARD_TYPE_CREATE) ? LOCID_BUTTON_CREATE : LOCID_BUTTON_UPDATE);
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_SCHEDSUMMARY);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SCHEDSUMMARY);
			break;
		case "spnSnapshotSummary" : // Snapshot create/update summary
			XUI.Html.SetText($get('spnReportCopyNameLabelSnapshotSummary'), formatString(getReportCopySuffix(), _sReportBaseName));
			// Reset submit status
			_iSubmitStatus = SUBMIT_STATUS_UNKNOWN
			// Change the next button to say "Save"
			XUI.Html.SetText(_btnNext, LOCID_BUTTON_SAVE);
			// Set the header text
			XUI.Html.SetText(_header, LOCID_HEAD_SNAPSUMMARY);
			XUI.Html.SetText(_headerdesc, LOCID_HEADDESC_SNAPSUMMARY);
			break;
		case "spnInProgress" : // Submission in progress screen
			// Set the header text
			XUI.Html.SetText(_header, "");
			XUI.Html.SetText(_headerdesc, "");
			if (_iSubmitStatus == SUBMIT_STATUS_UNKNOWN)
			{
				// Disable back and next buttons
				_btnBack.disabled = _btnNext.disabled = true;
				// Attempt to move on after a timeout
				window.setTimeout(goNext, 100);
			}
			else
			{
				// If the wizard was successful but the user wants to go back,
				// then change the wizard to an update wizard, because the
				// report has already been copied
				if (_iSubmitStatus == SUBMIT_STATUS_SUCCESS)
				{
					_iWizardType = WIZARD_TYPE_UPDATE;
				}
				// If the submit status is known, the wizard has already been
				// submitted, there was a failure, and the user is trying to
				// go back, so skip over this slide
				goBack();
			}
			break
		case "spnSuccessFailure" : // Success/Failure slide
			_btnNext.focus();
			// Assume it's a failure
			var sHeadText = LOCID_SUMHEAD_FAILURE;
			var sBodyText = LOCID_SUMBODY_FAILURE;
			var sHeader = LOCID_HEAD_FAILURE;
			var sHeaderDesc = LOCID_HEADDESC_FAILURE;
			// Submission was successful
			if (_iSubmitStatus == SUBMIT_STATUS_SUCCESS)
			{
				// Generate the wizard type chunk of the resource string name
				var sType = (_iWizardType == WIZARD_TYPE_CREATE ? "CREATE" : "UPDATE");
				if (_iWizardObject == WIZARD_OBJECT_SNAPSHOT && $get('roGenerateSnapshotYes').checked)
					sType += "GEN";
				// Load up the correct resources strings
				// which look like: LOCID_SUMHEAD_SNAP_CREATE
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
				// Show the failure icon
				$get('failureImage').style.display = "inline";
			}
			// Write the success/failure strings to the header/body spans
			XUI.Html.SetText($get('spnSuccessFailureHeader'), sHeadText);
			XUI.Html.SetText($get('spnSuccessFailureBody'), sBodyText);
			XUI.Html.SetText(_header, sHeader);
			XUI.Html.SetText(_headerdesc, sHeaderDesc);
			// Write report ID to hidden control
			$get("hdnReportId").value = _sReportId;
			// Write out errors/warnings if necessary
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
// Generates a suffix for the copy report based on whether the wizard is creating a
// new schedule or snapshot report copy
function getReportCopySuffix()
{
	// Send back copy name if already generated
	if (!IsNull(_sReportCopySuffix))
		return _sReportCopySuffix;
	// If update wizard, use base name as copy name
	if (_iWizardType == WIZARD_TYPE_UPDATE)
	{
		_sReportCopySuffix = "";
		return _sReportCopySuffix;
	}
	// Get the report copy suffix format
	var sCopySuffixFormat = (_iWizardObject == WIZARD_OBJECT_SCHEDULE ? LOCID_SCHEDULE_COPY_SUFFIX : LOCID_SNAPSHOT_COPY_SUFFIX);
	// Embed the current date/time strings and keep the first placeholder as-is
	// Due to the implementation of the wizard, the merging of the report base 
	// name and the suffix format string happen here on the client-side (for 
	// displaying to the user) and also on the server-side for building the 
	// actual report copy name. The server-side expects a format string, so 
	// we have to keep placeholder 0 in place.
	// LATER: (tpeelen, 2007-10-26) - Move report copy name generation to client side
	_sReportCopySuffix = Mscrm.ReportUtil.getReportCopySuffix(sCopySuffixFormat);
	return _sReportCopySuffix;
}
// Handles the toggling of end date options
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
// Submits the wizard and optionally generates a snapshot upon submission
function submitWizard(takeSnapshotNow)
{
	// Set up the RemoteCommand
	var command = new RemoteCommand("ScheduleService", "ProcessWizardData");
	command.SetParameter("xmlWizardData", buildXml());
	command.SetParameter("takeSnapshotNow", takeSnapshotNow);
	// Attempt to execute the command
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
	// If the result was successful, save the return value information
	if (oResult.Success)
	{
		_iSubmitStatus = (oResult.ReturnValue.Success ? SUBMIT_STATUS_SUCCESS : SUBMIT_STATUS_FAILURE)
		_sReportId = oResult.ReturnValue.ReportId;
		// NOTE: The ReturnValue of this web service call is a complex type
		// consisting of a boolean (Success) and an array of strings (Warnings).
		// For some reason the ReturnValue returned from RemoteCommand requires
		// the actual string values in Warnings to be accessed by the .string
		// property. In addition, it seems that if the warnings array only
		// contains one value, the it is interpreted as a string and not an array
		// Convert the warnings returned by the web service into an unordered list
		if (oResult.ReturnValue.Warnings.string != null)
		{
			// The result is either a single string or an array - convert the
			// string to an array
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
// Opens up the edit default filter dialog
function editFilter()
{
	// Open the dialog
	var oUrl = Mscrm.CrmUri.create("/CRMReports/ReportSchedule/EditFilter.aspx?id=" + _sReportBaseId);
	var oArgs = new Object();
	oArgs.ReportName = _sReportBaseName;
	oArgs.FilterXml = (_bIsDefaultFilterDirty) ? FilterEditor.get_filterExecXml() : null;
	var oResult = openStdDlg(oUrl, oArgs, window.document.body.clientWidth, window.document.body.clientHeight, true);
	// If the dialog returned a non-null value, it is the default filter
	if (!IsNull(oResult))
	{
		FilterEditor.set_filterXml(oResult.filterXml);
		// The hidden filter control in the wizard can't be used to keep track
		// of IsDirty, because only a user action can dirty the control. Instead
		// the user edits the control via the pop-up and we keep track of whether
		// the pop-up control was dirtied
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
		    <!-- Hidden default filter slide -->
		    <div id="spnDefaultFilter" class="slide">
			    <table width="100%" height="100%">
				    <tr><td>
					    <cnt:AppFilterEditor id="filterEditor" runat="server" />
				    </td></tr>
			    </table>
		    </div>
		    <!-- Hidden default filter slide -->
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
