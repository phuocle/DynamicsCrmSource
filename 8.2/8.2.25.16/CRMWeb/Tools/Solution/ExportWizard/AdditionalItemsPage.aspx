<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.AdditionalItemsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

$addHandler(window, "load", PageOnLoad);
function PageOnLoad()
{
LoadPageProperties();
}

function GetNextPageDefinition()
{
var solutionId = document.getElementById("appSolutionId").value;
var uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/PackageSelectionPage.aspx?appSolutionId=' + solutionId);
return new NextPageDefinition(uri);
}

function moveNext()
{
SavePageProperties();
<%if(!IsDefaultSolution()){%>
WizardNavigate(_WizardNavigateEnum.NEXT);
<%}else{%>
ExportSolution(false);
<%}%>
}

function LoadPageProperties()
{
if(WizardHasProperty("exportAutoNumber"))
{
document.getElementById("exportAutoNumber").checked = WizardGetProperty("exportAutoNumber");
}

if(WizardHasProperty("exportCalendar"))
{
document.getElementById("exportCalendar").checked = WizardGetProperty("exportCalendar");
}

if(WizardHasProperty("exportCustomization"))
{
document.getElementById("exportCustomization").checked = WizardGetProperty("exportCustomization");
}

if(WizardHasProperty("exportEmailTracking"))
{
document.getElementById("exportEmailTracking").checked = WizardGetProperty("exportEmailTracking");
}

if(WizardHasProperty("exportGeneral"))
{
document.getElementById("exportGeneral").checked = WizardGetProperty("exportGeneral");
}
if(WizardHasProperty("exportMarketing"))
{
document.getElementById("exportMarketing").checked = WizardGetProperty("exportMarketing");
}
if(WizardHasProperty("exportOutlookSynchronization"))
{
document.getElementById("exportOutlookSynchronization").checked = WizardGetProperty("exportOutlookSynchronization");
}
if(WizardHasProperty("exportRelationshipRole"))
{
document.getElementById("exportRelationshipRole").checked = WizardGetProperty("exportRelationshipRole");
}
if(WizardHasProperty("exportIsvConfig"))
{
document.getElementById("exportIsvConfig").checked = WizardGetProperty("exportIsvConfig");
}
if (WizardHasProperty("exportSales"))
{
document.getElementById("exportSales").checked = WizardGetProperty("exportSales");
}
if (WizardHasProperty("exportExternalApplications")) {
document.getElementById("exportExternalApplications").checked = WizardGetProperty("exportExternalApplications");
}
}

function SavePageProperties()
{
WizardSetProperty("exportAutoNumber", document.getElementById("exportAutoNumber").checked);
WizardSetProperty("exportCalendar", document.getElementById("exportCalendar").checked);
WizardSetProperty("exportCustomization", document.getElementById("exportCustomization").checked);
WizardSetProperty("exportEmailTracking", document.getElementById("exportEmailTracking").checked);
WizardSetProperty("exportGeneral", document.getElementById("exportGeneral").checked);
WizardSetProperty("exportMarketing", document.getElementById("exportMarketing").checked);
WizardSetProperty("exportOutlookSynchronization", document.getElementById("exportOutlookSynchronization").checked);
WizardSetProperty("exportRelationshipRole", document.getElementById("exportRelationshipRole").checked);
WizardSetProperty("exportIsvConfig", document.getElementById("exportIsvConfig").checked);
WizardSetProperty("exportSales", document.getElementById("exportSales").checked);
WizardSetProperty("exportExternalApplications", document.getElementById("exportExternalApplications").checked);
WizardSetProperty("optionsXml", GetOptionsXml());
}

function ExportSolution(bProtected)
{
WizardSetDialogReturnValue(new ReturnExportResult(true, WizardGetProperty("exportAsProtected"), WizardGetProperty("optionsXml")));
WizardNavigate(_WizardNavigateEnum.CLOSE);
}

function GetOptionsXml()
{
var oDataXml = createXmlDoc("settings");
addTextXmlNode(oDataXml, "exportAutoNumber", document.getElementById("exportAutoNumber").checked);
addTextXmlNode(oDataXml, "exportCalendar", document.getElementById("exportCalendar").checked);
addTextXmlNode(oDataXml, "exportCustomization", document.getElementById("exportCustomization").checked);
addTextXmlNode(oDataXml, "exportEmailTracking", document.getElementById("exportEmailTracking").checked);
addTextXmlNode(oDataXml, "exportGeneral", document.getElementById("exportGeneral").checked);
addTextXmlNode(oDataXml, "exportMarketing", document.getElementById("exportMarketing").checked);
addTextXmlNode(oDataXml, "exportOutlookSynchronization", document.getElementById("exportOutlookSynchronization").checked);
addTextXmlNode(oDataXml, "exportRelationshipRole", document.getElementById("exportRelationshipRole").checked);
addTextXmlNode(oDataXml, "exportSales", document.getElementById("exportSales").checked);
addTextXmlNode(oDataXml, "exportExternalApplications", document.getElementById("exportExternalApplications").checked);
addTextXmlNode(oDataXml, "exportIsvConfig", document.getElementById("exportIsvConfig").checked);
return convertXmlDocToString(oDataXml);
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="ms-crm-layouttable" cellpadding="0"  cellspacing="0">
<col width=35px><col width="99%">
<tr>
<td colspan=2 >
<h4 class="ms-crm-Form">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Section.Title' runat='server'/>
</h4>
</td>
</tr>
<tr height=10>
<td></td>
</tr>
<tr>
<td colspan=2  class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<h4 class="ms-crm-Form">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Section.Setting.Text' runat='server'/>
</h4>
</td>
</tr>
<tr height=5>
<td></td>
</tr>
<tr >
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportAutoNumber" name="exportAutoNumber" editable  />
</td>
<td>
<label for="exportAutoNumber">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.AutoNumber.Text' runat='server'/>
</label>
</td>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportCalendar" name="exportCalendar" editable  />
</td>
<td>
<label for="exportCalendar">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.Calendar.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportCustomization" name="exportCustomization" editable  />
</td>
<td>
<label for="exportCustomization">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.Customization.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportEmailTracking" name="exportEmailTracking" editable  />
</td>
<td>
<label for="exportEmailTracking">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.Emailtracking.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportGeneral" name="exportGeneral" editable  />
</td>
<td>
<label for="exportGeneral">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.General.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportMarketing" name="exportMarketing" editable  />
</td>
<td>
<label for="exportMarketing">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.Marketing.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportOutlookSynchronization" name="exportOutlookSynchronization" editable  />
</td>
<td>
<label for="exportOutlookSynchronization">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.OutlookSynchronization.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportRelationshipRole" name="exportRelationshipRole" editable  />
</td>
<td>
<label for="exportRelationshipRole">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.RelationshipRoles.Text' runat='server'/>
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportIsvConfig" name="exportIsvConfig" editable  />
</td>
<td>
<label for="exportIsvConfig">
<loc:Text ResourceId='EntityGridDataProvider_ISVConfig' runat='server' />
</label>
</td>
</tr>
<tr>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportSales" name="exportSales" editable  />
</td>
<td>
<label for="exportSales">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.Sales.Text' runat='server' />
</label>
</td>
</tr>
<% if(Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.OnePartyModel, Microsoft.Crm.Application.Security.UserInformation.Current)){ %>
<tr>
<% } else { %>
<tr style="display:none;">
<% } %>
<td>
<input class="ms-crm-CheckBox" type="checkbox" tabindex="0" id="exportExternalApplications" name="exportExternalApplications" editable  />
</td>
<td>
<label for="exportExternalApplications">
<loc:Text ResourceId='ExportSolutionWizard.AdditionalItems.Option.ExternalApplications.Text' runat='server' />
</label>
</td>
</tr>
</table>
<input type="hidden" name="appSolutionId" id="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(solutionId) %>"/>
</frm:WizardForm>
</body>
</html>
