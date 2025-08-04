<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SUpgradeFinalize" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

function moveNext() {
Mscrm.S2SUpgradePageHelper.finalizeSettings();
}

function moveBack() {
WizardNavigate(_WizardNavigateEnum.BACK);
}

function OnUserCancel() {
WizardNavigate(_WizardNavigateEnum.CANCEL);
}
function pageLoad() {
$get('buttonNext').disbled = true;
$get('progressInner').style.display = 'block';
Mscrm.S2SUpgradePageHelper.enableFeature();
}
Sys.Application.add_load(pageLoad);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table id="desription" width="100%" cellpadding="1" cellspacing="1">
<tr>
<td width="100%"><loc:Text ResourceId="Web.Tools.S2SUpgrade.SettingsFinalizePage.Description" runat="server"/></td>
</tr>
</table>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display:none;">
<div id="progressInner" style="height: 80%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.Validating" runat="server"/>
</div>
</div>
</div>
</frm:WizardForm>
</body>
</html>
