<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.OneNoteIntegration" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
function selectAllEntities() {
var entitySelectionTable = $get("entitySelectionTable");
var checkAll = $get("checkAll");
for (i = 0; i < entitySelectionTable.rows.length; i++) {
var chkBox = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(entitySelectionTable.rows[i]));
chkBox.checked = checkAll.checked;
}
ONEN_ENTITY_COUNT_SELECTED = checkAll.checked ? ENTITY_COUNT : 0;
}

function onEntityCheckBoxClick(domEvent) {
var chkBox = domEvent.target;
var chkAll = $get("checkAll");

if (chkBox.checked)
ONEN_ENTITY_COUNT_SELECTED++;
else
ONEN_ENTITY_COUNT_SELECTED--;

if (ONEN_ENTITY_COUNT_SELECTED == ENTITY_COUNT) {
chkAll.checked = true;
}
}


function moveNext() {
if (Mscrm.OneNoteSettingsPageHelper.savePagePropertiesForOneNote(ENTITY_COUNT)) {
var entityOneNoteIntegrationXml = WizardGetProperty("EntityOneNoteEnabledXml");
if (!isNullOrEmptyString(entityOneNoteIntegrationXml)) {
Mscrm.OneNoteSettingsPageHelper.saveOneNoteSettings(SaveOneNotetSettingsCallBackFunction);
}
else {
WizardNavigate(_WizardNavigateEnum.CLOSE);
}
}

}

function SaveOneNotetSettingsCallBackFunction(oResult) {
if (oResult.Success == false) {
alert(LOCID_DOCM_SAVEERROR);
Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationFailure, Mscrm.S2SUpgradePageHelper.enableOneNote_CommandName);
return;
}
else {
WizardNavigate(_WizardNavigateEnum.CLOSE);
Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationSuccess, Mscrm.S2SUpgradePageHelper.enableOneNote_CommandName);
}
}

function OnUserCancel() {
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function pageLoad() {
var entityTable = $get("entitySelectionTable");

if (Mscrm.Utilities.isIE7()) {
entityTable.style.width = "99.5%";
}
else {
entityTable.style.width = "100%";
}

var checkAutoOneNote = $get("checkAutoOneNote");
$get('buttonCancel').onclick = OnUserCancel;
Mscrm.OneNoteSettingsPageHelper.initializeControls(ENTITY_COUNT);

if (ONEN_ENTITY_COUNT_SELECTED == ENTITY_COUNT) {
var chkAll = $get("checkAll");
chkAll.checked = true;
}

Mscrm.S2SUpgradePageHelper.logTelemetryForOperation(Mscrm.S2SUpgradePageHelper.operationStart, Mscrm.S2SUpgradePageHelper.enableOneNote_CommandName);
}
Sys.Application.add_load(pageLoad);

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">

<table id="entityTable" width="100%" cellpadding=1 cellspacing=1>
<tr>
<td width="100%" id="oneNoteDescription" runat="server"><label><loc:Text ResourceId="Web.Tools.OneNoteSettings.SettingsPage.EntityTable.Description" runat="server"/></label></td>
</tr>
<tr><td>
<br />

<table class="mscrm-onenoteenb-TableEntities" border="1" cellpadding="0" cellspacing="0">
<tr>
<td class="mscrm-onenoteenb-HeaderColumn1">
<ui:CheckBox id="checkAll" onclick="selectAllEntities();" runat="server"/>
</td>
<td class="mscrm-onenoteenb-HeaderColumn2">
<nobr>
<loc:Text ResourceId="Object_Plural_Entity" runat="server" />
</nobr>
</td>
</tr>
<tr><td colspan="2" height="100%">
<div class="mscrm-onenoteenb-OverflowDiv">
<table id="entitySelectionTable" class="mscrm-onenoteenb-TableGeneric" cellpadding="0" cellspacing="0" style="width:100%" runat="server">
</table>
</div>
</td></tr>
</table>
</td></tr>
</table>
<table id="autoCreationTable" width="100%" cellpadding="1" cellspacing="1">
<tr>
<td width="100%" id="autoOneNoteDescription" runat="server">
<label><loc:Text ResourceId="Web.Tools.OneNoteSettings.SettingsPage.AutoCreation.Description" runat="server" /></label>
</td>
</tr>
<tr>
<td>
<br />
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
