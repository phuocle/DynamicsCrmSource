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
Mscrm.S2SUpgradePageHelper.enableFeature();
}

function OnUserCancel() {
Mscrm.S2SUpgradePageHelper.logMetricsforWizard(Mscrm.S2SUpgradePageHelper.telemetryLogEventWizardLoad, "S2SValidateSites");
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function showHideErrorLog() {
document.getElementById('errorlogid').value = CrmEncodeDecode.CrmHtmlDecode(XUI.Html.GetText(document.getElementById('errorlogid')));
if (document.getElementById('textHolder').style.display == 'inline') {
document.getElementById('textHolder').style.display = 'none';
document.getElementById('errorloglink').innerHTML = '+ ' + Var_Error_Log_Text;
}
else {
document.getElementById('textHolder').style.display = 'inline';
document.getElementById('errorloglink').innerHTML = '- ' + Var_Error_Log_Text;
}
}

function windowOnLoad() {
Mscrm.S2SUpgradePageHelper.renderStageControl(Mscrm.S2SIntegrationStage.validateSites)
$get('buttonNext').disabled = true;
$get('buttonBack').disabled = true;
$get('buttonCancel').onclick = OnUserCancel;
$get('buttonBack').onclick = moveBack;

if ($get('absoluteURLWarningTable') == null)
Mscrm.S2SUpgradePageHelper.retrieveSites(Mscrm.S2SIntegrationStage.validateSites);
else
$get('buttonBack').disabled = false;
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div id="formcontent">
<div id="S2SIntegrationStageControl" style="width: 100%;margin-bottom:28px;margin-top:3px"></div>
<table id="SiteValidationStatus" width="100%" runat="server" cellpadding="0" cellspacing="0" >
<tr id="NoSitesFound" style="display: none">
<td class = "mscrm-text-validatesites"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.NoSitesFound" runat="server"/></td>
</tr>
</table>
<table id="SitesValidationStatus" width="50%" runat="server" style="display:none" cellpadding="0" cellspacing="0">
<colgroup>
<col width="40%" />
<col />
</colgroup>
<tr>
<td class="mscrm-text-validatesites" width="105px"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Summary.ToValidate" runat="server"/>&nbsp;</td>
<td class="mscrm-text-validatesites"><label id="ValidationStatus"></label></td>
</tr>
</table>
<table id="StatusReportSectionData" class="mscrm-sites-TableSites" border="0" cellpadding="0" cellspacing="0" style="display:none; margin-top:10px;">
<colgroup>
<col width="25%"/>
<col width="40%"/>
<col width="35%"/>
</colgroup>
<tr>
<td class="mscrm-validateSite-HeaderColumn"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Name' runat='server'/>" >
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Name" runat="server"/>
</td>
<td class="mscrm-validateSite-HeaderColumn" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.AbsoluteURL' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.AbsoluteURL" runat="server"/>
</td>
<td class="mscrm-validateSite-HeaderColumn" style="text-align:center" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Status' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Report.Status" runat="server"/>
</td>
</tr>
<tr>
<td colspan="4" width="100%" style="padding-bottom:20px;padding-top:20px">
<div id="statusDiv" class="mscrm-siteValidation-OverflowDiv" >
<table width="100%" id="StatusReportTable" class="mscrm-docmgmt-TableGeneric" cellpadding="0" cellspacing="0">
<colgroup>
<col width="25%"/>
<col width="40%"/>
<col width="35%"/>
</colgroup>
</table>
</div>
</td>
</tr>
</table>
<table style=" display:none; margin-bottom:20px;margin-top:24px;" id="InvalidSitesMessage" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
<div class="mscrm-text-SelectedStage mscrm-text-dark"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.InvalidSites.Message1" runat="server"/>
<span id="cannotEnableMsg" style=" display:none;" class="mscrm-text-S2Swizard"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.InvalidSites.Message2" runat="server"/></span>
</div>
<div style="margin-top:20px;margin-bottom:7px">
<a id ="errorloglink" onclick="showHideErrorLog();" style="display:none">+
<loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Status.ErrorLog" runat="server"/>
</a>
</div>
<div id="textHolder" style="display: none;padding-bottom:30px">
<textarea id="errorlogid" rows="5" name="S1" cols="50" style="width: 98%!important; background-color:#eeeeee"></textarea>
</div>
</td>
</tr>
</table>
<table style=" display:none;margin-bottom:10px; margin-top:50px;" id="ValidSitesMessage" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td >
<div class="mscrm-text-SelectedStage mscrm-text-dark" style="display:inline"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.ValidSites.Message3" runat="server"/></b></div>
<div id = "ValidSitesMessageNote" class="mscrm-text-S2Swizard" style="display:inline" runat="server"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.ValidSites.Message1" runat="server"/></div>
</td>
</tr>
</table>
</div>
</frm:WizardForm>
</body>
</html>
