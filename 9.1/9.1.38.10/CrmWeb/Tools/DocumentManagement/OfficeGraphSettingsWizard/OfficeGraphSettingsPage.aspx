<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.OfficeGraphSettingsPage" %>
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

function EnableDisableOfficeGraphSettings()
{
var enableOfficeGraph = $get("enableOfficeGraph");


if (enableOfficeGraph.checked != IS_OFFICEGRAPHINTEGRATION_ENABLED)
{
$get('buttonNext').disabled = false;
}
else
{
$get('buttonNext').disabled = true;
}
}

function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Tools/DocumentManagement/OfficeGraphSettingsWizard/OfficeGraphSettingsFinalize.aspx");
return new NextPageDefinition(oUrl, Mscrm.OfficeGraphSettingsPageHelper.getWizardDataToPost());
}

function moveNext()
{
if (Mscrm.OfficeGraphSettingsPageHelper.savePageProperties(ENTITY_COUNT, IS_OFFICEGRAPHINTEGRATION_ENABLED))
{
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}

function OnUserCancel()
{
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function enableOfficeGraphIntegration(){}

function pageLoad()
{
if (Mscrm.Utilities.isIE7())
{
officeGraphTable.style.width = "99.5%";
}
else
{
officeGraphTable.style.width = "100%";
}

$get('buttonCancel').onclick = OnUserCancel;

$get('buttonNext').disabled = true;

}

Sys.Application.add_load(pageLoad);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table id="officeGraphTable" width="100%" cellpadding=1 cellspacing=1>
<tr>
<td>
<br />
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td>
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.OfficeGraphIntegration.DialogDescription" runat="server" />
</td>
</tr>
<tr><td style="height:30px;">&nbsp;</td></tr>
<tr>
<td><ui:CheckBox id="enableOfficeGraph" onclick="EnableDisableOfficeGraphSettings();" runat="server"/>
<label for="enableOfficeGraph" class="ms-crm-ofcGraph-chkboxLabel">
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.OfficeGraphIntegration.Title" runat="server" />
</label>
</td>
</tr>
<tr>
<td style="color:Red" id="integrationRequiredMessage" runat="server">
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
