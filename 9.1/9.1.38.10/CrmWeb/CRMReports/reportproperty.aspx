
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ReportProperty.ReportPropertyPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Reports"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" href="<%=faviconPath%>" />
<style>
	.ms-crm-FormContainer
	{
		width:100%;
		height:100%;
		position:relative;
	}
	
	.ms-crm-TabContainer
	{
		top:147px;
		bottom:25px;
		margin-bottom:10px;
		margin-right:10px;
		margin-left:10px;
		left:0px;
		right:0px;
	}
	
</style>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript">
var REPORT_TYPE_WIZARD = 1;
var REPORT_TYPE_FILE = 2;
var REPORT_TYPE_URL = 3;

var REPORT_TYPE_CODE_NOTCHANGE = 0;
var REPORT_TYPE_CODE_SRS = 1;
var REPORT_TYPE_CODE_FILE = 2;
var REPORT_TYPE_CODE_LINK = 3;

var crmForm;
var oCrmFormSubmit;
var crmFormCtrl;
var reportTypeCtrl;
var picklistCategoryComponent = null;
var picklistRelatedEntityComponent = null;
var picklistVisibilityComponent = null;

function IsEmpty(sObj)
{
	return (IsNull(sObj) || (sObj.length == 0));
}

//We set the tab top property during html rendering. However in IE8, this property is not set.
//So, will set after DOM is loaded
function SetTabDivTopIfNotAlreadySet()
{
	var tabDivTop = XUI.Html.GetComputedStyle($get('tab0'), 'top');
	if(tabDivTop.replace('px', '') == 0)
	{
		SetTabOffSet($get('tab0cell').offsetTop + 'px');
	}
}

Sys.Application.add_init(SetTabDivTopIfNotAlreadySet);

var _parentreportid = null;
Sys.Application.add_load(function() {
	
	_parentreportid = Mscrm.FormControlInputBehavior.GetBehavior('parentreportid');
	// Workaround: form is named crmFormSubmit, but actions all assume crmForm
	oCrmFormSubmit = $get('crmFormSubmit');
	oCrmForm = oCrmFormSubmit;
	crmFormCtrl = $find("crmFormSubmit");
	reportTypeCtrl = Mscrm.FormControlInputBehavior.GetBehavior('selectReportType');

	// ------------------------------------------------------------------------
	// Configure controls
	// ------------------------------------------------------------------------

	// "Template" (file upload control) is only required field if this is a new
	// report or if this is an existing report and the current type is not
	// "Existing file", so set the UI accordingly
    	
	var template = $get('Template', oCrmFormSubmit);
	if (_bIsNew || GetSelectedReportType() != REPORT_TYPE_FILE)
		template.style.backgroundColor = <% = Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color")) %>;
	else
		template.style.backgroundColor = "#FFFFFF";

	// Enable/disable correct UI elements for report type (set in code-behind)
	UpdateReportTypeUI(false);

	// Some of the controls should not have their values submitted. They are only
	// used on the client side and their values are transported to the server
	// through other means than straight submission.
	selectReportTypeComponent = Mscrm.FormControlInputBehavior.GetBehavior("selectReportType")
	picklistCategoryComponent = $find("picklistCategorySpan");
	picklistRelatedEntityComponent =$find("picklistRelatedEntitySpan");
	picklistVisibilityComponent = $find("picklistVisibilitySpan");
	
	selectReportTypeComponent.set_doNotSubmit(true)
	picklistCategoryComponent.set_doNotSubmit(true);
	picklistRelatedEntityComponent.set_doNotSubmit(true);
	picklistVisibilityComponent.set_doNotSubmit(true);

	// Attach events to form controls

	$addHandler(template, "change", SetFilenameChanged);

	_parentreportid.add_setAdditionalParams(FilterParentLookup);

	picklistCategoryComponent.add_onChange(SetReportRelated);
	picklistRelatedEntityComponent.add_onChange(SetReportRelated);
	picklistVisibilityComponent.add_onChange(SetReportRelated);

	// Show language code
	if (_bShowLanguage == 1)
	{
		$get('trLanguageCode').style.display = "";
	}

	// Attach save event to form
	// This provides for some custom validation that is special to this form
	crmFormCtrl.add_onSave(ValidateForm);

	// Provide for custom submit-handling
	// This is necessary so that we can try/catch submission and provide a
	// better error message when the user tries to upload a file that does
	// not exist
	$addHandler(oCrmFormSubmit, "submit", OverrideSubmit);

	// Load multi-picklist options xml
	picklistRelatedEntityComponent.set_sortDataOnLoad(true);
	picklistRelatedEntityComponent.LoadOptionsXml(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ReportUtility.RelatedEntityXml()) %>);
	picklistCategoryComponent.LoadOptionsXml(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ReportUtility.CategoriesXml()) %>);
	picklistVisibilityComponent.LoadOptionsXml(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ReportUtility.VisibilityXml()) %>);

	// Set multi-picklist control values
	if (!IsEmpty(_sReportCategory)) picklistCategoryComponent.set_dataValue(_sReportCategory);
	if (!IsEmpty(_sReportEntity)) picklistRelatedEntityComponent.set_dataValue(_sReportEntity);
	if (!IsEmpty(_sReportVisibility)) picklistVisibilityComponent.set_dataValue(_sReportVisibility);

	if(!IsNull(_bAssignedOwnerResponse) && _bAssignedOwnerResponse==1)
	{		
		$get('tab0').style.display="none";
		$get('tab1').style.display="inline";
	}
});

$addHandler(window, 'focus', function()
{
	try
	{
		//Fix for 312416
		var ownerTable = $get("ownerid_lookupTable");
		if(ownerTable != null)
		{
			ownerTable.querySelector("div").setAttribute("tabindex", "-1");
		}
		
		// created variables to avoid multiple same $get calls
		var labelSpan = $get('lblread');
		var ownerEdit = $get("ownerid_ledit");
		//check null condition for label to read.
		if(labelSpan!=null && ownerEdit !=null )
		{
			//get the label text to read 
			labelSpan.innerText= ownerEdit.previousSibling.innerHTML;
			//Fix for regression due to fix for 210226
			labelSpan.parentNode.setAttribute("aria-labelledby", "ownerid");
		}
		if(XUI.Html.GetComputedStyle($get('tab0'), 'display') !="none")
		{
			//Focus the Report Type dropdown.
			reportTypeCtrl.setFocus();
		}
		if (!IsNull(_bAssignedOwnerResponse) && _bAssignedOwnerResponse == 1)
		{
			Mscrm.FormControlInputBehavior.GetBehavior('ownerid').setFocus();
		}

	}//Enclose within try-catch block, because if the selector is disabled, it will give an script error
	catch(e) {}
});

// Overrides FORM.crm.htc Submit()
function OverrideSubmit()
{
	// If form is uploading a definition to a new/existing report
	if (GetSelectedReportType() == REPORT_TYPE_FILE && oCrmFormSubmit.Template.value.length > 0)
	{
		// Submit will throw an exception if the definition file provided does
		// not exist, so catch it and alert the user
		try
		{
			oCrmFormSubmit.submit();
		}
		catch (e)
		{
			var template = $get('Template', oCrmFormSubmit);
			alert(LOCID_INVALID_UPLOAD_FILE);
			template.focus();
			template.select();
			return false;
		}
	}
	else
	{
		return true; // No need for custom submit handling
	}
}
function MakeOrgAvailable()
{
	crmFormCtrl.SubmitCrmForm(<%= FormEventId.ReportMakeOrgAvailable.ToString("D") %>, true, true, false);
}

function MakeOrgUnavailable()
{
	crmFormCtrl.SubmitCrmForm(<%= FormEventId.ReportMakeOrgUnavailable.ToString("D") %>, true, true, false);
}

function IsFileNameRequired()
{
	// Users always need to provide a URL for Link reports, but only need to
	// specify a file to upload for other report types, if the report is new
	// or if the report has already been created under a different type
	return (_bIsNew ||
			Mscrm.FormControlInputBehavior.GetBehavior("reporttypecode").get_dataValue() == REPORT_TYPE_URL ||
			reportTypeCtrl.get_isDirty());
}
function ValidateForm(sender, args)
{
	var allowSubmission;
	allowSubmission = ValidateReportName();
	allowSubmission = allowSubmission && ValidateReportLocation();
	allowSubmission = allowSubmission && ValidateReportTypeCodeChange();
	allowSubmission = allowSubmission && ValidateReportTypeChange();

	// If new form, set the SetReportRelated attribute even if nothing has changed.
	// This is necessary to get the UI default values to be saved.
	if (_bIsNew)
		SetReportRelated();

		if (!allowSubmission)
		{
			args.preventDefault();
		}
	return allowSubmission;
}
function ValidateReportName(event)
{
	if (!Mscrm.ReportUtil.isValidReportName(oCrmFormSubmit.name.value))
	{
		alert(LOCID_INVALID_REPORT_NAME);

		// Show the tab that the name control is on, and then focus on the control
		crmFormCtrl.GetTab(oCrmFormSubmit.name, true);
		oCrmFormSubmit.name.focus();

		return false;
	}
	else
	{
		return true;
	}
}
function ValidateReportLocation()
{
	if ( IsFileNameRequired() )
	{
		if (GetSelectedReportType() == REPORT_TYPE_URL && Mscrm.FormControlInputBehavior.GetBehavior("bodyurl").get_dataValue() == null)
		{
			alert(LOCID_REPORT_PATH_NOT_SPECIFIED);
			oCrmFormSubmit.bodyurl.focus();
			return false;
		}
		else if (GetSelectedReportType() == REPORT_TYPE_FILE && oCrmFormSubmit.Template.value.length == 0)
		{
			alert(LOCID_REPORT_PATH_NOT_SPECIFIED);
			oCrmFormSubmit.Template.focus();
			return false;
		}
		else if (GetSelectedReportType() == REPORT_TYPE_WIZARD)
		{
			// Wizard reports can never be "New" and saved through the
			// form - they will always be "Update". So regardless of what has
			// been specified on the form, throw an alert telling the user to
			// create the report through the wizard. Then the wizard will refresh
			// the form and the user will be able to update properties of the report
			alert(LOCID_MUST_RUN_WIZARD);
			return false;
		}
	}

	return true;
}

//Validation during saving
//Check if the report type code is not changed from yhe initial one
function ValidateReportTypeCodeChange()
{
	if (!_bIsNew)
	{
		var iDefaultReportTypeCode = parseInt(oCrmFormSubmit.selectReportType.getAttribute('DefaultReportTypeCode'), 10);

		if(GetSelectedReportTypeCode() != REPORT_TYPE_CODE_NOTCHANGE && GetSelectedReportTypeCode() != iDefaultReportTypeCode)
		{
			alert(LOCID_TYPECODE_CHANGE);
			return false;
		}
	}
	return true;
}
				


function ValidateReportTypeChange()
{
	// This check only applies in the "Update" case
	if (!_bIsNew)
	{
		var iDefaultReportType = parseInt(reportTypeCtrl.get_defaultValue(), 10);

		if (reportTypeCtrl.get_isDirty())
		{
			// If the report type has changed during the edit session, we want
			// to prompt the user to make ensure that they really want to
			// change the type
			var sConfirmMessage;
			switch (iDefaultReportType)
			{
				case REPORT_TYPE_WIZARD:
					sConfirmMessage = LOCID_TYPE_CHANGE_FROM_WIZARD1 + "\n" + LOCID_TYPE_CHANGE_DOWNLOAD;
					break;
				case REPORT_TYPE_FILE:
					sConfirmMessage = LOCID_TYPE_CHANGE_FROM_FILE1 + "\n" + LOCID_TYPE_CHANGE_DOWNLOAD + "\n" + LOCID_TYPE_CHANGE_FROM_FILE3;
					break;
				case REPORT_TYPE_URL:
					sConfirmMessage = LOCID_TYPE_CHANGE_FROM_LINK;
					break;
			}
			return confirm(sConfirmMessage);
		}
		else if (iDefaultReportType == REPORT_TYPE_URL && Mscrm.FormControlInputBehavior.GetBehavior("bodyurl").get_isDirty())
		{
			return confirm(LOCID_TYPE_CHANGE_FROM_LINK);
		}
		else if (iDefaultReportType == REPORT_TYPE_FILE && Mscrm.FormControlInputBehavior.GetBehavior("filename").get_isDirty())
		{
			return confirm(LOCID_TYPE_CHANGE_FROM_FILE1 + "\n" + LOCID_TYPE_CHANGE_DOWNLOAD + "\n" + LOCID_TYPE_CHANGE_FROM_FILE3);
		}

		// Return true in the default case
		return true;
	}
    return true;
}

function SetFilenameChanged()
{
	UpdateReportName();

	// change the hidden input so that the form know the field is dirty
	if ( !IsNull(oCrmFormSubmit.Template.value) )
	{
		Mscrm.FormControlInputBehavior.GetBehavior("filename").set_dataValue(oCrmFormSubmit.Template.value);
		SetParentReportField();
	}
}
function SetParentReportField()
{
	// Auto-populate the parent report field
	var oCommand = new RemoteCommand("Reports", "RetrieveReportParent");
	if (oCommand != null)
	{
		oCommand.SetParameter("filePath", Mscrm.FormControlInputBehavior.GetBehavior("filename").get_dataValue());
		var oResult = oCommand.Execute();

		if (oResult.Success && !IsNull(oResult.ReturnValue) && oResult.ReturnValue.length > 0)
		{
			var oXmlDoc = XUI.Xml.LoadXml(oResult.ReturnValue);
			var numReports = parseInt(oXmlDoc.documentElement.attributes.getNamedItem("numreports").value, 10);
			if (numReports == 0)
			{
				// Disable parent report lookup
				_parentreportid.set_disabled(false);
				var items = new Array();
				_parentreportid.set_dataValue(items);
				_parentreportid.set_disabled(true);
			}
			else
			{
				// Enable parent report lookup
				_parentreportid.set_disabled(false);
				var items = new Array();
				var oNodeList = oXmlDoc.documentElement.childNodes;

				// If exactly one item matches, set lookup to that item.  Otherwise, leave it
				// as an empty array.
				if (oNodeList.length == 1)
				{
					var oNode = oNodeList.item(0);
					var sId = oNode.attributes.getNamedItem("reportid").value;
					var sTypeName = oNode.attributes.getNamedItem("typename").value;
					var sName = oNode.attributes.getNamedItem("name").value;
					var item = new LookupControlItem(sId, null, sName, null, null, null, sTypeName)
					// var item = new Object();
					// item.html = "<nobr>" + CrmEncodeDecode.CrmHtmlEncode(item.name) + "</nobr>";
					items.push(item);
				}
				_parentreportid.set_dataValue(items);
			}
		}
	}
}
function UpdateReportName()
{
	var autoReportName = StripFilepathToReportName(oCrmFormSubmit.Template.value);
	var oldAutoReportName = StripFilepathToReportName(Mscrm.FormControlInputBehavior.GetBehavior("filename").get_dataValue());
	// if current report name was not automatically populated or this is an update form
	if (!_bIsNew || oCrmFormSubmit.name.value != oldAutoReportName)
		return;

	oCrmFormSubmit.name.value = autoReportName;
}
function FilterParentLookup(sender, args)
{
	// Set parameters on the parent report lookup so it returns only reports which
	// reference the newly uploaded report.
	_parentreportid.AddParam("reportname", StripFilepathToReportName(Mscrm.FormControlInputBehavior.GetBehavior("filename").get_dataValue()));
}
function StripFilepathToReportName(path)
{
	var reportName = "";
	if (!IsEmpty(path)) {
	var pos = path.lastIndexOf('\\');
	reportName = path.substr(pos + 1);
	pos = reportName.lastIndexOf('.');
	if (pos > -1)
		reportName = reportName.substr(0, pos);
	}
	return reportName;
}

function SetReportRelated()
{
	var reportRelatedControl = Mscrm.FormControlInputBehavior.GetBehavior("reportrelated");
	reportRelatedControl.set_dataValue("<reportrelated>"
	  + "<categories>" + picklistCategoryComponent.get_dataValue() + "</categories>"
	  + "<entities>" + picklistRelatedEntityComponent.get_dataValue() + "</entities>"
	  + "<visibility>" + picklistVisibilityComponent.get_dataValue() + "</visibility>"
	  + "</reportrelated>");
	reportRelatedControl.set_doNotSubmit(false)
}

function UpdateReportTypeUI(bSetTypeCode)
{
	// Disable anything that could be changed if the type is changed
	// The appropriate controls will be enabled later
	var divReportWizardType = $get('divReportWizardType');
	var divExistingFileType = $get('divExistingFileType');
	var divWebPageLinkType = $get('divWebPageLinkType')
	divReportWizardType.style.display = "none";
	divExistingFileType.style.display = "none";
	divWebPageLinkType.style.display = "none";
	oCrmFormSubmit.Template.disabled = true;
	oCrmFormSubmit.bodyurl.disabled = true;

	// Save the report type code
	if (bSetTypeCode)
		Mscrm.FormControlInputBehavior.GetBehavior("reporttypecode").set_dataValue(oCrmFormSubmit.selectReportType.value);

	switch (GetSelectedReportType())
	{
		case REPORT_TYPE_WIZARD:
			divReportWizardType.style.display = "block";
			break;
		case REPORT_TYPE_FILE:
			divExistingFileType.style.display = "block";
			if (_bEnableUpload)
				oCrmFormSubmit.Template.disabled = false;
			break;
		case REPORT_TYPE_URL:
			divWebPageLinkType.style.display = "block";
			if (_bEnableUpload)
				oCrmFormSubmit.bodyurl.disabled = false;
			break;
	}

	// Update required-ness of "Report type" section based on new type
	SetReportTypeRequired(IsFileNameRequired());
}

function GetSelectedReportType()
{
	return parseInt(oCrmFormSubmit.selectReportType.value, 10);
}

//return the saving report's type code
//It can be SRS, File, Link
function GetSelectedReportTypeCode()
{
	if(GetSelectedReportType() == REPORT_TYPE_URL)
	{
		return REPORT_TYPE_CODE_LINK;
	}

	if(GetSelectedReportType() == REPORT_TYPE_WIZARD)
	{
		return REPORT_TYPE_CODE_SRS;
	}

	// We can now have SRS report of File report
	var sFileName = oCrmFormSubmit.Template.value;
	if(sFileName.length > 0)
	{
		if(sFileName.toUpperCase().endsWith('RDL'))
		{
			return REPORT_TYPE_CODE_SRS;
		}
		return REPORT_TYPE_CODE_FILE;
	}
	return REPORT_TYPE_CODE_NOTCHANGE;
}

function SetReportTypeRequired(bVal)
{
	SetFieldRequiredOrRecommended($get('selectReportType_c'), (bVal) ? Mscrm.FormFieldType.FIELD_REQUIRED : Mscrm.FormFieldType.FIELD_NOT_REQUIRED, LOCID_FORM_REQUIRED_ALT);
	document.getElementById("selectReportTypeImage").style.display = (bVal) ? "inline" : "none";
}

function LaunchReportWizard()
{
	// Grab the existing report id from the form
	var sReportId = Trim(oCrmFormSubmit.crmFormSubmitId.value);
	if (sReportId.length == 0)
		sReportId = null;

	// Launch the wizard
	Mscrm.ReportUtil.runReportWizard(sReportId, IsOrgReportTypeOptionSelected(),newReportCallBackFunction);
}

function newReportCallBackFunction(sNewReportId)
{
	// If a report was saved in the wizard, refresh the form
	if (!IsNull(sNewReportId))
	{
		// Refresh the grid
		// This is necessary in case the user doesn't change anything on the
		// form after the refresh, and then they close the form window. The
		// grid won't refresh on its own in that case.
		try
		{
			if (window.opener !== null) { window.opener.postMessage(true, '*'); };
			window.opener.auto(Report);
		}
		catch (e) {}

		//Refresh the page, after the wizard is closed after saving the report
		//Using _bSaving, so that it doesn't go and check for disrty form
		$find('crmFormSubmit').set_saving(true);
		// Take the current Url, but add on the id of the report created
		// through the wizard
		var oUrl = Mscrm.CrmUri.create(location.href);
		oUrl.get_query()["id"] = sNewReportId;
		oUrl.get_query()["fromwizard"] = "true";
		
		// Refresh the page
		location.href = oUrl.toString();
	}
}

function IsOrgReportTypeOptionSelected()
{
	var isOrgCheckBox = document.getElementById("rad_ispersonal1");
	if(isOrgCheckBox.checked)
	{
		return true;
	}
	return false;
}


function PublishExternal()
{
	var oCommand = new RemoteCommand("Reports", "PublishExternal");
	oCommand.SetParameter("reportId", oCrmFormSubmit.crmFormSubmitId.value);
	oCommand.Execute();
}

</script>
<style>
	LI.ms-crm-Tab
	{
		height:16px;
	}
</style>
</head>
<body style="height:100%">

	<%
	if (IsFromSolutionExplorer)
	{
	%>
	<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
	<div id="bodycontainer" class="ms-crm-FormContainer" style="position:fixed;top:48px;height:calc(100% - 48px);">
	<%
	}
	else
	{
	%>
	<div id="bodycontainer" class="ms-crm-FormContainer">
	<%
	}
	%>

	<frm:MultiplePartForm id="crmForm" runat="server">
		<sdk:HiddenInputControl id="reporttypecode" runat="server"/>
		<sdk:HiddenInputControl id="reportrelated" runat="server"/>
		<sdk:HiddenInputControl id="filename" runat="server"/>
		<div>
			<div style="height:98px">
				<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
			</div>
			<div style="padding: 10px; padding-bottom: 0px;">
				<cnt:AppNotifications id="notifications" runat="server"/>
			</div>
			<div>
				<div class="ms-crm-TabBar-Cell" style="padding:10px;padding-bottom:0px;" >
					<cnt:AppTabBar id="crmTabBar" runat="server"/>
				</div>
				<div style="vertical-align:top" id="tab0cell">
						<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="height:auto;width:auto">
							<table width="100%" height="auto" cellspacing="3" cellpadding="0" style="table-layout: fixed;">
								<col width="115"><col>
								<tr height="20">
									<td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><nobr><loc:Text ResourceId="Web.Reports.ReportSource" runat="server"/></nobr></td>
								</tr>
								<tr>
									<td id="selectReportType_c" class="ms-crm-Field-Required"><label for="selectReportType">
										<loc:Text ResourceId="Web.Reports.ReportType" runat="server"/><img id="selectReportTypeImage" alt="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif" <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>style="<%= Microsoft.Crm.Application.Utility.WebUtility.FlipImage("h") %>"<% } %>/>
									</label></td>
									<td id="selectReportType_d">
										<ui:Select id="selectReportType" runat="server" OnChange="UpdateReportTypeUI(true)"  TabIndex="1"/>
									</td>
								</tr>
								<tr>
									<td />
									<td>
										<div id="divReportWizardType" class="ms-crm-ReportProperty-TypeSection">
											<% if(isFetchDataConnectorInstalled) { %>
											<loc:Text ResourceId="Web.Reports.ReportWizard.Description" runat="server" /><br />
											<% } else { %>
											<cnt:AppNotifications id="fetchDataConnectorNotification" AutoRegisterClientComponent="false" runat="server" />
											<% } %>
											<ui:Button ID="reportWizardButton" ResourceId="Web.Reports.ReportWizard.Button" OnClick="LaunchReportWizard();" runat="server" TabIndex="2"></ui:Button>
										</div>
										<div id="divExistingFileType" class="ms-crm-ReportProperty-TypeSection">
											<label for="Template"><loc:Text ResourceId="Web.Reports.File.Description" runat="server" /></label><br />
											<input id="Template" type="file" name="Template" runat="server"  tabindex="3" style="width: auto"/>
										</div>
										<div id="divWebPageLinkType" class="ms-crm-ReportProperty-TypeSection">
											<label for="bodyurl"><loc:Text ResourceId="Web.Reports.Link.Description" runat="server" /></label><br />
											<sdk:UrlControl id="bodyurl" runat="server" TabIndex="4"/>
										</div>
									</td>
								</tr>
								<tr style="height:30px;">
									<td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><nobr><loc:Text ResourceId="Web.Reports.Details" runat="server"/></nobr></td>
								</tr>
								<tr valign="top">
									<frm:FormCell id="nameCell" ShowLabel="true" LabelResourceId="Web.Reports.Name" runat="server"><sdk:TextBoxControl id="name" runat="server"  TabIndex="5"/></frm:FormCell>
								</tr>
								<tr height="50" valign="top">
									<frm:FormCell id="descriptionCell" ShowLabel="true" LabelResourceId="Web.Reports.Description" runat="server"><sdk:TextAreaControl id="description" Height="45px" runat="server" TabIndex="6" /></frm:FormCell>
								</tr>

								<tr style="height:30px;">
									<td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><nobr><loc:Text ResourceId="Web.Reports.ParentReport.Label" runat="server"/></nobr></td>
								</tr>
								<tr valign="top">
									<frm:FormCell id="parentReportIdCell" ShowLabel="true" LabelResourceId="Web.Reports.ParentReport.Label" runat="server"><sdk:LookupControl id="parentreportid" DefaultViewId="9216876B-518E-4331-9A17-09EAB22321DA" AccessibilityLabelResourceId="Web.Reports.ParentReport.Label"  Lookupbrowse="false" LookupStyle="single" runat="server" TabIndex="7"/></frm:FormCell>
								</tr>

								<tr style="height:30px;">
									<td colspan="2" class="ms-crm-Form-Section ms-crm-Form-SectionBar"><nobr><loc:Text ResourceId="Web.Reports.Categorization" runat="server"/></nobr></td>
								</tr>
								<tr valign="top">
									<frm:FormCell id="picklistCategoryCell" ShowLabel="true" LabelResourceId="Web.Reports.Category" runat="server">
										<span id="picklistCategory"><ui:MultiPicklist runat="server" id="picklistCategorySpan" TitleId="Web.Reports.Category" TabIndex="8"></ui:MultiPicklist></span>
									</frm:FormCell>
								</tr>
								<tr valign="top">
									<frm:FormCell id="picklistRelatedEntityCell" ShowLabel="true" LabelResourceId="Web.Reports.RelatedEntity" runat="server">
										<span id="picklistRelatedEntity"><ui:MultiPicklist runat="server" id="picklistRelatedEntitySpan" TitleId="Web.Reports.RelatedEntity" TabIndex="9"></ui:MultiPicklist></span>
									</frm:FormCell>
								</tr>
								<tr valign="top">
									<frm:FormCell id="picklistVisibilityCell" ShowLabel="true" LabelResourceId="Web.Reports.Showin" runat="server">
										<span id="picklistVisibility"><ui:MultiPicklist runat="server" id="picklistVisibilitySpan" TitleId="Web.Reports.Showin" TabIndex="10"></ui:MultiPicklist></span>
									</frm:FormCell>
								</tr>
								<tr valign="top" id="trLanguageCode" style="display:none">
									<frm:FormCell id="languageCodeCell" ShowLabel="true" LabelResourceId="Web.Reports.Languages" runat="server">
										<sdk:LanguagePicker id="languagecode" runat="server" IncludeAllOption="true" TabIndex="11"/>
									</frm:FormCell>
								</tr>

						</table>
						</div>
						<div id="tab1" class="ms-crm-Tab ms-crm-TabContainer" style="height:auto;width:auto;display:none;">
						<table width="100%" height="auto" cellspacing="2" cellpadding="0" style="table-layout: fixed;">
								<col width="115"><col><col width="135" class="FormSection_WriteColumnHeaders_col"><col>
								<tr valign="top">
									<frm:FormCell id="ownerCell" ShowLabel="true" LabelResourceId="Web.Reports.Owner" runat="server"><sdk:LookupControl id="ownerid" AccessbilityLabelResourceId="Web.Reports.Owner" runat="server" /></frm:FormCell>
								</tr>
								<tr valign="top">
									<frm:FormCell id="isPersonalCell" ShowLabel="true" LabelResourceId="Web.Reports.IsPersonal" ColumnSpan="2" runat="server"><sdk:RadioControl id="ispersonal" runat="server" /></frm:FormCell>
								</tr>
								<tr valign="top">
									<frm:FormCell id="createdByCell" ShowLabel="true" LabelResourceId="Web.Reports.CreatedBy" runat="server"><sdk:LookupControl id="createdby" AccessbilityLabelResourceId="Web.Reports.Owner" runat="server" /></frm:FormCell>
									<frm:FormCell id="createdOnCell" ShowLabel="true" LabelResourceId="Web.Reports.CreatedOn" runat="server"><sdk:DateTimeControl id="createdon" runat="server" /></frm:FormCell>
								</tr>
								<tr valign="top">
									<frm:FormCell id="modifiedByCell" ShowLabel="true" LabelResourceId="Web.Reports.LastModifiedBy" runat="server"><sdk:LookupControl id="modifiedby" AccessbilityLabelResourceId="Web.Reports.LastModifiedBy"  runat="server" /></frm:FormCell>
									<frm:FormCell id="modifiedOnCell" ShowLabel="true" LabelResourceId="Web.Reports.LastModifiedOn" runat="server"><sdk:DateTimeControl id="modifiedon" runat="server" /></frm:FormCell>
								</tr>
						</table>
						</div>
						<script>
						    function SetTabOffSet(offSet) {
						        $get('tab0').style.top = offSet;
						        $get('tab1').style.top = offSet;
						    }
						    //setting the offset here, works in all Browser except IE8
						    SetTabOffSet($get('tab0cell').offsetTop + 'px');
						</script>
					</div>
			</div>
			<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
				<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
			</div>

		</div>
	</frm:MultiplePartForm>
</div>
<iframe id="frmRptDownload" name="frmRptDownload" style="display:none"></iframe>
</body>
</html>

