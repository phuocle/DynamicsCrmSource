<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SUpgradeSettingPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

Sys.Application.add_load(pageLoad);


function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Tools/DocumentManagement/S2SUpgardeSettingsWizard/S2SDefaultSite.aspx");
return new NextPageDefinition(oUrl);
}

function moveNext()
{
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function OnUserCancel()
{
Mscrm.S2SUpgradePageHelper.logMetricsforWizard(Mscrm.S2SUpgradePageHelper.telemetryLogEventWizardCancel, "S2SUpgradeSettingPage");
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function pageLoad()
{
$get('buttonCancel').onclick = OnUserCancel;
Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationStart, Mscrm.S2SUpgradePageHelper.enableSharePointIntegration_CommandName);
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div id="formcontent">
<table id="InsufficientPrivileges" width="100%" runat="server" cellpadding="0" cellspacing="0" >
<tr>
<td>
<div class ="mscrm-validationPageHeader"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Header" runat="server"/></b></div>
<div class ="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top:10px;"><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege" runat="server"/></div>
<div id="Div1" class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top:20px;" runat="server">
<ul class="mscrm-s2slist">
<li><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege1" runat="server"/></li>
<li><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege2" runat="server"/></li>
<li><loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege3" runat="server"/></li>
</ul>
</div>
</td>
</tr>
</table>
<div id="EnableS2SWizardDescription" runat="server">
<div id="descriptionHeader" style="width:100%;" class = "mscrm-text-SelectedStage mscrm-text-dark"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description" runat="server"/></div>
<div id="S2SChangesMessage" >
<div>
<div style="display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div>&nbsp;<div style="display:inline" class = "mscrm-text-S2Swizard"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description1" runat="server"/></div>
</div>
<div>
<div style= "display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div>&nbsp;<div style="display:inline" class = "mscrm-text-S2Swizard"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description2" runat="server"/></div>
</div>
<div>
<div style="display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div>&nbsp;<div style="display:inline" class = "mscrm-text-S2Swizard"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description3" runat="server"/></div>
</div>
</div>
<div id="S2SSitesMessage" style="width:100%; margin-bottom:8px" >
<div class="mscrm-text-S2Swizard" style="margin-top:11px"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description4" runat="server"/></div>
</div>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display:none;">
<div id="progressInner" style="height: 80%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.Validating" runat="server"/>
</div>
</div>
</div>
</div>
</div>
</frm:WizardForm>
</body>
</html>
