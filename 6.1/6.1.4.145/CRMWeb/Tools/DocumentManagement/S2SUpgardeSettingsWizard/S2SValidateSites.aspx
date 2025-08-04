<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SValidateSites" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
Sys.Application.add_load(windowOnLoad);

function moveBack() {
WizardNavigate(_WizardNavigateEnum.BACK);
}

function GetNextPageDefinition() {
var oUrl = Mscrm.CrmUri.create("/Tools/DocumentManagement/S2SUpgardeSettingsWizard/S2SUpgradeFinalize.aspx");
return new NextPageDefinition(oUrl);
}

function moveNext() {
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function OnUserCancel() {
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function windowOnLoad() {
$get('buttonNext').disbled = true;
$get('buttonCancel').onclick = OnUserCancel;
$get('buttonBack').onclick = moveBack;

if ($get('absoluteURLWarningTable') == null)
Mscrm.S2SUpgradePageHelper.retrieveSites();
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table id="SiteValidationStatus" width="100%" runat="server" cellpadding="0" cellspacing="0" >
<tr>
<td class = "mscrm-validationPageHeader"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Summary.Header" runat="server"/></b></td>
</tr>
<tr id="NoSitesFound" style="display: none">
<td class = "mscrm-noSitesMessage mscrm-text-regular"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.NoSitesFound" runat="server"/></td>
</tr>
</table>
<table id="absoluteURLWarningTable" width="100%" runat="server" cellpadding="0" cellspacing="0" >
<tr>
<td>
<div class ="mscrm-validationPageHeader"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning.Header" runat="server"/></b></div>
<div class ="mscrm-noSitesMessage mscrm-text-regular" style="margin-top:10px;"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning1" runat="server"/></div>
<div id="absoluteURLWarningLabel" class="mscrm-noSitesMessage mscrm-text-regular" style="margin-top:20px;" runat="server"><ui:LabelUI  runat="server"/></div>
<div class ="mscrm-noSitesMessage mscrm-text-regular" style="margin-top:20px;"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning3" runat="server"/></div>
</td>
</tr>
</table>
<table id="SiteValidationCounts" width="50%" runat="server" style="display:none; margin-top:13px;" cellpadding="0" cellspacing="0">
<colgroup>
<col width="40%" />
<col />
</colgroup>
<tr>
<td class="mscrm-text-semiBold mscrm-text-dark"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Summary.ToValidate" runat="server"/></td>
<td class="alignTextLeadingEdge"><label id="ToValidate"></label></td>
</tr>
<tr>
<td class="mscrm-text-semiBold mscrm-text-dark"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Summary.TotalValid" runat="server"/></td>
<td class="alignTextLeadingEdge"><label id="TotalValid"></label></td>
</tr>
<tr>
<td class="mscrm-text-semiBold mscrm-text-dark"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Summary.TotalInvalid" runat="server"/></td>
<td class="alignTextLeadingEdge"><label id="TotalInvalid"></label></td>
</tr>
</table>
<table style="height:5%; display:none; margin-top:19px;" id="StatusReportSectionHeader" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="10%"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Header" runat="server"/></b></td>
</tr>
</table>

<table id="StatusReportSectionData" class="mscrm-sites-TableSites" border="0" cellpadding="0" cellspacing="0" style="display:none; margin-top:15px;">
<colgroup>
<col width="30%"/>
<col width="50%"/>
<col width="20%"/>
</colgroup>
<tr>
<td class="mscrm-validateSite-HeaderColumn mscrm-text-regular mscrm-text-light"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Name' runat='server'/>" >
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Name" runat="server"/>
</td>
<td class="mscrm-validateSite-HeaderColumn mscrm-text-regular mscrm-text-light" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.AbsoluteURL' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.AbsoluteURL" runat="server"/>
</td>
<td class="mscrm-validateSite-HeaderColumn mscrm-text-regular mscrm-text-light" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Status' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Status" runat="server"/>
</td>
</tr>
<tr>
<td colspan="4" width="100%">
<div id="statusDiv" class="mscrm-siteValidation-OverflowDiv" >
<table width="100%" id="StatusReportTable" class="mscrm-docmgmt-TableGeneric" cellpadding="0" cellspacing="0">
<colgroup>
<col width="30%"/>
<col width="50%"/>
<col width="20%"/>
</colgroup>
</table>
</div>
</td>
</tr>
</table>
<table style=" display:none; margin-bottom:30px;margin-top:10px;" id="InvalidSitesMessage" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="100%">
<div><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.InvalidSites.Message1" runat="server"/></div>
<div style="margin-top:10px;"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.InvalidSites.Message2" runat="server"/></div>
</td>
</tr>
</table>
<table style=" display:none;margin-bottom:30px; margin-top:10px;" id="ValidSitesMessage" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="100%">
<div class="mscrm-text-semiBold" style="display:inline"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.ValidSites.Message.Header" runat="server"/></b></div>
<div class="mscrm-text-regular" style="display:inline"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.ValidSites.Message1" runat="server"/></div>
<div class="mscrm-text-regular mscrm-Disclaimer" style="margin-top:10px;"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.ValidSites.Message2" runat="server" class="mscrm-Disclaimer"/></div>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
