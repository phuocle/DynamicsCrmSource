<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.ModeAndLanguagePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

var oaReportPermissionCache;
var _reportId = null;
var _overwriteExisting = null;





function GetNextPageDefinition()
{
return new NextPageDefinition(getNextPageUrl());
}




function getNextPageUrl()
{

var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/ReportMetadataPage.aspx");


oUrl.get_query()["lcid"] = WizardGetProperty("Language");


if (WizardHasProperty("ReportId"))
{
oUrl.get_query()["id"] = WizardGetProperty("ReportId");
}

return oUrl;
}





function hasUserWritePermission(sReportId)
{
if (IsNull(oaReportPermissionCache[sReportId]))
{


var oCommand = new RemoteCommand("Reports", "HasUserWritePermission");
oCommand.SetParameter("id", sReportId);
var oResult = oCommand.Execute();


var bHasUserWritePermission = (oResult.Success == ERROR_NONE) ? (oResult.ReturnValue) : null;







if (IsNull(bHasUserWritePermission))
{
return true;
}


oaReportPermissionCache[sReportId] = bHasUserWritePermission;
}

return oaReportPermissionCache[sReportId];
}




function initializePage()
{

var iWizardMode = WizardGetProperty("WizardMode");
if (IsNull(iWizardMode))
{
iWizardMode = IsNull(WizardGetProperty("ReportId")) ? EDIT_MODE_CREATE : EDIT_MODE_UPDATE;
}


if (iWizardMode == EDIT_MODE_UPDATE || (iWizardMode == EDIT_MODE_CREATE && WizardHasProperty("ReportId")))
{
$get("wizardModeUpdate").checked = true;




if (WizardHasProperty("ExistingReportLookup"))
{
var existingReportLookup = WizardGetProperty("ExistingReportLookup");
_reportId.set_dataValue(new Array(new LookupControlItem(existingReportLookup.id, existingReportLookup.type, existingReportLookup.name)));
}



if (iWizardMode == EDIT_MODE_UPDATE)
{
_overwriteExisting.set_dataValue(true);
}
}
else
{
_reportId.Clear();
}


updateExistingReportUIDisabled()


if (WizardHasProperty("Language"))
{
Mscrm.FormControlInputBehavior.GetBehavior('selectReportLanguage').set_dataValue(WizardGetProperty("Language"));
}



if (!_bMultipleLanguagesProvisioned)
{
$get("languageTable").style.display = "none";
}
}




function modeAndLanguagePage_onload()
{
_overwriteExisting = Mscrm.FormControlInputBehavior.GetBehavior('overwriteExisting');

oaReportPermissionCache = new Array();




_reportId = Mscrm.FormControlInputBehavior.GetBehavior('reportId');
_reportId.add_change(updateOverwriteExistingReportDisabled);

initializePage();
}




function moveNext()
{

WizardSetProperty("WizardMode", ($get("wizardModeCreate").checked || _overwriteExisting.get_disabled() || !_overwriteExisting.get_dataValue()) ? EDIT_MODE_CREATE : EDIT_MODE_UPDATE);


if ($get("wizardModeUpdate").checked)
{
var aoItems = _reportId.get_dataValue();
if (aoItems != null)
{
var lui = aoItems[0];
WizardSetProperty("ReportId", lui.id);
WizardSetProperty("ExistingReportLookup", lui);
}
else
{
alert(LOCID_MISSING_EXISTING_REPORT);
return;
}
}
else
{
WizardSetProperty("ReportId", null);
WizardSetProperty("ExistingReportLookup", null);
}


WizardSetProperty("Language", Mscrm.FormControlInputBehavior.GetBehavior('selectReportLanguage').get_dataValue())

WizardNavigate(_WizardNavigateEnum.NEXT);
}






function updateExistingReportUIDisabled()
{
var bExistingReportUIDisabled = $get("wizardModeCreate").checked;
_reportId.set_disabled(bExistingReportUIDisabled);

if (bExistingReportUIDisabled)
{
_overwriteExisting.set_disabled(bExistingReportUIDisabled);
}
else
{
updateOverwriteExistingReportDisabled()
}
}






function updateOverwriteExistingReportDisabled()
{
var aoItems = _reportId.get_dataValue();
if (aoItems != null)
{






_overwriteExisting.set_disabled(!hasUserWritePermission(aoItems[0].id));
}
else
{
_overwriteExisting.set_disabled(true);
}



if (_overwriteExisting.get_disabled())
{
_overwriteExisting.set_dataValue(false);
}
}


Sys.Application.add_load(modeAndLanguagePage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table cellpadding="5" cellspacing="0" width="100%" style="padding: 5px; table-layout: fixed;">
<col width="40" />
<col width="40" />
<col />
<tr>
<td colspan="3" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ModeAndLanguagePage.ModeSection" runat="server" />
</td>
</tr>
<tr>
<td>
<input type="radio" class="ms-crm-RadioButton" name="wizardMode" id="wizardModeCreate" checked="checked" onclick="updateExistingReportUIDisabled()" />
</td>
<td colspan="2">
<label for="wizardModeCreate">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ModeAndLanguagePage.CreateMode" runat="server" />
</label>
</td>
</tr>
<tr>
<td>
<input type="radio" class="ms-crm-RadioButton" name="wizardMode" id="wizardModeUpdate" onclick="updateExistingReportUIDisabled()" />
</td>
<td colspan="2">
<label for="wizardModeUpdate">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ModeAndLanguagePage.UpdateMode" runat="server" />
</label>
</td>
</tr>
<tr>
<td />
<td colspan="2">
<div style="width: 250px;">
<sdk:LookupControl id="reportId" DefaultViewId="AF73867E-4EF3-4c06-B686-32512ACDCA62" LookupBrowse="false" LookupStyle="single" Disabled="true" runat="server" />
</div>
</td>
</tr>
<tr>
<td />
<td>
<ui:CheckBox ID="overwriteExisting" Disabled="true" runat="server" />
</td>
<td>
<label for="overwriteExisting">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ModeAndLanguagePage.OverwriteExisting" runat="server" />
</label>
</td>
</tr>
</table>

<table cellpadding="5" cellspacing="0" width="100%" style="padding: 5px; table-layout: fixed;" id="languageTable">
<col width="160" />
<col width="200" />
<col />
<tr>
<td colspan="3" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<loc:Text ResourceId="CustomReporting.AdHocWizard.ModeAndLanguagePage.LanguageSection" runat="server" />
</td>
</tr>
<tr>
<frm:FormCell runat="server" id="reportLanguageCell" ShowLabel="True"><sdk:LanguagePicker runat="server" ID="selectReportLanguage" /></frm:FormCell>
<td />
</tr>
</table>
</frm:WizardForm>
</body>
</html>
